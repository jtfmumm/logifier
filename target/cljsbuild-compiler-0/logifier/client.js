goog.provide('logifier.cs');
goog.require('cljs.core');
goog.require('logifier');
goog.require('jayq.core');
goog.require('jayq.core');
goog.require('logifier');
goog.require('jayq.core');
logifier.cs.get_input = (function get_input(){
return jayq.core.val.call(null,jayq.core.$.call(null,"\uFDD0:#input"));
});
logifier.cs.clear_input = (function clear_input(){
return jayq.core.val.call(null,jayq.core.$.call(null,"\uFDD0:#input"),"");
});
logifier.cs.display_output = (function display_output(){
jayq.core.text.call(null,jayq.core.$.call(null,"\uFDD0:#display"),cljs.core.deref.call(null,logifier.current_output));
jayq.core.text.call(null,jayq.core.$.call(null,"\uFDD0:#knownStates"),logifier.list_states.call(null));
return jayq.core.text.call(null,jayq.core.$.call(null,"\uFDD0:#assertions"),logifier.print_assertions.call(null));
});
logifier.cs.do_everything = (function do_everything(){
logifier.process_input.call(null,logifier.cs.get_input.call(null));
logifier.cs.clear_input.call(null);
return logifier.cs.display_output.call(null);
});
logifier.cs.$colorchange = jayq.core.$.call(null,"\uFDD0:#colorchange");
logifier.cs.addstuff = (function addstuff(){
return jayq.core.css.call(null,logifier.cs.$colorchange,cljs.core.PersistentArrayMap.fromArray(["\uFDD0:color","blue"], true));
});
jayq.core.bind.call(null,jayq.core.$.call(null,"\uFDD0:#colorchange"),"\uFDD0:click",logifier.cs.addstuff);
jayq.core.bind.call(null,jayq.core.$.call(null,"\uFDD0:#clickhere"),"\uFDD0:click",(function (evt){
return alert("Clicked!!");
}));
