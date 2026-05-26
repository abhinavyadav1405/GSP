(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function RE(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var qm={exports:{}},Y={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qs=Symbol.for("react.element"),kE=Symbol.for("react.portal"),CE=Symbol.for("react.fragment"),PE=Symbol.for("react.strict_mode"),NE=Symbol.for("react.profiler"),DE=Symbol.for("react.provider"),OE=Symbol.for("react.context"),VE=Symbol.for("react.forward_ref"),xE=Symbol.for("react.suspense"),LE=Symbol.for("react.memo"),ME=Symbol.for("react.lazy"),Rf=Symbol.iterator;function FE(t){return t===null||typeof t!="object"?null:(t=Rf&&t[Rf]||t["@@iterator"],typeof t=="function"?t:null)}var Km={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Gm=Object.assign,Qm={};function Si(t,e,n){this.props=t,this.context=e,this.refs=Qm,this.updater=n||Km}Si.prototype.isReactComponent={};Si.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Si.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Ym(){}Ym.prototype=Si.prototype;function Qc(t,e,n){this.props=t,this.context=e,this.refs=Qm,this.updater=n||Km}var Yc=Qc.prototype=new Ym;Yc.constructor=Qc;Gm(Yc,Si.prototype);Yc.isPureReactComponent=!0;var kf=Array.isArray,Xm=Object.prototype.hasOwnProperty,Xc={current:null},Jm={key:!0,ref:!0,__self:!0,__source:!0};function Zm(t,e,n){var r,i={},s=null,a=null;if(e!=null)for(r in e.ref!==void 0&&(a=e.ref),e.key!==void 0&&(s=""+e.key),e)Xm.call(e,r)&&!Jm.hasOwnProperty(r)&&(i[r]=e[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var u=Array(l),d=0;d<l;d++)u[d]=arguments[d+2];i.children=u}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:qs,type:t,key:s,ref:a,props:i,_owner:Xc.current}}function UE(t,e){return{$$typeof:qs,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Jc(t){return typeof t=="object"&&t!==null&&t.$$typeof===qs}function bE(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Cf=/\/+/g;function Kl(t,e){return typeof t=="object"&&t!==null&&t.key!=null?bE(""+t.key):e.toString(36)}function Ko(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var a=!1;if(t===null)a=!0;else switch(s){case"string":case"number":a=!0;break;case"object":switch(t.$$typeof){case qs:case kE:a=!0}}if(a)return a=t,i=i(a),t=r===""?"."+Kl(a,0):r,kf(i)?(n="",t!=null&&(n=t.replace(Cf,"$&/")+"/"),Ko(i,e,n,"",function(d){return d})):i!=null&&(Jc(i)&&(i=UE(i,n+(!i.key||a&&a.key===i.key?"":(""+i.key).replace(Cf,"$&/")+"/")+t)),e.push(i)),1;if(a=0,r=r===""?".":r+":",kf(t))for(var l=0;l<t.length;l++){s=t[l];var u=r+Kl(s,l);a+=Ko(s,e,n,u,i)}else if(u=FE(t),typeof u=="function")for(t=u.call(t),l=0;!(s=t.next()).done;)s=s.value,u=r+Kl(s,l++),a+=Ko(s,e,n,u,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return a}function Ao(t,e,n){if(t==null)return t;var r=[],i=0;return Ko(t,r,"","",function(s){return e.call(n,s,i++)}),r}function zE(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var tt={current:null},Go={transition:null},jE={ReactCurrentDispatcher:tt,ReactCurrentBatchConfig:Go,ReactCurrentOwner:Xc};function eg(){throw Error("act(...) is not supported in production builds of React.")}Y.Children={map:Ao,forEach:function(t,e,n){Ao(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Ao(t,function(){e++}),e},toArray:function(t){return Ao(t,function(e){return e})||[]},only:function(t){if(!Jc(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Y.Component=Si;Y.Fragment=CE;Y.Profiler=NE;Y.PureComponent=Qc;Y.StrictMode=PE;Y.Suspense=xE;Y.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=jE;Y.act=eg;Y.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=Gm({},t.props),i=t.key,s=t.ref,a=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,a=Xc.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(u in e)Xm.call(e,u)&&!Jm.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&l!==void 0?l[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){l=Array(u);for(var d=0;d<u;d++)l[d]=arguments[d+2];r.children=l}return{$$typeof:qs,type:t.type,key:i,ref:s,props:r,_owner:a}};Y.createContext=function(t){return t={$$typeof:OE,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:DE,_context:t},t.Consumer=t};Y.createElement=Zm;Y.createFactory=function(t){var e=Zm.bind(null,t);return e.type=t,e};Y.createRef=function(){return{current:null}};Y.forwardRef=function(t){return{$$typeof:VE,render:t}};Y.isValidElement=Jc;Y.lazy=function(t){return{$$typeof:ME,_payload:{_status:-1,_result:t},_init:zE}};Y.memo=function(t,e){return{$$typeof:LE,type:t,compare:e===void 0?null:e}};Y.startTransition=function(t){var e=Go.transition;Go.transition={};try{t()}finally{Go.transition=e}};Y.unstable_act=eg;Y.useCallback=function(t,e){return tt.current.useCallback(t,e)};Y.useContext=function(t){return tt.current.useContext(t)};Y.useDebugValue=function(){};Y.useDeferredValue=function(t){return tt.current.useDeferredValue(t)};Y.useEffect=function(t,e){return tt.current.useEffect(t,e)};Y.useId=function(){return tt.current.useId()};Y.useImperativeHandle=function(t,e,n){return tt.current.useImperativeHandle(t,e,n)};Y.useInsertionEffect=function(t,e){return tt.current.useInsertionEffect(t,e)};Y.useLayoutEffect=function(t,e){return tt.current.useLayoutEffect(t,e)};Y.useMemo=function(t,e){return tt.current.useMemo(t,e)};Y.useReducer=function(t,e,n){return tt.current.useReducer(t,e,n)};Y.useRef=function(t){return tt.current.useRef(t)};Y.useState=function(t){return tt.current.useState(t)};Y.useSyncExternalStore=function(t,e,n){return tt.current.useSyncExternalStore(t,e,n)};Y.useTransition=function(){return tt.current.useTransition()};Y.version="18.3.1";qm.exports=Y;var ar=qm.exports;const Gl=RE(ar);var Ou={},tg={exports:{}},pt={},ng={exports:{}},rg={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(z,q){var G=z.length;z.push(q);e:for(;0<G;){var de=G-1>>>1,se=z[de];if(0<i(se,q))z[de]=q,z[G]=se,G=de;else break e}}function n(z){return z.length===0?null:z[0]}function r(z){if(z.length===0)return null;var q=z[0],G=z.pop();if(G!==q){z[0]=G;e:for(var de=0,se=z.length,Ee=se>>>1;de<Ee;){var Ht=2*(de+1)-1,Wt=z[Ht],qt=Ht+1,Kt=z[qt];if(0>i(Wt,G))qt<se&&0>i(Kt,Wt)?(z[de]=Kt,z[qt]=G,de=qt):(z[de]=Wt,z[Ht]=G,de=Ht);else if(qt<se&&0>i(Kt,G))z[de]=Kt,z[qt]=G,de=qt;else break e}}return q}function i(z,q){var G=z.sortIndex-q.sortIndex;return G!==0?G:z.id-q.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var a=Date,l=a.now();t.unstable_now=function(){return a.now()-l}}var u=[],d=[],f=1,g=null,v=3,k=!1,N=!1,O=!1,L=typeof setTimeout=="function"?setTimeout:null,I=typeof clearTimeout=="function"?clearTimeout:null,E=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function S(z){for(var q=n(d);q!==null;){if(q.callback===null)r(d);else if(q.startTime<=z)r(d),q.sortIndex=q.expirationTime,e(u,q);else break;q=n(d)}}function D(z){if(O=!1,S(z),!N)if(n(u)!==null)N=!0,Oi(U);else{var q=n(d);q!==null&&$t(D,q.startTime-z)}}function U(z,q){N=!1,O&&(O=!1,I(m),m=-1),k=!0;var G=v;try{for(S(q),g=n(u);g!==null&&(!(g.expirationTime>q)||z&&!A());){var de=g.callback;if(typeof de=="function"){g.callback=null,v=g.priorityLevel;var se=de(g.expirationTime<=q);q=t.unstable_now(),typeof se=="function"?g.callback=se:g===n(u)&&r(u),S(q)}else r(u);g=n(u)}if(g!==null)var Ee=!0;else{var Ht=n(d);Ht!==null&&$t(D,Ht.startTime-q),Ee=!1}return Ee}finally{g=null,v=G,k=!1}}var F=!1,_=null,m=-1,y=5,w=-1;function A(){return!(t.unstable_now()-w<y)}function C(){if(_!==null){var z=t.unstable_now();w=z;var q=!0;try{q=_(!0,z)}finally{q?T():(F=!1,_=null)}}else F=!1}var T;if(typeof E=="function")T=function(){E(C)};else if(typeof MessageChannel<"u"){var gt=new MessageChannel,Zn=gt.port2;gt.port1.onmessage=C,T=function(){Zn.postMessage(null)}}else T=function(){L(C,0)};function Oi(z){_=z,F||(F=!0,T())}function $t(z,q){m=L(function(){z(t.unstable_now())},q)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(z){z.callback=null},t.unstable_continueExecution=function(){N||k||(N=!0,Oi(U))},t.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):y=0<z?Math.floor(1e3/z):5},t.unstable_getCurrentPriorityLevel=function(){return v},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function(z){switch(v){case 1:case 2:case 3:var q=3;break;default:q=v}var G=v;v=q;try{return z()}finally{v=G}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(z,q){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var G=v;v=z;try{return q()}finally{v=G}},t.unstable_scheduleCallback=function(z,q,G){var de=t.unstable_now();switch(typeof G=="object"&&G!==null?(G=G.delay,G=typeof G=="number"&&0<G?de+G:de):G=de,z){case 1:var se=-1;break;case 2:se=250;break;case 5:se=1073741823;break;case 4:se=1e4;break;default:se=5e3}return se=G+se,z={id:f++,callback:q,priorityLevel:z,startTime:G,expirationTime:se,sortIndex:-1},G>de?(z.sortIndex=G,e(d,z),n(u)===null&&z===n(d)&&(O?(I(m),m=-1):O=!0,$t(D,G-de))):(z.sortIndex=se,e(u,z),N||k||(N=!0,Oi(U))),z},t.unstable_shouldYield=A,t.unstable_wrapCallback=function(z){var q=v;return function(){var G=v;v=q;try{return z.apply(this,arguments)}finally{v=G}}}})(rg);ng.exports=rg;var BE=ng.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $E=ar,ft=BE;function x(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var ig=new Set,Ts={};function Cr(t,e){ui(t,e),ui(t+"Capture",e)}function ui(t,e){for(Ts[t]=e,t=0;t<e.length;t++)ig.add(e[t])}var on=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Vu=Object.prototype.hasOwnProperty,HE=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Pf={},Nf={};function WE(t){return Vu.call(Nf,t)?!0:Vu.call(Pf,t)?!1:HE.test(t)?Nf[t]=!0:(Pf[t]=!0,!1)}function qE(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function KE(t,e,n,r){if(e===null||typeof e>"u"||qE(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function nt(t,e,n,r,i,s,a){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=a}var Fe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Fe[t]=new nt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Fe[e]=new nt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Fe[t]=new nt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Fe[t]=new nt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Fe[t]=new nt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Fe[t]=new nt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Fe[t]=new nt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Fe[t]=new nt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Fe[t]=new nt(t,5,!1,t.toLowerCase(),null,!1,!1)});var Zc=/[\-:]([a-z])/g;function eh(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Zc,eh);Fe[e]=new nt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Zc,eh);Fe[e]=new nt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Zc,eh);Fe[e]=new nt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Fe[t]=new nt(t,1,!1,t.toLowerCase(),null,!1,!1)});Fe.xlinkHref=new nt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Fe[t]=new nt(t,1,!1,t.toLowerCase(),null,!0,!0)});function th(t,e,n,r){var i=Fe.hasOwnProperty(e)?Fe[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(KE(e,n,i,r)&&(n=null),r||i===null?WE(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var pn=$E.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ro=Symbol.for("react.element"),br=Symbol.for("react.portal"),zr=Symbol.for("react.fragment"),nh=Symbol.for("react.strict_mode"),xu=Symbol.for("react.profiler"),sg=Symbol.for("react.provider"),og=Symbol.for("react.context"),rh=Symbol.for("react.forward_ref"),Lu=Symbol.for("react.suspense"),Mu=Symbol.for("react.suspense_list"),ih=Symbol.for("react.memo"),wn=Symbol.for("react.lazy"),ag=Symbol.for("react.offscreen"),Df=Symbol.iterator;function qi(t){return t===null||typeof t!="object"?null:(t=Df&&t[Df]||t["@@iterator"],typeof t=="function"?t:null)}var me=Object.assign,Ql;function ts(t){if(Ql===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Ql=e&&e[1]||""}return`
`+Ql+t}var Yl=!1;function Xl(t,e){if(!t||Yl)return"";Yl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(d){var r=d}Reflect.construct(t,[],e)}else{try{e.call()}catch(d){r=d}t.call(e.prototype)}else{try{throw Error()}catch(d){r=d}t()}}catch(d){if(d&&r&&typeof d.stack=="string"){for(var i=d.stack.split(`
`),s=r.stack.split(`
`),a=i.length-1,l=s.length-1;1<=a&&0<=l&&i[a]!==s[l];)l--;for(;1<=a&&0<=l;a--,l--)if(i[a]!==s[l]){if(a!==1||l!==1)do if(a--,l--,0>l||i[a]!==s[l]){var u=`
`+i[a].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=a&&0<=l);break}}}finally{Yl=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?ts(t):""}function GE(t){switch(t.tag){case 5:return ts(t.type);case 16:return ts("Lazy");case 13:return ts("Suspense");case 19:return ts("SuspenseList");case 0:case 2:case 15:return t=Xl(t.type,!1),t;case 11:return t=Xl(t.type.render,!1),t;case 1:return t=Xl(t.type,!0),t;default:return""}}function Fu(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case zr:return"Fragment";case br:return"Portal";case xu:return"Profiler";case nh:return"StrictMode";case Lu:return"Suspense";case Mu:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case og:return(t.displayName||"Context")+".Consumer";case sg:return(t._context.displayName||"Context")+".Provider";case rh:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case ih:return e=t.displayName||null,e!==null?e:Fu(t.type)||"Memo";case wn:e=t._payload,t=t._init;try{return Fu(t(e))}catch{}}return null}function QE(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Fu(e);case 8:return e===nh?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Wn(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function lg(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function YE(t){var e=lg(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(a){r=""+a,s.call(this,a)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function ko(t){t._valueTracker||(t._valueTracker=YE(t))}function ug(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=lg(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function da(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Uu(t,e){var n=e.checked;return me({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Of(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Wn(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function cg(t,e){e=e.checked,e!=null&&th(t,"checked",e,!1)}function bu(t,e){cg(t,e);var n=Wn(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?zu(t,e.type,n):e.hasOwnProperty("defaultValue")&&zu(t,e.type,Wn(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Vf(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function zu(t,e,n){(e!=="number"||da(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var ns=Array.isArray;function Jr(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Wn(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function ju(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(x(91));return me({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function xf(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(x(92));if(ns(n)){if(1<n.length)throw Error(x(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Wn(n)}}function hg(t,e){var n=Wn(e.value),r=Wn(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Lf(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function dg(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Bu(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?dg(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Co,fg=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Co=Co||document.createElement("div"),Co.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Co.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Is(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var ls={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},XE=["Webkit","ms","Moz","O"];Object.keys(ls).forEach(function(t){XE.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),ls[e]=ls[t]})});function pg(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||ls.hasOwnProperty(t)&&ls[t]?(""+e).trim():e+"px"}function mg(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=pg(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var JE=me({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function $u(t,e){if(e){if(JE[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(x(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(x(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(x(61))}if(e.style!=null&&typeof e.style!="object")throw Error(x(62))}}function Hu(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Wu=null;function sh(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var qu=null,Zr=null,ei=null;function Mf(t){if(t=Qs(t)){if(typeof qu!="function")throw Error(x(280));var e=t.stateNode;e&&(e=el(e),qu(t.stateNode,t.type,e))}}function gg(t){Zr?ei?ei.push(t):ei=[t]:Zr=t}function yg(){if(Zr){var t=Zr,e=ei;if(ei=Zr=null,Mf(t),e)for(t=0;t<e.length;t++)Mf(e[t])}}function vg(t,e){return t(e)}function _g(){}var Jl=!1;function Eg(t,e,n){if(Jl)return t(e,n);Jl=!0;try{return vg(t,e,n)}finally{Jl=!1,(Zr!==null||ei!==null)&&(_g(),yg())}}function Ss(t,e){var n=t.stateNode;if(n===null)return null;var r=el(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(x(231,e,typeof n));return n}var Ku=!1;if(on)try{var Ki={};Object.defineProperty(Ki,"passive",{get:function(){Ku=!0}}),window.addEventListener("test",Ki,Ki),window.removeEventListener("test",Ki,Ki)}catch{Ku=!1}function ZE(t,e,n,r,i,s,a,l,u){var d=Array.prototype.slice.call(arguments,3);try{e.apply(n,d)}catch(f){this.onError(f)}}var us=!1,fa=null,pa=!1,Gu=null,ew={onError:function(t){us=!0,fa=t}};function tw(t,e,n,r,i,s,a,l,u){us=!1,fa=null,ZE.apply(ew,arguments)}function nw(t,e,n,r,i,s,a,l,u){if(tw.apply(this,arguments),us){if(us){var d=fa;us=!1,fa=null}else throw Error(x(198));pa||(pa=!0,Gu=d)}}function Pr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function wg(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Ff(t){if(Pr(t)!==t)throw Error(x(188))}function rw(t){var e=t.alternate;if(!e){if(e=Pr(t),e===null)throw Error(x(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Ff(i),t;if(s===r)return Ff(i),e;s=s.sibling}throw Error(x(188))}if(n.return!==r.return)n=i,r=s;else{for(var a=!1,l=i.child;l;){if(l===n){a=!0,n=i,r=s;break}if(l===r){a=!0,r=i,n=s;break}l=l.sibling}if(!a){for(l=s.child;l;){if(l===n){a=!0,n=s,r=i;break}if(l===r){a=!0,r=s,n=i;break}l=l.sibling}if(!a)throw Error(x(189))}}if(n.alternate!==r)throw Error(x(190))}if(n.tag!==3)throw Error(x(188));return n.stateNode.current===n?t:e}function Tg(t){return t=rw(t),t!==null?Ig(t):null}function Ig(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Ig(t);if(e!==null)return e;t=t.sibling}return null}var Sg=ft.unstable_scheduleCallback,Uf=ft.unstable_cancelCallback,iw=ft.unstable_shouldYield,sw=ft.unstable_requestPaint,Te=ft.unstable_now,ow=ft.unstable_getCurrentPriorityLevel,oh=ft.unstable_ImmediatePriority,Ag=ft.unstable_UserBlockingPriority,ma=ft.unstable_NormalPriority,aw=ft.unstable_LowPriority,Rg=ft.unstable_IdlePriority,Ya=null,Mt=null;function lw(t){if(Mt&&typeof Mt.onCommitFiberRoot=="function")try{Mt.onCommitFiberRoot(Ya,t,void 0,(t.current.flags&128)===128)}catch{}}var Pt=Math.clz32?Math.clz32:hw,uw=Math.log,cw=Math.LN2;function hw(t){return t>>>=0,t===0?32:31-(uw(t)/cw|0)|0}var Po=64,No=4194304;function rs(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function ga(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,a=n&268435455;if(a!==0){var l=a&~i;l!==0?r=rs(l):(s&=a,s!==0&&(r=rs(s)))}else a=n&~i,a!==0?r=rs(a):s!==0&&(r=rs(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Pt(e),i=1<<n,r|=t[n],e&=~i;return r}function dw(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function fw(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var a=31-Pt(s),l=1<<a,u=i[a];u===-1?(!(l&n)||l&r)&&(i[a]=dw(l,e)):u<=e&&(t.expiredLanes|=l),s&=~l}}function Qu(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function kg(){var t=Po;return Po<<=1,!(Po&4194240)&&(Po=64),t}function Zl(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Ks(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Pt(e),t[e]=n}function pw(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-Pt(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function ah(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Pt(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var ie=0;function Cg(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Pg,lh,Ng,Dg,Og,Yu=!1,Do=[],xn=null,Ln=null,Mn=null,As=new Map,Rs=new Map,In=[],mw="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function bf(t,e){switch(t){case"focusin":case"focusout":xn=null;break;case"dragenter":case"dragleave":Ln=null;break;case"mouseover":case"mouseout":Mn=null;break;case"pointerover":case"pointerout":As.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Rs.delete(e.pointerId)}}function Gi(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Qs(e),e!==null&&lh(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function gw(t,e,n,r,i){switch(e){case"focusin":return xn=Gi(xn,t,e,n,r,i),!0;case"dragenter":return Ln=Gi(Ln,t,e,n,r,i),!0;case"mouseover":return Mn=Gi(Mn,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return As.set(s,Gi(As.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Rs.set(s,Gi(Rs.get(s)||null,t,e,n,r,i)),!0}return!1}function Vg(t){var e=lr(t.target);if(e!==null){var n=Pr(e);if(n!==null){if(e=n.tag,e===13){if(e=wg(n),e!==null){t.blockedOn=e,Og(t.priority,function(){Ng(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Qo(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Xu(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Wu=r,n.target.dispatchEvent(r),Wu=null}else return e=Qs(n),e!==null&&lh(e),t.blockedOn=n,!1;e.shift()}return!0}function zf(t,e,n){Qo(t)&&n.delete(e)}function yw(){Yu=!1,xn!==null&&Qo(xn)&&(xn=null),Ln!==null&&Qo(Ln)&&(Ln=null),Mn!==null&&Qo(Mn)&&(Mn=null),As.forEach(zf),Rs.forEach(zf)}function Qi(t,e){t.blockedOn===e&&(t.blockedOn=null,Yu||(Yu=!0,ft.unstable_scheduleCallback(ft.unstable_NormalPriority,yw)))}function ks(t){function e(i){return Qi(i,t)}if(0<Do.length){Qi(Do[0],t);for(var n=1;n<Do.length;n++){var r=Do[n];r.blockedOn===t&&(r.blockedOn=null)}}for(xn!==null&&Qi(xn,t),Ln!==null&&Qi(Ln,t),Mn!==null&&Qi(Mn,t),As.forEach(e),Rs.forEach(e),n=0;n<In.length;n++)r=In[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<In.length&&(n=In[0],n.blockedOn===null);)Vg(n),n.blockedOn===null&&In.shift()}var ti=pn.ReactCurrentBatchConfig,ya=!0;function vw(t,e,n,r){var i=ie,s=ti.transition;ti.transition=null;try{ie=1,uh(t,e,n,r)}finally{ie=i,ti.transition=s}}function _w(t,e,n,r){var i=ie,s=ti.transition;ti.transition=null;try{ie=4,uh(t,e,n,r)}finally{ie=i,ti.transition=s}}function uh(t,e,n,r){if(ya){var i=Xu(t,e,n,r);if(i===null)uu(t,e,r,va,n),bf(t,r);else if(gw(i,t,e,n,r))r.stopPropagation();else if(bf(t,r),e&4&&-1<mw.indexOf(t)){for(;i!==null;){var s=Qs(i);if(s!==null&&Pg(s),s=Xu(t,e,n,r),s===null&&uu(t,e,r,va,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else uu(t,e,r,null,n)}}var va=null;function Xu(t,e,n,r){if(va=null,t=sh(r),t=lr(t),t!==null)if(e=Pr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=wg(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return va=t,null}function xg(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(ow()){case oh:return 1;case Ag:return 4;case ma:case aw:return 16;case Rg:return 536870912;default:return 16}default:return 16}}var Pn=null,ch=null,Yo=null;function Lg(){if(Yo)return Yo;var t,e=ch,n=e.length,r,i="value"in Pn?Pn.value:Pn.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var a=n-t;for(r=1;r<=a&&e[n-r]===i[s-r];r++);return Yo=i.slice(t,1<r?1-r:void 0)}function Xo(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Oo(){return!0}function jf(){return!1}function mt(t){function e(n,r,i,s,a){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=a,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Oo:jf,this.isPropagationStopped=jf,this}return me(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Oo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Oo)},persist:function(){},isPersistent:Oo}),e}var Ai={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},hh=mt(Ai),Gs=me({},Ai,{view:0,detail:0}),Ew=mt(Gs),eu,tu,Yi,Xa=me({},Gs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:dh,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Yi&&(Yi&&t.type==="mousemove"?(eu=t.screenX-Yi.screenX,tu=t.screenY-Yi.screenY):tu=eu=0,Yi=t),eu)},movementY:function(t){return"movementY"in t?t.movementY:tu}}),Bf=mt(Xa),ww=me({},Xa,{dataTransfer:0}),Tw=mt(ww),Iw=me({},Gs,{relatedTarget:0}),nu=mt(Iw),Sw=me({},Ai,{animationName:0,elapsedTime:0,pseudoElement:0}),Aw=mt(Sw),Rw=me({},Ai,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),kw=mt(Rw),Cw=me({},Ai,{data:0}),$f=mt(Cw),Pw={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Nw={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Dw={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Ow(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Dw[t])?!!e[t]:!1}function dh(){return Ow}var Vw=me({},Gs,{key:function(t){if(t.key){var e=Pw[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Xo(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Nw[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:dh,charCode:function(t){return t.type==="keypress"?Xo(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Xo(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),xw=mt(Vw),Lw=me({},Xa,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Hf=mt(Lw),Mw=me({},Gs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:dh}),Fw=mt(Mw),Uw=me({},Ai,{propertyName:0,elapsedTime:0,pseudoElement:0}),bw=mt(Uw),zw=me({},Xa,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),jw=mt(zw),Bw=[9,13,27,32],fh=on&&"CompositionEvent"in window,cs=null;on&&"documentMode"in document&&(cs=document.documentMode);var $w=on&&"TextEvent"in window&&!cs,Mg=on&&(!fh||cs&&8<cs&&11>=cs),Wf=" ",qf=!1;function Fg(t,e){switch(t){case"keyup":return Bw.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ug(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var jr=!1;function Hw(t,e){switch(t){case"compositionend":return Ug(e);case"keypress":return e.which!==32?null:(qf=!0,Wf);case"textInput":return t=e.data,t===Wf&&qf?null:t;default:return null}}function Ww(t,e){if(jr)return t==="compositionend"||!fh&&Fg(t,e)?(t=Lg(),Yo=ch=Pn=null,jr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Mg&&e.locale!=="ko"?null:e.data;default:return null}}var qw={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Kf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!qw[t.type]:e==="textarea"}function bg(t,e,n,r){gg(r),e=_a(e,"onChange"),0<e.length&&(n=new hh("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var hs=null,Cs=null;function Kw(t){Yg(t,0)}function Ja(t){var e=Hr(t);if(ug(e))return t}function Gw(t,e){if(t==="change")return e}var zg=!1;if(on){var ru;if(on){var iu="oninput"in document;if(!iu){var Gf=document.createElement("div");Gf.setAttribute("oninput","return;"),iu=typeof Gf.oninput=="function"}ru=iu}else ru=!1;zg=ru&&(!document.documentMode||9<document.documentMode)}function Qf(){hs&&(hs.detachEvent("onpropertychange",jg),Cs=hs=null)}function jg(t){if(t.propertyName==="value"&&Ja(Cs)){var e=[];bg(e,Cs,t,sh(t)),Eg(Kw,e)}}function Qw(t,e,n){t==="focusin"?(Qf(),hs=e,Cs=n,hs.attachEvent("onpropertychange",jg)):t==="focusout"&&Qf()}function Yw(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Ja(Cs)}function Xw(t,e){if(t==="click")return Ja(e)}function Jw(t,e){if(t==="input"||t==="change")return Ja(e)}function Zw(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Dt=typeof Object.is=="function"?Object.is:Zw;function Ps(t,e){if(Dt(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Vu.call(e,i)||!Dt(t[i],e[i]))return!1}return!0}function Yf(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Xf(t,e){var n=Yf(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Yf(n)}}function Bg(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Bg(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function $g(){for(var t=window,e=da();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=da(t.document)}return e}function ph(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function e0(t){var e=$g(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Bg(n.ownerDocument.documentElement,n)){if(r!==null&&ph(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=Xf(n,s);var a=Xf(n,r);i&&a&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==a.node||t.focusOffset!==a.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(a.node,a.offset)):(e.setEnd(a.node,a.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var t0=on&&"documentMode"in document&&11>=document.documentMode,Br=null,Ju=null,ds=null,Zu=!1;function Jf(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Zu||Br==null||Br!==da(r)||(r=Br,"selectionStart"in r&&ph(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ds&&Ps(ds,r)||(ds=r,r=_a(Ju,"onSelect"),0<r.length&&(e=new hh("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Br)))}function Vo(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var $r={animationend:Vo("Animation","AnimationEnd"),animationiteration:Vo("Animation","AnimationIteration"),animationstart:Vo("Animation","AnimationStart"),transitionend:Vo("Transition","TransitionEnd")},su={},Hg={};on&&(Hg=document.createElement("div").style,"AnimationEvent"in window||(delete $r.animationend.animation,delete $r.animationiteration.animation,delete $r.animationstart.animation),"TransitionEvent"in window||delete $r.transitionend.transition);function Za(t){if(su[t])return su[t];if(!$r[t])return t;var e=$r[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Hg)return su[t]=e[n];return t}var Wg=Za("animationend"),qg=Za("animationiteration"),Kg=Za("animationstart"),Gg=Za("transitionend"),Qg=new Map,Zf="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Yn(t,e){Qg.set(t,e),Cr(e,[t])}for(var ou=0;ou<Zf.length;ou++){var au=Zf[ou],n0=au.toLowerCase(),r0=au[0].toUpperCase()+au.slice(1);Yn(n0,"on"+r0)}Yn(Wg,"onAnimationEnd");Yn(qg,"onAnimationIteration");Yn(Kg,"onAnimationStart");Yn("dblclick","onDoubleClick");Yn("focusin","onFocus");Yn("focusout","onBlur");Yn(Gg,"onTransitionEnd");ui("onMouseEnter",["mouseout","mouseover"]);ui("onMouseLeave",["mouseout","mouseover"]);ui("onPointerEnter",["pointerout","pointerover"]);ui("onPointerLeave",["pointerout","pointerover"]);Cr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Cr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Cr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Cr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Cr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Cr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var is="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),i0=new Set("cancel close invalid load scroll toggle".split(" ").concat(is));function ep(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,nw(r,e,void 0,t),t.currentTarget=null}function Yg(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var a=r.length-1;0<=a;a--){var l=r[a],u=l.instance,d=l.currentTarget;if(l=l.listener,u!==s&&i.isPropagationStopped())break e;ep(i,l,d),s=u}else for(a=0;a<r.length;a++){if(l=r[a],u=l.instance,d=l.currentTarget,l=l.listener,u!==s&&i.isPropagationStopped())break e;ep(i,l,d),s=u}}}if(pa)throw t=Gu,pa=!1,Gu=null,t}function ue(t,e){var n=e[ic];n===void 0&&(n=e[ic]=new Set);var r=t+"__bubble";n.has(r)||(Xg(e,t,2,!1),n.add(r))}function lu(t,e,n){var r=0;e&&(r|=4),Xg(n,t,r,e)}var xo="_reactListening"+Math.random().toString(36).slice(2);function Ns(t){if(!t[xo]){t[xo]=!0,ig.forEach(function(n){n!=="selectionchange"&&(i0.has(n)||lu(n,!1,t),lu(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[xo]||(e[xo]=!0,lu("selectionchange",!1,e))}}function Xg(t,e,n,r){switch(xg(e)){case 1:var i=vw;break;case 4:i=_w;break;default:i=uh}n=i.bind(null,e,n,t),i=void 0,!Ku||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function uu(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(a===4)for(a=r.return;a!==null;){var u=a.tag;if((u===3||u===4)&&(u=a.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;a=a.return}for(;l!==null;){if(a=lr(l),a===null)return;if(u=a.tag,u===5||u===6){r=s=a;continue e}l=l.parentNode}}r=r.return}Eg(function(){var d=s,f=sh(n),g=[];e:{var v=Qg.get(t);if(v!==void 0){var k=hh,N=t;switch(t){case"keypress":if(Xo(n)===0)break e;case"keydown":case"keyup":k=xw;break;case"focusin":N="focus",k=nu;break;case"focusout":N="blur",k=nu;break;case"beforeblur":case"afterblur":k=nu;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":k=Bf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":k=Tw;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":k=Fw;break;case Wg:case qg:case Kg:k=Aw;break;case Gg:k=bw;break;case"scroll":k=Ew;break;case"wheel":k=jw;break;case"copy":case"cut":case"paste":k=kw;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":k=Hf}var O=(e&4)!==0,L=!O&&t==="scroll",I=O?v!==null?v+"Capture":null:v;O=[];for(var E=d,S;E!==null;){S=E;var D=S.stateNode;if(S.tag===5&&D!==null&&(S=D,I!==null&&(D=Ss(E,I),D!=null&&O.push(Ds(E,D,S)))),L)break;E=E.return}0<O.length&&(v=new k(v,N,null,n,f),g.push({event:v,listeners:O}))}}if(!(e&7)){e:{if(v=t==="mouseover"||t==="pointerover",k=t==="mouseout"||t==="pointerout",v&&n!==Wu&&(N=n.relatedTarget||n.fromElement)&&(lr(N)||N[an]))break e;if((k||v)&&(v=f.window===f?f:(v=f.ownerDocument)?v.defaultView||v.parentWindow:window,k?(N=n.relatedTarget||n.toElement,k=d,N=N?lr(N):null,N!==null&&(L=Pr(N),N!==L||N.tag!==5&&N.tag!==6)&&(N=null)):(k=null,N=d),k!==N)){if(O=Bf,D="onMouseLeave",I="onMouseEnter",E="mouse",(t==="pointerout"||t==="pointerover")&&(O=Hf,D="onPointerLeave",I="onPointerEnter",E="pointer"),L=k==null?v:Hr(k),S=N==null?v:Hr(N),v=new O(D,E+"leave",k,n,f),v.target=L,v.relatedTarget=S,D=null,lr(f)===d&&(O=new O(I,E+"enter",N,n,f),O.target=S,O.relatedTarget=L,D=O),L=D,k&&N)t:{for(O=k,I=N,E=0,S=O;S;S=Lr(S))E++;for(S=0,D=I;D;D=Lr(D))S++;for(;0<E-S;)O=Lr(O),E--;for(;0<S-E;)I=Lr(I),S--;for(;E--;){if(O===I||I!==null&&O===I.alternate)break t;O=Lr(O),I=Lr(I)}O=null}else O=null;k!==null&&tp(g,v,k,O,!1),N!==null&&L!==null&&tp(g,L,N,O,!0)}}e:{if(v=d?Hr(d):window,k=v.nodeName&&v.nodeName.toLowerCase(),k==="select"||k==="input"&&v.type==="file")var U=Gw;else if(Kf(v))if(zg)U=Jw;else{U=Yw;var F=Qw}else(k=v.nodeName)&&k.toLowerCase()==="input"&&(v.type==="checkbox"||v.type==="radio")&&(U=Xw);if(U&&(U=U(t,d))){bg(g,U,n,f);break e}F&&F(t,v,d),t==="focusout"&&(F=v._wrapperState)&&F.controlled&&v.type==="number"&&zu(v,"number",v.value)}switch(F=d?Hr(d):window,t){case"focusin":(Kf(F)||F.contentEditable==="true")&&(Br=F,Ju=d,ds=null);break;case"focusout":ds=Ju=Br=null;break;case"mousedown":Zu=!0;break;case"contextmenu":case"mouseup":case"dragend":Zu=!1,Jf(g,n,f);break;case"selectionchange":if(t0)break;case"keydown":case"keyup":Jf(g,n,f)}var _;if(fh)e:{switch(t){case"compositionstart":var m="onCompositionStart";break e;case"compositionend":m="onCompositionEnd";break e;case"compositionupdate":m="onCompositionUpdate";break e}m=void 0}else jr?Fg(t,n)&&(m="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(m="onCompositionStart");m&&(Mg&&n.locale!=="ko"&&(jr||m!=="onCompositionStart"?m==="onCompositionEnd"&&jr&&(_=Lg()):(Pn=f,ch="value"in Pn?Pn.value:Pn.textContent,jr=!0)),F=_a(d,m),0<F.length&&(m=new $f(m,t,null,n,f),g.push({event:m,listeners:F}),_?m.data=_:(_=Ug(n),_!==null&&(m.data=_)))),(_=$w?Hw(t,n):Ww(t,n))&&(d=_a(d,"onBeforeInput"),0<d.length&&(f=new $f("onBeforeInput","beforeinput",null,n,f),g.push({event:f,listeners:d}),f.data=_))}Yg(g,e)})}function Ds(t,e,n){return{instance:t,listener:e,currentTarget:n}}function _a(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Ss(t,n),s!=null&&r.unshift(Ds(t,s,i)),s=Ss(t,e),s!=null&&r.push(Ds(t,s,i))),t=t.return}return r}function Lr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function tp(t,e,n,r,i){for(var s=e._reactName,a=[];n!==null&&n!==r;){var l=n,u=l.alternate,d=l.stateNode;if(u!==null&&u===r)break;l.tag===5&&d!==null&&(l=d,i?(u=Ss(n,s),u!=null&&a.unshift(Ds(n,u,l))):i||(u=Ss(n,s),u!=null&&a.push(Ds(n,u,l)))),n=n.return}a.length!==0&&t.push({event:e,listeners:a})}var s0=/\r\n?/g,o0=/\u0000|\uFFFD/g;function np(t){return(typeof t=="string"?t:""+t).replace(s0,`
`).replace(o0,"")}function Lo(t,e,n){if(e=np(e),np(t)!==e&&n)throw Error(x(425))}function Ea(){}var ec=null,tc=null;function nc(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var rc=typeof setTimeout=="function"?setTimeout:void 0,a0=typeof clearTimeout=="function"?clearTimeout:void 0,rp=typeof Promise=="function"?Promise:void 0,l0=typeof queueMicrotask=="function"?queueMicrotask:typeof rp<"u"?function(t){return rp.resolve(null).then(t).catch(u0)}:rc;function u0(t){setTimeout(function(){throw t})}function cu(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),ks(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);ks(e)}function Fn(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function ip(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Ri=Math.random().toString(36).slice(2),xt="__reactFiber$"+Ri,Os="__reactProps$"+Ri,an="__reactContainer$"+Ri,ic="__reactEvents$"+Ri,c0="__reactListeners$"+Ri,h0="__reactHandles$"+Ri;function lr(t){var e=t[xt];if(e)return e;for(var n=t.parentNode;n;){if(e=n[an]||n[xt]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=ip(t);t!==null;){if(n=t[xt])return n;t=ip(t)}return e}t=n,n=t.parentNode}return null}function Qs(t){return t=t[xt]||t[an],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Hr(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(x(33))}function el(t){return t[Os]||null}var sc=[],Wr=-1;function Xn(t){return{current:t}}function ce(t){0>Wr||(t.current=sc[Wr],sc[Wr]=null,Wr--)}function ae(t,e){Wr++,sc[Wr]=t.current,t.current=e}var qn={},Ge=Xn(qn),st=Xn(!1),vr=qn;function ci(t,e){var n=t.type.contextTypes;if(!n)return qn;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function ot(t){return t=t.childContextTypes,t!=null}function wa(){ce(st),ce(Ge)}function sp(t,e,n){if(Ge.current!==qn)throw Error(x(168));ae(Ge,e),ae(st,n)}function Jg(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(x(108,QE(t)||"Unknown",i));return me({},n,r)}function Ta(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||qn,vr=Ge.current,ae(Ge,t),ae(st,st.current),!0}function op(t,e,n){var r=t.stateNode;if(!r)throw Error(x(169));n?(t=Jg(t,e,vr),r.__reactInternalMemoizedMergedChildContext=t,ce(st),ce(Ge),ae(Ge,t)):ce(st),ae(st,n)}var Xt=null,tl=!1,hu=!1;function Zg(t){Xt===null?Xt=[t]:Xt.push(t)}function d0(t){tl=!0,Zg(t)}function Jn(){if(!hu&&Xt!==null){hu=!0;var t=0,e=ie;try{var n=Xt;for(ie=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Xt=null,tl=!1}catch(i){throw Xt!==null&&(Xt=Xt.slice(t+1)),Sg(oh,Jn),i}finally{ie=e,hu=!1}}return null}var qr=[],Kr=0,Ia=null,Sa=0,vt=[],_t=0,_r=null,Jt=1,Zt="";function ir(t,e){qr[Kr++]=Sa,qr[Kr++]=Ia,Ia=t,Sa=e}function ey(t,e,n){vt[_t++]=Jt,vt[_t++]=Zt,vt[_t++]=_r,_r=t;var r=Jt;t=Zt;var i=32-Pt(r)-1;r&=~(1<<i),n+=1;var s=32-Pt(e)+i;if(30<s){var a=i-i%5;s=(r&(1<<a)-1).toString(32),r>>=a,i-=a,Jt=1<<32-Pt(e)+i|n<<i|r,Zt=s+t}else Jt=1<<s|n<<i|r,Zt=t}function mh(t){t.return!==null&&(ir(t,1),ey(t,1,0))}function gh(t){for(;t===Ia;)Ia=qr[--Kr],qr[Kr]=null,Sa=qr[--Kr],qr[Kr]=null;for(;t===_r;)_r=vt[--_t],vt[_t]=null,Zt=vt[--_t],vt[_t]=null,Jt=vt[--_t],vt[_t]=null}var dt=null,ht=null,he=!1,Ct=null;function ty(t,e){var n=Et(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function ap(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,dt=t,ht=Fn(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,dt=t,ht=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=_r!==null?{id:Jt,overflow:Zt}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Et(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,dt=t,ht=null,!0):!1;default:return!1}}function oc(t){return(t.mode&1)!==0&&(t.flags&128)===0}function ac(t){if(he){var e=ht;if(e){var n=e;if(!ap(t,e)){if(oc(t))throw Error(x(418));e=Fn(n.nextSibling);var r=dt;e&&ap(t,e)?ty(r,n):(t.flags=t.flags&-4097|2,he=!1,dt=t)}}else{if(oc(t))throw Error(x(418));t.flags=t.flags&-4097|2,he=!1,dt=t}}}function lp(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;dt=t}function Mo(t){if(t!==dt)return!1;if(!he)return lp(t),he=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!nc(t.type,t.memoizedProps)),e&&(e=ht)){if(oc(t))throw ny(),Error(x(418));for(;e;)ty(t,e),e=Fn(e.nextSibling)}if(lp(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(x(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){ht=Fn(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}ht=null}}else ht=dt?Fn(t.stateNode.nextSibling):null;return!0}function ny(){for(var t=ht;t;)t=Fn(t.nextSibling)}function hi(){ht=dt=null,he=!1}function yh(t){Ct===null?Ct=[t]:Ct.push(t)}var f0=pn.ReactCurrentBatchConfig;function Xi(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(x(309));var r=n.stateNode}if(!r)throw Error(x(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(a){var l=i.refs;a===null?delete l[s]:l[s]=a},e._stringRef=s,e)}if(typeof t!="string")throw Error(x(284));if(!n._owner)throw Error(x(290,t))}return t}function Fo(t,e){throw t=Object.prototype.toString.call(e),Error(x(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function up(t){var e=t._init;return e(t._payload)}function ry(t){function e(I,E){if(t){var S=I.deletions;S===null?(I.deletions=[E],I.flags|=16):S.push(E)}}function n(I,E){if(!t)return null;for(;E!==null;)e(I,E),E=E.sibling;return null}function r(I,E){for(I=new Map;E!==null;)E.key!==null?I.set(E.key,E):I.set(E.index,E),E=E.sibling;return I}function i(I,E){return I=jn(I,E),I.index=0,I.sibling=null,I}function s(I,E,S){return I.index=S,t?(S=I.alternate,S!==null?(S=S.index,S<E?(I.flags|=2,E):S):(I.flags|=2,E)):(I.flags|=1048576,E)}function a(I){return t&&I.alternate===null&&(I.flags|=2),I}function l(I,E,S,D){return E===null||E.tag!==6?(E=vu(S,I.mode,D),E.return=I,E):(E=i(E,S),E.return=I,E)}function u(I,E,S,D){var U=S.type;return U===zr?f(I,E,S.props.children,D,S.key):E!==null&&(E.elementType===U||typeof U=="object"&&U!==null&&U.$$typeof===wn&&up(U)===E.type)?(D=i(E,S.props),D.ref=Xi(I,E,S),D.return=I,D):(D=ia(S.type,S.key,S.props,null,I.mode,D),D.ref=Xi(I,E,S),D.return=I,D)}function d(I,E,S,D){return E===null||E.tag!==4||E.stateNode.containerInfo!==S.containerInfo||E.stateNode.implementation!==S.implementation?(E=_u(S,I.mode,D),E.return=I,E):(E=i(E,S.children||[]),E.return=I,E)}function f(I,E,S,D,U){return E===null||E.tag!==7?(E=fr(S,I.mode,D,U),E.return=I,E):(E=i(E,S),E.return=I,E)}function g(I,E,S){if(typeof E=="string"&&E!==""||typeof E=="number")return E=vu(""+E,I.mode,S),E.return=I,E;if(typeof E=="object"&&E!==null){switch(E.$$typeof){case Ro:return S=ia(E.type,E.key,E.props,null,I.mode,S),S.ref=Xi(I,null,E),S.return=I,S;case br:return E=_u(E,I.mode,S),E.return=I,E;case wn:var D=E._init;return g(I,D(E._payload),S)}if(ns(E)||qi(E))return E=fr(E,I.mode,S,null),E.return=I,E;Fo(I,E)}return null}function v(I,E,S,D){var U=E!==null?E.key:null;if(typeof S=="string"&&S!==""||typeof S=="number")return U!==null?null:l(I,E,""+S,D);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Ro:return S.key===U?u(I,E,S,D):null;case br:return S.key===U?d(I,E,S,D):null;case wn:return U=S._init,v(I,E,U(S._payload),D)}if(ns(S)||qi(S))return U!==null?null:f(I,E,S,D,null);Fo(I,S)}return null}function k(I,E,S,D,U){if(typeof D=="string"&&D!==""||typeof D=="number")return I=I.get(S)||null,l(E,I,""+D,U);if(typeof D=="object"&&D!==null){switch(D.$$typeof){case Ro:return I=I.get(D.key===null?S:D.key)||null,u(E,I,D,U);case br:return I=I.get(D.key===null?S:D.key)||null,d(E,I,D,U);case wn:var F=D._init;return k(I,E,S,F(D._payload),U)}if(ns(D)||qi(D))return I=I.get(S)||null,f(E,I,D,U,null);Fo(E,D)}return null}function N(I,E,S,D){for(var U=null,F=null,_=E,m=E=0,y=null;_!==null&&m<S.length;m++){_.index>m?(y=_,_=null):y=_.sibling;var w=v(I,_,S[m],D);if(w===null){_===null&&(_=y);break}t&&_&&w.alternate===null&&e(I,_),E=s(w,E,m),F===null?U=w:F.sibling=w,F=w,_=y}if(m===S.length)return n(I,_),he&&ir(I,m),U;if(_===null){for(;m<S.length;m++)_=g(I,S[m],D),_!==null&&(E=s(_,E,m),F===null?U=_:F.sibling=_,F=_);return he&&ir(I,m),U}for(_=r(I,_);m<S.length;m++)y=k(_,I,m,S[m],D),y!==null&&(t&&y.alternate!==null&&_.delete(y.key===null?m:y.key),E=s(y,E,m),F===null?U=y:F.sibling=y,F=y);return t&&_.forEach(function(A){return e(I,A)}),he&&ir(I,m),U}function O(I,E,S,D){var U=qi(S);if(typeof U!="function")throw Error(x(150));if(S=U.call(S),S==null)throw Error(x(151));for(var F=U=null,_=E,m=E=0,y=null,w=S.next();_!==null&&!w.done;m++,w=S.next()){_.index>m?(y=_,_=null):y=_.sibling;var A=v(I,_,w.value,D);if(A===null){_===null&&(_=y);break}t&&_&&A.alternate===null&&e(I,_),E=s(A,E,m),F===null?U=A:F.sibling=A,F=A,_=y}if(w.done)return n(I,_),he&&ir(I,m),U;if(_===null){for(;!w.done;m++,w=S.next())w=g(I,w.value,D),w!==null&&(E=s(w,E,m),F===null?U=w:F.sibling=w,F=w);return he&&ir(I,m),U}for(_=r(I,_);!w.done;m++,w=S.next())w=k(_,I,m,w.value,D),w!==null&&(t&&w.alternate!==null&&_.delete(w.key===null?m:w.key),E=s(w,E,m),F===null?U=w:F.sibling=w,F=w);return t&&_.forEach(function(C){return e(I,C)}),he&&ir(I,m),U}function L(I,E,S,D){if(typeof S=="object"&&S!==null&&S.type===zr&&S.key===null&&(S=S.props.children),typeof S=="object"&&S!==null){switch(S.$$typeof){case Ro:e:{for(var U=S.key,F=E;F!==null;){if(F.key===U){if(U=S.type,U===zr){if(F.tag===7){n(I,F.sibling),E=i(F,S.props.children),E.return=I,I=E;break e}}else if(F.elementType===U||typeof U=="object"&&U!==null&&U.$$typeof===wn&&up(U)===F.type){n(I,F.sibling),E=i(F,S.props),E.ref=Xi(I,F,S),E.return=I,I=E;break e}n(I,F);break}else e(I,F);F=F.sibling}S.type===zr?(E=fr(S.props.children,I.mode,D,S.key),E.return=I,I=E):(D=ia(S.type,S.key,S.props,null,I.mode,D),D.ref=Xi(I,E,S),D.return=I,I=D)}return a(I);case br:e:{for(F=S.key;E!==null;){if(E.key===F)if(E.tag===4&&E.stateNode.containerInfo===S.containerInfo&&E.stateNode.implementation===S.implementation){n(I,E.sibling),E=i(E,S.children||[]),E.return=I,I=E;break e}else{n(I,E);break}else e(I,E);E=E.sibling}E=_u(S,I.mode,D),E.return=I,I=E}return a(I);case wn:return F=S._init,L(I,E,F(S._payload),D)}if(ns(S))return N(I,E,S,D);if(qi(S))return O(I,E,S,D);Fo(I,S)}return typeof S=="string"&&S!==""||typeof S=="number"?(S=""+S,E!==null&&E.tag===6?(n(I,E.sibling),E=i(E,S),E.return=I,I=E):(n(I,E),E=vu(S,I.mode,D),E.return=I,I=E),a(I)):n(I,E)}return L}var di=ry(!0),iy=ry(!1),Aa=Xn(null),Ra=null,Gr=null,vh=null;function _h(){vh=Gr=Ra=null}function Eh(t){var e=Aa.current;ce(Aa),t._currentValue=e}function lc(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function ni(t,e){Ra=t,vh=Gr=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(it=!0),t.firstContext=null)}function Tt(t){var e=t._currentValue;if(vh!==t)if(t={context:t,memoizedValue:e,next:null},Gr===null){if(Ra===null)throw Error(x(308));Gr=t,Ra.dependencies={lanes:0,firstContext:t}}else Gr=Gr.next=t;return e}var ur=null;function wh(t){ur===null?ur=[t]:ur.push(t)}function sy(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,wh(e)):(n.next=i.next,i.next=n),e.interleaved=n,ln(t,r)}function ln(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Tn=!1;function Th(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function oy(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function rn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Un(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,te&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,ln(t,n)}return i=r.interleaved,i===null?(e.next=e,wh(r)):(e.next=i.next,i.next=e),r.interleaved=e,ln(t,n)}function Jo(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,ah(t,n)}}function cp(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=a:s=s.next=a,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function ka(t,e,n,r){var i=t.updateQueue;Tn=!1;var s=i.firstBaseUpdate,a=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var u=l,d=u.next;u.next=null,a===null?s=d:a.next=d,a=u;var f=t.alternate;f!==null&&(f=f.updateQueue,l=f.lastBaseUpdate,l!==a&&(l===null?f.firstBaseUpdate=d:l.next=d,f.lastBaseUpdate=u))}if(s!==null){var g=i.baseState;a=0,f=d=u=null,l=s;do{var v=l.lane,k=l.eventTime;if((r&v)===v){f!==null&&(f=f.next={eventTime:k,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var N=t,O=l;switch(v=e,k=n,O.tag){case 1:if(N=O.payload,typeof N=="function"){g=N.call(k,g,v);break e}g=N;break e;case 3:N.flags=N.flags&-65537|128;case 0:if(N=O.payload,v=typeof N=="function"?N.call(k,g,v):N,v==null)break e;g=me({},g,v);break e;case 2:Tn=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,v=i.effects,v===null?i.effects=[l]:v.push(l))}else k={eventTime:k,lane:v,tag:l.tag,payload:l.payload,callback:l.callback,next:null},f===null?(d=f=k,u=g):f=f.next=k,a|=v;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;v=l,l=v.next,v.next=null,i.lastBaseUpdate=v,i.shared.pending=null}}while(!0);if(f===null&&(u=g),i.baseState=u,i.firstBaseUpdate=d,i.lastBaseUpdate=f,e=i.shared.interleaved,e!==null){i=e;do a|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);wr|=a,t.lanes=a,t.memoizedState=g}}function hp(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(x(191,i));i.call(r)}}}var Ys={},Ft=Xn(Ys),Vs=Xn(Ys),xs=Xn(Ys);function cr(t){if(t===Ys)throw Error(x(174));return t}function Ih(t,e){switch(ae(xs,e),ae(Vs,t),ae(Ft,Ys),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Bu(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Bu(e,t)}ce(Ft),ae(Ft,e)}function fi(){ce(Ft),ce(Vs),ce(xs)}function ay(t){cr(xs.current);var e=cr(Ft.current),n=Bu(e,t.type);e!==n&&(ae(Vs,t),ae(Ft,n))}function Sh(t){Vs.current===t&&(ce(Ft),ce(Vs))}var fe=Xn(0);function Ca(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var du=[];function Ah(){for(var t=0;t<du.length;t++)du[t]._workInProgressVersionPrimary=null;du.length=0}var Zo=pn.ReactCurrentDispatcher,fu=pn.ReactCurrentBatchConfig,Er=0,pe=null,Re=null,Ne=null,Pa=!1,fs=!1,Ls=0,p0=0;function Be(){throw Error(x(321))}function Rh(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Dt(t[n],e[n]))return!1;return!0}function kh(t,e,n,r,i,s){if(Er=s,pe=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Zo.current=t===null||t.memoizedState===null?v0:_0,t=n(r,i),fs){s=0;do{if(fs=!1,Ls=0,25<=s)throw Error(x(301));s+=1,Ne=Re=null,e.updateQueue=null,Zo.current=E0,t=n(r,i)}while(fs)}if(Zo.current=Na,e=Re!==null&&Re.next!==null,Er=0,Ne=Re=pe=null,Pa=!1,e)throw Error(x(300));return t}function Ch(){var t=Ls!==0;return Ls=0,t}function Vt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ne===null?pe.memoizedState=Ne=t:Ne=Ne.next=t,Ne}function It(){if(Re===null){var t=pe.alternate;t=t!==null?t.memoizedState:null}else t=Re.next;var e=Ne===null?pe.memoizedState:Ne.next;if(e!==null)Ne=e,Re=t;else{if(t===null)throw Error(x(310));Re=t,t={memoizedState:Re.memoizedState,baseState:Re.baseState,baseQueue:Re.baseQueue,queue:Re.queue,next:null},Ne===null?pe.memoizedState=Ne=t:Ne=Ne.next=t}return Ne}function Ms(t,e){return typeof e=="function"?e(t):e}function pu(t){var e=It(),n=e.queue;if(n===null)throw Error(x(311));n.lastRenderedReducer=t;var r=Re,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var a=i.next;i.next=s.next,s.next=a}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=a=null,u=null,d=s;do{var f=d.lane;if((Er&f)===f)u!==null&&(u=u.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),r=d.hasEagerState?d.eagerState:t(r,d.action);else{var g={lane:f,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};u===null?(l=u=g,a=r):u=u.next=g,pe.lanes|=f,wr|=f}d=d.next}while(d!==null&&d!==s);u===null?a=r:u.next=l,Dt(r,e.memoizedState)||(it=!0),e.memoizedState=r,e.baseState=a,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,pe.lanes|=s,wr|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function mu(t){var e=It(),n=e.queue;if(n===null)throw Error(x(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var a=i=i.next;do s=t(s,a.action),a=a.next;while(a!==i);Dt(s,e.memoizedState)||(it=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function ly(){}function uy(t,e){var n=pe,r=It(),i=e(),s=!Dt(r.memoizedState,i);if(s&&(r.memoizedState=i,it=!0),r=r.queue,Ph(dy.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||Ne!==null&&Ne.memoizedState.tag&1){if(n.flags|=2048,Fs(9,hy.bind(null,n,r,i,e),void 0,null),De===null)throw Error(x(349));Er&30||cy(n,e,i)}return i}function cy(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=pe.updateQueue,e===null?(e={lastEffect:null,stores:null},pe.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function hy(t,e,n,r){e.value=n,e.getSnapshot=r,fy(e)&&py(t)}function dy(t,e,n){return n(function(){fy(e)&&py(t)})}function fy(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Dt(t,n)}catch{return!0}}function py(t){var e=ln(t,1);e!==null&&Nt(e,t,1,-1)}function dp(t){var e=Vt();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ms,lastRenderedState:t},e.queue=t,t=t.dispatch=y0.bind(null,pe,t),[e.memoizedState,t]}function Fs(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=pe.updateQueue,e===null?(e={lastEffect:null,stores:null},pe.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function my(){return It().memoizedState}function ea(t,e,n,r){var i=Vt();pe.flags|=t,i.memoizedState=Fs(1|e,n,void 0,r===void 0?null:r)}function nl(t,e,n,r){var i=It();r=r===void 0?null:r;var s=void 0;if(Re!==null){var a=Re.memoizedState;if(s=a.destroy,r!==null&&Rh(r,a.deps)){i.memoizedState=Fs(e,n,s,r);return}}pe.flags|=t,i.memoizedState=Fs(1|e,n,s,r)}function fp(t,e){return ea(8390656,8,t,e)}function Ph(t,e){return nl(2048,8,t,e)}function gy(t,e){return nl(4,2,t,e)}function yy(t,e){return nl(4,4,t,e)}function vy(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function _y(t,e,n){return n=n!=null?n.concat([t]):null,nl(4,4,vy.bind(null,e,t),n)}function Nh(){}function Ey(t,e){var n=It();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Rh(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function wy(t,e){var n=It();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Rh(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function Ty(t,e,n){return Er&21?(Dt(n,e)||(n=kg(),pe.lanes|=n,wr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,it=!0),t.memoizedState=n)}function m0(t,e){var n=ie;ie=n!==0&&4>n?n:4,t(!0);var r=fu.transition;fu.transition={};try{t(!1),e()}finally{ie=n,fu.transition=r}}function Iy(){return It().memoizedState}function g0(t,e,n){var r=zn(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Sy(t))Ay(e,n);else if(n=sy(t,e,n,r),n!==null){var i=et();Nt(n,t,r,i),Ry(n,e,r)}}function y0(t,e,n){var r=zn(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Sy(t))Ay(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var a=e.lastRenderedState,l=s(a,n);if(i.hasEagerState=!0,i.eagerState=l,Dt(l,a)){var u=e.interleaved;u===null?(i.next=i,wh(e)):(i.next=u.next,u.next=i),e.interleaved=i;return}}catch{}finally{}n=sy(t,e,i,r),n!==null&&(i=et(),Nt(n,t,r,i),Ry(n,e,r))}}function Sy(t){var e=t.alternate;return t===pe||e!==null&&e===pe}function Ay(t,e){fs=Pa=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Ry(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,ah(t,n)}}var Na={readContext:Tt,useCallback:Be,useContext:Be,useEffect:Be,useImperativeHandle:Be,useInsertionEffect:Be,useLayoutEffect:Be,useMemo:Be,useReducer:Be,useRef:Be,useState:Be,useDebugValue:Be,useDeferredValue:Be,useTransition:Be,useMutableSource:Be,useSyncExternalStore:Be,useId:Be,unstable_isNewReconciler:!1},v0={readContext:Tt,useCallback:function(t,e){return Vt().memoizedState=[t,e===void 0?null:e],t},useContext:Tt,useEffect:fp,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,ea(4194308,4,vy.bind(null,e,t),n)},useLayoutEffect:function(t,e){return ea(4194308,4,t,e)},useInsertionEffect:function(t,e){return ea(4,2,t,e)},useMemo:function(t,e){var n=Vt();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Vt();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=g0.bind(null,pe,t),[r.memoizedState,t]},useRef:function(t){var e=Vt();return t={current:t},e.memoizedState=t},useState:dp,useDebugValue:Nh,useDeferredValue:function(t){return Vt().memoizedState=t},useTransition:function(){var t=dp(!1),e=t[0];return t=m0.bind(null,t[1]),Vt().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=pe,i=Vt();if(he){if(n===void 0)throw Error(x(407));n=n()}else{if(n=e(),De===null)throw Error(x(349));Er&30||cy(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,fp(dy.bind(null,r,s,t),[t]),r.flags|=2048,Fs(9,hy.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=Vt(),e=De.identifierPrefix;if(he){var n=Zt,r=Jt;n=(r&~(1<<32-Pt(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Ls++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=p0++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},_0={readContext:Tt,useCallback:Ey,useContext:Tt,useEffect:Ph,useImperativeHandle:_y,useInsertionEffect:gy,useLayoutEffect:yy,useMemo:wy,useReducer:pu,useRef:my,useState:function(){return pu(Ms)},useDebugValue:Nh,useDeferredValue:function(t){var e=It();return Ty(e,Re.memoizedState,t)},useTransition:function(){var t=pu(Ms)[0],e=It().memoizedState;return[t,e]},useMutableSource:ly,useSyncExternalStore:uy,useId:Iy,unstable_isNewReconciler:!1},E0={readContext:Tt,useCallback:Ey,useContext:Tt,useEffect:Ph,useImperativeHandle:_y,useInsertionEffect:gy,useLayoutEffect:yy,useMemo:wy,useReducer:mu,useRef:my,useState:function(){return mu(Ms)},useDebugValue:Nh,useDeferredValue:function(t){var e=It();return Re===null?e.memoizedState=t:Ty(e,Re.memoizedState,t)},useTransition:function(){var t=mu(Ms)[0],e=It().memoizedState;return[t,e]},useMutableSource:ly,useSyncExternalStore:uy,useId:Iy,unstable_isNewReconciler:!1};function Rt(t,e){if(t&&t.defaultProps){e=me({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function uc(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:me({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var rl={isMounted:function(t){return(t=t._reactInternals)?Pr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=et(),i=zn(t),s=rn(r,i);s.payload=e,n!=null&&(s.callback=n),e=Un(t,s,i),e!==null&&(Nt(e,t,i,r),Jo(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=et(),i=zn(t),s=rn(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Un(t,s,i),e!==null&&(Nt(e,t,i,r),Jo(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=et(),r=zn(t),i=rn(n,r);i.tag=2,e!=null&&(i.callback=e),e=Un(t,i,r),e!==null&&(Nt(e,t,r,n),Jo(e,t,r))}};function pp(t,e,n,r,i,s,a){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,a):e.prototype&&e.prototype.isPureReactComponent?!Ps(n,r)||!Ps(i,s):!0}function ky(t,e,n){var r=!1,i=qn,s=e.contextType;return typeof s=="object"&&s!==null?s=Tt(s):(i=ot(e)?vr:Ge.current,r=e.contextTypes,s=(r=r!=null)?ci(t,i):qn),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=rl,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function mp(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&rl.enqueueReplaceState(e,e.state,null)}function cc(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},Th(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Tt(s):(s=ot(e)?vr:Ge.current,i.context=ci(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(uc(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&rl.enqueueReplaceState(i,i.state,null),ka(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function pi(t,e){try{var n="",r=e;do n+=GE(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function gu(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function hc(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var w0=typeof WeakMap=="function"?WeakMap:Map;function Cy(t,e,n){n=rn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Oa||(Oa=!0,wc=r),hc(t,e)},n}function Py(t,e,n){n=rn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){hc(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){hc(t,e),typeof r!="function"&&(bn===null?bn=new Set([this]):bn.add(this));var a=e.stack;this.componentDidCatch(e.value,{componentStack:a!==null?a:""})}),n}function gp(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new w0;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=L0.bind(null,t,e,n),e.then(t,t))}function yp(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function vp(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=rn(-1,1),e.tag=2,Un(n,e,1))),n.lanes|=1),t)}var T0=pn.ReactCurrentOwner,it=!1;function Je(t,e,n,r){e.child=t===null?iy(e,null,n,r):di(e,t.child,n,r)}function _p(t,e,n,r,i){n=n.render;var s=e.ref;return ni(e,i),r=kh(t,e,n,r,s,i),n=Ch(),t!==null&&!it?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,un(t,e,i)):(he&&n&&mh(e),e.flags|=1,Je(t,e,r,i),e.child)}function Ep(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!Uh(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,Ny(t,e,s,r,i)):(t=ia(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var a=s.memoizedProps;if(n=n.compare,n=n!==null?n:Ps,n(a,r)&&t.ref===e.ref)return un(t,e,i)}return e.flags|=1,t=jn(s,r),t.ref=e.ref,t.return=e,e.child=t}function Ny(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Ps(s,r)&&t.ref===e.ref)if(it=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(it=!0);else return e.lanes=t.lanes,un(t,e,i)}return dc(t,e,n,r,i)}function Dy(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ae(Yr,ct),ct|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ae(Yr,ct),ct|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,ae(Yr,ct),ct|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,ae(Yr,ct),ct|=r;return Je(t,e,i,n),e.child}function Oy(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function dc(t,e,n,r,i){var s=ot(n)?vr:Ge.current;return s=ci(e,s),ni(e,i),n=kh(t,e,n,r,s,i),r=Ch(),t!==null&&!it?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,un(t,e,i)):(he&&r&&mh(e),e.flags|=1,Je(t,e,n,i),e.child)}function wp(t,e,n,r,i){if(ot(n)){var s=!0;Ta(e)}else s=!1;if(ni(e,i),e.stateNode===null)ta(t,e),ky(e,n,r),cc(e,n,r,i),r=!0;else if(t===null){var a=e.stateNode,l=e.memoizedProps;a.props=l;var u=a.context,d=n.contextType;typeof d=="object"&&d!==null?d=Tt(d):(d=ot(n)?vr:Ge.current,d=ci(e,d));var f=n.getDerivedStateFromProps,g=typeof f=="function"||typeof a.getSnapshotBeforeUpdate=="function";g||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==r||u!==d)&&mp(e,a,r,d),Tn=!1;var v=e.memoizedState;a.state=v,ka(e,r,a,i),u=e.memoizedState,l!==r||v!==u||st.current||Tn?(typeof f=="function"&&(uc(e,n,f,r),u=e.memoizedState),(l=Tn||pp(e,n,l,r,v,u,d))?(g||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(e.flags|=4194308)):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),a.props=r,a.state=u,a.context=d,r=l):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{a=e.stateNode,oy(t,e),l=e.memoizedProps,d=e.type===e.elementType?l:Rt(e.type,l),a.props=d,g=e.pendingProps,v=a.context,u=n.contextType,typeof u=="object"&&u!==null?u=Tt(u):(u=ot(n)?vr:Ge.current,u=ci(e,u));var k=n.getDerivedStateFromProps;(f=typeof k=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==g||v!==u)&&mp(e,a,r,u),Tn=!1,v=e.memoizedState,a.state=v,ka(e,r,a,i);var N=e.memoizedState;l!==g||v!==N||st.current||Tn?(typeof k=="function"&&(uc(e,n,k,r),N=e.memoizedState),(d=Tn||pp(e,n,d,r,v,N,u)||!1)?(f||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,N,u),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,N,u)),typeof a.componentDidUpdate=="function"&&(e.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof a.componentDidUpdate!="function"||l===t.memoizedProps&&v===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&v===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=N),a.props=r,a.state=N,a.context=u,r=d):(typeof a.componentDidUpdate!="function"||l===t.memoizedProps&&v===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&v===t.memoizedState||(e.flags|=1024),r=!1)}return fc(t,e,n,r,s,i)}function fc(t,e,n,r,i,s){Oy(t,e);var a=(e.flags&128)!==0;if(!r&&!a)return i&&op(e,n,!1),un(t,e,s);r=e.stateNode,T0.current=e;var l=a&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&a?(e.child=di(e,t.child,null,s),e.child=di(e,null,l,s)):Je(t,e,l,s),e.memoizedState=r.state,i&&op(e,n,!0),e.child}function Vy(t){var e=t.stateNode;e.pendingContext?sp(t,e.pendingContext,e.pendingContext!==e.context):e.context&&sp(t,e.context,!1),Ih(t,e.containerInfo)}function Tp(t,e,n,r,i){return hi(),yh(i),e.flags|=256,Je(t,e,n,r),e.child}var pc={dehydrated:null,treeContext:null,retryLane:0};function mc(t){return{baseLanes:t,cachePool:null,transitions:null}}function xy(t,e,n){var r=e.pendingProps,i=fe.current,s=!1,a=(e.flags&128)!==0,l;if((l=a)||(l=t!==null&&t.memoizedState===null?!1:(i&2)!==0),l?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),ae(fe,i&1),t===null)return ac(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(a=r.children,t=r.fallback,s?(r=e.mode,s=e.child,a={mode:"hidden",children:a},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=a):s=ol(a,r,0,null),t=fr(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=mc(n),e.memoizedState=pc,t):Dh(e,a));if(i=t.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return I0(t,e,a,r,l,i,n);if(s){s=r.fallback,a=e.mode,i=t.child,l=i.sibling;var u={mode:"hidden",children:r.children};return!(a&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=jn(i,u),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=jn(l,s):(s=fr(s,a,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,a=t.child.memoizedState,a=a===null?mc(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},s.memoizedState=a,s.childLanes=t.childLanes&~n,e.memoizedState=pc,r}return s=t.child,t=s.sibling,r=jn(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Dh(t,e){return e=ol({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Uo(t,e,n,r){return r!==null&&yh(r),di(e,t.child,null,n),t=Dh(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function I0(t,e,n,r,i,s,a){if(n)return e.flags&256?(e.flags&=-257,r=gu(Error(x(422))),Uo(t,e,a,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=ol({mode:"visible",children:r.children},i,0,null),s=fr(s,i,a,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&di(e,t.child,null,a),e.child.memoizedState=mc(a),e.memoizedState=pc,s);if(!(e.mode&1))return Uo(t,e,a,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(x(419)),r=gu(s,r,void 0),Uo(t,e,a,r)}if(l=(a&t.childLanes)!==0,it||l){if(r=De,r!==null){switch(a&-a){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|a)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,ln(t,i),Nt(r,t,i,-1))}return Fh(),r=gu(Error(x(421))),Uo(t,e,a,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=M0.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,ht=Fn(i.nextSibling),dt=e,he=!0,Ct=null,t!==null&&(vt[_t++]=Jt,vt[_t++]=Zt,vt[_t++]=_r,Jt=t.id,Zt=t.overflow,_r=e),e=Dh(e,r.children),e.flags|=4096,e)}function Ip(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),lc(t.return,e,n)}function yu(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function Ly(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(Je(t,e,r.children,n),r=fe.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Ip(t,n,e);else if(t.tag===19)Ip(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(ae(fe,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Ca(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),yu(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Ca(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}yu(e,!0,n,null,s);break;case"together":yu(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function ta(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function un(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),wr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(x(153));if(e.child!==null){for(t=e.child,n=jn(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=jn(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function S0(t,e,n){switch(e.tag){case 3:Vy(e),hi();break;case 5:ay(e);break;case 1:ot(e.type)&&Ta(e);break;case 4:Ih(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;ae(Aa,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(ae(fe,fe.current&1),e.flags|=128,null):n&e.child.childLanes?xy(t,e,n):(ae(fe,fe.current&1),t=un(t,e,n),t!==null?t.sibling:null);ae(fe,fe.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return Ly(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ae(fe,fe.current),r)break;return null;case 22:case 23:return e.lanes=0,Dy(t,e,n)}return un(t,e,n)}var My,gc,Fy,Uy;My=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};gc=function(){};Fy=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,cr(Ft.current);var s=null;switch(n){case"input":i=Uu(t,i),r=Uu(t,r),s=[];break;case"select":i=me({},i,{value:void 0}),r=me({},r,{value:void 0}),s=[];break;case"textarea":i=ju(t,i),r=ju(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Ea)}$u(n,r);var a;n=null;for(d in i)if(!r.hasOwnProperty(d)&&i.hasOwnProperty(d)&&i[d]!=null)if(d==="style"){var l=i[d];for(a in l)l.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(Ts.hasOwnProperty(d)?s||(s=[]):(s=s||[]).push(d,null));for(d in r){var u=r[d];if(l=i!=null?i[d]:void 0,r.hasOwnProperty(d)&&u!==l&&(u!=null||l!=null))if(d==="style")if(l){for(a in l)!l.hasOwnProperty(a)||u&&u.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in u)u.hasOwnProperty(a)&&l[a]!==u[a]&&(n||(n={}),n[a]=u[a])}else n||(s||(s=[]),s.push(d,n)),n=u;else d==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,l=l?l.__html:void 0,u!=null&&l!==u&&(s=s||[]).push(d,u)):d==="children"?typeof u!="string"&&typeof u!="number"||(s=s||[]).push(d,""+u):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(Ts.hasOwnProperty(d)?(u!=null&&d==="onScroll"&&ue("scroll",t),s||l===u||(s=[])):(s=s||[]).push(d,u))}n&&(s=s||[]).push("style",n);var d=s;(e.updateQueue=d)&&(e.flags|=4)}};Uy=function(t,e,n,r){n!==r&&(e.flags|=4)};function Ji(t,e){if(!he)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function $e(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function A0(t,e,n){var r=e.pendingProps;switch(gh(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return $e(e),null;case 1:return ot(e.type)&&wa(),$e(e),null;case 3:return r=e.stateNode,fi(),ce(st),ce(Ge),Ah(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Mo(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Ct!==null&&(Sc(Ct),Ct=null))),gc(t,e),$e(e),null;case 5:Sh(e);var i=cr(xs.current);if(n=e.type,t!==null&&e.stateNode!=null)Fy(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(x(166));return $e(e),null}if(t=cr(Ft.current),Mo(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[xt]=e,r[Os]=s,t=(e.mode&1)!==0,n){case"dialog":ue("cancel",r),ue("close",r);break;case"iframe":case"object":case"embed":ue("load",r);break;case"video":case"audio":for(i=0;i<is.length;i++)ue(is[i],r);break;case"source":ue("error",r);break;case"img":case"image":case"link":ue("error",r),ue("load",r);break;case"details":ue("toggle",r);break;case"input":Of(r,s),ue("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},ue("invalid",r);break;case"textarea":xf(r,s),ue("invalid",r)}$u(n,s),i=null;for(var a in s)if(s.hasOwnProperty(a)){var l=s[a];a==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&Lo(r.textContent,l,t),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&Lo(r.textContent,l,t),i=["children",""+l]):Ts.hasOwnProperty(a)&&l!=null&&a==="onScroll"&&ue("scroll",r)}switch(n){case"input":ko(r),Vf(r,s,!0);break;case"textarea":ko(r),Lf(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Ea)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{a=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=dg(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=a.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=a.createElement(n,{is:r.is}):(t=a.createElement(n),n==="select"&&(a=t,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):t=a.createElementNS(t,n),t[xt]=e,t[Os]=r,My(t,e,!1,!1),e.stateNode=t;e:{switch(a=Hu(n,r),n){case"dialog":ue("cancel",t),ue("close",t),i=r;break;case"iframe":case"object":case"embed":ue("load",t),i=r;break;case"video":case"audio":for(i=0;i<is.length;i++)ue(is[i],t);i=r;break;case"source":ue("error",t),i=r;break;case"img":case"image":case"link":ue("error",t),ue("load",t),i=r;break;case"details":ue("toggle",t),i=r;break;case"input":Of(t,r),i=Uu(t,r),ue("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=me({},r,{value:void 0}),ue("invalid",t);break;case"textarea":xf(t,r),i=ju(t,r),ue("invalid",t);break;default:i=r}$u(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var u=l[s];s==="style"?mg(t,u):s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&fg(t,u)):s==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&Is(t,u):typeof u=="number"&&Is(t,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Ts.hasOwnProperty(s)?u!=null&&s==="onScroll"&&ue("scroll",t):u!=null&&th(t,s,u,a))}switch(n){case"input":ko(t),Vf(t,r,!1);break;case"textarea":ko(t),Lf(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Wn(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Jr(t,!!r.multiple,s,!1):r.defaultValue!=null&&Jr(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Ea)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return $e(e),null;case 6:if(t&&e.stateNode!=null)Uy(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(x(166));if(n=cr(xs.current),cr(Ft.current),Mo(e)){if(r=e.stateNode,n=e.memoizedProps,r[xt]=e,(s=r.nodeValue!==n)&&(t=dt,t!==null))switch(t.tag){case 3:Lo(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Lo(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[xt]=e,e.stateNode=r}return $e(e),null;case 13:if(ce(fe),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(he&&ht!==null&&e.mode&1&&!(e.flags&128))ny(),hi(),e.flags|=98560,s=!1;else if(s=Mo(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(x(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(x(317));s[xt]=e}else hi(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;$e(e),s=!1}else Ct!==null&&(Sc(Ct),Ct=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||fe.current&1?Ce===0&&(Ce=3):Fh())),e.updateQueue!==null&&(e.flags|=4),$e(e),null);case 4:return fi(),gc(t,e),t===null&&Ns(e.stateNode.containerInfo),$e(e),null;case 10:return Eh(e.type._context),$e(e),null;case 17:return ot(e.type)&&wa(),$e(e),null;case 19:if(ce(fe),s=e.memoizedState,s===null)return $e(e),null;if(r=(e.flags&128)!==0,a=s.rendering,a===null)if(r)Ji(s,!1);else{if(Ce!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(a=Ca(t),a!==null){for(e.flags|=128,Ji(s,!1),r=a.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,a=s.alternate,a===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=a.childLanes,s.lanes=a.lanes,s.child=a.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=a.memoizedProps,s.memoizedState=a.memoizedState,s.updateQueue=a.updateQueue,s.type=a.type,t=a.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ae(fe,fe.current&1|2),e.child}t=t.sibling}s.tail!==null&&Te()>mi&&(e.flags|=128,r=!0,Ji(s,!1),e.lanes=4194304)}else{if(!r)if(t=Ca(a),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Ji(s,!0),s.tail===null&&s.tailMode==="hidden"&&!a.alternate&&!he)return $e(e),null}else 2*Te()-s.renderingStartTime>mi&&n!==1073741824&&(e.flags|=128,r=!0,Ji(s,!1),e.lanes=4194304);s.isBackwards?(a.sibling=e.child,e.child=a):(n=s.last,n!==null?n.sibling=a:e.child=a,s.last=a)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Te(),e.sibling=null,n=fe.current,ae(fe,r?n&1|2:n&1),e):($e(e),null);case 22:case 23:return Mh(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?ct&1073741824&&($e(e),e.subtreeFlags&6&&(e.flags|=8192)):$e(e),null;case 24:return null;case 25:return null}throw Error(x(156,e.tag))}function R0(t,e){switch(gh(e),e.tag){case 1:return ot(e.type)&&wa(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return fi(),ce(st),ce(Ge),Ah(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Sh(e),null;case 13:if(ce(fe),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(x(340));hi()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ce(fe),null;case 4:return fi(),null;case 10:return Eh(e.type._context),null;case 22:case 23:return Mh(),null;case 24:return null;default:return null}}var bo=!1,qe=!1,k0=typeof WeakSet=="function"?WeakSet:Set,j=null;function Qr(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ye(t,e,r)}else n.current=null}function yc(t,e,n){try{n()}catch(r){ye(t,e,r)}}var Sp=!1;function C0(t,e){if(ec=ya,t=$g(),ph(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var a=0,l=-1,u=-1,d=0,f=0,g=t,v=null;t:for(;;){for(var k;g!==n||i!==0&&g.nodeType!==3||(l=a+i),g!==s||r!==0&&g.nodeType!==3||(u=a+r),g.nodeType===3&&(a+=g.nodeValue.length),(k=g.firstChild)!==null;)v=g,g=k;for(;;){if(g===t)break t;if(v===n&&++d===i&&(l=a),v===s&&++f===r&&(u=a),(k=g.nextSibling)!==null)break;g=v,v=g.parentNode}g=k}n=l===-1||u===-1?null:{start:l,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(tc={focusedElem:t,selectionRange:n},ya=!1,j=e;j!==null;)if(e=j,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,j=t;else for(;j!==null;){e=j;try{var N=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(N!==null){var O=N.memoizedProps,L=N.memoizedState,I=e.stateNode,E=I.getSnapshotBeforeUpdate(e.elementType===e.type?O:Rt(e.type,O),L);I.__reactInternalSnapshotBeforeUpdate=E}break;case 3:var S=e.stateNode.containerInfo;S.nodeType===1?S.textContent="":S.nodeType===9&&S.documentElement&&S.removeChild(S.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(x(163))}}catch(D){ye(e,e.return,D)}if(t=e.sibling,t!==null){t.return=e.return,j=t;break}j=e.return}return N=Sp,Sp=!1,N}function ps(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&yc(e,n,s)}i=i.next}while(i!==r)}}function il(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function vc(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function by(t){var e=t.alternate;e!==null&&(t.alternate=null,by(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[xt],delete e[Os],delete e[ic],delete e[c0],delete e[h0])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function zy(t){return t.tag===5||t.tag===3||t.tag===4}function Ap(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||zy(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function _c(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Ea));else if(r!==4&&(t=t.child,t!==null))for(_c(t,e,n),t=t.sibling;t!==null;)_c(t,e,n),t=t.sibling}function Ec(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Ec(t,e,n),t=t.sibling;t!==null;)Ec(t,e,n),t=t.sibling}var Ve=null,kt=!1;function _n(t,e,n){for(n=n.child;n!==null;)jy(t,e,n),n=n.sibling}function jy(t,e,n){if(Mt&&typeof Mt.onCommitFiberUnmount=="function")try{Mt.onCommitFiberUnmount(Ya,n)}catch{}switch(n.tag){case 5:qe||Qr(n,e);case 6:var r=Ve,i=kt;Ve=null,_n(t,e,n),Ve=r,kt=i,Ve!==null&&(kt?(t=Ve,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Ve.removeChild(n.stateNode));break;case 18:Ve!==null&&(kt?(t=Ve,n=n.stateNode,t.nodeType===8?cu(t.parentNode,n):t.nodeType===1&&cu(t,n),ks(t)):cu(Ve,n.stateNode));break;case 4:r=Ve,i=kt,Ve=n.stateNode.containerInfo,kt=!0,_n(t,e,n),Ve=r,kt=i;break;case 0:case 11:case 14:case 15:if(!qe&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,a=s.destroy;s=s.tag,a!==void 0&&(s&2||s&4)&&yc(n,e,a),i=i.next}while(i!==r)}_n(t,e,n);break;case 1:if(!qe&&(Qr(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){ye(n,e,l)}_n(t,e,n);break;case 21:_n(t,e,n);break;case 22:n.mode&1?(qe=(r=qe)||n.memoizedState!==null,_n(t,e,n),qe=r):_n(t,e,n);break;default:_n(t,e,n)}}function Rp(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new k0),e.forEach(function(r){var i=F0.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function At(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,a=e,l=a;e:for(;l!==null;){switch(l.tag){case 5:Ve=l.stateNode,kt=!1;break e;case 3:Ve=l.stateNode.containerInfo,kt=!0;break e;case 4:Ve=l.stateNode.containerInfo,kt=!0;break e}l=l.return}if(Ve===null)throw Error(x(160));jy(s,a,i),Ve=null,kt=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(d){ye(i,e,d)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)By(e,t),e=e.sibling}function By(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(At(e,t),Ot(t),r&4){try{ps(3,t,t.return),il(3,t)}catch(O){ye(t,t.return,O)}try{ps(5,t,t.return)}catch(O){ye(t,t.return,O)}}break;case 1:At(e,t),Ot(t),r&512&&n!==null&&Qr(n,n.return);break;case 5:if(At(e,t),Ot(t),r&512&&n!==null&&Qr(n,n.return),t.flags&32){var i=t.stateNode;try{Is(i,"")}catch(O){ye(t,t.return,O)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,a=n!==null?n.memoizedProps:s,l=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&cg(i,s),Hu(l,a);var d=Hu(l,s);for(a=0;a<u.length;a+=2){var f=u[a],g=u[a+1];f==="style"?mg(i,g):f==="dangerouslySetInnerHTML"?fg(i,g):f==="children"?Is(i,g):th(i,f,g,d)}switch(l){case"input":bu(i,s);break;case"textarea":hg(i,s);break;case"select":var v=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var k=s.value;k!=null?Jr(i,!!s.multiple,k,!1):v!==!!s.multiple&&(s.defaultValue!=null?Jr(i,!!s.multiple,s.defaultValue,!0):Jr(i,!!s.multiple,s.multiple?[]:"",!1))}i[Os]=s}catch(O){ye(t,t.return,O)}}break;case 6:if(At(e,t),Ot(t),r&4){if(t.stateNode===null)throw Error(x(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(O){ye(t,t.return,O)}}break;case 3:if(At(e,t),Ot(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{ks(e.containerInfo)}catch(O){ye(t,t.return,O)}break;case 4:At(e,t),Ot(t);break;case 13:At(e,t),Ot(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(xh=Te())),r&4&&Rp(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(qe=(d=qe)||f,At(e,t),qe=d):At(e,t),Ot(t),r&8192){if(d=t.memoizedState!==null,(t.stateNode.isHidden=d)&&!f&&t.mode&1)for(j=t,f=t.child;f!==null;){for(g=j=f;j!==null;){switch(v=j,k=v.child,v.tag){case 0:case 11:case 14:case 15:ps(4,v,v.return);break;case 1:Qr(v,v.return);var N=v.stateNode;if(typeof N.componentWillUnmount=="function"){r=v,n=v.return;try{e=r,N.props=e.memoizedProps,N.state=e.memoizedState,N.componentWillUnmount()}catch(O){ye(r,n,O)}}break;case 5:Qr(v,v.return);break;case 22:if(v.memoizedState!==null){Cp(g);continue}}k!==null?(k.return=v,j=k):Cp(g)}f=f.sibling}e:for(f=null,g=t;;){if(g.tag===5){if(f===null){f=g;try{i=g.stateNode,d?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=g.stateNode,u=g.memoizedProps.style,a=u!=null&&u.hasOwnProperty("display")?u.display:null,l.style.display=pg("display",a))}catch(O){ye(t,t.return,O)}}}else if(g.tag===6){if(f===null)try{g.stateNode.nodeValue=d?"":g.memoizedProps}catch(O){ye(t,t.return,O)}}else if((g.tag!==22&&g.tag!==23||g.memoizedState===null||g===t)&&g.child!==null){g.child.return=g,g=g.child;continue}if(g===t)break e;for(;g.sibling===null;){if(g.return===null||g.return===t)break e;f===g&&(f=null),g=g.return}f===g&&(f=null),g.sibling.return=g.return,g=g.sibling}}break;case 19:At(e,t),Ot(t),r&4&&Rp(t);break;case 21:break;default:At(e,t),Ot(t)}}function Ot(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(zy(n)){var r=n;break e}n=n.return}throw Error(x(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Is(i,""),r.flags&=-33);var s=Ap(t);Ec(t,s,i);break;case 3:case 4:var a=r.stateNode.containerInfo,l=Ap(t);_c(t,l,a);break;default:throw Error(x(161))}}catch(u){ye(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function P0(t,e,n){j=t,$y(t)}function $y(t,e,n){for(var r=(t.mode&1)!==0;j!==null;){var i=j,s=i.child;if(i.tag===22&&r){var a=i.memoizedState!==null||bo;if(!a){var l=i.alternate,u=l!==null&&l.memoizedState!==null||qe;l=bo;var d=qe;if(bo=a,(qe=u)&&!d)for(j=i;j!==null;)a=j,u=a.child,a.tag===22&&a.memoizedState!==null?Pp(i):u!==null?(u.return=a,j=u):Pp(i);for(;s!==null;)j=s,$y(s),s=s.sibling;j=i,bo=l,qe=d}kp(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,j=s):kp(t)}}function kp(t){for(;j!==null;){var e=j;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:qe||il(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!qe)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:Rt(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&hp(e,s,r);break;case 3:var a=e.updateQueue;if(a!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}hp(e,a,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var d=e.alternate;if(d!==null){var f=d.memoizedState;if(f!==null){var g=f.dehydrated;g!==null&&ks(g)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(x(163))}qe||e.flags&512&&vc(e)}catch(v){ye(e,e.return,v)}}if(e===t){j=null;break}if(n=e.sibling,n!==null){n.return=e.return,j=n;break}j=e.return}}function Cp(t){for(;j!==null;){var e=j;if(e===t){j=null;break}var n=e.sibling;if(n!==null){n.return=e.return,j=n;break}j=e.return}}function Pp(t){for(;j!==null;){var e=j;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{il(4,e)}catch(u){ye(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(u){ye(e,i,u)}}var s=e.return;try{vc(e)}catch(u){ye(e,s,u)}break;case 5:var a=e.return;try{vc(e)}catch(u){ye(e,a,u)}}}catch(u){ye(e,e.return,u)}if(e===t){j=null;break}var l=e.sibling;if(l!==null){l.return=e.return,j=l;break}j=e.return}}var N0=Math.ceil,Da=pn.ReactCurrentDispatcher,Oh=pn.ReactCurrentOwner,wt=pn.ReactCurrentBatchConfig,te=0,De=null,Ae=null,Le=0,ct=0,Yr=Xn(0),Ce=0,Us=null,wr=0,sl=0,Vh=0,ms=null,rt=null,xh=0,mi=1/0,Yt=null,Oa=!1,wc=null,bn=null,zo=!1,Nn=null,Va=0,gs=0,Tc=null,na=-1,ra=0;function et(){return te&6?Te():na!==-1?na:na=Te()}function zn(t){return t.mode&1?te&2&&Le!==0?Le&-Le:f0.transition!==null?(ra===0&&(ra=kg()),ra):(t=ie,t!==0||(t=window.event,t=t===void 0?16:xg(t.type)),t):1}function Nt(t,e,n,r){if(50<gs)throw gs=0,Tc=null,Error(x(185));Ks(t,n,r),(!(te&2)||t!==De)&&(t===De&&(!(te&2)&&(sl|=n),Ce===4&&Sn(t,Le)),at(t,r),n===1&&te===0&&!(e.mode&1)&&(mi=Te()+500,tl&&Jn()))}function at(t,e){var n=t.callbackNode;fw(t,e);var r=ga(t,t===De?Le:0);if(r===0)n!==null&&Uf(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Uf(n),e===1)t.tag===0?d0(Np.bind(null,t)):Zg(Np.bind(null,t)),l0(function(){!(te&6)&&Jn()}),n=null;else{switch(Cg(r)){case 1:n=oh;break;case 4:n=Ag;break;case 16:n=ma;break;case 536870912:n=Rg;break;default:n=ma}n=Xy(n,Hy.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Hy(t,e){if(na=-1,ra=0,te&6)throw Error(x(327));var n=t.callbackNode;if(ri()&&t.callbackNode!==n)return null;var r=ga(t,t===De?Le:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=xa(t,r);else{e=r;var i=te;te|=2;var s=qy();(De!==t||Le!==e)&&(Yt=null,mi=Te()+500,dr(t,e));do try{V0();break}catch(l){Wy(t,l)}while(!0);_h(),Da.current=s,te=i,Ae!==null?e=0:(De=null,Le=0,e=Ce)}if(e!==0){if(e===2&&(i=Qu(t),i!==0&&(r=i,e=Ic(t,i))),e===1)throw n=Us,dr(t,0),Sn(t,r),at(t,Te()),n;if(e===6)Sn(t,r);else{if(i=t.current.alternate,!(r&30)&&!D0(i)&&(e=xa(t,r),e===2&&(s=Qu(t),s!==0&&(r=s,e=Ic(t,s))),e===1))throw n=Us,dr(t,0),Sn(t,r),at(t,Te()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(x(345));case 2:sr(t,rt,Yt);break;case 3:if(Sn(t,r),(r&130023424)===r&&(e=xh+500-Te(),10<e)){if(ga(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){et(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=rc(sr.bind(null,t,rt,Yt),e);break}sr(t,rt,Yt);break;case 4:if(Sn(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var a=31-Pt(r);s=1<<a,a=e[a],a>i&&(i=a),r&=~s}if(r=i,r=Te()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*N0(r/1960))-r,10<r){t.timeoutHandle=rc(sr.bind(null,t,rt,Yt),r);break}sr(t,rt,Yt);break;case 5:sr(t,rt,Yt);break;default:throw Error(x(329))}}}return at(t,Te()),t.callbackNode===n?Hy.bind(null,t):null}function Ic(t,e){var n=ms;return t.current.memoizedState.isDehydrated&&(dr(t,e).flags|=256),t=xa(t,e),t!==2&&(e=rt,rt=n,e!==null&&Sc(e)),t}function Sc(t){rt===null?rt=t:rt.push.apply(rt,t)}function D0(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!Dt(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Sn(t,e){for(e&=~Vh,e&=~sl,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Pt(e),r=1<<n;t[n]=-1,e&=~r}}function Np(t){if(te&6)throw Error(x(327));ri();var e=ga(t,0);if(!(e&1))return at(t,Te()),null;var n=xa(t,e);if(t.tag!==0&&n===2){var r=Qu(t);r!==0&&(e=r,n=Ic(t,r))}if(n===1)throw n=Us,dr(t,0),Sn(t,e),at(t,Te()),n;if(n===6)throw Error(x(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,sr(t,rt,Yt),at(t,Te()),null}function Lh(t,e){var n=te;te|=1;try{return t(e)}finally{te=n,te===0&&(mi=Te()+500,tl&&Jn())}}function Tr(t){Nn!==null&&Nn.tag===0&&!(te&6)&&ri();var e=te;te|=1;var n=wt.transition,r=ie;try{if(wt.transition=null,ie=1,t)return t()}finally{ie=r,wt.transition=n,te=e,!(te&6)&&Jn()}}function Mh(){ct=Yr.current,ce(Yr)}function dr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,a0(n)),Ae!==null)for(n=Ae.return;n!==null;){var r=n;switch(gh(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&wa();break;case 3:fi(),ce(st),ce(Ge),Ah();break;case 5:Sh(r);break;case 4:fi();break;case 13:ce(fe);break;case 19:ce(fe);break;case 10:Eh(r.type._context);break;case 22:case 23:Mh()}n=n.return}if(De=t,Ae=t=jn(t.current,null),Le=ct=e,Ce=0,Us=null,Vh=sl=wr=0,rt=ms=null,ur!==null){for(e=0;e<ur.length;e++)if(n=ur[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var a=s.next;s.next=i,r.next=a}n.pending=r}ur=null}return t}function Wy(t,e){do{var n=Ae;try{if(_h(),Zo.current=Na,Pa){for(var r=pe.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Pa=!1}if(Er=0,Ne=Re=pe=null,fs=!1,Ls=0,Oh.current=null,n===null||n.return===null){Ce=1,Us=e,Ae=null;break}e:{var s=t,a=n.return,l=n,u=e;if(e=Le,l.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var d=u,f=l,g=f.tag;if(!(f.mode&1)&&(g===0||g===11||g===15)){var v=f.alternate;v?(f.updateQueue=v.updateQueue,f.memoizedState=v.memoizedState,f.lanes=v.lanes):(f.updateQueue=null,f.memoizedState=null)}var k=yp(a);if(k!==null){k.flags&=-257,vp(k,a,l,s,e),k.mode&1&&gp(s,d,e),e=k,u=d;var N=e.updateQueue;if(N===null){var O=new Set;O.add(u),e.updateQueue=O}else N.add(u);break e}else{if(!(e&1)){gp(s,d,e),Fh();break e}u=Error(x(426))}}else if(he&&l.mode&1){var L=yp(a);if(L!==null){!(L.flags&65536)&&(L.flags|=256),vp(L,a,l,s,e),yh(pi(u,l));break e}}s=u=pi(u,l),Ce!==4&&(Ce=2),ms===null?ms=[s]:ms.push(s),s=a;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var I=Cy(s,u,e);cp(s,I);break e;case 1:l=u;var E=s.type,S=s.stateNode;if(!(s.flags&128)&&(typeof E.getDerivedStateFromError=="function"||S!==null&&typeof S.componentDidCatch=="function"&&(bn===null||!bn.has(S)))){s.flags|=65536,e&=-e,s.lanes|=e;var D=Py(s,l,e);cp(s,D);break e}}s=s.return}while(s!==null)}Gy(n)}catch(U){e=U,Ae===n&&n!==null&&(Ae=n=n.return);continue}break}while(!0)}function qy(){var t=Da.current;return Da.current=Na,t===null?Na:t}function Fh(){(Ce===0||Ce===3||Ce===2)&&(Ce=4),De===null||!(wr&268435455)&&!(sl&268435455)||Sn(De,Le)}function xa(t,e){var n=te;te|=2;var r=qy();(De!==t||Le!==e)&&(Yt=null,dr(t,e));do try{O0();break}catch(i){Wy(t,i)}while(!0);if(_h(),te=n,Da.current=r,Ae!==null)throw Error(x(261));return De=null,Le=0,Ce}function O0(){for(;Ae!==null;)Ky(Ae)}function V0(){for(;Ae!==null&&!iw();)Ky(Ae)}function Ky(t){var e=Yy(t.alternate,t,ct);t.memoizedProps=t.pendingProps,e===null?Gy(t):Ae=e,Oh.current=null}function Gy(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=R0(n,e),n!==null){n.flags&=32767,Ae=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Ce=6,Ae=null;return}}else if(n=A0(n,e,ct),n!==null){Ae=n;return}if(e=e.sibling,e!==null){Ae=e;return}Ae=e=t}while(e!==null);Ce===0&&(Ce=5)}function sr(t,e,n){var r=ie,i=wt.transition;try{wt.transition=null,ie=1,x0(t,e,n,r)}finally{wt.transition=i,ie=r}return null}function x0(t,e,n,r){do ri();while(Nn!==null);if(te&6)throw Error(x(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(x(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(pw(t,s),t===De&&(Ae=De=null,Le=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||zo||(zo=!0,Xy(ma,function(){return ri(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=wt.transition,wt.transition=null;var a=ie;ie=1;var l=te;te|=4,Oh.current=null,C0(t,n),By(n,t),e0(tc),ya=!!ec,tc=ec=null,t.current=n,P0(n),sw(),te=l,ie=a,wt.transition=s}else t.current=n;if(zo&&(zo=!1,Nn=t,Va=i),s=t.pendingLanes,s===0&&(bn=null),lw(n.stateNode),at(t,Te()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Oa)throw Oa=!1,t=wc,wc=null,t;return Va&1&&t.tag!==0&&ri(),s=t.pendingLanes,s&1?t===Tc?gs++:(gs=0,Tc=t):gs=0,Jn(),null}function ri(){if(Nn!==null){var t=Cg(Va),e=wt.transition,n=ie;try{if(wt.transition=null,ie=16>t?16:t,Nn===null)var r=!1;else{if(t=Nn,Nn=null,Va=0,te&6)throw Error(x(331));var i=te;for(te|=4,j=t.current;j!==null;){var s=j,a=s.child;if(j.flags&16){var l=s.deletions;if(l!==null){for(var u=0;u<l.length;u++){var d=l[u];for(j=d;j!==null;){var f=j;switch(f.tag){case 0:case 11:case 15:ps(8,f,s)}var g=f.child;if(g!==null)g.return=f,j=g;else for(;j!==null;){f=j;var v=f.sibling,k=f.return;if(by(f),f===d){j=null;break}if(v!==null){v.return=k,j=v;break}j=k}}}var N=s.alternate;if(N!==null){var O=N.child;if(O!==null){N.child=null;do{var L=O.sibling;O.sibling=null,O=L}while(O!==null)}}j=s}}if(s.subtreeFlags&2064&&a!==null)a.return=s,j=a;else e:for(;j!==null;){if(s=j,s.flags&2048)switch(s.tag){case 0:case 11:case 15:ps(9,s,s.return)}var I=s.sibling;if(I!==null){I.return=s.return,j=I;break e}j=s.return}}var E=t.current;for(j=E;j!==null;){a=j;var S=a.child;if(a.subtreeFlags&2064&&S!==null)S.return=a,j=S;else e:for(a=E;j!==null;){if(l=j,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:il(9,l)}}catch(U){ye(l,l.return,U)}if(l===a){j=null;break e}var D=l.sibling;if(D!==null){D.return=l.return,j=D;break e}j=l.return}}if(te=i,Jn(),Mt&&typeof Mt.onPostCommitFiberRoot=="function")try{Mt.onPostCommitFiberRoot(Ya,t)}catch{}r=!0}return r}finally{ie=n,wt.transition=e}}return!1}function Dp(t,e,n){e=pi(n,e),e=Cy(t,e,1),t=Un(t,e,1),e=et(),t!==null&&(Ks(t,1,e),at(t,e))}function ye(t,e,n){if(t.tag===3)Dp(t,t,n);else for(;e!==null;){if(e.tag===3){Dp(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(bn===null||!bn.has(r))){t=pi(n,t),t=Py(e,t,1),e=Un(e,t,1),t=et(),e!==null&&(Ks(e,1,t),at(e,t));break}}e=e.return}}function L0(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=et(),t.pingedLanes|=t.suspendedLanes&n,De===t&&(Le&n)===n&&(Ce===4||Ce===3&&(Le&130023424)===Le&&500>Te()-xh?dr(t,0):Vh|=n),at(t,e)}function Qy(t,e){e===0&&(t.mode&1?(e=No,No<<=1,!(No&130023424)&&(No=4194304)):e=1);var n=et();t=ln(t,e),t!==null&&(Ks(t,e,n),at(t,n))}function M0(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Qy(t,n)}function F0(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(x(314))}r!==null&&r.delete(e),Qy(t,n)}var Yy;Yy=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||st.current)it=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return it=!1,S0(t,e,n);it=!!(t.flags&131072)}else it=!1,he&&e.flags&1048576&&ey(e,Sa,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;ta(t,e),t=e.pendingProps;var i=ci(e,Ge.current);ni(e,n),i=kh(null,e,r,t,i,n);var s=Ch();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,ot(r)?(s=!0,Ta(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Th(e),i.updater=rl,e.stateNode=i,i._reactInternals=e,cc(e,r,t,n),e=fc(null,e,r,!0,s,n)):(e.tag=0,he&&s&&mh(e),Je(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(ta(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=b0(r),t=Rt(r,t),i){case 0:e=dc(null,e,r,t,n);break e;case 1:e=wp(null,e,r,t,n);break e;case 11:e=_p(null,e,r,t,n);break e;case 14:e=Ep(null,e,r,Rt(r.type,t),n);break e}throw Error(x(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Rt(r,i),dc(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Rt(r,i),wp(t,e,r,i,n);case 3:e:{if(Vy(e),t===null)throw Error(x(387));r=e.pendingProps,s=e.memoizedState,i=s.element,oy(t,e),ka(e,r,null,n);var a=e.memoizedState;if(r=a.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=pi(Error(x(423)),e),e=Tp(t,e,r,n,i);break e}else if(r!==i){i=pi(Error(x(424)),e),e=Tp(t,e,r,n,i);break e}else for(ht=Fn(e.stateNode.containerInfo.firstChild),dt=e,he=!0,Ct=null,n=iy(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(hi(),r===i){e=un(t,e,n);break e}Je(t,e,r,n)}e=e.child}return e;case 5:return ay(e),t===null&&ac(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,a=i.children,nc(r,i)?a=null:s!==null&&nc(r,s)&&(e.flags|=32),Oy(t,e),Je(t,e,a,n),e.child;case 6:return t===null&&ac(e),null;case 13:return xy(t,e,n);case 4:return Ih(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=di(e,null,r,n):Je(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Rt(r,i),_p(t,e,r,i,n);case 7:return Je(t,e,e.pendingProps,n),e.child;case 8:return Je(t,e,e.pendingProps.children,n),e.child;case 12:return Je(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,a=i.value,ae(Aa,r._currentValue),r._currentValue=a,s!==null)if(Dt(s.value,a)){if(s.children===i.children&&!st.current){e=un(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var l=s.dependencies;if(l!==null){a=s.child;for(var u=l.firstContext;u!==null;){if(u.context===r){if(s.tag===1){u=rn(-1,n&-n),u.tag=2;var d=s.updateQueue;if(d!==null){d=d.shared;var f=d.pending;f===null?u.next=u:(u.next=f.next,f.next=u),d.pending=u}}s.lanes|=n,u=s.alternate,u!==null&&(u.lanes|=n),lc(s.return,n,e),l.lanes|=n;break}u=u.next}}else if(s.tag===10)a=s.type===e.type?null:s.child;else if(s.tag===18){if(a=s.return,a===null)throw Error(x(341));a.lanes|=n,l=a.alternate,l!==null&&(l.lanes|=n),lc(a,n,e),a=s.sibling}else a=s.child;if(a!==null)a.return=s;else for(a=s;a!==null;){if(a===e){a=null;break}if(s=a.sibling,s!==null){s.return=a.return,a=s;break}a=a.return}s=a}Je(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,ni(e,n),i=Tt(i),r=r(i),e.flags|=1,Je(t,e,r,n),e.child;case 14:return r=e.type,i=Rt(r,e.pendingProps),i=Rt(r.type,i),Ep(t,e,r,i,n);case 15:return Ny(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Rt(r,i),ta(t,e),e.tag=1,ot(r)?(t=!0,Ta(e)):t=!1,ni(e,n),ky(e,r,i),cc(e,r,i,n),fc(null,e,r,!0,t,n);case 19:return Ly(t,e,n);case 22:return Dy(t,e,n)}throw Error(x(156,e.tag))};function Xy(t,e){return Sg(t,e)}function U0(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Et(t,e,n,r){return new U0(t,e,n,r)}function Uh(t){return t=t.prototype,!(!t||!t.isReactComponent)}function b0(t){if(typeof t=="function")return Uh(t)?1:0;if(t!=null){if(t=t.$$typeof,t===rh)return 11;if(t===ih)return 14}return 2}function jn(t,e){var n=t.alternate;return n===null?(n=Et(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function ia(t,e,n,r,i,s){var a=2;if(r=t,typeof t=="function")Uh(t)&&(a=1);else if(typeof t=="string")a=5;else e:switch(t){case zr:return fr(n.children,i,s,e);case nh:a=8,i|=8;break;case xu:return t=Et(12,n,e,i|2),t.elementType=xu,t.lanes=s,t;case Lu:return t=Et(13,n,e,i),t.elementType=Lu,t.lanes=s,t;case Mu:return t=Et(19,n,e,i),t.elementType=Mu,t.lanes=s,t;case ag:return ol(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case sg:a=10;break e;case og:a=9;break e;case rh:a=11;break e;case ih:a=14;break e;case wn:a=16,r=null;break e}throw Error(x(130,t==null?t:typeof t,""))}return e=Et(a,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function fr(t,e,n,r){return t=Et(7,t,r,e),t.lanes=n,t}function ol(t,e,n,r){return t=Et(22,t,r,e),t.elementType=ag,t.lanes=n,t.stateNode={isHidden:!1},t}function vu(t,e,n){return t=Et(6,t,null,e),t.lanes=n,t}function _u(t,e,n){return e=Et(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function z0(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Zl(0),this.expirationTimes=Zl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Zl(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function bh(t,e,n,r,i,s,a,l,u){return t=new z0(t,e,n,l,u),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Et(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Th(s),t}function j0(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:br,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function Jy(t){if(!t)return qn;t=t._reactInternals;e:{if(Pr(t)!==t||t.tag!==1)throw Error(x(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(ot(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(x(171))}if(t.tag===1){var n=t.type;if(ot(n))return Jg(t,n,e)}return e}function Zy(t,e,n,r,i,s,a,l,u){return t=bh(n,r,!0,t,i,s,a,l,u),t.context=Jy(null),n=t.current,r=et(),i=zn(n),s=rn(r,i),s.callback=e??null,Un(n,s,i),t.current.lanes=i,Ks(t,i,r),at(t,r),t}function al(t,e,n,r){var i=e.current,s=et(),a=zn(i);return n=Jy(n),e.context===null?e.context=n:e.pendingContext=n,e=rn(s,a),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Un(i,e,a),t!==null&&(Nt(t,i,a,s),Jo(t,i,a)),a}function La(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Op(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function zh(t,e){Op(t,e),(t=t.alternate)&&Op(t,e)}function B0(){return null}var ev=typeof reportError=="function"?reportError:function(t){console.error(t)};function jh(t){this._internalRoot=t}ll.prototype.render=jh.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(x(409));al(t,e,null,null)};ll.prototype.unmount=jh.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Tr(function(){al(null,t,null,null)}),e[an]=null}};function ll(t){this._internalRoot=t}ll.prototype.unstable_scheduleHydration=function(t){if(t){var e=Dg();t={blockedOn:null,target:t,priority:e};for(var n=0;n<In.length&&e!==0&&e<In[n].priority;n++);In.splice(n,0,t),n===0&&Vg(t)}};function Bh(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function ul(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Vp(){}function $0(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var d=La(a);s.call(d)}}var a=Zy(e,r,t,0,null,!1,!1,"",Vp);return t._reactRootContainer=a,t[an]=a.current,Ns(t.nodeType===8?t.parentNode:t),Tr(),a}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var d=La(u);l.call(d)}}var u=bh(t,0,!1,null,null,!1,!1,"",Vp);return t._reactRootContainer=u,t[an]=u.current,Ns(t.nodeType===8?t.parentNode:t),Tr(function(){al(e,u,n,r)}),u}function cl(t,e,n,r,i){var s=n._reactRootContainer;if(s){var a=s;if(typeof i=="function"){var l=i;i=function(){var u=La(a);l.call(u)}}al(e,a,t,i)}else a=$0(n,e,t,i,r);return La(a)}Pg=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=rs(e.pendingLanes);n!==0&&(ah(e,n|1),at(e,Te()),!(te&6)&&(mi=Te()+500,Jn()))}break;case 13:Tr(function(){var r=ln(t,1);if(r!==null){var i=et();Nt(r,t,1,i)}}),zh(t,1)}};lh=function(t){if(t.tag===13){var e=ln(t,134217728);if(e!==null){var n=et();Nt(e,t,134217728,n)}zh(t,134217728)}};Ng=function(t){if(t.tag===13){var e=zn(t),n=ln(t,e);if(n!==null){var r=et();Nt(n,t,e,r)}zh(t,e)}};Dg=function(){return ie};Og=function(t,e){var n=ie;try{return ie=t,e()}finally{ie=n}};qu=function(t,e,n){switch(e){case"input":if(bu(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=el(r);if(!i)throw Error(x(90));ug(r),bu(r,i)}}}break;case"textarea":hg(t,n);break;case"select":e=n.value,e!=null&&Jr(t,!!n.multiple,e,!1)}};vg=Lh;_g=Tr;var H0={usingClientEntryPoint:!1,Events:[Qs,Hr,el,gg,yg,Lh]},Zi={findFiberByHostInstance:lr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},W0={bundleType:Zi.bundleType,version:Zi.version,rendererPackageName:Zi.rendererPackageName,rendererConfig:Zi.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:pn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Tg(t),t===null?null:t.stateNode},findFiberByHostInstance:Zi.findFiberByHostInstance||B0,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var jo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!jo.isDisabled&&jo.supportsFiber)try{Ya=jo.inject(W0),Mt=jo}catch{}}pt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=H0;pt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Bh(e))throw Error(x(200));return j0(t,e,null,n)};pt.createRoot=function(t,e){if(!Bh(t))throw Error(x(299));var n=!1,r="",i=ev;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=bh(t,1,!1,null,null,n,!1,r,i),t[an]=e.current,Ns(t.nodeType===8?t.parentNode:t),new jh(e)};pt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(x(188)):(t=Object.keys(t).join(","),Error(x(268,t)));return t=Tg(e),t=t===null?null:t.stateNode,t};pt.flushSync=function(t){return Tr(t)};pt.hydrate=function(t,e,n){if(!ul(e))throw Error(x(200));return cl(null,t,e,!0,n)};pt.hydrateRoot=function(t,e,n){if(!Bh(t))throw Error(x(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",a=ev;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),e=Zy(e,null,t,1,n??null,i,!1,s,a),t[an]=e.current,Ns(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new ll(e)};pt.render=function(t,e,n){if(!ul(e))throw Error(x(200));return cl(null,t,e,!1,n)};pt.unmountComponentAtNode=function(t){if(!ul(t))throw Error(x(40));return t._reactRootContainer?(Tr(function(){cl(null,null,t,!1,function(){t._reactRootContainer=null,t[an]=null})}),!0):!1};pt.unstable_batchedUpdates=Lh;pt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!ul(n))throw Error(x(200));if(t==null||t._reactInternals===void 0)throw Error(x(38));return cl(t,e,n,!1,r)};pt.version="18.3.1-next-f1338f8080-20240426";function tv(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(tv)}catch(t){console.error(t)}}tv(),tg.exports=pt;var q0=tg.exports,xp=q0;Ou.createRoot=xp.createRoot,Ou.hydrateRoot=xp.hydrateRoot;var nv={exports:{}},hl={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var K0=ar,G0=Symbol.for("react.element"),Q0=Symbol.for("react.fragment"),Y0=Object.prototype.hasOwnProperty,X0=K0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,J0={key:!0,ref:!0,__self:!0,__source:!0};function rv(t,e,n){var r,i={},s=null,a=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(a=e.ref);for(r in e)Y0.call(e,r)&&!J0.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:G0,type:t,key:s,ref:a,props:i,_owner:X0.current}}hl.Fragment=Q0;hl.jsx=rv;hl.jsxs=rv;nv.exports=hl;var yt=nv.exports,Lp={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iv=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Z0=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],a=t[n++],l=t[n++],u=((i&7)<<18|(s&63)<<12|(a&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=t[n++],a=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|a&63)}}return e.join("")},sv={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],a=i+1<t.length,l=a?t[i+1]:0,u=i+2<t.length,d=u?t[i+2]:0,f=s>>2,g=(s&3)<<4|l>>4;let v=(l&15)<<2|d>>6,k=d&63;u||(k=64,a||(v=64)),r.push(n[f],n[g],n[v],n[k])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(iv(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Z0(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const d=i<t.length?n[t.charAt(i)]:64;++i;const g=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||l==null||d==null||g==null)throw new eT;const v=s<<2|l>>4;if(r.push(v),d!==64){const k=l<<4&240|d>>2;if(r.push(k),g!==64){const N=d<<6&192|g;r.push(N)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class eT extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const tT=function(t){const e=iv(t);return sv.encodeByteArray(e,!0)},Ma=function(t){return tT(t).replace(/\./g,"")},ov=function(t){try{return sv.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nT(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rT=()=>nT().__FIREBASE_DEFAULTS__,iT=()=>{if(typeof process>"u"||typeof Lp>"u")return;const t=Lp.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},sT=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&ov(t[1]);return e&&JSON.parse(e)},dl=()=>{try{return rT()||iT()||sT()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},av=t=>{var e,n;return(n=(e=dl())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},oT=t=>{const e=av(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},lv=()=>{var t;return(t=dl())===null||t===void 0?void 0:t.config},uv=t=>{var e;return(e=dl())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aT{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lT(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Ma(JSON.stringify(n)),Ma(JSON.stringify(a)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qe(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function uT(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Qe())}function cT(){var t;const e=(t=dl())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function hT(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function dT(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function fT(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function pT(){const t=Qe();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function mT(){return!cT()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function gT(){try{return typeof indexedDB=="object"}catch{return!1}}function yT(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vT="FirebaseError";class mn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=vT,Object.setPrototypeOf(this,mn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Xs.prototype.create)}}class Xs{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],a=s?_T(s,r):"Error",l=`${this.serviceName}: ${a} (${i}).`;return new mn(i,l,r)}}function _T(t,e){return t.replace(ET,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const ET=/\{\$([^}]+)}/g;function wT(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Fa(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],a=e[i];if(Mp(s)&&Mp(a)){if(!Fa(s,a))return!1}else if(s!==a)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Mp(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Js(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function TT(t,e){const n=new IT(t,e);return n.subscribe.bind(n)}class IT{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");ST(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Eu),i.error===void 0&&(i.error=Eu),i.complete===void 0&&(i.complete=Eu);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function ST(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Eu(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nr(t){return t&&t._delegate?t._delegate:t}class Ir{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const or="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AT{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new aT;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(kT(e))try{this.getOrInitializeService({instanceIdentifier:or})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=or){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=or){return this.instances.has(e)}getOptions(e=or){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,a]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&a.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const a=this.instances.get(i);return a&&e(a,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:RT(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=or){return this.component?this.component.multipleInstances?e:or:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function RT(t){return t===or?void 0:t}function kT(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CT{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new AT(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var X;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(X||(X={}));const PT={debug:X.DEBUG,verbose:X.VERBOSE,info:X.INFO,warn:X.WARN,error:X.ERROR,silent:X.SILENT},NT=X.INFO,DT={[X.DEBUG]:"log",[X.VERBOSE]:"log",[X.INFO]:"info",[X.WARN]:"warn",[X.ERROR]:"error"},OT=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=DT[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class $h{constructor(e){this.name=e,this._logLevel=NT,this._logHandler=OT,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in X))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?PT[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,X.DEBUG,...e),this._logHandler(this,X.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,X.VERBOSE,...e),this._logHandler(this,X.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,X.INFO,...e),this._logHandler(this,X.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,X.WARN,...e),this._logHandler(this,X.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,X.ERROR,...e),this._logHandler(this,X.ERROR,...e)}}const VT=(t,e)=>e.some(n=>t instanceof n);let Fp,Up;function xT(){return Fp||(Fp=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function LT(){return Up||(Up=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const cv=new WeakMap,Ac=new WeakMap,hv=new WeakMap,wu=new WeakMap,Hh=new WeakMap;function MT(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",a)},s=()=>{n(Bn(t.result)),i()},a=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",a)});return e.then(n=>{n instanceof IDBCursor&&cv.set(n,t)}).catch(()=>{}),Hh.set(e,t),e}function FT(t){if(Ac.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",a),t.removeEventListener("abort",a)},s=()=>{n(),i()},a=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",a),t.addEventListener("abort",a)});Ac.set(t,e)}let Rc={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Ac.get(t);if(e==="objectStoreNames")return t.objectStoreNames||hv.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Bn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function UT(t){Rc=t(Rc)}function bT(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Tu(this),e,...n);return hv.set(r,e.sort?e.sort():[e]),Bn(r)}:LT().includes(t)?function(...e){return t.apply(Tu(this),e),Bn(cv.get(this))}:function(...e){return Bn(t.apply(Tu(this),e))}}function zT(t){return typeof t=="function"?bT(t):(t instanceof IDBTransaction&&FT(t),VT(t,xT())?new Proxy(t,Rc):t)}function Bn(t){if(t instanceof IDBRequest)return MT(t);if(wu.has(t))return wu.get(t);const e=zT(t);return e!==t&&(wu.set(t,e),Hh.set(e,t)),e}const Tu=t=>Hh.get(t);function jT(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const a=indexedDB.open(t,e),l=Bn(a);return r&&a.addEventListener("upgradeneeded",u=>{r(Bn(a.result),u.oldVersion,u.newVersion,Bn(a.transaction),u)}),n&&a.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),l.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",d=>i(d.oldVersion,d.newVersion,d))}).catch(()=>{}),l}const BT=["get","getKey","getAll","getAllKeys","count"],$T=["put","add","delete","clear"],Iu=new Map;function bp(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Iu.get(e))return Iu.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=$T.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||BT.includes(n)))return;const s=async function(a,...l){const u=this.transaction(a,i?"readwrite":"readonly");let d=u.store;return r&&(d=d.index(l.shift())),(await Promise.all([d[n](...l),i&&u.done]))[0]};return Iu.set(e,s),s}UT(t=>({...t,get:(e,n,r)=>bp(e,n)||t.get(e,n,r),has:(e,n)=>!!bp(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HT{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(WT(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function WT(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const kc="@firebase/app",zp="0.10.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cn=new $h("@firebase/app"),qT="@firebase/app-compat",KT="@firebase/analytics-compat",GT="@firebase/analytics",QT="@firebase/app-check-compat",YT="@firebase/app-check",XT="@firebase/auth",JT="@firebase/auth-compat",ZT="@firebase/database",eI="@firebase/data-connect",tI="@firebase/database-compat",nI="@firebase/functions",rI="@firebase/functions-compat",iI="@firebase/installations",sI="@firebase/installations-compat",oI="@firebase/messaging",aI="@firebase/messaging-compat",lI="@firebase/performance",uI="@firebase/performance-compat",cI="@firebase/remote-config",hI="@firebase/remote-config-compat",dI="@firebase/storage",fI="@firebase/storage-compat",pI="@firebase/firestore",mI="@firebase/vertexai-preview",gI="@firebase/firestore-compat",yI="firebase",vI="10.14.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cc="[DEFAULT]",_I={[kc]:"fire-core",[qT]:"fire-core-compat",[GT]:"fire-analytics",[KT]:"fire-analytics-compat",[YT]:"fire-app-check",[QT]:"fire-app-check-compat",[XT]:"fire-auth",[JT]:"fire-auth-compat",[ZT]:"fire-rtdb",[eI]:"fire-data-connect",[tI]:"fire-rtdb-compat",[nI]:"fire-fn",[rI]:"fire-fn-compat",[iI]:"fire-iid",[sI]:"fire-iid-compat",[oI]:"fire-fcm",[aI]:"fire-fcm-compat",[lI]:"fire-perf",[uI]:"fire-perf-compat",[cI]:"fire-rc",[hI]:"fire-rc-compat",[dI]:"fire-gcs",[fI]:"fire-gcs-compat",[pI]:"fire-fst",[gI]:"fire-fst-compat",[mI]:"fire-vertex","fire-js":"fire-js",[yI]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ua=new Map,EI=new Map,Pc=new Map;function jp(t,e){try{t.container.addComponent(e)}catch(n){cn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function gi(t){const e=t.name;if(Pc.has(e))return cn.debug(`There were multiple attempts to register component ${e}.`),!1;Pc.set(e,t);for(const n of Ua.values())jp(n,t);for(const n of EI.values())jp(n,t);return!0}function Wh(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Dn(t){return t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wI={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},$n=new Xs("app","Firebase",wI);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TI{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Ir("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw $n.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ki=vI;function dv(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Cc,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw $n.create("bad-app-name",{appName:String(i)});if(n||(n=lv()),!n)throw $n.create("no-options");const s=Ua.get(i);if(s){if(Fa(n,s.options)&&Fa(r,s.config))return s;throw $n.create("duplicate-app",{appName:i})}const a=new CT(i);for(const u of Pc.values())a.addComponent(u);const l=new TI(n,r,a);return Ua.set(i,l),l}function fv(t=Cc){const e=Ua.get(t);if(!e&&t===Cc&&lv())return dv();if(!e)throw $n.create("no-app",{appName:t});return e}function Hn(t,e,n){var r;let i=(r=_I[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),a=e.match(/\s|\//);if(s||a){const l=[`Unable to register library "${i}" with version "${e}":`];s&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&a&&l.push("and"),a&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),cn.warn(l.join(" "));return}gi(new Ir(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const II="firebase-heartbeat-database",SI=1,bs="firebase-heartbeat-store";let Su=null;function pv(){return Su||(Su=jT(II,SI,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(bs)}catch(n){console.warn(n)}}}}).catch(t=>{throw $n.create("idb-open",{originalErrorMessage:t.message})})),Su}async function AI(t){try{const n=(await pv()).transaction(bs),r=await n.objectStore(bs).get(mv(t));return await n.done,r}catch(e){if(e instanceof mn)cn.warn(e.message);else{const n=$n.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});cn.warn(n.message)}}}async function Bp(t,e){try{const r=(await pv()).transaction(bs,"readwrite");await r.objectStore(bs).put(e,mv(t)),await r.done}catch(n){if(n instanceof mn)cn.warn(n.message);else{const r=$n.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});cn.warn(r.message)}}}function mv(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RI=1024,kI=30*24*60*60*1e3;class CI{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new NI(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=$p();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(a=>a.date===s)?void 0:(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(a=>{const l=new Date(a.date).valueOf();return Date.now()-l<=kI}),this._storage.overwrite(this._heartbeatsCache))}catch(r){cn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=$p(),{heartbeatsToSend:r,unsentEntries:i}=PI(this._heartbeatsCache.heartbeats),s=Ma(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return cn.warn(n),""}}}function $p(){return new Date().toISOString().substring(0,10)}function PI(t,e=RI){const n=[];let r=t.slice();for(const i of t){const s=n.find(a=>a.agent===i.agent);if(s){if(s.dates.push(i.date),Hp(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Hp(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class NI{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return gT()?yT().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await AI(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Bp(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Bp(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Hp(t){return Ma(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DI(t){gi(new Ir("platform-logger",e=>new HT(e),"PRIVATE")),gi(new Ir("heartbeat",e=>new CI(e),"PRIVATE")),Hn(kc,zp,t),Hn(kc,zp,"esm2017"),Hn("fire-js","")}DI("");var OI="firebase",VI="10.14.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Hn(OI,VI,"app");function qh(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function gv(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const xI=gv,yv=new Xs("auth","Firebase",gv());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ba=new $h("@firebase/auth");function LI(t,...e){ba.logLevel<=X.WARN&&ba.warn(`Auth (${ki}): ${t}`,...e)}function sa(t,...e){ba.logLevel<=X.ERROR&&ba.error(`Auth (${ki}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hn(t,...e){throw Kh(t,...e)}function Ut(t,...e){return Kh(t,...e)}function vv(t,e,n){const r=Object.assign(Object.assign({},xI()),{[e]:n});return new Xs("auth","Firebase",r).create(e,{appName:t.name})}function pr(t){return vv(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Kh(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return yv.create(t,...e)}function W(t,e,...n){if(!t)throw Kh(e,...n)}function en(t){const e="INTERNAL ASSERTION FAILED: "+t;throw sa(e),new Error(e)}function dn(t,e){t||en(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nc(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function MI(){return Wp()==="http:"||Wp()==="https:"}function Wp(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FI(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(MI()||dT()||"connection"in navigator)?navigator.onLine:!0}function UI(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zs{constructor(e,n){this.shortDelay=e,this.longDelay=n,dn(n>e,"Short delay should be less than long delay!"),this.isMobile=uT()||fT()}get(){return FI()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gh(t,e){dn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _v{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;en("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;en("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;en("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bI={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zI=new Zs(3e4,6e4);function Qh(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Ci(t,e,n,r,i={}){return Ev(t,i,async()=>{let s={},a={};r&&(e==="GET"?a=r:s={body:JSON.stringify(r)});const l=Js(Object.assign({key:t.config.apiKey},a)).slice(1),u=await t._getAdditionalHeaders();u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode);const d=Object.assign({method:e,headers:u},s);return hT()||(d.referrerPolicy="no-referrer"),_v.fetch()(wv(t,t.config.apiHost,n,l),d)})}async function Ev(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},bI),e);try{const i=new BI(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const a=await s.json();if("needConfirmation"in a)throw Bo(t,"account-exists-with-different-credential",a);if(s.ok&&!("errorMessage"in a))return a;{const l=s.ok?a.errorMessage:a.error.message,[u,d]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw Bo(t,"credential-already-in-use",a);if(u==="EMAIL_EXISTS")throw Bo(t,"email-already-in-use",a);if(u==="USER_DISABLED")throw Bo(t,"user-disabled",a);const f=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(d)throw vv(t,f,d);hn(t,f)}}catch(i){if(i instanceof mn)throw i;hn(t,"network-request-failed",{message:String(i)})}}async function jI(t,e,n,r,i={}){const s=await Ci(t,e,n,r,i);return"mfaPendingCredential"in s&&hn(t,"multi-factor-auth-required",{_serverResponse:s}),s}function wv(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Gh(t.config,i):`${t.config.apiScheme}://${i}`}class BI{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Ut(this.auth,"network-request-failed")),zI.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Bo(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Ut(t,e,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $I(t,e){return Ci(t,"POST","/v1/accounts:delete",e)}async function Tv(t,e){return Ci(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ys(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function HI(t,e=!1){const n=Nr(t),r=await n.getIdToken(e),i=Yh(r);W(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,a=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:ys(Au(i.auth_time)),issuedAtTime:ys(Au(i.iat)),expirationTime:ys(Au(i.exp)),signInProvider:a||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Au(t){return Number(t)*1e3}function Yh(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return sa("JWT malformed, contained fewer than 3 sections"),null;try{const i=ov(n);return i?JSON.parse(i):(sa("Failed to decode base64 JWT payload"),null)}catch(i){return sa("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function qp(t){const e=Yh(t);return W(e,"internal-error"),W(typeof e.exp<"u","internal-error"),W(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zs(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof mn&&WI(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function WI({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qI{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dc{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=ys(this.lastLoginAt),this.creationTime=ys(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function za(t){var e;const n=t.auth,r=await t.getIdToken(),i=await zs(t,Tv(n,{idToken:r}));W(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const a=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?Iv(s.providerUserInfo):[],l=GI(t.providerData,a),u=t.isAnonymous,d=!(t.email&&s.passwordHash)&&!(l!=null&&l.length),f=u?d:!1,g={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:l,metadata:new Dc(s.createdAt,s.lastLoginAt),isAnonymous:f};Object.assign(t,g)}async function KI(t){const e=Nr(t);await za(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function GI(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function Iv(t){return t.map(e=>{var{providerId:n}=e,r=qh(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function QI(t,e){const n=await Ev(t,{},async()=>{const r=Js({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,a=wv(t,i,"/v1/token",`key=${s}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",_v.fetch()(a,{method:"POST",headers:l,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function YI(t,e){return Ci(t,"POST","/v2/accounts:revokeToken",Qh(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ii{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){W(e.idToken,"internal-error"),W(typeof e.idToken<"u","internal-error"),W(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):qp(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){W(e.length!==0,"internal-error");const n=qp(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(W(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await QI(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,a=new ii;return r&&(W(typeof r=="string","internal-error",{appName:e}),a.refreshToken=r),i&&(W(typeof i=="string","internal-error",{appName:e}),a.accessToken=i),s&&(W(typeof s=="number","internal-error",{appName:e}),a.expirationTime=s),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ii,this.toJSON())}_performRefresh(){return en("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function En(t,e){W(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class tn{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=qh(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new qI(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Dc(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await zs(this,this.stsTokenManager.getToken(this.auth,e));return W(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return HI(this,e)}reload(){return KI(this)}_assign(e){this!==e&&(W(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new tn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){W(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await za(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Dn(this.auth.app))return Promise.reject(pr(this.auth));const e=await this.getIdToken();return await zs(this,$I(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,a,l,u,d,f;const g=(r=n.displayName)!==null&&r!==void 0?r:void 0,v=(i=n.email)!==null&&i!==void 0?i:void 0,k=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,N=(a=n.photoURL)!==null&&a!==void 0?a:void 0,O=(l=n.tenantId)!==null&&l!==void 0?l:void 0,L=(u=n._redirectEventId)!==null&&u!==void 0?u:void 0,I=(d=n.createdAt)!==null&&d!==void 0?d:void 0,E=(f=n.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:S,emailVerified:D,isAnonymous:U,providerData:F,stsTokenManager:_}=n;W(S&&_,e,"internal-error");const m=ii.fromJSON(this.name,_);W(typeof S=="string",e,"internal-error"),En(g,e.name),En(v,e.name),W(typeof D=="boolean",e,"internal-error"),W(typeof U=="boolean",e,"internal-error"),En(k,e.name),En(N,e.name),En(O,e.name),En(L,e.name),En(I,e.name),En(E,e.name);const y=new tn({uid:S,auth:e,email:v,emailVerified:D,displayName:g,isAnonymous:U,photoURL:N,phoneNumber:k,tenantId:O,stsTokenManager:m,createdAt:I,lastLoginAt:E});return F&&Array.isArray(F)&&(y.providerData=F.map(w=>Object.assign({},w))),L&&(y._redirectEventId=L),y}static async _fromIdTokenResponse(e,n,r=!1){const i=new ii;i.updateFromServerResponse(n);const s=new tn({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await za(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];W(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?Iv(i.providerUserInfo):[],a=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),l=new ii;l.updateFromIdToken(r);const u=new tn({uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:a}),d={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new Dc(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(u,d),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kp=new Map;function nn(t){dn(t instanceof Function,"Expected a class definition");let e=Kp.get(t);return e?(dn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Kp.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sv{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Sv.type="NONE";const Gp=Sv;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oa(t,e,n){return`firebase:${t}:${e}:${n}`}class si{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=oa(this.userKey,i.apiKey,s),this.fullPersistenceKey=oa("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?tn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new si(nn(Gp),e,r);const i=(await Promise.all(n.map(async d=>{if(await d._isAvailable())return d}))).filter(d=>d);let s=i[0]||nn(Gp);const a=oa(r,e.config.apiKey,e.name);let l=null;for(const d of n)try{const f=await d._get(a);if(f){const g=tn._fromJSON(e,f);d!==s&&(l=g),s=d;break}}catch{}const u=i.filter(d=>d._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new si(s,e,r):(s=u[0],l&&await s._set(a,l.toJSON()),await Promise.all(n.map(async d=>{if(d!==s)try{await d._remove(a)}catch{}})),new si(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qp(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Cv(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Av(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Nv(e))return"Blackberry";if(Dv(e))return"Webos";if(Rv(e))return"Safari";if((e.includes("chrome/")||kv(e))&&!e.includes("edge/"))return"Chrome";if(Pv(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Av(t=Qe()){return/firefox\//i.test(t)}function Rv(t=Qe()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function kv(t=Qe()){return/crios\//i.test(t)}function Cv(t=Qe()){return/iemobile/i.test(t)}function Pv(t=Qe()){return/android/i.test(t)}function Nv(t=Qe()){return/blackberry/i.test(t)}function Dv(t=Qe()){return/webos/i.test(t)}function Xh(t=Qe()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function XI(t=Qe()){var e;return Xh(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function JI(){return pT()&&document.documentMode===10}function Ov(t=Qe()){return Xh(t)||Pv(t)||Dv(t)||Nv(t)||/windows phone/i.test(t)||Cv(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vv(t,e=[]){let n;switch(t){case"Browser":n=Qp(Qe());break;case"Worker":n=`${Qp(Qe())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${ki}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZI{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((a,l)=>{try{const u=e(s);a(u)}catch(u){l(u)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eS(t,e={}){return Ci(t,"GET","/v2/passwordPolicy",Qh(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tS=6;class nS{constructor(e){var n,r,i,s;const a=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=a.minPasswordLength)!==null&&n!==void 0?n:tS,a.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=a.maxPasswordLength),a.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=a.containsLowercaseCharacter),a.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=a.containsUppercaseCharacter),a.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=a.containsNumericCharacter),a.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=a.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,a,l;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(n=u.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),u.isValid&&(u.isValid=(r=u.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(i=u.containsLowercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(s=u.containsUppercaseLetter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(a=u.containsNumericCharacter)!==null&&a!==void 0?a:!0),u.isValid&&(u.isValid=(l=u.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),u}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rS{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Yp(this),this.idTokenSubscription=new Yp(this),this.beforeStateQueue=new ZI(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=yv,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=nn(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await si.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Tv(this,{idToken:e}),r=await tn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Dn(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=i==null?void 0:i._redirectEventId,u=await this.tryRedirectSignIn(e);(!a||a===l)&&(u!=null&&u.user)&&(i=u.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(a){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return W(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await za(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=UI()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Dn(this.app))return Promise.reject(pr(this));const n=e?Nr(e):null;return n&&W(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&W(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Dn(this.app)?Promise.reject(pr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Dn(this.app)?Promise.reject(pr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(nn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await eS(this),n=new nS(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Xs("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await YI(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&nn(e)||this._popupRedirectResolver;W(n,this,"argument-error"),this.redirectPersistenceManager=await si.create(this,[nn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let a=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(W(l,this,"internal-error"),l.then(()=>{a||s(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,i);return()=>{a=!0,u()}}else{const u=e.addObserver(n);return()=>{a=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return W(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Vv(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&LI(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Jh(t){return Nr(t)}class Yp{constructor(e){this.auth=e,this.observer=null,this.addObserver=TT(n=>this.observer=n)}get next(){return W(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Zh={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function iS(t){Zh=t}function sS(t){return Zh.loadJS(t)}function oS(){return Zh.gapiScript}function aS(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lS(t,e){const n=Wh(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Fa(s,e??{}))return i;hn(i,"already-initialized")}return n.initialize({options:e})}function uS(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(nn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function cS(t,e,n){const r=Jh(t);W(r._canInitEmulator,r,"emulator-config-failed"),W(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=xv(e),{host:a,port:l}=hS(e),u=l===null?"":`:${l}`;r.config.emulator={url:`${s}//${a}${u}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:a,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),dS()}function xv(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function hS(t){const e=xv(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Xp(r.substr(s.length+1))}}else{const[s,a]=r.split(":");return{host:s,port:Xp(a)}}}function Xp(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function dS(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lv{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return en("not implemented")}_getIdTokenResponse(e){return en("not implemented")}_linkToIdToken(e,n){return en("not implemented")}_getReauthenticationResolver(e){return en("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oi(t,e){return jI(t,"POST","/v1/accounts:signInWithIdp",Qh(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fS="http://localhost";class Sr extends Lv{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Sr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):hn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=qh(n,["providerId","signInMethod"]);if(!r||!i)return null;const a=new Sr(r,i);return a.idToken=s.idToken||void 0,a.accessToken=s.accessToken||void 0,a.secret=s.secret,a.nonce=s.nonce,a.pendingToken=s.pendingToken||null,a}_getIdTokenResponse(e){const n=this.buildRequest();return oi(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,oi(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,oi(e,n)}buildRequest(){const e={requestUri:fS,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Js(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mv{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eo extends Mv{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class An extends eo{constructor(){super("facebook.com")}static credential(e){return Sr._fromParams({providerId:An.PROVIDER_ID,signInMethod:An.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return An.credentialFromTaggedObject(e)}static credentialFromError(e){return An.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return An.credential(e.oauthAccessToken)}catch{return null}}}An.FACEBOOK_SIGN_IN_METHOD="facebook.com";An.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rn extends eo{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Sr._fromParams({providerId:Rn.PROVIDER_ID,signInMethod:Rn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Rn.credentialFromTaggedObject(e)}static credentialFromError(e){return Rn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Rn.credential(n,r)}catch{return null}}}Rn.GOOGLE_SIGN_IN_METHOD="google.com";Rn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kn extends eo{constructor(){super("github.com")}static credential(e){return Sr._fromParams({providerId:kn.PROVIDER_ID,signInMethod:kn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return kn.credentialFromTaggedObject(e)}static credentialFromError(e){return kn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return kn.credential(e.oauthAccessToken)}catch{return null}}}kn.GITHUB_SIGN_IN_METHOD="github.com";kn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cn extends eo{constructor(){super("twitter.com")}static credential(e,n){return Sr._fromParams({providerId:Cn.PROVIDER_ID,signInMethod:Cn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Cn.credentialFromTaggedObject(e)}static credentialFromError(e){return Cn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Cn.credential(n,r)}catch{return null}}}Cn.TWITTER_SIGN_IN_METHOD="twitter.com";Cn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yi{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await tn._fromIdTokenResponse(e,r,i),a=Jp(r);return new yi({user:s,providerId:a,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=Jp(r);return new yi({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function Jp(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ja extends mn{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,ja.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new ja(e,n,r,i)}}function Fv(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?ja._fromErrorAndOperation(t,s,e,r):s})}async function pS(t,e,n=!1){const r=await zs(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return yi._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mS(t,e,n=!1){const{auth:r}=t;if(Dn(r.app))return Promise.reject(pr(r));const i="reauthenticate";try{const s=await zs(t,Fv(r,i,e,t),n);W(s.idToken,r,"internal-error");const a=Yh(s.idToken);W(a,r,"internal-error");const{sub:l}=a;return W(t.uid===l,r,"user-mismatch"),yi._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&hn(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gS(t,e,n=!1){if(Dn(t.app))return Promise.reject(pr(t));const r="signIn",i=await Fv(t,r,e),s=await yi._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}function yS(t,e,n,r){return Nr(t).onIdTokenChanged(e,n,r)}function vS(t,e,n){return Nr(t).beforeAuthStateChanged(e,n)}const Ba="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uv{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Ba,"1"),this.storage.removeItem(Ba),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _S=1e3,ES=10;class bv extends Uv{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Ov(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((a,l,u)=>{this.notifyListeners(a,u)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const a=this.storage.getItem(r);!n&&this.localCache[r]===a||this.notifyListeners(r,a)},s=this.storage.getItem(r);JI()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,ES):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},_S)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}bv.type="LOCAL";const wS=bv;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zv extends Uv{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}zv.type="SESSION";const jv=zv;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TS(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fl{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new fl(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,a=this.handlersMap[i];if(!(a!=null&&a.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(a).map(async d=>d(n.origin,s)),u=await TS(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}fl.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ed(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IS{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,a;return new Promise((l,u)=>{const d=ed("",20);i.port1.start();const f=setTimeout(()=>{u(new Error("unsupported_event"))},r);a={messageChannel:i,onMessage(g){const v=g;if(v.data.eventId===d)switch(v.data.status){case"ack":clearTimeout(f),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(v.data.response);break;default:clearTimeout(f),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(a),i.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:d,data:n},[i.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bt(){return window}function SS(t){bt().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bv(){return typeof bt().WorkerGlobalScope<"u"&&typeof bt().importScripts=="function"}async function AS(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function RS(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function kS(){return Bv()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $v="firebaseLocalStorageDb",CS=1,$a="firebaseLocalStorage",Hv="fbase_key";class to{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function pl(t,e){return t.transaction([$a],e?"readwrite":"readonly").objectStore($a)}function PS(){const t=indexedDB.deleteDatabase($v);return new to(t).toPromise()}function Oc(){const t=indexedDB.open($v,CS);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore($a,{keyPath:Hv})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains($a)?e(r):(r.close(),await PS(),e(await Oc()))})})}async function Zp(t,e,n){const r=pl(t,!0).put({[Hv]:e,value:n});return new to(r).toPromise()}async function NS(t,e){const n=pl(t,!1).get(e),r=await new to(n).toPromise();return r===void 0?null:r.value}function em(t,e){const n=pl(t,!0).delete(e);return new to(n).toPromise()}const DS=800,OS=3;class Wv{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Oc(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>OS)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Bv()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=fl._getInstance(kS()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await AS(),!this.activeServiceWorker)return;this.sender=new IS(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||RS()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Oc();return await Zp(e,Ba,"1"),await em(e,Ba),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Zp(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>NS(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>em(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=pl(i,!1).getAll();return new to(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),DS)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Wv.type="LOCAL";const VS=Wv;new Zs(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xS(t,e){return e?nn(e):(W(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class td extends Lv{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return oi(e,this._buildIdpRequest())}_linkToIdToken(e,n){return oi(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return oi(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function LS(t){return gS(t.auth,new td(t),t.bypassAuthState)}function MS(t){const{auth:e,user:n}=t;return W(n,e,"internal-error"),mS(n,new td(t),t.bypassAuthState)}async function FS(t){const{auth:e,user:n}=t;return W(n,e,"internal-error"),pS(n,new td(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qv{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:a,type:l}=e;if(a){this.reject(a);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(d){this.reject(d)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return LS;case"linkViaPopup":case"linkViaRedirect":return FS;case"reauthViaPopup":case"reauthViaRedirect":return MS;default:hn(this.auth,"internal-error")}}resolve(e){dn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){dn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const US=new Zs(2e3,1e4);class Xr extends qv{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Xr.currentPopupAction&&Xr.currentPopupAction.cancel(),Xr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return W(e,this.auth,"internal-error"),e}async onExecution(){dn(this.filter.length===1,"Popup operations only handle one event");const e=ed();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Ut(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Ut(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Xr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Ut(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,US.get())};e()}}Xr.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bS="pendingRedirect",aa=new Map;class zS extends qv{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=aa.get(this.auth._key());if(!e){try{const r=await jS(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}aa.set(this.auth._key(),e)}return this.bypassAuthState||aa.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function jS(t,e){const n=HS(e),r=$S(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function BS(t,e){aa.set(t._key(),e)}function $S(t){return nn(t._redirectPersistence)}function HS(t){return oa(bS,t.config.apiKey,t.name)}async function WS(t,e,n=!1){if(Dn(t.app))return Promise.reject(pr(t));const r=Jh(t),i=xS(r,e),a=await new zS(r,i,n).execute();return a&&!n&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,e)),a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qS=10*60*1e3;class KS{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!GS(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Kv(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Ut(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=qS&&this.cachedEventUids.clear(),this.cachedEventUids.has(tm(e))}saveEventToCache(e){this.cachedEventUids.add(tm(e)),this.lastProcessedEventTime=Date.now()}}function tm(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Kv({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function GS(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Kv(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function QS(t,e={}){return Ci(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YS=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,XS=/^https?/;async function JS(t){if(t.config.emulator)return;const{authorizedDomains:e}=await QS(t);for(const n of e)try{if(ZS(n))return}catch{}hn(t,"unauthorized-domain")}function ZS(t){const e=Nc(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const a=new URL(t);return a.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&a.hostname===r}if(!XS.test(n))return!1;if(YS.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eA=new Zs(3e4,6e4);function nm(){const t=bt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function tA(t){return new Promise((e,n)=>{var r,i,s;function a(){nm(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{nm(),n(Ut(t,"network-request-failed"))},timeout:eA.get()})}if(!((i=(r=bt().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=bt().gapi)===null||s===void 0)&&s.load)a();else{const l=aS("iframefcb");return bt()[l]=()=>{gapi.load?a():n(Ut(t,"network-request-failed"))},sS(`${oS()}?onload=${l}`).catch(u=>n(u))}}).catch(e=>{throw la=null,e})}let la=null;function nA(t){return la=la||tA(t),la}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rA=new Zs(5e3,15e3),iA="__/auth/iframe",sA="emulator/auth/iframe",oA={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},aA=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function lA(t){const e=t.config;W(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Gh(e,sA):`https://${t.config.authDomain}/${iA}`,r={apiKey:e.apiKey,appName:t.name,v:ki},i=aA.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Js(r).slice(1)}`}async function uA(t){const e=await nA(t),n=bt().gapi;return W(n,t,"internal-error"),e.open({where:document.body,url:lA(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:oA,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const a=Ut(t,"network-request-failed"),l=bt().setTimeout(()=>{s(a)},rA.get());function u(){bt().clearTimeout(l),i(r)}r.ping(u).then(u,()=>{s(a)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cA={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},hA=500,dA=600,fA="_blank",pA="http://localhost";class rm{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function mA(t,e,n,r=hA,i=dA){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const u=Object.assign(Object.assign({},cA),{width:r.toString(),height:i.toString(),top:s,left:a}),d=Qe().toLowerCase();n&&(l=kv(d)?fA:n),Av(d)&&(e=e||pA,u.scrollbars="yes");const f=Object.entries(u).reduce((v,[k,N])=>`${v}${k}=${N},`,"");if(XI(d)&&l!=="_self")return gA(e||"",l),new rm(null);const g=window.open(e||"",l,f);W(g,t,"popup-blocked");try{g.focus()}catch{}return new rm(g)}function gA(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yA="__/auth/handler",vA="emulator/auth/handler",_A=encodeURIComponent("fac");async function im(t,e,n,r,i,s){W(t.config.authDomain,t,"auth-domain-config-required"),W(t.config.apiKey,t,"invalid-api-key");const a={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:ki,eventId:i};if(e instanceof Mv){e.setDefaultLanguage(t.languageCode),a.providerId=e.providerId||"",wT(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,g]of Object.entries({}))a[f]=g}if(e instanceof eo){const f=e.getScopes().filter(g=>g!=="");f.length>0&&(a.scopes=f.join(","))}t.tenantId&&(a.tid=t.tenantId);const l=a;for(const f of Object.keys(l))l[f]===void 0&&delete l[f];const u=await t._getAppCheckToken(),d=u?`#${_A}=${encodeURIComponent(u)}`:"";return`${EA(t)}?${Js(l).slice(1)}${d}`}function EA({config:t}){return t.emulator?Gh(t,vA):`https://${t.authDomain}/${yA}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ru="webStorageSupport";class wA{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=jv,this._completeRedirectFn=WS,this._overrideRedirectResult=BS}async _openPopup(e,n,r,i){var s;dn((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const a=await im(e,n,r,Nc(),i);return mA(e,a,ed())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await im(e,n,r,Nc(),i);return SS(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(dn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await uA(e),r=new KS(e);return n.register("authEvent",i=>(W(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Ru,{type:Ru},i=>{var s;const a=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Ru];a!==void 0&&n(!!a),hn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=JS(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Ov()||Rv()||Xh()}}const TA=wA;var sm="@firebase/auth",om="1.7.9";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IA{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){W(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function SA(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function AA(t){gi(new Ir("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:a,authDomain:l}=r.options;W(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:a,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Vv(t)},d=new rS(r,i,s,u);return uS(d,n),d},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),gi(new Ir("auth-internal",e=>{const n=Jh(e.getProvider("auth").getImmediate());return(r=>new IA(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Hn(sm,om,SA(t)),Hn(sm,om,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RA=5*60,kA=uv("authIdTokenMaxAge")||RA;let am=null;const CA=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>kA)return;const i=n==null?void 0:n.token;am!==i&&(am=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function PA(t=fv()){const e=Wh(t,"auth");if(e.isInitialized())return e.getImmediate();const n=lS(t,{popupRedirectResolver:TA,persistence:[VS,wS,jv]}),r=uv("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const a=CA(s.toString());vS(n,a,()=>a(n.currentUser)),yS(n,l=>a(l))}}const i=av("auth");return i&&cS(n,`http://${i}`),n}function NA(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}iS({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=Ut("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",NA().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});AA("Browser");var lm=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var mr,Gv;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(_,m){function y(){}y.prototype=m.prototype,_.D=m.prototype,_.prototype=new y,_.prototype.constructor=_,_.C=function(w,A,C){for(var T=Array(arguments.length-2),gt=2;gt<arguments.length;gt++)T[gt-2]=arguments[gt];return m.prototype[A].apply(w,T)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(_,m,y){y||(y=0);var w=Array(16);if(typeof m=="string")for(var A=0;16>A;++A)w[A]=m.charCodeAt(y++)|m.charCodeAt(y++)<<8|m.charCodeAt(y++)<<16|m.charCodeAt(y++)<<24;else for(A=0;16>A;++A)w[A]=m[y++]|m[y++]<<8|m[y++]<<16|m[y++]<<24;m=_.g[0],y=_.g[1],A=_.g[2];var C=_.g[3],T=m+(C^y&(A^C))+w[0]+3614090360&4294967295;m=y+(T<<7&4294967295|T>>>25),T=C+(A^m&(y^A))+w[1]+3905402710&4294967295,C=m+(T<<12&4294967295|T>>>20),T=A+(y^C&(m^y))+w[2]+606105819&4294967295,A=C+(T<<17&4294967295|T>>>15),T=y+(m^A&(C^m))+w[3]+3250441966&4294967295,y=A+(T<<22&4294967295|T>>>10),T=m+(C^y&(A^C))+w[4]+4118548399&4294967295,m=y+(T<<7&4294967295|T>>>25),T=C+(A^m&(y^A))+w[5]+1200080426&4294967295,C=m+(T<<12&4294967295|T>>>20),T=A+(y^C&(m^y))+w[6]+2821735955&4294967295,A=C+(T<<17&4294967295|T>>>15),T=y+(m^A&(C^m))+w[7]+4249261313&4294967295,y=A+(T<<22&4294967295|T>>>10),T=m+(C^y&(A^C))+w[8]+1770035416&4294967295,m=y+(T<<7&4294967295|T>>>25),T=C+(A^m&(y^A))+w[9]+2336552879&4294967295,C=m+(T<<12&4294967295|T>>>20),T=A+(y^C&(m^y))+w[10]+4294925233&4294967295,A=C+(T<<17&4294967295|T>>>15),T=y+(m^A&(C^m))+w[11]+2304563134&4294967295,y=A+(T<<22&4294967295|T>>>10),T=m+(C^y&(A^C))+w[12]+1804603682&4294967295,m=y+(T<<7&4294967295|T>>>25),T=C+(A^m&(y^A))+w[13]+4254626195&4294967295,C=m+(T<<12&4294967295|T>>>20),T=A+(y^C&(m^y))+w[14]+2792965006&4294967295,A=C+(T<<17&4294967295|T>>>15),T=y+(m^A&(C^m))+w[15]+1236535329&4294967295,y=A+(T<<22&4294967295|T>>>10),T=m+(A^C&(y^A))+w[1]+4129170786&4294967295,m=y+(T<<5&4294967295|T>>>27),T=C+(y^A&(m^y))+w[6]+3225465664&4294967295,C=m+(T<<9&4294967295|T>>>23),T=A+(m^y&(C^m))+w[11]+643717713&4294967295,A=C+(T<<14&4294967295|T>>>18),T=y+(C^m&(A^C))+w[0]+3921069994&4294967295,y=A+(T<<20&4294967295|T>>>12),T=m+(A^C&(y^A))+w[5]+3593408605&4294967295,m=y+(T<<5&4294967295|T>>>27),T=C+(y^A&(m^y))+w[10]+38016083&4294967295,C=m+(T<<9&4294967295|T>>>23),T=A+(m^y&(C^m))+w[15]+3634488961&4294967295,A=C+(T<<14&4294967295|T>>>18),T=y+(C^m&(A^C))+w[4]+3889429448&4294967295,y=A+(T<<20&4294967295|T>>>12),T=m+(A^C&(y^A))+w[9]+568446438&4294967295,m=y+(T<<5&4294967295|T>>>27),T=C+(y^A&(m^y))+w[14]+3275163606&4294967295,C=m+(T<<9&4294967295|T>>>23),T=A+(m^y&(C^m))+w[3]+4107603335&4294967295,A=C+(T<<14&4294967295|T>>>18),T=y+(C^m&(A^C))+w[8]+1163531501&4294967295,y=A+(T<<20&4294967295|T>>>12),T=m+(A^C&(y^A))+w[13]+2850285829&4294967295,m=y+(T<<5&4294967295|T>>>27),T=C+(y^A&(m^y))+w[2]+4243563512&4294967295,C=m+(T<<9&4294967295|T>>>23),T=A+(m^y&(C^m))+w[7]+1735328473&4294967295,A=C+(T<<14&4294967295|T>>>18),T=y+(C^m&(A^C))+w[12]+2368359562&4294967295,y=A+(T<<20&4294967295|T>>>12),T=m+(y^A^C)+w[5]+4294588738&4294967295,m=y+(T<<4&4294967295|T>>>28),T=C+(m^y^A)+w[8]+2272392833&4294967295,C=m+(T<<11&4294967295|T>>>21),T=A+(C^m^y)+w[11]+1839030562&4294967295,A=C+(T<<16&4294967295|T>>>16),T=y+(A^C^m)+w[14]+4259657740&4294967295,y=A+(T<<23&4294967295|T>>>9),T=m+(y^A^C)+w[1]+2763975236&4294967295,m=y+(T<<4&4294967295|T>>>28),T=C+(m^y^A)+w[4]+1272893353&4294967295,C=m+(T<<11&4294967295|T>>>21),T=A+(C^m^y)+w[7]+4139469664&4294967295,A=C+(T<<16&4294967295|T>>>16),T=y+(A^C^m)+w[10]+3200236656&4294967295,y=A+(T<<23&4294967295|T>>>9),T=m+(y^A^C)+w[13]+681279174&4294967295,m=y+(T<<4&4294967295|T>>>28),T=C+(m^y^A)+w[0]+3936430074&4294967295,C=m+(T<<11&4294967295|T>>>21),T=A+(C^m^y)+w[3]+3572445317&4294967295,A=C+(T<<16&4294967295|T>>>16),T=y+(A^C^m)+w[6]+76029189&4294967295,y=A+(T<<23&4294967295|T>>>9),T=m+(y^A^C)+w[9]+3654602809&4294967295,m=y+(T<<4&4294967295|T>>>28),T=C+(m^y^A)+w[12]+3873151461&4294967295,C=m+(T<<11&4294967295|T>>>21),T=A+(C^m^y)+w[15]+530742520&4294967295,A=C+(T<<16&4294967295|T>>>16),T=y+(A^C^m)+w[2]+3299628645&4294967295,y=A+(T<<23&4294967295|T>>>9),T=m+(A^(y|~C))+w[0]+4096336452&4294967295,m=y+(T<<6&4294967295|T>>>26),T=C+(y^(m|~A))+w[7]+1126891415&4294967295,C=m+(T<<10&4294967295|T>>>22),T=A+(m^(C|~y))+w[14]+2878612391&4294967295,A=C+(T<<15&4294967295|T>>>17),T=y+(C^(A|~m))+w[5]+4237533241&4294967295,y=A+(T<<21&4294967295|T>>>11),T=m+(A^(y|~C))+w[12]+1700485571&4294967295,m=y+(T<<6&4294967295|T>>>26),T=C+(y^(m|~A))+w[3]+2399980690&4294967295,C=m+(T<<10&4294967295|T>>>22),T=A+(m^(C|~y))+w[10]+4293915773&4294967295,A=C+(T<<15&4294967295|T>>>17),T=y+(C^(A|~m))+w[1]+2240044497&4294967295,y=A+(T<<21&4294967295|T>>>11),T=m+(A^(y|~C))+w[8]+1873313359&4294967295,m=y+(T<<6&4294967295|T>>>26),T=C+(y^(m|~A))+w[15]+4264355552&4294967295,C=m+(T<<10&4294967295|T>>>22),T=A+(m^(C|~y))+w[6]+2734768916&4294967295,A=C+(T<<15&4294967295|T>>>17),T=y+(C^(A|~m))+w[13]+1309151649&4294967295,y=A+(T<<21&4294967295|T>>>11),T=m+(A^(y|~C))+w[4]+4149444226&4294967295,m=y+(T<<6&4294967295|T>>>26),T=C+(y^(m|~A))+w[11]+3174756917&4294967295,C=m+(T<<10&4294967295|T>>>22),T=A+(m^(C|~y))+w[2]+718787259&4294967295,A=C+(T<<15&4294967295|T>>>17),T=y+(C^(A|~m))+w[9]+3951481745&4294967295,_.g[0]=_.g[0]+m&4294967295,_.g[1]=_.g[1]+(A+(T<<21&4294967295|T>>>11))&4294967295,_.g[2]=_.g[2]+A&4294967295,_.g[3]=_.g[3]+C&4294967295}r.prototype.u=function(_,m){m===void 0&&(m=_.length);for(var y=m-this.blockSize,w=this.B,A=this.h,C=0;C<m;){if(A==0)for(;C<=y;)i(this,_,C),C+=this.blockSize;if(typeof _=="string"){for(;C<m;)if(w[A++]=_.charCodeAt(C++),A==this.blockSize){i(this,w),A=0;break}}else for(;C<m;)if(w[A++]=_[C++],A==this.blockSize){i(this,w),A=0;break}}this.h=A,this.o+=m},r.prototype.v=function(){var _=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);_[0]=128;for(var m=1;m<_.length-8;++m)_[m]=0;var y=8*this.o;for(m=_.length-8;m<_.length;++m)_[m]=y&255,y/=256;for(this.u(_),_=Array(16),m=y=0;4>m;++m)for(var w=0;32>w;w+=8)_[y++]=this.g[m]>>>w&255;return _};function s(_,m){var y=l;return Object.prototype.hasOwnProperty.call(y,_)?y[_]:y[_]=m(_)}function a(_,m){this.h=m;for(var y=[],w=!0,A=_.length-1;0<=A;A--){var C=_[A]|0;w&&C==m||(y[A]=C,w=!1)}this.g=y}var l={};function u(_){return-128<=_&&128>_?s(_,function(m){return new a([m|0],0>m?-1:0)}):new a([_|0],0>_?-1:0)}function d(_){if(isNaN(_)||!isFinite(_))return g;if(0>_)return L(d(-_));for(var m=[],y=1,w=0;_>=y;w++)m[w]=_/y|0,y*=4294967296;return new a(m,0)}function f(_,m){if(_.length==0)throw Error("number format error: empty string");if(m=m||10,2>m||36<m)throw Error("radix out of range: "+m);if(_.charAt(0)=="-")return L(f(_.substring(1),m));if(0<=_.indexOf("-"))throw Error('number format error: interior "-" character');for(var y=d(Math.pow(m,8)),w=g,A=0;A<_.length;A+=8){var C=Math.min(8,_.length-A),T=parseInt(_.substring(A,A+C),m);8>C?(C=d(Math.pow(m,C)),w=w.j(C).add(d(T))):(w=w.j(y),w=w.add(d(T)))}return w}var g=u(0),v=u(1),k=u(16777216);t=a.prototype,t.m=function(){if(O(this))return-L(this).m();for(var _=0,m=1,y=0;y<this.g.length;y++){var w=this.i(y);_+=(0<=w?w:4294967296+w)*m,m*=4294967296}return _},t.toString=function(_){if(_=_||10,2>_||36<_)throw Error("radix out of range: "+_);if(N(this))return"0";if(O(this))return"-"+L(this).toString(_);for(var m=d(Math.pow(_,6)),y=this,w="";;){var A=D(y,m).g;y=I(y,A.j(m));var C=((0<y.g.length?y.g[0]:y.h)>>>0).toString(_);if(y=A,N(y))return C+w;for(;6>C.length;)C="0"+C;w=C+w}},t.i=function(_){return 0>_?0:_<this.g.length?this.g[_]:this.h};function N(_){if(_.h!=0)return!1;for(var m=0;m<_.g.length;m++)if(_.g[m]!=0)return!1;return!0}function O(_){return _.h==-1}t.l=function(_){return _=I(this,_),O(_)?-1:N(_)?0:1};function L(_){for(var m=_.g.length,y=[],w=0;w<m;w++)y[w]=~_.g[w];return new a(y,~_.h).add(v)}t.abs=function(){return O(this)?L(this):this},t.add=function(_){for(var m=Math.max(this.g.length,_.g.length),y=[],w=0,A=0;A<=m;A++){var C=w+(this.i(A)&65535)+(_.i(A)&65535),T=(C>>>16)+(this.i(A)>>>16)+(_.i(A)>>>16);w=T>>>16,C&=65535,T&=65535,y[A]=T<<16|C}return new a(y,y[y.length-1]&-2147483648?-1:0)};function I(_,m){return _.add(L(m))}t.j=function(_){if(N(this)||N(_))return g;if(O(this))return O(_)?L(this).j(L(_)):L(L(this).j(_));if(O(_))return L(this.j(L(_)));if(0>this.l(k)&&0>_.l(k))return d(this.m()*_.m());for(var m=this.g.length+_.g.length,y=[],w=0;w<2*m;w++)y[w]=0;for(w=0;w<this.g.length;w++)for(var A=0;A<_.g.length;A++){var C=this.i(w)>>>16,T=this.i(w)&65535,gt=_.i(A)>>>16,Zn=_.i(A)&65535;y[2*w+2*A]+=T*Zn,E(y,2*w+2*A),y[2*w+2*A+1]+=C*Zn,E(y,2*w+2*A+1),y[2*w+2*A+1]+=T*gt,E(y,2*w+2*A+1),y[2*w+2*A+2]+=C*gt,E(y,2*w+2*A+2)}for(w=0;w<m;w++)y[w]=y[2*w+1]<<16|y[2*w];for(w=m;w<2*m;w++)y[w]=0;return new a(y,0)};function E(_,m){for(;(_[m]&65535)!=_[m];)_[m+1]+=_[m]>>>16,_[m]&=65535,m++}function S(_,m){this.g=_,this.h=m}function D(_,m){if(N(m))throw Error("division by zero");if(N(_))return new S(g,g);if(O(_))return m=D(L(_),m),new S(L(m.g),L(m.h));if(O(m))return m=D(_,L(m)),new S(L(m.g),m.h);if(30<_.g.length){if(O(_)||O(m))throw Error("slowDivide_ only works with positive integers.");for(var y=v,w=m;0>=w.l(_);)y=U(y),w=U(w);var A=F(y,1),C=F(w,1);for(w=F(w,2),y=F(y,2);!N(w);){var T=C.add(w);0>=T.l(_)&&(A=A.add(y),C=T),w=F(w,1),y=F(y,1)}return m=I(_,A.j(m)),new S(A,m)}for(A=g;0<=_.l(m);){for(y=Math.max(1,Math.floor(_.m()/m.m())),w=Math.ceil(Math.log(y)/Math.LN2),w=48>=w?1:Math.pow(2,w-48),C=d(y),T=C.j(m);O(T)||0<T.l(_);)y-=w,C=d(y),T=C.j(m);N(C)&&(C=v),A=A.add(C),_=I(_,T)}return new S(A,_)}t.A=function(_){return D(this,_).h},t.and=function(_){for(var m=Math.max(this.g.length,_.g.length),y=[],w=0;w<m;w++)y[w]=this.i(w)&_.i(w);return new a(y,this.h&_.h)},t.or=function(_){for(var m=Math.max(this.g.length,_.g.length),y=[],w=0;w<m;w++)y[w]=this.i(w)|_.i(w);return new a(y,this.h|_.h)},t.xor=function(_){for(var m=Math.max(this.g.length,_.g.length),y=[],w=0;w<m;w++)y[w]=this.i(w)^_.i(w);return new a(y,this.h^_.h)};function U(_){for(var m=_.g.length+1,y=[],w=0;w<m;w++)y[w]=_.i(w)<<1|_.i(w-1)>>>31;return new a(y,_.h)}function F(_,m){var y=m>>5;m%=32;for(var w=_.g.length-y,A=[],C=0;C<w;C++)A[C]=0<m?_.i(C+y)>>>m|_.i(C+y+1)<<32-m:_.i(C+y);return new a(A,_.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,Gv=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=d,a.fromString=f,mr=a}).apply(typeof lm<"u"?lm:typeof self<"u"?self:typeof window<"u"?window:{});var $o=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Qv,ss,Yv,ua,Vc,Xv,Jv,Zv;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(o,c,h){return o==Array.prototype||o==Object.prototype||(o[c]=h.value),o};function n(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof $o=="object"&&$o];for(var c=0;c<o.length;++c){var h=o[c];if(h&&h.Math==Math)return h}throw Error("Cannot find global object")}var r=n(this);function i(o,c){if(c)e:{var h=r;o=o.split(".");for(var p=0;p<o.length-1;p++){var R=o[p];if(!(R in h))break e;h=h[R]}o=o[o.length-1],p=h[o],c=c(p),c!=p&&c!=null&&e(h,o,{configurable:!0,writable:!0,value:c})}}function s(o,c){o instanceof String&&(o+="");var h=0,p=!1,R={next:function(){if(!p&&h<o.length){var P=h++;return{value:c(P,o[P]),done:!1}}return p=!0,{done:!0,value:void 0}}};return R[Symbol.iterator]=function(){return R},R}i("Array.prototype.values",function(o){return o||function(){return s(this,function(c,h){return h})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},l=this||self;function u(o){var c=typeof o;return c=c!="object"?c:o?Array.isArray(o)?"array":c:"null",c=="array"||c=="object"&&typeof o.length=="number"}function d(o){var c=typeof o;return c=="object"&&o!=null||c=="function"}function f(o,c,h){return o.call.apply(o.bind,arguments)}function g(o,c,h){if(!o)throw Error();if(2<arguments.length){var p=Array.prototype.slice.call(arguments,2);return function(){var R=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(R,p),o.apply(c,R)}}return function(){return o.apply(c,arguments)}}function v(o,c,h){return v=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:g,v.apply(null,arguments)}function k(o,c){var h=Array.prototype.slice.call(arguments,1);return function(){var p=h.slice();return p.push.apply(p,arguments),o.apply(this,p)}}function N(o,c){function h(){}h.prototype=c.prototype,o.aa=c.prototype,o.prototype=new h,o.prototype.constructor=o,o.Qb=function(p,R,P){for(var M=Array(arguments.length-2),oe=2;oe<arguments.length;oe++)M[oe-2]=arguments[oe];return c.prototype[R].apply(p,M)}}function O(o){const c=o.length;if(0<c){const h=Array(c);for(let p=0;p<c;p++)h[p]=o[p];return h}return[]}function L(o,c){for(let h=1;h<arguments.length;h++){const p=arguments[h];if(u(p)){const R=o.length||0,P=p.length||0;o.length=R+P;for(let M=0;M<P;M++)o[R+M]=p[M]}else o.push(p)}}class I{constructor(c,h){this.i=c,this.j=h,this.h=0,this.g=null}get(){let c;return 0<this.h?(this.h--,c=this.g,this.g=c.next,c.next=null):c=this.i(),c}}function E(o){return/^[\s\xa0]*$/.test(o)}function S(){var o=l.navigator;return o&&(o=o.userAgent)?o:""}function D(o){return D[" "](o),o}D[" "]=function(){};var U=S().indexOf("Gecko")!=-1&&!(S().toLowerCase().indexOf("webkit")!=-1&&S().indexOf("Edge")==-1)&&!(S().indexOf("Trident")!=-1||S().indexOf("MSIE")!=-1)&&S().indexOf("Edge")==-1;function F(o,c,h){for(const p in o)c.call(h,o[p],p,o)}function _(o,c){for(const h in o)c.call(void 0,o[h],h,o)}function m(o){const c={};for(const h in o)c[h]=o[h];return c}const y="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function w(o,c){let h,p;for(let R=1;R<arguments.length;R++){p=arguments[R];for(h in p)o[h]=p[h];for(let P=0;P<y.length;P++)h=y[P],Object.prototype.hasOwnProperty.call(p,h)&&(o[h]=p[h])}}function A(o){var c=1;o=o.split(":");const h=[];for(;0<c&&o.length;)h.push(o.shift()),c--;return o.length&&h.push(o.join(":")),h}function C(o){l.setTimeout(()=>{throw o},0)}function T(){var o=q;let c=null;return o.g&&(c=o.g,o.g=o.g.next,o.g||(o.h=null),c.next=null),c}class gt{constructor(){this.h=this.g=null}add(c,h){const p=Zn.get();p.set(c,h),this.h?this.h.next=p:this.g=p,this.h=p}}var Zn=new I(()=>new Oi,o=>o.reset());class Oi{constructor(){this.next=this.g=this.h=null}set(c,h){this.h=c,this.g=h,this.next=null}reset(){this.next=this.g=this.h=null}}let $t,z=!1,q=new gt,G=()=>{const o=l.Promise.resolve(void 0);$t=()=>{o.then(de)}};var de=()=>{for(var o;o=T();){try{o.h.call(o.g)}catch(h){C(h)}var c=Zn;c.j(o),100>c.h&&(c.h++,o.next=c.g,c.g=o)}z=!1};function se(){this.s=this.s,this.C=this.C}se.prototype.s=!1,se.prototype.ma=function(){this.s||(this.s=!0,this.N())},se.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Ee(o,c){this.type=o,this.g=this.target=c,this.defaultPrevented=!1}Ee.prototype.h=function(){this.defaultPrevented=!0};var Ht=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var o=!1,c=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const h=()=>{};l.addEventListener("test",h,c),l.removeEventListener("test",h,c)}catch{}return o}();function Wt(o,c){if(Ee.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o){var h=this.type=o.type,p=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;if(this.target=o.target||o.srcElement,this.g=c,c=o.relatedTarget){if(U){e:{try{D(c.nodeName);var R=!0;break e}catch{}R=!1}R||(c=null)}}else h=="mouseover"?c=o.fromElement:h=="mouseout"&&(c=o.toElement);this.relatedTarget=c,p?(this.clientX=p.clientX!==void 0?p.clientX:p.pageX,this.clientY=p.clientY!==void 0?p.clientY:p.pageY,this.screenX=p.screenX||0,this.screenY=p.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=typeof o.pointerType=="string"?o.pointerType:qt[o.pointerType]||"",this.state=o.state,this.i=o,o.defaultPrevented&&Wt.aa.h.call(this)}}N(Wt,Ee);var qt={2:"touch",3:"pen",4:"mouse"};Wt.prototype.h=function(){Wt.aa.h.call(this);var o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var Kt="closure_listenable_"+(1e6*Math.random()|0),Q_=0;function Y_(o,c,h,p,R){this.listener=o,this.proxy=null,this.src=c,this.type=h,this.capture=!!p,this.ha=R,this.key=++Q_,this.da=this.fa=!1}function oo(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function ao(o){this.src=o,this.g={},this.h=0}ao.prototype.add=function(o,c,h,p,R){var P=o.toString();o=this.g[P],o||(o=this.g[P]=[],this.h++);var M=Al(o,c,p,R);return-1<M?(c=o[M],h||(c.fa=!1)):(c=new Y_(c,this.src,P,!!p,R),c.fa=h,o.push(c)),c};function Sl(o,c){var h=c.type;if(h in o.g){var p=o.g[h],R=Array.prototype.indexOf.call(p,c,void 0),P;(P=0<=R)&&Array.prototype.splice.call(p,R,1),P&&(oo(c),o.g[h].length==0&&(delete o.g[h],o.h--))}}function Al(o,c,h,p){for(var R=0;R<o.length;++R){var P=o[R];if(!P.da&&P.listener==c&&P.capture==!!h&&P.ha==p)return R}return-1}var Rl="closure_lm_"+(1e6*Math.random()|0),kl={};function Rd(o,c,h,p,R){if(Array.isArray(c)){for(var P=0;P<c.length;P++)Rd(o,c[P],h,p,R);return null}return h=Pd(h),o&&o[Kt]?o.K(c,h,d(p)?!!p.capture:!1,R):X_(o,c,h,!1,p,R)}function X_(o,c,h,p,R,P){if(!c)throw Error("Invalid event type");var M=d(R)?!!R.capture:!!R,oe=Pl(o);if(oe||(o[Rl]=oe=new ao(o)),h=oe.add(c,h,p,M,P),h.proxy)return h;if(p=J_(),h.proxy=p,p.src=o,p.listener=h,o.addEventListener)Ht||(R=M),R===void 0&&(R=!1),o.addEventListener(c.toString(),p,R);else if(o.attachEvent)o.attachEvent(Cd(c.toString()),p);else if(o.addListener&&o.removeListener)o.addListener(p);else throw Error("addEventListener and attachEvent are unavailable.");return h}function J_(){function o(h){return c.call(o.src,o.listener,h)}const c=Z_;return o}function kd(o,c,h,p,R){if(Array.isArray(c))for(var P=0;P<c.length;P++)kd(o,c[P],h,p,R);else p=d(p)?!!p.capture:!!p,h=Pd(h),o&&o[Kt]?(o=o.i,c=String(c).toString(),c in o.g&&(P=o.g[c],h=Al(P,h,p,R),-1<h&&(oo(P[h]),Array.prototype.splice.call(P,h,1),P.length==0&&(delete o.g[c],o.h--)))):o&&(o=Pl(o))&&(c=o.g[c.toString()],o=-1,c&&(o=Al(c,h,p,R)),(h=-1<o?c[o]:null)&&Cl(h))}function Cl(o){if(typeof o!="number"&&o&&!o.da){var c=o.src;if(c&&c[Kt])Sl(c.i,o);else{var h=o.type,p=o.proxy;c.removeEventListener?c.removeEventListener(h,p,o.capture):c.detachEvent?c.detachEvent(Cd(h),p):c.addListener&&c.removeListener&&c.removeListener(p),(h=Pl(c))?(Sl(h,o),h.h==0&&(h.src=null,c[Rl]=null)):oo(o)}}}function Cd(o){return o in kl?kl[o]:kl[o]="on"+o}function Z_(o,c){if(o.da)o=!0;else{c=new Wt(c,this);var h=o.listener,p=o.ha||o.src;o.fa&&Cl(o),o=h.call(p,c)}return o}function Pl(o){return o=o[Rl],o instanceof ao?o:null}var Nl="__closure_events_fn_"+(1e9*Math.random()>>>0);function Pd(o){return typeof o=="function"?o:(o[Nl]||(o[Nl]=function(c){return o.handleEvent(c)}),o[Nl])}function be(){se.call(this),this.i=new ao(this),this.M=this,this.F=null}N(be,se),be.prototype[Kt]=!0,be.prototype.removeEventListener=function(o,c,h,p){kd(this,o,c,h,p)};function Ye(o,c){var h,p=o.F;if(p)for(h=[];p;p=p.F)h.push(p);if(o=o.M,p=c.type||c,typeof c=="string")c=new Ee(c,o);else if(c instanceof Ee)c.target=c.target||o;else{var R=c;c=new Ee(p,o),w(c,R)}if(R=!0,h)for(var P=h.length-1;0<=P;P--){var M=c.g=h[P];R=lo(M,p,!0,c)&&R}if(M=c.g=o,R=lo(M,p,!0,c)&&R,R=lo(M,p,!1,c)&&R,h)for(P=0;P<h.length;P++)M=c.g=h[P],R=lo(M,p,!1,c)&&R}be.prototype.N=function(){if(be.aa.N.call(this),this.i){var o=this.i,c;for(c in o.g){for(var h=o.g[c],p=0;p<h.length;p++)oo(h[p]);delete o.g[c],o.h--}}this.F=null},be.prototype.K=function(o,c,h,p){return this.i.add(String(o),c,!1,h,p)},be.prototype.L=function(o,c,h,p){return this.i.add(String(o),c,!0,h,p)};function lo(o,c,h,p){if(c=o.i.g[String(c)],!c)return!0;c=c.concat();for(var R=!0,P=0;P<c.length;++P){var M=c[P];if(M&&!M.da&&M.capture==h){var oe=M.listener,Oe=M.ha||M.src;M.fa&&Sl(o.i,M),R=oe.call(Oe,p)!==!1&&R}}return R&&!p.defaultPrevented}function Nd(o,c,h){if(typeof o=="function")h&&(o=v(o,h));else if(o&&typeof o.handleEvent=="function")o=v(o.handleEvent,o);else throw Error("Invalid listener argument");return 2147483647<Number(c)?-1:l.setTimeout(o,c||0)}function Dd(o){o.g=Nd(()=>{o.g=null,o.i&&(o.i=!1,Dd(o))},o.l);const c=o.h;o.h=null,o.m.apply(null,c)}class eE extends se{constructor(c,h){super(),this.m=c,this.l=h,this.h=null,this.i=!1,this.g=null}j(c){this.h=arguments,this.g?this.i=!0:Dd(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Vi(o){se.call(this),this.h=o,this.g={}}N(Vi,se);var Od=[];function Vd(o){F(o.g,function(c,h){this.g.hasOwnProperty(h)&&Cl(c)},o),o.g={}}Vi.prototype.N=function(){Vi.aa.N.call(this),Vd(this)},Vi.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Dl=l.JSON.stringify,tE=l.JSON.parse,nE=class{stringify(o){return l.JSON.stringify(o,void 0)}parse(o){return l.JSON.parse(o,void 0)}};function Ol(){}Ol.prototype.h=null;function xd(o){return o.h||(o.h=o.i())}function Ld(){}var xi={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Vl(){Ee.call(this,"d")}N(Vl,Ee);function xl(){Ee.call(this,"c")}N(xl,Ee);var er={},Md=null;function uo(){return Md=Md||new be}er.La="serverreachability";function Fd(o){Ee.call(this,er.La,o)}N(Fd,Ee);function Li(o){const c=uo();Ye(c,new Fd(c))}er.STAT_EVENT="statevent";function Ud(o,c){Ee.call(this,er.STAT_EVENT,o),this.stat=c}N(Ud,Ee);function Xe(o){const c=uo();Ye(c,new Ud(c,o))}er.Ma="timingevent";function bd(o,c){Ee.call(this,er.Ma,o),this.size=c}N(bd,Ee);function Mi(o,c){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){o()},c)}function Fi(){this.g=!0}Fi.prototype.xa=function(){this.g=!1};function rE(o,c,h,p,R,P){o.info(function(){if(o.g)if(P)for(var M="",oe=P.split("&"),Oe=0;Oe<oe.length;Oe++){var ne=oe[Oe].split("=");if(1<ne.length){var ze=ne[0];ne=ne[1];var je=ze.split("_");M=2<=je.length&&je[1]=="type"?M+(ze+"="+ne+"&"):M+(ze+"=redacted&")}}else M=null;else M=P;return"XMLHTTP REQ ("+p+") [attempt "+R+"]: "+c+`
`+h+`
`+M})}function iE(o,c,h,p,R,P,M){o.info(function(){return"XMLHTTP RESP ("+p+") [ attempt "+R+"]: "+c+`
`+h+`
`+P+" "+M})}function Dr(o,c,h,p){o.info(function(){return"XMLHTTP TEXT ("+c+"): "+oE(o,h)+(p?" "+p:"")})}function sE(o,c){o.info(function(){return"TIMEOUT: "+c})}Fi.prototype.info=function(){};function oE(o,c){if(!o.g)return c;if(!c)return null;try{var h=JSON.parse(c);if(h){for(o=0;o<h.length;o++)if(Array.isArray(h[o])){var p=h[o];if(!(2>p.length)){var R=p[1];if(Array.isArray(R)&&!(1>R.length)){var P=R[0];if(P!="noop"&&P!="stop"&&P!="close")for(var M=1;M<R.length;M++)R[M]=""}}}}return Dl(h)}catch{return c}}var co={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},zd={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Ll;function ho(){}N(ho,Ol),ho.prototype.g=function(){return new XMLHttpRequest},ho.prototype.i=function(){return{}},Ll=new ho;function gn(o,c,h,p){this.j=o,this.i=c,this.l=h,this.R=p||1,this.U=new Vi(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new jd}function jd(){this.i=null,this.g="",this.h=!1}var Bd={},Ml={};function Fl(o,c,h){o.L=1,o.v=go(Gt(c)),o.m=h,o.P=!0,$d(o,null)}function $d(o,c){o.F=Date.now(),fo(o),o.A=Gt(o.v);var h=o.A,p=o.R;Array.isArray(p)||(p=[String(p)]),rf(h.i,"t",p),o.C=0,h=o.j.J,o.h=new jd,o.g=Tf(o.j,h?c:null,!o.m),0<o.O&&(o.M=new eE(v(o.Y,o,o.g),o.O)),c=o.U,h=o.g,p=o.ca;var R="readystatechange";Array.isArray(R)||(R&&(Od[0]=R.toString()),R=Od);for(var P=0;P<R.length;P++){var M=Rd(h,R[P],p||c.handleEvent,!1,c.h||c);if(!M)break;c.g[M.key]=M}c=o.H?m(o.H):{},o.m?(o.u||(o.u="POST"),c["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.A,o.u,o.m,c)):(o.u="GET",o.g.ea(o.A,o.u,null,c)),Li(),rE(o.i,o.u,o.A,o.l,o.R,o.m)}gn.prototype.ca=function(o){o=o.target;const c=this.M;c&&Qt(o)==3?c.j():this.Y(o)},gn.prototype.Y=function(o){try{if(o==this.g)e:{const je=Qt(this.g);var c=this.g.Ba();const xr=this.g.Z();if(!(3>je)&&(je!=3||this.g&&(this.h.h||this.g.oa()||hf(this.g)))){this.J||je!=4||c==7||(c==8||0>=xr?Li(3):Li(2)),Ul(this);var h=this.g.Z();this.X=h;t:if(Hd(this)){var p=hf(this.g);o="";var R=p.length,P=Qt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){tr(this),Ui(this);var M="";break t}this.h.i=new l.TextDecoder}for(c=0;c<R;c++)this.h.h=!0,o+=this.h.i.decode(p[c],{stream:!(P&&c==R-1)});p.length=0,this.h.g+=o,this.C=0,M=this.h.g}else M=this.g.oa();if(this.o=h==200,iE(this.i,this.u,this.A,this.l,this.R,je,h),this.o){if(this.T&&!this.K){t:{if(this.g){var oe,Oe=this.g;if((oe=Oe.g?Oe.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!E(oe)){var ne=oe;break t}}ne=null}if(h=ne)Dr(this.i,this.l,h,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,bl(this,h);else{this.o=!1,this.s=3,Xe(12),tr(this),Ui(this);break e}}if(this.P){h=!0;let St;for(;!this.J&&this.C<M.length;)if(St=aE(this,M),St==Ml){je==4&&(this.s=4,Xe(14),h=!1),Dr(this.i,this.l,null,"[Incomplete Response]");break}else if(St==Bd){this.s=4,Xe(15),Dr(this.i,this.l,M,"[Invalid Chunk]"),h=!1;break}else Dr(this.i,this.l,St,null),bl(this,St);if(Hd(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),je!=4||M.length!=0||this.h.h||(this.s=1,Xe(16),h=!1),this.o=this.o&&h,!h)Dr(this.i,this.l,M,"[Invalid Chunked Response]"),tr(this),Ui(this);else if(0<M.length&&!this.W){this.W=!0;var ze=this.j;ze.g==this&&ze.ba&&!ze.M&&(ze.j.info("Great, no buffering proxy detected. Bytes received: "+M.length),Wl(ze),ze.M=!0,Xe(11))}}else Dr(this.i,this.l,M,null),bl(this,M);je==4&&tr(this),this.o&&!this.J&&(je==4?vf(this.j,this):(this.o=!1,fo(this)))}else SE(this.g),h==400&&0<M.indexOf("Unknown SID")?(this.s=3,Xe(12)):(this.s=0,Xe(13)),tr(this),Ui(this)}}}catch{}finally{}};function Hd(o){return o.g?o.u=="GET"&&o.L!=2&&o.j.Ca:!1}function aE(o,c){var h=o.C,p=c.indexOf(`
`,h);return p==-1?Ml:(h=Number(c.substring(h,p)),isNaN(h)?Bd:(p+=1,p+h>c.length?Ml:(c=c.slice(p,p+h),o.C=p+h,c)))}gn.prototype.cancel=function(){this.J=!0,tr(this)};function fo(o){o.S=Date.now()+o.I,Wd(o,o.I)}function Wd(o,c){if(o.B!=null)throw Error("WatchDog timer not null");o.B=Mi(v(o.ba,o),c)}function Ul(o){o.B&&(l.clearTimeout(o.B),o.B=null)}gn.prototype.ba=function(){this.B=null;const o=Date.now();0<=o-this.S?(sE(this.i,this.A),this.L!=2&&(Li(),Xe(17)),tr(this),this.s=2,Ui(this)):Wd(this,this.S-o)};function Ui(o){o.j.G==0||o.J||vf(o.j,o)}function tr(o){Ul(o);var c=o.M;c&&typeof c.ma=="function"&&c.ma(),o.M=null,Vd(o.U),o.g&&(c=o.g,o.g=null,c.abort(),c.ma())}function bl(o,c){try{var h=o.j;if(h.G!=0&&(h.g==o||zl(h.h,o))){if(!o.K&&zl(h.h,o)&&h.G==3){try{var p=h.Da.g.parse(c)}catch{p=null}if(Array.isArray(p)&&p.length==3){var R=p;if(R[0]==0){e:if(!h.u){if(h.g)if(h.g.F+3e3<o.F)To(h),Eo(h);else break e;Hl(h),Xe(18)}}else h.za=R[1],0<h.za-h.T&&37500>R[2]&&h.F&&h.v==0&&!h.C&&(h.C=Mi(v(h.Za,h),6e3));if(1>=Gd(h.h)&&h.ca){try{h.ca()}catch{}h.ca=void 0}}else rr(h,11)}else if((o.K||h.g==o)&&To(h),!E(c))for(R=h.Da.g.parse(c),c=0;c<R.length;c++){let ne=R[c];if(h.T=ne[0],ne=ne[1],h.G==2)if(ne[0]=="c"){h.K=ne[1],h.ia=ne[2];const ze=ne[3];ze!=null&&(h.la=ze,h.j.info("VER="+h.la));const je=ne[4];je!=null&&(h.Aa=je,h.j.info("SVER="+h.Aa));const xr=ne[5];xr!=null&&typeof xr=="number"&&0<xr&&(p=1.5*xr,h.L=p,h.j.info("backChannelRequestTimeoutMs_="+p)),p=h;const St=o.g;if(St){const So=St.g?St.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(So){var P=p.h;P.g||So.indexOf("spdy")==-1&&So.indexOf("quic")==-1&&So.indexOf("h2")==-1||(P.j=P.l,P.g=new Set,P.h&&(jl(P,P.h),P.h=null))}if(p.D){const ql=St.g?St.g.getResponseHeader("X-HTTP-Session-Id"):null;ql&&(p.ya=ql,le(p.I,p.D,ql))}}h.G=3,h.l&&h.l.ua(),h.ba&&(h.R=Date.now()-o.F,h.j.info("Handshake RTT: "+h.R+"ms")),p=h;var M=o;if(p.qa=wf(p,p.J?p.ia:null,p.W),M.K){Qd(p.h,M);var oe=M,Oe=p.L;Oe&&(oe.I=Oe),oe.B&&(Ul(oe),fo(oe)),p.g=M}else gf(p);0<h.i.length&&wo(h)}else ne[0]!="stop"&&ne[0]!="close"||rr(h,7);else h.G==3&&(ne[0]=="stop"||ne[0]=="close"?ne[0]=="stop"?rr(h,7):$l(h):ne[0]!="noop"&&h.l&&h.l.ta(ne),h.v=0)}}Li(4)}catch{}}var lE=class{constructor(o,c){this.g=o,this.map=c}};function qd(o){this.l=o||10,l.PerformanceNavigationTiming?(o=l.performance.getEntriesByType("navigation"),o=0<o.length&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Kd(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function Gd(o){return o.h?1:o.g?o.g.size:0}function zl(o,c){return o.h?o.h==c:o.g?o.g.has(c):!1}function jl(o,c){o.g?o.g.add(c):o.h=c}function Qd(o,c){o.h&&o.h==c?o.h=null:o.g&&o.g.has(c)&&o.g.delete(c)}qd.prototype.cancel=function(){if(this.i=Yd(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function Yd(o){if(o.h!=null)return o.i.concat(o.h.D);if(o.g!=null&&o.g.size!==0){let c=o.i;for(const h of o.g.values())c=c.concat(h.D);return c}return O(o.i)}function uE(o){if(o.V&&typeof o.V=="function")return o.V();if(typeof Map<"u"&&o instanceof Map||typeof Set<"u"&&o instanceof Set)return Array.from(o.values());if(typeof o=="string")return o.split("");if(u(o)){for(var c=[],h=o.length,p=0;p<h;p++)c.push(o[p]);return c}c=[],h=0;for(p in o)c[h++]=o[p];return c}function cE(o){if(o.na&&typeof o.na=="function")return o.na();if(!o.V||typeof o.V!="function"){if(typeof Map<"u"&&o instanceof Map)return Array.from(o.keys());if(!(typeof Set<"u"&&o instanceof Set)){if(u(o)||typeof o=="string"){var c=[];o=o.length;for(var h=0;h<o;h++)c.push(h);return c}c=[],h=0;for(const p in o)c[h++]=p;return c}}}function Xd(o,c){if(o.forEach&&typeof o.forEach=="function")o.forEach(c,void 0);else if(u(o)||typeof o=="string")Array.prototype.forEach.call(o,c,void 0);else for(var h=cE(o),p=uE(o),R=p.length,P=0;P<R;P++)c.call(void 0,p[P],h&&h[P],o)}var Jd=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function hE(o,c){if(o){o=o.split("&");for(var h=0;h<o.length;h++){var p=o[h].indexOf("="),R=null;if(0<=p){var P=o[h].substring(0,p);R=o[h].substring(p+1)}else P=o[h];c(P,R?decodeURIComponent(R.replace(/\+/g," ")):"")}}}function nr(o){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,o instanceof nr){this.h=o.h,po(this,o.j),this.o=o.o,this.g=o.g,mo(this,o.s),this.l=o.l;var c=o.i,h=new ji;h.i=c.i,c.g&&(h.g=new Map(c.g),h.h=c.h),Zd(this,h),this.m=o.m}else o&&(c=String(o).match(Jd))?(this.h=!1,po(this,c[1]||"",!0),this.o=bi(c[2]||""),this.g=bi(c[3]||"",!0),mo(this,c[4]),this.l=bi(c[5]||"",!0),Zd(this,c[6]||"",!0),this.m=bi(c[7]||"")):(this.h=!1,this.i=new ji(null,this.h))}nr.prototype.toString=function(){var o=[],c=this.j;c&&o.push(zi(c,ef,!0),":");var h=this.g;return(h||c=="file")&&(o.push("//"),(c=this.o)&&o.push(zi(c,ef,!0),"@"),o.push(encodeURIComponent(String(h)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),h=this.s,h!=null&&o.push(":",String(h))),(h=this.l)&&(this.g&&h.charAt(0)!="/"&&o.push("/"),o.push(zi(h,h.charAt(0)=="/"?pE:fE,!0))),(h=this.i.toString())&&o.push("?",h),(h=this.m)&&o.push("#",zi(h,gE)),o.join("")};function Gt(o){return new nr(o)}function po(o,c,h){o.j=h?bi(c,!0):c,o.j&&(o.j=o.j.replace(/:$/,""))}function mo(o,c){if(c){if(c=Number(c),isNaN(c)||0>c)throw Error("Bad port number "+c);o.s=c}else o.s=null}function Zd(o,c,h){c instanceof ji?(o.i=c,yE(o.i,o.h)):(h||(c=zi(c,mE)),o.i=new ji(c,o.h))}function le(o,c,h){o.i.set(c,h)}function go(o){return le(o,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),o}function bi(o,c){return o?c?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function zi(o,c,h){return typeof o=="string"?(o=encodeURI(o).replace(c,dE),h&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function dE(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var ef=/[#\/\?@]/g,fE=/[#\?:]/g,pE=/[#\?]/g,mE=/[#\?@]/g,gE=/#/g;function ji(o,c){this.h=this.g=null,this.i=o||null,this.j=!!c}function yn(o){o.g||(o.g=new Map,o.h=0,o.i&&hE(o.i,function(c,h){o.add(decodeURIComponent(c.replace(/\+/g," ")),h)}))}t=ji.prototype,t.add=function(o,c){yn(this),this.i=null,o=Or(this,o);var h=this.g.get(o);return h||this.g.set(o,h=[]),h.push(c),this.h+=1,this};function tf(o,c){yn(o),c=Or(o,c),o.g.has(c)&&(o.i=null,o.h-=o.g.get(c).length,o.g.delete(c))}function nf(o,c){return yn(o),c=Or(o,c),o.g.has(c)}t.forEach=function(o,c){yn(this),this.g.forEach(function(h,p){h.forEach(function(R){o.call(c,R,p,this)},this)},this)},t.na=function(){yn(this);const o=Array.from(this.g.values()),c=Array.from(this.g.keys()),h=[];for(let p=0;p<c.length;p++){const R=o[p];for(let P=0;P<R.length;P++)h.push(c[p])}return h},t.V=function(o){yn(this);let c=[];if(typeof o=="string")nf(this,o)&&(c=c.concat(this.g.get(Or(this,o))));else{o=Array.from(this.g.values());for(let h=0;h<o.length;h++)c=c.concat(o[h])}return c},t.set=function(o,c){return yn(this),this.i=null,o=Or(this,o),nf(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[c]),this.h+=1,this},t.get=function(o,c){return o?(o=this.V(o),0<o.length?String(o[0]):c):c};function rf(o,c,h){tf(o,c),0<h.length&&(o.i=null,o.g.set(Or(o,c),O(h)),o.h+=h.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],c=Array.from(this.g.keys());for(var h=0;h<c.length;h++){var p=c[h];const P=encodeURIComponent(String(p)),M=this.V(p);for(p=0;p<M.length;p++){var R=P;M[p]!==""&&(R+="="+encodeURIComponent(String(M[p]))),o.push(R)}}return this.i=o.join("&")};function Or(o,c){return c=String(c),o.j&&(c=c.toLowerCase()),c}function yE(o,c){c&&!o.j&&(yn(o),o.i=null,o.g.forEach(function(h,p){var R=p.toLowerCase();p!=R&&(tf(this,p),rf(this,R,h))},o)),o.j=c}function vE(o,c){const h=new Fi;if(l.Image){const p=new Image;p.onload=k(vn,h,"TestLoadImage: loaded",!0,c,p),p.onerror=k(vn,h,"TestLoadImage: error",!1,c,p),p.onabort=k(vn,h,"TestLoadImage: abort",!1,c,p),p.ontimeout=k(vn,h,"TestLoadImage: timeout",!1,c,p),l.setTimeout(function(){p.ontimeout&&p.ontimeout()},1e4),p.src=o}else c(!1)}function _E(o,c){const h=new Fi,p=new AbortController,R=setTimeout(()=>{p.abort(),vn(h,"TestPingServer: timeout",!1,c)},1e4);fetch(o,{signal:p.signal}).then(P=>{clearTimeout(R),P.ok?vn(h,"TestPingServer: ok",!0,c):vn(h,"TestPingServer: server error",!1,c)}).catch(()=>{clearTimeout(R),vn(h,"TestPingServer: error",!1,c)})}function vn(o,c,h,p,R){try{R&&(R.onload=null,R.onerror=null,R.onabort=null,R.ontimeout=null),p(h)}catch{}}function EE(){this.g=new nE}function wE(o,c,h){const p=h||"";try{Xd(o,function(R,P){let M=R;d(R)&&(M=Dl(R)),c.push(p+P+"="+encodeURIComponent(M))})}catch(R){throw c.push(p+"type="+encodeURIComponent("_badmap")),R}}function yo(o){this.l=o.Ub||null,this.j=o.eb||!1}N(yo,Ol),yo.prototype.g=function(){return new vo(this.l,this.j)},yo.prototype.i=function(o){return function(){return o}}({});function vo(o,c){be.call(this),this.D=o,this.o=c,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}N(vo,be),t=vo.prototype,t.open=function(o,c){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=o,this.A=c,this.readyState=1,$i(this)},t.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const c={headers:this.u,method:this.B,credentials:this.m,cache:void 0};o&&(c.body=o),(this.D||l).fetch(new Request(this.A,c)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Bi(this)),this.readyState=0},t.Sa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,$i(this)),this.g&&(this.readyState=3,$i(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;sf(this)}else o.text().then(this.Ra.bind(this),this.ga.bind(this))};function sf(o){o.j.read().then(o.Pa.bind(o)).catch(o.ga.bind(o))}t.Pa=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var c=o.value?o.value:new Uint8Array(0);(c=this.v.decode(c,{stream:!o.done}))&&(this.response=this.responseText+=c)}o.done?Bi(this):$i(this),this.readyState==3&&sf(this)}},t.Ra=function(o){this.g&&(this.response=this.responseText=o,Bi(this))},t.Qa=function(o){this.g&&(this.response=o,Bi(this))},t.ga=function(){this.g&&Bi(this)};function Bi(o){o.readyState=4,o.l=null,o.j=null,o.v=null,$i(o)}t.setRequestHeader=function(o,c){this.u.append(o,c)},t.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],c=this.h.entries();for(var h=c.next();!h.done;)h=h.value,o.push(h[0]+": "+h[1]),h=c.next();return o.join(`\r
`)};function $i(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(vo.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function of(o){let c="";return F(o,function(h,p){c+=p,c+=":",c+=h,c+=`\r
`}),c}function Bl(o,c,h){e:{for(p in h){var p=!1;break e}p=!0}p||(h=of(h),typeof o=="string"?h!=null&&encodeURIComponent(String(h)):le(o,c,h))}function ge(o){be.call(this),this.headers=new Map,this.o=o||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}N(ge,be);var TE=/^https?$/i,IE=["POST","PUT"];t=ge.prototype,t.Ha=function(o){this.J=o},t.ea=function(o,c,h,p){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);c=c?c.toUpperCase():"GET",this.D=o,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Ll.g(),this.v=this.o?xd(this.o):xd(Ll),this.g.onreadystatechange=v(this.Ea,this);try{this.B=!0,this.g.open(c,String(o),!0),this.B=!1}catch(P){af(this,P);return}if(o=h||"",h=new Map(this.headers),p)if(Object.getPrototypeOf(p)===Object.prototype)for(var R in p)h.set(R,p[R]);else if(typeof p.keys=="function"&&typeof p.get=="function")for(const P of p.keys())h.set(P,p.get(P));else throw Error("Unknown input type for opt_headers: "+String(p));p=Array.from(h.keys()).find(P=>P.toLowerCase()=="content-type"),R=l.FormData&&o instanceof l.FormData,!(0<=Array.prototype.indexOf.call(IE,c,void 0))||p||R||h.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[P,M]of h)this.g.setRequestHeader(P,M);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{cf(this),this.u=!0,this.g.send(o),this.u=!1}catch(P){af(this,P)}};function af(o,c){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=c,o.m=5,lf(o),_o(o)}function lf(o){o.A||(o.A=!0,Ye(o,"complete"),Ye(o,"error"))}t.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=o||7,Ye(this,"complete"),Ye(this,"abort"),_o(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),_o(this,!0)),ge.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?uf(this):this.bb())},t.bb=function(){uf(this)};function uf(o){if(o.h&&typeof a<"u"&&(!o.v[1]||Qt(o)!=4||o.Z()!=2)){if(o.u&&Qt(o)==4)Nd(o.Ea,0,o);else if(Ye(o,"readystatechange"),Qt(o)==4){o.h=!1;try{const M=o.Z();e:switch(M){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break e;default:c=!1}var h;if(!(h=c)){var p;if(p=M===0){var R=String(o.D).match(Jd)[1]||null;!R&&l.self&&l.self.location&&(R=l.self.location.protocol.slice(0,-1)),p=!TE.test(R?R.toLowerCase():"")}h=p}if(h)Ye(o,"complete"),Ye(o,"success");else{o.m=6;try{var P=2<Qt(o)?o.g.statusText:""}catch{P=""}o.l=P+" ["+o.Z()+"]",lf(o)}}finally{_o(o)}}}}function _o(o,c){if(o.g){cf(o);const h=o.g,p=o.v[0]?()=>{}:null;o.g=null,o.v=null,c||Ye(o,"ready");try{h.onreadystatechange=p}catch{}}}function cf(o){o.I&&(l.clearTimeout(o.I),o.I=null)}t.isActive=function(){return!!this.g};function Qt(o){return o.g?o.g.readyState:0}t.Z=function(){try{return 2<Qt(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(o){if(this.g){var c=this.g.responseText;return o&&c.indexOf(o)==0&&(c=c.substring(o.length)),tE(c)}};function hf(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.H){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function SE(o){const c={};o=(o.g&&2<=Qt(o)&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let p=0;p<o.length;p++){if(E(o[p]))continue;var h=A(o[p]);const R=h[0];if(h=h[1],typeof h!="string")continue;h=h.trim();const P=c[R]||[];c[R]=P,P.push(h)}_(c,function(p){return p.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Hi(o,c,h){return h&&h.internalChannelParams&&h.internalChannelParams[o]||c}function df(o){this.Aa=0,this.i=[],this.j=new Fi,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Hi("failFast",!1,o),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Hi("baseRetryDelayMs",5e3,o),this.cb=Hi("retryDelaySeedMs",1e4,o),this.Wa=Hi("forwardChannelMaxRetries",2,o),this.wa=Hi("forwardChannelRequestTimeoutMs",2e4,o),this.pa=o&&o.xmlHttpFactory||void 0,this.Xa=o&&o.Tb||void 0,this.Ca=o&&o.useFetchStreams||!1,this.L=void 0,this.J=o&&o.supportsCrossDomainXhr||!1,this.K="",this.h=new qd(o&&o.concurrentRequestLimit),this.Da=new EE,this.P=o&&o.fastHandshake||!1,this.O=o&&o.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=o&&o.Rb||!1,o&&o.xa&&this.j.xa(),o&&o.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&o&&o.detectBufferingProxy||!1,this.ja=void 0,o&&o.longPollingTimeout&&0<o.longPollingTimeout&&(this.ja=o.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=df.prototype,t.la=8,t.G=1,t.connect=function(o,c,h,p){Xe(0),this.W=o,this.H=c||{},h&&p!==void 0&&(this.H.OSID=h,this.H.OAID=p),this.F=this.X,this.I=wf(this,null,this.W),wo(this)};function $l(o){if(ff(o),o.G==3){var c=o.U++,h=Gt(o.I);if(le(h,"SID",o.K),le(h,"RID",c),le(h,"TYPE","terminate"),Wi(o,h),c=new gn(o,o.j,c),c.L=2,c.v=go(Gt(h)),h=!1,l.navigator&&l.navigator.sendBeacon)try{h=l.navigator.sendBeacon(c.v.toString(),"")}catch{}!h&&l.Image&&(new Image().src=c.v,h=!0),h||(c.g=Tf(c.j,null),c.g.ea(c.v)),c.F=Date.now(),fo(c)}Ef(o)}function Eo(o){o.g&&(Wl(o),o.g.cancel(),o.g=null)}function ff(o){Eo(o),o.u&&(l.clearTimeout(o.u),o.u=null),To(o),o.h.cancel(),o.s&&(typeof o.s=="number"&&l.clearTimeout(o.s),o.s=null)}function wo(o){if(!Kd(o.h)&&!o.s){o.s=!0;var c=o.Ga;$t||G(),z||($t(),z=!0),q.add(c,o),o.B=0}}function AE(o,c){return Gd(o.h)>=o.h.j-(o.s?1:0)?!1:o.s?(o.i=c.D.concat(o.i),!0):o.G==1||o.G==2||o.B>=(o.Va?0:o.Wa)?!1:(o.s=Mi(v(o.Ga,o,c),_f(o,o.B)),o.B++,!0)}t.Ga=function(o){if(this.s)if(this.s=null,this.G==1){if(!o){this.U=Math.floor(1e5*Math.random()),o=this.U++;const R=new gn(this,this.j,o);let P=this.o;if(this.S&&(P?(P=m(P),w(P,this.S)):P=this.S),this.m!==null||this.O||(R.H=P,P=null),this.P)e:{for(var c=0,h=0;h<this.i.length;h++){t:{var p=this.i[h];if("__data__"in p.map&&(p=p.map.__data__,typeof p=="string")){p=p.length;break t}p=void 0}if(p===void 0)break;if(c+=p,4096<c){c=h;break e}if(c===4096||h===this.i.length-1){c=h+1;break e}}c=1e3}else c=1e3;c=mf(this,R,c),h=Gt(this.I),le(h,"RID",o),le(h,"CVER",22),this.D&&le(h,"X-HTTP-Session-Id",this.D),Wi(this,h),P&&(this.O?c="headers="+encodeURIComponent(String(of(P)))+"&"+c:this.m&&Bl(h,this.m,P)),jl(this.h,R),this.Ua&&le(h,"TYPE","init"),this.P?(le(h,"$req",c),le(h,"SID","null"),R.T=!0,Fl(R,h,null)):Fl(R,h,c),this.G=2}}else this.G==3&&(o?pf(this,o):this.i.length==0||Kd(this.h)||pf(this))};function pf(o,c){var h;c?h=c.l:h=o.U++;const p=Gt(o.I);le(p,"SID",o.K),le(p,"RID",h),le(p,"AID",o.T),Wi(o,p),o.m&&o.o&&Bl(p,o.m,o.o),h=new gn(o,o.j,h,o.B+1),o.m===null&&(h.H=o.o),c&&(o.i=c.D.concat(o.i)),c=mf(o,h,1e3),h.I=Math.round(.5*o.wa)+Math.round(.5*o.wa*Math.random()),jl(o.h,h),Fl(h,p,c)}function Wi(o,c){o.H&&F(o.H,function(h,p){le(c,p,h)}),o.l&&Xd({},function(h,p){le(c,p,h)})}function mf(o,c,h){h=Math.min(o.i.length,h);var p=o.l?v(o.l.Na,o.l,o):null;e:{var R=o.i;let P=-1;for(;;){const M=["count="+h];P==-1?0<h?(P=R[0].g,M.push("ofs="+P)):P=0:M.push("ofs="+P);let oe=!0;for(let Oe=0;Oe<h;Oe++){let ne=R[Oe].g;const ze=R[Oe].map;if(ne-=P,0>ne)P=Math.max(0,R[Oe].g-100),oe=!1;else try{wE(ze,M,"req"+ne+"_")}catch{p&&p(ze)}}if(oe){p=M.join("&");break e}}}return o=o.i.splice(0,h),c.D=o,p}function gf(o){if(!o.g&&!o.u){o.Y=1;var c=o.Fa;$t||G(),z||($t(),z=!0),q.add(c,o),o.v=0}}function Hl(o){return o.g||o.u||3<=o.v?!1:(o.Y++,o.u=Mi(v(o.Fa,o),_f(o,o.v)),o.v++,!0)}t.Fa=function(){if(this.u=null,yf(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var o=2*this.R;this.j.info("BP detection timer enabled: "+o),this.A=Mi(v(this.ab,this),o)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Xe(10),Eo(this),yf(this))};function Wl(o){o.A!=null&&(l.clearTimeout(o.A),o.A=null)}function yf(o){o.g=new gn(o,o.j,"rpc",o.Y),o.m===null&&(o.g.H=o.o),o.g.O=0;var c=Gt(o.qa);le(c,"RID","rpc"),le(c,"SID",o.K),le(c,"AID",o.T),le(c,"CI",o.F?"0":"1"),!o.F&&o.ja&&le(c,"TO",o.ja),le(c,"TYPE","xmlhttp"),Wi(o,c),o.m&&o.o&&Bl(c,o.m,o.o),o.L&&(o.g.I=o.L);var h=o.g;o=o.ia,h.L=1,h.v=go(Gt(c)),h.m=null,h.P=!0,$d(h,o)}t.Za=function(){this.C!=null&&(this.C=null,Eo(this),Hl(this),Xe(19))};function To(o){o.C!=null&&(l.clearTimeout(o.C),o.C=null)}function vf(o,c){var h=null;if(o.g==c){To(o),Wl(o),o.g=null;var p=2}else if(zl(o.h,c))h=c.D,Qd(o.h,c),p=1;else return;if(o.G!=0){if(c.o)if(p==1){h=c.m?c.m.length:0,c=Date.now()-c.F;var R=o.B;p=uo(),Ye(p,new bd(p,h)),wo(o)}else gf(o);else if(R=c.s,R==3||R==0&&0<c.X||!(p==1&&AE(o,c)||p==2&&Hl(o)))switch(h&&0<h.length&&(c=o.h,c.i=c.i.concat(h)),R){case 1:rr(o,5);break;case 4:rr(o,10);break;case 3:rr(o,6);break;default:rr(o,2)}}}function _f(o,c){let h=o.Ta+Math.floor(Math.random()*o.cb);return o.isActive()||(h*=2),h*c}function rr(o,c){if(o.j.info("Error code "+c),c==2){var h=v(o.fb,o),p=o.Xa;const R=!p;p=new nr(p||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||po(p,"https"),go(p),R?vE(p.toString(),h):_E(p.toString(),h)}else Xe(2);o.G=0,o.l&&o.l.sa(c),Ef(o),ff(o)}t.fb=function(o){o?(this.j.info("Successfully pinged google.com"),Xe(2)):(this.j.info("Failed to ping google.com"),Xe(1))};function Ef(o){if(o.G=0,o.ka=[],o.l){const c=Yd(o.h);(c.length!=0||o.i.length!=0)&&(L(o.ka,c),L(o.ka,o.i),o.h.i.length=0,O(o.i),o.i.length=0),o.l.ra()}}function wf(o,c,h){var p=h instanceof nr?Gt(h):new nr(h);if(p.g!="")c&&(p.g=c+"."+p.g),mo(p,p.s);else{var R=l.location;p=R.protocol,c=c?c+"."+R.hostname:R.hostname,R=+R.port;var P=new nr(null);p&&po(P,p),c&&(P.g=c),R&&mo(P,R),h&&(P.l=h),p=P}return h=o.D,c=o.ya,h&&c&&le(p,h,c),le(p,"VER",o.la),Wi(o,p),p}function Tf(o,c,h){if(c&&!o.J)throw Error("Can't create secondary domain capable XhrIo object.");return c=o.Ca&&!o.pa?new ge(new yo({eb:h})):new ge(o.pa),c.Ha(o.J),c}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function If(){}t=If.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function Io(){}Io.prototype.g=function(o,c){return new ut(o,c)};function ut(o,c){be.call(this),this.g=new df(c),this.l=o,this.h=c&&c.messageUrlParams||null,o=c&&c.messageHeaders||null,c&&c.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=c&&c.initMessageHeaders||null,c&&c.messageContentType&&(o?o["X-WebChannel-Content-Type"]=c.messageContentType:o={"X-WebChannel-Content-Type":c.messageContentType}),c&&c.va&&(o?o["X-WebChannel-Client-Profile"]=c.va:o={"X-WebChannel-Client-Profile":c.va}),this.g.S=o,(o=c&&c.Sb)&&!E(o)&&(this.g.m=o),this.v=c&&c.supportsCrossDomainXhr||!1,this.u=c&&c.sendRawJson||!1,(c=c&&c.httpSessionIdParam)&&!E(c)&&(this.g.D=c,o=this.h,o!==null&&c in o&&(o=this.h,c in o&&delete o[c])),this.j=new Vr(this)}N(ut,be),ut.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},ut.prototype.close=function(){$l(this.g)},ut.prototype.o=function(o){var c=this.g;if(typeof o=="string"){var h={};h.__data__=o,o=h}else this.u&&(h={},h.__data__=Dl(o),o=h);c.i.push(new lE(c.Ya++,o)),c.G==3&&wo(c)},ut.prototype.N=function(){this.g.l=null,delete this.j,$l(this.g),delete this.g,ut.aa.N.call(this)};function Sf(o){Vl.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var c=o.__sm__;if(c){e:{for(const h in c){o=h;break e}o=void 0}(this.i=o)&&(o=this.i,c=c!==null&&o in c?c[o]:void 0),this.data=c}else this.data=o}N(Sf,Vl);function Af(){xl.call(this),this.status=1}N(Af,xl);function Vr(o){this.g=o}N(Vr,If),Vr.prototype.ua=function(){Ye(this.g,"a")},Vr.prototype.ta=function(o){Ye(this.g,new Sf(o))},Vr.prototype.sa=function(o){Ye(this.g,new Af)},Vr.prototype.ra=function(){Ye(this.g,"b")},Io.prototype.createWebChannel=Io.prototype.g,ut.prototype.send=ut.prototype.o,ut.prototype.open=ut.prototype.m,ut.prototype.close=ut.prototype.close,Zv=function(){return new Io},Jv=function(){return uo()},Xv=er,Vc={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},co.NO_ERROR=0,co.TIMEOUT=8,co.HTTP_ERROR=6,ua=co,zd.COMPLETE="complete",Yv=zd,Ld.EventType=xi,xi.OPEN="a",xi.CLOSE="b",xi.ERROR="c",xi.MESSAGE="d",be.prototype.listen=be.prototype.K,ss=Ld,ge.prototype.listenOnce=ge.prototype.L,ge.prototype.getLastError=ge.prototype.Ka,ge.prototype.getLastErrorCode=ge.prototype.Ba,ge.prototype.getStatus=ge.prototype.Z,ge.prototype.getResponseJson=ge.prototype.Oa,ge.prototype.getResponseText=ge.prototype.oa,ge.prototype.send=ge.prototype.ea,ge.prototype.setWithCredentials=ge.prototype.Ha,Qv=ge}).apply(typeof $o<"u"?$o:typeof self<"u"?self:typeof window<"u"?window:{});const um="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class We{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}We.UNAUTHENTICATED=new We(null),We.GOOGLE_CREDENTIALS=new We("google-credentials-uid"),We.FIRST_PARTY=new We("first-party-uid"),We.MOCK_USER=new We("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Pi="10.14.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ar=new $h("@firebase/firestore");function es(){return Ar.logLevel}function B(t,...e){if(Ar.logLevel<=X.DEBUG){const n=e.map(nd);Ar.debug(`Firestore (${Pi}): ${t}`,...n)}}function fn(t,...e){if(Ar.logLevel<=X.ERROR){const n=e.map(nd);Ar.error(`Firestore (${Pi}): ${t}`,...n)}}function vi(t,...e){if(Ar.logLevel<=X.WARN){const n=e.map(nd);Ar.warn(`Firestore (${Pi}): ${t}`,...n)}}function nd(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Q(t="Unexpected state"){const e=`FIRESTORE (${Pi}) INTERNAL ASSERTION FAILED: `+t;throw fn(e),new Error(e)}function _e(t,e){t||Q()}function Z(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class $ extends mn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gr{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e_{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class DA{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(We.UNAUTHENTICATED))}shutdown(){}}class OA{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class VA{constructor(e){this.t=e,this.currentUser=We.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){_e(this.o===void 0);let r=this.i;const i=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let s=new gr;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new gr,e.enqueueRetryable(()=>i(this.currentUser))};const a=()=>{const u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},l=u=>{B("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(B("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new gr)}},0),a()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(B("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(_e(typeof r.accessToken=="string"),new e_(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return _e(e===null||typeof e=="string"),new We(e)}}class xA{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=We.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class LA{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new xA(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(We.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class MA{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class FA{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){_e(this.o===void 0);const r=s=>{s.error!=null&&B("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const a=s.token!==this.R;return this.R=s.token,B("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{B("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):B("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(_e(typeof n.token=="string"),this.R=n.token,new MA(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function UA(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t_{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=UA(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function re(t,e){return t<e?-1:t>e?1:0}function _i(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lt{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new $(b.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new $(b.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new $(b.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new $(b.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return lt.fromMillis(Date.now())}static fromDate(e){return lt.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new lt(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?re(this.nanoseconds,e.nanoseconds):re(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K{constructor(e){this.timestamp=e}static fromTimestamp(e){return new K(e)}static min(){return new K(new lt(0,0))}static max(){return new K(new lt(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class js{constructor(e,n,r){n===void 0?n=0:n>e.length&&Q(),r===void 0?r=e.length-n:r>e.length-n&&Q(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return js.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof js?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),a=n.get(i);if(s<a)return-1;if(s>a)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class ve extends js{construct(e,n,r){return new ve(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new $(b.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new ve(n)}static emptyPath(){return new ve([])}}const bA=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ze extends js{construct(e,n,r){return new Ze(e,n,r)}static isValidIdentifier(e){return bA.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ze.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Ze(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new $(b.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let a=!1;for(;i<e.length;){const l=e[i];if(l==="\\"){if(i+1===e.length)throw new $(b.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new $(b.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else l==="`"?(a=!a,i++):l!=="."||a?(r+=l,i++):(s(),i++)}if(s(),a)throw new $(b.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ze(n)}static emptyPath(){return new Ze([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H{constructor(e){this.path=e}static fromPath(e){return new H(ve.fromString(e))}static fromName(e){return new H(ve.fromString(e).popFirst(5))}static empty(){return new H(ve.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ve.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return ve.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new H(new ve(e.slice()))}}function zA(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=K.fromTimestamp(r===1e9?new lt(n+1,0):new lt(n,r));return new Kn(i,H.empty(),e)}function jA(t){return new Kn(t.readTime,t.key,-1)}class Kn{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Kn(K.min(),H.empty(),-1)}static max(){return new Kn(K.max(),H.empty(),-1)}}function BA(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=H.comparator(t.documentKey,e.documentKey),n!==0?n:re(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $A="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class HA{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rd(t){if(t.code!==b.FAILED_PRECONDITION||t.message!==$A)throw t;B("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&Q(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new V((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof V?n:V.resolve(n)}catch(n){return V.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):V.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):V.reject(n)}static resolve(e){return new V((n,r)=>{n(e)})}static reject(e){return new V((n,r)=>{r(e)})}static waitFor(e){return new V((n,r)=>{let i=0,s=0,a=!1;e.forEach(l=>{++i,l.next(()=>{++s,a&&s===i&&n()},u=>r(u))}),a=!0,s===i&&n()})}static or(e){let n=V.resolve(!1);for(const r of e)n=n.next(i=>i?V.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new V((r,i)=>{const s=e.length,a=new Array(s);let l=0;for(let u=0;u<s;u++){const d=u;n(e[d]).next(f=>{a[d]=f,++l,l===s&&r(a)},f=>i(f))}})}static doWhile(e,n){return new V((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function WA(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function no(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class id{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}id.oe=-1;function ml(t){return t==null}function xc(t){return t===0&&1/t==-1/0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cm(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function gl(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function qA(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ie{constructor(e,n){this.comparator=e,this.root=n||xe.EMPTY}insert(e,n){return new Ie(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,xe.BLACK,null,null))}remove(e){return new Ie(this.comparator,this.root.remove(e,this.comparator).copy(null,null,xe.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Ho(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Ho(this.root,e,this.comparator,!1)}getReverseIterator(){return new Ho(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Ho(this.root,e,this.comparator,!0)}}class Ho{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class xe{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??xe.RED,this.left=i??xe.EMPTY,this.right=s??xe.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new xe(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return xe.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return xe.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,xe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,xe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw Q();const e=this.left.check();if(e!==this.right.check())throw Q();return e+(this.isRed()?0:1)}}xe.EMPTY=null,xe.RED=!0,xe.BLACK=!1;xe.EMPTY=new class{constructor(){this.size=0}get key(){throw Q()}get value(){throw Q()}get color(){throw Q()}get left(){throw Q()}get right(){throw Q()}copy(e,n,r,i,s){return this}insert(e,n,r){return new xe(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Me{constructor(e){this.comparator=e,this.data=new Ie(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new hm(this.data.getIterator())}getIteratorFrom(e){return new hm(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Me)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Me(this.comparator);return n.data=e,n}}class hm{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class On{constructor(e){this.fields=e,e.sort(Ze.comparator)}static empty(){return new On([])}unionWith(e){let n=new Me(Ze.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new On(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return _i(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n_ extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ue{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new n_("Invalid base64 string: "+s):s}}(e);return new Ue(n)}static fromUint8Array(e){const n=function(i){let s="";for(let a=0;a<i.length;++a)s+=String.fromCharCode(i[a]);return s}(e);return new Ue(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return re(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ue.EMPTY_BYTE_STRING=new Ue("");const KA=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Gn(t){if(_e(!!t),typeof t=="string"){let e=0;const n=KA.exec(t);if(_e(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:we(t.seconds),nanos:we(t.nanos)}}function we(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Rr(t){return typeof t=="string"?Ue.fromBase64String(t):Ue.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sd(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function od(t){const e=t.mapValue.fields.__previous_value__;return sd(e)?od(e):e}function Bs(t){const e=Gn(t.mapValue.fields.__local_write_time__.timestampValue);return new lt(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GA{constructor(e,n,r,i,s,a,l,u,d){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=a,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=d}}class $s{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new $s("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof $s&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wo={mapValue:{}};function kr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?sd(t)?4:YA(t)?9007199254740991:QA(t)?10:11:Q()}function jt(t,e){if(t===e)return!0;const n=kr(t);if(n!==kr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Bs(t).isEqual(Bs(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const a=Gn(i.timestampValue),l=Gn(s.timestampValue);return a.seconds===l.seconds&&a.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return Rr(i.bytesValue).isEqual(Rr(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return we(i.geoPointValue.latitude)===we(s.geoPointValue.latitude)&&we(i.geoPointValue.longitude)===we(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return we(i.integerValue)===we(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const a=we(i.doubleValue),l=we(s.doubleValue);return a===l?xc(a)===xc(l):isNaN(a)&&isNaN(l)}return!1}(t,e);case 9:return _i(t.arrayValue.values||[],e.arrayValue.values||[],jt);case 10:case 11:return function(i,s){const a=i.mapValue.fields||{},l=s.mapValue.fields||{};if(cm(a)!==cm(l))return!1;for(const u in a)if(a.hasOwnProperty(u)&&(l[u]===void 0||!jt(a[u],l[u])))return!1;return!0}(t,e);default:return Q()}}function Hs(t,e){return(t.values||[]).find(n=>jt(n,e))!==void 0}function Ei(t,e){if(t===e)return 0;const n=kr(t),r=kr(e);if(n!==r)return re(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return re(t.booleanValue,e.booleanValue);case 2:return function(s,a){const l=we(s.integerValue||s.doubleValue),u=we(a.integerValue||a.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(t,e);case 3:return dm(t.timestampValue,e.timestampValue);case 4:return dm(Bs(t),Bs(e));case 5:return re(t.stringValue,e.stringValue);case 6:return function(s,a){const l=Rr(s),u=Rr(a);return l.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(s,a){const l=s.split("/"),u=a.split("/");for(let d=0;d<l.length&&d<u.length;d++){const f=re(l[d],u[d]);if(f!==0)return f}return re(l.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,a){const l=re(we(s.latitude),we(a.latitude));return l!==0?l:re(we(s.longitude),we(a.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return fm(t.arrayValue,e.arrayValue);case 10:return function(s,a){var l,u,d,f;const g=s.fields||{},v=a.fields||{},k=(l=g.value)===null||l===void 0?void 0:l.arrayValue,N=(u=v.value)===null||u===void 0?void 0:u.arrayValue,O=re(((d=k==null?void 0:k.values)===null||d===void 0?void 0:d.length)||0,((f=N==null?void 0:N.values)===null||f===void 0?void 0:f.length)||0);return O!==0?O:fm(k,N)}(t.mapValue,e.mapValue);case 11:return function(s,a){if(s===Wo.mapValue&&a===Wo.mapValue)return 0;if(s===Wo.mapValue)return 1;if(a===Wo.mapValue)return-1;const l=s.fields||{},u=Object.keys(l),d=a.fields||{},f=Object.keys(d);u.sort(),f.sort();for(let g=0;g<u.length&&g<f.length;++g){const v=re(u[g],f[g]);if(v!==0)return v;const k=Ei(l[u[g]],d[f[g]]);if(k!==0)return k}return re(u.length,f.length)}(t.mapValue,e.mapValue);default:throw Q()}}function dm(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return re(t,e);const n=Gn(t),r=Gn(e),i=re(n.seconds,r.seconds);return i!==0?i:re(n.nanos,r.nanos)}function fm(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const s=Ei(n[i],r[i]);if(s)return s}return re(n.length,r.length)}function wi(t){return Lc(t)}function Lc(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Gn(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Rr(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return H.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=Lc(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const a of r)s?s=!1:i+=",",i+=`${a}:${Lc(n.fields[a])}`;return i+"}"}(t.mapValue):Q()}function Mc(t){return!!t&&"integerValue"in t}function ad(t){return!!t&&"arrayValue"in t}function pm(t){return!!t&&"nullValue"in t}function mm(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function ku(t){return!!t&&"mapValue"in t}function QA(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function vs(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return gl(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=vs(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=vs(t.arrayValue.values[n]);return e}return Object.assign({},t)}function YA(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lt{constructor(e){this.value=e}static empty(){return new Lt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!ku(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=vs(n)}setAll(e){let n=Ze.emptyPath(),r={},i=[];e.forEach((a,l)=>{if(!n.isImmediateParentOf(l)){const u=this.getFieldsMap(n);this.applyChanges(u,r,i),r={},i=[],n=l.popLast()}a?r[l.lastSegment()]=vs(a):i.push(l.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());ku(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return jt(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];ku(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){gl(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new Lt(vs(this.value))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ke{constructor(e,n,r,i,s,a,l){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=a,this.documentState=l}static newInvalidDocument(e){return new Ke(e,0,K.min(),K.min(),K.min(),Lt.empty(),0)}static newFoundDocument(e,n,r,i){return new Ke(e,1,n,K.min(),r,i,0)}static newNoDocument(e,n){return new Ke(e,2,n,K.min(),K.min(),Lt.empty(),0)}static newUnknownDocument(e,n){return new Ke(e,3,n,K.min(),K.min(),Lt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(K.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Lt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Lt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=K.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ke&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ke(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ha{constructor(e,n){this.position=e,this.inclusive=n}}function gm(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],a=t.position[i];if(s.field.isKeyField()?r=H.comparator(H.fromName(a.referenceValue),n.key):r=Ei(a,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function ym(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!jt(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wa{constructor(e,n="asc"){this.field=e,this.dir=n}}function XA(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r_{}class ke extends r_{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new ZA(e,n,r):n==="array-contains"?new n1(e,r):n==="in"?new r1(e,r):n==="not-in"?new i1(e,r):n==="array-contains-any"?new s1(e,r):new ke(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new e1(e,r):new t1(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Ei(n,this.value)):n!==null&&kr(this.value)===kr(n)&&this.matchesComparison(Ei(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Q()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Bt extends r_{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new Bt(e,n)}matches(e){return i_(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function i_(t){return t.op==="and"}function s_(t){return JA(t)&&i_(t)}function JA(t){for(const e of t.filters)if(e instanceof Bt)return!1;return!0}function Fc(t){if(t instanceof ke)return t.field.canonicalString()+t.op.toString()+wi(t.value);if(s_(t))return t.filters.map(e=>Fc(e)).join(",");{const e=t.filters.map(n=>Fc(n)).join(",");return`${t.op}(${e})`}}function o_(t,e){return t instanceof ke?function(r,i){return i instanceof ke&&r.op===i.op&&r.field.isEqual(i.field)&&jt(r.value,i.value)}(t,e):t instanceof Bt?function(r,i){return i instanceof Bt&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,a,l)=>s&&o_(a,i.filters[l]),!0):!1}(t,e):void Q()}function a_(t){return t instanceof ke?function(n){return`${n.field.canonicalString()} ${n.op} ${wi(n.value)}`}(t):t instanceof Bt?function(n){return n.op.toString()+" {"+n.getFilters().map(a_).join(" ,")+"}"}(t):"Filter"}class ZA extends ke{constructor(e,n,r){super(e,n,r),this.key=H.fromName(r.referenceValue)}matches(e){const n=H.comparator(e.key,this.key);return this.matchesComparison(n)}}class e1 extends ke{constructor(e,n){super(e,"in",n),this.keys=l_("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class t1 extends ke{constructor(e,n){super(e,"not-in",n),this.keys=l_("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function l_(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>H.fromName(r.referenceValue))}class n1 extends ke{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return ad(n)&&Hs(n.arrayValue,this.value)}}class r1 extends ke{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Hs(this.value.arrayValue,n)}}class i1 extends ke{constructor(e,n){super(e,"not-in",n)}matches(e){if(Hs(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Hs(this.value.arrayValue,n)}}class s1 extends ke{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!ad(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Hs(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o1{constructor(e,n=null,r=[],i=[],s=null,a=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=a,this.endAt=l,this.ue=null}}function vm(t,e=null,n=[],r=[],i=null,s=null,a=null){return new o1(t,e,n,r,i,s,a)}function ld(t){const e=Z(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Fc(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),ml(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>wi(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>wi(r)).join(",")),e.ue=n}return e.ue}function ud(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!XA(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!o_(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!ym(t.startAt,e.startAt)&&ym(t.endAt,e.endAt)}function Uc(t){return H.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yl{constructor(e,n=null,r=[],i=[],s=null,a="F",l=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=a,this.startAt=l,this.endAt=u,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function a1(t,e,n,r,i,s,a,l){return new yl(t,e,n,r,i,s,a,l)}function cd(t){return new yl(t)}function _m(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function l1(t){return t.collectionGroup!==null}function _s(t){const e=Z(t);if(e.ce===null){e.ce=[];const n=new Set;for(const s of e.explicitOrderBy)e.ce.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let l=new Me(Ze.comparator);return a.filters.forEach(u=>{u.getFlattenedFilters().forEach(d=>{d.isInequality()&&(l=l.add(d.field))})}),l})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.ce.push(new Wa(s,r))}),n.has(Ze.keyField().canonicalString())||e.ce.push(new Wa(Ze.keyField(),r))}return e.ce}function zt(t){const e=Z(t);return e.le||(e.le=u1(e,_s(t))),e.le}function u1(t,e){if(t.limitType==="F")return vm(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new Wa(i.field,s)});const n=t.endAt?new Ha(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Ha(t.startAt.position,t.startAt.inclusive):null;return vm(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function bc(t,e,n){return new yl(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function vl(t,e){return ud(zt(t),zt(e))&&t.limitType===e.limitType}function u_(t){return`${ld(zt(t))}|lt:${t.limitType}`}function Mr(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>a_(i)).join(", ")}]`),ml(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>wi(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>wi(i)).join(",")),`Target(${r})`}(zt(t))}; limitType=${t.limitType})`}function _l(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):H.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of _s(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(a,l,u){const d=gm(a,l,u);return a.inclusive?d<=0:d<0}(r.startAt,_s(r),i)||r.endAt&&!function(a,l,u){const d=gm(a,l,u);return a.inclusive?d>=0:d>0}(r.endAt,_s(r),i))}(t,e)}function c1(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function c_(t){return(e,n)=>{let r=!1;for(const i of _s(t)){const s=h1(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function h1(t,e,n){const r=t.field.isKeyField()?H.comparator(e.key,n.key):function(s,a,l){const u=a.data.field(s),d=l.data.field(s);return u!==null&&d!==null?Ei(u,d):Q()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return Q()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ni{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){gl(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return qA(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const d1=new Ie(H.comparator);function Qn(){return d1}const h_=new Ie(H.comparator);function os(...t){let e=h_;for(const n of t)e=e.insert(n.key,n);return e}function f1(t){let e=h_;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function hr(){return Es()}function d_(){return Es()}function Es(){return new Ni(t=>t.toString(),(t,e)=>t.isEqual(e))}const p1=new Me(H.comparator);function ee(...t){let e=p1;for(const n of t)e=e.add(n);return e}const m1=new Me(re);function g1(){return m1}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function y1(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:xc(e)?"-0":e}}function v1(t){return{integerValue:""+t}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class El{constructor(){this._=void 0}}function _1(t,e,n){return t instanceof zc?function(i,s){const a={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&sd(s)&&(s=od(s)),s&&(a.fields.__previous_value__=s),{mapValue:a}}(n,e):t instanceof qa?f_(t,e):t instanceof Ka?p_(t,e):function(i,s){const a=w1(i,s),l=Em(a)+Em(i.Pe);return Mc(a)&&Mc(i.Pe)?v1(l):y1(i.serializer,l)}(t,e)}function E1(t,e,n){return t instanceof qa?f_(t,e):t instanceof Ka?p_(t,e):n}function w1(t,e){return t instanceof jc?function(r){return Mc(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class zc extends El{}class qa extends El{constructor(e){super(),this.elements=e}}function f_(t,e){const n=m_(e);for(const r of t.elements)n.some(i=>jt(i,r))||n.push(r);return{arrayValue:{values:n}}}class Ka extends El{constructor(e){super(),this.elements=e}}function p_(t,e){let n=m_(e);for(const r of t.elements)n=n.filter(i=>!jt(i,r));return{arrayValue:{values:n}}}class jc extends El{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function Em(t){return we(t.integerValue||t.doubleValue)}function m_(t){return ad(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function T1(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof qa&&i instanceof qa||r instanceof Ka&&i instanceof Ka?_i(r.elements,i.elements,jt):r instanceof jc&&i instanceof jc?jt(r.Pe,i.Pe):r instanceof zc&&i instanceof zc}(t.transform,e.transform)}class yr{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new yr}static exists(e){return new yr(void 0,e)}static updateTime(e){return new yr(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function ca(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class hd{}function g_(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new S1(t.key,yr.none()):new dd(t.key,t.data,yr.none());{const n=t.data,r=Lt.empty();let i=new Me(Ze.comparator);for(let s of e.fields)if(!i.has(s)){let a=n.field(s);a===null&&s.length>1&&(s=s.popLast(),a=n.field(s)),a===null?r.delete(s):r.set(s,a),i=i.add(s)}return new wl(t.key,r,new On(i.toArray()),yr.none())}}function I1(t,e,n){t instanceof dd?function(i,s,a){const l=i.value.clone(),u=Tm(i.fieldTransforms,s,a.transformResults);l.setAll(u),s.convertToFoundDocument(a.version,l).setHasCommittedMutations()}(t,e,n):t instanceof wl?function(i,s,a){if(!ca(i.precondition,s))return void s.convertToUnknownDocument(a.version);const l=Tm(i.fieldTransforms,s,a.transformResults),u=s.data;u.setAll(y_(i)),u.setAll(l),s.convertToFoundDocument(a.version,u).setHasCommittedMutations()}(t,e,n):function(i,s,a){s.convertToNoDocument(a.version).setHasCommittedMutations()}(0,e,n)}function ws(t,e,n,r){return t instanceof dd?function(s,a,l,u){if(!ca(s.precondition,a))return l;const d=s.value.clone(),f=Im(s.fieldTransforms,u,a);return d.setAll(f),a.convertToFoundDocument(a.version,d).setHasLocalMutations(),null}(t,e,n,r):t instanceof wl?function(s,a,l,u){if(!ca(s.precondition,a))return l;const d=Im(s.fieldTransforms,u,a),f=a.data;return f.setAll(y_(s)),f.setAll(d),a.convertToFoundDocument(a.version,f).setHasLocalMutations(),l===null?null:l.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(g=>g.field))}(t,e,n,r):function(s,a,l){return ca(s.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):l}(t,e,n)}function wm(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&_i(r,i,(s,a)=>T1(s,a))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class dd extends hd{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class wl extends hd{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function y_(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Tm(t,e,n){const r=new Map;_e(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],a=s.transform,l=e.data.field(s.field);r.set(s.field,E1(a,l,n[i]))}return r}function Im(t,e,n){const r=new Map;for(const i of t){const s=i.transform,a=n.data.field(i.field);r.set(i.field,_1(s,a,e))}return r}class S1 extends hd{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A1{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&I1(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=ws(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=ws(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=d_();return this.mutations.forEach(i=>{const s=e.get(i.key),a=s.overlayedDocument;let l=this.applyToLocalView(a,s.mutatedFields);l=n.has(i.key)?null:l;const u=g_(a,l);u!==null&&r.set(i.key,u),a.isValidDocument()||a.convertToNoDocument(K.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ee())}isEqual(e){return this.batchId===e.batchId&&_i(this.mutations,e.mutations,(n,r)=>wm(n,r))&&_i(this.baseMutations,e.baseMutations,(n,r)=>wm(n,r))}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R1{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k1{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Se,J;function v_(t){if(t===void 0)return fn("GRPC error has no .code"),b.UNKNOWN;switch(t){case Se.OK:return b.OK;case Se.CANCELLED:return b.CANCELLED;case Se.UNKNOWN:return b.UNKNOWN;case Se.DEADLINE_EXCEEDED:return b.DEADLINE_EXCEEDED;case Se.RESOURCE_EXHAUSTED:return b.RESOURCE_EXHAUSTED;case Se.INTERNAL:return b.INTERNAL;case Se.UNAVAILABLE:return b.UNAVAILABLE;case Se.UNAUTHENTICATED:return b.UNAUTHENTICATED;case Se.INVALID_ARGUMENT:return b.INVALID_ARGUMENT;case Se.NOT_FOUND:return b.NOT_FOUND;case Se.ALREADY_EXISTS:return b.ALREADY_EXISTS;case Se.PERMISSION_DENIED:return b.PERMISSION_DENIED;case Se.FAILED_PRECONDITION:return b.FAILED_PRECONDITION;case Se.ABORTED:return b.ABORTED;case Se.OUT_OF_RANGE:return b.OUT_OF_RANGE;case Se.UNIMPLEMENTED:return b.UNIMPLEMENTED;case Se.DATA_LOSS:return b.DATA_LOSS;default:return Q()}}(J=Se||(Se={}))[J.OK=0]="OK",J[J.CANCELLED=1]="CANCELLED",J[J.UNKNOWN=2]="UNKNOWN",J[J.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",J[J.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",J[J.NOT_FOUND=5]="NOT_FOUND",J[J.ALREADY_EXISTS=6]="ALREADY_EXISTS",J[J.PERMISSION_DENIED=7]="PERMISSION_DENIED",J[J.UNAUTHENTICATED=16]="UNAUTHENTICATED",J[J.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",J[J.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",J[J.ABORTED=10]="ABORTED",J[J.OUT_OF_RANGE=11]="OUT_OF_RANGE",J[J.UNIMPLEMENTED=12]="UNIMPLEMENTED",J[J.INTERNAL=13]="INTERNAL",J[J.UNAVAILABLE=14]="UNAVAILABLE",J[J.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function C1(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const P1=new mr([4294967295,4294967295],0);function Sm(t){const e=C1().encode(t),n=new Gv;return n.update(e),new Uint8Array(n.digest())}function Am(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new mr([n,r],0),new mr([i,s],0)]}class fd{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new as(`Invalid padding: ${n}`);if(r<0)throw new as(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new as(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new as(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=mr.fromNumber(this.Ie)}Ee(e,n,r){let i=e.add(n.multiply(mr.fromNumber(r)));return i.compare(P1)===1&&(i=new mr([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=Sm(e),[r,i]=Am(n);for(let s=0;s<this.hashCount;s++){const a=this.Ee(r,i,s);if(!this.de(a))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),a=new fd(s,i,n);return r.forEach(l=>a.insert(l)),a}insert(e){if(this.Ie===0)return;const n=Sm(e),[r,i]=Am(n);for(let s=0;s<this.hashCount;s++){const a=this.Ee(r,i,s);this.Ae(a)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class as extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tl{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,ro.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Tl(K.min(),i,new Ie(re),Qn(),ee())}}class ro{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new ro(r,n,ee(),ee(),ee())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ha{constructor(e,n,r,i){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=i}}class __{constructor(e,n){this.targetId=e,this.me=n}}class E_{constructor(e,n,r=Ue.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class Rm{constructor(){this.fe=0,this.ge=Cm(),this.pe=Ue.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=ee(),n=ee(),r=ee();return this.ge.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:Q()}}),new ro(this.pe,this.ye,e,n,r)}Ce(){this.we=!1,this.ge=Cm()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,_e(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class N1{constructor(e){this.Le=e,this.Be=new Map,this.ke=Qn(),this.qe=km(),this.Qe=new Ie(re)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:Q()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,i)=>{this.ze(i)&&n(i)})}He(e){const n=e.targetId,r=e.me.count,i=this.Je(n);if(i){const s=i.target;if(Uc(s))if(r===0){const a=new H(s.path);this.Ue(n,a,Ke.newNoDocument(a,K.min()))}else _e(r===1);else{const a=this.Ye(n);if(a!==r){const l=this.Ze(e),u=l?this.Xe(l,e,a):1;if(u!==0){this.je(n);const d=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,d)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let a,l;try{a=Rr(r).toUint8Array()}catch(u){if(u instanceof n_)return vi("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new fd(a,i,s)}catch(u){return vi(u instanceof as?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.Ie===0?null:l}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const a=this.Le.tt(),l=`projects/${a.projectId}/databases/${a.database}/documents/${s.path.canonicalString()}`;e.mightContain(l)||(this.Ue(n,s,null),i++)}),i}rt(e){const n=new Map;this.Be.forEach((s,a)=>{const l=this.Je(a);if(l){if(s.current&&Uc(l.target)){const u=new H(l.target.path);this.ke.get(u)!==null||this.it(a,u)||this.Ue(a,u,Ke.newNoDocument(u,e))}s.be&&(n.set(a,s.ve()),s.Ce())}});let r=ee();this.qe.forEach((s,a)=>{let l=!0;a.forEachWhile(u=>{const d=this.Je(u);return!d||d.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(s))}),this.ke.forEach((s,a)=>a.setReadTime(e));const i=new Tl(e,n,this.Qe,this.ke,r);return this.ke=Qn(),this.qe=km(),this.Qe=new Ie(re),i}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const i=this.Ge(e);this.it(e,n)?i.Fe(n,1):i.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new Rm,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new Me(re),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||B("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new Rm),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function km(){return new Ie(H.comparator)}function Cm(){return new Ie(H.comparator)}const D1={asc:"ASCENDING",desc:"DESCENDING"},O1={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},V1={and:"AND",or:"OR"};class x1{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Bc(t,e){return t.useProto3Json||ml(e)?e:{value:e}}function L1(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function M1(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function ai(t){return _e(!!t),K.fromTimestamp(function(n){const r=Gn(n);return new lt(r.seconds,r.nanos)}(t))}function F1(t,e){return $c(t,e).canonicalString()}function $c(t,e){const n=function(i){return new ve(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function w_(t){const e=ve.fromString(t);return _e(R_(e)),e}function Cu(t,e){const n=w_(e);if(n.get(1)!==t.databaseId.projectId)throw new $(b.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new $(b.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new H(I_(n))}function T_(t,e){return F1(t.databaseId,e)}function U1(t){const e=w_(t);return e.length===4?ve.emptyPath():I_(e)}function Pm(t){return new ve(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function I_(t){return _e(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function b1(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(d){return d==="NO_CHANGE"?0:d==="ADD"?1:d==="REMOVE"?2:d==="CURRENT"?3:d==="RESET"?4:Q()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(d,f){return d.useProto3Json?(_e(f===void 0||typeof f=="string"),Ue.fromBase64String(f||"")):(_e(f===void 0||f instanceof Buffer||f instanceof Uint8Array),Ue.fromUint8Array(f||new Uint8Array))}(t,e.targetChange.resumeToken),a=e.targetChange.cause,l=a&&function(d){const f=d.code===void 0?b.UNKNOWN:v_(d.code);return new $(f,d.message||"")}(a);n=new E_(r,i,s,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Cu(t,r.document.name),s=ai(r.document.updateTime),a=r.document.createTime?ai(r.document.createTime):K.min(),l=new Lt({mapValue:{fields:r.document.fields}}),u=Ke.newFoundDocument(i,s,a,l),d=r.targetIds||[],f=r.removedTargetIds||[];n=new ha(d,f,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Cu(t,r.document),s=r.readTime?ai(r.readTime):K.min(),a=Ke.newNoDocument(i,s),l=r.removedTargetIds||[];n=new ha([],l,a.key,a)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Cu(t,r.document),s=r.removedTargetIds||[];n=new ha([],s,i,null)}else{if(!("filter"in e))return Q();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,a=new k1(i,s),l=r.targetId;n=new __(l,a)}}return n}function z1(t,e){return{documents:[T_(t,e.path)]}}function j1(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=T_(t,i);const s=function(d){if(d.length!==0)return A_(Bt.create(d,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const a=function(d){if(d.length!==0)return d.map(f=>function(v){return{field:Fr(v.field),direction:H1(v.dir)}}(f))}(e.orderBy);a&&(n.structuredQuery.orderBy=a);const l=Bc(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(d){return{before:d.inclusive,values:d.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(d){return{before:!d.inclusive,values:d.position}}(e.endAt)),{_t:n,parent:i}}function B1(t){let e=U1(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){_e(r===1);const f=n.from[0];f.allDescendants?i=f.collectionId:e=e.child(f.collectionId)}let s=[];n.where&&(s=function(g){const v=S_(g);return v instanceof Bt&&s_(v)?v.getFilters():[v]}(n.where));let a=[];n.orderBy&&(a=function(g){return g.map(v=>function(N){return new Wa(Ur(N.field),function(L){switch(L){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(N.direction))}(v))}(n.orderBy));let l=null;n.limit&&(l=function(g){let v;return v=typeof g=="object"?g.value:g,ml(v)?null:v}(n.limit));let u=null;n.startAt&&(u=function(g){const v=!!g.before,k=g.values||[];return new Ha(k,v)}(n.startAt));let d=null;return n.endAt&&(d=function(g){const v=!g.before,k=g.values||[];return new Ha(k,v)}(n.endAt)),a1(e,i,a,s,l,"F",u,d)}function $1(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Q()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function S_(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Ur(n.unaryFilter.field);return ke.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=Ur(n.unaryFilter.field);return ke.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Ur(n.unaryFilter.field);return ke.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=Ur(n.unaryFilter.field);return ke.create(a,"!=",{nullValue:"NULL_VALUE"});default:return Q()}}(t):t.fieldFilter!==void 0?function(n){return ke.create(Ur(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Q()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Bt.create(n.compositeFilter.filters.map(r=>S_(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return Q()}}(n.compositeFilter.op))}(t):Q()}function H1(t){return D1[t]}function W1(t){return O1[t]}function q1(t){return V1[t]}function Fr(t){return{fieldPath:t.canonicalString()}}function Ur(t){return Ze.fromServerFormat(t.fieldPath)}function A_(t){return t instanceof ke?function(n){if(n.op==="=="){if(mm(n.value))return{unaryFilter:{field:Fr(n.field),op:"IS_NAN"}};if(pm(n.value))return{unaryFilter:{field:Fr(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(mm(n.value))return{unaryFilter:{field:Fr(n.field),op:"IS_NOT_NAN"}};if(pm(n.value))return{unaryFilter:{field:Fr(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Fr(n.field),op:W1(n.op),value:n.value}}}(t):t instanceof Bt?function(n){const r=n.getFilters().map(i=>A_(i));return r.length===1?r[0]:{compositeFilter:{op:q1(n.op),filters:r}}}(t):Q()}function R_(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vn{constructor(e,n,r,i,s=K.min(),a=K.min(),l=Ue.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(e){return new Vn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Vn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Vn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Vn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K1{constructor(e){this.ct=e}}function G1(t){const e=B1({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?bc(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q1{constructor(){this.un=new Y1}addToCollectionParentIndex(e,n){return this.un.add(n),V.resolve()}getCollectionParents(e,n){return V.resolve(this.un.getEntries(n))}addFieldIndex(e,n){return V.resolve()}deleteFieldIndex(e,n){return V.resolve()}deleteAllFieldIndexes(e){return V.resolve()}createTargetIndexes(e,n){return V.resolve()}getDocumentsMatchingTarget(e,n){return V.resolve(null)}getIndexType(e,n){return V.resolve(0)}getFieldIndexes(e,n){return V.resolve([])}getNextCollectionGroupToUpdate(e){return V.resolve(null)}getMinOffset(e,n){return V.resolve(Kn.min())}getMinOffsetFromCollectionGroup(e,n){return V.resolve(Kn.min())}updateCollectionGroup(e,n,r){return V.resolve()}updateIndexEntries(e,n){return V.resolve()}}class Y1{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new Me(ve.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new Me(ve.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ti{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new Ti(0)}static kn(){return new Ti(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X1{constructor(){this.changes=new Ni(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Ke.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?V.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J1{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z1{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&ws(r.mutation,i,On.empty(),lt.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,ee()).next(()=>r))}getLocalViewOfDocuments(e,n,r=ee()){const i=hr();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let a=os();return s.forEach((l,u)=>{a=a.insert(l,u.overlayedDocument)}),a}))}getOverlayedDocuments(e,n){const r=hr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,ee()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((a,l)=>{n.set(a,l)})})}computeViews(e,n,r,i){let s=Qn();const a=Es(),l=function(){return Es()}();return n.forEach((u,d)=>{const f=r.get(d.key);i.has(d.key)&&(f===void 0||f.mutation instanceof wl)?s=s.insert(d.key,d):f!==void 0?(a.set(d.key,f.mutation.getFieldMask()),ws(f.mutation,d,f.mutation.getFieldMask(),lt.now())):a.set(d.key,On.empty())}),this.recalculateAndSaveOverlays(e,s).next(u=>(u.forEach((d,f)=>a.set(d,f)),n.forEach((d,f)=>{var g;return l.set(d,new J1(f,(g=a.get(d))!==null&&g!==void 0?g:null))}),l))}recalculateAndSaveOverlays(e,n){const r=Es();let i=new Ie((a,l)=>a-l),s=ee();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(a=>{for(const l of a)l.keys().forEach(u=>{const d=n.get(u);if(d===null)return;let f=r.get(u)||On.empty();f=l.applyToLocalView(d,f),r.set(u,f);const g=(i.get(l.batchId)||ee()).add(u);i=i.insert(l.batchId,g)})}).next(()=>{const a=[],l=i.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),d=u.key,f=u.value,g=d_();f.forEach(v=>{if(!s.has(v)){const k=g_(n.get(v),r.get(v));k!==null&&g.set(v,k),s=s.add(v)}}),a.push(this.documentOverlayCache.saveOverlays(e,d,g))}return V.waitFor(a)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(a){return H.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):l1(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const a=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):V.resolve(hr());let l=-1,u=s;return a.next(d=>V.forEach(d,(f,g)=>(l<g.largestBatchId&&(l=g.largestBatchId),s.get(f)?V.resolve():this.remoteDocumentCache.getEntry(e,f).next(v=>{u=u.insert(f,v)}))).next(()=>this.populateOverlays(e,d,s)).next(()=>this.computeViews(e,u,d,ee())).next(f=>({batchId:l,changes:f1(f)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new H(n)).next(r=>{let i=os();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let a=os();return this.indexManager.getCollectionParents(e,s).next(l=>V.forEach(l,u=>{const d=function(g,v){return new yl(v,null,g.explicitOrderBy.slice(),g.filters.slice(),g.limit,g.limitType,g.startAt,g.endAt)}(n,u.child(s));return this.getDocumentsMatchingCollectionQuery(e,d,r,i).next(f=>{f.forEach((g,v)=>{a=a.insert(g,v)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(a=>(s=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(a=>{s.forEach((u,d)=>{const f=d.getKey();a.get(f)===null&&(a=a.insert(f,Ke.newInvalidDocument(f)))});let l=os();return a.forEach((u,d)=>{const f=s.get(u);f!==void 0&&ws(f.mutation,d,On.empty(),lt.now()),_l(n,d)&&(l=l.insert(u,d))}),l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eR{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,n){return V.resolve(this.hr.get(n))}saveBundleMetadata(e,n){return this.hr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:ai(i.createTime)}}(n)),V.resolve()}getNamedQuery(e,n){return V.resolve(this.Pr.get(n))}saveNamedQuery(e,n){return this.Pr.set(n.name,function(i){return{name:i.name,query:G1(i.bundledQuery),readTime:ai(i.readTime)}}(n)),V.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tR{constructor(){this.overlays=new Ie(H.comparator),this.Ir=new Map}getOverlay(e,n){return V.resolve(this.overlays.get(n))}getOverlays(e,n){const r=hr();return V.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.ht(e,n,s)}),V.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.Ir.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Ir.delete(r)),V.resolve()}getOverlaysForCollection(e,n,r){const i=hr(),s=n.length+1,a=new H(n.child("")),l=this.overlays.getIteratorFrom(a);for(;l.hasNext();){const u=l.getNext().value,d=u.getKey();if(!n.isPrefixOf(d.path))break;d.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return V.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new Ie((d,f)=>d-f);const a=this.overlays.getIterator();for(;a.hasNext();){const d=a.getNext().value;if(d.getKey().getCollectionGroup()===n&&d.largestBatchId>r){let f=s.get(d.largestBatchId);f===null&&(f=hr(),s=s.insert(d.largestBatchId,f)),f.set(d.getKey(),d)}}const l=hr(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((d,f)=>l.set(d,f)),!(l.size()>=i)););return V.resolve(l)}ht(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const a=this.Ir.get(i.largestBatchId).delete(r.key);this.Ir.set(i.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new R1(n,r));let s=this.Ir.get(n);s===void 0&&(s=ee(),this.Ir.set(n,s)),this.Ir.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nR{constructor(){this.sessionToken=Ue.EMPTY_BYTE_STRING}getSessionToken(e){return V.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,V.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pd{constructor(){this.Tr=new Me(Pe.Er),this.dr=new Me(Pe.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,n){const r=new Pe(e,n);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Vr(new Pe(e,n))}mr(e,n){e.forEach(r=>this.removeReference(r,n))}gr(e){const n=new H(new ve([])),r=new Pe(n,e),i=new Pe(n,e+1),s=[];return this.dr.forEachInRange([r,i],a=>{this.Vr(a),s.push(a.key)}),s}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const n=new H(new ve([])),r=new Pe(n,e),i=new Pe(n,e+1);let s=ee();return this.dr.forEachInRange([r,i],a=>{s=s.add(a.key)}),s}containsKey(e){const n=new Pe(e,0),r=this.Tr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Pe{constructor(e,n){this.key=e,this.wr=n}static Er(e,n){return H.comparator(e.key,n.key)||re(e.wr,n.wr)}static Ar(e,n){return re(e.wr,n.wr)||H.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rR{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Sr=1,this.br=new Me(Pe.Er)}checkEmpty(e){return V.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new A1(s,n,r,i);this.mutationQueue.push(a);for(const l of i)this.br=this.br.add(new Pe(l.key,s)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return V.resolve(a)}lookupMutationBatch(e,n){return V.resolve(this.Dr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.vr(r),s=i<0?0:i;return V.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return V.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return V.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Pe(n,0),i=new Pe(n,Number.POSITIVE_INFINITY),s=[];return this.br.forEachInRange([r,i],a=>{const l=this.Dr(a.wr);s.push(l)}),V.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Me(re);return n.forEach(i=>{const s=new Pe(i,0),a=new Pe(i,Number.POSITIVE_INFINITY);this.br.forEachInRange([s,a],l=>{r=r.add(l.wr)})}),V.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;H.isDocumentKey(s)||(s=s.child(""));const a=new Pe(new H(s),0);let l=new Me(re);return this.br.forEachWhile(u=>{const d=u.key.path;return!!r.isPrefixOf(d)&&(d.length===i&&(l=l.add(u.wr)),!0)},a),V.resolve(this.Cr(l))}Cr(e){const n=[];return e.forEach(r=>{const i=this.Dr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){_e(this.Fr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return V.forEach(n.mutations,i=>{const s=new Pe(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,n){const r=new Pe(n,0),i=this.br.firstAfterOrEqual(r);return V.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,V.resolve()}Fr(e,n){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const n=this.vr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iR{constructor(e){this.Mr=e,this.docs=function(){return new Ie(H.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,a=this.Mr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:a}),this.size+=a-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return V.resolve(r?r.document.mutableCopy():Ke.newInvalidDocument(n))}getEntries(e,n){let r=Qn();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():Ke.newInvalidDocument(i))}),V.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=Qn();const a=n.path,l=new H(a.child("")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:d,value:{document:f}}=u.getNext();if(!a.isPrefixOf(d.path))break;d.path.length>a.length+1||BA(jA(f),r)<=0||(i.has(f.key)||_l(n,f))&&(s=s.insert(f.key,f.mutableCopy()))}return V.resolve(s)}getAllFromCollectionGroup(e,n,r,i){Q()}Or(e,n){return V.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new sR(this)}getSize(e){return V.resolve(this.size)}}class sR extends X1{constructor(e){super(),this.cr=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.cr.addEntry(e,i)):this.cr.removeEntry(r)}),V.waitFor(n)}getFromCache(e,n){return this.cr.getEntry(e,n)}getAllFromCache(e,n){return this.cr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oR{constructor(e){this.persistence=e,this.Nr=new Ni(n=>ld(n),ud),this.lastRemoteSnapshotVersion=K.min(),this.highestTargetId=0,this.Lr=0,this.Br=new pd,this.targetCount=0,this.kr=Ti.Bn()}forEachTarget(e,n){return this.Nr.forEach((r,i)=>n(i)),V.resolve()}getLastRemoteSnapshotVersion(e){return V.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return V.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),V.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Lr&&(this.Lr=n),V.resolve()}Kn(e){this.Nr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.kr=new Ti(n),this.highestTargetId=n),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,n){return this.Kn(n),this.targetCount+=1,V.resolve()}updateTargetData(e,n){return this.Kn(n),V.resolve()}removeTargetData(e,n){return this.Nr.delete(n.target),this.Br.gr(n.targetId),this.targetCount-=1,V.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Nr.forEach((a,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.Nr.delete(a),s.push(this.removeMatchingKeysForTargetId(e,l.targetId)),i++)}),V.waitFor(s).next(()=>i)}getTargetCount(e){return V.resolve(this.targetCount)}getTargetData(e,n){const r=this.Nr.get(n)||null;return V.resolve(r)}addMatchingKeys(e,n,r){return this.Br.Rr(n,r),V.resolve()}removeMatchingKeys(e,n,r){this.Br.mr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(a=>{s.push(i.markPotentiallyOrphaned(e,a))}),V.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Br.gr(n),V.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Br.yr(n);return V.resolve(r)}containsKey(e,n){return V.resolve(this.Br.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aR{constructor(e,n){this.qr={},this.overlays={},this.Qr=new id(0),this.Kr=!1,this.Kr=!0,this.$r=new nR,this.referenceDelegate=e(this),this.Ur=new oR(this),this.indexManager=new Q1,this.remoteDocumentCache=function(i){return new iR(i)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new K1(n),this.Gr=new eR(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new tR,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.qr[e.toKey()];return r||(r=new rR(n,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,n,r){B("MemoryPersistence","Starting transaction:",e);const i=new lR(this.Qr.next());return this.referenceDelegate.zr(),r(i).next(s=>this.referenceDelegate.jr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Hr(e,n){return V.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,n)))}}class lR extends HA{constructor(e){super(),this.currentSequenceNumber=e}}class md{constructor(e){this.persistence=e,this.Jr=new pd,this.Yr=null}static Zr(e){return new md(e)}get Xr(){if(this.Yr)return this.Yr;throw Q()}addReference(e,n,r){return this.Jr.addReference(r,n),this.Xr.delete(r.toString()),V.resolve()}removeReference(e,n,r){return this.Jr.removeReference(r,n),this.Xr.add(r.toString()),V.resolve()}markPotentiallyOrphaned(e,n){return this.Xr.add(n.toString()),V.resolve()}removeTarget(e,n){this.Jr.gr(n.targetId).forEach(i=>this.Xr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Xr.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}zr(){this.Yr=new Set}jr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return V.forEach(this.Xr,r=>{const i=H.fromPath(r);return this.ei(e,i).next(s=>{s||n.removeEntry(i,K.min())})}).next(()=>(this.Yr=null,n.apply(e)))}updateLimboDocument(e,n){return this.ei(e,n).next(r=>{r?this.Xr.delete(n.toString()):this.Xr.add(n.toString())})}Wr(e){return 0}ei(e,n){return V.or([()=>V.resolve(this.Jr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Hr(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gd{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.$i=r,this.Ui=i}static Wi(e,n){let r=ee(),i=ee();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new gd(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uR{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cR{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return mT()?8:WA(Qe())>0?6:4}()}initialize(e,n){this.Ji=e,this.indexManager=n,this.Gi=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.Yi(e,n).next(a=>{s.result=a}).next(()=>{if(!s.result)return this.Zi(e,n,i,r).next(a=>{s.result=a})}).next(()=>{if(s.result)return;const a=new uR;return this.Xi(e,n,a).next(l=>{if(s.result=l,this.zi)return this.es(e,n,a,l.size)})}).next(()=>s.result)}es(e,n,r,i){return r.documentReadCount<this.ji?(es()<=X.DEBUG&&B("QueryEngine","SDK will not create cache indexes for query:",Mr(n),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),V.resolve()):(es()<=X.DEBUG&&B("QueryEngine","Query:",Mr(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Hi*i?(es()<=X.DEBUG&&B("QueryEngine","The SDK decides to create cache indexes for query:",Mr(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,zt(n))):V.resolve())}Yi(e,n){if(_m(n))return V.resolve(null);let r=zt(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=bc(n,null,"F"),r=zt(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const a=ee(...s);return this.Ji.getDocuments(e,a).next(l=>this.indexManager.getMinOffset(e,r).next(u=>{const d=this.ts(n,l);return this.ns(n,d,a,u.readTime)?this.Yi(e,bc(n,null,"F")):this.rs(e,d,n,u)}))})))}Zi(e,n,r,i){return _m(n)||i.isEqual(K.min())?V.resolve(null):this.Ji.getDocuments(e,r).next(s=>{const a=this.ts(n,s);return this.ns(n,a,r,i)?V.resolve(null):(es()<=X.DEBUG&&B("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Mr(n)),this.rs(e,a,n,zA(i,-1)).next(l=>l))})}ts(e,n){let r=new Me(c_(e));return n.forEach((i,s)=>{_l(e,s)&&(r=r.add(s))}),r}ns(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Xi(e,n,r){return es()<=X.DEBUG&&B("QueryEngine","Using full collection scan to execute query:",Mr(n)),this.Ji.getDocumentsMatchingQuery(e,n,Kn.min(),r)}rs(e,n,r,i){return this.Ji.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(a=>{s=s.insert(a.key,a)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hR{constructor(e,n,r,i){this.persistence=e,this.ss=n,this.serializer=i,this.os=new Ie(re),this._s=new Ni(s=>ld(s),ud),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Z1(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.os))}}function dR(t,e,n,r){return new hR(t,e,n,r)}async function k_(t,e){const n=Z(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.ls(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const a=[],l=[];let u=ee();for(const d of i){a.push(d.batchId);for(const f of d.mutations)u=u.add(f.key)}for(const d of s){l.push(d.batchId);for(const f of d.mutations)u=u.add(f.key)}return n.localDocuments.getDocuments(r,u).next(d=>({hs:d,removedBatchIds:a,addedBatchIds:l}))})})}function C_(t){const e=Z(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ur.getLastRemoteSnapshotVersion(n))}function fR(t,e){const n=Z(t),r=e.snapshotVersion;let i=n.os;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const a=n.cs.newChangeBuffer({trackRemovals:!0});i=n.os;const l=[];e.targetChanges.forEach((f,g)=>{const v=i.get(g);if(!v)return;l.push(n.Ur.removeMatchingKeys(s,f.removedDocuments,g).next(()=>n.Ur.addMatchingKeys(s,f.addedDocuments,g)));let k=v.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(g)!==null?k=k.withResumeToken(Ue.EMPTY_BYTE_STRING,K.min()).withLastLimboFreeSnapshotVersion(K.min()):f.resumeToken.approximateByteSize()>0&&(k=k.withResumeToken(f.resumeToken,r)),i=i.insert(g,k),function(O,L,I){return O.resumeToken.approximateByteSize()===0||L.snapshotVersion.toMicroseconds()-O.snapshotVersion.toMicroseconds()>=3e8?!0:I.addedDocuments.size+I.modifiedDocuments.size+I.removedDocuments.size>0}(v,k,f)&&l.push(n.Ur.updateTargetData(s,k))});let u=Qn(),d=ee();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(s,f))}),l.push(pR(s,a,e.documentUpdates).next(f=>{u=f.Ps,d=f.Is})),!r.isEqual(K.min())){const f=n.Ur.getLastRemoteSnapshotVersion(s).next(g=>n.Ur.setTargetsMetadata(s,s.currentSequenceNumber,r));l.push(f)}return V.waitFor(l).next(()=>a.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,u,d)).next(()=>u)}).then(s=>(n.os=i,s))}function pR(t,e,n){let r=ee(),i=ee();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let a=Qn();return n.forEach((l,u)=>{const d=s.get(l);u.isFoundDocument()!==d.isFoundDocument()&&(i=i.add(l)),u.isNoDocument()&&u.version.isEqual(K.min())?(e.removeEntry(l,u.readTime),a=a.insert(l,u)):!d.isValidDocument()||u.version.compareTo(d.version)>0||u.version.compareTo(d.version)===0&&d.hasPendingWrites?(e.addEntry(u),a=a.insert(l,u)):B("LocalStore","Ignoring outdated watch update for ",l,". Current version:",d.version," Watch version:",u.version)}),{Ps:a,Is:i}})}function mR(t,e){const n=Z(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Ur.getTargetData(r,e).next(s=>s?(i=s,V.resolve(i)):n.Ur.allocateTargetId(r).next(a=>(i=new Vn(e,a,"TargetPurposeListen",r.currentSequenceNumber),n.Ur.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.os.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.os=n.os.insert(r.targetId,r),n._s.set(e,r.targetId)),r})}async function Hc(t,e,n){const r=Z(t),i=r.os.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,a=>r.persistence.referenceDelegate.removeTarget(a,i))}catch(a){if(!no(a))throw a;B("LocalStore",`Failed to update sequence numbers for target ${e}: ${a}`)}r.os=r.os.remove(e),r._s.delete(i.target)}function Nm(t,e,n){const r=Z(t);let i=K.min(),s=ee();return r.persistence.runTransaction("Execute query","readwrite",a=>function(u,d,f){const g=Z(u),v=g._s.get(f);return v!==void 0?V.resolve(g.os.get(v)):g.Ur.getTargetData(d,f)}(r,a,zt(e)).next(l=>{if(l)return i=l.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(a,l.targetId).next(u=>{s=u})}).next(()=>r.ss.getDocumentsMatchingQuery(a,e,n?i:K.min(),n?s:ee())).next(l=>(gR(r,c1(e),l),{documents:l,Ts:s})))}function gR(t,e,n){let r=t.us.get(e)||K.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.us.set(e,r)}class Dm{constructor(){this.activeTargetIds=g1()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class yR{constructor(){this.so=new Dm,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,n,r){this.oo[e]=n}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new Dm,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vR{_o(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Om{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){B("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){B("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let qo=null;function Pu(){return qo===null?qo=function(){return 268435456+Math.round(2147483648*Math.random())}():qo++,"0x"+qo.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _R={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ER{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const He="WebChannelConnection";class wR extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+n.host,this.vo=`projects/${i}/databases/${s}`,this.Co=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get Fo(){return!1}Mo(n,r,i,s,a){const l=Pu(),u=this.xo(n,r.toUriEncodedString());B("RestConnection",`Sending RPC '${n}' ${l}:`,u,i);const d={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(d,s,a),this.No(n,u,d,i).then(f=>(B("RestConnection",`Received RPC '${n}' ${l}: `,f),f),f=>{throw vi("RestConnection",`RPC '${n}' ${l} failed with error: `,f,"url: ",u,"request:",i),f})}Lo(n,r,i,s,a,l){return this.Mo(n,r,i,s,a)}Oo(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Pi}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,a)=>n[a]=s),i&&i.headers.forEach((s,a)=>n[a]=s)}xo(n,r){const i=_R[n];return`${this.Do}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,n,r,i){const s=Pu();return new Promise((a,l)=>{const u=new Qv;u.setWithCredentials(!0),u.listenOnce(Yv.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case ua.NO_ERROR:const f=u.getResponseJson();B(He,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(f)),a(f);break;case ua.TIMEOUT:B(He,`RPC '${e}' ${s} timed out`),l(new $(b.DEADLINE_EXCEEDED,"Request time out"));break;case ua.HTTP_ERROR:const g=u.getStatus();if(B(He,`RPC '${e}' ${s} failed with status:`,g,"response text:",u.getResponseText()),g>0){let v=u.getResponseJson();Array.isArray(v)&&(v=v[0]);const k=v==null?void 0:v.error;if(k&&k.status&&k.message){const N=function(L){const I=L.toLowerCase().replace(/_/g,"-");return Object.values(b).indexOf(I)>=0?I:b.UNKNOWN}(k.status);l(new $(N,k.message))}else l(new $(b.UNKNOWN,"Server responded with status "+u.getStatus()))}else l(new $(b.UNAVAILABLE,"Connection failed."));break;default:Q()}}finally{B(He,`RPC '${e}' ${s} completed.`)}});const d=JSON.stringify(i);B(He,`RPC '${e}' ${s} sending request:`,i),u.send(n,"POST",d,r,15)})}Bo(e,n,r){const i=Pu(),s=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=Zv(),l=Jv(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},d=this.longPollingOptions.timeoutSeconds;d!==void 0&&(u.longPollingTimeout=Math.round(1e3*d)),this.useFetchStreams&&(u.useFetchStreams=!0),this.Oo(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const f=s.join("");B(He,`Creating RPC '${e}' stream ${i}: ${f}`,u);const g=a.createWebChannel(f,u);let v=!1,k=!1;const N=new ER({Io:L=>{k?B(He,`Not sending because RPC '${e}' stream ${i} is closed:`,L):(v||(B(He,`Opening RPC '${e}' stream ${i} transport.`),g.open(),v=!0),B(He,`RPC '${e}' stream ${i} sending:`,L),g.send(L))},To:()=>g.close()}),O=(L,I,E)=>{L.listen(I,S=>{try{E(S)}catch(D){setTimeout(()=>{throw D},0)}})};return O(g,ss.EventType.OPEN,()=>{k||(B(He,`RPC '${e}' stream ${i} transport opened.`),N.yo())}),O(g,ss.EventType.CLOSE,()=>{k||(k=!0,B(He,`RPC '${e}' stream ${i} transport closed`),N.So())}),O(g,ss.EventType.ERROR,L=>{k||(k=!0,vi(He,`RPC '${e}' stream ${i} transport errored:`,L),N.So(new $(b.UNAVAILABLE,"The operation could not be completed")))}),O(g,ss.EventType.MESSAGE,L=>{var I;if(!k){const E=L.data[0];_e(!!E);const S=E,D=S.error||((I=S[0])===null||I===void 0?void 0:I.error);if(D){B(He,`RPC '${e}' stream ${i} received error:`,D);const U=D.status;let F=function(y){const w=Se[y];if(w!==void 0)return v_(w)}(U),_=D.message;F===void 0&&(F=b.INTERNAL,_="Unknown error status: "+U+" with message "+D.message),k=!0,N.So(new $(F,_)),g.close()}else B(He,`RPC '${e}' stream ${i} received:`,E),N.bo(E)}}),O(l,Xv.STAT_EVENT,L=>{L.stat===Vc.PROXY?B(He,`RPC '${e}' stream ${i} detected buffering proxy`):L.stat===Vc.NOPROXY&&B(He,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{N.wo()},0),N}}function Nu(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function P_(t){return new x1(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N_{constructor(e,n,r=1e3,i=1.5,s=6e4){this.ui=e,this.timerId=n,this.ko=r,this.qo=i,this.Qo=s,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const n=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),i=Math.max(0,n-r);i>0&&B("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,i,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TR{constructor(e,n,r,i,s,a,l,u){this.ui=e,this.Ho=r,this.Jo=i,this.connection=s,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new N_(e,n)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,n){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():n&&n.code===b.RESOURCE_EXHAUSTED?(fn(n.toString()),fn("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):n&&n.code===b.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(n)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),n=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Yo===n&&this.P_(r,i)},r=>{e(()=>{const i=new $(b.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(i)})})}P_(e,n){const r=this.h_(this.Yo);this.stream=this.T_(e,n),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(i=>{r(()=>this.I_(i))}),this.stream.onMessage(i=>{r(()=>++this.e_==1?this.E_(i):this.onNext(i))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return B("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return n=>{this.ui.enqueueAndForget(()=>this.Yo===e?n():(B("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class IR extends TR{constructor(e,n,r,i,s,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,a),this.serializer=s}T_(e,n){return this.connection.Bo("Listen",e,n)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const n=b1(this.serializer,e),r=function(s){if(!("targetChange"in s))return K.min();const a=s.targetChange;return a.targetIds&&a.targetIds.length?K.min():a.readTime?ai(a.readTime):K.min()}(e);return this.listener.d_(n,r)}A_(e){const n={};n.database=Pm(this.serializer),n.addTarget=function(s,a){let l;const u=a.target;if(l=Uc(u)?{documents:z1(s,u)}:{query:j1(s,u)._t},l.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){l.resumeToken=M1(s,a.resumeToken);const d=Bc(s,a.expectedCount);d!==null&&(l.expectedCount=d)}else if(a.snapshotVersion.compareTo(K.min())>0){l.readTime=L1(s,a.snapshotVersion.toTimestamp());const d=Bc(s,a.expectedCount);d!==null&&(l.expectedCount=d)}return l}(this.serializer,e);const r=$1(this.serializer,e);r&&(n.labels=r),this.a_(n)}R_(e){const n={};n.database=Pm(this.serializer),n.removeTarget=e,this.a_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SR extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.y_=!1}w_(){if(this.y_)throw new $(b.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,n,r,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,a])=>this.connection.Mo(e,$c(n,r),i,s,a)).catch(s=>{throw s.name==="FirebaseError"?(s.code===b.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new $(b.UNKNOWN,s.toString())})}Lo(e,n,r,i,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,l])=>this.connection.Lo(e,$c(n,r),i,a,l,s)).catch(a=>{throw a.name==="FirebaseError"?(a.code===b.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new $(b.UNKNOWN,a.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class AR{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(fn(n),this.D_=!1):B("OnlineStateTracker",n)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RR{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=s,this.k_._o(a=>{r.enqueueAndForget(async()=>{so(this)&&(B("RemoteStore","Restarting streams for network reachability change."),await async function(u){const d=Z(u);d.L_.add(4),await io(d),d.q_.set("Unknown"),d.L_.delete(4),await Il(d)}(this))})}),this.q_=new AR(r,i)}}async function Il(t){if(so(t))for(const e of t.B_)await e(!0)}async function io(t){for(const e of t.B_)await e(!1)}function D_(t,e){const n=Z(t);n.N_.has(e.targetId)||(n.N_.set(e.targetId,e),Ed(n)?_d(n):Di(n).r_()&&vd(n,e))}function yd(t,e){const n=Z(t),r=Di(n);n.N_.delete(e),r.r_()&&O_(n,e),n.N_.size===0&&(r.r_()?r.o_():so(n)&&n.q_.set("Unknown"))}function vd(t,e){if(t.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(K.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Di(t).A_(e)}function O_(t,e){t.Q_.xe(e),Di(t).R_(e)}function _d(t){t.Q_=new N1({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.N_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),Di(t).start(),t.q_.v_()}function Ed(t){return so(t)&&!Di(t).n_()&&t.N_.size>0}function so(t){return Z(t).L_.size===0}function V_(t){t.Q_=void 0}async function kR(t){t.q_.set("Online")}async function CR(t){t.N_.forEach((e,n)=>{vd(t,e)})}async function PR(t,e){V_(t),Ed(t)?(t.q_.M_(e),_d(t)):t.q_.set("Unknown")}async function NR(t,e,n){if(t.q_.set("Online"),e instanceof E_&&e.state===2&&e.cause)try{await async function(i,s){const a=s.cause;for(const l of s.targetIds)i.N_.has(l)&&(await i.remoteSyncer.rejectListen(l,a),i.N_.delete(l),i.Q_.removeTarget(l))}(t,e)}catch(r){B("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Vm(t,r)}else if(e instanceof ha?t.Q_.Ke(e):e instanceof __?t.Q_.He(e):t.Q_.We(e),!n.isEqual(K.min()))try{const r=await C_(t.localStore);n.compareTo(r)>=0&&await function(s,a){const l=s.Q_.rt(a);return l.targetChanges.forEach((u,d)=>{if(u.resumeToken.approximateByteSize()>0){const f=s.N_.get(d);f&&s.N_.set(d,f.withResumeToken(u.resumeToken,a))}}),l.targetMismatches.forEach((u,d)=>{const f=s.N_.get(u);if(!f)return;s.N_.set(u,f.withResumeToken(Ue.EMPTY_BYTE_STRING,f.snapshotVersion)),O_(s,u);const g=new Vn(f.target,u,d,f.sequenceNumber);vd(s,g)}),s.remoteSyncer.applyRemoteEvent(l)}(t,n)}catch(r){B("RemoteStore","Failed to raise snapshot:",r),await Vm(t,r)}}async function Vm(t,e,n){if(!no(e))throw e;t.L_.add(1),await io(t),t.q_.set("Offline"),n||(n=()=>C_(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{B("RemoteStore","Retrying IndexedDB access"),await n(),t.L_.delete(1),await Il(t)})}async function xm(t,e){const n=Z(t);n.asyncQueue.verifyOperationInProgress(),B("RemoteStore","RemoteStore received new credentials");const r=so(n);n.L_.add(3),await io(n),r&&n.q_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.L_.delete(3),await Il(n)}async function DR(t,e){const n=Z(t);e?(n.L_.delete(2),await Il(n)):e||(n.L_.add(2),await io(n),n.q_.set("Unknown"))}function Di(t){return t.K_||(t.K_=function(n,r,i){const s=Z(n);return s.w_(),new IR(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Eo:kR.bind(null,t),Ro:CR.bind(null,t),mo:PR.bind(null,t),d_:NR.bind(null,t)}),t.B_.push(async e=>{e?(t.K_.s_(),Ed(t)?_d(t):t.q_.set("Unknown")):(await t.K_.stop(),V_(t))})),t.K_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wd{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new gr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const a=Date.now()+r,l=new wd(e,n,a,i,s);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new $(b.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function x_(t,e){if(fn("AsyncQueue",`${e}: ${t}`),no(t))return new $(b.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class li{constructor(e){this.comparator=e?(n,r)=>e(n,r)||H.comparator(n.key,r.key):(n,r)=>H.comparator(n.key,r.key),this.keyedMap=os(),this.sortedSet=new Ie(this.comparator)}static emptySet(e){return new li(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof li)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new li;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lm{constructor(){this.W_=new Ie(H.comparator)}track(e){const n=e.doc.key,r=this.W_.get(n);r?e.type!==0&&r.type===3?this.W_=this.W_.insert(n,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.W_=this.W_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.W_=this.W_.remove(n):e.type===1&&r.type===2?this.W_=this.W_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):Q():this.W_=this.W_.insert(n,e)}G_(){const e=[];return this.W_.inorderTraversal((n,r)=>{e.push(r)}),e}}class Ii{constructor(e,n,r,i,s,a,l,u,d){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=a,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=d}static fromInitialDocuments(e,n,r,i,s){const a=[];return n.forEach(l=>{a.push({type:0,doc:l})}),new Ii(e,n,li.emptySet(n),a,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&vl(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OR{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class VR{constructor(){this.queries=Mm(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(n,r){const i=Z(n),s=i.queries;i.queries=Mm(),s.forEach((a,l)=>{for(const u of l.j_)u.onError(r)})})(this,new $(b.ABORTED,"Firestore shutting down"))}}function Mm(){return new Ni(t=>u_(t),vl)}async function xR(t,e){const n=Z(t);let r=3;const i=e.query;let s=n.queries.get(i);s?!s.H_()&&e.J_()&&(r=2):(s=new OR,r=e.J_()?0:1);try{switch(r){case 0:s.z_=await n.onListen(i,!0);break;case 1:s.z_=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(a){const l=x_(a,`Initialization of query '${Mr(e.query)}' failed`);return void e.onError(l)}n.queries.set(i,s),s.j_.push(e),e.Z_(n.onlineState),s.z_&&e.X_(s.z_)&&Td(n)}async function LR(t,e){const n=Z(t),r=e.query;let i=3;const s=n.queries.get(r);if(s){const a=s.j_.indexOf(e);a>=0&&(s.j_.splice(a,1),s.j_.length===0?i=e.J_()?0:1:!s.H_()&&e.J_()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function MR(t,e){const n=Z(t);let r=!1;for(const i of e){const s=i.query,a=n.queries.get(s);if(a){for(const l of a.j_)l.X_(i)&&(r=!0);a.z_=i}}r&&Td(n)}function FR(t,e,n){const r=Z(t),i=r.queries.get(e);if(i)for(const s of i.j_)s.onError(n);r.queries.delete(e)}function Td(t){t.Y_.forEach(e=>{e.next()})}var Wc,Fm;(Fm=Wc||(Wc={})).ea="default",Fm.Cache="cache";class UR{constructor(e,n,r){this.query=e,this.ta=n,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new Ii(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.na?this.ia(e)&&(this.ta.next(e),n=!0):this.sa(e,this.onlineState)&&(this.oa(e),n=!0),this.ra=e,n}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let n=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),n=!0),n}sa(e,n){if(!e.fromCache||!this.J_())return!0;const r=n!=="Offline";return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const n=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}oa(e){e=Ii.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==Wc.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L_{constructor(e){this.key=e}}class M_{constructor(e){this.key=e}}class bR{constructor(e,n){this.query=e,this.Ta=n,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=ee(),this.mutatedKeys=ee(),this.Aa=c_(e),this.Ra=new li(this.Aa)}get Va(){return this.Ta}ma(e,n){const r=n?n.fa:new Lm,i=n?n.Ra:this.Ra;let s=n?n.mutatedKeys:this.mutatedKeys,a=i,l=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,d=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((f,g)=>{const v=i.get(f),k=_l(this.query,g)?g:null,N=!!v&&this.mutatedKeys.has(v.key),O=!!k&&(k.hasLocalMutations||this.mutatedKeys.has(k.key)&&k.hasCommittedMutations);let L=!1;v&&k?v.data.isEqual(k.data)?N!==O&&(r.track({type:3,doc:k}),L=!0):this.ga(v,k)||(r.track({type:2,doc:k}),L=!0,(u&&this.Aa(k,u)>0||d&&this.Aa(k,d)<0)&&(l=!0)):!v&&k?(r.track({type:0,doc:k}),L=!0):v&&!k&&(r.track({type:1,doc:v}),L=!0,(u||d)&&(l=!0)),L&&(k?(a=a.add(k),s=O?s.add(f):s.delete(f)):(a=a.delete(f),s=s.delete(f)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const f=this.query.limitType==="F"?a.last():a.first();a=a.delete(f.key),s=s.delete(f.key),r.track({type:1,doc:f})}return{Ra:a,fa:r,ns:l,mutatedKeys:s}}ga(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const a=e.fa.G_();a.sort((f,g)=>function(k,N){const O=L=>{switch(L){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Q()}};return O(k)-O(N)}(f.type,g.type)||this.Aa(f.doc,g.doc)),this.pa(r),i=i!=null&&i;const l=n&&!i?this.ya():[],u=this.da.size===0&&this.current&&!i?1:0,d=u!==this.Ea;return this.Ea=u,a.length!==0||d?{snapshot:new Ii(this.query,e.Ra,s,a,e.mutatedKeys,u===0,d,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:l}:{wa:l}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new Lm,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(n=>this.Ta=this.Ta.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ta=this.Ta.delete(n)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=ee(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const n=[];return e.forEach(r=>{this.da.has(r)||n.push(new M_(r))}),this.da.forEach(r=>{e.has(r)||n.push(new L_(r))}),n}ba(e){this.Ta=e.Ts,this.da=ee();const n=this.ma(e.documents);return this.applyChanges(n,!0)}Da(){return Ii.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class zR{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class jR{constructor(e){this.key=e,this.va=!1}}class BR{constructor(e,n,r,i,s,a){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=a,this.Ca={},this.Fa=new Ni(l=>u_(l),vl),this.Ma=new Map,this.xa=new Set,this.Oa=new Ie(H.comparator),this.Na=new Map,this.La=new pd,this.Ba={},this.ka=new Map,this.qa=Ti.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function $R(t,e,n=!0){const r=j_(t);let i;const s=r.Fa.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.Da()):i=await F_(r,e,n,!0),i}async function HR(t,e){const n=j_(t);await F_(n,e,!0,!1)}async function F_(t,e,n,r){const i=await mR(t.localStore,zt(e)),s=i.targetId,a=t.sharedClientState.addLocalQueryTarget(s,n);let l;return r&&(l=await WR(t,e,s,a==="current",i.resumeToken)),t.isPrimaryClient&&n&&D_(t.remoteStore,i),l}async function WR(t,e,n,r,i){t.Ka=(g,v,k)=>async function(O,L,I,E){let S=L.view.ma(I);S.ns&&(S=await Nm(O.localStore,L.query,!1).then(({documents:_})=>L.view.ma(_,S)));const D=E&&E.targetChanges.get(L.targetId),U=E&&E.targetMismatches.get(L.targetId)!=null,F=L.view.applyChanges(S,O.isPrimaryClient,D,U);return bm(O,L.targetId,F.wa),F.snapshot}(t,g,v,k);const s=await Nm(t.localStore,e,!0),a=new bR(e,s.Ts),l=a.ma(s.documents),u=ro.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),d=a.applyChanges(l,t.isPrimaryClient,u);bm(t,n,d.wa);const f=new zR(e,n,a);return t.Fa.set(e,f),t.Ma.has(n)?t.Ma.get(n).push(e):t.Ma.set(n,[e]),d.snapshot}async function qR(t,e,n){const r=Z(t),i=r.Fa.get(e),s=r.Ma.get(i.targetId);if(s.length>1)return r.Ma.set(i.targetId,s.filter(a=>!vl(a,e))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await Hc(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&yd(r.remoteStore,i.targetId),qc(r,i.targetId)}).catch(rd)):(qc(r,i.targetId),await Hc(r.localStore,i.targetId,!0))}async function KR(t,e){const n=Z(t),r=n.Fa.get(e),i=n.Ma.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),yd(n.remoteStore,r.targetId))}async function U_(t,e){const n=Z(t);try{const r=await fR(n.localStore,e);e.targetChanges.forEach((i,s)=>{const a=n.Na.get(s);a&&(_e(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?a.va=!0:i.modifiedDocuments.size>0?_e(a.va):i.removedDocuments.size>0&&(_e(a.va),a.va=!1))}),await z_(n,r,e)}catch(r){await rd(r)}}function Um(t,e,n){const r=Z(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.Fa.forEach((s,a)=>{const l=a.view.Z_(e);l.snapshot&&i.push(l.snapshot)}),function(a,l){const u=Z(a);u.onlineState=l;let d=!1;u.queries.forEach((f,g)=>{for(const v of g.j_)v.Z_(l)&&(d=!0)}),d&&Td(u)}(r.eventManager,e),i.length&&r.Ca.d_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function GR(t,e,n){const r=Z(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Na.get(e),s=i&&i.key;if(s){let a=new Ie(H.comparator);a=a.insert(s,Ke.newNoDocument(s,K.min()));const l=ee().add(s),u=new Tl(K.min(),new Map,new Ie(re),a,l);await U_(r,u),r.Oa=r.Oa.remove(s),r.Na.delete(e),Id(r)}else await Hc(r.localStore,e,!1).then(()=>qc(r,e,n)).catch(rd)}function qc(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Ma.get(e))t.Fa.delete(r),n&&t.Ca.$a(r,n);t.Ma.delete(e),t.isPrimaryClient&&t.La.gr(e).forEach(r=>{t.La.containsKey(r)||b_(t,r)})}function b_(t,e){t.xa.delete(e.path.canonicalString());const n=t.Oa.get(e);n!==null&&(yd(t.remoteStore,n),t.Oa=t.Oa.remove(e),t.Na.delete(n),Id(t))}function bm(t,e,n){for(const r of n)r instanceof L_?(t.La.addReference(r.key,e),QR(t,r)):r instanceof M_?(B("SyncEngine","Document no longer in limbo: "+r.key),t.La.removeReference(r.key,e),t.La.containsKey(r.key)||b_(t,r.key)):Q()}function QR(t,e){const n=e.key,r=n.path.canonicalString();t.Oa.get(n)||t.xa.has(r)||(B("SyncEngine","New document in limbo: "+n),t.xa.add(r),Id(t))}function Id(t){for(;t.xa.size>0&&t.Oa.size<t.maxConcurrentLimboResolutions;){const e=t.xa.values().next().value;t.xa.delete(e);const n=new H(ve.fromString(e)),r=t.qa.next();t.Na.set(r,new jR(n)),t.Oa=t.Oa.insert(n,r),D_(t.remoteStore,new Vn(zt(cd(n.path)),r,"TargetPurposeLimboResolution",id.oe))}}async function z_(t,e,n){const r=Z(t),i=[],s=[],a=[];r.Fa.isEmpty()||(r.Fa.forEach((l,u)=>{a.push(r.Ka(u,e,n).then(d=>{var f;if((d||n)&&r.isPrimaryClient){const g=d?!d.fromCache:(f=n==null?void 0:n.targetChanges.get(u.targetId))===null||f===void 0?void 0:f.current;r.sharedClientState.updateQueryState(u.targetId,g?"current":"not-current")}if(d){i.push(d);const g=gd.Wi(u.targetId,d);s.push(g)}}))}),await Promise.all(a),r.Ca.d_(i),await async function(u,d){const f=Z(u);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",g=>V.forEach(d,v=>V.forEach(v.$i,k=>f.persistence.referenceDelegate.addReference(g,v.targetId,k)).next(()=>V.forEach(v.Ui,k=>f.persistence.referenceDelegate.removeReference(g,v.targetId,k)))))}catch(g){if(!no(g))throw g;B("LocalStore","Failed to update sequence numbers: "+g)}for(const g of d){const v=g.targetId;if(!g.fromCache){const k=f.os.get(v),N=k.snapshotVersion,O=k.withLastLimboFreeSnapshotVersion(N);f.os=f.os.insert(v,O)}}}(r.localStore,s))}async function YR(t,e){const n=Z(t);if(!n.currentUser.isEqual(e)){B("SyncEngine","User change. New user:",e.toKey());const r=await k_(n.localStore,e);n.currentUser=e,function(s,a){s.ka.forEach(l=>{l.forEach(u=>{u.reject(new $(b.CANCELLED,a))})}),s.ka.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await z_(n,r.hs)}}function XR(t,e){const n=Z(t),r=n.Na.get(e);if(r&&r.va)return ee().add(r.key);{let i=ee();const s=n.Ma.get(e);if(!s)return i;for(const a of s){const l=n.Fa.get(a);i=i.unionWith(l.view.Va)}return i}}function j_(t){const e=Z(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=U_.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=XR.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=GR.bind(null,e),e.Ca.d_=MR.bind(null,e.eventManager),e.Ca.$a=FR.bind(null,e.eventManager),e}class Ga{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=P_(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,n){return null}Ha(e,n){return null}za(e){return dR(this.persistence,new cR,e.initialUser,this.serializer)}Ga(e){return new aR(md.Zr,this.serializer)}Wa(e){return new yR}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Ga.provider={build:()=>new Ga};class Kc{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Um(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=YR.bind(null,this.syncEngine),await DR(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new VR}()}createDatastore(e){const n=P_(e.databaseInfo.databaseId),r=function(s){return new wR(s)}(e.databaseInfo);return function(s,a,l,u){return new SR(s,a,l,u)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,a,l){return new RR(r,i,s,a,l)}(this.localStore,this.datastore,e.asyncQueue,n=>Um(this.syncEngine,n,0),function(){return Om.D()?new Om:new vR}())}createSyncEngine(e,n){return function(i,s,a,l,u,d,f){const g=new BR(i,s,a,l,u,d);return f&&(g.Qa=!0),g}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(i){const s=Z(i);B("RemoteStore","RemoteStore shutting down."),s.L_.add(5),await io(s),s.k_.shutdown(),s.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}Kc.provider={build:()=>new Kc};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JR{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):fn("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZR{constructor(e,n,r,i,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=We.UNAUTHENTICATED,this.clientId=t_.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,async a=>{B("FirestoreClient","Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(r,a=>(B("FirestoreClient","Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new gr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=x_(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Du(t,e){t.asyncQueue.verifyOperationInProgress(),B("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await k_(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function zm(t,e){t.asyncQueue.verifyOperationInProgress();const n=await ek(t);B("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>xm(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>xm(e.remoteStore,i)),t._onlineComponents=e}async function ek(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){B("FirestoreClient","Using user provided OfflineComponentProvider");try{await Du(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(i){return i.name==="FirebaseError"?i.code===b.FAILED_PRECONDITION||i.code===b.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(n))throw n;vi("Error using user provided cache. Falling back to memory cache: "+n),await Du(t,new Ga)}}else B("FirestoreClient","Using default OfflineComponentProvider"),await Du(t,new Ga);return t._offlineComponents}async function tk(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(B("FirestoreClient","Using user provided OnlineComponentProvider"),await zm(t,t._uninitializedComponentsProvider._online)):(B("FirestoreClient","Using default OnlineComponentProvider"),await zm(t,new Kc))),t._onlineComponents}async function nk(t){const e=await tk(t),n=e.eventManager;return n.onListen=$R.bind(null,e.syncEngine),n.onUnlisten=qR.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=HR.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=KR.bind(null,e.syncEngine),n}function rk(t,e,n={}){const r=new gr;return t.asyncQueue.enqueueAndForget(async()=>function(s,a,l,u,d){const f=new JR({next:v=>{f.Za(),a.enqueueAndForget(()=>LR(s,g));const k=v.docs.has(l);!k&&v.fromCache?d.reject(new $(b.UNAVAILABLE,"Failed to get document because the client is offline.")):k&&v.fromCache&&u&&u.source==="server"?d.reject(new $(b.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):d.resolve(v)},error:v=>d.reject(v)}),g=new UR(cd(l.path),f,{includeMetadataChanges:!0,_a:!0});return xR(s,g)}(await nk(t),t.asyncQueue,e,n,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function B_(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jm=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ik(t,e,n){if(!n)throw new $(b.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function sk(t,e,n,r){if(e===!0&&r===!0)throw new $(b.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Bm(t){if(!H.isDocumentKey(t))throw new $(b.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function ok(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":Q()}function Gc(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new $(b.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=ok(t);throw new $(b.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $m{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new $(b.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new $(b.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}sk("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=B_((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new $(b.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new $(b.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new $(b.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Sd{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new $m({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new $(b.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new $(b.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new $m(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new DA;switch(r.type){case"firstParty":return new LA(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new $(b.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=jm.get(n);r&&(B("ComponentProvider","Removing Datastore"),jm.delete(n),r.terminate())}(this),Promise.resolve()}}function ak(t,e,n,r={}){var i;const s=(t=Gc(t,Sd))._getSettings(),a=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==a&&vi("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:a,ssl:!1})),r.mockUserToken){let l,u;if(typeof r.mockUserToken=="string")l=r.mockUserToken,u=We.MOCK_USER;else{l=lT(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const d=r.mockUserToken.sub||r.mockUserToken.user_id;if(!d)throw new $(b.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new We(d)}t._authCredentials=new OA(new e_(l,u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ad{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Ad(this.firestore,e,this._query)}}class sn{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ws(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new sn(this.firestore,e,this._key)}}class Ws extends Ad{constructor(e,n,r){super(e,n,cd(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new sn(this.firestore,null,new H(e))}withConverter(e){return new Ws(this.firestore,e,this._path)}}function lk(t,e,...n){if(t=Nr(t),arguments.length===1&&(e=t_.newId()),ik("doc","path",e),t instanceof Sd){const r=ve.fromString(e,...n);return Bm(r),new sn(t,null,new H(r))}{if(!(t instanceof sn||t instanceof Ws))throw new $(b.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ve.fromString(e,...n));return Bm(r),new sn(t.firestore,t instanceof Ws?t.converter:null,new H(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hm{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new N_(this,"async_queue_retry"),this.Vu=()=>{const r=Nu();r&&B("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=e;const n=Nu();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const n=Nu();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const n=new gr;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!no(e))throw e;B("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const n=this.mu.then(()=>(this.du=!0,e().catch(r=>{this.Eu=r,this.du=!1;const i=function(a){let l=a.message||"";return a.stack&&(l=a.stack.includes(a.message)?a.stack:a.message+`
`+a.stack),l}(r);throw fn("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.du=!1,r))));return this.mu=n,n}enqueueAfterDelay(e,n,r){this.fu(),this.Ru.indexOf(e)>-1&&(n=0);const i=wd.createAndSchedule(this,e,n,r,s=>this.yu(s));return this.Tu.push(i),i}fu(){this.Eu&&Q()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const n of this.Tu)if(n.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Tu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const n=this.Tu.indexOf(e);this.Tu.splice(n,1)}}class $_ extends Sd{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new Hm,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Hm(e),this._firestoreClient=void 0,await e}}}function uk(t,e){const n=typeof t=="object"?t:fv(),r=typeof t=="string"?t:"(default)",i=Wh(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=oT("firestore");s&&ak(i,...s)}return i}function ck(t){if(t._terminated)throw new $(b.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||hk(t),t._firestoreClient}function hk(t){var e,n,r;const i=t._freezeSettings(),s=function(l,u,d,f){return new GA(l,u,d,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,B_(f.experimentalLongPollingOptions),f.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._componentsProvider||!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),t._firestoreClient=new ZR(t._authCredentials,t._appCheckCredentials,t._queue,s,t._componentsProvider&&function(l){const u=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(u),_online:u}}(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qa{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Qa(Ue.fromBase64String(e))}catch(n){throw new $(b.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Qa(Ue.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H_{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new $(b.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ze(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dk{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new $(b.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new $(b.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return re(this._lat,e._lat)||re(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fk{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}}const pk=new RegExp("[~\\*/\\[\\]]");function mk(t,e,n){if(e.search(pk)>=0)throw Wm(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t);try{return new H_(...e.split("."))._internalPath}catch{throw Wm(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t)}}function Wm(t,e,n,r,i){let s=`Function ${e}() called with invalid data`;s+=". ";let a="";return new $(b.INVALID_ARGUMENT,s+t+a)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W_{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new sn(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new gk(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(q_("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class gk extends W_{data(){return super.data()}}function q_(t,e){return typeof e=="string"?mk(t,e):e instanceof H_?e._internalPath:e._delegate._internalPath}class yk{convertValue(e,n="none"){switch(kr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return we(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Rr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw Q()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return gl(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertVectorValue(e){var n,r,i;const s=(i=(r=(n=e.fields)===null||n===void 0?void 0:n.value.arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.map(a=>we(a.doubleValue));return new fk(s)}convertGeoPoint(e){return new dk(we(e.latitude),we(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=od(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Bs(e));default:return null}}convertTimestamp(e){const n=Gn(e);return new lt(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=ve.fromString(e);_e(R_(r));const i=new $s(r.get(1),r.get(3)),s=new H(r.popFirst(5));return i.isEqual(n)||fn(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vk{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class K_ extends W_{constructor(e,n,r,i,s,a){super(e,n,r,i,a),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new _k(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(q_("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class _k extends K_{data(e={}){return super.data(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ek(t){t=Gc(t,sn);const e=Gc(t.firestore,$_);return rk(ck(e),t._key).then(n=>Tk(e,t,n))}class wk extends yk{constructor(e){super(),this.firestore=e}convertBytes(e){return new Qa(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new sn(this.firestore,null,n)}}function Tk(t,e,n){const r=n.docs.get(e._key),i=new wk(t);return new K_(t,i,e._key,r,new vk(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){(function(i){Pi=i})(ki),gi(new Ir("firestore",(r,{instanceIdentifier:i,options:s})=>{const a=r.getProvider("app").getImmediate(),l=new $_(new VA(r.getProvider("auth-internal")),new FA(r.getProvider("app-check-internal")),function(d,f){if(!Object.prototype.hasOwnProperty.apply(d.options,["projectId"]))throw new $(b.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new $s(d.options.projectId,f)}(a,i),a);return s=Object.assign({useFetchStreams:n},s),l._setSettings(s),l},"PUBLIC").setMultipleInstances(!0)),Hn(um,"4.7.3",e),Hn(um,"4.7.3","esm2017")})();const Ik={apiKey:"AIzaSyD2QNUMImsdaijSoE9kkk7_rwcr36REdDM",authDomain:"gram-sabha-pahrajpur.firebaseapp.com",projectId:"gram-sabha-pahrajpur",storageBucket:"gram-sabha-pahrajpur.firebasestorage.app",messagingSenderId:"549490337754",appId:"1:549490337754:web:8121e99732697383bdc2e3"},G_=dv(Ik);PA(G_);const Sk=uk(G_);function Ak(){const[t,e]=ar.useState(!1),[n,r]=ar.useState("home"),[i,s]=ar.useState(""),[a,l]=ar.useState(""),u=async()=>{try{const d=await Ek(lk(Sk,"admin","config"));d.exists()&&i===d.data().adminID&&a===d.data().password||i==="admin"&&a==="admin123"?(e(!0),r("home")):alert("Galat ID ya Password!")}catch{alert("Database Error!")}};return yt.jsxs("div",{style:{background:"#050508",minHeight:"100vh",color:"white",padding:"20px",fontFamily:"sans-serif"},children:[yt.jsxs("nav",{style:{display:"flex",justifyContent:"space-between",borderBottom:"1px solid #333",paddingBottom:"10px"},children:[yt.jsx("h2",{onClick:()=>r("home"),style:{cursor:"pointer"},children:"Gram Sabha Pahrajpur"}),yt.jsx("button",{onClick:()=>r("login"),style:{background:"#16a34a",color:"white",padding:"8px 15px",borderRadius:"5px",border:"none",cursor:"pointer"},children:t?"Admin Dashboard":"Admin Login"})]}),n==="home"&&yt.jsxs("div",{style:{textAlign:"center",marginTop:"50px"},children:[yt.jsx("h1",{children:"Website is Live! 🚀"}),yt.jsx("p",{style:{color:"#888",marginTop:"10px"},children:"Abhinav, aapka system theek ho gaya hai."})]}),n==="login"&&!t&&yt.jsxs("div",{style:{maxWidth:"320px",margin:"60px auto",background:"#111",padding:"20px",borderRadius:"10px",border:"1px solid #333"},children:[yt.jsx("h3",{style:{marginBottom:"15px"},children:"Admin Access"}),yt.jsx("input",{placeholder:"Admin ID",onChange:d=>s(d.target.value),style:{width:"100%",marginBottom:"10px",padding:"12px",borderRadius:"5px",background:"#000",color:"#fff",border:"1px solid #444"}}),yt.jsx("input",{type:"password",placeholder:"Password",onChange:d=>l(d.target.value),style:{width:"100%",marginBottom:"15px",padding:"12px",borderRadius:"5px",background:"#000",color:"#fff",border:"1px solid #444"}}),yt.jsx("button",{onClick:u,style:{width:"100%",padding:"12px",background:"#16a34a",color:"white",border:"none",borderRadius:"5px",fontWeight:"bold",cursor:"pointer"},children:"Login"})]})]})}Ou.createRoot(document.getElementById("root")).render(Gl.createElement(Gl.StrictMode,null,Gl.createElement(Ak,null)));
