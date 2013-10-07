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
var G__17331 = cljs.core.subs.call(null,remains,1);
var G__17332 = (count + 1);
remains = G__17331;
count = G__17332;
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
joincat.cljs$lang$applyTo = (function (arglist__17333){
var input = cljs.core.seq(arglist__17333);
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
return (new cljs.core.Keyword("\uFDD0:value")).call(null,cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__17334_SHARP_){
return cljs.core._EQ_.call(null,(new cljs.core.Keyword("\uFDD0:name")).call(null,p1__17334_SHARP_),name);
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
return cljs.core.map.call(null,(function (p1__17335_SHARP_){
return cljs.core.get.call(null,p1__17335_SHARP_,"\uFDD0:name");
}),cljs.core.deref.call(null,this_model));
});
logifier.list_props = (function list_props(this_model){
return cljs.core.map.call(null,(function (p1__17336_SHARP_){
return logifier.get_correct_prop.call(null,p1__17336_SHARP_,this_model);
}),cljs.core.map.call(null,(function (p1__17337_SHARP_){
return cljs.core.get.call(null,p1__17337_SHARP_,"\uFDD0:name");
}),cljs.core.deref.call(null,this_model)));
});
logifier.has_name_QMARK_ = (function has_name_QMARK_(name,this_model){
if(cljs.core._EQ_.call(null,cljs.core.filter.call(null,(function (p1__17338_SHARP_){
return cljs.core._EQ_.call(null,p1__17338_SHARP_,name);
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
{var vec__17340 = expr;
var left = cljs.core.nth.call(null,vec__17340,0,null);
var op = cljs.core.nth.call(null,vec__17340,1,null);
var right = cljs.core.nth.call(null,vec__17340,2,null);
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
var G__17341 = cljs.core.subs.call(null,remains,1);
var G__17342 = (parens - 1);
var G__17343 = (count + 1);
remains = G__17341;
parens = G__17342;
count = G__17343;
continue;
}
}
} else
{if(cljs.core._EQ_.call(null,cljs.core.first.call(null,remains),"("))
{{
var G__17344 = cljs.core.subs.call(null,remains,1);
var G__17345 = (parens + 1);
var G__17346 = (count + 1);
remains = G__17344;
parens = G__17345;
count = G__17346;
continue;
}
} else
{if("\uFDD0:else")
{{
var G__17347 = cljs.core.subs.call(null,remains,1);
var G__17348 = parens;
var G__17349 = (count + 1);
remains = G__17347;
parens = G__17348;
count = G__17349;
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
var G__17350 = output;
var G__17351 = cljs.core.subs.call(null,remains,1);
output = G__17350;
remains = G__17351;
continue;
}
} else
{if(cljs.core._EQ_.call(null,cljs.core.first.call(null,remains),"v"))
{{
var G__17352 = cljs.core.conj.call(null,output,"lor");
var G__17353 = cljs.core.subs.call(null,remains,1);
output = G__17352;
remains = G__17353;
continue;
}
} else
{if(cljs.core._EQ_.call(null,cljs.core.first.call(null,remains),"&"))
{{
var G__17354 = cljs.core.conj.call(null,output,"land");
var G__17355 = cljs.core.subs.call(null,remains,1);
output = G__17354;
remains = G__17355;
continue;
}
} else
{if(cljs.core._EQ_.call(null,cljs.core.first.call(null,remains),">"))
{{
var G__17356 = cljs.core.conj.call(null,output,"lcond");
var G__17357 = cljs.core.subs.call(null,remains,1);
output = G__17356;
remains = G__17357;
continue;
}
} else
{if(cljs.core._EQ_.call(null,cljs.core.first.call(null,remains),"<"))
{{
var G__17358 = cljs.core.conj.call(null,output,"lbicond");
var G__17359 = cljs.core.subs.call(null,remains,2);
output = G__17358;
remains = G__17359;
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
var G__17360 = cljs.core.conj.call(null,output,cljs.core.vector.call(null,"lnot",cljs.core.subs.call(null,remains,1,logifier.count_next_parens.call(null,cljs.core.subs.call(null,remains,0)))));
var G__17361 = cljs.core.subs.call(null,remains,logifier.count_next_parens.call(null,remains));
output = G__17360;
remains = G__17361;
continue;
}
} else
{{
var G__17362 = cljs.core.conj.call(null,output,cljs.core.vector.call(null,"lnot",cljs.core.first.call(null,cljs.core.subs.call(null,remains,1))));
var G__17363 = cljs.core.subs.call(null,remains,2);
output = G__17362;
remains = G__17363;
continue;
}
}
} else
{if(cljs.core._EQ_.call(null,cljs.core.first.call(null,remains),"("))
{{
var G__17364 = cljs.core.conj.call(null,output,cljs.core.subs.call(null,remains,0,logifier.count_next_parens.call(null,remains)));
var G__17365 = cljs.core.subs.call(null,remains,logifier.count_next_parens.call(null,remains));
output = G__17364;
remains = G__17365;
continue;
}
} else
{if(cljs.core.truth_(logifier.simple_QMARK_.call(null,cljs.core.first.call(null,remains))))
{{
var G__17366 = cljs.core.conj.call(null,output,cljs.core.first.call(null,remains));
var G__17367 = cljs.core.subs.call(null,remains,1);
output = G__17366;
remains = G__17367;
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
var G__17368 = cljs.core.conj.call(null,output,")");
var G__17369 = cljs.core.subs.call(null,remains,1);
var G__17370 = (count - 1);
output = G__17368;
remains = G__17369;
count = G__17370;
continue;
}
}
} else
{if(cljs.core._EQ_.call(null,cljs.core.first.call(null,remains),"("))
{if(cljs.core._EQ_.call(null,count,0))
{{
var G__17371 = cljs.core.PersistentVector.EMPTY;
var G__17372 = cljs.core.subs.call(null,remains,1);
var G__17373 = 1;
output = G__17371;
remains = G__17372;
count = G__17373;
continue;
}
} else
{{
var G__17374 = cljs.core.conj.call(null,output,cljs.core.first.call(null,remains));
var G__17375 = cljs.core.subs.call(null,remains,1);
var G__17376 = (count + 1);
output = G__17374;
remains = G__17375;
count = G__17376;
continue;
}
}
} else
{if("\uFDD0:else")
{{
var G__17377 = cljs.core.conj.call(null,output,cljs.core.first.call(null,remains));
var G__17378 = cljs.core.subs.call(null,remains,1);
var G__17379 = count;
output = G__17377;
remains = G__17378;
count = G__17379;
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
var G__17380 = cljs.core.subs.call(null,prop,count,(count + 1));
var G__17381 = (count + 1);
next_one = G__17380;
count = G__17381;
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
var G__17382 = output;
var G__17383 = cljs.core.subs.call(null,remains,1);
output = G__17382;
remains = G__17383;
continue;
}
} else
{if(cljs.core.truth_(logifier.atomic_prop_QMARK_.call(null,this_one)))
{if(cljs.core._EQ_.call(null,logifier.next_char.call(null,remains),")"))
{{
var G__17384 = cljs.core.conj.call(null,output,this_one);
var G__17385 = cljs.core.subs.call(null,remains,1);
output = G__17384;
remains = G__17385;
continue;
}
} else
{{
var G__17386 = cljs.core.conj.call(null,output,this_one," ");
var G__17387 = cljs.core.subs.call(null,remains,1);
output = G__17386;
remains = G__17387;
continue;
}
}
} else
{if(cljs.core.truth_(logifier.binary_operator_QMARK_.call(null,this_one)))
{if(cljs.core._EQ_.call(null,this_one,"<"))
{{
var G__17388 = cljs.core.conj.call(null,output,this_one,"> ");
var G__17389 = cljs.core.subs.call(null,remains,2);
output = G__17388;
remains = G__17389;
continue;
}
} else
{{
var G__17390 = cljs.core.conj.call(null,output,this_one," ");
var G__17391 = cljs.core.subs.call(null,remains,1);
output = G__17390;
remains = G__17391;
continue;
}
}
} else
{if(cljs.core.truth_(logifier.negate_operator_QMARK_.call(null,this_one)))
{{
var G__17392 = cljs.core.conj.call(null,output,this_one);
var G__17393 = cljs.core.subs.call(null,remains,1);
output = G__17392;
remains = G__17393;
continue;
}
} else
{if(cljs.core._EQ_.call(null,this_one,"("))
{{
var G__17394 = cljs.core.conj.call(null,output,this_one);
var G__17395 = cljs.core.subs.call(null,remains,1);
output = G__17394;
remains = G__17395;
continue;
}
} else
{if(cljs.core._EQ_.call(null,this_one,")"))
{if(cljs.core._EQ_.call(null,logifier.next_char.call(null,remains),")"))
{{
var G__17396 = cljs.core.conj.call(null,output,this_one);
var G__17397 = cljs.core.subs.call(null,remains,1);
output = G__17396;
remains = G__17397;
continue;
}
} else
{{
var G__17398 = cljs.core.conj.call(null,output,this_one," ");
var G__17399 = cljs.core.subs.call(null,remains,1);
output = G__17398;
remains = G__17399;
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
var G__17400 = cljs.core.subs.call(null,remains,1);
remains = G__17400;
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
var G__17401 = cljs.core.subs.call(null,remains,1);
remains = G__17401;
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
var G__17402 = cljs.core.subs.call(null,remains,1);
remains = G__17402;
continue;
}
} else
{if(cljs.core._EQ_.call(null,next_one,">"))
{{
var G__17403 = cljs.core.subs.call(null,remains,2);
remains = G__17403;
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
var G__17404 = cljs.core.subs.call(null,remains,1);
remains = G__17404;
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
var G__17405 = clojure.string.join.call(null,cljs.core.concat.call(null,"p",cljs.core.subs.call(null,remains,logifier.count_next_parens.call(null,remains))));
remains = G__17405;
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
var pred__17410 = cljs.core._EQ_;
var expr__17411 = cljs.core.first.call(null,remains);
if(pred__17410.call(null,null,expr__17411))
{return clojure.string.join.call(null,cljs.core.flatten.call(null,cljs.core.conj.call(null,output,cljs.core.repeat.call(null,binary_count,"()"))));
} else
{if(pred__17410.call(null,"lnot",expr__17411))
{{
var G__17413 = cljs.core.conj.call(null,output,"~");
var G__17414 = cljs.core.rest.call(null,remains);
var G__17415 = binary_count;
output = G__17413;
remains = G__17414;
binary_count = G__17415;
continue;
}
} else
{if(pred__17410.call(null,"lor",expr__17411))
{{
var G__17416 = cljs.core.conj.call(null,output,"v");
var G__17417 = cljs.core.rest.call(null,remains);
var G__17418 = (binary_count + 1);
output = G__17416;
remains = G__17417;
binary_count = G__17418;
continue;
}
} else
{if(pred__17410.call(null,"land",expr__17411))
{{
var G__17419 = cljs.core.conj.call(null,output,"&");
var G__17420 = cljs.core.rest.call(null,remains);
var G__17421 = (binary_count + 1);
output = G__17419;
remains = G__17420;
binary_count = G__17421;
continue;
}
} else
{if(pred__17410.call(null,"lcond",expr__17411))
{{
var G__17422 = cljs.core.conj.call(null,output,">");
var G__17423 = cljs.core.rest.call(null,remains);
var G__17424 = (binary_count + 1);
output = G__17422;
remains = G__17423;
binary_count = G__17424;
continue;
}
} else
{if(cljs.core.truth_(logifier.simple_QMARK_.call(null,cljs.core.first.call(null,remains))))
{{
var G__17425 = cljs.core.conj.call(null,output,[cljs.core.str(cljs.core.first.call(null,remains))].join(''));
var G__17426 = cljs.core.rest.call(null,remains);
var G__17427 = binary_count;
output = G__17425;
remains = G__17426;
binary_count = G__17427;
continue;
}
} else
{{
var G__17428 = cljs.core.conj.call(null,output,cljs.core.first.call(null,remains));
var G__17429 = cljs.core.rest.call(null,remains);
var G__17430 = binary_count;
output = G__17428;
remains = G__17429;
binary_count = G__17430;
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
var seq__17467_17479 = cljs.core.seq.call(null,logifier.list_names.call(null,this_model__$1));
var chunk__17468_17480 = null;
var count__17469_17481 = 0;
var i__17470_17482 = 0;
while(true){
if((i__17470_17482 < count__17469_17481))
{var props_17483 = cljs.core._nth.call(null,chunk__17468_17480,i__17470_17482);
affirm.call(null,props_17483,this_model__$1);
{
var G__17484 = seq__17467_17479;
var G__17485 = chunk__17468_17480;
var G__17486 = count__17469_17481;
var G__17487 = (i__17470_17482 + 1);
seq__17467_17479 = G__17484;
chunk__17468_17480 = G__17485;
count__17469_17481 = G__17486;
i__17470_17482 = G__17487;
continue;
}
} else
{var temp__4092__auto___17488 = cljs.core.seq.call(null,seq__17467_17479);
if(temp__4092__auto___17488)
{var seq__17467_17489__$1 = temp__4092__auto___17488;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17467_17489__$1))
{var c__3075__auto___17490 = cljs.core.chunk_first.call(null,seq__17467_17489__$1);
{
var G__17491 = cljs.core.chunk_rest.call(null,seq__17467_17489__$1);
var G__17492 = c__3075__auto___17490;
var G__17493 = cljs.core.count.call(null,c__3075__auto___17490);
var G__17494 = 0;
seq__17467_17479 = G__17491;
chunk__17468_17480 = G__17492;
count__17469_17481 = G__17493;
i__17470_17482 = G__17494;
continue;
}
} else
{var props_17495 = cljs.core.first.call(null,seq__17467_17489__$1);
affirm.call(null,props_17495,this_model__$1);
{
var G__17496 = cljs.core.next.call(null,seq__17467_17489__$1);
var G__17497 = null;
var G__17498 = 0;
var G__17499 = 0;
seq__17467_17479 = G__17496;
chunk__17468_17480 = G__17497;
count__17469_17481 = G__17498;
i__17470_17482 = G__17499;
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
var G__17500 = cljs.core.deref.call(null,this_model__$1);
initial_state = G__17500;
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
var seq__17475 = cljs.core.seq.call(null,logifier.list_names.call(null,this_model));
var chunk__17476 = null;
var count__17477 = 0;
var i__17478 = 0;
while(true){
if((i__17478 < count__17477))
{var props = cljs.core._nth.call(null,chunk__17476,i__17478);
((function (seq__17475,chunk__17476,count__17477,i__17478,props){
return (function (p1__17406_SHARP_){
if(cljs.core.not.call(null,logifier.simple_QMARK_.call(null,p1__17406_SHARP_)))
{if(cljs.core._EQ_.call(null,cljs.core.first.call(null,p1__17406_SHARP_),"lor"))
{var one = logifier.frest.call(null,p1__17406_SHARP_);
var two = logifier.frerest.call(null,p1__17406_SHARP_);
if(cljs.core.truth_(logifier.converse_QMARK_.call(null,p1__17406_SHARP_,cljs.core.vector.call(null,"lor",earlier,later))))
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
});})(seq__17475,chunk__17476,count__17477,i__17478,props))
.call(null,props);
{
var G__17501 = seq__17475;
var G__17502 = chunk__17476;
var G__17503 = count__17477;
var G__17504 = (i__17478 + 1);
seq__17475 = G__17501;
chunk__17476 = G__17502;
count__17477 = G__17503;
i__17478 = G__17504;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__17475);
if(temp__4092__auto__)
{var seq__17475__$1 = temp__4092__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17475__$1))
{var c__3075__auto__ = cljs.core.chunk_first.call(null,seq__17475__$1);
{
var G__17505 = cljs.core.chunk_rest.call(null,seq__17475__$1);
var G__17506 = c__3075__auto__;
var G__17507 = cljs.core.count.call(null,c__3075__auto__);
var G__17508 = 0;
seq__17475 = G__17505;
chunk__17476 = G__17506;
count__17477 = G__17507;
i__17478 = G__17508;
continue;
}
} else
{var props = cljs.core.first.call(null,seq__17475__$1);
((function (seq__17475,chunk__17476,count__17477,i__17478,props,seq__17475__$1,temp__4092__auto__){
return (function (p1__17406_SHARP_){
if(cljs.core.not.call(null,logifier.simple_QMARK_.call(null,p1__17406_SHARP_)))
{if(cljs.core._EQ_.call(null,cljs.core.first.call(null,p1__17406_SHARP_),"lor"))
{var one = logifier.frest.call(null,p1__17406_SHARP_);
var two = logifier.frerest.call(null,p1__17406_SHARP_);
if(cljs.core.truth_(logifier.converse_QMARK_.call(null,p1__17406_SHARP_,cljs.core.vector.call(null,"lor",earlier,later))))
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
});})(seq__17475,chunk__17476,count__17477,i__17478,props,seq__17475__$1,temp__4092__auto__))
.call(null,props);
{
var G__17509 = cljs.core.next.call(null,seq__17475__$1);
var G__17510 = null;
var G__17511 = 0;
var G__17512 = 0;
seq__17475 = G__17509;
chunk__17476 = G__17510;
count__17477 = G__17511;
i__17478 = G__17512;
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
var seq__17517_17521 = cljs.core.seq.call(null,logifier.list_names.call(null,this_model));
var chunk__17518_17522 = null;
var count__17519_17523 = 0;
var i__17520_17524 = 0;
while(true){
if((i__17520_17524 < count__17519_17523))
{var props_17525 = cljs.core._nth.call(null,chunk__17518_17522,i__17520_17524);
logifier.affirm.call(null,props_17525,this_model);
{
var G__17526 = seq__17517_17521;
var G__17527 = chunk__17518_17522;
var G__17528 = count__17519_17523;
var G__17529 = (i__17520_17524 + 1);
seq__17517_17521 = G__17526;
chunk__17518_17522 = G__17527;
count__17519_17523 = G__17528;
i__17520_17524 = G__17529;
continue;
}
} else
{var temp__4092__auto___17530 = cljs.core.seq.call(null,seq__17517_17521);
if(temp__4092__auto___17530)
{var seq__17517_17531__$1 = temp__4092__auto___17530;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17517_17531__$1))
{var c__3075__auto___17532 = cljs.core.chunk_first.call(null,seq__17517_17531__$1);
{
var G__17533 = cljs.core.chunk_rest.call(null,seq__17517_17531__$1);
var G__17534 = c__3075__auto___17532;
var G__17535 = cljs.core.count.call(null,c__3075__auto___17532);
var G__17536 = 0;
seq__17517_17521 = G__17533;
chunk__17518_17522 = G__17534;
count__17519_17523 = G__17535;
i__17520_17524 = G__17536;
continue;
}
} else
{var props_17537 = cljs.core.first.call(null,seq__17517_17531__$1);
logifier.affirm.call(null,props_17537,this_model);
{
var G__17538 = cljs.core.next.call(null,seq__17517_17531__$1);
var G__17539 = null;
var G__17540 = 0;
var G__17541 = 0;
seq__17517_17521 = G__17538;
chunk__17518_17522 = G__17539;
count__17519_17523 = G__17540;
i__17520_17524 = G__17541;
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
var G__17542 = cljs.core.deref.call(null,this_model);
initial_state = G__17542;
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
var seq__17548_17552 = cljs.core.seq.call(null,premises);
var chunk__17549_17553 = null;
var count__17550_17554 = 0;
var i__17551_17555 = 0;
while(true){
if((i__17551_17555 < count__17550_17554))
{var props_17556 = cljs.core._nth.call(null,chunk__17549_17553,i__17551_17555);
logifier.affirm.call(null,props_17556,logifier.test_model);
{
var G__17557 = seq__17548_17552;
var G__17558 = chunk__17549_17553;
var G__17559 = count__17550_17554;
var G__17560 = (i__17551_17555 + 1);
seq__17548_17552 = G__17557;
chunk__17549_17553 = G__17558;
count__17550_17554 = G__17559;
i__17551_17555 = G__17560;
continue;
}
} else
{var temp__4092__auto___17561 = cljs.core.seq.call(null,seq__17548_17552);
if(temp__4092__auto___17561)
{var seq__17548_17562__$1 = temp__4092__auto___17561;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17548_17562__$1))
{var c__3075__auto___17563 = cljs.core.chunk_first.call(null,seq__17548_17562__$1);
{
var G__17564 = cljs.core.chunk_rest.call(null,seq__17548_17562__$1);
var G__17565 = c__3075__auto___17563;
var G__17566 = cljs.core.count.call(null,c__3075__auto___17563);
var G__17567 = 0;
seq__17548_17552 = G__17564;
chunk__17549_17553 = G__17565;
count__17550_17554 = G__17566;
i__17551_17555 = G__17567;
continue;
}
} else
{var props_17568 = cljs.core.first.call(null,seq__17548_17562__$1);
logifier.affirm.call(null,props_17568,logifier.test_model);
{
var G__17569 = cljs.core.next.call(null,seq__17548_17562__$1);
var G__17570 = null;
var G__17571 = 0;
var G__17572 = 0;
seq__17548_17552 = G__17569;
chunk__17549_17553 = G__17570;
count__17550_17554 = G__17571;
i__17551_17555 = G__17572;
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
{if(cljs.core.every_QMARK_.call(null,(function (p1__17543_SHARP_){
return cljs.core._EQ_.call(null,logifier.evaluate.call(null,p1__17543_SHARP_,this_model),"true");
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
return (function (p1__17573_SHARP_){
return cljs.core._EQ_.call(null,logifier.evaluate.call(null,p1__17573_SHARP_,logifier.model),"true");
});})(states))
,states));
var false_states = cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core.str,"~"),cljs.core.filter.call(null,((function (states,true_states){
return (function (p1__17574_SHARP_){
return cljs.core._EQ_.call(null,logifier.evaluate.call(null,p1__17574_SHARP_,logifier.model),"false");
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
var or__3943__auto__ = cljs.core._EQ_.call(null,cljs.core.filter.call(null,(function (p1__17575_SHARP_){
return cljs.core._EQ_.call(null,p1__17575_SHARP_,prop__$1);
}),cljs.core.deref.call(null,logifier.assertions)),cljs.core.list.call(null,prop__$1));
if(or__3943__auto__)
{return or__3943__auto__;
} else
{return cljs.core._EQ_.call(null,cljs.core.filter.call(null,(function (p1__17576_SHARP_){
return cljs.core._EQ_.call(null,p1__17576_SHARP_,logifier.joincat.call(null,"(",prop__$1,")"));
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
var seq__17582 = cljs.core.seq.call(null,temp_assertions);
var chunk__17583 = null;
var count__17584 = 0;
var i__17585 = 0;
while(true){
if((i__17585 < count__17584))
{var props = cljs.core._nth.call(null,chunk__17583,i__17585);
logifier.assert_prop.call(null,props);
{
var G__17586 = seq__17582;
var G__17587 = chunk__17583;
var G__17588 = count__17584;
var G__17589 = (i__17585 + 1);
seq__17582 = G__17586;
chunk__17583 = G__17587;
count__17584 = G__17588;
i__17585 = G__17589;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__17582);
if(temp__4092__auto__)
{var seq__17582__$1 = temp__4092__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17582__$1))
{var c__3075__auto__ = cljs.core.chunk_first.call(null,seq__17582__$1);
{
var G__17590 = cljs.core.chunk_rest.call(null,seq__17582__$1);
var G__17591 = c__3075__auto__;
var G__17592 = cljs.core.count.call(null,c__3075__auto__);
var G__17593 = 0;
seq__17582 = G__17590;
chunk__17583 = G__17591;
count__17584 = G__17592;
i__17585 = G__17593;
continue;
}
} else
{var props = cljs.core.first.call(null,seq__17582__$1);
logifier.assert_prop.call(null,props);
{
var G__17594 = cljs.core.next.call(null,seq__17582__$1);
var G__17595 = null;
var G__17596 = 0;
var G__17597 = 0;
seq__17582 = G__17594;
chunk__17583 = G__17595;
count__17584 = G__17596;
i__17585 = G__17597;
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
cljs.core.reset_BANG_.call(null,logifier.assertions,cljs.core.filter.call(null,(function (p1__17577_SHARP_){
return !(cljs.core._EQ_.call(null,p1__17577_SHARP_,prop__$1));
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
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),cljs.core.with_meta(cljs.core.list(new cljs.core.Symbol(null,"type","type",-1636955917,null),cljs.core.vec(["p"])),cljs.core.hash_map("\uFDD0:line",750,"\uFDD0:column",12)),new cljs.core.Symbol(null,"cljs.core.PersistentVector","cljs.core.PersistentVector",-65585786,null)),cljs.core.hash_map("\uFDD0:line",750,"\uFDD0:column",9))))].join('')));
}
if(cljs.core.truth_(logifier.wff_QMARK_.call(null,cljs.core.PersistentVector.fromArray(["lnot","x"], true))))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list(new cljs.core.Symbol(null,"wff?","wff?",-1636885151,null),cljs.core.vec(["lnot","x"])),cljs.core.hash_map("\uFDD0:line",752,"\uFDD0:column",9))))].join('')));
}
if(cljs.core._EQ_.call(null,logifier.clean_parse.call(null,"p v y"),cljs.core.PersistentVector.fromArray(["p","lor","y"], true)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),cljs.core.with_meta(cljs.core.list(new cljs.core.Symbol(null,"clean-parse","clean-parse",721798120,null),"p v y"),cljs.core.hash_map("\uFDD0:line",754,"\uFDD0:column",12)),cljs.core.vec(["p","lor","y"])),cljs.core.hash_map("\uFDD0:line",754,"\uFDD0:column",9))))].join('')));
}
if(cljs.core._EQ_.call(null,logifier.reformat_prop.call(null,"pvy"),"p v y"))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),cljs.core.with_meta(cljs.core.list(new cljs.core.Symbol(null,"reformat-prop","reformat-prop",836029727,null),"pvy"),cljs.core.hash_map("\uFDD0:line",756,"\uFDD0:column",12)),"p v y"),cljs.core.hash_map("\uFDD0:line",756,"\uFDD0:column",9))))].join('')));
}
if(cljs.core.truth_(logifier.valid_input_QMARK_.call(null,"p v y")))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list(new cljs.core.Symbol(null,"valid-input?","valid-input?",229392991,null),"p v y"),cljs.core.hash_map("\uFDD0:line",758,"\uFDD0:column",9))))].join('')));
}
if(cljs.core._EQ_.call(null,logifier.nest_parse.call(null,"p v y"),cljs.core.PersistentVector.fromArray(["p","lor","y"], true)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),cljs.core.with_meta(cljs.core.list(new cljs.core.Symbol(null,"nest-parse","nest-parse",174198967,null),"p v y"),cljs.core.hash_map("\uFDD0:line",760,"\uFDD0:column",12)),cljs.core.vec(["p","lor","y"])),cljs.core.hash_map("\uFDD0:line",760,"\uFDD0:column",9))))].join('')));
}
if(cljs.core._EQ_.call(null,logifier.prefixer.call(null,cljs.core.PersistentVector.fromArray(["p","lor","y"], true)),cljs.core.PersistentVector.fromArray(["lor","p","y"], true)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),cljs.core.with_meta(cljs.core.list(new cljs.core.Symbol(null,"prefixer","prefixer",1365892216,null),cljs.core.vec(["p","lor","y"])),cljs.core.hash_map("\uFDD0:line",762,"\uFDD0:column",12)),cljs.core.vec(["lor","p","y"])),cljs.core.hash_map("\uFDD0:line",762,"\uFDD0:column",9))))].join('')));
}
