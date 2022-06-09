"use strict";(self.webpackChunkalexmercerind_github_io=self.webpackChunkalexmercerind_github_io||[]).push([[817],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return y}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),f=u(n),y=a,m=f["".concat(l,".").concat(y)]||f[y]||p[y]||o;return n?r.createElement(m,c(c({ref:t},s),{},{components:n})):r.createElement(m,c({ref:t},s))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=f;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var u=2;u<o;u++)c[u]=n[u];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},881:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return l},default:function(){return y},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return p}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),c=["components"],i={slug:"alexmercerind",title:"C++'s <future>, making async C callbacks functions sync & enjoyable multi-threading",tags:["c++","std::async","multi-threading","async"]},l=void 0,u={permalink:"/blog/alexmercerind",source:"@site/blog/2022-05-21-cpp-future-async-sync-multi-threading.md",title:"C++'s <future>, making async C callbacks functions sync & enjoyable multi-threading",description:"I use `` header in C++ very-very often in my code everywhere at this point & wanted to share what's so cool in it.",date:"2022-05-21T00:00:00.000Z",formattedDate:"May 21, 2022",tags:[{label:"c++",permalink:"/blog/tags/c"},{label:"std::async",permalink:"/blog/tags/std-async"},{label:"multi-threading",permalink:"/blog/tags/multi-threading"},{label:"async",permalink:"/blog/tags/async"}],readingTime:5.815,truncated:!0,authors:[],frontMatter:{slug:"alexmercerind",title:"C++'s <future>, making async C callbacks functions sync & enjoyable multi-threading",tags:["c++","std::async","multi-threading","async"]}},s={authorsImageUrls:[]},p=[],f={toc:p};function y(e){var t=e.components,n=(0,a.Z)(e,c);return(0,o.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"I use ",(0,o.kt)("a",{parentName:"p",href:"https://cplusplus.com/reference/future"},(0,o.kt)("inlineCode",{parentName:"a"},"<future>"))," header in C++ very-very often in my code everywhere at this point & wanted to share what's so cool in it."))}y.isMDXComponent=!0}}]);