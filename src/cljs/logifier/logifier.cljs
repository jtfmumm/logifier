(ns logifier
  (:require [clojure.string :as str]))


;LOGIC
;Utilities
(defn atom? [x]
  (not (coll? x)))

(defn third [x]
  (second (rest x)))

(defn exclusive-or [a b]
  (or
    (and a (not b))
    (and b (not a))))

(defn str-length [string]
  (loop [remains string
         counter 0]
    (if (= remains "") counter
      (recur (subs remains 1) (+ counter 1)))))

(defn joincat [& input]
  [input (list input)]
  (str/join (concat input)))

(defn simple? [prop]
  (= (count prop) 1))


;Set up our model
(def model (atom #{}))

(def test-model (atom #{}))

(def conditional-model (atom #{}))

(def assertions (atom #{}))

(def current-output (atom #{}))


;Basic operations
(defn clear-model [this-model]
  (reset! this-model #{}))

(defn update-output [output]
  (reset! current-output output))

(defn get-value [name this-model]
  "Get the truth-value ('true'/'false') of a statement letter.  Return nil if it's not in model."
  (:value (first (filter #(= (:name %) name) (deref this-model)))))

(defn find-value [name this-model]
  "Get the truth-value ('true'/'false'/'unknown') of a statement letter."
  (let [answer (get-value name this-model)]
    (if (= answer nil) "unknown"
      answer)))

(defn get-correct-prop [name this-model]
  "For true sentence letters, returns that letter.  For false, returns the
  negation of that letter."
  (if (= (get-value name this-model) "true") name
    (vector "lnot" name)))

(defn list-names [this-model]
  (map  #(get % :name) (deref this-model)))

(defn list-props [this-model]
  "List all known propositions."
  (map #(get-correct-prop % this-model) (map #(get % :name) (deref this-model))))

(defn has-name? [name this-model]
  (if (filter #(= % name) (list-names this-model)) (list name) 
    true
    false))

(defn operator? [input]
  (or
    (= input "lnot")
    (= input "lor")
    (= input "land")
    (= input "lcond")
    (= input "lbicond")))

(defn wff? [prop]
  (cond
    (= prop nil) false
    (atom? prop) true
    (not (vector? prop)) false
    (= (first prop) "lnot") 
      (if (= (count (rest prop)) 1) 
        (wff? (second prop))
        false)
    (operator? (first prop)) 
      (if (= (count (rest prop)) 2) 
        (and (wff? (second prop)) (wff? (third prop)))
        false)))

(defn negate [prop]
  (if (and (not (atom? prop)) (= (first prop) "lnot"))
    (second prop)
    (vector "lnot" prop)))

(defn land? [prop]
  (if-not (simple? prop)
    (= (first prop) "land")))

(defn lor? [prop]
  (if-not (simple? prop)
    (= (first prop) "lor")))

(defn lcond? [prop]
  (if-not (simple? prop)
    (= (first prop) "lcond")))

(defn lbicond? [prop]
  (if-not (simple? prop)
    (= (first prop) "lbicond")))

(defn converse? [one two]
  (if-not (or (atom? one) (atom? two))
    (if (and (= (first one) "lor") (= (first two) "lor"))
      (or
        (and
          (= (second one) (negate (second two)))
          (= (third one) (negate (third two))))
        (and
          (= (second one) (negate (third two)))
          (= (third one) (negate (second two))))))))

(defn nest-compare [one two]
  (compare (apply str (flatten one)) (apply str (flatten two))))

(defn before [one two]
  (cond
    (and (atom? one) (not (atom? two))) one
    (and (atom? two) (not (atom? one))) two
    (and (atom? one) (atom? two)) (first (sort compare [one two]))
    :else (first (sort nest-compare [one two]))))

(defn after [one two]
  (cond
    (and (atom? one) (not (atom? two))) two
    (and (atom? two) (not (atom? one))) one
    (and (atom? one) (atom? two)) (second (sort compare [one two]))
    :else (second (sort nest-compare [one two]))))

(defn clean-up [prop]
  "Simplify proposition represented as vector into either a sentence letter, a negation, a 
  disjunction, or a conjunction."
  (letfn [(decomp [prop]
                  (let [operate (first prop)]
                    (cond
                      (= operate "lnot") (decomp-lnot (second prop))
                      (= operate "lor") (decomp-lor (vector (second prop) (third prop)))
                      (= operate "land") (vector "land" (clean-up (second prop)) (clean-up (third prop)))
                      (= operate "lcond") (decomp (vector "lor" (clean-up (negate (second prop))) (clean-up (third prop))))
                      (= operate "lbicond") (decomp ["land"
                                                     ["lcond" (second prop) (third prop)]
                                                     ["lcond" (third prop) (second prop)]])
                      :else (list "ERROR: not a valid operator" prop)
                      )))
          (decomp-lnot [prop]
                       (let [operate (or (atom? prop)(first prop))]
                         (cond
                           (atom? prop) (vector "lnot" prop)
                           (= operate "lnot") (clean-up (second prop))
                           (= operate "lor") (decomp ["land" ["lnot" (second prop)] ["lnot" (third prop)]])
                           (= operate "land") (decomp ["lor" ["lnot" (second prop)] ["lnot" (third prop)]])
                           (= operate "lcond") (decomp ["land" (second prop) ["lnot" (third prop)]])
                           (= operate "lbicond") (decomp ["lor"
                                                          ["lnot" ["lcond" (second prop) (third prop)]]
                                                          ["lnot" ["lcond" (third prop) (second prop)]]])
                           :else (list "decomp-lnot ERROR" prop)
                           )))
          (decomp-lor [prop]
                      (vector "lor"
                              (clean-up (before (first prop) (second prop)))
                              (clean-up (after (first prop) (second prop)))))
          ]
    (if
      (atom? prop) prop
      (decomp prop))))


;Parsing input
(defn prefixer [expr]
  (cond
    (atom? expr) expr
    (= (count expr) 1)
      (vector "lnot" (prefixer (second (first expr))))
    (= (count expr) 2)
      (vector "lnot" (prefixer (second expr)))
    (= (count expr) 3)
      (let [[left op right] expr]
        (vector op (prefixer left) (prefixer right)))))

(defn count-next-parens [input]
  (loop [remains input
         parens 0
         count 0]
    (cond
      ;Make sure parens are balanced
      (and (= (str-length remains) 1) (not (= (first remains) \)))) nil
    (and (= (str-length remains) 1) (> parens 1)) nil
    (= (first remains) \))
  (if (= parens 1)
    (+ count 1)
    (recur (subs remains 1) (- parens 1) (+ count 1)))
  (= (first remains) \()
     (recur (subs remains 1) (+ parens 1) (+ count 1))
     :else (recur (subs remains 1) parens (+ count 1)))))

(defn clean-parse [input]
  "Convert from interface notation (v, &, >, <>, ~) to 
  internal notation ('lnot', 'land', 'lcond', 'lbicond', 'lnot')."
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
         (simple? (first remains)) (recur (conj output (first remains)) (subs remains 1))
         :else (str/join (list "ERROR: something's amiss with input: " input))
         )))
  
(defn vectorize [input]
  "Recursively convert input to vectors.
  Take string, return character or vector of vectors."
  (if (= (first input) \()
      (loop [output []
            remains input
            counter 0]
        (cond
          (= (first remains) \))
            (if (= counter 1)
              (str/join output)
              (recur (conj output \)) (subs remains 1) (- counter 1)))
          (= (first remains) \()
             (if (= counter 0)
               (recur [] (subs remains 1) 1)
               (recur (conj output (first remains)) (subs remains 1) (+ counter 1)))
          :else (recur (conj output (first remains)) (subs remains 1) counter)))
      input))

(defn nest-parse [input]
  "Recursively parse the input."
  (if (simple? input) (first input)
    (let [input (clean-parse input)]
      (letfn [(parse-this [input]
                     (cond (simple? input) input
                           (= (type input) cljs.core.PersistentVector) (into [] (map parse-this input))
                           :else (if
                                   (= (first input) \() (nest-parse (vectorize input))
                                      input)))]
                     (into [] (map parse-this input))))))
  
;Reduce to Sheffer Strokes
(defn sheffer-atom [prop]
  (vector "|" (vector "|" prop prop) (vector "|" prop prop)))

(defn sheffer-not [prop]
  (let [negated-prop (rest prop)]
    (vector "|" (first negated-prop) (first negated-prop))))

(defn sheffer-or [prop]
  (let [one (second prop)
        two (third prop)
        earlier (before one two)
        later (after one two)]
    (vector "|" (vector "|" earlier earlier) (vector "|" later later))))

(defn sheffer-and [prop]
  (let [one (second prop)
        two (third prop)
        earlier (before one two)
        later (after one two)]
    (vector "|" (vector "|" earlier later) (vector "|" earlier later))))

(defn sheffer-cond [prop]
  (let [negated-one (vector "lnot" (second prop))
        two (third prop)]
    (sheffer-or (vector "lor" negated-one two))))

(defn shefferize [prop]
  (simple? (first prop)) (sheffer-atom prop)
  (let [operator (first prop)]
    (cond
      (= operator "lnot") (sheffer-not prop)
      (= operator "lor") (sheffer-or prop)
      (= operator "land") (sheffer-and prop)
      (= operator "lcond") (sheffer-cond prop)
      (= operator "lbicond") (sheffer-and (vector "land" (sheffer-cond (vector "lcond" (second prop) (third prop))) (sheffer-cond (vector "lcond" (third prop) (second prop)))))
      )))


;Input Validation
(defn binary-operator? [character]
  (if (= character nil) false
    (boolean (re-find #"[><&v]" character))))

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
  (if (= prop nil) false
    (boolean (re-find #"(?=[^v])[a-z]" prop))))

(defn balanced-parens? [prop]
  (boolean (count-next-parens prop)))

(defn open-parens? [char]
  (or (= char "(") (= char \()))
  
(defn close-parens? [char]
  (or (= char ")") (= char \))))

(defn reformat-prop [prop]
  "Fix whitespace in string and remove outer parens if there are any."
  (if (or (= prop "") (= prop nil)) "invalid syntax"
    (let [prop (str/trim prop)]
      (if (and (= (first prop) \()
                  (= (count-next-parens prop) (str-length prop))) (reformat-prop (subs prop 1 (- (str-length prop) 1)))
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
                       (recur (conj output this-one " ") (subs remains 1))))))))))

(defn valid-input? [prop]
  (loop [remains prop]
    (let [this-one (subs remains 0 1)
          next-one (next-char remains)]
      (cond
        (= this-one " ") (recur (subs remains 1))
        (= (str-length remains) 1)
        (cond
          (input-operator? remains) false
          (open-parens? remains) false
          (or (= next-one nil)
              (atomic-prop? remains))
          true
          :else false)
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
  "Remove outer parens and nest-parse if prop is a valid input."
  (let [prop (reformat-prop prop)]
    (if (and (= (first prop) \()
                (= (count-next-parens prop) (str-length prop))) (parse-prop (subs prop 1 (- (str-length prop) 1)))
             (if (valid-input? prop)
               (prefixer (nest-parse prop))))))

  
;Evaluate
(defn tautology? [orig-prop]
  (if (atom? orig-prop) false
    (let [prop (clean-up orig-prop)
          one (second prop)
          two (third prop)]
      (if (= (first prop) "lor")
        (or
          (= (negate one) two)
          (= (negate two) one))
        false))))

(defn contradiction? [orig-prop]
  (if (atom? orig-prop) false
    (let [prop (clean-up orig-prop)
          one (second prop)
          two (third prop)]
      (if (= (first prop) "land")
        (or
          (= (negate one) two)
          (= (negate two) one))
        false))))

(defn distribute? [one two]
  (if (and
        (land? one)
        (land? two))
    (or
      (= (second one) (second two))
      (= (second one) (third two))
      (= (third one) (second two))
      (= (third one) (third two)))))

(defn distributed [one two]
  (if (and
        (land? one)
        (land? two))
    (cond
      (= (second one) (second two))
        (vector "land" (second one) (vector "lor" (before (third one) (third two)) (after (third one) (third two))))
      (= (second one) (third two))
        (vector "land" (second one) (vector "lor" (before (third one) (second two)) (after (third one) (second two))))
      (= (third one) (second two))
        (vector "land" (third one) (vector "lor" (before (second one) (third two)) (after (second one) (third two))))
      (= (third one) (third two))
        (vector "land" (third one) (vector "lor" (before (second one) (second two)) (after (second one) (second two))))
      :else (vector "lor" one two))))

(declare affirm)

(defn evaluate [prop this-model]
  "Evaluate a proposition, returning 'true', 'false', or 'unknown'.  
  The evaluation is recursive since the truth value of a complex proposition
  depends on the truth values of its parts."
  (let [prop (clean-up prop)]
    (letfn [(evaluate-composite [prop]
                                (let [operate (first prop)]
                                  (cond
                                    (= operate "lnot") (lnot (second prop))
                                    (= operate "lor") (lor (rest prop))
                                    (= operate "land") (land (rest prop))
                                    (= operate "lcond") (lcond (rest prop))
                                    (= operate "lbicond") (land
                                                            [["lcond" (second prop) (third prop)]
                                                             ["lcond" (third prop) (second prop)]])
                                    :else (list "ERROR: Invalid operator" prop)
                                    )))
            (cond-proof? [one two] ;No longer clearing model
                         (reset! conditional-model (deref this-model))
                         (affirm (negate one) conditional-model)
                         (if (= (evaluate two conditional-model) "true") true false))
            (lnot [prop]
                  (cond
                    (= (evaluate prop this-model) "true") "false"
                    (= (evaluate prop this-model) "false") "true"
                    :else "unknown"))
            (lor [prop]
                 (let [one (first prop)
                       two (second prop)]
                   (cond
                     (= (evaluate one this-model) "true") "true"
                     (= (evaluate two this-model) "true") "true"
                     (and (= (evaluate one this-model) "false") (= (evaluate two this-model) "false")) "false"
                     (or
                       (has-name? (vector "lor" one two) this-model)
                       (has-name? (vector "lor" two one) this-model)
                       ) "true"
                     (cond-proof? one two) "true"
                     (cond-proof? two one) "true"
                     (and (land? one) (land? two))
                     (if (distribute? one two)
                       (evaluate (distributed one two) this-model)
                       "unknown")
                     :else "unknown"
                     )))
            (land [prop]
                  (let [one (first prop)
                        two (second prop)
                        initial (evaluate one this-model)]
                    (cond
                      (= initial "true") (evaluate two this-model)
                      :else initial
                      )))
            (lcond [prop]
                   (let [one (first prop)
                         two (second prop)]
                     (evaluate (vector "lor" (vector "lnot" one) two) this-model)
                     ))
            ]
      (cond
        (tautology? prop) "true"
        (contradiction? prop) "false"
        (atom? prop) (find-value prop this-model)
        :else (evaluate-composite prop)))))
        
#_(defn list-reversed-symbols [input]
  (if (and (= (count input) 1)
           (= (evaluate (first input) model) "false")) 
    (list-reversed-symbols (conj ["lnot"] input))
    (let [input (flatten input)]
      (loop [output []
             remains input
             binary-count 0]
        (condp = (first remains)
          nil (str/join (flatten (conj output (repeat binary-count "()"))))
          "lnot" (recur (conj output "~") (rest remains) binary-count)
          "lor" (recur (conj output "v") (rest remains) (+ binary-count 1))
          "land" (recur (conj output "&") (rest remains) (+ binary-count 1))
          "lcond" (recur (conj output ">") (rest remains) (+ binary-count 1))
          (if (simple? (first remains))
            (recur (conj output (str (first remains)))
                   (rest remains)
                   binary-count)
            (recur (conj output (first remains))
                   (rest remains)
                   binary-count)
            ))))))


;Affirming
;Be sure to always clean-up initial props before affirming them!
(defn affirm [prop this-model]
  "Add a proposition to this-model.  First, recursively reduce the proposition to
  sentence letters and disjunctions."
  (let [prop (clean-up prop)]
    (letfn [(inconsistent? [prop]
                           (cond
                             (= (evaluate prop this-model) "false") true
                             (contradiction? prop) true
                             (and (not (atom? prop)) (= (first prop) "land"))
                             (do
                               (reset! test-model (deref this-model))
                               (if (= (evaluate (second prop) test-model) "false") true
                                 (do
                                   (affirm (second prop) test-model)
                                   (= (evaluate (third prop) test-model) "false"))))
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
            (new-affirm [prop]
                        (if-not (has-name? (clean-up prop) this-model)
                          (affirm prop this-model)))
            (decomp [prop]
                    (let [operate (first prop)]
                      (cond
                        (= operate "lnot") (insert-prop (second prop) "false" this-model)
                        (= operate "lor") (decomp-lor (vector (second prop) (third prop)))
                        (= operate "land") (do
                                             (affirm (second prop) this-model)
                                             (affirm (third prop) this-model))
                        :else (list "ERROR: not a valid operator" prop)
                        )))
            (decomp-lor [prop]
                        (let [earlier (before (first prop) (second prop))
                              later (after (first prop) (second prop))]
                          (do
                            (cond
                              (= (evaluate (first prop) this-model) "false") (affirm (second prop) this-model)
                              (= (evaluate (second prop) this-model) "false") (affirm (first prop) this-model)
                              (= earlier later) (affirm earlier this-model)
                              (and (land? earlier) (land? later))
                              (if (distribute? earlier later)
                                (affirm (distributed earlier later) this-model)
                                (insert-prop (vector "lor" earlier later) "true" this-model));Distribute
                              :else (insert-prop (vector "lor" earlier later) "true" this-model))
                            ;For each prop in model, if the prop is a disjunction and one disjunct is (negate (earlier prop)) (affirm (vector "lor"))
                            (doseq [props (list-names this-model)]
                              (#(if-not (simple? %)
                                  (if (= (first %) "lor")
                                    (let [one (second %)
                                          two (third %)]
                                      (cond
                                        (converse? % (vector "lor" earlier later)) (new-affirm (vector "lor" (vector "land" (negate earlier) later) (vector "land" earlier (negate later)))) ;Equivalence
                                        ;Hypothetical Syllogisms/Disjunctive Dilemmas
                                        (= one (negate earlier)) (new-affirm (vector "lor" later two))
                                        (= two (negate earlier)) (new-affirm (vector "lor" later one))
                                        (= one (negate later)) (new-affirm (vector "lor" earlier two))
                                        (= two (negate later)) (new-affirm (vector "lor" earlier one))
                                        )))) props)))))
            
            ]
      ;(if (reductio? prop) (affirm (negate prop) this-model)
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
(defn list-states []
  (let [states (filter simple? (list-names model))
        true-states (map str (filter #(= (evaluate % model) "true") states))
        false-states (map (partial str "~") (filter #(= (evaluate % model) "false") states))]
    (str/join " . " (sort compare (flatten (conj true-states false-states))))
    ))

(defn reset-assertions []
  (clear-model model)
  (clear-model assertions))
      
(defn ready-to-assert [prop]
  (let [prop (reformat-prop prop)]
    (cond
      (= (str-length prop) 1) prop
      (= (first prop) \~) prop
      :else (joincat "(" prop ")"))))

(defn asserted? [prop]
  (let [prop (ready-to-assert prop)]
    (or (= (filter #(= % prop) (deref assertions)) (list prop))
        (= (filter #(= % (joincat "(" prop ")")) (deref assertions)) (list prop)))))

(defn assert-prop [prop]
  (let [prop (reformat-prop prop)
        parsed-prop (parse-prop prop)]
    (if (wff? parsed-prop)
      (if-not (= (evaluate parsed-prop model) "false")
        (if (asserted? prop) (update-output (joincat "[" prop "] already asserted!"))
          (do
            (swap! assertions conj (ready-to-assert prop))
            (affirm parsed-prop model)
            (update-output (joincat "[" prop "] asserted"))))
        (update-output (joincat "[" prop "] inconsistent")))
      (update-output (joincat "[" prop "] " "syntax error")))))

(defn print-assertions []
  (str/join " . " (into () (deref assertions))))

(defn reassert-props []
  (let [temp-assertions (deref assertions)]
    (do
      (clear-model model)
      (reset-assertions)
      (doseq [props temp-assertions] (assert-prop props)))))

(defn remove-assertion [prop]
  (if-not (asserted? prop) (update-output (joincat "[" prop "] hasn't been asserted"))
    (let [prop (ready-to-assert prop)]
      (do
        (reset! assertions
                (filter #(not (= % prop)) (deref assertions)))
        (reassert-props)
        (update-output (joincat "[" prop "] removed"))))))


(defn check-truth [prop]
  (let [prop (reformat-prop prop)
        parsed-prop (parse-prop prop)]
    (if (wff? parsed-prop) (joincat "[" prop "] " (evaluate parsed-prop model))
      (joincat "[" prop "] " "syntax error"))))

(defn ^:export  process-input [input]
  (cond
    (= (first input) \?) (update-output (check-truth (subs input 1)))
    (= (first input) \!) (remove-assertion (subs input 1))
    (= input "reset")
    (do
      (reset-assertions)
      (update-output "Assertions reset."))
    :else
    (do
      (assert-prop input))))

(defn print-output []
  (deref current-output))

;TESTS
;(assert (= (type ["p"]) cljs.core.PersistentVector))

;(assert (wff? ["lnot" \x]))

;(assert (= (clean-parse "p v y") [\p "lor" \y]))

;(assert (= (reformat-prop "pvy") "p v y"))

;(assert (valid-input? "p v y"))

;(assert (= (nest-parse "p v y") [\p "lor" \y]))

;(assert (= (prefixer [\p "lor" \y]) ["lor" \p \y]))


        
        
        
        
        
        
        
        
        
        
        
        
