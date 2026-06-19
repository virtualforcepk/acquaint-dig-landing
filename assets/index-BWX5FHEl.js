var H1=Object.defineProperty;var G1=(n,e,t)=>e in n?H1(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var ke=(n,e,t)=>G1(n,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();var TS={exports:{}},Hd={},wS={exports:{}},ft={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var pc=Symbol.for("react.element"),W1=Symbol.for("react.portal"),X1=Symbol.for("react.fragment"),Y1=Symbol.for("react.strict_mode"),j1=Symbol.for("react.profiler"),q1=Symbol.for("react.provider"),$1=Symbol.for("react.context"),K1=Symbol.for("react.forward_ref"),Z1=Symbol.for("react.suspense"),Q1=Symbol.for("react.memo"),J1=Symbol.for("react.lazy"),L0=Symbol.iterator;function eT(n){return n===null||typeof n!="object"?null:(n=L0&&n[L0]||n["@@iterator"],typeof n=="function"?n:null)}var AS={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},CS=Object.assign,RS={};function Dl(n,e,t){this.props=n,this.context=e,this.refs=RS,this.updater=t||AS}Dl.prototype.isReactComponent={};Dl.prototype.setState=function(n,e){if(typeof n!="object"&&typeof n!="function"&&n!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,n,e,"setState")};Dl.prototype.forceUpdate=function(n){this.updater.enqueueForceUpdate(this,n,"forceUpdate")};function bS(){}bS.prototype=Dl.prototype;function Yg(n,e,t){this.props=n,this.context=e,this.refs=RS,this.updater=t||AS}var jg=Yg.prototype=new bS;jg.constructor=Yg;CS(jg,Dl.prototype);jg.isPureReactComponent=!0;var N0=Array.isArray,PS=Object.prototype.hasOwnProperty,qg={current:null},DS={key:!0,ref:!0,__self:!0,__source:!0};function LS(n,e,t){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)PS.call(e,i)&&!DS.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=t;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}if(n&&n.defaultProps)for(i in a=n.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:pc,type:n,key:s,ref:o,props:r,_owner:qg.current}}function tT(n,e){return{$$typeof:pc,type:n.type,key:e,ref:n.ref,props:n.props,_owner:n._owner}}function $g(n){return typeof n=="object"&&n!==null&&n.$$typeof===pc}function nT(n){var e={"=":"=0",":":"=2"};return"$"+n.replace(/[=:]/g,function(t){return e[t]})}var I0=/\/+/g;function dh(n,e){return typeof n=="object"&&n!==null&&n.key!=null?nT(""+n.key):e.toString(36)}function wf(n,e,t,i,r){var s=typeof n;(s==="undefined"||s==="boolean")&&(n=null);var o=!1;if(n===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(n.$$typeof){case pc:case W1:o=!0}}if(o)return o=n,r=r(o),n=i===""?"."+dh(o,0):i,N0(r)?(t="",n!=null&&(t=n.replace(I0,"$&/")+"/"),wf(r,e,t,"",function(u){return u})):r!=null&&($g(r)&&(r=tT(r,t+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(I0,"$&/")+"/")+n)),e.push(r)),1;if(o=0,i=i===""?".":i+":",N0(n))for(var a=0;a<n.length;a++){s=n[a];var l=i+dh(s,a);o+=wf(s,e,t,l,r)}else if(l=eT(n),typeof l=="function")for(n=l.call(n),a=0;!(s=n.next()).done;)s=s.value,l=i+dh(s,a++),o+=wf(s,e,t,l,r);else if(s==="object")throw e=String(n),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Mc(n,e,t){if(n==null)return n;var i=[],r=0;return wf(n,i,"","",function(s){return e.call(t,s,r++)}),i}function iT(n){if(n._status===-1){var e=n._result;e=e(),e.then(function(t){(n._status===0||n._status===-1)&&(n._status=1,n._result=t)},function(t){(n._status===0||n._status===-1)&&(n._status=2,n._result=t)}),n._status===-1&&(n._status=0,n._result=e)}if(n._status===1)return n._result.default;throw n._result}var li={current:null},Af={transition:null},rT={ReactCurrentDispatcher:li,ReactCurrentBatchConfig:Af,ReactCurrentOwner:qg};function NS(){throw Error("act(...) is not supported in production builds of React.")}ft.Children={map:Mc,forEach:function(n,e,t){Mc(n,function(){e.apply(this,arguments)},t)},count:function(n){var e=0;return Mc(n,function(){e++}),e},toArray:function(n){return Mc(n,function(e){return e})||[]},only:function(n){if(!$g(n))throw Error("React.Children.only expected to receive a single React element child.");return n}};ft.Component=Dl;ft.Fragment=X1;ft.Profiler=j1;ft.PureComponent=Yg;ft.StrictMode=Y1;ft.Suspense=Z1;ft.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=rT;ft.act=NS;ft.cloneElement=function(n,e,t){if(n==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+n+".");var i=CS({},n.props),r=n.key,s=n.ref,o=n._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=qg.current),e.key!==void 0&&(r=""+e.key),n.type&&n.type.defaultProps)var a=n.type.defaultProps;for(l in e)PS.call(e,l)&&!DS.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=t;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];i.children=a}return{$$typeof:pc,type:n.type,key:r,ref:s,props:i,_owner:o}};ft.createContext=function(n){return n={$$typeof:$1,_currentValue:n,_currentValue2:n,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},n.Provider={$$typeof:q1,_context:n},n.Consumer=n};ft.createElement=LS;ft.createFactory=function(n){var e=LS.bind(null,n);return e.type=n,e};ft.createRef=function(){return{current:null}};ft.forwardRef=function(n){return{$$typeof:K1,render:n}};ft.isValidElement=$g;ft.lazy=function(n){return{$$typeof:J1,_payload:{_status:-1,_result:n},_init:iT}};ft.memo=function(n,e){return{$$typeof:Q1,type:n,compare:e===void 0?null:e}};ft.startTransition=function(n){var e=Af.transition;Af.transition={};try{n()}finally{Af.transition=e}};ft.unstable_act=NS;ft.useCallback=function(n,e){return li.current.useCallback(n,e)};ft.useContext=function(n){return li.current.useContext(n)};ft.useDebugValue=function(){};ft.useDeferredValue=function(n){return li.current.useDeferredValue(n)};ft.useEffect=function(n,e){return li.current.useEffect(n,e)};ft.useId=function(){return li.current.useId()};ft.useImperativeHandle=function(n,e,t){return li.current.useImperativeHandle(n,e,t)};ft.useInsertionEffect=function(n,e){return li.current.useInsertionEffect(n,e)};ft.useLayoutEffect=function(n,e){return li.current.useLayoutEffect(n,e)};ft.useMemo=function(n,e){return li.current.useMemo(n,e)};ft.useReducer=function(n,e,t){return li.current.useReducer(n,e,t)};ft.useRef=function(n){return li.current.useRef(n)};ft.useState=function(n){return li.current.useState(n)};ft.useSyncExternalStore=function(n,e,t){return li.current.useSyncExternalStore(n,e,t)};ft.useTransition=function(){return li.current.useTransition()};ft.version="18.3.1";wS.exports=ft;var hr=wS.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sT=hr,oT=Symbol.for("react.element"),aT=Symbol.for("react.fragment"),lT=Object.prototype.hasOwnProperty,uT=sT.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,cT={key:!0,ref:!0,__self:!0,__source:!0};function IS(n,e,t){var i,r={},s=null,o=null;t!==void 0&&(s=""+t),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)lT.call(e,i)&&!cT.hasOwnProperty(i)&&(r[i]=e[i]);if(n&&n.defaultProps)for(i in e=n.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:oT,type:n,key:s,ref:o,props:r,_owner:uT.current}}Hd.Fragment=aT;Hd.jsx=IS;Hd.jsxs=IS;TS.exports=Hd;var ge=TS.exports,Ip={},US={exports:{}},Gi={},FS={exports:{}},OS={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(n){function e(F,W){var P=F.length;F.push(W);e:for(;0<P;){var ee=P-1>>>1,ue=F[ee];if(0<r(ue,W))F[ee]=W,F[P]=ue,P=ee;else break e}}function t(F){return F.length===0?null:F[0]}function i(F){if(F.length===0)return null;var W=F[0],P=F.pop();if(P!==W){F[0]=P;e:for(var ee=0,ue=F.length,ve=ue>>>1;ee<ve;){var Le=2*(ee+1)-1,Ce=F[Le],$=Le+1,se=F[$];if(0>r(Ce,P))$<ue&&0>r(se,Ce)?(F[ee]=se,F[$]=P,ee=$):(F[ee]=Ce,F[Le]=P,ee=Le);else if($<ue&&0>r(se,P))F[ee]=se,F[$]=P,ee=$;else break e}}return W}function r(F,W){var P=F.sortIndex-W.sortIndex;return P!==0?P:F.id-W.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;n.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();n.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,d=null,f=3,h=!1,m=!1,v=!1,_=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,g=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function x(F){for(var W=t(u);W!==null;){if(W.callback===null)i(u);else if(W.startTime<=F)i(u),W.sortIndex=W.expirationTime,e(l,W);else break;W=t(u)}}function y(F){if(v=!1,x(F),!m)if(t(l)!==null)m=!0,B(T);else{var W=t(u);W!==null&&I(y,W.startTime-F)}}function T(F,W){m=!1,v&&(v=!1,p(S),S=-1),h=!0;var P=f;try{for(x(W),d=t(l);d!==null&&(!(d.expirationTime>W)||F&&!D());){var ee=d.callback;if(typeof ee=="function"){d.callback=null,f=d.priorityLevel;var ue=ee(d.expirationTime<=W);W=n.unstable_now(),typeof ue=="function"?d.callback=ue:d===t(l)&&i(l),x(W)}else i(l);d=t(l)}if(d!==null)var ve=!0;else{var Le=t(u);Le!==null&&I(y,Le.startTime-W),ve=!1}return ve}finally{d=null,f=P,h=!1}}var E=!1,w=null,S=-1,C=5,b=-1;function D(){return!(n.unstable_now()-b<C)}function L(){if(w!==null){var F=n.unstable_now();b=F;var W=!0;try{W=w(!0,F)}finally{W?O():(E=!1,w=null)}}else E=!1}var O;if(typeof g=="function")O=function(){g(L)};else if(typeof MessageChannel<"u"){var H=new MessageChannel,N=H.port2;H.port1.onmessage=L,O=function(){N.postMessage(null)}}else O=function(){_(L,0)};function B(F){w=F,E||(E=!0,O())}function I(F,W){S=_(function(){F(n.unstable_now())},W)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(F){F.callback=null},n.unstable_continueExecution=function(){m||h||(m=!0,B(T))},n.unstable_forceFrameRate=function(F){0>F||125<F?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):C=0<F?Math.floor(1e3/F):5},n.unstable_getCurrentPriorityLevel=function(){return f},n.unstable_getFirstCallbackNode=function(){return t(l)},n.unstable_next=function(F){switch(f){case 1:case 2:case 3:var W=3;break;default:W=f}var P=f;f=W;try{return F()}finally{f=P}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(F,W){switch(F){case 1:case 2:case 3:case 4:case 5:break;default:F=3}var P=f;f=F;try{return W()}finally{f=P}},n.unstable_scheduleCallback=function(F,W,P){var ee=n.unstable_now();switch(typeof P=="object"&&P!==null?(P=P.delay,P=typeof P=="number"&&0<P?ee+P:ee):P=ee,F){case 1:var ue=-1;break;case 2:ue=250;break;case 5:ue=1073741823;break;case 4:ue=1e4;break;default:ue=5e3}return ue=P+ue,F={id:c++,callback:W,priorityLevel:F,startTime:P,expirationTime:ue,sortIndex:-1},P>ee?(F.sortIndex=P,e(u,F),t(l)===null&&F===t(u)&&(v?(p(S),S=-1):v=!0,I(y,P-ee))):(F.sortIndex=ue,e(l,F),m||h||(m=!0,B(T))),F},n.unstable_shouldYield=D,n.unstable_wrapCallback=function(F){var W=f;return function(){var P=f;f=W;try{return F.apply(this,arguments)}finally{f=P}}}})(OS);FS.exports=OS;var fT=FS.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var dT=hr,zi=fT;function fe(n){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+n,t=1;t<arguments.length;t++)e+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+n+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var kS=new Set,ku={};function oa(n,e){pl(n,e),pl(n+"Capture",e)}function pl(n,e){for(ku[n]=e,n=0;n<e.length;n++)kS.add(e[n])}var ms=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Up=Object.prototype.hasOwnProperty,hT=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,U0={},F0={};function pT(n){return Up.call(F0,n)?!0:Up.call(U0,n)?!1:hT.test(n)?F0[n]=!0:(U0[n]=!0,!1)}function mT(n,e,t,i){if(t!==null&&t.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:t!==null?!t.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function gT(n,e,t,i){if(e===null||typeof e>"u"||mT(n,e,t,i))return!0;if(i)return!1;if(t!==null)switch(t.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function ui(n,e,t,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=t,this.propertyName=n,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Un={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){Un[n]=new ui(n,0,!1,n,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var e=n[0];Un[e]=new ui(e,1,!1,n[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(n){Un[n]=new ui(n,2,!1,n.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){Un[n]=new ui(n,2,!1,n,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){Un[n]=new ui(n,3,!1,n.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(n){Un[n]=new ui(n,3,!0,n,null,!1,!1)});["capture","download"].forEach(function(n){Un[n]=new ui(n,4,!1,n,null,!1,!1)});["cols","rows","size","span"].forEach(function(n){Un[n]=new ui(n,6,!1,n,null,!1,!1)});["rowSpan","start"].forEach(function(n){Un[n]=new ui(n,5,!1,n.toLowerCase(),null,!1,!1)});var Kg=/[\-:]([a-z])/g;function Zg(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var e=n.replace(Kg,Zg);Un[e]=new ui(e,1,!1,n,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var e=n.replace(Kg,Zg);Un[e]=new ui(e,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(n){var e=n.replace(Kg,Zg);Un[e]=new ui(e,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(n){Un[n]=new ui(n,1,!1,n.toLowerCase(),null,!1,!1)});Un.xlinkHref=new ui("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(n){Un[n]=new ui(n,1,!1,n.toLowerCase(),null,!0,!0)});function Qg(n,e,t,i){var r=Un.hasOwnProperty(e)?Un[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(gT(e,t,r,i)&&(t=null),i||r===null?pT(e)&&(t===null?n.removeAttribute(e):n.setAttribute(e,""+t)):r.mustUseProperty?n[r.propertyName]=t===null?r.type===3?!1:"":t:(e=r.attributeName,i=r.attributeNamespace,t===null?n.removeAttribute(e):(r=r.type,t=r===3||r===4&&t===!0?"":""+t,i?n.setAttributeNS(i,e,t):n.setAttribute(e,t))))}var Es=dT.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ec=Symbol.for("react.element"),ka=Symbol.for("react.portal"),Ba=Symbol.for("react.fragment"),Jg=Symbol.for("react.strict_mode"),Fp=Symbol.for("react.profiler"),BS=Symbol.for("react.provider"),zS=Symbol.for("react.context"),e_=Symbol.for("react.forward_ref"),Op=Symbol.for("react.suspense"),kp=Symbol.for("react.suspense_list"),t_=Symbol.for("react.memo"),Fs=Symbol.for("react.lazy"),VS=Symbol.for("react.offscreen"),O0=Symbol.iterator;function Ol(n){return n===null||typeof n!="object"?null:(n=O0&&n[O0]||n["@@iterator"],typeof n=="function"?n:null)}var qt=Object.assign,hh;function iu(n){if(hh===void 0)try{throw Error()}catch(t){var e=t.stack.trim().match(/\n( *(at )?)/);hh=e&&e[1]||""}return`
`+hh+n}var ph=!1;function mh(n,e){if(!n||ph)return"";ph=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var i=u}Reflect.construct(n,[],e)}else{try{e.call()}catch(u){i=u}n.call(e.prototype)}else{try{throw Error()}catch(u){i=u}n()}}catch(u){if(u&&i&&typeof u.stack=="string"){for(var r=u.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return n.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",n.displayName)),l}while(1<=o&&0<=a);break}}}finally{ph=!1,Error.prepareStackTrace=t}return(n=n?n.displayName||n.name:"")?iu(n):""}function _T(n){switch(n.tag){case 5:return iu(n.type);case 16:return iu("Lazy");case 13:return iu("Suspense");case 19:return iu("SuspenseList");case 0:case 2:case 15:return n=mh(n.type,!1),n;case 11:return n=mh(n.type.render,!1),n;case 1:return n=mh(n.type,!0),n;default:return""}}function Bp(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case Ba:return"Fragment";case ka:return"Portal";case Fp:return"Profiler";case Jg:return"StrictMode";case Op:return"Suspense";case kp:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case zS:return(n.displayName||"Context")+".Consumer";case BS:return(n._context.displayName||"Context")+".Provider";case e_:var e=n.render;return n=n.displayName,n||(n=e.displayName||e.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case t_:return e=n.displayName||null,e!==null?e:Bp(n.type)||"Memo";case Fs:e=n._payload,n=n._init;try{return Bp(n(e))}catch{}}return null}function vT(n){var e=n.type;switch(n.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=e.render,n=n.displayName||n.name||"",e.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Bp(e);case 8:return e===Jg?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function ao(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function HS(n){var e=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function xT(n){var e=HS(n)?"checked":"value",t=Object.getOwnPropertyDescriptor(n.constructor.prototype,e),i=""+n[e];if(!n.hasOwnProperty(e)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var r=t.get,s=t.set;return Object.defineProperty(n,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(n,e,{enumerable:t.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){n._valueTracker=null,delete n[e]}}}}function Tc(n){n._valueTracker||(n._valueTracker=xT(n))}function GS(n){if(!n)return!1;var e=n._valueTracker;if(!e)return!0;var t=e.getValue(),i="";return n&&(i=HS(n)?n.checked?"true":"false":n.value),n=i,n!==t?(e.setValue(n),!0):!1}function Jf(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function zp(n,e){var t=e.checked;return qt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??n._wrapperState.initialChecked})}function k0(n,e){var t=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;t=ao(e.value!=null?e.value:t),n._wrapperState={initialChecked:i,initialValue:t,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function WS(n,e){e=e.checked,e!=null&&Qg(n,"checked",e,!1)}function Vp(n,e){WS(n,e);var t=ao(e.value),i=e.type;if(t!=null)i==="number"?(t===0&&n.value===""||n.value!=t)&&(n.value=""+t):n.value!==""+t&&(n.value=""+t);else if(i==="submit"||i==="reset"){n.removeAttribute("value");return}e.hasOwnProperty("value")?Hp(n,e.type,t):e.hasOwnProperty("defaultValue")&&Hp(n,e.type,ao(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(n.defaultChecked=!!e.defaultChecked)}function B0(n,e,t){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+n._wrapperState.initialValue,t||e===n.value||(n.value=e),n.defaultValue=e}t=n.name,t!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,t!==""&&(n.name=t)}function Hp(n,e,t){(e!=="number"||Jf(n.ownerDocument)!==n)&&(t==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+t&&(n.defaultValue=""+t))}var ru=Array.isArray;function Ja(n,e,t,i){if(n=n.options,e){e={};for(var r=0;r<t.length;r++)e["$"+t[r]]=!0;for(t=0;t<n.length;t++)r=e.hasOwnProperty("$"+n[t].value),n[t].selected!==r&&(n[t].selected=r),r&&i&&(n[t].defaultSelected=!0)}else{for(t=""+ao(t),e=null,r=0;r<n.length;r++){if(n[r].value===t){n[r].selected=!0,i&&(n[r].defaultSelected=!0);return}e!==null||n[r].disabled||(e=n[r])}e!==null&&(e.selected=!0)}}function Gp(n,e){if(e.dangerouslySetInnerHTML!=null)throw Error(fe(91));return qt({},e,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function z0(n,e){var t=e.value;if(t==null){if(t=e.children,e=e.defaultValue,t!=null){if(e!=null)throw Error(fe(92));if(ru(t)){if(1<t.length)throw Error(fe(93));t=t[0]}e=t}e==null&&(e=""),t=e}n._wrapperState={initialValue:ao(t)}}function XS(n,e){var t=ao(e.value),i=ao(e.defaultValue);t!=null&&(t=""+t,t!==n.value&&(n.value=t),e.defaultValue==null&&n.defaultValue!==t&&(n.defaultValue=t)),i!=null&&(n.defaultValue=""+i)}function V0(n){var e=n.textContent;e===n._wrapperState.initialValue&&e!==""&&e!==null&&(n.value=e)}function YS(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Wp(n,e){return n==null||n==="http://www.w3.org/1999/xhtml"?YS(e):n==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var wc,jS=function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,t,i,r){MSApp.execUnsafeLocalFunction(function(){return n(e,t,i,r)})}:n}(function(n,e){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=e;else{for(wc=wc||document.createElement("div"),wc.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=wc.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;e.firstChild;)n.appendChild(e.firstChild)}});function Bu(n,e){if(e){var t=n.firstChild;if(t&&t===n.lastChild&&t.nodeType===3){t.nodeValue=e;return}}n.textContent=e}var _u={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ST=["Webkit","ms","Moz","O"];Object.keys(_u).forEach(function(n){ST.forEach(function(e){e=e+n.charAt(0).toUpperCase()+n.substring(1),_u[e]=_u[n]})});function qS(n,e,t){return e==null||typeof e=="boolean"||e===""?"":t||typeof e!="number"||e===0||_u.hasOwnProperty(n)&&_u[n]?(""+e).trim():e+"px"}function $S(n,e){n=n.style;for(var t in e)if(e.hasOwnProperty(t)){var i=t.indexOf("--")===0,r=qS(t,e[t],i);t==="float"&&(t="cssFloat"),i?n.setProperty(t,r):n[t]=r}}var yT=qt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Xp(n,e){if(e){if(yT[n]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(fe(137,n));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(fe(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(fe(61))}if(e.style!=null&&typeof e.style!="object")throw Error(fe(62))}}function Yp(n,e){if(n.indexOf("-")===-1)return typeof e.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var jp=null;function n_(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var qp=null,el=null,tl=null;function H0(n){if(n=_c(n)){if(typeof qp!="function")throw Error(fe(280));var e=n.stateNode;e&&(e=jd(e),qp(n.stateNode,n.type,e))}}function KS(n){el?tl?tl.push(n):tl=[n]:el=n}function ZS(){if(el){var n=el,e=tl;if(tl=el=null,H0(n),e)for(n=0;n<e.length;n++)H0(e[n])}}function QS(n,e){return n(e)}function JS(){}var gh=!1;function ey(n,e,t){if(gh)return n(e,t);gh=!0;try{return QS(n,e,t)}finally{gh=!1,(el!==null||tl!==null)&&(JS(),ZS())}}function zu(n,e){var t=n.stateNode;if(t===null)return null;var i=jd(t);if(i===null)return null;t=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(n=n.type,i=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!i;break e;default:n=!1}if(n)return null;if(t&&typeof t!="function")throw Error(fe(231,e,typeof t));return t}var $p=!1;if(ms)try{var kl={};Object.defineProperty(kl,"passive",{get:function(){$p=!0}}),window.addEventListener("test",kl,kl),window.removeEventListener("test",kl,kl)}catch{$p=!1}function MT(n,e,t,i,r,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(t,u)}catch(c){this.onError(c)}}var vu=!1,ed=null,td=!1,Kp=null,ET={onError:function(n){vu=!0,ed=n}};function TT(n,e,t,i,r,s,o,a,l){vu=!1,ed=null,MT.apply(ET,arguments)}function wT(n,e,t,i,r,s,o,a,l){if(TT.apply(this,arguments),vu){if(vu){var u=ed;vu=!1,ed=null}else throw Error(fe(198));td||(td=!0,Kp=u)}}function aa(n){var e=n,t=n;if(n.alternate)for(;e.return;)e=e.return;else{n=e;do e=n,e.flags&4098&&(t=e.return),n=e.return;while(n)}return e.tag===3?t:null}function ty(n){if(n.tag===13){var e=n.memoizedState;if(e===null&&(n=n.alternate,n!==null&&(e=n.memoizedState)),e!==null)return e.dehydrated}return null}function G0(n){if(aa(n)!==n)throw Error(fe(188))}function AT(n){var e=n.alternate;if(!e){if(e=aa(n),e===null)throw Error(fe(188));return e!==n?null:n}for(var t=n,i=e;;){var r=t.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){t=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===t)return G0(r),n;if(s===i)return G0(r),e;s=s.sibling}throw Error(fe(188))}if(t.return!==i.return)t=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===t){o=!0,t=r,i=s;break}if(a===i){o=!0,i=r,t=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===t){o=!0,t=s,i=r;break}if(a===i){o=!0,i=s,t=r;break}a=a.sibling}if(!o)throw Error(fe(189))}}if(t.alternate!==i)throw Error(fe(190))}if(t.tag!==3)throw Error(fe(188));return t.stateNode.current===t?n:e}function ny(n){return n=AT(n),n!==null?iy(n):null}function iy(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var e=iy(n);if(e!==null)return e;n=n.sibling}return null}var ry=zi.unstable_scheduleCallback,W0=zi.unstable_cancelCallback,CT=zi.unstable_shouldYield,RT=zi.unstable_requestPaint,sn=zi.unstable_now,bT=zi.unstable_getCurrentPriorityLevel,i_=zi.unstable_ImmediatePriority,sy=zi.unstable_UserBlockingPriority,nd=zi.unstable_NormalPriority,PT=zi.unstable_LowPriority,oy=zi.unstable_IdlePriority,Gd=null,zr=null;function DT(n){if(zr&&typeof zr.onCommitFiberRoot=="function")try{zr.onCommitFiberRoot(Gd,n,void 0,(n.current.flags&128)===128)}catch{}}var vr=Math.clz32?Math.clz32:IT,LT=Math.log,NT=Math.LN2;function IT(n){return n>>>=0,n===0?32:31-(LT(n)/NT|0)|0}var Ac=64,Cc=4194304;function su(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function id(n,e){var t=n.pendingLanes;if(t===0)return 0;var i=0,r=n.suspendedLanes,s=n.pingedLanes,o=t&268435455;if(o!==0){var a=o&~r;a!==0?i=su(a):(s&=o,s!==0&&(i=su(s)))}else o=t&~r,o!==0?i=su(o):s!==0&&(i=su(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=t&16),e=n.entangledLanes,e!==0)for(n=n.entanglements,e&=i;0<e;)t=31-vr(e),r=1<<t,i|=n[t],e&=~r;return i}function UT(n,e){switch(n){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function FT(n,e){for(var t=n.suspendedLanes,i=n.pingedLanes,r=n.expirationTimes,s=n.pendingLanes;0<s;){var o=31-vr(s),a=1<<o,l=r[o];l===-1?(!(a&t)||a&i)&&(r[o]=UT(a,e)):l<=e&&(n.expiredLanes|=a),s&=~a}}function Zp(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function ay(){var n=Ac;return Ac<<=1,!(Ac&4194240)&&(Ac=64),n}function _h(n){for(var e=[],t=0;31>t;t++)e.push(n);return e}function mc(n,e,t){n.pendingLanes|=e,e!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,e=31-vr(e),n[e]=t}function OT(n,e){var t=n.pendingLanes&~e;n.pendingLanes=e,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=e,n.mutableReadLanes&=e,n.entangledLanes&=e,e=n.entanglements;var i=n.eventTimes;for(n=n.expirationTimes;0<t;){var r=31-vr(t),s=1<<r;e[r]=0,i[r]=-1,n[r]=-1,t&=~s}}function r_(n,e){var t=n.entangledLanes|=e;for(n=n.entanglements;t;){var i=31-vr(t),r=1<<i;r&e|n[i]&e&&(n[i]|=e),t&=~r}}var Tt=0;function ly(n){return n&=-n,1<n?4<n?n&268435455?16:536870912:4:1}var uy,s_,cy,fy,dy,Qp=!1,Rc=[],$s=null,Ks=null,Zs=null,Vu=new Map,Hu=new Map,ks=[],kT="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function X0(n,e){switch(n){case"focusin":case"focusout":$s=null;break;case"dragenter":case"dragleave":Ks=null;break;case"mouseover":case"mouseout":Zs=null;break;case"pointerover":case"pointerout":Vu.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Hu.delete(e.pointerId)}}function Bl(n,e,t,i,r,s){return n===null||n.nativeEvent!==s?(n={blockedOn:e,domEventName:t,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=_c(e),e!==null&&s_(e)),n):(n.eventSystemFlags|=i,e=n.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),n)}function BT(n,e,t,i,r){switch(e){case"focusin":return $s=Bl($s,n,e,t,i,r),!0;case"dragenter":return Ks=Bl(Ks,n,e,t,i,r),!0;case"mouseover":return Zs=Bl(Zs,n,e,t,i,r),!0;case"pointerover":var s=r.pointerId;return Vu.set(s,Bl(Vu.get(s)||null,n,e,t,i,r)),!0;case"gotpointercapture":return s=r.pointerId,Hu.set(s,Bl(Hu.get(s)||null,n,e,t,i,r)),!0}return!1}function hy(n){var e=Io(n.target);if(e!==null){var t=aa(e);if(t!==null){if(e=t.tag,e===13){if(e=ty(t),e!==null){n.blockedOn=e,dy(n.priority,function(){cy(t)});return}}else if(e===3&&t.stateNode.current.memoizedState.isDehydrated){n.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}n.blockedOn=null}function Cf(n){if(n.blockedOn!==null)return!1;for(var e=n.targetContainers;0<e.length;){var t=Jp(n.domEventName,n.eventSystemFlags,e[0],n.nativeEvent);if(t===null){t=n.nativeEvent;var i=new t.constructor(t.type,t);jp=i,t.target.dispatchEvent(i),jp=null}else return e=_c(t),e!==null&&s_(e),n.blockedOn=t,!1;e.shift()}return!0}function Y0(n,e,t){Cf(n)&&t.delete(e)}function zT(){Qp=!1,$s!==null&&Cf($s)&&($s=null),Ks!==null&&Cf(Ks)&&(Ks=null),Zs!==null&&Cf(Zs)&&(Zs=null),Vu.forEach(Y0),Hu.forEach(Y0)}function zl(n,e){n.blockedOn===e&&(n.blockedOn=null,Qp||(Qp=!0,zi.unstable_scheduleCallback(zi.unstable_NormalPriority,zT)))}function Gu(n){function e(r){return zl(r,n)}if(0<Rc.length){zl(Rc[0],n);for(var t=1;t<Rc.length;t++){var i=Rc[t];i.blockedOn===n&&(i.blockedOn=null)}}for($s!==null&&zl($s,n),Ks!==null&&zl(Ks,n),Zs!==null&&zl(Zs,n),Vu.forEach(e),Hu.forEach(e),t=0;t<ks.length;t++)i=ks[t],i.blockedOn===n&&(i.blockedOn=null);for(;0<ks.length&&(t=ks[0],t.blockedOn===null);)hy(t),t.blockedOn===null&&ks.shift()}var nl=Es.ReactCurrentBatchConfig,rd=!0;function VT(n,e,t,i){var r=Tt,s=nl.transition;nl.transition=null;try{Tt=1,o_(n,e,t,i)}finally{Tt=r,nl.transition=s}}function HT(n,e,t,i){var r=Tt,s=nl.transition;nl.transition=null;try{Tt=4,o_(n,e,t,i)}finally{Tt=r,nl.transition=s}}function o_(n,e,t,i){if(rd){var r=Jp(n,e,t,i);if(r===null)Ch(n,e,i,sd,t),X0(n,i);else if(BT(r,n,e,t,i))i.stopPropagation();else if(X0(n,i),e&4&&-1<kT.indexOf(n)){for(;r!==null;){var s=_c(r);if(s!==null&&uy(s),s=Jp(n,e,t,i),s===null&&Ch(n,e,i,sd,t),s===r)break;r=s}r!==null&&i.stopPropagation()}else Ch(n,e,i,null,t)}}var sd=null;function Jp(n,e,t,i){if(sd=null,n=n_(i),n=Io(n),n!==null)if(e=aa(n),e===null)n=null;else if(t=e.tag,t===13){if(n=ty(e),n!==null)return n;n=null}else if(t===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;n=null}else e!==n&&(n=null);return sd=n,null}function py(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(bT()){case i_:return 1;case sy:return 4;case nd:case PT:return 16;case oy:return 536870912;default:return 16}default:return 16}}var Vs=null,a_=null,Rf=null;function my(){if(Rf)return Rf;var n,e=a_,t=e.length,i,r="value"in Vs?Vs.value:Vs.textContent,s=r.length;for(n=0;n<t&&e[n]===r[n];n++);var o=t-n;for(i=1;i<=o&&e[t-i]===r[s-i];i++);return Rf=r.slice(n,1<i?1-i:void 0)}function bf(n){var e=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&e===13&&(n=13)):n=e,n===10&&(n=13),32<=n||n===13?n:0}function bc(){return!0}function j0(){return!1}function Wi(n){function e(t,i,r,s,o){this._reactName=t,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in n)n.hasOwnProperty(a)&&(t=n[a],this[a]=t?t(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?bc:j0,this.isPropagationStopped=j0,this}return qt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=bc)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=bc)},persist:function(){},isPersistent:bc}),e}var Ll={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},l_=Wi(Ll),gc=qt({},Ll,{view:0,detail:0}),GT=Wi(gc),vh,xh,Vl,Wd=qt({},gc,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:u_,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Vl&&(Vl&&n.type==="mousemove"?(vh=n.screenX-Vl.screenX,xh=n.screenY-Vl.screenY):xh=vh=0,Vl=n),vh)},movementY:function(n){return"movementY"in n?n.movementY:xh}}),q0=Wi(Wd),WT=qt({},Wd,{dataTransfer:0}),XT=Wi(WT),YT=qt({},gc,{relatedTarget:0}),Sh=Wi(YT),jT=qt({},Ll,{animationName:0,elapsedTime:0,pseudoElement:0}),qT=Wi(jT),$T=qt({},Ll,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),KT=Wi($T),ZT=qt({},Ll,{data:0}),$0=Wi(ZT),QT={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},JT={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ew={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function tw(n){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(n):(n=ew[n])?!!e[n]:!1}function u_(){return tw}var nw=qt({},gc,{key:function(n){if(n.key){var e=QT[n.key]||n.key;if(e!=="Unidentified")return e}return n.type==="keypress"?(n=bf(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?JT[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:u_,charCode:function(n){return n.type==="keypress"?bf(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?bf(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),iw=Wi(nw),rw=qt({},Wd,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),K0=Wi(rw),sw=qt({},gc,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:u_}),ow=Wi(sw),aw=qt({},Ll,{propertyName:0,elapsedTime:0,pseudoElement:0}),lw=Wi(aw),uw=qt({},Wd,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),cw=Wi(uw),fw=[9,13,27,32],c_=ms&&"CompositionEvent"in window,xu=null;ms&&"documentMode"in document&&(xu=document.documentMode);var dw=ms&&"TextEvent"in window&&!xu,gy=ms&&(!c_||xu&&8<xu&&11>=xu),Z0=" ",Q0=!1;function _y(n,e){switch(n){case"keyup":return fw.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function vy(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var za=!1;function hw(n,e){switch(n){case"compositionend":return vy(e);case"keypress":return e.which!==32?null:(Q0=!0,Z0);case"textInput":return n=e.data,n===Z0&&Q0?null:n;default:return null}}function pw(n,e){if(za)return n==="compositionend"||!c_&&_y(n,e)?(n=my(),Rf=a_=Vs=null,za=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return gy&&e.locale!=="ko"?null:e.data;default:return null}}var mw={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function J0(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e==="input"?!!mw[n.type]:e==="textarea"}function xy(n,e,t,i){KS(i),e=od(e,"onChange"),0<e.length&&(t=new l_("onChange","change",null,t,i),n.push({event:t,listeners:e}))}var Su=null,Wu=null;function gw(n){Py(n,0)}function Xd(n){var e=Ga(n);if(GS(e))return n}function _w(n,e){if(n==="change")return e}var Sy=!1;if(ms){var yh;if(ms){var Mh="oninput"in document;if(!Mh){var ev=document.createElement("div");ev.setAttribute("oninput","return;"),Mh=typeof ev.oninput=="function"}yh=Mh}else yh=!1;Sy=yh&&(!document.documentMode||9<document.documentMode)}function tv(){Su&&(Su.detachEvent("onpropertychange",yy),Wu=Su=null)}function yy(n){if(n.propertyName==="value"&&Xd(Wu)){var e=[];xy(e,Wu,n,n_(n)),ey(gw,e)}}function vw(n,e,t){n==="focusin"?(tv(),Su=e,Wu=t,Su.attachEvent("onpropertychange",yy)):n==="focusout"&&tv()}function xw(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Xd(Wu)}function Sw(n,e){if(n==="click")return Xd(e)}function yw(n,e){if(n==="input"||n==="change")return Xd(e)}function Mw(n,e){return n===e&&(n!==0||1/n===1/e)||n!==n&&e!==e}var yr=typeof Object.is=="function"?Object.is:Mw;function Xu(n,e){if(yr(n,e))return!0;if(typeof n!="object"||n===null||typeof e!="object"||e===null)return!1;var t=Object.keys(n),i=Object.keys(e);if(t.length!==i.length)return!1;for(i=0;i<t.length;i++){var r=t[i];if(!Up.call(e,r)||!yr(n[r],e[r]))return!1}return!0}function nv(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function iv(n,e){var t=nv(n);n=0;for(var i;t;){if(t.nodeType===3){if(i=n+t.textContent.length,n<=e&&i>=e)return{node:t,offset:e-n};n=i}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=nv(t)}}function My(n,e){return n&&e?n===e?!0:n&&n.nodeType===3?!1:e&&e.nodeType===3?My(n,e.parentNode):"contains"in n?n.contains(e):n.compareDocumentPosition?!!(n.compareDocumentPosition(e)&16):!1:!1}function Ey(){for(var n=window,e=Jf();e instanceof n.HTMLIFrameElement;){try{var t=typeof e.contentWindow.location.href=="string"}catch{t=!1}if(t)n=e.contentWindow;else break;e=Jf(n.document)}return e}function f_(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e&&(e==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||e==="textarea"||n.contentEditable==="true")}function Ew(n){var e=Ey(),t=n.focusedElem,i=n.selectionRange;if(e!==t&&t&&t.ownerDocument&&My(t.ownerDocument.documentElement,t)){if(i!==null&&f_(t)){if(e=i.start,n=i.end,n===void 0&&(n=e),"selectionStart"in t)t.selectionStart=e,t.selectionEnd=Math.min(n,t.value.length);else if(n=(e=t.ownerDocument||document)&&e.defaultView||window,n.getSelection){n=n.getSelection();var r=t.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!n.extend&&s>i&&(r=i,i=s,s=r),r=iv(t,s);var o=iv(t,i);r&&o&&(n.rangeCount!==1||n.anchorNode!==r.node||n.anchorOffset!==r.offset||n.focusNode!==o.node||n.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),n.removeAllRanges(),s>i?(n.addRange(e),n.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),n.addRange(e)))}}for(e=[],n=t;n=n.parentNode;)n.nodeType===1&&e.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<e.length;t++)n=e[t],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var Tw=ms&&"documentMode"in document&&11>=document.documentMode,Va=null,em=null,yu=null,tm=!1;function rv(n,e,t){var i=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;tm||Va==null||Va!==Jf(i)||(i=Va,"selectionStart"in i&&f_(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),yu&&Xu(yu,i)||(yu=i,i=od(em,"onSelect"),0<i.length&&(e=new l_("onSelect","select",null,e,t),n.push({event:e,listeners:i}),e.target=Va)))}function Pc(n,e){var t={};return t[n.toLowerCase()]=e.toLowerCase(),t["Webkit"+n]="webkit"+e,t["Moz"+n]="moz"+e,t}var Ha={animationend:Pc("Animation","AnimationEnd"),animationiteration:Pc("Animation","AnimationIteration"),animationstart:Pc("Animation","AnimationStart"),transitionend:Pc("Transition","TransitionEnd")},Eh={},Ty={};ms&&(Ty=document.createElement("div").style,"AnimationEvent"in window||(delete Ha.animationend.animation,delete Ha.animationiteration.animation,delete Ha.animationstart.animation),"TransitionEvent"in window||delete Ha.transitionend.transition);function Yd(n){if(Eh[n])return Eh[n];if(!Ha[n])return n;var e=Ha[n],t;for(t in e)if(e.hasOwnProperty(t)&&t in Ty)return Eh[n]=e[t];return n}var wy=Yd("animationend"),Ay=Yd("animationiteration"),Cy=Yd("animationstart"),Ry=Yd("transitionend"),by=new Map,sv="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function go(n,e){by.set(n,e),oa(e,[n])}for(var Th=0;Th<sv.length;Th++){var wh=sv[Th],ww=wh.toLowerCase(),Aw=wh[0].toUpperCase()+wh.slice(1);go(ww,"on"+Aw)}go(wy,"onAnimationEnd");go(Ay,"onAnimationIteration");go(Cy,"onAnimationStart");go("dblclick","onDoubleClick");go("focusin","onFocus");go("focusout","onBlur");go(Ry,"onTransitionEnd");pl("onMouseEnter",["mouseout","mouseover"]);pl("onMouseLeave",["mouseout","mouseover"]);pl("onPointerEnter",["pointerout","pointerover"]);pl("onPointerLeave",["pointerout","pointerover"]);oa("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));oa("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));oa("onBeforeInput",["compositionend","keypress","textInput","paste"]);oa("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));oa("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));oa("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ou="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Cw=new Set("cancel close invalid load scroll toggle".split(" ").concat(ou));function ov(n,e,t){var i=n.type||"unknown-event";n.currentTarget=t,wT(i,e,void 0,n),n.currentTarget=null}function Py(n,e){e=(e&4)!==0;for(var t=0;t<n.length;t++){var i=n[t],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;ov(r,a,u),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;ov(r,a,u),s=l}}}if(td)throw n=Kp,td=!1,Kp=null,n}function Ft(n,e){var t=e[om];t===void 0&&(t=e[om]=new Set);var i=n+"__bubble";t.has(i)||(Dy(e,n,2,!1),t.add(i))}function Ah(n,e,t){var i=0;e&&(i|=4),Dy(t,n,i,e)}var Dc="_reactListening"+Math.random().toString(36).slice(2);function Yu(n){if(!n[Dc]){n[Dc]=!0,kS.forEach(function(t){t!=="selectionchange"&&(Cw.has(t)||Ah(t,!1,n),Ah(t,!0,n))});var e=n.nodeType===9?n:n.ownerDocument;e===null||e[Dc]||(e[Dc]=!0,Ah("selectionchange",!1,e))}}function Dy(n,e,t,i){switch(py(e)){case 1:var r=VT;break;case 4:r=HT;break;default:r=o_}t=r.bind(null,e,t,n),r=void 0,!$p||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?n.addEventListener(e,t,{capture:!0,passive:r}):n.addEventListener(e,t,!0):r!==void 0?n.addEventListener(e,t,{passive:r}):n.addEventListener(e,t,!1)}function Ch(n,e,t,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=Io(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}ey(function(){var u=s,c=n_(t),d=[];e:{var f=by.get(n);if(f!==void 0){var h=l_,m=n;switch(n){case"keypress":if(bf(t)===0)break e;case"keydown":case"keyup":h=iw;break;case"focusin":m="focus",h=Sh;break;case"focusout":m="blur",h=Sh;break;case"beforeblur":case"afterblur":h=Sh;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":h=q0;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":h=XT;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":h=ow;break;case wy:case Ay:case Cy:h=qT;break;case Ry:h=lw;break;case"scroll":h=GT;break;case"wheel":h=cw;break;case"copy":case"cut":case"paste":h=KT;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":h=K0}var v=(e&4)!==0,_=!v&&n==="scroll",p=v?f!==null?f+"Capture":null:f;v=[];for(var g=u,x;g!==null;){x=g;var y=x.stateNode;if(x.tag===5&&y!==null&&(x=y,p!==null&&(y=zu(g,p),y!=null&&v.push(ju(g,y,x)))),_)break;g=g.return}0<v.length&&(f=new h(f,m,null,t,c),d.push({event:f,listeners:v}))}}if(!(e&7)){e:{if(f=n==="mouseover"||n==="pointerover",h=n==="mouseout"||n==="pointerout",f&&t!==jp&&(m=t.relatedTarget||t.fromElement)&&(Io(m)||m[gs]))break e;if((h||f)&&(f=c.window===c?c:(f=c.ownerDocument)?f.defaultView||f.parentWindow:window,h?(m=t.relatedTarget||t.toElement,h=u,m=m?Io(m):null,m!==null&&(_=aa(m),m!==_||m.tag!==5&&m.tag!==6)&&(m=null)):(h=null,m=u),h!==m)){if(v=q0,y="onMouseLeave",p="onMouseEnter",g="mouse",(n==="pointerout"||n==="pointerover")&&(v=K0,y="onPointerLeave",p="onPointerEnter",g="pointer"),_=h==null?f:Ga(h),x=m==null?f:Ga(m),f=new v(y,g+"leave",h,t,c),f.target=_,f.relatedTarget=x,y=null,Io(c)===u&&(v=new v(p,g+"enter",m,t,c),v.target=x,v.relatedTarget=_,y=v),_=y,h&&m)t:{for(v=h,p=m,g=0,x=v;x;x=ha(x))g++;for(x=0,y=p;y;y=ha(y))x++;for(;0<g-x;)v=ha(v),g--;for(;0<x-g;)p=ha(p),x--;for(;g--;){if(v===p||p!==null&&v===p.alternate)break t;v=ha(v),p=ha(p)}v=null}else v=null;h!==null&&av(d,f,h,v,!1),m!==null&&_!==null&&av(d,_,m,v,!0)}}e:{if(f=u?Ga(u):window,h=f.nodeName&&f.nodeName.toLowerCase(),h==="select"||h==="input"&&f.type==="file")var T=_w;else if(J0(f))if(Sy)T=yw;else{T=xw;var E=vw}else(h=f.nodeName)&&h.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(T=Sw);if(T&&(T=T(n,u))){xy(d,T,t,c);break e}E&&E(n,f,u),n==="focusout"&&(E=f._wrapperState)&&E.controlled&&f.type==="number"&&Hp(f,"number",f.value)}switch(E=u?Ga(u):window,n){case"focusin":(J0(E)||E.contentEditable==="true")&&(Va=E,em=u,yu=null);break;case"focusout":yu=em=Va=null;break;case"mousedown":tm=!0;break;case"contextmenu":case"mouseup":case"dragend":tm=!1,rv(d,t,c);break;case"selectionchange":if(Tw)break;case"keydown":case"keyup":rv(d,t,c)}var w;if(c_)e:{switch(n){case"compositionstart":var S="onCompositionStart";break e;case"compositionend":S="onCompositionEnd";break e;case"compositionupdate":S="onCompositionUpdate";break e}S=void 0}else za?_y(n,t)&&(S="onCompositionEnd"):n==="keydown"&&t.keyCode===229&&(S="onCompositionStart");S&&(gy&&t.locale!=="ko"&&(za||S!=="onCompositionStart"?S==="onCompositionEnd"&&za&&(w=my()):(Vs=c,a_="value"in Vs?Vs.value:Vs.textContent,za=!0)),E=od(u,S),0<E.length&&(S=new $0(S,n,null,t,c),d.push({event:S,listeners:E}),w?S.data=w:(w=vy(t),w!==null&&(S.data=w)))),(w=dw?hw(n,t):pw(n,t))&&(u=od(u,"onBeforeInput"),0<u.length&&(c=new $0("onBeforeInput","beforeinput",null,t,c),d.push({event:c,listeners:u}),c.data=w))}Py(d,e)})}function ju(n,e,t){return{instance:n,listener:e,currentTarget:t}}function od(n,e){for(var t=e+"Capture",i=[];n!==null;){var r=n,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=zu(n,t),s!=null&&i.unshift(ju(n,s,r)),s=zu(n,e),s!=null&&i.push(ju(n,s,r))),n=n.return}return i}function ha(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function av(n,e,t,i,r){for(var s=e._reactName,o=[];t!==null&&t!==i;){var a=t,l=a.alternate,u=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&u!==null&&(a=u,r?(l=zu(t,s),l!=null&&o.unshift(ju(t,l,a))):r||(l=zu(t,s),l!=null&&o.push(ju(t,l,a)))),t=t.return}o.length!==0&&n.push({event:e,listeners:o})}var Rw=/\r\n?/g,bw=/\u0000|\uFFFD/g;function lv(n){return(typeof n=="string"?n:""+n).replace(Rw,`
`).replace(bw,"")}function Lc(n,e,t){if(e=lv(e),lv(n)!==e&&t)throw Error(fe(425))}function ad(){}var nm=null,im=null;function rm(n,e){return n==="textarea"||n==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var sm=typeof setTimeout=="function"?setTimeout:void 0,Pw=typeof clearTimeout=="function"?clearTimeout:void 0,uv=typeof Promise=="function"?Promise:void 0,Dw=typeof queueMicrotask=="function"?queueMicrotask:typeof uv<"u"?function(n){return uv.resolve(null).then(n).catch(Lw)}:sm;function Lw(n){setTimeout(function(){throw n})}function Rh(n,e){var t=e,i=0;do{var r=t.nextSibling;if(n.removeChild(t),r&&r.nodeType===8)if(t=r.data,t==="/$"){if(i===0){n.removeChild(r),Gu(e);return}i--}else t!=="$"&&t!=="$?"&&t!=="$!"||i++;t=r}while(t);Gu(e)}function Qs(n){for(;n!=null;n=n.nextSibling){var e=n.nodeType;if(e===1||e===3)break;if(e===8){if(e=n.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return n}function cv(n){n=n.previousSibling;for(var e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="$"||t==="$!"||t==="$?"){if(e===0)return n;e--}else t==="/$"&&e++}n=n.previousSibling}return null}var Nl=Math.random().toString(36).slice(2),Lr="__reactFiber$"+Nl,qu="__reactProps$"+Nl,gs="__reactContainer$"+Nl,om="__reactEvents$"+Nl,Nw="__reactListeners$"+Nl,Iw="__reactHandles$"+Nl;function Io(n){var e=n[Lr];if(e)return e;for(var t=n.parentNode;t;){if(e=t[gs]||t[Lr]){if(t=e.alternate,e.child!==null||t!==null&&t.child!==null)for(n=cv(n);n!==null;){if(t=n[Lr])return t;n=cv(n)}return e}n=t,t=n.parentNode}return null}function _c(n){return n=n[Lr]||n[gs],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function Ga(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(fe(33))}function jd(n){return n[qu]||null}var am=[],Wa=-1;function _o(n){return{current:n}}function Ot(n){0>Wa||(n.current=am[Wa],am[Wa]=null,Wa--)}function Ut(n,e){Wa++,am[Wa]=n.current,n.current=e}var lo={},Kn=_o(lo),pi=_o(!1),Ko=lo;function ml(n,e){var t=n.type.contextTypes;if(!t)return lo;var i=n.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in t)r[s]=e[s];return i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=e,n.__reactInternalMemoizedMaskedChildContext=r),r}function mi(n){return n=n.childContextTypes,n!=null}function ld(){Ot(pi),Ot(Kn)}function fv(n,e,t){if(Kn.current!==lo)throw Error(fe(168));Ut(Kn,e),Ut(pi,t)}function Ly(n,e,t){var i=n.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return t;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(fe(108,vT(n)||"Unknown",r));return qt({},t,i)}function ud(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||lo,Ko=Kn.current,Ut(Kn,n),Ut(pi,pi.current),!0}function dv(n,e,t){var i=n.stateNode;if(!i)throw Error(fe(169));t?(n=Ly(n,e,Ko),i.__reactInternalMemoizedMergedChildContext=n,Ot(pi),Ot(Kn),Ut(Kn,n)):Ot(pi),Ut(pi,t)}var rs=null,qd=!1,bh=!1;function Ny(n){rs===null?rs=[n]:rs.push(n)}function Uw(n){qd=!0,Ny(n)}function vo(){if(!bh&&rs!==null){bh=!0;var n=0,e=Tt;try{var t=rs;for(Tt=1;n<t.length;n++){var i=t[n];do i=i(!0);while(i!==null)}rs=null,qd=!1}catch(r){throw rs!==null&&(rs=rs.slice(n+1)),ry(i_,vo),r}finally{Tt=e,bh=!1}}return null}var Xa=[],Ya=0,cd=null,fd=0,$i=[],Ki=0,Zo=null,as=1,ls="";function Ao(n,e){Xa[Ya++]=fd,Xa[Ya++]=cd,cd=n,fd=e}function Iy(n,e,t){$i[Ki++]=as,$i[Ki++]=ls,$i[Ki++]=Zo,Zo=n;var i=as;n=ls;var r=32-vr(i)-1;i&=~(1<<r),t+=1;var s=32-vr(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,as=1<<32-vr(e)+r|t<<r|i,ls=s+n}else as=1<<s|t<<r|i,ls=n}function d_(n){n.return!==null&&(Ao(n,1),Iy(n,1,0))}function h_(n){for(;n===cd;)cd=Xa[--Ya],Xa[Ya]=null,fd=Xa[--Ya],Xa[Ya]=null;for(;n===Zo;)Zo=$i[--Ki],$i[Ki]=null,ls=$i[--Ki],$i[Ki]=null,as=$i[--Ki],$i[Ki]=null}var ki=null,Ui=null,zt=!1,gr=null;function Uy(n,e){var t=tr(5,null,null,0);t.elementType="DELETED",t.stateNode=e,t.return=n,e=n.deletions,e===null?(n.deletions=[t],n.flags|=16):e.push(t)}function hv(n,e){switch(n.tag){case 5:var t=n.type;return e=e.nodeType!==1||t.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(n.stateNode=e,ki=n,Ui=Qs(e.firstChild),!0):!1;case 6:return e=n.pendingProps===""||e.nodeType!==3?null:e,e!==null?(n.stateNode=e,ki=n,Ui=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(t=Zo!==null?{id:as,overflow:ls}:null,n.memoizedState={dehydrated:e,treeContext:t,retryLane:1073741824},t=tr(18,null,null,0),t.stateNode=e,t.return=n,n.child=t,ki=n,Ui=null,!0):!1;default:return!1}}function lm(n){return(n.mode&1)!==0&&(n.flags&128)===0}function um(n){if(zt){var e=Ui;if(e){var t=e;if(!hv(n,e)){if(lm(n))throw Error(fe(418));e=Qs(t.nextSibling);var i=ki;e&&hv(n,e)?Uy(i,t):(n.flags=n.flags&-4097|2,zt=!1,ki=n)}}else{if(lm(n))throw Error(fe(418));n.flags=n.flags&-4097|2,zt=!1,ki=n}}}function pv(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;ki=n}function Nc(n){if(n!==ki)return!1;if(!zt)return pv(n),zt=!0,!1;var e;if((e=n.tag!==3)&&!(e=n.tag!==5)&&(e=n.type,e=e!=="head"&&e!=="body"&&!rm(n.type,n.memoizedProps)),e&&(e=Ui)){if(lm(n))throw Fy(),Error(fe(418));for(;e;)Uy(n,e),e=Qs(e.nextSibling)}if(pv(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(fe(317));e:{for(n=n.nextSibling,e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="/$"){if(e===0){Ui=Qs(n.nextSibling);break e}e--}else t!=="$"&&t!=="$!"&&t!=="$?"||e++}n=n.nextSibling}Ui=null}}else Ui=ki?Qs(n.stateNode.nextSibling):null;return!0}function Fy(){for(var n=Ui;n;)n=Qs(n.nextSibling)}function gl(){Ui=ki=null,zt=!1}function p_(n){gr===null?gr=[n]:gr.push(n)}var Fw=Es.ReactCurrentBatchConfig;function Hl(n,e,t){if(n=t.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(fe(309));var i=t.stateNode}if(!i)throw Error(fe(147,n));var r=i,s=""+n;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof n!="string")throw Error(fe(284));if(!t._owner)throw Error(fe(290,n))}return n}function Ic(n,e){throw n=Object.prototype.toString.call(e),Error(fe(31,n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n))}function mv(n){var e=n._init;return e(n._payload)}function Oy(n){function e(p,g){if(n){var x=p.deletions;x===null?(p.deletions=[g],p.flags|=16):x.push(g)}}function t(p,g){if(!n)return null;for(;g!==null;)e(p,g),g=g.sibling;return null}function i(p,g){for(p=new Map;g!==null;)g.key!==null?p.set(g.key,g):p.set(g.index,g),g=g.sibling;return p}function r(p,g){return p=no(p,g),p.index=0,p.sibling=null,p}function s(p,g,x){return p.index=x,n?(x=p.alternate,x!==null?(x=x.index,x<g?(p.flags|=2,g):x):(p.flags|=2,g)):(p.flags|=1048576,g)}function o(p){return n&&p.alternate===null&&(p.flags|=2),p}function a(p,g,x,y){return g===null||g.tag!==6?(g=Fh(x,p.mode,y),g.return=p,g):(g=r(g,x),g.return=p,g)}function l(p,g,x,y){var T=x.type;return T===Ba?c(p,g,x.props.children,y,x.key):g!==null&&(g.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===Fs&&mv(T)===g.type)?(y=r(g,x.props),y.ref=Hl(p,g,x),y.return=p,y):(y=Ff(x.type,x.key,x.props,null,p.mode,y),y.ref=Hl(p,g,x),y.return=p,y)}function u(p,g,x,y){return g===null||g.tag!==4||g.stateNode.containerInfo!==x.containerInfo||g.stateNode.implementation!==x.implementation?(g=Oh(x,p.mode,y),g.return=p,g):(g=r(g,x.children||[]),g.return=p,g)}function c(p,g,x,y,T){return g===null||g.tag!==7?(g=Ho(x,p.mode,y,T),g.return=p,g):(g=r(g,x),g.return=p,g)}function d(p,g,x){if(typeof g=="string"&&g!==""||typeof g=="number")return g=Fh(""+g,p.mode,x),g.return=p,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Ec:return x=Ff(g.type,g.key,g.props,null,p.mode,x),x.ref=Hl(p,null,g),x.return=p,x;case ka:return g=Oh(g,p.mode,x),g.return=p,g;case Fs:var y=g._init;return d(p,y(g._payload),x)}if(ru(g)||Ol(g))return g=Ho(g,p.mode,x,null),g.return=p,g;Ic(p,g)}return null}function f(p,g,x,y){var T=g!==null?g.key:null;if(typeof x=="string"&&x!==""||typeof x=="number")return T!==null?null:a(p,g,""+x,y);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Ec:return x.key===T?l(p,g,x,y):null;case ka:return x.key===T?u(p,g,x,y):null;case Fs:return T=x._init,f(p,g,T(x._payload),y)}if(ru(x)||Ol(x))return T!==null?null:c(p,g,x,y,null);Ic(p,x)}return null}function h(p,g,x,y,T){if(typeof y=="string"&&y!==""||typeof y=="number")return p=p.get(x)||null,a(g,p,""+y,T);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Ec:return p=p.get(y.key===null?x:y.key)||null,l(g,p,y,T);case ka:return p=p.get(y.key===null?x:y.key)||null,u(g,p,y,T);case Fs:var E=y._init;return h(p,g,x,E(y._payload),T)}if(ru(y)||Ol(y))return p=p.get(x)||null,c(g,p,y,T,null);Ic(g,y)}return null}function m(p,g,x,y){for(var T=null,E=null,w=g,S=g=0,C=null;w!==null&&S<x.length;S++){w.index>S?(C=w,w=null):C=w.sibling;var b=f(p,w,x[S],y);if(b===null){w===null&&(w=C);break}n&&w&&b.alternate===null&&e(p,w),g=s(b,g,S),E===null?T=b:E.sibling=b,E=b,w=C}if(S===x.length)return t(p,w),zt&&Ao(p,S),T;if(w===null){for(;S<x.length;S++)w=d(p,x[S],y),w!==null&&(g=s(w,g,S),E===null?T=w:E.sibling=w,E=w);return zt&&Ao(p,S),T}for(w=i(p,w);S<x.length;S++)C=h(w,p,S,x[S],y),C!==null&&(n&&C.alternate!==null&&w.delete(C.key===null?S:C.key),g=s(C,g,S),E===null?T=C:E.sibling=C,E=C);return n&&w.forEach(function(D){return e(p,D)}),zt&&Ao(p,S),T}function v(p,g,x,y){var T=Ol(x);if(typeof T!="function")throw Error(fe(150));if(x=T.call(x),x==null)throw Error(fe(151));for(var E=T=null,w=g,S=g=0,C=null,b=x.next();w!==null&&!b.done;S++,b=x.next()){w.index>S?(C=w,w=null):C=w.sibling;var D=f(p,w,b.value,y);if(D===null){w===null&&(w=C);break}n&&w&&D.alternate===null&&e(p,w),g=s(D,g,S),E===null?T=D:E.sibling=D,E=D,w=C}if(b.done)return t(p,w),zt&&Ao(p,S),T;if(w===null){for(;!b.done;S++,b=x.next())b=d(p,b.value,y),b!==null&&(g=s(b,g,S),E===null?T=b:E.sibling=b,E=b);return zt&&Ao(p,S),T}for(w=i(p,w);!b.done;S++,b=x.next())b=h(w,p,S,b.value,y),b!==null&&(n&&b.alternate!==null&&w.delete(b.key===null?S:b.key),g=s(b,g,S),E===null?T=b:E.sibling=b,E=b);return n&&w.forEach(function(L){return e(p,L)}),zt&&Ao(p,S),T}function _(p,g,x,y){if(typeof x=="object"&&x!==null&&x.type===Ba&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case Ec:e:{for(var T=x.key,E=g;E!==null;){if(E.key===T){if(T=x.type,T===Ba){if(E.tag===7){t(p,E.sibling),g=r(E,x.props.children),g.return=p,p=g;break e}}else if(E.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===Fs&&mv(T)===E.type){t(p,E.sibling),g=r(E,x.props),g.ref=Hl(p,E,x),g.return=p,p=g;break e}t(p,E);break}else e(p,E);E=E.sibling}x.type===Ba?(g=Ho(x.props.children,p.mode,y,x.key),g.return=p,p=g):(y=Ff(x.type,x.key,x.props,null,p.mode,y),y.ref=Hl(p,g,x),y.return=p,p=y)}return o(p);case ka:e:{for(E=x.key;g!==null;){if(g.key===E)if(g.tag===4&&g.stateNode.containerInfo===x.containerInfo&&g.stateNode.implementation===x.implementation){t(p,g.sibling),g=r(g,x.children||[]),g.return=p,p=g;break e}else{t(p,g);break}else e(p,g);g=g.sibling}g=Oh(x,p.mode,y),g.return=p,p=g}return o(p);case Fs:return E=x._init,_(p,g,E(x._payload),y)}if(ru(x))return m(p,g,x,y);if(Ol(x))return v(p,g,x,y);Ic(p,x)}return typeof x=="string"&&x!==""||typeof x=="number"?(x=""+x,g!==null&&g.tag===6?(t(p,g.sibling),g=r(g,x),g.return=p,p=g):(t(p,g),g=Fh(x,p.mode,y),g.return=p,p=g),o(p)):t(p,g)}return _}var _l=Oy(!0),ky=Oy(!1),dd=_o(null),hd=null,ja=null,m_=null;function g_(){m_=ja=hd=null}function __(n){var e=dd.current;Ot(dd),n._currentValue=e}function cm(n,e,t){for(;n!==null;){var i=n.alternate;if((n.childLanes&e)!==e?(n.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),n===t)break;n=n.return}}function il(n,e){hd=n,m_=ja=null,n=n.dependencies,n!==null&&n.firstContext!==null&&(n.lanes&e&&(hi=!0),n.firstContext=null)}function or(n){var e=n._currentValue;if(m_!==n)if(n={context:n,memoizedValue:e,next:null},ja===null){if(hd===null)throw Error(fe(308));ja=n,hd.dependencies={lanes:0,firstContext:n}}else ja=ja.next=n;return e}var Uo=null;function v_(n){Uo===null?Uo=[n]:Uo.push(n)}function By(n,e,t,i){var r=e.interleaved;return r===null?(t.next=t,v_(e)):(t.next=r.next,r.next=t),e.interleaved=t,_s(n,i)}function _s(n,e){n.lanes|=e;var t=n.alternate;for(t!==null&&(t.lanes|=e),t=n,n=n.return;n!==null;)n.childLanes|=e,t=n.alternate,t!==null&&(t.childLanes|=e),t=n,n=n.return;return t.tag===3?t.stateNode:null}var Os=!1;function x_(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function zy(n,e){n=n.updateQueue,e.updateQueue===n&&(e.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function fs(n,e){return{eventTime:n,lane:e,tag:0,payload:null,callback:null,next:null}}function Js(n,e,t){var i=n.updateQueue;if(i===null)return null;if(i=i.shared,xt&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,_s(n,t)}return r=i.interleaved,r===null?(e.next=e,v_(i)):(e.next=r.next,r.next=e),i.interleaved=e,_s(n,t)}function Pf(n,e,t){if(e=e.updateQueue,e!==null&&(e=e.shared,(t&4194240)!==0)){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,r_(n,t)}}function gv(n,e){var t=n.updateQueue,i=n.alternate;if(i!==null&&(i=i.updateQueue,t===i)){var r=null,s=null;if(t=t.firstBaseUpdate,t!==null){do{var o={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};s===null?r=s=o:s=s.next=o,t=t.next}while(t!==null);s===null?r=s=e:s=s.next=e}else r=s=e;t={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},n.updateQueue=t;return}n=t.lastBaseUpdate,n===null?t.firstBaseUpdate=e:n.next=e,t.lastBaseUpdate=e}function pd(n,e,t,i){var r=n.updateQueue;Os=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=n.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var d=r.baseState;o=0,c=u=l=null,a=s;do{var f=a.lane,h=a.eventTime;if((i&f)===f){c!==null&&(c=c.next={eventTime:h,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var m=n,v=a;switch(f=e,h=t,v.tag){case 1:if(m=v.payload,typeof m=="function"){d=m.call(h,d,f);break e}d=m;break e;case 3:m.flags=m.flags&-65537|128;case 0:if(m=v.payload,f=typeof m=="function"?m.call(h,d,f):m,f==null)break e;d=qt({},d,f);break e;case 2:Os=!0}}a.callback!==null&&a.lane!==0&&(n.flags|=64,f=r.effects,f===null?r.effects=[a]:f.push(a))}else h={eventTime:h,lane:f,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=h,l=d):c=c.next=h,o|=f;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;f=a,a=f.next,f.next=null,r.lastBaseUpdate=f,r.shared.pending=null}}while(!0);if(c===null&&(l=d),r.baseState=l,r.firstBaseUpdate=u,r.lastBaseUpdate=c,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Jo|=o,n.lanes=o,n.memoizedState=d}}function _v(n,e,t){if(n=e.effects,e.effects=null,n!==null)for(e=0;e<n.length;e++){var i=n[e],r=i.callback;if(r!==null){if(i.callback=null,i=t,typeof r!="function")throw Error(fe(191,r));r.call(i)}}}var vc={},Vr=_o(vc),$u=_o(vc),Ku=_o(vc);function Fo(n){if(n===vc)throw Error(fe(174));return n}function S_(n,e){switch(Ut(Ku,e),Ut($u,n),Ut(Vr,vc),n=e.nodeType,n){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Wp(null,"");break;default:n=n===8?e.parentNode:e,e=n.namespaceURI||null,n=n.tagName,e=Wp(e,n)}Ot(Vr),Ut(Vr,e)}function vl(){Ot(Vr),Ot($u),Ot(Ku)}function Vy(n){Fo(Ku.current);var e=Fo(Vr.current),t=Wp(e,n.type);e!==t&&(Ut($u,n),Ut(Vr,t))}function y_(n){$u.current===n&&(Ot(Vr),Ot($u))}var Wt=_o(0);function md(n){for(var e=n;e!==null;){if(e.tag===13){var t=e.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Ph=[];function M_(){for(var n=0;n<Ph.length;n++)Ph[n]._workInProgressVersionPrimary=null;Ph.length=0}var Df=Es.ReactCurrentDispatcher,Dh=Es.ReactCurrentBatchConfig,Qo=0,jt=null,mn=null,An=null,gd=!1,Mu=!1,Zu=0,Ow=0;function kn(){throw Error(fe(321))}function E_(n,e){if(e===null)return!1;for(var t=0;t<e.length&&t<n.length;t++)if(!yr(n[t],e[t]))return!1;return!0}function T_(n,e,t,i,r,s){if(Qo=s,jt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Df.current=n===null||n.memoizedState===null?Vw:Hw,n=t(i,r),Mu){s=0;do{if(Mu=!1,Zu=0,25<=s)throw Error(fe(301));s+=1,An=mn=null,e.updateQueue=null,Df.current=Gw,n=t(i,r)}while(Mu)}if(Df.current=_d,e=mn!==null&&mn.next!==null,Qo=0,An=mn=jt=null,gd=!1,e)throw Error(fe(300));return n}function w_(){var n=Zu!==0;return Zu=0,n}function Rr(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return An===null?jt.memoizedState=An=n:An=An.next=n,An}function ar(){if(mn===null){var n=jt.alternate;n=n!==null?n.memoizedState:null}else n=mn.next;var e=An===null?jt.memoizedState:An.next;if(e!==null)An=e,mn=n;else{if(n===null)throw Error(fe(310));mn=n,n={memoizedState:mn.memoizedState,baseState:mn.baseState,baseQueue:mn.baseQueue,queue:mn.queue,next:null},An===null?jt.memoizedState=An=n:An=An.next=n}return An}function Qu(n,e){return typeof e=="function"?e(n):e}function Lh(n){var e=ar(),t=e.queue;if(t===null)throw Error(fe(311));t.lastRenderedReducer=n;var i=mn,r=i.baseQueue,s=t.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,t.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((Qo&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:n(i,u.action);else{var d={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=d,o=i):l=l.next=d,jt.lanes|=c,Jo|=c}u=u.next}while(u!==null&&u!==s);l===null?o=i:l.next=a,yr(i,e.memoizedState)||(hi=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,t.lastRenderedState=i}if(n=t.interleaved,n!==null){r=n;do s=r.lane,jt.lanes|=s,Jo|=s,r=r.next;while(r!==n)}else r===null&&(t.lanes=0);return[e.memoizedState,t.dispatch]}function Nh(n){var e=ar(),t=e.queue;if(t===null)throw Error(fe(311));t.lastRenderedReducer=n;var i=t.dispatch,r=t.pending,s=e.memoizedState;if(r!==null){t.pending=null;var o=r=r.next;do s=n(s,o.action),o=o.next;while(o!==r);yr(s,e.memoizedState)||(hi=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),t.lastRenderedState=s}return[s,i]}function Hy(){}function Gy(n,e){var t=jt,i=ar(),r=e(),s=!yr(i.memoizedState,r);if(s&&(i.memoizedState=r,hi=!0),i=i.queue,A_(Yy.bind(null,t,i,n),[n]),i.getSnapshot!==e||s||An!==null&&An.memoizedState.tag&1){if(t.flags|=2048,Ju(9,Xy.bind(null,t,i,r,e),void 0,null),Cn===null)throw Error(fe(349));Qo&30||Wy(t,e,r)}return r}function Wy(n,e,t){n.flags|=16384,n={getSnapshot:e,value:t},e=jt.updateQueue,e===null?(e={lastEffect:null,stores:null},jt.updateQueue=e,e.stores=[n]):(t=e.stores,t===null?e.stores=[n]:t.push(n))}function Xy(n,e,t,i){e.value=t,e.getSnapshot=i,jy(e)&&qy(n)}function Yy(n,e,t){return t(function(){jy(e)&&qy(n)})}function jy(n){var e=n.getSnapshot;n=n.value;try{var t=e();return!yr(n,t)}catch{return!0}}function qy(n){var e=_s(n,1);e!==null&&xr(e,n,1,-1)}function vv(n){var e=Rr();return typeof n=="function"&&(n=n()),e.memoizedState=e.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Qu,lastRenderedState:n},e.queue=n,n=n.dispatch=zw.bind(null,jt,n),[e.memoizedState,n]}function Ju(n,e,t,i){return n={tag:n,create:e,destroy:t,deps:i,next:null},e=jt.updateQueue,e===null?(e={lastEffect:null,stores:null},jt.updateQueue=e,e.lastEffect=n.next=n):(t=e.lastEffect,t===null?e.lastEffect=n.next=n:(i=t.next,t.next=n,n.next=i,e.lastEffect=n)),n}function $y(){return ar().memoizedState}function Lf(n,e,t,i){var r=Rr();jt.flags|=n,r.memoizedState=Ju(1|e,t,void 0,i===void 0?null:i)}function $d(n,e,t,i){var r=ar();i=i===void 0?null:i;var s=void 0;if(mn!==null){var o=mn.memoizedState;if(s=o.destroy,i!==null&&E_(i,o.deps)){r.memoizedState=Ju(e,t,s,i);return}}jt.flags|=n,r.memoizedState=Ju(1|e,t,s,i)}function xv(n,e){return Lf(8390656,8,n,e)}function A_(n,e){return $d(2048,8,n,e)}function Ky(n,e){return $d(4,2,n,e)}function Zy(n,e){return $d(4,4,n,e)}function Qy(n,e){if(typeof e=="function")return n=n(),e(n),function(){e(null)};if(e!=null)return n=n(),e.current=n,function(){e.current=null}}function Jy(n,e,t){return t=t!=null?t.concat([n]):null,$d(4,4,Qy.bind(null,e,n),t)}function C_(){}function eM(n,e){var t=ar();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&E_(e,i[1])?i[0]:(t.memoizedState=[n,e],n)}function tM(n,e){var t=ar();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&E_(e,i[1])?i[0]:(n=n(),t.memoizedState=[n,e],n)}function nM(n,e,t){return Qo&21?(yr(t,e)||(t=ay(),jt.lanes|=t,Jo|=t,n.baseState=!0),e):(n.baseState&&(n.baseState=!1,hi=!0),n.memoizedState=t)}function kw(n,e){var t=Tt;Tt=t!==0&&4>t?t:4,n(!0);var i=Dh.transition;Dh.transition={};try{n(!1),e()}finally{Tt=t,Dh.transition=i}}function iM(){return ar().memoizedState}function Bw(n,e,t){var i=to(n);if(t={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null},rM(n))sM(e,t);else if(t=By(n,e,t,i),t!==null){var r=ai();xr(t,n,i,r),oM(t,e,i)}}function zw(n,e,t){var i=to(n),r={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null};if(rM(n))sM(e,r);else{var s=n.alternate;if(n.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,t);if(r.hasEagerState=!0,r.eagerState=a,yr(a,o)){var l=e.interleaved;l===null?(r.next=r,v_(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}t=By(n,e,r,i),t!==null&&(r=ai(),xr(t,n,i,r),oM(t,e,i))}}function rM(n){var e=n.alternate;return n===jt||e!==null&&e===jt}function sM(n,e){Mu=gd=!0;var t=n.pending;t===null?e.next=e:(e.next=t.next,t.next=e),n.pending=e}function oM(n,e,t){if(t&4194240){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,r_(n,t)}}var _d={readContext:or,useCallback:kn,useContext:kn,useEffect:kn,useImperativeHandle:kn,useInsertionEffect:kn,useLayoutEffect:kn,useMemo:kn,useReducer:kn,useRef:kn,useState:kn,useDebugValue:kn,useDeferredValue:kn,useTransition:kn,useMutableSource:kn,useSyncExternalStore:kn,useId:kn,unstable_isNewReconciler:!1},Vw={readContext:or,useCallback:function(n,e){return Rr().memoizedState=[n,e===void 0?null:e],n},useContext:or,useEffect:xv,useImperativeHandle:function(n,e,t){return t=t!=null?t.concat([n]):null,Lf(4194308,4,Qy.bind(null,e,n),t)},useLayoutEffect:function(n,e){return Lf(4194308,4,n,e)},useInsertionEffect:function(n,e){return Lf(4,2,n,e)},useMemo:function(n,e){var t=Rr();return e=e===void 0?null:e,n=n(),t.memoizedState=[n,e],n},useReducer:function(n,e,t){var i=Rr();return e=t!==void 0?t(e):e,i.memoizedState=i.baseState=e,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:e},i.queue=n,n=n.dispatch=Bw.bind(null,jt,n),[i.memoizedState,n]},useRef:function(n){var e=Rr();return n={current:n},e.memoizedState=n},useState:vv,useDebugValue:C_,useDeferredValue:function(n){return Rr().memoizedState=n},useTransition:function(){var n=vv(!1),e=n[0];return n=kw.bind(null,n[1]),Rr().memoizedState=n,[e,n]},useMutableSource:function(){},useSyncExternalStore:function(n,e,t){var i=jt,r=Rr();if(zt){if(t===void 0)throw Error(fe(407));t=t()}else{if(t=e(),Cn===null)throw Error(fe(349));Qo&30||Wy(i,e,t)}r.memoizedState=t;var s={value:t,getSnapshot:e};return r.queue=s,xv(Yy.bind(null,i,s,n),[n]),i.flags|=2048,Ju(9,Xy.bind(null,i,s,t,e),void 0,null),t},useId:function(){var n=Rr(),e=Cn.identifierPrefix;if(zt){var t=ls,i=as;t=(i&~(1<<32-vr(i)-1)).toString(32)+t,e=":"+e+"R"+t,t=Zu++,0<t&&(e+="H"+t.toString(32)),e+=":"}else t=Ow++,e=":"+e+"r"+t.toString(32)+":";return n.memoizedState=e},unstable_isNewReconciler:!1},Hw={readContext:or,useCallback:eM,useContext:or,useEffect:A_,useImperativeHandle:Jy,useInsertionEffect:Ky,useLayoutEffect:Zy,useMemo:tM,useReducer:Lh,useRef:$y,useState:function(){return Lh(Qu)},useDebugValue:C_,useDeferredValue:function(n){var e=ar();return nM(e,mn.memoizedState,n)},useTransition:function(){var n=Lh(Qu)[0],e=ar().memoizedState;return[n,e]},useMutableSource:Hy,useSyncExternalStore:Gy,useId:iM,unstable_isNewReconciler:!1},Gw={readContext:or,useCallback:eM,useContext:or,useEffect:A_,useImperativeHandle:Jy,useInsertionEffect:Ky,useLayoutEffect:Zy,useMemo:tM,useReducer:Nh,useRef:$y,useState:function(){return Nh(Qu)},useDebugValue:C_,useDeferredValue:function(n){var e=ar();return mn===null?e.memoizedState=n:nM(e,mn.memoizedState,n)},useTransition:function(){var n=Nh(Qu)[0],e=ar().memoizedState;return[n,e]},useMutableSource:Hy,useSyncExternalStore:Gy,useId:iM,unstable_isNewReconciler:!1};function pr(n,e){if(n&&n.defaultProps){e=qt({},e),n=n.defaultProps;for(var t in n)e[t]===void 0&&(e[t]=n[t]);return e}return e}function fm(n,e,t,i){e=n.memoizedState,t=t(i,e),t=t==null?e:qt({},e,t),n.memoizedState=t,n.lanes===0&&(n.updateQueue.baseState=t)}var Kd={isMounted:function(n){return(n=n._reactInternals)?aa(n)===n:!1},enqueueSetState:function(n,e,t){n=n._reactInternals;var i=ai(),r=to(n),s=fs(i,r);s.payload=e,t!=null&&(s.callback=t),e=Js(n,s,r),e!==null&&(xr(e,n,r,i),Pf(e,n,r))},enqueueReplaceState:function(n,e,t){n=n._reactInternals;var i=ai(),r=to(n),s=fs(i,r);s.tag=1,s.payload=e,t!=null&&(s.callback=t),e=Js(n,s,r),e!==null&&(xr(e,n,r,i),Pf(e,n,r))},enqueueForceUpdate:function(n,e){n=n._reactInternals;var t=ai(),i=to(n),r=fs(t,i);r.tag=2,e!=null&&(r.callback=e),e=Js(n,r,i),e!==null&&(xr(e,n,i,t),Pf(e,n,i))}};function Sv(n,e,t,i,r,s,o){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!Xu(t,i)||!Xu(r,s):!0}function aM(n,e,t){var i=!1,r=lo,s=e.contextType;return typeof s=="object"&&s!==null?s=or(s):(r=mi(e)?Ko:Kn.current,i=e.contextTypes,s=(i=i!=null)?ml(n,r):lo),e=new e(t,s),n.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Kd,n.stateNode=e,e._reactInternals=n,i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=r,n.__reactInternalMemoizedMaskedChildContext=s),e}function yv(n,e,t,i){n=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(t,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(t,i),e.state!==n&&Kd.enqueueReplaceState(e,e.state,null)}function dm(n,e,t,i){var r=n.stateNode;r.props=t,r.state=n.memoizedState,r.refs={},x_(n);var s=e.contextType;typeof s=="object"&&s!==null?r.context=or(s):(s=mi(e)?Ko:Kn.current,r.context=ml(n,s)),r.state=n.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(fm(n,e,s,t),r.state=n.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Kd.enqueueReplaceState(r,r.state,null),pd(n,t,r,i),r.state=n.memoizedState),typeof r.componentDidMount=="function"&&(n.flags|=4194308)}function xl(n,e){try{var t="",i=e;do t+=_T(i),i=i.return;while(i);var r=t}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:n,source:e,stack:r,digest:null}}function Ih(n,e,t){return{value:n,source:null,stack:t??null,digest:e??null}}function hm(n,e){try{console.error(e.value)}catch(t){setTimeout(function(){throw t})}}var Ww=typeof WeakMap=="function"?WeakMap:Map;function lM(n,e,t){t=fs(-1,t),t.tag=3,t.payload={element:null};var i=e.value;return t.callback=function(){xd||(xd=!0,Em=i),hm(n,e)},t}function uM(n,e,t){t=fs(-1,t),t.tag=3;var i=n.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;t.payload=function(){return i(r)},t.callback=function(){hm(n,e)}}var s=n.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(t.callback=function(){hm(n,e),typeof i!="function"&&(eo===null?eo=new Set([this]):eo.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),t}function Mv(n,e,t){var i=n.pingCache;if(i===null){i=n.pingCache=new Ww;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(t)||(r.add(t),n=rA.bind(null,n,e,t),e.then(n,n))}function Ev(n){do{var e;if((e=n.tag===13)&&(e=n.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return n;n=n.return}while(n!==null);return null}function Tv(n,e,t,i,r){return n.mode&1?(n.flags|=65536,n.lanes=r,n):(n===e?n.flags|=65536:(n.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(e=fs(-1,1),e.tag=2,Js(t,e,1))),t.lanes|=1),n)}var Xw=Es.ReactCurrentOwner,hi=!1;function ni(n,e,t,i){e.child=n===null?ky(e,null,t,i):_l(e,n.child,t,i)}function wv(n,e,t,i,r){t=t.render;var s=e.ref;return il(e,r),i=T_(n,e,t,i,s,r),t=w_(),n!==null&&!hi?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,vs(n,e,r)):(zt&&t&&d_(e),e.flags|=1,ni(n,e,i,r),e.child)}function Av(n,e,t,i,r){if(n===null){var s=t.type;return typeof s=="function"&&!U_(s)&&s.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(e.tag=15,e.type=s,cM(n,e,s,i,r)):(n=Ff(t.type,null,i,e,e.mode,r),n.ref=e.ref,n.return=e,e.child=n)}if(s=n.child,!(n.lanes&r)){var o=s.memoizedProps;if(t=t.compare,t=t!==null?t:Xu,t(o,i)&&n.ref===e.ref)return vs(n,e,r)}return e.flags|=1,n=no(s,i),n.ref=e.ref,n.return=e,e.child=n}function cM(n,e,t,i,r){if(n!==null){var s=n.memoizedProps;if(Xu(s,i)&&n.ref===e.ref)if(hi=!1,e.pendingProps=i=s,(n.lanes&r)!==0)n.flags&131072&&(hi=!0);else return e.lanes=n.lanes,vs(n,e,r)}return pm(n,e,t,i,r)}function fM(n,e,t){var i=e.pendingProps,r=i.children,s=n!==null?n.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ut($a,Ri),Ri|=t;else{if(!(t&1073741824))return n=s!==null?s.baseLanes|t:t,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:n,cachePool:null,transitions:null},e.updateQueue=null,Ut($a,Ri),Ri|=n,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:t,Ut($a,Ri),Ri|=i}else s!==null?(i=s.baseLanes|t,e.memoizedState=null):i=t,Ut($a,Ri),Ri|=i;return ni(n,e,r,t),e.child}function dM(n,e){var t=e.ref;(n===null&&t!==null||n!==null&&n.ref!==t)&&(e.flags|=512,e.flags|=2097152)}function pm(n,e,t,i,r){var s=mi(t)?Ko:Kn.current;return s=ml(e,s),il(e,r),t=T_(n,e,t,i,s,r),i=w_(),n!==null&&!hi?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,vs(n,e,r)):(zt&&i&&d_(e),e.flags|=1,ni(n,e,t,r),e.child)}function Cv(n,e,t,i,r){if(mi(t)){var s=!0;ud(e)}else s=!1;if(il(e,r),e.stateNode===null)Nf(n,e),aM(e,t,i),dm(e,t,i,r),i=!0;else if(n===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=t.contextType;typeof u=="object"&&u!==null?u=or(u):(u=mi(t)?Ko:Kn.current,u=ml(e,u));var c=t.getDerivedStateFromProps,d=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==u)&&yv(e,o,i,u),Os=!1;var f=e.memoizedState;o.state=f,pd(e,i,o,r),l=e.memoizedState,a!==i||f!==l||pi.current||Os?(typeof c=="function"&&(fm(e,t,c,i),l=e.memoizedState),(a=Os||Sv(e,t,a,i,f,l,u))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=u,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,zy(n,e),a=e.memoizedProps,u=e.type===e.elementType?a:pr(e.type,a),o.props=u,d=e.pendingProps,f=o.context,l=t.contextType,typeof l=="object"&&l!==null?l=or(l):(l=mi(t)?Ko:Kn.current,l=ml(e,l));var h=t.getDerivedStateFromProps;(c=typeof h=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==d||f!==l)&&yv(e,o,i,l),Os=!1,f=e.memoizedState,o.state=f,pd(e,i,o,r);var m=e.memoizedState;a!==d||f!==m||pi.current||Os?(typeof h=="function"&&(fm(e,t,h,i),m=e.memoizedState),(u=Os||Sv(e,t,u,i,f,m,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,m,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,m,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===n.memoizedProps&&f===n.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===n.memoizedProps&&f===n.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=m),o.props=i,o.state=m,o.context=l,i=u):(typeof o.componentDidUpdate!="function"||a===n.memoizedProps&&f===n.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===n.memoizedProps&&f===n.memoizedState||(e.flags|=1024),i=!1)}return mm(n,e,t,i,s,r)}function mm(n,e,t,i,r,s){dM(n,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&dv(e,t,!1),vs(n,e,s);i=e.stateNode,Xw.current=e;var a=o&&typeof t.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,n!==null&&o?(e.child=_l(e,n.child,null,s),e.child=_l(e,null,a,s)):ni(n,e,a,s),e.memoizedState=i.state,r&&dv(e,t,!0),e.child}function hM(n){var e=n.stateNode;e.pendingContext?fv(n,e.pendingContext,e.pendingContext!==e.context):e.context&&fv(n,e.context,!1),S_(n,e.containerInfo)}function Rv(n,e,t,i,r){return gl(),p_(r),e.flags|=256,ni(n,e,t,i),e.child}var gm={dehydrated:null,treeContext:null,retryLane:0};function _m(n){return{baseLanes:n,cachePool:null,transitions:null}}function pM(n,e,t){var i=e.pendingProps,r=Wt.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=n!==null&&n.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(n===null||n.memoizedState!==null)&&(r|=1),Ut(Wt,r&1),n===null)return um(e),n=e.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?(e.mode&1?n.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,n=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Jd(o,i,0,null),n=Ho(n,i,t,null),s.return=e,n.return=e,s.sibling=n,e.child=s,e.child.memoizedState=_m(t),e.memoizedState=gm,n):R_(e,o));if(r=n.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return Yw(n,e,o,i,a,r,t);if(s){s=i.fallback,o=e.mode,r=n.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=no(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=no(a,s):(s=Ho(s,o,t,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=n.child.memoizedState,o=o===null?_m(t):{baseLanes:o.baseLanes|t,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=n.childLanes&~t,e.memoizedState=gm,i}return s=n.child,n=s.sibling,i=no(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=t),i.return=e,i.sibling=null,n!==null&&(t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)),e.child=i,e.memoizedState=null,i}function R_(n,e){return e=Jd({mode:"visible",children:e},n.mode,0,null),e.return=n,n.child=e}function Uc(n,e,t,i){return i!==null&&p_(i),_l(e,n.child,null,t),n=R_(e,e.pendingProps.children),n.flags|=2,e.memoizedState=null,n}function Yw(n,e,t,i,r,s,o){if(t)return e.flags&256?(e.flags&=-257,i=Ih(Error(fe(422))),Uc(n,e,o,i)):e.memoizedState!==null?(e.child=n.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=Jd({mode:"visible",children:i.children},r,0,null),s=Ho(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&_l(e,n.child,null,o),e.child.memoizedState=_m(o),e.memoizedState=gm,s);if(!(e.mode&1))return Uc(n,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(fe(419)),i=Ih(s,i,void 0),Uc(n,e,o,i)}if(a=(o&n.childLanes)!==0,hi||a){if(i=Cn,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,_s(n,r),xr(i,n,r,-1))}return I_(),i=Ih(Error(fe(421))),Uc(n,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=n.child,e=sA.bind(null,n),r._reactRetry=e,null):(n=s.treeContext,Ui=Qs(r.nextSibling),ki=e,zt=!0,gr=null,n!==null&&($i[Ki++]=as,$i[Ki++]=ls,$i[Ki++]=Zo,as=n.id,ls=n.overflow,Zo=e),e=R_(e,i.children),e.flags|=4096,e)}function bv(n,e,t){n.lanes|=e;var i=n.alternate;i!==null&&(i.lanes|=e),cm(n.return,e,t)}function Uh(n,e,t,i,r){var s=n.memoizedState;s===null?n.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:t,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=t,s.tailMode=r)}function mM(n,e,t){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(ni(n,e,i.children,t),i=Wt.current,i&2)i=i&1|2,e.flags|=128;else{if(n!==null&&n.flags&128)e:for(n=e.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&bv(n,t,e);else if(n.tag===19)bv(n,t,e);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break e;for(;n.sibling===null;){if(n.return===null||n.return===e)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}i&=1}if(Ut(Wt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(t=e.child,r=null;t!==null;)n=t.alternate,n!==null&&md(n)===null&&(r=t),t=t.sibling;t=r,t===null?(r=e.child,e.child=null):(r=t.sibling,t.sibling=null),Uh(e,!1,r,t,s);break;case"backwards":for(t=null,r=e.child,e.child=null;r!==null;){if(n=r.alternate,n!==null&&md(n)===null){e.child=r;break}n=r.sibling,r.sibling=t,t=r,r=n}Uh(e,!0,t,null,s);break;case"together":Uh(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Nf(n,e){!(e.mode&1)&&n!==null&&(n.alternate=null,e.alternate=null,e.flags|=2)}function vs(n,e,t){if(n!==null&&(e.dependencies=n.dependencies),Jo|=e.lanes,!(t&e.childLanes))return null;if(n!==null&&e.child!==n.child)throw Error(fe(153));if(e.child!==null){for(n=e.child,t=no(n,n.pendingProps),e.child=t,t.return=e;n.sibling!==null;)n=n.sibling,t=t.sibling=no(n,n.pendingProps),t.return=e;t.sibling=null}return e.child}function jw(n,e,t){switch(e.tag){case 3:hM(e),gl();break;case 5:Vy(e);break;case 1:mi(e.type)&&ud(e);break;case 4:S_(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;Ut(dd,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(Ut(Wt,Wt.current&1),e.flags|=128,null):t&e.child.childLanes?pM(n,e,t):(Ut(Wt,Wt.current&1),n=vs(n,e,t),n!==null?n.sibling:null);Ut(Wt,Wt.current&1);break;case 19:if(i=(t&e.childLanes)!==0,n.flags&128){if(i)return mM(n,e,t);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),Ut(Wt,Wt.current),i)break;return null;case 22:case 23:return e.lanes=0,fM(n,e,t)}return vs(n,e,t)}var gM,vm,_M,vM;gM=function(n,e){for(var t=e.child;t!==null;){if(t.tag===5||t.tag===6)n.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};vm=function(){};_M=function(n,e,t,i){var r=n.memoizedProps;if(r!==i){n=e.stateNode,Fo(Vr.current);var s=null;switch(t){case"input":r=zp(n,r),i=zp(n,i),s=[];break;case"select":r=qt({},r,{value:void 0}),i=qt({},i,{value:void 0}),s=[];break;case"textarea":r=Gp(n,r),i=Gp(n,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(n.onclick=ad)}Xp(t,i);var o;t=null;for(u in r)if(!i.hasOwnProperty(u)&&r.hasOwnProperty(u)&&r[u]!=null)if(u==="style"){var a=r[u];for(o in a)a.hasOwnProperty(o)&&(t||(t={}),t[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(ku.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in i){var l=i[u];if(a=r!=null?r[u]:void 0,i.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(t||(t={}),t[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(t||(t={}),t[o]=l[o])}else t||(s||(s=[]),s.push(u,t)),t=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(ku.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&Ft("scroll",n),s||a===l||(s=[])):(s=s||[]).push(u,l))}t&&(s=s||[]).push("style",t);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};vM=function(n,e,t,i){t!==i&&(e.flags|=4)};function Gl(n,e){if(!zt)switch(n.tailMode){case"hidden":e=n.tail;for(var t=null;e!==null;)e.alternate!==null&&(t=e),e=e.sibling;t===null?n.tail=null:t.sibling=null;break;case"collapsed":t=n.tail;for(var i=null;t!==null;)t.alternate!==null&&(i=t),t=t.sibling;i===null?e||n.tail===null?n.tail=null:n.tail.sibling=null:i.sibling=null}}function Bn(n){var e=n.alternate!==null&&n.alternate.child===n.child,t=0,i=0;if(e)for(var r=n.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=n,r=r.sibling;else for(r=n.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=n,r=r.sibling;return n.subtreeFlags|=i,n.childLanes=t,e}function qw(n,e,t){var i=e.pendingProps;switch(h_(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Bn(e),null;case 1:return mi(e.type)&&ld(),Bn(e),null;case 3:return i=e.stateNode,vl(),Ot(pi),Ot(Kn),M_(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(n===null||n.child===null)&&(Nc(e)?e.flags|=4:n===null||n.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,gr!==null&&(Am(gr),gr=null))),vm(n,e),Bn(e),null;case 5:y_(e);var r=Fo(Ku.current);if(t=e.type,n!==null&&e.stateNode!=null)_M(n,e,t,i,r),n.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(fe(166));return Bn(e),null}if(n=Fo(Vr.current),Nc(e)){i=e.stateNode,t=e.type;var s=e.memoizedProps;switch(i[Lr]=e,i[qu]=s,n=(e.mode&1)!==0,t){case"dialog":Ft("cancel",i),Ft("close",i);break;case"iframe":case"object":case"embed":Ft("load",i);break;case"video":case"audio":for(r=0;r<ou.length;r++)Ft(ou[r],i);break;case"source":Ft("error",i);break;case"img":case"image":case"link":Ft("error",i),Ft("load",i);break;case"details":Ft("toggle",i);break;case"input":k0(i,s),Ft("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},Ft("invalid",i);break;case"textarea":z0(i,s),Ft("invalid",i)}Xp(t,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&Lc(i.textContent,a,n),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Lc(i.textContent,a,n),r=["children",""+a]):ku.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&Ft("scroll",i)}switch(t){case"input":Tc(i),B0(i,s,!0);break;case"textarea":Tc(i),V0(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=ad)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=YS(t)),n==="http://www.w3.org/1999/xhtml"?t==="script"?(n=o.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof i.is=="string"?n=o.createElement(t,{is:i.is}):(n=o.createElement(t),t==="select"&&(o=n,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):n=o.createElementNS(n,t),n[Lr]=e,n[qu]=i,gM(n,e,!1,!1),e.stateNode=n;e:{switch(o=Yp(t,i),t){case"dialog":Ft("cancel",n),Ft("close",n),r=i;break;case"iframe":case"object":case"embed":Ft("load",n),r=i;break;case"video":case"audio":for(r=0;r<ou.length;r++)Ft(ou[r],n);r=i;break;case"source":Ft("error",n),r=i;break;case"img":case"image":case"link":Ft("error",n),Ft("load",n),r=i;break;case"details":Ft("toggle",n),r=i;break;case"input":k0(n,i),r=zp(n,i),Ft("invalid",n);break;case"option":r=i;break;case"select":n._wrapperState={wasMultiple:!!i.multiple},r=qt({},i,{value:void 0}),Ft("invalid",n);break;case"textarea":z0(n,i),r=Gp(n,i),Ft("invalid",n);break;default:r=i}Xp(t,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?$S(n,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&jS(n,l)):s==="children"?typeof l=="string"?(t!=="textarea"||l!=="")&&Bu(n,l):typeof l=="number"&&Bu(n,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(ku.hasOwnProperty(s)?l!=null&&s==="onScroll"&&Ft("scroll",n):l!=null&&Qg(n,s,l,o))}switch(t){case"input":Tc(n),B0(n,i,!1);break;case"textarea":Tc(n),V0(n);break;case"option":i.value!=null&&n.setAttribute("value",""+ao(i.value));break;case"select":n.multiple=!!i.multiple,s=i.value,s!=null?Ja(n,!!i.multiple,s,!1):i.defaultValue!=null&&Ja(n,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(n.onclick=ad)}switch(t){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Bn(e),null;case 6:if(n&&e.stateNode!=null)vM(n,e,n.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(fe(166));if(t=Fo(Ku.current),Fo(Vr.current),Nc(e)){if(i=e.stateNode,t=e.memoizedProps,i[Lr]=e,(s=i.nodeValue!==t)&&(n=ki,n!==null))switch(n.tag){case 3:Lc(i.nodeValue,t,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Lc(i.nodeValue,t,(n.mode&1)!==0)}s&&(e.flags|=4)}else i=(t.nodeType===9?t:t.ownerDocument).createTextNode(i),i[Lr]=e,e.stateNode=i}return Bn(e),null;case 13:if(Ot(Wt),i=e.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(zt&&Ui!==null&&e.mode&1&&!(e.flags&128))Fy(),gl(),e.flags|=98560,s=!1;else if(s=Nc(e),i!==null&&i.dehydrated!==null){if(n===null){if(!s)throw Error(fe(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(fe(317));s[Lr]=e}else gl(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Bn(e),s=!1}else gr!==null&&(Am(gr),gr=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=t,e):(i=i!==null,i!==(n!==null&&n.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(n===null||Wt.current&1?_n===0&&(_n=3):I_())),e.updateQueue!==null&&(e.flags|=4),Bn(e),null);case 4:return vl(),vm(n,e),n===null&&Yu(e.stateNode.containerInfo),Bn(e),null;case 10:return __(e.type._context),Bn(e),null;case 17:return mi(e.type)&&ld(),Bn(e),null;case 19:if(Ot(Wt),s=e.memoizedState,s===null)return Bn(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)Gl(s,!1);else{if(_n!==0||n!==null&&n.flags&128)for(n=e.child;n!==null;){if(o=md(n),o!==null){for(e.flags|=128,Gl(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=t,t=e.child;t!==null;)s=t,n=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=n,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,n=o.dependencies,s.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t=t.sibling;return Ut(Wt,Wt.current&1|2),e.child}n=n.sibling}s.tail!==null&&sn()>Sl&&(e.flags|=128,i=!0,Gl(s,!1),e.lanes=4194304)}else{if(!i)if(n=md(o),n!==null){if(e.flags|=128,i=!0,t=n.updateQueue,t!==null&&(e.updateQueue=t,e.flags|=4),Gl(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!zt)return Bn(e),null}else 2*sn()-s.renderingStartTime>Sl&&t!==1073741824&&(e.flags|=128,i=!0,Gl(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(t=s.last,t!==null?t.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=sn(),e.sibling=null,t=Wt.current,Ut(Wt,i?t&1|2:t&1),e):(Bn(e),null);case 22:case 23:return N_(),i=e.memoizedState!==null,n!==null&&n.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?Ri&1073741824&&(Bn(e),e.subtreeFlags&6&&(e.flags|=8192)):Bn(e),null;case 24:return null;case 25:return null}throw Error(fe(156,e.tag))}function $w(n,e){switch(h_(e),e.tag){case 1:return mi(e.type)&&ld(),n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 3:return vl(),Ot(pi),Ot(Kn),M_(),n=e.flags,n&65536&&!(n&128)?(e.flags=n&-65537|128,e):null;case 5:return y_(e),null;case 13:if(Ot(Wt),n=e.memoizedState,n!==null&&n.dehydrated!==null){if(e.alternate===null)throw Error(fe(340));gl()}return n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 19:return Ot(Wt),null;case 4:return vl(),null;case 10:return __(e.type._context),null;case 22:case 23:return N_(),null;case 24:return null;default:return null}}var Fc=!1,Wn=!1,Kw=typeof WeakSet=="function"?WeakSet:Set,De=null;function qa(n,e){var t=n.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(i){Kt(n,e,i)}else t.current=null}function xm(n,e,t){try{t()}catch(i){Kt(n,e,i)}}var Pv=!1;function Zw(n,e){if(nm=rd,n=Ey(),f_(n)){if("selectionStart"in n)var t={start:n.selectionStart,end:n.selectionEnd};else e:{t=(t=n.ownerDocument)&&t.defaultView||window;var i=t.getSelection&&t.getSelection();if(i&&i.rangeCount!==0){t=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{t.nodeType,s.nodeType}catch{t=null;break e}var o=0,a=-1,l=-1,u=0,c=0,d=n,f=null;t:for(;;){for(var h;d!==t||r!==0&&d.nodeType!==3||(a=o+r),d!==s||i!==0&&d.nodeType!==3||(l=o+i),d.nodeType===3&&(o+=d.nodeValue.length),(h=d.firstChild)!==null;)f=d,d=h;for(;;){if(d===n)break t;if(f===t&&++u===r&&(a=o),f===s&&++c===i&&(l=o),(h=d.nextSibling)!==null)break;d=f,f=d.parentNode}d=h}t=a===-1||l===-1?null:{start:a,end:l}}else t=null}t=t||{start:0,end:0}}else t=null;for(im={focusedElem:n,selectionRange:t},rd=!1,De=e;De!==null;)if(e=De,n=e.child,(e.subtreeFlags&1028)!==0&&n!==null)n.return=e,De=n;else for(;De!==null;){e=De;try{var m=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(m!==null){var v=m.memoizedProps,_=m.memoizedState,p=e.stateNode,g=p.getSnapshotBeforeUpdate(e.elementType===e.type?v:pr(e.type,v),_);p.__reactInternalSnapshotBeforeUpdate=g}break;case 3:var x=e.stateNode.containerInfo;x.nodeType===1?x.textContent="":x.nodeType===9&&x.documentElement&&x.removeChild(x.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(fe(163))}}catch(y){Kt(e,e.return,y)}if(n=e.sibling,n!==null){n.return=e.return,De=n;break}De=e.return}return m=Pv,Pv=!1,m}function Eu(n,e,t){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&n)===n){var s=r.destroy;r.destroy=void 0,s!==void 0&&xm(e,t,s)}r=r.next}while(r!==i)}}function Zd(n,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var t=e=e.next;do{if((t.tag&n)===n){var i=t.create;t.destroy=i()}t=t.next}while(t!==e)}}function Sm(n){var e=n.ref;if(e!==null){var t=n.stateNode;switch(n.tag){case 5:n=t;break;default:n=t}typeof e=="function"?e(n):e.current=n}}function xM(n){var e=n.alternate;e!==null&&(n.alternate=null,xM(e)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(e=n.stateNode,e!==null&&(delete e[Lr],delete e[qu],delete e[om],delete e[Nw],delete e[Iw])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function SM(n){return n.tag===5||n.tag===3||n.tag===4}function Dv(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||SM(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function ym(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.nodeType===8?t.parentNode.insertBefore(n,e):t.insertBefore(n,e):(t.nodeType===8?(e=t.parentNode,e.insertBefore(n,t)):(e=t,e.appendChild(n)),t=t._reactRootContainer,t!=null||e.onclick!==null||(e.onclick=ad));else if(i!==4&&(n=n.child,n!==null))for(ym(n,e,t),n=n.sibling;n!==null;)ym(n,e,t),n=n.sibling}function Mm(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.insertBefore(n,e):t.appendChild(n);else if(i!==4&&(n=n.child,n!==null))for(Mm(n,e,t),n=n.sibling;n!==null;)Mm(n,e,t),n=n.sibling}var bn=null,mr=!1;function Cs(n,e,t){for(t=t.child;t!==null;)yM(n,e,t),t=t.sibling}function yM(n,e,t){if(zr&&typeof zr.onCommitFiberUnmount=="function")try{zr.onCommitFiberUnmount(Gd,t)}catch{}switch(t.tag){case 5:Wn||qa(t,e);case 6:var i=bn,r=mr;bn=null,Cs(n,e,t),bn=i,mr=r,bn!==null&&(mr?(n=bn,t=t.stateNode,n.nodeType===8?n.parentNode.removeChild(t):n.removeChild(t)):bn.removeChild(t.stateNode));break;case 18:bn!==null&&(mr?(n=bn,t=t.stateNode,n.nodeType===8?Rh(n.parentNode,t):n.nodeType===1&&Rh(n,t),Gu(n)):Rh(bn,t.stateNode));break;case 4:i=bn,r=mr,bn=t.stateNode.containerInfo,mr=!0,Cs(n,e,t),bn=i,mr=r;break;case 0:case 11:case 14:case 15:if(!Wn&&(i=t.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&xm(t,e,o),r=r.next}while(r!==i)}Cs(n,e,t);break;case 1:if(!Wn&&(qa(t,e),i=t.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=t.memoizedProps,i.state=t.memoizedState,i.componentWillUnmount()}catch(a){Kt(t,e,a)}Cs(n,e,t);break;case 21:Cs(n,e,t);break;case 22:t.mode&1?(Wn=(i=Wn)||t.memoizedState!==null,Cs(n,e,t),Wn=i):Cs(n,e,t);break;default:Cs(n,e,t)}}function Lv(n){var e=n.updateQueue;if(e!==null){n.updateQueue=null;var t=n.stateNode;t===null&&(t=n.stateNode=new Kw),e.forEach(function(i){var r=oA.bind(null,n,i);t.has(i)||(t.add(i),i.then(r,r))})}}function lr(n,e){var t=e.deletions;if(t!==null)for(var i=0;i<t.length;i++){var r=t[i];try{var s=n,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:bn=a.stateNode,mr=!1;break e;case 3:bn=a.stateNode.containerInfo,mr=!0;break e;case 4:bn=a.stateNode.containerInfo,mr=!0;break e}a=a.return}if(bn===null)throw Error(fe(160));yM(s,o,r),bn=null,mr=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(u){Kt(r,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)MM(e,n),e=e.sibling}function MM(n,e){var t=n.alternate,i=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(lr(e,n),Tr(n),i&4){try{Eu(3,n,n.return),Zd(3,n)}catch(v){Kt(n,n.return,v)}try{Eu(5,n,n.return)}catch(v){Kt(n,n.return,v)}}break;case 1:lr(e,n),Tr(n),i&512&&t!==null&&qa(t,t.return);break;case 5:if(lr(e,n),Tr(n),i&512&&t!==null&&qa(t,t.return),n.flags&32){var r=n.stateNode;try{Bu(r,"")}catch(v){Kt(n,n.return,v)}}if(i&4&&(r=n.stateNode,r!=null)){var s=n.memoizedProps,o=t!==null?t.memoizedProps:s,a=n.type,l=n.updateQueue;if(n.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&WS(r,s),Yp(a,o);var u=Yp(a,s);for(o=0;o<l.length;o+=2){var c=l[o],d=l[o+1];c==="style"?$S(r,d):c==="dangerouslySetInnerHTML"?jS(r,d):c==="children"?Bu(r,d):Qg(r,c,d,u)}switch(a){case"input":Vp(r,s);break;case"textarea":XS(r,s);break;case"select":var f=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var h=s.value;h!=null?Ja(r,!!s.multiple,h,!1):f!==!!s.multiple&&(s.defaultValue!=null?Ja(r,!!s.multiple,s.defaultValue,!0):Ja(r,!!s.multiple,s.multiple?[]:"",!1))}r[qu]=s}catch(v){Kt(n,n.return,v)}}break;case 6:if(lr(e,n),Tr(n),i&4){if(n.stateNode===null)throw Error(fe(162));r=n.stateNode,s=n.memoizedProps;try{r.nodeValue=s}catch(v){Kt(n,n.return,v)}}break;case 3:if(lr(e,n),Tr(n),i&4&&t!==null&&t.memoizedState.isDehydrated)try{Gu(e.containerInfo)}catch(v){Kt(n,n.return,v)}break;case 4:lr(e,n),Tr(n);break;case 13:lr(e,n),Tr(n),r=n.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(D_=sn())),i&4&&Lv(n);break;case 22:if(c=t!==null&&t.memoizedState!==null,n.mode&1?(Wn=(u=Wn)||c,lr(e,n),Wn=u):lr(e,n),Tr(n),i&8192){if(u=n.memoizedState!==null,(n.stateNode.isHidden=u)&&!c&&n.mode&1)for(De=n,c=n.child;c!==null;){for(d=De=c;De!==null;){switch(f=De,h=f.child,f.tag){case 0:case 11:case 14:case 15:Eu(4,f,f.return);break;case 1:qa(f,f.return);var m=f.stateNode;if(typeof m.componentWillUnmount=="function"){i=f,t=f.return;try{e=i,m.props=e.memoizedProps,m.state=e.memoizedState,m.componentWillUnmount()}catch(v){Kt(i,t,v)}}break;case 5:qa(f,f.return);break;case 22:if(f.memoizedState!==null){Iv(d);continue}}h!==null?(h.return=f,De=h):Iv(d)}c=c.sibling}e:for(c=null,d=n;;){if(d.tag===5){if(c===null){c=d;try{r=d.stateNode,u?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=d.stateNode,l=d.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=qS("display",o))}catch(v){Kt(n,n.return,v)}}}else if(d.tag===6){if(c===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(v){Kt(n,n.return,v)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===n)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===n)break e;for(;d.sibling===null;){if(d.return===null||d.return===n)break e;c===d&&(c=null),d=d.return}c===d&&(c=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:lr(e,n),Tr(n),i&4&&Lv(n);break;case 21:break;default:lr(e,n),Tr(n)}}function Tr(n){var e=n.flags;if(e&2){try{e:{for(var t=n.return;t!==null;){if(SM(t)){var i=t;break e}t=t.return}throw Error(fe(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Bu(r,""),i.flags&=-33);var s=Dv(n);Mm(n,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=Dv(n);ym(n,a,o);break;default:throw Error(fe(161))}}catch(l){Kt(n,n.return,l)}n.flags&=-3}e&4096&&(n.flags&=-4097)}function Qw(n,e,t){De=n,EM(n)}function EM(n,e,t){for(var i=(n.mode&1)!==0;De!==null;){var r=De,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||Fc;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||Wn;a=Fc;var u=Wn;if(Fc=o,(Wn=l)&&!u)for(De=r;De!==null;)o=De,l=o.child,o.tag===22&&o.memoizedState!==null?Uv(r):l!==null?(l.return=o,De=l):Uv(r);for(;s!==null;)De=s,EM(s),s=s.sibling;De=r,Fc=a,Wn=u}Nv(n)}else r.subtreeFlags&8772&&s!==null?(s.return=r,De=s):Nv(n)}}function Nv(n){for(;De!==null;){var e=De;if(e.flags&8772){var t=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Wn||Zd(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Wn)if(t===null)i.componentDidMount();else{var r=e.elementType===e.type?t.memoizedProps:pr(e.type,t.memoizedProps);i.componentDidUpdate(r,t.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&_v(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(t=null,e.child!==null)switch(e.child.tag){case 5:t=e.child.stateNode;break;case 1:t=e.child.stateNode}_v(e,o,t)}break;case 5:var a=e.stateNode;if(t===null&&e.flags&4){t=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&t.focus();break;case"img":l.src&&(t.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var d=c.dehydrated;d!==null&&Gu(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(fe(163))}Wn||e.flags&512&&Sm(e)}catch(f){Kt(e,e.return,f)}}if(e===n){De=null;break}if(t=e.sibling,t!==null){t.return=e.return,De=t;break}De=e.return}}function Iv(n){for(;De!==null;){var e=De;if(e===n){De=null;break}var t=e.sibling;if(t!==null){t.return=e.return,De=t;break}De=e.return}}function Uv(n){for(;De!==null;){var e=De;try{switch(e.tag){case 0:case 11:case 15:var t=e.return;try{Zd(4,e)}catch(l){Kt(e,t,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){Kt(e,r,l)}}var s=e.return;try{Sm(e)}catch(l){Kt(e,s,l)}break;case 5:var o=e.return;try{Sm(e)}catch(l){Kt(e,o,l)}}}catch(l){Kt(e,e.return,l)}if(e===n){De=null;break}var a=e.sibling;if(a!==null){a.return=e.return,De=a;break}De=e.return}}var Jw=Math.ceil,vd=Es.ReactCurrentDispatcher,b_=Es.ReactCurrentOwner,rr=Es.ReactCurrentBatchConfig,xt=0,Cn=null,dn=null,Ln=0,Ri=0,$a=_o(0),_n=0,ec=null,Jo=0,Qd=0,P_=0,Tu=null,fi=null,D_=0,Sl=1/0,ns=null,xd=!1,Em=null,eo=null,Oc=!1,Hs=null,Sd=0,wu=0,Tm=null,If=-1,Uf=0;function ai(){return xt&6?sn():If!==-1?If:If=sn()}function to(n){return n.mode&1?xt&2&&Ln!==0?Ln&-Ln:Fw.transition!==null?(Uf===0&&(Uf=ay()),Uf):(n=Tt,n!==0||(n=window.event,n=n===void 0?16:py(n.type)),n):1}function xr(n,e,t,i){if(50<wu)throw wu=0,Tm=null,Error(fe(185));mc(n,t,i),(!(xt&2)||n!==Cn)&&(n===Cn&&(!(xt&2)&&(Qd|=t),_n===4&&Bs(n,Ln)),gi(n,i),t===1&&xt===0&&!(e.mode&1)&&(Sl=sn()+500,qd&&vo()))}function gi(n,e){var t=n.callbackNode;FT(n,e);var i=id(n,n===Cn?Ln:0);if(i===0)t!==null&&W0(t),n.callbackNode=null,n.callbackPriority=0;else if(e=i&-i,n.callbackPriority!==e){if(t!=null&&W0(t),e===1)n.tag===0?Uw(Fv.bind(null,n)):Ny(Fv.bind(null,n)),Dw(function(){!(xt&6)&&vo()}),t=null;else{switch(ly(i)){case 1:t=i_;break;case 4:t=sy;break;case 16:t=nd;break;case 536870912:t=oy;break;default:t=nd}t=DM(t,TM.bind(null,n))}n.callbackPriority=e,n.callbackNode=t}}function TM(n,e){if(If=-1,Uf=0,xt&6)throw Error(fe(327));var t=n.callbackNode;if(rl()&&n.callbackNode!==t)return null;var i=id(n,n===Cn?Ln:0);if(i===0)return null;if(i&30||i&n.expiredLanes||e)e=yd(n,i);else{e=i;var r=xt;xt|=2;var s=AM();(Cn!==n||Ln!==e)&&(ns=null,Sl=sn()+500,Vo(n,e));do try{nA();break}catch(a){wM(n,a)}while(!0);g_(),vd.current=s,xt=r,dn!==null?e=0:(Cn=null,Ln=0,e=_n)}if(e!==0){if(e===2&&(r=Zp(n),r!==0&&(i=r,e=wm(n,r))),e===1)throw t=ec,Vo(n,0),Bs(n,i),gi(n,sn()),t;if(e===6)Bs(n,i);else{if(r=n.current.alternate,!(i&30)&&!eA(r)&&(e=yd(n,i),e===2&&(s=Zp(n),s!==0&&(i=s,e=wm(n,s))),e===1))throw t=ec,Vo(n,0),Bs(n,i),gi(n,sn()),t;switch(n.finishedWork=r,n.finishedLanes=i,e){case 0:case 1:throw Error(fe(345));case 2:Co(n,fi,ns);break;case 3:if(Bs(n,i),(i&130023424)===i&&(e=D_+500-sn(),10<e)){if(id(n,0)!==0)break;if(r=n.suspendedLanes,(r&i)!==i){ai(),n.pingedLanes|=n.suspendedLanes&r;break}n.timeoutHandle=sm(Co.bind(null,n,fi,ns),e);break}Co(n,fi,ns);break;case 4:if(Bs(n,i),(i&4194240)===i)break;for(e=n.eventTimes,r=-1;0<i;){var o=31-vr(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=sn()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*Jw(i/1960))-i,10<i){n.timeoutHandle=sm(Co.bind(null,n,fi,ns),i);break}Co(n,fi,ns);break;case 5:Co(n,fi,ns);break;default:throw Error(fe(329))}}}return gi(n,sn()),n.callbackNode===t?TM.bind(null,n):null}function wm(n,e){var t=Tu;return n.current.memoizedState.isDehydrated&&(Vo(n,e).flags|=256),n=yd(n,e),n!==2&&(e=fi,fi=t,e!==null&&Am(e)),n}function Am(n){fi===null?fi=n:fi.push.apply(fi,n)}function eA(n){for(var e=n;;){if(e.flags&16384){var t=e.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var i=0;i<t.length;i++){var r=t[i],s=r.getSnapshot;r=r.value;try{if(!yr(s(),r))return!1}catch{return!1}}}if(t=e.child,e.subtreeFlags&16384&&t!==null)t.return=e,e=t;else{if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Bs(n,e){for(e&=~P_,e&=~Qd,n.suspendedLanes|=e,n.pingedLanes&=~e,n=n.expirationTimes;0<e;){var t=31-vr(e),i=1<<t;n[t]=-1,e&=~i}}function Fv(n){if(xt&6)throw Error(fe(327));rl();var e=id(n,0);if(!(e&1))return gi(n,sn()),null;var t=yd(n,e);if(n.tag!==0&&t===2){var i=Zp(n);i!==0&&(e=i,t=wm(n,i))}if(t===1)throw t=ec,Vo(n,0),Bs(n,e),gi(n,sn()),t;if(t===6)throw Error(fe(345));return n.finishedWork=n.current.alternate,n.finishedLanes=e,Co(n,fi,ns),gi(n,sn()),null}function L_(n,e){var t=xt;xt|=1;try{return n(e)}finally{xt=t,xt===0&&(Sl=sn()+500,qd&&vo())}}function ea(n){Hs!==null&&Hs.tag===0&&!(xt&6)&&rl();var e=xt;xt|=1;var t=rr.transition,i=Tt;try{if(rr.transition=null,Tt=1,n)return n()}finally{Tt=i,rr.transition=t,xt=e,!(xt&6)&&vo()}}function N_(){Ri=$a.current,Ot($a)}function Vo(n,e){n.finishedWork=null,n.finishedLanes=0;var t=n.timeoutHandle;if(t!==-1&&(n.timeoutHandle=-1,Pw(t)),dn!==null)for(t=dn.return;t!==null;){var i=t;switch(h_(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&ld();break;case 3:vl(),Ot(pi),Ot(Kn),M_();break;case 5:y_(i);break;case 4:vl();break;case 13:Ot(Wt);break;case 19:Ot(Wt);break;case 10:__(i.type._context);break;case 22:case 23:N_()}t=t.return}if(Cn=n,dn=n=no(n.current,null),Ln=Ri=e,_n=0,ec=null,P_=Qd=Jo=0,fi=Tu=null,Uo!==null){for(e=0;e<Uo.length;e++)if(t=Uo[e],i=t.interleaved,i!==null){t.interleaved=null;var r=i.next,s=t.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}t.pending=i}Uo=null}return n}function wM(n,e){do{var t=dn;try{if(g_(),Df.current=_d,gd){for(var i=jt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}gd=!1}if(Qo=0,An=mn=jt=null,Mu=!1,Zu=0,b_.current=null,t===null||t.return===null){_n=1,ec=e,dn=null;break}e:{var s=n,o=t.return,a=t,l=e;if(e=Ln,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,d=c.tag;if(!(c.mode&1)&&(d===0||d===11||d===15)){var f=c.alternate;f?(c.updateQueue=f.updateQueue,c.memoizedState=f.memoizedState,c.lanes=f.lanes):(c.updateQueue=null,c.memoizedState=null)}var h=Ev(o);if(h!==null){h.flags&=-257,Tv(h,o,a,s,e),h.mode&1&&Mv(s,u,e),e=h,l=u;var m=e.updateQueue;if(m===null){var v=new Set;v.add(l),e.updateQueue=v}else m.add(l);break e}else{if(!(e&1)){Mv(s,u,e),I_();break e}l=Error(fe(426))}}else if(zt&&a.mode&1){var _=Ev(o);if(_!==null){!(_.flags&65536)&&(_.flags|=256),Tv(_,o,a,s,e),p_(xl(l,a));break e}}s=l=xl(l,a),_n!==4&&(_n=2),Tu===null?Tu=[s]:Tu.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var p=lM(s,l,e);gv(s,p);break e;case 1:a=l;var g=s.type,x=s.stateNode;if(!(s.flags&128)&&(typeof g.getDerivedStateFromError=="function"||x!==null&&typeof x.componentDidCatch=="function"&&(eo===null||!eo.has(x)))){s.flags|=65536,e&=-e,s.lanes|=e;var y=uM(s,a,e);gv(s,y);break e}}s=s.return}while(s!==null)}RM(t)}catch(T){e=T,dn===t&&t!==null&&(dn=t=t.return);continue}break}while(!0)}function AM(){var n=vd.current;return vd.current=_d,n===null?_d:n}function I_(){(_n===0||_n===3||_n===2)&&(_n=4),Cn===null||!(Jo&268435455)&&!(Qd&268435455)||Bs(Cn,Ln)}function yd(n,e){var t=xt;xt|=2;var i=AM();(Cn!==n||Ln!==e)&&(ns=null,Vo(n,e));do try{tA();break}catch(r){wM(n,r)}while(!0);if(g_(),xt=t,vd.current=i,dn!==null)throw Error(fe(261));return Cn=null,Ln=0,_n}function tA(){for(;dn!==null;)CM(dn)}function nA(){for(;dn!==null&&!CT();)CM(dn)}function CM(n){var e=PM(n.alternate,n,Ri);n.memoizedProps=n.pendingProps,e===null?RM(n):dn=e,b_.current=null}function RM(n){var e=n;do{var t=e.alternate;if(n=e.return,e.flags&32768){if(t=$w(t,e),t!==null){t.flags&=32767,dn=t;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{_n=6,dn=null;return}}else if(t=qw(t,e,Ri),t!==null){dn=t;return}if(e=e.sibling,e!==null){dn=e;return}dn=e=n}while(e!==null);_n===0&&(_n=5)}function Co(n,e,t){var i=Tt,r=rr.transition;try{rr.transition=null,Tt=1,iA(n,e,t,i)}finally{rr.transition=r,Tt=i}return null}function iA(n,e,t,i){do rl();while(Hs!==null);if(xt&6)throw Error(fe(327));t=n.finishedWork;var r=n.finishedLanes;if(t===null)return null;if(n.finishedWork=null,n.finishedLanes=0,t===n.current)throw Error(fe(177));n.callbackNode=null,n.callbackPriority=0;var s=t.lanes|t.childLanes;if(OT(n,s),n===Cn&&(dn=Cn=null,Ln=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||Oc||(Oc=!0,DM(nd,function(){return rl(),null})),s=(t.flags&15990)!==0,t.subtreeFlags&15990||s){s=rr.transition,rr.transition=null;var o=Tt;Tt=1;var a=xt;xt|=4,b_.current=null,Zw(n,t),MM(t,n),Ew(im),rd=!!nm,im=nm=null,n.current=t,Qw(t),RT(),xt=a,Tt=o,rr.transition=s}else n.current=t;if(Oc&&(Oc=!1,Hs=n,Sd=r),s=n.pendingLanes,s===0&&(eo=null),DT(t.stateNode),gi(n,sn()),e!==null)for(i=n.onRecoverableError,t=0;t<e.length;t++)r=e[t],i(r.value,{componentStack:r.stack,digest:r.digest});if(xd)throw xd=!1,n=Em,Em=null,n;return Sd&1&&n.tag!==0&&rl(),s=n.pendingLanes,s&1?n===Tm?wu++:(wu=0,Tm=n):wu=0,vo(),null}function rl(){if(Hs!==null){var n=ly(Sd),e=rr.transition,t=Tt;try{if(rr.transition=null,Tt=16>n?16:n,Hs===null)var i=!1;else{if(n=Hs,Hs=null,Sd=0,xt&6)throw Error(fe(331));var r=xt;for(xt|=4,De=n.current;De!==null;){var s=De,o=s.child;if(De.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(De=u;De!==null;){var c=De;switch(c.tag){case 0:case 11:case 15:Eu(8,c,s)}var d=c.child;if(d!==null)d.return=c,De=d;else for(;De!==null;){c=De;var f=c.sibling,h=c.return;if(xM(c),c===u){De=null;break}if(f!==null){f.return=h,De=f;break}De=h}}}var m=s.alternate;if(m!==null){var v=m.child;if(v!==null){m.child=null;do{var _=v.sibling;v.sibling=null,v=_}while(v!==null)}}De=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,De=o;else e:for(;De!==null;){if(s=De,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Eu(9,s,s.return)}var p=s.sibling;if(p!==null){p.return=s.return,De=p;break e}De=s.return}}var g=n.current;for(De=g;De!==null;){o=De;var x=o.child;if(o.subtreeFlags&2064&&x!==null)x.return=o,De=x;else e:for(o=g;De!==null;){if(a=De,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Zd(9,a)}}catch(T){Kt(a,a.return,T)}if(a===o){De=null;break e}var y=a.sibling;if(y!==null){y.return=a.return,De=y;break e}De=a.return}}if(xt=r,vo(),zr&&typeof zr.onPostCommitFiberRoot=="function")try{zr.onPostCommitFiberRoot(Gd,n)}catch{}i=!0}return i}finally{Tt=t,rr.transition=e}}return!1}function Ov(n,e,t){e=xl(t,e),e=lM(n,e,1),n=Js(n,e,1),e=ai(),n!==null&&(mc(n,1,e),gi(n,e))}function Kt(n,e,t){if(n.tag===3)Ov(n,n,t);else for(;e!==null;){if(e.tag===3){Ov(e,n,t);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(eo===null||!eo.has(i))){n=xl(t,n),n=uM(e,n,1),e=Js(e,n,1),n=ai(),e!==null&&(mc(e,1,n),gi(e,n));break}}e=e.return}}function rA(n,e,t){var i=n.pingCache;i!==null&&i.delete(e),e=ai(),n.pingedLanes|=n.suspendedLanes&t,Cn===n&&(Ln&t)===t&&(_n===4||_n===3&&(Ln&130023424)===Ln&&500>sn()-D_?Vo(n,0):P_|=t),gi(n,e)}function bM(n,e){e===0&&(n.mode&1?(e=Cc,Cc<<=1,!(Cc&130023424)&&(Cc=4194304)):e=1);var t=ai();n=_s(n,e),n!==null&&(mc(n,e,t),gi(n,t))}function sA(n){var e=n.memoizedState,t=0;e!==null&&(t=e.retryLane),bM(n,t)}function oA(n,e){var t=0;switch(n.tag){case 13:var i=n.stateNode,r=n.memoizedState;r!==null&&(t=r.retryLane);break;case 19:i=n.stateNode;break;default:throw Error(fe(314))}i!==null&&i.delete(e),bM(n,t)}var PM;PM=function(n,e,t){if(n!==null)if(n.memoizedProps!==e.pendingProps||pi.current)hi=!0;else{if(!(n.lanes&t)&&!(e.flags&128))return hi=!1,jw(n,e,t);hi=!!(n.flags&131072)}else hi=!1,zt&&e.flags&1048576&&Iy(e,fd,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Nf(n,e),n=e.pendingProps;var r=ml(e,Kn.current);il(e,t),r=T_(null,e,i,n,r,t);var s=w_();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,mi(i)?(s=!0,ud(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,x_(e),r.updater=Kd,e.stateNode=r,r._reactInternals=e,dm(e,i,n,t),e=mm(null,e,i,!0,s,t)):(e.tag=0,zt&&s&&d_(e),ni(null,e,r,t),e=e.child),e;case 16:i=e.elementType;e:{switch(Nf(n,e),n=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=lA(i),n=pr(i,n),r){case 0:e=pm(null,e,i,n,t);break e;case 1:e=Cv(null,e,i,n,t);break e;case 11:e=wv(null,e,i,n,t);break e;case 14:e=Av(null,e,i,pr(i.type,n),t);break e}throw Error(fe(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:pr(i,r),pm(n,e,i,r,t);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:pr(i,r),Cv(n,e,i,r,t);case 3:e:{if(hM(e),n===null)throw Error(fe(387));i=e.pendingProps,s=e.memoizedState,r=s.element,zy(n,e),pd(e,i,null,t);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=xl(Error(fe(423)),e),e=Rv(n,e,i,t,r);break e}else if(i!==r){r=xl(Error(fe(424)),e),e=Rv(n,e,i,t,r);break e}else for(Ui=Qs(e.stateNode.containerInfo.firstChild),ki=e,zt=!0,gr=null,t=ky(e,null,i,t),e.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(gl(),i===r){e=vs(n,e,t);break e}ni(n,e,i,t)}e=e.child}return e;case 5:return Vy(e),n===null&&um(e),i=e.type,r=e.pendingProps,s=n!==null?n.memoizedProps:null,o=r.children,rm(i,r)?o=null:s!==null&&rm(i,s)&&(e.flags|=32),dM(n,e),ni(n,e,o,t),e.child;case 6:return n===null&&um(e),null;case 13:return pM(n,e,t);case 4:return S_(e,e.stateNode.containerInfo),i=e.pendingProps,n===null?e.child=_l(e,null,i,t):ni(n,e,i,t),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:pr(i,r),wv(n,e,i,r,t);case 7:return ni(n,e,e.pendingProps,t),e.child;case 8:return ni(n,e,e.pendingProps.children,t),e.child;case 12:return ni(n,e,e.pendingProps.children,t),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,Ut(dd,i._currentValue),i._currentValue=o,s!==null)if(yr(s.value,o)){if(s.children===r.children&&!pi.current){e=vs(n,e,t);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=fs(-1,t&-t),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=t,l=s.alternate,l!==null&&(l.lanes|=t),cm(s.return,t,e),a.lanes|=t;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(fe(341));o.lanes|=t,a=o.alternate,a!==null&&(a.lanes|=t),cm(o,t,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}ni(n,e,r.children,t),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,il(e,t),r=or(r),i=i(r),e.flags|=1,ni(n,e,i,t),e.child;case 14:return i=e.type,r=pr(i,e.pendingProps),r=pr(i.type,r),Av(n,e,i,r,t);case 15:return cM(n,e,e.type,e.pendingProps,t);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:pr(i,r),Nf(n,e),e.tag=1,mi(i)?(n=!0,ud(e)):n=!1,il(e,t),aM(e,i,r),dm(e,i,r,t),mm(null,e,i,!0,n,t);case 19:return mM(n,e,t);case 22:return fM(n,e,t)}throw Error(fe(156,e.tag))};function DM(n,e){return ry(n,e)}function aA(n,e,t,i){this.tag=n,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function tr(n,e,t,i){return new aA(n,e,t,i)}function U_(n){return n=n.prototype,!(!n||!n.isReactComponent)}function lA(n){if(typeof n=="function")return U_(n)?1:0;if(n!=null){if(n=n.$$typeof,n===e_)return 11;if(n===t_)return 14}return 2}function no(n,e){var t=n.alternate;return t===null?(t=tr(n.tag,e,n.key,n.mode),t.elementType=n.elementType,t.type=n.type,t.stateNode=n.stateNode,t.alternate=n,n.alternate=t):(t.pendingProps=e,t.type=n.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=n.flags&14680064,t.childLanes=n.childLanes,t.lanes=n.lanes,t.child=n.child,t.memoizedProps=n.memoizedProps,t.memoizedState=n.memoizedState,t.updateQueue=n.updateQueue,e=n.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},t.sibling=n.sibling,t.index=n.index,t.ref=n.ref,t}function Ff(n,e,t,i,r,s){var o=2;if(i=n,typeof n=="function")U_(n)&&(o=1);else if(typeof n=="string")o=5;else e:switch(n){case Ba:return Ho(t.children,r,s,e);case Jg:o=8,r|=8;break;case Fp:return n=tr(12,t,e,r|2),n.elementType=Fp,n.lanes=s,n;case Op:return n=tr(13,t,e,r),n.elementType=Op,n.lanes=s,n;case kp:return n=tr(19,t,e,r),n.elementType=kp,n.lanes=s,n;case VS:return Jd(t,r,s,e);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case BS:o=10;break e;case zS:o=9;break e;case e_:o=11;break e;case t_:o=14;break e;case Fs:o=16,i=null;break e}throw Error(fe(130,n==null?n:typeof n,""))}return e=tr(o,t,e,r),e.elementType=n,e.type=i,e.lanes=s,e}function Ho(n,e,t,i){return n=tr(7,n,i,e),n.lanes=t,n}function Jd(n,e,t,i){return n=tr(22,n,i,e),n.elementType=VS,n.lanes=t,n.stateNode={isHidden:!1},n}function Fh(n,e,t){return n=tr(6,n,null,e),n.lanes=t,n}function Oh(n,e,t){return e=tr(4,n.children!==null?n.children:[],n.key,e),e.lanes=t,e.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},e}function uA(n,e,t,i,r){this.tag=e,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=_h(0),this.expirationTimes=_h(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=_h(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function F_(n,e,t,i,r,s,o,a,l){return n=new uA(n,e,t,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=tr(3,null,null,e),n.current=s,s.stateNode=n,s.memoizedState={element:i,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},x_(s),n}function cA(n,e,t){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ka,key:i==null?null:""+i,children:n,containerInfo:e,implementation:t}}function LM(n){if(!n)return lo;n=n._reactInternals;e:{if(aa(n)!==n||n.tag!==1)throw Error(fe(170));var e=n;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(mi(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(fe(171))}if(n.tag===1){var t=n.type;if(mi(t))return Ly(n,t,e)}return e}function NM(n,e,t,i,r,s,o,a,l){return n=F_(t,i,!0,n,r,s,o,a,l),n.context=LM(null),t=n.current,i=ai(),r=to(t),s=fs(i,r),s.callback=e??null,Js(t,s,r),n.current.lanes=r,mc(n,r,i),gi(n,i),n}function eh(n,e,t,i){var r=e.current,s=ai(),o=to(r);return t=LM(t),e.context===null?e.context=t:e.pendingContext=t,e=fs(s,o),e.payload={element:n},i=i===void 0?null:i,i!==null&&(e.callback=i),n=Js(r,e,o),n!==null&&(xr(n,r,o,s),Pf(n,r,o)),o}function Md(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function kv(n,e){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var t=n.retryLane;n.retryLane=t!==0&&t<e?t:e}}function O_(n,e){kv(n,e),(n=n.alternate)&&kv(n,e)}function fA(){return null}var IM=typeof reportError=="function"?reportError:function(n){console.error(n)};function k_(n){this._internalRoot=n}th.prototype.render=k_.prototype.render=function(n){var e=this._internalRoot;if(e===null)throw Error(fe(409));eh(n,e,null,null)};th.prototype.unmount=k_.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var e=n.containerInfo;ea(function(){eh(null,n,null,null)}),e[gs]=null}};function th(n){this._internalRoot=n}th.prototype.unstable_scheduleHydration=function(n){if(n){var e=fy();n={blockedOn:null,target:n,priority:e};for(var t=0;t<ks.length&&e!==0&&e<ks[t].priority;t++);ks.splice(t,0,n),t===0&&hy(n)}};function B_(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function nh(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function Bv(){}function dA(n,e,t,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var u=Md(o);s.call(u)}}var o=NM(e,i,n,0,null,!1,!1,"",Bv);return n._reactRootContainer=o,n[gs]=o.current,Yu(n.nodeType===8?n.parentNode:n),ea(),o}for(;r=n.lastChild;)n.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var u=Md(l);a.call(u)}}var l=F_(n,0,!1,null,null,!1,!1,"",Bv);return n._reactRootContainer=l,n[gs]=l.current,Yu(n.nodeType===8?n.parentNode:n),ea(function(){eh(e,l,t,i)}),l}function ih(n,e,t,i,r){var s=t._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=Md(o);a.call(l)}}eh(e,o,n,r)}else o=dA(t,e,n,r,i);return Md(o)}uy=function(n){switch(n.tag){case 3:var e=n.stateNode;if(e.current.memoizedState.isDehydrated){var t=su(e.pendingLanes);t!==0&&(r_(e,t|1),gi(e,sn()),!(xt&6)&&(Sl=sn()+500,vo()))}break;case 13:ea(function(){var i=_s(n,1);if(i!==null){var r=ai();xr(i,n,1,r)}}),O_(n,1)}};s_=function(n){if(n.tag===13){var e=_s(n,134217728);if(e!==null){var t=ai();xr(e,n,134217728,t)}O_(n,134217728)}};cy=function(n){if(n.tag===13){var e=to(n),t=_s(n,e);if(t!==null){var i=ai();xr(t,n,e,i)}O_(n,e)}};fy=function(){return Tt};dy=function(n,e){var t=Tt;try{return Tt=n,e()}finally{Tt=t}};qp=function(n,e,t){switch(e){case"input":if(Vp(n,t),e=t.name,t.type==="radio"&&e!=null){for(t=n;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<t.length;e++){var i=t[e];if(i!==n&&i.form===n.form){var r=jd(i);if(!r)throw Error(fe(90));GS(i),Vp(i,r)}}}break;case"textarea":XS(n,t);break;case"select":e=t.value,e!=null&&Ja(n,!!t.multiple,e,!1)}};QS=L_;JS=ea;var hA={usingClientEntryPoint:!1,Events:[_c,Ga,jd,KS,ZS,L_]},Wl={findFiberByHostInstance:Io,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},pA={bundleType:Wl.bundleType,version:Wl.version,rendererPackageName:Wl.rendererPackageName,rendererConfig:Wl.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Es.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=ny(n),n===null?null:n.stateNode},findFiberByHostInstance:Wl.findFiberByHostInstance||fA,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var kc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!kc.isDisabled&&kc.supportsFiber)try{Gd=kc.inject(pA),zr=kc}catch{}}Gi.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=hA;Gi.createPortal=function(n,e){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!B_(e))throw Error(fe(200));return cA(n,e,null,t)};Gi.createRoot=function(n,e){if(!B_(n))throw Error(fe(299));var t=!1,i="",r=IM;return e!=null&&(e.unstable_strictMode===!0&&(t=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=F_(n,1,!1,null,null,t,!1,i,r),n[gs]=e.current,Yu(n.nodeType===8?n.parentNode:n),new k_(e)};Gi.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var e=n._reactInternals;if(e===void 0)throw typeof n.render=="function"?Error(fe(188)):(n=Object.keys(n).join(","),Error(fe(268,n)));return n=ny(e),n=n===null?null:n.stateNode,n};Gi.flushSync=function(n){return ea(n)};Gi.hydrate=function(n,e,t){if(!nh(e))throw Error(fe(200));return ih(null,n,e,!0,t)};Gi.hydrateRoot=function(n,e,t){if(!B_(n))throw Error(fe(405));var i=t!=null&&t.hydratedSources||null,r=!1,s="",o=IM;if(t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(s=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),e=NM(e,null,n,1,t??null,r,!1,s,o),n[gs]=e.current,Yu(n),i)for(n=0;n<i.length;n++)t=i[n],r=t._getVersion,r=r(t._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[t,r]:e.mutableSourceEagerHydrationData.push(t,r);return new th(e)};Gi.render=function(n,e,t){if(!nh(e))throw Error(fe(200));return ih(null,n,e,!1,t)};Gi.unmountComponentAtNode=function(n){if(!nh(n))throw Error(fe(40));return n._reactRootContainer?(ea(function(){ih(null,null,n,!1,function(){n._reactRootContainer=null,n[gs]=null})}),!0):!1};Gi.unstable_batchedUpdates=L_;Gi.unstable_renderSubtreeIntoContainer=function(n,e,t,i){if(!nh(t))throw Error(fe(200));if(n==null||n._reactInternals===void 0)throw Error(fe(38));return ih(n,e,t,!1,i)};Gi.version="18.3.1-next-f1338f8080-20240426";function UM(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(UM)}catch(n){console.error(n)}}UM(),US.exports=Gi;var mA=US.exports,zv=mA;Ip.createRoot=zv.createRoot,Ip.hydrateRoot=zv.hydrateRoot;function is(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function FM(n,e){n.prototype=Object.create(e.prototype),n.prototype.constructor=n,n.__proto__=e}/*!
 * GSAP 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Bi={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},tc={duration:.5,overwrite:!1,delay:0},z_,Nn,Vt,nr=1e8,Dt=1/nr,Cm=Math.PI*2,gA=Cm/4,_A=0,OM=Math.sqrt,vA=Math.cos,xA=Math.sin,Rn=function(e){return typeof e=="string"},Qt=function(e){return typeof e=="function"},xs=function(e){return typeof e=="number"},V_=function(e){return typeof e>"u"},Yr=function(e){return typeof e=="object"},_i=function(e){return e!==!1},H_=function(){return typeof window<"u"},Bc=function(e){return Qt(e)||Rn(e)},kM=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},qn=Array.isArray,SA=/random\([^)]+\)/g,yA=/,\s*/g,Vv=/(?:-?\.?\d|\.)+/gi,BM=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Ka=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,kh=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,zM=/[+-]=-?[.\d]+/,MA=/[^,'"\[\]\s]+/gi,EA=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Xt,br,Rm,G_,Vi={},Ed={},VM,HM=function(e){return(Ed=yl(e,Vi))&&Mi},W_=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},nc=function(e,t){return!t&&console.warn(e)},GM=function(e,t){return e&&(Vi[e]=t)&&Ed&&(Ed[e]=t)||Vi},ic=function(){return 0},TA={suppressEvents:!0,isStart:!0,kill:!1},Of={suppressEvents:!0,kill:!1},wA={suppressEvents:!0},X_={},io=[],bm={},WM,Pi={},Bh={},Hv=30,kf=[],Y_="",j_=function(e){var t=e[0],i,r;if(Yr(t)||Qt(t)||(e=[e]),!(i=(t._gsap||{}).harness)){for(r=kf.length;r--&&!kf[r].targetTest(t););i=kf[r]}for(r=e.length;r--;)e[r]&&(e[r]._gsap||(e[r]._gsap=new dE(e[r],i)))||e.splice(r,1);return e},Go=function(e){return e._gsap||j_(ir(e))[0]._gsap},XM=function(e,t,i){return(i=e[t])&&Qt(i)?e[t]():V_(i)&&e.getAttribute&&e.getAttribute(t)||i},vi=function(e,t){return(e=e.split(",")).forEach(t)||e},rn=function(e){return Math.round(e*1e5)/1e5||0},Gt=function(e){return Math.round(e*1e7)/1e7||0},sl=function(e,t){var i=t.charAt(0),r=parseFloat(t.substr(2));return e=parseFloat(e),i==="+"?e+r:i==="-"?e-r:i==="*"?e*r:e/r},AA=function(e,t){for(var i=t.length,r=0;e.indexOf(t[r])<0&&++r<i;);return r<i},Td=function(){var e=io.length,t=io.slice(0),i,r;for(bm={},io.length=0,i=0;i<e;i++)r=t[i],r&&r._lazy&&(r.render(r._lazy[0],r._lazy[1],!0)._lazy=0)},q_=function(e){return!!(e._initted||e._startAt||e.add)},YM=function(e,t,i,r){io.length&&!Nn&&Td(),e.render(t,i,!!(Nn&&t<0&&q_(e))),io.length&&!Nn&&Td()},jM=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(MA).length<2?t:Rn(e)?e.trim():e},qM=function(e){return e},Hi=function(e,t){for(var i in t)i in e||(e[i]=t[i]);return e},CA=function(e){return function(t,i){for(var r in i)r in t||r==="duration"&&e||r==="ease"||(t[r]=i[r])}},yl=function(e,t){for(var i in t)e[i]=t[i];return e},Gv=function n(e,t){for(var i in t)i!=="__proto__"&&i!=="constructor"&&i!=="prototype"&&(e[i]=Yr(t[i])?n(e[i]||(e[i]={}),t[i]):t[i]);return e},wd=function(e,t){var i={},r;for(r in e)r in t||(i[r]=e[r]);return i},Au=function(e){var t=e.parent||Xt,i=e.keyframes?CA(qn(e.keyframes)):Hi;if(_i(e.inherit))for(;t;)i(e,t.vars.defaults),t=t.parent||t._dp;return e},RA=function(e,t){for(var i=e.length,r=i===t.length;r&&i--&&e[i]===t[i];);return i<0},$M=function(e,t,i,r,s){var o=e[r],a;if(s)for(a=t[s];o&&o[s]>a;)o=o._prev;return o?(t._next=o._next,o._next=t):(t._next=e[i],e[i]=t),t._next?t._next._prev=t:e[r]=t,t._prev=o,t.parent=t._dp=e,t},rh=function(e,t,i,r){i===void 0&&(i="_first"),r===void 0&&(r="_last");var s=t._prev,o=t._next;s?s._next=o:e[i]===t&&(e[i]=o),o?o._prev=s:e[r]===t&&(e[r]=s),t._next=t._prev=t.parent=null},uo=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},Wo=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var i=e;i;)i._dirty=1,i=i.parent;return e},bA=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},Pm=function(e,t,i,r){return e._startAt&&(Nn?e._startAt.revert(Of):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,r))},PA=function n(e){return!e||e._ts&&n(e.parent)},Wv=function(e){return e._repeat?Ml(e._tTime,e=e.duration()+e._rDelay)*e:0},Ml=function(e,t){var i=Math.floor(e=Gt(e/t));return e&&i===e?i-1:i},Ad=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},sh=function(e){return e._end=Gt(e._start+(e._tDur/Math.abs(e._ts||e._rts||Dt)||0))},oh=function(e,t){var i=e._dp;return i&&i.smoothChildTiming&&e._ts&&(e._start=Gt(i._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),sh(e),i._dirty||Wo(i,e)),e},KM=function(e,t){var i;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(i=Ad(e.rawTime(),t),(!t._dur||xc(0,t.totalDuration(),i)-t._tTime>Dt)&&t.render(i,!0)),Wo(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(i=e;i._dp;)i.rawTime()>=0&&i.totalTime(i._tTime),i=i._dp;e._zTime=-Dt}},Nr=function(e,t,i,r){return t.parent&&uo(t),t._start=Gt((xs(i)?i:i||e!==Xt?qi(e,i,t):e._time)+t._delay),t._end=Gt(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),$M(e,t,"_first","_last",e._sort?"_start":0),Dm(t)||(e._recent=t),r||KM(e,t),e._ts<0&&oh(e,e._tTime),e},ZM=function(e,t){return(Vi.ScrollTrigger||W_("scrollTrigger",t))&&Vi.ScrollTrigger.create(t,e)},QM=function(e,t,i,r,s){if(K_(e,t,s),!e._initted)return 1;if(!i&&e._pt&&!Nn&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&WM!==Li.frame)return io.push(e),e._lazy=[s,r],1},DA=function n(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||n(t))},Dm=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},LA=function(e,t,i,r){var s=e.ratio,o=t<0||!t&&(!e._start&&DA(e)&&!(!e._initted&&Dm(e))||(e._ts<0||e._dp._ts<0)&&!Dm(e))?0:1,a=e._rDelay,l=0,u,c,d;if(a&&e._repeat&&(l=xc(0,e._tDur,t),c=Ml(l,a),e._yoyo&&c&1&&(o=1-o),c!==Ml(e._tTime,a)&&(s=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==s||Nn||r||e._zTime===Dt||!t&&e._zTime){if(!e._initted&&QM(e,t,r,i,l))return;for(d=e._zTime,e._zTime=t||(i?Dt:0),i||(i=t&&!d),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=l,u=e._pt;u;)u.r(o,u.d),u=u._next;t<0&&Pm(e,t,i,!0),e._onUpdate&&!i&&Fi(e,"onUpdate"),l&&e._repeat&&!i&&e.parent&&Fi(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===o&&(o&&uo(e,1),!i&&!Nn&&(Fi(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},NA=function(e,t,i){var r;if(i>t)for(r=e._first;r&&r._start<=i;){if(r.data==="isPause"&&r._start>t)return r;r=r._next}else for(r=e._last;r&&r._start>=i;){if(r.data==="isPause"&&r._start<t)return r;r=r._prev}},El=function(e,t,i,r){var s=e._repeat,o=Gt(t)||0,a=e._tTime/e._tDur;return a&&!r&&(e._time*=o/e._dur),e._dur=o,e._tDur=s?s<0?1e10:Gt(o*(s+1)+e._rDelay*s):o,a>0&&!r&&oh(e,e._tTime=e._tDur*a),e.parent&&sh(e),i||Wo(e.parent,e),e},Xv=function(e){return e instanceof di?Wo(e):El(e,e._dur)},IA={_start:0,endTime:ic,totalDuration:ic},qi=function n(e,t,i){var r=e.labels,s=e._recent||IA,o=e.duration()>=nr?s.endTime(!1):e._dur,a,l,u;return Rn(t)&&(isNaN(t)||t in r)?(l=t.charAt(0),u=t.substr(-1)==="%",a=t.indexOf("="),l==="<"||l===">"?(a>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(u?(a<0?s:i).totalDuration()/100:1)):a<0?(t in r||(r[t]=o),r[t]):(l=parseFloat(t.charAt(a-1)+t.substr(a+1)),u&&i&&(l=l/100*(qn(i)?i[0]:i).totalDuration()),a>1?n(e,t.substr(0,a-1),i)+l:o+l)):t==null?o:+t},Cu=function(e,t,i){var r=xs(t[1]),s=(r?2:1)+(e<2?0:1),o=t[s],a,l;if(r&&(o.duration=t[1]),o.parent=i,e){for(a=o,l=i;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=_i(l.vars.inherit)&&l.parent;o.immediateRender=_i(a.immediateRender),e<2?o.runBackwards=1:o.startAt=t[s-1]}return new fn(t[0],o,t[s+1])},xo=function(e,t){return e||e===0?t(e):t},xc=function(e,t,i){return i<e?e:i>t?t:i},Xn=function(e,t){return!Rn(e)||!(t=EA.exec(e))?"":t[1]},UA=function(e,t,i){return xo(i,function(r){return xc(e,t,r)})},Lm=[].slice,JM=function(e,t){return e&&Yr(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&Yr(e[0]))&&!e.nodeType&&e!==br},FA=function(e,t,i){return i===void 0&&(i=[]),e.forEach(function(r){var s;return Rn(r)&&!t||JM(r,1)?(s=i).push.apply(s,ir(r)):i.push(r)})||i},ir=function(e,t,i){return Vt&&!t&&Vt.selector?Vt.selector(e):Rn(e)&&!i&&(Rm||!Tl())?Lm.call((t||G_).querySelectorAll(e),0):qn(e)?FA(e,i):JM(e)?Lm.call(e,0):e?[e]:[]},Nm=function(e){return e=ir(e)[0]||nc("Invalid scope")||{},function(t){var i=e.current||e.nativeElement||e;return ir(t,i.querySelectorAll?i:i===e?nc("Invalid scope")||G_.createElement("div"):e)}},eE=function(e){return e.sort(function(){return .5-Math.random()})},tE=function(e){if(Qt(e))return e;var t=Yr(e)?e:{each:e},i=Xo(t.ease),r=t.from||0,s=parseFloat(t.base)||0,o={},a=r>0&&r<1,l=isNaN(r)||a,u=t.axis,c=r,d=r;return Rn(r)?c=d={center:.5,edges:.5,end:1}[r]||0:!a&&l&&(c=r[0],d=r[1]),function(f,h,m){var v=(m||t).length,_=o[v],p,g,x,y,T,E,w,S,C;if(!_){if(C=t.grid==="auto"?0:(t.grid||[1,nr])[1],!C){for(w=-nr;w<(w=m[C++].getBoundingClientRect().left)&&C<v;);C<v&&C--}for(_=o[v]=[],p=l?Math.min(C,v)*c-.5:r%C,g=C===nr?0:l?v*d/C-.5:r/C|0,w=0,S=nr,E=0;E<v;E++)x=E%C-p,y=g-(E/C|0),_[E]=T=u?Math.abs(u==="y"?y:x):OM(x*x+y*y),T>w&&(w=T),T<S&&(S=T);r==="random"&&eE(_),_.max=w-S,_.min=S,_.v=v=(parseFloat(t.amount)||parseFloat(t.each)*(C>v?v-1:u?u==="y"?v/C:C:Math.max(C,v/C))||0)*(r==="edges"?-1:1),_.b=v<0?s-v:s,_.u=Xn(t.amount||t.each)||0,i=i&&v<0?$A(i):i}return v=(_[f]-_.min)/_.max||0,Gt(_.b+(i?i(v):v)*_.v)+_.u}},Im=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(i){var r=Gt(Math.round(parseFloat(i)/e)*e*t);return(r-r%1)/t+(xs(i)?0:Xn(i))}},nE=function(e,t){var i=qn(e),r,s;return!i&&Yr(e)&&(r=i=e.radius||nr,e.values?(e=ir(e.values),(s=!xs(e[0]))&&(r*=r)):e=Im(e.increment)),xo(t,i?Qt(e)?function(o){return s=e(o),Math.abs(s-o)<=r?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),u=nr,c=0,d=e.length,f,h;d--;)s?(f=e[d].x-a,h=e[d].y-l,f=f*f+h*h):f=Math.abs(e[d]-a),f<u&&(u=f,c=d);return c=!r||u<=r?e[c]:o,s||c===o||xs(o)?c:c+Xn(o)}:Im(e))},iE=function(e,t,i,r){return xo(qn(e)?!t:i===!0?!!(i=0):!r,function(){return qn(e)?e[~~(Math.random()*e.length)]:(i=i||1e-5)&&(r=i<1?Math.pow(10,(i+"").length-2):1)&&Math.floor(Math.round((e-i/2+Math.random()*(t-e+i*.99))/i)*i*r)/r})},OA=function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return function(r){return t.reduce(function(s,o){return o(s)},r)}},kA=function(e,t){return function(i){return e(parseFloat(i))+(t||Xn(i))}},BA=function(e,t,i){return sE(e,t,0,1,i)},rE=function(e,t,i){return xo(i,function(r){return e[~~t(r)]})},zA=function n(e,t,i){var r=t-e;return qn(e)?rE(e,n(0,e.length),t):xo(i,function(s){return(r+(s-e)%r)%r+e})},VA=function n(e,t,i){var r=t-e,s=r*2;return qn(e)?rE(e,n(0,e.length-1),t):xo(i,function(o){return o=(s+(o-e)%s)%s||0,e+(o>r?s-o:o)})},rc=function(e){return e.replace(SA,function(t){var i=t.indexOf("[")+1,r=t.substring(i||7,i?t.indexOf("]"):t.length-1).split(yA);return iE(i?r:+r[0],i?0:+r[1],+r[2]||1e-5)})},sE=function(e,t,i,r,s){var o=t-e,a=r-i;return xo(s,function(l){return i+((l-e)/o*a||0)})},HA=function n(e,t,i,r){var s=isNaN(e+t)?0:function(h){return(1-h)*e+h*t};if(!s){var o=Rn(e),a={},l,u,c,d,f;if(i===!0&&(r=1)&&(i=null),o)e={p:e},t={p:t};else if(qn(e)&&!qn(t)){for(c=[],d=e.length,f=d-2,u=1;u<d;u++)c.push(n(e[u-1],e[u]));d--,s=function(m){m*=d;var v=Math.min(f,~~m);return c[v](m-v)},i=t}else r||(e=yl(qn(e)?[]:{},e));if(!c){for(l in t)$_.call(a,e,l,"get",t[l]);s=function(m){return J_(m,a)||(o?e.p:e)}}}return xo(i,s)},Yv=function(e,t,i){var r=e.labels,s=nr,o,a,l;for(o in r)a=r[o]-t,a<0==!!i&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},Fi=function(e,t,i){var r=e.vars,s=r[t],o=Vt,a=e._ctx,l,u,c;if(s)return l=r[t+"Params"],u=r.callbackScope||e,i&&io.length&&Td(),a&&(Vt=a),c=l?s.apply(u,l):s.call(u),Vt=o,c},au=function(e){return uo(e),e.scrollTrigger&&e.scrollTrigger.kill(!!Nn),e.progress()<1&&Fi(e,"onInterrupt"),e},Za,oE=[],aE=function(e){if(e)if(e=!e.name&&e.default||e,H_()||e.headless){var t=e.name,i=Qt(e),r=t&&!i&&e.init?function(){this._props=[]}:e,s={init:ic,render:J_,add:$_,kill:sC,modifier:rC,rawVars:0},o={targetTest:0,get:0,getSetter:Q_,aliases:{},register:0};if(Tl(),e!==r){if(Pi[t])return;Hi(r,Hi(wd(e,s),o)),yl(r.prototype,yl(s,wd(e,o))),Pi[r.prop=t]=r,e.targetTest&&(kf.push(r),X_[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}GM(t,r),e.register&&e.register(Mi,r,xi)}else oE.push(e)},Pt=255,lu={aqua:[0,Pt,Pt],lime:[0,Pt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Pt],navy:[0,0,128],white:[Pt,Pt,Pt],olive:[128,128,0],yellow:[Pt,Pt,0],orange:[Pt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Pt,0,0],pink:[Pt,192,203],cyan:[0,Pt,Pt],transparent:[Pt,Pt,Pt,0]},zh=function(e,t,i){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(i-t)*e*6:e<.5?i:e*3<2?t+(i-t)*(2/3-e)*6:t)*Pt+.5|0},lE=function(e,t,i){var r=e?xs(e)?[e>>16,e>>8&Pt,e&Pt]:0:lu.black,s,o,a,l,u,c,d,f,h,m;if(!r){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),lu[e])r=lu[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),o=e.charAt(2),a=e.charAt(3),e="#"+s+s+o+o+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return r=parseInt(e.substr(1,6),16),[r>>16,r>>8&Pt,r&Pt,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),r=[e>>16,e>>8&Pt,e&Pt]}else if(e.substr(0,3)==="hsl"){if(r=m=e.match(Vv),!t)l=+r[0]%360/360,u=+r[1]/100,c=+r[2]/100,o=c<=.5?c*(u+1):c+u-c*u,s=c*2-o,r.length>3&&(r[3]*=1),r[0]=zh(l+1/3,s,o),r[1]=zh(l,s,o),r[2]=zh(l-1/3,s,o);else if(~e.indexOf("="))return r=e.match(BM),i&&r.length<4&&(r[3]=1),r}else r=e.match(Vv)||lu.transparent;r=r.map(Number)}return t&&!m&&(s=r[0]/Pt,o=r[1]/Pt,a=r[2]/Pt,d=Math.max(s,o,a),f=Math.min(s,o,a),c=(d+f)/2,d===f?l=u=0:(h=d-f,u=c>.5?h/(2-d-f):h/(d+f),l=d===s?(o-a)/h+(o<a?6:0):d===o?(a-s)/h+2:(s-o)/h+4,l*=60),r[0]=~~(l+.5),r[1]=~~(u*100+.5),r[2]=~~(c*100+.5)),i&&r.length<4&&(r[3]=1),r},uE=function(e){var t=[],i=[],r=-1;return e.split(ro).forEach(function(s){var o=s.match(Ka)||[];t.push.apply(t,o),i.push(r+=o.length+1)}),t.c=i,t},jv=function(e,t,i){var r="",s=(e+r).match(ro),o=t?"hsla(":"rgba(",a=0,l,u,c,d;if(!s)return e;if(s=s.map(function(f){return(f=lE(f,t,1))&&o+(t?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),i&&(c=uE(e),l=i.c,l.join(r)!==c.c.join(r)))for(u=e.replace(ro,"1").split(Ka),d=u.length-1;a<d;a++)r+=u[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(c.length?c:s.length?s:i).shift());if(!u)for(u=e.split(ro),d=u.length-1;a<d;a++)r+=u[a]+s[a];return r+u[d]},ro=function(){var n="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in lu)n+="|"+e+"\\b";return new RegExp(n+")","gi")}(),GA=/hsl[a]?\(/,cE=function(e){var t=e.join(" "),i;if(ro.lastIndex=0,ro.test(t))return i=GA.test(t),e[1]=jv(e[1],i),e[0]=jv(e[0],i,uE(e[1])),!0},sc,Li=function(){var n=Date.now,e=500,t=33,i=n(),r=i,s=1e3/240,o=s,a=[],l,u,c,d,f,h,m=function v(_){var p=n()-r,g=_===!0,x,y,T,E;if((p>e||p<0)&&(i+=p-t),r+=p,T=r-i,x=T-o,(x>0||g)&&(E=++d.frame,f=T-d.time*1e3,d.time=T=T/1e3,o+=x+(x>=s?4:s-x),y=1),g||(l=u(v)),y)for(h=0;h<a.length;h++)a[h](T,f,E,_)};return d={time:0,frame:0,tick:function(){m(!0)},deltaRatio:function(_){return f/(1e3/(_||60))},wake:function(){VM&&(!Rm&&H_()&&(br=Rm=window,G_=br.document||{},Vi.gsap=Mi,(br.gsapVersions||(br.gsapVersions=[])).push(Mi.version),HM(Ed||br.GreenSockGlobals||!br.gsap&&br||{}),oE.forEach(aE)),c=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&d.sleep(),u=c||function(_){return setTimeout(_,o-d.time*1e3+1|0)},sc=1,m(2))},sleep:function(){(c?cancelAnimationFrame:clearTimeout)(l),sc=0,u=ic},lagSmoothing:function(_,p){e=_||1/0,t=Math.min(p||33,e)},fps:function(_){s=1e3/(_||240),o=d.time*1e3+s},add:function(_,p,g){var x=p?function(y,T,E,w){_(y,T,E,w),d.remove(x)}:_;return d.remove(_),a[g?"unshift":"push"](x),Tl(),x},remove:function(_,p){~(p=a.indexOf(_))&&a.splice(p,1)&&h>=p&&h--},_listeners:a},d}(),Tl=function(){return!sc&&Li.wake()},gt={},WA=/^[\d.\-M][\d.\-,\s]/,XA=/["']/g,YA=function(e){for(var t={},i=e.substr(1,e.length-3).split(":"),r=i[0],s=1,o=i.length,a,l,u;s<o;s++)l=i[s],a=s!==o-1?l.lastIndexOf(","):l.length,u=l.substr(0,a),t[r]=isNaN(u)?u.replace(XA,"").trim():+u,r=l.substr(a+1).trim();return t},jA=function(e){var t=e.indexOf("(")+1,i=e.indexOf(")"),r=e.indexOf("(",t);return e.substring(t,~r&&r<i?e.indexOf(")",i+1):i)},qA=function(e){var t=(e+"").split("("),i=gt[t[0]];return i&&t.length>1&&i.config?i.config.apply(null,~e.indexOf("{")?[YA(t[1])]:jA(e).split(",").map(jM)):gt._CE&&WA.test(e)?gt._CE("",e):i},$A=function(e){return function(t){return 1-e(1-t)}},Xo=function(e,t){return e&&(Qt(e)?e:gt[e]||qA(e))||t},la=function(e,t,i,r){i===void 0&&(i=function(l){return 1-t(1-l)}),r===void 0&&(r=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:i,easeInOut:r},o;return vi(e,function(a){gt[a]=Vi[a]=s,gt[o=a.toLowerCase()]=i;for(var l in s)gt[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=gt[a+"."+l]=s[l]}),s},fE=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},Vh=function n(e,t,i){var r=t>=1?t:1,s=(i||(e?.3:.45))/(t<1?t:1),o=s/Cm*(Math.asin(1/r)||0),a=function(c){return c===1?1:r*Math.pow(2,-10*c)*xA((c-o)*s)+1},l=e==="out"?a:e==="in"?function(u){return 1-a(1-u)}:fE(a);return s=Cm/s,l.config=function(u,c){return n(e,u,c)},l},Hh=function n(e,t){t===void 0&&(t=1.70158);var i=function(o){return o?--o*o*((t+1)*o+t)+1:0},r=e==="out"?i:e==="in"?function(s){return 1-i(1-s)}:fE(i);return r.config=function(s){return n(e,s)},r};vi("Linear,Quad,Cubic,Quart,Quint,Strong",function(n,e){var t=e<5?e+1:e;la(n+",Power"+(t-1),e?function(i){return Math.pow(i,t)}:function(i){return i},function(i){return 1-Math.pow(1-i,t)},function(i){return i<.5?Math.pow(i*2,t)/2:1-Math.pow((1-i)*2,t)/2})});gt.Linear.easeNone=gt.none=gt.Linear.easeIn;la("Elastic",Vh("in"),Vh("out"),Vh());(function(n,e){var t=1/e,i=2*t,r=2.5*t,s=function(a){return a<t?n*a*a:a<i?n*Math.pow(a-1.5/e,2)+.75:a<r?n*(a-=2.25/e)*a+.9375:n*Math.pow(a-2.625/e,2)+.984375};la("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);la("Expo",function(n){return Math.pow(2,10*(n-1))*n+n*n*n*n*n*n*(1-n)});la("Circ",function(n){return-(OM(1-n*n)-1)});la("Sine",function(n){return n===1?1:-vA(n*gA)+1});la("Back",Hh("in"),Hh("out"),Hh());gt.SteppedEase=gt.steps=Vi.SteppedEase={config:function(e,t){e===void 0&&(e=1);var i=1/e,r=e+(t?0:1),s=t?1:0,o=1-Dt;return function(a){return((r*xc(0,o,a)|0)+s)*i}}};tc.ease=gt["quad.out"];vi("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(n){return Y_+=n+","+n+"Params,"});var dE=function(e,t){this.id=_A++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:XM,this.set=t?t.getSetter:Q_},oc=function(){function n(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,El(this,+t.duration,1,1),this.data=t.data,Vt&&(this._ctx=Vt,Vt.data.push(this)),sc||Li.wake()}var e=n.prototype;return e.delay=function(i){return i||i===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+i-this._delay),this._delay=i,this):this._delay},e.duration=function(i){return arguments.length?this.totalDuration(this._repeat>0?i+(i+this._rDelay)*this._repeat:i):this.totalDuration()&&this._dur},e.totalDuration=function(i){return arguments.length?(this._dirty=0,El(this,this._repeat<0?i:(i-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(i,r){if(Tl(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(oh(this,i),!s._dp||s.parent||KM(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&i<this._tDur||this._ts<0&&i>0||!this._tDur&&!i)&&Nr(this._dp,this,this._start-this._delay)}return(this._tTime!==i||!this._dur&&!r||this._initted&&Math.abs(this._zTime)===Dt||!this._initted&&this._dur&&i||!i&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=i),YM(this,i,r)),this},e.time=function(i,r){return arguments.length?this.totalTime(Math.min(this.totalDuration(),i+Wv(this))%(this._dur+this._rDelay)||(i?this._dur:0),r):this._time},e.totalProgress=function(i,r){return arguments.length?this.totalTime(this.totalDuration()*i,r):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(i,r){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-i:i)+Wv(this),r):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(i,r){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(i-1)*s,r):this._repeat?Ml(this._tTime,s)+1:1},e.timeScale=function(i,r){if(!arguments.length)return this._rts===-Dt?0:this._rts;if(this._rts===i)return this;var s=this.parent&&this._ts?Ad(this.parent._time,this):this._tTime;return this._rts=+i||0,this._ts=this._ps||i===-Dt?0:this._rts,this.totalTime(xc(-Math.abs(this._delay),this.totalDuration(),s),r!==!1),sh(this),bA(this)},e.paused=function(i){return arguments.length?(this._ps!==i&&(this._ps=i,i?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Tl(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Dt&&(this._tTime-=Dt)))),this):this._ps},e.startTime=function(i){if(arguments.length){this._start=Gt(i);var r=this.parent||this._dp;return r&&(r._sort||!this.parent)&&Nr(r,this,this._start-this._delay),this}return this._start},e.endTime=function(i){return this._start+(_i(i)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(i){var r=this.parent||this._dp;return r?i&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Ad(r.rawTime(i),this):this._tTime:this._tTime},e.revert=function(i){i===void 0&&(i=wA);var r=Nn;return Nn=i,q_(this)&&(this.timeline&&this.timeline.revert(i),this.totalTime(-.01,i.suppressEvents)),this.data!=="nested"&&i.kill!==!1&&this.kill(),Nn=r,this},e.globalTime=function(i){for(var r=this,s=arguments.length?i:r.rawTime();r;)s=r._start+s/(Math.abs(r._ts)||1),r=r._dp;return!this.parent&&this._sat?this._sat.globalTime(i):s},e.repeat=function(i){return arguments.length?(this._repeat=i===1/0?-2:i,Xv(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(i){if(arguments.length){var r=this._time;return this._rDelay=i,Xv(this),r?this.time(r):this}return this._rDelay},e.yoyo=function(i){return arguments.length?(this._yoyo=i,this):this._yoyo},e.seek=function(i,r){return this.totalTime(qi(this,i),_i(r))},e.restart=function(i,r){return this.play().totalTime(i?-this._delay:0,_i(r)),this._dur||(this._zTime=-Dt),this},e.play=function(i,r){return i!=null&&this.seek(i,r),this.reversed(!1).paused(!1)},e.reverse=function(i,r){return i!=null&&this.seek(i||this.totalDuration(),r),this.reversed(!0).paused(!1)},e.pause=function(i,r){return i!=null&&this.seek(i,r),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(i){return arguments.length?(!!i!==this.reversed()&&this.timeScale(-this._rts||(i?-Dt:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-Dt,this},e.isActive=function(){var i=this.parent||this._dp,r=this._start,s;return!!(!i||this._ts&&this._initted&&i.isActive()&&(s=i.rawTime(!0))>=r&&s<this.endTime(!0)-Dt)},e.eventCallback=function(i,r,s){var o=this.vars;return arguments.length>1?(r?(o[i]=r,s&&(o[i+"Params"]=s),i==="onUpdate"&&(this._onUpdate=r)):delete o[i],this):o[i]},e.then=function(i){var r=this,s=r._prom;return new Promise(function(o){var a=Qt(i)?i:qM,l=function(){var c=r.then;r.then=null,s&&s(),Qt(a)&&(a=a(r))&&(a.then||a===r)&&(r.then=c),o(a),r.then=c};r._initted&&r.totalProgress()===1&&r._ts>=0||!r._tTime&&r._ts<0?l():r._prom=l})},e.kill=function(){au(this)},n}();Hi(oc.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Dt,_prom:0,_ps:!1,_rts:1});var di=function(n){FM(e,n);function e(i,r){var s;return i===void 0&&(i={}),s=n.call(this,i)||this,s.labels={},s.smoothChildTiming=!!i.smoothChildTiming,s.autoRemoveChildren=!!i.autoRemoveChildren,s._sort=_i(i.sortChildren),Xt&&Nr(i.parent||Xt,is(s),r),i.reversed&&s.reverse(),i.paused&&s.paused(!0),i.scrollTrigger&&ZM(is(s),i.scrollTrigger),s}var t=e.prototype;return t.to=function(r,s,o){return Cu(0,arguments,this),this},t.from=function(r,s,o){return Cu(1,arguments,this),this},t.fromTo=function(r,s,o,a){return Cu(2,arguments,this),this},t.set=function(r,s,o){return s.duration=0,s.parent=this,Au(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new fn(r,s,qi(this,o),1),this},t.call=function(r,s,o){return Nr(this,fn.delayedCall(0,r,s),o)},t.staggerTo=function(r,s,o,a,l,u,c){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=u,o.onCompleteParams=c,o.parent=this,new fn(r,o,qi(this,l)),this},t.staggerFrom=function(r,s,o,a,l,u,c){return o.runBackwards=1,Au(o).immediateRender=_i(o.immediateRender),this.staggerTo(r,s,o,a,l,u,c)},t.staggerFromTo=function(r,s,o,a,l,u,c,d){return a.startAt=o,Au(a).immediateRender=_i(a.immediateRender),this.staggerTo(r,s,a,l,u,c,d)},t.render=function(r,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,u=this._dur,c=r<=0?0:Gt(r),d=this._zTime<0!=r<0&&(this._initted||!u),f,h,m,v,_,p,g,x,y,T,E,w;if(this!==Xt&&c>l&&r>=0&&(c=l),c!==this._tTime||o||d){if(a!==this._time&&u&&(c+=this._time-a,r+=this._time-a),f=c,y=this._start,x=this._ts,p=!x,d&&(u||(a=this._zTime),(r||!s)&&(this._zTime=r)),this._repeat){if(E=this._yoyo,_=u+this._rDelay,this._repeat<-1&&r<0)return this.totalTime(_*100+r,s,o);if(f=Gt(c%_),c===l?(v=this._repeat,f=u):(T=Gt(c/_),v=~~T,v&&v===T&&(f=u,v--),f>u&&(f=u)),T=Ml(this._tTime,_),!a&&this._tTime&&T!==v&&this._tTime-T*_-this._dur<=0&&(T=v),E&&v&1&&(f=u-f,w=1),v!==T&&!this._lock){var S=E&&T&1,C=S===(E&&v&1);if(v<T&&(S=!S),a=S?0:c%u?u:c,this._lock=1,this.render(a||(w?0:Gt(v*_)),s,!u)._lock=0,this._tTime=c,!s&&this.parent&&Fi(this,"onRepeat"),this.vars.repeatRefresh&&!w&&(this.invalidate()._lock=1,T=v),a&&a!==this._time||p!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(u=this._dur,l=this._tDur,C&&(this._lock=2,a=S?u:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!w&&this.invalidate()),this._lock=0,!this._ts&&!p)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(g=NA(this,Gt(a),Gt(f)),g&&(c-=f-(f=g._start))),this._tTime=c,this._time=f,this._act=!!x,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=r,a=0),!a&&c&&u&&!s&&!T&&(Fi(this,"onStart"),this._tTime!==c))return this;if(f>=a&&r>=0)for(h=this._first;h;){if(m=h._next,(h._act||f>=h._start)&&h._ts&&g!==h){if(h.parent!==this)return this.render(r,s,o);if(h.render(h._ts>0?(f-h._start)*h._ts:(h._dirty?h.totalDuration():h._tDur)+(f-h._start)*h._ts,s,o),f!==this._time||!this._ts&&!p){g=0,m&&(c+=this._zTime=-Dt);break}}h=m}else{h=this._last;for(var b=r<0?r:f;h;){if(m=h._prev,(h._act||b<=h._end)&&h._ts&&g!==h){if(h.parent!==this)return this.render(r,s,o);if(h.render(h._ts>0?(b-h._start)*h._ts:(h._dirty?h.totalDuration():h._tDur)+(b-h._start)*h._ts,s,o||Nn&&q_(h)),f!==this._time||!this._ts&&!p){g=0,m&&(c+=this._zTime=b?-Dt:Dt);break}}h=m}}if(g&&!s&&(this.pause(),g.render(f>=a?0:-Dt)._zTime=f>=a?1:-1,this._ts))return this._start=y,sh(this),this.render(r,s,o);this._onUpdate&&!s&&Fi(this,"onUpdate",!0),(c===l&&this._tTime>=this.totalDuration()||!c&&a)&&(y===this._start||Math.abs(x)!==Math.abs(this._ts))&&(this._lock||((r||!u)&&(c===l&&this._ts>0||!c&&this._ts<0)&&uo(this,1),!s&&!(r<0&&!a)&&(c||a||!l)&&(Fi(this,c===l&&r>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(c<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(r,s){var o=this;if(xs(s)||(s=qi(this,s,r)),!(r instanceof oc)){if(qn(r))return r.forEach(function(a){return o.add(a,s)}),this;if(Rn(r))return this.addLabel(r,s);if(Qt(r))r=fn.delayedCall(0,r);else return this}return this!==r?Nr(this,r,s):this},t.getChildren=function(r,s,o,a){r===void 0&&(r=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-nr);for(var l=[],u=this._first;u;)u._start>=a&&(u instanceof fn?s&&l.push(u):(o&&l.push(u),r&&l.push.apply(l,u.getChildren(!0,s,o)))),u=u._next;return l},t.getById=function(r){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===r)return s[o]},t.remove=function(r){return Rn(r)?this.removeLabel(r):Qt(r)?this.killTweensOf(r):(r.parent===this&&rh(this,r),r===this._recent&&(this._recent=this._last),Wo(this))},t.totalTime=function(r,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Gt(Li.time-(this._ts>0?r/this._ts:(this.totalDuration()-r)/-this._ts))),n.prototype.totalTime.call(this,r,s),this._forcing=0,this):this._tTime},t.addLabel=function(r,s){return this.labels[r]=qi(this,s),this},t.removeLabel=function(r){return delete this.labels[r],this},t.addPause=function(r,s,o){var a=fn.delayedCall(0,s||ic,o);return a.data="isPause",this._hasPause=1,Nr(this,a,qi(this,r))},t.removePause=function(r){var s=this._first;for(r=qi(this,r);s;)s._start===r&&s.data==="isPause"&&uo(s),s=s._next},t.killTweensOf=function(r,s,o){for(var a=this.getTweensOf(r,o),l=a.length;l--;)Gs!==a[l]&&a[l].kill(r,s);return this},t.getTweensOf=function(r,s){for(var o=[],a=ir(r),l=this._first,u=xs(s),c;l;)l instanceof fn?AA(l._targets,a)&&(u?(!Gs||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(c=l.getTweensOf(a,s)).length&&o.push.apply(o,c),l=l._next;return o},t.tweenTo=function(r,s){s=s||{};var o=this,a=qi(o,r),l=s,u=l.startAt,c=l.onStart,d=l.onStartParams,f=l.immediateRender,h,m=fn.to(o,Hi({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(u&&"time"in u?u.time:o._time))/o.timeScale())||Dt,onStart:function(){if(o.pause(),!h){var _=s.duration||Math.abs((a-(u&&"time"in u?u.time:o._time))/o.timeScale());m._dur!==_&&El(m,_,0,1).render(m._time,!0,!0),h=1}c&&c.apply(m,d||[])}},s));return f?m.render(0):m},t.tweenFromTo=function(r,s,o){return this.tweenTo(s,Hi({startAt:{time:qi(this,r)}},o))},t.recent=function(){return this._recent},t.nextLabel=function(r){return r===void 0&&(r=this._time),Yv(this,qi(this,r))},t.previousLabel=function(r){return r===void 0&&(r=this._time),Yv(this,qi(this,r),1)},t.currentLabel=function(r){return arguments.length?this.seek(r,!0):this.previousLabel(this._time+Dt)},t.shiftChildren=function(r,s,o){o===void 0&&(o=0);var a=this._first,l=this.labels,u;for(r=Gt(r);a;)a._start>=o&&(a._start+=r,a._end+=r),a=a._next;if(s)for(u in l)l[u]>=o&&(l[u]+=r);return Wo(this)},t.invalidate=function(r){var s=this._first;for(this._lock=0;s;)s.invalidate(r),s=s._next;return n.prototype.invalidate.call(this,r)},t.clear=function(r){r===void 0&&(r=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),r&&(this.labels={}),Wo(this)},t.totalDuration=function(r){var s=0,o=this,a=o._last,l=nr,u,c,d;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-r:r));if(o._dirty){for(d=o.parent;a;)u=a._prev,a._dirty&&a.totalDuration(),c=a._start,c>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,Nr(o,a,c-a._delay,1)._lock=0):l=c,c<0&&a._ts&&(s-=c,(!d&&!o._dp||d&&d.smoothChildTiming)&&(o._start+=Gt(c/o._ts),o._time-=c,o._tTime-=c),o.shiftChildren(-c,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=u;El(o,o===Xt&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(r){if(Xt._ts&&(YM(Xt,Ad(r,Xt)),WM=Li.frame),Li.frame>=Hv){Hv+=Bi.autoSleep||120;var s=Xt._first;if((!s||!s._ts)&&Bi.autoSleep&&Li._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||Li.sleep()}}},e}(oc);Hi(di.prototype,{_lock:0,_hasPause:0,_forcing:0});var KA=function(e,t,i,r,s,o,a){var l=new xi(this._pt,e,t,0,1,vE,null,s),u=0,c=0,d,f,h,m,v,_,p,g;for(l.b=i,l.e=r,i+="",r+="",(p=~r.indexOf("random("))&&(r=rc(r)),o&&(g=[i,r],o(g,e,t),i=g[0],r=g[1]),f=i.match(kh)||[];d=kh.exec(r);)m=d[0],v=r.substring(u,d.index),h?h=(h+1)%5:v.substr(-5)==="rgba("&&(h=1),m!==f[c++]&&(_=parseFloat(f[c-1])||0,l._pt={_next:l._pt,p:v||c===1?v:",",s:_,c:m.charAt(1)==="="?sl(_,m)-_:parseFloat(m)-_,m:h&&h<4?Math.round:0},u=kh.lastIndex);return l.c=u<r.length?r.substring(u,r.length):"",l.fp=a,(zM.test(r)||p)&&(l.e=0),this._pt=l,l},$_=function(e,t,i,r,s,o,a,l,u,c){Qt(r)&&(r=r(s||0,e,o));var d=e[t],f=i!=="get"?i:Qt(d)?u?e[t.indexOf("set")||!Qt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](u):e[t]():d,h=Qt(d)?u?tC:gE:Z_,m;if(Rn(r)&&(~r.indexOf("random(")&&(r=rc(r)),r.charAt(1)==="="&&(m=sl(f,r)+(Xn(f)||0),(m||m===0)&&(r=m))),!c||f!==r||Um)return!isNaN(f*r)&&r!==""?(m=new xi(this._pt,e,t,+f||0,r-(f||0),typeof d=="boolean"?iC:_E,0,h),u&&(m.fp=u),a&&m.modifier(a,this,e),this._pt=m):(!d&&!(t in e)&&W_(t,r),KA.call(this,e,t,f,r,h,l||Bi.stringFilter,u))},ZA=function(e,t,i,r,s){if(Qt(e)&&(e=Ru(e,s,t,i,r)),!Yr(e)||e.style&&e.nodeType||qn(e)||kM(e))return Rn(e)?Ru(e,s,t,i,r):e;var o={},a;for(a in e)o[a]=Ru(e[a],s,t,i,r);return o},hE=function(e,t,i,r,s,o){var a,l,u,c;if(Pi[e]&&(a=new Pi[e]).init(s,a.rawVars?t[e]:ZA(t[e],r,s,o,i),i,r,o)!==!1&&(i._pt=l=new xi(i._pt,s,e,0,1,a.render,a,0,a.priority),i!==Za))for(u=i._ptLookup[i._targets.indexOf(s)],c=a._props.length;c--;)u[a._props[c]]=l;return a},Gs,Um,K_=function n(e,t,i){var r=e.vars,s=r.ease,o=r.startAt,a=r.immediateRender,l=r.lazy,u=r.onUpdate,c=r.runBackwards,d=r.yoyoEase,f=r.keyframes,h=r.autoRevert,m=e._dur,v=e._startAt,_=e._targets,p=e.parent,g=p&&p.data==="nested"?p.vars.targets:_,x=e._overwrite==="auto"&&!z_,y=e.timeline,T=r.easeReverse||d,E,w,S,C,b,D,L,O,H,N,B,I,F;if(y&&(!f||!s)&&(s="none"),e._ease=Xo(s,tc.ease),e._rEase=T&&(Xo(T)||e._ease),e._from=!y&&!!r.runBackwards,e._from&&(e.ratio=1),!y||f&&!r.stagger){if(O=_[0]?Go(_[0]).harness:0,I=O&&r[O.prop],E=wd(r,X_),v&&(v._zTime<0&&v.progress(1),t<0&&c&&a&&!h?v.render(-1,!0):v.revert(c&&m?Of:TA),v._lazy=0),o){if(uo(e._startAt=fn.set(_,Hi({data:"isStart",overwrite:!1,parent:p,immediateRender:!0,lazy:!v&&_i(l),startAt:null,delay:0,onUpdate:u&&function(){return Fi(e,"onUpdate")},stagger:0},o))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Nn||!a&&!h)&&e._startAt.revert(Of),a&&m&&t<=0&&i<=0){t&&(e._zTime=t);return}}else if(c&&m&&!v){if(t&&(a=!1),S=Hi({overwrite:!1,data:"isFromStart",lazy:a&&!v&&_i(l),immediateRender:a,stagger:0,parent:p},E),I&&(S[O.prop]=I),uo(e._startAt=fn.set(_,S)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Nn?e._startAt.revert(Of):e._startAt.render(-1,!0)),e._zTime=t,!a)n(e._startAt,Dt,Dt);else if(!t)return}for(e._pt=e._ptCache=0,l=m&&_i(l)||l&&!m,w=0;w<_.length;w++){if(b=_[w],L=b._gsap||j_(_)[w]._gsap,e._ptLookup[w]=N={},bm[L.id]&&io.length&&Td(),B=g===_?w:g.indexOf(b),O&&(H=new O).init(b,I||E,e,B,g)!==!1&&(e._pt=C=new xi(e._pt,b,H.name,0,1,H.render,H,0,H.priority),H._props.forEach(function(W){N[W]=C}),H.priority&&(D=1)),!O||I)for(S in E)Pi[S]&&(H=hE(S,E,e,B,b,g))?H.priority&&(D=1):N[S]=C=$_.call(e,b,S,"get",E[S],B,g,0,r.stringFilter);e._op&&e._op[w]&&e.kill(b,e._op[w]),x&&e._pt&&(Gs=e,Xt.killTweensOf(b,N,e.globalTime(t)),F=!e.parent,Gs=0),e._pt&&l&&(bm[L.id]=1)}D&&xE(e),e._onInit&&e._onInit(e)}e._onUpdate=u,e._initted=(!e._op||e._pt)&&!F,f&&t<=0&&y.render(nr,!0,!0)},QA=function(e,t,i,r,s,o,a,l){var u=(e._pt&&e._ptCache||(e._ptCache={}))[t],c,d,f,h;if(!u)for(u=e._ptCache[t]=[],f=e._ptLookup,h=e._targets.length;h--;){if(c=f[h][t],c&&c.d&&c.d._pt)for(c=c.d._pt;c&&c.p!==t&&c.fp!==t;)c=c._next;if(!c)return Um=1,e.vars[t]="+=0",K_(e,a),Um=0,l?nc(t+" not eligible for reset. Try splitting into individual properties"):1;u.push(c)}for(h=u.length;h--;)d=u[h],c=d._pt||d,c.s=(r||r===0)&&!s?r:c.s+(r||0)+o*c.c,c.c=i-c.s,d.e&&(d.e=rn(i)+Xn(d.e)),d.b&&(d.b=c.s+Xn(d.b))},JA=function(e,t){var i=e[0]?Go(e[0]).harness:0,r=i&&i.aliases,s,o,a,l;if(!r)return t;s=yl({},t);for(o in r)if(o in s)for(l=r[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},eC=function(e,t,i,r){var s=t.ease||r||"power1.inOut",o,a;if(qn(t))a=i[e]||(i[e]=[]),t.forEach(function(l,u){return a.push({t:u/(t.length-1)*100,v:l,e:s})});else for(o in t)a=i[o]||(i[o]=[]),o==="ease"||a.push({t:parseFloat(e),v:t[o],e:s})},Ru=function(e,t,i,r,s){return Qt(e)?e.call(t,i,r,s):Rn(e)&&~e.indexOf("random(")?rc(e):e},pE=Y_+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",mE={};vi(pE+",id,stagger,delay,duration,paused,scrollTrigger",function(n){return mE[n]=1});var fn=function(n){FM(e,n);function e(i,r,s,o){var a;typeof r=="number"&&(s.duration=r,r=s,s=null),a=n.call(this,o?r:Au(r))||this;var l=a.vars,u=l.duration,c=l.delay,d=l.immediateRender,f=l.stagger,h=l.overwrite,m=l.keyframes,v=l.defaults,_=l.scrollTrigger,p=r.parent||Xt,g=(qn(i)||kM(i)?xs(i[0]):"length"in r)?[i]:ir(i),x,y,T,E,w,S,C,b;if(a._targets=g.length?j_(g):nc("GSAP target "+i+" not found. https://gsap.com",!Bi.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=h,m||f||Bc(u)||Bc(c)){r=a.vars;var D=r.easeReverse||r.yoyoEase;if(x=a.timeline=new di({data:"nested",defaults:v||{},targets:p&&p.data==="nested"?p.vars.targets:g}),x.kill(),x.parent=x._dp=is(a),x._start=0,f||Bc(u)||Bc(c)){if(E=g.length,C=f&&tE(f),Yr(f))for(w in f)~pE.indexOf(w)&&(b||(b={}),b[w]=f[w]);for(y=0;y<E;y++)T=wd(r,mE),T.stagger=0,D&&(T.easeReverse=D),b&&yl(T,b),S=g[y],T.duration=+Ru(u,is(a),y,S,g),T.delay=(+Ru(c,is(a),y,S,g)||0)-a._delay,!f&&E===1&&T.delay&&(a._delay=c=T.delay,a._start+=c,T.delay=0),x.to(S,T,C?C(y,S,g):0),x._ease=gt.none;x.duration()?u=c=0:a.timeline=0}else if(m){Au(Hi(x.vars.defaults,{ease:"none"})),x._ease=Xo(m.ease||r.ease||"none");var L=0,O,H,N;if(qn(m))m.forEach(function(B){return x.to(g,B,">")}),x.duration();else{T={};for(w in m)w==="ease"||w==="easeEach"||eC(w,m[w],T,m.easeEach);for(w in T)for(O=T[w].sort(function(B,I){return B.t-I.t}),L=0,y=0;y<O.length;y++)H=O[y],N={ease:H.e,duration:(H.t-(y?O[y-1].t:0))/100*u},N[w]=H.v,x.to(g,N,L),L+=N.duration;x.duration()<u&&x.to({},{duration:u-x.duration()})}}u||a.duration(u=x.duration())}else a.timeline=0;return h===!0&&!z_&&(Gs=is(a),Xt.killTweensOf(g),Gs=0),Nr(p,is(a),s),r.reversed&&a.reverse(),r.paused&&a.paused(!0),(d||!u&&!m&&a._start===Gt(p._time)&&_i(d)&&PA(is(a))&&p.data!=="nested")&&(a._tTime=-Dt,a.render(Math.max(0,-c)||0)),_&&ZM(is(a),_),a}var t=e.prototype;return t.render=function(r,s,o){var a=this._time,l=this._tDur,u=this._dur,c=r<0,d=r>l-Dt&&!c?l:r<Dt?0:r,f,h,m,v,_,p,g,x;if(!u)LA(this,r,s,o);else if(d!==this._tTime||!r||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==c||this._lazy){if(f=d,x=this.timeline,this._repeat){if(v=u+this._rDelay,this._repeat<-1&&c)return this.totalTime(v*100+r,s,o);if(f=Gt(d%v),d===l?(m=this._repeat,f=u):(_=Gt(d/v),m=~~_,m&&m===_?(f=u,m--):f>u&&(f=u)),p=this._yoyo&&m&1,p&&(f=u-f),_=Ml(this._tTime,v),f===a&&!o&&this._initted&&m===_)return this._tTime=d,this;m!==_&&this.vars.repeatRefresh&&!p&&!this._lock&&f!==v&&this._initted&&(this._lock=o=1,this.render(Gt(v*m),!0).invalidate()._lock=0)}if(!this._initted){if(QM(this,c?r:f,o,s,d))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&m!==_))return this;if(u!==this._dur)return this.render(r,s,o)}if(this._rEase){var y=f<a;if(y!==this._inv){var T=y?a:u-a;this._inv=y,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=a,this._invRecip=T?(y?-1:1)/T:0,this._invScale=y?-this.ratio:1-this.ratio,this._invEase=y?this._rEase:this._ease}this.ratio=g=this._invRatio+this._invScale*this._invEase((f-this._invTime)*this._invRecip)}else this.ratio=g=this._ease(f/u);if(this._from&&(this.ratio=g=1-g),this._tTime=d,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),!a&&d&&!s&&!_&&(Fi(this,"onStart"),this._tTime!==d))return this;for(h=this._pt;h;)h.r(g,h.d),h=h._next;x&&x.render(r<0?r:x._dur*x._ease(f/this._dur),s,o)||this._startAt&&(this._zTime=r),this._onUpdate&&!s&&(c&&Pm(this,r,s,o),Fi(this,"onUpdate")),this._repeat&&m!==_&&this.vars.onRepeat&&!s&&this.parent&&Fi(this,"onRepeat"),(d===this._tDur||!d)&&this._tTime===d&&(c&&!this._onUpdate&&Pm(this,r,!0,!0),(r||!u)&&(d===this._tDur&&this._ts>0||!d&&this._ts<0)&&uo(this,1),!s&&!(c&&!a)&&(d||a||p)&&(Fi(this,d===l?"onComplete":"onReverseComplete",!0),this._prom&&!(d<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(r){return(!r||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(r),n.prototype.invalidate.call(this,r)},t.resetTo=function(r,s,o,a,l){sc||Li.wake(),this._ts||this.play();var u=Math.min(this._dur,(this._dp._time-this._start)*this._ts),c;return this._initted||K_(this,u),c=this._ease(u/this._dur),QA(this,r,s,o,a,c,u,l)?this.resetTo(r,s,o,a,1):(oh(this,0),this.parent||$M(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(r,s){if(s===void 0&&(s="all"),!r&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?au(this):this.scrollTrigger&&this.scrollTrigger.kill(!!Nn),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(r,s,Gs&&Gs.vars.overwrite!==!0)._first||au(this),this.parent&&o!==this.timeline.totalDuration()&&El(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=r?ir(r):a,u=this._ptLookup,c=this._pt,d,f,h,m,v,_,p;if((!s||s==="all")&&RA(a,l))return s==="all"&&(this._pt=0),au(this);for(d=this._op=this._op||[],s!=="all"&&(Rn(s)&&(v={},vi(s,function(g){return v[g]=1}),s=v),s=JA(a,s)),p=a.length;p--;)if(~l.indexOf(a[p])){f=u[p],s==="all"?(d[p]=s,m=f,h={}):(h=d[p]=d[p]||{},m=s);for(v in m)_=f&&f[v],_&&((!("kill"in _.d)||_.d.kill(v)===!0)&&rh(this,_,"_pt"),delete f[v]),h!=="all"&&(h[v]=1)}return this._initted&&!this._pt&&c&&au(this),this},e.to=function(r,s){return new e(r,s,arguments[2])},e.from=function(r,s){return Cu(1,arguments)},e.delayedCall=function(r,s,o,a){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:r,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},e.fromTo=function(r,s,o){return Cu(2,arguments)},e.set=function(r,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(r,s)},e.killTweensOf=function(r,s,o){return Xt.killTweensOf(r,s,o)},e}(oc);Hi(fn.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});vi("staggerTo,staggerFrom,staggerFromTo",function(n){fn[n]=function(){var e=new di,t=Lm.call(arguments,0);return t.splice(n==="staggerFromTo"?5:4,0,0),e[n].apply(e,t)}});var Z_=function(e,t,i){return e[t]=i},gE=function(e,t,i){return e[t](i)},tC=function(e,t,i,r){return e[t](r.fp,i)},nC=function(e,t,i){return e.setAttribute(t,i)},Q_=function(e,t){return Qt(e[t])?gE:V_(e[t])&&e.setAttribute?nC:Z_},_E=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},iC=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},vE=function(e,t){var i=t._pt,r="";if(!e&&t.b)r=t.b;else if(e===1&&t.e)r=t.e;else{for(;i;)r=i.p+(i.m?i.m(i.s+i.c*e):Math.round((i.s+i.c*e)*1e4)/1e4)+r,i=i._next;r+=t.c}t.set(t.t,t.p,r,t)},J_=function(e,t){for(var i=t._pt;i;)i.r(e,i.d),i=i._next},rC=function(e,t,i,r){for(var s=this._pt,o;s;)o=s._next,s.p===r&&s.modifier(e,t,i),s=o},sC=function(e){for(var t=this._pt,i,r;t;)r=t._next,t.p===e&&!t.op||t.op===e?rh(this,t,"_pt"):t.dep||(i=1),t=r;return!i},oC=function(e,t,i,r){r.mSet(e,t,r.m.call(r.tween,i,r.mt),r)},xE=function(e){for(var t=e._pt,i,r,s,o;t;){for(i=t._next,r=s;r&&r.pr>t.pr;)r=r._next;(t._prev=r?r._prev:o)?t._prev._next=t:s=t,(t._next=r)?r._prev=t:o=t,t=i}e._pt=s},xi=function(){function n(t,i,r,s,o,a,l,u,c){this.t=i,this.s=s,this.c=o,this.p=r,this.r=a||_E,this.d=l||this,this.set=u||Z_,this.pr=c||0,this._next=t,t&&(t._prev=this)}var e=n.prototype;return e.modifier=function(i,r,s){this.mSet=this.mSet||this.set,this.set=oC,this.m=i,this.mt=s,this.tween=r},n}();vi(Y_+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(n){return X_[n]=1});Vi.TweenMax=Vi.TweenLite=fn;Vi.TimelineLite=Vi.TimelineMax=di;Xt=new di({sortChildren:!1,defaults:tc,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Bi.stringFilter=cE;var Yo=[],Bf={},aC=[],qv=0,lC=0,Gh=function(e){return(Bf[e]||aC).map(function(t){return t()})},Fm=function(){var e=Date.now(),t=[];e-qv>2&&(Gh("matchMediaInit"),Yo.forEach(function(i){var r=i.queries,s=i.conditions,o,a,l,u;for(a in r)o=br.matchMedia(r[a]).matches,o&&(l=1),o!==s[a]&&(s[a]=o,u=1);u&&(i.revert(),l&&t.push(i))}),Gh("matchMediaRevert"),t.forEach(function(i){return i.onMatch(i,function(r){return i.add(null,r)})}),qv=e,Gh("matchMedia"))},SE=function(){function n(t,i){this.selector=i&&Nm(i),this.data=[],this._r=[],this.isReverted=!1,this.id=lC++,t&&this.add(t)}var e=n.prototype;return e.add=function(i,r,s){Qt(i)&&(s=r,r=i,i=Qt);var o=this,a=function(){var u=Vt,c=o.selector,d;return u&&u!==o&&u.data.push(o),s&&(o.selector=Nm(s)),Vt=o,d=r.apply(o,arguments),Qt(d)&&o._r.push(d),Vt=u,o.selector=c,o.isReverted=!1,d};return o.last=a,i===Qt?a(o,function(l){return o.add(null,l)}):i?o[i]=a:a},e.ignore=function(i){var r=Vt;Vt=null,i(this),Vt=r},e.getTweens=function(){var i=[];return this.data.forEach(function(r){return r instanceof n?i.push.apply(i,r.getTweens()):r instanceof fn&&!(r.parent&&r.parent.data==="nested")&&i.push(r)}),i},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(i,r){var s=this;if(i?function(){for(var a=s.getTweens(),l=s.data.length,u;l--;)u=s.data[l],u.data==="isFlip"&&(u.revert(),u.getChildren(!0,!0,!1).forEach(function(c){return a.splice(a.indexOf(c),1)}));for(a.map(function(c){return{g:c._dur||c._delay||c._sat&&!c._sat.vars.immediateRender?c.globalTime(0):-1/0,t:c}}).sort(function(c,d){return d.g-c.g||-1/0}).forEach(function(c){return c.t.revert(i)}),l=s.data.length;l--;)u=s.data[l],u instanceof di?u.data!=="nested"&&(u.scrollTrigger&&u.scrollTrigger.revert(),u.kill()):!(u instanceof fn)&&u.revert&&u.revert(i);s._r.forEach(function(c){return c(i,s)}),s.isReverted=!0}():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),r)for(var o=Yo.length;o--;)Yo[o].id===this.id&&Yo.splice(o,1)},e.revert=function(i){this.kill(i||{})},n}(),uC=function(){function n(t){this.contexts=[],this.scope=t,Vt&&Vt.data.push(this)}var e=n.prototype;return e.add=function(i,r,s){Yr(i)||(i={matches:i});var o=new SE(0,s||this.scope),a=o.conditions={},l,u,c;Vt&&!o.selector&&(o.selector=Vt.selector),this.contexts.push(o),r=o.add("onMatch",r),o.queries=i;for(u in i)u==="all"?c=1:(l=br.matchMedia(i[u]),l&&(Yo.indexOf(o)<0&&Yo.push(o),(a[u]=l.matches)&&(c=1),l.addListener?l.addListener(Fm):l.addEventListener("change",Fm)));return c&&r(o,function(d){return o.add(null,d)}),this},e.revert=function(i){this.kill(i||{})},e.kill=function(i){this.contexts.forEach(function(r){return r.kill(i,!0)})},n}(),Cd={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];t.forEach(function(r){return aE(r)})},timeline:function(e){return new di(e)},getTweensOf:function(e,t){return Xt.getTweensOf(e,t)},getProperty:function(e,t,i,r){Rn(e)&&(e=ir(e)[0]);var s=Go(e||{}).get,o=i?qM:jM;return i==="native"&&(i=""),e&&(t?o((Pi[t]&&Pi[t].get||s)(e,t,i,r)):function(a,l,u){return o((Pi[a]&&Pi[a].get||s)(e,a,l,u))})},quickSetter:function(e,t,i){if(e=ir(e),e.length>1){var r=e.map(function(c){return Mi.quickSetter(c,t,i)}),s=r.length;return function(c){for(var d=s;d--;)r[d](c)}}e=e[0]||{};var o=Pi[t],a=Go(e),l=a.harness&&(a.harness.aliases||{})[t]||t,u=o?function(c){var d=new o;Za._pt=0,d.init(e,i?c+i:c,Za,0,[e]),d.render(1,d),Za._pt&&J_(1,Za)}:a.set(e,l);return o?u:function(c){return u(e,l,i?c+i:c,a,1)}},quickTo:function(e,t,i){var r,s=Mi.to(e,Hi((r={},r[t]="+=0.1",r.paused=!0,r.stagger=0,r),i||{})),o=function(l,u,c){return s.resetTo(t,l,u,c)};return o.tween=s,o},isTweening:function(e){return Xt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=Xo(e.ease,tc.ease)),Gv(tc,e||{})},config:function(e){return Gv(Bi,e||{})},registerEffect:function(e){var t=e.name,i=e.effect,r=e.plugins,s=e.defaults,o=e.extendTimeline;(r||"").split(",").forEach(function(a){return a&&!Pi[a]&&!Vi[a]&&nc(t+" effect requires "+a+" plugin.")}),Bh[t]=function(a,l,u){return i(ir(a),Hi(l||{},s),u)},o&&(di.prototype[t]=function(a,l,u){return this.add(Bh[t](a,Yr(l)?l:(u=l)&&{},this),u)})},registerEase:function(e,t){gt[e]=Xo(t)},parseEase:function(e,t){return arguments.length?Xo(e,t):gt},getById:function(e){return Xt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var i=new di(e),r,s;for(i.smoothChildTiming=_i(e.smoothChildTiming),Xt.remove(i),i._dp=0,i._time=i._tTime=Xt._time,r=Xt._first;r;)s=r._next,(t||!(!r._dur&&r instanceof fn&&r.vars.onComplete===r._targets[0]))&&Nr(i,r,r._start-r._delay),r=s;return Nr(Xt,i,0),i},context:function(e,t){return e?new SE(e,t):Vt},matchMedia:function(e){return new uC(e)},matchMediaRefresh:function(){return Yo.forEach(function(e){var t=e.conditions,i,r;for(r in t)t[r]&&(t[r]=!1,i=1);i&&e.revert()})||Fm()},addEventListener:function(e,t){var i=Bf[e]||(Bf[e]=[]);~i.indexOf(t)||i.push(t)},removeEventListener:function(e,t){var i=Bf[e],r=i&&i.indexOf(t);r>=0&&i.splice(r,1)},utils:{wrap:zA,wrapYoyo:VA,distribute:tE,random:iE,snap:nE,normalize:BA,getUnit:Xn,clamp:UA,splitColor:lE,toArray:ir,selector:Nm,mapRange:sE,pipe:OA,unitize:kA,interpolate:HA,shuffle:eE},install:HM,effects:Bh,ticker:Li,updateRoot:di.updateRoot,plugins:Pi,globalTimeline:Xt,core:{PropTween:xi,globals:GM,Tween:fn,Timeline:di,Animation:oc,getCache:Go,_removeLinkedListItem:rh,reverting:function(){return Nn},context:function(e){return e&&Vt&&(Vt.data.push(e),e._ctx=Vt),Vt},suppressOverwrites:function(e){return z_=e}}};vi("to,from,fromTo,delayedCall,set,killTweensOf",function(n){return Cd[n]=fn[n]});Li.add(di.updateRoot);Za=Cd.to({},{duration:0});var cC=function(e,t){for(var i=e._pt;i&&i.p!==t&&i.op!==t&&i.fp!==t;)i=i._next;return i},fC=function(e,t){var i=e._targets,r,s,o;for(r in t)for(s=i.length;s--;)o=e._ptLookup[s][r],o&&(o=o.d)&&(o._pt&&(o=cC(o,r)),o&&o.modifier&&o.modifier(t[r],e,i[s],r))},Wh=function(e,t){return{name:e,headless:1,rawVars:1,init:function(r,s,o){o._onInit=function(a){var l,u;if(Rn(s)&&(l={},vi(s,function(c){return l[c]=1}),s=l),t){l={};for(u in s)l[u]=t(s[u]);s=l}fC(a,s)}}}},Mi=Cd.registerPlugin({name:"attr",init:function(e,t,i,r,s){var o,a,l;this.tween=i;for(o in t)l=e.getAttribute(o)||"",a=this.add(e,"setAttribute",(l||0)+"",t[o],r,s,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(e,t){for(var i=t._pt;i;)Nn?i.set(i.t,i.p,i.b,i):i.r(e,i.d),i=i._next}},{name:"endArray",headless:1,init:function(e,t){for(var i=t.length;i--;)this.add(e,i,e[i]||0,t[i],0,0,0,0,0,1)}},Wh("roundProps",Im),Wh("modifiers"),Wh("snap",nE))||Cd;fn.version=di.version=Mi.version="3.15.0";VM=1;H_()&&Tl();gt.Power0;gt.Power1;gt.Power2;gt.Power3;gt.Power4;gt.Linear;gt.Quad;gt.Cubic;gt.Quart;gt.Quint;gt.Strong;gt.Elastic;gt.Back;gt.SteppedEase;gt.Bounce;gt.Sine;gt.Expo;gt.Circ;/*!
 * CSSPlugin 3.15.0
 * https://gsap.com
 *
 * Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var $v,Ws,ol,e0,Oo,Kv,t0,dC=function(){return typeof window<"u"},Ss={},Ro=180/Math.PI,al=Math.PI/180,pa=Math.atan2,Zv=1e8,n0=/([A-Z])/g,hC=/(left|right|width|margin|padding|x)/i,pC=/[\s,\(]\S/,Fr={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Om=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},mC=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},gC=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},_C=function(e,t){return t.set(t.t,t.p,e===1?t.e:e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},vC=function(e,t){var i=t.s+t.c*e;t.set(t.t,t.p,~~(i+(i<0?-.5:.5))+t.u,t)},yE=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},ME=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},xC=function(e,t,i){return e.style[t]=i},SC=function(e,t,i){return e.style.setProperty(t,i)},yC=function(e,t,i){return e._gsap[t]=i},MC=function(e,t,i){return e._gsap.scaleX=e._gsap.scaleY=i},EC=function(e,t,i,r,s){var o=e._gsap;o.scaleX=o.scaleY=i,o.renderTransform(s,o)},TC=function(e,t,i,r,s){var o=e._gsap;o[t]=i,o.renderTransform(s,o)},Yt="transform",Si=Yt+"Origin",wC=function n(e,t){var i=this,r=this.target,s=r.style,o=r._gsap;if(e in Ss&&s){if(this.tfm=this.tfm||{},e!=="transform")e=Fr[e]||e,~e.indexOf(",")?e.split(",").forEach(function(a){return i.tfm[a]=ss(r,a)}):this.tfm[e]=o.x?o[e]:ss(r,e),e===Si&&(this.tfm.zOrigin=o.zOrigin);else return Fr.transform.split(",").forEach(function(a){return n.call(i,a,t)});if(this.props.indexOf(Yt)>=0)return;o.svg&&(this.svgo=r.getAttribute("data-svg-origin"),this.props.push(Si,t,"")),e=Yt}(s||t)&&this.props.push(e,t,s[e])},EE=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},AC=function(){var e=this.props,t=this.target,i=t.style,r=t._gsap,s,o;for(s=0;s<e.length;s+=3)e[s+1]?e[s+1]===2?t[e[s]](e[s+2]):t[e[s]]=e[s+2]:e[s+2]?i[e[s]]=e[s+2]:i.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(n0,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)r[o]=this.tfm[o];r.svg&&(r.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=t0(),(!s||!s.isStart)&&!i[Yt]&&(EE(i),r.zOrigin&&i[Si]&&(i[Si]+=" "+r.zOrigin+"px",r.zOrigin=0,r.renderTransform()),r.uncache=1)}},TE=function(e,t){var i={target:e,props:[],revert:AC,save:wC};return e._gsap||Mi.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(r){return i.save(r)}),i},wE,km=function(e,t){var i=Ws.createElementNS?Ws.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):Ws.createElement(e);return i&&i.style?i:Ws.createElement(e)},Oi=function n(e,t,i){var r=getComputedStyle(e);return r[t]||r.getPropertyValue(t.replace(n0,"-$1").toLowerCase())||r.getPropertyValue(t)||!i&&n(e,wl(t)||t,1)||""},Qv="O,Moz,ms,Ms,Webkit".split(","),wl=function(e,t,i){var r=t||Oo,s=r.style,o=5;if(e in s&&!i)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);o--&&!(Qv[o]+e in s););return o<0?null:(o===3?"ms":o>=0?Qv[o]:"")+e},Bm=function(){dC()&&window.document&&($v=window,Ws=$v.document,ol=Ws.documentElement,Oo=km("div")||{style:{}},km("div"),Yt=wl(Yt),Si=Yt+"Origin",Oo.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",wE=!!wl("perspective"),t0=Mi.core.reverting,e0=1)},Jv=function(e){var t=e.ownerSVGElement,i=km("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),r=e.cloneNode(!0),s;r.style.display="block",i.appendChild(r),ol.appendChild(i);try{s=r.getBBox()}catch{}return i.removeChild(r),ol.removeChild(i),s},ex=function(e,t){for(var i=t.length;i--;)if(e.hasAttribute(t[i]))return e.getAttribute(t[i])},AE=function(e){var t,i;try{t=e.getBBox()}catch{t=Jv(e),i=1}return t&&(t.width||t.height)||i||(t=Jv(e)),t&&!t.width&&!t.x&&!t.y?{x:+ex(e,["x","cx","x1"])||0,y:+ex(e,["y","cy","y1"])||0,width:0,height:0}:t},CE=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&AE(e))},co=function(e,t){if(t){var i=e.style,r;t in Ss&&t!==Si&&(t=Yt),i.removeProperty?(r=t.substr(0,2),(r==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),i.removeProperty(r==="--"?t:t.replace(n0,"-$1").toLowerCase())):i.removeAttribute(t)}},Xs=function(e,t,i,r,s,o){var a=new xi(e._pt,t,i,0,1,o?ME:yE);return e._pt=a,a.b=r,a.e=s,e._props.push(i),a},tx={deg:1,rad:1,turn:1},CC={grid:1,flex:1},fo=function n(e,t,i,r){var s=parseFloat(i)||0,o=(i+"").trim().substr((s+"").length)||"px",a=Oo.style,l=hC.test(t),u=e.tagName.toLowerCase()==="svg",c=(u?"client":"offset")+(l?"Width":"Height"),d=100,f=r==="px",h=r==="%",m,v,_,p;if(r===o||!s||tx[r]||tx[o])return s;if(o!=="px"&&!f&&(s=n(e,t,i,"px")),p=e.getCTM&&CE(e),(h||o==="%")&&(Ss[t]||~t.indexOf("adius")))return m=p?e.getBBox()[l?"width":"height"]:e[c],rn(h?s/m*d:s/100*m);if(a[l?"width":"height"]=d+(f?o:r),v=r!=="rem"&&~t.indexOf("adius")||r==="em"&&e.appendChild&&!u?e:e.parentNode,p&&(v=(e.ownerSVGElement||{}).parentNode),(!v||v===Ws||!v.appendChild)&&(v=Ws.body),_=v._gsap,_&&h&&_.width&&l&&_.time===Li.time&&!_.uncache)return rn(s/_.width*d);if(h&&(t==="height"||t==="width")){var g=e.style[t];e.style[t]=d+r,m=e[c],g?e.style[t]=g:co(e,t)}else(h||o==="%")&&!CC[Oi(v,"display")]&&(a.position=Oi(e,"position")),v===e&&(a.position="static"),v.appendChild(Oo),m=Oo[c],v.removeChild(Oo),a.position="absolute";return l&&h&&(_=Go(v),_.time=Li.time,_.width=v[c]),rn(f?m*s/d:m&&s?d/m*s:0)},ss=function(e,t,i,r){var s;return e0||Bm(),t in Fr&&t!=="transform"&&(t=Fr[t],~t.indexOf(",")&&(t=t.split(",")[0])),Ss[t]&&t!=="transform"?(s=lc(e,r),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:bd(Oi(e,Si))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||r||~(s+"").indexOf("calc("))&&(s=Rd[t]&&Rd[t](e,t,i)||Oi(e,t)||XM(e,t)||(t==="opacity"?1:0))),i&&!~(s+"").trim().indexOf(" ")?fo(e,t,s,i)+i:s},RC=function(e,t,i,r){if(!i||i==="none"){var s=wl(t,e,1),o=s&&Oi(e,s,1);o&&o!==i?(t=s,i=o):t==="borderColor"&&(i=Oi(e,"borderTopColor"))}var a=new xi(this._pt,e.style,t,0,1,vE),l=0,u=0,c,d,f,h,m,v,_,p,g,x,y,T;if(a.b=i,a.e=r,i+="",r+="",r.substring(0,6)==="var(--"&&(r=Oi(e,r.substring(4,r.indexOf(")")))),r==="auto"&&(v=e.style[t],e.style[t]=r,r=Oi(e,t)||r,v?e.style[t]=v:co(e,t)),c=[i,r],cE(c),i=c[0],r=c[1],f=i.match(Ka)||[],T=r.match(Ka)||[],T.length){for(;d=Ka.exec(r);)_=d[0],g=r.substring(l,d.index),m?m=(m+1)%5:(g.substr(-5)==="rgba("||g.substr(-5)==="hsla(")&&(m=1),_!==(v=f[u++]||"")&&(h=parseFloat(v)||0,y=v.substr((h+"").length),_.charAt(1)==="="&&(_=sl(h,_)+y),p=parseFloat(_),x=_.substr((p+"").length),l=Ka.lastIndex-x.length,x||(x=x||Bi.units[t]||y,l===r.length&&(r+=x,a.e+=x)),y!==x&&(h=fo(e,t,v,x)||0),a._pt={_next:a._pt,p:g||u===1?g:",",s:h,c:p-h,m:m&&m<4||t==="zIndex"?Math.round:0});a.c=l<r.length?r.substring(l,r.length):""}else a.r=t==="display"&&r==="none"?ME:yE;return zM.test(r)&&(a.e=0),this._pt=a,a},nx={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},bC=function(e){var t=e.split(" "),i=t[0],r=t[1]||"50%";return(i==="top"||i==="bottom"||r==="left"||r==="right")&&(e=i,i=r,r=e),t[0]=nx[i]||i,t[1]=nx[r]||r,t.join(" ")},PC=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var i=t.t,r=i.style,s=t.u,o=i._gsap,a,l,u;if(s==="all"||s===!0)r.cssText="",l=1;else for(s=s.split(","),u=s.length;--u>-1;)a=s[u],Ss[a]&&(l=1,a=a==="transformOrigin"?Si:Yt),co(i,a);l&&(co(i,Yt),o&&(o.svg&&i.removeAttribute("transform"),r.scale=r.rotate=r.translate="none",lc(i,1),o.uncache=1,EE(r)))}},Rd={clearProps:function(e,t,i,r,s){if(s.data!=="isFromStart"){var o=e._pt=new xi(e._pt,t,i,0,0,PC);return o.u=r,o.pr=-10,o.tween=s,e._props.push(i),1}}},ac=[1,0,0,1,0,0],RE={},bE=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},ix=function(e){var t=Oi(e,Yt);return bE(t)?ac:t.substr(7).match(BM).map(rn)},i0=function(e,t){var i=e._gsap||Go(e),r=e.style,s=ix(e),o,a,l,u;return i.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?ac:s):(s===ac&&!e.offsetParent&&e!==ol&&!i.svg&&(l=r.display,r.display="block",o=e.parentNode,(!o||!e.offsetParent&&!e.getBoundingClientRect().width)&&(u=1,a=e.nextElementSibling,ol.appendChild(e)),s=ix(e),l?r.display=l:co(e,"display"),u&&(a?o.insertBefore(e,a):o?o.appendChild(e):ol.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},zm=function(e,t,i,r,s,o){var a=e._gsap,l=s||i0(e,!0),u=a.xOrigin||0,c=a.yOrigin||0,d=a.xOffset||0,f=a.yOffset||0,h=l[0],m=l[1],v=l[2],_=l[3],p=l[4],g=l[5],x=t.split(" "),y=parseFloat(x[0])||0,T=parseFloat(x[1])||0,E,w,S,C;i?l!==ac&&(w=h*_-m*v)&&(S=y*(_/w)+T*(-v/w)+(v*g-_*p)/w,C=y*(-m/w)+T*(h/w)-(h*g-m*p)/w,y=S,T=C):(E=AE(e),y=E.x+(~x[0].indexOf("%")?y/100*E.width:y),T=E.y+(~(x[1]||x[0]).indexOf("%")?T/100*E.height:T)),r||r!==!1&&a.smooth?(p=y-u,g=T-c,a.xOffset=d+(p*h+g*v)-p,a.yOffset=f+(p*m+g*_)-g):a.xOffset=a.yOffset=0,a.xOrigin=y,a.yOrigin=T,a.smooth=!!r,a.origin=t,a.originIsAbsolute=!!i,e.style[Si]="0px 0px",o&&(Xs(o,a,"xOrigin",u,y),Xs(o,a,"yOrigin",c,T),Xs(o,a,"xOffset",d,a.xOffset),Xs(o,a,"yOffset",f,a.yOffset)),e.setAttribute("data-svg-origin",y+" "+T)},lc=function(e,t){var i=e._gsap||new dE(e);if("x"in i&&!t&&!i.uncache)return i;var r=e.style,s=i.scaleX<0,o="px",a="deg",l=getComputedStyle(e),u=Oi(e,Si)||"0",c,d,f,h,m,v,_,p,g,x,y,T,E,w,S,C,b,D,L,O,H,N,B,I,F,W,P,ee,ue,ve,Le,Ce;return c=d=f=v=_=p=g=x=y=0,h=m=1,i.svg=!!(e.getCTM&&CE(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(r[Yt]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Yt]!=="none"?l[Yt]:"")),r.scale=r.rotate=r.translate="none"),w=i0(e,i.svg),i.svg&&(i.uncache?(F=e.getBBox(),u=i.xOrigin-F.x+"px "+(i.yOrigin-F.y)+"px",I=""):I=!t&&e.getAttribute("data-svg-origin"),zm(e,I||u,!!I||i.originIsAbsolute,i.smooth!==!1,w)),T=i.xOrigin||0,E=i.yOrigin||0,w!==ac&&(D=w[0],L=w[1],O=w[2],H=w[3],c=N=w[4],d=B=w[5],w.length===6?(h=Math.sqrt(D*D+L*L),m=Math.sqrt(H*H+O*O),v=D||L?pa(L,D)*Ro:0,g=O||H?pa(O,H)*Ro+v:0,g&&(m*=Math.abs(Math.cos(g*al))),i.svg&&(c-=T-(T*D+E*O),d-=E-(T*L+E*H))):(Ce=w[6],ve=w[7],P=w[8],ee=w[9],ue=w[10],Le=w[11],c=w[12],d=w[13],f=w[14],S=pa(Ce,ue),_=S*Ro,S&&(C=Math.cos(-S),b=Math.sin(-S),I=N*C+P*b,F=B*C+ee*b,W=Ce*C+ue*b,P=N*-b+P*C,ee=B*-b+ee*C,ue=Ce*-b+ue*C,Le=ve*-b+Le*C,N=I,B=F,Ce=W),S=pa(-O,ue),p=S*Ro,S&&(C=Math.cos(-S),b=Math.sin(-S),I=D*C-P*b,F=L*C-ee*b,W=O*C-ue*b,Le=H*b+Le*C,D=I,L=F,O=W),S=pa(L,D),v=S*Ro,S&&(C=Math.cos(S),b=Math.sin(S),I=D*C+L*b,F=N*C+B*b,L=L*C-D*b,B=B*C-N*b,D=I,N=F),_&&Math.abs(_)+Math.abs(v)>359.9&&(_=v=0,p=180-p),h=rn(Math.sqrt(D*D+L*L+O*O)),m=rn(Math.sqrt(B*B+Ce*Ce)),S=pa(N,B),g=Math.abs(S)>2e-4?S*Ro:0,y=Le?1/(Le<0?-Le:Le):0),i.svg&&(I=e.getAttribute("transform"),i.forceCSS=e.setAttribute("transform","")||!bE(Oi(e,Yt)),I&&e.setAttribute("transform",I))),Math.abs(g)>90&&Math.abs(g)<270&&(s?(h*=-1,g+=v<=0?180:-180,v+=v<=0?180:-180):(m*=-1,g+=g<=0?180:-180)),t=t||i.uncache,i.x=c-((i.xPercent=c&&(!t&&i.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-c)?-50:0)))?e.offsetWidth*i.xPercent/100:0)+o,i.y=d-((i.yPercent=d&&(!t&&i.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-d)?-50:0)))?e.offsetHeight*i.yPercent/100:0)+o,i.z=f+o,i.scaleX=rn(h),i.scaleY=rn(m),i.rotation=rn(v)+a,i.rotationX=rn(_)+a,i.rotationY=rn(p)+a,i.skewX=g+a,i.skewY=x+a,i.transformPerspective=y+o,(i.zOrigin=parseFloat(u.split(" ")[2])||!t&&i.zOrigin||0)&&(r[Si]=bd(u)),i.xOffset=i.yOffset=0,i.force3D=Bi.force3D,i.renderTransform=i.svg?LC:wE?PE:DC,i.uncache=0,i},bd=function(e){return(e=e.split(" "))[0]+" "+e[1]},Xh=function(e,t,i){var r=Xn(t);return rn(parseFloat(t)+parseFloat(fo(e,"x",i+"px",r)))+r},DC=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,PE(e,t)},So="0deg",Xl="0px",yo=") ",PE=function(e,t){var i=t||this,r=i.xPercent,s=i.yPercent,o=i.x,a=i.y,l=i.z,u=i.rotation,c=i.rotationY,d=i.rotationX,f=i.skewX,h=i.skewY,m=i.scaleX,v=i.scaleY,_=i.transformPerspective,p=i.force3D,g=i.target,x=i.zOrigin,y="",T=p==="auto"&&e&&e!==1||p===!0;if(x&&(d!==So||c!==So)){var E=parseFloat(c)*al,w=Math.sin(E),S=Math.cos(E),C;E=parseFloat(d)*al,C=Math.cos(E),o=Xh(g,o,w*C*-x),a=Xh(g,a,-Math.sin(E)*-x),l=Xh(g,l,S*C*-x+x)}_!==Xl&&(y+="perspective("+_+yo),(r||s)&&(y+="translate("+r+"%, "+s+"%) "),(T||o!==Xl||a!==Xl||l!==Xl)&&(y+=l!==Xl||T?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+yo),u!==So&&(y+="rotate("+u+yo),c!==So&&(y+="rotateY("+c+yo),d!==So&&(y+="rotateX("+d+yo),(f!==So||h!==So)&&(y+="skew("+f+", "+h+yo),(m!==1||v!==1)&&(y+="scale("+m+", "+v+yo),g.style[Yt]=y||"translate(0, 0)"},LC=function(e,t){var i=t||this,r=i.xPercent,s=i.yPercent,o=i.x,a=i.y,l=i.rotation,u=i.skewX,c=i.skewY,d=i.scaleX,f=i.scaleY,h=i.target,m=i.xOrigin,v=i.yOrigin,_=i.xOffset,p=i.yOffset,g=i.forceCSS,x=parseFloat(o),y=parseFloat(a),T,E,w,S,C;l=parseFloat(l),u=parseFloat(u),c=parseFloat(c),c&&(c=parseFloat(c),u+=c,l+=c),l||u?(l*=al,u*=al,T=Math.cos(l)*d,E=Math.sin(l)*d,w=Math.sin(l-u)*-f,S=Math.cos(l-u)*f,u&&(c*=al,C=Math.tan(u-c),C=Math.sqrt(1+C*C),w*=C,S*=C,c&&(C=Math.tan(c),C=Math.sqrt(1+C*C),T*=C,E*=C)),T=rn(T),E=rn(E),w=rn(w),S=rn(S)):(T=d,S=f,E=w=0),(x&&!~(o+"").indexOf("px")||y&&!~(a+"").indexOf("px"))&&(x=fo(h,"x",o,"px"),y=fo(h,"y",a,"px")),(m||v||_||p)&&(x=rn(x+m-(m*T+v*w)+_),y=rn(y+v-(m*E+v*S)+p)),(r||s)&&(C=h.getBBox(),x=rn(x+r/100*C.width),y=rn(y+s/100*C.height)),C="matrix("+T+","+E+","+w+","+S+","+x+","+y+")",h.setAttribute("transform",C),g&&(h.style[Yt]=C)},NC=function(e,t,i,r,s){var o=360,a=Rn(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?Ro:1),u=l-r,c=r+u+"deg",d,f;return a&&(d=s.split("_")[1],d==="short"&&(u%=o,u!==u%(o/2)&&(u+=u<0?o:-o)),d==="cw"&&u<0?u=(u+o*Zv)%o-~~(u/o)*o:d==="ccw"&&u>0&&(u=(u-o*Zv)%o-~~(u/o)*o)),e._pt=f=new xi(e._pt,t,i,r,u,mC),f.e=c,f.u="deg",e._props.push(i),f},rx=function(e,t){for(var i in t)e[i]=t[i];return e},IC=function(e,t,i){var r=rx({},i._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=i.style,a,l,u,c,d,f,h,m;r.svg?(u=i.getAttribute("transform"),i.setAttribute("transform",""),o[Yt]=t,a=lc(i,1),co(i,Yt),i.setAttribute("transform",u)):(u=getComputedStyle(i)[Yt],o[Yt]=t,a=lc(i,1),o[Yt]=u);for(l in Ss)u=r[l],c=a[l],u!==c&&s.indexOf(l)<0&&(h=Xn(u),m=Xn(c),d=h!==m?fo(i,l,u,m):parseFloat(u),f=parseFloat(c),e._pt=new xi(e._pt,a,l,d,f-d,Om),e._pt.u=m||0,e._props.push(l));rx(a,r)};vi("padding,margin,Width,Radius",function(n,e){var t="Top",i="Right",r="Bottom",s="Left",o=(e<3?[t,i,r,s]:[t+s,t+i,r+i,r+s]).map(function(a){return e<2?n+a:"border"+a+n});Rd[e>1?"border"+n:n]=function(a,l,u,c,d){var f,h;if(arguments.length<4)return f=o.map(function(m){return ss(a,m,u)}),h=f.join(" "),h.split(f[0]).length===5?f[0]:h;f=(c+"").split(" "),h={},o.forEach(function(m,v){return h[m]=f[v]=f[v]||f[(v-1)/2|0]}),a.init(l,h,d)}});var DE={name:"css",register:Bm,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,i,r,s){var o=this._props,a=e.style,l=i.vars.startAt,u,c,d,f,h,m,v,_,p,g,x,y,T,E,w,S,C;e0||Bm(),this.styles=this.styles||TE(e),S=this.styles.props,this.tween=i;for(v in t)if(v!=="autoRound"&&(c=t[v],!(Pi[v]&&hE(v,t,i,r,e,s)))){if(h=typeof c,m=Rd[v],h==="function"&&(c=c.call(i,r,e,s),h=typeof c),h==="string"&&~c.indexOf("random(")&&(c=rc(c)),m)m(this,e,v,c,i)&&(w=1);else if(v.substr(0,2)==="--")u=(getComputedStyle(e).getPropertyValue(v)+"").trim(),c+="",ro.lastIndex=0,ro.test(u)||(_=Xn(u),p=Xn(c),p?_!==p&&(u=fo(e,v,u,p)+p):_&&(c+=_)),this.add(a,"setProperty",u,c,r,s,0,0,v),o.push(v),S.push(v,0,a[v]);else if(h!=="undefined"){if(l&&v in l?(u=typeof l[v]=="function"?l[v].call(i,r,e,s):l[v],Rn(u)&&~u.indexOf("random(")&&(u=rc(u)),Xn(u+"")||u==="auto"||(u+=Bi.units[v]||Xn(ss(e,v))||""),(u+"").charAt(1)==="="&&(u=ss(e,v))):u=ss(e,v),f=parseFloat(u),g=h==="string"&&c.charAt(1)==="="&&c.substr(0,2),g&&(c=c.substr(2)),d=parseFloat(c),v in Fr&&(v==="autoAlpha"&&(f===1&&ss(e,"visibility")==="hidden"&&d&&(f=0),S.push("visibility",0,a.visibility),Xs(this,a,"visibility",f?"inherit":"hidden",d?"inherit":"hidden",!d)),v!=="scale"&&v!=="transform"&&(v=Fr[v],~v.indexOf(",")&&(v=v.split(",")[0]))),x=v in Ss,x){if(this.styles.save(v),C=c,h==="string"&&c.substring(0,6)==="var(--"){if(c=Oi(e,c.substring(4,c.indexOf(")"))),c.substring(0,5)==="calc("){var b=e.style.perspective;e.style.perspective=c,c=Oi(e,"perspective"),b?e.style.perspective=b:co(e,"perspective")}d=parseFloat(c)}if(y||(T=e._gsap,T.renderTransform&&!t.parseTransform||lc(e,t.parseTransform),E=t.smoothOrigin!==!1&&T.smooth,y=this._pt=new xi(this._pt,a,Yt,0,1,T.renderTransform,T,0,-1),y.dep=1),v==="scale")this._pt=new xi(this._pt,T,"scaleY",T.scaleY,(g?sl(T.scaleY,g+d):d)-T.scaleY||0,Om),this._pt.u=0,o.push("scaleY",v),v+="X";else if(v==="transformOrigin"){S.push(Si,0,a[Si]),c=bC(c),T.svg?zm(e,c,0,E,0,this):(p=parseFloat(c.split(" ")[2])||0,p!==T.zOrigin&&Xs(this,T,"zOrigin",T.zOrigin,p),Xs(this,a,v,bd(u),bd(c)));continue}else if(v==="svgOrigin"){zm(e,c,1,E,0,this);continue}else if(v in RE){NC(this,T,v,f,g?sl(f,g+c):c);continue}else if(v==="smoothOrigin"){Xs(this,T,"smooth",T.smooth,c);continue}else if(v==="force3D"){T[v]=c;continue}else if(v==="transform"){IC(this,c,e);continue}}else v in a||(v=wl(v)||v);if(x||(d||d===0)&&(f||f===0)&&!pC.test(c)&&v in a)_=(u+"").substr((f+"").length),d||(d=0),p=Xn(c)||(v in Bi.units?Bi.units[v]:_),_!==p&&(f=fo(e,v,u,p)),this._pt=new xi(this._pt,x?T:a,v,f,(g?sl(f,g+d):d)-f,!x&&(p==="px"||v==="zIndex")&&t.autoRound!==!1?vC:Om),this._pt.u=p||0,x&&C!==c?(this._pt.b=u,this._pt.e=C,this._pt.r=_C):_!==p&&p!=="%"&&(this._pt.b=u,this._pt.r=gC);else if(v in a)RC.call(this,e,v,u,g?g+c:c);else if(v in e)this.add(e,v,u||e[v],g?g+c:c,r,s);else if(v!=="parseTransform"){W_(v,c);continue}x||(v in a?S.push(v,0,a[v]):typeof e[v]=="function"?S.push(v,2,e[v]()):S.push(v,1,u||e[v])),o.push(v)}}w&&xE(this)},render:function(e,t){if(t.tween._time||!t0())for(var i=t._pt;i;)i.r(e,i.d),i=i._next;else t.styles.revert()},get:ss,aliases:Fr,getSetter:function(e,t,i){var r=Fr[t];return r&&r.indexOf(",")<0&&(t=r),t in Ss&&t!==Si&&(e._gsap.x||ss(e,"x"))?i&&Kv===i?t==="scale"?MC:yC:(Kv=i||{})&&(t==="scale"?EC:TC):e.style&&!V_(e.style[t])?xC:~t.indexOf("-")?SC:Q_(e,t)},core:{_removeProperty:co,_getMatrix:i0}};Mi.utils.checkPrefix=wl;Mi.core.getStyleSaver=TE;(function(n,e,t,i){var r=vi(n+","+e+","+t,function(s){Ss[s]=1});vi(e,function(s){Bi.units[s]="deg",RE[s]=1}),Fr[r[13]]=n+","+e,vi(i,function(s){var o=s.split(":");Fr[o[1]]=r[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");vi("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(n){Bi.units[n]="px"});Mi.registerPlugin(DE);var Cr=Mi.registerPlugin(DE)||Mi;Cr.core.Tween;function UC(n,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,i.key,i)}}function FC(n,e,t){return e&&UC(n.prototype,e),n}/*!
 * Observer 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Pn,zf,Ni,Ys,js,ll,LE,bo,ul,NE,us,dr,IE,UE=function(){return Pn||typeof window<"u"&&(Pn=window.gsap)&&Pn.registerPlugin&&Pn},FE=1,Qa=[],ut=[],Hr=[],bu=Date.now,Vm=function(e,t){return t},OC=function(){var e=ul.core,t=e.bridge||{},i=e._scrollers,r=e._proxies;i.push.apply(i,ut),r.push.apply(r,Hr),ut=i,Hr=r,Vm=function(o,a){return t[o](a)}},so=function(e,t){return~Hr.indexOf(e)&&Hr[Hr.indexOf(e)+1][t]},Pu=function(e){return!!~NE.indexOf(e)},Jn=function(e,t,i,r,s){return e.addEventListener(t,i,{passive:r!==!1,capture:!!s})},Zn=function(e,t,i,r){return e.removeEventListener(t,i,!!r)},zc="scrollLeft",Vc="scrollTop",Hm=function(){return us&&us.isPressed||ut.cache++},Pd=function(e,t){var i=function r(s){if(s||s===0){FE&&(Ni.history.scrollRestoration="manual");var o=us&&us.isPressed;s=r.v=Math.round(s)||(us&&us.iOS?1:0),e(s),r.cacheID=ut.cache,o&&Vm("ss",s)}else(t||ut.cache!==r.cacheID||Vm("ref"))&&(r.cacheID=ut.cache,r.v=e());return r.v+r.offset};return i.offset=0,e&&i},oi={s:zc,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:Pd(function(n){return arguments.length?Ni.scrollTo(n,gn.sc()):Ni.pageXOffset||Ys[zc]||js[zc]||ll[zc]||0})},gn={s:Vc,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:oi,sc:Pd(function(n){return arguments.length?Ni.scrollTo(oi.sc(),n):Ni.pageYOffset||Ys[Vc]||js[Vc]||ll[Vc]||0})},ci=function(e,t){return(t&&t._ctx&&t._ctx.selector||Pn.utils.toArray)(e)[0]||(typeof e=="string"&&Pn.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},kC=function(e,t){for(var i=t.length;i--;)if(t[i]===e||t[i].contains(e))return!0;return!1},ho=function(e,t){var i=t.s,r=t.sc;Pu(e)&&(e=Ys.scrollingElement||js);var s=ut.indexOf(e),o=r===gn.sc?1:2;!~s&&(s=ut.push(e)-1),ut[s+o]||Jn(e,"scroll",Hm);var a=ut[s+o],l=a||(ut[s+o]=Pd(so(e,i),!0)||(Pu(e)?r:Pd(function(u){return arguments.length?e[i]=u:e[i]})));return l.target=e,a||(l.smooth=Pn.getProperty(e,"scrollBehavior")==="smooth"),l},Gm=function(e,t,i){var r=e,s=e,o=bu(),a=o,l=t||50,u=Math.max(500,l*3),c=function(m,v){var _=bu();v||_-o>l?(s=r,r=m,a=o,o=_):i?r+=m:r=s+(m-s)/(_-a)*(o-a)},d=function(){s=r=i?0:r,a=o=0},f=function(m){var v=a,_=s,p=bu();return(m||m===0)&&m!==r&&c(m),o===a||p-a>u?0:(r+(i?_:-_))/((i?p:o)-v)*1e3};return{update:c,reset:d,getVelocity:f}},Yl=function(e,t){return t&&!e._gsapAllow&&e.cancelable!==!1&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},sx=function(e){var t=Math.max.apply(Math,e),i=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(i)?t:i},OE=function(){ul=Pn.core.globals().ScrollTrigger,ul&&ul.core&&OC()},kE=function(e){return Pn=e||UE(),!zf&&Pn&&typeof document<"u"&&document.body&&(Ni=window,Ys=document,js=Ys.documentElement,ll=Ys.body,NE=[Ni,Ys,js,ll],Pn.utils.clamp,IE=Pn.core.context||function(){},bo="onpointerenter"in ll?"pointer":"mouse",LE=on.isTouch=Ni.matchMedia&&Ni.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in Ni||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,dr=on.eventTypes=("ontouchstart"in js?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in js?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return FE=0},500),zf=1),ul||OE(),zf};oi.op=gn;ut.cache=0;var on=function(){function n(t){this.init(t)}var e=n.prototype;return e.init=function(i){zf||kE(Pn)||console.warn("Please gsap.registerPlugin(Observer)"),ul||OE();var r=i.tolerance,s=i.dragMinimum,o=i.type,a=i.target,l=i.lineHeight,u=i.debounce,c=i.preventDefault,d=i.onStop,f=i.onStopDelay,h=i.ignore,m=i.wheelSpeed,v=i.event,_=i.onDragStart,p=i.onDragEnd,g=i.onDrag,x=i.onPress,y=i.onRelease,T=i.onRight,E=i.onLeft,w=i.onUp,S=i.onDown,C=i.onChangeX,b=i.onChangeY,D=i.onChange,L=i.onToggleX,O=i.onToggleY,H=i.onHover,N=i.onHoverEnd,B=i.onMove,I=i.ignoreCheck,F=i.isNormalizer,W=i.onGestureStart,P=i.onGestureEnd,ee=i.onWheel,ue=i.onEnable,ve=i.onDisable,Le=i.onClick,Ce=i.scrollSpeed,$=i.capture,se=i.allowClicks,ae=i.lockAxis,Pe=i.onLockAxis;this.target=a=ci(a)||js,this.vars=i,h&&(h=Pn.utils.toArray(h)),r=r||1e-9,s=s||0,m=m||1,Ce=Ce||1,o=o||"wheel,touch,pointer",u=u!==!1,l||(l=parseFloat(Ni.getComputedStyle(ll).lineHeight)||22);var He,Ie,it,Re,We,tt,Ge,j=this,ct=0,Ht=0,k=i.passive||!c&&i.passive!==!1,Qe=ho(a,oi),qe=ho(a,gn),pt=Qe(),_e=qe(),et=~o.indexOf("touch")&&!~o.indexOf("pointer")&&dr[0]==="pointerdown",R=Pu(a),M=a.ownerDocument||Ys,V=[0,0,0],Z=[0,0,0],te=0,pe=function(){return te=bu()},ie=function(he,ze){return(j.event=he)&&h&&kC(he.target,h)||ze&&et&&he.pointerType!=="touch"||I&&I(he,ze)},K=function(){j._vx.reset(),j._vy.reset(),Ie.pause(),d&&d(j)},J=function(){var he=j.deltaX=sx(V),ze=j.deltaY=sx(Z),re=Math.abs(he)>=r,Ve=Math.abs(ze)>=r;D&&(re||Ve)&&D(j,he,ze,V,Z),re&&(T&&j.deltaX>0&&T(j),E&&j.deltaX<0&&E(j),C&&C(j),L&&j.deltaX<0!=ct<0&&L(j),ct=j.deltaX,V[0]=V[1]=V[2]=0),Ve&&(S&&j.deltaY>0&&S(j),w&&j.deltaY<0&&w(j),b&&b(j),O&&j.deltaY<0!=Ht<0&&O(j),Ht=j.deltaY,Z[0]=Z[1]=Z[2]=0),(Re||it)&&(B&&B(j),it&&(_&&it===1&&_(j),g&&g(j),it=0),Re=!1),tt&&!(tt=!1)&&Pe&&Pe(j),We&&(ee(j),We=!1),He=0},Se=function(he,ze,re){V[re]+=he,Z[re]+=ze,j._vx.update(he),j._vy.update(ze),u?He||(He=requestAnimationFrame(J)):J()},Ae=function(he,ze){ae&&!Ge&&(j.axis=Ge=Math.abs(he)>Math.abs(ze)?"x":"y",tt=!0),Ge!=="y"&&(V[2]+=he,j._vx.update(he,!0)),Ge!=="x"&&(Z[2]+=ze,j._vy.update(ze,!0)),u?He||(He=requestAnimationFrame(J)):J()},me=function(he){if(!ie(he,1)){he=Yl(he,c);var ze=he.clientX,re=he.clientY,Ve=ze-j.x,Ue=re-j.y,je=j.isDragging;j.x=ze,j.y=re,(je||(Ve||Ue)&&(Math.abs(j.startX-ze)>=s||Math.abs(j.startY-re)>=s))&&(it||(it=je?2:1),je||(j.isDragging=!0),Ae(Ve,Ue))}},ce=j.onPress=function(oe){ie(oe,1)||oe&&oe.button||(j.axis=Ge=null,Ie.pause(),j.isPressed=!0,oe=Yl(oe),ct=Ht=0,j.startX=j.x=oe.clientX,j.startY=j.y=oe.clientY,j._vx.reset(),j._vy.reset(),Jn(F?a:M,dr[1],me,k,!0),j.deltaX=j.deltaY=0,x&&x(j))},xe=j.onRelease=function(oe){if(!ie(oe,1)){Zn(F?a:M,dr[1],me,!0);var he=!isNaN(j.y-j.startY),ze=j.isDragging,re=ze&&(Math.abs(j.x-j.startX)>3||Math.abs(j.y-j.startY)>3),Ve=Yl(oe);!re&&he&&(j._vx.reset(),j._vy.reset(),c&&se&&Pn.delayedCall(.08,function(){if(bu()-te>300&&!oe.defaultPrevented){if(oe.target.click)oe.target.click();else if(M.createEvent){var Ue=M.createEvent("MouseEvents");Ue.initMouseEvent("click",!0,!0,Ni,1,Ve.screenX,Ve.screenY,Ve.clientX,Ve.clientY,!1,!1,!1,!1,0,null),oe.target.dispatchEvent(Ue)}}})),j.isDragging=j.isGesturing=j.isPressed=!1,d&&ze&&!F&&Ie.restart(!0),it&&J(),p&&ze&&p(j),y&&y(j,re)}},Xe=function(he){return he.touches&&he.touches.length>1&&(j.isGesturing=!0)&&W(he,j.isDragging)},Ke=function(){return(j.isGesturing=!1)||P(j)},U=function(he){if(!ie(he)){var ze=Qe(),re=qe();Se((ze-pt)*Ce,(re-_e)*Ce,1),pt=ze,_e=re,d&&Ie.restart(!0)}},le=function(he){if(!ie(he)){he=Yl(he,c),ee&&(We=!0);var ze=(he.deltaMode===1?l:he.deltaMode===2?Ni.innerHeight:1)*m;Se(he.deltaX*ze,he.deltaY*ze,0),d&&!F&&Ie.restart(!0)}},Q=function(he){if(!ie(he)){var ze=he.clientX,re=he.clientY,Ve=ze-j.x,Ue=re-j.y;j.x=ze,j.y=re,Re=!0,d&&Ie.restart(!0),(Ve||Ue)&&Ae(Ve,Ue)}},Me=function(he){j.event=he,H(j)},de=function(he){j.event=he,N(j)},ne=function(he){return ie(he)||Yl(he,c)&&Le(j)};Ie=j._dc=Pn.delayedCall(f||.25,K).pause(),j.deltaX=j.deltaY=0,j._vx=Gm(0,50,!0),j._vy=Gm(0,50,!0),j.scrollX=Qe,j.scrollY=qe,j.isDragging=j.isGesturing=j.isPressed=!1,IE(this),j.enable=function(oe){return j.isEnabled||(Jn(R?M:a,"scroll",Hm),o.indexOf("scroll")>=0&&Jn(R?M:a,"scroll",U,k,$),o.indexOf("wheel")>=0&&Jn(a,"wheel",le,k,$),(o.indexOf("touch")>=0&&LE||o.indexOf("pointer")>=0)&&(Jn(a,dr[0],ce,k,$),Jn(M,dr[2],xe),Jn(M,dr[3],xe),se&&Jn(a,"click",pe,!0,!0),Le&&Jn(a,"click",ne),W&&Jn(M,"gesturestart",Xe),P&&Jn(M,"gestureend",Ke),H&&Jn(a,bo+"enter",Me),N&&Jn(a,bo+"leave",de),B&&Jn(a,bo+"move",Q)),j.isEnabled=!0,j.isDragging=j.isGesturing=j.isPressed=Re=it=!1,j._vx.reset(),j._vy.reset(),pt=Qe(),_e=qe(),oe&&oe.type&&ce(oe),ue&&ue(j)),j},j.disable=function(){j.isEnabled&&(Qa.filter(function(oe){return oe!==j&&Pu(oe.target)}).length||Zn(R?M:a,"scroll",Hm),j.isPressed&&(j._vx.reset(),j._vy.reset(),Zn(F?a:M,dr[1],me,!0)),Zn(R?M:a,"scroll",U,$),Zn(a,"wheel",le,$),Zn(a,dr[0],ce,$),Zn(M,dr[2],xe),Zn(M,dr[3],xe),Zn(a,"click",pe,!0),Zn(a,"click",ne),Zn(M,"gesturestart",Xe),Zn(M,"gestureend",Ke),Zn(a,bo+"enter",Me),Zn(a,bo+"leave",de),Zn(a,bo+"move",Q),j.isEnabled=j.isPressed=j.isDragging=!1,ve&&ve(j))},j.kill=j.revert=function(){j.disable();var oe=Qa.indexOf(j);oe>=0&&Qa.splice(oe,1),us===j&&(us=0)},Qa.push(j),F&&Pu(a)&&(us=j),j.enable(v)},FC(n,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),n}();on.version="3.15.0";on.create=function(n){return new on(n)};on.register=kE;on.getAll=function(){return Qa.slice()};on.getById=function(n){return Qa.filter(function(e){return e.vars.id===n})[0]};UE()&&Pn.registerPlugin(on);/*!
 * ScrollTrigger 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Ne,Fa,lt,Mt,Di,yt,r0,Dd,uc,Du,uu,Hc,Hn,ah,Wm,ii,ox,ax,Oa,BE,Yh,zE,ti,Xm,VE,HE,Us,Ym,s0,cl,o0,Lu,jm,jh,Gc=1,Gn=Date.now,qh=Gn(),sr=0,cu=0,lx=function(e,t,i){var r=bi(e)&&(e.substr(0,6)==="clamp("||e.indexOf("max")>-1);return i["_"+t+"Clamp"]=r,r?e.substr(6,e.length-7):e},ux=function(e,t){return t&&(!bi(e)||e.substr(0,6)!=="clamp(")?"clamp("+e+")":e},BC=function n(){return cu&&requestAnimationFrame(n)},cx=function(){return ah=1},fx=function(){return ah=0},Pr=function(e){return e},fu=function(e){return Math.round(e*1e5)/1e5||0},GE=function(){return typeof window<"u"},WE=function(){return Ne||GE()&&(Ne=window.gsap)&&Ne.registerPlugin&&Ne},ta=function(e){return!!~r0.indexOf(e)},XE=function(e){return(e==="Height"?o0:lt["inner"+e])||Di["client"+e]||yt["client"+e]},YE=function(e){return so(e,"getBoundingClientRect")||(ta(e)?function(){return Xf.width=lt.innerWidth,Xf.height=o0,Xf}:function(){return os(e)})},zC=function(e,t,i){var r=i.d,s=i.d2,o=i.a;return(o=so(e,"getBoundingClientRect"))?function(){return o()[r]}:function(){return(t?XE(s):e["client"+s])||0}},VC=function(e,t){return!t||~Hr.indexOf(e)?YE(e):function(){return Xf}},Or=function(e,t){var i=t.s,r=t.d2,s=t.d,o=t.a;return Math.max(0,(i="scroll"+r)&&(o=so(e,i))?o()-YE(e)()[s]:ta(e)?(Di[i]||yt[i])-XE(r):e[i]-e["offset"+r])},Wc=function(e,t){for(var i=0;i<Oa.length;i+=3)(!t||~t.indexOf(Oa[i+1]))&&e(Oa[i],Oa[i+1],Oa[i+2])},bi=function(e){return typeof e=="string"},Yn=function(e){return typeof e=="function"},du=function(e){return typeof e=="number"},Po=function(e){return typeof e=="object"},jl=function(e,t,i){return e&&e.progress(t?0:1)&&i&&e.pause()},ma=function(e,t,i){if(e.enabled){var r=e._ctx?e._ctx.add(function(){return t(e,i)}):t(e,i);r&&r.totalTime&&(e.callbackAnimation=r)}},ga=Math.abs,jE="left",qE="top",a0="right",l0="bottom",jo="width",qo="height",Nu="Right",Iu="Left",Uu="Top",Fu="Bottom",cn="padding",Zi="margin",Al="Width",u0="Height",pn="px",Qi=function(e){return lt.getComputedStyle(e.nodeType===Node.DOCUMENT_NODE?e.scrollingElement:e)},HC=function(e){var t=Qi(e).position;e.style.position=t==="absolute"||t==="fixed"?t:"relative"},dx=function(e,t){for(var i in t)i in e||(e[i]=t[i]);return e},os=function(e,t){var i=t&&Qi(e)[Wm]!=="matrix(1, 0, 0, 1, 0, 0)"&&Ne.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),r=e.getBoundingClientRect?e.getBoundingClientRect():e.scrollingElement.getBoundingClientRect();return i&&i.progress(0).kill(),r},Ld=function(e,t){var i=t.d2;return e["offset"+i]||e["client"+i]||0},$E=function(e){var t=[],i=e.labels,r=e.duration(),s;for(s in i)t.push(i[s]/r);return t},GC=function(e){return function(t){return Ne.utils.snap($E(e),t)}},c0=function(e){var t=Ne.utils.snap(e),i=Array.isArray(e)&&e.slice(0).sort(function(r,s){return r-s});return i?function(r,s,o){o===void 0&&(o=.001);var a;if(!s)return t(r);if(s>0){for(r-=o,a=0;a<i.length;a++)if(i[a]>=r)return i[a];return i[a-1]}else for(a=i.length,r+=o;a--;)if(i[a]<=r)return i[a];return i[0]}:function(r,s,o){o===void 0&&(o=.001);var a=t(r);return!s||Math.abs(a-r)<o||a-r<0==s<0?a:t(s<0?r-e:r+e)}},WC=function(e){return function(t,i){return c0($E(e))(t,i.direction)}},Xc=function(e,t,i,r){return i.split(",").forEach(function(s){return e(t,s,r)})},wn=function(e,t,i,r,s){return e.addEventListener(t,i,{passive:!r,capture:!!s})},Tn=function(e,t,i,r){return e.removeEventListener(t,i,!!r)},Yc=function(e,t,i){i=i&&i.wheelHandler,i&&(e(t,"wheel",i),e(t,"touchmove",i))},hx={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},jc={toggleActions:"play",anticipatePin:0},Nd={top:0,left:0,center:.5,bottom:1,right:1},Vf=function(e,t){if(bi(e)){var i=e.indexOf("="),r=~i?+(e.charAt(i-1)+1)*parseFloat(e.substr(i+1)):0;~i&&(e.indexOf("%")>i&&(r*=t/100),e=e.substr(0,i-1)),e=r+(e in Nd?Nd[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e},qc=function(e,t,i,r,s,o,a,l){var u=s.startColor,c=s.endColor,d=s.fontSize,f=s.indent,h=s.fontWeight,m=Mt.createElement("div"),v=ta(i)||so(i,"pinType")==="fixed",_=e.indexOf("scroller")!==-1,p=v?yt:i.tagName==="IFRAME"?i.contentDocument.body:i,g=e.indexOf("start")!==-1,x=g?u:c,y="border-color:"+x+";font-size:"+d+";color:"+x+";font-weight:"+h+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return y+="position:"+((_||l)&&v?"fixed;":"absolute;"),(_||l||!v)&&(y+=(r===gn?a0:l0)+":"+(o+parseFloat(f))+"px;"),a&&(y+="box-sizing:border-box;text-align:left;width:"+a.offsetWidth+"px;"),m._isStart=g,m.setAttribute("class","gsap-marker-"+e+(t?" marker-"+t:"")),m.style.cssText=y,m.innerText=t||t===0?e+"-"+t:e,p.children[0]?p.insertBefore(m,p.children[0]):p.appendChild(m),m._offset=m["offset"+r.op.d2],Hf(m,0,r,g),m},Hf=function(e,t,i,r){var s={display:"block"},o=i[r?"os2":"p2"],a=i[r?"p2":"os2"];e._isFlipped=r,s[i.a+"Percent"]=r?-100:0,s[i.a]=r?"1px":0,s["border"+o+Al]=1,s["border"+a+Al]=0,s[i.p]=t+"px",Ne.set(e,s)},st=[],qm={},cc,px=function(){return Gn()-sr>34&&(cc||(cc=requestAnimationFrame(ds)))},_a=function(){(!ti||!ti.isPressed||ti.startX>yt.clientWidth)&&(ut.cache++,ti?cc||(cc=requestAnimationFrame(ds)):ds(),sr||ia("scrollStart"),sr=Gn())},$h=function(){HE=lt.innerWidth,VE=lt.innerHeight},hu=function(e){ut.cache++,(e===!0||!Hn&&!zE&&!Mt.fullscreenElement&&!Mt.webkitFullscreenElement&&(!Xm||HE!==lt.innerWidth||Math.abs(lt.innerHeight-VE)>lt.innerHeight*.25))&&Dd.restart(!0)},na={},XC=[],KE=function n(){return Tn($e,"scrollEnd",n)||ko(!0)},ia=function(e){return na[e]&&na[e].map(function(t){return t()})||XC},Ci=[],ZE=function(e){for(var t=0;t<Ci.length;t+=5)(!e||Ci[t+4]&&Ci[t+4].query===e)&&(Ci[t].style.cssText=Ci[t+1],Ci[t].getBBox&&Ci[t].setAttribute("transform",Ci[t+2]||""),Ci[t+3].uncache=1)},QE=function(){return ut.forEach(function(e){return Yn(e)&&++e.cacheID&&(e.rec=e())})},f0=function(e,t){var i;for(ii=0;ii<st.length;ii++)i=st[ii],i&&(!t||i._ctx===t)&&(e?i.kill(1):i.revert(!0,!0));Lu=!0,t&&ZE(t),t||ia("revert")},JE=function(e,t){ut.cache++,(t||!ri)&&ut.forEach(function(i){return Yn(i)&&i.cacheID++&&(i.rec=0)}),bi(e)&&(lt.history.scrollRestoration=s0=e)},ri,$o=0,mx,YC=function(){if(mx!==$o){var e=mx=$o;requestAnimationFrame(function(){return e===$o&&ko(!0)})}},e1=function(){yt.appendChild(cl),o0=!ti&&cl.offsetHeight||lt.innerHeight,yt.removeChild(cl)},gx=function(e){return uc(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(t){return t.style.display=e?"none":"block"})},ko=function(e,t){if(Di=Mt.documentElement,yt=Mt.body,r0=[lt,Mt,Di,yt],sr&&!e&&!Lu){wn($e,"scrollEnd",KE);return}e1(),ri=$e.isRefreshing=!0,Lu||QE();var i=ia("refreshInit");BE&&$e.sort(),t||f0(),ut.forEach(function(r){Yn(r)&&(r.smooth&&(r.target.style.scrollBehavior="auto"),r(0))}),st.slice(0).forEach(function(r){return r.refresh()}),Lu=!1,st.forEach(function(r){if(r._subPinOffset&&r.pin){var s=r.vars.horizontal?"offsetWidth":"offsetHeight",o=r.pin[s];r.revert(!0,1),r.adjustPinSpacing(r.pin[s]-o),r.refresh()}}),jm=1,gx(!0),st.forEach(function(r){var s=Or(r.scroller,r._dir),o=r.vars.end==="max"||r._endClamp&&r.end>s,a=r._startClamp&&r.start>=s;(o||a)&&r.setPositions(a?s-1:r.start,o?Math.max(a?s:r.start+1,s):r.end,!0)}),gx(!1),jm=0,i.forEach(function(r){return r&&r.render&&r.render(-1)}),ut.forEach(function(r){Yn(r)&&(r.smooth&&requestAnimationFrame(function(){return r.target.style.scrollBehavior="smooth"}),r.rec&&r(r.rec))}),JE(s0,1),Dd.pause(),$o++,ri=2,ds(2),st.forEach(function(r){return Yn(r.vars.onRefresh)&&r.vars.onRefresh(r)}),ri=$e.isRefreshing=!1,ia("refresh")},$m=0,Gf=1,Ou,ds=function(e){if(e===2||!ri&&!Lu){$e.isUpdating=!0,Ou&&Ou.update(0);var t=st.length,i=Gn(),r=i-qh>=50,s=t&&st[0].scroll();if(Gf=$m>s?-1:1,ri||($m=s),r&&(sr&&!ah&&i-sr>200&&(sr=0,ia("scrollEnd")),uu=qh,qh=i),Gf<0){for(ii=t;ii-- >0;)st[ii]&&st[ii].update(0,r);Gf=1}else for(ii=0;ii<t;ii++)st[ii]&&st[ii].update(0,r);$e.isUpdating=!1}cc=0},Km=[jE,qE,l0,a0,Zi+Fu,Zi+Nu,Zi+Uu,Zi+Iu,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],Wf=Km.concat([jo,qo,"boxSizing","max"+Al,"max"+u0,"position",Zi,cn,cn+Uu,cn+Nu,cn+Fu,cn+Iu]),jC=function(e,t,i){fl(i);var r=e._gsap;if(r.spacerIsNative)fl(r.spacerState);else if(e._gsap.swappedIn){var s=t.parentNode;s&&(s.insertBefore(e,t),s.removeChild(t))}e._gsap.swappedIn=!1},Kh=function(e,t,i,r){if(!e._gsap.swappedIn){for(var s=Km.length,o=t.style,a=e.style,l;s--;)l=Km[s],o[l]=i[l];o.position=i.position==="absolute"?"absolute":"relative",i.display==="inline"&&(o.display="inline-block"),a[l0]=a[a0]="auto",o.flexBasis=i.flexBasis||"auto",o.overflow="visible",o.boxSizing="border-box",o[jo]=Ld(e,oi)+pn,o[qo]=Ld(e,gn)+pn,o[cn]=a[Zi]=a[qE]=a[jE]="0",fl(r),a[jo]=a["max"+Al]=i[jo],a[qo]=a["max"+u0]=i[qo],a[cn]=i[cn],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}},qC=/([A-Z])/g,fl=function(e){if(e){var t=e.t.style,i=e.length,r=0,s,o;for((e.t._gsap||Ne.core.getCache(e.t)).uncache=1;r<i;r+=2)o=e[r+1],s=e[r],o?t[s]=o:t[s]&&t.removeProperty(s.replace(qC,"-$1").toLowerCase())}},$c=function(e){for(var t=Wf.length,i=e.style,r=[],s=0;s<t;s++)r.push(Wf[s],i[Wf[s]]);return r.t=e,r},$C=function(e,t,i){for(var r=[],s=e.length,o=i?8:0,a;o<s;o+=2)a=e[o],r.push(a,a in t?t[a]:e[o+1]);return r.t=e.t,r},Xf={left:0,top:0},_x=function(e,t,i,r,s,o,a,l,u,c,d,f,h,m){Yn(e)&&(e=e(l)),bi(e)&&e.substr(0,3)==="max"&&(e=f+(e.charAt(4)==="="?Vf("0"+e.substr(3),i):0));var v=h?h.time():0,_,p,g;if(h&&h.seek(0),isNaN(e)||(e=+e),du(e))h&&(e=Ne.utils.mapRange(h.scrollTrigger.start,h.scrollTrigger.end,0,f,e)),a&&Hf(a,i,r,!0);else{Yn(t)&&(t=t(l));var x=(e||"0").split(" "),y,T,E,w;g=ci(t,l)||yt,y=os(g)||{},(!y||!y.left&&!y.top)&&Qi(g).display==="none"&&(w=g.style.display,g.style.display="block",y=os(g),w?g.style.display=w:g.style.removeProperty("display")),T=Vf(x[0],y[r.d]),E=Vf(x[1]||"0",i),e=y[r.p]-u[r.p]-c+T+s-E,a&&Hf(a,E,r,i-E<20||a._isStart&&E>20),i-=i-E}if(m&&(l[m]=e||-.001,e<0&&(e=0)),o){var S=e+i,C=o._isStart;_="scroll"+r.d2,Hf(o,S,r,C&&S>20||!C&&(d?Math.max(yt[_],Di[_]):o.parentNode[_])<=S+1),d&&(u=os(a),d&&(o.style[r.op.p]=u[r.op.p]-r.op.m-o._offset+pn))}return h&&g&&(_=os(g),h.seek(f),p=os(g),h._caScrollDist=_[r.p]-p[r.p],e=e/h._caScrollDist*f),h&&h.seek(v),h?e:Math.round(e)},KC=/(webkit|moz|length|cssText|inset)/i,vx=function(e,t,i,r){if(e.parentNode!==t){var s=e.style,o,a;if(t===yt){e._stOrig=s.cssText,a=Qi(e);for(o in a)!+o&&!KC.test(o)&&a[o]&&typeof s[o]=="string"&&o!=="0"&&(s[o]=a[o]);s.top=i,s.left=r}else s.cssText=e._stOrig;Ne.core.getCache(e).uncache=1,t.appendChild(e)}},t1=function(e,t,i){var r=t,s=r;return function(o){var a=Math.round(e());return a!==r&&a!==s&&Math.abs(a-r)>3&&Math.abs(a-s)>3&&(o=a,i&&i()),s=r,r=Math.round(o),r}},Kc=function(e,t,i){var r={};r[t.p]="+="+i,Ne.set(e,r)},xx=function(e,t){var i=ho(e,t),r="_scroll"+t.p2,s=function o(a,l,u,c,d){var f=o.tween,h=l.onComplete,m={};u=u||i();var v=t1(i,u,function(){f.kill(),o.tween=0});return d=c&&d||0,c=c||a-u,f&&f.kill(),l[r]=a,l.inherit=!1,l.modifiers=m,m[r]=function(){return v(u+c*f.ratio+d*f.ratio*f.ratio)},l.onUpdate=function(){ut.cache++,o.tween&&ds()},l.onComplete=function(){o.tween=0,h&&h.call(f)},f=o.tween=Ne.to(e,l),f};return e[r]=i,i.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},wn(e,"wheel",i.wheelHandler),$e.isTouch&&wn(e,"touchmove",i.wheelHandler),s},$e=function(){function n(t,i){Fa||n.register(Ne)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),Ym(this),this.init(t,i)}var e=n.prototype;return e.init=function(i,r){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!cu){this.update=this.refresh=this.kill=Pr;return}i=dx(bi(i)||du(i)||i.nodeType?{trigger:i}:i,jc);var s=i,o=s.onUpdate,a=s.toggleClass,l=s.id,u=s.onToggle,c=s.onRefresh,d=s.scrub,f=s.trigger,h=s.pin,m=s.pinSpacing,v=s.invalidateOnRefresh,_=s.anticipatePin,p=s.onScrubComplete,g=s.onSnapComplete,x=s.once,y=s.snap,T=s.pinReparent,E=s.pinSpacer,w=s.containerAnimation,S=s.fastScrollEnd,C=s.preventOverlaps,b=i.horizontal||i.containerAnimation&&i.horizontal!==!1?oi:gn,D=!d&&d!==0,L=ci(i.scroller||lt),O=Ne.core.getCache(L),H=ta(L),N=("pinType"in i?i.pinType:so(L,"pinType")||H&&"fixed")==="fixed",B=[i.onEnter,i.onLeave,i.onEnterBack,i.onLeaveBack],I=D&&i.toggleActions.split(" "),F="markers"in i?i.markers:jc.markers,W=H?0:parseFloat(Qi(L)["border"+b.p2+Al])||0,P=this,ee=i.onRefreshInit&&function(){return i.onRefreshInit(P)},ue=zC(L,H,b),ve=VC(L,H),Le=0,Ce=0,$=0,se=ho(L,b),ae,Pe,He,Ie,it,Re,We,tt,Ge,j,ct,Ht,k,Qe,qe,pt,_e,et,R,M,V,Z,te,pe,ie,K,J,Se,Ae,me,ce,xe,Xe,Ke,U,le,Q,Me,de;if(P._startClamp=P._endClamp=!1,P._dir=b,_*=45,P.scroller=L,P.scroll=w?w.time.bind(w):se,Ie=se(),P.vars=i,r=r||i.animation,"refreshPriority"in i&&(BE=1,i.refreshPriority===-9999&&(Ou=P)),O.tweenScroll=O.tweenScroll||{top:xx(L,gn),left:xx(L,oi)},P.tweenTo=ae=O.tweenScroll[b.p],P.scrubDuration=function(re){Xe=du(re)&&re,Xe?xe?xe.duration(re):xe=Ne.to(r,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:Xe,paused:!0,onComplete:function(){return p&&p(P)}}):(xe&&xe.progress(1).kill(),xe=0)},r&&(r.vars.lazy=!1,r._initted&&!P.isReverted||r.vars.immediateRender!==!1&&i.immediateRender!==!1&&r.duration()&&r.render(0,!0,!0),P.animation=r.pause(),r.scrollTrigger=P,P.scrubDuration(d),me=0,l||(l=r.vars.id)),y&&((!Po(y)||y.push)&&(y={snapTo:y}),"scrollBehavior"in yt.style&&Ne.set(H?[yt,Di]:L,{scrollBehavior:"auto"}),ut.forEach(function(re){return Yn(re)&&re.target===(H?Mt.scrollingElement||Di:L)&&(re.smooth=!1)}),He=Yn(y.snapTo)?y.snapTo:y.snapTo==="labels"?GC(r):y.snapTo==="labelsDirectional"?WC(r):y.directional!==!1?function(re,Ve){return c0(y.snapTo)(re,Gn()-Ce<500?0:Ve.direction)}:Ne.utils.snap(y.snapTo),Ke=y.duration||{min:.1,max:2},Ke=Po(Ke)?Du(Ke.min,Ke.max):Du(Ke,Ke),U=Ne.delayedCall(y.delay||Xe/2||.1,function(){var re=se(),Ve=Gn()-Ce<500,Ue=ae.tween;if((Ve||Math.abs(P.getVelocity())<10)&&!Ue&&!ah&&Le!==re){var je=(re-Re)/Qe,an=r&&!D?r.totalProgress():je,at=Ve?0:(an-ce)/(Gn()-uu)*1e3||0,kt=Ne.utils.clamp(-je,1-je,ga(at/2)*at/.185),Bt=je+(y.inertia===!1?0:kt),Lt,Ct,St=y,Fn=St.onStart,Nt=St.onInterrupt,Sn=St.onComplete;if(Lt=He(Bt,P),du(Lt)||(Lt=Bt),Ct=Math.max(0,Math.round(Re+Lt*Qe)),re<=We&&re>=Re&&Ct!==re){if(Ue&&!Ue._initted&&Ue.data<=ga(Ct-re))return;y.inertia===!1&&(kt=Lt-je),ae(Ct,{duration:Ke(ga(Math.max(ga(Bt-an),ga(Lt-an))*.185/at/.05||0)),ease:y.ease||"power3",data:ga(Ct-re),onInterrupt:function(){return U.restart(!0)&&Nt&&ma(P,Nt)},onComplete:function(){P.update(),Le=se(),r&&!D&&(xe?xe.resetTo("totalProgress",Lt,r._tTime/r._tDur):r.progress(Lt)),me=ce=r&&!D?r.totalProgress():P.progress,g&&g(P),Sn&&ma(P,Sn)}},re,kt*Qe,Ct-re-kt*Qe),Fn&&ma(P,Fn,ae.tween)}}else P.isActive&&Le!==re&&U.restart(!0)}).pause()),l&&(qm[l]=P),f=P.trigger=ci(f||h!==!0&&h),de=f&&f._gsap&&f._gsap.stRevert,de&&(de=de(P)),h=h===!0?f:ci(h),bi(a)&&(a={targets:f,className:a}),h&&(m===!1||m===Zi||(m=!m&&h.parentNode&&h.parentNode.style&&Qi(h.parentNode).display==="flex"?!1:cn),P.pin=h,Pe=Ne.core.getCache(h),Pe.spacer?qe=Pe.pinState:(E&&(E=ci(E),E&&!E.nodeType&&(E=E.current||E.nativeElement),Pe.spacerIsNative=!!E,E&&(Pe.spacerState=$c(E))),Pe.spacer=et=E||Mt.createElement("div"),et.classList.add("pin-spacer"),l&&et.classList.add("pin-spacer-"+l),Pe.pinState=qe=$c(h)),i.force3D!==!1&&Ne.set(h,{force3D:!0}),P.spacer=et=Pe.spacer,Ae=Qi(h),pe=Ae[m+b.os2],M=Ne.getProperty(h),V=Ne.quickSetter(h,b.a,pn),Kh(h,et,Ae),_e=$c(h)),F){Ht=Po(F)?dx(F,hx):hx,j=qc("scroller-start",l,L,b,Ht,0),ct=qc("scroller-end",l,L,b,Ht,0,j),R=j["offset"+b.op.d2];var ne=ci(so(L,"content")||L);tt=this.markerStart=qc("start",l,ne,b,Ht,R,0,w),Ge=this.markerEnd=qc("end",l,ne,b,Ht,R,0,w),w&&(Me=Ne.quickSetter([tt,Ge],b.a,pn)),!N&&!(Hr.length&&so(L,"fixedMarkers")===!0)&&(HC(H?yt:L),Ne.set([j,ct],{force3D:!0}),K=Ne.quickSetter(j,b.a,pn),Se=Ne.quickSetter(ct,b.a,pn))}if(w){var oe=w.vars.onUpdate,he=w.vars.onUpdateParams;w.eventCallback("onUpdate",function(){P.update(0,0,1),oe&&oe.apply(w,he||[])})}if(P.previous=function(){return st[st.indexOf(P)-1]},P.next=function(){return st[st.indexOf(P)+1]},P.revert=function(re,Ve){if(!Ve)return P.kill(!0);var Ue=re!==!1||!P.enabled,je=Hn;Ue!==P.isReverted&&(Ue&&(le=Math.max(se(),P.scroll.rec||0),$=P.progress,Q=r&&r.progress()),tt&&[tt,Ge,j,ct].forEach(function(an){return an.style.display=Ue?"none":"block"}),Ue&&(Hn=P,P.update(Ue)),h&&(!T||!P.isActive)&&(Ue?jC(h,et,qe):Kh(h,et,Qi(h),ie)),Ue||P.update(Ue),Hn=je,P.isReverted=Ue)},P.refresh=function(re,Ve,Ue,je){if(!((Hn||!P.enabled)&&!Ve)){if(h&&re&&sr){wn(n,"scrollEnd",KE);return}!ri&&ee&&ee(P),Hn=P,ae.tween&&!Ue&&(ae.tween.kill(),ae.tween=0),xe&&xe.pause(),v&&r&&(r.revert({kill:!1}).invalidate(),r.getChildren?r.getChildren(!0,!0,!1).forEach(function(Ee){return Ee.vars.immediateRender&&Ee.render(0,!0,!0)}):r.vars.immediateRender&&r.render(0,!0,!0)),P.isReverted||P.revert(!0,!0),P._subPinOffset=!1;var an=ue(),at=ve(),kt=w?w.duration():Or(L,b),Bt=Qe<=.01||!Qe,Lt=0,Ct=je||0,St=Po(Ue)?Ue.end:i.end,Fn=i.endTrigger||f,Nt=Po(Ue)?Ue.start:i.start||(i.start===0||!f?0:h?"0 0":"0 100%"),Sn=P.pinnedContainer=i.pinnedContainer&&ci(i.pinnedContainer,P),Ei=f&&Math.max(0,st.indexOf(P))||0,ln=Ei,hn,yn,Kr,ca,Mn,en,Xi,A,z,q,G,X,ye;for(F&&Po(Ue)&&(X=Ne.getProperty(j,b.p),ye=Ne.getProperty(ct,b.p));ln-- >0;)en=st[ln],en.end||en.refresh(0,1)||(Hn=P),Xi=en.pin,Xi&&(Xi===f||Xi===h||Xi===Sn)&&!en.isReverted&&(q||(q=[]),q.unshift(en),en.revert(!0,!0)),en!==st[ln]&&(Ei--,ln--);for(Yn(Nt)&&(Nt=Nt(P)),Nt=lx(Nt,"start",P),Re=_x(Nt,f,an,b,se(),tt,j,P,at,W,N,kt,w,P._startClamp&&"_startClamp")||(h?-.001:0),Yn(St)&&(St=St(P)),bi(St)&&!St.indexOf("+=")&&(~St.indexOf(" ")?St=(bi(Nt)?Nt.split(" ")[0]:"")+St:(Lt=Vf(St.substr(2),an),St=bi(Nt)?Nt:(w?Ne.utils.mapRange(0,w.duration(),w.scrollTrigger.start,w.scrollTrigger.end,Re):Re)+Lt,Fn=f)),St=lx(St,"end",P),We=Math.max(Re,_x(St||(Fn?"100% 0":kt),Fn,an,b,se()+Lt,Ge,ct,P,at,W,N,kt,w,P._endClamp&&"_endClamp"))||-.001,Lt=0,ln=Ei;ln--;)en=st[ln]||{},Xi=en.pin,Xi&&en.start-en._pinPush<=Re&&!w&&en.end>0&&(hn=en.end-(P._startClamp?Math.max(0,en.start):en.start),(Xi===f&&en.start-en._pinPush<Re||Xi===Sn)&&isNaN(Nt)&&(Lt+=hn*(1-en.progress)),Xi===h&&(Ct+=hn));if(Re+=Lt,We+=Lt,P._startClamp&&(P._startClamp+=Lt),P._endClamp&&!ri&&(P._endClamp=We||-.001,We=Math.min(We,Or(L,b))),Qe=We-Re||(Re-=.01)&&.001,Bt&&($=Ne.utils.clamp(0,1,Ne.utils.normalize(Re,We,le))),P._pinPush=Ct,tt&&Lt&&(hn={},hn[b.a]="+="+Lt,Sn&&(hn[b.p]="-="+se()),Ne.set([tt,Ge],hn)),h&&!(jm&&P.end>=Or(L,b)))hn=Qi(h),ca=b===gn,Kr=se(),Z=parseFloat(M(b.a))+Ct,!kt&&We>1&&(G=(H?Mt.scrollingElement||Di:L).style,G={style:G,value:G["overflow"+b.a.toUpperCase()]},H&&Qi(yt)["overflow"+b.a.toUpperCase()]!=="scroll"&&(G.style["overflow"+b.a.toUpperCase()]="scroll")),Kh(h,et,hn),_e=$c(h),yn=os(h,!0),A=N&&ho(L,ca?oi:gn)(),m?(ie=[m+b.os2,Qe+Ct+pn],ie.t=et,ln=m===cn?Ld(h,b)+Qe+Ct:0,ln&&(ie.push(b.d,ln+pn),et.style.flexBasis!=="auto"&&(et.style.flexBasis=ln+pn)),fl(ie),Sn&&st.forEach(function(Ee){Ee.pin===Sn&&Ee.vars.pinSpacing!==!1&&(Ee._subPinOffset=!0)}),N&&se(le)):(ln=Ld(h,b),ln&&et.style.flexBasis!=="auto"&&(et.style.flexBasis=ln+pn)),N&&(Mn={top:yn.top+(ca?Kr-Re:A)+pn,left:yn.left+(ca?A:Kr-Re)+pn,boxSizing:"border-box",position:"fixed"},Mn[jo]=Mn["max"+Al]=Math.ceil(yn.width)+pn,Mn[qo]=Mn["max"+u0]=Math.ceil(yn.height)+pn,Mn[Zi]=Mn[Zi+Uu]=Mn[Zi+Nu]=Mn[Zi+Fu]=Mn[Zi+Iu]="0",Mn[cn]=hn[cn],Mn[cn+Uu]=hn[cn+Uu],Mn[cn+Nu]=hn[cn+Nu],Mn[cn+Fu]=hn[cn+Fu],Mn[cn+Iu]=hn[cn+Iu],pt=$C(qe,Mn,T),ri&&se(0)),r?(z=r._initted,Yh(1),r.render(r.duration(),!0,!0),te=M(b.a)-Z+Qe+Ct,J=Math.abs(Qe-te)>1,N&&J&&pt.splice(pt.length-2,2),r.render(0,!0,!0),z||r.invalidate(!0),r.parent||r.totalTime(r.totalTime()),Yh(0)):te=Qe,G&&(G.value?G.style["overflow"+b.a.toUpperCase()]=G.value:G.style.removeProperty("overflow-"+b.a));else if(f&&se()&&!w)for(yn=f.parentNode;yn&&yn!==yt;)yn._pinOffset&&(Re-=yn._pinOffset,We-=yn._pinOffset),yn=yn.parentNode;q&&q.forEach(function(Ee){return Ee.revert(!1,!0)}),P.start=Re,P.end=We,Ie=it=ri?le:se(),!w&&!ri&&(Ie<le&&se(le),P.scroll.rec=0),P.revert(!1,!0),Ce=Gn(),U&&(Le=-1,U.restart(!0)),Hn=0,r&&D&&(r._initted||Q)&&r.progress()!==Q&&r.progress(Q||0,!0).render(r.time(),!0,!0),(Bt||$!==P.progress||w||v||r&&!r._initted)&&(r&&!D&&(r._initted||$||r.vars.immediateRender!==!1)&&r.totalProgress(w&&Re<-.001&&!$?Ne.utils.normalize(Re,We,0):$,!0),P.progress=Bt||(Ie-Re)/Qe===$?0:$),h&&m&&(et._pinOffset=Math.round(P.progress*te)),xe&&xe.invalidate(),isNaN(X)||(X-=Ne.getProperty(j,b.p),ye-=Ne.getProperty(ct,b.p),Kc(j,b,X),Kc(tt,b,X-(je||0)),Kc(ct,b,ye),Kc(Ge,b,ye-(je||0))),Bt&&!ri&&P.update(),c&&!ri&&!k&&(k=!0,c(P),k=!1)}},P.getVelocity=function(){return(se()-it)/(Gn()-uu)*1e3||0},P.endAnimation=function(){jl(P.callbackAnimation),r&&(xe?xe.progress(1):r.paused()?D||jl(r,P.direction<0,1):jl(r,r.reversed()))},P.labelToScroll=function(re){return r&&r.labels&&(Re||P.refresh()||Re)+r.labels[re]/r.duration()*Qe||0},P.getTrailing=function(re){var Ve=st.indexOf(P),Ue=P.direction>0?st.slice(0,Ve).reverse():st.slice(Ve+1);return(bi(re)?Ue.filter(function(je){return je.vars.preventOverlaps===re}):Ue).filter(function(je){return P.direction>0?je.end<=Re:je.start>=We})},P.update=function(re,Ve,Ue){if(!(w&&!Ue&&!re)){var je=ri===!0?le:P.scroll(),an=re?0:(je-Re)/Qe,at=an<0?0:an>1?1:an||0,kt=P.progress,Bt,Lt,Ct,St,Fn,Nt,Sn,Ei;if(Ve&&(it=Ie,Ie=w?se():je,y&&(ce=me,me=r&&!D?r.totalProgress():at)),_&&h&&!Hn&&!Gc&&sr&&(!at&&Re<je+(je-it)/(Gn()-uu)*_?at=1e-4:at===1&&We>je+(je-it)/(Gn()-uu)*_&&(at=.9999)),at!==kt&&P.enabled){if(Bt=P.isActive=!!at&&at<1,Lt=!!kt&&kt<1,Nt=Bt!==Lt,Fn=Nt||!!at!=!!kt,P.direction=at>kt?1:-1,P.progress=at,Fn&&!Hn&&(Ct=at&&!kt?0:at===1?1:kt===1?2:3,D&&(St=!Nt&&I[Ct+1]!=="none"&&I[Ct+1]||I[Ct],Ei=r&&(St==="complete"||St==="reset"||St in r))),C&&(Nt||Ei)&&(Ei||d||!r)&&(Yn(C)?C(P):P.getTrailing(C).forEach(function(Kr){return Kr.endAnimation()})),D||(xe&&!Hn&&!Gc?(xe._dp._time-xe._start!==xe._time&&xe.render(xe._dp._time-xe._start),xe.resetTo?xe.resetTo("totalProgress",at,r._tTime/r._tDur):(xe.vars.totalProgress=at,xe.invalidate().restart())):r&&r.totalProgress(at,!!(Hn&&(Ce||re)))),h){if(re&&m&&(et.style[m+b.os2]=pe),!N)V(fu(Z+te*at));else if(Fn){if(Sn=!re&&at>kt&&We+1>je&&je+1>=Or(L,b),T)if(!re&&(Bt||Sn)){var ln=os(h,!0),hn=je-Re;vx(h,yt,ln.top+(b===gn?hn:0)+pn,ln.left+(b===gn?0:hn)+pn)}else vx(h,et);fl(Bt||Sn?pt:_e),J&&at<1&&Bt||V(Z+(at===1&&!Sn?te:0))}}y&&!ae.tween&&!Hn&&!Gc&&U.restart(!0),a&&(Nt||x&&at&&(at<1||!jh))&&uc(a.targets).forEach(function(Kr){return Kr.classList[Bt||x?"add":"remove"](a.className)}),o&&!D&&!re&&o(P),Fn&&!Hn?(D&&(Ei&&(St==="complete"?r.pause().totalProgress(1):St==="reset"?r.restart(!0).pause():St==="restart"?r.restart(!0):r[St]()),o&&o(P)),(Nt||!jh)&&(u&&Nt&&ma(P,u),B[Ct]&&ma(P,B[Ct]),x&&(at===1?P.kill(!1,1):B[Ct]=0),Nt||(Ct=at===1?1:3,B[Ct]&&ma(P,B[Ct]))),S&&!Bt&&Math.abs(P.getVelocity())>(du(S)?S:2500)&&(jl(P.callbackAnimation),xe?xe.progress(1):jl(r,St==="reverse"?1:!at,1))):D&&o&&!Hn&&o(P)}if(Se){var yn=w?je/w.duration()*(w._caScrollDist||0):je;K(yn+(j._isFlipped?1:0)),Se(yn)}Me&&Me(-je/w.duration()*(w._caScrollDist||0))}},P.enable=function(re,Ve){P.enabled||(P.enabled=!0,wn(L,"resize",hu),H||wn(L,"scroll",_a),ee&&wn(n,"refreshInit",ee),re!==!1&&(P.progress=$=0,Ie=it=Le=se()),Ve!==!1&&P.refresh())},P.getTween=function(re){return re&&ae?ae.tween:xe},P.setPositions=function(re,Ve,Ue,je){if(w){var an=w.scrollTrigger,at=w.duration(),kt=an.end-an.start;re=an.start+kt*re/at,Ve=an.start+kt*Ve/at}P.refresh(!1,!1,{start:ux(re,Ue&&!!P._startClamp),end:ux(Ve,Ue&&!!P._endClamp)},je),P.update()},P.adjustPinSpacing=function(re){if(ie&&re){var Ve=ie.indexOf(b.d)+1;ie[Ve]=parseFloat(ie[Ve])+re+pn,ie[1]=parseFloat(ie[1])+re+pn,fl(ie)}},P.disable=function(re,Ve){if(re!==!1&&P.revert(!0,!0),P.enabled&&(P.enabled=P.isActive=!1,Ve||xe&&xe.pause(),le=0,Pe&&(Pe.uncache=1),ee&&Tn(n,"refreshInit",ee),U&&(U.pause(),ae.tween&&ae.tween.kill()&&(ae.tween=0)),!H)){for(var Ue=st.length;Ue--;)if(st[Ue].scroller===L&&st[Ue]!==P)return;Tn(L,"resize",hu),H||Tn(L,"scroll",_a)}},P.kill=function(re,Ve){P.disable(re,Ve),xe&&!Ve&&xe.kill(),l&&delete qm[l];var Ue=st.indexOf(P);Ue>=0&&st.splice(Ue,1),Ue===ii&&Gf>0&&ii--,Ue=0,st.forEach(function(je){return je.scroller===P.scroller&&(Ue=1)}),Ue||ri||(P.scroll.rec=0),r&&(r.scrollTrigger=null,re&&r.revert({kill:!1}),Ve||r.kill()),tt&&[tt,Ge,j,ct].forEach(function(je){return je.parentNode&&je.parentNode.removeChild(je)}),Ou===P&&(Ou=0),h&&(Pe&&(Pe.uncache=1),Ue=0,st.forEach(function(je){return je.pin===h&&Ue++}),Ue||(Pe.spacer=0)),i.onKill&&i.onKill(P)},st.push(P),P.enable(!1,!1),de&&de(P),r&&r.add&&!Qe){var ze=P.update;P.update=function(){P.update=ze,ut.cache++,Re||We||P.refresh()},Ne.delayedCall(.01,P.update),Qe=.01,Re=We=0}else P.refresh();h&&YC()},n.register=function(i){return Fa||(Ne=i||WE(),GE()&&window.document&&n.enable(),Fa=cu),Fa},n.defaults=function(i){if(i)for(var r in i)jc[r]=i[r];return jc},n.disable=function(i,r){cu=0,st.forEach(function(o){return o[r?"kill":"disable"](i)}),Tn(lt,"wheel",_a),Tn(Mt,"scroll",_a),clearInterval(Hc),Tn(Mt,"touchcancel",Pr),Tn(yt,"touchstart",Pr),Xc(Tn,Mt,"pointerdown,touchstart,mousedown",cx),Xc(Tn,Mt,"pointerup,touchend,mouseup",fx),Dd.kill(),Wc(Tn);for(var s=0;s<ut.length;s+=3)Yc(Tn,ut[s],ut[s+1]),Yc(Tn,ut[s],ut[s+2])},n.enable=function(){if(lt=window,Mt=document,Di=Mt.documentElement,yt=Mt.body,Ne){if(uc=Ne.utils.toArray,Du=Ne.utils.clamp,Ym=Ne.core.context||Pr,Yh=Ne.core.suppressOverwrites||Pr,s0=lt.history.scrollRestoration||"auto",$m=lt.pageYOffset||0,Ne.core.globals("ScrollTrigger",n),yt){cu=1,cl=document.createElement("div"),cl.style.height="100vh",cl.style.position="absolute",e1(),BC(),on.register(Ne),n.isTouch=on.isTouch,Us=on.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),Xm=on.isTouch===1,wn(lt,"wheel",_a),r0=[lt,Mt,Di,yt],Ne.matchMedia?(n.matchMedia=function(c){var d=Ne.matchMedia(),f;for(f in c)d.add(f,c[f]);return d},Ne.addEventListener("matchMediaInit",function(){QE(),f0()}),Ne.addEventListener("matchMediaRevert",function(){return ZE()}),Ne.addEventListener("matchMedia",function(){ko(0,1),ia("matchMedia")}),Ne.matchMedia().add("(orientation: portrait)",function(){return $h(),$h})):console.warn("Requires GSAP 3.11.0 or later"),$h(),wn(Mt,"scroll",_a);var i=yt.hasAttribute("style"),r=yt.style,s=r.borderTopStyle,o=Ne.core.Animation.prototype,a,l;for(o.revert||Object.defineProperty(o,"revert",{value:function(){return this.time(-.01,!0)}}),r.borderTopStyle="solid",a=os(yt),gn.m=Math.round(a.top+gn.sc())||0,oi.m=Math.round(a.left+oi.sc())||0,s?r.borderTopStyle=s:r.removeProperty("border-top-style"),i||(yt.setAttribute("style",""),yt.removeAttribute("style")),Hc=setInterval(px,250),Ne.delayedCall(.5,function(){return Gc=0}),wn(Mt,"touchcancel",Pr),wn(yt,"touchstart",Pr),Xc(wn,Mt,"pointerdown,touchstart,mousedown",cx),Xc(wn,Mt,"pointerup,touchend,mouseup",fx),Wm=Ne.utils.checkPrefix("transform"),Wf.push(Wm),Fa=Gn(),Dd=Ne.delayedCall(.2,ko).pause(),Oa=[Mt,"visibilitychange",function(){var c=lt.innerWidth,d=lt.innerHeight;Mt.hidden?(ox=c,ax=d):(ox!==c||ax!==d)&&hu()},Mt,"DOMContentLoaded",ko,lt,"load",ko,lt,"resize",hu],Wc(wn),st.forEach(function(c){return c.enable(0,1)}),l=0;l<ut.length;l+=3)Yc(Tn,ut[l],ut[l+1]),Yc(Tn,ut[l],ut[l+2])}else if(Mt){var u=function c(){n.enable(),Mt.removeEventListener("DOMContentLoaded",c)};Mt.addEventListener("DOMContentLoaded",u)}}},n.config=function(i){"limitCallbacks"in i&&(jh=!!i.limitCallbacks);var r=i.syncInterval;r&&clearInterval(Hc)||(Hc=r)&&setInterval(px,r),"ignoreMobileResize"in i&&(Xm=n.isTouch===1&&i.ignoreMobileResize),"autoRefreshEvents"in i&&(Wc(Tn)||Wc(wn,i.autoRefreshEvents||"none"),zE=(i.autoRefreshEvents+"").indexOf("resize")===-1)},n.scrollerProxy=function(i,r){var s=ci(i),o=ut.indexOf(s),a=ta(s);~o&&ut.splice(o,a?6:2),r&&(a?Hr.unshift(lt,r,yt,r,Di,r):Hr.unshift(s,r))},n.clearMatchMedia=function(i){st.forEach(function(r){return r._ctx&&r._ctx.query===i&&r._ctx.kill(!0,!0)})},n.isInViewport=function(i,r,s){var o=(bi(i)?ci(i):i).getBoundingClientRect(),a=o[s?jo:qo]*r||0;return s?o.right-a>0&&o.left+a<lt.innerWidth:o.bottom-a>0&&o.top+a<lt.innerHeight},n.positionInViewport=function(i,r,s){bi(i)&&(i=ci(i));var o=i.getBoundingClientRect(),a=o[s?jo:qo],l=r==null?a/2:r in Nd?Nd[r]*a:~r.indexOf("%")?parseFloat(r)*a/100:parseFloat(r)||0;return s?(o.left+l)/lt.innerWidth:(o.top+l)/lt.innerHeight},n.killAll=function(i){if(st.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),i!==!0){var r=na.killAll||[];na={},r.forEach(function(s){return s()})}},n}();$e.version="3.15.0";$e.saveStyles=function(n){return n?uc(n).forEach(function(e){if(e&&e.style){var t=Ci.indexOf(e);t>=0&&Ci.splice(t,5),Ci.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),Ne.core.getCache(e),Ym())}}):Ci};$e.revert=function(n,e){return f0(!n,e)};$e.create=function(n,e){return new $e(n,e)};$e.refresh=function(n){return n?hu(!0):(Fa||$e.register())&&ko(!0)};$e.update=function(n){return++ut.cache&&ds(n===!0?2:0)};$e.clearScrollMemory=JE;$e.maxScroll=function(n,e){return Or(n,e?oi:gn)};$e.getScrollFunc=function(n,e){return ho(ci(n),e?oi:gn)};$e.getById=function(n){return qm[n]};$e.getAll=function(){return st.filter(function(n){return n.vars.id!=="ScrollSmoother"})};$e.isScrolling=function(){return!!sr};$e.snapDirectional=c0;$e.addEventListener=function(n,e){var t=na[n]||(na[n]=[]);~t.indexOf(e)||t.push(e)};$e.removeEventListener=function(n,e){var t=na[n],i=t&&t.indexOf(e);i>=0&&t.splice(i,1)};$e.batch=function(n,e){var t=[],i={},r=e.interval||.016,s=e.batchMax||1e9,o=function(u,c){var d=[],f=[],h=Ne.delayedCall(r,function(){c(d,f),d=[],f=[]}).pause();return function(m){d.length||h.restart(!0),d.push(m.trigger),f.push(m),s<=d.length&&h.progress(1)}},a;for(a in e)i[a]=a.substr(0,2)==="on"&&Yn(e[a])&&a!=="onRefreshInit"?o(a,e[a]):e[a];return Yn(s)&&(s=s(),wn($e,"refresh",function(){return s=e.batchMax()})),uc(n).forEach(function(l){var u={};for(a in i)u[a]=i[a];u.trigger=l,t.push($e.create(u))}),t};var Sx=function(e,t,i,r){return t>r?e(r):t<0&&e(0),i>r?(r-t)/(i-t):i<0?t/(t-i):1},Zh=function n(e,t){t===!0?e.style.removeProperty("touch-action"):e.style.touchAction=t===!0?"auto":t?"pan-"+t+(on.isTouch?" pinch-zoom":""):"none",e===Di&&n(yt,t)},Zc={auto:1,scroll:1},ZC=function(e){var t=e.event,i=e.target,r=e.axis,s=(t.changedTouches?t.changedTouches[0]:t).target,o=s._gsap||Ne.core.getCache(s),a=Gn(),l;if(!o._isScrollT||a-o._isScrollT>2e3){for(;s&&s!==yt&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(Zc[(l=Qi(s)).overflowY]||Zc[l.overflowX]));)s=s.parentNode;o._isScroll=s&&s!==i&&!ta(s)&&(Zc[(l=Qi(s)).overflowY]||Zc[l.overflowX]),o._isScrollT=a}(o._isScroll||r==="x")&&(t.stopPropagation(),t._gsapAllow=!0)},n1=function(e,t,i,r){return on.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:r=r&&ZC,onPress:r,onDrag:r,onScroll:r,onEnable:function(){return i&&wn(Mt,on.eventTypes[0],Mx,!1,!0)},onDisable:function(){return Tn(Mt,on.eventTypes[0],Mx,!0)}})},QC=/(input|label|select|textarea)/i,yx,Mx=function(e){var t=QC.test(e.target.tagName);(t||yx)&&(e._gsapAllow=!0,yx=t)},JC=function(e){Po(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var t=e,i=t.normalizeScrollX,r=t.momentum,s=t.allowNestedScroll,o=t.onRelease,a,l,u=ci(e.target)||Di,c=Ne.core.globals().ScrollSmoother,d=c&&c.get(),f=Us&&(e.content&&ci(e.content)||d&&e.content!==!1&&!d.smooth()&&d.content()),h=ho(u,gn),m=ho(u,oi),v=1,_=(on.isTouch&&lt.visualViewport?lt.visualViewport.scale*lt.visualViewport.width:lt.outerWidth)/lt.innerWidth,p=0,g=Yn(r)?function(){return r(a)}:function(){return r||2.8},x,y,T=n1(u,e.type,!0,s),E=function(){return y=!1},w=Pr,S=Pr,C=function(){l=Or(u,gn),S=Du(Us?1:0,l),i&&(w=Du(0,Or(u,oi))),x=$o},b=function(){f._gsap.y=fu(parseFloat(f._gsap.y)+h.offset)+"px",f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(f._gsap.y)+", 0, 1)",h.offset=h.cacheID=0},D=function(){if(y){requestAnimationFrame(E);var F=fu(a.deltaY/2),W=S(h.v-F);if(f&&W!==h.v+h.offset){h.offset=W-h.v;var P=fu((parseFloat(f&&f._gsap.y)||0)-h.offset);f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+P+", 0, 1)",f._gsap.y=P+"px",h.cacheID=ut.cache,ds()}return!0}h.offset&&b(),y=!0},L,O,H,N,B=function(){C(),L.isActive()&&L.vars.scrollY>l&&(h()>l?L.progress(1)&&h(l):L.resetTo("scrollY",l))};return f&&Ne.set(f,{y:"+=0"}),e.ignoreCheck=function(I){return Us&&I.type==="touchmove"&&D()||v>1.05&&I.type!=="touchstart"||a.isGesturing||I.touches&&I.touches.length>1},e.onPress=function(){y=!1;var I=v;v=fu((lt.visualViewport&&lt.visualViewport.scale||1)/_),L.pause(),I!==v&&Zh(u,v>1.01?!0:i?!1:"x"),O=m(),H=h(),C(),x=$o},e.onRelease=e.onGestureStart=function(I,F){if(h.offset&&b(),!F)N.restart(!0);else{ut.cache++;var W=g(),P,ee;i&&(P=m(),ee=P+W*.05*-I.velocityX/.227,W*=Sx(m,P,ee,Or(u,oi)),L.vars.scrollX=w(ee)),P=h(),ee=P+W*.05*-I.velocityY/.227,W*=Sx(h,P,ee,Or(u,gn)),L.vars.scrollY=S(ee),L.invalidate().duration(W).play(.01),(Us&&L.vars.scrollY>=l||P>=l-1)&&Ne.to({},{onUpdate:B,duration:W})}o&&o(I)},e.onWheel=function(){L._ts&&L.pause(),Gn()-p>1e3&&(x=0,p=Gn())},e.onChange=function(I,F,W,P,ee){if($o!==x&&C(),F&&i&&m(w(P[2]===F?O+(I.startX-I.x):m()+F-P[1])),W){h.offset&&b();var ue=ee[2]===W,ve=ue?H+I.startY-I.y:h()+W-ee[1],Le=S(ve);ue&&ve!==Le&&(H+=Le-ve),h(Le)}(W||F)&&ds()},e.onEnable=function(){Zh(u,i?!1:"x"),$e.addEventListener("refresh",B),wn(lt,"resize",B),h.smooth&&(h.target.style.scrollBehavior="auto",h.smooth=m.smooth=!1),T.enable()},e.onDisable=function(){Zh(u,!0),Tn(lt,"resize",B),$e.removeEventListener("refresh",B),T.kill()},e.lockAxis=e.lockAxis!==!1,a=new on(e),a.iOS=Us,Us&&!h()&&h(1),Us&&Ne.ticker.add(Pr),N=a._dc,L=Ne.to(a,{ease:"power4",paused:!0,inherit:!1,scrollX:i?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:t1(h,h(),function(){return L.pause()})},onUpdate:ds,onComplete:N.vars.onComplete}),a};$e.sort=function(n){if(Yn(n))return st.sort(n);var e=lt.pageYOffset||0;return $e.getAll().forEach(function(t){return t._sortY=t.trigger?e+t.trigger.getBoundingClientRect().top:t.start+lt.innerHeight}),st.sort(n||function(t,i){return(t.vars.refreshPriority||0)*-1e6+(t.vars.containerAnimation?1e6:t._sortY)-((i.vars.containerAnimation?1e6:i._sortY)+(i.vars.refreshPriority||0)*-1e6)})};$e.observe=function(n){return new on(n)};$e.normalizeScroll=function(n){if(typeof n>"u")return ti;if(n===!0&&ti)return ti.enable();if(n===!1){ti&&ti.kill(),ti=n;return}var e=n instanceof on?n:JC(n);return ti&&ti.target===e.target&&ti.kill(),ta(e.target)&&(ti=e),e};$e.core={_getVelocityProp:Gm,_inputObserver:n1,_scrollers:ut,_proxies:Hr,bridge:{ss:function(){sr||ia("scrollStart"),sr=Gn()},ref:function(){return Hn}}};WE()&&Ne.registerPlugin($e);var Ex="1.3.23";function i1(n,e,t){return Math.max(n,Math.min(e,t))}function eR(n,e,t){return(1-t)*n+t*e}function tR(n,e,t,i){return eR(n,e,1-Math.exp(-t*i))}function nR(n,e){return(n%e+e)%e}var iR=class{constructor(){ke(this,"isRunning",!1);ke(this,"value",0);ke(this,"from",0);ke(this,"to",0);ke(this,"currentTime",0);ke(this,"lerp");ke(this,"duration");ke(this,"easing");ke(this,"onUpdate")}advance(n){var t;if(!this.isRunning)return;let e=!1;if(this.duration&&this.easing){this.currentTime+=n;const i=i1(0,this.currentTime/this.duration,1);e=i>=1;const r=e?1:this.easing(i);this.value=this.from+(this.to-this.from)*r}else this.lerp?(this.value=tR(this.value,this.to,this.lerp*60,n),Math.round(this.value)===Math.round(this.to)&&(this.value=this.to,e=!0)):(this.value=this.to,e=!0);e&&this.stop(),(t=this.onUpdate)==null||t.call(this,this.value,e)}stop(){this.isRunning=!1}fromTo(n,e,{lerp:t,duration:i,easing:r,onStart:s,onUpdate:o}){this.from=this.value=n,this.to=e,this.lerp=t,this.duration=i,this.easing=r,this.currentTime=0,this.isRunning=!0,s==null||s(),this.onUpdate=o}};function rR(n,e){let t;return function(...i){clearTimeout(t),t=setTimeout(()=>{t=void 0,n.apply(this,i)},e)}}var sR=class{constructor(n,e,{autoResize:t=!0,debounce:i=250}={}){ke(this,"width",0);ke(this,"height",0);ke(this,"scrollHeight",0);ke(this,"scrollWidth",0);ke(this,"debouncedResize");ke(this,"wrapperResizeObserver");ke(this,"contentResizeObserver");ke(this,"resize",()=>{this.onWrapperResize(),this.onContentResize()});ke(this,"onWrapperResize",()=>{this.wrapper instanceof Window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)});ke(this,"onContentResize",()=>{this.wrapper instanceof Window?(this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth):(this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth)});this.wrapper=n,this.content=e,t&&(this.debouncedResize=rR(this.resize,i),this.wrapper instanceof Window?window.addEventListener("resize",this.debouncedResize):(this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)),this.resize()}destroy(){var n,e;(n=this.wrapperResizeObserver)==null||n.disconnect(),(e=this.contentResizeObserver)==null||e.disconnect(),this.wrapper===window&&this.debouncedResize&&window.removeEventListener("resize",this.debouncedResize)}get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}},r1=class{constructor(){ke(this,"events",{})}emit(n,...e){var i;const t=this.events[n]||[];for(let r=0,s=t.length;r<s;r++)(i=t[r])==null||i.call(t,...e)}on(n,e){return this.events[n]?this.events[n].push(e):this.events[n]=[e],()=>{var t;this.events[n]=(t=this.events[n])==null?void 0:t.filter(i=>e!==i)}}off(n,e){var t;this.events[n]=(t=this.events[n])==null?void 0:t.filter(i=>e!==i)}destroy(){this.events={}}};const oR=100/6,Rs={passive:!1};function Tx(n,e){return n===1?oR:n===2?e:1}var aR=class{constructor(n,e={wheelMultiplier:1,touchMultiplier:1}){ke(this,"touchStart",{x:0,y:0});ke(this,"lastDelta",{x:0,y:0});ke(this,"window",{width:0,height:0});ke(this,"emitter",new r1);ke(this,"onTouchStart",n=>{const{clientX:e,clientY:t}=n.targetTouches?n.targetTouches[0]:n;this.touchStart.x=e,this.touchStart.y=t,this.lastDelta={x:0,y:0},this.emitter.emit("scroll",{deltaX:0,deltaY:0,event:n})});ke(this,"onTouchMove",n=>{const{clientX:e,clientY:t}=n.targetTouches?n.targetTouches[0]:n,i=-(e-this.touchStart.x)*this.options.touchMultiplier,r=-(t-this.touchStart.y)*this.options.touchMultiplier;this.touchStart.x=e,this.touchStart.y=t,this.lastDelta={x:i,y:r},this.emitter.emit("scroll",{deltaX:i,deltaY:r,event:n})});ke(this,"onTouchEnd",n=>{this.emitter.emit("scroll",{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:n})});ke(this,"onWheel",n=>{let{deltaX:e,deltaY:t,deltaMode:i}=n;const r=Tx(i,this.window.width),s=Tx(i,this.window.height);e*=r,t*=s,e*=this.options.wheelMultiplier,t*=this.options.wheelMultiplier,this.emitter.emit("scroll",{deltaX:e,deltaY:t,event:n})});ke(this,"onWindowResize",()=>{this.window={width:window.innerWidth,height:window.innerHeight}});this.element=n,this.options=e,window.addEventListener("resize",this.onWindowResize),this.onWindowResize(),this.element.addEventListener("wheel",this.onWheel,Rs),this.element.addEventListener("touchstart",this.onTouchStart,Rs),this.element.addEventListener("touchmove",this.onTouchMove,Rs),this.element.addEventListener("touchend",this.onTouchEnd,Rs)}on(n,e){return this.emitter.on(n,e)}destroy(){this.emitter.destroy(),window.removeEventListener("resize",this.onWindowResize),this.element.removeEventListener("wheel",this.onWheel,Rs),this.element.removeEventListener("touchstart",this.onTouchStart,Rs),this.element.removeEventListener("touchmove",this.onTouchMove,Rs),this.element.removeEventListener("touchend",this.onTouchEnd,Rs)}};const wx=n=>Math.min(1,1.001-2**(-10*n));var lR=class{constructor({wrapper:n=window,content:e=document.documentElement,eventsTarget:t=n,smoothWheel:i=!0,syncTouch:r=!1,syncTouchLerp:s=.075,touchInertiaExponent:o=1.7,duration:a,easing:l,lerp:u=.1,infinite:c=!1,orientation:d="vertical",gestureOrientation:f=d==="horizontal"?"both":"vertical",touchMultiplier:h=1,wheelMultiplier:m=1,autoResize:v=!0,prevent:_,virtualScroll:p,overscroll:g=!0,autoRaf:x=!1,anchors:y=!1,autoToggle:T=!1,allowNestedScroll:E=!1,__experimental__naiveDimensions:w=!1,naiveDimensions:S=w,stopInertiaOnNavigate:C=!1}={}){ke(this,"_isScrolling",!1);ke(this,"_isStopped",!1);ke(this,"_isLocked",!1);ke(this,"_preventNextNativeScrollEvent",!1);ke(this,"_resetVelocityTimeout",null);ke(this,"_rafId",null);ke(this,"isTouching");ke(this,"time",0);ke(this,"userData",{});ke(this,"lastVelocity",0);ke(this,"velocity",0);ke(this,"direction",0);ke(this,"options");ke(this,"targetScroll");ke(this,"animatedScroll");ke(this,"animate",new iR);ke(this,"emitter",new r1);ke(this,"dimensions");ke(this,"virtualScroll");ke(this,"onScrollEnd",n=>{n instanceof CustomEvent||(this.isScrolling==="smooth"||this.isScrolling===!1)&&n.stopPropagation()});ke(this,"dispatchScrollendEvent",()=>{this.options.wrapper.dispatchEvent(new CustomEvent("scrollend",{bubbles:this.options.wrapper===window,detail:{lenisScrollEnd:!0}}))});ke(this,"onTransitionEnd",n=>{var e;(e=n.propertyName)!=null&&e.includes("overflow")&&n.target===this.rootElement&&this.checkOverflow()});ke(this,"onClick",n=>{const e=n.composedPath().filter(i=>i instanceof HTMLAnchorElement&&i.href).map(i=>new URL(i.href)),t=new URL(window.location.href);if(this.options.anchors){const i=e.find(r=>t.host===r.host&&t.pathname===r.pathname&&r.hash);if(i){const r=typeof this.options.anchors=="object"&&this.options.anchors?this.options.anchors:void 0,s=`#${i.hash.split("#")[1]}`;this.scrollTo(s,r);return}}if(this.options.stopInertiaOnNavigate&&e.some(i=>t.host===i.host&&t.pathname!==i.pathname)){this.reset();return}});ke(this,"onPointerDown",n=>{n.button===1&&this.reset()});ke(this,"onVirtualScroll",n=>{if(typeof this.options.virtualScroll=="function"&&this.options.virtualScroll(n)===!1)return;const{deltaX:e,deltaY:t,event:i}=n;if(this.emitter.emit("virtual-scroll",{deltaX:e,deltaY:t,event:i}),i.ctrlKey||i.lenisStopPropagation)return;const r=i.type.includes("touch"),s=i.type.includes("wheel");this.isTouching=i.type==="touchstart"||i.type==="touchmove";const o=e===0&&t===0;if(this.options.syncTouch&&r&&i.type==="touchstart"&&o&&!this.isStopped&&!this.isLocked){this.reset();return}const a=this.options.gestureOrientation==="vertical"&&t===0||this.options.gestureOrientation==="horizontal"&&e===0;if(o||a)return;let l=i.composedPath();l=l.slice(0,l.indexOf(this.rootElement));const u=this.options.prevent,c=Math.abs(e)>=Math.abs(t)?"horizontal":"vertical";if(l.find(m=>{var v,_,p,g,x;return m instanceof HTMLElement&&(typeof u=="function"&&(u==null?void 0:u(m))||((v=m.hasAttribute)==null?void 0:v.call(m,"data-lenis-prevent"))||c==="vertical"&&((_=m.hasAttribute)==null?void 0:_.call(m,"data-lenis-prevent-vertical"))||c==="horizontal"&&((p=m.hasAttribute)==null?void 0:p.call(m,"data-lenis-prevent-horizontal"))||r&&((g=m.hasAttribute)==null?void 0:g.call(m,"data-lenis-prevent-touch"))||s&&((x=m.hasAttribute)==null?void 0:x.call(m,"data-lenis-prevent-wheel"))||this.options.allowNestedScroll&&this.hasNestedScroll(m,{deltaX:e,deltaY:t}))}))return;if(this.isStopped||this.isLocked){i.cancelable&&i.preventDefault();return}if(!(this.options.syncTouch&&r||this.options.smoothWheel&&s)){this.isScrolling="native",this.animate.stop(),i.lenisStopPropagation=!0;return}let d=t;this.options.gestureOrientation==="both"?d=Math.abs(t)>Math.abs(e)?t:e:this.options.gestureOrientation==="horizontal"&&(d=e),(!this.options.overscroll||this.options.infinite||this.options.wrapper!==window&&this.limit>0&&(this.animatedScroll>0&&this.animatedScroll<this.limit||this.animatedScroll===0&&t>0||this.animatedScroll===this.limit&&t<0))&&(i.lenisStopPropagation=!0),i.cancelable&&i.preventDefault();const f=r&&this.options.syncTouch,h=r&&i.type==="touchend";h&&(d=Math.sign(d)*Math.abs(this.velocity)**this.options.touchInertiaExponent),this.scrollTo(this.targetScroll+d,{programmatic:!1,...f?{lerp:h?this.options.syncTouchLerp:1}:{lerp:this.options.lerp,duration:this.options.duration,easing:this.options.easing}})});ke(this,"onNativeScroll",()=>{if(this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this._preventNextNativeScrollEvent){this._preventNextNativeScrollEvent=!1;return}if(this.isScrolling===!1||this.isScrolling==="native"){const n=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity,this.velocity=this.animatedScroll-n,this.direction=Math.sign(this.animatedScroll-n),this.isStopped||(this.isScrolling="native"),this.emit(),this.velocity!==0&&(this._resetVelocityTimeout=setTimeout(()=>{this.lastVelocity=this.velocity,this.velocity=0,this.isScrolling=!1,this.emit()},400))}});ke(this,"raf",n=>{const e=n-(this.time||n);this.time=n,this.animate.advance(e*.001),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))});window.lenisVersion=Ex,window.lenis||(window.lenis={}),window.lenis.version=Ex,d==="horizontal"&&(window.lenis.horizontal=!0),r===!0&&(window.lenis.touch=!0),(!n||n===document.documentElement)&&(n=window),typeof a=="number"&&typeof l!="function"?l=wx:typeof l=="function"&&typeof a!="number"&&(a=1),this.options={wrapper:n,content:e,eventsTarget:t,smoothWheel:i,syncTouch:r,syncTouchLerp:s,touchInertiaExponent:o,duration:a,easing:l,lerp:u,infinite:c,gestureOrientation:f,orientation:d,touchMultiplier:h,wheelMultiplier:m,autoResize:v,prevent:_,virtualScroll:p,overscroll:g,autoRaf:x,anchors:y,autoToggle:T,allowNestedScroll:E,naiveDimensions:S,stopInertiaOnNavigate:C},this.dimensions=new sR(n,e,{autoResize:v}),this.updateClassName(),this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener("scroll",this.onNativeScroll),this.options.wrapper.addEventListener("scrollend",this.onScrollEnd,{capture:!0}),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.addEventListener("click",this.onClick),this.options.wrapper.addEventListener("pointerdown",this.onPointerDown),this.virtualScroll=new aR(t,{touchMultiplier:h,wheelMultiplier:m}),this.virtualScroll.on("scroll",this.onVirtualScroll),this.options.autoToggle&&(this.checkOverflow(),this.rootElement.addEventListener("transitionend",this.onTransitionEnd)),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))}destroy(){this.emitter.destroy(),this.options.wrapper.removeEventListener("scroll",this.onNativeScroll),this.options.wrapper.removeEventListener("scrollend",this.onScrollEnd,{capture:!0}),this.options.wrapper.removeEventListener("pointerdown",this.onPointerDown),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.removeEventListener("click",this.onClick),this.virtualScroll.destroy(),this.dimensions.destroy(),this.cleanUpClassName(),this._rafId&&cancelAnimationFrame(this._rafId)}on(n,e){return this.emitter.on(n,e)}off(n,e){return this.emitter.off(n,e)}get overflow(){const n=this.isHorizontal?"overflow-x":"overflow-y";return getComputedStyle(this.rootElement)[n]}checkOverflow(){["hidden","clip"].includes(this.overflow)?this.internalStop():this.internalStart()}setScroll(n){this.isHorizontal?this.options.wrapper.scrollTo({left:n,behavior:"instant"}):this.options.wrapper.scrollTo({top:n,behavior:"instant"})}resize(){this.dimensions.resize(),this.animatedScroll=this.targetScroll=this.actualScroll,this.emit()}emit(){this.emitter.emit("scroll",this)}reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity=0,this.animate.stop()}start(){if(this.isStopped){if(this.options.autoToggle){this.rootElement.style.removeProperty("overflow");return}this.internalStart()}}internalStart(){this.isStopped&&(this.reset(),this.isStopped=!1,this.emit())}stop(){if(!this.isStopped){if(this.options.autoToggle){this.rootElement.style.setProperty("overflow","clip");return}this.internalStop()}}internalStop(){this.isStopped||(this.reset(),this.isStopped=!0,this.emit())}scrollTo(n,{offset:e=0,immediate:t=!1,lock:i=!1,programmatic:r=!0,lerp:s=r?this.options.lerp:void 0,duration:o=r?this.options.duration:void 0,easing:a=r?this.options.easing:void 0,onStart:l,onComplete:u,force:c=!1,userData:d}={}){if((this.isStopped||this.isLocked)&&!c)return;let f=n,h=e;if(typeof f=="string"&&["top","left","start","#"].includes(f))f=0;else if(typeof f=="string"&&["bottom","right","end"].includes(f))f=this.limit;else{let m=null;if(typeof f=="string"?(m=document.querySelector(f),m||(f==="#top"?f=0:console.warn("Lenis: Target not found",f))):f instanceof HTMLElement&&(f!=null&&f.nodeType)&&(m=f),m){if(this.options.wrapper!==window){const y=this.rootElement.getBoundingClientRect();h-=this.isHorizontal?y.left:y.top}const v=m.getBoundingClientRect(),_=getComputedStyle(m),p=this.isHorizontal?Number.parseFloat(_.scrollMarginLeft):Number.parseFloat(_.scrollMarginTop),g=getComputedStyle(this.rootElement),x=this.isHorizontal?Number.parseFloat(g.scrollPaddingLeft):Number.parseFloat(g.scrollPaddingTop);f=(this.isHorizontal?v.left:v.top)+this.animatedScroll-(Number.isNaN(p)?0:p)-(Number.isNaN(x)?0:x)}}if(typeof f=="number"){if(f+=h,this.options.infinite){if(r){this.targetScroll=this.animatedScroll=this.scroll;const m=f-this.animatedScroll;m>this.limit/2?f-=this.limit:m<-this.limit/2&&(f+=this.limit)}}else f=i1(0,f,this.limit);if(f===this.targetScroll){l==null||l(this),u==null||u(this);return}if(this.userData=d??{},t){this.animatedScroll=this.targetScroll=f,this.setScroll(this.scroll),this.reset(),this.preventNextNativeScrollEvent(),this.emit(),u==null||u(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()});return}r||(this.targetScroll=f),typeof o=="number"&&typeof a!="function"?a=wx:typeof a=="function"&&typeof o!="number"&&(o=1),this.animate.fromTo(this.animatedScroll,f,{duration:o,easing:a,lerp:s,onStart:()=>{i&&(this.isLocked=!0),this.isScrolling="smooth",l==null||l(this)},onUpdate:(m,v)=>{this.isScrolling="smooth",this.lastVelocity=this.velocity,this.velocity=m-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=m,this.setScroll(this.scroll),r&&(this.targetScroll=m),v||this.emit(),v&&(this.reset(),this.emit(),u==null||u(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()}),this.preventNextNativeScrollEvent())}})}}preventNextNativeScrollEvent(){this._preventNextNativeScrollEvent=!0,requestAnimationFrame(()=>{this._preventNextNativeScrollEvent=!1})}hasNestedScroll(n,{deltaX:e,deltaY:t}){const i=Date.now();n._lenis||(n._lenis={});const r=n._lenis;let s,o,a,l,u,c,d,f,h,m;if(i-(r.time??0)>2e3){r.time=Date.now();const E=window.getComputedStyle(n);if(r.computedStyle=E,s=["auto","overlay","scroll"].includes(E.overflowX),o=["auto","overlay","scroll"].includes(E.overflowY),u=["auto"].includes(E.overscrollBehaviorX),c=["auto"].includes(E.overscrollBehaviorY),r.hasOverflowX=s,r.hasOverflowY=o,!(s||o))return!1;d=n.scrollWidth,f=n.scrollHeight,h=n.clientWidth,m=n.clientHeight,a=d>h,l=f>m,r.isScrollableX=a,r.isScrollableY=l,r.scrollWidth=d,r.scrollHeight=f,r.clientWidth=h,r.clientHeight=m,r.hasOverscrollBehaviorX=u,r.hasOverscrollBehaviorY=c}else a=r.isScrollableX,l=r.isScrollableY,s=r.hasOverflowX,o=r.hasOverflowY,d=r.scrollWidth,f=r.scrollHeight,h=r.clientWidth,m=r.clientHeight,u=r.hasOverscrollBehaviorX,c=r.hasOverscrollBehaviorY;if(!(s&&a||o&&l))return!1;const v=Math.abs(e)>=Math.abs(t)?"horizontal":"vertical";let _,p,g,x,y,T;if(v==="horizontal")_=Math.round(n.scrollLeft),p=d-h,g=e,x=s,y=a,T=u;else if(v==="vertical")_=Math.round(n.scrollTop),p=f-m,g=t,x=o,y=l,T=c;else return!1;return!T&&(_>=p||_<=0)?!0:(g>0?_<p:_>0)&&x&&y}get rootElement(){return this.options.wrapper===window?document.documentElement:this.options.wrapper}get limit(){return this.options.naiveDimensions?this.isHorizontal?this.rootElement.scrollWidth-this.rootElement.clientWidth:this.rootElement.scrollHeight-this.rootElement.clientHeight:this.dimensions.limit[this.isHorizontal?"x":"y"]}get isHorizontal(){return this.options.orientation==="horizontal"}get actualScroll(){const n=this.options.wrapper;return this.isHorizontal?n.scrollX??n.scrollLeft:n.scrollY??n.scrollTop}get scroll(){return this.options.infinite?nR(this.animatedScroll,this.limit):this.animatedScroll}get progress(){return this.limit===0?1:this.scroll/this.limit}get isScrolling(){return this._isScrolling}set isScrolling(n){this._isScrolling!==n&&(this._isScrolling=n,this.updateClassName())}get isStopped(){return this._isStopped}set isStopped(n){this._isStopped!==n&&(this._isStopped=n,this.updateClassName())}get isLocked(){return this._isLocked}set isLocked(n){this._isLocked!==n&&(this._isLocked=n,this.updateClassName())}get isSmooth(){return this.isScrolling==="smooth"}get className(){let n="lenis";return this.options.autoToggle&&(n+=" lenis-autoToggle"),this.isStopped&&(n+=" lenis-stopped"),this.isLocked&&(n+=" lenis-locked"),this.isScrolling&&(n+=" lenis-scrolling"),this.isScrolling==="smooth"&&(n+=" lenis-smooth"),n}updateClassName(){this.cleanUpClassName(),this.className.split(" ").forEach(n=>{this.rootElement.classList.add(n)})}cleanUpClassName(){for(const n of Array.from(this.rootElement.classList))(n==="lenis"||n.startsWith("lenis-"))&&this.rootElement.classList.remove(n)}};/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const d0="184",uR=0,Ax=1,cR=2,Yf=1,fR=2,pu=3,po=0,yi=1,Ir=2,hs=0,dl=1,Zm=2,Cx=3,Rx=4,dR=5,Lo=100,hR=101,pR=102,mR=103,gR=104,_R=200,vR=201,xR=202,SR=203,Qm=204,Jm=205,yR=206,MR=207,ER=208,TR=209,wR=210,AR=211,CR=212,RR=213,bR=214,eg=0,tg=1,ng=2,Cl=3,ig=4,rg=5,sg=6,og=7,s1=0,PR=1,DR=2,Gr=0,o1=1,a1=2,l1=3,h0=4,u1=5,c1=6,f1=7,d1=300,ra=301,Rl=302,jf=303,Qh=304,lh=306,ag=1e3,cs=1001,lg=1002,Dn=1003,LR=1004,Qc=1005,jn=1006,Jh=1007,Bo=1008,Ii=1009,h1=1010,p1=1011,fc=1012,p0=1013,jr=1014,kr=1015,ys=1016,m0=1017,g0=1018,dc=1020,m1=35902,g1=35899,_1=1021,v1=1022,_r=1023,Ms=1026,zo=1027,x1=1028,_0=1029,sa=1030,v0=1031,x0=1033,qf=33776,$f=33777,Kf=33778,Zf=33779,ug=35840,cg=35841,fg=35842,dg=35843,hg=36196,pg=37492,mg=37496,gg=37488,_g=37489,Id=37490,vg=37491,xg=37808,Sg=37809,yg=37810,Mg=37811,Eg=37812,Tg=37813,wg=37814,Ag=37815,Cg=37816,Rg=37817,bg=37818,Pg=37819,Dg=37820,Lg=37821,Ng=36492,Ig=36494,Ug=36495,Fg=36283,Og=36284,Ud=36285,kg=36286,NR=3200,Bg=0,IR=1,zs="",si="srgb",Fd="srgb-linear",Od="linear",Et="srgb",va=7680,bx=519,UR=512,FR=513,OR=514,S0=515,kR=516,BR=517,y0=518,zR=519,zg=35044,Px="300 es",Br=2e3,hc=2001;function VR(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function kd(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function HR(){const n=kd("canvas");return n.style.display="block",n}const Dx={};function Bd(...n){const e="THREE."+n.shift();console.log(e,...n)}function S1(n){const e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function Ye(...n){n=S1(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function _t(...n){n=S1(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function Vg(...n){const e=n.join(" ");e in Dx||(Dx[e]=!0,Ye(...n))}function GR(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}const WR={[eg]:tg,[ng]:sg,[ig]:og,[Cl]:rg,[tg]:eg,[sg]:ng,[og]:ig,[rg]:Cl};class ua{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const zn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ep=Math.PI/180,Hg=180/Math.PI;function oo(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(zn[n&255]+zn[n>>8&255]+zn[n>>16&255]+zn[n>>24&255]+"-"+zn[e&255]+zn[e>>8&255]+"-"+zn[e>>16&15|64]+zn[e>>24&255]+"-"+zn[t&63|128]+zn[t>>8&255]+"-"+zn[t>>16&255]+zn[t>>24&255]+zn[i&255]+zn[i>>8&255]+zn[i>>16&255]+zn[i>>24&255]).toLowerCase()}function dt(n,e,t){return Math.max(e,Math.min(t,n))}function XR(n,e){return(n%e+e)%e}function tp(n,e,t){return(1-t)*n+t*e}function Ur(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function At(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const A0=class A0{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=dt(this.x,e.x,t.x),this.y=dt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=dt(this.x,e,t),this.y=dt(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(dt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(dt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};A0.prototype.isVector2=!0;let ot=A0;class Il{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let l=i[r+0],u=i[r+1],c=i[r+2],d=i[r+3],f=s[o+0],h=s[o+1],m=s[o+2],v=s[o+3];if(d!==v||l!==f||u!==h||c!==m){let _=l*f+u*h+c*m+d*v;_<0&&(f=-f,h=-h,m=-m,v=-v,_=-_);let p=1-a;if(_<.9995){const g=Math.acos(_),x=Math.sin(g);p=Math.sin(p*g)/x,a=Math.sin(a*g)/x,l=l*p+f*a,u=u*p+h*a,c=c*p+m*a,d=d*p+v*a}else{l=l*p+f*a,u=u*p+h*a,c=c*p+m*a,d=d*p+v*a;const g=1/Math.sqrt(l*l+u*u+c*c+d*d);l*=g,u*=g,c*=g,d*=g}}e[t]=l,e[t+1]=u,e[t+2]=c,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,r,s,o){const a=i[r],l=i[r+1],u=i[r+2],c=i[r+3],d=s[o],f=s[o+1],h=s[o+2],m=s[o+3];return e[t]=a*m+c*d+l*h-u*f,e[t+1]=l*m+c*f+u*d-a*h,e[t+2]=u*m+c*h+a*f-l*d,e[t+3]=c*m-a*d-l*f-u*h,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,u=a(i/2),c=a(r/2),d=a(s/2),f=l(i/2),h=l(r/2),m=l(s/2);switch(o){case"XYZ":this._x=f*c*d+u*h*m,this._y=u*h*d-f*c*m,this._z=u*c*m+f*h*d,this._w=u*c*d-f*h*m;break;case"YXZ":this._x=f*c*d+u*h*m,this._y=u*h*d-f*c*m,this._z=u*c*m-f*h*d,this._w=u*c*d+f*h*m;break;case"ZXY":this._x=f*c*d-u*h*m,this._y=u*h*d+f*c*m,this._z=u*c*m+f*h*d,this._w=u*c*d-f*h*m;break;case"ZYX":this._x=f*c*d-u*h*m,this._y=u*h*d+f*c*m,this._z=u*c*m-f*h*d,this._w=u*c*d+f*h*m;break;case"YZX":this._x=f*c*d+u*h*m,this._y=u*h*d+f*c*m,this._z=u*c*m-f*h*d,this._w=u*c*d-f*h*m;break;case"XZY":this._x=f*c*d-u*h*m,this._y=u*h*d-f*c*m,this._z=u*c*m+f*h*d,this._w=u*c*d+f*h*m;break;default:Ye("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],u=t[2],c=t[6],d=t[10],f=i+a+d;if(f>0){const h=.5/Math.sqrt(f+1);this._w=.25/h,this._x=(c-l)*h,this._y=(s-u)*h,this._z=(o-r)*h}else if(i>a&&i>d){const h=2*Math.sqrt(1+i-a-d);this._w=(c-l)/h,this._x=.25*h,this._y=(r+o)/h,this._z=(s+u)/h}else if(a>d){const h=2*Math.sqrt(1+a-i-d);this._w=(s-u)/h,this._x=(r+o)/h,this._y=.25*h,this._z=(l+c)/h}else{const h=2*Math.sqrt(1+d-i-a);this._w=(o-r)/h,this._x=(s+u)/h,this._y=(l+c)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(dt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,u=t._z,c=t._w;return this._x=i*c+o*a+r*u-s*l,this._y=r*c+o*l+s*a-i*u,this._z=s*c+o*u+i*l-r*a,this._w=o*c-i*a-r*l-s*u,this._onChangeCallback(),this}slerp(e,t){let i=e._x,r=e._y,s=e._z,o=e._w,a=this.dot(e);a<0&&(i=-i,r=-r,s=-s,o=-o,a=-a);let l=1-t;if(a<.9995){const u=Math.acos(a),c=Math.sin(u);l=Math.sin(l*u)/c,t=Math.sin(t*u)/c,this._x=this._x*l+i*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+o*t,this._onChangeCallback()}else this._x=this._x*l+i*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+o*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const C0=class C0{constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Lx.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Lx.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,u=2*(o*r-a*i),c=2*(a*t-s*r),d=2*(s*i-o*t);return this.x=t+l*u+o*d-a*c,this.y=i+l*c+a*u-s*d,this.z=r+l*d+s*c-o*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=dt(this.x,e.x,t.x),this.y=dt(this.y,e.y,t.y),this.z=dt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=dt(this.x,e,t),this.y=dt(this.y,e,t),this.z=dt(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(dt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return np.copy(this).projectOnVector(e),this.sub(np)}reflect(e){return this.sub(np.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(dt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};C0.prototype.isVector3=!0;let Y=C0;const np=new Y,Lx=new Il,R0=class R0{constructor(e,t,i,r,s,o,a,l,u){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,u)}set(e,t,i,r,s,o,a,l,u){const c=this.elements;return c[0]=e,c[1]=r,c[2]=a,c[3]=t,c[4]=s,c[5]=l,c[6]=i,c[7]=o,c[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],l=i[6],u=i[1],c=i[4],d=i[7],f=i[2],h=i[5],m=i[8],v=r[0],_=r[3],p=r[6],g=r[1],x=r[4],y=r[7],T=r[2],E=r[5],w=r[8];return s[0]=o*v+a*g+l*T,s[3]=o*_+a*x+l*E,s[6]=o*p+a*y+l*w,s[1]=u*v+c*g+d*T,s[4]=u*_+c*x+d*E,s[7]=u*p+c*y+d*w,s[2]=f*v+h*g+m*T,s[5]=f*_+h*x+m*E,s[8]=f*p+h*y+m*w,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8];return t*o*c-t*a*u-i*s*c+i*a*l+r*s*u-r*o*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8],d=c*o-a*u,f=a*l-c*s,h=u*s-o*l,m=t*d+i*f+r*h;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/m;return e[0]=d*v,e[1]=(r*u-c*i)*v,e[2]=(a*i-r*o)*v,e[3]=f*v,e[4]=(c*t-r*l)*v,e[5]=(r*s-a*t)*v,e[6]=h*v,e[7]=(i*l-u*t)*v,e[8]=(o*t-i*s)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){const l=Math.cos(s),u=Math.sin(s);return this.set(i*l,i*u,-i*(l*o+u*a)+o+e,-r*u,r*l,-r*(-u*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(ip.makeScale(e,t)),this}rotate(e){return this.premultiply(ip.makeRotation(-e)),this}translate(e,t){return this.premultiply(ip.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};R0.prototype.isMatrix3=!0;let Ze=R0;const ip=new Ze,Nx=new Ze().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ix=new Ze().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function YR(){const n={enabled:!0,workingColorSpace:Fd,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===Et&&(r.r=ps(r.r),r.g=ps(r.g),r.b=ps(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Et&&(r.r=hl(r.r),r.g=hl(r.g),r.b=hl(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===zs?Od:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Vg("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Vg("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Fd]:{primaries:e,whitePoint:i,transfer:Od,toXYZ:Nx,fromXYZ:Ix,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:si},outputColorSpaceConfig:{drawingBufferColorSpace:si}},[si]:{primaries:e,whitePoint:i,transfer:Et,toXYZ:Nx,fromXYZ:Ix,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:si}}}),n}const mt=YR();function ps(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function hl(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let xa;class jR{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{xa===void 0&&(xa=kd("canvas")),xa.width=e.width,xa.height=e.height;const r=xa.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=xa}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=kd("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=ps(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(ps(t[i]/255)*255):t[i]=ps(t[i]);return{data:t,width:e.width,height:e.height}}else return Ye("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let qR=0;class M0{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:qR++}),this.uuid=oo(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(rp(r[o].image)):s.push(rp(r[o]))}else s=rp(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function rp(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?jR.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Ye("Texture: Unable to serialize Texture."),{})}let $R=0;const sp=new Y;class $n extends ua{constructor(e=$n.DEFAULT_IMAGE,t=$n.DEFAULT_MAPPING,i=cs,r=cs,s=jn,o=Bo,a=_r,l=Ii,u=$n.DEFAULT_ANISOTROPY,c=zs){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:$R++}),this.uuid=oo(),this.name="",this.source=new M0(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ot(0,0),this.repeat=new ot(1,1),this.center=new ot(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ze,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=c,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(sp).x}get height(){return this.source.getSize(sp).y}get depth(){return this.source.getSize(sp).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){Ye(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){Ye(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==d1)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ag:e.x=e.x-Math.floor(e.x);break;case cs:e.x=e.x<0?0:1;break;case lg:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ag:e.y=e.y-Math.floor(e.y);break;case cs:e.y=e.y<0?0:1;break;case lg:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}$n.DEFAULT_IMAGE=null;$n.DEFAULT_MAPPING=d1;$n.DEFAULT_ANISOTROPY=1;const b0=class b0{constructor(e=0,t=0,i=0,r=1){this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,u=l[0],c=l[4],d=l[8],f=l[1],h=l[5],m=l[9],v=l[2],_=l[6],p=l[10];if(Math.abs(c-f)<.01&&Math.abs(d-v)<.01&&Math.abs(m-_)<.01){if(Math.abs(c+f)<.1&&Math.abs(d+v)<.1&&Math.abs(m+_)<.1&&Math.abs(u+h+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(u+1)/2,y=(h+1)/2,T=(p+1)/2,E=(c+f)/4,w=(d+v)/4,S=(m+_)/4;return x>y&&x>T?x<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(x),r=E/i,s=w/i):y>T?y<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(y),i=E/r,s=S/r):T<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(T),i=w/s,r=S/s),this.set(i,r,s,t),this}let g=Math.sqrt((_-m)*(_-m)+(d-v)*(d-v)+(f-c)*(f-c));return Math.abs(g)<.001&&(g=1),this.x=(_-m)/g,this.y=(d-v)/g,this.z=(f-c)/g,this.w=Math.acos((u+h+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=dt(this.x,e.x,t.x),this.y=dt(this.y,e.y,t.y),this.z=dt(this.z,e.z,t.z),this.w=dt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=dt(this.x,e,t),this.y=dt(this.y,e,t),this.z=dt(this.z,e,t),this.w=dt(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(dt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};b0.prototype.isVector4=!0;let Zt=b0;class KR extends ua{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:jn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new Zt(0,0,e,t),this.scissorTest=!1,this.viewport=new Zt(0,0,e,t),this.textures=[];const r={width:e,height:t,depth:i.depth},s=new $n(r),o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const t={minFilter:jn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new M0(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Wr extends KR{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class y1 extends $n{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Dn,this.minFilter=Dn,this.wrapR=cs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class ZR extends $n{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Dn,this.minFilter=Dn,this.wrapR=cs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Vd=class Vd{constructor(e,t,i,r,s,o,a,l,u,c,d,f,h,m,v,_){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,u,c,d,f,h,m,v,_)}set(e,t,i,r,s,o,a,l,u,c,d,f,h,m,v,_){const p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=r,p[1]=s,p[5]=o,p[9]=a,p[13]=l,p[2]=u,p[6]=c,p[10]=d,p[14]=f,p[3]=h,p[7]=m,p[11]=v,p[15]=_,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Vd().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,i=e.elements,r=1/Sa.setFromMatrixColumn(e,0).length(),s=1/Sa.setFromMatrixColumn(e,1).length(),o=1/Sa.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),u=Math.sin(r),c=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const f=o*c,h=o*d,m=a*c,v=a*d;t[0]=l*c,t[4]=-l*d,t[8]=u,t[1]=h+m*u,t[5]=f-v*u,t[9]=-a*l,t[2]=v-f*u,t[6]=m+h*u,t[10]=o*l}else if(e.order==="YXZ"){const f=l*c,h=l*d,m=u*c,v=u*d;t[0]=f+v*a,t[4]=m*a-h,t[8]=o*u,t[1]=o*d,t[5]=o*c,t[9]=-a,t[2]=h*a-m,t[6]=v+f*a,t[10]=o*l}else if(e.order==="ZXY"){const f=l*c,h=l*d,m=u*c,v=u*d;t[0]=f-v*a,t[4]=-o*d,t[8]=m+h*a,t[1]=h+m*a,t[5]=o*c,t[9]=v-f*a,t[2]=-o*u,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const f=o*c,h=o*d,m=a*c,v=a*d;t[0]=l*c,t[4]=m*u-h,t[8]=f*u+v,t[1]=l*d,t[5]=v*u+f,t[9]=h*u-m,t[2]=-u,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const f=o*l,h=o*u,m=a*l,v=a*u;t[0]=l*c,t[4]=v-f*d,t[8]=m*d+h,t[1]=d,t[5]=o*c,t[9]=-a*c,t[2]=-u*c,t[6]=h*d+m,t[10]=f-v*d}else if(e.order==="XZY"){const f=o*l,h=o*u,m=a*l,v=a*u;t[0]=l*c,t[4]=-d,t[8]=u*c,t[1]=f*d+v,t[5]=o*c,t[9]=h*d-m,t[2]=m*d-h,t[6]=a*c,t[10]=v*d+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(QR,e,JR)}lookAt(e,t,i){const r=this.elements;return wi.subVectors(e,t),wi.lengthSq()===0&&(wi.z=1),wi.normalize(),bs.crossVectors(i,wi),bs.lengthSq()===0&&(Math.abs(i.z)===1?wi.x+=1e-4:wi.z+=1e-4,wi.normalize(),bs.crossVectors(i,wi)),bs.normalize(),Jc.crossVectors(wi,bs),r[0]=bs.x,r[4]=Jc.x,r[8]=wi.x,r[1]=bs.y,r[5]=Jc.y,r[9]=wi.y,r[2]=bs.z,r[6]=Jc.z,r[10]=wi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],l=i[8],u=i[12],c=i[1],d=i[5],f=i[9],h=i[13],m=i[2],v=i[6],_=i[10],p=i[14],g=i[3],x=i[7],y=i[11],T=i[15],E=r[0],w=r[4],S=r[8],C=r[12],b=r[1],D=r[5],L=r[9],O=r[13],H=r[2],N=r[6],B=r[10],I=r[14],F=r[3],W=r[7],P=r[11],ee=r[15];return s[0]=o*E+a*b+l*H+u*F,s[4]=o*w+a*D+l*N+u*W,s[8]=o*S+a*L+l*B+u*P,s[12]=o*C+a*O+l*I+u*ee,s[1]=c*E+d*b+f*H+h*F,s[5]=c*w+d*D+f*N+h*W,s[9]=c*S+d*L+f*B+h*P,s[13]=c*C+d*O+f*I+h*ee,s[2]=m*E+v*b+_*H+p*F,s[6]=m*w+v*D+_*N+p*W,s[10]=m*S+v*L+_*B+p*P,s[14]=m*C+v*O+_*I+p*ee,s[3]=g*E+x*b+y*H+T*F,s[7]=g*w+x*D+y*N+T*W,s[11]=g*S+x*L+y*B+T*P,s[15]=g*C+x*O+y*I+T*ee,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],u=e[13],c=e[2],d=e[6],f=e[10],h=e[14],m=e[3],v=e[7],_=e[11],p=e[15],g=l*h-u*f,x=a*h-u*d,y=a*f-l*d,T=o*h-u*c,E=o*f-l*c,w=o*d-a*c;return t*(v*g-_*x+p*y)-i*(m*g-_*T+p*E)+r*(m*x-v*T+p*w)-s*(m*y-v*E+_*w)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8],d=e[9],f=e[10],h=e[11],m=e[12],v=e[13],_=e[14],p=e[15],g=t*a-i*o,x=t*l-r*o,y=t*u-s*o,T=i*l-r*a,E=i*u-s*a,w=r*u-s*l,S=c*v-d*m,C=c*_-f*m,b=c*p-h*m,D=d*_-f*v,L=d*p-h*v,O=f*p-h*_,H=g*O-x*L+y*D+T*b-E*C+w*S;if(H===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const N=1/H;return e[0]=(a*O-l*L+u*D)*N,e[1]=(r*L-i*O-s*D)*N,e[2]=(v*w-_*E+p*T)*N,e[3]=(f*E-d*w-h*T)*N,e[4]=(l*b-o*O-u*C)*N,e[5]=(t*O-r*b+s*C)*N,e[6]=(_*y-m*w-p*x)*N,e[7]=(c*w-f*y+h*x)*N,e[8]=(o*L-a*b+u*S)*N,e[9]=(i*b-t*L-s*S)*N,e[10]=(m*E-v*y+p*g)*N,e[11]=(d*y-c*E-h*g)*N,e[12]=(a*C-o*D-l*S)*N,e[13]=(t*D-i*C+r*S)*N,e[14]=(v*x-m*T-_*g)*N,e[15]=(c*T-d*x+f*g)*N,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,l=e.z,u=s*o,c=s*a;return this.set(u*o+i,u*a-r*l,u*l+r*a,0,u*a+r*l,c*a+i,c*l-r*o,0,u*l-r*a,c*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,u=s+s,c=o+o,d=a+a,f=s*u,h=s*c,m=s*d,v=o*c,_=o*d,p=a*d,g=l*u,x=l*c,y=l*d,T=i.x,E=i.y,w=i.z;return r[0]=(1-(v+p))*T,r[1]=(h+y)*T,r[2]=(m-x)*T,r[3]=0,r[4]=(h-y)*E,r[5]=(1-(f+p))*E,r[6]=(_+g)*E,r[7]=0,r[8]=(m+x)*w,r[9]=(_-g)*w,r[10]=(1-(f+v))*w,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const s=this.determinant();if(s===0)return i.set(1,1,1),t.identity(),this;let o=Sa.set(r[0],r[1],r[2]).length();const a=Sa.set(r[4],r[5],r[6]).length(),l=Sa.set(r[8],r[9],r[10]).length();s<0&&(o=-o),ur.copy(this);const u=1/o,c=1/a,d=1/l;return ur.elements[0]*=u,ur.elements[1]*=u,ur.elements[2]*=u,ur.elements[4]*=c,ur.elements[5]*=c,ur.elements[6]*=c,ur.elements[8]*=d,ur.elements[9]*=d,ur.elements[10]*=d,t.setFromRotationMatrix(ur),i.x=o,i.y=a,i.z=l,this}makePerspective(e,t,i,r,s,o,a=Br,l=!1){const u=this.elements,c=2*s/(t-e),d=2*s/(i-r),f=(t+e)/(t-e),h=(i+r)/(i-r);let m,v;if(l)m=s/(o-s),v=o*s/(o-s);else if(a===Br)m=-(o+s)/(o-s),v=-2*o*s/(o-s);else if(a===hc)m=-o/(o-s),v=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return u[0]=c,u[4]=0,u[8]=f,u[12]=0,u[1]=0,u[5]=d,u[9]=h,u[13]=0,u[2]=0,u[6]=0,u[10]=m,u[14]=v,u[3]=0,u[7]=0,u[11]=-1,u[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=Br,l=!1){const u=this.elements,c=2/(t-e),d=2/(i-r),f=-(t+e)/(t-e),h=-(i+r)/(i-r);let m,v;if(l)m=1/(o-s),v=o/(o-s);else if(a===Br)m=-2/(o-s),v=-(o+s)/(o-s);else if(a===hc)m=-1/(o-s),v=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return u[0]=c,u[4]=0,u[8]=0,u[12]=f,u[1]=0,u[5]=d,u[9]=0,u[13]=h,u[2]=0,u[6]=0,u[10]=m,u[14]=v,u[3]=0,u[7]=0,u[11]=0,u[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}};Vd.prototype.isMatrix4=!0;let Jt=Vd;const Sa=new Y,ur=new Jt,QR=new Y(0,0,0),JR=new Y(1,1,1),bs=new Y,Jc=new Y,wi=new Y,Ux=new Jt,Fx=new Il;class mo{constructor(e=0,t=0,i=0,r=mo.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],u=r[5],c=r[9],d=r[2],f=r[6],h=r[10];switch(t){case"XYZ":this._y=Math.asin(dt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-c,h),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,u),this._z=0);break;case"YXZ":this._x=Math.asin(-dt(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(a,h),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(dt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,h),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-dt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,h),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin(dt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,u),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,h));break;case"XZY":this._z=Math.asin(-dt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,u),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-c,h),this._y=0);break;default:Ye("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Ux.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ux,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Fx.setFromEuler(this),this.setFromQuaternion(Fx,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}mo.DEFAULT_ORDER="XYZ";class M1{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let eb=0;const Ox=new Y,ya=new Il,Zr=new Jt,ef=new Y,ql=new Y,tb=new Y,nb=new Il,kx=new Y(1,0,0),Bx=new Y(0,1,0),zx=new Y(0,0,1),Vx={type:"added"},ib={type:"removed"},Ma={type:"childadded",child:null},op={type:"childremoved",child:null};class In extends ua{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:eb++}),this.uuid=oo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=In.DEFAULT_UP.clone();const e=new Y,t=new mo,i=new Il,r=new Y(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Jt},normalMatrix:{value:new Ze}}),this.matrix=new Jt,this.matrixWorld=new Jt,this.matrixAutoUpdate=In.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=In.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new M1,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ya.setFromAxisAngle(e,t),this.quaternion.multiply(ya),this}rotateOnWorldAxis(e,t){return ya.setFromAxisAngle(e,t),this.quaternion.premultiply(ya),this}rotateX(e){return this.rotateOnAxis(kx,e)}rotateY(e){return this.rotateOnAxis(Bx,e)}rotateZ(e){return this.rotateOnAxis(zx,e)}translateOnAxis(e,t){return Ox.copy(e).applyQuaternion(this.quaternion),this.position.add(Ox.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(kx,e)}translateY(e){return this.translateOnAxis(Bx,e)}translateZ(e){return this.translateOnAxis(zx,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Zr.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?ef.copy(e):ef.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),ql.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Zr.lookAt(ql,ef,this.up):Zr.lookAt(ef,ql,this.up),this.quaternion.setFromRotationMatrix(Zr),r&&(Zr.extractRotation(r.matrixWorld),ya.setFromRotationMatrix(Zr),this.quaternion.premultiply(ya.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(_t("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Vx),Ma.child=e,this.dispatchEvent(Ma),Ma.child=null):_t("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(ib),op.child=e,this.dispatchEvent(op),op.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Zr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Zr.multiply(e.parent.matrixWorld)),e.applyMatrix4(Zr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Vx),Ma.child=e,this.dispatchEvent(Ma),Ma.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ql,e,tb),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ql,nb,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,i=e.y,r=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*i-s[8]*r,s[13]+=i-s[1]*t-s[5]*i-s[9]*r,s[14]+=r-s[2]*t-s[6]*i-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),this.static!==!1&&(r.static=this.static),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let u=0,c=l.length;u<c;u++){const d=l[u];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,u=this.material.length;l<u;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),u=o(e.textures),c=o(e.images),d=o(e.shapes),f=o(e.skeletons),h=o(e.animations),m=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),c.length>0&&(i.images=c),d.length>0&&(i.shapes=d),f.length>0&&(i.skeletons=f),h.length>0&&(i.animations=h),m.length>0&&(i.nodes=m)}return i.object=r,i;function o(a){const l=[];for(const u in a){const c=a[u];delete c.metadata,l.push(c)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}In.DEFAULT_UP=new Y(0,1,0);In.DEFAULT_MATRIX_AUTO_UPDATE=!0;In.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class mu extends In{constructor(){super(),this.isGroup=!0,this.type="Group"}}const rb={type:"move"};class ap{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new mu,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new mu,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Y,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Y),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new mu,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Y,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Y,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,u=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(u&&e.hand){o=!0;for(const v of e.hand.values()){const _=t.getJointPose(v,i),p=this._getHandJoint(u,v);_!==null&&(p.matrix.fromArray(_.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=_.radius),p.visible=_!==null}const c=u.joints["index-finger-tip"],d=u.joints["thumb-tip"],f=c.position.distanceTo(d.position),h=.02,m=.005;u.inputState.pinching&&f>h+m?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&f<=h-m&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(rb)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),u!==null&&(u.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new mu;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const E1={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ps={h:0,s:0,l:0},tf={h:0,s:0,l:0};function lp(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class ht{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=si){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,mt.colorSpaceToWorking(this,t),this}setRGB(e,t,i,r=mt.workingColorSpace){return this.r=e,this.g=t,this.b=i,mt.colorSpaceToWorking(this,r),this}setHSL(e,t,i,r=mt.workingColorSpace){if(e=XR(e,1),t=dt(t,0,1),i=dt(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=lp(o,s,e+1/3),this.g=lp(o,s,e),this.b=lp(o,s,e-1/3)}return mt.colorSpaceToWorking(this,r),this}setStyle(e,t=si){function i(s){s!==void 0&&parseFloat(s)<1&&Ye("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:Ye("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);Ye("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=si){const i=E1[e.toLowerCase()];return i!==void 0?this.setHex(i,t):Ye("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ps(e.r),this.g=ps(e.g),this.b=ps(e.b),this}copyLinearToSRGB(e){return this.r=hl(e.r),this.g=hl(e.g),this.b=hl(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=si){return mt.workingToColorSpace(Vn.copy(this),e),Math.round(dt(Vn.r*255,0,255))*65536+Math.round(dt(Vn.g*255,0,255))*256+Math.round(dt(Vn.b*255,0,255))}getHexString(e=si){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=mt.workingColorSpace){mt.workingToColorSpace(Vn.copy(this),t);const i=Vn.r,r=Vn.g,s=Vn.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,u;const c=(a+o)/2;if(a===o)l=0,u=0;else{const d=o-a;switch(u=c<=.5?d/(o+a):d/(2-o-a),o){case i:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-i)/d+2;break;case s:l=(i-r)/d+4;break}l/=6}return e.h=l,e.s=u,e.l=c,e}getRGB(e,t=mt.workingColorSpace){return mt.workingToColorSpace(Vn.copy(this),t),e.r=Vn.r,e.g=Vn.g,e.b=Vn.b,e}getStyle(e=si){mt.workingToColorSpace(Vn.copy(this),e);const t=Vn.r,i=Vn.g,r=Vn.b;return e!==si?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(Ps),this.setHSL(Ps.h+e,Ps.s+t,Ps.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Ps),e.getHSL(tf);const i=tp(Ps.h,tf.h,t),r=tp(Ps.s,tf.s,t),s=tp(Ps.l,tf.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Vn=new ht;ht.NAMES=E1;class sb extends In{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new mo,this.environmentIntensity=1,this.environmentRotation=new mo,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const cr=new Y,Qr=new Y,up=new Y,Jr=new Y,Ea=new Y,Ta=new Y,Hx=new Y,cp=new Y,fp=new Y,dp=new Y,hp=new Zt,pp=new Zt,mp=new Zt;class er{constructor(e=new Y,t=new Y,i=new Y){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),cr.subVectors(e,t),r.cross(cr);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){cr.subVectors(r,t),Qr.subVectors(i,t),up.subVectors(e,t);const o=cr.dot(cr),a=cr.dot(Qr),l=cr.dot(up),u=Qr.dot(Qr),c=Qr.dot(up),d=o*u-a*a;if(d===0)return s.set(0,0,0),null;const f=1/d,h=(u*l-a*c)*f,m=(o*c-a*l)*f;return s.set(1-h-m,m,h)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Jr)===null?!1:Jr.x>=0&&Jr.y>=0&&Jr.x+Jr.y<=1}static getInterpolation(e,t,i,r,s,o,a,l){return this.getBarycoord(e,t,i,r,Jr)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Jr.x),l.addScaledVector(o,Jr.y),l.addScaledVector(a,Jr.z),l)}static getInterpolatedAttribute(e,t,i,r,s,o){return hp.setScalar(0),pp.setScalar(0),mp.setScalar(0),hp.fromBufferAttribute(e,t),pp.fromBufferAttribute(e,i),mp.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(hp,s.x),o.addScaledVector(pp,s.y),o.addScaledVector(mp,s.z),o}static isFrontFacing(e,t,i,r){return cr.subVectors(i,t),Qr.subVectors(e,t),cr.cross(Qr).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return cr.subVectors(this.c,this.b),Qr.subVectors(this.a,this.b),cr.cross(Qr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return er.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return er.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return er.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return er.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return er.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let o,a;Ea.subVectors(r,i),Ta.subVectors(s,i),cp.subVectors(e,i);const l=Ea.dot(cp),u=Ta.dot(cp);if(l<=0&&u<=0)return t.copy(i);fp.subVectors(e,r);const c=Ea.dot(fp),d=Ta.dot(fp);if(c>=0&&d<=c)return t.copy(r);const f=l*d-c*u;if(f<=0&&l>=0&&c<=0)return o=l/(l-c),t.copy(i).addScaledVector(Ea,o);dp.subVectors(e,s);const h=Ea.dot(dp),m=Ta.dot(dp);if(m>=0&&h<=m)return t.copy(s);const v=h*u-l*m;if(v<=0&&u>=0&&m<=0)return a=u/(u-m),t.copy(i).addScaledVector(Ta,a);const _=c*m-h*d;if(_<=0&&d-c>=0&&h-m>=0)return Hx.subVectors(s,r),a=(d-c)/(d-c+(h-m)),t.copy(r).addScaledVector(Hx,a);const p=1/(_+v+f);return o=v*p,a=f*p,t.copy(i).addScaledVector(Ea,o).addScaledVector(Ta,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Sc{constructor(e=new Y(1/0,1/0,1/0),t=new Y(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(fr.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(fr.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=fr.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,fr):fr.fromBufferAttribute(s,o),fr.applyMatrix4(e.matrixWorld),this.expandByPoint(fr);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),nf.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),nf.copy(i.boundingBox)),nf.applyMatrix4(e.matrixWorld),this.union(nf)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,fr),fr.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter($l),rf.subVectors(this.max,$l),wa.subVectors(e.a,$l),Aa.subVectors(e.b,$l),Ca.subVectors(e.c,$l),Ds.subVectors(Aa,wa),Ls.subVectors(Ca,Aa),Mo.subVectors(wa,Ca);let t=[0,-Ds.z,Ds.y,0,-Ls.z,Ls.y,0,-Mo.z,Mo.y,Ds.z,0,-Ds.x,Ls.z,0,-Ls.x,Mo.z,0,-Mo.x,-Ds.y,Ds.x,0,-Ls.y,Ls.x,0,-Mo.y,Mo.x,0];return!gp(t,wa,Aa,Ca,rf)||(t=[1,0,0,0,1,0,0,0,1],!gp(t,wa,Aa,Ca,rf))?!1:(sf.crossVectors(Ds,Ls),t=[sf.x,sf.y,sf.z],gp(t,wa,Aa,Ca,rf))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,fr).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(fr).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(es[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),es[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),es[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),es[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),es[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),es[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),es[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),es[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(es),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const es=[new Y,new Y,new Y,new Y,new Y,new Y,new Y,new Y],fr=new Y,nf=new Sc,wa=new Y,Aa=new Y,Ca=new Y,Ds=new Y,Ls=new Y,Mo=new Y,$l=new Y,rf=new Y,sf=new Y,Eo=new Y;function gp(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){Eo.fromArray(n,s);const a=r.x*Math.abs(Eo.x)+r.y*Math.abs(Eo.y)+r.z*Math.abs(Eo.z),l=e.dot(Eo),u=t.dot(Eo),c=i.dot(Eo);if(Math.max(-Math.max(l,u,c),Math.min(l,u,c))>a)return!1}return!0}const un=new Y,of=new ot;let ob=0;class Sr extends ua{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:ob++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=zg,this.updateRanges=[],this.gpuType=kr,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)of.fromBufferAttribute(this,t),of.applyMatrix3(e),this.setXY(t,of.x,of.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)un.fromBufferAttribute(this,t),un.applyMatrix3(e),this.setXYZ(t,un.x,un.y,un.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)un.fromBufferAttribute(this,t),un.applyMatrix4(e),this.setXYZ(t,un.x,un.y,un.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)un.fromBufferAttribute(this,t),un.applyNormalMatrix(e),this.setXYZ(t,un.x,un.y,un.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)un.fromBufferAttribute(this,t),un.transformDirection(e),this.setXYZ(t,un.x,un.y,un.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Ur(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=At(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ur(t,this.array)),t}setX(e,t){return this.normalized&&(t=At(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ur(t,this.array)),t}setY(e,t){return this.normalized&&(t=At(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ur(t,this.array)),t}setZ(e,t){return this.normalized&&(t=At(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ur(t,this.array)),t}setW(e,t){return this.normalized&&(t=At(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=At(t,this.array),i=At(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=At(t,this.array),i=At(i,this.array),r=At(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=At(t,this.array),i=At(i,this.array),r=At(r,this.array),s=At(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==zg&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class T1 extends Sr{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class w1 extends Sr{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Xr extends Sr{constructor(e,t,i){super(new Float32Array(e),t,i)}}const ab=new Sc,Kl=new Y,_p=new Y;class E0{constructor(e=new Y,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):ab.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Kl.subVectors(e,this.center);const t=Kl.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Kl,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(_p.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Kl.copy(e.center).add(_p)),this.expandByPoint(Kl.copy(e.center).sub(_p))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let lb=0;const ji=new Jt,vp=new In,Ra=new Y,Ai=new Sc,Zl=new Sc,En=new Y;class Mr extends ua{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:lb++}),this.uuid=oo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(VR(e)?w1:T1)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ze().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ji.makeRotationFromQuaternion(e),this.applyMatrix4(ji),this}rotateX(e){return ji.makeRotationX(e),this.applyMatrix4(ji),this}rotateY(e){return ji.makeRotationY(e),this.applyMatrix4(ji),this}rotateZ(e){return ji.makeRotationZ(e),this.applyMatrix4(ji),this}translate(e,t,i){return ji.makeTranslation(e,t,i),this.applyMatrix4(ji),this}scale(e,t,i){return ji.makeScale(e,t,i),this.applyMatrix4(ji),this}lookAt(e){return vp.lookAt(e),vp.updateMatrix(),this.applyMatrix4(vp.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ra).negate(),this.translate(Ra.x,Ra.y,Ra.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Xr(i,3))}else{const i=Math.min(e.length,t.count);for(let r=0;r<i;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&Ye("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Sc);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){_t("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Y(-1/0,-1/0,-1/0),new Y(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];Ai.setFromBufferAttribute(s),this.morphTargetsRelative?(En.addVectors(this.boundingBox.min,Ai.min),this.boundingBox.expandByPoint(En),En.addVectors(this.boundingBox.max,Ai.max),this.boundingBox.expandByPoint(En)):(this.boundingBox.expandByPoint(Ai.min),this.boundingBox.expandByPoint(Ai.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&_t('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new E0);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){_t("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Y,1/0);return}if(e){const i=this.boundingSphere.center;if(Ai.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];Zl.setFromBufferAttribute(a),this.morphTargetsRelative?(En.addVectors(Ai.min,Zl.min),Ai.expandByPoint(En),En.addVectors(Ai.max,Zl.max),Ai.expandByPoint(En)):(Ai.expandByPoint(Zl.min),Ai.expandByPoint(Zl.max))}Ai.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)En.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(En));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let u=0,c=a.count;u<c;u++)En.fromBufferAttribute(a,u),l&&(Ra.fromBufferAttribute(e,u),En.add(Ra)),r=Math.max(r,i.distanceToSquared(En))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&_t('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){_t("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Sr(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let S=0;S<i.count;S++)a[S]=new Y,l[S]=new Y;const u=new Y,c=new Y,d=new Y,f=new ot,h=new ot,m=new ot,v=new Y,_=new Y;function p(S,C,b){u.fromBufferAttribute(i,S),c.fromBufferAttribute(i,C),d.fromBufferAttribute(i,b),f.fromBufferAttribute(s,S),h.fromBufferAttribute(s,C),m.fromBufferAttribute(s,b),c.sub(u),d.sub(u),h.sub(f),m.sub(f);const D=1/(h.x*m.y-m.x*h.y);isFinite(D)&&(v.copy(c).multiplyScalar(m.y).addScaledVector(d,-h.y).multiplyScalar(D),_.copy(d).multiplyScalar(h.x).addScaledVector(c,-m.x).multiplyScalar(D),a[S].add(v),a[C].add(v),a[b].add(v),l[S].add(_),l[C].add(_),l[b].add(_))}let g=this.groups;g.length===0&&(g=[{start:0,count:e.count}]);for(let S=0,C=g.length;S<C;++S){const b=g[S],D=b.start,L=b.count;for(let O=D,H=D+L;O<H;O+=3)p(e.getX(O+0),e.getX(O+1),e.getX(O+2))}const x=new Y,y=new Y,T=new Y,E=new Y;function w(S){T.fromBufferAttribute(r,S),E.copy(T);const C=a[S];x.copy(C),x.sub(T.multiplyScalar(T.dot(C))).normalize(),y.crossVectors(E,C);const D=y.dot(l[S])<0?-1:1;o.setXYZW(S,x.x,x.y,x.z,D)}for(let S=0,C=g.length;S<C;++S){const b=g[S],D=b.start,L=b.count;for(let O=D,H=D+L;O<H;O+=3)w(e.getX(O+0)),w(e.getX(O+1)),w(e.getX(O+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Sr(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,h=i.count;f<h;f++)i.setXYZ(f,0,0,0);const r=new Y,s=new Y,o=new Y,a=new Y,l=new Y,u=new Y,c=new Y,d=new Y;if(e)for(let f=0,h=e.count;f<h;f+=3){const m=e.getX(f+0),v=e.getX(f+1),_=e.getX(f+2);r.fromBufferAttribute(t,m),s.fromBufferAttribute(t,v),o.fromBufferAttribute(t,_),c.subVectors(o,s),d.subVectors(r,s),c.cross(d),a.fromBufferAttribute(i,m),l.fromBufferAttribute(i,v),u.fromBufferAttribute(i,_),a.add(c),l.add(c),u.add(c),i.setXYZ(m,a.x,a.y,a.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(_,u.x,u.y,u.z)}else for(let f=0,h=t.count;f<h;f+=3)r.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),c.subVectors(o,s),d.subVectors(r,s),c.cross(d),i.setXYZ(f+0,c.x,c.y,c.z),i.setXYZ(f+1,c.x,c.y,c.z),i.setXYZ(f+2,c.x,c.y,c.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)En.fromBufferAttribute(e,t),En.normalize(),e.setXYZ(t,En.x,En.y,En.z)}toNonIndexed(){function e(a,l){const u=a.array,c=a.itemSize,d=a.normalized,f=new u.constructor(l.length*c);let h=0,m=0;for(let v=0,_=l.length;v<_;v++){a.isInterleavedBufferAttribute?h=l[v]*a.data.stride+a.offset:h=l[v]*c;for(let p=0;p<c;p++)f[m++]=u[h++]}return new Sr(f,c,d)}if(this.index===null)return Ye("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Mr,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],u=e(l,i);t.setAttribute(a,u)}const s=this.morphAttributes;for(const a in s){const l=[],u=s[a];for(let c=0,d=u.length;c<d;c++){const f=u[c],h=e(f,i);l.push(h)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const u=o[a];t.addGroup(u.start,u.count,u.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const u=i[l];e.data.attributes[l]=u.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],c=[];for(let d=0,f=u.length;d<f;d++){const h=u[d];c.push(h.toJSON(e.data))}c.length>0&&(r[l]=c,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const u in r){const c=r[u];this.setAttribute(u,c.clone(t))}const s=e.morphAttributes;for(const u in s){const c=[],d=s[u];for(let f=0,h=d.length;f<h;f++)c.push(d[f].clone(t));this.morphAttributes[u]=c}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let u=0,c=o.length;u<c;u++){const d=o[u];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ub{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=zg,this.updateRanges=[],this.version=0,this.uuid=oo()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[i+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=oo()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=oo()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Qn=new Y;class zd{constructor(e,t,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)Qn.fromBufferAttribute(this,t),Qn.applyMatrix4(e),this.setXYZ(t,Qn.x,Qn.y,Qn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Qn.fromBufferAttribute(this,t),Qn.applyNormalMatrix(e),this.setXYZ(t,Qn.x,Qn.y,Qn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Qn.fromBufferAttribute(this,t),Qn.transformDirection(e),this.setXYZ(t,Qn.x,Qn.y,Qn.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=Ur(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=At(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=At(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=At(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=At(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=At(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Ur(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Ur(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Ur(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Ur(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=At(t,this.array),i=At(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=At(t,this.array),i=At(i,this.array),r=At(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=At(t,this.array),i=At(i,this.array),r=At(r,this.array),s=At(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){Bd("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new Sr(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new zd(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Bd("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}let cb=0;class Ul extends ua{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:cb++}),this.uuid=oo(),this.name="",this.type="Material",this.blending=dl,this.side=po,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Qm,this.blendDst=Jm,this.blendEquation=Lo,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ht(0,0,0),this.blendAlpha=0,this.depthFunc=Cl,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=bx,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=va,this.stencilZFail=va,this.stencilZPass=va,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){Ye(`Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){Ye(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==dl&&(i.blending=this.blending),this.side!==po&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Qm&&(i.blendSrc=this.blendSrc),this.blendDst!==Jm&&(i.blendDst=this.blendDst),this.blendEquation!==Lo&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Cl&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==bx&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==va&&(i.stencilFail=this.stencilFail),this.stencilZFail!==va&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==va&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class A1 extends Ul{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new ht(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let ba;const Ql=new Y,Pa=new Y,Da=new Y,La=new ot,Jl=new ot,C1=new Jt,af=new Y,eu=new Y,lf=new Y,Gx=new ot,xp=new ot,Wx=new ot;class fb extends In{constructor(e=new A1){if(super(),this.isSprite=!0,this.type="Sprite",ba===void 0){ba=new Mr;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new ub(t,5);ba.setIndex([0,1,2,0,2,3]),ba.setAttribute("position",new zd(i,3,0,!1)),ba.setAttribute("uv",new zd(i,2,3,!1))}this.geometry=ba,this.material=e,this.center=new ot(.5,.5),this.count=1}raycast(e,t){e.camera===null&&_t('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Pa.setFromMatrixScale(this.matrixWorld),C1.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Da.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Pa.multiplyScalar(-Da.z);const i=this.material.rotation;let r,s;i!==0&&(s=Math.cos(i),r=Math.sin(i));const o=this.center;uf(af.set(-.5,-.5,0),Da,o,Pa,r,s),uf(eu.set(.5,-.5,0),Da,o,Pa,r,s),uf(lf.set(.5,.5,0),Da,o,Pa,r,s),Gx.set(0,0),xp.set(1,0),Wx.set(1,1);let a=e.ray.intersectTriangle(af,eu,lf,!1,Ql);if(a===null&&(uf(eu.set(-.5,.5,0),Da,o,Pa,r,s),xp.set(0,1),a=e.ray.intersectTriangle(af,lf,eu,!1,Ql),a===null))return;const l=e.ray.origin.distanceTo(Ql);l<e.near||l>e.far||t.push({distance:l,point:Ql.clone(),uv:er.getInterpolation(Ql,af,eu,lf,Gx,xp,Wx,new ot),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function uf(n,e,t,i,r,s){La.subVectors(n,t).addScalar(.5).multiply(i),r!==void 0?(Jl.x=s*La.x-r*La.y,Jl.y=r*La.x+s*La.y):Jl.copy(La),n.copy(e),n.x+=Jl.x,n.y+=Jl.y,n.applyMatrix4(C1)}const ts=new Y,Sp=new Y,cf=new Y,Ns=new Y,yp=new Y,ff=new Y,Mp=new Y;class db{constructor(e=new Y,t=new Y(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ts)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=ts.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ts.copy(this.origin).addScaledVector(this.direction,t),ts.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Sp.copy(e).add(t).multiplyScalar(.5),cf.copy(t).sub(e).normalize(),Ns.copy(this.origin).sub(Sp);const s=e.distanceTo(t)*.5,o=-this.direction.dot(cf),a=Ns.dot(this.direction),l=-Ns.dot(cf),u=Ns.lengthSq(),c=Math.abs(1-o*o);let d,f,h,m;if(c>0)if(d=o*l-a,f=o*a-l,m=s*c,d>=0)if(f>=-m)if(f<=m){const v=1/c;d*=v,f*=v,h=d*(d+o*f+2*a)+f*(o*d+f+2*l)+u}else f=s,d=Math.max(0,-(o*f+a)),h=-d*d+f*(f+2*l)+u;else f=-s,d=Math.max(0,-(o*f+a)),h=-d*d+f*(f+2*l)+u;else f<=-m?(d=Math.max(0,-(-o*s+a)),f=d>0?-s:Math.min(Math.max(-s,-l),s),h=-d*d+f*(f+2*l)+u):f<=m?(d=0,f=Math.min(Math.max(-s,-l),s),h=f*(f+2*l)+u):(d=Math.max(0,-(o*s+a)),f=d>0?s:Math.min(Math.max(-s,-l),s),h=-d*d+f*(f+2*l)+u);else f=o>0?-s:s,d=Math.max(0,-(o*f+a)),h=-d*d+f*(f+2*l)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(Sp).addScaledVector(cf,f),h}intersectSphere(e,t){ts.subVectors(e.center,this.origin);const i=ts.dot(this.direction),r=ts.dot(ts)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,l;const u=1/this.direction.x,c=1/this.direction.y,d=1/this.direction.z,f=this.origin;return u>=0?(i=(e.min.x-f.x)*u,r=(e.max.x-f.x)*u):(i=(e.max.x-f.x)*u,r=(e.min.x-f.x)*u),c>=0?(s=(e.min.y-f.y)*c,o=(e.max.y-f.y)*c):(s=(e.max.y-f.y)*c,o=(e.min.y-f.y)*c),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),d>=0?(a=(e.min.z-f.z)*d,l=(e.max.z-f.z)*d):(a=(e.max.z-f.z)*d,l=(e.min.z-f.z)*d),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,ts)!==null}intersectTriangle(e,t,i,r,s){yp.subVectors(t,e),ff.subVectors(i,e),Mp.crossVectors(yp,ff);let o=this.direction.dot(Mp),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ns.subVectors(this.origin,e);const l=a*this.direction.dot(ff.crossVectors(Ns,ff));if(l<0)return null;const u=a*this.direction.dot(yp.cross(Ns));if(u<0||l+u>o)return null;const c=-a*Ns.dot(Mp);return c<0?null:this.at(c/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class R1 extends Ul{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ht(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new mo,this.combine=s1,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Xx=new Jt,To=new db,df=new E0,Yx=new Y,hf=new Y,pf=new Y,mf=new Y,Ep=new Y,gf=new Y,jx=new Y,_f=new Y;class qr extends In{constructor(e=new Mr,t=new R1){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){gf.set(0,0,0);for(let l=0,u=s.length;l<u;l++){const c=a[l],d=s[l];c!==0&&(Ep.fromBufferAttribute(d,e),o?gf.addScaledVector(Ep,c):gf.addScaledVector(Ep.sub(t),c))}t.add(gf)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),df.copy(i.boundingSphere),df.applyMatrix4(s),To.copy(e.ray).recast(e.near),!(df.containsPoint(To.origin)===!1&&(To.intersectSphere(df,Yx)===null||To.origin.distanceToSquared(Yx)>(e.far-e.near)**2))&&(Xx.copy(s).invert(),To.copy(e.ray).applyMatrix4(Xx),!(i.boundingBox!==null&&To.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,To)))}_computeIntersections(e,t,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,u=s.attributes.uv,c=s.attributes.uv1,d=s.attributes.normal,f=s.groups,h=s.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,v=f.length;m<v;m++){const _=f[m],p=o[_.materialIndex],g=Math.max(_.start,h.start),x=Math.min(a.count,Math.min(_.start+_.count,h.start+h.count));for(let y=g,T=x;y<T;y+=3){const E=a.getX(y),w=a.getX(y+1),S=a.getX(y+2);r=vf(this,p,e,i,u,c,d,E,w,S),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=_.materialIndex,t.push(r))}}else{const m=Math.max(0,h.start),v=Math.min(a.count,h.start+h.count);for(let _=m,p=v;_<p;_+=3){const g=a.getX(_),x=a.getX(_+1),y=a.getX(_+2);r=vf(this,o,e,i,u,c,d,g,x,y),r&&(r.faceIndex=Math.floor(_/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let m=0,v=f.length;m<v;m++){const _=f[m],p=o[_.materialIndex],g=Math.max(_.start,h.start),x=Math.min(l.count,Math.min(_.start+_.count,h.start+h.count));for(let y=g,T=x;y<T;y+=3){const E=y,w=y+1,S=y+2;r=vf(this,p,e,i,u,c,d,E,w,S),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=_.materialIndex,t.push(r))}}else{const m=Math.max(0,h.start),v=Math.min(l.count,h.start+h.count);for(let _=m,p=v;_<p;_+=3){const g=_,x=_+1,y=_+2;r=vf(this,o,e,i,u,c,d,g,x,y),r&&(r.faceIndex=Math.floor(_/3),t.push(r))}}}}function hb(n,e,t,i,r,s,o,a){let l;if(e.side===yi?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===po,a),l===null)return null;_f.copy(a),_f.applyMatrix4(n.matrixWorld);const u=t.ray.origin.distanceTo(_f);return u<t.near||u>t.far?null:{distance:u,point:_f.clone(),object:n}}function vf(n,e,t,i,r,s,o,a,l,u){n.getVertexPosition(a,hf),n.getVertexPosition(l,pf),n.getVertexPosition(u,mf);const c=hb(n,e,t,i,hf,pf,mf,jx);if(c){const d=new Y;er.getBarycoord(jx,hf,pf,mf,d),r&&(c.uv=er.getInterpolatedAttribute(r,a,l,u,d,new ot)),s&&(c.uv1=er.getInterpolatedAttribute(s,a,l,u,d,new ot)),o&&(c.normal=er.getInterpolatedAttribute(o,a,l,u,d,new Y),c.normal.dot(i.direction)>0&&c.normal.multiplyScalar(-1));const f={a,b:l,c:u,normal:new Y,materialIndex:0};er.getNormal(hf,pf,mf,f.normal),c.face=f,c.barycoord=d}return c}class pb extends $n{constructor(e=null,t=1,i=1,r,s,o,a,l,u=Dn,c=Dn,d,f){super(null,o,a,l,u,c,r,s,d,f),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Tp=new Y,mb=new Y,gb=new Ze;class Do{constructor(e=new Y(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=Tp.subVectors(i,t).cross(mb.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){const r=e.delta(Tp),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/s;return i===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(r,o)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||gb.getNormalMatrix(e),r=this.coplanarPoint(Tp).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const wo=new E0,_b=new ot(.5,.5),xf=new Y;class T0{constructor(e=new Do,t=new Do,i=new Do,r=new Do,s=new Do,o=new Do){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Br,i=!1){const r=this.planes,s=e.elements,o=s[0],a=s[1],l=s[2],u=s[3],c=s[4],d=s[5],f=s[6],h=s[7],m=s[8],v=s[9],_=s[10],p=s[11],g=s[12],x=s[13],y=s[14],T=s[15];if(r[0].setComponents(u-o,h-c,p-m,T-g).normalize(),r[1].setComponents(u+o,h+c,p+m,T+g).normalize(),r[2].setComponents(u+a,h+d,p+v,T+x).normalize(),r[3].setComponents(u-a,h-d,p-v,T-x).normalize(),i)r[4].setComponents(l,f,_,y).normalize(),r[5].setComponents(u-l,h-f,p-_,T-y).normalize();else if(r[4].setComponents(u-l,h-f,p-_,T-y).normalize(),t===Br)r[5].setComponents(u+l,h+f,p+_,T+y).normalize();else if(t===hc)r[5].setComponents(l,f,_,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),wo.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),wo.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(wo)}intersectsSprite(e){wo.center.set(0,0,0);const t=_b.distanceTo(e.center);return wo.radius=.7071067811865476+t,wo.applyMatrix4(e.matrixWorld),this.intersectsSphere(wo)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(xf.x=r.normal.x>0?e.max.x:e.min.x,xf.y=r.normal.y>0?e.max.y:e.min.y,xf.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(xf)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class b1 extends $n{constructor(e=[],t=ra,i,r,s,o,a,l,u,c){super(e,t,i,r,s,o,a,l,u,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class qx extends $n{constructor(e,t,i,r,s,o,a,l,u){super(e,t,i,r,s,o,a,l,u),this.isCanvasTexture=!0,this.needsUpdate=!0}}class bl extends $n{constructor(e,t,i=jr,r,s,o,a=Dn,l=Dn,u,c=Ms,d=1){if(c!==Ms&&c!==zo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:t,depth:d};super(f,r,s,o,a,l,c,i,u),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new M0(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class vb extends bl{constructor(e,t=jr,i=ra,r,s,o=Dn,a=Dn,l,u=Ms){const c={width:e,height:e,depth:1},d=[c,c,c,c,c,c];super(e,e,t,i,r,s,o,a,l,u),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class P1 extends $n{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class yc extends Mr{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],u=[],c=[],d=[];let f=0,h=0;m("z","y","x",-1,-1,i,t,e,o,s,0),m("z","y","x",1,-1,i,t,-e,o,s,1),m("x","z","y",1,1,e,i,t,r,o,2),m("x","z","y",1,-1,e,i,-t,r,o,3),m("x","y","z",1,-1,e,t,i,r,s,4),m("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Xr(u,3)),this.setAttribute("normal",new Xr(c,3)),this.setAttribute("uv",new Xr(d,2));function m(v,_,p,g,x,y,T,E,w,S,C){const b=y/w,D=T/S,L=y/2,O=T/2,H=E/2,N=w+1,B=S+1;let I=0,F=0;const W=new Y;for(let P=0;P<B;P++){const ee=P*D-O;for(let ue=0;ue<N;ue++){const ve=ue*b-L;W[v]=ve*g,W[_]=ee*x,W[p]=H,u.push(W.x,W.y,W.z),W[v]=0,W[_]=0,W[p]=E>0?1:-1,c.push(W.x,W.y,W.z),d.push(ue/w),d.push(1-P/S),I+=1}}for(let P=0;P<S;P++)for(let ee=0;ee<w;ee++){const ue=f+ee+N*P,ve=f+ee+N*(P+1),Le=f+(ee+1)+N*(P+1),Ce=f+(ee+1)+N*P;l.push(ue,ve,Ce),l.push(ve,Le,Ce),F+=6}a.addGroup(h,F,C),h+=F,f+=I}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new yc(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class uh extends Mr{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(i),l=Math.floor(r),u=a+1,c=l+1,d=e/a,f=t/l,h=[],m=[],v=[],_=[];for(let p=0;p<c;p++){const g=p*f-o;for(let x=0;x<u;x++){const y=x*d-s;m.push(y,-g,0),v.push(0,0,1),_.push(x/a),_.push(1-p/l)}}for(let p=0;p<l;p++)for(let g=0;g<a;g++){const x=g+u*p,y=g+u*(p+1),T=g+1+u*(p+1),E=g+1+u*p;h.push(x,y,E),h.push(y,T,E)}this.setIndex(h),this.setAttribute("position",new Xr(m,3)),this.setAttribute("normal",new Xr(v,3)),this.setAttribute("uv",new Xr(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new uh(e.width,e.height,e.widthSegments,e.heightSegments)}}function Pl(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];if($x(r))r.isRenderTargetTexture?(Ye("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone();else if(Array.isArray(r))if($x(r[0])){const s=[];for(let o=0,a=r.length;o<a;o++)s[o]=r[o].clone();e[t][i]=s}else e[t][i]=r.slice();else e[t][i]=r}}return e}function ei(n){const e={};for(let t=0;t<n.length;t++){const i=Pl(n[t]);for(const r in i)e[r]=i[r]}return e}function $x(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function xb(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function D1(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:mt.workingColorSpace}const Sb={clone:Pl,merge:ei};var yb=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Mb=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class $r extends Ul{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=yb,this.fragmentShader=Mb,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Pl(e.uniforms),this.uniformsGroups=xb(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Eb extends $r{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Tb extends Ul{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ht(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ht(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Bg,this.normalScale=new ot(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new mo,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class wb extends Tb{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ot(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return dt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ht(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ht(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ht(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class Ab extends Ul{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=NR,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Cb extends Ul{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class L1 extends In{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ht(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}const wp=new Jt,Kx=new Y,Zx=new Y;class Rb{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ot(512,512),this.mapType=Ii,this.map=null,this.mapPass=null,this.matrix=new Jt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new T0,this._frameExtents=new ot(1,1),this._viewportCount=1,this._viewports=[new Zt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;Kx.setFromMatrixPosition(e.matrixWorld),t.position.copy(Kx),Zx.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Zx),t.updateMatrixWorld(),wp.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(wp,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===hc||t.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(wp)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Sf=new Y,yf=new Il,wr=new Y;class N1 extends In{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Jt,this.projectionMatrix=new Jt,this.projectionMatrixInverse=new Jt,this.coordinateSystem=Br,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Sf,yf,wr),wr.x===1&&wr.y===1&&wr.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Sf,yf,wr.set(1,1,1)).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorld.decompose(Sf,yf,wr),wr.x===1&&wr.y===1&&wr.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Sf,yf,wr.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Is=new Y,Qx=new ot,Jx=new ot;class Ji extends N1{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Hg*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ep*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Hg*2*Math.atan(Math.tan(ep*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Is.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Is.x,Is.y).multiplyScalar(-e/Is.z),Is.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Is.x,Is.y).multiplyScalar(-e/Is.z)}getViewSize(e,t){return this.getViewBounds(e,Qx,Jx),t.subVectors(Jx,Qx)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ep*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,u=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*i/u,r*=o.width/l,i*=o.height/u}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class w0 extends N1{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,o=s+u*this.view.width,a-=c*this.view.offsetY,l=a-c*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class bb extends Rb{constructor(){super(new w0(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Ap extends L1{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(In.DEFAULT_UP),this.updateMatrix(),this.target=new In,this.shadow=new bb}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class Pb extends L1{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}const Na=-90,Ia=1;class Db extends In{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Ji(Na,Ia,e,t);r.layers=this.layers,this.add(r);const s=new Ji(Na,Ia,e,t);s.layers=this.layers,this.add(s);const o=new Ji(Na,Ia,e,t);o.layers=this.layers,this.add(o);const a=new Ji(Na,Ia,e,t);a.layers=this.layers,this.add(a);const l=new Ji(Na,Ia,e,t);l.layers=this.layers,this.add(l);const u=new Ji(Na,Ia,e,t);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,l]=t;for(const u of t)this.remove(u);if(e===Br)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===hc)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of t)this.add(u),u.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,u,c]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),h=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let _=!1;e.isWebGLRenderer===!0?_=e.state.buffers.depth.getReversed():_=e.reversedDepthBuffer,e.setRenderTarget(i,0,r),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(i,1,r),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,2,r),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,3,r),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(i,4,r),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,r),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(d,f,h),e.xr.enabled=m,i.texture.needsPMREMUpdate=!0}}class Lb extends Ji{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class Nb{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,Ye("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}const P0=class P0{constructor(e,t,i,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,r){const s=this.elements;return s[0]=e,s[2]=t,s[1]=i,s[3]=r,this}};P0.prototype.isMatrix2=!0;let eS=P0;function tS(n,e,t,i){const r=Ib(i);switch(t){case _1:return n*e;case x1:return n*e/r.components*r.byteLength;case _0:return n*e/r.components*r.byteLength;case sa:return n*e*2/r.components*r.byteLength;case v0:return n*e*2/r.components*r.byteLength;case v1:return n*e*3/r.components*r.byteLength;case _r:return n*e*4/r.components*r.byteLength;case x0:return n*e*4/r.components*r.byteLength;case qf:case $f:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Kf:case Zf:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case cg:case dg:return Math.max(n,16)*Math.max(e,8)/4;case ug:case fg:return Math.max(n,8)*Math.max(e,8)/2;case hg:case pg:case gg:case _g:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case mg:case Id:case vg:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case xg:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Sg:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case yg:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Mg:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Eg:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Tg:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case wg:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Ag:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Cg:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Rg:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case bg:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Pg:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Dg:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Lg:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Ng:case Ig:case Ug:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Fg:case Og:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Ud:case kg:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Ib(n){switch(n){case Ii:case h1:return{byteLength:1,components:1};case fc:case p1:case ys:return{byteLength:2,components:1};case m0:case g0:return{byteLength:2,components:4};case jr:case p0:case kr:return{byteLength:4,components:1};case m1:case g1:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:d0}}));typeof window<"u"&&(window.__THREE__?Ye("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=d0);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function I1(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&n!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function Ub(n){const e=new WeakMap;function t(a,l){const u=a.array,c=a.usage,d=u.byteLength,f=n.createBuffer();n.bindBuffer(l,f),n.bufferData(l,u,c),a.onUploadCallback();let h;if(u instanceof Float32Array)h=n.FLOAT;else if(typeof Float16Array<"u"&&u instanceof Float16Array)h=n.HALF_FLOAT;else if(u instanceof Uint16Array)a.isFloat16BufferAttribute?h=n.HALF_FLOAT:h=n.UNSIGNED_SHORT;else if(u instanceof Int16Array)h=n.SHORT;else if(u instanceof Uint32Array)h=n.UNSIGNED_INT;else if(u instanceof Int32Array)h=n.INT;else if(u instanceof Int8Array)h=n.BYTE;else if(u instanceof Uint8Array)h=n.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)h=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:f,type:h,bytesPerElement:u.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,l,u){const c=l.array,d=l.updateRanges;if(n.bindBuffer(u,a),d.length===0)n.bufferSubData(u,0,c);else{d.sort((h,m)=>h.start-m.start);let f=0;for(let h=1;h<d.length;h++){const m=d[f],v=d[h];v.start<=m.start+m.count+1?m.count=Math.max(m.count,v.start+v.count-m.start):(++f,d[f]=v)}d.length=f+1;for(let h=0,m=d.length;h<m;h++){const v=d[h];n.bufferSubData(u,v.start*c.BYTES_PER_ELEMENT,c,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const c=e.get(a);(!c||c.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const u=e.get(a);if(u===void 0)e.set(a,t(a,l));else if(u.version<a.version){if(u.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(u.buffer,a,l),u.version=a.version}}return{get:r,remove:s,update:o}}var Fb=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ob=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,kb=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Bb=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,zb=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Vb=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Hb=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Gb=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Wb=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Xb=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Yb=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,jb=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,qb=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,$b=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Kb=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Zb=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Qb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Jb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,eP=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,tP=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,nP=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,iP=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,rP=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,sP=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,oP=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,aP=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,lP=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,uP=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,cP=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,fP=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,dP="gl_FragColor = linearToOutputTexel( gl_FragColor );",hP=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,pP=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,mP=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,gP=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,_P=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,vP=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,xP=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,SP=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,yP=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,MP=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,EP=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,TP=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,wP=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,AP=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,CP=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,RP=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,bP=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,PP=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,DP=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,LP=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,NP=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,IP=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,UP=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = inverseTransformDirection( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,FP=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,OP=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,kP=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,BP=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,zP=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,VP=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,HP=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,GP=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,WP=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,XP=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,YP=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,jP=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,qP=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,$P=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,KP=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ZP=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,QP=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,JP=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,e2=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,t2=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,n2=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,i2=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,r2=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,s2=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,o2=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,a2=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,l2=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,u2=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,c2=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,f2=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,d2=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,h2=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,p2=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,m2=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,g2=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,_2=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,v2=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,x2=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,S2=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,y2=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,M2=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,E2=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,T2=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,w2=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,A2=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,C2=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,R2=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,b2=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,P2=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,D2=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,L2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,N2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,I2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,U2=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const F2=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,O2=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,k2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,B2=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,z2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,V2=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,H2=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,G2=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,W2=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,X2=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Y2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,j2=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,q2=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,$2=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,K2=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Z2=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Q2=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,J2=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,e3=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,t3=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,n3=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,i3=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,r3=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,s3=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,o3=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,a3=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,l3=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,u3=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,c3=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,f3=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,d3=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,h3=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,p3=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,m3=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,nt={alphahash_fragment:Fb,alphahash_pars_fragment:Ob,alphamap_fragment:kb,alphamap_pars_fragment:Bb,alphatest_fragment:zb,alphatest_pars_fragment:Vb,aomap_fragment:Hb,aomap_pars_fragment:Gb,batching_pars_vertex:Wb,batching_vertex:Xb,begin_vertex:Yb,beginnormal_vertex:jb,bsdfs:qb,iridescence_fragment:$b,bumpmap_pars_fragment:Kb,clipping_planes_fragment:Zb,clipping_planes_pars_fragment:Qb,clipping_planes_pars_vertex:Jb,clipping_planes_vertex:eP,color_fragment:tP,color_pars_fragment:nP,color_pars_vertex:iP,color_vertex:rP,common:sP,cube_uv_reflection_fragment:oP,defaultnormal_vertex:aP,displacementmap_pars_vertex:lP,displacementmap_vertex:uP,emissivemap_fragment:cP,emissivemap_pars_fragment:fP,colorspace_fragment:dP,colorspace_pars_fragment:hP,envmap_fragment:pP,envmap_common_pars_fragment:mP,envmap_pars_fragment:gP,envmap_pars_vertex:_P,envmap_physical_pars_fragment:RP,envmap_vertex:vP,fog_vertex:xP,fog_pars_vertex:SP,fog_fragment:yP,fog_pars_fragment:MP,gradientmap_pars_fragment:EP,lightmap_pars_fragment:TP,lights_lambert_fragment:wP,lights_lambert_pars_fragment:AP,lights_pars_begin:CP,lights_toon_fragment:bP,lights_toon_pars_fragment:PP,lights_phong_fragment:DP,lights_phong_pars_fragment:LP,lights_physical_fragment:NP,lights_physical_pars_fragment:IP,lights_fragment_begin:UP,lights_fragment_maps:FP,lights_fragment_end:OP,lightprobes_pars_fragment:kP,logdepthbuf_fragment:BP,logdepthbuf_pars_fragment:zP,logdepthbuf_pars_vertex:VP,logdepthbuf_vertex:HP,map_fragment:GP,map_pars_fragment:WP,map_particle_fragment:XP,map_particle_pars_fragment:YP,metalnessmap_fragment:jP,metalnessmap_pars_fragment:qP,morphinstance_vertex:$P,morphcolor_vertex:KP,morphnormal_vertex:ZP,morphtarget_pars_vertex:QP,morphtarget_vertex:JP,normal_fragment_begin:e2,normal_fragment_maps:t2,normal_pars_fragment:n2,normal_pars_vertex:i2,normal_vertex:r2,normalmap_pars_fragment:s2,clearcoat_normal_fragment_begin:o2,clearcoat_normal_fragment_maps:a2,clearcoat_pars_fragment:l2,iridescence_pars_fragment:u2,opaque_fragment:c2,packing:f2,premultiplied_alpha_fragment:d2,project_vertex:h2,dithering_fragment:p2,dithering_pars_fragment:m2,roughnessmap_fragment:g2,roughnessmap_pars_fragment:_2,shadowmap_pars_fragment:v2,shadowmap_pars_vertex:x2,shadowmap_vertex:S2,shadowmask_pars_fragment:y2,skinbase_vertex:M2,skinning_pars_vertex:E2,skinning_vertex:T2,skinnormal_vertex:w2,specularmap_fragment:A2,specularmap_pars_fragment:C2,tonemapping_fragment:R2,tonemapping_pars_fragment:b2,transmission_fragment:P2,transmission_pars_fragment:D2,uv_pars_fragment:L2,uv_pars_vertex:N2,uv_vertex:I2,worldpos_vertex:U2,background_vert:F2,background_frag:O2,backgroundCube_vert:k2,backgroundCube_frag:B2,cube_vert:z2,cube_frag:V2,depth_vert:H2,depth_frag:G2,distance_vert:W2,distance_frag:X2,equirect_vert:Y2,equirect_frag:j2,linedashed_vert:q2,linedashed_frag:$2,meshbasic_vert:K2,meshbasic_frag:Z2,meshlambert_vert:Q2,meshlambert_frag:J2,meshmatcap_vert:e3,meshmatcap_frag:t3,meshnormal_vert:n3,meshnormal_frag:i3,meshphong_vert:r3,meshphong_frag:s3,meshphysical_vert:o3,meshphysical_frag:a3,meshtoon_vert:l3,meshtoon_frag:u3,points_vert:c3,points_frag:f3,shadow_vert:d3,shadow_frag:h3,sprite_vert:p3,sprite_frag:m3},Te={common:{diffuse:{value:new ht(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ze},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ze}},envmap:{envMap:{value:null},envMapRotation:{value:new Ze},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ze}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ze}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ze},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ze},normalScale:{value:new ot(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ze},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ze}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ze}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ze}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ht(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new Y},probesMax:{value:new Y},probesResolution:{value:new Y}},points:{diffuse:{value:new ht(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0},uvTransform:{value:new Ze}},sprite:{diffuse:{value:new ht(16777215)},opacity:{value:1},center:{value:new ot(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ze},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0}}},Dr={basic:{uniforms:ei([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.fog]),vertexShader:nt.meshbasic_vert,fragmentShader:nt.meshbasic_frag},lambert:{uniforms:ei([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,Te.lights,{emissive:{value:new ht(0)},envMapIntensity:{value:1}}]),vertexShader:nt.meshlambert_vert,fragmentShader:nt.meshlambert_frag},phong:{uniforms:ei([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,Te.lights,{emissive:{value:new ht(0)},specular:{value:new ht(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:nt.meshphong_vert,fragmentShader:nt.meshphong_frag},standard:{uniforms:ei([Te.common,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.roughnessmap,Te.metalnessmap,Te.fog,Te.lights,{emissive:{value:new ht(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:nt.meshphysical_vert,fragmentShader:nt.meshphysical_frag},toon:{uniforms:ei([Te.common,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.gradientmap,Te.fog,Te.lights,{emissive:{value:new ht(0)}}]),vertexShader:nt.meshtoon_vert,fragmentShader:nt.meshtoon_frag},matcap:{uniforms:ei([Te.common,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,{matcap:{value:null}}]),vertexShader:nt.meshmatcap_vert,fragmentShader:nt.meshmatcap_frag},points:{uniforms:ei([Te.points,Te.fog]),vertexShader:nt.points_vert,fragmentShader:nt.points_frag},dashed:{uniforms:ei([Te.common,Te.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:nt.linedashed_vert,fragmentShader:nt.linedashed_frag},depth:{uniforms:ei([Te.common,Te.displacementmap]),vertexShader:nt.depth_vert,fragmentShader:nt.depth_frag},normal:{uniforms:ei([Te.common,Te.bumpmap,Te.normalmap,Te.displacementmap,{opacity:{value:1}}]),vertexShader:nt.meshnormal_vert,fragmentShader:nt.meshnormal_frag},sprite:{uniforms:ei([Te.sprite,Te.fog]),vertexShader:nt.sprite_vert,fragmentShader:nt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ze},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:nt.background_vert,fragmentShader:nt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ze}},vertexShader:nt.backgroundCube_vert,fragmentShader:nt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:nt.cube_vert,fragmentShader:nt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:nt.equirect_vert,fragmentShader:nt.equirect_frag},distance:{uniforms:ei([Te.common,Te.displacementmap,{referencePosition:{value:new Y},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:nt.distance_vert,fragmentShader:nt.distance_frag},shadow:{uniforms:ei([Te.lights,Te.fog,{color:{value:new ht(0)},opacity:{value:1}}]),vertexShader:nt.shadow_vert,fragmentShader:nt.shadow_frag}};Dr.physical={uniforms:ei([Dr.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ze},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ze},clearcoatNormalScale:{value:new ot(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ze},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ze},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ze},sheen:{value:0},sheenColor:{value:new ht(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ze},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ze},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ze},transmissionSamplerSize:{value:new ot},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ze},attenuationDistance:{value:0},attenuationColor:{value:new ht(0)},specularColor:{value:new ht(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ze},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ze},anisotropyVector:{value:new ot},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ze}}]),vertexShader:nt.meshphysical_vert,fragmentShader:nt.meshphysical_frag};const Mf={r:0,b:0,g:0},g3=new Jt,U1=new Ze;U1.set(-1,0,0,0,1,0,0,0,1);function _3(n,e,t,i,r,s){const o=new ht(0);let a=r===!0?0:1,l,u,c=null,d=0,f=null;function h(g){let x=g.isScene===!0?g.background:null;if(x&&x.isTexture){const y=g.backgroundBlurriness>0;x=e.get(x,y)}return x}function m(g){let x=!1;const y=h(g);y===null?_(o,a):y&&y.isColor&&(_(y,1),x=!0);const T=n.xr.getEnvironmentBlendMode();T==="additive"?t.buffers.color.setClear(0,0,0,1,s):T==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(n.autoClear||x)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function v(g,x){const y=h(x);y&&(y.isCubeTexture||y.mapping===lh)?(u===void 0&&(u=new qr(new yc(1,1,1),new $r({name:"BackgroundCubeMaterial",uniforms:Pl(Dr.backgroundCube.uniforms),vertexShader:Dr.backgroundCube.vertexShader,fragmentShader:Dr.backgroundCube.fragmentShader,side:yi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(T,E,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),u.material.uniforms.envMap.value=y,u.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(g3.makeRotationFromEuler(x.backgroundRotation)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&u.material.uniforms.backgroundRotation.value.premultiply(U1),u.material.toneMapped=mt.getTransfer(y.colorSpace)!==Et,(c!==y||d!==y.version||f!==n.toneMapping)&&(u.material.needsUpdate=!0,c=y,d=y.version,f=n.toneMapping),u.layers.enableAll(),g.unshift(u,u.geometry,u.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new qr(new uh(2,2),new $r({name:"BackgroundMaterial",uniforms:Pl(Dr.background.uniforms),vertexShader:Dr.background.vertexShader,fragmentShader:Dr.background.fragmentShader,side:po,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,l.material.toneMapped=mt.getTransfer(y.colorSpace)!==Et,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(c!==y||d!==y.version||f!==n.toneMapping)&&(l.material.needsUpdate=!0,c=y,d=y.version,f=n.toneMapping),l.layers.enableAll(),g.unshift(l,l.geometry,l.material,0,0,null))}function _(g,x){g.getRGB(Mf,D1(n)),t.buffers.color.setClear(Mf.r,Mf.g,Mf.b,x,s)}function p(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(g,x=1){o.set(g),a=x,_(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(g){a=g,_(o,a)},render:m,addToRenderList:v,dispose:p}}function v3(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=f(null);let s=r,o=!1;function a(D,L,O,H,N){let B=!1;const I=d(D,H,O,L);s!==I&&(s=I,u(s.object)),B=h(D,H,O,N),B&&m(D,H,O,N),N!==null&&e.update(N,n.ELEMENT_ARRAY_BUFFER),(B||o)&&(o=!1,y(D,L,O,H),N!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(N).buffer))}function l(){return n.createVertexArray()}function u(D){return n.bindVertexArray(D)}function c(D){return n.deleteVertexArray(D)}function d(D,L,O,H){const N=H.wireframe===!0;let B=i[L.id];B===void 0&&(B={},i[L.id]=B);const I=D.isInstancedMesh===!0?D.id:0;let F=B[I];F===void 0&&(F={},B[I]=F);let W=F[O.id];W===void 0&&(W={},F[O.id]=W);let P=W[N];return P===void 0&&(P=f(l()),W[N]=P),P}function f(D){const L=[],O=[],H=[];for(let N=0;N<t;N++)L[N]=0,O[N]=0,H[N]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:O,attributeDivisors:H,object:D,attributes:{},index:null}}function h(D,L,O,H){const N=s.attributes,B=L.attributes;let I=0;const F=O.getAttributes();for(const W in F)if(F[W].location>=0){const ee=N[W];let ue=B[W];if(ue===void 0&&(W==="instanceMatrix"&&D.instanceMatrix&&(ue=D.instanceMatrix),W==="instanceColor"&&D.instanceColor&&(ue=D.instanceColor)),ee===void 0||ee.attribute!==ue||ue&&ee.data!==ue.data)return!0;I++}return s.attributesNum!==I||s.index!==H}function m(D,L,O,H){const N={},B=L.attributes;let I=0;const F=O.getAttributes();for(const W in F)if(F[W].location>=0){let ee=B[W];ee===void 0&&(W==="instanceMatrix"&&D.instanceMatrix&&(ee=D.instanceMatrix),W==="instanceColor"&&D.instanceColor&&(ee=D.instanceColor));const ue={};ue.attribute=ee,ee&&ee.data&&(ue.data=ee.data),N[W]=ue,I++}s.attributes=N,s.attributesNum=I,s.index=H}function v(){const D=s.newAttributes;for(let L=0,O=D.length;L<O;L++)D[L]=0}function _(D){p(D,0)}function p(D,L){const O=s.newAttributes,H=s.enabledAttributes,N=s.attributeDivisors;O[D]=1,H[D]===0&&(n.enableVertexAttribArray(D),H[D]=1),N[D]!==L&&(n.vertexAttribDivisor(D,L),N[D]=L)}function g(){const D=s.newAttributes,L=s.enabledAttributes;for(let O=0,H=L.length;O<H;O++)L[O]!==D[O]&&(n.disableVertexAttribArray(O),L[O]=0)}function x(D,L,O,H,N,B,I){I===!0?n.vertexAttribIPointer(D,L,O,N,B):n.vertexAttribPointer(D,L,O,H,N,B)}function y(D,L,O,H){v();const N=H.attributes,B=O.getAttributes(),I=L.defaultAttributeValues;for(const F in B){const W=B[F];if(W.location>=0){let P=N[F];if(P===void 0&&(F==="instanceMatrix"&&D.instanceMatrix&&(P=D.instanceMatrix),F==="instanceColor"&&D.instanceColor&&(P=D.instanceColor)),P!==void 0){const ee=P.normalized,ue=P.itemSize,ve=e.get(P);if(ve===void 0)continue;const Le=ve.buffer,Ce=ve.type,$=ve.bytesPerElement,se=Ce===n.INT||Ce===n.UNSIGNED_INT||P.gpuType===p0;if(P.isInterleavedBufferAttribute){const ae=P.data,Pe=ae.stride,He=P.offset;if(ae.isInstancedInterleavedBuffer){for(let Ie=0;Ie<W.locationSize;Ie++)p(W.location+Ie,ae.meshPerAttribute);D.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let Ie=0;Ie<W.locationSize;Ie++)_(W.location+Ie);n.bindBuffer(n.ARRAY_BUFFER,Le);for(let Ie=0;Ie<W.locationSize;Ie++)x(W.location+Ie,ue/W.locationSize,Ce,ee,Pe*$,(He+ue/W.locationSize*Ie)*$,se)}else{if(P.isInstancedBufferAttribute){for(let ae=0;ae<W.locationSize;ae++)p(W.location+ae,P.meshPerAttribute);D.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=P.meshPerAttribute*P.count)}else for(let ae=0;ae<W.locationSize;ae++)_(W.location+ae);n.bindBuffer(n.ARRAY_BUFFER,Le);for(let ae=0;ae<W.locationSize;ae++)x(W.location+ae,ue/W.locationSize,Ce,ee,ue*$,ue/W.locationSize*ae*$,se)}}else if(I!==void 0){const ee=I[F];if(ee!==void 0)switch(ee.length){case 2:n.vertexAttrib2fv(W.location,ee);break;case 3:n.vertexAttrib3fv(W.location,ee);break;case 4:n.vertexAttrib4fv(W.location,ee);break;default:n.vertexAttrib1fv(W.location,ee)}}}}g()}function T(){C();for(const D in i){const L=i[D];for(const O in L){const H=L[O];for(const N in H){const B=H[N];for(const I in B)c(B[I].object),delete B[I];delete H[N]}}delete i[D]}}function E(D){if(i[D.id]===void 0)return;const L=i[D.id];for(const O in L){const H=L[O];for(const N in H){const B=H[N];for(const I in B)c(B[I].object),delete B[I];delete H[N]}}delete i[D.id]}function w(D){for(const L in i){const O=i[L];for(const H in O){const N=O[H];if(N[D.id]===void 0)continue;const B=N[D.id];for(const I in B)c(B[I].object),delete B[I];delete N[D.id]}}}function S(D){for(const L in i){const O=i[L],H=D.isInstancedMesh===!0?D.id:0,N=O[H];if(N!==void 0){for(const B in N){const I=N[B];for(const F in I)c(I[F].object),delete I[F];delete N[B]}delete O[H],Object.keys(O).length===0&&delete i[L]}}}function C(){b(),o=!0,s!==r&&(s=r,u(s.object))}function b(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:C,resetDefaultState:b,dispose:T,releaseStatesOfGeometry:E,releaseStatesOfObject:S,releaseStatesOfProgram:w,initAttributes:v,enableAttribute:_,disableUnusedAttributes:g}}function x3(n,e,t){let i;function r(l){i=l}function s(l,u){n.drawArrays(i,l,u),t.update(u,i,1)}function o(l,u,c){c!==0&&(n.drawArraysInstanced(i,l,u,c),t.update(u,i,c))}function a(l,u,c){if(c===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,u,0,c);let f=0;for(let h=0;h<c;h++)f+=u[h];t.update(f,i,1)}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a}function S3(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(w){return!(w!==_r&&i.convert(w)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(w){const S=w===ys&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(w!==Ii&&i.convert(w)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==kr&&!S)}function l(w){if(w==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=t.precision!==void 0?t.precision:"highp";const c=l(u);c!==u&&(Ye("WebGLRenderer:",u,"not supported, using",c,"instead."),u=c);const d=t.logarithmicDepthBuffer===!0,f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&f===!1&&Ye("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const h=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),m=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_TEXTURE_SIZE),_=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),g=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),x=n.getParameter(n.MAX_VARYING_VECTORS),y=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),T=n.getParameter(n.MAX_SAMPLES),E=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:u,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:h,maxVertexTextures:m,maxTextureSize:v,maxCubemapSize:_,maxAttributes:p,maxVertexUniforms:g,maxVaryings:x,maxFragmentUniforms:y,maxSamples:T,samples:E}}function y3(n){const e=this;let t=null,i=0,r=!1,s=!1;const o=new Do,a=new Ze,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const h=d.length!==0||f||i!==0||r;return r=f,i=d.length,h},this.beginShadows=function(){s=!0,c(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,f){t=c(d,f,0)},this.setState=function(d,f,h){const m=d.clippingPlanes,v=d.clipIntersection,_=d.clipShadows,p=n.get(d);if(!r||m===null||m.length===0||s&&!_)s?c(null):u();else{const g=s?0:i,x=g*4;let y=p.clippingState||null;l.value=y,y=c(m,f,x,h);for(let T=0;T!==x;++T)y[T]=t[T];p.clippingState=y,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=g}};function u(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function c(d,f,h,m){const v=d!==null?d.length:0;let _=null;if(v!==0){if(_=l.value,m!==!0||_===null){const p=h+v*4,g=f.matrixWorldInverse;a.getNormalMatrix(g),(_===null||_.length<p)&&(_=new Float32Array(p));for(let x=0,y=h;x!==v;++x,y+=4)o.copy(d[x]).applyMatrix4(g,a),o.normal.toArray(_,y),_[y+3]=o.constant}l.value=_,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,_}}const qs=4,nS=[.125,.215,.35,.446,.526,.582],No=20,M3=256,tu=new w0,iS=new ht;let Cp=null,Rp=0,bp=0,Pp=!1;const E3=new Y;class Gg{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,r=100,s={}){const{size:o=256,position:a=E3}=s;Cp=this._renderer.getRenderTarget(),Rp=this._renderer.getActiveCubeFace(),bp=this._renderer.getActiveMipmapLevel(),Pp=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=oS(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=sS(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Cp,Rp,bp),this._renderer.xr.enabled=Pp,e.scissorTest=!1,Ua(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ra||e.mapping===Rl?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Cp=this._renderer.getRenderTarget(),Rp=this._renderer.getActiveCubeFace(),bp=this._renderer.getActiveMipmapLevel(),Pp=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:jn,minFilter:jn,generateMipmaps:!1,type:ys,format:_r,colorSpace:Fd,depthBuffer:!1},r=rS(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=rS(e,t,i);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=T3(s)),this._blurMaterial=A3(s,e,t),this._ggxMaterial=w3(s,e,t)}return r}_compileMaterial(e){const t=new qr(new Mr,e);this._renderer.compile(t,tu)}_sceneToCubeUV(e,t,i,r,s){const l=new Ji(90,1,t,i),u=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],d=this._renderer,f=d.autoClear,h=d.toneMapping;d.getClearColor(iS),d.toneMapping=Gr,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(r),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new qr(new yc,new R1({name:"PMREM.Background",side:yi,depthWrite:!1,depthTest:!1})));const v=this._backgroundBox,_=v.material;let p=!1;const g=e.background;g?g.isColor&&(_.color.copy(g),e.background=null,p=!0):(_.color.copy(iS),p=!0);for(let x=0;x<6;x++){const y=x%3;y===0?(l.up.set(0,u[x],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+c[x],s.y,s.z)):y===1?(l.up.set(0,0,u[x]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+c[x],s.z)):(l.up.set(0,u[x],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+c[x]));const T=this._cubeSize;Ua(r,y*T,x>2?T:0,T,T),d.setRenderTarget(r),p&&d.render(v,l),d.render(e,l)}d.toneMapping=h,d.autoClear=f,e.background=g}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===ra||e.mapping===Rl;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=oS()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=sS());const s=r?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=s;const a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Ua(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,tu)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=i}_applyGGXFilter(e,t,i){const r=this._renderer,s=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[i];a.material=o;const l=o.uniforms,u=i/(this._lodMeshes.length-1),c=t/(this._lodMeshes.length-1),d=Math.sqrt(u*u-c*c),f=0+u*1.25,h=d*f,{_lodMax:m}=this,v=this._sizeLods[i],_=3*v*(i>m-qs?i-m+qs:0),p=4*(this._cubeSize-v);l.envMap.value=e.texture,l.roughness.value=h,l.mipInt.value=m-t,Ua(s,_,p,3*v,2*v),r.setRenderTarget(s),r.render(a,tu),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=m-i,Ua(e,_,p,3*v,2*v),r.setRenderTarget(e),r.render(a,tu)}_blur(e,t,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){const l=this._renderer,u=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&_t("blur direction must be either latitudinal or longitudinal!");const c=3,d=this._lodMeshes[r];d.material=u;const f=u.uniforms,h=this._sizeLods[i]-1,m=isFinite(s)?Math.PI/(2*h):2*Math.PI/(2*No-1),v=s/m,_=isFinite(s)?1+Math.floor(c*v):No;_>No&&Ye(`sigmaRadians, ${s}, is too large and will clip, as it requested ${_} samples when the maximum is set to ${No}`);const p=[];let g=0;for(let w=0;w<No;++w){const S=w/v,C=Math.exp(-S*S/2);p.push(C),w===0?g+=C:w<_&&(g+=2*C)}for(let w=0;w<p.length;w++)p[w]=p[w]/g;f.envMap.value=e.texture,f.samples.value=_,f.weights.value=p,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:x}=this;f.dTheta.value=m,f.mipInt.value=x-i;const y=this._sizeLods[r],T=3*y*(r>x-qs?r-x+qs:0),E=4*(this._cubeSize-y);Ua(t,T,E,3*y,2*y),l.setRenderTarget(t),l.render(d,tu)}}function T3(n){const e=[],t=[],i=[];let r=n;const s=n-qs+1+nS.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);e.push(a);let l=1/a;o>n-qs?l=nS[o-n+qs-1]:o===0&&(l=0),t.push(l);const u=1/(a-2),c=-u,d=1+u,f=[c,c,d,c,d,d,c,c,d,d,c,d],h=6,m=6,v=3,_=2,p=1,g=new Float32Array(v*m*h),x=new Float32Array(_*m*h),y=new Float32Array(p*m*h);for(let E=0;E<h;E++){const w=E%3*2/3-1,S=E>2?0:-1,C=[w,S,0,w+2/3,S,0,w+2/3,S+1,0,w,S,0,w+2/3,S+1,0,w,S+1,0];g.set(C,v*m*E),x.set(f,_*m*E);const b=[E,E,E,E,E,E];y.set(b,p*m*E)}const T=new Mr;T.setAttribute("position",new Sr(g,v)),T.setAttribute("uv",new Sr(x,_)),T.setAttribute("faceIndex",new Sr(y,p)),i.push(new qr(T,null)),r>qs&&r--}return{lodMeshes:i,sizeLods:e,sigmas:t}}function rS(n,e,t){const i=new Wr(n,e,t);return i.texture.mapping=lh,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ua(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function w3(n,e,t){return new $r({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:M3,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:ch(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:hs,depthTest:!1,depthWrite:!1})}function A3(n,e,t){const i=new Float32Array(No),r=new Y(0,1,0);return new $r({name:"SphericalGaussianBlur",defines:{n:No,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:ch(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:hs,depthTest:!1,depthWrite:!1})}function sS(){return new $r({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ch(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:hs,depthTest:!1,depthWrite:!1})}function oS(){return new $r({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ch(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:hs,depthTest:!1,depthWrite:!1})}function ch(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class F1 extends Wr{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new b1(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new yc(5,5,5),s=new $r({name:"CubemapFromEquirect",uniforms:Pl(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:yi,blending:hs});s.uniforms.tEquirect.value=t;const o=new qr(r,s),a=t.minFilter;return t.minFilter===Bo&&(t.minFilter=jn),new Db(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}}function C3(n){let e=new WeakMap,t=new WeakMap,i=null;function r(f,h=!1){return f==null?null:h?o(f):s(f)}function s(f){if(f&&f.isTexture){const h=f.mapping;if(h===jf||h===Qh)if(e.has(f)){const m=e.get(f).texture;return a(m,f.mapping)}else{const m=f.image;if(m&&m.height>0){const v=new F1(m.height);return v.fromEquirectangularTexture(n,f),e.set(f,v),f.addEventListener("dispose",u),a(v.texture,f.mapping)}else return null}}return f}function o(f){if(f&&f.isTexture){const h=f.mapping,m=h===jf||h===Qh,v=h===ra||h===Rl;if(m||v){let _=t.get(f);const p=_!==void 0?_.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==p)return i===null&&(i=new Gg(n)),_=m?i.fromEquirectangular(f,_):i.fromCubemap(f,_),_.texture.pmremVersion=f.pmremVersion,t.set(f,_),_.texture;if(_!==void 0)return _.texture;{const g=f.image;return m&&g&&g.height>0||v&&g&&l(g)?(i===null&&(i=new Gg(n)),_=m?i.fromEquirectangular(f):i.fromCubemap(f),_.texture.pmremVersion=f.pmremVersion,t.set(f,_),f.addEventListener("dispose",c),_.texture):null}}}return f}function a(f,h){return h===jf?f.mapping=ra:h===Qh&&(f.mapping=Rl),f}function l(f){let h=0;const m=6;for(let v=0;v<m;v++)f[v]!==void 0&&h++;return h===m}function u(f){const h=f.target;h.removeEventListener("dispose",u);const m=e.get(h);m!==void 0&&(e.delete(h),m.dispose())}function c(f){const h=f.target;h.removeEventListener("dispose",c);const m=t.get(h);m!==void 0&&(t.delete(h),m.dispose())}function d(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:d}}function R3(n){const e={};function t(i){if(e[i]!==void 0)return e[i];const r=n.getExtension(i);return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&Vg("WebGLRenderer: "+i+" extension not supported."),r}}}function b3(n,e,t,i){const r={},s=new WeakMap;function o(d){const f=d.target;f.index!==null&&e.remove(f.index);for(const m in f.attributes)e.remove(f.attributes[m]);f.removeEventListener("dispose",o),delete r[f.id];const h=s.get(f);h&&(e.remove(h),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(d,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,t.memory.geometries++),f}function l(d){const f=d.attributes;for(const h in f)e.update(f[h],n.ARRAY_BUFFER)}function u(d){const f=[],h=d.index,m=d.attributes.position;let v=0;if(m===void 0)return;if(h!==null){const g=h.array;v=h.version;for(let x=0,y=g.length;x<y;x+=3){const T=g[x+0],E=g[x+1],w=g[x+2];f.push(T,E,E,w,w,T)}}else{const g=m.array;v=m.version;for(let x=0,y=g.length/3-1;x<y;x+=3){const T=x+0,E=x+1,w=x+2;f.push(T,E,E,w,w,T)}}const _=new(m.count>=65535?w1:T1)(f,1);_.version=v;const p=s.get(d);p&&e.remove(p),s.set(d,_)}function c(d){const f=s.get(d);if(f){const h=d.index;h!==null&&f.version<h.version&&u(d)}else u(d);return s.get(d)}return{get:a,update:l,getWireframeAttribute:c}}function P3(n,e,t){let i;function r(d){i=d}let s,o;function a(d){s=d.type,o=d.bytesPerElement}function l(d,f){n.drawElements(i,f,s,d*o),t.update(f,i,1)}function u(d,f,h){h!==0&&(n.drawElementsInstanced(i,f,s,d*o,h),t.update(f,i,h))}function c(d,f,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,s,d,0,h);let v=0;for(let _=0;_<h;_++)v+=f[_];t.update(v,i,1)}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=u,this.renderMultiDraw=c}function D3(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:_t("WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function L3(n,e,t){const i=new WeakMap,r=new Zt;function s(o,a,l){const u=o.morphTargetInfluences,c=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=c!==void 0?c.length:0;let f=i.get(a);if(f===void 0||f.count!==d){let b=function(){S.dispose(),i.delete(a),a.removeEventListener("dispose",b)};var h=b;f!==void 0&&f.texture.dispose();const m=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],g=a.morphAttributes.normal||[],x=a.morphAttributes.color||[];let y=0;m===!0&&(y=1),v===!0&&(y=2),_===!0&&(y=3);let T=a.attributes.position.count*y,E=1;T>e.maxTextureSize&&(E=Math.ceil(T/e.maxTextureSize),T=e.maxTextureSize);const w=new Float32Array(T*E*4*d),S=new y1(w,T,E,d);S.type=kr,S.needsUpdate=!0;const C=y*4;for(let D=0;D<d;D++){const L=p[D],O=g[D],H=x[D],N=T*E*4*D;for(let B=0;B<L.count;B++){const I=B*C;m===!0&&(r.fromBufferAttribute(L,B),w[N+I+0]=r.x,w[N+I+1]=r.y,w[N+I+2]=r.z,w[N+I+3]=0),v===!0&&(r.fromBufferAttribute(O,B),w[N+I+4]=r.x,w[N+I+5]=r.y,w[N+I+6]=r.z,w[N+I+7]=0),_===!0&&(r.fromBufferAttribute(H,B),w[N+I+8]=r.x,w[N+I+9]=r.y,w[N+I+10]=r.z,w[N+I+11]=H.itemSize===4?r.w:1)}}f={count:d,texture:S,size:new ot(T,E)},i.set(a,f),a.addEventListener("dispose",b)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let m=0;for(let _=0;_<u.length;_++)m+=u[_];const v=a.morphTargetsRelative?1:1-m;l.getUniforms().setValue(n,"morphTargetBaseInfluence",v),l.getUniforms().setValue(n,"morphTargetInfluences",u)}l.getUniforms().setValue(n,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:s}}function N3(n,e,t,i,r){let s=new WeakMap;function o(u){const c=r.render.frame,d=u.geometry,f=e.get(u,d);if(s.get(f)!==c&&(e.update(f),s.set(f,c)),u.isInstancedMesh&&(u.hasEventListener("dispose",l)===!1&&u.addEventListener("dispose",l),s.get(u)!==c&&(t.update(u.instanceMatrix,n.ARRAY_BUFFER),u.instanceColor!==null&&t.update(u.instanceColor,n.ARRAY_BUFFER),s.set(u,c))),u.isSkinnedMesh){const h=u.skeleton;s.get(h)!==c&&(h.update(),s.set(h,c))}return f}function a(){s=new WeakMap}function l(u){const c=u.target;c.removeEventListener("dispose",l),i.releaseStatesOfObject(c),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:o,dispose:a}}const I3={[o1]:"LINEAR_TONE_MAPPING",[a1]:"REINHARD_TONE_MAPPING",[l1]:"CINEON_TONE_MAPPING",[h0]:"ACES_FILMIC_TONE_MAPPING",[c1]:"AGX_TONE_MAPPING",[f1]:"NEUTRAL_TONE_MAPPING",[u1]:"CUSTOM_TONE_MAPPING"};function U3(n,e,t,i,r){const s=new Wr(e,t,{type:n,depthBuffer:i,stencilBuffer:r,depthTexture:i?new bl(e,t):void 0}),o=new Wr(e,t,{type:ys,depthBuffer:!1,stencilBuffer:!1}),a=new Mr;a.setAttribute("position",new Xr([-1,3,0,-1,-1,0,3,-1,0],3)),a.setAttribute("uv",new Xr([0,2,0,0,2,0],2));const l=new Eb({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),u=new qr(a,l),c=new w0(-1,1,1,-1,0,1);let d=null,f=null,h=!1,m,v=null,_=[],p=!1;this.setSize=function(g,x){s.setSize(g,x),o.setSize(g,x);for(let y=0;y<_.length;y++){const T=_[y];T.setSize&&T.setSize(g,x)}},this.setEffects=function(g){_=g,p=_.length>0&&_[0].isRenderPass===!0;const x=s.width,y=s.height;for(let T=0;T<_.length;T++){const E=_[T];E.setSize&&E.setSize(x,y)}},this.begin=function(g,x){if(h||g.toneMapping===Gr&&_.length===0)return!1;if(v=x,x!==null){const y=x.width,T=x.height;(s.width!==y||s.height!==T)&&this.setSize(y,T)}return p===!1&&g.setRenderTarget(s),m=g.toneMapping,g.toneMapping=Gr,!0},this.hasRenderPass=function(){return p},this.end=function(g,x){g.toneMapping=m,h=!0;let y=s,T=o;for(let E=0;E<_.length;E++){const w=_[E];if(w.enabled!==!1&&(w.render(g,T,y,x),w.needsSwap!==!1)){const S=y;y=T,T=S}}if(d!==g.outputColorSpace||f!==g.toneMapping){d=g.outputColorSpace,f=g.toneMapping,l.defines={},mt.getTransfer(d)===Et&&(l.defines.SRGB_TRANSFER="");const E=I3[f];E&&(l.defines[E]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=y.texture,g.setRenderTarget(v),g.render(u,c),v=null,h=!1},this.isCompositing=function(){return h},this.dispose=function(){s.depthTexture&&s.depthTexture.dispose(),s.dispose(),o.dispose(),a.dispose(),l.dispose()}}const O1=new $n,Wg=new bl(1,1),k1=new y1,B1=new ZR,z1=new b1,aS=[],lS=[],uS=new Float32Array(16),cS=new Float32Array(9),fS=new Float32Array(4);function Fl(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=aS[r];if(s===void 0&&(s=new Float32Array(r),aS[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function vn(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function xn(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function fh(n,e){let t=lS[e];t===void 0&&(t=new Int32Array(e),lS[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function F3(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function O3(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(vn(t,e))return;n.uniform2fv(this.addr,e),xn(t,e)}}function k3(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(vn(t,e))return;n.uniform3fv(this.addr,e),xn(t,e)}}function B3(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(vn(t,e))return;n.uniform4fv(this.addr,e),xn(t,e)}}function z3(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(vn(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),xn(t,e)}else{if(vn(t,i))return;fS.set(i),n.uniformMatrix2fv(this.addr,!1,fS),xn(t,i)}}function V3(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(vn(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),xn(t,e)}else{if(vn(t,i))return;cS.set(i),n.uniformMatrix3fv(this.addr,!1,cS),xn(t,i)}}function H3(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(vn(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),xn(t,e)}else{if(vn(t,i))return;uS.set(i),n.uniformMatrix4fv(this.addr,!1,uS),xn(t,i)}}function G3(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function W3(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(vn(t,e))return;n.uniform2iv(this.addr,e),xn(t,e)}}function X3(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(vn(t,e))return;n.uniform3iv(this.addr,e),xn(t,e)}}function Y3(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(vn(t,e))return;n.uniform4iv(this.addr,e),xn(t,e)}}function j3(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function q3(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(vn(t,e))return;n.uniform2uiv(this.addr,e),xn(t,e)}}function $3(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(vn(t,e))return;n.uniform3uiv(this.addr,e),xn(t,e)}}function K3(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(vn(t,e))return;n.uniform4uiv(this.addr,e),xn(t,e)}}function Z3(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(Wg.compareFunction=t.isReversedDepthBuffer()?y0:S0,s=Wg):s=O1,t.setTexture2D(e||s,r)}function Q3(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||B1,r)}function J3(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||z1,r)}function eD(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||k1,r)}function tD(n){switch(n){case 5126:return F3;case 35664:return O3;case 35665:return k3;case 35666:return B3;case 35674:return z3;case 35675:return V3;case 35676:return H3;case 5124:case 35670:return G3;case 35667:case 35671:return W3;case 35668:case 35672:return X3;case 35669:case 35673:return Y3;case 5125:return j3;case 36294:return q3;case 36295:return $3;case 36296:return K3;case 35678:case 36198:case 36298:case 36306:case 35682:return Z3;case 35679:case 36299:case 36307:return Q3;case 35680:case 36300:case 36308:case 36293:return J3;case 36289:case 36303:case 36311:case 36292:return eD}}function nD(n,e){n.uniform1fv(this.addr,e)}function iD(n,e){const t=Fl(e,this.size,2);n.uniform2fv(this.addr,t)}function rD(n,e){const t=Fl(e,this.size,3);n.uniform3fv(this.addr,t)}function sD(n,e){const t=Fl(e,this.size,4);n.uniform4fv(this.addr,t)}function oD(n,e){const t=Fl(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function aD(n,e){const t=Fl(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function lD(n,e){const t=Fl(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function uD(n,e){n.uniform1iv(this.addr,e)}function cD(n,e){n.uniform2iv(this.addr,e)}function fD(n,e){n.uniform3iv(this.addr,e)}function dD(n,e){n.uniform4iv(this.addr,e)}function hD(n,e){n.uniform1uiv(this.addr,e)}function pD(n,e){n.uniform2uiv(this.addr,e)}function mD(n,e){n.uniform3uiv(this.addr,e)}function gD(n,e){n.uniform4uiv(this.addr,e)}function _D(n,e,t){const i=this.cache,r=e.length,s=fh(t,r);vn(i,s)||(n.uniform1iv(this.addr,s),xn(i,s));let o;this.type===n.SAMPLER_2D_SHADOW?o=Wg:o=O1;for(let a=0;a!==r;++a)t.setTexture2D(e[a]||o,s[a])}function vD(n,e,t){const i=this.cache,r=e.length,s=fh(t,r);vn(i,s)||(n.uniform1iv(this.addr,s),xn(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||B1,s[o])}function xD(n,e,t){const i=this.cache,r=e.length,s=fh(t,r);vn(i,s)||(n.uniform1iv(this.addr,s),xn(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||z1,s[o])}function SD(n,e,t){const i=this.cache,r=e.length,s=fh(t,r);vn(i,s)||(n.uniform1iv(this.addr,s),xn(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||k1,s[o])}function yD(n){switch(n){case 5126:return nD;case 35664:return iD;case 35665:return rD;case 35666:return sD;case 35674:return oD;case 35675:return aD;case 35676:return lD;case 5124:case 35670:return uD;case 35667:case 35671:return cD;case 35668:case 35672:return fD;case 35669:case 35673:return dD;case 5125:return hD;case 36294:return pD;case 36295:return mD;case 36296:return gD;case 35678:case 36198:case 36298:case 36306:case 35682:return _D;case 35679:case 36299:case 36307:return vD;case 35680:case 36300:case 36308:case 36293:return xD;case 36289:case 36303:case 36311:case 36292:return SD}}class MD{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=tD(t.type)}}class ED{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=yD(t.type)}}class TD{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],i)}}}const Dp=/(\w+)(\])?(\[|\.)?/g;function dS(n,e){n.seq.push(e),n.map[e.id]=e}function wD(n,e,t){const i=n.name,r=i.length;for(Dp.lastIndex=0;;){const s=Dp.exec(i),o=Dp.lastIndex;let a=s[1];const l=s[2]==="]",u=s[3];if(l&&(a=a|0),u===void 0||u==="["&&o+2===r){dS(t,u===void 0?new MD(a,n,e):new ED(a,n,e));break}else{let d=t.map[a];d===void 0&&(d=new TD(a),dS(t,d)),t=d}}}class Qf{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){const a=e.getActiveUniform(t,o),l=e.getUniformLocation(t,a.name);wD(a,l,this)}const r=[],s=[];for(const o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(o):s.push(o);r.length>0&&(this.seq=r.concat(s))}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function hS(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const AD=37297;let CD=0;function RD(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}const pS=new Ze;function bD(n){mt._getMatrix(pS,mt.workingColorSpace,n);const e=`mat3( ${pS.elements.map(t=>t.toFixed(4))} )`;switch(mt.getTransfer(n)){case Od:return[e,"LinearTransferOETF"];case Et:return[e,"sRGBTransferOETF"];default:return Ye("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function mS(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),s=(n.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const a=parseInt(o[1]);return t.toUpperCase()+`

`+s+`

`+RD(n.getShaderSource(e),a)}else return s}function PD(n,e){const t=bD(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const DD={[o1]:"Linear",[a1]:"Reinhard",[l1]:"Cineon",[h0]:"ACESFilmic",[c1]:"AgX",[f1]:"Neutral",[u1]:"Custom"};function LD(n,e){const t=DD[e];return t===void 0?(Ye("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Ef=new Y;function ND(){mt.getLuminanceCoefficients(Ef);const n=Ef.x.toFixed(4),e=Ef.y.toFixed(4),t=Ef.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function ID(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(gu).join(`
`)}function UD(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function FD(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function gu(n){return n!==""}function gS(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function _S(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const OD=/^[ \t]*#include +<([\w\d./]+)>/gm;function Xg(n){return n.replace(OD,BD)}const kD=new Map;function BD(n,e){let t=nt[e];if(t===void 0){const i=kD.get(e);if(i!==void 0)t=nt[i],Ye('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Xg(t)}const zD=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function vS(n){return n.replace(zD,VD)}function VD(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function xS(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const HD={[Yf]:"SHADOWMAP_TYPE_PCF",[pu]:"SHADOWMAP_TYPE_VSM"};function GD(n){return HD[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const WD={[ra]:"ENVMAP_TYPE_CUBE",[Rl]:"ENVMAP_TYPE_CUBE",[lh]:"ENVMAP_TYPE_CUBE_UV"};function XD(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":WD[n.envMapMode]||"ENVMAP_TYPE_CUBE"}const YD={[Rl]:"ENVMAP_MODE_REFRACTION"};function jD(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":YD[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}const qD={[s1]:"ENVMAP_BLENDING_MULTIPLY",[PR]:"ENVMAP_BLENDING_MIX",[DR]:"ENVMAP_BLENDING_ADD"};function $D(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":qD[n.combine]||"ENVMAP_BLENDING_NONE"}function KD(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function ZD(n,e,t,i){const r=n.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=GD(t),u=XD(t),c=jD(t),d=$D(t),f=KD(t),h=ID(t),m=UD(s),v=r.createProgram();let _,p,g=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(_=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(gu).join(`
`),_.length>0&&(_+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(gu).join(`
`),p.length>0&&(p+=`
`)):(_=[xS(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(gu).join(`
`),p=[xS(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.envMap?"#define "+c:"",t.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Gr?"#define TONE_MAPPING":"",t.toneMapping!==Gr?nt.tonemapping_pars_fragment:"",t.toneMapping!==Gr?LD("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",nt.colorspace_pars_fragment,PD("linearToOutputTexel",t.outputColorSpace),ND(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(gu).join(`
`)),o=Xg(o),o=gS(o,t),o=_S(o,t),a=Xg(a),a=gS(a,t),a=_S(a,t),o=vS(o),a=vS(a),t.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,_=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,p=["#define varying in",t.glslVersion===Px?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Px?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const x=g+_+o,y=g+p+a,T=hS(r,r.VERTEX_SHADER,x),E=hS(r,r.FRAGMENT_SHADER,y);r.attachShader(v,T),r.attachShader(v,E),t.index0AttributeName!==void 0?r.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v);function w(D){if(n.debug.checkShaderErrors){const L=r.getProgramInfoLog(v)||"",O=r.getShaderInfoLog(T)||"",H=r.getShaderInfoLog(E)||"",N=L.trim(),B=O.trim(),I=H.trim();let F=!0,W=!0;if(r.getProgramParameter(v,r.LINK_STATUS)===!1)if(F=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,v,T,E);else{const P=mS(r,T,"vertex"),ee=mS(r,E,"fragment");_t("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(v,r.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+N+`
`+P+`
`+ee)}else N!==""?Ye("WebGLProgram: Program Info Log:",N):(B===""||I==="")&&(W=!1);W&&(D.diagnostics={runnable:F,programLog:N,vertexShader:{log:B,prefix:_},fragmentShader:{log:I,prefix:p}})}r.deleteShader(T),r.deleteShader(E),S=new Qf(r,v),C=FD(r,v)}let S;this.getUniforms=function(){return S===void 0&&w(this),S};let C;this.getAttributes=function(){return C===void 0&&w(this),C};let b=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=r.getProgramParameter(v,AD)),b},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=CD++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=T,this.fragmentShader=E,this}let QD=0;class JD{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new eL(e),t.set(e,i)),i}}class eL{constructor(e){this.id=QD++,this.code=e,this.usedTimes=0}}function tL(n){return n===sa||n===Id||n===Ud}function nL(n,e,t,i,r,s){const o=new M1,a=new JD,l=new Set,u=[],c=new Map,d=i.logarithmicDepthBuffer;let f=i.precision;const h={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(S){return l.add(S),S===0?"uv":`uv${S}`}function v(S,C,b,D,L,O){const H=D.fog,N=L.geometry,B=S.isMeshStandardMaterial||S.isMeshLambertMaterial||S.isMeshPhongMaterial?D.environment:null,I=S.isMeshStandardMaterial||S.isMeshLambertMaterial&&!S.envMap||S.isMeshPhongMaterial&&!S.envMap,F=e.get(S.envMap||B,I),W=F&&F.mapping===lh?F.image.height:null,P=h[S.type];S.precision!==null&&(f=i.getMaxPrecision(S.precision),f!==S.precision&&Ye("WebGLProgram.getParameters:",S.precision,"not supported, using",f,"instead."));const ee=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,ue=ee!==void 0?ee.length:0;let ve=0;N.morphAttributes.position!==void 0&&(ve=1),N.morphAttributes.normal!==void 0&&(ve=2),N.morphAttributes.color!==void 0&&(ve=3);let Le,Ce,$,se;if(P){const he=Dr[P];Le=he.vertexShader,Ce=he.fragmentShader}else Le=S.vertexShader,Ce=S.fragmentShader,a.update(S),$=a.getVertexShaderID(S),se=a.getFragmentShaderID(S);const ae=n.getRenderTarget(),Pe=n.state.buffers.depth.getReversed(),He=L.isInstancedMesh===!0,Ie=L.isBatchedMesh===!0,it=!!S.map,Re=!!S.matcap,We=!!F,tt=!!S.aoMap,Ge=!!S.lightMap,j=!!S.bumpMap,ct=!!S.normalMap,Ht=!!S.displacementMap,k=!!S.emissiveMap,Qe=!!S.metalnessMap,qe=!!S.roughnessMap,pt=S.anisotropy>0,_e=S.clearcoat>0,et=S.dispersion>0,R=S.iridescence>0,M=S.sheen>0,V=S.transmission>0,Z=pt&&!!S.anisotropyMap,te=_e&&!!S.clearcoatMap,pe=_e&&!!S.clearcoatNormalMap,ie=_e&&!!S.clearcoatRoughnessMap,K=R&&!!S.iridescenceMap,J=R&&!!S.iridescenceThicknessMap,Se=M&&!!S.sheenColorMap,Ae=M&&!!S.sheenRoughnessMap,me=!!S.specularMap,ce=!!S.specularColorMap,xe=!!S.specularIntensityMap,Xe=V&&!!S.transmissionMap,Ke=V&&!!S.thicknessMap,U=!!S.gradientMap,le=!!S.alphaMap,Q=S.alphaTest>0,Me=!!S.alphaHash,de=!!S.extensions;let ne=Gr;S.toneMapped&&(ae===null||ae.isXRRenderTarget===!0)&&(ne=n.toneMapping);const oe={shaderID:P,shaderType:S.type,shaderName:S.name,vertexShader:Le,fragmentShader:Ce,defines:S.defines,customVertexShaderID:$,customFragmentShaderID:se,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:f,batching:Ie,batchingColor:Ie&&L._colorsTexture!==null,instancing:He,instancingColor:He&&L.instanceColor!==null,instancingMorph:He&&L.morphTexture!==null,outputColorSpace:ae===null?n.outputColorSpace:ae.isXRRenderTarget===!0?ae.texture.colorSpace:mt.workingColorSpace,alphaToCoverage:!!S.alphaToCoverage,map:it,matcap:Re,envMap:We,envMapMode:We&&F.mapping,envMapCubeUVHeight:W,aoMap:tt,lightMap:Ge,bumpMap:j,normalMap:ct,displacementMap:Ht,emissiveMap:k,normalMapObjectSpace:ct&&S.normalMapType===IR,normalMapTangentSpace:ct&&S.normalMapType===Bg,packedNormalMap:ct&&S.normalMapType===Bg&&tL(S.normalMap.format),metalnessMap:Qe,roughnessMap:qe,anisotropy:pt,anisotropyMap:Z,clearcoat:_e,clearcoatMap:te,clearcoatNormalMap:pe,clearcoatRoughnessMap:ie,dispersion:et,iridescence:R,iridescenceMap:K,iridescenceThicknessMap:J,sheen:M,sheenColorMap:Se,sheenRoughnessMap:Ae,specularMap:me,specularColorMap:ce,specularIntensityMap:xe,transmission:V,transmissionMap:Xe,thicknessMap:Ke,gradientMap:U,opaque:S.transparent===!1&&S.blending===dl&&S.alphaToCoverage===!1,alphaMap:le,alphaTest:Q,alphaHash:Me,combine:S.combine,mapUv:it&&m(S.map.channel),aoMapUv:tt&&m(S.aoMap.channel),lightMapUv:Ge&&m(S.lightMap.channel),bumpMapUv:j&&m(S.bumpMap.channel),normalMapUv:ct&&m(S.normalMap.channel),displacementMapUv:Ht&&m(S.displacementMap.channel),emissiveMapUv:k&&m(S.emissiveMap.channel),metalnessMapUv:Qe&&m(S.metalnessMap.channel),roughnessMapUv:qe&&m(S.roughnessMap.channel),anisotropyMapUv:Z&&m(S.anisotropyMap.channel),clearcoatMapUv:te&&m(S.clearcoatMap.channel),clearcoatNormalMapUv:pe&&m(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ie&&m(S.clearcoatRoughnessMap.channel),iridescenceMapUv:K&&m(S.iridescenceMap.channel),iridescenceThicknessMapUv:J&&m(S.iridescenceThicknessMap.channel),sheenColorMapUv:Se&&m(S.sheenColorMap.channel),sheenRoughnessMapUv:Ae&&m(S.sheenRoughnessMap.channel),specularMapUv:me&&m(S.specularMap.channel),specularColorMapUv:ce&&m(S.specularColorMap.channel),specularIntensityMapUv:xe&&m(S.specularIntensityMap.channel),transmissionMapUv:Xe&&m(S.transmissionMap.channel),thicknessMapUv:Ke&&m(S.thicknessMap.channel),alphaMapUv:le&&m(S.alphaMap.channel),vertexTangents:!!N.attributes.tangent&&(ct||pt),vertexNormals:!!N.attributes.normal,vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!N.attributes.uv&&(it||le),fog:!!H,useFog:S.fog===!0,fogExp2:!!H&&H.isFogExp2,flatShading:S.wireframe===!1&&(S.flatShading===!0||N.attributes.normal===void 0&&ct===!1&&(S.isMeshLambertMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isMeshPhysicalMaterial)),sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:Pe,skinning:L.isSkinnedMesh===!0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:ue,morphTextureStride:ve,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numLightProbeGrids:O.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:S.dithering,shadowMapEnabled:n.shadowMap.enabled&&b.length>0,shadowMapType:n.shadowMap.type,toneMapping:ne,decodeVideoTexture:it&&S.map.isVideoTexture===!0&&mt.getTransfer(S.map.colorSpace)===Et,decodeVideoTextureEmissive:k&&S.emissiveMap.isVideoTexture===!0&&mt.getTransfer(S.emissiveMap.colorSpace)===Et,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Ir,flipSided:S.side===yi,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:de&&S.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(de&&S.extensions.multiDraw===!0||Ie)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return oe.vertexUv1s=l.has(1),oe.vertexUv2s=l.has(2),oe.vertexUv3s=l.has(3),l.clear(),oe}function _(S){const C=[];if(S.shaderID?C.push(S.shaderID):(C.push(S.customVertexShaderID),C.push(S.customFragmentShaderID)),S.defines!==void 0)for(const b in S.defines)C.push(b),C.push(S.defines[b]);return S.isRawShaderMaterial===!1&&(p(C,S),g(C,S),C.push(n.outputColorSpace)),C.push(S.customProgramCacheKey),C.join()}function p(S,C){S.push(C.precision),S.push(C.outputColorSpace),S.push(C.envMapMode),S.push(C.envMapCubeUVHeight),S.push(C.mapUv),S.push(C.alphaMapUv),S.push(C.lightMapUv),S.push(C.aoMapUv),S.push(C.bumpMapUv),S.push(C.normalMapUv),S.push(C.displacementMapUv),S.push(C.emissiveMapUv),S.push(C.metalnessMapUv),S.push(C.roughnessMapUv),S.push(C.anisotropyMapUv),S.push(C.clearcoatMapUv),S.push(C.clearcoatNormalMapUv),S.push(C.clearcoatRoughnessMapUv),S.push(C.iridescenceMapUv),S.push(C.iridescenceThicknessMapUv),S.push(C.sheenColorMapUv),S.push(C.sheenRoughnessMapUv),S.push(C.specularMapUv),S.push(C.specularColorMapUv),S.push(C.specularIntensityMapUv),S.push(C.transmissionMapUv),S.push(C.thicknessMapUv),S.push(C.combine),S.push(C.fogExp2),S.push(C.sizeAttenuation),S.push(C.morphTargetsCount),S.push(C.morphAttributeCount),S.push(C.numDirLights),S.push(C.numPointLights),S.push(C.numSpotLights),S.push(C.numSpotLightMaps),S.push(C.numHemiLights),S.push(C.numRectAreaLights),S.push(C.numDirLightShadows),S.push(C.numPointLightShadows),S.push(C.numSpotLightShadows),S.push(C.numSpotLightShadowsWithMaps),S.push(C.numLightProbes),S.push(C.shadowMapType),S.push(C.toneMapping),S.push(C.numClippingPlanes),S.push(C.numClipIntersection),S.push(C.depthPacking)}function g(S,C){o.disableAll(),C.instancing&&o.enable(0),C.instancingColor&&o.enable(1),C.instancingMorph&&o.enable(2),C.matcap&&o.enable(3),C.envMap&&o.enable(4),C.normalMapObjectSpace&&o.enable(5),C.normalMapTangentSpace&&o.enable(6),C.clearcoat&&o.enable(7),C.iridescence&&o.enable(8),C.alphaTest&&o.enable(9),C.vertexColors&&o.enable(10),C.vertexAlphas&&o.enable(11),C.vertexUv1s&&o.enable(12),C.vertexUv2s&&o.enable(13),C.vertexUv3s&&o.enable(14),C.vertexTangents&&o.enable(15),C.anisotropy&&o.enable(16),C.alphaHash&&o.enable(17),C.batching&&o.enable(18),C.dispersion&&o.enable(19),C.batchingColor&&o.enable(20),C.gradientMap&&o.enable(21),C.packedNormalMap&&o.enable(22),C.vertexNormals&&o.enable(23),S.push(o.mask),o.disableAll(),C.fog&&o.enable(0),C.useFog&&o.enable(1),C.flatShading&&o.enable(2),C.logarithmicDepthBuffer&&o.enable(3),C.reversedDepthBuffer&&o.enable(4),C.skinning&&o.enable(5),C.morphTargets&&o.enable(6),C.morphNormals&&o.enable(7),C.morphColors&&o.enable(8),C.premultipliedAlpha&&o.enable(9),C.shadowMapEnabled&&o.enable(10),C.doubleSided&&o.enable(11),C.flipSided&&o.enable(12),C.useDepthPacking&&o.enable(13),C.dithering&&o.enable(14),C.transmission&&o.enable(15),C.sheen&&o.enable(16),C.opaque&&o.enable(17),C.pointsUvs&&o.enable(18),C.decodeVideoTexture&&o.enable(19),C.decodeVideoTextureEmissive&&o.enable(20),C.alphaToCoverage&&o.enable(21),C.numLightProbeGrids>0&&o.enable(22),S.push(o.mask)}function x(S){const C=h[S.type];let b;if(C){const D=Dr[C];b=Sb.clone(D.uniforms)}else b=S.uniforms;return b}function y(S,C){let b=c.get(C);return b!==void 0?++b.usedTimes:(b=new ZD(n,C,S,r),u.push(b),c.set(C,b)),b}function T(S){if(--S.usedTimes===0){const C=u.indexOf(S);u[C]=u[u.length-1],u.pop(),c.delete(S.cacheKey),S.destroy()}}function E(S){a.remove(S)}function w(){a.dispose()}return{getParameters:v,getProgramCacheKey:_,getUniforms:x,acquireProgram:y,releaseProgram:T,releaseShaderCache:E,programs:u,dispose:w}}function iL(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function r(o,a,l){n.get(o)[a]=l}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function rL(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function SS(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function yS(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(f){let h=0;return f.isInstancedMesh&&(h+=2),f.isSkinnedMesh&&(h+=1),h}function a(f,h,m,v,_,p){let g=n[e];return g===void 0?(g={id:f.id,object:f,geometry:h,material:m,materialVariant:o(f),groupOrder:v,renderOrder:f.renderOrder,z:_,group:p},n[e]=g):(g.id=f.id,g.object=f,g.geometry=h,g.material=m,g.materialVariant=o(f),g.groupOrder=v,g.renderOrder=f.renderOrder,g.z=_,g.group=p),e++,g}function l(f,h,m,v,_,p){const g=a(f,h,m,v,_,p);m.transmission>0?i.push(g):m.transparent===!0?r.push(g):t.push(g)}function u(f,h,m,v,_,p){const g=a(f,h,m,v,_,p);m.transmission>0?i.unshift(g):m.transparent===!0?r.unshift(g):t.unshift(g)}function c(f,h){t.length>1&&t.sort(f||rL),i.length>1&&i.sort(h||SS),r.length>1&&r.sort(h||SS)}function d(){for(let f=e,h=n.length;f<h;f++){const m=n[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:l,unshift:u,finish:d,sort:c}}function sL(){let n=new WeakMap;function e(i,r){const s=n.get(i);let o;return s===void 0?(o=new yS,n.set(i,[o])):r>=s.length?(o=new yS,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function oL(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new Y,color:new ht};break;case"SpotLight":t={position:new Y,direction:new Y,color:new ht,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new Y,color:new ht,distance:0,decay:0};break;case"HemisphereLight":t={direction:new Y,skyColor:new ht,groundColor:new ht};break;case"RectAreaLight":t={color:new ht,position:new Y,halfWidth:new Y,halfHeight:new Y};break}return n[e.id]=t,t}}}function aL(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let lL=0;function uL(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function cL(n){const e=new oL,t=aL(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)i.probe.push(new Y);const r=new Y,s=new Jt,o=new Jt;function a(u){let c=0,d=0,f=0;for(let C=0;C<9;C++)i.probe[C].set(0,0,0);let h=0,m=0,v=0,_=0,p=0,g=0,x=0,y=0,T=0,E=0,w=0;u.sort(uL);for(let C=0,b=u.length;C<b;C++){const D=u[C],L=D.color,O=D.intensity,H=D.distance;let N=null;if(D.shadow&&D.shadow.map&&(D.shadow.map.texture.format===sa?N=D.shadow.map.texture:N=D.shadow.map.depthTexture||D.shadow.map.texture),D.isAmbientLight)c+=L.r*O,d+=L.g*O,f+=L.b*O;else if(D.isLightProbe){for(let B=0;B<9;B++)i.probe[B].addScaledVector(D.sh.coefficients[B],O);w++}else if(D.isDirectionalLight){const B=e.get(D);if(B.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const I=D.shadow,F=t.get(D);F.shadowIntensity=I.intensity,F.shadowBias=I.bias,F.shadowNormalBias=I.normalBias,F.shadowRadius=I.radius,F.shadowMapSize=I.mapSize,i.directionalShadow[h]=F,i.directionalShadowMap[h]=N,i.directionalShadowMatrix[h]=D.shadow.matrix,g++}i.directional[h]=B,h++}else if(D.isSpotLight){const B=e.get(D);B.position.setFromMatrixPosition(D.matrixWorld),B.color.copy(L).multiplyScalar(O),B.distance=H,B.coneCos=Math.cos(D.angle),B.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),B.decay=D.decay,i.spot[v]=B;const I=D.shadow;if(D.map&&(i.spotLightMap[T]=D.map,T++,I.updateMatrices(D),D.castShadow&&E++),i.spotLightMatrix[v]=I.matrix,D.castShadow){const F=t.get(D);F.shadowIntensity=I.intensity,F.shadowBias=I.bias,F.shadowNormalBias=I.normalBias,F.shadowRadius=I.radius,F.shadowMapSize=I.mapSize,i.spotShadow[v]=F,i.spotShadowMap[v]=N,y++}v++}else if(D.isRectAreaLight){const B=e.get(D);B.color.copy(L).multiplyScalar(O),B.halfWidth.set(D.width*.5,0,0),B.halfHeight.set(0,D.height*.5,0),i.rectArea[_]=B,_++}else if(D.isPointLight){const B=e.get(D);if(B.color.copy(D.color).multiplyScalar(D.intensity),B.distance=D.distance,B.decay=D.decay,D.castShadow){const I=D.shadow,F=t.get(D);F.shadowIntensity=I.intensity,F.shadowBias=I.bias,F.shadowNormalBias=I.normalBias,F.shadowRadius=I.radius,F.shadowMapSize=I.mapSize,F.shadowCameraNear=I.camera.near,F.shadowCameraFar=I.camera.far,i.pointShadow[m]=F,i.pointShadowMap[m]=N,i.pointShadowMatrix[m]=D.shadow.matrix,x++}i.point[m]=B,m++}else if(D.isHemisphereLight){const B=e.get(D);B.skyColor.copy(D.color).multiplyScalar(O),B.groundColor.copy(D.groundColor).multiplyScalar(O),i.hemi[p]=B,p++}}_>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Te.LTC_FLOAT_1,i.rectAreaLTC2=Te.LTC_FLOAT_2):(i.rectAreaLTC1=Te.LTC_HALF_1,i.rectAreaLTC2=Te.LTC_HALF_2)),i.ambient[0]=c,i.ambient[1]=d,i.ambient[2]=f;const S=i.hash;(S.directionalLength!==h||S.pointLength!==m||S.spotLength!==v||S.rectAreaLength!==_||S.hemiLength!==p||S.numDirectionalShadows!==g||S.numPointShadows!==x||S.numSpotShadows!==y||S.numSpotMaps!==T||S.numLightProbes!==w)&&(i.directional.length=h,i.spot.length=v,i.rectArea.length=_,i.point.length=m,i.hemi.length=p,i.directionalShadow.length=g,i.directionalShadowMap.length=g,i.pointShadow.length=x,i.pointShadowMap.length=x,i.spotShadow.length=y,i.spotShadowMap.length=y,i.directionalShadowMatrix.length=g,i.pointShadowMatrix.length=x,i.spotLightMatrix.length=y+T-E,i.spotLightMap.length=T,i.numSpotLightShadowsWithMaps=E,i.numLightProbes=w,S.directionalLength=h,S.pointLength=m,S.spotLength=v,S.rectAreaLength=_,S.hemiLength=p,S.numDirectionalShadows=g,S.numPointShadows=x,S.numSpotShadows=y,S.numSpotMaps=T,S.numLightProbes=w,i.version=lL++)}function l(u,c){let d=0,f=0,h=0,m=0,v=0;const _=c.matrixWorldInverse;for(let p=0,g=u.length;p<g;p++){const x=u[p];if(x.isDirectionalLight){const y=i.directional[d];y.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(_),d++}else if(x.isSpotLight){const y=i.spot[h];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(_),y.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(_),h++}else if(x.isRectAreaLight){const y=i.rectArea[m];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(_),o.identity(),s.copy(x.matrixWorld),s.premultiply(_),o.extractRotation(s),y.halfWidth.set(x.width*.5,0,0),y.halfHeight.set(0,x.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),m++}else if(x.isPointLight){const y=i.point[f];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(_),f++}else if(x.isHemisphereLight){const y=i.hemi[v];y.direction.setFromMatrixPosition(x.matrixWorld),y.direction.transformDirection(_),v++}}}return{setup:a,setupView:l,state:i}}function MS(n){const e=new cL(n),t=[],i=[],r=[];function s(f){d.camera=f,t.length=0,i.length=0,r.length=0}function o(f){t.push(f)}function a(f){i.push(f)}function l(f){r.push(f)}function u(){e.setup(t)}function c(f){e.setupView(t,f)}const d={lightsArray:t,shadowsArray:i,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:d,setupLights:u,setupLightsView:c,pushLight:o,pushShadow:a,pushLightProbeGrid:l}}function fL(n){let e=new WeakMap;function t(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new MS(n),e.set(r,[a])):s>=o.length?(a=new MS(n),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:t,dispose:i}}const dL=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,hL=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,pL=[new Y(1,0,0),new Y(-1,0,0),new Y(0,1,0),new Y(0,-1,0),new Y(0,0,1),new Y(0,0,-1)],mL=[new Y(0,-1,0),new Y(0,-1,0),new Y(0,0,1),new Y(0,0,-1),new Y(0,-1,0),new Y(0,-1,0)],ES=new Jt,nu=new Y,Lp=new Y;function gL(n,e,t){let i=new T0;const r=new ot,s=new ot,o=new Zt,a=new Ab,l=new Cb,u={},c=t.maxTextureSize,d={[po]:yi,[yi]:po,[Ir]:Ir},f=new $r({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ot},radius:{value:4}},vertexShader:dL,fragmentShader:hL}),h=f.clone();h.defines.HORIZONTAL_PASS=1;const m=new Mr;m.setAttribute("position",new Sr(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new qr(m,f),_=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Yf;let p=this.type;this.render=function(E,w,S){if(_.enabled===!1||_.autoUpdate===!1&&_.needsUpdate===!1||E.length===0)return;this.type===fR&&(Ye("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Yf);const C=n.getRenderTarget(),b=n.getActiveCubeFace(),D=n.getActiveMipmapLevel(),L=n.state;L.setBlending(hs),L.buffers.depth.getReversed()===!0?L.buffers.color.setClear(0,0,0,0):L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);const O=p!==this.type;O&&w.traverse(function(H){H.material&&(Array.isArray(H.material)?H.material.forEach(N=>N.needsUpdate=!0):H.material.needsUpdate=!0)});for(let H=0,N=E.length;H<N;H++){const B=E[H],I=B.shadow;if(I===void 0){Ye("WebGLShadowMap:",B,"has no shadow.");continue}if(I.autoUpdate===!1&&I.needsUpdate===!1)continue;r.copy(I.mapSize);const F=I.getFrameExtents();r.multiply(F),s.copy(I.mapSize),(r.x>c||r.y>c)&&(r.x>c&&(s.x=Math.floor(c/F.x),r.x=s.x*F.x,I.mapSize.x=s.x),r.y>c&&(s.y=Math.floor(c/F.y),r.y=s.y*F.y,I.mapSize.y=s.y));const W=n.state.buffers.depth.getReversed();if(I.camera._reversedDepth=W,I.map===null||O===!0){if(I.map!==null&&(I.map.depthTexture!==null&&(I.map.depthTexture.dispose(),I.map.depthTexture=null),I.map.dispose()),this.type===pu){if(B.isPointLight){Ye("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}I.map=new Wr(r.x,r.y,{format:sa,type:ys,minFilter:jn,magFilter:jn,generateMipmaps:!1}),I.map.texture.name=B.name+".shadowMap",I.map.depthTexture=new bl(r.x,r.y,kr),I.map.depthTexture.name=B.name+".shadowMapDepth",I.map.depthTexture.format=Ms,I.map.depthTexture.compareFunction=null,I.map.depthTexture.minFilter=Dn,I.map.depthTexture.magFilter=Dn}else B.isPointLight?(I.map=new F1(r.x),I.map.depthTexture=new vb(r.x,jr)):(I.map=new Wr(r.x,r.y),I.map.depthTexture=new bl(r.x,r.y,jr)),I.map.depthTexture.name=B.name+".shadowMap",I.map.depthTexture.format=Ms,this.type===Yf?(I.map.depthTexture.compareFunction=W?y0:S0,I.map.depthTexture.minFilter=jn,I.map.depthTexture.magFilter=jn):(I.map.depthTexture.compareFunction=null,I.map.depthTexture.minFilter=Dn,I.map.depthTexture.magFilter=Dn);I.camera.updateProjectionMatrix()}const P=I.map.isWebGLCubeRenderTarget?6:1;for(let ee=0;ee<P;ee++){if(I.map.isWebGLCubeRenderTarget)n.setRenderTarget(I.map,ee),n.clear();else{ee===0&&(n.setRenderTarget(I.map),n.clear());const ue=I.getViewport(ee);o.set(s.x*ue.x,s.y*ue.y,s.x*ue.z,s.y*ue.w),L.viewport(o)}if(B.isPointLight){const ue=I.camera,ve=I.matrix,Le=B.distance||ue.far;Le!==ue.far&&(ue.far=Le,ue.updateProjectionMatrix()),nu.setFromMatrixPosition(B.matrixWorld),ue.position.copy(nu),Lp.copy(ue.position),Lp.add(pL[ee]),ue.up.copy(mL[ee]),ue.lookAt(Lp),ue.updateMatrixWorld(),ve.makeTranslation(-nu.x,-nu.y,-nu.z),ES.multiplyMatrices(ue.projectionMatrix,ue.matrixWorldInverse),I._frustum.setFromProjectionMatrix(ES,ue.coordinateSystem,ue.reversedDepth)}else I.updateMatrices(B);i=I.getFrustum(),y(w,S,I.camera,B,this.type)}I.isPointLightShadow!==!0&&this.type===pu&&g(I,S),I.needsUpdate=!1}p=this.type,_.needsUpdate=!1,n.setRenderTarget(C,b,D)};function g(E,w){const S=e.update(v);f.defines.VSM_SAMPLES!==E.blurSamples&&(f.defines.VSM_SAMPLES=E.blurSamples,h.defines.VSM_SAMPLES=E.blurSamples,f.needsUpdate=!0,h.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new Wr(r.x,r.y,{format:sa,type:ys})),f.uniforms.shadow_pass.value=E.map.depthTexture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,n.setRenderTarget(E.mapPass),n.clear(),n.renderBufferDirect(w,null,S,f,v,null),h.uniforms.shadow_pass.value=E.mapPass.texture,h.uniforms.resolution.value=E.mapSize,h.uniforms.radius.value=E.radius,n.setRenderTarget(E.map),n.clear(),n.renderBufferDirect(w,null,S,h,v,null)}function x(E,w,S,C){let b=null;const D=S.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(D!==void 0)b=D;else if(b=S.isPointLight===!0?l:a,n.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0||w.alphaToCoverage===!0){const L=b.uuid,O=w.uuid;let H=u[L];H===void 0&&(H={},u[L]=H);let N=H[O];N===void 0&&(N=b.clone(),H[O]=N,w.addEventListener("dispose",T)),b=N}if(b.visible=w.visible,b.wireframe=w.wireframe,C===pu?b.side=w.shadowSide!==null?w.shadowSide:w.side:b.side=w.shadowSide!==null?w.shadowSide:d[w.side],b.alphaMap=w.alphaMap,b.alphaTest=w.alphaToCoverage===!0?.5:w.alphaTest,b.map=w.map,b.clipShadows=w.clipShadows,b.clippingPlanes=w.clippingPlanes,b.clipIntersection=w.clipIntersection,b.displacementMap=w.displacementMap,b.displacementScale=w.displacementScale,b.displacementBias=w.displacementBias,b.wireframeLinewidth=w.wireframeLinewidth,b.linewidth=w.linewidth,S.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const L=n.properties.get(b);L.light=S}return b}function y(E,w,S,C,b){if(E.visible===!1)return;if(E.layers.test(w.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&b===pu)&&(!E.frustumCulled||i.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(S.matrixWorldInverse,E.matrixWorld);const O=e.update(E),H=E.material;if(Array.isArray(H)){const N=O.groups;for(let B=0,I=N.length;B<I;B++){const F=N[B],W=H[F.materialIndex];if(W&&W.visible){const P=x(E,W,C,b);E.onBeforeShadow(n,E,w,S,O,P,F),n.renderBufferDirect(S,null,O,P,E,F),E.onAfterShadow(n,E,w,S,O,P,F)}}}else if(H.visible){const N=x(E,H,C,b);E.onBeforeShadow(n,E,w,S,O,N,null),n.renderBufferDirect(S,null,O,N,E,null),E.onAfterShadow(n,E,w,S,O,N,null)}}const L=E.children;for(let O=0,H=L.length;O<H;O++)y(L[O],w,S,C,b)}function T(E){E.target.removeEventListener("dispose",T);for(const S in u){const C=u[S],b=E.target.uuid;b in C&&(C[b].dispose(),delete C[b])}}}function _L(n,e){function t(){let U=!1;const le=new Zt;let Q=null;const Me=new Zt(0,0,0,0);return{setMask:function(de){Q!==de&&!U&&(n.colorMask(de,de,de,de),Q=de)},setLocked:function(de){U=de},setClear:function(de,ne,oe,he,ze){ze===!0&&(de*=he,ne*=he,oe*=he),le.set(de,ne,oe,he),Me.equals(le)===!1&&(n.clearColor(de,ne,oe,he),Me.copy(le))},reset:function(){U=!1,Q=null,Me.set(-1,0,0,0)}}}function i(){let U=!1,le=!1,Q=null,Me=null,de=null;return{setReversed:function(ne){if(le!==ne){const oe=e.get("EXT_clip_control");ne?oe.clipControlEXT(oe.LOWER_LEFT_EXT,oe.ZERO_TO_ONE_EXT):oe.clipControlEXT(oe.LOWER_LEFT_EXT,oe.NEGATIVE_ONE_TO_ONE_EXT),le=ne;const he=de;de=null,this.setClear(he)}},getReversed:function(){return le},setTest:function(ne){ne?ae(n.DEPTH_TEST):Pe(n.DEPTH_TEST)},setMask:function(ne){Q!==ne&&!U&&(n.depthMask(ne),Q=ne)},setFunc:function(ne){if(le&&(ne=WR[ne]),Me!==ne){switch(ne){case eg:n.depthFunc(n.NEVER);break;case tg:n.depthFunc(n.ALWAYS);break;case ng:n.depthFunc(n.LESS);break;case Cl:n.depthFunc(n.LEQUAL);break;case ig:n.depthFunc(n.EQUAL);break;case rg:n.depthFunc(n.GEQUAL);break;case sg:n.depthFunc(n.GREATER);break;case og:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Me=ne}},setLocked:function(ne){U=ne},setClear:function(ne){de!==ne&&(de=ne,le&&(ne=1-ne),n.clearDepth(ne))},reset:function(){U=!1,Q=null,Me=null,de=null,le=!1}}}function r(){let U=!1,le=null,Q=null,Me=null,de=null,ne=null,oe=null,he=null,ze=null;return{setTest:function(re){U||(re?ae(n.STENCIL_TEST):Pe(n.STENCIL_TEST))},setMask:function(re){le!==re&&!U&&(n.stencilMask(re),le=re)},setFunc:function(re,Ve,Ue){(Q!==re||Me!==Ve||de!==Ue)&&(n.stencilFunc(re,Ve,Ue),Q=re,Me=Ve,de=Ue)},setOp:function(re,Ve,Ue){(ne!==re||oe!==Ve||he!==Ue)&&(n.stencilOp(re,Ve,Ue),ne=re,oe=Ve,he=Ue)},setLocked:function(re){U=re},setClear:function(re){ze!==re&&(n.clearStencil(re),ze=re)},reset:function(){U=!1,le=null,Q=null,Me=null,de=null,ne=null,oe=null,he=null,ze=null}}}const s=new t,o=new i,a=new r,l=new WeakMap,u=new WeakMap;let c={},d={},f={},h=new WeakMap,m=[],v=null,_=!1,p=null,g=null,x=null,y=null,T=null,E=null,w=null,S=new ht(0,0,0),C=0,b=!1,D=null,L=null,O=null,H=null,N=null;const B=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let I=!1,F=0;const W=n.getParameter(n.VERSION);W.indexOf("WebGL")!==-1?(F=parseFloat(/^WebGL (\d)/.exec(W)[1]),I=F>=1):W.indexOf("OpenGL ES")!==-1&&(F=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),I=F>=2);let P=null,ee={};const ue=n.getParameter(n.SCISSOR_BOX),ve=n.getParameter(n.VIEWPORT),Le=new Zt().fromArray(ue),Ce=new Zt().fromArray(ve);function $(U,le,Q,Me){const de=new Uint8Array(4),ne=n.createTexture();n.bindTexture(U,ne),n.texParameteri(U,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(U,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let oe=0;oe<Q;oe++)U===n.TEXTURE_3D||U===n.TEXTURE_2D_ARRAY?n.texImage3D(le,0,n.RGBA,1,1,Me,0,n.RGBA,n.UNSIGNED_BYTE,de):n.texImage2D(le+oe,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,de);return ne}const se={};se[n.TEXTURE_2D]=$(n.TEXTURE_2D,n.TEXTURE_2D,1),se[n.TEXTURE_CUBE_MAP]=$(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),se[n.TEXTURE_2D_ARRAY]=$(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),se[n.TEXTURE_3D]=$(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ae(n.DEPTH_TEST),o.setFunc(Cl),j(!1),ct(Ax),ae(n.CULL_FACE),tt(hs);function ae(U){c[U]!==!0&&(n.enable(U),c[U]=!0)}function Pe(U){c[U]!==!1&&(n.disable(U),c[U]=!1)}function He(U,le){return f[U]!==le?(n.bindFramebuffer(U,le),f[U]=le,U===n.DRAW_FRAMEBUFFER&&(f[n.FRAMEBUFFER]=le),U===n.FRAMEBUFFER&&(f[n.DRAW_FRAMEBUFFER]=le),!0):!1}function Ie(U,le){let Q=m,Me=!1;if(U){Q=h.get(le),Q===void 0&&(Q=[],h.set(le,Q));const de=U.textures;if(Q.length!==de.length||Q[0]!==n.COLOR_ATTACHMENT0){for(let ne=0,oe=de.length;ne<oe;ne++)Q[ne]=n.COLOR_ATTACHMENT0+ne;Q.length=de.length,Me=!0}}else Q[0]!==n.BACK&&(Q[0]=n.BACK,Me=!0);Me&&n.drawBuffers(Q)}function it(U){return v!==U?(n.useProgram(U),v=U,!0):!1}const Re={[Lo]:n.FUNC_ADD,[hR]:n.FUNC_SUBTRACT,[pR]:n.FUNC_REVERSE_SUBTRACT};Re[mR]=n.MIN,Re[gR]=n.MAX;const We={[_R]:n.ZERO,[vR]:n.ONE,[xR]:n.SRC_COLOR,[Qm]:n.SRC_ALPHA,[wR]:n.SRC_ALPHA_SATURATE,[ER]:n.DST_COLOR,[yR]:n.DST_ALPHA,[SR]:n.ONE_MINUS_SRC_COLOR,[Jm]:n.ONE_MINUS_SRC_ALPHA,[TR]:n.ONE_MINUS_DST_COLOR,[MR]:n.ONE_MINUS_DST_ALPHA,[AR]:n.CONSTANT_COLOR,[CR]:n.ONE_MINUS_CONSTANT_COLOR,[RR]:n.CONSTANT_ALPHA,[bR]:n.ONE_MINUS_CONSTANT_ALPHA};function tt(U,le,Q,Me,de,ne,oe,he,ze,re){if(U===hs){_===!0&&(Pe(n.BLEND),_=!1);return}if(_===!1&&(ae(n.BLEND),_=!0),U!==dR){if(U!==p||re!==b){if((g!==Lo||T!==Lo)&&(n.blendEquation(n.FUNC_ADD),g=Lo,T=Lo),re)switch(U){case dl:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Zm:n.blendFunc(n.ONE,n.ONE);break;case Cx:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Rx:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:_t("WebGLState: Invalid blending: ",U);break}else switch(U){case dl:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Zm:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Cx:_t("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Rx:_t("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:_t("WebGLState: Invalid blending: ",U);break}x=null,y=null,E=null,w=null,S.set(0,0,0),C=0,p=U,b=re}return}de=de||le,ne=ne||Q,oe=oe||Me,(le!==g||de!==T)&&(n.blendEquationSeparate(Re[le],Re[de]),g=le,T=de),(Q!==x||Me!==y||ne!==E||oe!==w)&&(n.blendFuncSeparate(We[Q],We[Me],We[ne],We[oe]),x=Q,y=Me,E=ne,w=oe),(he.equals(S)===!1||ze!==C)&&(n.blendColor(he.r,he.g,he.b,ze),S.copy(he),C=ze),p=U,b=!1}function Ge(U,le){U.side===Ir?Pe(n.CULL_FACE):ae(n.CULL_FACE);let Q=U.side===yi;le&&(Q=!Q),j(Q),U.blending===dl&&U.transparent===!1?tt(hs):tt(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),o.setFunc(U.depthFunc),o.setTest(U.depthTest),o.setMask(U.depthWrite),s.setMask(U.colorWrite);const Me=U.stencilWrite;a.setTest(Me),Me&&(a.setMask(U.stencilWriteMask),a.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),a.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),k(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?ae(n.SAMPLE_ALPHA_TO_COVERAGE):Pe(n.SAMPLE_ALPHA_TO_COVERAGE)}function j(U){D!==U&&(U?n.frontFace(n.CW):n.frontFace(n.CCW),D=U)}function ct(U){U!==uR?(ae(n.CULL_FACE),U!==L&&(U===Ax?n.cullFace(n.BACK):U===cR?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Pe(n.CULL_FACE),L=U}function Ht(U){U!==O&&(I&&n.lineWidth(U),O=U)}function k(U,le,Q){U?(ae(n.POLYGON_OFFSET_FILL),(H!==le||N!==Q)&&(H=le,N=Q,o.getReversed()&&(le=-le),n.polygonOffset(le,Q))):Pe(n.POLYGON_OFFSET_FILL)}function Qe(U){U?ae(n.SCISSOR_TEST):Pe(n.SCISSOR_TEST)}function qe(U){U===void 0&&(U=n.TEXTURE0+B-1),P!==U&&(n.activeTexture(U),P=U)}function pt(U,le,Q){Q===void 0&&(P===null?Q=n.TEXTURE0+B-1:Q=P);let Me=ee[Q];Me===void 0&&(Me={type:void 0,texture:void 0},ee[Q]=Me),(Me.type!==U||Me.texture!==le)&&(P!==Q&&(n.activeTexture(Q),P=Q),n.bindTexture(U,le||se[U]),Me.type=U,Me.texture=le)}function _e(){const U=ee[P];U!==void 0&&U.type!==void 0&&(n.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function et(){try{n.compressedTexImage2D(...arguments)}catch(U){_t("WebGLState:",U)}}function R(){try{n.compressedTexImage3D(...arguments)}catch(U){_t("WebGLState:",U)}}function M(){try{n.texSubImage2D(...arguments)}catch(U){_t("WebGLState:",U)}}function V(){try{n.texSubImage3D(...arguments)}catch(U){_t("WebGLState:",U)}}function Z(){try{n.compressedTexSubImage2D(...arguments)}catch(U){_t("WebGLState:",U)}}function te(){try{n.compressedTexSubImage3D(...arguments)}catch(U){_t("WebGLState:",U)}}function pe(){try{n.texStorage2D(...arguments)}catch(U){_t("WebGLState:",U)}}function ie(){try{n.texStorage3D(...arguments)}catch(U){_t("WebGLState:",U)}}function K(){try{n.texImage2D(...arguments)}catch(U){_t("WebGLState:",U)}}function J(){try{n.texImage3D(...arguments)}catch(U){_t("WebGLState:",U)}}function Se(U){return d[U]!==void 0?d[U]:n.getParameter(U)}function Ae(U,le){d[U]!==le&&(n.pixelStorei(U,le),d[U]=le)}function me(U){Le.equals(U)===!1&&(n.scissor(U.x,U.y,U.z,U.w),Le.copy(U))}function ce(U){Ce.equals(U)===!1&&(n.viewport(U.x,U.y,U.z,U.w),Ce.copy(U))}function xe(U,le){let Q=u.get(le);Q===void 0&&(Q=new WeakMap,u.set(le,Q));let Me=Q.get(U);Me===void 0&&(Me=n.getUniformBlockIndex(le,U.name),Q.set(U,Me))}function Xe(U,le){const Me=u.get(le).get(U);l.get(le)!==Me&&(n.uniformBlockBinding(le,Me,U.__bindingPointIndex),l.set(le,Me))}function Ke(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),c={},d={},P=null,ee={},f={},h=new WeakMap,m=[],v=null,_=!1,p=null,g=null,x=null,y=null,T=null,E=null,w=null,S=new ht(0,0,0),C=0,b=!1,D=null,L=null,O=null,H=null,N=null,Le.set(0,0,n.canvas.width,n.canvas.height),Ce.set(0,0,n.canvas.width,n.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:ae,disable:Pe,bindFramebuffer:He,drawBuffers:Ie,useProgram:it,setBlending:tt,setMaterial:Ge,setFlipSided:j,setCullFace:ct,setLineWidth:Ht,setPolygonOffset:k,setScissorTest:Qe,activeTexture:qe,bindTexture:pt,unbindTexture:_e,compressedTexImage2D:et,compressedTexImage3D:R,texImage2D:K,texImage3D:J,pixelStorei:Ae,getParameter:Se,updateUBOMapping:xe,uniformBlockBinding:Xe,texStorage2D:pe,texStorage3D:ie,texSubImage2D:M,texSubImage3D:V,compressedTexSubImage2D:Z,compressedTexSubImage3D:te,scissor:me,viewport:ce,reset:Ke}}function vL(n,e,t,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new ot,c=new WeakMap,d=new Set;let f;const h=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(R,M){return m?new OffscreenCanvas(R,M):kd("canvas")}function _(R,M,V){let Z=1;const te=et(R);if((te.width>V||te.height>V)&&(Z=V/Math.max(te.width,te.height)),Z<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const pe=Math.floor(Z*te.width),ie=Math.floor(Z*te.height);f===void 0&&(f=v(pe,ie));const K=M?v(pe,ie):f;return K.width=pe,K.height=ie,K.getContext("2d").drawImage(R,0,0,pe,ie),Ye("WebGLRenderer: Texture has been resized from ("+te.width+"x"+te.height+") to ("+pe+"x"+ie+")."),K}else return"data"in R&&Ye("WebGLRenderer: Image in DataTexture is too big ("+te.width+"x"+te.height+")."),R;return R}function p(R){return R.generateMipmaps}function g(R){n.generateMipmap(R)}function x(R){return R.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?n.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function y(R,M,V,Z,te,pe=!1){if(R!==null){if(n[R]!==void 0)return n[R];Ye("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let ie;Z&&(ie=e.get("EXT_texture_norm16"),ie||Ye("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let K=M;if(M===n.RED&&(V===n.FLOAT&&(K=n.R32F),V===n.HALF_FLOAT&&(K=n.R16F),V===n.UNSIGNED_BYTE&&(K=n.R8),V===n.UNSIGNED_SHORT&&ie&&(K=ie.R16_EXT),V===n.SHORT&&ie&&(K=ie.R16_SNORM_EXT)),M===n.RED_INTEGER&&(V===n.UNSIGNED_BYTE&&(K=n.R8UI),V===n.UNSIGNED_SHORT&&(K=n.R16UI),V===n.UNSIGNED_INT&&(K=n.R32UI),V===n.BYTE&&(K=n.R8I),V===n.SHORT&&(K=n.R16I),V===n.INT&&(K=n.R32I)),M===n.RG&&(V===n.FLOAT&&(K=n.RG32F),V===n.HALF_FLOAT&&(K=n.RG16F),V===n.UNSIGNED_BYTE&&(K=n.RG8),V===n.UNSIGNED_SHORT&&ie&&(K=ie.RG16_EXT),V===n.SHORT&&ie&&(K=ie.RG16_SNORM_EXT)),M===n.RG_INTEGER&&(V===n.UNSIGNED_BYTE&&(K=n.RG8UI),V===n.UNSIGNED_SHORT&&(K=n.RG16UI),V===n.UNSIGNED_INT&&(K=n.RG32UI),V===n.BYTE&&(K=n.RG8I),V===n.SHORT&&(K=n.RG16I),V===n.INT&&(K=n.RG32I)),M===n.RGB_INTEGER&&(V===n.UNSIGNED_BYTE&&(K=n.RGB8UI),V===n.UNSIGNED_SHORT&&(K=n.RGB16UI),V===n.UNSIGNED_INT&&(K=n.RGB32UI),V===n.BYTE&&(K=n.RGB8I),V===n.SHORT&&(K=n.RGB16I),V===n.INT&&(K=n.RGB32I)),M===n.RGBA_INTEGER&&(V===n.UNSIGNED_BYTE&&(K=n.RGBA8UI),V===n.UNSIGNED_SHORT&&(K=n.RGBA16UI),V===n.UNSIGNED_INT&&(K=n.RGBA32UI),V===n.BYTE&&(K=n.RGBA8I),V===n.SHORT&&(K=n.RGBA16I),V===n.INT&&(K=n.RGBA32I)),M===n.RGB&&(V===n.UNSIGNED_SHORT&&ie&&(K=ie.RGB16_EXT),V===n.SHORT&&ie&&(K=ie.RGB16_SNORM_EXT),V===n.UNSIGNED_INT_5_9_9_9_REV&&(K=n.RGB9_E5),V===n.UNSIGNED_INT_10F_11F_11F_REV&&(K=n.R11F_G11F_B10F)),M===n.RGBA){const J=pe?Od:mt.getTransfer(te);V===n.FLOAT&&(K=n.RGBA32F),V===n.HALF_FLOAT&&(K=n.RGBA16F),V===n.UNSIGNED_BYTE&&(K=J===Et?n.SRGB8_ALPHA8:n.RGBA8),V===n.UNSIGNED_SHORT&&ie&&(K=ie.RGBA16_EXT),V===n.SHORT&&ie&&(K=ie.RGBA16_SNORM_EXT),V===n.UNSIGNED_SHORT_4_4_4_4&&(K=n.RGBA4),V===n.UNSIGNED_SHORT_5_5_5_1&&(K=n.RGB5_A1)}return(K===n.R16F||K===n.R32F||K===n.RG16F||K===n.RG32F||K===n.RGBA16F||K===n.RGBA32F)&&e.get("EXT_color_buffer_float"),K}function T(R,M){let V;return R?M===null||M===jr||M===dc?V=n.DEPTH24_STENCIL8:M===kr?V=n.DEPTH32F_STENCIL8:M===fc&&(V=n.DEPTH24_STENCIL8,Ye("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===jr||M===dc?V=n.DEPTH_COMPONENT24:M===kr?V=n.DEPTH_COMPONENT32F:M===fc&&(V=n.DEPTH_COMPONENT16),V}function E(R,M){return p(R)===!0||R.isFramebufferTexture&&R.minFilter!==Dn&&R.minFilter!==jn?Math.log2(Math.max(M.width,M.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?M.mipmaps.length:1}function w(R){const M=R.target;M.removeEventListener("dispose",w),C(M),M.isVideoTexture&&c.delete(M),M.isHTMLTexture&&d.delete(M)}function S(R){const M=R.target;M.removeEventListener("dispose",S),D(M)}function C(R){const M=i.get(R);if(M.__webglInit===void 0)return;const V=R.source,Z=h.get(V);if(Z){const te=Z[M.__cacheKey];te.usedTimes--,te.usedTimes===0&&b(R),Object.keys(Z).length===0&&h.delete(V)}i.remove(R)}function b(R){const M=i.get(R);n.deleteTexture(M.__webglTexture);const V=R.source,Z=h.get(V);delete Z[M.__cacheKey],o.memory.textures--}function D(R){const M=i.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),i.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(M.__webglFramebuffer[Z]))for(let te=0;te<M.__webglFramebuffer[Z].length;te++)n.deleteFramebuffer(M.__webglFramebuffer[Z][te]);else n.deleteFramebuffer(M.__webglFramebuffer[Z]);M.__webglDepthbuffer&&n.deleteRenderbuffer(M.__webglDepthbuffer[Z])}else{if(Array.isArray(M.__webglFramebuffer))for(let Z=0;Z<M.__webglFramebuffer.length;Z++)n.deleteFramebuffer(M.__webglFramebuffer[Z]);else n.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&n.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&n.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let Z=0;Z<M.__webglColorRenderbuffer.length;Z++)M.__webglColorRenderbuffer[Z]&&n.deleteRenderbuffer(M.__webglColorRenderbuffer[Z]);M.__webglDepthRenderbuffer&&n.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const V=R.textures;for(let Z=0,te=V.length;Z<te;Z++){const pe=i.get(V[Z]);pe.__webglTexture&&(n.deleteTexture(pe.__webglTexture),o.memory.textures--),i.remove(V[Z])}i.remove(R)}let L=0;function O(){L=0}function H(){return L}function N(R){L=R}function B(){const R=L;return R>=r.maxTextures&&Ye("WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+r.maxTextures),L+=1,R}function I(R){const M=[];return M.push(R.wrapS),M.push(R.wrapT),M.push(R.wrapR||0),M.push(R.magFilter),M.push(R.minFilter),M.push(R.anisotropy),M.push(R.internalFormat),M.push(R.format),M.push(R.type),M.push(R.generateMipmaps),M.push(R.premultiplyAlpha),M.push(R.flipY),M.push(R.unpackAlignment),M.push(R.colorSpace),M.join()}function F(R,M){const V=i.get(R);if(R.isVideoTexture&&pt(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&V.__version!==R.version){const Z=R.image;if(Z===null)Ye("WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)Ye("WebGLRenderer: Texture marked for update but image is incomplete");else{Pe(V,R,M);return}}else R.isExternalTexture&&(V.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,V.__webglTexture,n.TEXTURE0+M)}function W(R,M){const V=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&V.__version!==R.version){Pe(V,R,M);return}else R.isExternalTexture&&(V.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,V.__webglTexture,n.TEXTURE0+M)}function P(R,M){const V=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&V.__version!==R.version){Pe(V,R,M);return}t.bindTexture(n.TEXTURE_3D,V.__webglTexture,n.TEXTURE0+M)}function ee(R,M){const V=i.get(R);if(R.isCubeDepthTexture!==!0&&R.version>0&&V.__version!==R.version){He(V,R,M);return}t.bindTexture(n.TEXTURE_CUBE_MAP,V.__webglTexture,n.TEXTURE0+M)}const ue={[ag]:n.REPEAT,[cs]:n.CLAMP_TO_EDGE,[lg]:n.MIRRORED_REPEAT},ve={[Dn]:n.NEAREST,[LR]:n.NEAREST_MIPMAP_NEAREST,[Qc]:n.NEAREST_MIPMAP_LINEAR,[jn]:n.LINEAR,[Jh]:n.LINEAR_MIPMAP_NEAREST,[Bo]:n.LINEAR_MIPMAP_LINEAR},Le={[UR]:n.NEVER,[zR]:n.ALWAYS,[FR]:n.LESS,[S0]:n.LEQUAL,[OR]:n.EQUAL,[y0]:n.GEQUAL,[kR]:n.GREATER,[BR]:n.NOTEQUAL};function Ce(R,M){if(M.type===kr&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===jn||M.magFilter===Jh||M.magFilter===Qc||M.magFilter===Bo||M.minFilter===jn||M.minFilter===Jh||M.minFilter===Qc||M.minFilter===Bo)&&Ye("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(R,n.TEXTURE_WRAP_S,ue[M.wrapS]),n.texParameteri(R,n.TEXTURE_WRAP_T,ue[M.wrapT]),(R===n.TEXTURE_3D||R===n.TEXTURE_2D_ARRAY)&&n.texParameteri(R,n.TEXTURE_WRAP_R,ue[M.wrapR]),n.texParameteri(R,n.TEXTURE_MAG_FILTER,ve[M.magFilter]),n.texParameteri(R,n.TEXTURE_MIN_FILTER,ve[M.minFilter]),M.compareFunction&&(n.texParameteri(R,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(R,n.TEXTURE_COMPARE_FUNC,Le[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Dn||M.minFilter!==Qc&&M.minFilter!==Bo||M.type===kr&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||i.get(M).__currentAnisotropy){const V=e.get("EXT_texture_filter_anisotropic");n.texParameterf(R,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,r.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy}}}function $(R,M){let V=!1;R.__webglInit===void 0&&(R.__webglInit=!0,M.addEventListener("dispose",w));const Z=M.source;let te=h.get(Z);te===void 0&&(te={},h.set(Z,te));const pe=I(M);if(pe!==R.__cacheKey){te[pe]===void 0&&(te[pe]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,V=!0),te[pe].usedTimes++;const ie=te[R.__cacheKey];ie!==void 0&&(te[R.__cacheKey].usedTimes--,ie.usedTimes===0&&b(M)),R.__cacheKey=pe,R.__webglTexture=te[pe].texture}return V}function se(R,M,V){return Math.floor(Math.floor(R/V)/M)}function ae(R,M,V,Z){const pe=R.updateRanges;if(pe.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,M.width,M.height,V,Z,M.data);else{pe.sort((Ae,me)=>Ae.start-me.start);let ie=0;for(let Ae=1;Ae<pe.length;Ae++){const me=pe[ie],ce=pe[Ae],xe=me.start+me.count,Xe=se(ce.start,M.width,4),Ke=se(me.start,M.width,4);ce.start<=xe+1&&Xe===Ke&&se(ce.start+ce.count-1,M.width,4)===Xe?me.count=Math.max(me.count,ce.start+ce.count-me.start):(++ie,pe[ie]=ce)}pe.length=ie+1;const K=t.getParameter(n.UNPACK_ROW_LENGTH),J=t.getParameter(n.UNPACK_SKIP_PIXELS),Se=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,M.width);for(let Ae=0,me=pe.length;Ae<me;Ae++){const ce=pe[Ae],xe=Math.floor(ce.start/4),Xe=Math.ceil(ce.count/4),Ke=xe%M.width,U=Math.floor(xe/M.width),le=Xe,Q=1;t.pixelStorei(n.UNPACK_SKIP_PIXELS,Ke),t.pixelStorei(n.UNPACK_SKIP_ROWS,U),t.texSubImage2D(n.TEXTURE_2D,0,Ke,U,le,Q,V,Z,M.data)}R.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,K),t.pixelStorei(n.UNPACK_SKIP_PIXELS,J),t.pixelStorei(n.UNPACK_SKIP_ROWS,Se)}}function Pe(R,M,V){let Z=n.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(Z=n.TEXTURE_2D_ARRAY),M.isData3DTexture&&(Z=n.TEXTURE_3D);const te=$(R,M),pe=M.source;t.bindTexture(Z,R.__webglTexture,n.TEXTURE0+V);const ie=i.get(pe);if(pe.version!==ie.__version||te===!0){if(t.activeTexture(n.TEXTURE0+V),(typeof ImageBitmap<"u"&&M.image instanceof ImageBitmap)===!1){const Q=mt.getPrimaries(mt.workingColorSpace),Me=M.colorSpace===zs?null:mt.getPrimaries(M.colorSpace),de=M.colorSpace===zs||Q===Me?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,de)}t.pixelStorei(n.UNPACK_ALIGNMENT,M.unpackAlignment);let J=_(M.image,!1,r.maxTextureSize);J=_e(M,J);const Se=s.convert(M.format,M.colorSpace),Ae=s.convert(M.type);let me=y(M.internalFormat,Se,Ae,M.normalized,M.colorSpace,M.isVideoTexture);Ce(Z,M);let ce;const xe=M.mipmaps,Xe=M.isVideoTexture!==!0,Ke=ie.__version===void 0||te===!0,U=pe.dataReady,le=E(M,J);if(M.isDepthTexture)me=T(M.format===zo,M.type),Ke&&(Xe?t.texStorage2D(n.TEXTURE_2D,1,me,J.width,J.height):t.texImage2D(n.TEXTURE_2D,0,me,J.width,J.height,0,Se,Ae,null));else if(M.isDataTexture)if(xe.length>0){Xe&&Ke&&t.texStorage2D(n.TEXTURE_2D,le,me,xe[0].width,xe[0].height);for(let Q=0,Me=xe.length;Q<Me;Q++)ce=xe[Q],Xe?U&&t.texSubImage2D(n.TEXTURE_2D,Q,0,0,ce.width,ce.height,Se,Ae,ce.data):t.texImage2D(n.TEXTURE_2D,Q,me,ce.width,ce.height,0,Se,Ae,ce.data);M.generateMipmaps=!1}else Xe?(Ke&&t.texStorage2D(n.TEXTURE_2D,le,me,J.width,J.height),U&&ae(M,J,Se,Ae)):t.texImage2D(n.TEXTURE_2D,0,me,J.width,J.height,0,Se,Ae,J.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Xe&&Ke&&t.texStorage3D(n.TEXTURE_2D_ARRAY,le,me,xe[0].width,xe[0].height,J.depth);for(let Q=0,Me=xe.length;Q<Me;Q++)if(ce=xe[Q],M.format!==_r)if(Se!==null)if(Xe){if(U)if(M.layerUpdates.size>0){const de=tS(ce.width,ce.height,M.format,M.type);for(const ne of M.layerUpdates){const oe=ce.data.subarray(ne*de/ce.data.BYTES_PER_ELEMENT,(ne+1)*de/ce.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Q,0,0,ne,ce.width,ce.height,1,Se,oe)}M.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Q,0,0,0,ce.width,ce.height,J.depth,Se,ce.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,Q,me,ce.width,ce.height,J.depth,0,ce.data,0,0);else Ye("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Xe?U&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,Q,0,0,0,ce.width,ce.height,J.depth,Se,Ae,ce.data):t.texImage3D(n.TEXTURE_2D_ARRAY,Q,me,ce.width,ce.height,J.depth,0,Se,Ae,ce.data)}else{Xe&&Ke&&t.texStorage2D(n.TEXTURE_2D,le,me,xe[0].width,xe[0].height);for(let Q=0,Me=xe.length;Q<Me;Q++)ce=xe[Q],M.format!==_r?Se!==null?Xe?U&&t.compressedTexSubImage2D(n.TEXTURE_2D,Q,0,0,ce.width,ce.height,Se,ce.data):t.compressedTexImage2D(n.TEXTURE_2D,Q,me,ce.width,ce.height,0,ce.data):Ye("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Xe?U&&t.texSubImage2D(n.TEXTURE_2D,Q,0,0,ce.width,ce.height,Se,Ae,ce.data):t.texImage2D(n.TEXTURE_2D,Q,me,ce.width,ce.height,0,Se,Ae,ce.data)}else if(M.isDataArrayTexture)if(Xe){if(Ke&&t.texStorage3D(n.TEXTURE_2D_ARRAY,le,me,J.width,J.height,J.depth),U)if(M.layerUpdates.size>0){const Q=tS(J.width,J.height,M.format,M.type);for(const Me of M.layerUpdates){const de=J.data.subarray(Me*Q/J.data.BYTES_PER_ELEMENT,(Me+1)*Q/J.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Me,J.width,J.height,1,Se,Ae,de)}M.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,J.width,J.height,J.depth,Se,Ae,J.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,me,J.width,J.height,J.depth,0,Se,Ae,J.data);else if(M.isData3DTexture)Xe?(Ke&&t.texStorage3D(n.TEXTURE_3D,le,me,J.width,J.height,J.depth),U&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,J.width,J.height,J.depth,Se,Ae,J.data)):t.texImage3D(n.TEXTURE_3D,0,me,J.width,J.height,J.depth,0,Se,Ae,J.data);else if(M.isFramebufferTexture){if(Ke)if(Xe)t.texStorage2D(n.TEXTURE_2D,le,me,J.width,J.height);else{let Q=J.width,Me=J.height;for(let de=0;de<le;de++)t.texImage2D(n.TEXTURE_2D,de,me,Q,Me,0,Se,Ae,null),Q>>=1,Me>>=1}}else if(M.isHTMLTexture){if("texElementImage2D"in n){const Q=n.canvas;if(Q.hasAttribute("layoutsubtree")||Q.setAttribute("layoutsubtree","true"),J.parentNode!==Q){Q.appendChild(J),d.add(M),Q.onpaint=he=>{const ze=he.changedElements;for(const re of d)ze.includes(re.image)&&(re.needsUpdate=!0)},Q.requestPaint();return}const Me=0,de=n.RGBA,ne=n.RGBA,oe=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,Me,de,ne,oe,J),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(xe.length>0){if(Xe&&Ke){const Q=et(xe[0]);t.texStorage2D(n.TEXTURE_2D,le,me,Q.width,Q.height)}for(let Q=0,Me=xe.length;Q<Me;Q++)ce=xe[Q],Xe?U&&t.texSubImage2D(n.TEXTURE_2D,Q,0,0,Se,Ae,ce):t.texImage2D(n.TEXTURE_2D,Q,me,Se,Ae,ce);M.generateMipmaps=!1}else if(Xe){if(Ke){const Q=et(J);t.texStorage2D(n.TEXTURE_2D,le,me,Q.width,Q.height)}U&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Se,Ae,J)}else t.texImage2D(n.TEXTURE_2D,0,me,Se,Ae,J);p(M)&&g(Z),ie.__version=pe.version,M.onUpdate&&M.onUpdate(M)}R.__version=M.version}function He(R,M,V){if(M.image.length!==6)return;const Z=$(R,M),te=M.source;t.bindTexture(n.TEXTURE_CUBE_MAP,R.__webglTexture,n.TEXTURE0+V);const pe=i.get(te);if(te.version!==pe.__version||Z===!0){t.activeTexture(n.TEXTURE0+V);const ie=mt.getPrimaries(mt.workingColorSpace),K=M.colorSpace===zs?null:mt.getPrimaries(M.colorSpace),J=M.colorSpace===zs||ie===K?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,J);const Se=M.isCompressedTexture||M.image[0].isCompressedTexture,Ae=M.image[0]&&M.image[0].isDataTexture,me=[];for(let ne=0;ne<6;ne++)!Se&&!Ae?me[ne]=_(M.image[ne],!0,r.maxCubemapSize):me[ne]=Ae?M.image[ne].image:M.image[ne],me[ne]=_e(M,me[ne]);const ce=me[0],xe=s.convert(M.format,M.colorSpace),Xe=s.convert(M.type),Ke=y(M.internalFormat,xe,Xe,M.normalized,M.colorSpace),U=M.isVideoTexture!==!0,le=pe.__version===void 0||Z===!0,Q=te.dataReady;let Me=E(M,ce);Ce(n.TEXTURE_CUBE_MAP,M);let de;if(Se){U&&le&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Me,Ke,ce.width,ce.height);for(let ne=0;ne<6;ne++){de=me[ne].mipmaps;for(let oe=0;oe<de.length;oe++){const he=de[oe];M.format!==_r?xe!==null?U?Q&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,oe,0,0,he.width,he.height,xe,he.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,oe,Ke,he.width,he.height,0,he.data):Ye("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):U?Q&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,oe,0,0,he.width,he.height,xe,Xe,he.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,oe,Ke,he.width,he.height,0,xe,Xe,he.data)}}}else{if(de=M.mipmaps,U&&le){de.length>0&&Me++;const ne=et(me[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Me,Ke,ne.width,ne.height)}for(let ne=0;ne<6;ne++)if(Ae){U?Q&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,me[ne].width,me[ne].height,xe,Xe,me[ne].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,Ke,me[ne].width,me[ne].height,0,xe,Xe,me[ne].data);for(let oe=0;oe<de.length;oe++){const ze=de[oe].image[ne].image;U?Q&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,oe+1,0,0,ze.width,ze.height,xe,Xe,ze.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,oe+1,Ke,ze.width,ze.height,0,xe,Xe,ze.data)}}else{U?Q&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,xe,Xe,me[ne]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,Ke,xe,Xe,me[ne]);for(let oe=0;oe<de.length;oe++){const he=de[oe];U?Q&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,oe+1,0,0,xe,Xe,he.image[ne]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,oe+1,Ke,xe,Xe,he.image[ne])}}}p(M)&&g(n.TEXTURE_CUBE_MAP),pe.__version=te.version,M.onUpdate&&M.onUpdate(M)}R.__version=M.version}function Ie(R,M,V,Z,te,pe){const ie=s.convert(V.format,V.colorSpace),K=s.convert(V.type),J=y(V.internalFormat,ie,K,V.normalized,V.colorSpace),Se=i.get(M),Ae=i.get(V);if(Ae.__renderTarget=M,!Se.__hasExternalTextures){const me=Math.max(1,M.width>>pe),ce=Math.max(1,M.height>>pe);te===n.TEXTURE_3D||te===n.TEXTURE_2D_ARRAY?t.texImage3D(te,pe,J,me,ce,M.depth,0,ie,K,null):t.texImage2D(te,pe,J,me,ce,0,ie,K,null)}t.bindFramebuffer(n.FRAMEBUFFER,R),qe(M)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Z,te,Ae.__webglTexture,0,Qe(M)):(te===n.TEXTURE_2D||te>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&te<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,Z,te,Ae.__webglTexture,pe),t.bindFramebuffer(n.FRAMEBUFFER,null)}function it(R,M,V){if(n.bindRenderbuffer(n.RENDERBUFFER,R),M.depthBuffer){const Z=M.depthTexture,te=Z&&Z.isDepthTexture?Z.type:null,pe=T(M.stencilBuffer,te),ie=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;qe(M)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Qe(M),pe,M.width,M.height):V?n.renderbufferStorageMultisample(n.RENDERBUFFER,Qe(M),pe,M.width,M.height):n.renderbufferStorage(n.RENDERBUFFER,pe,M.width,M.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,ie,n.RENDERBUFFER,R)}else{const Z=M.textures;for(let te=0;te<Z.length;te++){const pe=Z[te],ie=s.convert(pe.format,pe.colorSpace),K=s.convert(pe.type),J=y(pe.internalFormat,ie,K,pe.normalized,pe.colorSpace);qe(M)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Qe(M),J,M.width,M.height):V?n.renderbufferStorageMultisample(n.RENDERBUFFER,Qe(M),J,M.width,M.height):n.renderbufferStorage(n.RENDERBUFFER,J,M.width,M.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Re(R,M,V){const Z=M.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,R),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const te=i.get(M.depthTexture);if(te.__renderTarget=M,(!te.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),Z){if(te.__webglInit===void 0&&(te.__webglInit=!0,M.depthTexture.addEventListener("dispose",w)),te.__webglTexture===void 0){te.__webglTexture=n.createTexture(),t.bindTexture(n.TEXTURE_CUBE_MAP,te.__webglTexture),Ce(n.TEXTURE_CUBE_MAP,M.depthTexture);const Se=s.convert(M.depthTexture.format),Ae=s.convert(M.depthTexture.type);let me;M.depthTexture.format===Ms?me=n.DEPTH_COMPONENT24:M.depthTexture.format===zo&&(me=n.DEPTH24_STENCIL8);for(let ce=0;ce<6;ce++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,me,M.width,M.height,0,Se,Ae,null)}}else F(M.depthTexture,0);const pe=te.__webglTexture,ie=Qe(M),K=Z?n.TEXTURE_CUBE_MAP_POSITIVE_X+V:n.TEXTURE_2D,J=M.depthTexture.format===zo?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(M.depthTexture.format===Ms)qe(M)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,J,K,pe,0,ie):n.framebufferTexture2D(n.FRAMEBUFFER,J,K,pe,0);else if(M.depthTexture.format===zo)qe(M)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,J,K,pe,0,ie):n.framebufferTexture2D(n.FRAMEBUFFER,J,K,pe,0);else throw new Error("Unknown depthTexture format")}function We(R){const M=i.get(R),V=R.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==R.depthTexture){const Z=R.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),Z){const te=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,Z.removeEventListener("dispose",te)};Z.addEventListener("dispose",te),M.__depthDisposeCallback=te}M.__boundDepthTexture=Z}if(R.depthTexture&&!M.__autoAllocateDepthBuffer)if(V)for(let Z=0;Z<6;Z++)Re(M.__webglFramebuffer[Z],R,Z);else{const Z=R.texture.mipmaps;Z&&Z.length>0?Re(M.__webglFramebuffer[0],R,0):Re(M.__webglFramebuffer,R,0)}else if(V){M.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(t.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer[Z]),M.__webglDepthbuffer[Z]===void 0)M.__webglDepthbuffer[Z]=n.createRenderbuffer(),it(M.__webglDepthbuffer[Z],R,!1);else{const te=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,pe=M.__webglDepthbuffer[Z];n.bindRenderbuffer(n.RENDERBUFFER,pe),n.framebufferRenderbuffer(n.FRAMEBUFFER,te,n.RENDERBUFFER,pe)}}else{const Z=R.texture.mipmaps;if(Z&&Z.length>0?t.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=n.createRenderbuffer(),it(M.__webglDepthbuffer,R,!1);else{const te=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,pe=M.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,pe),n.framebufferRenderbuffer(n.FRAMEBUFFER,te,n.RENDERBUFFER,pe)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function tt(R,M,V){const Z=i.get(R);M!==void 0&&Ie(Z.__webglFramebuffer,R,R.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),V!==void 0&&We(R)}function Ge(R){const M=R.texture,V=i.get(R),Z=i.get(M);R.addEventListener("dispose",S);const te=R.textures,pe=R.isWebGLCubeRenderTarget===!0,ie=te.length>1;if(ie||(Z.__webglTexture===void 0&&(Z.__webglTexture=n.createTexture()),Z.__version=M.version,o.memory.textures++),pe){V.__webglFramebuffer=[];for(let K=0;K<6;K++)if(M.mipmaps&&M.mipmaps.length>0){V.__webglFramebuffer[K]=[];for(let J=0;J<M.mipmaps.length;J++)V.__webglFramebuffer[K][J]=n.createFramebuffer()}else V.__webglFramebuffer[K]=n.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){V.__webglFramebuffer=[];for(let K=0;K<M.mipmaps.length;K++)V.__webglFramebuffer[K]=n.createFramebuffer()}else V.__webglFramebuffer=n.createFramebuffer();if(ie)for(let K=0,J=te.length;K<J;K++){const Se=i.get(te[K]);Se.__webglTexture===void 0&&(Se.__webglTexture=n.createTexture(),o.memory.textures++)}if(R.samples>0&&qe(R)===!1){V.__webglMultisampledFramebuffer=n.createFramebuffer(),V.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let K=0;K<te.length;K++){const J=te[K];V.__webglColorRenderbuffer[K]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,V.__webglColorRenderbuffer[K]);const Se=s.convert(J.format,J.colorSpace),Ae=s.convert(J.type),me=y(J.internalFormat,Se,Ae,J.normalized,J.colorSpace,R.isXRRenderTarget===!0),ce=Qe(R);n.renderbufferStorageMultisample(n.RENDERBUFFER,ce,me,R.width,R.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+K,n.RENDERBUFFER,V.__webglColorRenderbuffer[K])}n.bindRenderbuffer(n.RENDERBUFFER,null),R.depthBuffer&&(V.__webglDepthRenderbuffer=n.createRenderbuffer(),it(V.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(pe){t.bindTexture(n.TEXTURE_CUBE_MAP,Z.__webglTexture),Ce(n.TEXTURE_CUBE_MAP,M);for(let K=0;K<6;K++)if(M.mipmaps&&M.mipmaps.length>0)for(let J=0;J<M.mipmaps.length;J++)Ie(V.__webglFramebuffer[K][J],R,M,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+K,J);else Ie(V.__webglFramebuffer[K],R,M,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0);p(M)&&g(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ie){for(let K=0,J=te.length;K<J;K++){const Se=te[K],Ae=i.get(Se);let me=n.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(me=R.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(me,Ae.__webglTexture),Ce(me,Se),Ie(V.__webglFramebuffer,R,Se,n.COLOR_ATTACHMENT0+K,me,0),p(Se)&&g(me)}t.unbindTexture()}else{let K=n.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(K=R.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(K,Z.__webglTexture),Ce(K,M),M.mipmaps&&M.mipmaps.length>0)for(let J=0;J<M.mipmaps.length;J++)Ie(V.__webglFramebuffer[J],R,M,n.COLOR_ATTACHMENT0,K,J);else Ie(V.__webglFramebuffer,R,M,n.COLOR_ATTACHMENT0,K,0);p(M)&&g(K),t.unbindTexture()}R.depthBuffer&&We(R)}function j(R){const M=R.textures;for(let V=0,Z=M.length;V<Z;V++){const te=M[V];if(p(te)){const pe=x(R),ie=i.get(te).__webglTexture;t.bindTexture(pe,ie),g(pe),t.unbindTexture()}}}const ct=[],Ht=[];function k(R){if(R.samples>0){if(qe(R)===!1){const M=R.textures,V=R.width,Z=R.height;let te=n.COLOR_BUFFER_BIT;const pe=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ie=i.get(R),K=M.length>1;if(K)for(let Se=0;Se<M.length;Se++)t.bindFramebuffer(n.FRAMEBUFFER,ie.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Se,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,ie.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Se,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,ie.__webglMultisampledFramebuffer);const J=R.texture.mipmaps;J&&J.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ie.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ie.__webglFramebuffer);for(let Se=0;Se<M.length;Se++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(te|=n.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(te|=n.STENCIL_BUFFER_BIT)),K){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,ie.__webglColorRenderbuffer[Se]);const Ae=i.get(M[Se]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Ae,0)}n.blitFramebuffer(0,0,V,Z,0,0,V,Z,te,n.NEAREST),l===!0&&(ct.length=0,Ht.length=0,ct.push(n.COLOR_ATTACHMENT0+Se),R.depthBuffer&&R.resolveDepthBuffer===!1&&(ct.push(pe),Ht.push(pe),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,Ht)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,ct))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),K)for(let Se=0;Se<M.length;Se++){t.bindFramebuffer(n.FRAMEBUFFER,ie.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Se,n.RENDERBUFFER,ie.__webglColorRenderbuffer[Se]);const Ae=i.get(M[Se]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,ie.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Se,n.TEXTURE_2D,Ae,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ie.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){const M=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[M])}}}function Qe(R){return Math.min(r.maxSamples,R.samples)}function qe(R){const M=i.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function pt(R){const M=o.render.frame;c.get(R)!==M&&(c.set(R,M),R.update())}function _e(R,M){const V=R.colorSpace,Z=R.format,te=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||V!==Fd&&V!==zs&&(mt.getTransfer(V)===Et?(Z!==_r||te!==Ii)&&Ye("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):_t("WebGLTextures: Unsupported texture color space:",V)),M}function et(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(u.width=R.naturalWidth||R.width,u.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(u.width=R.displayWidth,u.height=R.displayHeight):(u.width=R.width,u.height=R.height),u}this.allocateTextureUnit=B,this.resetTextureUnits=O,this.getTextureUnits=H,this.setTextureUnits=N,this.setTexture2D=F,this.setTexture2DArray=W,this.setTexture3D=P,this.setTextureCube=ee,this.rebindTextures=tt,this.setupRenderTarget=Ge,this.updateRenderTargetMipmap=j,this.updateMultisampleRenderTarget=k,this.setupDepthRenderbuffer=We,this.setupFrameBufferTexture=Ie,this.useMultisampledRTT=qe,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function xL(n,e){function t(i,r=zs){let s;const o=mt.getTransfer(r);if(i===Ii)return n.UNSIGNED_BYTE;if(i===m0)return n.UNSIGNED_SHORT_4_4_4_4;if(i===g0)return n.UNSIGNED_SHORT_5_5_5_1;if(i===m1)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===g1)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===h1)return n.BYTE;if(i===p1)return n.SHORT;if(i===fc)return n.UNSIGNED_SHORT;if(i===p0)return n.INT;if(i===jr)return n.UNSIGNED_INT;if(i===kr)return n.FLOAT;if(i===ys)return n.HALF_FLOAT;if(i===_1)return n.ALPHA;if(i===v1)return n.RGB;if(i===_r)return n.RGBA;if(i===Ms)return n.DEPTH_COMPONENT;if(i===zo)return n.DEPTH_STENCIL;if(i===x1)return n.RED;if(i===_0)return n.RED_INTEGER;if(i===sa)return n.RG;if(i===v0)return n.RG_INTEGER;if(i===x0)return n.RGBA_INTEGER;if(i===qf||i===$f||i===Kf||i===Zf)if(o===Et)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===qf)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===$f)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Kf)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Zf)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===qf)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===$f)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Kf)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Zf)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===ug||i===cg||i===fg||i===dg)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===ug)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===cg)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===fg)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===dg)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===hg||i===pg||i===mg||i===gg||i===_g||i===Id||i===vg)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===hg||i===pg)return o===Et?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===mg)return o===Et?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===gg)return s.COMPRESSED_R11_EAC;if(i===_g)return s.COMPRESSED_SIGNED_R11_EAC;if(i===Id)return s.COMPRESSED_RG11_EAC;if(i===vg)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===xg||i===Sg||i===yg||i===Mg||i===Eg||i===Tg||i===wg||i===Ag||i===Cg||i===Rg||i===bg||i===Pg||i===Dg||i===Lg)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===xg)return o===Et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Sg)return o===Et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===yg)return o===Et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Mg)return o===Et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Eg)return o===Et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Tg)return o===Et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===wg)return o===Et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Ag)return o===Et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Cg)return o===Et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Rg)return o===Et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===bg)return o===Et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Pg)return o===Et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Dg)return o===Et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Lg)return o===Et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Ng||i===Ig||i===Ug)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Ng)return o===Et?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Ig)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Ug)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Fg||i===Og||i===Ud||i===kg)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Fg)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Og)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Ud)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===kg)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===dc?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const SL=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,yL=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class ML{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new P1(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new $r({vertexShader:SL,fragmentShader:yL,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new qr(new uh(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class EL extends ua{constructor(e,t){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,u=null,c=null,d=null,f=null,h=null,m=null;const v=typeof XRWebGLBinding<"u",_=new ML,p={},g=t.getContextAttributes();let x=null,y=null;const T=[],E=[],w=new ot;let S=null;const C=new Ji;C.viewport=new Zt;const b=new Ji;b.viewport=new Zt;const D=[C,b],L=new Lb;let O=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let se=T[$];return se===void 0&&(se=new ap,T[$]=se),se.getTargetRaySpace()},this.getControllerGrip=function($){let se=T[$];return se===void 0&&(se=new ap,T[$]=se),se.getGripSpace()},this.getHand=function($){let se=T[$];return se===void 0&&(se=new ap,T[$]=se),se.getHandSpace()};function N($){const se=E.indexOf($.inputSource);if(se===-1)return;const ae=T[se];ae!==void 0&&(ae.update($.inputSource,$.frame,u||o),ae.dispatchEvent({type:$.type,data:$.inputSource}))}function B(){r.removeEventListener("select",N),r.removeEventListener("selectstart",N),r.removeEventListener("selectend",N),r.removeEventListener("squeeze",N),r.removeEventListener("squeezestart",N),r.removeEventListener("squeezeend",N),r.removeEventListener("end",B),r.removeEventListener("inputsourceschange",I);for(let $=0;$<T.length;$++){const se=E[$];se!==null&&(E[$]=null,T[$].disconnect(se))}O=null,H=null,_.reset();for(const $ in p)delete p[$];e.setRenderTarget(x),h=null,f=null,d=null,r=null,y=null,Ce.stop(),i.isPresenting=!1,e.setPixelRatio(S),e.setSize(w.width,w.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){s=$,i.isPresenting===!0&&Ye("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){a=$,i.isPresenting===!0&&Ye("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||o},this.setReferenceSpace=function($){u=$},this.getBaseLayer=function(){return f!==null?f:h},this.getBinding=function(){return d===null&&v&&(d=new XRWebGLBinding(r,t)),d},this.getFrame=function(){return m},this.getSession=function(){return r},this.setSession=async function($){if(r=$,r!==null){if(x=e.getRenderTarget(),r.addEventListener("select",N),r.addEventListener("selectstart",N),r.addEventListener("selectend",N),r.addEventListener("squeeze",N),r.addEventListener("squeezestart",N),r.addEventListener("squeezeend",N),r.addEventListener("end",B),r.addEventListener("inputsourceschange",I),g.xrCompatible!==!0&&await t.makeXRCompatible(),S=e.getPixelRatio(),e.getSize(w),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let ae=null,Pe=null,He=null;g.depth&&(He=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ae=g.stencil?zo:Ms,Pe=g.stencil?dc:jr);const Ie={colorFormat:t.RGBA8,depthFormat:He,scaleFactor:s};d=this.getBinding(),f=d.createProjectionLayer(Ie),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),y=new Wr(f.textureWidth,f.textureHeight,{format:_r,type:Ii,depthTexture:new bl(f.textureWidth,f.textureHeight,Pe,void 0,void 0,void 0,void 0,void 0,void 0,ae),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const ae={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};h=new XRWebGLLayer(r,t,ae),r.updateRenderState({baseLayer:h}),e.setPixelRatio(1),e.setSize(h.framebufferWidth,h.framebufferHeight,!1),y=new Wr(h.framebufferWidth,h.framebufferHeight,{format:_r,type:Ii,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),u=null,o=await r.requestReferenceSpace(a),Ce.setContext(r),Ce.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function I($){for(let se=0;se<$.removed.length;se++){const ae=$.removed[se],Pe=E.indexOf(ae);Pe>=0&&(E[Pe]=null,T[Pe].disconnect(ae))}for(let se=0;se<$.added.length;se++){const ae=$.added[se];let Pe=E.indexOf(ae);if(Pe===-1){for(let Ie=0;Ie<T.length;Ie++)if(Ie>=E.length){E.push(ae),Pe=Ie;break}else if(E[Ie]===null){E[Ie]=ae,Pe=Ie;break}if(Pe===-1)break}const He=T[Pe];He&&He.connect(ae)}}const F=new Y,W=new Y;function P($,se,ae){F.setFromMatrixPosition(se.matrixWorld),W.setFromMatrixPosition(ae.matrixWorld);const Pe=F.distanceTo(W),He=se.projectionMatrix.elements,Ie=ae.projectionMatrix.elements,it=He[14]/(He[10]-1),Re=He[14]/(He[10]+1),We=(He[9]+1)/He[5],tt=(He[9]-1)/He[5],Ge=(He[8]-1)/He[0],j=(Ie[8]+1)/Ie[0],ct=it*Ge,Ht=it*j,k=Pe/(-Ge+j),Qe=k*-Ge;if(se.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(Qe),$.translateZ(k),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),He[10]===-1)$.projectionMatrix.copy(se.projectionMatrix),$.projectionMatrixInverse.copy(se.projectionMatrixInverse);else{const qe=it+k,pt=Re+k,_e=ct-Qe,et=Ht+(Pe-Qe),R=We*Re/pt*qe,M=tt*Re/pt*qe;$.projectionMatrix.makePerspective(_e,et,R,M,qe,pt),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function ee($,se){se===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(se.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(r===null)return;let se=$.near,ae=$.far;_.texture!==null&&(_.depthNear>0&&(se=_.depthNear),_.depthFar>0&&(ae=_.depthFar)),L.near=b.near=C.near=se,L.far=b.far=C.far=ae,(O!==L.near||H!==L.far)&&(r.updateRenderState({depthNear:L.near,depthFar:L.far}),O=L.near,H=L.far),L.layers.mask=$.layers.mask|6,C.layers.mask=L.layers.mask&-5,b.layers.mask=L.layers.mask&-3;const Pe=$.parent,He=L.cameras;ee(L,Pe);for(let Ie=0;Ie<He.length;Ie++)ee(He[Ie],Pe);He.length===2?P(L,C,b):L.projectionMatrix.copy(C.projectionMatrix),ue($,L,Pe)};function ue($,se,ae){ae===null?$.matrix.copy(se.matrixWorld):($.matrix.copy(ae.matrixWorld),$.matrix.invert(),$.matrix.multiply(se.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(se.projectionMatrix),$.projectionMatrixInverse.copy(se.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=Hg*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return L},this.getFoveation=function(){if(!(f===null&&h===null))return l},this.setFoveation=function($){l=$,f!==null&&(f.fixedFoveation=$),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=$)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(L)},this.getCameraTexture=function($){return p[$]};let ve=null;function Le($,se){if(c=se.getViewerPose(u||o),m=se,c!==null){const ae=c.views;h!==null&&(e.setRenderTargetFramebuffer(y,h.framebuffer),e.setRenderTarget(y));let Pe=!1;ae.length!==L.cameras.length&&(L.cameras.length=0,Pe=!0);for(let Re=0;Re<ae.length;Re++){const We=ae[Re];let tt=null;if(h!==null)tt=h.getViewport(We);else{const j=d.getViewSubImage(f,We);tt=j.viewport,Re===0&&(e.setRenderTargetTextures(y,j.colorTexture,j.depthStencilTexture),e.setRenderTarget(y))}let Ge=D[Re];Ge===void 0&&(Ge=new Ji,Ge.layers.enable(Re),Ge.viewport=new Zt,D[Re]=Ge),Ge.matrix.fromArray(We.transform.matrix),Ge.matrix.decompose(Ge.position,Ge.quaternion,Ge.scale),Ge.projectionMatrix.fromArray(We.projectionMatrix),Ge.projectionMatrixInverse.copy(Ge.projectionMatrix).invert(),Ge.viewport.set(tt.x,tt.y,tt.width,tt.height),Re===0&&(L.matrix.copy(Ge.matrix),L.matrix.decompose(L.position,L.quaternion,L.scale)),Pe===!0&&L.cameras.push(Ge)}const He=r.enabledFeatures;if(He&&He.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&v){d=i.getBinding();const Re=d.getDepthInformation(ae[0]);Re&&Re.isValid&&Re.texture&&_.init(Re,r.renderState)}if(He&&He.includes("camera-access")&&v){e.state.unbindTexture(),d=i.getBinding();for(let Re=0;Re<ae.length;Re++){const We=ae[Re].camera;if(We){let tt=p[We];tt||(tt=new P1,p[We]=tt);const Ge=d.getCameraImage(We);tt.sourceTexture=Ge}}}}for(let ae=0;ae<T.length;ae++){const Pe=E[ae],He=T[ae];Pe!==null&&He!==void 0&&He.update(Pe,se,u||o)}ve&&ve($,se),se.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:se}),m=null}const Ce=new I1;Ce.setAnimationLoop(Le),this.setAnimationLoop=function($){ve=$},this.dispose=function(){}}}const TL=new Jt,V1=new Ze;V1.set(-1,0,0,0,1,0,0,0,1);function wL(n,e){function t(_,p){_.matrixAutoUpdate===!0&&_.updateMatrix(),p.value.copy(_.matrix)}function i(_,p){p.color.getRGB(_.fogColor.value,D1(n)),p.isFog?(_.fogNear.value=p.near,_.fogFar.value=p.far):p.isFogExp2&&(_.fogDensity.value=p.density)}function r(_,p,g,x,y){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?s(_,p):p.isMeshLambertMaterial?(s(_,p),p.envMap&&(_.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(s(_,p),d(_,p)):p.isMeshPhongMaterial?(s(_,p),c(_,p),p.envMap&&(_.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(s(_,p),f(_,p),p.isMeshPhysicalMaterial&&h(_,p,y)):p.isMeshMatcapMaterial?(s(_,p),m(_,p)):p.isMeshDepthMaterial?s(_,p):p.isMeshDistanceMaterial?(s(_,p),v(_,p)):p.isMeshNormalMaterial?s(_,p):p.isLineBasicMaterial?(o(_,p),p.isLineDashedMaterial&&a(_,p)):p.isPointsMaterial?l(_,p,g,x):p.isSpriteMaterial?u(_,p):p.isShadowMaterial?(_.color.value.copy(p.color),_.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(_,p){_.opacity.value=p.opacity,p.color&&_.diffuse.value.copy(p.color),p.emissive&&_.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(_.map.value=p.map,t(p.map,_.mapTransform)),p.alphaMap&&(_.alphaMap.value=p.alphaMap,t(p.alphaMap,_.alphaMapTransform)),p.bumpMap&&(_.bumpMap.value=p.bumpMap,t(p.bumpMap,_.bumpMapTransform),_.bumpScale.value=p.bumpScale,p.side===yi&&(_.bumpScale.value*=-1)),p.normalMap&&(_.normalMap.value=p.normalMap,t(p.normalMap,_.normalMapTransform),_.normalScale.value.copy(p.normalScale),p.side===yi&&_.normalScale.value.negate()),p.displacementMap&&(_.displacementMap.value=p.displacementMap,t(p.displacementMap,_.displacementMapTransform),_.displacementScale.value=p.displacementScale,_.displacementBias.value=p.displacementBias),p.emissiveMap&&(_.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,_.emissiveMapTransform)),p.specularMap&&(_.specularMap.value=p.specularMap,t(p.specularMap,_.specularMapTransform)),p.alphaTest>0&&(_.alphaTest.value=p.alphaTest);const g=e.get(p),x=g.envMap,y=g.envMapRotation;x&&(_.envMap.value=x,_.envMapRotation.value.setFromMatrix4(TL.makeRotationFromEuler(y)).transpose(),x.isCubeTexture&&x.isRenderTargetTexture===!1&&_.envMapRotation.value.premultiply(V1),_.reflectivity.value=p.reflectivity,_.ior.value=p.ior,_.refractionRatio.value=p.refractionRatio),p.lightMap&&(_.lightMap.value=p.lightMap,_.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,_.lightMapTransform)),p.aoMap&&(_.aoMap.value=p.aoMap,_.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,_.aoMapTransform))}function o(_,p){_.diffuse.value.copy(p.color),_.opacity.value=p.opacity,p.map&&(_.map.value=p.map,t(p.map,_.mapTransform))}function a(_,p){_.dashSize.value=p.dashSize,_.totalSize.value=p.dashSize+p.gapSize,_.scale.value=p.scale}function l(_,p,g,x){_.diffuse.value.copy(p.color),_.opacity.value=p.opacity,_.size.value=p.size*g,_.scale.value=x*.5,p.map&&(_.map.value=p.map,t(p.map,_.uvTransform)),p.alphaMap&&(_.alphaMap.value=p.alphaMap,t(p.alphaMap,_.alphaMapTransform)),p.alphaTest>0&&(_.alphaTest.value=p.alphaTest)}function u(_,p){_.diffuse.value.copy(p.color),_.opacity.value=p.opacity,_.rotation.value=p.rotation,p.map&&(_.map.value=p.map,t(p.map,_.mapTransform)),p.alphaMap&&(_.alphaMap.value=p.alphaMap,t(p.alphaMap,_.alphaMapTransform)),p.alphaTest>0&&(_.alphaTest.value=p.alphaTest)}function c(_,p){_.specular.value.copy(p.specular),_.shininess.value=Math.max(p.shininess,1e-4)}function d(_,p){p.gradientMap&&(_.gradientMap.value=p.gradientMap)}function f(_,p){_.metalness.value=p.metalness,p.metalnessMap&&(_.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,_.metalnessMapTransform)),_.roughness.value=p.roughness,p.roughnessMap&&(_.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,_.roughnessMapTransform)),p.envMap&&(_.envMapIntensity.value=p.envMapIntensity)}function h(_,p,g){_.ior.value=p.ior,p.sheen>0&&(_.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),_.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(_.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,_.sheenColorMapTransform)),p.sheenRoughnessMap&&(_.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,_.sheenRoughnessMapTransform))),p.clearcoat>0&&(_.clearcoat.value=p.clearcoat,_.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(_.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,_.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(_.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,_.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(_.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,_.clearcoatNormalMapTransform),_.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===yi&&_.clearcoatNormalScale.value.negate())),p.dispersion>0&&(_.dispersion.value=p.dispersion),p.iridescence>0&&(_.iridescence.value=p.iridescence,_.iridescenceIOR.value=p.iridescenceIOR,_.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],_.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(_.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,_.iridescenceMapTransform)),p.iridescenceThicknessMap&&(_.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,_.iridescenceThicknessMapTransform))),p.transmission>0&&(_.transmission.value=p.transmission,_.transmissionSamplerMap.value=g.texture,_.transmissionSamplerSize.value.set(g.width,g.height),p.transmissionMap&&(_.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,_.transmissionMapTransform)),_.thickness.value=p.thickness,p.thicknessMap&&(_.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,_.thicknessMapTransform)),_.attenuationDistance.value=p.attenuationDistance,_.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(_.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(_.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,_.anisotropyMapTransform))),_.specularIntensity.value=p.specularIntensity,_.specularColor.value.copy(p.specularColor),p.specularColorMap&&(_.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,_.specularColorMapTransform)),p.specularIntensityMap&&(_.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,_.specularIntensityMapTransform))}function m(_,p){p.matcap&&(_.matcap.value=p.matcap)}function v(_,p){const g=e.get(p).light;_.referencePosition.value.setFromMatrixPosition(g.matrixWorld),_.nearDistance.value=g.shadow.camera.near,_.farDistance.value=g.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function AL(n,e,t,i){let r={},s={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(g,x){const y=x.program;i.uniformBlockBinding(g,y)}function u(g,x){let y=r[g.id];y===void 0&&(m(g),y=c(g),r[g.id]=y,g.addEventListener("dispose",_));const T=x.program;i.updateUBOMapping(g,T);const E=e.render.frame;s[g.id]!==E&&(f(g),s[g.id]=E)}function c(g){const x=d();g.__bindingPointIndex=x;const y=n.createBuffer(),T=g.__size,E=g.usage;return n.bindBuffer(n.UNIFORM_BUFFER,y),n.bufferData(n.UNIFORM_BUFFER,T,E),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,x,y),y}function d(){for(let g=0;g<a;g++)if(o.indexOf(g)===-1)return o.push(g),g;return _t("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(g){const x=r[g.id],y=g.uniforms,T=g.__cache;n.bindBuffer(n.UNIFORM_BUFFER,x);for(let E=0,w=y.length;E<w;E++){const S=Array.isArray(y[E])?y[E]:[y[E]];for(let C=0,b=S.length;C<b;C++){const D=S[C];if(h(D,E,C,T)===!0){const L=D.__offset,O=Array.isArray(D.value)?D.value:[D.value];let H=0;for(let N=0;N<O.length;N++){const B=O[N],I=v(B);typeof B=="number"||typeof B=="boolean"?(D.__data[0]=B,n.bufferSubData(n.UNIFORM_BUFFER,L+H,D.__data)):B.isMatrix3?(D.__data[0]=B.elements[0],D.__data[1]=B.elements[1],D.__data[2]=B.elements[2],D.__data[3]=0,D.__data[4]=B.elements[3],D.__data[5]=B.elements[4],D.__data[6]=B.elements[5],D.__data[7]=0,D.__data[8]=B.elements[6],D.__data[9]=B.elements[7],D.__data[10]=B.elements[8],D.__data[11]=0):ArrayBuffer.isView(B)?D.__data.set(new B.constructor(B.buffer,B.byteOffset,D.__data.length)):(B.toArray(D.__data,H),H+=I.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,L,D.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function h(g,x,y,T){const E=g.value,w=x+"_"+y;if(T[w]===void 0)return typeof E=="number"||typeof E=="boolean"?T[w]=E:ArrayBuffer.isView(E)?T[w]=E.slice():T[w]=E.clone(),!0;{const S=T[w];if(typeof E=="number"||typeof E=="boolean"){if(S!==E)return T[w]=E,!0}else{if(ArrayBuffer.isView(E))return!0;if(S.equals(E)===!1)return S.copy(E),!0}}return!1}function m(g){const x=g.uniforms;let y=0;const T=16;for(let w=0,S=x.length;w<S;w++){const C=Array.isArray(x[w])?x[w]:[x[w]];for(let b=0,D=C.length;b<D;b++){const L=C[b],O=Array.isArray(L.value)?L.value:[L.value];for(let H=0,N=O.length;H<N;H++){const B=O[H],I=v(B),F=y%T,W=F%I.boundary,P=F+W;y+=W,P!==0&&T-P<I.storage&&(y+=T-P),L.__data=new Float32Array(I.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=y,y+=I.storage}}}const E=y%T;return E>0&&(y+=T-E),g.__size=y,g.__cache={},this}function v(g){const x={boundary:0,storage:0};return typeof g=="number"||typeof g=="boolean"?(x.boundary=4,x.storage=4):g.isVector2?(x.boundary=8,x.storage=8):g.isVector3||g.isColor?(x.boundary=16,x.storage=12):g.isVector4?(x.boundary=16,x.storage=16):g.isMatrix3?(x.boundary=48,x.storage=48):g.isMatrix4?(x.boundary=64,x.storage=64):g.isTexture?Ye("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(g)?(x.boundary=16,x.storage=g.byteLength):Ye("WebGLRenderer: Unsupported uniform value type.",g),x}function _(g){const x=g.target;x.removeEventListener("dispose",_);const y=o.indexOf(x.__bindingPointIndex);o.splice(y,1),n.deleteBuffer(r[x.id]),delete r[x.id],delete s[x.id]}function p(){for(const g in r)n.deleteBuffer(r[g]);o=[],r={},s={}}return{bind:l,update:u,dispose:p}}const CL=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Ar=null;function RL(){return Ar===null&&(Ar=new pb(CL,16,16,sa,ys),Ar.name="DFG_LUT",Ar.minFilter=jn,Ar.magFilter=jn,Ar.wrapS=cs,Ar.wrapT=cs,Ar.generateMipmaps=!1,Ar.needsUpdate=!0),Ar}class bL{constructor(e={}){const{canvas:t=HR(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:f=!1,outputBufferType:h=Ii}=e;this.isWebGLRenderer=!0;let m;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=i.getContextAttributes().alpha}else m=o;const v=h,_=new Set([x0,v0,_0]),p=new Set([Ii,jr,fc,dc,m0,g0]),g=new Uint32Array(4),x=new Int32Array(4),y=new Y;let T=null,E=null;const w=[],S=[];let C=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Gr,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const b=this;let D=!1,L=null;this._outputColorSpace=si;let O=0,H=0,N=null,B=-1,I=null;const F=new Zt,W=new Zt;let P=null;const ee=new ht(0);let ue=0,ve=t.width,Le=t.height,Ce=1,$=null,se=null;const ae=new Zt(0,0,ve,Le),Pe=new Zt(0,0,ve,Le);let He=!1;const Ie=new T0;let it=!1,Re=!1;const We=new Jt,tt=new Y,Ge=new Zt,j={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ct=!1;function Ht(){return N===null?Ce:1}let k=i;function Qe(A,z){return t.getContext(A,z)}try{const A={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:c,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${d0}`),t.addEventListener("webglcontextlost",ne,!1),t.addEventListener("webglcontextrestored",oe,!1),t.addEventListener("webglcontextcreationerror",he,!1),k===null){const z="webgl2";if(k=Qe(z,A),k===null)throw Qe(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw _t("WebGLRenderer: "+A.message),A}let qe,pt,_e,et,R,M,V,Z,te,pe,ie,K,J,Se,Ae,me,ce,xe,Xe,Ke,U,le,Q;function Me(){qe=new R3(k),qe.init(),U=new xL(k,qe),pt=new S3(k,qe,e,U),_e=new _L(k,qe),pt.reversedDepthBuffer&&f&&_e.buffers.depth.setReversed(!0),et=new D3(k),R=new iL,M=new vL(k,qe,_e,R,pt,U,et),V=new C3(b),Z=new Ub(k),le=new v3(k,Z),te=new b3(k,Z,et,le),pe=new N3(k,te,Z,le,et),xe=new L3(k,pt,M),Ae=new y3(R),ie=new nL(b,V,qe,pt,le,Ae),K=new wL(b,R),J=new sL,Se=new fL(qe),ce=new _3(b,V,_e,pe,m,l),me=new gL(b,pe,pt),Q=new AL(k,et,pt,_e),Xe=new x3(k,qe,et),Ke=new P3(k,qe,et),et.programs=ie.programs,b.capabilities=pt,b.extensions=qe,b.properties=R,b.renderLists=J,b.shadowMap=me,b.state=_e,b.info=et}Me(),v!==Ii&&(C=new U3(v,t.width,t.height,r,s));const de=new EL(b,k);this.xr=de,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){const A=qe.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=qe.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return Ce},this.setPixelRatio=function(A){A!==void 0&&(Ce=A,this.setSize(ve,Le,!1))},this.getSize=function(A){return A.set(ve,Le)},this.setSize=function(A,z,q=!0){if(de.isPresenting){Ye("WebGLRenderer: Can't change size while VR device is presenting.");return}ve=A,Le=z,t.width=Math.floor(A*Ce),t.height=Math.floor(z*Ce),q===!0&&(t.style.width=A+"px",t.style.height=z+"px"),C!==null&&C.setSize(t.width,t.height),this.setViewport(0,0,A,z)},this.getDrawingBufferSize=function(A){return A.set(ve*Ce,Le*Ce).floor()},this.setDrawingBufferSize=function(A,z,q){ve=A,Le=z,Ce=q,t.width=Math.floor(A*q),t.height=Math.floor(z*q),this.setViewport(0,0,A,z)},this.setEffects=function(A){if(v===Ii){_t("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let z=0;z<A.length;z++)if(A[z].isOutputPass===!0){Ye("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}C.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(F)},this.getViewport=function(A){return A.copy(ae)},this.setViewport=function(A,z,q,G){A.isVector4?ae.set(A.x,A.y,A.z,A.w):ae.set(A,z,q,G),_e.viewport(F.copy(ae).multiplyScalar(Ce).round())},this.getScissor=function(A){return A.copy(Pe)},this.setScissor=function(A,z,q,G){A.isVector4?Pe.set(A.x,A.y,A.z,A.w):Pe.set(A,z,q,G),_e.scissor(W.copy(Pe).multiplyScalar(Ce).round())},this.getScissorTest=function(){return He},this.setScissorTest=function(A){_e.setScissorTest(He=A)},this.setOpaqueSort=function(A){$=A},this.setTransparentSort=function(A){se=A},this.getClearColor=function(A){return A.copy(ce.getClearColor())},this.setClearColor=function(){ce.setClearColor(...arguments)},this.getClearAlpha=function(){return ce.getClearAlpha()},this.setClearAlpha=function(){ce.setClearAlpha(...arguments)},this.clear=function(A=!0,z=!0,q=!0){let G=0;if(A){let X=!1;if(N!==null){const ye=N.texture.format;X=_.has(ye)}if(X){const ye=N.texture.type,Ee=p.has(ye),we=ce.getClearColor(),Fe=ce.getClearAlpha(),Oe=we.r,Je=we.g,rt=we.b;Ee?(g[0]=Oe,g[1]=Je,g[2]=rt,g[3]=Fe,k.clearBufferuiv(k.COLOR,0,g)):(x[0]=Oe,x[1]=Je,x[2]=rt,x[3]=Fe,k.clearBufferiv(k.COLOR,0,x))}else G|=k.COLOR_BUFFER_BIT}z&&(G|=k.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),q&&(G|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G!==0&&k.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(A){A.setRenderer(this),L=A},this.dispose=function(){t.removeEventListener("webglcontextlost",ne,!1),t.removeEventListener("webglcontextrestored",oe,!1),t.removeEventListener("webglcontextcreationerror",he,!1),ce.dispose(),J.dispose(),Se.dispose(),R.dispose(),V.dispose(),pe.dispose(),le.dispose(),Q.dispose(),ie.dispose(),de.dispose(),de.removeEventListener("sessionstart",at),de.removeEventListener("sessionend",kt),Bt.stop()};function ne(A){A.preventDefault(),Bd("WebGLRenderer: Context Lost."),D=!0}function oe(){Bd("WebGLRenderer: Context Restored."),D=!1;const A=et.autoReset,z=me.enabled,q=me.autoUpdate,G=me.needsUpdate,X=me.type;Me(),et.autoReset=A,me.enabled=z,me.autoUpdate=q,me.needsUpdate=G,me.type=X}function he(A){_t("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function ze(A){const z=A.target;z.removeEventListener("dispose",ze),re(z)}function re(A){Ve(A),R.remove(A)}function Ve(A){const z=R.get(A).programs;z!==void 0&&(z.forEach(function(q){ie.releaseProgram(q)}),A.isShaderMaterial&&ie.releaseShaderCache(A))}this.renderBufferDirect=function(A,z,q,G,X,ye){z===null&&(z=j);const Ee=X.isMesh&&X.matrixWorld.determinant()<0,we=yn(A,z,q,G,X);_e.setMaterial(G,Ee);let Fe=q.index,Oe=1;if(G.wireframe===!0){if(Fe=te.getWireframeAttribute(q),Fe===void 0)return;Oe=2}const Je=q.drawRange,rt=q.attributes.position;let Be=Je.start*Oe,wt=(Je.start+Je.count)*Oe;ye!==null&&(Be=Math.max(Be,ye.start*Oe),wt=Math.min(wt,(ye.start+ye.count)*Oe)),Fe!==null?(Be=Math.max(Be,0),wt=Math.min(wt,Fe.count)):rt!=null&&(Be=Math.max(Be,0),wt=Math.min(wt,rt.count));const tn=wt-Be;if(tn<0||tn===1/0)return;le.setup(X,G,we,q,Fe);let $t,Rt=Xe;if(Fe!==null&&($t=Z.get(Fe),Rt=Ke,Rt.setIndex($t)),X.isMesh)G.wireframe===!0?(_e.setLineWidth(G.wireframeLinewidth*Ht()),Rt.setMode(k.LINES)):Rt.setMode(k.TRIANGLES);else if(X.isLine){let On=G.linewidth;On===void 0&&(On=1),_e.setLineWidth(On*Ht()),X.isLineSegments?Rt.setMode(k.LINES):X.isLineLoop?Rt.setMode(k.LINE_LOOP):Rt.setMode(k.LINE_STRIP)}else X.isPoints?Rt.setMode(k.POINTS):X.isSprite&&Rt.setMode(k.TRIANGLES);if(X.isBatchedMesh)if(qe.get("WEBGL_multi_draw"))Rt.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else{const On=X._multiDrawStarts,be=X._multiDrawCounts,Ti=X._multiDrawCount,vt=Fe?Z.get(Fe).bytesPerElement:1,Yi=R.get(G).currentProgram.getUniforms();for(let Er=0;Er<Ti;Er++)Yi.setValue(k,"_gl_DrawID",Er),Rt.render(On[Er]/vt,be[Er])}else if(X.isInstancedMesh)Rt.renderInstances(Be,tn,X.count);else if(q.isInstancedBufferGeometry){const On=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,be=Math.min(q.instanceCount,On);Rt.renderInstances(Be,tn,be)}else Rt.render(Be,tn)};function Ue(A,z,q){A.transparent===!0&&A.side===Ir&&A.forceSinglePass===!1?(A.side=yi,A.needsUpdate=!0,Sn(A,z,q),A.side=po,A.needsUpdate=!0,Sn(A,z,q),A.side=Ir):Sn(A,z,q)}this.compile=function(A,z,q=null){q===null&&(q=A),E=Se.get(q),E.init(z),S.push(E),q.traverseVisible(function(X){X.isLight&&X.layers.test(z.layers)&&(E.pushLight(X),X.castShadow&&E.pushShadow(X))}),A!==q&&A.traverseVisible(function(X){X.isLight&&X.layers.test(z.layers)&&(E.pushLight(X),X.castShadow&&E.pushShadow(X))}),E.setupLights();const G=new Set;return A.traverse(function(X){if(!(X.isMesh||X.isPoints||X.isLine||X.isSprite))return;const ye=X.material;if(ye)if(Array.isArray(ye))for(let Ee=0;Ee<ye.length;Ee++){const we=ye[Ee];Ue(we,q,X),G.add(we)}else Ue(ye,q,X),G.add(ye)}),E=S.pop(),G},this.compileAsync=function(A,z,q=null){const G=this.compile(A,z,q);return new Promise(X=>{function ye(){if(G.forEach(function(Ee){R.get(Ee).currentProgram.isReady()&&G.delete(Ee)}),G.size===0){X(A);return}setTimeout(ye,10)}qe.get("KHR_parallel_shader_compile")!==null?ye():setTimeout(ye,10)})};let je=null;function an(A){je&&je(A)}function at(){Bt.stop()}function kt(){Bt.start()}const Bt=new I1;Bt.setAnimationLoop(an),typeof self<"u"&&Bt.setContext(self),this.setAnimationLoop=function(A){je=A,de.setAnimationLoop(A),A===null?Bt.stop():Bt.start()},de.addEventListener("sessionstart",at),de.addEventListener("sessionend",kt),this.render=function(A,z){if(z!==void 0&&z.isCamera!==!0){_t("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;L!==null&&L.renderStart(A,z);const q=de.enabled===!0&&de.isPresenting===!0,G=C!==null&&(N===null||q)&&C.begin(b,N);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),de.enabled===!0&&de.isPresenting===!0&&(C===null||C.isCompositing()===!1)&&(de.cameraAutoUpdate===!0&&de.updateCamera(z),z=de.getCamera()),A.isScene===!0&&A.onBeforeRender(b,A,z,N),E=Se.get(A,S.length),E.init(z),E.state.textureUnits=M.getTextureUnits(),S.push(E),We.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),Ie.setFromProjectionMatrix(We,Br,z.reversedDepth),Re=this.localClippingEnabled,it=Ae.init(this.clippingPlanes,Re),T=J.get(A,w.length),T.init(),w.push(T),de.enabled===!0&&de.isPresenting===!0){const Ee=b.xr.getDepthSensingMesh();Ee!==null&&Lt(Ee,z,-1/0,b.sortObjects)}Lt(A,z,0,b.sortObjects),T.finish(),b.sortObjects===!0&&T.sort($,se),ct=de.enabled===!1||de.isPresenting===!1||de.hasDepthSensing()===!1,ct&&ce.addToRenderList(T,A),this.info.render.frame++,it===!0&&Ae.beginShadows();const X=E.state.shadowsArray;if(me.render(X,A,z),it===!0&&Ae.endShadows(),this.info.autoReset===!0&&this.info.reset(),(G&&C.hasRenderPass())===!1){const Ee=T.opaque,we=T.transmissive;if(E.setupLights(),z.isArrayCamera){const Fe=z.cameras;if(we.length>0)for(let Oe=0,Je=Fe.length;Oe<Je;Oe++){const rt=Fe[Oe];St(Ee,we,A,rt)}ct&&ce.render(A);for(let Oe=0,Je=Fe.length;Oe<Je;Oe++){const rt=Fe[Oe];Ct(T,A,rt,rt.viewport)}}else we.length>0&&St(Ee,we,A,z),ct&&ce.render(A),Ct(T,A,z)}N!==null&&H===0&&(M.updateMultisampleRenderTarget(N),M.updateRenderTargetMipmap(N)),G&&C.end(b),A.isScene===!0&&A.onAfterRender(b,A,z),le.resetDefaultState(),B=-1,I=null,S.pop(),S.length>0?(E=S[S.length-1],M.setTextureUnits(E.state.textureUnits),it===!0&&Ae.setGlobalState(b.clippingPlanes,E.state.camera)):E=null,w.pop(),w.length>0?T=w[w.length-1]:T=null,L!==null&&L.renderEnd()};function Lt(A,z,q,G){if(A.visible===!1)return;if(A.layers.test(z.layers)){if(A.isGroup)q=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(z);else if(A.isLightProbeGrid)E.pushLightProbeGrid(A);else if(A.isLight)E.pushLight(A),A.castShadow&&E.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||Ie.intersectsSprite(A)){G&&Ge.setFromMatrixPosition(A.matrixWorld).applyMatrix4(We);const Ee=pe.update(A),we=A.material;we.visible&&T.push(A,Ee,we,q,Ge.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||Ie.intersectsObject(A))){const Ee=pe.update(A),we=A.material;if(G&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Ge.copy(A.boundingSphere.center)):(Ee.boundingSphere===null&&Ee.computeBoundingSphere(),Ge.copy(Ee.boundingSphere.center)),Ge.applyMatrix4(A.matrixWorld).applyMatrix4(We)),Array.isArray(we)){const Fe=Ee.groups;for(let Oe=0,Je=Fe.length;Oe<Je;Oe++){const rt=Fe[Oe],Be=we[rt.materialIndex];Be&&Be.visible&&T.push(A,Ee,Be,q,Ge.z,rt)}}else we.visible&&T.push(A,Ee,we,q,Ge.z,null)}}const ye=A.children;for(let Ee=0,we=ye.length;Ee<we;Ee++)Lt(ye[Ee],z,q,G)}function Ct(A,z,q,G){const{opaque:X,transmissive:ye,transparent:Ee}=A;E.setupLightsView(q),it===!0&&Ae.setGlobalState(b.clippingPlanes,q),G&&_e.viewport(F.copy(G)),X.length>0&&Fn(X,z,q),ye.length>0&&Fn(ye,z,q),Ee.length>0&&Fn(Ee,z,q),_e.buffers.depth.setTest(!0),_e.buffers.depth.setMask(!0),_e.buffers.color.setMask(!0),_e.setPolygonOffset(!1)}function St(A,z,q,G){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[G.id]===void 0){const Be=qe.has("EXT_color_buffer_half_float")||qe.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[G.id]=new Wr(1,1,{generateMipmaps:!0,type:Be?ys:Ii,minFilter:Bo,samples:Math.max(4,pt.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:mt.workingColorSpace})}const ye=E.state.transmissionRenderTarget[G.id],Ee=G.viewport||F;ye.setSize(Ee.z*b.transmissionResolutionScale,Ee.w*b.transmissionResolutionScale);const we=b.getRenderTarget(),Fe=b.getActiveCubeFace(),Oe=b.getActiveMipmapLevel();b.setRenderTarget(ye),b.getClearColor(ee),ue=b.getClearAlpha(),ue<1&&b.setClearColor(16777215,.5),b.clear(),ct&&ce.render(q);const Je=b.toneMapping;b.toneMapping=Gr;const rt=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),E.setupLightsView(G),it===!0&&Ae.setGlobalState(b.clippingPlanes,G),Fn(A,q,G),M.updateMultisampleRenderTarget(ye),M.updateRenderTargetMipmap(ye),qe.has("WEBGL_multisampled_render_to_texture")===!1){let Be=!1;for(let wt=0,tn=z.length;wt<tn;wt++){const $t=z[wt],{object:Rt,geometry:On,material:be,group:Ti}=$t;if(be.side===Ir&&Rt.layers.test(G.layers)){const vt=be.side;be.side=yi,be.needsUpdate=!0,Nt(Rt,q,G,On,be,Ti),be.side=vt,be.needsUpdate=!0,Be=!0}}Be===!0&&(M.updateMultisampleRenderTarget(ye),M.updateRenderTargetMipmap(ye))}b.setRenderTarget(we,Fe,Oe),b.setClearColor(ee,ue),rt!==void 0&&(G.viewport=rt),b.toneMapping=Je}function Fn(A,z,q){const G=z.isScene===!0?z.overrideMaterial:null;for(let X=0,ye=A.length;X<ye;X++){const Ee=A[X],{object:we,geometry:Fe,group:Oe}=Ee;let Je=Ee.material;Je.allowOverride===!0&&G!==null&&(Je=G),we.layers.test(q.layers)&&Nt(we,z,q,Fe,Je,Oe)}}function Nt(A,z,q,G,X,ye){A.onBeforeRender(b,z,q,G,X,ye),A.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),X.onBeforeRender(b,z,q,G,A,ye),X.transparent===!0&&X.side===Ir&&X.forceSinglePass===!1?(X.side=yi,X.needsUpdate=!0,b.renderBufferDirect(q,z,G,X,A,ye),X.side=po,X.needsUpdate=!0,b.renderBufferDirect(q,z,G,X,A,ye),X.side=Ir):b.renderBufferDirect(q,z,G,X,A,ye),A.onAfterRender(b,z,q,G,X,ye)}function Sn(A,z,q){z.isScene!==!0&&(z=j);const G=R.get(A),X=E.state.lights,ye=E.state.shadowsArray,Ee=X.state.version,we=ie.getParameters(A,X.state,ye,z,q,E.state.lightProbeGridArray),Fe=ie.getProgramCacheKey(we);let Oe=G.programs;G.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?z.environment:null,G.fog=z.fog;const Je=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;G.envMap=V.get(A.envMap||G.environment,Je),G.envMapRotation=G.environment!==null&&A.envMap===null?z.environmentRotation:A.envMapRotation,Oe===void 0&&(A.addEventListener("dispose",ze),Oe=new Map,G.programs=Oe);let rt=Oe.get(Fe);if(rt!==void 0){if(G.currentProgram===rt&&G.lightsStateVersion===Ee)return ln(A,we),rt}else we.uniforms=ie.getUniforms(A),L!==null&&A.isNodeMaterial&&L.build(A,q,we),A.onBeforeCompile(we,b),rt=ie.acquireProgram(we,Fe),Oe.set(Fe,rt),G.uniforms=we.uniforms;const Be=G.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Be.clippingPlanes=Ae.uniform),ln(A,we),G.needsLights=ca(A),G.lightsStateVersion=Ee,G.needsLights&&(Be.ambientLightColor.value=X.state.ambient,Be.lightProbe.value=X.state.probe,Be.directionalLights.value=X.state.directional,Be.directionalLightShadows.value=X.state.directionalShadow,Be.spotLights.value=X.state.spot,Be.spotLightShadows.value=X.state.spotShadow,Be.rectAreaLights.value=X.state.rectArea,Be.ltc_1.value=X.state.rectAreaLTC1,Be.ltc_2.value=X.state.rectAreaLTC2,Be.pointLights.value=X.state.point,Be.pointLightShadows.value=X.state.pointShadow,Be.hemisphereLights.value=X.state.hemi,Be.directionalShadowMatrix.value=X.state.directionalShadowMatrix,Be.spotLightMatrix.value=X.state.spotLightMatrix,Be.spotLightMap.value=X.state.spotLightMap,Be.pointShadowMatrix.value=X.state.pointShadowMatrix),G.lightProbeGrid=E.state.lightProbeGridArray.length>0,G.currentProgram=rt,G.uniformsList=null,rt}function Ei(A){if(A.uniformsList===null){const z=A.currentProgram.getUniforms();A.uniformsList=Qf.seqWithValue(z.seq,A.uniforms)}return A.uniformsList}function ln(A,z){const q=R.get(A);q.outputColorSpace=z.outputColorSpace,q.batching=z.batching,q.batchingColor=z.batchingColor,q.instancing=z.instancing,q.instancingColor=z.instancingColor,q.instancingMorph=z.instancingMorph,q.skinning=z.skinning,q.morphTargets=z.morphTargets,q.morphNormals=z.morphNormals,q.morphColors=z.morphColors,q.morphTargetsCount=z.morphTargetsCount,q.numClippingPlanes=z.numClippingPlanes,q.numIntersection=z.numClipIntersection,q.vertexAlphas=z.vertexAlphas,q.vertexTangents=z.vertexTangents,q.toneMapping=z.toneMapping}function hn(A,z){if(A.length===0)return null;if(A.length===1)return A[0].texture!==null?A[0]:null;y.setFromMatrixPosition(z.matrixWorld);for(let q=0,G=A.length;q<G;q++){const X=A[q];if(X.texture!==null&&X.boundingBox.containsPoint(y))return X}return null}function yn(A,z,q,G,X){z.isScene!==!0&&(z=j),M.resetTextureUnits();const ye=z.fog,Ee=G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial?z.environment:null,we=N===null?b.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:mt.workingColorSpace,Fe=G.isMeshStandardMaterial||G.isMeshLambertMaterial&&!G.envMap||G.isMeshPhongMaterial&&!G.envMap,Oe=V.get(G.envMap||Ee,Fe),Je=G.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,rt=!!q.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Be=!!q.morphAttributes.position,wt=!!q.morphAttributes.normal,tn=!!q.morphAttributes.color;let $t=Gr;G.toneMapped&&(N===null||N.isXRRenderTarget===!0)&&($t=b.toneMapping);const Rt=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,On=Rt!==void 0?Rt.length:0,be=R.get(G),Ti=E.state.lights;if(it===!0&&(Re===!0||A!==I)){const It=A===I&&G.id===B;Ae.setState(G,A,It)}let vt=!1;G.version===be.__version?(be.needsLights&&be.lightsStateVersion!==Ti.state.version||be.outputColorSpace!==we||X.isBatchedMesh&&be.batching===!1||!X.isBatchedMesh&&be.batching===!0||X.isBatchedMesh&&be.batchingColor===!0&&X.colorTexture===null||X.isBatchedMesh&&be.batchingColor===!1&&X.colorTexture!==null||X.isInstancedMesh&&be.instancing===!1||!X.isInstancedMesh&&be.instancing===!0||X.isSkinnedMesh&&be.skinning===!1||!X.isSkinnedMesh&&be.skinning===!0||X.isInstancedMesh&&be.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&be.instancingColor===!1&&X.instanceColor!==null||X.isInstancedMesh&&be.instancingMorph===!0&&X.morphTexture===null||X.isInstancedMesh&&be.instancingMorph===!1&&X.morphTexture!==null||be.envMap!==Oe||G.fog===!0&&be.fog!==ye||be.numClippingPlanes!==void 0&&(be.numClippingPlanes!==Ae.numPlanes||be.numIntersection!==Ae.numIntersection)||be.vertexAlphas!==Je||be.vertexTangents!==rt||be.morphTargets!==Be||be.morphNormals!==wt||be.morphColors!==tn||be.toneMapping!==$t||be.morphTargetsCount!==On||!!be.lightProbeGrid!=E.state.lightProbeGridArray.length>0)&&(vt=!0):(vt=!0,be.__version=G.version);let Yi=be.currentProgram;vt===!0&&(Yi=Sn(G,z,X),L&&G.isNodeMaterial&&L.onUpdateProgram(G,Yi,be));let Er=!1,Ts=!1,fa=!1;const bt=Yi.getUniforms(),nn=be.uniforms;if(_e.useProgram(Yi.program)&&(Er=!0,Ts=!0,fa=!0),G.id!==B&&(B=G.id,Ts=!0),be.needsLights){const It=hn(E.state.lightProbeGridArray,X);be.lightProbeGrid!==It&&(be.lightProbeGrid=It,Ts=!0)}if(Er||I!==A){_e.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),bt.setValue(k,"projectionMatrix",A.projectionMatrix),bt.setValue(k,"viewMatrix",A.matrixWorldInverse);const As=bt.map.cameraPosition;As!==void 0&&As.setValue(k,tt.setFromMatrixPosition(A.matrixWorld)),pt.logarithmicDepthBuffer&&bt.setValue(k,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&bt.setValue(k,"isOrthographic",A.isOrthographicCamera===!0),I!==A&&(I=A,Ts=!0,fa=!0)}if(be.needsLights&&(Ti.state.directionalShadowMap.length>0&&bt.setValue(k,"directionalShadowMap",Ti.state.directionalShadowMap,M),Ti.state.spotShadowMap.length>0&&bt.setValue(k,"spotShadowMap",Ti.state.spotShadowMap,M),Ti.state.pointShadowMap.length>0&&bt.setValue(k,"pointShadowMap",Ti.state.pointShadowMap,M)),X.isSkinnedMesh){bt.setOptional(k,X,"bindMatrix"),bt.setOptional(k,X,"bindMatrixInverse");const It=X.skeleton;It&&(It.boneTexture===null&&It.computeBoneTexture(),bt.setValue(k,"boneTexture",It.boneTexture,M))}X.isBatchedMesh&&(bt.setOptional(k,X,"batchingTexture"),bt.setValue(k,"batchingTexture",X._matricesTexture,M),bt.setOptional(k,X,"batchingIdTexture"),bt.setValue(k,"batchingIdTexture",X._indirectTexture,M),bt.setOptional(k,X,"batchingColorTexture"),X._colorsTexture!==null&&bt.setValue(k,"batchingColorTexture",X._colorsTexture,M));const ws=q.morphAttributes;if((ws.position!==void 0||ws.normal!==void 0||ws.color!==void 0)&&xe.update(X,q,Yi),(Ts||be.receiveShadow!==X.receiveShadow)&&(be.receiveShadow=X.receiveShadow,bt.setValue(k,"receiveShadow",X.receiveShadow)),(G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial)&&G.envMap===null&&z.environment!==null&&(nn.envMapIntensity.value=z.environmentIntensity),nn.dfgLUT!==void 0&&(nn.dfgLUT.value=RL()),Ts){if(bt.setValue(k,"toneMappingExposure",b.toneMappingExposure),be.needsLights&&Kr(nn,fa),ye&&G.fog===!0&&K.refreshFogUniforms(nn,ye),K.refreshMaterialUniforms(nn,G,Ce,Le,E.state.transmissionRenderTarget[A.id]),be.needsLights&&be.lightProbeGrid){const It=be.lightProbeGrid;nn.probesSH.value=It.texture,nn.probesMin.value.copy(It.boundingBox.min),nn.probesMax.value.copy(It.boundingBox.max),nn.probesResolution.value.copy(It.resolution)}Qf.upload(k,Ei(be),nn,M)}if(G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(Qf.upload(k,Ei(be),nn,M),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&bt.setValue(k,"center",X.center),bt.setValue(k,"modelViewMatrix",X.modelViewMatrix),bt.setValue(k,"normalMatrix",X.normalMatrix),bt.setValue(k,"modelMatrix",X.matrixWorld),G.uniformsGroups!==void 0){const It=G.uniformsGroups;for(let As=0,da=It.length;As<da;As++){const D0=It[As];Q.update(D0,Yi),Q.bind(D0,Yi)}}return Yi}function Kr(A,z){A.ambientLightColor.needsUpdate=z,A.lightProbe.needsUpdate=z,A.directionalLights.needsUpdate=z,A.directionalLightShadows.needsUpdate=z,A.pointLights.needsUpdate=z,A.pointLightShadows.needsUpdate=z,A.spotLights.needsUpdate=z,A.spotLightShadows.needsUpdate=z,A.rectAreaLights.needsUpdate=z,A.hemisphereLights.needsUpdate=z}function ca(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return O},this.getActiveMipmapLevel=function(){return H},this.getRenderTarget=function(){return N},this.setRenderTargetTextures=function(A,z,q){const G=R.get(A);G.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,G.__autoAllocateDepthBuffer===!1&&(G.__useRenderToTexture=!1),R.get(A.texture).__webglTexture=z,R.get(A.depthTexture).__webglTexture=G.__autoAllocateDepthBuffer?void 0:q,G.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,z){const q=R.get(A);q.__webglFramebuffer=z,q.__useDefaultFramebuffer=z===void 0};const Mn=k.createFramebuffer();this.setRenderTarget=function(A,z=0,q=0){N=A,O=z,H=q;let G=null,X=!1,ye=!1;if(A){const we=R.get(A);if(we.__useDefaultFramebuffer!==void 0){_e.bindFramebuffer(k.FRAMEBUFFER,we.__webglFramebuffer),F.copy(A.viewport),W.copy(A.scissor),P=A.scissorTest,_e.viewport(F),_e.scissor(W),_e.setScissorTest(P),B=-1;return}else if(we.__webglFramebuffer===void 0)M.setupRenderTarget(A);else if(we.__hasExternalTextures)M.rebindTextures(A,R.get(A.texture).__webglTexture,R.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const Je=A.depthTexture;if(we.__boundDepthTexture!==Je){if(Je!==null&&R.has(Je)&&(A.width!==Je.image.width||A.height!==Je.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");M.setupDepthRenderbuffer(A)}}const Fe=A.texture;(Fe.isData3DTexture||Fe.isDataArrayTexture||Fe.isCompressedArrayTexture)&&(ye=!0);const Oe=R.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Oe[z])?G=Oe[z][q]:G=Oe[z],X=!0):A.samples>0&&M.useMultisampledRTT(A)===!1?G=R.get(A).__webglMultisampledFramebuffer:Array.isArray(Oe)?G=Oe[q]:G=Oe,F.copy(A.viewport),W.copy(A.scissor),P=A.scissorTest}else F.copy(ae).multiplyScalar(Ce).floor(),W.copy(Pe).multiplyScalar(Ce).floor(),P=He;if(q!==0&&(G=Mn),_e.bindFramebuffer(k.FRAMEBUFFER,G)&&_e.drawBuffers(A,G),_e.viewport(F),_e.scissor(W),_e.setScissorTest(P),X){const we=R.get(A.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+z,we.__webglTexture,q)}else if(ye){const we=z;for(let Fe=0;Fe<A.textures.length;Fe++){const Oe=R.get(A.textures[Fe]);k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0+Fe,Oe.__webglTexture,q,we)}}else if(A!==null&&q!==0){const we=R.get(A.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,we.__webglTexture,q)}B=-1},this.readRenderTargetPixels=function(A,z,q,G,X,ye,Ee,we=0){if(!(A&&A.isWebGLRenderTarget)){_t("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Fe=R.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ee!==void 0&&(Fe=Fe[Ee]),Fe){_e.bindFramebuffer(k.FRAMEBUFFER,Fe);try{const Oe=A.textures[we],Je=Oe.format,rt=Oe.type;if(A.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+we),!pt.textureFormatReadable(Je)){_t("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!pt.textureTypeReadable(rt)){_t("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=A.width-G&&q>=0&&q<=A.height-X&&k.readPixels(z,q,G,X,U.convert(Je),U.convert(rt),ye)}finally{const Oe=N!==null?R.get(N).__webglFramebuffer:null;_e.bindFramebuffer(k.FRAMEBUFFER,Oe)}}},this.readRenderTargetPixelsAsync=async function(A,z,q,G,X,ye,Ee,we=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Fe=R.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ee!==void 0&&(Fe=Fe[Ee]),Fe)if(z>=0&&z<=A.width-G&&q>=0&&q<=A.height-X){_e.bindFramebuffer(k.FRAMEBUFFER,Fe);const Oe=A.textures[we],Je=Oe.format,rt=Oe.type;if(A.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+we),!pt.textureFormatReadable(Je))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!pt.textureTypeReadable(rt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Be=k.createBuffer();k.bindBuffer(k.PIXEL_PACK_BUFFER,Be),k.bufferData(k.PIXEL_PACK_BUFFER,ye.byteLength,k.STREAM_READ),k.readPixels(z,q,G,X,U.convert(Je),U.convert(rt),0);const wt=N!==null?R.get(N).__webglFramebuffer:null;_e.bindFramebuffer(k.FRAMEBUFFER,wt);const tn=k.fenceSync(k.SYNC_GPU_COMMANDS_COMPLETE,0);return k.flush(),await GR(k,tn,4),k.bindBuffer(k.PIXEL_PACK_BUFFER,Be),k.getBufferSubData(k.PIXEL_PACK_BUFFER,0,ye),k.deleteBuffer(Be),k.deleteSync(tn),ye}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,z=null,q=0){const G=Math.pow(2,-q),X=Math.floor(A.image.width*G),ye=Math.floor(A.image.height*G),Ee=z!==null?z.x:0,we=z!==null?z.y:0;M.setTexture2D(A,0),k.copyTexSubImage2D(k.TEXTURE_2D,q,0,0,Ee,we,X,ye),_e.unbindTexture()};const en=k.createFramebuffer(),Xi=k.createFramebuffer();this.copyTextureToTexture=function(A,z,q=null,G=null,X=0,ye=0){let Ee,we,Fe,Oe,Je,rt,Be,wt,tn;const $t=A.isCompressedTexture?A.mipmaps[ye]:A.image;if(q!==null)Ee=q.max.x-q.min.x,we=q.max.y-q.min.y,Fe=q.isBox3?q.max.z-q.min.z:1,Oe=q.min.x,Je=q.min.y,rt=q.isBox3?q.min.z:0;else{const nn=Math.pow(2,-X);Ee=Math.floor($t.width*nn),we=Math.floor($t.height*nn),A.isDataArrayTexture?Fe=$t.depth:A.isData3DTexture?Fe=Math.floor($t.depth*nn):Fe=1,Oe=0,Je=0,rt=0}G!==null?(Be=G.x,wt=G.y,tn=G.z):(Be=0,wt=0,tn=0);const Rt=U.convert(z.format),On=U.convert(z.type);let be;z.isData3DTexture?(M.setTexture3D(z,0),be=k.TEXTURE_3D):z.isDataArrayTexture||z.isCompressedArrayTexture?(M.setTexture2DArray(z,0),be=k.TEXTURE_2D_ARRAY):(M.setTexture2D(z,0),be=k.TEXTURE_2D),_e.activeTexture(k.TEXTURE0),_e.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,z.flipY),_e.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),_e.pixelStorei(k.UNPACK_ALIGNMENT,z.unpackAlignment);const Ti=_e.getParameter(k.UNPACK_ROW_LENGTH),vt=_e.getParameter(k.UNPACK_IMAGE_HEIGHT),Yi=_e.getParameter(k.UNPACK_SKIP_PIXELS),Er=_e.getParameter(k.UNPACK_SKIP_ROWS),Ts=_e.getParameter(k.UNPACK_SKIP_IMAGES);_e.pixelStorei(k.UNPACK_ROW_LENGTH,$t.width),_e.pixelStorei(k.UNPACK_IMAGE_HEIGHT,$t.height),_e.pixelStorei(k.UNPACK_SKIP_PIXELS,Oe),_e.pixelStorei(k.UNPACK_SKIP_ROWS,Je),_e.pixelStorei(k.UNPACK_SKIP_IMAGES,rt);const fa=A.isDataArrayTexture||A.isData3DTexture,bt=z.isDataArrayTexture||z.isData3DTexture;if(A.isDepthTexture){const nn=R.get(A),ws=R.get(z),It=R.get(nn.__renderTarget),As=R.get(ws.__renderTarget);_e.bindFramebuffer(k.READ_FRAMEBUFFER,It.__webglFramebuffer),_e.bindFramebuffer(k.DRAW_FRAMEBUFFER,As.__webglFramebuffer);for(let da=0;da<Fe;da++)fa&&(k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,R.get(A).__webglTexture,X,rt+da),k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,R.get(z).__webglTexture,ye,tn+da)),k.blitFramebuffer(Oe,Je,Ee,we,Be,wt,Ee,we,k.DEPTH_BUFFER_BIT,k.NEAREST);_e.bindFramebuffer(k.READ_FRAMEBUFFER,null),_e.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else if(X!==0||A.isRenderTargetTexture||R.has(A)){const nn=R.get(A),ws=R.get(z);_e.bindFramebuffer(k.READ_FRAMEBUFFER,en),_e.bindFramebuffer(k.DRAW_FRAMEBUFFER,Xi);for(let It=0;It<Fe;It++)fa?k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,nn.__webglTexture,X,rt+It):k.framebufferTexture2D(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,nn.__webglTexture,X),bt?k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,ws.__webglTexture,ye,tn+It):k.framebufferTexture2D(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,ws.__webglTexture,ye),X!==0?k.blitFramebuffer(Oe,Je,Ee,we,Be,wt,Ee,we,k.COLOR_BUFFER_BIT,k.NEAREST):bt?k.copyTexSubImage3D(be,ye,Be,wt,tn+It,Oe,Je,Ee,we):k.copyTexSubImage2D(be,ye,Be,wt,Oe,Je,Ee,we);_e.bindFramebuffer(k.READ_FRAMEBUFFER,null),_e.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else bt?A.isDataTexture||A.isData3DTexture?k.texSubImage3D(be,ye,Be,wt,tn,Ee,we,Fe,Rt,On,$t.data):z.isCompressedArrayTexture?k.compressedTexSubImage3D(be,ye,Be,wt,tn,Ee,we,Fe,Rt,$t.data):k.texSubImage3D(be,ye,Be,wt,tn,Ee,we,Fe,Rt,On,$t):A.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,ye,Be,wt,Ee,we,Rt,On,$t.data):A.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,ye,Be,wt,$t.width,$t.height,Rt,$t.data):k.texSubImage2D(k.TEXTURE_2D,ye,Be,wt,Ee,we,Rt,On,$t);_e.pixelStorei(k.UNPACK_ROW_LENGTH,Ti),_e.pixelStorei(k.UNPACK_IMAGE_HEIGHT,vt),_e.pixelStorei(k.UNPACK_SKIP_PIXELS,Yi),_e.pixelStorei(k.UNPACK_SKIP_ROWS,Er),_e.pixelStorei(k.UNPACK_SKIP_IMAGES,Ts),ye===0&&z.generateMipmaps&&k.generateMipmap(be),_e.unbindTexture()},this.initRenderTarget=function(A){R.get(A).__webglFramebuffer===void 0&&M.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?M.setTextureCube(A,0):A.isData3DTexture?M.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?M.setTexture2DArray(A,0):M.setTexture2D(A,0),_e.unbindTexture()},this.resetState=function(){O=0,H=0,N=null,_e.reset(),le.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Br}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=mt._getDrawingBufferColorSpace(e),t.unpackColorSpace=mt._getUnpackColorSpace()}}function PL(n){const e=new bL({canvas:n,antialias:!0,alpha:!0,powerPreference:"high-performance"});e.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),e.outputColorSpace=si,e.toneMapping=h0,e.toneMappingExposure=1.25,e.transmissionResolutionScale=.5;const t=new sb,i=new Ji(30,1,.1,100);i.position.set(0,0,7);const r=new Gg(e),s=C(),o=r.fromEquirectangular(s);t.environment=o.texture,t.add(new Pb(16777215,.06));const a=new Ap(16777215,2.6);a.position.set(.4,6,3),t.add(a);const l=new Ap(12374783,1.4);l.position.set(-3,1,-4),t.add(l);const u=new Ap(16770736,1);u.position.set(2.6,-2.4,2.6),t.add(u);const c=new wb({color:16777215,metalness:0,roughness:0,transmission:.92,ior:2.417,thickness:.5,dispersion:6,attenuationColor:new ht(12574975),attenuationDistance:1.2,iridescence:.4,iridescenceIOR:1.4,clearcoat:1,clearcoatRoughness:0,envMapIntensity:3.2,transparent:!0,side:Ir}),d=new qr(D(),c);d.rotation.x=-.16;const f=new mu;f.add(d),t.add(f);const h=new fb(new A1({map:b(),color:12576511,transparent:!0,opacity:0,blending:Zm,depthWrite:!1}));h.scale.set(2.6,2.6,1),h.position.set(0,0,-1),f.add(h);let m=0,v=0,_=0,p=0,g=0;const x=window.matchMedia("(prefers-reduced-motion: reduce)").matches,y=new Nb;let T=0,E=!1;function w(){if(E)return;const L=Math.min(y.getDelta(),.05);d.rotation.y+=L*(x?.1:.42),p+=(v-p)*.05,g+=(_-g)*.05,f.rotation.y=p*.5,f.rotation.x=-.06+g*.4;const O=1.3*Math.max(1e-4,m);f.scale.setScalar(O),c.opacity=m,h.material.opacity=m*.55,f.visible=m>.02,e.render(t,i),T=requestAnimationFrame(w)}T=requestAnimationFrame(w);function S(){const L=n.clientWidth||1,O=n.clientHeight||1;e.setSize(L,O,!1),i.aspect=L/O,i.updateProjectionMatrix(),f.position.x=L/O>1.1?1.35:0}return S(),{setReveal:L=>{m=L<0?0:L>1?1:L},setPointer:(L,O)=>{v=L,_=O},resize:S,destroy:()=>{E=!0,cancelAnimationFrame(T),s.dispose(),o.dispose(),r.dispose(),c.dispose(),d.geometry.dispose(),h.material.map.dispose(),h.material.dispose(),e.dispose()}};function C(){const L=document.createElement("canvas");L.width=512,L.height=256;const O=L.getContext("2d"),H=O.createLinearGradient(0,0,0,256);H.addColorStop(0,"#16223a"),H.addColorStop(.5,"#070b12"),H.addColorStop(1,"#020306"),O.fillStyle=H,O.fillRect(0,0,512,256);let N=1234567;const B=()=>(N=N*1664525+1013904223>>>0,N/4294967296);O.fillStyle="#ffffff";for(let F=0;F<70;F++){const W=B()*512,P=B()*160,ee=1.5+B()*6;O.globalAlpha=.45+B()*.55,O.beginPath(),O.arc(W,P,ee,0,7),O.fill()}O.globalAlpha=1;for(const F of[[120,55,30],[400,80,26],[256,38,22]])O.beginPath(),O.arc(F[0],F[1],F[2],0,7),O.fill();O.fillStyle="rgba(50,255,160,0.95)",O.beginPath(),O.arc(90,150,30,0,7),O.fill(),O.fillStyle="rgba(90,150,255,1.0)",O.beginPath(),O.arc(380,120,34,0,7),O.fill(),O.fillStyle="rgba(255,220,160,0.85)",O.beginPath(),O.arc(240,70,20,0,7),O.fill();const I=new qx(L);return I.mapping=jf,I.colorSpace=si,I}function b(){const L=document.createElement("canvas");L.width=256,L.height=256;const O=L.getContext("2d"),H=O.createRadialGradient(128,128,0,128,128,128);H.addColorStop(0,"rgba(255,255,255,0.95)"),H.addColorStop(.22,"rgba(180,220,255,0.5)"),H.addColorStop(.55,"rgba(80,140,255,0.13)"),H.addColorStop(1,"rgba(0,0,0,0)"),O.fillStyle=H,O.fillRect(0,0,256,256);const N=new qx(L);return N.colorSpace=si,N}function D(){const O=(ve,Le)=>{const Ce=[];for(let $=0;$<=16;$++){const se=$/16*Math.PI*2;Ce.push([Math.cos(se)*ve,Le,Math.sin(se)*ve])}return Ce},H=O(.53,.34),N=O(.72,.26),B=O(1,0),I=O(.52,-.5),F=[0,.34,0],W=[0,-1.1,0],P=[],ee=(ve,Le,Ce)=>{P.push(ve[0],ve[1],ve[2],Le[0],Le[1],Le[2],Ce[0],Ce[1],Ce[2])};for(let ve=0;ve<16;ve++)ee(F,H[ve+1],H[ve]),ee(H[ve],N[ve],N[ve+1]),ee(H[ve],N[ve+1],H[ve+1]),ee(N[ve],B[ve],B[ve+1]),ee(N[ve],B[ve+1],N[ve+1]),ee(B[ve+1],I[ve+1],I[ve]),ee(B[ve+1],I[ve],B[ve]),ee(I[ve],W,I[ve+1]);const ue=new Mr;return ue.setAttribute("position",new Xr(P,3)),ue.computeVertexNormals(),ue}}const Np="https://calendly.com/kamran1-sou9/new-meeting",DL=[{idx:"01",name:"Lead-Gen Systems That Convert",accent:"var(--emerald)",img:"img/03-emerald.png",desc:"We dig your next customer out of the noise and turn them into a sale. Targeting, multi-channel outreach, AI lead-scoring and CRM automation — engineered as one system, running on autopilot."},{idx:"02",name:"UX/UI + Full-Stack Deployment",accent:"var(--sapphire-facet)",img:"img/05-diamond.png",desc:"The front-end that closes them. Product design, web apps and full-stack builds — designed, engineered and shipped to production. (Exhibit A: this page.)"}],Tf="./";function LL(){const n=hr.useRef(null),e=hr.useRef(null),t=hr.useRef(null),i=hr.useRef(null),r=hr.useRef(null),s=hr.useRef(null),o=hr.useRef(null),a=hr.useRef(null);return hr.useEffect(()=>{Cr.registerPlugin($e);const l=n.current;let u=!1;const c=window.matchMedia("(prefers-reduced-motion: reduce)").matches,d=window.matchMedia("(max-width: 760px)").matches,f=c||d,h=c||d,m=new lR({duration:1.1,smoothWheel:!0,wheelMultiplier:1,touchMultiplier:1.5});m.on("scroll",$e.update);const v=T=>m.raf(T*1e3);Cr.ticker.add(v),Cr.ticker.lagSmoothing(0),window.__lenis=m,window.__ST=$e,window.__bgv=l;const _=Cr.context(()=>{Cr.utils.toArray("[data-reveal]").forEach(E=>{Cr.from(E,{opacity:0,y:42,duration:.9,ease:"power3.out",scrollTrigger:{trigger:E,start:"top 82%",toggleActions:"play none none reverse"}})}),d||$e.create({trigger:"#ingredients",start:"top top",end:"+=110%",pin:!0,pinSpacing:!0});const T=E=>Math.round(E).toLocaleString("en-US")+"+";[{ref:i,to:88e3},{ref:r,to:3e4},{ref:s,to:1700}].forEach(({ref:E,to:w})=>{const S={v:0};Cr.to(S,{v:w,duration:1.6,ease:"power1.out",scrollTrigger:{trigger:"#ingredients",start:"top 60%",toggleActions:"play none none none"},onUpdate:()=>{E.current&&(E.current.textContent=T(S.v))}})})});if(!f&&l){const T=()=>{if(u)return;const E=isFinite(l.duration)&&l.duration>0?l.duration:12,w={t:0};Cr.to(w,{t:E,ease:"none",scrollTrigger:{trigger:document.body,start:"top top",end:"bottom bottom",scrub:1.1},onUpdate:()=>{if(l.readyState>=2){const S=Math.min(E-.04,Math.max(0,w.t));if(Math.abs(l.currentTime-S)>.016666666666666666)try{l.currentTime=S}catch{}}}}),$e.refresh();try{l.currentTime=.03}catch{}};l.pause(),isFinite(l.duration)&&l.duration>0?T():l.addEventListener("loadedmetadata",T,{once:!0})}if(d&&!c){const T=["00-hero-surface","01-dirt","02-dig","03-emerald","04-sapphire","05-diamond","06-cta-resolve"].map(S=>`${Tf}img/m/${S}.jpg`);T.forEach(S=>{const C=new Image;C.src=S});const E=(S,C)=>{S&&S.dataset.src!==C&&(S.style.backgroundImage=`url(${C})`,S.dataset.src=C)},w=()=>{const S=document.body.scrollHeight-window.innerHeight,b=(S>0?Math.min(1,Math.max(0,window.scrollY/S)):0)*(T.length-1),D=Math.floor(b);E(o.current,T[D]),E(a.current,T[Math.min(T.length-1,D+1)]),a.current&&(a.current.style.opacity=String(b-D))};m.on("scroll",w),w()}let p=null,g=null,x=null;!h&&t.current&&(p=PL(t.current),window.__gl=p,$e.create({trigger:"#experience",start:"top 80%",end:"top 30%",onUpdate:T=>{p.setReveal(T.progress),e.current&&(e.current.style.opacity=String(Math.max(0,1-T.progress*1.08)))}}),g=T=>{p.setPointer(T.clientX/window.innerWidth*2-1,-(T.clientY/window.innerHeight*2-1))},x=()=>p.resize(),window.addEventListener("pointermove",g,{passive:!0}),window.addEventListener("resize",x)),$e.refresh();const y=setTimeout(()=>$e.refresh(),700);return document.fonts&&document.fonts.ready&&document.fonts.ready.then(()=>{u||$e.refresh()}),()=>{u=!0,clearTimeout(y),Cr.ticker.remove(v),_.revert(),$e.getAll().forEach(T=>T.kill()),m.destroy(),g&&window.removeEventListener("pointermove",g),x&&window.removeEventListener("resize",x),p&&p.destroy(),delete window.__lenis,delete window.__ST,delete window.__bgv,delete window.__gl}},[]),ge.jsxs(ge.Fragment,{children:[ge.jsxs("div",{className:"bg-layer",ref:e,children:[ge.jsx("video",{ref:n,className:"bg-video",muted:!0,playsInline:!0,preload:"auto",poster:`${Tf}img/00-hero-surface.png`,children:ge.jsx("source",{src:`${Tf}bg.mp4?v=enc3`,type:"video/mp4"})}),ge.jsxs("div",{className:"bg-static","aria-hidden":"true",children:[ge.jsx("div",{className:"bg-still",ref:o}),ge.jsx("div",{className:"bg-still bg-still-top",ref:a})]})]}),ge.jsx("div",{className:"bg-tint","aria-hidden":"true"}),ge.jsx("canvas",{ref:t,className:"gl-canvas","aria-hidden":"true"}),ge.jsxs("nav",{className:"nav",children:[ge.jsx("a",{className:"wm",href:"#home",children:"Acquaint."}),ge.jsxs("div",{className:"links",children:[ge.jsx("a",{href:"#catalog",children:"Systems"}),ge.jsx("a",{href:"#ingredients",children:"Work"}),ge.jsx("a",{href:"#split",children:"Approach"}),ge.jsx("a",{className:"book",href:Np,target:"_blank",rel:"noreferrer",children:"Book a call"})]})]}),ge.jsxs("main",{className:"page",children:[ge.jsxs("section",{id:"home",className:"section",children:[ge.jsxs("div",{className:"wrap","data-reveal":!0,children:[ge.jsx("div",{className:"eyebrow",children:"AI systems + front-end"}),ge.jsx("h1",{className:"h1",children:"We live in the trenches that find your customers — and build the systems that convert them."}),ge.jsx("p",{className:"sub",children:"Acquaint Media ships production lead-gen systems and the full-stack experiences that convert them. Not campaigns. Systems that run while you sleep."}),ge.jsxs("div",{className:"cta-row",children:[ge.jsx("a",{className:"btn",href:Np,target:"_blank",rel:"noreferrer",children:"Book a call"}),ge.jsx("a",{className:"btn-ghost",href:"#cta",children:"or get a free teardown"})]})]}),ge.jsxs("div",{className:"cue",children:[ge.jsx("span",{className:"dot"})," Scroll to dig"]})]}),ge.jsx("section",{id:"split",className:"section",children:ge.jsxs("div",{className:"wrap",children:[ge.jsx("div",{className:"eyebrow","data-reveal":!0,children:"The grind"}),ge.jsx("h2",{className:"h2","data-reveal":!0,children:"Your market is mostly dirt."}),ge.jsx("p",{className:"sub","data-reveal":!0,children:"Most agencies sell you clicks and a landing page, then leave you to dig. We build the system underneath — targeting, outreach, AI scoring, and the front-end that converts — then we work it for you."})]})}),ge.jsx("section",{id:"ingredients",className:"section",children:ge.jsxs("div",{className:"wrap",children:[ge.jsx("div",{className:"eyebrow","data-reveal":!0,children:"Proof, not pitch"}),ge.jsx("h2",{className:"h2","data-reveal":!0,children:"We build the systems operators run on."}),ge.jsxs("p",{className:"sub","data-reveal":!0,children:["Years in the trenches building production AI systems and the front-ends around them — alongside operators across the industry. Automation that ",ge.jsx("strong",{children:"sources, scores, and works leads"}),", every day. Not demos."]}),ge.jsxs("div",{className:"metrics","data-reveal":!0,children:[ge.jsxs("div",{className:"metric",children:[ge.jsx("div",{className:"n",ref:i,children:"0+"}),ge.jsx("div",{className:"l",children:"prospects sourced"})]}),ge.jsxs("div",{className:"metric",children:[ge.jsx("div",{className:"n",ref:r,children:"0+"}),ge.jsx("div",{className:"l",children:"leads AI-scored & ranked"})]}),ge.jsxs("div",{className:"metric",children:[ge.jsx("div",{className:"n",ref:s,children:"0+"}),ge.jsx("div",{className:"l",children:"leads actively worked"})]})]}),ge.jsxs("p",{className:"proofline","data-reveal":!0,children:["Multi-agent funnels, full-stack builds, CRM and outreach automation — deployed and running. And the front-end? ",ge.jsx("em",{children:"You're reading one."})]})]})}),ge.jsx("section",{id:"catalog",className:"section",children:ge.jsxs("div",{className:"wrap",children:[ge.jsx("div",{className:"eyebrow","data-reveal":!0,children:"What we build"}),ge.jsx("h2",{className:"h2","data-reveal":!0,children:"Two systems. One outcome — revenue."}),ge.jsx("div",{className:"cards",children:DL.map(l=>ge.jsxs("article",{className:"card",style:{"--card-accent":l.accent},"data-reveal":!0,children:[ge.jsx("img",{className:"cv",src:`${Tf}${l.img}`,alt:"","aria-hidden":"true"}),ge.jsx("div",{className:"idx",children:l.idx}),ge.jsxs("div",{className:"card-body",children:[ge.jsx("div",{className:"name",children:l.name}),ge.jsx("p",{className:"desc",children:l.desc})]})]},l.idx))})]})}),ge.jsx("section",{id:"experience",className:"section",children:ge.jsxs("div",{className:"wrap","data-reveal":!0,children:[ge.jsx("div",{className:"eyebrow",children:"The one"}),ge.jsxs("h2",{className:"h2",children:["Then we find ",ge.jsx("span",{className:"prism-text",children:"the one."})]}),ge.jsx("p",{className:"sub",children:"Your next best customer — surfaced by the system, closed by the front-end. Not a click. A close."})]})}),ge.jsx("section",{id:"cta",className:"section",children:ge.jsxs("div",{className:"wrap","data-reveal":!0,children:[ge.jsx("h2",{className:"h2 prism-text",children:"Let's start digging."}),ge.jsx("p",{className:"sub",children:"Thirty minutes, no pitch. We'll show you where your pipeline's buried and exactly what we'd build to dig it out."}),ge.jsx("div",{className:"cta-row",children:ge.jsx("a",{className:"btn btn-prism",href:Np,target:"_blank",rel:"noreferrer",children:"Book a call"})})]})})]}),ge.jsx("footer",{id:"footer",className:"footer",children:ge.jsxs("div",{className:"wrap",children:[ge.jsxs("div",{className:"top",children:[ge.jsxs("div",{children:[ge.jsx("div",{className:"brand",children:"Acquaint."}),ge.jsx("div",{className:"tag",children:"Get people acquainted with your media."})]}),ge.jsx("div",{className:"socials",children:ge.jsx("a",{href:"https://www.linkedin.com/in/kb1017/",target:"_blank",rel:"noreferrer","aria-label":"LinkedIn",children:"LinkedIn"})})]}),ge.jsxs("div",{className:"meta",children:[ge.jsx("span",{children:"Mississauga, ON · serving Canada"}),ge.jsx("span",{children:"© 2026 Acquaint Media"})]})]})})]})}Ip.createRoot(document.getElementById("root")).render(ge.jsx(LL,{}));
