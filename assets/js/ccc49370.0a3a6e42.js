"use strict";(self.webpackChunkalexmercerind_github_io=self.webpackChunkalexmercerind_github_io||[]).push([[6103],{8665:(e,t,a)=>{a.d(t,{Z:()=>b});var l=a(7294),n=a(6010),r=a(7014),s=a(9960);const i="sidebar_a9qW",o="sidebarItemTitle_uKok",m="sidebarItemList_Kvuv",c="sidebarItem_CF0Q",d="sidebarItemLink_miNk",g="sidebarItemLinkActive_RRTD";var p=a(5999);function u(e){let{sidebar:t}=e;return 0===t.items.length?null:l.createElement("nav",{className:(0,n.Z)(i,"thin-scrollbar"),"aria-label":(0,p.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},l.createElement("div",{className:(0,n.Z)(o,"margin-bottom--md")},t.title),l.createElement("ul",{className:m},t.items.map((e=>l.createElement("li",{key:e.permalink,className:c},l.createElement(s.Z,{isNavLink:!0,to:e.permalink,className:d,activeClassName:g},e.title))))))}function b(e){const{sidebar:t,toc:a,children:s,...i}=e,o=t&&t.items.length>0;return l.createElement(r.Z,i,l.createElement("div",{className:"container margin-vert--lg"},l.createElement("div",{className:"row"},o&&l.createElement("aside",{className:"col col--3"},l.createElement(u,{sidebar:t})),l.createElement("main",{className:(0,n.Z)("col",{"col--7":o,"col--9 col--offset-1":!o}),itemScope:!0,itemType:"http://schema.org/Blog"},s),a&&l.createElement("div",{className:"col col--2"},a))))}},1991:(e,t,a)=>{a.r(t),a.d(t,{default:()=>v});var l=a(7294),n=a(1217),r=a(8665),s=a(2544),i=a(7462),o=a(5999),m=a(1750);function c(e){const{nextItem:t,prevItem:a}=e;return l.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,o.I)({id:"theme.blog.post.paginator.navAriaLabel",message:"Blog post page navigation",description:"The ARIA label for the blog posts pagination"})},l.createElement("div",{className:"pagination-nav__item"},a&&l.createElement(m.Z,(0,i.Z)({},a,{subLabel:l.createElement(o.Z,{id:"theme.blog.post.paginator.newerPost",description:"The blog post button label to navigate to the newer/previous post"},"Newer Post")}))),l.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},t&&l.createElement(m.Z,(0,i.Z)({},t,{subLabel:l.createElement(o.Z,{id:"theme.blog.post.paginator.olderPost",description:"The blog post button label to navigate to the older/next post"},"Older Post")}))))}var d=a(5860),g=a(6010);function p(e){let{toc:t,className:a,linkClassName:n,isChild:r}=e;return t.length?l.createElement("ul",{className:r?void 0:a},t.map((e=>l.createElement("li",{key:e.id},l.createElement("a",{href:`#${e.id}`,className:n??void 0,dangerouslySetInnerHTML:{__html:e.value}}),l.createElement(p,{isChild:!0,toc:e.children,className:a,linkClassName:n}))))):null}function u(e){let{toc:t,className:a="table-of-contents table-of-contents__left-border",linkClassName:n="table-of-contents__link",linkActiveClassName:r,minHeadingLevel:s,maxHeadingLevel:o,...m}=e;const c=(0,d.LU)(),g=s??c.tableOfContents.minHeadingLevel,u=o??c.tableOfContents.maxHeadingLevel,b=(0,d.b9)({toc:t,minHeadingLevel:g,maxHeadingLevel:u}),h=(0,l.useMemo)((()=>{if(n&&r)return{linkClassName:n,linkActiveClassName:r,minHeadingLevel:g,maxHeadingLevel:u}}),[n,r,g,u]);return(0,d.Si)(h),l.createElement(p,(0,i.Z)({toc:b,className:a,linkClassName:n},m))}const b="tableOfContents_cNA8";function h(e){let{className:t,...a}=e;return l.createElement("div",{className:(0,g.Z)(b,"thin-scrollbar",t)},l.createElement(u,(0,i.Z)({},a,{linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})))}function v(e){const{content:t,sidebar:a}=e,{assets:i,metadata:o}=t,{title:m,description:g,nextItem:p,prevItem:u,date:b,tags:v,authors:E,frontMatter:N}=o,{hide_table_of_contents:_,keywords:f,toc_min_heading_level:k,toc_max_heading_level:Z}=N,P=i.image??N.image;return l.createElement(r.Z,{wrapperClassName:d.kM.wrapper.blogPages,pageClassName:d.kM.page.blogPostPage,sidebar:a,toc:!_&&t.toc&&t.toc.length>0?l.createElement(h,{toc:t.toc,minHeadingLevel:k,maxHeadingLevel:Z}):void 0},l.createElement(n.Z,{title:m,description:g,keywords:f,image:P},l.createElement("meta",{property:"og:type",content:"article"}),l.createElement("meta",{property:"article:published_time",content:b}),E.some((e=>e.url))&&l.createElement("meta",{property:"article:author",content:E.map((e=>e.url)).filter(Boolean).join(",")}),v.length>0&&l.createElement("meta",{property:"article:tag",content:v.map((e=>e.label)).join(",")})),l.createElement(s.Z,{frontMatter:N,assets:i,metadata:o,isBlogPostPage:!0},l.createElement(t,null)),(p||u)&&l.createElement(c,{nextItem:p,prevItem:u}))}},2544:(e,t,a)=>{a.d(t,{Z:()=>f});var l=a(7294),n=a(6010),r=a(3905),s=a(5999),i=a(9960),o=a(4996),m=a(5860),c=a(66),d=a(1217),g=a(6637),p=a(62);const u="blogPostTitle_uMeh",b="smallTitle_Fd6D",h="blogPostData_Vfxe",v="blogPostDetailsFull_enUA",E="blogCard_ubvv",N="cardImg_WRT0",_="cardContent_oWUM";const f=function(e){const t=function(){const{selectMessage:e}=(0,m.c2)();return t=>{const a=Math.ceil(t);return e(a,(0,s.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:a}))}}(),{children:a,frontMatter:f,metadata:k,truncated:Z,assets:P,isBlogPostPage:C=!1}=e,{date:w,formattedDate:L,permalink:T,tags:y,readingTime:I,title:x,authors:M}=k,{keywords:A}=f,{withBaseUrl:H}=(0,o.C)();function B(){const e=C?"h1":"h2";return l.createElement("header",null,l.createElement(e,{className:(0,n.Z)(u,{[b]:!C}),itemProp:"headline"},C?x:l.createElement(i.Z,{to:T},x)),l.createElement("div",{className:(0,n.Z)(h,"margin-vert--md")},l.createElement("time",{dateTime:w,itemProp:"datePublished"},L),I&&l.createElement(l.Fragment,null," \xb7 ",t(I))),C&&l.createElement(g.Z,{authors:M,assets:P}))}return C?l.createElement(l.Fragment,null,l.createElement(d.Z,{keywords:A,image:P.image}),l.createElement("article",{itemProp:"blogPost",itemScope:!0,itemType:"http://schema.org/BlogPosting"},B(),P.image&&l.createElement("meta",{itemProp:"image",content:H(P.image,{absolute:!0})}),l.createElement("div",{className:"markdown"},l.createElement(r.Zo,{components:c.Z},a)),(y.length>0||Z)&&l.createElement("footer",{className:(0,n.Z)("row docusaurus-mt-lg",v)},y.length>0&&l.createElement("div",{className:"col"},l.createElement(p.Z,{tags:y}))))):l.createElement("div",{className:(0,n.Z)("col col--4",E),itemProp:"blogPost",itemScope:!0,itemType:"http://schema.org/BlogPosting"},l.createElement(d.Z,{keywords:A,image:P.image}),P.image&&l.createElement("img",{itemProp:"image",className:N,src:P.image}),l.createElement("div",{className:_},B(),l.createElement("div",{className:"markdown"},l.createElement(r.Zo,{components:c.Z},a),Z&&l.createElement(i.Z,{to:k.permalink,"aria-label":`Read more about ${x}`},l.createElement("b",null,l.createElement(s.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More")))),y.length>0&&l.createElement("div",{className:"col col--9 margin-top--md"},l.createElement(p.Z,{tags:y}))))}}}]);