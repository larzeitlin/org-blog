(ns org-blog.posts
  (:require  [shadow.resource :as r]
             [macros.files :as macf]
             [reagent.session :as session]
             [clojure.string :as str]
             [reitit.frontend :as reitit]))


(def id->posts (macf/slurp-posts))

(defn posts-page [path-for]
  (fn []
    [:span.main
     [:h1 "The posts"]
     [:ul (map (fn [[id {:keys [title]}]]
                 [:li {:name (str "post-" title) :key (str "post-" title)}
                  [:a {:href (path-for :post {:post-id id})} "Post: " title]])
               id->posts)]]))

(defn post-page []
  (fn []
    (let [routing-data (session/get :route)
          post-id (get-in routing-data [:route-params :post-id])]
      (->> post-id (get id->posts) :content))))

