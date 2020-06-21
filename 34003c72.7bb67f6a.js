(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{155:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return u})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return c}));var a=n(2),r=n(9),i=(n(0),n(206)),o={id:"queue_config",title:"Queue Config"},u={id:"version-0.8.0/configuration/queue_config",isDocsHomePage:!1,title:"Queue Config",description:"\x3c!--",source:"@site/versioned_docs/version-0.8.0/configuration/queue_config.md",permalink:"/docs/configuration/queue_config",version:"0.8.0",sidebar:"version-0.8.0/docs",previous:{title:"Environment Setup",permalink:"/docs/setup/env_setup"},next:{title:"Placement Rules",permalink:"/docs/configuration/placement_rules"}},l=[{value:"Configuration",id:"configuration",children:[]},{value:"Partitions",id:"partitions",children:[{value:"Queues",id:"queues",children:[]},{value:"Placement rules",id:"placement-rules",children:[]},{value:"Limits",id:"limits",children:[]},{value:"Resources",id:"resources",children:[]}]}],s={rightToc:l};function c(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"yunikorn-partition-and-queue-configuration"},"YuniKorn Partition and Queue Configuration"),Object(i.b)("p",null,"The basis for the queue configuration is given in the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/setup/configure_scheduler#queue-configuration"}),"scheduler design document"),"."),Object(i.b)("p",null,"This document provides the generic queue configuration.\nIt references both the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/configuration/acls"}),"Access control lists")," and ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/configuration/placement_rules"}),"placement rule")," documentation."),Object(i.b)("p",null,"This document explains how to create the partition and queue configuration for the scheduler with examples."),Object(i.b)("p",null,"The scheduler relies on the shim to reliably provide user information as part of the application submission.\nIn the current shim there is no reliable way to identify the user and the groups the user belongs to.\nThe user and group information provided by the shim is incomplete in the best case.\nThis shim limitation impacts the behaviour of user based limits and access control in the scheduler.\nThe current implementation only provides the framework in the scheduler and will not be fully functional until the shim changes are added. "),Object(i.b)("h2",{id:"configuration"},"Configuration"),Object(i.b)("p",null,"The configuration file for the scheduler that is described here only provides the configuration for the partitions and queues."),Object(i.b)("p",null,"By default we use the file called ",Object(i.b)("inlineCode",{parentName:"p"},"queues.yaml")," in our deployments.\nThe filename can be changed via the command line flag ",Object(i.b)("inlineCode",{parentName:"p"},"policyGroup")," of the scheduler.\nChanging the filename must be followed by corresponding changes in the deployment details, either the ",Object(i.b)("inlineCode",{parentName:"p"},"configmap")," or the file included in the docker container."),Object(i.b)("p",null,"The example file for the configuration is located in ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"../config/queues.yaml"}),"config/queues.yaml"),".  "),Object(i.b)("h2",{id:"partitions"},"Partitions"),Object(i.b)("p",null,"Partitions are the top level of the scheduler configuration.\nThere can be more than one partition defined in the configuration."),Object(i.b)("p",null,"Basic structure for the partition definition in the configuration:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"partitions:\n  - name: <name of the 1st partition>\n  - name: <name of the 2nd partition>\n")),Object(i.b)("p",null,"The default name for the partition is ",Object(i.b)("inlineCode",{parentName:"p"},"default"),".\nThe partition definition contains the full configuration for the scheduler for a particular shim.\nEach shim uses its own unique partition."),Object(i.b)("p",null,"The partition must have at least the following keys defined:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"name"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"#queues"}),"queues"))),Object(i.b)("p",null,"The queues configuration is explained below."),Object(i.b)("p",null,"Optionally the following keys can be defined for a partition:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"#placement-rules"}),"placementrules")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"#limits"}),"limits")),Object(i.b)("li",{parentName:"ul"},"preemption")),Object(i.b)("p",null,"Placement rules and limits are explained in their own chapters\nThe preemption key can currently have only one sub key: ",Object(i.b)("em",{parentName:"p"},"enabled"),".\nThis boolean value defines the preemption behaviour for the whole partition."),Object(i.b)("p",null,"The default value for ",Object(i.b)("em",{parentName:"p"},"enabled")," is ",Object(i.b)("em",{parentName:"p"},"false"),".\nAllowed values: ",Object(i.b)("em",{parentName:"p"},"true")," or ",Object(i.b)("em",{parentName:"p"},"false"),", any other value will cause a parse error."),Object(i.b)("p",null,"Example ",Object(i.b)("inlineCode",{parentName:"p"},"partition")," yaml entry with ",Object(i.b)("em",{parentName:"p"},"preemption")," flag:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"partitions:\n  - name: <name of the partition>\n    preemption:\n      enabled: true\n")),Object(i.b)("p",null,"NOTE:\nCurrently the Kubernetes unique shim does not support any other partition than the ",Object(i.b)("inlineCode",{parentName:"p"},"default")," partition..\nThis has been logged as an ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://issues.apache.org/jira/browse/YUNIKORN-22"}),"jira")," for the shim."),Object(i.b)("h3",{id:"queues"},"Queues"),Object(i.b)("p",null,"The ",Object(i.b)("em",{parentName:"p"},"queues")," entry is the main configuration element.\nIt defines a hierarchical structure for the queues."),Object(i.b)("p",null,"It can have a ",Object(i.b)("inlineCode",{parentName:"p"},"root")," queue defined but it is not a required element.\nIf the ",Object(i.b)("inlineCode",{parentName:"p"},"root")," queue is not defined the configuration parsing will insert the root queue for consistency.\nThe insertion of the root queue is triggered by:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"If the configuration has more than one queue defined at the top level a root queue is inserted."),Object(i.b)("li",{parentName:"ul"},"If there is only one queue defined at the top level and it is not called ",Object(i.b)("inlineCode",{parentName:"li"},"root")," a root queue is inserted.  ")),Object(i.b)("p",null,"The defined queue or queues will become a child queue of the inserted ",Object(i.b)("inlineCode",{parentName:"p"},"root")," queue."),Object(i.b)("p",null,"Basic ",Object(i.b)("inlineCode",{parentName:"p"},"queues")," yaml entry with sub queue:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"queues:\n- name: <name of the queue>\n  queues:\n  - name: <name of the queue>\n")),Object(i.b)("p",null,"Supported parameters for the queues:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"name"),Object(i.b)("li",{parentName:"ul"},"parent"),Object(i.b)("li",{parentName:"ul"},"queues"),Object(i.b)("li",{parentName:"ul"},"properties"),Object(i.b)("li",{parentName:"ul"},"adminacl"),Object(i.b)("li",{parentName:"ul"},"submitacl"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"#resources"}),"resources")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"#limits"}),"limits"))),Object(i.b)("p",null,"Each queue must have a ",Object(i.b)("em",{parentName:"p"},"name"),".\nThe name of a queue must be unique at the level that the queue is defined.\nSince the queue structure is fully hierarchical queues at different points in the hierarchy may have the same name.\nAs an example: the queue structure ",Object(i.b)("inlineCode",{parentName:"p"},"root.testqueue")," and ",Object(i.b)("inlineCode",{parentName:"p"},"root.parent.testqueue"),' is a valid structure.\nA queue cannot contain a dot "." character as that character is used to separate the queues in the hierarchy.\nIf the name is not unique for the queue in the configuration or contains a dot a parsing error is generated and the configuration is rejected. '),Object(i.b)("p",null,"Queues in the structure will automatically get a type assigned.\nThe type of the queue is based on the fact that the queue has children or sub queues.\nThe two types of queues are:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"parent"),Object(i.b)("li",{parentName:"ul"},"leaf")),Object(i.b)("p",null,"Applications can only be assigned to a ",Object(i.b)("em",{parentName:"p"},"leaf")," queue.\nA queue that has a child or sub queue in the configuration is automatically a ",Object(i.b)("em",{parentName:"p"},"parent")," queue.\nIf a queue does not have a sub the queue in the configuration it is a ",Object(i.b)("em",{parentName:"p"},"leaf")," queue, unless the ",Object(i.b)("inlineCode",{parentName:"p"},"parent")," parameter is set to ",Object(i.b)("em",{parentName:"p"},"true"),".\nTrying to override a ",Object(i.b)("em",{parentName:"p"},"parent")," queue type in the configuration will cause a parsing error of the configuration.   "),Object(i.b)("p",null,"Sub queues for a parent queue are defined under the ",Object(i.b)("inlineCode",{parentName:"p"},"queues")," entry.\nThe ",Object(i.b)("inlineCode",{parentName:"p"},"queues")," entry is a recursive entry for a queue level and uses the exact same set of parameters.  "),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"properties")," parameter is a simple key value pair list.\nThe list provides a simple set of properties for the queue.\nThere are no limitations on the key or value values, anything is allowed.\nCurrently the property list is not used in the scheduler and is only provided for future expansion like the option to turn on or off preemption on a queue or define a sorting order specific for a queue.  "),Object(i.b)("p",null,"Access to a queue is set via the ",Object(i.b)("inlineCode",{parentName:"p"},"adminacl")," for administrative actions and for submitting an application via the ",Object(i.b)("inlineCode",{parentName:"p"},"submitacl")," entry.\nACLs are documented in the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/configuration/acls"}),"Access control lists")," document."),Object(i.b)("p",null,"Queue resource limits are set via the ",Object(i.b)("inlineCode",{parentName:"p"},"resources")," parameter.\nUser and group limits are set via the ",Object(i.b)("inlineCode",{parentName:"p"},"limits")," parameter.\nAs both entries are complex configuration entries they are explained in ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"#resources"}),"resources")," and ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"#limits"}),"limits")," below."),Object(i.b)("p",null,"An example configuration of a queue ",Object(i.b)("inlineCode",{parentName:"p"},"root.namespaces")," as a ",Object(i.b)("em",{parentName:"p"},"parent")," queue with limits:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"partitions:\n  - name: default\n    queues:\n      - name: namespaces\n        parent: true\n        resources:\n          guaranteed:\n            {memory: 1000, vcore: 10}\n          max:\n            {memory: 10000, vcore: 100}\n")),Object(i.b)("h3",{id:"placement-rules"},"Placement rules"),Object(i.b)("p",null,"The placement rules are defined and documented in the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/configuration/placement_rules"}),"placement rule")," document."),Object(i.b)("p",null,"Each partition can have only one set of placement rules defined.\nIf no rules are defined the placement manager is not started and each application ",Object(i.b)("em",{parentName:"p"},"must")," have a queue set on submit.  "),Object(i.b)("h3",{id:"limits"},"Limits"),Object(i.b)("p",null,"Limits define a set of limit objects for a partition or queue.\nIt can be set on either the partition or on a queue at any level."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"limits:\n  - limit: <description>\n  - limit: <description>\n")),Object(i.b)("p",null,"A limit object is a complex configuration object.\nIt defines one limit for a set of users and or groups.\nMultiple independent limits can be set as part of one ",Object(i.b)("inlineCode",{parentName:"p"},"limits")," entry on a queue or partition.\nUsers and or groups that are not part of the limit setting will not be limited."),Object(i.b)("p",null,"A sample limits entry:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),'limits:\n  - limit: <description>\n    users:\n    - <user name or "*"">\n    - <user name>\n    groups:\n    - <group name or "*"">\n    - <group name>\n    maxapplications: <1..maxint>\n    maxresources:\n      <resource name 1>: <0..maxint>\n      <resource name 2>: <0..maxint>\n')),Object(i.b)("p",null,"Limits are applied recursively in the case of a queue limit.\nThis means that a limit on the ",Object(i.b)("inlineCode",{parentName:"p"},"root")," queue is an overall limit in the cluster for the user or group.\nA ",Object(i.b)("inlineCode",{parentName:"p"},"root")," queue limit is thus also equivalent with the ",Object(i.b)("inlineCode",{parentName:"p"},"partition")," limit."),Object(i.b)("p",null,"The limit object parameters:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"limit"),Object(i.b)("li",{parentName:"ul"},"users"),Object(i.b)("li",{parentName:"ul"},"groups"),Object(i.b)("li",{parentName:"ul"},"maxapplications"),Object(i.b)("li",{parentName:"ul"},"maxresources")),Object(i.b)("p",null,"The ",Object(i.b)("em",{parentName:"p"},"limit")," parameter is an optional description of the limit entry.\nIt is not used for anything but making the configuration understandable and readable. "),Object(i.b)("p",null,"The ",Object(i.b)("em",{parentName:"p"},"users")," and ",Object(i.b)("em",{parentName:"p"},"groups")," that can be configured can be one of two types:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},'a star "*" '),Object(i.b)("li",{parentName:"ul"},"a list of users or groups.")),Object(i.b)("p",null,'If the entry for users or groups contains more than one (1) entry it is always considered a list of either users or groups.\nThe star "*" is the wildcard character and matches all users or groups.\nDuplicate entries in the lists are ignored and do not cause a parsing error.\nSpecifying a star beside other list elements is not allowed.'),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"maxapplications")," is an unsigned integer value, larger than 1, which allows you to limit the number of running applications for the configured user or group.\nSpecifying a zero maximum applications limit is not allowed as it would implicitly deny access.\nDenying access must be handled via the ACL entries.  "),Object(i.b)("p",null,"The ",Object(i.b)("em",{parentName:"p"},"maxresources")," parameter can be used to specify a limit for one or more resources.\nThe ",Object(i.b)("em",{parentName:"p"},"maxresources")," uses the same syntax as the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"#resources"}),"resources")," parameter for the queue.\nResources that are not specified in the list are not limited.\nA resource limit can be set to 0.\nThis prevents the user or group from requesting the specified resource even though the queue or partition has that specific resource available.",Object(i.b)("br",{parentName:"p"}),"\n","Specifying an overall resource limit of zero is not allowed.\nThis means that at least one of the resources specified in the limit must be greater than zero."),Object(i.b)("p",null,"If a resource is not available on a queue the maximum resources on a queue definition should be used.\nSpecifying a limit that is effectively zero, ",Object(i.b)("em",{parentName:"p"},"maxapplications")," is zero and all resource limits are zero, is not allowed and will cause a parsing error."),Object(i.b)("p",null,"A limit is per user or group.\nIt is ",Object(i.b)("em",{parentName:"p"},"not")," a combined limit for all the users or groups together."),Object(i.b)("p",null,"As an example: "),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),'limit: "example entry"\nmaxapplications: 10\nusers:\n- sue\n- bob\n')),Object(i.b)("p",null,"In this case both the users ",Object(i.b)("inlineCode",{parentName:"p"},"sue")," and ",Object(i.b)("inlineCode",{parentName:"p"},"bob")," are allowed to run 10 applications."),Object(i.b)("h3",{id:"resources"},"Resources"),Object(i.b)("p",null,"The resources entry for the queue can set the ",Object(i.b)("em",{parentName:"p"},"guaranteed")," and or ",Object(i.b)("em",{parentName:"p"},"maximum")," resources for a queue.\nResource limits are checked recursively.\nThe usage of a leaf queue is the sum of all assigned resources for that queue.\nThe usage of a parent queue is the sum of the usage of all queues, leafs and parents, below the parent queue. "),Object(i.b)("p",null,"The root queue, when defined, cannot have any resource limit set.\nIf the root queue has any limit set a parsing error will occur.\nThe maximum resource limit for the root queue is automatically equivalent to the cluster size.\nThere is no guaranteed resource setting for the root queue."),Object(i.b)("p",null,"Maximum resources when configured place a hard limit on the size of all allocations that can be assigned to a queue at any point in time.\nA maximum resource can be set to 0 which makes the resource not available to the queue.\nGuaranteed resources are used in calculating the share of the queue and during allocation.\nIt is used as one of the inputs for deciding which queue to give the allocation to.\nPreemption uses the ",Object(i.b)("em",{parentName:"p"},"guaranteed")," resource of a queue as a base which a queue cannot go below."),Object(i.b)("p",null,"Basic ",Object(i.b)("inlineCode",{parentName:"p"},"resources")," yaml entry:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"resources:\n  guaranteed:\n    <resource name 1>: <0..maxint>\n    <resource name 2>: <0..maxint>\n  max:\n    <resource name 1>: <0..maxint>\n    <resource name 2>: <0..maxint>\n")),Object(i.b)("p",null,"Resources that are not specified in the list are not limited, for max resources, or guaranteed in the case of guaranteed resources. "))}c.isMDXComponent=!0},206:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return h}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),c=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},p=function(e){var t=c(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=c(n),m=a,h=p["".concat(o,".").concat(m)]||p[m]||b[m]||i;return n?r.a.createElement(h,u(u({ref:t},s),{},{components:n})):r.a.createElement(h,u({ref:t},s))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u.mdxType="string"==typeof e?e:a,o[1]=u;for(var s=2;s<i;s++)o[s]=n[s];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);