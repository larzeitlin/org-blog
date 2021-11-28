(ns macros.files
  (:refer-clojure :exclude [slurp])
  (:require [clojure.java.io :as io]
            [clj-org.org :as org-clj]
            [clojure.string :as str]))

(defn filename->blog-post [filename]
  (let [id (-> filename hash str)
        post (-> filename
                 clojure.core/slurp
                 org-clj/parse-org)]
    [id (merge post {:id       id
                     :filename filename})]))

(defmacro slurp-posts []
  (->> "./posts"
       io/file
       file-seq
       (mapv str)
       (filter #(str/ends-with? % ".org"))
       (mapv filename->blog-post)
       (into {})))
