goog.provide('shadow.remote.runtime.shared');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(client_info){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),(0),new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.now = (function shadow$remote$runtime$shared$now(){
return Date.now();
});
shadow.remote.runtime.shared.relay_msg = (function shadow$remote$runtime$shared$relay_msg(runtime,msg){
return shadow.remote.runtime.api.relay_msg(runtime,msg);
});
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__32503,res){
var map__32505 = p__32503;
var map__32505__$1 = cljs.core.__destructure_map(map__32505);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32505__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32505__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__32506 = res;
var G__32506__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__32506,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__32506);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__32506__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__32506__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__32508 = arguments.length;
switch (G__32508) {
case 3:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3 = (function (runtime,msg,handlers){
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4(runtime,msg,handlers,(0));
}));

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__32514,msg,handlers,timeout_after_ms){
var map__32515 = p__32514;
var map__32515__$1 = cljs.core.__destructure_map(map__32515);
var runtime = map__32515__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32515__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__4870__auto__ = [];
var len__4864__auto___32685 = arguments.length;
var i__4865__auto___32686 = (0);
while(true){
if((i__4865__auto___32686 < len__4864__auto___32685)){
args__4870__auto__.push((arguments[i__4865__auto___32686]));

var G__32687 = (i__4865__auto___32686 + (1));
i__4865__auto___32686 = G__32687;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((2) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4871__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__32522,ev,args){
var map__32523 = p__32522;
var map__32523__$1 = cljs.core.__destructure_map(map__32523);
var runtime = map__32523__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32523__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__32526 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__32529 = null;
var count__32530 = (0);
var i__32531 = (0);
while(true){
if((i__32531 < count__32530)){
var ext = chunk__32529.cljs$core$IIndexed$_nth$arity$2(null,i__32531);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__32697 = seq__32526;
var G__32698 = chunk__32529;
var G__32699 = count__32530;
var G__32700 = (i__32531 + (1));
seq__32526 = G__32697;
chunk__32529 = G__32698;
count__32530 = G__32699;
i__32531 = G__32700;
continue;
} else {
var G__32701 = seq__32526;
var G__32702 = chunk__32529;
var G__32703 = count__32530;
var G__32704 = (i__32531 + (1));
seq__32526 = G__32701;
chunk__32529 = G__32702;
count__32530 = G__32703;
i__32531 = G__32704;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__32526);
if(temp__5753__auto__){
var seq__32526__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32526__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__32526__$1);
var G__32711 = cljs.core.chunk_rest(seq__32526__$1);
var G__32712 = c__4679__auto__;
var G__32713 = cljs.core.count(c__4679__auto__);
var G__32714 = (0);
seq__32526 = G__32711;
chunk__32529 = G__32712;
count__32530 = G__32713;
i__32531 = G__32714;
continue;
} else {
var ext = cljs.core.first(seq__32526__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__32725 = cljs.core.next(seq__32526__$1);
var G__32726 = null;
var G__32727 = (0);
var G__32728 = (0);
seq__32526 = G__32725;
chunk__32529 = G__32726;
count__32530 = G__32727;
i__32531 = G__32728;
continue;
} else {
var G__32732 = cljs.core.next(seq__32526__$1);
var G__32733 = null;
var G__32734 = (0);
var G__32735 = (0);
seq__32526 = G__32732;
chunk__32529 = G__32733;
count__32530 = G__32734;
i__32531 = G__32735;
continue;
}
}
} else {
return null;
}
}
break;
}
}));

(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq32519){
var G__32520 = cljs.core.first(seq32519);
var seq32519__$1 = cljs.core.next(seq32519);
var G__32521 = cljs.core.first(seq32519__$1);
var seq32519__$2 = cljs.core.next(seq32519__$1);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32520,G__32521,seq32519__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__32539,p__32540){
var map__32541 = p__32539;
var map__32541__$1 = cljs.core.__destructure_map(map__32541);
var runtime = map__32541__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32541__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__32542 = p__32540;
var map__32542__$1 = cljs.core.__destructure_map(map__32542);
var msg = map__32542__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32542__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id);

var map__32545 = cljs.core.deref(state_ref);
var map__32545__$1 = cljs.core.__destructure_map(map__32545);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32545__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32545__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__32547){
var map__32548 = p__32547;
var map__32548__$1 = cljs.core.__destructure_map(map__32548);
var runtime = map__32548__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32548__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__4253__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__32551,msg){
var map__32552 = p__32551;
var map__32552__$1 = cljs.core.__destructure_map(map__32552);
var runtime = map__32552__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32552__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__32554,key,p__32555){
var map__32556 = p__32554;
var map__32556__$1 = cljs.core.__destructure_map(map__32556);
var state = map__32556__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32556__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__32557 = p__32555;
var map__32557__$1 = cljs.core.__destructure_map(map__32557);
var spec = map__32557__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32557__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
if(cljs.core.contains_QMARK_(extensions,key)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("extension already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"spec","spec",347520401),spec], null));
} else {
}

return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("op already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"op","op",-1882987955),op_kw], null));
} else {
}

return cljs.core.assoc_in(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null),op_handler);
}),cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null),spec),ops);
});
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__32561,key,spec){
var map__32563 = p__32561;
var map__32563__$1 = cljs.core.__destructure_map(map__32563);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32563__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__32566_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__32566_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__32567_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__32567_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__32568_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__32568_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__32569_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__32569_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__32570_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__32570_SHARP_);
})], null)], null));
});
shadow.remote.runtime.shared.del_extension_STAR_ = (function shadow$remote$runtime$shared$del_extension_STAR_(state,key){
var ext = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null));
if(cljs.core.not(ext)){
return state;
} else {
return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063)], null),cljs.core.dissoc,op_kw);
}),cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.dissoc,key),new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(ext));
}
});
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__32594,key){
var map__32596 = p__32594;
var map__32596__$1 = cljs.core.__destructure_map(map__32596);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32596__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__32597,msg){
var map__32598 = p__32597;
var map__32598__$1 = cljs.core.__destructure_map(map__32598);
var runtime = map__32598__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32598__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__32601,p__32602){
var map__32603 = p__32601;
var map__32603__$1 = cljs.core.__destructure_map(map__32603);
var runtime = map__32603__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32603__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__32604 = p__32602;
var map__32604__$1 = cljs.core.__destructure_map(map__32604);
var msg = map__32604__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32604__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32604__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.truth_(call_id)){
var cfg = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null));
var call_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cfg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),op], null));
if(cljs.core.truth_(call_handler)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([call_id], 0));

return (call_handler.cljs$core$IFn$_invoke$arity$1 ? call_handler.cljs$core$IFn$_invoke$arity$1(msg) : call_handler.call(null,msg));
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
return shadow.remote.runtime.shared.unhandled_call_result(cfg,msg);

}
}
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-not-found","client-not-found",-1754042614),op)){
return shadow.remote.runtime.shared.unhandled_client_not_found(runtime,msg);
} else {
return shadow.remote.runtime.shared.reply_unknown_op(runtime,msg);

}
}
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__32633 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__32635 = null;
var count__32636 = (0);
var i__32637 = (0);
while(true){
if((i__32637 < count__32636)){
var map__32647 = chunk__32635.cljs$core$IIndexed$_nth$arity$2(null,i__32637);
var map__32647__$1 = cljs.core.__destructure_map(map__32647);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32647__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__32807 = seq__32633;
var G__32808 = chunk__32635;
var G__32809 = count__32636;
var G__32810 = (i__32637 + (1));
seq__32633 = G__32807;
chunk__32635 = G__32808;
count__32636 = G__32809;
i__32637 = G__32810;
continue;
} else {
var G__32811 = seq__32633;
var G__32812 = chunk__32635;
var G__32813 = count__32636;
var G__32814 = (i__32637 + (1));
seq__32633 = G__32811;
chunk__32635 = G__32812;
count__32636 = G__32813;
i__32637 = G__32814;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__32633);
if(temp__5753__auto__){
var seq__32633__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32633__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__32633__$1);
var G__32816 = cljs.core.chunk_rest(seq__32633__$1);
var G__32817 = c__4679__auto__;
var G__32818 = cljs.core.count(c__4679__auto__);
var G__32819 = (0);
seq__32633 = G__32816;
chunk__32635 = G__32817;
count__32636 = G__32818;
i__32637 = G__32819;
continue;
} else {
var map__32653 = cljs.core.first(seq__32633__$1);
var map__32653__$1 = cljs.core.__destructure_map(map__32653);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32653__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__32821 = cljs.core.next(seq__32633__$1);
var G__32822 = null;
var G__32823 = (0);
var G__32824 = (0);
seq__32633 = G__32821;
chunk__32635 = G__32822;
count__32636 = G__32823;
i__32637 = G__32824;
continue;
} else {
var G__32825 = cljs.core.next(seq__32633__$1);
var G__32826 = null;
var G__32827 = (0);
var G__32828 = (0);
seq__32633 = G__32825;
chunk__32635 = G__32826;
count__32636 = G__32827;
i__32637 = G__32828;
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

//# sourceMappingURL=shadow.remote.runtime.shared.js.map
