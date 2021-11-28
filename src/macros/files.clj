(ns macros.files
  (:refer-clojure :exclude [slurp])
  (:require [clojure.java.io :as io]
            [clj-org.org :as org-clj]
            [clojure.string :as str]))

(defmacro slurp [file]
  (clojure.core/slurp file))


(defmacro ls [dir]
  (->> dir io/file file-seq (mapv str)))


(defmacro slurp-posts []
  (->> "./posts"
       io/file
       file-seq
       (mapv str)
       (filter #(str/ends-with? % ".org"))
       (mapv #(-> %
                  clojure.core/slurp
                  org-clj/parse-org
                  (merge {:id (-> % hash str)
                          :filename %})))))
