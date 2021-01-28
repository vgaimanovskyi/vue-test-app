(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c2134bc6"],{"3a43":function(e,t,a){},"43ef":function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("h1",{staticClass:"page-caption"},[e._v("New record")]),a("form",{staticClass:"form",on:{submit:function(t){return t.preventDefault(),e.onSubmit(t)}}},[a("div",{staticClass:"input-field"},[a("select",{directives:[{name:"model",rawName:"v-model",value:e.type,expression:"type"}],ref:"selectType",on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.type=t.target.multiple?a:a[0]}}},e._l(e.types,(function(t){return a("option",{key:t,domProps:{value:t}},[e._v(e._s(t))])})),0),a("label",[e._v("Select a type")])]),a("div",{staticClass:"input-field"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],staticClass:"validate",class:{invalid:!e.validName},attrs:{id:"recordname",type:"text",placeholder:"Name",required:""},domProps:{value:e.name},on:{input:function(t){t.target.composing||(e.name=t.target.value)}}}),a("label",{attrs:{for:"recordname"}},[e._v("Name")]),e.validName?0===e.name.length?a("span",{staticClass:"helper-text invalid"},[e._v(" Name is required ")]):e._e():a("span",{staticClass:"helper-text invalid"},[e._v(" This name already exists ")])]),a("p",[a("label",[a("input",{directives:[{name:"model",rawName:"v-model",value:e.active,expression:"active"}],attrs:{type:"checkbox",checked:"checked"},domProps:{checked:Array.isArray(e.active)?e._i(e.active,null)>-1:e.active},on:{change:function(t){var a=e.active,i=t.target,n=!!i.checked;if(Array.isArray(a)){var r=null,s=e._i(a,r);i.checked?s<0&&(e.active=a.concat([r])):s>-1&&(e.active=a.slice(0,s).concat(a.slice(s+1)))}else e.active=n}}}),a("span",[e._v("Status: "+e._s(e.active?"Active":"Disabled"))])])]),a("div",{staticClass:"input-field"},[a("select",{directives:[{name:"model",rawName:"v-model",value:e.date,expression:"date"}],ref:"selectDate",on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.date=t.target.multiple?a:a[0]}}},e._l(e.dates,(function(t){return a("option",{key:t,domProps:{value:t}},[e._v(e._s(t))])})),0),a("label",[e._v("Select a date")])]),a("div",{staticClass:"input-field"},[a("input",{directives:[{name:"model",rawName:"v-model.number",value:e.value,expression:"value",modifiers:{number:!0}}],staticClass:"validate",attrs:{id:"datavalue",type:"number"},domProps:{value:e.value},on:{input:function(t){t.target.composing||(e.value=e._n(t.target.value))},blur:function(t){return e.$forceUpdate()}}}),a("label",{attrs:{for:"datavalue"}},[e._v("Value")])]),a("button",{staticClass:"btn waves-effect waves-light",attrs:{type:"submit",disabled:!e.validName||0===e.name.length}},[e._v(" Create "),a("i",{staticClass:"material-icons right"},[e._v("send")])])])])},n=[],r=(a("99af"),a("c740"),a("c975"),a("d81d"),a("fb6a"),a("b0c0"),a("4d5c")),s=a.n(r),c=a("9612"),l={name:"record",data:function(){return{selectType:null,type:"",selectDate:null,date:"",name:"",active:!1,value:0}},computed:{types:function(){return this.$store.getters.getTypes},dates:function(){return this.$store.getters.getDates},typeData:function(){return this.$store.getters.getTypeData(this.type)},validName:function(){var e=this;return!(this.typeData.findIndex((function(t){return t.name.toLowerCase()===e.name.toLowerCase()}))>0)}},methods:{onSubmit:function(){var e=this;if(this.validName&&0!==this.name.length){var t=c["b"].v1(),a=this.dates.indexOf(this.date),i=this.dates.slice(0,a+1).map((function(t){return t===e.date?{date:t,value:e.value}:{date:t,value:0}})),n={id:t,type:this.type,name:this.name,active:this.active,history:i};this.$store.dispatch("addNewRecord",n),this.$message("New record created successfully");var r=this.typeData.length+1;this.name="".concat(this.type,"_").concat(r<10?"0"+r:r),this.active=!1,this.value=0,this.date=this.dates[0],setTimeout((function(){e.selectDate=s.a.FormSelect.init(e.$refs.selectDate),s.a.updateTextFields()}),0)}}},mounted:function(){var e=this;this.type=this.types[0],this.date=this.dates[0],setTimeout((function(){e.selectType=s.a.FormSelect.init(e.$refs.selectType),e.selectDate=s.a.FormSelect.init(e.$refs.selectDate),s.a.updateTextFields()}),0)},watch:{type:function(){var e=this.typeData.length+1;this.name="".concat(this.type,"_").concat(e<10?"0"+e:e)}}},o=l,d=(a("cdcd"),a("2877")),u=Object(d["a"])(o,i,n,!1,null,"6361c81c",null);t["default"]=u.exports},"99af":function(e,t,a){"use strict";var i=a("23e7"),n=a("d039"),r=a("e8b5"),s=a("861d"),c=a("7b0b"),l=a("50c4"),o=a("8418"),d=a("65f0"),u=a("1dde"),v=a("b622"),p=a("2d00"),f=v("isConcatSpreadable"),m=9007199254740991,h="Maximum allowed index exceeded",y=p>=51||!n((function(){var e=[];return e[f]=!1,e.concat()[0]!==e})),g=u("concat"),b=function(e){if(!s(e))return!1;var t=e[f];return void 0!==t?!!t:r(e)},_=!y||!g;i({target:"Array",proto:!0,forced:_},{concat:function(e){var t,a,i,n,r,s=c(this),u=d(s,0),v=0;for(t=-1,i=arguments.length;t<i;t++)if(r=-1===t?s:arguments[t],b(r)){if(n=l(r.length),v+n>m)throw TypeError(h);for(a=0;a<n;a++,v++)a in r&&o(u,v,r[a])}else{if(v>=m)throw TypeError(h);o(u,v++,r)}return u.length=v,u}})},c975:function(e,t,a){"use strict";var i=a("23e7"),n=a("4d64").indexOf,r=a("a640"),s=a("ae40"),c=[].indexOf,l=!!c&&1/[1].indexOf(1,-0)<0,o=r("indexOf"),d=s("indexOf",{ACCESSORS:!0,1:0});i({target:"Array",proto:!0,forced:l||!o||!d},{indexOf:function(e){return l?c.apply(this,arguments)||0:n(this,e,arguments.length>1?arguments[1]:void 0)}})},cdcd:function(e,t,a){"use strict";a("3a43")},fb6a:function(e,t,a){"use strict";var i=a("23e7"),n=a("861d"),r=a("e8b5"),s=a("23cb"),c=a("50c4"),l=a("fc6a"),o=a("8418"),d=a("b622"),u=a("1dde"),v=a("ae40"),p=u("slice"),f=v("slice",{ACCESSORS:!0,0:0,1:2}),m=d("species"),h=[].slice,y=Math.max;i({target:"Array",proto:!0,forced:!p||!f},{slice:function(e,t){var a,i,d,u=l(this),v=c(u.length),p=s(e,v),f=s(void 0===t?v:t,v);if(r(u)&&(a=u.constructor,"function"!=typeof a||a!==Array&&!r(a.prototype)?n(a)&&(a=a[m],null===a&&(a=void 0)):a=void 0,a===Array||void 0===a))return h.call(u,p,f);for(i=new(void 0===a?Array:a)(y(f-p,0)),d=0;p<f;p++,d++)p in u&&o(i,d,u[p]);return i.length=d,i}})}}]);
//# sourceMappingURL=chunk-c2134bc6.f1101bf8.js.map