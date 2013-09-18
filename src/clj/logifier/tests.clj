(ns tests
      (:use [logifier]))

(reveal model)

(affirm \a)
(affirm \b)
(affirm ["lnot" \c])
(affirm ["lnot" \d])

(evaluate ["lnot" \a])
(evaluate ["lor" \a \b])
(evaluate ["land" \b \c])
(evaluate ["lor" \d ["lnot" \c]])
(evaluate ["lcond" \c \a])

(affirm ["lor" \e \f])
(affirm ["lcond" \g \h])
(affirm ["lcond" ["lnot" \i] ["lnot" \j]])

(evaluate ["lor" ["lnot" \g] \h])

(affirm ["lor" \c \m])
(evaluate \m)
(reveal model)

(affirm ["lnot" \f])
(affirm ["lnot" \h])
(affirm \j)

(evaluate \e)
(evaluate \g)
(evaluate \i)

(reveal model)

(affirm \g)
(reveal model)

(recalculate model)
