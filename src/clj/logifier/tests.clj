(ns tests
    (:require [clojure.string :as str])
    (:use [clojure.inspector :include (atom?)]))

(list-names model)

(affirm (clean-up \a) model)

(defn frest [x]
      (first (rest x)))

(defn frerest [x]
      (frest (rest x)))

(defn exclusive-or [a b]
      (or
           (and a (not b))
           (and b (not a))))

(clear-model model)
(reveal model)

(affirm \a model)
(affirm \b model)
(affirm ["lnot" \c] model)
(affirm ["lnot" \d] model)

(list-names model)

(evaluate ["lnot" \a] model) ;f
(evaluate ["lor" \a \b] model) ;t
(evaluate ["land" \b \c] model) ;f
(evaluate ["lor" \d ["lnot" \c]] model) ;t
(evaluate ["lcond" \c \a] model) ;t

(affirm ["lor" \e \f] model)
(affirm ["lcond" \g \h] model)
(affirm ["lcond" ["lnot" \i] ["lnot" \j]] model)

(list-names model)

(evaluate ["lor" ["lnot" \g] \h] model) ;t
(evaluate ["lcond" \g \h] model) ;t
(evaluate ["lor" \f \e] model) ;t
(reveal model)

(affirm ["lor" \c \m] model)

(list-names model)

(evaluate \m model) ;t

(affirm ["lnot" \f] model)
(affirm ["lnot" \h] model)
(affirm \j model)

(list-names model)

(evaluate \i model) ;t
(evaluate \e model) ;t
(evaluate \g model) ;f

(clear-model model)

(def x ["lor" ["lnot" ["lnot" \i]] ["lnot" \j]])

(after ["lnot" \i] ["lnot" \j])

(clean-up ["lor" ["lnot" \i] \j])
(clean-up ["lcond" ["lnot" \j] \i])
(clean-up ["lor" \j \i])
(clean-up ["lnot" ["lcond" ["lnot" \j] \i]])


(affirm ["lcond" ["lnot" ["land" \b \c]] \d] model)

(affirm ["lor" ["lnot" ["lnot" \i]] ["lnot" \j]] model)

(clear-model model)
(list-names model)
(clean-up ["lbicond" \i \j])
(evaluate ["lbicond" \i \j] model)
(clean-up ["land" ["lor" ["lbicond" \i \j] \k] \m])

(affirm ["lcond" ["lnot" ["lor" ["land" \i ["lor" \j \k]] ["lor" \a \b]]] \c] model)

(affirm ["lnot" \i] model)
(affirm ["land" ["lnot" \a] ["lnot" \b]] model)

(evaluate \c model) ;t

(list-names model)

(reveal model)


(negate \a)

;Vector? Clean-up . (Paren?  Vectorize . Ignore)

(defn prefixered [expr]
      (cond
           (atom? expr) expr
           (= (count expr) 2)
                   (if
                         (or (= (first expr) "~") (= (first expr) "-")) (vector "lnot" (prefixer (frest expr)))
                         (list "ERROR: Not a valid operator:" expr))
           (= (count expr) 3)
                  (let [[left op right] expr]
                   (cond
                        (= op "v") (vector "lor" (prefixer left) (prefixer right))
                        (or (= op "&") (= op "+")) (vector "land" (prefixer left) (prefixer right))
                        (= op ">") (vector "lcond" (prefixer left) (prefixer right))
                        (= op "<>") (vector "lbicond" (prefixer left) (prefixer right))
                        :else (list "ERROR: Not a valid operator:" expr)
           :else (list "ERROR: Invalid syntax:" expr)
                         ))))

(defn prefixer [expr]
      (cond
           (atom? expr) expr
           (= (count expr) 2)
                   (vector "lnot" (prefixer (frest expr)))
           (= (count expr) 3)
                   (let [[left op right] expr]
                         (vector op (prefixer left) (prefixer right)))))

(declare vectorize)

(defn count-next-parens [input]
       (loop [remains input
                 parens 0
                 count 0]
                 (cond
                      (= (first remains) \))
                              (if (= parens 1)
                                    (+ count 1)
                                    (recur (subs remains 1) (- parens 1) (+ count 1)))
                      (= (first remains) \()
                                    (recur (subs remains 1) (+ parens 1) (+ count 1))
                      :else (recur (subs remains 1) parens (+ count 1)))))

 (defn clean-parse [input]
       (loop [output []
                  remains input]
                  (cond
                       (= (first remains) nil) output
                       (= (first remains) \space) (recur output (subs remains 1))
                       (= (first remains) \v) (recur (conj output "lor") (subs remains 1))
                       (= (first remains) \&) (recur (conj output "land") (subs remains 1) )
                       (= (first remains) \>) (recur (conj output "lcond") (subs remains 1))
                       (= (first remains) \<) (recur (conj output "lbicond") (subs remains 2))
                       (= (first remains) \~) (recur (conj output "lnot") (subs remains 1))
                       (= (first remains) \-) (recur (conj output "lnot") (subs remains 1))
                       (= (first remains) \() (recur (conj output (subs remains 0 (count-next-parens remains))) (subs remains (count-next-parens remains)))
                       (= (type (first remains)) java.lang.Character) (recur (conj output (first remains)) (subs remains 1))
                       :else (list "ERROR: something's amiss with input:" input)
 )))

 (defn vectorize [input]
      (loop [output []
                 remains input
                 count 0]
                 (cond
                      (= (first remains) \))
                              (if (= count 1)
                                    (vector (str/join output))
                                    (recur (conj output \)) (subs remains 1) (- count 1)))
                      (= (first remains) \()
                              (if (= count 0)
                                    (recur [] (subs remains 1) 1)
                                    (recur (conj output (first remains)) (subs remains 1) (+ count 1)))
                      :else (recur (conj output (first remains)) (subs remains 1) count))))

(defn nest-parse [input]
      (let [input (first (vectorize input))]
      (letfn [(parse [input]
                      (cond (= (type input) java.lang.Character) input
                                (= (type input) clojure.lang.PersistentVector) (clean-parse input)
                                (= (type input) java.lang.String) (if
                                                                                        (= (first input) \() (nest-parse input)
                                                                                                                     input)))]
                (into [] (map #(parse %) (clean-parse input))))))

 ;clean-parse acts on strings

(def y "p & (y v (q <> (l & r)))")

(prefixer (nest-parse y))

(first (vectorize y))
(clean-parse (first (vectorize y)))
(nest-parse y)

(vectorize y)

(clean-parse y)
(vectorize y)
(into [] (map #(nest-parse %) (clean-parse (first (vectorize "(y v (q > r))")))))
(into [] (map #(nest-parse %) (clean-parse y)))
(clean-parse (first (vectorize (subs y 4))))

 (type \a)

(clean-parse "j & (p v (q & j)) hi there")
(def x "(p v (q & j)) hi there")
x
(conj [\p] (subs x 0 (count-next-parens x)))
(subs x (count-next-parens x))

 (first "hi")
(subs "(hi there)" 1)
(count-next-parens "(p v (q & j))")
(vectorize "(hi (he) re)")

(conj [\j] \))

(type "(")
(first "(")
(nest-parse "(")

(first "j")

(nest-parse [])

(type "")

