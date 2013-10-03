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
var G__7397 = cljs.core.subs.call(null,remains,1);
var G__7398 = (count + 1);
remains = G__7397;
count = G__7398;
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
joincat.cljs$lang$applyTo = (function (arglist__7399){
var input = cljs.core.seq(arglist__7399);
return joincat__delegate(input);
});
joincat.cljs$core$IFn$_invoke$arity$variadic = joincat__delegate;
return joincat;
})()
;
logifier.simple_QMARK_ = (function simple_QMARK_(prop){
return cljs.core._EQ_.call(null,cljs.core.count.call(null,prop),1);
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
return (new cljs.core.Keyword("\uFDD0:value")).call(null,cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__7400_SHARP_){
return cljs.core._EQ_.call(null,(new cljs.core.Keyword("\uFDD0:name")).call(null,p1__7400_SHARP_),name);
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
return cljs.core.map.call(null,(function (p1__7401_SHARP_){
return cljs.core.get.call(null,p1__7401_SHARP_,"\uFDD0:name");
}),cljs.core.deref.call(null,this_model));
});
logifier.list_props = (function list_props(this_model){
return cljs.core.map.call(null,(function (p1__7402_SHARP_){
return logifier.get_correct_prop.call(null,p1__7402_SHARP_,this_model);
}),cljs.core.map.call(null,(function (p1__7403_SHARP_){
return cljs.core.get.call(null,p1__7403_SHARP_,"\uFDD0:name");
}),cljs.core.deref.call(null,this_model)));
});
logifier.has_name_QMARK_ = (function has_name_QMARK_(name,this_model){
if(cljs.core._EQ_.call(null,cljs.core.filter.call(null,(function (p1__7404_SHARP_){
return cljs.core._EQ_.call(null,p1__7404_SHARP_,name);
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
{var vec__7406 = expr;
var left = cljs.core.nth.call(null,vec__7406,0,null);
var op = cljs.core.nth.call(null,vec__7406,1,null);
var right = cljs.core.nth.call(null,vec__7406,2,null);
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
var G__7407 = cljs.core.subs.call(null,remains,1);
var G__7408 = (parens - 1);
var G__7409 = (count + 1);
remains = G__7407;
parens = G__7408;
count = G__7409;
continue;
}
}
} else
{if(cljs.core._EQ_.call(null,cljs.core.first.call(null,remains),"("))
{{
var G__7410 = cljs.core.subs.call(null,remains,1);
var G__7411 = (parens + 1);
var G__7412 = (count + 1);
remains = G__7410;
parens = G__7411;
count = G__7412;
continue;
}
} else
{if("\uFDD0:else")
{{
var G__7413 = cljs.core.subs.call(null,remains,1);
var G__7414 = parens;
var G__7415 = (count + 1);
remains = G__7413;
parens = G__7414;
count = G__7415;
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
var G__7416 = output;
var G__7417 = cljs.core.subs.call(null,remains,1);
output = G__7416;
remains = G__7417;
continue;
}
} else
{if(cljs.core._EQ_.call(null,cljs.core.first.call(null,remains),"v"))
{{
var G__7418 = cljs.core.conj.call(null,output,"lor");
var G__7419 = cljs.core.subs.call(null,remains,1);
output = G__7418;
remains = G__7419;
continue;
}
} else
{if(cljs.core._EQ_.call(null,cljs.core.first.call(null,remains),"&"))
{{
var G__7420 = cljs.core.conj.call(null,output,"land");
var G__7421 = cljs.core.subs.call(null,remains,1);
output = G__7420;
remains = G__7421;
continue;
}
} else
{if(cljs.core._EQ_.call(null,cljs.core.first.call(null,remains),">"))
{{
var G__7422 = cljs.core.conj.call(null,output,"lcond");
var G__7423 = cljs.core.subs.call(null,remains,1);
output = G__7422;
remains = G__7423;
continue;
}
} else
{if(cljs.core._EQ_.call(null,cljs.core.first.call(null,remains),"<"))
{{
var G__7424 = cljs.core.conj.call(null,output,"lbicond");
var G__7425 = cljs.core.subs.call(null,remains,2);
output = G__7424;
remains = G__7425;
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
var G__7426 = cljs.core.conj.call(null,output,cljs.core.vector.call(null,"lnot",cljs.core.subs.call(null,remains,1,logifier.count_next_parens.call(null,cljs.core.subs.call(null,remains,0)))));
var G__7427 = cljs.core.subs.call(null,remains,logifier.count_next_parens.call(null,remains));
output = G__7426;
remains = G__7427;
continue;
}
} else
{{
var G__7428 = cljs.core.conj.call(null,output,cljs.core.vector.call(null,"lnot",cljs.core.first.call(null,cljs.core.subs.call(null,remains,1))));
var G__7429 = cljs.core.subs.call(null,remains,2);
output = G__7428;
remains = G__7429;
continue;
}
}
} else
{if(cljs.core._EQ_.call(null,cljs.core.first.call(null,remains),"("))
{{
var G__7430 = cljs.core.conj.call(null,output,cljs.core.subs.call(null,remains,0,logifier.count_next_parens.call(null,remains)));
var G__7431 = cljs.core.subs.call(null,remains,logifier.count_next_parens.call(null,remains));
output = G__7430;
remains = G__7431;
continue;
}
} else
{if(cljs.core.truth_(logifier.simple_QMARK_.call(null,cljs.core.first.call(null,remains))))
{{
var G__7432 = cljs.core.conj.call(null,output,cljs.core.first.call(null,remains));
var G__7433 = cljs.core.subs.call(null,remains,1);
output = G__7432;
remains = G__7433;
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
var G__7434 = cljs.core.conj.call(null,output,")");
var G__7435 = cljs.core.subs.call(null,remains,1);
var G__7436 = (count - 1);
output = G__7434;
remains = G__7435;
count = G__7436;
continue;
}
}
} else
{if(cljs.core._EQ_.call(null,cljs.core.first.call(null,remains),"("))
{if(cljs.core._EQ_.call(null,count,0))
{{
var G__7437 = cljs.core.PersistentVector.EMPTY;
var G__7438 = cljs.core.subs.call(null,remains,1);
var G__7439 = 1;
output = G__7437;
remains = G__7438;
count = G__7439;
continue;
}
} else
{{
var G__7440 = cljs.core.conj.call(null,output,cljs.core.first.call(null,remains));
var G__7441 = cljs.core.subs.call(null,remains,1);
var G__7442 = (count + 1);
output = G__7440;
remains = G__7441;
count = G__7442;
continue;
}
}
} else
{if("\uFDD0:else")
{{
var G__7443 = cljs.core.conj.call(null,output,cljs.core.first.call(null,remains));
var G__7444 = cljs.core.subs.call(null,remains,1);
var G__7445 = count;
output = G__7443;
remains = G__7444;
count = G__7445;
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
var G__7446 = cljs.core.subs.call(null,prop,count,(count + 1));
var G__7447 = (count + 1);
next_one = G__7446;
count = G__7447;
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
var G__7448 = output;
var G__7449 = cljs.core.subs.call(null,remains,1);
output = G__7448;
remains = G__7449;
continue;
}
} else
{if(cljs.core.truth_(logifier.atomic_prop_QMARK_.call(null,this_one)))
{if(cljs.core._EQ_.call(null,logifier.next_char.call(null,remains),")"))
{{
var G__7450 = cljs.core.conj.call(null,output,this_one);
var G__7451 = cljs.core.subs.call(null,remains,1);
output = G__7450;
remains = G__7451;
continue;
}
} else
{{
var G__7452 = cljs.core.conj.call(null,output,this_one," ");
var G__7453 = cljs.core.subs.call(null,remains,1);
output = G__7452;
remains = G__7453;
continue;
}
}
} else
{if(cljs.core.truth_(logifier.binary_operator_QMARK_.call(null,this_one)))
{if(cljs.core._EQ_.call(null,this_one,"<"))
{{
var G__7454 = cljs.core.conj.call(null,output,this_one,"> ");
var G__7455 = cljs.core.subs.call(null,remains,2);
output = G__7454;
remains = G__7455;
continue;
}
} else
{{
var G__7456 = cljs.core.conj.call(null,output,this_one," ");
var G__7457 = cljs.core.subs.call(null,remains,1);
output = G__7456;
remains = G__7457;
continue;
}
}
} else
{if(cljs.core.truth_(logifier.negate_operator_QMARK_.call(null,this_one)))
{{
var G__7458 = cljs.core.conj.call(null,output,this_one);
var G__7459 = cljs.core.subs.call(null,remains,1);
output = G__7458;
remains = G__7459;
continue;
}
} else
{if(cljs.core._EQ_.call(null,this_one,"("))
{{
var G__7460 = cljs.core.conj.call(null,output,this_one);
var G__7461 = cljs.core.subs.call(null,remains,1);
output = G__7460;
remains = G__7461;
continue;
}
} else
{if(cljs.core._EQ_.call(null,this_one,")"))
{if(cljs.core._EQ_.call(null,logifier.next_char.call(null,remains),")"))
{{
var G__7462 = cljs.core.conj.call(null,output,this_one);
var G__7463 = cljs.core.subs.call(null,remains,1);
output = G__7462;
remains = G__7463;
continue;
}
} else
{{
var G__7464 = cljs.core.conj.call(null,output,this_one," ");
var G__7465 = cljs.core.subs.call(null,remains,1);
output = G__7464;
remains = G__7465;
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
var G__7466 = cljs.core.subs.call(null,remains,1);
remains = G__7466;
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
var G__7467 = cljs.core.subs.call(null,remains,1);
remains = G__7467;
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
var G__7468 = cljs.core.subs.call(null,remains,1);
remains = G__7468;
continue;
}
} else
{if(cljs.core._EQ_.call(null,next_one,">"))
{{
var G__7469 = cljs.core.subs.call(null,remains,2);
remains = G__7469;
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
var G__7470 = cljs.core.subs.call(null,remains,1);
remains = G__7470;
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
var G__7471 = clojure.string.join.call(null,cljs.core.concat.call(null,"p",cljs.core.subs.call(null,remains,logifier.count_next_parens.call(null,remains))));
remains = G__7471;
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
logifier.one = cljs.core.PersistentVector.fromArray(["land","x","b"], true);
logifier.two = cljs.core.PersistentVector.fromArray(["land","x","a"], true);
cljs.core.vector.call(null,"lor",logifier.before.call(null,logifier.frerest.call(null,logifier.one),logifier.frerest.call(null,logifier.two)),logifier.after.call(null,logifier.frerest.call(null,logifier.one),logifier.frerest.call(null,logifier.two)));
logifier.before.call(null,"b","a");
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
{return evaluate.call(null,logifier.distributed.call(null,one,two),this_model);
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
var pred__7476 = cljs.core._EQ_;
var expr__7477 = cljs.core.first.call(null,remains);
if(pred__7476.call(null,null,expr__7477))
{return clojure.string.join.call(null,cljs.core.flatten.call(null,cljs.core.conj.call(null,output,cljs.core.repeat.call(null,binary_count,"()"))));
} else
{if(pred__7476.call(null,"lnot",expr__7477))
{{
var G__7479 = cljs.core.conj.call(null,output,"~");
var G__7480 = cljs.core.rest.call(null,remains);
var G__7481 = binary_count;
output = G__7479;
remains = G__7480;
binary_count = G__7481;
continue;
}
} else
{if(pred__7476.call(null,"lor",expr__7477))
{{
var G__7482 = cljs.core.conj.call(null,output,"v");
var G__7483 = cljs.core.rest.call(null,remains);
var G__7484 = (binary_count + 1);
output = G__7482;
remains = G__7483;
binary_count = G__7484;
continue;
}
} else
{if(pred__7476.call(null,"land",expr__7477))
{{
var G__7485 = cljs.core.conj.call(null,output,"&");
var G__7486 = cljs.core.rest.call(null,remains);
var G__7487 = (binary_count + 1);
output = G__7485;
remains = G__7486;
binary_count = G__7487;
continue;
}
} else
{if(pred__7476.call(null,"lcond",expr__7477))
{{
var G__7488 = cljs.core.conj.call(null,output,">");
var G__7489 = cljs.core.rest.call(null,remains);
var G__7490 = (binary_count + 1);
output = G__7488;
remains = G__7489;
binary_count = G__7490;
continue;
}
} else
{if(cljs.core.truth_(logifier.simple_QMARK_.call(null,cljs.core.first.call(null,remains))))
{{
var G__7491 = cljs.core.conj.call(null,output,[cljs.core.str(cljs.core.first.call(null,remains))].join(''));
var G__7492 = cljs.core.rest.call(null,remains);
var G__7493 = binary_count;
output = G__7491;
remains = G__7492;
binary_count = G__7493;
continue;
}
} else
{{
var G__7494 = cljs.core.conj.call(null,output,cljs.core.first.call(null,remains));
var G__7495 = cljs.core.rest.call(null,remains);
var G__7496 = binary_count;
output = G__7494;
remains = G__7495;
binary_count = G__7496;
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
var seq__7533_7545 = cljs.core.seq.call(null,logifier.list_names.call(null,this_model__$1));
var chunk__7534_7546 = null;
var count__7535_7547 = 0;
var i__7536_7548 = 0;
while(true){
if((i__7536_7548 < count__7535_7547))
{var props_7549 = cljs.core._nth.call(null,chunk__7534_7546,i__7536_7548);
affirm.call(null,props_7549,this_model__$1);
{
var G__7550 = seq__7533_7545;
var G__7551 = chunk__7534_7546;
var G__7552 = count__7535_7547;
var G__7553 = (i__7536_7548 + 1);
seq__7533_7545 = G__7550;
chunk__7534_7546 = G__7551;
count__7535_7547 = G__7552;
i__7536_7548 = G__7553;
continue;
}
} else
{var temp__4092__auto___7554 = cljs.core.seq.call(null,seq__7533_7545);
if(temp__4092__auto___7554)
{var seq__7533_7555__$1 = temp__4092__auto___7554;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7533_7555__$1))
{var c__3075__auto___7556 = cljs.core.chunk_first.call(null,seq__7533_7555__$1);
{
var G__7557 = cljs.core.chunk_rest.call(null,seq__7533_7555__$1);
var G__7558 = c__3075__auto___7556;
var G__7559 = cljs.core.count.call(null,c__3075__auto___7556);
var G__7560 = 0;
seq__7533_7545 = G__7557;
chunk__7534_7546 = G__7558;
count__7535_7547 = G__7559;
i__7536_7548 = G__7560;
continue;
}
} else
{var props_7561 = cljs.core.first.call(null,seq__7533_7555__$1);
affirm.call(null,props_7561,this_model__$1);
{
var G__7562 = cljs.core.next.call(null,seq__7533_7555__$1);
var G__7563 = null;
var G__7564 = 0;
var G__7565 = 0;
seq__7533_7545 = G__7562;
chunk__7534_7546 = G__7563;
count__7535_7547 = G__7564;
i__7536_7548 = G__7565;
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
var G__7566 = cljs.core.deref.call(null,this_model__$1);
initial_state = G__7566;
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
{cljs.core.swap_BANG_.call(null,this_model__$1,cljs.core.conj,cljs.core.PersistentArrayMap.fromArray(["\uFDD0:name",prop__$2,"\uFDD0:value",value], true));
return recalc.call(null);
} else
{return cljs.core.list.call(null,"ERROR: Not a well-formed formula:",prop__$2);
}
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
{affirm.call(null,logifier.distributed.call(null,earlier,later),this_model);
} else
{if("\uFDD0:else")
{insert_prop.call(null,cljs.core.vector.call(null,"lor",earlier,later),"true",this_model);
} else
{}
}
}
}
}
var seq__7541 = cljs.core.seq.call(null,logifier.list_names.call(null,this_model));
var chunk__7542 = null;
var count__7543 = 0;
var i__7544 = 0;
while(true){
if((i__7544 < count__7543))
{var props = cljs.core._nth.call(null,chunk__7542,i__7544);
((function (seq__7541,chunk__7542,count__7543,i__7544,props){
return (function (p1__7472_SHARP_){
if(cljs.core.not.call(null,logifier.simple_QMARK_.call(null,p1__7472_SHARP_)))
{if(cljs.core._EQ_.call(null,cljs.core.first.call(null,p1__7472_SHARP_),"lor"))
{var one = logifier.frest.call(null,p1__7472_SHARP_);
var two = logifier.frerest.call(null,p1__7472_SHARP_);
if(cljs.core.truth_(logifier.converse_QMARK_.call(null,p1__7472_SHARP_,cljs.core.vector.call(null,"lor",earlier,later))))
{return affirm.call(null,cljs.core.vector.call(null,"lor",cljs.core.vector.call(null,"land",logifier.negate.call(null,earlier),later),cljs.core.vector.call(null,"land",earlier,logifier.negate.call(null,later))),this_model);
} else
{if(cljs.core._EQ_.call(null,one,logifier.negate.call(null,earlier)))
{return affirm.call(null,cljs.core.vector.call(null,"lor",later,two),this_model);
} else
{if(cljs.core._EQ_.call(null,two,logifier.negate.call(null,earlier)))
{return affirm.call(null,cljs.core.vector.call(null,"lor",later,one),this_model);
} else
{if(cljs.core._EQ_.call(null,one,logifier.negate.call(null,later)))
{return affirm.call(null,cljs.core.vector.call(null,"lor",earlier,two),this_model);
} else
{if(cljs.core._EQ_.call(null,two,logifier.negate.call(null,later)))
{return affirm.call(null,cljs.core.vector.call(null,"lor",earlier,one),this_model);
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
});})(seq__7541,chunk__7542,count__7543,i__7544,props))
.call(null,props);
{
var G__7567 = seq__7541;
var G__7568 = chunk__7542;
var G__7569 = count__7543;
var G__7570 = (i__7544 + 1);
seq__7541 = G__7567;
chunk__7542 = G__7568;
count__7543 = G__7569;
i__7544 = G__7570;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__7541);
if(temp__4092__auto__)
{var seq__7541__$1 = temp__4092__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7541__$1))
{var c__3075__auto__ = cljs.core.chunk_first.call(null,seq__7541__$1);
{
var G__7571 = cljs.core.chunk_rest.call(null,seq__7541__$1);
var G__7572 = c__3075__auto__;
var G__7573 = cljs.core.count.call(null,c__3075__auto__);
var G__7574 = 0;
seq__7541 = G__7571;
chunk__7542 = G__7572;
count__7543 = G__7573;
i__7544 = G__7574;
continue;
}
} else
{var props = cljs.core.first.call(null,seq__7541__$1);
((function (seq__7541,chunk__7542,count__7543,i__7544,props,seq__7541__$1,temp__4092__auto__){
return (function (p1__7472_SHARP_){
if(cljs.core.not.call(null,logifier.simple_QMARK_.call(null,p1__7472_SHARP_)))
{if(cljs.core._EQ_.call(null,cljs.core.first.call(null,p1__7472_SHARP_),"lor"))
{var one = logifier.frest.call(null,p1__7472_SHARP_);
var two = logifier.frerest.call(null,p1__7472_SHARP_);
if(cljs.core.truth_(logifier.converse_QMARK_.call(null,p1__7472_SHARP_,cljs.core.vector.call(null,"lor",earlier,later))))
{return affirm.call(null,cljs.core.vector.call(null,"lor",cljs.core.vector.call(null,"land",logifier.negate.call(null,earlier),later),cljs.core.vector.call(null,"land",earlier,logifier.negate.call(null,later))),this_model);
} else
{if(cljs.core._EQ_.call(null,one,logifier.negate.call(null,earlier)))
{return affirm.call(null,cljs.core.vector.call(null,"lor",later,two),this_model);
} else
{if(cljs.core._EQ_.call(null,two,logifier.negate.call(null,earlier)))
{return affirm.call(null,cljs.core.vector.call(null,"lor",later,one),this_model);
} else
{if(cljs.core._EQ_.call(null,one,logifier.negate.call(null,later)))
{return affirm.call(null,cljs.core.vector.call(null,"lor",earlier,two),this_model);
} else
{if(cljs.core._EQ_.call(null,two,logifier.negate.call(null,later)))
{return affirm.call(null,cljs.core.vector.call(null,"lor",earlier,one),this_model);
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
});})(seq__7541,chunk__7542,count__7543,i__7544,props,seq__7541__$1,temp__4092__auto__))
.call(null,props);
{
var G__7575 = cljs.core.next.call(null,seq__7541__$1);
var G__7576 = null;
var G__7577 = 0;
var G__7578 = 0;
seq__7541 = G__7575;
chunk__7542 = G__7576;
count__7543 = G__7577;
i__7544 = G__7578;
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
var seq__7583_7587 = cljs.core.seq.call(null,logifier.list_names.call(null,this_model));
var chunk__7584_7588 = null;
var count__7585_7589 = 0;
var i__7586_7590 = 0;
while(true){
if((i__7586_7590 < count__7585_7589))
{var props_7591 = cljs.core._nth.call(null,chunk__7584_7588,i__7586_7590);
logifier.affirm.call(null,props_7591,this_model);
{
var G__7592 = seq__7583_7587;
var G__7593 = chunk__7584_7588;
var G__7594 = count__7585_7589;
var G__7595 = (i__7586_7590 + 1);
seq__7583_7587 = G__7592;
chunk__7584_7588 = G__7593;
count__7585_7589 = G__7594;
i__7586_7590 = G__7595;
continue;
}
} else
{var temp__4092__auto___7596 = cljs.core.seq.call(null,seq__7583_7587);
if(temp__4092__auto___7596)
{var seq__7583_7597__$1 = temp__4092__auto___7596;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7583_7597__$1))
{var c__3075__auto___7598 = cljs.core.chunk_first.call(null,seq__7583_7597__$1);
{
var G__7599 = cljs.core.chunk_rest.call(null,seq__7583_7597__$1);
var G__7600 = c__3075__auto___7598;
var G__7601 = cljs.core.count.call(null,c__3075__auto___7598);
var G__7602 = 0;
seq__7583_7587 = G__7599;
chunk__7584_7588 = G__7600;
count__7585_7589 = G__7601;
i__7586_7590 = G__7602;
continue;
}
} else
{var props_7603 = cljs.core.first.call(null,seq__7583_7597__$1);
logifier.affirm.call(null,props_7603,this_model);
{
var G__7604 = cljs.core.next.call(null,seq__7583_7597__$1);
var G__7605 = null;
var G__7606 = 0;
var G__7607 = 0;
seq__7583_7587 = G__7604;
chunk__7584_7588 = G__7605;
count__7585_7589 = G__7606;
i__7586_7590 = G__7607;
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
var G__7608 = cljs.core.deref.call(null,this_model);
initial_state = G__7608;
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
var seq__7614_7618 = cljs.core.seq.call(null,premises);
var chunk__7615_7619 = null;
var count__7616_7620 = 0;
var i__7617_7621 = 0;
while(true){
if((i__7617_7621 < count__7616_7620))
{var props_7622 = cljs.core._nth.call(null,chunk__7615_7619,i__7617_7621);
logifier.affirm.call(null,props_7622,logifier.test_model);
{
var G__7623 = seq__7614_7618;
var G__7624 = chunk__7615_7619;
var G__7625 = count__7616_7620;
var G__7626 = (i__7617_7621 + 1);
seq__7614_7618 = G__7623;
chunk__7615_7619 = G__7624;
count__7616_7620 = G__7625;
i__7617_7621 = G__7626;
continue;
}
} else
{var temp__4092__auto___7627 = cljs.core.seq.call(null,seq__7614_7618);
if(temp__4092__auto___7627)
{var seq__7614_7628__$1 = temp__4092__auto___7627;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7614_7628__$1))
{var c__3075__auto___7629 = cljs.core.chunk_first.call(null,seq__7614_7628__$1);
{
var G__7630 = cljs.core.chunk_rest.call(null,seq__7614_7628__$1);
var G__7631 = c__3075__auto___7629;
var G__7632 = cljs.core.count.call(null,c__3075__auto___7629);
var G__7633 = 0;
seq__7614_7618 = G__7630;
chunk__7615_7619 = G__7631;
count__7616_7620 = G__7632;
i__7617_7621 = G__7633;
continue;
}
} else
{var props_7634 = cljs.core.first.call(null,seq__7614_7628__$1);
logifier.affirm.call(null,props_7634,logifier.test_model);
{
var G__7635 = cljs.core.next.call(null,seq__7614_7628__$1);
var G__7636 = null;
var G__7637 = 0;
var G__7638 = 0;
seq__7614_7618 = G__7635;
chunk__7615_7619 = G__7636;
count__7616_7620 = G__7637;
i__7617_7621 = G__7638;
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
{if(cljs.core.every_QMARK_.call(null,(function (p1__7609_SHARP_){
return cljs.core._EQ_.call(null,logifier.evaluate.call(null,p1__7609_SHARP_,this_model),"true");
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
return (function (p1__7639_SHARP_){
return cljs.core._EQ_.call(null,logifier.evaluate.call(null,p1__7639_SHARP_,logifier.model),"true");
});})(states))
,states));
var false_states = cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core.str,"~"),cljs.core.filter.call(null,((function (states,true_states){
return (function (p1__7640_SHARP_){
return cljs.core._EQ_.call(null,logifier.evaluate.call(null,p1__7640_SHARP_,logifier.model),"false");
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
var or__3943__auto__ = cljs.core._EQ_.call(null,cljs.core.filter.call(null,(function (p1__7641_SHARP_){
return cljs.core._EQ_.call(null,p1__7641_SHARP_,prop__$1);
}),cljs.core.deref.call(null,logifier.assertions)),cljs.core.list.call(null,prop__$1));
if(or__3943__auto__)
{return or__3943__auto__;
} else
{return cljs.core._EQ_.call(null,cljs.core.filter.call(null,(function (p1__7642_SHARP_){
return cljs.core._EQ_.call(null,p1__7642_SHARP_,logifier.joincat.call(null,"(",prop__$1,")"));
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
var seq__7648 = cljs.core.seq.call(null,temp_assertions);
var chunk__7649 = null;
var count__7650 = 0;
var i__7651 = 0;
while(true){
if((i__7651 < count__7650))
{var props = cljs.core._nth.call(null,chunk__7649,i__7651);
logifier.assert_prop.call(null,props);
{
var G__7652 = seq__7648;
var G__7653 = chunk__7649;
var G__7654 = count__7650;
var G__7655 = (i__7651 + 1);
seq__7648 = G__7652;
chunk__7649 = G__7653;
count__7650 = G__7654;
i__7651 = G__7655;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__7648);
if(temp__4092__auto__)
{var seq__7648__$1 = temp__4092__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7648__$1))
{var c__3075__auto__ = cljs.core.chunk_first.call(null,seq__7648__$1);
{
var G__7656 = cljs.core.chunk_rest.call(null,seq__7648__$1);
var G__7657 = c__3075__auto__;
var G__7658 = cljs.core.count.call(null,c__3075__auto__);
var G__7659 = 0;
seq__7648 = G__7656;
chunk__7649 = G__7657;
count__7650 = G__7658;
i__7651 = G__7659;
continue;
}
} else
{var props = cljs.core.first.call(null,seq__7648__$1);
logifier.assert_prop.call(null,props);
{
var G__7660 = cljs.core.next.call(null,seq__7648__$1);
var G__7661 = null;
var G__7662 = 0;
var G__7663 = 0;
seq__7648 = G__7660;
chunk__7649 = G__7661;
count__7650 = G__7662;
i__7651 = G__7663;
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
cljs.core.reset_BANG_.call(null,logifier.assertions,cljs.core.filter.call(null,(function (p1__7643_SHARP_){
return !(cljs.core._EQ_.call(null,p1__7643_SHARP_,prop__$1));
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
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),cljs.core.with_meta(cljs.core.list(new cljs.core.Symbol(null,"type","type",-1636955917,null),cljs.core.vec(["p"])),cljs.core.hash_map("\uFDD0:line",731,"\uFDD0:column",12)),new cljs.core.Symbol(null,"cljs.core.PersistentVector","cljs.core.PersistentVector",-65585786,null)),cljs.core.hash_map("\uFDD0:line",731,"\uFDD0:column",9))))].join('')));
}
if(cljs.core.truth_(logifier.wff_QMARK_.call(null,cljs.core.PersistentVector.fromArray(["lnot","x"], true))))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list(new cljs.core.Symbol(null,"wff?","wff?",-1636885151,null),cljs.core.vec(["lnot","x"])),cljs.core.hash_map("\uFDD0:line",733,"\uFDD0:column",9))))].join('')));
}
if(cljs.core._EQ_.call(null,logifier.clean_parse.call(null,"p v y"),cljs.core.PersistentVector.fromArray(["p","lor","y"], true)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),cljs.core.with_meta(cljs.core.list(new cljs.core.Symbol(null,"clean-parse","clean-parse",721798120,null),"p v y"),cljs.core.hash_map("\uFDD0:line",735,"\uFDD0:column",12)),cljs.core.vec(["p","lor","y"])),cljs.core.hash_map("\uFDD0:line",735,"\uFDD0:column",9))))].join('')));
}
if(cljs.core._EQ_.call(null,logifier.reformat_prop.call(null,"pvy"),"p v y"))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),cljs.core.with_meta(cljs.core.list(new cljs.core.Symbol(null,"reformat-prop","reformat-prop",836029727,null),"pvy"),cljs.core.hash_map("\uFDD0:line",737,"\uFDD0:column",12)),"p v y"),cljs.core.hash_map("\uFDD0:line",737,"\uFDD0:column",9))))].join('')));
}
if(cljs.core.truth_(logifier.valid_input_QMARK_.call(null,"p v y")))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list(new cljs.core.Symbol(null,"valid-input?","valid-input?",229392991,null),"p v y"),cljs.core.hash_map("\uFDD0:line",739,"\uFDD0:column",9))))].join('')));
}
if(cljs.core._EQ_.call(null,logifier.nest_parse.call(null,"p v y"),cljs.core.PersistentVector.fromArray(["p","lor","y"], true)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),cljs.core.with_meta(cljs.core.list(new cljs.core.Symbol(null,"nest-parse","nest-parse",174198967,null),"p v y"),cljs.core.hash_map("\uFDD0:line",741,"\uFDD0:column",12)),cljs.core.vec(["p","lor","y"])),cljs.core.hash_map("\uFDD0:line",741,"\uFDD0:column",9))))].join('')));
}
if(cljs.core._EQ_.call(null,logifier.prefixer.call(null,cljs.core.PersistentVector.fromArray(["p","lor","y"], true)),cljs.core.PersistentVector.fromArray(["lor","p","y"], true)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),cljs.core.with_meta(cljs.core.list(new cljs.core.Symbol(null,"prefixer","prefixer",1365892216,null),cljs.core.vec(["p","lor","y"])),cljs.core.hash_map("\uFDD0:line",743,"\uFDD0:column",12)),cljs.core.vec(["lor","p","y"])),cljs.core.hash_map("\uFDD0:line",743,"\uFDD0:column",9))))].join('')));
}
