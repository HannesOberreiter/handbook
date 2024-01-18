"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5030],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(n),m=o,h=d["".concat(l,".").concat(m)]||d[m]||u[m]||a;return n?r.createElement(h,i(i({ref:t},c),{},{components:n})):r.createElement(h,i({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2891:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>s,metadata:()=>p,toc:()=>u});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],s={id:"turn",title:"Setting up TURN",sidebar_label:"TURN setup"},l=void 0,p={unversionedId:"devops-guide/turn",id:"devops-guide/turn",title:"Setting up TURN",description:'One-to-one calls should avoid going through the JVB for optimal performance and for optimal resource usage. This is why we\'ve added the peer-to-peer mode where the two participants connect directly to each other. Unfortunately, a direct connection is not always possible between the participants. In those cases you can use a TURN server to relay the traffic (n.b. the JVB does much more than just relay the traffic, so this is not the same as using the JVB to "relay" the traffic).',source:"@site/docs/devops-guide/turn.md",sourceDirName:"devops-guide",slug:"/devops-guide/turn",permalink:"/handbook/docs/devops-guide/turn",draft:!1,editUrl:"https://github.com/jitsi/handbook/edit/master/docs/devops-guide/turn.md",tags:[],version:"current",lastUpdatedAt:1705566264,formattedLastUpdatedAt:"Jan 18, 2024",frontMatter:{id:"turn",title:"Setting up TURN",sidebar_label:"TURN setup"},sidebar:"docs",previous:{title:"Reservation System",permalink:"/handbook/docs/devops-guide/reservation"},next:{title:"Speaker Stats",permalink:"/handbook/docs/devops-guide/speakerstats"}},c={},u=[{value:"Use TURN server on port 443",id:"use-turn-server-on-port-443",level:2}],d={toc:u};function m(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,'One-to-one calls should avoid going through the JVB for optimal performance and for optimal resource usage. This is why we\'ve added the peer-to-peer mode where the two participants connect directly to each other. Unfortunately, a direct connection is not always possible between the participants. In those cases you can use a TURN server to relay the traffic (n.b. the JVB does much more than just relay the traffic, so this is not the same as using the JVB to "relay" the traffic).'),(0,a.kt)("p",null,"This document describes how to enable TURN server support in one-to-one calls in Jitsi Meet. Even though it gives some hints how to configure ",(0,a.kt)("a",{parentName:"p",href:"https://prosody.im"},"prosody")," and ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/coturn/coturn"},"coTURN"),", it assumes a properly configured TURN server, and a properly configured XMPP server."),(0,a.kt)("p",null,"One way to configure TURN support in meet is with a static configuration. You can simply fill out the ",(0,a.kt)("inlineCode",{parentName:"p"},"p2p.stunServers")," option with appropriate values, e.g.:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"[\n    { urls: 'turn:turn.example.com1', username: 'user', credential: 'pass' },\n]\n")),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"This technique doesn't require any special configuration on the XMPP server, but it exposes the credentials to your TURN server and other people can use your bandwidth freely, so while it's simple to implement, it's not recommended.")),(0,a.kt)("p",null,"This ",(0,a.kt)("a",{parentName:"p",href:"https://tools.ietf.org/html/draft-uberti-behave-turn-rest-00"},"draft")," describes a proposed standard REST API for obtaining access to TURN services via ephemeral (i.e. time-limited) credentials. These credentials are vend by a web service over HTTP, and then supplied to and checked by a TURN server using the standard TURN protocol. The usage of ephemeral credentials ensures that access to the TURN server can be controlled even if the credentials can be discovered by the user."),(0,a.kt)("p",null,"Jitsi Meet can fetch the TURN credentials from the XMPP server via ",(0,a.kt)("a",{parentName:"p",href:"https://xmpp.org/extensions/xep-0215.html"},"XEP-0215")," and this is configured by default using ",(0,a.kt)("a",{parentName:"p",href:"https://prosody.im/doc/modules/mod_external_services"},"mod_external_services"),". The default configured turnserver uses the default ports for the protocol UDP 3478 and TCP(TLS) on 5349."),(0,a.kt)("h2",{id:"use-turn-server-on-port-443"},"Use TURN server on port 443"),(0,a.kt)("p",null,"By default, TURN server listens on standard ports UDP 3478 and TCP 5349 (for TLS connections).\nThere are certain corporate networks which allow only TCP connections using port 443(https) and to cover\nthis kind of scenarios it is useful to have TURN server listening on port 443 for TLS connections.\nHere is how to run nginx and TURN server on the same machine sharing port.\nFor this you will need a second DNS record for your turn domain pointing to the same machine (as a reference below we will use ",(0,a.kt)("inlineCode",{parentName:"p"},"turn-jitsi-meet.example.com"),")."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"You need to enable the multiplexing based on that new DNS record. You need to create a file in ",(0,a.kt)("inlineCode",{parentName:"li"},"/etc/nginx/modules")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"/etc/nginx/modules-available"),". If you are placing the file in ",(0,a.kt)("inlineCode",{parentName:"li"},"/etc/nginx/modules-available")," you need to add a symlink in ",(0,a.kt)("inlineCode",{parentName:"li"},"/etc/nginx/modules-enabled"),".\nThe file content should be:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"stream {\n    map $ssl_preread_server_name $name {\n        jitsi-meet.example.com web_backend;\n        turn-jitsi-meet.example.com turn_backend;\n    }\n\n    upstream web_backend {\n        server 127.0.0.1:4444;\n    }\n\n    upstream turn_backend {\n        server __your_public_ip__:5349;\n    }\n\n    server {\n        listen 443;\n        listen [::]:443;\n\n        # since 1.11.5\n        ssl_preread on;\n\n        proxy_pass $name;\n\n        # Increase buffer to serve video\n        proxy_buffer_size 10m;\n    }\n}\n")),(0,a.kt)("p",null,"Make sure you edit the file and replace ",(0,a.kt)("inlineCode",{parentName:"p"},"jitsi-meet.example.com")," with your domain of deployment, ",(0,a.kt)("inlineCode",{parentName:"p"},"turn-jitsi-meet.example.com")," with the DNS name you will use for the TURN server and ",(0,a.kt)("inlineCode",{parentName:"p"},"__your_public_ip__")," with your public IP of the deployment.\nIf you have more virtual hosts make sure you add them here and do the port change for them (the next step)."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Then go to ",(0,a.kt)("inlineCode",{parentName:"li"},"/etc/nginx/site-available/your-conf")," and change your virtual host to listen on port 4444 instead of 443.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"server {\n    listen 4444 ssl;\n    listen [::]:4444 ssl;\n    server_name jitsi-meet.example.com;\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Next you need to make sure Prosody is advertising the correct DNS name and port for the TURN server. You should edit the line using port ",(0,a.kt)("inlineCode",{parentName:"li"},"5349")," in the file ",(0,a.kt)("inlineCode",{parentName:"li"},"/etc/prosody/conf.d/jitsi-meet.example.com.cfg.lua")," and make it look like (change port and address):")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'{ type = "turns", host = "turn-jitsi-meet.example.com", port = "443", transport = "tcp" }\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Now you need to make sure the TURN server (coturn) uses trusted certificates.\nHere is how to request those from Let's Encrypt (make sure you set correct values for the domain and email):")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'systemctl stop nginx\nDOMAIN="turn-jitsi-meet.example.com"\napt install socat\n/opt/acmesh/.acme.sh/acme.sh -f --issue -d ${DOMAIN} --standalone --server letsencrypt\n/opt/acmesh/.acme.sh/acme.sh -f --install-cert \\\n    -d ${DOMAIN} \\\n    --key-file /etc/jitsi/meet/${DOMAIN}.key \\\n    --fullchain-file /etc/jitsi/meet/${DOMAIN}.crt \\\n    --reloadcmd "/usr/share/jitsi-meet/scripts/coturn-le-update.sh ${DOMAIN}"\nsystemctl start nginx\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"After restarting prosody (",(0,a.kt)("inlineCode",{parentName:"li"},"systemctl restart prosody"),") you are good to go!")))}m.isMDXComponent=!0}}]);