goog.provide('org_blog.core');
org_blog.core.router = reitit.frontend.router.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/",new cljs.core.Keyword(null,"index","index",-1531685915)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/posts",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["",new cljs.core.Keyword(null,"posts","posts",760043164)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/:post-id",new cljs.core.Keyword(null,"post","post",269697687)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/about",new cljs.core.Keyword(null,"about","about",1423892543)], null)], null));
org_blog.core.path_for = (function org_blog$core$path_for(var_args){
var args__4870__auto__ = [];
var len__4864__auto___14605 = arguments.length;
var i__4865__auto___14606 = (0);
while(true){
if((i__4865__auto___14606 < len__4864__auto___14605)){
args__4870__auto__.push((arguments[i__4865__auto___14606]));

var G__14607 = (i__4865__auto___14606 + (1));
i__4865__auto___14606 = G__14607;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return org_blog.core.path_for.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(org_blog.core.path_for.cljs$core$IFn$_invoke$arity$variadic = (function (route,p__14596){
var vec__14597 = p__14596;
var params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14597,(0),null);
if(cljs.core.truth_(params)){
return new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(reitit.frontend.match_by_name.cljs$core$IFn$_invoke$arity$3(org_blog.core.router,route,params));
} else {
return new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(reitit.frontend.match_by_name.cljs$core$IFn$_invoke$arity$2(org_blog.core.router,route));
}
}));

(org_blog.core.path_for.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(org_blog.core.path_for.cljs$lang$applyTo = (function (seq14593){
var G__14595 = cljs.core.first(seq14593);
var seq14593__$1 = cljs.core.next(seq14593);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14595,seq14593__$1);
}));

org_blog.core.home_page = (function org_blog$core$home_page(){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.main","span.main",-358707614),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Welcome to orgblogcljs"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),org_blog.core.path_for(new cljs.core.Keyword(null,"posts","posts",760043164))], null),"Blog posts"], null)], null)], null)], null);
});
});
org_blog.core.posts_page = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(org_blog.posts.posts_page,org_blog.core.path_for);
org_blog.core.about_page = (function org_blog$core$about_page(){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.main","span.main",-358707614),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"About orgblogcljs"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),"Orgblogcljs"], null)," is a minimalist static site blog that can be hosted on services like GitHub Pages.\n                   It's made with Clojurescript and Reagent.\n                   Posts are writting in emacs ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),".org"], null)," format."], null)], null)], null);
});
});
org_blog.core.page_for = (function org_blog$core$page_for(route){
var G__14601 = route;
var G__14601__$1 = (((G__14601 instanceof cljs.core.Keyword))?G__14601.fqn:null);
switch (G__14601__$1) {
case "index":
return new cljs.core.Var(function(){return org_blog.core.home_page;},new cljs.core.Symbol("org-blog.core","home-page","org-blog.core/home-page",-718712661,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"org-blog.core","org-blog.core",38365972,null),new cljs.core.Symbol(null,"home-page","home-page",-850279575,null),"org_blog/core.cljs",16,1,29,29,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(org_blog.core.home_page)?org_blog.core.home_page.cljs$lang$test:null)]));

break;
case "about":
return new cljs.core.Var(function(){return org_blog.core.about_page;},new cljs.core.Symbol("org-blog.core","about-page","org-blog.core/about-page",-2036593169,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"org-blog.core","org-blog.core",38365972,null),new cljs.core.Symbol(null,"about-page","about-page",2116788009,null),"org_blog/core.cljs",17,1,39,39,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(org_blog.core.about_page)?org_blog.core.about_page.cljs$lang$test:null)]));

break;
case "posts":
return new cljs.core.Var(function(){return org_blog.core.posts_page;},new cljs.core.Symbol("org-blog.core","posts-page","org-blog.core/posts-page",-1016453783,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"org-blog.core","org-blog.core",38365972,null),new cljs.core.Symbol(null,"posts-page","posts-page",-606250441,null),"org_blog/core.cljs",16,1,37,37,cljs.core.List.EMPTY,null,(cljs.core.truth_(org_blog.core.posts_page)?org_blog.core.posts_page.cljs$lang$test:null)]));

break;
case "post":
return new cljs.core.Var(function(){return org_blog.posts.post_page;},new cljs.core.Symbol("org-blog.posts","post-page","org-blog.posts/post-page",1719026583,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"org-blog.posts","org-blog.posts",1228398149,null),new cljs.core.Symbol(null,"post-page","post-page",1126442663,null),"org_blog/posts.cljs",16,1,21,21,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(org_blog.posts.post_page)?org_blog.posts.post_page.cljs$lang$test:null)]));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__14601__$1)].join('')));

}
});
org_blog.core.current_page = (function org_blog$core$current_page(){
return (function (){
var page = new cljs.core.Keyword(null,"current-page","current-page",-101294180).cljs$core$IFn$_invoke$arity$1(reagent.session.get(new cljs.core.Keyword(null,"route","route",329891309)));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"header","header",119441134),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),org_blog.core.path_for(new cljs.core.Keyword(null,"index","index",-1531685915))], null),"Home"], null)," | ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),org_blog.core.path_for(new cljs.core.Keyword(null,"about","about",1423892543))], null),"About"], null)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [page], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"footer","footer",1606445390),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"This blog is made with ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"https://github.com/larzeitlin/orgblogcljs"], null),"orgblogcljs."], null)], null)], null)], null);
});
});
org_blog.core.mount_root = (function org_blog$core$mount_root(){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [org_blog.core.current_page], null),document.getElementById("app"));
});
org_blog.core.init_BANG_ = (function org_blog$core$init_BANG_(){
accountant.core.configure_navigation_BANG_(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"nav-handler","nav-handler",2039495484),(function (path){
var match = reitit.frontend.match_by_path(org_blog.core.router,path);
var current_page = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(match));
var route_params = new cljs.core.Keyword(null,"path-params","path-params",-48130597).cljs$core$IFn$_invoke$arity$1(match);
return reagent.session.put_BANG_(new cljs.core.Keyword(null,"route","route",329891309),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"current-page","current-page",-101294180),org_blog.core.page_for(current_page),new cljs.core.Keyword(null,"route-params","route-params",2111411055),route_params], null));
}),new cljs.core.Keyword(null,"path-exists?","path-exists?",1473384514),(function (path){
return cljs.core.boolean$(reitit.frontend.match_by_path(org_blog.core.router,path));
})], null));

accountant.core.dispatch_current_BANG_();

return org_blog.core.mount_root();
});

//# sourceMappingURL=org_blog.core.js.map
