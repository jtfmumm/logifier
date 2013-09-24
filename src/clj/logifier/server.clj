
(ns logifier.server
  (:require
            [compojure.handler :as handler]
            [compojure.route :as route]
            [ring.util.response :as response]
            [clojure.string :as str])
  (:use [hiccup.core]
           [compojure.core]
           [clojure.inspector :include (atom?)]))

;TODO
;Get JS working on app
;Focus on textbox
;Improve checker for wffs

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

(defn str-length [string]
      (loop [remains string
                 count 0]
                (if (= remains "") count
                      (recur (subs remains 1) (+ count 1)))))


;Set up our model
(def model (atom #{}))

(def test-model (atom #{}))

(def assertions (atom #{}))

(def current-output (atom #{}))


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
           (= input "lcond")
           (= input "lbicond")))

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


;Parsing input
(defn prefixer [expr]
      (cond
           (atom? expr) expr
           (= (count expr) 1)
                   (vector "lnot" (prefixer (frest (first expr))))
           (= (count expr) 2)
                   (vector "lnot" (prefixer (frest expr)))
           (= (count expr) 3)
                   (let [[left op right] expr]
                         (vector op (prefixer left) (prefixer right)))))

(defn count-next-parens [input]
       (loop [remains input
                 parens 0
                 count 0]
                 (cond
                      ;Make sure parens are balanced
                      (and (= (str-length remains) 1) (> parens 1)) nil
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
                       (or (= (first remains) \~) (= (first remains) \-))
                               (if (= (subs remains 1 2) "(")
                                     (recur
                                          (conj output (vector "lnot" (subs remains 1 (count-next-parens (subs remains 0)))))
                                          (subs remains (count-next-parens remains)))
                                     (recur
                                          (conj output (vector "lnot" (first (subs remains 1))))
                                          (subs remains 2)))
                       (= (first remains) \() (recur (conj output (subs remains 0 (count-next-parens remains))) (subs remains (count-next-parens remains)))
                       (= (type (first remains)) java.lang.Character) (recur (conj output (first remains)) (subs remains 1))
                       :else (str/join (list "ERROR: something's amiss with input: " input))
 )))

 (defn vectorize [input]
      (if (= (first input) \()
      (loop [output []
                 remains input
                 count 0]
                 (cond
                      (= (first remains) \))
                              (if (= count 1)
                                    (str/join output)
                                    (recur (conj output \)) (subs remains 1) (- count 1)))
                      (= (first remains) \()
                              (if (= count 0)
                                    (recur [] (subs remains 1) 1)
                                    (recur (conj output (first remains)) (subs remains 1) (+ count 1)))
                      :else (recur (conj output (first remains)) (subs remains 1) count)))
        input))

(defn nest-parse [input]
   (if (= (str-length input) 1) (first input)
      (let [input (clean-parse input)]
      (letfn [(parse [input]
                      (cond (= (type input) java.lang.Character) input
                                (= (type input) clojure.lang.PersistentVector) (into [] (map #(parse %) input))
                                (= (type input) java.lang.String) (if
                                                                                        (= (first input) \() (nest-parse (vectorize input))
                                                                                                                     input)))]
                (into [] (map #(parse %) input))))))


;Input Validation
(defn binary-operator? [character]
      (if (= character nil) false
          (boolean (re-find #"[><&v]" character)
               )))

(defn negate-operator? [character]
      (or (= character "~")
            (= character "-")))

(defn input-operator? [character]
      (or (binary-operator? character)
            (negate-operator? character)))

(defn next-char [prop]
      (if (= (str-length prop) 1) nil
          (let [length (str-length prop)]
          (loop [next-one (subs prop 1 2)
                 count 1]
                (cond
                     (= next-one " ")
                         (if (< count length) (recur (subs prop count (+ count 1))(+ count 1))
                              nil)
                    :else next-one)
             ))))

(defn atomic-prop? [prop]
      (boolean (re-find #"(?=[^v])[a-z]" prop)))

(defn balanced-parens? [prop]
      (boolean (count-next-parens prop)))

(defn reformat-prop [prop]
      (if (or (= prop "") (= prop nil)) "invalid syntax"
        (loop [output []
                 remains prop]
        (let [this-one (subs remains 0 1)]
           (cond
               (= (str-length remains) 1) (str/trim (str/join (conj output this-one)))
               (= this-one " ") (recur output (subs remains 1))
               (atomic-prop? this-one)
                    (if (= (next-char remains) ")") (recur (conj output this-one) (subs remains 1))
                          (recur (conj output this-one " ") (subs remains 1)))
               (binary-operator? this-one)
                    (if (= this-one "<") (recur (conj output this-one "> ") (subs remains 2))
                        (recur (conj output this-one " ") (subs remains 1)))
               (negate-operator? this-one) (recur (conj output this-one) (subs remains 1))
               (= this-one "(") (recur (conj output this-one) (subs remains 1))
               (= this-one ")")
                    (if (= (next-char remains) ")") (recur (conj output this-one) (subs remains 1))
                           (recur (conj output this-one " ") (subs remains 1))))))))

(defn valid-input? [prop]
      (loop [remains prop]
          (let [this-one (subs remains 0 1)
                  next-one (next-char remains)]
            (cond
                 (= this-one " ") (recur (subs remains 1))
                 (= (str-length remains) 1)
                     (if (or (= next-one nil)
                               (atomic-prop? remains))
                          true
                          false)
                 (atomic-prop? this-one)
                     (cond
                         (= next-one nil) true
                         (binary-operator? next-one) (recur (subs remains 1))
                         :else false)
                 (binary-operator? this-one)
                     (if (or (atomic-prop? next-one)
                                (negate-operator? next-one)
                                (= next-one "("))
                          (recur (subs remains 1))
                          (if (= next-one ">") (recur (subs remains 2))
                              false))
                 (negate-operator? this-one)
                     (if (or (atomic-prop? next-one)
                                (= next-one "("))
                          (recur (subs remains 1))
                          false)
                 (= this-one "(")
                     ;Check to see that parens are balanced
                     (if (balanced-parens? remains)
                         (if (valid-input? (reformat-prop (subs remains 1 (- (count-next-parens remains) 1))))
                               (if (< (count-next-parens remains) (str-length remains))
                                  ;Replace parens-enclosed statement with an atomic proposition for testing purposes
                                  (recur (str/join (concat "p" (subs remains (count-next-parens remains)))))
                                  true)
                              false)
                          false)
                 :else false))))

(defn parse-prop [prop]
      (let [prop (reformat-prop prop)]
          (if (= (first prop) \() (parse-prop (subs prop 1 (- (str-length prop) 1)))
              (if (valid-input? prop)
                  (prefixer (nest-parse prop))))))

(first "(p v q)")
(parse-prop "(p v q) &&")
(reformat-prop "(p & ~ (q v l)) v r")
(parse-prop "~    (q <> r)")
(parse-prop "(p v r)")
(reformat-prop " (p v r)")
(parse-prop (subs "(p v r)" 1 (- (str-length "(p v r)") 1)))
(prefixer (nest-parse (reformat-prop "~  (q <> r)")))
(nest-parse (reformat-prop "( p v r)"))
(valid-input? (reformat-prop "~  (q > r)"))

;Must take a quoted list or vector as input
(defn parse-prop-seq [props]
      (map #(parse-prop %) props))


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


;Affirming
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
           (cond
               (atom? prop) (insert-prop prop "true" this-model)
               :else (decomp prop))))))

(defn recalculate [this-model]
        (loop [initial-state (deref this-model)]
                 (do
                       (doseq [props (list-names this-model)] (affirm props this-model))
                       (if-not (= initial-state (deref this-model)) (recur (deref this-model))))))

(defn reveal [this-model]
      (deref this-model))


;Validity/Soundness
(defn valid? [conclusion premises]
      (do
          (clear-model test-model)
          (doseq [props premises] (affirm props test-model))
          (if (= (evaluate conclusion test-model) "true") true false)))

(defn sound? [conclusion premises this-model]
      (do
          (if (valid? conclusion premises)
                (if (every? #(= (evaluate % this-model) "true") premises) true false)
                false)))


;INTERFACE
(defn update-output [output]
      (reset! current-output output))

(defn assert-prop [prop]
      (let [parsed-prop (parse-prop prop)]
            (if (wff? parsed-prop)
                  (if-not (= (evaluate parsed-prop model) "false")
                      (do
                            (swap! assertions conj (reformat-prop prop))
                            (affirm parsed-prop model))
                      (update-output "inconsistent"))
                  "syntax error")))

(defn list-assertions []
     (str/join " " (into () (deref assertions))))

(defn reassert-props []
     (do
         (clear-model model)
         (doseq [props (deref assertions)] (assert-prop props))))

(defn remove-assertion [prop]
      (do
          (reset! assertions
              (filter #(not (= % prop)) (list-assertions)))
          (reassert-props)))

(defn reset-assertions []
     (clear-model assertions))

(defn check-truth [prop]
      (let [prop (parse-prop prop)]
            (if (wff? prop) (evaluate prop model)
                  "syntax error")))

;arguments parameter must be quoted list or vector
(defn check-validity [conclusion arguments]
      (valid? (parse-prop conclusion)
                   (parse-prop-seq arguments)))

;arguments parameter must be quoted list or vector
(defn check-soundness [conclusion arguments]
      (sound? (parse-prop conclusion)
                    (parse-prop-seq arguments)
                    model))

(defn parse-input [input]
    (if (= (first input) \?) (update-output (check-truth (subs input 1)))
          (assert-prop input)))

(defn print-output []
      (deref current-output))


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
       [:p {:id "colorchange"} "Affirm some propositions!" ]
       [:form {:action "/" :method "post"}
       [:input {:name "input" :id "input"}]]
       [:p "---: " (print-output)]
       [:p]
       [:p "Assertions: " (list-assertions)]
       [:script {:src "/js/jquery-1.10.2.min.js"}]
       [:script {:src "/js/cljs.js"}]))

(defroutes main-routes
  (GET "/" []
       (view-content))
      (route/resources "/")
  (POST "/" [input]
      (do
            (parse-input input)
            (view-content))))

(def app (handler/site main-routes))

