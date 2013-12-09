goog.provide('logifier');
goog.require('cljs.core');
goog.require('clojure.string');
logifier.atom_QMARK_ = (function atom_QMARK_(x){
return !(cljs.core.coll_QMARK_.call(null,x));
});
logifier.third = (function third(x){
return cljs.core.second.call(null,cljs.core.rest.call(null,x));
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
var counter = 0;
while(true){
if(cljs.core._EQ_.call(null,remains,""))
{return counter;
} else
{{
var G__37246 = cljs.core.subs.call(null,remains,1);
var G__37247 = (counter + 1);
remains = G__37246;
counter = G__37247;
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
joincat.cljs$lang$applyTo = (function (arglist__37248){
var input = cljs.core.seq(arglist__37248);
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
return (new cljs.core.Keyword("\uFDD0:value")).call(null,cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__37249_SHARP_){
return cljs.core._EQ_.call(null,(new cljs.core.Keyword("\uFDD0:name")).call(null,p1__37249_SHARP_),name);
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
return cljs.core.map.call(null,(function (p1__37250_SHARP_){
return cljs.core.get.call(null,p1__37250_SHARP_,"\uFDD0:name");
}),cljs.core.deref.call(null,this_model));
});
logifier.list_props = (function list_props(this_model){
return cljs.core.map.call(null,(function (p1__37251_SHARP_){
return logifier.get_correct_prop.call(null,p1__37251_SHARP_,this_model);
}),cljs.core.map.call(null,(function (p1__37252_SHARP_){
return cljs.core.get.call(null,p1__37252_SHARP_,"\uFDD0:name");
}),cljs.core.deref.call(null,this_model)));
});
logifier.has_name_QMARK_ = (function has_name_QMARK_(name,this_model){
if(cljs.core.truth_(cljs.core.filter.call(null,(function (p1__37253_SHARP_){
return cljs.core._EQ_.call(null,p1__37253_SHARP_,name);
}),logifier.list_names.call(null,this_model))))
{return cljs.core.list.call(null,name);
} else
{return true;
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
{return wff_QMARK_.call(null,cljs.core.second.call(null,prop));
} else
{return false;
}
} else
{if(cljs.core.truth_(logifier.operator_QMARK_.call(null,cljs.core.first.call(null,prop))))
{if(cljs.core._EQ_.call(null,cljs.core.count.call(null,cljs.core.rest.call(null,prop)),2))
{var and__3941__auto__ = wff_QMARK_.call(null,cljs.core.second.call(null,prop));
if(cljs.core.truth_(and__3941__auto__))
{return wff_QMARK_.call(null,logifier.third.call(null,prop));
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
{return cljs.core.second.call(null,prop);
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
{var or__3943__auto__ = (function (){var and__3941__auto__ = cljs.core._EQ_.call(null,cljs.core.second.call(null,one),logifier.negate.call(null,cljs.core.second.call(null,two)));
if(and__3941__auto__)
{return cljs.core._EQ_.call(null,logifier.third.call(null,one),logifier.negate.call(null,logifier.third.call(null,two)));
} else
{return and__3941__auto__;
}
})();
if(cljs.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{var and__3941__auto__ = cljs.core._EQ_.call(null,cljs.core.second.call(null,one),logifier.negate.call(null,logifier.third.call(null,two)));
if(and__3941__auto__)
{return cljs.core._EQ_.call(null,logifier.third.call(null,one),logifier.negate.call(null,cljs.core.second.call(null,two)));
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
{return cljs.core.second.call(null,cljs.core.sort.call(null,cljs.core.compare,cljs.core.PersistentVector.fromArray([one,two], true)));
} else
{if("\uFDD0:else")
{return cljs.core.second.call(null,cljs.core.sort.call(null,logifier.nest_compare,cljs.core.PersistentVector.fromArray([one,two], true)));
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
{return decomp_lnot.call(null,cljs.core.second.call(null,prop__$1));
} else
{if(cljs.core._EQ_.call(null,operate,"lor"))
{return decomp_lor.call(null,cljs.core.vector.call(null,cljs.core.second.call(null,prop__$1),logifier.third.call(null,prop__$1)));
} else
{if(cljs.core._EQ_.call(null,operate,"land"))
{return cljs.core.vector.call(null,"land",clean_up.call(null,cljs.core.second.call(null,prop__$1)),clean_up.call(null,logifier.third.call(null,prop__$1)));
} else
{if(cljs.core._EQ_.call(null,operate,"lcond"))
{return decomp.call(null,cljs.core.vector.call(null,"lor",clean_up.call(null,logifier.negate.call(null,cljs.core.second.call(null,prop__$1))),clean_up.call(null,logifier.third.call(null,prop__$1))));
} else
{if(cljs.core._EQ_.call(null,operate,"lbicond"))
{return decomp.call(null,cljs.core.PersistentVector.fromArray(["land",cljs.core.PersistentVector.fromArray(["lcond",cljs.core.second.call(null,prop__$1),logifier.third.call(null,prop__$1)], true),cljs.core.PersistentVector.fromArray(["lcond",logifier.third.call(null,prop__$1),cljs.core.second.call(null,prop__$1)], true)], true));
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
{return clean_up.call(null,cljs.core.second.call(null,prop__$1));
} else
{if(cljs.core._EQ_.call(null,operate,"lor"))
{return decomp.call(null,cljs.core.PersistentVector.fromArray(["land",cljs.core.PersistentVector.fromArray(["lnot",cljs.core.second.call(null,prop__$1)], true),cljs.core.PersistentVector.fromArray(["lnot",logifier.third.call(null,prop__$1)], true)], true));
} else
{if(cljs.core._EQ_.call(null,operate,"land"))
{return decomp.call(null,cljs.core.PersistentVector.fromArray(["lor",cljs.core.PersistentVector.fromArray(["lnot",cljs.core.second.call(null,prop__$1)], true),cljs.core.PersistentVector.fromArray(["lnot",logifier.third.call(null,prop__$1)], true)], true));
} else
{if(cljs.core._EQ_.call(null,operate,"lcond"))
{return decomp.call(null,cljs.core.PersistentVector.fromArray(["land",cljs.core.second.call(null,prop__$1),cljs.core.PersistentVector.fromArray(["lnot",logifier.third.call(null,prop__$1)], true)], true));
} else
{if(cljs.core._EQ_.call(null,operate,"lbicond"))
{return decomp.call(null,cljs.core.PersistentVector.fromArray(["lor",cljs.core.PersistentVector.fromArray(["lnot",cljs.core.PersistentVector.fromArray(["lcond",cljs.core.second.call(null,prop__$1),logifier.third.call(null,prop__$1)], true)], true),cljs.core.PersistentVector.fromArray(["lnot",cljs.core.PersistentVector.fromArray(["lcond",logifier.third.call(null,prop__$1),cljs.core.second.call(null,prop__$1)], true)], true)], true));
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
return cljs.core.vector.call(null,"lor",clean_up.call(null,logifier.before.call(null,cljs.core.first.call(null,prop__$1),cljs.core.second.call(null,prop__$1))),clean_up.call(null,logifier.after.call(null,cljs.core.first.call(null,prop__$1),cljs.core.second.call(null,prop__$1))));
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
{return cljs.core.vector.call(null,"lnot",prefixer.call(null,cljs.core.second.call(null,cljs.core.first.call(null,expr))));
} else
{if(cljs.core._EQ_.call(null,cljs.core.count.call(null,expr),2))
{return cljs.core.vector.call(null,"lnot",prefixer.call(null,cljs.core.second.call(null,expr)));
} else
{if(cljs.core._EQ_.call(null,cljs.core.count.call(null,expr),3))
{var vec__37255 = expr;
var left = cljs.core.nth.call(null,vec__37255,0,null);
var op = cljs.core.nth.call(null,vec__37255,1,null);
var right = cljs.core.nth.call(null,vec__37255,2,null);
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
var G__37256 = cljs.core.subs.call(null,remains,1);
var G__37257 = (parens - 1);
var G__37258 = (count + 1);
remains = G__37256;
parens = G__37257;
count = G__37258;
continue;
}
}
} else
{if(cljs.core._EQ_.call(null,cljs.core.first.call(null,remains),"("))
{{
var G__37259 = cljs.core.subs.call(null,remains,1);
var G__37260 = (parens + 1);
var G__37261 = (count + 1);
remains = G__37259;
parens = G__37260;
count = G__37261;
continue;
}
} else
{if("\uFDD0:else")
{{
var G__37262 = cljs.core.subs.call(null,remains,1);
var G__37263 = parens;
var G__37264 = (count + 1);
remains = G__37262;
parens = G__37263;
count = G__37264;
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
var G__37265 = output;
var G__37266 = cljs.core.subs.call(null,remains,1);
output = G__37265;
remains = G__37266;
continue;
}
} else
{if(cljs.core._EQ_.call(null,cljs.core.first.call(null,remains),"v"))
{{
var G__37267 = cljs.core.conj.call(null,output,"lor");
var G__37268 = cljs.core.subs.call(null,remains,1);
output = G__37267;
remains = G__37268;
continue;
}
} else
{if(cljs.core._EQ_.call(null,cljs.core.first.call(null,remains),"&"))
{{
var G__37269 = cljs.core.conj.call(null,output,"land");
var G__37270 = cljs.core.subs.call(null,remains,1);
output = G__37269;
remains = G__37270;
continue;
}
} else
{if(cljs.core._EQ_.call(null,cljs.core.first.call(null,remains),">"))
{{
var G__37271 = cljs.core.conj.call(null,output,"lcond");
var G__37272 = cljs.core.subs.call(null,remains,1);
output = G__37271;
remains = G__37272;
continue;
}
} else
{if(cljs.core._EQ_.call(null,cljs.core.first.call(null,remains),"<"))
{{
var G__37273 = cljs.core.conj.call(null,output,"lbicond");
var G__37274 = cljs.core.subs.call(null,remains,2);
output = G__37273;
remains = G__37274;
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
var G__37275 = cljs.core.conj.call(null,output,cljs.core.vector.call(null,"lnot",cljs.core.subs.call(null,remains,1,logifier.count_next_parens.call(null,cljs.core.subs.call(null,remains,0)))));
var G__37276 = cljs.core.subs.call(null,remains,logifier.count_next_parens.call(null,remains));
output = G__37275;
remains = G__37276;
continue;
}
} else
{{
var G__37277 = cljs.core.conj.call(null,output,cljs.core.vector.call(null,"lnot",cljs.core.first.call(null,cljs.core.subs.call(null,remains,1))));
var G__37278 = cljs.core.subs.call(null,remains,2);
output = G__37277;
remains = G__37278;
continue;
}
}
} else
{if(cljs.core._EQ_.call(null,cljs.core.first.call(null,remains),"("))
{{
var G__37279 = cljs.core.conj.call(null,output,cljs.core.subs.call(null,remains,0,logifier.count_next_parens.call(null,remains)));
var G__37280 = cljs.core.subs.call(null,remains,logifier.count_next_parens.call(null,remains));
output = G__37279;
remains = G__37280;
continue;
}
} else
{if(cljs.core.truth_(logifier.simple_QMARK_.call(null,cljs.core.first.call(null,remains))))
{{
var G__37281 = cljs.core.conj.call(null,output,cljs.core.first.call(null,remains));
var G__37282 = cljs.core.subs.call(null,remains,1);
output = G__37281;
remains = G__37282;
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
var G__37283 = cljs.core.conj.call(null,output,")");
var G__37284 = cljs.core.subs.call(null,remains,1);
var G__37285 = (count - 1);
output = G__37283;
remains = G__37284;
count = G__37285;
continue;
}
}
} else
{if(cljs.core._EQ_.call(null,cljs.core.first.call(null,remains),"("))
{if(cljs.core._EQ_.call(null,count,0))
{{
var G__37286 = cljs.core.PersistentVector.EMPTY;
var G__37287 = cljs.core.subs.call(null,remains,1);
var G__37288 = 1;
output = G__37286;
remains = G__37287;
count = G__37288;
continue;
}
} else
{{
var G__37289 = cljs.core.conj.call(null,output,cljs.core.first.call(null,remains));
var G__37290 = cljs.core.subs.call(null,remains,1);
var G__37291 = (count + 1);
output = G__37289;
remains = G__37290;
count = G__37291;
continue;
}
}
} else
{if("\uFDD0:else")
{{
var G__37292 = cljs.core.conj.call(null,output,cljs.core.first.call(null,remains));
var G__37293 = cljs.core.subs.call(null,remains,1);
var G__37294 = count;
output = G__37292;
remains = G__37293;
count = G__37294;
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
var parse_this = (function parse_this(input__$2){
if(cljs.core.truth_(logifier.simple_QMARK_.call(null,input__$2)))
{return input__$2;
} else
{if(cljs.core._EQ_.call(null,cljs.core.type.call(null,input__$2),cljs.core.PersistentVector))
{return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,parse_this,input__$2));
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
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,parse_this,input__$1));
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
var one = cljs.core.second.call(null,prop);
var two = logifier.third.call(null,prop);
var earlier = logifier.before.call(null,one,two);
var later = logifier.after.call(null,one,two);
return cljs.core.vector.call(null,"|",cljs.core.vector.call(null,"|",earlier,earlier),cljs.core.vector.call(null,"|",later,later));
});
logifier.sheffer_and = (function sheffer_and(prop){
var one = cljs.core.second.call(null,prop);
var two = logifier.third.call(null,prop);
var earlier = logifier.before.call(null,one,two);
var later = logifier.after.call(null,one,two);
return cljs.core.vector.call(null,"|",cljs.core.vector.call(null,"|",earlier,later),cljs.core.vector.call(null,"|",earlier,later));
});
logifier.sheffer_cond = (function sheffer_cond(prop){
var negated_one = cljs.core.vector.call(null,"lnot",cljs.core.second.call(null,prop));
var two = logifier.third.call(null,prop);
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
{return logifier.sheffer_and.call(null,cljs.core.vector.call(null,"land",logifier.sheffer_cond.call(null,cljs.core.vector.call(null,"lcond",cljs.core.second.call(null,prop),logifier.third.call(null,prop))),logifier.sheffer_cond.call(null,cljs.core.vector.call(null,"lcond",logifier.third.call(null,prop),cljs.core.second.call(null,prop)))));
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
var G__37295 = cljs.core.subs.call(null,prop,count,(count + 1));
var G__37296 = (count + 1);
next_one = G__37295;
count = G__37296;
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
var G__37297 = output;
var G__37298 = cljs.core.subs.call(null,remains,1);
output = G__37297;
remains = G__37298;
continue;
}
} else
{if(cljs.core.truth_(logifier.atomic_prop_QMARK_.call(null,this_one)))
{if(cljs.core._EQ_.call(null,logifier.next_char.call(null,remains),")"))
{{
var G__37299 = cljs.core.conj.call(null,output,this_one);
var G__37300 = cljs.core.subs.call(null,remains,1);
output = G__37299;
remains = G__37300;
continue;
}
} else
{{
var G__37301 = cljs.core.conj.call(null,output,this_one," ");
var G__37302 = cljs.core.subs.call(null,remains,1);
output = G__37301;
remains = G__37302;
continue;
}
}
} else
{if(cljs.core.truth_(logifier.binary_operator_QMARK_.call(null,this_one)))
{if(cljs.core._EQ_.call(null,this_one,"<"))
{{
var G__37303 = cljs.core.conj.call(null,output,this_one,"> ");
var G__37304 = cljs.core.subs.call(null,remains,2);
output = G__37303;
remains = G__37304;
continue;
}
} else
{{
var G__37305 = cljs.core.conj.call(null,output,this_one," ");
var G__37306 = cljs.core.subs.call(null,remains,1);
output = G__37305;
remains = G__37306;
continue;
}
}
} else
{if(cljs.core.truth_(logifier.negate_operator_QMARK_.call(null,this_one)))
{{
var G__37307 = cljs.core.conj.call(null,output,this_one);
var G__37308 = cljs.core.subs.call(null,remains,1);
output = G__37307;
remains = G__37308;
continue;
}
} else
{if(cljs.core._EQ_.call(null,this_one,"("))
{{
var G__37309 = cljs.core.conj.call(null,output,this_one);
var G__37310 = cljs.core.subs.call(null,remains,1);
output = G__37309;
remains = G__37310;
continue;
}
} else
{if(cljs.core._EQ_.call(null,this_one,")"))
{if(cljs.core._EQ_.call(null,logifier.next_char.call(null,remains),")"))
{{
var G__37311 = cljs.core.conj.call(null,output,this_one);
var G__37312 = cljs.core.subs.call(null,remains,1);
output = G__37311;
remains = G__37312;
continue;
}
} else
{{
var G__37313 = cljs.core.conj.call(null,output,this_one," ");
var G__37314 = cljs.core.subs.call(null,remains,1);
output = G__37313;
remains = G__37314;
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
logifier.valid_input_QMARK_ = (function valid_input_QMARK_(prop){
var remains = prop;
while(true){
var this_one = cljs.core.subs.call(null,remains,0,1);
var next_one = logifier.next_char.call(null,remains);
if(cljs.core._EQ_.call(null,this_one," "))
{{
var G__37315 = cljs.core.subs.call(null,remains,1);
remains = G__37315;
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
var G__37316 = cljs.core.subs.call(null,remains,1);
remains = G__37316;
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
var G__37317 = cljs.core.subs.call(null,remains,1);
remains = G__37317;
continue;
}
} else
{if(cljs.core._EQ_.call(null,next_one,">"))
{{
var G__37318 = cljs.core.subs.call(null,remains,2);
remains = G__37318;
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
var G__37319 = cljs.core.subs.call(null,remains,1);
remains = G__37319;
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
var G__37320 = clojure.string.join.call(null,cljs.core.concat.call(null,"p",cljs.core.subs.call(null,remains,logifier.count_next_parens.call(null,remains))));
remains = G__37320;
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
logifier.tautology_QMARK_ = (function tautology_QMARK_(orig_prop){
if(cljs.core.truth_(logifier.atom_QMARK_.call(null,orig_prop)))
{return false;
} else
{var prop = logifier.clean_up.call(null,orig_prop);
var one = cljs.core.second.call(null,prop);
var two = logifier.third.call(null,prop);
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
var one = cljs.core.second.call(null,prop);
var two = logifier.third.call(null,prop);
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
{var or__3943__auto__ = cljs.core._EQ_.call(null,cljs.core.second.call(null,one),cljs.core.second.call(null,two));
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = cljs.core._EQ_.call(null,cljs.core.second.call(null,one),logifier.third.call(null,two));
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{var or__3943__auto____$2 = cljs.core._EQ_.call(null,logifier.third.call(null,one),cljs.core.second.call(null,two));
if(or__3943__auto____$2)
{return or__3943__auto____$2;
} else
{return cljs.core._EQ_.call(null,logifier.third.call(null,one),logifier.third.call(null,two));
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
{if(cljs.core._EQ_.call(null,cljs.core.second.call(null,one),cljs.core.second.call(null,two)))
{return cljs.core.vector.call(null,"land",cljs.core.second.call(null,one),cljs.core.vector.call(null,"lor",logifier.before.call(null,logifier.third.call(null,one),logifier.third.call(null,two)),logifier.after.call(null,logifier.third.call(null,one),logifier.third.call(null,two))));
} else
{if(cljs.core._EQ_.call(null,cljs.core.second.call(null,one),logifier.third.call(null,two)))
{return cljs.core.vector.call(null,"land",cljs.core.second.call(null,one),cljs.core.vector.call(null,"lor",logifier.before.call(null,logifier.third.call(null,one),cljs.core.second.call(null,two)),logifier.after.call(null,logifier.third.call(null,one),cljs.core.second.call(null,two))));
} else
{if(cljs.core._EQ_.call(null,logifier.third.call(null,one),cljs.core.second.call(null,two)))
{return cljs.core.vector.call(null,"land",logifier.third.call(null,one),cljs.core.vector.call(null,"lor",logifier.before.call(null,cljs.core.second.call(null,one),logifier.third.call(null,two)),logifier.after.call(null,cljs.core.second.call(null,one),logifier.third.call(null,two))));
} else
{if(cljs.core._EQ_.call(null,logifier.third.call(null,one),logifier.third.call(null,two)))
{return cljs.core.vector.call(null,"land",logifier.third.call(null,one),cljs.core.vector.call(null,"lor",logifier.before.call(null,cljs.core.second.call(null,one),cljs.core.second.call(null,two)),logifier.after.call(null,cljs.core.second.call(null,one),cljs.core.second.call(null,two))));
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
{return lnot.call(null,cljs.core.second.call(null,prop__$2));
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
{return land.call(null,cljs.core.PersistentVector.fromArray([cljs.core.PersistentVector.fromArray(["lcond",cljs.core.second.call(null,prop__$2),logifier.third.call(null,prop__$2)], true),cljs.core.PersistentVector.fromArray(["lcond",logifier.third.call(null,prop__$2),cljs.core.second.call(null,prop__$2)], true)], true));
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
var two = cljs.core.second.call(null,prop__$2);
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
var two = cljs.core.second.call(null,prop__$2);
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
var two = cljs.core.second.call(null,prop__$2);
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
var pred__37325 = cljs.core._EQ_;
var expr__37326 = cljs.core.first.call(null,remains);
if(pred__37325.call(null,null,expr__37326))
{return clojure.string.join.call(null,cljs.core.flatten.call(null,cljs.core.conj.call(null,output,cljs.core.repeat.call(null,binary_count,"()"))));
} else
{if(pred__37325.call(null,"lnot",expr__37326))
{{
var G__37328 = cljs.core.conj.call(null,output,"~");
var G__37329 = cljs.core.rest.call(null,remains);
var G__37330 = binary_count;
output = G__37328;
remains = G__37329;
binary_count = G__37330;
continue;
}
} else
{if(pred__37325.call(null,"lor",expr__37326))
{{
var G__37331 = cljs.core.conj.call(null,output,"v");
var G__37332 = cljs.core.rest.call(null,remains);
var G__37333 = (binary_count + 1);
output = G__37331;
remains = G__37332;
binary_count = G__37333;
continue;
}
} else
{if(pred__37325.call(null,"land",expr__37326))
{{
var G__37334 = cljs.core.conj.call(null,output,"&");
var G__37335 = cljs.core.rest.call(null,remains);
var G__37336 = (binary_count + 1);
output = G__37334;
remains = G__37335;
binary_count = G__37336;
continue;
}
} else
{if(pred__37325.call(null,"lcond",expr__37326))
{{
var G__37337 = cljs.core.conj.call(null,output,">");
var G__37338 = cljs.core.rest.call(null,remains);
var G__37339 = (binary_count + 1);
output = G__37337;
remains = G__37338;
binary_count = G__37339;
continue;
}
} else
{if(cljs.core.truth_(logifier.simple_QMARK_.call(null,cljs.core.first.call(null,remains))))
{{
var G__37340 = cljs.core.conj.call(null,output,[cljs.core.str(cljs.core.first.call(null,remains))].join(''));
var G__37341 = cljs.core.rest.call(null,remains);
var G__37342 = binary_count;
output = G__37340;
remains = G__37341;
binary_count = G__37342;
continue;
}
} else
{{
var G__37343 = cljs.core.conj.call(null,output,cljs.core.first.call(null,remains));
var G__37344 = cljs.core.rest.call(null,remains);
var G__37345 = binary_count;
output = G__37343;
remains = G__37344;
binary_count = G__37345;
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
if(cljs.core._EQ_.call(null,logifier.evaluate.call(null,cljs.core.second.call(null,prop__$2),logifier.test_model),"false"))
{return true;
} else
{affirm.call(null,cljs.core.second.call(null,prop__$2),logifier.test_model);
return cljs.core._EQ_.call(null,logifier.evaluate.call(null,logifier.third.call(null,prop__$2),logifier.test_model),"false");
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
var seq__37382_37394 = cljs.core.seq.call(null,logifier.list_names.call(null,this_model__$1));
var chunk__37383_37395 = null;
var count__37384_37396 = 0;
var i__37385_37397 = 0;
while(true){
if((i__37385_37397 < count__37384_37396))
{var props_37398 = cljs.core._nth.call(null,chunk__37383_37395,i__37385_37397);
affirm.call(null,props_37398,this_model__$1);
{
var G__37399 = seq__37382_37394;
var G__37400 = chunk__37383_37395;
var G__37401 = count__37384_37396;
var G__37402 = (i__37385_37397 + 1);
seq__37382_37394 = G__37399;
chunk__37383_37395 = G__37400;
count__37384_37396 = G__37401;
i__37385_37397 = G__37402;
continue;
}
} else
{var temp__4092__auto___37403 = cljs.core.seq.call(null,seq__37382_37394);
if(temp__4092__auto___37403)
{var seq__37382_37404__$1 = temp__4092__auto___37403;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37382_37404__$1))
{var c__3075__auto___37405 = cljs.core.chunk_first.call(null,seq__37382_37404__$1);
{
var G__37406 = cljs.core.chunk_rest.call(null,seq__37382_37404__$1);
var G__37407 = c__3075__auto___37405;
var G__37408 = cljs.core.count.call(null,c__3075__auto___37405);
var G__37409 = 0;
seq__37382_37394 = G__37406;
chunk__37383_37395 = G__37407;
count__37384_37396 = G__37408;
i__37385_37397 = G__37409;
continue;
}
} else
{var props_37410 = cljs.core.first.call(null,seq__37382_37404__$1);
affirm.call(null,props_37410,this_model__$1);
{
var G__37411 = cljs.core.next.call(null,seq__37382_37404__$1);
var G__37412 = null;
var G__37413 = 0;
var G__37414 = 0;
seq__37382_37394 = G__37411;
chunk__37383_37395 = G__37412;
count__37384_37396 = G__37413;
i__37385_37397 = G__37414;
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
var G__37415 = cljs.core.deref.call(null,this_model__$1);
initial_state = G__37415;
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
{return insert_prop.call(null,cljs.core.second.call(null,prop__$2),"false",this_model);
} else
{if(cljs.core._EQ_.call(null,operate,"lor"))
{return decomp_lor.call(null,cljs.core.vector.call(null,cljs.core.second.call(null,prop__$2),logifier.third.call(null,prop__$2)));
} else
{if(cljs.core._EQ_.call(null,operate,"land"))
{affirm.call(null,cljs.core.second.call(null,prop__$2),this_model);
return affirm.call(null,logifier.third.call(null,prop__$2),this_model);
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
var earlier = logifier.before.call(null,cljs.core.first.call(null,prop__$2),cljs.core.second.call(null,prop__$2));
var later = logifier.after.call(null,cljs.core.first.call(null,prop__$2),cljs.core.second.call(null,prop__$2));
if(cljs.core._EQ_.call(null,logifier.evaluate.call(null,cljs.core.first.call(null,prop__$2),this_model),"false"))
{affirm.call(null,cljs.core.second.call(null,prop__$2),this_model);
} else
{if(cljs.core._EQ_.call(null,logifier.evaluate.call(null,cljs.core.second.call(null,prop__$2),this_model),"false"))
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
var seq__37390 = cljs.core.seq.call(null,logifier.list_names.call(null,this_model));
var chunk__37391 = null;
var count__37392 = 0;
var i__37393 = 0;
while(true){
if((i__37393 < count__37392))
{var props = cljs.core._nth.call(null,chunk__37391,i__37393);
((function (seq__37390,chunk__37391,count__37392,i__37393,props){
return (function (p1__37321_SHARP_){
if(cljs.core.not.call(null,logifier.simple_QMARK_.call(null,p1__37321_SHARP_)))
{if(cljs.core._EQ_.call(null,cljs.core.first.call(null,p1__37321_SHARP_),"lor"))
{var one = cljs.core.second.call(null,p1__37321_SHARP_);
var two = logifier.third.call(null,p1__37321_SHARP_);
if(cljs.core.truth_(logifier.converse_QMARK_.call(null,p1__37321_SHARP_,cljs.core.vector.call(null,"lor",earlier,later))))
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
});})(seq__37390,chunk__37391,count__37392,i__37393,props))
.call(null,props);
{
var G__37416 = seq__37390;
var G__37417 = chunk__37391;
var G__37418 = count__37392;
var G__37419 = (i__37393 + 1);
seq__37390 = G__37416;
chunk__37391 = G__37417;
count__37392 = G__37418;
i__37393 = G__37419;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__37390);
if(temp__4092__auto__)
{var seq__37390__$1 = temp__4092__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37390__$1))
{var c__3075__auto__ = cljs.core.chunk_first.call(null,seq__37390__$1);
{
var G__37420 = cljs.core.chunk_rest.call(null,seq__37390__$1);
var G__37421 = c__3075__auto__;
var G__37422 = cljs.core.count.call(null,c__3075__auto__);
var G__37423 = 0;
seq__37390 = G__37420;
chunk__37391 = G__37421;
count__37392 = G__37422;
i__37393 = G__37423;
continue;
}
} else
{var props = cljs.core.first.call(null,seq__37390__$1);
((function (seq__37390,chunk__37391,count__37392,i__37393,props,seq__37390__$1,temp__4092__auto__){
return (function (p1__37321_SHARP_){
if(cljs.core.not.call(null,logifier.simple_QMARK_.call(null,p1__37321_SHARP_)))
{if(cljs.core._EQ_.call(null,cljs.core.first.call(null,p1__37321_SHARP_),"lor"))
{var one = cljs.core.second.call(null,p1__37321_SHARP_);
var two = logifier.third.call(null,p1__37321_SHARP_);
if(cljs.core.truth_(logifier.converse_QMARK_.call(null,p1__37321_SHARP_,cljs.core.vector.call(null,"lor",earlier,later))))
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
});})(seq__37390,chunk__37391,count__37392,i__37393,props,seq__37390__$1,temp__4092__auto__))
.call(null,props);
{
var G__37424 = cljs.core.next.call(null,seq__37390__$1);
var G__37425 = null;
var G__37426 = 0;
var G__37427 = 0;
seq__37390 = G__37424;
chunk__37391 = G__37425;
count__37392 = G__37426;
i__37393 = G__37427;
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
var seq__37434_37438 = cljs.core.seq.call(null,logifier.list_names.call(null,this_model));
var chunk__37435_37439 = null;
var count__37436_37440 = 0;
var i__37437_37441 = 0;
while(true){
if((i__37437_37441 < count__37436_37440))
{var props_37442 = cljs.core._nth.call(null,chunk__37435_37439,i__37437_37441);
logifier.affirm.call(null,props_37442,this_model);
{
var G__37443 = seq__37434_37438;
var G__37444 = chunk__37435_37439;
var G__37445 = count__37436_37440;
var G__37446 = (i__37437_37441 + 1);
seq__37434_37438 = G__37443;
chunk__37435_37439 = G__37444;
count__37436_37440 = G__37445;
i__37437_37441 = G__37446;
continue;
}
} else
{var temp__4092__auto___37447 = cljs.core.seq.call(null,seq__37434_37438);
if(temp__4092__auto___37447)
{var seq__37434_37448__$1 = temp__4092__auto___37447;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37434_37448__$1))
{var c__3075__auto___37449 = cljs.core.chunk_first.call(null,seq__37434_37448__$1);
{
var G__37450 = cljs.core.chunk_rest.call(null,seq__37434_37448__$1);
var G__37451 = c__3075__auto___37449;
var G__37452 = cljs.core.count.call(null,c__3075__auto___37449);
var G__37453 = 0;
seq__37434_37438 = G__37450;
chunk__37435_37439 = G__37451;
count__37436_37440 = G__37452;
i__37437_37441 = G__37453;
continue;
}
} else
{var props_37454 = cljs.core.first.call(null,seq__37434_37448__$1);
logifier.affirm.call(null,props_37454,this_model);
{
var G__37455 = cljs.core.next.call(null,seq__37434_37448__$1);
var G__37456 = null;
var G__37457 = 0;
var G__37458 = 0;
seq__37434_37438 = G__37455;
chunk__37435_37439 = G__37456;
count__37436_37440 = G__37457;
i__37437_37441 = G__37458;
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
var G__37459 = cljs.core.deref.call(null,this_model);
initial_state = G__37459;
continue;
}
} else
{return null;
}
break;
}
});
logifier.list_states = (function list_states(){
var states = cljs.core.filter.call(null,logifier.simple_QMARK_,logifier.list_names.call(null,logifier.model));
var true_states = cljs.core.map.call(null,cljs.core.str,cljs.core.filter.call(null,((function (states){
return (function (p1__37428_SHARP_){
return cljs.core._EQ_.call(null,logifier.evaluate.call(null,p1__37428_SHARP_,logifier.model),"true");
});})(states))
,states));
var false_states = cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core.str,"~"),cljs.core.filter.call(null,((function (states,true_states){
return (function (p1__37429_SHARP_){
return cljs.core._EQ_.call(null,logifier.evaluate.call(null,p1__37429_SHARP_,logifier.model),"false");
});})(states,true_states))
,states));
return clojure.string.join.call(null," . ",cljs.core.sort.call(null,cljs.core.compare,cljs.core.flatten.call(null,cljs.core.conj.call(null,true_states,false_states))));
});
logifier.reset_assertions = (function reset_assertions(){
logifier.clear_model.call(null,logifier.model);
return logifier.clear_model.call(null,logifier.assertions);
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
logifier.asserted_QMARK_ = (function asserted_QMARK_(prop){
var prop__$1 = logifier.ready_to_assert.call(null,prop);
var or__3943__auto__ = cljs.core._EQ_.call(null,cljs.core.filter.call(null,(function (p1__37460_SHARP_){
return cljs.core._EQ_.call(null,p1__37460_SHARP_,prop__$1);
}),cljs.core.deref.call(null,logifier.assertions)),cljs.core.list.call(null,prop__$1));
if(or__3943__auto__)
{return or__3943__auto__;
} else
{return cljs.core._EQ_.call(null,cljs.core.filter.call(null,(function (p1__37461_SHARP_){
return cljs.core._EQ_.call(null,p1__37461_SHARP_,logifier.joincat.call(null,"(",prop__$1,")"));
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
var seq__37467 = cljs.core.seq.call(null,temp_assertions);
var chunk__37468 = null;
var count__37469 = 0;
var i__37470 = 0;
while(true){
if((i__37470 < count__37469))
{var props = cljs.core._nth.call(null,chunk__37468,i__37470);
logifier.assert_prop.call(null,props);
{
var G__37471 = seq__37467;
var G__37472 = chunk__37468;
var G__37473 = count__37469;
var G__37474 = (i__37470 + 1);
seq__37467 = G__37471;
chunk__37468 = G__37472;
count__37469 = G__37473;
i__37470 = G__37474;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__37467);
if(temp__4092__auto__)
{var seq__37467__$1 = temp__4092__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37467__$1))
{var c__3075__auto__ = cljs.core.chunk_first.call(null,seq__37467__$1);
{
var G__37475 = cljs.core.chunk_rest.call(null,seq__37467__$1);
var G__37476 = c__3075__auto__;
var G__37477 = cljs.core.count.call(null,c__3075__auto__);
var G__37478 = 0;
seq__37467 = G__37475;
chunk__37468 = G__37476;
count__37469 = G__37477;
i__37470 = G__37478;
continue;
}
} else
{var props = cljs.core.first.call(null,seq__37467__$1);
logifier.assert_prop.call(null,props);
{
var G__37479 = cljs.core.next.call(null,seq__37467__$1);
var G__37480 = null;
var G__37481 = 0;
var G__37482 = 0;
seq__37467 = G__37479;
chunk__37468 = G__37480;
count__37469 = G__37481;
i__37470 = G__37482;
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
cljs.core.reset_BANG_.call(null,logifier.assertions,cljs.core.filter.call(null,(function (p1__37462_SHARP_){
return !(cljs.core._EQ_.call(null,p1__37462_SHARP_,prop__$1));
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
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),cljs.core.with_meta(cljs.core.list(new cljs.core.Symbol(null,"type","type",-1636955917,null),cljs.core.vec(["p"])),cljs.core.hash_map("\uFDD0:line",726,"\uFDD0:column",12)),new cljs.core.Symbol(null,"cljs.core.PersistentVector","cljs.core.PersistentVector",-65585786,null)),cljs.core.hash_map("\uFDD0:line",726,"\uFDD0:column",9))))].join('')));
}
if(cljs.core.truth_(logifier.wff_QMARK_.call(null,cljs.core.PersistentVector.fromArray(["lnot","x"], true))))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list(new cljs.core.Symbol(null,"wff?","wff?",-1636885151,null),cljs.core.vec(["lnot","x"])),cljs.core.hash_map("\uFDD0:line",728,"\uFDD0:column",9))))].join('')));
}
if(cljs.core._EQ_.call(null,logifier.clean_parse.call(null,"p v y"),cljs.core.PersistentVector.fromArray(["p","lor","y"], true)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),cljs.core.with_meta(cljs.core.list(new cljs.core.Symbol(null,"clean-parse","clean-parse",721798120,null),"p v y"),cljs.core.hash_map("\uFDD0:line",730,"\uFDD0:column",12)),cljs.core.vec(["p","lor","y"])),cljs.core.hash_map("\uFDD0:line",730,"\uFDD0:column",9))))].join('')));
}
if(cljs.core._EQ_.call(null,logifier.reformat_prop.call(null,"pvy"),"p v y"))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),cljs.core.with_meta(cljs.core.list(new cljs.core.Symbol(null,"reformat-prop","reformat-prop",836029727,null),"pvy"),cljs.core.hash_map("\uFDD0:line",732,"\uFDD0:column",12)),"p v y"),cljs.core.hash_map("\uFDD0:line",732,"\uFDD0:column",9))))].join('')));
}
if(cljs.core.truth_(logifier.valid_input_QMARK_.call(null,"p v y")))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list(new cljs.core.Symbol(null,"valid-input?","valid-input?",229392991,null),"p v y"),cljs.core.hash_map("\uFDD0:line",734,"\uFDD0:column",9))))].join('')));
}
if(cljs.core._EQ_.call(null,logifier.nest_parse.call(null,"p v y"),cljs.core.PersistentVector.fromArray(["p","lor","y"], true)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),cljs.core.with_meta(cljs.core.list(new cljs.core.Symbol(null,"nest-parse","nest-parse",174198967,null),"p v y"),cljs.core.hash_map("\uFDD0:line",736,"\uFDD0:column",12)),cljs.core.vec(["p","lor","y"])),cljs.core.hash_map("\uFDD0:line",736,"\uFDD0:column",9))))].join('')));
}
if(cljs.core._EQ_.call(null,logifier.prefixer.call(null,cljs.core.PersistentVector.fromArray(["p","lor","y"], true)),cljs.core.PersistentVector.fromArray(["lor","p","y"], true)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),cljs.core.with_meta(cljs.core.list(new cljs.core.Symbol(null,"prefixer","prefixer",1365892216,null),cljs.core.vec(["p","lor","y"])),cljs.core.hash_map("\uFDD0:line",738,"\uFDD0:column",12)),cljs.core.vec(["lor","p","y"])),cljs.core.hash_map("\uFDD0:line",738,"\uFDD0:column",9))))].join('')));
}
if(cljs.core.truth_(logifier.evaluate.call(null,cljs.core.PersistentVector.fromArray(["lor","p",cljs.core.PersistentVector.fromArray(["lnot","p"], true)], true),logifier.model)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list(new cljs.core.Symbol(null,"evaluate","evaluate",-1478744494,null),cljs.core.vec(["lor","p",cljs.core.vec(["lnot","p"])]),new cljs.core.Symbol(null,"model","model",-1536461598,null)),cljs.core.hash_map("\uFDD0:line",740,"\uFDD0:column",9))))].join('')));
}
