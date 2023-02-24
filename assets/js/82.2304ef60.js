"use strict";(self.webpackChunkalexmercerind_github_io=self.webpackChunkalexmercerind_github_io||[]).push([[82],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),s=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=s(e.components);return r.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,m=c(e,["components","mdxType","originalType","parentName"]),u=s(n),d=a,y=u["".concat(i,".").concat(d)]||u[d]||p[d]||o;return n?r.createElement(y,l(l({ref:t},m),{},{components:n})):r.createElement(y,l({ref:t},m))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=u;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:a,l[1]=c;for(var s=2;s<o;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6637:(e,t,n)=>{n.d(t,{Z:()=>u});var r=n(7294),a=n(6010),o=n(9960);const l="image_o0gy";function c(e){return e.href?r.createElement(o.Z,e):r.createElement(r.Fragment,null,e.children)}function i(e){let{author:t}=e;const{name:n,title:a,url:o,imageURL:i,email:s}=t,m=o||s&&`mailto:${s}`||void 0;return r.createElement("div",{className:"avatar margin-bottom--sm"},i&&r.createElement("span",{className:"avatar__photo-link avatar__photo"},r.createElement(c,{href:m},r.createElement("img",{className:l,src:i,alt:n}))),n&&r.createElement("div",{className:"avatar__intro",itemProp:"author",itemScope:!0,itemType:"https://schema.org/Person"},r.createElement("div",{className:"avatar__name"},r.createElement(c,{href:m,itemProp:"url"},r.createElement("span",{itemProp:"name"},n))),a&&r.createElement("small",{className:"avatar__subtitle",itemProp:"description"},a)))}const s="authorCol_FlmR",m="imageOnlyAuthorRow_trpF",p="imageOnlyAuthorCol_S2np";function u(e){let{authors:t,assets:n}=e;if(0===t.length)return null;const o=t.every((e=>{let{name:t}=e;return!t}));return r.createElement("div",{className:(0,a.Z)("margin-top--md margin-bottom--sm",o?m:"row")},t.map(((e,t)=>r.createElement("div",{className:(0,a.Z)(!o&&"col col--6",o?p:s),key:t},r.createElement(i,{author:{...e,imageURL:n.authorsImageUrls[t]??e.imageURL}})))))}},66:(e,t,n)=>{n.d(t,{Z:()=>D});var r=n(7462),a=n(7294),o=n(5742),l=n(9960),c=n(6010);const i={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","at-rule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]};var s={Prism:n(7410).default,theme:i};function m(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(){return p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},p.apply(this,arguments)}var u=/\r\n|\r|\n/,d=function(e){0===e.length?e.push({types:["plain"],content:"\n",empty:!0}):1===e.length&&""===e[0].content&&(e[0].content="\n",e[0].empty=!0)},y=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)},g=function(e,t){var n=e.plain,r=Object.create(null),a=e.styles.reduce((function(e,n){var r=n.languages,a=n.style;return r&&!r.includes(t)||n.types.forEach((function(t){var n=p({},e[t],a);e[t]=n})),e}),r);return a.root=n,a.plain=p({},n,{backgroundColor:null}),a};function h(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&-1===t.indexOf(r)&&(n[r]=e[r]);return n}const f=function(e){function t(){for(var t=this,n=[],r=arguments.length;r--;)n[r]=arguments[r];e.apply(this,n),m(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?g(e.theme,e.language):void 0;return t.themeDict=n})),m(this,"getLineProps",(function(e){var n=e.key,r=e.className,a=e.style,o=p({},h(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),l=t.getThemeDict(t.props);return void 0!==l&&(o.style=l.plain),void 0!==a&&(o.style=void 0!==o.style?p({},o.style,a):a),void 0!==n&&(o.key=n),r&&(o.className+=" "+r),o})),m(this,"getStyleForToken",(function(e){var n=e.types,r=e.empty,a=n.length,o=t.getThemeDict(t.props);if(void 0!==o){if(1===a&&"plain"===n[0])return r?{display:"inline-block"}:void 0;if(1===a&&!r)return o[n[0]];var l=r?{display:"inline-block"}:{},c=n.map((function(e){return o[e]}));return Object.assign.apply(Object,[l].concat(c))}})),m(this,"getTokenProps",(function(e){var n=e.key,r=e.className,a=e.style,o=e.token,l=p({},h(e,["key","className","style","token"]),{className:"token "+o.types.join(" "),children:o.content,style:t.getStyleForToken(o),key:void 0});return void 0!==a&&(l.style=void 0!==l.style?p({},l.style,a):a),void 0!==n&&(l.key=n),r&&(l.className+=" "+r),l})),m(this,"tokenize",(function(e,t,n,r){var a={code:t,grammar:n,language:r,tokens:[]};e.hooks.run("before-tokenize",a);var o=a.tokens=e.tokenize(a.code,a.grammar,a.language);return e.hooks.run("after-tokenize",a),o}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,r=e.code,a=e.children,o=this.getThemeDict(this.props),l=t.languages[n];return a({tokens:function(e){for(var t=[[]],n=[e],r=[0],a=[e.length],o=0,l=0,c=[],i=[c];l>-1;){for(;(o=r[l]++)<a[l];){var s=void 0,m=t[l],p=n[l][o];if("string"==typeof p?(m=l>0?m:["plain"],s=p):(m=y(m,p.type),p.alias&&(m=y(m,p.alias)),s=p.content),"string"==typeof s){var g=s.split(u),h=g.length;c.push({types:m,content:g[0]});for(var f=1;f<h;f++)d(c),i.push(c=[]),c.push({types:m,content:g[f]})}else l++,t.push(m),n.push(s),r.push(0),a.push(s.length)}l--,t.pop(),n.pop(),r.pop(),a.pop()}return d(c),i}(void 0!==l?this.tokenize(t,r,l,n):[r]),className:"prism-code language-"+n,style:void 0!==o?o.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(a.Component);var v=n(5999),b=n(5860);const E="codeBlockContainer_I0IT",k="codeBlockContent_wNvx",N="codeBlockTitle_BvAR",_="codeBlock_jd64",O="codeBlockStandalone_csWH",Z="copyButton_wuS7",T="codeBlockLines_mRuA";function P(e){let{children:t,className:n="",metastring:o,title:l,language:i}=e;const{prism:m}=(0,b.LU)(),[p,u]=(0,a.useState)(!1),[d,y]=(0,a.useState)(!1);(0,a.useEffect)((()=>{y(!0)}),[]);const g=(0,b.bc)(o)||l,h=(0,b.pJ)();if(a.Children.toArray(t).some((e=>(0,a.isValidElement)(e))))return a.createElement(f,(0,r.Z)({},s,{key:String(d),theme:h,code:"",language:"text"}),(e=>{let{className:r,style:o}=e;return a.createElement("pre",{tabIndex:0,className:(0,c.Z)(r,O,"thin-scrollbar",E,n,b.kM.common.codeBlock),style:o},a.createElement("code",{className:T},t))}));const P=Array.isArray(t)?t.join(""):t,j=i??(0,b.Vo)(n)??m.defaultLanguage,{highlightLines:C,code:x}=(0,b.nZ)(P,o,j),w=()=>{!function(e,t){let{target:n=document.body}=void 0===t?{}:t;const r=document.createElement("textarea"),a=document.activeElement;r.value=e,r.setAttribute("readonly",""),r.style.contain="strict",r.style.position="absolute",r.style.left="-9999px",r.style.fontSize="12pt";const o=document.getSelection();let l=!1;o.rangeCount>0&&(l=o.getRangeAt(0)),n.append(r),r.select(),r.selectionStart=0,r.selectionEnd=e.length;let c=!1;try{c=document.execCommand("copy")}catch{}r.remove(),l&&(o.removeAllRanges(),o.addRange(l)),a&&a.focus()}(x),u(!0),setTimeout((()=>u(!1)),2e3)};return a.createElement(f,(0,r.Z)({},s,{key:String(d),theme:h,code:x,language:j??"text"}),(e=>{let{className:t,style:o,tokens:l,getLineProps:i,getTokenProps:s}=e;return a.createElement("div",{className:(0,c.Z)(E,n,{[`language-${j}`]:j&&!n.includes(`language-${j}`)},b.kM.common.codeBlock)},g&&a.createElement("div",{style:o,className:N},g),a.createElement("div",{className:(0,c.Z)(k,j)},a.createElement("pre",{tabIndex:0,className:(0,c.Z)(t,_,"thin-scrollbar"),style:o},a.createElement("code",{className:T},l.map(((e,t)=>{1===e.length&&"\n"===e[0].content&&(e[0].content="");const n=i({line:e,key:t});return C.includes(t)&&(n.className+=" docusaurus-highlight-code-line"),a.createElement("span",(0,r.Z)({key:t},n),e.map(((e,t)=>a.createElement("span",(0,r.Z)({key:t},s({token:e,key:t}))))),a.createElement("br",null))})))),a.createElement("button",{type:"button","aria-label":(0,v.I)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),className:(0,c.Z)(Z,"clean-btn"),onClick:w},p?a.createElement(v.Z,{id:"theme.CodeBlock.copied",description:"The copied button label on code blocks"},"Copied"):a.createElement(v.Z,{id:"theme.CodeBlock.copy",description:"The copy button label on code blocks"},"Copy"))))}))}const j="anchorWithStickyNavbar_mojV",C="anchorWithHideOnScrollNavbar_R0VQ";function x(e){let{as:t,id:n,...o}=e;const{navbar:{hideOnScroll:l}}=(0,b.LU)();return n?a.createElement(t,(0,r.Z)({},o,{className:(0,c.Z)("anchor",{[C]:l,[j]:!l}),id:n}),o.children,a.createElement("a",{className:"hash-link",href:`#${n}`,title:(0,v.I)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"\u200b")):a.createElement(t,o)}function w(e){let{as:t,...n}=e;return"h1"===t?a.createElement("h1",(0,r.Z)({},n,{id:void 0}),n.children):a.createElement(x,(0,r.Z)({as:t},n))}const S="details_BAp3";function L(e){let{...t}=e;return a.createElement(b.PO,(0,r.Z)({},t,{className:(0,c.Z)("alert alert--info",S,t.className)}))}const D={head:e=>{const t=a.Children.map(e.children,(e=>function(e){if(e?.props?.mdxType&&e?.props?.originalType){const{mdxType:t,originalType:n,...r}=e.props;return a.createElement(e.props.originalType,r)}return e}(e)));return a.createElement(o.Z,e,t)},code:e=>{const t=["a","b","big","i","span","em","strong","sup","sub","small"];return a.Children.toArray(e.children).every((e=>"string"==typeof e&&!e.includes("\n")||a.isValidElement(e)&&t.includes(e.props.mdxType)))?a.createElement("code",e):a.createElement(P,e)},a:e=>a.createElement(l.Z,e),pre:e=>a.createElement(P,(0,a.isValidElement)(e.children)&&"code"===e.children.props.originalType?e.children?.props:{...e}),details:e=>{const t=a.Children.toArray(e.children),n=t.find((e=>"summary"===e?.props?.mdxType)),o=a.createElement(a.Fragment,null,t.filter((e=>e!==n)));return a.createElement(L,(0,r.Z)({},e,{summary:n}),o)},h1:e=>a.createElement(w,(0,r.Z)({as:"h1"},e)),h2:e=>a.createElement(w,(0,r.Z)({as:"h2"},e)),h3:e=>a.createElement(w,(0,r.Z)({as:"h3"},e)),h4:e=>a.createElement(w,(0,r.Z)({as:"h4"},e)),h5:e=>a.createElement(w,(0,r.Z)({as:"h5"},e)),h6:e=>a.createElement(w,(0,r.Z)({as:"h6"},e))}},1750:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(7294),a=n(9960);function o(e){const{permalink:t,title:n,subLabel:o}=e;return r.createElement(a.Z,{className:"pagination-nav__link",to:t},o&&r.createElement("div",{className:"pagination-nav__sublabel"},o),r.createElement("div",{className:"pagination-nav__label"},n))}},7774:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(7294),a=n(6010),o=n(9960);const l="tag_hD8n",c="tagRegular_D6E_",i="tagWithCount_i0QQ";function s(e){const{permalink:t,name:n,count:s}=e;return r.createElement(o.Z,{href:t,className:(0,a.Z)(l,{[c]:!s,[i]:s})},n,s&&r.createElement("span",null,s))}},62:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(7294),a=n(6010),o=n(5999),l=n(7774);const c="tags_XVD_",i="tag_JSN8";function s(e){let{tags:t}=e;return r.createElement(r.Fragment,null,r.createElement("b",null,r.createElement(o.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),r.createElement("ul",{className:(0,a.Z)(c,"padding--none","margin-left--sm")},t.map((e=>{let{label:t,permalink:n}=e;return r.createElement("li",{key:n,className:i},r.createElement(l.Z,{name:t,permalink:n}))}))))}}}]);