"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7711],{3905:(e,a,t)=>{t.d(a,{Zo:()=>s,kt:()=>c});var n=t(7294);function i(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function l(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function r(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?l(Object(t),!0).forEach((function(a){i(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function d(e,a){if(null==e)return{};var t,n,i=function(e,a){if(null==e)return{};var t,n,i={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||(i[t]=e[t]);return i}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var o=n.createContext({}),u=function(e){var a=n.useContext(o),t=a;return e&&(t="function"==typeof e?e(a):r(r({},a),e)),t},s=function(e){var a=u(e.components);return n.createElement(o.Provider,{value:a},e.children)},b={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},p=n.forwardRef((function(e,a){var t=e.components,i=e.mdxType,l=e.originalType,o=e.parentName,s=d(e,["components","mdxType","originalType","parentName"]),p=u(t),c=i,f=p["".concat(o,".").concat(c)]||p[c]||b[c]||l;return t?n.createElement(f,r(r({ref:a},s),{},{components:t})):n.createElement(f,r({ref:a},s))}));function c(e,a){var t=arguments,i=a&&a.mdxType;if("string"==typeof e||i){var l=t.length,r=new Array(l);r[0]=p;var d={};for(var o in a)hasOwnProperty.call(a,o)&&(d[o]=a[o]);d.originalType=e,d.mdxType="string"==typeof e?e:i,r[1]=d;for(var u=2;u<l;u++)r[u]=t[u];return n.createElement.apply(null,r)}return n.createElement.apply(null,t)}p.displayName="MDXCreateElement"},7249:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>d,metadata:()=>u,toc:()=>b});var n=t(7462),i=t(3366),l=(t(7294),t(3905)),r=["components"],d={id:"mobile-feature-flags",title:"Feature flags"},o=void 0,u={unversionedId:"dev-guide/mobile-feature-flags",id:"dev-guide/mobile-feature-flags",title:"Feature flags",description:"The mobile SDK supports a number of feature flags which allow for customizing certain",source:"@site/docs/dev-guide/mobile-feature-flags.md",sourceDirName:"dev-guide",slug:"/dev-guide/mobile-feature-flags",permalink:"/handbook/docs/dev-guide/mobile-feature-flags",draft:!1,editUrl:"https://github.com/jitsi/handbook/edit/master/docs/dev-guide/mobile-feature-flags.md",tags:[],version:"current",lastUpdatedAt:1690822094,formattedLastUpdatedAt:"Jul 31, 2023",frontMatter:{id:"mobile-feature-flags",title:"Feature flags"},sidebar:"docs",previous:{title:"Jitsi Meet development",permalink:"/handbook/docs/dev-guide/dev-guide-mobile-jitsi-meet"},next:{title:"Android SDK",permalink:"/handbook/docs/dev-guide/dev-guide-android-sdk"}},s={},b=[],p={toc:b};function c(e){var a=e.components,t=(0,i.Z)(e,r);return(0,l.kt)("wrapper",(0,n.Z)({},p,t,{components:a,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"The mobile SDK supports a number of feature flags which allow for customizing certain\nUI aspects and behavior."),(0,l.kt)("p",null,"Here are the currently implemented flags:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"add-people.enabled"),": Flag indicating if add-people functionality should be enabled. Default: enabled (true)."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"android.audio-focus.disabled"),": Flag indicating if the SDK should not require the audio focus. Used by apps that do not use Jitsi audio.  Default: disabled (false)."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"audio-mute.enabled"),": Flag indicating if the audio mute button should be displayed. Default: enabled (true)."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"calendar.enabled"),": Flag indicating if calendar integration should be enabled. Default: enabled (true) on Android, auto-detected on iOS."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"call-integration.enabled"),": Flag indicating if call integration (CallKit on iOS, ConnectionService on Android) should be enabled. Default: enabled (true)."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"car-mode.enabled"),": Flag indicating if car mode should be enabled. Default: enabled (true)."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"close-captions.enabled"),": Flag indicating if close captions should be enabled. Default: enabled (true)."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"conference-timer.enabled"),": Flag indicating if conference timer should be enabled. Default: enabled (true)."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"chat.enabled"),": Flag indicating if chat should be enabled. Default: enabled (true)."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"filmstrip.enabled"),": Flag indicating if the filmstrip should be enabled. Default: enabled (true)."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"invite.enabled"),": Flag indicating if invite functionality should be enabled. Default: enabled (true)."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"ios.recording.enabled"),": Flag indicating if recording should be enabled in iOS. Default: disabled (false)."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"ios.screensharing.enabled"),": Flag indicating if screen sharing should be enabled in iOS. Default: disabled (false)."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"android.screensharing.enabled"),": Flag indicating if screen sharing should be enabled in android. Default: enabled (true)."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"speakerstats.enabled"),": Flag indicating if screen sharing should be enabled in android. Default: enabled (true)."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"kick-out.enabled"),": Flag indicating if kickout is enabled. Default: enabled (true)."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"live-streaming.enabled"),": Flag indicating if live-streaming should be enabled. Default: auto-detected."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"meeting-name.enabled"),": Flag indicating if displaying the meeting name should be enabled. Default: enabled (true)."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"meeting-password.enabled"),": Flag indicating if the meeting password button should be enabled. Note that this flag just decides on the buttton, if a meeting has a password set, the password dialog will still show up. Default: enabled (true)."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"notifications.enabled"),": Flag indicating if the notifications should be enabled. Default: enabled (true)."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"overflow-menu.enabled"),": Flag indicating if the audio overflow menu button should be displayed. Default: enabled (true)."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"pip.enabled"),": Flag indicating if Picture-in-Picture should be enabled. Default: auto-detected."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"pip-while-screen-sharing.enabled"),": Flag indicating if Picture-in-Picture button should be shown while screen sharing. Default: disabled (false)."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"prejoinpage.enabled"),": Flag indicating if the prejoin page should be enabled. Default: enabled (true)."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"raise-hand.enabled"),": Flag indicating if raise hand feature should be enabled. Default: enabled."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"recording.enabled"),": Flag indicating if recording should be enabled. Default: auto-detected."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"resolution"),": Flag indicating the local and (maximum) remote video resolution. Overrides the server configuration. Default: (unset)."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"server-url-change.enabled"),": Flag indicating if server URL change is enabled. Default: enabled (true)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"settings.enabled"),": Flag indicating if settings should be enabled. Default: enabled (true)."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"tile-view.enabled"),": Flag indicating if tile view feature should be enabled. Default: enabled."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"toolbox.alwaysVisible"),": Flag indicating if the toolbox should be always be visible. Default: disabled (false)."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"toolbox.enabled"),": Flag indicating if the toolbox should be enabled. Default: enabled."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"video-mute.enabled"),":  Flag indicating if the video mute button should be displayed. Default: enabled (true)."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"video-share.enabled"),":  Flag indicating if the video share button should be enabled. Default: enabled (true)."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"welcomepage.enabled"),": Flag indicating if the welcome page should be enabled. Default: disabled (false).")),(0,l.kt)("p",null,"All flags are defined ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/jitsi/jitsi-meet/blob/master/react/features/base/flags/constants.ts"},"here"),"."))}c.isMDXComponent=!0}}]);