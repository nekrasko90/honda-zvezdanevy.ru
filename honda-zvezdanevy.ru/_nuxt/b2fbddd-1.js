(window.webpackJsonp=window.webpackJsonp||[]).push([[43,245,284,328,372,504,527,528],{1157:function(e,t,r){"use strict";r.r(t);r(25);t.default={props:{fields:{type:Object},id:{type:Number,default:null},breadcrumbs:{type:Array}}}},1158:function(e,t,r){"use strict";r.r(t),r.d(t,"getBannersFilteredByStatus",(function(){return m}));var n=r(2),l=(r(15),r(10),r(32),r(17),r(19),r(13),r(4),r(9),r(5));function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){Object(n.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var m=function(e){return Object(l.y)(e)?e.filter((function(b){return Object(l.C)(b.status)||b.status})).map((function(b){return b.id?b:o(o({},b),{},{id:Object(l.n)()})})):[]}},1211:function(e,t,r){"use strict";r.r(t),r.d(t,"MAX_FEE_PERCENT",(function(){return n})),r.d(t,"MIN_FEE_PERCENT",(function(){return l}));var n=.9,l=0},1661:function(e,t,r){e.exports={}},1768:function(e,t,r){"use strict";r(1661)},1836:function(e,t,r){e.exports={}},1980:function(e,t,r){"use strict";r(1836)},2085:function(e,t,r){e.exports={}},2197:function(e,t,r){"use strict";r(2085)},351:function(e,t,r){"use strict";r.r(t);var n=r(2268),l=(r(15),r(75),r(899)),c=r(448),o={name:"HCalc",components:{HCalcForm:l.default},mixins:[c.block],computed:{slidersFields:function(){return{"min-month":+this.fields.minMonth||1,"max-month":+this.fields.maxMonth||10,"step-month":+this.fields.stepMonth||1,"max-price":+this.fields.maxPrice||1e7,"min-price":+this.fields.minPrice||1e6,"step-price":+this.fields.stepPrice||1e3,"step-fee":+this.fields.stepFee||1e3}}}},m=(r(2197),r(1)),component=Object(m.a)(o,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"form-calc-mortgage py-9"},[e.fields.img?t("img",{directives:[{name:"lazy-load",rawName:"v-lazy-load"}],staticClass:"form-calc-mortgage__bg",attrs:{"data-src":e.$img(e.fields.img,{width:3840,height:1260,fit:"cover"}),alt:e.fields.title||"Расчет кредита"}}):e._e(),e._v(" "),t(n.a,{staticClass:"form-calc-mortgage__container d-flex align-center justify-center justify-lg-end"},[t("h-calc-form",e._b({staticClass:"form-calc-mortgage__content",attrs:{title:e.fields.title,"title-tag":e.fields.titleTag,description:e.fields.description,models:e.fields.models,form:e.fields.form}},"h-calc-form",e.slidersFields,!1))],1)],1)}),[],!1,null,"97807ad8",null);t.default=component.exports},448:function(e,t,r){"use strict";r.r(t);var n=r(1157);r.d(t,"block",(function(){return n.default}));var l=r(1158);r.d(t,"getBannersFilteredByStatus",(function(){return l.getBannersFilteredByStatus}))},513:function(e,t,r){"use strict";r.r(t);var n=r(807);r.d(t,"HSlider",(function(){return n.default}))},807:function(e,t,r){"use strict";r.r(t);r(705),r(25);var n=r(851),l=r.n(n),c=(r(1206),r(1207),{name:"VSlider",components:{VueSlider:l.a},props:{value:{type:[String,Number,Array],required:!0},max:{type:Number,default:100},min:{type:Number,default:0},interval:{type:Number,default:1},small:{type:Boolean,default:!1},included:{type:Boolean,default:!1},hideLabel:{type:Boolean,default:!1},marks:{default:void 0}},computed:{curValue:{get:function(){return this.value},set:function(e){this.$emit("input",e)}}}}),o=(r(1768),r(1)),component=Object(o.a)(c,(function(){var e=this;return(0,e._self._c)("vue-slider",{staticClass:"v-slider",class:{small:e.small,hideLabel:e.hideLabel},attrs:{max:e.max,min:e.min,interval:e.interval,marks:e.marks,included:e.included,"hide-label":!0,tooltip:"none"},on:{"drag-end":function(t){return e.$emit("change",e.value)}},model:{value:e.curValue,callback:function(t){e.curValue=t},expression:"curValue"}})}),[],!1,null,"4134c1c3",null);t.default=component.exports},899:function(e,t,r){"use strict";r.r(t);var n=r(2);r(15),r(75),r(10),r(17),r(19),r(13),r(4),r(9);function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}r(25),r(506);var c=r(5),o=r(1211),m=r(513),f=r(48),d=r(71),_={name:"HCalcForm",components:{HSlider:m.HSlider,VTitle:f.VTitle},mixins:[d.q],props:{title:{type:String,default:""},titleTag:{type:String,default:"h2"},description:{type:String,default:""},minMonth:{type:Number},maxMonth:{type:Number},stepMonth:{type:Number},maxPrice:{type:Number},minPrice:{type:Number},stepPrice:{type:Number},stepFee:{type:Number},models:{type:Array,default:function(){return[]}},form:{type:Number}},data:function(){return{fields:{price:+this.minPrice,months:+this.minMonth,fee:+this.minPrice/2,model:""}}},computed:{feePercent:function(){return+(this.fields.fee/this.fields.price*100).toFixed(0)},maxFee:function(){return 1e3*+(this.fields.price*o.MAX_FEE_PERCENT/1e3).toFixed(0)},minFee:function(){return 1e3*+(this.fields.price*o.MIN_FEE_PERCENT/1e3).toFixed(0)}},watch:{maxFee:function(){this.maxFee<this.fields.fee&&(this.fields.fee=this.maxFee)}},methods:{isNotEmptyArray:c.y,formatNumber:c.m}},v=(r(1980),r(1)),component=Object(v.a)(_,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"calc-mortgage-form backgroundPaper textPrimary--text py-9 py-md-13 px-7 px-md-10"},[t("v-title",{staticClass:"calc-mortgage-form__title mb-4",attrs:{tag:e.titleTag,title:e.title}}),e._v(" "),e.description?t("div",{staticClass:"calc-mortgage-form__description text-mob-body-1 text-lg-body-1 mb-3 mb-md-4 mb-lg-5"},[e._v("\n    "+e._s(e.description)+"\n  ")]):e._e(),e._v(" "),e.isNotEmptyArray(e.models)?t("div",{staticClass:"calc-mortgage-form__field mb-3"},[t("div",{staticClass:"calc-mortgage-form__label text-mob-body-1 text-lg-body-1 mb-1"},[e._v("\n      Модель\n    ")]),e._v(" "),t("v-custom-select",{attrs:{items:e.models,outlined:"",placeholder:"Выберите модель"},model:{value:e.fields.model,callback:function(t){e.$set(e.fields,"model",t)},expression:"fields.model"}})],1):e._e(),e._v(" "),t("div",{staticClass:"calc-mortgage-form__field mb-3"},[t("div",{staticClass:"calc-mortgage-form__label text-mob-body-1 text-lg-body-1 d-flex justify-space-between"},[e._v("\n      Сумма кредита\n    ")]),e._v(" "),t("div",{staticClass:"calc-mortgage-form__value text-mob-h4 text-lg-h4"},[e._v("\n      "+e._s(e.formatNumber(e.fields.price))+"\n      "),t("span",{staticClass:"inter-font-family"},[e._v("₽")])]),e._v(" "),t("h-slider",{staticClass:"calc-mortgage-form__input",attrs:{min:e.minPrice,max:e.maxPrice,interval:e.stepPrice},model:{value:e.fields.price,callback:function(t){e.$set(e.fields,"price",t)},expression:"fields.price"}})],1),e._v(" "),t("div",{staticClass:"calc-mortgage-form__field mb-3"},[t("div",{staticClass:"calc-mortgage-form__label text-mob-body-1 text-lg-body-1 d-flex justify-space-between"},[e._v("\n      Первоначальный взнос\n      "),t("span",{staticClass:"text-mob-h4 text-lg-h4 textDisabled--text"},[e._v(e._s(e.feePercent)+"%")])]),e._v(" "),t("div",{staticClass:"calc-mortgage-form__value text-mob-h4 text-lg-h4"},[e._v("\n      "+e._s(e.formatNumber(e.fields.fee))+" "),t("span",{staticClass:"inter-font-family"},[e._v("₽")])]),e._v(" "),t("h-slider",{staticClass:"calc-mortgage-form__input",attrs:{min:e.minFee,max:e.maxFee,interval:e.stepFee},model:{value:e.fields.fee,callback:function(t){e.$set(e.fields,"fee",t)},expression:"fields.fee"}})],1),e._v(" "),t("div",{staticClass:"calc-mortgage-form__field mb-3"},[t("div",{staticClass:"calc-mortgage-form__label text-mob-body-1 text-lg-body-1 d-flex justify-space-between"},[e._v("\n      Срок\n    ")]),e._v(" "),t("div",{staticClass:"calc-mortgage-form__value text-mob-h4 text-lg-h4"},[e._v("\n      "+e._s(e.fields.months)+" мес.\n    ")]),e._v(" "),t("h-slider",{staticClass:"calc-mortgage-form__input",attrs:{min:e.minMonth,max:e.maxMonth,interval:e.stepMonth},model:{value:e.fields.months,callback:function(t){e.$set(e.fields,"months",t)},expression:"fields.months"}})],1),e._v(" "),t("div",{staticClass:"calc-mortgage-form__field"},[t("v-button",{staticClass:"primary",attrs:{block:""},on:{click:function(t){return e.openPopup(e.form,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){Object(n.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},e.fields))}}},[e._v("\n      ОТПРАВИТЬ ЗАЯВКУ\n    ")])],1)],1)}),[],!1,null,"23951d0b",null);t.default=component.exports}}]);