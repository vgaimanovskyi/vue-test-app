(function(e){function t(t){for(var s,n,c=t[0],o=t[1],l=t[2],d=0,u=[];d<c.length;d++)n=c[d],Object.prototype.hasOwnProperty.call(r,n)&&r[n]&&u.push(r[n][0]),r[n]=0;for(s in o)Object.prototype.hasOwnProperty.call(o,s)&&(e[s]=o[s]);f&&f(t);while(u.length)u.shift()();return i.push.apply(i,l||[]),a()}function a(){for(var e,t=0;t<i.length;t++){for(var a=i[t],s=!0,n=1;n<a.length;n++){var c=a[n];0!==r[c]&&(s=!1)}s&&(i.splice(t--,1),e=o(o.s=a[0]))}return e}var s={},n={index:0},r={index:0},i=[];function c(e){return o.p+"js/"+({}[e]||e)+"."+{"chunk-a0a00f14":"8bbb3219"}[e]+".js"}function o(t){if(s[t])return s[t].exports;var a=s[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.e=function(e){var t=[],a={"chunk-a0a00f14":1};n[e]?t.push(n[e]):0!==n[e]&&a[e]&&t.push(n[e]=new Promise((function(t,a){for(var s="css/"+({}[e]||e)+"."+{"chunk-a0a00f14":"b6a6144d"}[e]+".css",r=o.p+s,i=document.getElementsByTagName("link"),c=0;c<i.length;c++){var l=i[c],d=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(d===s||d===r))return t()}var u=document.getElementsByTagName("style");for(c=0;c<u.length;c++){l=u[c],d=l.getAttribute("data-href");if(d===s||d===r)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var s=t&&t.target&&t.target.src||r,i=new Error("Loading CSS chunk "+e+" failed.\n("+s+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=s,delete n[e],f.parentNode.removeChild(f),a(i)},f.href=r;var p=document.getElementsByTagName("head")[0];p.appendChild(f)})).then((function(){n[e]=0})));var s=r[e];if(0!==s)if(s)t.push(s[2]);else{var i=new Promise((function(t,a){s=r[e]=[t,a]}));t.push(s[2]=i);var l,d=document.createElement("script");d.charset="utf-8",d.timeout=120,o.nc&&d.setAttribute("nonce",o.nc),d.src=c(e);var u=new Error;l=function(t){d.onerror=d.onload=null,clearTimeout(f);var a=r[e];if(0!==a){if(a){var s=t&&("load"===t.type?"missing":t.type),n=t&&t.target&&t.target.src;u.message="Loading chunk "+e+" failed.\n("+s+": "+n+")",u.name="ChunkLoadError",u.type=s,u.request=n,a[1](u)}r[e]=void 0}};var f=setTimeout((function(){l({type:"timeout",target:d})}),12e4);d.onerror=d.onload=l,document.head.appendChild(d)}return Promise.all(t)},o.m=e,o.c=s,o.d=function(e,t,a){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)o.d(a,s,function(t){return e[t]}.bind(null,s));return a},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/vue-test-app/",o.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],d=l.push.bind(l);l.push=t,l=l.slice();for(var u=0;u<l.length;u++)t(l[u]);var f=d;i.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"0bd9":function(e,t,a){"use strict";a("cf08")},1595:function(e,t,a){"use strict";a("a4a3")},4678:function(e,t,a){var s={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn-bd":"9686","./bn-bd.js":"9686","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-mx":"b5b7","./es-mx.js":"b5b7","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function n(e){var t=r(e);return a(t)}function r(e){if(!a.o(s,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return s[e]}n.keys=function(){return Object.keys(s)},n.resolve=r,e.exports=n,n.id="4678"},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var s=a("2b0e"),n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("Navbar"),a("div",{staticClass:"container"},[a("router-view")],1)],1)},r=[],i=(a("96cf"),a("1da1")),c=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("nav",{staticClass:"blue darken-3"},[a("div",{staticClass:"nav-wrapper"},[a("router-link",{staticClass:"brand-logo left",attrs:{tag:"a",to:"/"}},[e._v("Test")]),a("ul",{staticClass:"right"},[a("router-link",{attrs:{tag:"li",to:"/",exact:"","active-class":"active"}},[a("a",{attrs:{href:"#"}},[e._v("Home")])]),a("router-link",{attrs:{tag:"li",to:"/record","active-class":"active"}},[a("a",{attrs:{href:"#"}},[e._v("Record")])])],1)],1)])},o=[],l={},d=l,u=a("2877"),f=Object(u["a"])(d,c,o,!1,null,null,null),p=f.exports,m={components:{Navbar:p},computed:{error:function(){return this.$store.getters.getError}},created:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$store.dispatch("fetchData");case 2:case"end":return t.stop()}}),t)})))()},watch:{error:function(e){this.$error(e||"Ops, its crashed")}}},v=m,h=(a("5c0b"),Object(u["a"])(v,n,r,!1,null,null,null)),b=h.exports,g=(a("d3b7"),a("8c4f")),j=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("h1",{staticClass:"page-caption"},[e._v("Home page")]),e.openChangeModal?a("ChangeModal",{attrs:{item:e.item},on:{closeModal:e.toggleChangeModal}}):e._e(),e.openAddModal?a("AddModal",{attrs:{item:e.item},on:{closeModal:e.toggleAddModal}}):e._e(),e.openDelModal?a("DelModal",{attrs:{delID:e.delID},on:{closeModal:e.toggleDelModal}}):e._e(),a("div",{staticClass:"chart"},[a("canvas",{ref:"canvas"})]),a("div",{staticClass:"input-field"},[a("select",{directives:[{name:"model",rawName:"v-model",value:e.filter,expression:"filter"}],ref:"select",on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.filter=t.target.multiple?a:a[0]}}},e._l(e.types,(function(t){return a("option",{key:t,domProps:{value:t}},[e._v(e._s(t))])})),0),a("label",[e._v("Type filter")])]),e.loading?a("Loader"):a("div",{staticClass:"table-container"},[a("table",[a("thead",[a("tr",[a("th",[e._v("№")]),a("th",[e._v("Name")]),a("th",[e._v("Type")]),a("th",[e._v("Status")]),a("th",[e._v("Last value")]),a("th",[e._v("Last Date")]),a("th",[e._v("Add value")]),a("th",[e._v("Del item")])])]),a("tbody",e._l(e.pageItems,(function(t,s){return a("tr",{key:t.id},[a("td",[a("b",[e._v(e._s(s+1+(e.page-1)*e.pageSize))])]),a("td",[e._v(e._s(t.name))]),a("td",[e._v(e._s(t.type))]),a("td",[a("button",{staticClass:"btn custom-btn",class:[t.active?"green":"red"],attrs:{type:"button"},on:{click:function(a){return e.change(t)}}},[a("span",{staticClass:"show-status"},[e._v(" "+e._s(t.active?"Active":"Disabled")+" ")]),a("i",{staticClass:"show-icon material-icons"},[e._v(" "+e._s(t.active?"bluetooth":"error")+" ")])])]),a("td",[e._v(e._s(t.history[t.history.length-1].value))]),a("td",[e._v(e._s(t.history[t.history.length-1].date))]),a("td",[a("button",{staticClass:"btn",on:{click:function(a){return e.add(t)}}},[a("i",{staticClass:"material-icons"},[e._v("add_circle")])])]),a("td",[a("button",{staticClass:"btn red",on:{click:function(a){return e.del(t.id,t.name)}}},[a("i",{staticClass:"material-icons"},[e._v("delete")])])])])})),0)])]),e.pageCount>1?a("Paginate",{attrs:{"page-count":e.pageCount,"click-handler":e.changePage,"prev-text":"Prev","next-text":"Next","container-class":"pagination","active-class":"active blue darken-3"}}):e._e()],1)},y=[],_=(a("4de4"),a("4d5c")),k=a.n(_),w=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"modal"},[a("div",{staticClass:"modal-content"},[a("h4",[e._v("Confirm")]),a("p",[e._v(" Do you want to change "),a("b",[e._v(e._s(e.item.name))]),e._v(" status to "),a("b",[e._v(e._s(e.item.active?"Disabled":"Active"))]),e._v(" ? ")])]),e.loading?a("Loader"):a("div",{staticClass:"modal-footer"},[a("button",{staticClass:"modal-close btn-flat",on:{click:e.confirm}},[e._v("Yes")]),a("button",{staticClass:"modal-close btn-flat",on:{click:e.closeModal}},[e._v("No")])])],1),a("div",{staticClass:"modal-overlay"})])},C=[],x={props:["item"],computed:{loading:function(){return this.$store.getters.getLoading}},methods:{confirm:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.item.active=!e.item.active,t.prev=1,t.next=4,e.$store.dispatch("changeItem",e.item);case 4:e.$message("Status changed successfully"),t.next=10;break;case 7:t.prev=7,t.t0=t["catch"](1),console.log(t.t0);case 10:e.closeModal();case 11:case"end":return t.stop()}}),t,null,[[1,7]])})))()},closeModal:function(){this.$emit("closeModal")}}},D=x,M=(a("1595"),Object(u["a"])(D,w,C,!1,null,"0b7b04cc",null)),O=M.exports,I=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"modal"},[a("div",{staticClass:"modal-content"},[a("h4",[e._v("Add new value")]),a("form",{staticClass:"form"},[a("div",{staticClass:"input-field"},[a("input",{staticClass:"validate",attrs:{id:"recordname",type:"text",disabled:""},domProps:{value:e.item.name}}),a("label",{attrs:{for:"recordname"}},[e._v("Name")])]),a("div",{staticClass:"input-field"},[a("input",{staticClass:"validate",attrs:{id:"recordtype",type:"text",disabled:""},domProps:{value:e.item.type}}),a("label",{attrs:{for:"recordtype"}},[e._v("Type")])]),a("p",[a("label",[a("input",{directives:[{name:"model",rawName:"v-model",value:e.active,expression:"active"}],attrs:{type:"checkbox",checked:"checked",disabled:e.loading},domProps:{value:e.item.active,checked:Array.isArray(e.active)?e._i(e.active,e.item.active)>-1:e.active},on:{change:function(t){var a=e.active,s=t.target,n=!!s.checked;if(Array.isArray(a)){var r=e.item.active,i=e._i(a,r);s.checked?i<0&&(e.active=a.concat([r])):i>-1&&(e.active=a.slice(0,i).concat(a.slice(i+1)))}else e.active=n}}}),a("span",[e._v("Status: "+e._s(e.active?"Active":"Disabled"))])])]),a("div",{staticClass:"input-field"},[a("input",{staticClass:"validate",attrs:{id:"recorddate",type:"text",disabled:""},domProps:{value:e.nextDate}}),a("label",{attrs:{for:"recorddate"}},[e._v("Next date")])]),a("div",{staticClass:"input-field"},[a("input",{directives:[{name:"model",rawName:"v-model.number",value:e.newValue,expression:"newValue",modifiers:{number:!0}}],staticClass:"validate",attrs:{id:"datavalue",type:"number",disabled:e.loading},domProps:{value:e.newValue},on:{input:function(t){t.target.composing||(e.newValue=e._n(t.target.value))},blur:function(t){return e.$forceUpdate()}}}),a("label",{attrs:{for:"datavalue"}},[e._v("New value")])]),e.loading?a("Loader"):a("div",{staticClass:"form-footer"},[a("button",{staticClass:"btn waves-effect waves-light",attrs:{type:"button"},on:{click:e.save}},[e._v(" Save "),a("i",{staticClass:"material-icons right"},[e._v("save")])]),a("button",{staticClass:"btn waves-effect waves-light orange",attrs:{type:"button"},on:{click:e.closeModal}},[e._v(" Reset "),a("i",{staticClass:"material-icons right"},[e._v("remove_circle")])])])],1)])]),a("div",{staticClass:"modal-overlay"})])},E=[],$=a("5530"),L={props:["item"],data:function(){return{active:!1,newValue:0}},computed:{dates:function(){return this.$store.getters.getDates},nextDate:function(){return this.dates[this.item.history.length]||"Next year"},loading:function(){return this.$store.getters.getLoading}},methods:{save:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a=Object($["a"])(Object($["a"])({},e.item),{},{active:e.active}),a.history.push({date:e.nextDate,value:e.newValue}),t.prev=2,t.next=5,e.$store.dispatch("changeItem",a);case 5:e.$message("New value added successfully"),t.next=11;break;case 8:t.prev=8,t.t0=t["catch"](2),console.log(t.t0);case 11:e.closeModal();case 12:case"end":return t.stop()}}),t,null,[[2,8]])})))()},closeModal:function(){this.active=!1,this.newValue=0,this.$emit("closeModal")}},mounted:function(){var e=this;this.active=this.item.active,setTimeout((function(){e.selectDate=k.a.FormSelect.init(e.$refs.selectDate),k.a.updateTextFields()}),0)}},z=L,A=(a("bbe7"),Object(u["a"])(z,I,E,!1,null,"0225385a",null)),R=A.exports,P=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"modal"},[a("div",{staticClass:"modal-content"},[a("h4",[e._v("Confirm")]),a("p",[e._v(" Do you want to delete item with id: "),a("b",[e._v(e._s(e.delID.name))]),e._v(" ? ")])]),e.loading?a("Loader"):a("div",{staticClass:"modal-footer"},[a("button",{staticClass:"modal-close btn-flat",on:{click:e.confirm}},[e._v("Yes")]),a("button",{staticClass:"modal-close btn-flat",on:{click:e.closeModal}},[e._v("No")])])],1),a("div",{staticClass:"modal-overlay"})])},S=[],N={props:["delID"],computed:{loading:function(){return this.$store.getters.getLoading}},methods:{confirm:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.$store.dispatch("delItem",e.delID.id);case 3:e.$message("Item deleted successfully"),t.next=9;break;case 6:t.prev=6,t.t0=t["catch"](0),console.log(t.t0);case 9:e.closeModal();case 10:case"end":return t.stop()}}),t,null,[[0,6]])})))()},closeModal:function(){this.$emit("closeModal")}}},T=N,F=(a("0bd9"),Object(u["a"])(T,P,S,!1,null,"8ce8ce7a",null)),U=F.exports,V=a("2ef0"),H=a.n(V),q={data:function(){return{page:1,pageSize:5,pageCount:0,allItems:[],pageItems:[]}},methods:{setupPagination:function(e){this.allItems=H.a.chunk(e,this.pageSize),this.pageCount=H.a.size(this.allItems),this.pageItems=this.allItems[this.page-1]||this.allItems[0]},changePage:function(e){this.page=e,this.pageItems=this.allItems[e-1]||this.allItems[0]}}},B=(a("4160"),a("d81d"),a("b0c0"),a("159b"),{computed:{dates:function(){return this.$store.getters.getDates}},methods:{chart:function(e,t){this.renderChart({labels:this.dates,datasets:this.buildChartSet(e)},{title:{display:!0,text:"".concat(t," charts").toUpperCase(),fontSize:14},legend:{position:"bottom"},maintainAspectRatio:!1})},buildChartSet:function(e){var t=[],a=["#3e95cd","#8e5ea2","#3cba9f","#e8c3b9","#c45850","#ce93d8","#d500f9","#90caf9","#1565c0","#e6ee9c"];return e.forEach((function(e,s){var n={data:e.history.map((function(e){return e.value})),label:e.name,borderDash:e.active?[]:[5,5],pointBackgroundColor:e.active?a[s]:"red",borderColor:a[s],fill:!1};t.push(n)})),t}}}),J=a("1fca"),K={name:"Home",components:{ChangeModal:O,AddModal:R,DelModal:U},extends:J["a"],mixins:[q,B],data:function(){return{openChangeModal:!1,openAddModal:!1,openDelModal:!1,delID:null,item:{},filter:null}},computed:{data:function(){return this.$store.getters.getData},types:function(){return this.$store.getters.getTypes},filterData:function(){var e=this;return this.data.filter((function(t){return t.type===e.filter}))},loading:function(){return this.$store.getters.getLoading}},methods:{change:function(e){this.item=e,this.toggleChangeModal()},toggleChangeModal:function(){this.openChangeModal=!this.openChangeModal},add:function(e){this.item=e,this.toggleAddModal()},toggleAddModal:function(){this.openAddModal=!this.openAddModal},del:function(e,t){this.delID={id:e,name:t},this.toggleDelModal()},toggleDelModal:function(){this.openDelModal=!this.openDelModal}},mounted:function(){var e=this;this.filter=this.types[0],this.setupPagination(this.filterData),this.chart(this.filterData,this.filter),setTimeout((function(){e.select=k.a.FormSelect.init(e.$refs.select),k.a.updateTextFields()}),0)},watch:{filterData:function(){this.setupPagination(this.filterData),this.chart(this.filterData,this.filter)},filter:function(){this.page=1}}},Y=K,X=(a("d6f0"),Object(u["a"])(Y,j,y,!1,null,"cf8c8346",null)),G=X.exports;s["a"].use(g["a"]);var Q=[{path:"/",name:"Home",component:G},{path:"/record",name:"Record",component:function(){return a.e("chunk-a0a00f14").then(a.bind(null,"43ef"))}}],W=new g["a"]({mode:"history",base:"/vue-test-app/",routes:Q}),Z=W,ee=(a("c740"),a("a434"),a("b64b"),a("2f62")),te=a("260b"),ae={state:{loading:!1,error:null},mutations:{setLoading:function(e,t){e.loading=t},setError:function(e,t){e.error=t},clearError:function(e){e.error=null}},getters:{getLoading:function(e){return e.loading},getError:function(e){return e.error}}};s["a"].use(ee["a"]);var se=new ee["a"].Store({state:{types:["pressure","temperature","humidity"],dates:["January","February","March","April","May","June","July","August","September","October","November","December"],data:[]},mutations:{setData:function(e,t){e.data=t},setRecord:function(e,t){e.data.push(t)},putItem:function(e,t){var a=e.data.findIndex((function(e){return e.id===t.id}));e.data.splice(a,1,t)},removeItem:function(e,t){var a=e.data.findIndex((function(e){return e.id===t}));e.data.splice(a,1)}},actions:{fetchData:function(e){return Object(i["a"])(regeneratorRuntime.mark((function t(){var a,s,n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a=e.commit,s=[],a("clearError"),a("setLoading",!0),t.prev=4,t.next=7,te["a"].database().ref("/data/").once("value");case 7:n=t.sent,r=n.val()||[],Object.keys(r).forEach((function(e){var t=r[e];s.push({id:e,type:t.type,name:t.name,active:t.active,history:t.history})})),a("setData",s),a("setLoading",!1),t.next=19;break;case 14:throw t.prev=14,t.t0=t["catch"](4),a("setError",t.t0.message),a("setLoading",!1),t.t0;case 19:case"end":return t.stop()}}),t,null,[[4,14]])})))()},addNewRecord:function(e,t){return Object(i["a"])(regeneratorRuntime.mark((function a(){var s,n;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return s=e.commit,s("clearError"),s("setLoading",!0),a.prev=3,a.next=6,te["a"].database().ref("/data/").push(t);case 6:n=a.sent,s("setRecord",Object($["a"])(Object($["a"])({},t),{},{id:n.key})),s("setLoading",!1),a.next=16;break;case 11:throw a.prev=11,a.t0=a["catch"](3),s("setError",a.t0.message),s("setLoading",!1),a.t0;case 16:case"end":return a.stop()}}),a,null,[[3,11]])})))()},changeItem:function(e,t){return Object(i["a"])(regeneratorRuntime.mark((function a(){var s;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return s=e.commit,s("clearError"),s("setLoading",!0),a.prev=3,a.next=6,te["a"].database().ref("/data/".concat(t.id)).update({name:t.name,type:t.type,active:t.active,history:t.history});case 6:s("putItem",t),s("setLoading",!1),a.next=15;break;case 10:throw a.prev=10,a.t0=a["catch"](3),s("setError",a.t0.message),s("setLoading",!1),a.t0;case 15:case"end":return a.stop()}}),a,null,[[3,10]])})))()},delItem:function(e,t){return Object(i["a"])(regeneratorRuntime.mark((function a(){var s;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return s=e.commit,s("clearError"),s("setLoading",!0),a.prev=3,a.next=6,te["a"].database().ref("/data/".concat(t)).remove();case 6:console.log(t),s("removeItem",t),s("setLoading",!1),a.next=16;break;case 11:throw a.prev=11,a.t0=a["catch"](3),s("setError",a.t0.message),s("setLoading",!1),a.t0;case 16:case"end":return a.stop()}}),a,null,[[3,11]])})))()}},getters:{getData:function(e){return e.data},getTypes:function(e){return e.types},getDates:function(e){return e.dates},getTypeData:function(e){return function(t){return e.data.filter((function(e){return e.type===t}))||[]}}},modules:{common:ae}}),ne={install:function(e){e.prototype.$message=function(e){k.a.toast({html:e})},e.prototype.$error=function(e){k.a.toast({html:"[ERROR:] ".concat(e)})}}},re=a("8832"),ie=a.n(re),ce=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},oe=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"loader-block"},[a("div",{staticClass:"preloader-wrapper big active"},[a("div",{staticClass:"spinner-layer spinner-red-only"},[a("div",{staticClass:"circle-clipper left"},[a("div",{staticClass:"circle"})]),a("div",{staticClass:"gap-patch"},[a("div",{staticClass:"circle"})]),a("div",{staticClass:"circle-clipper right"},[a("div",{staticClass:"circle"})])])])])}],le={},de=le,ue=(a("8242"),Object(u["a"])(de,ce,oe,!1,null,"748f9e8b",null)),fe=ue.exports;a("6885"),a("66ce");s["a"].config.productionTip=!1,s["a"].use(ne),s["a"].component("Paginate",ie.a),s["a"].component("Loader",fe),te["a"].initializeApp({apiKey:"AIzaSyC1U4-SRFH7PqymiPwK4tePgwMvmR5CtXw",authDomain:"vue-test-app-5cf6d.firebaseapp.com",databaseURL:"https://vue-test-app-5cf6d-default-rtdb.firebaseio.com",projectId:"vue-test-app-5cf6d",storageBucket:"vue-test-app-5cf6d.appspot.com",messagingSenderId:"440926471516",appId:"1:440926471516:web:265cc9799a9d473c5eed99"}),new s["a"]({router:Z,store:se,render:function(e){return e(b)}}).$mount("#app")},"5c0b":function(e,t,a){"use strict";a("9c0c")},"6ae8":function(e,t,a){},"77c6":function(e,t,a){},8242:function(e,t,a){"use strict";a("77c6")},"90b4":function(e,t,a){},"9c0c":function(e,t,a){},a4a3:function(e,t,a){},bbe7:function(e,t,a){"use strict";a("6ae8")},cf08:function(e,t,a){},d6f0:function(e,t,a){"use strict";a("90b4")}});
//# sourceMappingURL=index.4932ef5b.js.map