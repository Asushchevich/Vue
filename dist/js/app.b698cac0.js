(function(r){function t(t){for(var n,c,a=t[0],i=t[1],l=t[2],p=0,v=[];p<a.length;p++)c=a[p],Object.prototype.hasOwnProperty.call(u,c)&&u[c]&&v.push(u[c][0]),u[c]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(r[n]=i[n]);s&&s(t);while(v.length)v.shift()();return o.push.apply(o,l||[]),e()}function e(){for(var r,t=0;t<o.length;t++){for(var e=o[t],n=!0,a=1;a<e.length;a++){var i=e[a];0!==u[i]&&(n=!1)}n&&(o.splice(t--,1),r=c(c.s=e[0]))}return r}var n={},u={app:0},o=[];function c(t){if(n[t])return n[t].exports;var e=n[t]={i:t,l:!1,exports:{}};return r[t].call(e.exports,e,e.exports,c),e.l=!0,e.exports}c.m=r,c.c=n,c.d=function(r,t,e){c.o(r,t)||Object.defineProperty(r,t,{enumerable:!0,get:e})},c.r=function(r){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(r,"__esModule",{value:!0})},c.t=function(r,t){if(1&t&&(r=c(r)),8&t)return r;if(4&t&&"object"===typeof r&&r&&r.__esModule)return r;var e=Object.create(null);if(c.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:r}),2&t&&"string"!=typeof r)for(var n in r)c.d(e,n,function(t){return r[t]}.bind(null,n));return e},c.n=function(r){var t=r&&r.__esModule?function(){return r["default"]}:function(){return r};return c.d(t,"a",t),t},c.o=function(r,t){return Object.prototype.hasOwnProperty.call(r,t)},c.p="/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],i=a.push.bind(a);a.push=t,a=a.slice();for(var l=0;l<a.length;l++)t(a[l]);var s=i;o.push([0,"chunk-vendors"]),e()})({0:function(r,t,e){r.exports=e("56d7")},"034f":function(r,t,e){"use strict";e("c21b")},"42d3":function(r,t,e){"use strict";e("a885")},"56d7":function(r,t,e){"use strict";e.r(t);var n=e("2b0e"),u=function(){var r=this,t=r.$createElement,e=r._self._c||t;return e("div",{attrs:{id:"app"}},[e("h1",[r._v("���������")]),e("div",{staticClass:"line"},[e("Converter",{attrs:{currA:"USD",currB:"BYN"}}),e("Converter",{attrs:{currA:"BYN",currB:"USD"}})],1),e("div",{staticClass:"line"},[e("Converter",{attrs:{currA:"USD",currB:"EUR"}}),e("Converter",{attrs:{currA:"EUR",currB:"USD"}})],1),e("div",{staticClass:"line"},[e("Converter",{attrs:{currA:"BYN",currB:"EUR"}}),e("Converter",{attrs:{currA:"EUR",currB:"BYN"}})],1)])},o=[],c=function(){var r=this,t=r.$createElement,e=r._self._c||t;return e("div",{staticClass:"converter"},[e("h2",[r._v(r._s(r.currA)+" to "+r._s(r.currB))]),e("input",{directives:[{name:"model",rawName:"v-model",value:r.currA_value,expression:"currA_value"}],attrs:{type:"text",placeholder:r.currA},domProps:{value:r.currA_value},on:{input:function(t){t.target.composing||(r.currA_value=t.target.value)}}}),e("input",{attrs:{type:"button",value:"Convert"},on:{click:r.converter}}),e("h2",[r._v(r._s(r.currB_value))])])},a=[],i={name:"Converter",props:["currA","currB"],data:function(){return{currA_value:"",currB_value:0}},methods:{converter:function(){var r=this,t=this.currA+"_"+this.currB,e=this.currA,n=this.currB,u="https://free.currconv.com/api/v7/convert?q="+t+"&compact=ultra&apiKey=ce3469123d58a045204c";fetch(u).then(function(r){return r.json()}).then(function(u){var o=u[t];console.log("Current value from 1 "+e+" to 1 "+n+" : "+o),r.currB_value=(o*parseFloat(r.currA_value)).toFixed(2)}).catch(function(r){return console.error(r)})}}},l=i,s=(e("42d3"),e("2877")),p=Object(s["a"])(l,c,a,!1,null,"8ff80458",null),v=p.exports,f={name:"app",components:{Converter:v}},d=f,h=(e("034f"),Object(s["a"])(d,u,o,!1,null,null,null)),_=h.exports;n["a"].config.productionTip=!0,new n["a"]({render:function(r){return r(_)}}).$mount("#app")},a885:function(r,t,e){},c21b:function(r,t,e){}});
//# sourceMappingURL=app.b698cac0.js.map