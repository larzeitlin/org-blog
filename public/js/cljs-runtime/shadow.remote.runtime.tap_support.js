goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__35971,p__35972){
var map__35973 = p__35971;
var map__35973__$1 = cljs.core.__destructure_map(map__35973);
var svc = map__35973__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35973__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35973__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35973__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__35974 = p__35972;
var map__35974__$1 = cljs.core.__destructure_map(map__35974);
var msg = map__35974__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35974__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35974__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35974__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__35974__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__35985,p__35986){
var map__35988 = p__35985;
var map__35988__$1 = cljs.core.__destructure_map(map__35988);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35988__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__35989 = p__35986;
var map__35989__$1 = cljs.core.__destructure_map(map__35989);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35989__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__35993,p__35994){
var map__35995 = p__35993;
var map__35995__$1 = cljs.core.__destructure_map(map__35995);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35995__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35995__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__35996 = p__35994;
var map__35996__$1 = cljs.core.__destructure_map(map__35996);
var msg = map__35996__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__35996__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__36003,tid){
var map__36005 = p__36003;
var map__36005__$1 = cljs.core.__destructure_map(map__36005);
var svc = map__36005__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36005__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__36023 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__36025 = null;
var count__36026 = (0);
var i__36027 = (0);
while(true){
if((i__36027 < count__36026)){
var vec__36042 = chunk__36025.cljs$core$IIndexed$_nth$arity$2(null,i__36027);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36042,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36042,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__36066 = seq__36023;
var G__36067 = chunk__36025;
var G__36068 = count__36026;
var G__36069 = (i__36027 + (1));
seq__36023 = G__36066;
chunk__36025 = G__36067;
count__36026 = G__36068;
i__36027 = G__36069;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__36023);
if(temp__5753__auto__){
var seq__36023__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36023__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__36023__$1);
var G__36070 = cljs.core.chunk_rest(seq__36023__$1);
var G__36071 = c__4679__auto__;
var G__36072 = cljs.core.count(c__4679__auto__);
var G__36073 = (0);
seq__36023 = G__36070;
chunk__36025 = G__36071;
count__36026 = G__36072;
i__36027 = G__36073;
continue;
} else {
var vec__36049 = cljs.core.first(seq__36023__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36049,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36049,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__36074 = cljs.core.next(seq__36023__$1);
var G__36075 = null;
var G__36076 = (0);
var G__36077 = (0);
seq__36023 = G__36074;
chunk__36025 = G__36075;
count__36026 = G__36076;
i__36027 = G__36077;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
});
var svc = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229),obj_support,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461),tap_fn,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911),subs_ref], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__36013_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__36013_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__36016_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__36016_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__36017_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__36017_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__36018_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__36018_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__36058){
var map__36059 = p__36058;
var map__36059__$1 = cljs.core.__destructure_map(map__36059);
var svc = map__36059__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36059__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36059__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
