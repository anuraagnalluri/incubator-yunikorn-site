(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{157:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return b}));var r=n(2),a=n(9),i=(n(0),n(206)),o={id:"env_setup",title:"Environment Setup"},c={id:"version-0.8.0/setup/env_setup",isDocsHomePage:!1,title:"Environment Setup",description:"\x3c!--",source:"@site/versioned_docs/version-0.8.0/setup/env_setup.md",permalink:"/docs/setup/env_setup",version:"0.8.0",sidebar:"version-0.8.0/docs",previous:{title:"Deployment Guide",permalink:"/docs/setup/deployment"},next:{title:"Queue Config",permalink:"/docs/configuration/queue_config"}},l=[{value:"Local Kubernetes cluster using Docker Desktop",id:"local-kubernetes-cluster-using-docker-desktop",children:[{value:"Installation",id:"installation",children:[]},{value:"Deploy and access dashboard",id:"deploy-and-access-dashboard",children:[]},{value:"Access local Kubernetes cluster",id:"access-local-kubernetes-cluster",children:[]}]},{value:"Local Kubernetes cluster with minikube",id:"local-kubernetes-cluster-with-minikube",children:[{value:"Installing minikube",id:"installing-minikube",children:[]},{value:"Deploy and access the cluster",id:"deploy-and-access-the-cluster",children:[]},{value:"Build impact",id:"build-impact",children:[]}]},{value:"Debug code locally",id:"debug-code-locally",children:[]},{value:"Access remote Kubernetes cluster",id:"access-remote-kubernetes-cluster",children:[]}],s={rightToc:l};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"There are several ways to setup a local development environment for Kubernetes, the two most common ones are ",Object(i.b)("inlineCode",{parentName:"p"},"Minikube")," (",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://kubernetes.io/docs/setup/minikube/"}),"docs"),") and ",Object(i.b)("inlineCode",{parentName:"p"},"docker-desktop"),".\n",Object(i.b)("inlineCode",{parentName:"p"},"Minikube")," provisions a local Kubernetes cluster on several Virtual Machines (via VirtualBox or something similar). ",Object(i.b)("inlineCode",{parentName:"p"},"docker-desktop")," on the other hand, sets up Kubernetes cluster in docker containers."),Object(i.b)("h2",{id:"local-kubernetes-cluster-using-docker-desktop"},"Local Kubernetes cluster using Docker Desktop"),Object(i.b)("p",null,"In this tutorial, we will base all the installs on Docker Desktop.\nEven in this case we can use a lightweight ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"#local-kubernetes-cluster-with-minikube"}),"minikube")," setup which gives the same functionality with less impact."),Object(i.b)("h3",{id:"installation"},"Installation"),Object(i.b)("p",null,"Download and install ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.docker.com/products/docker-desktop"}),"Docker-Desktop")," on your laptop. Latest version has an embedded version of Kubernetes so no additional install is needed.\nJust simply follow the instruction ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://docs.docker.com/docker-for-mac/#kubernetes"}),"here")," to get Kubernetes up and running within docker-desktop."),Object(i.b)("p",null,"Once Kubernetes is started in docker desktop, you should see something similar below:"),Object(i.b)("p",null,Object(i.b)("img",Object(r.a)({parentName:"p"},{src:"/img/docker-desktop.png",alt:"Kubernetes in Docker Desktop"}))),Object(i.b)("p",null,"This means that:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Kubernetes is running."),Object(i.b)("li",{parentName:"ol"},"the command line tool ",Object(i.b)("inlineCode",{parentName:"li"},"kubctl")," is installed in the ",Object(i.b)("inlineCode",{parentName:"li"},"/usr/local/bin")," directory."),Object(i.b)("li",{parentName:"ol"},"the Kubernetes context is set to ",Object(i.b)("inlineCode",{parentName:"li"},"docker-desktop"),".")),Object(i.b)("h3",{id:"deploy-and-access-dashboard"},"Deploy and access dashboard"),Object(i.b)("p",null,"After setting up the local Kubernetes you need to deploy the dashboard using the following steps: "),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"follow the instructions in ",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/kubernetes/dashboard"}),"Kubernetes dashboard doc")," to deploy the dashboard."),Object(i.b)("li",{parentName:"ol"},"start the Kubernetes proxy in the background from a terminal to get access on the dashboard on the local host:   ",Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-shell",metastring:"script",script:!0}),"kubectl proxy &\n"))),Object(i.b)("li",{parentName:"ol"},"access the dashboard at the following URL: ",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"http://localhost:8001/api/v1/namespaces/kube-system/services/https:kubernetes-dashboard:/proxy/#!/login"}),"clickable link"))),Object(i.b)("h3",{id:"access-local-kubernetes-cluster"},"Access local Kubernetes cluster"),Object(i.b)("p",null,"The dashboard as deployed in the previous step requires a token or config to sign in. Here we use the token to sign in. The token is generated automatically and can be retrieved from the system."),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"retrieve the name of the dashboard token:",Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-shell",metastring:"script",script:!0}),"kubectl -n kube-system get secret | grep kubernetes-dashboard-token\n"))),Object(i.b)("li",{parentName:"ol"},"retrieve the content of the token, note that the token name ends with a random 5 character code and needs to be replaced with the result of step 1. As an example:  ",Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-shell",metastring:"script",script:!0}),"kubectl -n kube-system describe secret kubernetes-dashboard-token-tf6n8\n"))),Object(i.b)("li",{parentName:"ol"},"copy the token value which is part of the ",Object(i.b)("inlineCode",{parentName:"li"},"Data")," section with the tag ",Object(i.b)("inlineCode",{parentName:"li"},"token"),"."),Object(i.b)("li",{parentName:"ol"},"select the ",Object(i.b)("strong",{parentName:"li"},"Token")," option in the dashboard web UI:",Object(i.b)("br",null),Object(i.b)("img",Object(r.a)({parentName:"li"},{src:"/img/dashboard_token_select.png",alt:"Token Access in dashboard"}))),Object(i.b)("li",{parentName:"ol"},"paste the token value into the input box and sign in:",Object(i.b)("br",null),Object(i.b)("img",Object(r.a)({parentName:"li"},{src:"/img/dashboard_secret.png",alt:"Token Access in dashboard"})))),Object(i.b)("h2",{id:"local-kubernetes-cluster-with-minikube"},"Local Kubernetes cluster with minikube"),Object(i.b)("p",null,"Minikube can be added to an existing Docker Desktop install. Minikube can either use the pre-installed hypervisor or use a hypervisor of choice. These instructions use ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/moby/hyperkit"}),"HyperKit")," which is embedded in Docker Desktop.   "),Object(i.b)("p",null,"If you want to use a different hypervisor then HyperKit make sure that you follow the generic minikube install instructions. Do not forget to install the correct driver for the chosen hypervisor if required.\nThe basic instructions are provided in the ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://kubernetes.io/docs/tasks/tools/install-minikube/"}),"minikube install")," instructions."),Object(i.b)("p",null,"Check hypervisor\u2028 Docker Desktop should have already installed HyperKit. In a terminal run: ",Object(i.b)("inlineCode",{parentName:"p"},"hyperkit")," to confirm. Any response other than ",Object(i.b)("inlineCode",{parentName:"p"},"hyperkit: command not found")," confirms that HyperKit is installed and on the path. If it is not found you can choose a different hypervisor or fix the Docker Desktop install."),Object(i.b)("h3",{id:"installing-minikube"},"Installing minikube"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"install minikube, you can either use brew or directly via these steps: ",Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-shell",metastring:"script",script:!0}),"\u2028curl -Lo minikube https://storage.googleapis.com/minikube/releases/latest/minikube-darwin-amd64\nchmod +x minikube\u2028\nsudo mv minikube /usr/local/bin\n"))),Object(i.b)("li",{parentName:"ol"},"install HyperKit driver\u2028 (required), you can either use brew or directly via these steps:",Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-shell",metastring:"script",script:!0}),"curl -LO https://storage.googleapis.com/minikube/releases/latest/docker-machine-driver-hyperkit\nsudo install -o root -g wheel -m 4755 docker-machine-driver-hyperkit /usr/local/bin/\n"))),Object(i.b)("li",{parentName:"ol"},"update the minikube config to default to the HyperKit install\u2028 ",Object(i.b)("inlineCode",{parentName:"li"},"minikube config set vm-driver hyperkit")),Object(i.b)("li",{parentName:"ol"},"change docker desktop to use minikube for Kubernetes:",Object(i.b)("br",null),Object(i.b)("img",Object(r.a)({parentName:"li"},{src:"/img/docker-dektop-minikube.png",alt:"Kubernetes in Docker Desktop: minikube setting"})))),Object(i.b)("h3",{id:"deploy-and-access-the-cluster"},"Deploy and access the cluster"),Object(i.b)("p",null,"After the installation is done you can start a new cluster."),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"start the minikube cluster: ",Object(i.b)("inlineCode",{parentName:"li"},"minikube start --kubernetes-version v1.14.2")),Object(i.b)("li",{parentName:"ol"},"start the minikube dashboard: ",Object(i.b)("inlineCode",{parentName:"li"},"\u2028minikube dashboard &"))),Object(i.b)("h3",{id:"build-impact"},"Build impact"),Object(i.b)("p",null,"When you create images make sure that the build is run after pointing it to the right environment.\nWithout setting the enviromnent minikube might not find the docker images when deploying the scheduler."),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"make sure minikube is started"),Object(i.b)("li",{parentName:"ol"},"in the terminal where you wll run the build execute: ",Object(i.b)("inlineCode",{parentName:"li"},"eval $(minikube docker-env)")),Object(i.b)("li",{parentName:"ol"},"run the image build from the yunikorn-k8shim repository root: ",Object(i.b)("inlineCode",{parentName:"li"},"make image")),Object(i.b)("li",{parentName:"ol"},"deploy the scheduler as per the normal instructions.")),Object(i.b)("h2",{id:"debug-code-locally"},"Debug code locally"),Object(i.b)("p",null,"Note, this instruction requires you have GoLand IDE for development."),Object(i.b)("p",null,'In GoLand, go to yunikorn-k8shim project. Then click "Run" -> "Debug..." -> "Edit Configuration..." to get the pop-up configuration window.\nNote, you need to click "+" to create a new profile if the ',Object(i.b)("inlineCode",{parentName:"p"},"Go Build")," option is not available at the first time."),Object(i.b)("p",null,Object(i.b)("img",Object(r.a)({parentName:"p"},{src:"/img/goland_debug.jpg",alt:"Debug Configuration"}))),Object(i.b)("p",null,"The highlighted fields are the configurations you need to add. These include:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Run Kind: package"),Object(i.b)("li",{parentName:"ul"},"Package path: point to the path of ",Object(i.b)("inlineCode",{parentName:"li"},"pkg/shim")," package"),Object(i.b)("li",{parentName:"ul"},"Working directory: point to the path of the ",Object(i.b)("inlineCode",{parentName:"li"},"conf")," directory, this is where the program loads configuration file from"),Object(i.b)("li",{parentName:"ul"},"Program arguments: specify the arguments to run the program, such as ",Object(i.b)("inlineCode",{parentName:"li"},"-kubeConfig=/path/to/.kube/config -interval=1s -clusterId=mycluster -clusterVersion=0.1 -name=yunikorn -policyGroup=queues -logEncoding=console -logLevel=-1"),".\nNote, you need to replace ",Object(i.b)("inlineCode",{parentName:"li"},"/path/to/.kube/config")," with the local path to the kubeconfig file. And if you want to change or add more options, you can run ",Object(i.b)("inlineCode",{parentName:"li"},"_output/bin/k8s-yunikorn-scheduler -h")," to find out.")),Object(i.b)("p",null,'Once the changes are done, click "Apply", then "Debug". You will need to set proper breakpoints in order to debug the program.'),Object(i.b)("h2",{id:"access-remote-kubernetes-cluster"},"Access remote Kubernetes cluster"),Object(i.b)("p",null,"This setup assumes you have already installed a remote Kubernetes cluster.\nFor a generic view on how to access a multiple cluster and integrate it follow the ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://kubernetes.io/docs/tasks/access-application-cluster/configure-access-multiple-clusters/"}),"accessing multiple clusters")," documentation from Kubernetes."),Object(i.b)("p",null,"Or follow these simplified steps:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"get the Kubernetes ",Object(i.b)("inlineCode",{parentName:"li"},"config")," file from remote cluster, copy it to the local machine and give it a unique name i.e. ",Object(i.b)("inlineCode",{parentName:"li"},"config-remote")),Object(i.b)("li",{parentName:"ol"},"save the ",Object(i.b)("inlineCode",{parentName:"li"},"KUBECONFIG")," environment variable (if set)",Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-shell",metastring:"script",script:!0}),"export KUBECONFIG_SAVED=$KUBECONFIG\n"))),Object(i.b)("li",{parentName:"ol"},"add the new file to the environment variable",Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-shell",metastring:"script",script:!0}),"export KUBECONFIG=$KUBECONFIG:config-remote\n"))),Object(i.b)("li",{parentName:"ol"},"run the command ",Object(i.b)("inlineCode",{parentName:"li"},"kubectl config view")," to check that both configs can be accessed"),Object(i.b)("li",{parentName:"ol"},"switch context using ",Object(i.b)("inlineCode",{parentName:"li"},"kubectl config use-context my-remote-cluster")),Object(i.b)("li",{parentName:"ol"},"confirm that the current context is now switched to the remote cluster config:",Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-text"}),"kubectl config get-contexts\nCURRENT   NAME                   CLUSTER                      AUTHINFO             NAMESPACE\n          docker-for-desktop     docker-for-desktop-cluster   docker-for-desktop\n*         my-remote-cluster      kubernetes                   kubernetes-admin\n")))),Object(i.b)("p",null,"More docs can be found ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://kubernetes.io/docs/concepts/configuration/organize-cluster-access-kubeconfig/"}),"here"),"  "))}b.isMDXComponent=!0},206:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),b=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=b(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=b(n),d=r,m=u["".concat(o,".").concat(d)]||u[d]||p[d]||i;return n?a.a.createElement(m,c(c({ref:t},s),{},{components:n})):a.a.createElement(m,c({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var s=2;s<i;s++)o[s]=n[s];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);