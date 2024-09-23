"use strict";(self.webpackChunk_jitsi_handbook=self.webpackChunk_jitsi_handbook||[]).push([[3351],{5323:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var r=n(4848),i=n(8453),s=n(3514);const o={id:"devops-guide-start",title:"Self-Hosting Guide - Overview",sidebar_label:"Overview"},a=void 0,c={id:"devops-guide/devops-guide-start",title:"Self-Hosting Guide - Overview",description:"These guides help you to host your own Jitsi-Meet server.",source:"@site/docs/devops-guide/devops-guide.md",sourceDirName:"devops-guide",slug:"/devops-guide/",permalink:"/handbook/docs/devops-guide/",draft:!1,unlisted:!1,editUrl:"https://github.com/jitsi/handbook/edit/master/docs/devops-guide/devops-guide.md",tags:[],version:"current",lastUpdatedAt:1727089216e3,frontMatter:{id:"devops-guide-start",title:"Self-Hosting Guide - Overview",sidebar_label:"Overview"},sidebar:"docs",previous:{title:"Configuration",permalink:"/handbook/docs/dev-guide/dev-guide-configuration"},next:{title:"Deployment",permalink:"/handbook/docs/category/deployment"}},l={},d=[{value:"First, a bit of general advice",id:"first-a-bit-of-general-advice",level:2}];function u(e){const t={a:"a",admonition:"admonition",br:"br",em:"em",h2:"h2",p:"p",strong:"strong",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.admonition,{type:"note",children:(0,r.jsxs)(t.p,{children:["These guides help you to ",(0,r.jsx)(t.em,{children:(0,r.jsx)(t.strong,{children:"host your own Jitsi-Meet server"})}),".",(0,r.jsx)(t.br,{}),"\n","If you want to have a video conference without setting up any infrastructure, use ",(0,r.jsx)(t.a,{href:"https://meet.jit.si",children:"https://meet.jit.si"})," instead."]})}),"\n",(0,r.jsx)(t.h2,{id:"first-a-bit-of-general-advice",children:"First, a bit of general advice"}),"\n",(0,r.jsxs)(t.p,{children:["Jitsi Meet being based on ",(0,r.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/WebRTC",children:"WebRTC"}),", an encrypted communication link (https) is ",(0,r.jsx)(t.em,{children:(0,r.jsx)(t.strong,{children:"necessary"})})," to get working multimedia, and the setup is not always trivial."]}),"\n",(0,r.jsxs)(t.p,{children:["The best option is an Internet server with a certificate for a domain registered in the ",(0,r.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/Domain_Name_System#Domain_name_registration",children:"DNS"}),"."]}),"\n",(0,r.jsx)(t.p,{children:"While it's possible to setup a server on a private network and/or a self-signed certificate, it can be less straightforward and you can expect difficulties, first if you want access both from the private network and the public internet, and second when using phones as these clients often don't accept self-signed certificates."}),"\n",(0,r.jsxs)(t.p,{children:["In case of trouble with clients using phones, ",(0,r.jsx)(t.a,{href:"https://whatsmychaincert.com",children:"check your certificate"}),"."]}),"\n",(0,r.jsx)("hr",{}),"\n","\n",(0,r.jsx)(s.A,{})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},3514:(e,t,n)=>{n.d(t,{A:()=>x});n(6540);var r=n(4164),i=n(2583),s=n(8774),o=n(5846),a=n(6654),c=n(1312),l=n(1107);const d={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var u=n(4848);function h(e){var t=e.href,n=e.children;return(0,u.jsx)(s.A,{href:t,className:(0,r.A)("card padding--lg",d.cardContainer),children:n})}function p(e){var t=e.href,n=e.icon,i=e.title,s=e.description;return(0,u.jsxs)(h,{href:t,children:[(0,u.jsxs)(l.A,{as:"h2",className:(0,r.A)("text--truncate",d.cardTitle),title:i,children:[n," ",i]}),s&&(0,u.jsx)("p",{className:(0,r.A)("text--truncate",d.cardDescription),title:s,children:s})]})}function f(e){var t,n,r=e.item,s=(0,i.Nr)(r),a=(n=(0,o.W)().selectMessage,function(e){return n(e,(0,c.T)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:e}))});return s?(0,u.jsx)(p,{href:s,icon:"\ud83d\uddc3\ufe0f",title:r.label,description:null!=(t=r.description)?t:a(r.items.length)}):null}function m(e){var t,n,r=e.item,s=(0,a.A)(r.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",o=(0,i.cC)(null!=(t=r.docId)?t:void 0);return(0,u.jsx)(p,{href:r.href,icon:s,title:r.label,description:null!=(n=r.description)?n:null==o?void 0:o.description})}function g(e){var t=e.item;switch(t.type){case"link":return(0,u.jsx)(m,{item:t});case"category":return(0,u.jsx)(f,{item:t});default:throw new Error("unknown item type "+JSON.stringify(t))}}function v(e){var t=e.className,n=(0,i.$S)();return(0,u.jsx)(x,{items:n.items,className:t})}function x(e){var t=e.items,n=e.className;if(!t)return(0,u.jsx)(v,Object.assign({},e));var s=(0,i.d1)(t);return(0,u.jsx)("section",{className:(0,r.A)("row",n),children:s.map((function(e,t){return(0,u.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,u.jsx)(g,{item:e})},t)}))})}},5846:(e,t,n)=>{n.d(t,{W:()=>l});var r=n(6540),i=n(4586),s=["zero","one","two","few","many","other"];function o(e){return s.filter((function(t){return e.includes(t)}))}var a={locale:"en",pluralForms:o(["one","other"]),select:function(e){return 1===e?"one":"other"}};function c(){var e=(0,i.A)().i18n.currentLocale;return(0,r.useMemo)((function(){try{return t=e,n=new Intl.PluralRules(t),{locale:t,pluralForms:o(n.resolvedOptions().pluralCategories),select:function(e){return n.select(e)}}}catch(r){return console.error('Failed to use Intl.PluralRules for locale "'+e+'".\nDocusaurus will fallback to the default (English) implementation.\nError: '+r.message+"\n"),a}var t,n}),[e])}function l(){var e=c();return{selectMessage:function(t,n){return function(e,t,n){var r=e.split("|");if(1===r.length)return r[0];r.length>n.pluralForms.length&&console.error("For locale="+n.locale+", a maximum of "+n.pluralForms.length+" plural forms are expected ("+n.pluralForms.join(",")+"), but the message contains "+r.length+": "+e);var i=n.select(t),s=n.pluralForms.indexOf(i);return r[Math.min(s,r.length-1)]}(n,t,e)}}}},8453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>a});var r=n(6540);const i={},s=r.createContext(i);function o(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);