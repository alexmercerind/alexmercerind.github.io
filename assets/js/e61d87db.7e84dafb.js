"use strict";(self.webpackChunkalexmercerind_github_io=self.webpackChunkalexmercerind_github_io||[]).push([[8739],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return p}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var m=n.createContext({}),s=function(e){var t=n.useContext(m),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=s(e.components);return n.createElement(m.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,m=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=s(a),p=r,f=c["".concat(m,".").concat(p)]||c[p]||d[p]||i;return a?n.createElement(f,l(l({ref:t},u),{},{components:a})):n.createElement(f,l({ref:t},u))}));function p(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=c;var o={};for(var m in t)hasOwnProperty.call(t,m)&&(o[m]=t[m]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var s=2;s<i;s++)l[s]=a[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},7905:function(e,t,a){a.d(t,{Z:function(){return p}});var n=a(5861),r=a(7757),i=a.n(r),l=a(7294),o=a(5529),m=a(5742),s="iconBar_ZOQh",u="icon_pT5I",d="iconLabel_q6Wh",c="iconContainer__tjb";function p(e){var t,a,r,p=e.repository,f=e.type,g=(0,l.useState)(null),b=g[0],k=g[1];return(0,l.useEffect)((0,n.Z)(i().mark((function e(){var t,a;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.github.com/repos/"+p);case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,k(a);case 7:case"end":return e.stop()}}),e)}))),[]),l.createElement("div",null,l.createElement(m.Z,null,l.createElement("link",{href:"https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@700&display=swap",rel:"stylesheet"})),l.createElement("a",{target:"_blank",href:"https://github.com/"+p},"GitHub")," \u2022 ","pub.dev"==f?l.createElement("a",{target:"_blank",href:"https://pub.dev/packages/"+p.split("/")[p.split("/").length-1]},"pub.dev"):l.createElement("a",{target:"_blank",href:"https://pypi.org/project/"+p.split("/")[p.split("/").length-1]},"PyPI.org")," \u2022 Give us a \u2b50 on GitHub.",l.createElement("div",{className:s},l.createElement("div",{className:c},l.createElement("div",{className:u},l.createElement(o.r7p,{size:"small"})),l.createElement("div",{className:d},(null!=(t=null==b?void 0:b.stargazers_count)?t:"Unknown")+" Stars")),l.createElement("div",{className:c},l.createElement("div",{className:u},l.createElement(o.jcu,{size:"small"})),l.createElement("div",{className:d},(null!=(a=null==b?void 0:b.forks_count)?a:"Unknown")+" Forks")),l.createElement("div",{className:c},l.createElement("div",{className:u},l.createElement(o.tEF,{size:"small"})),l.createElement("div",{className:d},(null!=(r=null==b?void 0:b.subscribers_count)?r:"Unknown")+" Watchers"))))}},2868:function(e,t,a){a.r(t),a.d(t,{assets:function(){return d},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return m},metadata:function(){return u},toc:function(){return c}});var n=a(7462),r=a(3366),i=(a(7294),a(3905)),l=a(7905),o=["components"],m={id:"flutter_media_metadata",title:"flutter_media_metadata",image:"https://user-images.githubusercontent.com/28951144/151707391-a59bd40a-5303-4dd8-af35-ff8918894dbb.png",description:"A Flutter plugin to read \ud83d\udd16 metadata of \ud83c\udfb5 media files.",hide_title:!0},s="flutter_media_metadata",u={unversionedId:"flutter_media_metadata",id:"flutter_media_metadata",title:"flutter_media_metadata",description:"A Flutter plugin to read \ud83d\udd16 metadata of \ud83c\udfb5 media files.",source:"@site/docs/flutter_media_metadata.md",sourceDirName:".",slug:"/flutter_media_metadata",permalink:"/docs/flutter_media_metadata",tags:[],version:"current",frontMatter:{id:"flutter_media_metadata",title:"flutter_media_metadata",image:"https://user-images.githubusercontent.com/28951144/151707391-a59bd40a-5303-4dd8-af35-ff8918894dbb.png",description:"A Flutter plugin to read \ud83d\udd16 metadata of \ud83c\udfb5 media files.",hide_title:!0},sidebar:"defaultSidebar",previous:{title:"flutter_acrylic",permalink:"/docs/flutter_acrylic"},next:{title:"flutter_native_view",permalink:"/docs/flutter_native_view"}},d={},c=[{value:"Install",id:"install",level:2},{value:"Tutorial",id:"tutorial",level:2},{value:"Windows, Linux, macOS, Android &amp; iOS",id:"windows-linux-macos-android--ios",level:3},{value:"Web",id:"web",level:3},{value:"Platforms",id:"platforms",level:2},{value:"License",id:"license",level:2}],p={toc:c};function f(e){var t=e.components,a=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"flutter_media_metadata"},"flutter_media_metadata"),(0,i.kt)("p",null,"A Flutter plugin to read \ud83d\udd16 metadata of \ud83c\udfb5 media files."),(0,i.kt)(l.Z,{repository:"alexmercerind/flutter_media_metadata",type:"pub.dev",mdxType:"DocsHeader"}),(0,i.kt)("h2",{id:"install"},"Install"),(0,i.kt)("p",null,"Mention in your ",(0,i.kt)("inlineCode",{parentName:"p"},"pubspec.yaml"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"dependencies:\n  ...\n  flutter_media_metadata: ^1.0.0\n")),(0,i.kt)("img",{width:"360",src:"https://user-images.githubusercontent.com/28951144/151707391-a59bd40a-5303-4dd8-af35-ff8918894dbb.png"}),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Example app running on Windows.")),(0,i.kt)("h2",{id:"tutorial"},"Tutorial"),(0,i.kt)("h3",{id:"windows-linux-macos-android--ios"},"Windows, Linux, macOS, Android & iOS"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-dart"},"final metadata = await MetadataRetriever.fromFile(File(filePath));\n\nString? trackName = metadata.trackName;\nList<String>? trackArtistNames = metadata.trackArtistNames;\nString? albumName = metadata.albumName;\nString? albumArtistName = metadata.albumArtistName;\nint? trackNumber = metadata.trackNumber;\nint? albumLength = metadata.albumLength;\nint? year = metadata.year;\nString? genre = metadata.genre;\nString? authorName = metadata.authorName;\nString? writerName = metadata.writerName;\nint? discNumber = metadata.discNumber;\nString? mimeType = metadata.mimeType;\nint? trackDuration = metadata.trackDuration;\nint? bitrate = metadata.bitrate;\nUint8List? albumArt = metadata.albumArt;\n")),(0,i.kt)("h3",{id:"web"},"Web"),(0,i.kt)("p",null,"For using the plugin on web, add following line to your ",(0,i.kt)("inlineCode",{parentName:"p"},"index.html"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-diff"},'   <link rel="manifest" href="manifest.json">\n </head>\n <body>\n+  <script type="text/javascript" src="https://unpkg.com/mediainfo.js/dist/mediainfo.min.js"><\/script>\n   \x3c!-- This script installs service_worker.js to provide PWA functionality to\n        application. For more information, see:\n        https://developers.google.com/web/fundamentals/primers/service-workers --\x3e\n   <script>\n     var serviceWorkerVersion = null;\n     var scriptLoaded = false;\n')),(0,i.kt)("p",null,"And use ",(0,i.kt)("inlineCode",{parentName:"p"},"MetadataRetriever.fromBytes")," instead of ",(0,i.kt)("inlineCode",{parentName:"p"},"MetadataRetriever.fromFile"),"."),(0,i.kt)("h2",{id:"platforms"},"Platforms"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Platform"),(0,i.kt)("th",{parentName:"tr",align:null},"Status"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Windows"),(0,i.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Linux"),(0,i.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Android"),(0,i.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Web"),(0,i.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"MacOS"),(0,i.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"iOS"),(0,i.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f")))),(0,i.kt)("img",{width:"360",src:"https://user-images.githubusercontent.com/28951144/151707427-76d75f04-9efe-4b1d-80fb-fdeea73dad26.png"}),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Example app running on Web.")),(0,i.kt)("img",{width:"360",src:"https://user-images.githubusercontent.com/28951144/151707526-319ca3f5-9849-4d57-8ea4-9595ee67e99c.png"}),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Example app running on Linux.")),(0,i.kt)("h2",{id:"license"},"License"),(0,i.kt)("p",null,"This library & work under this repository is MIT licensed."),(0,i.kt)("p",null,"Copyright (c) 2021-2022 Hitesh Kumar Saini ",(0,i.kt)("a",{parentName:"p",href:"mailto:saini123hitesh@gmail.com"},"saini123hitesh@gmail.com")))}f.isMDXComponent=!0}}]);