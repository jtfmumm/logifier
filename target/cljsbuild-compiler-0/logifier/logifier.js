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
var G__32838 = cljs.core.subs.call(null,remains,1);
var G__32839 = (counter + 1);
remains = G__32838;
counter = G__32839;
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
joincat.cljs$lang$applyTo = (function (arglist__32840){
var input = cljs.core.seq(arglist__32840);
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
return (new cljs.core.Keyword("\uFDD0:value")).call(null,cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__32841_SHARP_){
return cljs.core._EQ_.call(null,(new cljs.core.Keyword("\uFDD0:name")).call(null,p1__32841_SHARP_),name);
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
return cljs.core.map.call(null,(function (p1__32842_SHARP_){
return cljs.core.get.call(null,p1__32842_SHARP_,"\uFDD0:name");
}),cljs.core.deref.call(null,this_model));
});
logifier.list_props = (function list_props(this_model){
return cljs.core.map.call(null,(function (p1__32843_SHARP_){
return logifier.get_correct_prop.call(null,p1__32843_SHARP_,this_model);
}),cljs.core.map.call(null,(function (p1__32844_SHARP_){
return cljs.core.get.call(null,p1__32844_SHARP_,"\uFDD0:name");
}),cljs.core.deref.call(null,this_model)));
});
logifier.has_name_QMARK_ = (function has_name_QMARK_(name,this_model){
if(cljs.core.truth_(cljs.core.filter.call(null,(function (p1__32845_SHARP_){
return cljs.core._EQ_.call(null,p1__32845_SHARP_,name);
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
{var vec__32847 = expr;
var left = cljs.core.nth.call(null,vec__32847,0,null);
var op = cljs.core.nth.call(null,vec__32847,1,null);
var right = cljs.core.nth.call(null,vec__32847,2,null);
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
var G__32848 = cljs.core.subs.call(null,remains,1);
var G__32849 = (parens - 1);
var G__32850 = (count + 1);
remains = G__32848;
parens = G__32849;
count = G__32850;
continue;
}
}
} else
{if(cljs.core._EQ_.call(null,cljs.core.first.call(null,remains),"("))
{{
var G__32851 = cljs.core.subs.call(null,remains,1);
var G__32852 = (parens + 1);
var G__32853 = (count + 1);
remains = G__32851;
parens = G__32852;
count = G__32853;
continue;
}
} else
{if("\uFDD0:else")
{{
var G__32854 = cljs.core.subs.call(null,remains,1);
var G__32855 = parens;
var G__32856 = (count + 1);
remains = G__32854;
parens = G__32855;
count = G__32856;
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
var G__32857 = output;
var G__32858 = cljs.core.subs.call(null,remains,1);
output = G__32857;
remains = G__32858;
continue;
}
} else
{if(cljs.core._EQ_.call(null,cljs.core.first.call(null,remains),"v"))
{{
var G__32859 = cljs.core.conj.call(null,output,"lor");
var G__32860 = cljs.core.subs.call(null,remains,1);
output = G__32859;
remains = G__32860;
continue;
}
} else
{if(cljs.core._EQ_.call(null,cljs.core.first.call(null,remains),"&"))
{{
var G__32861 = cljs.core.conj.call(null,output,"land");
var G__32862 = cljs.core.subs.call(null,remains,1);
output = G__32861;
remains = G__32862;
continue;
}
} else
{if(cljs.core._EQ_.call(null,cljs.core.first.call(null,remains),">"))
{{
var G__32863 = cljs.core.conj.call(null,output,"lcond");
var G__32864 = cljs.core.subs.call(null,remains,1);
output = G__32863;
remains = G__32864;
continue;
}
} else
{if(cljs.core._EQ_.call(null,cljs.core.first.call(null,remains),"<"))
{{
var G__32865 = cljs.core.conj.call(null,output,"lbicond");
var G__32866 = cljs.core.subs.call(null,remains,2);
output = G__32865;
remains = G__32866;
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
var G__32867 = cljs.core.conj.call(null,output,cljs.core.vector.call(null,"lnot",cljs.core.subs.call(null,remains,1,logifier.count_next_parens.call(null,cljs.core.subs.call(null,remains,0)))));
var G__32868 = cljs.core.subs.call(null,remains,logifier.count_next_parens.call(null,remains));
output = G__32867;
remains = G__32868;
continue;
}
} else
{{
var G__32869 = cljs.core.conj.call(null,output,cljs.core.vector.call(null,"lnot",cljs.core.first.call(null,cljs.core.subs.call(null,remains,1))));
var G__32870 = cljs.core.subs.call(null,remains,2);
output = G__32869;
remains = G__32870;
continue;
}
}
} else
{if(cljs.core._EQ_.call(null,cljs.core.first.call(null,remains),"("))
{{
var G__32871 = cljs.core.conj.call(null,output,cljs.core.subs.call(null,remains,0,logifier.count_next_parens.call(null,remains)));
var G__32872 = cljs.core.subs.call(null,remains,logifier.count_next_parens.call(null,remains));
output = G__32871;
remains = G__32872;
continue;
}
} else
{if(cljs.core.truth_(logifier.simple_QMARK_.call(null,cljs.core.first.call(null,remains))))
{{
var G__32873 = cljs.core.conj.call(null,output,cljs.core.first.call(null,remains));
var G__32874 = cljs.core.subs.call(null,remains,1);
output = G__32873;
remains = G__32874;
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
var G__32875 = cljs.core.conj.call(null,output,")");
var G__32876 = cljs.core.subs.call(null,remains,1);
var G__32877 = (count - 1);
output = G__32875;
remains = G__32876;
count = G__32877;
continue;
}
}
} else
{if(cljs.core._EQ_.call(null,cljs.core.first.call(null,remains),"("))
{if(cljs.core._EQ_.call(null,count,0))
{{
var G__32878 = cljs.core.PersistentVector.EMPTY;
var G__32879 = cljs.core.subs.call(null,remains,1);
var G__32880 = 1;
output = G__32878;
remains = G__32879;
count = G__32880;
continue;
}
} else
{{
var G__32881 = cljs.core.conj.call(null,output,cljs.core.first.call(null,remains));
var G__32882 = cljs.core.subs.call(null,remains,1);
var G__32883 = (count + 1);
output = G__32881;
remains = G__32882;
count = G__32883;
continue;
}
}
} else
{if("\uFDD0:else")
{{
var G__32884 = cljs.core.conj.call(null,output,cljs.core.first.call(null,remains));
var G__32885 = cljs.core.subs.call(null,remains,1);
var G__32886 = count;
output = G__32884;
remains = G__32885;
count = G__32886;
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
var G__32887 = cljs.core.subs.call(null,prop,count,(count + 1));
var G__32888 = (count + 1);
next_one = G__32887;
count = G__32888;
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
var G__32889 = output;
var G__32890 = cljs.core.subs.call(null,remains,1);
output = G__32889;
remains = G__32890;
continue;
}
} else
{if(cljs.core.truth_(logifier.atomic_prop_QMARK_.call(null,this_one)))
{if(cljs.core._EQ_.call(null,logifier.next_char.call(null,remains),")"))
{{
var G__32891 = cljs.core.conj.call(null,output,this_one);
var G__32892 = cljs.core.subs.call(null,remains,1);
output = G__32891;
remains = G__32892;
continue;
}
} else
{{
var G__32893 = cljs.core.conj.call(null,output,this_one," ");
var G__32894 = cljs.core.subs.call(null,remains,1);
output = G__32893;
remains = G__32894;
continue;
}
}
} else
{if(cljs.core.truth_(logifier.binary_operator_QMARK_.call(null,this_one)))
{if(cljs.core._EQ_.call(null,this_one,"<"))
{{
var G__32895 = cljs.core.conj.call(null,output,this_one,"> ");
var G__32896 = cljs.core.subs.call(null,remains,2);
output = G__32895;
remains = G__32896;
continue;
}
} else
{{
var G__32897 = cljs.core.conj.call(null,output,this_one," ");
var G__32898 = cljs.core.subs.call(null,remains,1);
output = G__32897;
remains = G__32898;
continue;
}
}
} else
{if(cljs.core.truth_(logifier.negate_operator_QMARK_.call(null,this_one)))
{{
var G__32899 = cljs.core.conj.call(null,output,this_one);
var G__32900 = cljs.core.subs.call(null,remains,1);
output = G__32899;
remains = G__32900;
continue;
}
} else
{if(cljs.core._EQ_.call(null,this_one,"("))
{{
var G__32901 = cljs.core.conj.call(null,output,this_one);
var G__32902 = cljs.core.subs.call(null,remains,1);
output = G__32901;
remains = G__32902;
continue;
}
} else
{if(cljs.core._EQ_.call(null,this_one,")"))
{if(cljs.core._EQ_.call(null,logifier.next_char.call(null,remains),")"))
{{
var G__32903 = cljs.core.conj.call(null,output,this_one);
var G__32904 = cljs.core.subs.call(null,remains,1);
output = G__32903;
remains = G__32904;
continue;
}
} else
{{
var G__32905 = cljs.core.conj.call(null,output,this_one," ");
var G__32906 = cljs.core.subs.call(null,remains,1);
output = G__32905;
remains = G__32906;
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
var G__32907 = cljs.core.subs.call(null,remains,1);
remains = G__32907;
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
var G__32908 = cljs.core.subs.call(null,remains,1);
remains = G__32908;
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
var G__32909 = cljs.core.subs.call(null,remains,1);
remains = G__32909;
continue;
}
} else
{if(cljs.core._EQ_.call(null,next_one,">"))
{{
var G__32910 = cljs.core.subs.call(null,remains,2);
remains = G__32910;
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
var G__32911 = cljs.core.subs.call(null,remains,1);
remains = G__32911;
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
var G__32912 = clojure.string.join.call(null,cljs.core.concat.call(null,"p",cljs.core.subs.call(null,remains,logifier.count_next_parens.call(null,remains))));
remains = G__32912;
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
var seq__32950_32962 = cljs.core.seq.call(null,logifier.list_names.call(null,this_model__$1));
var chunk__32951_32963 = null;
var count__32952_32964 = 0;
var i__32953_32965 = 0;
while(true){
if((i__32953_32965 < count__32952_32964))
{var props_32966 = cljs.core._nth.call(null,chunk__32951_32963,i__32953_32965);
affirm.call(null,props_32966,this_model__$1);
{
var G__32967 = seq__32950_32962;
var G__32968 = chunk__32951_32963;
var G__32969 = count__32952_32964;
var G__32970 = (i__32953_32965 + 1);
seq__32950_32962 = G__32967;
chunk__32951_32963 = G__32968;
count__32952_32964 = G__32969;
i__32953_32965 = G__32970;
continue;
}
} else
{var temp__4092__auto___32971 = cljs.core.seq.call(null,seq__32950_32962);
if(temp__4092__auto___32971)
{var seq__32950_32972__$1 = temp__4092__auto___32971;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32950_32972__$1))
{var c__3075__auto___32973 = cljs.core.chunk_first.call(null,seq__32950_32972__$1);
{
var G__32974 = cljs.core.chunk_rest.call(null,seq__32950_32972__$1);
var G__32975 = c__3075__auto___32973;
var G__32976 = cljs.core.count.call(null,c__3075__auto___32973);
var G__32977 = 0;
seq__32950_32962 = G__32974;
chunk__32951_32963 = G__32975;
count__32952_32964 = G__32976;
i__32953_32965 = G__32977;
continue;
}
} else
{var props_32978 = cljs.core.first.call(null,seq__32950_32972__$1);
affirm.call(null,props_32978,this_model__$1);
{
var G__32979 = cljs.core.next.call(null,seq__32950_32972__$1);
var G__32980 = null;
var G__32981 = 0;
var G__32982 = 0;
seq__32950_32962 = G__32979;
chunk__32951_32963 = G__32980;
count__32952_32964 = G__32981;
i__32953_32965 = G__32982;
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
var G__32983 = cljs.core.deref.call(null,this_model__$1);
initial_state = G__32983;
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
var seq__32958 = cljs.core.seq.call(null,logifier.list_names.call(null,this_model));
var chunk__32959 = null;
var count__32960 = 0;
var i__32961 = 0;
while(true){
if((i__32961 < count__32960))
{var props = cljs.core._nth.call(null,chunk__32959,i__32961);
((function (seq__32958,chunk__32959,count__32960,i__32961,props){
return (function (p1__32913_SHARP_){
if(cljs.core.not.call(null,logifier.simple_QMARK_.call(null,p1__32913_SHARP_)))
{if(cljs.core._EQ_.call(null,cljs.core.first.call(null,p1__32913_SHARP_),"lor"))
{var one = cljs.core.second.call(null,p1__32913_SHARP_);
var two = logifier.third.call(null,p1__32913_SHARP_);
if(cljs.core.truth_(logifier.converse_QMARK_.call(null,p1__32913_SHARP_,cljs.core.vector.call(null,"lor",earlier,later))))
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
});})(seq__32958,chunk__32959,count__32960,i__32961,props))
.call(null,props);
{
var G__32984 = seq__32958;
var G__32985 = chunk__32959;
var G__32986 = count__32960;
var G__32987 = (i__32961 + 1);
seq__32958 = G__32984;
chunk__32959 = G__32985;
count__32960 = G__32986;
i__32961 = G__32987;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__32958);
if(temp__4092__auto__)
{var seq__32958__$1 = temp__4092__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32958__$1))
{var c__3075__auto__ = cljs.core.chunk_first.call(null,seq__32958__$1);
{
var G__32988 = cljs.core.chunk_rest.call(null,seq__32958__$1);
var G__32989 = c__3075__auto__;
var G__32990 = cljs.core.count.call(null,c__3075__auto__);
var G__32991 = 0;
seq__32958 = G__32988;
chunk__32959 = G__32989;
count__32960 = G__32990;
i__32961 = G__32991;
continue;
}
} else
{var props = cljs.core.first.call(null,seq__32958__$1);
((function (seq__32958,chunk__32959,count__32960,i__32961,props,seq__32958__$1,temp__4092__auto__){
return (function (p1__32913_SHARP_){
if(cljs.core.not.call(null,logifier.simple_QMARK_.call(null,p1__32913_SHARP_)))
{if(cljs.core._EQ_.call(null,cljs.core.first.call(null,p1__32913_SHARP_),"lor"))
{var one = cljs.core.second.call(null,p1__32913_SHARP_);
var two = logifier.third.call(null,p1__32913_SHARP_);
if(cljs.core.truth_(logifier.converse_QMARK_.call(null,p1__32913_SHARP_,cljs.core.vector.call(null,"lor",earlier,later))))
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
});})(seq__32958,chunk__32959,count__32960,i__32961,props,seq__32958__$1,temp__4092__auto__))
.call(null,props);
{
var G__32992 = cljs.core.next.call(null,seq__32958__$1);
var G__32993 = null;
var G__32994 = 0;
var G__32995 = 0;
seq__32958 = G__32992;
chunk__32959 = G__32993;
count__32960 = G__32994;
i__32961 = G__32995;
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
var seq__33002_33006 = cljs.core.seq.call(null,logifier.list_names.call(null,this_model));
var chunk__33003_33007 = null;
var count__33004_33008 = 0;
var i__33005_33009 = 0;
while(true){
if((i__33005_33009 < count__33004_33008))
{var props_33010 = cljs.core._nth.call(null,chunk__33003_33007,i__33005_33009);
logifier.affirm.call(null,props_33010,this_model);
{
var G__33011 = seq__33002_33006;
var G__33012 = chunk__33003_33007;
var G__33013 = count__33004_33008;
var G__33014 = (i__33005_33009 + 1);
seq__33002_33006 = G__33011;
chunk__33003_33007 = G__33012;
count__33004_33008 = G__33013;
i__33005_33009 = G__33014;
continue;
}
} else
{var temp__4092__auto___33015 = cljs.core.seq.call(null,seq__33002_33006);
if(temp__4092__auto___33015)
{var seq__33002_33016__$1 = temp__4092__auto___33015;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33002_33016__$1))
{var c__3075__auto___33017 = cljs.core.chunk_first.call(null,seq__33002_33016__$1);
{
var G__33018 = cljs.core.chunk_rest.call(null,seq__33002_33016__$1);
var G__33019 = c__3075__auto___33017;
var G__33020 = cljs.core.count.call(null,c__3075__auto___33017);
var G__33021 = 0;
seq__33002_33006 = G__33018;
chunk__33003_33007 = G__33019;
count__33004_33008 = G__33020;
i__33005_33009 = G__33021;
continue;
}
} else
{var props_33022 = cljs.core.first.call(null,seq__33002_33016__$1);
logifier.affirm.call(null,props_33022,this_model);
{
var G__33023 = cljs.core.next.call(null,seq__33002_33016__$1);
var G__33024 = null;
var G__33025 = 0;
var G__33026 = 0;
seq__33002_33006 = G__33023;
chunk__33003_33007 = G__33024;
count__33004_33008 = G__33025;
i__33005_33009 = G__33026;
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
var G__33027 = cljs.core.deref.call(null,this_model);
initial_state = G__33027;
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
return (function (p1__32996_SHARP_){
return cljs.core._EQ_.call(null,logifier.evaluate.call(null,p1__32996_SHARP_,logifier.model),"true");
});})(states))
,states));
var false_states = cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core.str,"~"),cljs.core.filter.call(null,((function (states,true_states){
return (function (p1__32997_SHARP_){
return cljs.core._EQ_.call(null,logifier.evaluate.call(null,p1__32997_SHARP_,logifier.model),"false");
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
var or__3943__auto__ = cljs.core._EQ_.call(null,cljs.core.filter.call(null,(function (p1__33028_SHARP_){
return cljs.core._EQ_.call(null,p1__33028_SHARP_,prop__$1);
}),cljs.core.deref.call(null,logifier.assertions)),cljs.core.list.call(null,prop__$1));
if(or__3943__auto__)
{return or__3943__auto__;
} else
{return cljs.core._EQ_.call(null,cljs.core.filter.call(null,(function (p1__33029_SHARP_){
return cljs.core._EQ_.call(null,p1__33029_SHARP_,logifier.joincat.call(null,"(",prop__$1,")"));
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
var seq__33035 = cljs.core.seq.call(null,temp_assertions);
var chunk__33036 = null;
var count__33037 = 0;
var i__33038 = 0;
while(true){
if((i__33038 < count__33037))
{var props = cljs.core._nth.call(null,chunk__33036,i__33038);
logifier.assert_prop.call(null,props);
{
var G__33039 = seq__33035;
var G__33040 = chunk__33036;
var G__33041 = count__33037;
var G__33042 = (i__33038 + 1);
seq__33035 = G__33039;
chunk__33036 = G__33040;
count__33037 = G__33041;
i__33038 = G__33042;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__33035);
if(temp__4092__auto__)
{var seq__33035__$1 = temp__4092__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33035__$1))
{var c__3075__auto__ = cljs.core.chunk_first.call(null,seq__33035__$1);
{
var G__33043 = cljs.core.chunk_rest.call(null,seq__33035__$1);
var G__33044 = c__3075__auto__;
var G__33045 = cljs.core.count.call(null,c__3075__auto__);
var G__33046 = 0;
seq__33035 = G__33043;
chunk__33036 = G__33044;
count__33037 = G__33045;
i__33038 = G__33046;
continue;
}
} else
{var props = cljs.core.first.call(null,seq__33035__$1);
logifier.assert_prop.call(null,props);
{
var G__33047 = cljs.core.next.call(null,seq__33035__$1);
var G__33048 = null;
var G__33049 = 0;
var G__33050 = 0;
seq__33035 = G__33047;
chunk__33036 = G__33048;
count__33037 = G__33049;
i__33038 = G__33050;
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
cljs.core.reset_BANG_.call(null,logifier.assertions,cljs.core.filter.call(null,(function (p1__33030_SHARP_){
return !(cljs.core._EQ_.call(null,p1__33030_SHARP_,prop__$1));
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
