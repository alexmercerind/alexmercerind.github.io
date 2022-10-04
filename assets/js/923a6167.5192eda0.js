"use strict";(self.webpackChunkalexmercerind_github_io=self.webpackChunkalexmercerind_github_io||[]).push([[563],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),d=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=d(e.components);return i.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},c=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=d(n),m=a,h=c["".concat(s,".").concat(m)]||c[m]||u[m]||r;return n?i.createElement(h,l(l({ref:t},p),{},{components:n})):i.createElement(h,l({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,l=new Array(r);l[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var d=2;d<r;d++)l[d]=n[d];return i.createElement.apply(null,l)}return i.createElement.apply(null,n)}c.displayName="MDXCreateElement"},7905:(e,t,n)=>{n.d(t,{Z:()=>p});var i=n(7294),a=n(5529),r=n(5742);const l="iconBar_ZOQh",o="icon_pT5I",s="iconLabel_q6Wh",d="iconContainer__tjb";function p(e){let{repository:t,type:n}=e;const[p,u]=(0,i.useState)(null);return(0,i.useEffect)((async()=>{let e=await fetch(`https://api.github.com/repos/${t}`),n=await e.json();u(n)}),[]),i.createElement("div",null,i.createElement(r.Z,null,i.createElement("link",{href:"https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@700&display=swap",rel:"stylesheet"})),i.createElement("a",{target:"_blank",href:`https://github.com/${t}`},"GitHub")," \u2022 ","pub.dev"==n?i.createElement("a",{target:"_blank",href:`https://pub.dev/packages/${t.split("/")[t.split("/").length-1]}`},"pub.dev"):i.createElement("a",{target:"_blank",href:`https://pypi.org/project/${t.split("/")[t.split("/").length-1]}`},"PyPI.org")," \u2022 Give us a \u2b50 on GitHub.",i.createElement("div",{className:l},i.createElement("div",{className:d},i.createElement("div",{className:o},i.createElement(a.r7p,{size:"small"})),i.createElement("div",{className:s},((null==p?void 0:p.stargazers_count)??"Unknown")+" Stars")),i.createElement("div",{className:d},i.createElement("div",{className:o},i.createElement(a.jcu,{size:"small"})),i.createElement("div",{className:s},((null==p?void 0:p.forks_count)??"Unknown")+" Forks")),i.createElement("div",{className:d},i.createElement("div",{className:o},i.createElement(a.tEF,{size:"small"})),i.createElement("div",{className:s},((null==p?void 0:p.subscribers_count)??"Unknown")+" Watchers"))))}},4951:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>c,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var i=n(7462),a=(n(7294),n(3905)),r=n(7905);const l={id:"flutter_native_view",title:"flutter_native_view",description:"Embedding native windows into Flutter window.",hide_title:!0},o="flutter_native_view",s={unversionedId:"flutter_native_view",id:"flutter_native_view",title:"flutter_native_view",description:"Embedding native windows into Flutter window.",source:"@site/docs/flutter_native_view.md",sourceDirName:".",slug:"/flutter_native_view",permalink:"/docs/flutter_native_view",tags:[],version:"current",frontMatter:{id:"flutter_native_view",title:"flutter_native_view",description:"Embedding native windows into Flutter window.",hide_title:!0},sidebar:"defaultSidebar",previous:{title:"flutter_media_metadata",permalink:"/docs/flutter_media_metadata"},next:{title:"windows_taskbar",permalink:"/docs/windows_taskbar"}},d={},p=[{value:"Description",id:"description",level:2},{value:"Example",id:"example",level:2},{value:"Sponsor",id:"sponsor",level:2},{value:"\ud83d\udc96 Current Sponsors",id:"-current-sponsors",level:3},{value:"Used By",id:"used-by",level:2},{value:"Description",id:"description-1",level:2},{value:"Future",id:"future",level:2},{value:"Setup",id:"setup",level:2},{value:"Docs",id:"docs",level:2},{value:"Initialize the plugin",id:"initialize-the-plugin",level:4},{value:"Create a controller &amp; render a window",id:"create-a-controller--render-a-window",level:4},{value:"Dispose the native view &amp; destory the window",id:"dispose-the-native-view--destory-the-window",level:4},{value:"Features",id:"features",level:2},{value:"Currently Implemented",id:"currently-implemented",level:4},{value:"Under Progress",id:"under-progress",level:4},{value:"Known Issues",id:"known-issues",level:2},{value:"Motivation",id:"motivation",level:2},{value:"Platforms",id:"platforms",level:2},{value:"License",id:"license",level:2}],u={toc:p};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"flutter_native_view"},"flutter_native_view"),(0,a.kt)("p",null,"Embedding native windows into Flutter window."),(0,a.kt)(r.Z,{repository:"alexmercerind/flutter_native_view",type:"pub.dev",mdxType:"DocsHeader"}),(0,a.kt)("h2",{id:"description"},"Description"),(0,a.kt)("p",null,"A Flutter plugin / C++ library to embed other native Windows (",(0,a.kt)("inlineCode",{parentName:"p"},"HWND")," on Windows) into Flutter window."),(0,a.kt)("p",null,"Current API design allows to embed any arbitrary ",(0,a.kt)("inlineCode",{parentName:"p"},"HWND")," completely from Dart as a ",(0,a.kt)("inlineCode",{parentName:"p"},"Widget"),". This can be a good choice when client code wants to embed any arbitrary third-party window (which is already opened) into the Flutter window.\nHowever, this is not ideal in most cases because there is almost no point of embedding a third-party window directly (which will lack programmatic control via some API)."),(0,a.kt)("p",null,"On the other hand, a window created by the client code itself e.g. a webview instance window or a video-output window etc. (on which the client code has full programmatic control) will be an ideal window to embed, in that case:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"If client code decides to create an ",(0,a.kt)("inlineCode",{parentName:"li"},"HWND")," through platform channel interface, they can use the setup present in ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/alexmercerind/flutter_native_view/tree/master/core"},(0,a.kt)("inlineCode",{parentName:"a"},"core"))," to embed a window."),(0,a.kt)("li",{parentName:"ul"},"Since ",(0,a.kt)("inlineCode",{parentName:"li"},"dart:ffi")," is very capable now, one can pass the ",(0,a.kt)("inlineCode",{parentName:"li"},"HWND")," directly as ",(0,a.kt)("inlineCode",{parentName:"li"},"int")," of the window they created using ",(0,a.kt)("inlineCode",{parentName:"li"},"dart:ffi")," or ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/timsneath/win32"},(0,a.kt)("inlineCode",{parentName:"a"},"win32"))," through existing plugin API to embed it.")),(0,a.kt)("video",{style:{width:"100%"},controls:!0,src:"https://user-images.githubusercontent.com/28951144/159073594-813700fb-0988-424f-86b5-381beccf4247.mp4\n"}),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("p",null,"Video showing a Flutter Windows app running with embedded webview & VLC using ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/alexmercerind/flutter_native_view"},"flutter_native_view"),"."),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"[slight lag & delay can be observed due to screen recording. the actual experience is very seamless]")),(0,a.kt)("p",null,"Try running the example application by cloning the repository."),(0,a.kt)("h2",{id:"sponsor"},"Sponsor"),(0,a.kt)("p",null,"You may sponsor this project's future development & research at:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.paypal.me/alexmercerind"},"PayPal")," (one-time)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.patreon.com/harmonoid"},"Patreon")," (monthly-recurring)")),(0,a.kt)("p",null,"It'll be a great motivation for me to continue."),(0,a.kt)("h3",{id:"-current-sponsors"},"\ud83d\udc96 Current Sponsors"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/damywise"},"Ahmad Arif Aulia Sutarman")," \u2022 20$ \u2022 one-time")),(0,a.kt)("h2",{id:"used-by"},"Used By"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/alexmercerind/dart_vlc#nativevideo"},"dart_vlc"))),(0,a.kt)("h2",{id:"description-1"},"Description"),(0,a.kt)("p",null,"This setup only uses Win32 APIs & no texture, intermediate buffers or copying of pixel buffers. Thus, it is ",(0,a.kt)("strong",{parentName:"p"},"very performant"),"."),(0,a.kt)("p",null,"A Flutter plugin / Win32 setup to embed other native Windows (",(0,a.kt)("inlineCode",{parentName:"p"},"HWND")," on Windows) into Flutter window."),(0,a.kt)("p",null,"Current API design allows to embed any arbitrary ",(0,a.kt)("inlineCode",{parentName:"p"},"HWND")," completely from Dart as a ",(0,a.kt)("inlineCode",{parentName:"p"},"Widget"),". This can be a good choice when client code wants to embed any third-party window (which is already opened) into the Flutter window.\nHowever, this is not ideal in most cases, because there is almost no point of embedding a window without having a programmatic control to it (via some API)."),(0,a.kt)("p",null,"On the other hand, a window created by the client code itself e.g. a webview instance window or a video-output window etc. (on which the client code has full programmatic control) will be an ideal window to embed, in that case:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"If client code decides to create an ",(0,a.kt)("inlineCode",{parentName:"li"},"HWND")," through platform channel interface, they can use the setup present in ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/alexmercerind/flutter_native_view/tree/master/core"},(0,a.kt)("inlineCode",{parentName:"a"},"core"))," to embed a window (or send back the ",(0,a.kt)("inlineCode",{parentName:"li"},"HWND")," as ",(0,a.kt)("inlineCode",{parentName:"li"},"int64_t")," to the plugin throught Dart)."),(0,a.kt)("li",{parentName:"ul"},"Since ",(0,a.kt)("inlineCode",{parentName:"li"},"dart:ffi")," is very capable now, one can pass the ",(0,a.kt)("inlineCode",{parentName:"li"},"HWND")," directly as ",(0,a.kt)("inlineCode",{parentName:"li"},"int")," of the window they created using ",(0,a.kt)("inlineCode",{parentName:"li"},"dart:ffi")," or ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/timsneath/win32"},(0,a.kt)("inlineCode",{parentName:"a"},"package:win32"))," through existing plugin API to embed it.")),(0,a.kt)("h2",{id:"future"},"Future"),(0,a.kt)("p",null,"In future, I will create natively rendered, performant & less-bundle-sized webview & video playback plugins, if I get enough community support. Currently I'm only targetting Windows to limit the scope of work, though I plan for Linux support at some point."),(0,a.kt)("h2",{id:"setup"},"Setup"),(0,a.kt)("p",null,"Add following lines to your ",(0,a.kt)("inlineCode",{parentName:"p"},"windows/runner/main.cpp")," file:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-diff"},'  #include <flutter/dart_project.h>\n  #include <flutter/flutter_view_controller.h>\n  #include <windows.h>\n\n+ #include "flutter_native_view/flutter_native_view_plugin.h"\n  #include "flutter_window.h"\n  #include "utils.h"\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-diff"},"  window.SetQuitOnClose(true);\n\n+ flutternativeview::CreateNativeViewContainer();\n\n  ::MSG msg;\n  while (::GetMessage(&msg, nullptr, 0, 0)) {\n    ::TranslateMessage(&msg);\n    ::DispatchMessage(&msg);\n  }\n")),(0,a.kt)("h2",{id:"docs"},"Docs"),(0,a.kt)("h4",{id:"initialize-the-plugin"},"Initialize the plugin"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-dart"},"Future<void> main() async {\n  WidgetsFlutterBinding.ensureInitialized();\n  /// Initialize.\n  await FlutterNativeView.ensureInitialized();\n  runApp(const MyApp());\n}\n")),(0,a.kt)("h4",{id:"create-a-controller--render-a-window"},"Create a controller & render a window"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-dart"},"class _MyAppState extends State<MyApp> {\n  /// Create a [NativeViewController].\n  final controller = NativeViewController(\n    /// Using [FindWindow] from `package:win32` to retrieve `HWND` as [int].\n    handle: FindWindow(nullptr, 'VLC Media Player'.toNativeUtf16()),\n    /// Make the [NativeView] interactable.\n    hitTestBehavior: HitTestBehavior.translucent,\n  );\n\n  @override\n  Widget build(BuildContext context) {\n    return MaterialApp(\n      home: Scaffold(\n        body: Center(\n            child: Padding(\n              padding: const EdgeInsets.all(24.0),\n              child: Stack(\n                children: [\n                  LayoutBuilder(\n                    /// Create a [NativeView].\n                    builder: (context, constraints) => NativeView(\n                      /// Pass [NativeViewController] to render the window.\n                      controller: controller,\n                      width: constraints.maxWidth,\n                      height: constraints.maxHeight,\n                    ),\n                  ),\n                  Padding(\n                    padding: const EdgeInsets.all(16.0),\n                    child: FloatingActionButton(\n                      onPressed: () {},\n                      child: const Icon(Icons.edit),\n                    ),\n                  ),\n                ],\n              ),\n            ),\n          ),\n        ),\n      ),\n    );\n  }\n}\n")),(0,a.kt)("h4",{id:"dispose-the-native-view--destory-the-window"},"Dispose the native view & destory the window"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-dart"},"controller.dispose();\n")),(0,a.kt)("h2",{id:"features"},"Features"),(0,a.kt)("h4",{id:"currently-implemented"},"Currently Implemented"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Placement of other Flutter ",(0,a.kt)("inlineCode",{parentName:"li"},"Widget"),"s on top of the ",(0,a.kt)("inlineCode",{parentName:"li"},"NativeView"),"."),(0,a.kt)("li",{parentName:"ul"},"Multiple instances of ",(0,a.kt)("inlineCode",{parentName:"li"},"NativeView"),"."),(0,a.kt)("li",{parentName:"ul"},"Window movement handling & ",(0,a.kt)("inlineCode",{parentName:"li"},"NativeView"),"s positioning."),(0,a.kt)("li",{parentName:"ul"},"Window resize handling & ",(0,a.kt)("inlineCode",{parentName:"li"},"NativeView"),"s sizing."),(0,a.kt)("li",{parentName:"ul"},"Windows 10 & higher support."),(0,a.kt)("li",{parentName:"ul"},"Proper disposing of ",(0,a.kt)("inlineCode",{parentName:"li"},"HWND")," and instances."),(0,a.kt)("li",{parentName:"ul"},"Semi transparent ",(0,a.kt)("inlineCode",{parentName:"li"},"Widget"),"s on top of ",(0,a.kt)("inlineCode",{parentName:"li"},"NativeView"),"."),(0,a.kt)("li",{parentName:"ul"},"Customizable hit-test i.e. optional interactability with the ",(0,a.kt)("inlineCode",{parentName:"li"},"NativeView"),"s."),(0,a.kt)("li",{parentName:"ul"},"Placement of ",(0,a.kt)("inlineCode",{parentName:"li"},"NativeView"),"s inside scrollables like ",(0,a.kt)("inlineCode",{parentName:"li"},"ListView"),"s.")),(0,a.kt)("h4",{id:"under-progress"},"Under Progress"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Finalized API."),(0,a.kt)("li",{parentName:"ul"},"General stability."),(0,a.kt)("li",{parentName:"ul"},"Better maximize/minimize animations."),(0,a.kt)("li",{parentName:"ul"},"Support for older Windows versions."),(0,a.kt)("li",{parentName:"ul"},"Defining z-order for each ",(0,a.kt)("inlineCode",{parentName:"li"},"NativeViewController"),".")),(0,a.kt)("h2",{id:"known-issues"},"Known Issues"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Windows snapping layouts & window snapping (only when a ",(0,a.kt)("inlineCode",{parentName:"li"},"NativeView")," is visible on screen)."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"HitTestBehavior.translucent")," leaks through the title-bar.")),(0,a.kt)("h2",{id:"motivation"},"Motivation"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/flutter/flutter/issues/31713"},"https://github.com/flutter/flutter/issues/31713")),(0,a.kt)("p",null,"Absence of official Platform View APIs in Flutter for Windows, Linux & macOS."),(0,a.kt)("h2",{id:"platforms"},"Platforms"),(0,a.kt)("p",null,"The plugin currently works on following platforms:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Platform"),(0,a.kt)("th",{parentName:"tr",align:null},"State"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Windows"),(0,a.kt)("td",{parentName:"tr",align:null},"Working")))),(0,a.kt)("p",null,"I plan to add Linux support soon. For now, limiting the scope of work to just Windows."),(0,a.kt)("h2",{id:"license"},"License"),(0,a.kt)("p",null,"Currently licensing strictly."),(0,a.kt)("p",null,"GNU General Public License v3.0"),(0,a.kt)("p",null,"Copyright (C) 2021, Hitesh Kumar Saini ",(0,a.kt)("a",{parentName:"p",href:"mailto:%3Csaini123hitesh@gmail.com"},"<saini123hitesh@gmail.com"),">"))}c.isMDXComponent=!0}}]);