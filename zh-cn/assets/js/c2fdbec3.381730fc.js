"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4399],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return m}});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var u=r.createContext({}),c=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(u.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(t),m=i,f=d["".concat(u,".").concat(m)]||d[m]||s[m]||o;return t?r.createElement(f,a(a({ref:n},p),{},{components:t})):r.createElement(f,a({ref:n},p))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=d;var l={};for(var u in n)hasOwnProperty.call(n,u)&&(l[u]=n[u]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var c=2;c<o;c++)a[c]=t[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},75396:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return u},metadata:function(){return c},toc:function(){return p},default:function(){return d}});var r=t(87462),i=t(63366),o=(t(67294),t(3905)),a=["components"],l={id:"user_guide",title:"\u5f00\u59cb",slug:"/"},u=void 0,c={unversionedId:"get_started/user_guide",id:"get_started/user_guide",title:"\u5f00\u59cb",description:"\x3c!--",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/current/get_started/get_started.md",sourceDirName:"get_started",slug:"/",permalink:"/zh-cn/docs/next/",tags:[],version:"current",frontMatter:{id:"user_guide",title:"\u5f00\u59cb",slug:"/"},sidebar:"docs",next:{title:"\u7279\u5f81",permalink:"/zh-cn/docs/next/get_started/core_features"}},p=[{value:"\u5b89\u88c5",id:"\u5b89\u88c5",children:[],level:2},{value:"\u5378\u8f7d",id:"\u5378\u8f7d",children:[],level:2},{value:"\u8bbf\u95ee Web UI",id:"\u8bbf\u95ee-web-ui",children:[],level:2}],s={toc:p};function d(e){var n=e.components,l=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},s,l,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u5728\u9605\u8bfb\u672c\u6307\u5357\u4e4b\u524d\uff0c\u6211\u4eec\u5047\u8bbe\u60a8\u6709\u4e00\u4e2aKubernetes\u96c6\u7fa4\u6216\u672c\u5730 Kubernetes \u5f00\u53d1\u73af\u5883\uff0c\u4f8b\u5982 MiniKube\u3002\n\u8fd8\u5047\u5b9a ",(0,o.kt)("inlineCode",{parentName:"p"},"kubectl")," \u5728\u60a8\u7684\u73af\u5883\u8def\u5f84\u5185\uff0c\u5e76\u4e14\u914d\u7f6e\u6b63\u786e\u3002\n\u9075\u5faa\u6b64 ",(0,o.kt)("a",{parentName:"p",href:"/zh-cn/docs/next/developer_guide/env_setup"},"\u6307\u5357")," \u6765\u8bb2\u8ff0\u5982\u4f55\u4f7f\u7528 docker-desktop \u8bbe\u7f6e\u672c\u5730Kubernetes\u96c6\u7fa4\u3002"),(0,o.kt)("h2",{id:"\u5b89\u88c5"},"\u5b89\u88c5"),(0,o.kt)("p",null,"\u6700\u7b80\u5355\u7684\u65b9\u6cd5\u662f\u4f7f\u7528\u6211\u4eec\u7684 Helm Chart \u5728\u73b0\u6709\u7684Kubernetes\u96c6\u7fa4\u4e0a\u90e8\u7f72YuniKorn\u3002\n\u6211\u4eec\u5efa\u8bae\u4f7f\u7528 Helm 3 \u6216\u66f4\u9ad8\u7248\u672c\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"helm repo add yunikorn https://apache.github.io/incubator-yunikorn-release\nhelm repo update\nkubectl create namespace yunikorn\nhelm install yunikorn yunikorn/yunikorn --namespace yunikorn\n")),(0,o.kt)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0cHelm Chart \u5c06\u5728\u96c6\u7fa4\u4e2d\u5b89\u88c5\u8c03\u5ea6\u5668\u3001web\u670d\u52a1\u5668\u548c admission-controller\u3002\n",(0,o.kt)("inlineCode",{parentName:"p"},"admission-controller")," \u4e00\u65e6\u5b89\u88c5\uff0c\u5b83\u5c06\u628a\u6240\u6709\u96c6\u7fa4\u6d41\u91cf\u8def\u7531\u5230YuniKorn\u3002\n\u8fd9\u610f\u5473\u7740\u8d44\u6e90\u8c03\u5ea6\u4f1a\u59d4\u6258\u7ed9YuniKorn\u3002\u5728Helm\u5b89\u88c5\u8fc7\u7a0b\u4e2d\uff0c\u53ef\u4ee5\u901a\u8fc7\u5c06 ",(0,o.kt)("inlineCode",{parentName:"p"},"embedAdmissionController")," \u6807\u5fd7\u8bbe\u7f6e\u4e3a ",(0,o.kt)("inlineCode",{parentName:"p"},"false")," \u6765\u7981\u7528\u5b83\u3002\n\u901a\u8fc7\u5c06Helm\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"enableSchedulerPlugin")," \u6807\u5fd7\u8bbe\u7f6e\u4e3a ",(0,o.kt)("inlineCode",{parentName:"p"},"true"),"\uff0cYuniKorn\u8c03\u5ea6\u5668\u4e5f\u53ef\u4ee5\u4ee5Kubernetes\u7684\u8c03\u5ea6\u5668\u63d2\u4ef6\u7684\u65b9\u5f0f\u8fdb\u884c\u90e8\u7f72\u3002\n\u8fd9\u79cd\u65b9\u5f0f\u5c06\u4f1a\u90e8\u7f72\u4e00\u4e2a\u5305\u542b\u4e0e\u9ed8\u8ba4\u8c03\u5ea6\u5668\u4e00\u8d77\u7f16\u8bd1\u7684YuniKorn\u5907\u7528Docker\u955c\u50cf\u3002\n\u8fd9\u79cd\u65b0\u6a21\u5f0f\u501f\u52a9\u9ed8\u8ba4\u7684Kubernetes\u8c03\u5ea6\u5668\u63d0\u4f9b\u4e86\u66f4\u597d\u7684\u517c\u5bb9\u6027\uff0c\u5e76\u4e14\u9002\u5408\u4e0e\u5c06\u6240\u6709\u8c03\u5ea6\u59d4\u6258\u7ed9YuniKorn\u7684 admission-controller \u534f\u540c\u4f7f\u7528\u3002\n\u56e0\u4e3a\u8fd9\u4e2a\u6a21\u5f0f\u8fd8\u662f\u5f88\u65b0\u7684\uff0c\u6240\u4ee5\u9ed8\u8ba4\u6ca1\u6709\u5f00\u542f\u3002"),(0,o.kt)("p",null,"\u5982\u679c\u60a8\u4e0d\u786e\u5b9a\u5e94\u8be5\u4f7f\u7528\u54ea\u79cd\u90e8\u7f72\u6a21\u5f0f\uff0c\u8bf7\u53c2\u9605\u6211\u4eec ",(0,o.kt)("a",{parentName:"p",href:"user_guide/deployment_modes"},"\u5e76\u5217\u6bd4\u8f83")," \u7ae0\u8282\u7684\u5185\u5bb9\u3002"),(0,o.kt)("p",null,"\u5982\u679c\u4f60\u4e0d\u60f3\u4f7f\u7528 Helm Chart\uff0c\u60a8\u53ef\u4ee5\u627e\u5230\u6211\u4eec\u7684\u7ec6\u8282\u6559\u7a0b ",(0,o.kt)("a",{parentName:"p",href:"/zh-cn/docs/next/developer_guide/deployment"},"\u70b9\u51fb\u8fd9\u91cc")," \u3002"),(0,o.kt)("h2",{id:"\u5378\u8f7d"},"\u5378\u8f7d"),(0,o.kt)("p",null,"\u8fd0\u884c\u5982\u4e0b\u7684\u547d\u4ee4\u5378\u8f7d YuniKorn:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"helm uninstall yunikorn --namespace yunikorn\n")),(0,o.kt)("h2",{id:"\u8bbf\u95ee-web-ui"},"\u8bbf\u95ee Web UI"),(0,o.kt)("p",null,"\u5f53\u90e8\u7f72\u8c03\u5ea6\u7a0b\u5e8f\u65f6\uff0cWeb UI \u4e5f\u4f1a\u90e8\u7f72\u5728\u5bb9\u5668\u4e2d\u3002\n\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u65b9\u5f0f\u5728\u6807\u51c6\u7aef\u53e3\u4e0a\u6253\u5f00 Web \u754c\u9762\u7684\u7aef\u53e3\u8f6c\u53d1\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"kubectl port-forward svc/yunikorn-service 9889:9889 -n yunikorn\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"9889")," \u662f Web UI \u7684\u9ed8\u8ba4\u7aef\u53e3\u3002\n\u5b8c\u6210\u6b64\u64cd\u4f5c\u540e\uff0cweb UI\u5c06\u5728\u4ee5\u4e0b\u5730\u5740\u53ef\u7528: http://localhost:9889 \u3002"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"UI \u622a\u56fe",src:t(72198).Z,width:"1200",height:"617"})),(0,o.kt)("p",null,"YuniKorn UI \u63d0\u4f9b\u4e86\u96c6\u7fa4\u8d44\u6e90\u5bb9\u91cf\u3001\u5229\u7528\u7387\u548c\u6240\u6709\u5e94\u7528\u4fe1\u606f\u7684\u96c6\u4e2d\u89c6\u56fe\u3002"))}d.isMDXComponent=!0},72198:function(e,n,t){n.Z=t.p+"assets/images/yk-ui-screenshots-d24de16a6a2af41a4d5ac1f488ce04a1.gif"}}]);