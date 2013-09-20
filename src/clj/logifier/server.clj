(ns logifier.server
  (:require
            [compojure.handler :as handler]
            [compojure.route :as route]
            [ring.util.response :as response])
  (:use [hiccup.core]
           [compojure.core]
           [clojure.inspector :include (atom?)]))


;TODO
;Parse input


;LOGIC
;Utilities
(defn frest [x]
      (first (rest x)))

(defn frerest [x]
      (frest (rest x)))

(defn exclusive-or [a b]
      (or
           (and a (not b))
           (and b (not a))))


;Set up our model
(def model (atom #{}))

(def test-model (atom #{}))

(def assertions (atom #{}))


;Basic operations
(defn clear-model [this-model]
         (reset! this-model #{}))

(defn list-names [this-model]
    (map #(get % :name) (deref this-model)))

(defn has-name? [name this-model]
      (cond (= (filter #(= % name) (list-names this-model)) (list name)) true
                :else false))

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

(defn negate [prop]
      (if (and (not (atom? prop)) (= (first prop) "lnot"))
                (frest prop)
                (vector "lnot" prop)))

(defn nest-compare [one two]
      (compare (apply str (flatten one)) (apply str (flatten two))))

(defn before [one two]
      (cond
           (and (atom? one) (not (atom? two))) one
           (and (atom? two) (not (atom? one))) two
           :else (first (sort nest-compare [one two]))))

(defn after [one two]
      (cond
           (and (atom? one) (not (atom? two))) two
           (and (atom? two) (not (atom? one))) one
           :else (frest (sort nest-compare [one two]))))

(defn str->vector [expr]
      )

(defn prefixer [expr]
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

(defn clean-up [prop]
      (letfn [(decomp [prop]
                                (let [operate (first prop)]
                                       (cond
                                             (= operate "lnot") (decomp-lnot (frest prop))
                                             (= operate "lor") (decomp-lor (vector (frest prop) (frerest prop)))
                                             (= operate "land") (vector "land" (clean-up (frest prop)) (clean-up (frerest prop)))
                                             (= operate "lcond") (decomp (vector "lor" (clean-up (negate (frest prop))) (clean-up (frerest prop))))
                                             (= operate "lbicond") (decomp ["land"
                                                                                                     ["lcond" (frest prop) (frerest prop)]
                                                                                                     ["lcond" (frerest prop) (frest prop)]])
                                             :else (list "ERROR: not a valid operator" prop)
                                                 )))
                (decomp-lnot [prop]
                    (let [operate (or (atom? prop)(first prop))]
                      (cond
                             (atom? prop) (vector "lnot" prop)
                             (= operate "lnot") (clean-up (frest prop))
                             (= operate "lor") (decomp ["land" ["lnot" (frest prop)] ["lnot" (frerest prop)]])
                             (= operate "land") (decomp ["lor" ["lnot" (frest prop)] ["lnot" (frerest prop)]])
                             (= operate "lcond") (decomp ["land" (frest prop) ["lnot" (frerest prop)]])
                             (= operate "lbicond") (decomp ["lor"
                                                                                    ["lnot" ["lcond" (frest prop) (frerest prop)]]
                                                                                    ["lnot" ["lcond" (frerest prop) (frest prop)]]])
                             :else (list "decomp-lnot ERROR" prop)
                           )))
                (decomp-lor [prop]
                      (vector "lor"
                                         (clean-up (before (first prop) (frest prop)))
                                         (clean-up (after (first prop) (frest prop)))))
              ]
        (if
              (atom? prop) prop
              (decomp prop))))


;Getting values
(defn get-value [name this-model]
      (:value (first (filter #(= (:name %) name) (deref this-model)))))

(defn find-value [name this-model]
    (let [answer (get-value name this-model)]
          (if (= answer nil) "unknown"
               answer)))


;Evaluate
(defn tautology? [orig-prop]
      (if (atom? orig-prop) false
      (let [prop (clean-up orig-prop)
              one (frest prop)
              two (frerest prop)]
            (if (= (first prop) "lor")
                  (or
                         (= (negate one) two)
                         (= (negate two) one))
                 false))))

(defn contradiction? [orig-prop]
      (if (atom? orig-prop) false
      (let [prop (clean-up orig-prop)
              one (frest prop)
              two (frerest prop)]
            (if (= (first prop) "land")
                  (or
                         (= (negate one) two)
                         (= (negate two) one))
                 false))))

(defn evaluate [prop this-model]
      (let [prop (clean-up prop)]
      (letfn [(evaluate-composite [prop]
                    (let [operate (first prop)]
                         (cond
                             (= operate "lnot") (lnot (frest prop))
                             (= operate "lor") (lor (rest prop))
                             (= operate "land") (land (rest prop))
                             (= operate "lcond") (lcond (rest prop))
                             (= operate "lbicond") (land
                                                                          [["lcond" (frest prop) (frerest prop)]
                                                                          ["lcond" (frerest prop) (frest prop)]])
                             :else (list "ERROR: Invalid operator" prop)
                             )))
                (lnot [prop]
                      (cond
                           (= (evaluate prop this-model) "true") "false"
                           (= (evaluate prop this-model) "false") "true"
                           :else "unknown"))
                (lor [prop]
                      (let [one (first prop)
                              two (frest prop)]
                      (cond
                           (= (evaluate one this-model) "true") "true"
                           (= (evaluate two this-model) "true") "true"
                           (and (= (evaluate one this-model) "false") (= (evaluate two this-model) "false")) "false"
                           (or
                                (has-name? (vector "lor" one two) this-model)
                                (has-name? (vector "lor" two one) this-model)
                                ) "true"
                           :else "unknown"
                           )))
                (land [prop]
                      (let [one (first prop)
                              two (frest prop)
                              initial (evaluate one this-model)]
                      (cond
                           (= initial "true") (evaluate two this-model)
                           :else initial
                           )))
                (lcond [prop]
                     (let [one (first prop)
                             two (frest prop)]
                           (evaluate (vector "lor" (vector "lnot" one) two) this-model)
                                          ))
              ]
      (cond
         (tautology? prop) "true"
         (contradiction? prop) "false"
         (atom? prop) (find-value prop this-model)
         :else (evaluate-composite prop)))))


;Affirm


;Be sure to always clean-up initial props before affirming them!
(defn affirm [prop this-model]
      (let [prop (clean-up prop)]
      (letfn [(inconsistent? [prop]
                       (cond
                            (= (evaluate prop this-model) "false") true
                            (contradiction? prop) true
                            (and (not (atom? prop)) (= (first prop) "land"))
                                     (do
                                           (reset! test-model (deref this-model))
                                           (if (= (evaluate (frest prop) test-model) "false") true
                                                (do
                                                       (affirm (frest prop) test-model)
                                                       (= (evaluate (frerest prop) test-model) "false"))))
                            :else false))
                 (insert-prop [prop value this-model]
                      (letfn [(recalc []
                            (loop [initial-state (deref this-model)]
                                     (do
                                           (doseq [props (list-names this-model)] (affirm props this-model))
                                           (if-not (= initial-state (deref this-model)) (recur (deref this-model))))))]
                      (if (has-name? prop this-model) "Duplicate Entry"
                           (if
                               (wff? prop) (do
                                       (swap! this-model conj {:name prop :value value})
                                       (recalc))
                           (list "ERROR: Not a well-formed formula:" prop)))))
                 (decomp [prop]
                                (let [operate (first prop)]
                                       (cond
                                             (= operate "lnot") (insert-prop (frest prop) "false" this-model)
                                             (= operate "lor") (decomp-lor (vector (frest prop) (frerest prop)))
                                             (= operate "land") (do
                                                                                (affirm (frest prop) this-model)
                                                                                (affirm (frerest prop) this-model))
                                             :else (list "ERROR: not a valid operator" prop)
                                                 )))
                (decomp-lor [prop]
                      (cond
                           (= (evaluate (first prop) this-model) "false") (affirm (frest prop) this-model)
                           (= (evaluate (frest prop) this-model) "false") (affirm (first prop) this-model)
                          :else (insert-prop (vector "lor" (first prop) (frest prop)) "true" this-model)
                       ))
              ]
      (if (inconsistent? prop) "inconsistent"
      (do
          (swap! assertions conj {:name prop})
          (cond
               (atom? prop) (insert-prop prop "true" this-model)
               :else (decomp prop)))))))

(defn recalculate [this-model]
        (loop [initial-state (deref this-model)]
                 (do
                       (doseq [props (list-names this-model)] (affirm props this-model))
                       (if-not (= initial-state (deref this-model)) (recur (deref this-model))))))

(defn reveal [this-model]
      (deref this-model))


;VALIDITY/SOUNDNESS
(defn check-validity [conclusion premises]
      (do
          (clear-model test-model)
          (doseq [props premises] (affirm props test-model))
          (if (= (evaluate conclusion test-model) "true") "true" "false")))

(defn check-soundness [conclusion premises this-model]
      (do
          (if (= (check-validity conclusion premises) "true")
                (if (every? #(= (evaluate % this-model) "true") premises) "true" "false")
                "false")))


;SERVER
(defn view-layout [& content]
  (html
      [:head
           [:meta {:http-equiv "Content-type"
                        :content "text/html; charset=utf-8"}]
           [:title "Logifier"]]
      [:body content]))

(defn view-content []
  (view-layout
       [:h2 "Logifier 3"]
       [:p "Affirm some propositions!"]
       [:form {:action "/" :method "post"}
       [:input {:name "test"}]]
       [:p (list-names model)]
       [:script {:src "/js/jquery-1.10.2.min.js"}]
       [:script {:src "/js/cljs.js"}]))

(defroutes main-routes
  (GET "/" []
       (view-content))
      ;(route/resources "/")
  (POST "/" [test]
      (do
            ;(affirm (clean-up (infixer test)))
            ;(view-content)))
             (prefixer test))))

(def app (handler/site main-routes))

