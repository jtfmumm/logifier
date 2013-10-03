(ns logifier.server
 (:require
            [compojure.handler :as handler]
            [compojure.route :as route]
            [ring.util.response :as response]
            [ring.adapter.jetty :refer [run-jetty]])
  (:use [hiccup.core]
           [hiccup.page :only (include-css)]
           [compojure.core]
           ));[logifier.logifier]))

;TODO
;Get JS working on app
;Get "already asserted" condition to work right


;SERVER
(defn view-layout [& content]
  (html
      [:head
           [:meta {:http-equiv "Content-type"
                        :content "text/html; charset=utf-8"}]
           [:title "Logifier"]]
      (include-css "/css/style.css")
      [:body content]))

(defn view-content []
  (view-layout
       [:h2 {:id "colorchange"} "Logifier"]
       [:p {:id "instructions"}
        "~ = not, & = and, v = or, > = conditional, <> = biconditional" [:br]
       "Single letters for propositions (except 'v')." [:br]
       "Remove an assertion by prefixing an '!'" [:br]
       "Evaluate a proposition by prefixing a '?'" [:br]
        "Type 'reset' to reset model."]
       [:form {:action "/" :method "post"}
       [:input {:name "input" :id "input"}]]
       [:p {:id "output"} "---: " ] (print-output)]
       [:p]
       [:p "Known States of Affairs:" [:br] ] (list-states)]
       [:p]
       [:p "Your Assertions: " ];[:br](print-assertions)]
       [:script {:src "/js/jquery-1.10.2.min.js"}]
       [:script {:src "/js/cljs.js"}]
       [:script "$('#input').focus()"]))

;(update-output "[EXAMPLE] (p <> s) & ~(q > (~r v t))")

(defroutes main-routes
  (GET "/" []
       (view-content))
      (route/resources "/")
  (POST "/" [input]
      (do
            (parse-input input)
            (view-content))))

(def app (handler/site main-routes))

(defn -main [port] (run-jetty app {:port (Integer. port)}))

