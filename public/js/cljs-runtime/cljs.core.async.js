goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__32455 = arguments.length;
switch (G__32455) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32456 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32456 = (function (f,blockable,meta32457){
this.f = f;
this.blockable = blockable;
this.meta32457 = meta32457;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32456.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32458,meta32457__$1){
var self__ = this;
var _32458__$1 = this;
return (new cljs.core.async.t_cljs$core$async32456(self__.f,self__.blockable,meta32457__$1));
}));

(cljs.core.async.t_cljs$core$async32456.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32458){
var self__ = this;
var _32458__$1 = this;
return self__.meta32457;
}));

(cljs.core.async.t_cljs$core$async32456.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32456.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async32456.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async32456.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async32456.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta32457","meta32457",1650371050,null)], null);
}));

(cljs.core.async.t_cljs$core$async32456.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32456.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32456");

(cljs.core.async.t_cljs$core$async32456.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async32456");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32456.
 */
cljs.core.async.__GT_t_cljs$core$async32456 = (function cljs$core$async$__GT_t_cljs$core$async32456(f__$1,blockable__$1,meta32457){
return (new cljs.core.async.t_cljs$core$async32456(f__$1,blockable__$1,meta32457));
});

}

return (new cljs.core.async.t_cljs$core$async32456(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__32469 = arguments.length;
switch (G__32469) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__32475 = arguments.length;
switch (G__32475) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__32478 = arguments.length;
switch (G__32478) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_34819 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_34819) : fn1.call(null,val_34819));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_34819) : fn1.call(null,val_34819));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__32481 = arguments.length;
switch (G__32481) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5751__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5751__auto__)){
var ret = temp__5751__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5751__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5751__auto__)){
var retb = temp__5751__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4741__auto___34833 = n;
var x_34834 = (0);
while(true){
if((x_34834 < n__4741__auto___34833)){
(a[x_34834] = x_34834);

var G__34835 = (x_34834 + (1));
x_34834 = G__34835;
continue;
} else {
}
break;
}

cljs.core.async.goog$module$goog$array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32494 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32494 = (function (flag,meta32495){
this.flag = flag;
this.meta32495 = meta32495;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32494.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32496,meta32495__$1){
var self__ = this;
var _32496__$1 = this;
return (new cljs.core.async.t_cljs$core$async32494(self__.flag,meta32495__$1));
}));

(cljs.core.async.t_cljs$core$async32494.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32496){
var self__ = this;
var _32496__$1 = this;
return self__.meta32495;
}));

(cljs.core.async.t_cljs$core$async32494.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32494.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async32494.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async32494.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async32494.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta32495","meta32495",-997977997,null)], null);
}));

(cljs.core.async.t_cljs$core$async32494.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32494.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32494");

(cljs.core.async.t_cljs$core$async32494.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async32494");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32494.
 */
cljs.core.async.__GT_t_cljs$core$async32494 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async32494(flag__$1,meta32495){
return (new cljs.core.async.t_cljs$core$async32494(flag__$1,meta32495));
});

}

return (new cljs.core.async.t_cljs$core$async32494(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32510 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32510 = (function (flag,cb,meta32511){
this.flag = flag;
this.cb = cb;
this.meta32511 = meta32511;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32510.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32512,meta32511__$1){
var self__ = this;
var _32512__$1 = this;
return (new cljs.core.async.t_cljs$core$async32510(self__.flag,self__.cb,meta32511__$1));
}));

(cljs.core.async.t_cljs$core$async32510.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32512){
var self__ = this;
var _32512__$1 = this;
return self__.meta32511;
}));

(cljs.core.async.t_cljs$core$async32510.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32510.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async32510.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async32510.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async32510.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta32511","meta32511",-1988885463,null)], null);
}));

(cljs.core.async.t_cljs$core$async32510.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32510.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32510");

(cljs.core.async.t_cljs$core$async32510.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async32510");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32510.
 */
cljs.core.async.__GT_t_cljs$core$async32510 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async32510(flag__$1,cb__$1,meta32511){
return (new cljs.core.async.t_cljs$core$async32510(flag__$1,cb__$1,meta32511));
});

}

return (new cljs.core.async.t_cljs$core$async32510(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__32524_SHARP_){
var G__32534 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__32524_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__32534) : fret.call(null,G__32534));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__32525_SHARP_){
var G__32535 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__32525_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__32535) : fret.call(null,G__32535));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4253__auto__ = wport;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return port;
}
})()], null));
} else {
var G__34848 = (i + (1));
i = G__34848;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4253__auto__ = ret;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5753__auto__ = (function (){var and__4251__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4251__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4251__auto__;
}
})();
if(cljs.core.truth_(temp__5753__auto__)){
var got = temp__5753__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4870__auto__ = [];
var len__4864__auto___34850 = arguments.length;
var i__4865__auto___34851 = (0);
while(true){
if((i__4865__auto___34851 < len__4864__auto___34850)){
args__4870__auto__.push((arguments[i__4865__auto___34851]));

var G__34852 = (i__4865__auto___34851 + (1));
i__4865__auto___34851 = G__34852;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__32543){
var map__32544 = p__32543;
var map__32544__$1 = cljs.core.__destructure_map(map__32544);
var opts = map__32544__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq32537){
var G__32538 = cljs.core.first(seq32537);
var seq32537__$1 = cljs.core.next(seq32537);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32538,seq32537__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__32550 = arguments.length;
switch (G__32550) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__32384__auto___34856 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32385__auto__ = (function (){var switch__32084__auto__ = (function (state_32593){
var state_val_32595 = (state_32593[(1)]);
if((state_val_32595 === (7))){
var inst_32588 = (state_32593[(2)]);
var state_32593__$1 = state_32593;
var statearr_32599_34857 = state_32593__$1;
(statearr_32599_34857[(2)] = inst_32588);

(statearr_32599_34857[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32595 === (1))){
var state_32593__$1 = state_32593;
var statearr_32600_34858 = state_32593__$1;
(statearr_32600_34858[(2)] = null);

(statearr_32600_34858[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32595 === (4))){
var inst_32565 = (state_32593[(7)]);
var inst_32565__$1 = (state_32593[(2)]);
var inst_32572 = (inst_32565__$1 == null);
var state_32593__$1 = (function (){var statearr_32606 = state_32593;
(statearr_32606[(7)] = inst_32565__$1);

return statearr_32606;
})();
if(cljs.core.truth_(inst_32572)){
var statearr_32607_34863 = state_32593__$1;
(statearr_32607_34863[(1)] = (5));

} else {
var statearr_32612_34864 = state_32593__$1;
(statearr_32612_34864[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32595 === (13))){
var state_32593__$1 = state_32593;
var statearr_32622_34865 = state_32593__$1;
(statearr_32622_34865[(2)] = null);

(statearr_32622_34865[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32595 === (6))){
var inst_32565 = (state_32593[(7)]);
var state_32593__$1 = state_32593;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32593__$1,(11),to,inst_32565);
} else {
if((state_val_32595 === (3))){
var inst_32590 = (state_32593[(2)]);
var state_32593__$1 = state_32593;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32593__$1,inst_32590);
} else {
if((state_val_32595 === (12))){
var state_32593__$1 = state_32593;
var statearr_32642_34866 = state_32593__$1;
(statearr_32642_34866[(2)] = null);

(statearr_32642_34866[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32595 === (2))){
var state_32593__$1 = state_32593;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32593__$1,(4),from);
} else {
if((state_val_32595 === (11))){
var inst_32581 = (state_32593[(2)]);
var state_32593__$1 = state_32593;
if(cljs.core.truth_(inst_32581)){
var statearr_32643_34867 = state_32593__$1;
(statearr_32643_34867[(1)] = (12));

} else {
var statearr_32644_34868 = state_32593__$1;
(statearr_32644_34868[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32595 === (9))){
var state_32593__$1 = state_32593;
var statearr_32645_34869 = state_32593__$1;
(statearr_32645_34869[(2)] = null);

(statearr_32645_34869[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32595 === (5))){
var state_32593__$1 = state_32593;
if(cljs.core.truth_(close_QMARK_)){
var statearr_32646_34870 = state_32593__$1;
(statearr_32646_34870[(1)] = (8));

} else {
var statearr_32648_34872 = state_32593__$1;
(statearr_32648_34872[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32595 === (14))){
var inst_32586 = (state_32593[(2)]);
var state_32593__$1 = state_32593;
var statearr_32650_34873 = state_32593__$1;
(statearr_32650_34873[(2)] = inst_32586);

(statearr_32650_34873[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32595 === (10))){
var inst_32578 = (state_32593[(2)]);
var state_32593__$1 = state_32593;
var statearr_32652_34879 = state_32593__$1;
(statearr_32652_34879[(2)] = inst_32578);

(statearr_32652_34879[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32595 === (8))){
var inst_32575 = cljs.core.async.close_BANG_(to);
var state_32593__$1 = state_32593;
var statearr_32654_34883 = state_32593__$1;
(statearr_32654_34883[(2)] = inst_32575);

(statearr_32654_34883[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__32085__auto__ = null;
var cljs$core$async$state_machine__32085__auto____0 = (function (){
var statearr_32657 = [null,null,null,null,null,null,null,null];
(statearr_32657[(0)] = cljs$core$async$state_machine__32085__auto__);

(statearr_32657[(1)] = (1));

return statearr_32657;
});
var cljs$core$async$state_machine__32085__auto____1 = (function (state_32593){
while(true){
var ret_value__32086__auto__ = (function (){try{while(true){
var result__32087__auto__ = switch__32084__auto__(state_32593);
if(cljs.core.keyword_identical_QMARK_(result__32087__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32087__auto__;
}
break;
}
}catch (e32658){var ex__32088__auto__ = e32658;
var statearr_32659_34887 = state_32593;
(statearr_32659_34887[(2)] = ex__32088__auto__);


if(cljs.core.seq((state_32593[(4)]))){
var statearr_32660_34888 = state_32593;
(statearr_32660_34888[(1)] = cljs.core.first((state_32593[(4)])));

} else {
throw ex__32088__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32086__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34889 = state_32593;
state_32593 = G__34889;
continue;
} else {
return ret_value__32086__auto__;
}
break;
}
});
cljs$core$async$state_machine__32085__auto__ = function(state_32593){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32085__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32085__auto____1.call(this,state_32593);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32085__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32085__auto____0;
cljs$core$async$state_machine__32085__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32085__auto____1;
return cljs$core$async$state_machine__32085__auto__;
})()
})();
var state__32386__auto__ = (function (){var statearr_32661 = f__32385__auto__();
(statearr_32661[(6)] = c__32384__auto___34856);

return statearr_32661;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32386__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = (function (p__32688){
var vec__32690 = p__32688;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32690,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32690,(1),null);
var job = vec__32690;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__32384__auto___34890 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32385__auto__ = (function (){var switch__32084__auto__ = (function (state_32729){
var state_val_32731 = (state_32729[(1)]);
if((state_val_32731 === (1))){
var state_32729__$1 = state_32729;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32729__$1,(2),res,v);
} else {
if((state_val_32731 === (2))){
var inst_32722 = (state_32729[(2)]);
var inst_32723 = cljs.core.async.close_BANG_(res);
var state_32729__$1 = (function (){var statearr_32756 = state_32729;
(statearr_32756[(7)] = inst_32722);

return statearr_32756;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_32729__$1,inst_32723);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32085__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32085__auto____0 = (function (){
var statearr_32763 = [null,null,null,null,null,null,null,null];
(statearr_32763[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32085__auto__);

(statearr_32763[(1)] = (1));

return statearr_32763;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32085__auto____1 = (function (state_32729){
while(true){
var ret_value__32086__auto__ = (function (){try{while(true){
var result__32087__auto__ = switch__32084__auto__(state_32729);
if(cljs.core.keyword_identical_QMARK_(result__32087__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32087__auto__;
}
break;
}
}catch (e32764){var ex__32088__auto__ = e32764;
var statearr_32765_34893 = state_32729;
(statearr_32765_34893[(2)] = ex__32088__auto__);


if(cljs.core.seq((state_32729[(4)]))){
var statearr_32766_34894 = state_32729;
(statearr_32766_34894[(1)] = cljs.core.first((state_32729[(4)])));

} else {
throw ex__32088__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32086__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34895 = state_32729;
state_32729 = G__34895;
continue;
} else {
return ret_value__32086__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32085__auto__ = function(state_32729){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32085__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32085__auto____1.call(this,state_32729);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32085__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32085__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32085__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32085__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32085__auto__;
})()
})();
var state__32386__auto__ = (function (){var statearr_32767 = f__32385__auto__();
(statearr_32767[(6)] = c__32384__auto___34890);

return statearr_32767;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32386__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__32769){
var vec__32771 = p__32769;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32771,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32771,(1),null);
var job = vec__32771;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__4741__auto___34897 = n;
var __34898 = (0);
while(true){
if((__34898 < n__4741__auto___34897)){
var G__32774_34899 = type;
var G__32774_34900__$1 = (((G__32774_34899 instanceof cljs.core.Keyword))?G__32774_34899.fqn:null);
switch (G__32774_34900__$1) {
case "compute":
var c__32384__auto___34902 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__34898,c__32384__auto___34902,G__32774_34899,G__32774_34900__$1,n__4741__auto___34897,jobs,results,process,async){
return (function (){
var f__32385__auto__ = (function (){var switch__32084__auto__ = ((function (__34898,c__32384__auto___34902,G__32774_34899,G__32774_34900__$1,n__4741__auto___34897,jobs,results,process,async){
return (function (state_32787){
var state_val_32788 = (state_32787[(1)]);
if((state_val_32788 === (1))){
var state_32787__$1 = state_32787;
var statearr_32793_34906 = state_32787__$1;
(statearr_32793_34906[(2)] = null);

(statearr_32793_34906[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32788 === (2))){
var state_32787__$1 = state_32787;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32787__$1,(4),jobs);
} else {
if((state_val_32788 === (3))){
var inst_32785 = (state_32787[(2)]);
var state_32787__$1 = state_32787;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32787__$1,inst_32785);
} else {
if((state_val_32788 === (4))){
var inst_32777 = (state_32787[(2)]);
var inst_32778 = process(inst_32777);
var state_32787__$1 = state_32787;
if(cljs.core.truth_(inst_32778)){
var statearr_32803_34907 = state_32787__$1;
(statearr_32803_34907[(1)] = (5));

} else {
var statearr_32804_34908 = state_32787__$1;
(statearr_32804_34908[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32788 === (5))){
var state_32787__$1 = state_32787;
var statearr_32806_34909 = state_32787__$1;
(statearr_32806_34909[(2)] = null);

(statearr_32806_34909[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32788 === (6))){
var state_32787__$1 = state_32787;
var statearr_32815_34910 = state_32787__$1;
(statearr_32815_34910[(2)] = null);

(statearr_32815_34910[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32788 === (7))){
var inst_32783 = (state_32787[(2)]);
var state_32787__$1 = state_32787;
var statearr_32820_34911 = state_32787__$1;
(statearr_32820_34911[(2)] = inst_32783);

(statearr_32820_34911[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__34898,c__32384__auto___34902,G__32774_34899,G__32774_34900__$1,n__4741__auto___34897,jobs,results,process,async))
;
return ((function (__34898,switch__32084__auto__,c__32384__auto___34902,G__32774_34899,G__32774_34900__$1,n__4741__auto___34897,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32085__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32085__auto____0 = (function (){
var statearr_32829 = [null,null,null,null,null,null,null];
(statearr_32829[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32085__auto__);

(statearr_32829[(1)] = (1));

return statearr_32829;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32085__auto____1 = (function (state_32787){
while(true){
var ret_value__32086__auto__ = (function (){try{while(true){
var result__32087__auto__ = switch__32084__auto__(state_32787);
if(cljs.core.keyword_identical_QMARK_(result__32087__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32087__auto__;
}
break;
}
}catch (e32830){var ex__32088__auto__ = e32830;
var statearr_32832_34916 = state_32787;
(statearr_32832_34916[(2)] = ex__32088__auto__);


if(cljs.core.seq((state_32787[(4)]))){
var statearr_32833_34917 = state_32787;
(statearr_32833_34917[(1)] = cljs.core.first((state_32787[(4)])));

} else {
throw ex__32088__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32086__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34918 = state_32787;
state_32787 = G__34918;
continue;
} else {
return ret_value__32086__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32085__auto__ = function(state_32787){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32085__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32085__auto____1.call(this,state_32787);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32085__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32085__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32085__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32085__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32085__auto__;
})()
;})(__34898,switch__32084__auto__,c__32384__auto___34902,G__32774_34899,G__32774_34900__$1,n__4741__auto___34897,jobs,results,process,async))
})();
var state__32386__auto__ = (function (){var statearr_32834 = f__32385__auto__();
(statearr_32834[(6)] = c__32384__auto___34902);

return statearr_32834;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32386__auto__);
});})(__34898,c__32384__auto___34902,G__32774_34899,G__32774_34900__$1,n__4741__auto___34897,jobs,results,process,async))
);


break;
case "async":
var c__32384__auto___34919 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__34898,c__32384__auto___34919,G__32774_34899,G__32774_34900__$1,n__4741__auto___34897,jobs,results,process,async){
return (function (){
var f__32385__auto__ = (function (){var switch__32084__auto__ = ((function (__34898,c__32384__auto___34919,G__32774_34899,G__32774_34900__$1,n__4741__auto___34897,jobs,results,process,async){
return (function (state_32847){
var state_val_32848 = (state_32847[(1)]);
if((state_val_32848 === (1))){
var state_32847__$1 = state_32847;
var statearr_32849_34920 = state_32847__$1;
(statearr_32849_34920[(2)] = null);

(statearr_32849_34920[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32848 === (2))){
var state_32847__$1 = state_32847;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32847__$1,(4),jobs);
} else {
if((state_val_32848 === (3))){
var inst_32845 = (state_32847[(2)]);
var state_32847__$1 = state_32847;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32847__$1,inst_32845);
} else {
if((state_val_32848 === (4))){
var inst_32837 = (state_32847[(2)]);
var inst_32838 = async(inst_32837);
var state_32847__$1 = state_32847;
if(cljs.core.truth_(inst_32838)){
var statearr_32851_34921 = state_32847__$1;
(statearr_32851_34921[(1)] = (5));

} else {
var statearr_32852_34922 = state_32847__$1;
(statearr_32852_34922[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32848 === (5))){
var state_32847__$1 = state_32847;
var statearr_32853_34923 = state_32847__$1;
(statearr_32853_34923[(2)] = null);

(statearr_32853_34923[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32848 === (6))){
var state_32847__$1 = state_32847;
var statearr_32854_34924 = state_32847__$1;
(statearr_32854_34924[(2)] = null);

(statearr_32854_34924[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32848 === (7))){
var inst_32843 = (state_32847[(2)]);
var state_32847__$1 = state_32847;
var statearr_32855_34925 = state_32847__$1;
(statearr_32855_34925[(2)] = inst_32843);

(statearr_32855_34925[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__34898,c__32384__auto___34919,G__32774_34899,G__32774_34900__$1,n__4741__auto___34897,jobs,results,process,async))
;
return ((function (__34898,switch__32084__auto__,c__32384__auto___34919,G__32774_34899,G__32774_34900__$1,n__4741__auto___34897,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32085__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32085__auto____0 = (function (){
var statearr_32856 = [null,null,null,null,null,null,null];
(statearr_32856[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32085__auto__);

(statearr_32856[(1)] = (1));

return statearr_32856;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32085__auto____1 = (function (state_32847){
while(true){
var ret_value__32086__auto__ = (function (){try{while(true){
var result__32087__auto__ = switch__32084__auto__(state_32847);
if(cljs.core.keyword_identical_QMARK_(result__32087__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32087__auto__;
}
break;
}
}catch (e32858){var ex__32088__auto__ = e32858;
var statearr_32859_34926 = state_32847;
(statearr_32859_34926[(2)] = ex__32088__auto__);


if(cljs.core.seq((state_32847[(4)]))){
var statearr_32860_34927 = state_32847;
(statearr_32860_34927[(1)] = cljs.core.first((state_32847[(4)])));

} else {
throw ex__32088__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32086__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34928 = state_32847;
state_32847 = G__34928;
continue;
} else {
return ret_value__32086__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32085__auto__ = function(state_32847){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32085__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32085__auto____1.call(this,state_32847);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32085__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32085__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32085__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32085__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32085__auto__;
})()
;})(__34898,switch__32084__auto__,c__32384__auto___34919,G__32774_34899,G__32774_34900__$1,n__4741__auto___34897,jobs,results,process,async))
})();
var state__32386__auto__ = (function (){var statearr_32861 = f__32385__auto__();
(statearr_32861[(6)] = c__32384__auto___34919);

return statearr_32861;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32386__auto__);
});})(__34898,c__32384__auto___34919,G__32774_34899,G__32774_34900__$1,n__4741__auto___34897,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__32774_34900__$1)].join('')));

}

var G__34930 = (__34898 + (1));
__34898 = G__34930;
continue;
} else {
}
break;
}

var c__32384__auto___34931 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32385__auto__ = (function (){var switch__32084__auto__ = (function (state_32884){
var state_val_32885 = (state_32884[(1)]);
if((state_val_32885 === (7))){
var inst_32880 = (state_32884[(2)]);
var state_32884__$1 = state_32884;
var statearr_32886_34933 = state_32884__$1;
(statearr_32886_34933[(2)] = inst_32880);

(statearr_32886_34933[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32885 === (1))){
var state_32884__$1 = state_32884;
var statearr_32887_34934 = state_32884__$1;
(statearr_32887_34934[(2)] = null);

(statearr_32887_34934[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32885 === (4))){
var inst_32864 = (state_32884[(7)]);
var inst_32864__$1 = (state_32884[(2)]);
var inst_32865 = (inst_32864__$1 == null);
var state_32884__$1 = (function (){var statearr_32889 = state_32884;
(statearr_32889[(7)] = inst_32864__$1);

return statearr_32889;
})();
if(cljs.core.truth_(inst_32865)){
var statearr_32890_34935 = state_32884__$1;
(statearr_32890_34935[(1)] = (5));

} else {
var statearr_32891_34936 = state_32884__$1;
(statearr_32891_34936[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32885 === (6))){
var inst_32864 = (state_32884[(7)]);
var inst_32869 = (state_32884[(8)]);
var inst_32869__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_32870 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_32872 = [inst_32864,inst_32869__$1];
var inst_32873 = (new cljs.core.PersistentVector(null,2,(5),inst_32870,inst_32872,null));
var state_32884__$1 = (function (){var statearr_32892 = state_32884;
(statearr_32892[(8)] = inst_32869__$1);

return statearr_32892;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32884__$1,(8),jobs,inst_32873);
} else {
if((state_val_32885 === (3))){
var inst_32882 = (state_32884[(2)]);
var state_32884__$1 = state_32884;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32884__$1,inst_32882);
} else {
if((state_val_32885 === (2))){
var state_32884__$1 = state_32884;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32884__$1,(4),from);
} else {
if((state_val_32885 === (9))){
var inst_32877 = (state_32884[(2)]);
var state_32884__$1 = (function (){var statearr_32893 = state_32884;
(statearr_32893[(9)] = inst_32877);

return statearr_32893;
})();
var statearr_32894_34937 = state_32884__$1;
(statearr_32894_34937[(2)] = null);

(statearr_32894_34937[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32885 === (5))){
var inst_32867 = cljs.core.async.close_BANG_(jobs);
var state_32884__$1 = state_32884;
var statearr_32896_34938 = state_32884__$1;
(statearr_32896_34938[(2)] = inst_32867);

(statearr_32896_34938[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32885 === (8))){
var inst_32869 = (state_32884[(8)]);
var inst_32875 = (state_32884[(2)]);
var state_32884__$1 = (function (){var statearr_32897 = state_32884;
(statearr_32897[(10)] = inst_32875);

return statearr_32897;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32884__$1,(9),results,inst_32869);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32085__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32085__auto____0 = (function (){
var statearr_32898 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32898[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32085__auto__);

(statearr_32898[(1)] = (1));

return statearr_32898;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32085__auto____1 = (function (state_32884){
while(true){
var ret_value__32086__auto__ = (function (){try{while(true){
var result__32087__auto__ = switch__32084__auto__(state_32884);
if(cljs.core.keyword_identical_QMARK_(result__32087__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32087__auto__;
}
break;
}
}catch (e32899){var ex__32088__auto__ = e32899;
var statearr_32900_34940 = state_32884;
(statearr_32900_34940[(2)] = ex__32088__auto__);


if(cljs.core.seq((state_32884[(4)]))){
var statearr_32901_34944 = state_32884;
(statearr_32901_34944[(1)] = cljs.core.first((state_32884[(4)])));

} else {
throw ex__32088__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32086__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34948 = state_32884;
state_32884 = G__34948;
continue;
} else {
return ret_value__32086__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32085__auto__ = function(state_32884){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32085__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32085__auto____1.call(this,state_32884);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32085__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32085__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32085__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32085__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32085__auto__;
})()
})();
var state__32386__auto__ = (function (){var statearr_32902 = f__32385__auto__();
(statearr_32902[(6)] = c__32384__auto___34931);

return statearr_32902;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32386__auto__);
}));


var c__32384__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32385__auto__ = (function (){var switch__32084__auto__ = (function (state_32941){
var state_val_32942 = (state_32941[(1)]);
if((state_val_32942 === (7))){
var inst_32937 = (state_32941[(2)]);
var state_32941__$1 = state_32941;
var statearr_32943_34949 = state_32941__$1;
(statearr_32943_34949[(2)] = inst_32937);

(statearr_32943_34949[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32942 === (20))){
var state_32941__$1 = state_32941;
var statearr_32945_34950 = state_32941__$1;
(statearr_32945_34950[(2)] = null);

(statearr_32945_34950[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32942 === (1))){
var state_32941__$1 = state_32941;
var statearr_32946_34954 = state_32941__$1;
(statearr_32946_34954[(2)] = null);

(statearr_32946_34954[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32942 === (4))){
var inst_32906 = (state_32941[(7)]);
var inst_32906__$1 = (state_32941[(2)]);
var inst_32907 = (inst_32906__$1 == null);
var state_32941__$1 = (function (){var statearr_32947 = state_32941;
(statearr_32947[(7)] = inst_32906__$1);

return statearr_32947;
})();
if(cljs.core.truth_(inst_32907)){
var statearr_32948_34959 = state_32941__$1;
(statearr_32948_34959[(1)] = (5));

} else {
var statearr_32949_34963 = state_32941__$1;
(statearr_32949_34963[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32942 === (15))){
var inst_32919 = (state_32941[(8)]);
var state_32941__$1 = state_32941;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32941__$1,(18),to,inst_32919);
} else {
if((state_val_32942 === (21))){
var inst_32932 = (state_32941[(2)]);
var state_32941__$1 = state_32941;
var statearr_32950_34967 = state_32941__$1;
(statearr_32950_34967[(2)] = inst_32932);

(statearr_32950_34967[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32942 === (13))){
var inst_32934 = (state_32941[(2)]);
var state_32941__$1 = (function (){var statearr_32951 = state_32941;
(statearr_32951[(9)] = inst_32934);

return statearr_32951;
})();
var statearr_32952_34972 = state_32941__$1;
(statearr_32952_34972[(2)] = null);

(statearr_32952_34972[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32942 === (6))){
var inst_32906 = (state_32941[(7)]);
var state_32941__$1 = state_32941;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32941__$1,(11),inst_32906);
} else {
if((state_val_32942 === (17))){
var inst_32927 = (state_32941[(2)]);
var state_32941__$1 = state_32941;
if(cljs.core.truth_(inst_32927)){
var statearr_32954_34976 = state_32941__$1;
(statearr_32954_34976[(1)] = (19));

} else {
var statearr_32955_34977 = state_32941__$1;
(statearr_32955_34977[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32942 === (3))){
var inst_32939 = (state_32941[(2)]);
var state_32941__$1 = state_32941;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32941__$1,inst_32939);
} else {
if((state_val_32942 === (12))){
var inst_32916 = (state_32941[(10)]);
var state_32941__$1 = state_32941;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32941__$1,(14),inst_32916);
} else {
if((state_val_32942 === (2))){
var state_32941__$1 = state_32941;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32941__$1,(4),results);
} else {
if((state_val_32942 === (19))){
var state_32941__$1 = state_32941;
var statearr_32956_34978 = state_32941__$1;
(statearr_32956_34978[(2)] = null);

(statearr_32956_34978[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32942 === (11))){
var inst_32916 = (state_32941[(2)]);
var state_32941__$1 = (function (){var statearr_32957 = state_32941;
(statearr_32957[(10)] = inst_32916);

return statearr_32957;
})();
var statearr_32958_34979 = state_32941__$1;
(statearr_32958_34979[(2)] = null);

(statearr_32958_34979[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32942 === (9))){
var state_32941__$1 = state_32941;
var statearr_32959_34983 = state_32941__$1;
(statearr_32959_34983[(2)] = null);

(statearr_32959_34983[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32942 === (5))){
var state_32941__$1 = state_32941;
if(cljs.core.truth_(close_QMARK_)){
var statearr_32960_34987 = state_32941__$1;
(statearr_32960_34987[(1)] = (8));

} else {
var statearr_32961_34988 = state_32941__$1;
(statearr_32961_34988[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32942 === (14))){
var inst_32921 = (state_32941[(11)]);
var inst_32919 = (state_32941[(8)]);
var inst_32919__$1 = (state_32941[(2)]);
var inst_32920 = (inst_32919__$1 == null);
var inst_32921__$1 = cljs.core.not(inst_32920);
var state_32941__$1 = (function (){var statearr_32963 = state_32941;
(statearr_32963[(11)] = inst_32921__$1);

(statearr_32963[(8)] = inst_32919__$1);

return statearr_32963;
})();
if(inst_32921__$1){
var statearr_32964_34992 = state_32941__$1;
(statearr_32964_34992[(1)] = (15));

} else {
var statearr_32965_34993 = state_32941__$1;
(statearr_32965_34993[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32942 === (16))){
var inst_32921 = (state_32941[(11)]);
var state_32941__$1 = state_32941;
var statearr_32966_34997 = state_32941__$1;
(statearr_32966_34997[(2)] = inst_32921);

(statearr_32966_34997[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32942 === (10))){
var inst_32913 = (state_32941[(2)]);
var state_32941__$1 = state_32941;
var statearr_32967_34998 = state_32941__$1;
(statearr_32967_34998[(2)] = inst_32913);

(statearr_32967_34998[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32942 === (18))){
var inst_32924 = (state_32941[(2)]);
var state_32941__$1 = state_32941;
var statearr_32968_34999 = state_32941__$1;
(statearr_32968_34999[(2)] = inst_32924);

(statearr_32968_34999[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32942 === (8))){
var inst_32910 = cljs.core.async.close_BANG_(to);
var state_32941__$1 = state_32941;
var statearr_32969_35000 = state_32941__$1;
(statearr_32969_35000[(2)] = inst_32910);

(statearr_32969_35000[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32085__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32085__auto____0 = (function (){
var statearr_32971 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32971[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32085__auto__);

(statearr_32971[(1)] = (1));

return statearr_32971;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32085__auto____1 = (function (state_32941){
while(true){
var ret_value__32086__auto__ = (function (){try{while(true){
var result__32087__auto__ = switch__32084__auto__(state_32941);
if(cljs.core.keyword_identical_QMARK_(result__32087__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32087__auto__;
}
break;
}
}catch (e32972){var ex__32088__auto__ = e32972;
var statearr_32973_35001 = state_32941;
(statearr_32973_35001[(2)] = ex__32088__auto__);


if(cljs.core.seq((state_32941[(4)]))){
var statearr_32974_35002 = state_32941;
(statearr_32974_35002[(1)] = cljs.core.first((state_32941[(4)])));

} else {
throw ex__32088__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32086__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35004 = state_32941;
state_32941 = G__35004;
continue;
} else {
return ret_value__32086__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32085__auto__ = function(state_32941){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32085__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32085__auto____1.call(this,state_32941);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32085__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32085__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32085__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32085__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32085__auto__;
})()
})();
var state__32386__auto__ = (function (){var statearr_32975 = f__32385__auto__();
(statearr_32975[(6)] = c__32384__auto__);

return statearr_32975;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32386__auto__);
}));

return c__32384__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__32977 = arguments.length;
switch (G__32977) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__32980 = arguments.length;
switch (G__32980) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__32984 = arguments.length;
switch (G__32984) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__32384__auto___35009 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32385__auto__ = (function (){var switch__32084__auto__ = (function (state_33010){
var state_val_33011 = (state_33010[(1)]);
if((state_val_33011 === (7))){
var inst_33006 = (state_33010[(2)]);
var state_33010__$1 = state_33010;
var statearr_33013_35010 = state_33010__$1;
(statearr_33013_35010[(2)] = inst_33006);

(statearr_33013_35010[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33011 === (1))){
var state_33010__$1 = state_33010;
var statearr_33014_35011 = state_33010__$1;
(statearr_33014_35011[(2)] = null);

(statearr_33014_35011[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33011 === (4))){
var inst_32987 = (state_33010[(7)]);
var inst_32987__$1 = (state_33010[(2)]);
var inst_32988 = (inst_32987__$1 == null);
var state_33010__$1 = (function (){var statearr_33015 = state_33010;
(statearr_33015[(7)] = inst_32987__$1);

return statearr_33015;
})();
if(cljs.core.truth_(inst_32988)){
var statearr_33016_35012 = state_33010__$1;
(statearr_33016_35012[(1)] = (5));

} else {
var statearr_33017_35013 = state_33010__$1;
(statearr_33017_35013[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33011 === (13))){
var state_33010__$1 = state_33010;
var statearr_33018_35014 = state_33010__$1;
(statearr_33018_35014[(2)] = null);

(statearr_33018_35014[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33011 === (6))){
var inst_32987 = (state_33010[(7)]);
var inst_32993 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_32987) : p.call(null,inst_32987));
var state_33010__$1 = state_33010;
if(cljs.core.truth_(inst_32993)){
var statearr_33019_35015 = state_33010__$1;
(statearr_33019_35015[(1)] = (9));

} else {
var statearr_33021_35016 = state_33010__$1;
(statearr_33021_35016[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33011 === (3))){
var inst_33008 = (state_33010[(2)]);
var state_33010__$1 = state_33010;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33010__$1,inst_33008);
} else {
if((state_val_33011 === (12))){
var state_33010__$1 = state_33010;
var statearr_33022_35017 = state_33010__$1;
(statearr_33022_35017[(2)] = null);

(statearr_33022_35017[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33011 === (2))){
var state_33010__$1 = state_33010;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33010__$1,(4),ch);
} else {
if((state_val_33011 === (11))){
var inst_32987 = (state_33010[(7)]);
var inst_32997 = (state_33010[(2)]);
var state_33010__$1 = state_33010;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33010__$1,(8),inst_32997,inst_32987);
} else {
if((state_val_33011 === (9))){
var state_33010__$1 = state_33010;
var statearr_33023_35018 = state_33010__$1;
(statearr_33023_35018[(2)] = tc);

(statearr_33023_35018[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33011 === (5))){
var inst_32990 = cljs.core.async.close_BANG_(tc);
var inst_32991 = cljs.core.async.close_BANG_(fc);
var state_33010__$1 = (function (){var statearr_33024 = state_33010;
(statearr_33024[(8)] = inst_32990);

return statearr_33024;
})();
var statearr_33025_35023 = state_33010__$1;
(statearr_33025_35023[(2)] = inst_32991);

(statearr_33025_35023[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33011 === (14))){
var inst_33004 = (state_33010[(2)]);
var state_33010__$1 = state_33010;
var statearr_33026_35024 = state_33010__$1;
(statearr_33026_35024[(2)] = inst_33004);

(statearr_33026_35024[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33011 === (10))){
var state_33010__$1 = state_33010;
var statearr_33027_35025 = state_33010__$1;
(statearr_33027_35025[(2)] = fc);

(statearr_33027_35025[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33011 === (8))){
var inst_32999 = (state_33010[(2)]);
var state_33010__$1 = state_33010;
if(cljs.core.truth_(inst_32999)){
var statearr_33029_35030 = state_33010__$1;
(statearr_33029_35030[(1)] = (12));

} else {
var statearr_33030_35031 = state_33010__$1;
(statearr_33030_35031[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__32085__auto__ = null;
var cljs$core$async$state_machine__32085__auto____0 = (function (){
var statearr_33031 = [null,null,null,null,null,null,null,null,null];
(statearr_33031[(0)] = cljs$core$async$state_machine__32085__auto__);

(statearr_33031[(1)] = (1));

return statearr_33031;
});
var cljs$core$async$state_machine__32085__auto____1 = (function (state_33010){
while(true){
var ret_value__32086__auto__ = (function (){try{while(true){
var result__32087__auto__ = switch__32084__auto__(state_33010);
if(cljs.core.keyword_identical_QMARK_(result__32087__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32087__auto__;
}
break;
}
}catch (e33032){var ex__32088__auto__ = e33032;
var statearr_33033_35032 = state_33010;
(statearr_33033_35032[(2)] = ex__32088__auto__);


if(cljs.core.seq((state_33010[(4)]))){
var statearr_33034_35033 = state_33010;
(statearr_33034_35033[(1)] = cljs.core.first((state_33010[(4)])));

} else {
throw ex__32088__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32086__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35034 = state_33010;
state_33010 = G__35034;
continue;
} else {
return ret_value__32086__auto__;
}
break;
}
});
cljs$core$async$state_machine__32085__auto__ = function(state_33010){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32085__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32085__auto____1.call(this,state_33010);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32085__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32085__auto____0;
cljs$core$async$state_machine__32085__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32085__auto____1;
return cljs$core$async$state_machine__32085__auto__;
})()
})();
var state__32386__auto__ = (function (){var statearr_33035 = f__32385__auto__();
(statearr_33035[(6)] = c__32384__auto___35009);

return statearr_33035;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32386__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__32384__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32385__auto__ = (function (){var switch__32084__auto__ = (function (state_33058){
var state_val_33059 = (state_33058[(1)]);
if((state_val_33059 === (7))){
var inst_33054 = (state_33058[(2)]);
var state_33058__$1 = state_33058;
var statearr_33061_35040 = state_33058__$1;
(statearr_33061_35040[(2)] = inst_33054);

(statearr_33061_35040[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33059 === (1))){
var inst_33037 = init;
var inst_33038 = inst_33037;
var state_33058__$1 = (function (){var statearr_33062 = state_33058;
(statearr_33062[(7)] = inst_33038);

return statearr_33062;
})();
var statearr_33063_35041 = state_33058__$1;
(statearr_33063_35041[(2)] = null);

(statearr_33063_35041[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33059 === (4))){
var inst_33041 = (state_33058[(8)]);
var inst_33041__$1 = (state_33058[(2)]);
var inst_33042 = (inst_33041__$1 == null);
var state_33058__$1 = (function (){var statearr_33064 = state_33058;
(statearr_33064[(8)] = inst_33041__$1);

return statearr_33064;
})();
if(cljs.core.truth_(inst_33042)){
var statearr_33065_35043 = state_33058__$1;
(statearr_33065_35043[(1)] = (5));

} else {
var statearr_33066_35044 = state_33058__$1;
(statearr_33066_35044[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33059 === (6))){
var inst_33041 = (state_33058[(8)]);
var inst_33038 = (state_33058[(7)]);
var inst_33045 = (state_33058[(9)]);
var inst_33045__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_33038,inst_33041) : f.call(null,inst_33038,inst_33041));
var inst_33046 = cljs.core.reduced_QMARK_(inst_33045__$1);
var state_33058__$1 = (function (){var statearr_33067 = state_33058;
(statearr_33067[(9)] = inst_33045__$1);

return statearr_33067;
})();
if(inst_33046){
var statearr_33068_35046 = state_33058__$1;
(statearr_33068_35046[(1)] = (8));

} else {
var statearr_33069_35047 = state_33058__$1;
(statearr_33069_35047[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33059 === (3))){
var inst_33056 = (state_33058[(2)]);
var state_33058__$1 = state_33058;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33058__$1,inst_33056);
} else {
if((state_val_33059 === (2))){
var state_33058__$1 = state_33058;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33058__$1,(4),ch);
} else {
if((state_val_33059 === (9))){
var inst_33045 = (state_33058[(9)]);
var inst_33038 = inst_33045;
var state_33058__$1 = (function (){var statearr_33071 = state_33058;
(statearr_33071[(7)] = inst_33038);

return statearr_33071;
})();
var statearr_33072_35049 = state_33058__$1;
(statearr_33072_35049[(2)] = null);

(statearr_33072_35049[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33059 === (5))){
var inst_33038 = (state_33058[(7)]);
var state_33058__$1 = state_33058;
var statearr_33073_35050 = state_33058__$1;
(statearr_33073_35050[(2)] = inst_33038);

(statearr_33073_35050[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33059 === (10))){
var inst_33052 = (state_33058[(2)]);
var state_33058__$1 = state_33058;
var statearr_33074_35051 = state_33058__$1;
(statearr_33074_35051[(2)] = inst_33052);

(statearr_33074_35051[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33059 === (8))){
var inst_33045 = (state_33058[(9)]);
var inst_33048 = cljs.core.deref(inst_33045);
var state_33058__$1 = state_33058;
var statearr_33075_35053 = state_33058__$1;
(statearr_33075_35053[(2)] = inst_33048);

(statearr_33075_35053[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
});
return (function() {
var cljs$core$async$reduce_$_state_machine__32085__auto__ = null;
var cljs$core$async$reduce_$_state_machine__32085__auto____0 = (function (){
var statearr_33077 = [null,null,null,null,null,null,null,null,null,null];
(statearr_33077[(0)] = cljs$core$async$reduce_$_state_machine__32085__auto__);

(statearr_33077[(1)] = (1));

return statearr_33077;
});
var cljs$core$async$reduce_$_state_machine__32085__auto____1 = (function (state_33058){
while(true){
var ret_value__32086__auto__ = (function (){try{while(true){
var result__32087__auto__ = switch__32084__auto__(state_33058);
if(cljs.core.keyword_identical_QMARK_(result__32087__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32087__auto__;
}
break;
}
}catch (e33078){var ex__32088__auto__ = e33078;
var statearr_33079_35055 = state_33058;
(statearr_33079_35055[(2)] = ex__32088__auto__);


if(cljs.core.seq((state_33058[(4)]))){
var statearr_33080_35056 = state_33058;
(statearr_33080_35056[(1)] = cljs.core.first((state_33058[(4)])));

} else {
throw ex__32088__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32086__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35057 = state_33058;
state_33058 = G__35057;
continue;
} else {
return ret_value__32086__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__32085__auto__ = function(state_33058){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__32085__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__32085__auto____1.call(this,state_33058);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__32085__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__32085__auto____0;
cljs$core$async$reduce_$_state_machine__32085__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__32085__auto____1;
return cljs$core$async$reduce_$_state_machine__32085__auto__;
})()
})();
var state__32386__auto__ = (function (){var statearr_33081 = f__32385__auto__();
(statearr_33081[(6)] = c__32384__auto__);

return statearr_33081;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32386__auto__);
}));

return c__32384__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__32384__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32385__auto__ = (function (){var switch__32084__auto__ = (function (state_33088){
var state_val_33089 = (state_33088[(1)]);
if((state_val_33089 === (1))){
var inst_33082 = cljs.core.async.reduce(f__$1,init,ch);
var state_33088__$1 = state_33088;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33088__$1,(2),inst_33082);
} else {
if((state_val_33089 === (2))){
var inst_33085 = (state_33088[(2)]);
var inst_33086 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_33085) : f__$1.call(null,inst_33085));
var state_33088__$1 = state_33088;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33088__$1,inst_33086);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__32085__auto__ = null;
var cljs$core$async$transduce_$_state_machine__32085__auto____0 = (function (){
var statearr_33090 = [null,null,null,null,null,null,null];
(statearr_33090[(0)] = cljs$core$async$transduce_$_state_machine__32085__auto__);

(statearr_33090[(1)] = (1));

return statearr_33090;
});
var cljs$core$async$transduce_$_state_machine__32085__auto____1 = (function (state_33088){
while(true){
var ret_value__32086__auto__ = (function (){try{while(true){
var result__32087__auto__ = switch__32084__auto__(state_33088);
if(cljs.core.keyword_identical_QMARK_(result__32087__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32087__auto__;
}
break;
}
}catch (e33091){var ex__32088__auto__ = e33091;
var statearr_33092_35066 = state_33088;
(statearr_33092_35066[(2)] = ex__32088__auto__);


if(cljs.core.seq((state_33088[(4)]))){
var statearr_33093_35067 = state_33088;
(statearr_33093_35067[(1)] = cljs.core.first((state_33088[(4)])));

} else {
throw ex__32088__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32086__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35068 = state_33088;
state_33088 = G__35068;
continue;
} else {
return ret_value__32086__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__32085__auto__ = function(state_33088){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__32085__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__32085__auto____1.call(this,state_33088);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__32085__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__32085__auto____0;
cljs$core$async$transduce_$_state_machine__32085__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__32085__auto____1;
return cljs$core$async$transduce_$_state_machine__32085__auto__;
})()
})();
var state__32386__auto__ = (function (){var statearr_33094 = f__32385__auto__();
(statearr_33094[(6)] = c__32384__auto__);

return statearr_33094;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32386__auto__);
}));

return c__32384__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__33097 = arguments.length;
switch (G__33097) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__32384__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32385__auto__ = (function (){var switch__32084__auto__ = (function (state_33122){
var state_val_33123 = (state_33122[(1)]);
if((state_val_33123 === (7))){
var inst_33104 = (state_33122[(2)]);
var state_33122__$1 = state_33122;
var statearr_33125_35083 = state_33122__$1;
(statearr_33125_35083[(2)] = inst_33104);

(statearr_33125_35083[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33123 === (1))){
var inst_33098 = cljs.core.seq(coll);
var inst_33099 = inst_33098;
var state_33122__$1 = (function (){var statearr_33126 = state_33122;
(statearr_33126[(7)] = inst_33099);

return statearr_33126;
})();
var statearr_33127_35084 = state_33122__$1;
(statearr_33127_35084[(2)] = null);

(statearr_33127_35084[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33123 === (4))){
var inst_33099 = (state_33122[(7)]);
var inst_33102 = cljs.core.first(inst_33099);
var state_33122__$1 = state_33122;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33122__$1,(7),ch,inst_33102);
} else {
if((state_val_33123 === (13))){
var inst_33116 = (state_33122[(2)]);
var state_33122__$1 = state_33122;
var statearr_33128_35085 = state_33122__$1;
(statearr_33128_35085[(2)] = inst_33116);

(statearr_33128_35085[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33123 === (6))){
var inst_33107 = (state_33122[(2)]);
var state_33122__$1 = state_33122;
if(cljs.core.truth_(inst_33107)){
var statearr_33129_35086 = state_33122__$1;
(statearr_33129_35086[(1)] = (8));

} else {
var statearr_33130_35087 = state_33122__$1;
(statearr_33130_35087[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33123 === (3))){
var inst_33120 = (state_33122[(2)]);
var state_33122__$1 = state_33122;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33122__$1,inst_33120);
} else {
if((state_val_33123 === (12))){
var state_33122__$1 = state_33122;
var statearr_33132_35088 = state_33122__$1;
(statearr_33132_35088[(2)] = null);

(statearr_33132_35088[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33123 === (2))){
var inst_33099 = (state_33122[(7)]);
var state_33122__$1 = state_33122;
if(cljs.core.truth_(inst_33099)){
var statearr_33133_35089 = state_33122__$1;
(statearr_33133_35089[(1)] = (4));

} else {
var statearr_33134_35090 = state_33122__$1;
(statearr_33134_35090[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33123 === (11))){
var inst_33113 = cljs.core.async.close_BANG_(ch);
var state_33122__$1 = state_33122;
var statearr_33135_35091 = state_33122__$1;
(statearr_33135_35091[(2)] = inst_33113);

(statearr_33135_35091[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33123 === (9))){
var state_33122__$1 = state_33122;
if(cljs.core.truth_(close_QMARK_)){
var statearr_33136_35092 = state_33122__$1;
(statearr_33136_35092[(1)] = (11));

} else {
var statearr_33137_35093 = state_33122__$1;
(statearr_33137_35093[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33123 === (5))){
var inst_33099 = (state_33122[(7)]);
var state_33122__$1 = state_33122;
var statearr_33138_35094 = state_33122__$1;
(statearr_33138_35094[(2)] = inst_33099);

(statearr_33138_35094[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33123 === (10))){
var inst_33118 = (state_33122[(2)]);
var state_33122__$1 = state_33122;
var statearr_33139_35095 = state_33122__$1;
(statearr_33139_35095[(2)] = inst_33118);

(statearr_33139_35095[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33123 === (8))){
var inst_33099 = (state_33122[(7)]);
var inst_33109 = cljs.core.next(inst_33099);
var inst_33099__$1 = inst_33109;
var state_33122__$1 = (function (){var statearr_33141 = state_33122;
(statearr_33141[(7)] = inst_33099__$1);

return statearr_33141;
})();
var statearr_33142_35096 = state_33122__$1;
(statearr_33142_35096[(2)] = null);

(statearr_33142_35096[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
}
}
}
});
return (function() {
var cljs$core$async$state_machine__32085__auto__ = null;
var cljs$core$async$state_machine__32085__auto____0 = (function (){
var statearr_33143 = [null,null,null,null,null,null,null,null];
(statearr_33143[(0)] = cljs$core$async$state_machine__32085__auto__);

(statearr_33143[(1)] = (1));

return statearr_33143;
});
var cljs$core$async$state_machine__32085__auto____1 = (function (state_33122){
while(true){
var ret_value__32086__auto__ = (function (){try{while(true){
var result__32087__auto__ = switch__32084__auto__(state_33122);
if(cljs.core.keyword_identical_QMARK_(result__32087__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32087__auto__;
}
break;
}
}catch (e33144){var ex__32088__auto__ = e33144;
var statearr_33145_35097 = state_33122;
(statearr_33145_35097[(2)] = ex__32088__auto__);


if(cljs.core.seq((state_33122[(4)]))){
var statearr_33146_35098 = state_33122;
(statearr_33146_35098[(1)] = cljs.core.first((state_33122[(4)])));

} else {
throw ex__32088__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32086__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35105 = state_33122;
state_33122 = G__35105;
continue;
} else {
return ret_value__32086__auto__;
}
break;
}
});
cljs$core$async$state_machine__32085__auto__ = function(state_33122){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32085__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32085__auto____1.call(this,state_33122);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32085__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32085__auto____0;
cljs$core$async$state_machine__32085__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32085__auto____1;
return cljs$core$async$state_machine__32085__auto__;
})()
})();
var state__32386__auto__ = (function (){var statearr_33147 = f__32385__auto__();
(statearr_33147[(6)] = c__32384__auto__);

return statearr_33147;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32386__auto__);
}));

return c__32384__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__33150 = arguments.length;
switch (G__33150) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_35107 = (function (_){
var x__4550__auto__ = (((_ == null))?null:_);
var m__4551__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4551__auto__.call(null,_));
} else {
var m__4549__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4549__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_35107(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_35112 = (function (m,ch,close_QMARK_){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4551__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4549__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4549__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_35112(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_35116 = (function (m,ch){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4551__auto__.call(null,m,ch));
} else {
var m__4549__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4549__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_35116(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_35123 = (function (m){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4551__auto__.call(null,m));
} else {
var m__4549__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4549__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_35123(m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33155 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33155 = (function (ch,cs,meta33156){
this.ch = ch;
this.cs = cs;
this.meta33156 = meta33156;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33155.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33157,meta33156__$1){
var self__ = this;
var _33157__$1 = this;
return (new cljs.core.async.t_cljs$core$async33155(self__.ch,self__.cs,meta33156__$1));
}));

(cljs.core.async.t_cljs$core$async33155.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33157){
var self__ = this;
var _33157__$1 = this;
return self__.meta33156;
}));

(cljs.core.async.t_cljs$core$async33155.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33155.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async33155.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33155.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async33155.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async33155.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async33155.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta33156","meta33156",-1236489379,null)], null);
}));

(cljs.core.async.t_cljs$core$async33155.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33155.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33155");

(cljs.core.async.t_cljs$core$async33155.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async33155");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33155.
 */
cljs.core.async.__GT_t_cljs$core$async33155 = (function cljs$core$async$mult_$___GT_t_cljs$core$async33155(ch__$1,cs__$1,meta33156){
return (new cljs.core.async.t_cljs$core$async33155(ch__$1,cs__$1,meta33156));
});

}

return (new cljs.core.async.t_cljs$core$async33155(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__32384__auto___35125 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32385__auto__ = (function (){var switch__32084__auto__ = (function (state_33295){
var state_val_33296 = (state_33295[(1)]);
if((state_val_33296 === (7))){
var inst_33291 = (state_33295[(2)]);
var state_33295__$1 = state_33295;
var statearr_33299_35132 = state_33295__$1;
(statearr_33299_35132[(2)] = inst_33291);

(statearr_33299_35132[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33296 === (20))){
var inst_33196 = (state_33295[(7)]);
var inst_33208 = cljs.core.first(inst_33196);
var inst_33209 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33208,(0),null);
var inst_33210 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33208,(1),null);
var state_33295__$1 = (function (){var statearr_33300 = state_33295;
(statearr_33300[(8)] = inst_33209);

return statearr_33300;
})();
if(cljs.core.truth_(inst_33210)){
var statearr_33301_35133 = state_33295__$1;
(statearr_33301_35133[(1)] = (22));

} else {
var statearr_33302_35134 = state_33295__$1;
(statearr_33302_35134[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33296 === (27))){
var inst_33238 = (state_33295[(9)]);
var inst_33163 = (state_33295[(10)]);
var inst_33245 = (state_33295[(11)]);
var inst_33240 = (state_33295[(12)]);
var inst_33245__$1 = cljs.core._nth(inst_33238,inst_33240);
var inst_33246 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_33245__$1,inst_33163,done);
var state_33295__$1 = (function (){var statearr_33303 = state_33295;
(statearr_33303[(11)] = inst_33245__$1);

return statearr_33303;
})();
if(cljs.core.truth_(inst_33246)){
var statearr_33304_35135 = state_33295__$1;
(statearr_33304_35135[(1)] = (30));

} else {
var statearr_33305_35136 = state_33295__$1;
(statearr_33305_35136[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33296 === (1))){
var state_33295__$1 = state_33295;
var statearr_33306_35137 = state_33295__$1;
(statearr_33306_35137[(2)] = null);

(statearr_33306_35137[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33296 === (24))){
var inst_33196 = (state_33295[(7)]);
var inst_33215 = (state_33295[(2)]);
var inst_33216 = cljs.core.next(inst_33196);
var inst_33172 = inst_33216;
var inst_33173 = null;
var inst_33174 = (0);
var inst_33175 = (0);
var state_33295__$1 = (function (){var statearr_33307 = state_33295;
(statearr_33307[(13)] = inst_33173);

(statearr_33307[(14)] = inst_33172);

(statearr_33307[(15)] = inst_33215);

(statearr_33307[(16)] = inst_33174);

(statearr_33307[(17)] = inst_33175);

return statearr_33307;
})();
var statearr_33308_35138 = state_33295__$1;
(statearr_33308_35138[(2)] = null);

(statearr_33308_35138[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33296 === (39))){
var state_33295__$1 = state_33295;
var statearr_33312_35139 = state_33295__$1;
(statearr_33312_35139[(2)] = null);

(statearr_33312_35139[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33296 === (4))){
var inst_33163 = (state_33295[(10)]);
var inst_33163__$1 = (state_33295[(2)]);
var inst_33164 = (inst_33163__$1 == null);
var state_33295__$1 = (function (){var statearr_33313 = state_33295;
(statearr_33313[(10)] = inst_33163__$1);

return statearr_33313;
})();
if(cljs.core.truth_(inst_33164)){
var statearr_33314_35143 = state_33295__$1;
(statearr_33314_35143[(1)] = (5));

} else {
var statearr_33315_35144 = state_33295__$1;
(statearr_33315_35144[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33296 === (15))){
var inst_33173 = (state_33295[(13)]);
var inst_33172 = (state_33295[(14)]);
var inst_33174 = (state_33295[(16)]);
var inst_33175 = (state_33295[(17)]);
var inst_33190 = (state_33295[(2)]);
var inst_33191 = (inst_33175 + (1));
var tmp33309 = inst_33173;
var tmp33310 = inst_33172;
var tmp33311 = inst_33174;
var inst_33172__$1 = tmp33310;
var inst_33173__$1 = tmp33309;
var inst_33174__$1 = tmp33311;
var inst_33175__$1 = inst_33191;
var state_33295__$1 = (function (){var statearr_33319 = state_33295;
(statearr_33319[(13)] = inst_33173__$1);

(statearr_33319[(14)] = inst_33172__$1);

(statearr_33319[(16)] = inst_33174__$1);

(statearr_33319[(17)] = inst_33175__$1);

(statearr_33319[(18)] = inst_33190);

return statearr_33319;
})();
var statearr_33322_35145 = state_33295__$1;
(statearr_33322_35145[(2)] = null);

(statearr_33322_35145[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33296 === (21))){
var inst_33219 = (state_33295[(2)]);
var state_33295__$1 = state_33295;
var statearr_33327_35146 = state_33295__$1;
(statearr_33327_35146[(2)] = inst_33219);

(statearr_33327_35146[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33296 === (31))){
var inst_33245 = (state_33295[(11)]);
var inst_33249 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_33245);
var state_33295__$1 = state_33295;
var statearr_33331_35147 = state_33295__$1;
(statearr_33331_35147[(2)] = inst_33249);

(statearr_33331_35147[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33296 === (32))){
var inst_33238 = (state_33295[(9)]);
var inst_33237 = (state_33295[(19)]);
var inst_33239 = (state_33295[(20)]);
var inst_33240 = (state_33295[(12)]);
var inst_33251 = (state_33295[(2)]);
var inst_33252 = (inst_33240 + (1));
var tmp33324 = inst_33238;
var tmp33325 = inst_33237;
var tmp33326 = inst_33239;
var inst_33237__$1 = tmp33325;
var inst_33238__$1 = tmp33324;
var inst_33239__$1 = tmp33326;
var inst_33240__$1 = inst_33252;
var state_33295__$1 = (function (){var statearr_33332 = state_33295;
(statearr_33332[(21)] = inst_33251);

(statearr_33332[(9)] = inst_33238__$1);

(statearr_33332[(19)] = inst_33237__$1);

(statearr_33332[(20)] = inst_33239__$1);

(statearr_33332[(12)] = inst_33240__$1);

return statearr_33332;
})();
var statearr_33333_35148 = state_33295__$1;
(statearr_33333_35148[(2)] = null);

(statearr_33333_35148[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33296 === (40))){
var inst_33264 = (state_33295[(22)]);
var inst_33268 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_33264);
var state_33295__$1 = state_33295;
var statearr_33335_35149 = state_33295__$1;
(statearr_33335_35149[(2)] = inst_33268);

(statearr_33335_35149[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33296 === (33))){
var inst_33255 = (state_33295[(23)]);
var inst_33257 = cljs.core.chunked_seq_QMARK_(inst_33255);
var state_33295__$1 = state_33295;
if(inst_33257){
var statearr_33339_35150 = state_33295__$1;
(statearr_33339_35150[(1)] = (36));

} else {
var statearr_33340_35151 = state_33295__$1;
(statearr_33340_35151[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33296 === (13))){
var inst_33184 = (state_33295[(24)]);
var inst_33187 = cljs.core.async.close_BANG_(inst_33184);
var state_33295__$1 = state_33295;
var statearr_33343_35152 = state_33295__$1;
(statearr_33343_35152[(2)] = inst_33187);

(statearr_33343_35152[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33296 === (22))){
var inst_33209 = (state_33295[(8)]);
var inst_33212 = cljs.core.async.close_BANG_(inst_33209);
var state_33295__$1 = state_33295;
var statearr_33346_35153 = state_33295__$1;
(statearr_33346_35153[(2)] = inst_33212);

(statearr_33346_35153[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33296 === (36))){
var inst_33255 = (state_33295[(23)]);
var inst_33259 = cljs.core.chunk_first(inst_33255);
var inst_33260 = cljs.core.chunk_rest(inst_33255);
var inst_33261 = cljs.core.count(inst_33259);
var inst_33237 = inst_33260;
var inst_33238 = inst_33259;
var inst_33239 = inst_33261;
var inst_33240 = (0);
var state_33295__$1 = (function (){var statearr_33350 = state_33295;
(statearr_33350[(9)] = inst_33238);

(statearr_33350[(19)] = inst_33237);

(statearr_33350[(20)] = inst_33239);

(statearr_33350[(12)] = inst_33240);

return statearr_33350;
})();
var statearr_33352_35155 = state_33295__$1;
(statearr_33352_35155[(2)] = null);

(statearr_33352_35155[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33296 === (41))){
var inst_33255 = (state_33295[(23)]);
var inst_33270 = (state_33295[(2)]);
var inst_33271 = cljs.core.next(inst_33255);
var inst_33237 = inst_33271;
var inst_33238 = null;
var inst_33239 = (0);
var inst_33240 = (0);
var state_33295__$1 = (function (){var statearr_33353 = state_33295;
(statearr_33353[(25)] = inst_33270);

(statearr_33353[(9)] = inst_33238);

(statearr_33353[(19)] = inst_33237);

(statearr_33353[(20)] = inst_33239);

(statearr_33353[(12)] = inst_33240);

return statearr_33353;
})();
var statearr_33354_35160 = state_33295__$1;
(statearr_33354_35160[(2)] = null);

(statearr_33354_35160[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33296 === (43))){
var state_33295__$1 = state_33295;
var statearr_33356_35161 = state_33295__$1;
(statearr_33356_35161[(2)] = null);

(statearr_33356_35161[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33296 === (29))){
var inst_33279 = (state_33295[(2)]);
var state_33295__$1 = state_33295;
var statearr_33359_35162 = state_33295__$1;
(statearr_33359_35162[(2)] = inst_33279);

(statearr_33359_35162[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33296 === (44))){
var inst_33288 = (state_33295[(2)]);
var state_33295__$1 = (function (){var statearr_33360 = state_33295;
(statearr_33360[(26)] = inst_33288);

return statearr_33360;
})();
var statearr_33361_35163 = state_33295__$1;
(statearr_33361_35163[(2)] = null);

(statearr_33361_35163[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33296 === (6))){
var inst_33229 = (state_33295[(27)]);
var inst_33228 = cljs.core.deref(cs);
var inst_33229__$1 = cljs.core.keys(inst_33228);
var inst_33230 = cljs.core.count(inst_33229__$1);
var inst_33231 = cljs.core.reset_BANG_(dctr,inst_33230);
var inst_33236 = cljs.core.seq(inst_33229__$1);
var inst_33237 = inst_33236;
var inst_33238 = null;
var inst_33239 = (0);
var inst_33240 = (0);
var state_33295__$1 = (function (){var statearr_33364 = state_33295;
(statearr_33364[(27)] = inst_33229__$1);

(statearr_33364[(9)] = inst_33238);

(statearr_33364[(28)] = inst_33231);

(statearr_33364[(19)] = inst_33237);

(statearr_33364[(20)] = inst_33239);

(statearr_33364[(12)] = inst_33240);

return statearr_33364;
})();
var statearr_33365_35164 = state_33295__$1;
(statearr_33365_35164[(2)] = null);

(statearr_33365_35164[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33296 === (28))){
var inst_33255 = (state_33295[(23)]);
var inst_33237 = (state_33295[(19)]);
var inst_33255__$1 = cljs.core.seq(inst_33237);
var state_33295__$1 = (function (){var statearr_33369 = state_33295;
(statearr_33369[(23)] = inst_33255__$1);

return statearr_33369;
})();
if(inst_33255__$1){
var statearr_33370_35165 = state_33295__$1;
(statearr_33370_35165[(1)] = (33));

} else {
var statearr_33372_35166 = state_33295__$1;
(statearr_33372_35166[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33296 === (25))){
var inst_33239 = (state_33295[(20)]);
var inst_33240 = (state_33295[(12)]);
var inst_33242 = (inst_33240 < inst_33239);
var inst_33243 = inst_33242;
var state_33295__$1 = state_33295;
if(cljs.core.truth_(inst_33243)){
var statearr_33375_35167 = state_33295__$1;
(statearr_33375_35167[(1)] = (27));

} else {
var statearr_33377_35168 = state_33295__$1;
(statearr_33377_35168[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33296 === (34))){
var state_33295__$1 = state_33295;
var statearr_33387_35169 = state_33295__$1;
(statearr_33387_35169[(2)] = null);

(statearr_33387_35169[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33296 === (17))){
var state_33295__$1 = state_33295;
var statearr_33391_35170 = state_33295__$1;
(statearr_33391_35170[(2)] = null);

(statearr_33391_35170[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33296 === (3))){
var inst_33293 = (state_33295[(2)]);
var state_33295__$1 = state_33295;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33295__$1,inst_33293);
} else {
if((state_val_33296 === (12))){
var inst_33224 = (state_33295[(2)]);
var state_33295__$1 = state_33295;
var statearr_33396_35171 = state_33295__$1;
(statearr_33396_35171[(2)] = inst_33224);

(statearr_33396_35171[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33296 === (2))){
var state_33295__$1 = state_33295;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33295__$1,(4),ch);
} else {
if((state_val_33296 === (23))){
var state_33295__$1 = state_33295;
var statearr_33402_35173 = state_33295__$1;
(statearr_33402_35173[(2)] = null);

(statearr_33402_35173[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33296 === (35))){
var inst_33277 = (state_33295[(2)]);
var state_33295__$1 = state_33295;
var statearr_33404_35176 = state_33295__$1;
(statearr_33404_35176[(2)] = inst_33277);

(statearr_33404_35176[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33296 === (19))){
var inst_33196 = (state_33295[(7)]);
var inst_33200 = cljs.core.chunk_first(inst_33196);
var inst_33201 = cljs.core.chunk_rest(inst_33196);
var inst_33202 = cljs.core.count(inst_33200);
var inst_33172 = inst_33201;
var inst_33173 = inst_33200;
var inst_33174 = inst_33202;
var inst_33175 = (0);
var state_33295__$1 = (function (){var statearr_33405 = state_33295;
(statearr_33405[(13)] = inst_33173);

(statearr_33405[(14)] = inst_33172);

(statearr_33405[(16)] = inst_33174);

(statearr_33405[(17)] = inst_33175);

return statearr_33405;
})();
var statearr_33406_35178 = state_33295__$1;
(statearr_33406_35178[(2)] = null);

(statearr_33406_35178[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33296 === (11))){
var inst_33172 = (state_33295[(14)]);
var inst_33196 = (state_33295[(7)]);
var inst_33196__$1 = cljs.core.seq(inst_33172);
var state_33295__$1 = (function (){var statearr_33408 = state_33295;
(statearr_33408[(7)] = inst_33196__$1);

return statearr_33408;
})();
if(inst_33196__$1){
var statearr_33409_35180 = state_33295__$1;
(statearr_33409_35180[(1)] = (16));

} else {
var statearr_33410_35181 = state_33295__$1;
(statearr_33410_35181[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33296 === (9))){
var inst_33226 = (state_33295[(2)]);
var state_33295__$1 = state_33295;
var statearr_33413_35182 = state_33295__$1;
(statearr_33413_35182[(2)] = inst_33226);

(statearr_33413_35182[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33296 === (5))){
var inst_33170 = cljs.core.deref(cs);
var inst_33171 = cljs.core.seq(inst_33170);
var inst_33172 = inst_33171;
var inst_33173 = null;
var inst_33174 = (0);
var inst_33175 = (0);
var state_33295__$1 = (function (){var statearr_33415 = state_33295;
(statearr_33415[(13)] = inst_33173);

(statearr_33415[(14)] = inst_33172);

(statearr_33415[(16)] = inst_33174);

(statearr_33415[(17)] = inst_33175);

return statearr_33415;
})();
var statearr_33417_35185 = state_33295__$1;
(statearr_33417_35185[(2)] = null);

(statearr_33417_35185[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33296 === (14))){
var state_33295__$1 = state_33295;
var statearr_33419_35186 = state_33295__$1;
(statearr_33419_35186[(2)] = null);

(statearr_33419_35186[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33296 === (45))){
var inst_33285 = (state_33295[(2)]);
var state_33295__$1 = state_33295;
var statearr_33420_35187 = state_33295__$1;
(statearr_33420_35187[(2)] = inst_33285);

(statearr_33420_35187[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33296 === (26))){
var inst_33229 = (state_33295[(27)]);
var inst_33281 = (state_33295[(2)]);
var inst_33282 = cljs.core.seq(inst_33229);
var state_33295__$1 = (function (){var statearr_33424 = state_33295;
(statearr_33424[(29)] = inst_33281);

return statearr_33424;
})();
if(inst_33282){
var statearr_33425_35188 = state_33295__$1;
(statearr_33425_35188[(1)] = (42));

} else {
var statearr_33426_35189 = state_33295__$1;
(statearr_33426_35189[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33296 === (16))){
var inst_33196 = (state_33295[(7)]);
var inst_33198 = cljs.core.chunked_seq_QMARK_(inst_33196);
var state_33295__$1 = state_33295;
if(inst_33198){
var statearr_33428_35190 = state_33295__$1;
(statearr_33428_35190[(1)] = (19));

} else {
var statearr_33429_35191 = state_33295__$1;
(statearr_33429_35191[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33296 === (38))){
var inst_33274 = (state_33295[(2)]);
var state_33295__$1 = state_33295;
var statearr_33433_35192 = state_33295__$1;
(statearr_33433_35192[(2)] = inst_33274);

(statearr_33433_35192[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33296 === (30))){
var state_33295__$1 = state_33295;
var statearr_33434_35193 = state_33295__$1;
(statearr_33434_35193[(2)] = null);

(statearr_33434_35193[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33296 === (10))){
var inst_33173 = (state_33295[(13)]);
var inst_33175 = (state_33295[(17)]);
var inst_33183 = cljs.core._nth(inst_33173,inst_33175);
var inst_33184 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33183,(0),null);
var inst_33185 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33183,(1),null);
var state_33295__$1 = (function (){var statearr_33441 = state_33295;
(statearr_33441[(24)] = inst_33184);

return statearr_33441;
})();
if(cljs.core.truth_(inst_33185)){
var statearr_33452_35194 = state_33295__$1;
(statearr_33452_35194[(1)] = (13));

} else {
var statearr_33453_35195 = state_33295__$1;
(statearr_33453_35195[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33296 === (18))){
var inst_33222 = (state_33295[(2)]);
var state_33295__$1 = state_33295;
var statearr_33454_35198 = state_33295__$1;
(statearr_33454_35198[(2)] = inst_33222);

(statearr_33454_35198[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33296 === (42))){
var state_33295__$1 = state_33295;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33295__$1,(45),dchan);
} else {
if((state_val_33296 === (37))){
var inst_33255 = (state_33295[(23)]);
var inst_33264 = (state_33295[(22)]);
var inst_33163 = (state_33295[(10)]);
var inst_33264__$1 = cljs.core.first(inst_33255);
var inst_33265 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_33264__$1,inst_33163,done);
var state_33295__$1 = (function (){var statearr_33458 = state_33295;
(statearr_33458[(22)] = inst_33264__$1);

return statearr_33458;
})();
if(cljs.core.truth_(inst_33265)){
var statearr_33460_35199 = state_33295__$1;
(statearr_33460_35199[(1)] = (39));

} else {
var statearr_33462_35200 = state_33295__$1;
(statearr_33462_35200[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33296 === (8))){
var inst_33174 = (state_33295[(16)]);
var inst_33175 = (state_33295[(17)]);
var inst_33177 = (inst_33175 < inst_33174);
var inst_33178 = inst_33177;
var state_33295__$1 = state_33295;
if(cljs.core.truth_(inst_33178)){
var statearr_33464_35201 = state_33295__$1;
(statearr_33464_35201[(1)] = (10));

} else {
var statearr_33465_35202 = state_33295__$1;
(statearr_33465_35202[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__32085__auto__ = null;
var cljs$core$async$mult_$_state_machine__32085__auto____0 = (function (){
var statearr_33467 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33467[(0)] = cljs$core$async$mult_$_state_machine__32085__auto__);

(statearr_33467[(1)] = (1));

return statearr_33467;
});
var cljs$core$async$mult_$_state_machine__32085__auto____1 = (function (state_33295){
while(true){
var ret_value__32086__auto__ = (function (){try{while(true){
var result__32087__auto__ = switch__32084__auto__(state_33295);
if(cljs.core.keyword_identical_QMARK_(result__32087__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32087__auto__;
}
break;
}
}catch (e33471){var ex__32088__auto__ = e33471;
var statearr_33472_35207 = state_33295;
(statearr_33472_35207[(2)] = ex__32088__auto__);


if(cljs.core.seq((state_33295[(4)]))){
var statearr_33477_35208 = state_33295;
(statearr_33477_35208[(1)] = cljs.core.first((state_33295[(4)])));

} else {
throw ex__32088__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32086__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35209 = state_33295;
state_33295 = G__35209;
continue;
} else {
return ret_value__32086__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__32085__auto__ = function(state_33295){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__32085__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__32085__auto____1.call(this,state_33295);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__32085__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__32085__auto____0;
cljs$core$async$mult_$_state_machine__32085__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__32085__auto____1;
return cljs$core$async$mult_$_state_machine__32085__auto__;
})()
})();
var state__32386__auto__ = (function (){var statearr_33481 = f__32385__auto__();
(statearr_33481[(6)] = c__32384__auto___35125);

return statearr_33481;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32386__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__33485 = arguments.length;
switch (G__33485) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_35216 = (function (m,ch){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4551__auto__.call(null,m,ch));
} else {
var m__4549__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4549__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_35216(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_35217 = (function (m,ch){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4551__auto__.call(null,m,ch));
} else {
var m__4549__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4549__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_35217(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_35222 = (function (m){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4551__auto__.call(null,m));
} else {
var m__4549__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4549__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_35222(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_35223 = (function (m,state_map){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4551__auto__.call(null,m,state_map));
} else {
var m__4549__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4549__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_35223(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_35224 = (function (m,mode){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4551__auto__.call(null,m,mode));
} else {
var m__4549__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4549__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_35224(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4870__auto__ = [];
var len__4864__auto___35225 = arguments.length;
var i__4865__auto___35226 = (0);
while(true){
if((i__4865__auto___35226 < len__4864__auto___35225)){
args__4870__auto__.push((arguments[i__4865__auto___35226]));

var G__35227 = (i__4865__auto___35226 + (1));
i__4865__auto___35226 = G__35227;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((3) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4871__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__33576){
var map__33577 = p__33576;
var map__33577__$1 = cljs.core.__destructure_map(map__33577);
var opts = map__33577__$1;
var statearr_33581_35230 = state;
(statearr_33581_35230[(1)] = cont_block);


var temp__5753__auto__ = cljs.core.async.do_alts((function (val){
var statearr_33587_35231 = state;
(statearr_33587_35231[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5753__auto__)){
var cb = temp__5753__auto__;
var statearr_33594_35232 = state;
(statearr_33594_35232[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq33562){
var G__33563 = cljs.core.first(seq33562);
var seq33562__$1 = cljs.core.next(seq33562);
var G__33564 = cljs.core.first(seq33562__$1);
var seq33562__$2 = cljs.core.next(seq33562__$1);
var G__33565 = cljs.core.first(seq33562__$2);
var seq33562__$3 = cljs.core.next(seq33562__$2);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33563,G__33564,G__33565,seq33562__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33622 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33622 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta33623){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta33623 = meta33623;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33622.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33624,meta33623__$1){
var self__ = this;
var _33624__$1 = this;
return (new cljs.core.async.t_cljs$core$async33622(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta33623__$1));
}));

(cljs.core.async.t_cljs$core$async33622.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33624){
var self__ = this;
var _33624__$1 = this;
return self__.meta33623;
}));

(cljs.core.async.t_cljs$core$async33622.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33622.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async33622.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33622.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async33622.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async33622.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async33622.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async33622.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async33622.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta33623","meta33623",-1364844113,null)], null);
}));

(cljs.core.async.t_cljs$core$async33622.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33622.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33622");

(cljs.core.async.t_cljs$core$async33622.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async33622");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33622.
 */
cljs.core.async.__GT_t_cljs$core$async33622 = (function cljs$core$async$mix_$___GT_t_cljs$core$async33622(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta33623){
return (new cljs.core.async.t_cljs$core$async33622(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta33623));
});

}

return (new cljs.core.async.t_cljs$core$async33622(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__32384__auto___35261 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32385__auto__ = (function (){var switch__32084__auto__ = (function (state_33734){
var state_val_33735 = (state_33734[(1)]);
if((state_val_33735 === (7))){
var inst_33691 = (state_33734[(2)]);
var state_33734__$1 = state_33734;
if(cljs.core.truth_(inst_33691)){
var statearr_33741_35266 = state_33734__$1;
(statearr_33741_35266[(1)] = (8));

} else {
var statearr_33742_35267 = state_33734__$1;
(statearr_33742_35267[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33735 === (20))){
var inst_33683 = (state_33734[(7)]);
var state_33734__$1 = state_33734;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33734__$1,(23),out,inst_33683);
} else {
if((state_val_33735 === (1))){
var inst_33659 = calc_state();
var inst_33660 = cljs.core.__destructure_map(inst_33659);
var inst_33661 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33660,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_33662 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33660,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_33663 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33660,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_33664 = inst_33659;
var state_33734__$1 = (function (){var statearr_33747 = state_33734;
(statearr_33747[(8)] = inst_33663);

(statearr_33747[(9)] = inst_33661);

(statearr_33747[(10)] = inst_33664);

(statearr_33747[(11)] = inst_33662);

return statearr_33747;
})();
var statearr_33748_35268 = state_33734__$1;
(statearr_33748_35268[(2)] = null);

(statearr_33748_35268[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33735 === (24))){
var inst_33667 = (state_33734[(12)]);
var inst_33664 = inst_33667;
var state_33734__$1 = (function (){var statearr_33749 = state_33734;
(statearr_33749[(10)] = inst_33664);

return statearr_33749;
})();
var statearr_33750_35269 = state_33734__$1;
(statearr_33750_35269[(2)] = null);

(statearr_33750_35269[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33735 === (4))){
var inst_33686 = (state_33734[(13)]);
var inst_33683 = (state_33734[(7)]);
var inst_33679 = (state_33734[(2)]);
var inst_33683__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33679,(0),null);
var inst_33684 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33679,(1),null);
var inst_33686__$1 = (inst_33683__$1 == null);
var state_33734__$1 = (function (){var statearr_33751 = state_33734;
(statearr_33751[(13)] = inst_33686__$1);

(statearr_33751[(7)] = inst_33683__$1);

(statearr_33751[(14)] = inst_33684);

return statearr_33751;
})();
if(cljs.core.truth_(inst_33686__$1)){
var statearr_33752_35276 = state_33734__$1;
(statearr_33752_35276[(1)] = (5));

} else {
var statearr_33753_35277 = state_33734__$1;
(statearr_33753_35277[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33735 === (15))){
var inst_33705 = (state_33734[(15)]);
var inst_33668 = (state_33734[(16)]);
var inst_33705__$1 = cljs.core.empty_QMARK_(inst_33668);
var state_33734__$1 = (function (){var statearr_33754 = state_33734;
(statearr_33754[(15)] = inst_33705__$1);

return statearr_33754;
})();
if(inst_33705__$1){
var statearr_33755_35279 = state_33734__$1;
(statearr_33755_35279[(1)] = (17));

} else {
var statearr_33756_35280 = state_33734__$1;
(statearr_33756_35280[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33735 === (21))){
var inst_33667 = (state_33734[(12)]);
var inst_33664 = inst_33667;
var state_33734__$1 = (function (){var statearr_33757 = state_33734;
(statearr_33757[(10)] = inst_33664);

return statearr_33757;
})();
var statearr_33758_35285 = state_33734__$1;
(statearr_33758_35285[(2)] = null);

(statearr_33758_35285[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33735 === (13))){
var inst_33698 = (state_33734[(2)]);
var inst_33699 = calc_state();
var inst_33664 = inst_33699;
var state_33734__$1 = (function (){var statearr_33759 = state_33734;
(statearr_33759[(10)] = inst_33664);

(statearr_33759[(17)] = inst_33698);

return statearr_33759;
})();
var statearr_33760_35286 = state_33734__$1;
(statearr_33760_35286[(2)] = null);

(statearr_33760_35286[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33735 === (22))){
var inst_33725 = (state_33734[(2)]);
var state_33734__$1 = state_33734;
var statearr_33765_35287 = state_33734__$1;
(statearr_33765_35287[(2)] = inst_33725);

(statearr_33765_35287[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33735 === (6))){
var inst_33684 = (state_33734[(14)]);
var inst_33689 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_33684,change);
var state_33734__$1 = state_33734;
var statearr_33766_35289 = state_33734__$1;
(statearr_33766_35289[(2)] = inst_33689);

(statearr_33766_35289[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33735 === (25))){
var state_33734__$1 = state_33734;
var statearr_33767_35290 = state_33734__$1;
(statearr_33767_35290[(2)] = null);

(statearr_33767_35290[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33735 === (17))){
var inst_33669 = (state_33734[(18)]);
var inst_33684 = (state_33734[(14)]);
var inst_33707 = (inst_33669.cljs$core$IFn$_invoke$arity$1 ? inst_33669.cljs$core$IFn$_invoke$arity$1(inst_33684) : inst_33669.call(null,inst_33684));
var inst_33708 = cljs.core.not(inst_33707);
var state_33734__$1 = state_33734;
var statearr_33768_35291 = state_33734__$1;
(statearr_33768_35291[(2)] = inst_33708);

(statearr_33768_35291[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33735 === (3))){
var inst_33729 = (state_33734[(2)]);
var state_33734__$1 = state_33734;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33734__$1,inst_33729);
} else {
if((state_val_33735 === (12))){
var state_33734__$1 = state_33734;
var statearr_33770_35297 = state_33734__$1;
(statearr_33770_35297[(2)] = null);

(statearr_33770_35297[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33735 === (2))){
var inst_33664 = (state_33734[(10)]);
var inst_33667 = (state_33734[(12)]);
var inst_33667__$1 = cljs.core.__destructure_map(inst_33664);
var inst_33668 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33667__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_33669 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33667__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_33671 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33667__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_33734__$1 = (function (){var statearr_33771 = state_33734;
(statearr_33771[(12)] = inst_33667__$1);

(statearr_33771[(18)] = inst_33669);

(statearr_33771[(16)] = inst_33668);

return statearr_33771;
})();
return cljs.core.async.ioc_alts_BANG_(state_33734__$1,(4),inst_33671);
} else {
if((state_val_33735 === (23))){
var inst_33716 = (state_33734[(2)]);
var state_33734__$1 = state_33734;
if(cljs.core.truth_(inst_33716)){
var statearr_33772_35299 = state_33734__$1;
(statearr_33772_35299[(1)] = (24));

} else {
var statearr_33773_35300 = state_33734__$1;
(statearr_33773_35300[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33735 === (19))){
var inst_33711 = (state_33734[(2)]);
var state_33734__$1 = state_33734;
var statearr_33775_35301 = state_33734__$1;
(statearr_33775_35301[(2)] = inst_33711);

(statearr_33775_35301[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33735 === (11))){
var inst_33684 = (state_33734[(14)]);
var inst_33695 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_33684);
var state_33734__$1 = state_33734;
var statearr_33777_35306 = state_33734__$1;
(statearr_33777_35306[(2)] = inst_33695);

(statearr_33777_35306[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33735 === (9))){
var inst_33668 = (state_33734[(16)]);
var inst_33702 = (state_33734[(19)]);
var inst_33684 = (state_33734[(14)]);
var inst_33702__$1 = (inst_33668.cljs$core$IFn$_invoke$arity$1 ? inst_33668.cljs$core$IFn$_invoke$arity$1(inst_33684) : inst_33668.call(null,inst_33684));
var state_33734__$1 = (function (){var statearr_33778 = state_33734;
(statearr_33778[(19)] = inst_33702__$1);

return statearr_33778;
})();
if(cljs.core.truth_(inst_33702__$1)){
var statearr_33779_35308 = state_33734__$1;
(statearr_33779_35308[(1)] = (14));

} else {
var statearr_33780_35309 = state_33734__$1;
(statearr_33780_35309[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33735 === (5))){
var inst_33686 = (state_33734[(13)]);
var state_33734__$1 = state_33734;
var statearr_33781_35310 = state_33734__$1;
(statearr_33781_35310[(2)] = inst_33686);

(statearr_33781_35310[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33735 === (14))){
var inst_33702 = (state_33734[(19)]);
var state_33734__$1 = state_33734;
var statearr_33782_35312 = state_33734__$1;
(statearr_33782_35312[(2)] = inst_33702);

(statearr_33782_35312[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33735 === (26))){
var inst_33721 = (state_33734[(2)]);
var state_33734__$1 = state_33734;
var statearr_33783_35313 = state_33734__$1;
(statearr_33783_35313[(2)] = inst_33721);

(statearr_33783_35313[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33735 === (16))){
var inst_33713 = (state_33734[(2)]);
var state_33734__$1 = state_33734;
if(cljs.core.truth_(inst_33713)){
var statearr_33784_35314 = state_33734__$1;
(statearr_33784_35314[(1)] = (20));

} else {
var statearr_33785_35315 = state_33734__$1;
(statearr_33785_35315[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33735 === (10))){
var inst_33727 = (state_33734[(2)]);
var state_33734__$1 = state_33734;
var statearr_33786_35316 = state_33734__$1;
(statearr_33786_35316[(2)] = inst_33727);

(statearr_33786_35316[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33735 === (18))){
var inst_33705 = (state_33734[(15)]);
var state_33734__$1 = state_33734;
var statearr_33787_35318 = state_33734__$1;
(statearr_33787_35318[(2)] = inst_33705);

(statearr_33787_35318[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33735 === (8))){
var inst_33683 = (state_33734[(7)]);
var inst_33693 = (inst_33683 == null);
var state_33734__$1 = state_33734;
if(cljs.core.truth_(inst_33693)){
var statearr_33788_35319 = state_33734__$1;
(statearr_33788_35319[(1)] = (11));

} else {
var statearr_33789_35321 = state_33734__$1;
(statearr_33789_35321[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__32085__auto__ = null;
var cljs$core$async$mix_$_state_machine__32085__auto____0 = (function (){
var statearr_33790 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33790[(0)] = cljs$core$async$mix_$_state_machine__32085__auto__);

(statearr_33790[(1)] = (1));

return statearr_33790;
});
var cljs$core$async$mix_$_state_machine__32085__auto____1 = (function (state_33734){
while(true){
var ret_value__32086__auto__ = (function (){try{while(true){
var result__32087__auto__ = switch__32084__auto__(state_33734);
if(cljs.core.keyword_identical_QMARK_(result__32087__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32087__auto__;
}
break;
}
}catch (e33791){var ex__32088__auto__ = e33791;
var statearr_33792_35325 = state_33734;
(statearr_33792_35325[(2)] = ex__32088__auto__);


if(cljs.core.seq((state_33734[(4)]))){
var statearr_33793_35326 = state_33734;
(statearr_33793_35326[(1)] = cljs.core.first((state_33734[(4)])));

} else {
throw ex__32088__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32086__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35327 = state_33734;
state_33734 = G__35327;
continue;
} else {
return ret_value__32086__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__32085__auto__ = function(state_33734){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__32085__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__32085__auto____1.call(this,state_33734);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__32085__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__32085__auto____0;
cljs$core$async$mix_$_state_machine__32085__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__32085__auto____1;
return cljs$core$async$mix_$_state_machine__32085__auto__;
})()
})();
var state__32386__auto__ = (function (){var statearr_33794 = f__32385__auto__();
(statearr_33794[(6)] = c__32384__auto___35261);

return statearr_33794;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32386__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_35328 = (function (p,v,ch,close_QMARK_){
var x__4550__auto__ = (((p == null))?null:p);
var m__4551__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4551__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4549__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4549__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_35328(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_35336 = (function (p,v,ch){
var x__4550__auto__ = (((p == null))?null:p);
var m__4551__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4551__auto__.call(null,p,v,ch));
} else {
var m__4549__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4549__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_35336(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_35339 = (function() {
var G__35340 = null;
var G__35340__1 = (function (p){
var x__4550__auto__ = (((p == null))?null:p);
var m__4551__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4551__auto__.call(null,p));
} else {
var m__4549__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4549__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__35340__2 = (function (p,v){
var x__4550__auto__ = (((p == null))?null:p);
var m__4551__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4551__auto__.call(null,p,v));
} else {
var m__4549__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4549__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__35340 = function(p,v){
switch(arguments.length){
case 1:
return G__35340__1.call(this,p);
case 2:
return G__35340__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__35340.cljs$core$IFn$_invoke$arity$1 = G__35340__1;
G__35340.cljs$core$IFn$_invoke$arity$2 = G__35340__2;
return G__35340;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__33802 = arguments.length;
switch (G__33802) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_35339(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_35339(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__33805 = arguments.length;
switch (G__33805) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4253__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__33803_SHARP_){
if(cljs.core.truth_((p1__33803_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__33803_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__33803_SHARP_.call(null,topic)))){
return p1__33803_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__33803_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33808 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33808 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta33809){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta33809 = meta33809;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33808.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33810,meta33809__$1){
var self__ = this;
var _33810__$1 = this;
return (new cljs.core.async.t_cljs$core$async33808(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta33809__$1));
}));

(cljs.core.async.t_cljs$core$async33808.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33810){
var self__ = this;
var _33810__$1 = this;
return self__.meta33809;
}));

(cljs.core.async.t_cljs$core$async33808.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33808.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async33808.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33808.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async33808.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5753__auto__)){
var m = temp__5753__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async33808.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async33808.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async33808.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta33809","meta33809",-673705593,null)], null);
}));

(cljs.core.async.t_cljs$core$async33808.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33808.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33808");

(cljs.core.async.t_cljs$core$async33808.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async33808");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33808.
 */
cljs.core.async.__GT_t_cljs$core$async33808 = (function cljs$core$async$__GT_t_cljs$core$async33808(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta33809){
return (new cljs.core.async.t_cljs$core$async33808(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta33809));
});

}

return (new cljs.core.async.t_cljs$core$async33808(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__32384__auto___35374 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32385__auto__ = (function (){var switch__32084__auto__ = (function (state_33907){
var state_val_33908 = (state_33907[(1)]);
if((state_val_33908 === (7))){
var inst_33897 = (state_33907[(2)]);
var state_33907__$1 = state_33907;
var statearr_33915_35380 = state_33907__$1;
(statearr_33915_35380[(2)] = inst_33897);

(statearr_33915_35380[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33908 === (20))){
var state_33907__$1 = state_33907;
var statearr_33916_35390 = state_33907__$1;
(statearr_33916_35390[(2)] = null);

(statearr_33916_35390[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33908 === (1))){
var state_33907__$1 = state_33907;
var statearr_33917_35391 = state_33907__$1;
(statearr_33917_35391[(2)] = null);

(statearr_33917_35391[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33908 === (24))){
var inst_33873 = (state_33907[(7)]);
var inst_33882 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_33873);
var state_33907__$1 = state_33907;
var statearr_33925_35395 = state_33907__$1;
(statearr_33925_35395[(2)] = inst_33882);

(statearr_33925_35395[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33908 === (4))){
var inst_33825 = (state_33907[(8)]);
var inst_33825__$1 = (state_33907[(2)]);
var inst_33826 = (inst_33825__$1 == null);
var state_33907__$1 = (function (){var statearr_33929 = state_33907;
(statearr_33929[(8)] = inst_33825__$1);

return statearr_33929;
})();
if(cljs.core.truth_(inst_33826)){
var statearr_33930_35396 = state_33907__$1;
(statearr_33930_35396[(1)] = (5));

} else {
var statearr_33931_35397 = state_33907__$1;
(statearr_33931_35397[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33908 === (15))){
var inst_33867 = (state_33907[(2)]);
var state_33907__$1 = state_33907;
var statearr_33932_35402 = state_33907__$1;
(statearr_33932_35402[(2)] = inst_33867);

(statearr_33932_35402[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33908 === (21))){
var inst_33887 = (state_33907[(2)]);
var state_33907__$1 = (function (){var statearr_33936 = state_33907;
(statearr_33936[(9)] = inst_33887);

return statearr_33936;
})();
var statearr_33937_35406 = state_33907__$1;
(statearr_33937_35406[(2)] = null);

(statearr_33937_35406[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33908 === (13))){
var inst_33849 = (state_33907[(10)]);
var inst_33851 = cljs.core.chunked_seq_QMARK_(inst_33849);
var state_33907__$1 = state_33907;
if(inst_33851){
var statearr_33938_35408 = state_33907__$1;
(statearr_33938_35408[(1)] = (16));

} else {
var statearr_33939_35410 = state_33907__$1;
(statearr_33939_35410[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33908 === (22))){
var inst_33879 = (state_33907[(2)]);
var state_33907__$1 = state_33907;
if(cljs.core.truth_(inst_33879)){
var statearr_33940_35411 = state_33907__$1;
(statearr_33940_35411[(1)] = (23));

} else {
var statearr_33941_35416 = state_33907__$1;
(statearr_33941_35416[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33908 === (6))){
var inst_33873 = (state_33907[(7)]);
var inst_33875 = (state_33907[(11)]);
var inst_33825 = (state_33907[(8)]);
var inst_33873__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_33825) : topic_fn.call(null,inst_33825));
var inst_33874 = cljs.core.deref(mults);
var inst_33875__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33874,inst_33873__$1);
var state_33907__$1 = (function (){var statearr_33942 = state_33907;
(statearr_33942[(7)] = inst_33873__$1);

(statearr_33942[(11)] = inst_33875__$1);

return statearr_33942;
})();
if(cljs.core.truth_(inst_33875__$1)){
var statearr_33943_35429 = state_33907__$1;
(statearr_33943_35429[(1)] = (19));

} else {
var statearr_33945_35430 = state_33907__$1;
(statearr_33945_35430[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33908 === (25))){
var inst_33884 = (state_33907[(2)]);
var state_33907__$1 = state_33907;
var statearr_33949_35431 = state_33907__$1;
(statearr_33949_35431[(2)] = inst_33884);

(statearr_33949_35431[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33908 === (17))){
var inst_33849 = (state_33907[(10)]);
var inst_33858 = cljs.core.first(inst_33849);
var inst_33859 = cljs.core.async.muxch_STAR_(inst_33858);
var inst_33860 = cljs.core.async.close_BANG_(inst_33859);
var inst_33861 = cljs.core.next(inst_33849);
var inst_33835 = inst_33861;
var inst_33836 = null;
var inst_33837 = (0);
var inst_33838 = (0);
var state_33907__$1 = (function (){var statearr_33950 = state_33907;
(statearr_33950[(12)] = inst_33860);

(statearr_33950[(13)] = inst_33837);

(statearr_33950[(14)] = inst_33836);

(statearr_33950[(15)] = inst_33838);

(statearr_33950[(16)] = inst_33835);

return statearr_33950;
})();
var statearr_33951_35443 = state_33907__$1;
(statearr_33951_35443[(2)] = null);

(statearr_33951_35443[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33908 === (3))){
var inst_33899 = (state_33907[(2)]);
var state_33907__$1 = state_33907;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33907__$1,inst_33899);
} else {
if((state_val_33908 === (12))){
var inst_33869 = (state_33907[(2)]);
var state_33907__$1 = state_33907;
var statearr_33952_35457 = state_33907__$1;
(statearr_33952_35457[(2)] = inst_33869);

(statearr_33952_35457[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33908 === (2))){
var state_33907__$1 = state_33907;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33907__$1,(4),ch);
} else {
if((state_val_33908 === (23))){
var state_33907__$1 = state_33907;
var statearr_33953_35494 = state_33907__$1;
(statearr_33953_35494[(2)] = null);

(statearr_33953_35494[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33908 === (19))){
var inst_33875 = (state_33907[(11)]);
var inst_33825 = (state_33907[(8)]);
var inst_33877 = cljs.core.async.muxch_STAR_(inst_33875);
var state_33907__$1 = state_33907;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33907__$1,(22),inst_33877,inst_33825);
} else {
if((state_val_33908 === (11))){
var inst_33849 = (state_33907[(10)]);
var inst_33835 = (state_33907[(16)]);
var inst_33849__$1 = cljs.core.seq(inst_33835);
var state_33907__$1 = (function (){var statearr_33954 = state_33907;
(statearr_33954[(10)] = inst_33849__$1);

return statearr_33954;
})();
if(inst_33849__$1){
var statearr_33956_35513 = state_33907__$1;
(statearr_33956_35513[(1)] = (13));

} else {
var statearr_33960_35514 = state_33907__$1;
(statearr_33960_35514[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33908 === (9))){
var inst_33871 = (state_33907[(2)]);
var state_33907__$1 = state_33907;
var statearr_33961_35523 = state_33907__$1;
(statearr_33961_35523[(2)] = inst_33871);

(statearr_33961_35523[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33908 === (5))){
var inst_33832 = cljs.core.deref(mults);
var inst_33833 = cljs.core.vals(inst_33832);
var inst_33834 = cljs.core.seq(inst_33833);
var inst_33835 = inst_33834;
var inst_33836 = null;
var inst_33837 = (0);
var inst_33838 = (0);
var state_33907__$1 = (function (){var statearr_33964 = state_33907;
(statearr_33964[(13)] = inst_33837);

(statearr_33964[(14)] = inst_33836);

(statearr_33964[(15)] = inst_33838);

(statearr_33964[(16)] = inst_33835);

return statearr_33964;
})();
var statearr_33965_35528 = state_33907__$1;
(statearr_33965_35528[(2)] = null);

(statearr_33965_35528[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33908 === (14))){
var state_33907__$1 = state_33907;
var statearr_33970_35533 = state_33907__$1;
(statearr_33970_35533[(2)] = null);

(statearr_33970_35533[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33908 === (16))){
var inst_33849 = (state_33907[(10)]);
var inst_33853 = cljs.core.chunk_first(inst_33849);
var inst_33854 = cljs.core.chunk_rest(inst_33849);
var inst_33855 = cljs.core.count(inst_33853);
var inst_33835 = inst_33854;
var inst_33836 = inst_33853;
var inst_33837 = inst_33855;
var inst_33838 = (0);
var state_33907__$1 = (function (){var statearr_33972 = state_33907;
(statearr_33972[(13)] = inst_33837);

(statearr_33972[(14)] = inst_33836);

(statearr_33972[(15)] = inst_33838);

(statearr_33972[(16)] = inst_33835);

return statearr_33972;
})();
var statearr_33973_35540 = state_33907__$1;
(statearr_33973_35540[(2)] = null);

(statearr_33973_35540[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33908 === (10))){
var inst_33837 = (state_33907[(13)]);
var inst_33836 = (state_33907[(14)]);
var inst_33838 = (state_33907[(15)]);
var inst_33835 = (state_33907[(16)]);
var inst_33843 = cljs.core._nth(inst_33836,inst_33838);
var inst_33844 = cljs.core.async.muxch_STAR_(inst_33843);
var inst_33845 = cljs.core.async.close_BANG_(inst_33844);
var inst_33846 = (inst_33838 + (1));
var tmp33966 = inst_33837;
var tmp33967 = inst_33836;
var tmp33968 = inst_33835;
var inst_33835__$1 = tmp33968;
var inst_33836__$1 = tmp33967;
var inst_33837__$1 = tmp33966;
var inst_33838__$1 = inst_33846;
var state_33907__$1 = (function (){var statearr_33974 = state_33907;
(statearr_33974[(13)] = inst_33837__$1);

(statearr_33974[(14)] = inst_33836__$1);

(statearr_33974[(17)] = inst_33845);

(statearr_33974[(15)] = inst_33838__$1);

(statearr_33974[(16)] = inst_33835__$1);

return statearr_33974;
})();
var statearr_33975_35541 = state_33907__$1;
(statearr_33975_35541[(2)] = null);

(statearr_33975_35541[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33908 === (18))){
var inst_33864 = (state_33907[(2)]);
var state_33907__$1 = state_33907;
var statearr_33976_35542 = state_33907__$1;
(statearr_33976_35542[(2)] = inst_33864);

(statearr_33976_35542[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33908 === (8))){
var inst_33837 = (state_33907[(13)]);
var inst_33838 = (state_33907[(15)]);
var inst_33840 = (inst_33838 < inst_33837);
var inst_33841 = inst_33840;
var state_33907__$1 = state_33907;
if(cljs.core.truth_(inst_33841)){
var statearr_33977_35543 = state_33907__$1;
(statearr_33977_35543[(1)] = (10));

} else {
var statearr_33978_35544 = state_33907__$1;
(statearr_33978_35544[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__32085__auto__ = null;
var cljs$core$async$state_machine__32085__auto____0 = (function (){
var statearr_33979 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33979[(0)] = cljs$core$async$state_machine__32085__auto__);

(statearr_33979[(1)] = (1));

return statearr_33979;
});
var cljs$core$async$state_machine__32085__auto____1 = (function (state_33907){
while(true){
var ret_value__32086__auto__ = (function (){try{while(true){
var result__32087__auto__ = switch__32084__auto__(state_33907);
if(cljs.core.keyword_identical_QMARK_(result__32087__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32087__auto__;
}
break;
}
}catch (e33980){var ex__32088__auto__ = e33980;
var statearr_33981_35567 = state_33907;
(statearr_33981_35567[(2)] = ex__32088__auto__);


if(cljs.core.seq((state_33907[(4)]))){
var statearr_33983_35569 = state_33907;
(statearr_33983_35569[(1)] = cljs.core.first((state_33907[(4)])));

} else {
throw ex__32088__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32086__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35571 = state_33907;
state_33907 = G__35571;
continue;
} else {
return ret_value__32086__auto__;
}
break;
}
});
cljs$core$async$state_machine__32085__auto__ = function(state_33907){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32085__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32085__auto____1.call(this,state_33907);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32085__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32085__auto____0;
cljs$core$async$state_machine__32085__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32085__auto____1;
return cljs$core$async$state_machine__32085__auto__;
})()
})();
var state__32386__auto__ = (function (){var statearr_33985 = f__32385__auto__();
(statearr_33985[(6)] = c__32384__auto___35374);

return statearr_33985;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32386__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__33988 = arguments.length;
switch (G__33988) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__33994 = arguments.length;
switch (G__33994) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__33996 = arguments.length;
switch (G__33996) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__32384__auto___35634 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32385__auto__ = (function (){var switch__32084__auto__ = (function (state_34046){
var state_val_34047 = (state_34046[(1)]);
if((state_val_34047 === (7))){
var state_34046__$1 = state_34046;
var statearr_34050_35635 = state_34046__$1;
(statearr_34050_35635[(2)] = null);

(statearr_34050_35635[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34047 === (1))){
var state_34046__$1 = state_34046;
var statearr_34054_35640 = state_34046__$1;
(statearr_34054_35640[(2)] = null);

(statearr_34054_35640[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34047 === (4))){
var inst_34000 = (state_34046[(7)]);
var inst_33999 = (state_34046[(8)]);
var inst_34002 = (inst_34000 < inst_33999);
var state_34046__$1 = state_34046;
if(cljs.core.truth_(inst_34002)){
var statearr_34055_35646 = state_34046__$1;
(statearr_34055_35646[(1)] = (6));

} else {
var statearr_34056_35647 = state_34046__$1;
(statearr_34056_35647[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34047 === (15))){
var inst_34032 = (state_34046[(9)]);
var inst_34037 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_34032);
var state_34046__$1 = state_34046;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34046__$1,(17),out,inst_34037);
} else {
if((state_val_34047 === (13))){
var inst_34032 = (state_34046[(9)]);
var inst_34032__$1 = (state_34046[(2)]);
var inst_34033 = cljs.core.some(cljs.core.nil_QMARK_,inst_34032__$1);
var state_34046__$1 = (function (){var statearr_34057 = state_34046;
(statearr_34057[(9)] = inst_34032__$1);

return statearr_34057;
})();
if(cljs.core.truth_(inst_34033)){
var statearr_34058_35648 = state_34046__$1;
(statearr_34058_35648[(1)] = (14));

} else {
var statearr_34059_35649 = state_34046__$1;
(statearr_34059_35649[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34047 === (6))){
var state_34046__$1 = state_34046;
var statearr_34060_35650 = state_34046__$1;
(statearr_34060_35650[(2)] = null);

(statearr_34060_35650[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34047 === (17))){
var inst_34039 = (state_34046[(2)]);
var state_34046__$1 = (function (){var statearr_34062 = state_34046;
(statearr_34062[(10)] = inst_34039);

return statearr_34062;
})();
var statearr_34063_35651 = state_34046__$1;
(statearr_34063_35651[(2)] = null);

(statearr_34063_35651[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34047 === (3))){
var inst_34044 = (state_34046[(2)]);
var state_34046__$1 = state_34046;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34046__$1,inst_34044);
} else {
if((state_val_34047 === (12))){
var _ = (function (){var statearr_34064 = state_34046;
(statearr_34064[(4)] = cljs.core.rest((state_34046[(4)])));

return statearr_34064;
})();
var state_34046__$1 = state_34046;
var ex34061 = (state_34046__$1[(2)]);
var statearr_34065_35652 = state_34046__$1;
(statearr_34065_35652[(5)] = ex34061);


if((ex34061 instanceof Object)){
var statearr_34070_35653 = state_34046__$1;
(statearr_34070_35653[(1)] = (11));

(statearr_34070_35653[(5)] = null);

} else {
throw ex34061;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34047 === (2))){
var inst_33998 = cljs.core.reset_BANG_(dctr,cnt);
var inst_33999 = cnt;
var inst_34000 = (0);
var state_34046__$1 = (function (){var statearr_34071 = state_34046;
(statearr_34071[(7)] = inst_34000);

(statearr_34071[(8)] = inst_33999);

(statearr_34071[(11)] = inst_33998);

return statearr_34071;
})();
var statearr_34073_35654 = state_34046__$1;
(statearr_34073_35654[(2)] = null);

(statearr_34073_35654[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34047 === (11))){
var inst_34011 = (state_34046[(2)]);
var inst_34012 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_34046__$1 = (function (){var statearr_34077 = state_34046;
(statearr_34077[(12)] = inst_34011);

return statearr_34077;
})();
var statearr_34078_35656 = state_34046__$1;
(statearr_34078_35656[(2)] = inst_34012);

(statearr_34078_35656[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34047 === (9))){
var inst_34000 = (state_34046[(7)]);
var _ = (function (){var statearr_34079 = state_34046;
(statearr_34079[(4)] = cljs.core.cons((12),(state_34046[(4)])));

return statearr_34079;
})();
var inst_34018 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_34000) : chs__$1.call(null,inst_34000));
var inst_34019 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_34000) : done.call(null,inst_34000));
var inst_34020 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_34018,inst_34019);
var ___$1 = (function (){var statearr_34080 = state_34046;
(statearr_34080[(4)] = cljs.core.rest((state_34046[(4)])));

return statearr_34080;
})();
var state_34046__$1 = state_34046;
var statearr_34081_35660 = state_34046__$1;
(statearr_34081_35660[(2)] = inst_34020);

(statearr_34081_35660[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34047 === (5))){
var inst_34030 = (state_34046[(2)]);
var state_34046__$1 = (function (){var statearr_34082 = state_34046;
(statearr_34082[(13)] = inst_34030);

return statearr_34082;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34046__$1,(13),dchan);
} else {
if((state_val_34047 === (14))){
var inst_34035 = cljs.core.async.close_BANG_(out);
var state_34046__$1 = state_34046;
var statearr_34083_35661 = state_34046__$1;
(statearr_34083_35661[(2)] = inst_34035);

(statearr_34083_35661[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34047 === (16))){
var inst_34042 = (state_34046[(2)]);
var state_34046__$1 = state_34046;
var statearr_34084_35662 = state_34046__$1;
(statearr_34084_35662[(2)] = inst_34042);

(statearr_34084_35662[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34047 === (10))){
var inst_34000 = (state_34046[(7)]);
var inst_34023 = (state_34046[(2)]);
var inst_34024 = (inst_34000 + (1));
var inst_34000__$1 = inst_34024;
var state_34046__$1 = (function (){var statearr_34085 = state_34046;
(statearr_34085[(7)] = inst_34000__$1);

(statearr_34085[(14)] = inst_34023);

return statearr_34085;
})();
var statearr_34086_35664 = state_34046__$1;
(statearr_34086_35664[(2)] = null);

(statearr_34086_35664[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34047 === (8))){
var inst_34028 = (state_34046[(2)]);
var state_34046__$1 = state_34046;
var statearr_34087_35665 = state_34046__$1;
(statearr_34087_35665[(2)] = inst_34028);

(statearr_34087_35665[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__32085__auto__ = null;
var cljs$core$async$state_machine__32085__auto____0 = (function (){
var statearr_34089 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34089[(0)] = cljs$core$async$state_machine__32085__auto__);

(statearr_34089[(1)] = (1));

return statearr_34089;
});
var cljs$core$async$state_machine__32085__auto____1 = (function (state_34046){
while(true){
var ret_value__32086__auto__ = (function (){try{while(true){
var result__32087__auto__ = switch__32084__auto__(state_34046);
if(cljs.core.keyword_identical_QMARK_(result__32087__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32087__auto__;
}
break;
}
}catch (e34091){var ex__32088__auto__ = e34091;
var statearr_34092_35671 = state_34046;
(statearr_34092_35671[(2)] = ex__32088__auto__);


if(cljs.core.seq((state_34046[(4)]))){
var statearr_34093_35672 = state_34046;
(statearr_34093_35672[(1)] = cljs.core.first((state_34046[(4)])));

} else {
throw ex__32088__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32086__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35673 = state_34046;
state_34046 = G__35673;
continue;
} else {
return ret_value__32086__auto__;
}
break;
}
});
cljs$core$async$state_machine__32085__auto__ = function(state_34046){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32085__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32085__auto____1.call(this,state_34046);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32085__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32085__auto____0;
cljs$core$async$state_machine__32085__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32085__auto____1;
return cljs$core$async$state_machine__32085__auto__;
})()
})();
var state__32386__auto__ = (function (){var statearr_34094 = f__32385__auto__();
(statearr_34094[(6)] = c__32384__auto___35634);

return statearr_34094;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32386__auto__);
}));


return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__34100 = arguments.length;
switch (G__34100) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__32384__auto___35677 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32385__auto__ = (function (){var switch__32084__auto__ = (function (state_34132){
var state_val_34133 = (state_34132[(1)]);
if((state_val_34133 === (7))){
var inst_34111 = (state_34132[(7)]);
var inst_34112 = (state_34132[(8)]);
var inst_34111__$1 = (state_34132[(2)]);
var inst_34112__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34111__$1,(0),null);
var inst_34113 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34111__$1,(1),null);
var inst_34114 = (inst_34112__$1 == null);
var state_34132__$1 = (function (){var statearr_34134 = state_34132;
(statearr_34134[(7)] = inst_34111__$1);

(statearr_34134[(9)] = inst_34113);

(statearr_34134[(8)] = inst_34112__$1);

return statearr_34134;
})();
if(cljs.core.truth_(inst_34114)){
var statearr_34135_35685 = state_34132__$1;
(statearr_34135_35685[(1)] = (8));

} else {
var statearr_34136_35686 = state_34132__$1;
(statearr_34136_35686[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34133 === (1))){
var inst_34101 = cljs.core.vec(chs);
var inst_34102 = inst_34101;
var state_34132__$1 = (function (){var statearr_34137 = state_34132;
(statearr_34137[(10)] = inst_34102);

return statearr_34137;
})();
var statearr_34138_35687 = state_34132__$1;
(statearr_34138_35687[(2)] = null);

(statearr_34138_35687[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34133 === (4))){
var inst_34102 = (state_34132[(10)]);
var state_34132__$1 = state_34132;
return cljs.core.async.ioc_alts_BANG_(state_34132__$1,(7),inst_34102);
} else {
if((state_val_34133 === (6))){
var inst_34128 = (state_34132[(2)]);
var state_34132__$1 = state_34132;
var statearr_34139_35688 = state_34132__$1;
(statearr_34139_35688[(2)] = inst_34128);

(statearr_34139_35688[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34133 === (3))){
var inst_34130 = (state_34132[(2)]);
var state_34132__$1 = state_34132;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34132__$1,inst_34130);
} else {
if((state_val_34133 === (2))){
var inst_34102 = (state_34132[(10)]);
var inst_34104 = cljs.core.count(inst_34102);
var inst_34105 = (inst_34104 > (0));
var state_34132__$1 = state_34132;
if(cljs.core.truth_(inst_34105)){
var statearr_34141_35694 = state_34132__$1;
(statearr_34141_35694[(1)] = (4));

} else {
var statearr_34142_35695 = state_34132__$1;
(statearr_34142_35695[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34133 === (11))){
var inst_34102 = (state_34132[(10)]);
var inst_34121 = (state_34132[(2)]);
var tmp34140 = inst_34102;
var inst_34102__$1 = tmp34140;
var state_34132__$1 = (function (){var statearr_34143 = state_34132;
(statearr_34143[(11)] = inst_34121);

(statearr_34143[(10)] = inst_34102__$1);

return statearr_34143;
})();
var statearr_34144_35698 = state_34132__$1;
(statearr_34144_35698[(2)] = null);

(statearr_34144_35698[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34133 === (9))){
var inst_34112 = (state_34132[(8)]);
var state_34132__$1 = state_34132;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34132__$1,(11),out,inst_34112);
} else {
if((state_val_34133 === (5))){
var inst_34126 = cljs.core.async.close_BANG_(out);
var state_34132__$1 = state_34132;
var statearr_34145_35700 = state_34132__$1;
(statearr_34145_35700[(2)] = inst_34126);

(statearr_34145_35700[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34133 === (10))){
var inst_34124 = (state_34132[(2)]);
var state_34132__$1 = state_34132;
var statearr_34146_35702 = state_34132__$1;
(statearr_34146_35702[(2)] = inst_34124);

(statearr_34146_35702[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34133 === (8))){
var inst_34111 = (state_34132[(7)]);
var inst_34113 = (state_34132[(9)]);
var inst_34112 = (state_34132[(8)]);
var inst_34102 = (state_34132[(10)]);
var inst_34116 = (function (){var cs = inst_34102;
var vec__34107 = inst_34111;
var v = inst_34112;
var c = inst_34113;
return (function (p1__34098_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__34098_SHARP_);
});
})();
var inst_34117 = cljs.core.filterv(inst_34116,inst_34102);
var inst_34102__$1 = inst_34117;
var state_34132__$1 = (function (){var statearr_34147 = state_34132;
(statearr_34147[(10)] = inst_34102__$1);

return statearr_34147;
})();
var statearr_34148_35711 = state_34132__$1;
(statearr_34148_35711[(2)] = null);

(statearr_34148_35711[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
}
});
return (function() {
var cljs$core$async$state_machine__32085__auto__ = null;
var cljs$core$async$state_machine__32085__auto____0 = (function (){
var statearr_34149 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34149[(0)] = cljs$core$async$state_machine__32085__auto__);

(statearr_34149[(1)] = (1));

return statearr_34149;
});
var cljs$core$async$state_machine__32085__auto____1 = (function (state_34132){
while(true){
var ret_value__32086__auto__ = (function (){try{while(true){
var result__32087__auto__ = switch__32084__auto__(state_34132);
if(cljs.core.keyword_identical_QMARK_(result__32087__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32087__auto__;
}
break;
}
}catch (e34150){var ex__32088__auto__ = e34150;
var statearr_34151_35712 = state_34132;
(statearr_34151_35712[(2)] = ex__32088__auto__);


if(cljs.core.seq((state_34132[(4)]))){
var statearr_34152_35713 = state_34132;
(statearr_34152_35713[(1)] = cljs.core.first((state_34132[(4)])));

} else {
throw ex__32088__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32086__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35714 = state_34132;
state_34132 = G__35714;
continue;
} else {
return ret_value__32086__auto__;
}
break;
}
});
cljs$core$async$state_machine__32085__auto__ = function(state_34132){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32085__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32085__auto____1.call(this,state_34132);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32085__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32085__auto____0;
cljs$core$async$state_machine__32085__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32085__auto____1;
return cljs$core$async$state_machine__32085__auto__;
})()
})();
var state__32386__auto__ = (function (){var statearr_34153 = f__32385__auto__();
(statearr_34153[(6)] = c__32384__auto___35677);

return statearr_34153;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32386__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__34156 = arguments.length;
switch (G__34156) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__32384__auto___35718 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32385__auto__ = (function (){var switch__32084__auto__ = (function (state_34183){
var state_val_34184 = (state_34183[(1)]);
if((state_val_34184 === (7))){
var inst_34162 = (state_34183[(7)]);
var inst_34162__$1 = (state_34183[(2)]);
var inst_34163 = (inst_34162__$1 == null);
var inst_34164 = cljs.core.not(inst_34163);
var state_34183__$1 = (function (){var statearr_34185 = state_34183;
(statearr_34185[(7)] = inst_34162__$1);

return statearr_34185;
})();
if(inst_34164){
var statearr_34186_35719 = state_34183__$1;
(statearr_34186_35719[(1)] = (8));

} else {
var statearr_34187_35721 = state_34183__$1;
(statearr_34187_35721[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34184 === (1))){
var inst_34157 = (0);
var state_34183__$1 = (function (){var statearr_34188 = state_34183;
(statearr_34188[(8)] = inst_34157);

return statearr_34188;
})();
var statearr_34189_35722 = state_34183__$1;
(statearr_34189_35722[(2)] = null);

(statearr_34189_35722[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34184 === (4))){
var state_34183__$1 = state_34183;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34183__$1,(7),ch);
} else {
if((state_val_34184 === (6))){
var inst_34175 = (state_34183[(2)]);
var state_34183__$1 = state_34183;
var statearr_34190_35723 = state_34183__$1;
(statearr_34190_35723[(2)] = inst_34175);

(statearr_34190_35723[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34184 === (3))){
var inst_34177 = (state_34183[(2)]);
var inst_34178 = cljs.core.async.close_BANG_(out);
var state_34183__$1 = (function (){var statearr_34195 = state_34183;
(statearr_34195[(9)] = inst_34177);

return statearr_34195;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_34183__$1,inst_34178);
} else {
if((state_val_34184 === (2))){
var inst_34157 = (state_34183[(8)]);
var inst_34159 = (inst_34157 < n);
var state_34183__$1 = state_34183;
if(cljs.core.truth_(inst_34159)){
var statearr_34196_35724 = state_34183__$1;
(statearr_34196_35724[(1)] = (4));

} else {
var statearr_34197_35725 = state_34183__$1;
(statearr_34197_35725[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34184 === (11))){
var inst_34157 = (state_34183[(8)]);
var inst_34167 = (state_34183[(2)]);
var inst_34168 = (inst_34157 + (1));
var inst_34157__$1 = inst_34168;
var state_34183__$1 = (function (){var statearr_34198 = state_34183;
(statearr_34198[(10)] = inst_34167);

(statearr_34198[(8)] = inst_34157__$1);

return statearr_34198;
})();
var statearr_34199_35726 = state_34183__$1;
(statearr_34199_35726[(2)] = null);

(statearr_34199_35726[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34184 === (9))){
var state_34183__$1 = state_34183;
var statearr_34200_35727 = state_34183__$1;
(statearr_34200_35727[(2)] = null);

(statearr_34200_35727[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34184 === (5))){
var state_34183__$1 = state_34183;
var statearr_34201_35729 = state_34183__$1;
(statearr_34201_35729[(2)] = null);

(statearr_34201_35729[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34184 === (10))){
var inst_34172 = (state_34183[(2)]);
var state_34183__$1 = state_34183;
var statearr_34202_35731 = state_34183__$1;
(statearr_34202_35731[(2)] = inst_34172);

(statearr_34202_35731[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34184 === (8))){
var inst_34162 = (state_34183[(7)]);
var state_34183__$1 = state_34183;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34183__$1,(11),out,inst_34162);
} else {
return null;
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
}
});
return (function() {
var cljs$core$async$state_machine__32085__auto__ = null;
var cljs$core$async$state_machine__32085__auto____0 = (function (){
var statearr_34203 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34203[(0)] = cljs$core$async$state_machine__32085__auto__);

(statearr_34203[(1)] = (1));

return statearr_34203;
});
var cljs$core$async$state_machine__32085__auto____1 = (function (state_34183){
while(true){
var ret_value__32086__auto__ = (function (){try{while(true){
var result__32087__auto__ = switch__32084__auto__(state_34183);
if(cljs.core.keyword_identical_QMARK_(result__32087__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32087__auto__;
}
break;
}
}catch (e34204){var ex__32088__auto__ = e34204;
var statearr_34205_35735 = state_34183;
(statearr_34205_35735[(2)] = ex__32088__auto__);


if(cljs.core.seq((state_34183[(4)]))){
var statearr_34206_35736 = state_34183;
(statearr_34206_35736[(1)] = cljs.core.first((state_34183[(4)])));

} else {
throw ex__32088__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32086__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35737 = state_34183;
state_34183 = G__35737;
continue;
} else {
return ret_value__32086__auto__;
}
break;
}
});
cljs$core$async$state_machine__32085__auto__ = function(state_34183){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32085__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32085__auto____1.call(this,state_34183);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32085__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32085__auto____0;
cljs$core$async$state_machine__32085__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32085__auto____1;
return cljs$core$async$state_machine__32085__auto__;
})()
})();
var state__32386__auto__ = (function (){var statearr_34207 = f__32385__auto__();
(statearr_34207[(6)] = c__32384__auto___35718);

return statearr_34207;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32386__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34209 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34209 = (function (f,ch,meta34210){
this.f = f;
this.ch = ch;
this.meta34210 = meta34210;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34209.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34211,meta34210__$1){
var self__ = this;
var _34211__$1 = this;
return (new cljs.core.async.t_cljs$core$async34209(self__.f,self__.ch,meta34210__$1));
}));

(cljs.core.async.t_cljs$core$async34209.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34211){
var self__ = this;
var _34211__$1 = this;
return self__.meta34210;
}));

(cljs.core.async.t_cljs$core$async34209.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34209.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async34209.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async34209.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34209.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34232 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34232 = (function (f,ch,meta34210,_,fn1,meta34233){
this.f = f;
this.ch = ch;
this.meta34210 = meta34210;
this._ = _;
this.fn1 = fn1;
this.meta34233 = meta34233;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34232.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34234,meta34233__$1){
var self__ = this;
var _34234__$1 = this;
return (new cljs.core.async.t_cljs$core$async34232(self__.f,self__.ch,self__.meta34210,self__._,self__.fn1,meta34233__$1));
}));

(cljs.core.async.t_cljs$core$async34232.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34234){
var self__ = this;
var _34234__$1 = this;
return self__.meta34233;
}));

(cljs.core.async.t_cljs$core$async34232.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34232.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async34232.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async34232.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__34208_SHARP_){
var G__34255 = (((p1__34208_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__34208_SHARP_) : self__.f.call(null,p1__34208_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__34255) : f1.call(null,G__34255));
});
}));

(cljs.core.async.t_cljs$core$async34232.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34210","meta34210",1402170182,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async34209","cljs.core.async/t_cljs$core$async34209",993124579,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta34233","meta34233",808612523,null)], null);
}));

(cljs.core.async.t_cljs$core$async34232.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34232.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34232");

(cljs.core.async.t_cljs$core$async34232.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async34232");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34232.
 */
cljs.core.async.__GT_t_cljs$core$async34232 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async34232(f__$1,ch__$1,meta34210__$1,___$2,fn1__$1,meta34233){
return (new cljs.core.async.t_cljs$core$async34232(f__$1,ch__$1,meta34210__$1,___$2,fn1__$1,meta34233));
});

}

return (new cljs.core.async.t_cljs$core$async34232(self__.f,self__.ch,self__.meta34210,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4251__auto__ = ret;
if(cljs.core.truth_(and__4251__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4251__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__34259 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__34259) : self__.f.call(null,G__34259));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async34209.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34209.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async34209.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34210","meta34210",1402170182,null)], null);
}));

(cljs.core.async.t_cljs$core$async34209.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34209.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34209");

(cljs.core.async.t_cljs$core$async34209.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async34209");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34209.
 */
cljs.core.async.__GT_t_cljs$core$async34209 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async34209(f__$1,ch__$1,meta34210){
return (new cljs.core.async.t_cljs$core$async34209(f__$1,ch__$1,meta34210));
});

}

return (new cljs.core.async.t_cljs$core$async34209(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34263 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34263 = (function (f,ch,meta34264){
this.f = f;
this.ch = ch;
this.meta34264 = meta34264;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34263.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34265,meta34264__$1){
var self__ = this;
var _34265__$1 = this;
return (new cljs.core.async.t_cljs$core$async34263(self__.f,self__.ch,meta34264__$1));
}));

(cljs.core.async.t_cljs$core$async34263.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34265){
var self__ = this;
var _34265__$1 = this;
return self__.meta34264;
}));

(cljs.core.async.t_cljs$core$async34263.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34263.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async34263.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34263.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async34263.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34263.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async34263.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34264","meta34264",-421753907,null)], null);
}));

(cljs.core.async.t_cljs$core$async34263.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34263.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34263");

(cljs.core.async.t_cljs$core$async34263.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async34263");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34263.
 */
cljs.core.async.__GT_t_cljs$core$async34263 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async34263(f__$1,ch__$1,meta34264){
return (new cljs.core.async.t_cljs$core$async34263(f__$1,ch__$1,meta34264));
});

}

return (new cljs.core.async.t_cljs$core$async34263(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34266 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34266 = (function (p,ch,meta34267){
this.p = p;
this.ch = ch;
this.meta34267 = meta34267;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34266.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34268,meta34267__$1){
var self__ = this;
var _34268__$1 = this;
return (new cljs.core.async.t_cljs$core$async34266(self__.p,self__.ch,meta34267__$1));
}));

(cljs.core.async.t_cljs$core$async34266.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34268){
var self__ = this;
var _34268__$1 = this;
return self__.meta34267;
}));

(cljs.core.async.t_cljs$core$async34266.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34266.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async34266.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async34266.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34266.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async34266.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34266.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async34266.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34267","meta34267",-2078433234,null)], null);
}));

(cljs.core.async.t_cljs$core$async34266.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34266.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34266");

(cljs.core.async.t_cljs$core$async34266.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async34266");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34266.
 */
cljs.core.async.__GT_t_cljs$core$async34266 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async34266(p__$1,ch__$1,meta34267){
return (new cljs.core.async.t_cljs$core$async34266(p__$1,ch__$1,meta34267));
});

}

return (new cljs.core.async.t_cljs$core$async34266(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__34281 = arguments.length;
switch (G__34281) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__32384__auto___35771 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32385__auto__ = (function (){var switch__32084__auto__ = (function (state_34302){
var state_val_34303 = (state_34302[(1)]);
if((state_val_34303 === (7))){
var inst_34298 = (state_34302[(2)]);
var state_34302__$1 = state_34302;
var statearr_34304_35773 = state_34302__$1;
(statearr_34304_35773[(2)] = inst_34298);

(statearr_34304_35773[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34303 === (1))){
var state_34302__$1 = state_34302;
var statearr_34305_35778 = state_34302__$1;
(statearr_34305_35778[(2)] = null);

(statearr_34305_35778[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34303 === (4))){
var inst_34284 = (state_34302[(7)]);
var inst_34284__$1 = (state_34302[(2)]);
var inst_34285 = (inst_34284__$1 == null);
var state_34302__$1 = (function (){var statearr_34306 = state_34302;
(statearr_34306[(7)] = inst_34284__$1);

return statearr_34306;
})();
if(cljs.core.truth_(inst_34285)){
var statearr_34307_35779 = state_34302__$1;
(statearr_34307_35779[(1)] = (5));

} else {
var statearr_34308_35780 = state_34302__$1;
(statearr_34308_35780[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34303 === (6))){
var inst_34284 = (state_34302[(7)]);
var inst_34289 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_34284) : p.call(null,inst_34284));
var state_34302__$1 = state_34302;
if(cljs.core.truth_(inst_34289)){
var statearr_34309_35781 = state_34302__$1;
(statearr_34309_35781[(1)] = (8));

} else {
var statearr_34310_35782 = state_34302__$1;
(statearr_34310_35782[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34303 === (3))){
var inst_34300 = (state_34302[(2)]);
var state_34302__$1 = state_34302;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34302__$1,inst_34300);
} else {
if((state_val_34303 === (2))){
var state_34302__$1 = state_34302;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34302__$1,(4),ch);
} else {
if((state_val_34303 === (11))){
var inst_34292 = (state_34302[(2)]);
var state_34302__$1 = state_34302;
var statearr_34311_35784 = state_34302__$1;
(statearr_34311_35784[(2)] = inst_34292);

(statearr_34311_35784[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34303 === (9))){
var state_34302__$1 = state_34302;
var statearr_34312_35785 = state_34302__$1;
(statearr_34312_35785[(2)] = null);

(statearr_34312_35785[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34303 === (5))){
var inst_34287 = cljs.core.async.close_BANG_(out);
var state_34302__$1 = state_34302;
var statearr_34313_35786 = state_34302__$1;
(statearr_34313_35786[(2)] = inst_34287);

(statearr_34313_35786[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34303 === (10))){
var inst_34295 = (state_34302[(2)]);
var state_34302__$1 = (function (){var statearr_34314 = state_34302;
(statearr_34314[(8)] = inst_34295);

return statearr_34314;
})();
var statearr_34315_35791 = state_34302__$1;
(statearr_34315_35791[(2)] = null);

(statearr_34315_35791[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34303 === (8))){
var inst_34284 = (state_34302[(7)]);
var state_34302__$1 = state_34302;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34302__$1,(11),out,inst_34284);
} else {
return null;
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
}
});
return (function() {
var cljs$core$async$state_machine__32085__auto__ = null;
var cljs$core$async$state_machine__32085__auto____0 = (function (){
var statearr_34316 = [null,null,null,null,null,null,null,null,null];
(statearr_34316[(0)] = cljs$core$async$state_machine__32085__auto__);

(statearr_34316[(1)] = (1));

return statearr_34316;
});
var cljs$core$async$state_machine__32085__auto____1 = (function (state_34302){
while(true){
var ret_value__32086__auto__ = (function (){try{while(true){
var result__32087__auto__ = switch__32084__auto__(state_34302);
if(cljs.core.keyword_identical_QMARK_(result__32087__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32087__auto__;
}
break;
}
}catch (e34317){var ex__32088__auto__ = e34317;
var statearr_34318_35805 = state_34302;
(statearr_34318_35805[(2)] = ex__32088__auto__);


if(cljs.core.seq((state_34302[(4)]))){
var statearr_34320_35806 = state_34302;
(statearr_34320_35806[(1)] = cljs.core.first((state_34302[(4)])));

} else {
throw ex__32088__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32086__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35807 = state_34302;
state_34302 = G__35807;
continue;
} else {
return ret_value__32086__auto__;
}
break;
}
});
cljs$core$async$state_machine__32085__auto__ = function(state_34302){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32085__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32085__auto____1.call(this,state_34302);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32085__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32085__auto____0;
cljs$core$async$state_machine__32085__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32085__auto____1;
return cljs$core$async$state_machine__32085__auto__;
})()
})();
var state__32386__auto__ = (function (){var statearr_34322 = f__32385__auto__();
(statearr_34322[(6)] = c__32384__auto___35771);

return statearr_34322;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32386__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__34328 = arguments.length;
switch (G__34328) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__32384__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32385__auto__ = (function (){var switch__32084__auto__ = (function (state_34392){
var state_val_34393 = (state_34392[(1)]);
if((state_val_34393 === (7))){
var inst_34388 = (state_34392[(2)]);
var state_34392__$1 = state_34392;
var statearr_34394_35812 = state_34392__$1;
(statearr_34394_35812[(2)] = inst_34388);

(statearr_34394_35812[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34393 === (20))){
var inst_34358 = (state_34392[(7)]);
var inst_34369 = (state_34392[(2)]);
var inst_34370 = cljs.core.next(inst_34358);
var inst_34344 = inst_34370;
var inst_34345 = null;
var inst_34346 = (0);
var inst_34347 = (0);
var state_34392__$1 = (function (){var statearr_34395 = state_34392;
(statearr_34395[(8)] = inst_34345);

(statearr_34395[(9)] = inst_34344);

(statearr_34395[(10)] = inst_34346);

(statearr_34395[(11)] = inst_34347);

(statearr_34395[(12)] = inst_34369);

return statearr_34395;
})();
var statearr_34396_35813 = state_34392__$1;
(statearr_34396_35813[(2)] = null);

(statearr_34396_35813[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34393 === (1))){
var state_34392__$1 = state_34392;
var statearr_34397_35817 = state_34392__$1;
(statearr_34397_35817[(2)] = null);

(statearr_34397_35817[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34393 === (4))){
var inst_34333 = (state_34392[(13)]);
var inst_34333__$1 = (state_34392[(2)]);
var inst_34334 = (inst_34333__$1 == null);
var state_34392__$1 = (function (){var statearr_34398 = state_34392;
(statearr_34398[(13)] = inst_34333__$1);

return statearr_34398;
})();
if(cljs.core.truth_(inst_34334)){
var statearr_34399_35818 = state_34392__$1;
(statearr_34399_35818[(1)] = (5));

} else {
var statearr_34400_35819 = state_34392__$1;
(statearr_34400_35819[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34393 === (15))){
var state_34392__$1 = state_34392;
var statearr_34407_35820 = state_34392__$1;
(statearr_34407_35820[(2)] = null);

(statearr_34407_35820[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34393 === (21))){
var state_34392__$1 = state_34392;
var statearr_34408_35821 = state_34392__$1;
(statearr_34408_35821[(2)] = null);

(statearr_34408_35821[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34393 === (13))){
var inst_34345 = (state_34392[(8)]);
var inst_34344 = (state_34392[(9)]);
var inst_34346 = (state_34392[(10)]);
var inst_34347 = (state_34392[(11)]);
var inst_34354 = (state_34392[(2)]);
var inst_34355 = (inst_34347 + (1));
var tmp34401 = inst_34345;
var tmp34402 = inst_34344;
var tmp34403 = inst_34346;
var inst_34344__$1 = tmp34402;
var inst_34345__$1 = tmp34401;
var inst_34346__$1 = tmp34403;
var inst_34347__$1 = inst_34355;
var state_34392__$1 = (function (){var statearr_34409 = state_34392;
(statearr_34409[(8)] = inst_34345__$1);

(statearr_34409[(9)] = inst_34344__$1);

(statearr_34409[(10)] = inst_34346__$1);

(statearr_34409[(11)] = inst_34347__$1);

(statearr_34409[(14)] = inst_34354);

return statearr_34409;
})();
var statearr_34410_35825 = state_34392__$1;
(statearr_34410_35825[(2)] = null);

(statearr_34410_35825[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34393 === (22))){
var state_34392__$1 = state_34392;
var statearr_34411_35826 = state_34392__$1;
(statearr_34411_35826[(2)] = null);

(statearr_34411_35826[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34393 === (6))){
var inst_34333 = (state_34392[(13)]);
var inst_34342 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_34333) : f.call(null,inst_34333));
var inst_34343 = cljs.core.seq(inst_34342);
var inst_34344 = inst_34343;
var inst_34345 = null;
var inst_34346 = (0);
var inst_34347 = (0);
var state_34392__$1 = (function (){var statearr_34415 = state_34392;
(statearr_34415[(8)] = inst_34345);

(statearr_34415[(9)] = inst_34344);

(statearr_34415[(10)] = inst_34346);

(statearr_34415[(11)] = inst_34347);

return statearr_34415;
})();
var statearr_34420_35828 = state_34392__$1;
(statearr_34420_35828[(2)] = null);

(statearr_34420_35828[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34393 === (17))){
var inst_34358 = (state_34392[(7)]);
var inst_34362 = cljs.core.chunk_first(inst_34358);
var inst_34363 = cljs.core.chunk_rest(inst_34358);
var inst_34364 = cljs.core.count(inst_34362);
var inst_34344 = inst_34363;
var inst_34345 = inst_34362;
var inst_34346 = inst_34364;
var inst_34347 = (0);
var state_34392__$1 = (function (){var statearr_34427 = state_34392;
(statearr_34427[(8)] = inst_34345);

(statearr_34427[(9)] = inst_34344);

(statearr_34427[(10)] = inst_34346);

(statearr_34427[(11)] = inst_34347);

return statearr_34427;
})();
var statearr_34428_35832 = state_34392__$1;
(statearr_34428_35832[(2)] = null);

(statearr_34428_35832[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34393 === (3))){
var inst_34390 = (state_34392[(2)]);
var state_34392__$1 = state_34392;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34392__$1,inst_34390);
} else {
if((state_val_34393 === (12))){
var inst_34378 = (state_34392[(2)]);
var state_34392__$1 = state_34392;
var statearr_34429_35834 = state_34392__$1;
(statearr_34429_35834[(2)] = inst_34378);

(statearr_34429_35834[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34393 === (2))){
var state_34392__$1 = state_34392;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34392__$1,(4),in$);
} else {
if((state_val_34393 === (23))){
var inst_34386 = (state_34392[(2)]);
var state_34392__$1 = state_34392;
var statearr_34437_35839 = state_34392__$1;
(statearr_34437_35839[(2)] = inst_34386);

(statearr_34437_35839[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34393 === (19))){
var inst_34373 = (state_34392[(2)]);
var state_34392__$1 = state_34392;
var statearr_34441_35841 = state_34392__$1;
(statearr_34441_35841[(2)] = inst_34373);

(statearr_34441_35841[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34393 === (11))){
var inst_34344 = (state_34392[(9)]);
var inst_34358 = (state_34392[(7)]);
var inst_34358__$1 = cljs.core.seq(inst_34344);
var state_34392__$1 = (function (){var statearr_34442 = state_34392;
(statearr_34442[(7)] = inst_34358__$1);

return statearr_34442;
})();
if(inst_34358__$1){
var statearr_34443_35842 = state_34392__$1;
(statearr_34443_35842[(1)] = (14));

} else {
var statearr_34444_35843 = state_34392__$1;
(statearr_34444_35843[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34393 === (9))){
var inst_34380 = (state_34392[(2)]);
var inst_34381 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_34392__$1 = (function (){var statearr_34445 = state_34392;
(statearr_34445[(15)] = inst_34380);

return statearr_34445;
})();
if(cljs.core.truth_(inst_34381)){
var statearr_34449_35844 = state_34392__$1;
(statearr_34449_35844[(1)] = (21));

} else {
var statearr_34450_35845 = state_34392__$1;
(statearr_34450_35845[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34393 === (5))){
var inst_34336 = cljs.core.async.close_BANG_(out);
var state_34392__$1 = state_34392;
var statearr_34455_35846 = state_34392__$1;
(statearr_34455_35846[(2)] = inst_34336);

(statearr_34455_35846[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34393 === (14))){
var inst_34358 = (state_34392[(7)]);
var inst_34360 = cljs.core.chunked_seq_QMARK_(inst_34358);
var state_34392__$1 = state_34392;
if(inst_34360){
var statearr_34459_35848 = state_34392__$1;
(statearr_34459_35848[(1)] = (17));

} else {
var statearr_34460_35849 = state_34392__$1;
(statearr_34460_35849[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34393 === (16))){
var inst_34376 = (state_34392[(2)]);
var state_34392__$1 = state_34392;
var statearr_34468_35850 = state_34392__$1;
(statearr_34468_35850[(2)] = inst_34376);

(statearr_34468_35850[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34393 === (10))){
var inst_34345 = (state_34392[(8)]);
var inst_34347 = (state_34392[(11)]);
var inst_34352 = cljs.core._nth(inst_34345,inst_34347);
var state_34392__$1 = state_34392;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34392__$1,(13),out,inst_34352);
} else {
if((state_val_34393 === (18))){
var inst_34358 = (state_34392[(7)]);
var inst_34367 = cljs.core.first(inst_34358);
var state_34392__$1 = state_34392;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34392__$1,(20),out,inst_34367);
} else {
if((state_val_34393 === (8))){
var inst_34346 = (state_34392[(10)]);
var inst_34347 = (state_34392[(11)]);
var inst_34349 = (inst_34347 < inst_34346);
var inst_34350 = inst_34349;
var state_34392__$1 = state_34392;
if(cljs.core.truth_(inst_34350)){
var statearr_34471_35851 = state_34392__$1;
(statearr_34471_35851[(1)] = (10));

} else {
var statearr_34472_35852 = state_34392__$1;
(statearr_34472_35852[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__32085__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__32085__auto____0 = (function (){
var statearr_34473 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34473[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__32085__auto__);

(statearr_34473[(1)] = (1));

return statearr_34473;
});
var cljs$core$async$mapcat_STAR__$_state_machine__32085__auto____1 = (function (state_34392){
while(true){
var ret_value__32086__auto__ = (function (){try{while(true){
var result__32087__auto__ = switch__32084__auto__(state_34392);
if(cljs.core.keyword_identical_QMARK_(result__32087__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32087__auto__;
}
break;
}
}catch (e34474){var ex__32088__auto__ = e34474;
var statearr_34475_35854 = state_34392;
(statearr_34475_35854[(2)] = ex__32088__auto__);


if(cljs.core.seq((state_34392[(4)]))){
var statearr_34476_35855 = state_34392;
(statearr_34476_35855[(1)] = cljs.core.first((state_34392[(4)])));

} else {
throw ex__32088__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32086__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35858 = state_34392;
state_34392 = G__35858;
continue;
} else {
return ret_value__32086__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__32085__auto__ = function(state_34392){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__32085__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__32085__auto____1.call(this,state_34392);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__32085__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__32085__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__32085__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__32085__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__32085__auto__;
})()
})();
var state__32386__auto__ = (function (){var statearr_34477 = f__32385__auto__();
(statearr_34477[(6)] = c__32384__auto__);

return statearr_34477;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32386__auto__);
}));

return c__32384__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__34479 = arguments.length;
switch (G__34479) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__34481 = arguments.length;
switch (G__34481) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__34483 = arguments.length;
switch (G__34483) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__32384__auto___35882 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32385__auto__ = (function (){var switch__32084__auto__ = (function (state_34509){
var state_val_34510 = (state_34509[(1)]);
if((state_val_34510 === (7))){
var inst_34503 = (state_34509[(2)]);
var state_34509__$1 = state_34509;
var statearr_34511_35886 = state_34509__$1;
(statearr_34511_35886[(2)] = inst_34503);

(statearr_34511_35886[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34510 === (1))){
var inst_34484 = null;
var state_34509__$1 = (function (){var statearr_34512 = state_34509;
(statearr_34512[(7)] = inst_34484);

return statearr_34512;
})();
var statearr_34513_35887 = state_34509__$1;
(statearr_34513_35887[(2)] = null);

(statearr_34513_35887[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34510 === (4))){
var inst_34487 = (state_34509[(8)]);
var inst_34487__$1 = (state_34509[(2)]);
var inst_34488 = (inst_34487__$1 == null);
var inst_34489 = cljs.core.not(inst_34488);
var state_34509__$1 = (function (){var statearr_34515 = state_34509;
(statearr_34515[(8)] = inst_34487__$1);

return statearr_34515;
})();
if(inst_34489){
var statearr_34516_35888 = state_34509__$1;
(statearr_34516_35888[(1)] = (5));

} else {
var statearr_34527_35889 = state_34509__$1;
(statearr_34527_35889[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34510 === (6))){
var state_34509__$1 = state_34509;
var statearr_34528_35892 = state_34509__$1;
(statearr_34528_35892[(2)] = null);

(statearr_34528_35892[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34510 === (3))){
var inst_34505 = (state_34509[(2)]);
var inst_34506 = cljs.core.async.close_BANG_(out);
var state_34509__$1 = (function (){var statearr_34529 = state_34509;
(statearr_34529[(9)] = inst_34505);

return statearr_34529;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_34509__$1,inst_34506);
} else {
if((state_val_34510 === (2))){
var state_34509__$1 = state_34509;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34509__$1,(4),ch);
} else {
if((state_val_34510 === (11))){
var inst_34487 = (state_34509[(8)]);
var inst_34496 = (state_34509[(2)]);
var inst_34484 = inst_34487;
var state_34509__$1 = (function (){var statearr_34530 = state_34509;
(statearr_34530[(7)] = inst_34484);

(statearr_34530[(10)] = inst_34496);

return statearr_34530;
})();
var statearr_34532_35893 = state_34509__$1;
(statearr_34532_35893[(2)] = null);

(statearr_34532_35893[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34510 === (9))){
var inst_34487 = (state_34509[(8)]);
var state_34509__$1 = state_34509;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34509__$1,(11),out,inst_34487);
} else {
if((state_val_34510 === (5))){
var inst_34484 = (state_34509[(7)]);
var inst_34487 = (state_34509[(8)]);
var inst_34491 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_34487,inst_34484);
var state_34509__$1 = state_34509;
if(inst_34491){
var statearr_34535_35898 = state_34509__$1;
(statearr_34535_35898[(1)] = (8));

} else {
var statearr_34536_35899 = state_34509__$1;
(statearr_34536_35899[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34510 === (10))){
var inst_34499 = (state_34509[(2)]);
var state_34509__$1 = state_34509;
var statearr_34537_35900 = state_34509__$1;
(statearr_34537_35900[(2)] = inst_34499);

(statearr_34537_35900[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34510 === (8))){
var inst_34484 = (state_34509[(7)]);
var tmp34533 = inst_34484;
var inst_34484__$1 = tmp34533;
var state_34509__$1 = (function (){var statearr_34538 = state_34509;
(statearr_34538[(7)] = inst_34484__$1);

return statearr_34538;
})();
var statearr_34539_35901 = state_34509__$1;
(statearr_34539_35901[(2)] = null);

(statearr_34539_35901[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
}
});
return (function() {
var cljs$core$async$state_machine__32085__auto__ = null;
var cljs$core$async$state_machine__32085__auto____0 = (function (){
var statearr_34540 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34540[(0)] = cljs$core$async$state_machine__32085__auto__);

(statearr_34540[(1)] = (1));

return statearr_34540;
});
var cljs$core$async$state_machine__32085__auto____1 = (function (state_34509){
while(true){
var ret_value__32086__auto__ = (function (){try{while(true){
var result__32087__auto__ = switch__32084__auto__(state_34509);
if(cljs.core.keyword_identical_QMARK_(result__32087__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32087__auto__;
}
break;
}
}catch (e34541){var ex__32088__auto__ = e34541;
var statearr_34542_35902 = state_34509;
(statearr_34542_35902[(2)] = ex__32088__auto__);


if(cljs.core.seq((state_34509[(4)]))){
var statearr_34543_35903 = state_34509;
(statearr_34543_35903[(1)] = cljs.core.first((state_34509[(4)])));

} else {
throw ex__32088__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32086__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35904 = state_34509;
state_34509 = G__35904;
continue;
} else {
return ret_value__32086__auto__;
}
break;
}
});
cljs$core$async$state_machine__32085__auto__ = function(state_34509){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32085__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32085__auto____1.call(this,state_34509);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32085__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32085__auto____0;
cljs$core$async$state_machine__32085__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32085__auto____1;
return cljs$core$async$state_machine__32085__auto__;
})()
})();
var state__32386__auto__ = (function (){var statearr_34544 = f__32385__auto__();
(statearr_34544[(6)] = c__32384__auto___35882);

return statearr_34544;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32386__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__34546 = arguments.length;
switch (G__34546) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__32384__auto___35925 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32385__auto__ = (function (){var switch__32084__auto__ = (function (state_34586){
var state_val_34587 = (state_34586[(1)]);
if((state_val_34587 === (7))){
var inst_34582 = (state_34586[(2)]);
var state_34586__$1 = state_34586;
var statearr_34589_35926 = state_34586__$1;
(statearr_34589_35926[(2)] = inst_34582);

(statearr_34589_35926[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34587 === (1))){
var inst_34547 = (new Array(n));
var inst_34548 = inst_34547;
var inst_34549 = (0);
var state_34586__$1 = (function (){var statearr_34590 = state_34586;
(statearr_34590[(7)] = inst_34549);

(statearr_34590[(8)] = inst_34548);

return statearr_34590;
})();
var statearr_34591_35939 = state_34586__$1;
(statearr_34591_35939[(2)] = null);

(statearr_34591_35939[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34587 === (4))){
var inst_34552 = (state_34586[(9)]);
var inst_34552__$1 = (state_34586[(2)]);
var inst_34553 = (inst_34552__$1 == null);
var inst_34554 = cljs.core.not(inst_34553);
var state_34586__$1 = (function (){var statearr_34592 = state_34586;
(statearr_34592[(9)] = inst_34552__$1);

return statearr_34592;
})();
if(inst_34554){
var statearr_34593_35942 = state_34586__$1;
(statearr_34593_35942[(1)] = (5));

} else {
var statearr_34594_35943 = state_34586__$1;
(statearr_34594_35943[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34587 === (15))){
var inst_34576 = (state_34586[(2)]);
var state_34586__$1 = state_34586;
var statearr_34604_35944 = state_34586__$1;
(statearr_34604_35944[(2)] = inst_34576);

(statearr_34604_35944[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34587 === (13))){
var state_34586__$1 = state_34586;
var statearr_34605_35945 = state_34586__$1;
(statearr_34605_35945[(2)] = null);

(statearr_34605_35945[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34587 === (6))){
var inst_34549 = (state_34586[(7)]);
var inst_34572 = (inst_34549 > (0));
var state_34586__$1 = state_34586;
if(cljs.core.truth_(inst_34572)){
var statearr_34606_35946 = state_34586__$1;
(statearr_34606_35946[(1)] = (12));

} else {
var statearr_34607_35947 = state_34586__$1;
(statearr_34607_35947[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34587 === (3))){
var inst_34584 = (state_34586[(2)]);
var state_34586__$1 = state_34586;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34586__$1,inst_34584);
} else {
if((state_val_34587 === (12))){
var inst_34548 = (state_34586[(8)]);
var inst_34574 = cljs.core.vec(inst_34548);
var state_34586__$1 = state_34586;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34586__$1,(15),out,inst_34574);
} else {
if((state_val_34587 === (2))){
var state_34586__$1 = state_34586;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34586__$1,(4),ch);
} else {
if((state_val_34587 === (11))){
var inst_34566 = (state_34586[(2)]);
var inst_34567 = (new Array(n));
var inst_34548 = inst_34567;
var inst_34549 = (0);
var state_34586__$1 = (function (){var statearr_34609 = state_34586;
(statearr_34609[(7)] = inst_34549);

(statearr_34609[(8)] = inst_34548);

(statearr_34609[(10)] = inst_34566);

return statearr_34609;
})();
var statearr_34610_35952 = state_34586__$1;
(statearr_34610_35952[(2)] = null);

(statearr_34610_35952[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34587 === (9))){
var inst_34548 = (state_34586[(8)]);
var inst_34564 = cljs.core.vec(inst_34548);
var state_34586__$1 = state_34586;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34586__$1,(11),out,inst_34564);
} else {
if((state_val_34587 === (5))){
var inst_34552 = (state_34586[(9)]);
var inst_34557 = (state_34586[(11)]);
var inst_34549 = (state_34586[(7)]);
var inst_34548 = (state_34586[(8)]);
var inst_34556 = (inst_34548[inst_34549] = inst_34552);
var inst_34557__$1 = (inst_34549 + (1));
var inst_34559 = (inst_34557__$1 < n);
var state_34586__$1 = (function (){var statearr_34611 = state_34586;
(statearr_34611[(12)] = inst_34556);

(statearr_34611[(11)] = inst_34557__$1);

return statearr_34611;
})();
if(cljs.core.truth_(inst_34559)){
var statearr_34612_35965 = state_34586__$1;
(statearr_34612_35965[(1)] = (8));

} else {
var statearr_34613_35966 = state_34586__$1;
(statearr_34613_35966[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34587 === (14))){
var inst_34579 = (state_34586[(2)]);
var inst_34580 = cljs.core.async.close_BANG_(out);
var state_34586__$1 = (function (){var statearr_34615 = state_34586;
(statearr_34615[(13)] = inst_34579);

return statearr_34615;
})();
var statearr_34616_35967 = state_34586__$1;
(statearr_34616_35967[(2)] = inst_34580);

(statearr_34616_35967[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34587 === (10))){
var inst_34570 = (state_34586[(2)]);
var state_34586__$1 = state_34586;
var statearr_34617_35968 = state_34586__$1;
(statearr_34617_35968[(2)] = inst_34570);

(statearr_34617_35968[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34587 === (8))){
var inst_34557 = (state_34586[(11)]);
var inst_34548 = (state_34586[(8)]);
var tmp34614 = inst_34548;
var inst_34548__$1 = tmp34614;
var inst_34549 = inst_34557;
var state_34586__$1 = (function (){var statearr_34618 = state_34586;
(statearr_34618[(7)] = inst_34549);

(statearr_34618[(8)] = inst_34548__$1);

return statearr_34618;
})();
var statearr_34619_35969 = state_34586__$1;
(statearr_34619_35969[(2)] = null);

(statearr_34619_35969[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__32085__auto__ = null;
var cljs$core$async$state_machine__32085__auto____0 = (function (){
var statearr_34620 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34620[(0)] = cljs$core$async$state_machine__32085__auto__);

(statearr_34620[(1)] = (1));

return statearr_34620;
});
var cljs$core$async$state_machine__32085__auto____1 = (function (state_34586){
while(true){
var ret_value__32086__auto__ = (function (){try{while(true){
var result__32087__auto__ = switch__32084__auto__(state_34586);
if(cljs.core.keyword_identical_QMARK_(result__32087__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32087__auto__;
}
break;
}
}catch (e34623){var ex__32088__auto__ = e34623;
var statearr_34624_35975 = state_34586;
(statearr_34624_35975[(2)] = ex__32088__auto__);


if(cljs.core.seq((state_34586[(4)]))){
var statearr_34625_35976 = state_34586;
(statearr_34625_35976[(1)] = cljs.core.first((state_34586[(4)])));

} else {
throw ex__32088__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32086__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35979 = state_34586;
state_34586 = G__35979;
continue;
} else {
return ret_value__32086__auto__;
}
break;
}
});
cljs$core$async$state_machine__32085__auto__ = function(state_34586){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32085__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32085__auto____1.call(this,state_34586);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32085__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32085__auto____0;
cljs$core$async$state_machine__32085__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32085__auto____1;
return cljs$core$async$state_machine__32085__auto__;
})()
})();
var state__32386__auto__ = (function (){var statearr_34626 = f__32385__auto__();
(statearr_34626[(6)] = c__32384__auto___35925);

return statearr_34626;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32386__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__34630 = arguments.length;
switch (G__34630) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__32384__auto___35990 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32385__auto__ = (function (){var switch__32084__auto__ = (function (state_34682){
var state_val_34683 = (state_34682[(1)]);
if((state_val_34683 === (7))){
var inst_34678 = (state_34682[(2)]);
var state_34682__$1 = state_34682;
var statearr_34685_35998 = state_34682__$1;
(statearr_34685_35998[(2)] = inst_34678);

(statearr_34685_35998[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34683 === (1))){
var inst_34631 = [];
var inst_34632 = inst_34631;
var inst_34633 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_34682__$1 = (function (){var statearr_34695 = state_34682;
(statearr_34695[(7)] = inst_34632);

(statearr_34695[(8)] = inst_34633);

return statearr_34695;
})();
var statearr_34696_36001 = state_34682__$1;
(statearr_34696_36001[(2)] = null);

(statearr_34696_36001[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34683 === (4))){
var inst_34636 = (state_34682[(9)]);
var inst_34636__$1 = (state_34682[(2)]);
var inst_34637 = (inst_34636__$1 == null);
var inst_34638 = cljs.core.not(inst_34637);
var state_34682__$1 = (function (){var statearr_34697 = state_34682;
(statearr_34697[(9)] = inst_34636__$1);

return statearr_34697;
})();
if(inst_34638){
var statearr_34698_36004 = state_34682__$1;
(statearr_34698_36004[(1)] = (5));

} else {
var statearr_34699_36006 = state_34682__$1;
(statearr_34699_36006[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34683 === (15))){
var inst_34632 = (state_34682[(7)]);
var inst_34670 = cljs.core.vec(inst_34632);
var state_34682__$1 = state_34682;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34682__$1,(18),out,inst_34670);
} else {
if((state_val_34683 === (13))){
var inst_34665 = (state_34682[(2)]);
var state_34682__$1 = state_34682;
var statearr_34704_36007 = state_34682__$1;
(statearr_34704_36007[(2)] = inst_34665);

(statearr_34704_36007[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34683 === (6))){
var inst_34632 = (state_34682[(7)]);
var inst_34667 = inst_34632.length;
var inst_34668 = (inst_34667 > (0));
var state_34682__$1 = state_34682;
if(cljs.core.truth_(inst_34668)){
var statearr_34712_36008 = state_34682__$1;
(statearr_34712_36008[(1)] = (15));

} else {
var statearr_34713_36009 = state_34682__$1;
(statearr_34713_36009[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34683 === (17))){
var inst_34675 = (state_34682[(2)]);
var inst_34676 = cljs.core.async.close_BANG_(out);
var state_34682__$1 = (function (){var statearr_34714 = state_34682;
(statearr_34714[(10)] = inst_34675);

return statearr_34714;
})();
var statearr_34716_36010 = state_34682__$1;
(statearr_34716_36010[(2)] = inst_34676);

(statearr_34716_36010[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34683 === (3))){
var inst_34680 = (state_34682[(2)]);
var state_34682__$1 = state_34682;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34682__$1,inst_34680);
} else {
if((state_val_34683 === (12))){
var inst_34632 = (state_34682[(7)]);
var inst_34652 = cljs.core.vec(inst_34632);
var state_34682__$1 = state_34682;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34682__$1,(14),out,inst_34652);
} else {
if((state_val_34683 === (2))){
var state_34682__$1 = state_34682;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34682__$1,(4),ch);
} else {
if((state_val_34683 === (11))){
var inst_34632 = (state_34682[(7)]);
var inst_34636 = (state_34682[(9)]);
var inst_34640 = (state_34682[(11)]);
var inst_34648 = inst_34632.push(inst_34636);
var tmp34717 = inst_34632;
var inst_34632__$1 = tmp34717;
var inst_34633 = inst_34640;
var state_34682__$1 = (function (){var statearr_34720 = state_34682;
(statearr_34720[(7)] = inst_34632__$1);

(statearr_34720[(8)] = inst_34633);

(statearr_34720[(12)] = inst_34648);

return statearr_34720;
})();
var statearr_34721_36020 = state_34682__$1;
(statearr_34721_36020[(2)] = null);

(statearr_34721_36020[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34683 === (9))){
var inst_34633 = (state_34682[(8)]);
var inst_34644 = cljs.core.keyword_identical_QMARK_(inst_34633,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_34682__$1 = state_34682;
var statearr_34725_36021 = state_34682__$1;
(statearr_34725_36021[(2)] = inst_34644);

(statearr_34725_36021[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34683 === (5))){
var inst_34636 = (state_34682[(9)]);
var inst_34633 = (state_34682[(8)]);
var inst_34641 = (state_34682[(13)]);
var inst_34640 = (state_34682[(11)]);
var inst_34640__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_34636) : f.call(null,inst_34636));
var inst_34641__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_34640__$1,inst_34633);
var state_34682__$1 = (function (){var statearr_34728 = state_34682;
(statearr_34728[(13)] = inst_34641__$1);

(statearr_34728[(11)] = inst_34640__$1);

return statearr_34728;
})();
if(inst_34641__$1){
var statearr_34729_36028 = state_34682__$1;
(statearr_34729_36028[(1)] = (8));

} else {
var statearr_34730_36032 = state_34682__$1;
(statearr_34730_36032[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34683 === (14))){
var inst_34636 = (state_34682[(9)]);
var inst_34640 = (state_34682[(11)]);
var inst_34657 = (state_34682[(2)]);
var inst_34661 = [];
var inst_34662 = inst_34661.push(inst_34636);
var inst_34632 = inst_34661;
var inst_34633 = inst_34640;
var state_34682__$1 = (function (){var statearr_34732 = state_34682;
(statearr_34732[(7)] = inst_34632);

(statearr_34732[(14)] = inst_34657);

(statearr_34732[(8)] = inst_34633);

(statearr_34732[(15)] = inst_34662);

return statearr_34732;
})();
var statearr_34733_36033 = state_34682__$1;
(statearr_34733_36033[(2)] = null);

(statearr_34733_36033[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34683 === (16))){
var state_34682__$1 = state_34682;
var statearr_34737_36041 = state_34682__$1;
(statearr_34737_36041[(2)] = null);

(statearr_34737_36041[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34683 === (10))){
var inst_34646 = (state_34682[(2)]);
var state_34682__$1 = state_34682;
if(cljs.core.truth_(inst_34646)){
var statearr_34739_36045 = state_34682__$1;
(statearr_34739_36045[(1)] = (11));

} else {
var statearr_34740_36046 = state_34682__$1;
(statearr_34740_36046[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34683 === (18))){
var inst_34672 = (state_34682[(2)]);
var state_34682__$1 = state_34682;
var statearr_34741_36047 = state_34682__$1;
(statearr_34741_36047[(2)] = inst_34672);

(statearr_34741_36047[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34683 === (8))){
var inst_34641 = (state_34682[(13)]);
var state_34682__$1 = state_34682;
var statearr_34742_36048 = state_34682__$1;
(statearr_34742_36048[(2)] = inst_34641);

(statearr_34742_36048[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__32085__auto__ = null;
var cljs$core$async$state_machine__32085__auto____0 = (function (){
var statearr_34743 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34743[(0)] = cljs$core$async$state_machine__32085__auto__);

(statearr_34743[(1)] = (1));

return statearr_34743;
});
var cljs$core$async$state_machine__32085__auto____1 = (function (state_34682){
while(true){
var ret_value__32086__auto__ = (function (){try{while(true){
var result__32087__auto__ = switch__32084__auto__(state_34682);
if(cljs.core.keyword_identical_QMARK_(result__32087__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32087__auto__;
}
break;
}
}catch (e34744){var ex__32088__auto__ = e34744;
var statearr_34745_36052 = state_34682;
(statearr_34745_36052[(2)] = ex__32088__auto__);


if(cljs.core.seq((state_34682[(4)]))){
var statearr_34747_36053 = state_34682;
(statearr_34747_36053[(1)] = cljs.core.first((state_34682[(4)])));

} else {
throw ex__32088__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32086__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36054 = state_34682;
state_34682 = G__36054;
continue;
} else {
return ret_value__32086__auto__;
}
break;
}
});
cljs$core$async$state_machine__32085__auto__ = function(state_34682){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32085__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32085__auto____1.call(this,state_34682);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32085__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32085__auto____0;
cljs$core$async$state_machine__32085__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32085__auto____1;
return cljs$core$async$state_machine__32085__auto__;
})()
})();
var state__32386__auto__ = (function (){var statearr_34755 = f__32385__auto__();
(statearr_34755[(6)] = c__32384__auto___35990);

return statearr_34755;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32386__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
