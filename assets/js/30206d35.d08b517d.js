"use strict";(self.webpackChunkalexmercerind_github_io=self.webpackChunkalexmercerind_github_io||[]).push([[1151],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>u});var i=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function n(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,i,r=function(e,t){if(null==e)return{};var a,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)a=o[i],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)a=o[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=i.createContext({}),d=function(e){var t=i.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):n(n({},t),e)),a},p=function(e){var t=d(e.components);return i.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=d(a),u=r,h=m["".concat(l,".").concat(u)]||m[u]||c[u]||o;return a?i.createElement(h,n(n({ref:t},p),{},{components:a})):i.createElement(h,n({ref:t},p))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,n=new Array(o);n[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,n[1]=s;for(var d=2;d<o;d++)n[d]=a[d];return i.createElement.apply(null,n)}return i.createElement.apply(null,a)}m.displayName="MDXCreateElement"},4187:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>n,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var i=a(7462),r=(a(7294),a(3905));const o={slug:"messed-up-storage-access-since-android-11",authors:"alexmercerind",title:"Messed up storage access since Android 11",tags:["flutter","android","scoped-storage","storage-access-framework","media-store","saf"]},n=void 0,s={permalink:"/blog/messed-up-storage-access-since-android-11",source:"@site/blog/2022-09-01-messed-up-storage-access-since-android-11.md",title:"Messed up storage access since Android 11",description:"Android recently introduced Scoped Storage with things like Storage Access Framework & MediaStore.",date:"2022-09-01T00:00:00.000Z",formattedDate:"September 1, 2022",tags:[{label:"flutter",permalink:"/blog/tags/flutter"},{label:"android",permalink:"/blog/tags/android"},{label:"scoped-storage",permalink:"/blog/tags/scoped-storage"},{label:"storage-access-framework",permalink:"/blog/tags/storage-access-framework"},{label:"media-store",permalink:"/blog/tags/media-store"},{label:"saf",permalink:"/blog/tags/saf"}],readingTime:10.13,truncated:!0,authors:[{name:"Hitesh",title:"Flutter & React.js developer. Writes C++, Dart, JS & Python. Maintains few utility libraries. Beautiful UI <3",url:"https://github.com/alexmercerind",imageURL:"https://github.com/alexmercerind.png",key:"alexmercerind"}],frontMatter:{slug:"messed-up-storage-access-since-android-11",authors:"alexmercerind",title:"Messed up storage access since Android 11",tags:["flutter","android","scoped-storage","storage-access-framework","media-store","saf"]},prevItem:{title:"My View: Rust, C++, Linux Kernel & 2022",permalink:"/blog/my-view-rust-cpp-linux-2022"},nextItem:{title:"Animations in Flutter done right [Flutter 2 & 3]",permalink:"/blog/animations-in-flutter-done-right"}},l={authorsImageUrls:[void 0]},d=[{value:"UPDATE:",id:"update",level:2},{value:"The Situation",id:"the-situation",level:2},{value:"History &amp; Present",id:"history--present",level:2},{value:"What&#39;s Not Good",id:"whats-not-good",level:2},{value:"Here&#39;s The Point",id:"heres-the-point",level:2},{value:"Side Effects",id:"side-effects",level:2},{value:"End Notes",id:"end-notes",level:2}],p={toc:d};function c(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,i.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Android recently introduced ",(0,r.kt)("a",{parentName:"p",href:"https://developer.android.com/about/versions/11/privacy/storage"},"Scoped Storage")," with things like ",(0,r.kt)("a",{parentName:"p",href:"https://developer.android.com/guide/topics/providers/document-provider"},"Storage Access Framework")," & ",(0,r.kt)("a",{parentName:"p",href:"https://developer.android.com/reference/android/provider/MediaStore"},"MediaStore"),"."),(0,r.kt)("p",null,"To put it simply, it's entirely messed up. There are number of use-cases which haven't been covered, I've seen users struggling after Android 10 & developers even more."),(0,r.kt)("h2",{id:"update"},"UPDATE:"),(0,r.kt)("p",null,"I actually migrated ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/harmonoid/harmonoid"},"my project"),' to scoped storage. Google has kept the access the file system in Android 11 (SDK 30 or higher), but your application will be only able to "see" the media files (FITS MY PURPOSE!). This is likely done so that developers can pass direct path etc. to things like FFmpeg.'),(0,r.kt)("p",null,"However, for consuming non-media files from your users' devices, you need to use ",(0,r.kt)("a",{parentName:"p",href:"https://developer.android.com/guide/topics/providers/document-provider"},"Storage Access Framework")," file picker & that's the only option here. If you want to use some non-media file in some native library which only accepts file paths, caching it to local app directory (after reading through content-resolver stream) & then using it's path is your only option. ",(0,r.kt)("em",{parentName:"p"},"Not something I needed.")),(0,r.kt)("p",null,"I delegated my methods or API usages to use ",(0,r.kt)("a",{parentName:"p",href:"https://developer.android.com/guide/topics/providers/document-provider"},"Storage Access Framework")," & ",(0,r.kt)("a",{parentName:"p",href:"https://developer.android.com/reference/android/provider/MediaStore"},"MediaStore")," wherever it was necessary. It took time to refactor my code, but not that much ",(0,r.kt)("em",{parentName:"p"},"as I anticipated initially"),". This process made me much familiar with the new Android storage requirements & practices, which will be useful for me in future."),(0,r.kt)("h2",{id:"the-situation"},"The Situation"),(0,r.kt)("p",null,"To begin with, first of all, I won't call myself an Android developer because I never target Android primarily from my codebase. I'm instead a ",(0,r.kt)("a",{parentName:"p",href:"http://flutter.dev/"},"Flutter")," developer, a specialized framework which allows to build cross-platform applications from a single codebase, while leveraging native functionalities like permissions, notifications & media playback etc. through a mechanism we refer as ",(0,r.kt)("a",{parentName:"p",href:"https://docs.flutter.dev/development/platform-integration/platform-channels"},"platform channels"),".\nFlutter is a framework in/for Dart programming language, which also allows native-interop with C/C++ through ",(0,r.kt)("a",{parentName:"p",href:"https://dart.dev/guides/libraries/c-interop"},"FFI"),", after-all not having C/C++ interop capability for any language/framework will be a really annoying thing."),(0,r.kt)("p",null,"Now to the actual mess, before Android 10 i.e. Android 9 or lower, any app that you install on your system could access your phone's storage, the directories & various files in it, without any consent (obviously not very privacy friendly)."),(0,r.kt)("h2",{id:"history--present"},"History & Present"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"During API 28 or lower (Android 9 or lower), a developer had access to file system."),(0,r.kt)("li",{parentName:"ul"},"After API 29 (Android 10), file system access is disabled by default everything is interpreted as ",(0,r.kt)("inlineCode",{parentName:"li"},"content://")," URI instead of ",(0,r.kt)("inlineCode",{parentName:"li"},"file://"),". During this time they provided a special flag to opt out of this scoped storage & use good-old file system methods. See: ",(0,r.kt)("a",{parentName:"li",href:"https://developer.android.com/training/data-storage/use-cases#opt-out-in-production-app"},(0,r.kt)("inlineCode",{parentName:"a"},"requestLegacyExternalStorage")),"."),(0,r.kt)("li",{parentName:"ul"},"After API 30 (Android 11+), you can no longer access ",(0,r.kt)("inlineCode",{parentName:"li"},"file://")," or file-system at all, unless you keep targetting API 29.")),(0,r.kt)("p",null,'This has been done for "user privacy", but please continue reading till ',(0,r.kt)("a",{parentName:"p",href:"#heres-the-point"},"Here's The Point"),"."),(0,r.kt)("p",null,"Google & Android team thought, it's not fun enough so they entirely removed the capability to access, list or read a file/directory using it's path. I know it's still possible to use file paths using some trickery, but for the most part it has been told by the official documentation to not use file paths at all, when referencing any media or file on the storage. So, what are they recommending? ",(0,r.kt)("a",{parentName:"p",href:"https://www.androidcentral.com/what-scoped-storage"},"Scoped Storage")," with things like ",(0,r.kt)("a",{parentName:"p",href:"https://developer.android.com/guide/topics/providers/document-provider"},"Storage Access Framework")," & ",(0,r.kt)("a",{parentName:"p",href:"https://developer.android.com/reference/android/provider/MediaStore"},"MediaStore"),". Let's cover these in detail."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"NOTE:")," Android still allows accessing all of the filesystem (on API 31 or higher), using ",(0,r.kt)("a",{parentName:"p",href:"https://support.google.com/googleplay/android-developer/answer/10467955?hl=en"},(0,r.kt)("inlineCode",{parentName:"a"},"MANAGE_EXTERNAL_STORAGE")),". But the chances are, your app will be definitely disqualified from entering Play Store. Only file managers, anti-viruses & backup utilities etc. will be allowed with this permission."),(0,r.kt)("p",null,"And you never know, what if they even remove ",(0,r.kt)("a",{parentName:"p",href:"https://support.google.com/googleplay/android-developer/answer/10467955?hl=en"},(0,r.kt)("inlineCode",{parentName:"a"},"MANAGE_EXTERNAL_STORAGE"))," in future updates."),(0,r.kt)("p",null,"In summary, here are few core points:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"You cannot access ",(0,r.kt)("inlineCode",{parentName:"li"},"Android/data")," & ",(0,r.kt)("inlineCode",{parentName:"li"},"Android/obb")," of other applications."),(0,r.kt)("li",{parentName:"ul"},"You can no longer access any file or directory on user's storage without permissions, especially if it's not made/created by your app. For sure, a good thing, ask for permission. But, it'll just get worse from this point on."),(0,r.kt)("li",{parentName:"ul"},"You can no longer ask user to pick a folder & read it's contents permanently for displaying inside app. See ",(0,r.kt)("a",{parentName:"li",href:"https://developer.android.com/training/data-storage/shared/documents-files#grant-access-directory"},"ACTION_OPEN_DOCUMENT_TREE"),".",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Even if user gives the permission, you CANNOT access:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Downloads")," folder. Are you crazy?"),(0,r.kt)("li",{parentName:"ul"},"Internal storage or SD card's root directory. How do I look for content matching my app's compatibility & requirement?"),(0,r.kt)("li",{parentName:"ul"},"Those ",(0,r.kt)("inlineCode",{parentName:"li"},"Android/data")," & ",(0,r.kt)("inlineCode",{parentName:"li"},"Android/obb")," folders."))),(0,r.kt)("li",{parentName:"ul"},"Once the user gives you permission, even with above restrictions, it's not permanent. How do I update the things inside the app next time user wants to just browse his music library inside my app."))),(0,r.kt)("li",{parentName:"ul"},"If you want to access any media from user's storage, you need to use ",(0,r.kt)("a",{parentName:"li",href:"https://developer.android.com/reference/android/provider/MediaStore"},"MediaStore"),". BUT:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},'Google has decided which mime & format is "audio", which mime & format is a picture, what if it\'s a image in ',(0,r.kt)("a",{parentName:"li",href:"https://github.com/phoboslab/qoi"},"Quite OK image format")," & I want to show users all photos inside user's phone including this format."),(0,r.kt)("li",{parentName:"ul"},'Last time I looked-up, even OGG (OPUS) was not being recognized as an "audio".'),(0,r.kt)("li",{parentName:"ul"},"It's like you're restricting the creativity. Thinking of your \"common use-cases\" as the only possibility in this universe."))),(0,r.kt)("li",{parentName:"ul"},"According to official team, even if you use file paths & copy etc. operations, they are still delegated to ",(0,r.kt)("a",{parentName:"li",href:"https://developer.android.com/reference/android/provider/MediaStore"},"MediaStore")," internally, to fuck performance & unnecessarily ruining the speeds.")),(0,r.kt)("h2",{id:"whats-not-good"},"What's Not Good"),(0,r.kt)("p",null,"I work on ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/harmonoid/harmonoid"},"Harmonoid"),", a music library manager & player for Windows, Linux & Android. You can expect a lot of internal logic is shared accross all platforms especially related to media indexing & file system handling.\nAfter Android's this migration to it's \"specialized\" APIs, it renders application obsolete for Android & I have to write same implementation in Kotlin separately along-side existing file-system based implementation to target Android. Not to forget, application still uses a small (~200 lines) of native Kotlin code to invoke ",(0,r.kt)("a",{parentName:"p",href:"https://developer.android.com/reference/android/media/MediaMetadataRetriever"},(0,r.kt)("inlineCode",{parentName:"a"},"MediaMetadataRetriever"))," to extract audio data & album arts."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"What if I wish to use ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/taglib/taglib"},"taglib"),", a well known tagging libraries in C++ used by VLC & more. Does Android, the open source operating system restricts it's usage because it doesn't interpret Android's stupidity about files/directories?"),(0,r.kt)("li",{parentName:"ul"},"Currently, one of the unique features of ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/harmonoid/harmonoid"},"Harmonoid")," is that I have added ability to select multiple folders & include inside music library. This is because no-one wants to see their audio recordings or WhatsApp audios inside a music app, I also hated it."),(0,r.kt)("li",{parentName:"ul"},"Most media players lookup for fallback album arts (when an audio file doesn't have an embedded one) inside the song's directory. See ",(0,r.kt)("a",{parentName:"li",href:"https://code.videolan.org/videolan/vlc/-/blob/master/modules/meta_engine/folder.c#L40-55"},"these lines of VLC's C source code"),". Now that file system is gone on Android, how do I handle this."),(0,r.kt)("li",{parentName:"ul"},"A core feature of ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/harmonoid/harmonoid"},"Harmonoid")," is to show available lyrics for the song, this happens by either one of the two:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Selecting ",(0,r.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/LRC_(file_format)"},(0,r.kt)("inlineCode",{parentName:"a"},".LRC")," file")," manually for a song present inside app. Yeah, it's annoying. ",(0,r.kt)("a",{parentName:"li",href:"https://developer.android.com/guide/topics/providers/document-provider"},"Storage Access Framework")," could likely still support it, since it requires explicit file picking from user & copying to local cache dir."),(0,r.kt)("li",{parentName:"ul"},"Looking for the ",(0,r.kt)("inlineCode",{parentName:"li"},".LRC")," inside audio file's folder (having same name) & loading automatically."))),(0,r.kt)("li",{parentName:"ul"},"There is no way to efficiently use ",(0,r.kt)("a",{parentName:"li",href:"https://developer.android.com/reference/android/provider/MediaStore"},"MediaStore")," inside Flutter, even if I wish to switch away from current massively stable & efficient implementation of ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/alexmercerind/media_library.git"},"package:media_library"),". Accessing files, reading metadata tags & displaying album arts in a way that it supports all platforms? Likely impossible according to Android team. See: ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/flutter/flutter/issues/57380"},"flutter/flutter#57380"),"."),(0,r.kt)("li",{parentName:"ul"},'To make matters worse, both Flutter & Android are from Google & share no "compatiblity". ')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"I'm sure there are many many other awesome & creative apps (which utilise a common thing as filesystem to build a unique experience), will all be kicked out of Play Store now. Thinking uniquely is slowly being disregarded on this planet now.")),(0,r.kt)("h2",{id:"heres-the-point"},"Here's The Point"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Google & it's Android is the REAL THREAT TO USER PRIVACY, not some passionate application developer building a good digital experience for users while not even possibly requesting internet permission. I never know when my microphone or camera is active or being recorded to feed your advertising system.")),(0,r.kt)("p",null,"One of the biggest reasons I liked Android over iOS was it's open-ness & ability to anything. Looks like there's going to be a big demand of ",(0,r.kt)("a",{parentName:"p",href:"https://itsfoss.com/linux-phones/"},"Linux smartphones")," in the market soon. I don't want yet another iOS."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Stop (Android OS & Google) deciding which file/format extension is for what usage."),(0,r.kt)("li",{parentName:"ul"},"Stop deciding what's a media format & what's not."),(0,r.kt)("li",{parentName:"ul"},"Stop abstracting file system, directories & files. Everyone has great idea of how files work, both users & developers.")),(0,r.kt)("p",null,"Okay, privacy is a good thing. BUT, why on earth is it implemented using ",(0,r.kt)("a",{parentName:"p",href:"https://developer.android.com/guide/topics/providers/document-provider"},"Storage Access Framework")," & ",(0,r.kt)("a",{parentName:"p",href:"https://developer.android.com/reference/android/provider/MediaStore"},"MediaStore"),". I don't want these garbage services to run in background & iterate over my file directories to update their entries of available media automatically. Why you couldn't:"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Just restrict access to file contents or file system unless user consented (probably based on mime or file-extension), while keeping filesystem API usage available. As simple as that.")),(0,r.kt)("p",null,"As a user, I think everyone quite literally understands & knows what a directory structure & file system looks like. I cannot comprehend what's the necessity to build these unnecessary abstractions over the normal file-system access like every operating system provides.\nNot providing developers access to thing as common as file-system, you're simply breaking the norm. This simply means that you can't use your existing logic, code & libraries which you use for other platforms. Since I'm a Flutter developer, I believe in unifying the APIs & being as less platform specific as possible."),(0,r.kt)("h2",{id:"side-effects"},"Side Effects"),(0,r.kt)("p",null,"Just wanted to include this section & it's bit of personal too (just like this blogging page)."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"If you recently observed, images & videos from WhatsApp are no longer visible in your Phone's gallery & there is no ",(0,r.kt)("inlineCode",{parentName:"li"},"WhatsApp")," folder in your storage either (where it used to).",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developer.android.com/about/versions/11/privacy/storage"},"Scoped Storage")," is the cause. I can no longer copy/move the documents my friends/college sent me."),(0,r.kt)("li",{parentName:"ul"},"To make matters worse, it's quite literally impossible to select multiple documents from WhatsApp & attach it to an e-mail."),(0,r.kt)("li",{parentName:"ul"},"You gotta go through those ",(0,r.kt)("a",{parentName:"li",href:"https://developer.android.com/guide/topics/providers/document-provider"},(0,r.kt)("inlineCode",{parentName:"a"},"ACTION_OPEN_DOCUMENT")),"s couple of times."))),(0,r.kt)("li",{parentName:"ul"},"One of my friend plays the game ",(0,r.kt)("a",{parentName:"li",href:"https://play.google.com/store/apps/details?id=com.mobile.legends&hl=en_IN&gl=US"},"Mobile Legends"),".",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"According to him, the game fetches a large numer of in-game assets (around 5-6 GB) for skins, textures etc."),(0,r.kt)("li",{parentName:"ul"},'Since downloading these files on every device is redundant & essentially wastage of internet connection, he & his friends used to share these "assets" & copy at required locations on multiple devices from one device (where it was downloaded).'),(0,r.kt)("li",{parentName:"ul"},"This is no longer possible, atleast the copy speeds are really slow as compared to pre API 29."),(0,r.kt)("li",{parentName:"ul"},"This essentially shows, how in-efficient & unfriendly this redundantly made implementation built into the operating system is.")))),(0,r.kt)("p",null,"What a degradation."),(0,r.kt)("h2",{id:"end-notes"},"End Notes"),(0,r.kt)("p",null,"As I said at the beginning of this, I'm actually a Flutter developer & mainly I have experience in Windows & Linux application development & their native APIs."),(0,r.kt)("p",null,"From my experience (so far) working with other Flutter developers & being part of community, I don't think average or even intermediate Flutter developer has any knowledge of device-specific APIs & garbage like ",(0,r.kt)("a",{parentName:"p",href:"https://developer.android.com/guide/topics/providers/document-provider"},"Storage Access Framework")," & ",(0,r.kt)("a",{parentName:"p",href:"https://developer.android.com/reference/android/provider/MediaStore"},"MediaStore")," at all (because these are part of Android SDK)."),(0,r.kt)("p",null,"This means re-writing all the functionality specifically for Android separately because APIs from ",(0,r.kt)("a",{parentName:"p",href:"https://api.flutter.dev/flutter/dart-io/dart-io-library.html"},(0,r.kt)("inlineCode",{parentName:"a"},"dart:io"))," or libraries written completely in Dart or leveraging FFI likely won't work at all for your purpose."),(0,r.kt)("p",null,"Working with Android SDK has always been painful, deprecated APIs left & right after every release. As someone who never was into Android development specifically, you have no clear idea where to begin & where to end. Jetpack Compose, XML, Kotlin, Java alongside these random things like content-provider, content-resolver, media-store, SAF being added for no reason, while core things like file system handling being removed from the operating system & API."),(0,r.kt)("p",null,'For now, I have zero motivation to migrate to this "new & better" API which will take away many cool features of my application. Let\'s see if I have to open Android Studio & contribute to global warming while running it.'),(0,r.kt)("p",null,"Thanks for reading! No features this year, just refactor."))}c.isMDXComponent=!0}}]);