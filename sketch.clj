;; Anything you type in here will be executed
;; immediately with the results shown on the
;; right.
(def model (atom #{}))

(defn affirm [prop]
      (swap! model #(conj % prop)))

(defn reveal [this-model]
      (deref this-model))

(defn evaluate [prop]
      (cond (contains? (deref model) prop) prop
                :else "false"))

(affirm "p")

(evaluate "p")

(evaluate "q")





(reveal model)


(affirm '(lor ("p" "q")))

