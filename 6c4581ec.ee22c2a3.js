(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{169:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return p})),a.d(t,"rightToc",(function(){return c})),a.d(t,"default",(function(){return s}));var n=a(2),r=a(9),o=(a(0),a(206)),i={id:"pluggable_app_management",title:"Pluggable App Management"},p={id:"design/pluggable_app_management",isDocsHomePage:!1,title:"Pluggable App Management",description:"\x3c!--",source:"@site/docs/design/pluggable_app_management.md",permalink:"/docs/next/design/pluggable_app_management",version:"next",sidebar:"docs",previous:{title:"Namespace Resource Quota",permalink:"/docs/next/design/namespace_resource_quota"},next:{title:"Resilience",permalink:"/docs/next/design/resilience"},latestVersionMainDocPermalink:"/docs"},c=[{value:"The Problem",id:"the-problem",children:[]},{value:"K8s Operator Pattern",id:"k8s-operator-pattern",children:[]},{value:"Design",id:"design",children:[]}],l={rightToc:c};function s(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"pluggable-app-management"},"Pluggable App Management"),Object(o.b)("h2",{id:"the-problem"},"The Problem"),Object(o.b)("p",null,"Currently, we schedule and group an application is based on a label on the pod.\nThis generic way works for any type of workload. It does however give us a limited information on the lifecycle\nand application. On the K8s side, operators have been introduced to provide more detail on the application\nand help scheduling. We cannot use them currently and want to add that functionality."),Object(o.b)("h2",{id:"k8s-operator-pattern"},"K8s Operator Pattern"),Object(o.b)("p",null,Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://kubernetes.io/docs/concepts/extend-kubernetes/operator/"}),"K8s operator"),"\nis a pattern in K8s to manage applications, it's a handy way to manage application's lifecycle out-of-box on K8s.\nYou define several CRDs and some controllers to monitor and mutate the state of the application based on the CRD definition."),Object(o.b)("p",null,"For example in ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/GoogleCloudPlatform/spark-on-k8s-operator"}),"spark-k8s-operator"),",\nit defines a CRD called ",Object(o.b)("inlineCode",{parentName:"p"},"SparkApplication"),", the controller watches the events of add/update/delete of this CRD\nand trigger corresponding actions on event notifications. The ",Object(o.b)("inlineCode",{parentName:"p"},"SparkApplication")," looks like\n",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/GoogleCloudPlatform/spark-on-k8s-operator/blob/master/examples/spark-pi.yaml"}),"this example"),". There\nare a lot more popular operators, such as ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/GoogleCloudPlatform/flink-on-k8s-operator"}),"flink-k8s-operator"),",\n",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/kubeflow/tf-operator"}),"tf-operator"),", ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/kubeflow/pytorch-operator"}),"pytorch-operator"),", etc. "),Object(o.b)("p",null,"Use Spark as an example. YuniKorn is able to schedule resources for all pods in K8s, that seamlessly supports Spark. It\nworks with ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://spark.apache.org/docs/latest/running-on-kubernetes.html"}),"native Spark on K8s"),", or\n",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/GoogleCloudPlatform/spark-on-k8s-operator/blob/master/docs/design.md#architecture"}),"spark on K8s with operator"),",\nyou'll find the difference from the design architecture chart from the given link. To support native Spark on K8s,\nYuniKorn reads pods' spec and group Spark pods by a label-selector, based on ",Object(o.b)("inlineCode",{parentName:"p"},"spark-app-selector"),".\nThe operator approach gives us more context about the Spark job, such as a better understanding about job state.\nBut all these info requires us to look at ",Object(o.b)("inlineCode",{parentName:"p"},"SparkApplication")," CRD, currently, there is no neat way to\nadd such functionality. That's why we need to design a flexible approach to support 3rd party operators\n(retrieving info from their CRDs), so we can easily integrate with other operators with small effort."),Object(o.b)("h2",{id:"design"},"Design"),Object(o.b)("p",null,"The key issue here is we need a app-management interface, that can be easily extended.\nIt needs to be decoupled with existing scheduling logic. For each operator, we create a service to manage this type app's lifecycle,\nand communicate with the scheduling cache independently. The high-level design looks like below:"),Object(o.b)("p",null,Object(o.b)("img",Object(n.a)({parentName:"p"},{src:"/img/pluggable-app-mgmt.jpg",alt:"Pluggable App Management"}))),Object(o.b)("p",null,"Where"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"AppManagementService")," is a composite set of services that can be managed together."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"AppManager")," is a specific app management service for a particular type of application. In each service, it has\naccess to K8s clients, such as informers, listers, in order to monitor CRD events. And it collects necessary info\nand talk with scheduler cache through ",Object(o.b)("inlineCode",{parentName:"li"},"AMProtocol"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"APIProvider")," encapsulate a set of useful APIs that can be shared, such as kube-client, pod/node/storage informers, etc.\nEach of such informers, it can be shared with multiple app managers, to avoid the overhead."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"AMProtocol")," defines the basic interaction contract between app manager and the scheduler cache, that helps the cache\nto performs app lifecycle management without understanding what type of the application it is.")),Object(o.b)("p",null,"In the upon chart, the AppManagementService has 2 services, the ",Object(o.b)("em",{parentName:"p"},"general")," one is managing normal applications, that\nrecognizes applications by pod labels; the ",Object(o.b)("em",{parentName:"p"},"spark-k8s-operator")," one watches ",Object(o.b)("inlineCode",{parentName:"p"},"SparkApplication")," CRD and manage jobs'\nlifecycle defined by this CRD."))}s.isMDXComponent=!0},206:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return h}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=r.a.createContext({}),s=function(e){var t=r.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},b=function(e){var t=s(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),b=s(a),d=n,h=b["".concat(i,".").concat(d)]||b[d]||u[d]||o;return a?r.a.createElement(h,p(p({ref:t},l),{},{components:a})):r.a.createElement(h,p({ref:t},l))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=d;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:n,i[1]=p;for(var l=2;l<o;l++)i[l]=a[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"}}]);