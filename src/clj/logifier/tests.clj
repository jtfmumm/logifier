(ns tests
      (:use [logifier]))


(clear-model model)
(reveal model)

(affirm \a model)
(affirm \b model)
(affirm ["lnot" \c] model)
(affirm ["lnot" \d] model)

(evaluate ["lnot" \a] model)
(evaluate ["lor" \a \b] model)
(evaluate ["land" \b \c] model)
(evaluate ["lor" \d ["lnot" \c]] model)
(evaluate ["lcond" \c \a] model)

(affirm ["lor" \e \f] model)
(affirm ["lcond" \g \h] model)
(affirm ["lcond" ["lnot" \i] ["lnot" \j]] model)
(evaluate ["lor" ["lnot" \g] \h] model)
(evaluate ["lcond" \g \h] model)
(evaluate ["lor" \f \e] model)
(reveal model)
(affirm ["lor" \c \m] model)
(evaluate \m model)
(reveal model)

(affirm ["lnot" \f] model)
(affirm ["lnot" \h] model)
(affirm \j model)
(list-names model)
(reveal model)

(affirm ["lor" ["lnot" ["lnot" \i]] ["lnot" \j]] model)

(evaluate \i model)
(evaluate \e model)
(evaluate \g model)
(evaluate \i model)

(reveal model)

(def x ["lor" ["lnot" \z] ["lnot" \k]])




(defn oror [prop this-model]
                      (cond
                           (= (evaluate (first prop) this-model) "false") (affirm (frest prop) this-model)
                           (= (evaluate (frest prop) this-model) "false") (affirm (first prop) this-model)
                          :else (insert-prop (vector "lor" (first prop) (frest prop)) "true" this-model)
                       ))

(oror x model)

(evaluate \w model)

(affirm "hi" model)
(affirm x model)

(affirm \z model)

(clear-model model)
(affirm x model)
(affirm \y model)

(list-names model)
(reduce )

(map #(affirm % model) (list-names model))



(reveal model)
(clear-model model)
