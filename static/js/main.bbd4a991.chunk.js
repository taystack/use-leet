(this["webpackJsonp@taystack/use-leet-example"]=this["webpackJsonp@taystack/use-leet-example"]||[]).push([[0],{11:function(e,t,n){},12:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(2),c=n.n(o),u=(n(11),n(3)),i=n(1);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var n=[],r=!0,a=!1,o=void 0;try{for(var c,u=e[Symbol.iterator]();!(r=(c=u.next()).done)&&(n.push(c.value),!t||n.length!==t);r=!0);}catch(i){a=!0,o=i}finally{try{r||null==u.return||u.return()}finally{if(a)throw o}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var d={a:"4",b:"b",c:"c",d:"d",e:"3",f:"f",g:"g",h:"h",i:"i",j:"j",k:"k",l:"1",m:"m",n:"n",o:"0",p:"p",q:"q",r:"r",s:"5",t:"7",u:"u",v:"v",w:"w",x:"x",y:"y",z:"z",1:"L",2:"Z",3:"E",4:"A",5:"S",6:"b",7:"T",8:"B",9:"g",0:"o","!":"zorz","\u2026":"ness"};function b(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:d,n=t[e.toLowerCase()];return n||e}function m(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:d;return Object(r.useMemo)((function(){var n=e;return(n=(n=(n=(n=(n=(n=(n=(n=(n=(n=(n=(n=(n=n.replace(/ness/gi,"\u2026")).replace(/own/gi,"pwn")).replace(/and|anned/gi,"&")).replace(/ed\b/gi,"d")).replace(/dudes/gi,"doodz")).replace(/dude/gi,"dood")).replace(/fool/gi,"foo")).replace(/you\sare\sa|you\'re\sa|your\sa/gi,"you a")).replace(/\byou/gi,"joo")).replace(/\bmy\b/gi,"mah")).replace(/yo|hi|hey|hello|sup|what\'s\sup|what\sis\sup/gi,"jo")).replace(/new\sperson/gi,"newb")).replace(/hacks/gi,"hax")).split("").map((function(e){return b(e,t)})).join("")}),[e,t])}var g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=Object(r.useState)(e),a=p(n,2),o=a[0],c=a[1],u=Object(r.useMemo)((function(){return f({},d,{},t)}),[t]),i=m(o,u);return[o,c,i]},y=function(e){var t=e.from,n=e.to,r=(e.index,e.onRemove);return a.a.createElement("div",{style:{display:"flex",alignItems:"center"}},"from\xa0",a.a.createElement("code",null,t),"\xa0into\xa0",a.a.createElement("code",null,n),"\xa0",a.a.createElement("div",{onClick:r},"remove"))},v=function(){var e=Object(r.useState)({}),t=Object(i.a)(e,2),n=t[0],o=t[1],c=Object(r.useState)([]),l=Object(i.a)(c,2),s=l[0],f=l[1],p=Object(r.useState)(""),d=Object(i.a)(p,2),b=d[0],m=d[1],v=Object(r.useState)(""),h=Object(i.a)(v,2),j=h[0],O=h[1],w=g("I just owned a bunch of noobs\ndude, you are all my dudes and dudettes\nyour zebra was fired and banned over dope hacks\nunique, new york\nget off my lawn\nthe internet is a series of tubes\nthe answer is 42",n),E=Object(i.a)(w,3),S=E[0],k=E[1],x=E[2],P=function(e,t){t(e.target.value[0])},z=function(e){var t={};e.forEach((function(e){t[e.from]=e.to})),o(t)};return a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{style:{padding:50,fontSize:16}},a.a.createElement("textarea",{value:S,onChange:function(e){return k(e.target.value)},style:{fontSize:16,minWidth:500,minHeight:200}}),a.a.createElement("div",{style:{paddingTop:20}},a.a.createElement("pre",null,x)),a.a.createElement("div",{style:{paddingTop:20}},"Set custom values:"),"change ",a.a.createElement("input",{value:b,onChange:function(e){return P(e,m)}}),"to ",a.a.createElement("input",{value:j,onChange:function(e){return P(e,O)}}),a.a.createElement("button",{onClick:function(){if(b&&b.length&&j&&j.length){var e=[].concat(Object(u.a)(s),[{from:b,to:j}]);f(e),m(""),O(""),z(e)}}},"add"),s.map((function(e,t){return a.a.createElement(y,{key:e.from,from:e.from,to:e.to,index:t,onRemove:function(){return function(e){var t=[];s.forEach((function(n,r){e!==r&&t.push(n)})),f(t),z(t)}(t)}})}))))};c.a.render(a.a.createElement(v,null),document.getElementById("root"))},4:function(e,t,n){e.exports=n(12)}},[[4,1,2]]]);
//# sourceMappingURL=main.bbd4a991.chunk.js.map