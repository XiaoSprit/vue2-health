webpackJsonp([5],{EFo8:function(t,e,a){var n=a("Eg6h");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);a("rjj0")("a196a91c",n,!0)},Eg6h:function(t,e,a){e=t.exports=a("FZ+f")(!1),e.push([t.i,"\n#own {\n  padding-top: 20px;\n}\n",""])},LuH3:function(t,e,a){"use strict";function n(t){a("EFo8")}Object.defineProperty(e,"__esModule",{value:!0});var i=a("OjUh"),o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"own"}},[a("el-tabs",{staticClass:"tab_sub",attrs:{type:"card"},model:{value:t.activeName,callback:function(e){t.activeName=e},expression:"activeName"}},[a("el-tab-pane",{attrs:{label:"全部",name:"all"}}),t._v(" "),a("el-tab-pane",{attrs:{label:"已发表",name:"passed"}}),t._v(" "),a("el-tab-pane",{attrs:{label:"未通过",name:"unpassed"}}),t._v(" "),a("el-tab-pane",{attrs:{label:"草稿",name:"draft"}}),t._v(" "),a("el-tab-pane",{attrs:{label:"已撤回",name:"recall"}})],1),t._v(" "),a("div",{staticClass:"own_content"},[a("my-loading",{attrs:{visible:t.loading,reload:t.get_article}}),t._v(" "),t.loading?t._e():a("article-list",{attrs:{itemJson:t.itemJson}}),t._v(" "),t.itemJson&&t.itemJson.length>0?[a("my-loading",{attrs:{visible:t.more_loading,reload:t.get_article_more}},[a("div",{attrs:{slot:"nothing"},slot:"nothing"},[t._v("没有更多数据了")])])]:t._e()],2)],1)},r=[],l={render:o,staticRenderFns:r},s=l,c=a("VU/8"),u=n,d=c(i.a,s,!1,u,null,null);e.default=d.exports},OjUh:function(t,e,a){"use strict";(function(t){var n=a("Gu7T"),i=a.n(n),o=a("Xxa5"),r=a.n(o),l=a("exGp"),s=a.n(l),c=a("gyMJ");e.a={data:function(){return{activeName:"all",itemJson:[],page:{all:1,passed:1,unpassed:1,draft:1,recall:1},loading:!1,more_loading:!1}},methods:{init:function(){var t=this;return s()(r.a.mark(function e(){return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.get_article();case 2:t.scrollPosition();case 3:case"end":return e.stop()}},e,t)}))()},get_article:function(){var t=this;return s()(r.a.mark(function e(){var a;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.more_loading=!1,t.page={all:1,passed:1,unpassed:1,draft:1,recall:1},t.loading=!0,a={type:t.activeName,page:t.page[t.activeName]},e.next=6,Object(c.b)(a).then(function(e){e&&e.data?(t.itemJson=e.data,t.page[t.activeName]++,t.loading=!1):(t.itemJson=[],t.loading="nothing")}).catch(function(){t.itemJson=[],t.loading="error"});case 6:case"end":return e.stop()}},e,t)}))()},get_article_more:function(){var t=this;this.more_loading=!0;var e={type:this.activeName,page:this.page[this.activeName]};Object(c.b)(e).then(function(e){if(e&&e.data){var a;(a=t.itemJson).push.apply(a,i()(e.data)),t.page[t.activeName]++,t.more_loading=!1}else t.more_loading="nothing"}).catch(function(){t.more_loading="error"})},onScroll:function(){var e=this,a=void 0;a&&clearTimeout(a),a=setTimeout(function(){var a=t(window).scrollTop(),n=t(window).height(),i=t(document).height(),o=t("#footer").height(),r=a+n>=i-o,l=e.itemJson.length>0&&!e.more_loading&&e.page[e.activeName]>=2;r&&l&&e.get_article_more()},200)},scrollPosition:function(){this.$route.meta.position&&(t(window).scrollTop(this.$route.meta.position.y),this.$route.meta.position.y=0)}},watch:{activeName:function(t){t&&this.get_article()}},created:function(){this.init()},mounted:function(){t(window).on("scroll",this.onScroll)},beforeRouteLeave:function(e,a,n){t(window).off("scroll",this.onScroll),n()}}}).call(e,a("7t+N"))}});