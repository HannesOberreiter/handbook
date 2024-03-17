"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3928],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>u});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=i.createContext({}),s=function(e){var t=i.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=s(e.components);return i.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),m=s(n),u=r,b=m["".concat(p,".").concat(u)]||m[u]||c[u]||a;return n?i.createElement(b,l(l({ref:t},d),{},{components:n})):i.createElement(b,l({ref:t},d))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,l=new Array(a);l[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var s=2;s<a;s++)l[s]=n[s];return i.createElement.apply(null,l)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4586:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>p,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var i=n(7462),r=n(3366),a=(n(7294),n(3905)),l=["components"],o={id:"dev-guide-ljm",title:"Modifying lib-jitsi-meet"},p="Modifying lib-jitsi-meet",s={unversionedId:"dev-guide/dev-guide-ljm",id:"dev-guide/dev-guide-ljm",title:"Modifying lib-jitsi-meet",description:"By default the library is referenced as a prebuilt artifact in a GitHub release. Packages are NOT published to npm. The default dependency path in package.json is:",source:"@site/docs/dev-guide/ljm.md",sourceDirName:"dev-guide",slug:"/dev-guide/dev-guide-ljm",permalink:"/handbook/docs/dev-guide/dev-guide-ljm",draft:!1,editUrl:"https://github.com/jitsi/handbook/edit/master/docs/dev-guide/ljm.md",tags:[],version:"current",lastUpdatedAt:1710659593,formattedLastUpdatedAt:"Mar 17, 2024",frontMatter:{id:"dev-guide-ljm",title:"Modifying lib-jitsi-meet"},sidebar:"docs",previous:{title:"Jitsi Meet development",permalink:"/handbook/docs/dev-guide/dev-guide-web-jitsi-meet"},next:{title:"Integrations",permalink:"/handbook/docs/dev-guide/dev-guide-web-integrations"}},d={},c=[],m={toc:c};function u(e){var t=e.components,n=(0,r.Z)(e,l);return(0,a.kt)("wrapper",(0,i.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"modifying-lib-jitsi-meet"},"Modifying ",(0,a.kt)("inlineCode",{parentName:"h1"},"lib-jitsi-meet")),(0,a.kt)("p",null,"By default the library is referenced as a prebuilt artifact in a GitHub release. Packages are NOT published to npm. The default dependency path in package.json is:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'"lib-jitsi-meet": "https://github.com/jitsi/lib-jitsi-meet/releases/download/v<version>+<commit-hash>/lib-jitsi-meet.tgz)",\n')),(0,a.kt)("p",null,"To work with local copy you may change the path to:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'"lib-jitsi-meet": "file:///Users/name/local-lib-jitsi-meet-packed-copy.tgz",\n')),(0,a.kt)("p",null,"In order to create the packed file run ",(0,a.kt)("inlineCode",{parentName:"p"},"npm pack")," in the lib-jitsi-meet project directory."),(0,a.kt)("p",null,"To make the project you must force it to take the sources as 'npm update':"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"npm install lib-jitsi-meet --force && make\n")),(0,a.kt)("p",null,"Or if you are making only changes to the library:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"npm install lib-jitsi-meet --force && make deploy-lib-jitsi-meet\n")),(0,a.kt)("p",null,"Alternative way is to use ",(0,a.kt)("a",{parentName:"p",href:"https://docs.npmjs.com/cli/link"},"npm link"),".\nIt allows to link ",(0,a.kt)("inlineCode",{parentName:"p"},"lib-jitsi-meet")," dependency to local source in few steps:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"cd lib-jitsi-meet\n\n#### create global symlink for lib-jitsi-meet package\nnpm link\n\ncd ../jitsi-meet\n\n#### create symlink from the local node_modules folder to the global lib-jitsi-meet symlink\nnpm link lib-jitsi-meet\n")),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Linking will not work when building the mobile applications.")),(0,a.kt)("p",null,"After changes in your local ",(0,a.kt)("inlineCode",{parentName:"p"},"lib-jitsi-meet")," repository, you can rebuild it with ",(0,a.kt)("inlineCode",{parentName:"p"},"npm run build")," and your ",(0,a.kt)("inlineCode",{parentName:"p"},"jitsi-meet")," repository will use that modified library:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"cd node_modules/lib-jitsi-meet\nnpm run build\n")),(0,a.kt)("p",null,"If you do not want to use local repository anymore you should run:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"cd jitsi-meet\nnpm unlink lib-jitsi-meet\nnpm install\n")))}u.isMDXComponent=!0}}]);