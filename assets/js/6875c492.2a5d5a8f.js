"use strict";(self.webpackChunkalexmercerind_github_io=self.webpackChunkalexmercerind_github_io||[]).push([[8610],{8665:(e,t,a)=>{a.d(t,{Z:()=>h});var l=a(7294),n=a(6010),r=a(2773),s=a(9960);const m="sidebar_a9qW",i="sidebarItemTitle_uKok",o="sidebarItemList_Kvuv",c="sidebarItem_CF0Q",g="sidebarItemLink_miNk",d="sidebarItemLinkActive_RRTD";var p=a(5999);function u(e){let{sidebar:t}=e;return 0===t.items.length?null:l.createElement("nav",{className:(0,n.Z)(m,"thin-scrollbar"),"aria-label":(0,p.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},l.createElement("div",{className:(0,n.Z)(i,"margin-bottom--md")},t.title),l.createElement("ul",{className:o},t.items.map((e=>l.createElement("li",{key:e.permalink,className:c},l.createElement(s.Z,{isNavLink:!0,to:e.permalink,className:g,activeClassName:d},e.title))))))}function h(e){const{sidebar:t,toc:a,children:s,...m}=e,i=t&&t.items.length>0;return l.createElement(r.Z,m,l.createElement("div",{className:"container margin-vert--lg"},l.createElement("div",{className:"row"},i&&l.createElement("aside",{className:"col col--3"},l.createElement(u,{sidebar:t})),l.createElement("main",{className:(0,n.Z)("col",{"col--7":i,"col--9 col--offset-1":!i}),itemScope:!0,itemType:"http://schema.org/Blog"},s),a&&l.createElement("div",{className:"col col--2"},a))))}},6299:(e,t,a)=>{a.d(t,{Z:()=>s});var l=a(7294),n=a(5999),r=a(1750);function s(e){const{metadata:t}=e,{previousPage:a,nextPage:s}=t;return l.createElement("nav",{className:"pagination-nav","aria-label":(0,n.I)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"})},l.createElement("div",{className:"pagination-nav__item"},a&&l.createElement(r.Z,{permalink:a,title:l.createElement(n.Z,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)"},"Newer Entries")})),l.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},s&&l.createElement(r.Z,{permalink:s,title:l.createElement(n.Z,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)"},"Older Entries")})))}},9404:(e,t,a)=>{a.r(t),a.d(t,{default:()=>c});var l=a(7294),n=a(9960),r=a(8665),s=a(1916),m=a(5999),i=a(5860),o=a(6299);function c(e){const{metadata:t,items:a,sidebar:c,listMetadata:g}=e,{allTagsPath:d,name:p,count:u}=t,h=function(){const{selectMessage:e}=(0,i.c2)();return t=>e(t,(0,m.I)({id:"theme.blog.post.plurals",description:'Pluralized label for "{count} posts". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One post|{count} posts"},{count:t}))}(),E=(0,m.I)({id:"theme.blog.tagTitle",description:"The title of the page for a blog tag",message:'{nPosts} tagged with "{tagName}"'},{nPosts:h(u),tagName:p});return l.createElement(r.Z,{title:E,wrapperClassName:i.kM.wrapper.blogPages,pageClassName:i.kM.page.blogTagPostListPage,searchMetadata:{tag:"blog_tags_posts"},sidebar:c},l.createElement("header",{className:"margin-bottom--xl"},l.createElement("h1",null,E),l.createElement(n.Z,{href:d},l.createElement(m.Z,{id:"theme.tags.tagsPageLink",description:"The label of the link targeting the tag list page"},"View All Tags"))),a.map((e=>{let{content:t}=e;return l.createElement(s.Z,{key:t.metadata.permalink,frontMatter:t.frontMatter,assets:t.assets,metadata:t.metadata,truncated:!0},l.createElement(t,null))})),l.createElement(o.Z,{metadata:g}))}},1750:(e,t,a)=>{a.d(t,{Z:()=>r});var l=a(7294),n=a(9960);function r(e){const{permalink:t,title:a,subLabel:r}=e;return l.createElement(n.Z,{className:"pagination-nav__link",to:t},r&&l.createElement("div",{className:"pagination-nav__sublabel"},r),l.createElement("div",{className:"pagination-nav__label"},a))}},7774:(e,t,a)=>{a.d(t,{Z:()=>o});var l=a(7294),n=a(6010),r=a(9960);const s="tag_hD8n",m="tagRegular_D6E_",i="tagWithCount_i0QQ";function o(e){const{permalink:t,name:a,count:o}=e;return l.createElement(r.Z,{href:t,className:(0,n.Z)(s,{[m]:!o,[i]:o})},a,o&&l.createElement("span",null,o))}},62:(e,t,a)=>{a.d(t,{Z:()=>o});var l=a(7294),n=a(6010),r=a(5999),s=a(7774);const m="tags_XVD_",i="tag_JSN8";function o(e){let{tags:t}=e;return l.createElement(l.Fragment,null,l.createElement("b",null,l.createElement(r.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),l.createElement("ul",{className:(0,n.Z)(m,"padding--none","margin-left--sm")},t.map((e=>{let{label:t,permalink:a}=e;return l.createElement("li",{key:a,className:i},l.createElement(s.Z,{name:t,permalink:a}))}))))}},1916:(e,t,a)=>{a.d(t,{Z:()=>y});var l=a(7294),n=a(6010),r=a(3905),s=a(5999),m=a(9960),i=a(4996),o=a(5860),c=a(4689),g=a(1217);const d="image_o0gy";function p(e){return e.href?l.createElement(m.Z,e):l.createElement(l.Fragment,null,e.children)}function u(e){let{author:t}=e;const{name:a,title:n,url:r,imageURL:s,email:m}=t,i=r||m&&`mailto:${m}`||void 0;return l.createElement("div",{className:"avatar margin-bottom--sm"},s&&l.createElement("span",{className:"avatar__photo-link avatar__photo"},l.createElement(p,{href:i},l.createElement("img",{className:d,src:s,alt:a}))),a&&l.createElement("div",{className:"avatar__intro",itemProp:"author",itemScope:!0,itemType:"https://schema.org/Person"},l.createElement("div",{className:"avatar__name"},l.createElement(p,{href:i,itemProp:"url"},l.createElement("span",{itemProp:"name"},a))),n&&l.createElement("small",{className:"avatar__subtitle",itemProp:"description"},n)))}const h="authorCol_FlmR",E="imageOnlyAuthorRow_trpF",b="imageOnlyAuthorCol_S2np";function v(e){let{authors:t,assets:a}=e;if(0===t.length)return null;const r=t.every((e=>{let{name:t}=e;return!t}));return l.createElement("div",{className:(0,n.Z)("margin-top--md margin-bottom--sm",r?E:"row")},t.map(((e,t)=>l.createElement("div",{className:(0,n.Z)(!r&&"col col--6",r?b:h),key:t},l.createElement(u,{author:{...e,imageURL:a.authorsImageUrls[t]??e.imageURL}})))))}var _=a(62);const N="blogPostTitle_uMeh",Z="smallTitle_Fd6D",f="blogPostData_Vfxe",k="blogPostDetailsFull_enUA",P="blogCard_ubvv",T="cardImg_WRT0",w="cardContent_oWUM";const y=function(e){const t=function(){const{selectMessage:e}=(0,o.c2)();return t=>{const a=Math.ceil(t);return e(a,(0,s.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:a}))}}(),{children:a,frontMatter:d,metadata:p,truncated:u,assets:h,isBlogPostPage:E=!1}=e,{date:b,formattedDate:y,permalink:I,tags:L,readingTime:M,title:R,authors:C}=p,{keywords:A}=d,{withBaseUrl:x}=(0,i.C)();function F(){const e=E?"h1":"h2";return l.createElement("header",null,l.createElement(e,{className:(0,n.Z)(N,{[Z]:!E}),itemProp:"headline"},E?R:l.createElement(m.Z,{to:I},R)),l.createElement("div",{className:(0,n.Z)(f,"margin-vert--md")},l.createElement("time",{dateTime:b,itemProp:"datePublished"},y),M&&l.createElement(l.Fragment,null," \xb7 ",t(M))),E&&l.createElement(v,{authors:C,assets:h}))}return E?l.createElement(l.Fragment,null,l.createElement(g.Z,{keywords:A,image:h.image}),l.createElement("article",{itemProp:"blogPost",itemScope:!0,itemType:"http://schema.org/BlogPosting"},F(),h.image&&l.createElement("meta",{itemProp:"image",content:x(h.image,{absolute:!0})}),l.createElement("div",{className:"markdown"},l.createElement(r.Zo,{components:c.Z},a)),(L.length>0||u)&&l.createElement("footer",{className:(0,n.Z)("row docusaurus-mt-lg",k)},L.length>0&&l.createElement("div",{className:"col"},l.createElement(_.Z,{tags:L}))))):l.createElement("div",{className:(0,n.Z)("col col--4",P),itemProp:"blogPost",itemScope:!0,itemType:"http://schema.org/BlogPosting"},l.createElement(g.Z,{keywords:A,image:h.image}),h.image&&l.createElement("img",{itemProp:"image",className:T,src:h.image}),l.createElement("div",{className:w},F(),l.createElement("div",{className:"markdown"},l.createElement(r.Zo,{components:c.Z},a),u&&l.createElement(m.Z,{to:p.permalink,"aria-label":`Read more about ${R}`},l.createElement("b",null,l.createElement(s.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More")))),L.length>0&&l.createElement("div",{className:"col col--9 margin-top--md"},l.createElement(_.Z,{tags:L}))))}}}]);