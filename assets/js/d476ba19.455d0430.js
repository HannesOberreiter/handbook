"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1756],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>f});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},l=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),d=s(r),f=o,m=d["".concat(c,".").concat(f)]||d[f]||u[f]||i;return r?n.createElement(m,a(a({ref:t},l),{},{components:r})):n.createElement(m,a({ref:t},l))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=d;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:o,a[1]=p;for(var s=2;s<i;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},6359:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>f,frontMatter:()=>p,metadata:()=>s,toc:()=>u});var n=r(7462),o=r(3366),i=(r(7294),r(3905)),a=["components"],p={id:"cloud-api",title:"Cloud API"},c=void 0,s={unversionedId:"devops-guide/cloud-api",id:"devops-guide/cloud-api",title:"Cloud API",description:"The Jitsi Meet Cloud API is a specification for services which can support the integration of Jitsi Meet into other applications, for mapping conferences for dial-in support, and for supporting directory search and user invitations to conferences.",source:"@site/docs/devops-guide/cloud-api.md",sourceDirName:"devops-guide",slug:"/devops-guide/cloud-api",permalink:"/handbook/docs/devops-guide/cloud-api",draft:!1,editUrl:"https://github.com/jitsi/handbook/edit/master/docs/devops-guide/cloud-api.md",tags:[],version:"current",lastUpdatedAt:1672845801,formattedLastUpdatedAt:"Jan 4, 2023",frontMatter:{id:"cloud-api",title:"Cloud API"},sidebar:"docs",previous:{title:"Video SIP gateway",permalink:"/handbook/docs/devops-guide/videosipgw"},next:{title:"Video Tutorials",permalink:"/handbook/docs/devops-guide/devops-guide-videotutorials"}},l={},u=[{value:"Sample conference mapper application",id:"sample-conference-mapper-application",level:2}],d={toc:u};function f(e){var t=e.components,r=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The Jitsi Meet Cloud API is a specification for services which can support the integration of Jitsi Meet into other applications, for mapping conferences for dial-in support, and for supporting directory search and user invitations to conferences."),(0,i.kt)("p",null,"The swagger for these services is provided in ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/jitsi/jitsi-meet/blob/master/resources/cloud-api.swagger"},"cloud-api.swagger"),"."),(0,i.kt)("h2",{id:"sample-conference-mapper-application"},"Sample conference mapper application"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/luki-ev/conferencemapper"},"https://github.com/luki-ev/conferencemapper")))}f.isMDXComponent=!0}}]);