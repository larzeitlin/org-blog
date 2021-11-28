goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__35228){
var map__35229 = p__35228;
var map__35229__$1 = cljs.core.__destructure_map(map__35229);
var m = map__35229__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35229__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35229__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4253__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return [(function (){var temp__5753__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5753__auto__)){
var ns = temp__5753__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__35240_35545 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__35241_35546 = null;
var count__35242_35547 = (0);
var i__35243_35548 = (0);
while(true){
if((i__35243_35548 < count__35242_35547)){
var f_35549 = chunk__35241_35546.cljs$core$IIndexed$_nth$arity$2(null,i__35243_35548);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_35549], 0));


var G__35550 = seq__35240_35545;
var G__35551 = chunk__35241_35546;
var G__35552 = count__35242_35547;
var G__35553 = (i__35243_35548 + (1));
seq__35240_35545 = G__35550;
chunk__35241_35546 = G__35551;
count__35242_35547 = G__35552;
i__35243_35548 = G__35553;
continue;
} else {
var temp__5753__auto___35554 = cljs.core.seq(seq__35240_35545);
if(temp__5753__auto___35554){
var seq__35240_35555__$1 = temp__5753__auto___35554;
if(cljs.core.chunked_seq_QMARK_(seq__35240_35555__$1)){
var c__4679__auto___35556 = cljs.core.chunk_first(seq__35240_35555__$1);
var G__35557 = cljs.core.chunk_rest(seq__35240_35555__$1);
var G__35558 = c__4679__auto___35556;
var G__35559 = cljs.core.count(c__4679__auto___35556);
var G__35560 = (0);
seq__35240_35545 = G__35557;
chunk__35241_35546 = G__35558;
count__35242_35547 = G__35559;
i__35243_35548 = G__35560;
continue;
} else {
var f_35561 = cljs.core.first(seq__35240_35555__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_35561], 0));


var G__35562 = cljs.core.next(seq__35240_35555__$1);
var G__35563 = null;
var G__35564 = (0);
var G__35565 = (0);
seq__35240_35545 = G__35562;
chunk__35241_35546 = G__35563;
count__35242_35547 = G__35564;
i__35243_35548 = G__35565;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_35566 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4253__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_35566], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_35566)))?cljs.core.second(arglists_35566):arglists_35566)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__35257_35572 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__35258_35573 = null;
var count__35259_35574 = (0);
var i__35260_35575 = (0);
while(true){
if((i__35260_35575 < count__35259_35574)){
var vec__35281_35576 = chunk__35258_35573.cljs$core$IIndexed$_nth$arity$2(null,i__35260_35575);
var name_35577 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35281_35576,(0),null);
var map__35284_35578 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35281_35576,(1),null);
var map__35284_35579__$1 = cljs.core.__destructure_map(map__35284_35578);
var doc_35580 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35284_35579__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_35581 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35284_35579__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_35577], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_35581], 0));

if(cljs.core.truth_(doc_35580)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_35580], 0));
} else {
}


var G__35588 = seq__35257_35572;
var G__35589 = chunk__35258_35573;
var G__35590 = count__35259_35574;
var G__35591 = (i__35260_35575 + (1));
seq__35257_35572 = G__35588;
chunk__35258_35573 = G__35589;
count__35259_35574 = G__35590;
i__35260_35575 = G__35591;
continue;
} else {
var temp__5753__auto___35592 = cljs.core.seq(seq__35257_35572);
if(temp__5753__auto___35592){
var seq__35257_35593__$1 = temp__5753__auto___35592;
if(cljs.core.chunked_seq_QMARK_(seq__35257_35593__$1)){
var c__4679__auto___35595 = cljs.core.chunk_first(seq__35257_35593__$1);
var G__35596 = cljs.core.chunk_rest(seq__35257_35593__$1);
var G__35597 = c__4679__auto___35595;
var G__35598 = cljs.core.count(c__4679__auto___35595);
var G__35599 = (0);
seq__35257_35572 = G__35596;
chunk__35258_35573 = G__35597;
count__35259_35574 = G__35598;
i__35260_35575 = G__35599;
continue;
} else {
var vec__35293_35604 = cljs.core.first(seq__35257_35593__$1);
var name_35605 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35293_35604,(0),null);
var map__35296_35606 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35293_35604,(1),null);
var map__35296_35607__$1 = cljs.core.__destructure_map(map__35296_35606);
var doc_35608 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35296_35607__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_35609 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35296_35607__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_35605], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_35609], 0));

if(cljs.core.truth_(doc_35608)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_35608], 0));
} else {
}


var G__35610 = cljs.core.next(seq__35257_35593__$1);
var G__35611 = null;
var G__35612 = (0);
var G__35613 = (0);
seq__35257_35572 = G__35610;
chunk__35258_35573 = G__35611;
count__35259_35574 = G__35612;
i__35260_35575 = G__35613;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5753__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5753__auto__)){
var fnspec = temp__5753__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__35302 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__35303 = null;
var count__35304 = (0);
var i__35305 = (0);
while(true){
if((i__35305 < count__35304)){
var role = chunk__35303.cljs$core$IIndexed$_nth$arity$2(null,i__35305);
var temp__5753__auto___35615__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5753__auto___35615__$1)){
var spec_35617 = temp__5753__auto___35615__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_35617)], 0));
} else {
}


var G__35618 = seq__35302;
var G__35619 = chunk__35303;
var G__35620 = count__35304;
var G__35621 = (i__35305 + (1));
seq__35302 = G__35618;
chunk__35303 = G__35619;
count__35304 = G__35620;
i__35305 = G__35621;
continue;
} else {
var temp__5753__auto____$1 = cljs.core.seq(seq__35302);
if(temp__5753__auto____$1){
var seq__35302__$1 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__35302__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__35302__$1);
var G__35623 = cljs.core.chunk_rest(seq__35302__$1);
var G__35624 = c__4679__auto__;
var G__35625 = cljs.core.count(c__4679__auto__);
var G__35626 = (0);
seq__35302 = G__35623;
chunk__35303 = G__35624;
count__35304 = G__35625;
i__35305 = G__35626;
continue;
} else {
var role = cljs.core.first(seq__35302__$1);
var temp__5753__auto___35627__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5753__auto___35627__$2)){
var spec_35628 = temp__5753__auto___35627__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_35628)], 0));
} else {
}


var G__35629 = cljs.core.next(seq__35302__$1);
var G__35630 = null;
var G__35631 = (0);
var G__35632 = (0);
seq__35302 = G__35629;
chunk__35303 = G__35630;
count__35304 = G__35631;
i__35305 = G__35632;
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
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol("cljs.core","ExceptionInfo","cljs.core/ExceptionInfo",701839050,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5753__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5753__auto__)){
var msg = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5753__auto__)){
var ed = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__35641 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__35642 = cljs.core.ex_cause(t);
via = G__35641;
t = G__35642;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5753__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5753__auto__)){
var root_msg = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5753__auto__)){
var data = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5753__auto__)){
var phase = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__35349 = datafied_throwable;
var map__35349__$1 = cljs.core.__destructure_map(map__35349);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35349__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35349__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__35349__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__35350 = cljs.core.last(via);
var map__35350__$1 = cljs.core.__destructure_map(map__35350);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35350__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35350__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35350__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__35351 = data;
var map__35351__$1 = cljs.core.__destructure_map(map__35351);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35351__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35351__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35351__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__35352 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__35352__$1 = cljs.core.__destructure_map(map__35352);
var top_data = map__35352__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35352__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__35354 = phase;
var G__35354__$1 = (((G__35354 instanceof cljs.core.Keyword))?G__35354.fqn:null);
switch (G__35354__$1) {
case "read-source":
var map__35355 = data;
var map__35355__$1 = cljs.core.__destructure_map(map__35355);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35355__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35355__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__35356 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__35356__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35356,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__35356);
var G__35356__$2 = (cljs.core.truth_((function (){var fexpr__35357 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__35357.cljs$core$IFn$_invoke$arity$1 ? fexpr__35357.cljs$core$IFn$_invoke$arity$1(source) : fexpr__35357.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__35356__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__35356__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35356__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__35356__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__35359 = top_data;
var G__35359__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35359,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__35359);
var G__35359__$2 = (cljs.core.truth_((function (){var fexpr__35360 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__35360.cljs$core$IFn$_invoke$arity$1 ? fexpr__35360.cljs$core$IFn$_invoke$arity$1(source) : fexpr__35360.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__35359__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__35359__$1);
var G__35359__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35359__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__35359__$2);
var G__35359__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35359__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__35359__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35359__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__35359__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__35361 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35361,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35361,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35361,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35361,(3),null);
var G__35364 = top_data;
var G__35364__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35364,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__35364);
var G__35364__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35364__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__35364__$1);
var G__35364__$3 = (cljs.core.truth_((function (){var and__4251__auto__ = source__$1;
if(cljs.core.truth_(and__4251__auto__)){
return method;
} else {
return and__4251__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35364__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__35364__$2);
var G__35364__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35364__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__35364__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35364__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__35364__$4;
}

break;
case "execution":
var vec__35365 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35365,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35365,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35365,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35365,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__35348_SHARP_){
var or__4253__auto__ = (p1__35348_SHARP_ == null);
if(or__4253__auto__){
return or__4253__auto__;
} else {
var fexpr__35368 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__35368.cljs$core$IFn$_invoke$arity$1 ? fexpr__35368.cljs$core$IFn$_invoke$arity$1(p1__35348_SHARP_) : fexpr__35368.call(null,p1__35348_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4253__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return line;
}
})();
var G__35373 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__35373__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35373,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__35373);
var G__35373__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35373__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__35373__$1);
var G__35373__$3 = (cljs.core.truth_((function (){var or__4253__auto__ = fn;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
var and__4251__auto__ = source__$1;
if(cljs.core.truth_(and__4251__auto__)){
return method;
} else {
return and__4251__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35373__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4253__auto__ = fn;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__35373__$2);
var G__35373__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35373__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__35373__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35373__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__35373__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__35354__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__35418){
var map__35421 = p__35418;
var map__35421__$1 = cljs.core.__destructure_map(map__35421);
var triage_data = map__35421__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35421__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35421__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35421__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35421__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35421__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35421__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35421__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35421__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4253__auto__ = source;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4253__auto__ = line;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__4253__auto__ = class$;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__35458 = phase;
var G__35458__$1 = (((G__35458 instanceof cljs.core.Keyword))?G__35458.fqn:null);
switch (G__35458__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__35463 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__35464 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__35465 = loc;
var G__35466 = (cljs.core.truth_(spec)?(function (){var sb__4795__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__35471_35667 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__35472_35668 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__35473_35669 = true;
var _STAR_print_fn_STAR__temp_val__35474_35670 = (function (x__4796__auto__){
return sb__4795__auto__.append(x__4796__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__35473_35669);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__35474_35670);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__35407_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__35407_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__35472_35668);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__35471_35667);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4795__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__35463,G__35464,G__35465,G__35466) : format.call(null,G__35463,G__35464,G__35465,G__35466));

break;
case "macroexpansion":
var G__35489 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__35490 = cause_type;
var G__35491 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__35492 = loc;
var G__35493 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__35489,G__35490,G__35491,G__35492,G__35493) : format.call(null,G__35489,G__35490,G__35491,G__35492,G__35493));

break;
case "compile-syntax-check":
var G__35499 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__35500 = cause_type;
var G__35501 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__35502 = loc;
var G__35503 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__35499,G__35500,G__35501,G__35502,G__35503) : format.call(null,G__35499,G__35500,G__35501,G__35502,G__35503));

break;
case "compilation":
var G__35508 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__35509 = cause_type;
var G__35510 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__35511 = loc;
var G__35512 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__35508,G__35509,G__35510,G__35511,G__35512) : format.call(null,G__35508,G__35509,G__35510,G__35511,G__35512));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__35519 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__35520 = symbol;
var G__35521 = loc;
var G__35522 = (function (){var sb__4795__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__35524_35681 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__35525_35682 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__35526_35683 = true;
var _STAR_print_fn_STAR__temp_val__35527_35684 = (function (x__4796__auto__){
return sb__4795__auto__.append(x__4796__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__35526_35683);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__35527_35684);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__35409_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__35409_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__35525_35682);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__35524_35681);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4795__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__35519,G__35520,G__35521,G__35522) : format.call(null,G__35519,G__35520,G__35521,G__35522));
} else {
var G__35535 = "Execution error%s at %s(%s).\n%s\n";
var G__35536 = cause_type;
var G__35537 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__35538 = loc;
var G__35539 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__35535,G__35536,G__35537,G__35538,G__35539) : format.call(null,G__35535,G__35536,G__35537,G__35538,G__35539));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__35458__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
