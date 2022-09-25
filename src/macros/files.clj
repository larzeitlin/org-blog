(ns ^:dev/always macros.files
  (:require [clojure.java.io :as io]
            [clojure.string :as str]
            [cljs.env :as env]
            [shadow.resource :as sr]))

(defmacro posts []
  (->> "./resources/posts"
       io/file
       file-seq
       (mapv str)
       (filterv #(str/ends-with? % ".org"))
       (mapv (fn [filename]
               [filename
                (-> filename (str/split #"\./resources/") second ((partial sr/slurp-resource &env)))]))
       (into {})))
