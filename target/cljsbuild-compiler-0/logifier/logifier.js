goog.provide('logifier');
goog.require('cljs.core');
goog.require('clojure.string');
logifier.atom_QMARK_ = (function atom_QMARK_(x){
return !(cljs.core.coll_QMARK_.call(null,x));
});
logifier.frest = (function frest(x){
return cljs.core.first.call(null,cljs.core.rest.call(null,x));
});
logifier.frerest = (function frerest(x){
return logifier.frest.call(null,cljs.core.rest.call(null,x));
});
logifier.exclusive_or = (function exclusive_or(a,b){
var or__3943__auto__ = (function (){var and__3941__auto__ = a;
if(cljs.core.truth_(and__3941__auto__))
{return cljs.core.not.call(null,b);
} else
{return and__3941__auto__;
}
})();
if(cljs.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{var and__3941__auto__ = b;
if(cljs.core.truth_(and__3941__auto__))
{return cljs.core.not.call(null,a);
} else
{return and__3941__auto__;
}
}
});
logifier.str_length = (function str_length(string){
var remains = string;
var count = 0;
while(true){
if(cljs.core._EQ_.call(null,remains,""))
{return count;
} else
{{
var G__14533 = cljs.core.subs.call(null,remains,1);
var G__14534 = (count + 1);
remains = G__14533;
count = G__14534;
continue;
}
}
break;
}
});
/**
* @param {...*} var_args
*/
logifier.joincat = (function() { 
var joincat__delegate = function (input){
cljs.core.PersistentVector.fromArray([input,cljs.core.list.call(null,input)], true);
return clojure.string.join.call(null,cljs.core.concat.call(null,input));
};
var joincat = function (var_args){
var input = null;
if (arguments.length > 0) {
  input = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return joincat__delegate.call(this, input);
};
joincat.cljs$lang$maxFixedArity = 0;
joincat.cljs$lang$applyTo = (function (arglist__14535){
var input = cljs.core.seq(arglist__14535);
return joincat__delegate(input);
});
joincat.cljs$core$IFn$_invoke$arity$variadic = joincat__delegate;
return joincat;
})()
;
logifier.simple_QMARK_ = (function simple_QMARK_(prop){
return cljs.core._EQ_.call(null,cljs.core.count.call(null,prop),1);
});
logifier.report = (function report(x){
return console.log(x);
});
logifier.model = cljs.core.atom.call(null,cljs.core.PersistentHashSet.EMPTY);
logifier.test_model = cljs.core.atom.call(null,cljs.core.PersistentHashSet.EMPTY);
logifier.conditional_model = cljs.core.atom.call(null,cljs.core.PersistentHashSet.EMPTY);
logifier.assertions = cljs.core.atom.call(null,cljs.core.PersistentHashSet.EMPTY);
logifier.current_output = cljs.core.atom.call(null,cljs.core.PersistentHashSet.EMPTY);
logifier.clear_model = (function clear_model(this_model){
return cljs.core.reset_BANG_.call(null,this_model,cljs.core.PersistentHashSet.EMPTY);
});
logifier.update_output = (function update_output(output){
return cljs.core.reset_BANG_.call(null,logifier.current_output,output);
});
logifier.get_value = (function get_value(name,this_model){
return (new cljs.core.Keyword("\uFDD0:value")).call(null,cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__14536_SHARP_){
return cljs.core._EQ_.call(null,(new cljs.core.Keyword("\uFDD0:name")).call(null,p1__14536_SHARP_),name);
}),cljs.core.deref.call(null,this_model))));
});
logifier.find_value = (function find_value(name,this_model){
var answer = logifier.get_value.call(null,name,this_model);
if(cljs.core._EQ_.call(null,answer,null))
{return "unknown";
} else
{return answer;
}
});
logifier.get_correct_prop = (function get_correct_prop(name,this_model){
if(cljs.core._EQ_.call(null,logifier.get_value.call(null,name,this_model),"true"))
{return name;
} else
{return cljs.core.vector.call(null,"lnot",name);
}
});
logifier.list_names = (function list_names(this_model){
return cljs.core.map.call(null,(function (p1__14537_SHARP_){
return cljs.core.get.call(null,p1__14537_SHARP_,"\uFDD0:name");
}),cljs.core.deref.call(null,this_model));
});
logifier.list_props = (function list_props(this_model){
return cljs.core.map.call(null,(function (p1__14538_SHARP_){
return logifier.get_correct_prop.call(null,p1__14538_SHARP_,this_model);
}),cljs.core.map.call(null,(function (p1__14539_SHARP_){
return cljs.core.get.call(null,p1__14539_SHARP_,"\uFDD0:name");
}),cljs.core.deref.call(null,this_model)));
});
logifier.has_name_QMARK_ = (function has_name_QMARK_(name,this_model){
if(cljs.core._EQ_.call(null,cljs.core.filter.call(null,(function (p1__14540_SHARP_){
return cljs.core._EQ_.call(null,p1__14540_SHARP_,name);
}),logifier.list_names.call(null,this_model)),cljs.core.list.call(null,name)))
{return true;
} else
{if("\uFDD0:else")
{return false;
} else
{return null;
}
}
});
logifier.operator_QMARK_ = (function operator_QMARK_(input){
var or__3943__auto__ = cljs.core._EQ_.call(null,input,"lnot");
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = cljs.core._EQ_.call(null,input,"lor");
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{var or__3943__auto____$2 = cljs.core._EQ_.call(null,input,"land");
if(or__3943__auto____$2)
{return or__3943__auto____$2;
} else
{var or__3943__auto____$3 = cljs.core._EQ_.call(null,input,"lcond");
if(or__3943__auto____$3)
{return or__3943__auto____$3;
} else
{return cljs.core._EQ_.call(null,input,"lbicond");
}
}
}
}
});
logifier.wff_QMARK_ = (function wff_QMARK_(prop){
if(cljs.core._EQ_.call(null,prop,null))
{return false;
} else
{if(cljs.core.truth_(logifier.atom_QMARK_.call(null,prop)))
{return true;
} else
{if(!(cljs.core.vector_QMARK_.call(null,prop)))
{return false;
} else
{if(cljs.core._EQ_.call(null,cljs.core.first.call(null,prop),"lnot"))
{if(cljs.core._EQ_.call(null,cljs.core.count.call(null,cljs.core.rest.call(null,prop)),1))
{return wff_QMARK_.call(null,logifier.frest.call(null,prop));
} else
{return false;
}
} else
{if(cljs.core.truth_(logifier.operator_QMARK_.call(null,cljs.core.first.call(null,prop))))
{if(cljs.core._EQ_.call(null,cljs.core.count.call(null,cljs.core.rest.call(null,prop)),2))
{var and__3941__auto__ = wff_QMARK_.call(null,logifier.frest.call(null,prop));
if(cljs.core.truth_(and__3941__auto__))
{return wff_QMARK_.call(null,logifier.frerest.call(null,prop));
} else
{return and__3941__auto__;
}
} else
{return false;
}
} else
{return null;
}
}
}
}
}
});
logifier.negate = (function negate(prop){
if((function (){var and__3941__auto__ = cljs.core.not.call(null,logifier.atom_QMARK_.call(null,prop));
if(and__3941__auto__)
{return cljs.core._EQ_.call(null,cljs.core.first.call(null,prop),"lnot");
} else
{return and__3941__auto__;
}
})())
{return logifier.frest.call(null,prop);
} else
{return cljs.core.vector.call(null,"lnot",prop);
}
});
logifier.land_QMARK_ = (function land_QMARK_(prop){
if(cljs.core.not.call(null,logifier.simple_QMARK_.call(null,prop)))
{return cljs.core._EQ_.call(null,cljs.core.first.call(null,prop),"land");
} else
{return null;
}
});
logifier.lor_QMARK_ = (function lor_QMARK_(prop){
if(cljs.core.not.call(null,logifier.simple_QMARK_.call(null,prop)))
{return cljs.core._EQ_.call(null,cljs.core.first.call(null,prop),"lor");
} else
{return null;
}
});
logifier.lcond_QMARK_ = (function lcond_QMARK_(prop){
if(cljs.core.not.call(null,logifier.simple_QMARK_.call(null,prop)))
{return cljs.core._EQ_.call(null,cljs.core.first.call(null,prop),"lcond");
} else
{return null;
}
});
logifier.lbicond_QMARK_ = (function lbicond_QMARK_(prop){
if(cljs.core.not.call(null,logifier.simple_QMARK_.call(null,prop)))
{return cljs.core._EQ_.call(null,cljs.core.first.call(null,prop),"lbicond");
} else
{return null;
}
});
logifier.converse_QMARK_ = (function converse_QMARK_(one,two){
if(cljs.core.not.call(null,(function (){var or__3943__auto__ = logifier.atom_QMARK_.call(null,one);
if(cljs.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{return logifier.atom_QMARK_.call(null,two);
}
})()))
{if((function (){var and__3941__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,one),"lor");
if(and__3941__auto__)
{return cljs.core._EQ_.call(null,cljs.core.first.call(null,two),"lor");
} else
{return and__3941__auto__;
}
})())
{var or__3943__auto__ = (function (){var and__3941__auto__ = cljs.core._EQ_.call(null,logifier.frest.call(null,one),logifier.negate.call(null,logifier.frest.call(null,two)));
if(and__3941__auto__)
{return cljs.core._EQ_.call(null,logifier.frerest.call(null,one),logifier.negate.call(null,logifier.frerest.call(null,two)));
} else
{return and__3941__auto__;
}
})();
if(cljs.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{var and__3941__auto__ = cljs.core._EQ_.call(null,logifier.frest.call(null,one),logifier.negate.call(null,logifier.frerest.call(null,two)));
if(and__3941__auto__)
{return cljs.core._EQ_.call(null,logifier.frerest.call(null,one),logifier.negate.call(null,logifier.frest.call(null,two)));
} else
{return and__3941__auto__;
}
}
} else
{return null;
}
} else
{return null;
}
});
logifier.nest_compare = (function nest_compare(one,two){
return cljs.core.compare.call(null,cljs.core.apply.call(null,cljs.core.str,cljs.core.flatten.call(null,one)),cljs.core.apply.call(null,cljs.core.str,cljs.core.flatten.call(null,two)));
});
logifier.before = (function before(one,two){
if(cljs.core.truth_((function (){var and__3941__auto__ = logifier.atom_QMARK_.call(null,one);
if(cljs.core.truth_(and__3941__auto__))
{return cljs.core.not.call(null,logifier.atom_QMARK_.call(null,two));
} else
{return and__3941__auto__;
}
})()))
{return one;
} else
{if(cljs.core.truth_((function (){var and__3941__auto__ = logifier.atom_QMARK_.call(null,two);
if(cljs.core.truth_(and__3941__auto__))
{return cljs.core.not.call(null,logifier.atom_QMARK_.call(null,one));
} else
{return and__3941__auto__;
}
})()))
{return two;
} else
{if(cljs.core.truth_((function (){var and__3941__auto__ = logifier.atom_QMARK_.call(null,one);
if(cljs.core.truth_(and__3941__auto__))
{return logifier.atom_QMARK_.call(null,two);
} else
{return and__3941__auto__;
}
})()))
{return cljs.core.first.call(null,cljs.core.sort.call(null,cljs.core.compare,cljs.core.PersistentVector.fromArray([one,two], true)));
} else
{if("\uFDD0:else")
{return cljs.core.first.call(null,cljs.core.sort.call(null,logifier.nest_compare,cljs.core.PersistentVector.fromArray([one,two], true)));
} else
{return null;
}
}
}
}
});
logifier.after = (function after(one,two){
if(cljs.core.truth_((function (){var and__3941__auto__ = logifier.atom_QMARK_.call(null,one);
if(cljs.core.truth_(and__3941__auto__))
{return cljs.core.not.call(null,logifier.atom_QMARK_.call(null,two));
} else
{return and__3941__auto__;
}
})()))
{return two;
} else
{if(cljs.core.truth_((function (){var and__3941__auto__ = logifier.atom_QMARK_.call(null,two);
if(cljs.core.truth_(and__3941__auto__))
{return cljs.core.not.call(null,logifier.atom_QMARK_.call(null,one));
} else
{return and__3941__auto__;
}
})()))
{return one;
} else
{if(cljs.core.truth_((function (){var and__3941__auto__ = logifier.atom_QMARK_.call(null,one);
if(cljs.core.truth_(and__3941__auto__))
{return logifier.atom_QMARK_.call(null,two);
} else
{return and__3941__auto__;
}
})()))
{return logifier.frest.call(null,cljs.core.sort.call(null,cljs.core.compare,cljs.core.PersistentVector.fromArray([one,two], true)));
} else
{if("\uFDD0:else")
{return logifier.frest.call(null,cljs.core.sort.call(null,logifier.nest_compare,cljs.core.PersistentVector.fromArray([one,two], true)));
} else
{return null;
}
}
}
}
});
logifier.clean_up = (function clean_up(prop){
var decomp = (function decomp(prop__$1){
var operate = cljs.core.first.call(null,prop__$1);
if(cljs.core._EQ_.call(null,operate,"lnot"))
{return decomp_lnot.call(null,logifier.frest.call(null,prop__$1));
} else
{if(cljs.core._EQ_.call(null,operate,"lor"))
{return decomp_lor.call(null,cljs.core.vector.call(null,logifier.frest.call(null,prop__$1),logifier.frerest.call(null,prop__$1)));
} else
{if(cljs.core._EQ_.call(null,operate,"land"))
{return cljs.core.vector.call(null,"land",clean_up.call(null,logifier.frest.call(null,prop__$1)),clean_up.call(null,logifier.frerest.call(null,prop__$1)));
} else
{if(cljs.core._EQ_.call(null,operate,"lcond"))
{return decomp.call(null,cljs.core.vector.call(null,"lor",clean_up.call(null,logifier.negate.call(null,logifier.frest.call(null,prop__$1))),clean_up.call(null,logifier.frerest.call(null,prop__$1))));
} else
{if(cljs.core._EQ_.call(null,operate,"lbicond"))
{return decomp.call(null,cljs.core.PersistentVector.fromArray(["land",cljs.core.PersistentVector.fromArray(["lcond",logifier.frest.call(null,prop__$1),logifier.frerest.call(null,prop__$1)], true),cljs.core.PersistentVector.fromArray(["lcond",logifier.frerest.call(null,prop__$1),logifier.frest.call(null,prop__$1)], true)], true));
} else
{if("\uFDD0:else")
{return cljs.core.list.call(null,"ERROR: not a valid operator",prop__$1);
} else
{return null;
}
}
}
}
}
}
});
var decomp_lnot = (function decomp_lnot(prop__$1){
var operate = (function (){var or__3943__auto__ = logifier.atom_QMARK_.call(null,prop__$1);
if(cljs.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{return cljs.core.first.call(null,prop__$1);
}
})();
if(cljs.core.truth_(logifier.atom_QMARK_.call(null,prop__$1)))
{return cljs.core.vector.call(null,"lnot",prop__$1);
} else
{if(cljs.core._EQ_.call(null,operate,"lnot"))
{return clean_up.call(null,logifier.frest.call(null,prop__$1));
} else
{if(cljs.core._EQ_.call(null,operate,"lor"))
{return decomp.call(null,cljs.core.PersistentVector.fromArray(["land",cljs.core.PersistentVector.fromArray(["lnot",logifier.frest.call(null,prop__$1)], true),cljs.core.PersistentVector.fromArray(["lnot",logifier.frerest.call(null,prop__$1)], true)], true));
} else
{if(cljs.core._EQ_.call(null,operate,"land"))
{return decomp.call(null,cljs.core.PersistentVector.fromArray(["lor",cljs.core.PersistentVector.fromArray(["lnot",logifier.frest.call(null,prop__$1)], true),cljs.core.PersistentVector.fromArray(["lnot",logifier.frerest.call(null,prop__$1)], true)], true));
} else
{if(cljs.core._EQ_.call(null,operate,"lcond"))
{return decomp.call(null,cljs.core.PersistentVector.fromArray(["land",logifier.frest.call(null,prop__$1),cljs.core.PersistentVector.fromArray(["lnot",logifier.frerest.call(null,prop__$1)], true)], true));
} else
{if(cljs.core._EQ_.call(null,operate,"lbicond"))
{return decomp.call(null,cljs.core.PersistentVector.fromArray(["lor",cljs.core.PersistentVector.fromArray(["lnot",cljs.core.PersistentVector.fromArray(["lcond",logifier.frest.call(null,prop__$1),logifier.frerest.call(null,prop__$1)], true)], true),cljs.core.PersistentVector.fromArray(["lnot",cljs.core.PersistentVector.fromArray(["lcond",logifier.frerest.call(null,prop__$1),logifier.frest.call(null,prop__$1)], true)], true)], true));
} else
{if("\uFDD0:else")
{return cljs.core.list.call(null,"decomp-lnot ERROR",prop__$1);
} else
{return null;
}
}
}
}
}
}
}
});
var decomp_lor = (function decomp_lor(prop__$1){
return cljs.core.vector.call(null,"lor",clean_up.call(null,logifier.before.call(null,cljs.core.first.call(null,prop__$1),logifier.frest.call(null,prop__$1))),clean_up.call(null,logifier.after.call(null,cljs.core.first.call(null,prop__$1),logifier.frest.call(null,prop__$1))));
});
if(cljs.core.truth_(logifier.atom_QMARK_.call(null,prop)))
{return prop;
} else
{return decomp.call(null,prop);
}
});
logifier.prefixer = (function prefixer(expr){
if(cljs.core.truth_(logifier.atom_QMARK_.call(null,expr)))
{return expr;
} else
{if(cljs.core._EQ_.call(null,cljs.core.count.call(null,expr),1))
{return cljs.core.vector.call(null,"lnot",prefixer.call(null,logifier.frest.call(null,cljs.core.first.call(null,expr))));
} else
{if(cljs.core._EQ_.call(null,cljs.core.count.call(null,expr),2))
{return cljs.core.vector.call(null,"lnot",prefixer.call(null,logifier.frest.call(null,expr)));
} else
{if(cljs.core._EQ_.call(null,cljs.core.count.call(null,expr),3))
{var vec__14542 = expr;
var left = cljs.core.nth.call(null,vec__14542,0,null);
var op = cljs.core.nth.call(null,vec__14542,1,null);
var right = cljs.core.nth.call(null,vec__14542,2,null);
return cljs.core.vector.call(null,op,prefixer.call(null,left),prefixer.call(null,right));
} else
{return null;
}
}
}
}
});
logifier.count_next_parens = (function count_next_parens(input){
var remains = input;
var parens = 0;
var count = 0;
while(true){
if((function (){var and__3941__auto__ = cljs.core._EQ_.call(null,logifier.str_length.call(null,remains),1);
if(and__3941__auto__)
{return !(cljs.core._EQ_.call(null,cljs.core.first.call(null,remains),")"));
} else
{return and__3941__auto__;
}
})())
{return null;
} else
{if((function (){var and__3941__auto__ = cljs.core._EQ_.call(null,logifier.str_length.call(null,remains),1);
if(and__3941__auto__)
{return (parens > 1);
} else
{return and__3941__auto__;
}
})())
{return null;
} else
{if(cljs.core._EQ_.call(null,cljs.core.first.call(null,remains),")"))
{if(cljs.core._EQ_.call(null,parens,1))
{return (count + 1);
} else
{{
var G__14543 = cljs.core.subs.call(null,remains,1);
var G__14544 = (parens - 1);
var G__14545 = (count + 1);
remains = G__14543;
parens = G__14544;
count = G__14545;
continue;
}
}
} else
{if(cljs.core._EQ_.call(null,cljs.core.first.call(null,remains),"("))
{{
var G__14546 = cljs.core.subs.call(null,remains,1);
var G__14547 = (parens + 1);
var G__14548 = (count + 1);
remains = G__14546;
parens = G__14547;
count = G__14548;
continue;
}
} else
{if("\uFDD0:else")
{{
var G__14549 = cljs.core.subs.call(null,remains,1);
var G__14550 = parens;
var G__14551 = (count + 1);
remains = G__14549;
parens = G__14550;
count = G__14551;
continue;
}
} else
{return null;
}
}
}
}
}
break;
}
});
logifier.clean_parse = (function clean_parse(input){
var output = cljs.core.PersistentVector.EMPTY;
var remains = input;
while(true){
if(cljs.core._EQ_.call(null,cljs.core.first.call(null,remains),null))
{return output;
} else
{if(cljs.core._EQ_.call(null,cljs.core.first.call(null,remains)," "))
{{
var G__14552 = output;
var G__14553 = cljs.core.subs.call(null,remains,1);
output = G__14552;
remains = G__14553;
continue;
}
} else
{if(cljs.core._EQ_.call(null,cljs.core.first.call(null,remains),"v"))
{{
var G__14554 = cljs.core.conj.call(null,output,"lor");
var G__14555 = cljs.core.subs.call(null,remains,1);
output = G__14554;
remains = G__14555;
continue;
}
} else
{if(cljs.core._EQ_.call(null,cljs.core.first.call(null,remains),"&"))
{{
var G__14556 = cljs.core.conj.call(null,output,"land");
var G__14557 = cljs.core.subs.call(null,remains,1);
output = G__14556;
remains = G__14557;
continue;
}
} else
{if(cljs.core._EQ_.call(null,cljs.core.first.call(null,remains),">"))
{{
var G__14558 = cljs.core.conj.call(null,output,"lcond");
var G__14559 = cljs.core.subs.call(null,remains,1);
output = G__14558;
remains = G__14559;
continue;
}
} else
{if(cljs.core._EQ_.call(null,cljs.core.first.call(null,remains),"<"))
{{
var G__14560 = cljs.core.conj.call(null,output,"lbicond");
var G__14561 = cljs.core.subs.call(null,remains,2);
output = G__14560;
remains = G__14561;
continue;
}
} else
{if((function (){var or__3943__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,remains),"~");
if(or__3943__auto__)
{return or__3943__auto__;
} else
{return cljs.core._EQ_.call(null,cljs.core.first.call(null,remains),"-");
}
})())
{if(cljs.core._EQ_.call(null,cljs.core.subs.call(null,remains,1,2),"("))
{{
var G__14562 = cljs.core.conj.call(null,output,cljs.core.vector.call(null,"lnot",cljs.core.subs.call(null,remains,1,logifier.count_next_parens.call(null,cljs.core.subs.call(null,remains,0)))));
var G__14563 = cljs.core.subs.call(null,remains,logifier.count_next_parens.call(null,remains));
output = G__14562;
remains = G__14563;
continue;
}
} else
{{
var G__14564 = cljs.core.conj.call(null,output,cljs.core.vector.call(null,"lnot",cljs.core.first.call(null,cljs.core.subs.call(null,remains,1))));
var G__14565 = cljs.core.subs.call(null,remains,2);
output = G__14564;
remains = G__14565;
continue;
}
}
} else
{if(cljs.core._EQ_.call(null,cljs.core.first.call(null,remains),"("))
{{
var G__14566 = cljs.core.conj.call(null,output,cljs.core.subs.call(null,remains,0,logifier.count_next_parens.call(null,remains)));
var G__14567 = cljs.core.subs.call(null,remains,logifier.count_next_parens.call(null,remains));
output = G__14566;
remains = G__14567;
continue;
}
} else
{if(cljs.core.truth_(logifier.simple_QMARK_.call(null,cljs.core.first.call(null,remains))))
{{
var G__14568 = cljs.core.conj.call(null,output,cljs.core.first.call(null,remains));
var G__14569 = cljs.core.subs.call(null,remains,1);
output = G__14568;
remains = G__14569;
continue;
}
} else
{if("\uFDD0:else")
{return clojure.string.join.call(null,cljs.core.list.call(null,"ERROR: something's amiss with input: ",input));
} else
{return null;
}
}
}
}
}
}
}
}
}
}
break;
}
});
logifier.vectorize = (function vectorize(input){
if(cljs.core._EQ_.call(null,cljs.core.first.call(null,input),"("))
{var output = cljs.core.PersistentVector.EMPTY;
var remains = input;
var count = 0;
while(true){
if(cljs.core._EQ_.call(null,cljs.core.first.call(null,remains),")"))
{if(cljs.core._EQ_.call(null,count,1))
{return clojure.string.join.call(null,output);
} else
{{
var G__14570 = cljs.core.conj.call(null,output,")");
var G__14571 = cljs.core.subs.call(null,remains,1);
var G__14572 = (count - 1);
output = G__14570;
remains = G__14571;
count = G__14572;
continue;
}
}
} else
{if(cljs.core._EQ_.call(null,cljs.core.first.call(null,remains),"("))
{if(cljs.core._EQ_.call(null,count,0))
{{
var G__14573 = cljs.core.PersistentVector.EMPTY;
var G__14574 = cljs.core.subs.call(null,remains,1);
var G__14575 = 1;
output = G__14573;
remains = G__14574;
count = G__14575;
continue;
}
} else
{{
var G__14576 = cljs.core.conj.call(null,output,cljs.core.first.call(null,remains));
var G__14577 = cljs.core.subs.call(null,remains,1);
var G__14578 = (count + 1);
output = G__14576;
remains = G__14577;
count = G__14578;
continue;
}
}
} else
{if("\uFDD0:else")
{{
var G__14579 = cljs.core.conj.call(null,output,cljs.core.first.call(null,remains));
var G__14580 = cljs.core.subs.call(null,remains,1);
var G__14581 = count;
output = G__14579;
remains = G__14580;
count = G__14581;
continue;
}
} else
{return null;
}
}
}
break;
}
} else
{return input;
}
});
logifier.nest_parse = (function nest_parse(input){
if(cljs.core.truth_(logifier.simple_QMARK_.call(null,input)))
{return cljs.core.first.call(null,input);
} else
{var input__$1 = logifier.clean_parse.call(null,input);
var parse = (function parse(input__$2){
if(cljs.core.truth_(logifier.simple_QMARK_.call(null,input__$2)))
{return input__$2;
} else
{if(cljs.core._EQ_.call(null,cljs.core.type.call(null,input__$2),cljs.core.PersistentVector))
{return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,parse,input__$2));
} else
{if("\uFDD0:else")
{if(cljs.core._EQ_.call(null,cljs.core.first.call(null,input__$2),"("))
{return nest_parse.call(null,logifier.vectorize.call(null,input__$2));
} else
{return input__$2;
}
} else
{return null;
}
}
}
});
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,parse,input__$1));
}
});
logifier.sheffer_atom = (function sheffer_atom(prop){
return cljs.core.vector.call(null,"|",cljs.core.vector.call(null,"|",prop,prop),cljs.core.vector.call(null,"|",prop,prop));
});
logifier.sheffer_not = (function sheffer_not(prop){
var negated_prop = cljs.core.rest.call(null,prop);
return cljs.core.vector.call(null,"|",cljs.core.first.call(null,negated_prop),cljs.core.first.call(null,negated_prop));
});
logifier.sheffer_or = (function sheffer_or(prop){
var one = logifier.frest.call(null,prop);
var two = logifier.frerest.call(null,prop);
var earlier = logifier.before.call(null,one,two);
var later = logifier.after.call(null,one,two);
return cljs.core.vector.call(null,"|",cljs.core.vector.call(null,"|",earlier,earlier),cljs.core.vector.call(null,"|",later,later));
});
logifier.sheffer_and = (function sheffer_and(prop){
var one = logifier.frest.call(null,prop);
var two = logifier.frerest.call(null,prop);
var earlier = logifier.before.call(null,one,two);
var later = logifier.after.call(null,one,two);
return cljs.core.vector.call(null,"|",cljs.core.vector.call(null,"|",earlier,later),cljs.core.vector.call(null,"|",earlier,later));
});
logifier.sheffer_cond = (function sheffer_cond(prop){
var negated_one = cljs.core.vector.call(null,"lnot",logifier.frest.call(null,prop));
var two = logifier.frerest.call(null,prop);
return logifier.sheffer_or.call(null,cljs.core.vector.call(null,"lor",negated_one,two));
});
logifier.shefferize = (function shefferize(prop){
logifier.simple_QMARK_.call(null,cljs.core.first.call(null,prop));
logifier.sheffer_atom.call(null,prop);
var operator = cljs.core.first.call(null,prop);
if(cljs.core._EQ_.call(null,operator,"lnot"))
{return logifier.sheffer_not.call(null,prop);
} else
{if(cljs.core._EQ_.call(null,operator,"lor"))
{return logifier.sheffer_or.call(null,prop);
} else
{if(cljs.core._EQ_.call(null,operator,"land"))
{return logifier.sheffer_and.call(null,prop);
} else
{if(cljs.core._EQ_.call(null,operator,"lcond"))
{return logifier.sheffer_cond.call(null,prop);
} else
{if(cljs.core._EQ_.call(null,operator,"lbicond"))
{return logifier.sheffer_and.call(null,cljs.core.vector.call(null,"land",logifier.sheffer_cond.call(null,cljs.core.vector.call(null,"lcond",logifier.frest.call(null,prop),logifier.frerest.call(null,prop))),logifier.sheffer_cond.call(null,cljs.core.vector.call(null,"lcond",logifier.frerest.call(null,prop),logifier.frest.call(null,prop)))));
} else
{return null;
}
}
}
}
}
});
logifier.binary_operator_QMARK_ = (function binary_operator_QMARK_(character){
if(cljs.core._EQ_.call(null,character,null))
{return false;
} else
{return cljs.core.boolean$.call(null,cljs.core.re_find.call(null,/[><&v]/,character));
}
});
logifier.negate_operator_QMARK_ = (function negate_operator_QMARK_(character){
var or__3943__auto__ = cljs.core._EQ_.call(null,character,"~");
if(or__3943__auto__)
{return or__3943__auto__;
} else
{return cljs.core._EQ_.call(null,character,"-");
}
});
logifier.input_operator_QMARK_ = (function input_operator_QMARK_(character){
var or__3943__auto__ = logifier.binary_operator_QMARK_.call(null,character);
if(cljs.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{return logifier.negate_operator_QMARK_.call(null,character);
}
});
logifier.next_char = (function next_char(prop){
if(cljs.core._EQ_.call(null,logifier.str_length.call(null,prop),1))
{return null;
} else
{var length = logifier.str_length.call(null,prop);
var next_one = cljs.core.subs.call(null,prop,1,2);
var count = 1;
while(true){
if(cljs.core._EQ_.call(null,next_one," "))
{if((count < length))
{{
var G__14582 = cljs.core.subs.call(null,prop,count,(count + 1));
var G__14583 = (count + 1);
next_one = G__14582;
count = G__14583;
continue;
}
} else
{return null;
}
} else
{if("\uFDD0:else")
{return next_one;
} else
{return null;
}
}
break;
}
}
});
logifier.atomic_prop_QMARK_ = (function atomic_prop_QMARK_(prop){
if(cljs.core._EQ_.call(null,prop,null))
{return false;
} else
{return cljs.core.boolean$.call(null,cljs.core.re_find.call(null,/(?=[^v])[a-z]/,prop));
}
});
logifier.balanced_parens_QMARK_ = (function balanced_parens_QMARK_(prop){
return cljs.core.boolean$.call(null,logifier.count_next_parens.call(null,prop));
});
logifier.open_parens_QMARK_ = (function open_parens_QMARK_(char$){
var or__3943__auto__ = cljs.core._EQ_.call(null,char$,"(");
if(or__3943__auto__)
{return or__3943__auto__;
} else
{return cljs.core._EQ_.call(null,char$,"(");
}
});
logifier.close_parens_QMARK_ = (function close_parens_QMARK_(char$){
var or__3943__auto__ = cljs.core._EQ_.call(null,char$,")");
if(or__3943__auto__)
{return or__3943__auto__;
} else
{return cljs.core._EQ_.call(null,char$,")");
}
});
logifier.reformat_prop = (function reformat_prop(prop){
if((function (){var or__3943__auto__ = cljs.core._EQ_.call(null,prop,"");
if(or__3943__auto__)
{return or__3943__auto__;
} else
{return cljs.core._EQ_.call(null,prop,null);
}
})())
{return "invalid syntax";
} else
{var prop__$1 = clojure.string.trim.call(null,prop);
if((function (){var and__3941__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,prop__$1),"(");
if(and__3941__auto__)
{return cljs.core._EQ_.call(null,logifier.count_next_parens.call(null,prop__$1),logifier.str_length.call(null,prop__$1));
} else
{return and__3941__auto__;
}
})())
{return reformat_prop.call(null,cljs.core.subs.call(null,prop__$1,1,(logifier.str_length.call(null,prop__$1) - 1)));
} else
{var output = cljs.core.PersistentVector.EMPTY;
var remains = prop__$1;
while(true){
var this_one = cljs.core.subs.call(null,remains,0,1);
if(cljs.core._EQ_.call(null,logifier.str_length.call(null,remains),1))
{return clojure.string.trim.call(null,clojure.string.join.call(null,cljs.core.conj.call(null,output,this_one)));
} else
{if(cljs.core._EQ_.call(null,this_one," "))
{{
var G__14584 = output;
var G__14585 = cljs.core.subs.call(null,remains,1);
output = G__14584;
remains = G__14585;
continue;
}
} else
{if(cljs.core.truth_(logifier.atomic_prop_QMARK_.call(null,this_one)))
{if(cljs.core._EQ_.call(null,logifier.next_char.call(null,remains),")"))
{{
var G__14586 = cljs.core.conj.call(null,output,this_one);
var G__14587 = cljs.core.subs.call(null,remains,1);
output = G__14586;
remains = G__14587;
continue;
}
} else
{{
var G__14588 = cljs.core.conj.call(null,output,this_one," ");
var G__14589 = cljs.core.subs.call(null,remains,1);
output = G__14588;
remains = G__14589;
continue;
}
}
} else
{if(cljs.core.truth_(logifier.binary_operator_QMARK_.call(null,this_one)))
{if(cljs.core._EQ_.call(null,this_one,"<"))
{{
var G__14590 = cljs.core.conj.call(null,output,this_one,"> ");
var G__14591 = cljs.core.subs.call(null,remains,2);
output = G__14590;
remains = G__14591;
continue;
}
} else
{{
var G__14592 = cljs.core.conj.call(null,output,this_one," ");
var G__14593 = cljs.core.subs.call(null,remains,1);
output = G__14592;
remains = G__14593;
continue;
}
}
} else
{if(cljs.core.truth_(logifier.negate_operator_QMARK_.call(null,this_one)))
{{
var G__14594 = cljs.core.conj.call(null,output,this_one);
var G__14595 = cljs.core.subs.call(null,remains,1);
output = G__14594;
remains = G__14595;
continue;
}
} else
{if(cljs.core._EQ_.call(null,this_one,"("))
{{
var G__14596 = cljs.core.conj.call(null,output,this_one);
var G__14597 = cljs.core.subs.call(null,remains,1);
output = G__14596;
remains = G__14597;
continue;
}
} else
{if(cljs.core._EQ_.call(null,this_one,")"))
{if(cljs.core._EQ_.call(null,logifier.next_char.call(null,remains),")"))
{{
var G__14598 = cljs.core.conj.call(null,output,this_one);
var G__14599 = cljs.core.subs.call(null,remains,1);
output = G__14598;
remains = G__14599;
continue;
}
} else
{{
var G__14600 = cljs.core.conj.call(null,output,this_one," ");
var G__14601 = cljs.core.subs.call(null,remains,1);
output = G__14600;
remains = G__14601;
continue;
}
}
} else
{return null;
}
}
}
}
}
}
}
break;
}
}
}
});
logifier.ready_to_assert = (function ready_to_assert(prop){
var prop__$1 = logifier.reformat_prop.call(null,prop);
if(cljs.core._EQ_.call(null,logifier.str_length.call(null,prop__$1),1))
{return prop__$1;
} else
{if(cljs.core._EQ_.call(null,cljs.core.first.call(null,prop__$1),"~"))
{return prop__$1;
} else
{if("\uFDD0:else")
{return logifier.joincat.call(null,"(",prop__$1,")");
} else
{return null;
}
}
}
});
logifier.valid_input_QMARK_ = (function valid_input_QMARK_(prop){
var remains = prop;
while(true){
var this_one = cljs.core.subs.call(null,remains,0,1);
var next_one = logifier.next_char.call(null,remains);
if(cljs.core._EQ_.call(null,this_one," "))
{{
var G__14602 = cljs.core.subs.call(null,remains,1);
remains = G__14602;
continue;
}
} else
{if(cljs.core._EQ_.call(null,logifier.str_length.call(null,remains),1))
{if(cljs.core.truth_(logifier.input_operator_QMARK_.call(null,remains)))
{return false;
} else
{if(cljs.core.truth_(logifier.open_parens_QMARK_.call(null,remains)))
{return false;
} else
{if(cljs.core.truth_((function (){var or__3943__auto__ = cljs.core._EQ_.call(null,next_one,null);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{return logifier.atomic_prop_QMARK_.call(null,remains);
}
})()))
{return true;
} else
{if("\uFDD0:else")
{return false;
} else
{return null;
}
}
}
}
} else
{if(cljs.core.truth_(logifier.atomic_prop_QMARK_.call(null,this_one)))
{if(cljs.core._EQ_.call(null,next_one,null))
{return true;
} else
{if(cljs.core.truth_(logifier.binary_operator_QMARK_.call(null,next_one)))
{{
var G__14603 = cljs.core.subs.call(null,remains,1);
remains = G__14603;
continue;
}
} else
{if("\uFDD0:else")
{return false;
} else
{return null;
}
}
}
} else
{if(cljs.core.truth_(logifier.binary_operator_QMARK_.call(null,this_one)))
{if(cljs.core.truth_((function (){var or__3943__auto__ = logifier.atomic_prop_QMARK_.call(null,next_one);
if(cljs.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = logifier.negate_operator_QMARK_.call(null,next_one);
if(cljs.core.truth_(or__3943__auto____$1))
{return or__3943__auto____$1;
} else
{return cljs.core._EQ_.call(null,next_one,"(");
}
}
})()))
{{
var G__14604 = cljs.core.subs.call(null,remains,1);
remains = G__14604;
continue;
}
} else
{if(cljs.core._EQ_.call(null,next_one,">"))
{{
var G__14605 = cljs.core.subs.call(null,remains,2);
remains = G__14605;
continue;
}
} else
{return false;
}
}
} else
{if(cljs.core.truth_(logifier.negate_operator_QMARK_.call(null,this_one)))
{if(cljs.core.truth_((function (){var or__3943__auto__ = logifier.atomic_prop_QMARK_.call(null,next_one);
if(cljs.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{return cljs.core._EQ_.call(null,next_one,"(");
}
})()))
{{
var G__14606 = cljs.core.subs.call(null,remains,1);
remains = G__14606;
continue;
}
} else
{return false;
}
} else
{if(cljs.core._EQ_.call(null,this_one,"("))
{if(cljs.core.truth_(logifier.balanced_parens_QMARK_.call(null,remains)))
{if(cljs.core.truth_(valid_input_QMARK_.call(null,logifier.reformat_prop.call(null,cljs.core.subs.call(null,remains,1,(logifier.count_next_parens.call(null,remains) - 1))))))
{if((logifier.count_next_parens.call(null,remains) < logifier.str_length.call(null,remains)))
{{
var G__14607 = clojure.string.join.call(null,cljs.core.concat.call(null,"p",cljs.core.subs.call(null,remains,logifier.count_next_parens.call(null,remains))));
remains = G__14607;
continue;
}
} else
{return true;
}
} else
{return false;
}
} else
{return false;
}
} else
{if("\uFDD0:else")
{return false;
} else
{return null;
}
}
}
}
}
}
}
break;
}
});
logifier.parse_prop = (function parse_prop(prop){
var prop__$1 = logifier.reformat_prop.call(null,prop);
if((function (){var and__3941__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,prop__$1),"(");
if(and__3941__auto__)
{return cljs.core._EQ_.call(null,logifier.count_next_parens.call(null,prop__$1),logifier.str_length.call(null,prop__$1));
} else
{return and__3941__auto__;
}
})())
{return parse_prop.call(null,cljs.core.subs.call(null,prop__$1,1,(logifier.str_length.call(null,prop__$1) - 1)));
} else
{if(cljs.core.truth_(logifier.valid_input_QMARK_.call(null,prop__$1)))
{return logifier.prefixer.call(null,logifier.nest_parse.call(null,prop__$1));
} else
{return null;
}
}
});
logifier.parse_prop_seq = (function parse_prop_seq(props){
return cljs.core.map.call(null,logifier.parse_prop,props);
});
logifier.tautology_QMARK_ = (function tautology_QMARK_(orig_prop){
if(cljs.core.truth_(logifier.atom_QMARK_.call(null,orig_prop)))
{return false;
} else
{var prop = logifier.clean_up.call(null,orig_prop);
var one = logifier.frest.call(null,prop);
var two = logifier.frerest.call(null,prop);
if(cljs.core._EQ_.call(null,cljs.core.first.call(null,prop),"lor"))
{var or__3943__auto__ = cljs.core._EQ_.call(null,logifier.negate.call(null,one),two);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{return cljs.core._EQ_.call(null,logifier.negate.call(null,two),one);
}
} else
{return false;
}
}
});
logifier.contradiction_QMARK_ = (function contradiction_QMARK_(orig_prop){
if(cljs.core.truth_(logifier.atom_QMARK_.call(null,orig_prop)))
{return false;
} else
{var prop = logifier.clean_up.call(null,orig_prop);
var one = logifier.frest.call(null,prop);
var two = logifier.frerest.call(null,prop);
if(cljs.core._EQ_.call(null,cljs.core.first.call(null,prop),"land"))
{var or__3943__auto__ = cljs.core._EQ_.call(null,logifier.negate.call(null,one),two);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{return cljs.core._EQ_.call(null,logifier.negate.call(null,two),one);
}
} else
{return false;
}
}
});
logifier.distribute_QMARK_ = (function distribute_QMARK_(one,two){
if(cljs.core.truth_((function (){var and__3941__auto__ = logifier.land_QMARK_.call(null,one);
if(cljs.core.truth_(and__3941__auto__))
{return logifier.land_QMARK_.call(null,two);
} else
{return and__3941__auto__;
}
})()))
{var or__3943__auto__ = cljs.core._EQ_.call(null,logifier.frest.call(null,one),logifier.frest.call(null,two));
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = cljs.core._EQ_.call(null,logifier.frest.call(null,one),logifier.frerest.call(null,two));
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{var or__3943__auto____$2 = cljs.core._EQ_.call(null,logifier.frerest.call(null,one),logifier.frest.call(null,two));
if(or__3943__auto____$2)
{return or__3943__auto____$2;
} else
{return cljs.core._EQ_.call(null,logifier.frerest.call(null,one),logifier.frerest.call(null,two));
}
}
}
} else
{return null;
}
});
logifier.distributed = (function distributed(one,two){
if(cljs.core.truth_((function (){var and__3941__auto__ = logifier.land_QMARK_.call(null,one);
if(cljs.core.truth_(and__3941__auto__))
{return logifier.land_QMARK_.call(null,two);
} else
{return and__3941__auto__;
}
})()))
{if(cljs.core._EQ_.call(null,logifier.frest.call(null,one),logifier.frest.call(null,two)))
{return cljs.core.vector.call(null,"land",logifier.frest.call(null,one),cljs.core.vector.call(null,"lor",logifier.before.call(null,logifier.frerest.call(null,one),logifier.frerest.call(null,two)),logifier.after.call(null,logifier.frerest.call(null,one),logifier.frerest.call(null,two))));
} else
{if(cljs.core._EQ_.call(null,logifier.frest.call(null,one),logifier.frerest.call(null,two)))
{return cljs.core.vector.call(null,"land",logifier.frest.call(null,one),cljs.core.vector.call(null,"lor",logifier.before.call(null,logifier.frerest.call(null,one),logifier.frest.call(null,two)),logifier.after.call(null,logifier.frerest.call(null,one),logifier.frest.call(null,two))));
} else
{if(cljs.core._EQ_.call(null,logifier.frerest.call(null,one),logifier.frest.call(null,two)))
{return cljs.core.vector.call(null,"land",logifier.frerest.call(null,one),cljs.core.vector.call(null,"lor",logifier.before.call(null,logifier.frest.call(null,one),logifier.frerest.call(null,two)),logifier.after.call(null,logifier.frest.call(null,one),logifier.frerest.call(null,two))));
} else
{if(cljs.core._EQ_.call(null,logifier.frerest.call(null,one),logifier.frerest.call(null,two)))
{return cljs.core.vector.call(null,"land",logifier.frerest.call(null,one),cljs.core.vector.call(null,"lor",logifier.before.call(null,logifier.frest.call(null,one),logifier.frest.call(null,two)),logifier.after.call(null,logifier.frest.call(null,one),logifier.frest.call(null,two))));
} else
{if("\uFDD0:else")
{return cljs.core.vector.call(null,"lor",one,two);
} else
{return null;
}
}
}
}
}
} else
{return null;
}
});
logifier.evaluate = (function evaluate(prop,this_model){
var prop__$1 = logifier.clean_up.call(null,prop);
var evaluate_composite = (function evaluate_composite(prop__$2){
var operate = cljs.core.first.call(null,prop__$2);
if(cljs.core._EQ_.call(null,operate,"lnot"))
{return lnot.call(null,logifier.frest.call(null,prop__$2));
} else
{if(cljs.core._EQ_.call(null,operate,"lor"))
{return lor.call(null,cljs.core.rest.call(null,prop__$2));
} else
{if(cljs.core._EQ_.call(null,operate,"land"))
{return land.call(null,cljs.core.rest.call(null,prop__$2));
} else
{if(cljs.core._EQ_.call(null,operate,"lcond"))
{return lcond.call(null,cljs.core.rest.call(null,prop__$2));
} else
{if(cljs.core._EQ_.call(null,operate,"lbicond"))
{return land.call(null,cljs.core.PersistentVector.fromArray([cljs.core.PersistentVector.fromArray(["lcond",logifier.frest.call(null,prop__$2),logifier.frerest.call(null,prop__$2)], true),cljs.core.PersistentVector.fromArray(["lcond",logifier.frerest.call(null,prop__$2),logifier.frest.call(null,prop__$2)], true)], true));
} else
{if("\uFDD0:else")
{return cljs.core.list.call(null,"ERROR: Invalid operator",prop__$2);
} else
{return null;
}
}
}
}
}
}
});
var cond_proof_QMARK_ = (function cond_proof_QMARK_(one,two){
logifier.clear_model.call(null,logifier.conditional_model);
cljs.core.reset_BANG_.call(null,logifier.conditional_model,cljs.core.deref.call(null,this_model));
logifier.affirm.call(null,logifier.negate.call(null,one),logifier.conditional_model);
if(cljs.core._EQ_.call(null,evaluate.call(null,two,logifier.conditional_model),"true"))
{return true;
} else
{return false;
}
});
var lnot = (function lnot(prop__$2){
if(cljs.core._EQ_.call(null,evaluate.call(null,prop__$2,this_model),"true"))
{return "false";
} else
{if(cljs.core._EQ_.call(null,evaluate.call(null,prop__$2,this_model),"false"))
{return "true";
} else
{if("\uFDD0:else")
{return "unknown";
} else
{return null;
}
}
}
});
var lor = (function lor(prop__$2){
var one = cljs.core.first.call(null,prop__$2);
var two = logifier.frest.call(null,prop__$2);
if(cljs.core._EQ_.call(null,evaluate.call(null,one,this_model),"true"))
{return "true";
} else
{if(cljs.core._EQ_.call(null,evaluate.call(null,two,this_model),"true"))
{return "true";
} else
{if((function (){var and__3941__auto__ = cljs.core._EQ_.call(null,evaluate.call(null,one,this_model),"false");
if(and__3941__auto__)
{return cljs.core._EQ_.call(null,evaluate.call(null,two,this_model),"false");
} else
{return and__3941__auto__;
}
})())
{return "false";
} else
{if(cljs.core.truth_((function (){var or__3943__auto__ = logifier.has_name_QMARK_.call(null,cljs.core.vector.call(null,"lor",one,two),this_model);
if(cljs.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{return logifier.has_name_QMARK_.call(null,cljs.core.vector.call(null,"lor",two,one),this_model);
}
})()))
{return "true";
} else
{if(cljs.core.truth_(cond_proof_QMARK_.call(null,one,two)))
{return "true";
} else
{if(cljs.core.truth_(cond_proof_QMARK_.call(null,two,one)))
{return "true";
} else
{if(cljs.core.truth_((function (){var and__3941__auto__ = logifier.land_QMARK_.call(null,one);
if(cljs.core.truth_(and__3941__auto__))
{return logifier.land_QMARK_.call(null,two);
} else
{return and__3941__auto__;
}
})()))
{if(cljs.core.truth_(logifier.distribute_QMARK_.call(null,one,two)))
{return evaluate.call(null,logifier.distributed.call(null,one,two),this_model);
} else
{return "unknown";
}
} else
{if("\uFDD0:else")
{return "unknown";
} else
{return null;
}
}
}
}
}
}
}
}
});
var land = (function land(prop__$2){
var one = cljs.core.first.call(null,prop__$2);
var two = logifier.frest.call(null,prop__$2);
var initial = evaluate.call(null,one,this_model);
if(cljs.core._EQ_.call(null,initial,"true"))
{return evaluate.call(null,two,this_model);
} else
{if("\uFDD0:else")
{return initial;
} else
{return null;
}
}
});
var lcond = (function lcond(prop__$2){
var one = cljs.core.first.call(null,prop__$2);
var two = logifier.frest.call(null,prop__$2);
return evaluate.call(null,cljs.core.vector.call(null,"lor",cljs.core.vector.call(null,"lnot",one),two),this_model);
});
if(cljs.core.truth_(logifier.tautology_QMARK_.call(null,prop__$1)))
{return "true";
} else
{if(cljs.core.truth_(logifier.contradiction_QMARK_.call(null,prop__$1)))
{return "false";
} else
{if(cljs.core.truth_(logifier.atom_QMARK_.call(null,prop__$1)))
{return logifier.find_value.call(null,prop__$1,this_model);
} else
{if("\uFDD0:else")
{return evaluate_composite.call(null,prop__$1);
} else
{return null;
}
}
}
}
});
logifier.list_reversed_symbols = (function list_reversed_symbols(input){
if((function (){var and__3941__auto__ = cljs.core._EQ_.call(null,cljs.core.count.call(null,input),1);
if(and__3941__auto__)
{return cljs.core._EQ_.call(null,logifier.evaluate.call(null,cljs.core.first.call(null,input),logifier.model),"false");
} else
{return and__3941__auto__;
}
})())
{return list_reversed_symbols.call(null,cljs.core.conj.call(null,cljs.core.PersistentVector.fromArray(["lnot"], true),input));
} else
{var input__$1 = cljs.core.flatten.call(null,input);
var output = cljs.core.PersistentVector.EMPTY;
var remains = input__$1;
var binary_count = 0;
while(true){
var pred__14612 = cljs.core._EQ_;
var expr__14613 = cljs.core.first.call(null,remains);
if(pred__14612.call(null,null,expr__14613))
{return clojure.string.join.call(null,cljs.core.flatten.call(null,cljs.core.conj.call(null,output,cljs.core.repeat.call(null,binary_count,"()"))));
} else
{if(pred__14612.call(null,"lnot",expr__14613))
{{
var G__14615 = cljs.core.conj.call(null,output,"~");
var G__14616 = cljs.core.rest.call(null,remains);
var G__14617 = binary_count;
output = G__14615;
remains = G__14616;
binary_count = G__14617;
continue;
}
} else
{if(pred__14612.call(null,"lor",expr__14613))
{{
var G__14618 = cljs.core.conj.call(null,output,"v");
var G__14619 = cljs.core.rest.call(null,remains);
var G__14620 = (binary_count + 1);
output = G__14618;
remains = G__14619;
binary_count = G__14620;
continue;
}
} else
{if(pred__14612.call(null,"land",expr__14613))
{{
var G__14621 = cljs.core.conj.call(null,output,"&");
var G__14622 = cljs.core.rest.call(null,remains);
var G__14623 = (binary_count + 1);
output = G__14621;
remains = G__14622;
binary_count = G__14623;
continue;
}
} else
{if(pred__14612.call(null,"lcond",expr__14613))
{{
var G__14624 = cljs.core.conj.call(null,output,">");
var G__14625 = cljs.core.rest.call(null,remains);
var G__14626 = (binary_count + 1);
output = G__14624;
remains = G__14625;
binary_count = G__14626;
continue;
}
} else
{if(cljs.core.truth_(logifier.simple_QMARK_.call(null,cljs.core.first.call(null,remains))))
{{
var G__14627 = cljs.core.conj.call(null,output,[cljs.core.str(cljs.core.first.call(null,remains))].join(''));
var G__14628 = cljs.core.rest.call(null,remains);
var G__14629 = binary_count;
output = G__14627;
remains = G__14628;
binary_count = G__14629;
continue;
}
} else
{{
var G__14630 = cljs.core.conj.call(null,output,cljs.core.first.call(null,remains));
var G__14631 = cljs.core.rest.call(null,remains);
var G__14632 = binary_count;
output = G__14630;
remains = G__14631;
binary_count = G__14632;
continue;
}
}
}
}
}
}
}
break;
}
}
});
logifier.affirm = (function affirm(prop,this_model){
var prop__$1 = logifier.clean_up.call(null,prop);
var inconsistent_QMARK_ = (function inconsistent_QMARK_(prop__$2){
if(cljs.core._EQ_.call(null,logifier.evaluate.call(null,prop__$2,this_model),"false"))
{return true;
} else
{if(cljs.core.truth_(logifier.contradiction_QMARK_.call(null,prop__$2)))
{return true;
} else
{if((function (){var and__3941__auto__ = cljs.core.not.call(null,logifier.atom_QMARK_.call(null,prop__$2));
if(and__3941__auto__)
{return cljs.core._EQ_.call(null,cljs.core.first.call(null,prop__$2),"land");
} else
{return and__3941__auto__;
}
})())
{cljs.core.reset_BANG_.call(null,logifier.test_model,cljs.core.deref.call(null,this_model));
if(cljs.core._EQ_.call(null,logifier.evaluate.call(null,logifier.frest.call(null,prop__$2),logifier.test_model),"false"))
{return true;
} else
{affirm.call(null,logifier.frest.call(null,prop__$2),logifier.test_model);
return cljs.core._EQ_.call(null,logifier.evaluate.call(null,logifier.frerest.call(null,prop__$2),logifier.test_model),"false");
}
} else
{if("\uFDD0:else")
{return false;
} else
{return null;
}
}
}
}
});
var insert_prop = (function insert_prop(prop__$2,value,this_model__$1){
var recalc = (function recalc(){
var initial_state = cljs.core.deref.call(null,this_model__$1);
while(true){
var seq__14669_14681 = cljs.core.seq.call(null,logifier.list_names.call(null,this_model__$1));
var chunk__14670_14682 = null;
var count__14671_14683 = 0;
var i__14672_14684 = 0;
while(true){
if((i__14672_14684 < count__14671_14683))
{var props_14685 = cljs.core._nth.call(null,chunk__14670_14682,i__14672_14684);
affirm.call(null,props_14685,this_model__$1);
{
var G__14686 = seq__14669_14681;
var G__14687 = chunk__14670_14682;
var G__14688 = count__14671_14683;
var G__14689 = (i__14672_14684 + 1);
seq__14669_14681 = G__14686;
chunk__14670_14682 = G__14687;
count__14671_14683 = G__14688;
i__14672_14684 = G__14689;
continue;
}
} else
{var temp__4092__auto___14690 = cljs.core.seq.call(null,seq__14669_14681);
if(temp__4092__auto___14690)
{var seq__14669_14691__$1 = temp__4092__auto___14690;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14669_14691__$1))
{var c__3075__auto___14692 = cljs.core.chunk_first.call(null,seq__14669_14691__$1);
{
var G__14693 = cljs.core.chunk_rest.call(null,seq__14669_14691__$1);
var G__14694 = c__3075__auto___14692;
var G__14695 = cljs.core.count.call(null,c__3075__auto___14692);
var G__14696 = 0;
seq__14669_14681 = G__14693;
chunk__14670_14682 = G__14694;
count__14671_14683 = G__14695;
i__14672_14684 = G__14696;
continue;
}
} else
{var props_14697 = cljs.core.first.call(null,seq__14669_14691__$1);
affirm.call(null,props_14697,this_model__$1);
{
var G__14698 = cljs.core.next.call(null,seq__14669_14691__$1);
var G__14699 = null;
var G__14700 = 0;
var G__14701 = 0;
seq__14669_14681 = G__14698;
chunk__14670_14682 = G__14699;
count__14671_14683 = G__14700;
i__14672_14684 = G__14701;
continue;
}
}
} else
{}
}
break;
}
if(!(cljs.core._EQ_.call(null,initial_state,cljs.core.deref.call(null,this_model__$1))))
{{
var G__14702 = cljs.core.deref.call(null,this_model__$1);
initial_state = G__14702;
continue;
}
} else
{return null;
}
break;
}
});
if(cljs.core.truth_(logifier.has_name_QMARK_.call(null,prop__$2,this_model__$1)))
{return "Duplicate Entry";
} else
{if(cljs.core.truth_(logifier.wff_QMARK_.call(null,prop__$2)))
{return cljs.core.swap_BANG_.call(null,this_model__$1,cljs.core.conj,cljs.core.PersistentArrayMap.fromArray(["\uFDD0:name",prop__$2,"\uFDD0:value",value], true));
} else
{return recalc.call(null);
}
}
});
var new_affirm = (function new_affirm(prop__$2){
if(cljs.core.not.call(null,logifier.has_name_QMARK_.call(null,logifier.clean_up.call(null,prop__$2),this_model)))
{return affirm.call(null,prop__$2,this_model);
} else
{return null;
}
});
var decomp = (function decomp(prop__$2){
var operate = cljs.core.first.call(null,prop__$2);
if(cljs.core._EQ_.call(null,operate,"lnot"))
{return insert_prop.call(null,logifier.frest.call(null,prop__$2),"false",this_model);
} else
{if(cljs.core._EQ_.call(null,operate,"lor"))
{return decomp_lor.call(null,cljs.core.vector.call(null,logifier.frest.call(null,prop__$2),logifier.frerest.call(null,prop__$2)));
} else
{if(cljs.core._EQ_.call(null,operate,"land"))
{affirm.call(null,logifier.frest.call(null,prop__$2),this_model);
return affirm.call(null,logifier.frerest.call(null,prop__$2),this_model);
} else
{if("\uFDD0:else")
{return cljs.core.list.call(null,"ERROR: not a valid operator",prop__$2);
} else
{return null;
}
}
}
}
});
var decomp_lor = (function decomp_lor(prop__$2){
var earlier = logifier.before.call(null,cljs.core.first.call(null,prop__$2),logifier.frest.call(null,prop__$2));
var later = logifier.after.call(null,cljs.core.first.call(null,prop__$2),logifier.frest.call(null,prop__$2));
if(cljs.core._EQ_.call(null,logifier.evaluate.call(null,cljs.core.first.call(null,prop__$2),this_model),"false"))
{affirm.call(null,logifier.frest.call(null,prop__$2),this_model);
} else
{if(cljs.core._EQ_.call(null,logifier.evaluate.call(null,logifier.frest.call(null,prop__$2),this_model),"false"))
{affirm.call(null,cljs.core.first.call(null,prop__$2),this_model);
} else
{if(cljs.core._EQ_.call(null,earlier,later))
{affirm.call(null,earlier,this_model);
} else
{if(cljs.core.truth_((function (){var and__3941__auto__ = logifier.land_QMARK_.call(null,earlier);
if(cljs.core.truth_(and__3941__auto__))
{return logifier.land_QMARK_.call(null,later);
} else
{return and__3941__auto__;
}
})()))
{if(cljs.core.truth_(logifier.distribute_QMARK_.call(null,earlier,later)))
{affirm.call(null,logifier.distributed.call(null,earlier,later),this_model);
} else
{insert_prop.call(null,cljs.core.vector.call(null,"lor",earlier,later),"true",this_model);
}
} else
{if("\uFDD0:else")
{insert_prop.call(null,cljs.core.vector.call(null,"lor",earlier,later),"true",this_model);
} else
{}
}
}
}
}
var seq__14677 = cljs.core.seq.call(null,logifier.list_names.call(null,this_model));
var chunk__14678 = null;
var count__14679 = 0;
var i__14680 = 0;
while(true){
if((i__14680 < count__14679))
{var props = cljs.core._nth.call(null,chunk__14678,i__14680);
((function (seq__14677,chunk__14678,count__14679,i__14680,props){
return (function (p1__14608_SHARP_){
if(cljs.core.not.call(null,logifier.simple_QMARK_.call(null,p1__14608_SHARP_)))
{if(cljs.core._EQ_.call(null,cljs.core.first.call(null,p1__14608_SHARP_),"lor"))
{var one = logifier.frest.call(null,p1__14608_SHARP_);
var two = logifier.frerest.call(null,p1__14608_SHARP_);
if(cljs.core.truth_(logifier.converse_QMARK_.call(null,p1__14608_SHARP_,cljs.core.vector.call(null,"lor",earlier,later))))
{return new_affirm.call(null,cljs.core.vector.call(null,"lor",cljs.core.vector.call(null,"land",logifier.negate.call(null,earlier),later),cljs.core.vector.call(null,"land",earlier,logifier.negate.call(null,later))));
} else
{if(cljs.core._EQ_.call(null,one,logifier.negate.call(null,earlier)))
{return new_affirm.call(null,cljs.core.vector.call(null,"lor",later,two));
} else
{if(cljs.core._EQ_.call(null,two,logifier.negate.call(null,earlier)))
{return new_affirm.call(null,cljs.core.vector.call(null,"lor",later,one));
} else
{if(cljs.core._EQ_.call(null,one,logifier.negate.call(null,later)))
{return new_affirm.call(null,cljs.core.vector.call(null,"lor",earlier,two));
} else
{if(cljs.core._EQ_.call(null,two,logifier.negate.call(null,later)))
{return new_affirm.call(null,cljs.core.vector.call(null,"lor",earlier,one));
} else
{return null;
}
}
}
}
}
} else
{return null;
}
} else
{return null;
}
});})(seq__14677,chunk__14678,count__14679,i__14680,props))
.call(null,props);
{
var G__14703 = seq__14677;
var G__14704 = chunk__14678;
var G__14705 = count__14679;
var G__14706 = (i__14680 + 1);
seq__14677 = G__14703;
chunk__14678 = G__14704;
count__14679 = G__14705;
i__14680 = G__14706;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__14677);
if(temp__4092__auto__)
{var seq__14677__$1 = temp__4092__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14677__$1))
{var c__3075__auto__ = cljs.core.chunk_first.call(null,seq__14677__$1);
{
var G__14707 = cljs.core.chunk_rest.call(null,seq__14677__$1);
var G__14708 = c__3075__auto__;
var G__14709 = cljs.core.count.call(null,c__3075__auto__);
var G__14710 = 0;
seq__14677 = G__14707;
chunk__14678 = G__14708;
count__14679 = G__14709;
i__14680 = G__14710;
continue;
}
} else
{var props = cljs.core.first.call(null,seq__14677__$1);
((function (seq__14677,chunk__14678,count__14679,i__14680,props,seq__14677__$1,temp__4092__auto__){
return (function (p1__14608_SHARP_){
if(cljs.core.not.call(null,logifier.simple_QMARK_.call(null,p1__14608_SHARP_)))
{if(cljs.core._EQ_.call(null,cljs.core.first.call(null,p1__14608_SHARP_),"lor"))
{var one = logifier.frest.call(null,p1__14608_SHARP_);
var two = logifier.frerest.call(null,p1__14608_SHARP_);
if(cljs.core.truth_(logifier.converse_QMARK_.call(null,p1__14608_SHARP_,cljs.core.vector.call(null,"lor",earlier,later))))
{return new_affirm.call(null,cljs.core.vector.call(null,"lor",cljs.core.vector.call(null,"land",logifier.negate.call(null,earlier),later),cljs.core.vector.call(null,"land",earlier,logifier.negate.call(null,later))));
} else
{if(cljs.core._EQ_.call(null,one,logifier.negate.call(null,earlier)))
{return new_affirm.call(null,cljs.core.vector.call(null,"lor",later,two));
} else
{if(cljs.core._EQ_.call(null,two,logifier.negate.call(null,earlier)))
{return new_affirm.call(null,cljs.core.vector.call(null,"lor",later,one));
} else
{if(cljs.core._EQ_.call(null,one,logifier.negate.call(null,later)))
{return new_affirm.call(null,cljs.core.vector.call(null,"lor",earlier,two));
} else
{if(cljs.core._EQ_.call(null,two,logifier.negate.call(null,later)))
{return new_affirm.call(null,cljs.core.vector.call(null,"lor",earlier,one));
} else
{return null;
}
}
}
}
}
} else
{return null;
}
} else
{return null;
}
});})(seq__14677,chunk__14678,count__14679,i__14680,props,seq__14677__$1,temp__4092__auto__))
.call(null,props);
{
var G__14711 = cljs.core.next.call(null,seq__14677__$1);
var G__14712 = null;
var G__14713 = 0;
var G__14714 = 0;
seq__14677 = G__14711;
chunk__14678 = G__14712;
count__14679 = G__14713;
i__14680 = G__14714;
continue;
}
}
} else
{return null;
}
}
break;
}
});
if(cljs.core.truth_(inconsistent_QMARK_.call(null,prop__$1)))
{return "inconsistent";
} else
{if(cljs.core.truth_(logifier.atom_QMARK_.call(null,prop__$1)))
{return insert_prop.call(null,prop__$1,"true",this_model);
} else
{if("\uFDD0:else")
{return decomp.call(null,prop__$1);
} else
{return null;
}
}
}
});
logifier.recalculate = (function recalculate(this_model){
var initial_state = cljs.core.deref.call(null,this_model);
while(true){
var seq__14719_14723 = cljs.core.seq.call(null,logifier.list_names.call(null,this_model));
var chunk__14720_14724 = null;
var count__14721_14725 = 0;
var i__14722_14726 = 0;
while(true){
if((i__14722_14726 < count__14721_14725))
{var props_14727 = cljs.core._nth.call(null,chunk__14720_14724,i__14722_14726);
logifier.affirm.call(null,props_14727,this_model);
{
var G__14728 = seq__14719_14723;
var G__14729 = chunk__14720_14724;
var G__14730 = count__14721_14725;
var G__14731 = (i__14722_14726 + 1);
seq__14719_14723 = G__14728;
chunk__14720_14724 = G__14729;
count__14721_14725 = G__14730;
i__14722_14726 = G__14731;
continue;
}
} else
{var temp__4092__auto___14732 = cljs.core.seq.call(null,seq__14719_14723);
if(temp__4092__auto___14732)
{var seq__14719_14733__$1 = temp__4092__auto___14732;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14719_14733__$1))
{var c__3075__auto___14734 = cljs.core.chunk_first.call(null,seq__14719_14733__$1);
{
var G__14735 = cljs.core.chunk_rest.call(null,seq__14719_14733__$1);
var G__14736 = c__3075__auto___14734;
var G__14737 = cljs.core.count.call(null,c__3075__auto___14734);
var G__14738 = 0;
seq__14719_14723 = G__14735;
chunk__14720_14724 = G__14736;
count__14721_14725 = G__14737;
i__14722_14726 = G__14738;
continue;
}
} else
{var props_14739 = cljs.core.first.call(null,seq__14719_14733__$1);
logifier.affirm.call(null,props_14739,this_model);
{
var G__14740 = cljs.core.next.call(null,seq__14719_14733__$1);
var G__14741 = null;
var G__14742 = 0;
var G__14743 = 0;
seq__14719_14723 = G__14740;
chunk__14720_14724 = G__14741;
count__14721_14725 = G__14742;
i__14722_14726 = G__14743;
continue;
}
}
} else
{}
}
break;
}
if(!(cljs.core._EQ_.call(null,initial_state,cljs.core.deref.call(null,this_model))))
{{
var G__14744 = cljs.core.deref.call(null,this_model);
initial_state = G__14744;
continue;
}
} else
{return null;
}
break;
}
});
logifier.reveal = (function reveal(this_model){
return cljs.core.deref.call(null,this_model);
});
logifier.valid_QMARK_ = (function valid_QMARK_(conclusion,premises){
logifier.clear_model.call(null,logifier.test_model);
var seq__14750_14754 = cljs.core.seq.call(null,premises);
var chunk__14751_14755 = null;
var count__14752_14756 = 0;
var i__14753_14757 = 0;
while(true){
if((i__14753_14757 < count__14752_14756))
{var props_14758 = cljs.core._nth.call(null,chunk__14751_14755,i__14753_14757);
logifier.affirm.call(null,props_14758,logifier.test_model);
{
var G__14759 = seq__14750_14754;
var G__14760 = chunk__14751_14755;
var G__14761 = count__14752_14756;
var G__14762 = (i__14753_14757 + 1);
seq__14750_14754 = G__14759;
chunk__14751_14755 = G__14760;
count__14752_14756 = G__14761;
i__14753_14757 = G__14762;
continue;
}
} else
{var temp__4092__auto___14763 = cljs.core.seq.call(null,seq__14750_14754);
if(temp__4092__auto___14763)
{var seq__14750_14764__$1 = temp__4092__auto___14763;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14750_14764__$1))
{var c__3075__auto___14765 = cljs.core.chunk_first.call(null,seq__14750_14764__$1);
{
var G__14766 = cljs.core.chunk_rest.call(null,seq__14750_14764__$1);
var G__14767 = c__3075__auto___14765;
var G__14768 = cljs.core.count.call(null,c__3075__auto___14765);
var G__14769 = 0;
seq__14750_14754 = G__14766;
chunk__14751_14755 = G__14767;
count__14752_14756 = G__14768;
i__14753_14757 = G__14769;
continue;
}
} else
{var props_14770 = cljs.core.first.call(null,seq__14750_14764__$1);
logifier.affirm.call(null,props_14770,logifier.test_model);
{
var G__14771 = cljs.core.next.call(null,seq__14750_14764__$1);
var G__14772 = null;
var G__14773 = 0;
var G__14774 = 0;
seq__14750_14754 = G__14771;
chunk__14751_14755 = G__14772;
count__14752_14756 = G__14773;
i__14753_14757 = G__14774;
continue;
}
}
} else
{}
}
break;
}
if(cljs.core._EQ_.call(null,logifier.evaluate.call(null,conclusion,logifier.test_model),"true"))
{return true;
} else
{return false;
}
});
logifier.sound_QMARK_ = (function sound_QMARK_(conclusion,premises,this_model){
if(cljs.core.truth_(logifier.valid_QMARK_.call(null,conclusion,premises)))
{if(cljs.core.every_QMARK_.call(null,(function (p1__14745_SHARP_){
return cljs.core._EQ_.call(null,logifier.evaluate.call(null,p1__14745_SHARP_,this_model),"true");
}),premises))
{return true;
} else
{return false;
}
} else
{return false;
}
});
logifier.list_states = (function list_states(){
var states = cljs.core.filter.call(null,logifier.simple_QMARK_,logifier.list_names.call(null,logifier.model));
var true_states = cljs.core.map.call(null,cljs.core.str,cljs.core.filter.call(null,((function (states){
return (function (p1__14775_SHARP_){
return cljs.core._EQ_.call(null,logifier.evaluate.call(null,p1__14775_SHARP_,logifier.model),"true");
});})(states))
,states));
var false_states = cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core.str,"~"),cljs.core.filter.call(null,((function (states,true_states){
return (function (p1__14776_SHARP_){
return cljs.core._EQ_.call(null,logifier.evaluate.call(null,p1__14776_SHARP_,logifier.model),"false");
});})(states,true_states))
,states));
return clojure.string.join.call(null," . ",cljs.core.sort.call(null,cljs.core.compare,cljs.core.flatten.call(null,cljs.core.conj.call(null,true_states,false_states))));
});
logifier.reset_assertions = (function reset_assertions(){
logifier.clear_model.call(null,logifier.model);
return logifier.clear_model.call(null,logifier.assertions);
});
logifier.asserted_QMARK_ = (function asserted_QMARK_(prop){
var prop__$1 = logifier.ready_to_assert.call(null,prop);
var or__3943__auto__ = cljs.core._EQ_.call(null,cljs.core.filter.call(null,(function (p1__14777_SHARP_){
return cljs.core._EQ_.call(null,p1__14777_SHARP_,prop__$1);
}),cljs.core.deref.call(null,logifier.assertions)),cljs.core.list.call(null,prop__$1));
if(or__3943__auto__)
{return or__3943__auto__;
} else
{return cljs.core._EQ_.call(null,cljs.core.filter.call(null,(function (p1__14778_SHARP_){
return cljs.core._EQ_.call(null,p1__14778_SHARP_,logifier.joincat.call(null,"(",prop__$1,")"));
}),cljs.core.deref.call(null,logifier.assertions)),cljs.core.list.call(null,prop__$1));
}
});
logifier.assert_prop = (function assert_prop(prop){
var prop__$1 = logifier.reformat_prop.call(null,prop);
var parsed_prop = logifier.parse_prop.call(null,prop__$1);
if(cljs.core.truth_(logifier.wff_QMARK_.call(null,parsed_prop)))
{if(!(cljs.core._EQ_.call(null,logifier.evaluate.call(null,parsed_prop,logifier.model),"false")))
{if(cljs.core.truth_(logifier.asserted_QMARK_.call(null,prop__$1)))
{return logifier.update_output.call(null,logifier.joincat.call(null,"[",prop__$1,"] already asserted!"));
} else
{cljs.core.swap_BANG_.call(null,logifier.assertions,cljs.core.conj,logifier.ready_to_assert.call(null,prop__$1));
logifier.affirm.call(null,parsed_prop,logifier.model);
return logifier.update_output.call(null,logifier.joincat.call(null,"[",prop__$1,"] asserted"));
}
} else
{return logifier.update_output.call(null,logifier.joincat.call(null,"[",prop__$1,"] inconsistent"));
}
} else
{return logifier.update_output.call(null,logifier.joincat.call(null,"[",prop__$1,"] ","syntax error"));
}
});
logifier.print_assertions = (function print_assertions(){
return clojure.string.join.call(null," . ",cljs.core.into.call(null,cljs.core.List.EMPTY,cljs.core.deref.call(null,logifier.assertions)));
});
logifier.reassert_props = (function reassert_props(){
var temp_assertions = cljs.core.deref.call(null,logifier.assertions);
logifier.clear_model.call(null,logifier.model);
logifier.reset_assertions.call(null);
var seq__14784 = cljs.core.seq.call(null,temp_assertions);
var chunk__14785 = null;
var count__14786 = 0;
var i__14787 = 0;
while(true){
if((i__14787 < count__14786))
{var props = cljs.core._nth.call(null,chunk__14785,i__14787);
logifier.assert_prop.call(null,props);
{
var G__14788 = seq__14784;
var G__14789 = chunk__14785;
var G__14790 = count__14786;
var G__14791 = (i__14787 + 1);
seq__14784 = G__14788;
chunk__14785 = G__14789;
count__14786 = G__14790;
i__14787 = G__14791;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__14784);
if(temp__4092__auto__)
{var seq__14784__$1 = temp__4092__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14784__$1))
{var c__3075__auto__ = cljs.core.chunk_first.call(null,seq__14784__$1);
{
var G__14792 = cljs.core.chunk_rest.call(null,seq__14784__$1);
var G__14793 = c__3075__auto__;
var G__14794 = cljs.core.count.call(null,c__3075__auto__);
var G__14795 = 0;
seq__14784 = G__14792;
chunk__14785 = G__14793;
count__14786 = G__14794;
i__14787 = G__14795;
continue;
}
} else
{var props = cljs.core.first.call(null,seq__14784__$1);
logifier.assert_prop.call(null,props);
{
var G__14796 = cljs.core.next.call(null,seq__14784__$1);
var G__14797 = null;
var G__14798 = 0;
var G__14799 = 0;
seq__14784 = G__14796;
chunk__14785 = G__14797;
count__14786 = G__14798;
i__14787 = G__14799;
continue;
}
}
} else
{return null;
}
}
break;
}
});
logifier.remove_assertion = (function remove_assertion(prop){
if(cljs.core.not.call(null,logifier.asserted_QMARK_.call(null,prop)))
{return logifier.update_output.call(null,logifier.joincat.call(null,"[",prop,"] hasn't been asserted"));
} else
{var prop__$1 = logifier.ready_to_assert.call(null,prop);
cljs.core.reset_BANG_.call(null,logifier.assertions,cljs.core.filter.call(null,(function (p1__14779_SHARP_){
return !(cljs.core._EQ_.call(null,p1__14779_SHARP_,prop__$1));
}),cljs.core.deref.call(null,logifier.assertions)));
logifier.reassert_props.call(null);
return logifier.update_output.call(null,logifier.joincat.call(null,"[",prop__$1,"] removed"));
}
});
logifier.check_truth = (function check_truth(prop){
var prop__$1 = logifier.reformat_prop.call(null,prop);
var parsed_prop = logifier.parse_prop.call(null,prop__$1);
if(cljs.core.truth_(logifier.wff_QMARK_.call(null,parsed_prop)))
{return logifier.joincat.call(null,"[",prop__$1,"] ",logifier.evaluate.call(null,parsed_prop,logifier.model));
} else
{return logifier.joincat.call(null,"[",prop__$1,"] ","syntax error");
}
});
logifier.process_input = (function process_input(input){
if(cljs.core._EQ_.call(null,cljs.core.first.call(null,input),"?"))
{return logifier.update_output.call(null,logifier.check_truth.call(null,cljs.core.subs.call(null,input,1)));
} else
{if(cljs.core._EQ_.call(null,cljs.core.first.call(null,input),"!"))
{return logifier.remove_assertion.call(null,cljs.core.subs.call(null,input,1));
} else
{if(cljs.core._EQ_.call(null,input,"reset"))
{logifier.reset_assertions.call(null);
return logifier.update_output.call(null,"Assertions reset.");
} else
{if("\uFDD0:else")
{return logifier.assert_prop.call(null,input);
} else
{return null;
}
}
}
}
});
goog.exportSymbol('logifier.process_input', logifier.process_input);
logifier.print_output = (function print_output(){
return cljs.core.deref.call(null,logifier.current_output);
});
if(cljs.core._EQ_.call(null,cljs.core.type.call(null,cljs.core.PersistentVector.fromArray(["p"], true)),cljs.core.PersistentVector))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),cljs.core.with_meta(cljs.core.list(new cljs.core.Symbol(null,"type","type",-1636955917,null),cljs.core.vec(["p"])),cljs.core.hash_map("\uFDD0:line",749,"\uFDD0:column",12)),new cljs.core.Symbol(null,"cljs.core.PersistentVector","cljs.core.PersistentVector",-65585786,null)),cljs.core.hash_map("\uFDD0:line",749,"\uFDD0:column",9))))].join('')));
}
if(cljs.core.truth_(logifier.wff_QMARK_.call(null,cljs.core.PersistentVector.fromArray(["lnot","x"], true))))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list(new cljs.core.Symbol(null,"wff?","wff?",-1636885151,null),cljs.core.vec(["lnot","x"])),cljs.core.hash_map("\uFDD0:line",751,"\uFDD0:column",9))))].join('')));
}
if(cljs.core._EQ_.call(null,logifier.clean_parse.call(null,"p v y"),cljs.core.PersistentVector.fromArray(["p","lor","y"], true)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),cljs.core.with_meta(cljs.core.list(new cljs.core.Symbol(null,"clean-parse","clean-parse",721798120,null),"p v y"),cljs.core.hash_map("\uFDD0:line",753,"\uFDD0:column",12)),cljs.core.vec(["p","lor","y"])),cljs.core.hash_map("\uFDD0:line",753,"\uFDD0:column",9))))].join('')));
}
if(cljs.core._EQ_.call(null,logifier.reformat_prop.call(null,"pvy"),"p v y"))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),cljs.core.with_meta(cljs.core.list(new cljs.core.Symbol(null,"reformat-prop","reformat-prop",836029727,null),"pvy"),cljs.core.hash_map("\uFDD0:line",755,"\uFDD0:column",12)),"p v y"),cljs.core.hash_map("\uFDD0:line",755,"\uFDD0:column",9))))].join('')));
}
if(cljs.core.truth_(logifier.valid_input_QMARK_.call(null,"p v y")))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list(new cljs.core.Symbol(null,"valid-input?","valid-input?",229392991,null),"p v y"),cljs.core.hash_map("\uFDD0:line",757,"\uFDD0:column",9))))].join('')));
}
if(cljs.core._EQ_.call(null,logifier.nest_parse.call(null,"p v y"),cljs.core.PersistentVector.fromArray(["p","lor","y"], true)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),cljs.core.with_meta(cljs.core.list(new cljs.core.Symbol(null,"nest-parse","nest-parse",174198967,null),"p v y"),cljs.core.hash_map("\uFDD0:line",759,"\uFDD0:column",12)),cljs.core.vec(["p","lor","y"])),cljs.core.hash_map("\uFDD0:line",759,"\uFDD0:column",9))))].join('')));
}
if(cljs.core._EQ_.call(null,logifier.prefixer.call(null,cljs.core.PersistentVector.fromArray(["p","lor","y"], true)),cljs.core.PersistentVector.fromArray(["lor","p","y"], true)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),cljs.core.with_meta(cljs.core.list(new cljs.core.Symbol(null,"prefixer","prefixer",1365892216,null),cljs.core.vec(["p","lor","y"])),cljs.core.hash_map("\uFDD0:line",761,"\uFDD0:column",12)),cljs.core.vec(["lor","p","y"])),cljs.core.hash_map("\uFDD0:line",761,"\uFDD0:column",9))))].join('')));
}
