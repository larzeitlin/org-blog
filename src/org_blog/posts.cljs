(ns ^:dev/always org-blog.posts
  (:require
   [org-blog.hiccup :as obhic]
   [org-blog.macros.files :as macf]
             [reagent.session :as session]
             [org-parser.core :as op]))

(def filename->post
  (->> (macf/posts)
       (reduce-kv (fn [m filename post]
                    (assoc m filename (op/read-str post)))
                  {})))

(defn posts-page [path-for]
  (fn []
    [:span.main
     [:h1 "The posts"]
     [:ul (map (fn [[filename post]]
                 (let [title (-> post obhic/extract-post-metadata :title)]
                   [:li {:name title :key title}
                    [:a {:href (path-for :post {:post-id (js/encodeURI filename)})}
                     title]]))
               filename->post)]]))

(defn post-page []
  (fn []
    (let [routing-data (session/get :route)
          post-filename (get-in routing-data [:route-params :post-id])]
      (->> post-filename (get filename->post) obhic/parse-post))))
