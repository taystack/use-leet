(this["webpackJsonp@taystack/use-leet-example"]=this["webpackJsonp@taystack/use-leet-example"]||[]).push([[0],{12:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),a=n(2),c=n.n(a),i=(n(12),n(4)),u=n(1),l=n(3),f=function(e){var t=e.from,n=e.to,r=(e.index,e.onRemove);return o.a.createElement("div",{style:{display:"flex",alignItems:"center"}},"from\xa0",o.a.createElement("code",null,t),"\xa0into\xa0",o.a.createElement("code",null,n),"\xa0",o.a.createElement("div",{onClick:r},"remove"))},s=function(){var e=Object(r.useState)({}),t=Object(u.a)(e,2),n=t[0],a=t[1],c=Object(r.useState)([]),s=Object(u.a)(c,2),p=s[0],h=s[1],y=Object(r.useState)(""),b=Object(u.a)(y,2),d=b[0],m=b[1],g=Object(r.useState)(""),v=Object(u.a)(g,2),w=v[0],O=v[1],j=Object(l.a)("You can modify this text\nBelow is the compiled version of whetever you put here\nI just owned a bunch of noobs\ndude, you are all my dudes and dudettes\nyour zebra was fired and banned over dope hacks\nunique, new york\nget off my lawn\nthe internet is a series of tubes\nthe answer is 42",n),E=Object(u.a)(j,3),S=E[0],x=E[1],k=E[2],P=function(e,t){t(e.target.value[0])},R=function(e){var t={};e.forEach((function(e){t[e.from]=e.to})),a(t)};return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{style:{padding:50,fontSize:16,fontFamily:"Arial",lineHeight:"1.5em",color:"#2d2d2d"}},o.a.createElement("h1",null,o.a.createElement("a",{href:"https://github.com/taystack/use-leet"},"@taystack/use-leet")),o.a.createElement("p",null,"Leetify your text with this react 16.8+ hook"),o.a.createElement("textarea",{value:S,onChange:function(e){return x(e.target.value)},style:{fontSize:16,minWidth:500,minHeight:200}}),o.a.createElement("div",{style:{paddingTop:20}},o.a.createElement("pre",null,k)),o.a.createElement("div",{style:{paddingTop:20}},"Set custom values:"),"change ",o.a.createElement("input",{value:d,onChange:function(e){return P(e,m)}}),"to ",o.a.createElement("input",{value:w,onChange:function(e){return P(e,O)}}),o.a.createElement("button",{onClick:function(){if(d&&d.length&&w&&w.length){var e=[].concat(Object(i.a)(p),[{from:d,to:w}]);h(e),m(""),O(""),R(e)}}},"add"),p.map((function(e,t){return o.a.createElement(f,{key:e.from,from:e.from,to:e.to,index:t,onRemove:function(){return function(e){var t=[];p.forEach((function(n,r){e!==r&&t.push(n)})),h(t),R(t)}(t)}})}))))};c.a.render(o.a.createElement(s,null),document.getElementById("root"))},3:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return E}));var r=n(0);function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}function l(e){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function s(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function p(e,t,n){return(p=s()?Reflect.construct:function(e,t,n){var r=[null];r.push.apply(r,t);var o=new(Function.bind.apply(e,r));return n&&f(o,n.prototype),o}).apply(null,arguments)}function h(e){var t="function"===typeof Map?new Map:void 0;return(h=function(e){if(null===e||(n=e,-1===Function.toString.call(n).indexOf("[native code]")))return e;var n;if("function"!==typeof e)throw new TypeError("Super expression must either be null or a function");if("undefined"!==typeof t){if(t.has(e))return t.get(e);t.set(e,r)}function r(){return p(e,arguments,l(this).constructor)}return r.prototype=Object.create(e.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),f(r,e)})(e)}function y(e,t){return!t||"object"!==typeof t&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function b(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var n=[],r=!0,o=!1,a=void 0;try{for(var c,i=e[Symbol.iterator]();!(r=(c=i.next()).done)&&(n.push(c.value),!t||n.length!==t);r=!0);}catch(u){o=!0,a=u}finally{try{r||null==i.return||i.return()}finally{if(o)throw a}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var d={a:"4",b:"b",c:"c",d:"d",e:"3",f:"f",g:"g",h:"h",i:"i",j:"j",k:"k",l:"1",m:"m",n:"n",o:"0",p:"p",q:"q",r:"r",s:"5",t:"7",u:"u",v:"v",w:"w",x:"x",y:"y",z:"z",1:"L",2:"Z",3:"E",4:"A",5:"S",6:"b",7:"T",8:"B",9:"g",0:"o","!":"zorz","\u2026":"ness"};function m(e,t){return Object(r.useMemo)((function(){if(g.generator)return g.generator(e);var n=e;return(n=(n=(n=(n=(n=(n=(n=(n=(n=(n=(n=(n=(n=n.replace(/ness/gi,"\u2026")).replace(/own/gi,"pwn")).replace(/and|anned/gi,"&")).replace(/ed\b/gi,"d")).replace(/dudes/gi,"doodz")).replace(/dude/gi,"dood")).replace(/fool/gi,"foo")).replace(/you\sare\sa|you\'re\sa|your\sa/gi,"you a")).replace(/\byou/gi,"joo")).replace(/\bmy\b/gi,"mah")).replace(/yo|hi|hey|hello|sup|what\'s\sup|what\sis\sup/gi,"jo")).replace(/new\sperson/gi,"newb")).replace(/hacks/gi,"hax")).split("").map((function(e){return function(e,t){var n=t[e.toLowerCase()];return n||e}(e,t)})).join("")}),[e,t,g.generator])}var g=e.UseLeet||(e.UseLeet=new v);function v(){this.map=i({},d),this.generator=!1}var w=function(e){function t(e,n){var r;o(this,t);var a="".concat(e," - you provided");try{r=y(this,l(t).call(this,"".concat(a," ").concat(n.toString())))}catch(c){r=y(this,l(t).call(this,"".concat(a," something... something unprintable.")))}return r}return u(t,e),t}(h(Error)),O=function(e){function t(e){return o(this,t),y(this,l(t).call(this,"UseLeet expects customMap to be of a shape { CHAR_A: CHAR_A_RETURNS }",e))}return u(t,e),t}(w),j=function(e){function t(e){return o(this,t),y(this,l(t).call(this,"UseLeet expects customGenerator to be of type FUNC",e))}return u(t,e),t}(w);function E(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=Object(r.useState)(e),o=b(n,2),a=o[0],c=o[1],u=Object(r.useMemo)((function(){return i({},UseLeet.getMap(),{},t)}),[t]),l=m(a,u,UseLeet.generator);return[a,c,l]}v.prototype.setMap=function(e){if(e.constructor!==Object)throw new O(e);Object.keys(e).forEach((function(t){if("string"!==typeof e[t])throw new O(e[t])})),this.map=i({},d,{},e)},v.prototype.setGenerator=function(e){if("function"!==typeof e)throw new j(e);this.generator=e},v.prototype.resetGenerator=function(){this.generator=!1},v.prototype.getMap=function(){return this.map},v.prototype.resetMap=function(){this.map=i({},d)}}).call(this,n(13))},5:function(e,t,n){e.exports=n(14)}},[[5,1,2]]]);
//# sourceMappingURL=main.6798055c.chunk.js.map