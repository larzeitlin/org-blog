(ns ^:dev/always org-blog.posts
  (:require  [macros.files :as macf]
             [reagent.session :as session]
             [org-parser.core :as op]
             [clojure.string :as str]
             [clojure.walk :as walk]))

(def filename->post
  (->> (macf/posts)
       (reduce-kv (fn [m filename post]
                    (assoc m filename (op/read-str post)))
                  {})))

(defn =type? [t v] (= (first v) t))

(defn ast->hiccup [form]
  (if (vector? form)
    (let [[kw & content] form]
      (case kw
        :text             (into [:p] content)
        :text-normal      (first content)
        :text-sty-bold    (into [:b] content)
        :text-sty-italic  (into [:i] content)
        :empty-line       [:br]
        :link-format      [:p "TODO! links!!"]
        :list-item-line   [:p "TODO! lists!!"]
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
  (->> section :section :ast (map #(walk/postwalk ast->hiccup %)) (into [:div])))

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

(defn posts-page [path-for]
  (fn []
    [:span.main
     [:h1 "The posts"]
     [:ul (map (fn [[filename post]]
                 (let [title (-> post extract-post-metadata :title)]
                   [:li {:name title :key title}
                    [:a {:href (path-for :post {:post-id (js/encodeURI filename)})}
                     title]]))
               filename->post)]]))

(defn post-page []
  (fn []
    (let [routing-data (session/get :route)
          post-filename (get-in routing-data [:route-params :post-id])]
      (->> post-filename (get filename->post) parse-post))))
