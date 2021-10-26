(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{245:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return h}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),p=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=p(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),b=p(n),m=r,h=b["".concat(i,".").concat(m)]||b[m]||s[m]||o;return n?a.a.createElement(h,c(c({ref:t},l),{},{components:n})):a.a.createElement(h,c({ref:t},l))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},95:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return u})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return b}));var r=n(2),a=n(6),o=(n(0),n(245)),i=["components"],c={id:"sessions",title:"Resources"},u={type:"mdx",permalink:"/community/sessions",source:"@site/src/pages/community/sessions.md"},l=[{value:"Upcoming Meetup",id:"upcoming-meetup",children:[]},{value:"Past Conference Sessions",id:"past-conference-sessions",children:[]},{value:"Demo Videos",id:"demo-videos",children:[]}],p={rightToc:l};function b(e){var t=e.components,n=Object(a.a)(e,i);return Object(o.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"upcoming-meetup"},"Upcoming Meetup"),Object(o.b)("p",null,"Upcoming Event:  ",Object(o.b)("strong",{parentName:"p"},"4:00pm - 5:00pm, PST"),", Nov 18, 2021"),Object(o.b)("h2",{id:"past-conference-sessions"},"Past Conference Sessions"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"ApacheCon 2021: ",Object(o.b)("a",{parentName:"li",href:"https://youtu.be/gOST-iT-hj8"},"Next Level Spark on Kubernetes with Apache YuniKorn (Incubating)")," \ud83d\udc65 Weiwei Yang, Chaoran Yu"),Object(o.b)("li",{parentName:"ul"},"ApacheCon Asia 2021: ",Object(o.b)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=c9UYxzqVMeg"},"State Of The Union With Apache Yunikorn (Incubating) - Cloud Native Scheduler For Big Data Usecases\n"),"  \ud83d\udc65 Julia Kinga Marton, Sunil Govindan"),Object(o.b)("li",{parentName:"ul"},"Future of Data Meetup: ",Object(o.b)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=j-6ehu6GrwE"},"Apache YuniKorn: Cloud-native Resource Scheduling")," \ud83d\udc65 Wangda Tan, Wilfred Spiegelenburg"),Object(o.b)("li",{parentName:"ul"},"ApacheCon 2020: ",Object(o.b)("a",{parentName:"li",href:"https://youtu.be/4hghJCuZk5M"},"Integrate Apache Flink with Cloud Native Ecosystem")," \ud83d\udc65 Yang Wang, Tao Yang"),Object(o.b)("li",{parentName:"ul"},"Spark+AI Summit 2020: ",Object(o.b)("a",{parentName:"li",href:"https://www.youtube.com/embed/ZA6aPZ9r9wA"},"Cloud-Native Spark Scheduling with YuniKorn Scheduler")," \ud83d\udc65 Gao Li, Weiwei Yang"),Object(o.b)("li",{parentName:"ul"},"Flink Forward 2020: ",Object(o.b)("a",{parentName:"li",href:"https://www.youtube.com/embed/NemFKL0kK9U"},"Energize multi-tenant Flink on K8s with YuniKorn")," \ud83d\udc65 Weiwei Yang, Wilfred Spiegelenburg")),Object(o.b)("h2",{id:"demo-videos"},"Demo Videos"),Object(o.b)("p",null,"Please subscribe to ",Object(o.b)("a",{parentName:"p",href:"https://www.youtube.com/channel/UCDSJ2z-lEZcjdK27tTj_hGw"},"YuniKorn Youtube Channel")," to get notification about new demos!"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=cCHVFkbHIzo"},"Running YuniKorn on Kubernetes - a 12 minutes Hello-world demo")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=3WOaxoPogDY"},"YuniKorn configuration hot-refresh introduction")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=XDrjOkMp3k4"},"Yunikorn scheduling and volumes on Kubernetes")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=DfhJLMjaFH0"},"Yunikorn placement rules for applications")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=l7Ydg_ZGZw0&t"},"Federated K8s compute pools with YuniKorn"))),Object(o.b)("p",null,"If you are a YuniKorn evangelist, and you have public conference talks, demo recording that related to YuniKorn.\nPlease submit a PR to extend this list!"))}b.isMDXComponent=!0}}]);