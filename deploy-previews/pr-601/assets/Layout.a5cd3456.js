var ot=Object.defineProperty,it=Object.defineProperties;var lt=Object.getOwnPropertyDescriptors;var xe=Object.getOwnPropertySymbols;var ut=Object.prototype.hasOwnProperty,ct=Object.prototype.propertyIsEnumerable;var Ee=(n,e,t)=>e in n?ot(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,Le=(n,e)=>{for(var t in e||(e={}))ut.call(e,t)&&Ee(n,t,e[t]);if(xe)for(var t of xe(e))ct.call(e,t)&&Ee(n,t,e[t]);return n},Ce=(n,e)=>it(n,lt(e));import{_ as R,k as O,D as dt,r as U,o as p,c as _,a as c,t as A,b as k,w as $,F as D,e as P,g as ee,i as te,f as G,y as B,n as M,A as j,E as X,G as qe,H as w,u as f,J as Re,x as L,l as E,K as _e,L as ft,M as ht,N as pt,T as Fe,O as mt,P as vt,Q as ze,R as _t,S as be,U as Ve,C as H,V as bt,W as ge,d as gt,X as Be,Y as ne,Z as W,$ as yt,a0 as kt,a1 as wt,a2 as $t,a3 as St,z as xt,a4 as Et,a5 as Lt}from"./app.58f14a12.js";import Ct from"./IconSearch.3e693fc6.js";import Rt from"./IconMenu.7343ab3c.js";import Bt from"./IconArrowBackIos.0f0772d4.js";import Tt from"./IconLaunch.6dfc4139.js";var ye={exports:{}},Je=function(e,t){return function(){for(var r=new Array(arguments.length),a=0;a<r.length;a++)r[a]=arguments[a];return e.apply(t,r)}},At=Je,q=Object.prototype.toString;function ke(n){return q.call(n)==="[object Array]"}function me(n){return typeof n=="undefined"}function Nt(n){return n!==null&&!me(n)&&n.constructor!==null&&!me(n.constructor)&&typeof n.constructor.isBuffer=="function"&&n.constructor.isBuffer(n)}function Pt(n){return q.call(n)==="[object ArrayBuffer]"}function Ot(n){return typeof FormData!="undefined"&&n instanceof FormData}function Dt(n){var e;return typeof ArrayBuffer!="undefined"&&ArrayBuffer.isView?e=ArrayBuffer.isView(n):e=n&&n.buffer&&n.buffer instanceof ArrayBuffer,e}function Ut(n){return typeof n=="string"}function It(n){return typeof n=="number"}function Ge(n){return n!==null&&typeof n=="object"}function re(n){if(q.call(n)!=="[object Object]")return!1;var e=Object.getPrototypeOf(n);return e===null||e===Object.prototype}function Mt(n){return q.call(n)==="[object Date]"}function jt(n){return q.call(n)==="[object File]"}function Ht(n){return q.call(n)==="[object Blob]"}function We(n){return q.call(n)==="[object Function]"}function qt(n){return Ge(n)&&We(n.pipe)}function Ft(n){return typeof URLSearchParams!="undefined"&&n instanceof URLSearchParams}function zt(n){return n.trim?n.trim():n.replace(/^\s+|\s+$/g,"")}function Vt(){return typeof navigator!="undefined"&&(navigator.product==="ReactNative"||navigator.product==="NativeScript"||navigator.product==="NS")?!1:typeof window!="undefined"&&typeof document!="undefined"}function we(n,e){if(!(n===null||typeof n=="undefined"))if(typeof n!="object"&&(n=[n]),ke(n))for(var t=0,s=n.length;t<s;t++)e.call(null,n[t],t,n);else for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.call(null,n[r],r,n)}function ve(){var n={};function e(r,a){re(n[a])&&re(r)?n[a]=ve(n[a],r):re(r)?n[a]=ve({},r):ke(r)?n[a]=r.slice():n[a]=r}for(var t=0,s=arguments.length;t<s;t++)we(arguments[t],e);return n}function Jt(n,e,t){return we(e,function(r,a){t&&typeof r=="function"?n[a]=At(r,t):n[a]=r}),n}function Gt(n){return n.charCodeAt(0)===65279&&(n=n.slice(1)),n}var N={isArray:ke,isArrayBuffer:Pt,isBuffer:Nt,isFormData:Ot,isArrayBufferView:Dt,isString:Ut,isNumber:It,isObject:Ge,isPlainObject:re,isUndefined:me,isDate:Mt,isFile:jt,isBlob:Ht,isFunction:We,isStream:qt,isURLSearchParams:Ft,isStandardBrowserEnv:Vt,forEach:we,merge:ve,extend:Jt,trim:zt,stripBOM:Gt},z=N;function Te(n){return encodeURIComponent(n).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}var Xe=function(e,t,s){if(!t)return e;var r;if(s)r=s(t);else if(z.isURLSearchParams(t))r=t.toString();else{var a=[];z.forEach(t,function(u,m){u===null||typeof u=="undefined"||(z.isArray(u)?m=m+"[]":u=[u],z.forEach(u,function(h){z.isDate(h)?h=h.toISOString():z.isObject(h)&&(h=JSON.stringify(h)),a.push(Te(m)+"="+Te(h))}))}),r=a.join("&")}if(r){var o=e.indexOf("#");o!==-1&&(e=e.slice(0,o)),e+=(e.indexOf("?")===-1?"?":"&")+r}return e},Wt=N;function oe(){this.handlers=[]}oe.prototype.use=function(e,t,s){return this.handlers.push({fulfilled:e,rejected:t,synchronous:s?s.synchronous:!1,runWhen:s?s.runWhen:null}),this.handlers.length-1};oe.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)};oe.prototype.forEach=function(e){Wt.forEach(this.handlers,function(s){s!==null&&e(s)})};var Xt=oe,Kt=N,Yt=function(e,t){Kt.forEach(e,function(r,a){a!==t&&a.toUpperCase()===t.toUpperCase()&&(e[t]=r,delete e[a])})},Ke=function(e,t,s,r,a){return e.config=t,s&&(e.code=s),e.request=r,e.response=a,e.isAxiosError=!0,e.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code,status:this.response&&this.response.status?this.response.status:null}},e},Qt=Ke,Ye=function(e,t,s,r,a){var o=new Error(e);return Qt(o,t,s,r,a)},Zt=Ye,en=function(e,t,s){var r=s.config.validateStatus;!s.status||!r||r(s.status)?e(s):t(Zt("Request failed with status code "+s.status,s.config,null,s.request,s))},Q=N,tn=Q.isStandardBrowserEnv()?function(){return{write:function(t,s,r,a,o,l){var u=[];u.push(t+"="+encodeURIComponent(s)),Q.isNumber(r)&&u.push("expires="+new Date(r).toGMTString()),Q.isString(a)&&u.push("path="+a),Q.isString(o)&&u.push("domain="+o),l===!0&&u.push("secure"),document.cookie=u.join("; ")},read:function(t){var s=document.cookie.match(new RegExp("(^|;\\s*)("+t+")=([^;]*)"));return s?decodeURIComponent(s[3]):null},remove:function(t){this.write(t,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}(),nn=function(e){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)},rn=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e},sn=nn,an=rn,on=function(e,t){return e&&!sn(t)?an(e,t):t},de=N,ln=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"],un=function(e){var t={},s,r,a;return e&&de.forEach(e.split(`
`),function(l){if(a=l.indexOf(":"),s=de.trim(l.substr(0,a)).toLowerCase(),r=de.trim(l.substr(a+1)),s){if(t[s]&&ln.indexOf(s)>=0)return;s==="set-cookie"?t[s]=(t[s]?t[s]:[]).concat([r]):t[s]=t[s]?t[s]+", "+r:r}}),t},Ae=N,cn=Ae.isStandardBrowserEnv()?function(){var e=/(msie|trident)/i.test(navigator.userAgent),t=document.createElement("a"),s;function r(a){var o=a;return e&&(t.setAttribute("href",o),o=t.href),t.setAttribute("href",o),{href:t.href,protocol:t.protocol?t.protocol.replace(/:$/,""):"",host:t.host,search:t.search?t.search.replace(/^\?/,""):"",hash:t.hash?t.hash.replace(/^#/,""):"",hostname:t.hostname,port:t.port,pathname:t.pathname.charAt(0)==="/"?t.pathname:"/"+t.pathname}}return s=r(window.location.href),function(o){var l=Ae.isString(o)?r(o):o;return l.protocol===s.protocol&&l.host===s.host}}():function(){return function(){return!0}}();function $e(n){this.message=n}$e.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")};$e.prototype.__CANCEL__=!0;var ie=$e,Z=N,dn=en,fn=tn,hn=Xe,pn=on,mn=un,vn=cn,fe=Ye,_n=ue,bn=ie,Ne=function(e){return new Promise(function(s,r){var a=e.data,o=e.headers,l=e.responseType,u;function m(){e.cancelToken&&e.cancelToken.unsubscribe(u),e.signal&&e.signal.removeEventListener("abort",u)}Z.isFormData(a)&&delete o["Content-Type"];var i=new XMLHttpRequest;if(e.auth){var h=e.auth.username||"",d=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";o.Authorization="Basic "+btoa(h+":"+d)}var b=pn(e.baseURL,e.url);i.open(e.method.toUpperCase(),hn(b,e.params,e.paramsSerializer),!0),i.timeout=e.timeout;function g(){if(!!i){var v="getAllResponseHeaders"in i?mn(i.getAllResponseHeaders()):null,S=!l||l==="text"||l==="json"?i.responseText:i.response,C={data:S,status:i.status,statusText:i.statusText,headers:v,config:e,request:i};dn(function(F){s(F),m()},function(F){r(F),m()},C),i=null}}if("onloadend"in i?i.onloadend=g:i.onreadystatechange=function(){!i||i.readyState!==4||i.status===0&&!(i.responseURL&&i.responseURL.indexOf("file:")===0)||setTimeout(g)},i.onabort=function(){!i||(r(fe("Request aborted",e,"ECONNABORTED",i)),i=null)},i.onerror=function(){r(fe("Network Error",e,null,i)),i=null},i.ontimeout=function(){var S=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded",C=e.transitional||_n.transitional;e.timeoutErrorMessage&&(S=e.timeoutErrorMessage),r(fe(S,e,C.clarifyTimeoutError?"ETIMEDOUT":"ECONNABORTED",i)),i=null},Z.isStandardBrowserEnv()){var y=(e.withCredentials||vn(b))&&e.xsrfCookieName?fn.read(e.xsrfCookieName):void 0;y&&(o[e.xsrfHeaderName]=y)}"setRequestHeader"in i&&Z.forEach(o,function(S,C){typeof a=="undefined"&&C.toLowerCase()==="content-type"?delete o[C]:i.setRequestHeader(C,S)}),Z.isUndefined(e.withCredentials)||(i.withCredentials=!!e.withCredentials),l&&l!=="json"&&(i.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&i.addEventListener("progress",e.onDownloadProgress),typeof e.onUploadProgress=="function"&&i.upload&&i.upload.addEventListener("progress",e.onUploadProgress),(e.cancelToken||e.signal)&&(u=function(v){!i||(r(!v||v&&v.type?new bn("canceled"):v),i.abort(),i=null)},e.cancelToken&&e.cancelToken.subscribe(u),e.signal&&(e.signal.aborted?u():e.signal.addEventListener("abort",u))),a||(a=null),i.send(a)})},x=N,Pe=Yt,gn=Ke,yn={"Content-Type":"application/x-www-form-urlencoded"};function Oe(n,e){!x.isUndefined(n)&&x.isUndefined(n["Content-Type"])&&(n["Content-Type"]=e)}function kn(){var n;return(typeof XMLHttpRequest!="undefined"||typeof process!="undefined"&&Object.prototype.toString.call(process)==="[object process]")&&(n=Ne),n}function wn(n,e,t){if(x.isString(n))try{return(e||JSON.parse)(n),x.trim(n)}catch(s){if(s.name!=="SyntaxError")throw s}return(t||JSON.stringify)(n)}var le={transitional:{silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},adapter:kn(),transformRequest:[function(e,t){return Pe(t,"Accept"),Pe(t,"Content-Type"),x.isFormData(e)||x.isArrayBuffer(e)||x.isBuffer(e)||x.isStream(e)||x.isFile(e)||x.isBlob(e)?e:x.isArrayBufferView(e)?e.buffer:x.isURLSearchParams(e)?(Oe(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):x.isObject(e)||t&&t["Content-Type"]==="application/json"?(Oe(t,"application/json"),wn(e)):e}],transformResponse:[function(e){var t=this.transitional||le.transitional,s=t&&t.silentJSONParsing,r=t&&t.forcedJSONParsing,a=!s&&this.responseType==="json";if(a||r&&x.isString(e)&&e.length)try{return JSON.parse(e)}catch(o){if(a)throw o.name==="SyntaxError"?gn(o,this,"E_JSON_PARSE"):o}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};x.forEach(["delete","get","head"],function(e){le.headers[e]={}});x.forEach(["post","put","patch"],function(e){le.headers[e]=x.merge(yn)});var ue=le,$n=N,Sn=ue,xn=function(e,t,s){var r=this||Sn;return $n.forEach(s,function(o){e=o.call(r,e,t)}),e},Qe=function(e){return!!(e&&e.__CANCEL__)},De=N,he=xn,En=Qe,Ln=ue,Cn=ie;function pe(n){if(n.cancelToken&&n.cancelToken.throwIfRequested(),n.signal&&n.signal.aborted)throw new Cn("canceled")}var Rn=function(e){pe(e),e.headers=e.headers||{},e.data=he.call(e,e.data,e.headers,e.transformRequest),e.headers=De.merge(e.headers.common||{},e.headers[e.method]||{},e.headers),De.forEach(["delete","get","head","post","put","patch","common"],function(r){delete e.headers[r]});var t=e.adapter||Ln.adapter;return t(e).then(function(r){return pe(e),r.data=he.call(e,r.data,r.headers,e.transformResponse),r},function(r){return En(r)||(pe(e),r&&r.response&&(r.response.data=he.call(e,r.response.data,r.response.headers,e.transformResponse))),Promise.reject(r)})},T=N,Ze=function(e,t){t=t||{};var s={};function r(i,h){return T.isPlainObject(i)&&T.isPlainObject(h)?T.merge(i,h):T.isPlainObject(h)?T.merge({},h):T.isArray(h)?h.slice():h}function a(i){if(T.isUndefined(t[i])){if(!T.isUndefined(e[i]))return r(void 0,e[i])}else return r(e[i],t[i])}function o(i){if(!T.isUndefined(t[i]))return r(void 0,t[i])}function l(i){if(T.isUndefined(t[i])){if(!T.isUndefined(e[i]))return r(void 0,e[i])}else return r(void 0,t[i])}function u(i){if(i in t)return r(e[i],t[i]);if(i in e)return r(void 0,e[i])}var m={url:o,method:o,data:o,baseURL:l,transformRequest:l,transformResponse:l,paramsSerializer:l,timeout:l,timeoutMessage:l,withCredentials:l,adapter:l,responseType:l,xsrfCookieName:l,xsrfHeaderName:l,onUploadProgress:l,onDownloadProgress:l,decompress:l,maxContentLength:l,maxBodyLength:l,transport:l,httpAgent:l,httpsAgent:l,cancelToken:l,socketPath:l,responseEncoding:l,validateStatus:u};return T.forEach(Object.keys(e).concat(Object.keys(t)),function(h){var d=m[h]||a,b=d(h);T.isUndefined(b)&&d!==u||(s[h]=b)}),s},et={version:"0.24.0"},Bn=et.version,Se={};["object","boolean","number","function","string","symbol"].forEach(function(n,e){Se[n]=function(s){return typeof s===n||"a"+(e<1?"n ":" ")+n}});var Ue={};Se.transitional=function(e,t,s){function r(a,o){return"[Axios v"+Bn+"] Transitional option '"+a+"'"+o+(s?". "+s:"")}return function(a,o,l){if(e===!1)throw new Error(r(o," has been removed"+(t?" in "+t:"")));return t&&!Ue[o]&&(Ue[o]=!0,console.warn(r(o," has been deprecated since v"+t+" and will be removed in the near future"))),e?e(a,o,l):!0}};function Tn(n,e,t){if(typeof n!="object")throw new TypeError("options must be an object");for(var s=Object.keys(n),r=s.length;r-- >0;){var a=s[r],o=e[a];if(o){var l=n[a],u=l===void 0||o(l,a,n);if(u!==!0)throw new TypeError("option "+a+" must be "+u);continue}if(t!==!0)throw Error("Unknown option "+a)}}var An={assertOptions:Tn,validators:Se},tt=N,Nn=Xe,Ie=Xt,Me=Rn,ce=Ze,nt=An,V=nt.validators;function K(n){this.defaults=n,this.interceptors={request:new Ie,response:new Ie}}K.prototype.request=function(e){typeof e=="string"?(e=arguments[1]||{},e.url=arguments[0]):e=e||{},e=ce(this.defaults,e),e.method?e.method=e.method.toLowerCase():this.defaults.method?e.method=this.defaults.method.toLowerCase():e.method="get";var t=e.transitional;t!==void 0&&nt.assertOptions(t,{silentJSONParsing:V.transitional(V.boolean),forcedJSONParsing:V.transitional(V.boolean),clarifyTimeoutError:V.transitional(V.boolean)},!1);var s=[],r=!0;this.interceptors.request.forEach(function(d){typeof d.runWhen=="function"&&d.runWhen(e)===!1||(r=r&&d.synchronous,s.unshift(d.fulfilled,d.rejected))});var a=[];this.interceptors.response.forEach(function(d){a.push(d.fulfilled,d.rejected)});var o;if(!r){var l=[Me,void 0];for(Array.prototype.unshift.apply(l,s),l=l.concat(a),o=Promise.resolve(e);l.length;)o=o.then(l.shift(),l.shift());return o}for(var u=e;s.length;){var m=s.shift(),i=s.shift();try{u=m(u)}catch(h){i(h);break}}try{o=Me(u)}catch(h){return Promise.reject(h)}for(;a.length;)o=o.then(a.shift(),a.shift());return o};K.prototype.getUri=function(e){return e=ce(this.defaults,e),Nn(e.url,e.params,e.paramsSerializer).replace(/^\?/,"")};tt.forEach(["delete","get","head","options"],function(e){K.prototype[e]=function(t,s){return this.request(ce(s||{},{method:e,url:t,data:(s||{}).data}))}});tt.forEach(["post","put","patch"],function(e){K.prototype[e]=function(t,s,r){return this.request(ce(r||{},{method:e,url:t,data:s}))}});var Pn=K,On=ie;function J(n){if(typeof n!="function")throw new TypeError("executor must be a function.");var e;this.promise=new Promise(function(r){e=r});var t=this;this.promise.then(function(s){if(!!t._listeners){var r,a=t._listeners.length;for(r=0;r<a;r++)t._listeners[r](s);t._listeners=null}}),this.promise.then=function(s){var r,a=new Promise(function(o){t.subscribe(o),r=o}).then(s);return a.cancel=function(){t.unsubscribe(r)},a},n(function(r){t.reason||(t.reason=new On(r),e(t.reason))})}J.prototype.throwIfRequested=function(){if(this.reason)throw this.reason};J.prototype.subscribe=function(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]};J.prototype.unsubscribe=function(e){if(!!this._listeners){var t=this._listeners.indexOf(e);t!==-1&&this._listeners.splice(t,1)}};J.source=function(){var e,t=new J(function(r){e=r});return{token:t,cancel:e}};var Dn=J,Un=function(e){return function(s){return e.apply(null,s)}},In=function(e){return typeof e=="object"&&e.isAxiosError===!0},je=N,Mn=Je,se=Pn,jn=Ze,Hn=ue;function rt(n){var e=new se(n),t=Mn(se.prototype.request,e);return je.extend(t,se.prototype,e),je.extend(t,e),t.create=function(r){return rt(jn(n,r))},t}var I=rt(Hn);I.Axios=se;I.Cancel=ie;I.CancelToken=Dn;I.isCancel=Qe;I.VERSION=et.version;I.all=function(e){return Promise.all(e)};I.spread=Un;I.isAxiosError=In;ye.exports=I;ye.exports.default=I;var qn=ye.exports;const Fn={class:"hero d-mnt16 d-bgr-none"},zn={class:"hero--inner-wrapper d-d-flex d-jc-space-between d-mx-auto d-wmx1340 d-pl16 d-pr16"},Vn={class:"hero--content d-d-flex d-fd-column d-jc-center"},Jn={class:"d-mb48"},Gn=c("a",{class:"d-td-unset",href:"https://github.com/dialpad/dialtone/"},[c("img",{alt:"Dialtone CSS version number",src:"https://img.shields.io/github/package-json/v/dialpad/dialtone?color=A687FF&label=CSS"})],-1),Wn={class:"d-td-unset d-ml4",href:"https://github.com/dialpad/dialtone-vue"},Xn=["src"],Kn=P("Get Started"),Yn=["src"],Qn={class:"links d-d-grid d-gg16 d-g-cols12 d-wmx1340 d-mx-auto"},Zn={class:"d-gc4 link d-px32 d-ta-center"},er=["src"],tr=c("h2",{class:"link--headline d-fs28 d-lh4 d-mb12"},"Design",-1),nr=c("p",{class:"link--paragraph d-fs18 d-lh6 d-mb8"},"Foundational color, iconography, and spacing guidelines",-1),rr=P("Browse design guidelines"),sr={class:"d-gc4 link d-px32 d-ta-center"},ar=["src"],or=c("h2",{class:"link--headline d-fs28 d-lh4 d-mb12"},"Utilities",-1),ir=c("p",{class:"link--paragraph d-fs18 d-lh6 d-mb8"},"Atomic CSS utility classes so you don't have to write custom CSS",-1),lr=P("Browse utility classes"),ur={class:"d-gc4 link d-px32 d-ta-center"},cr=["src"],dr=c("h2",{class:"link--headline d-fs28 d-lh4 d-mb12"},"Components",-1),fr=c("p",{class:"link--paragraph d-fs18 d-lh6 d-mb8"},"Presentational UI components offered in CSS and Vue",-1),hr={class:"d-d-inline-flex d-fd-column"},pr=P("Browse CSS components"),mr=c("a",{class:"d-link link--link",href:"https://vue.dialpad.design/",target:"_blank"},"Browse Vue components",-1),vr=c("section",{class:"d-bgc-purple-500 d-py64 d-ta-center"},[c("p",{class:"d-fc-white d-fs24 d-fw-bold d-px48"},"Don't see something? Want to contribute?"),c("a",{class:"d-btn d-btn--inverted d-btn--primary d-mt16",href:"https://forms.monday.com/forms/8a9a6ff69d7e9f95caee029c2806e2c1?r=use1",target:"_blank"},"Make a request")],-1),_r={setup(n){const e="Documented styles, utility classes, and components to help you quickly design and build unified experiences across Dialpad and Dialpad Meetings.",t="Improve your UI's reception with Dialtone",s=O("0.0.0");return dt(async()=>{const r=await qn.get("https://vue.dialpad.design/version.txt");s.value=r.data}),(r,a)=>{const o=U("router-link");return p(),_(D,null,[c("section",Fn,[c("div",zn,[c("div",Vn,[c("h1",{class:"d-headline42 d-lh6 d-mb12"},A(t)),c("p",{class:"d-fs20 d-lh6 d-mb8"},A(e)),c("div",Jn,[Gn,c("a",Wn,[c("img",{id:"dialtone-vue-badge",alt:"Dialtone Vue version number",src:"https://img.shields.io/badge/Vue-v"+s.value+"-A687FF"},null,8,Xn)])]),k(o,{class:"d-btn d-btn--primary d-btn--lg",to:"/getting-started/installation.html"},{default:$(()=>[Kn]),_:1})]),c("img",{alt:"",class:"hero--image d-w50p d-as-flex-start",src:r.$withBase("/assets/images/home-hero.png")},null,8,Yn)])]),c("section",Qn,[c("div",Zn,[c("img",{alt:"",class:"link--image d-h96 d-mb24",src:r.$withBase("/assets/images/home-design.svg")},null,8,er),tr,nr,k(o,{class:"d-link link--link",to:"/design/colors/color-palette"},{default:$(()=>[rr]),_:1})]),c("div",sr,[c("img",{alt:"",class:"link--image d-h96 d-mb24",src:r.$withBase("/assets/images/home-utilities.svg")},null,8,ar),or,ir,k(o,{class:"d-link link--link",to:"/utilities/backgrounds/attachment"},{default:$(()=>[lr]),_:1})]),c("div",ur,[c("img",{alt:"",class:"link--image d-h96 d-mb24",src:r.$withBase("/assets/images/home-components.svg")},null,8,cr),dr,fr,c("div",hr,[k(o,{class:"d-link link--link",to:"/components/avatar"},{default:$(()=>[pr]),_:1}),mr])])]),vr],64)}}};var br=R(_r,[["__file","Home.vue"]]);const gr={class:"d-ml-auto d-d-none lg:d-d-flex d-ai-center"},yr={props:{items:Array,activeLink:String},emits:["search"],setup(n,{emit:e}){const t=O(!1);O(void 0);function s(){e("search")}function r(){t.value=!t.value,document.body.classList.toggle("d-of-hidden",!!t.value)}return(a,o)=>{const l=U("icon-close"),u=U("router-link");return p(),_("div",gr,[ee(c("span",{onClick:s,class:"js-mobile-header-search d-c-pointer d-mr16"},[k(Ct)],512),[[te,!t.value]]),ee(c("span",{onClick:r,class:"js-mobile-header-menu d-c-pointer"},[k(Rt)],512),[[te,!t.value]]),ee(c("span",{onClick:r,class:"js-mobile-header-close d-c-pointer"},[k(l)],512),[[te,t.value]]),c("nav",{class:M(["mobile-header-drop-down-menu d-ps-fixed d-l0 d-w100p d-bgc-white d-of-auto d-fs24 d-d-flex d-fd-column d-ai-baseline d-py24 d-px16",{"d-o0 d-d-none":!t.value}])},[(p(!0),_(D,null,G(n.items,m=>(p(),B(u,{to:m.link,class:M(["d-link d-mb12",{"router-link-active":n.activeLink===m.text}]),onClick:r},{default:$(()=>[P(A(m.text),1)]),_:2},1032,["to","class"]))),256))],2)])}}};var kr=R(yr,[["__scopeId","data-v-f7f758e4"],["__file","MobileNavbar.vue"]]);const wr=["href","rel","target","aria-label"],$r=j({inheritAttrs:!1}),Sr=j(Ce(Le({},$r),{props:{item:{type:Object,required:!0}},setup(n){const e=n,t=X(),s=pt(),{item:r}=qe(e),a=w(()=>_e(r.value.link)),o=w(()=>ft(r.value.link)||ht(r.value.link)),l=w(()=>{if(!o.value){if(r.value.target)return r.value.target;if(a.value)return"_blank"}}),u=w(()=>l.value==="_blank"),m=w(()=>!a.value&&!o.value&&!u.value),i=w(()=>{if(!o.value){if(r.value.rel)return r.value.rel;if(u.value)return"noopener noreferrer"}}),h=w(()=>r.value.ariaLabel||r.value.text),d=w(()=>{const y=Object.keys(s.value.locales);return y.length?!y.some(v=>v===r.value.link):r.value.link!=="/"}),b=w(()=>d.value?t.path.startsWith(r.value.link):!1),g=w(()=>m.value?r.value.activeMatch?new RegExp(r.value.activeMatch).test(t.path):b.value:!1);return(y,v)=>{const S=U("RouterLink"),C=U("AutoLinkExternalIcon");return f(m)?(p(),B(S,Re({key:0,class:{"router-link-active":f(g)},to:f(r).link,"aria-label":f(h)},y.$attrs),{default:$(()=>[L(y.$slots,"before"),P(" "+A(f(r).text)+" ",1),L(y.$slots,"after")]),_:3},16,["class","to","aria-label"])):(p(),_("a",Re({key:1,class:"external-link",href:f(r).link,rel:f(i),target:f(l),"aria-label":f(h)},y.$attrs),[L(y.$slots,"before"),P(" "+A(f(r).text)+" ",1),f(u)?(p(),B(C,{key:0})):E("",!0),L(y.$slots,"after")],16,wr))}}}));var ae=R(Sr,[["__file","AutoLink.vue"]]);const xr=j({setup(n){const e=s=>{s.style.height=s.scrollHeight+"px"},t=s=>{s.style.height=""};return(s,r)=>(p(),B(Fe,{name:"dropdown",onEnter:e,onAfterEnter:t,onBeforeLeave:e},{default:$(()=>[L(s.$slots,"default")]),_:3}))}});var Er=R(xr,[["__file","DropdownTransition.vue"]]);const He=n=>decodeURI(n).replace(/#.*$/,"").replace(/(index)?\.(md|html)$/,""),Lr=(n,e)=>{if(e.hash===n)return!0;const t=He(e.path),s=He(n);return t===s},st=(n,e)=>n.link&&Lr(n.link,e)?!0:n.children?n.children.some(t=>st(t,e)):!1,Cr=n=>!_e(n)||/github\.com/.test(n)?"GitHub":/bitbucket\.org/.test(n)?"Bitbucket":/gitlab\.com/.test(n)?"GitLab":/gitee\.com/.test(n)?"Gitee":null,Rr={GitHub:":repo/edit/:branch/:path",GitLab:":repo/-/edit/:branch/:path",Gitee:":repo/edit/:branch/:path",Bitbucket:":repo/src/:branch/:path?mode=edit&spa=0&at=:branch&fileviewer=file-view-default"},Br=({docsRepo:n,editLinkPattern:e})=>{if(e)return e;const t=Cr(n);return t!==null?Rr[t]:null},Tr=({docsRepo:n,docsBranch:e,docsDir:t,filePathRelative:s,editLinkPattern:r})=>{if(!s)return null;const a=Br({docsRepo:n,editLinkPattern:r});return a?a.replace(/:repo/,_e(n)?n:`https://github.com/${n}`).replace(/:branch/,e).replace(/:path/,mt(`${vt(t)}/${s}`)):null},Ar={class:"sidebar-item-children"},Nr=j({props:{item:{type:Object,required:!0},depth:{type:Number,required:!1,default:0}},setup(n){const e=n,{item:t,depth:s}=qe(e),r=X(),a=ze(),o=w(()=>st(t.value,r)),l=w(()=>({"sidebar-item":!0,"sidebar-heading":s.value===0,active:o.value,collapsible:t.value.collapsible})),u=O(!0),m=O(void 0);return t.value.collapsible&&(u.value=o.value,m.value=()=>{u.value=!u.value},a.afterEach(()=>{u.value=o.value})),(i,h)=>{var b;const d=U("SidebarItem",!0);return p(),_("li",null,[f(t).link?(p(),B(ae,{key:0,class:M(f(l)),item:f(t)},null,8,["class","item"])):(p(),_("p",{key:1,tabindex:"0",class:M(f(l)),onClick:h[0]||(h[0]=(...g)=>m.value&&m.value(...g)),onKeydown:h[1]||(h[1]=_t((...g)=>m.value&&m.value(...g),["enter"]))},[P(A(f(t).text)+" ",1),f(t).collapsible?(p(),_("span",{key:0,class:M(["arrow",u.value?"down":"right"])},null,2)):E("",!0)],34)),(b=f(t).children)!=null&&b.length?(p(),B(Er,{key:2},{default:$(()=>[ee(c("ul",Ar,[(p(!0),_(D,null,G(f(t).children,g=>(p(),B(d,{key:`${f(s)}${g.text}${g.link}`,item:g,depth:f(s)+1},null,8,["item","depth"]))),128))],512),[[te,u.value]])]),_:1})):E("",!0)])}}});var Pr=R(Nr,[["__file","SidebarItem.vue"]]);const Or={key:0,class:"sidebar-items"},Dr=j({setup(n){const e=X(),t=be();return Ve(()=>e.hash,s=>{const r=document.querySelector(".sidebar");if(!r)return;const a=document.querySelector(`.sidebar a.sidebar-item[href="${e.path}${s}"]`);if(!a)return;const o=r.getBoundingClientRect().top,l=r.getBoundingClientRect().height,u=a.getBoundingClientRect().top,m=a.getBoundingClientRect().height;u<o?a.scrollIntoView(!0):u+m>o+l&&a.scrollIntoView(!1)}),(s,r)=>f(t).length?(p(),_("ul",Or,[(p(!0),_(D,null,G(f(t),a=>(p(),B(Pr,{key:a.link||a.text,item:a},null,8,["item"]))),128))])):E("",!0)}});var at=R(Dr,[["__file","SidebarItems.vue"]]);const Ur={class:"mobile-sidebar"},Ir={class:"d-ps-fixed d-w100p d-bgc-white d-h64 d-x0 lg:d-d-flex d-bb d-bc-black-100 d-ai-center d-jc-space-between d-t64 d-d-none"},Mr={id:"breadcrumbs",class:"d-breadcrumbs d-p12 d-of-hidden d-to-ellipsis d-ws-nowrap d-w628"},jr={class:"d-breadcrumbs__item d-d-inline"},Hr={props:{currentPath:String},setup(n){const e=n,t=O(!1),s=w(()=>e.currentPath.replaceAll("-"," ").replace(".html","").split("/").filter(a=>a.trim()).map(a=>a[0].toUpperCase()+a.slice(1)));function r(){t.value=!t.value,document.body.classList.toggle("d-of-hidden",!!t.value)}return(a,o)=>(p(),_("div",Ur,[c("div",Ir,[c("ul",Mr,[(p(!0),_(D,null,G(f(s),l=>(p(),_("li",jr,A(l),1))),256))]),c("span",{class:M([{"breadcrumb-arrow--top":t.value},"d-w24 d-h24 d-p12 d-mr12 breadcrumb-arrow d-c-pointer"]),onClick:r},[k(Bt)],2)]),c("div",{class:M([{"d-o0 d-d-none":!t.value},"mobile-header-drop-down-navigation d-ps-fixed d-l0 d-w100p d-bgc-white d-of-auto d-fs24 d-d-flex d-fd-column d-ai-baseline d-pt24 d-pr16"])},[k(at,{onClick:r})],2)]))}};var qr=R(Hr,[["__file","MobileSidebar.vue"]]);const Fr={class:"d-ps-sticky d-t0 d-x0 d-d-flex d-ai-center d-w100 d-pl8 d-pr12 d-h128 d-hmx64 d-bb d-bc-black-100 d-bgc-white d-zi-navigation"},zr=["alt","src"],Vr={class:"d-ml64 d-flow8 lg:d-d-none",role:"navigation"},Jr={class:"d-ml-auto d-flow8 d-d-flex lg:d-d-none"},Gr=gt('<div class="d-d-flex d-flow4"><a alt="GitHub repo" class="d-btn d-btn--muted d-tooltip--hover" href="https://github.com/dialpad/dialtone"><svg aria-hidden="true" class="d-svg d-svg--system d-svg--Github d-svg--size20" height="24" viewBox="0 0 18 18" width="24"><path d="M9 1a8 8 0 00-2.53 15.59c.4.07.55-.17.55-.38l-.01-1.49c-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82a7.42 7.42 0 014 0c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48l-.01 2.2c0 .21.15.46.55.38A8.01 8.01 0 009 1z"></path></svg><div class="d-tooltip d-tooltip__arrow--top-center d-ps-absolute d-ws-nowrap"> GitHub Repo </div></a><a alt="Codepen Template" class="d-btn d-btn--muted d-tooltip--hover" href="https://codepen.io/pen/?template=BajJpwW"><svg aria-hidden="true" class="d-svg d-svg--system d-svg--Codepen d-svg--size20" height="24" viewBox="0 0 18 18" width="24"><path d="M12.67 8.17l-2.98-2v-3.2l5.38 3.6-2.4 1.6zM13.9 9l1.73-1.15v2.3L13.9 9zm-4.2 2.82l2.98-2 2.4 1.62-5.38 3.59v-3.2zm-4.36-2l2.98 2v3.2l-5.38-3.58 2.4-1.61zM4.1 9l-1.73 1.15v-2.3L4.1 9zm4.2-2.82l-2.98 2-2.4-1.62L8.3 2.97v3.2zm.7 4.45L6.57 9 9 7.37 11.43 9 9 10.63zm7.99-4.19l-.01-.05-.01-.04-.02-.05-.02-.03a.6.6 0 0 0-.02-.05l-.02-.03a.69.69 0 0 0-.15-.17L16.7 6h-.02L9.4 1.11a.69.69 0 0 0-.77 0L1.3 5.99h-.02c0 .02-.02.02-.03.03a.81.81 0 0 0-.12.13.69.69 0 0 0-.03.04l-.02.03-.02.05-.02.03-.02.05v.04L1 6.44v.03a.7.7 0 0 0-.01.1v4.87a.7.7 0 0 0 0 .09l.01.03.01.05.01.04.02.05.02.03a.51.51 0 0 0 .07.12.53.53 0 0 0 .08.1c.02 0 .03.02.04.03l.03.02h.02l7.3 4.88a.69.69 0 0 0 .77 0l7.31-4.87h.02c0-.02.02-.02.03-.03a.72.72 0 0 0 .04-.04l.02-.02a.62.62 0 0 0 .13-.19l.02-.03a.6.6 0 0 0 .02-.05v-.04l.02-.05v-.03a.7.7 0 0 0 .01-.1V6.57a.7.7 0 0 0 0-.09l-.01-.03z"></path></svg><div class="d-tooltip d-tooltip__arrow--top-center d-ps-absolute d-ws-nowrap"> Codepen Template </div></a></div>',1),Wr={setup(n){const e=H().value.navbar||[],t=H().value.logo,s=bt().value.title,r=O(void 0),a=O(void 0),o=X(),l=O(o.path);function u(){Promise.all([Be(()=>import("./index.12780d58.js"),[]),Be(()=>import("./style.eb2ede75.js"),[])]).then(([d])=>{d=d.default,d({indexName:"dialpad",apiKey:"6436ebddb959748daeec411eb388a99d",container:"#algolia-search-container",appId:"Y5HG9UX6KM",placeholder:"Search Dialtone"}),m()})}function m(){const d=a.value.children.item(0),b=document.createElement("span");b.className="d-btn__label",b.textContent="Search Dialtone";const g=document.createElement("span");g.className="d-btn__icon d-btn__icon--left",g.innerHTML=`<svg aria-hidden="true" aria-label="Search" class="d-svg d-svg--system d-svg__search" viewBox="0 0 24 24">
<path clip-rule="evenodd" d="M15.732 14.318h-.741l-.263-.253a6.095 6.095 0 001.389-5.009c-.441-2.607-2.619-4.69-5.246-5.009a6.103 6.103 0 00-6.823 6.82c.319 2.626 2.402 4.802 5.011 5.243a6.103 6.103 0 005.012-1.388l.253.262v.741l3.989 3.987a.992.992 0 001.398 0 .99.99 0 000-1.398l-3.979-3.996zm-5.631 0a4.217 4.217 0 01-4.223-4.22A4.216 4.216 0 0110.1 5.876a4.216 4.216 0 014.223 4.22 4.216 4.216 0 01-4.223 4.221z" fill-rule="evenodd" />
</svg>`,d.appendChild(b),d.appendChild(g)}function i(d){const b=d.toLowerCase().replace(" ","-");return l.value.search(b)!==-1?(r.value=d,!0):!1}function h(){a.value.children.item(0).click()}return ge(()=>{u()}),Ve(()=>o.path,d=>{l.value=d}),(d,b)=>{const g=U("router-link");return p(),_("header",Fr,[k(g,{class:"d-btn d-py0",title:"Go back to the homepage",to:"/"},{default:$(()=>[c("img",{alt:f(s),src:f(t)},null,8,zr)]),_:1}),c("nav",Vr,[(p(!0),_(D,null,G(f(e),y=>(p(),B(g,{key:y.text,to:y.link,class:M(["d-link",{"router-link-active":i(y.text)}])},{default:$(()=>[P(A(y.text),1)]),_:2},1032,["to","class"]))),128))]),c("div",Jr,[Gr,c("div",{id:"algolia-search-container",ref_key:"searchBtn",ref:a},null,512)]),k(kr,{"active-link":r.value,items:f(e),onSearch:h},null,8,["active-link","items"]),l.value!=="/"?(p(),B(qr,{key:0,"current-path":l.value},null,8,["current-path"])):E("",!0)])}}};var Xr=R(Wr,[["__file","Navbar.vue"]]);const Kr={class:"page-meta"},Yr={key:0,class:"meta-item edit-link"},Qr={key:1,class:"meta-item last-updated"},Zr={class:"meta-item-label"},es={class:"meta-item-info"},ts={key:2,class:"meta-item contributors"},ns={class:"meta-item-label"},rs={class:"meta-item-info"},ss=["title"],as=P(", "),os=j({setup(n){const e=()=>{const u=H(),m=ne(),i=W();return w(()=>{var C,Y,F;if(!((Y=(C=i.value.editLink)!=null?C:u.value.editLink)!=null?Y:!0))return null;const{repo:d,docsRepo:b=d,docsBranch:g="main",docsDir:y="",editLinkText:v}=u.value;if(!b)return null;const S=Tr({docsRepo:b,docsBranch:g,docsDir:y,filePathRelative:m.value.filePathRelative,editLinkPattern:(F=i.value.editLinkPattern)!=null?F:u.value.editLinkPattern});return S?{text:v!=null?v:"Edit this page",link:S}:null})},t=()=>{const u=H(),m=ne(),i=W();return w(()=>{var b,g,y,v;return!((g=(b=i.value.lastUpdated)!=null?b:u.value.lastUpdated)!=null?g:!0)||!((y=m.value.git)!=null&&y.updatedTime)?null:new Date((v=m.value.git)==null?void 0:v.updatedTime).toLocaleString()})},s=()=>{const u=H(),m=ne(),i=W();return w(()=>{var d,b,g,y;return((b=(d=i.value.contributors)!=null?d:u.value.contributors)!=null?b:!0)&&(y=(g=m.value.git)==null?void 0:g.contributors)!=null?y:null})},r=H(),a=e(),o=t(),l=s();return(u,m)=>{const i=U("ClientOnly");return p(),_("footer",Kr,[f(a)?(p(),_("div",Yr,[k(ae,{class:"meta-item-label",item:f(a)},null,8,["item"])])):E("",!0),f(o)?(p(),_("div",Qr,[c("span",Zr,A(f(r).lastUpdatedText)+": ",1),k(i,null,{default:$(()=>[c("span",es,A(f(o)),1)]),_:1})])):E("",!0),f(l)&&f(l).length?(p(),_("div",ts,[c("span",ns,A(f(r).contributorsText)+": ",1),c("span",rs,[(p(!0),_(D,null,G(f(l),(h,d)=>(p(),_(D,{key:d},[c("span",{class:"contributor",title:`email: ${h.email}`},A(h.name),9,ss),d!==f(l).length-1?(p(),_(D,{key:0},[as],64)):E("",!0)],64))),128))])])):E("",!0)])}}});var is=R(os,[["__file","PageMeta.vue"]]);const ls={key:0,class:"page-nav"},us={class:"inner"},cs={key:0,class:"prev"},ds={key:1,class:"next"},fs=j({setup(n){const e=u=>u===!1?null:yt(u)?kt(u):wt(u)?u:!1,t=(u,m,i)=>{const h=u.findIndex(d=>d.link===m);if(h!==-1){const d=u[h+i];return d!=null&&d.link?d:null}for(const d of u)if(d.children){const b=t(d.children,m,i);if(b)return b}return null},s=W(),r=be(),a=X(),o=w(()=>{const u=e(s.value.prev);return u!==!1?u:t(r.value,a.path,-1)}),l=w(()=>{const u=e(s.value.next);return u!==!1?u:t(r.value,a.path,1)});return(u,m)=>f(o)||f(l)?(p(),_("nav",ls,[c("p",us,[f(o)?(p(),_("span",cs,[k(ae,{item:f(o)},null,8,["item"])])):E("",!0),f(l)?(p(),_("span",ds,[k(ae,{item:f(l)},null,8,["item"])])):E("",!0)])])):E("",!0)}});var hs=R(fs,[["__file","PageNav.vue"]]);const ps={class:"page"},ms={class:"theme-default-content"},vs=j({setup(n){return(e,t)=>{const s=U("Content");return p(),_("main",ps,[L(e.$slots,"top"),c("div",ms,[k(s)]),k(is),k(hs),L(e.$slots,"bottom")])}}});var _s=R(vs,[["__file","Page.vue"]]);const bs={setup(n){const e=$t({top:0});function t(){e.top=window.top.scrollY>50?6.4:11.2-window.top.scrollY/10}return ge(()=>{window.addEventListener("scroll",t),t()}),St(()=>{window.removeEventListener("scroll",t)}),(s,r)=>(p(),_("aside",{class:"sidebar",style:xt(`top: ${f(e).top}rem !important`)},[k(at)],4))}};var gs=R(bs,[["__file","Sidebar.vue"]]);const ys=j({setup(n){const e=ne(),t=W(),s=H(),r=w(()=>t.value.navbar!==!1&&s.value.navbar!==!1),a=be(),o=O(!1),l=v=>{o.value=typeof v=="boolean"?v:!o.value},u={x:0,y:0},m=v=>{u.x=v.changedTouches[0].clientX,u.y=v.changedTouches[0].clientY},i=v=>{const S=v.changedTouches[0].clientX-u.x,C=v.changedTouches[0].clientY-u.y;Math.abs(S)>Math.abs(C)&&Math.abs(S)>40&&(S>0&&u.x<=80?l(!0):l(!1))},h=w(()=>[{"no-navbar":!r.value,"no-sidebar":!a.value.length,"sidebar-open":o.value},t.value.pageClass]);let d;ge(()=>{d=ze().afterEach(()=>{l(!1)})}),Et(()=>{d()});const b=Lt(),g=b.resolve,y=b.pending;return(v,S)=>(p(),_("div",{class:M(["theme-container",f(h)]),onTouchstart:m,onTouchend:i},[L(v.$slots,"navbar",{},()=>[f(r)?(p(),B(Xr,{key:0,onToggleSidebar:l},{before:$(()=>[L(v.$slots,"navbar-before")]),after:$(()=>[L(v.$slots,"navbar-after")]),_:3})):E("",!0)]),c("div",{class:"sidebar-mask",onClick:S[0]||(S[0]=C=>l(!1))}),L(v.$slots,"sidebar",{},()=>[k(gs,null,{top:$(()=>[L(v.$slots,"sidebar-top")]),bottom:$(()=>[L(v.$slots,"sidebar-bottom")]),_:3})]),L(v.$slots,"page",{},()=>[f(t).home?(p(),B(br,{key:0})):(p(),B(Fe,{key:1,name:"fade-slide-y",mode:"out-in",onBeforeEnter:f(g),onBeforeLeave:f(y)},{default:$(()=>[(p(),B(_s,{key:f(e).path},{top:$(()=>[L(v.$slots,"page-top")]),bottom:$(()=>[L(v.$slots,"page-bottom")]),_:3}))]),_:3},8,["onBeforeEnter","onBeforeLeave"]))])],34))}});var ks=R(ys,[["__file","Layout.vue"]]);const ws={name:"Banner"},$s={"aria-hidden":"false",class:"d-banner d-banner--info d-ps-relative lg:d-d-none",role:"alert"},Ss={"aria-describedby":"info-alert-desc","aria-labelledy":"info-alert-title",class:"d-banner__dialog d-w-unset",role:"alertdialog"},xs={class:"d-notice__icon"},Es=c("div",{class:"d-notice__content"},[c("h1",{id:"info-alert-title",class:"d-notice__title"},"Dialtone 6.0 is here!"),c("p",{id:"info-alert-desc",class:"d-notice__message"},[P(" Looking for Dialtone 5 documentation? "),c("a",{class:"d-link",href:"//dialpad.design/version5",target:"_blank"},"Find it here.")])],-1);function Ls(n,e,t,s,r,a){const o=U("icon-info");return p(),_("aside",$s,[c("div",Ss,[c("div",xs,[k(o)]),Es])])}var Cs=R(ws,[["render",Ls],["__file","Banner.vue"]]);const Rs={class:"theme-default-content d-stack32 d-pb0"},Bs={class:"d-stack2"},Ts=["textContent"],As=["innerHTML"],Ns={key:0,class:"d-d-flex d-jc-space-between"},Ps=c("h2",{class:"d-fs24"},"Preview",-1),Os=["href"],Ds=P(" View Storybook "),Us={setup(n){return(e,t)=>(p(),_(D,null,[k(Cs),k(ks,null,{"page-top":$(()=>[c("section",Rs,[c("header",Bs,[e.$page.frontmatter.title?(p(),_("h1",{key:0,class:"d-headline42 d-lh6 d-mb4 d-pt16",textContent:A(e.$page.frontmatter.title)},null,8,Ts)):E("",!0),e.$page.frontmatter.desc?(p(),_("p",{key:1,class:"d-fs20 d-lh6",innerHTML:e.$page.frontmatter.desc},null,8,As)):E("",!0)]),e.$page.path.startsWith("/components")?(p(),_("div",Ns,[Ps,e.$page.frontmatter.storybook_url?(p(),_("a",{key:0,class:"d-link d-fs14",href:e.$page.frontmatter.storybook_url,target:"_blank"},[Ds,k(Tt)],8,Os)):E("",!0)])):E("",!0)])]),_:1})],64))}};var zs=R(Us,[["__file","Layout.vue"]]);export{zs as default};
