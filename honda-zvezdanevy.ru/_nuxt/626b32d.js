(window.webpackJsonp=window.webpackJsonp||[]).push([[92,284,499,527,528],{1157:function(e,n,t){"use strict";t.r(n);t(25);n.default={props:{fields:{type:Object},id:{type:Number,default:null},breadcrumbs:{type:Array}}}},1158:function(e,n,t){"use strict";t.r(n),t.d(n,"getBannersFilteredByStatus",(function(){return c}));var r=t(2),d=(t(15),t(10),t(32),t(17),t(19),t(13),t(4),t(9),t(5));function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){Object(r.a)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var c=function(e){return Object(d.y)(e)?e.filter((function(b){return Object(d.C)(b.status)||b.status})).map((function(b){return b.id?b:o(o({},b),{},{id:Object(d.n)()})})):[]}},1248:function(e,n,t){"use strict";t.r(n),t.d(n,"ITEMS_COUNT_ON_PAGE",(function(){return r}));var r=9},1816:function(e,n){var t={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"NewsMain"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"NewsObjectType"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"publicationDate"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"url"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"name"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"shortDescription"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"description"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"imageUrl"},arguments:[],directives:[]}]}},{kind:"FragmentDefinition",name:{kind:"Name",value:"Form"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"FeedbackFormObjectType"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"name"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"subName"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"btnText"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"disclaimer"},arguments:[],directives:[]}]}},{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"AllNews"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"page"}},type:{kind:"NamedType",name:{kind:"Name",value:"Int"}},directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"size"}},type:{kind:"NamedType",name:{kind:"Name",value:"Int"}},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"allNews"},arguments:[{kind:"Argument",name:{kind:"Name",value:"page"},value:{kind:"Variable",name:{kind:"Name",value:"page"}}},{kind:"Argument",name:{kind:"Name",value:"size"},value:{kind:"Variable",name:{kind:"Name",value:"size"}}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"data"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"NewsMain"},directives:[]},{kind:"Field",name:{kind:"Name",value:"feedbackForm"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"Form"},directives:[]}]}}]}},{kind:"Field",name:{kind:"Name",value:"total"},arguments:[],directives:[]}]}}]}},{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"NewsByPk"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"id"}},type:{kind:"NamedType",name:{kind:"Name",value:"Int"}},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"newsByPk"},arguments:[{kind:"Argument",name:{kind:"Name",value:"pk"},value:{kind:"Variable",name:{kind:"Name",value:"id"}}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"NewsMain"},directives:[]},{kind:"Field",name:{kind:"Name",value:"feedbackForm"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"Form"},directives:[]}]}}]}}]}}],loc:{start:0,end:489}};t.loc.source={body:"fragment NewsMain on NewsObjectType {\n  id\n  publicationDate\n  url\n  name\n  shortDescription\n  description\n  imageUrl\n}\n\nfragment Form on FeedbackFormObjectType {\n  id\n  name\n  subName\n  btnText\n  disclaimer\n}\n\nquery AllNews($page: Int, $size: Int) {\n\tallNews(page: $page, size: $size) {\n\t\tdata {\n\t\t\t...NewsMain,\n      feedbackForm {\n        ...Form\n      }\n\t\t},\n    total\n\t}\n}\n\nquery NewsByPk($id: Int) {\n\tnewsByPk(pk: $id) {\n    ...NewsMain,\n    feedbackForm {\n      ...Form\n    }\n\t}\n}\n\n",name:"GraphQL request",locationOffset:{line:1,column:1}};function r(e,n){if("FragmentSpread"===e.kind)n.add(e.name.value);else if("VariableDefinition"===e.kind){var t=e.type;"NamedType"===t.kind&&n.add(t.name.value)}e.selectionSet&&e.selectionSet.selections.forEach((function(e){r(e,n)})),e.variableDefinitions&&e.variableDefinitions.forEach((function(e){r(e,n)})),e.definitions&&e.definitions.forEach((function(e){r(e,n)}))}var d={};function l(e,n){for(var i=0;i<e.definitions.length;i++){var element=e.definitions[i];if(element.name&&element.name.value==n)return element}}function o(e,n){var t={kind:e.kind,definitions:[l(e,n)]};e.hasOwnProperty("loc")&&(t.loc=e.loc);var r=d[n]||new Set,o=new Set,c=new Set;for(r.forEach((function(e){c.add(e)}));c.size>0;){var m=c;c=new Set,m.forEach((function(e){o.has(e)||(o.add(e),(d[e]||new Set).forEach((function(e){c.add(e)})))}))}return o.forEach((function(n){var r=l(e,n);r&&t.definitions.push(r)})),t}t.definitions.forEach((function(e){if(e.name){var n=new Set;r(e,n),d[e.name.value]=n}})),e.exports=t,e.exports.NewsMain=o(t,"NewsMain"),e.exports.Form=o(t,"Form"),e.exports.AllNews=o(t,"AllNews"),e.exports.NewsByPk=o(t,"NewsByPk")},2078:function(e,n,t){e.exports={}},2189:function(e,n,t){"use strict";t(2078)},345:function(e,n,t){"use strict";t.r(n);var r=t(2268),d=t(1956),l=t(1978),o=(t(23),t(16)),c=(t(52),t(5)),m=t(448),v=t(473),k=t(48),f=t(1816),N=t(1248),w=t(821),y={name:"GarantNewsList",components:{VTitle:k.VTitle,GarNewsCard:v.GarNewsCard},mixins:[m.block,w.a],data:function(){return{curPage:1,rawNews:null}},fetch:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function n(){var t,data;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.$apolloProvider.defaultClient.query({query:f.AllNews,variables:{page:e.curPage,size:N.ITEMS_COUNT_ON_PAGE}});case 2:t=n.sent,(data=t.data)&&(e.rawNews=data.allNews);case 5:case"end":return n.stop()}}),n)})))()},computed:{news:function(){var e;return(null===(e=this.rawNews)||void 0===e?void 0:e.data)||[]},countPages:function(){var e,n;return null!==(e=this.rawNews)&&void 0!==e&&e.total?Math.ceil((null===(n=this.rawNews)||void 0===n?void 0:n.total)/N.ITEMS_COUNT_ON_PAGE):0}},watch:{curPage:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.$fetch();case 2:case"end":return n.stop()}}),n)})))()}},methods:{isNotEmptyArray:c.y}},S=(t(2189),t(1)),component=Object(S.a)(y,(function(){var e,n,t=this,o=t._self._c;return o("div",{staticClass:"news-list"},[o(r.a,[o("v-title",{staticClass:"news-list__title textPrimary--text mb-6",attrs:{tag:null===(e=t.fields.title)||void 0===e?void 0:e.tag,title:null===(n=t.fields.title)||void 0===n?void 0:n.text}}),t._v(" "),o("client-only",[t.$apollo.loading?o("div",[o("div",{staticClass:"news-list__container news-list__skeletons"},t._l(3,(function(e){return o(l.a,{key:e,attrs:{type:"card, list-item-two-line, button"}})})),1)]):t._e()]),t._v(" "),t.isNotEmptyArray(t.news)?o("div",{staticClass:"news-list__container"},t._l(t.news,(function(e){return o("nuxt-link",{key:e.id,staticClass:"text-decoration-none",attrs:{to:e.url?e.url:""}},[o("gar-news-card",{attrs:{image:e.imageUrl,"publication-date":e.publicationDate,name:e.name,"short-description":e.shortDescription}})],1)})),1):t._e(),t._v(" "),t.countPages>1?o(d.a,{staticClass:"news-list__pagination",attrs:{length:t.countPages,"total-visible":"7",circle:""},model:{value:t.curPage,callback:function(e){t.curPage=e},expression:"curPage"}}):t._e()],1)],1)}),[],!1,null,"668c0594",null);n.default=component.exports},448:function(e,n,t){"use strict";t.r(n);var r=t(1157);t.d(n,"block",(function(){return r.default}));var d=t(1158);t.d(n,"getBannersFilteredByStatus",(function(){return d.getBannersFilteredByStatus}))}}]);