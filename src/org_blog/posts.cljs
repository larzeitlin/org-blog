(ns org-blog.posts
  (:require  [shadow.resource :as r]
             [macros.files :as macf]
             [clojure.string :as str]))


(defn posts []
  (->> (macf/slurp-posts)
       #_(map clean-headers))
)
