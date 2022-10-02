(ns org-blog.hiccup
  (:require [clojure.string :as str]
            [clojure.walk :as walk]))

(defn =type? [t v]
  (and (vector? v)
       (= (first v) t)))

(defn first-val-for-item-of-type [t c]
  (->> (filter (partial =type? t) c)
                               first
                               second))

(defn list-group [group]
  (let [bullet-types (map (partial first-val-for-item-of-type :list-item-bullet) group)
        indent-groups (partition-by (partial first-val-for-item-of-type :indent) group)
        list-type (cond
                    (not-any? int? bullet-types)
                    :unordered-list

                    (and (every? int? bullet-types)
                         (apply <= bullet-types))
                    :ordered-list

                    :else
                    (throw (js/Error. "unexpected list group type: " group)))]
    (into [list-type] (if (> (count indent-groups) 1)
                        (map list-group indent-groups)
                         group))))

(defn group-list-items [forms]
  (->> (partition-by #(=type? :list-item-line %) forms)
       (map (fn [group]
              (if (=type? :list-item-line (first group))
                (list-group group)
                group)))))

(defn link-ext-other->link [url-parts]
  (let [scheme (->> url-parts
                    (filter #(=type? :link-url-scheme %))
                    first
                    second)
        url-rest (->> url-parts
                      (filter #(=type? :link-url-rest %))
                      first
                      second)
        full-url (str scheme ":" url-rest)]
    (if (or (str/ends-with? full-url ".png")
            (str/ends-with? full-url ".jpg")
            (str/ends-with? full-url ".jpeg"))
      [:img {:src full-url}]
      [:a {:href full-url} full-url])))

(defn ast->hiccup [form]
  (if (vector? form)
    (let [[kw & content] form]
      (case kw
        :text             (into [:p] content)
        :text-normal      (first content)
        :text-sty-bold    (into [:b] content)
        :text-sty-italic  (into [:i] content)

        :empty-line       [:br]
        :link-format      (first content)
        :link             (first content)
        :link-ext         (first content)
        :link-ext-other   (link-ext-other->link content)

        :ordered-list       (into [:ol] content)
        :unordered-list     (into [:ul] content)
        :list-item-line     (into [:li] content)
        :indent             (first content)
        :list-item-bullet   nil
        :list-item-checkbox nil

        form))
    form))

(defn extract-post-metadata [post]
  (->> post
       :preamble
       :section
       :ast
       (filter (partial =type? :affiliated-keyword-line))
       (map (fn [[_ [_ keyname] [_ value]]]
              [(-> keyname str/lower-case keyword) (str/trim value)]))
       (into {})))

(defn section-title->hiccup [section]
  [(keyword (str "h" (-> section :headline :level)))
   (->> section
        :headline
        :title
        (filter (partial =type? :text-normal))
        (map second)
        (apply str))])

(defn section-body->hiccup [section]
  (->> section
       :section
       :ast
       group-list-items
       (map #(walk/postwalk ast->hiccup %))
       (into [:div])))

(defn parse-post [{:keys [headlines] :as post}]
  (let [{:keys [title author date]} (extract-post-metadata post)]
    (into [:div
           [:h1 title]
           [:h2 author]
           [:h3 date]
           [:br]]
          (for [section headlines]
            [:div
             (section-title->hiccup section)
             (section-body->hiccup section)]))))
