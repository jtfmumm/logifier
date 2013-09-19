(ns parser
   (:use [clojure.inspector :include (atom?)])
   (:use [logifier]))


(defn infixer [expr]
      (cond
           (atom? expr) expr
           (= (count expr) 2)
                   (if
                         (or (= (first expr) "~") (= (first expr) "-")) (vector "lnot" (infixer (frest expr)))
                         (list "ERROR: Not a valid operator:" expr))
           (= (count expr) 3)
                  (let [[left op right] expr]
                   (cond
                        (= op "v") (vector "lor" (infixer left) (infixer right))
                        (or (= op "&") (= op "+")) (vector "land" (infixer left) (infixer right))
                        (= op ">") (vector "lcond" (infixer left) (infixer right))
                        (= op "<>") (vector "lbicond" (infixer left) (infixer right))
                        :else (list "ERROR: Not a valid operator:" expr)
           :else (list "ERROR: Invalid syntax:" expr)
                         ))))



(infixer [[\b "+" \d] "<>" ["-" \c]])

(infixer [\a \b \c])

