"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2422],{3905:(e,t,i)=>{i.d(t,{Zo:()=>p,kt:()=>m});var n=i(7294);function a(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function o(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function l(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?o(Object(i),!0).forEach((function(t){a(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function r(e,t){if(null==e)return{};var i,n,a=function(e,t){if(null==e)return{};var i,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)i=o[n],t.indexOf(i)>=0||(a[i]=e[i]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)i=o[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}var s=n.createContext({}),d=function(e){var t=n.useContext(s),i=t;return e&&(i="function"==typeof e?e(t):l(l({},t),e)),i},p=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var i=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),u=d(i),m=a,g=u["".concat(s,".").concat(m)]||u[m]||c[m]||o;return i?n.createElement(g,l(l({ref:t},p),{},{components:i})):n.createElement(g,l({ref:t},p))}));function m(e,t){var i=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=i.length,l=new Array(o);l[0]=u;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r.mdxType="string"==typeof e?e:a,l[1]=r;for(var d=2;d<o;d++)l[d]=i[d];return n.createElement.apply(null,l)}return n.createElement.apply(null,i)}u.displayName="MDXCreateElement"},4861:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>m,frontMatter:()=>r,metadata:()=>d,toc:()=>c});var n=i(7462),a=i(3366),o=(i(7294),i(3905)),l=["components"],r={id:"devops-guide-scalable",title:"DevOps Guide (scalable setup)",sidebar_label:"Scalable setup"},s=void 0,d={unversionedId:"devops-guide/devops-guide-scalable",id:"devops-guide/devops-guide-scalable",title:"DevOps Guide (scalable setup)",description:"A single server Jitsi installation is good for a limited size of concurrent conferences.",source:"@site/docs/devops-guide/scalable.md",sourceDirName:"devops-guide",slug:"/devops-guide/devops-guide-scalable",permalink:"/handbook/docs/devops-guide/devops-guide-scalable",draft:!1,editUrl:"https://github.com/jitsi/handbook/edit/master/docs/devops-guide/scalable.md",tags:[],version:"current",lastUpdatedAt:1672845801,formattedLastUpdatedAt:"Jan 4, 2023",frontMatter:{id:"devops-guide-scalable",title:"DevOps Guide (scalable setup)",sidebar_label:"Scalable setup"},sidebar:"docs",previous:{title:"LDAP Authentication",permalink:"/handbook/docs/devops-guide/ldap-authentication"},next:{title:"Reservation System",permalink:"/handbook/docs/devops-guide/reservation"}},p={},c=[{value:"Architecture (Single Jitsi-Meet, multiple videobridges)",id:"architecture-single-jitsi-meet-multiple-videobridges",level:2},{value:"Machine Sizing",id:"machine-sizing",level:2},{value:"Installation of Jitsi-Meet",id:"installation-of-jitsi-meet",level:3},{value:"Installation of Videobridge(s)",id:"installation-of-videobridges",level:3},{value:"Configuration of jitsi-meet",id:"configuration-of-jitsi-meet",level:3},{value:"Firewall",id:"firewall",level:4},{value:"NGINX",id:"nginx",level:4},{value:"Prosody",id:"prosody",level:4},{value:"Jitsi-Meet",id:"jitsi-meet",level:4},{value:"Jicofo",id:"jicofo",level:4},{value:"Configuration of the Videobridge",id:"configuration-of-the-videobridge",level:3},{value:"Firewall",id:"firewall-1",level:4},{value:"jitsi-videobridge2",id:"jitsi-videobridge2",level:4},{value:"Testing",id:"testing",level:2}],u={toc:c};function m(e){var t=e.components,i=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,n.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"A single server Jitsi installation is good for a limited size of concurrent conferences.\nThe first limiting factor is the videobridge component, that handles the actual video and audio traffic.\nIt is easy to scale the video bridges horizontally by adding as many as needed.\nIn a cloud based environment, additionally the bridges can be scaled up or down as needed."),(0,o.kt)("admonition",{type:"warning"},(0,o.kt)("p",{parentName:"admonition"},"The ",(0,o.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=LyGV4uW8km8"},"Youtube Tutorial on Scaling")," is outdated and describes an old configuration method.\nThe current default Jitsi Meet install is already configured for horizontal scalability.")),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Building a scalable infrastructure is not a task for beginning Jitsi Administrators.\nThe instructions assume that you have installed a single node version successfully, and that\nyou are comfortable installing, configuring and debugging Linux software.\nThis is not a step-by-step guide, but will show you, which packages to install and which\nconfigurations to change. Use the ",(0,o.kt)("a",{parentName:"p",href:"devops-guide-manual"},"manual install")," for\ndetails on how to setup Jitsi on a single host.\nIt is highly recommended to use configuration management tools like Ansible or Puppet to manage the\ninstallation and configuration.")),(0,o.kt)("h2",{id:"architecture-single-jitsi-meet-multiple-videobridges"},"Architecture (Single Jitsi-Meet, multiple videobridges)"),(0,o.kt)("p",null,"A first step is to split the functions of the central jitsi-meet instance (with nginx, prosody and jicofo) and\nvideobridges."),(0,o.kt)("p",null,"A simplified diagram (with open network ports) of an installation with one Jitsi-Meet instance and three\nvideobridges that are load balanced looks as follows. Each box is a server/VM."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"               +                                       +\n               |                                       |\n               |                                       |\n               v                                       v\n          80, 443 TCP                          443 TCP, 10000 UDP\n       +--------------+                     +---------------------+\n       |  nginx       |  5222 TCP           |                     |\n       |  Jitsi Meet  |<-------------------+|  jitsi-videobridge  |\n       |  prosody     |         |           |                     |\n       |  jicofo      |         |           +---------------------+\n       +--------------+         |\n                                |           +---------------------+\n                                |           |                     |\n                                +----------+|  jitsi-videobridge  |\n                                |           |                     |\n                                |           +---------------------+\n                                |\n                                |           +---------------------+\n                                |           |                     |\n                                +----------+|  jitsi-videobridge  |\n                                            |                     |\n                                            +---------------------+\n")),(0,o.kt)("h2",{id:"machine-sizing"},"Machine Sizing"),(0,o.kt)("p",null,"The Jitsi-Meet server will generally not have that much load (unless you have many) conferences\ngoing at the same time. A 4 CPU, 8 GB machine will probably be fine."),(0,o.kt)("p",null,"The videobridges will have more load. 4 or 8 CPU with 8 GB RAM seems to be a good configuration."),(0,o.kt)("h3",{id:"installation-of-jitsi-meet"},"Installation of Jitsi-Meet"),(0,o.kt)("p",null,"Assuming that the installation will run under the following FQDN: ",(0,o.kt)("inlineCode",{parentName:"p"},"meet.example.com")," and you have\nSSL cert and key in ",(0,o.kt)("inlineCode",{parentName:"p"},"/etc/ssl/meet.example.com.{crt,key}")),(0,o.kt)("p",null,"Set the following DebConf variables prior to installing the packages.\n(We are not installing the ",(0,o.kt)("inlineCode",{parentName:"p"},"jitsi-meet")," package which would handle that for us)"),(0,o.kt)("p",null,"Install the ",(0,o.kt)("inlineCode",{parentName:"p"},"debconf-utils")," package"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ cat << EOF | sudo debconf-set-selections\njitsi-videobridge   jitsi-videobridge/jvb-hostname  string  meet.example.com\njitsi-meet  jitsi-meet/jvb-serve    boolean false\njitsi-meet-prosody  jitsi-videobridge/jvb-hostname  string  meet.example.com\njitsi-meet-web-config   jitsi-meet/cert-choice  select  I want to use my own certificate\njitsi-meet-web-config   jitsi-meet/cert-path-crt    string  /etc/ssl/meet.example.com.crt\njitsi-meet-web-config   jitsi-meet/cert-path-key    string  /etc/ssl/meet.example.com.key\njitsi-meet-web-config   jitsi-meet/jaas-choice  boolean false\nEOF\n")),(0,o.kt)("p",null,"To enable integration with ",(0,o.kt)("a",{parentName:"p",href:"https://jaas.8x8.vc/#/components"},"Jitsi Meet Components")," for telephony support, set\nthe ",(0,o.kt)("inlineCode",{parentName:"p"},"jitsi-meet/jaas-choice")," option above to ",(0,o.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,o.kt)("p",null,"On the jitsi-meet server, install the following packages:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"nginx")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"prosody")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"jicofo")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"jitsi-meet-web")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"jitsi-meet-prosody")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"jitsi-meet-web-config"))),(0,o.kt)("h3",{id:"installation-of-videobridges"},"Installation of Videobridge(s)"),(0,o.kt)("p",null,"For simplicities sake, set the same ",(0,o.kt)("inlineCode",{parentName:"p"},"debconf")," variables as above and install"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"jitsi-videobridge2"))),(0,o.kt)("h3",{id:"configuration-of-jitsi-meet"},"Configuration of jitsi-meet"),(0,o.kt)("h4",{id:"firewall"},"Firewall"),(0,o.kt)("p",null,"Open the following ports:"),(0,o.kt)("p",null,"Open to world:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"80 TCP"),(0,o.kt)("li",{parentName:"ul"},"443 TCP")),(0,o.kt)("p",null,"Open to the videobridges only"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"5222 TCP (for Prosody)")),(0,o.kt)("h4",{id:"nginx"},"NGINX"),(0,o.kt)("p",null,"Create the ",(0,o.kt)("inlineCode",{parentName:"p"},"/etc/nginx/sites-available/meet.example.com.conf")," as usual"),(0,o.kt)("h4",{id:"prosody"},"Prosody"),(0,o.kt)("p",null,"Follow the steps in the ",(0,o.kt)("a",{parentName:"p",href:"devops-guide-manual"},"manual install")," for setup tasks"),(0,o.kt)("h4",{id:"jitsi-meet"},"Jitsi-Meet"),(0,o.kt)("p",null,"Adapt ",(0,o.kt)("inlineCode",{parentName:"p"},"/usr/share/jitsi-meet/config.js")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"/usr/share/jitsi-meet/interface-config.js")," to your specific needs"),(0,o.kt)("h4",{id:"jicofo"},"Jicofo"),(0,o.kt)("p",null,"No changes necessary from the default install."),(0,o.kt)("h3",{id:"configuration-of-the-videobridge"},"Configuration of the Videobridge"),(0,o.kt)("h4",{id:"firewall-1"},"Firewall"),(0,o.kt)("p",null,"Open the following ports:"),(0,o.kt)("p",null,"Open to world:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"10000 UDP (for media)")),(0,o.kt)("h4",{id:"jitsi-videobridge2"},"jitsi-videobridge2"),(0,o.kt)("p",null,"No changes necessary from the default setup."),(0,o.kt)("h2",{id:"testing"},"Testing"),(0,o.kt)("p",null,"After restarting all services (",(0,o.kt)("inlineCode",{parentName:"p"},"prosody"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"jicofo")," and all the ",(0,o.kt)("inlineCode",{parentName:"p"},"jitsi-videobridge2"),") you can see in\n",(0,o.kt)("inlineCode",{parentName:"p"},"/var/log/prosody/prosody.log")," and\n",(0,o.kt)("inlineCode",{parentName:"p"},"/var/log/jitsi/jicofo.log")," that the videobridges connect to Prososy and that Jicofo picks them up."),(0,o.kt)("p",null,"When a new conference starts, Jicofo picks a videobridge and schedules the conference on it."))}m.isMDXComponent=!0}}]);