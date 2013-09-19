(ns tests
      (:use [logifier])
    (:use [clojure.inspector :include (atom?)]))

(list-names model)

(affirm (clean-up \a) model)



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
