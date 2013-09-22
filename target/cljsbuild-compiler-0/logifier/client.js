goog.provide('logifier.cs');
goog.require('cljs.core');
goog.require('jayq.core');
goog.require('jayq.core');
goog.require('jayq.core');
jayq.core.focus.call(null,jayq.core.$.call(null,"\uFDD0:#input"));
logifier.cs.$colorchange = jayq.core.$.call(null,"\uFDD0:#colorchange");
logifier.cs.addstuff = (function addstuff(){
return jayq.core.css.call(null,logifier.cs.$colorchange,cljs.core.PersistentArrayMap.fromArray(["\uFDD0:color","blue"], true));
});
jayq.core.bind.call(null,jayq.core.$.call(null,"\uFDD0:#colorchange"),"\uFDD0:click",logifier.cs.addstuff);
jayq.core.bind.call(null,jayq.core.$.call(null,"\uFDD0:#colorchange"),"\uFDD0:click",(function (evt){
return alert("Clicked!!");
}));
