goog.provide('reagent.debug');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__12132__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__12132 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__12133__i = 0, G__12133__a = new Array(arguments.length -  0);
while (G__12133__i < G__12133__a.length) {G__12133__a[G__12133__i] = arguments[G__12133__i + 0]; ++G__12133__i;}
  args = new cljs.core.IndexedSeq(G__12133__a,0,null);
} 
return G__12132__delegate.call(this,args);};
G__12132.cljs$lang$maxFixedArity = 0;
G__12132.cljs$lang$applyTo = (function (arglist__12134){
var args = cljs.core.seq(arglist__12134);
return G__12132__delegate(args);
});
G__12132.cljs$core$IFn$_invoke$arity$variadic = G__12132__delegate;
return G__12132;
})()
);

(o.error = (function() { 
var G__12135__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__12135 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__12136__i = 0, G__12136__a = new Array(arguments.length -  0);
while (G__12136__i < G__12136__a.length) {G__12136__a[G__12136__i] = arguments[G__12136__i + 0]; ++G__12136__i;}
  args = new cljs.core.IndexedSeq(G__12136__a,0,null);
} 
return G__12135__delegate.call(this,args);};
G__12135.cljs$lang$maxFixedArity = 0;
G__12135.cljs$lang$applyTo = (function (arglist__12137){
var args = cljs.core.seq(arglist__12137);
return G__12135__delegate(args);
});
G__12135.cljs$core$IFn$_invoke$arity$variadic = G__12135__delegate;
return G__12135;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});

//# sourceMappingURL=reagent.debug.js.map
