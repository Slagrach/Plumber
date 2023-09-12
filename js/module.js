/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@fancyapps/ui/dist/index.esm.js":
/*!******************************************************!*\
  !*** ./node_modules/@fancyapps/ui/dist/index.esm.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Carousel": () => (/* binding */ Z),
/* harmony export */   "Fancybox": () => (/* binding */ _t),
/* harmony export */   "Panzoom": () => (/* binding */ R)
/* harmony export */ });
/* provided dependency */ var console = __webpack_require__(/*! ./node_modules/console-browserify/index.js */ "./node_modules/console-browserify/index.js");
const t=(t,e=1e4)=>(t=parseFloat(t+"")||0,Math.round((t+Number.EPSILON)*e)/e),e=function(t){if(!(t&&t instanceof Element&&t.offsetParent))return!1;const e=t.scrollHeight>t.clientHeight,i=window.getComputedStyle(t).overflowY,n=-1!==i.indexOf("hidden"),s=-1!==i.indexOf("visible");return e&&!n&&!s},i=function(t,n=void 0){return!(!t||t===document.body||n&&t===n)&&(e(t)?t:i(t.parentElement,n))},n=function(t){var e=(new DOMParser).parseFromString(t,"text/html").body;if(e.childElementCount>1){for(var i=document.createElement("div");e.firstChild;)i.appendChild(e.firstChild);return i}return e.firstChild},s=t=>`${t||""}`.split(" ").filter((t=>!!t)),o=(t,e,i)=>{s(e).forEach((e=>{t&&t.classList.toggle(e,i||!1)}))};class a{constructor(t){Object.defineProperty(this,"pageX",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"pageY",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"clientX",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"clientY",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"id",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"time",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"nativePointer",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.nativePointer=t,this.pageX=t.pageX,this.pageY=t.pageY,this.clientX=t.clientX,this.clientY=t.clientY,this.id=self.Touch&&t instanceof Touch?t.identifier:-1,this.time=Date.now()}}const r={passive:!1};class l{constructor(t,{start:e=(()=>!0),move:i=(()=>{}),end:n=(()=>{})}){Object.defineProperty(this,"element",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"startCallback",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"moveCallback",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"endCallback",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"currentPointers",{enumerable:!0,configurable:!0,writable:!0,value:[]}),Object.defineProperty(this,"startPointers",{enumerable:!0,configurable:!0,writable:!0,value:[]}),this.element=t,this.startCallback=e,this.moveCallback=i,this.endCallback=n;for(const t of["onPointerStart","onTouchStart","onMove","onTouchEnd","onPointerEnd","onWindowBlur"])this[t]=this[t].bind(this);this.element.addEventListener("mousedown",this.onPointerStart,r),this.element.addEventListener("touchstart",this.onTouchStart,r),this.element.addEventListener("touchmove",this.onMove,r),this.element.addEventListener("touchend",this.onTouchEnd),this.element.addEventListener("touchcancel",this.onTouchEnd)}onPointerStart(t){if(!t.buttons||0!==t.button)return;const e=new a(t);this.currentPointers.some((t=>t.id===e.id))||this.triggerPointerStart(e,t)&&(window.addEventListener("mousemove",this.onMove),window.addEventListener("mouseup",this.onPointerEnd),window.addEventListener("blur",this.onWindowBlur))}onTouchStart(t){for(const e of Array.from(t.changedTouches||[]))this.triggerPointerStart(new a(e),t);window.addEventListener("blur",this.onWindowBlur)}onMove(t){const e=this.currentPointers.slice(),i="changedTouches"in t?Array.from(t.changedTouches||[]).map((t=>new a(t))):[new a(t)],n=[];for(const t of i){const e=this.currentPointers.findIndex((e=>e.id===t.id));e<0||(n.push(t),this.currentPointers[e]=t)}n.length&&this.moveCallback(t,this.currentPointers.slice(),e)}onPointerEnd(t){t.buttons>0&&0!==t.button||(this.triggerPointerEnd(t,new a(t)),window.removeEventListener("mousemove",this.onMove),window.removeEventListener("mouseup",this.onPointerEnd),window.removeEventListener("blur",this.onWindowBlur))}onTouchEnd(t){for(const e of Array.from(t.changedTouches||[]))this.triggerPointerEnd(t,new a(e))}triggerPointerStart(t,e){return!!this.startCallback(e,t,this.currentPointers.slice())&&(this.currentPointers.push(t),this.startPointers.push(t),!0)}triggerPointerEnd(t,e){const i=this.currentPointers.findIndex((t=>t.id===e.id));i<0||(this.currentPointers.splice(i,1),this.startPointers.splice(i,1),this.endCallback(t,e,this.currentPointers.slice()))}onWindowBlur(){this.clear()}clear(){for(;this.currentPointers.length;){const t=this.currentPointers[this.currentPointers.length-1];this.currentPointers.splice(this.currentPointers.length-1,1),this.startPointers.splice(this.currentPointers.length-1,1),this.endCallback(new Event("touchend",{bubbles:!0,cancelable:!0,clientX:t.clientX,clientY:t.clientY}),t,this.currentPointers.slice())}}stop(){this.element.removeEventListener("mousedown",this.onPointerStart,r),this.element.removeEventListener("touchstart",this.onTouchStart,r),this.element.removeEventListener("touchmove",this.onMove,r),this.element.removeEventListener("touchend",this.onTouchEnd),this.element.removeEventListener("touchcancel",this.onTouchEnd),window.removeEventListener("mousemove",this.onMove),window.removeEventListener("mouseup",this.onPointerEnd),window.removeEventListener("blur",this.onWindowBlur)}}function c(t,e){return e?Math.sqrt(Math.pow(e.clientX-t.clientX,2)+Math.pow(e.clientY-t.clientY,2)):0}function h(t,e){return e?{clientX:(t.clientX+e.clientX)/2,clientY:(t.clientY+e.clientY)/2}:t}const d=t=>"object"==typeof t&&null!==t&&t.constructor===Object&&"[object Object]"===Object.prototype.toString.call(t),u=(t,...e)=>{const i=e.length;for(let n=0;n<i;n++){const i=e[n]||{};Object.entries(i).forEach((([e,i])=>{const n=Array.isArray(i)?[]:{};t[e]||Object.assign(t,{[e]:n}),d(i)?Object.assign(t[e],u(n,i)):Array.isArray(i)?Object.assign(t,{[e]:[...i]}):Object.assign(t,{[e]:i})}))}return t},p=function(t,e){return t.split(".").reduce(((t,e)=>"object"==typeof t?t[e]:void 0),e)};class f{constructor(t={}){Object.defineProperty(this,"options",{enumerable:!0,configurable:!0,writable:!0,value:t}),Object.defineProperty(this,"events",{enumerable:!0,configurable:!0,writable:!0,value:new Map}),this.setOptions(t);for(const t of Object.getOwnPropertyNames(Object.getPrototypeOf(this)))t.startsWith("on")&&"function"==typeof this[t]&&(this[t]=this[t].bind(this))}setOptions(t){this.options=t?u({},this.constructor.defaults,t):{};for(const[t,e]of Object.entries(this.option("on")||{}))this.on(t,e)}option(t,...e){let i=p(t,this.options);return i&&"function"==typeof i&&(i=i.call(this,this,...e)),i}optionFor(t,e,i,...n){let s=p(e,t);var o;"string"!=typeof(o=s)||isNaN(o)||isNaN(parseFloat(o))||(s=parseFloat(s)),"true"===s&&(s=!0),"false"===s&&(s=!1),s&&"function"==typeof s&&(s=s.call(this,this,t,...n));let a=p(e,this.options);return a&&"function"==typeof a?s=a.call(this,this,t,...n,s):void 0===s&&(s=a),void 0===s?i:s}cn(t){const e=this.options.classes;return e&&e[t]||""}localize(t,e=[]){t=String(t).replace(/\{\{(\w+).?(\w+)?\}\}/g,((t,e,i)=>{let n="";return i?n=this.option(`${e[0]+e.toLowerCase().substring(1)}.l10n.${i}`):e&&(n=this.option(`l10n.${e}`)),n||(n=t),n}));for(let i=0;i<e.length;i++)t=t.split(e[i][0]).join(e[i][1]);return t=t.replace(/\{\{(.*?)\}\}/g,((t,e)=>e))}on(t,e){let i=[];"string"==typeof t?i=t.split(" "):Array.isArray(t)&&(i=t),this.events||(this.events=new Map),i.forEach((t=>{let i=this.events.get(t);i||(this.events.set(t,[]),i=[]),i.includes(e)||i.push(e),this.events.set(t,i)}))}off(t,e){let i=[];"string"==typeof t?i=t.split(" "):Array.isArray(t)&&(i=t),i.forEach((t=>{const i=this.events.get(t);if(Array.isArray(i)){const t=i.indexOf(e);t>-1&&i.splice(t,1)}}))}emit(t,...e){[...this.events.get(t)||[]].forEach((t=>t(this,...e))),"*"!==t&&this.emit("*",t,...e)}}Object.defineProperty(f,"version",{enumerable:!0,configurable:!0,writable:!0,value:"5.0.22"}),Object.defineProperty(f,"defaults",{enumerable:!0,configurable:!0,writable:!0,value:{}});class m extends f{constructor(t={}){super(t),Object.defineProperty(this,"plugins",{enumerable:!0,configurable:!0,writable:!0,value:{}})}attachPlugins(t={}){const e=new Map;for(const[i,n]of Object.entries(t)){const t=this.option(i),s=this.plugins[i];s||!1===t?s&&!1===t&&(s.detach(),delete this.plugins[i]):e.set(i,new n(this,t||{}))}for(const[t,i]of e)this.plugins[t]=i,i.attach();this.emit("attachPlugins")}detachPlugins(t){t=t||Object.keys(this.plugins);for(const e of t){const t=this.plugins[e];t&&t.detach(),delete this.plugins[e]}return this.emit("detachPlugins"),this}}var g;!function(t){t[t.Init=0]="Init",t[t.Error=1]="Error",t[t.Ready=2]="Ready",t[t.Panning=3]="Panning",t[t.Mousemove=4]="Mousemove",t[t.Destroy=5]="Destroy"}(g||(g={}));const b=["a","b","c","d","e","f"],v={PANUP:"Move up",PANDOWN:"Move down",PANLEFT:"Move left",PANRIGHT:"Move right",ZOOMIN:"Zoom in",ZOOMOUT:"Zoom out",TOGGLEZOOM:"Toggle zoom level",TOGGLE1TO1:"Toggle zoom level",ITERATEZOOM:"Toggle zoom level",ROTATECCW:"Rotate counterclockwise",ROTATECW:"Rotate clockwise",FLIPX:"Flip horizontally",FLIPY:"Flip vertically",FITX:"Fit horizontally",FITY:"Fit vertically",RESET:"Reset",TOGGLEFS:"Toggle fullscreen"},y={content:null,width:"auto",height:"auto",panMode:"drag",touch:!0,dragMinThreshold:3,lockAxis:!1,mouseMoveFactor:1,mouseMoveFriction:.12,zoom:!0,pinchToZoom:!0,panOnlyZoomed:"auto",minScale:1,maxScale:2,friction:.25,dragFriction:.35,decelFriction:.05,click:"toggleZoom",dblClick:!1,wheel:"zoom",wheelLimit:7,spinner:!0,bounds:"auto",infinite:!1,rubberband:!0,bounce:!0,maxVelocity:75,transformParent:!1,classes:{content:"f-panzoom__content",isLoading:"is-loading",canZoomIn:"can-zoom_in",canZoomOut:"can-zoom_out",isDraggable:"is-draggable",isDragging:"is-dragging",inFullscreen:"in-fullscreen",htmlHasFullscreen:"with-panzoom-in-fullscreen"},l10n:v},w='<div class="f-spinner"><svg viewBox="0 0 50 50"><circle cx="25" cy="25" r="20"></circle><circle cx="25" cy="25" r="20"></circle></svg></div>',x=t=>t&&null!==t&&t instanceof Element&&"nodeType"in t,E=(t,e)=>{t&&s(e).forEach((e=>{t.classList.remove(e)}))},S=(t,e)=>{t&&s(e).forEach((e=>{t.classList.add(e)}))},P={a:1,b:0,c:0,d:1,e:0,f:0},C=1e5,M=1e3,T="mousemove",O="drag",A="content";let z=null,L=null;class R extends m{get isTouchDevice(){return null===L&&(L=window.matchMedia("(hover: none)").matches),L}get isMobile(){return null===z&&(z=/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)),z}get panMode(){return this.options.panMode!==T||this.isTouchDevice?O:T}get panOnlyZoomed(){const t=this.options.panOnlyZoomed;return"auto"===t?this.isTouchDevice:t}get isInfinite(){return this.option("infinite")}get angle(){return 180*Math.atan2(this.current.b,this.current.a)/Math.PI||0}get targetAngle(){return 180*Math.atan2(this.target.b,this.target.a)/Math.PI||0}get scale(){const{a:t,b:e}=this.current;return Math.sqrt(t*t+e*e)||1}get targetScale(){const{a:t,b:e}=this.target;return Math.sqrt(t*t+e*e)||1}get minScale(){return this.option("minScale")||1}get fullScale(){const{contentRect:t}=this;return t.fullWidth/t.fitWidth||1}get maxScale(){return this.fullScale*(this.option("maxScale")||1)||1}get coverScale(){const{containerRect:t,contentRect:e}=this,i=Math.max(t.height/e.fitHeight,t.width/e.fitWidth)||1;return Math.min(this.fullScale,i)}get isScaling(){return Math.abs(this.targetScale-this.scale)>1e-5&&!this.isResting}get isContentLoading(){const t=this.content;return!!(t&&t instanceof HTMLImageElement)&&!t.complete}get isResting(){if(this.isBouncingX||this.isBouncingY)return!1;for(const t of b){const e="e"==t||"f"===t?.001:1e-5;if(Math.abs(this.target[t]-this.current[t])>e)return!1}return!(!this.ignoreBounds&&!this.checkBounds().inBounds)}constructor(t,e={},i={}){var s;if(super(e),Object.defineProperty(this,"pointerTracker",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"resizeObserver",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"updateTimer",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"clickTimer",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"rAF",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"isTicking",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"friction",{enumerable:!0,configurable:!0,writable:!0,value:0}),Object.defineProperty(this,"ignoreBounds",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"isBouncingX",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"isBouncingY",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"clicks",{enumerable:!0,configurable:!0,writable:!0,value:0}),Object.defineProperty(this,"trackingPoints",{enumerable:!0,configurable:!0,writable:!0,value:[]}),Object.defineProperty(this,"pwt",{enumerable:!0,configurable:!0,writable:!0,value:0}),Object.defineProperty(this,"cwd",{enumerable:!0,configurable:!0,writable:!0,value:0}),Object.defineProperty(this,"pmme",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"state",{enumerable:!0,configurable:!0,writable:!0,value:g.Init}),Object.defineProperty(this,"isDragging",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"container",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"content",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"spinner",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"containerRect",{enumerable:!0,configurable:!0,writable:!0,value:{width:0,height:0,innerWidth:0,innerHeight:0}}),Object.defineProperty(this,"contentRect",{enumerable:!0,configurable:!0,writable:!0,value:{top:0,right:0,bottom:0,left:0,fullWidth:0,fullHeight:0,fitWidth:0,fitHeight:0,width:0,height:0}}),Object.defineProperty(this,"dragStart",{enumerable:!0,configurable:!0,writable:!0,value:{x:0,y:0,top:0,left:0,time:0}}),Object.defineProperty(this,"dragOffset",{enumerable:!0,configurable:!0,writable:!0,value:{x:0,y:0,time:0}}),Object.defineProperty(this,"current",{enumerable:!0,configurable:!0,writable:!0,value:Object.assign({},P)}),Object.defineProperty(this,"target",{enumerable:!0,configurable:!0,writable:!0,value:Object.assign({},P)}),Object.defineProperty(this,"velocity",{enumerable:!0,configurable:!0,writable:!0,value:{a:0,b:0,c:0,d:0,e:0,f:0}}),Object.defineProperty(this,"lockedAxis",{enumerable:!0,configurable:!0,writable:!0,value:!1}),!t)throw new Error("Container Element Not Found");this.container=t,this.initContent(),this.attachPlugins(Object.assign(Object.assign({},R.Plugins),i)),this.emit("init");const o=this.content;if(o.addEventListener("load",this.onLoad),o.addEventListener("error",this.onError),this.isContentLoading){if(this.option("spinner")){t.classList.add(this.cn("isLoading"));const e=n(w);!t.contains(o)||o.parentElement instanceof HTMLPictureElement?this.spinner=t.appendChild(e):this.spinner=(null===(s=o.parentElement)||void 0===s?void 0:s.insertBefore(e,o))||null}this.emit("beforeLoad")}else queueMicrotask((()=>{this.enable()}))}initContent(){const{container:t}=this,e=this.cn(A);let i=this.option(A)||t.querySelector(`.${e}`);if(i||(i=t.querySelector("img,picture")||t.firstElementChild,i&&S(i,e)),i instanceof HTMLPictureElement&&(i=i.querySelector("img")),!i)throw new Error("No content found");this.content=i}onLoad(){this.spinner&&(this.spinner.remove(),this.spinner=null),this.option("spinner")&&this.container.classList.remove(this.cn("isLoading")),this.emit("afterLoad"),this.state===g.Init?this.enable():this.updateMetrics()}onError(){this.state!==g.Destroy&&(this.spinner&&(this.spinner.remove(),this.spinner=null),this.stop(),this.detachEvents(),this.state=g.Error,this.emit("error"))}attachObserver(){var t;const e=()=>Math.abs(this.containerRect.width-this.container.getBoundingClientRect().width)>.1||Math.abs(this.containerRect.height-this.container.getBoundingClientRect().height)>.1;this.resizeObserver||void 0===window.ResizeObserver||(this.resizeObserver=new ResizeObserver((()=>{this.updateTimer||(e()?(this.onResize(),this.isMobile&&(this.updateTimer=setTimeout((()=>{e()&&this.onResize(),this.updateTimer=null}),500))):this.updateTimer&&(clearTimeout(this.updateTimer),this.updateTimer=null))}))),null===(t=this.resizeObserver)||void 0===t||t.observe(this.container)}detachObserver(){var t;null===(t=this.resizeObserver)||void 0===t||t.disconnect()}attachEvents(){const{container:t}=this;t.addEventListener("click",this.onClick,{passive:!1,capture:!1}),t.addEventListener("wheel",this.onWheel,{passive:!1}),this.pointerTracker=new l(t,{start:this.onPointerDown,move:this.onPointerMove,end:this.onPointerUp}),document.addEventListener(T,this.onMouseMove)}detachEvents(){var t;const{container:e}=this;e.removeEventListener("click",this.onClick,{passive:!1,capture:!1}),e.removeEventListener("wheel",this.onWheel,{passive:!1}),null===(t=this.pointerTracker)||void 0===t||t.stop(),this.pointerTracker=null,document.removeEventListener(T,this.onMouseMove),document.removeEventListener("keydown",this.onKeydown,!0),this.clickTimer&&(clearTimeout(this.clickTimer),this.clickTimer=null),this.updateTimer&&(clearTimeout(this.updateTimer),this.updateTimer=null)}animate(){const t=this.friction;this.setTargetForce();const e=this.option("maxVelocity");for(const i of b)t?(this.velocity[i]*=1-t,e&&!this.isScaling&&(this.velocity[i]=Math.max(Math.min(this.velocity[i],e),-1*e)),this.current[i]+=this.velocity[i]):this.current[i]=this.target[i];this.setTransform(),this.setEdgeForce(),!this.isResting||this.isDragging?this.rAF=requestAnimationFrame((()=>this.animate())):this.stop("current")}setTargetForce(){for(const t of b)"e"===t&&this.isBouncingX||"f"===t&&this.isBouncingY||(this.velocity[t]=(1/(1-this.friction)-1)*(this.target[t]-this.current[t]))}checkBounds(t=0,e=0){const{current:i}=this,n=i.e+t,s=i.f+e,o=this.getBounds(),{x:a,y:r}=o,l=a.min,c=a.max,h=r.min,d=r.max;let u=0,p=0;return l!==1/0&&n<l?u=l-n:c!==1/0&&n>c&&(u=c-n),h!==1/0&&s<h?p=h-s:d!==1/0&&s>d&&(p=d-s),Math.abs(u)<.001&&(u=0),Math.abs(p)<.001&&(p=0),Object.assign(Object.assign({},o),{xDiff:u,yDiff:p,inBounds:!u&&!p})}clampTargetBounds(){const{target:t}=this,{x:e,y:i}=this.getBounds();e.min!==1/0&&(t.e=Math.max(t.e,e.min)),e.max!==1/0&&(t.e=Math.min(t.e,e.max)),i.min!==1/0&&(t.f=Math.max(t.f,i.min)),i.max!==1/0&&(t.f=Math.min(t.f,i.max))}calculateContentDim(t=this.current){const{content:e,contentRect:i}=this,{fitWidth:n,fitHeight:s,fullWidth:o,fullHeight:a}=i;let r=o,l=a;if(this.option("zoom")||0!==this.angle){const i=!(e instanceof HTMLImageElement)&&("none"===window.getComputedStyle(e).maxWidth||"none"===window.getComputedStyle(e).maxHeight),c=i?o:n,h=i?a:s,d=this.getMatrix(t),u=new DOMPoint(0,0).matrixTransform(d),p=new DOMPoint(0+c,0).matrixTransform(d),f=new DOMPoint(0+c,0+h).matrixTransform(d),m=new DOMPoint(0,0+h).matrixTransform(d),g=Math.abs(f.x-u.x),b=Math.abs(f.y-u.y),v=Math.abs(m.x-p.x),y=Math.abs(m.y-p.y);r=Math.max(g,v),l=Math.max(b,y)}return{contentWidth:r,contentHeight:l}}setEdgeForce(){if(this.ignoreBounds||this.isDragging||this.panMode===T||this.targetScale<this.scale)return this.isBouncingX=!1,void(this.isBouncingY=!1);const{target:t}=this,{x:e,y:i,xDiff:n,yDiff:s}=this.checkBounds();const o=this.option("maxVelocity");let a=this.velocity.e,r=this.velocity.f;0!==n?(this.isBouncingX=!0,n*a<=0?a+=.14*n:(a=.14*n,e.min!==1/0&&(this.target.e=Math.max(t.e,e.min)),e.max!==1/0&&(this.target.e=Math.min(t.e,e.max))),o&&(a=Math.max(Math.min(a,o),-1*o))):this.isBouncingX=!1,0!==s?(this.isBouncingY=!0,s*r<=0?r+=.14*s:(r=.14*s,i.min!==1/0&&(this.target.f=Math.max(t.f,i.min)),i.max!==1/0&&(this.target.f=Math.min(t.f,i.max))),o&&(r=Math.max(Math.min(r,o),-1*o))):this.isBouncingY=!1,this.isBouncingX&&(this.velocity.e=a),this.isBouncingY&&(this.velocity.f=r)}enable(){const{content:t}=this,e=new DOMMatrixReadOnly(window.getComputedStyle(t).transform);for(const t of b)this.current[t]=this.target[t]=e[t];this.updateMetrics(),this.attachObserver(),this.attachEvents(),this.state=g.Ready,this.emit("ready")}onClick(t){var e;this.isDragging&&(null===(e=this.pointerTracker)||void 0===e||e.clear(),this.trackingPoints=[],this.startDecelAnim());const i=t.target;if(!i||t.defaultPrevented)return;if(i&&i.hasAttribute("disabled"))return t.preventDefault(),void t.stopPropagation();if((()=>{const t=window.getSelection();return t&&"Range"===t.type})()&&!i.closest("button"))return;const n=i.closest("[data-panzoom-action]"),s=i.closest("[data-panzoom-change]"),o=n||s,a=o&&x(o)?o.dataset:null;if(a){const e=a.panzoomChange,i=a.panzoomAction;if((e||i)&&t.preventDefault(),e){let t={};try{t=JSON.parse(e)}catch(t){console&&console.warn("The given data was not valid JSON")}return void this.applyChange(t)}if(i)return void(this[i]&&this[i]())}if(Math.abs(this.dragOffset.x)>3||Math.abs(this.dragOffset.y)>3)return t.preventDefault(),void t.stopPropagation();const r=this.content.getBoundingClientRect();if(this.dragStart.time&&!this.canZoomOut()&&(Math.abs(r.x-this.dragStart.x)>2||Math.abs(r.y-this.dragStart.y)>2))return;this.dragStart.time=0;const l=e=>{this.option("zoom")&&e&&"string"==typeof e&&/(iterateZoom)|(toggle(Zoom|Full|Cover|Max)|(zoomTo(Fit|Cover|Max)))/.test(e)&&"function"==typeof this[e]&&(t.preventDefault(),this[e]({event:t}))},c=this.option("click",t),h=this.option("dblClick",t);h?(this.clicks++,1==this.clicks&&(this.clickTimer=setTimeout((()=>{1===this.clicks?(this.emit("click",t),!t.defaultPrevented&&c&&l(c)):(this.emit("dblClick",t),t.defaultPrevented||l(h)),this.clicks=0,this.clickTimer=null}),350))):(this.emit("click",t),!t.defaultPrevented&&c&&l(c))}addTrackingPoint(t){const e=this.trackingPoints.filter((t=>t.time>Date.now()-100));e.push(t),this.trackingPoints=e}onPointerDown(t,e,i){var n;if(!1===this.option("touch",t))return!1;this.pwt=0,this.dragOffset={x:0,y:0,time:0},this.trackingPoints=[];const s=this.content.getBoundingClientRect();if(this.dragStart={x:s.x,y:s.y,top:s.top,left:s.left,time:Date.now()},this.clickTimer)return!1;if(this.panMode===T&&this.targetScale>1)return t.preventDefault(),t.stopPropagation(),!1;const o=t.composedPath()[0];if(!i.length){if(["TEXTAREA","OPTION","INPUT","SELECT","VIDEO","IFRAME"].includes(o.nodeName)||o.closest("[contenteditable]")||o.closest("[data-selectable]")||o.closest("[data-draggable]")||o.closest("[data-clickable]")||o.closest("[data-panzoom-change]")||o.closest("[data-panzoom-action]"))return!1;null===(n=window.getSelection())||void 0===n||n.removeAllRanges()}if("mousedown"===t.type)["A","BUTTON"].includes(o.nodeName)||t.preventDefault();else if(Math.abs(this.velocity.a)>.3)return!1;return this.target.e=this.current.e,this.target.f=this.current.f,this.stop(),this.isDragging||(this.isDragging=!0,this.addTrackingPoint(e),this.emit("touchStart",t)),!0}onPointerMove(e,n,s){if(!1===this.option("touch",e))return;if(!this.isDragging)return;if(n.length<2&&this.panOnlyZoomed&&t(this.targetScale)<=t(this.minScale))return;if(this.emit("touchMove",e),e.defaultPrevented)return;this.addTrackingPoint(n[0]);const{content:o}=this,a=h(s[0],s[1]),r=h(n[0],n[1]);let l=0,d=0;if(n.length>1){const t=o.getBoundingClientRect();l=a.clientX-t.left-.5*t.width,d=a.clientY-t.top-.5*t.height}const u=c(s[0],s[1]),p=c(n[0],n[1]);let f=u?p/u:1,m=r.clientX-a.clientX,g=r.clientY-a.clientY;this.dragOffset.x+=m,this.dragOffset.y+=g,this.dragOffset.time=Date.now()-this.dragStart.time;let b=t(this.targetScale)===t(this.minScale)&&this.option("lockAxis");if(b&&!this.lockedAxis)if("xy"===b||"y"===b||"touchmove"===e.type){if(Math.abs(this.dragOffset.x)<6&&Math.abs(this.dragOffset.y)<6)return void e.preventDefault();const t=Math.abs(180*Math.atan2(this.dragOffset.y,this.dragOffset.x)/Math.PI);this.lockedAxis=t>45&&t<135?"y":"x",this.dragOffset.x=0,this.dragOffset.y=0,m=0,g=0}else this.lockedAxis=b;if(i(e.target,this.content)&&(b="x",this.dragOffset.y=0),b&&"xy"!==b&&this.lockedAxis!==b&&t(this.targetScale)===t(this.minScale))return;e.cancelable&&e.preventDefault(),this.container.classList.add(this.cn("isDragging"));const v=this.checkBounds(m,g);this.option("rubberband")?("x"!==this.isInfinite&&(v.xDiff>0&&m<0||v.xDiff<0&&m>0)&&(m*=Math.max(0,.5-Math.abs(.75/this.contentRect.fitWidth*v.xDiff))),"y"!==this.isInfinite&&(v.yDiff>0&&g<0||v.yDiff<0&&g>0)&&(g*=Math.max(0,.5-Math.abs(.75/this.contentRect.fitHeight*v.yDiff)))):(v.xDiff&&(m=0),v.yDiff&&(g=0));const y=this.targetScale,w=this.minScale,x=this.maxScale;y<.5*w&&(f=Math.max(f,w)),y>1.5*x&&(f=Math.min(f,x)),"y"===this.lockedAxis&&t(y)===t(w)&&(m=0),"x"===this.lockedAxis&&t(y)===t(w)&&(g=0),this.applyChange({originX:l,originY:d,panX:m,panY:g,scale:f,friction:this.option("dragFriction"),ignoreBounds:!0})}onPointerUp(t,e,n){if(n.length)return this.dragOffset.x=0,this.dragOffset.y=0,void(this.trackingPoints=[]);this.container.classList.remove(this.cn("isDragging")),this.isDragging&&(this.addTrackingPoint(e),this.panOnlyZoomed&&this.contentRect.width-this.contentRect.fitWidth<1&&this.contentRect.height-this.contentRect.fitHeight<1&&(this.trackingPoints=[]),i(t.target,this.content)&&"y"===this.lockedAxis&&(this.trackingPoints=[]),this.emit("touchEnd",t),this.isDragging=!1,this.lockedAxis=!1,this.state!==g.Destroy&&(t.defaultPrevented||this.startDecelAnim()))}startDecelAnim(){var e;const i=this.isScaling;this.rAF&&(cancelAnimationFrame(this.rAF),this.rAF=null),this.isBouncingX=!1,this.isBouncingY=!1;for(const t of b)this.velocity[t]=0;this.target.e=this.current.e,this.target.f=this.current.f,E(this.container,"is-scaling"),E(this.container,"is-animating"),this.isTicking=!1;const{trackingPoints:n}=this,s=n[0],o=n[n.length-1];let a=0,r=0,l=0;o&&s&&(a=o.clientX-s.clientX,r=o.clientY-s.clientY,l=o.time-s.time);const c=(null===(e=window.visualViewport)||void 0===e?void 0:e.scale)||1;1!==c&&(a*=c,r*=c);let h=0,d=0,u=0,p=0,f=this.option("decelFriction");const m=this.targetScale;if(l>0){u=Math.abs(a)>3?a/(l/30):0,p=Math.abs(r)>3?r/(l/30):0;const t=this.option("maxVelocity");t&&(u=Math.max(Math.min(u,t),-1*t),p=Math.max(Math.min(p,t),-1*t))}u&&(h=u/(1/(1-f)-1)),p&&(d=p/(1/(1-f)-1)),("y"===this.option("lockAxis")||"xy"===this.option("lockAxis")&&"y"===this.lockedAxis&&t(m)===this.minScale)&&(h=u=0),("x"===this.option("lockAxis")||"xy"===this.option("lockAxis")&&"x"===this.lockedAxis&&t(m)===this.minScale)&&(d=p=0);const g=this.dragOffset.x,v=this.dragOffset.y,y=this.option("dragMinThreshold")||0;Math.abs(g)<y&&Math.abs(v)<y&&(h=d=0,u=p=0),(m<this.minScale-1e-5||m>this.maxScale+1e-5||i&&!h&&!d)&&(f=.35),this.applyChange({panX:h,panY:d,friction:f}),this.emit("decel",u,p,g,v)}onWheel(t){var e=[-t.deltaX||0,-t.deltaY||0,-t.detail||0].reduce((function(t,e){return Math.abs(e)>Math.abs(t)?e:t}));const i=Math.max(-1,Math.min(1,e));if(this.emit("wheel",t,i),this.panMode===T)return;if(t.defaultPrevented)return;const n=this.option("wheel");"pan"===n?(t.preventDefault(),this.panOnlyZoomed&&!this.canZoomOut()||this.applyChange({panX:2*-t.deltaX,panY:2*-t.deltaY,bounce:!1})):"zoom"===n&&!1!==this.option("zoom")&&this.zoomWithWheel(t)}onMouseMove(t){this.panWithMouse(t)}onKeydown(t){"Escape"===t.key&&this.toggleFS()}onResize(){this.updateMetrics(),this.checkBounds().inBounds||this.requestTick()}setTransform(){this.emit("beforeTransform");const{current:e,target:i,content:n,contentRect:s}=this,o=Object.assign({},P);for(const n of b){const s="e"==n||"f"===n?M:C;o[n]=t(e[n],s),Math.abs(i[n]-e[n])<("e"==n||"f"===n?.51:.001)&&(e[n]=i[n])}let{a:a,b:r,c:l,d:c,e:h,f:d}=o,u=`matrix(${a}, ${r}, ${l}, ${c}, ${h}, ${d})`,p=n.parentElement instanceof HTMLPictureElement?n.parentElement:n;if(this.option("transformParent")&&(p=p.parentElement||p),p.style.transform===u)return;p.style.transform=u;const{contentWidth:f,contentHeight:m}=this.calculateContentDim();s.width=f,s.height=m,this.emit("afterTransform")}updateMetrics(e=!1){var i;if(!this||this.state===g.Destroy)return;if(this.isContentLoading)return;const n=Math.max(1,(null===(i=window.visualViewport)||void 0===i?void 0:i.scale)||1),{container:s,content:o}=this,a=o instanceof HTMLImageElement,r=s.getBoundingClientRect(),l=getComputedStyle(this.container);let c=r.width*n,h=r.height*n;const d=parseFloat(l.paddingTop)+parseFloat(l.paddingBottom),u=c-(parseFloat(l.paddingLeft)+parseFloat(l.paddingRight)),p=h-d;this.containerRect={width:c,height:h,innerWidth:u,innerHeight:p};let f=this.option("width")||"auto",m=this.option("height")||"auto";"auto"===f&&(f=parseFloat(o.dataset.width||"")||(t=>{let e=0;return e=t instanceof HTMLImageElement?t.naturalWidth:t instanceof SVGElement?t.width.baseVal.value:Math.max(t.offsetWidth,t.scrollWidth),e||0})(o)),"auto"===m&&(m=parseFloat(o.dataset.height||"")||(t=>{let e=0;return e=t instanceof HTMLImageElement?t.naturalHeight:t instanceof SVGElement?t.height.baseVal.value:Math.max(t.offsetHeight,t.scrollHeight),e||0})(o));let b=o.parentElement instanceof HTMLPictureElement?o.parentElement:o;this.option("transformParent")&&(b=b.parentElement||b);const v=b.getAttribute("style")||"";b.style.setProperty("transform","none","important"),a&&(b.style.width="",b.style.height=""),b.offsetHeight;const y=o.getBoundingClientRect();let w=y.width*n,x=y.height*n,E=0,S=0;a&&(Math.abs(f-w)>1||Math.abs(m-x)>1)&&({width:w,height:x,top:E,left:S}=((t,e,i,n)=>{const s=i/n;return s>t/e?(i=t,n=t/s):(i=e*s,n=e),{width:i,height:n,top:.5*(e-n),left:.5*(t-i)}})(w,x,f,m)),this.contentRect=Object.assign(Object.assign({},this.contentRect),{top:y.top-r.top+E,bottom:r.bottom-y.bottom+E,left:y.left-r.left+S,right:r.right-y.right+S,fitWidth:w,fitHeight:x,width:w,height:x,fullWidth:f,fullHeight:m}),b.style.cssText=v,a&&(b.style.width=`${w}px`,b.style.height=`${x}px`),this.setTransform(),!0!==e&&this.emit("refresh"),this.ignoreBounds||(t(this.targetScale)<t(this.minScale)?this.zoomTo(this.minScale,{friction:0}):this.targetScale>this.maxScale?this.zoomTo(this.maxScale,{friction:0}):this.state===g.Init||this.checkBounds().inBounds||this.requestTick()),this.updateControls()}getBounds(){const e=this.option("bounds");if("auto"!==e)return e;const{contentWidth:i,contentHeight:n}=this.calculateContentDim(this.target);let s=0,o=0,a=0,r=0;const l=this.option("infinite");if(!0===l||this.lockedAxis&&l===this.lockedAxis)s=-1/0,a=1/0,o=-1/0,r=1/0;else{let{containerRect:e,contentRect:l}=this,c=t(this.contentRect.fitWidth*this.targetScale,M),h=t(this.contentRect.fitHeight*this.targetScale,M),{innerWidth:d,innerHeight:u}=e;if(this.containerRect.width===c&&(d=e.width),this.containerRect.width===h&&(u=e.height),i>d){a=.5*(i-d),s=-1*a;let t=.5*(l.right-l.left);s+=t,a+=t}if(this.contentRect.fitWidth>d&&i<d&&(s-=.5*(this.contentRect.fitWidth-d),a-=.5*(this.contentRect.fitWidth-d)),n>u){r=.5*(n-u),o=-1*r;let t=.5*(l.bottom-l.top);o+=t,r+=t}this.contentRect.fitHeight>u&&n<u&&(s-=.5*(this.contentRect.fitHeight-u),a-=.5*(this.contentRect.fitHeight-u))}return{x:{min:s,max:a},y:{min:o,max:r}}}updateControls(){const e=this,i=e.container,{panMode:n,contentRect:s,fullScale:a,targetScale:r,coverScale:l,maxScale:c,minScale:h}=e;let d={toggleMax:r-h<.5*(c-h)?c:h,toggleCover:r-h<.5*(l-h)?l:h,toggleZoom:r-h<.5*(a-h)?a:h}[e.option("click")||""]||h,u=e.canZoomIn(),p=e.canZoomOut(),f=n===O&&!!this.option("touch"),m=p&&f;f&&(t(r)<t(h)&&!this.panOnlyZoomed&&(m=!0),(t(s.width,1)>t(s.fitWidth,1)||t(s.height,1)>t(s.fitHeight,1))&&(m=!0)),t(s.width*r,1)<t(s.fitWidth,1)&&(m=!1),n===T&&(m=!1);let g=u&&t(d)>t(r),b=!g&&!m&&p&&t(d)<t(r);o(i,this.cn("canZoomIn"),g),o(i,this.cn("canZoomOut"),b),o(i,this.cn("isDraggable"),m);for(const t of i.querySelectorAll('[data-panzoom-action="zoomIn"]'))u?(t.removeAttribute("disabled"),t.removeAttribute("tabindex")):(t.setAttribute("disabled",""),t.setAttribute("tabindex","-1"));for(const t of i.querySelectorAll('[data-panzoom-action="zoomOut"]'))p?(t.removeAttribute("disabled"),t.removeAttribute("tabindex")):(t.setAttribute("disabled",""),t.setAttribute("tabindex","-1"));for(const t of i.querySelectorAll('[data-panzoom-action="toggleZoom"],[data-panzoom-action="iterateZoom"]')){u||p?(t.removeAttribute("disabled"),t.removeAttribute("tabindex")):(t.setAttribute("disabled",""),t.setAttribute("tabindex","-1"));const e=t.querySelector("g");e&&(e.style.display=u?"":"none")}}panTo({x:t=this.target.e,y:e=this.target.f,scale:i=this.targetScale,friction:n=this.option("friction"),angle:s=0,originX:o=0,originY:a=0,flipX:r=!1,flipY:l=!1,ignoreBounds:c=!1}){this.state!==g.Destroy&&this.applyChange({panX:t-this.target.e,panY:e-this.target.f,scale:i/this.targetScale,angle:s,originX:o,originY:a,friction:n,flipX:r,flipY:l,ignoreBounds:c})}applyChange({panX:e=0,panY:i=0,scale:n=1,angle:s=0,originX:o=-this.current.e,originY:a=-this.current.f,friction:r=this.option("friction"),flipX:l=!1,flipY:c=!1,ignoreBounds:h=!1,bounce:d=this.option("bounce")}){if(this.state===g.Destroy)return;this.rAF&&(cancelAnimationFrame(this.rAF),this.rAF=null),this.friction=r||0,this.ignoreBounds=h;const{current:u}=this,p=u.e,f=u.f,m=this.getMatrix(this.target);let v=(new DOMMatrix).translate(p,f).translate(o,a).translate(e,i);if(this.option("zoom")){if(!h){const t=this.targetScale,e=this.minScale,i=this.maxScale;t*n<e&&(n=e/t),t*n>i&&(n=i/t)}v=v.scale(n)}v=v.translate(-o,-a).translate(-p,-f).multiply(m),s&&(v=v.rotate(s)),l&&(v=v.scale(-1,1)),c&&(v=v.scale(1,-1));for(const e of b)"e"!==e&&"f"!==e&&(v[e]>this.minScale+1e-5||v[e]<this.minScale-1e-5)?this.target[e]=v[e]:this.target[e]=t(v[e],M);(this.targetScale<this.scale||Math.abs(n-1)>.1||this.panMode===T||!1===d)&&!h&&this.clampTargetBounds(),this.isResting||(this.state=g.Panning,this.requestTick())}stop(t=!1){if(this.state===g.Init||this.state===g.Destroy)return;const e=this.isTicking;this.rAF&&(cancelAnimationFrame(this.rAF),this.rAF=null),this.isBouncingX=!1,this.isBouncingY=!1;for(const e of b)this.velocity[e]=0,"current"===t?this.current[e]=this.target[e]:"target"===t&&(this.target[e]=this.current[e]);this.setTransform(),E(this.container,"is-scaling"),E(this.container,"is-animating"),this.isTicking=!1,this.state=g.Ready,e&&(this.emit("endAnimation"),this.updateControls())}requestTick(){this.isTicking||(this.emit("startAnimation"),this.updateControls(),S(this.container,"is-animating"),this.isScaling&&S(this.container,"is-scaling")),this.isTicking=!0,this.rAF||(this.rAF=requestAnimationFrame((()=>this.animate())))}panWithMouse(e,i=this.option("mouseMoveFriction")){if(this.pmme=e,this.panMode!==T||!e)return;if(t(this.targetScale)<=t(this.minScale))return;this.emit("mouseMove",e);const{container:n,containerRect:s,contentRect:o}=this,a=s.width,r=s.height,l=n.getBoundingClientRect(),c=(e.clientX||0)-l.left,h=(e.clientY||0)-l.top;let{contentWidth:d,contentHeight:u}=this.calculateContentDim(this.target);const p=this.option("mouseMoveFactor");p>1&&(d!==a&&(d*=p),u!==r&&(u*=p));let f=.5*(d-a)-c/a*100/100*(d-a);f+=.5*(o.right-o.left);let m=.5*(u-r)-h/r*100/100*(u-r);m+=.5*(o.bottom-o.top),this.applyChange({panX:f-this.target.e,panY:m-this.target.f,friction:i})}zoomWithWheel(e){if(this.state===g.Destroy||this.state===g.Init)return;const i=Date.now();if(i-this.pwt<45)return void e.preventDefault();this.pwt=i;var n=[-e.deltaX||0,-e.deltaY||0,-e.detail||0].reduce((function(t,e){return Math.abs(e)>Math.abs(t)?e:t}));const s=Math.max(-1,Math.min(1,n)),{targetScale:o,maxScale:a,minScale:r}=this;let l=o*(100+45*s)/100;t(l)<t(r)&&t(o)<=t(r)?(this.cwd+=Math.abs(s),l=r):t(l)>t(a)&&t(o)>=t(a)?(this.cwd+=Math.abs(s),l=a):(this.cwd=0,l=Math.max(Math.min(l,a),r)),this.cwd>this.option("wheelLimit")||(e.preventDefault(),t(l)!==t(o)&&this.zoomTo(l,{event:e}))}canZoomIn(){return this.option("zoom")&&(t(this.contentRect.width,1)<t(this.contentRect.fitWidth,1)||t(this.targetScale)<t(this.maxScale))}canZoomOut(){return this.option("zoom")&&t(this.targetScale)>t(this.minScale)}zoomIn(t=1.25,e){this.zoomTo(this.targetScale*t,e)}zoomOut(t=.8,e){this.zoomTo(this.targetScale*t,e)}zoomToFit(t){this.zoomTo("fit",t)}zoomToCover(t){this.zoomTo("cover",t)}zoomToFull(t){this.zoomTo("full",t)}zoomToMax(t){this.zoomTo("max",t)}toggleZoom(t){this.zoomTo(this.targetScale-this.minScale<.5*(this.fullScale-this.minScale)?"full":"fit",t)}toggleMax(t){this.zoomTo(this.targetScale-this.minScale<.5*(this.maxScale-this.minScale)?"max":"fit",t)}toggleCover(t){this.zoomTo(this.targetScale-this.minScale<.5*(this.coverScale-this.minScale)?"cover":"fit",t)}iterateZoom(t){this.zoomTo("next",t)}zoomTo(t=1,{friction:e="auto",originX:i="auto",originY:n="auto",event:s}={}){if(this.isContentLoading||this.state===g.Destroy)return;const{targetScale:o}=this;this.stop();let a=1;if(this.panMode===T&&(s=this.pmme||s),s||"auto"===i||"auto"===n){const t=this.content.getBoundingClientRect(),e=this.container.getBoundingClientRect(),o=s?s.clientX:e.left+.5*e.width,a=s?s.clientY:e.top+.5*e.height;i=o-t.left-.5*t.width,n=a-t.top-.5*t.height}const r=this.fullScale,l=this.maxScale;let c=this.coverScale;"number"==typeof t?a=t/o:("next"===t&&(r-c<.2&&(c=r),t=o<r-1e-5?"full":o<l-1e-5?"max":"fit"),a="full"===t?r/o||1:"cover"===t?c/o||1:"max"===t?l/o||1:1/o||1),e="auto"===e?a>1?.15:.25:e,this.applyChange({scale:a,originX:i,originY:n,friction:e}),s&&this.panMode===T&&this.panWithMouse(s,e)}rotateCCW(){this.applyChange({angle:-90})}rotateCW(){this.applyChange({angle:90})}flipX(){this.applyChange({flipX:!0})}flipY(){this.applyChange({flipY:!0})}fitX(){this.stop("target");const{containerRect:t,contentRect:e,target:i}=this;this.applyChange({panX:.5*t.width-(e.left+.5*e.fitWidth)-i.e,panY:.5*t.height-(e.top+.5*e.fitHeight)-i.f,scale:t.width/e.fitWidth/this.targetScale,originX:0,originY:0,ignoreBounds:!0})}fitY(){this.stop("target");const{containerRect:t,contentRect:e,target:i}=this;this.applyChange({panX:.5*t.width-(e.left+.5*e.fitWidth)-i.e,panY:.5*t.innerHeight-(e.top+.5*e.fitHeight)-i.f,scale:t.height/e.fitHeight/this.targetScale,originX:0,originY:0,ignoreBounds:!0})}toggleFS(){const{container:t}=this,e=this.cn("inFullscreen"),i=this.cn("htmlHasFullscreen");t.classList.toggle(e);const n=t.classList.contains(e);n?(document.documentElement.classList.add(i),document.addEventListener("keydown",this.onKeydown,!0)):(document.documentElement.classList.remove(i),document.removeEventListener("keydown",this.onKeydown,!0)),this.updateMetrics(),this.emit(n?"enterFS":"exitFS")}getMatrix(t=this.current){const{a:e,b:i,c:n,d:s,e:o,f:a}=t;return new DOMMatrix([e,i,n,s,o,a])}reset(t){if(this.state!==g.Init&&this.state!==g.Destroy){this.stop("current");for(const t of b)this.target[t]=P[t];this.target.a=this.minScale,this.target.d=this.minScale,this.clampTargetBounds(),this.isResting||(this.friction=void 0===t?this.option("friction"):t,this.state=g.Panning,this.requestTick())}}destroy(){this.stop(),this.state=g.Destroy,this.detachEvents(),this.detachObserver();const{container:t,content:e}=this,i=this.option("classes")||{};for(const e of Object.values(i))t.classList.remove(e+"");e&&(e.removeEventListener("load",this.onLoad),e.removeEventListener("error",this.onError)),this.detachPlugins()}}Object.defineProperty(R,"defaults",{enumerable:!0,configurable:!0,writable:!0,value:y}),Object.defineProperty(R,"Plugins",{enumerable:!0,configurable:!0,writable:!0,value:{}});const k=function(t,e){let i=!0;return(...n)=>{i&&(i=!1,t(...n),setTimeout((()=>{i=!0}),e))}},I=(t,e)=>{let i=[];return t.childNodes.forEach((t=>{t.nodeType!==Node.ELEMENT_NODE||e&&!t.matches(e)||i.push(t)})),i},D={viewport:null,track:null,enabled:!0,slides:[],axis:"x",transition:"fade",preload:1,slidesPerPage:"auto",initialPage:0,friction:.12,Panzoom:{decelFriction:.12},center:!0,infinite:!0,fill:!0,dragFree:!1,adaptiveHeight:!1,direction:"ltr",classes:{container:"f-carousel",viewport:"f-carousel__viewport",track:"f-carousel__track",slide:"f-carousel__slide",isLTR:"is-ltr",isRTL:"is-rtl",isHorizontal:"is-horizontal",isVertical:"is-vertical",inTransition:"in-transition",isSelected:"is-selected"},l10n:{NEXT:"Next slide",PREV:"Previous slide",GOTO:"Go to slide #%d"}};var F;!function(t){t[t.Init=0]="Init",t[t.Ready=1]="Ready",t[t.Destroy=2]="Destroy"}(F||(F={}));const j=t=>{if("string"==typeof t||t instanceof HTMLElement)t={html:t};else{const e=t.thumb;void 0!==e&&("string"==typeof e&&(t.thumbSrc=e),e instanceof HTMLImageElement&&(t.thumbEl=e,t.thumbElSrc=e.src,t.thumbSrc=e.src),delete t.thumb)}return Object.assign({html:"",el:null,isDom:!1,class:"",customClass:"",index:-1,dim:0,gap:0,pos:0,transition:!1},t)},H=(t={})=>Object.assign({index:-1,slides:[],dim:0,pos:-1},t);class B extends f{constructor(t,e){super(e),Object.defineProperty(this,"instance",{enumerable:!0,configurable:!0,writable:!0,value:t})}attach(){}detach(){}}const N={classes:{list:"f-carousel__dots",isDynamic:"is-dynamic",hasDots:"has-dots",dot:"f-carousel__dot",isBeforePrev:"is-before-prev",isPrev:"is-prev",isCurrent:"is-current",isNext:"is-next",isAfterNext:"is-after-next"},dotTpl:'<button type="button" data-carousel-page="%i" aria-label="{{GOTO}}"><span class="f-carousel__dot" aria-hidden="true"></span></button>',dynamicFrom:11,maxCount:1/0,minCount:2};class _ extends B{constructor(){super(...arguments),Object.defineProperty(this,"isDynamic",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"list",{enumerable:!0,configurable:!0,writable:!0,value:null})}onRefresh(){this.refresh()}build(){let t=this.list;return t||(t=document.createElement("ul"),S(t,this.cn("list")),t.setAttribute("role","tablist"),this.instance.container.appendChild(t),S(this.instance.container,this.cn("hasDots")),this.list=t),t}refresh(){var t;const e=this.instance.pages.length,i=Math.min(2,this.option("minCount")),n=Math.max(2e3,this.option("maxCount")),s=this.option("dynamicFrom");if(e<i||e>n)return void this.cleanup();const a="number"==typeof s&&e>5&&e>=s,r=!this.list||this.isDynamic!==a||this.list.children.length!==e;r&&this.cleanup();const l=this.build();if(o(l,this.cn("isDynamic"),!!a),r)for(let t=0;t<e;t++)l.append(this.createItem(t));let c,h=0;for(const e of[...l.children]){const i=h===this.instance.page;i&&(c=e),o(e,this.cn("isCurrent"),i),null===(t=e.children[0])||void 0===t||t.setAttribute("aria-selected",i?"true":"false");for(const t of["isBeforePrev","isPrev","isNext","isAfterNext"])E(e,this.cn(t));h++}if(c=c||l.firstChild,a&&c){const t=c.previousElementSibling,e=t&&t.previousElementSibling;S(t,this.cn("isPrev")),S(e,this.cn("isBeforePrev"));const i=c.nextElementSibling,n=i&&i.nextElementSibling;S(i,this.cn("isNext")),S(n,this.cn("isAfterNext"))}this.isDynamic=a}createItem(t=0){var e;const i=document.createElement("li");i.setAttribute("role","presentation");const s=n(this.instance.localize(this.option("dotTpl"),[["%d",t+1]]).replace(/\%i/g,t+""));return i.appendChild(s),null===(e=i.children[0])||void 0===e||e.setAttribute("role","tab"),i}cleanup(){this.list&&(this.list.remove(),this.list=null),this.isDynamic=!1,E(this.instance.container,this.cn("hasDots"))}attach(){this.instance.on(["refresh","change"],this.onRefresh)}detach(){this.instance.off(["refresh","change"],this.onRefresh),this.cleanup()}}Object.defineProperty(_,"defaults",{enumerable:!0,configurable:!0,writable:!0,value:N});const W="disabled",$="next",X="prev";class Y extends B{constructor(){super(...arguments),Object.defineProperty(this,"container",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"prev",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"next",{enumerable:!0,configurable:!0,writable:!0,value:null})}onRefresh(){const t=this.instance,e=t.pages.length,i=t.page;if(e<2)return void this.cleanup();this.build();let n=this.prev,s=this.next;n&&s&&(n.removeAttribute(W),s.removeAttribute(W),t.isInfinite||(i<=0&&n.setAttribute(W,""),i>=e-1&&s.setAttribute(W,"")))}createButton(t){const e=this.instance,i=document.createElement("button");i.setAttribute("tabindex","0"),i.setAttribute("title",e.localize(`{{${t.toUpperCase()}}}`)),S(i,this.cn("button")+" "+this.cn(t===$?"isNext":"isPrev"));const n=e.isRTL?t===$?X:$:t;var s;return i.innerHTML=e.localize(this.option(`${n}Tpl`)),i.dataset[`carousel${s=t,s?s.match("^[a-z]")?s.charAt(0).toUpperCase()+s.substring(1):s:""}`]="true",i}build(){let t=this.container;t||(this.container=t=document.createElement("div"),S(t,this.cn("container")),this.instance.container.appendChild(t)),this.next||(this.next=t.appendChild(this.createButton($))),this.prev||(this.prev=t.appendChild(this.createButton(X)))}cleanup(){this.prev&&this.prev.remove(),this.next&&this.next.remove(),this.container&&this.container.remove(),this.prev=null,this.next=null,this.container=null}attach(){this.instance.on(["refresh","change"],this.onRefresh)}detach(){this.instance.off(["refresh","change"],this.onRefresh),this.cleanup()}}Object.defineProperty(Y,"defaults",{enumerable:!0,configurable:!0,writable:!0,value:{classes:{container:"f-carousel__nav",button:"f-button",isNext:"is-next",isPrev:"is-prev"},nextTpl:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" tabindex="-1"><path d="M9 3l9 9-9 9"/></svg>',prevTpl:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" tabindex="-1"><path d="M15 3l-9 9 9 9"/></svg>'}});class q extends B{constructor(){super(...arguments),Object.defineProperty(this,"selectedIndex",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"target",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"nav",{enumerable:!0,configurable:!0,writable:!0,value:null})}addAsTargetFor(t){this.target=this.instance,this.nav=t,this.attachEvents()}addAsNavFor(t){this.nav=this.instance,this.target=t,this.attachEvents()}attachEvents(){this.nav&&this.target&&(this.nav.options.initialSlide=this.target.options.initialPage,this.nav.on("ready",this.onNavReady),this.nav.state===F.Ready&&this.onNavReady(this.nav),this.target.on("ready",this.onTargetReady),this.target.state===F.Ready&&this.onTargetReady(this.target))}onNavReady(t){t.on("createSlide",this.onNavCreateSlide),t.on("Panzoom.click",this.onNavClick),t.on("Panzoom.touchEnd",this.onNavTouch),this.onTargetChange()}onTargetReady(t){t.on("change",this.onTargetChange),t.on("Panzoom.refresh",this.onTargetChange),this.onTargetChange()}onNavClick(t,e,i){this.onNavTouch(t,t.panzoom,i)}onNavTouch(t,e,i){var n,s;if(Math.abs(e.dragOffset.x)>3||Math.abs(e.dragOffset.y)>3)return;const o=i.target,{nav:a,target:r}=this;if(!a||!r||!o)return;const l=o.closest("[data-index]");if(i.stopPropagation(),i.preventDefault(),!l)return;const c=parseInt(l.dataset.index||"",10)||0,h=r.getPageForSlide(c),d=a.getPageForSlide(c);a.slideTo(d),r.slideTo(h,{friction:(null===(s=null===(n=this.nav)||void 0===n?void 0:n.plugins)||void 0===s?void 0:s.Sync.option("friction"))||0}),this.markSelectedSlide(c)}onNavCreateSlide(t,e){e.index===this.selectedIndex&&this.markSelectedSlide(e.index)}onTargetChange(){const{target:t,nav:e}=this;if(!t||!e)return;if(e.state!==F.Ready||t.state!==F.Ready)return;const i=t.pages[t.page].slides[0].index,n=e.getPageForSlide(i);this.markSelectedSlide(i),e.slideTo(n)}markSelectedSlide(t){const e=this.nav;e&&e.state===F.Ready&&(this.selectedIndex=t,[...e.slides].map((e=>{e.el&&e.el.classList[e.index===t?"add":"remove"]("is-nav-selected")})))}attach(){const t=this;let e=t.options.target,i=t.options.nav;e?t.addAsNavFor(e):i&&t.addAsTargetFor(i)}detach(){const t=this,e=t.nav,i=t.target;e&&(e.off("ready",t.onNavReady),e.off("createSlide",t.onNavCreateSlide),e.off("Panzoom.click",t.onNavClick),e.off("Panzoom.touchEnd",t.onNavTouch)),t.nav=null,i&&(i.off("ready",t.onTargetReady),i.off("refresh",t.onTargetChange),i.off("change",t.onTargetChange)),t.target=null}}Object.defineProperty(q,"defaults",{enumerable:!0,configurable:!0,writable:!0,value:{friction:.35}});const V={Navigation:Y,Dots:_,Sync:q};class Z extends m{get axis(){return this.isHorizontal?"e":"f"}get isEnabled(){return this.state===F.Ready}get isInfinite(){let t=!1;const{contentDim:e,viewportDim:i,pages:n,slides:s}=this;return n.length>=2&&e+s[0].dim>=i&&(t=this.option("infinite")),t}get isRTL(){return"rtl"===this.option("direction")}get isHorizontal(){return"x"===this.option("axis")}constructor(t,e={},i={}){if(super(),Object.defineProperty(this,"userOptions",{enumerable:!0,configurable:!0,writable:!0,value:{}}),Object.defineProperty(this,"userPlugins",{enumerable:!0,configurable:!0,writable:!0,value:{}}),Object.defineProperty(this,"bp",{enumerable:!0,configurable:!0,writable:!0,value:""}),Object.defineProperty(this,"lp",{enumerable:!0,configurable:!0,writable:!0,value:0}),Object.defineProperty(this,"state",{enumerable:!0,configurable:!0,writable:!0,value:F.Init}),Object.defineProperty(this,"page",{enumerable:!0,configurable:!0,writable:!0,value:0}),Object.defineProperty(this,"prevPage",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"container",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"viewport",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"track",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"slides",{enumerable:!0,configurable:!0,writable:!0,value:[]}),Object.defineProperty(this,"pages",{enumerable:!0,configurable:!0,writable:!0,value:[]}),Object.defineProperty(this,"panzoom",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"inTransition",{enumerable:!0,configurable:!0,writable:!0,value:new Set}),Object.defineProperty(this,"contentDim",{enumerable:!0,configurable:!0,writable:!0,value:0}),Object.defineProperty(this,"viewportDim",{enumerable:!0,configurable:!0,writable:!0,value:0}),"string"==typeof t&&(t=document.querySelector(t)),!t||!x(t))throw new Error("No Element found");this.container=t,this.slideNext=k(this.slideNext.bind(this),150),this.slidePrev=k(this.slidePrev.bind(this),150),this.userOptions=e,this.userPlugins=i,queueMicrotask((()=>{this.processOptions()}))}processOptions(){const t=u({},Z.defaults,this.userOptions);let e="";const i=t.breakpoints;if(i&&d(i))for(const[n,s]of Object.entries(i))window.matchMedia(n).matches&&d(s)&&(e+=n,u(t,s));e===this.bp&&this.state!==F.Init||(this.bp=e,this.state===F.Ready&&(t.initialSlide=this.pages[this.page].slides[0].index),this.state!==F.Init&&this.destroy(),super.setOptions(t),!1===this.option("enabled")?this.attachEvents():setTimeout((()=>{this.init()}),0))}init(){this.state=F.Init,this.emit("init"),this.attachPlugins(Object.assign(Object.assign({},Z.Plugins),this.userPlugins)),this.initLayout(),this.initSlides(),this.updateMetrics(),this.setInitialPosition(),this.initPanzoom(),this.attachEvents(),this.state=F.Ready,this.emit("ready")}initLayout(){const{container:t}=this,e=this.option("classes");S(t,this.cn("container")),o(t,e.isLTR,!this.isRTL),o(t,e.isRTL,this.isRTL),o(t,e.isVertical,!this.isHorizontal),o(t,e.isHorizontal,this.isHorizontal);let i=this.option("viewport")||t.querySelector(`.${e.viewport}`);i||(i=document.createElement("div"),S(i,e.viewport),i.append(...I(t,`.${e.slide}`)),t.prepend(i));let n=this.option("track")||t.querySelector(`.${e.track}`);n||(n=document.createElement("div"),S(n,e.track),n.append(...Array.from(i.childNodes))),n.setAttribute("aria-live","polite"),i.contains(n)||i.prepend(n),this.viewport=i,this.track=n,this.emit("initLayout")}initSlides(){const{track:t}=this;if(t){this.slides=[],[...I(t,`.${this.cn("slide")}`)].forEach((t=>{if(x(t)){const e=j({el:t,isDom:!0,index:this.slides.length});this.slides.push(e),this.emit("initSlide",e,this.slides.length)}}));for(let t of this.option("slides",[])){const e=j(t);e.index=this.slides.length,this.slides.push(e),this.emit("initSlide",e,this.slides.length)}this.emit("initSlides")}}setInitialPage(){let t=0;const e=this.option("initialSlide");t="number"==typeof e?this.getPageForSlide(e):parseInt(this.option("initialPage",0)+"",10)||0,this.page=t}setInitialPosition(){if(!this.track||!this.pages.length)return;const t=this.isHorizontal;let e=this.page;this.pages[e]||(this.page=e=0);const i=this.pages[e].pos*(this.isRTL&&t?1:-1),n=t?`${i}px`:"0",s=t?"0":`${i}px`;this.track.style.transform=`translate3d(${n}, ${s}, 0) scale(1)`,this.option("adaptiveHeight")&&this.setViewportHeight()}initPanzoom(){this.panzoom&&(this.panzoom.destroy(),this.panzoom=null);const t=this.option("Panzoom")||{};this.panzoom=new R(this.viewport,u({},{content:this.track,zoom:!1,panOnlyZoomed:!1,lockAxis:this.isHorizontal?"x":"y",infinite:this.isInfinite,click:!1,dblClick:!1,touch:t=>!(this.pages.length<2&&!t.options.infinite),bounds:()=>this.getBounds(),maxVelocity:t=>Math.abs(t.target[this.axis]-t.current[this.axis])<2*this.viewportDim?100:0},t)),this.panzoom.on("*",((t,e,...i)=>{this.emit(`Panzoom.${e}`,t,...i)})),this.panzoom.on("decel",this.onDecel),this.panzoom.on("refresh",this.onRefresh),this.panzoom.on("beforeTransform",this.onBeforeTransform),this.panzoom.on("endAnimation",this.onEndAnimation)}attachEvents(){const t=this.container;t&&(t.addEventListener("click",this.onClick,{passive:!1,capture:!1}),t.addEventListener("slideTo",this.onSlideTo)),window.addEventListener("resize",this.onResize)}createPages(){let t=[];const{contentDim:e,viewportDim:i}=this;let n=this.option("slidesPerPage");("number"!=typeof n||e<=i)&&(n=1/0);let s=0,o=0,a=0;for(const e of this.slides)(!t.length||o+e.dim>i||a===n)&&(t.push(H()),s=t.length-1,o=0,a=0),t[s].slides.push(e),o+=e.dim+e.gap,a++;return t}processPages(){const e=this.pages,{contentDim:i,viewportDim:n}=this,s=this.option("center"),o=this.option("fill"),a=o&&s&&i>n&&!this.isInfinite;if(e.forEach(((t,e)=>{t.index=e,t.pos=t.slides[0].pos,t.dim=0;for(const[e,i]of t.slides.entries())t.dim+=i.dim,e<t.slides.length-1&&(t.dim+=i.gap);a&&t.pos+.5*t.dim<.5*n?t.pos=0:a&&t.pos+.5*t.dim>=i-.5*n?t.pos=i-n:s&&(t.pos+=-.5*(n-t.dim))})),e.forEach(((e,s)=>{o&&!this.isInfinite&&i>n&&(e.pos=Math.max(e.pos,0),e.pos=Math.min(e.pos,i-n)),e.pos=t(e.pos,1e3),e.dim=t(e.dim,1e3),Math.abs(e.pos)<=.1&&(e.pos=0)})),this.isInfinite)return e;const r=[];let l;return e.forEach((t=>{const e=Object.assign({},t);l&&e.pos===l.pos?(l.dim+=e.dim,l.slides=[...l.slides,...e.slides]):(e.index=r.length,l=e,r.push(e))})),r}getPageFromIndex(t=0){const e=this.pages.length;let i;return t=parseInt((t||0).toString())||0,i=this.isInfinite?(t%e+e)%e:Math.max(Math.min(t,e-1),0),i}getSlideMetrics(e){var i,n;const s=this.isHorizontal?"width":"height";let o=0,a=0,r=e.el;const l=r&&!r.parentNode;if(r?o=parseFloat(r.dataset[s]||"")||0:(r=document.createElement("div"),r.style.visibility="hidden",(this.track||document.body).prepend(r)),S(r,this.cn("slide")+" "+e.class+" "+e.customClass),o)r.style[s]=`${o}px`,r.style["width"===s?"height":"width"]="";else{l&&(this.track||document.body).prepend(r);const t=Math.max(1,(null===(i=window.visualViewport)||void 0===i?void 0:i.scale)||1);o=r.getBoundingClientRect()[s]*t}const c=getComputedStyle(r);return"content-box"===c.boxSizing&&(this.isHorizontal?(o+=parseFloat(c.paddingLeft)||0,o+=parseFloat(c.paddingRight)||0):(o+=parseFloat(c.paddingTop)||0,o+=parseFloat(c.paddingBottom)||0)),a=parseFloat(c[this.isHorizontal?"marginRight":"marginBottom"])||0,l?null===(n=r.parentElement)||void 0===n||n.removeChild(r):e.el||r.remove(),{dim:t(o,1e3),gap:t(a,1e3)}}getBounds(){const{isInfinite:t,isRTL:e,isHorizontal:i,pages:n}=this;let s={min:0,max:0};if(t)s={min:-1/0,max:1/0};else if(n.length){const t=n[0].pos,o=n[n.length-1].pos;s=e&&i?{min:t,max:o}:{min:-1*o,max:-1*t}}return{x:i?s:{min:0,max:0},y:i?{min:0,max:0}:s}}repositionSlides(){let e,{isHorizontal:i,isRTL:n,isInfinite:s,viewport:o,viewportDim:a,contentDim:r,page:l,pages:c,slides:h,panzoom:d}=this,u=0,p=0,f=0,m=0;d?m=-1*d.current[this.axis]:c[l]&&(m=c[l].pos||0),e=i?n?"right":"left":"top",n&&i&&(m*=-1);for(const i of h)i.el?("top"===e?(i.el.style.right="",i.el.style.left=""):i.el.style.top="",i.index!==u?i.el.style[e]=0===p?"":`${t(p,1e3)}px`:i.el.style[e]="",f+=i.dim+i.gap,u++):p+=i.dim+i.gap;if(s&&f&&o){let n=getComputedStyle(o),s="padding",l=i?"Right":"Bottom",c=parseFloat(n[s+(i?"Left":"Top")]);m-=c,a+=c,a+=parseFloat(n[s+l]);for(const i of h)i.el&&(t(i.pos)<t(a)&&t(i.pos+i.dim+i.gap)<t(m)&&t(m)>t(r-a)&&(i.el.style[e]=`${t(p+f,1e3)}px`),t(i.pos+i.gap)>=t(r-a)&&t(i.pos)>t(m+a)&&t(m)<t(a)&&(i.el.style[e]=`-${t(f,1e3)}px`))}let g,b,v=[...this.inTransition];if(v.length>1&&(g=c[v[0]],b=c[v[1]]),g&&b){let i=0;for(const n of h)n.el?this.inTransition.has(n.index)&&g.slides.indexOf(n)<0&&(n.el.style[e]=`${t(i+(g.pos-b.pos),1e3)}px`):i+=n.dim+n.gap}}createSlideEl(t){const{track:e,slides:i}=this;if(!e||!t)return;if(t.el&&t.el.parentNode)return;const n=t.el||document.createElement("div");S(n,this.cn("slide")),S(n,t.class),S(n,t.customClass);const s=t.html;s&&(s instanceof HTMLElement?n.appendChild(s):n.innerHTML=t.html+"");const o=[];i.forEach(((t,e)=>{t.el&&o.push(e)}));const a=t.index;let r=null;if(o.length){r=i[o.reduce(((t,e)=>Math.abs(e-a)<Math.abs(t-a)?e:t))]}const l=r&&r.el&&r.el.parentNode?r.index<t.index?r.el.nextSibling:r.el:null;e.insertBefore(n,e.contains(l)?l:null),t.el=n,this.emit("createSlide",t)}removeSlideEl(t,e=!1){const i=t.el;if(!i||!i.parentNode)return;if(E(i,this.cn("isSelected")),t.isDom&&!e)return i.removeAttribute("aria-hidden"),i.removeAttribute("data-index"),E(i,this.cn("isSelected")),void(i.style.left="");this.emit("removeSlide",t);const n=new CustomEvent("animationend");i.dispatchEvent(n),t.el&&(t.el.remove(),t.el=null)}transitionTo(t=0,e=this.option("transition")){if(!e)return!1;const{pages:i,panzoom:n}=this;t=parseInt((t||0).toString())||0;const s=this.getPageFromIndex(t);if(!n||!i[s]||i.length<2||Math.abs(i[this.page].slides[0].dim-this.viewportDim)>1)return!1;const o=t>this.page?1:-1,a=this.pages[s].pos*(this.isRTL?1:-1);if(this.page===s&&Math.abs(a-n.target[this.axis])<1)return!1;this.clearTransitions();const r=n.isResting;S(this.container,this.cn("inTransition"));const l=this.pages[this.page].slides[0],c=this.pages[s].slides[0];this.inTransition.add(c.index),this.createSlideEl(c);let h=l.el,d=c.el;r||"slide"===e||(e="fadeFast",h=null);const u=this.isRTL?"next":"prev",p=this.isRTL?"prev":"next";return h&&(this.inTransition.add(l.index),l.transition=e,h.addEventListener("animationend",this.onAnimationEnd),h.classList.add(`f-${e}Out`,`to-${o>0?p:u}`)),d&&(c.transition=e,d.addEventListener("animationend",this.onAnimationEnd),d.classList.add(`f-${e}In`,`from-${o>0?u:p}`)),n.panTo({x:this.isHorizontal?a:0,y:this.isHorizontal?0:a,friction:0}),this.onChange(s),!0}manageSlideVisiblity(){const t=new Set,e=new Set,i=this.getVisibleSlides(parseFloat(this.option("preload",0)+"")||0);for(const n of this.slides)i.has(n)?t.add(n):e.add(n);for(const e of this.inTransition)t.add(this.slides[e]);for(const e of t)this.createSlideEl(e),this.lazyLoadSlide(e);for(const i of e)t.has(i)||this.removeSlideEl(i);this.markSelectedSlides(),this.repositionSlides()}markSelectedSlides(){if(!this.pages[this.page]||!this.pages[this.page].slides)return;const t="aria-hidden";let e=this.cn("isSelected");if(e)for(const i of this.slides)i.el&&(i.el.dataset.index=`${i.index}`,this.pages[this.page].slides.includes(i)?(i.el.classList.contains(e)||(S(i.el,e),this.emit("selectSlide",i)),i.el.removeAttribute(t)):(i.el.classList.contains(e)&&(E(i.el,e),this.emit("unselectSlide",i)),i.el.setAttribute(t,"true")))}flipInfiniteTrack(){const t=this.panzoom;if(!t||!this.isInfinite)return;const e="x"===this.option("axis")?"e":"f",{viewportDim:i,contentDim:n}=this;let s=t.current[e],o=t.target[e]-s,a=0,r=.5*i,l=n;this.isRTL&&this.isHorizontal?(s<-r&&(a=-1,s+=l),s>l-r&&(a=1,s-=l)):(s>r&&(a=1,s-=l),s<-l+r&&(a=-1,s+=l)),a&&(t.current[e]=s,t.target[e]=s+o)}lazyLoadSlide(t){const e=this,i=t&&t.el;if(!i)return;const s=new Set,o="f-fadeIn";i.querySelectorAll("[data-lazy-srcset]").forEach((t=>{t instanceof HTMLImageElement&&s.add(t)}));let a=Array.from(i.querySelectorAll("[data-lazy-src]"));i.dataset.lazySrc&&a.push(i),a.map((t=>{t instanceof HTMLImageElement?s.add(t):x(t)&&(t.style.backgroundImage=`url('${t.dataset.lazySrc||""}')`,delete t.dataset.lazySrc)}));const r=(t,i,n)=>{n&&(n.remove(),n=null),i.complete&&(i.classList.add(o),setTimeout((()=>{i.classList.remove(o)}),350),i.style.display=""),this.option("adaptiveHeight")&&t.el&&this.pages[this.page].slides.indexOf(t)>-1&&(e.updateMetrics(),e.setViewportHeight()),this.emit("load",t)};for(const e of s){let i=null;e.src=e.dataset.lazySrcset||e.dataset.lazySrc||"",delete e.dataset.lazySrc,delete e.dataset.lazySrcset,e.style.display="none",e.addEventListener("error",(()=>{r(t,e,i)})),e.addEventListener("load",(()=>{r(t,e,i)})),setTimeout((()=>{e.parentNode&&t.el&&(e.complete?r(t,e,i):(i=n(w),e.parentNode.insertBefore(i,e)))}),300)}}onAnimationEnd(t){var e;const i=t.target,n=i?parseInt(i.dataset.index||"",10)||0:-1,s=this.slides[n],o=t.animationName;if(!i||!s||!o)return;const a=!!this.inTransition.has(n)&&s.transition;a&&o.substring(0,a.length+2)===`f-${a}`&&this.inTransition.delete(n),this.inTransition.size||this.clearTransitions(),n===this.page&&(null===(e=this.panzoom)||void 0===e?void 0:e.isResting)&&this.emit("settle")}onDecel(t,e=0,i=0,n=0,s=0){const{isRTL:o,isHorizontal:a,axis:r,pages:l}=this,c=l.length,h=Math.abs(Math.atan2(i,e)/(Math.PI/180));let d=0;if(d=h>45&&h<135?a?0:i:a?e:0,!c)return;const u=this.option("dragFree");let p=this.page,f=o&&a?1:-1;const m=t.target[r]*f,g=t.current[r]*f;let{pageIndex:b}=this.getPageFromPosition(m),{pageIndex:v}=this.getPageFromPosition(g);u?this.onChange(b):(Math.abs(d)>5?(l[p].dim<document.documentElement["client"+(this.isHorizontal?"Width":"Height")]-1&&(p=v),p=o&&a?d<0?p-1:p+1:d<0?p+1:p-1):p=0===n&&0===s?p:v,this.slideTo(p,{transition:!1,friction:t.option("decelFriction")}))}onClick(t){const e=t.target,i=e&&x(e)?e.dataset:null;let n,s;i&&(void 0!==i.carouselPage?(s="slideTo",n=i.carouselPage):void 0!==i.carouselNext?s="slideNext":void 0!==i.carouselPrev&&(s="slidePrev")),s?(t.preventDefault(),t.stopPropagation(),e&&!e.hasAttribute("disabled")&&this[s](n)):this.emit("click",t)}onSlideTo(t){const e=t.detail||0;this.slideTo(this.getPageForSlide(e),{friction:0})}onChange(t,e=0){const i=this.page;this.prevPage=i,this.page=t,this.option("adaptiveHeight")&&this.setViewportHeight(),t!==i&&(this.markSelectedSlides(),this.emit("change",t,i,e))}onRefresh(){let t=this.contentDim,e=this.viewportDim;this.updateMetrics(),this.contentDim===t&&this.viewportDim===e||this.slideTo(this.page,{friction:0,transition:!1})}onResize(){this.option("breakpoints")&&this.processOptions()}onBeforeTransform(t){this.lp!==t.current[this.axis]&&(this.flipInfiniteTrack(),this.manageSlideVisiblity()),this.lp=t.current.e}onEndAnimation(){this.inTransition.size||this.emit("settle")}reInit(t=null,e=null){this.destroy(),this.state=F.Init,this.userOptions=t||this.userOptions,this.userPlugins=e||this.userPlugins,this.processOptions()}slideTo(t=0,{friction:e=this.option("friction"),transition:i=this.option("transition")}={}){if(this.state===F.Destroy)return;const{axis:n,isHorizontal:s,isRTL:o,pages:a,panzoom:r}=this,l=a.length,c=o&&s?1:-1;if(!r||!l)return;if(this.transitionTo(t,i))return;const h=this.getPageFromIndex(t);let d=a[h].pos;if(this.isInfinite){const e=this.contentDim,i=r.target[n]*c;if(2===l)d+=e*Math.floor(parseFloat(t+"")/2);else{const t=i;d=[d,d-e,d+e].reduce((function(e,i){return Math.abs(i-t)<Math.abs(e-t)?i:e}))}}d*=c,Math.abs(r.target[n]-d)<.1||(r.panTo({x:s?d:0,y:s?0:d,friction:e}),this.onChange(h))}slideToClosest(t){if(this.panzoom){const{pageIndex:e}=this.getPageFromPosition(this.panzoom.current[this.isHorizontal?"e":"f"]);this.slideTo(e,t)}}slideNext(){this.slideTo(this.page+1)}slidePrev(){this.slideTo(this.page-1)}clearTransitions(){this.inTransition.clear(),E(this.container,this.cn("inTransition"));const t=["to-prev","to-next","from-prev","from-next"];for(const e of this.slides){const i=e.el;if(i){i.removeEventListener("animationend",this.onAnimationEnd),i.classList.remove(...t);const n=e.transition;n&&i.classList.remove(`f-${n}Out`,`f-${n}In`)}}this.manageSlideVisiblity()}prependSlide(t){var e,i;let n=Array.isArray(t)?t:[t];for(const t of n.reverse())this.slides.unshift(j(t));for(let t=0;t<this.slides.length;t++)this.slides[t].index=t;const s=(null===(e=this.pages[this.page])||void 0===e?void 0:e.pos)||0;this.page+=n.length,this.updateMetrics();const o=(null===(i=this.pages[this.page])||void 0===i?void 0:i.pos)||0;if(this.panzoom){const t=this.isRTL?s-o:o-s;this.panzoom.target.e-=t,this.panzoom.current.e-=t,this.panzoom.requestTick()}}appendSlide(t){let e=Array.isArray(t)?t:[t];for(const t of e){const e=j(t);e.index=this.slides.length,this.slides.push(e),this.emit("initSlide",e,this.slides.length)}this.updateMetrics()}removeSlide(t){const e=this.slides.length;t=(t%e+e)%e,this.removeSlideEl(this.slides[t],!0),this.slides.splice(t,1);for(let t=0;t<this.slides.length;t++)this.slides[t].index=t;this.updateMetrics(),this.slideTo(this.page,{friction:0,transition:!1})}updateMetrics(){const{panzoom:e,viewport:i,track:n,isHorizontal:s}=this;if(!n)return;const o=s?"width":"height",a=s?"offsetWidth":"offsetHeight";if(i){let e=Math.max(i[a],t(i.getBoundingClientRect()[o],1e3)),n=getComputedStyle(i),r="padding",l=s?"Right":"Bottom";e-=parseFloat(n[r+(s?"Left":"Top")])+parseFloat(n[r+l]),this.viewportDim=e}let r,l=this.pages.length,c=0;for(const[e,i]of this.slides.entries()){let n=0,s=0;!i.el&&r?(n=r.dim,s=r.gap):(({dim:n,gap:s}=this.getSlideMetrics(i)),r=i),n=t(n,1e3),s=t(s,1e3),i.dim=n,i.gap=s,i.pos=c,c+=n,(this.isInfinite||e<this.slides.length-1)&&(c+=s)}const h=this.contentDim;c=t(c,1e3),this.contentDim=c,e&&(e.contentRect[o]=c,e.contentRect["e"===this.axis?"fullWidth":"fullHeight"]=c),this.pages=this.createPages(),this.pages=this.processPages(),this.state===F.Init&&this.setInitialPage(),this.page=Math.max(0,Math.min(this.page,this.pages.length-1)),e&&l===this.pages.length&&Math.abs(c-h)>.5&&(e.target[this.axis]=-1*this.pages[this.page].pos,e.current[this.axis]=-1*this.pages[this.page].pos,e.stop()),this.manageSlideVisiblity(),this.emit("refresh")}getProgress(e,i=!1){void 0===e&&(e=this.page);const n=this,s=n.panzoom,o=n.pages[e]||0;if(!o||!s)return 0;let a=-1*s.current.e,r=n.contentDim;var l=[t((a-o.pos)/(1*o.dim),1e3),t((a+r-o.pos)/(1*o.dim),1e3),t((a-r-o.pos)/(1*o.dim),1e3)].reduce((function(t,e){return Math.abs(e)<Math.abs(t)?e:t}));return i?l:Math.max(-1,Math.min(1,l))}setViewportHeight(){const{page:t,pages:e,viewport:i,isHorizontal:n}=this;if(!i||!e[t])return;let s=0;n&&this.track&&(this.track.style.height="auto",e[t].slides.forEach((t=>{t.el&&(s=Math.max(s,t.el.offsetHeight))}))),i.style.height=s?`${s}px`:""}getPageForSlide(t){for(const e of this.pages)for(const i of e.slides)if(i.index===t)return e.index;return-1}getVisibleSlides(t=0){var e;const i=new Set;let{contentDim:n,viewportDim:s,pages:o,page:a}=this;n=n+(null===(e=this.slides[this.slides.length-1])||void 0===e?void 0:e.gap)||0;let r=0;r=this.panzoom?-1*this.panzoom.current[this.axis]:o[a]&&o[a].pos||0,this.isInfinite&&(r-=Math.floor(r/n)*n),this.isRTL&&this.isHorizontal&&(r*=-1);const l=r-s*t,c=r+s*(t+1),h=this.isInfinite?[-1,0,1]:[0];for(const t of this.slides)for(const e of h){const s=t.pos+e*n,o=t.pos+t.dim+t.gap+e*n;s<c&&o>l&&i.add(t)}return i}getPageFromPosition(t){const{viewportDim:e,contentDim:i}=this,n=this.pages.length,s=this.slides.length,o=this.slides[s-1];let a=0,r=0,l=0;const c=this.option("center");c&&(t+=.5*e),this.isInfinite||(t=Math.max(this.slides[0].pos,Math.min(t,o.pos)));const h=i+o.gap;l=Math.floor(t/h)||0,t-=l*h;let d=o,u=this.slides.find((e=>{const i=t+(d&&!c?.5*d.dim:0);return d=e,e.pos<=i&&e.pos+e.dim+e.gap>i}));return u||(u=o),r=this.getPageForSlide(u.index),a=r+l*n,{page:a,pageIndex:r}}destroy(){if([F.Destroy].includes(this.state))return;this.state=F.Destroy;const{container:t,viewport:e,track:i,slides:n,panzoom:s}=this,o=this.option("classes");t.removeEventListener("click",this.onClick,{passive:!1,capture:!1}),t.removeEventListener("slideTo",this.onSlideTo),window.removeEventListener("resize",this.onResize),s&&(s.destroy(),this.panzoom=null),n&&n.forEach((t=>{this.removeSlideEl(t)})),this.detachPlugins(),e&&e.offsetParent&&i&&i.offsetParent&&e.replaceWith(...i.childNodes);for(const[e,i]of Object.entries(o))"container"!==e&&i&&t.classList.remove(i);this.track=null,this.viewport=null,this.page=0,this.slides=[];const a=this.events.get("ready");this.events=new Map,a&&this.events.set("ready",a)}}Object.defineProperty(Z,"Panzoom",{enumerable:!0,configurable:!0,writable:!0,value:R}),Object.defineProperty(Z,"defaults",{enumerable:!0,configurable:!0,writable:!0,value:D}),Object.defineProperty(Z,"Plugins",{enumerable:!0,configurable:!0,writable:!0,value:V});const U=function(t){const e=window.pageYOffset,i=window.pageYOffset+window.innerHeight;if(!x(t))return 0;const n=t.getBoundingClientRect(),s=n.y+window.pageYOffset,o=n.y+n.height+window.pageYOffset;if(e>o||i<s)return 0;if(e<s&&i>o)return 100;if(s<e&&o>i)return 100;let a=n.height;s<e&&(a-=window.pageYOffset-s),o>i&&(a-=o-i);const r=a/window.innerHeight*100;return Math.round(r)},G=!("undefined"==typeof window||!window.document||!window.document.createElement);let K;const J=["a[href]","area[href]",'input:not([disabled]):not([type="hidden"]):not([aria-hidden])',"select:not([disabled]):not([aria-hidden])","textarea:not([disabled]):not([aria-hidden])","button:not([disabled]):not([aria-hidden]):not(.fancybox-focus-guard)","iframe","object","embed","video","audio","[contenteditable]",'[tabindex]:not([tabindex^="-"]):not([disabled]):not([aria-hidden])'].join(","),Q=t=>{if(t&&G){void 0===K&&document.createElement("div").focus({get preventScroll(){return K=!0,!1}});try{if(K)t.focus({preventScroll:!0});else{const e=window.pageXOffset||document.body.scrollTop,i=window.pageYOffset||document.body.scrollLeft;t.focus(),document.body.scrollTo({top:e,left:i,behavior:"auto"})}}catch(t){}}},tt={dragToClose:!0,hideScrollbar:!0,Carousel:{classes:{container:"fancybox__carousel",viewport:"fancybox__viewport",track:"fancybox__track",slide:"fancybox__slide"}},contentClick:"toggleZoom",contentDblClick:!1,backdropClick:"close",animated:!0,idle:3500,showClass:"f-zoomInUp",hideClass:"f-fadeOut",commonCaption:!1,parentEl:null,startIndex:0,l10n:Object.assign(Object.assign({},v),{CLOSE:"Close",NEXT:"Next",PREV:"Previous",MODAL:"You can close this modal content with the ESC key",ERROR:"Something Went Wrong, Please Try Again Later",IMAGE_ERROR:"Image Not Found",ELEMENT_NOT_FOUND:"HTML Element Not Found",AJAX_NOT_FOUND:"Error Loading AJAX : Not Found",AJAX_FORBIDDEN:"Error Loading AJAX : Forbidden",IFRAME_ERROR:"Error Loading Page",TOGGLE_ZOOM:"Toggle zoom level",TOGGLE_THUMBS:"Toggle thumbnails",TOGGLE_SLIDESHOW:"Toggle slideshow",TOGGLE_FULLSCREEN:"Toggle full-screen mode",DOWNLOAD:"Download"}),tpl:{closeButton:'<button data-fancybox-close class="f-button is-close-btn" title="{{CLOSE}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" tabindex="-1"><path d="M20 20L4 4m16 0L4 20"/></svg></button>',main:'<div class="fancybox__container" role="dialog" aria-modal="true" aria-label="{{MODAL}}" tabindex="-1">\n    <div class="fancybox__backdrop"></div>\n    <div class="fancybox__carousel"></div>\n    <div class="fancybox__footer"></div>\n  </div>'},groupAll:!1,groupAttr:"data-fancybox",defaultType:"image",defaultDisplay:"block",autoFocus:!0,trapFocus:!0,placeFocusBack:!0,closeButton:"auto",keyboard:{Escape:"close",Delete:"close",Backspace:"close",PageUp:"next",PageDown:"prev",ArrowUp:"prev",ArrowDown:"next",ArrowRight:"next",ArrowLeft:"prev"},Fullscreen:{autoStart:!1},compact:()=>window.matchMedia("(max-width: 578px), (max-height: 578px)").matches,wheel:"zoom"};var et,it;!function(t){t[t.Init=0]="Init",t[t.Ready=1]="Ready",t[t.Closing=2]="Closing",t[t.CustomClosing=3]="CustomClosing",t[t.Destroy=4]="Destroy"}(et||(et={})),function(t){t[t.Loading=0]="Loading",t[t.Opening=1]="Opening",t[t.Ready=2]="Ready",t[t.Closing=3]="Closing"}(it||(it={}));const nt=()=>{queueMicrotask((()=>{(()=>{const{slug:t,index:e}=st.parseURL(),i=_t.getInstance();if(i&&!1!==i.option("Hash")){const n=i.carousel;if(t&&n){for(let e of n.slides)if(e.slug&&e.slug===t)return n.slideTo(e.index);if(t===i.option("slug"))return n.slideTo(e-1);const s=i.getSlide(),o=s&&s.triggerEl&&s.triggerEl.dataset;if(o&&o.fancybox===t)return n.slideTo(e-1)}st.hasSilentClose=!0,i.close()}st.startFromUrl()})()}))};class st extends B{constructor(){super(...arguments),Object.defineProperty(this,"origHash",{enumerable:!0,configurable:!0,writable:!0,value:""}),Object.defineProperty(this,"timer",{enumerable:!0,configurable:!0,writable:!0,value:null})}onChange(){const t=this.instance,e=t.carousel;this.timer&&clearTimeout(this.timer);const i=t.getSlide();if(!e||!i)return;const n=t.isOpeningSlide(i),s=new URL(document.URL).hash;let o,a=i.slug||void 0,r=i.triggerEl||void 0;o=a||this.instance.option("slug"),!o&&r&&r.dataset&&(o=r.dataset.fancybox);let l="";o&&"true"!==o&&(l="#"+o+(!a&&e.slides.length>1?"-"+(i.index+1):"")),n&&(this.origHash=s!==l?s:""),l&&s!==l&&(this.timer=setTimeout((()=>{try{t.state===et.Ready&&window.history[n?"pushState":"replaceState"]({},document.title,window.location.pathname+window.location.search+l)}catch(t){}}),300))}onClose(){if(this.timer&&clearTimeout(this.timer),!0!==st.hasSilentClose)try{window.history.replaceState({},document.title,window.location.pathname+window.location.search+(this.origHash||""))}catch(t){}}attach(){const t=this.instance;t.on("Carousel.ready",this.onChange),t.on("Carousel.change",this.onChange),t.on("close",this.onClose)}detach(){const t=this.instance;t.off("Carousel.ready",this.onChange),t.off("Carousel.change",this.onChange),t.off("close",this.onClose)}static parseURL(){const t=window.location.hash.slice(1),e=t.split("-"),i=e[e.length-1],n=i&&/^\+?\d+$/.test(i)&&parseInt(e.pop()||"1",10)||1;return{hash:t,slug:e.join("-"),index:n}}static startFromUrl(){if(st.hasSilentClose=!1,_t.getInstance()||!1===_t.defaults.Hash)return;const{hash:t,slug:e,index:i}=st.parseURL();if(!e)return;let n=document.querySelector(`[data-slug="${t}"]`);if(n&&n.dispatchEvent(new CustomEvent("click",{bubbles:!0,cancelable:!0})),_t.getInstance())return;const s=document.querySelectorAll(`[data-fancybox="${e}"]`);s.length&&(n=s[i-1],n&&n.dispatchEvent(new CustomEvent("click",{bubbles:!0,cancelable:!0})))}static destroy(){window.removeEventListener("hashchange",nt,!1)}}function ot(){window.addEventListener("hashchange",nt,!1),setTimeout((()=>{st.startFromUrl()}),500)}Object.defineProperty(st,"defaults",{enumerable:!0,configurable:!0,writable:!0,value:{}}),Object.defineProperty(st,"hasSilentClose",{enumerable:!0,configurable:!0,writable:!0,value:!1}),G&&(/complete|interactive|loaded/.test(document.readyState)?ot():document.addEventListener("DOMContentLoaded",ot));class at extends B{onCreateSlide(t,e,i){const n=this.instance.optionFor(i,"src")||"";i.el&&"image"===i.type&&"string"==typeof n&&this.setImage(i,n)}onRemoveSlide(t,e,i){i.panzoom&&i.panzoom.destroy(),i.panzoom=void 0,i.imageEl=void 0}onChange(t,e,i,n){for(const t of e.slides){const e=t.panzoom;e&&t.index!==i&&e.reset(.35)}}onClose(){var t;const e=this.instance,i=e.container,n=e.getSlide();if(!i||!i.parentElement||!n)return;const{el:s,contentEl:o,panzoom:a}=n,r=n.thumbElSrc;if(!s||!r||!o||!a||a.isContentLoading||a.state===g.Init||a.state===g.Destroy)return;a.updateMetrics();let l=this.getZoomInfo(n);if(!l)return;this.instance.state=et.CustomClosing,i.classList.remove("is-zooming-in"),i.classList.add("is-zooming-out"),o.style.backgroundImage=`url('${r}')`;const c=i.getBoundingClientRect();1===((null===(t=window.visualViewport)||void 0===t?void 0:t.scale)||1)&&Object.assign(i.style,{position:"absolute",top:`${window.pageYOffset}px`,left:`${window.pageXOffset}px`,bottom:"auto",right:"auto",width:`${c.width}px`,height:`${c.height}px`,overflow:"hidden"});const{x:h,y:d,scale:u,opacity:p}=l;if(p){const t=((t,e,i,n)=>{const s=e-t,o=n-i;return e=>i+((e-t)/s*o||0)})(a.scale,u,1,0);a.on("afterTransform",(()=>{o.style.opacity=t(a.scale)+""}))}a.on("endAnimation",(()=>{e.destroy()})),a.target.a=u,a.target.b=0,a.target.c=0,a.target.d=u,a.panTo({x:h,y:d,scale:u,friction:p?.2:.33,ignoreBounds:!0}),a.isResting&&e.destroy()}setImage(t,e){const i=this.instance;t.src=e,this.process(t,e).then((e=>{var n;const s=t.contentEl,o=t.imageEl,a=t.thumbElSrc;if(i.isClosing()||!s||!o)return;s.offsetHeight;const r=!!i.isOpeningSlide(t)&&this.getZoomInfo(t);if(this.option("protected")){null===(n=t.el)||void 0===n||n.addEventListener("contextmenu",(t=>{t.preventDefault()}));const e=document.createElement("div");S(e,"fancybox-protected"),s.appendChild(e)}if(a&&r){const n=e.contentRect,o=Math.max(n.fullWidth,n.fullHeight);let c=null;!r.opacity&&o>1200&&(c=document.createElement("img"),S(c,"fancybox-ghost"),c.src=a,s.appendChild(c));const h=()=>{c&&(S(c,"f-fadeFastOut"),setTimeout((()=>{c&&(c.remove(),c=null)}),200))};(l=a,new Promise(((t,e)=>{const i=new Image;i.onload=t,i.onerror=e,i.src=l}))).then((()=>{t.state=it.Opening,this.instance.emit("reveal",t),this.zoomIn(t).then((()=>{h(),this.instance.done(t)}),(()=>{i.hideLoading(t)})),c&&setTimeout((()=>{h()}),o>2500?800:200)}),(()=>{i.hideLoading(t),i.revealContent(t)}))}else{const n=this.optionFor(t,"initialSize"),s=this.optionFor(t,"zoom"),o={event:i.prevMouseMoveEvent||i.options.event,friction:s?.12:0};let a=i.optionFor(t,"showClass")||void 0,r=!0;i.isOpeningSlide(t)&&("full"===n?e.zoomToFull(o):"cover"===n?e.zoomToCover(o):"max"===n?e.zoomToMax(o):r=!1,e.stop("current")),r&&a&&(a=e.isDragging?"f-fadeIn":""),i.revealContent(t,a)}var l}),(()=>{i.setError(t,"{{IMAGE_ERROR}}")}))}process(t,e){return new Promise(((i,s)=>{var o;const a=this.instance,r=t.el;a.clearContent(t),a.showLoading(t);let l=this.optionFor(t,"content");if("string"==typeof l&&(l=n(l)),!l||!x(l)){if(l=document.createElement("img"),l instanceof HTMLImageElement){let i="",n=t.caption;i="string"==typeof n&&n?n.replace(/<[^>]+>/gi,"").substring(0,1e3):`Image ${t.index+1} of ${null===(o=a.carousel)||void 0===o?void 0:o.pages.length}`,l.src=e||"",l.alt=i,l.draggable=!1,t.srcset&&l.setAttribute("srcset",t.srcset)}t.sizes&&l.setAttribute("sizes",t.sizes)}l.classList.add("fancybox-image"),t.imageEl=l,a.setContent(t,l,!1);t.panzoom=new R(r,u({transformParent:!0},this.option("Panzoom")||{},{content:l,width:a.optionFor(t,"width","auto"),height:a.optionFor(t,"height","auto"),wheel:()=>{const t=a.option("wheel");return("zoom"===t||"pan"==t)&&t},click:(e,i)=>{var n,s;if(a.isCompact||a.isClosing())return!1;if(t.index!==(null===(n=a.getSlide())||void 0===n?void 0:n.index))return!1;if(i){const t=i.composedPath()[0];if(["A","BUTTON","TEXTAREA","OPTION","INPUT","SELECT","VIDEO"].includes(t.nodeName))return!1}let o=!i||i.target&&(null===(s=t.contentEl)||void 0===s?void 0:s.contains(i.target));return a.option(o?"contentClick":"backdropClick")||!1},dblClick:()=>a.isCompact?"toggleZoom":a.option("contentDblClick")||!1,spinner:!1,panOnlyZoomed:!0,wheelLimit:1/0,on:{ready:t=>{i(t)},error:()=>{s()},destroy:()=>{s()}}}))}))}zoomIn(t){return new Promise(((e,i)=>{const n=this.instance,s=n.container,{panzoom:o,contentEl:a,el:r}=t;o&&o.updateMetrics();const l=this.getZoomInfo(t);if(!(l&&r&&a&&o&&s))return void i();const{x:c,y:h,scale:d,opacity:u}=l,p=()=>{t.state!==it.Closing&&(u&&(a.style.opacity=Math.max(Math.min(1,1-(1-o.scale)/(1-d)),0)+""),o.scale>=1&&o.scale>o.targetScale-.1&&e(o))},f=t=>{E(s,"is-zooming-in"),t.scale<.99||t.scale>1.01||(a.style.opacity="",t.off("endAnimation",f),t.off("touchStart",f),t.off("afterTransform",p),e(t))};o.on("endAnimation",f),o.on("touchStart",f),o.on("afterTransform",p),o.on(["error","destroy"],(()=>{i()})),o.panTo({x:c,y:h,scale:d,friction:0,ignoreBounds:!0}),o.stop("current");const m={event:"mousemove"===o.panMode?n.prevMouseMoveEvent||n.options.event:void 0},g=this.optionFor(t,"initialSize");S(s,"is-zooming-in"),n.hideLoading(t),"full"===g?o.zoomToFull(m):"cover"===g?o.zoomToCover(m):"max"===g?o.zoomToMax(m):o.reset(.172)}))}getZoomInfo(t){var e;const{el:i,imageEl:n,thumbEl:s,panzoom:o}=t;if(!i||!n||!s||!o||U(s)<3||!this.optionFor(t,"zoom")||this.instance.state===et.Destroy)return!1;if(1!==((null===(e=window.visualViewport)||void 0===e?void 0:e.scale)||1))return!1;let{top:a,left:r,width:l,height:c}=s.getBoundingClientRect(),{top:h,left:d,fitWidth:u,fitHeight:p}=o.contentRect;if(!(l&&c&&u&&p))return!1;const f=o.container.getBoundingClientRect();d+=f.left,h+=f.top;const m=-1*(d+.5*u-(r+.5*l)),g=-1*(h+.5*p-(a+.5*c)),b=l/u;let v=this.option("zoomOpacity")||!1;return"auto"===v&&(v=Math.abs(l/c-u/p)>.1),{x:m,y:g,scale:b,opacity:v}}attach(){const t=this,e=t.instance;e.on("Carousel.change",t.onChange),e.on("Carousel.createSlide",t.onCreateSlide),e.on("Carousel.removeSlide",t.onRemoveSlide),e.on("close",t.onClose)}detach(){const t=this,e=t.instance;e.off("Carousel.change",t.onChange),e.off("Carousel.createSlide",t.onCreateSlide),e.off("Carousel.removeSlide",t.onRemoveSlide),e.off("close",t.onClose)}}Object.defineProperty(at,"defaults",{enumerable:!0,configurable:!0,writable:!0,value:{initialSize:"fit",Panzoom:{maxScale:1},protected:!1,zoom:!0,zoomOpacity:"auto"}}),"function"==typeof SuppressedError&&SuppressedError;const rt=(t,e={})=>{const i=new URL(t),n=new URLSearchParams(i.search),s=new URLSearchParams;for(const[t,i]of[...n,...Object.entries(e)]){let e=i.toString();"t"===t?s.set("start",parseInt(e).toString()):s.set(t,e)}let o=s.toString(),a=t.match(/#t=((.*)?\d+s)/);return a&&(o+=`#t=${a[1]}`),o},lt={ajax:null,autoSize:!0,iframeAttr:{allow:"autoplay; fullscreen",scrolling:"auto"},preload:!0,videoAutoplay:!0,videoRatio:16/9,videoTpl:'<video class="fancybox__html5video" playsinline controls controlsList="nodownload" poster="{{poster}}">\n  <source src="{{src}}" type="{{format}}" />Sorry, your browser doesn\'t support embedded videos.</video>',videoFormat:"",vimeo:{byline:1,color:"00adef",controls:1,dnt:1,muted:0},youtube:{controls:1,enablejsapi:1,nocookie:1,rel:0,fs:1}},ct=["image","html","ajax","inline","clone","iframe","map","pdf","html5video","youtube","vimeo","video"];class ht extends B{onInitSlide(t,e,i){this.processType(i)}onCreateSlide(t,e,i){this.setContent(i)}onRemoveSlide(t,e,i){i.xhr&&(i.xhr.abort(),i.xhr=null);const n=i.iframeEl;n&&(n.onload=n.onerror=null,n.src="//about:blank",i.iframeEl=null);const s=i.contentEl,o=i.placeholderEl;if("inline"===i.type&&s&&o)s.classList.remove("fancybox__content"),"none"!==s.style.display&&(s.style.display="none"),o.parentNode&&o.parentNode.insertBefore(s,o),o.remove(),i.contentEl=void 0,i.placeholderEl=void 0;else for(;i.el&&i.el.firstChild;)i.el.removeChild(i.el.firstChild)}onSelectSlide(t,e,i){i.state===it.Ready&&this.playVideo()}onUnselectSlide(t,e,i){var n,s;if("html5video"===i.type){try{null===(s=null===(n=i.el)||void 0===n?void 0:n.querySelector("video"))||void 0===s||s.pause()}catch(t){}return}let o;"vimeo"===i.type?o={method:"pause",value:"true"}:"youtube"===i.type&&(o={event:"command",func:"pauseVideo"}),o&&i.iframeEl&&i.iframeEl.contentWindow&&i.iframeEl.contentWindow.postMessage(JSON.stringify(o),"*"),i.poller&&clearTimeout(i.poller)}onDone(t,e){t.isCurrentSlide(e)&&!t.isClosing()&&this.playVideo()}onRefresh(t,e){e.slides.forEach((t=>{t.el&&(this.setAspectRatio(t),this.resizeIframe(t))}))}onMessage(t){try{let e=JSON.parse(t.data);if("https://player.vimeo.com"===t.origin){if("ready"===e.event)for(let e of Array.from(document.getElementsByClassName("fancybox__iframe")))e instanceof HTMLIFrameElement&&e.contentWindow===t.source&&(e.dataset.ready="true")}else if(t.origin.match(/^https:\/\/(www.)?youtube(-nocookie)?.com$/)&&"onReady"===e.event){const t=document.getElementById(e.id);t&&(t.dataset.ready="true")}}catch(t){}}loadAjaxContent(t){const e=this.instance.optionFor(t,"src")||"";this.instance.showLoading(t);const i=this.instance,n=new XMLHttpRequest;i.showLoading(t),n.onreadystatechange=function(){n.readyState===XMLHttpRequest.DONE&&i.state===et.Ready&&(i.hideLoading(t),200===n.status?i.setContent(t,n.responseText):i.setError(t,404===n.status?"{{AJAX_NOT_FOUND}}":"{{AJAX_FORBIDDEN}}"))};const s=t.ajax||null;n.open(s?"POST":"GET",e+""),n.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),n.setRequestHeader("X-Requested-With","XMLHttpRequest"),n.send(s),t.xhr=n}setInlineContent(t){let e=null;if(x(t.src))e=t.src;else if("string"==typeof t.src){const i=t.src.split("#",2).pop();e=i?document.getElementById(i):null}if(e){if("clone"===t.type||e.closest(".fancybox__slide")){e=e.cloneNode(!0);const i=e.dataset.animationName;i&&(e.classList.remove(i),delete e.dataset.animationName);let n=e.getAttribute("id");n=n?`${n}--clone`:`clone-${this.instance.id}-${t.index}`,e.setAttribute("id",n)}else if(e.parentNode){const i=document.createElement("div");i.classList.add("fancybox-placeholder"),e.parentNode.insertBefore(i,e),t.placeholderEl=i}this.instance.setContent(t,e)}else this.instance.setError(t,"{{ELEMENT_NOT_FOUND}}")}setIframeContent(t){const{src:e,el:i}=t;if(!e||"string"!=typeof e||!i)return;i.classList.add("is-loading");const n=this.instance,s=document.createElement("iframe");s.className="fancybox__iframe",s.setAttribute("id",`fancybox__iframe_${n.id}_${t.index}`);for(const[e,i]of Object.entries(this.optionFor(t,"iframeAttr")||{}))s.setAttribute(e,i);s.onerror=()=>{n.setError(t,"{{IFRAME_ERROR}}")},t.iframeEl=s;const o=this.optionFor(t,"preload");if("iframe"!==t.type||!1===o)return s.setAttribute("src",t.src+""),n.setContent(t,s,!1),this.resizeIframe(t),void n.revealContent(t);n.showLoading(t),s.onload=()=>{if(!s.src.length)return;const e="true"!==s.dataset.ready;s.dataset.ready="true",this.resizeIframe(t),e?n.revealContent(t):n.hideLoading(t)},s.setAttribute("src",e),n.setContent(t,s,!1)}resizeIframe(t){const e=t.iframeEl,i=null==e?void 0:e.parentElement;if(!e||!i)return;let n=t.autoSize,s=t.width||0,o=t.height||0;s&&o&&(n=!1);const a=i&&i.style;if(!1!==t.preload&&!1!==n&&a)try{const t=window.getComputedStyle(i),n=parseFloat(t.paddingLeft)+parseFloat(t.paddingRight),r=parseFloat(t.paddingTop)+parseFloat(t.paddingBottom),l=e.contentWindow;if(l){const t=l.document,e=t.getElementsByTagName("html")[0],i=t.body;a.width="",i.style.overflow="hidden",s=s||e.scrollWidth+n,a.width=`${s}px`,i.style.overflow="",a.flex="0 0 auto",a.height=`${i.scrollHeight}px`,o=e.scrollHeight+r}}catch(t){}if(s||o){const t={flex:"0 1 auto",width:"",height:""};s&&(t.width=`${s}px`),o&&(t.height=`${o}px`),Object.assign(a,t)}}playVideo(){const t=this.instance.getSlide();if(!t)return;const{el:e}=t;if(!e||!e.offsetParent)return;if(!this.optionFor(t,"videoAutoplay"))return;if("html5video"===t.type)try{const t=e.querySelector("video");if(t){const e=t.play();void 0!==e&&e.then((()=>{})).catch((e=>{t.muted=!0,t.play()}))}}catch(t){}if("youtube"!==t.type&&"vimeo"!==t.type)return;const i=()=>{if(t.iframeEl&&t.iframeEl.contentWindow){let e;if("true"===t.iframeEl.dataset.ready)return e="youtube"===t.type?{event:"command",func:"playVideo"}:{method:"play",value:"true"},e&&t.iframeEl.contentWindow.postMessage(JSON.stringify(e),"*"),void(t.poller=void 0);"youtube"===t.type&&(e={event:"listening",id:t.iframeEl.getAttribute("id")},t.iframeEl.contentWindow.postMessage(JSON.stringify(e),"*"))}t.poller=setTimeout(i,250)};i()}processType(t){if(t.html)return t.type="html",t.src=t.html,void(t.html="");const e=this.instance.optionFor(t,"src","");if(!e||"string"!=typeof e)return;let i=t.type,n=null;if(n=e.match(/(youtube\.com|youtu\.be|youtube\-nocookie\.com)\/(?:watch\?(?:.*&)?v=|v\/|u\/|shorts\/|embed\/?)?(videoseries\?list=(?:.*)|[\w-]{11}|\?listType=(?:.*)&list=(?:.*))(?:.*)/i)){const s=this.optionFor(t,"youtube"),{nocookie:o}=s,a=function(t,e){var i={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.indexOf(n)<0&&(i[n]=t[n]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var s=0;for(n=Object.getOwnPropertySymbols(t);s<n.length;s++)e.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(t,n[s])&&(i[n[s]]=t[n[s]])}return i}(s,["nocookie"]),r=`www.youtube${o?"-nocookie":""}.com`,l=rt(e,a),c=encodeURIComponent(n[2]);t.videoId=c,t.src=`https://${r}/embed/${c}?${l}`,t.thumbSrc=t.thumbSrc||`https://i.ytimg.com/vi/${c}/mqdefault.jpg`,i="youtube"}else if(n=e.match(/^.+vimeo.com\/(?:\/)?([\d]+)((\/|\?h=)([a-z0-9]+))?(.*)?/)){const s=rt(e,this.optionFor(t,"vimeo")),o=encodeURIComponent(n[1]),a=n[4]||"";t.videoId=o,t.src=`https://player.vimeo.com/video/${o}?${a?`h=${a}${s?"&":""}`:""}${s}`,i="vimeo"}if(!i&&t.triggerEl){const e=t.triggerEl.dataset.type;ct.includes(e)&&(i=e)}i||"string"==typeof e&&("#"===e.charAt(0)?i="inline":(n=e.match(/\.(mp4|mov|ogv|webm)((\?|#).*)?$/i))?(i="html5video",t.videoFormat=t.videoFormat||"video/"+("ogv"===n[1]?"ogg":n[1])):e.match(/(^data:image\/[a-z0-9+\/=]*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg|ico)((\?|#).*)?$)/i)?i="image":e.match(/\.(pdf)((\?|#).*)?$/i)?i="pdf":(n=e.match(/(?:maps\.)?google\.([a-z]{2,3}(?:\.[a-z]{2})?)\/(?:(?:(?:maps\/(?:place\/(?:.*)\/)?\@(.*),(\d+.?\d+?)z))|(?:\?ll=))(.*)?/i))?(t.src=`https://maps.google.${n[1]}/?ll=${(n[2]?n[2]+"&z="+Math.floor(parseFloat(n[3]))+(n[4]?n[4].replace(/^\//,"&"):""):n[4]+"").replace(/\?/,"&")}&output=${n[4]&&n[4].indexOf("layer=c")>0?"svembed":"embed"}`,i="map"):(n=e.match(/(?:maps\.)?google\.([a-z]{2,3}(?:\.[a-z]{2})?)\/(?:maps\/search\/)(.*)/i))&&(t.src=`https://maps.google.${n[1]}/maps?q=${n[2].replace("query=","q=").replace("api=1","")}&output=embed`,i="map")),i=i||this.instance.option("defaultType"),t.type=i,"image"===i&&(t.thumbSrc=t.thumbSrc||t.src)}setContent(t){const e=this.instance.optionFor(t,"src")||"";if(t&&t.type&&e){switch(t.type){case"html":this.instance.setContent(t,e);break;case"html5video":const i=this.option("videoTpl");i&&this.instance.setContent(t,i.replace(/\{\{src\}\}/gi,e+"").replace(/\{\{format\}\}/gi,this.optionFor(t,"videoFormat")||"").replace(/\{\{poster\}\}/gi,t.poster||t.thumbSrc||""));break;case"inline":case"clone":this.setInlineContent(t);break;case"ajax":this.loadAjaxContent(t);break;case"pdf":case"map":case"youtube":case"vimeo":t.preload=!1;case"iframe":this.setIframeContent(t)}this.setAspectRatio(t)}}setAspectRatio(t){var e;const i=t.width||0,n=t.height||0;if(i&&n)return;const s=t.contentEl,o=this.optionFor(t,"videoRatio"),a=null===(e=t.el)||void 0===e?void 0:e.getBoundingClientRect();if(!(s&&a&&o&&1!==o&&t.type&&["video","youtube","vimeo","html5video"].includes(t.type)))return;const r=a.width,l=a.height;s.style.aspectRatio=o+"",s.style.width=r/l>o?"auto":"",s.style.height=r/l>o?"":"auto"}attach(){const t=this,e=t.instance;e.on("Carousel.initSlide",t.onInitSlide),e.on("Carousel.createSlide",t.onCreateSlide),e.on("Carousel.removeSlide",t.onRemoveSlide),e.on("Carousel.selectSlide",t.onSelectSlide),e.on("Carousel.unselectSlide",t.onUnselectSlide),e.on("Carousel.Panzoom.refresh",t.onRefresh),e.on("done",t.onDone),window.addEventListener("message",t.onMessage)}detach(){const t=this,e=t.instance;e.off("Carousel.initSlide",t.onInitSlide),e.off("Carousel.createSlide",t.onCreateSlide),e.off("Carousel.removeSlide",t.onRemoveSlide),e.off("Carousel.selectSlide",t.onSelectSlide),e.off("Carousel.unselectSlide",t.onUnselectSlide),e.off("Carousel.Panzoom.refresh",t.onRefresh),e.off("done",t.onDone),window.removeEventListener("message",t.onMessage)}}Object.defineProperty(ht,"defaults",{enumerable:!0,configurable:!0,writable:!0,value:lt});const dt="play",ut="pause",pt="ready";class ft extends B{constructor(){super(...arguments),Object.defineProperty(this,"state",{enumerable:!0,configurable:!0,writable:!0,value:pt}),Object.defineProperty(this,"inHover",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"timer",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"progressBar",{enumerable:!0,configurable:!0,writable:!0,value:null})}get isActive(){return this.state!==pt}onReady(t){this.option("autoStart")&&(t.isInfinite||t.page<t.pages.length-1)&&this.start()}onChange(){var t;(null===(t=this.instance.panzoom)||void 0===t?void 0:t.isResting)||(this.removeProgressBar(),this.pause())}onSettle(){this.resume()}onVisibilityChange(){"visible"===document.visibilityState?this.resume():this.pause()}onMouseEnter(){this.inHover=!0,this.pause()}onMouseLeave(){var t;this.inHover=!1,(null===(t=this.instance.panzoom)||void 0===t?void 0:t.isResting)&&this.resume()}onTimerEnd(){const t=this.instance;"play"===this.state&&(t.isInfinite||t.page!==t.pages.length-1?t.slideNext():t.slideTo(0))}removeProgressBar(){this.progressBar&&(this.progressBar.remove(),this.progressBar=null)}createProgressBar(){var t;if(!this.option("showProgress"))return null;this.removeProgressBar();const e=this.instance,i=(null===(t=e.pages[e.page])||void 0===t?void 0:t.slides)||[];let n=this.option("progressParentEl");if(n||(n=(1===i.length?i[0].el:null)||e.viewport),!n)return null;const s=document.createElement("div");return S(s,"f-progress"),n.prepend(s),this.progressBar=s,s.offsetHeight,s}set(){const t=this,e=t.instance;if(e.pages.length<2)return;if(t.timer)return;const i=t.option("timeout");t.state=dt,S(e.container,"has-autoplay");let n=t.createProgressBar();n&&(n.style.transitionDuration=`${i}ms`,n.style.transform="scaleX(1)"),t.timer=setTimeout((()=>{t.timer=null,t.inHover||t.onTimerEnd()}),i),t.emit("set")}clear(){const t=this;t.timer&&(clearTimeout(t.timer),t.timer=null),t.removeProgressBar()}start(){const t=this;if(t.set(),t.state!==pt){if(t.option("pauseOnHover")){const e=t.instance.container;e.addEventListener("mouseenter",t.onMouseEnter,!1),e.addEventListener("mouseleave",t.onMouseLeave,!1)}document.addEventListener("visibilitychange",t.onVisibilityChange,!1),t.emit("start")}}stop(){const t=this,e=t.state,i=t.instance.container;t.clear(),t.state=pt,i.removeEventListener("mouseenter",t.onMouseEnter,!1),i.removeEventListener("mouseleave",t.onMouseLeave,!1),document.removeEventListener("visibilitychange",t.onVisibilityChange,!1),E(i,"has-autoplay"),e!==pt&&t.emit("stop")}pause(){const t=this;t.state===dt&&(t.state=ut,t.clear(),t.emit(ut))}resume(){const t=this,e=t.instance;if(e.isInfinite||e.page!==e.pages.length-1)if(t.state!==dt){if(t.state===ut&&!t.inHover){const e=new Event("resume",{bubbles:!0,cancelable:!0});t.emit("resume",e),e.defaultPrevented||t.set()}}else t.set();else t.stop()}toggle(){this.state===dt||this.state===ut?this.stop():this.start()}attach(){const t=this,e=t.instance;e.on("ready",t.onReady),e.on("Panzoom.startAnimation",t.onChange),e.on("Panzoom.endAnimation",t.onSettle),e.on("Panzoom.touchMove",t.onChange)}detach(){const t=this,e=t.instance;e.off("ready",t.onReady),e.off("Panzoom.startAnimation",t.onChange),e.off("Panzoom.endAnimation",t.onSettle),e.off("Panzoom.touchMove",t.onChange),t.stop()}}Object.defineProperty(ft,"defaults",{enumerable:!0,configurable:!0,writable:!0,value:{autoStart:!0,pauseOnHover:!0,progressParentEl:null,showProgress:!0,timeout:3e3}});class mt extends B{constructor(){super(...arguments),Object.defineProperty(this,"ref",{enumerable:!0,configurable:!0,writable:!0,value:null})}onPrepare(t){const e=t.carousel;if(!e)return;const i=t.container;i&&(e.options.Autoplay=u({autoStart:!1},this.option("Autoplay")||{},{pauseOnHover:!1,timeout:this.option("timeout"),progressParentEl:()=>this.option("progressParentEl")||null,on:{start:()=>{t.emit("startSlideshow")},set:e=>{var n;i.classList.add("has-slideshow"),(null===(n=t.getSlide())||void 0===n?void 0:n.state)!==it.Ready&&e.pause()},stop:()=>{i.classList.remove("has-slideshow"),t.isCompact||t.endIdle(),t.emit("endSlideshow")},resume:(e,i)=>{var n,s,o;!i||!i.cancelable||(null===(n=t.getSlide())||void 0===n?void 0:n.state)===it.Ready&&(null===(o=null===(s=t.carousel)||void 0===s?void 0:s.panzoom)||void 0===o?void 0:o.isResting)||i.preventDefault()}}}),e.attachPlugins({Autoplay:ft}),this.ref=e.plugins.Autoplay)}onReady(t){const e=t.carousel,i=this.ref;e&&i&&this.option("playOnStart")&&(e.isInfinite||e.page<e.pages.length-1)&&i.start()}onDone(t,e){const i=this.ref;if(!i)return;const n=e.panzoom;n&&n.on("startAnimation",(()=>{t.isCurrentSlide(e)&&i.stop()})),t.isCurrentSlide(e)&&i.resume()}onKeydown(t,e){var i;const n=this.ref;n&&e===this.option("key")&&"BUTTON"!==(null===(i=document.activeElement)||void 0===i?void 0:i.nodeName)&&n.toggle()}attach(){const t=this,e=t.instance;e.on("Carousel.init",t.onPrepare),e.on("Carousel.ready",t.onReady),e.on("done",t.onDone),e.on("keydown",t.onKeydown)}detach(){const t=this,e=t.instance;e.off("Carousel.init",t.onPrepare),e.off("Carousel.ready",t.onReady),e.off("done",t.onDone),e.off("keydown",t.onKeydown)}}Object.defineProperty(mt,"defaults",{enumerable:!0,configurable:!0,writable:!0,value:{key:" ",playOnStart:!1,progressParentEl:t=>{var e;return(null===(e=t.instance.container)||void 0===e?void 0:e.querySelector(".fancybox__toolbar [data-fancybox-toggle-slideshow]"))||t.instance.container},timeout:3e3}});const gt={classes:{container:"f-thumbs f-carousel__thumbs",viewport:"f-thumbs__viewport",track:"f-thumbs__track",slide:"f-thumbs__slide",isResting:"is-resting",isSelected:"is-selected",isLoading:"is-loading",hasThumbs:"has-thumbs"},minCount:2,parentEl:null,thumbTpl:'<button class="f-thumbs__slide__button" tabindex="0" type="button" aria-label="{{GOTO}}" data-carousel-index="%i"><img class="f-thumbs__slide__img" data-lazy-src="{{%s}}" alt="" /></button>',type:"modern"};var bt;!function(t){t[t.Init=0]="Init",t[t.Ready=1]="Ready",t[t.Hidden=2]="Hidden",t[t.Disabled=3]="Disabled"}(bt||(bt={}));let vt=class extends B{constructor(){super(...arguments),Object.defineProperty(this,"type",{enumerable:!0,configurable:!0,writable:!0,value:"modern"}),Object.defineProperty(this,"container",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"track",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"carousel",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"panzoom",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"thumbWidth",{enumerable:!0,configurable:!0,writable:!0,value:0}),Object.defineProperty(this,"thumbClipWidth",{enumerable:!0,configurable:!0,writable:!0,value:0}),Object.defineProperty(this,"thumbHeight",{enumerable:!0,configurable:!0,writable:!0,value:0}),Object.defineProperty(this,"thumbGap",{enumerable:!0,configurable:!0,writable:!0,value:0}),Object.defineProperty(this,"thumbExtraGap",{enumerable:!0,configurable:!0,writable:!0,value:0}),Object.defineProperty(this,"shouldCenter",{enumerable:!0,configurable:!0,writable:!0,value:!0}),Object.defineProperty(this,"state",{enumerable:!0,configurable:!0,writable:!0,value:bt.Init})}formatThumb(t,e){return this.instance.localize(e,[["%i",t.index],["%d",t.index+1],["%s",t.thumbSrc||"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"]])}getSlides(){const t=[],e=this.option("thumbTpl")||"";if(e)for(const i of this.instance.slides||[]){let n="";i.type&&(n=`for-${i.type}`,i.type&&["video","youtube","vimeo","html5video"].includes(i.type)&&(n+=" for-video")),t.push({html:this.formatThumb(i,e),customClass:n})}return t}onInitSlide(t,e){const i=e.el;i&&(e.thumbSrc=i.dataset.thumbSrc||e.thumbSrc||"",e.thumbClipWidth=parseFloat(i.dataset.thumbClipWidth||"")||e.thumbClipWidth||0,e.thumbHeight=parseFloat(i.dataset.thumbHeight||"")||e.thumbHeight||0)}onInitSlides(){this.state===bt.Init&&this.build()}onRefreshM(){this.refreshModern()}onChangeM(){"modern"===this.type&&(this.shouldCenter=!0,this.centerModern())}onClickModern(t){t.preventDefault(),t.stopPropagation();const e=this.instance,i=e.page,n=t=>{if(t){const e=t.closest("[data-carousel-index]");if(e)return parseInt(e.dataset.carouselIndex||"",10)||0}return-1},s=(t,e)=>{const i=document.elementFromPoint(t,e);return i?n(i):-1};let o=n(t.target);o<0&&(o=s(t.clientX+this.thumbGap,t.clientY),o===i&&(o=i-1)),o<0&&(o=s(t.clientX-this.thumbGap,t.clientY),o===i&&(o=i+1)),o<0&&(o=(e=>{let n=s(t.clientX-e,t.clientY),a=s(t.clientX+e,t.clientY);return o<0&&n===i&&(o=i+1),o<0&&a===i&&(o=i-1),o})(this.thumbExtraGap)),o===i?this.centerModern():o>-1&&o<e.pages.length&&e.slideTo(o)}onTransformM(){if("modern"!==this.type)return;const{instance:t,container:e,track:i}=this,n=t.panzoom;if(!(e&&i&&n&&this.panzoom))return;o(e,this.cn("isResting"),n.state!==g.Init&&n.isResting);const s=this.thumbGap,a=this.thumbExtraGap,r=this.thumbClipWidth;let l=0,c=0,h=0;for(const e of t.slides){let i=e.index,n=e.thumbSlideEl;if(!n)continue;o(n,this.cn("isSelected"),i===t.page),c=1-Math.abs(t.getProgress(i)),n.style.setProperty("--progress",c?c+"":"");const d=.5*((e.thumbWidth||0)-r);l+=s,l+=d,c&&(l-=c*(d+a)),n.style.setProperty("--shift",l-s+""),l+=d,c&&(l-=c*(d+a)),l-=s,0===i&&(h=a*c)}i&&(i.style.setProperty("--left",h+""),i.style.setProperty("--width",l+h+s+a*c+"")),this.shouldCenter&&this.centerModern()}buildClassic(){const{container:t,track:e}=this,i=this.getSlides();if(!t||!e||!i)return;const n=new this.instance.constructor(t,u({track:e,infinite:!1,center:!0,fill:!0,dragFree:!0,slidesPerPage:1,transition:!1,Dots:!1,Navigation:!1,classes:{container:"f-thumbs",viewport:"f-thumbs__viewport",track:"f-thumbs__track",slide:"f-thumbs__slide"}},this.option("Carousel")||{},{Sync:{target:this.instance},slides:i}));this.carousel=n,this.track=e,n.on("ready",(()=>{this.emit("ready")})),n.on("createSlide",((t,e)=>{this.emit("createSlide",e,e.el)}))}buildModern(){if("modern"!==this.type)return;const{container:t,track:e,instance:i}=this,s=this.option("thumbTpl")||"";if(!t||!e||!s)return;t.addEventListener("keydown",(()=>{E(t,"is-using-mouse")})),S(t,"is-horizontal"),this.updateModern();for(const t of i.slides||[]){const i=document.createElement("div");if(S(i,this.cn("slide")),t.type){let e=`for-${t.type}`;["video","youtube","vimeo","html5video"].includes(t.type)&&(e+=" for-video"),S(i,e)}i.appendChild(n(this.formatThumb(t,s))),this.emit("createSlide",t,i),t.thumbSlideEl=i,e.appendChild(i),this.resizeModernSlide(t)}const o=new i.constructor.Panzoom(t,{content:e,lockAxis:"x",zoom:!1,panOnlyZoomed:!1,bounds:()=>{let t=0,e=0,n=i.slides[0],s=i.slides[i.slides.length-1],o=i.slides[i.page];return n&&s&&o&&(e=-1*this.getModernThumbPos(0),0!==i.page&&(e+=.5*(n.thumbWidth||0)),t=-1*this.getModernThumbPos(i.slides.length-1),i.page!==i.slides.length-1&&(t+=(s.thumbWidth||0)-(o.thumbWidth||0)-.5*(s.thumbWidth||0))),{x:{min:t,max:e},y:{min:0,max:0}}}});o.on("touchStart",((t,e)=>{this.shouldCenter=!1,S(this.container,"is-using-mouse")})),o.on("click",((t,e)=>this.onClickModern(e))),o.on("ready",(()=>{this.centerModern(),this.emit("ready")})),o.on(["afterTransform","refresh"],(t=>{this.lazyLoadModern()})),this.panzoom=o,this.refreshModern()}updateModern(){if("modern"!==this.type)return;const{container:t}=this;t&&(this.thumbGap=parseFloat(getComputedStyle(t).getPropertyValue("--f-thumb-gap"))||0,this.thumbExtraGap=parseFloat(getComputedStyle(t).getPropertyValue("--f-thumb-extra-gap"))||0,this.thumbWidth=parseFloat(getComputedStyle(t).getPropertyValue("--f-thumb-width"))||40,this.thumbClipWidth=parseFloat(getComputedStyle(t).getPropertyValue("--f-thumb-clip-width"))||40,this.thumbHeight=parseFloat(getComputedStyle(t).getPropertyValue("--f-thumb-height"))||40)}refreshModern(){var t;if("modern"===this.type){this.updateModern();for(const t of this.instance.slides||[])this.resizeModernSlide(t);this.onTransformM(),null===(t=this.panzoom)||void 0===t||t.updateMetrics(!0),this.centerModern(0)}}centerModern(e){const i=this.instance,{container:n,panzoom:s}=this;if(!n||!s||s.state===g.Init)return;const o=i.page;let a=this.getModernThumbPos(o),r=a;for(let t=i.page-3;t<i.page+3;t++){if(t<0||t>i.pages.length-1||t===i.page)continue;const e=1-Math.abs(i.getProgress(t));e>0&&e<1&&(r+=e*(this.getModernThumbPos(t)-a))}let l=100;void 0===e&&(e=.2,i.inTransition.size>0&&(e=.12),Math.abs(-1*s.current.e-r)>s.containerRect.width&&(e=.5,l=0)),s.options.maxVelocity=l,s.applyChange({panX:t(-1*r-s.target.e,1e3),friction:null===i.prevPage?0:e})}lazyLoadModern(){const{instance:t,panzoom:e}=this;if(!e)return;const i=-1*e.current.e||0;let s=this.getModernThumbPos(t.page);if(e.state!==g.Init||0===s)for(const s of t.slides||[]){const t=s.thumbSlideEl;if(!t)continue;const o=t.querySelector("img[data-lazy-src]"),a=s.index,r=this.getModernThumbPos(a),l=i-.5*e.containerRect.innerWidth,c=l+e.containerRect.innerWidth;if(!o||r<l||r>c)continue;let h=o.dataset.lazySrc;if(!h||!h.length)continue;if(delete o.dataset.lazySrc,o.src=h,o.complete)continue;S(t,this.cn("isLoading"));const d=n(w);t.appendChild(d),o.addEventListener("load",(()=>{t.offsetParent&&(t.classList.remove(this.cn("isLoading")),d.remove())}),!1)}}resizeModernSlide(t){if("modern"!==this.type)return;if(!t.thumbSlideEl)return;const e=t.thumbClipWidth&&t.thumbHeight?Math.round(this.thumbHeight*(t.thumbClipWidth/t.thumbHeight)):this.thumbWidth;t.thumbWidth=e}getModernThumbPos(e){const i=this.instance.slides[e],n=this.panzoom;if(!n||!n.contentRect.fitWidth)return 0;let s=n.containerRect.innerWidth,o=n.contentRect.width;2===this.instance.slides.length&&(e-=1,o=2*this.thumbClipWidth);let a=e*(this.thumbClipWidth+this.thumbGap)+this.thumbExtraGap+.5*(i.thumbWidth||0);return a-=o>s?.5*s:.5*o,t(a||0,1)}build(){const t=this.instance,e=t.container,i=this.option("minCount")||0;if(i){let e=0;for(const i of t.slides||[])i.thumbSrc&&e++;if(e<i)return this.cleanup(),void(this.state=bt.Disabled)}const n=this.option("type");if(["modern","classic"].indexOf(n)<0)return void(this.state=bt.Disabled);this.type=n;const s=document.createElement("div");S(s,this.cn("container")),S(s,`is-${n}`);const o=this.option("parentEl");o?o.appendChild(s):e.after(s),this.container=s,S(e,this.cn("hasThumbs"));const a=document.createElement("div");S(a,this.cn("track")),s.appendChild(a),this.track=a,"classic"===n?this.buildClassic():this.buildModern(),this.state=bt.Ready}cleanup(){this.carousel&&this.carousel.destroy(),this.carousel=null,this.panzoom&&this.panzoom.destroy(),this.panzoom=null,this.container&&this.container.remove(),this.container=null,this.track=null,this.state=bt.Init,E(this.instance.container,this.cn("hasThumbs"))}attach(){const t=this,e=t.instance;e.on("initSlide",t.onInitSlide),e.state===F.Init?e.on("initSlides",t.onInitSlides):t.onInitSlides(),e.on("Panzoom.afterTransform",t.onTransformM),e.on("Panzoom.refresh",t.onRefreshM),e.on("change",t.onChangeM)}detach(){const t=this,e=t.instance;e.off("initSlide",t.onInitSlide),e.off("initSlides",t.onInitSlides),e.off("Panzoom.afterTransform",t.onTransformM),e.off("Panzoom.refresh",t.onRefreshM),e.off("change",t.onChangeM),t.cleanup()}};Object.defineProperty(vt,"defaults",{enumerable:!0,configurable:!0,writable:!0,value:gt});const yt=Object.assign(Object.assign({},gt),{key:"t",showOnStart:!0,parentEl:null}),wt="is-masked",xt="aria-hidden";class Et extends B{constructor(){super(...arguments),Object.defineProperty(this,"ref",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"hidden",{enumerable:!0,configurable:!0,writable:!0,value:!1})}get isEnabled(){const t=this.ref;return t&&t.state!==bt.Disabled}get isHidden(){return this.hidden}onInit(){var t;const e=this,i=e.instance,n=i.carousel;if(e.ref||!n)return;const s=e.option("parentEl")||i.footer||i.container;if(!s)return;const o=u({},e.options,{parentEl:s,classes:{container:"f-thumbs fancybox__thumbs"},Carousel:{Sync:{friction:i.option("Carousel.friction")||0}},on:{ready:t=>{const i=t.container;i&&this.hidden&&(e.refresh(),i.style.transition="none",e.hide(),i.offsetHeight,queueMicrotask((()=>{i.style.transition="",e.show()})))}}});o.Carousel=o.Carousel||{},o.Carousel.on=u((null===(t=e.options.Carousel)||void 0===t?void 0:t.on)||{},{click:(t,e)=>{e.stopPropagation()}}),n.options.Thumbs=o,n.attachPlugins({Thumbs:vt}),e.ref=n.plugins.Thumbs,e.option("showOnStart")||(e.ref.state=bt.Hidden,e.hidden=!0)}onResize(){var t;const e=null===(t=this.ref)||void 0===t?void 0:t.container;e&&(e.style.maxHeight="")}onKeydown(t,e){const i=this.option("key");i&&i===e&&this.toggle()}toggle(){const t=this.ref;t&&t.state!==bt.Disabled&&(t.state!==bt.Hidden?this.hidden?this.show():this.hide():t.build())}show(){const t=this.ref,e=t&&t.state!==bt.Disabled&&t.container;e&&(this.refresh(),e.offsetHeight,e.removeAttribute(xt),e.classList.remove(wt),this.hidden=!1)}hide(){const t=this.ref,e=t&&t.container;e&&(this.refresh(),e.offsetHeight,e.classList.add(wt),e.setAttribute(xt,"true")),this.hidden=!0}refresh(){const t=this.ref;if(!t||t.state===bt.Disabled)return;const e=t.container,i=(null==e?void 0:e.firstChild)||null;e&&i&&i.childNodes.length&&(e.style.maxHeight=`${i.getBoundingClientRect().height}px`)}attach(){const t=this,e=t.instance;e.state===et.Init?e.on("Carousel.init",t.onInit):t.onInit(),e.on("resize",t.onResize),e.on("keydown",t.onKeydown)}detach(){var t;const e=this,i=e.instance;i.off("Carousel.init",e.onInit),i.off("resize",e.onResize),i.off("keydown",e.onKeydown),null===(t=i.carousel)||void 0===t||t.detachPlugins(["Thumbs"]),e.ref=null}}Object.defineProperty(Et,"defaults",{enumerable:!0,configurable:!0,writable:!0,value:yt});const St={panLeft:{icon:'<svg><path d="M5 12h14M5 12l6 6M5 12l6-6"/></svg>',change:{panX:-100}},panRight:{icon:'<svg><path d="M5 12h14M13 18l6-6M13 6l6 6"/></svg>',change:{panX:100}},panUp:{icon:'<svg><path d="M12 5v14M18 11l-6-6M6 11l6-6"/></svg>',change:{panY:-100}},panDown:{icon:'<svg><path d="M12 5v14M18 13l-6 6M6 13l6 6"/></svg>',change:{panY:100}},zoomIn:{icon:'<svg><circle cx="11" cy="11" r="7.5"/><path d="m21 21-4.35-4.35M11 8v6M8 11h6"/></svg>',action:"zoomIn"},zoomOut:{icon:'<svg><circle cx="11" cy="11" r="7.5"/><path d="m21 21-4.35-4.35M8 11h6"/></svg>',action:"zoomOut"},toggle1to1:{icon:'<svg><path d="M3.51 3.07c5.74.02 11.48-.02 17.22.02 1.37.1 2.34 1.64 2.18 3.13 0 4.08.02 8.16 0 12.23-.1 1.54-1.47 2.64-2.79 2.46-5.61-.01-11.24.02-16.86-.01-1.36-.12-2.33-1.65-2.17-3.14 0-4.07-.02-8.16 0-12.23.1-1.36 1.22-2.48 2.42-2.46Z"/><path d="M5.65 8.54h1.49v6.92m8.94-6.92h1.49v6.92M11.5 9.4v.02m0 5.18v0"/></svg>',action:"toggleZoom"},toggleZoom:{icon:'<svg><g><line x1="11" y1="8" x2="11" y2="14"></line></g><circle cx="11" cy="11" r="7.5"/><path d="m21 21-4.35-4.35M8 11h6"/></svg>',action:"toggleZoom"},iterateZoom:{icon:'<svg><g><line x1="11" y1="8" x2="11" y2="14"></line></g><circle cx="11" cy="11" r="7.5"/><path d="m21 21-4.35-4.35M8 11h6"/></svg>',action:"iterateZoom"},rotateCCW:{icon:'<svg><path d="M15 4.55a8 8 0 0 0-6 14.9M9 15v5H4M18.37 7.16v.01M13 19.94v.01M16.84 18.37v.01M19.37 15.1v.01M19.94 11v.01"/></svg>',action:"rotateCCW"},rotateCW:{icon:'<svg><path d="M9 4.55a8 8 0 0 1 6 14.9M15 15v5h5M5.63 7.16v.01M4.06 11v.01M4.63 15.1v.01M7.16 18.37v.01M11 19.94v.01"/></svg>',action:"rotateCW"},flipX:{icon:'<svg style="stroke-width: 1.3"><path d="M12 3v18M16 7v10h5L16 7M8 7v10H3L8 7"/></svg>',action:"flipX"},flipY:{icon:'<svg style="stroke-width: 1.3"><path d="M3 12h18M7 16h10L7 21v-5M7 8h10L7 3v5"/></svg>',action:"flipY"},fitX:{icon:'<svg><path d="M4 12V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v6M10 18H3M21 18h-7M6 15l-3 3 3 3M18 15l3 3-3 3"/></svg>',action:"fitX"},fitY:{icon:'<svg><path d="M12 20H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h6M18 14v7M18 3v7M15 18l3 3 3-3M15 6l3-3 3 3"/></svg>',action:"fitY"},reset:{icon:'<svg><path d="M20 11A8.1 8.1 0 0 0 4.5 9M4 5v4h4M4 13a8.1 8.1 0 0 0 15.5 2m.5 4v-4h-4"/></svg>',action:"reset"},toggleFS:{icon:'<svg><g><path d="M14.5 9.5 21 3m0 0h-6m6 0v6M3 21l6.5-6.5M3 21v-6m0 6h6"/></g><g><path d="m14 10 7-7m-7 7h6m-6 0V4M3 21l7-7m0 0v6m0-6H4"/></g></svg>',action:"toggleFS"}};var Pt;!function(t){t[t.Init=0]="Init",t[t.Ready=1]="Ready",t[t.Disabled=2]="Disabled"}(Pt||(Pt={}));const Ct={absolute:"auto",display:{left:["infobar"],middle:[],right:["iterateZoom","slideshow","fullscreen","thumbs","close"]},enabled:"auto",items:{infobar:{tpl:'<div class="fancybox__infobar" tabindex="-1"><span data-fancybox-current-index></span>/<span data-fancybox-count></span></div>'},download:{tpl:'<a class="f-button" title="{{DOWNLOAD}}" data-fancybox-download href="javasript:;"><svg><path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2M7 11l5 5 5-5M12 4v12"/></svg></a>'},prev:{tpl:'<button class="f-button" title="{{PREV}}" data-fancybox-prev><svg><path d="m15 6-6 6 6 6"/></svg></button>'},next:{tpl:'<button class="f-button" title="{{NEXT}}" data-fancybox-next><svg><path d="m9 6 6 6-6 6"/></svg></button>'},slideshow:{tpl:'<button class="f-button" title="{{TOGGLE_SLIDESHOW}}" data-fancybox-toggle-slideshow><svg><g><path d="M8 4v16l13 -8z"></path></g><g><path d="M8 4v15M17 4v15"/></g></svg></button>'},fullscreen:{tpl:'<button class="f-button" title="{{TOGGLE_FULLSCREEN}}" data-fancybox-toggle-fullscreen><svg><g><path d="M4 8V6a2 2 0 0 1 2-2h2M4 16v2a2 2 0 0 0 2 2h2M16 4h2a2 2 0 0 1 2 2v2M16 20h2a2 2 0 0 0 2-2v-2"/></g><g><path d="M15 19v-2a2 2 0 0 1 2-2h2M15 5v2a2 2 0 0 0 2 2h2M5 15h2a2 2 0 0 1 2 2v2M5 9h2a2 2 0 0 0 2-2V5"/></g></svg></button>'},thumbs:{tpl:'<button class="f-button" title="{{TOGGLE_THUMBS}}" data-fancybox-toggle-thumbs><svg><circle cx="5.5" cy="5.5" r="1"/><circle cx="12" cy="5.5" r="1"/><circle cx="18.5" cy="5.5" r="1"/><circle cx="5.5" cy="12" r="1"/><circle cx="12" cy="12" r="1"/><circle cx="18.5" cy="12" r="1"/><circle cx="5.5" cy="18.5" r="1"/><circle cx="12" cy="18.5" r="1"/><circle cx="18.5" cy="18.5" r="1"/></svg></button>'},close:{tpl:'<button class="f-button" title="{{CLOSE}}" data-fancybox-close><svg><path d="m19.5 4.5-15 15M4.5 4.5l15 15"/></svg></button>'}},parentEl:null},Mt={tabindex:"-1",width:"24",height:"24",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"};class Tt extends B{constructor(){super(...arguments),Object.defineProperty(this,"state",{enumerable:!0,configurable:!0,writable:!0,value:Pt.Init}),Object.defineProperty(this,"container",{enumerable:!0,configurable:!0,writable:!0,value:null})}onReady(t){var e;if(!t.carousel)return;let i=this.option("display"),n=this.option("absolute"),s=this.option("enabled");if("auto"===s){const t=this.instance.carousel;let e=0;if(t)for(const i of t.slides)(i.panzoom||"image"===i.type)&&e++;e||(s=!1)}s||(i=void 0);let o=0;const a={left:[],middle:[],right:[]};if(i)for(const t of["left","middle","right"])for(const n of i[t]){const i=this.createEl(n);i&&(null===(e=a[t])||void 0===e||e.push(i),o++)}let r=null;if(o&&(r=this.createContainer()),r){for(const[t,e]of Object.entries(a)){const i=document.createElement("div");S(i,"fancybox__toolbar__column is-"+t);for(const t of e)i.appendChild(t);"auto"!==n||"middle"!==t||e.length||(n=!0),r.appendChild(i)}!0===n&&S(r,"is-absolute"),this.state=Pt.Ready,this.onRefresh()}else this.state=Pt.Disabled}onClick(t){var e,i;const n=this.instance,s=n.getSlide(),o=null==s?void 0:s.panzoom,a=t.target,r=a&&x(a)?a.dataset:null;if(!r)return;if(void 0!==r.fancyboxToggleThumbs)return t.preventDefault(),t.stopPropagation(),void(null===(e=n.plugins.Thumbs)||void 0===e||e.toggle());if(void 0!==r.fancyboxToggleFullscreen)return t.preventDefault(),t.stopPropagation(),void this.instance.toggleFullscreen();if(void 0!==r.fancyboxToggleSlideshow){t.preventDefault(),t.stopPropagation();const e=null===(i=n.carousel)||void 0===i?void 0:i.plugins.Autoplay;let s=e.isActive;return o&&"mousemove"===o.panMode&&!s&&o.reset(),void(s?e.stop():e.start())}const l=r.panzoomAction,c=r.panzoomChange;if((c||l)&&(t.preventDefault(),t.stopPropagation()),c){let t={};try{t=JSON.parse(c)}catch(t){}o&&o.applyChange(t)}else l&&o&&o[l]&&o[l]()}onChange(){this.onRefresh()}onRefresh(){if(this.instance.isClosing())return;const t=this.container;if(!t)return;const e=this.instance.getSlide();if(!e||e.state!==it.Ready)return;const i=e&&!e.error&&e.panzoom;for(const e of t.querySelectorAll("[data-panzoom-action]"))i?(e.removeAttribute("disabled"),e.removeAttribute("tabindex")):(e.setAttribute("disabled",""),e.setAttribute("tabindex","-1"));let n=i&&i.canZoomIn(),s=i&&i.canZoomOut();for(const e of t.querySelectorAll('[data-panzoom-action="zoomIn"]'))n?(e.removeAttribute("disabled"),e.removeAttribute("tabindex")):(e.setAttribute("disabled",""),e.setAttribute("tabindex","-1"));for(const e of t.querySelectorAll('[data-panzoom-action="zoomOut"]'))s?(e.removeAttribute("disabled"),e.removeAttribute("tabindex")):(e.setAttribute("disabled",""),e.setAttribute("tabindex","-1"));for(const e of t.querySelectorAll('[data-panzoom-action="toggleZoom"],[data-panzoom-action="iterateZoom"]')){s||n?(e.removeAttribute("disabled"),e.removeAttribute("tabindex")):(e.setAttribute("disabled",""),e.setAttribute("tabindex","-1"));const t=e.querySelector("g");t&&(t.style.display=n?"":"none")}}onDone(t,e){var i;null===(i=e.panzoom)||void 0===i||i.on("afterTransform",(()=>{this.instance.isCurrentSlide(e)&&this.onRefresh()})),this.instance.isCurrentSlide(e)&&this.onRefresh()}createContainer(){const t=this.instance.container;if(!t)return null;const e=this.option("parentEl")||t,i=document.createElement("div");return S(i,"fancybox__toolbar"),e.prepend(i),i.addEventListener("click",this.onClick,{passive:!1,capture:!0}),t&&S(t,"has-toolbar"),this.container=i,i}createEl(t){const e=this.instance,i=e.carousel;if(!i)return null;if("toggleFS"===t)return null;if("fullscreen"===t&&!e.fsAPI)return null;let s=null;const o=i.slides.length||0;let a=0,r=0;for(const t of i.slides)(t.panzoom||"image"===t.type)&&a++,("image"===t.type||t.downloadSrc)&&r++;if(o<2&&["infobar","prev","next"].includes(t))return s;if(void 0!==St[t]&&!a)return null;if("download"===t&&!r)return null;if("thumbs"===t){const t=e.plugins.Thumbs;if(!t||!t.isEnabled)return null}if("slideshow"===t){if(!i.plugins.Autoplay||o<2)return null}if(void 0!==St[t]){const e=St[t];s=document.createElement("button"),s.setAttribute("title",this.instance.localize(`{{${t.toUpperCase()}}}`)),S(s,"f-button"),e.action&&(s.dataset.panzoomAction=e.action),e.change&&(s.dataset.panzoomChange=JSON.stringify(e.change)),s.appendChild(n(this.instance.localize(e.icon)))}else{const e=(this.option("items")||[])[t];e&&(s=n(this.instance.localize(e.tpl)),"function"==typeof e.click&&s.addEventListener("click",(t=>{t.preventDefault(),t.stopPropagation(),"function"==typeof e.click&&e.click.call(this,this,t)})))}const l=null==s?void 0:s.querySelector("svg");if(l)for(const[t,e]of Object.entries(Mt))l.getAttribute(t)||l.setAttribute(t,String(e));return s}removeContainer(){const t=this.container;t&&t.remove(),this.container=null,this.state=Pt.Disabled;const e=this.instance.container;e&&E(e,"has-toolbar")}attach(){const t=this,e=t.instance;e.on("Carousel.initSlides",t.onReady),e.on("done",t.onDone),e.on("reveal",t.onChange),e.on("Carousel.change",t.onChange),t.onReady(t.instance)}detach(){const t=this,e=t.instance;e.off("Carousel.initSlides",t.onReady),e.off("done",t.onDone),e.off("reveal",t.onChange),e.off("Carousel.change",t.onChange),t.removeContainer()}}Object.defineProperty(Tt,"defaults",{enumerable:!0,configurable:!0,writable:!0,value:Ct});const Ot={Hash:st,Html:ht,Images:at,Slideshow:mt,Thumbs:Et,Toolbar:Tt},At="with-fancybox",zt="hide-scrollbar",Lt="--fancybox-scrollbar-compensate",Rt="--fancybox-body-margin",kt="is-animated",It="is-compact",Dt="is-loading",Ft=function(){var t=window.getSelection();return t&&"Range"===t.type};let jt=null,Ht=null;const Bt=new Map;let Nt=0;class _t extends m{get isIdle(){return this.idle}get isCompact(){return this.option("compact")}constructor(t=[],e={},i={}){super(e),Object.defineProperty(this,"userSlides",{enumerable:!0,configurable:!0,writable:!0,value:[]}),Object.defineProperty(this,"userPlugins",{enumerable:!0,configurable:!0,writable:!0,value:{}}),Object.defineProperty(this,"idle",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"idleTimer",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"clickTimer",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"pwt",{enumerable:!0,configurable:!0,writable:!0,value:0}),Object.defineProperty(this,"ignoreFocusChange",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"state",{enumerable:!0,configurable:!0,writable:!0,value:et.Init}),Object.defineProperty(this,"id",{enumerable:!0,configurable:!0,writable:!0,value:0}),Object.defineProperty(this,"container",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"footer",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"caption",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"carousel",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"lastFocus",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"prevMouseMoveEvent",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"fsAPI",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.fsAPI=(()=>{let t,e="",i="",n="";return document.fullscreenEnabled?(e="requestFullscreen",i="exitFullscreen",n="fullscreenElement"):document.webkitFullscreenEnabled&&(e="webkitRequestFullscreen",i="webkitExitFullscreen",n="webkitFullscreenElement"),e&&(t={request:function(t){return"webkitRequestFullscreen"===e?t[e](Element.ALLOW_KEYBOARD_INPUT):t[e]()},exit:function(){return document[n]&&document[i]()},isFullscreen:function(){return document[n]}}),t})(),this.id=e.id||++Nt,Bt.set(this.id,this),this.userSlides=t,this.userPlugins=i,queueMicrotask((()=>{this.init()}))}init(){if(this.state===et.Destroy)return;this.state=et.Init,this.attachPlugins(Object.assign(Object.assign({},_t.Plugins),this.userPlugins)),this.emit("init"),!0===this.option("hideScrollbar")&&(()=>{if(!G)return;const t=document.body;if(t.classList.contains(zt))return;let e=window.innerWidth-document.documentElement.getBoundingClientRect().width;e<0&&(e=0);const i=t.currentStyle||window.getComputedStyle(t),n=parseFloat(i.marginRight);document.documentElement.style.setProperty(Lt,`${e}px`),n&&t.style.setProperty(Rt,`${n}px`),t.classList.add(zt)})(),this.initLayout(),this.scale();const t=()=>{this.initCarousel(this.userSlides),this.state=et.Ready,this.attachEvents(),this.emit("ready"),setTimeout((()=>{this.container&&this.container.setAttribute("aria-hidden","false")}),16)},e=this.fsAPI;this.option("Fullscreen.autoStart")&&e&&!e.isFullscreen()?e.request(this.container).then((()=>t())).catch((()=>t())):t()}initLayout(){var t,e;const i=this.option("parentEl")||document.body,s=n(this.localize(this.option("tpl.main")||""));s&&(s.setAttribute("id",`fancybox-${this.id}`),s.setAttribute("aria-label",this.localize("{{MODAL}}")),s.classList.toggle(It,this.isCompact),S(s,this.option("mainClass")||""),this.container=s,this.footer=s.querySelector(".fancybox__footer"),i.appendChild(s),S(document.documentElement,At),jt&&Ht||(jt=document.createElement("span"),S(jt,"fancybox-focus-guard"),jt.setAttribute("tabindex","0"),jt.setAttribute("aria-hidden","true"),jt.setAttribute("aria-label","Focus guard"),Ht=jt.cloneNode(),null===(t=s.parentElement)||void 0===t||t.insertBefore(jt,s),null===(e=s.parentElement)||void 0===e||e.append(Ht)),this.option("animated")&&(S(s,kt),setTimeout((()=>{this.isClosing()||E(s,kt)}),350)),this.emit("initLayout"))}initCarousel(t){const i=this.container;if(!i)return;const n=i.querySelector(".fancybox__carousel");if(!n)return;const s=this.carousel=new Z(n,u({},{slides:t,transition:"fade",Panzoom:{lockAxis:this.option("dragToClose")?"xy":"x",infinite:!!this.option("dragToClose")&&"y"},Dots:!1,Navigation:{classes:{container:"fancybox__nav",button:"f-button",isNext:"is-next",isPrev:"is-prev"}},initialPage:this.option("startIndex"),l10n:this.option("l10n")},this.option("Carousel")||{}));s.on("*",((t,e,...i)=>{this.emit(`Carousel.${e}`,t,...i)})),s.on(["ready","change"],(()=>{var t;const e=this.getSlide();e&&(null===(t=e.panzoom)||void 0===t||t.updateControls()),this.manageCaption(e)})),this.on("Carousel.removeSlide",((t,e,i)=>{i.contentEl&&(i.contentEl.remove(),i.contentEl=void 0);const n=i.el;n&&(E(n,"has-error"),E(n,"has-unknown"),E(n,`has-${i.type||"unknown"}`)),i.closeBtnEl&&i.closeBtnEl.remove(),i.closeBtnEl=void 0,i.captionEl&&i.captionEl.remove(),i.captionEl=void 0,i.spinnerEl&&i.spinnerEl.remove(),i.spinnerEl=void 0,i.state=void 0})),s.on("Panzoom.touchStart",(()=>{var t,e;this.isCompact||this.endIdle(),(null===(t=document.activeElement)||void 0===t?void 0:t.closest(".f-thumbs"))&&(null===(e=this.container)||void 0===e||e.focus())})),s.on("settle",(()=>{this.idleTimer||this.isCompact||!this.option("idle")||this.setIdle(),this.option("autoFocus")&&!this.isClosing&&this.checkFocus()})),this.option("dragToClose")&&(s.on("Panzoom.afterTransform",((t,i)=>{const n=this.getSlide();if(n&&e(n.el))return;const s=this.container;if(s){const t=Math.abs(i.current.f),e=t<1?"":Math.max(.5,Math.min(1,1-t/i.contentRect.fitHeight*1.5));s.style.setProperty("--fancybox-ts",e?"0s":""),s.style.setProperty("--fancybox-opacity",e+"")}})),s.on("Panzoom.touchEnd",((t,i,n)=>{var s;const o=this.getSlide();if(o&&e(o.el))return;if(i.isMobile&&document.activeElement&&-1!==["TEXTAREA","INPUT"].indexOf(null===(s=document.activeElement)||void 0===s?void 0:s.nodeName))return;const a=Math.abs(i.dragOffset.y);"y"===i.lockedAxis&&(a>=200||a>=50&&i.dragOffset.time<300)&&(n&&n.cancelable&&n.preventDefault(),this.close(n,"f-throwOut"+(i.current.f<0?"Up":"Down")))}))),s.on("change",(t=>{var e;let i=null===(e=this.getSlide())||void 0===e?void 0:e.triggerEl;if(i){const e=new CustomEvent("slideTo",{bubbles:!0,cancelable:!0,detail:t.page});i.dispatchEvent(e)}})),s.on(["refresh","change"],(t=>{const e=this.container;if(!e)return;for(const i of e.querySelectorAll("[data-fancybox-current-index]"))i.innerHTML=t.page+1;for(const i of e.querySelectorAll("[data-fancybox-count]"))i.innerHTML=t.pages.length;if(!t.isInfinite){for(const i of e.querySelectorAll("[data-fancybox-next]"))t.page<t.pages.length-1?(i.removeAttribute("disabled"),i.removeAttribute("tabindex")):(i.setAttribute("disabled",""),i.setAttribute("tabindex","-1"));for(const i of e.querySelectorAll("[data-fancybox-prev]"))t.page>0?(i.removeAttribute("disabled"),i.removeAttribute("tabindex")):(i.setAttribute("disabled",""),i.setAttribute("tabindex","-1"))}const i=this.getSlide();if(!i)return;let n=i.downloadSrc||"";n||"image"!==i.type||i.error||"string"!=typeof i.src||(n=i.src);const s="disabled",o="tabindex",a="download",r="href";for(const t of e.querySelectorAll("[data-fancybox-download]")){const e=i.downloadFilename;n?(t.removeAttribute(s),t.removeAttribute(o),t.setAttribute(r,n),t.setAttribute(a,e||n),t.setAttribute("target","_blank")):(t.setAttribute(s,""),t.setAttribute(o,"-1"),t.removeAttribute(r),t.removeAttribute(a))}})),this.emit("initCarousel")}attachEvents(){const t=this,e=t.container;if(!e)return;e.addEventListener("click",t.onClick,{passive:!1,capture:!1}),e.addEventListener("wheel",t.onWheel,{passive:!1,capture:!1}),document.addEventListener("keydown",t.onKeydown,{passive:!1,capture:!0}),document.addEventListener("visibilitychange",t.onVisibilityChange,!1),document.addEventListener("mousemove",t.onMousemove),t.option("trapFocus")&&document.addEventListener("focus",t.onFocus,!0),window.addEventListener("resize",t.onResize);const i=window.visualViewport;i&&(i.addEventListener("scroll",t.onResize),i.addEventListener("resize",t.onResize))}detachEvents(){const t=this,e=t.container;if(!e)return;document.removeEventListener("keydown",t.onKeydown,{passive:!1,capture:!0}),e.removeEventListener("wheel",t.onWheel,{passive:!1,capture:!1}),e.removeEventListener("click",t.onClick,{passive:!1,capture:!1}),document.removeEventListener("mousemove",t.onMousemove),window.removeEventListener("resize",t.onResize);const i=window.visualViewport;i&&(i.removeEventListener("resize",t.onResize),i.removeEventListener("scroll",t.onResize)),document.removeEventListener("visibilitychange",t.onVisibilityChange,!1),document.removeEventListener("focus",t.onFocus,!0)}scale(){const t=this.container;if(!t)return;const e=window.visualViewport,i=Math.max(1,(null==e?void 0:e.scale)||1);let n="",s="",o="";if(e&&i>1){let t=`${e.offsetLeft}px`,a=`${e.offsetTop}px`;n=e.width*i+"px",s=e.height*i+"px",o=`translate3d(${t}, ${a}, 0) scale(${1/i})`}t.style.transform=o,t.style.width=n,t.style.height=s}onClick(t){var e,i;const{container:n,isCompact:s}=this;if(!n||this.isClosing())return;!s&&this.option("idle")&&this.resetIdle();const o=document.activeElement;if(Ft()&&o&&n.contains(o))return;const a=t.composedPath()[0];if(a===(null===(e=this.carousel)||void 0===e?void 0:e.container))return;if(a.closest(".f-spinner")||a.closest("[data-fancybox-close]"))return t.preventDefault(),void this.close(t);if(a.closest("[data-fancybox-prev]"))return t.preventDefault(),void this.prev();if(a.closest("[data-fancybox-next]"))return t.preventDefault(),void this.next();if(s&&"image"===(null===(i=this.getSlide())||void 0===i?void 0:i.type))return void(this.clickTimer?(clearTimeout(this.clickTimer),this.clickTimer=null):this.clickTimer=setTimeout((()=>{this.toggleIdle(),this.clickTimer=null}),350));if(this.emit("click",t),t.defaultPrevented)return;let r=!1;if(a.closest(".fancybox__content")){if(o){if(o.closest("[contenteditable]"))return;a.matches(J)||o.blur()}if(Ft())return;r=this.option("contentClick")}else a.closest(".fancybox__carousel")&&!a.matches(J)&&(r=this.option("backdropClick"));"close"===r?(t.preventDefault(),this.close(t)):"next"===r?(t.preventDefault(),this.next()):"prev"===r&&(t.preventDefault(),this.prev())}onWheel(t){var e;let i=this.option("wheel",t);(null===(e=t.target)||void 0===e?void 0:e.closest(".fancybox__thumbs"))&&(i="slide");const n="slide"===i,s=[-t.deltaX||0,-t.deltaY||0,-t.detail||0].reduce((function(t,e){return Math.abs(e)>Math.abs(t)?e:t})),o=Math.max(-1,Math.min(1,s)),a=Date.now();this.pwt&&a-this.pwt<300?n&&t.preventDefault():(this.pwt=a,this.emit("wheel",t),t.defaultPrevented||("close"===i?(t.preventDefault(),this.close(t)):"slide"===i&&(t.preventDefault(),this[o>0?"prev":"next"]())))}onKeydown(t){if(!this.isTopmost())return;this.isCompact||!this.option("idle")||this.isClosing()||this.resetIdle();const e=t.key,i=this.option("keyboard");if(!i||t.ctrlKey||t.altKey||t.shiftKey)return;const n=t.composedPath()[0],s=document.activeElement&&document.activeElement.classList,o=s&&s.contains("f-button")||n.dataset.carouselPage||n.dataset.carouselIndex;if("Escape"!==e&&!o&&x(n)){if(n.isContentEditable||-1!==["TEXTAREA","OPTION","INPUT","SELECT","VIDEO"].indexOf(n.nodeName))return}this.emit("keydown",e,t);const a=i[e];"function"==typeof this[a]&&(t.preventDefault(),this[a]())}onResize(){const t=It,e=this.container;if(!e)return;const i=this.isCompact;e.classList.toggle(t,i),this.manageCaption(this.getSlide()),this.isCompact?this.clearIdle():this.endIdle(),this.scale(),this.emit("resize")}onFocus(t){this.isTopmost()&&this.checkFocus(t)}onMousemove(t){this.prevMouseMoveEvent=t,!this.isCompact&&this.option("idle")&&this.resetIdle()}onVisibilityChange(){"visible"===document.visibilityState?this.checkFocus():this.endIdle()}manageCloseBtn(t){const e=this.optionFor(t,"closeButton")||!1;if("auto"===e){const t=this.plugins.Toolbar;if(t&&t.state===Pt.Ready)return}if(!e)return;if(!t.contentEl||t.closeBtnEl)return;const i=this.option("tpl.closeButton");if(i){const e=n(this.localize(i));t.closeBtnEl=t.contentEl.appendChild(e),t.el&&S(t.el,"has-close-btn")}}manageCaption(t=void 0){var e,i;const n="fancybox__caption",s="has-caption",o=this.container;if(!o)return;const a=this.isCompact||this.option("commonCaption"),r=!a;if(this.caption&&this.stop(this.caption),r&&this.caption&&(this.caption.remove(),this.caption=null),a&&!this.caption)for(const t of(null===(e=this.carousel)||void 0===e?void 0:e.slides)||[])t.captionEl&&(t.captionEl.remove(),t.captionEl=void 0,E(t.el,s),null===(i=t.el)||void 0===i||i.removeAttribute("aria-labelledby"));if(t||(t=this.getSlide()),!t||a&&!this.isCurrentSlide(t))return;const l=t.el;let c=this.optionFor(t,"caption","");if(!c)return void(a&&this.caption&&this.animate(this.caption,"f-fadeOut",(()=>{this.caption&&(this.caption.innerHTML="")})));let h=null;if(r){if(h=t.captionEl||null,l&&!h){const e=n+`_${this.id}_${t.index}`;h=document.createElement("div"),S(h,n),h.setAttribute("id",e),t.captionEl=l.appendChild(h),S(l,s),l.setAttribute("aria-labelledby",e)}}else{if(h=this.caption,h||(h=o.querySelector("."+n)),!h){h=document.createElement("div"),h.dataset.fancyboxCaption="",S(h,n);(this.footer||o).prepend(h)}S(o,s),this.caption=h}h&&(h.innerHTML="","string"==typeof c?h.innerHTML=c:c instanceof HTMLElement&&h.appendChild(c))}checkFocus(t){var e;const i=document.activeElement||null;i&&(null===(e=this.container)||void 0===e?void 0:e.contains(i))||this.focus(t)}focus(t){var e;if(this.ignoreFocusChange)return;const i=document.activeElement||null,n=(null==t?void 0:t.target)||null,s=this.container,o=this.getSlide();if(!s||!(null===(e=this.carousel)||void 0===e?void 0:e.viewport))return;if(!t&&i&&s.contains(i))return;const a=o&&o.state===it.Ready?o.el:null;if(!a||a.contains(i)||s===i)return;t&&t.cancelable&&t.preventDefault(),this.ignoreFocusChange=!0;const r=Array.from(s.querySelectorAll(J));let l=[],c=null;for(let t of r){const e=!t.offsetParent||t.closest('[aria-hidden="true"]'),i=a&&a.contains(t),n=!this.carousel.viewport.contains(t);if(t===s||(i||n)&&!e){l.push(t);const e=t.dataset.origTabindex;void 0!==e&&e&&(t.tabIndex=parseFloat(e)),t.removeAttribute("data-orig-tabindex"),!t.hasAttribute("autoFocus")&&c||(c=t)}else{const e=void 0===t.dataset.origTabindex?t.getAttribute("tabindex")||"":t.dataset.origTabindex;e&&(t.dataset.origTabindex=e),t.tabIndex=-1}}let h=null;t?(!n||l.indexOf(n)<0)&&(h=c||s,l.length&&(i===Ht?h=l[0]:this.lastFocus!==s&&i!==jt||(h=l[l.length-1]))):h=o&&"image"===o.type?s:c||s,h&&Q(h),this.lastFocus=document.activeElement,this.ignoreFocusChange=!1}next(){const t=this.carousel;t&&t.pages.length>1&&t.slideNext()}prev(){const t=this.carousel;t&&t.pages.length>1&&t.slidePrev()}jumpTo(...t){this.carousel&&this.carousel.slideTo(...t)}isTopmost(){var t;return(null===(t=_t.getInstance())||void 0===t?void 0:t.id)==this.id}animate(t=null,e="",i){if(!t||!e)return void(i&&i());this.stop(t);const n=s=>{s.target===t&&t.dataset.animationName&&(t.removeEventListener("animationend",n),delete t.dataset.animationName,i&&i(),E(t,e))};t.dataset.animationName=e,t.addEventListener("animationend",n),S(t,e)}stop(t){t&&t.dispatchEvent(new CustomEvent("animationend",{bubbles:!1,cancelable:!0,currentTarget:t}))}setContent(t,e="",i=!0){if(this.isClosing())return;const s=t.el;if(!s)return;let o=null;if(x(e)?o=e:(o=n(e+""),x(o)||(o=document.createElement("div"),o.innerHTML=e+"")),["img","picture","iframe","video","audio"].includes(o.nodeName.toLowerCase())){const t=document.createElement("div");t.appendChild(o),o=t}x(o)&&t.filter&&!t.error&&(o=o.querySelector(t.filter)),o&&x(o)?(S(o,"fancybox__content"),t.id&&o.setAttribute("id",t.id),"none"!==o.style.display&&"none"!==getComputedStyle(o).getPropertyValue("display")||(o.style.display=t.display||this.option("defaultDisplay")||"flex"),s.classList.add(`has-${t.error?"error":t.type||"unknown"}`),s.prepend(o),t.contentEl=o,i&&this.revealContent(t),this.manageCloseBtn(t),this.manageCaption(t)):this.setError(t,"{{ELEMENT_NOT_FOUND}}")}revealContent(t,e){const i=t.el,n=t.contentEl;i&&n&&(this.emit("reveal",t),this.hideLoading(t),t.state=it.Opening,(e=this.isOpeningSlide(t)?void 0===e?this.optionFor(t,"showClass"):e:"f-fadeIn")?this.animate(n,e,(()=>{this.done(t)})):this.done(t))}done(t){this.isClosing()||(t.state=it.Ready,this.emit("done",t),S(t.el,"is-done"),this.isCurrentSlide(t)&&this.option("autoFocus")&&queueMicrotask((()=>{this.option("autoFocus")&&(this.option("autoFocus")?this.focus():this.checkFocus())})),this.isOpeningSlide(t)&&!this.isCompact&&this.option("idle")&&this.setIdle())}isCurrentSlide(t){const e=this.getSlide();return!(!t||!e)&&e.index===t.index}isOpeningSlide(t){var e,i;return null===(null===(e=this.carousel)||void 0===e?void 0:e.prevPage)&&t.index===(null===(i=this.getSlide())||void 0===i?void 0:i.index)}showLoading(t){t.state=it.Loading;const e=t.el;if(!e)return;S(e,Dt),this.emit("loading",t),t.spinnerEl||setTimeout((()=>{if(!this.isClosing()&&!t.spinnerEl&&t.state===it.Loading){let i=n(w);t.spinnerEl=i,e.prepend(i),this.animate(i,"f-fadeIn")}}),250)}hideLoading(t){const e=t.el;if(!e)return;const i=t.spinnerEl;this.isClosing()?null==i||i.remove():(E(e,Dt),i&&this.animate(i,"f-fadeOut",(()=>{i.remove()})),t.state===it.Loading&&(this.emit("loaded",t),t.state=it.Ready))}setError(t,e){if(this.isClosing())return;const i=new Event("error",{bubbles:!0,cancelable:!0});if(this.emit("error",i,t),i.defaultPrevented)return;t.error=e,this.hideLoading(t),this.clearContent(t);const n=document.createElement("div");n.classList.add("fancybox-error"),n.innerHTML=this.localize(e||"<p>{{ERROR}}</p>"),this.setContent(t,n)}clearContent(t){var e;null===(e=this.carousel)||void 0===e||e.emit("removeSlide",t)}getSlide(){var t;const e=this.carousel;return(null===(t=null==e?void 0:e.pages[null==e?void 0:e.page])||void 0===t?void 0:t.slides[0])||void 0}close(t,e){if(this.isClosing())return;const i=new Event("shouldClose",{bubbles:!0,cancelable:!0});if(this.emit("shouldClose",i,t),i.defaultPrevented)return;t&&t.cancelable&&(t.preventDefault(),t.stopPropagation());const n=this.fsAPI,s=()=>{this.proceedClose(t,e)};n&&n.isFullscreen()?Promise.resolve(n.exit()).then((()=>s())):s()}clearIdle(){this.idleTimer&&clearTimeout(this.idleTimer),this.idleTimer=null}setIdle(t=!1){const e=()=>{this.clearIdle(),this.idle=!0,S(this.container,"is-idle"),this.emit("setIdle")};if(this.clearIdle(),!this.isClosing())if(t)e();else{const t=this.option("idle");t&&(this.idleTimer=setTimeout(e,t))}}endIdle(){this.clearIdle(),this.idle&&!this.isClosing()&&(this.idle=!1,E(this.container,"is-idle"),this.emit("endIdle"))}resetIdle(){this.endIdle(),this.setIdle()}toggleIdle(){this.idle?this.endIdle():this.setIdle(!0)}toggleFullscreen(){const t=this.fsAPI;t&&(t.isFullscreen()?t.exit():this.container&&t.request(this.container))}isClosing(){return[et.Closing,et.CustomClosing,et.Destroy].includes(this.state)}proceedClose(t,e){var i,n;this.state=et.Closing,this.clearIdle(),this.detachEvents();const s=this.container,o=this.carousel,a=this.getSlide(),r=a&&this.option("placeFocusBack")?a.triggerEl||this.option("triggerEl"):null;if(r&&(U(r)?Q(r):r.focus()),s&&(S(s,"is-closing"),s.setAttribute("aria-hidden","true"),this.option("animated")&&S(s,kt),s.style.pointerEvents="none"),o){o.clearTransitions(),null===(i=o.panzoom)||void 0===i||i.destroy(),null===(n=o.plugins.Navigation)||void 0===n||n.detach();for(const t of o.slides){t.state=it.Closing,this.hideLoading(t);const e=t.contentEl;e&&this.stop(e);const i=null==t?void 0:t.panzoom;i&&(i.stop(),i.detachEvents(),i.detachObserver()),this.isCurrentSlide(t)||o.emit("removeSlide",t)}}this.emit("close",t),this.state!==et.CustomClosing?(void 0===e&&a&&(e=this.optionFor(a,"hideClass")),e&&a?(this.animate(a.contentEl,e,(()=>{o&&o.emit("removeSlide",a)})),setTimeout((()=>{this.destroy()}),500)):this.destroy()):setTimeout((()=>{this.destroy()}),500)}destroy(){var t;if(this.state===et.Destroy)return;this.state=et.Destroy,null===(t=this.carousel)||void 0===t||t.destroy();const e=this.container;e&&e.remove(),Bt.delete(this.id);const i=_t.getInstance();i?i.focus():(jt&&(jt.remove(),jt=null),Ht&&(Ht.remove(),Ht=null),E(document.documentElement,At),(()=>{if(!G)return;const t=document,e=t.body;e.classList.remove(zt),e.style.setProperty(Rt,""),t.documentElement.style.setProperty(Lt,"")})(),this.emit("destroy"))}static bind(t,e,i){if(!G)return;let n,s="",o={};if(void 0===t?n=document.body:"string"==typeof t?(n=document.body,s=t,"object"==typeof e&&(o=e||{})):(n=t,"string"==typeof e&&(s=e),"object"==typeof i&&(o=i||{})),!n||!x(n))return;s=s||"[data-fancybox]";const a=_t.openers.get(n)||new Map;a.set(s,o),_t.openers.set(n,a),1===a.size&&n.addEventListener("click",_t.fromEvent)}static unbind(t,e){let i,n="";if("string"==typeof t?(i=document.body,n=t):(i=t,"string"==typeof e&&(n=e)),!i)return;const s=_t.openers.get(i);s&&n&&s.delete(n),n&&s||(_t.openers.delete(i),i.removeEventListener("click",_t.fromEvent))}static destroy(){let t;for(;t=_t.getInstance();)t.destroy();for(const t of _t.openers.keys())t.removeEventListener("click",_t.fromEvent);_t.openers=new Map}static fromEvent(t){if(t.defaultPrevented)return;if(t.button&&0!==t.button)return;if(t.ctrlKey||t.metaKey||t.shiftKey)return;let e=t.composedPath()[0];const i=e.closest("[data-fancybox-trigger]");if(i){const t=i.dataset.fancyboxTrigger||"",n=document.querySelectorAll(`[data-fancybox="${t}"]`),s=parseInt(i.dataset.fancyboxIndex||"",10)||0;e=n[s]||e}if(!(e&&e instanceof Element))return;let n,s,o,a;if([..._t.openers].reverse().find((([t,i])=>!(!t.contains(e)||![...i].reverse().find((([i,r])=>{let l=e.closest(i);return!!l&&(n=t,s=i,o=l,a=r,!0)}))))),!n||!s||!o)return;a=a||{},t.preventDefault(),e=o;let r=[],l=u({},tt,a);l.event=t,l.triggerEl=e,l.delegate=i;const c=l.groupAll,h=l.groupAttr,d=h&&e?e.getAttribute(`${h}`):"";if((!e||d||c)&&(r=[].slice.call(n.querySelectorAll(s))),e&&!c&&(r=d?r.filter((t=>t.getAttribute(`${h}`)===d)):[e]),!r.length)return;const p=_t.getInstance();return p&&p.options.triggerEl&&r.indexOf(p.options.triggerEl)>-1?void 0:(e&&(l.startIndex=r.indexOf(e)),_t.fromNodes(r,l))}static fromSelector(t,e){let i=null,n="";if("string"==typeof t?(i=document.body,n=t):t instanceof HTMLElement&&"string"==typeof e&&(i=t,n=e),!i||!n)return!1;const s=_t.openers.get(i);if(!s)return!1;const o=s.get(n);return!!o&&_t.fromNodes(Array.from(i.querySelectorAll(n)),o)}static fromNodes(t,e){e=u({},tt,e||{});const i=[];for(const n of t){const t=n.dataset||{},s=t.src||n.getAttribute("href")||n.getAttribute("currentSrc")||n.getAttribute("src")||void 0;let o;const a=e.delegate;let r;a&&i.length===e.startIndex&&(o=a instanceof HTMLImageElement?a:a.querySelector("img:not([aria-hidden])")),o||(o=n instanceof HTMLImageElement?n:n.querySelector("img:not([aria-hidden])")),o&&(r=o.currentSrc||o.src||void 0,!r&&o.dataset&&(r=o.dataset.lazySrc||o.dataset.src||void 0));const l={src:s,triggerEl:n,thumbEl:o,thumbElSrc:r,thumbSrc:r};for(const e in t)l[e]=t[e]+"";i.push(l)}return new _t(i,e)}static getInstance(t){if(t)return Bt.get(t);return Array.from(Bt.values()).reverse().find((t=>!t.isClosing()&&t))||null}static getSlide(){var t;return(null===(t=_t.getInstance())||void 0===t?void 0:t.getSlide())||null}static show(t=[],e={}){return new _t(t,e)}static next(){const t=_t.getInstance();t&&t.next()}static prev(){const t=_t.getInstance();t&&t.prev()}static close(t=!0,...e){if(t)for(const t of Bt.values())t.close(...e);else{const t=_t.getInstance();t&&t.close(...e)}}}Object.defineProperty(_t,"version",{enumerable:!0,configurable:!0,writable:!0,value:"5.0.22"}),Object.defineProperty(_t,"defaults",{enumerable:!0,configurable:!0,writable:!0,value:tt}),Object.defineProperty(_t,"Plugins",{enumerable:!0,configurable:!0,writable:!0,value:Ot}),Object.defineProperty(_t,"openers",{enumerable:!0,configurable:!0,writable:!0,value:new Map});


/***/ }),

/***/ "./node_modules/assert/build/assert.js":
/*!*********************************************!*\
  !*** ./node_modules/assert/build/assert.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/* provided dependency */ var process = __webpack_require__(/*! ./node_modules/process/browser.js */ "./node_modules/process/browser.js");
/* provided dependency */ var console = __webpack_require__(/*! ./node_modules/console-browserify/index.js */ "./node_modules/console-browserify/index.js");
// Currently in sync with Node.js lib/assert.js
// https://github.com/nodejs/node/commit/2a51ae424a513ec9a6aa3466baa0cc1d55dd4f3b
// Originally from narwhal.js (http://narwhaljs.org)
// Copyright (c) 2009 Thomas Robinson <280north.com>
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the 'Software'), to
// deal in the Software without restriction, including without limitation the
// rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
// sell copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
// ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
// WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _require = __webpack_require__(/*! ./internal/errors */ "./node_modules/assert/build/internal/errors.js"),
    _require$codes = _require.codes,
    ERR_AMBIGUOUS_ARGUMENT = _require$codes.ERR_AMBIGUOUS_ARGUMENT,
    ERR_INVALID_ARG_TYPE = _require$codes.ERR_INVALID_ARG_TYPE,
    ERR_INVALID_ARG_VALUE = _require$codes.ERR_INVALID_ARG_VALUE,
    ERR_INVALID_RETURN_VALUE = _require$codes.ERR_INVALID_RETURN_VALUE,
    ERR_MISSING_ARGS = _require$codes.ERR_MISSING_ARGS;

var AssertionError = __webpack_require__(/*! ./internal/assert/assertion_error */ "./node_modules/assert/build/internal/assert/assertion_error.js");

var _require2 = __webpack_require__(/*! util/ */ "./node_modules/util/util.js"),
    inspect = _require2.inspect;

var _require$types = (__webpack_require__(/*! util/ */ "./node_modules/util/util.js").types),
    isPromise = _require$types.isPromise,
    isRegExp = _require$types.isRegExp;

var objectAssign = Object.assign ? Object.assign : (__webpack_require__(/*! es6-object-assign */ "./node_modules/es6-object-assign/index.js").assign);
var objectIs = Object.is ? Object.is : __webpack_require__(/*! object-is */ "./node_modules/object-is/index.js");
var errorCache = new Map();
var isDeepEqual;
var isDeepStrictEqual;
var parseExpressionAt;
var findNodeAround;
var decoder;

function lazyLoadComparison() {
  var comparison = __webpack_require__(/*! ./internal/util/comparisons */ "./node_modules/assert/build/internal/util/comparisons.js");

  isDeepEqual = comparison.isDeepEqual;
  isDeepStrictEqual = comparison.isDeepStrictEqual;
} // Escape control characters but not \n and \t to keep the line breaks and
// indentation intact.
// eslint-disable-next-line no-control-regex


var escapeSequencesRegExp = /[\x00-\x08\x0b\x0c\x0e-\x1f]/g;
var meta = ["\\u0000", "\\u0001", "\\u0002", "\\u0003", "\\u0004", "\\u0005", "\\u0006", "\\u0007", '\\b', '', '', "\\u000b", '\\f', '', "\\u000e", "\\u000f", "\\u0010", "\\u0011", "\\u0012", "\\u0013", "\\u0014", "\\u0015", "\\u0016", "\\u0017", "\\u0018", "\\u0019", "\\u001a", "\\u001b", "\\u001c", "\\u001d", "\\u001e", "\\u001f"];

var escapeFn = function escapeFn(str) {
  return meta[str.charCodeAt(0)];
};

var warned = false; // The assert module provides functions that throw
// AssertionError's when particular conditions are not met. The
// assert module must conform to the following interface.

var assert = module.exports = ok;
var NO_EXCEPTION_SENTINEL = {}; // All of the following functions must throw an AssertionError
// when a corresponding condition is not met, with a message that
// may be undefined if not provided. All assertion methods provide
// both the actual and expected values to the assertion error for
// display purposes.

function innerFail(obj) {
  if (obj.message instanceof Error) throw obj.message;
  throw new AssertionError(obj);
}

function fail(actual, expected, message, operator, stackStartFn) {
  var argsLen = arguments.length;
  var internalMessage;

  if (argsLen === 0) {
    internalMessage = 'Failed';
  } else if (argsLen === 1) {
    message = actual;
    actual = undefined;
  } else {
    if (warned === false) {
      warned = true;
      var warn = process.emitWarning ? process.emitWarning : console.warn.bind(console);
      warn('assert.fail() with more than one argument is deprecated. ' + 'Please use assert.strictEqual() instead or only pass a message.', 'DeprecationWarning', 'DEP0094');
    }

    if (argsLen === 2) operator = '!=';
  }

  if (message instanceof Error) throw message;
  var errArgs = {
    actual: actual,
    expected: expected,
    operator: operator === undefined ? 'fail' : operator,
    stackStartFn: stackStartFn || fail
  };

  if (message !== undefined) {
    errArgs.message = message;
  }

  var err = new AssertionError(errArgs);

  if (internalMessage) {
    err.message = internalMessage;
    err.generatedMessage = true;
  }

  throw err;
}

assert.fail = fail; // The AssertionError is defined in internal/error.

assert.AssertionError = AssertionError;

function innerOk(fn, argLen, value, message) {
  if (!value) {
    var generatedMessage = false;

    if (argLen === 0) {
      generatedMessage = true;
      message = 'No value argument passed to `assert.ok()`';
    } else if (message instanceof Error) {
      throw message;
    }

    var err = new AssertionError({
      actual: value,
      expected: true,
      message: message,
      operator: '==',
      stackStartFn: fn
    });
    err.generatedMessage = generatedMessage;
    throw err;
  }
} // Pure assertion tests whether a value is truthy, as determined
// by !!value.


function ok() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  innerOk.apply(void 0, [ok, args.length].concat(args));
}

assert.ok = ok; // The equality assertion tests shallow, coercive equality with ==.

/* eslint-disable no-restricted-properties */

assert.equal = function equal(actual, expected, message) {
  if (arguments.length < 2) {
    throw new ERR_MISSING_ARGS('actual', 'expected');
  } // eslint-disable-next-line eqeqeq


  if (actual != expected) {
    innerFail({
      actual: actual,
      expected: expected,
      message: message,
      operator: '==',
      stackStartFn: equal
    });
  }
}; // The non-equality assertion tests for whether two objects are not
// equal with !=.


assert.notEqual = function notEqual(actual, expected, message) {
  if (arguments.length < 2) {
    throw new ERR_MISSING_ARGS('actual', 'expected');
  } // eslint-disable-next-line eqeqeq


  if (actual == expected) {
    innerFail({
      actual: actual,
      expected: expected,
      message: message,
      operator: '!=',
      stackStartFn: notEqual
    });
  }
}; // The equivalence assertion tests a deep equality relation.


assert.deepEqual = function deepEqual(actual, expected, message) {
  if (arguments.length < 2) {
    throw new ERR_MISSING_ARGS('actual', 'expected');
  }

  if (isDeepEqual === undefined) lazyLoadComparison();

  if (!isDeepEqual(actual, expected)) {
    innerFail({
      actual: actual,
      expected: expected,
      message: message,
      operator: 'deepEqual',
      stackStartFn: deepEqual
    });
  }
}; // The non-equivalence assertion tests for any deep inequality.


assert.notDeepEqual = function notDeepEqual(actual, expected, message) {
  if (arguments.length < 2) {
    throw new ERR_MISSING_ARGS('actual', 'expected');
  }

  if (isDeepEqual === undefined) lazyLoadComparison();

  if (isDeepEqual(actual, expected)) {
    innerFail({
      actual: actual,
      expected: expected,
      message: message,
      operator: 'notDeepEqual',
      stackStartFn: notDeepEqual
    });
  }
};
/* eslint-enable */


assert.deepStrictEqual = function deepStrictEqual(actual, expected, message) {
  if (arguments.length < 2) {
    throw new ERR_MISSING_ARGS('actual', 'expected');
  }

  if (isDeepEqual === undefined) lazyLoadComparison();

  if (!isDeepStrictEqual(actual, expected)) {
    innerFail({
      actual: actual,
      expected: expected,
      message: message,
      operator: 'deepStrictEqual',
      stackStartFn: deepStrictEqual
    });
  }
};

assert.notDeepStrictEqual = notDeepStrictEqual;

function notDeepStrictEqual(actual, expected, message) {
  if (arguments.length < 2) {
    throw new ERR_MISSING_ARGS('actual', 'expected');
  }

  if (isDeepEqual === undefined) lazyLoadComparison();

  if (isDeepStrictEqual(actual, expected)) {
    innerFail({
      actual: actual,
      expected: expected,
      message: message,
      operator: 'notDeepStrictEqual',
      stackStartFn: notDeepStrictEqual
    });
  }
}

assert.strictEqual = function strictEqual(actual, expected, message) {
  if (arguments.length < 2) {
    throw new ERR_MISSING_ARGS('actual', 'expected');
  }

  if (!objectIs(actual, expected)) {
    innerFail({
      actual: actual,
      expected: expected,
      message: message,
      operator: 'strictEqual',
      stackStartFn: strictEqual
    });
  }
};

assert.notStrictEqual = function notStrictEqual(actual, expected, message) {
  if (arguments.length < 2) {
    throw new ERR_MISSING_ARGS('actual', 'expected');
  }

  if (objectIs(actual, expected)) {
    innerFail({
      actual: actual,
      expected: expected,
      message: message,
      operator: 'notStrictEqual',
      stackStartFn: notStrictEqual
    });
  }
};

var Comparison = function Comparison(obj, keys, actual) {
  var _this = this;

  _classCallCheck(this, Comparison);

  keys.forEach(function (key) {
    if (key in obj) {
      if (actual !== undefined && typeof actual[key] === 'string' && isRegExp(obj[key]) && obj[key].test(actual[key])) {
        _this[key] = actual[key];
      } else {
        _this[key] = obj[key];
      }
    }
  });
};

function compareExceptionKey(actual, expected, key, message, keys, fn) {
  if (!(key in actual) || !isDeepStrictEqual(actual[key], expected[key])) {
    if (!message) {
      // Create placeholder objects to create a nice output.
      var a = new Comparison(actual, keys);
      var b = new Comparison(expected, keys, actual);
      var err = new AssertionError({
        actual: a,
        expected: b,
        operator: 'deepStrictEqual',
        stackStartFn: fn
      });
      err.actual = actual;
      err.expected = expected;
      err.operator = fn.name;
      throw err;
    }

    innerFail({
      actual: actual,
      expected: expected,
      message: message,
      operator: fn.name,
      stackStartFn: fn
    });
  }
}

function expectedException(actual, expected, msg, fn) {
  if (typeof expected !== 'function') {
    if (isRegExp(expected)) return expected.test(actual); // assert.doesNotThrow does not accept objects.

    if (arguments.length === 2) {
      throw new ERR_INVALID_ARG_TYPE('expected', ['Function', 'RegExp'], expected);
    } // Handle primitives properly.


    if (_typeof(actual) !== 'object' || actual === null) {
      var err = new AssertionError({
        actual: actual,
        expected: expected,
        message: msg,
        operator: 'deepStrictEqual',
        stackStartFn: fn
      });
      err.operator = fn.name;
      throw err;
    }

    var keys = Object.keys(expected); // Special handle errors to make sure the name and the message are compared
    // as well.

    if (expected instanceof Error) {
      keys.push('name', 'message');
    } else if (keys.length === 0) {
      throw new ERR_INVALID_ARG_VALUE('error', expected, 'may not be an empty object');
    }

    if (isDeepEqual === undefined) lazyLoadComparison();
    keys.forEach(function (key) {
      if (typeof actual[key] === 'string' && isRegExp(expected[key]) && expected[key].test(actual[key])) {
        return;
      }

      compareExceptionKey(actual, expected, key, msg, keys, fn);
    });
    return true;
  } // Guard instanceof against arrow functions as they don't have a prototype.


  if (expected.prototype !== undefined && actual instanceof expected) {
    return true;
  }

  if (Error.isPrototypeOf(expected)) {
    return false;
  }

  return expected.call({}, actual) === true;
}

function getActual(fn) {
  if (typeof fn !== 'function') {
    throw new ERR_INVALID_ARG_TYPE('fn', 'Function', fn);
  }

  try {
    fn();
  } catch (e) {
    return e;
  }

  return NO_EXCEPTION_SENTINEL;
}

function checkIsPromise(obj) {
  // Accept native ES6 promises and promises that are implemented in a similar
  // way. Do not accept thenables that use a function as `obj` and that have no
  // `catch` handler.
  // TODO: thenables are checked up until they have the correct methods,
  // but according to documentation, the `then` method should receive
  // the `fulfill` and `reject` arguments as well or it may be never resolved.
  return isPromise(obj) || obj !== null && _typeof(obj) === 'object' && typeof obj.then === 'function' && typeof obj.catch === 'function';
}

function waitForActual(promiseFn) {
  return Promise.resolve().then(function () {
    var resultPromise;

    if (typeof promiseFn === 'function') {
      // Return a rejected promise if `promiseFn` throws synchronously.
      resultPromise = promiseFn(); // Fail in case no promise is returned.

      if (!checkIsPromise(resultPromise)) {
        throw new ERR_INVALID_RETURN_VALUE('instance of Promise', 'promiseFn', resultPromise);
      }
    } else if (checkIsPromise(promiseFn)) {
      resultPromise = promiseFn;
    } else {
      throw new ERR_INVALID_ARG_TYPE('promiseFn', ['Function', 'Promise'], promiseFn);
    }

    return Promise.resolve().then(function () {
      return resultPromise;
    }).then(function () {
      return NO_EXCEPTION_SENTINEL;
    }).catch(function (e) {
      return e;
    });
  });
}

function expectsError(stackStartFn, actual, error, message) {
  if (typeof error === 'string') {
    if (arguments.length === 4) {
      throw new ERR_INVALID_ARG_TYPE('error', ['Object', 'Error', 'Function', 'RegExp'], error);
    }

    if (_typeof(actual) === 'object' && actual !== null) {
      if (actual.message === error) {
        throw new ERR_AMBIGUOUS_ARGUMENT('error/message', "The error message \"".concat(actual.message, "\" is identical to the message."));
      }
    } else if (actual === error) {
      throw new ERR_AMBIGUOUS_ARGUMENT('error/message', "The error \"".concat(actual, "\" is identical to the message."));
    }

    message = error;
    error = undefined;
  } else if (error != null && _typeof(error) !== 'object' && typeof error !== 'function') {
    throw new ERR_INVALID_ARG_TYPE('error', ['Object', 'Error', 'Function', 'RegExp'], error);
  }

  if (actual === NO_EXCEPTION_SENTINEL) {
    var details = '';

    if (error && error.name) {
      details += " (".concat(error.name, ")");
    }

    details += message ? ": ".concat(message) : '.';
    var fnType = stackStartFn.name === 'rejects' ? 'rejection' : 'exception';
    innerFail({
      actual: undefined,
      expected: error,
      operator: stackStartFn.name,
      message: "Missing expected ".concat(fnType).concat(details),
      stackStartFn: stackStartFn
    });
  }

  if (error && !expectedException(actual, error, message, stackStartFn)) {
    throw actual;
  }
}

function expectsNoError(stackStartFn, actual, error, message) {
  if (actual === NO_EXCEPTION_SENTINEL) return;

  if (typeof error === 'string') {
    message = error;
    error = undefined;
  }

  if (!error || expectedException(actual, error)) {
    var details = message ? ": ".concat(message) : '.';
    var fnType = stackStartFn.name === 'doesNotReject' ? 'rejection' : 'exception';
    innerFail({
      actual: actual,
      expected: error,
      operator: stackStartFn.name,
      message: "Got unwanted ".concat(fnType).concat(details, "\n") + "Actual message: \"".concat(actual && actual.message, "\""),
      stackStartFn: stackStartFn
    });
  }

  throw actual;
}

assert.throws = function throws(promiseFn) {
  for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
    args[_key2 - 1] = arguments[_key2];
  }

  expectsError.apply(void 0, [throws, getActual(promiseFn)].concat(args));
};

assert.rejects = function rejects(promiseFn) {
  for (var _len3 = arguments.length, args = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
    args[_key3 - 1] = arguments[_key3];
  }

  return waitForActual(promiseFn).then(function (result) {
    return expectsError.apply(void 0, [rejects, result].concat(args));
  });
};

assert.doesNotThrow = function doesNotThrow(fn) {
  for (var _len4 = arguments.length, args = new Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
    args[_key4 - 1] = arguments[_key4];
  }

  expectsNoError.apply(void 0, [doesNotThrow, getActual(fn)].concat(args));
};

assert.doesNotReject = function doesNotReject(fn) {
  for (var _len5 = arguments.length, args = new Array(_len5 > 1 ? _len5 - 1 : 0), _key5 = 1; _key5 < _len5; _key5++) {
    args[_key5 - 1] = arguments[_key5];
  }

  return waitForActual(fn).then(function (result) {
    return expectsNoError.apply(void 0, [doesNotReject, result].concat(args));
  });
};

assert.ifError = function ifError(err) {
  if (err !== null && err !== undefined) {
    var message = 'ifError got unwanted exception: ';

    if (_typeof(err) === 'object' && typeof err.message === 'string') {
      if (err.message.length === 0 && err.constructor) {
        message += err.constructor.name;
      } else {
        message += err.message;
      }
    } else {
      message += inspect(err);
    }

    var newErr = new AssertionError({
      actual: err,
      expected: null,
      operator: 'ifError',
      message: message,
      stackStartFn: ifError
    }); // Make sure we actually have a stack trace!

    var origStack = err.stack;

    if (typeof origStack === 'string') {
      // This will remove any duplicated frames from the error frames taken
      // from within `ifError` and add the original error frames to the newly
      // created ones.
      var tmp2 = origStack.split('\n');
      tmp2.shift(); // Filter all frames existing in err.stack.

      var tmp1 = newErr.stack.split('\n');

      for (var i = 0; i < tmp2.length; i++) {
        // Find the first occurrence of the frame.
        var pos = tmp1.indexOf(tmp2[i]);

        if (pos !== -1) {
          // Only keep new frames.
          tmp1 = tmp1.slice(0, pos);
          break;
        }
      }

      newErr.stack = "".concat(tmp1.join('\n'), "\n").concat(tmp2.join('\n'));
    }

    throw newErr;
  }
}; // Expose a strict only variant of assert


function strict() {
  for (var _len6 = arguments.length, args = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
    args[_key6] = arguments[_key6];
  }

  innerOk.apply(void 0, [strict, args.length].concat(args));
}

assert.strict = objectAssign(strict, assert, {
  equal: assert.strictEqual,
  deepEqual: assert.deepStrictEqual,
  notEqual: assert.notStrictEqual,
  notDeepEqual: assert.notDeepStrictEqual
});
assert.strict.strict = assert.strict;

/***/ }),

/***/ "./node_modules/assert/build/internal/assert/assertion_error.js":
/*!**********************************************************************!*\
  !*** ./node_modules/assert/build/internal/assert/assertion_error.js ***!
  \**********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/* provided dependency */ var process = __webpack_require__(/*! ./node_modules/process/browser.js */ "./node_modules/process/browser.js");
// Currently in sync with Node.js lib/internal/assert/assertion_error.js
// https://github.com/nodejs/node/commit/0817840f775032169ddd70c85ac059f18ffcc81c


function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _construct(Parent, args, Class) { if (isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var _require = __webpack_require__(/*! util/ */ "./node_modules/util/util.js"),
    inspect = _require.inspect;

var _require2 = __webpack_require__(/*! ../errors */ "./node_modules/assert/build/internal/errors.js"),
    ERR_INVALID_ARG_TYPE = _require2.codes.ERR_INVALID_ARG_TYPE; // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith


function endsWith(str, search, this_len) {
  if (this_len === undefined || this_len > str.length) {
    this_len = str.length;
  }

  return str.substring(this_len - search.length, this_len) === search;
} // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/repeat


function repeat(str, count) {
  count = Math.floor(count);
  if (str.length == 0 || count == 0) return '';
  var maxCount = str.length * count;
  count = Math.floor(Math.log(count) / Math.log(2));

  while (count) {
    str += str;
    count--;
  }

  str += str.substring(0, maxCount - str.length);
  return str;
}

var blue = '';
var green = '';
var red = '';
var white = '';
var kReadableOperator = {
  deepStrictEqual: 'Expected values to be strictly deep-equal:',
  strictEqual: 'Expected values to be strictly equal:',
  strictEqualObject: 'Expected "actual" to be reference-equal to "expected":',
  deepEqual: 'Expected values to be loosely deep-equal:',
  equal: 'Expected values to be loosely equal:',
  notDeepStrictEqual: 'Expected "actual" not to be strictly deep-equal to:',
  notStrictEqual: 'Expected "actual" to be strictly unequal to:',
  notStrictEqualObject: 'Expected "actual" not to be reference-equal to "expected":',
  notDeepEqual: 'Expected "actual" not to be loosely deep-equal to:',
  notEqual: 'Expected "actual" to be loosely unequal to:',
  notIdentical: 'Values identical but not reference-equal:'
}; // Comparing short primitives should just show === / !== instead of using the
// diff.

var kMaxShortLength = 10;

function copyError(source) {
  var keys = Object.keys(source);
  var target = Object.create(Object.getPrototypeOf(source));
  keys.forEach(function (key) {
    target[key] = source[key];
  });
  Object.defineProperty(target, 'message', {
    value: source.message
  });
  return target;
}

function inspectValue(val) {
  // The util.inspect default values could be changed. This makes sure the
  // error messages contain the necessary information nevertheless.
  return inspect(val, {
    compact: false,
    customInspect: false,
    depth: 1000,
    maxArrayLength: Infinity,
    // Assert compares only enumerable properties (with a few exceptions).
    showHidden: false,
    // Having a long line as error is better than wrapping the line for
    // comparison for now.
    // TODO(BridgeAR): `breakLength` should be limited as soon as soon as we
    // have meta information about the inspected properties (i.e., know where
    // in what line the property starts and ends).
    breakLength: Infinity,
    // Assert does not detect proxies currently.
    showProxy: false,
    sorted: true,
    // Inspect getters as we also check them when comparing entries.
    getters: true
  });
}

function createErrDiff(actual, expected, operator) {
  var other = '';
  var res = '';
  var lastPos = 0;
  var end = '';
  var skipped = false;
  var actualInspected = inspectValue(actual);
  var actualLines = actualInspected.split('\n');
  var expectedLines = inspectValue(expected).split('\n');
  var i = 0;
  var indicator = ''; // In case both values are objects explicitly mark them as not reference equal
  // for the `strictEqual` operator.

  if (operator === 'strictEqual' && _typeof(actual) === 'object' && _typeof(expected) === 'object' && actual !== null && expected !== null) {
    operator = 'strictEqualObject';
  } // If "actual" and "expected" fit on a single line and they are not strictly
  // equal, check further special handling.


  if (actualLines.length === 1 && expectedLines.length === 1 && actualLines[0] !== expectedLines[0]) {
    var inputLength = actualLines[0].length + expectedLines[0].length; // If the character length of "actual" and "expected" together is less than
    // kMaxShortLength and if neither is an object and at least one of them is
    // not `zero`, use the strict equal comparison to visualize the output.

    if (inputLength <= kMaxShortLength) {
      if ((_typeof(actual) !== 'object' || actual === null) && (_typeof(expected) !== 'object' || expected === null) && (actual !== 0 || expected !== 0)) {
        // -0 === +0
        return "".concat(kReadableOperator[operator], "\n\n") + "".concat(actualLines[0], " !== ").concat(expectedLines[0], "\n");
      }
    } else if (operator !== 'strictEqualObject') {
      // If the stderr is a tty and the input length is lower than the current
      // columns per line, add a mismatch indicator below the output. If it is
      // not a tty, use a default value of 80 characters.
      var maxLength = process.stderr && process.stderr.isTTY ? process.stderr.columns : 80;

      if (inputLength < maxLength) {
        while (actualLines[0][i] === expectedLines[0][i]) {
          i++;
        } // Ignore the first characters.


        if (i > 2) {
          // Add position indicator for the first mismatch in case it is a
          // single line and the input length is less than the column length.
          indicator = "\n  ".concat(repeat(' ', i), "^");
          i = 0;
        }
      }
    }
  } // Remove all ending lines that match (this optimizes the output for
  // readability by reducing the number of total changed lines).


  var a = actualLines[actualLines.length - 1];
  var b = expectedLines[expectedLines.length - 1];

  while (a === b) {
    if (i++ < 2) {
      end = "\n  ".concat(a).concat(end);
    } else {
      other = a;
    }

    actualLines.pop();
    expectedLines.pop();
    if (actualLines.length === 0 || expectedLines.length === 0) break;
    a = actualLines[actualLines.length - 1];
    b = expectedLines[expectedLines.length - 1];
  }

  var maxLines = Math.max(actualLines.length, expectedLines.length); // Strict equal with identical objects that are not identical by reference.
  // E.g., assert.deepStrictEqual({ a: Symbol() }, { a: Symbol() })

  if (maxLines === 0) {
    // We have to get the result again. The lines were all removed before.
    var _actualLines = actualInspected.split('\n'); // Only remove lines in case it makes sense to collapse those.
    // TODO: Accept env to always show the full error.


    if (_actualLines.length > 30) {
      _actualLines[26] = "".concat(blue, "...").concat(white);

      while (_actualLines.length > 27) {
        _actualLines.pop();
      }
    }

    return "".concat(kReadableOperator.notIdentical, "\n\n").concat(_actualLines.join('\n'), "\n");
  }

  if (i > 3) {
    end = "\n".concat(blue, "...").concat(white).concat(end);
    skipped = true;
  }

  if (other !== '') {
    end = "\n  ".concat(other).concat(end);
    other = '';
  }

  var printedLines = 0;
  var msg = kReadableOperator[operator] + "\n".concat(green, "+ actual").concat(white, " ").concat(red, "- expected").concat(white);
  var skippedMsg = " ".concat(blue, "...").concat(white, " Lines skipped");

  for (i = 0; i < maxLines; i++) {
    // Only extra expected lines exist
    var cur = i - lastPos;

    if (actualLines.length < i + 1) {
      // If the last diverging line is more than one line above and the
      // current line is at least line three, add some of the former lines and
      // also add dots to indicate skipped entries.
      if (cur > 1 && i > 2) {
        if (cur > 4) {
          res += "\n".concat(blue, "...").concat(white);
          skipped = true;
        } else if (cur > 3) {
          res += "\n  ".concat(expectedLines[i - 2]);
          printedLines++;
        }

        res += "\n  ".concat(expectedLines[i - 1]);
        printedLines++;
      } // Mark the current line as the last diverging one.


      lastPos = i; // Add the expected line to the cache.

      other += "\n".concat(red, "-").concat(white, " ").concat(expectedLines[i]);
      printedLines++; // Only extra actual lines exist
    } else if (expectedLines.length < i + 1) {
      // If the last diverging line is more than one line above and the
      // current line is at least line three, add some of the former lines and
      // also add dots to indicate skipped entries.
      if (cur > 1 && i > 2) {
        if (cur > 4) {
          res += "\n".concat(blue, "...").concat(white);
          skipped = true;
        } else if (cur > 3) {
          res += "\n  ".concat(actualLines[i - 2]);
          printedLines++;
        }

        res += "\n  ".concat(actualLines[i - 1]);
        printedLines++;
      } // Mark the current line as the last diverging one.


      lastPos = i; // Add the actual line to the result.

      res += "\n".concat(green, "+").concat(white, " ").concat(actualLines[i]);
      printedLines++; // Lines diverge
    } else {
      var expectedLine = expectedLines[i];
      var actualLine = actualLines[i]; // If the lines diverge, specifically check for lines that only diverge by
      // a trailing comma. In that case it is actually identical and we should
      // mark it as such.

      var divergingLines = actualLine !== expectedLine && (!endsWith(actualLine, ',') || actualLine.slice(0, -1) !== expectedLine); // If the expected line has a trailing comma but is otherwise identical,
      // add a comma at the end of the actual line. Otherwise the output could
      // look weird as in:
      //
      //   [
      //     1         // No comma at the end!
      // +   2
      //   ]
      //

      if (divergingLines && endsWith(expectedLine, ',') && expectedLine.slice(0, -1) === actualLine) {
        divergingLines = false;
        actualLine += ',';
      }

      if (divergingLines) {
        // If the last diverging line is more than one line above and the
        // current line is at least line three, add some of the former lines and
        // also add dots to indicate skipped entries.
        if (cur > 1 && i > 2) {
          if (cur > 4) {
            res += "\n".concat(blue, "...").concat(white);
            skipped = true;
          } else if (cur > 3) {
            res += "\n  ".concat(actualLines[i - 2]);
            printedLines++;
          }

          res += "\n  ".concat(actualLines[i - 1]);
          printedLines++;
        } // Mark the current line as the last diverging one.


        lastPos = i; // Add the actual line to the result and cache the expected diverging
        // line so consecutive diverging lines show up as +++--- and not +-+-+-.

        res += "\n".concat(green, "+").concat(white, " ").concat(actualLine);
        other += "\n".concat(red, "-").concat(white, " ").concat(expectedLine);
        printedLines += 2; // Lines are identical
      } else {
        // Add all cached information to the result before adding other things
        // and reset the cache.
        res += other;
        other = ''; // If the last diverging line is exactly one line above or if it is the
        // very first line, add the line to the result.

        if (cur === 1 || i === 0) {
          res += "\n  ".concat(actualLine);
          printedLines++;
        }
      }
    } // Inspected object to big (Show ~20 rows max)


    if (printedLines > 20 && i < maxLines - 2) {
      return "".concat(msg).concat(skippedMsg, "\n").concat(res, "\n").concat(blue, "...").concat(white).concat(other, "\n") + "".concat(blue, "...").concat(white);
    }
  }

  return "".concat(msg).concat(skipped ? skippedMsg : '', "\n").concat(res).concat(other).concat(end).concat(indicator);
}

var AssertionError =
/*#__PURE__*/
function (_Error) {
  _inherits(AssertionError, _Error);

  function AssertionError(options) {
    var _this;

    _classCallCheck(this, AssertionError);

    if (_typeof(options) !== 'object' || options === null) {
      throw new ERR_INVALID_ARG_TYPE('options', 'Object', options);
    }

    var message = options.message,
        operator = options.operator,
        stackStartFn = options.stackStartFn;
    var actual = options.actual,
        expected = options.expected;
    var limit = Error.stackTraceLimit;
    Error.stackTraceLimit = 0;

    if (message != null) {
      _this = _possibleConstructorReturn(this, _getPrototypeOf(AssertionError).call(this, String(message)));
    } else {
      if (process.stderr && process.stderr.isTTY) {
        // Reset on each call to make sure we handle dynamically set environment
        // variables correct.
        if (process.stderr && process.stderr.getColorDepth && process.stderr.getColorDepth() !== 1) {
          blue = "\x1B[34m";
          green = "\x1B[32m";
          white = "\x1B[39m";
          red = "\x1B[31m";
        } else {
          blue = '';
          green = '';
          white = '';
          red = '';
        }
      } // Prevent the error stack from being visible by duplicating the error
      // in a very close way to the original in case both sides are actually
      // instances of Error.


      if (_typeof(actual) === 'object' && actual !== null && _typeof(expected) === 'object' && expected !== null && 'stack' in actual && actual instanceof Error && 'stack' in expected && expected instanceof Error) {
        actual = copyError(actual);
        expected = copyError(expected);
      }

      if (operator === 'deepStrictEqual' || operator === 'strictEqual') {
        _this = _possibleConstructorReturn(this, _getPrototypeOf(AssertionError).call(this, createErrDiff(actual, expected, operator)));
      } else if (operator === 'notDeepStrictEqual' || operator === 'notStrictEqual') {
        // In case the objects are equal but the operator requires unequal, show
        // the first object and say A equals B
        var base = kReadableOperator[operator];
        var res = inspectValue(actual).split('\n'); // In case "actual" is an object, it should not be reference equal.

        if (operator === 'notStrictEqual' && _typeof(actual) === 'object' && actual !== null) {
          base = kReadableOperator.notStrictEqualObject;
        } // Only remove lines in case it makes sense to collapse those.
        // TODO: Accept env to always show the full error.


        if (res.length > 30) {
          res[26] = "".concat(blue, "...").concat(white);

          while (res.length > 27) {
            res.pop();
          }
        } // Only print a single input.


        if (res.length === 1) {
          _this = _possibleConstructorReturn(this, _getPrototypeOf(AssertionError).call(this, "".concat(base, " ").concat(res[0])));
        } else {
          _this = _possibleConstructorReturn(this, _getPrototypeOf(AssertionError).call(this, "".concat(base, "\n\n").concat(res.join('\n'), "\n")));
        }
      } else {
        var _res = inspectValue(actual);

        var other = '';
        var knownOperators = kReadableOperator[operator];

        if (operator === 'notDeepEqual' || operator === 'notEqual') {
          _res = "".concat(kReadableOperator[operator], "\n\n").concat(_res);

          if (_res.length > 1024) {
            _res = "".concat(_res.slice(0, 1021), "...");
          }
        } else {
          other = "".concat(inspectValue(expected));

          if (_res.length > 512) {
            _res = "".concat(_res.slice(0, 509), "...");
          }

          if (other.length > 512) {
            other = "".concat(other.slice(0, 509), "...");
          }

          if (operator === 'deepEqual' || operator === 'equal') {
            _res = "".concat(knownOperators, "\n\n").concat(_res, "\n\nshould equal\n\n");
          } else {
            other = " ".concat(operator, " ").concat(other);
          }
        }

        _this = _possibleConstructorReturn(this, _getPrototypeOf(AssertionError).call(this, "".concat(_res).concat(other)));
      }
    }

    Error.stackTraceLimit = limit;
    _this.generatedMessage = !message;
    Object.defineProperty(_assertThisInitialized(_this), 'name', {
      value: 'AssertionError [ERR_ASSERTION]',
      enumerable: false,
      writable: true,
      configurable: true
    });
    _this.code = 'ERR_ASSERTION';
    _this.actual = actual;
    _this.expected = expected;
    _this.operator = operator;

    if (Error.captureStackTrace) {
      // eslint-disable-next-line no-restricted-syntax
      Error.captureStackTrace(_assertThisInitialized(_this), stackStartFn);
    } // Create error message including the error code in the name.


    _this.stack; // Reset the name.

    _this.name = 'AssertionError';
    return _possibleConstructorReturn(_this);
  }

  _createClass(AssertionError, [{
    key: "toString",
    value: function toString() {
      return "".concat(this.name, " [").concat(this.code, "]: ").concat(this.message);
    }
  }, {
    key: inspect.custom,
    value: function value(recurseTimes, ctx) {
      // This limits the `actual` and `expected` property default inspection to
      // the minimum depth. Otherwise those values would be too verbose compared
      // to the actual error message which contains a combined view of these two
      // input values.
      return inspect(this, _objectSpread({}, ctx, {
        customInspect: false,
        depth: 0
      }));
    }
  }]);

  return AssertionError;
}(_wrapNativeSuper(Error));

module.exports = AssertionError;

/***/ }),

/***/ "./node_modules/assert/build/internal/errors.js":
/*!******************************************************!*\
  !*** ./node_modules/assert/build/internal/errors.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
// Currently in sync with Node.js lib/internal/errors.js
// https://github.com/nodejs/node/commit/3b044962c48fe313905877a96b5d0894a5404f6f

/* eslint node-core/documented-errors: "error" */

/* eslint node-core/alphabetize-errors: "error" */

/* eslint node-core/prefer-util-format-errors: "error" */
 // The whole point behind this internal module is to allow Node.js to no
// longer be forced to treat every error message change as a semver-major
// change. The NodeError classes here all expose a `code` property whose
// value statically and permanently identifies the error. While the error
// message may change, the code should not.

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var codes = {}; // Lazy loaded

var assert;
var util;

function createErrorType(code, message, Base) {
  if (!Base) {
    Base = Error;
  }

  function getMessage(arg1, arg2, arg3) {
    if (typeof message === 'string') {
      return message;
    } else {
      return message(arg1, arg2, arg3);
    }
  }

  var NodeError =
  /*#__PURE__*/
  function (_Base) {
    _inherits(NodeError, _Base);

    function NodeError(arg1, arg2, arg3) {
      var _this;

      _classCallCheck(this, NodeError);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(NodeError).call(this, getMessage(arg1, arg2, arg3)));
      _this.code = code;
      return _this;
    }

    return NodeError;
  }(Base);

  codes[code] = NodeError;
} // https://github.com/nodejs/node/blob/v10.8.0/lib/internal/errors.js


function oneOf(expected, thing) {
  if (Array.isArray(expected)) {
    var len = expected.length;
    expected = expected.map(function (i) {
      return String(i);
    });

    if (len > 2) {
      return "one of ".concat(thing, " ").concat(expected.slice(0, len - 1).join(', '), ", or ") + expected[len - 1];
    } else if (len === 2) {
      return "one of ".concat(thing, " ").concat(expected[0], " or ").concat(expected[1]);
    } else {
      return "of ".concat(thing, " ").concat(expected[0]);
    }
  } else {
    return "of ".concat(thing, " ").concat(String(expected));
  }
} // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/startsWith


function startsWith(str, search, pos) {
  return str.substr(!pos || pos < 0 ? 0 : +pos, search.length) === search;
} // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith


function endsWith(str, search, this_len) {
  if (this_len === undefined || this_len > str.length) {
    this_len = str.length;
  }

  return str.substring(this_len - search.length, this_len) === search;
} // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes


function includes(str, search, start) {
  if (typeof start !== 'number') {
    start = 0;
  }

  if (start + search.length > str.length) {
    return false;
  } else {
    return str.indexOf(search, start) !== -1;
  }
}

createErrorType('ERR_AMBIGUOUS_ARGUMENT', 'The "%s" argument is ambiguous. %s', TypeError);
createErrorType('ERR_INVALID_ARG_TYPE', function (name, expected, actual) {
  if (assert === undefined) assert = __webpack_require__(/*! ../assert */ "./node_modules/assert/build/assert.js");
  assert(typeof name === 'string', "'name' must be a string"); // determiner: 'must be' or 'must not be'

  var determiner;

  if (typeof expected === 'string' && startsWith(expected, 'not ')) {
    determiner = 'must not be';
    expected = expected.replace(/^not /, '');
  } else {
    determiner = 'must be';
  }

  var msg;

  if (endsWith(name, ' argument')) {
    // For cases like 'first argument'
    msg = "The ".concat(name, " ").concat(determiner, " ").concat(oneOf(expected, 'type'));
  } else {
    var type = includes(name, '.') ? 'property' : 'argument';
    msg = "The \"".concat(name, "\" ").concat(type, " ").concat(determiner, " ").concat(oneOf(expected, 'type'));
  } // TODO(BridgeAR): Improve the output by showing `null` and similar.


  msg += ". Received type ".concat(_typeof(actual));
  return msg;
}, TypeError);
createErrorType('ERR_INVALID_ARG_VALUE', function (name, value) {
  var reason = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'is invalid';
  if (util === undefined) util = __webpack_require__(/*! util/ */ "./node_modules/util/util.js");
  var inspected = util.inspect(value);

  if (inspected.length > 128) {
    inspected = "".concat(inspected.slice(0, 128), "...");
  }

  return "The argument '".concat(name, "' ").concat(reason, ". Received ").concat(inspected);
}, TypeError, RangeError);
createErrorType('ERR_INVALID_RETURN_VALUE', function (input, name, value) {
  var type;

  if (value && value.constructor && value.constructor.name) {
    type = "instance of ".concat(value.constructor.name);
  } else {
    type = "type ".concat(_typeof(value));
  }

  return "Expected ".concat(input, " to be returned from the \"").concat(name, "\"") + " function but got ".concat(type, ".");
}, TypeError);
createErrorType('ERR_MISSING_ARGS', function () {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  if (assert === undefined) assert = __webpack_require__(/*! ../assert */ "./node_modules/assert/build/assert.js");
  assert(args.length > 0, 'At least one arg needs to be specified');
  var msg = 'The ';
  var len = args.length;
  args = args.map(function (a) {
    return "\"".concat(a, "\"");
  });

  switch (len) {
    case 1:
      msg += "".concat(args[0], " argument");
      break;

    case 2:
      msg += "".concat(args[0], " and ").concat(args[1], " arguments");
      break;

    default:
      msg += args.slice(0, len - 1).join(', ');
      msg += ", and ".concat(args[len - 1], " arguments");
      break;
  }

  return "".concat(msg, " must be specified");
}, TypeError);
module.exports.codes = codes;

/***/ }),

/***/ "./node_modules/assert/build/internal/util/comparisons.js":
/*!****************************************************************!*\
  !*** ./node_modules/assert/build/internal/util/comparisons.js ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
// Currently in sync with Node.js lib/internal/util/comparisons.js
// https://github.com/nodejs/node/commit/112cc7c27551254aa2b17098fb774867f05ed0d9


function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var regexFlagsSupported = /a/g.flags !== undefined;

var arrayFromSet = function arrayFromSet(set) {
  var array = [];
  set.forEach(function (value) {
    return array.push(value);
  });
  return array;
};

var arrayFromMap = function arrayFromMap(map) {
  var array = [];
  map.forEach(function (value, key) {
    return array.push([key, value]);
  });
  return array;
};

var objectIs = Object.is ? Object.is : __webpack_require__(/*! object-is */ "./node_modules/object-is/index.js");
var objectGetOwnPropertySymbols = Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols : function () {
  return [];
};
var numberIsNaN = Number.isNaN ? Number.isNaN : __webpack_require__(/*! is-nan */ "./node_modules/is-nan/index.js");

function uncurryThis(f) {
  return f.call.bind(f);
}

var hasOwnProperty = uncurryThis(Object.prototype.hasOwnProperty);
var propertyIsEnumerable = uncurryThis(Object.prototype.propertyIsEnumerable);
var objectToString = uncurryThis(Object.prototype.toString);

var _require$types = (__webpack_require__(/*! util/ */ "./node_modules/util/util.js").types),
    isAnyArrayBuffer = _require$types.isAnyArrayBuffer,
    isArrayBufferView = _require$types.isArrayBufferView,
    isDate = _require$types.isDate,
    isMap = _require$types.isMap,
    isRegExp = _require$types.isRegExp,
    isSet = _require$types.isSet,
    isNativeError = _require$types.isNativeError,
    isBoxedPrimitive = _require$types.isBoxedPrimitive,
    isNumberObject = _require$types.isNumberObject,
    isStringObject = _require$types.isStringObject,
    isBooleanObject = _require$types.isBooleanObject,
    isBigIntObject = _require$types.isBigIntObject,
    isSymbolObject = _require$types.isSymbolObject,
    isFloat32Array = _require$types.isFloat32Array,
    isFloat64Array = _require$types.isFloat64Array;

function isNonIndex(key) {
  if (key.length === 0 || key.length > 10) return true;

  for (var i = 0; i < key.length; i++) {
    var code = key.charCodeAt(i);
    if (code < 48 || code > 57) return true;
  } // The maximum size for an array is 2 ** 32 -1.


  return key.length === 10 && key >= Math.pow(2, 32);
}

function getOwnNonIndexProperties(value) {
  return Object.keys(value).filter(isNonIndex).concat(objectGetOwnPropertySymbols(value).filter(Object.prototype.propertyIsEnumerable.bind(value)));
} // Taken from https://github.com/feross/buffer/blob/680e9e5e488f22aac27599a57dc844a6315928dd/index.js
// original notice:

/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */


function compare(a, b) {
  if (a === b) {
    return 0;
  }

  var x = a.length;
  var y = b.length;

  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
    if (a[i] !== b[i]) {
      x = a[i];
      y = b[i];
      break;
    }
  }

  if (x < y) {
    return -1;
  }

  if (y < x) {
    return 1;
  }

  return 0;
}

var ONLY_ENUMERABLE = undefined;
var kStrict = true;
var kLoose = false;
var kNoIterator = 0;
var kIsArray = 1;
var kIsSet = 2;
var kIsMap = 3; // Check if they have the same source and flags

function areSimilarRegExps(a, b) {
  return regexFlagsSupported ? a.source === b.source && a.flags === b.flags : RegExp.prototype.toString.call(a) === RegExp.prototype.toString.call(b);
}

function areSimilarFloatArrays(a, b) {
  if (a.byteLength !== b.byteLength) {
    return false;
  }

  for (var offset = 0; offset < a.byteLength; offset++) {
    if (a[offset] !== b[offset]) {
      return false;
    }
  }

  return true;
}

function areSimilarTypedArrays(a, b) {
  if (a.byteLength !== b.byteLength) {
    return false;
  }

  return compare(new Uint8Array(a.buffer, a.byteOffset, a.byteLength), new Uint8Array(b.buffer, b.byteOffset, b.byteLength)) === 0;
}

function areEqualArrayBuffers(buf1, buf2) {
  return buf1.byteLength === buf2.byteLength && compare(new Uint8Array(buf1), new Uint8Array(buf2)) === 0;
}

function isEqualBoxedPrimitive(val1, val2) {
  if (isNumberObject(val1)) {
    return isNumberObject(val2) && objectIs(Number.prototype.valueOf.call(val1), Number.prototype.valueOf.call(val2));
  }

  if (isStringObject(val1)) {
    return isStringObject(val2) && String.prototype.valueOf.call(val1) === String.prototype.valueOf.call(val2);
  }

  if (isBooleanObject(val1)) {
    return isBooleanObject(val2) && Boolean.prototype.valueOf.call(val1) === Boolean.prototype.valueOf.call(val2);
  }

  if (isBigIntObject(val1)) {
    return isBigIntObject(val2) && BigInt.prototype.valueOf.call(val1) === BigInt.prototype.valueOf.call(val2);
  }

  return isSymbolObject(val2) && Symbol.prototype.valueOf.call(val1) === Symbol.prototype.valueOf.call(val2);
} // Notes: Type tags are historical [[Class]] properties that can be set by
// FunctionTemplate::SetClassName() in C++ or Symbol.toStringTag in JS
// and retrieved using Object.prototype.toString.call(obj) in JS
// See https://tc39.github.io/ecma262/#sec-object.prototype.tostring
// for a list of tags pre-defined in the spec.
// There are some unspecified tags in the wild too (e.g. typed array tags).
// Since tags can be altered, they only serve fast failures
//
// Typed arrays and buffers are checked by comparing the content in their
// underlying ArrayBuffer. This optimization requires that it's
// reasonable to interpret their underlying memory in the same way,
// which is checked by comparing their type tags.
// (e.g. a Uint8Array and a Uint16Array with the same memory content
// could still be different because they will be interpreted differently).
//
// For strict comparison, objects should have
// a) The same built-in type tags
// b) The same prototypes.


function innerDeepEqual(val1, val2, strict, memos) {
  // All identical values are equivalent, as determined by ===.
  if (val1 === val2) {
    if (val1 !== 0) return true;
    return strict ? objectIs(val1, val2) : true;
  } // Check more closely if val1 and val2 are equal.


  if (strict) {
    if (_typeof(val1) !== 'object') {
      return typeof val1 === 'number' && numberIsNaN(val1) && numberIsNaN(val2);
    }

    if (_typeof(val2) !== 'object' || val1 === null || val2 === null) {
      return false;
    }

    if (Object.getPrototypeOf(val1) !== Object.getPrototypeOf(val2)) {
      return false;
    }
  } else {
    if (val1 === null || _typeof(val1) !== 'object') {
      if (val2 === null || _typeof(val2) !== 'object') {
        // eslint-disable-next-line eqeqeq
        return val1 == val2;
      }

      return false;
    }

    if (val2 === null || _typeof(val2) !== 'object') {
      return false;
    }
  }

  var val1Tag = objectToString(val1);
  var val2Tag = objectToString(val2);

  if (val1Tag !== val2Tag) {
    return false;
  }

  if (Array.isArray(val1)) {
    // Check for sparse arrays and general fast path
    if (val1.length !== val2.length) {
      return false;
    }

    var keys1 = getOwnNonIndexProperties(val1, ONLY_ENUMERABLE);
    var keys2 = getOwnNonIndexProperties(val2, ONLY_ENUMERABLE);

    if (keys1.length !== keys2.length) {
      return false;
    }

    return keyCheck(val1, val2, strict, memos, kIsArray, keys1);
  } // [browserify] This triggers on certain types in IE (Map/Set) so we don't
  // wan't to early return out of the rest of the checks. However we can check
  // if the second value is one of these values and the first isn't.


  if (val1Tag === '[object Object]') {
    // return keyCheck(val1, val2, strict, memos, kNoIterator);
    if (!isMap(val1) && isMap(val2) || !isSet(val1) && isSet(val2)) {
      return false;
    }
  }

  if (isDate(val1)) {
    if (!isDate(val2) || Date.prototype.getTime.call(val1) !== Date.prototype.getTime.call(val2)) {
      return false;
    }
  } else if (isRegExp(val1)) {
    if (!isRegExp(val2) || !areSimilarRegExps(val1, val2)) {
      return false;
    }
  } else if (isNativeError(val1) || val1 instanceof Error) {
    // Do not compare the stack as it might differ even though the error itself
    // is otherwise identical.
    if (val1.message !== val2.message || val1.name !== val2.name) {
      return false;
    }
  } else if (isArrayBufferView(val1)) {
    if (!strict && (isFloat32Array(val1) || isFloat64Array(val1))) {
      if (!areSimilarFloatArrays(val1, val2)) {
        return false;
      }
    } else if (!areSimilarTypedArrays(val1, val2)) {
      return false;
    } // Buffer.compare returns true, so val1.length === val2.length. If they both
    // only contain numeric keys, we don't need to exam further than checking
    // the symbols.


    var _keys = getOwnNonIndexProperties(val1, ONLY_ENUMERABLE);

    var _keys2 = getOwnNonIndexProperties(val2, ONLY_ENUMERABLE);

    if (_keys.length !== _keys2.length) {
      return false;
    }

    return keyCheck(val1, val2, strict, memos, kNoIterator, _keys);
  } else if (isSet(val1)) {
    if (!isSet(val2) || val1.size !== val2.size) {
      return false;
    }

    return keyCheck(val1, val2, strict, memos, kIsSet);
  } else if (isMap(val1)) {
    if (!isMap(val2) || val1.size !== val2.size) {
      return false;
    }

    return keyCheck(val1, val2, strict, memos, kIsMap);
  } else if (isAnyArrayBuffer(val1)) {
    if (!areEqualArrayBuffers(val1, val2)) {
      return false;
    }
  } else if (isBoxedPrimitive(val1) && !isEqualBoxedPrimitive(val1, val2)) {
    return false;
  }

  return keyCheck(val1, val2, strict, memos, kNoIterator);
}

function getEnumerables(val, keys) {
  return keys.filter(function (k) {
    return propertyIsEnumerable(val, k);
  });
}

function keyCheck(val1, val2, strict, memos, iterationType, aKeys) {
  // For all remaining Object pairs, including Array, objects and Maps,
  // equivalence is determined by having:
  // a) The same number of owned enumerable properties
  // b) The same set of keys/indexes (although not necessarily the same order)
  // c) Equivalent values for every corresponding key/index
  // d) For Sets and Maps, equal contents
  // Note: this accounts for both named and indexed properties on Arrays.
  if (arguments.length === 5) {
    aKeys = Object.keys(val1);
    var bKeys = Object.keys(val2); // The pair must have the same number of owned properties.

    if (aKeys.length !== bKeys.length) {
      return false;
    }
  } // Cheap key test


  var i = 0;

  for (; i < aKeys.length; i++) {
    if (!hasOwnProperty(val2, aKeys[i])) {
      return false;
    }
  }

  if (strict && arguments.length === 5) {
    var symbolKeysA = objectGetOwnPropertySymbols(val1);

    if (symbolKeysA.length !== 0) {
      var count = 0;

      for (i = 0; i < symbolKeysA.length; i++) {
        var key = symbolKeysA[i];

        if (propertyIsEnumerable(val1, key)) {
          if (!propertyIsEnumerable(val2, key)) {
            return false;
          }

          aKeys.push(key);
          count++;
        } else if (propertyIsEnumerable(val2, key)) {
          return false;
        }
      }

      var symbolKeysB = objectGetOwnPropertySymbols(val2);

      if (symbolKeysA.length !== symbolKeysB.length && getEnumerables(val2, symbolKeysB).length !== count) {
        return false;
      }
    } else {
      var _symbolKeysB = objectGetOwnPropertySymbols(val2);

      if (_symbolKeysB.length !== 0 && getEnumerables(val2, _symbolKeysB).length !== 0) {
        return false;
      }
    }
  }

  if (aKeys.length === 0 && (iterationType === kNoIterator || iterationType === kIsArray && val1.length === 0 || val1.size === 0)) {
    return true;
  } // Use memos to handle cycles.


  if (memos === undefined) {
    memos = {
      val1: new Map(),
      val2: new Map(),
      position: 0
    };
  } else {
    // We prevent up to two map.has(x) calls by directly retrieving the value
    // and checking for undefined. The map can only contain numbers, so it is
    // safe to check for undefined only.
    var val2MemoA = memos.val1.get(val1);

    if (val2MemoA !== undefined) {
      var val2MemoB = memos.val2.get(val2);

      if (val2MemoB !== undefined) {
        return val2MemoA === val2MemoB;
      }
    }

    memos.position++;
  }

  memos.val1.set(val1, memos.position);
  memos.val2.set(val2, memos.position);
  var areEq = objEquiv(val1, val2, strict, aKeys, memos, iterationType);
  memos.val1.delete(val1);
  memos.val2.delete(val2);
  return areEq;
}

function setHasEqualElement(set, val1, strict, memo) {
  // Go looking.
  var setValues = arrayFromSet(set);

  for (var i = 0; i < setValues.length; i++) {
    var val2 = setValues[i];

    if (innerDeepEqual(val1, val2, strict, memo)) {
      // Remove the matching element to make sure we do not check that again.
      set.delete(val2);
      return true;
    }
  }

  return false;
} // See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness#Loose_equality_using
// Sadly it is not possible to detect corresponding values properly in case the
// type is a string, number, bigint or boolean. The reason is that those values
// can match lots of different string values (e.g., 1n == '+00001').


function findLooseMatchingPrimitives(prim) {
  switch (_typeof(prim)) {
    case 'undefined':
      return null;

    case 'object':
      // Only pass in null as object!
      return undefined;

    case 'symbol':
      return false;

    case 'string':
      prim = +prim;
    // Loose equal entries exist only if the string is possible to convert to
    // a regular number and not NaN.
    // Fall through

    case 'number':
      if (numberIsNaN(prim)) {
        return false;
      }

  }

  return true;
}

function setMightHaveLoosePrim(a, b, prim) {
  var altValue = findLooseMatchingPrimitives(prim);
  if (altValue != null) return altValue;
  return b.has(altValue) && !a.has(altValue);
}

function mapMightHaveLoosePrim(a, b, prim, item, memo) {
  var altValue = findLooseMatchingPrimitives(prim);

  if (altValue != null) {
    return altValue;
  }

  var curB = b.get(altValue);

  if (curB === undefined && !b.has(altValue) || !innerDeepEqual(item, curB, false, memo)) {
    return false;
  }

  return !a.has(altValue) && innerDeepEqual(item, curB, false, memo);
}

function setEquiv(a, b, strict, memo) {
  // This is a lazily initiated Set of entries which have to be compared
  // pairwise.
  var set = null;
  var aValues = arrayFromSet(a);

  for (var i = 0; i < aValues.length; i++) {
    var val = aValues[i]; // Note: Checking for the objects first improves the performance for object
    // heavy sets but it is a minor slow down for primitives. As they are fast
    // to check this improves the worst case scenario instead.

    if (_typeof(val) === 'object' && val !== null) {
      if (set === null) {
        set = new Set();
      } // If the specified value doesn't exist in the second set its an not null
      // object (or non strict only: a not matching primitive) we'll need to go
      // hunting for something thats deep-(strict-)equal to it. To make this
      // O(n log n) complexity we have to copy these values in a new set first.


      set.add(val);
    } else if (!b.has(val)) {
      if (strict) return false; // Fast path to detect missing string, symbol, undefined and null values.

      if (!setMightHaveLoosePrim(a, b, val)) {
        return false;
      }

      if (set === null) {
        set = new Set();
      }

      set.add(val);
    }
  }

  if (set !== null) {
    var bValues = arrayFromSet(b);

    for (var _i = 0; _i < bValues.length; _i++) {
      var _val = bValues[_i]; // We have to check if a primitive value is already
      // matching and only if it's not, go hunting for it.

      if (_typeof(_val) === 'object' && _val !== null) {
        if (!setHasEqualElement(set, _val, strict, memo)) return false;
      } else if (!strict && !a.has(_val) && !setHasEqualElement(set, _val, strict, memo)) {
        return false;
      }
    }

    return set.size === 0;
  }

  return true;
}

function mapHasEqualEntry(set, map, key1, item1, strict, memo) {
  // To be able to handle cases like:
  //   Map([[{}, 'a'], [{}, 'b']]) vs Map([[{}, 'b'], [{}, 'a']])
  // ... we need to consider *all* matching keys, not just the first we find.
  var setValues = arrayFromSet(set);

  for (var i = 0; i < setValues.length; i++) {
    var key2 = setValues[i];

    if (innerDeepEqual(key1, key2, strict, memo) && innerDeepEqual(item1, map.get(key2), strict, memo)) {
      set.delete(key2);
      return true;
    }
  }

  return false;
}

function mapEquiv(a, b, strict, memo) {
  var set = null;
  var aEntries = arrayFromMap(a);

  for (var i = 0; i < aEntries.length; i++) {
    var _aEntries$i = _slicedToArray(aEntries[i], 2),
        key = _aEntries$i[0],
        item1 = _aEntries$i[1];

    if (_typeof(key) === 'object' && key !== null) {
      if (set === null) {
        set = new Set();
      }

      set.add(key);
    } else {
      // By directly retrieving the value we prevent another b.has(key) check in
      // almost all possible cases.
      var item2 = b.get(key);

      if (item2 === undefined && !b.has(key) || !innerDeepEqual(item1, item2, strict, memo)) {
        if (strict) return false; // Fast path to detect missing string, symbol, undefined and null
        // keys.

        if (!mapMightHaveLoosePrim(a, b, key, item1, memo)) return false;

        if (set === null) {
          set = new Set();
        }

        set.add(key);
      }
    }
  }

  if (set !== null) {
    var bEntries = arrayFromMap(b);

    for (var _i2 = 0; _i2 < bEntries.length; _i2++) {
      var _bEntries$_i = _slicedToArray(bEntries[_i2], 2),
          key = _bEntries$_i[0],
          item = _bEntries$_i[1];

      if (_typeof(key) === 'object' && key !== null) {
        if (!mapHasEqualEntry(set, a, key, item, strict, memo)) return false;
      } else if (!strict && (!a.has(key) || !innerDeepEqual(a.get(key), item, false, memo)) && !mapHasEqualEntry(set, a, key, item, false, memo)) {
        return false;
      }
    }

    return set.size === 0;
  }

  return true;
}

function objEquiv(a, b, strict, keys, memos, iterationType) {
  // Sets and maps don't have their entries accessible via normal object
  // properties.
  var i = 0;

  if (iterationType === kIsSet) {
    if (!setEquiv(a, b, strict, memos)) {
      return false;
    }
  } else if (iterationType === kIsMap) {
    if (!mapEquiv(a, b, strict, memos)) {
      return false;
    }
  } else if (iterationType === kIsArray) {
    for (; i < a.length; i++) {
      if (hasOwnProperty(a, i)) {
        if (!hasOwnProperty(b, i) || !innerDeepEqual(a[i], b[i], strict, memos)) {
          return false;
        }
      } else if (hasOwnProperty(b, i)) {
        return false;
      } else {
        // Array is sparse.
        var keysA = Object.keys(a);

        for (; i < keysA.length; i++) {
          var key = keysA[i];

          if (!hasOwnProperty(b, key) || !innerDeepEqual(a[key], b[key], strict, memos)) {
            return false;
          }
        }

        if (keysA.length !== Object.keys(b).length) {
          return false;
        }

        return true;
      }
    }
  } // The pair must have equivalent values for every corresponding key.
  // Possibly expensive deep test:


  for (i = 0; i < keys.length; i++) {
    var _key = keys[i];

    if (!innerDeepEqual(a[_key], b[_key], strict, memos)) {
      return false;
    }
  }

  return true;
}

function isDeepEqual(val1, val2) {
  return innerDeepEqual(val1, val2, kLoose);
}

function isDeepStrictEqual(val1, val2) {
  return innerDeepEqual(val1, val2, kStrict);
}

module.exports = {
  isDeepEqual: isDeepEqual,
  isDeepStrictEqual: isDeepStrictEqual
};

/***/ }),

/***/ "./node_modules/call-bind/callBound.js":
/*!*********************************************!*\
  !*** ./node_modules/call-bind/callBound.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var GetIntrinsic = __webpack_require__(/*! get-intrinsic */ "./node_modules/get-intrinsic/index.js");

var callBind = __webpack_require__(/*! ./ */ "./node_modules/call-bind/index.js");

var $indexOf = callBind(GetIntrinsic('String.prototype.indexOf'));

module.exports = function callBoundIntrinsic(name, allowMissing) {
	var intrinsic = GetIntrinsic(name, !!allowMissing);
	if (typeof intrinsic === 'function' && $indexOf(name, '.prototype.') > -1) {
		return callBind(intrinsic);
	}
	return intrinsic;
};


/***/ }),

/***/ "./node_modules/call-bind/index.js":
/*!*****************************************!*\
  !*** ./node_modules/call-bind/index.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var bind = __webpack_require__(/*! function-bind */ "./node_modules/function-bind/index.js");
var GetIntrinsic = __webpack_require__(/*! get-intrinsic */ "./node_modules/get-intrinsic/index.js");

var $apply = GetIntrinsic('%Function.prototype.apply%');
var $call = GetIntrinsic('%Function.prototype.call%');
var $reflectApply = GetIntrinsic('%Reflect.apply%', true) || bind.call($call, $apply);

var $gOPD = GetIntrinsic('%Object.getOwnPropertyDescriptor%', true);
var $defineProperty = GetIntrinsic('%Object.defineProperty%', true);
var $max = GetIntrinsic('%Math.max%');

if ($defineProperty) {
	try {
		$defineProperty({}, 'a', { value: 1 });
	} catch (e) {
		// IE 8 has a broken defineProperty
		$defineProperty = null;
	}
}

module.exports = function callBind(originalFunction) {
	var func = $reflectApply(bind, $call, arguments);
	if ($gOPD && $defineProperty) {
		var desc = $gOPD(func, 'length');
		if (desc.configurable) {
			// original length, plus the receiver, minus any additional arguments (after the receiver)
			$defineProperty(
				func,
				'length',
				{ value: 1 + $max(0, originalFunction.length - (arguments.length - 1)) }
			);
		}
	}
	return func;
};

var applyBind = function applyBind() {
	return $reflectApply(bind, $apply, arguments);
};

if ($defineProperty) {
	$defineProperty(module.exports, 'apply', { value: applyBind });
} else {
	module.exports.apply = applyBind;
}


/***/ }),

/***/ "./node_modules/console-browserify/index.js":
/*!**************************************************!*\
  !*** ./node_modules/console-browserify/index.js ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/*global window, global*/
var util = __webpack_require__(/*! util */ "./node_modules/util/util.js")
var assert = __webpack_require__(/*! assert */ "./node_modules/assert/build/assert.js")
function now() { return new Date().getTime() }

var slice = Array.prototype.slice
var console
var times = {}

if (typeof __webpack_require__.g !== "undefined" && __webpack_require__.g.console) {
    console = __webpack_require__.g.console
} else if (typeof window !== "undefined" && window.console) {
    console = window.console
} else {
    console = {}
}

var functions = [
    [log, "log"],
    [info, "info"],
    [warn, "warn"],
    [error, "error"],
    [time, "time"],
    [timeEnd, "timeEnd"],
    [trace, "trace"],
    [dir, "dir"],
    [consoleAssert, "assert"]
]

for (var i = 0; i < functions.length; i++) {
    var tuple = functions[i]
    var f = tuple[0]
    var name = tuple[1]

    if (!console[name]) {
        console[name] = f
    }
}

module.exports = console

function log() {}

function info() {
    console.log.apply(console, arguments)
}

function warn() {
    console.log.apply(console, arguments)
}

function error() {
    console.warn.apply(console, arguments)
}

function time(label) {
    times[label] = now()
}

function timeEnd(label) {
    var time = times[label]
    if (!time) {
        throw new Error("No such label: " + label)
    }

    delete times[label]
    var duration = now() - time
    console.log(label + ": " + duration + "ms")
}

function trace() {
    var err = new Error()
    err.name = "Trace"
    err.message = util.format.apply(null, arguments)
    console.error(err.stack)
}

function dir(object) {
    console.log(util.inspect(object) + "\n")
}

function consoleAssert(expression) {
    if (!expression) {
        var arr = slice.call(arguments, 1)
        assert.ok(false, util.format.apply(null, arr))
    }
}


/***/ }),

/***/ "./node_modules/define-properties/index.js":
/*!*************************************************!*\
  !*** ./node_modules/define-properties/index.js ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var keys = __webpack_require__(/*! object-keys */ "./node_modules/object-keys/index.js");
var hasSymbols = typeof Symbol === 'function' && typeof Symbol('foo') === 'symbol';

var toStr = Object.prototype.toString;
var concat = Array.prototype.concat;
var origDefineProperty = Object.defineProperty;

var isFunction = function (fn) {
	return typeof fn === 'function' && toStr.call(fn) === '[object Function]';
};

var hasPropertyDescriptors = __webpack_require__(/*! has-property-descriptors */ "./node_modules/has-property-descriptors/index.js")();

var supportsDescriptors = origDefineProperty && hasPropertyDescriptors;

var defineProperty = function (object, name, value, predicate) {
	if (name in object) {
		if (predicate === true) {
			if (object[name] === value) {
				return;
			}
		} else if (!isFunction(predicate) || !predicate()) {
			return;
		}
	}
	if (supportsDescriptors) {
		origDefineProperty(object, name, {
			configurable: true,
			enumerable: false,
			value: value,
			writable: true
		});
	} else {
		object[name] = value; // eslint-disable-line no-param-reassign
	}
};

var defineProperties = function (object, map) {
	var predicates = arguments.length > 2 ? arguments[2] : {};
	var props = keys(map);
	if (hasSymbols) {
		props = concat.call(props, Object.getOwnPropertySymbols(map));
	}
	for (var i = 0; i < props.length; i += 1) {
		defineProperty(object, props[i], map[props[i]], predicates[props[i]]);
	}
};

defineProperties.supportsDescriptors = !!supportsDescriptors;

module.exports = defineProperties;


/***/ }),

/***/ "./node_modules/es6-object-assign/index.js":
/*!*************************************************!*\
  !*** ./node_modules/es6-object-assign/index.js ***!
  \*************************************************/
/***/ ((module) => {

"use strict";
/**
 * Code refactored from Mozilla Developer Network:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
 */



function assign(target, firstSource) {
  if (target === undefined || target === null) {
    throw new TypeError('Cannot convert first argument to object');
  }

  var to = Object(target);
  for (var i = 1; i < arguments.length; i++) {
    var nextSource = arguments[i];
    if (nextSource === undefined || nextSource === null) {
      continue;
    }

    var keysArray = Object.keys(Object(nextSource));
    for (var nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex++) {
      var nextKey = keysArray[nextIndex];
      var desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);
      if (desc !== undefined && desc.enumerable) {
        to[nextKey] = nextSource[nextKey];
      }
    }
  }
  return to;
}

function polyfill() {
  if (!Object.assign) {
    Object.defineProperty(Object, 'assign', {
      enumerable: false,
      configurable: true,
      writable: true,
      value: assign
    });
  }
}

module.exports = {
  assign: assign,
  polyfill: polyfill
};


/***/ }),

/***/ "./node_modules/for-each/index.js":
/*!****************************************!*\
  !*** ./node_modules/for-each/index.js ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var isCallable = __webpack_require__(/*! is-callable */ "./node_modules/is-callable/index.js");

var toStr = Object.prototype.toString;
var hasOwnProperty = Object.prototype.hasOwnProperty;

var forEachArray = function forEachArray(array, iterator, receiver) {
    for (var i = 0, len = array.length; i < len; i++) {
        if (hasOwnProperty.call(array, i)) {
            if (receiver == null) {
                iterator(array[i], i, array);
            } else {
                iterator.call(receiver, array[i], i, array);
            }
        }
    }
};

var forEachString = function forEachString(string, iterator, receiver) {
    for (var i = 0, len = string.length; i < len; i++) {
        // no such thing as a sparse string.
        if (receiver == null) {
            iterator(string.charAt(i), i, string);
        } else {
            iterator.call(receiver, string.charAt(i), i, string);
        }
    }
};

var forEachObject = function forEachObject(object, iterator, receiver) {
    for (var k in object) {
        if (hasOwnProperty.call(object, k)) {
            if (receiver == null) {
                iterator(object[k], k, object);
            } else {
                iterator.call(receiver, object[k], k, object);
            }
        }
    }
};

var forEach = function forEach(list, iterator, thisArg) {
    if (!isCallable(iterator)) {
        throw new TypeError('iterator must be a function');
    }

    var receiver;
    if (arguments.length >= 3) {
        receiver = thisArg;
    }

    if (toStr.call(list) === '[object Array]') {
        forEachArray(list, iterator, receiver);
    } else if (typeof list === 'string') {
        forEachString(list, iterator, receiver);
    } else {
        forEachObject(list, iterator, receiver);
    }
};

module.exports = forEach;


/***/ }),

/***/ "./node_modules/function-bind/implementation.js":
/*!******************************************************!*\
  !*** ./node_modules/function-bind/implementation.js ***!
  \******************************************************/
/***/ ((module) => {

"use strict";


/* eslint no-invalid-this: 1 */

var ERROR_MESSAGE = 'Function.prototype.bind called on incompatible ';
var slice = Array.prototype.slice;
var toStr = Object.prototype.toString;
var funcType = '[object Function]';

module.exports = function bind(that) {
    var target = this;
    if (typeof target !== 'function' || toStr.call(target) !== funcType) {
        throw new TypeError(ERROR_MESSAGE + target);
    }
    var args = slice.call(arguments, 1);

    var bound;
    var binder = function () {
        if (this instanceof bound) {
            var result = target.apply(
                this,
                args.concat(slice.call(arguments))
            );
            if (Object(result) === result) {
                return result;
            }
            return this;
        } else {
            return target.apply(
                that,
                args.concat(slice.call(arguments))
            );
        }
    };

    var boundLength = Math.max(0, target.length - args.length);
    var boundArgs = [];
    for (var i = 0; i < boundLength; i++) {
        boundArgs.push('$' + i);
    }

    bound = Function('binder', 'return function (' + boundArgs.join(',') + '){ return binder.apply(this,arguments); }')(binder);

    if (target.prototype) {
        var Empty = function Empty() {};
        Empty.prototype = target.prototype;
        bound.prototype = new Empty();
        Empty.prototype = null;
    }

    return bound;
};


/***/ }),

/***/ "./node_modules/function-bind/index.js":
/*!*********************************************!*\
  !*** ./node_modules/function-bind/index.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var implementation = __webpack_require__(/*! ./implementation */ "./node_modules/function-bind/implementation.js");

module.exports = Function.prototype.bind || implementation;


/***/ }),

/***/ "./node_modules/get-intrinsic/index.js":
/*!*********************************************!*\
  !*** ./node_modules/get-intrinsic/index.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var undefined;

var $SyntaxError = SyntaxError;
var $Function = Function;
var $TypeError = TypeError;

// eslint-disable-next-line consistent-return
var getEvalledConstructor = function (expressionSyntax) {
	try {
		return $Function('"use strict"; return (' + expressionSyntax + ').constructor;')();
	} catch (e) {}
};

var $gOPD = Object.getOwnPropertyDescriptor;
if ($gOPD) {
	try {
		$gOPD({}, '');
	} catch (e) {
		$gOPD = null; // this is IE 8, which has a broken gOPD
	}
}

var throwTypeError = function () {
	throw new $TypeError();
};
var ThrowTypeError = $gOPD
	? (function () {
		try {
			// eslint-disable-next-line no-unused-expressions, no-caller, no-restricted-properties
			arguments.callee; // IE 8 does not throw here
			return throwTypeError;
		} catch (calleeThrows) {
			try {
				// IE 8 throws on Object.getOwnPropertyDescriptor(arguments, '')
				return $gOPD(arguments, 'callee').get;
			} catch (gOPDthrows) {
				return throwTypeError;
			}
		}
	}())
	: throwTypeError;

var hasSymbols = __webpack_require__(/*! has-symbols */ "./node_modules/has-symbols/index.js")();

var getProto = Object.getPrototypeOf || function (x) { return x.__proto__; }; // eslint-disable-line no-proto

var needsEval = {};

var TypedArray = typeof Uint8Array === 'undefined' ? undefined : getProto(Uint8Array);

var INTRINSICS = {
	'%AggregateError%': typeof AggregateError === 'undefined' ? undefined : AggregateError,
	'%Array%': Array,
	'%ArrayBuffer%': typeof ArrayBuffer === 'undefined' ? undefined : ArrayBuffer,
	'%ArrayIteratorPrototype%': hasSymbols ? getProto([][Symbol.iterator]()) : undefined,
	'%AsyncFromSyncIteratorPrototype%': undefined,
	'%AsyncFunction%': needsEval,
	'%AsyncGenerator%': needsEval,
	'%AsyncGeneratorFunction%': needsEval,
	'%AsyncIteratorPrototype%': needsEval,
	'%Atomics%': typeof Atomics === 'undefined' ? undefined : Atomics,
	'%BigInt%': typeof BigInt === 'undefined' ? undefined : BigInt,
	'%BigInt64Array%': typeof BigInt64Array === 'undefined' ? undefined : BigInt64Array,
	'%BigUint64Array%': typeof BigUint64Array === 'undefined' ? undefined : BigUint64Array,
	'%Boolean%': Boolean,
	'%DataView%': typeof DataView === 'undefined' ? undefined : DataView,
	'%Date%': Date,
	'%decodeURI%': decodeURI,
	'%decodeURIComponent%': decodeURIComponent,
	'%encodeURI%': encodeURI,
	'%encodeURIComponent%': encodeURIComponent,
	'%Error%': Error,
	'%eval%': eval, // eslint-disable-line no-eval
	'%EvalError%': EvalError,
	'%Float32Array%': typeof Float32Array === 'undefined' ? undefined : Float32Array,
	'%Float64Array%': typeof Float64Array === 'undefined' ? undefined : Float64Array,
	'%FinalizationRegistry%': typeof FinalizationRegistry === 'undefined' ? undefined : FinalizationRegistry,
	'%Function%': $Function,
	'%GeneratorFunction%': needsEval,
	'%Int8Array%': typeof Int8Array === 'undefined' ? undefined : Int8Array,
	'%Int16Array%': typeof Int16Array === 'undefined' ? undefined : Int16Array,
	'%Int32Array%': typeof Int32Array === 'undefined' ? undefined : Int32Array,
	'%isFinite%': isFinite,
	'%isNaN%': isNaN,
	'%IteratorPrototype%': hasSymbols ? getProto(getProto([][Symbol.iterator]())) : undefined,
	'%JSON%': typeof JSON === 'object' ? JSON : undefined,
	'%Map%': typeof Map === 'undefined' ? undefined : Map,
	'%MapIteratorPrototype%': typeof Map === 'undefined' || !hasSymbols ? undefined : getProto(new Map()[Symbol.iterator]()),
	'%Math%': Math,
	'%Number%': Number,
	'%Object%': Object,
	'%parseFloat%': parseFloat,
	'%parseInt%': parseInt,
	'%Promise%': typeof Promise === 'undefined' ? undefined : Promise,
	'%Proxy%': typeof Proxy === 'undefined' ? undefined : Proxy,
	'%RangeError%': RangeError,
	'%ReferenceError%': ReferenceError,
	'%Reflect%': typeof Reflect === 'undefined' ? undefined : Reflect,
	'%RegExp%': RegExp,
	'%Set%': typeof Set === 'undefined' ? undefined : Set,
	'%SetIteratorPrototype%': typeof Set === 'undefined' || !hasSymbols ? undefined : getProto(new Set()[Symbol.iterator]()),
	'%SharedArrayBuffer%': typeof SharedArrayBuffer === 'undefined' ? undefined : SharedArrayBuffer,
	'%String%': String,
	'%StringIteratorPrototype%': hasSymbols ? getProto(''[Symbol.iterator]()) : undefined,
	'%Symbol%': hasSymbols ? Symbol : undefined,
	'%SyntaxError%': $SyntaxError,
	'%ThrowTypeError%': ThrowTypeError,
	'%TypedArray%': TypedArray,
	'%TypeError%': $TypeError,
	'%Uint8Array%': typeof Uint8Array === 'undefined' ? undefined : Uint8Array,
	'%Uint8ClampedArray%': typeof Uint8ClampedArray === 'undefined' ? undefined : Uint8ClampedArray,
	'%Uint16Array%': typeof Uint16Array === 'undefined' ? undefined : Uint16Array,
	'%Uint32Array%': typeof Uint32Array === 'undefined' ? undefined : Uint32Array,
	'%URIError%': URIError,
	'%WeakMap%': typeof WeakMap === 'undefined' ? undefined : WeakMap,
	'%WeakRef%': typeof WeakRef === 'undefined' ? undefined : WeakRef,
	'%WeakSet%': typeof WeakSet === 'undefined' ? undefined : WeakSet
};

try {
	null.error; // eslint-disable-line no-unused-expressions
} catch (e) {
	// https://github.com/tc39/proposal-shadowrealm/pull/384#issuecomment-1364264229
	var errorProto = getProto(getProto(e));
	INTRINSICS['%Error.prototype%'] = errorProto;
}

var doEval = function doEval(name) {
	var value;
	if (name === '%AsyncFunction%') {
		value = getEvalledConstructor('async function () {}');
	} else if (name === '%GeneratorFunction%') {
		value = getEvalledConstructor('function* () {}');
	} else if (name === '%AsyncGeneratorFunction%') {
		value = getEvalledConstructor('async function* () {}');
	} else if (name === '%AsyncGenerator%') {
		var fn = doEval('%AsyncGeneratorFunction%');
		if (fn) {
			value = fn.prototype;
		}
	} else if (name === '%AsyncIteratorPrototype%') {
		var gen = doEval('%AsyncGenerator%');
		if (gen) {
			value = getProto(gen.prototype);
		}
	}

	INTRINSICS[name] = value;

	return value;
};

var LEGACY_ALIASES = {
	'%ArrayBufferPrototype%': ['ArrayBuffer', 'prototype'],
	'%ArrayPrototype%': ['Array', 'prototype'],
	'%ArrayProto_entries%': ['Array', 'prototype', 'entries'],
	'%ArrayProto_forEach%': ['Array', 'prototype', 'forEach'],
	'%ArrayProto_keys%': ['Array', 'prototype', 'keys'],
	'%ArrayProto_values%': ['Array', 'prototype', 'values'],
	'%AsyncFunctionPrototype%': ['AsyncFunction', 'prototype'],
	'%AsyncGenerator%': ['AsyncGeneratorFunction', 'prototype'],
	'%AsyncGeneratorPrototype%': ['AsyncGeneratorFunction', 'prototype', 'prototype'],
	'%BooleanPrototype%': ['Boolean', 'prototype'],
	'%DataViewPrototype%': ['DataView', 'prototype'],
	'%DatePrototype%': ['Date', 'prototype'],
	'%ErrorPrototype%': ['Error', 'prototype'],
	'%EvalErrorPrototype%': ['EvalError', 'prototype'],
	'%Float32ArrayPrototype%': ['Float32Array', 'prototype'],
	'%Float64ArrayPrototype%': ['Float64Array', 'prototype'],
	'%FunctionPrototype%': ['Function', 'prototype'],
	'%Generator%': ['GeneratorFunction', 'prototype'],
	'%GeneratorPrototype%': ['GeneratorFunction', 'prototype', 'prototype'],
	'%Int8ArrayPrototype%': ['Int8Array', 'prototype'],
	'%Int16ArrayPrototype%': ['Int16Array', 'prototype'],
	'%Int32ArrayPrototype%': ['Int32Array', 'prototype'],
	'%JSONParse%': ['JSON', 'parse'],
	'%JSONStringify%': ['JSON', 'stringify'],
	'%MapPrototype%': ['Map', 'prototype'],
	'%NumberPrototype%': ['Number', 'prototype'],
	'%ObjectPrototype%': ['Object', 'prototype'],
	'%ObjProto_toString%': ['Object', 'prototype', 'toString'],
	'%ObjProto_valueOf%': ['Object', 'prototype', 'valueOf'],
	'%PromisePrototype%': ['Promise', 'prototype'],
	'%PromiseProto_then%': ['Promise', 'prototype', 'then'],
	'%Promise_all%': ['Promise', 'all'],
	'%Promise_reject%': ['Promise', 'reject'],
	'%Promise_resolve%': ['Promise', 'resolve'],
	'%RangeErrorPrototype%': ['RangeError', 'prototype'],
	'%ReferenceErrorPrototype%': ['ReferenceError', 'prototype'],
	'%RegExpPrototype%': ['RegExp', 'prototype'],
	'%SetPrototype%': ['Set', 'prototype'],
	'%SharedArrayBufferPrototype%': ['SharedArrayBuffer', 'prototype'],
	'%StringPrototype%': ['String', 'prototype'],
	'%SymbolPrototype%': ['Symbol', 'prototype'],
	'%SyntaxErrorPrototype%': ['SyntaxError', 'prototype'],
	'%TypedArrayPrototype%': ['TypedArray', 'prototype'],
	'%TypeErrorPrototype%': ['TypeError', 'prototype'],
	'%Uint8ArrayPrototype%': ['Uint8Array', 'prototype'],
	'%Uint8ClampedArrayPrototype%': ['Uint8ClampedArray', 'prototype'],
	'%Uint16ArrayPrototype%': ['Uint16Array', 'prototype'],
	'%Uint32ArrayPrototype%': ['Uint32Array', 'prototype'],
	'%URIErrorPrototype%': ['URIError', 'prototype'],
	'%WeakMapPrototype%': ['WeakMap', 'prototype'],
	'%WeakSetPrototype%': ['WeakSet', 'prototype']
};

var bind = __webpack_require__(/*! function-bind */ "./node_modules/function-bind/index.js");
var hasOwn = __webpack_require__(/*! has */ "./node_modules/has/src/index.js");
var $concat = bind.call(Function.call, Array.prototype.concat);
var $spliceApply = bind.call(Function.apply, Array.prototype.splice);
var $replace = bind.call(Function.call, String.prototype.replace);
var $strSlice = bind.call(Function.call, String.prototype.slice);
var $exec = bind.call(Function.call, RegExp.prototype.exec);

/* adapted from https://github.com/lodash/lodash/blob/4.17.15/dist/lodash.js#L6735-L6744 */
var rePropName = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g;
var reEscapeChar = /\\(\\)?/g; /** Used to match backslashes in property paths. */
var stringToPath = function stringToPath(string) {
	var first = $strSlice(string, 0, 1);
	var last = $strSlice(string, -1);
	if (first === '%' && last !== '%') {
		throw new $SyntaxError('invalid intrinsic syntax, expected closing `%`');
	} else if (last === '%' && first !== '%') {
		throw new $SyntaxError('invalid intrinsic syntax, expected opening `%`');
	}
	var result = [];
	$replace(string, rePropName, function (match, number, quote, subString) {
		result[result.length] = quote ? $replace(subString, reEscapeChar, '$1') : number || match;
	});
	return result;
};
/* end adaptation */

var getBaseIntrinsic = function getBaseIntrinsic(name, allowMissing) {
	var intrinsicName = name;
	var alias;
	if (hasOwn(LEGACY_ALIASES, intrinsicName)) {
		alias = LEGACY_ALIASES[intrinsicName];
		intrinsicName = '%' + alias[0] + '%';
	}

	if (hasOwn(INTRINSICS, intrinsicName)) {
		var value = INTRINSICS[intrinsicName];
		if (value === needsEval) {
			value = doEval(intrinsicName);
		}
		if (typeof value === 'undefined' && !allowMissing) {
			throw new $TypeError('intrinsic ' + name + ' exists, but is not available. Please file an issue!');
		}

		return {
			alias: alias,
			name: intrinsicName,
			value: value
		};
	}

	throw new $SyntaxError('intrinsic ' + name + ' does not exist!');
};

module.exports = function GetIntrinsic(name, allowMissing) {
	if (typeof name !== 'string' || name.length === 0) {
		throw new $TypeError('intrinsic name must be a non-empty string');
	}
	if (arguments.length > 1 && typeof allowMissing !== 'boolean') {
		throw new $TypeError('"allowMissing" argument must be a boolean');
	}

	if ($exec(/^%?[^%]*%?$/, name) === null) {
		throw new $SyntaxError('`%` may not be present anywhere but at the beginning and end of the intrinsic name');
	}
	var parts = stringToPath(name);
	var intrinsicBaseName = parts.length > 0 ? parts[0] : '';

	var intrinsic = getBaseIntrinsic('%' + intrinsicBaseName + '%', allowMissing);
	var intrinsicRealName = intrinsic.name;
	var value = intrinsic.value;
	var skipFurtherCaching = false;

	var alias = intrinsic.alias;
	if (alias) {
		intrinsicBaseName = alias[0];
		$spliceApply(parts, $concat([0, 1], alias));
	}

	for (var i = 1, isOwn = true; i < parts.length; i += 1) {
		var part = parts[i];
		var first = $strSlice(part, 0, 1);
		var last = $strSlice(part, -1);
		if (
			(
				(first === '"' || first === "'" || first === '`')
				|| (last === '"' || last === "'" || last === '`')
			)
			&& first !== last
		) {
			throw new $SyntaxError('property names with quotes must have matching quotes');
		}
		if (part === 'constructor' || !isOwn) {
			skipFurtherCaching = true;
		}

		intrinsicBaseName += '.' + part;
		intrinsicRealName = '%' + intrinsicBaseName + '%';

		if (hasOwn(INTRINSICS, intrinsicRealName)) {
			value = INTRINSICS[intrinsicRealName];
		} else if (value != null) {
			if (!(part in value)) {
				if (!allowMissing) {
					throw new $TypeError('base intrinsic for ' + name + ' exists, but the property is not available.');
				}
				return void undefined;
			}
			if ($gOPD && (i + 1) >= parts.length) {
				var desc = $gOPD(value, part);
				isOwn = !!desc;

				// By convention, when a data property is converted to an accessor
				// property to emulate a data property that does not suffer from
				// the override mistake, that accessor's getter is marked with
				// an `originalValue` property. Here, when we detect this, we
				// uphold the illusion by pretending to see that original data
				// property, i.e., returning the value rather than the getter
				// itself.
				if (isOwn && 'get' in desc && !('originalValue' in desc.get)) {
					value = desc.get;
				} else {
					value = value[part];
				}
			} else {
				isOwn = hasOwn(value, part);
				value = value[part];
			}

			if (isOwn && !skipFurtherCaching) {
				INTRINSICS[intrinsicRealName] = value;
			}
		}
	}
	return value;
};


/***/ }),

/***/ "./node_modules/gopd/index.js":
/*!************************************!*\
  !*** ./node_modules/gopd/index.js ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var GetIntrinsic = __webpack_require__(/*! get-intrinsic */ "./node_modules/get-intrinsic/index.js");

var $gOPD = GetIntrinsic('%Object.getOwnPropertyDescriptor%', true);

if ($gOPD) {
	try {
		$gOPD([], 'length');
	} catch (e) {
		// IE 8 has a broken gOPD
		$gOPD = null;
	}
}

module.exports = $gOPD;


/***/ }),

/***/ "./node_modules/has-property-descriptors/index.js":
/*!********************************************************!*\
  !*** ./node_modules/has-property-descriptors/index.js ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var GetIntrinsic = __webpack_require__(/*! get-intrinsic */ "./node_modules/get-intrinsic/index.js");

var $defineProperty = GetIntrinsic('%Object.defineProperty%', true);

var hasPropertyDescriptors = function hasPropertyDescriptors() {
	if ($defineProperty) {
		try {
			$defineProperty({}, 'a', { value: 1 });
			return true;
		} catch (e) {
			// IE 8 has a broken defineProperty
			return false;
		}
	}
	return false;
};

hasPropertyDescriptors.hasArrayLengthDefineBug = function hasArrayLengthDefineBug() {
	// node v0.6 has a bug where array lengths can be Set but not Defined
	if (!hasPropertyDescriptors()) {
		return null;
	}
	try {
		return $defineProperty([], 'length', { value: 1 }).length !== 1;
	} catch (e) {
		// In Firefox 4-22, defining length on an array throws an exception.
		return true;
	}
};

module.exports = hasPropertyDescriptors;


/***/ }),

/***/ "./node_modules/has-symbols/index.js":
/*!*******************************************!*\
  !*** ./node_modules/has-symbols/index.js ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var origSymbol = typeof Symbol !== 'undefined' && Symbol;
var hasSymbolSham = __webpack_require__(/*! ./shams */ "./node_modules/has-symbols/shams.js");

module.exports = function hasNativeSymbols() {
	if (typeof origSymbol !== 'function') { return false; }
	if (typeof Symbol !== 'function') { return false; }
	if (typeof origSymbol('foo') !== 'symbol') { return false; }
	if (typeof Symbol('bar') !== 'symbol') { return false; }

	return hasSymbolSham();
};


/***/ }),

/***/ "./node_modules/has-symbols/shams.js":
/*!*******************************************!*\
  !*** ./node_modules/has-symbols/shams.js ***!
  \*******************************************/
/***/ ((module) => {

"use strict";


/* eslint complexity: [2, 18], max-statements: [2, 33] */
module.exports = function hasSymbols() {
	if (typeof Symbol !== 'function' || typeof Object.getOwnPropertySymbols !== 'function') { return false; }
	if (typeof Symbol.iterator === 'symbol') { return true; }

	var obj = {};
	var sym = Symbol('test');
	var symObj = Object(sym);
	if (typeof sym === 'string') { return false; }

	if (Object.prototype.toString.call(sym) !== '[object Symbol]') { return false; }
	if (Object.prototype.toString.call(symObj) !== '[object Symbol]') { return false; }

	// temp disabled per https://github.com/ljharb/object.assign/issues/17
	// if (sym instanceof Symbol) { return false; }
	// temp disabled per https://github.com/WebReflection/get-own-property-symbols/issues/4
	// if (!(symObj instanceof Symbol)) { return false; }

	// if (typeof Symbol.prototype.toString !== 'function') { return false; }
	// if (String(sym) !== Symbol.prototype.toString.call(sym)) { return false; }

	var symVal = 42;
	obj[sym] = symVal;
	for (sym in obj) { return false; } // eslint-disable-line no-restricted-syntax, no-unreachable-loop
	if (typeof Object.keys === 'function' && Object.keys(obj).length !== 0) { return false; }

	if (typeof Object.getOwnPropertyNames === 'function' && Object.getOwnPropertyNames(obj).length !== 0) { return false; }

	var syms = Object.getOwnPropertySymbols(obj);
	if (syms.length !== 1 || syms[0] !== sym) { return false; }

	if (!Object.prototype.propertyIsEnumerable.call(obj, sym)) { return false; }

	if (typeof Object.getOwnPropertyDescriptor === 'function') {
		var descriptor = Object.getOwnPropertyDescriptor(obj, sym);
		if (descriptor.value !== symVal || descriptor.enumerable !== true) { return false; }
	}

	return true;
};


/***/ }),

/***/ "./node_modules/has-tostringtag/shams.js":
/*!***********************************************!*\
  !*** ./node_modules/has-tostringtag/shams.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var hasSymbols = __webpack_require__(/*! has-symbols/shams */ "./node_modules/has-symbols/shams.js");

module.exports = function hasToStringTagShams() {
	return hasSymbols() && !!Symbol.toStringTag;
};


/***/ }),

/***/ "./node_modules/has/src/index.js":
/*!***************************************!*\
  !*** ./node_modules/has/src/index.js ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var bind = __webpack_require__(/*! function-bind */ "./node_modules/function-bind/index.js");

module.exports = bind.call(Function.call, Object.prototype.hasOwnProperty);


/***/ }),

/***/ "./node_modules/inherits/inherits_browser.js":
/*!***************************************************!*\
  !*** ./node_modules/inherits/inherits_browser.js ***!
  \***************************************************/
/***/ ((module) => {

if (typeof Object.create === 'function') {
  // implementation from standard node.js 'util' module
  module.exports = function inherits(ctor, superCtor) {
    if (superCtor) {
      ctor.super_ = superCtor
      ctor.prototype = Object.create(superCtor.prototype, {
        constructor: {
          value: ctor,
          enumerable: false,
          writable: true,
          configurable: true
        }
      })
    }
  };
} else {
  // old school shim for old browsers
  module.exports = function inherits(ctor, superCtor) {
    if (superCtor) {
      ctor.super_ = superCtor
      var TempCtor = function () {}
      TempCtor.prototype = superCtor.prototype
      ctor.prototype = new TempCtor()
      ctor.prototype.constructor = ctor
    }
  }
}


/***/ }),

/***/ "./node_modules/is-arguments/index.js":
/*!********************************************!*\
  !*** ./node_modules/is-arguments/index.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var hasToStringTag = __webpack_require__(/*! has-tostringtag/shams */ "./node_modules/has-tostringtag/shams.js")();
var callBound = __webpack_require__(/*! call-bind/callBound */ "./node_modules/call-bind/callBound.js");

var $toString = callBound('Object.prototype.toString');

var isStandardArguments = function isArguments(value) {
	if (hasToStringTag && value && typeof value === 'object' && Symbol.toStringTag in value) {
		return false;
	}
	return $toString(value) === '[object Arguments]';
};

var isLegacyArguments = function isArguments(value) {
	if (isStandardArguments(value)) {
		return true;
	}
	return value !== null &&
		typeof value === 'object' &&
		typeof value.length === 'number' &&
		value.length >= 0 &&
		$toString(value) !== '[object Array]' &&
		$toString(value.callee) === '[object Function]';
};

var supportsStandardArguments = (function () {
	return isStandardArguments(arguments);
}());

isStandardArguments.isLegacyArguments = isLegacyArguments; // for tests

module.exports = supportsStandardArguments ? isStandardArguments : isLegacyArguments;


/***/ }),

/***/ "./node_modules/is-callable/index.js":
/*!*******************************************!*\
  !*** ./node_modules/is-callable/index.js ***!
  \*******************************************/
/***/ ((module) => {

"use strict";


var fnToStr = Function.prototype.toString;
var reflectApply = typeof Reflect === 'object' && Reflect !== null && Reflect.apply;
var badArrayLike;
var isCallableMarker;
if (typeof reflectApply === 'function' && typeof Object.defineProperty === 'function') {
	try {
		badArrayLike = Object.defineProperty({}, 'length', {
			get: function () {
				throw isCallableMarker;
			}
		});
		isCallableMarker = {};
		// eslint-disable-next-line no-throw-literal
		reflectApply(function () { throw 42; }, null, badArrayLike);
	} catch (_) {
		if (_ !== isCallableMarker) {
			reflectApply = null;
		}
	}
} else {
	reflectApply = null;
}

var constructorRegex = /^\s*class\b/;
var isES6ClassFn = function isES6ClassFunction(value) {
	try {
		var fnStr = fnToStr.call(value);
		return constructorRegex.test(fnStr);
	} catch (e) {
		return false; // not a function
	}
};

var tryFunctionObject = function tryFunctionToStr(value) {
	try {
		if (isES6ClassFn(value)) { return false; }
		fnToStr.call(value);
		return true;
	} catch (e) {
		return false;
	}
};
var toStr = Object.prototype.toString;
var objectClass = '[object Object]';
var fnClass = '[object Function]';
var genClass = '[object GeneratorFunction]';
var ddaClass = '[object HTMLAllCollection]'; // IE 11
var ddaClass2 = '[object HTML document.all class]';
var ddaClass3 = '[object HTMLCollection]'; // IE 9-10
var hasToStringTag = typeof Symbol === 'function' && !!Symbol.toStringTag; // better: use `has-tostringtag`

var isIE68 = !(0 in [,]); // eslint-disable-line no-sparse-arrays, comma-spacing

var isDDA = function isDocumentDotAll() { return false; };
if (typeof document === 'object') {
	// Firefox 3 canonicalizes DDA to undefined when it's not accessed directly
	var all = document.all;
	if (toStr.call(all) === toStr.call(document.all)) {
		isDDA = function isDocumentDotAll(value) {
			/* globals document: false */
			// in IE 6-8, typeof document.all is "object" and it's truthy
			if ((isIE68 || !value) && (typeof value === 'undefined' || typeof value === 'object')) {
				try {
					var str = toStr.call(value);
					return (
						str === ddaClass
						|| str === ddaClass2
						|| str === ddaClass3 // opera 12.16
						|| str === objectClass // IE 6-8
					) && value('') == null; // eslint-disable-line eqeqeq
				} catch (e) { /**/ }
			}
			return false;
		};
	}
}

module.exports = reflectApply
	? function isCallable(value) {
		if (isDDA(value)) { return true; }
		if (!value) { return false; }
		if (typeof value !== 'function' && typeof value !== 'object') { return false; }
		try {
			reflectApply(value, null, badArrayLike);
		} catch (e) {
			if (e !== isCallableMarker) { return false; }
		}
		return !isES6ClassFn(value) && tryFunctionObject(value);
	}
	: function isCallable(value) {
		if (isDDA(value)) { return true; }
		if (!value) { return false; }
		if (typeof value !== 'function' && typeof value !== 'object') { return false; }
		if (hasToStringTag) { return tryFunctionObject(value); }
		if (isES6ClassFn(value)) { return false; }
		var strClass = toStr.call(value);
		if (strClass !== fnClass && strClass !== genClass && !(/^\[object HTML/).test(strClass)) { return false; }
		return tryFunctionObject(value);
	};


/***/ }),

/***/ "./node_modules/is-generator-function/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/is-generator-function/index.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var toStr = Object.prototype.toString;
var fnToStr = Function.prototype.toString;
var isFnRegex = /^\s*(?:function)?\*/;
var hasToStringTag = __webpack_require__(/*! has-tostringtag/shams */ "./node_modules/has-tostringtag/shams.js")();
var getProto = Object.getPrototypeOf;
var getGeneratorFunc = function () { // eslint-disable-line consistent-return
	if (!hasToStringTag) {
		return false;
	}
	try {
		return Function('return function*() {}')();
	} catch (e) {
	}
};
var GeneratorFunction;

module.exports = function isGeneratorFunction(fn) {
	if (typeof fn !== 'function') {
		return false;
	}
	if (isFnRegex.test(fnToStr.call(fn))) {
		return true;
	}
	if (!hasToStringTag) {
		var str = toStr.call(fn);
		return str === '[object GeneratorFunction]';
	}
	if (!getProto) {
		return false;
	}
	if (typeof GeneratorFunction === 'undefined') {
		var generatorFunc = getGeneratorFunc();
		GeneratorFunction = generatorFunc ? getProto(generatorFunc) : false;
	}
	return getProto(fn) === GeneratorFunction;
};


/***/ }),

/***/ "./node_modules/is-nan/implementation.js":
/*!***********************************************!*\
  !*** ./node_modules/is-nan/implementation.js ***!
  \***********************************************/
/***/ ((module) => {

"use strict";


/* http://www.ecma-international.org/ecma-262/6.0/#sec-number.isnan */

module.exports = function isNaN(value) {
	return value !== value;
};


/***/ }),

/***/ "./node_modules/is-nan/index.js":
/*!**************************************!*\
  !*** ./node_modules/is-nan/index.js ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var callBind = __webpack_require__(/*! call-bind */ "./node_modules/call-bind/index.js");
var define = __webpack_require__(/*! define-properties */ "./node_modules/define-properties/index.js");

var implementation = __webpack_require__(/*! ./implementation */ "./node_modules/is-nan/implementation.js");
var getPolyfill = __webpack_require__(/*! ./polyfill */ "./node_modules/is-nan/polyfill.js");
var shim = __webpack_require__(/*! ./shim */ "./node_modules/is-nan/shim.js");

var polyfill = callBind(getPolyfill(), Number);

/* http://www.ecma-international.org/ecma-262/6.0/#sec-number.isnan */

define(polyfill, {
	getPolyfill: getPolyfill,
	implementation: implementation,
	shim: shim
});

module.exports = polyfill;


/***/ }),

/***/ "./node_modules/is-nan/polyfill.js":
/*!*****************************************!*\
  !*** ./node_modules/is-nan/polyfill.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var implementation = __webpack_require__(/*! ./implementation */ "./node_modules/is-nan/implementation.js");

module.exports = function getPolyfill() {
	if (Number.isNaN && Number.isNaN(NaN) && !Number.isNaN('a')) {
		return Number.isNaN;
	}
	return implementation;
};


/***/ }),

/***/ "./node_modules/is-nan/shim.js":
/*!*************************************!*\
  !*** ./node_modules/is-nan/shim.js ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var define = __webpack_require__(/*! define-properties */ "./node_modules/define-properties/index.js");
var getPolyfill = __webpack_require__(/*! ./polyfill */ "./node_modules/is-nan/polyfill.js");

/* http://www.ecma-international.org/ecma-262/6.0/#sec-number.isnan */

module.exports = function shimNumberIsNaN() {
	var polyfill = getPolyfill();
	define(Number, { isNaN: polyfill }, {
		isNaN: function testIsNaN() {
			return Number.isNaN !== polyfill;
		}
	});
	return polyfill;
};


/***/ }),

/***/ "./node_modules/is-typed-array/index.js":
/*!**********************************************!*\
  !*** ./node_modules/is-typed-array/index.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var forEach = __webpack_require__(/*! for-each */ "./node_modules/for-each/index.js");
var availableTypedArrays = __webpack_require__(/*! available-typed-arrays */ "./node_modules/available-typed-arrays/index.js");
var callBound = __webpack_require__(/*! call-bind/callBound */ "./node_modules/call-bind/callBound.js");

var $toString = callBound('Object.prototype.toString');
var hasToStringTag = __webpack_require__(/*! has-tostringtag/shams */ "./node_modules/has-tostringtag/shams.js")();
var gOPD = __webpack_require__(/*! gopd */ "./node_modules/gopd/index.js");

var g = typeof globalThis === 'undefined' ? __webpack_require__.g : globalThis;
var typedArrays = availableTypedArrays();

var $indexOf = callBound('Array.prototype.indexOf', true) || function indexOf(array, value) {
	for (var i = 0; i < array.length; i += 1) {
		if (array[i] === value) {
			return i;
		}
	}
	return -1;
};
var $slice = callBound('String.prototype.slice');
var toStrTags = {};
var getPrototypeOf = Object.getPrototypeOf; // require('getprototypeof');
if (hasToStringTag && gOPD && getPrototypeOf) {
	forEach(typedArrays, function (typedArray) {
		var arr = new g[typedArray]();
		if (Symbol.toStringTag in arr) {
			var proto = getPrototypeOf(arr);
			var descriptor = gOPD(proto, Symbol.toStringTag);
			if (!descriptor) {
				var superProto = getPrototypeOf(proto);
				descriptor = gOPD(superProto, Symbol.toStringTag);
			}
			toStrTags[typedArray] = descriptor.get;
		}
	});
}

var tryTypedArrays = function tryAllTypedArrays(value) {
	var anyTrue = false;
	forEach(toStrTags, function (getter, typedArray) {
		if (!anyTrue) {
			try {
				anyTrue = getter.call(value) === typedArray;
			} catch (e) { /**/ }
		}
	});
	return anyTrue;
};

module.exports = function isTypedArray(value) {
	if (!value || typeof value !== 'object') { return false; }
	if (!hasToStringTag || !(Symbol.toStringTag in value)) {
		var tag = $slice($toString(value), 8, -1);
		return $indexOf(typedArrays, tag) > -1;
	}
	if (!gOPD) { return false; }
	return tryTypedArrays(value);
};


/***/ }),

/***/ "./node_modules/object-is/implementation.js":
/*!**************************************************!*\
  !*** ./node_modules/object-is/implementation.js ***!
  \**************************************************/
/***/ ((module) => {

"use strict";


var numberIsNaN = function (value) {
	return value !== value;
};

module.exports = function is(a, b) {
	if (a === 0 && b === 0) {
		return 1 / a === 1 / b;
	}
	if (a === b) {
		return true;
	}
	if (numberIsNaN(a) && numberIsNaN(b)) {
		return true;
	}
	return false;
};



/***/ }),

/***/ "./node_modules/object-is/index.js":
/*!*****************************************!*\
  !*** ./node_modules/object-is/index.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var define = __webpack_require__(/*! define-properties */ "./node_modules/define-properties/index.js");
var callBind = __webpack_require__(/*! call-bind */ "./node_modules/call-bind/index.js");

var implementation = __webpack_require__(/*! ./implementation */ "./node_modules/object-is/implementation.js");
var getPolyfill = __webpack_require__(/*! ./polyfill */ "./node_modules/object-is/polyfill.js");
var shim = __webpack_require__(/*! ./shim */ "./node_modules/object-is/shim.js");

var polyfill = callBind(getPolyfill(), Object);

define(polyfill, {
	getPolyfill: getPolyfill,
	implementation: implementation,
	shim: shim
});

module.exports = polyfill;


/***/ }),

/***/ "./node_modules/object-is/polyfill.js":
/*!********************************************!*\
  !*** ./node_modules/object-is/polyfill.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var implementation = __webpack_require__(/*! ./implementation */ "./node_modules/object-is/implementation.js");

module.exports = function getPolyfill() {
	return typeof Object.is === 'function' ? Object.is : implementation;
};


/***/ }),

/***/ "./node_modules/object-is/shim.js":
/*!****************************************!*\
  !*** ./node_modules/object-is/shim.js ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var getPolyfill = __webpack_require__(/*! ./polyfill */ "./node_modules/object-is/polyfill.js");
var define = __webpack_require__(/*! define-properties */ "./node_modules/define-properties/index.js");

module.exports = function shimObjectIs() {
	var polyfill = getPolyfill();
	define(Object, { is: polyfill }, {
		is: function testObjectIs() {
			return Object.is !== polyfill;
		}
	});
	return polyfill;
};


/***/ }),

/***/ "./node_modules/object-keys/implementation.js":
/*!****************************************************!*\
  !*** ./node_modules/object-keys/implementation.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var keysShim;
if (!Object.keys) {
	// modified from https://github.com/es-shims/es5-shim
	var has = Object.prototype.hasOwnProperty;
	var toStr = Object.prototype.toString;
	var isArgs = __webpack_require__(/*! ./isArguments */ "./node_modules/object-keys/isArguments.js"); // eslint-disable-line global-require
	var isEnumerable = Object.prototype.propertyIsEnumerable;
	var hasDontEnumBug = !isEnumerable.call({ toString: null }, 'toString');
	var hasProtoEnumBug = isEnumerable.call(function () {}, 'prototype');
	var dontEnums = [
		'toString',
		'toLocaleString',
		'valueOf',
		'hasOwnProperty',
		'isPrototypeOf',
		'propertyIsEnumerable',
		'constructor'
	];
	var equalsConstructorPrototype = function (o) {
		var ctor = o.constructor;
		return ctor && ctor.prototype === o;
	};
	var excludedKeys = {
		$applicationCache: true,
		$console: true,
		$external: true,
		$frame: true,
		$frameElement: true,
		$frames: true,
		$innerHeight: true,
		$innerWidth: true,
		$onmozfullscreenchange: true,
		$onmozfullscreenerror: true,
		$outerHeight: true,
		$outerWidth: true,
		$pageXOffset: true,
		$pageYOffset: true,
		$parent: true,
		$scrollLeft: true,
		$scrollTop: true,
		$scrollX: true,
		$scrollY: true,
		$self: true,
		$webkitIndexedDB: true,
		$webkitStorageInfo: true,
		$window: true
	};
	var hasAutomationEqualityBug = (function () {
		/* global window */
		if (typeof window === 'undefined') { return false; }
		for (var k in window) {
			try {
				if (!excludedKeys['$' + k] && has.call(window, k) && window[k] !== null && typeof window[k] === 'object') {
					try {
						equalsConstructorPrototype(window[k]);
					} catch (e) {
						return true;
					}
				}
			} catch (e) {
				return true;
			}
		}
		return false;
	}());
	var equalsConstructorPrototypeIfNotBuggy = function (o) {
		/* global window */
		if (typeof window === 'undefined' || !hasAutomationEqualityBug) {
			return equalsConstructorPrototype(o);
		}
		try {
			return equalsConstructorPrototype(o);
		} catch (e) {
			return false;
		}
	};

	keysShim = function keys(object) {
		var isObject = object !== null && typeof object === 'object';
		var isFunction = toStr.call(object) === '[object Function]';
		var isArguments = isArgs(object);
		var isString = isObject && toStr.call(object) === '[object String]';
		var theKeys = [];

		if (!isObject && !isFunction && !isArguments) {
			throw new TypeError('Object.keys called on a non-object');
		}

		var skipProto = hasProtoEnumBug && isFunction;
		if (isString && object.length > 0 && !has.call(object, 0)) {
			for (var i = 0; i < object.length; ++i) {
				theKeys.push(String(i));
			}
		}

		if (isArguments && object.length > 0) {
			for (var j = 0; j < object.length; ++j) {
				theKeys.push(String(j));
			}
		} else {
			for (var name in object) {
				if (!(skipProto && name === 'prototype') && has.call(object, name)) {
					theKeys.push(String(name));
				}
			}
		}

		if (hasDontEnumBug) {
			var skipConstructor = equalsConstructorPrototypeIfNotBuggy(object);

			for (var k = 0; k < dontEnums.length; ++k) {
				if (!(skipConstructor && dontEnums[k] === 'constructor') && has.call(object, dontEnums[k])) {
					theKeys.push(dontEnums[k]);
				}
			}
		}
		return theKeys;
	};
}
module.exports = keysShim;


/***/ }),

/***/ "./node_modules/object-keys/index.js":
/*!*******************************************!*\
  !*** ./node_modules/object-keys/index.js ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var slice = Array.prototype.slice;
var isArgs = __webpack_require__(/*! ./isArguments */ "./node_modules/object-keys/isArguments.js");

var origKeys = Object.keys;
var keysShim = origKeys ? function keys(o) { return origKeys(o); } : __webpack_require__(/*! ./implementation */ "./node_modules/object-keys/implementation.js");

var originalKeys = Object.keys;

keysShim.shim = function shimObjectKeys() {
	if (Object.keys) {
		var keysWorksWithArguments = (function () {
			// Safari 5.0 bug
			var args = Object.keys(arguments);
			return args && args.length === arguments.length;
		}(1, 2));
		if (!keysWorksWithArguments) {
			Object.keys = function keys(object) { // eslint-disable-line func-name-matching
				if (isArgs(object)) {
					return originalKeys(slice.call(object));
				}
				return originalKeys(object);
			};
		}
	} else {
		Object.keys = keysShim;
	}
	return Object.keys || keysShim;
};

module.exports = keysShim;


/***/ }),

/***/ "./node_modules/object-keys/isArguments.js":
/*!*************************************************!*\
  !*** ./node_modules/object-keys/isArguments.js ***!
  \*************************************************/
/***/ ((module) => {

"use strict";


var toStr = Object.prototype.toString;

module.exports = function isArguments(value) {
	var str = toStr.call(value);
	var isArgs = str === '[object Arguments]';
	if (!isArgs) {
		isArgs = str !== '[object Array]' &&
			value !== null &&
			typeof value === 'object' &&
			typeof value.length === 'number' &&
			value.length >= 0 &&
			toStr.call(value.callee) === '[object Function]';
	}
	return isArgs;
};


/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/***/ ((module) => {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./node_modules/util/support/isBufferBrowser.js":
/*!******************************************************!*\
  !*** ./node_modules/util/support/isBufferBrowser.js ***!
  \******************************************************/
/***/ ((module) => {

module.exports = function isBuffer(arg) {
  return arg && typeof arg === 'object'
    && typeof arg.copy === 'function'
    && typeof arg.fill === 'function'
    && typeof arg.readUInt8 === 'function';
}

/***/ }),

/***/ "./node_modules/util/support/types.js":
/*!********************************************!*\
  !*** ./node_modules/util/support/types.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
// Currently in sync with Node.js lib/internal/util/types.js
// https://github.com/nodejs/node/commit/112cc7c27551254aa2b17098fb774867f05ed0d9



var isArgumentsObject = __webpack_require__(/*! is-arguments */ "./node_modules/is-arguments/index.js");
var isGeneratorFunction = __webpack_require__(/*! is-generator-function */ "./node_modules/is-generator-function/index.js");
var whichTypedArray = __webpack_require__(/*! which-typed-array */ "./node_modules/which-typed-array/index.js");
var isTypedArray = __webpack_require__(/*! is-typed-array */ "./node_modules/is-typed-array/index.js");

function uncurryThis(f) {
  return f.call.bind(f);
}

var BigIntSupported = typeof BigInt !== 'undefined';
var SymbolSupported = typeof Symbol !== 'undefined';

var ObjectToString = uncurryThis(Object.prototype.toString);

var numberValue = uncurryThis(Number.prototype.valueOf);
var stringValue = uncurryThis(String.prototype.valueOf);
var booleanValue = uncurryThis(Boolean.prototype.valueOf);

if (BigIntSupported) {
  var bigIntValue = uncurryThis(BigInt.prototype.valueOf);
}

if (SymbolSupported) {
  var symbolValue = uncurryThis(Symbol.prototype.valueOf);
}

function checkBoxedPrimitive(value, prototypeValueOf) {
  if (typeof value !== 'object') {
    return false;
  }
  try {
    prototypeValueOf(value);
    return true;
  } catch(e) {
    return false;
  }
}

exports.isArgumentsObject = isArgumentsObject;
exports.isGeneratorFunction = isGeneratorFunction;
exports.isTypedArray = isTypedArray;

// Taken from here and modified for better browser support
// https://github.com/sindresorhus/p-is-promise/blob/cda35a513bda03f977ad5cde3a079d237e82d7ef/index.js
function isPromise(input) {
	return (
		(
			typeof Promise !== 'undefined' &&
			input instanceof Promise
		) ||
		(
			input !== null &&
			typeof input === 'object' &&
			typeof input.then === 'function' &&
			typeof input.catch === 'function'
		)
	);
}
exports.isPromise = isPromise;

function isArrayBufferView(value) {
  if (typeof ArrayBuffer !== 'undefined' && ArrayBuffer.isView) {
    return ArrayBuffer.isView(value);
  }

  return (
    isTypedArray(value) ||
    isDataView(value)
  );
}
exports.isArrayBufferView = isArrayBufferView;


function isUint8Array(value) {
  return whichTypedArray(value) === 'Uint8Array';
}
exports.isUint8Array = isUint8Array;

function isUint8ClampedArray(value) {
  return whichTypedArray(value) === 'Uint8ClampedArray';
}
exports.isUint8ClampedArray = isUint8ClampedArray;

function isUint16Array(value) {
  return whichTypedArray(value) === 'Uint16Array';
}
exports.isUint16Array = isUint16Array;

function isUint32Array(value) {
  return whichTypedArray(value) === 'Uint32Array';
}
exports.isUint32Array = isUint32Array;

function isInt8Array(value) {
  return whichTypedArray(value) === 'Int8Array';
}
exports.isInt8Array = isInt8Array;

function isInt16Array(value) {
  return whichTypedArray(value) === 'Int16Array';
}
exports.isInt16Array = isInt16Array;

function isInt32Array(value) {
  return whichTypedArray(value) === 'Int32Array';
}
exports.isInt32Array = isInt32Array;

function isFloat32Array(value) {
  return whichTypedArray(value) === 'Float32Array';
}
exports.isFloat32Array = isFloat32Array;

function isFloat64Array(value) {
  return whichTypedArray(value) === 'Float64Array';
}
exports.isFloat64Array = isFloat64Array;

function isBigInt64Array(value) {
  return whichTypedArray(value) === 'BigInt64Array';
}
exports.isBigInt64Array = isBigInt64Array;

function isBigUint64Array(value) {
  return whichTypedArray(value) === 'BigUint64Array';
}
exports.isBigUint64Array = isBigUint64Array;

function isMapToString(value) {
  return ObjectToString(value) === '[object Map]';
}
isMapToString.working = (
  typeof Map !== 'undefined' &&
  isMapToString(new Map())
);

function isMap(value) {
  if (typeof Map === 'undefined') {
    return false;
  }

  return isMapToString.working
    ? isMapToString(value)
    : value instanceof Map;
}
exports.isMap = isMap;

function isSetToString(value) {
  return ObjectToString(value) === '[object Set]';
}
isSetToString.working = (
  typeof Set !== 'undefined' &&
  isSetToString(new Set())
);
function isSet(value) {
  if (typeof Set === 'undefined') {
    return false;
  }

  return isSetToString.working
    ? isSetToString(value)
    : value instanceof Set;
}
exports.isSet = isSet;

function isWeakMapToString(value) {
  return ObjectToString(value) === '[object WeakMap]';
}
isWeakMapToString.working = (
  typeof WeakMap !== 'undefined' &&
  isWeakMapToString(new WeakMap())
);
function isWeakMap(value) {
  if (typeof WeakMap === 'undefined') {
    return false;
  }

  return isWeakMapToString.working
    ? isWeakMapToString(value)
    : value instanceof WeakMap;
}
exports.isWeakMap = isWeakMap;

function isWeakSetToString(value) {
  return ObjectToString(value) === '[object WeakSet]';
}
isWeakSetToString.working = (
  typeof WeakSet !== 'undefined' &&
  isWeakSetToString(new WeakSet())
);
function isWeakSet(value) {
  return isWeakSetToString(value);
}
exports.isWeakSet = isWeakSet;

function isArrayBufferToString(value) {
  return ObjectToString(value) === '[object ArrayBuffer]';
}
isArrayBufferToString.working = (
  typeof ArrayBuffer !== 'undefined' &&
  isArrayBufferToString(new ArrayBuffer())
);
function isArrayBuffer(value) {
  if (typeof ArrayBuffer === 'undefined') {
    return false;
  }

  return isArrayBufferToString.working
    ? isArrayBufferToString(value)
    : value instanceof ArrayBuffer;
}
exports.isArrayBuffer = isArrayBuffer;

function isDataViewToString(value) {
  return ObjectToString(value) === '[object DataView]';
}
isDataViewToString.working = (
  typeof ArrayBuffer !== 'undefined' &&
  typeof DataView !== 'undefined' &&
  isDataViewToString(new DataView(new ArrayBuffer(1), 0, 1))
);
function isDataView(value) {
  if (typeof DataView === 'undefined') {
    return false;
  }

  return isDataViewToString.working
    ? isDataViewToString(value)
    : value instanceof DataView;
}
exports.isDataView = isDataView;

// Store a copy of SharedArrayBuffer in case it's deleted elsewhere
var SharedArrayBufferCopy = typeof SharedArrayBuffer !== 'undefined' ? SharedArrayBuffer : undefined;
function isSharedArrayBufferToString(value) {
  return ObjectToString(value) === '[object SharedArrayBuffer]';
}
function isSharedArrayBuffer(value) {
  if (typeof SharedArrayBufferCopy === 'undefined') {
    return false;
  }

  if (typeof isSharedArrayBufferToString.working === 'undefined') {
    isSharedArrayBufferToString.working = isSharedArrayBufferToString(new SharedArrayBufferCopy());
  }

  return isSharedArrayBufferToString.working
    ? isSharedArrayBufferToString(value)
    : value instanceof SharedArrayBufferCopy;
}
exports.isSharedArrayBuffer = isSharedArrayBuffer;

function isAsyncFunction(value) {
  return ObjectToString(value) === '[object AsyncFunction]';
}
exports.isAsyncFunction = isAsyncFunction;

function isMapIterator(value) {
  return ObjectToString(value) === '[object Map Iterator]';
}
exports.isMapIterator = isMapIterator;

function isSetIterator(value) {
  return ObjectToString(value) === '[object Set Iterator]';
}
exports.isSetIterator = isSetIterator;

function isGeneratorObject(value) {
  return ObjectToString(value) === '[object Generator]';
}
exports.isGeneratorObject = isGeneratorObject;

function isWebAssemblyCompiledModule(value) {
  return ObjectToString(value) === '[object WebAssembly.Module]';
}
exports.isWebAssemblyCompiledModule = isWebAssemblyCompiledModule;

function isNumberObject(value) {
  return checkBoxedPrimitive(value, numberValue);
}
exports.isNumberObject = isNumberObject;

function isStringObject(value) {
  return checkBoxedPrimitive(value, stringValue);
}
exports.isStringObject = isStringObject;

function isBooleanObject(value) {
  return checkBoxedPrimitive(value, booleanValue);
}
exports.isBooleanObject = isBooleanObject;

function isBigIntObject(value) {
  return BigIntSupported && checkBoxedPrimitive(value, bigIntValue);
}
exports.isBigIntObject = isBigIntObject;

function isSymbolObject(value) {
  return SymbolSupported && checkBoxedPrimitive(value, symbolValue);
}
exports.isSymbolObject = isSymbolObject;

function isBoxedPrimitive(value) {
  return (
    isNumberObject(value) ||
    isStringObject(value) ||
    isBooleanObject(value) ||
    isBigIntObject(value) ||
    isSymbolObject(value)
  );
}
exports.isBoxedPrimitive = isBoxedPrimitive;

function isAnyArrayBuffer(value) {
  return typeof Uint8Array !== 'undefined' && (
    isArrayBuffer(value) ||
    isSharedArrayBuffer(value)
  );
}
exports.isAnyArrayBuffer = isAnyArrayBuffer;

['isProxy', 'isExternal', 'isModuleNamespaceObject'].forEach(function(method) {
  Object.defineProperty(exports, method, {
    enumerable: false,
    value: function() {
      throw new Error(method + ' is not supported in userland');
    }
  });
});


/***/ }),

/***/ "./node_modules/util/util.js":
/*!***********************************!*\
  !*** ./node_modules/util/util.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

/* provided dependency */ var process = __webpack_require__(/*! ./node_modules/process/browser.js */ "./node_modules/process/browser.js");
/* provided dependency */ var console = __webpack_require__(/*! ./node_modules/console-browserify/index.js */ "./node_modules/console-browserify/index.js");
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

var getOwnPropertyDescriptors = Object.getOwnPropertyDescriptors ||
  function getOwnPropertyDescriptors(obj) {
    var keys = Object.keys(obj);
    var descriptors = {};
    for (var i = 0; i < keys.length; i++) {
      descriptors[keys[i]] = Object.getOwnPropertyDescriptor(obj, keys[i]);
    }
    return descriptors;
  };

var formatRegExp = /%[sdj%]/g;
exports.format = function(f) {
  if (!isString(f)) {
    var objects = [];
    for (var i = 0; i < arguments.length; i++) {
      objects.push(inspect(arguments[i]));
    }
    return objects.join(' ');
  }

  var i = 1;
  var args = arguments;
  var len = args.length;
  var str = String(f).replace(formatRegExp, function(x) {
    if (x === '%%') return '%';
    if (i >= len) return x;
    switch (x) {
      case '%s': return String(args[i++]);
      case '%d': return Number(args[i++]);
      case '%j':
        try {
          return JSON.stringify(args[i++]);
        } catch (_) {
          return '[Circular]';
        }
      default:
        return x;
    }
  });
  for (var x = args[i]; i < len; x = args[++i]) {
    if (isNull(x) || !isObject(x)) {
      str += ' ' + x;
    } else {
      str += ' ' + inspect(x);
    }
  }
  return str;
};


// Mark that a method should not be used.
// Returns a modified function which warns once by default.
// If --no-deprecation is set, then it is a no-op.
exports.deprecate = function(fn, msg) {
  if (typeof process !== 'undefined' && process.noDeprecation === true) {
    return fn;
  }

  // Allow for deprecating things in the process of starting up.
  if (typeof process === 'undefined') {
    return function() {
      return exports.deprecate(fn, msg).apply(this, arguments);
    };
  }

  var warned = false;
  function deprecated() {
    if (!warned) {
      if (process.throwDeprecation) {
        throw new Error(msg);
      } else if (process.traceDeprecation) {
        console.trace(msg);
      } else {
        console.error(msg);
      }
      warned = true;
    }
    return fn.apply(this, arguments);
  }

  return deprecated;
};


var debugs = {};
var debugEnvRegex = /^$/;

if (process.env.NODE_DEBUG) {
  var debugEnv = process.env.NODE_DEBUG;
  debugEnv = debugEnv.replace(/[|\\{}()[\]^$+?.]/g, '\\$&')
    .replace(/\*/g, '.*')
    .replace(/,/g, '$|^')
    .toUpperCase();
  debugEnvRegex = new RegExp('^' + debugEnv + '$', 'i');
}
exports.debuglog = function(set) {
  set = set.toUpperCase();
  if (!debugs[set]) {
    if (debugEnvRegex.test(set)) {
      var pid = process.pid;
      debugs[set] = function() {
        var msg = exports.format.apply(exports, arguments);
        console.error('%s %d: %s', set, pid, msg);
      };
    } else {
      debugs[set] = function() {};
    }
  }
  return debugs[set];
};


/**
 * Echos the value of a value. Trys to print the value out
 * in the best way possible given the different types.
 *
 * @param {Object} obj The object to print out.
 * @param {Object} opts Optional options object that alters the output.
 */
/* legacy: obj, showHidden, depth, colors*/
function inspect(obj, opts) {
  // default options
  var ctx = {
    seen: [],
    stylize: stylizeNoColor
  };
  // legacy...
  if (arguments.length >= 3) ctx.depth = arguments[2];
  if (arguments.length >= 4) ctx.colors = arguments[3];
  if (isBoolean(opts)) {
    // legacy...
    ctx.showHidden = opts;
  } else if (opts) {
    // got an "options" object
    exports._extend(ctx, opts);
  }
  // set default options
  if (isUndefined(ctx.showHidden)) ctx.showHidden = false;
  if (isUndefined(ctx.depth)) ctx.depth = 2;
  if (isUndefined(ctx.colors)) ctx.colors = false;
  if (isUndefined(ctx.customInspect)) ctx.customInspect = true;
  if (ctx.colors) ctx.stylize = stylizeWithColor;
  return formatValue(ctx, obj, ctx.depth);
}
exports.inspect = inspect;


// http://en.wikipedia.org/wiki/ANSI_escape_code#graphics
inspect.colors = {
  'bold' : [1, 22],
  'italic' : [3, 23],
  'underline' : [4, 24],
  'inverse' : [7, 27],
  'white' : [37, 39],
  'grey' : [90, 39],
  'black' : [30, 39],
  'blue' : [34, 39],
  'cyan' : [36, 39],
  'green' : [32, 39],
  'magenta' : [35, 39],
  'red' : [31, 39],
  'yellow' : [33, 39]
};

// Don't use 'blue' not visible on cmd.exe
inspect.styles = {
  'special': 'cyan',
  'number': 'yellow',
  'boolean': 'yellow',
  'undefined': 'grey',
  'null': 'bold',
  'string': 'green',
  'date': 'magenta',
  // "name": intentionally not styling
  'regexp': 'red'
};


function stylizeWithColor(str, styleType) {
  var style = inspect.styles[styleType];

  if (style) {
    return '\u001b[' + inspect.colors[style][0] + 'm' + str +
           '\u001b[' + inspect.colors[style][1] + 'm';
  } else {
    return str;
  }
}


function stylizeNoColor(str, styleType) {
  return str;
}


function arrayToHash(array) {
  var hash = {};

  array.forEach(function(val, idx) {
    hash[val] = true;
  });

  return hash;
}


function formatValue(ctx, value, recurseTimes) {
  // Provide a hook for user-specified inspect functions.
  // Check that value is an object with an inspect function on it
  if (ctx.customInspect &&
      value &&
      isFunction(value.inspect) &&
      // Filter out the util module, it's inspect function is special
      value.inspect !== exports.inspect &&
      // Also filter out any prototype objects using the circular check.
      !(value.constructor && value.constructor.prototype === value)) {
    var ret = value.inspect(recurseTimes, ctx);
    if (!isString(ret)) {
      ret = formatValue(ctx, ret, recurseTimes);
    }
    return ret;
  }

  // Primitive types cannot have properties
  var primitive = formatPrimitive(ctx, value);
  if (primitive) {
    return primitive;
  }

  // Look up the keys of the object.
  var keys = Object.keys(value);
  var visibleKeys = arrayToHash(keys);

  if (ctx.showHidden) {
    keys = Object.getOwnPropertyNames(value);
  }

  // IE doesn't make error fields non-enumerable
  // http://msdn.microsoft.com/en-us/library/ie/dww52sbt(v=vs.94).aspx
  if (isError(value)
      && (keys.indexOf('message') >= 0 || keys.indexOf('description') >= 0)) {
    return formatError(value);
  }

  // Some type of object without properties can be shortcutted.
  if (keys.length === 0) {
    if (isFunction(value)) {
      var name = value.name ? ': ' + value.name : '';
      return ctx.stylize('[Function' + name + ']', 'special');
    }
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    }
    if (isDate(value)) {
      return ctx.stylize(Date.prototype.toString.call(value), 'date');
    }
    if (isError(value)) {
      return formatError(value);
    }
  }

  var base = '', array = false, braces = ['{', '}'];

  // Make Array say that they are Array
  if (isArray(value)) {
    array = true;
    braces = ['[', ']'];
  }

  // Make functions say that they are functions
  if (isFunction(value)) {
    var n = value.name ? ': ' + value.name : '';
    base = ' [Function' + n + ']';
  }

  // Make RegExps say that they are RegExps
  if (isRegExp(value)) {
    base = ' ' + RegExp.prototype.toString.call(value);
  }

  // Make dates with properties first say the date
  if (isDate(value)) {
    base = ' ' + Date.prototype.toUTCString.call(value);
  }

  // Make error with message first say the error
  if (isError(value)) {
    base = ' ' + formatError(value);
  }

  if (keys.length === 0 && (!array || value.length == 0)) {
    return braces[0] + base + braces[1];
  }

  if (recurseTimes < 0) {
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    } else {
      return ctx.stylize('[Object]', 'special');
    }
  }

  ctx.seen.push(value);

  var output;
  if (array) {
    output = formatArray(ctx, value, recurseTimes, visibleKeys, keys);
  } else {
    output = keys.map(function(key) {
      return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
    });
  }

  ctx.seen.pop();

  return reduceToSingleString(output, base, braces);
}


function formatPrimitive(ctx, value) {
  if (isUndefined(value))
    return ctx.stylize('undefined', 'undefined');
  if (isString(value)) {
    var simple = '\'' + JSON.stringify(value).replace(/^"|"$/g, '')
                                             .replace(/'/g, "\\'")
                                             .replace(/\\"/g, '"') + '\'';
    return ctx.stylize(simple, 'string');
  }
  if (isNumber(value))
    return ctx.stylize('' + value, 'number');
  if (isBoolean(value))
    return ctx.stylize('' + value, 'boolean');
  // For some reason typeof null is "object", so special case here.
  if (isNull(value))
    return ctx.stylize('null', 'null');
}


function formatError(value) {
  return '[' + Error.prototype.toString.call(value) + ']';
}


function formatArray(ctx, value, recurseTimes, visibleKeys, keys) {
  var output = [];
  for (var i = 0, l = value.length; i < l; ++i) {
    if (hasOwnProperty(value, String(i))) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
          String(i), true));
    } else {
      output.push('');
    }
  }
  keys.forEach(function(key) {
    if (!key.match(/^\d+$/)) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
          key, true));
    }
  });
  return output;
}


function formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {
  var name, str, desc;
  desc = Object.getOwnPropertyDescriptor(value, key) || { value: value[key] };
  if (desc.get) {
    if (desc.set) {
      str = ctx.stylize('[Getter/Setter]', 'special');
    } else {
      str = ctx.stylize('[Getter]', 'special');
    }
  } else {
    if (desc.set) {
      str = ctx.stylize('[Setter]', 'special');
    }
  }
  if (!hasOwnProperty(visibleKeys, key)) {
    name = '[' + key + ']';
  }
  if (!str) {
    if (ctx.seen.indexOf(desc.value) < 0) {
      if (isNull(recurseTimes)) {
        str = formatValue(ctx, desc.value, null);
      } else {
        str = formatValue(ctx, desc.value, recurseTimes - 1);
      }
      if (str.indexOf('\n') > -1) {
        if (array) {
          str = str.split('\n').map(function(line) {
            return '  ' + line;
          }).join('\n').slice(2);
        } else {
          str = '\n' + str.split('\n').map(function(line) {
            return '   ' + line;
          }).join('\n');
        }
      }
    } else {
      str = ctx.stylize('[Circular]', 'special');
    }
  }
  if (isUndefined(name)) {
    if (array && key.match(/^\d+$/)) {
      return str;
    }
    name = JSON.stringify('' + key);
    if (name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
      name = name.slice(1, -1);
      name = ctx.stylize(name, 'name');
    } else {
      name = name.replace(/'/g, "\\'")
                 .replace(/\\"/g, '"')
                 .replace(/(^"|"$)/g, "'");
      name = ctx.stylize(name, 'string');
    }
  }

  return name + ': ' + str;
}


function reduceToSingleString(output, base, braces) {
  var numLinesEst = 0;
  var length = output.reduce(function(prev, cur) {
    numLinesEst++;
    if (cur.indexOf('\n') >= 0) numLinesEst++;
    return prev + cur.replace(/\u001b\[\d\d?m/g, '').length + 1;
  }, 0);

  if (length > 60) {
    return braces[0] +
           (base === '' ? '' : base + '\n ') +
           ' ' +
           output.join(',\n  ') +
           ' ' +
           braces[1];
  }

  return braces[0] + base + ' ' + output.join(', ') + ' ' + braces[1];
}


// NOTE: These type checking functions intentionally don't use `instanceof`
// because it is fragile and can be easily faked with `Object.create()`.
exports.types = __webpack_require__(/*! ./support/types */ "./node_modules/util/support/types.js");

function isArray(ar) {
  return Array.isArray(ar);
}
exports.isArray = isArray;

function isBoolean(arg) {
  return typeof arg === 'boolean';
}
exports.isBoolean = isBoolean;

function isNull(arg) {
  return arg === null;
}
exports.isNull = isNull;

function isNullOrUndefined(arg) {
  return arg == null;
}
exports.isNullOrUndefined = isNullOrUndefined;

function isNumber(arg) {
  return typeof arg === 'number';
}
exports.isNumber = isNumber;

function isString(arg) {
  return typeof arg === 'string';
}
exports.isString = isString;

function isSymbol(arg) {
  return typeof arg === 'symbol';
}
exports.isSymbol = isSymbol;

function isUndefined(arg) {
  return arg === void 0;
}
exports.isUndefined = isUndefined;

function isRegExp(re) {
  return isObject(re) && objectToString(re) === '[object RegExp]';
}
exports.isRegExp = isRegExp;
exports.types.isRegExp = isRegExp;

function isObject(arg) {
  return typeof arg === 'object' && arg !== null;
}
exports.isObject = isObject;

function isDate(d) {
  return isObject(d) && objectToString(d) === '[object Date]';
}
exports.isDate = isDate;
exports.types.isDate = isDate;

function isError(e) {
  return isObject(e) &&
      (objectToString(e) === '[object Error]' || e instanceof Error);
}
exports.isError = isError;
exports.types.isNativeError = isError;

function isFunction(arg) {
  return typeof arg === 'function';
}
exports.isFunction = isFunction;

function isPrimitive(arg) {
  return arg === null ||
         typeof arg === 'boolean' ||
         typeof arg === 'number' ||
         typeof arg === 'string' ||
         typeof arg === 'symbol' ||  // ES6 symbol
         typeof arg === 'undefined';
}
exports.isPrimitive = isPrimitive;

exports.isBuffer = __webpack_require__(/*! ./support/isBuffer */ "./node_modules/util/support/isBufferBrowser.js");

function objectToString(o) {
  return Object.prototype.toString.call(o);
}


function pad(n) {
  return n < 10 ? '0' + n.toString(10) : n.toString(10);
}


var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep',
              'Oct', 'Nov', 'Dec'];

// 26 Feb 16:19:34
function timestamp() {
  var d = new Date();
  var time = [pad(d.getHours()),
              pad(d.getMinutes()),
              pad(d.getSeconds())].join(':');
  return [d.getDate(), months[d.getMonth()], time].join(' ');
}


// log is just a thin wrapper to console.log that prepends a timestamp
exports.log = function() {
  console.log('%s - %s', timestamp(), exports.format.apply(exports, arguments));
};


/**
 * Inherit the prototype methods from one constructor into another.
 *
 * The Function.prototype.inherits from lang.js rewritten as a standalone
 * function (not on Function.prototype). NOTE: If this file is to be loaded
 * during bootstrapping this function needs to be rewritten using some native
 * functions as prototype setup using normal JavaScript does not work as
 * expected during bootstrapping (see mirror.js in r114903).
 *
 * @param {function} ctor Constructor function which needs to inherit the
 *     prototype.
 * @param {function} superCtor Constructor function to inherit prototype from.
 */
exports.inherits = __webpack_require__(/*! inherits */ "./node_modules/inherits/inherits_browser.js");

exports._extend = function(origin, add) {
  // Don't do anything if add isn't an object
  if (!add || !isObject(add)) return origin;

  var keys = Object.keys(add);
  var i = keys.length;
  while (i--) {
    origin[keys[i]] = add[keys[i]];
  }
  return origin;
};

function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

var kCustomPromisifiedSymbol = typeof Symbol !== 'undefined' ? Symbol('util.promisify.custom') : undefined;

exports.promisify = function promisify(original) {
  if (typeof original !== 'function')
    throw new TypeError('The "original" argument must be of type Function');

  if (kCustomPromisifiedSymbol && original[kCustomPromisifiedSymbol]) {
    var fn = original[kCustomPromisifiedSymbol];
    if (typeof fn !== 'function') {
      throw new TypeError('The "util.promisify.custom" argument must be of type Function');
    }
    Object.defineProperty(fn, kCustomPromisifiedSymbol, {
      value: fn, enumerable: false, writable: false, configurable: true
    });
    return fn;
  }

  function fn() {
    var promiseResolve, promiseReject;
    var promise = new Promise(function (resolve, reject) {
      promiseResolve = resolve;
      promiseReject = reject;
    });

    var args = [];
    for (var i = 0; i < arguments.length; i++) {
      args.push(arguments[i]);
    }
    args.push(function (err, value) {
      if (err) {
        promiseReject(err);
      } else {
        promiseResolve(value);
      }
    });

    try {
      original.apply(this, args);
    } catch (err) {
      promiseReject(err);
    }

    return promise;
  }

  Object.setPrototypeOf(fn, Object.getPrototypeOf(original));

  if (kCustomPromisifiedSymbol) Object.defineProperty(fn, kCustomPromisifiedSymbol, {
    value: fn, enumerable: false, writable: false, configurable: true
  });
  return Object.defineProperties(
    fn,
    getOwnPropertyDescriptors(original)
  );
}

exports.promisify.custom = kCustomPromisifiedSymbol

function callbackifyOnRejected(reason, cb) {
  // `!reason` guard inspired by bluebird (Ref: https://goo.gl/t5IS6M).
  // Because `null` is a special error value in callbacks which means "no error
  // occurred", we error-wrap so the callback consumer can distinguish between
  // "the promise rejected with null" or "the promise fulfilled with undefined".
  if (!reason) {
    var newReason = new Error('Promise was rejected with a falsy value');
    newReason.reason = reason;
    reason = newReason;
  }
  return cb(reason);
}

function callbackify(original) {
  if (typeof original !== 'function') {
    throw new TypeError('The "original" argument must be of type Function');
  }

  // We DO NOT return the promise as it gives the user a false sense that
  // the promise is actually somehow related to the callback's execution
  // and that the callback throwing will reject the promise.
  function callbackified() {
    var args = [];
    for (var i = 0; i < arguments.length; i++) {
      args.push(arguments[i]);
    }

    var maybeCb = args.pop();
    if (typeof maybeCb !== 'function') {
      throw new TypeError('The last argument must be of type Function');
    }
    var self = this;
    var cb = function() {
      return maybeCb.apply(self, arguments);
    };
    // In true node style we process the callback on `nextTick` with all the
    // implications (stack, `uncaughtException`, `async_hooks`)
    original.apply(this, args)
      .then(function(ret) { process.nextTick(cb.bind(null, null, ret)) },
            function(rej) { process.nextTick(callbackifyOnRejected.bind(null, rej, cb)) });
  }

  Object.setPrototypeOf(callbackified, Object.getPrototypeOf(original));
  Object.defineProperties(callbackified,
                          getOwnPropertyDescriptors(original));
  return callbackified;
}
exports.callbackify = callbackify;


/***/ }),

/***/ "./node_modules/vanilla-tilt/lib/vanilla-tilt.js":
/*!*******************************************************!*\
  !*** ./node_modules/vanilla-tilt/lib/vanilla-tilt.js ***!
  \*******************************************************/
/***/ ((module) => {

"use strict";


var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

/**
 * Created by Sergiu Șandor (micku7zu) on 1/27/2017.
 * Original idea: https://github.com/gijsroge/tilt.js
 * MIT License.
 * Version 1.8.1
 */

var VanillaTilt = function () {
  function VanillaTilt(element) {
    var settings = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    classCallCheck(this, VanillaTilt);

    if (!(element instanceof Node)) {
      throw "Can't initialize VanillaTilt because " + element + " is not a Node.";
    }

    this.width = null;
    this.height = null;
    this.clientWidth = null;
    this.clientHeight = null;
    this.left = null;
    this.top = null;

    // for Gyroscope sampling
    this.gammazero = null;
    this.betazero = null;
    this.lastgammazero = null;
    this.lastbetazero = null;

    this.transitionTimeout = null;
    this.updateCall = null;
    this.event = null;

    this.updateBind = this.update.bind(this);
    this.resetBind = this.reset.bind(this);

    this.element = element;
    this.settings = this.extendSettings(settings);

    this.reverse = this.settings.reverse ? -1 : 1;
    this.resetToStart = VanillaTilt.isSettingTrue(this.settings["reset-to-start"]);
    this.glare = VanillaTilt.isSettingTrue(this.settings.glare);
    this.glarePrerender = VanillaTilt.isSettingTrue(this.settings["glare-prerender"]);
    this.fullPageListening = VanillaTilt.isSettingTrue(this.settings["full-page-listening"]);
    this.gyroscope = VanillaTilt.isSettingTrue(this.settings.gyroscope);
    this.gyroscopeSamples = this.settings.gyroscopeSamples;

    this.elementListener = this.getElementListener();

    if (this.glare) {
      this.prepareGlare();
    }

    if (this.fullPageListening) {
      this.updateClientSize();
    }

    this.addEventListeners();
    this.reset();

    if (this.resetToStart === false) {
      this.settings.startX = 0;
      this.settings.startY = 0;
    }
  }

  VanillaTilt.isSettingTrue = function isSettingTrue(setting) {
    return setting === "" || setting === true || setting === 1;
  };

  /**
   * Method returns element what will be listen mouse events
   * @return {Node}
   */


  VanillaTilt.prototype.getElementListener = function getElementListener() {
    if (this.fullPageListening) {
      return window.document;
    }

    if (typeof this.settings["mouse-event-element"] === "string") {
      var mouseEventElement = document.querySelector(this.settings["mouse-event-element"]);

      if (mouseEventElement) {
        return mouseEventElement;
      }
    }

    if (this.settings["mouse-event-element"] instanceof Node) {
      return this.settings["mouse-event-element"];
    }

    return this.element;
  };

  /**
   * Method set listen methods for this.elementListener
   * @return {Node}
   */


  VanillaTilt.prototype.addEventListeners = function addEventListeners() {
    this.onMouseEnterBind = this.onMouseEnter.bind(this);
    this.onMouseMoveBind = this.onMouseMove.bind(this);
    this.onMouseLeaveBind = this.onMouseLeave.bind(this);
    this.onWindowResizeBind = this.onWindowResize.bind(this);
    this.onDeviceOrientationBind = this.onDeviceOrientation.bind(this);

    this.elementListener.addEventListener("mouseenter", this.onMouseEnterBind);
    this.elementListener.addEventListener("mouseleave", this.onMouseLeaveBind);
    this.elementListener.addEventListener("mousemove", this.onMouseMoveBind);

    if (this.glare || this.fullPageListening) {
      window.addEventListener("resize", this.onWindowResizeBind);
    }

    if (this.gyroscope) {
      window.addEventListener("deviceorientation", this.onDeviceOrientationBind);
    }
  };

  /**
   * Method remove event listeners from current this.elementListener
   */


  VanillaTilt.prototype.removeEventListeners = function removeEventListeners() {
    this.elementListener.removeEventListener("mouseenter", this.onMouseEnterBind);
    this.elementListener.removeEventListener("mouseleave", this.onMouseLeaveBind);
    this.elementListener.removeEventListener("mousemove", this.onMouseMoveBind);

    if (this.gyroscope) {
      window.removeEventListener("deviceorientation", this.onDeviceOrientationBind);
    }

    if (this.glare || this.fullPageListening) {
      window.removeEventListener("resize", this.onWindowResizeBind);
    }
  };

  VanillaTilt.prototype.destroy = function destroy() {
    clearTimeout(this.transitionTimeout);
    if (this.updateCall !== null) {
      cancelAnimationFrame(this.updateCall);
    }

    this.element.style.willChange = "";
    this.element.style.transition = "";
    this.element.style.transform = "";
    this.resetGlare();

    this.removeEventListeners();
    this.element.vanillaTilt = null;
    delete this.element.vanillaTilt;

    this.element = null;
  };

  VanillaTilt.prototype.onDeviceOrientation = function onDeviceOrientation(event) {
    if (event.gamma === null || event.beta === null) {
      return;
    }

    this.updateElementPosition();

    if (this.gyroscopeSamples > 0) {
      this.lastgammazero = this.gammazero;
      this.lastbetazero = this.betazero;

      if (this.gammazero === null) {
        this.gammazero = event.gamma;
        this.betazero = event.beta;
      } else {
        this.gammazero = (event.gamma + this.lastgammazero) / 2;
        this.betazero = (event.beta + this.lastbetazero) / 2;
      }

      this.gyroscopeSamples -= 1;
    }

    var totalAngleX = this.settings.gyroscopeMaxAngleX - this.settings.gyroscopeMinAngleX;
    var totalAngleY = this.settings.gyroscopeMaxAngleY - this.settings.gyroscopeMinAngleY;

    var degreesPerPixelX = totalAngleX / this.width;
    var degreesPerPixelY = totalAngleY / this.height;

    var angleX = event.gamma - (this.settings.gyroscopeMinAngleX + this.gammazero);
    var angleY = event.beta - (this.settings.gyroscopeMinAngleY + this.betazero);

    var posX = angleX / degreesPerPixelX;
    var posY = angleY / degreesPerPixelY;

    if (this.updateCall !== null) {
      cancelAnimationFrame(this.updateCall);
    }

    this.event = {
      clientX: posX + this.left,
      clientY: posY + this.top
    };

    this.updateCall = requestAnimationFrame(this.updateBind);
  };

  VanillaTilt.prototype.onMouseEnter = function onMouseEnter() {
    this.updateElementPosition();
    this.element.style.willChange = "transform";
    this.setTransition();
  };

  VanillaTilt.prototype.onMouseMove = function onMouseMove(event) {
    if (this.updateCall !== null) {
      cancelAnimationFrame(this.updateCall);
    }

    this.event = event;
    this.updateCall = requestAnimationFrame(this.updateBind);
  };

  VanillaTilt.prototype.onMouseLeave = function onMouseLeave() {
    this.setTransition();

    if (this.settings.reset) {
      requestAnimationFrame(this.resetBind);
    }
  };

  VanillaTilt.prototype.reset = function reset() {
    this.onMouseEnter();

    if (this.fullPageListening) {
      this.event = {
        clientX: (this.settings.startX + this.settings.max) / (2 * this.settings.max) * this.clientWidth,
        clientY: (this.settings.startY + this.settings.max) / (2 * this.settings.max) * this.clientHeight
      };
    } else {
      this.event = {
        clientX: this.left + (this.settings.startX + this.settings.max) / (2 * this.settings.max) * this.width,
        clientY: this.top + (this.settings.startY + this.settings.max) / (2 * this.settings.max) * this.height
      };
    }

    var backupScale = this.settings.scale;
    this.settings.scale = 1;
    this.update();
    this.settings.scale = backupScale;
    this.resetGlare();
  };

  VanillaTilt.prototype.resetGlare = function resetGlare() {
    if (this.glare) {
      this.glareElement.style.transform = "rotate(180deg) translate(-50%, -50%)";
      this.glareElement.style.opacity = "0";
    }
  };

  VanillaTilt.prototype.getValues = function getValues() {
    var x = void 0,
        y = void 0;

    if (this.fullPageListening) {
      x = this.event.clientX / this.clientWidth;
      y = this.event.clientY / this.clientHeight;
    } else {
      x = (this.event.clientX - this.left) / this.width;
      y = (this.event.clientY - this.top) / this.height;
    }

    x = Math.min(Math.max(x, 0), 1);
    y = Math.min(Math.max(y, 0), 1);

    var tiltX = (this.reverse * (this.settings.max - x * this.settings.max * 2)).toFixed(2);
    var tiltY = (this.reverse * (y * this.settings.max * 2 - this.settings.max)).toFixed(2);
    var angle = Math.atan2(this.event.clientX - (this.left + this.width / 2), -(this.event.clientY - (this.top + this.height / 2))) * (180 / Math.PI);

    return {
      tiltX: tiltX,
      tiltY: tiltY,
      percentageX: x * 100,
      percentageY: y * 100,
      angle: angle
    };
  };

  VanillaTilt.prototype.updateElementPosition = function updateElementPosition() {
    var rect = this.element.getBoundingClientRect();

    this.width = this.element.offsetWidth;
    this.height = this.element.offsetHeight;
    this.left = rect.left;
    this.top = rect.top;
  };

  VanillaTilt.prototype.update = function update() {
    var values = this.getValues();

    this.element.style.transform = "perspective(" + this.settings.perspective + "px) " + "rotateX(" + (this.settings.axis === "x" ? 0 : values.tiltY) + "deg) " + "rotateY(" + (this.settings.axis === "y" ? 0 : values.tiltX) + "deg) " + "scale3d(" + this.settings.scale + ", " + this.settings.scale + ", " + this.settings.scale + ")";

    if (this.glare) {
      this.glareElement.style.transform = "rotate(" + values.angle + "deg) translate(-50%, -50%)";
      this.glareElement.style.opacity = "" + values.percentageY * this.settings["max-glare"] / 100;
    }

    this.element.dispatchEvent(new CustomEvent("tiltChange", {
      "detail": values
    }));

    this.updateCall = null;
  };

  /**
   * Appends the glare element (if glarePrerender equals false)
   * and sets the default style
   */


  VanillaTilt.prototype.prepareGlare = function prepareGlare() {
    // If option pre-render is enabled we assume all html/css is present for an optimal glare effect.
    if (!this.glarePrerender) {
      // Create glare element
      var jsTiltGlare = document.createElement("div");
      jsTiltGlare.classList.add("js-tilt-glare");

      var jsTiltGlareInner = document.createElement("div");
      jsTiltGlareInner.classList.add("js-tilt-glare-inner");

      jsTiltGlare.appendChild(jsTiltGlareInner);
      this.element.appendChild(jsTiltGlare);
    }

    this.glareElementWrapper = this.element.querySelector(".js-tilt-glare");
    this.glareElement = this.element.querySelector(".js-tilt-glare-inner");

    if (this.glarePrerender) {
      return;
    }

    Object.assign(this.glareElementWrapper.style, {
      "position": "absolute",
      "top": "0",
      "left": "0",
      "width": "100%",
      "height": "100%",
      "overflow": "hidden",
      "pointer-events": "none",
      "border-radius": "inherit"
    });

    Object.assign(this.glareElement.style, {
      "position": "absolute",
      "top": "50%",
      "left": "50%",
      "pointer-events": "none",
      "background-image": "linear-gradient(0deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 100%)",
      "transform": "rotate(180deg) translate(-50%, -50%)",
      "transform-origin": "0% 0%",
      "opacity": "0"
    });

    this.updateGlareSize();
  };

  VanillaTilt.prototype.updateGlareSize = function updateGlareSize() {
    if (this.glare) {
      var glareSize = (this.element.offsetWidth > this.element.offsetHeight ? this.element.offsetWidth : this.element.offsetHeight) * 2;

      Object.assign(this.glareElement.style, {
        "width": glareSize + "px",
        "height": glareSize + "px"
      });
    }
  };

  VanillaTilt.prototype.updateClientSize = function updateClientSize() {
    this.clientWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

    this.clientHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
  };

  VanillaTilt.prototype.onWindowResize = function onWindowResize() {
    this.updateGlareSize();
    this.updateClientSize();
  };

  VanillaTilt.prototype.setTransition = function setTransition() {
    var _this = this;

    clearTimeout(this.transitionTimeout);
    this.element.style.transition = this.settings.speed + "ms " + this.settings.easing;
    if (this.glare) this.glareElement.style.transition = "opacity " + this.settings.speed + "ms " + this.settings.easing;

    this.transitionTimeout = setTimeout(function () {
      _this.element.style.transition = "";
      if (_this.glare) {
        _this.glareElement.style.transition = "";
      }
    }, this.settings.speed);
  };

  /**
   * Method return patched settings of instance
   * @param {boolean} settings.reverse - reverse the tilt direction
   * @param {number} settings.max - max tilt rotation (degrees)
   * @param {startX} settings.startX - the starting tilt on the X axis, in degrees. Default: 0
   * @param {startY} settings.startY - the starting tilt on the Y axis, in degrees. Default: 0
   * @param {number} settings.perspective - Transform perspective, the lower the more extreme the tilt gets
   * @param {string} settings.easing - Easing on enter/exit
   * @param {number} settings.scale - 2 = 200%, 1.5 = 150%, etc..
   * @param {number} settings.speed - Speed of the enter/exit transition
   * @param {boolean} settings.transition - Set a transition on enter/exit
   * @param {string|null} settings.axis - What axis should be enabled. Can be "x" or "y"
   * @param {boolean} settings.glare - if it should have a "glare" effect
   * @param {number} settings.max-glare - the maximum "glare" opacity (1 = 100%, 0.5 = 50%)
   * @param {boolean} settings.glare-prerender - false = VanillaTilt creates the glare elements for you, otherwise
   * @param {boolean} settings.full-page-listening - If true, parallax effect will listen to mouse move events on the whole document, not only the selected element
   * @param {string|object} settings.mouse-event-element - String selector or link to HTML-element what will be listen mouse events
   * @param {boolean} settings.reset - false = If the tilt effect has to be reset on exit
   * @param {boolean} settings.reset-to-start - true = On reset event (mouse leave) will return to initial start angle (if startX or startY is set)
   * @param {gyroscope} settings.gyroscope - Enable tilting by deviceorientation events
   * @param {gyroscopeSensitivity} settings.gyroscopeSensitivity - Between 0 and 1 - The angle at which max tilt position is reached. 1 = 90deg, 0.5 = 45deg, etc..
   * @param {gyroscopeSamples} settings.gyroscopeSamples - How many gyroscope moves to decide the starting position.
   */


  VanillaTilt.prototype.extendSettings = function extendSettings(settings) {
    var defaultSettings = {
      reverse: false,
      max: 15,
      startX: 0,
      startY: 0,
      perspective: 1000,
      easing: "cubic-bezier(.03,.98,.52,.99)",
      scale: 1,
      speed: 300,
      transition: true,
      axis: null,
      glare: false,
      "max-glare": 1,
      "glare-prerender": false,
      "full-page-listening": false,
      "mouse-event-element": null,
      reset: true,
      "reset-to-start": true,
      gyroscope: true,
      gyroscopeMinAngleX: -45,
      gyroscopeMaxAngleX: 45,
      gyroscopeMinAngleY: -45,
      gyroscopeMaxAngleY: 45,
      gyroscopeSamples: 10
    };

    var newSettings = {};
    for (var property in defaultSettings) {
      if (property in settings) {
        newSettings[property] = settings[property];
      } else if (this.element.hasAttribute("data-tilt-" + property)) {
        var attribute = this.element.getAttribute("data-tilt-" + property);
        try {
          newSettings[property] = JSON.parse(attribute);
        } catch (e) {
          newSettings[property] = attribute;
        }
      } else {
        newSettings[property] = defaultSettings[property];
      }
    }

    return newSettings;
  };

  VanillaTilt.init = function init(elements, settings) {
    if (elements instanceof Node) {
      elements = [elements];
    }

    if (elements instanceof NodeList) {
      elements = [].slice.call(elements);
    }

    if (!(elements instanceof Array)) {
      return;
    }

    elements.forEach(function (element) {
      if (!("vanillaTilt" in element)) {
        element.vanillaTilt = new VanillaTilt(element, settings);
      }
    });
  };

  return VanillaTilt;
}();

if (typeof document !== "undefined") {
  /* expose the class to window */
  window.VanillaTilt = VanillaTilt;

  /**
   * Auto load
   */
  VanillaTilt.init(document.querySelectorAll("[data-tilt]"));
}

module.exports = VanillaTilt;


/***/ }),

/***/ "./node_modules/which-typed-array/index.js":
/*!*************************************************!*\
  !*** ./node_modules/which-typed-array/index.js ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var forEach = __webpack_require__(/*! for-each */ "./node_modules/for-each/index.js");
var availableTypedArrays = __webpack_require__(/*! available-typed-arrays */ "./node_modules/available-typed-arrays/index.js");
var callBound = __webpack_require__(/*! call-bind/callBound */ "./node_modules/call-bind/callBound.js");
var gOPD = __webpack_require__(/*! gopd */ "./node_modules/gopd/index.js");

var $toString = callBound('Object.prototype.toString');
var hasToStringTag = __webpack_require__(/*! has-tostringtag/shams */ "./node_modules/has-tostringtag/shams.js")();

var g = typeof globalThis === 'undefined' ? __webpack_require__.g : globalThis;
var typedArrays = availableTypedArrays();

var $slice = callBound('String.prototype.slice');
var toStrTags = {};
var getPrototypeOf = Object.getPrototypeOf; // require('getprototypeof');
if (hasToStringTag && gOPD && getPrototypeOf) {
	forEach(typedArrays, function (typedArray) {
		if (typeof g[typedArray] === 'function') {
			var arr = new g[typedArray]();
			if (Symbol.toStringTag in arr) {
				var proto = getPrototypeOf(arr);
				var descriptor = gOPD(proto, Symbol.toStringTag);
				if (!descriptor) {
					var superProto = getPrototypeOf(proto);
					descriptor = gOPD(superProto, Symbol.toStringTag);
				}
				toStrTags[typedArray] = descriptor.get;
			}
		}
	});
}

var tryTypedArrays = function tryAllTypedArrays(value) {
	var foundName = false;
	forEach(toStrTags, function (getter, typedArray) {
		if (!foundName) {
			try {
				var name = getter.call(value);
				if (name === typedArray) {
					foundName = name;
				}
			} catch (e) {}
		}
	});
	return foundName;
};

var isTypedArray = __webpack_require__(/*! is-typed-array */ "./node_modules/is-typed-array/index.js");

module.exports = function whichTypedArray(value) {
	if (!isTypedArray(value)) { return false; }
	if (!hasToStringTag || !(Symbol.toStringTag in value)) { return $slice($toString(value), 8, -1); }
	return tryTypedArrays(value);
};


/***/ }),

/***/ "./node_modules/available-typed-arrays/index.js":
/*!******************************************************!*\
  !*** ./node_modules/available-typed-arrays/index.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var possibleNames = [
	'BigInt64Array',
	'BigUint64Array',
	'Float32Array',
	'Float64Array',
	'Int16Array',
	'Int32Array',
	'Int8Array',
	'Uint16Array',
	'Uint32Array',
	'Uint8Array',
	'Uint8ClampedArray'
];

var g = typeof globalThis === 'undefined' ? __webpack_require__.g : globalThis;

module.exports = function availableTypedArrays() {
	var out = [];
	for (var i = 0; i < possibleNames.length; i++) {
		if (typeof g[possibleNames[i]] === 'function') {
			out[out.length] = possibleNames[i];
		}
	}
	return out;
};


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**************************!*\
  !*** ./src/js/module.js ***!
  \**************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vanilla_tilt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vanilla-tilt */ "./node_modules/vanilla-tilt/lib/vanilla-tilt.js");
/* harmony import */ var vanilla_tilt__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vanilla_tilt__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fancyapps_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fancyapps/ui */ "./node_modules/@fancyapps/ui/dist/index.esm.js");

var ua = window.navigator.userAgent;
var msie = ua.indexOf("MSIE ");
var isMobile = {
  Android: function Android() {
    return navigator.userAgent.match(/Android/i);
  },
  BlackBerry: function BlackBerry() {
    return navigator.userAgent.match(/BlackBerry/i);
  },
  iOS: function iOS() {
    return navigator.userAgent.match(/iPhone|iPad|iPod/i);
  },
  Opera: function Opera() {
    return navigator.userAgent.match(/Opera Mini/i);
  },
  Windows: function Windows() {
    return navigator.userAgent.match(/IEMobile/i);
  },
  any: function any() {
    return isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows();
  }
};
function vanillaTilt(item, max, speed) {
  var items = document.querySelectorAll(item);
  vanilla_tilt__WEBPACK_IMPORTED_MODULE_0___default().init(items, {
    max: max,
    speed: speed
  });
}
vanillaTilt('.cards__item', 5, 900);
vanillaTilt('.cost__slot', 5, 900);
vanillaTilt('.b0__item', 5, 900);
vanillaTilt('.masters__item', 5, 900);
vanillaTilt('.how__item', 5, 900);
vanillaTilt('.block2__item', 5, 900);
vanillaTilt('.services-block2__item', 5, 900);
vanillaTilt('.service-block6__item', 5, 900);

_fancyapps_ui__WEBPACK_IMPORTED_MODULE_1__.Fancybox.bind("[data-fancybox]", {});
$('.service-block6__link').parallax({
  mouseport: $('.service-block6__item'),
  decay: 0
});
new Swiper('.services-block4__slider', {
  navigation: {
    nextEl: '.button-next',
    prevEl: '.button-prev'
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  breakpoints: {
    320: {
      // slidesPerView: 1,
      spaceBetween: 30,
      slidesPerView: "auto",
      centeredSlides: true
    },
    600: {
      slidesPerView: 2,
      spaceBetween: 10
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 30
    }
  }
});
new Swiper('.services-block5__slider', {
  navigation: {
    nextEl: '.button-next',
    prevEl: '.button-prev'
  },
  breakpoints: {
    320: {
      spaceBetween: 30,
      slidesPerView: "auto",
      centeredSlides: true
    },
    600: {
      slidesPerView: 2,
      spaceBetween: 10
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 30
    }
  }
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBLElBQUk7OztBQUdKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsR0FBRzs7O0FBR0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxHQUFHOzs7QUFHSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQSwwREFBMEQ7O0FBRTFEO0FBQ0E7QUFDQSxNQUFNOzs7QUFHTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUEsc0NBQXNDO0FBQ3RDOztBQUVBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsSUFBSTs7O0FBR0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSx5QkFBeUI7QUFDekI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsbUNBQW1DOztBQUVuQztBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQSxNQUFNO0FBQ047QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLDZGQUE2RixlQUFlO0FBQzVHO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLDZGQUE2RixlQUFlO0FBQzVHO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBLDZGQUE2RixlQUFlO0FBQzVHO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLDZGQUE2RixlQUFlO0FBQzVHO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLLEdBQUc7O0FBRVI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQjs7QUFFcEI7O0FBRUEsc0JBQXNCLGlCQUFpQjtBQUN2QztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHOzs7QUFHSDtBQUNBLHlFQUF5RSxlQUFlO0FBQ3hGO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEOzs7Ozs7Ozs7Ozs7QUN0bkJBO0FBQ0E7QUFDYTs7QUFFYixpQ0FBaUMsZ0JBQWdCLHNCQUFzQixPQUFPLHVEQUF1RCxtQ0FBbUMsMERBQTBELHNGQUFzRixpRUFBaUUsTUFBTSxpQ0FBaUMsNENBQTRDLEtBQUs7O0FBRWpkLDRDQUE0QyxrQkFBa0Isa0NBQWtDLG9FQUFvRSxLQUFLLE9BQU8sb0JBQW9COztBQUVwTSxrREFBa0QsMENBQTBDOztBQUU1Riw0Q0FBNEMsZ0JBQWdCLGtCQUFrQixPQUFPLDJCQUEyQix3REFBd0QsZ0NBQWdDLHVEQUF1RDs7QUFFL1AsOERBQThELHNFQUFzRSw4REFBOEQ7O0FBRWxNLGtEQUFrRCwwRUFBMEUsZUFBZTs7QUFFM0ksd0NBQXdDLHVCQUF1Qix5RkFBeUY7O0FBRXhKLDJDQUEyQywrREFBK0QsNkVBQTZFLHlFQUF5RSxlQUFlLHVEQUF1RCxHQUFHOztBQUV6VSxtQ0FBbUMsZ0VBQWdFLHNEQUFzRCwrREFBK0QsbUNBQW1DLDZFQUE2RSxxQ0FBcUMsaURBQWlELDhCQUE4QixxQkFBcUIsMEVBQTBFLHFEQUFxRCxlQUFlLHlFQUF5RSxHQUFHLDJDQUEyQzs7QUFFdHRCLHNDQUFzQyx3RUFBd0UsMENBQTBDLDhDQUE4QyxNQUFNLHVFQUF1RSxJQUFJLGVBQWUsWUFBWTs7QUFFbFQsMkNBQTJDLGtDQUFrQyxrQ0FBa0MsT0FBTyx3REFBd0QsZ0JBQWdCLHVCQUF1QixrREFBa0Qsa0NBQWtDLHVEQUF1RCxzQkFBc0I7O0FBRXRYLGlDQUFpQzs7QUFFakMsaUNBQWlDLDRFQUE0RSxpQkFBaUIsYUFBYTs7QUFFM0ksOEJBQThCLGdHQUFnRyxtREFBbUQ7O0FBRWpMLHdCQUF3QiwyRUFBMkUsa0NBQWtDLHdCQUF3QixPQUFPLGtDQUFrQyxtSUFBbUk7O0FBRXpVLGVBQWUsbUJBQU8sQ0FBQywwQ0FBTztBQUM5Qjs7QUFFQSxnQkFBZ0IsbUJBQU8sQ0FBQyxpRUFBVztBQUNuQyxpRUFBaUU7OztBQUdqRTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEVBQUU7OztBQUdGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQjtBQUN0Qjs7QUFFQTtBQUNBO0FBQ0EsSUFBSTtBQUNKOzs7QUFHQTtBQUNBLHVFQUF1RTtBQUN2RTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLE9BQU8sV0FBVyxPQUFPLGdCQUFnQixPQUFPOztBQUV0RTtBQUNBO0FBQ0E7QUFDQSxVQUFVOzs7QUFHVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxxRUFBcUU7QUFDckUsb0NBQW9DLGFBQWEsSUFBSSxhQUFhOztBQUVsRTtBQUNBO0FBQ0Esb0RBQW9EO0FBQ3BEOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGNBQWMsY0FBYztBQUM1QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxRQUFROzs7QUFHUixtQkFBbUI7O0FBRW5CO0FBQ0Esc0JBQXNCO0FBQ3RCLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFFBQVE7OztBQUdSLG1CQUFtQjs7QUFFbkI7QUFDQSxzQkFBc0I7QUFDdEIsTUFBTTtBQUNOO0FBQ0EsdUNBQXVDO0FBQ3ZDO0FBQ0E7O0FBRUEsb0lBQW9JO0FBQ3BJO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFVBQVU7OztBQUdWLHFCQUFxQjtBQUNyQjs7QUFFQTtBQUNBO0FBQ0EsMkJBQTJCO0FBQzNCLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQSxvQkFBb0I7QUFDcEI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07OztBQUdOO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE1BQU07QUFDTixVQUFVLE9BQU8sV0FBVyxPQUFPO0FBQ25DO0FBQ0E7QUFDQSxZQUFZLE9BQU8sV0FBVyxPQUFPLHlCQUF5QixPQUFPO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQSxvREFBb0Q7O0FBRXBEO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTs7O0FBR1Y7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0EsUUFBUTtBQUNSOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTs7O0FBR04saUJBQWlCOztBQUVqQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkM7QUFDM0M7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLEdBQUc7O0FBRUg7QUFDQSxDQUFDOztBQUVEOzs7Ozs7Ozs7OztBQ3BmQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ2EsQ0FBQztBQUNkO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHdCQUF3QiwyRUFBMkUsa0NBQWtDLHdCQUF3QixPQUFPLGtDQUFrQyxtSUFBbUk7O0FBRXpVLGtEQUFrRCwwQ0FBMEM7O0FBRTVGLGtEQUFrRCwwRUFBMEUsZUFBZTs7QUFFM0ksd0NBQXdDLHVCQUF1Qix5RkFBeUY7O0FBRXhKLDhCQUE4QixnR0FBZ0csbURBQW1EOztBQUVqTCwyQ0FBMkMsK0RBQStELDZFQUE2RSx5RUFBeUUsZUFBZSx1REFBdUQsR0FBRzs7QUFFelUsaUNBQWlDLDRFQUE0RSxpQkFBaUIsYUFBYTs7QUFFM0ksZ0JBQWdCOztBQUVoQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7O0FBRUg7QUFDQSxFQUFFOzs7QUFHRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLEVBQUU7OztBQUdGO0FBQ0E7QUFDQSxFQUFFOzs7QUFHRjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEVBQUU7OztBQUdGO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxxQ0FBcUMsbUJBQU8sQ0FBQyx3REFBVztBQUN4RCwrREFBK0Q7O0FBRS9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0EsSUFBSTs7O0FBR0o7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0EsaUNBQWlDLG1CQUFPLENBQUMsMENBQU87QUFDaEQ7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBOztBQUVBO0FBQ0EsQ0FBQztBQUNEO0FBQ0Esc0VBQXNFLGFBQWE7QUFDbkY7QUFDQTs7QUFFQSxxQ0FBcUMsbUJBQU8sQ0FBQyx3REFBVztBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLENBQUM7QUFDRCxvQkFBb0I7Ozs7Ozs7Ozs7O0FDbE1wQjtBQUNBO0FBQ2E7O0FBRWIsa0NBQWtDOztBQUVsQyw4QkFBOEI7O0FBRTlCLHlDQUF5QyxlQUFlLGVBQWUsZ0JBQWdCLG9CQUFvQixNQUFNLDBDQUEwQywrQkFBK0IsYUFBYSxxQkFBcUIsdUNBQXVDLGNBQWMsV0FBVyxZQUFZLFVBQVUsTUFBTSxtREFBbUQsVUFBVSxzQkFBc0I7O0FBRTNZLGdDQUFnQzs7QUFFaEMsd0JBQXdCLDJFQUEyRSxrQ0FBa0Msd0JBQXdCLE9BQU8sa0NBQWtDLG1JQUFtSTs7QUFFelU7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBLHVDQUF1QyxtQkFBTyxDQUFDLG9EQUFXO0FBQzFEO0FBQ0E7QUFDQTtBQUNBLGdEQUFnRCxtQkFBTyxDQUFDLDhDQUFROztBQUVoRTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLHFCQUFxQix1RUFBc0I7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsa0JBQWtCLGdCQUFnQjtBQUNsQztBQUNBO0FBQ0EsSUFBSTs7O0FBR0o7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTtBQUNGOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSx3Q0FBd0MsU0FBUztBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjs7QUFFaEI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHVCQUF1Qix1QkFBdUI7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTs7O0FBR0o7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLElBQUk7QUFDSjtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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Q0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7QUMvQmE7O0FBRWI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDaEJBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0Isc0JBQXNCO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsNENBQTRDLEtBQUs7O0FBRWpEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQSxvQ0FBb0MsT0FBTztBQUMzQztBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOzs7QUFHQTtBQUNBO0FBQ0EsMERBQTBEO0FBQzFEO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYLFVBQVU7QUFDVjtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtB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QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGNBQWM7QUFDZDs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFD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QUMsQ0FBQyxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc2xhZ3JhY2gtdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvQGZhbmN5YXBwcy91aS9kaXN0L2luZGV4LmVzbS5qcyIsIndlYnBhY2s6Ly9zbGFncmFjaC10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9hc3NlcnQvYnVpbGQvYXNzZXJ0LmpzIiwid2VicGFjazovL3NsYWdyYWNoLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL2Fzc2VydC9idWlsZC9pbnRlcm5hbC9hc3NlcnQvYXNzZXJ0aW9uX2Vycm9yLmpzIiwid2VicGFjazovL3NsYWdyYWNoLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL2Fzc2VydC9idWlsZC9pbnRlcm5hbC9lcnJvcnMuanMiLCJ3ZWJwYWNrOi8vc2xhZ3JhY2gtdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvYXNzZXJ0L2J1aWxkL2ludGVybmFsL3V0aWwvY29tcGFyaXNvbnMuanMiLCJ3ZWJwYWNrOi8vc2xhZ3JhY2gtdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvY2FsbC1iaW5kL2NhbGxCb3VuZC5qcyIsIndlYnBhY2s6Ly9zbGFncmFjaC10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9jYWxsLWJpbmQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vc2xhZ3JhY2gtdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvY29uc29sZS1icm93c2VyaWZ5L2luZGV4LmpzIiwid2VicGFjazovL3NsYWdyYWNoLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL2RlZmluZS1wcm9wZXJ0aWVzL2luZGV4LmpzIiwid2VicGFjazovL3NsYWdyYWNoLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL2VzNi1vYmplY3QtYXNzaWduL2luZGV4LmpzIiwid2VicGFjazovL3NsYWdyYWNoLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL2Zvci1lYWNoL2luZGV4LmpzIiwid2VicGFjazovL3NsYWdyYWNoLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL2Z1bmN0aW9uLWJpbmQvaW1wbGVtZW50YXRpb24uanMiLCJ3ZWJwYWNrOi8vc2xhZ3JhY2gtdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvZnVuY3Rpb24tYmluZC9pbmRleC5qcyIsIndlYnBhY2s6Ly9zbGFncmFjaC10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9nZXQtaW50cmluc2ljL2luZGV4LmpzIiwid2VicGFjazovL3NsYWdyYWNoLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL2dvcGQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vc2xhZ3JhY2gtdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvaGFzLXByb3BlcnR5LWRlc2NyaXB0b3JzL2luZGV4LmpzIiwid2VicGFjazovL3NsYWdyYWNoLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL2hhcy1zeW1ib2xzL2luZGV4LmpzIiwid2VicGFjazovL3NsYWdyYWNoLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL2hhcy1zeW1ib2xzL3NoYW1zLmpzIiwid2VicGFjazovL3NsYWdyYWNoLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL2hhcy10b3N0cmluZ3RhZy9zaGFtcy5qcyIsIndlYnBhY2s6Ly9zbGFncmFjaC10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9oYXMvc3JjL2luZGV4LmpzIiwid2VicGFjazovL3NsYWdyYWNoLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL2luaGVyaXRzL2luaGVyaXRzX2Jyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vc2xhZ3JhY2gtdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvaXMtYXJndW1lbnRzL2luZGV4LmpzIiwid2VicGFjazovL3NsYWdyYWNoLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL2lzLWNhbGxhYmxlL2luZGV4LmpzIiwid2VicGFjazovL3NsYWdyYWNoLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL2lzLWdlbmVyYXRvci1mdW5jdGlvbi9pbmRleC5qcyIsIndlYnBhY2s6Ly9zbGFncmFjaC10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9pcy1uYW4vaW1wbGVtZW50YXRpb24uanMiLCJ3ZWJwYWNrOi8vc2xhZ3JhY2gtdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvaXMtbmFuL2luZGV4LmpzIiwid2VicGFjazovL3NsYWdyYWNoLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL2lzLW5hbi9wb2x5ZmlsbC5qcyIsIndlYnBhY2s6Ly9zbGFncmFjaC10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9pcy1uYW4vc2hpbS5qcyIsIndlYnBhY2s6Ly9zbGFncmFjaC10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9pcy10eXBlZC1hcnJheS9pbmRleC5qcyIsIndlYnBhY2s6Ly9zbGFncmFjaC10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9vYmplY3QtaXMvaW1wbGVtZW50YXRpb24uanMiLCJ3ZWJwYWNrOi8vc2xhZ3JhY2gtdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvb2JqZWN0LWlzL2luZGV4LmpzIiwid2VicGFjazovL3NsYWdyYWNoLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL29iamVjdC1pcy9wb2x5ZmlsbC5qcyIsIndlYnBhY2s6Ly9zbGFncmFjaC10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9vYmplY3QtaXMvc2hpbS5qcyIsIndlYnBhY2s6Ly9zbGFncmFjaC10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9vYmplY3Qta2V5cy9pbXBsZW1lbnRhdGlvbi5qcyIsIndlYnBhY2s6Ly9zbGFncmFjaC10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9vYmplY3Qta2V5cy9pbmRleC5qcyIsIndlYnBhY2s6Ly9zbGFncmFjaC10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9vYmplY3Qta2V5cy9pc0FyZ3VtZW50cy5qcyIsIndlYnBhY2s6Ly9zbGFncmFjaC10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9wcm9jZXNzL2Jyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vc2xhZ3JhY2gtdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvdXRpbC9zdXBwb3J0L2lzQnVmZmVyQnJvd3Nlci5qcyIsIndlYnBhY2s6Ly9zbGFncmFjaC10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy91dGlsL3N1cHBvcnQvdHlwZXMuanMiLCJ3ZWJwYWNrOi8vc2xhZ3JhY2gtdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvdXRpbC91dGlsLmpzIiwid2VicGFjazovL3NsYWdyYWNoLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3ZhbmlsbGEtdGlsdC9saWIvdmFuaWxsYS10aWx0LmpzIiwid2VicGFjazovL3NsYWdyYWNoLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3doaWNoLXR5cGVkLWFycmF5L2luZGV4LmpzIiwid2VicGFjazovL3NsYWdyYWNoLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL2F2YWlsYWJsZS10eXBlZC1hcnJheXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vc2xhZ3JhY2gtdGVtcGxhdGUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vc2xhZ3JhY2gtdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vc2xhZ3JhY2gtdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3NsYWdyYWNoLXRlbXBsYXRlL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vc2xhZ3JhY2gtdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9zbGFncmFjaC10ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3NsYWdyYWNoLXRlbXBsYXRlLy4vc3JjL2pzL21vZHVsZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB0PSh0LGU9MWU0KT0+KHQ9cGFyc2VGbG9hdCh0K1wiXCIpfHwwLE1hdGgucm91bmQoKHQrTnVtYmVyLkVQU0lMT04pKmUpL2UpLGU9ZnVuY3Rpb24odCl7aWYoISh0JiZ0IGluc3RhbmNlb2YgRWxlbWVudCYmdC5vZmZzZXRQYXJlbnQpKXJldHVybiExO2NvbnN0IGU9dC5zY3JvbGxIZWlnaHQ+dC5jbGllbnRIZWlnaHQsaT13aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSh0KS5vdmVyZmxvd1ksbj0tMSE9PWkuaW5kZXhPZihcImhpZGRlblwiKSxzPS0xIT09aS5pbmRleE9mKFwidmlzaWJsZVwiKTtyZXR1cm4gZSYmIW4mJiFzfSxpPWZ1bmN0aW9uKHQsbj12b2lkIDApe3JldHVybiEoIXR8fHQ9PT1kb2N1bWVudC5ib2R5fHxuJiZ0PT09bikmJihlKHQpP3Q6aSh0LnBhcmVudEVsZW1lbnQsbikpfSxuPWZ1bmN0aW9uKHQpe3ZhciBlPShuZXcgRE9NUGFyc2VyKS5wYXJzZUZyb21TdHJpbmcodCxcInRleHQvaHRtbFwiKS5ib2R5O2lmKGUuY2hpbGRFbGVtZW50Q291bnQ+MSl7Zm9yKHZhciBpPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7ZS5maXJzdENoaWxkOylpLmFwcGVuZENoaWxkKGUuZmlyc3RDaGlsZCk7cmV0dXJuIGl9cmV0dXJuIGUuZmlyc3RDaGlsZH0scz10PT5gJHt0fHxcIlwifWAuc3BsaXQoXCIgXCIpLmZpbHRlcigodD0+ISF0KSksbz0odCxlLGkpPT57cyhlKS5mb3JFYWNoKChlPT57dCYmdC5jbGFzc0xpc3QudG9nZ2xlKGUsaXx8ITEpfSkpfTtjbGFzcyBhe2NvbnN0cnVjdG9yKHQpe09iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLFwicGFnZVhcIix7ZW51bWVyYWJsZTohMCxjb25maWd1cmFibGU6ITAsd3JpdGFibGU6ITAsdmFsdWU6dm9pZCAwfSksT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsXCJwYWdlWVwiLHtlbnVtZXJhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMCx3cml0YWJsZTohMCx2YWx1ZTp2b2lkIDB9KSxPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcyxcImNsaWVudFhcIix7ZW51bWVyYWJsZTohMCxjb25maWd1cmFibGU6ITAsd3JpdGFibGU6ITAsdmFsdWU6dm9pZCAwfSksT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsXCJjbGllbnRZXCIse2VudW1lcmFibGU6ITAsY29uZmlndXJhYmxlOiEwLHdyaXRhYmxlOiEwLHZhbHVlOnZvaWQgMH0pLE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLFwiaWRcIix7ZW51bWVyYWJsZTohMCxjb25maWd1cmFibGU6ITAsd3JpdGFibGU6ITAsdmFsdWU6dm9pZCAwfSksT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsXCJ0aW1lXCIse2VudW1lcmFibGU6ITAsY29uZmlndXJhYmxlOiEwLHdyaXRhYmxlOiEwLHZhbHVlOnZvaWQgMH0pLE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLFwibmF0aXZlUG9pbnRlclwiLHtlbnVtZXJhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMCx3cml0YWJsZTohMCx2YWx1ZTp2b2lkIDB9KSx0aGlzLm5hdGl2ZVBvaW50ZXI9dCx0aGlzLnBhZ2VYPXQucGFnZVgsdGhpcy5wYWdlWT10LnBhZ2VZLHRoaXMuY2xpZW50WD10LmNsaWVudFgsdGhpcy5jbGllbnRZPXQuY2xpZW50WSx0aGlzLmlkPXNlbGYuVG91Y2gmJnQgaW5zdGFuY2VvZiBUb3VjaD90LmlkZW50aWZpZXI6LTEsdGhpcy50aW1lPURhdGUubm93KCl9fWNvbnN0IHI9e3Bhc3NpdmU6ITF9O2NsYXNzIGx7Y29uc3RydWN0b3IodCx7c3RhcnQ6ZT0oKCk9PiEwKSxtb3ZlOmk9KCgpPT57fSksZW5kOm49KCgpPT57fSl9KXtPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcyxcImVsZW1lbnRcIix7ZW51bWVyYWJsZTohMCxjb25maWd1cmFibGU6ITAsd3JpdGFibGU6ITAsdmFsdWU6dm9pZCAwfSksT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsXCJzdGFydENhbGxiYWNrXCIse2VudW1lcmFibGU6ITAsY29uZmlndXJhYmxlOiEwLHdyaXRhYmxlOiEwLHZhbHVlOnZvaWQgMH0pLE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLFwibW92ZUNhbGxiYWNrXCIse2VudW1lcmFibGU6ITAsY29uZmlndXJhYmxlOiEwLHdyaXRhYmxlOiEwLHZhbHVlOnZvaWQgMH0pLE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLFwiZW5kQ2FsbGJhY2tcIix7ZW51bWVyYWJsZTohMCxjb25maWd1cmFibGU6ITAsd3JpdGFibGU6ITAsdmFsdWU6dm9pZCAwfSksT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsXCJjdXJyZW50UG9pbnRlcnNcIix7ZW51bWVyYWJsZTohMCxjb25maWd1cmFibGU6ITAsd3JpdGFibGU6ITAsdmFsdWU6W119KSxPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcyxcInN0YXJ0UG9pbnRlcnNcIix7ZW51bWVyYWJsZTohMCxjb25maWd1cmFibGU6ITAsd3JpdGFibGU6ITAsdmFsdWU6W119KSx0aGlzLmVsZW1lbnQ9dCx0aGlzLnN0YXJ0Q2FsbGJhY2s9ZSx0aGlzLm1vdmVDYWxsYmFjaz1pLHRoaXMuZW5kQ2FsbGJhY2s9bjtmb3IoY29uc3QgdCBvZltcIm9uUG9pbnRlclN0YXJ0XCIsXCJvblRvdWNoU3RhcnRcIixcIm9uTW92ZVwiLFwib25Ub3VjaEVuZFwiLFwib25Qb2ludGVyRW5kXCIsXCJvbldpbmRvd0JsdXJcIl0pdGhpc1t0XT10aGlzW3RdLmJpbmQodGhpcyk7dGhpcy5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIix0aGlzLm9uUG9pbnRlclN0YXJ0LHIpLHRoaXMuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwidG91Y2hzdGFydFwiLHRoaXMub25Ub3VjaFN0YXJ0LHIpLHRoaXMuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwidG91Y2htb3ZlXCIsdGhpcy5vbk1vdmUsciksdGhpcy5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaGVuZFwiLHRoaXMub25Ub3VjaEVuZCksdGhpcy5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaGNhbmNlbFwiLHRoaXMub25Ub3VjaEVuZCl9b25Qb2ludGVyU3RhcnQodCl7aWYoIXQuYnV0dG9uc3x8MCE9PXQuYnV0dG9uKXJldHVybjtjb25zdCBlPW5ldyBhKHQpO3RoaXMuY3VycmVudFBvaW50ZXJzLnNvbWUoKHQ9PnQuaWQ9PT1lLmlkKSl8fHRoaXMudHJpZ2dlclBvaW50ZXJTdGFydChlLHQpJiYod2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIix0aGlzLm9uTW92ZSksd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZXVwXCIsdGhpcy5vblBvaW50ZXJFbmQpLHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiYmx1clwiLHRoaXMub25XaW5kb3dCbHVyKSl9b25Ub3VjaFN0YXJ0KHQpe2Zvcihjb25zdCBlIG9mIEFycmF5LmZyb20odC5jaGFuZ2VkVG91Y2hlc3x8W10pKXRoaXMudHJpZ2dlclBvaW50ZXJTdGFydChuZXcgYShlKSx0KTt3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImJsdXJcIix0aGlzLm9uV2luZG93Qmx1cil9b25Nb3ZlKHQpe2NvbnN0IGU9dGhpcy5jdXJyZW50UG9pbnRlcnMuc2xpY2UoKSxpPVwiY2hhbmdlZFRvdWNoZXNcImluIHQ/QXJyYXkuZnJvbSh0LmNoYW5nZWRUb3VjaGVzfHxbXSkubWFwKCh0PT5uZXcgYSh0KSkpOltuZXcgYSh0KV0sbj1bXTtmb3IoY29uc3QgdCBvZiBpKXtjb25zdCBlPXRoaXMuY3VycmVudFBvaW50ZXJzLmZpbmRJbmRleCgoZT0+ZS5pZD09PXQuaWQpKTtlPDB8fChuLnB1c2godCksdGhpcy5jdXJyZW50UG9pbnRlcnNbZV09dCl9bi5sZW5ndGgmJnRoaXMubW92ZUNhbGxiYWNrKHQsdGhpcy5jdXJyZW50UG9pbnRlcnMuc2xpY2UoKSxlKX1vblBvaW50ZXJFbmQodCl7dC5idXR0b25zPjAmJjAhPT10LmJ1dHRvbnx8KHRoaXMudHJpZ2dlclBvaW50ZXJFbmQodCxuZXcgYSh0KSksd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIix0aGlzLm9uTW92ZSksd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZXVwXCIsdGhpcy5vblBvaW50ZXJFbmQpLHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwiYmx1clwiLHRoaXMub25XaW5kb3dCbHVyKSl9b25Ub3VjaEVuZCh0KXtmb3IoY29uc3QgZSBvZiBBcnJheS5mcm9tKHQuY2hhbmdlZFRvdWNoZXN8fFtdKSl0aGlzLnRyaWdnZXJQb2ludGVyRW5kKHQsbmV3IGEoZSkpfXRyaWdnZXJQb2ludGVyU3RhcnQodCxlKXtyZXR1cm4hIXRoaXMuc3RhcnRDYWxsYmFjayhlLHQsdGhpcy5jdXJyZW50UG9pbnRlcnMuc2xpY2UoKSkmJih0aGlzLmN1cnJlbnRQb2ludGVycy5wdXNoKHQpLHRoaXMuc3RhcnRQb2ludGVycy5wdXNoKHQpLCEwKX10cmlnZ2VyUG9pbnRlckVuZCh0LGUpe2NvbnN0IGk9dGhpcy5jdXJyZW50UG9pbnRlcnMuZmluZEluZGV4KCh0PT50LmlkPT09ZS5pZCkpO2k8MHx8KHRoaXMuY3VycmVudFBvaW50ZXJzLnNwbGljZShpLDEpLHRoaXMuc3RhcnRQb2ludGVycy5zcGxpY2UoaSwxKSx0aGlzLmVuZENhbGxiYWNrKHQsZSx0aGlzLmN1cnJlbnRQb2ludGVycy5zbGljZSgpKSl9b25XaW5kb3dCbHVyKCl7dGhpcy5jbGVhcigpfWNsZWFyKCl7Zm9yKDt0aGlzLmN1cnJlbnRQb2ludGVycy5sZW5ndGg7KXtjb25zdCB0PXRoaXMuY3VycmVudFBvaW50ZXJzW3RoaXMuY3VycmVudFBvaW50ZXJzLmxlbmd0aC0xXTt0aGlzLmN1cnJlbnRQb2ludGVycy5zcGxpY2UodGhpcy5jdXJyZW50UG9pbnRlcnMubGVuZ3RoLTEsMSksdGhpcy5zdGFydFBvaW50ZXJzLnNwbGljZSh0aGlzLmN1cnJlbnRQb2ludGVycy5sZW5ndGgtMSwxKSx0aGlzLmVuZENhbGxiYWNrKG5ldyBFdmVudChcInRvdWNoZW5kXCIse2J1YmJsZXM6ITAsY2FuY2VsYWJsZTohMCxjbGllbnRYOnQuY2xpZW50WCxjbGllbnRZOnQuY2xpZW50WX0pLHQsdGhpcy5jdXJyZW50UG9pbnRlcnMuc2xpY2UoKSl9fXN0b3AoKXt0aGlzLmVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLHRoaXMub25Qb2ludGVyU3RhcnQsciksdGhpcy5lbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJ0b3VjaHN0YXJ0XCIsdGhpcy5vblRvdWNoU3RhcnQsciksdGhpcy5lbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJ0b3VjaG1vdmVcIix0aGlzLm9uTW92ZSxyKSx0aGlzLmVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInRvdWNoZW5kXCIsdGhpcy5vblRvdWNoRW5kKSx0aGlzLmVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInRvdWNoY2FuY2VsXCIsdGhpcy5vblRvdWNoRW5kKSx3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLHRoaXMub25Nb3ZlKSx3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIix0aGlzLm9uUG9pbnRlckVuZCksd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJibHVyXCIsdGhpcy5vbldpbmRvd0JsdXIpfX1mdW5jdGlvbiBjKHQsZSl7cmV0dXJuIGU/TWF0aC5zcXJ0KE1hdGgucG93KGUuY2xpZW50WC10LmNsaWVudFgsMikrTWF0aC5wb3coZS5jbGllbnRZLXQuY2xpZW50WSwyKSk6MH1mdW5jdGlvbiBoKHQsZSl7cmV0dXJuIGU/e2NsaWVudFg6KHQuY2xpZW50WCtlLmNsaWVudFgpLzIsY2xpZW50WToodC5jbGllbnRZK2UuY2xpZW50WSkvMn06dH1jb25zdCBkPXQ9Plwib2JqZWN0XCI9PXR5cGVvZiB0JiZudWxsIT09dCYmdC5jb25zdHJ1Y3Rvcj09PU9iamVjdCYmXCJbb2JqZWN0IE9iamVjdF1cIj09PU9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh0KSx1PSh0LC4uLmUpPT57Y29uc3QgaT1lLmxlbmd0aDtmb3IobGV0IG49MDtuPGk7bisrKXtjb25zdCBpPWVbbl18fHt9O09iamVjdC5lbnRyaWVzKGkpLmZvckVhY2goKChbZSxpXSk9Pntjb25zdCBuPUFycmF5LmlzQXJyYXkoaSk/W106e307dFtlXXx8T2JqZWN0LmFzc2lnbih0LHtbZV06bn0pLGQoaSk/T2JqZWN0LmFzc2lnbih0W2VdLHUobixpKSk6QXJyYXkuaXNBcnJheShpKT9PYmplY3QuYXNzaWduKHQse1tlXTpbLi4uaV19KTpPYmplY3QuYXNzaWduKHQse1tlXTppfSl9KSl9cmV0dXJuIHR9LHA9ZnVuY3Rpb24odCxlKXtyZXR1cm4gdC5zcGxpdChcIi5cIikucmVkdWNlKCgodCxlKT0+XCJvYmplY3RcIj09dHlwZW9mIHQ/dFtlXTp2b2lkIDApLGUpfTtjbGFzcyBme2NvbnN0cnVjdG9yKHQ9e30pe09iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLFwib3B0aW9uc1wiLHtlbnVtZXJhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMCx3cml0YWJsZTohMCx2YWx1ZTp0fSksT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsXCJldmVudHNcIix7ZW51bWVyYWJsZTohMCxjb25maWd1cmFibGU6ITAsd3JpdGFibGU6ITAsdmFsdWU6bmV3IE1hcH0pLHRoaXMuc2V0T3B0aW9ucyh0KTtmb3IoY29uc3QgdCBvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhPYmplY3QuZ2V0UHJvdG90eXBlT2YodGhpcykpKXQuc3RhcnRzV2l0aChcIm9uXCIpJiZcImZ1bmN0aW9uXCI9PXR5cGVvZiB0aGlzW3RdJiYodGhpc1t0XT10aGlzW3RdLmJpbmQodGhpcykpfXNldE9wdGlvbnModCl7dGhpcy5vcHRpb25zPXQ/dSh7fSx0aGlzLmNvbnN0cnVjdG9yLmRlZmF1bHRzLHQpOnt9O2Zvcihjb25zdFt0LGVdb2YgT2JqZWN0LmVudHJpZXModGhpcy5vcHRpb24oXCJvblwiKXx8e30pKXRoaXMub24odCxlKX1vcHRpb24odCwuLi5lKXtsZXQgaT1wKHQsdGhpcy5vcHRpb25zKTtyZXR1cm4gaSYmXCJmdW5jdGlvblwiPT10eXBlb2YgaSYmKGk9aS5jYWxsKHRoaXMsdGhpcywuLi5lKSksaX1vcHRpb25Gb3IodCxlLGksLi4ubil7bGV0IHM9cChlLHQpO3ZhciBvO1wic3RyaW5nXCIhPXR5cGVvZihvPXMpfHxpc05hTihvKXx8aXNOYU4ocGFyc2VGbG9hdChvKSl8fChzPXBhcnNlRmxvYXQocykpLFwidHJ1ZVwiPT09cyYmKHM9ITApLFwiZmFsc2VcIj09PXMmJihzPSExKSxzJiZcImZ1bmN0aW9uXCI9PXR5cGVvZiBzJiYocz1zLmNhbGwodGhpcyx0aGlzLHQsLi4ubikpO2xldCBhPXAoZSx0aGlzLm9wdGlvbnMpO3JldHVybiBhJiZcImZ1bmN0aW9uXCI9PXR5cGVvZiBhP3M9YS5jYWxsKHRoaXMsdGhpcyx0LC4uLm4scyk6dm9pZCAwPT09cyYmKHM9YSksdm9pZCAwPT09cz9pOnN9Y24odCl7Y29uc3QgZT10aGlzLm9wdGlvbnMuY2xhc3NlcztyZXR1cm4gZSYmZVt0XXx8XCJcIn1sb2NhbGl6ZSh0LGU9W10pe3Q9U3RyaW5nKHQpLnJlcGxhY2UoL1xce1xceyhcXHcrKS4/KFxcdyspP1xcfVxcfS9nLCgodCxlLGkpPT57bGV0IG49XCJcIjtyZXR1cm4gaT9uPXRoaXMub3B0aW9uKGAke2VbMF0rZS50b0xvd2VyQ2FzZSgpLnN1YnN0cmluZygxKX0ubDEwbi4ke2l9YCk6ZSYmKG49dGhpcy5vcHRpb24oYGwxMG4uJHtlfWApKSxufHwobj10KSxufSkpO2ZvcihsZXQgaT0wO2k8ZS5sZW5ndGg7aSsrKXQ9dC5zcGxpdChlW2ldWzBdKS5qb2luKGVbaV1bMV0pO3JldHVybiB0PXQucmVwbGFjZSgvXFx7XFx7KC4qPylcXH1cXH0vZywoKHQsZSk9PmUpKX1vbih0LGUpe2xldCBpPVtdO1wic3RyaW5nXCI9PXR5cGVvZiB0P2k9dC5zcGxpdChcIiBcIik6QXJyYXkuaXNBcnJheSh0KSYmKGk9dCksdGhpcy5ldmVudHN8fCh0aGlzLmV2ZW50cz1uZXcgTWFwKSxpLmZvckVhY2goKHQ9PntsZXQgaT10aGlzLmV2ZW50cy5nZXQodCk7aXx8KHRoaXMuZXZlbnRzLnNldCh0LFtdKSxpPVtdKSxpLmluY2x1ZGVzKGUpfHxpLnB1c2goZSksdGhpcy5ldmVudHMuc2V0KHQsaSl9KSl9b2ZmKHQsZSl7bGV0IGk9W107XCJzdHJpbmdcIj09dHlwZW9mIHQ/aT10LnNwbGl0KFwiIFwiKTpBcnJheS5pc0FycmF5KHQpJiYoaT10KSxpLmZvckVhY2goKHQ9Pntjb25zdCBpPXRoaXMuZXZlbnRzLmdldCh0KTtpZihBcnJheS5pc0FycmF5KGkpKXtjb25zdCB0PWkuaW5kZXhPZihlKTt0Pi0xJiZpLnNwbGljZSh0LDEpfX0pKX1lbWl0KHQsLi4uZSl7Wy4uLnRoaXMuZXZlbnRzLmdldCh0KXx8W11dLmZvckVhY2goKHQ9PnQodGhpcywuLi5lKSkpLFwiKlwiIT09dCYmdGhpcy5lbWl0KFwiKlwiLHQsLi4uZSl9fU9iamVjdC5kZWZpbmVQcm9wZXJ0eShmLFwidmVyc2lvblwiLHtlbnVtZXJhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMCx3cml0YWJsZTohMCx2YWx1ZTpcIjUuMC4yMlwifSksT2JqZWN0LmRlZmluZVByb3BlcnR5KGYsXCJkZWZhdWx0c1wiLHtlbnVtZXJhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMCx3cml0YWJsZTohMCx2YWx1ZTp7fX0pO2NsYXNzIG0gZXh0ZW5kcyBme2NvbnN0cnVjdG9yKHQ9e30pe3N1cGVyKHQpLE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLFwicGx1Z2luc1wiLHtlbnVtZXJhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMCx3cml0YWJsZTohMCx2YWx1ZTp7fX0pfWF0dGFjaFBsdWdpbnModD17fSl7Y29uc3QgZT1uZXcgTWFwO2Zvcihjb25zdFtpLG5db2YgT2JqZWN0LmVudHJpZXModCkpe2NvbnN0IHQ9dGhpcy5vcHRpb24oaSkscz10aGlzLnBsdWdpbnNbaV07c3x8ITE9PT10P3MmJiExPT09dCYmKHMuZGV0YWNoKCksZGVsZXRlIHRoaXMucGx1Z2luc1tpXSk6ZS5zZXQoaSxuZXcgbih0aGlzLHR8fHt9KSl9Zm9yKGNvbnN0W3QsaV1vZiBlKXRoaXMucGx1Z2luc1t0XT1pLGkuYXR0YWNoKCk7dGhpcy5lbWl0KFwiYXR0YWNoUGx1Z2luc1wiKX1kZXRhY2hQbHVnaW5zKHQpe3Q9dHx8T2JqZWN0LmtleXModGhpcy5wbHVnaW5zKTtmb3IoY29uc3QgZSBvZiB0KXtjb25zdCB0PXRoaXMucGx1Z2luc1tlXTt0JiZ0LmRldGFjaCgpLGRlbGV0ZSB0aGlzLnBsdWdpbnNbZV19cmV0dXJuIHRoaXMuZW1pdChcImRldGFjaFBsdWdpbnNcIiksdGhpc319dmFyIGc7IWZ1bmN0aW9uKHQpe3RbdC5Jbml0PTBdPVwiSW5pdFwiLHRbdC5FcnJvcj0xXT1cIkVycm9yXCIsdFt0LlJlYWR5PTJdPVwiUmVhZHlcIix0W3QuUGFubmluZz0zXT1cIlBhbm5pbmdcIix0W3QuTW91c2Vtb3ZlPTRdPVwiTW91c2Vtb3ZlXCIsdFt0LkRlc3Ryb3k9NV09XCJEZXN0cm95XCJ9KGd8fChnPXt9KSk7Y29uc3QgYj1bXCJhXCIsXCJiXCIsXCJjXCIsXCJkXCIsXCJlXCIsXCJmXCJdLHY9e1BBTlVQOlwiTW92ZSB1cFwiLFBBTkRPV046XCJNb3ZlIGRvd25cIixQQU5MRUZUOlwiTW92ZSBsZWZ0XCIsUEFOUklHSFQ6XCJNb3ZlIHJpZ2h0XCIsWk9PTUlOOlwiWm9vbSBpblwiLFpPT01PVVQ6XCJab29tIG91dFwiLFRPR0dMRVpPT006XCJUb2dnbGUgem9vbSBsZXZlbFwiLFRPR0dMRTFUTzE6XCJUb2dnbGUgem9vbSBsZXZlbFwiLElURVJBVEVaT09NOlwiVG9nZ2xlIHpvb20gbGV2ZWxcIixST1RBVEVDQ1c6XCJSb3RhdGUgY291bnRlcmNsb2Nrd2lzZVwiLFJPVEFURUNXOlwiUm90YXRlIGNsb2Nrd2lzZVwiLEZMSVBYOlwiRmxpcCBob3Jpem9udGFsbHlcIixGTElQWTpcIkZsaXAgdmVydGljYWxseVwiLEZJVFg6XCJGaXQgaG9yaXpvbnRhbGx5XCIsRklUWTpcIkZpdCB2ZXJ0aWNhbGx5XCIsUkVTRVQ6XCJSZXNldFwiLFRPR0dMRUZTOlwiVG9nZ2xlIGZ1bGxzY3JlZW5cIn0seT17Y29udGVudDpudWxsLHdpZHRoOlwiYXV0b1wiLGhlaWdodDpcImF1dG9cIixwYW5Nb2RlOlwiZHJhZ1wiLHRvdWNoOiEwLGRyYWdNaW5UaHJlc2hvbGQ6Myxsb2NrQXhpczohMSxtb3VzZU1vdmVGYWN0b3I6MSxtb3VzZU1vdmVGcmljdGlvbjouMTIsem9vbTohMCxwaW5jaFRvWm9vbTohMCxwYW5Pbmx5Wm9vbWVkOlwiYXV0b1wiLG1pblNjYWxlOjEsbWF4U2NhbGU6MixmcmljdGlvbjouMjUsZHJhZ0ZyaWN0aW9uOi4zNSxkZWNlbEZyaWN0aW9uOi4wNSxjbGljazpcInRvZ2dsZVpvb21cIixkYmxDbGljazohMSx3aGVlbDpcInpvb21cIix3aGVlbExpbWl0Ojcsc3Bpbm5lcjohMCxib3VuZHM6XCJhdXRvXCIsaW5maW5pdGU6ITEscnViYmVyYmFuZDohMCxib3VuY2U6ITAsbWF4VmVsb2NpdHk6NzUsdHJhbnNmb3JtUGFyZW50OiExLGNsYXNzZXM6e2NvbnRlbnQ6XCJmLXBhbnpvb21fX2NvbnRlbnRcIixpc0xvYWRpbmc6XCJpcy1sb2FkaW5nXCIsY2FuWm9vbUluOlwiY2FuLXpvb21faW5cIixjYW5ab29tT3V0OlwiY2FuLXpvb21fb3V0XCIsaXNEcmFnZ2FibGU6XCJpcy1kcmFnZ2FibGVcIixpc0RyYWdnaW5nOlwiaXMtZHJhZ2dpbmdcIixpbkZ1bGxzY3JlZW46XCJpbi1mdWxsc2NyZWVuXCIsaHRtbEhhc0Z1bGxzY3JlZW46XCJ3aXRoLXBhbnpvb20taW4tZnVsbHNjcmVlblwifSxsMTBuOnZ9LHc9JzxkaXYgY2xhc3M9XCJmLXNwaW5uZXJcIj48c3ZnIHZpZXdCb3g9XCIwIDAgNTAgNTBcIj48Y2lyY2xlIGN4PVwiMjVcIiBjeT1cIjI1XCIgcj1cIjIwXCI+PC9jaXJjbGU+PGNpcmNsZSBjeD1cIjI1XCIgY3k9XCIyNVwiIHI9XCIyMFwiPjwvY2lyY2xlPjwvc3ZnPjwvZGl2PicseD10PT50JiZudWxsIT09dCYmdCBpbnN0YW5jZW9mIEVsZW1lbnQmJlwibm9kZVR5cGVcImluIHQsRT0odCxlKT0+e3QmJnMoZSkuZm9yRWFjaCgoZT0+e3QuY2xhc3NMaXN0LnJlbW92ZShlKX0pKX0sUz0odCxlKT0+e3QmJnMoZSkuZm9yRWFjaCgoZT0+e3QuY2xhc3NMaXN0LmFkZChlKX0pKX0sUD17YToxLGI6MCxjOjAsZDoxLGU6MCxmOjB9LEM9MWU1LE09MWUzLFQ9XCJtb3VzZW1vdmVcIixPPVwiZHJhZ1wiLEE9XCJjb250ZW50XCI7bGV0IHo9bnVsbCxMPW51bGw7Y2xhc3MgUiBleHRlbmRzIG17Z2V0IGlzVG91Y2hEZXZpY2UoKXtyZXR1cm4gbnVsbD09PUwmJihMPXdpbmRvdy5tYXRjaE1lZGlhKFwiKGhvdmVyOiBub25lKVwiKS5tYXRjaGVzKSxMfWdldCBpc01vYmlsZSgpe3JldHVybiBudWxsPT09eiYmKHo9L2lQaG9uZXxpUGFkfGlQb2R8QW5kcm9pZC9pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCkpLHp9Z2V0IHBhbk1vZGUoKXtyZXR1cm4gdGhpcy5vcHRpb25zLnBhbk1vZGUhPT1UfHx0aGlzLmlzVG91Y2hEZXZpY2U/TzpUfWdldCBwYW5Pbmx5Wm9vbWVkKCl7Y29uc3QgdD10aGlzLm9wdGlvbnMucGFuT25seVpvb21lZDtyZXR1cm5cImF1dG9cIj09PXQ/dGhpcy5pc1RvdWNoRGV2aWNlOnR9Z2V0IGlzSW5maW5pdGUoKXtyZXR1cm4gdGhpcy5vcHRpb24oXCJpbmZpbml0ZVwiKX1nZXQgYW5nbGUoKXtyZXR1cm4gMTgwKk1hdGguYXRhbjIodGhpcy5jdXJyZW50LmIsdGhpcy5jdXJyZW50LmEpL01hdGguUEl8fDB9Z2V0IHRhcmdldEFuZ2xlKCl7cmV0dXJuIDE4MCpNYXRoLmF0YW4yKHRoaXMudGFyZ2V0LmIsdGhpcy50YXJnZXQuYSkvTWF0aC5QSXx8MH1nZXQgc2NhbGUoKXtjb25zdHthOnQsYjplfT10aGlzLmN1cnJlbnQ7cmV0dXJuIE1hdGguc3FydCh0KnQrZSplKXx8MX1nZXQgdGFyZ2V0U2NhbGUoKXtjb25zdHthOnQsYjplfT10aGlzLnRhcmdldDtyZXR1cm4gTWF0aC5zcXJ0KHQqdCtlKmUpfHwxfWdldCBtaW5TY2FsZSgpe3JldHVybiB0aGlzLm9wdGlvbihcIm1pblNjYWxlXCIpfHwxfWdldCBmdWxsU2NhbGUoKXtjb25zdHtjb250ZW50UmVjdDp0fT10aGlzO3JldHVybiB0LmZ1bGxXaWR0aC90LmZpdFdpZHRofHwxfWdldCBtYXhTY2FsZSgpe3JldHVybiB0aGlzLmZ1bGxTY2FsZSoodGhpcy5vcHRpb24oXCJtYXhTY2FsZVwiKXx8MSl8fDF9Z2V0IGNvdmVyU2NhbGUoKXtjb25zdHtjb250YWluZXJSZWN0OnQsY29udGVudFJlY3Q6ZX09dGhpcyxpPU1hdGgubWF4KHQuaGVpZ2h0L2UuZml0SGVpZ2h0LHQud2lkdGgvZS5maXRXaWR0aCl8fDE7cmV0dXJuIE1hdGgubWluKHRoaXMuZnVsbFNjYWxlLGkpfWdldCBpc1NjYWxpbmcoKXtyZXR1cm4gTWF0aC5hYnModGhpcy50YXJnZXRTY2FsZS10aGlzLnNjYWxlKT4xZS01JiYhdGhpcy5pc1Jlc3Rpbmd9Z2V0IGlzQ29udGVudExvYWRpbmcoKXtjb25zdCB0PXRoaXMuY29udGVudDtyZXR1cm4hISh0JiZ0IGluc3RhbmNlb2YgSFRNTEltYWdlRWxlbWVudCkmJiF0LmNvbXBsZXRlfWdldCBpc1Jlc3RpbmcoKXtpZih0aGlzLmlzQm91bmNpbmdYfHx0aGlzLmlzQm91bmNpbmdZKXJldHVybiExO2Zvcihjb25zdCB0IG9mIGIpe2NvbnN0IGU9XCJlXCI9PXR8fFwiZlwiPT09dD8uMDAxOjFlLTU7aWYoTWF0aC5hYnModGhpcy50YXJnZXRbdF0tdGhpcy5jdXJyZW50W3RdKT5lKXJldHVybiExfXJldHVybiEoIXRoaXMuaWdub3JlQm91bmRzJiYhdGhpcy5jaGVja0JvdW5kcygpLmluQm91bmRzKX1jb25zdHJ1Y3Rvcih0LGU9e30saT17fSl7dmFyIHM7aWYoc3VwZXIoZSksT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsXCJwb2ludGVyVHJhY2tlclwiLHtlbnVtZXJhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMCx3cml0YWJsZTohMCx2YWx1ZTpudWxsfSksT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsXCJyZXNpemVPYnNlcnZlclwiLHtlbnVtZXJhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMCx3cml0YWJsZTohMCx2YWx1ZTpudWxsfSksT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsXCJ1cGRhdGVUaW1lclwiLHtlbnVtZXJhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMCx3cml0YWJsZTohMCx2YWx1ZTpudWxsfSksT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsXCJjbGlja1RpbWVyXCIse2VudW1lcmFibGU6ITAsY29uZmlndXJhYmxlOiEwLHdyaXRhYmxlOiEwLHZhbHVlOm51bGx9KSxPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcyxcInJBRlwiLHtlbnVtZXJhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMCx3cml0YWJsZTohMCx2YWx1ZTpudWxsfSksT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsXCJpc1RpY2tpbmdcIix7ZW51bWVyYWJsZTohMCxjb25maWd1cmFibGU6ITAsd3JpdGFibGU6ITAsdmFsdWU6ITF9KSxPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcyxcImZyaWN0aW9uXCIse2VudW1lcmFibGU6ITAsY29uZmlndXJhYmxlOiEwLHdyaXRhYmxlOiEwLHZhbHVlOjB9KSxPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcyxcImlnbm9yZUJvdW5kc1wiLHtlbnVtZXJhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMCx3cml0YWJsZTohMCx2YWx1ZTohMX0pLE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLFwiaXNCb3VuY2luZ1hcIix7ZW51bWVyYWJsZTohMCxjb25maWd1cmFibGU6ITAsd3JpdGFibGU6ITAsdmFsdWU6ITF9KSxPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcyxcImlzQm91bmNpbmdZXCIse2VudW1lcmFibGU6ITAsY29uZmlndXJhYmxlOiEwLHdyaXRhYmxlOiEwLHZhbHVlOiExfSksT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsXCJjbGlja3NcIix7ZW51bWVyYWJsZTohMCxjb25maWd1cmFibGU6ITAsd3JpdGFibGU6ITAsdmFsdWU6MH0pLE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLFwidHJhY2tpbmdQb2ludHNcIix7ZW51bWVyYWJsZTohMCxjb25maWd1cmFibGU6ITAsd3JpdGFibGU6ITAsdmFsdWU6W119KSxPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcyxcInB3dFwiLHtlbnVtZXJhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMCx3cml0YWJsZTohMCx2YWx1ZTowfSksT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsXCJjd2RcIix7ZW51bWVyYWJsZTohMCxjb25maWd1cmFibGU6ITAsd3JpdGFibGU6ITAsdmFsdWU6MH0pLE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLFwicG1tZVwiLHtlbnVtZXJhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMCx3cml0YWJsZTohMCx2YWx1ZTp2b2lkIDB9KSxPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcyxcInN0YXRlXCIse2VudW1lcmFibGU6ITAsY29uZmlndXJhYmxlOiEwLHdyaXRhYmxlOiEwLHZhbHVlOmcuSW5pdH0pLE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLFwiaXNEcmFnZ2luZ1wiLHtlbnVtZXJhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMCx3cml0YWJsZTohMCx2YWx1ZTohMX0pLE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLFwiY29udGFpbmVyXCIse2VudW1lcmFibGU6ITAsY29uZmlndXJhYmxlOiEwLHdyaXRhYmxlOiEwLHZhbHVlOnZvaWQgMH0pLE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLFwiY29udGVudFwiLHtlbnVtZXJhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMCx3cml0YWJsZTohMCx2YWx1ZTp2b2lkIDB9KSxPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcyxcInNwaW5uZXJcIix7ZW51bWVyYWJsZTohMCxjb25maWd1cmFibGU6ITAsd3JpdGFibGU6ITAsdmFsdWU6bnVsbH0pLE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLFwiY29udGFpbmVyUmVjdFwiLHtlbnVtZXJhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMCx3cml0YWJsZTohMCx2YWx1ZTp7d2lkdGg6MCxoZWlnaHQ6MCxpbm5lcldpZHRoOjAsaW5uZXJIZWlnaHQ6MH19KSxPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcyxcImNvbnRlbnRSZWN0XCIse2VudW1lcmFibGU6ITAsY29uZmlndXJhYmxlOiEwLHdyaXRhYmxlOiEwLHZhbHVlOnt0b3A6MCxyaWdodDowLGJvdHRvbTowLGxlZnQ6MCxmdWxsV2lkdGg6MCxmdWxsSGVpZ2h0OjAsZml0V2lkdGg6MCxmaXRIZWlnaHQ6MCx3aWR0aDowLGhlaWdodDowfX0pLE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLFwiZHJhZ1N0YXJ0XCIse2VudW1lcmFibGU6ITAsY29uZmlndXJhYmxlOiEwLHdyaXRhYmxlOiEwLHZhbHVlOnt4OjAseTowLHRvcDowLGxlZnQ6MCx0aW1lOjB9fSksT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsXCJkcmFnT2Zmc2V0XCIse2VudW1lcmFibGU6ITAsY29uZmlndXJhYmxlOiEwLHdyaXRhYmxlOiEwLHZhbHVlOnt4OjAseTowLHRpbWU6MH19KSxPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcyxcImN1cnJlbnRcIix7ZW51bWVyYWJsZTohMCxjb25maWd1cmFibGU6ITAsd3JpdGFibGU6ITAsdmFsdWU6T2JqZWN0LmFzc2lnbih7fSxQKX0pLE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLFwidGFyZ2V0XCIse2VudW1lcmFibGU6ITAsY29uZmlndXJhYmxlOiEwLHdyaXRhYmxlOiEwLHZhbHVlOk9iamVjdC5hc3NpZ24oe30sUCl9KSxPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcyxcInZlbG9jaXR5XCIse2VudW1lcmFibGU6ITAsY29uZmlndXJhYmxlOiEwLHdyaXRhYmxlOiEwLHZhbHVlOnthOjAsYjowLGM6MCxkOjAsZTowLGY6MH19KSxPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcyxcImxvY2tlZEF4aXNcIix7ZW51bWVyYWJsZTohMCxjb25maWd1cmFibGU6ITAsd3JpdGFibGU6ITAsdmFsdWU6ITF9KSwhdCl0aHJvdyBuZXcgRXJyb3IoXCJDb250YWluZXIgRWxlbWVudCBOb3QgRm91bmRcIik7dGhpcy5jb250YWluZXI9dCx0aGlzLmluaXRDb250ZW50KCksdGhpcy5hdHRhY2hQbHVnaW5zKE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSxSLlBsdWdpbnMpLGkpKSx0aGlzLmVtaXQoXCJpbml0XCIpO2NvbnN0IG89dGhpcy5jb250ZW50O2lmKG8uYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIix0aGlzLm9uTG9hZCksby5hZGRFdmVudExpc3RlbmVyKFwiZXJyb3JcIix0aGlzLm9uRXJyb3IpLHRoaXMuaXNDb250ZW50TG9hZGluZyl7aWYodGhpcy5vcHRpb24oXCJzcGlubmVyXCIpKXt0LmNsYXNzTGlzdC5hZGQodGhpcy5jbihcImlzTG9hZGluZ1wiKSk7Y29uc3QgZT1uKHcpOyF0LmNvbnRhaW5zKG8pfHxvLnBhcmVudEVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MUGljdHVyZUVsZW1lbnQ/dGhpcy5zcGlubmVyPXQuYXBwZW5kQ2hpbGQoZSk6dGhpcy5zcGlubmVyPShudWxsPT09KHM9by5wYXJlbnRFbGVtZW50KXx8dm9pZCAwPT09cz92b2lkIDA6cy5pbnNlcnRCZWZvcmUoZSxvKSl8fG51bGx9dGhpcy5lbWl0KFwiYmVmb3JlTG9hZFwiKX1lbHNlIHF1ZXVlTWljcm90YXNrKCgoKT0+e3RoaXMuZW5hYmxlKCl9KSl9aW5pdENvbnRlbnQoKXtjb25zdHtjb250YWluZXI6dH09dGhpcyxlPXRoaXMuY24oQSk7bGV0IGk9dGhpcy5vcHRpb24oQSl8fHQucXVlcnlTZWxlY3RvcihgLiR7ZX1gKTtpZihpfHwoaT10LnF1ZXJ5U2VsZWN0b3IoXCJpbWcscGljdHVyZVwiKXx8dC5maXJzdEVsZW1lbnRDaGlsZCxpJiZTKGksZSkpLGkgaW5zdGFuY2VvZiBIVE1MUGljdHVyZUVsZW1lbnQmJihpPWkucXVlcnlTZWxlY3RvcihcImltZ1wiKSksIWkpdGhyb3cgbmV3IEVycm9yKFwiTm8gY29udGVudCBmb3VuZFwiKTt0aGlzLmNvbnRlbnQ9aX1vbkxvYWQoKXt0aGlzLnNwaW5uZXImJih0aGlzLnNwaW5uZXIucmVtb3ZlKCksdGhpcy5zcGlubmVyPW51bGwpLHRoaXMub3B0aW9uKFwic3Bpbm5lclwiKSYmdGhpcy5jb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLmNuKFwiaXNMb2FkaW5nXCIpKSx0aGlzLmVtaXQoXCJhZnRlckxvYWRcIiksdGhpcy5zdGF0ZT09PWcuSW5pdD90aGlzLmVuYWJsZSgpOnRoaXMudXBkYXRlTWV0cmljcygpfW9uRXJyb3IoKXt0aGlzLnN0YXRlIT09Zy5EZXN0cm95JiYodGhpcy5zcGlubmVyJiYodGhpcy5zcGlubmVyLnJlbW92ZSgpLHRoaXMuc3Bpbm5lcj1udWxsKSx0aGlzLnN0b3AoKSx0aGlzLmRldGFjaEV2ZW50cygpLHRoaXMuc3RhdGU9Zy5FcnJvcix0aGlzLmVtaXQoXCJlcnJvclwiKSl9YXR0YWNoT2JzZXJ2ZXIoKXt2YXIgdDtjb25zdCBlPSgpPT5NYXRoLmFicyh0aGlzLmNvbnRhaW5lclJlY3Qud2lkdGgtdGhpcy5jb250YWluZXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGgpPi4xfHxNYXRoLmFicyh0aGlzLmNvbnRhaW5lclJlY3QuaGVpZ2h0LXRoaXMuY29udGFpbmVyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodCk+LjE7dGhpcy5yZXNpemVPYnNlcnZlcnx8dm9pZCAwPT09d2luZG93LlJlc2l6ZU9ic2VydmVyfHwodGhpcy5yZXNpemVPYnNlcnZlcj1uZXcgUmVzaXplT2JzZXJ2ZXIoKCgpPT57dGhpcy51cGRhdGVUaW1lcnx8KGUoKT8odGhpcy5vblJlc2l6ZSgpLHRoaXMuaXNNb2JpbGUmJih0aGlzLnVwZGF0ZVRpbWVyPXNldFRpbWVvdXQoKCgpPT57ZSgpJiZ0aGlzLm9uUmVzaXplKCksdGhpcy51cGRhdGVUaW1lcj1udWxsfSksNTAwKSkpOnRoaXMudXBkYXRlVGltZXImJihjbGVhclRpbWVvdXQodGhpcy51cGRhdGVUaW1lciksdGhpcy51cGRhdGVUaW1lcj1udWxsKSl9KSkpLG51bGw9PT0odD10aGlzLnJlc2l6ZU9ic2VydmVyKXx8dm9pZCAwPT09dHx8dC5vYnNlcnZlKHRoaXMuY29udGFpbmVyKX1kZXRhY2hPYnNlcnZlcigpe3ZhciB0O251bGw9PT0odD10aGlzLnJlc2l6ZU9ic2VydmVyKXx8dm9pZCAwPT09dHx8dC5kaXNjb25uZWN0KCl9YXR0YWNoRXZlbnRzKCl7Y29uc3R7Y29udGFpbmVyOnR9PXRoaXM7dC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIix0aGlzLm9uQ2xpY2sse3Bhc3NpdmU6ITEsY2FwdHVyZTohMX0pLHQuYWRkRXZlbnRMaXN0ZW5lcihcIndoZWVsXCIsdGhpcy5vbldoZWVsLHtwYXNzaXZlOiExfSksdGhpcy5wb2ludGVyVHJhY2tlcj1uZXcgbCh0LHtzdGFydDp0aGlzLm9uUG9pbnRlckRvd24sbW92ZTp0aGlzLm9uUG9pbnRlck1vdmUsZW5kOnRoaXMub25Qb2ludGVyVXB9KSxkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFQsdGhpcy5vbk1vdXNlTW92ZSl9ZGV0YWNoRXZlbnRzKCl7dmFyIHQ7Y29uc3R7Y29udGFpbmVyOmV9PXRoaXM7ZS5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIix0aGlzLm9uQ2xpY2sse3Bhc3NpdmU6ITEsY2FwdHVyZTohMX0pLGUucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIndoZWVsXCIsdGhpcy5vbldoZWVsLHtwYXNzaXZlOiExfSksbnVsbD09PSh0PXRoaXMucG9pbnRlclRyYWNrZXIpfHx2b2lkIDA9PT10fHx0LnN0b3AoKSx0aGlzLnBvaW50ZXJUcmFja2VyPW51bGwsZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihULHRoaXMub25Nb3VzZU1vdmUpLGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsdGhpcy5vbktleWRvd24sITApLHRoaXMuY2xpY2tUaW1lciYmKGNsZWFyVGltZW91dCh0aGlzLmNsaWNrVGltZXIpLHRoaXMuY2xpY2tUaW1lcj1udWxsKSx0aGlzLnVwZGF0ZVRpbWVyJiYoY2xlYXJUaW1lb3V0KHRoaXMudXBkYXRlVGltZXIpLHRoaXMudXBkYXRlVGltZXI9bnVsbCl9YW5pbWF0ZSgpe2NvbnN0IHQ9dGhpcy5mcmljdGlvbjt0aGlzLnNldFRhcmdldEZvcmNlKCk7Y29uc3QgZT10aGlzLm9wdGlvbihcIm1heFZlbG9jaXR5XCIpO2Zvcihjb25zdCBpIG9mIGIpdD8odGhpcy52ZWxvY2l0eVtpXSo9MS10LGUmJiF0aGlzLmlzU2NhbGluZyYmKHRoaXMudmVsb2NpdHlbaV09TWF0aC5tYXgoTWF0aC5taW4odGhpcy52ZWxvY2l0eVtpXSxlKSwtMSplKSksdGhpcy5jdXJyZW50W2ldKz10aGlzLnZlbG9jaXR5W2ldKTp0aGlzLmN1cnJlbnRbaV09dGhpcy50YXJnZXRbaV07dGhpcy5zZXRUcmFuc2Zvcm0oKSx0aGlzLnNldEVkZ2VGb3JjZSgpLCF0aGlzLmlzUmVzdGluZ3x8dGhpcy5pc0RyYWdnaW5nP3RoaXMuckFGPXJlcXVlc3RBbmltYXRpb25GcmFtZSgoKCk9PnRoaXMuYW5pbWF0ZSgpKSk6dGhpcy5zdG9wKFwiY3VycmVudFwiKX1zZXRUYXJnZXRGb3JjZSgpe2Zvcihjb25zdCB0IG9mIGIpXCJlXCI9PT10JiZ0aGlzLmlzQm91bmNpbmdYfHxcImZcIj09PXQmJnRoaXMuaXNCb3VuY2luZ1l8fCh0aGlzLnZlbG9jaXR5W3RdPSgxLygxLXRoaXMuZnJpY3Rpb24pLTEpKih0aGlzLnRhcmdldFt0XS10aGlzLmN1cnJlbnRbdF0pKX1jaGVja0JvdW5kcyh0PTAsZT0wKXtjb25zdHtjdXJyZW50Oml9PXRoaXMsbj1pLmUrdCxzPWkuZitlLG89dGhpcy5nZXRCb3VuZHMoKSx7eDphLHk6cn09byxsPWEubWluLGM9YS5tYXgsaD1yLm1pbixkPXIubWF4O2xldCB1PTAscD0wO3JldHVybiBsIT09MS8wJiZuPGw/dT1sLW46YyE9PTEvMCYmbj5jJiYodT1jLW4pLGghPT0xLzAmJnM8aD9wPWgtczpkIT09MS8wJiZzPmQmJihwPWQtcyksTWF0aC5hYnModSk8LjAwMSYmKHU9MCksTWF0aC5hYnMocCk8LjAwMSYmKHA9MCksT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LG8pLHt4RGlmZjp1LHlEaWZmOnAsaW5Cb3VuZHM6IXUmJiFwfSl9Y2xhbXBUYXJnZXRCb3VuZHMoKXtjb25zdHt0YXJnZXQ6dH09dGhpcyx7eDplLHk6aX09dGhpcy5nZXRCb3VuZHMoKTtlLm1pbiE9PTEvMCYmKHQuZT1NYXRoLm1heCh0LmUsZS5taW4pKSxlLm1heCE9PTEvMCYmKHQuZT1NYXRoLm1pbih0LmUsZS5tYXgpKSxpLm1pbiE9PTEvMCYmKHQuZj1NYXRoLm1heCh0LmYsaS5taW4pKSxpLm1heCE9PTEvMCYmKHQuZj1NYXRoLm1pbih0LmYsaS5tYXgpKX1jYWxjdWxhdGVDb250ZW50RGltKHQ9dGhpcy5jdXJyZW50KXtjb25zdHtjb250ZW50OmUsY29udGVudFJlY3Q6aX09dGhpcyx7Zml0V2lkdGg6bixmaXRIZWlnaHQ6cyxmdWxsV2lkdGg6byxmdWxsSGVpZ2h0OmF9PWk7bGV0IHI9byxsPWE7aWYodGhpcy5vcHRpb24oXCJ6b29tXCIpfHwwIT09dGhpcy5hbmdsZSl7Y29uc3QgaT0hKGUgaW5zdGFuY2VvZiBIVE1MSW1hZ2VFbGVtZW50KSYmKFwibm9uZVwiPT09d2luZG93LmdldENvbXB1dGVkU3R5bGUoZSkubWF4V2lkdGh8fFwibm9uZVwiPT09d2luZG93LmdldENvbXB1dGVkU3R5bGUoZSkubWF4SGVpZ2h0KSxjPWk/bzpuLGg9aT9hOnMsZD10aGlzLmdldE1hdHJpeCh0KSx1PW5ldyBET01Qb2ludCgwLDApLm1hdHJpeFRyYW5zZm9ybShkKSxwPW5ldyBET01Qb2ludCgwK2MsMCkubWF0cml4VHJhbnNmb3JtKGQpLGY9bmV3IERPTVBvaW50KDArYywwK2gpLm1hdHJpeFRyYW5zZm9ybShkKSxtPW5ldyBET01Qb2ludCgwLDAraCkubWF0cml4VHJhbnNmb3JtKGQpLGc9TWF0aC5hYnMoZi54LXUueCksYj1NYXRoLmFicyhmLnktdS55KSx2PU1hdGguYWJzKG0ueC1wLngpLHk9TWF0aC5hYnMobS55LXAueSk7cj1NYXRoLm1heChnLHYpLGw9TWF0aC5tYXgoYix5KX1yZXR1cm57Y29udGVudFdpZHRoOnIsY29udGVudEhlaWdodDpsfX1zZXRFZGdlRm9yY2UoKXtpZih0aGlzLmlnbm9yZUJvdW5kc3x8dGhpcy5pc0RyYWdnaW5nfHx0aGlzLnBhbk1vZGU9PT1UfHx0aGlzLnRhcmdldFNjYWxlPHRoaXMuc2NhbGUpcmV0dXJuIHRoaXMuaXNCb3VuY2luZ1g9ITEsdm9pZCh0aGlzLmlzQm91bmNpbmdZPSExKTtjb25zdHt0YXJnZXQ6dH09dGhpcyx7eDplLHk6aSx4RGlmZjpuLHlEaWZmOnN9PXRoaXMuY2hlY2tCb3VuZHMoKTtjb25zdCBvPXRoaXMub3B0aW9uKFwibWF4VmVsb2NpdHlcIik7bGV0IGE9dGhpcy52ZWxvY2l0eS5lLHI9dGhpcy52ZWxvY2l0eS5mOzAhPT1uPyh0aGlzLmlzQm91bmNpbmdYPSEwLG4qYTw9MD9hKz0uMTQqbjooYT0uMTQqbixlLm1pbiE9PTEvMCYmKHRoaXMudGFyZ2V0LmU9TWF0aC5tYXgodC5lLGUubWluKSksZS5tYXghPT0xLzAmJih0aGlzLnRhcmdldC5lPU1hdGgubWluKHQuZSxlLm1heCkpKSxvJiYoYT1NYXRoLm1heChNYXRoLm1pbihhLG8pLC0xKm8pKSk6dGhpcy5pc0JvdW5jaW5nWD0hMSwwIT09cz8odGhpcy5pc0JvdW5jaW5nWT0hMCxzKnI8PTA/cis9LjE0KnM6KHI9LjE0KnMsaS5taW4hPT0xLzAmJih0aGlzLnRhcmdldC5mPU1hdGgubWF4KHQuZixpLm1pbikpLGkubWF4IT09MS8wJiYodGhpcy50YXJnZXQuZj1NYXRoLm1pbih0LmYsaS5tYXgpKSksbyYmKHI9TWF0aC5tYXgoTWF0aC5taW4ocixvKSwtMSpvKSkpOnRoaXMuaXNCb3VuY2luZ1k9ITEsdGhpcy5pc0JvdW5jaW5nWCYmKHRoaXMudmVsb2NpdHkuZT1hKSx0aGlzLmlzQm91bmNpbmdZJiYodGhpcy52ZWxvY2l0eS5mPXIpfWVuYWJsZSgpe2NvbnN0e2NvbnRlbnQ6dH09dGhpcyxlPW5ldyBET01NYXRyaXhSZWFkT25seSh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSh0KS50cmFuc2Zvcm0pO2Zvcihjb25zdCB0IG9mIGIpdGhpcy5jdXJyZW50W3RdPXRoaXMudGFyZ2V0W3RdPWVbdF07dGhpcy51cGRhdGVNZXRyaWNzKCksdGhpcy5hdHRhY2hPYnNlcnZlcigpLHRoaXMuYXR0YWNoRXZlbnRzKCksdGhpcy5zdGF0ZT1nLlJlYWR5LHRoaXMuZW1pdChcInJlYWR5XCIpfW9uQ2xpY2sodCl7dmFyIGU7dGhpcy5pc0RyYWdnaW5nJiYobnVsbD09PShlPXRoaXMucG9pbnRlclRyYWNrZXIpfHx2b2lkIDA9PT1lfHxlLmNsZWFyKCksdGhpcy50cmFja2luZ1BvaW50cz1bXSx0aGlzLnN0YXJ0RGVjZWxBbmltKCkpO2NvbnN0IGk9dC50YXJnZXQ7aWYoIWl8fHQuZGVmYXVsdFByZXZlbnRlZClyZXR1cm47aWYoaSYmaS5oYXNBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiKSlyZXR1cm4gdC5wcmV2ZW50RGVmYXVsdCgpLHZvaWQgdC5zdG9wUHJvcGFnYXRpb24oKTtpZigoKCk9Pntjb25zdCB0PXdpbmRvdy5nZXRTZWxlY3Rpb24oKTtyZXR1cm4gdCYmXCJSYW5nZVwiPT09dC50eXBlfSkoKSYmIWkuY2xvc2VzdChcImJ1dHRvblwiKSlyZXR1cm47Y29uc3Qgbj1pLmNsb3Nlc3QoXCJbZGF0YS1wYW56b29tLWFjdGlvbl1cIikscz1pLmNsb3Nlc3QoXCJbZGF0YS1wYW56b29tLWNoYW5nZV1cIiksbz1ufHxzLGE9byYmeChvKT9vLmRhdGFzZXQ6bnVsbDtpZihhKXtjb25zdCBlPWEucGFuem9vbUNoYW5nZSxpPWEucGFuem9vbUFjdGlvbjtpZigoZXx8aSkmJnQucHJldmVudERlZmF1bHQoKSxlKXtsZXQgdD17fTt0cnl7dD1KU09OLnBhcnNlKGUpfWNhdGNoKHQpe2NvbnNvbGUmJmNvbnNvbGUud2FybihcIlRoZSBnaXZlbiBkYXRhIHdhcyBub3QgdmFsaWQgSlNPTlwiKX1yZXR1cm4gdm9pZCB0aGlzLmFwcGx5Q2hhbmdlKHQpfWlmKGkpcmV0dXJuIHZvaWQodGhpc1tpXSYmdGhpc1tpXSgpKX1pZihNYXRoLmFicyh0aGlzLmRyYWdPZmZzZXQueCk+M3x8TWF0aC5hYnModGhpcy5kcmFnT2Zmc2V0LnkpPjMpcmV0dXJuIHQucHJldmVudERlZmF1bHQoKSx2b2lkIHQuc3RvcFByb3BhZ2F0aW9uKCk7Y29uc3Qgcj10aGlzLmNvbnRlbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7aWYodGhpcy5kcmFnU3RhcnQudGltZSYmIXRoaXMuY2FuWm9vbU91dCgpJiYoTWF0aC5hYnMoci54LXRoaXMuZHJhZ1N0YXJ0LngpPjJ8fE1hdGguYWJzKHIueS10aGlzLmRyYWdTdGFydC55KT4yKSlyZXR1cm47dGhpcy5kcmFnU3RhcnQudGltZT0wO2NvbnN0IGw9ZT0+e3RoaXMub3B0aW9uKFwiem9vbVwiKSYmZSYmXCJzdHJpbmdcIj09dHlwZW9mIGUmJi8oaXRlcmF0ZVpvb20pfCh0b2dnbGUoWm9vbXxGdWxsfENvdmVyfE1heCl8KHpvb21UbyhGaXR8Q292ZXJ8TWF4KSkpLy50ZXN0KGUpJiZcImZ1bmN0aW9uXCI9PXR5cGVvZiB0aGlzW2VdJiYodC5wcmV2ZW50RGVmYXVsdCgpLHRoaXNbZV0oe2V2ZW50OnR9KSl9LGM9dGhpcy5vcHRpb24oXCJjbGlja1wiLHQpLGg9dGhpcy5vcHRpb24oXCJkYmxDbGlja1wiLHQpO2g/KHRoaXMuY2xpY2tzKyssMT09dGhpcy5jbGlja3MmJih0aGlzLmNsaWNrVGltZXI9c2V0VGltZW91dCgoKCk9PnsxPT09dGhpcy5jbGlja3M/KHRoaXMuZW1pdChcImNsaWNrXCIsdCksIXQuZGVmYXVsdFByZXZlbnRlZCYmYyYmbChjKSk6KHRoaXMuZW1pdChcImRibENsaWNrXCIsdCksdC5kZWZhdWx0UHJldmVudGVkfHxsKGgpKSx0aGlzLmNsaWNrcz0wLHRoaXMuY2xpY2tUaW1lcj1udWxsfSksMzUwKSkpOih0aGlzLmVtaXQoXCJjbGlja1wiLHQpLCF0LmRlZmF1bHRQcmV2ZW50ZWQmJmMmJmwoYykpfWFkZFRyYWNraW5nUG9pbnQodCl7Y29uc3QgZT10aGlzLnRyYWNraW5nUG9pbnRzLmZpbHRlcigodD0+dC50aW1lPkRhdGUubm93KCktMTAwKSk7ZS5wdXNoKHQpLHRoaXMudHJhY2tpbmdQb2ludHM9ZX1vblBvaW50ZXJEb3duKHQsZSxpKXt2YXIgbjtpZighMT09PXRoaXMub3B0aW9uKFwidG91Y2hcIix0KSlyZXR1cm4hMTt0aGlzLnB3dD0wLHRoaXMuZHJhZ09mZnNldD17eDowLHk6MCx0aW1lOjB9LHRoaXMudHJhY2tpbmdQb2ludHM9W107Y29uc3Qgcz10aGlzLmNvbnRlbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7aWYodGhpcy5kcmFnU3RhcnQ9e3g6cy54LHk6cy55LHRvcDpzLnRvcCxsZWZ0OnMubGVmdCx0aW1lOkRhdGUubm93KCl9LHRoaXMuY2xpY2tUaW1lcilyZXR1cm4hMTtpZih0aGlzLnBhbk1vZGU9PT1UJiZ0aGlzLnRhcmdldFNjYWxlPjEpcmV0dXJuIHQucHJldmVudERlZmF1bHQoKSx0LnN0b3BQcm9wYWdhdGlvbigpLCExO2NvbnN0IG89dC5jb21wb3NlZFBhdGgoKVswXTtpZighaS5sZW5ndGgpe2lmKFtcIlRFWFRBUkVBXCIsXCJPUFRJT05cIixcIklOUFVUXCIsXCJTRUxFQ1RcIixcIlZJREVPXCIsXCJJRlJBTUVcIl0uaW5jbHVkZXMoby5ub2RlTmFtZSl8fG8uY2xvc2VzdChcIltjb250ZW50ZWRpdGFibGVdXCIpfHxvLmNsb3Nlc3QoXCJbZGF0YS1zZWxlY3RhYmxlXVwiKXx8by5jbG9zZXN0KFwiW2RhdGEtZHJhZ2dhYmxlXVwiKXx8by5jbG9zZXN0KFwiW2RhdGEtY2xpY2thYmxlXVwiKXx8by5jbG9zZXN0KFwiW2RhdGEtcGFuem9vbS1jaGFuZ2VdXCIpfHxvLmNsb3Nlc3QoXCJbZGF0YS1wYW56b29tLWFjdGlvbl1cIikpcmV0dXJuITE7bnVsbD09PShuPXdpbmRvdy5nZXRTZWxlY3Rpb24oKSl8fHZvaWQgMD09PW58fG4ucmVtb3ZlQWxsUmFuZ2VzKCl9aWYoXCJtb3VzZWRvd25cIj09PXQudHlwZSlbXCJBXCIsXCJCVVRUT05cIl0uaW5jbHVkZXMoby5ub2RlTmFtZSl8fHQucHJldmVudERlZmF1bHQoKTtlbHNlIGlmKE1hdGguYWJzKHRoaXMudmVsb2NpdHkuYSk+LjMpcmV0dXJuITE7cmV0dXJuIHRoaXMudGFyZ2V0LmU9dGhpcy5jdXJyZW50LmUsdGhpcy50YXJnZXQuZj10aGlzLmN1cnJlbnQuZix0aGlzLnN0b3AoKSx0aGlzLmlzRHJhZ2dpbmd8fCh0aGlzLmlzRHJhZ2dpbmc9ITAsdGhpcy5hZGRUcmFja2luZ1BvaW50KGUpLHRoaXMuZW1pdChcInRvdWNoU3RhcnRcIix0KSksITB9b25Qb2ludGVyTW92ZShlLG4scyl7aWYoITE9PT10aGlzLm9wdGlvbihcInRvdWNoXCIsZSkpcmV0dXJuO2lmKCF0aGlzLmlzRHJhZ2dpbmcpcmV0dXJuO2lmKG4ubGVuZ3RoPDImJnRoaXMucGFuT25seVpvb21lZCYmdCh0aGlzLnRhcmdldFNjYWxlKTw9dCh0aGlzLm1pblNjYWxlKSlyZXR1cm47aWYodGhpcy5lbWl0KFwidG91Y2hNb3ZlXCIsZSksZS5kZWZhdWx0UHJldmVudGVkKXJldHVybjt0aGlzLmFkZFRyYWNraW5nUG9pbnQoblswXSk7Y29uc3R7Y29udGVudDpvfT10aGlzLGE9aChzWzBdLHNbMV0pLHI9aChuWzBdLG5bMV0pO2xldCBsPTAsZD0wO2lmKG4ubGVuZ3RoPjEpe2NvbnN0IHQ9by5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtsPWEuY2xpZW50WC10LmxlZnQtLjUqdC53aWR0aCxkPWEuY2xpZW50WS10LnRvcC0uNSp0LmhlaWdodH1jb25zdCB1PWMoc1swXSxzWzFdKSxwPWMoblswXSxuWzFdKTtsZXQgZj11P3AvdToxLG09ci5jbGllbnRYLWEuY2xpZW50WCxnPXIuY2xpZW50WS1hLmNsaWVudFk7dGhpcy5kcmFnT2Zmc2V0LngrPW0sdGhpcy5kcmFnT2Zmc2V0LnkrPWcsdGhpcy5kcmFnT2Zmc2V0LnRpbWU9RGF0ZS5ub3coKS10aGlzLmRyYWdTdGFydC50aW1lO2xldCBiPXQodGhpcy50YXJnZXRTY2FsZSk9PT10KHRoaXMubWluU2NhbGUpJiZ0aGlzLm9wdGlvbihcImxvY2tBeGlzXCIpO2lmKGImJiF0aGlzLmxvY2tlZEF4aXMpaWYoXCJ4eVwiPT09Ynx8XCJ5XCI9PT1ifHxcInRvdWNobW92ZVwiPT09ZS50eXBlKXtpZihNYXRoLmFicyh0aGlzLmRyYWdPZmZzZXQueCk8NiYmTWF0aC5hYnModGhpcy5kcmFnT2Zmc2V0LnkpPDYpcmV0dXJuIHZvaWQgZS5wcmV2ZW50RGVmYXVsdCgpO2NvbnN0IHQ9TWF0aC5hYnMoMTgwKk1hdGguYXRhbjIodGhpcy5kcmFnT2Zmc2V0LnksdGhpcy5kcmFnT2Zmc2V0LngpL01hdGguUEkpO3RoaXMubG9ja2VkQXhpcz10PjQ1JiZ0PDEzNT9cInlcIjpcInhcIix0aGlzLmRyYWdPZmZzZXQueD0wLHRoaXMuZHJhZ09mZnNldC55PTAsbT0wLGc9MH1lbHNlIHRoaXMubG9ja2VkQXhpcz1iO2lmKGkoZS50YXJnZXQsdGhpcy5jb250ZW50KSYmKGI9XCJ4XCIsdGhpcy5kcmFnT2Zmc2V0Lnk9MCksYiYmXCJ4eVwiIT09YiYmdGhpcy5sb2NrZWRBeGlzIT09YiYmdCh0aGlzLnRhcmdldFNjYWxlKT09PXQodGhpcy5taW5TY2FsZSkpcmV0dXJuO2UuY2FuY2VsYWJsZSYmZS5wcmV2ZW50RGVmYXVsdCgpLHRoaXMuY29udGFpbmVyLmNsYXNzTGlzdC5hZGQodGhpcy5jbihcImlzRHJhZ2dpbmdcIikpO2NvbnN0IHY9dGhpcy5jaGVja0JvdW5kcyhtLGcpO3RoaXMub3B0aW9uKFwicnViYmVyYmFuZFwiKT8oXCJ4XCIhPT10aGlzLmlzSW5maW5pdGUmJih2LnhEaWZmPjAmJm08MHx8di54RGlmZjwwJiZtPjApJiYobSo9TWF0aC5tYXgoMCwuNS1NYXRoLmFicyguNzUvdGhpcy5jb250ZW50UmVjdC5maXRXaWR0aCp2LnhEaWZmKSkpLFwieVwiIT09dGhpcy5pc0luZmluaXRlJiYodi55RGlmZj4wJiZnPDB8fHYueURpZmY8MCYmZz4wKSYmKGcqPU1hdGgubWF4KDAsLjUtTWF0aC5hYnMoLjc1L3RoaXMuY29udGVudFJlY3QuZml0SGVpZ2h0KnYueURpZmYpKSkpOih2LnhEaWZmJiYobT0wKSx2LnlEaWZmJiYoZz0wKSk7Y29uc3QgeT10aGlzLnRhcmdldFNjYWxlLHc9dGhpcy5taW5TY2FsZSx4PXRoaXMubWF4U2NhbGU7eTwuNSp3JiYoZj1NYXRoLm1heChmLHcpKSx5PjEuNSp4JiYoZj1NYXRoLm1pbihmLHgpKSxcInlcIj09PXRoaXMubG9ja2VkQXhpcyYmdCh5KT09PXQodykmJihtPTApLFwieFwiPT09dGhpcy5sb2NrZWRBeGlzJiZ0KHkpPT09dCh3KSYmKGc9MCksdGhpcy5hcHBseUNoYW5nZSh7b3JpZ2luWDpsLG9yaWdpblk6ZCxwYW5YOm0scGFuWTpnLHNjYWxlOmYsZnJpY3Rpb246dGhpcy5vcHRpb24oXCJkcmFnRnJpY3Rpb25cIiksaWdub3JlQm91bmRzOiEwfSl9b25Qb2ludGVyVXAodCxlLG4pe2lmKG4ubGVuZ3RoKXJldHVybiB0aGlzLmRyYWdPZmZzZXQueD0wLHRoaXMuZHJhZ09mZnNldC55PTAsdm9pZCh0aGlzLnRyYWNraW5nUG9pbnRzPVtdKTt0aGlzLmNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuY24oXCJpc0RyYWdnaW5nXCIpKSx0aGlzLmlzRHJhZ2dpbmcmJih0aGlzLmFkZFRyYWNraW5nUG9pbnQoZSksdGhpcy5wYW5Pbmx5Wm9vbWVkJiZ0aGlzLmNvbnRlbnRSZWN0LndpZHRoLXRoaXMuY29udGVudFJlY3QuZml0V2lkdGg8MSYmdGhpcy5jb250ZW50UmVjdC5oZWlnaHQtdGhpcy5jb250ZW50UmVjdC5maXRIZWlnaHQ8MSYmKHRoaXMudHJhY2tpbmdQb2ludHM9W10pLGkodC50YXJnZXQsdGhpcy5jb250ZW50KSYmXCJ5XCI9PT10aGlzLmxvY2tlZEF4aXMmJih0aGlzLnRyYWNraW5nUG9pbnRzPVtdKSx0aGlzLmVtaXQoXCJ0b3VjaEVuZFwiLHQpLHRoaXMuaXNEcmFnZ2luZz0hMSx0aGlzLmxvY2tlZEF4aXM9ITEsdGhpcy5zdGF0ZSE9PWcuRGVzdHJveSYmKHQuZGVmYXVsdFByZXZlbnRlZHx8dGhpcy5zdGFydERlY2VsQW5pbSgpKSl9c3RhcnREZWNlbEFuaW0oKXt2YXIgZTtjb25zdCBpPXRoaXMuaXNTY2FsaW5nO3RoaXMuckFGJiYoY2FuY2VsQW5pbWF0aW9uRnJhbWUodGhpcy5yQUYpLHRoaXMuckFGPW51bGwpLHRoaXMuaXNCb3VuY2luZ1g9ITEsdGhpcy5pc0JvdW5jaW5nWT0hMTtmb3IoY29uc3QgdCBvZiBiKXRoaXMudmVsb2NpdHlbdF09MDt0aGlzLnRhcmdldC5lPXRoaXMuY3VycmVudC5lLHRoaXMudGFyZ2V0LmY9dGhpcy5jdXJyZW50LmYsRSh0aGlzLmNvbnRhaW5lcixcImlzLXNjYWxpbmdcIiksRSh0aGlzLmNvbnRhaW5lcixcImlzLWFuaW1hdGluZ1wiKSx0aGlzLmlzVGlja2luZz0hMTtjb25zdHt0cmFja2luZ1BvaW50czpufT10aGlzLHM9blswXSxvPW5bbi5sZW5ndGgtMV07bGV0IGE9MCxyPTAsbD0wO28mJnMmJihhPW8uY2xpZW50WC1zLmNsaWVudFgscj1vLmNsaWVudFktcy5jbGllbnRZLGw9by50aW1lLXMudGltZSk7Y29uc3QgYz0obnVsbD09PShlPXdpbmRvdy52aXN1YWxWaWV3cG9ydCl8fHZvaWQgMD09PWU/dm9pZCAwOmUuc2NhbGUpfHwxOzEhPT1jJiYoYSo9YyxyKj1jKTtsZXQgaD0wLGQ9MCx1PTAscD0wLGY9dGhpcy5vcHRpb24oXCJkZWNlbEZyaWN0aW9uXCIpO2NvbnN0IG09dGhpcy50YXJnZXRTY2FsZTtpZihsPjApe3U9TWF0aC5hYnMoYSk+Mz9hLyhsLzMwKTowLHA9TWF0aC5hYnMocik+Mz9yLyhsLzMwKTowO2NvbnN0IHQ9dGhpcy5vcHRpb24oXCJtYXhWZWxvY2l0eVwiKTt0JiYodT1NYXRoLm1heChNYXRoLm1pbih1LHQpLC0xKnQpLHA9TWF0aC5tYXgoTWF0aC5taW4ocCx0KSwtMSp0KSl9dSYmKGg9dS8oMS8oMS1mKS0xKSkscCYmKGQ9cC8oMS8oMS1mKS0xKSksKFwieVwiPT09dGhpcy5vcHRpb24oXCJsb2NrQXhpc1wiKXx8XCJ4eVwiPT09dGhpcy5vcHRpb24oXCJsb2NrQXhpc1wiKSYmXCJ5XCI9PT10aGlzLmxvY2tlZEF4aXMmJnQobSk9PT10aGlzLm1pblNjYWxlKSYmKGg9dT0wKSwoXCJ4XCI9PT10aGlzLm9wdGlvbihcImxvY2tBeGlzXCIpfHxcInh5XCI9PT10aGlzLm9wdGlvbihcImxvY2tBeGlzXCIpJiZcInhcIj09PXRoaXMubG9ja2VkQXhpcyYmdChtKT09PXRoaXMubWluU2NhbGUpJiYoZD1wPTApO2NvbnN0IGc9dGhpcy5kcmFnT2Zmc2V0Lngsdj10aGlzLmRyYWdPZmZzZXQueSx5PXRoaXMub3B0aW9uKFwiZHJhZ01pblRocmVzaG9sZFwiKXx8MDtNYXRoLmFicyhnKTx5JiZNYXRoLmFicyh2KTx5JiYoaD1kPTAsdT1wPTApLChtPHRoaXMubWluU2NhbGUtMWUtNXx8bT50aGlzLm1heFNjYWxlKzFlLTV8fGkmJiFoJiYhZCkmJihmPS4zNSksdGhpcy5hcHBseUNoYW5nZSh7cGFuWDpoLHBhblk6ZCxmcmljdGlvbjpmfSksdGhpcy5lbWl0KFwiZGVjZWxcIix1LHAsZyx2KX1vbldoZWVsKHQpe3ZhciBlPVstdC5kZWx0YVh8fDAsLXQuZGVsdGFZfHwwLC10LmRldGFpbHx8MF0ucmVkdWNlKChmdW5jdGlvbih0LGUpe3JldHVybiBNYXRoLmFicyhlKT5NYXRoLmFicyh0KT9lOnR9KSk7Y29uc3QgaT1NYXRoLm1heCgtMSxNYXRoLm1pbigxLGUpKTtpZih0aGlzLmVtaXQoXCJ3aGVlbFwiLHQsaSksdGhpcy5wYW5Nb2RlPT09VClyZXR1cm47aWYodC5kZWZhdWx0UHJldmVudGVkKXJldHVybjtjb25zdCBuPXRoaXMub3B0aW9uKFwid2hlZWxcIik7XCJwYW5cIj09PW4/KHQucHJldmVudERlZmF1bHQoKSx0aGlzLnBhbk9ubHlab29tZWQmJiF0aGlzLmNhblpvb21PdXQoKXx8dGhpcy5hcHBseUNoYW5nZSh7cGFuWDoyKi10LmRlbHRhWCxwYW5ZOjIqLXQuZGVsdGFZLGJvdW5jZTohMX0pKTpcInpvb21cIj09PW4mJiExIT09dGhpcy5vcHRpb24oXCJ6b29tXCIpJiZ0aGlzLnpvb21XaXRoV2hlZWwodCl9b25Nb3VzZU1vdmUodCl7dGhpcy5wYW5XaXRoTW91c2UodCl9b25LZXlkb3duKHQpe1wiRXNjYXBlXCI9PT10LmtleSYmdGhpcy50b2dnbGVGUygpfW9uUmVzaXplKCl7dGhpcy51cGRhdGVNZXRyaWNzKCksdGhpcy5jaGVja0JvdW5kcygpLmluQm91bmRzfHx0aGlzLnJlcXVlc3RUaWNrKCl9c2V0VHJhbnNmb3JtKCl7dGhpcy5lbWl0KFwiYmVmb3JlVHJhbnNmb3JtXCIpO2NvbnN0e2N1cnJlbnQ6ZSx0YXJnZXQ6aSxjb250ZW50Om4sY29udGVudFJlY3Q6c309dGhpcyxvPU9iamVjdC5hc3NpZ24oe30sUCk7Zm9yKGNvbnN0IG4gb2YgYil7Y29uc3Qgcz1cImVcIj09bnx8XCJmXCI9PT1uP006QztvW25dPXQoZVtuXSxzKSxNYXRoLmFicyhpW25dLWVbbl0pPChcImVcIj09bnx8XCJmXCI9PT1uPy41MTouMDAxKSYmKGVbbl09aVtuXSl9bGV0e2E6YSxiOnIsYzpsLGQ6YyxlOmgsZjpkfT1vLHU9YG1hdHJpeCgke2F9LCAke3J9LCAke2x9LCAke2N9LCAke2h9LCAke2R9KWAscD1uLnBhcmVudEVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MUGljdHVyZUVsZW1lbnQ/bi5wYXJlbnRFbGVtZW50Om47aWYodGhpcy5vcHRpb24oXCJ0cmFuc2Zvcm1QYXJlbnRcIikmJihwPXAucGFyZW50RWxlbWVudHx8cCkscC5zdHlsZS50cmFuc2Zvcm09PT11KXJldHVybjtwLnN0eWxlLnRyYW5zZm9ybT11O2NvbnN0e2NvbnRlbnRXaWR0aDpmLGNvbnRlbnRIZWlnaHQ6bX09dGhpcy5jYWxjdWxhdGVDb250ZW50RGltKCk7cy53aWR0aD1mLHMuaGVpZ2h0PW0sdGhpcy5lbWl0KFwiYWZ0ZXJUcmFuc2Zvcm1cIil9dXBkYXRlTWV0cmljcyhlPSExKXt2YXIgaTtpZighdGhpc3x8dGhpcy5zdGF0ZT09PWcuRGVzdHJveSlyZXR1cm47aWYodGhpcy5pc0NvbnRlbnRMb2FkaW5nKXJldHVybjtjb25zdCBuPU1hdGgubWF4KDEsKG51bGw9PT0oaT13aW5kb3cudmlzdWFsVmlld3BvcnQpfHx2b2lkIDA9PT1pP3ZvaWQgMDppLnNjYWxlKXx8MSkse2NvbnRhaW5lcjpzLGNvbnRlbnQ6b309dGhpcyxhPW8gaW5zdGFuY2VvZiBIVE1MSW1hZ2VFbGVtZW50LHI9cy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSxsPWdldENvbXB1dGVkU3R5bGUodGhpcy5jb250YWluZXIpO2xldCBjPXIud2lkdGgqbixoPXIuaGVpZ2h0Km47Y29uc3QgZD1wYXJzZUZsb2F0KGwucGFkZGluZ1RvcCkrcGFyc2VGbG9hdChsLnBhZGRpbmdCb3R0b20pLHU9Yy0ocGFyc2VGbG9hdChsLnBhZGRpbmdMZWZ0KStwYXJzZUZsb2F0KGwucGFkZGluZ1JpZ2h0KSkscD1oLWQ7dGhpcy5jb250YWluZXJSZWN0PXt3aWR0aDpjLGhlaWdodDpoLGlubmVyV2lkdGg6dSxpbm5lckhlaWdodDpwfTtsZXQgZj10aGlzLm9wdGlvbihcIndpZHRoXCIpfHxcImF1dG9cIixtPXRoaXMub3B0aW9uKFwiaGVpZ2h0XCIpfHxcImF1dG9cIjtcImF1dG9cIj09PWYmJihmPXBhcnNlRmxvYXQoby5kYXRhc2V0LndpZHRofHxcIlwiKXx8KHQ9PntsZXQgZT0wO3JldHVybiBlPXQgaW5zdGFuY2VvZiBIVE1MSW1hZ2VFbGVtZW50P3QubmF0dXJhbFdpZHRoOnQgaW5zdGFuY2VvZiBTVkdFbGVtZW50P3Qud2lkdGguYmFzZVZhbC52YWx1ZTpNYXRoLm1heCh0Lm9mZnNldFdpZHRoLHQuc2Nyb2xsV2lkdGgpLGV8fDB9KShvKSksXCJhdXRvXCI9PT1tJiYobT1wYXJzZUZsb2F0KG8uZGF0YXNldC5oZWlnaHR8fFwiXCIpfHwodD0+e2xldCBlPTA7cmV0dXJuIGU9dCBpbnN0YW5jZW9mIEhUTUxJbWFnZUVsZW1lbnQ/dC5uYXR1cmFsSGVpZ2h0OnQgaW5zdGFuY2VvZiBTVkdFbGVtZW50P3QuaGVpZ2h0LmJhc2VWYWwudmFsdWU6TWF0aC5tYXgodC5vZmZzZXRIZWlnaHQsdC5zY3JvbGxIZWlnaHQpLGV8fDB9KShvKSk7bGV0IGI9by5wYXJlbnRFbGVtZW50IGluc3RhbmNlb2YgSFRNTFBpY3R1cmVFbGVtZW50P28ucGFyZW50RWxlbWVudDpvO3RoaXMub3B0aW9uKFwidHJhbnNmb3JtUGFyZW50XCIpJiYoYj1iLnBhcmVudEVsZW1lbnR8fGIpO2NvbnN0IHY9Yi5nZXRBdHRyaWJ1dGUoXCJzdHlsZVwiKXx8XCJcIjtiLnN0eWxlLnNldFByb3BlcnR5KFwidHJhbnNmb3JtXCIsXCJub25lXCIsXCJpbXBvcnRhbnRcIiksYSYmKGIuc3R5bGUud2lkdGg9XCJcIixiLnN0eWxlLmhlaWdodD1cIlwiKSxiLm9mZnNldEhlaWdodDtjb25zdCB5PW8uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7bGV0IHc9eS53aWR0aCpuLHg9eS5oZWlnaHQqbixFPTAsUz0wO2EmJihNYXRoLmFicyhmLXcpPjF8fE1hdGguYWJzKG0teCk+MSkmJih7d2lkdGg6dyxoZWlnaHQ6eCx0b3A6RSxsZWZ0OlN9PSgodCxlLGksbik9Pntjb25zdCBzPWkvbjtyZXR1cm4gcz50L2U/KGk9dCxuPXQvcyk6KGk9ZSpzLG49ZSkse3dpZHRoOmksaGVpZ2h0Om4sdG9wOi41KihlLW4pLGxlZnQ6LjUqKHQtaSl9fSkodyx4LGYsbSkpLHRoaXMuY29udGVudFJlY3Q9T2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LHRoaXMuY29udGVudFJlY3QpLHt0b3A6eS50b3Atci50b3ArRSxib3R0b206ci5ib3R0b20teS5ib3R0b20rRSxsZWZ0OnkubGVmdC1yLmxlZnQrUyxyaWdodDpyLnJpZ2h0LXkucmlnaHQrUyxmaXRXaWR0aDp3LGZpdEhlaWdodDp4LHdpZHRoOncsaGVpZ2h0OngsZnVsbFdpZHRoOmYsZnVsbEhlaWdodDptfSksYi5zdHlsZS5jc3NUZXh0PXYsYSYmKGIuc3R5bGUud2lkdGg9YCR7d31weGAsYi5zdHlsZS5oZWlnaHQ9YCR7eH1weGApLHRoaXMuc2V0VHJhbnNmb3JtKCksITAhPT1lJiZ0aGlzLmVtaXQoXCJyZWZyZXNoXCIpLHRoaXMuaWdub3JlQm91bmRzfHwodCh0aGlzLnRhcmdldFNjYWxlKTx0KHRoaXMubWluU2NhbGUpP3RoaXMuem9vbVRvKHRoaXMubWluU2NhbGUse2ZyaWN0aW9uOjB9KTp0aGlzLnRhcmdldFNjYWxlPnRoaXMubWF4U2NhbGU/dGhpcy56b29tVG8odGhpcy5tYXhTY2FsZSx7ZnJpY3Rpb246MH0pOnRoaXMuc3RhdGU9PT1nLkluaXR8fHRoaXMuY2hlY2tCb3VuZHMoKS5pbkJvdW5kc3x8dGhpcy5yZXF1ZXN0VGljaygpKSx0aGlzLnVwZGF0ZUNvbnRyb2xzKCl9Z2V0Qm91bmRzKCl7Y29uc3QgZT10aGlzLm9wdGlvbihcImJvdW5kc1wiKTtpZihcImF1dG9cIiE9PWUpcmV0dXJuIGU7Y29uc3R7Y29udGVudFdpZHRoOmksY29udGVudEhlaWdodDpufT10aGlzLmNhbGN1bGF0ZUNvbnRlbnREaW0odGhpcy50YXJnZXQpO2xldCBzPTAsbz0wLGE9MCxyPTA7Y29uc3QgbD10aGlzLm9wdGlvbihcImluZmluaXRlXCIpO2lmKCEwPT09bHx8dGhpcy5sb2NrZWRBeGlzJiZsPT09dGhpcy5sb2NrZWRBeGlzKXM9LTEvMCxhPTEvMCxvPS0xLzAscj0xLzA7ZWxzZXtsZXR7Y29udGFpbmVyUmVjdDplLGNvbnRlbnRSZWN0Omx9PXRoaXMsYz10KHRoaXMuY29udGVudFJlY3QuZml0V2lkdGgqdGhpcy50YXJnZXRTY2FsZSxNKSxoPXQodGhpcy5jb250ZW50UmVjdC5maXRIZWlnaHQqdGhpcy50YXJnZXRTY2FsZSxNKSx7aW5uZXJXaWR0aDpkLGlubmVySGVpZ2h0OnV9PWU7aWYodGhpcy5jb250YWluZXJSZWN0LndpZHRoPT09YyYmKGQ9ZS53aWR0aCksdGhpcy5jb250YWluZXJSZWN0LndpZHRoPT09aCYmKHU9ZS5oZWlnaHQpLGk+ZCl7YT0uNSooaS1kKSxzPS0xKmE7bGV0IHQ9LjUqKGwucmlnaHQtbC5sZWZ0KTtzKz10LGErPXR9aWYodGhpcy5jb250ZW50UmVjdC5maXRXaWR0aD5kJiZpPGQmJihzLT0uNSoodGhpcy5jb250ZW50UmVjdC5maXRXaWR0aC1kKSxhLT0uNSoodGhpcy5jb250ZW50UmVjdC5maXRXaWR0aC1kKSksbj51KXtyPS41KihuLXUpLG89LTEqcjtsZXQgdD0uNSoobC5ib3R0b20tbC50b3ApO28rPXQscis9dH10aGlzLmNvbnRlbnRSZWN0LmZpdEhlaWdodD51JiZuPHUmJihzLT0uNSoodGhpcy5jb250ZW50UmVjdC5maXRIZWlnaHQtdSksYS09LjUqKHRoaXMuY29udGVudFJlY3QuZml0SGVpZ2h0LXUpKX1yZXR1cm57eDp7bWluOnMsbWF4OmF9LHk6e21pbjpvLG1heDpyfX19dXBkYXRlQ29udHJvbHMoKXtjb25zdCBlPXRoaXMsaT1lLmNvbnRhaW5lcix7cGFuTW9kZTpuLGNvbnRlbnRSZWN0OnMsZnVsbFNjYWxlOmEsdGFyZ2V0U2NhbGU6cixjb3ZlclNjYWxlOmwsbWF4U2NhbGU6YyxtaW5TY2FsZTpofT1lO2xldCBkPXt0b2dnbGVNYXg6ci1oPC41KihjLWgpP2M6aCx0b2dnbGVDb3ZlcjpyLWg8LjUqKGwtaCk/bDpoLHRvZ2dsZVpvb206ci1oPC41KihhLWgpP2E6aH1bZS5vcHRpb24oXCJjbGlja1wiKXx8XCJcIl18fGgsdT1lLmNhblpvb21JbigpLHA9ZS5jYW5ab29tT3V0KCksZj1uPT09TyYmISF0aGlzLm9wdGlvbihcInRvdWNoXCIpLG09cCYmZjtmJiYodChyKTx0KGgpJiYhdGhpcy5wYW5Pbmx5Wm9vbWVkJiYobT0hMCksKHQocy53aWR0aCwxKT50KHMuZml0V2lkdGgsMSl8fHQocy5oZWlnaHQsMSk+dChzLmZpdEhlaWdodCwxKSkmJihtPSEwKSksdChzLndpZHRoKnIsMSk8dChzLmZpdFdpZHRoLDEpJiYobT0hMSksbj09PVQmJihtPSExKTtsZXQgZz11JiZ0KGQpPnQociksYj0hZyYmIW0mJnAmJnQoZCk8dChyKTtvKGksdGhpcy5jbihcImNhblpvb21JblwiKSxnKSxvKGksdGhpcy5jbihcImNhblpvb21PdXRcIiksYiksbyhpLHRoaXMuY24oXCJpc0RyYWdnYWJsZVwiKSxtKTtmb3IoY29uc3QgdCBvZiBpLnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLXBhbnpvb20tYWN0aW9uPVwiem9vbUluXCJdJykpdT8odC5yZW1vdmVBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiKSx0LnJlbW92ZUF0dHJpYnV0ZShcInRhYmluZGV4XCIpKToodC5zZXRBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiLFwiXCIpLHQuc2V0QXR0cmlidXRlKFwidGFiaW5kZXhcIixcIi0xXCIpKTtmb3IoY29uc3QgdCBvZiBpLnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLXBhbnpvb20tYWN0aW9uPVwiem9vbU91dFwiXScpKXA/KHQucmVtb3ZlQXR0cmlidXRlKFwiZGlzYWJsZWRcIiksdC5yZW1vdmVBdHRyaWJ1dGUoXCJ0YWJpbmRleFwiKSk6KHQuc2V0QXR0cmlidXRlKFwiZGlzYWJsZWRcIixcIlwiKSx0LnNldEF0dHJpYnV0ZShcInRhYmluZGV4XCIsXCItMVwiKSk7Zm9yKGNvbnN0IHQgb2YgaS5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1wYW56b29tLWFjdGlvbj1cInRvZ2dsZVpvb21cIl0sW2RhdGEtcGFuem9vbS1hY3Rpb249XCJpdGVyYXRlWm9vbVwiXScpKXt1fHxwPyh0LnJlbW92ZUF0dHJpYnV0ZShcImRpc2FibGVkXCIpLHQucmVtb3ZlQXR0cmlidXRlKFwidGFiaW5kZXhcIikpOih0LnNldEF0dHJpYnV0ZShcImRpc2FibGVkXCIsXCJcIiksdC5zZXRBdHRyaWJ1dGUoXCJ0YWJpbmRleFwiLFwiLTFcIikpO2NvbnN0IGU9dC5xdWVyeVNlbGVjdG9yKFwiZ1wiKTtlJiYoZS5zdHlsZS5kaXNwbGF5PXU/XCJcIjpcIm5vbmVcIil9fXBhblRvKHt4OnQ9dGhpcy50YXJnZXQuZSx5OmU9dGhpcy50YXJnZXQuZixzY2FsZTppPXRoaXMudGFyZ2V0U2NhbGUsZnJpY3Rpb246bj10aGlzLm9wdGlvbihcImZyaWN0aW9uXCIpLGFuZ2xlOnM9MCxvcmlnaW5YOm89MCxvcmlnaW5ZOmE9MCxmbGlwWDpyPSExLGZsaXBZOmw9ITEsaWdub3JlQm91bmRzOmM9ITF9KXt0aGlzLnN0YXRlIT09Zy5EZXN0cm95JiZ0aGlzLmFwcGx5Q2hhbmdlKHtwYW5YOnQtdGhpcy50YXJnZXQuZSxwYW5ZOmUtdGhpcy50YXJnZXQuZixzY2FsZTppL3RoaXMudGFyZ2V0U2NhbGUsYW5nbGU6cyxvcmlnaW5YOm8sb3JpZ2luWTphLGZyaWN0aW9uOm4sZmxpcFg6cixmbGlwWTpsLGlnbm9yZUJvdW5kczpjfSl9YXBwbHlDaGFuZ2Uoe3Bhblg6ZT0wLHBhblk6aT0wLHNjYWxlOm49MSxhbmdsZTpzPTAsb3JpZ2luWDpvPS10aGlzLmN1cnJlbnQuZSxvcmlnaW5ZOmE9LXRoaXMuY3VycmVudC5mLGZyaWN0aW9uOnI9dGhpcy5vcHRpb24oXCJmcmljdGlvblwiKSxmbGlwWDpsPSExLGZsaXBZOmM9ITEsaWdub3JlQm91bmRzOmg9ITEsYm91bmNlOmQ9dGhpcy5vcHRpb24oXCJib3VuY2VcIil9KXtpZih0aGlzLnN0YXRlPT09Zy5EZXN0cm95KXJldHVybjt0aGlzLnJBRiYmKGNhbmNlbEFuaW1hdGlvbkZyYW1lKHRoaXMuckFGKSx0aGlzLnJBRj1udWxsKSx0aGlzLmZyaWN0aW9uPXJ8fDAsdGhpcy5pZ25vcmVCb3VuZHM9aDtjb25zdHtjdXJyZW50OnV9PXRoaXMscD11LmUsZj11LmYsbT10aGlzLmdldE1hdHJpeCh0aGlzLnRhcmdldCk7bGV0IHY9KG5ldyBET01NYXRyaXgpLnRyYW5zbGF0ZShwLGYpLnRyYW5zbGF0ZShvLGEpLnRyYW5zbGF0ZShlLGkpO2lmKHRoaXMub3B0aW9uKFwiem9vbVwiKSl7aWYoIWgpe2NvbnN0IHQ9dGhpcy50YXJnZXRTY2FsZSxlPXRoaXMubWluU2NhbGUsaT10aGlzLm1heFNjYWxlO3QqbjxlJiYobj1lL3QpLHQqbj5pJiYobj1pL3QpfXY9di5zY2FsZShuKX12PXYudHJhbnNsYXRlKC1vLC1hKS50cmFuc2xhdGUoLXAsLWYpLm11bHRpcGx5KG0pLHMmJih2PXYucm90YXRlKHMpKSxsJiYodj12LnNjYWxlKC0xLDEpKSxjJiYodj12LnNjYWxlKDEsLTEpKTtmb3IoY29uc3QgZSBvZiBiKVwiZVwiIT09ZSYmXCJmXCIhPT1lJiYodltlXT50aGlzLm1pblNjYWxlKzFlLTV8fHZbZV08dGhpcy5taW5TY2FsZS0xZS01KT90aGlzLnRhcmdldFtlXT12W2VdOnRoaXMudGFyZ2V0W2VdPXQodltlXSxNKTsodGhpcy50YXJnZXRTY2FsZTx0aGlzLnNjYWxlfHxNYXRoLmFicyhuLTEpPi4xfHx0aGlzLnBhbk1vZGU9PT1UfHwhMT09PWQpJiYhaCYmdGhpcy5jbGFtcFRhcmdldEJvdW5kcygpLHRoaXMuaXNSZXN0aW5nfHwodGhpcy5zdGF0ZT1nLlBhbm5pbmcsdGhpcy5yZXF1ZXN0VGljaygpKX1zdG9wKHQ9ITEpe2lmKHRoaXMuc3RhdGU9PT1nLkluaXR8fHRoaXMuc3RhdGU9PT1nLkRlc3Ryb3kpcmV0dXJuO2NvbnN0IGU9dGhpcy5pc1RpY2tpbmc7dGhpcy5yQUYmJihjYW5jZWxBbmltYXRpb25GcmFtZSh0aGlzLnJBRiksdGhpcy5yQUY9bnVsbCksdGhpcy5pc0JvdW5jaW5nWD0hMSx0aGlzLmlzQm91bmNpbmdZPSExO2Zvcihjb25zdCBlIG9mIGIpdGhpcy52ZWxvY2l0eVtlXT0wLFwiY3VycmVudFwiPT09dD90aGlzLmN1cnJlbnRbZV09dGhpcy50YXJnZXRbZV06XCJ0YXJnZXRcIj09PXQmJih0aGlzLnRhcmdldFtlXT10aGlzLmN1cnJlbnRbZV0pO3RoaXMuc2V0VHJhbnNmb3JtKCksRSh0aGlzLmNvbnRhaW5lcixcImlzLXNjYWxpbmdcIiksRSh0aGlzLmNvbnRhaW5lcixcImlzLWFuaW1hdGluZ1wiKSx0aGlzLmlzVGlja2luZz0hMSx0aGlzLnN0YXRlPWcuUmVhZHksZSYmKHRoaXMuZW1pdChcImVuZEFuaW1hdGlvblwiKSx0aGlzLnVwZGF0ZUNvbnRyb2xzKCkpfXJlcXVlc3RUaWNrKCl7dGhpcy5pc1RpY2tpbmd8fCh0aGlzLmVtaXQoXCJzdGFydEFuaW1hdGlvblwiKSx0aGlzLnVwZGF0ZUNvbnRyb2xzKCksUyh0aGlzLmNvbnRhaW5lcixcImlzLWFuaW1hdGluZ1wiKSx0aGlzLmlzU2NhbGluZyYmUyh0aGlzLmNvbnRhaW5lcixcImlzLXNjYWxpbmdcIikpLHRoaXMuaXNUaWNraW5nPSEwLHRoaXMuckFGfHwodGhpcy5yQUY9cmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgoKT0+dGhpcy5hbmltYXRlKCkpKSl9cGFuV2l0aE1vdXNlKGUsaT10aGlzLm9wdGlvbihcIm1vdXNlTW92ZUZyaWN0aW9uXCIpKXtpZih0aGlzLnBtbWU9ZSx0aGlzLnBhbk1vZGUhPT1UfHwhZSlyZXR1cm47aWYodCh0aGlzLnRhcmdldFNjYWxlKTw9dCh0aGlzLm1pblNjYWxlKSlyZXR1cm47dGhpcy5lbWl0KFwibW91c2VNb3ZlXCIsZSk7Y29uc3R7Y29udGFpbmVyOm4sY29udGFpbmVyUmVjdDpzLGNvbnRlbnRSZWN0Om99PXRoaXMsYT1zLndpZHRoLHI9cy5oZWlnaHQsbD1uLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLGM9KGUuY2xpZW50WHx8MCktbC5sZWZ0LGg9KGUuY2xpZW50WXx8MCktbC50b3A7bGV0e2NvbnRlbnRXaWR0aDpkLGNvbnRlbnRIZWlnaHQ6dX09dGhpcy5jYWxjdWxhdGVDb250ZW50RGltKHRoaXMudGFyZ2V0KTtjb25zdCBwPXRoaXMub3B0aW9uKFwibW91c2VNb3ZlRmFjdG9yXCIpO3A+MSYmKGQhPT1hJiYoZCo9cCksdSE9PXImJih1Kj1wKSk7bGV0IGY9LjUqKGQtYSktYy9hKjEwMC8xMDAqKGQtYSk7Zis9LjUqKG8ucmlnaHQtby5sZWZ0KTtsZXQgbT0uNSoodS1yKS1oL3IqMTAwLzEwMCoodS1yKTttKz0uNSooby5ib3R0b20tby50b3ApLHRoaXMuYXBwbHlDaGFuZ2Uoe3Bhblg6Zi10aGlzLnRhcmdldC5lLHBhblk6bS10aGlzLnRhcmdldC5mLGZyaWN0aW9uOml9KX16b29tV2l0aFdoZWVsKGUpe2lmKHRoaXMuc3RhdGU9PT1nLkRlc3Ryb3l8fHRoaXMuc3RhdGU9PT1nLkluaXQpcmV0dXJuO2NvbnN0IGk9RGF0ZS5ub3coKTtpZihpLXRoaXMucHd0PDQ1KXJldHVybiB2b2lkIGUucHJldmVudERlZmF1bHQoKTt0aGlzLnB3dD1pO3ZhciBuPVstZS5kZWx0YVh8fDAsLWUuZGVsdGFZfHwwLC1lLmRldGFpbHx8MF0ucmVkdWNlKChmdW5jdGlvbih0LGUpe3JldHVybiBNYXRoLmFicyhlKT5NYXRoLmFicyh0KT9lOnR9KSk7Y29uc3Qgcz1NYXRoLm1heCgtMSxNYXRoLm1pbigxLG4pKSx7dGFyZ2V0U2NhbGU6byxtYXhTY2FsZTphLG1pblNjYWxlOnJ9PXRoaXM7bGV0IGw9byooMTAwKzQ1KnMpLzEwMDt0KGwpPHQocikmJnQobyk8PXQocik/KHRoaXMuY3dkKz1NYXRoLmFicyhzKSxsPXIpOnQobCk+dChhKSYmdChvKT49dChhKT8odGhpcy5jd2QrPU1hdGguYWJzKHMpLGw9YSk6KHRoaXMuY3dkPTAsbD1NYXRoLm1heChNYXRoLm1pbihsLGEpLHIpKSx0aGlzLmN3ZD50aGlzLm9wdGlvbihcIndoZWVsTGltaXRcIil8fChlLnByZXZlbnREZWZhdWx0KCksdChsKSE9PXQobykmJnRoaXMuem9vbVRvKGwse2V2ZW50OmV9KSl9Y2FuWm9vbUluKCl7cmV0dXJuIHRoaXMub3B0aW9uKFwiem9vbVwiKSYmKHQodGhpcy5jb250ZW50UmVjdC53aWR0aCwxKTx0KHRoaXMuY29udGVudFJlY3QuZml0V2lkdGgsMSl8fHQodGhpcy50YXJnZXRTY2FsZSk8dCh0aGlzLm1heFNjYWxlKSl9Y2FuWm9vbU91dCgpe3JldHVybiB0aGlzLm9wdGlvbihcInpvb21cIikmJnQodGhpcy50YXJnZXRTY2FsZSk+dCh0aGlzLm1pblNjYWxlKX16b29tSW4odD0xLjI1LGUpe3RoaXMuem9vbVRvKHRoaXMudGFyZ2V0U2NhbGUqdCxlKX16b29tT3V0KHQ9LjgsZSl7dGhpcy56b29tVG8odGhpcy50YXJnZXRTY2FsZSp0LGUpfXpvb21Ub0ZpdCh0KXt0aGlzLnpvb21UbyhcImZpdFwiLHQpfXpvb21Ub0NvdmVyKHQpe3RoaXMuem9vbVRvKFwiY292ZXJcIix0KX16b29tVG9GdWxsKHQpe3RoaXMuem9vbVRvKFwiZnVsbFwiLHQpfXpvb21Ub01heCh0KXt0aGlzLnpvb21UbyhcIm1heFwiLHQpfXRvZ2dsZVpvb20odCl7dGhpcy56b29tVG8odGhpcy50YXJnZXRTY2FsZS10aGlzLm1pblNjYWxlPC41Kih0aGlzLmZ1bGxTY2FsZS10aGlzLm1pblNjYWxlKT9cImZ1bGxcIjpcImZpdFwiLHQpfXRvZ2dsZU1heCh0KXt0aGlzLnpvb21Ubyh0aGlzLnRhcmdldFNjYWxlLXRoaXMubWluU2NhbGU8LjUqKHRoaXMubWF4U2NhbGUtdGhpcy5taW5TY2FsZSk/XCJtYXhcIjpcImZpdFwiLHQpfXRvZ2dsZUNvdmVyKHQpe3RoaXMuem9vbVRvKHRoaXMudGFyZ2V0U2NhbGUtdGhpcy5taW5TY2FsZTwuNSoodGhpcy5jb3ZlclNjYWxlLXRoaXMubWluU2NhbGUpP1wiY292ZXJcIjpcImZpdFwiLHQpfWl0ZXJhdGVab29tKHQpe3RoaXMuem9vbVRvKFwibmV4dFwiLHQpfXpvb21Ubyh0PTEse2ZyaWN0aW9uOmU9XCJhdXRvXCIsb3JpZ2luWDppPVwiYXV0b1wiLG9yaWdpblk6bj1cImF1dG9cIixldmVudDpzfT17fSl7aWYodGhpcy5pc0NvbnRlbnRMb2FkaW5nfHx0aGlzLnN0YXRlPT09Zy5EZXN0cm95KXJldHVybjtjb25zdHt0YXJnZXRTY2FsZTpvfT10aGlzO3RoaXMuc3RvcCgpO2xldCBhPTE7aWYodGhpcy5wYW5Nb2RlPT09VCYmKHM9dGhpcy5wbW1lfHxzKSxzfHxcImF1dG9cIj09PWl8fFwiYXV0b1wiPT09bil7Y29uc3QgdD10aGlzLmNvbnRlbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksZT10aGlzLmNvbnRhaW5lci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSxvPXM/cy5jbGllbnRYOmUubGVmdCsuNSplLndpZHRoLGE9cz9zLmNsaWVudFk6ZS50b3ArLjUqZS5oZWlnaHQ7aT1vLXQubGVmdC0uNSp0LndpZHRoLG49YS10LnRvcC0uNSp0LmhlaWdodH1jb25zdCByPXRoaXMuZnVsbFNjYWxlLGw9dGhpcy5tYXhTY2FsZTtsZXQgYz10aGlzLmNvdmVyU2NhbGU7XCJudW1iZXJcIj09dHlwZW9mIHQ/YT10L286KFwibmV4dFwiPT09dCYmKHItYzwuMiYmKGM9ciksdD1vPHItMWUtNT9cImZ1bGxcIjpvPGwtMWUtNT9cIm1heFwiOlwiZml0XCIpLGE9XCJmdWxsXCI9PT10P3Ivb3x8MTpcImNvdmVyXCI9PT10P2Mvb3x8MTpcIm1heFwiPT09dD9sL298fDE6MS9vfHwxKSxlPVwiYXV0b1wiPT09ZT9hPjE/LjE1Oi4yNTplLHRoaXMuYXBwbHlDaGFuZ2Uoe3NjYWxlOmEsb3JpZ2luWDppLG9yaWdpblk6bixmcmljdGlvbjplfSkscyYmdGhpcy5wYW5Nb2RlPT09VCYmdGhpcy5wYW5XaXRoTW91c2UocyxlKX1yb3RhdGVDQ1coKXt0aGlzLmFwcGx5Q2hhbmdlKHthbmdsZTotOTB9KX1yb3RhdGVDVygpe3RoaXMuYXBwbHlDaGFuZ2Uoe2FuZ2xlOjkwfSl9ZmxpcFgoKXt0aGlzLmFwcGx5Q2hhbmdlKHtmbGlwWDohMH0pfWZsaXBZKCl7dGhpcy5hcHBseUNoYW5nZSh7ZmxpcFk6ITB9KX1maXRYKCl7dGhpcy5zdG9wKFwidGFyZ2V0XCIpO2NvbnN0e2NvbnRhaW5lclJlY3Q6dCxjb250ZW50UmVjdDplLHRhcmdldDppfT10aGlzO3RoaXMuYXBwbHlDaGFuZ2Uoe3Bhblg6LjUqdC53aWR0aC0oZS5sZWZ0Ky41KmUuZml0V2lkdGgpLWkuZSxwYW5ZOi41KnQuaGVpZ2h0LShlLnRvcCsuNSplLmZpdEhlaWdodCktaS5mLHNjYWxlOnQud2lkdGgvZS5maXRXaWR0aC90aGlzLnRhcmdldFNjYWxlLG9yaWdpblg6MCxvcmlnaW5ZOjAsaWdub3JlQm91bmRzOiEwfSl9Zml0WSgpe3RoaXMuc3RvcChcInRhcmdldFwiKTtjb25zdHtjb250YWluZXJSZWN0OnQsY29udGVudFJlY3Q6ZSx0YXJnZXQ6aX09dGhpczt0aGlzLmFwcGx5Q2hhbmdlKHtwYW5YOi41KnQud2lkdGgtKGUubGVmdCsuNSplLmZpdFdpZHRoKS1pLmUscGFuWTouNSp0LmlubmVySGVpZ2h0LShlLnRvcCsuNSplLmZpdEhlaWdodCktaS5mLHNjYWxlOnQuaGVpZ2h0L2UuZml0SGVpZ2h0L3RoaXMudGFyZ2V0U2NhbGUsb3JpZ2luWDowLG9yaWdpblk6MCxpZ25vcmVCb3VuZHM6ITB9KX10b2dnbGVGUygpe2NvbnN0e2NvbnRhaW5lcjp0fT10aGlzLGU9dGhpcy5jbihcImluRnVsbHNjcmVlblwiKSxpPXRoaXMuY24oXCJodG1sSGFzRnVsbHNjcmVlblwiKTt0LmNsYXNzTGlzdC50b2dnbGUoZSk7Y29uc3Qgbj10LmNsYXNzTGlzdC5jb250YWlucyhlKTtuPyhkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LmFkZChpKSxkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLHRoaXMub25LZXlkb3duLCEwKSk6KGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKGkpLGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsdGhpcy5vbktleWRvd24sITApKSx0aGlzLnVwZGF0ZU1ldHJpY3MoKSx0aGlzLmVtaXQobj9cImVudGVyRlNcIjpcImV4aXRGU1wiKX1nZXRNYXRyaXgodD10aGlzLmN1cnJlbnQpe2NvbnN0e2E6ZSxiOmksYzpuLGQ6cyxlOm8sZjphfT10O3JldHVybiBuZXcgRE9NTWF0cml4KFtlLGksbixzLG8sYV0pfXJlc2V0KHQpe2lmKHRoaXMuc3RhdGUhPT1nLkluaXQmJnRoaXMuc3RhdGUhPT1nLkRlc3Ryb3kpe3RoaXMuc3RvcChcImN1cnJlbnRcIik7Zm9yKGNvbnN0IHQgb2YgYil0aGlzLnRhcmdldFt0XT1QW3RdO3RoaXMudGFyZ2V0LmE9dGhpcy5taW5TY2FsZSx0aGlzLnRhcmdldC5kPXRoaXMubWluU2NhbGUsdGhpcy5jbGFtcFRhcmdldEJvdW5kcygpLHRoaXMuaXNSZXN0aW5nfHwodGhpcy5mcmljdGlvbj12b2lkIDA9PT10P3RoaXMub3B0aW9uKFwiZnJpY3Rpb25cIik6dCx0aGlzLnN0YXRlPWcuUGFubmluZyx0aGlzLnJlcXVlc3RUaWNrKCkpfX1kZXN0cm95KCl7dGhpcy5zdG9wKCksdGhpcy5zdGF0ZT1nLkRlc3Ryb3ksdGhpcy5kZXRhY2hFdmVudHMoKSx0aGlzLmRldGFjaE9ic2VydmVyKCk7Y29uc3R7Y29udGFpbmVyOnQsY29udGVudDplfT10aGlzLGk9dGhpcy5vcHRpb24oXCJjbGFzc2VzXCIpfHx7fTtmb3IoY29uc3QgZSBvZiBPYmplY3QudmFsdWVzKGkpKXQuY2xhc3NMaXN0LnJlbW92ZShlK1wiXCIpO2UmJihlLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsdGhpcy5vbkxvYWQpLGUucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImVycm9yXCIsdGhpcy5vbkVycm9yKSksdGhpcy5kZXRhY2hQbHVnaW5zKCl9fU9iamVjdC5kZWZpbmVQcm9wZXJ0eShSLFwiZGVmYXVsdHNcIix7ZW51bWVyYWJsZTohMCxjb25maWd1cmFibGU6ITAsd3JpdGFibGU6ITAsdmFsdWU6eX0pLE9iamVjdC5kZWZpbmVQcm9wZXJ0eShSLFwiUGx1Z2luc1wiLHtlbnVtZXJhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMCx3cml0YWJsZTohMCx2YWx1ZTp7fX0pO2NvbnN0IGs9ZnVuY3Rpb24odCxlKXtsZXQgaT0hMDtyZXR1cm4oLi4ubik9PntpJiYoaT0hMSx0KC4uLm4pLHNldFRpbWVvdXQoKCgpPT57aT0hMH0pLGUpKX19LEk9KHQsZSk9PntsZXQgaT1bXTtyZXR1cm4gdC5jaGlsZE5vZGVzLmZvckVhY2goKHQ9Pnt0Lm5vZGVUeXBlIT09Tm9kZS5FTEVNRU5UX05PREV8fGUmJiF0Lm1hdGNoZXMoZSl8fGkucHVzaCh0KX0pKSxpfSxEPXt2aWV3cG9ydDpudWxsLHRyYWNrOm51bGwsZW5hYmxlZDohMCxzbGlkZXM6W10sYXhpczpcInhcIix0cmFuc2l0aW9uOlwiZmFkZVwiLHByZWxvYWQ6MSxzbGlkZXNQZXJQYWdlOlwiYXV0b1wiLGluaXRpYWxQYWdlOjAsZnJpY3Rpb246LjEyLFBhbnpvb206e2RlY2VsRnJpY3Rpb246LjEyfSxjZW50ZXI6ITAsaW5maW5pdGU6ITAsZmlsbDohMCxkcmFnRnJlZTohMSxhZGFwdGl2ZUhlaWdodDohMSxkaXJlY3Rpb246XCJsdHJcIixjbGFzc2VzOntjb250YWluZXI6XCJmLWNhcm91c2VsXCIsdmlld3BvcnQ6XCJmLWNhcm91c2VsX192aWV3cG9ydFwiLHRyYWNrOlwiZi1jYXJvdXNlbF9fdHJhY2tcIixzbGlkZTpcImYtY2Fyb3VzZWxfX3NsaWRlXCIsaXNMVFI6XCJpcy1sdHJcIixpc1JUTDpcImlzLXJ0bFwiLGlzSG9yaXpvbnRhbDpcImlzLWhvcml6b250YWxcIixpc1ZlcnRpY2FsOlwiaXMtdmVydGljYWxcIixpblRyYW5zaXRpb246XCJpbi10cmFuc2l0aW9uXCIsaXNTZWxlY3RlZDpcImlzLXNlbGVjdGVkXCJ9LGwxMG46e05FWFQ6XCJOZXh0IHNsaWRlXCIsUFJFVjpcIlByZXZpb3VzIHNsaWRlXCIsR09UTzpcIkdvIHRvIHNsaWRlICMlZFwifX07dmFyIEY7IWZ1bmN0aW9uKHQpe3RbdC5Jbml0PTBdPVwiSW5pdFwiLHRbdC5SZWFkeT0xXT1cIlJlYWR5XCIsdFt0LkRlc3Ryb3k9Ml09XCJEZXN0cm95XCJ9KEZ8fChGPXt9KSk7Y29uc3Qgaj10PT57aWYoXCJzdHJpbmdcIj09dHlwZW9mIHR8fHQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCl0PXtodG1sOnR9O2Vsc2V7Y29uc3QgZT10LnRodW1iO3ZvaWQgMCE9PWUmJihcInN0cmluZ1wiPT10eXBlb2YgZSYmKHQudGh1bWJTcmM9ZSksZSBpbnN0YW5jZW9mIEhUTUxJbWFnZUVsZW1lbnQmJih0LnRodW1iRWw9ZSx0LnRodW1iRWxTcmM9ZS5zcmMsdC50aHVtYlNyYz1lLnNyYyksZGVsZXRlIHQudGh1bWIpfXJldHVybiBPYmplY3QuYXNzaWduKHtodG1sOlwiXCIsZWw6bnVsbCxpc0RvbTohMSxjbGFzczpcIlwiLGN1c3RvbUNsYXNzOlwiXCIsaW5kZXg6LTEsZGltOjAsZ2FwOjAscG9zOjAsdHJhbnNpdGlvbjohMX0sdCl9LEg9KHQ9e30pPT5PYmplY3QuYXNzaWduKHtpbmRleDotMSxzbGlkZXM6W10sZGltOjAscG9zOi0xfSx0KTtjbGFzcyBCIGV4dGVuZHMgZntjb25zdHJ1Y3Rvcih0LGUpe3N1cGVyKGUpLE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLFwiaW5zdGFuY2VcIix7ZW51bWVyYWJsZTohMCxjb25maWd1cmFibGU6ITAsd3JpdGFibGU6ITAsdmFsdWU6dH0pfWF0dGFjaCgpe31kZXRhY2goKXt9fWNvbnN0IE49e2NsYXNzZXM6e2xpc3Q6XCJmLWNhcm91c2VsX19kb3RzXCIsaXNEeW5hbWljOlwiaXMtZHluYW1pY1wiLGhhc0RvdHM6XCJoYXMtZG90c1wiLGRvdDpcImYtY2Fyb3VzZWxfX2RvdFwiLGlzQmVmb3JlUHJldjpcImlzLWJlZm9yZS1wcmV2XCIsaXNQcmV2OlwiaXMtcHJldlwiLGlzQ3VycmVudDpcImlzLWN1cnJlbnRcIixpc05leHQ6XCJpcy1uZXh0XCIsaXNBZnRlck5leHQ6XCJpcy1hZnRlci1uZXh0XCJ9LGRvdFRwbDonPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgZGF0YS1jYXJvdXNlbC1wYWdlPVwiJWlcIiBhcmlhLWxhYmVsPVwie3tHT1RPfX1cIj48c3BhbiBjbGFzcz1cImYtY2Fyb3VzZWxfX2RvdFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvc3Bhbj48L2J1dHRvbj4nLGR5bmFtaWNGcm9tOjExLG1heENvdW50OjEvMCxtaW5Db3VudDoyfTtjbGFzcyBfIGV4dGVuZHMgQntjb25zdHJ1Y3Rvcigpe3N1cGVyKC4uLmFyZ3VtZW50cyksT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsXCJpc0R5bmFtaWNcIix7ZW51bWVyYWJsZTohMCxjb25maWd1cmFibGU6ITAsd3JpdGFibGU6ITAsdmFsdWU6ITF9KSxPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcyxcImxpc3RcIix7ZW51bWVyYWJsZTohMCxjb25maWd1cmFibGU6ITAsd3JpdGFibGU6ITAsdmFsdWU6bnVsbH0pfW9uUmVmcmVzaCgpe3RoaXMucmVmcmVzaCgpfWJ1aWxkKCl7bGV0IHQ9dGhpcy5saXN0O3JldHVybiB0fHwodD1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIiksUyh0LHRoaXMuY24oXCJsaXN0XCIpKSx0LnNldEF0dHJpYnV0ZShcInJvbGVcIixcInRhYmxpc3RcIiksdGhpcy5pbnN0YW5jZS5jb250YWluZXIuYXBwZW5kQ2hpbGQodCksUyh0aGlzLmluc3RhbmNlLmNvbnRhaW5lcix0aGlzLmNuKFwiaGFzRG90c1wiKSksdGhpcy5saXN0PXQpLHR9cmVmcmVzaCgpe3ZhciB0O2NvbnN0IGU9dGhpcy5pbnN0YW5jZS5wYWdlcy5sZW5ndGgsaT1NYXRoLm1pbigyLHRoaXMub3B0aW9uKFwibWluQ291bnRcIikpLG49TWF0aC5tYXgoMmUzLHRoaXMub3B0aW9uKFwibWF4Q291bnRcIikpLHM9dGhpcy5vcHRpb24oXCJkeW5hbWljRnJvbVwiKTtpZihlPGl8fGU+bilyZXR1cm4gdm9pZCB0aGlzLmNsZWFudXAoKTtjb25zdCBhPVwibnVtYmVyXCI9PXR5cGVvZiBzJiZlPjUmJmU+PXMscj0hdGhpcy5saXN0fHx0aGlzLmlzRHluYW1pYyE9PWF8fHRoaXMubGlzdC5jaGlsZHJlbi5sZW5ndGghPT1lO3ImJnRoaXMuY2xlYW51cCgpO2NvbnN0IGw9dGhpcy5idWlsZCgpO2lmKG8obCx0aGlzLmNuKFwiaXNEeW5hbWljXCIpLCEhYSkscilmb3IobGV0IHQ9MDt0PGU7dCsrKWwuYXBwZW5kKHRoaXMuY3JlYXRlSXRlbSh0KSk7bGV0IGMsaD0wO2Zvcihjb25zdCBlIG9mWy4uLmwuY2hpbGRyZW5dKXtjb25zdCBpPWg9PT10aGlzLmluc3RhbmNlLnBhZ2U7aSYmKGM9ZSksbyhlLHRoaXMuY24oXCJpc0N1cnJlbnRcIiksaSksbnVsbD09PSh0PWUuY2hpbGRyZW5bMF0pfHx2b2lkIDA9PT10fHx0LnNldEF0dHJpYnV0ZShcImFyaWEtc2VsZWN0ZWRcIixpP1widHJ1ZVwiOlwiZmFsc2VcIik7Zm9yKGNvbnN0IHQgb2ZbXCJpc0JlZm9yZVByZXZcIixcImlzUHJldlwiLFwiaXNOZXh0XCIsXCJpc0FmdGVyTmV4dFwiXSlFKGUsdGhpcy5jbih0KSk7aCsrfWlmKGM9Y3x8bC5maXJzdENoaWxkLGEmJmMpe2NvbnN0IHQ9Yy5wcmV2aW91c0VsZW1lbnRTaWJsaW5nLGU9dCYmdC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nO1ModCx0aGlzLmNuKFwiaXNQcmV2XCIpKSxTKGUsdGhpcy5jbihcImlzQmVmb3JlUHJldlwiKSk7Y29uc3QgaT1jLm5leHRFbGVtZW50U2libGluZyxuPWkmJmkubmV4dEVsZW1lbnRTaWJsaW5nO1MoaSx0aGlzLmNuKFwiaXNOZXh0XCIpKSxTKG4sdGhpcy5jbihcImlzQWZ0ZXJOZXh0XCIpKX10aGlzLmlzRHluYW1pYz1hfWNyZWF0ZUl0ZW0odD0wKXt2YXIgZTtjb25zdCBpPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtpLnNldEF0dHJpYnV0ZShcInJvbGVcIixcInByZXNlbnRhdGlvblwiKTtjb25zdCBzPW4odGhpcy5pbnN0YW5jZS5sb2NhbGl6ZSh0aGlzLm9wdGlvbihcImRvdFRwbFwiKSxbW1wiJWRcIix0KzFdXSkucmVwbGFjZSgvXFwlaS9nLHQrXCJcIikpO3JldHVybiBpLmFwcGVuZENoaWxkKHMpLG51bGw9PT0oZT1pLmNoaWxkcmVuWzBdKXx8dm9pZCAwPT09ZXx8ZS5zZXRBdHRyaWJ1dGUoXCJyb2xlXCIsXCJ0YWJcIiksaX1jbGVhbnVwKCl7dGhpcy5saXN0JiYodGhpcy5saXN0LnJlbW92ZSgpLHRoaXMubGlzdD1udWxsKSx0aGlzLmlzRHluYW1pYz0hMSxFKHRoaXMuaW5zdGFuY2UuY29udGFpbmVyLHRoaXMuY24oXCJoYXNEb3RzXCIpKX1hdHRhY2goKXt0aGlzLmluc3RhbmNlLm9uKFtcInJlZnJlc2hcIixcImNoYW5nZVwiXSx0aGlzLm9uUmVmcmVzaCl9ZGV0YWNoKCl7dGhpcy5pbnN0YW5jZS5vZmYoW1wicmVmcmVzaFwiLFwiY2hhbmdlXCJdLHRoaXMub25SZWZyZXNoKSx0aGlzLmNsZWFudXAoKX19T2JqZWN0LmRlZmluZVByb3BlcnR5KF8sXCJkZWZhdWx0c1wiLHtlbnVtZXJhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMCx3cml0YWJsZTohMCx2YWx1ZTpOfSk7Y29uc3QgVz1cImRpc2FibGVkXCIsJD1cIm5leHRcIixYPVwicHJldlwiO2NsYXNzIFkgZXh0ZW5kcyBCe2NvbnN0cnVjdG9yKCl7c3VwZXIoLi4uYXJndW1lbnRzKSxPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcyxcImNvbnRhaW5lclwiLHtlbnVtZXJhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMCx3cml0YWJsZTohMCx2YWx1ZTpudWxsfSksT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsXCJwcmV2XCIse2VudW1lcmFibGU6ITAsY29uZmlndXJhYmxlOiEwLHdyaXRhYmxlOiEwLHZhbHVlOm51bGx9KSxPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcyxcIm5leHRcIix7ZW51bWVyYWJsZTohMCxjb25maWd1cmFibGU6ITAsd3JpdGFibGU6ITAsdmFsdWU6bnVsbH0pfW9uUmVmcmVzaCgpe2NvbnN0IHQ9dGhpcy5pbnN0YW5jZSxlPXQucGFnZXMubGVuZ3RoLGk9dC5wYWdlO2lmKGU8MilyZXR1cm4gdm9pZCB0aGlzLmNsZWFudXAoKTt0aGlzLmJ1aWxkKCk7bGV0IG49dGhpcy5wcmV2LHM9dGhpcy5uZXh0O24mJnMmJihuLnJlbW92ZUF0dHJpYnV0ZShXKSxzLnJlbW92ZUF0dHJpYnV0ZShXKSx0LmlzSW5maW5pdGV8fChpPD0wJiZuLnNldEF0dHJpYnV0ZShXLFwiXCIpLGk+PWUtMSYmcy5zZXRBdHRyaWJ1dGUoVyxcIlwiKSkpfWNyZWF0ZUJ1dHRvbih0KXtjb25zdCBlPXRoaXMuaW5zdGFuY2UsaT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO2kuc2V0QXR0cmlidXRlKFwidGFiaW5kZXhcIixcIjBcIiksaS5zZXRBdHRyaWJ1dGUoXCJ0aXRsZVwiLGUubG9jYWxpemUoYHt7JHt0LnRvVXBwZXJDYXNlKCl9fX1gKSksUyhpLHRoaXMuY24oXCJidXR0b25cIikrXCIgXCIrdGhpcy5jbih0PT09JD9cImlzTmV4dFwiOlwiaXNQcmV2XCIpKTtjb25zdCBuPWUuaXNSVEw/dD09PSQ/WDokOnQ7dmFyIHM7cmV0dXJuIGkuaW5uZXJIVE1MPWUubG9jYWxpemUodGhpcy5vcHRpb24oYCR7bn1UcGxgKSksaS5kYXRhc2V0W2BjYXJvdXNlbCR7cz10LHM/cy5tYXRjaChcIl5bYS16XVwiKT9zLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpK3Muc3Vic3RyaW5nKDEpOnM6XCJcIn1gXT1cInRydWVcIixpfWJ1aWxkKCl7bGV0IHQ9dGhpcy5jb250YWluZXI7dHx8KHRoaXMuY29udGFpbmVyPXQ9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKSxTKHQsdGhpcy5jbihcImNvbnRhaW5lclwiKSksdGhpcy5pbnN0YW5jZS5jb250YWluZXIuYXBwZW5kQ2hpbGQodCkpLHRoaXMubmV4dHx8KHRoaXMubmV4dD10LmFwcGVuZENoaWxkKHRoaXMuY3JlYXRlQnV0dG9uKCQpKSksdGhpcy5wcmV2fHwodGhpcy5wcmV2PXQuYXBwZW5kQ2hpbGQodGhpcy5jcmVhdGVCdXR0b24oWCkpKX1jbGVhbnVwKCl7dGhpcy5wcmV2JiZ0aGlzLnByZXYucmVtb3ZlKCksdGhpcy5uZXh0JiZ0aGlzLm5leHQucmVtb3ZlKCksdGhpcy5jb250YWluZXImJnRoaXMuY29udGFpbmVyLnJlbW92ZSgpLHRoaXMucHJldj1udWxsLHRoaXMubmV4dD1udWxsLHRoaXMuY29udGFpbmVyPW51bGx9YXR0YWNoKCl7dGhpcy5pbnN0YW5jZS5vbihbXCJyZWZyZXNoXCIsXCJjaGFuZ2VcIl0sdGhpcy5vblJlZnJlc2gpfWRldGFjaCgpe3RoaXMuaW5zdGFuY2Uub2ZmKFtcInJlZnJlc2hcIixcImNoYW5nZVwiXSx0aGlzLm9uUmVmcmVzaCksdGhpcy5jbGVhbnVwKCl9fU9iamVjdC5kZWZpbmVQcm9wZXJ0eShZLFwiZGVmYXVsdHNcIix7ZW51bWVyYWJsZTohMCxjb25maWd1cmFibGU6ITAsd3JpdGFibGU6ITAsdmFsdWU6e2NsYXNzZXM6e2NvbnRhaW5lcjpcImYtY2Fyb3VzZWxfX25hdlwiLGJ1dHRvbjpcImYtYnV0dG9uXCIsaXNOZXh0OlwiaXMtbmV4dFwiLGlzUHJldjpcImlzLXByZXZcIn0sbmV4dFRwbDonPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIHRhYmluZGV4PVwiLTFcIj48cGF0aCBkPVwiTTkgM2w5IDktOSA5XCIvPjwvc3ZnPicscHJldlRwbDonPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIHRhYmluZGV4PVwiLTFcIj48cGF0aCBkPVwiTTE1IDNsLTkgOSA5IDlcIi8+PC9zdmc+J319KTtjbGFzcyBxIGV4dGVuZHMgQntjb25zdHJ1Y3Rvcigpe3N1cGVyKC4uLmFyZ3VtZW50cyksT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsXCJzZWxlY3RlZEluZGV4XCIse2VudW1lcmFibGU6ITAsY29uZmlndXJhYmxlOiEwLHdyaXRhYmxlOiEwLHZhbHVlOm51bGx9KSxPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcyxcInRhcmdldFwiLHtlbnVtZXJhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMCx3cml0YWJsZTohMCx2YWx1ZTpudWxsfSksT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsXCJuYXZcIix7ZW51bWVyYWJsZTohMCxjb25maWd1cmFibGU6ITAsd3JpdGFibGU6ITAsdmFsdWU6bnVsbH0pfWFkZEFzVGFyZ2V0Rm9yKHQpe3RoaXMudGFyZ2V0PXRoaXMuaW5zdGFuY2UsdGhpcy5uYXY9dCx0aGlzLmF0dGFjaEV2ZW50cygpfWFkZEFzTmF2Rm9yKHQpe3RoaXMubmF2PXRoaXMuaW5zdGFuY2UsdGhpcy50YXJnZXQ9dCx0aGlzLmF0dGFjaEV2ZW50cygpfWF0dGFjaEV2ZW50cygpe3RoaXMubmF2JiZ0aGlzLnRhcmdldCYmKHRoaXMubmF2Lm9wdGlvbnMuaW5pdGlhbFNsaWRlPXRoaXMudGFyZ2V0Lm9wdGlvbnMuaW5pdGlhbFBhZ2UsdGhpcy5uYXYub24oXCJyZWFkeVwiLHRoaXMub25OYXZSZWFkeSksdGhpcy5uYXYuc3RhdGU9PT1GLlJlYWR5JiZ0aGlzLm9uTmF2UmVhZHkodGhpcy5uYXYpLHRoaXMudGFyZ2V0Lm9uKFwicmVhZHlcIix0aGlzLm9uVGFyZ2V0UmVhZHkpLHRoaXMudGFyZ2V0LnN0YXRlPT09Ri5SZWFkeSYmdGhpcy5vblRhcmdldFJlYWR5KHRoaXMudGFyZ2V0KSl9b25OYXZSZWFkeSh0KXt0Lm9uKFwiY3JlYXRlU2xpZGVcIix0aGlzLm9uTmF2Q3JlYXRlU2xpZGUpLHQub24oXCJQYW56b29tLmNsaWNrXCIsdGhpcy5vbk5hdkNsaWNrKSx0Lm9uKFwiUGFuem9vbS50b3VjaEVuZFwiLHRoaXMub25OYXZUb3VjaCksdGhpcy5vblRhcmdldENoYW5nZSgpfW9uVGFyZ2V0UmVhZHkodCl7dC5vbihcImNoYW5nZVwiLHRoaXMub25UYXJnZXRDaGFuZ2UpLHQub24oXCJQYW56b29tLnJlZnJlc2hcIix0aGlzLm9uVGFyZ2V0Q2hhbmdlKSx0aGlzLm9uVGFyZ2V0Q2hhbmdlKCl9b25OYXZDbGljayh0LGUsaSl7dGhpcy5vbk5hdlRvdWNoKHQsdC5wYW56b29tLGkpfW9uTmF2VG91Y2godCxlLGkpe3ZhciBuLHM7aWYoTWF0aC5hYnMoZS5kcmFnT2Zmc2V0LngpPjN8fE1hdGguYWJzKGUuZHJhZ09mZnNldC55KT4zKXJldHVybjtjb25zdCBvPWkudGFyZ2V0LHtuYXY6YSx0YXJnZXQ6cn09dGhpcztpZighYXx8IXJ8fCFvKXJldHVybjtjb25zdCBsPW8uY2xvc2VzdChcIltkYXRhLWluZGV4XVwiKTtpZihpLnN0b3BQcm9wYWdhdGlvbigpLGkucHJldmVudERlZmF1bHQoKSwhbClyZXR1cm47Y29uc3QgYz1wYXJzZUludChsLmRhdGFzZXQuaW5kZXh8fFwiXCIsMTApfHwwLGg9ci5nZXRQYWdlRm9yU2xpZGUoYyksZD1hLmdldFBhZ2VGb3JTbGlkZShjKTthLnNsaWRlVG8oZCksci5zbGlkZVRvKGgse2ZyaWN0aW9uOihudWxsPT09KHM9bnVsbD09PShuPXRoaXMubmF2KXx8dm9pZCAwPT09bj92b2lkIDA6bi5wbHVnaW5zKXx8dm9pZCAwPT09cz92b2lkIDA6cy5TeW5jLm9wdGlvbihcImZyaWN0aW9uXCIpKXx8MH0pLHRoaXMubWFya1NlbGVjdGVkU2xpZGUoYyl9b25OYXZDcmVhdGVTbGlkZSh0LGUpe2UuaW5kZXg9PT10aGlzLnNlbGVjdGVkSW5kZXgmJnRoaXMubWFya1NlbGVjdGVkU2xpZGUoZS5pbmRleCl9b25UYXJnZXRDaGFuZ2UoKXtjb25zdHt0YXJnZXQ6dCxuYXY6ZX09dGhpcztpZighdHx8IWUpcmV0dXJuO2lmKGUuc3RhdGUhPT1GLlJlYWR5fHx0LnN0YXRlIT09Ri5SZWFkeSlyZXR1cm47Y29uc3QgaT10LnBhZ2VzW3QucGFnZV0uc2xpZGVzWzBdLmluZGV4LG49ZS5nZXRQYWdlRm9yU2xpZGUoaSk7dGhpcy5tYXJrU2VsZWN0ZWRTbGlkZShpKSxlLnNsaWRlVG8obil9bWFya1NlbGVjdGVkU2xpZGUodCl7Y29uc3QgZT10aGlzLm5hdjtlJiZlLnN0YXRlPT09Ri5SZWFkeSYmKHRoaXMuc2VsZWN0ZWRJbmRleD10LFsuLi5lLnNsaWRlc10ubWFwKChlPT57ZS5lbCYmZS5lbC5jbGFzc0xpc3RbZS5pbmRleD09PXQ/XCJhZGRcIjpcInJlbW92ZVwiXShcImlzLW5hdi1zZWxlY3RlZFwiKX0pKSl9YXR0YWNoKCl7Y29uc3QgdD10aGlzO2xldCBlPXQub3B0aW9ucy50YXJnZXQsaT10Lm9wdGlvbnMubmF2O2U/dC5hZGRBc05hdkZvcihlKTppJiZ0LmFkZEFzVGFyZ2V0Rm9yKGkpfWRldGFjaCgpe2NvbnN0IHQ9dGhpcyxlPXQubmF2LGk9dC50YXJnZXQ7ZSYmKGUub2ZmKFwicmVhZHlcIix0Lm9uTmF2UmVhZHkpLGUub2ZmKFwiY3JlYXRlU2xpZGVcIix0Lm9uTmF2Q3JlYXRlU2xpZGUpLGUub2ZmKFwiUGFuem9vbS5jbGlja1wiLHQub25OYXZDbGljayksZS5vZmYoXCJQYW56b29tLnRvdWNoRW5kXCIsdC5vbk5hdlRvdWNoKSksdC5uYXY9bnVsbCxpJiYoaS5vZmYoXCJyZWFkeVwiLHQub25UYXJnZXRSZWFkeSksaS5vZmYoXCJyZWZyZXNoXCIsdC5vblRhcmdldENoYW5nZSksaS5vZmYoXCJjaGFuZ2VcIix0Lm9uVGFyZ2V0Q2hhbmdlKSksdC50YXJnZXQ9bnVsbH19T2JqZWN0LmRlZmluZVByb3BlcnR5KHEsXCJkZWZhdWx0c1wiLHtlbnVtZXJhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMCx3cml0YWJsZTohMCx2YWx1ZTp7ZnJpY3Rpb246LjM1fX0pO2NvbnN0IFY9e05hdmlnYXRpb246WSxEb3RzOl8sU3luYzpxfTtjbGFzcyBaIGV4dGVuZHMgbXtnZXQgYXhpcygpe3JldHVybiB0aGlzLmlzSG9yaXpvbnRhbD9cImVcIjpcImZcIn1nZXQgaXNFbmFibGVkKCl7cmV0dXJuIHRoaXMuc3RhdGU9PT1GLlJlYWR5fWdldCBpc0luZmluaXRlKCl7bGV0IHQ9ITE7Y29uc3R7Y29udGVudERpbTplLHZpZXdwb3J0RGltOmkscGFnZXM6bixzbGlkZXM6c309dGhpcztyZXR1cm4gbi5sZW5ndGg+PTImJmUrc1swXS5kaW0+PWkmJih0PXRoaXMub3B0aW9uKFwiaW5maW5pdGVcIikpLHR9Z2V0IGlzUlRMKCl7cmV0dXJuXCJydGxcIj09PXRoaXMub3B0aW9uKFwiZGlyZWN0aW9uXCIpfWdldCBpc0hvcml6b250YWwoKXtyZXR1cm5cInhcIj09PXRoaXMub3B0aW9uKFwiYXhpc1wiKX1jb25zdHJ1Y3Rvcih0LGU9e30saT17fSl7aWYoc3VwZXIoKSxPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcyxcInVzZXJPcHRpb25zXCIse2VudW1lcmFibGU6ITAsY29uZmlndXJhYmxlOiEwLHdyaXRhYmxlOiEwLHZhbHVlOnt9fSksT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsXCJ1c2VyUGx1Z2luc1wiLHtlbnVtZXJhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMCx3cml0YWJsZTohMCx2YWx1ZTp7fX0pLE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLFwiYnBcIix7ZW51bWVyYWJsZTohMCxjb25maWd1cmFibGU6ITAsd3JpdGFibGU6ITAsdmFsdWU6XCJcIn0pLE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLFwibHBcIix7ZW51bWVyYWJsZTohMCxjb25maWd1cmFibGU6ITAsd3JpdGFibGU6ITAsdmFsdWU6MH0pLE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLFwic3RhdGVcIix7ZW51bWVyYWJsZTohMCxjb25maWd1cmFibGU6ITAsd3JpdGFibGU6ITAsdmFsdWU6Ri5Jbml0fSksT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsXCJwYWdlXCIse2VudW1lcmFibGU6ITAsY29uZmlndXJhYmxlOiEwLHdyaXRhYmxlOiEwLHZhbHVlOjB9KSxPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcyxcInByZXZQYWdlXCIse2VudW1lcmFibGU6ITAsY29uZmlndXJhYmxlOiEwLHdyaXRhYmxlOiEwLHZhbHVlOm51bGx9KSxPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcyxcImNvbnRhaW5lclwiLHtlbnVtZXJhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMCx3cml0YWJsZTohMCx2YWx1ZTp2b2lkIDB9KSxPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcyxcInZpZXdwb3J0XCIse2VudW1lcmFibGU6ITAsY29uZmlndXJhYmxlOiEwLHdyaXRhYmxlOiEwLHZhbHVlOm51bGx9KSxPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcyxcInRyYWNrXCIse2VudW1lcmFibGU6ITAsY29uZmlndXJhYmxlOiEwLHdyaXRhYmxlOiEwLHZhbHVlOm51bGx9KSxPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcyxcInNsaWRlc1wiLHtlbnVtZXJhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMCx3cml0YWJsZTohMCx2YWx1ZTpbXX0pLE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLFwicGFnZXNcIix7ZW51bWVyYWJsZTohMCxjb25maWd1cmFibGU6ITAsd3JpdGFibGU6ITAsdmFsdWU6W119KSxPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcyxcInBhbnpvb21cIix7ZW51bWVyYWJsZTohMCxjb25maWd1cmFibGU6ITAsd3JpdGFibGU6ITAsdmFsdWU6bnVsbH0pLE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLFwiaW5UcmFuc2l0aW9uXCIse2VudW1lcmFibGU6ITAsY29uZmlndXJhYmxlOiEwLHdyaXRhYmxlOiEwLHZhbHVlOm5ldyBTZXR9KSxPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcyxcImNvbnRlbnREaW1cIix7ZW51bWVyYWJsZTohMCxjb25maWd1cmFibGU6ITAsd3JpdGFibGU6ITAsdmFsdWU6MH0pLE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLFwidmlld3BvcnREaW1cIix7ZW51bWVyYWJsZTohMCxjb25maWd1cmFibGU6ITAsd3JpdGFibGU6ITAsdmFsdWU6MH0pLFwic3RyaW5nXCI9PXR5cGVvZiB0JiYodD1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKHQpKSwhdHx8IXgodCkpdGhyb3cgbmV3IEVycm9yKFwiTm8gRWxlbWVudCBmb3VuZFwiKTt0aGlzLmNvbnRhaW5lcj10LHRoaXMuc2xpZGVOZXh0PWsodGhpcy5zbGlkZU5leHQuYmluZCh0aGlzKSwxNTApLHRoaXMuc2xpZGVQcmV2PWsodGhpcy5zbGlkZVByZXYuYmluZCh0aGlzKSwxNTApLHRoaXMudXNlck9wdGlvbnM9ZSx0aGlzLnVzZXJQbHVnaW5zPWkscXVldWVNaWNyb3Rhc2soKCgpPT57dGhpcy5wcm9jZXNzT3B0aW9ucygpfSkpfXByb2Nlc3NPcHRpb25zKCl7Y29uc3QgdD11KHt9LFouZGVmYXVsdHMsdGhpcy51c2VyT3B0aW9ucyk7bGV0IGU9XCJcIjtjb25zdCBpPXQuYnJlYWtwb2ludHM7aWYoaSYmZChpKSlmb3IoY29uc3RbbixzXW9mIE9iamVjdC5lbnRyaWVzKGkpKXdpbmRvdy5tYXRjaE1lZGlhKG4pLm1hdGNoZXMmJmQocykmJihlKz1uLHUodCxzKSk7ZT09PXRoaXMuYnAmJnRoaXMuc3RhdGUhPT1GLkluaXR8fCh0aGlzLmJwPWUsdGhpcy5zdGF0ZT09PUYuUmVhZHkmJih0LmluaXRpYWxTbGlkZT10aGlzLnBhZ2VzW3RoaXMucGFnZV0uc2xpZGVzWzBdLmluZGV4KSx0aGlzLnN0YXRlIT09Ri5Jbml0JiZ0aGlzLmRlc3Ryb3koKSxzdXBlci5zZXRPcHRpb25zKHQpLCExPT09dGhpcy5vcHRpb24oXCJlbmFibGVkXCIpP3RoaXMuYXR0YWNoRXZlbnRzKCk6c2V0VGltZW91dCgoKCk9Pnt0aGlzLmluaXQoKX0pLDApKX1pbml0KCl7dGhpcy5zdGF0ZT1GLkluaXQsdGhpcy5lbWl0KFwiaW5pdFwiKSx0aGlzLmF0dGFjaFBsdWdpbnMoT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LFouUGx1Z2lucyksdGhpcy51c2VyUGx1Z2lucykpLHRoaXMuaW5pdExheW91dCgpLHRoaXMuaW5pdFNsaWRlcygpLHRoaXMudXBkYXRlTWV0cmljcygpLHRoaXMuc2V0SW5pdGlhbFBvc2l0aW9uKCksdGhpcy5pbml0UGFuem9vbSgpLHRoaXMuYXR0YWNoRXZlbnRzKCksdGhpcy5zdGF0ZT1GLlJlYWR5LHRoaXMuZW1pdChcInJlYWR5XCIpfWluaXRMYXlvdXQoKXtjb25zdHtjb250YWluZXI6dH09dGhpcyxlPXRoaXMub3B0aW9uKFwiY2xhc3Nlc1wiKTtTKHQsdGhpcy5jbihcImNvbnRhaW5lclwiKSksbyh0LGUuaXNMVFIsIXRoaXMuaXNSVEwpLG8odCxlLmlzUlRMLHRoaXMuaXNSVEwpLG8odCxlLmlzVmVydGljYWwsIXRoaXMuaXNIb3Jpem9udGFsKSxvKHQsZS5pc0hvcml6b250YWwsdGhpcy5pc0hvcml6b250YWwpO2xldCBpPXRoaXMub3B0aW9uKFwidmlld3BvcnRcIil8fHQucXVlcnlTZWxlY3RvcihgLiR7ZS52aWV3cG9ydH1gKTtpfHwoaT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLFMoaSxlLnZpZXdwb3J0KSxpLmFwcGVuZCguLi5JKHQsYC4ke2Uuc2xpZGV9YCkpLHQucHJlcGVuZChpKSk7bGV0IG49dGhpcy5vcHRpb24oXCJ0cmFja1wiKXx8dC5xdWVyeVNlbGVjdG9yKGAuJHtlLnRyYWNrfWApO258fChuPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiksUyhuLGUudHJhY2spLG4uYXBwZW5kKC4uLkFycmF5LmZyb20oaS5jaGlsZE5vZGVzKSkpLG4uc2V0QXR0cmlidXRlKFwiYXJpYS1saXZlXCIsXCJwb2xpdGVcIiksaS5jb250YWlucyhuKXx8aS5wcmVwZW5kKG4pLHRoaXMudmlld3BvcnQ9aSx0aGlzLnRyYWNrPW4sdGhpcy5lbWl0KFwiaW5pdExheW91dFwiKX1pbml0U2xpZGVzKCl7Y29uc3R7dHJhY2s6dH09dGhpcztpZih0KXt0aGlzLnNsaWRlcz1bXSxbLi4uSSh0LGAuJHt0aGlzLmNuKFwic2xpZGVcIil9YCldLmZvckVhY2goKHQ9PntpZih4KHQpKXtjb25zdCBlPWooe2VsOnQsaXNEb206ITAsaW5kZXg6dGhpcy5zbGlkZXMubGVuZ3RofSk7dGhpcy5zbGlkZXMucHVzaChlKSx0aGlzLmVtaXQoXCJpbml0U2xpZGVcIixlLHRoaXMuc2xpZGVzLmxlbmd0aCl9fSkpO2ZvcihsZXQgdCBvZiB0aGlzLm9wdGlvbihcInNsaWRlc1wiLFtdKSl7Y29uc3QgZT1qKHQpO2UuaW5kZXg9dGhpcy5zbGlkZXMubGVuZ3RoLHRoaXMuc2xpZGVzLnB1c2goZSksdGhpcy5lbWl0KFwiaW5pdFNsaWRlXCIsZSx0aGlzLnNsaWRlcy5sZW5ndGgpfXRoaXMuZW1pdChcImluaXRTbGlkZXNcIil9fXNldEluaXRpYWxQYWdlKCl7bGV0IHQ9MDtjb25zdCBlPXRoaXMub3B0aW9uKFwiaW5pdGlhbFNsaWRlXCIpO3Q9XCJudW1iZXJcIj09dHlwZW9mIGU/dGhpcy5nZXRQYWdlRm9yU2xpZGUoZSk6cGFyc2VJbnQodGhpcy5vcHRpb24oXCJpbml0aWFsUGFnZVwiLDApK1wiXCIsMTApfHwwLHRoaXMucGFnZT10fXNldEluaXRpYWxQb3NpdGlvbigpe2lmKCF0aGlzLnRyYWNrfHwhdGhpcy5wYWdlcy5sZW5ndGgpcmV0dXJuO2NvbnN0IHQ9dGhpcy5pc0hvcml6b250YWw7bGV0IGU9dGhpcy5wYWdlO3RoaXMucGFnZXNbZV18fCh0aGlzLnBhZ2U9ZT0wKTtjb25zdCBpPXRoaXMucGFnZXNbZV0ucG9zKih0aGlzLmlzUlRMJiZ0PzE6LTEpLG49dD9gJHtpfXB4YDpcIjBcIixzPXQ/XCIwXCI6YCR7aX1weGA7dGhpcy50cmFjay5zdHlsZS50cmFuc2Zvcm09YHRyYW5zbGF0ZTNkKCR7bn0sICR7c30sIDApIHNjYWxlKDEpYCx0aGlzLm9wdGlvbihcImFkYXB0aXZlSGVpZ2h0XCIpJiZ0aGlzLnNldFZpZXdwb3J0SGVpZ2h0KCl9aW5pdFBhbnpvb20oKXt0aGlzLnBhbnpvb20mJih0aGlzLnBhbnpvb20uZGVzdHJveSgpLHRoaXMucGFuem9vbT1udWxsKTtjb25zdCB0PXRoaXMub3B0aW9uKFwiUGFuem9vbVwiKXx8e307dGhpcy5wYW56b29tPW5ldyBSKHRoaXMudmlld3BvcnQsdSh7fSx7Y29udGVudDp0aGlzLnRyYWNrLHpvb206ITEscGFuT25seVpvb21lZDohMSxsb2NrQXhpczp0aGlzLmlzSG9yaXpvbnRhbD9cInhcIjpcInlcIixpbmZpbml0ZTp0aGlzLmlzSW5maW5pdGUsY2xpY2s6ITEsZGJsQ2xpY2s6ITEsdG91Y2g6dD0+ISh0aGlzLnBhZ2VzLmxlbmd0aDwyJiYhdC5vcHRpb25zLmluZmluaXRlKSxib3VuZHM6KCk9PnRoaXMuZ2V0Qm91bmRzKCksbWF4VmVsb2NpdHk6dD0+TWF0aC5hYnModC50YXJnZXRbdGhpcy5heGlzXS10LmN1cnJlbnRbdGhpcy5heGlzXSk8Mip0aGlzLnZpZXdwb3J0RGltPzEwMDowfSx0KSksdGhpcy5wYW56b29tLm9uKFwiKlwiLCgodCxlLC4uLmkpPT57dGhpcy5lbWl0KGBQYW56b29tLiR7ZX1gLHQsLi4uaSl9KSksdGhpcy5wYW56b29tLm9uKFwiZGVjZWxcIix0aGlzLm9uRGVjZWwpLHRoaXMucGFuem9vbS5vbihcInJlZnJlc2hcIix0aGlzLm9uUmVmcmVzaCksdGhpcy5wYW56b29tLm9uKFwiYmVmb3JlVHJhbnNmb3JtXCIsdGhpcy5vbkJlZm9yZVRyYW5zZm9ybSksdGhpcy5wYW56b29tLm9uKFwiZW5kQW5pbWF0aW9uXCIsdGhpcy5vbkVuZEFuaW1hdGlvbil9YXR0YWNoRXZlbnRzKCl7Y29uc3QgdD10aGlzLmNvbnRhaW5lcjt0JiYodC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIix0aGlzLm9uQ2xpY2sse3Bhc3NpdmU6ITEsY2FwdHVyZTohMX0pLHQuYWRkRXZlbnRMaXN0ZW5lcihcInNsaWRlVG9cIix0aGlzLm9uU2xpZGVUbykpLHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsdGhpcy5vblJlc2l6ZSl9Y3JlYXRlUGFnZXMoKXtsZXQgdD1bXTtjb25zdHtjb250ZW50RGltOmUsdmlld3BvcnREaW06aX09dGhpcztsZXQgbj10aGlzLm9wdGlvbihcInNsaWRlc1BlclBhZ2VcIik7KFwibnVtYmVyXCIhPXR5cGVvZiBufHxlPD1pKSYmKG49MS8wKTtsZXQgcz0wLG89MCxhPTA7Zm9yKGNvbnN0IGUgb2YgdGhpcy5zbGlkZXMpKCF0Lmxlbmd0aHx8bytlLmRpbT5pfHxhPT09bikmJih0LnB1c2goSCgpKSxzPXQubGVuZ3RoLTEsbz0wLGE9MCksdFtzXS5zbGlkZXMucHVzaChlKSxvKz1lLmRpbStlLmdhcCxhKys7cmV0dXJuIHR9cHJvY2Vzc1BhZ2VzKCl7Y29uc3QgZT10aGlzLnBhZ2VzLHtjb250ZW50RGltOmksdmlld3BvcnREaW06bn09dGhpcyxzPXRoaXMub3B0aW9uKFwiY2VudGVyXCIpLG89dGhpcy5vcHRpb24oXCJmaWxsXCIpLGE9byYmcyYmaT5uJiYhdGhpcy5pc0luZmluaXRlO2lmKGUuZm9yRWFjaCgoKHQsZSk9Pnt0LmluZGV4PWUsdC5wb3M9dC5zbGlkZXNbMF0ucG9zLHQuZGltPTA7Zm9yKGNvbnN0W2UsaV1vZiB0LnNsaWRlcy5lbnRyaWVzKCkpdC5kaW0rPWkuZGltLGU8dC5zbGlkZXMubGVuZ3RoLTEmJih0LmRpbSs9aS5nYXApO2EmJnQucG9zKy41KnQuZGltPC41Km4/dC5wb3M9MDphJiZ0LnBvcysuNSp0LmRpbT49aS0uNSpuP3QucG9zPWktbjpzJiYodC5wb3MrPS0uNSoobi10LmRpbSkpfSkpLGUuZm9yRWFjaCgoKGUscyk9PntvJiYhdGhpcy5pc0luZmluaXRlJiZpPm4mJihlLnBvcz1NYXRoLm1heChlLnBvcywwKSxlLnBvcz1NYXRoLm1pbihlLnBvcyxpLW4pKSxlLnBvcz10KGUucG9zLDFlMyksZS5kaW09dChlLmRpbSwxZTMpLE1hdGguYWJzKGUucG9zKTw9LjEmJihlLnBvcz0wKX0pKSx0aGlzLmlzSW5maW5pdGUpcmV0dXJuIGU7Y29uc3Qgcj1bXTtsZXQgbDtyZXR1cm4gZS5mb3JFYWNoKCh0PT57Y29uc3QgZT1PYmplY3QuYXNzaWduKHt9LHQpO2wmJmUucG9zPT09bC5wb3M/KGwuZGltKz1lLmRpbSxsLnNsaWRlcz1bLi4ubC5zbGlkZXMsLi4uZS5zbGlkZXNdKTooZS5pbmRleD1yLmxlbmd0aCxsPWUsci5wdXNoKGUpKX0pKSxyfWdldFBhZ2VGcm9tSW5kZXgodD0wKXtjb25zdCBlPXRoaXMucGFnZXMubGVuZ3RoO2xldCBpO3JldHVybiB0PXBhcnNlSW50KCh0fHwwKS50b1N0cmluZygpKXx8MCxpPXRoaXMuaXNJbmZpbml0ZT8odCVlK2UpJWU6TWF0aC5tYXgoTWF0aC5taW4odCxlLTEpLDApLGl9Z2V0U2xpZGVNZXRyaWNzKGUpe3ZhciBpLG47Y29uc3Qgcz10aGlzLmlzSG9yaXpvbnRhbD9cIndpZHRoXCI6XCJoZWlnaHRcIjtsZXQgbz0wLGE9MCxyPWUuZWw7Y29uc3QgbD1yJiYhci5wYXJlbnROb2RlO2lmKHI/bz1wYXJzZUZsb2F0KHIuZGF0YXNldFtzXXx8XCJcIil8fDA6KHI9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKSxyLnN0eWxlLnZpc2liaWxpdHk9XCJoaWRkZW5cIiwodGhpcy50cmFja3x8ZG9jdW1lbnQuYm9keSkucHJlcGVuZChyKSksUyhyLHRoaXMuY24oXCJzbGlkZVwiKStcIiBcIitlLmNsYXNzK1wiIFwiK2UuY3VzdG9tQ2xhc3MpLG8pci5zdHlsZVtzXT1gJHtvfXB4YCxyLnN0eWxlW1wid2lkdGhcIj09PXM/XCJoZWlnaHRcIjpcIndpZHRoXCJdPVwiXCI7ZWxzZXtsJiYodGhpcy50cmFja3x8ZG9jdW1lbnQuYm9keSkucHJlcGVuZChyKTtjb25zdCB0PU1hdGgubWF4KDEsKG51bGw9PT0oaT13aW5kb3cudmlzdWFsVmlld3BvcnQpfHx2b2lkIDA9PT1pP3ZvaWQgMDppLnNjYWxlKXx8MSk7bz1yLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpW3NdKnR9Y29uc3QgYz1nZXRDb21wdXRlZFN0eWxlKHIpO3JldHVyblwiY29udGVudC1ib3hcIj09PWMuYm94U2l6aW5nJiYodGhpcy5pc0hvcml6b250YWw/KG8rPXBhcnNlRmxvYXQoYy5wYWRkaW5nTGVmdCl8fDAsbys9cGFyc2VGbG9hdChjLnBhZGRpbmdSaWdodCl8fDApOihvKz1wYXJzZUZsb2F0KGMucGFkZGluZ1RvcCl8fDAsbys9cGFyc2VGbG9hdChjLnBhZGRpbmdCb3R0b20pfHwwKSksYT1wYXJzZUZsb2F0KGNbdGhpcy5pc0hvcml6b250YWw/XCJtYXJnaW5SaWdodFwiOlwibWFyZ2luQm90dG9tXCJdKXx8MCxsP251bGw9PT0obj1yLnBhcmVudEVsZW1lbnQpfHx2b2lkIDA9PT1ufHxuLnJlbW92ZUNoaWxkKHIpOmUuZWx8fHIucmVtb3ZlKCkse2RpbTp0KG8sMWUzKSxnYXA6dChhLDFlMyl9fWdldEJvdW5kcygpe2NvbnN0e2lzSW5maW5pdGU6dCxpc1JUTDplLGlzSG9yaXpvbnRhbDppLHBhZ2VzOm59PXRoaXM7bGV0IHM9e21pbjowLG1heDowfTtpZih0KXM9e21pbjotMS8wLG1heDoxLzB9O2Vsc2UgaWYobi5sZW5ndGgpe2NvbnN0IHQ9blswXS5wb3Msbz1uW24ubGVuZ3RoLTFdLnBvcztzPWUmJmk/e21pbjp0LG1heDpvfTp7bWluOi0xKm8sbWF4Oi0xKnR9fXJldHVybnt4Omk/czp7bWluOjAsbWF4OjB9LHk6aT97bWluOjAsbWF4OjB9OnN9fXJlcG9zaXRpb25TbGlkZXMoKXtsZXQgZSx7aXNIb3Jpem9udGFsOmksaXNSVEw6bixpc0luZmluaXRlOnMsdmlld3BvcnQ6byx2aWV3cG9ydERpbTphLGNvbnRlbnREaW06cixwYWdlOmwscGFnZXM6YyxzbGlkZXM6aCxwYW56b29tOmR9PXRoaXMsdT0wLHA9MCxmPTAsbT0wO2Q/bT0tMSpkLmN1cnJlbnRbdGhpcy5heGlzXTpjW2xdJiYobT1jW2xdLnBvc3x8MCksZT1pP24/XCJyaWdodFwiOlwibGVmdFwiOlwidG9wXCIsbiYmaSYmKG0qPS0xKTtmb3IoY29uc3QgaSBvZiBoKWkuZWw/KFwidG9wXCI9PT1lPyhpLmVsLnN0eWxlLnJpZ2h0PVwiXCIsaS5lbC5zdHlsZS5sZWZ0PVwiXCIpOmkuZWwuc3R5bGUudG9wPVwiXCIsaS5pbmRleCE9PXU/aS5lbC5zdHlsZVtlXT0wPT09cD9cIlwiOmAke3QocCwxZTMpfXB4YDppLmVsLnN0eWxlW2VdPVwiXCIsZis9aS5kaW0raS5nYXAsdSsrKTpwKz1pLmRpbStpLmdhcDtpZihzJiZmJiZvKXtsZXQgbj1nZXRDb21wdXRlZFN0eWxlKG8pLHM9XCJwYWRkaW5nXCIsbD1pP1wiUmlnaHRcIjpcIkJvdHRvbVwiLGM9cGFyc2VGbG9hdChuW3MrKGk/XCJMZWZ0XCI6XCJUb3BcIildKTttLT1jLGErPWMsYSs9cGFyc2VGbG9hdChuW3MrbF0pO2Zvcihjb25zdCBpIG9mIGgpaS5lbCYmKHQoaS5wb3MpPHQoYSkmJnQoaS5wb3MraS5kaW0raS5nYXApPHQobSkmJnQobSk+dChyLWEpJiYoaS5lbC5zdHlsZVtlXT1gJHt0KHArZiwxZTMpfXB4YCksdChpLnBvcytpLmdhcCk+PXQoci1hKSYmdChpLnBvcyk+dChtK2EpJiZ0KG0pPHQoYSkmJihpLmVsLnN0eWxlW2VdPWAtJHt0KGYsMWUzKX1weGApKX1sZXQgZyxiLHY9Wy4uLnRoaXMuaW5UcmFuc2l0aW9uXTtpZih2Lmxlbmd0aD4xJiYoZz1jW3ZbMF1dLGI9Y1t2WzFdXSksZyYmYil7bGV0IGk9MDtmb3IoY29uc3QgbiBvZiBoKW4uZWw/dGhpcy5pblRyYW5zaXRpb24uaGFzKG4uaW5kZXgpJiZnLnNsaWRlcy5pbmRleE9mKG4pPDAmJihuLmVsLnN0eWxlW2VdPWAke3QoaSsoZy5wb3MtYi5wb3MpLDFlMyl9cHhgKTppKz1uLmRpbStuLmdhcH19Y3JlYXRlU2xpZGVFbCh0KXtjb25zdHt0cmFjazplLHNsaWRlczppfT10aGlzO2lmKCFlfHwhdClyZXR1cm47aWYodC5lbCYmdC5lbC5wYXJlbnROb2RlKXJldHVybjtjb25zdCBuPXQuZWx8fGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7UyhuLHRoaXMuY24oXCJzbGlkZVwiKSksUyhuLHQuY2xhc3MpLFMobix0LmN1c3RvbUNsYXNzKTtjb25zdCBzPXQuaHRtbDtzJiYocyBpbnN0YW5jZW9mIEhUTUxFbGVtZW50P24uYXBwZW5kQ2hpbGQocyk6bi5pbm5lckhUTUw9dC5odG1sK1wiXCIpO2NvbnN0IG89W107aS5mb3JFYWNoKCgodCxlKT0+e3QuZWwmJm8ucHVzaChlKX0pKTtjb25zdCBhPXQuaW5kZXg7bGV0IHI9bnVsbDtpZihvLmxlbmd0aCl7cj1pW28ucmVkdWNlKCgodCxlKT0+TWF0aC5hYnMoZS1hKTxNYXRoLmFicyh0LWEpP2U6dCkpXX1jb25zdCBsPXImJnIuZWwmJnIuZWwucGFyZW50Tm9kZT9yLmluZGV4PHQuaW5kZXg/ci5lbC5uZXh0U2libGluZzpyLmVsOm51bGw7ZS5pbnNlcnRCZWZvcmUobixlLmNvbnRhaW5zKGwpP2w6bnVsbCksdC5lbD1uLHRoaXMuZW1pdChcImNyZWF0ZVNsaWRlXCIsdCl9cmVtb3ZlU2xpZGVFbCh0LGU9ITEpe2NvbnN0IGk9dC5lbDtpZighaXx8IWkucGFyZW50Tm9kZSlyZXR1cm47aWYoRShpLHRoaXMuY24oXCJpc1NlbGVjdGVkXCIpKSx0LmlzRG9tJiYhZSlyZXR1cm4gaS5yZW1vdmVBdHRyaWJ1dGUoXCJhcmlhLWhpZGRlblwiKSxpLnJlbW92ZUF0dHJpYnV0ZShcImRhdGEtaW5kZXhcIiksRShpLHRoaXMuY24oXCJpc1NlbGVjdGVkXCIpKSx2b2lkKGkuc3R5bGUubGVmdD1cIlwiKTt0aGlzLmVtaXQoXCJyZW1vdmVTbGlkZVwiLHQpO2NvbnN0IG49bmV3IEN1c3RvbUV2ZW50KFwiYW5pbWF0aW9uZW5kXCIpO2kuZGlzcGF0Y2hFdmVudChuKSx0LmVsJiYodC5lbC5yZW1vdmUoKSx0LmVsPW51bGwpfXRyYW5zaXRpb25Ubyh0PTAsZT10aGlzLm9wdGlvbihcInRyYW5zaXRpb25cIikpe2lmKCFlKXJldHVybiExO2NvbnN0e3BhZ2VzOmkscGFuem9vbTpufT10aGlzO3Q9cGFyc2VJbnQoKHR8fDApLnRvU3RyaW5nKCkpfHwwO2NvbnN0IHM9dGhpcy5nZXRQYWdlRnJvbUluZGV4KHQpO2lmKCFufHwhaVtzXXx8aS5sZW5ndGg8Mnx8TWF0aC5hYnMoaVt0aGlzLnBhZ2VdLnNsaWRlc1swXS5kaW0tdGhpcy52aWV3cG9ydERpbSk+MSlyZXR1cm4hMTtjb25zdCBvPXQ+dGhpcy5wYWdlPzE6LTEsYT10aGlzLnBhZ2VzW3NdLnBvcyoodGhpcy5pc1JUTD8xOi0xKTtpZih0aGlzLnBhZ2U9PT1zJiZNYXRoLmFicyhhLW4udGFyZ2V0W3RoaXMuYXhpc10pPDEpcmV0dXJuITE7dGhpcy5jbGVhclRyYW5zaXRpb25zKCk7Y29uc3Qgcj1uLmlzUmVzdGluZztTKHRoaXMuY29udGFpbmVyLHRoaXMuY24oXCJpblRyYW5zaXRpb25cIikpO2NvbnN0IGw9dGhpcy5wYWdlc1t0aGlzLnBhZ2VdLnNsaWRlc1swXSxjPXRoaXMucGFnZXNbc10uc2xpZGVzWzBdO3RoaXMuaW5UcmFuc2l0aW9uLmFkZChjLmluZGV4KSx0aGlzLmNyZWF0ZVNsaWRlRWwoYyk7bGV0IGg9bC5lbCxkPWMuZWw7cnx8XCJzbGlkZVwiPT09ZXx8KGU9XCJmYWRlRmFzdFwiLGg9bnVsbCk7Y29uc3QgdT10aGlzLmlzUlRMP1wibmV4dFwiOlwicHJldlwiLHA9dGhpcy5pc1JUTD9cInByZXZcIjpcIm5leHRcIjtyZXR1cm4gaCYmKHRoaXMuaW5UcmFuc2l0aW9uLmFkZChsLmluZGV4KSxsLnRyYW5zaXRpb249ZSxoLmFkZEV2ZW50TGlzdGVuZXIoXCJhbmltYXRpb25lbmRcIix0aGlzLm9uQW5pbWF0aW9uRW5kKSxoLmNsYXNzTGlzdC5hZGQoYGYtJHtlfU91dGAsYHRvLSR7bz4wP3A6dX1gKSksZCYmKGMudHJhbnNpdGlvbj1lLGQuYWRkRXZlbnRMaXN0ZW5lcihcImFuaW1hdGlvbmVuZFwiLHRoaXMub25BbmltYXRpb25FbmQpLGQuY2xhc3NMaXN0LmFkZChgZi0ke2V9SW5gLGBmcm9tLSR7bz4wP3U6cH1gKSksbi5wYW5Ubyh7eDp0aGlzLmlzSG9yaXpvbnRhbD9hOjAseTp0aGlzLmlzSG9yaXpvbnRhbD8wOmEsZnJpY3Rpb246MH0pLHRoaXMub25DaGFuZ2UocyksITB9bWFuYWdlU2xpZGVWaXNpYmxpdHkoKXtjb25zdCB0PW5ldyBTZXQsZT1uZXcgU2V0LGk9dGhpcy5nZXRWaXNpYmxlU2xpZGVzKHBhcnNlRmxvYXQodGhpcy5vcHRpb24oXCJwcmVsb2FkXCIsMCkrXCJcIil8fDApO2Zvcihjb25zdCBuIG9mIHRoaXMuc2xpZGVzKWkuaGFzKG4pP3QuYWRkKG4pOmUuYWRkKG4pO2Zvcihjb25zdCBlIG9mIHRoaXMuaW5UcmFuc2l0aW9uKXQuYWRkKHRoaXMuc2xpZGVzW2VdKTtmb3IoY29uc3QgZSBvZiB0KXRoaXMuY3JlYXRlU2xpZGVFbChlKSx0aGlzLmxhenlMb2FkU2xpZGUoZSk7Zm9yKGNvbnN0IGkgb2YgZSl0LmhhcyhpKXx8dGhpcy5yZW1vdmVTbGlkZUVsKGkpO3RoaXMubWFya1NlbGVjdGVkU2xpZGVzKCksdGhpcy5yZXBvc2l0aW9uU2xpZGVzKCl9bWFya1NlbGVjdGVkU2xpZGVzKCl7aWYoIXRoaXMucGFnZXNbdGhpcy5wYWdlXXx8IXRoaXMucGFnZXNbdGhpcy5wYWdlXS5zbGlkZXMpcmV0dXJuO2NvbnN0IHQ9XCJhcmlhLWhpZGRlblwiO2xldCBlPXRoaXMuY24oXCJpc1NlbGVjdGVkXCIpO2lmKGUpZm9yKGNvbnN0IGkgb2YgdGhpcy5zbGlkZXMpaS5lbCYmKGkuZWwuZGF0YXNldC5pbmRleD1gJHtpLmluZGV4fWAsdGhpcy5wYWdlc1t0aGlzLnBhZ2VdLnNsaWRlcy5pbmNsdWRlcyhpKT8oaS5lbC5jbGFzc0xpc3QuY29udGFpbnMoZSl8fChTKGkuZWwsZSksdGhpcy5lbWl0KFwic2VsZWN0U2xpZGVcIixpKSksaS5lbC5yZW1vdmVBdHRyaWJ1dGUodCkpOihpLmVsLmNsYXNzTGlzdC5jb250YWlucyhlKSYmKEUoaS5lbCxlKSx0aGlzLmVtaXQoXCJ1bnNlbGVjdFNsaWRlXCIsaSkpLGkuZWwuc2V0QXR0cmlidXRlKHQsXCJ0cnVlXCIpKSl9ZmxpcEluZmluaXRlVHJhY2soKXtjb25zdCB0PXRoaXMucGFuem9vbTtpZighdHx8IXRoaXMuaXNJbmZpbml0ZSlyZXR1cm47Y29uc3QgZT1cInhcIj09PXRoaXMub3B0aW9uKFwiYXhpc1wiKT9cImVcIjpcImZcIix7dmlld3BvcnREaW06aSxjb250ZW50RGltOm59PXRoaXM7bGV0IHM9dC5jdXJyZW50W2VdLG89dC50YXJnZXRbZV0tcyxhPTAscj0uNSppLGw9bjt0aGlzLmlzUlRMJiZ0aGlzLmlzSG9yaXpvbnRhbD8oczwtciYmKGE9LTEscys9bCkscz5sLXImJihhPTEscy09bCkpOihzPnImJihhPTEscy09bCksczwtbCtyJiYoYT0tMSxzKz1sKSksYSYmKHQuY3VycmVudFtlXT1zLHQudGFyZ2V0W2VdPXMrbyl9bGF6eUxvYWRTbGlkZSh0KXtjb25zdCBlPXRoaXMsaT10JiZ0LmVsO2lmKCFpKXJldHVybjtjb25zdCBzPW5ldyBTZXQsbz1cImYtZmFkZUluXCI7aS5xdWVyeVNlbGVjdG9yQWxsKFwiW2RhdGEtbGF6eS1zcmNzZXRdXCIpLmZvckVhY2goKHQ9Pnt0IGluc3RhbmNlb2YgSFRNTEltYWdlRWxlbWVudCYmcy5hZGQodCl9KSk7bGV0IGE9QXJyYXkuZnJvbShpLnF1ZXJ5U2VsZWN0b3JBbGwoXCJbZGF0YS1sYXp5LXNyY11cIikpO2kuZGF0YXNldC5sYXp5U3JjJiZhLnB1c2goaSksYS5tYXAoKHQ9Pnt0IGluc3RhbmNlb2YgSFRNTEltYWdlRWxlbWVudD9zLmFkZCh0KTp4KHQpJiYodC5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2U9YHVybCgnJHt0LmRhdGFzZXQubGF6eVNyY3x8XCJcIn0nKWAsZGVsZXRlIHQuZGF0YXNldC5sYXp5U3JjKX0pKTtjb25zdCByPSh0LGksbik9PntuJiYobi5yZW1vdmUoKSxuPW51bGwpLGkuY29tcGxldGUmJihpLmNsYXNzTGlzdC5hZGQobyksc2V0VGltZW91dCgoKCk9PntpLmNsYXNzTGlzdC5yZW1vdmUobyl9KSwzNTApLGkuc3R5bGUuZGlzcGxheT1cIlwiKSx0aGlzLm9wdGlvbihcImFkYXB0aXZlSGVpZ2h0XCIpJiZ0LmVsJiZ0aGlzLnBhZ2VzW3RoaXMucGFnZV0uc2xpZGVzLmluZGV4T2YodCk+LTEmJihlLnVwZGF0ZU1ldHJpY3MoKSxlLnNldFZpZXdwb3J0SGVpZ2h0KCkpLHRoaXMuZW1pdChcImxvYWRcIix0KX07Zm9yKGNvbnN0IGUgb2Ygcyl7bGV0IGk9bnVsbDtlLnNyYz1lLmRhdGFzZXQubGF6eVNyY3NldHx8ZS5kYXRhc2V0LmxhenlTcmN8fFwiXCIsZGVsZXRlIGUuZGF0YXNldC5sYXp5U3JjLGRlbGV0ZSBlLmRhdGFzZXQubGF6eVNyY3NldCxlLnN0eWxlLmRpc3BsYXk9XCJub25lXCIsZS5hZGRFdmVudExpc3RlbmVyKFwiZXJyb3JcIiwoKCk9PntyKHQsZSxpKX0pKSxlLmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsKCgpPT57cih0LGUsaSl9KSksc2V0VGltZW91dCgoKCk9PntlLnBhcmVudE5vZGUmJnQuZWwmJihlLmNvbXBsZXRlP3IodCxlLGkpOihpPW4odyksZS5wYXJlbnROb2RlLmluc2VydEJlZm9yZShpLGUpKSl9KSwzMDApfX1vbkFuaW1hdGlvbkVuZCh0KXt2YXIgZTtjb25zdCBpPXQudGFyZ2V0LG49aT9wYXJzZUludChpLmRhdGFzZXQuaW5kZXh8fFwiXCIsMTApfHwwOi0xLHM9dGhpcy5zbGlkZXNbbl0sbz10LmFuaW1hdGlvbk5hbWU7aWYoIWl8fCFzfHwhbylyZXR1cm47Y29uc3QgYT0hIXRoaXMuaW5UcmFuc2l0aW9uLmhhcyhuKSYmcy50cmFuc2l0aW9uO2EmJm8uc3Vic3RyaW5nKDAsYS5sZW5ndGgrMik9PT1gZi0ke2F9YCYmdGhpcy5pblRyYW5zaXRpb24uZGVsZXRlKG4pLHRoaXMuaW5UcmFuc2l0aW9uLnNpemV8fHRoaXMuY2xlYXJUcmFuc2l0aW9ucygpLG49PT10aGlzLnBhZ2UmJihudWxsPT09KGU9dGhpcy5wYW56b29tKXx8dm9pZCAwPT09ZT92b2lkIDA6ZS5pc1Jlc3RpbmcpJiZ0aGlzLmVtaXQoXCJzZXR0bGVcIil9b25EZWNlbCh0LGU9MCxpPTAsbj0wLHM9MCl7Y29uc3R7aXNSVEw6byxpc0hvcml6b250YWw6YSxheGlzOnIscGFnZXM6bH09dGhpcyxjPWwubGVuZ3RoLGg9TWF0aC5hYnMoTWF0aC5hdGFuMihpLGUpLyhNYXRoLlBJLzE4MCkpO2xldCBkPTA7aWYoZD1oPjQ1JiZoPDEzNT9hPzA6aTphP2U6MCwhYylyZXR1cm47Y29uc3QgdT10aGlzLm9wdGlvbihcImRyYWdGcmVlXCIpO2xldCBwPXRoaXMucGFnZSxmPW8mJmE/MTotMTtjb25zdCBtPXQudGFyZ2V0W3JdKmYsZz10LmN1cnJlbnRbcl0qZjtsZXR7cGFnZUluZGV4OmJ9PXRoaXMuZ2V0UGFnZUZyb21Qb3NpdGlvbihtKSx7cGFnZUluZGV4OnZ9PXRoaXMuZ2V0UGFnZUZyb21Qb3NpdGlvbihnKTt1P3RoaXMub25DaGFuZ2UoYik6KE1hdGguYWJzKGQpPjU/KGxbcF0uZGltPGRvY3VtZW50LmRvY3VtZW50RWxlbWVudFtcImNsaWVudFwiKyh0aGlzLmlzSG9yaXpvbnRhbD9cIldpZHRoXCI6XCJIZWlnaHRcIildLTEmJihwPXYpLHA9byYmYT9kPDA/cC0xOnArMTpkPDA/cCsxOnAtMSk6cD0wPT09biYmMD09PXM/cDp2LHRoaXMuc2xpZGVUbyhwLHt0cmFuc2l0aW9uOiExLGZyaWN0aW9uOnQub3B0aW9uKFwiZGVjZWxGcmljdGlvblwiKX0pKX1vbkNsaWNrKHQpe2NvbnN0IGU9dC50YXJnZXQsaT1lJiZ4KGUpP2UuZGF0YXNldDpudWxsO2xldCBuLHM7aSYmKHZvaWQgMCE9PWkuY2Fyb3VzZWxQYWdlPyhzPVwic2xpZGVUb1wiLG49aS5jYXJvdXNlbFBhZ2UpOnZvaWQgMCE9PWkuY2Fyb3VzZWxOZXh0P3M9XCJzbGlkZU5leHRcIjp2b2lkIDAhPT1pLmNhcm91c2VsUHJldiYmKHM9XCJzbGlkZVByZXZcIikpLHM/KHQucHJldmVudERlZmF1bHQoKSx0LnN0b3BQcm9wYWdhdGlvbigpLGUmJiFlLmhhc0F0dHJpYnV0ZShcImRpc2FibGVkXCIpJiZ0aGlzW3NdKG4pKTp0aGlzLmVtaXQoXCJjbGlja1wiLHQpfW9uU2xpZGVUbyh0KXtjb25zdCBlPXQuZGV0YWlsfHwwO3RoaXMuc2xpZGVUbyh0aGlzLmdldFBhZ2VGb3JTbGlkZShlKSx7ZnJpY3Rpb246MH0pfW9uQ2hhbmdlKHQsZT0wKXtjb25zdCBpPXRoaXMucGFnZTt0aGlzLnByZXZQYWdlPWksdGhpcy5wYWdlPXQsdGhpcy5vcHRpb24oXCJhZGFwdGl2ZUhlaWdodFwiKSYmdGhpcy5zZXRWaWV3cG9ydEhlaWdodCgpLHQhPT1pJiYodGhpcy5tYXJrU2VsZWN0ZWRTbGlkZXMoKSx0aGlzLmVtaXQoXCJjaGFuZ2VcIix0LGksZSkpfW9uUmVmcmVzaCgpe2xldCB0PXRoaXMuY29udGVudERpbSxlPXRoaXMudmlld3BvcnREaW07dGhpcy51cGRhdGVNZXRyaWNzKCksdGhpcy5jb250ZW50RGltPT09dCYmdGhpcy52aWV3cG9ydERpbT09PWV8fHRoaXMuc2xpZGVUbyh0aGlzLnBhZ2Use2ZyaWN0aW9uOjAsdHJhbnNpdGlvbjohMX0pfW9uUmVzaXplKCl7dGhpcy5vcHRpb24oXCJicmVha3BvaW50c1wiKSYmdGhpcy5wcm9jZXNzT3B0aW9ucygpfW9uQmVmb3JlVHJhbnNmb3JtKHQpe3RoaXMubHAhPT10LmN1cnJlbnRbdGhpcy5heGlzXSYmKHRoaXMuZmxpcEluZmluaXRlVHJhY2soKSx0aGlzLm1hbmFnZVNsaWRlVmlzaWJsaXR5KCkpLHRoaXMubHA9dC5jdXJyZW50LmV9b25FbmRBbmltYXRpb24oKXt0aGlzLmluVHJhbnNpdGlvbi5zaXplfHx0aGlzLmVtaXQoXCJzZXR0bGVcIil9cmVJbml0KHQ9bnVsbCxlPW51bGwpe3RoaXMuZGVzdHJveSgpLHRoaXMuc3RhdGU9Ri5Jbml0LHRoaXMudXNlck9wdGlvbnM9dHx8dGhpcy51c2VyT3B0aW9ucyx0aGlzLnVzZXJQbHVnaW5zPWV8fHRoaXMudXNlclBsdWdpbnMsdGhpcy5wcm9jZXNzT3B0aW9ucygpfXNsaWRlVG8odD0wLHtmcmljdGlvbjplPXRoaXMub3B0aW9uKFwiZnJpY3Rpb25cIiksdHJhbnNpdGlvbjppPXRoaXMub3B0aW9uKFwidHJhbnNpdGlvblwiKX09e30pe2lmKHRoaXMuc3RhdGU9PT1GLkRlc3Ryb3kpcmV0dXJuO2NvbnN0e2F4aXM6bixpc0hvcml6b250YWw6cyxpc1JUTDpvLHBhZ2VzOmEscGFuem9vbTpyfT10aGlzLGw9YS5sZW5ndGgsYz1vJiZzPzE6LTE7aWYoIXJ8fCFsKXJldHVybjtpZih0aGlzLnRyYW5zaXRpb25Ubyh0LGkpKXJldHVybjtjb25zdCBoPXRoaXMuZ2V0UGFnZUZyb21JbmRleCh0KTtsZXQgZD1hW2hdLnBvcztpZih0aGlzLmlzSW5maW5pdGUpe2NvbnN0IGU9dGhpcy5jb250ZW50RGltLGk9ci50YXJnZXRbbl0qYztpZigyPT09bClkKz1lKk1hdGguZmxvb3IocGFyc2VGbG9hdCh0K1wiXCIpLzIpO2Vsc2V7Y29uc3QgdD1pO2Q9W2QsZC1lLGQrZV0ucmVkdWNlKChmdW5jdGlvbihlLGkpe3JldHVybiBNYXRoLmFicyhpLXQpPE1hdGguYWJzKGUtdCk/aTplfSkpfX1kKj1jLE1hdGguYWJzKHIudGFyZ2V0W25dLWQpPC4xfHwoci5wYW5Ubyh7eDpzP2Q6MCx5OnM/MDpkLGZyaWN0aW9uOmV9KSx0aGlzLm9uQ2hhbmdlKGgpKX1zbGlkZVRvQ2xvc2VzdCh0KXtpZih0aGlzLnBhbnpvb20pe2NvbnN0e3BhZ2VJbmRleDplfT10aGlzLmdldFBhZ2VGcm9tUG9zaXRpb24odGhpcy5wYW56b29tLmN1cnJlbnRbdGhpcy5pc0hvcml6b250YWw/XCJlXCI6XCJmXCJdKTt0aGlzLnNsaWRlVG8oZSx0KX19c2xpZGVOZXh0KCl7dGhpcy5zbGlkZVRvKHRoaXMucGFnZSsxKX1zbGlkZVByZXYoKXt0aGlzLnNsaWRlVG8odGhpcy5wYWdlLTEpfWNsZWFyVHJhbnNpdGlvbnMoKXt0aGlzLmluVHJhbnNpdGlvbi5jbGVhcigpLEUodGhpcy5jb250YWluZXIsdGhpcy5jbihcImluVHJhbnNpdGlvblwiKSk7Y29uc3QgdD1bXCJ0by1wcmV2XCIsXCJ0by1uZXh0XCIsXCJmcm9tLXByZXZcIixcImZyb20tbmV4dFwiXTtmb3IoY29uc3QgZSBvZiB0aGlzLnNsaWRlcyl7Y29uc3QgaT1lLmVsO2lmKGkpe2kucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImFuaW1hdGlvbmVuZFwiLHRoaXMub25BbmltYXRpb25FbmQpLGkuY2xhc3NMaXN0LnJlbW92ZSguLi50KTtjb25zdCBuPWUudHJhbnNpdGlvbjtuJiZpLmNsYXNzTGlzdC5yZW1vdmUoYGYtJHtufU91dGAsYGYtJHtufUluYCl9fXRoaXMubWFuYWdlU2xpZGVWaXNpYmxpdHkoKX1wcmVwZW5kU2xpZGUodCl7dmFyIGUsaTtsZXQgbj1BcnJheS5pc0FycmF5KHQpP3Q6W3RdO2Zvcihjb25zdCB0IG9mIG4ucmV2ZXJzZSgpKXRoaXMuc2xpZGVzLnVuc2hpZnQoaih0KSk7Zm9yKGxldCB0PTA7dDx0aGlzLnNsaWRlcy5sZW5ndGg7dCsrKXRoaXMuc2xpZGVzW3RdLmluZGV4PXQ7Y29uc3Qgcz0obnVsbD09PShlPXRoaXMucGFnZXNbdGhpcy5wYWdlXSl8fHZvaWQgMD09PWU/dm9pZCAwOmUucG9zKXx8MDt0aGlzLnBhZ2UrPW4ubGVuZ3RoLHRoaXMudXBkYXRlTWV0cmljcygpO2NvbnN0IG89KG51bGw9PT0oaT10aGlzLnBhZ2VzW3RoaXMucGFnZV0pfHx2b2lkIDA9PT1pP3ZvaWQgMDppLnBvcyl8fDA7aWYodGhpcy5wYW56b29tKXtjb25zdCB0PXRoaXMuaXNSVEw/cy1vOm8tczt0aGlzLnBhbnpvb20udGFyZ2V0LmUtPXQsdGhpcy5wYW56b29tLmN1cnJlbnQuZS09dCx0aGlzLnBhbnpvb20ucmVxdWVzdFRpY2soKX19YXBwZW5kU2xpZGUodCl7bGV0IGU9QXJyYXkuaXNBcnJheSh0KT90Olt0XTtmb3IoY29uc3QgdCBvZiBlKXtjb25zdCBlPWoodCk7ZS5pbmRleD10aGlzLnNsaWRlcy5sZW5ndGgsdGhpcy5zbGlkZXMucHVzaChlKSx0aGlzLmVtaXQoXCJpbml0U2xpZGVcIixlLHRoaXMuc2xpZGVzLmxlbmd0aCl9dGhpcy51cGRhdGVNZXRyaWNzKCl9cmVtb3ZlU2xpZGUodCl7Y29uc3QgZT10aGlzLnNsaWRlcy5sZW5ndGg7dD0odCVlK2UpJWUsdGhpcy5yZW1vdmVTbGlkZUVsKHRoaXMuc2xpZGVzW3RdLCEwKSx0aGlzLnNsaWRlcy5zcGxpY2UodCwxKTtmb3IobGV0IHQ9MDt0PHRoaXMuc2xpZGVzLmxlbmd0aDt0KyspdGhpcy5zbGlkZXNbdF0uaW5kZXg9dDt0aGlzLnVwZGF0ZU1ldHJpY3MoKSx0aGlzLnNsaWRlVG8odGhpcy5wYWdlLHtmcmljdGlvbjowLHRyYW5zaXRpb246ITF9KX11cGRhdGVNZXRyaWNzKCl7Y29uc3R7cGFuem9vbTplLHZpZXdwb3J0OmksdHJhY2s6bixpc0hvcml6b250YWw6c309dGhpcztpZighbilyZXR1cm47Y29uc3Qgbz1zP1wid2lkdGhcIjpcImhlaWdodFwiLGE9cz9cIm9mZnNldFdpZHRoXCI6XCJvZmZzZXRIZWlnaHRcIjtpZihpKXtsZXQgZT1NYXRoLm1heChpW2FdLHQoaS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVtvXSwxZTMpKSxuPWdldENvbXB1dGVkU3R5bGUoaSkscj1cInBhZGRpbmdcIixsPXM/XCJSaWdodFwiOlwiQm90dG9tXCI7ZS09cGFyc2VGbG9hdChuW3IrKHM/XCJMZWZ0XCI6XCJUb3BcIildKStwYXJzZUZsb2F0KG5bcitsXSksdGhpcy52aWV3cG9ydERpbT1lfWxldCByLGw9dGhpcy5wYWdlcy5sZW5ndGgsYz0wO2Zvcihjb25zdFtlLGldb2YgdGhpcy5zbGlkZXMuZW50cmllcygpKXtsZXQgbj0wLHM9MDshaS5lbCYmcj8obj1yLmRpbSxzPXIuZ2FwKTooKHtkaW06bixnYXA6c309dGhpcy5nZXRTbGlkZU1ldHJpY3MoaSkpLHI9aSksbj10KG4sMWUzKSxzPXQocywxZTMpLGkuZGltPW4saS5nYXA9cyxpLnBvcz1jLGMrPW4sKHRoaXMuaXNJbmZpbml0ZXx8ZTx0aGlzLnNsaWRlcy5sZW5ndGgtMSkmJihjKz1zKX1jb25zdCBoPXRoaXMuY29udGVudERpbTtjPXQoYywxZTMpLHRoaXMuY29udGVudERpbT1jLGUmJihlLmNvbnRlbnRSZWN0W29dPWMsZS5jb250ZW50UmVjdFtcImVcIj09PXRoaXMuYXhpcz9cImZ1bGxXaWR0aFwiOlwiZnVsbEhlaWdodFwiXT1jKSx0aGlzLnBhZ2VzPXRoaXMuY3JlYXRlUGFnZXMoKSx0aGlzLnBhZ2VzPXRoaXMucHJvY2Vzc1BhZ2VzKCksdGhpcy5zdGF0ZT09PUYuSW5pdCYmdGhpcy5zZXRJbml0aWFsUGFnZSgpLHRoaXMucGFnZT1NYXRoLm1heCgwLE1hdGgubWluKHRoaXMucGFnZSx0aGlzLnBhZ2VzLmxlbmd0aC0xKSksZSYmbD09PXRoaXMucGFnZXMubGVuZ3RoJiZNYXRoLmFicyhjLWgpPi41JiYoZS50YXJnZXRbdGhpcy5heGlzXT0tMSp0aGlzLnBhZ2VzW3RoaXMucGFnZV0ucG9zLGUuY3VycmVudFt0aGlzLmF4aXNdPS0xKnRoaXMucGFnZXNbdGhpcy5wYWdlXS5wb3MsZS5zdG9wKCkpLHRoaXMubWFuYWdlU2xpZGVWaXNpYmxpdHkoKSx0aGlzLmVtaXQoXCJyZWZyZXNoXCIpfWdldFByb2dyZXNzKGUsaT0hMSl7dm9pZCAwPT09ZSYmKGU9dGhpcy5wYWdlKTtjb25zdCBuPXRoaXMscz1uLnBhbnpvb20sbz1uLnBhZ2VzW2VdfHwwO2lmKCFvfHwhcylyZXR1cm4gMDtsZXQgYT0tMSpzLmN1cnJlbnQuZSxyPW4uY29udGVudERpbTt2YXIgbD1bdCgoYS1vLnBvcykvKDEqby5kaW0pLDFlMyksdCgoYStyLW8ucG9zKS8oMSpvLmRpbSksMWUzKSx0KChhLXItby5wb3MpLygxKm8uZGltKSwxZTMpXS5yZWR1Y2UoKGZ1bmN0aW9uKHQsZSl7cmV0dXJuIE1hdGguYWJzKGUpPE1hdGguYWJzKHQpP2U6dH0pKTtyZXR1cm4gaT9sOk1hdGgubWF4KC0xLE1hdGgubWluKDEsbCkpfXNldFZpZXdwb3J0SGVpZ2h0KCl7Y29uc3R7cGFnZTp0LHBhZ2VzOmUsdmlld3BvcnQ6aSxpc0hvcml6b250YWw6bn09dGhpcztpZighaXx8IWVbdF0pcmV0dXJuO2xldCBzPTA7biYmdGhpcy50cmFjayYmKHRoaXMudHJhY2suc3R5bGUuaGVpZ2h0PVwiYXV0b1wiLGVbdF0uc2xpZGVzLmZvckVhY2goKHQ9Pnt0LmVsJiYocz1NYXRoLm1heChzLHQuZWwub2Zmc2V0SGVpZ2h0KSl9KSkpLGkuc3R5bGUuaGVpZ2h0PXM/YCR7c31weGA6XCJcIn1nZXRQYWdlRm9yU2xpZGUodCl7Zm9yKGNvbnN0IGUgb2YgdGhpcy5wYWdlcylmb3IoY29uc3QgaSBvZiBlLnNsaWRlcylpZihpLmluZGV4PT09dClyZXR1cm4gZS5pbmRleDtyZXR1cm4tMX1nZXRWaXNpYmxlU2xpZGVzKHQ9MCl7dmFyIGU7Y29uc3QgaT1uZXcgU2V0O2xldHtjb250ZW50RGltOm4sdmlld3BvcnREaW06cyxwYWdlczpvLHBhZ2U6YX09dGhpcztuPW4rKG51bGw9PT0oZT10aGlzLnNsaWRlc1t0aGlzLnNsaWRlcy5sZW5ndGgtMV0pfHx2b2lkIDA9PT1lP3ZvaWQgMDplLmdhcCl8fDA7bGV0IHI9MDtyPXRoaXMucGFuem9vbT8tMSp0aGlzLnBhbnpvb20uY3VycmVudFt0aGlzLmF4aXNdOm9bYV0mJm9bYV0ucG9zfHwwLHRoaXMuaXNJbmZpbml0ZSYmKHItPU1hdGguZmxvb3Ioci9uKSpuKSx0aGlzLmlzUlRMJiZ0aGlzLmlzSG9yaXpvbnRhbCYmKHIqPS0xKTtjb25zdCBsPXItcyp0LGM9citzKih0KzEpLGg9dGhpcy5pc0luZmluaXRlP1stMSwwLDFdOlswXTtmb3IoY29uc3QgdCBvZiB0aGlzLnNsaWRlcylmb3IoY29uc3QgZSBvZiBoKXtjb25zdCBzPXQucG9zK2UqbixvPXQucG9zK3QuZGltK3QuZ2FwK2UqbjtzPGMmJm8+bCYmaS5hZGQodCl9cmV0dXJuIGl9Z2V0UGFnZUZyb21Qb3NpdGlvbih0KXtjb25zdHt2aWV3cG9ydERpbTplLGNvbnRlbnREaW06aX09dGhpcyxuPXRoaXMucGFnZXMubGVuZ3RoLHM9dGhpcy5zbGlkZXMubGVuZ3RoLG89dGhpcy5zbGlkZXNbcy0xXTtsZXQgYT0wLHI9MCxsPTA7Y29uc3QgYz10aGlzLm9wdGlvbihcImNlbnRlclwiKTtjJiYodCs9LjUqZSksdGhpcy5pc0luZmluaXRlfHwodD1NYXRoLm1heCh0aGlzLnNsaWRlc1swXS5wb3MsTWF0aC5taW4odCxvLnBvcykpKTtjb25zdCBoPWkrby5nYXA7bD1NYXRoLmZsb29yKHQvaCl8fDAsdC09bCpoO2xldCBkPW8sdT10aGlzLnNsaWRlcy5maW5kKChlPT57Y29uc3QgaT10KyhkJiYhYz8uNSpkLmRpbTowKTtyZXR1cm4gZD1lLGUucG9zPD1pJiZlLnBvcytlLmRpbStlLmdhcD5pfSkpO3JldHVybiB1fHwodT1vKSxyPXRoaXMuZ2V0UGFnZUZvclNsaWRlKHUuaW5kZXgpLGE9citsKm4se3BhZ2U6YSxwYWdlSW5kZXg6cn19ZGVzdHJveSgpe2lmKFtGLkRlc3Ryb3ldLmluY2x1ZGVzKHRoaXMuc3RhdGUpKXJldHVybjt0aGlzLnN0YXRlPUYuRGVzdHJveTtjb25zdHtjb250YWluZXI6dCx2aWV3cG9ydDplLHRyYWNrOmksc2xpZGVzOm4scGFuem9vbTpzfT10aGlzLG89dGhpcy5vcHRpb24oXCJjbGFzc2VzXCIpO3QucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsdGhpcy5vbkNsaWNrLHtwYXNzaXZlOiExLGNhcHR1cmU6ITF9KSx0LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJzbGlkZVRvXCIsdGhpcy5vblNsaWRlVG8pLHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwicmVzaXplXCIsdGhpcy5vblJlc2l6ZSkscyYmKHMuZGVzdHJveSgpLHRoaXMucGFuem9vbT1udWxsKSxuJiZuLmZvckVhY2goKHQ9Pnt0aGlzLnJlbW92ZVNsaWRlRWwodCl9KSksdGhpcy5kZXRhY2hQbHVnaW5zKCksZSYmZS5vZmZzZXRQYXJlbnQmJmkmJmkub2Zmc2V0UGFyZW50JiZlLnJlcGxhY2VXaXRoKC4uLmkuY2hpbGROb2Rlcyk7Zm9yKGNvbnN0W2UsaV1vZiBPYmplY3QuZW50cmllcyhvKSlcImNvbnRhaW5lclwiIT09ZSYmaSYmdC5jbGFzc0xpc3QucmVtb3ZlKGkpO3RoaXMudHJhY2s9bnVsbCx0aGlzLnZpZXdwb3J0PW51bGwsdGhpcy5wYWdlPTAsdGhpcy5zbGlkZXM9W107Y29uc3QgYT10aGlzLmV2ZW50cy5nZXQoXCJyZWFkeVwiKTt0aGlzLmV2ZW50cz1uZXcgTWFwLGEmJnRoaXMuZXZlbnRzLnNldChcInJlYWR5XCIsYSl9fU9iamVjdC5kZWZpbmVQcm9wZXJ0eShaLFwiUGFuem9vbVwiLHtlbnVtZXJhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMCx3cml0YWJsZTohMCx2YWx1ZTpSfSksT2JqZWN0LmRlZmluZVByb3BlcnR5KFosXCJkZWZhdWx0c1wiLHtlbnVtZXJhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMCx3cml0YWJsZTohMCx2YWx1ZTpEfSksT2JqZWN0LmRlZmluZVByb3BlcnR5KFosXCJQbHVnaW5zXCIse2VudW1lcmFibGU6ITAsY29uZmlndXJhYmxlOiEwLHdyaXRhYmxlOiEwLHZhbHVlOlZ9KTtjb25zdCBVPWZ1bmN0aW9uKHQpe2NvbnN0IGU9d2luZG93LnBhZ2VZT2Zmc2V0LGk9d2luZG93LnBhZ2VZT2Zmc2V0K3dpbmRvdy5pbm5lckhlaWdodDtpZigheCh0KSlyZXR1cm4gMDtjb25zdCBuPXQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkscz1uLnkrd2luZG93LnBhZ2VZT2Zmc2V0LG89bi55K24uaGVpZ2h0K3dpbmRvdy5wYWdlWU9mZnNldDtpZihlPm98fGk8cylyZXR1cm4gMDtpZihlPHMmJmk+bylyZXR1cm4gMTAwO2lmKHM8ZSYmbz5pKXJldHVybiAxMDA7bGV0IGE9bi5oZWlnaHQ7czxlJiYoYS09d2luZG93LnBhZ2VZT2Zmc2V0LXMpLG8+aSYmKGEtPW8taSk7Y29uc3Qgcj1hL3dpbmRvdy5pbm5lckhlaWdodCoxMDA7cmV0dXJuIE1hdGgucm91bmQocil9LEc9IShcInVuZGVmaW5lZFwiPT10eXBlb2Ygd2luZG93fHwhd2luZG93LmRvY3VtZW50fHwhd2luZG93LmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQpO2xldCBLO2NvbnN0IEo9W1wiYVtocmVmXVwiLFwiYXJlYVtocmVmXVwiLCdpbnB1dDpub3QoW2Rpc2FibGVkXSk6bm90KFt0eXBlPVwiaGlkZGVuXCJdKTpub3QoW2FyaWEtaGlkZGVuXSknLFwic2VsZWN0Om5vdChbZGlzYWJsZWRdKTpub3QoW2FyaWEtaGlkZGVuXSlcIixcInRleHRhcmVhOm5vdChbZGlzYWJsZWRdKTpub3QoW2FyaWEtaGlkZGVuXSlcIixcImJ1dHRvbjpub3QoW2Rpc2FibGVkXSk6bm90KFthcmlhLWhpZGRlbl0pOm5vdCguZmFuY3lib3gtZm9jdXMtZ3VhcmQpXCIsXCJpZnJhbWVcIixcIm9iamVjdFwiLFwiZW1iZWRcIixcInZpZGVvXCIsXCJhdWRpb1wiLFwiW2NvbnRlbnRlZGl0YWJsZV1cIiwnW3RhYmluZGV4XTpub3QoW3RhYmluZGV4Xj1cIi1cIl0pOm5vdChbZGlzYWJsZWRdKTpub3QoW2FyaWEtaGlkZGVuXSknXS5qb2luKFwiLFwiKSxRPXQ9PntpZih0JiZHKXt2b2lkIDA9PT1LJiZkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLmZvY3VzKHtnZXQgcHJldmVudFNjcm9sbCgpe3JldHVybiBLPSEwLCExfX0pO3RyeXtpZihLKXQuZm9jdXMoe3ByZXZlbnRTY3JvbGw6ITB9KTtlbHNle2NvbnN0IGU9d2luZG93LnBhZ2VYT2Zmc2V0fHxkb2N1bWVudC5ib2R5LnNjcm9sbFRvcCxpPXdpbmRvdy5wYWdlWU9mZnNldHx8ZG9jdW1lbnQuYm9keS5zY3JvbGxMZWZ0O3QuZm9jdXMoKSxkb2N1bWVudC5ib2R5LnNjcm9sbFRvKHt0b3A6ZSxsZWZ0OmksYmVoYXZpb3I6XCJhdXRvXCJ9KX19Y2F0Y2godCl7fX19LHR0PXtkcmFnVG9DbG9zZTohMCxoaWRlU2Nyb2xsYmFyOiEwLENhcm91c2VsOntjbGFzc2VzOntjb250YWluZXI6XCJmYW5jeWJveF9fY2Fyb3VzZWxcIix2aWV3cG9ydDpcImZhbmN5Ym94X192aWV3cG9ydFwiLHRyYWNrOlwiZmFuY3lib3hfX3RyYWNrXCIsc2xpZGU6XCJmYW5jeWJveF9fc2xpZGVcIn19LGNvbnRlbnRDbGljazpcInRvZ2dsZVpvb21cIixjb250ZW50RGJsQ2xpY2s6ITEsYmFja2Ryb3BDbGljazpcImNsb3NlXCIsYW5pbWF0ZWQ6ITAsaWRsZTozNTAwLHNob3dDbGFzczpcImYtem9vbUluVXBcIixoaWRlQ2xhc3M6XCJmLWZhZGVPdXRcIixjb21tb25DYXB0aW9uOiExLHBhcmVudEVsOm51bGwsc3RhcnRJbmRleDowLGwxMG46T2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LHYpLHtDTE9TRTpcIkNsb3NlXCIsTkVYVDpcIk5leHRcIixQUkVWOlwiUHJldmlvdXNcIixNT0RBTDpcIllvdSBjYW4gY2xvc2UgdGhpcyBtb2RhbCBjb250ZW50IHdpdGggdGhlIEVTQyBrZXlcIixFUlJPUjpcIlNvbWV0aGluZyBXZW50IFdyb25nLCBQbGVhc2UgVHJ5IEFnYWluIExhdGVyXCIsSU1BR0VfRVJST1I6XCJJbWFnZSBOb3QgRm91bmRcIixFTEVNRU5UX05PVF9GT1VORDpcIkhUTUwgRWxlbWVudCBOb3QgRm91bmRcIixBSkFYX05PVF9GT1VORDpcIkVycm9yIExvYWRpbmcgQUpBWCA6IE5vdCBGb3VuZFwiLEFKQVhfRk9SQklEREVOOlwiRXJyb3IgTG9hZGluZyBBSkFYIDogRm9yYmlkZGVuXCIsSUZSQU1FX0VSUk9SOlwiRXJyb3IgTG9hZGluZyBQYWdlXCIsVE9HR0xFX1pPT006XCJUb2dnbGUgem9vbSBsZXZlbFwiLFRPR0dMRV9USFVNQlM6XCJUb2dnbGUgdGh1bWJuYWlsc1wiLFRPR0dMRV9TTElERVNIT1c6XCJUb2dnbGUgc2xpZGVzaG93XCIsVE9HR0xFX0ZVTExTQ1JFRU46XCJUb2dnbGUgZnVsbC1zY3JlZW4gbW9kZVwiLERPV05MT0FEOlwiRG93bmxvYWRcIn0pLHRwbDp7Y2xvc2VCdXR0b246JzxidXR0b24gZGF0YS1mYW5jeWJveC1jbG9zZSBjbGFzcz1cImYtYnV0dG9uIGlzLWNsb3NlLWJ0blwiIHRpdGxlPVwie3tDTE9TRX19XCI+PHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIHRhYmluZGV4PVwiLTFcIj48cGF0aCBkPVwiTTIwIDIwTDQgNG0xNiAwTDQgMjBcIi8+PC9zdmc+PC9idXR0b24+JyxtYWluOic8ZGl2IGNsYXNzPVwiZmFuY3lib3hfX2NvbnRhaW5lclwiIHJvbGU9XCJkaWFsb2dcIiBhcmlhLW1vZGFsPVwidHJ1ZVwiIGFyaWEtbGFiZWw9XCJ7e01PREFMfX1cIiB0YWJpbmRleD1cIi0xXCI+XFxuICAgIDxkaXYgY2xhc3M9XCJmYW5jeWJveF9fYmFja2Ryb3BcIj48L2Rpdj5cXG4gICAgPGRpdiBjbGFzcz1cImZhbmN5Ym94X19jYXJvdXNlbFwiPjwvZGl2PlxcbiAgICA8ZGl2IGNsYXNzPVwiZmFuY3lib3hfX2Zvb3RlclwiPjwvZGl2PlxcbiAgPC9kaXY+J30sZ3JvdXBBbGw6ITEsZ3JvdXBBdHRyOlwiZGF0YS1mYW5jeWJveFwiLGRlZmF1bHRUeXBlOlwiaW1hZ2VcIixkZWZhdWx0RGlzcGxheTpcImJsb2NrXCIsYXV0b0ZvY3VzOiEwLHRyYXBGb2N1czohMCxwbGFjZUZvY3VzQmFjazohMCxjbG9zZUJ1dHRvbjpcImF1dG9cIixrZXlib2FyZDp7RXNjYXBlOlwiY2xvc2VcIixEZWxldGU6XCJjbG9zZVwiLEJhY2tzcGFjZTpcImNsb3NlXCIsUGFnZVVwOlwibmV4dFwiLFBhZ2VEb3duOlwicHJldlwiLEFycm93VXA6XCJwcmV2XCIsQXJyb3dEb3duOlwibmV4dFwiLEFycm93UmlnaHQ6XCJuZXh0XCIsQXJyb3dMZWZ0OlwicHJldlwifSxGdWxsc2NyZWVuOnthdXRvU3RhcnQ6ITF9LGNvbXBhY3Q6KCk9PndpbmRvdy5tYXRjaE1lZGlhKFwiKG1heC13aWR0aDogNTc4cHgpLCAobWF4LWhlaWdodDogNTc4cHgpXCIpLm1hdGNoZXMsd2hlZWw6XCJ6b29tXCJ9O3ZhciBldCxpdDshZnVuY3Rpb24odCl7dFt0LkluaXQ9MF09XCJJbml0XCIsdFt0LlJlYWR5PTFdPVwiUmVhZHlcIix0W3QuQ2xvc2luZz0yXT1cIkNsb3NpbmdcIix0W3QuQ3VzdG9tQ2xvc2luZz0zXT1cIkN1c3RvbUNsb3NpbmdcIix0W3QuRGVzdHJveT00XT1cIkRlc3Ryb3lcIn0oZXR8fChldD17fSkpLGZ1bmN0aW9uKHQpe3RbdC5Mb2FkaW5nPTBdPVwiTG9hZGluZ1wiLHRbdC5PcGVuaW5nPTFdPVwiT3BlbmluZ1wiLHRbdC5SZWFkeT0yXT1cIlJlYWR5XCIsdFt0LkNsb3Npbmc9M109XCJDbG9zaW5nXCJ9KGl0fHwoaXQ9e30pKTtjb25zdCBudD0oKT0+e3F1ZXVlTWljcm90YXNrKCgoKT0+eygoKT0+e2NvbnN0e3NsdWc6dCxpbmRleDplfT1zdC5wYXJzZVVSTCgpLGk9X3QuZ2V0SW5zdGFuY2UoKTtpZihpJiYhMSE9PWkub3B0aW9uKFwiSGFzaFwiKSl7Y29uc3Qgbj1pLmNhcm91c2VsO2lmKHQmJm4pe2ZvcihsZXQgZSBvZiBuLnNsaWRlcylpZihlLnNsdWcmJmUuc2x1Zz09PXQpcmV0dXJuIG4uc2xpZGVUbyhlLmluZGV4KTtpZih0PT09aS5vcHRpb24oXCJzbHVnXCIpKXJldHVybiBuLnNsaWRlVG8oZS0xKTtjb25zdCBzPWkuZ2V0U2xpZGUoKSxvPXMmJnMudHJpZ2dlckVsJiZzLnRyaWdnZXJFbC5kYXRhc2V0O2lmKG8mJm8uZmFuY3lib3g9PT10KXJldHVybiBuLnNsaWRlVG8oZS0xKX1zdC5oYXNTaWxlbnRDbG9zZT0hMCxpLmNsb3NlKCl9c3Quc3RhcnRGcm9tVXJsKCl9KSgpfSkpfTtjbGFzcyBzdCBleHRlbmRzIEJ7Y29uc3RydWN0b3IoKXtzdXBlciguLi5hcmd1bWVudHMpLE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLFwib3JpZ0hhc2hcIix7ZW51bWVyYWJsZTohMCxjb25maWd1cmFibGU6ITAsd3JpdGFibGU6ITAsdmFsdWU6XCJcIn0pLE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLFwidGltZXJcIix7ZW51bWVyYWJsZTohMCxjb25maWd1cmFibGU6ITAsd3JpdGFibGU6ITAsdmFsdWU6bnVsbH0pfW9uQ2hhbmdlKCl7Y29uc3QgdD10aGlzLmluc3RhbmNlLGU9dC5jYXJvdXNlbDt0aGlzLnRpbWVyJiZjbGVhclRpbWVvdXQodGhpcy50aW1lcik7Y29uc3QgaT10LmdldFNsaWRlKCk7aWYoIWV8fCFpKXJldHVybjtjb25zdCBuPXQuaXNPcGVuaW5nU2xpZGUoaSkscz1uZXcgVVJMKGRvY3VtZW50LlVSTCkuaGFzaDtsZXQgbyxhPWkuc2x1Z3x8dm9pZCAwLHI9aS50cmlnZ2VyRWx8fHZvaWQgMDtvPWF8fHRoaXMuaW5zdGFuY2Uub3B0aW9uKFwic2x1Z1wiKSwhbyYmciYmci5kYXRhc2V0JiYobz1yLmRhdGFzZXQuZmFuY3lib3gpO2xldCBsPVwiXCI7byYmXCJ0cnVlXCIhPT1vJiYobD1cIiNcIitvKyghYSYmZS5zbGlkZXMubGVuZ3RoPjE/XCItXCIrKGkuaW5kZXgrMSk6XCJcIikpLG4mJih0aGlzLm9yaWdIYXNoPXMhPT1sP3M6XCJcIiksbCYmcyE9PWwmJih0aGlzLnRpbWVyPXNldFRpbWVvdXQoKCgpPT57dHJ5e3Quc3RhdGU9PT1ldC5SZWFkeSYmd2luZG93Lmhpc3Rvcnlbbj9cInB1c2hTdGF0ZVwiOlwicmVwbGFjZVN0YXRlXCJdKHt9LGRvY3VtZW50LnRpdGxlLHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSt3aW5kb3cubG9jYXRpb24uc2VhcmNoK2wpfWNhdGNoKHQpe319KSwzMDApKX1vbkNsb3NlKCl7aWYodGhpcy50aW1lciYmY2xlYXJUaW1lb3V0KHRoaXMudGltZXIpLCEwIT09c3QuaGFzU2lsZW50Q2xvc2UpdHJ5e3dpbmRvdy5oaXN0b3J5LnJlcGxhY2VTdGF0ZSh7fSxkb2N1bWVudC50aXRsZSx3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUrd2luZG93LmxvY2F0aW9uLnNlYXJjaCsodGhpcy5vcmlnSGFzaHx8XCJcIikpfWNhdGNoKHQpe319YXR0YWNoKCl7Y29uc3QgdD10aGlzLmluc3RhbmNlO3Qub24oXCJDYXJvdXNlbC5yZWFkeVwiLHRoaXMub25DaGFuZ2UpLHQub24oXCJDYXJvdXNlbC5jaGFuZ2VcIix0aGlzLm9uQ2hhbmdlKSx0Lm9uKFwiY2xvc2VcIix0aGlzLm9uQ2xvc2UpfWRldGFjaCgpe2NvbnN0IHQ9dGhpcy5pbnN0YW5jZTt0Lm9mZihcIkNhcm91c2VsLnJlYWR5XCIsdGhpcy5vbkNoYW5nZSksdC5vZmYoXCJDYXJvdXNlbC5jaGFuZ2VcIix0aGlzLm9uQ2hhbmdlKSx0Lm9mZihcImNsb3NlXCIsdGhpcy5vbkNsb3NlKX1zdGF0aWMgcGFyc2VVUkwoKXtjb25zdCB0PXdpbmRvdy5sb2NhdGlvbi5oYXNoLnNsaWNlKDEpLGU9dC5zcGxpdChcIi1cIiksaT1lW2UubGVuZ3RoLTFdLG49aSYmL15cXCs/XFxkKyQvLnRlc3QoaSkmJnBhcnNlSW50KGUucG9wKCl8fFwiMVwiLDEwKXx8MTtyZXR1cm57aGFzaDp0LHNsdWc6ZS5qb2luKFwiLVwiKSxpbmRleDpufX1zdGF0aWMgc3RhcnRGcm9tVXJsKCl7aWYoc3QuaGFzU2lsZW50Q2xvc2U9ITEsX3QuZ2V0SW5zdGFuY2UoKXx8ITE9PT1fdC5kZWZhdWx0cy5IYXNoKXJldHVybjtjb25zdHtoYXNoOnQsc2x1ZzplLGluZGV4Oml9PXN0LnBhcnNlVVJMKCk7aWYoIWUpcmV0dXJuO2xldCBuPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXNsdWc9XCIke3R9XCJdYCk7aWYobiYmbi5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudChcImNsaWNrXCIse2J1YmJsZXM6ITAsY2FuY2VsYWJsZTohMH0pKSxfdC5nZXRJbnN0YW5jZSgpKXJldHVybjtjb25zdCBzPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYFtkYXRhLWZhbmN5Ym94PVwiJHtlfVwiXWApO3MubGVuZ3RoJiYobj1zW2ktMV0sbiYmbi5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudChcImNsaWNrXCIse2J1YmJsZXM6ITAsY2FuY2VsYWJsZTohMH0pKSl9c3RhdGljIGRlc3Ryb3koKXt3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImhhc2hjaGFuZ2VcIixudCwhMSl9fWZ1bmN0aW9uIG90KCl7d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJoYXNoY2hhbmdlXCIsbnQsITEpLHNldFRpbWVvdXQoKCgpPT57c3Quc3RhcnRGcm9tVXJsKCl9KSw1MDApfU9iamVjdC5kZWZpbmVQcm9wZXJ0eShzdCxcImRlZmF1bHRzXCIse2VudW1lcmFibGU6ITAsY29uZmlndXJhYmxlOiEwLHdyaXRhYmxlOiEwLHZhbHVlOnt9fSksT2JqZWN0LmRlZmluZVByb3BlcnR5KHN0LFwiaGFzU2lsZW50Q2xvc2VcIix7ZW51bWVyYWJsZTohMCxjb25maWd1cmFibGU6ITAsd3JpdGFibGU6ITAsdmFsdWU6ITF9KSxHJiYoL2NvbXBsZXRlfGludGVyYWN0aXZlfGxvYWRlZC8udGVzdChkb2N1bWVudC5yZWFkeVN0YXRlKT9vdCgpOmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsb3QpKTtjbGFzcyBhdCBleHRlbmRzIEJ7b25DcmVhdGVTbGlkZSh0LGUsaSl7Y29uc3Qgbj10aGlzLmluc3RhbmNlLm9wdGlvbkZvcihpLFwic3JjXCIpfHxcIlwiO2kuZWwmJlwiaW1hZ2VcIj09PWkudHlwZSYmXCJzdHJpbmdcIj09dHlwZW9mIG4mJnRoaXMuc2V0SW1hZ2UoaSxuKX1vblJlbW92ZVNsaWRlKHQsZSxpKXtpLnBhbnpvb20mJmkucGFuem9vbS5kZXN0cm95KCksaS5wYW56b29tPXZvaWQgMCxpLmltYWdlRWw9dm9pZCAwfW9uQ2hhbmdlKHQsZSxpLG4pe2Zvcihjb25zdCB0IG9mIGUuc2xpZGVzKXtjb25zdCBlPXQucGFuem9vbTtlJiZ0LmluZGV4IT09aSYmZS5yZXNldCguMzUpfX1vbkNsb3NlKCl7dmFyIHQ7Y29uc3QgZT10aGlzLmluc3RhbmNlLGk9ZS5jb250YWluZXIsbj1lLmdldFNsaWRlKCk7aWYoIWl8fCFpLnBhcmVudEVsZW1lbnR8fCFuKXJldHVybjtjb25zdHtlbDpzLGNvbnRlbnRFbDpvLHBhbnpvb206YX09bixyPW4udGh1bWJFbFNyYztpZighc3x8IXJ8fCFvfHwhYXx8YS5pc0NvbnRlbnRMb2FkaW5nfHxhLnN0YXRlPT09Zy5Jbml0fHxhLnN0YXRlPT09Zy5EZXN0cm95KXJldHVybjthLnVwZGF0ZU1ldHJpY3MoKTtsZXQgbD10aGlzLmdldFpvb21JbmZvKG4pO2lmKCFsKXJldHVybjt0aGlzLmluc3RhbmNlLnN0YXRlPWV0LkN1c3RvbUNsb3NpbmcsaS5jbGFzc0xpc3QucmVtb3ZlKFwiaXMtem9vbWluZy1pblwiKSxpLmNsYXNzTGlzdC5hZGQoXCJpcy16b29taW5nLW91dFwiKSxvLnN0eWxlLmJhY2tncm91bmRJbWFnZT1gdXJsKCcke3J9JylgO2NvbnN0IGM9aS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTsxPT09KChudWxsPT09KHQ9d2luZG93LnZpc3VhbFZpZXdwb3J0KXx8dm9pZCAwPT09dD92b2lkIDA6dC5zY2FsZSl8fDEpJiZPYmplY3QuYXNzaWduKGkuc3R5bGUse3Bvc2l0aW9uOlwiYWJzb2x1dGVcIix0b3A6YCR7d2luZG93LnBhZ2VZT2Zmc2V0fXB4YCxsZWZ0OmAke3dpbmRvdy5wYWdlWE9mZnNldH1weGAsYm90dG9tOlwiYXV0b1wiLHJpZ2h0OlwiYXV0b1wiLHdpZHRoOmAke2Mud2lkdGh9cHhgLGhlaWdodDpgJHtjLmhlaWdodH1weGAsb3ZlcmZsb3c6XCJoaWRkZW5cIn0pO2NvbnN0e3g6aCx5OmQsc2NhbGU6dSxvcGFjaXR5OnB9PWw7aWYocCl7Y29uc3QgdD0oKHQsZSxpLG4pPT57Y29uc3Qgcz1lLXQsbz1uLWk7cmV0dXJuIGU9PmkrKChlLXQpL3Mqb3x8MCl9KShhLnNjYWxlLHUsMSwwKTthLm9uKFwiYWZ0ZXJUcmFuc2Zvcm1cIiwoKCk9PntvLnN0eWxlLm9wYWNpdHk9dChhLnNjYWxlKStcIlwifSkpfWEub24oXCJlbmRBbmltYXRpb25cIiwoKCk9PntlLmRlc3Ryb3koKX0pKSxhLnRhcmdldC5hPXUsYS50YXJnZXQuYj0wLGEudGFyZ2V0LmM9MCxhLnRhcmdldC5kPXUsYS5wYW5Ubyh7eDpoLHk6ZCxzY2FsZTp1LGZyaWN0aW9uOnA/LjI6LjMzLGlnbm9yZUJvdW5kczohMH0pLGEuaXNSZXN0aW5nJiZlLmRlc3Ryb3koKX1zZXRJbWFnZSh0LGUpe2NvbnN0IGk9dGhpcy5pbnN0YW5jZTt0LnNyYz1lLHRoaXMucHJvY2Vzcyh0LGUpLnRoZW4oKGU9Pnt2YXIgbjtjb25zdCBzPXQuY29udGVudEVsLG89dC5pbWFnZUVsLGE9dC50aHVtYkVsU3JjO2lmKGkuaXNDbG9zaW5nKCl8fCFzfHwhbylyZXR1cm47cy5vZmZzZXRIZWlnaHQ7Y29uc3Qgcj0hIWkuaXNPcGVuaW5nU2xpZGUodCkmJnRoaXMuZ2V0Wm9vbUluZm8odCk7aWYodGhpcy5vcHRpb24oXCJwcm90ZWN0ZWRcIikpe251bGw9PT0obj10LmVsKXx8dm9pZCAwPT09bnx8bi5hZGRFdmVudExpc3RlbmVyKFwiY29udGV4dG1lbnVcIiwodD0+e3QucHJldmVudERlZmF1bHQoKX0pKTtjb25zdCBlPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7UyhlLFwiZmFuY3lib3gtcHJvdGVjdGVkXCIpLHMuYXBwZW5kQ2hpbGQoZSl9aWYoYSYmcil7Y29uc3Qgbj1lLmNvbnRlbnRSZWN0LG89TWF0aC5tYXgobi5mdWxsV2lkdGgsbi5mdWxsSGVpZ2h0KTtsZXQgYz1udWxsOyFyLm9wYWNpdHkmJm8+MTIwMCYmKGM9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKSxTKGMsXCJmYW5jeWJveC1naG9zdFwiKSxjLnNyYz1hLHMuYXBwZW5kQ2hpbGQoYykpO2NvbnN0IGg9KCk9PntjJiYoUyhjLFwiZi1mYWRlRmFzdE91dFwiKSxzZXRUaW1lb3V0KCgoKT0+e2MmJihjLnJlbW92ZSgpLGM9bnVsbCl9KSwyMDApKX07KGw9YSxuZXcgUHJvbWlzZSgoKHQsZSk9Pntjb25zdCBpPW5ldyBJbWFnZTtpLm9ubG9hZD10LGkub25lcnJvcj1lLGkuc3JjPWx9KSkpLnRoZW4oKCgpPT57dC5zdGF0ZT1pdC5PcGVuaW5nLHRoaXMuaW5zdGFuY2UuZW1pdChcInJldmVhbFwiLHQpLHRoaXMuem9vbUluKHQpLnRoZW4oKCgpPT57aCgpLHRoaXMuaW5zdGFuY2UuZG9uZSh0KX0pLCgoKT0+e2kuaGlkZUxvYWRpbmcodCl9KSksYyYmc2V0VGltZW91dCgoKCk9PntoKCl9KSxvPjI1MDA/ODAwOjIwMCl9KSwoKCk9PntpLmhpZGVMb2FkaW5nKHQpLGkucmV2ZWFsQ29udGVudCh0KX0pKX1lbHNle2NvbnN0IG49dGhpcy5vcHRpb25Gb3IodCxcImluaXRpYWxTaXplXCIpLHM9dGhpcy5vcHRpb25Gb3IodCxcInpvb21cIiksbz17ZXZlbnQ6aS5wcmV2TW91c2VNb3ZlRXZlbnR8fGkub3B0aW9ucy5ldmVudCxmcmljdGlvbjpzPy4xMjowfTtsZXQgYT1pLm9wdGlvbkZvcih0LFwic2hvd0NsYXNzXCIpfHx2b2lkIDAscj0hMDtpLmlzT3BlbmluZ1NsaWRlKHQpJiYoXCJmdWxsXCI9PT1uP2Uuem9vbVRvRnVsbChvKTpcImNvdmVyXCI9PT1uP2Uuem9vbVRvQ292ZXIobyk6XCJtYXhcIj09PW4/ZS56b29tVG9NYXgobyk6cj0hMSxlLnN0b3AoXCJjdXJyZW50XCIpKSxyJiZhJiYoYT1lLmlzRHJhZ2dpbmc/XCJmLWZhZGVJblwiOlwiXCIpLGkucmV2ZWFsQ29udGVudCh0LGEpfXZhciBsfSksKCgpPT57aS5zZXRFcnJvcih0LFwie3tJTUFHRV9FUlJPUn19XCIpfSkpfXByb2Nlc3ModCxlKXtyZXR1cm4gbmV3IFByb21pc2UoKChpLHMpPT57dmFyIG87Y29uc3QgYT10aGlzLmluc3RhbmNlLHI9dC5lbDthLmNsZWFyQ29udGVudCh0KSxhLnNob3dMb2FkaW5nKHQpO2xldCBsPXRoaXMub3B0aW9uRm9yKHQsXCJjb250ZW50XCIpO2lmKFwic3RyaW5nXCI9PXR5cGVvZiBsJiYobD1uKGwpKSwhbHx8IXgobCkpe2lmKGw9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKSxsIGluc3RhbmNlb2YgSFRNTEltYWdlRWxlbWVudCl7bGV0IGk9XCJcIixuPXQuY2FwdGlvbjtpPVwic3RyaW5nXCI9PXR5cGVvZiBuJiZuP24ucmVwbGFjZSgvPFtePl0rPi9naSxcIlwiKS5zdWJzdHJpbmcoMCwxZTMpOmBJbWFnZSAke3QuaW5kZXgrMX0gb2YgJHtudWxsPT09KG89YS5jYXJvdXNlbCl8fHZvaWQgMD09PW8/dm9pZCAwOm8ucGFnZXMubGVuZ3RofWAsbC5zcmM9ZXx8XCJcIixsLmFsdD1pLGwuZHJhZ2dhYmxlPSExLHQuc3Jjc2V0JiZsLnNldEF0dHJpYnV0ZShcInNyY3NldFwiLHQuc3Jjc2V0KX10LnNpemVzJiZsLnNldEF0dHJpYnV0ZShcInNpemVzXCIsdC5zaXplcyl9bC5jbGFzc0xpc3QuYWRkKFwiZmFuY3lib3gtaW1hZ2VcIiksdC5pbWFnZUVsPWwsYS5zZXRDb250ZW50KHQsbCwhMSk7dC5wYW56b29tPW5ldyBSKHIsdSh7dHJhbnNmb3JtUGFyZW50OiEwfSx0aGlzLm9wdGlvbihcIlBhbnpvb21cIil8fHt9LHtjb250ZW50Omwsd2lkdGg6YS5vcHRpb25Gb3IodCxcIndpZHRoXCIsXCJhdXRvXCIpLGhlaWdodDphLm9wdGlvbkZvcih0LFwiaGVpZ2h0XCIsXCJhdXRvXCIpLHdoZWVsOigpPT57Y29uc3QgdD1hLm9wdGlvbihcIndoZWVsXCIpO3JldHVybihcInpvb21cIj09PXR8fFwicGFuXCI9PXQpJiZ0fSxjbGljazooZSxpKT0+e3ZhciBuLHM7aWYoYS5pc0NvbXBhY3R8fGEuaXNDbG9zaW5nKCkpcmV0dXJuITE7aWYodC5pbmRleCE9PShudWxsPT09KG49YS5nZXRTbGlkZSgpKXx8dm9pZCAwPT09bj92b2lkIDA6bi5pbmRleCkpcmV0dXJuITE7aWYoaSl7Y29uc3QgdD1pLmNvbXBvc2VkUGF0aCgpWzBdO2lmKFtcIkFcIixcIkJVVFRPTlwiLFwiVEVYVEFSRUFcIixcIk9QVElPTlwiLFwiSU5QVVRcIixcIlNFTEVDVFwiLFwiVklERU9cIl0uaW5jbHVkZXModC5ub2RlTmFtZSkpcmV0dXJuITF9bGV0IG89IWl8fGkudGFyZ2V0JiYobnVsbD09PShzPXQuY29udGVudEVsKXx8dm9pZCAwPT09cz92b2lkIDA6cy5jb250YWlucyhpLnRhcmdldCkpO3JldHVybiBhLm9wdGlvbihvP1wiY29udGVudENsaWNrXCI6XCJiYWNrZHJvcENsaWNrXCIpfHwhMX0sZGJsQ2xpY2s6KCk9PmEuaXNDb21wYWN0P1widG9nZ2xlWm9vbVwiOmEub3B0aW9uKFwiY29udGVudERibENsaWNrXCIpfHwhMSxzcGlubmVyOiExLHBhbk9ubHlab29tZWQ6ITAsd2hlZWxMaW1pdDoxLzAsb246e3JlYWR5OnQ9PntpKHQpfSxlcnJvcjooKT0+e3MoKX0sZGVzdHJveTooKT0+e3MoKX19fSkpfSkpfXpvb21Jbih0KXtyZXR1cm4gbmV3IFByb21pc2UoKChlLGkpPT57Y29uc3Qgbj10aGlzLmluc3RhbmNlLHM9bi5jb250YWluZXIse3Bhbnpvb206byxjb250ZW50RWw6YSxlbDpyfT10O28mJm8udXBkYXRlTWV0cmljcygpO2NvbnN0IGw9dGhpcy5nZXRab29tSW5mbyh0KTtpZighKGwmJnImJmEmJm8mJnMpKXJldHVybiB2b2lkIGkoKTtjb25zdHt4OmMseTpoLHNjYWxlOmQsb3BhY2l0eTp1fT1sLHA9KCk9Pnt0LnN0YXRlIT09aXQuQ2xvc2luZyYmKHUmJihhLnN0eWxlLm9wYWNpdHk9TWF0aC5tYXgoTWF0aC5taW4oMSwxLSgxLW8uc2NhbGUpLygxLWQpKSwwKStcIlwiKSxvLnNjYWxlPj0xJiZvLnNjYWxlPm8udGFyZ2V0U2NhbGUtLjEmJmUobykpfSxmPXQ9PntFKHMsXCJpcy16b29taW5nLWluXCIpLHQuc2NhbGU8Ljk5fHx0LnNjYWxlPjEuMDF8fChhLnN0eWxlLm9wYWNpdHk9XCJcIix0Lm9mZihcImVuZEFuaW1hdGlvblwiLGYpLHQub2ZmKFwidG91Y2hTdGFydFwiLGYpLHQub2ZmKFwiYWZ0ZXJUcmFuc2Zvcm1cIixwKSxlKHQpKX07by5vbihcImVuZEFuaW1hdGlvblwiLGYpLG8ub24oXCJ0b3VjaFN0YXJ0XCIsZiksby5vbihcImFmdGVyVHJhbnNmb3JtXCIscCksby5vbihbXCJlcnJvclwiLFwiZGVzdHJveVwiXSwoKCk9PntpKCl9KSksby5wYW5Ubyh7eDpjLHk6aCxzY2FsZTpkLGZyaWN0aW9uOjAsaWdub3JlQm91bmRzOiEwfSksby5zdG9wKFwiY3VycmVudFwiKTtjb25zdCBtPXtldmVudDpcIm1vdXNlbW92ZVwiPT09by5wYW5Nb2RlP24ucHJldk1vdXNlTW92ZUV2ZW50fHxuLm9wdGlvbnMuZXZlbnQ6dm9pZCAwfSxnPXRoaXMub3B0aW9uRm9yKHQsXCJpbml0aWFsU2l6ZVwiKTtTKHMsXCJpcy16b29taW5nLWluXCIpLG4uaGlkZUxvYWRpbmcodCksXCJmdWxsXCI9PT1nP28uem9vbVRvRnVsbChtKTpcImNvdmVyXCI9PT1nP28uem9vbVRvQ292ZXIobSk6XCJtYXhcIj09PWc/by56b29tVG9NYXgobSk6by5yZXNldCguMTcyKX0pKX1nZXRab29tSW5mbyh0KXt2YXIgZTtjb25zdHtlbDppLGltYWdlRWw6bix0aHVtYkVsOnMscGFuem9vbTpvfT10O2lmKCFpfHwhbnx8IXN8fCFvfHxVKHMpPDN8fCF0aGlzLm9wdGlvbkZvcih0LFwiem9vbVwiKXx8dGhpcy5pbnN0YW5jZS5zdGF0ZT09PWV0LkRlc3Ryb3kpcmV0dXJuITE7aWYoMSE9PSgobnVsbD09PShlPXdpbmRvdy52aXN1YWxWaWV3cG9ydCl8fHZvaWQgMD09PWU/dm9pZCAwOmUuc2NhbGUpfHwxKSlyZXR1cm4hMTtsZXR7dG9wOmEsbGVmdDpyLHdpZHRoOmwsaGVpZ2h0OmN9PXMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkse3RvcDpoLGxlZnQ6ZCxmaXRXaWR0aDp1LGZpdEhlaWdodDpwfT1vLmNvbnRlbnRSZWN0O2lmKCEobCYmYyYmdSYmcCkpcmV0dXJuITE7Y29uc3QgZj1vLmNvbnRhaW5lci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtkKz1mLmxlZnQsaCs9Zi50b3A7Y29uc3QgbT0tMSooZCsuNSp1LShyKy41KmwpKSxnPS0xKihoKy41KnAtKGErLjUqYykpLGI9bC91O2xldCB2PXRoaXMub3B0aW9uKFwiem9vbU9wYWNpdHlcIil8fCExO3JldHVyblwiYXV0b1wiPT09diYmKHY9TWF0aC5hYnMobC9jLXUvcCk+LjEpLHt4Om0seTpnLHNjYWxlOmIsb3BhY2l0eTp2fX1hdHRhY2goKXtjb25zdCB0PXRoaXMsZT10Lmluc3RhbmNlO2Uub24oXCJDYXJvdXNlbC5jaGFuZ2VcIix0Lm9uQ2hhbmdlKSxlLm9uKFwiQ2Fyb3VzZWwuY3JlYXRlU2xpZGVcIix0Lm9uQ3JlYXRlU2xpZGUpLGUub24oXCJDYXJvdXNlbC5yZW1vdmVTbGlkZVwiLHQub25SZW1vdmVTbGlkZSksZS5vbihcImNsb3NlXCIsdC5vbkNsb3NlKX1kZXRhY2goKXtjb25zdCB0PXRoaXMsZT10Lmluc3RhbmNlO2Uub2ZmKFwiQ2Fyb3VzZWwuY2hhbmdlXCIsdC5vbkNoYW5nZSksZS5vZmYoXCJDYXJvdXNlbC5jcmVhdGVTbGlkZVwiLHQub25DcmVhdGVTbGlkZSksZS5vZmYoXCJDYXJvdXNlbC5yZW1vdmVTbGlkZVwiLHQub25SZW1vdmVTbGlkZSksZS5vZmYoXCJjbG9zZVwiLHQub25DbG9zZSl9fU9iamVjdC5kZWZpbmVQcm9wZXJ0eShhdCxcImRlZmF1bHRzXCIse2VudW1lcmFibGU6ITAsY29uZmlndXJhYmxlOiEwLHdyaXRhYmxlOiEwLHZhbHVlOntpbml0aWFsU2l6ZTpcImZpdFwiLFBhbnpvb206e21heFNjYWxlOjF9LHByb3RlY3RlZDohMSx6b29tOiEwLHpvb21PcGFjaXR5OlwiYXV0b1wifX0pLFwiZnVuY3Rpb25cIj09dHlwZW9mIFN1cHByZXNzZWRFcnJvciYmU3VwcHJlc3NlZEVycm9yO2NvbnN0IHJ0PSh0LGU9e30pPT57Y29uc3QgaT1uZXcgVVJMKHQpLG49bmV3IFVSTFNlYXJjaFBhcmFtcyhpLnNlYXJjaCkscz1uZXcgVVJMU2VhcmNoUGFyYW1zO2Zvcihjb25zdFt0LGldb2ZbLi4ubiwuLi5PYmplY3QuZW50cmllcyhlKV0pe2xldCBlPWkudG9TdHJpbmcoKTtcInRcIj09PXQ/cy5zZXQoXCJzdGFydFwiLHBhcnNlSW50KGUpLnRvU3RyaW5nKCkpOnMuc2V0KHQsZSl9bGV0IG89cy50b1N0cmluZygpLGE9dC5tYXRjaCgvI3Q9KCguKik/XFxkK3MpLyk7cmV0dXJuIGEmJihvKz1gI3Q9JHthWzFdfWApLG99LGx0PXthamF4Om51bGwsYXV0b1NpemU6ITAsaWZyYW1lQXR0cjp7YWxsb3c6XCJhdXRvcGxheTsgZnVsbHNjcmVlblwiLHNjcm9sbGluZzpcImF1dG9cIn0scHJlbG9hZDohMCx2aWRlb0F1dG9wbGF5OiEwLHZpZGVvUmF0aW86MTYvOSx2aWRlb1RwbDonPHZpZGVvIGNsYXNzPVwiZmFuY3lib3hfX2h0bWw1dmlkZW9cIiBwbGF5c2lubGluZSBjb250cm9scyBjb250cm9sc0xpc3Q9XCJub2Rvd25sb2FkXCIgcG9zdGVyPVwie3twb3N0ZXJ9fVwiPlxcbiAgPHNvdXJjZSBzcmM9XCJ7e3NyY319XCIgdHlwZT1cInt7Zm9ybWF0fX1cIiAvPlNvcnJ5LCB5b3VyIGJyb3dzZXIgZG9lc25cXCd0IHN1cHBvcnQgZW1iZWRkZWQgdmlkZW9zLjwvdmlkZW8+Jyx2aWRlb0Zvcm1hdDpcIlwiLHZpbWVvOntieWxpbmU6MSxjb2xvcjpcIjAwYWRlZlwiLGNvbnRyb2xzOjEsZG50OjEsbXV0ZWQ6MH0seW91dHViZTp7Y29udHJvbHM6MSxlbmFibGVqc2FwaToxLG5vY29va2llOjEscmVsOjAsZnM6MX19LGN0PVtcImltYWdlXCIsXCJodG1sXCIsXCJhamF4XCIsXCJpbmxpbmVcIixcImNsb25lXCIsXCJpZnJhbWVcIixcIm1hcFwiLFwicGRmXCIsXCJodG1sNXZpZGVvXCIsXCJ5b3V0dWJlXCIsXCJ2aW1lb1wiLFwidmlkZW9cIl07Y2xhc3MgaHQgZXh0ZW5kcyBCe29uSW5pdFNsaWRlKHQsZSxpKXt0aGlzLnByb2Nlc3NUeXBlKGkpfW9uQ3JlYXRlU2xpZGUodCxlLGkpe3RoaXMuc2V0Q29udGVudChpKX1vblJlbW92ZVNsaWRlKHQsZSxpKXtpLnhociYmKGkueGhyLmFib3J0KCksaS54aHI9bnVsbCk7Y29uc3Qgbj1pLmlmcmFtZUVsO24mJihuLm9ubG9hZD1uLm9uZXJyb3I9bnVsbCxuLnNyYz1cIi8vYWJvdXQ6YmxhbmtcIixpLmlmcmFtZUVsPW51bGwpO2NvbnN0IHM9aS5jb250ZW50RWwsbz1pLnBsYWNlaG9sZGVyRWw7aWYoXCJpbmxpbmVcIj09PWkudHlwZSYmcyYmbylzLmNsYXNzTGlzdC5yZW1vdmUoXCJmYW5jeWJveF9fY29udGVudFwiKSxcIm5vbmVcIiE9PXMuc3R5bGUuZGlzcGxheSYmKHMuc3R5bGUuZGlzcGxheT1cIm5vbmVcIiksby5wYXJlbnROb2RlJiZvLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHMsbyksby5yZW1vdmUoKSxpLmNvbnRlbnRFbD12b2lkIDAsaS5wbGFjZWhvbGRlckVsPXZvaWQgMDtlbHNlIGZvcig7aS5lbCYmaS5lbC5maXJzdENoaWxkOylpLmVsLnJlbW92ZUNoaWxkKGkuZWwuZmlyc3RDaGlsZCl9b25TZWxlY3RTbGlkZSh0LGUsaSl7aS5zdGF0ZT09PWl0LlJlYWR5JiZ0aGlzLnBsYXlWaWRlbygpfW9uVW5zZWxlY3RTbGlkZSh0LGUsaSl7dmFyIG4scztpZihcImh0bWw1dmlkZW9cIj09PWkudHlwZSl7dHJ5e251bGw9PT0ocz1udWxsPT09KG49aS5lbCl8fHZvaWQgMD09PW4/dm9pZCAwOm4ucXVlcnlTZWxlY3RvcihcInZpZGVvXCIpKXx8dm9pZCAwPT09c3x8cy5wYXVzZSgpfWNhdGNoKHQpe31yZXR1cm59bGV0IG87XCJ2aW1lb1wiPT09aS50eXBlP289e21ldGhvZDpcInBhdXNlXCIsdmFsdWU6XCJ0cnVlXCJ9OlwieW91dHViZVwiPT09aS50eXBlJiYobz17ZXZlbnQ6XCJjb21tYW5kXCIsZnVuYzpcInBhdXNlVmlkZW9cIn0pLG8mJmkuaWZyYW1lRWwmJmkuaWZyYW1lRWwuY29udGVudFdpbmRvdyYmaS5pZnJhbWVFbC5jb250ZW50V2luZG93LnBvc3RNZXNzYWdlKEpTT04uc3RyaW5naWZ5KG8pLFwiKlwiKSxpLnBvbGxlciYmY2xlYXJUaW1lb3V0KGkucG9sbGVyKX1vbkRvbmUodCxlKXt0LmlzQ3VycmVudFNsaWRlKGUpJiYhdC5pc0Nsb3NpbmcoKSYmdGhpcy5wbGF5VmlkZW8oKX1vblJlZnJlc2godCxlKXtlLnNsaWRlcy5mb3JFYWNoKCh0PT57dC5lbCYmKHRoaXMuc2V0QXNwZWN0UmF0aW8odCksdGhpcy5yZXNpemVJZnJhbWUodCkpfSkpfW9uTWVzc2FnZSh0KXt0cnl7bGV0IGU9SlNPTi5wYXJzZSh0LmRhdGEpO2lmKFwiaHR0cHM6Ly9wbGF5ZXIudmltZW8uY29tXCI9PT10Lm9yaWdpbil7aWYoXCJyZWFkeVwiPT09ZS5ldmVudClmb3IobGV0IGUgb2YgQXJyYXkuZnJvbShkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiZmFuY3lib3hfX2lmcmFtZVwiKSkpZSBpbnN0YW5jZW9mIEhUTUxJRnJhbWVFbGVtZW50JiZlLmNvbnRlbnRXaW5kb3c9PT10LnNvdXJjZSYmKGUuZGF0YXNldC5yZWFkeT1cInRydWVcIil9ZWxzZSBpZih0Lm9yaWdpbi5tYXRjaCgvXmh0dHBzOlxcL1xcLyh3d3cuKT95b3V0dWJlKC1ub2Nvb2tpZSk/LmNvbSQvKSYmXCJvblJlYWR5XCI9PT1lLmV2ZW50KXtjb25zdCB0PWRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGUuaWQpO3QmJih0LmRhdGFzZXQucmVhZHk9XCJ0cnVlXCIpfX1jYXRjaCh0KXt9fWxvYWRBamF4Q29udGVudCh0KXtjb25zdCBlPXRoaXMuaW5zdGFuY2Uub3B0aW9uRm9yKHQsXCJzcmNcIil8fFwiXCI7dGhpcy5pbnN0YW5jZS5zaG93TG9hZGluZyh0KTtjb25zdCBpPXRoaXMuaW5zdGFuY2Usbj1uZXcgWE1MSHR0cFJlcXVlc3Q7aS5zaG93TG9hZGluZyh0KSxuLm9ucmVhZHlzdGF0ZWNoYW5nZT1mdW5jdGlvbigpe24ucmVhZHlTdGF0ZT09PVhNTEh0dHBSZXF1ZXN0LkRPTkUmJmkuc3RhdGU9PT1ldC5SZWFkeSYmKGkuaGlkZUxvYWRpbmcodCksMjAwPT09bi5zdGF0dXM/aS5zZXRDb250ZW50KHQsbi5yZXNwb25zZVRleHQpOmkuc2V0RXJyb3IodCw0MDQ9PT1uLnN0YXR1cz9cInt7QUpBWF9OT1RfRk9VTkR9fVwiOlwie3tBSkFYX0ZPUkJJRERFTn19XCIpKX07Y29uc3Qgcz10LmFqYXh8fG51bGw7bi5vcGVuKHM/XCJQT1NUXCI6XCJHRVRcIixlK1wiXCIpLG4uc2V0UmVxdWVzdEhlYWRlcihcIkNvbnRlbnQtVHlwZVwiLFwiYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkXCIpLG4uc2V0UmVxdWVzdEhlYWRlcihcIlgtUmVxdWVzdGVkLVdpdGhcIixcIlhNTEh0dHBSZXF1ZXN0XCIpLG4uc2VuZChzKSx0Lnhocj1ufXNldElubGluZUNvbnRlbnQodCl7bGV0IGU9bnVsbDtpZih4KHQuc3JjKSllPXQuc3JjO2Vsc2UgaWYoXCJzdHJpbmdcIj09dHlwZW9mIHQuc3JjKXtjb25zdCBpPXQuc3JjLnNwbGl0KFwiI1wiLDIpLnBvcCgpO2U9aT9kb2N1bWVudC5nZXRFbGVtZW50QnlJZChpKTpudWxsfWlmKGUpe2lmKFwiY2xvbmVcIj09PXQudHlwZXx8ZS5jbG9zZXN0KFwiLmZhbmN5Ym94X19zbGlkZVwiKSl7ZT1lLmNsb25lTm9kZSghMCk7Y29uc3QgaT1lLmRhdGFzZXQuYW5pbWF0aW9uTmFtZTtpJiYoZS5jbGFzc0xpc3QucmVtb3ZlKGkpLGRlbGV0ZSBlLmRhdGFzZXQuYW5pbWF0aW9uTmFtZSk7bGV0IG49ZS5nZXRBdHRyaWJ1dGUoXCJpZFwiKTtuPW4/YCR7bn0tLWNsb25lYDpgY2xvbmUtJHt0aGlzLmluc3RhbmNlLmlkfS0ke3QuaW5kZXh9YCxlLnNldEF0dHJpYnV0ZShcImlkXCIsbil9ZWxzZSBpZihlLnBhcmVudE5vZGUpe2NvbnN0IGk9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtpLmNsYXNzTGlzdC5hZGQoXCJmYW5jeWJveC1wbGFjZWhvbGRlclwiKSxlLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGksZSksdC5wbGFjZWhvbGRlckVsPWl9dGhpcy5pbnN0YW5jZS5zZXRDb250ZW50KHQsZSl9ZWxzZSB0aGlzLmluc3RhbmNlLnNldEVycm9yKHQsXCJ7e0VMRU1FTlRfTk9UX0ZPVU5EfX1cIil9c2V0SWZyYW1lQ29udGVudCh0KXtjb25zdHtzcmM6ZSxlbDppfT10O2lmKCFlfHxcInN0cmluZ1wiIT10eXBlb2YgZXx8IWkpcmV0dXJuO2kuY2xhc3NMaXN0LmFkZChcImlzLWxvYWRpbmdcIik7Y29uc3Qgbj10aGlzLmluc3RhbmNlLHM9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlmcmFtZVwiKTtzLmNsYXNzTmFtZT1cImZhbmN5Ym94X19pZnJhbWVcIixzLnNldEF0dHJpYnV0ZShcImlkXCIsYGZhbmN5Ym94X19pZnJhbWVfJHtuLmlkfV8ke3QuaW5kZXh9YCk7Zm9yKGNvbnN0W2UsaV1vZiBPYmplY3QuZW50cmllcyh0aGlzLm9wdGlvbkZvcih0LFwiaWZyYW1lQXR0clwiKXx8e30pKXMuc2V0QXR0cmlidXRlKGUsaSk7cy5vbmVycm9yPSgpPT57bi5zZXRFcnJvcih0LFwie3tJRlJBTUVfRVJST1J9fVwiKX0sdC5pZnJhbWVFbD1zO2NvbnN0IG89dGhpcy5vcHRpb25Gb3IodCxcInByZWxvYWRcIik7aWYoXCJpZnJhbWVcIiE9PXQudHlwZXx8ITE9PT1vKXJldHVybiBzLnNldEF0dHJpYnV0ZShcInNyY1wiLHQuc3JjK1wiXCIpLG4uc2V0Q29udGVudCh0LHMsITEpLHRoaXMucmVzaXplSWZyYW1lKHQpLHZvaWQgbi5yZXZlYWxDb250ZW50KHQpO24uc2hvd0xvYWRpbmcodCkscy5vbmxvYWQ9KCk9PntpZighcy5zcmMubGVuZ3RoKXJldHVybjtjb25zdCBlPVwidHJ1ZVwiIT09cy5kYXRhc2V0LnJlYWR5O3MuZGF0YXNldC5yZWFkeT1cInRydWVcIix0aGlzLnJlc2l6ZUlmcmFtZSh0KSxlP24ucmV2ZWFsQ29udGVudCh0KTpuLmhpZGVMb2FkaW5nKHQpfSxzLnNldEF0dHJpYnV0ZShcInNyY1wiLGUpLG4uc2V0Q29udGVudCh0LHMsITEpfXJlc2l6ZUlmcmFtZSh0KXtjb25zdCBlPXQuaWZyYW1lRWwsaT1udWxsPT1lP3ZvaWQgMDplLnBhcmVudEVsZW1lbnQ7aWYoIWV8fCFpKXJldHVybjtsZXQgbj10LmF1dG9TaXplLHM9dC53aWR0aHx8MCxvPXQuaGVpZ2h0fHwwO3MmJm8mJihuPSExKTtjb25zdCBhPWkmJmkuc3R5bGU7aWYoITEhPT10LnByZWxvYWQmJiExIT09biYmYSl0cnl7Y29uc3QgdD13aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShpKSxuPXBhcnNlRmxvYXQodC5wYWRkaW5nTGVmdCkrcGFyc2VGbG9hdCh0LnBhZGRpbmdSaWdodCkscj1wYXJzZUZsb2F0KHQucGFkZGluZ1RvcCkrcGFyc2VGbG9hdCh0LnBhZGRpbmdCb3R0b20pLGw9ZS5jb250ZW50V2luZG93O2lmKGwpe2NvbnN0IHQ9bC5kb2N1bWVudCxlPXQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJodG1sXCIpWzBdLGk9dC5ib2R5O2Eud2lkdGg9XCJcIixpLnN0eWxlLm92ZXJmbG93PVwiaGlkZGVuXCIscz1zfHxlLnNjcm9sbFdpZHRoK24sYS53aWR0aD1gJHtzfXB4YCxpLnN0eWxlLm92ZXJmbG93PVwiXCIsYS5mbGV4PVwiMCAwIGF1dG9cIixhLmhlaWdodD1gJHtpLnNjcm9sbEhlaWdodH1weGAsbz1lLnNjcm9sbEhlaWdodCtyfX1jYXRjaCh0KXt9aWYoc3x8byl7Y29uc3QgdD17ZmxleDpcIjAgMSBhdXRvXCIsd2lkdGg6XCJcIixoZWlnaHQ6XCJcIn07cyYmKHQud2lkdGg9YCR7c31weGApLG8mJih0LmhlaWdodD1gJHtvfXB4YCksT2JqZWN0LmFzc2lnbihhLHQpfX1wbGF5VmlkZW8oKXtjb25zdCB0PXRoaXMuaW5zdGFuY2UuZ2V0U2xpZGUoKTtpZighdClyZXR1cm47Y29uc3R7ZWw6ZX09dDtpZighZXx8IWUub2Zmc2V0UGFyZW50KXJldHVybjtpZighdGhpcy5vcHRpb25Gb3IodCxcInZpZGVvQXV0b3BsYXlcIikpcmV0dXJuO2lmKFwiaHRtbDV2aWRlb1wiPT09dC50eXBlKXRyeXtjb25zdCB0PWUucXVlcnlTZWxlY3RvcihcInZpZGVvXCIpO2lmKHQpe2NvbnN0IGU9dC5wbGF5KCk7dm9pZCAwIT09ZSYmZS50aGVuKCgoKT0+e30pKS5jYXRjaCgoZT0+e3QubXV0ZWQ9ITAsdC5wbGF5KCl9KSl9fWNhdGNoKHQpe31pZihcInlvdXR1YmVcIiE9PXQudHlwZSYmXCJ2aW1lb1wiIT09dC50eXBlKXJldHVybjtjb25zdCBpPSgpPT57aWYodC5pZnJhbWVFbCYmdC5pZnJhbWVFbC5jb250ZW50V2luZG93KXtsZXQgZTtpZihcInRydWVcIj09PXQuaWZyYW1lRWwuZGF0YXNldC5yZWFkeSlyZXR1cm4gZT1cInlvdXR1YmVcIj09PXQudHlwZT97ZXZlbnQ6XCJjb21tYW5kXCIsZnVuYzpcInBsYXlWaWRlb1wifTp7bWV0aG9kOlwicGxheVwiLHZhbHVlOlwidHJ1ZVwifSxlJiZ0LmlmcmFtZUVsLmNvbnRlbnRXaW5kb3cucG9zdE1lc3NhZ2UoSlNPTi5zdHJpbmdpZnkoZSksXCIqXCIpLHZvaWQodC5wb2xsZXI9dm9pZCAwKTtcInlvdXR1YmVcIj09PXQudHlwZSYmKGU9e2V2ZW50OlwibGlzdGVuaW5nXCIsaWQ6dC5pZnJhbWVFbC5nZXRBdHRyaWJ1dGUoXCJpZFwiKX0sdC5pZnJhbWVFbC5jb250ZW50V2luZG93LnBvc3RNZXNzYWdlKEpTT04uc3RyaW5naWZ5KGUpLFwiKlwiKSl9dC5wb2xsZXI9c2V0VGltZW91dChpLDI1MCl9O2koKX1wcm9jZXNzVHlwZSh0KXtpZih0Lmh0bWwpcmV0dXJuIHQudHlwZT1cImh0bWxcIix0LnNyYz10Lmh0bWwsdm9pZCh0Lmh0bWw9XCJcIik7Y29uc3QgZT10aGlzLmluc3RhbmNlLm9wdGlvbkZvcih0LFwic3JjXCIsXCJcIik7aWYoIWV8fFwic3RyaW5nXCIhPXR5cGVvZiBlKXJldHVybjtsZXQgaT10LnR5cGUsbj1udWxsO2lmKG49ZS5tYXRjaCgvKHlvdXR1YmVcXC5jb218eW91dHVcXC5iZXx5b3V0dWJlXFwtbm9jb29raWVcXC5jb20pXFwvKD86d2F0Y2hcXD8oPzouKiYpP3Y9fHZcXC98dVxcL3xzaG9ydHNcXC98ZW1iZWRcXC8/KT8odmlkZW9zZXJpZXNcXD9saXN0PSg/Oi4qKXxbXFx3LV17MTF9fFxcP2xpc3RUeXBlPSg/Oi4qKSZsaXN0PSg/Oi4qKSkoPzouKikvaSkpe2NvbnN0IHM9dGhpcy5vcHRpb25Gb3IodCxcInlvdXR1YmVcIikse25vY29va2llOm99PXMsYT1mdW5jdGlvbih0LGUpe3ZhciBpPXt9O2Zvcih2YXIgbiBpbiB0KU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbCh0LG4pJiZlLmluZGV4T2Yobik8MCYmKGlbbl09dFtuXSk7aWYobnVsbCE9dCYmXCJmdW5jdGlvblwiPT10eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyl7dmFyIHM9MDtmb3Iobj1PYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHQpO3M8bi5sZW5ndGg7cysrKWUuaW5kZXhPZihuW3NdKTwwJiZPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwodCxuW3NdKSYmKGlbbltzXV09dFtuW3NdXSl9cmV0dXJuIGl9KHMsW1wibm9jb29raWVcIl0pLHI9YHd3dy55b3V0dWJlJHtvP1wiLW5vY29va2llXCI6XCJcIn0uY29tYCxsPXJ0KGUsYSksYz1lbmNvZGVVUklDb21wb25lbnQoblsyXSk7dC52aWRlb0lkPWMsdC5zcmM9YGh0dHBzOi8vJHtyfS9lbWJlZC8ke2N9PyR7bH1gLHQudGh1bWJTcmM9dC50aHVtYlNyY3x8YGh0dHBzOi8vaS55dGltZy5jb20vdmkvJHtjfS9tcWRlZmF1bHQuanBnYCxpPVwieW91dHViZVwifWVsc2UgaWYobj1lLm1hdGNoKC9eLit2aW1lby5jb21cXC8oPzpcXC8pPyhbXFxkXSspKChcXC98XFw/aD0pKFthLXowLTldKykpPyguKik/Lykpe2NvbnN0IHM9cnQoZSx0aGlzLm9wdGlvbkZvcih0LFwidmltZW9cIikpLG89ZW5jb2RlVVJJQ29tcG9uZW50KG5bMV0pLGE9bls0XXx8XCJcIjt0LnZpZGVvSWQ9byx0LnNyYz1gaHR0cHM6Ly9wbGF5ZXIudmltZW8uY29tL3ZpZGVvLyR7b30/JHthP2BoPSR7YX0ke3M/XCImXCI6XCJcIn1gOlwiXCJ9JHtzfWAsaT1cInZpbWVvXCJ9aWYoIWkmJnQudHJpZ2dlckVsKXtjb25zdCBlPXQudHJpZ2dlckVsLmRhdGFzZXQudHlwZTtjdC5pbmNsdWRlcyhlKSYmKGk9ZSl9aXx8XCJzdHJpbmdcIj09dHlwZW9mIGUmJihcIiNcIj09PWUuY2hhckF0KDApP2k9XCJpbmxpbmVcIjoobj1lLm1hdGNoKC9cXC4obXA0fG1vdnxvZ3Z8d2VibSkoKFxcP3wjKS4qKT8kL2kpKT8oaT1cImh0bWw1dmlkZW9cIix0LnZpZGVvRm9ybWF0PXQudmlkZW9Gb3JtYXR8fFwidmlkZW8vXCIrKFwib2d2XCI9PT1uWzFdP1wib2dnXCI6blsxXSkpOmUubWF0Y2goLyheZGF0YTppbWFnZVxcL1thLXowLTkrXFwvPV0qLCl8KFxcLihqcChlfGd8ZWcpfGdpZnxwbmd8Ym1wfHdlYnB8c3ZnfGljbykoKFxcP3wjKS4qKT8kKS9pKT9pPVwiaW1hZ2VcIjplLm1hdGNoKC9cXC4ocGRmKSgoXFw/fCMpLiopPyQvaSk/aT1cInBkZlwiOihuPWUubWF0Y2goLyg/Om1hcHNcXC4pP2dvb2dsZVxcLihbYS16XXsyLDN9KD86XFwuW2Etel17Mn0pPylcXC8oPzooPzooPzptYXBzXFwvKD86cGxhY2VcXC8oPzouKilcXC8pP1xcQCguKiksKFxcZCsuP1xcZCs/KXopKXwoPzpcXD9sbD0pKSguKik/L2kpKT8odC5zcmM9YGh0dHBzOi8vbWFwcy5nb29nbGUuJHtuWzFdfS8/bGw9JHsoblsyXT9uWzJdK1wiJno9XCIrTWF0aC5mbG9vcihwYXJzZUZsb2F0KG5bM10pKSsobls0XT9uWzRdLnJlcGxhY2UoL15cXC8vLFwiJlwiKTpcIlwiKTpuWzRdK1wiXCIpLnJlcGxhY2UoL1xcPy8sXCImXCIpfSZvdXRwdXQ9JHtuWzRdJiZuWzRdLmluZGV4T2YoXCJsYXllcj1jXCIpPjA/XCJzdmVtYmVkXCI6XCJlbWJlZFwifWAsaT1cIm1hcFwiKToobj1lLm1hdGNoKC8oPzptYXBzXFwuKT9nb29nbGVcXC4oW2Etel17MiwzfSg/OlxcLlthLXpdezJ9KT8pXFwvKD86bWFwc1xcL3NlYXJjaFxcLykoLiopL2kpKSYmKHQuc3JjPWBodHRwczovL21hcHMuZ29vZ2xlLiR7blsxXX0vbWFwcz9xPSR7blsyXS5yZXBsYWNlKFwicXVlcnk9XCIsXCJxPVwiKS5yZXBsYWNlKFwiYXBpPTFcIixcIlwiKX0mb3V0cHV0PWVtYmVkYCxpPVwibWFwXCIpKSxpPWl8fHRoaXMuaW5zdGFuY2Uub3B0aW9uKFwiZGVmYXVsdFR5cGVcIiksdC50eXBlPWksXCJpbWFnZVwiPT09aSYmKHQudGh1bWJTcmM9dC50aHVtYlNyY3x8dC5zcmMpfXNldENvbnRlbnQodCl7Y29uc3QgZT10aGlzLmluc3RhbmNlLm9wdGlvbkZvcih0LFwic3JjXCIpfHxcIlwiO2lmKHQmJnQudHlwZSYmZSl7c3dpdGNoKHQudHlwZSl7Y2FzZVwiaHRtbFwiOnRoaXMuaW5zdGFuY2Uuc2V0Q29udGVudCh0LGUpO2JyZWFrO2Nhc2VcImh0bWw1dmlkZW9cIjpjb25zdCBpPXRoaXMub3B0aW9uKFwidmlkZW9UcGxcIik7aSYmdGhpcy5pbnN0YW5jZS5zZXRDb250ZW50KHQsaS5yZXBsYWNlKC9cXHtcXHtzcmNcXH1cXH0vZ2ksZStcIlwiKS5yZXBsYWNlKC9cXHtcXHtmb3JtYXRcXH1cXH0vZ2ksdGhpcy5vcHRpb25Gb3IodCxcInZpZGVvRm9ybWF0XCIpfHxcIlwiKS5yZXBsYWNlKC9cXHtcXHtwb3N0ZXJcXH1cXH0vZ2ksdC5wb3N0ZXJ8fHQudGh1bWJTcmN8fFwiXCIpKTticmVhaztjYXNlXCJpbmxpbmVcIjpjYXNlXCJjbG9uZVwiOnRoaXMuc2V0SW5saW5lQ29udGVudCh0KTticmVhaztjYXNlXCJhamF4XCI6dGhpcy5sb2FkQWpheENvbnRlbnQodCk7YnJlYWs7Y2FzZVwicGRmXCI6Y2FzZVwibWFwXCI6Y2FzZVwieW91dHViZVwiOmNhc2VcInZpbWVvXCI6dC5wcmVsb2FkPSExO2Nhc2VcImlmcmFtZVwiOnRoaXMuc2V0SWZyYW1lQ29udGVudCh0KX10aGlzLnNldEFzcGVjdFJhdGlvKHQpfX1zZXRBc3BlY3RSYXRpbyh0KXt2YXIgZTtjb25zdCBpPXQud2lkdGh8fDAsbj10LmhlaWdodHx8MDtpZihpJiZuKXJldHVybjtjb25zdCBzPXQuY29udGVudEVsLG89dGhpcy5vcHRpb25Gb3IodCxcInZpZGVvUmF0aW9cIiksYT1udWxsPT09KGU9dC5lbCl8fHZvaWQgMD09PWU/dm9pZCAwOmUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7aWYoIShzJiZhJiZvJiYxIT09byYmdC50eXBlJiZbXCJ2aWRlb1wiLFwieW91dHViZVwiLFwidmltZW9cIixcImh0bWw1dmlkZW9cIl0uaW5jbHVkZXModC50eXBlKSkpcmV0dXJuO2NvbnN0IHI9YS53aWR0aCxsPWEuaGVpZ2h0O3Muc3R5bGUuYXNwZWN0UmF0aW89bytcIlwiLHMuc3R5bGUud2lkdGg9ci9sPm8/XCJhdXRvXCI6XCJcIixzLnN0eWxlLmhlaWdodD1yL2w+bz9cIlwiOlwiYXV0b1wifWF0dGFjaCgpe2NvbnN0IHQ9dGhpcyxlPXQuaW5zdGFuY2U7ZS5vbihcIkNhcm91c2VsLmluaXRTbGlkZVwiLHQub25Jbml0U2xpZGUpLGUub24oXCJDYXJvdXNlbC5jcmVhdGVTbGlkZVwiLHQub25DcmVhdGVTbGlkZSksZS5vbihcIkNhcm91c2VsLnJlbW92ZVNsaWRlXCIsdC5vblJlbW92ZVNsaWRlKSxlLm9uKFwiQ2Fyb3VzZWwuc2VsZWN0U2xpZGVcIix0Lm9uU2VsZWN0U2xpZGUpLGUub24oXCJDYXJvdXNlbC51bnNlbGVjdFNsaWRlXCIsdC5vblVuc2VsZWN0U2xpZGUpLGUub24oXCJDYXJvdXNlbC5QYW56b29tLnJlZnJlc2hcIix0Lm9uUmVmcmVzaCksZS5vbihcImRvbmVcIix0Lm9uRG9uZSksd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJtZXNzYWdlXCIsdC5vbk1lc3NhZ2UpfWRldGFjaCgpe2NvbnN0IHQ9dGhpcyxlPXQuaW5zdGFuY2U7ZS5vZmYoXCJDYXJvdXNlbC5pbml0U2xpZGVcIix0Lm9uSW5pdFNsaWRlKSxlLm9mZihcIkNhcm91c2VsLmNyZWF0ZVNsaWRlXCIsdC5vbkNyZWF0ZVNsaWRlKSxlLm9mZihcIkNhcm91c2VsLnJlbW92ZVNsaWRlXCIsdC5vblJlbW92ZVNsaWRlKSxlLm9mZihcIkNhcm91c2VsLnNlbGVjdFNsaWRlXCIsdC5vblNlbGVjdFNsaWRlKSxlLm9mZihcIkNhcm91c2VsLnVuc2VsZWN0U2xpZGVcIix0Lm9uVW5zZWxlY3RTbGlkZSksZS5vZmYoXCJDYXJvdXNlbC5QYW56b29tLnJlZnJlc2hcIix0Lm9uUmVmcmVzaCksZS5vZmYoXCJkb25lXCIsdC5vbkRvbmUpLHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwibWVzc2FnZVwiLHQub25NZXNzYWdlKX19T2JqZWN0LmRlZmluZVByb3BlcnR5KGh0LFwiZGVmYXVsdHNcIix7ZW51bWVyYWJsZTohMCxjb25maWd1cmFibGU6ITAsd3JpdGFibGU6ITAsdmFsdWU6bHR9KTtjb25zdCBkdD1cInBsYXlcIix1dD1cInBhdXNlXCIscHQ9XCJyZWFkeVwiO2NsYXNzIGZ0IGV4dGVuZHMgQntjb25zdHJ1Y3Rvcigpe3N1cGVyKC4uLmFyZ3VtZW50cyksT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsXCJzdGF0ZVwiLHtlbnVtZXJhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMCx3cml0YWJsZTohMCx2YWx1ZTpwdH0pLE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLFwiaW5Ib3ZlclwiLHtlbnVtZXJhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMCx3cml0YWJsZTohMCx2YWx1ZTohMX0pLE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLFwidGltZXJcIix7ZW51bWVyYWJsZTohMCxjb25maWd1cmFibGU6ITAsd3JpdGFibGU6ITAsdmFsdWU6bnVsbH0pLE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLFwicHJvZ3Jlc3NCYXJcIix7ZW51bWVyYWJsZTohMCxjb25maWd1cmFibGU6ITAsd3JpdGFibGU6ITAsdmFsdWU6bnVsbH0pfWdldCBpc0FjdGl2ZSgpe3JldHVybiB0aGlzLnN0YXRlIT09cHR9b25SZWFkeSh0KXt0aGlzLm9wdGlvbihcImF1dG9TdGFydFwiKSYmKHQuaXNJbmZpbml0ZXx8dC5wYWdlPHQucGFnZXMubGVuZ3RoLTEpJiZ0aGlzLnN0YXJ0KCl9b25DaGFuZ2UoKXt2YXIgdDsobnVsbD09PSh0PXRoaXMuaW5zdGFuY2UucGFuem9vbSl8fHZvaWQgMD09PXQ/dm9pZCAwOnQuaXNSZXN0aW5nKXx8KHRoaXMucmVtb3ZlUHJvZ3Jlc3NCYXIoKSx0aGlzLnBhdXNlKCkpfW9uU2V0dGxlKCl7dGhpcy5yZXN1bWUoKX1vblZpc2liaWxpdHlDaGFuZ2UoKXtcInZpc2libGVcIj09PWRvY3VtZW50LnZpc2liaWxpdHlTdGF0ZT90aGlzLnJlc3VtZSgpOnRoaXMucGF1c2UoKX1vbk1vdXNlRW50ZXIoKXt0aGlzLmluSG92ZXI9ITAsdGhpcy5wYXVzZSgpfW9uTW91c2VMZWF2ZSgpe3ZhciB0O3RoaXMuaW5Ib3Zlcj0hMSwobnVsbD09PSh0PXRoaXMuaW5zdGFuY2UucGFuem9vbSl8fHZvaWQgMD09PXQ/dm9pZCAwOnQuaXNSZXN0aW5nKSYmdGhpcy5yZXN1bWUoKX1vblRpbWVyRW5kKCl7Y29uc3QgdD10aGlzLmluc3RhbmNlO1wicGxheVwiPT09dGhpcy5zdGF0ZSYmKHQuaXNJbmZpbml0ZXx8dC5wYWdlIT09dC5wYWdlcy5sZW5ndGgtMT90LnNsaWRlTmV4dCgpOnQuc2xpZGVUbygwKSl9cmVtb3ZlUHJvZ3Jlc3NCYXIoKXt0aGlzLnByb2dyZXNzQmFyJiYodGhpcy5wcm9ncmVzc0Jhci5yZW1vdmUoKSx0aGlzLnByb2dyZXNzQmFyPW51bGwpfWNyZWF0ZVByb2dyZXNzQmFyKCl7dmFyIHQ7aWYoIXRoaXMub3B0aW9uKFwic2hvd1Byb2dyZXNzXCIpKXJldHVybiBudWxsO3RoaXMucmVtb3ZlUHJvZ3Jlc3NCYXIoKTtjb25zdCBlPXRoaXMuaW5zdGFuY2UsaT0obnVsbD09PSh0PWUucGFnZXNbZS5wYWdlXSl8fHZvaWQgMD09PXQ/dm9pZCAwOnQuc2xpZGVzKXx8W107bGV0IG49dGhpcy5vcHRpb24oXCJwcm9ncmVzc1BhcmVudEVsXCIpO2lmKG58fChuPSgxPT09aS5sZW5ndGg/aVswXS5lbDpudWxsKXx8ZS52aWV3cG9ydCksIW4pcmV0dXJuIG51bGw7Y29uc3Qgcz1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO3JldHVybiBTKHMsXCJmLXByb2dyZXNzXCIpLG4ucHJlcGVuZChzKSx0aGlzLnByb2dyZXNzQmFyPXMscy5vZmZzZXRIZWlnaHQsc31zZXQoKXtjb25zdCB0PXRoaXMsZT10Lmluc3RhbmNlO2lmKGUucGFnZXMubGVuZ3RoPDIpcmV0dXJuO2lmKHQudGltZXIpcmV0dXJuO2NvbnN0IGk9dC5vcHRpb24oXCJ0aW1lb3V0XCIpO3Quc3RhdGU9ZHQsUyhlLmNvbnRhaW5lcixcImhhcy1hdXRvcGxheVwiKTtsZXQgbj10LmNyZWF0ZVByb2dyZXNzQmFyKCk7biYmKG4uc3R5bGUudHJhbnNpdGlvbkR1cmF0aW9uPWAke2l9bXNgLG4uc3R5bGUudHJhbnNmb3JtPVwic2NhbGVYKDEpXCIpLHQudGltZXI9c2V0VGltZW91dCgoKCk9Pnt0LnRpbWVyPW51bGwsdC5pbkhvdmVyfHx0Lm9uVGltZXJFbmQoKX0pLGkpLHQuZW1pdChcInNldFwiKX1jbGVhcigpe2NvbnN0IHQ9dGhpczt0LnRpbWVyJiYoY2xlYXJUaW1lb3V0KHQudGltZXIpLHQudGltZXI9bnVsbCksdC5yZW1vdmVQcm9ncmVzc0JhcigpfXN0YXJ0KCl7Y29uc3QgdD10aGlzO2lmKHQuc2V0KCksdC5zdGF0ZSE9PXB0KXtpZih0Lm9wdGlvbihcInBhdXNlT25Ib3ZlclwiKSl7Y29uc3QgZT10Lmluc3RhbmNlLmNvbnRhaW5lcjtlLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWVudGVyXCIsdC5vbk1vdXNlRW50ZXIsITEpLGUuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIix0Lm9uTW91c2VMZWF2ZSwhMSl9ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInZpc2liaWxpdHljaGFuZ2VcIix0Lm9uVmlzaWJpbGl0eUNoYW5nZSwhMSksdC5lbWl0KFwic3RhcnRcIil9fXN0b3AoKXtjb25zdCB0PXRoaXMsZT10LnN0YXRlLGk9dC5pbnN0YW5jZS5jb250YWluZXI7dC5jbGVhcigpLHQuc3RhdGU9cHQsaS5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2VlbnRlclwiLHQub25Nb3VzZUVudGVyLCExKSxpLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZWxlYXZlXCIsdC5vbk1vdXNlTGVhdmUsITEpLGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJ2aXNpYmlsaXR5Y2hhbmdlXCIsdC5vblZpc2liaWxpdHlDaGFuZ2UsITEpLEUoaSxcImhhcy1hdXRvcGxheVwiKSxlIT09cHQmJnQuZW1pdChcInN0b3BcIil9cGF1c2UoKXtjb25zdCB0PXRoaXM7dC5zdGF0ZT09PWR0JiYodC5zdGF0ZT11dCx0LmNsZWFyKCksdC5lbWl0KHV0KSl9cmVzdW1lKCl7Y29uc3QgdD10aGlzLGU9dC5pbnN0YW5jZTtpZihlLmlzSW5maW5pdGV8fGUucGFnZSE9PWUucGFnZXMubGVuZ3RoLTEpaWYodC5zdGF0ZSE9PWR0KXtpZih0LnN0YXRlPT09dXQmJiF0LmluSG92ZXIpe2NvbnN0IGU9bmV3IEV2ZW50KFwicmVzdW1lXCIse2J1YmJsZXM6ITAsY2FuY2VsYWJsZTohMH0pO3QuZW1pdChcInJlc3VtZVwiLGUpLGUuZGVmYXVsdFByZXZlbnRlZHx8dC5zZXQoKX19ZWxzZSB0LnNldCgpO2Vsc2UgdC5zdG9wKCl9dG9nZ2xlKCl7dGhpcy5zdGF0ZT09PWR0fHx0aGlzLnN0YXRlPT09dXQ/dGhpcy5zdG9wKCk6dGhpcy5zdGFydCgpfWF0dGFjaCgpe2NvbnN0IHQ9dGhpcyxlPXQuaW5zdGFuY2U7ZS5vbihcInJlYWR5XCIsdC5vblJlYWR5KSxlLm9uKFwiUGFuem9vbS5zdGFydEFuaW1hdGlvblwiLHQub25DaGFuZ2UpLGUub24oXCJQYW56b29tLmVuZEFuaW1hdGlvblwiLHQub25TZXR0bGUpLGUub24oXCJQYW56b29tLnRvdWNoTW92ZVwiLHQub25DaGFuZ2UpfWRldGFjaCgpe2NvbnN0IHQ9dGhpcyxlPXQuaW5zdGFuY2U7ZS5vZmYoXCJyZWFkeVwiLHQub25SZWFkeSksZS5vZmYoXCJQYW56b29tLnN0YXJ0QW5pbWF0aW9uXCIsdC5vbkNoYW5nZSksZS5vZmYoXCJQYW56b29tLmVuZEFuaW1hdGlvblwiLHQub25TZXR0bGUpLGUub2ZmKFwiUGFuem9vbS50b3VjaE1vdmVcIix0Lm9uQ2hhbmdlKSx0LnN0b3AoKX19T2JqZWN0LmRlZmluZVByb3BlcnR5KGZ0LFwiZGVmYXVsdHNcIix7ZW51bWVyYWJsZTohMCxjb25maWd1cmFibGU6ITAsd3JpdGFibGU6ITAsdmFsdWU6e2F1dG9TdGFydDohMCxwYXVzZU9uSG92ZXI6ITAscHJvZ3Jlc3NQYXJlbnRFbDpudWxsLHNob3dQcm9ncmVzczohMCx0aW1lb3V0OjNlM319KTtjbGFzcyBtdCBleHRlbmRzIEJ7Y29uc3RydWN0b3IoKXtzdXBlciguLi5hcmd1bWVudHMpLE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLFwicmVmXCIse2VudW1lcmFibGU6ITAsY29uZmlndXJhYmxlOiEwLHdyaXRhYmxlOiEwLHZhbHVlOm51bGx9KX1vblByZXBhcmUodCl7Y29uc3QgZT10LmNhcm91c2VsO2lmKCFlKXJldHVybjtjb25zdCBpPXQuY29udGFpbmVyO2kmJihlLm9wdGlvbnMuQXV0b3BsYXk9dSh7YXV0b1N0YXJ0OiExfSx0aGlzLm9wdGlvbihcIkF1dG9wbGF5XCIpfHx7fSx7cGF1c2VPbkhvdmVyOiExLHRpbWVvdXQ6dGhpcy5vcHRpb24oXCJ0aW1lb3V0XCIpLHByb2dyZXNzUGFyZW50RWw6KCk9PnRoaXMub3B0aW9uKFwicHJvZ3Jlc3NQYXJlbnRFbFwiKXx8bnVsbCxvbjp7c3RhcnQ6KCk9Pnt0LmVtaXQoXCJzdGFydFNsaWRlc2hvd1wiKX0sc2V0OmU9Pnt2YXIgbjtpLmNsYXNzTGlzdC5hZGQoXCJoYXMtc2xpZGVzaG93XCIpLChudWxsPT09KG49dC5nZXRTbGlkZSgpKXx8dm9pZCAwPT09bj92b2lkIDA6bi5zdGF0ZSkhPT1pdC5SZWFkeSYmZS5wYXVzZSgpfSxzdG9wOigpPT57aS5jbGFzc0xpc3QucmVtb3ZlKFwiaGFzLXNsaWRlc2hvd1wiKSx0LmlzQ29tcGFjdHx8dC5lbmRJZGxlKCksdC5lbWl0KFwiZW5kU2xpZGVzaG93XCIpfSxyZXN1bWU6KGUsaSk9Pnt2YXIgbixzLG87IWl8fCFpLmNhbmNlbGFibGV8fChudWxsPT09KG49dC5nZXRTbGlkZSgpKXx8dm9pZCAwPT09bj92b2lkIDA6bi5zdGF0ZSk9PT1pdC5SZWFkeSYmKG51bGw9PT0obz1udWxsPT09KHM9dC5jYXJvdXNlbCl8fHZvaWQgMD09PXM/dm9pZCAwOnMucGFuem9vbSl8fHZvaWQgMD09PW8/dm9pZCAwOm8uaXNSZXN0aW5nKXx8aS5wcmV2ZW50RGVmYXVsdCgpfX19KSxlLmF0dGFjaFBsdWdpbnMoe0F1dG9wbGF5OmZ0fSksdGhpcy5yZWY9ZS5wbHVnaW5zLkF1dG9wbGF5KX1vblJlYWR5KHQpe2NvbnN0IGU9dC5jYXJvdXNlbCxpPXRoaXMucmVmO2UmJmkmJnRoaXMub3B0aW9uKFwicGxheU9uU3RhcnRcIikmJihlLmlzSW5maW5pdGV8fGUucGFnZTxlLnBhZ2VzLmxlbmd0aC0xKSYmaS5zdGFydCgpfW9uRG9uZSh0LGUpe2NvbnN0IGk9dGhpcy5yZWY7aWYoIWkpcmV0dXJuO2NvbnN0IG49ZS5wYW56b29tO24mJm4ub24oXCJzdGFydEFuaW1hdGlvblwiLCgoKT0+e3QuaXNDdXJyZW50U2xpZGUoZSkmJmkuc3RvcCgpfSkpLHQuaXNDdXJyZW50U2xpZGUoZSkmJmkucmVzdW1lKCl9b25LZXlkb3duKHQsZSl7dmFyIGk7Y29uc3Qgbj10aGlzLnJlZjtuJiZlPT09dGhpcy5vcHRpb24oXCJrZXlcIikmJlwiQlVUVE9OXCIhPT0obnVsbD09PShpPWRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpfHx2b2lkIDA9PT1pP3ZvaWQgMDppLm5vZGVOYW1lKSYmbi50b2dnbGUoKX1hdHRhY2goKXtjb25zdCB0PXRoaXMsZT10Lmluc3RhbmNlO2Uub24oXCJDYXJvdXNlbC5pbml0XCIsdC5vblByZXBhcmUpLGUub24oXCJDYXJvdXNlbC5yZWFkeVwiLHQub25SZWFkeSksZS5vbihcImRvbmVcIix0Lm9uRG9uZSksZS5vbihcImtleWRvd25cIix0Lm9uS2V5ZG93bil9ZGV0YWNoKCl7Y29uc3QgdD10aGlzLGU9dC5pbnN0YW5jZTtlLm9mZihcIkNhcm91c2VsLmluaXRcIix0Lm9uUHJlcGFyZSksZS5vZmYoXCJDYXJvdXNlbC5yZWFkeVwiLHQub25SZWFkeSksZS5vZmYoXCJkb25lXCIsdC5vbkRvbmUpLGUub2ZmKFwia2V5ZG93blwiLHQub25LZXlkb3duKX19T2JqZWN0LmRlZmluZVByb3BlcnR5KG10LFwiZGVmYXVsdHNcIix7ZW51bWVyYWJsZTohMCxjb25maWd1cmFibGU6ITAsd3JpdGFibGU6ITAsdmFsdWU6e2tleTpcIiBcIixwbGF5T25TdGFydDohMSxwcm9ncmVzc1BhcmVudEVsOnQ9Pnt2YXIgZTtyZXR1cm4obnVsbD09PShlPXQuaW5zdGFuY2UuY29udGFpbmVyKXx8dm9pZCAwPT09ZT92b2lkIDA6ZS5xdWVyeVNlbGVjdG9yKFwiLmZhbmN5Ym94X190b29sYmFyIFtkYXRhLWZhbmN5Ym94LXRvZ2dsZS1zbGlkZXNob3ddXCIpKXx8dC5pbnN0YW5jZS5jb250YWluZXJ9LHRpbWVvdXQ6M2UzfX0pO2NvbnN0IGd0PXtjbGFzc2VzOntjb250YWluZXI6XCJmLXRodW1icyBmLWNhcm91c2VsX190aHVtYnNcIix2aWV3cG9ydDpcImYtdGh1bWJzX192aWV3cG9ydFwiLHRyYWNrOlwiZi10aHVtYnNfX3RyYWNrXCIsc2xpZGU6XCJmLXRodW1ic19fc2xpZGVcIixpc1Jlc3Rpbmc6XCJpcy1yZXN0aW5nXCIsaXNTZWxlY3RlZDpcImlzLXNlbGVjdGVkXCIsaXNMb2FkaW5nOlwiaXMtbG9hZGluZ1wiLGhhc1RodW1iczpcImhhcy10aHVtYnNcIn0sbWluQ291bnQ6MixwYXJlbnRFbDpudWxsLHRodW1iVHBsOic8YnV0dG9uIGNsYXNzPVwiZi10aHVtYnNfX3NsaWRlX19idXR0b25cIiB0YWJpbmRleD1cIjBcIiB0eXBlPVwiYnV0dG9uXCIgYXJpYS1sYWJlbD1cInt7R09UT319XCIgZGF0YS1jYXJvdXNlbC1pbmRleD1cIiVpXCI+PGltZyBjbGFzcz1cImYtdGh1bWJzX19zbGlkZV9faW1nXCIgZGF0YS1sYXp5LXNyYz1cInt7JXN9fVwiIGFsdD1cIlwiIC8+PC9idXR0b24+Jyx0eXBlOlwibW9kZXJuXCJ9O3ZhciBidDshZnVuY3Rpb24odCl7dFt0LkluaXQ9MF09XCJJbml0XCIsdFt0LlJlYWR5PTFdPVwiUmVhZHlcIix0W3QuSGlkZGVuPTJdPVwiSGlkZGVuXCIsdFt0LkRpc2FibGVkPTNdPVwiRGlzYWJsZWRcIn0oYnR8fChidD17fSkpO2xldCB2dD1jbGFzcyBleHRlbmRzIEJ7Y29uc3RydWN0b3IoKXtzdXBlciguLi5hcmd1bWVudHMpLE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLFwidHlwZVwiLHtlbnVtZXJhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMCx3cml0YWJsZTohMCx2YWx1ZTpcIm1vZGVyblwifSksT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsXCJjb250YWluZXJcIix7ZW51bWVyYWJsZTohMCxjb25maWd1cmFibGU6ITAsd3JpdGFibGU6ITAsdmFsdWU6bnVsbH0pLE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLFwidHJhY2tcIix7ZW51bWVyYWJsZTohMCxjb25maWd1cmFibGU6ITAsd3JpdGFibGU6ITAsdmFsdWU6bnVsbH0pLE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLFwiY2Fyb3VzZWxcIix7ZW51bWVyYWJsZTohMCxjb25maWd1cmFibGU6ITAsd3JpdGFibGU6ITAsdmFsdWU6bnVsbH0pLE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLFwicGFuem9vbVwiLHtlbnVtZXJhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMCx3cml0YWJsZTohMCx2YWx1ZTpudWxsfSksT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsXCJ0aHVtYldpZHRoXCIse2VudW1lcmFibGU6ITAsY29uZmlndXJhYmxlOiEwLHdyaXRhYmxlOiEwLHZhbHVlOjB9KSxPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcyxcInRodW1iQ2xpcFdpZHRoXCIse2VudW1lcmFibGU6ITAsY29uZmlndXJhYmxlOiEwLHdyaXRhYmxlOiEwLHZhbHVlOjB9KSxPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcyxcInRodW1iSGVpZ2h0XCIse2VudW1lcmFibGU6ITAsY29uZmlndXJhYmxlOiEwLHdyaXRhYmxlOiEwLHZhbHVlOjB9KSxPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcyxcInRodW1iR2FwXCIse2VudW1lcmFibGU6ITAsY29uZmlndXJhYmxlOiEwLHdyaXRhYmxlOiEwLHZhbHVlOjB9KSxPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcyxcInRodW1iRXh0cmFHYXBcIix7ZW51bWVyYWJsZTohMCxjb25maWd1cmFibGU6ITAsd3JpdGFibGU6ITAsdmFsdWU6MH0pLE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLFwic2hvdWxkQ2VudGVyXCIse2VudW1lcmFibGU6ITAsY29uZmlndXJhYmxlOiEwLHdyaXRhYmxlOiEwLHZhbHVlOiEwfSksT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsXCJzdGF0ZVwiLHtlbnVtZXJhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMCx3cml0YWJsZTohMCx2YWx1ZTpidC5Jbml0fSl9Zm9ybWF0VGh1bWIodCxlKXtyZXR1cm4gdGhpcy5pbnN0YW5jZS5sb2NhbGl6ZShlLFtbXCIlaVwiLHQuaW5kZXhdLFtcIiVkXCIsdC5pbmRleCsxXSxbXCIlc1wiLHQudGh1bWJTcmN8fFwiZGF0YTppbWFnZS9naWY7YmFzZTY0LFIwbEdPRGxoQVFBQkFJQUFBQUFBQVAvLy95SDVCQUVBQUFBQUxBQUFBQUFCQUFFQUFBSUJSQUE3XCJdXSl9Z2V0U2xpZGVzKCl7Y29uc3QgdD1bXSxlPXRoaXMub3B0aW9uKFwidGh1bWJUcGxcIil8fFwiXCI7aWYoZSlmb3IoY29uc3QgaSBvZiB0aGlzLmluc3RhbmNlLnNsaWRlc3x8W10pe2xldCBuPVwiXCI7aS50eXBlJiYobj1gZm9yLSR7aS50eXBlfWAsaS50eXBlJiZbXCJ2aWRlb1wiLFwieW91dHViZVwiLFwidmltZW9cIixcImh0bWw1dmlkZW9cIl0uaW5jbHVkZXMoaS50eXBlKSYmKG4rPVwiIGZvci12aWRlb1wiKSksdC5wdXNoKHtodG1sOnRoaXMuZm9ybWF0VGh1bWIoaSxlKSxjdXN0b21DbGFzczpufSl9cmV0dXJuIHR9b25Jbml0U2xpZGUodCxlKXtjb25zdCBpPWUuZWw7aSYmKGUudGh1bWJTcmM9aS5kYXRhc2V0LnRodW1iU3JjfHxlLnRodW1iU3JjfHxcIlwiLGUudGh1bWJDbGlwV2lkdGg9cGFyc2VGbG9hdChpLmRhdGFzZXQudGh1bWJDbGlwV2lkdGh8fFwiXCIpfHxlLnRodW1iQ2xpcFdpZHRofHwwLGUudGh1bWJIZWlnaHQ9cGFyc2VGbG9hdChpLmRhdGFzZXQudGh1bWJIZWlnaHR8fFwiXCIpfHxlLnRodW1iSGVpZ2h0fHwwKX1vbkluaXRTbGlkZXMoKXt0aGlzLnN0YXRlPT09YnQuSW5pdCYmdGhpcy5idWlsZCgpfW9uUmVmcmVzaE0oKXt0aGlzLnJlZnJlc2hNb2Rlcm4oKX1vbkNoYW5nZU0oKXtcIm1vZGVyblwiPT09dGhpcy50eXBlJiYodGhpcy5zaG91bGRDZW50ZXI9ITAsdGhpcy5jZW50ZXJNb2Rlcm4oKSl9b25DbGlja01vZGVybih0KXt0LnByZXZlbnREZWZhdWx0KCksdC5zdG9wUHJvcGFnYXRpb24oKTtjb25zdCBlPXRoaXMuaW5zdGFuY2UsaT1lLnBhZ2Usbj10PT57aWYodCl7Y29uc3QgZT10LmNsb3Nlc3QoXCJbZGF0YS1jYXJvdXNlbC1pbmRleF1cIik7aWYoZSlyZXR1cm4gcGFyc2VJbnQoZS5kYXRhc2V0LmNhcm91c2VsSW5kZXh8fFwiXCIsMTApfHwwfXJldHVybi0xfSxzPSh0LGUpPT57Y29uc3QgaT1kb2N1bWVudC5lbGVtZW50RnJvbVBvaW50KHQsZSk7cmV0dXJuIGk/bihpKTotMX07bGV0IG89bih0LnRhcmdldCk7bzwwJiYobz1zKHQuY2xpZW50WCt0aGlzLnRodW1iR2FwLHQuY2xpZW50WSksbz09PWkmJihvPWktMSkpLG88MCYmKG89cyh0LmNsaWVudFgtdGhpcy50aHVtYkdhcCx0LmNsaWVudFkpLG89PT1pJiYobz1pKzEpKSxvPDAmJihvPShlPT57bGV0IG49cyh0LmNsaWVudFgtZSx0LmNsaWVudFkpLGE9cyh0LmNsaWVudFgrZSx0LmNsaWVudFkpO3JldHVybiBvPDAmJm49PT1pJiYobz1pKzEpLG88MCYmYT09PWkmJihvPWktMSksb30pKHRoaXMudGh1bWJFeHRyYUdhcCkpLG89PT1pP3RoaXMuY2VudGVyTW9kZXJuKCk6bz4tMSYmbzxlLnBhZ2VzLmxlbmd0aCYmZS5zbGlkZVRvKG8pfW9uVHJhbnNmb3JtTSgpe2lmKFwibW9kZXJuXCIhPT10aGlzLnR5cGUpcmV0dXJuO2NvbnN0e2luc3RhbmNlOnQsY29udGFpbmVyOmUsdHJhY2s6aX09dGhpcyxuPXQucGFuem9vbTtpZighKGUmJmkmJm4mJnRoaXMucGFuem9vbSkpcmV0dXJuO28oZSx0aGlzLmNuKFwiaXNSZXN0aW5nXCIpLG4uc3RhdGUhPT1nLkluaXQmJm4uaXNSZXN0aW5nKTtjb25zdCBzPXRoaXMudGh1bWJHYXAsYT10aGlzLnRodW1iRXh0cmFHYXAscj10aGlzLnRodW1iQ2xpcFdpZHRoO2xldCBsPTAsYz0wLGg9MDtmb3IoY29uc3QgZSBvZiB0LnNsaWRlcyl7bGV0IGk9ZS5pbmRleCxuPWUudGh1bWJTbGlkZUVsO2lmKCFuKWNvbnRpbnVlO28obix0aGlzLmNuKFwiaXNTZWxlY3RlZFwiKSxpPT09dC5wYWdlKSxjPTEtTWF0aC5hYnModC5nZXRQcm9ncmVzcyhpKSksbi5zdHlsZS5zZXRQcm9wZXJ0eShcIi0tcHJvZ3Jlc3NcIixjP2MrXCJcIjpcIlwiKTtjb25zdCBkPS41KigoZS50aHVtYldpZHRofHwwKS1yKTtsKz1zLGwrPWQsYyYmKGwtPWMqKGQrYSkpLG4uc3R5bGUuc2V0UHJvcGVydHkoXCItLXNoaWZ0XCIsbC1zK1wiXCIpLGwrPWQsYyYmKGwtPWMqKGQrYSkpLGwtPXMsMD09PWkmJihoPWEqYyl9aSYmKGkuc3R5bGUuc2V0UHJvcGVydHkoXCItLWxlZnRcIixoK1wiXCIpLGkuc3R5bGUuc2V0UHJvcGVydHkoXCItLXdpZHRoXCIsbCtoK3MrYSpjK1wiXCIpKSx0aGlzLnNob3VsZENlbnRlciYmdGhpcy5jZW50ZXJNb2Rlcm4oKX1idWlsZENsYXNzaWMoKXtjb25zdHtjb250YWluZXI6dCx0cmFjazplfT10aGlzLGk9dGhpcy5nZXRTbGlkZXMoKTtpZighdHx8IWV8fCFpKXJldHVybjtjb25zdCBuPW5ldyB0aGlzLmluc3RhbmNlLmNvbnN0cnVjdG9yKHQsdSh7dHJhY2s6ZSxpbmZpbml0ZTohMSxjZW50ZXI6ITAsZmlsbDohMCxkcmFnRnJlZTohMCxzbGlkZXNQZXJQYWdlOjEsdHJhbnNpdGlvbjohMSxEb3RzOiExLE5hdmlnYXRpb246ITEsY2xhc3Nlczp7Y29udGFpbmVyOlwiZi10aHVtYnNcIix2aWV3cG9ydDpcImYtdGh1bWJzX192aWV3cG9ydFwiLHRyYWNrOlwiZi10aHVtYnNfX3RyYWNrXCIsc2xpZGU6XCJmLXRodW1ic19fc2xpZGVcIn19LHRoaXMub3B0aW9uKFwiQ2Fyb3VzZWxcIil8fHt9LHtTeW5jOnt0YXJnZXQ6dGhpcy5pbnN0YW5jZX0sc2xpZGVzOml9KSk7dGhpcy5jYXJvdXNlbD1uLHRoaXMudHJhY2s9ZSxuLm9uKFwicmVhZHlcIiwoKCk9Pnt0aGlzLmVtaXQoXCJyZWFkeVwiKX0pKSxuLm9uKFwiY3JlYXRlU2xpZGVcIiwoKHQsZSk9Pnt0aGlzLmVtaXQoXCJjcmVhdGVTbGlkZVwiLGUsZS5lbCl9KSl9YnVpbGRNb2Rlcm4oKXtpZihcIm1vZGVyblwiIT09dGhpcy50eXBlKXJldHVybjtjb25zdHtjb250YWluZXI6dCx0cmFjazplLGluc3RhbmNlOml9PXRoaXMscz10aGlzLm9wdGlvbihcInRodW1iVHBsXCIpfHxcIlwiO2lmKCF0fHwhZXx8IXMpcmV0dXJuO3QuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwoKCk9PntFKHQsXCJpcy11c2luZy1tb3VzZVwiKX0pKSxTKHQsXCJpcy1ob3Jpem9udGFsXCIpLHRoaXMudXBkYXRlTW9kZXJuKCk7Zm9yKGNvbnN0IHQgb2YgaS5zbGlkZXN8fFtdKXtjb25zdCBpPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7aWYoUyhpLHRoaXMuY24oXCJzbGlkZVwiKSksdC50eXBlKXtsZXQgZT1gZm9yLSR7dC50eXBlfWA7W1widmlkZW9cIixcInlvdXR1YmVcIixcInZpbWVvXCIsXCJodG1sNXZpZGVvXCJdLmluY2x1ZGVzKHQudHlwZSkmJihlKz1cIiBmb3ItdmlkZW9cIiksUyhpLGUpfWkuYXBwZW5kQ2hpbGQobih0aGlzLmZvcm1hdFRodW1iKHQscykpKSx0aGlzLmVtaXQoXCJjcmVhdGVTbGlkZVwiLHQsaSksdC50aHVtYlNsaWRlRWw9aSxlLmFwcGVuZENoaWxkKGkpLHRoaXMucmVzaXplTW9kZXJuU2xpZGUodCl9Y29uc3Qgbz1uZXcgaS5jb25zdHJ1Y3Rvci5QYW56b29tKHQse2NvbnRlbnQ6ZSxsb2NrQXhpczpcInhcIix6b29tOiExLHBhbk9ubHlab29tZWQ6ITEsYm91bmRzOigpPT57bGV0IHQ9MCxlPTAsbj1pLnNsaWRlc1swXSxzPWkuc2xpZGVzW2kuc2xpZGVzLmxlbmd0aC0xXSxvPWkuc2xpZGVzW2kucGFnZV07cmV0dXJuIG4mJnMmJm8mJihlPS0xKnRoaXMuZ2V0TW9kZXJuVGh1bWJQb3MoMCksMCE9PWkucGFnZSYmKGUrPS41KihuLnRodW1iV2lkdGh8fDApKSx0PS0xKnRoaXMuZ2V0TW9kZXJuVGh1bWJQb3MoaS5zbGlkZXMubGVuZ3RoLTEpLGkucGFnZSE9PWkuc2xpZGVzLmxlbmd0aC0xJiYodCs9KHMudGh1bWJXaWR0aHx8MCktKG8udGh1bWJXaWR0aHx8MCktLjUqKHMudGh1bWJXaWR0aHx8MCkpKSx7eDp7bWluOnQsbWF4OmV9LHk6e21pbjowLG1heDowfX19fSk7by5vbihcInRvdWNoU3RhcnRcIiwoKHQsZSk9Pnt0aGlzLnNob3VsZENlbnRlcj0hMSxTKHRoaXMuY29udGFpbmVyLFwiaXMtdXNpbmctbW91c2VcIil9KSksby5vbihcImNsaWNrXCIsKCh0LGUpPT50aGlzLm9uQ2xpY2tNb2Rlcm4oZSkpKSxvLm9uKFwicmVhZHlcIiwoKCk9Pnt0aGlzLmNlbnRlck1vZGVybigpLHRoaXMuZW1pdChcInJlYWR5XCIpfSkpLG8ub24oW1wiYWZ0ZXJUcmFuc2Zvcm1cIixcInJlZnJlc2hcIl0sKHQ9Pnt0aGlzLmxhenlMb2FkTW9kZXJuKCl9KSksdGhpcy5wYW56b29tPW8sdGhpcy5yZWZyZXNoTW9kZXJuKCl9dXBkYXRlTW9kZXJuKCl7aWYoXCJtb2Rlcm5cIiE9PXRoaXMudHlwZSlyZXR1cm47Y29uc3R7Y29udGFpbmVyOnR9PXRoaXM7dCYmKHRoaXMudGh1bWJHYXA9cGFyc2VGbG9hdChnZXRDb21wdXRlZFN0eWxlKHQpLmdldFByb3BlcnR5VmFsdWUoXCItLWYtdGh1bWItZ2FwXCIpKXx8MCx0aGlzLnRodW1iRXh0cmFHYXA9cGFyc2VGbG9hdChnZXRDb21wdXRlZFN0eWxlKHQpLmdldFByb3BlcnR5VmFsdWUoXCItLWYtdGh1bWItZXh0cmEtZ2FwXCIpKXx8MCx0aGlzLnRodW1iV2lkdGg9cGFyc2VGbG9hdChnZXRDb21wdXRlZFN0eWxlKHQpLmdldFByb3BlcnR5VmFsdWUoXCItLWYtdGh1bWItd2lkdGhcIikpfHw0MCx0aGlzLnRodW1iQ2xpcFdpZHRoPXBhcnNlRmxvYXQoZ2V0Q29tcHV0ZWRTdHlsZSh0KS5nZXRQcm9wZXJ0eVZhbHVlKFwiLS1mLXRodW1iLWNsaXAtd2lkdGhcIikpfHw0MCx0aGlzLnRodW1iSGVpZ2h0PXBhcnNlRmxvYXQoZ2V0Q29tcHV0ZWRTdHlsZSh0KS5nZXRQcm9wZXJ0eVZhbHVlKFwiLS1mLXRodW1iLWhlaWdodFwiKSl8fDQwKX1yZWZyZXNoTW9kZXJuKCl7dmFyIHQ7aWYoXCJtb2Rlcm5cIj09PXRoaXMudHlwZSl7dGhpcy51cGRhdGVNb2Rlcm4oKTtmb3IoY29uc3QgdCBvZiB0aGlzLmluc3RhbmNlLnNsaWRlc3x8W10pdGhpcy5yZXNpemVNb2Rlcm5TbGlkZSh0KTt0aGlzLm9uVHJhbnNmb3JtTSgpLG51bGw9PT0odD10aGlzLnBhbnpvb20pfHx2b2lkIDA9PT10fHx0LnVwZGF0ZU1ldHJpY3MoITApLHRoaXMuY2VudGVyTW9kZXJuKDApfX1jZW50ZXJNb2Rlcm4oZSl7Y29uc3QgaT10aGlzLmluc3RhbmNlLHtjb250YWluZXI6bixwYW56b29tOnN9PXRoaXM7aWYoIW58fCFzfHxzLnN0YXRlPT09Zy5Jbml0KXJldHVybjtjb25zdCBvPWkucGFnZTtsZXQgYT10aGlzLmdldE1vZGVyblRodW1iUG9zKG8pLHI9YTtmb3IobGV0IHQ9aS5wYWdlLTM7dDxpLnBhZ2UrMzt0Kyspe2lmKHQ8MHx8dD5pLnBhZ2VzLmxlbmd0aC0xfHx0PT09aS5wYWdlKWNvbnRpbnVlO2NvbnN0IGU9MS1NYXRoLmFicyhpLmdldFByb2dyZXNzKHQpKTtlPjAmJmU8MSYmKHIrPWUqKHRoaXMuZ2V0TW9kZXJuVGh1bWJQb3ModCktYSkpfWxldCBsPTEwMDt2b2lkIDA9PT1lJiYoZT0uMixpLmluVHJhbnNpdGlvbi5zaXplPjAmJihlPS4xMiksTWF0aC5hYnMoLTEqcy5jdXJyZW50LmUtcik+cy5jb250YWluZXJSZWN0LndpZHRoJiYoZT0uNSxsPTApKSxzLm9wdGlvbnMubWF4VmVsb2NpdHk9bCxzLmFwcGx5Q2hhbmdlKHtwYW5YOnQoLTEqci1zLnRhcmdldC5lLDFlMyksZnJpY3Rpb246bnVsbD09PWkucHJldlBhZ2U/MDplfSl9bGF6eUxvYWRNb2Rlcm4oKXtjb25zdHtpbnN0YW5jZTp0LHBhbnpvb206ZX09dGhpcztpZighZSlyZXR1cm47Y29uc3QgaT0tMSplLmN1cnJlbnQuZXx8MDtsZXQgcz10aGlzLmdldE1vZGVyblRodW1iUG9zKHQucGFnZSk7aWYoZS5zdGF0ZSE9PWcuSW5pdHx8MD09PXMpZm9yKGNvbnN0IHMgb2YgdC5zbGlkZXN8fFtdKXtjb25zdCB0PXMudGh1bWJTbGlkZUVsO2lmKCF0KWNvbnRpbnVlO2NvbnN0IG89dC5xdWVyeVNlbGVjdG9yKFwiaW1nW2RhdGEtbGF6eS1zcmNdXCIpLGE9cy5pbmRleCxyPXRoaXMuZ2V0TW9kZXJuVGh1bWJQb3MoYSksbD1pLS41KmUuY29udGFpbmVyUmVjdC5pbm5lcldpZHRoLGM9bCtlLmNvbnRhaW5lclJlY3QuaW5uZXJXaWR0aDtpZighb3x8cjxsfHxyPmMpY29udGludWU7bGV0IGg9by5kYXRhc2V0LmxhenlTcmM7aWYoIWh8fCFoLmxlbmd0aCljb250aW51ZTtpZihkZWxldGUgby5kYXRhc2V0LmxhenlTcmMsby5zcmM9aCxvLmNvbXBsZXRlKWNvbnRpbnVlO1ModCx0aGlzLmNuKFwiaXNMb2FkaW5nXCIpKTtjb25zdCBkPW4odyk7dC5hcHBlbmRDaGlsZChkKSxvLmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsKCgpPT57dC5vZmZzZXRQYXJlbnQmJih0LmNsYXNzTGlzdC5yZW1vdmUodGhpcy5jbihcImlzTG9hZGluZ1wiKSksZC5yZW1vdmUoKSl9KSwhMSl9fXJlc2l6ZU1vZGVyblNsaWRlKHQpe2lmKFwibW9kZXJuXCIhPT10aGlzLnR5cGUpcmV0dXJuO2lmKCF0LnRodW1iU2xpZGVFbClyZXR1cm47Y29uc3QgZT10LnRodW1iQ2xpcFdpZHRoJiZ0LnRodW1iSGVpZ2h0P01hdGgucm91bmQodGhpcy50aHVtYkhlaWdodCoodC50aHVtYkNsaXBXaWR0aC90LnRodW1iSGVpZ2h0KSk6dGhpcy50aHVtYldpZHRoO3QudGh1bWJXaWR0aD1lfWdldE1vZGVyblRodW1iUG9zKGUpe2NvbnN0IGk9dGhpcy5pbnN0YW5jZS5zbGlkZXNbZV0sbj10aGlzLnBhbnpvb207aWYoIW58fCFuLmNvbnRlbnRSZWN0LmZpdFdpZHRoKXJldHVybiAwO2xldCBzPW4uY29udGFpbmVyUmVjdC5pbm5lcldpZHRoLG89bi5jb250ZW50UmVjdC53aWR0aDsyPT09dGhpcy5pbnN0YW5jZS5zbGlkZXMubGVuZ3RoJiYoZS09MSxvPTIqdGhpcy50aHVtYkNsaXBXaWR0aCk7bGV0IGE9ZSoodGhpcy50aHVtYkNsaXBXaWR0aCt0aGlzLnRodW1iR2FwKSt0aGlzLnRodW1iRXh0cmFHYXArLjUqKGkudGh1bWJXaWR0aHx8MCk7cmV0dXJuIGEtPW8+cz8uNSpzOi41Km8sdChhfHwwLDEpfWJ1aWxkKCl7Y29uc3QgdD10aGlzLmluc3RhbmNlLGU9dC5jb250YWluZXIsaT10aGlzLm9wdGlvbihcIm1pbkNvdW50XCIpfHwwO2lmKGkpe2xldCBlPTA7Zm9yKGNvbnN0IGkgb2YgdC5zbGlkZXN8fFtdKWkudGh1bWJTcmMmJmUrKztpZihlPGkpcmV0dXJuIHRoaXMuY2xlYW51cCgpLHZvaWQodGhpcy5zdGF0ZT1idC5EaXNhYmxlZCl9Y29uc3Qgbj10aGlzLm9wdGlvbihcInR5cGVcIik7aWYoW1wibW9kZXJuXCIsXCJjbGFzc2ljXCJdLmluZGV4T2Yobik8MClyZXR1cm4gdm9pZCh0aGlzLnN0YXRlPWJ0LkRpc2FibGVkKTt0aGlzLnR5cGU9bjtjb25zdCBzPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7UyhzLHRoaXMuY24oXCJjb250YWluZXJcIikpLFMocyxgaXMtJHtufWApO2NvbnN0IG89dGhpcy5vcHRpb24oXCJwYXJlbnRFbFwiKTtvP28uYXBwZW5kQ2hpbGQocyk6ZS5hZnRlcihzKSx0aGlzLmNvbnRhaW5lcj1zLFMoZSx0aGlzLmNuKFwiaGFzVGh1bWJzXCIpKTtjb25zdCBhPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7UyhhLHRoaXMuY24oXCJ0cmFja1wiKSkscy5hcHBlbmRDaGlsZChhKSx0aGlzLnRyYWNrPWEsXCJjbGFzc2ljXCI9PT1uP3RoaXMuYnVpbGRDbGFzc2ljKCk6dGhpcy5idWlsZE1vZGVybigpLHRoaXMuc3RhdGU9YnQuUmVhZHl9Y2xlYW51cCgpe3RoaXMuY2Fyb3VzZWwmJnRoaXMuY2Fyb3VzZWwuZGVzdHJveSgpLHRoaXMuY2Fyb3VzZWw9bnVsbCx0aGlzLnBhbnpvb20mJnRoaXMucGFuem9vbS5kZXN0cm95KCksdGhpcy5wYW56b29tPW51bGwsdGhpcy5jb250YWluZXImJnRoaXMuY29udGFpbmVyLnJlbW92ZSgpLHRoaXMuY29udGFpbmVyPW51bGwsdGhpcy50cmFjaz1udWxsLHRoaXMuc3RhdGU9YnQuSW5pdCxFKHRoaXMuaW5zdGFuY2UuY29udGFpbmVyLHRoaXMuY24oXCJoYXNUaHVtYnNcIikpfWF0dGFjaCgpe2NvbnN0IHQ9dGhpcyxlPXQuaW5zdGFuY2U7ZS5vbihcImluaXRTbGlkZVwiLHQub25Jbml0U2xpZGUpLGUuc3RhdGU9PT1GLkluaXQ/ZS5vbihcImluaXRTbGlkZXNcIix0Lm9uSW5pdFNsaWRlcyk6dC5vbkluaXRTbGlkZXMoKSxlLm9uKFwiUGFuem9vbS5hZnRlclRyYW5zZm9ybVwiLHQub25UcmFuc2Zvcm1NKSxlLm9uKFwiUGFuem9vbS5yZWZyZXNoXCIsdC5vblJlZnJlc2hNKSxlLm9uKFwiY2hhbmdlXCIsdC5vbkNoYW5nZU0pfWRldGFjaCgpe2NvbnN0IHQ9dGhpcyxlPXQuaW5zdGFuY2U7ZS5vZmYoXCJpbml0U2xpZGVcIix0Lm9uSW5pdFNsaWRlKSxlLm9mZihcImluaXRTbGlkZXNcIix0Lm9uSW5pdFNsaWRlcyksZS5vZmYoXCJQYW56b29tLmFmdGVyVHJhbnNmb3JtXCIsdC5vblRyYW5zZm9ybU0pLGUub2ZmKFwiUGFuem9vbS5yZWZyZXNoXCIsdC5vblJlZnJlc2hNKSxlLm9mZihcImNoYW5nZVwiLHQub25DaGFuZ2VNKSx0LmNsZWFudXAoKX19O09iamVjdC5kZWZpbmVQcm9wZXJ0eSh2dCxcImRlZmF1bHRzXCIse2VudW1lcmFibGU6ITAsY29uZmlndXJhYmxlOiEwLHdyaXRhYmxlOiEwLHZhbHVlOmd0fSk7Y29uc3QgeXQ9T2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LGd0KSx7a2V5OlwidFwiLHNob3dPblN0YXJ0OiEwLHBhcmVudEVsOm51bGx9KSx3dD1cImlzLW1hc2tlZFwiLHh0PVwiYXJpYS1oaWRkZW5cIjtjbGFzcyBFdCBleHRlbmRzIEJ7Y29uc3RydWN0b3IoKXtzdXBlciguLi5hcmd1bWVudHMpLE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLFwicmVmXCIse2VudW1lcmFibGU6ITAsY29uZmlndXJhYmxlOiEwLHdyaXRhYmxlOiEwLHZhbHVlOm51bGx9KSxPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcyxcImhpZGRlblwiLHtlbnVtZXJhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMCx3cml0YWJsZTohMCx2YWx1ZTohMX0pfWdldCBpc0VuYWJsZWQoKXtjb25zdCB0PXRoaXMucmVmO3JldHVybiB0JiZ0LnN0YXRlIT09YnQuRGlzYWJsZWR9Z2V0IGlzSGlkZGVuKCl7cmV0dXJuIHRoaXMuaGlkZGVufW9uSW5pdCgpe3ZhciB0O2NvbnN0IGU9dGhpcyxpPWUuaW5zdGFuY2Usbj1pLmNhcm91c2VsO2lmKGUucmVmfHwhbilyZXR1cm47Y29uc3Qgcz1lLm9wdGlvbihcInBhcmVudEVsXCIpfHxpLmZvb3Rlcnx8aS5jb250YWluZXI7aWYoIXMpcmV0dXJuO2NvbnN0IG89dSh7fSxlLm9wdGlvbnMse3BhcmVudEVsOnMsY2xhc3Nlczp7Y29udGFpbmVyOlwiZi10aHVtYnMgZmFuY3lib3hfX3RodW1ic1wifSxDYXJvdXNlbDp7U3luYzp7ZnJpY3Rpb246aS5vcHRpb24oXCJDYXJvdXNlbC5mcmljdGlvblwiKXx8MH19LG9uOntyZWFkeTp0PT57Y29uc3QgaT10LmNvbnRhaW5lcjtpJiZ0aGlzLmhpZGRlbiYmKGUucmVmcmVzaCgpLGkuc3R5bGUudHJhbnNpdGlvbj1cIm5vbmVcIixlLmhpZGUoKSxpLm9mZnNldEhlaWdodCxxdWV1ZU1pY3JvdGFzaygoKCk9PntpLnN0eWxlLnRyYW5zaXRpb249XCJcIixlLnNob3coKX0pKSl9fX0pO28uQ2Fyb3VzZWw9by5DYXJvdXNlbHx8e30sby5DYXJvdXNlbC5vbj11KChudWxsPT09KHQ9ZS5vcHRpb25zLkNhcm91c2VsKXx8dm9pZCAwPT09dD92b2lkIDA6dC5vbil8fHt9LHtjbGljazoodCxlKT0+e2Uuc3RvcFByb3BhZ2F0aW9uKCl9fSksbi5vcHRpb25zLlRodW1icz1vLG4uYXR0YWNoUGx1Z2lucyh7VGh1bWJzOnZ0fSksZS5yZWY9bi5wbHVnaW5zLlRodW1icyxlLm9wdGlvbihcInNob3dPblN0YXJ0XCIpfHwoZS5yZWYuc3RhdGU9YnQuSGlkZGVuLGUuaGlkZGVuPSEwKX1vblJlc2l6ZSgpe3ZhciB0O2NvbnN0IGU9bnVsbD09PSh0PXRoaXMucmVmKXx8dm9pZCAwPT09dD92b2lkIDA6dC5jb250YWluZXI7ZSYmKGUuc3R5bGUubWF4SGVpZ2h0PVwiXCIpfW9uS2V5ZG93bih0LGUpe2NvbnN0IGk9dGhpcy5vcHRpb24oXCJrZXlcIik7aSYmaT09PWUmJnRoaXMudG9nZ2xlKCl9dG9nZ2xlKCl7Y29uc3QgdD10aGlzLnJlZjt0JiZ0LnN0YXRlIT09YnQuRGlzYWJsZWQmJih0LnN0YXRlIT09YnQuSGlkZGVuP3RoaXMuaGlkZGVuP3RoaXMuc2hvdygpOnRoaXMuaGlkZSgpOnQuYnVpbGQoKSl9c2hvdygpe2NvbnN0IHQ9dGhpcy5yZWYsZT10JiZ0LnN0YXRlIT09YnQuRGlzYWJsZWQmJnQuY29udGFpbmVyO2UmJih0aGlzLnJlZnJlc2goKSxlLm9mZnNldEhlaWdodCxlLnJlbW92ZUF0dHJpYnV0ZSh4dCksZS5jbGFzc0xpc3QucmVtb3ZlKHd0KSx0aGlzLmhpZGRlbj0hMSl9aGlkZSgpe2NvbnN0IHQ9dGhpcy5yZWYsZT10JiZ0LmNvbnRhaW5lcjtlJiYodGhpcy5yZWZyZXNoKCksZS5vZmZzZXRIZWlnaHQsZS5jbGFzc0xpc3QuYWRkKHd0KSxlLnNldEF0dHJpYnV0ZSh4dCxcInRydWVcIikpLHRoaXMuaGlkZGVuPSEwfXJlZnJlc2goKXtjb25zdCB0PXRoaXMucmVmO2lmKCF0fHx0LnN0YXRlPT09YnQuRGlzYWJsZWQpcmV0dXJuO2NvbnN0IGU9dC5jb250YWluZXIsaT0obnVsbD09ZT92b2lkIDA6ZS5maXJzdENoaWxkKXx8bnVsbDtlJiZpJiZpLmNoaWxkTm9kZXMubGVuZ3RoJiYoZS5zdHlsZS5tYXhIZWlnaHQ9YCR7aS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5oZWlnaHR9cHhgKX1hdHRhY2goKXtjb25zdCB0PXRoaXMsZT10Lmluc3RhbmNlO2Uuc3RhdGU9PT1ldC5Jbml0P2Uub24oXCJDYXJvdXNlbC5pbml0XCIsdC5vbkluaXQpOnQub25Jbml0KCksZS5vbihcInJlc2l6ZVwiLHQub25SZXNpemUpLGUub24oXCJrZXlkb3duXCIsdC5vbktleWRvd24pfWRldGFjaCgpe3ZhciB0O2NvbnN0IGU9dGhpcyxpPWUuaW5zdGFuY2U7aS5vZmYoXCJDYXJvdXNlbC5pbml0XCIsZS5vbkluaXQpLGkub2ZmKFwicmVzaXplXCIsZS5vblJlc2l6ZSksaS5vZmYoXCJrZXlkb3duXCIsZS5vbktleWRvd24pLG51bGw9PT0odD1pLmNhcm91c2VsKXx8dm9pZCAwPT09dHx8dC5kZXRhY2hQbHVnaW5zKFtcIlRodW1ic1wiXSksZS5yZWY9bnVsbH19T2JqZWN0LmRlZmluZVByb3BlcnR5KEV0LFwiZGVmYXVsdHNcIix7ZW51bWVyYWJsZTohMCxjb25maWd1cmFibGU6ITAsd3JpdGFibGU6ITAsdmFsdWU6eXR9KTtjb25zdCBTdD17cGFuTGVmdDp7aWNvbjonPHN2Zz48cGF0aCBkPVwiTTUgMTJoMTRNNSAxMmw2IDZNNSAxMmw2LTZcIi8+PC9zdmc+JyxjaGFuZ2U6e3Bhblg6LTEwMH19LHBhblJpZ2h0OntpY29uOic8c3ZnPjxwYXRoIGQ9XCJNNSAxMmgxNE0xMyAxOGw2LTZNMTMgNmw2IDZcIi8+PC9zdmc+JyxjaGFuZ2U6e3Bhblg6MTAwfX0scGFuVXA6e2ljb246Jzxzdmc+PHBhdGggZD1cIk0xMiA1djE0TTE4IDExbC02LTZNNiAxMWw2LTZcIi8+PC9zdmc+JyxjaGFuZ2U6e3Bhblk6LTEwMH19LHBhbkRvd246e2ljb246Jzxzdmc+PHBhdGggZD1cIk0xMiA1djE0TTE4IDEzbC02IDZNNiAxM2w2IDZcIi8+PC9zdmc+JyxjaGFuZ2U6e3Bhblk6MTAwfX0sem9vbUluOntpY29uOic8c3ZnPjxjaXJjbGUgY3g9XCIxMVwiIGN5PVwiMTFcIiByPVwiNy41XCIvPjxwYXRoIGQ9XCJtMjEgMjEtNC4zNS00LjM1TTExIDh2Nk04IDExaDZcIi8+PC9zdmc+JyxhY3Rpb246XCJ6b29tSW5cIn0sem9vbU91dDp7aWNvbjonPHN2Zz48Y2lyY2xlIGN4PVwiMTFcIiBjeT1cIjExXCIgcj1cIjcuNVwiLz48cGF0aCBkPVwibTIxIDIxLTQuMzUtNC4zNU04IDExaDZcIi8+PC9zdmc+JyxhY3Rpb246XCJ6b29tT3V0XCJ9LHRvZ2dsZTF0bzE6e2ljb246Jzxzdmc+PHBhdGggZD1cIk0zLjUxIDMuMDdjNS43NC4wMiAxMS40OC0uMDIgMTcuMjIuMDIgMS4zNy4xIDIuMzQgMS42NCAyLjE4IDMuMTMgMCA0LjA4LjAyIDguMTYgMCAxMi4yMy0uMSAxLjU0LTEuNDcgMi42NC0yLjc5IDIuNDYtNS42MS0uMDEtMTEuMjQuMDItMTYuODYtLjAxLTEuMzYtLjEyLTIuMzMtMS42NS0yLjE3LTMuMTQgMC00LjA3LS4wMi04LjE2IDAtMTIuMjMuMS0xLjM2IDEuMjItMi40OCAyLjQyLTIuNDZaXCIvPjxwYXRoIGQ9XCJNNS42NSA4LjU0aDEuNDl2Ni45Mm04Ljk0LTYuOTJoMS40OXY2LjkyTTExLjUgOS40di4wMm0wIDUuMTh2MFwiLz48L3N2Zz4nLGFjdGlvbjpcInRvZ2dsZVpvb21cIn0sdG9nZ2xlWm9vbTp7aWNvbjonPHN2Zz48Zz48bGluZSB4MT1cIjExXCIgeTE9XCI4XCIgeDI9XCIxMVwiIHkyPVwiMTRcIj48L2xpbmU+PC9nPjxjaXJjbGUgY3g9XCIxMVwiIGN5PVwiMTFcIiByPVwiNy41XCIvPjxwYXRoIGQ9XCJtMjEgMjEtNC4zNS00LjM1TTggMTFoNlwiLz48L3N2Zz4nLGFjdGlvbjpcInRvZ2dsZVpvb21cIn0saXRlcmF0ZVpvb206e2ljb246Jzxzdmc+PGc+PGxpbmUgeDE9XCIxMVwiIHkxPVwiOFwiIHgyPVwiMTFcIiB5Mj1cIjE0XCI+PC9saW5lPjwvZz48Y2lyY2xlIGN4PVwiMTFcIiBjeT1cIjExXCIgcj1cIjcuNVwiLz48cGF0aCBkPVwibTIxIDIxLTQuMzUtNC4zNU04IDExaDZcIi8+PC9zdmc+JyxhY3Rpb246XCJpdGVyYXRlWm9vbVwifSxyb3RhdGVDQ1c6e2ljb246Jzxzdmc+PHBhdGggZD1cIk0xNSA0LjU1YTggOCAwIDAgMC02IDE0LjlNOSAxNXY1SDRNMTguMzcgNy4xNnYuMDFNMTMgMTkuOTR2LjAxTTE2Ljg0IDE4LjM3di4wMU0xOS4zNyAxNS4xdi4wMU0xOS45NCAxMXYuMDFcIi8+PC9zdmc+JyxhY3Rpb246XCJyb3RhdGVDQ1dcIn0scm90YXRlQ1c6e2ljb246Jzxzdmc+PHBhdGggZD1cIk05IDQuNTVhOCA4IDAgMCAxIDYgMTQuOU0xNSAxNXY1aDVNNS42MyA3LjE2di4wMU00LjA2IDExdi4wMU00LjYzIDE1LjF2LjAxTTcuMTYgMTguMzd2LjAxTTExIDE5Ljk0di4wMVwiLz48L3N2Zz4nLGFjdGlvbjpcInJvdGF0ZUNXXCJ9LGZsaXBYOntpY29uOic8c3ZnIHN0eWxlPVwic3Ryb2tlLXdpZHRoOiAxLjNcIj48cGF0aCBkPVwiTTEyIDN2MThNMTYgN3YxMGg1TDE2IDdNOCA3djEwSDNMOCA3XCIvPjwvc3ZnPicsYWN0aW9uOlwiZmxpcFhcIn0sZmxpcFk6e2ljb246Jzxzdmcgc3R5bGU9XCJzdHJva2Utd2lkdGg6IDEuM1wiPjxwYXRoIGQ9XCJNMyAxMmgxOE03IDE2aDEwTDcgMjF2LTVNNyA4aDEwTDcgM3Y1XCIvPjwvc3ZnPicsYWN0aW9uOlwiZmxpcFlcIn0sZml0WDp7aWNvbjonPHN2Zz48cGF0aCBkPVwiTTQgMTJWNmEyIDIgMCAwIDEgMi0yaDEyYTIgMiAwIDAgMSAyIDJ2Nk0xMCAxOEgzTTIxIDE4aC03TTYgMTVsLTMgMyAzIDNNMTggMTVsMyAzLTMgM1wiLz48L3N2Zz4nLGFjdGlvbjpcImZpdFhcIn0sZml0WTp7aWNvbjonPHN2Zz48cGF0aCBkPVwiTTEyIDIwSDZhMiAyIDAgMCAxLTItMlY2YTIgMiAwIDAgMSAyLTJoNk0xOCAxNHY3TTE4IDN2N00xNSAxOGwzIDMgMy0zTTE1IDZsMy0zIDMgM1wiLz48L3N2Zz4nLGFjdGlvbjpcImZpdFlcIn0scmVzZXQ6e2ljb246Jzxzdmc+PHBhdGggZD1cIk0yMCAxMUE4LjEgOC4xIDAgMCAwIDQuNSA5TTQgNXY0aDRNNCAxM2E4LjEgOC4xIDAgMCAwIDE1LjUgMm0uNSA0di00aC00XCIvPjwvc3ZnPicsYWN0aW9uOlwicmVzZXRcIn0sdG9nZ2xlRlM6e2ljb246Jzxzdmc+PGc+PHBhdGggZD1cIk0xNC41IDkuNSAyMSAzbTAgMGgtNm02IDB2Nk0zIDIxbDYuNS02LjVNMyAyMXYtNm0wIDZoNlwiLz48L2c+PGc+PHBhdGggZD1cIm0xNCAxMCA3LTdtLTcgN2g2bS02IDBWNE0zIDIxbDctN20wIDB2Nm0wLTZINFwiLz48L2c+PC9zdmc+JyxhY3Rpb246XCJ0b2dnbGVGU1wifX07dmFyIFB0OyFmdW5jdGlvbih0KXt0W3QuSW5pdD0wXT1cIkluaXRcIix0W3QuUmVhZHk9MV09XCJSZWFkeVwiLHRbdC5EaXNhYmxlZD0yXT1cIkRpc2FibGVkXCJ9KFB0fHwoUHQ9e30pKTtjb25zdCBDdD17YWJzb2x1dGU6XCJhdXRvXCIsZGlzcGxheTp7bGVmdDpbXCJpbmZvYmFyXCJdLG1pZGRsZTpbXSxyaWdodDpbXCJpdGVyYXRlWm9vbVwiLFwic2xpZGVzaG93XCIsXCJmdWxsc2NyZWVuXCIsXCJ0aHVtYnNcIixcImNsb3NlXCJdfSxlbmFibGVkOlwiYXV0b1wiLGl0ZW1zOntpbmZvYmFyOnt0cGw6JzxkaXYgY2xhc3M9XCJmYW5jeWJveF9faW5mb2JhclwiIHRhYmluZGV4PVwiLTFcIj48c3BhbiBkYXRhLWZhbmN5Ym94LWN1cnJlbnQtaW5kZXg+PC9zcGFuPi88c3BhbiBkYXRhLWZhbmN5Ym94LWNvdW50Pjwvc3Bhbj48L2Rpdj4nfSxkb3dubG9hZDp7dHBsOic8YSBjbGFzcz1cImYtYnV0dG9uXCIgdGl0bGU9XCJ7e0RPV05MT0FEfX1cIiBkYXRhLWZhbmN5Ym94LWRvd25sb2FkIGhyZWY9XCJqYXZhc3JpcHQ6O1wiPjxzdmc+PHBhdGggZD1cIk00IDE3djJhMiAyIDAgMCAwIDIgMmgxMmEyIDIgMCAwIDAgMi0ydi0yTTcgMTFsNSA1IDUtNU0xMiA0djEyXCIvPjwvc3ZnPjwvYT4nfSxwcmV2Ont0cGw6JzxidXR0b24gY2xhc3M9XCJmLWJ1dHRvblwiIHRpdGxlPVwie3tQUkVWfX1cIiBkYXRhLWZhbmN5Ym94LXByZXY+PHN2Zz48cGF0aCBkPVwibTE1IDYtNiA2IDYgNlwiLz48L3N2Zz48L2J1dHRvbj4nfSxuZXh0Ont0cGw6JzxidXR0b24gY2xhc3M9XCJmLWJ1dHRvblwiIHRpdGxlPVwie3tORVhUfX1cIiBkYXRhLWZhbmN5Ym94LW5leHQ+PHN2Zz48cGF0aCBkPVwibTkgNiA2IDYtNiA2XCIvPjwvc3ZnPjwvYnV0dG9uPid9LHNsaWRlc2hvdzp7dHBsOic8YnV0dG9uIGNsYXNzPVwiZi1idXR0b25cIiB0aXRsZT1cInt7VE9HR0xFX1NMSURFU0hPV319XCIgZGF0YS1mYW5jeWJveC10b2dnbGUtc2xpZGVzaG93Pjxzdmc+PGc+PHBhdGggZD1cIk04IDR2MTZsMTMgLTh6XCI+PC9wYXRoPjwvZz48Zz48cGF0aCBkPVwiTTggNHYxNU0xNyA0djE1XCIvPjwvZz48L3N2Zz48L2J1dHRvbj4nfSxmdWxsc2NyZWVuOnt0cGw6JzxidXR0b24gY2xhc3M9XCJmLWJ1dHRvblwiIHRpdGxlPVwie3tUT0dHTEVfRlVMTFNDUkVFTn19XCIgZGF0YS1mYW5jeWJveC10b2dnbGUtZnVsbHNjcmVlbj48c3ZnPjxnPjxwYXRoIGQ9XCJNNCA4VjZhMiAyIDAgMCAxIDItMmgyTTQgMTZ2MmEyIDIgMCAwIDAgMiAyaDJNMTYgNGgyYTIgMiAwIDAgMSAyIDJ2Mk0xNiAyMGgyYTIgMiAwIDAgMCAyLTJ2LTJcIi8+PC9nPjxnPjxwYXRoIGQ9XCJNMTUgMTl2LTJhMiAyIDAgMCAxIDItMmgyTTE1IDV2MmEyIDIgMCAwIDAgMiAyaDJNNSAxNWgyYTIgMiAwIDAgMSAyIDJ2Mk01IDloMmEyIDIgMCAwIDAgMi0yVjVcIi8+PC9nPjwvc3ZnPjwvYnV0dG9uPid9LHRodW1iczp7dHBsOic8YnV0dG9uIGNsYXNzPVwiZi1idXR0b25cIiB0aXRsZT1cInt7VE9HR0xFX1RIVU1CU319XCIgZGF0YS1mYW5jeWJveC10b2dnbGUtdGh1bWJzPjxzdmc+PGNpcmNsZSBjeD1cIjUuNVwiIGN5PVwiNS41XCIgcj1cIjFcIi8+PGNpcmNsZSBjeD1cIjEyXCIgY3k9XCI1LjVcIiByPVwiMVwiLz48Y2lyY2xlIGN4PVwiMTguNVwiIGN5PVwiNS41XCIgcj1cIjFcIi8+PGNpcmNsZSBjeD1cIjUuNVwiIGN5PVwiMTJcIiByPVwiMVwiLz48Y2lyY2xlIGN4PVwiMTJcIiBjeT1cIjEyXCIgcj1cIjFcIi8+PGNpcmNsZSBjeD1cIjE4LjVcIiBjeT1cIjEyXCIgcj1cIjFcIi8+PGNpcmNsZSBjeD1cIjUuNVwiIGN5PVwiMTguNVwiIHI9XCIxXCIvPjxjaXJjbGUgY3g9XCIxMlwiIGN5PVwiMTguNVwiIHI9XCIxXCIvPjxjaXJjbGUgY3g9XCIxOC41XCIgY3k9XCIxOC41XCIgcj1cIjFcIi8+PC9zdmc+PC9idXR0b24+J30sY2xvc2U6e3RwbDonPGJ1dHRvbiBjbGFzcz1cImYtYnV0dG9uXCIgdGl0bGU9XCJ7e0NMT1NFfX1cIiBkYXRhLWZhbmN5Ym94LWNsb3NlPjxzdmc+PHBhdGggZD1cIm0xOS41IDQuNS0xNSAxNU00LjUgNC41bDE1IDE1XCIvPjwvc3ZnPjwvYnV0dG9uPid9fSxwYXJlbnRFbDpudWxsfSxNdD17dGFiaW5kZXg6XCItMVwiLHdpZHRoOlwiMjRcIixoZWlnaHQ6XCIyNFwiLHZpZXdCb3g6XCIwIDAgMjQgMjRcIix4bWxuczpcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJ9O2NsYXNzIFR0IGV4dGVuZHMgQntjb25zdHJ1Y3Rvcigpe3N1cGVyKC4uLmFyZ3VtZW50cyksT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsXCJzdGF0ZVwiLHtlbnVtZXJhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMCx3cml0YWJsZTohMCx2YWx1ZTpQdC5Jbml0fSksT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsXCJjb250YWluZXJcIix7ZW51bWVyYWJsZTohMCxjb25maWd1cmFibGU6ITAsd3JpdGFibGU6ITAsdmFsdWU6bnVsbH0pfW9uUmVhZHkodCl7dmFyIGU7aWYoIXQuY2Fyb3VzZWwpcmV0dXJuO2xldCBpPXRoaXMub3B0aW9uKFwiZGlzcGxheVwiKSxuPXRoaXMub3B0aW9uKFwiYWJzb2x1dGVcIikscz10aGlzLm9wdGlvbihcImVuYWJsZWRcIik7aWYoXCJhdXRvXCI9PT1zKXtjb25zdCB0PXRoaXMuaW5zdGFuY2UuY2Fyb3VzZWw7bGV0IGU9MDtpZih0KWZvcihjb25zdCBpIG9mIHQuc2xpZGVzKShpLnBhbnpvb218fFwiaW1hZ2VcIj09PWkudHlwZSkmJmUrKztlfHwocz0hMSl9c3x8KGk9dm9pZCAwKTtsZXQgbz0wO2NvbnN0IGE9e2xlZnQ6W10sbWlkZGxlOltdLHJpZ2h0OltdfTtpZihpKWZvcihjb25zdCB0IG9mW1wibGVmdFwiLFwibWlkZGxlXCIsXCJyaWdodFwiXSlmb3IoY29uc3QgbiBvZiBpW3RdKXtjb25zdCBpPXRoaXMuY3JlYXRlRWwobik7aSYmKG51bGw9PT0oZT1hW3RdKXx8dm9pZCAwPT09ZXx8ZS5wdXNoKGkpLG8rKyl9bGV0IHI9bnVsbDtpZihvJiYocj10aGlzLmNyZWF0ZUNvbnRhaW5lcigpKSxyKXtmb3IoY29uc3RbdCxlXW9mIE9iamVjdC5lbnRyaWVzKGEpKXtjb25zdCBpPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7UyhpLFwiZmFuY3lib3hfX3Rvb2xiYXJfX2NvbHVtbiBpcy1cIit0KTtmb3IoY29uc3QgdCBvZiBlKWkuYXBwZW5kQ2hpbGQodCk7XCJhdXRvXCIhPT1ufHxcIm1pZGRsZVwiIT09dHx8ZS5sZW5ndGh8fChuPSEwKSxyLmFwcGVuZENoaWxkKGkpfSEwPT09biYmUyhyLFwiaXMtYWJzb2x1dGVcIiksdGhpcy5zdGF0ZT1QdC5SZWFkeSx0aGlzLm9uUmVmcmVzaCgpfWVsc2UgdGhpcy5zdGF0ZT1QdC5EaXNhYmxlZH1vbkNsaWNrKHQpe3ZhciBlLGk7Y29uc3Qgbj10aGlzLmluc3RhbmNlLHM9bi5nZXRTbGlkZSgpLG89bnVsbD09cz92b2lkIDA6cy5wYW56b29tLGE9dC50YXJnZXQscj1hJiZ4KGEpP2EuZGF0YXNldDpudWxsO2lmKCFyKXJldHVybjtpZih2b2lkIDAhPT1yLmZhbmN5Ym94VG9nZ2xlVGh1bWJzKXJldHVybiB0LnByZXZlbnREZWZhdWx0KCksdC5zdG9wUHJvcGFnYXRpb24oKSx2b2lkKG51bGw9PT0oZT1uLnBsdWdpbnMuVGh1bWJzKXx8dm9pZCAwPT09ZXx8ZS50b2dnbGUoKSk7aWYodm9pZCAwIT09ci5mYW5jeWJveFRvZ2dsZUZ1bGxzY3JlZW4pcmV0dXJuIHQucHJldmVudERlZmF1bHQoKSx0LnN0b3BQcm9wYWdhdGlvbigpLHZvaWQgdGhpcy5pbnN0YW5jZS50b2dnbGVGdWxsc2NyZWVuKCk7aWYodm9pZCAwIT09ci5mYW5jeWJveFRvZ2dsZVNsaWRlc2hvdyl7dC5wcmV2ZW50RGVmYXVsdCgpLHQuc3RvcFByb3BhZ2F0aW9uKCk7Y29uc3QgZT1udWxsPT09KGk9bi5jYXJvdXNlbCl8fHZvaWQgMD09PWk/dm9pZCAwOmkucGx1Z2lucy5BdXRvcGxheTtsZXQgcz1lLmlzQWN0aXZlO3JldHVybiBvJiZcIm1vdXNlbW92ZVwiPT09by5wYW5Nb2RlJiYhcyYmby5yZXNldCgpLHZvaWQocz9lLnN0b3AoKTplLnN0YXJ0KCkpfWNvbnN0IGw9ci5wYW56b29tQWN0aW9uLGM9ci5wYW56b29tQ2hhbmdlO2lmKChjfHxsKSYmKHQucHJldmVudERlZmF1bHQoKSx0LnN0b3BQcm9wYWdhdGlvbigpKSxjKXtsZXQgdD17fTt0cnl7dD1KU09OLnBhcnNlKGMpfWNhdGNoKHQpe31vJiZvLmFwcGx5Q2hhbmdlKHQpfWVsc2UgbCYmbyYmb1tsXSYmb1tsXSgpfW9uQ2hhbmdlKCl7dGhpcy5vblJlZnJlc2goKX1vblJlZnJlc2goKXtpZih0aGlzLmluc3RhbmNlLmlzQ2xvc2luZygpKXJldHVybjtjb25zdCB0PXRoaXMuY29udGFpbmVyO2lmKCF0KXJldHVybjtjb25zdCBlPXRoaXMuaW5zdGFuY2UuZ2V0U2xpZGUoKTtpZighZXx8ZS5zdGF0ZSE9PWl0LlJlYWR5KXJldHVybjtjb25zdCBpPWUmJiFlLmVycm9yJiZlLnBhbnpvb207Zm9yKGNvbnN0IGUgb2YgdC5xdWVyeVNlbGVjdG9yQWxsKFwiW2RhdGEtcGFuem9vbS1hY3Rpb25dXCIpKWk/KGUucmVtb3ZlQXR0cmlidXRlKFwiZGlzYWJsZWRcIiksZS5yZW1vdmVBdHRyaWJ1dGUoXCJ0YWJpbmRleFwiKSk6KGUuc2V0QXR0cmlidXRlKFwiZGlzYWJsZWRcIixcIlwiKSxlLnNldEF0dHJpYnV0ZShcInRhYmluZGV4XCIsXCItMVwiKSk7bGV0IG49aSYmaS5jYW5ab29tSW4oKSxzPWkmJmkuY2FuWm9vbU91dCgpO2Zvcihjb25zdCBlIG9mIHQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtcGFuem9vbS1hY3Rpb249XCJ6b29tSW5cIl0nKSluPyhlLnJlbW92ZUF0dHJpYnV0ZShcImRpc2FibGVkXCIpLGUucmVtb3ZlQXR0cmlidXRlKFwidGFiaW5kZXhcIikpOihlLnNldEF0dHJpYnV0ZShcImRpc2FibGVkXCIsXCJcIiksZS5zZXRBdHRyaWJ1dGUoXCJ0YWJpbmRleFwiLFwiLTFcIikpO2Zvcihjb25zdCBlIG9mIHQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtcGFuem9vbS1hY3Rpb249XCJ6b29tT3V0XCJdJykpcz8oZS5yZW1vdmVBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiKSxlLnJlbW92ZUF0dHJpYnV0ZShcInRhYmluZGV4XCIpKTooZS5zZXRBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiLFwiXCIpLGUuc2V0QXR0cmlidXRlKFwidGFiaW5kZXhcIixcIi0xXCIpKTtmb3IoY29uc3QgZSBvZiB0LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLXBhbnpvb20tYWN0aW9uPVwidG9nZ2xlWm9vbVwiXSxbZGF0YS1wYW56b29tLWFjdGlvbj1cIml0ZXJhdGVab29tXCJdJykpe3N8fG4/KGUucmVtb3ZlQXR0cmlidXRlKFwiZGlzYWJsZWRcIiksZS5yZW1vdmVBdHRyaWJ1dGUoXCJ0YWJpbmRleFwiKSk6KGUuc2V0QXR0cmlidXRlKFwiZGlzYWJsZWRcIixcIlwiKSxlLnNldEF0dHJpYnV0ZShcInRhYmluZGV4XCIsXCItMVwiKSk7Y29uc3QgdD1lLnF1ZXJ5U2VsZWN0b3IoXCJnXCIpO3QmJih0LnN0eWxlLmRpc3BsYXk9bj9cIlwiOlwibm9uZVwiKX19b25Eb25lKHQsZSl7dmFyIGk7bnVsbD09PShpPWUucGFuem9vbSl8fHZvaWQgMD09PWl8fGkub24oXCJhZnRlclRyYW5zZm9ybVwiLCgoKT0+e3RoaXMuaW5zdGFuY2UuaXNDdXJyZW50U2xpZGUoZSkmJnRoaXMub25SZWZyZXNoKCl9KSksdGhpcy5pbnN0YW5jZS5pc0N1cnJlbnRTbGlkZShlKSYmdGhpcy5vblJlZnJlc2goKX1jcmVhdGVDb250YWluZXIoKXtjb25zdCB0PXRoaXMuaW5zdGFuY2UuY29udGFpbmVyO2lmKCF0KXJldHVybiBudWxsO2NvbnN0IGU9dGhpcy5vcHRpb24oXCJwYXJlbnRFbFwiKXx8dCxpPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7cmV0dXJuIFMoaSxcImZhbmN5Ym94X190b29sYmFyXCIpLGUucHJlcGVuZChpKSxpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLHRoaXMub25DbGljayx7cGFzc2l2ZTohMSxjYXB0dXJlOiEwfSksdCYmUyh0LFwiaGFzLXRvb2xiYXJcIiksdGhpcy5jb250YWluZXI9aSxpfWNyZWF0ZUVsKHQpe2NvbnN0IGU9dGhpcy5pbnN0YW5jZSxpPWUuY2Fyb3VzZWw7aWYoIWkpcmV0dXJuIG51bGw7aWYoXCJ0b2dnbGVGU1wiPT09dClyZXR1cm4gbnVsbDtpZihcImZ1bGxzY3JlZW5cIj09PXQmJiFlLmZzQVBJKXJldHVybiBudWxsO2xldCBzPW51bGw7Y29uc3Qgbz1pLnNsaWRlcy5sZW5ndGh8fDA7bGV0IGE9MCxyPTA7Zm9yKGNvbnN0IHQgb2YgaS5zbGlkZXMpKHQucGFuem9vbXx8XCJpbWFnZVwiPT09dC50eXBlKSYmYSsrLChcImltYWdlXCI9PT10LnR5cGV8fHQuZG93bmxvYWRTcmMpJiZyKys7aWYobzwyJiZbXCJpbmZvYmFyXCIsXCJwcmV2XCIsXCJuZXh0XCJdLmluY2x1ZGVzKHQpKXJldHVybiBzO2lmKHZvaWQgMCE9PVN0W3RdJiYhYSlyZXR1cm4gbnVsbDtpZihcImRvd25sb2FkXCI9PT10JiYhcilyZXR1cm4gbnVsbDtpZihcInRodW1ic1wiPT09dCl7Y29uc3QgdD1lLnBsdWdpbnMuVGh1bWJzO2lmKCF0fHwhdC5pc0VuYWJsZWQpcmV0dXJuIG51bGx9aWYoXCJzbGlkZXNob3dcIj09PXQpe2lmKCFpLnBsdWdpbnMuQXV0b3BsYXl8fG88MilyZXR1cm4gbnVsbH1pZih2b2lkIDAhPT1TdFt0XSl7Y29uc3QgZT1TdFt0XTtzPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIikscy5zZXRBdHRyaWJ1dGUoXCJ0aXRsZVwiLHRoaXMuaW5zdGFuY2UubG9jYWxpemUoYHt7JHt0LnRvVXBwZXJDYXNlKCl9fX1gKSksUyhzLFwiZi1idXR0b25cIiksZS5hY3Rpb24mJihzLmRhdGFzZXQucGFuem9vbUFjdGlvbj1lLmFjdGlvbiksZS5jaGFuZ2UmJihzLmRhdGFzZXQucGFuem9vbUNoYW5nZT1KU09OLnN0cmluZ2lmeShlLmNoYW5nZSkpLHMuYXBwZW5kQ2hpbGQobih0aGlzLmluc3RhbmNlLmxvY2FsaXplKGUuaWNvbikpKX1lbHNle2NvbnN0IGU9KHRoaXMub3B0aW9uKFwiaXRlbXNcIil8fFtdKVt0XTtlJiYocz1uKHRoaXMuaW5zdGFuY2UubG9jYWxpemUoZS50cGwpKSxcImZ1bmN0aW9uXCI9PXR5cGVvZiBlLmNsaWNrJiZzLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCh0PT57dC5wcmV2ZW50RGVmYXVsdCgpLHQuc3RvcFByb3BhZ2F0aW9uKCksXCJmdW5jdGlvblwiPT10eXBlb2YgZS5jbGljayYmZS5jbGljay5jYWxsKHRoaXMsdGhpcyx0KX0pKSl9Y29uc3QgbD1udWxsPT1zP3ZvaWQgMDpzLnF1ZXJ5U2VsZWN0b3IoXCJzdmdcIik7aWYobClmb3IoY29uc3RbdCxlXW9mIE9iamVjdC5lbnRyaWVzKE10KSlsLmdldEF0dHJpYnV0ZSh0KXx8bC5zZXRBdHRyaWJ1dGUodCxTdHJpbmcoZSkpO3JldHVybiBzfXJlbW92ZUNvbnRhaW5lcigpe2NvbnN0IHQ9dGhpcy5jb250YWluZXI7dCYmdC5yZW1vdmUoKSx0aGlzLmNvbnRhaW5lcj1udWxsLHRoaXMuc3RhdGU9UHQuRGlzYWJsZWQ7Y29uc3QgZT10aGlzLmluc3RhbmNlLmNvbnRhaW5lcjtlJiZFKGUsXCJoYXMtdG9vbGJhclwiKX1hdHRhY2goKXtjb25zdCB0PXRoaXMsZT10Lmluc3RhbmNlO2Uub24oXCJDYXJvdXNlbC5pbml0U2xpZGVzXCIsdC5vblJlYWR5KSxlLm9uKFwiZG9uZVwiLHQub25Eb25lKSxlLm9uKFwicmV2ZWFsXCIsdC5vbkNoYW5nZSksZS5vbihcIkNhcm91c2VsLmNoYW5nZVwiLHQub25DaGFuZ2UpLHQub25SZWFkeSh0Lmluc3RhbmNlKX1kZXRhY2goKXtjb25zdCB0PXRoaXMsZT10Lmluc3RhbmNlO2Uub2ZmKFwiQ2Fyb3VzZWwuaW5pdFNsaWRlc1wiLHQub25SZWFkeSksZS5vZmYoXCJkb25lXCIsdC5vbkRvbmUpLGUub2ZmKFwicmV2ZWFsXCIsdC5vbkNoYW5nZSksZS5vZmYoXCJDYXJvdXNlbC5jaGFuZ2VcIix0Lm9uQ2hhbmdlKSx0LnJlbW92ZUNvbnRhaW5lcigpfX1PYmplY3QuZGVmaW5lUHJvcGVydHkoVHQsXCJkZWZhdWx0c1wiLHtlbnVtZXJhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMCx3cml0YWJsZTohMCx2YWx1ZTpDdH0pO2NvbnN0IE90PXtIYXNoOnN0LEh0bWw6aHQsSW1hZ2VzOmF0LFNsaWRlc2hvdzptdCxUaHVtYnM6RXQsVG9vbGJhcjpUdH0sQXQ9XCJ3aXRoLWZhbmN5Ym94XCIsenQ9XCJoaWRlLXNjcm9sbGJhclwiLEx0PVwiLS1mYW5jeWJveC1zY3JvbGxiYXItY29tcGVuc2F0ZVwiLFJ0PVwiLS1mYW5jeWJveC1ib2R5LW1hcmdpblwiLGt0PVwiaXMtYW5pbWF0ZWRcIixJdD1cImlzLWNvbXBhY3RcIixEdD1cImlzLWxvYWRpbmdcIixGdD1mdW5jdGlvbigpe3ZhciB0PXdpbmRvdy5nZXRTZWxlY3Rpb24oKTtyZXR1cm4gdCYmXCJSYW5nZVwiPT09dC50eXBlfTtsZXQganQ9bnVsbCxIdD1udWxsO2NvbnN0IEJ0PW5ldyBNYXA7bGV0IE50PTA7Y2xhc3MgX3QgZXh0ZW5kcyBte2dldCBpc0lkbGUoKXtyZXR1cm4gdGhpcy5pZGxlfWdldCBpc0NvbXBhY3QoKXtyZXR1cm4gdGhpcy5vcHRpb24oXCJjb21wYWN0XCIpfWNvbnN0cnVjdG9yKHQ9W10sZT17fSxpPXt9KXtzdXBlcihlKSxPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcyxcInVzZXJTbGlkZXNcIix7ZW51bWVyYWJsZTohMCxjb25maWd1cmFibGU6ITAsd3JpdGFibGU6ITAsdmFsdWU6W119KSxPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcyxcInVzZXJQbHVnaW5zXCIse2VudW1lcmFibGU6ITAsY29uZmlndXJhYmxlOiEwLHdyaXRhYmxlOiEwLHZhbHVlOnt9fSksT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsXCJpZGxlXCIse2VudW1lcmFibGU6ITAsY29uZmlndXJhYmxlOiEwLHdyaXRhYmxlOiEwLHZhbHVlOiExfSksT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsXCJpZGxlVGltZXJcIix7ZW51bWVyYWJsZTohMCxjb25maWd1cmFibGU6ITAsd3JpdGFibGU6ITAsdmFsdWU6bnVsbH0pLE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLFwiY2xpY2tUaW1lclwiLHtlbnVtZXJhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMCx3cml0YWJsZTohMCx2YWx1ZTpudWxsfSksT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsXCJwd3RcIix7ZW51bWVyYWJsZTohMCxjb25maWd1cmFibGU6ITAsd3JpdGFibGU6ITAsdmFsdWU6MH0pLE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLFwiaWdub3JlRm9jdXNDaGFuZ2VcIix7ZW51bWVyYWJsZTohMCxjb25maWd1cmFibGU6ITAsd3JpdGFibGU6ITAsdmFsdWU6ITF9KSxPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcyxcInN0YXRlXCIse2VudW1lcmFibGU6ITAsY29uZmlndXJhYmxlOiEwLHdyaXRhYmxlOiEwLHZhbHVlOmV0LkluaXR9KSxPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcyxcImlkXCIse2VudW1lcmFibGU6ITAsY29uZmlndXJhYmxlOiEwLHdyaXRhYmxlOiEwLHZhbHVlOjB9KSxPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcyxcImNvbnRhaW5lclwiLHtlbnVtZXJhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMCx3cml0YWJsZTohMCx2YWx1ZTpudWxsfSksT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsXCJmb290ZXJcIix7ZW51bWVyYWJsZTohMCxjb25maWd1cmFibGU6ITAsd3JpdGFibGU6ITAsdmFsdWU6bnVsbH0pLE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLFwiY2FwdGlvblwiLHtlbnVtZXJhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMCx3cml0YWJsZTohMCx2YWx1ZTpudWxsfSksT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsXCJjYXJvdXNlbFwiLHtlbnVtZXJhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMCx3cml0YWJsZTohMCx2YWx1ZTpudWxsfSksT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsXCJsYXN0Rm9jdXNcIix7ZW51bWVyYWJsZTohMCxjb25maWd1cmFibGU6ITAsd3JpdGFibGU6ITAsdmFsdWU6bnVsbH0pLE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLFwicHJldk1vdXNlTW92ZUV2ZW50XCIse2VudW1lcmFibGU6ITAsY29uZmlndXJhYmxlOiEwLHdyaXRhYmxlOiEwLHZhbHVlOnZvaWQgMH0pLE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLFwiZnNBUElcIix7ZW51bWVyYWJsZTohMCxjb25maWd1cmFibGU6ITAsd3JpdGFibGU6ITAsdmFsdWU6dm9pZCAwfSksdGhpcy5mc0FQST0oKCk9PntsZXQgdCxlPVwiXCIsaT1cIlwiLG49XCJcIjtyZXR1cm4gZG9jdW1lbnQuZnVsbHNjcmVlbkVuYWJsZWQ/KGU9XCJyZXF1ZXN0RnVsbHNjcmVlblwiLGk9XCJleGl0RnVsbHNjcmVlblwiLG49XCJmdWxsc2NyZWVuRWxlbWVudFwiKTpkb2N1bWVudC53ZWJraXRGdWxsc2NyZWVuRW5hYmxlZCYmKGU9XCJ3ZWJraXRSZXF1ZXN0RnVsbHNjcmVlblwiLGk9XCJ3ZWJraXRFeGl0RnVsbHNjcmVlblwiLG49XCJ3ZWJraXRGdWxsc2NyZWVuRWxlbWVudFwiKSxlJiYodD17cmVxdWVzdDpmdW5jdGlvbih0KXtyZXR1cm5cIndlYmtpdFJlcXVlc3RGdWxsc2NyZWVuXCI9PT1lP3RbZV0oRWxlbWVudC5BTExPV19LRVlCT0FSRF9JTlBVVCk6dFtlXSgpfSxleGl0OmZ1bmN0aW9uKCl7cmV0dXJuIGRvY3VtZW50W25dJiZkb2N1bWVudFtpXSgpfSxpc0Z1bGxzY3JlZW46ZnVuY3Rpb24oKXtyZXR1cm4gZG9jdW1lbnRbbl19fSksdH0pKCksdGhpcy5pZD1lLmlkfHwrK050LEJ0LnNldCh0aGlzLmlkLHRoaXMpLHRoaXMudXNlclNsaWRlcz10LHRoaXMudXNlclBsdWdpbnM9aSxxdWV1ZU1pY3JvdGFzaygoKCk9Pnt0aGlzLmluaXQoKX0pKX1pbml0KCl7aWYodGhpcy5zdGF0ZT09PWV0LkRlc3Ryb3kpcmV0dXJuO3RoaXMuc3RhdGU9ZXQuSW5pdCx0aGlzLmF0dGFjaFBsdWdpbnMoT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LF90LlBsdWdpbnMpLHRoaXMudXNlclBsdWdpbnMpKSx0aGlzLmVtaXQoXCJpbml0XCIpLCEwPT09dGhpcy5vcHRpb24oXCJoaWRlU2Nyb2xsYmFyXCIpJiYoKCk9PntpZighRylyZXR1cm47Y29uc3QgdD1kb2N1bWVudC5ib2R5O2lmKHQuY2xhc3NMaXN0LmNvbnRhaW5zKHp0KSlyZXR1cm47bGV0IGU9d2luZG93LmlubmVyV2lkdGgtZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoO2U8MCYmKGU9MCk7Y29uc3QgaT10LmN1cnJlbnRTdHlsZXx8d2luZG93LmdldENvbXB1dGVkU3R5bGUodCksbj1wYXJzZUZsb2F0KGkubWFyZ2luUmlnaHQpO2RvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eShMdCxgJHtlfXB4YCksbiYmdC5zdHlsZS5zZXRQcm9wZXJ0eShSdCxgJHtufXB4YCksdC5jbGFzc0xpc3QuYWRkKHp0KX0pKCksdGhpcy5pbml0TGF5b3V0KCksdGhpcy5zY2FsZSgpO2NvbnN0IHQ9KCk9Pnt0aGlzLmluaXRDYXJvdXNlbCh0aGlzLnVzZXJTbGlkZXMpLHRoaXMuc3RhdGU9ZXQuUmVhZHksdGhpcy5hdHRhY2hFdmVudHMoKSx0aGlzLmVtaXQoXCJyZWFkeVwiKSxzZXRUaW1lb3V0KCgoKT0+e3RoaXMuY29udGFpbmVyJiZ0aGlzLmNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJhcmlhLWhpZGRlblwiLFwiZmFsc2VcIil9KSwxNil9LGU9dGhpcy5mc0FQSTt0aGlzLm9wdGlvbihcIkZ1bGxzY3JlZW4uYXV0b1N0YXJ0XCIpJiZlJiYhZS5pc0Z1bGxzY3JlZW4oKT9lLnJlcXVlc3QodGhpcy5jb250YWluZXIpLnRoZW4oKCgpPT50KCkpKS5jYXRjaCgoKCk9PnQoKSkpOnQoKX1pbml0TGF5b3V0KCl7dmFyIHQsZTtjb25zdCBpPXRoaXMub3B0aW9uKFwicGFyZW50RWxcIil8fGRvY3VtZW50LmJvZHkscz1uKHRoaXMubG9jYWxpemUodGhpcy5vcHRpb24oXCJ0cGwubWFpblwiKXx8XCJcIikpO3MmJihzLnNldEF0dHJpYnV0ZShcImlkXCIsYGZhbmN5Ym94LSR7dGhpcy5pZH1gKSxzLnNldEF0dHJpYnV0ZShcImFyaWEtbGFiZWxcIix0aGlzLmxvY2FsaXplKFwie3tNT0RBTH19XCIpKSxzLmNsYXNzTGlzdC50b2dnbGUoSXQsdGhpcy5pc0NvbXBhY3QpLFMocyx0aGlzLm9wdGlvbihcIm1haW5DbGFzc1wiKXx8XCJcIiksdGhpcy5jb250YWluZXI9cyx0aGlzLmZvb3Rlcj1zLnF1ZXJ5U2VsZWN0b3IoXCIuZmFuY3lib3hfX2Zvb3RlclwiKSxpLmFwcGVuZENoaWxkKHMpLFMoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LEF0KSxqdCYmSHR8fChqdD1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKSxTKGp0LFwiZmFuY3lib3gtZm9jdXMtZ3VhcmRcIiksanQuc2V0QXR0cmlidXRlKFwidGFiaW5kZXhcIixcIjBcIiksanQuc2V0QXR0cmlidXRlKFwiYXJpYS1oaWRkZW5cIixcInRydWVcIiksanQuc2V0QXR0cmlidXRlKFwiYXJpYS1sYWJlbFwiLFwiRm9jdXMgZ3VhcmRcIiksSHQ9anQuY2xvbmVOb2RlKCksbnVsbD09PSh0PXMucGFyZW50RWxlbWVudCl8fHZvaWQgMD09PXR8fHQuaW5zZXJ0QmVmb3JlKGp0LHMpLG51bGw9PT0oZT1zLnBhcmVudEVsZW1lbnQpfHx2b2lkIDA9PT1lfHxlLmFwcGVuZChIdCkpLHRoaXMub3B0aW9uKFwiYW5pbWF0ZWRcIikmJihTKHMsa3QpLHNldFRpbWVvdXQoKCgpPT57dGhpcy5pc0Nsb3NpbmcoKXx8RShzLGt0KX0pLDM1MCkpLHRoaXMuZW1pdChcImluaXRMYXlvdXRcIikpfWluaXRDYXJvdXNlbCh0KXtjb25zdCBpPXRoaXMuY29udGFpbmVyO2lmKCFpKXJldHVybjtjb25zdCBuPWkucXVlcnlTZWxlY3RvcihcIi5mYW5jeWJveF9fY2Fyb3VzZWxcIik7aWYoIW4pcmV0dXJuO2NvbnN0IHM9dGhpcy5jYXJvdXNlbD1uZXcgWihuLHUoe30se3NsaWRlczp0LHRyYW5zaXRpb246XCJmYWRlXCIsUGFuem9vbTp7bG9ja0F4aXM6dGhpcy5vcHRpb24oXCJkcmFnVG9DbG9zZVwiKT9cInh5XCI6XCJ4XCIsaW5maW5pdGU6ISF0aGlzLm9wdGlvbihcImRyYWdUb0Nsb3NlXCIpJiZcInlcIn0sRG90czohMSxOYXZpZ2F0aW9uOntjbGFzc2VzOntjb250YWluZXI6XCJmYW5jeWJveF9fbmF2XCIsYnV0dG9uOlwiZi1idXR0b25cIixpc05leHQ6XCJpcy1uZXh0XCIsaXNQcmV2OlwiaXMtcHJldlwifX0saW5pdGlhbFBhZ2U6dGhpcy5vcHRpb24oXCJzdGFydEluZGV4XCIpLGwxMG46dGhpcy5vcHRpb24oXCJsMTBuXCIpfSx0aGlzLm9wdGlvbihcIkNhcm91c2VsXCIpfHx7fSkpO3Mub24oXCIqXCIsKCh0LGUsLi4uaSk9Pnt0aGlzLmVtaXQoYENhcm91c2VsLiR7ZX1gLHQsLi4uaSl9KSkscy5vbihbXCJyZWFkeVwiLFwiY2hhbmdlXCJdLCgoKT0+e3ZhciB0O2NvbnN0IGU9dGhpcy5nZXRTbGlkZSgpO2UmJihudWxsPT09KHQ9ZS5wYW56b29tKXx8dm9pZCAwPT09dHx8dC51cGRhdGVDb250cm9scygpKSx0aGlzLm1hbmFnZUNhcHRpb24oZSl9KSksdGhpcy5vbihcIkNhcm91c2VsLnJlbW92ZVNsaWRlXCIsKCh0LGUsaSk9PntpLmNvbnRlbnRFbCYmKGkuY29udGVudEVsLnJlbW92ZSgpLGkuY29udGVudEVsPXZvaWQgMCk7Y29uc3Qgbj1pLmVsO24mJihFKG4sXCJoYXMtZXJyb3JcIiksRShuLFwiaGFzLXVua25vd25cIiksRShuLGBoYXMtJHtpLnR5cGV8fFwidW5rbm93blwifWApKSxpLmNsb3NlQnRuRWwmJmkuY2xvc2VCdG5FbC5yZW1vdmUoKSxpLmNsb3NlQnRuRWw9dm9pZCAwLGkuY2FwdGlvbkVsJiZpLmNhcHRpb25FbC5yZW1vdmUoKSxpLmNhcHRpb25FbD12b2lkIDAsaS5zcGlubmVyRWwmJmkuc3Bpbm5lckVsLnJlbW92ZSgpLGkuc3Bpbm5lckVsPXZvaWQgMCxpLnN0YXRlPXZvaWQgMH0pKSxzLm9uKFwiUGFuem9vbS50b3VjaFN0YXJ0XCIsKCgpPT57dmFyIHQsZTt0aGlzLmlzQ29tcGFjdHx8dGhpcy5lbmRJZGxlKCksKG51bGw9PT0odD1kb2N1bWVudC5hY3RpdmVFbGVtZW50KXx8dm9pZCAwPT09dD92b2lkIDA6dC5jbG9zZXN0KFwiLmYtdGh1bWJzXCIpKSYmKG51bGw9PT0oZT10aGlzLmNvbnRhaW5lcil8fHZvaWQgMD09PWV8fGUuZm9jdXMoKSl9KSkscy5vbihcInNldHRsZVwiLCgoKT0+e3RoaXMuaWRsZVRpbWVyfHx0aGlzLmlzQ29tcGFjdHx8IXRoaXMub3B0aW9uKFwiaWRsZVwiKXx8dGhpcy5zZXRJZGxlKCksdGhpcy5vcHRpb24oXCJhdXRvRm9jdXNcIikmJiF0aGlzLmlzQ2xvc2luZyYmdGhpcy5jaGVja0ZvY3VzKCl9KSksdGhpcy5vcHRpb24oXCJkcmFnVG9DbG9zZVwiKSYmKHMub24oXCJQYW56b29tLmFmdGVyVHJhbnNmb3JtXCIsKCh0LGkpPT57Y29uc3Qgbj10aGlzLmdldFNsaWRlKCk7aWYobiYmZShuLmVsKSlyZXR1cm47Y29uc3Qgcz10aGlzLmNvbnRhaW5lcjtpZihzKXtjb25zdCB0PU1hdGguYWJzKGkuY3VycmVudC5mKSxlPXQ8MT9cIlwiOk1hdGgubWF4KC41LE1hdGgubWluKDEsMS10L2kuY29udGVudFJlY3QuZml0SGVpZ2h0KjEuNSkpO3Muc3R5bGUuc2V0UHJvcGVydHkoXCItLWZhbmN5Ym94LXRzXCIsZT9cIjBzXCI6XCJcIikscy5zdHlsZS5zZXRQcm9wZXJ0eShcIi0tZmFuY3lib3gtb3BhY2l0eVwiLGUrXCJcIil9fSkpLHMub24oXCJQYW56b29tLnRvdWNoRW5kXCIsKCh0LGksbik9Pnt2YXIgcztjb25zdCBvPXRoaXMuZ2V0U2xpZGUoKTtpZihvJiZlKG8uZWwpKXJldHVybjtpZihpLmlzTW9iaWxlJiZkb2N1bWVudC5hY3RpdmVFbGVtZW50JiYtMSE9PVtcIlRFWFRBUkVBXCIsXCJJTlBVVFwiXS5pbmRleE9mKG51bGw9PT0ocz1kb2N1bWVudC5hY3RpdmVFbGVtZW50KXx8dm9pZCAwPT09cz92b2lkIDA6cy5ub2RlTmFtZSkpcmV0dXJuO2NvbnN0IGE9TWF0aC5hYnMoaS5kcmFnT2Zmc2V0LnkpO1wieVwiPT09aS5sb2NrZWRBeGlzJiYoYT49MjAwfHxhPj01MCYmaS5kcmFnT2Zmc2V0LnRpbWU8MzAwKSYmKG4mJm4uY2FuY2VsYWJsZSYmbi5wcmV2ZW50RGVmYXVsdCgpLHRoaXMuY2xvc2UobixcImYtdGhyb3dPdXRcIisoaS5jdXJyZW50LmY8MD9cIlVwXCI6XCJEb3duXCIpKSl9KSkpLHMub24oXCJjaGFuZ2VcIiwodD0+e3ZhciBlO2xldCBpPW51bGw9PT0oZT10aGlzLmdldFNsaWRlKCkpfHx2b2lkIDA9PT1lP3ZvaWQgMDplLnRyaWdnZXJFbDtpZihpKXtjb25zdCBlPW5ldyBDdXN0b21FdmVudChcInNsaWRlVG9cIix7YnViYmxlczohMCxjYW5jZWxhYmxlOiEwLGRldGFpbDp0LnBhZ2V9KTtpLmRpc3BhdGNoRXZlbnQoZSl9fSkpLHMub24oW1wicmVmcmVzaFwiLFwiY2hhbmdlXCJdLCh0PT57Y29uc3QgZT10aGlzLmNvbnRhaW5lcjtpZighZSlyZXR1cm47Zm9yKGNvbnN0IGkgb2YgZS5xdWVyeVNlbGVjdG9yQWxsKFwiW2RhdGEtZmFuY3lib3gtY3VycmVudC1pbmRleF1cIikpaS5pbm5lckhUTUw9dC5wYWdlKzE7Zm9yKGNvbnN0IGkgb2YgZS5xdWVyeVNlbGVjdG9yQWxsKFwiW2RhdGEtZmFuY3lib3gtY291bnRdXCIpKWkuaW5uZXJIVE1MPXQucGFnZXMubGVuZ3RoO2lmKCF0LmlzSW5maW5pdGUpe2Zvcihjb25zdCBpIG9mIGUucXVlcnlTZWxlY3RvckFsbChcIltkYXRhLWZhbmN5Ym94LW5leHRdXCIpKXQucGFnZTx0LnBhZ2VzLmxlbmd0aC0xPyhpLnJlbW92ZUF0dHJpYnV0ZShcImRpc2FibGVkXCIpLGkucmVtb3ZlQXR0cmlidXRlKFwidGFiaW5kZXhcIikpOihpLnNldEF0dHJpYnV0ZShcImRpc2FibGVkXCIsXCJcIiksaS5zZXRBdHRyaWJ1dGUoXCJ0YWJpbmRleFwiLFwiLTFcIikpO2Zvcihjb25zdCBpIG9mIGUucXVlcnlTZWxlY3RvckFsbChcIltkYXRhLWZhbmN5Ym94LXByZXZdXCIpKXQucGFnZT4wPyhpLnJlbW92ZUF0dHJpYnV0ZShcImRpc2FibGVkXCIpLGkucmVtb3ZlQXR0cmlidXRlKFwidGFiaW5kZXhcIikpOihpLnNldEF0dHJpYnV0ZShcImRpc2FibGVkXCIsXCJcIiksaS5zZXRBdHRyaWJ1dGUoXCJ0YWJpbmRleFwiLFwiLTFcIikpfWNvbnN0IGk9dGhpcy5nZXRTbGlkZSgpO2lmKCFpKXJldHVybjtsZXQgbj1pLmRvd25sb2FkU3JjfHxcIlwiO258fFwiaW1hZ2VcIiE9PWkudHlwZXx8aS5lcnJvcnx8XCJzdHJpbmdcIiE9dHlwZW9mIGkuc3JjfHwobj1pLnNyYyk7Y29uc3Qgcz1cImRpc2FibGVkXCIsbz1cInRhYmluZGV4XCIsYT1cImRvd25sb2FkXCIscj1cImhyZWZcIjtmb3IoY29uc3QgdCBvZiBlLnF1ZXJ5U2VsZWN0b3JBbGwoXCJbZGF0YS1mYW5jeWJveC1kb3dubG9hZF1cIikpe2NvbnN0IGU9aS5kb3dubG9hZEZpbGVuYW1lO24/KHQucmVtb3ZlQXR0cmlidXRlKHMpLHQucmVtb3ZlQXR0cmlidXRlKG8pLHQuc2V0QXR0cmlidXRlKHIsbiksdC5zZXRBdHRyaWJ1dGUoYSxlfHxuKSx0LnNldEF0dHJpYnV0ZShcInRhcmdldFwiLFwiX2JsYW5rXCIpKToodC5zZXRBdHRyaWJ1dGUocyxcIlwiKSx0LnNldEF0dHJpYnV0ZShvLFwiLTFcIiksdC5yZW1vdmVBdHRyaWJ1dGUociksdC5yZW1vdmVBdHRyaWJ1dGUoYSkpfX0pKSx0aGlzLmVtaXQoXCJpbml0Q2Fyb3VzZWxcIil9YXR0YWNoRXZlbnRzKCl7Y29uc3QgdD10aGlzLGU9dC5jb250YWluZXI7aWYoIWUpcmV0dXJuO2UuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsdC5vbkNsaWNrLHtwYXNzaXZlOiExLGNhcHR1cmU6ITF9KSxlLmFkZEV2ZW50TGlzdGVuZXIoXCJ3aGVlbFwiLHQub25XaGVlbCx7cGFzc2l2ZTohMSxjYXB0dXJlOiExfSksZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIix0Lm9uS2V5ZG93bix7cGFzc2l2ZTohMSxjYXB0dXJlOiEwfSksZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInZpc2liaWxpdHljaGFuZ2VcIix0Lm9uVmlzaWJpbGl0eUNoYW5nZSwhMSksZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLHQub25Nb3VzZW1vdmUpLHQub3B0aW9uKFwidHJhcEZvY3VzXCIpJiZkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiZm9jdXNcIix0Lm9uRm9jdXMsITApLHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsdC5vblJlc2l6ZSk7Y29uc3QgaT13aW5kb3cudmlzdWFsVmlld3BvcnQ7aSYmKGkuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLHQub25SZXNpemUpLGkuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLHQub25SZXNpemUpKX1kZXRhY2hFdmVudHMoKXtjb25zdCB0PXRoaXMsZT10LmNvbnRhaW5lcjtpZighZSlyZXR1cm47ZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIix0Lm9uS2V5ZG93bix7cGFzc2l2ZTohMSxjYXB0dXJlOiEwfSksZS5yZW1vdmVFdmVudExpc3RlbmVyKFwid2hlZWxcIix0Lm9uV2hlZWwse3Bhc3NpdmU6ITEsY2FwdHVyZTohMX0pLGUucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsdC5vbkNsaWNrLHtwYXNzaXZlOiExLGNhcHR1cmU6ITF9KSxkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsdC5vbk1vdXNlbW92ZSksd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIix0Lm9uUmVzaXplKTtjb25zdCBpPXdpbmRvdy52aXN1YWxWaWV3cG9ydDtpJiYoaS5yZW1vdmVFdmVudExpc3RlbmVyKFwicmVzaXplXCIsdC5vblJlc2l6ZSksaS5yZW1vdmVFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsdC5vblJlc2l6ZSkpLGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJ2aXNpYmlsaXR5Y2hhbmdlXCIsdC5vblZpc2liaWxpdHlDaGFuZ2UsITEpLGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJmb2N1c1wiLHQub25Gb2N1cywhMCl9c2NhbGUoKXtjb25zdCB0PXRoaXMuY29udGFpbmVyO2lmKCF0KXJldHVybjtjb25zdCBlPXdpbmRvdy52aXN1YWxWaWV3cG9ydCxpPU1hdGgubWF4KDEsKG51bGw9PWU/dm9pZCAwOmUuc2NhbGUpfHwxKTtsZXQgbj1cIlwiLHM9XCJcIixvPVwiXCI7aWYoZSYmaT4xKXtsZXQgdD1gJHtlLm9mZnNldExlZnR9cHhgLGE9YCR7ZS5vZmZzZXRUb3B9cHhgO249ZS53aWR0aCppK1wicHhcIixzPWUuaGVpZ2h0KmkrXCJweFwiLG89YHRyYW5zbGF0ZTNkKCR7dH0sICR7YX0sIDApIHNjYWxlKCR7MS9pfSlgfXQuc3R5bGUudHJhbnNmb3JtPW8sdC5zdHlsZS53aWR0aD1uLHQuc3R5bGUuaGVpZ2h0PXN9b25DbGljayh0KXt2YXIgZSxpO2NvbnN0e2NvbnRhaW5lcjpuLGlzQ29tcGFjdDpzfT10aGlzO2lmKCFufHx0aGlzLmlzQ2xvc2luZygpKXJldHVybjshcyYmdGhpcy5vcHRpb24oXCJpZGxlXCIpJiZ0aGlzLnJlc2V0SWRsZSgpO2NvbnN0IG89ZG9jdW1lbnQuYWN0aXZlRWxlbWVudDtpZihGdCgpJiZvJiZuLmNvbnRhaW5zKG8pKXJldHVybjtjb25zdCBhPXQuY29tcG9zZWRQYXRoKClbMF07aWYoYT09PShudWxsPT09KGU9dGhpcy5jYXJvdXNlbCl8fHZvaWQgMD09PWU/dm9pZCAwOmUuY29udGFpbmVyKSlyZXR1cm47aWYoYS5jbG9zZXN0KFwiLmYtc3Bpbm5lclwiKXx8YS5jbG9zZXN0KFwiW2RhdGEtZmFuY3lib3gtY2xvc2VdXCIpKXJldHVybiB0LnByZXZlbnREZWZhdWx0KCksdm9pZCB0aGlzLmNsb3NlKHQpO2lmKGEuY2xvc2VzdChcIltkYXRhLWZhbmN5Ym94LXByZXZdXCIpKXJldHVybiB0LnByZXZlbnREZWZhdWx0KCksdm9pZCB0aGlzLnByZXYoKTtpZihhLmNsb3Nlc3QoXCJbZGF0YS1mYW5jeWJveC1uZXh0XVwiKSlyZXR1cm4gdC5wcmV2ZW50RGVmYXVsdCgpLHZvaWQgdGhpcy5uZXh0KCk7aWYocyYmXCJpbWFnZVwiPT09KG51bGw9PT0oaT10aGlzLmdldFNsaWRlKCkpfHx2b2lkIDA9PT1pP3ZvaWQgMDppLnR5cGUpKXJldHVybiB2b2lkKHRoaXMuY2xpY2tUaW1lcj8oY2xlYXJUaW1lb3V0KHRoaXMuY2xpY2tUaW1lciksdGhpcy5jbGlja1RpbWVyPW51bGwpOnRoaXMuY2xpY2tUaW1lcj1zZXRUaW1lb3V0KCgoKT0+e3RoaXMudG9nZ2xlSWRsZSgpLHRoaXMuY2xpY2tUaW1lcj1udWxsfSksMzUwKSk7aWYodGhpcy5lbWl0KFwiY2xpY2tcIix0KSx0LmRlZmF1bHRQcmV2ZW50ZWQpcmV0dXJuO2xldCByPSExO2lmKGEuY2xvc2VzdChcIi5mYW5jeWJveF9fY29udGVudFwiKSl7aWYobyl7aWYoby5jbG9zZXN0KFwiW2NvbnRlbnRlZGl0YWJsZV1cIikpcmV0dXJuO2EubWF0Y2hlcyhKKXx8by5ibHVyKCl9aWYoRnQoKSlyZXR1cm47cj10aGlzLm9wdGlvbihcImNvbnRlbnRDbGlja1wiKX1lbHNlIGEuY2xvc2VzdChcIi5mYW5jeWJveF9fY2Fyb3VzZWxcIikmJiFhLm1hdGNoZXMoSikmJihyPXRoaXMub3B0aW9uKFwiYmFja2Ryb3BDbGlja1wiKSk7XCJjbG9zZVwiPT09cj8odC5wcmV2ZW50RGVmYXVsdCgpLHRoaXMuY2xvc2UodCkpOlwibmV4dFwiPT09cj8odC5wcmV2ZW50RGVmYXVsdCgpLHRoaXMubmV4dCgpKTpcInByZXZcIj09PXImJih0LnByZXZlbnREZWZhdWx0KCksdGhpcy5wcmV2KCkpfW9uV2hlZWwodCl7dmFyIGU7bGV0IGk9dGhpcy5vcHRpb24oXCJ3aGVlbFwiLHQpOyhudWxsPT09KGU9dC50YXJnZXQpfHx2b2lkIDA9PT1lP3ZvaWQgMDplLmNsb3Nlc3QoXCIuZmFuY3lib3hfX3RodW1ic1wiKSkmJihpPVwic2xpZGVcIik7Y29uc3Qgbj1cInNsaWRlXCI9PT1pLHM9Wy10LmRlbHRhWHx8MCwtdC5kZWx0YVl8fDAsLXQuZGV0YWlsfHwwXS5yZWR1Y2UoKGZ1bmN0aW9uKHQsZSl7cmV0dXJuIE1hdGguYWJzKGUpPk1hdGguYWJzKHQpP2U6dH0pKSxvPU1hdGgubWF4KC0xLE1hdGgubWluKDEscykpLGE9RGF0ZS5ub3coKTt0aGlzLnB3dCYmYS10aGlzLnB3dDwzMDA/biYmdC5wcmV2ZW50RGVmYXVsdCgpOih0aGlzLnB3dD1hLHRoaXMuZW1pdChcIndoZWVsXCIsdCksdC5kZWZhdWx0UHJldmVudGVkfHwoXCJjbG9zZVwiPT09aT8odC5wcmV2ZW50RGVmYXVsdCgpLHRoaXMuY2xvc2UodCkpOlwic2xpZGVcIj09PWkmJih0LnByZXZlbnREZWZhdWx0KCksdGhpc1tvPjA/XCJwcmV2XCI6XCJuZXh0XCJdKCkpKSl9b25LZXlkb3duKHQpe2lmKCF0aGlzLmlzVG9wbW9zdCgpKXJldHVybjt0aGlzLmlzQ29tcGFjdHx8IXRoaXMub3B0aW9uKFwiaWRsZVwiKXx8dGhpcy5pc0Nsb3NpbmcoKXx8dGhpcy5yZXNldElkbGUoKTtjb25zdCBlPXQua2V5LGk9dGhpcy5vcHRpb24oXCJrZXlib2FyZFwiKTtpZighaXx8dC5jdHJsS2V5fHx0LmFsdEtleXx8dC5zaGlmdEtleSlyZXR1cm47Y29uc3Qgbj10LmNvbXBvc2VkUGF0aCgpWzBdLHM9ZG9jdW1lbnQuYWN0aXZlRWxlbWVudCYmZG9jdW1lbnQuYWN0aXZlRWxlbWVudC5jbGFzc0xpc3Qsbz1zJiZzLmNvbnRhaW5zKFwiZi1idXR0b25cIil8fG4uZGF0YXNldC5jYXJvdXNlbFBhZ2V8fG4uZGF0YXNldC5jYXJvdXNlbEluZGV4O2lmKFwiRXNjYXBlXCIhPT1lJiYhbyYmeChuKSl7aWYobi5pc0NvbnRlbnRFZGl0YWJsZXx8LTEhPT1bXCJURVhUQVJFQVwiLFwiT1BUSU9OXCIsXCJJTlBVVFwiLFwiU0VMRUNUXCIsXCJWSURFT1wiXS5pbmRleE9mKG4ubm9kZU5hbWUpKXJldHVybn10aGlzLmVtaXQoXCJrZXlkb3duXCIsZSx0KTtjb25zdCBhPWlbZV07XCJmdW5jdGlvblwiPT10eXBlb2YgdGhpc1thXSYmKHQucHJldmVudERlZmF1bHQoKSx0aGlzW2FdKCkpfW9uUmVzaXplKCl7Y29uc3QgdD1JdCxlPXRoaXMuY29udGFpbmVyO2lmKCFlKXJldHVybjtjb25zdCBpPXRoaXMuaXNDb21wYWN0O2UuY2xhc3NMaXN0LnRvZ2dsZSh0LGkpLHRoaXMubWFuYWdlQ2FwdGlvbih0aGlzLmdldFNsaWRlKCkpLHRoaXMuaXNDb21wYWN0P3RoaXMuY2xlYXJJZGxlKCk6dGhpcy5lbmRJZGxlKCksdGhpcy5zY2FsZSgpLHRoaXMuZW1pdChcInJlc2l6ZVwiKX1vbkZvY3VzKHQpe3RoaXMuaXNUb3Btb3N0KCkmJnRoaXMuY2hlY2tGb2N1cyh0KX1vbk1vdXNlbW92ZSh0KXt0aGlzLnByZXZNb3VzZU1vdmVFdmVudD10LCF0aGlzLmlzQ29tcGFjdCYmdGhpcy5vcHRpb24oXCJpZGxlXCIpJiZ0aGlzLnJlc2V0SWRsZSgpfW9uVmlzaWJpbGl0eUNoYW5nZSgpe1widmlzaWJsZVwiPT09ZG9jdW1lbnQudmlzaWJpbGl0eVN0YXRlP3RoaXMuY2hlY2tGb2N1cygpOnRoaXMuZW5kSWRsZSgpfW1hbmFnZUNsb3NlQnRuKHQpe2NvbnN0IGU9dGhpcy5vcHRpb25Gb3IodCxcImNsb3NlQnV0dG9uXCIpfHwhMTtpZihcImF1dG9cIj09PWUpe2NvbnN0IHQ9dGhpcy5wbHVnaW5zLlRvb2xiYXI7aWYodCYmdC5zdGF0ZT09PVB0LlJlYWR5KXJldHVybn1pZighZSlyZXR1cm47aWYoIXQuY29udGVudEVsfHx0LmNsb3NlQnRuRWwpcmV0dXJuO2NvbnN0IGk9dGhpcy5vcHRpb24oXCJ0cGwuY2xvc2VCdXR0b25cIik7aWYoaSl7Y29uc3QgZT1uKHRoaXMubG9jYWxpemUoaSkpO3QuY2xvc2VCdG5FbD10LmNvbnRlbnRFbC5hcHBlbmRDaGlsZChlKSx0LmVsJiZTKHQuZWwsXCJoYXMtY2xvc2UtYnRuXCIpfX1tYW5hZ2VDYXB0aW9uKHQ9dm9pZCAwKXt2YXIgZSxpO2NvbnN0IG49XCJmYW5jeWJveF9fY2FwdGlvblwiLHM9XCJoYXMtY2FwdGlvblwiLG89dGhpcy5jb250YWluZXI7aWYoIW8pcmV0dXJuO2NvbnN0IGE9dGhpcy5pc0NvbXBhY3R8fHRoaXMub3B0aW9uKFwiY29tbW9uQ2FwdGlvblwiKSxyPSFhO2lmKHRoaXMuY2FwdGlvbiYmdGhpcy5zdG9wKHRoaXMuY2FwdGlvbiksciYmdGhpcy5jYXB0aW9uJiYodGhpcy5jYXB0aW9uLnJlbW92ZSgpLHRoaXMuY2FwdGlvbj1udWxsKSxhJiYhdGhpcy5jYXB0aW9uKWZvcihjb25zdCB0IG9mKG51bGw9PT0oZT10aGlzLmNhcm91c2VsKXx8dm9pZCAwPT09ZT92b2lkIDA6ZS5zbGlkZXMpfHxbXSl0LmNhcHRpb25FbCYmKHQuY2FwdGlvbkVsLnJlbW92ZSgpLHQuY2FwdGlvbkVsPXZvaWQgMCxFKHQuZWwscyksbnVsbD09PShpPXQuZWwpfHx2b2lkIDA9PT1pfHxpLnJlbW92ZUF0dHJpYnV0ZShcImFyaWEtbGFiZWxsZWRieVwiKSk7aWYodHx8KHQ9dGhpcy5nZXRTbGlkZSgpKSwhdHx8YSYmIXRoaXMuaXNDdXJyZW50U2xpZGUodCkpcmV0dXJuO2NvbnN0IGw9dC5lbDtsZXQgYz10aGlzLm9wdGlvbkZvcih0LFwiY2FwdGlvblwiLFwiXCIpO2lmKCFjKXJldHVybiB2b2lkKGEmJnRoaXMuY2FwdGlvbiYmdGhpcy5hbmltYXRlKHRoaXMuY2FwdGlvbixcImYtZmFkZU91dFwiLCgoKT0+e3RoaXMuY2FwdGlvbiYmKHRoaXMuY2FwdGlvbi5pbm5lckhUTUw9XCJcIil9KSkpO2xldCBoPW51bGw7aWYocil7aWYoaD10LmNhcHRpb25FbHx8bnVsbCxsJiYhaCl7Y29uc3QgZT1uK2BfJHt0aGlzLmlkfV8ke3QuaW5kZXh9YDtoPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiksUyhoLG4pLGguc2V0QXR0cmlidXRlKFwiaWRcIixlKSx0LmNhcHRpb25FbD1sLmFwcGVuZENoaWxkKGgpLFMobCxzKSxsLnNldEF0dHJpYnV0ZShcImFyaWEtbGFiZWxsZWRieVwiLGUpfX1lbHNle2lmKGg9dGhpcy5jYXB0aW9uLGh8fChoPW8ucXVlcnlTZWxlY3RvcihcIi5cIituKSksIWgpe2g9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKSxoLmRhdGFzZXQuZmFuY3lib3hDYXB0aW9uPVwiXCIsUyhoLG4pOyh0aGlzLmZvb3Rlcnx8bykucHJlcGVuZChoKX1TKG8scyksdGhpcy5jYXB0aW9uPWh9aCYmKGguaW5uZXJIVE1MPVwiXCIsXCJzdHJpbmdcIj09dHlwZW9mIGM/aC5pbm5lckhUTUw9YzpjIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQmJmguYXBwZW5kQ2hpbGQoYykpfWNoZWNrRm9jdXModCl7dmFyIGU7Y29uc3QgaT1kb2N1bWVudC5hY3RpdmVFbGVtZW50fHxudWxsO2kmJihudWxsPT09KGU9dGhpcy5jb250YWluZXIpfHx2b2lkIDA9PT1lP3ZvaWQgMDplLmNvbnRhaW5zKGkpKXx8dGhpcy5mb2N1cyh0KX1mb2N1cyh0KXt2YXIgZTtpZih0aGlzLmlnbm9yZUZvY3VzQ2hhbmdlKXJldHVybjtjb25zdCBpPWRvY3VtZW50LmFjdGl2ZUVsZW1lbnR8fG51bGwsbj0obnVsbD09dD92b2lkIDA6dC50YXJnZXQpfHxudWxsLHM9dGhpcy5jb250YWluZXIsbz10aGlzLmdldFNsaWRlKCk7aWYoIXN8fCEobnVsbD09PShlPXRoaXMuY2Fyb3VzZWwpfHx2b2lkIDA9PT1lP3ZvaWQgMDplLnZpZXdwb3J0KSlyZXR1cm47aWYoIXQmJmkmJnMuY29udGFpbnMoaSkpcmV0dXJuO2NvbnN0IGE9byYmby5zdGF0ZT09PWl0LlJlYWR5P28uZWw6bnVsbDtpZighYXx8YS5jb250YWlucyhpKXx8cz09PWkpcmV0dXJuO3QmJnQuY2FuY2VsYWJsZSYmdC5wcmV2ZW50RGVmYXVsdCgpLHRoaXMuaWdub3JlRm9jdXNDaGFuZ2U9ITA7Y29uc3Qgcj1BcnJheS5mcm9tKHMucXVlcnlTZWxlY3RvckFsbChKKSk7bGV0IGw9W10sYz1udWxsO2ZvcihsZXQgdCBvZiByKXtjb25zdCBlPSF0Lm9mZnNldFBhcmVudHx8dC5jbG9zZXN0KCdbYXJpYS1oaWRkZW49XCJ0cnVlXCJdJyksaT1hJiZhLmNvbnRhaW5zKHQpLG49IXRoaXMuY2Fyb3VzZWwudmlld3BvcnQuY29udGFpbnModCk7aWYodD09PXN8fChpfHxuKSYmIWUpe2wucHVzaCh0KTtjb25zdCBlPXQuZGF0YXNldC5vcmlnVGFiaW5kZXg7dm9pZCAwIT09ZSYmZSYmKHQudGFiSW5kZXg9cGFyc2VGbG9hdChlKSksdC5yZW1vdmVBdHRyaWJ1dGUoXCJkYXRhLW9yaWctdGFiaW5kZXhcIiksIXQuaGFzQXR0cmlidXRlKFwiYXV0b0ZvY3VzXCIpJiZjfHwoYz10KX1lbHNle2NvbnN0IGU9dm9pZCAwPT09dC5kYXRhc2V0Lm9yaWdUYWJpbmRleD90LmdldEF0dHJpYnV0ZShcInRhYmluZGV4XCIpfHxcIlwiOnQuZGF0YXNldC5vcmlnVGFiaW5kZXg7ZSYmKHQuZGF0YXNldC5vcmlnVGFiaW5kZXg9ZSksdC50YWJJbmRleD0tMX19bGV0IGg9bnVsbDt0Pyghbnx8bC5pbmRleE9mKG4pPDApJiYoaD1jfHxzLGwubGVuZ3RoJiYoaT09PUh0P2g9bFswXTp0aGlzLmxhc3RGb2N1cyE9PXMmJmkhPT1qdHx8KGg9bFtsLmxlbmd0aC0xXSkpKTpoPW8mJlwiaW1hZ2VcIj09PW8udHlwZT9zOmN8fHMsaCYmUShoKSx0aGlzLmxhc3RGb2N1cz1kb2N1bWVudC5hY3RpdmVFbGVtZW50LHRoaXMuaWdub3JlRm9jdXNDaGFuZ2U9ITF9bmV4dCgpe2NvbnN0IHQ9dGhpcy5jYXJvdXNlbDt0JiZ0LnBhZ2VzLmxlbmd0aD4xJiZ0LnNsaWRlTmV4dCgpfXByZXYoKXtjb25zdCB0PXRoaXMuY2Fyb3VzZWw7dCYmdC5wYWdlcy5sZW5ndGg+MSYmdC5zbGlkZVByZXYoKX1qdW1wVG8oLi4udCl7dGhpcy5jYXJvdXNlbCYmdGhpcy5jYXJvdXNlbC5zbGlkZVRvKC4uLnQpfWlzVG9wbW9zdCgpe3ZhciB0O3JldHVybihudWxsPT09KHQ9X3QuZ2V0SW5zdGFuY2UoKSl8fHZvaWQgMD09PXQ/dm9pZCAwOnQuaWQpPT10aGlzLmlkfWFuaW1hdGUodD1udWxsLGU9XCJcIixpKXtpZighdHx8IWUpcmV0dXJuIHZvaWQoaSYmaSgpKTt0aGlzLnN0b3AodCk7Y29uc3Qgbj1zPT57cy50YXJnZXQ9PT10JiZ0LmRhdGFzZXQuYW5pbWF0aW9uTmFtZSYmKHQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImFuaW1hdGlvbmVuZFwiLG4pLGRlbGV0ZSB0LmRhdGFzZXQuYW5pbWF0aW9uTmFtZSxpJiZpKCksRSh0LGUpKX07dC5kYXRhc2V0LmFuaW1hdGlvbk5hbWU9ZSx0LmFkZEV2ZW50TGlzdGVuZXIoXCJhbmltYXRpb25lbmRcIixuKSxTKHQsZSl9c3RvcCh0KXt0JiZ0LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KFwiYW5pbWF0aW9uZW5kXCIse2J1YmJsZXM6ITEsY2FuY2VsYWJsZTohMCxjdXJyZW50VGFyZ2V0OnR9KSl9c2V0Q29udGVudCh0LGU9XCJcIixpPSEwKXtpZih0aGlzLmlzQ2xvc2luZygpKXJldHVybjtjb25zdCBzPXQuZWw7aWYoIXMpcmV0dXJuO2xldCBvPW51bGw7aWYoeChlKT9vPWU6KG89bihlK1wiXCIpLHgobyl8fChvPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiksby5pbm5lckhUTUw9ZStcIlwiKSksW1wiaW1nXCIsXCJwaWN0dXJlXCIsXCJpZnJhbWVcIixcInZpZGVvXCIsXCJhdWRpb1wiXS5pbmNsdWRlcyhvLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkpKXtjb25zdCB0PWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7dC5hcHBlbmRDaGlsZChvKSxvPXR9eChvKSYmdC5maWx0ZXImJiF0LmVycm9yJiYobz1vLnF1ZXJ5U2VsZWN0b3IodC5maWx0ZXIpKSxvJiZ4KG8pPyhTKG8sXCJmYW5jeWJveF9fY29udGVudFwiKSx0LmlkJiZvLnNldEF0dHJpYnV0ZShcImlkXCIsdC5pZCksXCJub25lXCIhPT1vLnN0eWxlLmRpc3BsYXkmJlwibm9uZVwiIT09Z2V0Q29tcHV0ZWRTdHlsZShvKS5nZXRQcm9wZXJ0eVZhbHVlKFwiZGlzcGxheVwiKXx8KG8uc3R5bGUuZGlzcGxheT10LmRpc3BsYXl8fHRoaXMub3B0aW9uKFwiZGVmYXVsdERpc3BsYXlcIil8fFwiZmxleFwiKSxzLmNsYXNzTGlzdC5hZGQoYGhhcy0ke3QuZXJyb3I/XCJlcnJvclwiOnQudHlwZXx8XCJ1bmtub3duXCJ9YCkscy5wcmVwZW5kKG8pLHQuY29udGVudEVsPW8saSYmdGhpcy5yZXZlYWxDb250ZW50KHQpLHRoaXMubWFuYWdlQ2xvc2VCdG4odCksdGhpcy5tYW5hZ2VDYXB0aW9uKHQpKTp0aGlzLnNldEVycm9yKHQsXCJ7e0VMRU1FTlRfTk9UX0ZPVU5EfX1cIil9cmV2ZWFsQ29udGVudCh0LGUpe2NvbnN0IGk9dC5lbCxuPXQuY29udGVudEVsO2kmJm4mJih0aGlzLmVtaXQoXCJyZXZlYWxcIix0KSx0aGlzLmhpZGVMb2FkaW5nKHQpLHQuc3RhdGU9aXQuT3BlbmluZywoZT10aGlzLmlzT3BlbmluZ1NsaWRlKHQpP3ZvaWQgMD09PWU/dGhpcy5vcHRpb25Gb3IodCxcInNob3dDbGFzc1wiKTplOlwiZi1mYWRlSW5cIik/dGhpcy5hbmltYXRlKG4sZSwoKCk9Pnt0aGlzLmRvbmUodCl9KSk6dGhpcy5kb25lKHQpKX1kb25lKHQpe3RoaXMuaXNDbG9zaW5nKCl8fCh0LnN0YXRlPWl0LlJlYWR5LHRoaXMuZW1pdChcImRvbmVcIix0KSxTKHQuZWwsXCJpcy1kb25lXCIpLHRoaXMuaXNDdXJyZW50U2xpZGUodCkmJnRoaXMub3B0aW9uKFwiYXV0b0ZvY3VzXCIpJiZxdWV1ZU1pY3JvdGFzaygoKCk9Pnt0aGlzLm9wdGlvbihcImF1dG9Gb2N1c1wiKSYmKHRoaXMub3B0aW9uKFwiYXV0b0ZvY3VzXCIpP3RoaXMuZm9jdXMoKTp0aGlzLmNoZWNrRm9jdXMoKSl9KSksdGhpcy5pc09wZW5pbmdTbGlkZSh0KSYmIXRoaXMuaXNDb21wYWN0JiZ0aGlzLm9wdGlvbihcImlkbGVcIikmJnRoaXMuc2V0SWRsZSgpKX1pc0N1cnJlbnRTbGlkZSh0KXtjb25zdCBlPXRoaXMuZ2V0U2xpZGUoKTtyZXR1cm4hKCF0fHwhZSkmJmUuaW5kZXg9PT10LmluZGV4fWlzT3BlbmluZ1NsaWRlKHQpe3ZhciBlLGk7cmV0dXJuIG51bGw9PT0obnVsbD09PShlPXRoaXMuY2Fyb3VzZWwpfHx2b2lkIDA9PT1lP3ZvaWQgMDplLnByZXZQYWdlKSYmdC5pbmRleD09PShudWxsPT09KGk9dGhpcy5nZXRTbGlkZSgpKXx8dm9pZCAwPT09aT92b2lkIDA6aS5pbmRleCl9c2hvd0xvYWRpbmcodCl7dC5zdGF0ZT1pdC5Mb2FkaW5nO2NvbnN0IGU9dC5lbDtpZighZSlyZXR1cm47UyhlLER0KSx0aGlzLmVtaXQoXCJsb2FkaW5nXCIsdCksdC5zcGlubmVyRWx8fHNldFRpbWVvdXQoKCgpPT57aWYoIXRoaXMuaXNDbG9zaW5nKCkmJiF0LnNwaW5uZXJFbCYmdC5zdGF0ZT09PWl0LkxvYWRpbmcpe2xldCBpPW4odyk7dC5zcGlubmVyRWw9aSxlLnByZXBlbmQoaSksdGhpcy5hbmltYXRlKGksXCJmLWZhZGVJblwiKX19KSwyNTApfWhpZGVMb2FkaW5nKHQpe2NvbnN0IGU9dC5lbDtpZighZSlyZXR1cm47Y29uc3QgaT10LnNwaW5uZXJFbDt0aGlzLmlzQ2xvc2luZygpP251bGw9PWl8fGkucmVtb3ZlKCk6KEUoZSxEdCksaSYmdGhpcy5hbmltYXRlKGksXCJmLWZhZGVPdXRcIiwoKCk9PntpLnJlbW92ZSgpfSkpLHQuc3RhdGU9PT1pdC5Mb2FkaW5nJiYodGhpcy5lbWl0KFwibG9hZGVkXCIsdCksdC5zdGF0ZT1pdC5SZWFkeSkpfXNldEVycm9yKHQsZSl7aWYodGhpcy5pc0Nsb3NpbmcoKSlyZXR1cm47Y29uc3QgaT1uZXcgRXZlbnQoXCJlcnJvclwiLHtidWJibGVzOiEwLGNhbmNlbGFibGU6ITB9KTtpZih0aGlzLmVtaXQoXCJlcnJvclwiLGksdCksaS5kZWZhdWx0UHJldmVudGVkKXJldHVybjt0LmVycm9yPWUsdGhpcy5oaWRlTG9hZGluZyh0KSx0aGlzLmNsZWFyQ29udGVudCh0KTtjb25zdCBuPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7bi5jbGFzc0xpc3QuYWRkKFwiZmFuY3lib3gtZXJyb3JcIiksbi5pbm5lckhUTUw9dGhpcy5sb2NhbGl6ZShlfHxcIjxwPnt7RVJST1J9fTwvcD5cIiksdGhpcy5zZXRDb250ZW50KHQsbil9Y2xlYXJDb250ZW50KHQpe3ZhciBlO251bGw9PT0oZT10aGlzLmNhcm91c2VsKXx8dm9pZCAwPT09ZXx8ZS5lbWl0KFwicmVtb3ZlU2xpZGVcIix0KX1nZXRTbGlkZSgpe3ZhciB0O2NvbnN0IGU9dGhpcy5jYXJvdXNlbDtyZXR1cm4obnVsbD09PSh0PW51bGw9PWU/dm9pZCAwOmUucGFnZXNbbnVsbD09ZT92b2lkIDA6ZS5wYWdlXSl8fHZvaWQgMD09PXQ/dm9pZCAwOnQuc2xpZGVzWzBdKXx8dm9pZCAwfWNsb3NlKHQsZSl7aWYodGhpcy5pc0Nsb3NpbmcoKSlyZXR1cm47Y29uc3QgaT1uZXcgRXZlbnQoXCJzaG91bGRDbG9zZVwiLHtidWJibGVzOiEwLGNhbmNlbGFibGU6ITB9KTtpZih0aGlzLmVtaXQoXCJzaG91bGRDbG9zZVwiLGksdCksaS5kZWZhdWx0UHJldmVudGVkKXJldHVybjt0JiZ0LmNhbmNlbGFibGUmJih0LnByZXZlbnREZWZhdWx0KCksdC5zdG9wUHJvcGFnYXRpb24oKSk7Y29uc3Qgbj10aGlzLmZzQVBJLHM9KCk9Pnt0aGlzLnByb2NlZWRDbG9zZSh0LGUpfTtuJiZuLmlzRnVsbHNjcmVlbigpP1Byb21pc2UucmVzb2x2ZShuLmV4aXQoKSkudGhlbigoKCk9PnMoKSkpOnMoKX1jbGVhcklkbGUoKXt0aGlzLmlkbGVUaW1lciYmY2xlYXJUaW1lb3V0KHRoaXMuaWRsZVRpbWVyKSx0aGlzLmlkbGVUaW1lcj1udWxsfXNldElkbGUodD0hMSl7Y29uc3QgZT0oKT0+e3RoaXMuY2xlYXJJZGxlKCksdGhpcy5pZGxlPSEwLFModGhpcy5jb250YWluZXIsXCJpcy1pZGxlXCIpLHRoaXMuZW1pdChcInNldElkbGVcIil9O2lmKHRoaXMuY2xlYXJJZGxlKCksIXRoaXMuaXNDbG9zaW5nKCkpaWYodCllKCk7ZWxzZXtjb25zdCB0PXRoaXMub3B0aW9uKFwiaWRsZVwiKTt0JiYodGhpcy5pZGxlVGltZXI9c2V0VGltZW91dChlLHQpKX19ZW5kSWRsZSgpe3RoaXMuY2xlYXJJZGxlKCksdGhpcy5pZGxlJiYhdGhpcy5pc0Nsb3NpbmcoKSYmKHRoaXMuaWRsZT0hMSxFKHRoaXMuY29udGFpbmVyLFwiaXMtaWRsZVwiKSx0aGlzLmVtaXQoXCJlbmRJZGxlXCIpKX1yZXNldElkbGUoKXt0aGlzLmVuZElkbGUoKSx0aGlzLnNldElkbGUoKX10b2dnbGVJZGxlKCl7dGhpcy5pZGxlP3RoaXMuZW5kSWRsZSgpOnRoaXMuc2V0SWRsZSghMCl9dG9nZ2xlRnVsbHNjcmVlbigpe2NvbnN0IHQ9dGhpcy5mc0FQSTt0JiYodC5pc0Z1bGxzY3JlZW4oKT90LmV4aXQoKTp0aGlzLmNvbnRhaW5lciYmdC5yZXF1ZXN0KHRoaXMuY29udGFpbmVyKSl9aXNDbG9zaW5nKCl7cmV0dXJuW2V0LkNsb3NpbmcsZXQuQ3VzdG9tQ2xvc2luZyxldC5EZXN0cm95XS5pbmNsdWRlcyh0aGlzLnN0YXRlKX1wcm9jZWVkQ2xvc2UodCxlKXt2YXIgaSxuO3RoaXMuc3RhdGU9ZXQuQ2xvc2luZyx0aGlzLmNsZWFySWRsZSgpLHRoaXMuZGV0YWNoRXZlbnRzKCk7Y29uc3Qgcz10aGlzLmNvbnRhaW5lcixvPXRoaXMuY2Fyb3VzZWwsYT10aGlzLmdldFNsaWRlKCkscj1hJiZ0aGlzLm9wdGlvbihcInBsYWNlRm9jdXNCYWNrXCIpP2EudHJpZ2dlckVsfHx0aGlzLm9wdGlvbihcInRyaWdnZXJFbFwiKTpudWxsO2lmKHImJihVKHIpP1Eocik6ci5mb2N1cygpKSxzJiYoUyhzLFwiaXMtY2xvc2luZ1wiKSxzLnNldEF0dHJpYnV0ZShcImFyaWEtaGlkZGVuXCIsXCJ0cnVlXCIpLHRoaXMub3B0aW9uKFwiYW5pbWF0ZWRcIikmJlMocyxrdCkscy5zdHlsZS5wb2ludGVyRXZlbnRzPVwibm9uZVwiKSxvKXtvLmNsZWFyVHJhbnNpdGlvbnMoKSxudWxsPT09KGk9by5wYW56b29tKXx8dm9pZCAwPT09aXx8aS5kZXN0cm95KCksbnVsbD09PShuPW8ucGx1Z2lucy5OYXZpZ2F0aW9uKXx8dm9pZCAwPT09bnx8bi5kZXRhY2goKTtmb3IoY29uc3QgdCBvZiBvLnNsaWRlcyl7dC5zdGF0ZT1pdC5DbG9zaW5nLHRoaXMuaGlkZUxvYWRpbmcodCk7Y29uc3QgZT10LmNvbnRlbnRFbDtlJiZ0aGlzLnN0b3AoZSk7Y29uc3QgaT1udWxsPT10P3ZvaWQgMDp0LnBhbnpvb207aSYmKGkuc3RvcCgpLGkuZGV0YWNoRXZlbnRzKCksaS5kZXRhY2hPYnNlcnZlcigpKSx0aGlzLmlzQ3VycmVudFNsaWRlKHQpfHxvLmVtaXQoXCJyZW1vdmVTbGlkZVwiLHQpfX10aGlzLmVtaXQoXCJjbG9zZVwiLHQpLHRoaXMuc3RhdGUhPT1ldC5DdXN0b21DbG9zaW5nPyh2b2lkIDA9PT1lJiZhJiYoZT10aGlzLm9wdGlvbkZvcihhLFwiaGlkZUNsYXNzXCIpKSxlJiZhPyh0aGlzLmFuaW1hdGUoYS5jb250ZW50RWwsZSwoKCk9PntvJiZvLmVtaXQoXCJyZW1vdmVTbGlkZVwiLGEpfSkpLHNldFRpbWVvdXQoKCgpPT57dGhpcy5kZXN0cm95KCl9KSw1MDApKTp0aGlzLmRlc3Ryb3koKSk6c2V0VGltZW91dCgoKCk9Pnt0aGlzLmRlc3Ryb3koKX0pLDUwMCl9ZGVzdHJveSgpe3ZhciB0O2lmKHRoaXMuc3RhdGU9PT1ldC5EZXN0cm95KXJldHVybjt0aGlzLnN0YXRlPWV0LkRlc3Ryb3ksbnVsbD09PSh0PXRoaXMuY2Fyb3VzZWwpfHx2b2lkIDA9PT10fHx0LmRlc3Ryb3koKTtjb25zdCBlPXRoaXMuY29udGFpbmVyO2UmJmUucmVtb3ZlKCksQnQuZGVsZXRlKHRoaXMuaWQpO2NvbnN0IGk9X3QuZ2V0SW5zdGFuY2UoKTtpP2kuZm9jdXMoKTooanQmJihqdC5yZW1vdmUoKSxqdD1udWxsKSxIdCYmKEh0LnJlbW92ZSgpLEh0PW51bGwpLEUoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LEF0KSwoKCk9PntpZighRylyZXR1cm47Y29uc3QgdD1kb2N1bWVudCxlPXQuYm9keTtlLmNsYXNzTGlzdC5yZW1vdmUoenQpLGUuc3R5bGUuc2V0UHJvcGVydHkoUnQsXCJcIiksdC5kb2N1bWVudEVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoTHQsXCJcIil9KSgpLHRoaXMuZW1pdChcImRlc3Ryb3lcIikpfXN0YXRpYyBiaW5kKHQsZSxpKXtpZighRylyZXR1cm47bGV0IG4scz1cIlwiLG89e307aWYodm9pZCAwPT09dD9uPWRvY3VtZW50LmJvZHk6XCJzdHJpbmdcIj09dHlwZW9mIHQ/KG49ZG9jdW1lbnQuYm9keSxzPXQsXCJvYmplY3RcIj09dHlwZW9mIGUmJihvPWV8fHt9KSk6KG49dCxcInN0cmluZ1wiPT10eXBlb2YgZSYmKHM9ZSksXCJvYmplY3RcIj09dHlwZW9mIGkmJihvPWl8fHt9KSksIW58fCF4KG4pKXJldHVybjtzPXN8fFwiW2RhdGEtZmFuY3lib3hdXCI7Y29uc3QgYT1fdC5vcGVuZXJzLmdldChuKXx8bmV3IE1hcDthLnNldChzLG8pLF90Lm9wZW5lcnMuc2V0KG4sYSksMT09PWEuc2l6ZSYmbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIixfdC5mcm9tRXZlbnQpfXN0YXRpYyB1bmJpbmQodCxlKXtsZXQgaSxuPVwiXCI7aWYoXCJzdHJpbmdcIj09dHlwZW9mIHQ/KGk9ZG9jdW1lbnQuYm9keSxuPXQpOihpPXQsXCJzdHJpbmdcIj09dHlwZW9mIGUmJihuPWUpKSwhaSlyZXR1cm47Y29uc3Qgcz1fdC5vcGVuZXJzLmdldChpKTtzJiZuJiZzLmRlbGV0ZShuKSxuJiZzfHwoX3Qub3BlbmVycy5kZWxldGUoaSksaS5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIixfdC5mcm9tRXZlbnQpKX1zdGF0aWMgZGVzdHJveSgpe2xldCB0O2Zvcig7dD1fdC5nZXRJbnN0YW5jZSgpOyl0LmRlc3Ryb3koKTtmb3IoY29uc3QgdCBvZiBfdC5vcGVuZXJzLmtleXMoKSl0LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLF90LmZyb21FdmVudCk7X3Qub3BlbmVycz1uZXcgTWFwfXN0YXRpYyBmcm9tRXZlbnQodCl7aWYodC5kZWZhdWx0UHJldmVudGVkKXJldHVybjtpZih0LmJ1dHRvbiYmMCE9PXQuYnV0dG9uKXJldHVybjtpZih0LmN0cmxLZXl8fHQubWV0YUtleXx8dC5zaGlmdEtleSlyZXR1cm47bGV0IGU9dC5jb21wb3NlZFBhdGgoKVswXTtjb25zdCBpPWUuY2xvc2VzdChcIltkYXRhLWZhbmN5Ym94LXRyaWdnZXJdXCIpO2lmKGkpe2NvbnN0IHQ9aS5kYXRhc2V0LmZhbmN5Ym94VHJpZ2dlcnx8XCJcIixuPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYFtkYXRhLWZhbmN5Ym94PVwiJHt0fVwiXWApLHM9cGFyc2VJbnQoaS5kYXRhc2V0LmZhbmN5Ym94SW5kZXh8fFwiXCIsMTApfHwwO2U9bltzXXx8ZX1pZighKGUmJmUgaW5zdGFuY2VvZiBFbGVtZW50KSlyZXR1cm47bGV0IG4scyxvLGE7aWYoWy4uLl90Lm9wZW5lcnNdLnJldmVyc2UoKS5maW5kKCgoW3QsaV0pPT4hKCF0LmNvbnRhaW5zKGUpfHwhWy4uLmldLnJldmVyc2UoKS5maW5kKCgoW2kscl0pPT57bGV0IGw9ZS5jbG9zZXN0KGkpO3JldHVybiEhbCYmKG49dCxzPWksbz1sLGE9ciwhMCl9KSkpKSksIW58fCFzfHwhbylyZXR1cm47YT1hfHx7fSx0LnByZXZlbnREZWZhdWx0KCksZT1vO2xldCByPVtdLGw9dSh7fSx0dCxhKTtsLmV2ZW50PXQsbC50cmlnZ2VyRWw9ZSxsLmRlbGVnYXRlPWk7Y29uc3QgYz1sLmdyb3VwQWxsLGg9bC5ncm91cEF0dHIsZD1oJiZlP2UuZ2V0QXR0cmlidXRlKGAke2h9YCk6XCJcIjtpZigoIWV8fGR8fGMpJiYocj1bXS5zbGljZS5jYWxsKG4ucXVlcnlTZWxlY3RvckFsbChzKSkpLGUmJiFjJiYocj1kP3IuZmlsdGVyKCh0PT50LmdldEF0dHJpYnV0ZShgJHtofWApPT09ZCkpOltlXSksIXIubGVuZ3RoKXJldHVybjtjb25zdCBwPV90LmdldEluc3RhbmNlKCk7cmV0dXJuIHAmJnAub3B0aW9ucy50cmlnZ2VyRWwmJnIuaW5kZXhPZihwLm9wdGlvbnMudHJpZ2dlckVsKT4tMT92b2lkIDA6KGUmJihsLnN0YXJ0SW5kZXg9ci5pbmRleE9mKGUpKSxfdC5mcm9tTm9kZXMocixsKSl9c3RhdGljIGZyb21TZWxlY3Rvcih0LGUpe2xldCBpPW51bGwsbj1cIlwiO2lmKFwic3RyaW5nXCI9PXR5cGVvZiB0PyhpPWRvY3VtZW50LmJvZHksbj10KTp0IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQmJlwic3RyaW5nXCI9PXR5cGVvZiBlJiYoaT10LG49ZSksIWl8fCFuKXJldHVybiExO2NvbnN0IHM9X3Qub3BlbmVycy5nZXQoaSk7aWYoIXMpcmV0dXJuITE7Y29uc3Qgbz1zLmdldChuKTtyZXR1cm4hIW8mJl90LmZyb21Ob2RlcyhBcnJheS5mcm9tKGkucXVlcnlTZWxlY3RvckFsbChuKSksbyl9c3RhdGljIGZyb21Ob2Rlcyh0LGUpe2U9dSh7fSx0dCxlfHx7fSk7Y29uc3QgaT1bXTtmb3IoY29uc3QgbiBvZiB0KXtjb25zdCB0PW4uZGF0YXNldHx8e30scz10LnNyY3x8bi5nZXRBdHRyaWJ1dGUoXCJocmVmXCIpfHxuLmdldEF0dHJpYnV0ZShcImN1cnJlbnRTcmNcIil8fG4uZ2V0QXR0cmlidXRlKFwic3JjXCIpfHx2b2lkIDA7bGV0IG87Y29uc3QgYT1lLmRlbGVnYXRlO2xldCByO2EmJmkubGVuZ3RoPT09ZS5zdGFydEluZGV4JiYobz1hIGluc3RhbmNlb2YgSFRNTEltYWdlRWxlbWVudD9hOmEucXVlcnlTZWxlY3RvcihcImltZzpub3QoW2FyaWEtaGlkZGVuXSlcIikpLG98fChvPW4gaW5zdGFuY2VvZiBIVE1MSW1hZ2VFbGVtZW50P246bi5xdWVyeVNlbGVjdG9yKFwiaW1nOm5vdChbYXJpYS1oaWRkZW5dKVwiKSksbyYmKHI9by5jdXJyZW50U3JjfHxvLnNyY3x8dm9pZCAwLCFyJiZvLmRhdGFzZXQmJihyPW8uZGF0YXNldC5sYXp5U3JjfHxvLmRhdGFzZXQuc3JjfHx2b2lkIDApKTtjb25zdCBsPXtzcmM6cyx0cmlnZ2VyRWw6bix0aHVtYkVsOm8sdGh1bWJFbFNyYzpyLHRodW1iU3JjOnJ9O2Zvcihjb25zdCBlIGluIHQpbFtlXT10W2VdK1wiXCI7aS5wdXNoKGwpfXJldHVybiBuZXcgX3QoaSxlKX1zdGF0aWMgZ2V0SW5zdGFuY2UodCl7aWYodClyZXR1cm4gQnQuZ2V0KHQpO3JldHVybiBBcnJheS5mcm9tKEJ0LnZhbHVlcygpKS5yZXZlcnNlKCkuZmluZCgodD0+IXQuaXNDbG9zaW5nKCkmJnQpKXx8bnVsbH1zdGF0aWMgZ2V0U2xpZGUoKXt2YXIgdDtyZXR1cm4obnVsbD09PSh0PV90LmdldEluc3RhbmNlKCkpfHx2b2lkIDA9PT10P3ZvaWQgMDp0LmdldFNsaWRlKCkpfHxudWxsfXN0YXRpYyBzaG93KHQ9W10sZT17fSl7cmV0dXJuIG5ldyBfdCh0LGUpfXN0YXRpYyBuZXh0KCl7Y29uc3QgdD1fdC5nZXRJbnN0YW5jZSgpO3QmJnQubmV4dCgpfXN0YXRpYyBwcmV2KCl7Y29uc3QgdD1fdC5nZXRJbnN0YW5jZSgpO3QmJnQucHJldigpfXN0YXRpYyBjbG9zZSh0PSEwLC4uLmUpe2lmKHQpZm9yKGNvbnN0IHQgb2YgQnQudmFsdWVzKCkpdC5jbG9zZSguLi5lKTtlbHNle2NvbnN0IHQ9X3QuZ2V0SW5zdGFuY2UoKTt0JiZ0LmNsb3NlKC4uLmUpfX19T2JqZWN0LmRlZmluZVByb3BlcnR5KF90LFwidmVyc2lvblwiLHtlbnVtZXJhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMCx3cml0YWJsZTohMCx2YWx1ZTpcIjUuMC4yMlwifSksT2JqZWN0LmRlZmluZVByb3BlcnR5KF90LFwiZGVmYXVsdHNcIix7ZW51bWVyYWJsZTohMCxjb25maWd1cmFibGU6ITAsd3JpdGFibGU6ITAsdmFsdWU6dHR9KSxPYmplY3QuZGVmaW5lUHJvcGVydHkoX3QsXCJQbHVnaW5zXCIse2VudW1lcmFibGU6ITAsY29uZmlndXJhYmxlOiEwLHdyaXRhYmxlOiEwLHZhbHVlOk90fSksT2JqZWN0LmRlZmluZVByb3BlcnR5KF90LFwib3BlbmVyc1wiLHtlbnVtZXJhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMCx3cml0YWJsZTohMCx2YWx1ZTpuZXcgTWFwfSk7ZXhwb3J0e1ogYXMgQ2Fyb3VzZWwsX3QgYXMgRmFuY3lib3gsUiBhcyBQYW56b29tfTtcbiIsIi8vIEN1cnJlbnRseSBpbiBzeW5jIHdpdGggTm9kZS5qcyBsaWIvYXNzZXJ0LmpzXG4vLyBodHRwczovL2dpdGh1Yi5jb20vbm9kZWpzL25vZGUvY29tbWl0LzJhNTFhZTQyNGE1MTNlYzlhNmFhMzQ2NmJhYTBjYzFkNTVkZDRmM2Jcbi8vIE9yaWdpbmFsbHkgZnJvbSBuYXJ3aGFsLmpzIChodHRwOi8vbmFyd2hhbGpzLm9yZylcbi8vIENvcHlyaWdodCAoYykgMjAwOSBUaG9tYXMgUm9iaW5zb24gPDI4MG5vcnRoLmNvbT5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4vLyBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSAnU29mdHdhcmUnKSwgdG9cbi8vIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlXG4vLyByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Jcbi8vIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4vLyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4vLyBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgJ0FTIElTJywgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuLy8gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4vLyBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbi8vIEFVVEhPUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOXG4vLyBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OXG4vLyBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cbid1c2Ugc3RyaWN0JztcblxuZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfTsgfSBlbHNlIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9OyB9IHJldHVybiBfdHlwZW9mKG9iaik7IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxudmFyIF9yZXF1aXJlID0gcmVxdWlyZSgnLi9pbnRlcm5hbC9lcnJvcnMnKSxcbiAgICBfcmVxdWlyZSRjb2RlcyA9IF9yZXF1aXJlLmNvZGVzLFxuICAgIEVSUl9BTUJJR1VPVVNfQVJHVU1FTlQgPSBfcmVxdWlyZSRjb2Rlcy5FUlJfQU1CSUdVT1VTX0FSR1VNRU5ULFxuICAgIEVSUl9JTlZBTElEX0FSR19UWVBFID0gX3JlcXVpcmUkY29kZXMuRVJSX0lOVkFMSURfQVJHX1RZUEUsXG4gICAgRVJSX0lOVkFMSURfQVJHX1ZBTFVFID0gX3JlcXVpcmUkY29kZXMuRVJSX0lOVkFMSURfQVJHX1ZBTFVFLFxuICAgIEVSUl9JTlZBTElEX1JFVFVSTl9WQUxVRSA9IF9yZXF1aXJlJGNvZGVzLkVSUl9JTlZBTElEX1JFVFVSTl9WQUxVRSxcbiAgICBFUlJfTUlTU0lOR19BUkdTID0gX3JlcXVpcmUkY29kZXMuRVJSX01JU1NJTkdfQVJHUztcblxudmFyIEFzc2VydGlvbkVycm9yID0gcmVxdWlyZSgnLi9pbnRlcm5hbC9hc3NlcnQvYXNzZXJ0aW9uX2Vycm9yJyk7XG5cbnZhciBfcmVxdWlyZTIgPSByZXF1aXJlKCd1dGlsLycpLFxuICAgIGluc3BlY3QgPSBfcmVxdWlyZTIuaW5zcGVjdDtcblxudmFyIF9yZXF1aXJlJHR5cGVzID0gcmVxdWlyZSgndXRpbC8nKS50eXBlcyxcbiAgICBpc1Byb21pc2UgPSBfcmVxdWlyZSR0eXBlcy5pc1Byb21pc2UsXG4gICAgaXNSZWdFeHAgPSBfcmVxdWlyZSR0eXBlcy5pc1JlZ0V4cDtcblxudmFyIG9iamVjdEFzc2lnbiA9IE9iamVjdC5hc3NpZ24gPyBPYmplY3QuYXNzaWduIDogcmVxdWlyZSgnZXM2LW9iamVjdC1hc3NpZ24nKS5hc3NpZ247XG52YXIgb2JqZWN0SXMgPSBPYmplY3QuaXMgPyBPYmplY3QuaXMgOiByZXF1aXJlKCdvYmplY3QtaXMnKTtcbnZhciBlcnJvckNhY2hlID0gbmV3IE1hcCgpO1xudmFyIGlzRGVlcEVxdWFsO1xudmFyIGlzRGVlcFN0cmljdEVxdWFsO1xudmFyIHBhcnNlRXhwcmVzc2lvbkF0O1xudmFyIGZpbmROb2RlQXJvdW5kO1xudmFyIGRlY29kZXI7XG5cbmZ1bmN0aW9uIGxhenlMb2FkQ29tcGFyaXNvbigpIHtcbiAgdmFyIGNvbXBhcmlzb24gPSByZXF1aXJlKCcuL2ludGVybmFsL3V0aWwvY29tcGFyaXNvbnMnKTtcblxuICBpc0RlZXBFcXVhbCA9IGNvbXBhcmlzb24uaXNEZWVwRXF1YWw7XG4gIGlzRGVlcFN0cmljdEVxdWFsID0gY29tcGFyaXNvbi5pc0RlZXBTdHJpY3RFcXVhbDtcbn0gLy8gRXNjYXBlIGNvbnRyb2wgY2hhcmFjdGVycyBidXQgbm90IFxcbiBhbmQgXFx0IHRvIGtlZXAgdGhlIGxpbmUgYnJlYWtzIGFuZFxuLy8gaW5kZW50YXRpb24gaW50YWN0LlxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRyb2wtcmVnZXhcblxuXG52YXIgZXNjYXBlU2VxdWVuY2VzUmVnRXhwID0gL1tcXHgwMC1cXHgwOFxceDBiXFx4MGNcXHgwZS1cXHgxZl0vZztcbnZhciBtZXRhID0gW1wiXFxcXHUwMDAwXCIsIFwiXFxcXHUwMDAxXCIsIFwiXFxcXHUwMDAyXCIsIFwiXFxcXHUwMDAzXCIsIFwiXFxcXHUwMDA0XCIsIFwiXFxcXHUwMDA1XCIsIFwiXFxcXHUwMDA2XCIsIFwiXFxcXHUwMDA3XCIsICdcXFxcYicsICcnLCAnJywgXCJcXFxcdTAwMGJcIiwgJ1xcXFxmJywgJycsIFwiXFxcXHUwMDBlXCIsIFwiXFxcXHUwMDBmXCIsIFwiXFxcXHUwMDEwXCIsIFwiXFxcXHUwMDExXCIsIFwiXFxcXHUwMDEyXCIsIFwiXFxcXHUwMDEzXCIsIFwiXFxcXHUwMDE0XCIsIFwiXFxcXHUwMDE1XCIsIFwiXFxcXHUwMDE2XCIsIFwiXFxcXHUwMDE3XCIsIFwiXFxcXHUwMDE4XCIsIFwiXFxcXHUwMDE5XCIsIFwiXFxcXHUwMDFhXCIsIFwiXFxcXHUwMDFiXCIsIFwiXFxcXHUwMDFjXCIsIFwiXFxcXHUwMDFkXCIsIFwiXFxcXHUwMDFlXCIsIFwiXFxcXHUwMDFmXCJdO1xuXG52YXIgZXNjYXBlRm4gPSBmdW5jdGlvbiBlc2NhcGVGbihzdHIpIHtcbiAgcmV0dXJuIG1ldGFbc3RyLmNoYXJDb2RlQXQoMCldO1xufTtcblxudmFyIHdhcm5lZCA9IGZhbHNlOyAvLyBUaGUgYXNzZXJ0IG1vZHVsZSBwcm92aWRlcyBmdW5jdGlvbnMgdGhhdCB0aHJvd1xuLy8gQXNzZXJ0aW9uRXJyb3IncyB3aGVuIHBhcnRpY3VsYXIgY29uZGl0aW9ucyBhcmUgbm90IG1ldC4gVGhlXG4vLyBhc3NlcnQgbW9kdWxlIG11c3QgY29uZm9ybSB0byB0aGUgZm9sbG93aW5nIGludGVyZmFjZS5cblxudmFyIGFzc2VydCA9IG1vZHVsZS5leHBvcnRzID0gb2s7XG52YXIgTk9fRVhDRVBUSU9OX1NFTlRJTkVMID0ge307IC8vIEFsbCBvZiB0aGUgZm9sbG93aW5nIGZ1bmN0aW9ucyBtdXN0IHRocm93IGFuIEFzc2VydGlvbkVycm9yXG4vLyB3aGVuIGEgY29ycmVzcG9uZGluZyBjb25kaXRpb24gaXMgbm90IG1ldCwgd2l0aCBhIG1lc3NhZ2UgdGhhdFxuLy8gbWF5IGJlIHVuZGVmaW5lZCBpZiBub3QgcHJvdmlkZWQuIEFsbCBhc3NlcnRpb24gbWV0aG9kcyBwcm92aWRlXG4vLyBib3RoIHRoZSBhY3R1YWwgYW5kIGV4cGVjdGVkIHZhbHVlcyB0byB0aGUgYXNzZXJ0aW9uIGVycm9yIGZvclxuLy8gZGlzcGxheSBwdXJwb3Nlcy5cblxuZnVuY3Rpb24gaW5uZXJGYWlsKG9iaikge1xuICBpZiAob2JqLm1lc3NhZ2UgaW5zdGFuY2VvZiBFcnJvcikgdGhyb3cgb2JqLm1lc3NhZ2U7XG4gIHRocm93IG5ldyBBc3NlcnRpb25FcnJvcihvYmopO1xufVxuXG5mdW5jdGlvbiBmYWlsKGFjdHVhbCwgZXhwZWN0ZWQsIG1lc3NhZ2UsIG9wZXJhdG9yLCBzdGFja1N0YXJ0Rm4pIHtcbiAgdmFyIGFyZ3NMZW4gPSBhcmd1bWVudHMubGVuZ3RoO1xuICB2YXIgaW50ZXJuYWxNZXNzYWdlO1xuXG4gIGlmIChhcmdzTGVuID09PSAwKSB7XG4gICAgaW50ZXJuYWxNZXNzYWdlID0gJ0ZhaWxlZCc7XG4gIH0gZWxzZSBpZiAoYXJnc0xlbiA9PT0gMSkge1xuICAgIG1lc3NhZ2UgPSBhY3R1YWw7XG4gICAgYWN0dWFsID0gdW5kZWZpbmVkO1xuICB9IGVsc2Uge1xuICAgIGlmICh3YXJuZWQgPT09IGZhbHNlKSB7XG4gICAgICB3YXJuZWQgPSB0cnVlO1xuICAgICAgdmFyIHdhcm4gPSBwcm9jZXNzLmVtaXRXYXJuaW5nID8gcHJvY2Vzcy5lbWl0V2FybmluZyA6IGNvbnNvbGUud2Fybi5iaW5kKGNvbnNvbGUpO1xuICAgICAgd2FybignYXNzZXJ0LmZhaWwoKSB3aXRoIG1vcmUgdGhhbiBvbmUgYXJndW1lbnQgaXMgZGVwcmVjYXRlZC4gJyArICdQbGVhc2UgdXNlIGFzc2VydC5zdHJpY3RFcXVhbCgpIGluc3RlYWQgb3Igb25seSBwYXNzIGEgbWVzc2FnZS4nLCAnRGVwcmVjYXRpb25XYXJuaW5nJywgJ0RFUDAwOTQnKTtcbiAgICB9XG5cbiAgICBpZiAoYXJnc0xlbiA9PT0gMikgb3BlcmF0b3IgPSAnIT0nO1xuICB9XG5cbiAgaWYgKG1lc3NhZ2UgaW5zdGFuY2VvZiBFcnJvcikgdGhyb3cgbWVzc2FnZTtcbiAgdmFyIGVyckFyZ3MgPSB7XG4gICAgYWN0dWFsOiBhY3R1YWwsXG4gICAgZXhwZWN0ZWQ6IGV4cGVjdGVkLFxuICAgIG9wZXJhdG9yOiBvcGVyYXRvciA9PT0gdW5kZWZpbmVkID8gJ2ZhaWwnIDogb3BlcmF0b3IsXG4gICAgc3RhY2tTdGFydEZuOiBzdGFja1N0YXJ0Rm4gfHwgZmFpbFxuICB9O1xuXG4gIGlmIChtZXNzYWdlICE9PSB1bmRlZmluZWQpIHtcbiAgICBlcnJBcmdzLm1lc3NhZ2UgPSBtZXNzYWdlO1xuICB9XG5cbiAgdmFyIGVyciA9IG5ldyBBc3NlcnRpb25FcnJvcihlcnJBcmdzKTtcblxuICBpZiAoaW50ZXJuYWxNZXNzYWdlKSB7XG4gICAgZXJyLm1lc3NhZ2UgPSBpbnRlcm5hbE1lc3NhZ2U7XG4gICAgZXJyLmdlbmVyYXRlZE1lc3NhZ2UgPSB0cnVlO1xuICB9XG5cbiAgdGhyb3cgZXJyO1xufVxuXG5hc3NlcnQuZmFpbCA9IGZhaWw7IC8vIFRoZSBBc3NlcnRpb25FcnJvciBpcyBkZWZpbmVkIGluIGludGVybmFsL2Vycm9yLlxuXG5hc3NlcnQuQXNzZXJ0aW9uRXJyb3IgPSBBc3NlcnRpb25FcnJvcjtcblxuZnVuY3Rpb24gaW5uZXJPayhmbiwgYXJnTGVuLCB2YWx1ZSwgbWVzc2FnZSkge1xuICBpZiAoIXZhbHVlKSB7XG4gICAgdmFyIGdlbmVyYXRlZE1lc3NhZ2UgPSBmYWxzZTtcblxuICAgIGlmIChhcmdMZW4gPT09IDApIHtcbiAgICAgIGdlbmVyYXRlZE1lc3NhZ2UgPSB0cnVlO1xuICAgICAgbWVzc2FnZSA9ICdObyB2YWx1ZSBhcmd1bWVudCBwYXNzZWQgdG8gYGFzc2VydC5vaygpYCc7XG4gICAgfSBlbHNlIGlmIChtZXNzYWdlIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgIHRocm93IG1lc3NhZ2U7XG4gICAgfVxuXG4gICAgdmFyIGVyciA9IG5ldyBBc3NlcnRpb25FcnJvcih7XG4gICAgICBhY3R1YWw6IHZhbHVlLFxuICAgICAgZXhwZWN0ZWQ6IHRydWUsXG4gICAgICBtZXNzYWdlOiBtZXNzYWdlLFxuICAgICAgb3BlcmF0b3I6ICc9PScsXG4gICAgICBzdGFja1N0YXJ0Rm46IGZuXG4gICAgfSk7XG4gICAgZXJyLmdlbmVyYXRlZE1lc3NhZ2UgPSBnZW5lcmF0ZWRNZXNzYWdlO1xuICAgIHRocm93IGVycjtcbiAgfVxufSAvLyBQdXJlIGFzc2VydGlvbiB0ZXN0cyB3aGV0aGVyIGEgdmFsdWUgaXMgdHJ1dGh5LCBhcyBkZXRlcm1pbmVkXG4vLyBieSAhIXZhbHVlLlxuXG5cbmZ1bmN0aW9uIG9rKCkge1xuICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICB9XG5cbiAgaW5uZXJPay5hcHBseSh2b2lkIDAsIFtvaywgYXJncy5sZW5ndGhdLmNvbmNhdChhcmdzKSk7XG59XG5cbmFzc2VydC5vayA9IG9rOyAvLyBUaGUgZXF1YWxpdHkgYXNzZXJ0aW9uIHRlc3RzIHNoYWxsb3csIGNvZXJjaXZlIGVxdWFsaXR5IHdpdGggPT0uXG5cbi8qIGVzbGludC1kaXNhYmxlIG5vLXJlc3RyaWN0ZWQtcHJvcGVydGllcyAqL1xuXG5hc3NlcnQuZXF1YWwgPSBmdW5jdGlvbiBlcXVhbChhY3R1YWwsIGV4cGVjdGVkLCBtZXNzYWdlKSB7XG4gIGlmIChhcmd1bWVudHMubGVuZ3RoIDwgMikge1xuICAgIHRocm93IG5ldyBFUlJfTUlTU0lOR19BUkdTKCdhY3R1YWwnLCAnZXhwZWN0ZWQnKTtcbiAgfSAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXFlcWVxXG5cblxuICBpZiAoYWN0dWFsICE9IGV4cGVjdGVkKSB7XG4gICAgaW5uZXJGYWlsKHtcbiAgICAgIGFjdHVhbDogYWN0dWFsLFxuICAgICAgZXhwZWN0ZWQ6IGV4cGVjdGVkLFxuICAgICAgbWVzc2FnZTogbWVzc2FnZSxcbiAgICAgIG9wZXJhdG9yOiAnPT0nLFxuICAgICAgc3RhY2tTdGFydEZuOiBlcXVhbFxuICAgIH0pO1xuICB9XG59OyAvLyBUaGUgbm9uLWVxdWFsaXR5IGFzc2VydGlvbiB0ZXN0cyBmb3Igd2hldGhlciB0d28gb2JqZWN0cyBhcmUgbm90XG4vLyBlcXVhbCB3aXRoICE9LlxuXG5cbmFzc2VydC5ub3RFcXVhbCA9IGZ1bmN0aW9uIG5vdEVxdWFsKGFjdHVhbCwgZXhwZWN0ZWQsIG1lc3NhZ2UpIHtcbiAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPCAyKSB7XG4gICAgdGhyb3cgbmV3IEVSUl9NSVNTSU5HX0FSR1MoJ2FjdHVhbCcsICdleHBlY3RlZCcpO1xuICB9IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcWVxZXFcblxuXG4gIGlmIChhY3R1YWwgPT0gZXhwZWN0ZWQpIHtcbiAgICBpbm5lckZhaWwoe1xuICAgICAgYWN0dWFsOiBhY3R1YWwsXG4gICAgICBleHBlY3RlZDogZXhwZWN0ZWQsXG4gICAgICBtZXNzYWdlOiBtZXNzYWdlLFxuICAgICAgb3BlcmF0b3I6ICchPScsXG4gICAgICBzdGFja1N0YXJ0Rm46IG5vdEVxdWFsXG4gICAgfSk7XG4gIH1cbn07IC8vIFRoZSBlcXVpdmFsZW5jZSBhc3NlcnRpb24gdGVzdHMgYSBkZWVwIGVxdWFsaXR5IHJlbGF0aW9uLlxuXG5cbmFzc2VydC5kZWVwRXF1YWwgPSBmdW5jdGlvbiBkZWVwRXF1YWwoYWN0dWFsLCBleHBlY3RlZCwgbWVzc2FnZSkge1xuICBpZiAoYXJndW1lbnRzLmxlbmd0aCA8IDIpIHtcbiAgICB0aHJvdyBuZXcgRVJSX01JU1NJTkdfQVJHUygnYWN0dWFsJywgJ2V4cGVjdGVkJyk7XG4gIH1cblxuICBpZiAoaXNEZWVwRXF1YWwgPT09IHVuZGVmaW5lZCkgbGF6eUxvYWRDb21wYXJpc29uKCk7XG5cbiAgaWYgKCFpc0RlZXBFcXVhbChhY3R1YWwsIGV4cGVjdGVkKSkge1xuICAgIGlubmVyRmFpbCh7XG4gICAgICBhY3R1YWw6IGFjdHVhbCxcbiAgICAgIGV4cGVjdGVkOiBleHBlY3RlZCxcbiAgICAgIG1lc3NhZ2U6IG1lc3NhZ2UsXG4gICAgICBvcGVyYXRvcjogJ2RlZXBFcXVhbCcsXG4gICAgICBzdGFja1N0YXJ0Rm46IGRlZXBFcXVhbFxuICAgIH0pO1xuICB9XG59OyAvLyBUaGUgbm9uLWVxdWl2YWxlbmNlIGFzc2VydGlvbiB0ZXN0cyBmb3IgYW55IGRlZXAgaW5lcXVhbGl0eS5cblxuXG5hc3NlcnQubm90RGVlcEVxdWFsID0gZnVuY3Rpb24gbm90RGVlcEVxdWFsKGFjdHVhbCwgZXhwZWN0ZWQsIG1lc3NhZ2UpIHtcbiAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPCAyKSB7XG4gICAgdGhyb3cgbmV3IEVSUl9NSVNTSU5HX0FSR1MoJ2FjdHVhbCcsICdleHBlY3RlZCcpO1xuICB9XG5cbiAgaWYgKGlzRGVlcEVxdWFsID09PSB1bmRlZmluZWQpIGxhenlMb2FkQ29tcGFyaXNvbigpO1xuXG4gIGlmIChpc0RlZXBFcXVhbChhY3R1YWwsIGV4cGVjdGVkKSkge1xuICAgIGlubmVyRmFpbCh7XG4gICAgICBhY3R1YWw6IGFjdHVhbCxcbiAgICAgIGV4cGVjdGVkOiBleHBlY3RlZCxcbiAgICAgIG1lc3NhZ2U6IG1lc3NhZ2UsXG4gICAgICBvcGVyYXRvcjogJ25vdERlZXBFcXVhbCcsXG4gICAgICBzdGFja1N0YXJ0Rm46IG5vdERlZXBFcXVhbFxuICAgIH0pO1xuICB9XG59O1xuLyogZXNsaW50LWVuYWJsZSAqL1xuXG5cbmFzc2VydC5kZWVwU3RyaWN0RXF1YWwgPSBmdW5jdGlvbiBkZWVwU3RyaWN0RXF1YWwoYWN0dWFsLCBleHBlY3RlZCwgbWVzc2FnZSkge1xuICBpZiAoYXJndW1lbnRzLmxlbmd0aCA8IDIpIHtcbiAgICB0aHJvdyBuZXcgRVJSX01JU1NJTkdfQVJHUygnYWN0dWFsJywgJ2V4cGVjdGVkJyk7XG4gIH1cblxuICBpZiAoaXNEZWVwRXF1YWwgPT09IHVuZGVmaW5lZCkgbGF6eUxvYWRDb21wYXJpc29uKCk7XG5cbiAgaWYgKCFpc0RlZXBTdHJpY3RFcXVhbChhY3R1YWwsIGV4cGVjdGVkKSkge1xuICAgIGlubmVyRmFpbCh7XG4gICAgICBhY3R1YWw6IGFjdHVhbCxcbiAgICAgIGV4cGVjdGVkOiBleHBlY3RlZCxcbiAgICAgIG1lc3NhZ2U6IG1lc3NhZ2UsXG4gICAgICBvcGVyYXRvcjogJ2RlZXBTdHJpY3RFcXVhbCcsXG4gICAgICBzdGFja1N0YXJ0Rm46IGRlZXBTdHJpY3RFcXVhbFxuICAgIH0pO1xuICB9XG59O1xuXG5hc3NlcnQubm90RGVlcFN0cmljdEVxdWFsID0gbm90RGVlcFN0cmljdEVxdWFsO1xuXG5mdW5jdGlvbiBub3REZWVwU3RyaWN0RXF1YWwoYWN0dWFsLCBleHBlY3RlZCwgbWVzc2FnZSkge1xuICBpZiAoYXJndW1lbnRzLmxlbmd0aCA8IDIpIHtcbiAgICB0aHJvdyBuZXcgRVJSX01JU1NJTkdfQVJHUygnYWN0dWFsJywgJ2V4cGVjdGVkJyk7XG4gIH1cblxuICBpZiAoaXNEZWVwRXF1YWwgPT09IHVuZGVmaW5lZCkgbGF6eUxvYWRDb21wYXJpc29uKCk7XG5cbiAgaWYgKGlzRGVlcFN0cmljdEVxdWFsKGFjdHVhbCwgZXhwZWN0ZWQpKSB7XG4gICAgaW5uZXJGYWlsKHtcbiAgICAgIGFjdHVhbDogYWN0dWFsLFxuICAgICAgZXhwZWN0ZWQ6IGV4cGVjdGVkLFxuICAgICAgbWVzc2FnZTogbWVzc2FnZSxcbiAgICAgIG9wZXJhdG9yOiAnbm90RGVlcFN0cmljdEVxdWFsJyxcbiAgICAgIHN0YWNrU3RhcnRGbjogbm90RGVlcFN0cmljdEVxdWFsXG4gICAgfSk7XG4gIH1cbn1cblxuYXNzZXJ0LnN0cmljdEVxdWFsID0gZnVuY3Rpb24gc3RyaWN0RXF1YWwoYWN0dWFsLCBleHBlY3RlZCwgbWVzc2FnZSkge1xuICBpZiAoYXJndW1lbnRzLmxlbmd0aCA8IDIpIHtcbiAgICB0aHJvdyBuZXcgRVJSX01JU1NJTkdfQVJHUygnYWN0dWFsJywgJ2V4cGVjdGVkJyk7XG4gIH1cblxuICBpZiAoIW9iamVjdElzKGFjdHVhbCwgZXhwZWN0ZWQpKSB7XG4gICAgaW5uZXJGYWlsKHtcbiAgICAgIGFjdHVhbDogYWN0dWFsLFxuICAgICAgZXhwZWN0ZWQ6IGV4cGVjdGVkLFxuICAgICAgbWVzc2FnZTogbWVzc2FnZSxcbiAgICAgIG9wZXJhdG9yOiAnc3RyaWN0RXF1YWwnLFxuICAgICAgc3RhY2tTdGFydEZuOiBzdHJpY3RFcXVhbFxuICAgIH0pO1xuICB9XG59O1xuXG5hc3NlcnQubm90U3RyaWN0RXF1YWwgPSBmdW5jdGlvbiBub3RTdHJpY3RFcXVhbChhY3R1YWwsIGV4cGVjdGVkLCBtZXNzYWdlKSB7XG4gIGlmIChhcmd1bWVudHMubGVuZ3RoIDwgMikge1xuICAgIHRocm93IG5ldyBFUlJfTUlTU0lOR19BUkdTKCdhY3R1YWwnLCAnZXhwZWN0ZWQnKTtcbiAgfVxuXG4gIGlmIChvYmplY3RJcyhhY3R1YWwsIGV4cGVjdGVkKSkge1xuICAgIGlubmVyRmFpbCh7XG4gICAgICBhY3R1YWw6IGFjdHVhbCxcbiAgICAgIGV4cGVjdGVkOiBleHBlY3RlZCxcbiAgICAgIG1lc3NhZ2U6IG1lc3NhZ2UsXG4gICAgICBvcGVyYXRvcjogJ25vdFN0cmljdEVxdWFsJyxcbiAgICAgIHN0YWNrU3RhcnRGbjogbm90U3RyaWN0RXF1YWxcbiAgICB9KTtcbiAgfVxufTtcblxudmFyIENvbXBhcmlzb24gPSBmdW5jdGlvbiBDb21wYXJpc29uKG9iaiwga2V5cywgYWN0dWFsKSB7XG4gIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIENvbXBhcmlzb24pO1xuXG4gIGtleXMuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgaWYgKGtleSBpbiBvYmopIHtcbiAgICAgIGlmIChhY3R1YWwgIT09IHVuZGVmaW5lZCAmJiB0eXBlb2YgYWN0dWFsW2tleV0gPT09ICdzdHJpbmcnICYmIGlzUmVnRXhwKG9ialtrZXldKSAmJiBvYmpba2V5XS50ZXN0KGFjdHVhbFtrZXldKSkge1xuICAgICAgICBfdGhpc1trZXldID0gYWN0dWFsW2tleV07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBfdGhpc1trZXldID0gb2JqW2tleV07XG4gICAgICB9XG4gICAgfVxuICB9KTtcbn07XG5cbmZ1bmN0aW9uIGNvbXBhcmVFeGNlcHRpb25LZXkoYWN0dWFsLCBleHBlY3RlZCwga2V5LCBtZXNzYWdlLCBrZXlzLCBmbikge1xuICBpZiAoIShrZXkgaW4gYWN0dWFsKSB8fCAhaXNEZWVwU3RyaWN0RXF1YWwoYWN0dWFsW2tleV0sIGV4cGVjdGVkW2tleV0pKSB7XG4gICAgaWYgKCFtZXNzYWdlKSB7XG4gICAgICAvLyBDcmVhdGUgcGxhY2Vob2xkZXIgb2JqZWN0cyB0byBjcmVhdGUgYSBuaWNlIG91dHB1dC5cbiAgICAgIHZhciBhID0gbmV3IENvbXBhcmlzb24oYWN0dWFsLCBrZXlzKTtcbiAgICAgIHZhciBiID0gbmV3IENvbXBhcmlzb24oZXhwZWN0ZWQsIGtleXMsIGFjdHVhbCk7XG4gICAgICB2YXIgZXJyID0gbmV3IEFzc2VydGlvbkVycm9yKHtcbiAgICAgICAgYWN0dWFsOiBhLFxuICAgICAgICBleHBlY3RlZDogYixcbiAgICAgICAgb3BlcmF0b3I6ICdkZWVwU3RyaWN0RXF1YWwnLFxuICAgICAgICBzdGFja1N0YXJ0Rm46IGZuXG4gICAgICB9KTtcbiAgICAgIGVyci5hY3R1YWwgPSBhY3R1YWw7XG4gICAgICBlcnIuZXhwZWN0ZWQgPSBleHBlY3RlZDtcbiAgICAgIGVyci5vcGVyYXRvciA9IGZuLm5hbWU7XG4gICAgICB0aHJvdyBlcnI7XG4gICAgfVxuXG4gICAgaW5uZXJGYWlsKHtcbiAgICAgIGFjdHVhbDogYWN0dWFsLFxuICAgICAgZXhwZWN0ZWQ6IGV4cGVjdGVkLFxuICAgICAgbWVzc2FnZTogbWVzc2FnZSxcbiAgICAgIG9wZXJhdG9yOiBmbi5uYW1lLFxuICAgICAgc3RhY2tTdGFydEZuOiBmblxuICAgIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIGV4cGVjdGVkRXhjZXB0aW9uKGFjdHVhbCwgZXhwZWN0ZWQsIG1zZywgZm4pIHtcbiAgaWYgKHR5cGVvZiBleHBlY3RlZCAhPT0gJ2Z1bmN0aW9uJykge1xuICAgIGlmIChpc1JlZ0V4cChleHBlY3RlZCkpIHJldHVybiBleHBlY3RlZC50ZXN0KGFjdHVhbCk7IC8vIGFzc2VydC5kb2VzTm90VGhyb3cgZG9lcyBub3QgYWNjZXB0IG9iamVjdHMuXG5cbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMikge1xuICAgICAgdGhyb3cgbmV3IEVSUl9JTlZBTElEX0FSR19UWVBFKCdleHBlY3RlZCcsIFsnRnVuY3Rpb24nLCAnUmVnRXhwJ10sIGV4cGVjdGVkKTtcbiAgICB9IC8vIEhhbmRsZSBwcmltaXRpdmVzIHByb3Blcmx5LlxuXG5cbiAgICBpZiAoX3R5cGVvZihhY3R1YWwpICE9PSAnb2JqZWN0JyB8fCBhY3R1YWwgPT09IG51bGwpIHtcbiAgICAgIHZhciBlcnIgPSBuZXcgQXNzZXJ0aW9uRXJyb3Ioe1xuICAgICAgICBhY3R1YWw6IGFjdHVhbCxcbiAgICAgICAgZXhwZWN0ZWQ6IGV4cGVjdGVkLFxuICAgICAgICBtZXNzYWdlOiBtc2csXG4gICAgICAgIG9wZXJhdG9yOiAnZGVlcFN0cmljdEVxdWFsJyxcbiAgICAgICAgc3RhY2tTdGFydEZuOiBmblxuICAgICAgfSk7XG4gICAgICBlcnIub3BlcmF0b3IgPSBmbi5uYW1lO1xuICAgICAgdGhyb3cgZXJyO1xuICAgIH1cblxuICAgIHZhciBrZXlzID0gT2JqZWN0LmtleXMoZXhwZWN0ZWQpOyAvLyBTcGVjaWFsIGhhbmRsZSBlcnJvcnMgdG8gbWFrZSBzdXJlIHRoZSBuYW1lIGFuZCB0aGUgbWVzc2FnZSBhcmUgY29tcGFyZWRcbiAgICAvLyBhcyB3ZWxsLlxuXG4gICAgaWYgKGV4cGVjdGVkIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgIGtleXMucHVzaCgnbmFtZScsICdtZXNzYWdlJyk7XG4gICAgfSBlbHNlIGlmIChrZXlzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgdGhyb3cgbmV3IEVSUl9JTlZBTElEX0FSR19WQUxVRSgnZXJyb3InLCBleHBlY3RlZCwgJ21heSBub3QgYmUgYW4gZW1wdHkgb2JqZWN0Jyk7XG4gICAgfVxuXG4gICAgaWYgKGlzRGVlcEVxdWFsID09PSB1bmRlZmluZWQpIGxhenlMb2FkQ29tcGFyaXNvbigpO1xuICAgIGtleXMuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICBpZiAodHlwZW9mIGFjdHVhbFtrZXldID09PSAnc3RyaW5nJyAmJiBpc1JlZ0V4cChleHBlY3RlZFtrZXldKSAmJiBleHBlY3RlZFtrZXldLnRlc3QoYWN0dWFsW2tleV0pKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgY29tcGFyZUV4Y2VwdGlvbktleShhY3R1YWwsIGV4cGVjdGVkLCBrZXksIG1zZywga2V5cywgZm4pO1xuICAgIH0pO1xuICAgIHJldHVybiB0cnVlO1xuICB9IC8vIEd1YXJkIGluc3RhbmNlb2YgYWdhaW5zdCBhcnJvdyBmdW5jdGlvbnMgYXMgdGhleSBkb24ndCBoYXZlIGEgcHJvdG90eXBlLlxuXG5cbiAgaWYgKGV4cGVjdGVkLnByb3RvdHlwZSAhPT0gdW5kZWZpbmVkICYmIGFjdHVhbCBpbnN0YW5jZW9mIGV4cGVjdGVkKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBpZiAoRXJyb3IuaXNQcm90b3R5cGVPZihleHBlY3RlZCkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICByZXR1cm4gZXhwZWN0ZWQuY2FsbCh7fSwgYWN0dWFsKSA9PT0gdHJ1ZTtcbn1cblxuZnVuY3Rpb24gZ2V0QWN0dWFsKGZuKSB7XG4gIGlmICh0eXBlb2YgZm4gIT09ICdmdW5jdGlvbicpIHtcbiAgICB0aHJvdyBuZXcgRVJSX0lOVkFMSURfQVJHX1RZUEUoJ2ZuJywgJ0Z1bmN0aW9uJywgZm4pO1xuICB9XG5cbiAgdHJ5IHtcbiAgICBmbigpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIGU7XG4gIH1cblxuICByZXR1cm4gTk9fRVhDRVBUSU9OX1NFTlRJTkVMO1xufVxuXG5mdW5jdGlvbiBjaGVja0lzUHJvbWlzZShvYmopIHtcbiAgLy8gQWNjZXB0IG5hdGl2ZSBFUzYgcHJvbWlzZXMgYW5kIHByb21pc2VzIHRoYXQgYXJlIGltcGxlbWVudGVkIGluIGEgc2ltaWxhclxuICAvLyB3YXkuIERvIG5vdCBhY2NlcHQgdGhlbmFibGVzIHRoYXQgdXNlIGEgZnVuY3Rpb24gYXMgYG9iamAgYW5kIHRoYXQgaGF2ZSBub1xuICAvLyBgY2F0Y2hgIGhhbmRsZXIuXG4gIC8vIFRPRE86IHRoZW5hYmxlcyBhcmUgY2hlY2tlZCB1cCB1bnRpbCB0aGV5IGhhdmUgdGhlIGNvcnJlY3QgbWV0aG9kcyxcbiAgLy8gYnV0IGFjY29yZGluZyB0byBkb2N1bWVudGF0aW9uLCB0aGUgYHRoZW5gIG1ldGhvZCBzaG91bGQgcmVjZWl2ZVxuICAvLyB0aGUgYGZ1bGZpbGxgIGFuZCBgcmVqZWN0YCBhcmd1bWVudHMgYXMgd2VsbCBvciBpdCBtYXkgYmUgbmV2ZXIgcmVzb2x2ZWQuXG4gIHJldHVybiBpc1Byb21pc2Uob2JqKSB8fCBvYmogIT09IG51bGwgJiYgX3R5cGVvZihvYmopID09PSAnb2JqZWN0JyAmJiB0eXBlb2Ygb2JqLnRoZW4gPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIG9iai5jYXRjaCA9PT0gJ2Z1bmN0aW9uJztcbn1cblxuZnVuY3Rpb24gd2FpdEZvckFjdHVhbChwcm9taXNlRm4pIHtcbiAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgIHZhciByZXN1bHRQcm9taXNlO1xuXG4gICAgaWYgKHR5cGVvZiBwcm9taXNlRm4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIC8vIFJldHVybiBhIHJlamVjdGVkIHByb21pc2UgaWYgYHByb21pc2VGbmAgdGhyb3dzIHN5bmNocm9ub3VzbHkuXG4gICAgICByZXN1bHRQcm9taXNlID0gcHJvbWlzZUZuKCk7IC8vIEZhaWwgaW4gY2FzZSBubyBwcm9taXNlIGlzIHJldHVybmVkLlxuXG4gICAgICBpZiAoIWNoZWNrSXNQcm9taXNlKHJlc3VsdFByb21pc2UpKSB7XG4gICAgICAgIHRocm93IG5ldyBFUlJfSU5WQUxJRF9SRVRVUk5fVkFMVUUoJ2luc3RhbmNlIG9mIFByb21pc2UnLCAncHJvbWlzZUZuJywgcmVzdWx0UHJvbWlzZSk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChjaGVja0lzUHJvbWlzZShwcm9taXNlRm4pKSB7XG4gICAgICByZXN1bHRQcm9taXNlID0gcHJvbWlzZUZuO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBuZXcgRVJSX0lOVkFMSURfQVJHX1RZUEUoJ3Byb21pc2VGbicsIFsnRnVuY3Rpb24nLCAnUHJvbWlzZSddLCBwcm9taXNlRm4pO1xuICAgIH1cblxuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiByZXN1bHRQcm9taXNlO1xuICAgIH0pLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIE5PX0VYQ0VQVElPTl9TRU5USU5FTDtcbiAgICB9KS5jYXRjaChmdW5jdGlvbiAoZSkge1xuICAgICAgcmV0dXJuIGU7XG4gICAgfSk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBleHBlY3RzRXJyb3Ioc3RhY2tTdGFydEZuLCBhY3R1YWwsIGVycm9yLCBtZXNzYWdlKSB7XG4gIGlmICh0eXBlb2YgZXJyb3IgPT09ICdzdHJpbmcnKSB7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDQpIHtcbiAgICAgIHRocm93IG5ldyBFUlJfSU5WQUxJRF9BUkdfVFlQRSgnZXJyb3InLCBbJ09iamVjdCcsICdFcnJvcicsICdGdW5jdGlvbicsICdSZWdFeHAnXSwgZXJyb3IpO1xuICAgIH1cblxuICAgIGlmIChfdHlwZW9mKGFjdHVhbCkgPT09ICdvYmplY3QnICYmIGFjdHVhbCAhPT0gbnVsbCkge1xuICAgICAgaWYgKGFjdHVhbC5tZXNzYWdlID09PSBlcnJvcikge1xuICAgICAgICB0aHJvdyBuZXcgRVJSX0FNQklHVU9VU19BUkdVTUVOVCgnZXJyb3IvbWVzc2FnZScsIFwiVGhlIGVycm9yIG1lc3NhZ2UgXFxcIlwiLmNvbmNhdChhY3R1YWwubWVzc2FnZSwgXCJcXFwiIGlzIGlkZW50aWNhbCB0byB0aGUgbWVzc2FnZS5cIikpO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoYWN0dWFsID09PSBlcnJvcikge1xuICAgICAgdGhyb3cgbmV3IEVSUl9BTUJJR1VPVVNfQVJHVU1FTlQoJ2Vycm9yL21lc3NhZ2UnLCBcIlRoZSBlcnJvciBcXFwiXCIuY29uY2F0KGFjdHVhbCwgXCJcXFwiIGlzIGlkZW50aWNhbCB0byB0aGUgbWVzc2FnZS5cIikpO1xuICAgIH1cblxuICAgIG1lc3NhZ2UgPSBlcnJvcjtcbiAgICBlcnJvciA9IHVuZGVmaW5lZDtcbiAgfSBlbHNlIGlmIChlcnJvciAhPSBudWxsICYmIF90eXBlb2YoZXJyb3IpICE9PSAnb2JqZWN0JyAmJiB0eXBlb2YgZXJyb3IgIT09ICdmdW5jdGlvbicpIHtcbiAgICB0aHJvdyBuZXcgRVJSX0lOVkFMSURfQVJHX1RZUEUoJ2Vycm9yJywgWydPYmplY3QnLCAnRXJyb3InLCAnRnVuY3Rpb24nLCAnUmVnRXhwJ10sIGVycm9yKTtcbiAgfVxuXG4gIGlmIChhY3R1YWwgPT09IE5PX0VYQ0VQVElPTl9TRU5USU5FTCkge1xuICAgIHZhciBkZXRhaWxzID0gJyc7XG5cbiAgICBpZiAoZXJyb3IgJiYgZXJyb3IubmFtZSkge1xuICAgICAgZGV0YWlscyArPSBcIiAoXCIuY29uY2F0KGVycm9yLm5hbWUsIFwiKVwiKTtcbiAgICB9XG5cbiAgICBkZXRhaWxzICs9IG1lc3NhZ2UgPyBcIjogXCIuY29uY2F0KG1lc3NhZ2UpIDogJy4nO1xuICAgIHZhciBmblR5cGUgPSBzdGFja1N0YXJ0Rm4ubmFtZSA9PT0gJ3JlamVjdHMnID8gJ3JlamVjdGlvbicgOiAnZXhjZXB0aW9uJztcbiAgICBpbm5lckZhaWwoe1xuICAgICAgYWN0dWFsOiB1bmRlZmluZWQsXG4gICAgICBleHBlY3RlZDogZXJyb3IsXG4gICAgICBvcGVyYXRvcjogc3RhY2tTdGFydEZuLm5hbWUsXG4gICAgICBtZXNzYWdlOiBcIk1pc3NpbmcgZXhwZWN0ZWQgXCIuY29uY2F0KGZuVHlwZSkuY29uY2F0KGRldGFpbHMpLFxuICAgICAgc3RhY2tTdGFydEZuOiBzdGFja1N0YXJ0Rm5cbiAgICB9KTtcbiAgfVxuXG4gIGlmIChlcnJvciAmJiAhZXhwZWN0ZWRFeGNlcHRpb24oYWN0dWFsLCBlcnJvciwgbWVzc2FnZSwgc3RhY2tTdGFydEZuKSkge1xuICAgIHRocm93IGFjdHVhbDtcbiAgfVxufVxuXG5mdW5jdGlvbiBleHBlY3RzTm9FcnJvcihzdGFja1N0YXJ0Rm4sIGFjdHVhbCwgZXJyb3IsIG1lc3NhZ2UpIHtcbiAgaWYgKGFjdHVhbCA9PT0gTk9fRVhDRVBUSU9OX1NFTlRJTkVMKSByZXR1cm47XG5cbiAgaWYgKHR5cGVvZiBlcnJvciA9PT0gJ3N0cmluZycpIHtcbiAgICBtZXNzYWdlID0gZXJyb3I7XG4gICAgZXJyb3IgPSB1bmRlZmluZWQ7XG4gIH1cblxuICBpZiAoIWVycm9yIHx8IGV4cGVjdGVkRXhjZXB0aW9uKGFjdHVhbCwgZXJyb3IpKSB7XG4gICAgdmFyIGRldGFpbHMgPSBtZXNzYWdlID8gXCI6IFwiLmNvbmNhdChtZXNzYWdlKSA6ICcuJztcbiAgICB2YXIgZm5UeXBlID0gc3RhY2tTdGFydEZuLm5hbWUgPT09ICdkb2VzTm90UmVqZWN0JyA/ICdyZWplY3Rpb24nIDogJ2V4Y2VwdGlvbic7XG4gICAgaW5uZXJGYWlsKHtcbiAgICAgIGFjdHVhbDogYWN0dWFsLFxuICAgICAgZXhwZWN0ZWQ6IGVycm9yLFxuICAgICAgb3BlcmF0b3I6IHN0YWNrU3RhcnRGbi5uYW1lLFxuICAgICAgbWVzc2FnZTogXCJHb3QgdW53YW50ZWQgXCIuY29uY2F0KGZuVHlwZSkuY29uY2F0KGRldGFpbHMsIFwiXFxuXCIpICsgXCJBY3R1YWwgbWVzc2FnZTogXFxcIlwiLmNvbmNhdChhY3R1YWwgJiYgYWN0dWFsLm1lc3NhZ2UsIFwiXFxcIlwiKSxcbiAgICAgIHN0YWNrU3RhcnRGbjogc3RhY2tTdGFydEZuXG4gICAgfSk7XG4gIH1cblxuICB0aHJvdyBhY3R1YWw7XG59XG5cbmFzc2VydC50aHJvd3MgPSBmdW5jdGlvbiB0aHJvd3MocHJvbWlzZUZuKSB7XG4gIGZvciAodmFyIF9sZW4yID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuMiA+IDEgPyBfbGVuMiAtIDEgOiAwKSwgX2tleTIgPSAxOyBfa2V5MiA8IF9sZW4yOyBfa2V5MisrKSB7XG4gICAgYXJnc1tfa2V5MiAtIDFdID0gYXJndW1lbnRzW19rZXkyXTtcbiAgfVxuXG4gIGV4cGVjdHNFcnJvci5hcHBseSh2b2lkIDAsIFt0aHJvd3MsIGdldEFjdHVhbChwcm9taXNlRm4pXS5jb25jYXQoYXJncykpO1xufTtcblxuYXNzZXJ0LnJlamVjdHMgPSBmdW5jdGlvbiByZWplY3RzKHByb21pc2VGbikge1xuICBmb3IgKHZhciBfbGVuMyA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbjMgPiAxID8gX2xlbjMgLSAxIDogMCksIF9rZXkzID0gMTsgX2tleTMgPCBfbGVuMzsgX2tleTMrKykge1xuICAgIGFyZ3NbX2tleTMgLSAxXSA9IGFyZ3VtZW50c1tfa2V5M107XG4gIH1cblxuICByZXR1cm4gd2FpdEZvckFjdHVhbChwcm9taXNlRm4pLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgIHJldHVybiBleHBlY3RzRXJyb3IuYXBwbHkodm9pZCAwLCBbcmVqZWN0cywgcmVzdWx0XS5jb25jYXQoYXJncykpO1xuICB9KTtcbn07XG5cbmFzc2VydC5kb2VzTm90VGhyb3cgPSBmdW5jdGlvbiBkb2VzTm90VGhyb3coZm4pIHtcbiAgZm9yICh2YXIgX2xlbjQgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW40ID4gMSA/IF9sZW40IC0gMSA6IDApLCBfa2V5NCA9IDE7IF9rZXk0IDwgX2xlbjQ7IF9rZXk0KyspIHtcbiAgICBhcmdzW19rZXk0IC0gMV0gPSBhcmd1bWVudHNbX2tleTRdO1xuICB9XG5cbiAgZXhwZWN0c05vRXJyb3IuYXBwbHkodm9pZCAwLCBbZG9lc05vdFRocm93LCBnZXRBY3R1YWwoZm4pXS5jb25jYXQoYXJncykpO1xufTtcblxuYXNzZXJ0LmRvZXNOb3RSZWplY3QgPSBmdW5jdGlvbiBkb2VzTm90UmVqZWN0KGZuKSB7XG4gIGZvciAodmFyIF9sZW41ID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuNSA+IDEgPyBfbGVuNSAtIDEgOiAwKSwgX2tleTUgPSAxOyBfa2V5NSA8IF9sZW41OyBfa2V5NSsrKSB7XG4gICAgYXJnc1tfa2V5NSAtIDFdID0gYXJndW1lbnRzW19rZXk1XTtcbiAgfVxuXG4gIHJldHVybiB3YWl0Rm9yQWN0dWFsKGZuKS50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICByZXR1cm4gZXhwZWN0c05vRXJyb3IuYXBwbHkodm9pZCAwLCBbZG9lc05vdFJlamVjdCwgcmVzdWx0XS5jb25jYXQoYXJncykpO1xuICB9KTtcbn07XG5cbmFzc2VydC5pZkVycm9yID0gZnVuY3Rpb24gaWZFcnJvcihlcnIpIHtcbiAgaWYgKGVyciAhPT0gbnVsbCAmJiBlcnIgIT09IHVuZGVmaW5lZCkge1xuICAgIHZhciBtZXNzYWdlID0gJ2lmRXJyb3IgZ290IHVud2FudGVkIGV4Y2VwdGlvbjogJztcblxuICAgIGlmIChfdHlwZW9mKGVycikgPT09ICdvYmplY3QnICYmIHR5cGVvZiBlcnIubWVzc2FnZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGlmIChlcnIubWVzc2FnZS5sZW5ndGggPT09IDAgJiYgZXJyLmNvbnN0cnVjdG9yKSB7XG4gICAgICAgIG1lc3NhZ2UgKz0gZXJyLmNvbnN0cnVjdG9yLm5hbWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBtZXNzYWdlICs9IGVyci5tZXNzYWdlO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBtZXNzYWdlICs9IGluc3BlY3QoZXJyKTtcbiAgICB9XG5cbiAgICB2YXIgbmV3RXJyID0gbmV3IEFzc2VydGlvbkVycm9yKHtcbiAgICAgIGFjdHVhbDogZXJyLFxuICAgICAgZXhwZWN0ZWQ6IG51bGwsXG4gICAgICBvcGVyYXRvcjogJ2lmRXJyb3InLFxuICAgICAgbWVzc2FnZTogbWVzc2FnZSxcbiAgICAgIHN0YWNrU3RhcnRGbjogaWZFcnJvclxuICAgIH0pOyAvLyBNYWtlIHN1cmUgd2UgYWN0dWFsbHkgaGF2ZSBhIHN0YWNrIHRyYWNlIVxuXG4gICAgdmFyIG9yaWdTdGFjayA9IGVyci5zdGFjaztcblxuICAgIGlmICh0eXBlb2Ygb3JpZ1N0YWNrID09PSAnc3RyaW5nJykge1xuICAgICAgLy8gVGhpcyB3aWxsIHJlbW92ZSBhbnkgZHVwbGljYXRlZCBmcmFtZXMgZnJvbSB0aGUgZXJyb3IgZnJhbWVzIHRha2VuXG4gICAgICAvLyBmcm9tIHdpdGhpbiBgaWZFcnJvcmAgYW5kIGFkZCB0aGUgb3JpZ2luYWwgZXJyb3IgZnJhbWVzIHRvIHRoZSBuZXdseVxuICAgICAgLy8gY3JlYXRlZCBvbmVzLlxuICAgICAgdmFyIHRtcDIgPSBvcmlnU3RhY2suc3BsaXQoJ1xcbicpO1xuICAgICAgdG1wMi5zaGlmdCgpOyAvLyBGaWx0ZXIgYWxsIGZyYW1lcyBleGlzdGluZyBpbiBlcnIuc3RhY2suXG5cbiAgICAgIHZhciB0bXAxID0gbmV3RXJyLnN0YWNrLnNwbGl0KCdcXG4nKTtcblxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0bXAyLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIEZpbmQgdGhlIGZpcnN0IG9jY3VycmVuY2Ugb2YgdGhlIGZyYW1lLlxuICAgICAgICB2YXIgcG9zID0gdG1wMS5pbmRleE9mKHRtcDJbaV0pO1xuXG4gICAgICAgIGlmIChwb3MgIT09IC0xKSB7XG4gICAgICAgICAgLy8gT25seSBrZWVwIG5ldyBmcmFtZXMuXG4gICAgICAgICAgdG1wMSA9IHRtcDEuc2xpY2UoMCwgcG9zKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBuZXdFcnIuc3RhY2sgPSBcIlwiLmNvbmNhdCh0bXAxLmpvaW4oJ1xcbicpLCBcIlxcblwiKS5jb25jYXQodG1wMi5qb2luKCdcXG4nKSk7XG4gICAgfVxuXG4gICAgdGhyb3cgbmV3RXJyO1xuICB9XG59OyAvLyBFeHBvc2UgYSBzdHJpY3Qgb25seSB2YXJpYW50IG9mIGFzc2VydFxuXG5cbmZ1bmN0aW9uIHN0cmljdCgpIHtcbiAgZm9yICh2YXIgX2xlbjYgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW42KSwgX2tleTYgPSAwOyBfa2V5NiA8IF9sZW42OyBfa2V5NisrKSB7XG4gICAgYXJnc1tfa2V5Nl0gPSBhcmd1bWVudHNbX2tleTZdO1xuICB9XG5cbiAgaW5uZXJPay5hcHBseSh2b2lkIDAsIFtzdHJpY3QsIGFyZ3MubGVuZ3RoXS5jb25jYXQoYXJncykpO1xufVxuXG5hc3NlcnQuc3RyaWN0ID0gb2JqZWN0QXNzaWduKHN0cmljdCwgYXNzZXJ0LCB7XG4gIGVxdWFsOiBhc3NlcnQuc3RyaWN0RXF1YWwsXG4gIGRlZXBFcXVhbDogYXNzZXJ0LmRlZXBTdHJpY3RFcXVhbCxcbiAgbm90RXF1YWw6IGFzc2VydC5ub3RTdHJpY3RFcXVhbCxcbiAgbm90RGVlcEVxdWFsOiBhc3NlcnQubm90RGVlcFN0cmljdEVxdWFsXG59KTtcbmFzc2VydC5zdHJpY3Quc3RyaWN0ID0gYXNzZXJ0LnN0cmljdDsiLCIvLyBDdXJyZW50bHkgaW4gc3luYyB3aXRoIE5vZGUuanMgbGliL2ludGVybmFsL2Fzc2VydC9hc3NlcnRpb25fZXJyb3IuanNcbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9ub2RlanMvbm9kZS9jb21taXQvMDgxNzg0MGY3NzUwMzIxNjlkZGQ3MGM4NWFjMDU5ZjE4ZmZjYzgxY1xuJ3VzZSBzdHJpY3QnO1xuXG5mdW5jdGlvbiBfb2JqZWN0U3ByZWFkKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldICE9IG51bGwgPyBhcmd1bWVudHNbaV0gOiB7fTsgdmFyIG93bktleXMgPSBPYmplY3Qua2V5cyhzb3VyY2UpOyBpZiAodHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09ICdmdW5jdGlvbicpIHsgb3duS2V5cyA9IG93bktleXMuY29uY2F0KE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMoc291cmNlKS5maWx0ZXIoZnVuY3Rpb24gKHN5bSkgeyByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihzb3VyY2UsIHN5bSkuZW51bWVyYWJsZTsgfSkpOyB9IG93bktleXMuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7IF9kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgc291cmNlW2tleV0pOyB9KTsgfSByZXR1cm4gdGFyZ2V0OyB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHsgaWYgKGtleSBpbiBvYmopIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7IHZhbHVlOiB2YWx1ZSwgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlLCB3cml0YWJsZTogdHJ1ZSB9KTsgfSBlbHNlIHsgb2JqW2tleV0gPSB2YWx1ZTsgfSByZXR1cm4gb2JqOyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH1cblxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoY2FsbCAmJiAoX3R5cGVvZihjYWxsKSA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSkgeyByZXR1cm4gY2FsbDsgfSByZXR1cm4gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKTsgfVxuXG5mdW5jdGlvbiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpIHsgaWYgKHNlbGYgPT09IHZvaWQgMCkgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uXCIpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIF9zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcyk7IH1cblxuZnVuY3Rpb24gX3dyYXBOYXRpdmVTdXBlcihDbGFzcykgeyB2YXIgX2NhY2hlID0gdHlwZW9mIE1hcCA9PT0gXCJmdW5jdGlvblwiID8gbmV3IE1hcCgpIDogdW5kZWZpbmVkOyBfd3JhcE5hdGl2ZVN1cGVyID0gZnVuY3Rpb24gX3dyYXBOYXRpdmVTdXBlcihDbGFzcykgeyBpZiAoQ2xhc3MgPT09IG51bGwgfHwgIV9pc05hdGl2ZUZ1bmN0aW9uKENsYXNzKSkgcmV0dXJuIENsYXNzOyBpZiAodHlwZW9mIENsYXNzICE9PSBcImZ1bmN0aW9uXCIpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uXCIpOyB9IGlmICh0eXBlb2YgX2NhY2hlICE9PSBcInVuZGVmaW5lZFwiKSB7IGlmIChfY2FjaGUuaGFzKENsYXNzKSkgcmV0dXJuIF9jYWNoZS5nZXQoQ2xhc3MpOyBfY2FjaGUuc2V0KENsYXNzLCBXcmFwcGVyKTsgfSBmdW5jdGlvbiBXcmFwcGVyKCkgeyByZXR1cm4gX2NvbnN0cnVjdChDbGFzcywgYXJndW1lbnRzLCBfZ2V0UHJvdG90eXBlT2YodGhpcykuY29uc3RydWN0b3IpOyB9IFdyYXBwZXIucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IFdyYXBwZXIsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IHJldHVybiBfc2V0UHJvdG90eXBlT2YoV3JhcHBlciwgQ2xhc3MpOyB9OyByZXR1cm4gX3dyYXBOYXRpdmVTdXBlcihDbGFzcyk7IH1cblxuZnVuY3Rpb24gaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCkgeyBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwidW5kZWZpbmVkXCIgfHwgIVJlZmxlY3QuY29uc3RydWN0KSByZXR1cm4gZmFsc2U7IGlmIChSZWZsZWN0LmNvbnN0cnVjdC5zaGFtKSByZXR1cm4gZmFsc2U7IGlmICh0eXBlb2YgUHJveHkgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIHRydWU7IHRyeSB7IERhdGUucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoUmVmbGVjdC5jb25zdHJ1Y3QoRGF0ZSwgW10sIGZ1bmN0aW9uICgpIHt9KSk7IHJldHVybiB0cnVlOyB9IGNhdGNoIChlKSB7IHJldHVybiBmYWxzZTsgfSB9XG5cbmZ1bmN0aW9uIF9jb25zdHJ1Y3QoUGFyZW50LCBhcmdzLCBDbGFzcykgeyBpZiAoaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCkpIHsgX2NvbnN0cnVjdCA9IFJlZmxlY3QuY29uc3RydWN0OyB9IGVsc2UgeyBfY29uc3RydWN0ID0gZnVuY3Rpb24gX2NvbnN0cnVjdChQYXJlbnQsIGFyZ3MsIENsYXNzKSB7IHZhciBhID0gW251bGxdOyBhLnB1c2guYXBwbHkoYSwgYXJncyk7IHZhciBDb25zdHJ1Y3RvciA9IEZ1bmN0aW9uLmJpbmQuYXBwbHkoUGFyZW50LCBhKTsgdmFyIGluc3RhbmNlID0gbmV3IENvbnN0cnVjdG9yKCk7IGlmIChDbGFzcykgX3NldFByb3RvdHlwZU9mKGluc3RhbmNlLCBDbGFzcy5wcm90b3R5cGUpOyByZXR1cm4gaW5zdGFuY2U7IH07IH0gcmV0dXJuIF9jb25zdHJ1Y3QuYXBwbHkobnVsbCwgYXJndW1lbnRzKTsgfVxuXG5mdW5jdGlvbiBfaXNOYXRpdmVGdW5jdGlvbihmbikgeyByZXR1cm4gRnVuY3Rpb24udG9TdHJpbmcuY2FsbChmbikuaW5kZXhPZihcIltuYXRpdmUgY29kZV1cIikgIT09IC0xOyB9XG5cbmZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fCBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBvLl9fcHJvdG9fXyA9IHA7IHJldHVybiBvOyB9OyByZXR1cm4gX3NldFByb3RvdHlwZU9mKG8sIHApOyB9XG5cbmZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IF9nZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5nZXRQcm90b3R5cGVPZiA6IGZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IHJldHVybiBvLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2Yobyk7IH07IHJldHVybiBfZ2V0UHJvdG90eXBlT2Yobyk7IH1cblxuZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfTsgfSBlbHNlIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9OyB9IHJldHVybiBfdHlwZW9mKG9iaik7IH1cblxudmFyIF9yZXF1aXJlID0gcmVxdWlyZSgndXRpbC8nKSxcbiAgICBpbnNwZWN0ID0gX3JlcXVpcmUuaW5zcGVjdDtcblxudmFyIF9yZXF1aXJlMiA9IHJlcXVpcmUoJy4uL2Vycm9ycycpLFxuICAgIEVSUl9JTlZBTElEX0FSR19UWVBFID0gX3JlcXVpcmUyLmNvZGVzLkVSUl9JTlZBTElEX0FSR19UWVBFOyAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9HbG9iYWxfT2JqZWN0cy9TdHJpbmcvZW5kc1dpdGhcblxuXG5mdW5jdGlvbiBlbmRzV2l0aChzdHIsIHNlYXJjaCwgdGhpc19sZW4pIHtcbiAgaWYgKHRoaXNfbGVuID09PSB1bmRlZmluZWQgfHwgdGhpc19sZW4gPiBzdHIubGVuZ3RoKSB7XG4gICAgdGhpc19sZW4gPSBzdHIubGVuZ3RoO1xuICB9XG5cbiAgcmV0dXJuIHN0ci5zdWJzdHJpbmcodGhpc19sZW4gLSBzZWFyY2gubGVuZ3RoLCB0aGlzX2xlbikgPT09IHNlYXJjaDtcbn0gLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvU3RyaW5nL3JlcGVhdFxuXG5cbmZ1bmN0aW9uIHJlcGVhdChzdHIsIGNvdW50KSB7XG4gIGNvdW50ID0gTWF0aC5mbG9vcihjb3VudCk7XG4gIGlmIChzdHIubGVuZ3RoID09IDAgfHwgY291bnQgPT0gMCkgcmV0dXJuICcnO1xuICB2YXIgbWF4Q291bnQgPSBzdHIubGVuZ3RoICogY291bnQ7XG4gIGNvdW50ID0gTWF0aC5mbG9vcihNYXRoLmxvZyhjb3VudCkgLyBNYXRoLmxvZygyKSk7XG5cbiAgd2hpbGUgKGNvdW50KSB7XG4gICAgc3RyICs9IHN0cjtcbiAgICBjb3VudC0tO1xuICB9XG5cbiAgc3RyICs9IHN0ci5zdWJzdHJpbmcoMCwgbWF4Q291bnQgLSBzdHIubGVuZ3RoKTtcbiAgcmV0dXJuIHN0cjtcbn1cblxudmFyIGJsdWUgPSAnJztcbnZhciBncmVlbiA9ICcnO1xudmFyIHJlZCA9ICcnO1xudmFyIHdoaXRlID0gJyc7XG52YXIga1JlYWRhYmxlT3BlcmF0b3IgPSB7XG4gIGRlZXBTdHJpY3RFcXVhbDogJ0V4cGVjdGVkIHZhbHVlcyB0byBiZSBzdHJpY3RseSBkZWVwLWVxdWFsOicsXG4gIHN0cmljdEVxdWFsOiAnRXhwZWN0ZWQgdmFsdWVzIHRvIGJlIHN0cmljdGx5IGVxdWFsOicsXG4gIHN0cmljdEVxdWFsT2JqZWN0OiAnRXhwZWN0ZWQgXCJhY3R1YWxcIiB0byBiZSByZWZlcmVuY2UtZXF1YWwgdG8gXCJleHBlY3RlZFwiOicsXG4gIGRlZXBFcXVhbDogJ0V4cGVjdGVkIHZhbHVlcyB0byBiZSBsb29zZWx5IGRlZXAtZXF1YWw6JyxcbiAgZXF1YWw6ICdFeHBlY3RlZCB2YWx1ZXMgdG8gYmUgbG9vc2VseSBlcXVhbDonLFxuICBub3REZWVwU3RyaWN0RXF1YWw6ICdFeHBlY3RlZCBcImFjdHVhbFwiIG5vdCB0byBiZSBzdHJpY3RseSBkZWVwLWVxdWFsIHRvOicsXG4gIG5vdFN0cmljdEVxdWFsOiAnRXhwZWN0ZWQgXCJhY3R1YWxcIiB0byBiZSBzdHJpY3RseSB1bmVxdWFsIHRvOicsXG4gIG5vdFN0cmljdEVxdWFsT2JqZWN0OiAnRXhwZWN0ZWQgXCJhY3R1YWxcIiBub3QgdG8gYmUgcmVmZXJlbmNlLWVxdWFsIHRvIFwiZXhwZWN0ZWRcIjonLFxuICBub3REZWVwRXF1YWw6ICdFeHBlY3RlZCBcImFjdHVhbFwiIG5vdCB0byBiZSBsb29zZWx5IGRlZXAtZXF1YWwgdG86JyxcbiAgbm90RXF1YWw6ICdFeHBlY3RlZCBcImFjdHVhbFwiIHRvIGJlIGxvb3NlbHkgdW5lcXVhbCB0bzonLFxuICBub3RJZGVudGljYWw6ICdWYWx1ZXMgaWRlbnRpY2FsIGJ1dCBub3QgcmVmZXJlbmNlLWVxdWFsOidcbn07IC8vIENvbXBhcmluZyBzaG9ydCBwcmltaXRpdmVzIHNob3VsZCBqdXN0IHNob3cgPT09IC8gIT09IGluc3RlYWQgb2YgdXNpbmcgdGhlXG4vLyBkaWZmLlxuXG52YXIga01heFNob3J0TGVuZ3RoID0gMTA7XG5cbmZ1bmN0aW9uIGNvcHlFcnJvcihzb3VyY2UpIHtcbiAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhzb3VyY2UpO1xuICB2YXIgdGFyZ2V0ID0gT2JqZWN0LmNyZWF0ZShPYmplY3QuZ2V0UHJvdG90eXBlT2Yoc291cmNlKSk7XG4gIGtleXMuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgfSk7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsICdtZXNzYWdlJywge1xuICAgIHZhbHVlOiBzb3VyY2UubWVzc2FnZVxuICB9KTtcbiAgcmV0dXJuIHRhcmdldDtcbn1cblxuZnVuY3Rpb24gaW5zcGVjdFZhbHVlKHZhbCkge1xuICAvLyBUaGUgdXRpbC5pbnNwZWN0IGRlZmF1bHQgdmFsdWVzIGNvdWxkIGJlIGNoYW5nZWQuIFRoaXMgbWFrZXMgc3VyZSB0aGVcbiAgLy8gZXJyb3IgbWVzc2FnZXMgY29udGFpbiB0aGUgbmVjZXNzYXJ5IGluZm9ybWF0aW9uIG5ldmVydGhlbGVzcy5cbiAgcmV0dXJuIGluc3BlY3QodmFsLCB7XG4gICAgY29tcGFjdDogZmFsc2UsXG4gICAgY3VzdG9tSW5zcGVjdDogZmFsc2UsXG4gICAgZGVwdGg6IDEwMDAsXG4gICAgbWF4QXJyYXlMZW5ndGg6IEluZmluaXR5LFxuICAgIC8vIEFzc2VydCBjb21wYXJlcyBvbmx5IGVudW1lcmFibGUgcHJvcGVydGllcyAod2l0aCBhIGZldyBleGNlcHRpb25zKS5cbiAgICBzaG93SGlkZGVuOiBmYWxzZSxcbiAgICAvLyBIYXZpbmcgYSBsb25nIGxpbmUgYXMgZXJyb3IgaXMgYmV0dGVyIHRoYW4gd3JhcHBpbmcgdGhlIGxpbmUgZm9yXG4gICAgLy8gY29tcGFyaXNvbiBmb3Igbm93LlxuICAgIC8vIFRPRE8oQnJpZGdlQVIpOiBgYnJlYWtMZW5ndGhgIHNob3VsZCBiZSBsaW1pdGVkIGFzIHNvb24gYXMgc29vbiBhcyB3ZVxuICAgIC8vIGhhdmUgbWV0YSBpbmZvcm1hdGlvbiBhYm91dCB0aGUgaW5zcGVjdGVkIHByb3BlcnRpZXMgKGkuZS4sIGtub3cgd2hlcmVcbiAgICAvLyBpbiB3aGF0IGxpbmUgdGhlIHByb3BlcnR5IHN0YXJ0cyBhbmQgZW5kcykuXG4gICAgYnJlYWtMZW5ndGg6IEluZmluaXR5LFxuICAgIC8vIEFzc2VydCBkb2VzIG5vdCBkZXRlY3QgcHJveGllcyBjdXJyZW50bHkuXG4gICAgc2hvd1Byb3h5OiBmYWxzZSxcbiAgICBzb3J0ZWQ6IHRydWUsXG4gICAgLy8gSW5zcGVjdCBnZXR0ZXJzIGFzIHdlIGFsc28gY2hlY2sgdGhlbSB3aGVuIGNvbXBhcmluZyBlbnRyaWVzLlxuICAgIGdldHRlcnM6IHRydWVcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUVyckRpZmYoYWN0dWFsLCBleHBlY3RlZCwgb3BlcmF0b3IpIHtcbiAgdmFyIG90aGVyID0gJyc7XG4gIHZhciByZXMgPSAnJztcbiAgdmFyIGxhc3RQb3MgPSAwO1xuICB2YXIgZW5kID0gJyc7XG4gIHZhciBza2lwcGVkID0gZmFsc2U7XG4gIHZhciBhY3R1YWxJbnNwZWN0ZWQgPSBpbnNwZWN0VmFsdWUoYWN0dWFsKTtcbiAgdmFyIGFjdHVhbExpbmVzID0gYWN0dWFsSW5zcGVjdGVkLnNwbGl0KCdcXG4nKTtcbiAgdmFyIGV4cGVjdGVkTGluZXMgPSBpbnNwZWN0VmFsdWUoZXhwZWN0ZWQpLnNwbGl0KCdcXG4nKTtcbiAgdmFyIGkgPSAwO1xuICB2YXIgaW5kaWNhdG9yID0gJyc7IC8vIEluIGNhc2UgYm90aCB2YWx1ZXMgYXJlIG9iamVjdHMgZXhwbGljaXRseSBtYXJrIHRoZW0gYXMgbm90IHJlZmVyZW5jZSBlcXVhbFxuICAvLyBmb3IgdGhlIGBzdHJpY3RFcXVhbGAgb3BlcmF0b3IuXG5cbiAgaWYgKG9wZXJhdG9yID09PSAnc3RyaWN0RXF1YWwnICYmIF90eXBlb2YoYWN0dWFsKSA9PT0gJ29iamVjdCcgJiYgX3R5cGVvZihleHBlY3RlZCkgPT09ICdvYmplY3QnICYmIGFjdHVhbCAhPT0gbnVsbCAmJiBleHBlY3RlZCAhPT0gbnVsbCkge1xuICAgIG9wZXJhdG9yID0gJ3N0cmljdEVxdWFsT2JqZWN0JztcbiAgfSAvLyBJZiBcImFjdHVhbFwiIGFuZCBcImV4cGVjdGVkXCIgZml0IG9uIGEgc2luZ2xlIGxpbmUgYW5kIHRoZXkgYXJlIG5vdCBzdHJpY3RseVxuICAvLyBlcXVhbCwgY2hlY2sgZnVydGhlciBzcGVjaWFsIGhhbmRsaW5nLlxuXG5cbiAgaWYgKGFjdHVhbExpbmVzLmxlbmd0aCA9PT0gMSAmJiBleHBlY3RlZExpbmVzLmxlbmd0aCA9PT0gMSAmJiBhY3R1YWxMaW5lc1swXSAhPT0gZXhwZWN0ZWRMaW5lc1swXSkge1xuICAgIHZhciBpbnB1dExlbmd0aCA9IGFjdHVhbExpbmVzWzBdLmxlbmd0aCArIGV4cGVjdGVkTGluZXNbMF0ubGVuZ3RoOyAvLyBJZiB0aGUgY2hhcmFjdGVyIGxlbmd0aCBvZiBcImFjdHVhbFwiIGFuZCBcImV4cGVjdGVkXCIgdG9nZXRoZXIgaXMgbGVzcyB0aGFuXG4gICAgLy8ga01heFNob3J0TGVuZ3RoIGFuZCBpZiBuZWl0aGVyIGlzIGFuIG9iamVjdCBhbmQgYXQgbGVhc3Qgb25lIG9mIHRoZW0gaXNcbiAgICAvLyBub3QgYHplcm9gLCB1c2UgdGhlIHN0cmljdCBlcXVhbCBjb21wYXJpc29uIHRvIHZpc3VhbGl6ZSB0aGUgb3V0cHV0LlxuXG4gICAgaWYgKGlucHV0TGVuZ3RoIDw9IGtNYXhTaG9ydExlbmd0aCkge1xuICAgICAgaWYgKChfdHlwZW9mKGFjdHVhbCkgIT09ICdvYmplY3QnIHx8IGFjdHVhbCA9PT0gbnVsbCkgJiYgKF90eXBlb2YoZXhwZWN0ZWQpICE9PSAnb2JqZWN0JyB8fCBleHBlY3RlZCA9PT0gbnVsbCkgJiYgKGFjdHVhbCAhPT0gMCB8fCBleHBlY3RlZCAhPT0gMCkpIHtcbiAgICAgICAgLy8gLTAgPT09ICswXG4gICAgICAgIHJldHVybiBcIlwiLmNvbmNhdChrUmVhZGFibGVPcGVyYXRvcltvcGVyYXRvcl0sIFwiXFxuXFxuXCIpICsgXCJcIi5jb25jYXQoYWN0dWFsTGluZXNbMF0sIFwiICE9PSBcIikuY29uY2F0KGV4cGVjdGVkTGluZXNbMF0sIFwiXFxuXCIpO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAob3BlcmF0b3IgIT09ICdzdHJpY3RFcXVhbE9iamVjdCcpIHtcbiAgICAgIC8vIElmIHRoZSBzdGRlcnIgaXMgYSB0dHkgYW5kIHRoZSBpbnB1dCBsZW5ndGggaXMgbG93ZXIgdGhhbiB0aGUgY3VycmVudFxuICAgICAgLy8gY29sdW1ucyBwZXIgbGluZSwgYWRkIGEgbWlzbWF0Y2ggaW5kaWNhdG9yIGJlbG93IHRoZSBvdXRwdXQuIElmIGl0IGlzXG4gICAgICAvLyBub3QgYSB0dHksIHVzZSBhIGRlZmF1bHQgdmFsdWUgb2YgODAgY2hhcmFjdGVycy5cbiAgICAgIHZhciBtYXhMZW5ndGggPSBwcm9jZXNzLnN0ZGVyciAmJiBwcm9jZXNzLnN0ZGVyci5pc1RUWSA/IHByb2Nlc3Muc3RkZXJyLmNvbHVtbnMgOiA4MDtcblxuICAgICAgaWYgKGlucHV0TGVuZ3RoIDwgbWF4TGVuZ3RoKSB7XG4gICAgICAgIHdoaWxlIChhY3R1YWxMaW5lc1swXVtpXSA9PT0gZXhwZWN0ZWRMaW5lc1swXVtpXSkge1xuICAgICAgICAgIGkrKztcbiAgICAgICAgfSAvLyBJZ25vcmUgdGhlIGZpcnN0IGNoYXJhY3RlcnMuXG5cblxuICAgICAgICBpZiAoaSA+IDIpIHtcbiAgICAgICAgICAvLyBBZGQgcG9zaXRpb24gaW5kaWNhdG9yIGZvciB0aGUgZmlyc3QgbWlzbWF0Y2ggaW4gY2FzZSBpdCBpcyBhXG4gICAgICAgICAgLy8gc2luZ2xlIGxpbmUgYW5kIHRoZSBpbnB1dCBsZW5ndGggaXMgbGVzcyB0aGFuIHRoZSBjb2x1bW4gbGVuZ3RoLlxuICAgICAgICAgIGluZGljYXRvciA9IFwiXFxuICBcIi5jb25jYXQocmVwZWF0KCcgJywgaSksIFwiXlwiKTtcbiAgICAgICAgICBpID0gMDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSAvLyBSZW1vdmUgYWxsIGVuZGluZyBsaW5lcyB0aGF0IG1hdGNoICh0aGlzIG9wdGltaXplcyB0aGUgb3V0cHV0IGZvclxuICAvLyByZWFkYWJpbGl0eSBieSByZWR1Y2luZyB0aGUgbnVtYmVyIG9mIHRvdGFsIGNoYW5nZWQgbGluZXMpLlxuXG5cbiAgdmFyIGEgPSBhY3R1YWxMaW5lc1thY3R1YWxMaW5lcy5sZW5ndGggLSAxXTtcbiAgdmFyIGIgPSBleHBlY3RlZExpbmVzW2V4cGVjdGVkTGluZXMubGVuZ3RoIC0gMV07XG5cbiAgd2hpbGUgKGEgPT09IGIpIHtcbiAgICBpZiAoaSsrIDwgMikge1xuICAgICAgZW5kID0gXCJcXG4gIFwiLmNvbmNhdChhKS5jb25jYXQoZW5kKTtcbiAgICB9IGVsc2Uge1xuICAgICAgb3RoZXIgPSBhO1xuICAgIH1cblxuICAgIGFjdHVhbExpbmVzLnBvcCgpO1xuICAgIGV4cGVjdGVkTGluZXMucG9wKCk7XG4gICAgaWYgKGFjdHVhbExpbmVzLmxlbmd0aCA9PT0gMCB8fCBleHBlY3RlZExpbmVzLmxlbmd0aCA9PT0gMCkgYnJlYWs7XG4gICAgYSA9IGFjdHVhbExpbmVzW2FjdHVhbExpbmVzLmxlbmd0aCAtIDFdO1xuICAgIGIgPSBleHBlY3RlZExpbmVzW2V4cGVjdGVkTGluZXMubGVuZ3RoIC0gMV07XG4gIH1cblxuICB2YXIgbWF4TGluZXMgPSBNYXRoLm1heChhY3R1YWxMaW5lcy5sZW5ndGgsIGV4cGVjdGVkTGluZXMubGVuZ3RoKTsgLy8gU3RyaWN0IGVxdWFsIHdpdGggaWRlbnRpY2FsIG9iamVjdHMgdGhhdCBhcmUgbm90IGlkZW50aWNhbCBieSByZWZlcmVuY2UuXG4gIC8vIEUuZy4sIGFzc2VydC5kZWVwU3RyaWN0RXF1YWwoeyBhOiBTeW1ib2woKSB9LCB7IGE6IFN5bWJvbCgpIH0pXG5cbiAgaWYgKG1heExpbmVzID09PSAwKSB7XG4gICAgLy8gV2UgaGF2ZSB0byBnZXQgdGhlIHJlc3VsdCBhZ2Fpbi4gVGhlIGxpbmVzIHdlcmUgYWxsIHJlbW92ZWQgYmVmb3JlLlxuICAgIHZhciBfYWN0dWFsTGluZXMgPSBhY3R1YWxJbnNwZWN0ZWQuc3BsaXQoJ1xcbicpOyAvLyBPbmx5IHJlbW92ZSBsaW5lcyBpbiBjYXNlIGl0IG1ha2VzIHNlbnNlIHRvIGNvbGxhcHNlIHRob3NlLlxuICAgIC8vIFRPRE86IEFjY2VwdCBlbnYgdG8gYWx3YXlzIHNob3cgdGhlIGZ1bGwgZXJyb3IuXG5cblxuICAgIGlmIChfYWN0dWFsTGluZXMubGVuZ3RoID4gMzApIHtcbiAgICAgIF9hY3R1YWxMaW5lc1syNl0gPSBcIlwiLmNvbmNhdChibHVlLCBcIi4uLlwiKS5jb25jYXQod2hpdGUpO1xuXG4gICAgICB3aGlsZSAoX2FjdHVhbExpbmVzLmxlbmd0aCA+IDI3KSB7XG4gICAgICAgIF9hY3R1YWxMaW5lcy5wb3AoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gXCJcIi5jb25jYXQoa1JlYWRhYmxlT3BlcmF0b3Iubm90SWRlbnRpY2FsLCBcIlxcblxcblwiKS5jb25jYXQoX2FjdHVhbExpbmVzLmpvaW4oJ1xcbicpLCBcIlxcblwiKTtcbiAgfVxuXG4gIGlmIChpID4gMykge1xuICAgIGVuZCA9IFwiXFxuXCIuY29uY2F0KGJsdWUsIFwiLi4uXCIpLmNvbmNhdCh3aGl0ZSkuY29uY2F0KGVuZCk7XG4gICAgc2tpcHBlZCA9IHRydWU7XG4gIH1cblxuICBpZiAob3RoZXIgIT09ICcnKSB7XG4gICAgZW5kID0gXCJcXG4gIFwiLmNvbmNhdChvdGhlcikuY29uY2F0KGVuZCk7XG4gICAgb3RoZXIgPSAnJztcbiAgfVxuXG4gIHZhciBwcmludGVkTGluZXMgPSAwO1xuICB2YXIgbXNnID0ga1JlYWRhYmxlT3BlcmF0b3Jbb3BlcmF0b3JdICsgXCJcXG5cIi5jb25jYXQoZ3JlZW4sIFwiKyBhY3R1YWxcIikuY29uY2F0KHdoaXRlLCBcIiBcIikuY29uY2F0KHJlZCwgXCItIGV4cGVjdGVkXCIpLmNvbmNhdCh3aGl0ZSk7XG4gIHZhciBza2lwcGVkTXNnID0gXCIgXCIuY29uY2F0KGJsdWUsIFwiLi4uXCIpLmNvbmNhdCh3aGl0ZSwgXCIgTGluZXMgc2tpcHBlZFwiKTtcblxuICBmb3IgKGkgPSAwOyBpIDwgbWF4TGluZXM7IGkrKykge1xuICAgIC8vIE9ubHkgZXh0cmEgZXhwZWN0ZWQgbGluZXMgZXhpc3RcbiAgICB2YXIgY3VyID0gaSAtIGxhc3RQb3M7XG5cbiAgICBpZiAoYWN0dWFsTGluZXMubGVuZ3RoIDwgaSArIDEpIHtcbiAgICAgIC8vIElmIHRoZSBsYXN0IGRpdmVyZ2luZyBsaW5lIGlzIG1vcmUgdGhhbiBvbmUgbGluZSBhYm92ZSBhbmQgdGhlXG4gICAgICAvLyBjdXJyZW50IGxpbmUgaXMgYXQgbGVhc3QgbGluZSB0aHJlZSwgYWRkIHNvbWUgb2YgdGhlIGZvcm1lciBsaW5lcyBhbmRcbiAgICAgIC8vIGFsc28gYWRkIGRvdHMgdG8gaW5kaWNhdGUgc2tpcHBlZCBlbnRyaWVzLlxuICAgICAgaWYgKGN1ciA+IDEgJiYgaSA+IDIpIHtcbiAgICAgICAgaWYgKGN1ciA+IDQpIHtcbiAgICAgICAgICByZXMgKz0gXCJcXG5cIi5jb25jYXQoYmx1ZSwgXCIuLi5cIikuY29uY2F0KHdoaXRlKTtcbiAgICAgICAgICBza2lwcGVkID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIGlmIChjdXIgPiAzKSB7XG4gICAgICAgICAgcmVzICs9IFwiXFxuICBcIi5jb25jYXQoZXhwZWN0ZWRMaW5lc1tpIC0gMl0pO1xuICAgICAgICAgIHByaW50ZWRMaW5lcysrO1xuICAgICAgICB9XG5cbiAgICAgICAgcmVzICs9IFwiXFxuICBcIi5jb25jYXQoZXhwZWN0ZWRMaW5lc1tpIC0gMV0pO1xuICAgICAgICBwcmludGVkTGluZXMrKztcbiAgICAgIH0gLy8gTWFyayB0aGUgY3VycmVudCBsaW5lIGFzIHRoZSBsYXN0IGRpdmVyZ2luZyBvbmUuXG5cblxuICAgICAgbGFzdFBvcyA9IGk7IC8vIEFkZCB0aGUgZXhwZWN0ZWQgbGluZSB0byB0aGUgY2FjaGUuXG5cbiAgICAgIG90aGVyICs9IFwiXFxuXCIuY29uY2F0KHJlZCwgXCItXCIpLmNvbmNhdCh3aGl0ZSwgXCIgXCIpLmNvbmNhdChleHBlY3RlZExpbmVzW2ldKTtcbiAgICAgIHByaW50ZWRMaW5lcysrOyAvLyBPbmx5IGV4dHJhIGFjdHVhbCBsaW5lcyBleGlzdFxuICAgIH0gZWxzZSBpZiAoZXhwZWN0ZWRMaW5lcy5sZW5ndGggPCBpICsgMSkge1xuICAgICAgLy8gSWYgdGhlIGxhc3QgZGl2ZXJnaW5nIGxpbmUgaXMgbW9yZSB0aGFuIG9uZSBsaW5lIGFib3ZlIGFuZCB0aGVcbiAgICAgIC8vIGN1cnJlbnQgbGluZSBpcyBhdCBsZWFzdCBsaW5lIHRocmVlLCBhZGQgc29tZSBvZiB0aGUgZm9ybWVyIGxpbmVzIGFuZFxuICAgICAgLy8gYWxzbyBhZGQgZG90cyB0byBpbmRpY2F0ZSBza2lwcGVkIGVudHJpZXMuXG4gICAgICBpZiAoY3VyID4gMSAmJiBpID4gMikge1xuICAgICAgICBpZiAoY3VyID4gNCkge1xuICAgICAgICAgIHJlcyArPSBcIlxcblwiLmNvbmNhdChibHVlLCBcIi4uLlwiKS5jb25jYXQod2hpdGUpO1xuICAgICAgICAgIHNraXBwZWQgPSB0cnVlO1xuICAgICAgICB9IGVsc2UgaWYgKGN1ciA+IDMpIHtcbiAgICAgICAgICByZXMgKz0gXCJcXG4gIFwiLmNvbmNhdChhY3R1YWxMaW5lc1tpIC0gMl0pO1xuICAgICAgICAgIHByaW50ZWRMaW5lcysrO1xuICAgICAgICB9XG5cbiAgICAgICAgcmVzICs9IFwiXFxuICBcIi5jb25jYXQoYWN0dWFsTGluZXNbaSAtIDFdKTtcbiAgICAgICAgcHJpbnRlZExpbmVzKys7XG4gICAgICB9IC8vIE1hcmsgdGhlIGN1cnJlbnQgbGluZSBhcyB0aGUgbGFzdCBkaXZlcmdpbmcgb25lLlxuXG5cbiAgICAgIGxhc3RQb3MgPSBpOyAvLyBBZGQgdGhlIGFjdHVhbCBsaW5lIHRvIHRoZSByZXN1bHQuXG5cbiAgICAgIHJlcyArPSBcIlxcblwiLmNvbmNhdChncmVlbiwgXCIrXCIpLmNvbmNhdCh3aGl0ZSwgXCIgXCIpLmNvbmNhdChhY3R1YWxMaW5lc1tpXSk7XG4gICAgICBwcmludGVkTGluZXMrKzsgLy8gTGluZXMgZGl2ZXJnZVxuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgZXhwZWN0ZWRMaW5lID0gZXhwZWN0ZWRMaW5lc1tpXTtcbiAgICAgIHZhciBhY3R1YWxMaW5lID0gYWN0dWFsTGluZXNbaV07IC8vIElmIHRoZSBsaW5lcyBkaXZlcmdlLCBzcGVjaWZpY2FsbHkgY2hlY2sgZm9yIGxpbmVzIHRoYXQgb25seSBkaXZlcmdlIGJ5XG4gICAgICAvLyBhIHRyYWlsaW5nIGNvbW1hLiBJbiB0aGF0IGNhc2UgaXQgaXMgYWN0dWFsbHkgaWRlbnRpY2FsIGFuZCB3ZSBzaG91bGRcbiAgICAgIC8vIG1hcmsgaXQgYXMgc3VjaC5cblxuICAgICAgdmFyIGRpdmVyZ2luZ0xpbmVzID0gYWN0dWFsTGluZSAhPT0gZXhwZWN0ZWRMaW5lICYmICghZW5kc1dpdGgoYWN0dWFsTGluZSwgJywnKSB8fCBhY3R1YWxMaW5lLnNsaWNlKDAsIC0xKSAhPT0gZXhwZWN0ZWRMaW5lKTsgLy8gSWYgdGhlIGV4cGVjdGVkIGxpbmUgaGFzIGEgdHJhaWxpbmcgY29tbWEgYnV0IGlzIG90aGVyd2lzZSBpZGVudGljYWwsXG4gICAgICAvLyBhZGQgYSBjb21tYSBhdCB0aGUgZW5kIG9mIHRoZSBhY3R1YWwgbGluZS4gT3RoZXJ3aXNlIHRoZSBvdXRwdXQgY291bGRcbiAgICAgIC8vIGxvb2sgd2VpcmQgYXMgaW46XG4gICAgICAvL1xuICAgICAgLy8gICBbXG4gICAgICAvLyAgICAgMSAgICAgICAgIC8vIE5vIGNvbW1hIGF0IHRoZSBlbmQhXG4gICAgICAvLyArICAgMlxuICAgICAgLy8gICBdXG4gICAgICAvL1xuXG4gICAgICBpZiAoZGl2ZXJnaW5nTGluZXMgJiYgZW5kc1dpdGgoZXhwZWN0ZWRMaW5lLCAnLCcpICYmIGV4cGVjdGVkTGluZS5zbGljZSgwLCAtMSkgPT09IGFjdHVhbExpbmUpIHtcbiAgICAgICAgZGl2ZXJnaW5nTGluZXMgPSBmYWxzZTtcbiAgICAgICAgYWN0dWFsTGluZSArPSAnLCc7XG4gICAgICB9XG5cbiAgICAgIGlmIChkaXZlcmdpbmdMaW5lcykge1xuICAgICAgICAvLyBJZiB0aGUgbGFzdCBkaXZlcmdpbmcgbGluZSBpcyBtb3JlIHRoYW4gb25lIGxpbmUgYWJvdmUgYW5kIHRoZVxuICAgICAgICAvLyBjdXJyZW50IGxpbmUgaXMgYXQgbGVhc3QgbGluZSB0aHJlZSwgYWRkIHNvbWUgb2YgdGhlIGZvcm1lciBsaW5lcyBhbmRcbiAgICAgICAgLy8gYWxzbyBhZGQgZG90cyB0byBpbmRpY2F0ZSBza2lwcGVkIGVudHJpZXMuXG4gICAgICAgIGlmIChjdXIgPiAxICYmIGkgPiAyKSB7XG4gICAgICAgICAgaWYgKGN1ciA+IDQpIHtcbiAgICAgICAgICAgIHJlcyArPSBcIlxcblwiLmNvbmNhdChibHVlLCBcIi4uLlwiKS5jb25jYXQod2hpdGUpO1xuICAgICAgICAgICAgc2tpcHBlZCA9IHRydWU7XG4gICAgICAgICAgfSBlbHNlIGlmIChjdXIgPiAzKSB7XG4gICAgICAgICAgICByZXMgKz0gXCJcXG4gIFwiLmNvbmNhdChhY3R1YWxMaW5lc1tpIC0gMl0pO1xuICAgICAgICAgICAgcHJpbnRlZExpbmVzKys7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmVzICs9IFwiXFxuICBcIi5jb25jYXQoYWN0dWFsTGluZXNbaSAtIDFdKTtcbiAgICAgICAgICBwcmludGVkTGluZXMrKztcbiAgICAgICAgfSAvLyBNYXJrIHRoZSBjdXJyZW50IGxpbmUgYXMgdGhlIGxhc3QgZGl2ZXJnaW5nIG9uZS5cblxuXG4gICAgICAgIGxhc3RQb3MgPSBpOyAvLyBBZGQgdGhlIGFjdHVhbCBsaW5lIHRvIHRoZSByZXN1bHQgYW5kIGNhY2hlIHRoZSBleHBlY3RlZCBkaXZlcmdpbmdcbiAgICAgICAgLy8gbGluZSBzbyBjb25zZWN1dGl2ZSBkaXZlcmdpbmcgbGluZXMgc2hvdyB1cCBhcyArKystLS0gYW5kIG5vdCArLSstKy0uXG5cbiAgICAgICAgcmVzICs9IFwiXFxuXCIuY29uY2F0KGdyZWVuLCBcIitcIikuY29uY2F0KHdoaXRlLCBcIiBcIikuY29uY2F0KGFjdHVhbExpbmUpO1xuICAgICAgICBvdGhlciArPSBcIlxcblwiLmNvbmNhdChyZWQsIFwiLVwiKS5jb25jYXQod2hpdGUsIFwiIFwiKS5jb25jYXQoZXhwZWN0ZWRMaW5lKTtcbiAgICAgICAgcHJpbnRlZExpbmVzICs9IDI7IC8vIExpbmVzIGFyZSBpZGVudGljYWxcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIEFkZCBhbGwgY2FjaGVkIGluZm9ybWF0aW9uIHRvIHRoZSByZXN1bHQgYmVmb3JlIGFkZGluZyBvdGhlciB0aGluZ3NcbiAgICAgICAgLy8gYW5kIHJlc2V0IHRoZSBjYWNoZS5cbiAgICAgICAgcmVzICs9IG90aGVyO1xuICAgICAgICBvdGhlciA9ICcnOyAvLyBJZiB0aGUgbGFzdCBkaXZlcmdpbmcgbGluZSBpcyBleGFjdGx5IG9uZSBsaW5lIGFib3ZlIG9yIGlmIGl0IGlzIHRoZVxuICAgICAgICAvLyB2ZXJ5IGZpcnN0IGxpbmUsIGFkZCB0aGUgbGluZSB0byB0aGUgcmVzdWx0LlxuXG4gICAgICAgIGlmIChjdXIgPT09IDEgfHwgaSA9PT0gMCkge1xuICAgICAgICAgIHJlcyArPSBcIlxcbiAgXCIuY29uY2F0KGFjdHVhbExpbmUpO1xuICAgICAgICAgIHByaW50ZWRMaW5lcysrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSAvLyBJbnNwZWN0ZWQgb2JqZWN0IHRvIGJpZyAoU2hvdyB+MjAgcm93cyBtYXgpXG5cblxuICAgIGlmIChwcmludGVkTGluZXMgPiAyMCAmJiBpIDwgbWF4TGluZXMgLSAyKSB7XG4gICAgICByZXR1cm4gXCJcIi5jb25jYXQobXNnKS5jb25jYXQoc2tpcHBlZE1zZywgXCJcXG5cIikuY29uY2F0KHJlcywgXCJcXG5cIikuY29uY2F0KGJsdWUsIFwiLi4uXCIpLmNvbmNhdCh3aGl0ZSkuY29uY2F0KG90aGVyLCBcIlxcblwiKSArIFwiXCIuY29uY2F0KGJsdWUsIFwiLi4uXCIpLmNvbmNhdCh3aGl0ZSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIFwiXCIuY29uY2F0KG1zZykuY29uY2F0KHNraXBwZWQgPyBza2lwcGVkTXNnIDogJycsIFwiXFxuXCIpLmNvbmNhdChyZXMpLmNvbmNhdChvdGhlcikuY29uY2F0KGVuZCkuY29uY2F0KGluZGljYXRvcik7XG59XG5cbnZhciBBc3NlcnRpb25FcnJvciA9XG4vKiNfX1BVUkVfXyovXG5mdW5jdGlvbiAoX0Vycm9yKSB7XG4gIF9pbmhlcml0cyhBc3NlcnRpb25FcnJvciwgX0Vycm9yKTtcblxuICBmdW5jdGlvbiBBc3NlcnRpb25FcnJvcihvcHRpb25zKSB7XG4gICAgdmFyIF90aGlzO1xuXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEFzc2VydGlvbkVycm9yKTtcblxuICAgIGlmIChfdHlwZW9mKG9wdGlvbnMpICE9PSAnb2JqZWN0JyB8fCBvcHRpb25zID09PSBudWxsKSB7XG4gICAgICB0aHJvdyBuZXcgRVJSX0lOVkFMSURfQVJHX1RZUEUoJ29wdGlvbnMnLCAnT2JqZWN0Jywgb3B0aW9ucyk7XG4gICAgfVxuXG4gICAgdmFyIG1lc3NhZ2UgPSBvcHRpb25zLm1lc3NhZ2UsXG4gICAgICAgIG9wZXJhdG9yID0gb3B0aW9ucy5vcGVyYXRvcixcbiAgICAgICAgc3RhY2tTdGFydEZuID0gb3B0aW9ucy5zdGFja1N0YXJ0Rm47XG4gICAgdmFyIGFjdHVhbCA9IG9wdGlvbnMuYWN0dWFsLFxuICAgICAgICBleHBlY3RlZCA9IG9wdGlvbnMuZXhwZWN0ZWQ7XG4gICAgdmFyIGxpbWl0ID0gRXJyb3Iuc3RhY2tUcmFjZUxpbWl0O1xuICAgIEVycm9yLnN0YWNrVHJhY2VMaW1pdCA9IDA7XG5cbiAgICBpZiAobWVzc2FnZSAhPSBudWxsKSB7XG4gICAgICBfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIF9nZXRQcm90b3R5cGVPZihBc3NlcnRpb25FcnJvcikuY2FsbCh0aGlzLCBTdHJpbmcobWVzc2FnZSkpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHByb2Nlc3Muc3RkZXJyICYmIHByb2Nlc3Muc3RkZXJyLmlzVFRZKSB7XG4gICAgICAgIC8vIFJlc2V0IG9uIGVhY2ggY2FsbCB0byBtYWtlIHN1cmUgd2UgaGFuZGxlIGR5bmFtaWNhbGx5IHNldCBlbnZpcm9ubWVudFxuICAgICAgICAvLyB2YXJpYWJsZXMgY29ycmVjdC5cbiAgICAgICAgaWYgKHByb2Nlc3Muc3RkZXJyICYmIHByb2Nlc3Muc3RkZXJyLmdldENvbG9yRGVwdGggJiYgcHJvY2Vzcy5zdGRlcnIuZ2V0Q29sb3JEZXB0aCgpICE9PSAxKSB7XG4gICAgICAgICAgYmx1ZSA9IFwiXFx4MUJbMzRtXCI7XG4gICAgICAgICAgZ3JlZW4gPSBcIlxceDFCWzMybVwiO1xuICAgICAgICAgIHdoaXRlID0gXCJcXHgxQlszOW1cIjtcbiAgICAgICAgICByZWQgPSBcIlxceDFCWzMxbVwiO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGJsdWUgPSAnJztcbiAgICAgICAgICBncmVlbiA9ICcnO1xuICAgICAgICAgIHdoaXRlID0gJyc7XG4gICAgICAgICAgcmVkID0gJyc7XG4gICAgICAgIH1cbiAgICAgIH0gLy8gUHJldmVudCB0aGUgZXJyb3Igc3RhY2sgZnJvbSBiZWluZyB2aXNpYmxlIGJ5IGR1cGxpY2F0aW5nIHRoZSBlcnJvclxuICAgICAgLy8gaW4gYSB2ZXJ5IGNsb3NlIHdheSB0byB0aGUgb3JpZ2luYWwgaW4gY2FzZSBib3RoIHNpZGVzIGFyZSBhY3R1YWxseVxuICAgICAgLy8gaW5zdGFuY2VzIG9mIEVycm9yLlxuXG5cbiAgICAgIGlmIChfdHlwZW9mKGFjdHVhbCkgPT09ICdvYmplY3QnICYmIGFjdHVhbCAhPT0gbnVsbCAmJiBfdHlwZW9mKGV4cGVjdGVkKSA9PT0gJ29iamVjdCcgJiYgZXhwZWN0ZWQgIT09IG51bGwgJiYgJ3N0YWNrJyBpbiBhY3R1YWwgJiYgYWN0dWFsIGluc3RhbmNlb2YgRXJyb3IgJiYgJ3N0YWNrJyBpbiBleHBlY3RlZCAmJiBleHBlY3RlZCBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgICAgIGFjdHVhbCA9IGNvcHlFcnJvcihhY3R1YWwpO1xuICAgICAgICBleHBlY3RlZCA9IGNvcHlFcnJvcihleHBlY3RlZCk7XG4gICAgICB9XG5cbiAgICAgIGlmIChvcGVyYXRvciA9PT0gJ2RlZXBTdHJpY3RFcXVhbCcgfHwgb3BlcmF0b3IgPT09ICdzdHJpY3RFcXVhbCcpIHtcbiAgICAgICAgX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBfZ2V0UHJvdG90eXBlT2YoQXNzZXJ0aW9uRXJyb3IpLmNhbGwodGhpcywgY3JlYXRlRXJyRGlmZihhY3R1YWwsIGV4cGVjdGVkLCBvcGVyYXRvcikpKTtcbiAgICAgIH0gZWxzZSBpZiAob3BlcmF0b3IgPT09ICdub3REZWVwU3RyaWN0RXF1YWwnIHx8IG9wZXJhdG9yID09PSAnbm90U3RyaWN0RXF1YWwnKSB7XG4gICAgICAgIC8vIEluIGNhc2UgdGhlIG9iamVjdHMgYXJlIGVxdWFsIGJ1dCB0aGUgb3BlcmF0b3IgcmVxdWlyZXMgdW5lcXVhbCwgc2hvd1xuICAgICAgICAvLyB0aGUgZmlyc3Qgb2JqZWN0IGFuZCBzYXkgQSBlcXVhbHMgQlxuICAgICAgICB2YXIgYmFzZSA9IGtSZWFkYWJsZU9wZXJhdG9yW29wZXJhdG9yXTtcbiAgICAgICAgdmFyIHJlcyA9IGluc3BlY3RWYWx1ZShhY3R1YWwpLnNwbGl0KCdcXG4nKTsgLy8gSW4gY2FzZSBcImFjdHVhbFwiIGlzIGFuIG9iamVjdCwgaXQgc2hvdWxkIG5vdCBiZSByZWZlcmVuY2UgZXF1YWwuXG5cbiAgICAgICAgaWYgKG9wZXJhdG9yID09PSAnbm90U3RyaWN0RXF1YWwnICYmIF90eXBlb2YoYWN0dWFsKSA9PT0gJ29iamVjdCcgJiYgYWN0dWFsICE9PSBudWxsKSB7XG4gICAgICAgICAgYmFzZSA9IGtSZWFkYWJsZU9wZXJhdG9yLm5vdFN0cmljdEVxdWFsT2JqZWN0O1xuICAgICAgICB9IC8vIE9ubHkgcmVtb3ZlIGxpbmVzIGluIGNhc2UgaXQgbWFrZXMgc2Vuc2UgdG8gY29sbGFwc2UgdGhvc2UuXG4gICAgICAgIC8vIFRPRE86IEFjY2VwdCBlbnYgdG8gYWx3YXlzIHNob3cgdGhlIGZ1bGwgZXJyb3IuXG5cblxuICAgICAgICBpZiAocmVzLmxlbmd0aCA+IDMwKSB7XG4gICAgICAgICAgcmVzWzI2XSA9IFwiXCIuY29uY2F0KGJsdWUsIFwiLi4uXCIpLmNvbmNhdCh3aGl0ZSk7XG5cbiAgICAgICAgICB3aGlsZSAocmVzLmxlbmd0aCA+IDI3KSB7XG4gICAgICAgICAgICByZXMucG9wKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9IC8vIE9ubHkgcHJpbnQgYSBzaW5nbGUgaW5wdXQuXG5cblxuICAgICAgICBpZiAocmVzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgIF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgX2dldFByb3RvdHlwZU9mKEFzc2VydGlvbkVycm9yKS5jYWxsKHRoaXMsIFwiXCIuY29uY2F0KGJhc2UsIFwiIFwiKS5jb25jYXQocmVzWzBdKSkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgX2dldFByb3RvdHlwZU9mKEFzc2VydGlvbkVycm9yKS5jYWxsKHRoaXMsIFwiXCIuY29uY2F0KGJhc2UsIFwiXFxuXFxuXCIpLmNvbmNhdChyZXMuam9pbignXFxuJyksIFwiXFxuXCIpKSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciBfcmVzID0gaW5zcGVjdFZhbHVlKGFjdHVhbCk7XG5cbiAgICAgICAgdmFyIG90aGVyID0gJyc7XG4gICAgICAgIHZhciBrbm93bk9wZXJhdG9ycyA9IGtSZWFkYWJsZU9wZXJhdG9yW29wZXJhdG9yXTtcblxuICAgICAgICBpZiAob3BlcmF0b3IgPT09ICdub3REZWVwRXF1YWwnIHx8IG9wZXJhdG9yID09PSAnbm90RXF1YWwnKSB7XG4gICAgICAgICAgX3JlcyA9IFwiXCIuY29uY2F0KGtSZWFkYWJsZU9wZXJhdG9yW29wZXJhdG9yXSwgXCJcXG5cXG5cIikuY29uY2F0KF9yZXMpO1xuXG4gICAgICAgICAgaWYgKF9yZXMubGVuZ3RoID4gMTAyNCkge1xuICAgICAgICAgICAgX3JlcyA9IFwiXCIuY29uY2F0KF9yZXMuc2xpY2UoMCwgMTAyMSksIFwiLi4uXCIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBvdGhlciA9IFwiXCIuY29uY2F0KGluc3BlY3RWYWx1ZShleHBlY3RlZCkpO1xuXG4gICAgICAgICAgaWYgKF9yZXMubGVuZ3RoID4gNTEyKSB7XG4gICAgICAgICAgICBfcmVzID0gXCJcIi5jb25jYXQoX3Jlcy5zbGljZSgwLCA1MDkpLCBcIi4uLlwiKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAob3RoZXIubGVuZ3RoID4gNTEyKSB7XG4gICAgICAgICAgICBvdGhlciA9IFwiXCIuY29uY2F0KG90aGVyLnNsaWNlKDAsIDUwOSksIFwiLi4uXCIpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChvcGVyYXRvciA9PT0gJ2RlZXBFcXVhbCcgfHwgb3BlcmF0b3IgPT09ICdlcXVhbCcpIHtcbiAgICAgICAgICAgIF9yZXMgPSBcIlwiLmNvbmNhdChrbm93bk9wZXJhdG9ycywgXCJcXG5cXG5cIikuY29uY2F0KF9yZXMsIFwiXFxuXFxuc2hvdWxkIGVxdWFsXFxuXFxuXCIpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBvdGhlciA9IFwiIFwiLmNvbmNhdChvcGVyYXRvciwgXCIgXCIpLmNvbmNhdChvdGhlcik7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBfZ2V0UHJvdG90eXBlT2YoQXNzZXJ0aW9uRXJyb3IpLmNhbGwodGhpcywgXCJcIi5jb25jYXQoX3JlcykuY29uY2F0KG90aGVyKSkpO1xuICAgICAgfVxuICAgIH1cblxuICAgIEVycm9yLnN0YWNrVHJhY2VMaW1pdCA9IGxpbWl0O1xuICAgIF90aGlzLmdlbmVyYXRlZE1lc3NhZ2UgPSAhbWVzc2FnZTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksICduYW1lJywge1xuICAgICAgdmFsdWU6ICdBc3NlcnRpb25FcnJvciBbRVJSX0FTU0VSVElPTl0nLFxuICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIF90aGlzLmNvZGUgPSAnRVJSX0FTU0VSVElPTic7XG4gICAgX3RoaXMuYWN0dWFsID0gYWN0dWFsO1xuICAgIF90aGlzLmV4cGVjdGVkID0gZXhwZWN0ZWQ7XG4gICAgX3RoaXMub3BlcmF0b3IgPSBvcGVyYXRvcjtcblxuICAgIGlmIChFcnJvci5jYXB0dXJlU3RhY2tUcmFjZSkge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXJlc3RyaWN0ZWQtc3ludGF4XG4gICAgICBFcnJvci5jYXB0dXJlU3RhY2tUcmFjZShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgc3RhY2tTdGFydEZuKTtcbiAgICB9IC8vIENyZWF0ZSBlcnJvciBtZXNzYWdlIGluY2x1ZGluZyB0aGUgZXJyb3IgY29kZSBpbiB0aGUgbmFtZS5cblxuXG4gICAgX3RoaXMuc3RhY2s7IC8vIFJlc2V0IHRoZSBuYW1lLlxuXG4gICAgX3RoaXMubmFtZSA9ICdBc3NlcnRpb25FcnJvcic7XG4gICAgcmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKF90aGlzKTtcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhBc3NlcnRpb25FcnJvciwgW3tcbiAgICBrZXk6IFwidG9TdHJpbmdcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgICByZXR1cm4gXCJcIi5jb25jYXQodGhpcy5uYW1lLCBcIiBbXCIpLmNvbmNhdCh0aGlzLmNvZGUsIFwiXTogXCIpLmNvbmNhdCh0aGlzLm1lc3NhZ2UpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogaW5zcGVjdC5jdXN0b20sXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHZhbHVlKHJlY3Vyc2VUaW1lcywgY3R4KSB7XG4gICAgICAvLyBUaGlzIGxpbWl0cyB0aGUgYGFjdHVhbGAgYW5kIGBleHBlY3RlZGAgcHJvcGVydHkgZGVmYXVsdCBpbnNwZWN0aW9uIHRvXG4gICAgICAvLyB0aGUgbWluaW11bSBkZXB0aC4gT3RoZXJ3aXNlIHRob3NlIHZhbHVlcyB3b3VsZCBiZSB0b28gdmVyYm9zZSBjb21wYXJlZFxuICAgICAgLy8gdG8gdGhlIGFjdHVhbCBlcnJvciBtZXNzYWdlIHdoaWNoIGNvbnRhaW5zIGEgY29tYmluZWQgdmlldyBvZiB0aGVzZSB0d29cbiAgICAgIC8vIGlucHV0IHZhbHVlcy5cbiAgICAgIHJldHVybiBpbnNwZWN0KHRoaXMsIF9vYmplY3RTcHJlYWQoe30sIGN0eCwge1xuICAgICAgICBjdXN0b21JbnNwZWN0OiBmYWxzZSxcbiAgICAgICAgZGVwdGg6IDBcbiAgICAgIH0pKTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gQXNzZXJ0aW9uRXJyb3I7XG59KF93cmFwTmF0aXZlU3VwZXIoRXJyb3IpKTtcblxubW9kdWxlLmV4cG9ydHMgPSBBc3NlcnRpb25FcnJvcjsiLCIvLyBDdXJyZW50bHkgaW4gc3luYyB3aXRoIE5vZGUuanMgbGliL2ludGVybmFsL2Vycm9ycy5qc1xuLy8gaHR0cHM6Ly9naXRodWIuY29tL25vZGVqcy9ub2RlL2NvbW1pdC8zYjA0NDk2MmM0OGZlMzEzOTA1ODc3YTk2YjVkMDg5NGE1NDA0ZjZmXG5cbi8qIGVzbGludCBub2RlLWNvcmUvZG9jdW1lbnRlZC1lcnJvcnM6IFwiZXJyb3JcIiAqL1xuXG4vKiBlc2xpbnQgbm9kZS1jb3JlL2FscGhhYmV0aXplLWVycm9yczogXCJlcnJvclwiICovXG5cbi8qIGVzbGludCBub2RlLWNvcmUvcHJlZmVyLXV0aWwtZm9ybWF0LWVycm9yczogXCJlcnJvclwiICovXG4ndXNlIHN0cmljdCc7IC8vIFRoZSB3aG9sZSBwb2ludCBiZWhpbmQgdGhpcyBpbnRlcm5hbCBtb2R1bGUgaXMgdG8gYWxsb3cgTm9kZS5qcyB0byBub1xuLy8gbG9uZ2VyIGJlIGZvcmNlZCB0byB0cmVhdCBldmVyeSBlcnJvciBtZXNzYWdlIGNoYW5nZSBhcyBhIHNlbXZlci1tYWpvclxuLy8gY2hhbmdlLiBUaGUgTm9kZUVycm9yIGNsYXNzZXMgaGVyZSBhbGwgZXhwb3NlIGEgYGNvZGVgIHByb3BlcnR5IHdob3NlXG4vLyB2YWx1ZSBzdGF0aWNhbGx5IGFuZCBwZXJtYW5lbnRseSBpZGVudGlmaWVzIHRoZSBlcnJvci4gV2hpbGUgdGhlIGVycm9yXG4vLyBtZXNzYWdlIG1heSBjaGFuZ2UsIHRoZSBjb2RlIHNob3VsZCBub3QuXG5cbmZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH07IH0gZWxzZSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTsgfSByZXR1cm4gX3R5cGVvZihvYmopOyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKGNhbGwgJiYgKF90eXBlb2YoY2FsbCkgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikpIHsgcmV0dXJuIGNhbGw7IH0gcmV0dXJuIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZik7IH1cblxuZnVuY3Rpb24gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKSB7IGlmIChzZWxmID09PSB2b2lkIDApIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IF9nZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5nZXRQcm90b3R5cGVPZiA6IGZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IHJldHVybiBvLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2Yobyk7IH07IHJldHVybiBfZ2V0UHJvdG90eXBlT2Yobyk7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uXCIpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIF9zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcyk7IH1cblxuZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgX3NldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IG8uX19wcm90b19fID0gcDsgcmV0dXJuIG87IH07IHJldHVybiBfc2V0UHJvdG90eXBlT2YobywgcCk7IH1cblxudmFyIGNvZGVzID0ge307IC8vIExhenkgbG9hZGVkXG5cbnZhciBhc3NlcnQ7XG52YXIgdXRpbDtcblxuZnVuY3Rpb24gY3JlYXRlRXJyb3JUeXBlKGNvZGUsIG1lc3NhZ2UsIEJhc2UpIHtcbiAgaWYgKCFCYXNlKSB7XG4gICAgQmFzZSA9IEVycm9yO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0TWVzc2FnZShhcmcxLCBhcmcyLCBhcmczKSB7XG4gICAgaWYgKHR5cGVvZiBtZXNzYWdlID09PSAnc3RyaW5nJykge1xuICAgICAgcmV0dXJuIG1lc3NhZ2U7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBtZXNzYWdlKGFyZzEsIGFyZzIsIGFyZzMpO1xuICAgIH1cbiAgfVxuXG4gIHZhciBOb2RlRXJyb3IgPVxuICAvKiNfX1BVUkVfXyovXG4gIGZ1bmN0aW9uIChfQmFzZSkge1xuICAgIF9pbmhlcml0cyhOb2RlRXJyb3IsIF9CYXNlKTtcblxuICAgIGZ1bmN0aW9uIE5vZGVFcnJvcihhcmcxLCBhcmcyLCBhcmczKSB7XG4gICAgICB2YXIgX3RoaXM7XG5cbiAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBOb2RlRXJyb3IpO1xuXG4gICAgICBfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIF9nZXRQcm90b3R5cGVPZihOb2RlRXJyb3IpLmNhbGwodGhpcywgZ2V0TWVzc2FnZShhcmcxLCBhcmcyLCBhcmczKSkpO1xuICAgICAgX3RoaXMuY29kZSA9IGNvZGU7XG4gICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuXG4gICAgcmV0dXJuIE5vZGVFcnJvcjtcbiAgfShCYXNlKTtcblxuICBjb2Rlc1tjb2RlXSA9IE5vZGVFcnJvcjtcbn0gLy8gaHR0cHM6Ly9naXRodWIuY29tL25vZGVqcy9ub2RlL2Jsb2IvdjEwLjguMC9saWIvaW50ZXJuYWwvZXJyb3JzLmpzXG5cblxuZnVuY3Rpb24gb25lT2YoZXhwZWN0ZWQsIHRoaW5nKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KGV4cGVjdGVkKSkge1xuICAgIHZhciBsZW4gPSBleHBlY3RlZC5sZW5ndGg7XG4gICAgZXhwZWN0ZWQgPSBleHBlY3RlZC5tYXAoZnVuY3Rpb24gKGkpIHtcbiAgICAgIHJldHVybiBTdHJpbmcoaSk7XG4gICAgfSk7XG5cbiAgICBpZiAobGVuID4gMikge1xuICAgICAgcmV0dXJuIFwib25lIG9mIFwiLmNvbmNhdCh0aGluZywgXCIgXCIpLmNvbmNhdChleHBlY3RlZC5zbGljZSgwLCBsZW4gLSAxKS5qb2luKCcsICcpLCBcIiwgb3IgXCIpICsgZXhwZWN0ZWRbbGVuIC0gMV07XG4gICAgfSBlbHNlIGlmIChsZW4gPT09IDIpIHtcbiAgICAgIHJldHVybiBcIm9uZSBvZiBcIi5jb25jYXQodGhpbmcsIFwiIFwiKS5jb25jYXQoZXhwZWN0ZWRbMF0sIFwiIG9yIFwiKS5jb25jYXQoZXhwZWN0ZWRbMV0pO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gXCJvZiBcIi5jb25jYXQodGhpbmcsIFwiIFwiKS5jb25jYXQoZXhwZWN0ZWRbMF0pO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gXCJvZiBcIi5jb25jYXQodGhpbmcsIFwiIFwiKS5jb25jYXQoU3RyaW5nKGV4cGVjdGVkKSk7XG4gIH1cbn0gLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvU3RyaW5nL3N0YXJ0c1dpdGhcblxuXG5mdW5jdGlvbiBzdGFydHNXaXRoKHN0ciwgc2VhcmNoLCBwb3MpIHtcbiAgcmV0dXJuIHN0ci5zdWJzdHIoIXBvcyB8fCBwb3MgPCAwID8gMCA6ICtwb3MsIHNlYXJjaC5sZW5ndGgpID09PSBzZWFyY2g7XG59IC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL1N0cmluZy9lbmRzV2l0aFxuXG5cbmZ1bmN0aW9uIGVuZHNXaXRoKHN0ciwgc2VhcmNoLCB0aGlzX2xlbikge1xuICBpZiAodGhpc19sZW4gPT09IHVuZGVmaW5lZCB8fCB0aGlzX2xlbiA+IHN0ci5sZW5ndGgpIHtcbiAgICB0aGlzX2xlbiA9IHN0ci5sZW5ndGg7XG4gIH1cblxuICByZXR1cm4gc3RyLnN1YnN0cmluZyh0aGlzX2xlbiAtIHNlYXJjaC5sZW5ndGgsIHRoaXNfbGVuKSA9PT0gc2VhcmNoO1xufSAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9HbG9iYWxfT2JqZWN0cy9TdHJpbmcvaW5jbHVkZXNcblxuXG5mdW5jdGlvbiBpbmNsdWRlcyhzdHIsIHNlYXJjaCwgc3RhcnQpIHtcbiAgaWYgKHR5cGVvZiBzdGFydCAhPT0gJ251bWJlcicpIHtcbiAgICBzdGFydCA9IDA7XG4gIH1cblxuICBpZiAoc3RhcnQgKyBzZWFyY2gubGVuZ3RoID4gc3RyLmxlbmd0aCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gc3RyLmluZGV4T2Yoc2VhcmNoLCBzdGFydCkgIT09IC0xO1xuICB9XG59XG5cbmNyZWF0ZUVycm9yVHlwZSgnRVJSX0FNQklHVU9VU19BUkdVTUVOVCcsICdUaGUgXCIlc1wiIGFyZ3VtZW50IGlzIGFtYmlndW91cy4gJXMnLCBUeXBlRXJyb3IpO1xuY3JlYXRlRXJyb3JUeXBlKCdFUlJfSU5WQUxJRF9BUkdfVFlQRScsIGZ1bmN0aW9uIChuYW1lLCBleHBlY3RlZCwgYWN0dWFsKSB7XG4gIGlmIChhc3NlcnQgPT09IHVuZGVmaW5lZCkgYXNzZXJ0ID0gcmVxdWlyZSgnLi4vYXNzZXJ0Jyk7XG4gIGFzc2VydCh0eXBlb2YgbmFtZSA9PT0gJ3N0cmluZycsIFwiJ25hbWUnIG11c3QgYmUgYSBzdHJpbmdcIik7IC8vIGRldGVybWluZXI6ICdtdXN0IGJlJyBvciAnbXVzdCBub3QgYmUnXG5cbiAgdmFyIGRldGVybWluZXI7XG5cbiAgaWYgKHR5cGVvZiBleHBlY3RlZCA9PT0gJ3N0cmluZycgJiYgc3RhcnRzV2l0aChleHBlY3RlZCwgJ25vdCAnKSkge1xuICAgIGRldGVybWluZXIgPSAnbXVzdCBub3QgYmUnO1xuICAgIGV4cGVjdGVkID0gZXhwZWN0ZWQucmVwbGFjZSgvXm5vdCAvLCAnJyk7XG4gIH0gZWxzZSB7XG4gICAgZGV0ZXJtaW5lciA9ICdtdXN0IGJlJztcbiAgfVxuXG4gIHZhciBtc2c7XG5cbiAgaWYgKGVuZHNXaXRoKG5hbWUsICcgYXJndW1lbnQnKSkge1xuICAgIC8vIEZvciBjYXNlcyBsaWtlICdmaXJzdCBhcmd1bWVudCdcbiAgICBtc2cgPSBcIlRoZSBcIi5jb25jYXQobmFtZSwgXCIgXCIpLmNvbmNhdChkZXRlcm1pbmVyLCBcIiBcIikuY29uY2F0KG9uZU9mKGV4cGVjdGVkLCAndHlwZScpKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgdHlwZSA9IGluY2x1ZGVzKG5hbWUsICcuJykgPyAncHJvcGVydHknIDogJ2FyZ3VtZW50JztcbiAgICBtc2cgPSBcIlRoZSBcXFwiXCIuY29uY2F0KG5hbWUsIFwiXFxcIiBcIikuY29uY2F0KHR5cGUsIFwiIFwiKS5jb25jYXQoZGV0ZXJtaW5lciwgXCIgXCIpLmNvbmNhdChvbmVPZihleHBlY3RlZCwgJ3R5cGUnKSk7XG4gIH0gLy8gVE9ETyhCcmlkZ2VBUik6IEltcHJvdmUgdGhlIG91dHB1dCBieSBzaG93aW5nIGBudWxsYCBhbmQgc2ltaWxhci5cblxuXG4gIG1zZyArPSBcIi4gUmVjZWl2ZWQgdHlwZSBcIi5jb25jYXQoX3R5cGVvZihhY3R1YWwpKTtcbiAgcmV0dXJuIG1zZztcbn0sIFR5cGVFcnJvcik7XG5jcmVhdGVFcnJvclR5cGUoJ0VSUl9JTlZBTElEX0FSR19WQUxVRScsIGZ1bmN0aW9uIChuYW1lLCB2YWx1ZSkge1xuICB2YXIgcmVhc29uID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMl0gOiAnaXMgaW52YWxpZCc7XG4gIGlmICh1dGlsID09PSB1bmRlZmluZWQpIHV0aWwgPSByZXF1aXJlKCd1dGlsLycpO1xuICB2YXIgaW5zcGVjdGVkID0gdXRpbC5pbnNwZWN0KHZhbHVlKTtcblxuICBpZiAoaW5zcGVjdGVkLmxlbmd0aCA+IDEyOCkge1xuICAgIGluc3BlY3RlZCA9IFwiXCIuY29uY2F0KGluc3BlY3RlZC5zbGljZSgwLCAxMjgpLCBcIi4uLlwiKTtcbiAgfVxuXG4gIHJldHVybiBcIlRoZSBhcmd1bWVudCAnXCIuY29uY2F0KG5hbWUsIFwiJyBcIikuY29uY2F0KHJlYXNvbiwgXCIuIFJlY2VpdmVkIFwiKS5jb25jYXQoaW5zcGVjdGVkKTtcbn0sIFR5cGVFcnJvciwgUmFuZ2VFcnJvcik7XG5jcmVhdGVFcnJvclR5cGUoJ0VSUl9JTlZBTElEX1JFVFVSTl9WQUxVRScsIGZ1bmN0aW9uIChpbnB1dCwgbmFtZSwgdmFsdWUpIHtcbiAgdmFyIHR5cGU7XG5cbiAgaWYgKHZhbHVlICYmIHZhbHVlLmNvbnN0cnVjdG9yICYmIHZhbHVlLmNvbnN0cnVjdG9yLm5hbWUpIHtcbiAgICB0eXBlID0gXCJpbnN0YW5jZSBvZiBcIi5jb25jYXQodmFsdWUuY29uc3RydWN0b3IubmFtZSk7XG4gIH0gZWxzZSB7XG4gICAgdHlwZSA9IFwidHlwZSBcIi5jb25jYXQoX3R5cGVvZih2YWx1ZSkpO1xuICB9XG5cbiAgcmV0dXJuIFwiRXhwZWN0ZWQgXCIuY29uY2F0KGlucHV0LCBcIiB0byBiZSByZXR1cm5lZCBmcm9tIHRoZSBcXFwiXCIpLmNvbmNhdChuYW1lLCBcIlxcXCJcIikgKyBcIiBmdW5jdGlvbiBidXQgZ290IFwiLmNvbmNhdCh0eXBlLCBcIi5cIik7XG59LCBUeXBlRXJyb3IpO1xuY3JlYXRlRXJyb3JUeXBlKCdFUlJfTUlTU0lOR19BUkdTJywgZnVuY3Rpb24gKCkge1xuICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICB9XG5cbiAgaWYgKGFzc2VydCA9PT0gdW5kZWZpbmVkKSBhc3NlcnQgPSByZXF1aXJlKCcuLi9hc3NlcnQnKTtcbiAgYXNzZXJ0KGFyZ3MubGVuZ3RoID4gMCwgJ0F0IGxlYXN0IG9uZSBhcmcgbmVlZHMgdG8gYmUgc3BlY2lmaWVkJyk7XG4gIHZhciBtc2cgPSAnVGhlICc7XG4gIHZhciBsZW4gPSBhcmdzLmxlbmd0aDtcbiAgYXJncyA9IGFyZ3MubWFwKGZ1bmN0aW9uIChhKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdChhLCBcIlxcXCJcIik7XG4gIH0pO1xuXG4gIHN3aXRjaCAobGVuKSB7XG4gICAgY2FzZSAxOlxuICAgICAgbXNnICs9IFwiXCIuY29uY2F0KGFyZ3NbMF0sIFwiIGFyZ3VtZW50XCIpO1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlIDI6XG4gICAgICBtc2cgKz0gXCJcIi5jb25jYXQoYXJnc1swXSwgXCIgYW5kIFwiKS5jb25jYXQoYXJnc1sxXSwgXCIgYXJndW1lbnRzXCIpO1xuICAgICAgYnJlYWs7XG5cbiAgICBkZWZhdWx0OlxuICAgICAgbXNnICs9IGFyZ3Muc2xpY2UoMCwgbGVuIC0gMSkuam9pbignLCAnKTtcbiAgICAgIG1zZyArPSBcIiwgYW5kIFwiLmNvbmNhdChhcmdzW2xlbiAtIDFdLCBcIiBhcmd1bWVudHNcIik7XG4gICAgICBicmVhaztcbiAgfVxuXG4gIHJldHVybiBcIlwiLmNvbmNhdChtc2csIFwiIG11c3QgYmUgc3BlY2lmaWVkXCIpO1xufSwgVHlwZUVycm9yKTtcbm1vZHVsZS5leHBvcnRzLmNvZGVzID0gY29kZXM7IiwiLy8gQ3VycmVudGx5IGluIHN5bmMgd2l0aCBOb2RlLmpzIGxpYi9pbnRlcm5hbC91dGlsL2NvbXBhcmlzb25zLmpzXG4vLyBodHRwczovL2dpdGh1Yi5jb20vbm9kZWpzL25vZGUvY29tbWl0LzExMmNjN2MyNzU1MTI1NGFhMmIxNzA5OGZiNzc0ODY3ZjA1ZWQwZDlcbid1c2Ugc3RyaWN0JztcblxuZnVuY3Rpb24gX3NsaWNlZFRvQXJyYXkoYXJyLCBpKSB7IHJldHVybiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB8fCBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB8fCBfbm9uSXRlcmFibGVSZXN0KCk7IH1cblxuZnVuY3Rpb24gX25vbkl0ZXJhYmxlUmVzdCgpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2VcIik7IH1cblxuZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgeyB2YXIgX2FyciA9IFtdOyB2YXIgX24gPSB0cnVlOyB2YXIgX2QgPSBmYWxzZTsgdmFyIF9lID0gdW5kZWZpbmVkOyB0cnkgeyBmb3IgKHZhciBfaSA9IGFycltTeW1ib2wuaXRlcmF0b3JdKCksIF9zOyAhKF9uID0gKF9zID0gX2kubmV4dCgpKS5kb25lKTsgX24gPSB0cnVlKSB7IF9hcnIucHVzaChfcy52YWx1ZSk7IGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhazsgfSB9IGNhdGNoIChlcnIpIHsgX2QgPSB0cnVlOyBfZSA9IGVycjsgfSBmaW5hbGx5IHsgdHJ5IHsgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSAhPSBudWxsKSBfaVtcInJldHVyblwiXSgpOyB9IGZpbmFsbHkgeyBpZiAoX2QpIHRocm93IF9lOyB9IH0gcmV0dXJuIF9hcnI7IH1cblxuZnVuY3Rpb24gX2FycmF5V2l0aEhvbGVzKGFycikgeyBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyOyB9XG5cbmZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH07IH0gZWxzZSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTsgfSByZXR1cm4gX3R5cGVvZihvYmopOyB9XG5cbnZhciByZWdleEZsYWdzU3VwcG9ydGVkID0gL2EvZy5mbGFncyAhPT0gdW5kZWZpbmVkO1xuXG52YXIgYXJyYXlGcm9tU2V0ID0gZnVuY3Rpb24gYXJyYXlGcm9tU2V0KHNldCkge1xuICB2YXIgYXJyYXkgPSBbXTtcbiAgc2V0LmZvckVhY2goZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgcmV0dXJuIGFycmF5LnB1c2godmFsdWUpO1xuICB9KTtcbiAgcmV0dXJuIGFycmF5O1xufTtcblxudmFyIGFycmF5RnJvbU1hcCA9IGZ1bmN0aW9uIGFycmF5RnJvbU1hcChtYXApIHtcbiAgdmFyIGFycmF5ID0gW107XG4gIG1hcC5mb3JFYWNoKGZ1bmN0aW9uICh2YWx1ZSwga2V5KSB7XG4gICAgcmV0dXJuIGFycmF5LnB1c2goW2tleSwgdmFsdWVdKTtcbiAgfSk7XG4gIHJldHVybiBhcnJheTtcbn07XG5cbnZhciBvYmplY3RJcyA9IE9iamVjdC5pcyA/IE9iamVjdC5pcyA6IHJlcXVpcmUoJ29iamVjdC1pcycpO1xudmFyIG9iamVjdEdldE93blByb3BlcnR5U3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPyBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzIDogZnVuY3Rpb24gKCkge1xuICByZXR1cm4gW107XG59O1xudmFyIG51bWJlcklzTmFOID0gTnVtYmVyLmlzTmFOID8gTnVtYmVyLmlzTmFOIDogcmVxdWlyZSgnaXMtbmFuJyk7XG5cbmZ1bmN0aW9uIHVuY3VycnlUaGlzKGYpIHtcbiAgcmV0dXJuIGYuY2FsbC5iaW5kKGYpO1xufVxuXG52YXIgaGFzT3duUHJvcGVydHkgPSB1bmN1cnJ5VGhpcyhPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5KTtcbnZhciBwcm9wZXJ0eUlzRW51bWVyYWJsZSA9IHVuY3VycnlUaGlzKE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUpO1xudmFyIG9iamVjdFRvU3RyaW5nID0gdW5jdXJyeVRoaXMoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZyk7XG5cbnZhciBfcmVxdWlyZSR0eXBlcyA9IHJlcXVpcmUoJ3V0aWwvJykudHlwZXMsXG4gICAgaXNBbnlBcnJheUJ1ZmZlciA9IF9yZXF1aXJlJHR5cGVzLmlzQW55QXJyYXlCdWZmZXIsXG4gICAgaXNBcnJheUJ1ZmZlclZpZXcgPSBfcmVxdWlyZSR0eXBlcy5pc0FycmF5QnVmZmVyVmlldyxcbiAgICBpc0RhdGUgPSBfcmVxdWlyZSR0eXBlcy5pc0RhdGUsXG4gICAgaXNNYXAgPSBfcmVxdWlyZSR0eXBlcy5pc01hcCxcbiAgICBpc1JlZ0V4cCA9IF9yZXF1aXJlJHR5cGVzLmlzUmVnRXhwLFxuICAgIGlzU2V0ID0gX3JlcXVpcmUkdHlwZXMuaXNTZXQsXG4gICAgaXNOYXRpdmVFcnJvciA9IF9yZXF1aXJlJHR5cGVzLmlzTmF0aXZlRXJyb3IsXG4gICAgaXNCb3hlZFByaW1pdGl2ZSA9IF9yZXF1aXJlJHR5cGVzLmlzQm94ZWRQcmltaXRpdmUsXG4gICAgaXNOdW1iZXJPYmplY3QgPSBfcmVxdWlyZSR0eXBlcy5pc051bWJlck9iamVjdCxcbiAgICBpc1N0cmluZ09iamVjdCA9IF9yZXF1aXJlJHR5cGVzLmlzU3RyaW5nT2JqZWN0LFxuICAgIGlzQm9vbGVhbk9iamVjdCA9IF9yZXF1aXJlJHR5cGVzLmlzQm9vbGVhbk9iamVjdCxcbiAgICBpc0JpZ0ludE9iamVjdCA9IF9yZXF1aXJlJHR5cGVzLmlzQmlnSW50T2JqZWN0LFxuICAgIGlzU3ltYm9sT2JqZWN0ID0gX3JlcXVpcmUkdHlwZXMuaXNTeW1ib2xPYmplY3QsXG4gICAgaXNGbG9hdDMyQXJyYXkgPSBfcmVxdWlyZSR0eXBlcy5pc0Zsb2F0MzJBcnJheSxcbiAgICBpc0Zsb2F0NjRBcnJheSA9IF9yZXF1aXJlJHR5cGVzLmlzRmxvYXQ2NEFycmF5O1xuXG5mdW5jdGlvbiBpc05vbkluZGV4KGtleSkge1xuICBpZiAoa2V5Lmxlbmd0aCA9PT0gMCB8fCBrZXkubGVuZ3RoID4gMTApIHJldHVybiB0cnVlO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwga2V5Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGNvZGUgPSBrZXkuY2hhckNvZGVBdChpKTtcbiAgICBpZiAoY29kZSA8IDQ4IHx8IGNvZGUgPiA1NykgcmV0dXJuIHRydWU7XG4gIH0gLy8gVGhlIG1heGltdW0gc2l6ZSBmb3IgYW4gYXJyYXkgaXMgMiAqKiAzMiAtMS5cblxuXG4gIHJldHVybiBrZXkubGVuZ3RoID09PSAxMCAmJiBrZXkgPj0gTWF0aC5wb3coMiwgMzIpO1xufVxuXG5mdW5jdGlvbiBnZXRPd25Ob25JbmRleFByb3BlcnRpZXModmFsdWUpIHtcbiAgcmV0dXJuIE9iamVjdC5rZXlzKHZhbHVlKS5maWx0ZXIoaXNOb25JbmRleCkuY29uY2F0KG9iamVjdEdldE93blByb3BlcnR5U3ltYm9scyh2YWx1ZSkuZmlsdGVyKE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuYmluZCh2YWx1ZSkpKTtcbn0gLy8gVGFrZW4gZnJvbSBodHRwczovL2dpdGh1Yi5jb20vZmVyb3NzL2J1ZmZlci9ibG9iLzY4MGU5ZTVlNDg4ZjIyYWFjMjc1OTlhNTdkYzg0NGE2MzE1OTI4ZGQvaW5kZXguanNcbi8vIG9yaWdpbmFsIG5vdGljZTpcblxuLyohXG4gKiBUaGUgYnVmZmVyIG1vZHVsZSBmcm9tIG5vZGUuanMsIGZvciB0aGUgYnJvd3Nlci5cbiAqXG4gKiBAYXV0aG9yICAgRmVyb3NzIEFib3VraGFkaWplaCA8ZmVyb3NzQGZlcm9zcy5vcmc+IDxodHRwOi8vZmVyb3NzLm9yZz5cbiAqIEBsaWNlbnNlICBNSVRcbiAqL1xuXG5cbmZ1bmN0aW9uIGNvbXBhcmUoYSwgYikge1xuICBpZiAoYSA9PT0gYikge1xuICAgIHJldHVybiAwO1xuICB9XG5cbiAgdmFyIHggPSBhLmxlbmd0aDtcbiAgdmFyIHkgPSBiLmxlbmd0aDtcblxuICBmb3IgKHZhciBpID0gMCwgbGVuID0gTWF0aC5taW4oeCwgeSk7IGkgPCBsZW47ICsraSkge1xuICAgIGlmIChhW2ldICE9PSBiW2ldKSB7XG4gICAgICB4ID0gYVtpXTtcbiAgICAgIHkgPSBiW2ldO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgaWYgKHggPCB5KSB7XG4gICAgcmV0dXJuIC0xO1xuICB9XG5cbiAgaWYgKHkgPCB4KSB7XG4gICAgcmV0dXJuIDE7XG4gIH1cblxuICByZXR1cm4gMDtcbn1cblxudmFyIE9OTFlfRU5VTUVSQUJMRSA9IHVuZGVmaW5lZDtcbnZhciBrU3RyaWN0ID0gdHJ1ZTtcbnZhciBrTG9vc2UgPSBmYWxzZTtcbnZhciBrTm9JdGVyYXRvciA9IDA7XG52YXIga0lzQXJyYXkgPSAxO1xudmFyIGtJc1NldCA9IDI7XG52YXIga0lzTWFwID0gMzsgLy8gQ2hlY2sgaWYgdGhleSBoYXZlIHRoZSBzYW1lIHNvdXJjZSBhbmQgZmxhZ3NcblxuZnVuY3Rpb24gYXJlU2ltaWxhclJlZ0V4cHMoYSwgYikge1xuICByZXR1cm4gcmVnZXhGbGFnc1N1cHBvcnRlZCA/IGEuc291cmNlID09PSBiLnNvdXJjZSAmJiBhLmZsYWdzID09PSBiLmZsYWdzIDogUmVnRXhwLnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGEpID09PSBSZWdFeHAucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoYik7XG59XG5cbmZ1bmN0aW9uIGFyZVNpbWlsYXJGbG9hdEFycmF5cyhhLCBiKSB7XG4gIGlmIChhLmJ5dGVMZW5ndGggIT09IGIuYnl0ZUxlbmd0aCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGZvciAodmFyIG9mZnNldCA9IDA7IG9mZnNldCA8IGEuYnl0ZUxlbmd0aDsgb2Zmc2V0KyspIHtcbiAgICBpZiAoYVtvZmZzZXRdICE9PSBiW29mZnNldF0pIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn1cblxuZnVuY3Rpb24gYXJlU2ltaWxhclR5cGVkQXJyYXlzKGEsIGIpIHtcbiAgaWYgKGEuYnl0ZUxlbmd0aCAhPT0gYi5ieXRlTGVuZ3RoKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcmV0dXJuIGNvbXBhcmUobmV3IFVpbnQ4QXJyYXkoYS5idWZmZXIsIGEuYnl0ZU9mZnNldCwgYS5ieXRlTGVuZ3RoKSwgbmV3IFVpbnQ4QXJyYXkoYi5idWZmZXIsIGIuYnl0ZU9mZnNldCwgYi5ieXRlTGVuZ3RoKSkgPT09IDA7XG59XG5cbmZ1bmN0aW9uIGFyZUVxdWFsQXJyYXlCdWZmZXJzKGJ1ZjEsIGJ1ZjIpIHtcbiAgcmV0dXJuIGJ1ZjEuYnl0ZUxlbmd0aCA9PT0gYnVmMi5ieXRlTGVuZ3RoICYmIGNvbXBhcmUobmV3IFVpbnQ4QXJyYXkoYnVmMSksIG5ldyBVaW50OEFycmF5KGJ1ZjIpKSA9PT0gMDtcbn1cblxuZnVuY3Rpb24gaXNFcXVhbEJveGVkUHJpbWl0aXZlKHZhbDEsIHZhbDIpIHtcbiAgaWYgKGlzTnVtYmVyT2JqZWN0KHZhbDEpKSB7XG4gICAgcmV0dXJuIGlzTnVtYmVyT2JqZWN0KHZhbDIpICYmIG9iamVjdElzKE51bWJlci5wcm90b3R5cGUudmFsdWVPZi5jYWxsKHZhbDEpLCBOdW1iZXIucHJvdG90eXBlLnZhbHVlT2YuY2FsbCh2YWwyKSk7XG4gIH1cblxuICBpZiAoaXNTdHJpbmdPYmplY3QodmFsMSkpIHtcbiAgICByZXR1cm4gaXNTdHJpbmdPYmplY3QodmFsMikgJiYgU3RyaW5nLnByb3RvdHlwZS52YWx1ZU9mLmNhbGwodmFsMSkgPT09IFN0cmluZy5wcm90b3R5cGUudmFsdWVPZi5jYWxsKHZhbDIpO1xuICB9XG5cbiAgaWYgKGlzQm9vbGVhbk9iamVjdCh2YWwxKSkge1xuICAgIHJldHVybiBpc0Jvb2xlYW5PYmplY3QodmFsMikgJiYgQm9vbGVhbi5wcm90b3R5cGUudmFsdWVPZi5jYWxsKHZhbDEpID09PSBCb29sZWFuLnByb3RvdHlwZS52YWx1ZU9mLmNhbGwodmFsMik7XG4gIH1cblxuICBpZiAoaXNCaWdJbnRPYmplY3QodmFsMSkpIHtcbiAgICByZXR1cm4gaXNCaWdJbnRPYmplY3QodmFsMikgJiYgQmlnSW50LnByb3RvdHlwZS52YWx1ZU9mLmNhbGwodmFsMSkgPT09IEJpZ0ludC5wcm90b3R5cGUudmFsdWVPZi5jYWxsKHZhbDIpO1xuICB9XG5cbiAgcmV0dXJuIGlzU3ltYm9sT2JqZWN0KHZhbDIpICYmIFN5bWJvbC5wcm90b3R5cGUudmFsdWVPZi5jYWxsKHZhbDEpID09PSBTeW1ib2wucHJvdG90eXBlLnZhbHVlT2YuY2FsbCh2YWwyKTtcbn0gLy8gTm90ZXM6IFR5cGUgdGFncyBhcmUgaGlzdG9yaWNhbCBbW0NsYXNzXV0gcHJvcGVydGllcyB0aGF0IGNhbiBiZSBzZXQgYnlcbi8vIEZ1bmN0aW9uVGVtcGxhdGU6OlNldENsYXNzTmFtZSgpIGluIEMrKyBvciBTeW1ib2wudG9TdHJpbmdUYWcgaW4gSlNcbi8vIGFuZCByZXRyaWV2ZWQgdXNpbmcgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG9iaikgaW4gSlNcbi8vIFNlZSBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1vYmplY3QucHJvdG90eXBlLnRvc3RyaW5nXG4vLyBmb3IgYSBsaXN0IG9mIHRhZ3MgcHJlLWRlZmluZWQgaW4gdGhlIHNwZWMuXG4vLyBUaGVyZSBhcmUgc29tZSB1bnNwZWNpZmllZCB0YWdzIGluIHRoZSB3aWxkIHRvbyAoZS5nLiB0eXBlZCBhcnJheSB0YWdzKS5cbi8vIFNpbmNlIHRhZ3MgY2FuIGJlIGFsdGVyZWQsIHRoZXkgb25seSBzZXJ2ZSBmYXN0IGZhaWx1cmVzXG4vL1xuLy8gVHlwZWQgYXJyYXlzIGFuZCBidWZmZXJzIGFyZSBjaGVja2VkIGJ5IGNvbXBhcmluZyB0aGUgY29udGVudCBpbiB0aGVpclxuLy8gdW5kZXJseWluZyBBcnJheUJ1ZmZlci4gVGhpcyBvcHRpbWl6YXRpb24gcmVxdWlyZXMgdGhhdCBpdCdzXG4vLyByZWFzb25hYmxlIHRvIGludGVycHJldCB0aGVpciB1bmRlcmx5aW5nIG1lbW9yeSBpbiB0aGUgc2FtZSB3YXksXG4vLyB3aGljaCBpcyBjaGVja2VkIGJ5IGNvbXBhcmluZyB0aGVpciB0eXBlIHRhZ3MuXG4vLyAoZS5nLiBhIFVpbnQ4QXJyYXkgYW5kIGEgVWludDE2QXJyYXkgd2l0aCB0aGUgc2FtZSBtZW1vcnkgY29udGVudFxuLy8gY291bGQgc3RpbGwgYmUgZGlmZmVyZW50IGJlY2F1c2UgdGhleSB3aWxsIGJlIGludGVycHJldGVkIGRpZmZlcmVudGx5KS5cbi8vXG4vLyBGb3Igc3RyaWN0IGNvbXBhcmlzb24sIG9iamVjdHMgc2hvdWxkIGhhdmVcbi8vIGEpIFRoZSBzYW1lIGJ1aWx0LWluIHR5cGUgdGFnc1xuLy8gYikgVGhlIHNhbWUgcHJvdG90eXBlcy5cblxuXG5mdW5jdGlvbiBpbm5lckRlZXBFcXVhbCh2YWwxLCB2YWwyLCBzdHJpY3QsIG1lbW9zKSB7XG4gIC8vIEFsbCBpZGVudGljYWwgdmFsdWVzIGFyZSBlcXVpdmFsZW50LCBhcyBkZXRlcm1pbmVkIGJ5ID09PS5cbiAgaWYgKHZhbDEgPT09IHZhbDIpIHtcbiAgICBpZiAodmFsMSAhPT0gMCkgcmV0dXJuIHRydWU7XG4gICAgcmV0dXJuIHN0cmljdCA/IG9iamVjdElzKHZhbDEsIHZhbDIpIDogdHJ1ZTtcbiAgfSAvLyBDaGVjayBtb3JlIGNsb3NlbHkgaWYgdmFsMSBhbmQgdmFsMiBhcmUgZXF1YWwuXG5cblxuICBpZiAoc3RyaWN0KSB7XG4gICAgaWYgKF90eXBlb2YodmFsMSkgIT09ICdvYmplY3QnKSB7XG4gICAgICByZXR1cm4gdHlwZW9mIHZhbDEgPT09ICdudW1iZXInICYmIG51bWJlcklzTmFOKHZhbDEpICYmIG51bWJlcklzTmFOKHZhbDIpO1xuICAgIH1cblxuICAgIGlmIChfdHlwZW9mKHZhbDIpICE9PSAnb2JqZWN0JyB8fCB2YWwxID09PSBudWxsIHx8IHZhbDIgPT09IG51bGwpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBpZiAoT2JqZWN0LmdldFByb3RvdHlwZU9mKHZhbDEpICE9PSBPYmplY3QuZ2V0UHJvdG90eXBlT2YodmFsMikpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgaWYgKHZhbDEgPT09IG51bGwgfHwgX3R5cGVvZih2YWwxKSAhPT0gJ29iamVjdCcpIHtcbiAgICAgIGlmICh2YWwyID09PSBudWxsIHx8IF90eXBlb2YodmFsMikgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcWVxZXFcbiAgICAgICAgcmV0dXJuIHZhbDEgPT0gdmFsMjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGlmICh2YWwyID09PSBudWxsIHx8IF90eXBlb2YodmFsMikgIT09ICdvYmplY3QnKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgdmFyIHZhbDFUYWcgPSBvYmplY3RUb1N0cmluZyh2YWwxKTtcbiAgdmFyIHZhbDJUYWcgPSBvYmplY3RUb1N0cmluZyh2YWwyKTtcblxuICBpZiAodmFsMVRhZyAhPT0gdmFsMlRhZykge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGlmIChBcnJheS5pc0FycmF5KHZhbDEpKSB7XG4gICAgLy8gQ2hlY2sgZm9yIHNwYXJzZSBhcnJheXMgYW5kIGdlbmVyYWwgZmFzdCBwYXRoXG4gICAgaWYgKHZhbDEubGVuZ3RoICE9PSB2YWwyLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHZhciBrZXlzMSA9IGdldE93bk5vbkluZGV4UHJvcGVydGllcyh2YWwxLCBPTkxZX0VOVU1FUkFCTEUpO1xuICAgIHZhciBrZXlzMiA9IGdldE93bk5vbkluZGV4UHJvcGVydGllcyh2YWwyLCBPTkxZX0VOVU1FUkFCTEUpO1xuXG4gICAgaWYgKGtleXMxLmxlbmd0aCAhPT0ga2V5czIubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgcmV0dXJuIGtleUNoZWNrKHZhbDEsIHZhbDIsIHN0cmljdCwgbWVtb3MsIGtJc0FycmF5LCBrZXlzMSk7XG4gIH0gLy8gW2Jyb3dzZXJpZnldIFRoaXMgdHJpZ2dlcnMgb24gY2VydGFpbiB0eXBlcyBpbiBJRSAoTWFwL1NldCkgc28gd2UgZG9uJ3RcbiAgLy8gd2FuJ3QgdG8gZWFybHkgcmV0dXJuIG91dCBvZiB0aGUgcmVzdCBvZiB0aGUgY2hlY2tzLiBIb3dldmVyIHdlIGNhbiBjaGVja1xuICAvLyBpZiB0aGUgc2Vjb25kIHZhbHVlIGlzIG9uZSBvZiB0aGVzZSB2YWx1ZXMgYW5kIHRoZSBmaXJzdCBpc24ndC5cblxuXG4gIGlmICh2YWwxVGFnID09PSAnW29iamVjdCBPYmplY3RdJykge1xuICAgIC8vIHJldHVybiBrZXlDaGVjayh2YWwxLCB2YWwyLCBzdHJpY3QsIG1lbW9zLCBrTm9JdGVyYXRvcik7XG4gICAgaWYgKCFpc01hcCh2YWwxKSAmJiBpc01hcCh2YWwyKSB8fCAhaXNTZXQodmFsMSkgJiYgaXNTZXQodmFsMikpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBpZiAoaXNEYXRlKHZhbDEpKSB7XG4gICAgaWYgKCFpc0RhdGUodmFsMikgfHwgRGF0ZS5wcm90b3R5cGUuZ2V0VGltZS5jYWxsKHZhbDEpICE9PSBEYXRlLnByb3RvdHlwZS5nZXRUaW1lLmNhbGwodmFsMikpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH0gZWxzZSBpZiAoaXNSZWdFeHAodmFsMSkpIHtcbiAgICBpZiAoIWlzUmVnRXhwKHZhbDIpIHx8ICFhcmVTaW1pbGFyUmVnRXhwcyh2YWwxLCB2YWwyKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfSBlbHNlIGlmIChpc05hdGl2ZUVycm9yKHZhbDEpIHx8IHZhbDEgaW5zdGFuY2VvZiBFcnJvcikge1xuICAgIC8vIERvIG5vdCBjb21wYXJlIHRoZSBzdGFjayBhcyBpdCBtaWdodCBkaWZmZXIgZXZlbiB0aG91Z2ggdGhlIGVycm9yIGl0c2VsZlxuICAgIC8vIGlzIG90aGVyd2lzZSBpZGVudGljYWwuXG4gICAgaWYgKHZhbDEubWVzc2FnZSAhPT0gdmFsMi5tZXNzYWdlIHx8IHZhbDEubmFtZSAhPT0gdmFsMi5uYW1lKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9IGVsc2UgaWYgKGlzQXJyYXlCdWZmZXJWaWV3KHZhbDEpKSB7XG4gICAgaWYgKCFzdHJpY3QgJiYgKGlzRmxvYXQzMkFycmF5KHZhbDEpIHx8IGlzRmxvYXQ2NEFycmF5KHZhbDEpKSkge1xuICAgICAgaWYgKCFhcmVTaW1pbGFyRmxvYXRBcnJheXModmFsMSwgdmFsMikpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoIWFyZVNpbWlsYXJUeXBlZEFycmF5cyh2YWwxLCB2YWwyKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0gLy8gQnVmZmVyLmNvbXBhcmUgcmV0dXJucyB0cnVlLCBzbyB2YWwxLmxlbmd0aCA9PT0gdmFsMi5sZW5ndGguIElmIHRoZXkgYm90aFxuICAgIC8vIG9ubHkgY29udGFpbiBudW1lcmljIGtleXMsIHdlIGRvbid0IG5lZWQgdG8gZXhhbSBmdXJ0aGVyIHRoYW4gY2hlY2tpbmdcbiAgICAvLyB0aGUgc3ltYm9scy5cblxuXG4gICAgdmFyIF9rZXlzID0gZ2V0T3duTm9uSW5kZXhQcm9wZXJ0aWVzKHZhbDEsIE9OTFlfRU5VTUVSQUJMRSk7XG5cbiAgICB2YXIgX2tleXMyID0gZ2V0T3duTm9uSW5kZXhQcm9wZXJ0aWVzKHZhbDIsIE9OTFlfRU5VTUVSQUJMRSk7XG5cbiAgICBpZiAoX2tleXMubGVuZ3RoICE9PSBfa2V5czIubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgcmV0dXJuIGtleUNoZWNrKHZhbDEsIHZhbDIsIHN0cmljdCwgbWVtb3MsIGtOb0l0ZXJhdG9yLCBfa2V5cyk7XG4gIH0gZWxzZSBpZiAoaXNTZXQodmFsMSkpIHtcbiAgICBpZiAoIWlzU2V0KHZhbDIpIHx8IHZhbDEuc2l6ZSAhPT0gdmFsMi5zaXplKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgcmV0dXJuIGtleUNoZWNrKHZhbDEsIHZhbDIsIHN0cmljdCwgbWVtb3MsIGtJc1NldCk7XG4gIH0gZWxzZSBpZiAoaXNNYXAodmFsMSkpIHtcbiAgICBpZiAoIWlzTWFwKHZhbDIpIHx8IHZhbDEuc2l6ZSAhPT0gdmFsMi5zaXplKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgcmV0dXJuIGtleUNoZWNrKHZhbDEsIHZhbDIsIHN0cmljdCwgbWVtb3MsIGtJc01hcCk7XG4gIH0gZWxzZSBpZiAoaXNBbnlBcnJheUJ1ZmZlcih2YWwxKSkge1xuICAgIGlmICghYXJlRXF1YWxBcnJheUJ1ZmZlcnModmFsMSwgdmFsMikpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH0gZWxzZSBpZiAoaXNCb3hlZFByaW1pdGl2ZSh2YWwxKSAmJiAhaXNFcXVhbEJveGVkUHJpbWl0aXZlKHZhbDEsIHZhbDIpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcmV0dXJuIGtleUNoZWNrKHZhbDEsIHZhbDIsIHN0cmljdCwgbWVtb3MsIGtOb0l0ZXJhdG9yKTtcbn1cblxuZnVuY3Rpb24gZ2V0RW51bWVyYWJsZXModmFsLCBrZXlzKSB7XG4gIHJldHVybiBrZXlzLmZpbHRlcihmdW5jdGlvbiAoaykge1xuICAgIHJldHVybiBwcm9wZXJ0eUlzRW51bWVyYWJsZSh2YWwsIGspO1xuICB9KTtcbn1cblxuZnVuY3Rpb24ga2V5Q2hlY2sodmFsMSwgdmFsMiwgc3RyaWN0LCBtZW1vcywgaXRlcmF0aW9uVHlwZSwgYUtleXMpIHtcbiAgLy8gRm9yIGFsbCByZW1haW5pbmcgT2JqZWN0IHBhaXJzLCBpbmNsdWRpbmcgQXJyYXksIG9iamVjdHMgYW5kIE1hcHMsXG4gIC8vIGVxdWl2YWxlbmNlIGlzIGRldGVybWluZWQgYnkgaGF2aW5nOlxuICAvLyBhKSBUaGUgc2FtZSBudW1iZXIgb2Ygb3duZWQgZW51bWVyYWJsZSBwcm9wZXJ0aWVzXG4gIC8vIGIpIFRoZSBzYW1lIHNldCBvZiBrZXlzL2luZGV4ZXMgKGFsdGhvdWdoIG5vdCBuZWNlc3NhcmlseSB0aGUgc2FtZSBvcmRlcilcbiAgLy8gYykgRXF1aXZhbGVudCB2YWx1ZXMgZm9yIGV2ZXJ5IGNvcnJlc3BvbmRpbmcga2V5L2luZGV4XG4gIC8vIGQpIEZvciBTZXRzIGFuZCBNYXBzLCBlcXVhbCBjb250ZW50c1xuICAvLyBOb3RlOiB0aGlzIGFjY291bnRzIGZvciBib3RoIG5hbWVkIGFuZCBpbmRleGVkIHByb3BlcnRpZXMgb24gQXJyYXlzLlxuICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gNSkge1xuICAgIGFLZXlzID0gT2JqZWN0LmtleXModmFsMSk7XG4gICAgdmFyIGJLZXlzID0gT2JqZWN0LmtleXModmFsMik7IC8vIFRoZSBwYWlyIG11c3QgaGF2ZSB0aGUgc2FtZSBudW1iZXIgb2Ygb3duZWQgcHJvcGVydGllcy5cblxuICAgIGlmIChhS2V5cy5sZW5ndGggIT09IGJLZXlzLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfSAvLyBDaGVhcCBrZXkgdGVzdFxuXG5cbiAgdmFyIGkgPSAwO1xuXG4gIGZvciAoOyBpIDwgYUtleXMubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoIWhhc093blByb3BlcnR5KHZhbDIsIGFLZXlzW2ldKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIGlmIChzdHJpY3QgJiYgYXJndW1lbnRzLmxlbmd0aCA9PT0gNSkge1xuICAgIHZhciBzeW1ib2xLZXlzQSA9IG9iamVjdEdldE93blByb3BlcnR5U3ltYm9scyh2YWwxKTtcblxuICAgIGlmIChzeW1ib2xLZXlzQS5sZW5ndGggIT09IDApIHtcbiAgICAgIHZhciBjb3VudCA9IDA7XG5cbiAgICAgIGZvciAoaSA9IDA7IGkgPCBzeW1ib2xLZXlzQS5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIga2V5ID0gc3ltYm9sS2V5c0FbaV07XG5cbiAgICAgICAgaWYgKHByb3BlcnR5SXNFbnVtZXJhYmxlKHZhbDEsIGtleSkpIHtcbiAgICAgICAgICBpZiAoIXByb3BlcnR5SXNFbnVtZXJhYmxlKHZhbDIsIGtleSkpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBhS2V5cy5wdXNoKGtleSk7XG4gICAgICAgICAgY291bnQrKztcbiAgICAgICAgfSBlbHNlIGlmIChwcm9wZXJ0eUlzRW51bWVyYWJsZSh2YWwyLCBrZXkpKSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHZhciBzeW1ib2xLZXlzQiA9IG9iamVjdEdldE93blByb3BlcnR5U3ltYm9scyh2YWwyKTtcblxuICAgICAgaWYgKHN5bWJvbEtleXNBLmxlbmd0aCAhPT0gc3ltYm9sS2V5c0IubGVuZ3RoICYmIGdldEVudW1lcmFibGVzKHZhbDIsIHN5bWJvbEtleXNCKS5sZW5ndGggIT09IGNvdW50KSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIF9zeW1ib2xLZXlzQiA9IG9iamVjdEdldE93blByb3BlcnR5U3ltYm9scyh2YWwyKTtcblxuICAgICAgaWYgKF9zeW1ib2xLZXlzQi5sZW5ndGggIT09IDAgJiYgZ2V0RW51bWVyYWJsZXModmFsMiwgX3N5bWJvbEtleXNCKS5sZW5ndGggIT09IDApIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGlmIChhS2V5cy5sZW5ndGggPT09IDAgJiYgKGl0ZXJhdGlvblR5cGUgPT09IGtOb0l0ZXJhdG9yIHx8IGl0ZXJhdGlvblR5cGUgPT09IGtJc0FycmF5ICYmIHZhbDEubGVuZ3RoID09PSAwIHx8IHZhbDEuc2l6ZSA9PT0gMCkpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSAvLyBVc2UgbWVtb3MgdG8gaGFuZGxlIGN5Y2xlcy5cblxuXG4gIGlmIChtZW1vcyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgbWVtb3MgPSB7XG4gICAgICB2YWwxOiBuZXcgTWFwKCksXG4gICAgICB2YWwyOiBuZXcgTWFwKCksXG4gICAgICBwb3NpdGlvbjogMFxuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgLy8gV2UgcHJldmVudCB1cCB0byB0d28gbWFwLmhhcyh4KSBjYWxscyBieSBkaXJlY3RseSByZXRyaWV2aW5nIHRoZSB2YWx1ZVxuICAgIC8vIGFuZCBjaGVja2luZyBmb3IgdW5kZWZpbmVkLiBUaGUgbWFwIGNhbiBvbmx5IGNvbnRhaW4gbnVtYmVycywgc28gaXQgaXNcbiAgICAvLyBzYWZlIHRvIGNoZWNrIGZvciB1bmRlZmluZWQgb25seS5cbiAgICB2YXIgdmFsMk1lbW9BID0gbWVtb3MudmFsMS5nZXQodmFsMSk7XG5cbiAgICBpZiAodmFsMk1lbW9BICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHZhciB2YWwyTWVtb0IgPSBtZW1vcy52YWwyLmdldCh2YWwyKTtcblxuICAgICAgaWYgKHZhbDJNZW1vQiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiB2YWwyTWVtb0EgPT09IHZhbDJNZW1vQjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vcy5wb3NpdGlvbisrO1xuICB9XG5cbiAgbWVtb3MudmFsMS5zZXQodmFsMSwgbWVtb3MucG9zaXRpb24pO1xuICBtZW1vcy52YWwyLnNldCh2YWwyLCBtZW1vcy5wb3NpdGlvbik7XG4gIHZhciBhcmVFcSA9IG9iakVxdWl2KHZhbDEsIHZhbDIsIHN0cmljdCwgYUtleXMsIG1lbW9zLCBpdGVyYXRpb25UeXBlKTtcbiAgbWVtb3MudmFsMS5kZWxldGUodmFsMSk7XG4gIG1lbW9zLnZhbDIuZGVsZXRlKHZhbDIpO1xuICByZXR1cm4gYXJlRXE7XG59XG5cbmZ1bmN0aW9uIHNldEhhc0VxdWFsRWxlbWVudChzZXQsIHZhbDEsIHN0cmljdCwgbWVtbykge1xuICAvLyBHbyBsb29raW5nLlxuICB2YXIgc2V0VmFsdWVzID0gYXJyYXlGcm9tU2V0KHNldCk7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzZXRWYWx1ZXMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgdmFsMiA9IHNldFZhbHVlc1tpXTtcblxuICAgIGlmIChpbm5lckRlZXBFcXVhbCh2YWwxLCB2YWwyLCBzdHJpY3QsIG1lbW8pKSB7XG4gICAgICAvLyBSZW1vdmUgdGhlIG1hdGNoaW5nIGVsZW1lbnQgdG8gbWFrZSBzdXJlIHdlIGRvIG5vdCBjaGVjayB0aGF0IGFnYWluLlxuICAgICAgc2V0LmRlbGV0ZSh2YWwyKTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn0gLy8gU2VlIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvRXF1YWxpdHlfY29tcGFyaXNvbnNfYW5kX3NhbWVuZXNzI0xvb3NlX2VxdWFsaXR5X3VzaW5nXG4vLyBTYWRseSBpdCBpcyBub3QgcG9zc2libGUgdG8gZGV0ZWN0IGNvcnJlc3BvbmRpbmcgdmFsdWVzIHByb3Blcmx5IGluIGNhc2UgdGhlXG4vLyB0eXBlIGlzIGEgc3RyaW5nLCBudW1iZXIsIGJpZ2ludCBvciBib29sZWFuLiBUaGUgcmVhc29uIGlzIHRoYXQgdGhvc2UgdmFsdWVzXG4vLyBjYW4gbWF0Y2ggbG90cyBvZiBkaWZmZXJlbnQgc3RyaW5nIHZhbHVlcyAoZS5nLiwgMW4gPT0gJyswMDAwMScpLlxuXG5cbmZ1bmN0aW9uIGZpbmRMb29zZU1hdGNoaW5nUHJpbWl0aXZlcyhwcmltKSB7XG4gIHN3aXRjaCAoX3R5cGVvZihwcmltKSkge1xuICAgIGNhc2UgJ3VuZGVmaW5lZCc6XG4gICAgICByZXR1cm4gbnVsbDtcblxuICAgIGNhc2UgJ29iamVjdCc6XG4gICAgICAvLyBPbmx5IHBhc3MgaW4gbnVsbCBhcyBvYmplY3QhXG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xuXG4gICAgY2FzZSAnc3ltYm9sJzpcbiAgICAgIHJldHVybiBmYWxzZTtcblxuICAgIGNhc2UgJ3N0cmluZyc6XG4gICAgICBwcmltID0gK3ByaW07XG4gICAgLy8gTG9vc2UgZXF1YWwgZW50cmllcyBleGlzdCBvbmx5IGlmIHRoZSBzdHJpbmcgaXMgcG9zc2libGUgdG8gY29udmVydCB0b1xuICAgIC8vIGEgcmVndWxhciBudW1iZXIgYW5kIG5vdCBOYU4uXG4gICAgLy8gRmFsbCB0aHJvdWdoXG5cbiAgICBjYXNlICdudW1iZXInOlxuICAgICAgaWYgKG51bWJlcklzTmFOKHByaW0pKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cblxuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59XG5cbmZ1bmN0aW9uIHNldE1pZ2h0SGF2ZUxvb3NlUHJpbShhLCBiLCBwcmltKSB7XG4gIHZhciBhbHRWYWx1ZSA9IGZpbmRMb29zZU1hdGNoaW5nUHJpbWl0aXZlcyhwcmltKTtcbiAgaWYgKGFsdFZhbHVlICE9IG51bGwpIHJldHVybiBhbHRWYWx1ZTtcbiAgcmV0dXJuIGIuaGFzKGFsdFZhbHVlKSAmJiAhYS5oYXMoYWx0VmFsdWUpO1xufVxuXG5mdW5jdGlvbiBtYXBNaWdodEhhdmVMb29zZVByaW0oYSwgYiwgcHJpbSwgaXRlbSwgbWVtbykge1xuICB2YXIgYWx0VmFsdWUgPSBmaW5kTG9vc2VNYXRjaGluZ1ByaW1pdGl2ZXMocHJpbSk7XG5cbiAgaWYgKGFsdFZhbHVlICE9IG51bGwpIHtcbiAgICByZXR1cm4gYWx0VmFsdWU7XG4gIH1cblxuICB2YXIgY3VyQiA9IGIuZ2V0KGFsdFZhbHVlKTtcblxuICBpZiAoY3VyQiA9PT0gdW5kZWZpbmVkICYmICFiLmhhcyhhbHRWYWx1ZSkgfHwgIWlubmVyRGVlcEVxdWFsKGl0ZW0sIGN1ckIsIGZhbHNlLCBtZW1vKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHJldHVybiAhYS5oYXMoYWx0VmFsdWUpICYmIGlubmVyRGVlcEVxdWFsKGl0ZW0sIGN1ckIsIGZhbHNlLCBtZW1vKTtcbn1cblxuZnVuY3Rpb24gc2V0RXF1aXYoYSwgYiwgc3RyaWN0LCBtZW1vKSB7XG4gIC8vIFRoaXMgaXMgYSBsYXppbHkgaW5pdGlhdGVkIFNldCBvZiBlbnRyaWVzIHdoaWNoIGhhdmUgdG8gYmUgY29tcGFyZWRcbiAgLy8gcGFpcndpc2UuXG4gIHZhciBzZXQgPSBudWxsO1xuICB2YXIgYVZhbHVlcyA9IGFycmF5RnJvbVNldChhKTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGFWYWx1ZXMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgdmFsID0gYVZhbHVlc1tpXTsgLy8gTm90ZTogQ2hlY2tpbmcgZm9yIHRoZSBvYmplY3RzIGZpcnN0IGltcHJvdmVzIHRoZSBwZXJmb3JtYW5jZSBmb3Igb2JqZWN0XG4gICAgLy8gaGVhdnkgc2V0cyBidXQgaXQgaXMgYSBtaW5vciBzbG93IGRvd24gZm9yIHByaW1pdGl2ZXMuIEFzIHRoZXkgYXJlIGZhc3RcbiAgICAvLyB0byBjaGVjayB0aGlzIGltcHJvdmVzIHRoZSB3b3JzdCBjYXNlIHNjZW5hcmlvIGluc3RlYWQuXG5cbiAgICBpZiAoX3R5cGVvZih2YWwpID09PSAnb2JqZWN0JyAmJiB2YWwgIT09IG51bGwpIHtcbiAgICAgIGlmIChzZXQgPT09IG51bGwpIHtcbiAgICAgICAgc2V0ID0gbmV3IFNldCgpO1xuICAgICAgfSAvLyBJZiB0aGUgc3BlY2lmaWVkIHZhbHVlIGRvZXNuJ3QgZXhpc3QgaW4gdGhlIHNlY29uZCBzZXQgaXRzIGFuIG5vdCBudWxsXG4gICAgICAvLyBvYmplY3QgKG9yIG5vbiBzdHJpY3Qgb25seTogYSBub3QgbWF0Y2hpbmcgcHJpbWl0aXZlKSB3ZSdsbCBuZWVkIHRvIGdvXG4gICAgICAvLyBodW50aW5nIGZvciBzb21ldGhpbmcgdGhhdHMgZGVlcC0oc3RyaWN0LSllcXVhbCB0byBpdC4gVG8gbWFrZSB0aGlzXG4gICAgICAvLyBPKG4gbG9nIG4pIGNvbXBsZXhpdHkgd2UgaGF2ZSB0byBjb3B5IHRoZXNlIHZhbHVlcyBpbiBhIG5ldyBzZXQgZmlyc3QuXG5cblxuICAgICAgc2V0LmFkZCh2YWwpO1xuICAgIH0gZWxzZSBpZiAoIWIuaGFzKHZhbCkpIHtcbiAgICAgIGlmIChzdHJpY3QpIHJldHVybiBmYWxzZTsgLy8gRmFzdCBwYXRoIHRvIGRldGVjdCBtaXNzaW5nIHN0cmluZywgc3ltYm9sLCB1bmRlZmluZWQgYW5kIG51bGwgdmFsdWVzLlxuXG4gICAgICBpZiAoIXNldE1pZ2h0SGF2ZUxvb3NlUHJpbShhLCBiLCB2YWwpKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHNldCA9PT0gbnVsbCkge1xuICAgICAgICBzZXQgPSBuZXcgU2V0KCk7XG4gICAgICB9XG5cbiAgICAgIHNldC5hZGQodmFsKTtcbiAgICB9XG4gIH1cblxuICBpZiAoc2V0ICE9PSBudWxsKSB7XG4gICAgdmFyIGJWYWx1ZXMgPSBhcnJheUZyb21TZXQoYik7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgYlZhbHVlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfdmFsID0gYlZhbHVlc1tfaV07IC8vIFdlIGhhdmUgdG8gY2hlY2sgaWYgYSBwcmltaXRpdmUgdmFsdWUgaXMgYWxyZWFkeVxuICAgICAgLy8gbWF0Y2hpbmcgYW5kIG9ubHkgaWYgaXQncyBub3QsIGdvIGh1bnRpbmcgZm9yIGl0LlxuXG4gICAgICBpZiAoX3R5cGVvZihfdmFsKSA9PT0gJ29iamVjdCcgJiYgX3ZhbCAhPT0gbnVsbCkge1xuICAgICAgICBpZiAoIXNldEhhc0VxdWFsRWxlbWVudChzZXQsIF92YWwsIHN0cmljdCwgbWVtbykpIHJldHVybiBmYWxzZTtcbiAgICAgIH0gZWxzZSBpZiAoIXN0cmljdCAmJiAhYS5oYXMoX3ZhbCkgJiYgIXNldEhhc0VxdWFsRWxlbWVudChzZXQsIF92YWwsIHN0cmljdCwgbWVtbykpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBzZXQuc2l6ZSA9PT0gMDtcbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufVxuXG5mdW5jdGlvbiBtYXBIYXNFcXVhbEVudHJ5KHNldCwgbWFwLCBrZXkxLCBpdGVtMSwgc3RyaWN0LCBtZW1vKSB7XG4gIC8vIFRvIGJlIGFibGUgdG8gaGFuZGxlIGNhc2VzIGxpa2U6XG4gIC8vICAgTWFwKFtbe30sICdhJ10sIFt7fSwgJ2InXV0pIHZzIE1hcChbW3t9LCAnYiddLCBbe30sICdhJ11dKVxuICAvLyAuLi4gd2UgbmVlZCB0byBjb25zaWRlciAqYWxsKiBtYXRjaGluZyBrZXlzLCBub3QganVzdCB0aGUgZmlyc3Qgd2UgZmluZC5cbiAgdmFyIHNldFZhbHVlcyA9IGFycmF5RnJvbVNldChzZXQpO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc2V0VmFsdWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGtleTIgPSBzZXRWYWx1ZXNbaV07XG5cbiAgICBpZiAoaW5uZXJEZWVwRXF1YWwoa2V5MSwga2V5Miwgc3RyaWN0LCBtZW1vKSAmJiBpbm5lckRlZXBFcXVhbChpdGVtMSwgbWFwLmdldChrZXkyKSwgc3RyaWN0LCBtZW1vKSkge1xuICAgICAgc2V0LmRlbGV0ZShrZXkyKTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn1cblxuZnVuY3Rpb24gbWFwRXF1aXYoYSwgYiwgc3RyaWN0LCBtZW1vKSB7XG4gIHZhciBzZXQgPSBudWxsO1xuICB2YXIgYUVudHJpZXMgPSBhcnJheUZyb21NYXAoYSk7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBhRW50cmllcy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBfYUVudHJpZXMkaSA9IF9zbGljZWRUb0FycmF5KGFFbnRyaWVzW2ldLCAyKSxcbiAgICAgICAga2V5ID0gX2FFbnRyaWVzJGlbMF0sXG4gICAgICAgIGl0ZW0xID0gX2FFbnRyaWVzJGlbMV07XG5cbiAgICBpZiAoX3R5cGVvZihrZXkpID09PSAnb2JqZWN0JyAmJiBrZXkgIT09IG51bGwpIHtcbiAgICAgIGlmIChzZXQgPT09IG51bGwpIHtcbiAgICAgICAgc2V0ID0gbmV3IFNldCgpO1xuICAgICAgfVxuXG4gICAgICBzZXQuYWRkKGtleSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIEJ5IGRpcmVjdGx5IHJldHJpZXZpbmcgdGhlIHZhbHVlIHdlIHByZXZlbnQgYW5vdGhlciBiLmhhcyhrZXkpIGNoZWNrIGluXG4gICAgICAvLyBhbG1vc3QgYWxsIHBvc3NpYmxlIGNhc2VzLlxuICAgICAgdmFyIGl0ZW0yID0gYi5nZXQoa2V5KTtcblxuICAgICAgaWYgKGl0ZW0yID09PSB1bmRlZmluZWQgJiYgIWIuaGFzKGtleSkgfHwgIWlubmVyRGVlcEVxdWFsKGl0ZW0xLCBpdGVtMiwgc3RyaWN0LCBtZW1vKSkge1xuICAgICAgICBpZiAoc3RyaWN0KSByZXR1cm4gZmFsc2U7IC8vIEZhc3QgcGF0aCB0byBkZXRlY3QgbWlzc2luZyBzdHJpbmcsIHN5bWJvbCwgdW5kZWZpbmVkIGFuZCBudWxsXG4gICAgICAgIC8vIGtleXMuXG5cbiAgICAgICAgaWYgKCFtYXBNaWdodEhhdmVMb29zZVByaW0oYSwgYiwga2V5LCBpdGVtMSwgbWVtbykpIHJldHVybiBmYWxzZTtcblxuICAgICAgICBpZiAoc2V0ID09PSBudWxsKSB7XG4gICAgICAgICAgc2V0ID0gbmV3IFNldCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgc2V0LmFkZChrZXkpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGlmIChzZXQgIT09IG51bGwpIHtcbiAgICB2YXIgYkVudHJpZXMgPSBhcnJheUZyb21NYXAoYik7XG5cbiAgICBmb3IgKHZhciBfaTIgPSAwOyBfaTIgPCBiRW50cmllcy5sZW5ndGg7IF9pMisrKSB7XG4gICAgICB2YXIgX2JFbnRyaWVzJF9pID0gX3NsaWNlZFRvQXJyYXkoYkVudHJpZXNbX2kyXSwgMiksXG4gICAgICAgICAga2V5ID0gX2JFbnRyaWVzJF9pWzBdLFxuICAgICAgICAgIGl0ZW0gPSBfYkVudHJpZXMkX2lbMV07XG5cbiAgICAgIGlmIChfdHlwZW9mKGtleSkgPT09ICdvYmplY3QnICYmIGtleSAhPT0gbnVsbCkge1xuICAgICAgICBpZiAoIW1hcEhhc0VxdWFsRW50cnkoc2V0LCBhLCBrZXksIGl0ZW0sIHN0cmljdCwgbWVtbykpIHJldHVybiBmYWxzZTtcbiAgICAgIH0gZWxzZSBpZiAoIXN0cmljdCAmJiAoIWEuaGFzKGtleSkgfHwgIWlubmVyRGVlcEVxdWFsKGEuZ2V0KGtleSksIGl0ZW0sIGZhbHNlLCBtZW1vKSkgJiYgIW1hcEhhc0VxdWFsRW50cnkoc2V0LCBhLCBrZXksIGl0ZW0sIGZhbHNlLCBtZW1vKSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHNldC5zaXplID09PSAwO1xuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59XG5cbmZ1bmN0aW9uIG9iakVxdWl2KGEsIGIsIHN0cmljdCwga2V5cywgbWVtb3MsIGl0ZXJhdGlvblR5cGUpIHtcbiAgLy8gU2V0cyBhbmQgbWFwcyBkb24ndCBoYXZlIHRoZWlyIGVudHJpZXMgYWNjZXNzaWJsZSB2aWEgbm9ybWFsIG9iamVjdFxuICAvLyBwcm9wZXJ0aWVzLlxuICB2YXIgaSA9IDA7XG5cbiAgaWYgKGl0ZXJhdGlvblR5cGUgPT09IGtJc1NldCkge1xuICAgIGlmICghc2V0RXF1aXYoYSwgYiwgc3RyaWN0LCBtZW1vcykpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH0gZWxzZSBpZiAoaXRlcmF0aW9uVHlwZSA9PT0ga0lzTWFwKSB7XG4gICAgaWYgKCFtYXBFcXVpdihhLCBiLCBzdHJpY3QsIG1lbW9zKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfSBlbHNlIGlmIChpdGVyYXRpb25UeXBlID09PSBrSXNBcnJheSkge1xuICAgIGZvciAoOyBpIDwgYS5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKGhhc093blByb3BlcnR5KGEsIGkpKSB7XG4gICAgICAgIGlmICghaGFzT3duUHJvcGVydHkoYiwgaSkgfHwgIWlubmVyRGVlcEVxdWFsKGFbaV0sIGJbaV0sIHN0cmljdCwgbWVtb3MpKSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKGhhc093blByb3BlcnR5KGIsIGkpKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIEFycmF5IGlzIHNwYXJzZS5cbiAgICAgICAgdmFyIGtleXNBID0gT2JqZWN0LmtleXMoYSk7XG5cbiAgICAgICAgZm9yICg7IGkgPCBrZXlzQS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIHZhciBrZXkgPSBrZXlzQVtpXTtcblxuICAgICAgICAgIGlmICghaGFzT3duUHJvcGVydHkoYiwga2V5KSB8fCAhaW5uZXJEZWVwRXF1YWwoYVtrZXldLCBiW2tleV0sIHN0cmljdCwgbWVtb3MpKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGtleXNBLmxlbmd0aCAhPT0gT2JqZWN0LmtleXMoYikubGVuZ3RoKSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfVxuICB9IC8vIFRoZSBwYWlyIG11c3QgaGF2ZSBlcXVpdmFsZW50IHZhbHVlcyBmb3IgZXZlcnkgY29ycmVzcG9uZGluZyBrZXkuXG4gIC8vIFBvc3NpYmx5IGV4cGVuc2l2ZSBkZWVwIHRlc3Q6XG5cblxuICBmb3IgKGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBfa2V5ID0ga2V5c1tpXTtcblxuICAgIGlmICghaW5uZXJEZWVwRXF1YWwoYVtfa2V5XSwgYltfa2V5XSwgc3RyaWN0LCBtZW1vcykpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn1cblxuZnVuY3Rpb24gaXNEZWVwRXF1YWwodmFsMSwgdmFsMikge1xuICByZXR1cm4gaW5uZXJEZWVwRXF1YWwodmFsMSwgdmFsMiwga0xvb3NlKTtcbn1cblxuZnVuY3Rpb24gaXNEZWVwU3RyaWN0RXF1YWwodmFsMSwgdmFsMikge1xuICByZXR1cm4gaW5uZXJEZWVwRXF1YWwodmFsMSwgdmFsMiwga1N0cmljdCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBpc0RlZXBFcXVhbDogaXNEZWVwRXF1YWwsXG4gIGlzRGVlcFN0cmljdEVxdWFsOiBpc0RlZXBTdHJpY3RFcXVhbFxufTsiLCIndXNlIHN0cmljdCc7XG5cbnZhciBHZXRJbnRyaW5zaWMgPSByZXF1aXJlKCdnZXQtaW50cmluc2ljJyk7XG5cbnZhciBjYWxsQmluZCA9IHJlcXVpcmUoJy4vJyk7XG5cbnZhciAkaW5kZXhPZiA9IGNhbGxCaW5kKEdldEludHJpbnNpYygnU3RyaW5nLnByb3RvdHlwZS5pbmRleE9mJykpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNhbGxCb3VuZEludHJpbnNpYyhuYW1lLCBhbGxvd01pc3NpbmcpIHtcblx0dmFyIGludHJpbnNpYyA9IEdldEludHJpbnNpYyhuYW1lLCAhIWFsbG93TWlzc2luZyk7XG5cdGlmICh0eXBlb2YgaW50cmluc2ljID09PSAnZnVuY3Rpb24nICYmICRpbmRleE9mKG5hbWUsICcucHJvdG90eXBlLicpID4gLTEpIHtcblx0XHRyZXR1cm4gY2FsbEJpbmQoaW50cmluc2ljKTtcblx0fVxuXHRyZXR1cm4gaW50cmluc2ljO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIGJpbmQgPSByZXF1aXJlKCdmdW5jdGlvbi1iaW5kJyk7XG52YXIgR2V0SW50cmluc2ljID0gcmVxdWlyZSgnZ2V0LWludHJpbnNpYycpO1xuXG52YXIgJGFwcGx5ID0gR2V0SW50cmluc2ljKCclRnVuY3Rpb24ucHJvdG90eXBlLmFwcGx5JScpO1xudmFyICRjYWxsID0gR2V0SW50cmluc2ljKCclRnVuY3Rpb24ucHJvdG90eXBlLmNhbGwlJyk7XG52YXIgJHJlZmxlY3RBcHBseSA9IEdldEludHJpbnNpYygnJVJlZmxlY3QuYXBwbHklJywgdHJ1ZSkgfHwgYmluZC5jYWxsKCRjYWxsLCAkYXBwbHkpO1xuXG52YXIgJGdPUEQgPSBHZXRJbnRyaW5zaWMoJyVPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yJScsIHRydWUpO1xudmFyICRkZWZpbmVQcm9wZXJ0eSA9IEdldEludHJpbnNpYygnJU9iamVjdC5kZWZpbmVQcm9wZXJ0eSUnLCB0cnVlKTtcbnZhciAkbWF4ID0gR2V0SW50cmluc2ljKCclTWF0aC5tYXglJyk7XG5cbmlmICgkZGVmaW5lUHJvcGVydHkpIHtcblx0dHJ5IHtcblx0XHQkZGVmaW5lUHJvcGVydHkoe30sICdhJywgeyB2YWx1ZTogMSB9KTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdC8vIElFIDggaGFzIGEgYnJva2VuIGRlZmluZVByb3BlcnR5XG5cdFx0JGRlZmluZVByb3BlcnR5ID0gbnVsbDtcblx0fVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNhbGxCaW5kKG9yaWdpbmFsRnVuY3Rpb24pIHtcblx0dmFyIGZ1bmMgPSAkcmVmbGVjdEFwcGx5KGJpbmQsICRjYWxsLCBhcmd1bWVudHMpO1xuXHRpZiAoJGdPUEQgJiYgJGRlZmluZVByb3BlcnR5KSB7XG5cdFx0dmFyIGRlc2MgPSAkZ09QRChmdW5jLCAnbGVuZ3RoJyk7XG5cdFx0aWYgKGRlc2MuY29uZmlndXJhYmxlKSB7XG5cdFx0XHQvLyBvcmlnaW5hbCBsZW5ndGgsIHBsdXMgdGhlIHJlY2VpdmVyLCBtaW51cyBhbnkgYWRkaXRpb25hbCBhcmd1bWVudHMgKGFmdGVyIHRoZSByZWNlaXZlcilcblx0XHRcdCRkZWZpbmVQcm9wZXJ0eShcblx0XHRcdFx0ZnVuYyxcblx0XHRcdFx0J2xlbmd0aCcsXG5cdFx0XHRcdHsgdmFsdWU6IDEgKyAkbWF4KDAsIG9yaWdpbmFsRnVuY3Rpb24ubGVuZ3RoIC0gKGFyZ3VtZW50cy5sZW5ndGggLSAxKSkgfVxuXHRcdFx0KTtcblx0XHR9XG5cdH1cblx0cmV0dXJuIGZ1bmM7XG59O1xuXG52YXIgYXBwbHlCaW5kID0gZnVuY3Rpb24gYXBwbHlCaW5kKCkge1xuXHRyZXR1cm4gJHJlZmxlY3RBcHBseShiaW5kLCAkYXBwbHksIGFyZ3VtZW50cyk7XG59O1xuXG5pZiAoJGRlZmluZVByb3BlcnR5KSB7XG5cdCRkZWZpbmVQcm9wZXJ0eShtb2R1bGUuZXhwb3J0cywgJ2FwcGx5JywgeyB2YWx1ZTogYXBwbHlCaW5kIH0pO1xufSBlbHNlIHtcblx0bW9kdWxlLmV4cG9ydHMuYXBwbHkgPSBhcHBseUJpbmQ7XG59XG4iLCIvKmdsb2JhbCB3aW5kb3csIGdsb2JhbCovXG52YXIgdXRpbCA9IHJlcXVpcmUoXCJ1dGlsXCIpXG52YXIgYXNzZXJ0ID0gcmVxdWlyZShcImFzc2VydFwiKVxuZnVuY3Rpb24gbm93KCkgeyByZXR1cm4gbmV3IERhdGUoKS5nZXRUaW1lKCkgfVxuXG52YXIgc2xpY2UgPSBBcnJheS5wcm90b3R5cGUuc2xpY2VcbnZhciBjb25zb2xlXG52YXIgdGltZXMgPSB7fVxuXG5pZiAodHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBnbG9iYWwuY29uc29sZSkge1xuICAgIGNvbnNvbGUgPSBnbG9iYWwuY29uc29sZVxufSBlbHNlIGlmICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiICYmIHdpbmRvdy5jb25zb2xlKSB7XG4gICAgY29uc29sZSA9IHdpbmRvdy5jb25zb2xlXG59IGVsc2Uge1xuICAgIGNvbnNvbGUgPSB7fVxufVxuXG52YXIgZnVuY3Rpb25zID0gW1xuICAgIFtsb2csIFwibG9nXCJdLFxuICAgIFtpbmZvLCBcImluZm9cIl0sXG4gICAgW3dhcm4sIFwid2FyblwiXSxcbiAgICBbZXJyb3IsIFwiZXJyb3JcIl0sXG4gICAgW3RpbWUsIFwidGltZVwiXSxcbiAgICBbdGltZUVuZCwgXCJ0aW1lRW5kXCJdLFxuICAgIFt0cmFjZSwgXCJ0cmFjZVwiXSxcbiAgICBbZGlyLCBcImRpclwiXSxcbiAgICBbY29uc29sZUFzc2VydCwgXCJhc3NlcnRcIl1cbl1cblxuZm9yICh2YXIgaSA9IDA7IGkgPCBmdW5jdGlvbnMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgdHVwbGUgPSBmdW5jdGlvbnNbaV1cbiAgICB2YXIgZiA9IHR1cGxlWzBdXG4gICAgdmFyIG5hbWUgPSB0dXBsZVsxXVxuXG4gICAgaWYgKCFjb25zb2xlW25hbWVdKSB7XG4gICAgICAgIGNvbnNvbGVbbmFtZV0gPSBmXG4gICAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbnNvbGVcblxuZnVuY3Rpb24gbG9nKCkge31cblxuZnVuY3Rpb24gaW5mbygpIHtcbiAgICBjb25zb2xlLmxvZy5hcHBseShjb25zb2xlLCBhcmd1bWVudHMpXG59XG5cbmZ1bmN0aW9uIHdhcm4oKSB7XG4gICAgY29uc29sZS5sb2cuYXBwbHkoY29uc29sZSwgYXJndW1lbnRzKVxufVxuXG5mdW5jdGlvbiBlcnJvcigpIHtcbiAgICBjb25zb2xlLndhcm4uYXBwbHkoY29uc29sZSwgYXJndW1lbnRzKVxufVxuXG5mdW5jdGlvbiB0aW1lKGxhYmVsKSB7XG4gICAgdGltZXNbbGFiZWxdID0gbm93KClcbn1cblxuZnVuY3Rpb24gdGltZUVuZChsYWJlbCkge1xuICAgIHZhciB0aW1lID0gdGltZXNbbGFiZWxdXG4gICAgaWYgKCF0aW1lKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIk5vIHN1Y2ggbGFiZWw6IFwiICsgbGFiZWwpXG4gICAgfVxuXG4gICAgZGVsZXRlIHRpbWVzW2xhYmVsXVxuICAgIHZhciBkdXJhdGlvbiA9IG5vdygpIC0gdGltZVxuICAgIGNvbnNvbGUubG9nKGxhYmVsICsgXCI6IFwiICsgZHVyYXRpb24gKyBcIm1zXCIpXG59XG5cbmZ1bmN0aW9uIHRyYWNlKCkge1xuICAgIHZhciBlcnIgPSBuZXcgRXJyb3IoKVxuICAgIGVyci5uYW1lID0gXCJUcmFjZVwiXG4gICAgZXJyLm1lc3NhZ2UgPSB1dGlsLmZvcm1hdC5hcHBseShudWxsLCBhcmd1bWVudHMpXG4gICAgY29uc29sZS5lcnJvcihlcnIuc3RhY2spXG59XG5cbmZ1bmN0aW9uIGRpcihvYmplY3QpIHtcbiAgICBjb25zb2xlLmxvZyh1dGlsLmluc3BlY3Qob2JqZWN0KSArIFwiXFxuXCIpXG59XG5cbmZ1bmN0aW9uIGNvbnNvbGVBc3NlcnQoZXhwcmVzc2lvbikge1xuICAgIGlmICghZXhwcmVzc2lvbikge1xuICAgICAgICB2YXIgYXJyID0gc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpXG4gICAgICAgIGFzc2VydC5vayhmYWxzZSwgdXRpbC5mb3JtYXQuYXBwbHkobnVsbCwgYXJyKSlcbiAgICB9XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBrZXlzID0gcmVxdWlyZSgnb2JqZWN0LWtleXMnKTtcbnZhciBoYXNTeW1ib2xzID0gdHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgU3ltYm9sKCdmb28nKSA9PT0gJ3N5bWJvbCc7XG5cbnZhciB0b1N0ciA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmc7XG52YXIgY29uY2F0ID0gQXJyYXkucHJvdG90eXBlLmNvbmNhdDtcbnZhciBvcmlnRGVmaW5lUHJvcGVydHkgPSBPYmplY3QuZGVmaW5lUHJvcGVydHk7XG5cbnZhciBpc0Z1bmN0aW9uID0gZnVuY3Rpb24gKGZuKSB7XG5cdHJldHVybiB0eXBlb2YgZm4gPT09ICdmdW5jdGlvbicgJiYgdG9TdHIuY2FsbChmbikgPT09ICdbb2JqZWN0IEZ1bmN0aW9uXSc7XG59O1xuXG52YXIgaGFzUHJvcGVydHlEZXNjcmlwdG9ycyA9IHJlcXVpcmUoJ2hhcy1wcm9wZXJ0eS1kZXNjcmlwdG9ycycpKCk7XG5cbnZhciBzdXBwb3J0c0Rlc2NyaXB0b3JzID0gb3JpZ0RlZmluZVByb3BlcnR5ICYmIGhhc1Byb3BlcnR5RGVzY3JpcHRvcnM7XG5cbnZhciBkZWZpbmVQcm9wZXJ0eSA9IGZ1bmN0aW9uIChvYmplY3QsIG5hbWUsIHZhbHVlLCBwcmVkaWNhdGUpIHtcblx0aWYgKG5hbWUgaW4gb2JqZWN0KSB7XG5cdFx0aWYgKHByZWRpY2F0ZSA9PT0gdHJ1ZSkge1xuXHRcdFx0aWYgKG9iamVjdFtuYW1lXSA9PT0gdmFsdWUpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSBpZiAoIWlzRnVuY3Rpb24ocHJlZGljYXRlKSB8fCAhcHJlZGljYXRlKCkpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdH1cblx0aWYgKHN1cHBvcnRzRGVzY3JpcHRvcnMpIHtcblx0XHRvcmlnRGVmaW5lUHJvcGVydHkob2JqZWN0LCBuYW1lLCB7XG5cdFx0XHRjb25maWd1cmFibGU6IHRydWUsXG5cdFx0XHRlbnVtZXJhYmxlOiBmYWxzZSxcblx0XHRcdHZhbHVlOiB2YWx1ZSxcblx0XHRcdHdyaXRhYmxlOiB0cnVlXG5cdFx0fSk7XG5cdH0gZWxzZSB7XG5cdFx0b2JqZWN0W25hbWVdID0gdmFsdWU7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cblx0fVxufTtcblxudmFyIGRlZmluZVByb3BlcnRpZXMgPSBmdW5jdGlvbiAob2JqZWN0LCBtYXApIHtcblx0dmFyIHByZWRpY2F0ZXMgPSBhcmd1bWVudHMubGVuZ3RoID4gMiA/IGFyZ3VtZW50c1syXSA6IHt9O1xuXHR2YXIgcHJvcHMgPSBrZXlzKG1hcCk7XG5cdGlmIChoYXNTeW1ib2xzKSB7XG5cdFx0cHJvcHMgPSBjb25jYXQuY2FsbChwcm9wcywgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhtYXApKTtcblx0fVxuXHRmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSArPSAxKSB7XG5cdFx0ZGVmaW5lUHJvcGVydHkob2JqZWN0LCBwcm9wc1tpXSwgbWFwW3Byb3BzW2ldXSwgcHJlZGljYXRlc1twcm9wc1tpXV0pO1xuXHR9XG59O1xuXG5kZWZpbmVQcm9wZXJ0aWVzLnN1cHBvcnRzRGVzY3JpcHRvcnMgPSAhIXN1cHBvcnRzRGVzY3JpcHRvcnM7XG5cbm1vZHVsZS5leHBvcnRzID0gZGVmaW5lUHJvcGVydGllcztcbiIsIi8qKlxuICogQ29kZSByZWZhY3RvcmVkIGZyb20gTW96aWxsYSBEZXZlbG9wZXIgTmV0d29yazpcbiAqIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL09iamVjdC9hc3NpZ25cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbmZ1bmN0aW9uIGFzc2lnbih0YXJnZXQsIGZpcnN0U291cmNlKSB7XG4gIGlmICh0YXJnZXQgPT09IHVuZGVmaW5lZCB8fCB0YXJnZXQgPT09IG51bGwpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdDYW5ub3QgY29udmVydCBmaXJzdCBhcmd1bWVudCB0byBvYmplY3QnKTtcbiAgfVxuXG4gIHZhciB0byA9IE9iamVjdCh0YXJnZXQpO1xuICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBuZXh0U291cmNlID0gYXJndW1lbnRzW2ldO1xuICAgIGlmIChuZXh0U291cmNlID09PSB1bmRlZmluZWQgfHwgbmV4dFNvdXJjZSA9PT0gbnVsbCkge1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgdmFyIGtleXNBcnJheSA9IE9iamVjdC5rZXlzKE9iamVjdChuZXh0U291cmNlKSk7XG4gICAgZm9yICh2YXIgbmV4dEluZGV4ID0gMCwgbGVuID0ga2V5c0FycmF5Lmxlbmd0aDsgbmV4dEluZGV4IDwgbGVuOyBuZXh0SW5kZXgrKykge1xuICAgICAgdmFyIG5leHRLZXkgPSBrZXlzQXJyYXlbbmV4dEluZGV4XTtcbiAgICAgIHZhciBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihuZXh0U291cmNlLCBuZXh0S2V5KTtcbiAgICAgIGlmIChkZXNjICE9PSB1bmRlZmluZWQgJiYgZGVzYy5lbnVtZXJhYmxlKSB7XG4gICAgICAgIHRvW25leHRLZXldID0gbmV4dFNvdXJjZVtuZXh0S2V5XTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRvO1xufVxuXG5mdW5jdGlvbiBwb2x5ZmlsbCgpIHtcbiAgaWYgKCFPYmplY3QuYXNzaWduKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE9iamVjdCwgJ2Fzc2lnbicsIHtcbiAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICB2YWx1ZTogYXNzaWduXG4gICAgfSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGFzc2lnbjogYXNzaWduLFxuICBwb2x5ZmlsbDogcG9seWZpbGxcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBpc0NhbGxhYmxlID0gcmVxdWlyZSgnaXMtY2FsbGFibGUnKTtcblxudmFyIHRvU3RyID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZztcbnZhciBoYXNPd25Qcm9wZXJ0eSA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG5cbnZhciBmb3JFYWNoQXJyYXkgPSBmdW5jdGlvbiBmb3JFYWNoQXJyYXkoYXJyYXksIGl0ZXJhdG9yLCByZWNlaXZlcikge1xuICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSBhcnJheS5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICBpZiAoaGFzT3duUHJvcGVydHkuY2FsbChhcnJheSwgaSkpIHtcbiAgICAgICAgICAgIGlmIChyZWNlaXZlciA9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgaXRlcmF0b3IoYXJyYXlbaV0sIGksIGFycmF5KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaXRlcmF0b3IuY2FsbChyZWNlaXZlciwgYXJyYXlbaV0sIGksIGFycmF5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn07XG5cbnZhciBmb3JFYWNoU3RyaW5nID0gZnVuY3Rpb24gZm9yRWFjaFN0cmluZyhzdHJpbmcsIGl0ZXJhdG9yLCByZWNlaXZlcikge1xuICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSBzdHJpbmcubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgLy8gbm8gc3VjaCB0aGluZyBhcyBhIHNwYXJzZSBzdHJpbmcuXG4gICAgICAgIGlmIChyZWNlaXZlciA9PSBudWxsKSB7XG4gICAgICAgICAgICBpdGVyYXRvcihzdHJpbmcuY2hhckF0KGkpLCBpLCBzdHJpbmcpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaXRlcmF0b3IuY2FsbChyZWNlaXZlciwgc3RyaW5nLmNoYXJBdChpKSwgaSwgc3RyaW5nKTtcbiAgICAgICAgfVxuICAgIH1cbn07XG5cbnZhciBmb3JFYWNoT2JqZWN0ID0gZnVuY3Rpb24gZm9yRWFjaE9iamVjdChvYmplY3QsIGl0ZXJhdG9yLCByZWNlaXZlcikge1xuICAgIGZvciAodmFyIGsgaW4gb2JqZWN0KSB7XG4gICAgICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgaykpIHtcbiAgICAgICAgICAgIGlmIChyZWNlaXZlciA9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgaXRlcmF0b3Iob2JqZWN0W2tdLCBrLCBvYmplY3QpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpdGVyYXRvci5jYWxsKHJlY2VpdmVyLCBvYmplY3Rba10sIGssIG9iamVjdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59O1xuXG52YXIgZm9yRWFjaCA9IGZ1bmN0aW9uIGZvckVhY2gobGlzdCwgaXRlcmF0b3IsIHRoaXNBcmcpIHtcbiAgICBpZiAoIWlzQ2FsbGFibGUoaXRlcmF0b3IpKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ2l0ZXJhdG9yIG11c3QgYmUgYSBmdW5jdGlvbicpO1xuICAgIH1cblxuICAgIHZhciByZWNlaXZlcjtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+PSAzKSB7XG4gICAgICAgIHJlY2VpdmVyID0gdGhpc0FyZztcbiAgICB9XG5cbiAgICBpZiAodG9TdHIuY2FsbChsaXN0KSA9PT0gJ1tvYmplY3QgQXJyYXldJykge1xuICAgICAgICBmb3JFYWNoQXJyYXkobGlzdCwgaXRlcmF0b3IsIHJlY2VpdmVyKTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBsaXN0ID09PSAnc3RyaW5nJykge1xuICAgICAgICBmb3JFYWNoU3RyaW5nKGxpc3QsIGl0ZXJhdG9yLCByZWNlaXZlcik7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgZm9yRWFjaE9iamVjdChsaXN0LCBpdGVyYXRvciwgcmVjZWl2ZXIpO1xuICAgIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZm9yRWFjaDtcbiIsIid1c2Ugc3RyaWN0JztcblxuLyogZXNsaW50IG5vLWludmFsaWQtdGhpczogMSAqL1xuXG52YXIgRVJST1JfTUVTU0FHRSA9ICdGdW5jdGlvbi5wcm90b3R5cGUuYmluZCBjYWxsZWQgb24gaW5jb21wYXRpYmxlICc7XG52YXIgc2xpY2UgPSBBcnJheS5wcm90b3R5cGUuc2xpY2U7XG52YXIgdG9TdHIgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nO1xudmFyIGZ1bmNUeXBlID0gJ1tvYmplY3QgRnVuY3Rpb25dJztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBiaW5kKHRoYXQpIHtcbiAgICB2YXIgdGFyZ2V0ID0gdGhpcztcbiAgICBpZiAodHlwZW9mIHRhcmdldCAhPT0gJ2Z1bmN0aW9uJyB8fCB0b1N0ci5jYWxsKHRhcmdldCkgIT09IGZ1bmNUeXBlKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoRVJST1JfTUVTU0FHRSArIHRhcmdldCk7XG4gICAgfVxuICAgIHZhciBhcmdzID0gc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpO1xuXG4gICAgdmFyIGJvdW5kO1xuICAgIHZhciBiaW5kZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0aGlzIGluc3RhbmNlb2YgYm91bmQpIHtcbiAgICAgICAgICAgIHZhciByZXN1bHQgPSB0YXJnZXQuYXBwbHkoXG4gICAgICAgICAgICAgICAgdGhpcyxcbiAgICAgICAgICAgICAgICBhcmdzLmNvbmNhdChzbGljZS5jYWxsKGFyZ3VtZW50cykpXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgaWYgKE9iamVjdChyZXN1bHQpID09PSByZXN1bHQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gdGFyZ2V0LmFwcGx5KFxuICAgICAgICAgICAgICAgIHRoYXQsXG4gICAgICAgICAgICAgICAgYXJncy5jb25jYXQoc2xpY2UuY2FsbChhcmd1bWVudHMpKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICB2YXIgYm91bmRMZW5ndGggPSBNYXRoLm1heCgwLCB0YXJnZXQubGVuZ3RoIC0gYXJncy5sZW5ndGgpO1xuICAgIHZhciBib3VuZEFyZ3MgPSBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGJvdW5kTGVuZ3RoOyBpKyspIHtcbiAgICAgICAgYm91bmRBcmdzLnB1c2goJyQnICsgaSk7XG4gICAgfVxuXG4gICAgYm91bmQgPSBGdW5jdGlvbignYmluZGVyJywgJ3JldHVybiBmdW5jdGlvbiAoJyArIGJvdW5kQXJncy5qb2luKCcsJykgKyAnKXsgcmV0dXJuIGJpbmRlci5hcHBseSh0aGlzLGFyZ3VtZW50cyk7IH0nKShiaW5kZXIpO1xuXG4gICAgaWYgKHRhcmdldC5wcm90b3R5cGUpIHtcbiAgICAgICAgdmFyIEVtcHR5ID0gZnVuY3Rpb24gRW1wdHkoKSB7fTtcbiAgICAgICAgRW1wdHkucHJvdG90eXBlID0gdGFyZ2V0LnByb3RvdHlwZTtcbiAgICAgICAgYm91bmQucHJvdG90eXBlID0gbmV3IEVtcHR5KCk7XG4gICAgICAgIEVtcHR5LnByb3RvdHlwZSA9IG51bGw7XG4gICAgfVxuXG4gICAgcmV0dXJuIGJvdW5kO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIGltcGxlbWVudGF0aW9uID0gcmVxdWlyZSgnLi9pbXBsZW1lbnRhdGlvbicpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEZ1bmN0aW9uLnByb3RvdHlwZS5iaW5kIHx8IGltcGxlbWVudGF0aW9uO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdW5kZWZpbmVkO1xuXG52YXIgJFN5bnRheEVycm9yID0gU3ludGF4RXJyb3I7XG52YXIgJEZ1bmN0aW9uID0gRnVuY3Rpb247XG52YXIgJFR5cGVFcnJvciA9IFR5cGVFcnJvcjtcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGNvbnNpc3RlbnQtcmV0dXJuXG52YXIgZ2V0RXZhbGxlZENvbnN0cnVjdG9yID0gZnVuY3Rpb24gKGV4cHJlc3Npb25TeW50YXgpIHtcblx0dHJ5IHtcblx0XHRyZXR1cm4gJEZ1bmN0aW9uKCdcInVzZSBzdHJpY3RcIjsgcmV0dXJuICgnICsgZXhwcmVzc2lvblN5bnRheCArICcpLmNvbnN0cnVjdG9yOycpKCk7XG5cdH0gY2F0Y2ggKGUpIHt9XG59O1xuXG52YXIgJGdPUEQgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuaWYgKCRnT1BEKSB7XG5cdHRyeSB7XG5cdFx0JGdPUEQoe30sICcnKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdCRnT1BEID0gbnVsbDsgLy8gdGhpcyBpcyBJRSA4LCB3aGljaCBoYXMgYSBicm9rZW4gZ09QRFxuXHR9XG59XG5cbnZhciB0aHJvd1R5cGVFcnJvciA9IGZ1bmN0aW9uICgpIHtcblx0dGhyb3cgbmV3ICRUeXBlRXJyb3IoKTtcbn07XG52YXIgVGhyb3dUeXBlRXJyb3IgPSAkZ09QRFxuXHQ/IChmdW5jdGlvbiAoKSB7XG5cdFx0dHJ5IHtcblx0XHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtZXhwcmVzc2lvbnMsIG5vLWNhbGxlciwgbm8tcmVzdHJpY3RlZC1wcm9wZXJ0aWVzXG5cdFx0XHRhcmd1bWVudHMuY2FsbGVlOyAvLyBJRSA4IGRvZXMgbm90IHRocm93IGhlcmVcblx0XHRcdHJldHVybiB0aHJvd1R5cGVFcnJvcjtcblx0XHR9IGNhdGNoIChjYWxsZWVUaHJvd3MpIHtcblx0XHRcdHRyeSB7XG5cdFx0XHRcdC8vIElFIDggdGhyb3dzIG9uIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoYXJndW1lbnRzLCAnJylcblx0XHRcdFx0cmV0dXJuICRnT1BEKGFyZ3VtZW50cywgJ2NhbGxlZScpLmdldDtcblx0XHRcdH0gY2F0Y2ggKGdPUER0aHJvd3MpIHtcblx0XHRcdFx0cmV0dXJuIHRocm93VHlwZUVycm9yO1xuXHRcdFx0fVxuXHRcdH1cblx0fSgpKVxuXHQ6IHRocm93VHlwZUVycm9yO1xuXG52YXIgaGFzU3ltYm9scyA9IHJlcXVpcmUoJ2hhcy1zeW1ib2xzJykoKTtcblxudmFyIGdldFByb3RvID0gT2JqZWN0LmdldFByb3RvdHlwZU9mIHx8IGZ1bmN0aW9uICh4KSB7IHJldHVybiB4Ll9fcHJvdG9fXzsgfTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1wcm90b1xuXG52YXIgbmVlZHNFdmFsID0ge307XG5cbnZhciBUeXBlZEFycmF5ID0gdHlwZW9mIFVpbnQ4QXJyYXkgPT09ICd1bmRlZmluZWQnID8gdW5kZWZpbmVkIDogZ2V0UHJvdG8oVWludDhBcnJheSk7XG5cbnZhciBJTlRSSU5TSUNTID0ge1xuXHQnJUFnZ3JlZ2F0ZUVycm9yJSc6IHR5cGVvZiBBZ2dyZWdhdGVFcnJvciA9PT0gJ3VuZGVmaW5lZCcgPyB1bmRlZmluZWQgOiBBZ2dyZWdhdGVFcnJvcixcblx0JyVBcnJheSUnOiBBcnJheSxcblx0JyVBcnJheUJ1ZmZlciUnOiB0eXBlb2YgQXJyYXlCdWZmZXIgPT09ICd1bmRlZmluZWQnID8gdW5kZWZpbmVkIDogQXJyYXlCdWZmZXIsXG5cdCclQXJyYXlJdGVyYXRvclByb3RvdHlwZSUnOiBoYXNTeW1ib2xzID8gZ2V0UHJvdG8oW11bU3ltYm9sLml0ZXJhdG9yXSgpKSA6IHVuZGVmaW5lZCxcblx0JyVBc3luY0Zyb21TeW5jSXRlcmF0b3JQcm90b3R5cGUlJzogdW5kZWZpbmVkLFxuXHQnJUFzeW5jRnVuY3Rpb24lJzogbmVlZHNFdmFsLFxuXHQnJUFzeW5jR2VuZXJhdG9yJSc6IG5lZWRzRXZhbCxcblx0JyVBc3luY0dlbmVyYXRvckZ1bmN0aW9uJSc6IG5lZWRzRXZhbCxcblx0JyVBc3luY0l0ZXJhdG9yUHJvdG90eXBlJSc6IG5lZWRzRXZhbCxcblx0JyVBdG9taWNzJSc6IHR5cGVvZiBBdG9taWNzID09PSAndW5kZWZpbmVkJyA/IHVuZGVmaW5lZCA6IEF0b21pY3MsXG5cdCclQmlnSW50JSc6IHR5cGVvZiBCaWdJbnQgPT09ICd1bmRlZmluZWQnID8gdW5kZWZpbmVkIDogQmlnSW50LFxuXHQnJUJpZ0ludDY0QXJyYXklJzogdHlwZW9mIEJpZ0ludDY0QXJyYXkgPT09ICd1bmRlZmluZWQnID8gdW5kZWZpbmVkIDogQmlnSW50NjRBcnJheSxcblx0JyVCaWdVaW50NjRBcnJheSUnOiB0eXBlb2YgQmlnVWludDY0QXJyYXkgPT09ICd1bmRlZmluZWQnID8gdW5kZWZpbmVkIDogQmlnVWludDY0QXJyYXksXG5cdCclQm9vbGVhbiUnOiBCb29sZWFuLFxuXHQnJURhdGFWaWV3JSc6IHR5cGVvZiBEYXRhVmlldyA9PT0gJ3VuZGVmaW5lZCcgPyB1bmRlZmluZWQgOiBEYXRhVmlldyxcblx0JyVEYXRlJSc6IERhdGUsXG5cdCclZGVjb2RlVVJJJSc6IGRlY29kZVVSSSxcblx0JyVkZWNvZGVVUklDb21wb25lbnQlJzogZGVjb2RlVVJJQ29tcG9uZW50LFxuXHQnJWVuY29kZVVSSSUnOiBlbmNvZGVVUkksXG5cdCclZW5jb2RlVVJJQ29tcG9uZW50JSc6IGVuY29kZVVSSUNvbXBvbmVudCxcblx0JyVFcnJvciUnOiBFcnJvcixcblx0JyVldmFsJSc6IGV2YWwsIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tZXZhbFxuXHQnJUV2YWxFcnJvciUnOiBFdmFsRXJyb3IsXG5cdCclRmxvYXQzMkFycmF5JSc6IHR5cGVvZiBGbG9hdDMyQXJyYXkgPT09ICd1bmRlZmluZWQnID8gdW5kZWZpbmVkIDogRmxvYXQzMkFycmF5LFxuXHQnJUZsb2F0NjRBcnJheSUnOiB0eXBlb2YgRmxvYXQ2NEFycmF5ID09PSAndW5kZWZpbmVkJyA/IHVuZGVmaW5lZCA6IEZsb2F0NjRBcnJheSxcblx0JyVGaW5hbGl6YXRpb25SZWdpc3RyeSUnOiB0eXBlb2YgRmluYWxpemF0aW9uUmVnaXN0cnkgPT09ICd1bmRlZmluZWQnID8gdW5kZWZpbmVkIDogRmluYWxpemF0aW9uUmVnaXN0cnksXG5cdCclRnVuY3Rpb24lJzogJEZ1bmN0aW9uLFxuXHQnJUdlbmVyYXRvckZ1bmN0aW9uJSc6IG5lZWRzRXZhbCxcblx0JyVJbnQ4QXJyYXklJzogdHlwZW9mIEludDhBcnJheSA9PT0gJ3VuZGVmaW5lZCcgPyB1bmRlZmluZWQgOiBJbnQ4QXJyYXksXG5cdCclSW50MTZBcnJheSUnOiB0eXBlb2YgSW50MTZBcnJheSA9PT0gJ3VuZGVmaW5lZCcgPyB1bmRlZmluZWQgOiBJbnQxNkFycmF5LFxuXHQnJUludDMyQXJyYXklJzogdHlwZW9mIEludDMyQXJyYXkgPT09ICd1bmRlZmluZWQnID8gdW5kZWZpbmVkIDogSW50MzJBcnJheSxcblx0JyVpc0Zpbml0ZSUnOiBpc0Zpbml0ZSxcblx0JyVpc05hTiUnOiBpc05hTixcblx0JyVJdGVyYXRvclByb3RvdHlwZSUnOiBoYXNTeW1ib2xzID8gZ2V0UHJvdG8oZ2V0UHJvdG8oW11bU3ltYm9sLml0ZXJhdG9yXSgpKSkgOiB1bmRlZmluZWQsXG5cdCclSlNPTiUnOiB0eXBlb2YgSlNPTiA9PT0gJ29iamVjdCcgPyBKU09OIDogdW5kZWZpbmVkLFxuXHQnJU1hcCUnOiB0eXBlb2YgTWFwID09PSAndW5kZWZpbmVkJyA/IHVuZGVmaW5lZCA6IE1hcCxcblx0JyVNYXBJdGVyYXRvclByb3RvdHlwZSUnOiB0eXBlb2YgTWFwID09PSAndW5kZWZpbmVkJyB8fCAhaGFzU3ltYm9scyA/IHVuZGVmaW5lZCA6IGdldFByb3RvKG5ldyBNYXAoKVtTeW1ib2wuaXRlcmF0b3JdKCkpLFxuXHQnJU1hdGglJzogTWF0aCxcblx0JyVOdW1iZXIlJzogTnVtYmVyLFxuXHQnJU9iamVjdCUnOiBPYmplY3QsXG5cdCclcGFyc2VGbG9hdCUnOiBwYXJzZUZsb2F0LFxuXHQnJXBhcnNlSW50JSc6IHBhcnNlSW50LFxuXHQnJVByb21pc2UlJzogdHlwZW9mIFByb21pc2UgPT09ICd1bmRlZmluZWQnID8gdW5kZWZpbmVkIDogUHJvbWlzZSxcblx0JyVQcm94eSUnOiB0eXBlb2YgUHJveHkgPT09ICd1bmRlZmluZWQnID8gdW5kZWZpbmVkIDogUHJveHksXG5cdCclUmFuZ2VFcnJvciUnOiBSYW5nZUVycm9yLFxuXHQnJVJlZmVyZW5jZUVycm9yJSc6IFJlZmVyZW5jZUVycm9yLFxuXHQnJVJlZmxlY3QlJzogdHlwZW9mIFJlZmxlY3QgPT09ICd1bmRlZmluZWQnID8gdW5kZWZpbmVkIDogUmVmbGVjdCxcblx0JyVSZWdFeHAlJzogUmVnRXhwLFxuXHQnJVNldCUnOiB0eXBlb2YgU2V0ID09PSAndW5kZWZpbmVkJyA/IHVuZGVmaW5lZCA6IFNldCxcblx0JyVTZXRJdGVyYXRvclByb3RvdHlwZSUnOiB0eXBlb2YgU2V0ID09PSAndW5kZWZpbmVkJyB8fCAhaGFzU3ltYm9scyA/IHVuZGVmaW5lZCA6IGdldFByb3RvKG5ldyBTZXQoKVtTeW1ib2wuaXRlcmF0b3JdKCkpLFxuXHQnJVNoYXJlZEFycmF5QnVmZmVyJSc6IHR5cGVvZiBTaGFyZWRBcnJheUJ1ZmZlciA9PT0gJ3VuZGVmaW5lZCcgPyB1bmRlZmluZWQgOiBTaGFyZWRBcnJheUJ1ZmZlcixcblx0JyVTdHJpbmclJzogU3RyaW5nLFxuXHQnJVN0cmluZ0l0ZXJhdG9yUHJvdG90eXBlJSc6IGhhc1N5bWJvbHMgPyBnZXRQcm90bygnJ1tTeW1ib2wuaXRlcmF0b3JdKCkpIDogdW5kZWZpbmVkLFxuXHQnJVN5bWJvbCUnOiBoYXNTeW1ib2xzID8gU3ltYm9sIDogdW5kZWZpbmVkLFxuXHQnJVN5bnRheEVycm9yJSc6ICRTeW50YXhFcnJvcixcblx0JyVUaHJvd1R5cGVFcnJvciUnOiBUaHJvd1R5cGVFcnJvcixcblx0JyVUeXBlZEFycmF5JSc6IFR5cGVkQXJyYXksXG5cdCclVHlwZUVycm9yJSc6ICRUeXBlRXJyb3IsXG5cdCclVWludDhBcnJheSUnOiB0eXBlb2YgVWludDhBcnJheSA9PT0gJ3VuZGVmaW5lZCcgPyB1bmRlZmluZWQgOiBVaW50OEFycmF5LFxuXHQnJVVpbnQ4Q2xhbXBlZEFycmF5JSc6IHR5cGVvZiBVaW50OENsYW1wZWRBcnJheSA9PT0gJ3VuZGVmaW5lZCcgPyB1bmRlZmluZWQgOiBVaW50OENsYW1wZWRBcnJheSxcblx0JyVVaW50MTZBcnJheSUnOiB0eXBlb2YgVWludDE2QXJyYXkgPT09ICd1bmRlZmluZWQnID8gdW5kZWZpbmVkIDogVWludDE2QXJyYXksXG5cdCclVWludDMyQXJyYXklJzogdHlwZW9mIFVpbnQzMkFycmF5ID09PSAndW5kZWZpbmVkJyA/IHVuZGVmaW5lZCA6IFVpbnQzMkFycmF5LFxuXHQnJVVSSUVycm9yJSc6IFVSSUVycm9yLFxuXHQnJVdlYWtNYXAlJzogdHlwZW9mIFdlYWtNYXAgPT09ICd1bmRlZmluZWQnID8gdW5kZWZpbmVkIDogV2Vha01hcCxcblx0JyVXZWFrUmVmJSc6IHR5cGVvZiBXZWFrUmVmID09PSAndW5kZWZpbmVkJyA/IHVuZGVmaW5lZCA6IFdlYWtSZWYsXG5cdCclV2Vha1NldCUnOiB0eXBlb2YgV2Vha1NldCA9PT0gJ3VuZGVmaW5lZCcgPyB1bmRlZmluZWQgOiBXZWFrU2V0XG59O1xuXG50cnkge1xuXHRudWxsLmVycm9yOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVudXNlZC1leHByZXNzaW9uc1xufSBjYXRjaCAoZSkge1xuXHQvLyBodHRwczovL2dpdGh1Yi5jb20vdGMzOS9wcm9wb3NhbC1zaGFkb3dyZWFsbS9wdWxsLzM4NCNpc3N1ZWNvbW1lbnQtMTM2NDI2NDIyOVxuXHR2YXIgZXJyb3JQcm90byA9IGdldFByb3RvKGdldFByb3RvKGUpKTtcblx0SU5UUklOU0lDU1snJUVycm9yLnByb3RvdHlwZSUnXSA9IGVycm9yUHJvdG87XG59XG5cbnZhciBkb0V2YWwgPSBmdW5jdGlvbiBkb0V2YWwobmFtZSkge1xuXHR2YXIgdmFsdWU7XG5cdGlmIChuYW1lID09PSAnJUFzeW5jRnVuY3Rpb24lJykge1xuXHRcdHZhbHVlID0gZ2V0RXZhbGxlZENvbnN0cnVjdG9yKCdhc3luYyBmdW5jdGlvbiAoKSB7fScpO1xuXHR9IGVsc2UgaWYgKG5hbWUgPT09ICclR2VuZXJhdG9yRnVuY3Rpb24lJykge1xuXHRcdHZhbHVlID0gZ2V0RXZhbGxlZENvbnN0cnVjdG9yKCdmdW5jdGlvbiogKCkge30nKTtcblx0fSBlbHNlIGlmIChuYW1lID09PSAnJUFzeW5jR2VuZXJhdG9yRnVuY3Rpb24lJykge1xuXHRcdHZhbHVlID0gZ2V0RXZhbGxlZENvbnN0cnVjdG9yKCdhc3luYyBmdW5jdGlvbiogKCkge30nKTtcblx0fSBlbHNlIGlmIChuYW1lID09PSAnJUFzeW5jR2VuZXJhdG9yJScpIHtcblx0XHR2YXIgZm4gPSBkb0V2YWwoJyVBc3luY0dlbmVyYXRvckZ1bmN0aW9uJScpO1xuXHRcdGlmIChmbikge1xuXHRcdFx0dmFsdWUgPSBmbi5wcm90b3R5cGU7XG5cdFx0fVxuXHR9IGVsc2UgaWYgKG5hbWUgPT09ICclQXN5bmNJdGVyYXRvclByb3RvdHlwZSUnKSB7XG5cdFx0dmFyIGdlbiA9IGRvRXZhbCgnJUFzeW5jR2VuZXJhdG9yJScpO1xuXHRcdGlmIChnZW4pIHtcblx0XHRcdHZhbHVlID0gZ2V0UHJvdG8oZ2VuLnByb3RvdHlwZSk7XG5cdFx0fVxuXHR9XG5cblx0SU5UUklOU0lDU1tuYW1lXSA9IHZhbHVlO1xuXG5cdHJldHVybiB2YWx1ZTtcbn07XG5cbnZhciBMRUdBQ1lfQUxJQVNFUyA9IHtcblx0JyVBcnJheUJ1ZmZlclByb3RvdHlwZSUnOiBbJ0FycmF5QnVmZmVyJywgJ3Byb3RvdHlwZSddLFxuXHQnJUFycmF5UHJvdG90eXBlJSc6IFsnQXJyYXknLCAncHJvdG90eXBlJ10sXG5cdCclQXJyYXlQcm90b19lbnRyaWVzJSc6IFsnQXJyYXknLCAncHJvdG90eXBlJywgJ2VudHJpZXMnXSxcblx0JyVBcnJheVByb3RvX2ZvckVhY2glJzogWydBcnJheScsICdwcm90b3R5cGUnLCAnZm9yRWFjaCddLFxuXHQnJUFycmF5UHJvdG9fa2V5cyUnOiBbJ0FycmF5JywgJ3Byb3RvdHlwZScsICdrZXlzJ10sXG5cdCclQXJyYXlQcm90b192YWx1ZXMlJzogWydBcnJheScsICdwcm90b3R5cGUnLCAndmFsdWVzJ10sXG5cdCclQXN5bmNGdW5jdGlvblByb3RvdHlwZSUnOiBbJ0FzeW5jRnVuY3Rpb24nLCAncHJvdG90eXBlJ10sXG5cdCclQXN5bmNHZW5lcmF0b3IlJzogWydBc3luY0dlbmVyYXRvckZ1bmN0aW9uJywgJ3Byb3RvdHlwZSddLFxuXHQnJUFzeW5jR2VuZXJhdG9yUHJvdG90eXBlJSc6IFsnQXN5bmNHZW5lcmF0b3JGdW5jdGlvbicsICdwcm90b3R5cGUnLCAncHJvdG90eXBlJ10sXG5cdCclQm9vbGVhblByb3RvdHlwZSUnOiBbJ0Jvb2xlYW4nLCAncHJvdG90eXBlJ10sXG5cdCclRGF0YVZpZXdQcm90b3R5cGUlJzogWydEYXRhVmlldycsICdwcm90b3R5cGUnXSxcblx0JyVEYXRlUHJvdG90eXBlJSc6IFsnRGF0ZScsICdwcm90b3R5cGUnXSxcblx0JyVFcnJvclByb3RvdHlwZSUnOiBbJ0Vycm9yJywgJ3Byb3RvdHlwZSddLFxuXHQnJUV2YWxFcnJvclByb3RvdHlwZSUnOiBbJ0V2YWxFcnJvcicsICdwcm90b3R5cGUnXSxcblx0JyVGbG9hdDMyQXJyYXlQcm90b3R5cGUlJzogWydGbG9hdDMyQXJyYXknLCAncHJvdG90eXBlJ10sXG5cdCclRmxvYXQ2NEFycmF5UHJvdG90eXBlJSc6IFsnRmxvYXQ2NEFycmF5JywgJ3Byb3RvdHlwZSddLFxuXHQnJUZ1bmN0aW9uUHJvdG90eXBlJSc6IFsnRnVuY3Rpb24nLCAncHJvdG90eXBlJ10sXG5cdCclR2VuZXJhdG9yJSc6IFsnR2VuZXJhdG9yRnVuY3Rpb24nLCAncHJvdG90eXBlJ10sXG5cdCclR2VuZXJhdG9yUHJvdG90eXBlJSc6IFsnR2VuZXJhdG9yRnVuY3Rpb24nLCAncHJvdG90eXBlJywgJ3Byb3RvdHlwZSddLFxuXHQnJUludDhBcnJheVByb3RvdHlwZSUnOiBbJ0ludDhBcnJheScsICdwcm90b3R5cGUnXSxcblx0JyVJbnQxNkFycmF5UHJvdG90eXBlJSc6IFsnSW50MTZBcnJheScsICdwcm90b3R5cGUnXSxcblx0JyVJbnQzMkFycmF5UHJvdG90eXBlJSc6IFsnSW50MzJBcnJheScsICdwcm90b3R5cGUnXSxcblx0JyVKU09OUGFyc2UlJzogWydKU09OJywgJ3BhcnNlJ10sXG5cdCclSlNPTlN0cmluZ2lmeSUnOiBbJ0pTT04nLCAnc3RyaW5naWZ5J10sXG5cdCclTWFwUHJvdG90eXBlJSc6IFsnTWFwJywgJ3Byb3RvdHlwZSddLFxuXHQnJU51bWJlclByb3RvdHlwZSUnOiBbJ051bWJlcicsICdwcm90b3R5cGUnXSxcblx0JyVPYmplY3RQcm90b3R5cGUlJzogWydPYmplY3QnLCAncHJvdG90eXBlJ10sXG5cdCclT2JqUHJvdG9fdG9TdHJpbmclJzogWydPYmplY3QnLCAncHJvdG90eXBlJywgJ3RvU3RyaW5nJ10sXG5cdCclT2JqUHJvdG9fdmFsdWVPZiUnOiBbJ09iamVjdCcsICdwcm90b3R5cGUnLCAndmFsdWVPZiddLFxuXHQnJVByb21pc2VQcm90b3R5cGUlJzogWydQcm9taXNlJywgJ3Byb3RvdHlwZSddLFxuXHQnJVByb21pc2VQcm90b190aGVuJSc6IFsnUHJvbWlzZScsICdwcm90b3R5cGUnLCAndGhlbiddLFxuXHQnJVByb21pc2VfYWxsJSc6IFsnUHJvbWlzZScsICdhbGwnXSxcblx0JyVQcm9taXNlX3JlamVjdCUnOiBbJ1Byb21pc2UnLCAncmVqZWN0J10sXG5cdCclUHJvbWlzZV9yZXNvbHZlJSc6IFsnUHJvbWlzZScsICdyZXNvbHZlJ10sXG5cdCclUmFuZ2VFcnJvclByb3RvdHlwZSUnOiBbJ1JhbmdlRXJyb3InLCAncHJvdG90eXBlJ10sXG5cdCclUmVmZXJlbmNlRXJyb3JQcm90b3R5cGUlJzogWydSZWZlcmVuY2VFcnJvcicsICdwcm90b3R5cGUnXSxcblx0JyVSZWdFeHBQcm90b3R5cGUlJzogWydSZWdFeHAnLCAncHJvdG90eXBlJ10sXG5cdCclU2V0UHJvdG90eXBlJSc6IFsnU2V0JywgJ3Byb3RvdHlwZSddLFxuXHQnJVNoYXJlZEFycmF5QnVmZmVyUHJvdG90eXBlJSc6IFsnU2hhcmVkQXJyYXlCdWZmZXInLCAncHJvdG90eXBlJ10sXG5cdCclU3RyaW5nUHJvdG90eXBlJSc6IFsnU3RyaW5nJywgJ3Byb3RvdHlwZSddLFxuXHQnJVN5bWJvbFByb3RvdHlwZSUnOiBbJ1N5bWJvbCcsICdwcm90b3R5cGUnXSxcblx0JyVTeW50YXhFcnJvclByb3RvdHlwZSUnOiBbJ1N5bnRheEVycm9yJywgJ3Byb3RvdHlwZSddLFxuXHQnJVR5cGVkQXJyYXlQcm90b3R5cGUlJzogWydUeXBlZEFycmF5JywgJ3Byb3RvdHlwZSddLFxuXHQnJVR5cGVFcnJvclByb3RvdHlwZSUnOiBbJ1R5cGVFcnJvcicsICdwcm90b3R5cGUnXSxcblx0JyVVaW50OEFycmF5UHJvdG90eXBlJSc6IFsnVWludDhBcnJheScsICdwcm90b3R5cGUnXSxcblx0JyVVaW50OENsYW1wZWRBcnJheVByb3RvdHlwZSUnOiBbJ1VpbnQ4Q2xhbXBlZEFycmF5JywgJ3Byb3RvdHlwZSddLFxuXHQnJVVpbnQxNkFycmF5UHJvdG90eXBlJSc6IFsnVWludDE2QXJyYXknLCAncHJvdG90eXBlJ10sXG5cdCclVWludDMyQXJyYXlQcm90b3R5cGUlJzogWydVaW50MzJBcnJheScsICdwcm90b3R5cGUnXSxcblx0JyVVUklFcnJvclByb3RvdHlwZSUnOiBbJ1VSSUVycm9yJywgJ3Byb3RvdHlwZSddLFxuXHQnJVdlYWtNYXBQcm90b3R5cGUlJzogWydXZWFrTWFwJywgJ3Byb3RvdHlwZSddLFxuXHQnJVdlYWtTZXRQcm90b3R5cGUlJzogWydXZWFrU2V0JywgJ3Byb3RvdHlwZSddXG59O1xuXG52YXIgYmluZCA9IHJlcXVpcmUoJ2Z1bmN0aW9uLWJpbmQnKTtcbnZhciBoYXNPd24gPSByZXF1aXJlKCdoYXMnKTtcbnZhciAkY29uY2F0ID0gYmluZC5jYWxsKEZ1bmN0aW9uLmNhbGwsIEFycmF5LnByb3RvdHlwZS5jb25jYXQpO1xudmFyICRzcGxpY2VBcHBseSA9IGJpbmQuY2FsbChGdW5jdGlvbi5hcHBseSwgQXJyYXkucHJvdG90eXBlLnNwbGljZSk7XG52YXIgJHJlcGxhY2UgPSBiaW5kLmNhbGwoRnVuY3Rpb24uY2FsbCwgU3RyaW5nLnByb3RvdHlwZS5yZXBsYWNlKTtcbnZhciAkc3RyU2xpY2UgPSBiaW5kLmNhbGwoRnVuY3Rpb24uY2FsbCwgU3RyaW5nLnByb3RvdHlwZS5zbGljZSk7XG52YXIgJGV4ZWMgPSBiaW5kLmNhbGwoRnVuY3Rpb24uY2FsbCwgUmVnRXhwLnByb3RvdHlwZS5leGVjKTtcblxuLyogYWRhcHRlZCBmcm9tIGh0dHBzOi8vZ2l0aHViLmNvbS9sb2Rhc2gvbG9kYXNoL2Jsb2IvNC4xNy4xNS9kaXN0L2xvZGFzaC5qcyNMNjczNS1MNjc0NCAqL1xudmFyIHJlUHJvcE5hbWUgPSAvW14lLltcXF1dK3xcXFsoPzooLT9cXGQrKD86XFwuXFxkKyk/KXwoW1wiJ10pKCg/Oig/IVxcMilbXlxcXFxdfFxcXFwuKSo/KVxcMilcXF18KD89KD86XFwufFxcW1xcXSkoPzpcXC58XFxbXFxdfCUkKSkvZztcbnZhciByZUVzY2FwZUNoYXIgPSAvXFxcXChcXFxcKT8vZzsgLyoqIFVzZWQgdG8gbWF0Y2ggYmFja3NsYXNoZXMgaW4gcHJvcGVydHkgcGF0aHMuICovXG52YXIgc3RyaW5nVG9QYXRoID0gZnVuY3Rpb24gc3RyaW5nVG9QYXRoKHN0cmluZykge1xuXHR2YXIgZmlyc3QgPSAkc3RyU2xpY2Uoc3RyaW5nLCAwLCAxKTtcblx0dmFyIGxhc3QgPSAkc3RyU2xpY2Uoc3RyaW5nLCAtMSk7XG5cdGlmIChmaXJzdCA9PT0gJyUnICYmIGxhc3QgIT09ICclJykge1xuXHRcdHRocm93IG5ldyAkU3ludGF4RXJyb3IoJ2ludmFsaWQgaW50cmluc2ljIHN5bnRheCwgZXhwZWN0ZWQgY2xvc2luZyBgJWAnKTtcblx0fSBlbHNlIGlmIChsYXN0ID09PSAnJScgJiYgZmlyc3QgIT09ICclJykge1xuXHRcdHRocm93IG5ldyAkU3ludGF4RXJyb3IoJ2ludmFsaWQgaW50cmluc2ljIHN5bnRheCwgZXhwZWN0ZWQgb3BlbmluZyBgJWAnKTtcblx0fVxuXHR2YXIgcmVzdWx0ID0gW107XG5cdCRyZXBsYWNlKHN0cmluZywgcmVQcm9wTmFtZSwgZnVuY3Rpb24gKG1hdGNoLCBudW1iZXIsIHF1b3RlLCBzdWJTdHJpbmcpIHtcblx0XHRyZXN1bHRbcmVzdWx0Lmxlbmd0aF0gPSBxdW90ZSA/ICRyZXBsYWNlKHN1YlN0cmluZywgcmVFc2NhcGVDaGFyLCAnJDEnKSA6IG51bWJlciB8fCBtYXRjaDtcblx0fSk7XG5cdHJldHVybiByZXN1bHQ7XG59O1xuLyogZW5kIGFkYXB0YXRpb24gKi9cblxudmFyIGdldEJhc2VJbnRyaW5zaWMgPSBmdW5jdGlvbiBnZXRCYXNlSW50cmluc2ljKG5hbWUsIGFsbG93TWlzc2luZykge1xuXHR2YXIgaW50cmluc2ljTmFtZSA9IG5hbWU7XG5cdHZhciBhbGlhcztcblx0aWYgKGhhc093bihMRUdBQ1lfQUxJQVNFUywgaW50cmluc2ljTmFtZSkpIHtcblx0XHRhbGlhcyA9IExFR0FDWV9BTElBU0VTW2ludHJpbnNpY05hbWVdO1xuXHRcdGludHJpbnNpY05hbWUgPSAnJScgKyBhbGlhc1swXSArICclJztcblx0fVxuXG5cdGlmIChoYXNPd24oSU5UUklOU0lDUywgaW50cmluc2ljTmFtZSkpIHtcblx0XHR2YXIgdmFsdWUgPSBJTlRSSU5TSUNTW2ludHJpbnNpY05hbWVdO1xuXHRcdGlmICh2YWx1ZSA9PT0gbmVlZHNFdmFsKSB7XG5cdFx0XHR2YWx1ZSA9IGRvRXZhbChpbnRyaW5zaWNOYW1lKTtcblx0XHR9XG5cdFx0aWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3VuZGVmaW5lZCcgJiYgIWFsbG93TWlzc2luZykge1xuXHRcdFx0dGhyb3cgbmV3ICRUeXBlRXJyb3IoJ2ludHJpbnNpYyAnICsgbmFtZSArICcgZXhpc3RzLCBidXQgaXMgbm90IGF2YWlsYWJsZS4gUGxlYXNlIGZpbGUgYW4gaXNzdWUhJyk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHtcblx0XHRcdGFsaWFzOiBhbGlhcyxcblx0XHRcdG5hbWU6IGludHJpbnNpY05hbWUsXG5cdFx0XHR2YWx1ZTogdmFsdWVcblx0XHR9O1xuXHR9XG5cblx0dGhyb3cgbmV3ICRTeW50YXhFcnJvcignaW50cmluc2ljICcgKyBuYW1lICsgJyBkb2VzIG5vdCBleGlzdCEnKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gR2V0SW50cmluc2ljKG5hbWUsIGFsbG93TWlzc2luZykge1xuXHRpZiAodHlwZW9mIG5hbWUgIT09ICdzdHJpbmcnIHx8IG5hbWUubGVuZ3RoID09PSAwKSB7XG5cdFx0dGhyb3cgbmV3ICRUeXBlRXJyb3IoJ2ludHJpbnNpYyBuYW1lIG11c3QgYmUgYSBub24tZW1wdHkgc3RyaW5nJyk7XG5cdH1cblx0aWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIHR5cGVvZiBhbGxvd01pc3NpbmcgIT09ICdib29sZWFuJykge1xuXHRcdHRocm93IG5ldyAkVHlwZUVycm9yKCdcImFsbG93TWlzc2luZ1wiIGFyZ3VtZW50IG11c3QgYmUgYSBib29sZWFuJyk7XG5cdH1cblxuXHRpZiAoJGV4ZWMoL14lP1teJV0qJT8kLywgbmFtZSkgPT09IG51bGwpIHtcblx0XHR0aHJvdyBuZXcgJFN5bnRheEVycm9yKCdgJWAgbWF5IG5vdCBiZSBwcmVzZW50IGFueXdoZXJlIGJ1dCBhdCB0aGUgYmVnaW5uaW5nIGFuZCBlbmQgb2YgdGhlIGludHJpbnNpYyBuYW1lJyk7XG5cdH1cblx0dmFyIHBhcnRzID0gc3RyaW5nVG9QYXRoKG5hbWUpO1xuXHR2YXIgaW50cmluc2ljQmFzZU5hbWUgPSBwYXJ0cy5sZW5ndGggPiAwID8gcGFydHNbMF0gOiAnJztcblxuXHR2YXIgaW50cmluc2ljID0gZ2V0QmFzZUludHJpbnNpYygnJScgKyBpbnRyaW5zaWNCYXNlTmFtZSArICclJywgYWxsb3dNaXNzaW5nKTtcblx0dmFyIGludHJpbnNpY1JlYWxOYW1lID0gaW50cmluc2ljLm5hbWU7XG5cdHZhciB2YWx1ZSA9IGludHJpbnNpYy52YWx1ZTtcblx0dmFyIHNraXBGdXJ0aGVyQ2FjaGluZyA9IGZhbHNlO1xuXG5cdHZhciBhbGlhcyA9IGludHJpbnNpYy5hbGlhcztcblx0aWYgKGFsaWFzKSB7XG5cdFx0aW50cmluc2ljQmFzZU5hbWUgPSBhbGlhc1swXTtcblx0XHQkc3BsaWNlQXBwbHkocGFydHMsICRjb25jYXQoWzAsIDFdLCBhbGlhcykpO1xuXHR9XG5cblx0Zm9yICh2YXIgaSA9IDEsIGlzT3duID0gdHJ1ZTsgaSA8IHBhcnRzLmxlbmd0aDsgaSArPSAxKSB7XG5cdFx0dmFyIHBhcnQgPSBwYXJ0c1tpXTtcblx0XHR2YXIgZmlyc3QgPSAkc3RyU2xpY2UocGFydCwgMCwgMSk7XG5cdFx0dmFyIGxhc3QgPSAkc3RyU2xpY2UocGFydCwgLTEpO1xuXHRcdGlmIChcblx0XHRcdChcblx0XHRcdFx0KGZpcnN0ID09PSAnXCInIHx8IGZpcnN0ID09PSBcIidcIiB8fCBmaXJzdCA9PT0gJ2AnKVxuXHRcdFx0XHR8fCAobGFzdCA9PT0gJ1wiJyB8fCBsYXN0ID09PSBcIidcIiB8fCBsYXN0ID09PSAnYCcpXG5cdFx0XHQpXG5cdFx0XHQmJiBmaXJzdCAhPT0gbGFzdFxuXHRcdCkge1xuXHRcdFx0dGhyb3cgbmV3ICRTeW50YXhFcnJvcigncHJvcGVydHkgbmFtZXMgd2l0aCBxdW90ZXMgbXVzdCBoYXZlIG1hdGNoaW5nIHF1b3RlcycpO1xuXHRcdH1cblx0XHRpZiAocGFydCA9PT0gJ2NvbnN0cnVjdG9yJyB8fCAhaXNPd24pIHtcblx0XHRcdHNraXBGdXJ0aGVyQ2FjaGluZyA9IHRydWU7XG5cdFx0fVxuXG5cdFx0aW50cmluc2ljQmFzZU5hbWUgKz0gJy4nICsgcGFydDtcblx0XHRpbnRyaW5zaWNSZWFsTmFtZSA9ICclJyArIGludHJpbnNpY0Jhc2VOYW1lICsgJyUnO1xuXG5cdFx0aWYgKGhhc093bihJTlRSSU5TSUNTLCBpbnRyaW5zaWNSZWFsTmFtZSkpIHtcblx0XHRcdHZhbHVlID0gSU5UUklOU0lDU1tpbnRyaW5zaWNSZWFsTmFtZV07XG5cdFx0fSBlbHNlIGlmICh2YWx1ZSAhPSBudWxsKSB7XG5cdFx0XHRpZiAoIShwYXJ0IGluIHZhbHVlKSkge1xuXHRcdFx0XHRpZiAoIWFsbG93TWlzc2luZykge1xuXHRcdFx0XHRcdHRocm93IG5ldyAkVHlwZUVycm9yKCdiYXNlIGludHJpbnNpYyBmb3IgJyArIG5hbWUgKyAnIGV4aXN0cywgYnV0IHRoZSBwcm9wZXJ0eSBpcyBub3QgYXZhaWxhYmxlLicpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiB2b2lkIHVuZGVmaW5lZDtcblx0XHRcdH1cblx0XHRcdGlmICgkZ09QRCAmJiAoaSArIDEpID49IHBhcnRzLmxlbmd0aCkge1xuXHRcdFx0XHR2YXIgZGVzYyA9ICRnT1BEKHZhbHVlLCBwYXJ0KTtcblx0XHRcdFx0aXNPd24gPSAhIWRlc2M7XG5cblx0XHRcdFx0Ly8gQnkgY29udmVudGlvbiwgd2hlbiBhIGRhdGEgcHJvcGVydHkgaXMgY29udmVydGVkIHRvIGFuIGFjY2Vzc29yXG5cdFx0XHRcdC8vIHByb3BlcnR5IHRvIGVtdWxhdGUgYSBkYXRhIHByb3BlcnR5IHRoYXQgZG9lcyBub3Qgc3VmZmVyIGZyb21cblx0XHRcdFx0Ly8gdGhlIG92ZXJyaWRlIG1pc3Rha2UsIHRoYXQgYWNjZXNzb3IncyBnZXR0ZXIgaXMgbWFya2VkIHdpdGhcblx0XHRcdFx0Ly8gYW4gYG9yaWdpbmFsVmFsdWVgIHByb3BlcnR5LiBIZXJlLCB3aGVuIHdlIGRldGVjdCB0aGlzLCB3ZVxuXHRcdFx0XHQvLyB1cGhvbGQgdGhlIGlsbHVzaW9uIGJ5IHByZXRlbmRpbmcgdG8gc2VlIHRoYXQgb3JpZ2luYWwgZGF0YVxuXHRcdFx0XHQvLyBwcm9wZXJ0eSwgaS5lLiwgcmV0dXJuaW5nIHRoZSB2YWx1ZSByYXRoZXIgdGhhbiB0aGUgZ2V0dGVyXG5cdFx0XHRcdC8vIGl0c2VsZi5cblx0XHRcdFx0aWYgKGlzT3duICYmICdnZXQnIGluIGRlc2MgJiYgISgnb3JpZ2luYWxWYWx1ZScgaW4gZGVzYy5nZXQpKSB7XG5cdFx0XHRcdFx0dmFsdWUgPSBkZXNjLmdldDtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHR2YWx1ZSA9IHZhbHVlW3BhcnRdO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRpc093biA9IGhhc093bih2YWx1ZSwgcGFydCk7XG5cdFx0XHRcdHZhbHVlID0gdmFsdWVbcGFydF07XG5cdFx0XHR9XG5cblx0XHRcdGlmIChpc093biAmJiAhc2tpcEZ1cnRoZXJDYWNoaW5nKSB7XG5cdFx0XHRcdElOVFJJTlNJQ1NbaW50cmluc2ljUmVhbE5hbWVdID0gdmFsdWU7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cdHJldHVybiB2YWx1ZTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBHZXRJbnRyaW5zaWMgPSByZXF1aXJlKCdnZXQtaW50cmluc2ljJyk7XG5cbnZhciAkZ09QRCA9IEdldEludHJpbnNpYygnJU9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IlJywgdHJ1ZSk7XG5cbmlmICgkZ09QRCkge1xuXHR0cnkge1xuXHRcdCRnT1BEKFtdLCAnbGVuZ3RoJyk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHQvLyBJRSA4IGhhcyBhIGJyb2tlbiBnT1BEXG5cdFx0JGdPUEQgPSBudWxsO1xuXHR9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gJGdPUEQ7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBHZXRJbnRyaW5zaWMgPSByZXF1aXJlKCdnZXQtaW50cmluc2ljJyk7XG5cbnZhciAkZGVmaW5lUHJvcGVydHkgPSBHZXRJbnRyaW5zaWMoJyVPYmplY3QuZGVmaW5lUHJvcGVydHklJywgdHJ1ZSk7XG5cbnZhciBoYXNQcm9wZXJ0eURlc2NyaXB0b3JzID0gZnVuY3Rpb24gaGFzUHJvcGVydHlEZXNjcmlwdG9ycygpIHtcblx0aWYgKCRkZWZpbmVQcm9wZXJ0eSkge1xuXHRcdHRyeSB7XG5cdFx0XHQkZGVmaW5lUHJvcGVydHkoe30sICdhJywgeyB2YWx1ZTogMSB9KTtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH0gY2F0Y2ggKGUpIHtcblx0XHRcdC8vIElFIDggaGFzIGEgYnJva2VuIGRlZmluZVByb3BlcnR5XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHR9XG5cdHJldHVybiBmYWxzZTtcbn07XG5cbmhhc1Byb3BlcnR5RGVzY3JpcHRvcnMuaGFzQXJyYXlMZW5ndGhEZWZpbmVCdWcgPSBmdW5jdGlvbiBoYXNBcnJheUxlbmd0aERlZmluZUJ1ZygpIHtcblx0Ly8gbm9kZSB2MC42IGhhcyBhIGJ1ZyB3aGVyZSBhcnJheSBsZW5ndGhzIGNhbiBiZSBTZXQgYnV0IG5vdCBEZWZpbmVkXG5cdGlmICghaGFzUHJvcGVydHlEZXNjcmlwdG9ycygpKSB7XG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cblx0dHJ5IHtcblx0XHRyZXR1cm4gJGRlZmluZVByb3BlcnR5KFtdLCAnbGVuZ3RoJywgeyB2YWx1ZTogMSB9KS5sZW5ndGggIT09IDE7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHQvLyBJbiBGaXJlZm94IDQtMjIsIGRlZmluaW5nIGxlbmd0aCBvbiBhbiBhcnJheSB0aHJvd3MgYW4gZXhjZXB0aW9uLlxuXHRcdHJldHVybiB0cnVlO1xuXHR9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGhhc1Byb3BlcnR5RGVzY3JpcHRvcnM7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBvcmlnU3ltYm9sID0gdHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sO1xudmFyIGhhc1N5bWJvbFNoYW0gPSByZXF1aXJlKCcuL3NoYW1zJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaGFzTmF0aXZlU3ltYm9scygpIHtcblx0aWYgKHR5cGVvZiBvcmlnU3ltYm9sICE9PSAnZnVuY3Rpb24nKSB7IHJldHVybiBmYWxzZTsgfVxuXHRpZiAodHlwZW9mIFN5bWJvbCAhPT0gJ2Z1bmN0aW9uJykgeyByZXR1cm4gZmFsc2U7IH1cblx0aWYgKHR5cGVvZiBvcmlnU3ltYm9sKCdmb28nKSAhPT0gJ3N5bWJvbCcpIHsgcmV0dXJuIGZhbHNlOyB9XG5cdGlmICh0eXBlb2YgU3ltYm9sKCdiYXInKSAhPT0gJ3N5bWJvbCcpIHsgcmV0dXJuIGZhbHNlOyB9XG5cblx0cmV0dXJuIGhhc1N5bWJvbFNoYW0oKTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbi8qIGVzbGludCBjb21wbGV4aXR5OiBbMiwgMThdLCBtYXgtc3RhdGVtZW50czogWzIsIDMzXSAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBoYXNTeW1ib2xzKCkge1xuXHRpZiAodHlwZW9mIFN5bWJvbCAhPT0gJ2Z1bmN0aW9uJyB8fCB0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyAhPT0gJ2Z1bmN0aW9uJykgeyByZXR1cm4gZmFsc2U7IH1cblx0aWYgKHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09ICdzeW1ib2wnKSB7IHJldHVybiB0cnVlOyB9XG5cblx0dmFyIG9iaiA9IHt9O1xuXHR2YXIgc3ltID0gU3ltYm9sKCd0ZXN0Jyk7XG5cdHZhciBzeW1PYmogPSBPYmplY3Qoc3ltKTtcblx0aWYgKHR5cGVvZiBzeW0gPT09ICdzdHJpbmcnKSB7IHJldHVybiBmYWxzZTsgfVxuXG5cdGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoc3ltKSAhPT0gJ1tvYmplY3QgU3ltYm9sXScpIHsgcmV0dXJuIGZhbHNlOyB9XG5cdGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoc3ltT2JqKSAhPT0gJ1tvYmplY3QgU3ltYm9sXScpIHsgcmV0dXJuIGZhbHNlOyB9XG5cblx0Ly8gdGVtcCBkaXNhYmxlZCBwZXIgaHR0cHM6Ly9naXRodWIuY29tL2xqaGFyYi9vYmplY3QuYXNzaWduL2lzc3Vlcy8xN1xuXHQvLyBpZiAoc3ltIGluc3RhbmNlb2YgU3ltYm9sKSB7IHJldHVybiBmYWxzZTsgfVxuXHQvLyB0ZW1wIGRpc2FibGVkIHBlciBodHRwczovL2dpdGh1Yi5jb20vV2ViUmVmbGVjdGlvbi9nZXQtb3duLXByb3BlcnR5LXN5bWJvbHMvaXNzdWVzLzRcblx0Ly8gaWYgKCEoc3ltT2JqIGluc3RhbmNlb2YgU3ltYm9sKSkgeyByZXR1cm4gZmFsc2U7IH1cblxuXHQvLyBpZiAodHlwZW9mIFN5bWJvbC5wcm90b3R5cGUudG9TdHJpbmcgIT09ICdmdW5jdGlvbicpIHsgcmV0dXJuIGZhbHNlOyB9XG5cdC8vIGlmIChTdHJpbmcoc3ltKSAhPT0gU3ltYm9sLnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHN5bSkpIHsgcmV0dXJuIGZhbHNlOyB9XG5cblx0dmFyIHN5bVZhbCA9IDQyO1xuXHRvYmpbc3ltXSA9IHN5bVZhbDtcblx0Zm9yIChzeW0gaW4gb2JqKSB7IHJldHVybiBmYWxzZTsgfSAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXJlc3RyaWN0ZWQtc3ludGF4LCBuby11bnJlYWNoYWJsZS1sb29wXG5cdGlmICh0eXBlb2YgT2JqZWN0LmtleXMgPT09ICdmdW5jdGlvbicgJiYgT2JqZWN0LmtleXMob2JqKS5sZW5ndGggIT09IDApIHsgcmV0dXJuIGZhbHNlOyB9XG5cblx0aWYgKHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyA9PT0gJ2Z1bmN0aW9uJyAmJiBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhvYmopLmxlbmd0aCAhPT0gMCkgeyByZXR1cm4gZmFsc2U7IH1cblxuXHR2YXIgc3ltcyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMob2JqKTtcblx0aWYgKHN5bXMubGVuZ3RoICE9PSAxIHx8IHN5bXNbMF0gIT09IHN5bSkgeyByZXR1cm4gZmFsc2U7IH1cblxuXHRpZiAoIU9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChvYmosIHN5bSkpIHsgcmV0dXJuIGZhbHNlOyB9XG5cblx0aWYgKHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0dmFyIGRlc2NyaXB0b3IgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iaiwgc3ltKTtcblx0XHRpZiAoZGVzY3JpcHRvci52YWx1ZSAhPT0gc3ltVmFsIHx8IGRlc2NyaXB0b3IuZW51bWVyYWJsZSAhPT0gdHJ1ZSkgeyByZXR1cm4gZmFsc2U7IH1cblx0fVxuXG5cdHJldHVybiB0cnVlO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIGhhc1N5bWJvbHMgPSByZXF1aXJlKCdoYXMtc3ltYm9scy9zaGFtcycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGhhc1RvU3RyaW5nVGFnU2hhbXMoKSB7XG5cdHJldHVybiBoYXNTeW1ib2xzKCkgJiYgISFTeW1ib2wudG9TdHJpbmdUYWc7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgYmluZCA9IHJlcXVpcmUoJ2Z1bmN0aW9uLWJpbmQnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBiaW5kLmNhbGwoRnVuY3Rpb24uY2FsbCwgT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eSk7XG4iLCJpZiAodHlwZW9mIE9iamVjdC5jcmVhdGUgPT09ICdmdW5jdGlvbicpIHtcbiAgLy8gaW1wbGVtZW50YXRpb24gZnJvbSBzdGFuZGFyZCBub2RlLmpzICd1dGlsJyBtb2R1bGVcbiAgbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBpbmhlcml0cyhjdG9yLCBzdXBlckN0b3IpIHtcbiAgICBpZiAoc3VwZXJDdG9yKSB7XG4gICAgICBjdG9yLnN1cGVyXyA9IHN1cGVyQ3RvclxuICAgICAgY3Rvci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ3Rvci5wcm90b3R5cGUsIHtcbiAgICAgICAgY29uc3RydWN0b3I6IHtcbiAgICAgICAgICB2YWx1ZTogY3RvcixcbiAgICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gIH07XG59IGVsc2Uge1xuICAvLyBvbGQgc2Nob29sIHNoaW0gZm9yIG9sZCBicm93c2Vyc1xuICBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGluaGVyaXRzKGN0b3IsIHN1cGVyQ3Rvcikge1xuICAgIGlmIChzdXBlckN0b3IpIHtcbiAgICAgIGN0b3Iuc3VwZXJfID0gc3VwZXJDdG9yXG4gICAgICB2YXIgVGVtcEN0b3IgPSBmdW5jdGlvbiAoKSB7fVxuICAgICAgVGVtcEN0b3IucHJvdG90eXBlID0gc3VwZXJDdG9yLnByb3RvdHlwZVxuICAgICAgY3Rvci5wcm90b3R5cGUgPSBuZXcgVGVtcEN0b3IoKVxuICAgICAgY3Rvci5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBjdG9yXG4gICAgfVxuICB9XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBoYXNUb1N0cmluZ1RhZyA9IHJlcXVpcmUoJ2hhcy10b3N0cmluZ3RhZy9zaGFtcycpKCk7XG52YXIgY2FsbEJvdW5kID0gcmVxdWlyZSgnY2FsbC1iaW5kL2NhbGxCb3VuZCcpO1xuXG52YXIgJHRvU3RyaW5nID0gY2FsbEJvdW5kKCdPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nJyk7XG5cbnZhciBpc1N0YW5kYXJkQXJndW1lbnRzID0gZnVuY3Rpb24gaXNBcmd1bWVudHModmFsdWUpIHtcblx0aWYgKGhhc1RvU3RyaW5nVGFnICYmIHZhbHVlICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnIGluIHZhbHVlKSB7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cdHJldHVybiAkdG9TdHJpbmcodmFsdWUpID09PSAnW29iamVjdCBBcmd1bWVudHNdJztcbn07XG5cbnZhciBpc0xlZ2FjeUFyZ3VtZW50cyA9IGZ1bmN0aW9uIGlzQXJndW1lbnRzKHZhbHVlKSB7XG5cdGlmIChpc1N0YW5kYXJkQXJndW1lbnRzKHZhbHVlKSkge1xuXHRcdHJldHVybiB0cnVlO1xuXHR9XG5cdHJldHVybiB2YWx1ZSAhPT0gbnVsbCAmJlxuXHRcdHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiZcblx0XHR0eXBlb2YgdmFsdWUubGVuZ3RoID09PSAnbnVtYmVyJyAmJlxuXHRcdHZhbHVlLmxlbmd0aCA+PSAwICYmXG5cdFx0JHRvU3RyaW5nKHZhbHVlKSAhPT0gJ1tvYmplY3QgQXJyYXldJyAmJlxuXHRcdCR0b1N0cmluZyh2YWx1ZS5jYWxsZWUpID09PSAnW29iamVjdCBGdW5jdGlvbl0nO1xufTtcblxudmFyIHN1cHBvcnRzU3RhbmRhcmRBcmd1bWVudHMgPSAoZnVuY3Rpb24gKCkge1xuXHRyZXR1cm4gaXNTdGFuZGFyZEFyZ3VtZW50cyhhcmd1bWVudHMpO1xufSgpKTtcblxuaXNTdGFuZGFyZEFyZ3VtZW50cy5pc0xlZ2FjeUFyZ3VtZW50cyA9IGlzTGVnYWN5QXJndW1lbnRzOyAvLyBmb3IgdGVzdHNcblxubW9kdWxlLmV4cG9ydHMgPSBzdXBwb3J0c1N0YW5kYXJkQXJndW1lbnRzID8gaXNTdGFuZGFyZEFyZ3VtZW50cyA6IGlzTGVnYWN5QXJndW1lbnRzO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgZm5Ub1N0ciA9IEZ1bmN0aW9uLnByb3RvdHlwZS50b1N0cmluZztcbnZhciByZWZsZWN0QXBwbHkgPSB0eXBlb2YgUmVmbGVjdCA9PT0gJ29iamVjdCcgJiYgUmVmbGVjdCAhPT0gbnVsbCAmJiBSZWZsZWN0LmFwcGx5O1xudmFyIGJhZEFycmF5TGlrZTtcbnZhciBpc0NhbGxhYmxlTWFya2VyO1xuaWYgKHR5cGVvZiByZWZsZWN0QXBwbHkgPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSA9PT0gJ2Z1bmN0aW9uJykge1xuXHR0cnkge1xuXHRcdGJhZEFycmF5TGlrZSA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh7fSwgJ2xlbmd0aCcsIHtcblx0XHRcdGdldDogZnVuY3Rpb24gKCkge1xuXHRcdFx0XHR0aHJvdyBpc0NhbGxhYmxlTWFya2VyO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdGlzQ2FsbGFibGVNYXJrZXIgPSB7fTtcblx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdGhyb3ctbGl0ZXJhbFxuXHRcdHJlZmxlY3RBcHBseShmdW5jdGlvbiAoKSB7IHRocm93IDQyOyB9LCBudWxsLCBiYWRBcnJheUxpa2UpO1xuXHR9IGNhdGNoIChfKSB7XG5cdFx0aWYgKF8gIT09IGlzQ2FsbGFibGVNYXJrZXIpIHtcblx0XHRcdHJlZmxlY3RBcHBseSA9IG51bGw7XG5cdFx0fVxuXHR9XG59IGVsc2Uge1xuXHRyZWZsZWN0QXBwbHkgPSBudWxsO1xufVxuXG52YXIgY29uc3RydWN0b3JSZWdleCA9IC9eXFxzKmNsYXNzXFxiLztcbnZhciBpc0VTNkNsYXNzRm4gPSBmdW5jdGlvbiBpc0VTNkNsYXNzRnVuY3Rpb24odmFsdWUpIHtcblx0dHJ5IHtcblx0XHR2YXIgZm5TdHIgPSBmblRvU3RyLmNhbGwodmFsdWUpO1xuXHRcdHJldHVybiBjb25zdHJ1Y3RvclJlZ2V4LnRlc3QoZm5TdHIpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0cmV0dXJuIGZhbHNlOyAvLyBub3QgYSBmdW5jdGlvblxuXHR9XG59O1xuXG52YXIgdHJ5RnVuY3Rpb25PYmplY3QgPSBmdW5jdGlvbiB0cnlGdW5jdGlvblRvU3RyKHZhbHVlKSB7XG5cdHRyeSB7XG5cdFx0aWYgKGlzRVM2Q2xhc3NGbih2YWx1ZSkpIHsgcmV0dXJuIGZhbHNlOyB9XG5cdFx0Zm5Ub1N0ci5jYWxsKHZhbHVlKTtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdHJldHVybiBmYWxzZTtcblx0fVxufTtcbnZhciB0b1N0ciA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmc7XG52YXIgb2JqZWN0Q2xhc3MgPSAnW29iamVjdCBPYmplY3RdJztcbnZhciBmbkNsYXNzID0gJ1tvYmplY3QgRnVuY3Rpb25dJztcbnZhciBnZW5DbGFzcyA9ICdbb2JqZWN0IEdlbmVyYXRvckZ1bmN0aW9uXSc7XG52YXIgZGRhQ2xhc3MgPSAnW29iamVjdCBIVE1MQWxsQ29sbGVjdGlvbl0nOyAvLyBJRSAxMVxudmFyIGRkYUNsYXNzMiA9ICdbb2JqZWN0IEhUTUwgZG9jdW1lbnQuYWxsIGNsYXNzXSc7XG52YXIgZGRhQ2xhc3MzID0gJ1tvYmplY3QgSFRNTENvbGxlY3Rpb25dJzsgLy8gSUUgOS0xMFxudmFyIGhhc1RvU3RyaW5nVGFnID0gdHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiAhIVN5bWJvbC50b1N0cmluZ1RhZzsgLy8gYmV0dGVyOiB1c2UgYGhhcy10b3N0cmluZ3RhZ2BcblxudmFyIGlzSUU2OCA9ICEoMCBpbiBbLF0pOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXNwYXJzZS1hcnJheXMsIGNvbW1hLXNwYWNpbmdcblxudmFyIGlzRERBID0gZnVuY3Rpb24gaXNEb2N1bWVudERvdEFsbCgpIHsgcmV0dXJuIGZhbHNlOyB9O1xuaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gJ29iamVjdCcpIHtcblx0Ly8gRmlyZWZveCAzIGNhbm9uaWNhbGl6ZXMgRERBIHRvIHVuZGVmaW5lZCB3aGVuIGl0J3Mgbm90IGFjY2Vzc2VkIGRpcmVjdGx5XG5cdHZhciBhbGwgPSBkb2N1bWVudC5hbGw7XG5cdGlmICh0b1N0ci5jYWxsKGFsbCkgPT09IHRvU3RyLmNhbGwoZG9jdW1lbnQuYWxsKSkge1xuXHRcdGlzRERBID0gZnVuY3Rpb24gaXNEb2N1bWVudERvdEFsbCh2YWx1ZSkge1xuXHRcdFx0LyogZ2xvYmFscyBkb2N1bWVudDogZmFsc2UgKi9cblx0XHRcdC8vIGluIElFIDYtOCwgdHlwZW9mIGRvY3VtZW50LmFsbCBpcyBcIm9iamVjdFwiIGFuZCBpdCdzIHRydXRoeVxuXHRcdFx0aWYgKChpc0lFNjggfHwgIXZhbHVlKSAmJiAodHlwZW9mIHZhbHVlID09PSAndW5kZWZpbmVkJyB8fCB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnKSkge1xuXHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdHZhciBzdHIgPSB0b1N0ci5jYWxsKHZhbHVlKTtcblx0XHRcdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHRcdFx0c3RyID09PSBkZGFDbGFzc1xuXHRcdFx0XHRcdFx0fHwgc3RyID09PSBkZGFDbGFzczJcblx0XHRcdFx0XHRcdHx8IHN0ciA9PT0gZGRhQ2xhc3MzIC8vIG9wZXJhIDEyLjE2XG5cdFx0XHRcdFx0XHR8fCBzdHIgPT09IG9iamVjdENsYXNzIC8vIElFIDYtOFxuXHRcdFx0XHRcdCkgJiYgdmFsdWUoJycpID09IG51bGw7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgZXFlcWVxXG5cdFx0XHRcdH0gY2F0Y2ggKGUpIHsgLyoqLyB9XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fTtcblx0fVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHJlZmxlY3RBcHBseVxuXHQ/IGZ1bmN0aW9uIGlzQ2FsbGFibGUodmFsdWUpIHtcblx0XHRpZiAoaXNEREEodmFsdWUpKSB7IHJldHVybiB0cnVlOyB9XG5cdFx0aWYgKCF2YWx1ZSkgeyByZXR1cm4gZmFsc2U7IH1cblx0XHRpZiAodHlwZW9mIHZhbHVlICE9PSAnZnVuY3Rpb24nICYmIHR5cGVvZiB2YWx1ZSAhPT0gJ29iamVjdCcpIHsgcmV0dXJuIGZhbHNlOyB9XG5cdFx0dHJ5IHtcblx0XHRcdHJlZmxlY3RBcHBseSh2YWx1ZSwgbnVsbCwgYmFkQXJyYXlMaWtlKTtcblx0XHR9IGNhdGNoIChlKSB7XG5cdFx0XHRpZiAoZSAhPT0gaXNDYWxsYWJsZU1hcmtlcikgeyByZXR1cm4gZmFsc2U7IH1cblx0XHR9XG5cdFx0cmV0dXJuICFpc0VTNkNsYXNzRm4odmFsdWUpICYmIHRyeUZ1bmN0aW9uT2JqZWN0KHZhbHVlKTtcblx0fVxuXHQ6IGZ1bmN0aW9uIGlzQ2FsbGFibGUodmFsdWUpIHtcblx0XHRpZiAoaXNEREEodmFsdWUpKSB7IHJldHVybiB0cnVlOyB9XG5cdFx0aWYgKCF2YWx1ZSkgeyByZXR1cm4gZmFsc2U7IH1cblx0XHRpZiAodHlwZW9mIHZhbHVlICE9PSAnZnVuY3Rpb24nICYmIHR5cGVvZiB2YWx1ZSAhPT0gJ29iamVjdCcpIHsgcmV0dXJuIGZhbHNlOyB9XG5cdFx0aWYgKGhhc1RvU3RyaW5nVGFnKSB7IHJldHVybiB0cnlGdW5jdGlvbk9iamVjdCh2YWx1ZSk7IH1cblx0XHRpZiAoaXNFUzZDbGFzc0ZuKHZhbHVlKSkgeyByZXR1cm4gZmFsc2U7IH1cblx0XHR2YXIgc3RyQ2xhc3MgPSB0b1N0ci5jYWxsKHZhbHVlKTtcblx0XHRpZiAoc3RyQ2xhc3MgIT09IGZuQ2xhc3MgJiYgc3RyQ2xhc3MgIT09IGdlbkNsYXNzICYmICEoL15cXFtvYmplY3QgSFRNTC8pLnRlc3Qoc3RyQ2xhc3MpKSB7IHJldHVybiBmYWxzZTsgfVxuXHRcdHJldHVybiB0cnlGdW5jdGlvbk9iamVjdCh2YWx1ZSk7XG5cdH07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB0b1N0ciA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmc7XG52YXIgZm5Ub1N0ciA9IEZ1bmN0aW9uLnByb3RvdHlwZS50b1N0cmluZztcbnZhciBpc0ZuUmVnZXggPSAvXlxccyooPzpmdW5jdGlvbik/XFwqLztcbnZhciBoYXNUb1N0cmluZ1RhZyA9IHJlcXVpcmUoJ2hhcy10b3N0cmluZ3RhZy9zaGFtcycpKCk7XG52YXIgZ2V0UHJvdG8gPSBPYmplY3QuZ2V0UHJvdG90eXBlT2Y7XG52YXIgZ2V0R2VuZXJhdG9yRnVuYyA9IGZ1bmN0aW9uICgpIHsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBjb25zaXN0ZW50LXJldHVyblxuXHRpZiAoIWhhc1RvU3RyaW5nVGFnKSB7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cdHRyeSB7XG5cdFx0cmV0dXJuIEZ1bmN0aW9uKCdyZXR1cm4gZnVuY3Rpb24qKCkge30nKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdH1cbn07XG52YXIgR2VuZXJhdG9yRnVuY3Rpb247XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaXNHZW5lcmF0b3JGdW5jdGlvbihmbikge1xuXHRpZiAodHlwZW9mIGZuICE9PSAnZnVuY3Rpb24nKSB7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cdGlmIChpc0ZuUmVnZXgudGVzdChmblRvU3RyLmNhbGwoZm4pKSkge1xuXHRcdHJldHVybiB0cnVlO1xuXHR9XG5cdGlmICghaGFzVG9TdHJpbmdUYWcpIHtcblx0XHR2YXIgc3RyID0gdG9TdHIuY2FsbChmbik7XG5cdFx0cmV0dXJuIHN0ciA9PT0gJ1tvYmplY3QgR2VuZXJhdG9yRnVuY3Rpb25dJztcblx0fVxuXHRpZiAoIWdldFByb3RvKSB7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cdGlmICh0eXBlb2YgR2VuZXJhdG9yRnVuY3Rpb24gPT09ICd1bmRlZmluZWQnKSB7XG5cdFx0dmFyIGdlbmVyYXRvckZ1bmMgPSBnZXRHZW5lcmF0b3JGdW5jKCk7XG5cdFx0R2VuZXJhdG9yRnVuY3Rpb24gPSBnZW5lcmF0b3JGdW5jID8gZ2V0UHJvdG8oZ2VuZXJhdG9yRnVuYykgOiBmYWxzZTtcblx0fVxuXHRyZXR1cm4gZ2V0UHJvdG8oZm4pID09PSBHZW5lcmF0b3JGdW5jdGlvbjtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbi8qIGh0dHA6Ly93d3cuZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi82LjAvI3NlYy1udW1iZXIuaXNuYW4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBpc05hTih2YWx1ZSkge1xuXHRyZXR1cm4gdmFsdWUgIT09IHZhbHVlO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIGNhbGxCaW5kID0gcmVxdWlyZSgnY2FsbC1iaW5kJyk7XG52YXIgZGVmaW5lID0gcmVxdWlyZSgnZGVmaW5lLXByb3BlcnRpZXMnKTtcblxudmFyIGltcGxlbWVudGF0aW9uID0gcmVxdWlyZSgnLi9pbXBsZW1lbnRhdGlvbicpO1xudmFyIGdldFBvbHlmaWxsID0gcmVxdWlyZSgnLi9wb2x5ZmlsbCcpO1xudmFyIHNoaW0gPSByZXF1aXJlKCcuL3NoaW0nKTtcblxudmFyIHBvbHlmaWxsID0gY2FsbEJpbmQoZ2V0UG9seWZpbGwoKSwgTnVtYmVyKTtcblxuLyogaHR0cDovL3d3dy5lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzYuMC8jc2VjLW51bWJlci5pc25hbiAqL1xuXG5kZWZpbmUocG9seWZpbGwsIHtcblx0Z2V0UG9seWZpbGw6IGdldFBvbHlmaWxsLFxuXHRpbXBsZW1lbnRhdGlvbjogaW1wbGVtZW50YXRpb24sXG5cdHNoaW06IHNoaW1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHBvbHlmaWxsO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgaW1wbGVtZW50YXRpb24gPSByZXF1aXJlKCcuL2ltcGxlbWVudGF0aW9uJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZ2V0UG9seWZpbGwoKSB7XG5cdGlmIChOdW1iZXIuaXNOYU4gJiYgTnVtYmVyLmlzTmFOKE5hTikgJiYgIU51bWJlci5pc05hTignYScpKSB7XG5cdFx0cmV0dXJuIE51bWJlci5pc05hTjtcblx0fVxuXHRyZXR1cm4gaW1wbGVtZW50YXRpb247XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgZGVmaW5lID0gcmVxdWlyZSgnZGVmaW5lLXByb3BlcnRpZXMnKTtcbnZhciBnZXRQb2x5ZmlsbCA9IHJlcXVpcmUoJy4vcG9seWZpbGwnKTtcblxuLyogaHR0cDovL3d3dy5lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzYuMC8jc2VjLW51bWJlci5pc25hbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHNoaW1OdW1iZXJJc05hTigpIHtcblx0dmFyIHBvbHlmaWxsID0gZ2V0UG9seWZpbGwoKTtcblx0ZGVmaW5lKE51bWJlciwgeyBpc05hTjogcG9seWZpbGwgfSwge1xuXHRcdGlzTmFOOiBmdW5jdGlvbiB0ZXN0SXNOYU4oKSB7XG5cdFx0XHRyZXR1cm4gTnVtYmVyLmlzTmFOICE9PSBwb2x5ZmlsbDtcblx0XHR9XG5cdH0pO1xuXHRyZXR1cm4gcG9seWZpbGw7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgZm9yRWFjaCA9IHJlcXVpcmUoJ2Zvci1lYWNoJyk7XG52YXIgYXZhaWxhYmxlVHlwZWRBcnJheXMgPSByZXF1aXJlKCdhdmFpbGFibGUtdHlwZWQtYXJyYXlzJyk7XG52YXIgY2FsbEJvdW5kID0gcmVxdWlyZSgnY2FsbC1iaW5kL2NhbGxCb3VuZCcpO1xuXG52YXIgJHRvU3RyaW5nID0gY2FsbEJvdW5kKCdPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nJyk7XG52YXIgaGFzVG9TdHJpbmdUYWcgPSByZXF1aXJlKCdoYXMtdG9zdHJpbmd0YWcvc2hhbXMnKSgpO1xudmFyIGdPUEQgPSByZXF1aXJlKCdnb3BkJyk7XG5cbnZhciBnID0gdHlwZW9mIGdsb2JhbFRoaXMgPT09ICd1bmRlZmluZWQnID8gZ2xvYmFsIDogZ2xvYmFsVGhpcztcbnZhciB0eXBlZEFycmF5cyA9IGF2YWlsYWJsZVR5cGVkQXJyYXlzKCk7XG5cbnZhciAkaW5kZXhPZiA9IGNhbGxCb3VuZCgnQXJyYXkucHJvdG90eXBlLmluZGV4T2YnLCB0cnVlKSB8fCBmdW5jdGlvbiBpbmRleE9mKGFycmF5LCB2YWx1ZSkge1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IGFycmF5Lmxlbmd0aDsgaSArPSAxKSB7XG5cdFx0aWYgKGFycmF5W2ldID09PSB2YWx1ZSkge1xuXHRcdFx0cmV0dXJuIGk7XG5cdFx0fVxuXHR9XG5cdHJldHVybiAtMTtcbn07XG52YXIgJHNsaWNlID0gY2FsbEJvdW5kKCdTdHJpbmcucHJvdG90eXBlLnNsaWNlJyk7XG52YXIgdG9TdHJUYWdzID0ge307XG52YXIgZ2V0UHJvdG90eXBlT2YgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2Y7IC8vIHJlcXVpcmUoJ2dldHByb3RvdHlwZW9mJyk7XG5pZiAoaGFzVG9TdHJpbmdUYWcgJiYgZ09QRCAmJiBnZXRQcm90b3R5cGVPZikge1xuXHRmb3JFYWNoKHR5cGVkQXJyYXlzLCBmdW5jdGlvbiAodHlwZWRBcnJheSkge1xuXHRcdHZhciBhcnIgPSBuZXcgZ1t0eXBlZEFycmF5XSgpO1xuXHRcdGlmIChTeW1ib2wudG9TdHJpbmdUYWcgaW4gYXJyKSB7XG5cdFx0XHR2YXIgcHJvdG8gPSBnZXRQcm90b3R5cGVPZihhcnIpO1xuXHRcdFx0dmFyIGRlc2NyaXB0b3IgPSBnT1BEKHByb3RvLCBTeW1ib2wudG9TdHJpbmdUYWcpO1xuXHRcdFx0aWYgKCFkZXNjcmlwdG9yKSB7XG5cdFx0XHRcdHZhciBzdXBlclByb3RvID0gZ2V0UHJvdG90eXBlT2YocHJvdG8pO1xuXHRcdFx0XHRkZXNjcmlwdG9yID0gZ09QRChzdXBlclByb3RvLCBTeW1ib2wudG9TdHJpbmdUYWcpO1xuXHRcdFx0fVxuXHRcdFx0dG9TdHJUYWdzW3R5cGVkQXJyYXldID0gZGVzY3JpcHRvci5nZXQ7XG5cdFx0fVxuXHR9KTtcbn1cblxudmFyIHRyeVR5cGVkQXJyYXlzID0gZnVuY3Rpb24gdHJ5QWxsVHlwZWRBcnJheXModmFsdWUpIHtcblx0dmFyIGFueVRydWUgPSBmYWxzZTtcblx0Zm9yRWFjaCh0b1N0clRhZ3MsIGZ1bmN0aW9uIChnZXR0ZXIsIHR5cGVkQXJyYXkpIHtcblx0XHRpZiAoIWFueVRydWUpIHtcblx0XHRcdHRyeSB7XG5cdFx0XHRcdGFueVRydWUgPSBnZXR0ZXIuY2FsbCh2YWx1ZSkgPT09IHR5cGVkQXJyYXk7XG5cdFx0XHR9IGNhdGNoIChlKSB7IC8qKi8gfVxuXHRcdH1cblx0fSk7XG5cdHJldHVybiBhbnlUcnVlO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBpc1R5cGVkQXJyYXkodmFsdWUpIHtcblx0aWYgKCF2YWx1ZSB8fCB0eXBlb2YgdmFsdWUgIT09ICdvYmplY3QnKSB7IHJldHVybiBmYWxzZTsgfVxuXHRpZiAoIWhhc1RvU3RyaW5nVGFnIHx8ICEoU3ltYm9sLnRvU3RyaW5nVGFnIGluIHZhbHVlKSkge1xuXHRcdHZhciB0YWcgPSAkc2xpY2UoJHRvU3RyaW5nKHZhbHVlKSwgOCwgLTEpO1xuXHRcdHJldHVybiAkaW5kZXhPZih0eXBlZEFycmF5cywgdGFnKSA+IC0xO1xuXHR9XG5cdGlmICghZ09QRCkgeyByZXR1cm4gZmFsc2U7IH1cblx0cmV0dXJuIHRyeVR5cGVkQXJyYXlzKHZhbHVlKTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBudW1iZXJJc05hTiA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuXHRyZXR1cm4gdmFsdWUgIT09IHZhbHVlO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBpcyhhLCBiKSB7XG5cdGlmIChhID09PSAwICYmIGIgPT09IDApIHtcblx0XHRyZXR1cm4gMSAvIGEgPT09IDEgLyBiO1xuXHR9XG5cdGlmIChhID09PSBiKSB7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cblx0aWYgKG51bWJlcklzTmFOKGEpICYmIG51bWJlcklzTmFOKGIpKSB7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cblx0cmV0dXJuIGZhbHNlO1xufTtcblxuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgZGVmaW5lID0gcmVxdWlyZSgnZGVmaW5lLXByb3BlcnRpZXMnKTtcbnZhciBjYWxsQmluZCA9IHJlcXVpcmUoJ2NhbGwtYmluZCcpO1xuXG52YXIgaW1wbGVtZW50YXRpb24gPSByZXF1aXJlKCcuL2ltcGxlbWVudGF0aW9uJyk7XG52YXIgZ2V0UG9seWZpbGwgPSByZXF1aXJlKCcuL3BvbHlmaWxsJyk7XG52YXIgc2hpbSA9IHJlcXVpcmUoJy4vc2hpbScpO1xuXG52YXIgcG9seWZpbGwgPSBjYWxsQmluZChnZXRQb2x5ZmlsbCgpLCBPYmplY3QpO1xuXG5kZWZpbmUocG9seWZpbGwsIHtcblx0Z2V0UG9seWZpbGw6IGdldFBvbHlmaWxsLFxuXHRpbXBsZW1lbnRhdGlvbjogaW1wbGVtZW50YXRpb24sXG5cdHNoaW06IHNoaW1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHBvbHlmaWxsO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgaW1wbGVtZW50YXRpb24gPSByZXF1aXJlKCcuL2ltcGxlbWVudGF0aW9uJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZ2V0UG9seWZpbGwoKSB7XG5cdHJldHVybiB0eXBlb2YgT2JqZWN0LmlzID09PSAnZnVuY3Rpb24nID8gT2JqZWN0LmlzIDogaW1wbGVtZW50YXRpb247XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgZ2V0UG9seWZpbGwgPSByZXF1aXJlKCcuL3BvbHlmaWxsJyk7XG52YXIgZGVmaW5lID0gcmVxdWlyZSgnZGVmaW5lLXByb3BlcnRpZXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBzaGltT2JqZWN0SXMoKSB7XG5cdHZhciBwb2x5ZmlsbCA9IGdldFBvbHlmaWxsKCk7XG5cdGRlZmluZShPYmplY3QsIHsgaXM6IHBvbHlmaWxsIH0sIHtcblx0XHRpczogZnVuY3Rpb24gdGVzdE9iamVjdElzKCkge1xuXHRcdFx0cmV0dXJuIE9iamVjdC5pcyAhPT0gcG9seWZpbGw7XG5cdFx0fVxuXHR9KTtcblx0cmV0dXJuIHBvbHlmaWxsO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIGtleXNTaGltO1xuaWYgKCFPYmplY3Qua2V5cykge1xuXHQvLyBtb2RpZmllZCBmcm9tIGh0dHBzOi8vZ2l0aHViLmNvbS9lcy1zaGltcy9lczUtc2hpbVxuXHR2YXIgaGFzID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcblx0dmFyIHRvU3RyID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZztcblx0dmFyIGlzQXJncyA9IHJlcXVpcmUoJy4vaXNBcmd1bWVudHMnKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBnbG9iYWwtcmVxdWlyZVxuXHR2YXIgaXNFbnVtZXJhYmxlID0gT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZTtcblx0dmFyIGhhc0RvbnRFbnVtQnVnID0gIWlzRW51bWVyYWJsZS5jYWxsKHsgdG9TdHJpbmc6IG51bGwgfSwgJ3RvU3RyaW5nJyk7XG5cdHZhciBoYXNQcm90b0VudW1CdWcgPSBpc0VudW1lcmFibGUuY2FsbChmdW5jdGlvbiAoKSB7fSwgJ3Byb3RvdHlwZScpO1xuXHR2YXIgZG9udEVudW1zID0gW1xuXHRcdCd0b1N0cmluZycsXG5cdFx0J3RvTG9jYWxlU3RyaW5nJyxcblx0XHQndmFsdWVPZicsXG5cdFx0J2hhc093blByb3BlcnR5Jyxcblx0XHQnaXNQcm90b3R5cGVPZicsXG5cdFx0J3Byb3BlcnR5SXNFbnVtZXJhYmxlJyxcblx0XHQnY29uc3RydWN0b3InXG5cdF07XG5cdHZhciBlcXVhbHNDb25zdHJ1Y3RvclByb3RvdHlwZSA9IGZ1bmN0aW9uIChvKSB7XG5cdFx0dmFyIGN0b3IgPSBvLmNvbnN0cnVjdG9yO1xuXHRcdHJldHVybiBjdG9yICYmIGN0b3IucHJvdG90eXBlID09PSBvO1xuXHR9O1xuXHR2YXIgZXhjbHVkZWRLZXlzID0ge1xuXHRcdCRhcHBsaWNhdGlvbkNhY2hlOiB0cnVlLFxuXHRcdCRjb25zb2xlOiB0cnVlLFxuXHRcdCRleHRlcm5hbDogdHJ1ZSxcblx0XHQkZnJhbWU6IHRydWUsXG5cdFx0JGZyYW1lRWxlbWVudDogdHJ1ZSxcblx0XHQkZnJhbWVzOiB0cnVlLFxuXHRcdCRpbm5lckhlaWdodDogdHJ1ZSxcblx0XHQkaW5uZXJXaWR0aDogdHJ1ZSxcblx0XHQkb25tb3pmdWxsc2NyZWVuY2hhbmdlOiB0cnVlLFxuXHRcdCRvbm1vemZ1bGxzY3JlZW5lcnJvcjogdHJ1ZSxcblx0XHQkb3V0ZXJIZWlnaHQ6IHRydWUsXG5cdFx0JG91dGVyV2lkdGg6IHRydWUsXG5cdFx0JHBhZ2VYT2Zmc2V0OiB0cnVlLFxuXHRcdCRwYWdlWU9mZnNldDogdHJ1ZSxcblx0XHQkcGFyZW50OiB0cnVlLFxuXHRcdCRzY3JvbGxMZWZ0OiB0cnVlLFxuXHRcdCRzY3JvbGxUb3A6IHRydWUsXG5cdFx0JHNjcm9sbFg6IHRydWUsXG5cdFx0JHNjcm9sbFk6IHRydWUsXG5cdFx0JHNlbGY6IHRydWUsXG5cdFx0JHdlYmtpdEluZGV4ZWREQjogdHJ1ZSxcblx0XHQkd2Via2l0U3RvcmFnZUluZm86IHRydWUsXG5cdFx0JHdpbmRvdzogdHJ1ZVxuXHR9O1xuXHR2YXIgaGFzQXV0b21hdGlvbkVxdWFsaXR5QnVnID0gKGZ1bmN0aW9uICgpIHtcblx0XHQvKiBnbG9iYWwgd2luZG93ICovXG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSB7IHJldHVybiBmYWxzZTsgfVxuXHRcdGZvciAodmFyIGsgaW4gd2luZG93KSB7XG5cdFx0XHR0cnkge1xuXHRcdFx0XHRpZiAoIWV4Y2x1ZGVkS2V5c1snJCcgKyBrXSAmJiBoYXMuY2FsbCh3aW5kb3csIGspICYmIHdpbmRvd1trXSAhPT0gbnVsbCAmJiB0eXBlb2Ygd2luZG93W2tdID09PSAnb2JqZWN0Jykge1xuXHRcdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0XHRlcXVhbHNDb25zdHJ1Y3RvclByb3RvdHlwZSh3aW5kb3dba10pO1xuXHRcdFx0XHRcdH0gY2F0Y2ggKGUpIHtcblx0XHRcdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fSBjYXRjaCAoZSkge1xuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9KCkpO1xuXHR2YXIgZXF1YWxzQ29uc3RydWN0b3JQcm90b3R5cGVJZk5vdEJ1Z2d5ID0gZnVuY3Rpb24gKG8pIHtcblx0XHQvKiBnbG9iYWwgd2luZG93ICovXG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnIHx8ICFoYXNBdXRvbWF0aW9uRXF1YWxpdHlCdWcpIHtcblx0XHRcdHJldHVybiBlcXVhbHNDb25zdHJ1Y3RvclByb3RvdHlwZShvKTtcblx0XHR9XG5cdFx0dHJ5IHtcblx0XHRcdHJldHVybiBlcXVhbHNDb25zdHJ1Y3RvclByb3RvdHlwZShvKTtcblx0XHR9IGNhdGNoIChlKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHR9O1xuXG5cdGtleXNTaGltID0gZnVuY3Rpb24ga2V5cyhvYmplY3QpIHtcblx0XHR2YXIgaXNPYmplY3QgPSBvYmplY3QgIT09IG51bGwgJiYgdHlwZW9mIG9iamVjdCA9PT0gJ29iamVjdCc7XG5cdFx0dmFyIGlzRnVuY3Rpb24gPSB0b1N0ci5jYWxsKG9iamVjdCkgPT09ICdbb2JqZWN0IEZ1bmN0aW9uXSc7XG5cdFx0dmFyIGlzQXJndW1lbnRzID0gaXNBcmdzKG9iamVjdCk7XG5cdFx0dmFyIGlzU3RyaW5nID0gaXNPYmplY3QgJiYgdG9TdHIuY2FsbChvYmplY3QpID09PSAnW29iamVjdCBTdHJpbmddJztcblx0XHR2YXIgdGhlS2V5cyA9IFtdO1xuXG5cdFx0aWYgKCFpc09iamVjdCAmJiAhaXNGdW5jdGlvbiAmJiAhaXNBcmd1bWVudHMpIHtcblx0XHRcdHRocm93IG5ldyBUeXBlRXJyb3IoJ09iamVjdC5rZXlzIGNhbGxlZCBvbiBhIG5vbi1vYmplY3QnKTtcblx0XHR9XG5cblx0XHR2YXIgc2tpcFByb3RvID0gaGFzUHJvdG9FbnVtQnVnICYmIGlzRnVuY3Rpb247XG5cdFx0aWYgKGlzU3RyaW5nICYmIG9iamVjdC5sZW5ndGggPiAwICYmICFoYXMuY2FsbChvYmplY3QsIDApKSB7XG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IG9iamVjdC5sZW5ndGg7ICsraSkge1xuXHRcdFx0XHR0aGVLZXlzLnB1c2goU3RyaW5nKGkpKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZiAoaXNBcmd1bWVudHMgJiYgb2JqZWN0Lmxlbmd0aCA+IDApIHtcblx0XHRcdGZvciAodmFyIGogPSAwOyBqIDwgb2JqZWN0Lmxlbmd0aDsgKytqKSB7XG5cdFx0XHRcdHRoZUtleXMucHVzaChTdHJpbmcoaikpO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHRmb3IgKHZhciBuYW1lIGluIG9iamVjdCkge1xuXHRcdFx0XHRpZiAoIShza2lwUHJvdG8gJiYgbmFtZSA9PT0gJ3Byb3RvdHlwZScpICYmIGhhcy5jYWxsKG9iamVjdCwgbmFtZSkpIHtcblx0XHRcdFx0XHR0aGVLZXlzLnB1c2goU3RyaW5nKG5hbWUpKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGlmIChoYXNEb250RW51bUJ1Zykge1xuXHRcdFx0dmFyIHNraXBDb25zdHJ1Y3RvciA9IGVxdWFsc0NvbnN0cnVjdG9yUHJvdG90eXBlSWZOb3RCdWdneShvYmplY3QpO1xuXG5cdFx0XHRmb3IgKHZhciBrID0gMDsgayA8IGRvbnRFbnVtcy5sZW5ndGg7ICsraykge1xuXHRcdFx0XHRpZiAoIShza2lwQ29uc3RydWN0b3IgJiYgZG9udEVudW1zW2tdID09PSAnY29uc3RydWN0b3InKSAmJiBoYXMuY2FsbChvYmplY3QsIGRvbnRFbnVtc1trXSkpIHtcblx0XHRcdFx0XHR0aGVLZXlzLnB1c2goZG9udEVudW1zW2tdKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gdGhlS2V5cztcblx0fTtcbn1cbm1vZHVsZS5leHBvcnRzID0ga2V5c1NoaW07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBzbGljZSA9IEFycmF5LnByb3RvdHlwZS5zbGljZTtcbnZhciBpc0FyZ3MgPSByZXF1aXJlKCcuL2lzQXJndW1lbnRzJyk7XG5cbnZhciBvcmlnS2V5cyA9IE9iamVjdC5rZXlzO1xudmFyIGtleXNTaGltID0gb3JpZ0tleXMgPyBmdW5jdGlvbiBrZXlzKG8pIHsgcmV0dXJuIG9yaWdLZXlzKG8pOyB9IDogcmVxdWlyZSgnLi9pbXBsZW1lbnRhdGlvbicpO1xuXG52YXIgb3JpZ2luYWxLZXlzID0gT2JqZWN0LmtleXM7XG5cbmtleXNTaGltLnNoaW0gPSBmdW5jdGlvbiBzaGltT2JqZWN0S2V5cygpIHtcblx0aWYgKE9iamVjdC5rZXlzKSB7XG5cdFx0dmFyIGtleXNXb3Jrc1dpdGhBcmd1bWVudHMgPSAoZnVuY3Rpb24gKCkge1xuXHRcdFx0Ly8gU2FmYXJpIDUuMCBidWdcblx0XHRcdHZhciBhcmdzID0gT2JqZWN0LmtleXMoYXJndW1lbnRzKTtcblx0XHRcdHJldHVybiBhcmdzICYmIGFyZ3MubGVuZ3RoID09PSBhcmd1bWVudHMubGVuZ3RoO1xuXHRcdH0oMSwgMikpO1xuXHRcdGlmICgha2V5c1dvcmtzV2l0aEFyZ3VtZW50cykge1xuXHRcdFx0T2JqZWN0LmtleXMgPSBmdW5jdGlvbiBrZXlzKG9iamVjdCkgeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIGZ1bmMtbmFtZS1tYXRjaGluZ1xuXHRcdFx0XHRpZiAoaXNBcmdzKG9iamVjdCkpIHtcblx0XHRcdFx0XHRyZXR1cm4gb3JpZ2luYWxLZXlzKHNsaWNlLmNhbGwob2JqZWN0KSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuIG9yaWdpbmFsS2V5cyhvYmplY3QpO1xuXHRcdFx0fTtcblx0XHR9XG5cdH0gZWxzZSB7XG5cdFx0T2JqZWN0LmtleXMgPSBrZXlzU2hpbTtcblx0fVxuXHRyZXR1cm4gT2JqZWN0LmtleXMgfHwga2V5c1NoaW07XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGtleXNTaGltO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdG9TdHIgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGlzQXJndW1lbnRzKHZhbHVlKSB7XG5cdHZhciBzdHIgPSB0b1N0ci5jYWxsKHZhbHVlKTtcblx0dmFyIGlzQXJncyA9IHN0ciA9PT0gJ1tvYmplY3QgQXJndW1lbnRzXSc7XG5cdGlmICghaXNBcmdzKSB7XG5cdFx0aXNBcmdzID0gc3RyICE9PSAnW29iamVjdCBBcnJheV0nICYmXG5cdFx0XHR2YWx1ZSAhPT0gbnVsbCAmJlxuXHRcdFx0dHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJlxuXHRcdFx0dHlwZW9mIHZhbHVlLmxlbmd0aCA9PT0gJ251bWJlcicgJiZcblx0XHRcdHZhbHVlLmxlbmd0aCA+PSAwICYmXG5cdFx0XHR0b1N0ci5jYWxsKHZhbHVlLmNhbGxlZSkgPT09ICdbb2JqZWN0IEZ1bmN0aW9uXSc7XG5cdH1cblx0cmV0dXJuIGlzQXJncztcbn07XG4iLCIvLyBzaGltIGZvciB1c2luZyBwcm9jZXNzIGluIGJyb3dzZXJcbnZhciBwcm9jZXNzID0gbW9kdWxlLmV4cG9ydHMgPSB7fTtcblxuLy8gY2FjaGVkIGZyb20gd2hhdGV2ZXIgZ2xvYmFsIGlzIHByZXNlbnQgc28gdGhhdCB0ZXN0IHJ1bm5lcnMgdGhhdCBzdHViIGl0XG4vLyBkb24ndCBicmVhayB0aGluZ3MuICBCdXQgd2UgbmVlZCB0byB3cmFwIGl0IGluIGEgdHJ5IGNhdGNoIGluIGNhc2UgaXQgaXNcbi8vIHdyYXBwZWQgaW4gc3RyaWN0IG1vZGUgY29kZSB3aGljaCBkb2Vzbid0IGRlZmluZSBhbnkgZ2xvYmFscy4gIEl0J3MgaW5zaWRlIGFcbi8vIGZ1bmN0aW9uIGJlY2F1c2UgdHJ5L2NhdGNoZXMgZGVvcHRpbWl6ZSBpbiBjZXJ0YWluIGVuZ2luZXMuXG5cbnZhciBjYWNoZWRTZXRUaW1lb3V0O1xudmFyIGNhY2hlZENsZWFyVGltZW91dDtcblxuZnVuY3Rpb24gZGVmYXVsdFNldFRpbW91dCgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3NldFRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbmZ1bmN0aW9uIGRlZmF1bHRDbGVhclRpbWVvdXQgKCkge1xuICAgIHRocm93IG5ldyBFcnJvcignY2xlYXJUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG4oZnVuY3Rpb24gKCkge1xuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2Ygc2V0VGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2YgY2xlYXJUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgIH1cbn0gKCkpXG5mdW5jdGlvbiBydW5UaW1lb3V0KGZ1bikge1xuICAgIGlmIChjYWNoZWRTZXRUaW1lb3V0ID09PSBzZXRUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICAvLyBpZiBzZXRUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkU2V0VGltZW91dCA9PT0gZGVmYXVsdFNldFRpbW91dCB8fCAhY2FjaGVkU2V0VGltZW91dCkgJiYgc2V0VGltZW91dCkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dChmdW4sIDApO1xuICAgIH0gY2F0Y2goZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwobnVsbCwgZnVuLCAwKTtcbiAgICAgICAgfSBjYXRjaChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yXG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKHRoaXMsIGZ1biwgMCk7XG4gICAgICAgIH1cbiAgICB9XG5cblxufVxuZnVuY3Rpb24gcnVuQ2xlYXJUaW1lb3V0KG1hcmtlcikge1xuICAgIGlmIChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGNsZWFyVGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICAvLyBpZiBjbGVhclRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGRlZmF1bHRDbGVhclRpbWVvdXQgfHwgIWNhY2hlZENsZWFyVGltZW91dCkgJiYgY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCAgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbChudWxsLCBtYXJrZXIpO1xuICAgICAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yLlxuICAgICAgICAgICAgLy8gU29tZSB2ZXJzaW9ucyBvZiBJLkUuIGhhdmUgZGlmZmVyZW50IHJ1bGVzIGZvciBjbGVhclRpbWVvdXQgdnMgc2V0VGltZW91dFxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKHRoaXMsIG1hcmtlcik7XG4gICAgICAgIH1cbiAgICB9XG5cblxuXG59XG52YXIgcXVldWUgPSBbXTtcbnZhciBkcmFpbmluZyA9IGZhbHNlO1xudmFyIGN1cnJlbnRRdWV1ZTtcbnZhciBxdWV1ZUluZGV4ID0gLTE7XG5cbmZ1bmN0aW9uIGNsZWFuVXBOZXh0VGljaygpIHtcbiAgICBpZiAoIWRyYWluaW5nIHx8ICFjdXJyZW50UXVldWUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIGlmIChjdXJyZW50UXVldWUubGVuZ3RoKSB7XG4gICAgICAgIHF1ZXVlID0gY3VycmVudFF1ZXVlLmNvbmNhdChxdWV1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgIH1cbiAgICBpZiAocXVldWUubGVuZ3RoKSB7XG4gICAgICAgIGRyYWluUXVldWUoKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGRyYWluUXVldWUoKSB7XG4gICAgaWYgKGRyYWluaW5nKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIHRpbWVvdXQgPSBydW5UaW1lb3V0KGNsZWFuVXBOZXh0VGljayk7XG4gICAgZHJhaW5pbmcgPSB0cnVlO1xuXG4gICAgdmFyIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB3aGlsZShsZW4pIHtcbiAgICAgICAgY3VycmVudFF1ZXVlID0gcXVldWU7XG4gICAgICAgIHF1ZXVlID0gW107XG4gICAgICAgIHdoaWxlICgrK3F1ZXVlSW5kZXggPCBsZW4pIHtcbiAgICAgICAgICAgIGlmIChjdXJyZW50UXVldWUpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50UXVldWVbcXVldWVJbmRleF0ucnVuKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgICAgICBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgfVxuICAgIGN1cnJlbnRRdWV1ZSA9IG51bGw7XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBydW5DbGVhclRpbWVvdXQodGltZW91dCk7XG59XG5cbnByb2Nlc3MubmV4dFRpY2sgPSBmdW5jdGlvbiAoZnVuKSB7XG4gICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCAtIDEpO1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgYXJnc1tpIC0gMV0gPSBhcmd1bWVudHNbaV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcXVldWUucHVzaChuZXcgSXRlbShmdW4sIGFyZ3MpKTtcbiAgICBpZiAocXVldWUubGVuZ3RoID09PSAxICYmICFkcmFpbmluZykge1xuICAgICAgICBydW5UaW1lb3V0KGRyYWluUXVldWUpO1xuICAgIH1cbn07XG5cbi8vIHY4IGxpa2VzIHByZWRpY3RpYmxlIG9iamVjdHNcbmZ1bmN0aW9uIEl0ZW0oZnVuLCBhcnJheSkge1xuICAgIHRoaXMuZnVuID0gZnVuO1xuICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbn1cbkl0ZW0ucHJvdG90eXBlLnJ1biA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmZ1bi5hcHBseShudWxsLCB0aGlzLmFycmF5KTtcbn07XG5wcm9jZXNzLnRpdGxlID0gJ2Jyb3dzZXInO1xucHJvY2Vzcy5icm93c2VyID0gdHJ1ZTtcbnByb2Nlc3MuZW52ID0ge307XG5wcm9jZXNzLmFyZ3YgPSBbXTtcbnByb2Nlc3MudmVyc2lvbiA9ICcnOyAvLyBlbXB0eSBzdHJpbmcgdG8gYXZvaWQgcmVnZXhwIGlzc3Vlc1xucHJvY2Vzcy52ZXJzaW9ucyA9IHt9O1xuXG5mdW5jdGlvbiBub29wKCkge31cblxucHJvY2Vzcy5vbiA9IG5vb3A7XG5wcm9jZXNzLmFkZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3Mub25jZSA9IG5vb3A7XG5wcm9jZXNzLm9mZiA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUxpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlQWxsTGlzdGVuZXJzID0gbm9vcDtcbnByb2Nlc3MuZW1pdCA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRPbmNlTGlzdGVuZXIgPSBub29wO1xuXG5wcm9jZXNzLmxpc3RlbmVycyA9IGZ1bmN0aW9uIChuYW1lKSB7IHJldHVybiBbXSB9XG5cbnByb2Nlc3MuYmluZGluZyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmJpbmRpbmcgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcblxucHJvY2Vzcy5jd2QgPSBmdW5jdGlvbiAoKSB7IHJldHVybiAnLycgfTtcbnByb2Nlc3MuY2hkaXIgPSBmdW5jdGlvbiAoZGlyKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmNoZGlyIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5wcm9jZXNzLnVtYXNrID0gZnVuY3Rpb24oKSB7IHJldHVybiAwOyB9O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBpc0J1ZmZlcihhcmcpIHtcbiAgcmV0dXJuIGFyZyAmJiB0eXBlb2YgYXJnID09PSAnb2JqZWN0J1xuICAgICYmIHR5cGVvZiBhcmcuY29weSA9PT0gJ2Z1bmN0aW9uJ1xuICAgICYmIHR5cGVvZiBhcmcuZmlsbCA9PT0gJ2Z1bmN0aW9uJ1xuICAgICYmIHR5cGVvZiBhcmcucmVhZFVJbnQ4ID09PSAnZnVuY3Rpb24nO1xufSIsIi8vIEN1cnJlbnRseSBpbiBzeW5jIHdpdGggTm9kZS5qcyBsaWIvaW50ZXJuYWwvdXRpbC90eXBlcy5qc1xuLy8gaHR0cHM6Ly9naXRodWIuY29tL25vZGVqcy9ub2RlL2NvbW1pdC8xMTJjYzdjMjc1NTEyNTRhYTJiMTcwOThmYjc3NDg2N2YwNWVkMGQ5XG5cbid1c2Ugc3RyaWN0JztcblxudmFyIGlzQXJndW1lbnRzT2JqZWN0ID0gcmVxdWlyZSgnaXMtYXJndW1lbnRzJyk7XG52YXIgaXNHZW5lcmF0b3JGdW5jdGlvbiA9IHJlcXVpcmUoJ2lzLWdlbmVyYXRvci1mdW5jdGlvbicpO1xudmFyIHdoaWNoVHlwZWRBcnJheSA9IHJlcXVpcmUoJ3doaWNoLXR5cGVkLWFycmF5Jyk7XG52YXIgaXNUeXBlZEFycmF5ID0gcmVxdWlyZSgnaXMtdHlwZWQtYXJyYXknKTtcblxuZnVuY3Rpb24gdW5jdXJyeVRoaXMoZikge1xuICByZXR1cm4gZi5jYWxsLmJpbmQoZik7XG59XG5cbnZhciBCaWdJbnRTdXBwb3J0ZWQgPSB0eXBlb2YgQmlnSW50ICE9PSAndW5kZWZpbmVkJztcbnZhciBTeW1ib2xTdXBwb3J0ZWQgPSB0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJztcblxudmFyIE9iamVjdFRvU3RyaW5nID0gdW5jdXJyeVRoaXMoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZyk7XG5cbnZhciBudW1iZXJWYWx1ZSA9IHVuY3VycnlUaGlzKE51bWJlci5wcm90b3R5cGUudmFsdWVPZik7XG52YXIgc3RyaW5nVmFsdWUgPSB1bmN1cnJ5VGhpcyhTdHJpbmcucHJvdG90eXBlLnZhbHVlT2YpO1xudmFyIGJvb2xlYW5WYWx1ZSA9IHVuY3VycnlUaGlzKEJvb2xlYW4ucHJvdG90eXBlLnZhbHVlT2YpO1xuXG5pZiAoQmlnSW50U3VwcG9ydGVkKSB7XG4gIHZhciBiaWdJbnRWYWx1ZSA9IHVuY3VycnlUaGlzKEJpZ0ludC5wcm90b3R5cGUudmFsdWVPZik7XG59XG5cbmlmIChTeW1ib2xTdXBwb3J0ZWQpIHtcbiAgdmFyIHN5bWJvbFZhbHVlID0gdW5jdXJyeVRoaXMoU3ltYm9sLnByb3RvdHlwZS52YWx1ZU9mKTtcbn1cblxuZnVuY3Rpb24gY2hlY2tCb3hlZFByaW1pdGl2ZSh2YWx1ZSwgcHJvdG90eXBlVmFsdWVPZikge1xuICBpZiAodHlwZW9mIHZhbHVlICE9PSAnb2JqZWN0Jykge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICB0cnkge1xuICAgIHByb3RvdHlwZVZhbHVlT2YodmFsdWUpO1xuICAgIHJldHVybiB0cnVlO1xuICB9IGNhdGNoKGUpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn1cblxuZXhwb3J0cy5pc0FyZ3VtZW50c09iamVjdCA9IGlzQXJndW1lbnRzT2JqZWN0O1xuZXhwb3J0cy5pc0dlbmVyYXRvckZ1bmN0aW9uID0gaXNHZW5lcmF0b3JGdW5jdGlvbjtcbmV4cG9ydHMuaXNUeXBlZEFycmF5ID0gaXNUeXBlZEFycmF5O1xuXG4vLyBUYWtlbiBmcm9tIGhlcmUgYW5kIG1vZGlmaWVkIGZvciBiZXR0ZXIgYnJvd3NlciBzdXBwb3J0XG4vLyBodHRwczovL2dpdGh1Yi5jb20vc2luZHJlc29yaHVzL3AtaXMtcHJvbWlzZS9ibG9iL2NkYTM1YTUxM2JkYTAzZjk3N2FkNWNkZTNhMDc5ZDIzN2U4MmQ3ZWYvaW5kZXguanNcbmZ1bmN0aW9uIGlzUHJvbWlzZShpbnB1dCkge1xuXHRyZXR1cm4gKFxuXHRcdChcblx0XHRcdHR5cGVvZiBQcm9taXNlICE9PSAndW5kZWZpbmVkJyAmJlxuXHRcdFx0aW5wdXQgaW5zdGFuY2VvZiBQcm9taXNlXG5cdFx0KSB8fFxuXHRcdChcblx0XHRcdGlucHV0ICE9PSBudWxsICYmXG5cdFx0XHR0eXBlb2YgaW5wdXQgPT09ICdvYmplY3QnICYmXG5cdFx0XHR0eXBlb2YgaW5wdXQudGhlbiA9PT0gJ2Z1bmN0aW9uJyAmJlxuXHRcdFx0dHlwZW9mIGlucHV0LmNhdGNoID09PSAnZnVuY3Rpb24nXG5cdFx0KVxuXHQpO1xufVxuZXhwb3J0cy5pc1Byb21pc2UgPSBpc1Byb21pc2U7XG5cbmZ1bmN0aW9uIGlzQXJyYXlCdWZmZXJWaWV3KHZhbHVlKSB7XG4gIGlmICh0eXBlb2YgQXJyYXlCdWZmZXIgIT09ICd1bmRlZmluZWQnICYmIEFycmF5QnVmZmVyLmlzVmlldykge1xuICAgIHJldHVybiBBcnJheUJ1ZmZlci5pc1ZpZXcodmFsdWUpO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICBpc1R5cGVkQXJyYXkodmFsdWUpIHx8XG4gICAgaXNEYXRhVmlldyh2YWx1ZSlcbiAgKTtcbn1cbmV4cG9ydHMuaXNBcnJheUJ1ZmZlclZpZXcgPSBpc0FycmF5QnVmZmVyVmlldztcblxuXG5mdW5jdGlvbiBpc1VpbnQ4QXJyYXkodmFsdWUpIHtcbiAgcmV0dXJuIHdoaWNoVHlwZWRBcnJheSh2YWx1ZSkgPT09ICdVaW50OEFycmF5Jztcbn1cbmV4cG9ydHMuaXNVaW50OEFycmF5ID0gaXNVaW50OEFycmF5O1xuXG5mdW5jdGlvbiBpc1VpbnQ4Q2xhbXBlZEFycmF5KHZhbHVlKSB7XG4gIHJldHVybiB3aGljaFR5cGVkQXJyYXkodmFsdWUpID09PSAnVWludDhDbGFtcGVkQXJyYXknO1xufVxuZXhwb3J0cy5pc1VpbnQ4Q2xhbXBlZEFycmF5ID0gaXNVaW50OENsYW1wZWRBcnJheTtcblxuZnVuY3Rpb24gaXNVaW50MTZBcnJheSh2YWx1ZSkge1xuICByZXR1cm4gd2hpY2hUeXBlZEFycmF5KHZhbHVlKSA9PT0gJ1VpbnQxNkFycmF5Jztcbn1cbmV4cG9ydHMuaXNVaW50MTZBcnJheSA9IGlzVWludDE2QXJyYXk7XG5cbmZ1bmN0aW9uIGlzVWludDMyQXJyYXkodmFsdWUpIHtcbiAgcmV0dXJuIHdoaWNoVHlwZWRBcnJheSh2YWx1ZSkgPT09ICdVaW50MzJBcnJheSc7XG59XG5leHBvcnRzLmlzVWludDMyQXJyYXkgPSBpc1VpbnQzMkFycmF5O1xuXG5mdW5jdGlvbiBpc0ludDhBcnJheSh2YWx1ZSkge1xuICByZXR1cm4gd2hpY2hUeXBlZEFycmF5KHZhbHVlKSA9PT0gJ0ludDhBcnJheSc7XG59XG5leHBvcnRzLmlzSW50OEFycmF5ID0gaXNJbnQ4QXJyYXk7XG5cbmZ1bmN0aW9uIGlzSW50MTZBcnJheSh2YWx1ZSkge1xuICByZXR1cm4gd2hpY2hUeXBlZEFycmF5KHZhbHVlKSA9PT0gJ0ludDE2QXJyYXknO1xufVxuZXhwb3J0cy5pc0ludDE2QXJyYXkgPSBpc0ludDE2QXJyYXk7XG5cbmZ1bmN0aW9uIGlzSW50MzJBcnJheSh2YWx1ZSkge1xuICByZXR1cm4gd2hpY2hUeXBlZEFycmF5KHZhbHVlKSA9PT0gJ0ludDMyQXJyYXknO1xufVxuZXhwb3J0cy5pc0ludDMyQXJyYXkgPSBpc0ludDMyQXJyYXk7XG5cbmZ1bmN0aW9uIGlzRmxvYXQzMkFycmF5KHZhbHVlKSB7XG4gIHJldHVybiB3aGljaFR5cGVkQXJyYXkodmFsdWUpID09PSAnRmxvYXQzMkFycmF5Jztcbn1cbmV4cG9ydHMuaXNGbG9hdDMyQXJyYXkgPSBpc0Zsb2F0MzJBcnJheTtcblxuZnVuY3Rpb24gaXNGbG9hdDY0QXJyYXkodmFsdWUpIHtcbiAgcmV0dXJuIHdoaWNoVHlwZWRBcnJheSh2YWx1ZSkgPT09ICdGbG9hdDY0QXJyYXknO1xufVxuZXhwb3J0cy5pc0Zsb2F0NjRBcnJheSA9IGlzRmxvYXQ2NEFycmF5O1xuXG5mdW5jdGlvbiBpc0JpZ0ludDY0QXJyYXkodmFsdWUpIHtcbiAgcmV0dXJuIHdoaWNoVHlwZWRBcnJheSh2YWx1ZSkgPT09ICdCaWdJbnQ2NEFycmF5Jztcbn1cbmV4cG9ydHMuaXNCaWdJbnQ2NEFycmF5ID0gaXNCaWdJbnQ2NEFycmF5O1xuXG5mdW5jdGlvbiBpc0JpZ1VpbnQ2NEFycmF5KHZhbHVlKSB7XG4gIHJldHVybiB3aGljaFR5cGVkQXJyYXkodmFsdWUpID09PSAnQmlnVWludDY0QXJyYXknO1xufVxuZXhwb3J0cy5pc0JpZ1VpbnQ2NEFycmF5ID0gaXNCaWdVaW50NjRBcnJheTtcblxuZnVuY3Rpb24gaXNNYXBUb1N0cmluZyh2YWx1ZSkge1xuICByZXR1cm4gT2JqZWN0VG9TdHJpbmcodmFsdWUpID09PSAnW29iamVjdCBNYXBdJztcbn1cbmlzTWFwVG9TdHJpbmcud29ya2luZyA9IChcbiAgdHlwZW9mIE1hcCAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgaXNNYXBUb1N0cmluZyhuZXcgTWFwKCkpXG4pO1xuXG5mdW5jdGlvbiBpc01hcCh2YWx1ZSkge1xuICBpZiAodHlwZW9mIE1hcCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICByZXR1cm4gaXNNYXBUb1N0cmluZy53b3JraW5nXG4gICAgPyBpc01hcFRvU3RyaW5nKHZhbHVlKVxuICAgIDogdmFsdWUgaW5zdGFuY2VvZiBNYXA7XG59XG5leHBvcnRzLmlzTWFwID0gaXNNYXA7XG5cbmZ1bmN0aW9uIGlzU2V0VG9TdHJpbmcodmFsdWUpIHtcbiAgcmV0dXJuIE9iamVjdFRvU3RyaW5nKHZhbHVlKSA9PT0gJ1tvYmplY3QgU2V0XSc7XG59XG5pc1NldFRvU3RyaW5nLndvcmtpbmcgPSAoXG4gIHR5cGVvZiBTZXQgIT09ICd1bmRlZmluZWQnICYmXG4gIGlzU2V0VG9TdHJpbmcobmV3IFNldCgpKVxuKTtcbmZ1bmN0aW9uIGlzU2V0KHZhbHVlKSB7XG4gIGlmICh0eXBlb2YgU2V0ID09PSAndW5kZWZpbmVkJykge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHJldHVybiBpc1NldFRvU3RyaW5nLndvcmtpbmdcbiAgICA/IGlzU2V0VG9TdHJpbmcodmFsdWUpXG4gICAgOiB2YWx1ZSBpbnN0YW5jZW9mIFNldDtcbn1cbmV4cG9ydHMuaXNTZXQgPSBpc1NldDtcblxuZnVuY3Rpb24gaXNXZWFrTWFwVG9TdHJpbmcodmFsdWUpIHtcbiAgcmV0dXJuIE9iamVjdFRvU3RyaW5nKHZhbHVlKSA9PT0gJ1tvYmplY3QgV2Vha01hcF0nO1xufVxuaXNXZWFrTWFwVG9TdHJpbmcud29ya2luZyA9IChcbiAgdHlwZW9mIFdlYWtNYXAgIT09ICd1bmRlZmluZWQnICYmXG4gIGlzV2Vha01hcFRvU3RyaW5nKG5ldyBXZWFrTWFwKCkpXG4pO1xuZnVuY3Rpb24gaXNXZWFrTWFwKHZhbHVlKSB7XG4gIGlmICh0eXBlb2YgV2Vha01hcCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICByZXR1cm4gaXNXZWFrTWFwVG9TdHJpbmcud29ya2luZ1xuICAgID8gaXNXZWFrTWFwVG9TdHJpbmcodmFsdWUpXG4gICAgOiB2YWx1ZSBpbnN0YW5jZW9mIFdlYWtNYXA7XG59XG5leHBvcnRzLmlzV2Vha01hcCA9IGlzV2Vha01hcDtcblxuZnVuY3Rpb24gaXNXZWFrU2V0VG9TdHJpbmcodmFsdWUpIHtcbiAgcmV0dXJuIE9iamVjdFRvU3RyaW5nKHZhbHVlKSA9PT0gJ1tvYmplY3QgV2Vha1NldF0nO1xufVxuaXNXZWFrU2V0VG9TdHJpbmcud29ya2luZyA9IChcbiAgdHlwZW9mIFdlYWtTZXQgIT09ICd1bmRlZmluZWQnICYmXG4gIGlzV2Vha1NldFRvU3RyaW5nKG5ldyBXZWFrU2V0KCkpXG4pO1xuZnVuY3Rpb24gaXNXZWFrU2V0KHZhbHVlKSB7XG4gIHJldHVybiBpc1dlYWtTZXRUb1N0cmluZyh2YWx1ZSk7XG59XG5leHBvcnRzLmlzV2Vha1NldCA9IGlzV2Vha1NldDtcblxuZnVuY3Rpb24gaXNBcnJheUJ1ZmZlclRvU3RyaW5nKHZhbHVlKSB7XG4gIHJldHVybiBPYmplY3RUb1N0cmluZyh2YWx1ZSkgPT09ICdbb2JqZWN0IEFycmF5QnVmZmVyXSc7XG59XG5pc0FycmF5QnVmZmVyVG9TdHJpbmcud29ya2luZyA9IChcbiAgdHlwZW9mIEFycmF5QnVmZmVyICE9PSAndW5kZWZpbmVkJyAmJlxuICBpc0FycmF5QnVmZmVyVG9TdHJpbmcobmV3IEFycmF5QnVmZmVyKCkpXG4pO1xuZnVuY3Rpb24gaXNBcnJheUJ1ZmZlcih2YWx1ZSkge1xuICBpZiAodHlwZW9mIEFycmF5QnVmZmVyID09PSAndW5kZWZpbmVkJykge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHJldHVybiBpc0FycmF5QnVmZmVyVG9TdHJpbmcud29ya2luZ1xuICAgID8gaXNBcnJheUJ1ZmZlclRvU3RyaW5nKHZhbHVlKVxuICAgIDogdmFsdWUgaW5zdGFuY2VvZiBBcnJheUJ1ZmZlcjtcbn1cbmV4cG9ydHMuaXNBcnJheUJ1ZmZlciA9IGlzQXJyYXlCdWZmZXI7XG5cbmZ1bmN0aW9uIGlzRGF0YVZpZXdUb1N0cmluZyh2YWx1ZSkge1xuICByZXR1cm4gT2JqZWN0VG9TdHJpbmcodmFsdWUpID09PSAnW29iamVjdCBEYXRhVmlld10nO1xufVxuaXNEYXRhVmlld1RvU3RyaW5nLndvcmtpbmcgPSAoXG4gIHR5cGVvZiBBcnJheUJ1ZmZlciAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgdHlwZW9mIERhdGFWaWV3ICE9PSAndW5kZWZpbmVkJyAmJlxuICBpc0RhdGFWaWV3VG9TdHJpbmcobmV3IERhdGFWaWV3KG5ldyBBcnJheUJ1ZmZlcigxKSwgMCwgMSkpXG4pO1xuZnVuY3Rpb24gaXNEYXRhVmlldyh2YWx1ZSkge1xuICBpZiAodHlwZW9mIERhdGFWaWV3ID09PSAndW5kZWZpbmVkJykge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHJldHVybiBpc0RhdGFWaWV3VG9TdHJpbmcud29ya2luZ1xuICAgID8gaXNEYXRhVmlld1RvU3RyaW5nKHZhbHVlKVxuICAgIDogdmFsdWUgaW5zdGFuY2VvZiBEYXRhVmlldztcbn1cbmV4cG9ydHMuaXNEYXRhVmlldyA9IGlzRGF0YVZpZXc7XG5cbi8vIFN0b3JlIGEgY29weSBvZiBTaGFyZWRBcnJheUJ1ZmZlciBpbiBjYXNlIGl0J3MgZGVsZXRlZCBlbHNld2hlcmVcbnZhciBTaGFyZWRBcnJheUJ1ZmZlckNvcHkgPSB0eXBlb2YgU2hhcmVkQXJyYXlCdWZmZXIgIT09ICd1bmRlZmluZWQnID8gU2hhcmVkQXJyYXlCdWZmZXIgOiB1bmRlZmluZWQ7XG5mdW5jdGlvbiBpc1NoYXJlZEFycmF5QnVmZmVyVG9TdHJpbmcodmFsdWUpIHtcbiAgcmV0dXJuIE9iamVjdFRvU3RyaW5nKHZhbHVlKSA9PT0gJ1tvYmplY3QgU2hhcmVkQXJyYXlCdWZmZXJdJztcbn1cbmZ1bmN0aW9uIGlzU2hhcmVkQXJyYXlCdWZmZXIodmFsdWUpIHtcbiAgaWYgKHR5cGVvZiBTaGFyZWRBcnJheUJ1ZmZlckNvcHkgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgaWYgKHR5cGVvZiBpc1NoYXJlZEFycmF5QnVmZmVyVG9TdHJpbmcud29ya2luZyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBpc1NoYXJlZEFycmF5QnVmZmVyVG9TdHJpbmcud29ya2luZyA9IGlzU2hhcmVkQXJyYXlCdWZmZXJUb1N0cmluZyhuZXcgU2hhcmVkQXJyYXlCdWZmZXJDb3B5KCkpO1xuICB9XG5cbiAgcmV0dXJuIGlzU2hhcmVkQXJyYXlCdWZmZXJUb1N0cmluZy53b3JraW5nXG4gICAgPyBpc1NoYXJlZEFycmF5QnVmZmVyVG9TdHJpbmcodmFsdWUpXG4gICAgOiB2YWx1ZSBpbnN0YW5jZW9mIFNoYXJlZEFycmF5QnVmZmVyQ29weTtcbn1cbmV4cG9ydHMuaXNTaGFyZWRBcnJheUJ1ZmZlciA9IGlzU2hhcmVkQXJyYXlCdWZmZXI7XG5cbmZ1bmN0aW9uIGlzQXN5bmNGdW5jdGlvbih2YWx1ZSkge1xuICByZXR1cm4gT2JqZWN0VG9TdHJpbmcodmFsdWUpID09PSAnW29iamVjdCBBc3luY0Z1bmN0aW9uXSc7XG59XG5leHBvcnRzLmlzQXN5bmNGdW5jdGlvbiA9IGlzQXN5bmNGdW5jdGlvbjtcblxuZnVuY3Rpb24gaXNNYXBJdGVyYXRvcih2YWx1ZSkge1xuICByZXR1cm4gT2JqZWN0VG9TdHJpbmcodmFsdWUpID09PSAnW29iamVjdCBNYXAgSXRlcmF0b3JdJztcbn1cbmV4cG9ydHMuaXNNYXBJdGVyYXRvciA9IGlzTWFwSXRlcmF0b3I7XG5cbmZ1bmN0aW9uIGlzU2V0SXRlcmF0b3IodmFsdWUpIHtcbiAgcmV0dXJuIE9iamVjdFRvU3RyaW5nKHZhbHVlKSA9PT0gJ1tvYmplY3QgU2V0IEl0ZXJhdG9yXSc7XG59XG5leHBvcnRzLmlzU2V0SXRlcmF0b3IgPSBpc1NldEl0ZXJhdG9yO1xuXG5mdW5jdGlvbiBpc0dlbmVyYXRvck9iamVjdCh2YWx1ZSkge1xuICByZXR1cm4gT2JqZWN0VG9TdHJpbmcodmFsdWUpID09PSAnW29iamVjdCBHZW5lcmF0b3JdJztcbn1cbmV4cG9ydHMuaXNHZW5lcmF0b3JPYmplY3QgPSBpc0dlbmVyYXRvck9iamVjdDtcblxuZnVuY3Rpb24gaXNXZWJBc3NlbWJseUNvbXBpbGVkTW9kdWxlKHZhbHVlKSB7XG4gIHJldHVybiBPYmplY3RUb1N0cmluZyh2YWx1ZSkgPT09ICdbb2JqZWN0IFdlYkFzc2VtYmx5Lk1vZHVsZV0nO1xufVxuZXhwb3J0cy5pc1dlYkFzc2VtYmx5Q29tcGlsZWRNb2R1bGUgPSBpc1dlYkFzc2VtYmx5Q29tcGlsZWRNb2R1bGU7XG5cbmZ1bmN0aW9uIGlzTnVtYmVyT2JqZWN0KHZhbHVlKSB7XG4gIHJldHVybiBjaGVja0JveGVkUHJpbWl0aXZlKHZhbHVlLCBudW1iZXJWYWx1ZSk7XG59XG5leHBvcnRzLmlzTnVtYmVyT2JqZWN0ID0gaXNOdW1iZXJPYmplY3Q7XG5cbmZ1bmN0aW9uIGlzU3RyaW5nT2JqZWN0KHZhbHVlKSB7XG4gIHJldHVybiBjaGVja0JveGVkUHJpbWl0aXZlKHZhbHVlLCBzdHJpbmdWYWx1ZSk7XG59XG5leHBvcnRzLmlzU3RyaW5nT2JqZWN0ID0gaXNTdHJpbmdPYmplY3Q7XG5cbmZ1bmN0aW9uIGlzQm9vbGVhbk9iamVjdCh2YWx1ZSkge1xuICByZXR1cm4gY2hlY2tCb3hlZFByaW1pdGl2ZSh2YWx1ZSwgYm9vbGVhblZhbHVlKTtcbn1cbmV4cG9ydHMuaXNCb29sZWFuT2JqZWN0ID0gaXNCb29sZWFuT2JqZWN0O1xuXG5mdW5jdGlvbiBpc0JpZ0ludE9iamVjdCh2YWx1ZSkge1xuICByZXR1cm4gQmlnSW50U3VwcG9ydGVkICYmIGNoZWNrQm94ZWRQcmltaXRpdmUodmFsdWUsIGJpZ0ludFZhbHVlKTtcbn1cbmV4cG9ydHMuaXNCaWdJbnRPYmplY3QgPSBpc0JpZ0ludE9iamVjdDtcblxuZnVuY3Rpb24gaXNTeW1ib2xPYmplY3QodmFsdWUpIHtcbiAgcmV0dXJuIFN5bWJvbFN1cHBvcnRlZCAmJiBjaGVja0JveGVkUHJpbWl0aXZlKHZhbHVlLCBzeW1ib2xWYWx1ZSk7XG59XG5leHBvcnRzLmlzU3ltYm9sT2JqZWN0ID0gaXNTeW1ib2xPYmplY3Q7XG5cbmZ1bmN0aW9uIGlzQm94ZWRQcmltaXRpdmUodmFsdWUpIHtcbiAgcmV0dXJuIChcbiAgICBpc051bWJlck9iamVjdCh2YWx1ZSkgfHxcbiAgICBpc1N0cmluZ09iamVjdCh2YWx1ZSkgfHxcbiAgICBpc0Jvb2xlYW5PYmplY3QodmFsdWUpIHx8XG4gICAgaXNCaWdJbnRPYmplY3QodmFsdWUpIHx8XG4gICAgaXNTeW1ib2xPYmplY3QodmFsdWUpXG4gICk7XG59XG5leHBvcnRzLmlzQm94ZWRQcmltaXRpdmUgPSBpc0JveGVkUHJpbWl0aXZlO1xuXG5mdW5jdGlvbiBpc0FueUFycmF5QnVmZmVyKHZhbHVlKSB7XG4gIHJldHVybiB0eXBlb2YgVWludDhBcnJheSAhPT0gJ3VuZGVmaW5lZCcgJiYgKFxuICAgIGlzQXJyYXlCdWZmZXIodmFsdWUpIHx8XG4gICAgaXNTaGFyZWRBcnJheUJ1ZmZlcih2YWx1ZSlcbiAgKTtcbn1cbmV4cG9ydHMuaXNBbnlBcnJheUJ1ZmZlciA9IGlzQW55QXJyYXlCdWZmZXI7XG5cblsnaXNQcm94eScsICdpc0V4dGVybmFsJywgJ2lzTW9kdWxlTmFtZXNwYWNlT2JqZWN0J10uZm9yRWFjaChmdW5jdGlvbihtZXRob2QpIHtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG1ldGhvZCwge1xuICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgIHZhbHVlOiBmdW5jdGlvbigpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihtZXRob2QgKyAnIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdXNlcmxhbmQnKTtcbiAgICB9XG4gIH0pO1xufSk7XG4iLCIvLyBDb3B5cmlnaHQgSm95ZW50LCBJbmMuIGFuZCBvdGhlciBOb2RlIGNvbnRyaWJ1dG9ycy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYVxuLy8gY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZVxuLy8gXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nXG4vLyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsXG4vLyBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0XG4vLyBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGVcbi8vIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkXG4vLyBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTXG4vLyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GXG4vLyBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOXG4vLyBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSxcbi8vIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUlxuLy8gT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRVxuLy8gVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cblxudmFyIGdldE93blByb3BlcnR5RGVzY3JpcHRvcnMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyB8fFxuICBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKG9iaikge1xuICAgIHZhciBrZXlzID0gT2JqZWN0LmtleXMob2JqKTtcbiAgICB2YXIgZGVzY3JpcHRvcnMgPSB7fTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGRlc2NyaXB0b3JzW2tleXNbaV1dID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosIGtleXNbaV0pO1xuICAgIH1cbiAgICByZXR1cm4gZGVzY3JpcHRvcnM7XG4gIH07XG5cbnZhciBmb3JtYXRSZWdFeHAgPSAvJVtzZGolXS9nO1xuZXhwb3J0cy5mb3JtYXQgPSBmdW5jdGlvbihmKSB7XG4gIGlmICghaXNTdHJpbmcoZikpIHtcbiAgICB2YXIgb2JqZWN0cyA9IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBvYmplY3RzLnB1c2goaW5zcGVjdChhcmd1bWVudHNbaV0pKTtcbiAgICB9XG4gICAgcmV0dXJuIG9iamVjdHMuam9pbignICcpO1xuICB9XG5cbiAgdmFyIGkgPSAxO1xuICB2YXIgYXJncyA9IGFyZ3VtZW50cztcbiAgdmFyIGxlbiA9IGFyZ3MubGVuZ3RoO1xuICB2YXIgc3RyID0gU3RyaW5nKGYpLnJlcGxhY2UoZm9ybWF0UmVnRXhwLCBmdW5jdGlvbih4KSB7XG4gICAgaWYgKHggPT09ICclJScpIHJldHVybiAnJSc7XG4gICAgaWYgKGkgPj0gbGVuKSByZXR1cm4geDtcbiAgICBzd2l0Y2ggKHgpIHtcbiAgICAgIGNhc2UgJyVzJzogcmV0dXJuIFN0cmluZyhhcmdzW2krK10pO1xuICAgICAgY2FzZSAnJWQnOiByZXR1cm4gTnVtYmVyKGFyZ3NbaSsrXSk7XG4gICAgICBjYXNlICclaic6XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KGFyZ3NbaSsrXSk7XG4gICAgICAgIH0gY2F0Y2ggKF8pIHtcbiAgICAgICAgICByZXR1cm4gJ1tDaXJjdWxhcl0nO1xuICAgICAgICB9XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4geDtcbiAgICB9XG4gIH0pO1xuICBmb3IgKHZhciB4ID0gYXJnc1tpXTsgaSA8IGxlbjsgeCA9IGFyZ3NbKytpXSkge1xuICAgIGlmIChpc051bGwoeCkgfHwgIWlzT2JqZWN0KHgpKSB7XG4gICAgICBzdHIgKz0gJyAnICsgeDtcbiAgICB9IGVsc2Uge1xuICAgICAgc3RyICs9ICcgJyArIGluc3BlY3QoeCk7XG4gICAgfVxuICB9XG4gIHJldHVybiBzdHI7XG59O1xuXG5cbi8vIE1hcmsgdGhhdCBhIG1ldGhvZCBzaG91bGQgbm90IGJlIHVzZWQuXG4vLyBSZXR1cm5zIGEgbW9kaWZpZWQgZnVuY3Rpb24gd2hpY2ggd2FybnMgb25jZSBieSBkZWZhdWx0LlxuLy8gSWYgLS1uby1kZXByZWNhdGlvbiBpcyBzZXQsIHRoZW4gaXQgaXMgYSBuby1vcC5cbmV4cG9ydHMuZGVwcmVjYXRlID0gZnVuY3Rpb24oZm4sIG1zZykge1xuICBpZiAodHlwZW9mIHByb2Nlc3MgIT09ICd1bmRlZmluZWQnICYmIHByb2Nlc3Mubm9EZXByZWNhdGlvbiA9PT0gdHJ1ZSkge1xuICAgIHJldHVybiBmbjtcbiAgfVxuXG4gIC8vIEFsbG93IGZvciBkZXByZWNhdGluZyB0aGluZ3MgaW4gdGhlIHByb2Nlc3Mgb2Ygc3RhcnRpbmcgdXAuXG4gIGlmICh0eXBlb2YgcHJvY2VzcyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gZXhwb3J0cy5kZXByZWNhdGUoZm4sIG1zZykuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9O1xuICB9XG5cbiAgdmFyIHdhcm5lZCA9IGZhbHNlO1xuICBmdW5jdGlvbiBkZXByZWNhdGVkKCkge1xuICAgIGlmICghd2FybmVkKSB7XG4gICAgICBpZiAocHJvY2Vzcy50aHJvd0RlcHJlY2F0aW9uKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihtc2cpO1xuICAgICAgfSBlbHNlIGlmIChwcm9jZXNzLnRyYWNlRGVwcmVjYXRpb24pIHtcbiAgICAgICAgY29uc29sZS50cmFjZShtc2cpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihtc2cpO1xuICAgICAgfVxuICAgICAgd2FybmVkID0gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH1cblxuICByZXR1cm4gZGVwcmVjYXRlZDtcbn07XG5cblxudmFyIGRlYnVncyA9IHt9O1xudmFyIGRlYnVnRW52UmVnZXggPSAvXiQvO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9ERUJVRykge1xuICB2YXIgZGVidWdFbnYgPSBwcm9jZXNzLmVudi5OT0RFX0RFQlVHO1xuICBkZWJ1Z0VudiA9IGRlYnVnRW52LnJlcGxhY2UoL1t8XFxcXHt9KClbXFxdXiQrPy5dL2csICdcXFxcJCYnKVxuICAgIC5yZXBsYWNlKC9cXCovZywgJy4qJylcbiAgICAucmVwbGFjZSgvLC9nLCAnJHxeJylcbiAgICAudG9VcHBlckNhc2UoKTtcbiAgZGVidWdFbnZSZWdleCA9IG5ldyBSZWdFeHAoJ14nICsgZGVidWdFbnYgKyAnJCcsICdpJyk7XG59XG5leHBvcnRzLmRlYnVnbG9nID0gZnVuY3Rpb24oc2V0KSB7XG4gIHNldCA9IHNldC50b1VwcGVyQ2FzZSgpO1xuICBpZiAoIWRlYnVnc1tzZXRdKSB7XG4gICAgaWYgKGRlYnVnRW52UmVnZXgudGVzdChzZXQpKSB7XG4gICAgICB2YXIgcGlkID0gcHJvY2Vzcy5waWQ7XG4gICAgICBkZWJ1Z3Nbc2V0XSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgbXNnID0gZXhwb3J0cy5mb3JtYXQuYXBwbHkoZXhwb3J0cywgYXJndW1lbnRzKTtcbiAgICAgICAgY29uc29sZS5lcnJvcignJXMgJWQ6ICVzJywgc2V0LCBwaWQsIG1zZyk7XG4gICAgICB9O1xuICAgIH0gZWxzZSB7XG4gICAgICBkZWJ1Z3Nbc2V0XSA9IGZ1bmN0aW9uKCkge307XG4gICAgfVxuICB9XG4gIHJldHVybiBkZWJ1Z3Nbc2V0XTtcbn07XG5cblxuLyoqXG4gKiBFY2hvcyB0aGUgdmFsdWUgb2YgYSB2YWx1ZS4gVHJ5cyB0byBwcmludCB0aGUgdmFsdWUgb3V0XG4gKiBpbiB0aGUgYmVzdCB3YXkgcG9zc2libGUgZ2l2ZW4gdGhlIGRpZmZlcmVudCB0eXBlcy5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqIFRoZSBvYmplY3QgdG8gcHJpbnQgb3V0LlxuICogQHBhcmFtIHtPYmplY3R9IG9wdHMgT3B0aW9uYWwgb3B0aW9ucyBvYmplY3QgdGhhdCBhbHRlcnMgdGhlIG91dHB1dC5cbiAqL1xuLyogbGVnYWN5OiBvYmosIHNob3dIaWRkZW4sIGRlcHRoLCBjb2xvcnMqL1xuZnVuY3Rpb24gaW5zcGVjdChvYmosIG9wdHMpIHtcbiAgLy8gZGVmYXVsdCBvcHRpb25zXG4gIHZhciBjdHggPSB7XG4gICAgc2VlbjogW10sXG4gICAgc3R5bGl6ZTogc3R5bGl6ZU5vQ29sb3JcbiAgfTtcbiAgLy8gbGVnYWN5Li4uXG4gIGlmIChhcmd1bWVudHMubGVuZ3RoID49IDMpIGN0eC5kZXB0aCA9IGFyZ3VtZW50c1syXTtcbiAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPj0gNCkgY3R4LmNvbG9ycyA9IGFyZ3VtZW50c1szXTtcbiAgaWYgKGlzQm9vbGVhbihvcHRzKSkge1xuICAgIC8vIGxlZ2FjeS4uLlxuICAgIGN0eC5zaG93SGlkZGVuID0gb3B0cztcbiAgfSBlbHNlIGlmIChvcHRzKSB7XG4gICAgLy8gZ290IGFuIFwib3B0aW9uc1wiIG9iamVjdFxuICAgIGV4cG9ydHMuX2V4dGVuZChjdHgsIG9wdHMpO1xuICB9XG4gIC8vIHNldCBkZWZhdWx0IG9wdGlvbnNcbiAgaWYgKGlzVW5kZWZpbmVkKGN0eC5zaG93SGlkZGVuKSkgY3R4LnNob3dIaWRkZW4gPSBmYWxzZTtcbiAgaWYgKGlzVW5kZWZpbmVkKGN0eC5kZXB0aCkpIGN0eC5kZXB0aCA9IDI7XG4gIGlmIChpc1VuZGVmaW5lZChjdHguY29sb3JzKSkgY3R4LmNvbG9ycyA9IGZhbHNlO1xuICBpZiAoaXNVbmRlZmluZWQoY3R4LmN1c3RvbUluc3BlY3QpKSBjdHguY3VzdG9tSW5zcGVjdCA9IHRydWU7XG4gIGlmIChjdHguY29sb3JzKSBjdHguc3R5bGl6ZSA9IHN0eWxpemVXaXRoQ29sb3I7XG4gIHJldHVybiBmb3JtYXRWYWx1ZShjdHgsIG9iaiwgY3R4LmRlcHRoKTtcbn1cbmV4cG9ydHMuaW5zcGVjdCA9IGluc3BlY3Q7XG5cblxuLy8gaHR0cDovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9BTlNJX2VzY2FwZV9jb2RlI2dyYXBoaWNzXG5pbnNwZWN0LmNvbG9ycyA9IHtcbiAgJ2JvbGQnIDogWzEsIDIyXSxcbiAgJ2l0YWxpYycgOiBbMywgMjNdLFxuICAndW5kZXJsaW5lJyA6IFs0LCAyNF0sXG4gICdpbnZlcnNlJyA6IFs3LCAyN10sXG4gICd3aGl0ZScgOiBbMzcsIDM5XSxcbiAgJ2dyZXknIDogWzkwLCAzOV0sXG4gICdibGFjaycgOiBbMzAsIDM5XSxcbiAgJ2JsdWUnIDogWzM0LCAzOV0sXG4gICdjeWFuJyA6IFszNiwgMzldLFxuICAnZ3JlZW4nIDogWzMyLCAzOV0sXG4gICdtYWdlbnRhJyA6IFszNSwgMzldLFxuICAncmVkJyA6IFszMSwgMzldLFxuICAneWVsbG93JyA6IFszMywgMzldXG59O1xuXG4vLyBEb24ndCB1c2UgJ2JsdWUnIG5vdCB2aXNpYmxlIG9uIGNtZC5leGVcbmluc3BlY3Quc3R5bGVzID0ge1xuICAnc3BlY2lhbCc6ICdjeWFuJyxcbiAgJ251bWJlcic6ICd5ZWxsb3cnLFxuICAnYm9vbGVhbic6ICd5ZWxsb3cnLFxuICAndW5kZWZpbmVkJzogJ2dyZXknLFxuICAnbnVsbCc6ICdib2xkJyxcbiAgJ3N0cmluZyc6ICdncmVlbicsXG4gICdkYXRlJzogJ21hZ2VudGEnLFxuICAvLyBcIm5hbWVcIjogaW50ZW50aW9uYWxseSBub3Qgc3R5bGluZ1xuICAncmVnZXhwJzogJ3JlZCdcbn07XG5cblxuZnVuY3Rpb24gc3R5bGl6ZVdpdGhDb2xvcihzdHIsIHN0eWxlVHlwZSkge1xuICB2YXIgc3R5bGUgPSBpbnNwZWN0LnN0eWxlc1tzdHlsZVR5cGVdO1xuXG4gIGlmIChzdHlsZSkge1xuICAgIHJldHVybiAnXFx1MDAxYlsnICsgaW5zcGVjdC5jb2xvcnNbc3R5bGVdWzBdICsgJ20nICsgc3RyICtcbiAgICAgICAgICAgJ1xcdTAwMWJbJyArIGluc3BlY3QuY29sb3JzW3N0eWxlXVsxXSArICdtJztcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gc3RyO1xuICB9XG59XG5cblxuZnVuY3Rpb24gc3R5bGl6ZU5vQ29sb3Ioc3RyLCBzdHlsZVR5cGUpIHtcbiAgcmV0dXJuIHN0cjtcbn1cblxuXG5mdW5jdGlvbiBhcnJheVRvSGFzaChhcnJheSkge1xuICB2YXIgaGFzaCA9IHt9O1xuXG4gIGFycmF5LmZvckVhY2goZnVuY3Rpb24odmFsLCBpZHgpIHtcbiAgICBoYXNoW3ZhbF0gPSB0cnVlO1xuICB9KTtcblxuICByZXR1cm4gaGFzaDtcbn1cblxuXG5mdW5jdGlvbiBmb3JtYXRWYWx1ZShjdHgsIHZhbHVlLCByZWN1cnNlVGltZXMpIHtcbiAgLy8gUHJvdmlkZSBhIGhvb2sgZm9yIHVzZXItc3BlY2lmaWVkIGluc3BlY3QgZnVuY3Rpb25zLlxuICAvLyBDaGVjayB0aGF0IHZhbHVlIGlzIGFuIG9iamVjdCB3aXRoIGFuIGluc3BlY3QgZnVuY3Rpb24gb24gaXRcbiAgaWYgKGN0eC5jdXN0b21JbnNwZWN0ICYmXG4gICAgICB2YWx1ZSAmJlxuICAgICAgaXNGdW5jdGlvbih2YWx1ZS5pbnNwZWN0KSAmJlxuICAgICAgLy8gRmlsdGVyIG91dCB0aGUgdXRpbCBtb2R1bGUsIGl0J3MgaW5zcGVjdCBmdW5jdGlvbiBpcyBzcGVjaWFsXG4gICAgICB2YWx1ZS5pbnNwZWN0ICE9PSBleHBvcnRzLmluc3BlY3QgJiZcbiAgICAgIC8vIEFsc28gZmlsdGVyIG91dCBhbnkgcHJvdG90eXBlIG9iamVjdHMgdXNpbmcgdGhlIGNpcmN1bGFyIGNoZWNrLlxuICAgICAgISh2YWx1ZS5jb25zdHJ1Y3RvciAmJiB2YWx1ZS5jb25zdHJ1Y3Rvci5wcm90b3R5cGUgPT09IHZhbHVlKSkge1xuICAgIHZhciByZXQgPSB2YWx1ZS5pbnNwZWN0KHJlY3Vyc2VUaW1lcywgY3R4KTtcbiAgICBpZiAoIWlzU3RyaW5nKHJldCkpIHtcbiAgICAgIHJldCA9IGZvcm1hdFZhbHVlKGN0eCwgcmV0LCByZWN1cnNlVGltZXMpO1xuICAgIH1cbiAgICByZXR1cm4gcmV0O1xuICB9XG5cbiAgLy8gUHJpbWl0aXZlIHR5cGVzIGNhbm5vdCBoYXZlIHByb3BlcnRpZXNcbiAgdmFyIHByaW1pdGl2ZSA9IGZvcm1hdFByaW1pdGl2ZShjdHgsIHZhbHVlKTtcbiAgaWYgKHByaW1pdGl2ZSkge1xuICAgIHJldHVybiBwcmltaXRpdmU7XG4gIH1cblxuICAvLyBMb29rIHVwIHRoZSBrZXlzIG9mIHRoZSBvYmplY3QuXG4gIHZhciBrZXlzID0gT2JqZWN0LmtleXModmFsdWUpO1xuICB2YXIgdmlzaWJsZUtleXMgPSBhcnJheVRvSGFzaChrZXlzKTtcblxuICBpZiAoY3R4LnNob3dIaWRkZW4pIHtcbiAgICBrZXlzID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModmFsdWUpO1xuICB9XG5cbiAgLy8gSUUgZG9lc24ndCBtYWtlIGVycm9yIGZpZWxkcyBub24tZW51bWVyYWJsZVxuICAvLyBodHRwOi8vbXNkbi5taWNyb3NvZnQuY29tL2VuLXVzL2xpYnJhcnkvaWUvZHd3NTJzYnQodj12cy45NCkuYXNweFxuICBpZiAoaXNFcnJvcih2YWx1ZSlcbiAgICAgICYmIChrZXlzLmluZGV4T2YoJ21lc3NhZ2UnKSA+PSAwIHx8IGtleXMuaW5kZXhPZignZGVzY3JpcHRpb24nKSA+PSAwKSkge1xuICAgIHJldHVybiBmb3JtYXRFcnJvcih2YWx1ZSk7XG4gIH1cblxuICAvLyBTb21lIHR5cGUgb2Ygb2JqZWN0IHdpdGhvdXQgcHJvcGVydGllcyBjYW4gYmUgc2hvcnRjdXR0ZWQuXG4gIGlmIChrZXlzLmxlbmd0aCA9PT0gMCkge1xuICAgIGlmIChpc0Z1bmN0aW9uKHZhbHVlKSkge1xuICAgICAgdmFyIG5hbWUgPSB2YWx1ZS5uYW1lID8gJzogJyArIHZhbHVlLm5hbWUgOiAnJztcbiAgICAgIHJldHVybiBjdHguc3R5bGl6ZSgnW0Z1bmN0aW9uJyArIG5hbWUgKyAnXScsICdzcGVjaWFsJyk7XG4gICAgfVxuICAgIGlmIChpc1JlZ0V4cCh2YWx1ZSkpIHtcbiAgICAgIHJldHVybiBjdHguc3R5bGl6ZShSZWdFeHAucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsdWUpLCAncmVnZXhwJyk7XG4gICAgfVxuICAgIGlmIChpc0RhdGUodmFsdWUpKSB7XG4gICAgICByZXR1cm4gY3R4LnN0eWxpemUoRGF0ZS5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWx1ZSksICdkYXRlJyk7XG4gICAgfVxuICAgIGlmIChpc0Vycm9yKHZhbHVlKSkge1xuICAgICAgcmV0dXJuIGZvcm1hdEVycm9yKHZhbHVlKTtcbiAgICB9XG4gIH1cblxuICB2YXIgYmFzZSA9ICcnLCBhcnJheSA9IGZhbHNlLCBicmFjZXMgPSBbJ3snLCAnfSddO1xuXG4gIC8vIE1ha2UgQXJyYXkgc2F5IHRoYXQgdGhleSBhcmUgQXJyYXlcbiAgaWYgKGlzQXJyYXkodmFsdWUpKSB7XG4gICAgYXJyYXkgPSB0cnVlO1xuICAgIGJyYWNlcyA9IFsnWycsICddJ107XG4gIH1cblxuICAvLyBNYWtlIGZ1bmN0aW9ucyBzYXkgdGhhdCB0aGV5IGFyZSBmdW5jdGlvbnNcbiAgaWYgKGlzRnVuY3Rpb24odmFsdWUpKSB7XG4gICAgdmFyIG4gPSB2YWx1ZS5uYW1lID8gJzogJyArIHZhbHVlLm5hbWUgOiAnJztcbiAgICBiYXNlID0gJyBbRnVuY3Rpb24nICsgbiArICddJztcbiAgfVxuXG4gIC8vIE1ha2UgUmVnRXhwcyBzYXkgdGhhdCB0aGV5IGFyZSBSZWdFeHBzXG4gIGlmIChpc1JlZ0V4cCh2YWx1ZSkpIHtcbiAgICBiYXNlID0gJyAnICsgUmVnRXhwLnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhbHVlKTtcbiAgfVxuXG4gIC8vIE1ha2UgZGF0ZXMgd2l0aCBwcm9wZXJ0aWVzIGZpcnN0IHNheSB0aGUgZGF0ZVxuICBpZiAoaXNEYXRlKHZhbHVlKSkge1xuICAgIGJhc2UgPSAnICcgKyBEYXRlLnByb3RvdHlwZS50b1VUQ1N0cmluZy5jYWxsKHZhbHVlKTtcbiAgfVxuXG4gIC8vIE1ha2UgZXJyb3Igd2l0aCBtZXNzYWdlIGZpcnN0IHNheSB0aGUgZXJyb3JcbiAgaWYgKGlzRXJyb3IodmFsdWUpKSB7XG4gICAgYmFzZSA9ICcgJyArIGZvcm1hdEVycm9yKHZhbHVlKTtcbiAgfVxuXG4gIGlmIChrZXlzLmxlbmd0aCA9PT0gMCAmJiAoIWFycmF5IHx8IHZhbHVlLmxlbmd0aCA9PSAwKSkge1xuICAgIHJldHVybiBicmFjZXNbMF0gKyBiYXNlICsgYnJhY2VzWzFdO1xuICB9XG5cbiAgaWYgKHJlY3Vyc2VUaW1lcyA8IDApIHtcbiAgICBpZiAoaXNSZWdFeHAodmFsdWUpKSB7XG4gICAgICByZXR1cm4gY3R4LnN0eWxpemUoUmVnRXhwLnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhbHVlKSwgJ3JlZ2V4cCcpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gY3R4LnN0eWxpemUoJ1tPYmplY3RdJywgJ3NwZWNpYWwnKTtcbiAgICB9XG4gIH1cblxuICBjdHguc2Vlbi5wdXNoKHZhbHVlKTtcblxuICB2YXIgb3V0cHV0O1xuICBpZiAoYXJyYXkpIHtcbiAgICBvdXRwdXQgPSBmb3JtYXRBcnJheShjdHgsIHZhbHVlLCByZWN1cnNlVGltZXMsIHZpc2libGVLZXlzLCBrZXlzKTtcbiAgfSBlbHNlIHtcbiAgICBvdXRwdXQgPSBrZXlzLm1hcChmdW5jdGlvbihrZXkpIHtcbiAgICAgIHJldHVybiBmb3JtYXRQcm9wZXJ0eShjdHgsIHZhbHVlLCByZWN1cnNlVGltZXMsIHZpc2libGVLZXlzLCBrZXksIGFycmF5KTtcbiAgICB9KTtcbiAgfVxuXG4gIGN0eC5zZWVuLnBvcCgpO1xuXG4gIHJldHVybiByZWR1Y2VUb1NpbmdsZVN0cmluZyhvdXRwdXQsIGJhc2UsIGJyYWNlcyk7XG59XG5cblxuZnVuY3Rpb24gZm9ybWF0UHJpbWl0aXZlKGN0eCwgdmFsdWUpIHtcbiAgaWYgKGlzVW5kZWZpbmVkKHZhbHVlKSlcbiAgICByZXR1cm4gY3R4LnN0eWxpemUoJ3VuZGVmaW5lZCcsICd1bmRlZmluZWQnKTtcbiAgaWYgKGlzU3RyaW5nKHZhbHVlKSkge1xuICAgIHZhciBzaW1wbGUgPSAnXFwnJyArIEpTT04uc3RyaW5naWZ5KHZhbHVlKS5yZXBsYWNlKC9eXCJ8XCIkL2csICcnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoLycvZywgXCJcXFxcJ1wiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoL1xcXFxcIi9nLCAnXCInKSArICdcXCcnO1xuICAgIHJldHVybiBjdHguc3R5bGl6ZShzaW1wbGUsICdzdHJpbmcnKTtcbiAgfVxuICBpZiAoaXNOdW1iZXIodmFsdWUpKVxuICAgIHJldHVybiBjdHguc3R5bGl6ZSgnJyArIHZhbHVlLCAnbnVtYmVyJyk7XG4gIGlmIChpc0Jvb2xlYW4odmFsdWUpKVxuICAgIHJldHVybiBjdHguc3R5bGl6ZSgnJyArIHZhbHVlLCAnYm9vbGVhbicpO1xuICAvLyBGb3Igc29tZSByZWFzb24gdHlwZW9mIG51bGwgaXMgXCJvYmplY3RcIiwgc28gc3BlY2lhbCBjYXNlIGhlcmUuXG4gIGlmIChpc051bGwodmFsdWUpKVxuICAgIHJldHVybiBjdHguc3R5bGl6ZSgnbnVsbCcsICdudWxsJyk7XG59XG5cblxuZnVuY3Rpb24gZm9ybWF0RXJyb3IodmFsdWUpIHtcbiAgcmV0dXJuICdbJyArIEVycm9yLnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhbHVlKSArICddJztcbn1cblxuXG5mdW5jdGlvbiBmb3JtYXRBcnJheShjdHgsIHZhbHVlLCByZWN1cnNlVGltZXMsIHZpc2libGVLZXlzLCBrZXlzKSB7XG4gIHZhciBvdXRwdXQgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDAsIGwgPSB2YWx1ZS5sZW5ndGg7IGkgPCBsOyArK2kpIHtcbiAgICBpZiAoaGFzT3duUHJvcGVydHkodmFsdWUsIFN0cmluZyhpKSkpIHtcbiAgICAgIG91dHB1dC5wdXNoKGZvcm1hdFByb3BlcnR5KGN0eCwgdmFsdWUsIHJlY3Vyc2VUaW1lcywgdmlzaWJsZUtleXMsXG4gICAgICAgICAgU3RyaW5nKGkpLCB0cnVlKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG91dHB1dC5wdXNoKCcnKTtcbiAgICB9XG4gIH1cbiAga2V5cy5mb3JFYWNoKGZ1bmN0aW9uKGtleSkge1xuICAgIGlmICgha2V5Lm1hdGNoKC9eXFxkKyQvKSkge1xuICAgICAgb3V0cHV0LnB1c2goZm9ybWF0UHJvcGVydHkoY3R4LCB2YWx1ZSwgcmVjdXJzZVRpbWVzLCB2aXNpYmxlS2V5cyxcbiAgICAgICAgICBrZXksIHRydWUpKTtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gb3V0cHV0O1xufVxuXG5cbmZ1bmN0aW9uIGZvcm1hdFByb3BlcnR5KGN0eCwgdmFsdWUsIHJlY3Vyc2VUaW1lcywgdmlzaWJsZUtleXMsIGtleSwgYXJyYXkpIHtcbiAgdmFyIG5hbWUsIHN0ciwgZGVzYztcbiAgZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodmFsdWUsIGtleSkgfHwgeyB2YWx1ZTogdmFsdWVba2V5XSB9O1xuICBpZiAoZGVzYy5nZXQpIHtcbiAgICBpZiAoZGVzYy5zZXQpIHtcbiAgICAgIHN0ciA9IGN0eC5zdHlsaXplKCdbR2V0dGVyL1NldHRlcl0nLCAnc3BlY2lhbCcpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHIgPSBjdHguc3R5bGl6ZSgnW0dldHRlcl0nLCAnc3BlY2lhbCcpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBpZiAoZGVzYy5zZXQpIHtcbiAgICAgIHN0ciA9IGN0eC5zdHlsaXplKCdbU2V0dGVyXScsICdzcGVjaWFsJyk7XG4gICAgfVxuICB9XG4gIGlmICghaGFzT3duUHJvcGVydHkodmlzaWJsZUtleXMsIGtleSkpIHtcbiAgICBuYW1lID0gJ1snICsga2V5ICsgJ10nO1xuICB9XG4gIGlmICghc3RyKSB7XG4gICAgaWYgKGN0eC5zZWVuLmluZGV4T2YoZGVzYy52YWx1ZSkgPCAwKSB7XG4gICAgICBpZiAoaXNOdWxsKHJlY3Vyc2VUaW1lcykpIHtcbiAgICAgICAgc3RyID0gZm9ybWF0VmFsdWUoY3R4LCBkZXNjLnZhbHVlLCBudWxsKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHN0ciA9IGZvcm1hdFZhbHVlKGN0eCwgZGVzYy52YWx1ZSwgcmVjdXJzZVRpbWVzIC0gMSk7XG4gICAgICB9XG4gICAgICBpZiAoc3RyLmluZGV4T2YoJ1xcbicpID4gLTEpIHtcbiAgICAgICAgaWYgKGFycmF5KSB7XG4gICAgICAgICAgc3RyID0gc3RyLnNwbGl0KCdcXG4nKS5tYXAoZnVuY3Rpb24obGluZSkge1xuICAgICAgICAgICAgcmV0dXJuICcgICcgKyBsaW5lO1xuICAgICAgICAgIH0pLmpvaW4oJ1xcbicpLnNsaWNlKDIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHN0ciA9ICdcXG4nICsgc3RyLnNwbGl0KCdcXG4nKS5tYXAoZnVuY3Rpb24obGluZSkge1xuICAgICAgICAgICAgcmV0dXJuICcgICAnICsgbGluZTtcbiAgICAgICAgICB9KS5qb2luKCdcXG4nKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBzdHIgPSBjdHguc3R5bGl6ZSgnW0NpcmN1bGFyXScsICdzcGVjaWFsJyk7XG4gICAgfVxuICB9XG4gIGlmIChpc1VuZGVmaW5lZChuYW1lKSkge1xuICAgIGlmIChhcnJheSAmJiBrZXkubWF0Y2goL15cXGQrJC8pKSB7XG4gICAgICByZXR1cm4gc3RyO1xuICAgIH1cbiAgICBuYW1lID0gSlNPTi5zdHJpbmdpZnkoJycgKyBrZXkpO1xuICAgIGlmIChuYW1lLm1hdGNoKC9eXCIoW2EtekEtWl9dW2EtekEtWl8wLTldKilcIiQvKSkge1xuICAgICAgbmFtZSA9IG5hbWUuc2xpY2UoMSwgLTEpO1xuICAgICAgbmFtZSA9IGN0eC5zdHlsaXplKG5hbWUsICduYW1lJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG5hbWUgPSBuYW1lLnJlcGxhY2UoLycvZywgXCJcXFxcJ1wiKVxuICAgICAgICAgICAgICAgICAucmVwbGFjZSgvXFxcXFwiL2csICdcIicpXG4gICAgICAgICAgICAgICAgIC5yZXBsYWNlKC8oXlwifFwiJCkvZywgXCInXCIpO1xuICAgICAgbmFtZSA9IGN0eC5zdHlsaXplKG5hbWUsICdzdHJpbmcnKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gbmFtZSArICc6ICcgKyBzdHI7XG59XG5cblxuZnVuY3Rpb24gcmVkdWNlVG9TaW5nbGVTdHJpbmcob3V0cHV0LCBiYXNlLCBicmFjZXMpIHtcbiAgdmFyIG51bUxpbmVzRXN0ID0gMDtcbiAgdmFyIGxlbmd0aCA9IG91dHB1dC5yZWR1Y2UoZnVuY3Rpb24ocHJldiwgY3VyKSB7XG4gICAgbnVtTGluZXNFc3QrKztcbiAgICBpZiAoY3VyLmluZGV4T2YoJ1xcbicpID49IDApIG51bUxpbmVzRXN0Kys7XG4gICAgcmV0dXJuIHByZXYgKyBjdXIucmVwbGFjZSgvXFx1MDAxYlxcW1xcZFxcZD9tL2csICcnKS5sZW5ndGggKyAxO1xuICB9LCAwKTtcblxuICBpZiAobGVuZ3RoID4gNjApIHtcbiAgICByZXR1cm4gYnJhY2VzWzBdICtcbiAgICAgICAgICAgKGJhc2UgPT09ICcnID8gJycgOiBiYXNlICsgJ1xcbiAnKSArXG4gICAgICAgICAgICcgJyArXG4gICAgICAgICAgIG91dHB1dC5qb2luKCcsXFxuICAnKSArXG4gICAgICAgICAgICcgJyArXG4gICAgICAgICAgIGJyYWNlc1sxXTtcbiAgfVxuXG4gIHJldHVybiBicmFjZXNbMF0gKyBiYXNlICsgJyAnICsgb3V0cHV0LmpvaW4oJywgJykgKyAnICcgKyBicmFjZXNbMV07XG59XG5cblxuLy8gTk9URTogVGhlc2UgdHlwZSBjaGVja2luZyBmdW5jdGlvbnMgaW50ZW50aW9uYWxseSBkb24ndCB1c2UgYGluc3RhbmNlb2ZgXG4vLyBiZWNhdXNlIGl0IGlzIGZyYWdpbGUgYW5kIGNhbiBiZSBlYXNpbHkgZmFrZWQgd2l0aCBgT2JqZWN0LmNyZWF0ZSgpYC5cbmV4cG9ydHMudHlwZXMgPSByZXF1aXJlKCcuL3N1cHBvcnQvdHlwZXMnKTtcblxuZnVuY3Rpb24gaXNBcnJheShhcikge1xuICByZXR1cm4gQXJyYXkuaXNBcnJheShhcik7XG59XG5leHBvcnRzLmlzQXJyYXkgPSBpc0FycmF5O1xuXG5mdW5jdGlvbiBpc0Jvb2xlYW4oYXJnKSB7XG4gIHJldHVybiB0eXBlb2YgYXJnID09PSAnYm9vbGVhbic7XG59XG5leHBvcnRzLmlzQm9vbGVhbiA9IGlzQm9vbGVhbjtcblxuZnVuY3Rpb24gaXNOdWxsKGFyZykge1xuICByZXR1cm4gYXJnID09PSBudWxsO1xufVxuZXhwb3J0cy5pc051bGwgPSBpc051bGw7XG5cbmZ1bmN0aW9uIGlzTnVsbE9yVW5kZWZpbmVkKGFyZykge1xuICByZXR1cm4gYXJnID09IG51bGw7XG59XG5leHBvcnRzLmlzTnVsbE9yVW5kZWZpbmVkID0gaXNOdWxsT3JVbmRlZmluZWQ7XG5cbmZ1bmN0aW9uIGlzTnVtYmVyKGFyZykge1xuICByZXR1cm4gdHlwZW9mIGFyZyA9PT0gJ251bWJlcic7XG59XG5leHBvcnRzLmlzTnVtYmVyID0gaXNOdW1iZXI7XG5cbmZ1bmN0aW9uIGlzU3RyaW5nKGFyZykge1xuICByZXR1cm4gdHlwZW9mIGFyZyA9PT0gJ3N0cmluZyc7XG59XG5leHBvcnRzLmlzU3RyaW5nID0gaXNTdHJpbmc7XG5cbmZ1bmN0aW9uIGlzU3ltYm9sKGFyZykge1xuICByZXR1cm4gdHlwZW9mIGFyZyA9PT0gJ3N5bWJvbCc7XG59XG5leHBvcnRzLmlzU3ltYm9sID0gaXNTeW1ib2w7XG5cbmZ1bmN0aW9uIGlzVW5kZWZpbmVkKGFyZykge1xuICByZXR1cm4gYXJnID09PSB2b2lkIDA7XG59XG5leHBvcnRzLmlzVW5kZWZpbmVkID0gaXNVbmRlZmluZWQ7XG5cbmZ1bmN0aW9uIGlzUmVnRXhwKHJlKSB7XG4gIHJldHVybiBpc09iamVjdChyZSkgJiYgb2JqZWN0VG9TdHJpbmcocmUpID09PSAnW29iamVjdCBSZWdFeHBdJztcbn1cbmV4cG9ydHMuaXNSZWdFeHAgPSBpc1JlZ0V4cDtcbmV4cG9ydHMudHlwZXMuaXNSZWdFeHAgPSBpc1JlZ0V4cDtcblxuZnVuY3Rpb24gaXNPYmplY3QoYXJnKSB7XG4gIHJldHVybiB0eXBlb2YgYXJnID09PSAnb2JqZWN0JyAmJiBhcmcgIT09IG51bGw7XG59XG5leHBvcnRzLmlzT2JqZWN0ID0gaXNPYmplY3Q7XG5cbmZ1bmN0aW9uIGlzRGF0ZShkKSB7XG4gIHJldHVybiBpc09iamVjdChkKSAmJiBvYmplY3RUb1N0cmluZyhkKSA9PT0gJ1tvYmplY3QgRGF0ZV0nO1xufVxuZXhwb3J0cy5pc0RhdGUgPSBpc0RhdGU7XG5leHBvcnRzLnR5cGVzLmlzRGF0ZSA9IGlzRGF0ZTtcblxuZnVuY3Rpb24gaXNFcnJvcihlKSB7XG4gIHJldHVybiBpc09iamVjdChlKSAmJlxuICAgICAgKG9iamVjdFRvU3RyaW5nKGUpID09PSAnW29iamVjdCBFcnJvcl0nIHx8IGUgaW5zdGFuY2VvZiBFcnJvcik7XG59XG5leHBvcnRzLmlzRXJyb3IgPSBpc0Vycm9yO1xuZXhwb3J0cy50eXBlcy5pc05hdGl2ZUVycm9yID0gaXNFcnJvcjtcblxuZnVuY3Rpb24gaXNGdW5jdGlvbihhcmcpIHtcbiAgcmV0dXJuIHR5cGVvZiBhcmcgPT09ICdmdW5jdGlvbic7XG59XG5leHBvcnRzLmlzRnVuY3Rpb24gPSBpc0Z1bmN0aW9uO1xuXG5mdW5jdGlvbiBpc1ByaW1pdGl2ZShhcmcpIHtcbiAgcmV0dXJuIGFyZyA9PT0gbnVsbCB8fFxuICAgICAgICAgdHlwZW9mIGFyZyA9PT0gJ2Jvb2xlYW4nIHx8XG4gICAgICAgICB0eXBlb2YgYXJnID09PSAnbnVtYmVyJyB8fFxuICAgICAgICAgdHlwZW9mIGFyZyA9PT0gJ3N0cmluZycgfHxcbiAgICAgICAgIHR5cGVvZiBhcmcgPT09ICdzeW1ib2wnIHx8ICAvLyBFUzYgc3ltYm9sXG4gICAgICAgICB0eXBlb2YgYXJnID09PSAndW5kZWZpbmVkJztcbn1cbmV4cG9ydHMuaXNQcmltaXRpdmUgPSBpc1ByaW1pdGl2ZTtcblxuZXhwb3J0cy5pc0J1ZmZlciA9IHJlcXVpcmUoJy4vc3VwcG9ydC9pc0J1ZmZlcicpO1xuXG5mdW5jdGlvbiBvYmplY3RUb1N0cmluZyhvKSB7XG4gIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobyk7XG59XG5cblxuZnVuY3Rpb24gcGFkKG4pIHtcbiAgcmV0dXJuIG4gPCAxMCA/ICcwJyArIG4udG9TdHJpbmcoMTApIDogbi50b1N0cmluZygxMCk7XG59XG5cblxudmFyIG1vbnRocyA9IFsnSmFuJywgJ0ZlYicsICdNYXInLCAnQXByJywgJ01heScsICdKdW4nLCAnSnVsJywgJ0F1ZycsICdTZXAnLFxuICAgICAgICAgICAgICAnT2N0JywgJ05vdicsICdEZWMnXTtcblxuLy8gMjYgRmViIDE2OjE5OjM0XG5mdW5jdGlvbiB0aW1lc3RhbXAoKSB7XG4gIHZhciBkID0gbmV3IERhdGUoKTtcbiAgdmFyIHRpbWUgPSBbcGFkKGQuZ2V0SG91cnMoKSksXG4gICAgICAgICAgICAgIHBhZChkLmdldE1pbnV0ZXMoKSksXG4gICAgICAgICAgICAgIHBhZChkLmdldFNlY29uZHMoKSldLmpvaW4oJzonKTtcbiAgcmV0dXJuIFtkLmdldERhdGUoKSwgbW9udGhzW2QuZ2V0TW9udGgoKV0sIHRpbWVdLmpvaW4oJyAnKTtcbn1cblxuXG4vLyBsb2cgaXMganVzdCBhIHRoaW4gd3JhcHBlciB0byBjb25zb2xlLmxvZyB0aGF0IHByZXBlbmRzIGEgdGltZXN0YW1wXG5leHBvcnRzLmxvZyA9IGZ1bmN0aW9uKCkge1xuICBjb25zb2xlLmxvZygnJXMgLSAlcycsIHRpbWVzdGFtcCgpLCBleHBvcnRzLmZvcm1hdC5hcHBseShleHBvcnRzLCBhcmd1bWVudHMpKTtcbn07XG5cblxuLyoqXG4gKiBJbmhlcml0IHRoZSBwcm90b3R5cGUgbWV0aG9kcyBmcm9tIG9uZSBjb25zdHJ1Y3RvciBpbnRvIGFub3RoZXIuXG4gKlxuICogVGhlIEZ1bmN0aW9uLnByb3RvdHlwZS5pbmhlcml0cyBmcm9tIGxhbmcuanMgcmV3cml0dGVuIGFzIGEgc3RhbmRhbG9uZVxuICogZnVuY3Rpb24gKG5vdCBvbiBGdW5jdGlvbi5wcm90b3R5cGUpLiBOT1RFOiBJZiB0aGlzIGZpbGUgaXMgdG8gYmUgbG9hZGVkXG4gKiBkdXJpbmcgYm9vdHN0cmFwcGluZyB0aGlzIGZ1bmN0aW9uIG5lZWRzIHRvIGJlIHJld3JpdHRlbiB1c2luZyBzb21lIG5hdGl2ZVxuICogZnVuY3Rpb25zIGFzIHByb3RvdHlwZSBzZXR1cCB1c2luZyBub3JtYWwgSmF2YVNjcmlwdCBkb2VzIG5vdCB3b3JrIGFzXG4gKiBleHBlY3RlZCBkdXJpbmcgYm9vdHN0cmFwcGluZyAoc2VlIG1pcnJvci5qcyBpbiByMTE0OTAzKS5cbiAqXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBjdG9yIENvbnN0cnVjdG9yIGZ1bmN0aW9uIHdoaWNoIG5lZWRzIHRvIGluaGVyaXQgdGhlXG4gKiAgICAgcHJvdG90eXBlLlxuICogQHBhcmFtIHtmdW5jdGlvbn0gc3VwZXJDdG9yIENvbnN0cnVjdG9yIGZ1bmN0aW9uIHRvIGluaGVyaXQgcHJvdG90eXBlIGZyb20uXG4gKi9cbmV4cG9ydHMuaW5oZXJpdHMgPSByZXF1aXJlKCdpbmhlcml0cycpO1xuXG5leHBvcnRzLl9leHRlbmQgPSBmdW5jdGlvbihvcmlnaW4sIGFkZCkge1xuICAvLyBEb24ndCBkbyBhbnl0aGluZyBpZiBhZGQgaXNuJ3QgYW4gb2JqZWN0XG4gIGlmICghYWRkIHx8ICFpc09iamVjdChhZGQpKSByZXR1cm4gb3JpZ2luO1xuXG4gIHZhciBrZXlzID0gT2JqZWN0LmtleXMoYWRkKTtcbiAgdmFyIGkgPSBrZXlzLmxlbmd0aDtcbiAgd2hpbGUgKGktLSkge1xuICAgIG9yaWdpbltrZXlzW2ldXSA9IGFkZFtrZXlzW2ldXTtcbiAgfVxuICByZXR1cm4gb3JpZ2luO1xufTtcblxuZnVuY3Rpb24gaGFzT3duUHJvcGVydHkob2JqLCBwcm9wKSB7XG4gIHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKTtcbn1cblxudmFyIGtDdXN0b21Qcm9taXNpZmllZFN5bWJvbCA9IHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnID8gU3ltYm9sKCd1dGlsLnByb21pc2lmeS5jdXN0b20nKSA6IHVuZGVmaW5lZDtcblxuZXhwb3J0cy5wcm9taXNpZnkgPSBmdW5jdGlvbiBwcm9taXNpZnkob3JpZ2luYWwpIHtcbiAgaWYgKHR5cGVvZiBvcmlnaW5hbCAhPT0gJ2Z1bmN0aW9uJylcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdUaGUgXCJvcmlnaW5hbFwiIGFyZ3VtZW50IG11c3QgYmUgb2YgdHlwZSBGdW5jdGlvbicpO1xuXG4gIGlmIChrQ3VzdG9tUHJvbWlzaWZpZWRTeW1ib2wgJiYgb3JpZ2luYWxba0N1c3RvbVByb21pc2lmaWVkU3ltYm9sXSkge1xuICAgIHZhciBmbiA9IG9yaWdpbmFsW2tDdXN0b21Qcm9taXNpZmllZFN5bWJvbF07XG4gICAgaWYgKHR5cGVvZiBmbiAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignVGhlIFwidXRpbC5wcm9taXNpZnkuY3VzdG9tXCIgYXJndW1lbnQgbXVzdCBiZSBvZiB0eXBlIEZ1bmN0aW9uJyk7XG4gICAgfVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShmbiwga0N1c3RvbVByb21pc2lmaWVkU3ltYm9sLCB7XG4gICAgICB2YWx1ZTogZm4sIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogZmFsc2UsIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIHJldHVybiBmbjtcbiAgfVxuXG4gIGZ1bmN0aW9uIGZuKCkge1xuICAgIHZhciBwcm9taXNlUmVzb2x2ZSwgcHJvbWlzZVJlamVjdDtcbiAgICB2YXIgcHJvbWlzZSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIHByb21pc2VSZXNvbHZlID0gcmVzb2x2ZTtcbiAgICAgIHByb21pc2VSZWplY3QgPSByZWplY3Q7XG4gICAgfSk7XG5cbiAgICB2YXIgYXJncyA9IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBhcmdzLnB1c2goYXJndW1lbnRzW2ldKTtcbiAgICB9XG4gICAgYXJncy5wdXNoKGZ1bmN0aW9uIChlcnIsIHZhbHVlKSB7XG4gICAgICBpZiAoZXJyKSB7XG4gICAgICAgIHByb21pc2VSZWplY3QoZXJyKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHByb21pc2VSZXNvbHZlKHZhbHVlKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHRyeSB7XG4gICAgICBvcmlnaW5hbC5hcHBseSh0aGlzLCBhcmdzKTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHByb21pc2VSZWplY3QoZXJyKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcHJvbWlzZTtcbiAgfVxuXG4gIE9iamVjdC5zZXRQcm90b3R5cGVPZihmbiwgT2JqZWN0LmdldFByb3RvdHlwZU9mKG9yaWdpbmFsKSk7XG5cbiAgaWYgKGtDdXN0b21Qcm9taXNpZmllZFN5bWJvbCkgT2JqZWN0LmRlZmluZVByb3BlcnR5KGZuLCBrQ3VzdG9tUHJvbWlzaWZpZWRTeW1ib2wsIHtcbiAgICB2YWx1ZTogZm4sIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogZmFsc2UsIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICB9KTtcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKFxuICAgIGZuLFxuICAgIGdldE93blByb3BlcnR5RGVzY3JpcHRvcnMob3JpZ2luYWwpXG4gICk7XG59XG5cbmV4cG9ydHMucHJvbWlzaWZ5LmN1c3RvbSA9IGtDdXN0b21Qcm9taXNpZmllZFN5bWJvbFxuXG5mdW5jdGlvbiBjYWxsYmFja2lmeU9uUmVqZWN0ZWQocmVhc29uLCBjYikge1xuICAvLyBgIXJlYXNvbmAgZ3VhcmQgaW5zcGlyZWQgYnkgYmx1ZWJpcmQgKFJlZjogaHR0cHM6Ly9nb28uZ2wvdDVJUzZNKS5cbiAgLy8gQmVjYXVzZSBgbnVsbGAgaXMgYSBzcGVjaWFsIGVycm9yIHZhbHVlIGluIGNhbGxiYWNrcyB3aGljaCBtZWFucyBcIm5vIGVycm9yXG4gIC8vIG9jY3VycmVkXCIsIHdlIGVycm9yLXdyYXAgc28gdGhlIGNhbGxiYWNrIGNvbnN1bWVyIGNhbiBkaXN0aW5ndWlzaCBiZXR3ZWVuXG4gIC8vIFwidGhlIHByb21pc2UgcmVqZWN0ZWQgd2l0aCBudWxsXCIgb3IgXCJ0aGUgcHJvbWlzZSBmdWxmaWxsZWQgd2l0aCB1bmRlZmluZWRcIi5cbiAgaWYgKCFyZWFzb24pIHtcbiAgICB2YXIgbmV3UmVhc29uID0gbmV3IEVycm9yKCdQcm9taXNlIHdhcyByZWplY3RlZCB3aXRoIGEgZmFsc3kgdmFsdWUnKTtcbiAgICBuZXdSZWFzb24ucmVhc29uID0gcmVhc29uO1xuICAgIHJlYXNvbiA9IG5ld1JlYXNvbjtcbiAgfVxuICByZXR1cm4gY2IocmVhc29uKTtcbn1cblxuZnVuY3Rpb24gY2FsbGJhY2tpZnkob3JpZ2luYWwpIHtcbiAgaWYgKHR5cGVvZiBvcmlnaW5hbCAhPT0gJ2Z1bmN0aW9uJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1RoZSBcIm9yaWdpbmFsXCIgYXJndW1lbnQgbXVzdCBiZSBvZiB0eXBlIEZ1bmN0aW9uJyk7XG4gIH1cblxuICAvLyBXZSBETyBOT1QgcmV0dXJuIHRoZSBwcm9taXNlIGFzIGl0IGdpdmVzIHRoZSB1c2VyIGEgZmFsc2Ugc2Vuc2UgdGhhdFxuICAvLyB0aGUgcHJvbWlzZSBpcyBhY3R1YWxseSBzb21laG93IHJlbGF0ZWQgdG8gdGhlIGNhbGxiYWNrJ3MgZXhlY3V0aW9uXG4gIC8vIGFuZCB0aGF0IHRoZSBjYWxsYmFjayB0aHJvd2luZyB3aWxsIHJlamVjdCB0aGUgcHJvbWlzZS5cbiAgZnVuY3Rpb24gY2FsbGJhY2tpZmllZCgpIHtcbiAgICB2YXIgYXJncyA9IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBhcmdzLnB1c2goYXJndW1lbnRzW2ldKTtcbiAgICB9XG5cbiAgICB2YXIgbWF5YmVDYiA9IGFyZ3MucG9wKCk7XG4gICAgaWYgKHR5cGVvZiBtYXliZUNiICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdUaGUgbGFzdCBhcmd1bWVudCBtdXN0IGJlIG9mIHR5cGUgRnVuY3Rpb24nKTtcbiAgICB9XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgIHZhciBjYiA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIG1heWJlQ2IuYXBwbHkoc2VsZiwgYXJndW1lbnRzKTtcbiAgICB9O1xuICAgIC8vIEluIHRydWUgbm9kZSBzdHlsZSB3ZSBwcm9jZXNzIHRoZSBjYWxsYmFjayBvbiBgbmV4dFRpY2tgIHdpdGggYWxsIHRoZVxuICAgIC8vIGltcGxpY2F0aW9ucyAoc3RhY2ssIGB1bmNhdWdodEV4Y2VwdGlvbmAsIGBhc3luY19ob29rc2ApXG4gICAgb3JpZ2luYWwuYXBwbHkodGhpcywgYXJncylcbiAgICAgIC50aGVuKGZ1bmN0aW9uKHJldCkgeyBwcm9jZXNzLm5leHRUaWNrKGNiLmJpbmQobnVsbCwgbnVsbCwgcmV0KSkgfSxcbiAgICAgICAgICAgIGZ1bmN0aW9uKHJlaikgeyBwcm9jZXNzLm5leHRUaWNrKGNhbGxiYWNraWZ5T25SZWplY3RlZC5iaW5kKG51bGwsIHJlaiwgY2IpKSB9KTtcbiAgfVxuXG4gIE9iamVjdC5zZXRQcm90b3R5cGVPZihjYWxsYmFja2lmaWVkLCBPYmplY3QuZ2V0UHJvdG90eXBlT2Yob3JpZ2luYWwpKTtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoY2FsbGJhY2tpZmllZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyhvcmlnaW5hbCkpO1xuICByZXR1cm4gY2FsbGJhY2tpZmllZDtcbn1cbmV4cG9ydHMuY2FsbGJhY2tpZnkgPSBjYWxsYmFja2lmeTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIGNsYXNzQ2FsbENoZWNrID0gZnVuY3Rpb24gKGluc3RhbmNlLCBDb25zdHJ1Y3Rvcikge1xuICBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7XG4gIH1cbn07XG5cbi8qKlxyXG4gKiBDcmVhdGVkIGJ5IFNlcmdpdSDImGFuZG9yIChtaWNrdTd6dSkgb24gMS8yNy8yMDE3LlxyXG4gKiBPcmlnaW5hbCBpZGVhOiBodHRwczovL2dpdGh1Yi5jb20vZ2lqc3JvZ2UvdGlsdC5qc1xyXG4gKiBNSVQgTGljZW5zZS5cclxuICogVmVyc2lvbiAxLjguMVxyXG4gKi9cblxudmFyIFZhbmlsbGFUaWx0ID0gZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBWYW5pbGxhVGlsdChlbGVtZW50KSB7XG4gICAgdmFyIHNldHRpbmdzID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7fTtcbiAgICBjbGFzc0NhbGxDaGVjayh0aGlzLCBWYW5pbGxhVGlsdCk7XG5cbiAgICBpZiAoIShlbGVtZW50IGluc3RhbmNlb2YgTm9kZSkpIHtcbiAgICAgIHRocm93IFwiQ2FuJ3QgaW5pdGlhbGl6ZSBWYW5pbGxhVGlsdCBiZWNhdXNlIFwiICsgZWxlbWVudCArIFwiIGlzIG5vdCBhIE5vZGUuXCI7XG4gICAgfVxuXG4gICAgdGhpcy53aWR0aCA9IG51bGw7XG4gICAgdGhpcy5oZWlnaHQgPSBudWxsO1xuICAgIHRoaXMuY2xpZW50V2lkdGggPSBudWxsO1xuICAgIHRoaXMuY2xpZW50SGVpZ2h0ID0gbnVsbDtcbiAgICB0aGlzLmxlZnQgPSBudWxsO1xuICAgIHRoaXMudG9wID0gbnVsbDtcblxuICAgIC8vIGZvciBHeXJvc2NvcGUgc2FtcGxpbmdcbiAgICB0aGlzLmdhbW1hemVybyA9IG51bGw7XG4gICAgdGhpcy5iZXRhemVybyA9IG51bGw7XG4gICAgdGhpcy5sYXN0Z2FtbWF6ZXJvID0gbnVsbDtcbiAgICB0aGlzLmxhc3RiZXRhemVybyA9IG51bGw7XG5cbiAgICB0aGlzLnRyYW5zaXRpb25UaW1lb3V0ID0gbnVsbDtcbiAgICB0aGlzLnVwZGF0ZUNhbGwgPSBudWxsO1xuICAgIHRoaXMuZXZlbnQgPSBudWxsO1xuXG4gICAgdGhpcy51cGRhdGVCaW5kID0gdGhpcy51cGRhdGUuYmluZCh0aGlzKTtcbiAgICB0aGlzLnJlc2V0QmluZCA9IHRoaXMucmVzZXQuYmluZCh0aGlzKTtcblxuICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgdGhpcy5zZXR0aW5ncyA9IHRoaXMuZXh0ZW5kU2V0dGluZ3Moc2V0dGluZ3MpO1xuXG4gICAgdGhpcy5yZXZlcnNlID0gdGhpcy5zZXR0aW5ncy5yZXZlcnNlID8gLTEgOiAxO1xuICAgIHRoaXMucmVzZXRUb1N0YXJ0ID0gVmFuaWxsYVRpbHQuaXNTZXR0aW5nVHJ1ZSh0aGlzLnNldHRpbmdzW1wicmVzZXQtdG8tc3RhcnRcIl0pO1xuICAgIHRoaXMuZ2xhcmUgPSBWYW5pbGxhVGlsdC5pc1NldHRpbmdUcnVlKHRoaXMuc2V0dGluZ3MuZ2xhcmUpO1xuICAgIHRoaXMuZ2xhcmVQcmVyZW5kZXIgPSBWYW5pbGxhVGlsdC5pc1NldHRpbmdUcnVlKHRoaXMuc2V0dGluZ3NbXCJnbGFyZS1wcmVyZW5kZXJcIl0pO1xuICAgIHRoaXMuZnVsbFBhZ2VMaXN0ZW5pbmcgPSBWYW5pbGxhVGlsdC5pc1NldHRpbmdUcnVlKHRoaXMuc2V0dGluZ3NbXCJmdWxsLXBhZ2UtbGlzdGVuaW5nXCJdKTtcbiAgICB0aGlzLmd5cm9zY29wZSA9IFZhbmlsbGFUaWx0LmlzU2V0dGluZ1RydWUodGhpcy5zZXR0aW5ncy5neXJvc2NvcGUpO1xuICAgIHRoaXMuZ3lyb3Njb3BlU2FtcGxlcyA9IHRoaXMuc2V0dGluZ3MuZ3lyb3Njb3BlU2FtcGxlcztcblxuICAgIHRoaXMuZWxlbWVudExpc3RlbmVyID0gdGhpcy5nZXRFbGVtZW50TGlzdGVuZXIoKTtcblxuICAgIGlmICh0aGlzLmdsYXJlKSB7XG4gICAgICB0aGlzLnByZXBhcmVHbGFyZSgpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmZ1bGxQYWdlTGlzdGVuaW5nKSB7XG4gICAgICB0aGlzLnVwZGF0ZUNsaWVudFNpemUoKTtcbiAgICB9XG5cbiAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXJzKCk7XG4gICAgdGhpcy5yZXNldCgpO1xuXG4gICAgaWYgKHRoaXMucmVzZXRUb1N0YXJ0ID09PSBmYWxzZSkge1xuICAgICAgdGhpcy5zZXR0aW5ncy5zdGFydFggPSAwO1xuICAgICAgdGhpcy5zZXR0aW5ncy5zdGFydFkgPSAwO1xuICAgIH1cbiAgfVxuXG4gIFZhbmlsbGFUaWx0LmlzU2V0dGluZ1RydWUgPSBmdW5jdGlvbiBpc1NldHRpbmdUcnVlKHNldHRpbmcpIHtcbiAgICByZXR1cm4gc2V0dGluZyA9PT0gXCJcIiB8fCBzZXR0aW5nID09PSB0cnVlIHx8IHNldHRpbmcgPT09IDE7XG4gIH07XG5cbiAgLyoqXHJcbiAgICogTWV0aG9kIHJldHVybnMgZWxlbWVudCB3aGF0IHdpbGwgYmUgbGlzdGVuIG1vdXNlIGV2ZW50c1xyXG4gICAqIEByZXR1cm4ge05vZGV9XHJcbiAgICovXG5cblxuICBWYW5pbGxhVGlsdC5wcm90b3R5cGUuZ2V0RWxlbWVudExpc3RlbmVyID0gZnVuY3Rpb24gZ2V0RWxlbWVudExpc3RlbmVyKCkge1xuICAgIGlmICh0aGlzLmZ1bGxQYWdlTGlzdGVuaW5nKSB7XG4gICAgICByZXR1cm4gd2luZG93LmRvY3VtZW50O1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgdGhpcy5zZXR0aW5nc1tcIm1vdXNlLWV2ZW50LWVsZW1lbnRcIl0gPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIHZhciBtb3VzZUV2ZW50RWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGhpcy5zZXR0aW5nc1tcIm1vdXNlLWV2ZW50LWVsZW1lbnRcIl0pO1xuXG4gICAgICBpZiAobW91c2VFdmVudEVsZW1lbnQpIHtcbiAgICAgICAgcmV0dXJuIG1vdXNlRXZlbnRFbGVtZW50O1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0aGlzLnNldHRpbmdzW1wibW91c2UtZXZlbnQtZWxlbWVudFwiXSBpbnN0YW5jZW9mIE5vZGUpIHtcbiAgICAgIHJldHVybiB0aGlzLnNldHRpbmdzW1wibW91c2UtZXZlbnQtZWxlbWVudFwiXTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5lbGVtZW50O1xuICB9O1xuXG4gIC8qKlxyXG4gICAqIE1ldGhvZCBzZXQgbGlzdGVuIG1ldGhvZHMgZm9yIHRoaXMuZWxlbWVudExpc3RlbmVyXHJcbiAgICogQHJldHVybiB7Tm9kZX1cclxuICAgKi9cblxuXG4gIFZhbmlsbGFUaWx0LnByb3RvdHlwZS5hZGRFdmVudExpc3RlbmVycyA9IGZ1bmN0aW9uIGFkZEV2ZW50TGlzdGVuZXJzKCkge1xuICAgIHRoaXMub25Nb3VzZUVudGVyQmluZCA9IHRoaXMub25Nb3VzZUVudGVyLmJpbmQodGhpcyk7XG4gICAgdGhpcy5vbk1vdXNlTW92ZUJpbmQgPSB0aGlzLm9uTW91c2VNb3ZlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5vbk1vdXNlTGVhdmVCaW5kID0gdGhpcy5vbk1vdXNlTGVhdmUuYmluZCh0aGlzKTtcbiAgICB0aGlzLm9uV2luZG93UmVzaXplQmluZCA9IHRoaXMub25XaW5kb3dSZXNpemUuYmluZCh0aGlzKTtcbiAgICB0aGlzLm9uRGV2aWNlT3JpZW50YXRpb25CaW5kID0gdGhpcy5vbkRldmljZU9yaWVudGF0aW9uLmJpbmQodGhpcyk7XG5cbiAgICB0aGlzLmVsZW1lbnRMaXN0ZW5lci5hZGRFdmVudExpc3RlbmVyKFwibW91c2VlbnRlclwiLCB0aGlzLm9uTW91c2VFbnRlckJpbmQpO1xuICAgIHRoaXMuZWxlbWVudExpc3RlbmVyLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWxlYXZlXCIsIHRoaXMub25Nb3VzZUxlYXZlQmluZCk7XG4gICAgdGhpcy5lbGVtZW50TGlzdGVuZXIuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCB0aGlzLm9uTW91c2VNb3ZlQmluZCk7XG5cbiAgICBpZiAodGhpcy5nbGFyZSB8fCB0aGlzLmZ1bGxQYWdlTGlzdGVuaW5nKSB7XG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCB0aGlzLm9uV2luZG93UmVzaXplQmluZCk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuZ3lyb3Njb3BlKSB7XG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImRldmljZW9yaWVudGF0aW9uXCIsIHRoaXMub25EZXZpY2VPcmllbnRhdGlvbkJpbmQpO1xuICAgIH1cbiAgfTtcblxuICAvKipcclxuICAgKiBNZXRob2QgcmVtb3ZlIGV2ZW50IGxpc3RlbmVycyBmcm9tIGN1cnJlbnQgdGhpcy5lbGVtZW50TGlzdGVuZXJcclxuICAgKi9cblxuXG4gIFZhbmlsbGFUaWx0LnByb3RvdHlwZS5yZW1vdmVFdmVudExpc3RlbmVycyA9IGZ1bmN0aW9uIHJlbW92ZUV2ZW50TGlzdGVuZXJzKCkge1xuICAgIHRoaXMuZWxlbWVudExpc3RlbmVyLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZWVudGVyXCIsIHRoaXMub25Nb3VzZUVudGVyQmluZCk7XG4gICAgdGhpcy5lbGVtZW50TGlzdGVuZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIiwgdGhpcy5vbk1vdXNlTGVhdmVCaW5kKTtcbiAgICB0aGlzLmVsZW1lbnRMaXN0ZW5lci5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIHRoaXMub25Nb3VzZU1vdmVCaW5kKTtcblxuICAgIGlmICh0aGlzLmd5cm9zY29wZSkge1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJkZXZpY2VvcmllbnRhdGlvblwiLCB0aGlzLm9uRGV2aWNlT3JpZW50YXRpb25CaW5kKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5nbGFyZSB8fCB0aGlzLmZ1bGxQYWdlTGlzdGVuaW5nKSB7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCB0aGlzLm9uV2luZG93UmVzaXplQmluZCk7XG4gICAgfVxuICB9O1xuXG4gIFZhbmlsbGFUaWx0LnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24gZGVzdHJveSgpIHtcbiAgICBjbGVhclRpbWVvdXQodGhpcy50cmFuc2l0aW9uVGltZW91dCk7XG4gICAgaWYgKHRoaXMudXBkYXRlQ2FsbCAhPT0gbnVsbCkge1xuICAgICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUodGhpcy51cGRhdGVDYWxsKTtcbiAgICB9XG5cbiAgICB0aGlzLmVsZW1lbnQuc3R5bGUud2lsbENoYW5nZSA9IFwiXCI7XG4gICAgdGhpcy5lbGVtZW50LnN0eWxlLnRyYW5zaXRpb24gPSBcIlwiO1xuICAgIHRoaXMuZWxlbWVudC5zdHlsZS50cmFuc2Zvcm0gPSBcIlwiO1xuICAgIHRoaXMucmVzZXRHbGFyZSgpO1xuXG4gICAgdGhpcy5yZW1vdmVFdmVudExpc3RlbmVycygpO1xuICAgIHRoaXMuZWxlbWVudC52YW5pbGxhVGlsdCA9IG51bGw7XG4gICAgZGVsZXRlIHRoaXMuZWxlbWVudC52YW5pbGxhVGlsdDtcblxuICAgIHRoaXMuZWxlbWVudCA9IG51bGw7XG4gIH07XG5cbiAgVmFuaWxsYVRpbHQucHJvdG90eXBlLm9uRGV2aWNlT3JpZW50YXRpb24gPSBmdW5jdGlvbiBvbkRldmljZU9yaWVudGF0aW9uKGV2ZW50KSB7XG4gICAgaWYgKGV2ZW50LmdhbW1hID09PSBudWxsIHx8IGV2ZW50LmJldGEgPT09IG51bGwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLnVwZGF0ZUVsZW1lbnRQb3NpdGlvbigpO1xuXG4gICAgaWYgKHRoaXMuZ3lyb3Njb3BlU2FtcGxlcyA+IDApIHtcbiAgICAgIHRoaXMubGFzdGdhbW1hemVybyA9IHRoaXMuZ2FtbWF6ZXJvO1xuICAgICAgdGhpcy5sYXN0YmV0YXplcm8gPSB0aGlzLmJldGF6ZXJvO1xuXG4gICAgICBpZiAodGhpcy5nYW1tYXplcm8gPT09IG51bGwpIHtcbiAgICAgICAgdGhpcy5nYW1tYXplcm8gPSBldmVudC5nYW1tYTtcbiAgICAgICAgdGhpcy5iZXRhemVybyA9IGV2ZW50LmJldGE7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmdhbW1hemVybyA9IChldmVudC5nYW1tYSArIHRoaXMubGFzdGdhbW1hemVybykgLyAyO1xuICAgICAgICB0aGlzLmJldGF6ZXJvID0gKGV2ZW50LmJldGEgKyB0aGlzLmxhc3RiZXRhemVybykgLyAyO1xuICAgICAgfVxuXG4gICAgICB0aGlzLmd5cm9zY29wZVNhbXBsZXMgLT0gMTtcbiAgICB9XG5cbiAgICB2YXIgdG90YWxBbmdsZVggPSB0aGlzLnNldHRpbmdzLmd5cm9zY29wZU1heEFuZ2xlWCAtIHRoaXMuc2V0dGluZ3MuZ3lyb3Njb3BlTWluQW5nbGVYO1xuICAgIHZhciB0b3RhbEFuZ2xlWSA9IHRoaXMuc2V0dGluZ3MuZ3lyb3Njb3BlTWF4QW5nbGVZIC0gdGhpcy5zZXR0aW5ncy5neXJvc2NvcGVNaW5BbmdsZVk7XG5cbiAgICB2YXIgZGVncmVlc1BlclBpeGVsWCA9IHRvdGFsQW5nbGVYIC8gdGhpcy53aWR0aDtcbiAgICB2YXIgZGVncmVlc1BlclBpeGVsWSA9IHRvdGFsQW5nbGVZIC8gdGhpcy5oZWlnaHQ7XG5cbiAgICB2YXIgYW5nbGVYID0gZXZlbnQuZ2FtbWEgLSAodGhpcy5zZXR0aW5ncy5neXJvc2NvcGVNaW5BbmdsZVggKyB0aGlzLmdhbW1hemVybyk7XG4gICAgdmFyIGFuZ2xlWSA9IGV2ZW50LmJldGEgLSAodGhpcy5zZXR0aW5ncy5neXJvc2NvcGVNaW5BbmdsZVkgKyB0aGlzLmJldGF6ZXJvKTtcblxuICAgIHZhciBwb3NYID0gYW5nbGVYIC8gZGVncmVlc1BlclBpeGVsWDtcbiAgICB2YXIgcG9zWSA9IGFuZ2xlWSAvIGRlZ3JlZXNQZXJQaXhlbFk7XG5cbiAgICBpZiAodGhpcy51cGRhdGVDYWxsICE9PSBudWxsKSB7XG4gICAgICBjYW5jZWxBbmltYXRpb25GcmFtZSh0aGlzLnVwZGF0ZUNhbGwpO1xuICAgIH1cblxuICAgIHRoaXMuZXZlbnQgPSB7XG4gICAgICBjbGllbnRYOiBwb3NYICsgdGhpcy5sZWZ0LFxuICAgICAgY2xpZW50WTogcG9zWSArIHRoaXMudG9wXG4gICAgfTtcblxuICAgIHRoaXMudXBkYXRlQ2FsbCA9IHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLnVwZGF0ZUJpbmQpO1xuICB9O1xuXG4gIFZhbmlsbGFUaWx0LnByb3RvdHlwZS5vbk1vdXNlRW50ZXIgPSBmdW5jdGlvbiBvbk1vdXNlRW50ZXIoKSB7XG4gICAgdGhpcy51cGRhdGVFbGVtZW50UG9zaXRpb24oKTtcbiAgICB0aGlzLmVsZW1lbnQuc3R5bGUud2lsbENoYW5nZSA9IFwidHJhbnNmb3JtXCI7XG4gICAgdGhpcy5zZXRUcmFuc2l0aW9uKCk7XG4gIH07XG5cbiAgVmFuaWxsYVRpbHQucHJvdG90eXBlLm9uTW91c2VNb3ZlID0gZnVuY3Rpb24gb25Nb3VzZU1vdmUoZXZlbnQpIHtcbiAgICBpZiAodGhpcy51cGRhdGVDYWxsICE9PSBudWxsKSB7XG4gICAgICBjYW5jZWxBbmltYXRpb25GcmFtZSh0aGlzLnVwZGF0ZUNhbGwpO1xuICAgIH1cblxuICAgIHRoaXMuZXZlbnQgPSBldmVudDtcbiAgICB0aGlzLnVwZGF0ZUNhbGwgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy51cGRhdGVCaW5kKTtcbiAgfTtcblxuICBWYW5pbGxhVGlsdC5wcm90b3R5cGUub25Nb3VzZUxlYXZlID0gZnVuY3Rpb24gb25Nb3VzZUxlYXZlKCkge1xuICAgIHRoaXMuc2V0VHJhbnNpdGlvbigpO1xuXG4gICAgaWYgKHRoaXMuc2V0dGluZ3MucmVzZXQpIHtcbiAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLnJlc2V0QmluZCk7XG4gICAgfVxuICB9O1xuXG4gIFZhbmlsbGFUaWx0LnByb3RvdHlwZS5yZXNldCA9IGZ1bmN0aW9uIHJlc2V0KCkge1xuICAgIHRoaXMub25Nb3VzZUVudGVyKCk7XG5cbiAgICBpZiAodGhpcy5mdWxsUGFnZUxpc3RlbmluZykge1xuICAgICAgdGhpcy5ldmVudCA9IHtcbiAgICAgICAgY2xpZW50WDogKHRoaXMuc2V0dGluZ3Muc3RhcnRYICsgdGhpcy5zZXR0aW5ncy5tYXgpIC8gKDIgKiB0aGlzLnNldHRpbmdzLm1heCkgKiB0aGlzLmNsaWVudFdpZHRoLFxuICAgICAgICBjbGllbnRZOiAodGhpcy5zZXR0aW5ncy5zdGFydFkgKyB0aGlzLnNldHRpbmdzLm1heCkgLyAoMiAqIHRoaXMuc2V0dGluZ3MubWF4KSAqIHRoaXMuY2xpZW50SGVpZ2h0XG4gICAgICB9O1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmV2ZW50ID0ge1xuICAgICAgICBjbGllbnRYOiB0aGlzLmxlZnQgKyAodGhpcy5zZXR0aW5ncy5zdGFydFggKyB0aGlzLnNldHRpbmdzLm1heCkgLyAoMiAqIHRoaXMuc2V0dGluZ3MubWF4KSAqIHRoaXMud2lkdGgsXG4gICAgICAgIGNsaWVudFk6IHRoaXMudG9wICsgKHRoaXMuc2V0dGluZ3Muc3RhcnRZICsgdGhpcy5zZXR0aW5ncy5tYXgpIC8gKDIgKiB0aGlzLnNldHRpbmdzLm1heCkgKiB0aGlzLmhlaWdodFxuICAgICAgfTtcbiAgICB9XG5cbiAgICB2YXIgYmFja3VwU2NhbGUgPSB0aGlzLnNldHRpbmdzLnNjYWxlO1xuICAgIHRoaXMuc2V0dGluZ3Muc2NhbGUgPSAxO1xuICAgIHRoaXMudXBkYXRlKCk7XG4gICAgdGhpcy5zZXR0aW5ncy5zY2FsZSA9IGJhY2t1cFNjYWxlO1xuICAgIHRoaXMucmVzZXRHbGFyZSgpO1xuICB9O1xuXG4gIFZhbmlsbGFUaWx0LnByb3RvdHlwZS5yZXNldEdsYXJlID0gZnVuY3Rpb24gcmVzZXRHbGFyZSgpIHtcbiAgICBpZiAodGhpcy5nbGFyZSkge1xuICAgICAgdGhpcy5nbGFyZUVsZW1lbnQuc3R5bGUudHJhbnNmb3JtID0gXCJyb3RhdGUoMTgwZGVnKSB0cmFuc2xhdGUoLTUwJSwgLTUwJSlcIjtcbiAgICAgIHRoaXMuZ2xhcmVFbGVtZW50LnN0eWxlLm9wYWNpdHkgPSBcIjBcIjtcbiAgICB9XG4gIH07XG5cbiAgVmFuaWxsYVRpbHQucHJvdG90eXBlLmdldFZhbHVlcyA9IGZ1bmN0aW9uIGdldFZhbHVlcygpIHtcbiAgICB2YXIgeCA9IHZvaWQgMCxcbiAgICAgICAgeSA9IHZvaWQgMDtcblxuICAgIGlmICh0aGlzLmZ1bGxQYWdlTGlzdGVuaW5nKSB7XG4gICAgICB4ID0gdGhpcy5ldmVudC5jbGllbnRYIC8gdGhpcy5jbGllbnRXaWR0aDtcbiAgICAgIHkgPSB0aGlzLmV2ZW50LmNsaWVudFkgLyB0aGlzLmNsaWVudEhlaWdodDtcbiAgICB9IGVsc2Uge1xuICAgICAgeCA9ICh0aGlzLmV2ZW50LmNsaWVudFggLSB0aGlzLmxlZnQpIC8gdGhpcy53aWR0aDtcbiAgICAgIHkgPSAodGhpcy5ldmVudC5jbGllbnRZIC0gdGhpcy50b3ApIC8gdGhpcy5oZWlnaHQ7XG4gICAgfVxuXG4gICAgeCA9IE1hdGgubWluKE1hdGgubWF4KHgsIDApLCAxKTtcbiAgICB5ID0gTWF0aC5taW4oTWF0aC5tYXgoeSwgMCksIDEpO1xuXG4gICAgdmFyIHRpbHRYID0gKHRoaXMucmV2ZXJzZSAqICh0aGlzLnNldHRpbmdzLm1heCAtIHggKiB0aGlzLnNldHRpbmdzLm1heCAqIDIpKS50b0ZpeGVkKDIpO1xuICAgIHZhciB0aWx0WSA9ICh0aGlzLnJldmVyc2UgKiAoeSAqIHRoaXMuc2V0dGluZ3MubWF4ICogMiAtIHRoaXMuc2V0dGluZ3MubWF4KSkudG9GaXhlZCgyKTtcbiAgICB2YXIgYW5nbGUgPSBNYXRoLmF0YW4yKHRoaXMuZXZlbnQuY2xpZW50WCAtICh0aGlzLmxlZnQgKyB0aGlzLndpZHRoIC8gMiksIC0odGhpcy5ldmVudC5jbGllbnRZIC0gKHRoaXMudG9wICsgdGhpcy5oZWlnaHQgLyAyKSkpICogKDE4MCAvIE1hdGguUEkpO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIHRpbHRYOiB0aWx0WCxcbiAgICAgIHRpbHRZOiB0aWx0WSxcbiAgICAgIHBlcmNlbnRhZ2VYOiB4ICogMTAwLFxuICAgICAgcGVyY2VudGFnZVk6IHkgKiAxMDAsXG4gICAgICBhbmdsZTogYW5nbGVcbiAgICB9O1xuICB9O1xuXG4gIFZhbmlsbGFUaWx0LnByb3RvdHlwZS51cGRhdGVFbGVtZW50UG9zaXRpb24gPSBmdW5jdGlvbiB1cGRhdGVFbGVtZW50UG9zaXRpb24oKSB7XG4gICAgdmFyIHJlY3QgPSB0aGlzLmVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cbiAgICB0aGlzLndpZHRoID0gdGhpcy5lbGVtZW50Lm9mZnNldFdpZHRoO1xuICAgIHRoaXMuaGVpZ2h0ID0gdGhpcy5lbGVtZW50Lm9mZnNldEhlaWdodDtcbiAgICB0aGlzLmxlZnQgPSByZWN0LmxlZnQ7XG4gICAgdGhpcy50b3AgPSByZWN0LnRvcDtcbiAgfTtcblxuICBWYW5pbGxhVGlsdC5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24gdXBkYXRlKCkge1xuICAgIHZhciB2YWx1ZXMgPSB0aGlzLmdldFZhbHVlcygpO1xuXG4gICAgdGhpcy5lbGVtZW50LnN0eWxlLnRyYW5zZm9ybSA9IFwicGVyc3BlY3RpdmUoXCIgKyB0aGlzLnNldHRpbmdzLnBlcnNwZWN0aXZlICsgXCJweCkgXCIgKyBcInJvdGF0ZVgoXCIgKyAodGhpcy5zZXR0aW5ncy5heGlzID09PSBcInhcIiA/IDAgOiB2YWx1ZXMudGlsdFkpICsgXCJkZWcpIFwiICsgXCJyb3RhdGVZKFwiICsgKHRoaXMuc2V0dGluZ3MuYXhpcyA9PT0gXCJ5XCIgPyAwIDogdmFsdWVzLnRpbHRYKSArIFwiZGVnKSBcIiArIFwic2NhbGUzZChcIiArIHRoaXMuc2V0dGluZ3Muc2NhbGUgKyBcIiwgXCIgKyB0aGlzLnNldHRpbmdzLnNjYWxlICsgXCIsIFwiICsgdGhpcy5zZXR0aW5ncy5zY2FsZSArIFwiKVwiO1xuXG4gICAgaWYgKHRoaXMuZ2xhcmUpIHtcbiAgICAgIHRoaXMuZ2xhcmVFbGVtZW50LnN0eWxlLnRyYW5zZm9ybSA9IFwicm90YXRlKFwiICsgdmFsdWVzLmFuZ2xlICsgXCJkZWcpIHRyYW5zbGF0ZSgtNTAlLCAtNTAlKVwiO1xuICAgICAgdGhpcy5nbGFyZUVsZW1lbnQuc3R5bGUub3BhY2l0eSA9IFwiXCIgKyB2YWx1ZXMucGVyY2VudGFnZVkgKiB0aGlzLnNldHRpbmdzW1wibWF4LWdsYXJlXCJdIC8gMTAwO1xuICAgIH1cblxuICAgIHRoaXMuZWxlbWVudC5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudChcInRpbHRDaGFuZ2VcIiwge1xuICAgICAgXCJkZXRhaWxcIjogdmFsdWVzXG4gICAgfSkpO1xuXG4gICAgdGhpcy51cGRhdGVDYWxsID0gbnVsbDtcbiAgfTtcblxuICAvKipcclxuICAgKiBBcHBlbmRzIHRoZSBnbGFyZSBlbGVtZW50IChpZiBnbGFyZVByZXJlbmRlciBlcXVhbHMgZmFsc2UpXHJcbiAgICogYW5kIHNldHMgdGhlIGRlZmF1bHQgc3R5bGVcclxuICAgKi9cblxuXG4gIFZhbmlsbGFUaWx0LnByb3RvdHlwZS5wcmVwYXJlR2xhcmUgPSBmdW5jdGlvbiBwcmVwYXJlR2xhcmUoKSB7XG4gICAgLy8gSWYgb3B0aW9uIHByZS1yZW5kZXIgaXMgZW5hYmxlZCB3ZSBhc3N1bWUgYWxsIGh0bWwvY3NzIGlzIHByZXNlbnQgZm9yIGFuIG9wdGltYWwgZ2xhcmUgZWZmZWN0LlxuICAgIGlmICghdGhpcy5nbGFyZVByZXJlbmRlcikge1xuICAgICAgLy8gQ3JlYXRlIGdsYXJlIGVsZW1lbnRcbiAgICAgIHZhciBqc1RpbHRHbGFyZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBqc1RpbHRHbGFyZS5jbGFzc0xpc3QuYWRkKFwianMtdGlsdC1nbGFyZVwiKTtcblxuICAgICAgdmFyIGpzVGlsdEdsYXJlSW5uZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAganNUaWx0R2xhcmVJbm5lci5jbGFzc0xpc3QuYWRkKFwianMtdGlsdC1nbGFyZS1pbm5lclwiKTtcblxuICAgICAganNUaWx0R2xhcmUuYXBwZW5kQ2hpbGQoanNUaWx0R2xhcmVJbm5lcik7XG4gICAgICB0aGlzLmVsZW1lbnQuYXBwZW5kQ2hpbGQoanNUaWx0R2xhcmUpO1xuICAgIH1cblxuICAgIHRoaXMuZ2xhcmVFbGVtZW50V3JhcHBlciA9IHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLmpzLXRpbHQtZ2xhcmVcIik7XG4gICAgdGhpcy5nbGFyZUVsZW1lbnQgPSB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5qcy10aWx0LWdsYXJlLWlubmVyXCIpO1xuXG4gICAgaWYgKHRoaXMuZ2xhcmVQcmVyZW5kZXIpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBPYmplY3QuYXNzaWduKHRoaXMuZ2xhcmVFbGVtZW50V3JhcHBlci5zdHlsZSwge1xuICAgICAgXCJwb3NpdGlvblwiOiBcImFic29sdXRlXCIsXG4gICAgICBcInRvcFwiOiBcIjBcIixcbiAgICAgIFwibGVmdFwiOiBcIjBcIixcbiAgICAgIFwid2lkdGhcIjogXCIxMDAlXCIsXG4gICAgICBcImhlaWdodFwiOiBcIjEwMCVcIixcbiAgICAgIFwib3ZlcmZsb3dcIjogXCJoaWRkZW5cIixcbiAgICAgIFwicG9pbnRlci1ldmVudHNcIjogXCJub25lXCIsXG4gICAgICBcImJvcmRlci1yYWRpdXNcIjogXCJpbmhlcml0XCJcbiAgICB9KTtcblxuICAgIE9iamVjdC5hc3NpZ24odGhpcy5nbGFyZUVsZW1lbnQuc3R5bGUsIHtcbiAgICAgIFwicG9zaXRpb25cIjogXCJhYnNvbHV0ZVwiLFxuICAgICAgXCJ0b3BcIjogXCI1MCVcIixcbiAgICAgIFwibGVmdFwiOiBcIjUwJVwiLFxuICAgICAgXCJwb2ludGVyLWV2ZW50c1wiOiBcIm5vbmVcIixcbiAgICAgIFwiYmFja2dyb3VuZC1pbWFnZVwiOiBcImxpbmVhci1ncmFkaWVudCgwZGVnLCByZ2JhKDI1NSwyNTUsMjU1LDApIDAlLCByZ2JhKDI1NSwyNTUsMjU1LDEpIDEwMCUpXCIsXG4gICAgICBcInRyYW5zZm9ybVwiOiBcInJvdGF0ZSgxODBkZWcpIHRyYW5zbGF0ZSgtNTAlLCAtNTAlKVwiLFxuICAgICAgXCJ0cmFuc2Zvcm0tb3JpZ2luXCI6IFwiMCUgMCVcIixcbiAgICAgIFwib3BhY2l0eVwiOiBcIjBcIlxuICAgIH0pO1xuXG4gICAgdGhpcy51cGRhdGVHbGFyZVNpemUoKTtcbiAgfTtcblxuICBWYW5pbGxhVGlsdC5wcm90b3R5cGUudXBkYXRlR2xhcmVTaXplID0gZnVuY3Rpb24gdXBkYXRlR2xhcmVTaXplKCkge1xuICAgIGlmICh0aGlzLmdsYXJlKSB7XG4gICAgICB2YXIgZ2xhcmVTaXplID0gKHRoaXMuZWxlbWVudC5vZmZzZXRXaWR0aCA+IHRoaXMuZWxlbWVudC5vZmZzZXRIZWlnaHQgPyB0aGlzLmVsZW1lbnQub2Zmc2V0V2lkdGggOiB0aGlzLmVsZW1lbnQub2Zmc2V0SGVpZ2h0KSAqIDI7XG5cbiAgICAgIE9iamVjdC5hc3NpZ24odGhpcy5nbGFyZUVsZW1lbnQuc3R5bGUsIHtcbiAgICAgICAgXCJ3aWR0aFwiOiBnbGFyZVNpemUgKyBcInB4XCIsXG4gICAgICAgIFwiaGVpZ2h0XCI6IGdsYXJlU2l6ZSArIFwicHhcIlxuICAgICAgfSk7XG4gICAgfVxuICB9O1xuXG4gIFZhbmlsbGFUaWx0LnByb3RvdHlwZS51cGRhdGVDbGllbnRTaXplID0gZnVuY3Rpb24gdXBkYXRlQ2xpZW50U2l6ZSgpIHtcbiAgICB0aGlzLmNsaWVudFdpZHRoID0gd2luZG93LmlubmVyV2lkdGggfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoIHx8IGRvY3VtZW50LmJvZHkuY2xpZW50V2lkdGg7XG5cbiAgICB0aGlzLmNsaWVudEhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0IHx8IGRvY3VtZW50LmJvZHkuY2xpZW50SGVpZ2h0O1xuICB9O1xuXG4gIFZhbmlsbGFUaWx0LnByb3RvdHlwZS5vbldpbmRvd1Jlc2l6ZSA9IGZ1bmN0aW9uIG9uV2luZG93UmVzaXplKCkge1xuICAgIHRoaXMudXBkYXRlR2xhcmVTaXplKCk7XG4gICAgdGhpcy51cGRhdGVDbGllbnRTaXplKCk7XG4gIH07XG5cbiAgVmFuaWxsYVRpbHQucHJvdG90eXBlLnNldFRyYW5zaXRpb24gPSBmdW5jdGlvbiBzZXRUcmFuc2l0aW9uKCkge1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICBjbGVhclRpbWVvdXQodGhpcy50cmFuc2l0aW9uVGltZW91dCk7XG4gICAgdGhpcy5lbGVtZW50LnN0eWxlLnRyYW5zaXRpb24gPSB0aGlzLnNldHRpbmdzLnNwZWVkICsgXCJtcyBcIiArIHRoaXMuc2V0dGluZ3MuZWFzaW5nO1xuICAgIGlmICh0aGlzLmdsYXJlKSB0aGlzLmdsYXJlRWxlbWVudC5zdHlsZS50cmFuc2l0aW9uID0gXCJvcGFjaXR5IFwiICsgdGhpcy5zZXR0aW5ncy5zcGVlZCArIFwibXMgXCIgKyB0aGlzLnNldHRpbmdzLmVhc2luZztcblxuICAgIHRoaXMudHJhbnNpdGlvblRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgIF90aGlzLmVsZW1lbnQuc3R5bGUudHJhbnNpdGlvbiA9IFwiXCI7XG4gICAgICBpZiAoX3RoaXMuZ2xhcmUpIHtcbiAgICAgICAgX3RoaXMuZ2xhcmVFbGVtZW50LnN0eWxlLnRyYW5zaXRpb24gPSBcIlwiO1xuICAgICAgfVxuICAgIH0sIHRoaXMuc2V0dGluZ3Muc3BlZWQpO1xuICB9O1xuXG4gIC8qKlxyXG4gICAqIE1ldGhvZCByZXR1cm4gcGF0Y2hlZCBzZXR0aW5ncyBvZiBpbnN0YW5jZVxyXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gc2V0dGluZ3MucmV2ZXJzZSAtIHJldmVyc2UgdGhlIHRpbHQgZGlyZWN0aW9uXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IHNldHRpbmdzLm1heCAtIG1heCB0aWx0IHJvdGF0aW9uIChkZWdyZWVzKVxyXG4gICAqIEBwYXJhbSB7c3RhcnRYfSBzZXR0aW5ncy5zdGFydFggLSB0aGUgc3RhcnRpbmcgdGlsdCBvbiB0aGUgWCBheGlzLCBpbiBkZWdyZWVzLiBEZWZhdWx0OiAwXHJcbiAgICogQHBhcmFtIHtzdGFydFl9IHNldHRpbmdzLnN0YXJ0WSAtIHRoZSBzdGFydGluZyB0aWx0IG9uIHRoZSBZIGF4aXMsIGluIGRlZ3JlZXMuIERlZmF1bHQ6IDBcclxuICAgKiBAcGFyYW0ge251bWJlcn0gc2V0dGluZ3MucGVyc3BlY3RpdmUgLSBUcmFuc2Zvcm0gcGVyc3BlY3RpdmUsIHRoZSBsb3dlciB0aGUgbW9yZSBleHRyZW1lIHRoZSB0aWx0IGdldHNcclxuICAgKiBAcGFyYW0ge3N0cmluZ30gc2V0dGluZ3MuZWFzaW5nIC0gRWFzaW5nIG9uIGVudGVyL2V4aXRcclxuICAgKiBAcGFyYW0ge251bWJlcn0gc2V0dGluZ3Muc2NhbGUgLSAyID0gMjAwJSwgMS41ID0gMTUwJSwgZXRjLi5cclxuICAgKiBAcGFyYW0ge251bWJlcn0gc2V0dGluZ3Muc3BlZWQgLSBTcGVlZCBvZiB0aGUgZW50ZXIvZXhpdCB0cmFuc2l0aW9uXHJcbiAgICogQHBhcmFtIHtib29sZWFufSBzZXR0aW5ncy50cmFuc2l0aW9uIC0gU2V0IGEgdHJhbnNpdGlvbiBvbiBlbnRlci9leGl0XHJcbiAgICogQHBhcmFtIHtzdHJpbmd8bnVsbH0gc2V0dGluZ3MuYXhpcyAtIFdoYXQgYXhpcyBzaG91bGQgYmUgZW5hYmxlZC4gQ2FuIGJlIFwieFwiIG9yIFwieVwiXHJcbiAgICogQHBhcmFtIHtib29sZWFufSBzZXR0aW5ncy5nbGFyZSAtIGlmIGl0IHNob3VsZCBoYXZlIGEgXCJnbGFyZVwiIGVmZmVjdFxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBzZXR0aW5ncy5tYXgtZ2xhcmUgLSB0aGUgbWF4aW11bSBcImdsYXJlXCIgb3BhY2l0eSAoMSA9IDEwMCUsIDAuNSA9IDUwJSlcclxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IHNldHRpbmdzLmdsYXJlLXByZXJlbmRlciAtIGZhbHNlID0gVmFuaWxsYVRpbHQgY3JlYXRlcyB0aGUgZ2xhcmUgZWxlbWVudHMgZm9yIHlvdSwgb3RoZXJ3aXNlXHJcbiAgICogQHBhcmFtIHtib29sZWFufSBzZXR0aW5ncy5mdWxsLXBhZ2UtbGlzdGVuaW5nIC0gSWYgdHJ1ZSwgcGFyYWxsYXggZWZmZWN0IHdpbGwgbGlzdGVuIHRvIG1vdXNlIG1vdmUgZXZlbnRzIG9uIHRoZSB3aG9sZSBkb2N1bWVudCwgbm90IG9ubHkgdGhlIHNlbGVjdGVkIGVsZW1lbnRcclxuICAgKiBAcGFyYW0ge3N0cmluZ3xvYmplY3R9IHNldHRpbmdzLm1vdXNlLWV2ZW50LWVsZW1lbnQgLSBTdHJpbmcgc2VsZWN0b3Igb3IgbGluayB0byBIVE1MLWVsZW1lbnQgd2hhdCB3aWxsIGJlIGxpc3RlbiBtb3VzZSBldmVudHNcclxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IHNldHRpbmdzLnJlc2V0IC0gZmFsc2UgPSBJZiB0aGUgdGlsdCBlZmZlY3QgaGFzIHRvIGJlIHJlc2V0IG9uIGV4aXRcclxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IHNldHRpbmdzLnJlc2V0LXRvLXN0YXJ0IC0gdHJ1ZSA9IE9uIHJlc2V0IGV2ZW50IChtb3VzZSBsZWF2ZSkgd2lsbCByZXR1cm4gdG8gaW5pdGlhbCBzdGFydCBhbmdsZSAoaWYgc3RhcnRYIG9yIHN0YXJ0WSBpcyBzZXQpXHJcbiAgICogQHBhcmFtIHtneXJvc2NvcGV9IHNldHRpbmdzLmd5cm9zY29wZSAtIEVuYWJsZSB0aWx0aW5nIGJ5IGRldmljZW9yaWVudGF0aW9uIGV2ZW50c1xyXG4gICAqIEBwYXJhbSB7Z3lyb3Njb3BlU2Vuc2l0aXZpdHl9IHNldHRpbmdzLmd5cm9zY29wZVNlbnNpdGl2aXR5IC0gQmV0d2VlbiAwIGFuZCAxIC0gVGhlIGFuZ2xlIGF0IHdoaWNoIG1heCB0aWx0IHBvc2l0aW9uIGlzIHJlYWNoZWQuIDEgPSA5MGRlZywgMC41ID0gNDVkZWcsIGV0Yy4uXHJcbiAgICogQHBhcmFtIHtneXJvc2NvcGVTYW1wbGVzfSBzZXR0aW5ncy5neXJvc2NvcGVTYW1wbGVzIC0gSG93IG1hbnkgZ3lyb3Njb3BlIG1vdmVzIHRvIGRlY2lkZSB0aGUgc3RhcnRpbmcgcG9zaXRpb24uXHJcbiAgICovXG5cblxuICBWYW5pbGxhVGlsdC5wcm90b3R5cGUuZXh0ZW5kU2V0dGluZ3MgPSBmdW5jdGlvbiBleHRlbmRTZXR0aW5ncyhzZXR0aW5ncykge1xuICAgIHZhciBkZWZhdWx0U2V0dGluZ3MgPSB7XG4gICAgICByZXZlcnNlOiBmYWxzZSxcbiAgICAgIG1heDogMTUsXG4gICAgICBzdGFydFg6IDAsXG4gICAgICBzdGFydFk6IDAsXG4gICAgICBwZXJzcGVjdGl2ZTogMTAwMCxcbiAgICAgIGVhc2luZzogXCJjdWJpYy1iZXppZXIoLjAzLC45OCwuNTIsLjk5KVwiLFxuICAgICAgc2NhbGU6IDEsXG4gICAgICBzcGVlZDogMzAwLFxuICAgICAgdHJhbnNpdGlvbjogdHJ1ZSxcbiAgICAgIGF4aXM6IG51bGwsXG4gICAgICBnbGFyZTogZmFsc2UsXG4gICAgICBcIm1heC1nbGFyZVwiOiAxLFxuICAgICAgXCJnbGFyZS1wcmVyZW5kZXJcIjogZmFsc2UsXG4gICAgICBcImZ1bGwtcGFnZS1saXN0ZW5pbmdcIjogZmFsc2UsXG4gICAgICBcIm1vdXNlLWV2ZW50LWVsZW1lbnRcIjogbnVsbCxcbiAgICAgIHJlc2V0OiB0cnVlLFxuICAgICAgXCJyZXNldC10by1zdGFydFwiOiB0cnVlLFxuICAgICAgZ3lyb3Njb3BlOiB0cnVlLFxuICAgICAgZ3lyb3Njb3BlTWluQW5nbGVYOiAtNDUsXG4gICAgICBneXJvc2NvcGVNYXhBbmdsZVg6IDQ1LFxuICAgICAgZ3lyb3Njb3BlTWluQW5nbGVZOiAtNDUsXG4gICAgICBneXJvc2NvcGVNYXhBbmdsZVk6IDQ1LFxuICAgICAgZ3lyb3Njb3BlU2FtcGxlczogMTBcbiAgICB9O1xuXG4gICAgdmFyIG5ld1NldHRpbmdzID0ge307XG4gICAgZm9yICh2YXIgcHJvcGVydHkgaW4gZGVmYXVsdFNldHRpbmdzKSB7XG4gICAgICBpZiAocHJvcGVydHkgaW4gc2V0dGluZ3MpIHtcbiAgICAgICAgbmV3U2V0dGluZ3NbcHJvcGVydHldID0gc2V0dGluZ3NbcHJvcGVydHldO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLmVsZW1lbnQuaGFzQXR0cmlidXRlKFwiZGF0YS10aWx0LVwiICsgcHJvcGVydHkpKSB7XG4gICAgICAgIHZhciBhdHRyaWJ1dGUgPSB0aGlzLmVsZW1lbnQuZ2V0QXR0cmlidXRlKFwiZGF0YS10aWx0LVwiICsgcHJvcGVydHkpO1xuICAgICAgICB0cnkge1xuICAgICAgICAgIG5ld1NldHRpbmdzW3Byb3BlcnR5XSA9IEpTT04ucGFyc2UoYXR0cmlidXRlKTtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIG5ld1NldHRpbmdzW3Byb3BlcnR5XSA9IGF0dHJpYnV0ZTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbmV3U2V0dGluZ3NbcHJvcGVydHldID0gZGVmYXVsdFNldHRpbmdzW3Byb3BlcnR5XTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbmV3U2V0dGluZ3M7XG4gIH07XG5cbiAgVmFuaWxsYVRpbHQuaW5pdCA9IGZ1bmN0aW9uIGluaXQoZWxlbWVudHMsIHNldHRpbmdzKSB7XG4gICAgaWYgKGVsZW1lbnRzIGluc3RhbmNlb2YgTm9kZSkge1xuICAgICAgZWxlbWVudHMgPSBbZWxlbWVudHNdO1xuICAgIH1cblxuICAgIGlmIChlbGVtZW50cyBpbnN0YW5jZW9mIE5vZGVMaXN0KSB7XG4gICAgICBlbGVtZW50cyA9IFtdLnNsaWNlLmNhbGwoZWxlbWVudHMpO1xuICAgIH1cblxuICAgIGlmICghKGVsZW1lbnRzIGluc3RhbmNlb2YgQXJyYXkpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZWxlbWVudHMuZm9yRWFjaChmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgICAgaWYgKCEoXCJ2YW5pbGxhVGlsdFwiIGluIGVsZW1lbnQpKSB7XG4gICAgICAgIGVsZW1lbnQudmFuaWxsYVRpbHQgPSBuZXcgVmFuaWxsYVRpbHQoZWxlbWVudCwgc2V0dGluZ3MpO1xuICAgICAgfVxuICAgIH0pO1xuICB9O1xuXG4gIHJldHVybiBWYW5pbGxhVGlsdDtcbn0oKTtcblxuaWYgKHR5cGVvZiBkb2N1bWVudCAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAvKiBleHBvc2UgdGhlIGNsYXNzIHRvIHdpbmRvdyAqL1xuICB3aW5kb3cuVmFuaWxsYVRpbHQgPSBWYW5pbGxhVGlsdDtcblxuICAvKipcclxuICAgKiBBdXRvIGxvYWRcclxuICAgKi9cbiAgVmFuaWxsYVRpbHQuaW5pdChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiW2RhdGEtdGlsdF1cIikpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFZhbmlsbGFUaWx0O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgZm9yRWFjaCA9IHJlcXVpcmUoJ2Zvci1lYWNoJyk7XG52YXIgYXZhaWxhYmxlVHlwZWRBcnJheXMgPSByZXF1aXJlKCdhdmFpbGFibGUtdHlwZWQtYXJyYXlzJyk7XG52YXIgY2FsbEJvdW5kID0gcmVxdWlyZSgnY2FsbC1iaW5kL2NhbGxCb3VuZCcpO1xudmFyIGdPUEQgPSByZXF1aXJlKCdnb3BkJyk7XG5cbnZhciAkdG9TdHJpbmcgPSBjYWxsQm91bmQoJ09iamVjdC5wcm90b3R5cGUudG9TdHJpbmcnKTtcbnZhciBoYXNUb1N0cmluZ1RhZyA9IHJlcXVpcmUoJ2hhcy10b3N0cmluZ3RhZy9zaGFtcycpKCk7XG5cbnZhciBnID0gdHlwZW9mIGdsb2JhbFRoaXMgPT09ICd1bmRlZmluZWQnID8gZ2xvYmFsIDogZ2xvYmFsVGhpcztcbnZhciB0eXBlZEFycmF5cyA9IGF2YWlsYWJsZVR5cGVkQXJyYXlzKCk7XG5cbnZhciAkc2xpY2UgPSBjYWxsQm91bmQoJ1N0cmluZy5wcm90b3R5cGUuc2xpY2UnKTtcbnZhciB0b1N0clRhZ3MgPSB7fTtcbnZhciBnZXRQcm90b3R5cGVPZiA9IE9iamVjdC5nZXRQcm90b3R5cGVPZjsgLy8gcmVxdWlyZSgnZ2V0cHJvdG90eXBlb2YnKTtcbmlmIChoYXNUb1N0cmluZ1RhZyAmJiBnT1BEICYmIGdldFByb3RvdHlwZU9mKSB7XG5cdGZvckVhY2godHlwZWRBcnJheXMsIGZ1bmN0aW9uICh0eXBlZEFycmF5KSB7XG5cdFx0aWYgKHR5cGVvZiBnW3R5cGVkQXJyYXldID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0XHR2YXIgYXJyID0gbmV3IGdbdHlwZWRBcnJheV0oKTtcblx0XHRcdGlmIChTeW1ib2wudG9TdHJpbmdUYWcgaW4gYXJyKSB7XG5cdFx0XHRcdHZhciBwcm90byA9IGdldFByb3RvdHlwZU9mKGFycik7XG5cdFx0XHRcdHZhciBkZXNjcmlwdG9yID0gZ09QRChwcm90bywgU3ltYm9sLnRvU3RyaW5nVGFnKTtcblx0XHRcdFx0aWYgKCFkZXNjcmlwdG9yKSB7XG5cdFx0XHRcdFx0dmFyIHN1cGVyUHJvdG8gPSBnZXRQcm90b3R5cGVPZihwcm90byk7XG5cdFx0XHRcdFx0ZGVzY3JpcHRvciA9IGdPUEQoc3VwZXJQcm90bywgU3ltYm9sLnRvU3RyaW5nVGFnKTtcblx0XHRcdFx0fVxuXHRcdFx0XHR0b1N0clRhZ3NbdHlwZWRBcnJheV0gPSBkZXNjcmlwdG9yLmdldDtcblx0XHRcdH1cblx0XHR9XG5cdH0pO1xufVxuXG52YXIgdHJ5VHlwZWRBcnJheXMgPSBmdW5jdGlvbiB0cnlBbGxUeXBlZEFycmF5cyh2YWx1ZSkge1xuXHR2YXIgZm91bmROYW1lID0gZmFsc2U7XG5cdGZvckVhY2godG9TdHJUYWdzLCBmdW5jdGlvbiAoZ2V0dGVyLCB0eXBlZEFycmF5KSB7XG5cdFx0aWYgKCFmb3VuZE5hbWUpIHtcblx0XHRcdHRyeSB7XG5cdFx0XHRcdHZhciBuYW1lID0gZ2V0dGVyLmNhbGwodmFsdWUpO1xuXHRcdFx0XHRpZiAobmFtZSA9PT0gdHlwZWRBcnJheSkge1xuXHRcdFx0XHRcdGZvdW5kTmFtZSA9IG5hbWU7XG5cdFx0XHRcdH1cblx0XHRcdH0gY2F0Y2ggKGUpIHt9XG5cdFx0fVxuXHR9KTtcblx0cmV0dXJuIGZvdW5kTmFtZTtcbn07XG5cbnZhciBpc1R5cGVkQXJyYXkgPSByZXF1aXJlKCdpcy10eXBlZC1hcnJheScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHdoaWNoVHlwZWRBcnJheSh2YWx1ZSkge1xuXHRpZiAoIWlzVHlwZWRBcnJheSh2YWx1ZSkpIHsgcmV0dXJuIGZhbHNlOyB9XG5cdGlmICghaGFzVG9TdHJpbmdUYWcgfHwgIShTeW1ib2wudG9TdHJpbmdUYWcgaW4gdmFsdWUpKSB7IHJldHVybiAkc2xpY2UoJHRvU3RyaW5nKHZhbHVlKSwgOCwgLTEpOyB9XG5cdHJldHVybiB0cnlUeXBlZEFycmF5cyh2YWx1ZSk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgcG9zc2libGVOYW1lcyA9IFtcblx0J0JpZ0ludDY0QXJyYXknLFxuXHQnQmlnVWludDY0QXJyYXknLFxuXHQnRmxvYXQzMkFycmF5Jyxcblx0J0Zsb2F0NjRBcnJheScsXG5cdCdJbnQxNkFycmF5Jyxcblx0J0ludDMyQXJyYXknLFxuXHQnSW50OEFycmF5Jyxcblx0J1VpbnQxNkFycmF5Jyxcblx0J1VpbnQzMkFycmF5Jyxcblx0J1VpbnQ4QXJyYXknLFxuXHQnVWludDhDbGFtcGVkQXJyYXknXG5dO1xuXG52YXIgZyA9IHR5cGVvZiBnbG9iYWxUaGlzID09PSAndW5kZWZpbmVkJyA/IGdsb2JhbCA6IGdsb2JhbFRoaXM7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gYXZhaWxhYmxlVHlwZWRBcnJheXMoKSB7XG5cdHZhciBvdXQgPSBbXTtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBwb3NzaWJsZU5hbWVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0aWYgKHR5cGVvZiBnW3Bvc3NpYmxlTmFtZXNbaV1dID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0XHRvdXRbb3V0Lmxlbmd0aF0gPSBwb3NzaWJsZU5hbWVzW2ldO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gb3V0O1xufTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBWYW5pbGxhVGlsdCBmcm9tICd2YW5pbGxhLXRpbHQnXHJcblxyXG52YXIgdWEgPSB3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudDtcclxudmFyIG1zaWUgPSB1YS5pbmRleE9mKFwiTVNJRSBcIik7XHJcbnZhciBpc01vYmlsZSA9IHtcclxuXHRBbmRyb2lkOiBmdW5jdGlvbiAoKSB7XHJcblx0XHRyZXR1cm4gbmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCgvQW5kcm9pZC9pKTtcclxuXHR9LCBCbGFja0JlcnJ5OiBmdW5jdGlvbiAoKSB7XHJcblx0XHRyZXR1cm4gbmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCgvQmxhY2tCZXJyeS9pKTtcclxuXHR9LCBpT1M6IGZ1bmN0aW9uICgpIHtcclxuXHRcdHJldHVybiBuYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKC9pUGhvbmV8aVBhZHxpUG9kL2kpO1xyXG5cdH0sIE9wZXJhOiBmdW5jdGlvbiAoKSB7XHJcblx0XHRyZXR1cm4gbmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCgvT3BlcmEgTWluaS9pKTtcclxuXHR9LCBXaW5kb3dzOiBmdW5jdGlvbiAoKSB7XHJcblx0XHRyZXR1cm4gbmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCgvSUVNb2JpbGUvaSk7XHJcblx0fSwgYW55OiBmdW5jdGlvbiAoKSB7XHJcblx0XHRyZXR1cm4gKGlzTW9iaWxlLkFuZHJvaWQoKSB8fCBpc01vYmlsZS5CbGFja0JlcnJ5KCkgfHwgaXNNb2JpbGUuaU9TKCkgfHwgaXNNb2JpbGUuT3BlcmEoKSB8fCBpc01vYmlsZS5XaW5kb3dzKCkpO1xyXG5cdH1cclxufTtcclxuXHJcbmZ1bmN0aW9uIHZhbmlsbGFUaWx0KGl0ZW0sIG1heCwgc3BlZWQpIHtcclxuXHRsZXQgaXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGl0ZW0pXHJcblx0VmFuaWxsYVRpbHQuaW5pdCgoaXRlbXMpLCB7bWF4OiBtYXgsIHNwZWVkOiBzcGVlZH0pO1xyXG59XHJcblxyXG52YW5pbGxhVGlsdCgnLmNhcmRzX19pdGVtJywgNSwgOTAwKTtcclxudmFuaWxsYVRpbHQoJy5jb3N0X19zbG90JywgNSwgOTAwKTtcclxudmFuaWxsYVRpbHQoJy5iMF9faXRlbScsIDUsIDkwMCk7XHJcbnZhbmlsbGFUaWx0KCcubWFzdGVyc19faXRlbScsIDUsIDkwMCk7XHJcbnZhbmlsbGFUaWx0KCcuaG93X19pdGVtJywgNSwgOTAwKTtcclxudmFuaWxsYVRpbHQoJy5ibG9jazJfX2l0ZW0nLCA1LCA5MDApO1xyXG52YW5pbGxhVGlsdCgnLnNlcnZpY2VzLWJsb2NrMl9faXRlbScsIDUsIDkwMCk7XHJcbnZhbmlsbGFUaWx0KCcuc2VydmljZS1ibG9jazZfX2l0ZW0nLCA1LCA5MDApO1xyXG5cclxuaW1wb3J0IHtGYW5jeWJveH0gZnJvbSBcIkBmYW5jeWFwcHMvdWlcIjtcclxuXHJcbkZhbmN5Ym94LmJpbmQoXCJbZGF0YS1mYW5jeWJveF1cIiwge30pO1xyXG5cclxuJCgnLnNlcnZpY2UtYmxvY2s2X19saW5rJykucGFyYWxsYXgoe1xyXG5cdG1vdXNlcG9ydDogJCgnLnNlcnZpY2UtYmxvY2s2X19pdGVtJyksXHJcblx0ZGVjYXk6IDBcclxufSk7XHJcblxyXG5uZXcgU3dpcGVyKCcuc2VydmljZXMtYmxvY2s0X19zbGlkZXInLCB7XHJcblx0bmF2aWdhdGlvbjoge1xyXG5cdFx0bmV4dEVsOiAnLmJ1dHRvbi1uZXh0JyxcclxuXHRcdHByZXZFbDogJy5idXR0b24tcHJldicsXHJcblx0fSxcclxuXHRwYWdpbmF0aW9uOiB7XHJcblx0XHRlbDpcclxuXHRcdFx0Jy5zd2lwZXItcGFnaW5hdGlvbicsXHJcblx0XHRjbGlja2FibGU6IHRydWUsXHJcblx0fSxcclxuXHRicmVha3BvaW50czoge1xyXG5cdFx0MzIwOiB7XHJcblx0XHRcdC8vIHNsaWRlc1BlclZpZXc6IDEsXHJcblx0XHRcdHNwYWNlQmV0d2VlbjogMzAsXHJcblx0XHRcdHNsaWRlc1BlclZpZXc6IFwiYXV0b1wiLFxyXG5cdFx0XHRjZW50ZXJlZFNsaWRlczogdHJ1ZSxcclxuXHRcdH0sXHJcblx0XHQ2MDA6IHtcclxuXHRcdFx0c2xpZGVzUGVyVmlldzogMixcclxuXHRcdFx0c3BhY2VCZXR3ZWVuOiAxMFxyXG5cdFx0fSxcclxuXHRcdDEwMjQ6IHtcclxuXHRcdFx0c2xpZGVzUGVyVmlldzogMyxcclxuXHRcdFx0c3BhY2VCZXR3ZWVuOiAzMCxcclxuXHRcdH1cclxuXHR9XHJcbn0pO1xyXG5cclxubmV3IFN3aXBlcignLnNlcnZpY2VzLWJsb2NrNV9fc2xpZGVyJywge1xyXG5cdG5hdmlnYXRpb246IHtcclxuXHRcdG5leHRFbDogJy5idXR0b24tbmV4dCcsXHJcblx0XHRwcmV2RWw6ICcuYnV0dG9uLXByZXYnLFxyXG5cdH0sXHJcblx0YnJlYWtwb2ludHM6IHtcclxuXHRcdDMyMDoge1xyXG5cdFx0XHRzcGFjZUJldHdlZW46IDMwLFxyXG5cdFx0XHRzbGlkZXNQZXJWaWV3OiBcImF1dG9cIixcclxuXHRcdFx0Y2VudGVyZWRTbGlkZXM6IHRydWUsXHJcblx0XHR9LFxyXG5cdFx0NjAwOiB7XHJcblx0XHRcdHNsaWRlc1BlclZpZXc6IDIsXHJcblx0XHRcdHNwYWNlQmV0d2VlbjogMTBcclxuXHRcdH0sXHJcblx0XHQxMDI0OiB7XHJcblx0XHRcdHNsaWRlc1BlclZpZXc6IDMsXHJcblx0XHRcdHNwYWNlQmV0d2VlbjogMzAsXHJcblx0XHR9XHJcblx0fVxyXG59KTtcclxuIl0sIm5hbWVzIjpbIlZhbmlsbGFUaWx0IiwidWEiLCJ3aW5kb3ciLCJuYXZpZ2F0b3IiLCJ1c2VyQWdlbnQiLCJtc2llIiwiaW5kZXhPZiIsImlzTW9iaWxlIiwiQW5kcm9pZCIsIm1hdGNoIiwiQmxhY2tCZXJyeSIsImlPUyIsIk9wZXJhIiwiV2luZG93cyIsImFueSIsInZhbmlsbGFUaWx0IiwiaXRlbSIsIm1heCIsInNwZWVkIiwiaXRlbXMiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJpbml0IiwiRmFuY3lib3giLCJiaW5kIiwiJCIsInBhcmFsbGF4IiwibW91c2Vwb3J0IiwiZGVjYXkiLCJTd2lwZXIiLCJuYXZpZ2F0aW9uIiwibmV4dEVsIiwicHJldkVsIiwicGFnaW5hdGlvbiIsImVsIiwiY2xpY2thYmxlIiwiYnJlYWtwb2ludHMiLCJzcGFjZUJldHdlZW4iLCJzbGlkZXNQZXJWaWV3IiwiY2VudGVyZWRTbGlkZXMiXSwic291cmNlUm9vdCI6IiJ9