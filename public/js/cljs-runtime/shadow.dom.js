goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_36100 = (function (this$){
var x__4550__auto__ = (((this$ == null))?null:this$);
var m__4551__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4551__auto__.call(null,this$));
} else {
var m__4549__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4549__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_36100(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_36103 = (function (this$){
var x__4550__auto__ = (((this$ == null))?null:this$);
var m__4551__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4551__auto__.call(null,this$));
} else {
var m__4549__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4549__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_36103(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__34807 = coll;
var G__34808 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__34807,G__34808) : shadow.dom.lazy_native_coll_seq.call(null,G__34807,G__34808));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__4253__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__34837 = arguments.length;
switch (G__34837) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__34840 = arguments.length;
switch (G__34840) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__34849 = arguments.length;
switch (G__34849) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__34855 = arguments.length;
switch (G__34855) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__34874 = arguments.length;
switch (G__34874) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__34892 = arguments.length;
switch (G__34892) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4253__auto__ = (!((typeof document !== 'undefined')));
if(or__4253__auto__){
return or__4253__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e34896){if((e34896 instanceof Object)){
var e = e34896;
return console.log("didnt support attachEvent",el,e);
} else {
throw e34896;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4253__auto__ = (!((typeof document !== 'undefined')));
if(or__4253__auto__){
return or__4253__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__34912 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__34913 = null;
var count__34914 = (0);
var i__34915 = (0);
while(true){
if((i__34915 < count__34914)){
var el = chunk__34913.cljs$core$IIndexed$_nth$arity$2(null,i__34915);
var handler_36129__$1 = ((function (seq__34912,chunk__34913,count__34914,i__34915,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__34912,chunk__34913,count__34914,i__34915,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_36129__$1);


var G__36132 = seq__34912;
var G__36133 = chunk__34913;
var G__36134 = count__34914;
var G__36135 = (i__34915 + (1));
seq__34912 = G__36132;
chunk__34913 = G__36133;
count__34914 = G__36134;
i__34915 = G__36135;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__34912);
if(temp__5753__auto__){
var seq__34912__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34912__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__34912__$1);
var G__36136 = cljs.core.chunk_rest(seq__34912__$1);
var G__36137 = c__4679__auto__;
var G__36138 = cljs.core.count(c__4679__auto__);
var G__36139 = (0);
seq__34912 = G__36136;
chunk__34913 = G__36137;
count__34914 = G__36138;
i__34915 = G__36139;
continue;
} else {
var el = cljs.core.first(seq__34912__$1);
var handler_36141__$1 = ((function (seq__34912,chunk__34913,count__34914,i__34915,el,seq__34912__$1,temp__5753__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__34912,chunk__34913,count__34914,i__34915,el,seq__34912__$1,temp__5753__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_36141__$1);


var G__36142 = cljs.core.next(seq__34912__$1);
var G__36143 = null;
var G__36144 = (0);
var G__36145 = (0);
seq__34912 = G__36142;
chunk__34913 = G__36143;
count__34914 = G__36144;
i__34915 = G__36145;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__34932 = arguments.length;
switch (G__34932) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__34939 = cljs.core.seq(events);
var chunk__34941 = null;
var count__34942 = (0);
var i__34943 = (0);
while(true){
if((i__34943 < count__34942)){
var vec__34955 = chunk__34941.cljs$core$IIndexed$_nth$arity$2(null,i__34943);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34955,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34955,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__36173 = seq__34939;
var G__36174 = chunk__34941;
var G__36175 = count__34942;
var G__36176 = (i__34943 + (1));
seq__34939 = G__36173;
chunk__34941 = G__36174;
count__34942 = G__36175;
i__34943 = G__36176;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__34939);
if(temp__5753__auto__){
var seq__34939__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34939__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__34939__$1);
var G__36182 = cljs.core.chunk_rest(seq__34939__$1);
var G__36183 = c__4679__auto__;
var G__36184 = cljs.core.count(c__4679__auto__);
var G__36185 = (0);
seq__34939 = G__36182;
chunk__34941 = G__36183;
count__34942 = G__36184;
i__34943 = G__36185;
continue;
} else {
var vec__34960 = cljs.core.first(seq__34939__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34960,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34960,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__36186 = cljs.core.next(seq__34939__$1);
var G__36187 = null;
var G__36188 = (0);
var G__36189 = (0);
seq__34939 = G__36186;
chunk__34941 = G__36187;
count__34942 = G__36188;
i__34943 = G__36189;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__34968 = cljs.core.seq(styles);
var chunk__34969 = null;
var count__34970 = (0);
var i__34971 = (0);
while(true){
if((i__34971 < count__34970)){
var vec__34989 = chunk__34969.cljs$core$IIndexed$_nth$arity$2(null,i__34971);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34989,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34989,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__36191 = seq__34968;
var G__36192 = chunk__34969;
var G__36193 = count__34970;
var G__36194 = (i__34971 + (1));
seq__34968 = G__36191;
chunk__34969 = G__36192;
count__34970 = G__36193;
i__34971 = G__36194;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__34968);
if(temp__5753__auto__){
var seq__34968__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34968__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__34968__$1);
var G__36198 = cljs.core.chunk_rest(seq__34968__$1);
var G__36199 = c__4679__auto__;
var G__36200 = cljs.core.count(c__4679__auto__);
var G__36201 = (0);
seq__34968 = G__36198;
chunk__34969 = G__36199;
count__34970 = G__36200;
i__34971 = G__36201;
continue;
} else {
var vec__34994 = cljs.core.first(seq__34968__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34994,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34994,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__36202 = cljs.core.next(seq__34968__$1);
var G__36203 = null;
var G__36204 = (0);
var G__36205 = (0);
seq__34968 = G__36202;
chunk__34969 = G__36203;
count__34970 = G__36204;
i__34971 = G__36205;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__35003_36206 = key;
var G__35003_36207__$1 = (((G__35003_36206 instanceof cljs.core.Keyword))?G__35003_36206.fqn:null);
switch (G__35003_36207__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_36218 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4253__auto__ = goog.string.startsWith(ks_36218,"data-");
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return goog.string.startsWith(ks_36218,"aria-");
}
})())){
el.setAttribute(ks_36218,value);
} else {
(el[ks_36218] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__35035){
var map__35036 = p__35035;
var map__35036__$1 = cljs.core.__destructure_map(map__35036);
var props = map__35036__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35036__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__35037 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35037,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35037,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35037,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__35042 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__35042,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__35042;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__35048 = arguments.length;
switch (G__35048) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5753__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5753__auto__)){
var n = temp__5753__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5753__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5753__auto__)){
var n = temp__5753__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__35058){
var vec__35059 = p__35058;
var seq__35060 = cljs.core.seq(vec__35059);
var first__35061 = cljs.core.first(seq__35060);
var seq__35060__$1 = cljs.core.next(seq__35060);
var nn = first__35061;
var first__35061__$1 = cljs.core.first(seq__35060__$1);
var seq__35060__$2 = cljs.core.next(seq__35060__$1);
var np = first__35061__$1;
var nc = seq__35060__$2;
var node = vec__35059;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__35062 = nn;
var G__35063 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__35062,G__35063) : create_fn.call(null,G__35062,G__35063));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__35064 = nn;
var G__35065 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__35064,G__35065) : create_fn.call(null,G__35064,G__35065));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__35069 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35069,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35069,(1),null);
var seq__35072_36229 = cljs.core.seq(node_children);
var chunk__35073_36230 = null;
var count__35074_36231 = (0);
var i__35075_36232 = (0);
while(true){
if((i__35075_36232 < count__35074_36231)){
var child_struct_36233 = chunk__35073_36230.cljs$core$IIndexed$_nth$arity$2(null,i__35075_36232);
var children_36234 = shadow.dom.dom_node(child_struct_36233);
if(cljs.core.seq_QMARK_(children_36234)){
var seq__35117_36235 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_36234));
var chunk__35119_36236 = null;
var count__35120_36237 = (0);
var i__35121_36238 = (0);
while(true){
if((i__35121_36238 < count__35120_36237)){
var child_36239 = chunk__35119_36236.cljs$core$IIndexed$_nth$arity$2(null,i__35121_36238);
if(cljs.core.truth_(child_36239)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_36239);


var G__36240 = seq__35117_36235;
var G__36241 = chunk__35119_36236;
var G__36242 = count__35120_36237;
var G__36243 = (i__35121_36238 + (1));
seq__35117_36235 = G__36240;
chunk__35119_36236 = G__36241;
count__35120_36237 = G__36242;
i__35121_36238 = G__36243;
continue;
} else {
var G__36244 = seq__35117_36235;
var G__36245 = chunk__35119_36236;
var G__36246 = count__35120_36237;
var G__36247 = (i__35121_36238 + (1));
seq__35117_36235 = G__36244;
chunk__35119_36236 = G__36245;
count__35120_36237 = G__36246;
i__35121_36238 = G__36247;
continue;
}
} else {
var temp__5753__auto___36248 = cljs.core.seq(seq__35117_36235);
if(temp__5753__auto___36248){
var seq__35117_36249__$1 = temp__5753__auto___36248;
if(cljs.core.chunked_seq_QMARK_(seq__35117_36249__$1)){
var c__4679__auto___36250 = cljs.core.chunk_first(seq__35117_36249__$1);
var G__36251 = cljs.core.chunk_rest(seq__35117_36249__$1);
var G__36252 = c__4679__auto___36250;
var G__36253 = cljs.core.count(c__4679__auto___36250);
var G__36254 = (0);
seq__35117_36235 = G__36251;
chunk__35119_36236 = G__36252;
count__35120_36237 = G__36253;
i__35121_36238 = G__36254;
continue;
} else {
var child_36255 = cljs.core.first(seq__35117_36249__$1);
if(cljs.core.truth_(child_36255)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_36255);


var G__36256 = cljs.core.next(seq__35117_36249__$1);
var G__36257 = null;
var G__36258 = (0);
var G__36259 = (0);
seq__35117_36235 = G__36256;
chunk__35119_36236 = G__36257;
count__35120_36237 = G__36258;
i__35121_36238 = G__36259;
continue;
} else {
var G__36260 = cljs.core.next(seq__35117_36249__$1);
var G__36261 = null;
var G__36262 = (0);
var G__36263 = (0);
seq__35117_36235 = G__36260;
chunk__35119_36236 = G__36261;
count__35120_36237 = G__36262;
i__35121_36238 = G__36263;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_36234);
}


var G__36264 = seq__35072_36229;
var G__36265 = chunk__35073_36230;
var G__36266 = count__35074_36231;
var G__36267 = (i__35075_36232 + (1));
seq__35072_36229 = G__36264;
chunk__35073_36230 = G__36265;
count__35074_36231 = G__36266;
i__35075_36232 = G__36267;
continue;
} else {
var temp__5753__auto___36268 = cljs.core.seq(seq__35072_36229);
if(temp__5753__auto___36268){
var seq__35072_36269__$1 = temp__5753__auto___36268;
if(cljs.core.chunked_seq_QMARK_(seq__35072_36269__$1)){
var c__4679__auto___36270 = cljs.core.chunk_first(seq__35072_36269__$1);
var G__36271 = cljs.core.chunk_rest(seq__35072_36269__$1);
var G__36272 = c__4679__auto___36270;
var G__36273 = cljs.core.count(c__4679__auto___36270);
var G__36274 = (0);
seq__35072_36229 = G__36271;
chunk__35073_36230 = G__36272;
count__35074_36231 = G__36273;
i__35075_36232 = G__36274;
continue;
} else {
var child_struct_36277 = cljs.core.first(seq__35072_36269__$1);
var children_36278 = shadow.dom.dom_node(child_struct_36277);
if(cljs.core.seq_QMARK_(children_36278)){
var seq__35126_36279 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_36278));
var chunk__35128_36280 = null;
var count__35129_36281 = (0);
var i__35130_36282 = (0);
while(true){
if((i__35130_36282 < count__35129_36281)){
var child_36283 = chunk__35128_36280.cljs$core$IIndexed$_nth$arity$2(null,i__35130_36282);
if(cljs.core.truth_(child_36283)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_36283);


var G__36284 = seq__35126_36279;
var G__36285 = chunk__35128_36280;
var G__36286 = count__35129_36281;
var G__36287 = (i__35130_36282 + (1));
seq__35126_36279 = G__36284;
chunk__35128_36280 = G__36285;
count__35129_36281 = G__36286;
i__35130_36282 = G__36287;
continue;
} else {
var G__36288 = seq__35126_36279;
var G__36289 = chunk__35128_36280;
var G__36290 = count__35129_36281;
var G__36291 = (i__35130_36282 + (1));
seq__35126_36279 = G__36288;
chunk__35128_36280 = G__36289;
count__35129_36281 = G__36290;
i__35130_36282 = G__36291;
continue;
}
} else {
var temp__5753__auto___36293__$1 = cljs.core.seq(seq__35126_36279);
if(temp__5753__auto___36293__$1){
var seq__35126_36294__$1 = temp__5753__auto___36293__$1;
if(cljs.core.chunked_seq_QMARK_(seq__35126_36294__$1)){
var c__4679__auto___36295 = cljs.core.chunk_first(seq__35126_36294__$1);
var G__36296 = cljs.core.chunk_rest(seq__35126_36294__$1);
var G__36297 = c__4679__auto___36295;
var G__36298 = cljs.core.count(c__4679__auto___36295);
var G__36299 = (0);
seq__35126_36279 = G__36296;
chunk__35128_36280 = G__36297;
count__35129_36281 = G__36298;
i__35130_36282 = G__36299;
continue;
} else {
var child_36301 = cljs.core.first(seq__35126_36294__$1);
if(cljs.core.truth_(child_36301)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_36301);


var G__36302 = cljs.core.next(seq__35126_36294__$1);
var G__36303 = null;
var G__36304 = (0);
var G__36305 = (0);
seq__35126_36279 = G__36302;
chunk__35128_36280 = G__36303;
count__35129_36281 = G__36304;
i__35130_36282 = G__36305;
continue;
} else {
var G__36320 = cljs.core.next(seq__35126_36294__$1);
var G__36321 = null;
var G__36322 = (0);
var G__36323 = (0);
seq__35126_36279 = G__36320;
chunk__35128_36280 = G__36321;
count__35129_36281 = G__36322;
i__35130_36282 = G__36323;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_36278);
}


var G__36324 = cljs.core.next(seq__35072_36269__$1);
var G__36325 = null;
var G__36326 = (0);
var G__36327 = (0);
seq__35072_36229 = G__36324;
chunk__35073_36230 = G__36325;
count__35074_36231 = G__36326;
i__35075_36232 = G__36327;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__35156 = cljs.core.seq(node);
var chunk__35157 = null;
var count__35158 = (0);
var i__35159 = (0);
while(true){
if((i__35159 < count__35158)){
var n = chunk__35157.cljs$core$IIndexed$_nth$arity$2(null,i__35159);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__36331 = seq__35156;
var G__36332 = chunk__35157;
var G__36333 = count__35158;
var G__36334 = (i__35159 + (1));
seq__35156 = G__36331;
chunk__35157 = G__36332;
count__35158 = G__36333;
i__35159 = G__36334;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__35156);
if(temp__5753__auto__){
var seq__35156__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35156__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__35156__$1);
var G__36335 = cljs.core.chunk_rest(seq__35156__$1);
var G__36336 = c__4679__auto__;
var G__36337 = cljs.core.count(c__4679__auto__);
var G__36338 = (0);
seq__35156 = G__36335;
chunk__35157 = G__36336;
count__35158 = G__36337;
i__35159 = G__36338;
continue;
} else {
var n = cljs.core.first(seq__35156__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__36339 = cljs.core.next(seq__35156__$1);
var G__36340 = null;
var G__36341 = (0);
var G__36342 = (0);
seq__35156 = G__36339;
chunk__35157 = G__36340;
count__35158 = G__36341;
i__35159 = G__36342;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__35174 = arguments.length;
switch (G__35174) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__35184 = arguments.length;
switch (G__35184) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__35197 = arguments.length;
switch (G__35197) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__4253__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__4870__auto__ = [];
var len__4864__auto___36357 = arguments.length;
var i__4865__auto___36358 = (0);
while(true){
if((i__4865__auto___36358 < len__4864__auto___36357)){
args__4870__auto__.push((arguments[i__4865__auto___36358]));

var G__36359 = (i__4865__auto___36358 + (1));
i__4865__auto___36358 = G__36359;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__35218_36361 = cljs.core.seq(nodes);
var chunk__35219_36362 = null;
var count__35220_36363 = (0);
var i__35221_36364 = (0);
while(true){
if((i__35221_36364 < count__35220_36363)){
var node_36365 = chunk__35219_36362.cljs$core$IIndexed$_nth$arity$2(null,i__35221_36364);
fragment.appendChild(shadow.dom._to_dom(node_36365));


var G__36366 = seq__35218_36361;
var G__36367 = chunk__35219_36362;
var G__36368 = count__35220_36363;
var G__36369 = (i__35221_36364 + (1));
seq__35218_36361 = G__36366;
chunk__35219_36362 = G__36367;
count__35220_36363 = G__36368;
i__35221_36364 = G__36369;
continue;
} else {
var temp__5753__auto___36370 = cljs.core.seq(seq__35218_36361);
if(temp__5753__auto___36370){
var seq__35218_36371__$1 = temp__5753__auto___36370;
if(cljs.core.chunked_seq_QMARK_(seq__35218_36371__$1)){
var c__4679__auto___36375 = cljs.core.chunk_first(seq__35218_36371__$1);
var G__36376 = cljs.core.chunk_rest(seq__35218_36371__$1);
var G__36377 = c__4679__auto___36375;
var G__36378 = cljs.core.count(c__4679__auto___36375);
var G__36379 = (0);
seq__35218_36361 = G__36376;
chunk__35219_36362 = G__36377;
count__35220_36363 = G__36378;
i__35221_36364 = G__36379;
continue;
} else {
var node_36381 = cljs.core.first(seq__35218_36371__$1);
fragment.appendChild(shadow.dom._to_dom(node_36381));


var G__36382 = cljs.core.next(seq__35218_36371__$1);
var G__36383 = null;
var G__36384 = (0);
var G__36385 = (0);
seq__35218_36361 = G__36382;
chunk__35219_36362 = G__36383;
count__35220_36363 = G__36384;
i__35221_36364 = G__36385;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq35215){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq35215));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__35233_36386 = cljs.core.seq(scripts);
var chunk__35234_36387 = null;
var count__35235_36388 = (0);
var i__35236_36389 = (0);
while(true){
if((i__35236_36389 < count__35235_36388)){
var vec__35247_36390 = chunk__35234_36387.cljs$core$IIndexed$_nth$arity$2(null,i__35236_36389);
var script_tag_36391 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35247_36390,(0),null);
var script_body_36392 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35247_36390,(1),null);
eval(script_body_36392);


var G__36393 = seq__35233_36386;
var G__36394 = chunk__35234_36387;
var G__36395 = count__35235_36388;
var G__36396 = (i__35236_36389 + (1));
seq__35233_36386 = G__36393;
chunk__35234_36387 = G__36394;
count__35235_36388 = G__36395;
i__35236_36389 = G__36396;
continue;
} else {
var temp__5753__auto___36397 = cljs.core.seq(seq__35233_36386);
if(temp__5753__auto___36397){
var seq__35233_36398__$1 = temp__5753__auto___36397;
if(cljs.core.chunked_seq_QMARK_(seq__35233_36398__$1)){
var c__4679__auto___36404 = cljs.core.chunk_first(seq__35233_36398__$1);
var G__36405 = cljs.core.chunk_rest(seq__35233_36398__$1);
var G__36406 = c__4679__auto___36404;
var G__36407 = cljs.core.count(c__4679__auto___36404);
var G__36408 = (0);
seq__35233_36386 = G__36405;
chunk__35234_36387 = G__36406;
count__35235_36388 = G__36407;
i__35236_36389 = G__36408;
continue;
} else {
var vec__35250_36409 = cljs.core.first(seq__35233_36398__$1);
var script_tag_36410 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35250_36409,(0),null);
var script_body_36411 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35250_36409,(1),null);
eval(script_body_36411);


var G__36412 = cljs.core.next(seq__35233_36398__$1);
var G__36413 = null;
var G__36414 = (0);
var G__36415 = (0);
seq__35233_36386 = G__36412;
chunk__35234_36387 = G__36413;
count__35235_36388 = G__36414;
i__35236_36389 = G__36415;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__35253){
var vec__35254 = p__35253;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35254,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35254,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__35278 = arguments.length;
switch (G__35278) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__35320 = cljs.core.seq(style_keys);
var chunk__35322 = null;
var count__35323 = (0);
var i__35324 = (0);
while(true){
if((i__35324 < count__35323)){
var it = chunk__35322.cljs$core$IIndexed$_nth$arity$2(null,i__35324);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__36429 = seq__35320;
var G__36430 = chunk__35322;
var G__36431 = count__35323;
var G__36432 = (i__35324 + (1));
seq__35320 = G__36429;
chunk__35322 = G__36430;
count__35323 = G__36431;
i__35324 = G__36432;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__35320);
if(temp__5753__auto__){
var seq__35320__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35320__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__35320__$1);
var G__36433 = cljs.core.chunk_rest(seq__35320__$1);
var G__36434 = c__4679__auto__;
var G__36435 = cljs.core.count(c__4679__auto__);
var G__36436 = (0);
seq__35320 = G__36433;
chunk__35322 = G__36434;
count__35323 = G__36435;
i__35324 = G__36436;
continue;
} else {
var it = cljs.core.first(seq__35320__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__36437 = cljs.core.next(seq__35320__$1);
var G__36438 = null;
var G__36439 = (0);
var G__36440 = (0);
seq__35320 = G__36437;
chunk__35322 = G__36438;
count__35323 = G__36439;
i__35324 = G__36440;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4502__auto__,k__4503__auto__){
var self__ = this;
var this__4502__auto____$1 = this;
return this__4502__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4503__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4504__auto__,k35330,else__4505__auto__){
var self__ = this;
var this__4504__auto____$1 = this;
var G__35338 = k35330;
var G__35338__$1 = (((G__35338 instanceof cljs.core.Keyword))?G__35338.fqn:null);
switch (G__35338__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k35330,else__4505__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4522__auto__,f__4523__auto__,init__4524__auto__){
var self__ = this;
var this__4522__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4525__auto__,p__35342){
var vec__35343 = p__35342;
var k__4526__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35343,(0),null);
var v__4527__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35343,(1),null);
return (f__4523__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4523__auto__.cljs$core$IFn$_invoke$arity$3(ret__4525__auto__,k__4526__auto__,v__4527__auto__) : f__4523__auto__.call(null,ret__4525__auto__,k__4526__auto__,v__4527__auto__));
}),init__4524__auto__,this__4522__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4517__auto__,writer__4518__auto__,opts__4519__auto__){
var self__ = this;
var this__4517__auto____$1 = this;
var pr_pair__4520__auto__ = (function (keyval__4521__auto__){
return cljs.core.pr_sequential_writer(writer__4518__auto__,cljs.core.pr_writer,""," ","",opts__4519__auto__,keyval__4521__auto__);
});
return cljs.core.pr_sequential_writer(writer__4518__auto__,pr_pair__4520__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4519__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__35329){
var self__ = this;
var G__35329__$1 = this;
return (new cljs.core.RecordIter((0),G__35329__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4500__auto__){
var self__ = this;
var this__4500__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4497__auto__){
var self__ = this;
var this__4497__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4506__auto__){
var self__ = this;
var this__4506__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4498__auto__){
var self__ = this;
var this__4498__auto____$1 = this;
var h__4360__auto__ = self__.__hash;
if((!((h__4360__auto__ == null)))){
return h__4360__auto__;
} else {
var h__4360__auto____$1 = (function (coll__4499__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4499__auto__));
})(this__4498__auto____$1);
(self__.__hash = h__4360__auto____$1);

return h__4360__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this35331,other35332){
var self__ = this;
var this35331__$1 = this;
return (((!((other35332 == null)))) && ((((this35331__$1.constructor === other35332.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35331__$1.x,other35332.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35331__$1.y,other35332.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35331__$1.__extmap,other35332.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4512__auto__,k__4513__auto__){
var self__ = this;
var this__4512__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4513__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4512__auto____$1),self__.__meta),k__4513__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4513__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4509__auto__,k35330){
var self__ = this;
var this__4509__auto____$1 = this;
var G__35375 = k35330;
var G__35375__$1 = (((G__35375 instanceof cljs.core.Keyword))?G__35375.fqn:null);
switch (G__35375__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k35330);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4510__auto__,k__4511__auto__,G__35329){
var self__ = this;
var this__4510__auto____$1 = this;
var pred__35392 = cljs.core.keyword_identical_QMARK_;
var expr__35393 = k__4511__auto__;
if(cljs.core.truth_((pred__35392.cljs$core$IFn$_invoke$arity$2 ? pred__35392.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__35393) : pred__35392.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__35393)))){
return (new shadow.dom.Coordinate(G__35329,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__35392.cljs$core$IFn$_invoke$arity$2 ? pred__35392.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__35393) : pred__35392.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__35393)))){
return (new shadow.dom.Coordinate(self__.x,G__35329,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4511__auto__,G__35329),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4515__auto__){
var self__ = this;
var this__4515__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4501__auto__,G__35329){
var self__ = this;
var this__4501__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__35329,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4507__auto__,entry__4508__auto__){
var self__ = this;
var this__4507__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4508__auto__)){
return this__4507__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4508__auto__,(0)),cljs.core._nth(entry__4508__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4507__auto____$1,entry__4508__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4546__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4546__auto__,writer__4547__auto__){
return cljs.core._write(writer__4547__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__35335){
var extmap__4542__auto__ = (function (){var G__35467 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__35335,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__35335)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__35467);
} else {
return G__35467;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__35335),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__35335),null,cljs.core.not_empty(extmap__4542__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4502__auto__,k__4503__auto__){
var self__ = this;
var this__4502__auto____$1 = this;
return this__4502__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4503__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4504__auto__,k35530,else__4505__auto__){
var self__ = this;
var this__4504__auto____$1 = this;
var G__35570 = k35530;
var G__35570__$1 = (((G__35570 instanceof cljs.core.Keyword))?G__35570.fqn:null);
switch (G__35570__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k35530,else__4505__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4522__auto__,f__4523__auto__,init__4524__auto__){
var self__ = this;
var this__4522__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4525__auto__,p__35594){
var vec__35600 = p__35594;
var k__4526__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35600,(0),null);
var v__4527__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35600,(1),null);
return (f__4523__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4523__auto__.cljs$core$IFn$_invoke$arity$3(ret__4525__auto__,k__4526__auto__,v__4527__auto__) : f__4523__auto__.call(null,ret__4525__auto__,k__4526__auto__,v__4527__auto__));
}),init__4524__auto__,this__4522__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4517__auto__,writer__4518__auto__,opts__4519__auto__){
var self__ = this;
var this__4517__auto____$1 = this;
var pr_pair__4520__auto__ = (function (keyval__4521__auto__){
return cljs.core.pr_sequential_writer(writer__4518__auto__,cljs.core.pr_writer,""," ","",opts__4519__auto__,keyval__4521__auto__);
});
return cljs.core.pr_sequential_writer(writer__4518__auto__,pr_pair__4520__auto__,"#shadow.dom.Size{",", ","}",opts__4519__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__35529){
var self__ = this;
var G__35529__$1 = this;
return (new cljs.core.RecordIter((0),G__35529__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4500__auto__){
var self__ = this;
var this__4500__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4497__auto__){
var self__ = this;
var this__4497__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4506__auto__){
var self__ = this;
var this__4506__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4498__auto__){
var self__ = this;
var this__4498__auto____$1 = this;
var h__4360__auto__ = self__.__hash;
if((!((h__4360__auto__ == null)))){
return h__4360__auto__;
} else {
var h__4360__auto____$1 = (function (coll__4499__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4499__auto__));
})(this__4498__auto____$1);
(self__.__hash = h__4360__auto____$1);

return h__4360__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this35531,other35532){
var self__ = this;
var this35531__$1 = this;
return (((!((other35532 == null)))) && ((((this35531__$1.constructor === other35532.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35531__$1.w,other35532.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35531__$1.h,other35532.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35531__$1.__extmap,other35532.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4512__auto__,k__4513__auto__){
var self__ = this;
var this__4512__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4513__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4512__auto____$1),self__.__meta),k__4513__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4513__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4509__auto__,k35530){
var self__ = this;
var this__4509__auto____$1 = this;
var G__35676 = k35530;
var G__35676__$1 = (((G__35676 instanceof cljs.core.Keyword))?G__35676.fqn:null);
switch (G__35676__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k35530);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4510__auto__,k__4511__auto__,G__35529){
var self__ = this;
var this__4510__auto____$1 = this;
var pred__35678 = cljs.core.keyword_identical_QMARK_;
var expr__35679 = k__4511__auto__;
if(cljs.core.truth_((pred__35678.cljs$core$IFn$_invoke$arity$2 ? pred__35678.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__35679) : pred__35678.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__35679)))){
return (new shadow.dom.Size(G__35529,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__35678.cljs$core$IFn$_invoke$arity$2 ? pred__35678.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__35679) : pred__35678.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__35679)))){
return (new shadow.dom.Size(self__.w,G__35529,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4511__auto__,G__35529),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4515__auto__){
var self__ = this;
var this__4515__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4501__auto__,G__35529){
var self__ = this;
var this__4501__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__35529,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4507__auto__,entry__4508__auto__){
var self__ = this;
var this__4507__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4508__auto__)){
return this__4507__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4508__auto__,(0)),cljs.core._nth(entry__4508__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4507__auto____$1,entry__4508__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4546__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4546__auto__,writer__4547__auto__){
return cljs.core._write(writer__4547__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__35534){
var extmap__4542__auto__ = (function (){var G__35715 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__35534,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__35534)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__35715);
} else {
return G__35715;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__35534),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__35534),null,cljs.core.not_empty(extmap__4542__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__4738__auto__ = opts;
var l__4739__auto__ = a__4738__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4739__auto__)){
var G__36482 = (i + (1));
var G__36483 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__36482;
ret = G__36483;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__35746){
var vec__35747 = p__35746;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35747,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35747,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__35755 = arguments.length;
switch (G__35755) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5751__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5751__auto__)){
var child = temp__5751__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__36488 = ps;
var G__36489 = (i + (1));
el__$1 = G__36488;
i = G__36489;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__35787 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35787,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35787,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35787,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__35795_36493 = cljs.core.seq(props);
var chunk__35796_36494 = null;
var count__35797_36495 = (0);
var i__35798_36496 = (0);
while(true){
if((i__35798_36496 < count__35797_36495)){
var vec__35814_36497 = chunk__35796_36494.cljs$core$IIndexed$_nth$arity$2(null,i__35798_36496);
var k_36498 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35814_36497,(0),null);
var v_36499 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35814_36497,(1),null);
el.setAttributeNS((function (){var temp__5753__auto__ = cljs.core.namespace(k_36498);
if(cljs.core.truth_(temp__5753__auto__)){
var ns = temp__5753__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_36498),v_36499);


var G__36500 = seq__35795_36493;
var G__36501 = chunk__35796_36494;
var G__36502 = count__35797_36495;
var G__36503 = (i__35798_36496 + (1));
seq__35795_36493 = G__36500;
chunk__35796_36494 = G__36501;
count__35797_36495 = G__36502;
i__35798_36496 = G__36503;
continue;
} else {
var temp__5753__auto___36504 = cljs.core.seq(seq__35795_36493);
if(temp__5753__auto___36504){
var seq__35795_36505__$1 = temp__5753__auto___36504;
if(cljs.core.chunked_seq_QMARK_(seq__35795_36505__$1)){
var c__4679__auto___36506 = cljs.core.chunk_first(seq__35795_36505__$1);
var G__36507 = cljs.core.chunk_rest(seq__35795_36505__$1);
var G__36508 = c__4679__auto___36506;
var G__36509 = cljs.core.count(c__4679__auto___36506);
var G__36510 = (0);
seq__35795_36493 = G__36507;
chunk__35796_36494 = G__36508;
count__35797_36495 = G__36509;
i__35798_36496 = G__36510;
continue;
} else {
var vec__35822_36511 = cljs.core.first(seq__35795_36505__$1);
var k_36512 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35822_36511,(0),null);
var v_36513 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35822_36511,(1),null);
el.setAttributeNS((function (){var temp__5753__auto____$1 = cljs.core.namespace(k_36512);
if(cljs.core.truth_(temp__5753__auto____$1)){
var ns = temp__5753__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_36512),v_36513);


var G__36514 = cljs.core.next(seq__35795_36505__$1);
var G__36515 = null;
var G__36516 = (0);
var G__36517 = (0);
seq__35795_36493 = G__36514;
chunk__35796_36494 = G__36515;
count__35797_36495 = G__36516;
i__35798_36496 = G__36517;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__35853 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35853,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35853,(1),null);
var seq__35864_36518 = cljs.core.seq(node_children);
var chunk__35866_36519 = null;
var count__35867_36520 = (0);
var i__35868_36521 = (0);
while(true){
if((i__35868_36521 < count__35867_36520)){
var child_struct_36522 = chunk__35866_36519.cljs$core$IIndexed$_nth$arity$2(null,i__35868_36521);
if((!((child_struct_36522 == null)))){
if(typeof child_struct_36522 === 'string'){
var text_36523 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_36523),child_struct_36522].join(''));
} else {
var children_36524 = shadow.dom.svg_node(child_struct_36522);
if(cljs.core.seq_QMARK_(children_36524)){
var seq__35929_36525 = cljs.core.seq(children_36524);
var chunk__35933_36526 = null;
var count__35934_36527 = (0);
var i__35935_36528 = (0);
while(true){
if((i__35935_36528 < count__35934_36527)){
var child_36529 = chunk__35933_36526.cljs$core$IIndexed$_nth$arity$2(null,i__35935_36528);
if(cljs.core.truth_(child_36529)){
node.appendChild(child_36529);


var G__36534 = seq__35929_36525;
var G__36535 = chunk__35933_36526;
var G__36536 = count__35934_36527;
var G__36537 = (i__35935_36528 + (1));
seq__35929_36525 = G__36534;
chunk__35933_36526 = G__36535;
count__35934_36527 = G__36536;
i__35935_36528 = G__36537;
continue;
} else {
var G__36538 = seq__35929_36525;
var G__36539 = chunk__35933_36526;
var G__36540 = count__35934_36527;
var G__36541 = (i__35935_36528 + (1));
seq__35929_36525 = G__36538;
chunk__35933_36526 = G__36539;
count__35934_36527 = G__36540;
i__35935_36528 = G__36541;
continue;
}
} else {
var temp__5753__auto___36543 = cljs.core.seq(seq__35929_36525);
if(temp__5753__auto___36543){
var seq__35929_36544__$1 = temp__5753__auto___36543;
if(cljs.core.chunked_seq_QMARK_(seq__35929_36544__$1)){
var c__4679__auto___36545 = cljs.core.chunk_first(seq__35929_36544__$1);
var G__36546 = cljs.core.chunk_rest(seq__35929_36544__$1);
var G__36547 = c__4679__auto___36545;
var G__36548 = cljs.core.count(c__4679__auto___36545);
var G__36549 = (0);
seq__35929_36525 = G__36546;
chunk__35933_36526 = G__36547;
count__35934_36527 = G__36548;
i__35935_36528 = G__36549;
continue;
} else {
var child_36550 = cljs.core.first(seq__35929_36544__$1);
if(cljs.core.truth_(child_36550)){
node.appendChild(child_36550);


var G__36551 = cljs.core.next(seq__35929_36544__$1);
var G__36552 = null;
var G__36553 = (0);
var G__36554 = (0);
seq__35929_36525 = G__36551;
chunk__35933_36526 = G__36552;
count__35934_36527 = G__36553;
i__35935_36528 = G__36554;
continue;
} else {
var G__36555 = cljs.core.next(seq__35929_36544__$1);
var G__36556 = null;
var G__36557 = (0);
var G__36558 = (0);
seq__35929_36525 = G__36555;
chunk__35933_36526 = G__36556;
count__35934_36527 = G__36557;
i__35935_36528 = G__36558;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_36524);
}
}


var G__36561 = seq__35864_36518;
var G__36562 = chunk__35866_36519;
var G__36563 = count__35867_36520;
var G__36564 = (i__35868_36521 + (1));
seq__35864_36518 = G__36561;
chunk__35866_36519 = G__36562;
count__35867_36520 = G__36563;
i__35868_36521 = G__36564;
continue;
} else {
var G__36565 = seq__35864_36518;
var G__36566 = chunk__35866_36519;
var G__36567 = count__35867_36520;
var G__36568 = (i__35868_36521 + (1));
seq__35864_36518 = G__36565;
chunk__35866_36519 = G__36566;
count__35867_36520 = G__36567;
i__35868_36521 = G__36568;
continue;
}
} else {
var temp__5753__auto___36569 = cljs.core.seq(seq__35864_36518);
if(temp__5753__auto___36569){
var seq__35864_36570__$1 = temp__5753__auto___36569;
if(cljs.core.chunked_seq_QMARK_(seq__35864_36570__$1)){
var c__4679__auto___36572 = cljs.core.chunk_first(seq__35864_36570__$1);
var G__36573 = cljs.core.chunk_rest(seq__35864_36570__$1);
var G__36574 = c__4679__auto___36572;
var G__36575 = cljs.core.count(c__4679__auto___36572);
var G__36576 = (0);
seq__35864_36518 = G__36573;
chunk__35866_36519 = G__36574;
count__35867_36520 = G__36575;
i__35868_36521 = G__36576;
continue;
} else {
var child_struct_36577 = cljs.core.first(seq__35864_36570__$1);
if((!((child_struct_36577 == null)))){
if(typeof child_struct_36577 === 'string'){
var text_36578 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_36578),child_struct_36577].join(''));
} else {
var children_36579 = shadow.dom.svg_node(child_struct_36577);
if(cljs.core.seq_QMARK_(children_36579)){
var seq__35959_36580 = cljs.core.seq(children_36579);
var chunk__35961_36581 = null;
var count__35962_36582 = (0);
var i__35963_36583 = (0);
while(true){
if((i__35963_36583 < count__35962_36582)){
var child_36584 = chunk__35961_36581.cljs$core$IIndexed$_nth$arity$2(null,i__35963_36583);
if(cljs.core.truth_(child_36584)){
node.appendChild(child_36584);


var G__36585 = seq__35959_36580;
var G__36586 = chunk__35961_36581;
var G__36587 = count__35962_36582;
var G__36588 = (i__35963_36583 + (1));
seq__35959_36580 = G__36585;
chunk__35961_36581 = G__36586;
count__35962_36582 = G__36587;
i__35963_36583 = G__36588;
continue;
} else {
var G__36589 = seq__35959_36580;
var G__36590 = chunk__35961_36581;
var G__36591 = count__35962_36582;
var G__36592 = (i__35963_36583 + (1));
seq__35959_36580 = G__36589;
chunk__35961_36581 = G__36590;
count__35962_36582 = G__36591;
i__35963_36583 = G__36592;
continue;
}
} else {
var temp__5753__auto___36593__$1 = cljs.core.seq(seq__35959_36580);
if(temp__5753__auto___36593__$1){
var seq__35959_36594__$1 = temp__5753__auto___36593__$1;
if(cljs.core.chunked_seq_QMARK_(seq__35959_36594__$1)){
var c__4679__auto___36595 = cljs.core.chunk_first(seq__35959_36594__$1);
var G__36596 = cljs.core.chunk_rest(seq__35959_36594__$1);
var G__36597 = c__4679__auto___36595;
var G__36598 = cljs.core.count(c__4679__auto___36595);
var G__36599 = (0);
seq__35959_36580 = G__36596;
chunk__35961_36581 = G__36597;
count__35962_36582 = G__36598;
i__35963_36583 = G__36599;
continue;
} else {
var child_36600 = cljs.core.first(seq__35959_36594__$1);
if(cljs.core.truth_(child_36600)){
node.appendChild(child_36600);


var G__36601 = cljs.core.next(seq__35959_36594__$1);
var G__36602 = null;
var G__36603 = (0);
var G__36604 = (0);
seq__35959_36580 = G__36601;
chunk__35961_36581 = G__36602;
count__35962_36582 = G__36603;
i__35963_36583 = G__36604;
continue;
} else {
var G__36605 = cljs.core.next(seq__35959_36594__$1);
var G__36606 = null;
var G__36607 = (0);
var G__36608 = (0);
seq__35959_36580 = G__36605;
chunk__35961_36581 = G__36606;
count__35962_36582 = G__36607;
i__35963_36583 = G__36608;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_36579);
}
}


var G__36609 = cljs.core.next(seq__35864_36570__$1);
var G__36610 = null;
var G__36611 = (0);
var G__36612 = (0);
seq__35864_36518 = G__36609;
chunk__35866_36519 = G__36610;
count__35867_36520 = G__36611;
i__35868_36521 = G__36612;
continue;
} else {
var G__36613 = cljs.core.next(seq__35864_36570__$1);
var G__36614 = null;
var G__36615 = (0);
var G__36616 = (0);
seq__35864_36518 = G__36613;
chunk__35866_36519 = G__36614;
count__35867_36520 = G__36615;
i__35868_36521 = G__36616;
continue;
}
}
} else {
}
}
break;
}

return node;
});
(shadow.dom.SVGElement["string"] = true);

(shadow.dom._to_svg["string"] = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

(shadow.dom.SVGElement["null"] = true);

(shadow.dom._to_svg["null"] = (function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4870__auto__ = [];
var len__4864__auto___36617 = arguments.length;
var i__4865__auto___36618 = (0);
while(true){
if((i__4865__auto___36618 < len__4864__auto___36617)){
args__4870__auto__.push((arguments[i__4865__auto___36618]));

var G__36619 = (i__4865__auto___36618 + (1));
i__4865__auto___36618 = G__36619;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq36039){
var G__36040 = cljs.core.first(seq36039);
var seq36039__$1 = cljs.core.next(seq36039);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36040,seq36039__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__36057 = arguments.length;
switch (G__36057) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__4251__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4251__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4251__auto__;
}
})())){
var c__32384__auto___36627 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32385__auto__ = (function (){var switch__32084__auto__ = (function (state_36085){
var state_val_36086 = (state_36085[(1)]);
if((state_val_36086 === (1))){
var state_36085__$1 = state_36085;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36085__$1,(2),once_or_cleanup);
} else {
if((state_val_36086 === (2))){
var inst_36082 = (state_36085[(2)]);
var inst_36083 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_36085__$1 = (function (){var statearr_36087 = state_36085;
(statearr_36087[(7)] = inst_36082);

return statearr_36087;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_36085__$1,inst_36083);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__32085__auto__ = null;
var shadow$dom$state_machine__32085__auto____0 = (function (){
var statearr_36091 = [null,null,null,null,null,null,null,null];
(statearr_36091[(0)] = shadow$dom$state_machine__32085__auto__);

(statearr_36091[(1)] = (1));

return statearr_36091;
});
var shadow$dom$state_machine__32085__auto____1 = (function (state_36085){
while(true){
var ret_value__32086__auto__ = (function (){try{while(true){
var result__32087__auto__ = switch__32084__auto__(state_36085);
if(cljs.core.keyword_identical_QMARK_(result__32087__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32087__auto__;
}
break;
}
}catch (e36092){var ex__32088__auto__ = e36092;
var statearr_36093_36633 = state_36085;
(statearr_36093_36633[(2)] = ex__32088__auto__);


if(cljs.core.seq((state_36085[(4)]))){
var statearr_36094_36634 = state_36085;
(statearr_36094_36634[(1)] = cljs.core.first((state_36085[(4)])));

} else {
throw ex__32088__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32086__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36635 = state_36085;
state_36085 = G__36635;
continue;
} else {
return ret_value__32086__auto__;
}
break;
}
});
shadow$dom$state_machine__32085__auto__ = function(state_36085){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__32085__auto____0.call(this);
case 1:
return shadow$dom$state_machine__32085__auto____1.call(this,state_36085);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__32085__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__32085__auto____0;
shadow$dom$state_machine__32085__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__32085__auto____1;
return shadow$dom$state_machine__32085__auto__;
})()
})();
var state__32386__auto__ = (function (){var statearr_36095 = f__32385__auto__();
(statearr_36095[(6)] = c__32384__auto___36627);

return statearr_36095;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32386__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
