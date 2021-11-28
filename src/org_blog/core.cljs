(ns org-blog.core
  (:require
   [reagent.core :as reagent :refer [atom]]
   [reagent.dom :as rdom]
   [shadow.resource :as r]
   [reagent.session :as session]
   [org-blog.posts :as p]
   [reitit.frontend :as reitit]
   [accountant.core :as accountant]))

;; -------------------------
;; Routes

(def id->post
  (->> (p/posts)
       (mapv (fn [{:keys [id] :as post}] [id post]))
       (into {})))


(def router
  (reitit/router
   [["/" :index]
    ["/posts"
     ["" :posts]
     ["/:post-id" :post]]
    ["/about" :about]]))

(defn path-for [route & [params]]
  (if params
    (:path (reitit/match-by-name router route params))
    (:path (reitit/match-by-name router route))))

;; -------------------------
;; Page components

(defn home-page []
  (fn []
    [:span.main
     [:h1 "Welcome to my blog"]
     [:p (str (get id->post -1157620694))]
     [:ul
      [:li [:a {:href (path-for :posts)} "Blog posts"]]
      [:li [:a {:href "/broken/link"} "Broken link"]]]]))



(defn posts-page []
  (fn []
    [:span.main
     [:h1 "The posts"]
     [:ul (map (fn [{:keys [title id]}]
                 [:li {:name (str "post-" title) :key (str "post-" title)}
                  [:a {:href (path-for :post {:post-id id})} "Post: " title]])
               (p/posts))]]))


(defn posts []
  (fn []
    (let [routing-data (session/get :route)
          post-id (get-in routing-data [:route-params :post-id])]
      (->> post-id (get id->post) :content))))


(defn about-page []
  (fn [] [:span.main
          [:p
           [:h1 "About"]
           [:p "hello"]]]))


;; -------------------------
;; Translate routes -> page components

(defn page-for [route]
  (case route
    :index #'home-page
    :about #'about-page
    :posts #'posts-page
    :post #'posts))


;; -------------------------
;; Page mounting component

(defn current-page []
  (fn []
    (let [page (:current-page (session/get :route))]
      [:div
       [:header
        [:p [:a {:href (path-for :index)} "Home"] " | "
         [:a {:href (path-for :about)} "About"]]]
       [page]
       [:footer
        [:p "This is a footer"]]])))

;; -------------------------
;; Initialize app

(defn mount-root []
  (rdom/render [current-page] (.getElementById js/document "app")))

(defn init! []
  (accountant/configure-navigation!
   {:nav-handler
    (fn [path]
      (let [match (reitit/match-by-path router path)
            current-page (:name (:data  match))
            route-params (:path-params match)]
        (session/put! :route {:current-page (page-for current-page)
                              :route-params route-params})))
    :path-exists?
    (fn [path]
      (boolean (reitit/match-by-path router path)))})
  (accountant/dispatch-current!)
  (mount-root))
