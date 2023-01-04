"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3833],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var d=r.createContext({}),s=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,d=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=s(n),m=i,g=c["".concat(d,".").concat(m)]||c[m]||p[m]||o;return n?r.createElement(g,a(a({ref:t},u),{},{components:n})):r.createElement(g,a({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=c;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var s=2;s<o;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},4739:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>d,default:()=>m,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var r=n(7462),i=n(3366),o=(n(7294),n(3905)),a=["components"],l={id:"dev-guide-web",title:"Developer Guide (Web)",sidebar_label:"Start"},d=void 0,s={unversionedId:"dev-guide/dev-guide-web",id:"dev-guide/dev-guide-web",title:"Developer Guide (Web)",description:"Welcome to the developers guide for web! This guide will help you setup a development",source:"@site/docs/dev-guide/web.md",sourceDirName:"dev-guide",slug:"/dev-guide/dev-guide-web",permalink:"/handbook/docs/dev-guide/dev-guide-web",draft:!1,editUrl:"https://github.com/jitsi/handbook/edit/master/docs/dev-guide/web.md",tags:[],version:"current",lastUpdatedAt:1672845801,formattedLastUpdatedAt:"Jan 4, 2023",frontMatter:{id:"dev-guide-web",title:"Developer Guide (Web)",sidebar_label:"Start"},sidebar:"docs",previous:{title:"Contributing Guidelines",permalink:"/handbook/docs/dev-guide/dev-guide-contributing"},next:{title:"Modifying lib-jitsi-meet",permalink:"/handbook/docs/dev-guide/dev-guide-ljm"}},u={},p=[{value:"Building the sources",id:"building-the-sources",level:2},{value:"Running with webpack-dev-server for development",id:"running-with-webpack-dev-server-for-development",level:3},{value:"Certificate Error",id:"certificate-error",level:4},{value:"Building .debs",id:"building-debs",level:3},{value:"Running from source on existing deployment",id:"running-from-source-on-existing-deployment",level:3}],c={toc:p};function m(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Welcome to the developers guide for web! This guide will help you setup a development\nenvironment to start working on the Jitsi Meet applications."),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"Building the apps / SDKs is not supported on Windows.")),(0,o.kt)("h2",{id:"building-the-sources"},"Building the sources"),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Node.js >= 16 and npm >= 8 are required.")),(0,o.kt)("p",null,"On Debian/Ubuntu systems, the required packages can be installed with:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},'Download "Linux Binaries (x64)" from ',(0,o.kt)("a",{parentName:"li",href:"https://nodejs.org/en/download/"},"https://nodejs.org/en/download/")),(0,o.kt)("li",{parentName:"ul"},"Install Node.js following these instructions: ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/nodejs/help/wiki/Installation"},"https://github.com/nodejs/help/wiki/Installation"))),(0,o.kt)("p",null,"Then go ahead:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# Clone the repository\ngit clone https://github.com/jitsi/jitsi-meet\ncd ./jitsi-meet\n\nnpm install\n\n# To build the Jitsi Meet application, just type\nmake\n")),(0,o.kt)("admonition",{type:"warning"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("strong",{parentName:"p"},"DO NOT")," run ",(0,o.kt)("inlineCode",{parentName:"p"},"npm update")," or use ",(0,o.kt)("inlineCode",{parentName:"p"},"yarn")," or delete ",(0,o.kt)("inlineCode",{parentName:"p"},"package-lock.json"),". Dependencies are pinned for a reason.")),(0,o.kt)("h3",{id:"running-with-webpack-dev-server-for-development"},"Running with webpack-dev-server for development"),(0,o.kt)("p",null,"Use the following command in your terminal:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"make dev\n")),(0,o.kt)("p",null,"By default the backend deployment used is ",(0,o.kt)("inlineCode",{parentName:"p"},"alpha.jitsi.net"),". You can point the Jitsi Meet app at a different backend by using a proxy server. To do this, set the WEBPACK_DEV_SERVER_PROXY_TARGET variable:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"export WEBPACK_DEV_SERVER_PROXY_TARGET=https://your-example-server.com\nmake dev\n")),(0,o.kt)("p",null,"The app should be running at https://localhost:8080/"),(0,o.kt)("h4",{id:"certificate-error"},"Certificate Error"),(0,o.kt)("p",null,"Browsers may show a certificate error since the development certificate is self-signed. It's safe to disregard those\nwarning and continue to your site."),(0,o.kt)("h3",{id:"building-debs"},"Building .debs"),(0,o.kt)("p",null,"To make a deb you can easily deploy to a public test server, ensure you have the lib-jitsi-meet sources you wish, then:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"npm install\nmake\ndpkg-buildpackage -A -rfakeroot -us -uc -tc\n")),(0,o.kt)("p",null,"You'll have a bunch of .deb files in the parent directory, and can push the updated source to your server and install it with the jitsi-meet-web deb file."),(0,o.kt)("h3",{id:"running-from-source-on-existing-deployment"},"Running from source on existing deployment"),(0,o.kt)("p",null,"Follow the document ",(0,o.kt)("a",{parentName:"p",href:"https://community.jitsi.org/t/how-to-how-to-build-jitsi-meet-from-source-a-developers-guide/75422"},"https://community.jitsi.org/t/how-to-how-to-build-jitsi-meet-from-source-a-developers-guide/75422")))}m.isMDXComponent=!0}}]);