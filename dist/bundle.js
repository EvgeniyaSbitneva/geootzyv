!function(e){var r={};function n(t){if(r[t])return r[t].exports;var o=r[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=r,n.d=function(e,r,t){n.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:t})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,r){if(1&r&&(e=n(e)),8&r)return e;if(4&r&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(n.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var o in e)n.d(t,o,function(r){return e[r]}.bind(null,o));return t},n.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(r,"a",r),r},n.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},n.p="",n(n.s=0)}([function(e,r,n){"use strict";n.r(r);n(1);const t=document.querySelector(".popup"),o=document.querySelector(".popup__address"),i=document.querySelector(".popup__reviews"),a=document.querySelector("#review-form"),s=document.querySelector("#submit"),l=document.querySelector(".popup__close");let c,u={};ymaps.ready(function(){let e=new ymaps.Map("map",{center:[55.76,37.64],zoom:15},{searchControlProvider:"yandex#search"});var r=ymaps.templateLayoutFactory.createClass("<div class=ballon_header>{{ properties.balloonContentHeader|raw }}</div><div class=ballon_body>{{ properties.balloonContentBody|raw }}</div><div class=ballon_footer>{{ properties.balloonContentFooter|raw }}</div>");function n(e){if(console.log(u),u.hasOwnProperty(e)){let r=u[e].comments;if(console.log(r),r.length>0){let e=document.createDocumentFragment();i.innerHTML="",r.forEach(r=>{let n=document.createElement("div");n.innerHTML=`<b>${r.name}</b> ${r.place} ${r.date}<br>${r.review}`,e.appendChild(n),console.log(r)}),i.appendChild(e)}o.innerHTML=u[e].address}}function p(e,r){function o(){if(s.setAttribute("disabled","disabled"),""!==a.elements.name.value&&""!==a.elements.place.value&&""!==a.elements.review.value){let t=new Date,o=new Intl.DateTimeFormat("ru"),i={name:a.elements.name.value,place:a.elements.place.value,date:o.format(t),review:a.elements.review.value};r.comments.push(i),console.log(e),u[e]=r;let s=new ymaps.Placemark(e,{preset:"islands#violetHomeCircleIcon",balloonContentHeader:`<b>${i.place}</b><a class="ballon_link" href="#" data-coords="${e}">${r.address}</a>`,balloonContentBody:i.review,balloonContentFooter:i.date});c.add(s),s.events.add("click",function(t){t.preventDefault(),n(e),p(e,r)}),n(e),a.reset()}s.removeAttribute("disabled")}t.classList.remove("hidden"),l.addEventListener("click",()=>{s.removeEventListener("click",o),t.classList.add("hidden")}),s.addEventListener("click",o)}c=new ymaps.Clusterer({preset:"islands#invertedVioletClusterIcons",clusterDisableClickZoom:!0,openBalloonOnClick:!0,clusterBalloonContentLayout:"cluster#balloonCarousel",clusterBalloonItemContentLayout:r,clusterBalloonContentLayoutWidth:200,clusterBalloonContentLayoutHeight:130,clusterBalloonPagerSize:4}),e.geoObjects.add(c),e.events.add("click",e=>{e.preventDefault();let r=e.get("coords");console.log(r);let t={address:"",comments:[]};!function(e){ymaps.geocode(e).then(e=>{t.address=e.geoObjects.get(0).getAddressLine()}).then(()=>{u.hasOwnProperty(e)?n(e):(i.innerHTML="Отзывов пока нет...",o.innerHTML=t.address)}).then(()=>{p(e,t)})}(r)}),document.addEventListener("click",e=>{if(e.target.classList.contains("ballon_link")){e.preventDefault();let r=e.target.getAttribute("data-coords"),t=u[r];n(r),p(r,t)}})})},function(e,r,n){var t=n(2);"string"==typeof t&&(t=[[e.i,t,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(4)(t,o);t.locals&&(e.exports=t.locals)},function(e,r,n){(e.exports=n(3)(!1)).push([e.i,"* {\r\n    box-sizing: border-box;\r\n}\r\nbody {\r\n    margin: 0;\r\n    position: relative;\r\n    font-family: 'Fira Sans', serif;\r\n    font-size: 15px;\r\n    color: #4f4f4f;\r\n}\r\n.hidden {\r\n    display: none;\r\n}\r\n.myDiv {\r\n    width: 100%;\r\n    height: 100vh;\r\n}\r\n.popup {\r\n    position: absolute;\r\n    top: 10%;\r\n    left: 50%;\r\n    width: 380px;\r\n    /* height: 530px; */\r\n    padding: 0 12px 16px 12px;\r\n    transform: translateX(-50%);\r\n    -webkit-transform: translateX(-50%);\r\n    -moz-transform: translateX(-50%);\r\n    -ms-transform: translateX(-50%);\r\n    -o-transform: translateX(-50%);\r\n    background-color: #fff;\r\n    border-radius: 8px;\r\n    -webkit-border-radius: 8px;\r\n    -moz-border-radius: 8px;\r\n    -ms-border-radius: 8px;\r\n    -o-border-radius: 8px;\r\n}\r\n\r\n.popup__header {\r\n    width: calc(100% + 24px);\r\n    padding: 16px 12px;\r\n    margin-left: -12px;\r\n    min-height: 46px;\r\n    display: flex;\r\n    font-size: 15px;\r\n    color: #fff;\r\n    background-color: #ff8663;\r\n    border-top-right-radius: 8px;\r\n    border-top-left-radius: 8px;\r\n}\r\n.popup__close {\r\n    margin-left: auto;\r\n    font-size: 30px;\r\n    line-height: 15px;\r\n    cursor: pointer;\r\n}\r\n.popup__reviews {\r\n    height: 140px;\r\n    overflow-y: auto;\r\n    padding: 10px 0;\r\n}\r\n.popup__reviews div {\r\n    margin-bottom: 20px;\r\n}\r\n.popup h2 {\r\n    color: #ff8663;\r\n    font-weight: bold;\r\n    text-transform: uppercase;\r\n    font-size: 16px;\r\n}\r\n.popup__form {\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n.popup__form input,\r\n.popup__form textarea {\r\n    padding: 7px 12px;\r\n    margin-bottom: 12px;\r\n    border: 1px solid #c4c4c4;\r\n    border-radius: 16px;\r\n    -webkit-border-radius: 16px;\r\n    -moz-border-radius: 16px;\r\n    -ms-border-radius: 16px;\r\n    -o-border-radius: 16px;\r\n}\r\n.popup__form textarea {\r\n    font-size: 15px;\r\n    resize: none;\r\n    width: 100%;\r\n    height: 130px;\r\n}\r\n.popup__form button {\r\n    font-size: 12px;\r\n    width: 87px;\r\n    padding: 6px;\r\n    margin-left: auto;\r\n    cursor: pointer;\r\n    color: #fff;\r\n    background: none;\r\n    border: none;\r\n    background-color: #ff8663;\r\n    border-radius: 8px;\r\n    -webkit-border-radius: 8px;\r\n    -moz-border-radius: 8px;\r\n    -ms-border-radius: 8px;\r\n    -o-border-radius: 8px;\r\n}\r\n\r\n.ballon_footer {\r\n    position: absolute;\r\n    bottom: 1px;\r\n    width: 100%;\r\n    text-align: right;\r\n    right: 20px;\r\n    color: #c4c4c4;\r\n    background-color: #fff;\r\n    z-index: 2;\r\n}\r\n\r\n.ballon_header b,\r\n.ballon_link {\r\n    display: block;\r\n    margin-bottom: 10px;\r\n    margin-top: 10px;\r\n}\r\n\r\n.ballon_body {\r\n    padding-bottom: 25px;\r\n}",""])},function(e,r,n){"use strict";e.exports=function(e){var r=[];return r.toString=function(){return this.map(function(r){var n=function(e,r){var n=e[1]||"",t=e[3];if(!t)return n;if(r&&"function"==typeof btoa){var o=(a=t,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"),i=t.sources.map(function(e){return"/*# sourceURL="+t.sourceRoot+e+" */"});return[n].concat(i).concat([o]).join("\n")}var a;return[n].join("\n")}(r,e);return r[2]?"@media "+r[2]+"{"+n+"}":n}).join("")},r.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var t={},o=0;o<this.length;o++){var i=this[o][0];null!=i&&(t[i]=!0)}for(o=0;o<e.length;o++){var a=e[o];null!=a[0]&&t[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),r.push(a))}},r}},function(e,r,n){var t,o,i={},a=(t=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===o&&(o=t.apply(this,arguments)),o}),s=function(e){var r={};return function(e,n){if("function"==typeof e)return e();if(void 0===r[e]){var t=function(e,r){return r?r.querySelector(e):document.querySelector(e)}.call(this,e,n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}r[e]=t}return r[e]}}(),l=null,c=0,u=[],p=n(5);function d(e,r){for(var n=0;n<e.length;n++){var t=e[n],o=i[t.id];if(o){o.refs++;for(var a=0;a<o.parts.length;a++)o.parts[a](t.parts[a]);for(;a<t.parts.length;a++)o.parts.push(y(t.parts[a],r))}else{var s=[];for(a=0;a<t.parts.length;a++)s.push(y(t.parts[a],r));i[t.id]={id:t.id,refs:1,parts:s}}}}function f(e,r){for(var n=[],t={},o=0;o<e.length;o++){var i=e[o],a=r.base?i[0]+r.base:i[0],s={css:i[1],media:i[2],sourceMap:i[3]};t[a]?t[a].parts.push(s):n.push(t[a]={id:a,parts:[s]})}return n}function m(e,r){var n=s(e.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var t=u[u.length-1];if("top"===e.insertAt)t?t.nextSibling?n.insertBefore(r,t.nextSibling):n.appendChild(r):n.insertBefore(r,n.firstChild),u.push(r);else if("bottom"===e.insertAt)n.appendChild(r);else{if("object"!=typeof e.insertAt||!e.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var o=s(e.insertAt.before,n);n.insertBefore(r,o)}}function b(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var r=u.indexOf(e);r>=0&&u.splice(r,1)}function v(e){var r=document.createElement("style");if(void 0===e.attrs.type&&(e.attrs.type="text/css"),void 0===e.attrs.nonce){var t=function(){0;return n.nc}();t&&(e.attrs.nonce=t)}return h(r,e.attrs),m(e,r),r}function h(e,r){Object.keys(r).forEach(function(n){e.setAttribute(n,r[n])})}function y(e,r){var n,t,o,i;if(r.transform&&e.css){if(!(i="function"==typeof r.transform?r.transform(e.css):r.transform.default(e.css)))return function(){};e.css=i}if(r.singleton){var a=c++;n=l||(l=v(r)),t=w.bind(null,n,a,!1),o=w.bind(null,n,a,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=function(e){var r=document.createElement("link");return void 0===e.attrs.type&&(e.attrs.type="text/css"),e.attrs.rel="stylesheet",h(r,e.attrs),m(e,r),r}(r),t=function(e,r,n){var t=n.css,o=n.sourceMap,i=void 0===r.convertToAbsoluteUrls&&o;(r.convertToAbsoluteUrls||i)&&(t=p(t));o&&(t+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var a=new Blob([t],{type:"text/css"}),s=e.href;e.href=URL.createObjectURL(a),s&&URL.revokeObjectURL(s)}.bind(null,n,r),o=function(){b(n),n.href&&URL.revokeObjectURL(n.href)}):(n=v(r),t=function(e,r){var n=r.css,t=r.media;t&&e.setAttribute("media",t);if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}.bind(null,n),o=function(){b(n)});return t(e),function(r){if(r){if(r.css===e.css&&r.media===e.media&&r.sourceMap===e.sourceMap)return;t(e=r)}else o()}}e.exports=function(e,r){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(r=r||{}).attrs="object"==typeof r.attrs?r.attrs:{},r.singleton||"boolean"==typeof r.singleton||(r.singleton=a()),r.insertInto||(r.insertInto="head"),r.insertAt||(r.insertAt="bottom");var n=f(e,r);return d(n,r),function(e){for(var t=[],o=0;o<n.length;o++){var a=n[o];(s=i[a.id]).refs--,t.push(s)}e&&d(f(e,r),r);for(o=0;o<t.length;o++){var s;if(0===(s=t[o]).refs){for(var l=0;l<s.parts.length;l++)s.parts[l]();delete i[s.id]}}}};var g,x=(g=[],function(e,r){return g[e]=r,g.filter(Boolean).join("\n")});function w(e,r,n,t){var o=n?"":t.css;if(e.styleSheet)e.styleSheet.cssText=x(r,o);else{var i=document.createTextNode(o),a=e.childNodes;a[r]&&e.removeChild(a[r]),a.length?e.insertBefore(i,a[r]):e.appendChild(i)}}},function(e,r){e.exports=function(e){var r="undefined"!=typeof window&&window.location;if(!r)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var n=r.protocol+"//"+r.host,t=n+r.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(e,r){var o,i=r.trim().replace(/^"(.*)"$/,function(e,r){return r}).replace(/^'(.*)'$/,function(e,r){return r});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i)?e:(o=0===i.indexOf("//")?i:0===i.indexOf("/")?n+i:t+i.replace(/^\.\//,""),"url("+JSON.stringify(o)+")")})}}]);