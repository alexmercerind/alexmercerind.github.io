"use strict";(self.webpackChunkalexmercerind_github_io=self.webpackChunkalexmercerind_github_io||[]).push([[3089],{6299:function(e,t,a){a.d(t,{Z:function(){return i}});var n=a(7294),r=a(5999),l=a(1750);function i(e){var t=e.metadata,a=t.previousPage,i=t.nextPage;return n.createElement("nav",{className:"pagination-nav","aria-label":(0,r.I)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"})},n.createElement("div",{className:"pagination-nav__item"},a&&n.createElement(l.Z,{permalink:a,title:n.createElement(r.Z,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)"},"Newer Entries")})),n.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},i&&n.createElement(l.Z,{permalink:i,title:n.createElement(r.Z,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)"},"Older Entries")})))}},1750:function(e,t,a){a.d(t,{Z:function(){return l}});var n=a(7294),r=a(9960);function l(e){var t=e.permalink,a=e.title,l=e.subLabel;return n.createElement(r.Z,{className:"pagination-nav__link",to:t},l&&n.createElement("div",{className:"pagination-nav__sublabel"},l),n.createElement("div",{className:"pagination-nav__label"},a))}},7774:function(e,t,a){a.d(t,{Z:function(){return s}});var n=a(7294),r=a(6010),l=a(9960),i="tag_hD8n",m="tagRegular_D6E_",o="tagWithCount_i0QQ";function s(e){var t,a=e.permalink,s=e.name,c=e.count;return n.createElement(l.Z,{href:a,className:(0,r.Z)(i,(t={},t[m]=!c,t[o]=c,t))},s,c&&n.createElement("span",null,c))}},62:function(e,t,a){a.d(t,{Z:function(){return s}});var n=a(7294),r=a(6010),l=a(5999),i=a(7774),m="tags_XVD_",o="tag_JSN8";function s(e){var t=e.tags;return n.createElement(n.Fragment,null,n.createElement("b",null,n.createElement(l.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),n.createElement("ul",{className:(0,r.Z)(m,"padding--none","margin-left--sm")},t.map((function(e){var t=e.label,a=e.permalink;return n.createElement("li",{key:a,className:o},n.createElement(i.Z,{name:t,permalink:a}))}))))}},5921:function(e,t,a){a.r(t),a.d(t,{default:function(){return E}});var n=a(7294),r=a(2263),l=a(2773),i=a(1916),m=a(6299),o=a(9366),s="CardContainer_YdV0",c="wrapper_Q24L",g="titleText_mkGB",u="backgroundContainer_wLER",d="background_i2qK",p=a(6010);var E=function(e){var t=e.metadata,a=e.items,E=(0,r.Z)().siteConfig.title,h=t.blogDescription,v=t.blogTitle,b="/"===t.permalink?E:v;return n.createElement(l.Z,{title:b,description:h,wrapperClassName:o.kM.wrapper.blogPages,pageClassName:o.kM.page.blogListPage,searchMetadatas:{tag:"blog_posts_list"}},n.createElement("header",null,n.createElement("h1",{className:(0,p.Z)("text--center margin-top--lg margin-bottom--xs",g)},"Hitesh's Blog & Thoughts About Programming 'n Stuff"),n.createElement("p",{style:{textAlign:"center",marginLeft:"18px",marginRight:"18px"}},"Usually writes here about programming, cool things that he finds related to his tech-stack or rants about life.")),n.createElement("main",{className:c},n.createElement("div",{className:u},n.createElement("div",{className:(0,p.Z)("material-icons",d)},"edit_note")),n.createElement("div",{className:s},a.map((function(e){var t=e.content;return n.createElement(i.Z,{key:t.metadata.permalink,frontMatter:t.frontMatter,assets:t.assets,metadata:t.metadata,truncated:t.metadata.truncated},n.createElement(t,null))}))),n.createElement(m.Z,{metadata:t})))}},1916:function(e,t,a){a.d(t,{Z:function(){return y}});var n=a(7294),r=a(6010),l=a(3905),i=a(5999),m=a(9960),o=a(4996),s=a(9366),c=a(4689),g=a(1217),u="image_o0gy";function d(e){return e.href?n.createElement(m.Z,e):n.createElement(n.Fragment,null,e.children)}function p(e){var t=e.author,a=t.name,r=t.title,l=t.url,i=t.imageURL,m=t.email,o=l||m&&"mailto:"+m||void 0;return n.createElement("div",{className:"avatar margin-bottom--sm"},i&&n.createElement("span",{className:"avatar__photo-link avatar__photo"},n.createElement(d,{href:o},n.createElement("img",{className:u,src:i,alt:a}))),a&&n.createElement("div",{className:"avatar__intro",itemProp:"author",itemScope:!0,itemType:"https://schema.org/Person"},n.createElement("div",{className:"avatar__name"},n.createElement(d,{href:o,itemProp:"url"},n.createElement("span",{itemProp:"name"},a))),r&&n.createElement("small",{className:"avatar__subtitle",itemProp:"description"},r)))}var E="authorCol_FlmR",h="imageOnlyAuthorRow_trpF",v="imageOnlyAuthorCol_S2np";function b(e){var t=e.authors,a=e.assets;if(0===t.length)return null;var l=t.every((function(e){return!e.name}));return n.createElement("div",{className:(0,r.Z)("margin-top--md margin-bottom--sm",l?h:"row")},t.map((function(e,t){var i;return n.createElement("div",{className:(0,r.Z)(!l&&"col col--6",l?v:E),key:t},n.createElement(p,{author:Object.assign({},e,{imageURL:null!=(i=a.authorsImageUrls[t])?i:e.imageURL})}))})))}var _=a(62),f="blogPostTitle_uMeh",Z="smallTitle_Fd6D",N="blogPostData_Vfxe",k="blogPostDetailsFull_enUA",P="blogCard_ubvv",w="cardImg_WRT0",T="cardContent_oWUM";var y=function(e){var t,a=(t=(0,s.c2)().selectMessage,function(e){var a=Math.ceil(e);return t(a,(0,i.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:a}))}),u=e.children,d=e.frontMatter,p=e.metadata,E=e.truncated,h=e.assets,v=e.isBlogPostPage,y=void 0!==v&&v,x=p.date,C=p.formattedDate,M=p.permalink,R=p.tags,L=p.readingTime,U=p.title,A=p.authors,D=d.keywords,F=(0,o.C)().withBaseUrl;function B(){var e,t=y?"h1":"h2";return n.createElement("header",null,n.createElement(t,{className:(0,r.Z)(f,(e={},e[Z]=!y,e)),itemProp:"headline"},y?U:n.createElement(m.Z,{to:M},U)),n.createElement("div",{className:(0,r.Z)(N,"margin-vert--md")},n.createElement("time",{dateTime:x,itemProp:"datePublished"},C),L&&n.createElement(n.Fragment,null," \xb7 ",a(L))),y&&n.createElement(b,{authors:A,assets:h}))}return y?n.createElement(n.Fragment,null,n.createElement(g.Z,{keywords:D,image:h.image}),n.createElement("article",{itemProp:"blogPost",itemScope:!0,itemType:"http://schema.org/BlogPosting"},B(),h.image&&n.createElement("meta",{itemProp:"image",content:F(h.image,{absolute:!0})}),n.createElement("div",{className:"markdown"},n.createElement(l.Zo,{components:c.Z},u)),(R.length>0||E)&&n.createElement("footer",{className:(0,r.Z)("row docusaurus-mt-lg",k)},R.length>0&&n.createElement("div",{className:"col"},n.createElement(_.Z,{tags:R}))))):n.createElement("div",{className:(0,r.Z)("col col--4",P),itemProp:"blogPost",itemScope:!0,itemType:"http://schema.org/BlogPosting"},n.createElement(g.Z,{keywords:D,image:h.image}),h.image&&n.createElement("img",{itemProp:"image",className:w,src:h.image}),n.createElement("div",{className:T},B(),n.createElement("div",{className:"markdown"},n.createElement(l.Zo,{components:c.Z},u),E&&n.createElement(m.Z,{to:p.permalink,"aria-label":"Read more about "+U},n.createElement("b",null,n.createElement(i.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More")))),R.length>0&&n.createElement("div",{className:"col col--9 margin-top--md"},n.createElement(_.Z,{tags:R}))))}}}]);