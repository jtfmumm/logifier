(ns logifier.cs
      (:use [jayq.core :only [$]]
               [logifier :only [process-input current-output print-assertions list-states]])
    (:require [jayq.core :as jq]))

(defn get-input []
      (jq/val ($ :#input)))

(defn clear-input []
      (jq/val ($ :#input) ""))

(defn display-output []
      (jq/text ($ :#display) (deref current-output))
      (jq/text ($ :#knownStates) (list-states))
      (jq/text ($ :#assertions) (print-assertions)))

(defn do-everything []
      (process-input (get-input))
      (clear-input)
      (display-output))

(def $colorchange ($ :#colorchange))

(defn addstuff []
      (jq/css $colorchange {:color "blue"}))

(jq/bind ($ :#colorchange) :click addstuff)

(jq/bind ($ :#clickhere) :click (fn [evt] (js/alert "Clicked!!")))
