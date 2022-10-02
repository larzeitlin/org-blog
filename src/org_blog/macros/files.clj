(ns ^:dev/always org-blog.macros.files
  (:require [clojure.java.io :as io]
            [clojure.string :as str]
            [cljs.env :as env]
            [shadow.resource :as sr]))

(def resources-path-prefix "./resources/")

(def posts-path-segement "posts/")

(def posts-path-prefix (str resources-path-prefix posts-path-segement))

(defn file-path->filename [file-path]
  (str/replace-first file-path posts-path-prefix ""))

(defn resources-relative-file-path [file-path]
  (str/replace-first file-path resources-path-prefix ""))

(defmacro posts
  "Returns a map of {filename -> file contents} of all org files under `./resources/posts`."
  []
  (->> posts-path-prefix
       io/file
       file-seq
       (mapv str)
       (filterv #(str/ends-with? % ".org"))
       (mapv (fn [file-path]
               [(file-path->filename file-path)
                (sr/slurp-resource &env (resources-relative-file-path file-path))]))
       (into {})))
