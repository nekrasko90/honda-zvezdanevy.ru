(window.webpackJsonp=window.webpackJsonp||[]).push([[437,180,190,219,267,285,295,297,451,459,460,461,534,535,536],{1159:function(t,e,n){"use strict";n.r(e),n.d(e,"DEVELOPER_SITE",(function(){return o}));var o="https://lego-car.ru"},1160:function(t,e,n){"use strict";n.r(e);var o={name:"VBurger",props:{menuIsActive:{type:Boolean,default:!1},onlySmallResolution:{type:Boolean,default:!0},color:{type:String,default:"primary"}}},r=(n(1606),n(1)),component=Object(r.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"burger",class:[{"small-res":t.onlySmallResolution}],on:{click:function(e){return t.$emit("click")}}},t._l(3,(function(n){return e("span",{key:n,staticClass:"burger__slice",class:{burger__slice_active:t.menuIsActive},style:[{background:"var(--".concat(t.color,")")}]})})),0)}),[],!1,null,"703919c5",null);e.default=component.exports},1161:function(t,e,n){"use strict";n.r(e);var o={name:"VHeaderLogo",props:{logo:String},computed:{isMainPage:function(){return"/"===this.$route.path}}},r=(n(1607),n(1)),component=Object(r.a)(o,(function(){var t=this,e=t._self._c;return t.logo?e(t.isMainPage?"div":"nuxt-link",{tag:"component",staticClass:"header-logo",attrs:{to:"/"}},[e("nuxt-img",{staticClass:"header-logo__image",attrs:{src:t.logo}})],1):t._e()}),[],!1,null,"75a46f20",null);e.default=component.exports},1162:function(t,e,n){"use strict";n.r(e);var o=n(684),r=n(773),l=(n(13),n(20)),c={name:"VNavDropdown",props:{dropDownIcon:{type:String,default:l.g}}},d=(n(1608),n(1)),component=Object(d.a)(c,(function(){var t=this,e=t._self._c;return t.$slots.menu?e(r.a,t._b({attrs:{"open-on-hover":"","offset-y":"","close-delay":"300","nudge-bottom":"32",auto:""},scopedSlots:t._u([{key:"activator",fn:function(n){var r=n.on,l=n.attrs;return[e("div",t._g(t._b({staticClass:"d-flex align-center"},"div",l,!1),r),[t._t("default"),t._v(" "),e(o.a,{staticClass:"icon",class:{"icon-active":JSON.parse(l["aria-expanded"])}},[t._v("\n        "+t._s(t.dropDownIcon)+"\n      ")])],2)]}}],null,!0)},"v-menu",t.$attrs,!1),[t._v(" "),t._t("menu")],2):e("div",{staticClass:"d-flex align-center"},[t._t("default")],2)}),[],!1,null,"3aaefbf4",null);e.default=component.exports},1216:function(t,e,n){"use strict";n.r(e);var o={name:"FooterMenuColumn",props:{title:String}},r=(n(1899),n(1)),component=Object(r.a)(o,(function(){var t=this,e=t._self._c;return t.title?e("div",{staticClass:"f-menu-column mr-auto"},[e("div",{staticClass:"f-menu-column__title text-subtitle-2 textPrimary--text"},[t._v("\n    "+t._s(t.title)+"\n  ")]),t._v(" "),e("div",{staticClass:"f-menu-column__list d-flex flex-column"},[t._t("default")],2)]):t._e()}),[],!1,null,"7071d52d",null);e.default=component.exports},1217:function(t,e,n){"use strict";n.r(e);var o={name:"FooterMenuItem",components:{VLink:n(48).VLink},props:{to:String}},r=n(1),component=Object(r.a)(o,(function(){var t=this,e=t._self._c;return t.to?e("v-link",{staticClass:"text-h6 textSecondary--text text-decoration-none footer__nav-item mb-4",attrs:{link:t.to}},[t._t("default")],2):t._e()}),[],!1,null,"afb14f74",null);e.default=component.exports},1218:function(t,e,n){"use strict";n.r(e);var o={name:"MediumFooterItem",components:{VTelephone:n(48).VTelephone},props:{value:String,label:String,phone:String}},r=n(1),component=Object(r.a)(o,(function(){var t=this,e=t._self._c;return e("div",[t.label?e("div",{staticClass:"mb-1 text-h6 textPrimary--text"},[t._v("\n    "+t._s(t.label)+"\n  ")]):t._e(),t._v(" "),t.value?e(t.phone?"v-telephone":"div",{tag:"component",staticClass:"textSecondary--text text-caption",attrs:{phone:t.phone}},[t._v("\n    "+t._s(t.phone?"":t.value)+"\n  ")]):t._e()],1)}),[],!1,null,null,null);e.default=component.exports},1267:function(t,e,n){"use strict";n.r(e);var o=n(2268),r=n(771),l=(n(32),n(23),n(601)),c=n(602),d=n(603),f=n(5),v=n(789),m={name:"ChTheFooter",components:{TopFooter:l.default,MediumFooter:c.default,BottomFooter:d.default},computed:{dealers:function(){return this.$store.getters["dealers/getAll"].map((function(t){return new v.a(t)}))},dealerName:function(){return Object(f.y)(this.dealers)?this.dealers[0].name:""}},methods:{isNotEmptyArray:f.y}},_=(n(2253),n(1)),component=Object(_.a)(m,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"footer backgroundDark"},[e(o.a,[e("TopFooter"),t._v(" "),e(r.a),t._v(" "),t._l(t.dealers,(function(n){return[e("MediumFooter",{key:n.id,attrs:{dealer:n}}),t._v(" "),e(r.a,{key:n.id})]})),t._v(" "),t.$store.getters["dealers/isSingle"]?e("BottomFooter"):t._e()],2)],1)}),[],!1,null,"61e1098a",null);e.default=component.exports},1601:function(t,e,n){t.exports={}},1602:function(t,e,n){t.exports={}},1603:function(t,e,n){t.exports={}},1606:function(t,e,n){"use strict";n(1601)},1607:function(t,e,n){"use strict";n(1602)},1608:function(t,e,n){"use strict";n(1603)},1747:function(t,e,n){t.exports={}},1899:function(t,e,n){"use strict";n(1747)},1900:function(t,e,n){t.exports={}},1901:function(t,e,n){t.exports={}},1902:function(t,e,n){t.exports={}},2015:function(t,e,n){"use strict";n(1900)},2016:function(t,e,n){"use strict";n(1901)},2017:function(t,e,n){"use strict";n(1902)},2141:function(t,e,n){t.exports={}},2253:function(t,e,n){"use strict";n(2141)},449:function(t,e,n){"use strict";n.r(e);n(18);var o=n(453);e.default={computed:{developerLink:function(){var t=this.$store.getters["domains/curDomain"];return t?"".concat(o.DEVELOPER_SITE,"/?utm_source=").concat(t):"".concat(o.DEVELOPER_SITE)}}}},450:function(t,e,n){"use strict";n.r(e);var o=n(5);e.default={methods:{isValidLink:function(title,link){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];return title&&(link||Object(o.y)(t))}}}},451:function(t,e,n){"use strict";n.r(e);var o=n(449);n.d(e,"developerLink",(function(){return o.default}));var r=n(450);n.d(e,"navLinksHandler",(function(){return r.default}));var l=n(1160);n.d(e,"VBurger",(function(){return l.default}));var c=n(1161);n.d(e,"VHeaderLogo",(function(){return c.default}));var d=n(1162);n.d(e,"VNavDropdown",(function(){return d.default}))},453:function(t,e,n){"use strict";n.r(e);var o=n(1159);n.d(e,"DEVELOPER_SITE",(function(){return o.DEVELOPER_SITE}))},601:function(t,e,n){"use strict";n.r(e);var o=n(1216),r=n(1217),l=n(5),c={name:"TopFooter",components:{FooterMenuColumn:o.default,FooterMenuItem:r.default},methods:{isNotEmptyArray:l.y}},d=(n(2015),n(1)),component=Object(d.a)(c,(function(){var t=this,e=t._self._c;return t.isNotEmptyArray(t.$store.getters["settings/getFooter"].nav)?e("div",{staticClass:"footer__nav"},t._l(t.$store.getters["settings/getFooter"].nav,(function(n,o){return e("footer-menu-column",{key:o,attrs:{title:n.title}},[t._l(n.items,(function(n,o){return e("footer-menu-item",{key:o,attrs:{to:n.to}},[t._v("\n        "+t._s(n.title)+"\n      ")])}))],2)})),1):t._e()}),[],!1,null,"1165ec4c",null);e.default=component.exports},602:function(t,e,n){"use strict";n.r(e);n(23);var o=n(1218),r=n(48),l=n(789),c=n(71),d={name:"MediumFooter",components:{MediumFooterItem:o.default,VSchedule:r.VSchedule},mixins:[c.t],props:{dealer:{type:Object,default:function(){return new l.a({})}}}},f=(n(2016),n(1)),component=Object(f.a)(d,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"footer-medium"},[e("nuxt-link",{staticClass:"footer-medium__link",attrs:{to:"/"}},[t.$store.getters["settings/getFullLogo"]?e("nuxt-img",{staticClass:"footer-medium__logo",attrs:{src:t.$store.getters["settings/getFullLogo"],alt:"logo",fit:"cover",quality:"95"}}):t._e()],1),t._v(" "),e("div",{staticClass:"footer-medium__info-container"},[t.$store.getters["settings/getFooter"].dealerName?e("MediumFooterItem",{attrs:{label:t.dealer.name,value:t.$store.getters["settings/getFooter"].dealerName}}):t._e(),t._v(" "),e("MediumFooterItem",{attrs:{label:"Адрес",value:t.dealer.sales.address}}),t._v(" "),e("MediumFooterItem",{attrs:{label:"Телефон",value:t.dealer.sales.phone,phone:t.dealer.sales.phone}}),t._v(" "),t.dealer.hasSchedule?e("div",{staticClass:"d-flex align-center"},[e("client-only",[t.isMobile?e("v-schedule",{attrs:{type:"expansion",dealer:t.dealer}}):e("v-schedule",{attrs:{dealer:t.dealer,top:""}})],1)],1):t._e()],1)],1)}),[],!1,null,"b29171ce",null);e.default=component.exports},603:function(t,e,n){"use strict";n.r(e);var o=n(48),r=n(451),l={name:"BottomFooter",components:{VIconProvider:o.VIconProvider},mixins:[r.developerLink],data:function(){return{date:(new Date).getFullYear()}}},c=(n(2017),n(1)),component=Object(c.a)(l,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"footer-bottom"},[e("div",{staticClass:"footer-bottom__description text-subtitle-1 textSecondary--text"},[e("span",{staticClass:"float-left mr-1"},[t._v("\n      "+t._s(t.date)+"\n      "),t.$store.getters["settings/getOfficialName"]?e("span",[t._v("\n        "+t._s(t.$store.getters["settings/getOfficialName"])+".\n      ")]):t._e()]),t._v(" "),e("div",{domProps:{innerHTML:t._s(t.$store.getters["settings/getFooter"].disclaimer)}})]),t._v(" "),e("v-icon-provider",{staticClass:"footer-bottom__icon",attrs:{icon:"v-lego",link:t.developerLink}})],1)}),[],!1,null,"cf48cf06",null);e.default=component.exports}}]);