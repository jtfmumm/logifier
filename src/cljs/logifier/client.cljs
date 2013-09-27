(ns logifier.cs
      (:use [jayq.core :only [$]])
    (:require [jayq.core :as jq]))

(js/alert "Hi")

(jq/focus ($ :#input))

(def $colorchange ($ :#colorchange))

(defn addstuff []
      (jq/css $colorchange {:color "blue"}))

(jq/bind ($ :#colorchange) :click addstuff)

(jq/bind ($ :#colorchange) :click (fn [evt] (js/alert "Clicked!!")))
