goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4870__auto__ = [];
var len__4864__auto___37589 = arguments.length;
var i__4865__auto___37590 = (0);
while(true){
if((i__4865__auto___37590 < len__4864__auto___37589)){
args__4870__auto__.push((arguments[i__4865__auto___37590]));

var G__37591 = (i__4865__auto___37590 + (1));
i__4865__auto___37590 = G__37591;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq37399){
var G__37400 = cljs.core.first(seq37399);
var seq37399__$1 = cljs.core.next(seq37399);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37400,seq37399__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__37416 = cljs.core.seq(sources);
var chunk__37417 = null;
var count__37418 = (0);
var i__37419 = (0);
while(true){
if((i__37419 < count__37418)){
var map__37432 = chunk__37417.cljs$core$IIndexed$_nth$arity$2(null,i__37419);
var map__37432__$1 = cljs.core.__destructure_map(map__37432);
var src = map__37432__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37432__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37432__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37432__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37432__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e37433){var e_37599 = e37433;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_37599);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_37599.message)].join('')));
}

var G__37600 = seq__37416;
var G__37601 = chunk__37417;
var G__37602 = count__37418;
var G__37603 = (i__37419 + (1));
seq__37416 = G__37600;
chunk__37417 = G__37601;
count__37418 = G__37602;
i__37419 = G__37603;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__37416);
if(temp__5753__auto__){
var seq__37416__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37416__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__37416__$1);
var G__37604 = cljs.core.chunk_rest(seq__37416__$1);
var G__37605 = c__4679__auto__;
var G__37606 = cljs.core.count(c__4679__auto__);
var G__37607 = (0);
seq__37416 = G__37604;
chunk__37417 = G__37605;
count__37418 = G__37606;
i__37419 = G__37607;
continue;
} else {
var map__37434 = cljs.core.first(seq__37416__$1);
var map__37434__$1 = cljs.core.__destructure_map(map__37434);
var src = map__37434__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37434__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37434__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37434__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37434__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e37435){var e_37608 = e37435;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_37608);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_37608.message)].join('')));
}

var G__37609 = cljs.core.next(seq__37416__$1);
var G__37610 = null;
var G__37611 = (0);
var G__37612 = (0);
seq__37416 = G__37609;
chunk__37417 = G__37610;
count__37418 = G__37611;
i__37419 = G__37612;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__37439 = cljs.core.seq(js_requires);
var chunk__37440 = null;
var count__37441 = (0);
var i__37442 = (0);
while(true){
if((i__37442 < count__37441)){
var js_ns = chunk__37440.cljs$core$IIndexed$_nth$arity$2(null,i__37442);
var require_str_37614 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_37614);


var G__37615 = seq__37439;
var G__37616 = chunk__37440;
var G__37617 = count__37441;
var G__37618 = (i__37442 + (1));
seq__37439 = G__37615;
chunk__37440 = G__37616;
count__37441 = G__37617;
i__37442 = G__37618;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__37439);
if(temp__5753__auto__){
var seq__37439__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37439__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__37439__$1);
var G__37620 = cljs.core.chunk_rest(seq__37439__$1);
var G__37621 = c__4679__auto__;
var G__37622 = cljs.core.count(c__4679__auto__);
var G__37623 = (0);
seq__37439 = G__37620;
chunk__37440 = G__37621;
count__37441 = G__37622;
i__37442 = G__37623;
continue;
} else {
var js_ns = cljs.core.first(seq__37439__$1);
var require_str_37624 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_37624);


var G__37625 = cljs.core.next(seq__37439__$1);
var G__37626 = null;
var G__37627 = (0);
var G__37628 = (0);
seq__37439 = G__37625;
chunk__37440 = G__37626;
count__37441 = G__37627;
i__37442 = G__37628;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__37444){
var map__37445 = p__37444;
var map__37445__$1 = cljs.core.__destructure_map(map__37445);
var msg = map__37445__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37445__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37445__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4652__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37446(s__37447){
return (new cljs.core.LazySeq(null,(function (){
var s__37447__$1 = s__37447;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__37447__$1);
if(temp__5753__auto__){
var xs__6308__auto__ = temp__5753__auto__;
var map__37452 = cljs.core.first(xs__6308__auto__);
var map__37452__$1 = cljs.core.__destructure_map(map__37452);
var src = map__37452__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37452__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37452__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4648__auto__ = ((function (s__37447__$1,map__37452,map__37452__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__37445,map__37445__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37446_$_iter__37448(s__37449){
return (new cljs.core.LazySeq(null,((function (s__37447__$1,map__37452,map__37452__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__37445,map__37445__$1,msg,info,reload_info){
return (function (){
var s__37449__$1 = s__37449;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__37449__$1);
if(temp__5753__auto____$1){
var s__37449__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__37449__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__37449__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__37451 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__37450 = (0);
while(true){
if((i__37450 < size__4651__auto__)){
var warning = cljs.core._nth(c__4650__auto__,i__37450);
cljs.core.chunk_append(b__37451,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__37629 = (i__37450 + (1));
i__37450 = G__37629;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__37451),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37446_$_iter__37448(cljs.core.chunk_rest(s__37449__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__37451),null);
}
} else {
var warning = cljs.core.first(s__37449__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37446_$_iter__37448(cljs.core.rest(s__37449__$2)));
}
} else {
return null;
}
break;
}
});})(s__37447__$1,map__37452,map__37452__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__37445,map__37445__$1,msg,info,reload_info))
,null,null));
});})(s__37447__$1,map__37452,map__37452__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__37445,map__37445__$1,msg,info,reload_info))
;
var fs__4649__auto__ = cljs.core.seq(iterys__4648__auto__(warnings));
if(fs__4649__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4649__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37446(cljs.core.rest(s__37447__$1)));
} else {
var G__37630 = cljs.core.rest(s__37447__$1);
s__37447__$1 = G__37630;
continue;
}
} else {
var G__37631 = cljs.core.rest(s__37447__$1);
s__37447__$1 = G__37631;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__37453_37632 = cljs.core.seq(warnings);
var chunk__37454_37633 = null;
var count__37455_37634 = (0);
var i__37456_37635 = (0);
while(true){
if((i__37456_37635 < count__37455_37634)){
var map__37461_37638 = chunk__37454_37633.cljs$core$IIndexed$_nth$arity$2(null,i__37456_37635);
var map__37461_37639__$1 = cljs.core.__destructure_map(map__37461_37638);
var w_37640 = map__37461_37639__$1;
var msg_37641__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37461_37639__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_37642 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37461_37639__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_37643 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37461_37639__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_37644 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37461_37639__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_37644)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_37642),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_37643),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_37641__$1)].join(''));


var G__37645 = seq__37453_37632;
var G__37646 = chunk__37454_37633;
var G__37647 = count__37455_37634;
var G__37648 = (i__37456_37635 + (1));
seq__37453_37632 = G__37645;
chunk__37454_37633 = G__37646;
count__37455_37634 = G__37647;
i__37456_37635 = G__37648;
continue;
} else {
var temp__5753__auto___37649 = cljs.core.seq(seq__37453_37632);
if(temp__5753__auto___37649){
var seq__37453_37650__$1 = temp__5753__auto___37649;
if(cljs.core.chunked_seq_QMARK_(seq__37453_37650__$1)){
var c__4679__auto___37651 = cljs.core.chunk_first(seq__37453_37650__$1);
var G__37652 = cljs.core.chunk_rest(seq__37453_37650__$1);
var G__37653 = c__4679__auto___37651;
var G__37654 = cljs.core.count(c__4679__auto___37651);
var G__37655 = (0);
seq__37453_37632 = G__37652;
chunk__37454_37633 = G__37653;
count__37455_37634 = G__37654;
i__37456_37635 = G__37655;
continue;
} else {
var map__37466_37656 = cljs.core.first(seq__37453_37650__$1);
var map__37466_37657__$1 = cljs.core.__destructure_map(map__37466_37656);
var w_37658 = map__37466_37657__$1;
var msg_37659__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37466_37657__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_37660 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37466_37657__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_37661 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37466_37657__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_37662 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37466_37657__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_37662)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_37660),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_37661),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_37659__$1)].join(''));


var G__37663 = cljs.core.next(seq__37453_37650__$1);
var G__37664 = null;
var G__37665 = (0);
var G__37666 = (0);
seq__37453_37632 = G__37663;
chunk__37454_37633 = G__37664;
count__37455_37634 = G__37665;
i__37456_37635 = G__37666;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__37443_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__37443_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__4251__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__4251__auto__){
var and__4251__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__4251__auto____$1){
return new$;
} else {
return and__4251__auto____$1;
}
} else {
return and__4251__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__37471){
var map__37472 = p__37471;
var map__37472__$1 = cljs.core.__destructure_map(map__37472);
var msg = map__37472__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37472__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__37473 = cljs.core.seq(updates);
var chunk__37475 = null;
var count__37476 = (0);
var i__37477 = (0);
while(true){
if((i__37477 < count__37476)){
var path = chunk__37475.cljs$core$IIndexed$_nth$arity$2(null,i__37477);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__37521_37669 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__37525_37670 = null;
var count__37526_37671 = (0);
var i__37527_37672 = (0);
while(true){
if((i__37527_37672 < count__37526_37671)){
var node_37673 = chunk__37525_37670.cljs$core$IIndexed$_nth$arity$2(null,i__37527_37672);
if(cljs.core.not(node_37673.shadow$old)){
var path_match_37674 = shadow.cljs.devtools.client.browser.match_paths(node_37673.getAttribute("href"),path);
if(cljs.core.truth_(path_match_37674)){
var new_link_37675 = (function (){var G__37533 = node_37673.cloneNode(true);
G__37533.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_37674),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__37533;
})();
(node_37673.shadow$old = true);

(new_link_37675.onload = ((function (seq__37521_37669,chunk__37525_37670,count__37526_37671,i__37527_37672,seq__37473,chunk__37475,count__37476,i__37477,new_link_37675,path_match_37674,node_37673,path,map__37472,map__37472__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_37673);
});})(seq__37521_37669,chunk__37525_37670,count__37526_37671,i__37527_37672,seq__37473,chunk__37475,count__37476,i__37477,new_link_37675,path_match_37674,node_37673,path,map__37472,map__37472__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_37674], 0));

goog.dom.insertSiblingAfter(new_link_37675,node_37673);


var G__37677 = seq__37521_37669;
var G__37678 = chunk__37525_37670;
var G__37679 = count__37526_37671;
var G__37680 = (i__37527_37672 + (1));
seq__37521_37669 = G__37677;
chunk__37525_37670 = G__37678;
count__37526_37671 = G__37679;
i__37527_37672 = G__37680;
continue;
} else {
var G__37681 = seq__37521_37669;
var G__37682 = chunk__37525_37670;
var G__37683 = count__37526_37671;
var G__37684 = (i__37527_37672 + (1));
seq__37521_37669 = G__37681;
chunk__37525_37670 = G__37682;
count__37526_37671 = G__37683;
i__37527_37672 = G__37684;
continue;
}
} else {
var G__37685 = seq__37521_37669;
var G__37686 = chunk__37525_37670;
var G__37687 = count__37526_37671;
var G__37688 = (i__37527_37672 + (1));
seq__37521_37669 = G__37685;
chunk__37525_37670 = G__37686;
count__37526_37671 = G__37687;
i__37527_37672 = G__37688;
continue;
}
} else {
var temp__5753__auto___37689 = cljs.core.seq(seq__37521_37669);
if(temp__5753__auto___37689){
var seq__37521_37690__$1 = temp__5753__auto___37689;
if(cljs.core.chunked_seq_QMARK_(seq__37521_37690__$1)){
var c__4679__auto___37691 = cljs.core.chunk_first(seq__37521_37690__$1);
var G__37692 = cljs.core.chunk_rest(seq__37521_37690__$1);
var G__37693 = c__4679__auto___37691;
var G__37694 = cljs.core.count(c__4679__auto___37691);
var G__37695 = (0);
seq__37521_37669 = G__37692;
chunk__37525_37670 = G__37693;
count__37526_37671 = G__37694;
i__37527_37672 = G__37695;
continue;
} else {
var node_37696 = cljs.core.first(seq__37521_37690__$1);
if(cljs.core.not(node_37696.shadow$old)){
var path_match_37697 = shadow.cljs.devtools.client.browser.match_paths(node_37696.getAttribute("href"),path);
if(cljs.core.truth_(path_match_37697)){
var new_link_37699 = (function (){var G__37534 = node_37696.cloneNode(true);
G__37534.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_37697),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__37534;
})();
(node_37696.shadow$old = true);

(new_link_37699.onload = ((function (seq__37521_37669,chunk__37525_37670,count__37526_37671,i__37527_37672,seq__37473,chunk__37475,count__37476,i__37477,new_link_37699,path_match_37697,node_37696,seq__37521_37690__$1,temp__5753__auto___37689,path,map__37472,map__37472__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_37696);
});})(seq__37521_37669,chunk__37525_37670,count__37526_37671,i__37527_37672,seq__37473,chunk__37475,count__37476,i__37477,new_link_37699,path_match_37697,node_37696,seq__37521_37690__$1,temp__5753__auto___37689,path,map__37472,map__37472__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_37697], 0));

goog.dom.insertSiblingAfter(new_link_37699,node_37696);


var G__37700 = cljs.core.next(seq__37521_37690__$1);
var G__37701 = null;
var G__37702 = (0);
var G__37703 = (0);
seq__37521_37669 = G__37700;
chunk__37525_37670 = G__37701;
count__37526_37671 = G__37702;
i__37527_37672 = G__37703;
continue;
} else {
var G__37704 = cljs.core.next(seq__37521_37690__$1);
var G__37705 = null;
var G__37706 = (0);
var G__37707 = (0);
seq__37521_37669 = G__37704;
chunk__37525_37670 = G__37705;
count__37526_37671 = G__37706;
i__37527_37672 = G__37707;
continue;
}
} else {
var G__37708 = cljs.core.next(seq__37521_37690__$1);
var G__37709 = null;
var G__37710 = (0);
var G__37711 = (0);
seq__37521_37669 = G__37708;
chunk__37525_37670 = G__37709;
count__37526_37671 = G__37710;
i__37527_37672 = G__37711;
continue;
}
}
} else {
}
}
break;
}


var G__37712 = seq__37473;
var G__37713 = chunk__37475;
var G__37714 = count__37476;
var G__37715 = (i__37477 + (1));
seq__37473 = G__37712;
chunk__37475 = G__37713;
count__37476 = G__37714;
i__37477 = G__37715;
continue;
} else {
var G__37716 = seq__37473;
var G__37717 = chunk__37475;
var G__37718 = count__37476;
var G__37719 = (i__37477 + (1));
seq__37473 = G__37716;
chunk__37475 = G__37717;
count__37476 = G__37718;
i__37477 = G__37719;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__37473);
if(temp__5753__auto__){
var seq__37473__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37473__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__37473__$1);
var G__37720 = cljs.core.chunk_rest(seq__37473__$1);
var G__37721 = c__4679__auto__;
var G__37722 = cljs.core.count(c__4679__auto__);
var G__37723 = (0);
seq__37473 = G__37720;
chunk__37475 = G__37721;
count__37476 = G__37722;
i__37477 = G__37723;
continue;
} else {
var path = cljs.core.first(seq__37473__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__37539_37724 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__37543_37725 = null;
var count__37544_37726 = (0);
var i__37545_37727 = (0);
while(true){
if((i__37545_37727 < count__37544_37726)){
var node_37728 = chunk__37543_37725.cljs$core$IIndexed$_nth$arity$2(null,i__37545_37727);
if(cljs.core.not(node_37728.shadow$old)){
var path_match_37729 = shadow.cljs.devtools.client.browser.match_paths(node_37728.getAttribute("href"),path);
if(cljs.core.truth_(path_match_37729)){
var new_link_37731 = (function (){var G__37553 = node_37728.cloneNode(true);
G__37553.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_37729),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__37553;
})();
(node_37728.shadow$old = true);

(new_link_37731.onload = ((function (seq__37539_37724,chunk__37543_37725,count__37544_37726,i__37545_37727,seq__37473,chunk__37475,count__37476,i__37477,new_link_37731,path_match_37729,node_37728,path,seq__37473__$1,temp__5753__auto__,map__37472,map__37472__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_37728);
});})(seq__37539_37724,chunk__37543_37725,count__37544_37726,i__37545_37727,seq__37473,chunk__37475,count__37476,i__37477,new_link_37731,path_match_37729,node_37728,path,seq__37473__$1,temp__5753__auto__,map__37472,map__37472__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_37729], 0));

goog.dom.insertSiblingAfter(new_link_37731,node_37728);


var G__37742 = seq__37539_37724;
var G__37743 = chunk__37543_37725;
var G__37744 = count__37544_37726;
var G__37745 = (i__37545_37727 + (1));
seq__37539_37724 = G__37742;
chunk__37543_37725 = G__37743;
count__37544_37726 = G__37744;
i__37545_37727 = G__37745;
continue;
} else {
var G__37748 = seq__37539_37724;
var G__37749 = chunk__37543_37725;
var G__37750 = count__37544_37726;
var G__37751 = (i__37545_37727 + (1));
seq__37539_37724 = G__37748;
chunk__37543_37725 = G__37749;
count__37544_37726 = G__37750;
i__37545_37727 = G__37751;
continue;
}
} else {
var G__37756 = seq__37539_37724;
var G__37757 = chunk__37543_37725;
var G__37758 = count__37544_37726;
var G__37759 = (i__37545_37727 + (1));
seq__37539_37724 = G__37756;
chunk__37543_37725 = G__37757;
count__37544_37726 = G__37758;
i__37545_37727 = G__37759;
continue;
}
} else {
var temp__5753__auto___37761__$1 = cljs.core.seq(seq__37539_37724);
if(temp__5753__auto___37761__$1){
var seq__37539_37762__$1 = temp__5753__auto___37761__$1;
if(cljs.core.chunked_seq_QMARK_(seq__37539_37762__$1)){
var c__4679__auto___37767 = cljs.core.chunk_first(seq__37539_37762__$1);
var G__37768 = cljs.core.chunk_rest(seq__37539_37762__$1);
var G__37769 = c__4679__auto___37767;
var G__37770 = cljs.core.count(c__4679__auto___37767);
var G__37771 = (0);
seq__37539_37724 = G__37768;
chunk__37543_37725 = G__37769;
count__37544_37726 = G__37770;
i__37545_37727 = G__37771;
continue;
} else {
var node_37772 = cljs.core.first(seq__37539_37762__$1);
if(cljs.core.not(node_37772.shadow$old)){
var path_match_37773 = shadow.cljs.devtools.client.browser.match_paths(node_37772.getAttribute("href"),path);
if(cljs.core.truth_(path_match_37773)){
var new_link_37778 = (function (){var G__37554 = node_37772.cloneNode(true);
G__37554.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_37773),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__37554;
})();
(node_37772.shadow$old = true);

(new_link_37778.onload = ((function (seq__37539_37724,chunk__37543_37725,count__37544_37726,i__37545_37727,seq__37473,chunk__37475,count__37476,i__37477,new_link_37778,path_match_37773,node_37772,seq__37539_37762__$1,temp__5753__auto___37761__$1,path,seq__37473__$1,temp__5753__auto__,map__37472,map__37472__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_37772);
});})(seq__37539_37724,chunk__37543_37725,count__37544_37726,i__37545_37727,seq__37473,chunk__37475,count__37476,i__37477,new_link_37778,path_match_37773,node_37772,seq__37539_37762__$1,temp__5753__auto___37761__$1,path,seq__37473__$1,temp__5753__auto__,map__37472,map__37472__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_37773], 0));

goog.dom.insertSiblingAfter(new_link_37778,node_37772);


var G__37787 = cljs.core.next(seq__37539_37762__$1);
var G__37788 = null;
var G__37789 = (0);
var G__37790 = (0);
seq__37539_37724 = G__37787;
chunk__37543_37725 = G__37788;
count__37544_37726 = G__37789;
i__37545_37727 = G__37790;
continue;
} else {
var G__37791 = cljs.core.next(seq__37539_37762__$1);
var G__37792 = null;
var G__37793 = (0);
var G__37794 = (0);
seq__37539_37724 = G__37791;
chunk__37543_37725 = G__37792;
count__37544_37726 = G__37793;
i__37545_37727 = G__37794;
continue;
}
} else {
var G__37795 = cljs.core.next(seq__37539_37762__$1);
var G__37796 = null;
var G__37797 = (0);
var G__37798 = (0);
seq__37539_37724 = G__37795;
chunk__37543_37725 = G__37796;
count__37544_37726 = G__37797;
i__37545_37727 = G__37798;
continue;
}
}
} else {
}
}
break;
}


var G__37799 = cljs.core.next(seq__37473__$1);
var G__37800 = null;
var G__37801 = (0);
var G__37802 = (0);
seq__37473 = G__37799;
chunk__37475 = G__37800;
count__37476 = G__37801;
i__37477 = G__37802;
continue;
} else {
var G__37803 = cljs.core.next(seq__37473__$1);
var G__37804 = null;
var G__37805 = (0);
var G__37806 = (0);
seq__37473 = G__37803;
chunk__37475 = G__37804;
count__37476 = G__37805;
i__37477 = G__37806;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__37555){
var map__37556 = p__37555;
var map__37556__$1 = cljs.core.__destructure_map(map__37556);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37556__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
return shadow.cljs.devtools.client.shared.load_sources(runtime,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return shadow.cljs.devtools.client.browser.devtools_msg("ready!");
}));
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__37557){
var map__37558 = p__37557;
var map__37558__$1 = cljs.core.__destructure_map(map__37558);
var _ = map__37558__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37558__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__37559,done,error){
var map__37560 = p__37559;
var map__37560__$1 = cljs.core.__destructure_map(map__37560);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37560__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__37561,done,error){
var map__37562 = p__37561;
var map__37562__$1 = cljs.core.__destructure_map(map__37562);
var msg = map__37562__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37562__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37562__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37562__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__37564){
var map__37565 = p__37564;
var map__37565__$1 = cljs.core.__destructure_map(map__37565);
var src = map__37565__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37565__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4251__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4251__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4251__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__37566 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__37566) : done.call(null,G__37566));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__37567){
var map__37568 = p__37567;
var map__37568__$1 = cljs.core.__destructure_map(map__37568);
var msg__$1 = map__37568__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37568__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e37569){var ex = e37569;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__37572){
var map__37573 = p__37572;
var map__37573__$1 = cljs.core.__destructure_map(map__37573);
var env = map__37573__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37573__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-runtime-init","cljs-runtime-init",1305890232),(function (msg){
return shadow.cljs.devtools.client.browser.repl_init(runtime,msg);
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (p__37575){
var map__37576 = p__37575;
var map__37576__$1 = cljs.core.__destructure_map(map__37576);
var msg = map__37576__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37576__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__37578){
var map__37580 = p__37578;
var map__37580__$1 = cljs.core.__destructure_map(map__37580);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37580__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37580__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__37585){
var map__37586 = p__37585;
var map__37586__$1 = cljs.core.__destructure_map(map__37586);
var svc = map__37586__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37586__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
