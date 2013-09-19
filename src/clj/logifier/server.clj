(ns logifier.server
  (:require
            [compojure.handler :as handler]
            [compojure.route :as route]
            [ring.util.response :as response]
            [logifier :as logifier])
  (:use [hiccup.core]
           [compojure.core]))

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
       [:p "Hi"];logifier/model]
       [:script {:src "/js/jquery-1.10.2.min.js"}]
       [:script {:src "/js/cljs.js"}]))

(defroutes main-routes
  (GET "/" []
       (view-content))
      ;(route/resources "/")
  (POST "/" [test]
      (do
            (str test)
            (view-content))))

(def app (handler/site main-routes))
