(ns logifier
      (:use [clojure.inspector :include (atom?)]))


;Utilities
(defn frest [x]
      (first (rest x)))

(defn frerest [x]
      (frest (rest x)))


;Set up our model
(def model (atom #{}))

(def assertions (atom #{}))


;Basic operations
(defn clear-model []
         (reset! model {}))

(defn insert-prop [prop value]
      (if (has-name? model prop) "Duplicate Entry"
           (if
               (wff? prop) (swap! model conj {:name prop :value value})
               (list "ERROR: Not a well-formed formula:" prop))))

(defn affirm [prop]
      (do
          (swap! assertions conj {:name prop})
          (cond
               (atom? prop) (insert-prop prop "true")
               :else (decomp prop))))

(defn reveal [this-model]
      (deref this-model))

(defn operator? [input]
      (or
           (= input "lnot")
           (= input "lor")
           (= input "land")
           (= input "lcond")))

(defn wff? [prop]
      (cond
           (atom? prop) true
           (not (vector? prop)) false
           (= (first prop) "lnot") (if
                                                 (= (count (rest prop)) 1) (wff? (frest prop))
                                                 false)
           (operator? (first prop)) (if
                                                 (= (count (rest prop)) 2) (and (wff? (frest prop)) (wff? (frerest prop)))
                                                 false)
       ))


;Decompose
(defn decomp [prop]
    (let [operate (first prop)]
       (cond
             (= operate "lnot") (decomp-lnot (frest prop))
             (= operate "lor") (decomp-lor (vector (frest prop) (frerest prop)))
             (= operate "land") (do
                                                  (affirm (frest prop))
                                                  (affirm (frerest prop)))
             ;(= operate "lcond") (affirm  (cons "lor" (cons (cons "lnot" (list (frest prop))) (list (frest (rest prop))))))
             (= operate "lcond") (affirm (vector "lor" (vector "lnot" (frest prop)) (frest (rest prop))))
             :else "ERROR"
             )))

(defn decomp-lnot [prop]
    (let [operate (or (atom? prop)(first prop))]
      (cond
             (atom? prop) (insert-prop prop "false")
             (= operate "lnot") (affirm (frest prop))
             (= operate "lor") (decomp ["land" ["lnot" (frest prop)] ["lnot" (frerest prop)]])
             (= operate "land") (decomp ["lor" ["lnot" (frest prop)] ["lnot" (frerest prop)]])
             (= operate "lcond") (decomp ["land" (frest prop)] ["lnot" (frerest prop)])
             :else (list "decomp-lnot ERROR" prop)
           )))

(defn decomp-lor [prop]
      (cond
           (= (evaluate (first prop)) "false") (affirm (frest prop))
           (= (evaluate (frest prop)) "false") (affirm (first prop))
          ;:else (insert-prop (cons "lor" (list prop)) "true")
          :else (insert-prop (vector "lor" (first prop) (frest prop)) "true")
       ))


;Evaluate
(defn evaluate [prop]
      (cond
         (atom? prop) (find-value (deref model) prop)
         :else (evaluate-composite prop)))

(defn evaluate-composite [prop]
    (let [operate (first prop)]
      (cond
             (= operate "lnot") (lnot (frest prop))
             (= operate "lor") (lor (rest prop))
             (= operate "land") (land (rest prop))
             (= operate "lcond") (lcond (rest prop))
             :else "ERROR"
             )))

(defn lnot [prop]
      (cond
           (= (evaluate prop) "true") "false"
           (= (evaluate prop) "false") "true"
           :else "unknown"))

(defn lor [prop]
      (let [one (first prop)
              two (frest prop)]
      (cond
           (= (evaluate one) "true") "true"
           (= (evaluate two) "true") "true"
           (and (= (evaluate one) "false") (= (evaluate two) "false")) "false"
           (has-name? model (list "lor" (list one two))) "true"
           :else "unknown"
           )))

(defn land [prop]
      (let [one (first prop)
              two (frest prop)
              initial (evaluate one)]
      (cond
           (= initial "true") (evaluate two)
           :else initial
           )))

(defn lcond [prop]
      (let [one (first prop)
              two (frest prop)]
           (evaluate (cons "lor" (cons (cons "lnot" (list one)) (list two))))
                          ))


;Getting values
(defn get-value [name]
      (:value (first (filter #(= (:name %) name) (deref model)))))

(:value (first (filter #(= (:name %) \q) (deref model))))

(defn has-name? [this-map name]
      (cond (= (filter #(= % name) (list-names this-map)) (list name)) true
              ;(get (deref this-map) :name) name) true
                :else false))

(get (deref model) :name)

(defn list-names [model]
    (map #(get % :name) (deref model)))

(defn find-value [this-map name]
    (let [answer (get-value  name)]
          (if (= answer nil) "unknown"
               answer)))


;Tests
(reveal model)
(affirm \a)
(affirm ["lnot" \b])
(evaluate \b)

(affirm ["lnot" ["land" \c \d]])
(affirm \d)
(affirm ["land" ["lnot" \f] \g])
(evaluate \f)
(affirm ["lnot" ["lnot" ["lnot" \m]]])
(affirm ["lcond" \o ["lnot" \p]])

(affirm ["lor" ["lnot" \z] ["lnot" \y]])

(evaluate ["lcond" \o ["lnot" \p]])


(reveal model)


;End tests






;SYNTAX
;(affirm ["land" \x \y])
;(affirm ["land" ["lnot" \c] \d])
;(evaluate ["lor" \a \t])

;(reveal model)

;(affirm ["lor" ["land" \o \s] ["lnot" \u]])
;(evaluate ["lor" ["land" \o \s] ["lnot" \u]])

;(affirm ["lnot" ["lor" ["land" \x \y] ["lnot" \z]]])

;(reveal model)




