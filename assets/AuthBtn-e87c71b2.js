import{x as Ot,r as f,P as ur,j as wt,t as x}from"./index-7c6d1f90.js";import{B as It}from"./BtnTemplate-7cceecd0.js";var Ct=function(r){return Ft(r)&&!Mt(r)};function Ft(e){return!!e&&typeof e=="object"}function Mt(e){var r=Object.prototype.toString.call(e);return r==="[object RegExp]"||r==="[object Date]"||Lt(e)}var Pt=typeof Symbol=="function"&&Symbol.for,Rt=Pt?Symbol.for("react.element"):60103;function Lt(e){return e.$$typeof===Rt}function xt(e){return Array.isArray(e)?[]:{}}function pe(e,r){return r.clone!==!1&&r.isMergeableObject(e)?ae(xt(e),e,r):e}function Dt(e,r,t){return e.concat(r).map(function(n){return pe(n,t)})}function Vt(e,r,t){var n={};return t.isMergeableObject(e)&&Object.keys(e).forEach(function(i){n[i]=pe(e[i],t)}),Object.keys(r).forEach(function(i){!t.isMergeableObject(r[i])||!e[i]?n[i]=pe(r[i],t):n[i]=ae(e[i],r[i],t)}),n}function ae(e,r,t){t=t||{},t.arrayMerge=t.arrayMerge||Dt,t.isMergeableObject=t.isMergeableObject||Ct;var n=Array.isArray(r),i=Array.isArray(e),o=n===i;return o?n?t.arrayMerge(e,r,t):Vt(e,r,t):pe(r,t)}ae.all=function(r,t){if(!Array.isArray(r))throw new Error("first argument should be an array");return r.reduce(function(n,i){return ae(n,i,t)},{})};var Ce=ae,Ut=typeof global=="object"&&global&&global.Object===Object&&global;const xr=Ut;var Bt=typeof self=="object"&&self&&self.Object===Object&&self,Nt=xr||Bt||Function("return this")();const P=Nt;var Gt=P.Symbol;const B=Gt;var Dr=Object.prototype,Ht=Dr.hasOwnProperty,zt=Dr.toString,te=B?B.toStringTag:void 0;function Kt(e){var r=Ht.call(e,te),t=e[te];try{e[te]=void 0;var n=!0}catch{}var i=zt.call(e);return n&&(r?e[te]=t:delete e[te]),i}var Wt=Object.prototype,kt=Wt.toString;function Yt(e){return kt.call(e)}var qt="[object Null]",Xt="[object Undefined]",cr=B?B.toStringTag:void 0;function k(e){return e==null?e===void 0?Xt:qt:cr&&cr in Object(e)?Kt(e):Yt(e)}function Vr(e,r){return function(t){return e(r(t))}}var Zt=Vr(Object.getPrototypeOf,Object);const De=Zt;function Y(e){return e!=null&&typeof e=="object"}var Jt="[object Object]",Qt=Function.prototype,en=Object.prototype,Ur=Qt.toString,rn=en.hasOwnProperty,tn=Ur.call(Object);function sr(e){if(!Y(e)||k(e)!=Jt)return!1;var r=De(e);if(r===null)return!0;var t=rn.call(r,"constructor")&&r.constructor;return typeof t=="function"&&t instanceof t&&Ur.call(t)==tn}var lr=Array.isArray,fr=Object.keys,nn=Object.prototype.hasOwnProperty,an=typeof Element<"u";function Fe(e,r){if(e===r)return!0;if(e&&r&&typeof e=="object"&&typeof r=="object"){var t=lr(e),n=lr(r),i,o,c;if(t&&n){if(o=e.length,o!=r.length)return!1;for(i=o;i--!==0;)if(!Fe(e[i],r[i]))return!1;return!0}if(t!=n)return!1;var p=e instanceof Date,S=r instanceof Date;if(p!=S)return!1;if(p&&S)return e.getTime()==r.getTime();var b=e instanceof RegExp,V=r instanceof RegExp;if(b!=V)return!1;if(b&&V)return e.toString()==r.toString();var w=fr(e);if(o=w.length,o!==fr(r).length)return!1;for(i=o;i--!==0;)if(!nn.call(r,w[i]))return!1;if(an&&e instanceof Element&&r instanceof Element)return e===r;for(i=o;i--!==0;)if(c=w[i],!(c==="_owner"&&e.$$typeof)&&!Fe(e[c],r[c]))return!1;return!0}return e!==e&&r!==r}var on=function(r,t){try{return Fe(r,t)}catch(n){if(n.message&&n.message.match(/stack|recursion/i)||n.number===-2146828260)return console.warn("Warning: react-fast-compare does not handle circular references.",n.name,n.message),!1;throw n}};const H=Ot(on);var un=!0;function cn(e,r){if(!un){if(e)return;var t="Warning: "+r;typeof console<"u"&&console.warn(t);try{throw Error(t)}catch{}}}function sn(){this.__data__=[],this.size=0}function Br(e,r){return e===r||e!==e&&r!==r}function he(e,r){for(var t=e.length;t--;)if(Br(e[t][0],r))return t;return-1}var ln=Array.prototype,fn=ln.splice;function dn(e){var r=this.__data__,t=he(r,e);if(t<0)return!1;var n=r.length-1;return t==n?r.pop():fn.call(r,t,1),--this.size,!0}function pn(e){var r=this.__data__,t=he(r,e);return t<0?void 0:r[t][1]}function hn(e){return he(this.__data__,e)>-1}function gn(e,r){var t=this.__data__,n=he(t,e);return n<0?(++this.size,t.push([e,r])):t[n][1]=r,this}function D(e){var r=-1,t=e==null?0:e.length;for(this.clear();++r<t;){var n=e[r];this.set(n[0],n[1])}}D.prototype.clear=sn;D.prototype.delete=dn;D.prototype.get=pn;D.prototype.has=hn;D.prototype.set=gn;function vn(){this.__data__=new D,this.size=0}function yn(e){var r=this.__data__,t=r.delete(e);return this.size=r.size,t}function bn(e){return this.__data__.get(e)}function Tn(e){return this.__data__.has(e)}function ue(e){var r=typeof e;return e!=null&&(r=="object"||r=="function")}var mn="[object AsyncFunction]",Sn="[object Function]",En="[object GeneratorFunction]",_n="[object Proxy]";function Nr(e){if(!ue(e))return!1;var r=k(e);return r==Sn||r==En||r==mn||r==_n}var An=P["__core-js_shared__"];const je=An;var dr=function(){var e=/[^.]+$/.exec(je&&je.keys&&je.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}();function $n(e){return!!dr&&dr in e}var jn=Function.prototype,On=jn.toString;function q(e){if(e!=null){try{return On.call(e)}catch{}try{return e+""}catch{}}return""}var wn=/[\\^$.*+?()[\]{}|]/g,In=/^\[object .+?Constructor\]$/,Cn=Function.prototype,Fn=Object.prototype,Mn=Cn.toString,Pn=Fn.hasOwnProperty,Rn=RegExp("^"+Mn.call(Pn).replace(wn,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function Ln(e){if(!ue(e)||$n(e))return!1;var r=Nr(e)?Rn:In;return r.test(q(e))}function xn(e,r){return e==null?void 0:e[r]}function X(e,r){var t=xn(e,r);return Ln(t)?t:void 0}var Dn=X(P,"Map");const ie=Dn;var Vn=X(Object,"create");const oe=Vn;function Un(){this.__data__=oe?oe(null):{},this.size=0}function Bn(e){var r=this.has(e)&&delete this.__data__[e];return this.size-=r?1:0,r}var Nn="__lodash_hash_undefined__",Gn=Object.prototype,Hn=Gn.hasOwnProperty;function zn(e){var r=this.__data__;if(oe){var t=r[e];return t===Nn?void 0:t}return Hn.call(r,e)?r[e]:void 0}var Kn=Object.prototype,Wn=Kn.hasOwnProperty;function kn(e){var r=this.__data__;return oe?r[e]!==void 0:Wn.call(r,e)}var Yn="__lodash_hash_undefined__";function qn(e,r){var t=this.__data__;return this.size+=this.has(e)?0:1,t[e]=oe&&r===void 0?Yn:r,this}function W(e){var r=-1,t=e==null?0:e.length;for(this.clear();++r<t;){var n=e[r];this.set(n[0],n[1])}}W.prototype.clear=Un;W.prototype.delete=Bn;W.prototype.get=zn;W.prototype.has=kn;W.prototype.set=qn;function Xn(){this.size=0,this.__data__={hash:new W,map:new(ie||D),string:new W}}function Zn(e){var r=typeof e;return r=="string"||r=="number"||r=="symbol"||r=="boolean"?e!=="__proto__":e===null}function ge(e,r){var t=e.__data__;return Zn(r)?t[typeof r=="string"?"string":"hash"]:t.map}function Jn(e){var r=ge(this,e).delete(e);return this.size-=r?1:0,r}function Qn(e){return ge(this,e).get(e)}function ea(e){return ge(this,e).has(e)}function ra(e,r){var t=ge(this,e),n=t.size;return t.set(e,r),this.size+=t.size==n?0:1,this}function N(e){var r=-1,t=e==null?0:e.length;for(this.clear();++r<t;){var n=e[r];this.set(n[0],n[1])}}N.prototype.clear=Xn;N.prototype.delete=Jn;N.prototype.get=Qn;N.prototype.has=ea;N.prototype.set=ra;var ta=200;function na(e,r){var t=this.__data__;if(t instanceof D){var n=t.__data__;if(!ie||n.length<ta-1)return n.push([e,r]),this.size=++t.size,this;t=this.__data__=new N(n)}return t.set(e,r),this.size=t.size,this}function ee(e){var r=this.__data__=new D(e);this.size=r.size}ee.prototype.clear=vn;ee.prototype.delete=yn;ee.prototype.get=bn;ee.prototype.has=Tn;ee.prototype.set=na;function aa(e,r){for(var t=-1,n=e==null?0:e.length;++t<n&&r(e[t],t,e)!==!1;);return e}var ia=function(){try{var e=X(Object,"defineProperty");return e({},"",{}),e}catch{}}();const pr=ia;function Gr(e,r,t){r=="__proto__"&&pr?pr(e,r,{configurable:!0,enumerable:!0,value:t,writable:!0}):e[r]=t}var oa=Object.prototype,ua=oa.hasOwnProperty;function Hr(e,r,t){var n=e[r];(!(ua.call(e,r)&&Br(n,t))||t===void 0&&!(r in e))&&Gr(e,r,t)}function ve(e,r,t,n){var i=!t;t||(t={});for(var o=-1,c=r.length;++o<c;){var p=r[o],S=n?n(t[p],e[p],p,t,e):void 0;S===void 0&&(S=e[p]),i?Gr(t,p,S):Hr(t,p,S)}return t}function ca(e,r){for(var t=-1,n=Array(e);++t<e;)n[t]=r(t);return n}var sa="[object Arguments]";function hr(e){return Y(e)&&k(e)==sa}var zr=Object.prototype,la=zr.hasOwnProperty,fa=zr.propertyIsEnumerable,da=hr(function(){return arguments}())?hr:function(e){return Y(e)&&la.call(e,"callee")&&!fa.call(e,"callee")};const pa=da;var ha=Array.isArray;const ce=ha;function ga(){return!1}var Kr=typeof exports=="object"&&exports&&!exports.nodeType&&exports,gr=Kr&&typeof module=="object"&&module&&!module.nodeType&&module,va=gr&&gr.exports===Kr,vr=va?P.Buffer:void 0,ya=vr?vr.isBuffer:void 0,ba=ya||ga;const Wr=ba;var Ta=9007199254740991,ma=/^(?:0|[1-9]\d*)$/;function Sa(e,r){var t=typeof e;return r=r??Ta,!!r&&(t=="number"||t!="symbol"&&ma.test(e))&&e>-1&&e%1==0&&e<r}var Ea=9007199254740991;function kr(e){return typeof e=="number"&&e>-1&&e%1==0&&e<=Ea}var _a="[object Arguments]",Aa="[object Array]",$a="[object Boolean]",ja="[object Date]",Oa="[object Error]",wa="[object Function]",Ia="[object Map]",Ca="[object Number]",Fa="[object Object]",Ma="[object RegExp]",Pa="[object Set]",Ra="[object String]",La="[object WeakMap]",xa="[object ArrayBuffer]",Da="[object DataView]",Va="[object Float32Array]",Ua="[object Float64Array]",Ba="[object Int8Array]",Na="[object Int16Array]",Ga="[object Int32Array]",Ha="[object Uint8Array]",za="[object Uint8ClampedArray]",Ka="[object Uint16Array]",Wa="[object Uint32Array]",m={};m[Va]=m[Ua]=m[Ba]=m[Na]=m[Ga]=m[Ha]=m[za]=m[Ka]=m[Wa]=!0;m[_a]=m[Aa]=m[xa]=m[$a]=m[Da]=m[ja]=m[Oa]=m[wa]=m[Ia]=m[Ca]=m[Fa]=m[Ma]=m[Pa]=m[Ra]=m[La]=!1;function ka(e){return Y(e)&&kr(e.length)&&!!m[k(e)]}function Ve(e){return function(r){return e(r)}}var Yr=typeof exports=="object"&&exports&&!exports.nodeType&&exports,ne=Yr&&typeof module=="object"&&module&&!module.nodeType&&module,Ya=ne&&ne.exports===Yr,Oe=Ya&&xr.process,qa=function(){try{var e=ne&&ne.require&&ne.require("util").types;return e||Oe&&Oe.binding&&Oe.binding("util")}catch{}}();const Q=qa;var yr=Q&&Q.isTypedArray,Xa=yr?Ve(yr):ka;const Za=Xa;var Ja=Object.prototype,Qa=Ja.hasOwnProperty;function qr(e,r){var t=ce(e),n=!t&&pa(e),i=!t&&!n&&Wr(e),o=!t&&!n&&!i&&Za(e),c=t||n||i||o,p=c?ca(e.length,String):[],S=p.length;for(var b in e)(r||Qa.call(e,b))&&!(c&&(b=="length"||i&&(b=="offset"||b=="parent")||o&&(b=="buffer"||b=="byteLength"||b=="byteOffset")||Sa(b,S)))&&p.push(b);return p}var ei=Object.prototype;function Ue(e){var r=e&&e.constructor,t=typeof r=="function"&&r.prototype||ei;return e===t}var ri=Vr(Object.keys,Object);const ti=ri;var ni=Object.prototype,ai=ni.hasOwnProperty;function ii(e){if(!Ue(e))return ti(e);var r=[];for(var t in Object(e))ai.call(e,t)&&t!="constructor"&&r.push(t);return r}function Xr(e){return e!=null&&kr(e.length)&&!Nr(e)}function Be(e){return Xr(e)?qr(e):ii(e)}function oi(e,r){return e&&ve(r,Be(r),e)}function ui(e){var r=[];if(e!=null)for(var t in Object(e))r.push(t);return r}var ci=Object.prototype,si=ci.hasOwnProperty;function li(e){if(!ue(e))return ui(e);var r=Ue(e),t=[];for(var n in e)n=="constructor"&&(r||!si.call(e,n))||t.push(n);return t}function Ne(e){return Xr(e)?qr(e,!0):li(e)}function fi(e,r){return e&&ve(r,Ne(r),e)}var Zr=typeof exports=="object"&&exports&&!exports.nodeType&&exports,br=Zr&&typeof module=="object"&&module&&!module.nodeType&&module,di=br&&br.exports===Zr,Tr=di?P.Buffer:void 0,mr=Tr?Tr.allocUnsafe:void 0;function pi(e,r){if(r)return e.slice();var t=e.length,n=mr?mr(t):new e.constructor(t);return e.copy(n),n}function Jr(e,r){var t=-1,n=e.length;for(r||(r=Array(n));++t<n;)r[t]=e[t];return r}function hi(e,r){for(var t=-1,n=e==null?0:e.length,i=0,o=[];++t<n;){var c=e[t];r(c,t,e)&&(o[i++]=c)}return o}function Qr(){return[]}var gi=Object.prototype,vi=gi.propertyIsEnumerable,Sr=Object.getOwnPropertySymbols,yi=Sr?function(e){return e==null?[]:(e=Object(e),hi(Sr(e),function(r){return vi.call(e,r)}))}:Qr;const Ge=yi;function bi(e,r){return ve(e,Ge(e),r)}function et(e,r){for(var t=-1,n=r.length,i=e.length;++t<n;)e[i+t]=r[t];return e}var Ti=Object.getOwnPropertySymbols,mi=Ti?function(e){for(var r=[];e;)et(r,Ge(e)),e=De(e);return r}:Qr;const rt=mi;function Si(e,r){return ve(e,rt(e),r)}function tt(e,r,t){var n=r(e);return ce(e)?n:et(n,t(e))}function Ei(e){return tt(e,Be,Ge)}function _i(e){return tt(e,Ne,rt)}var Ai=X(P,"DataView");const Me=Ai;var $i=X(P,"Promise");const Pe=$i;var ji=X(P,"Set");const Re=ji;var Oi=X(P,"WeakMap");const Le=Oi;var Er="[object Map]",wi="[object Object]",_r="[object Promise]",Ar="[object Set]",$r="[object WeakMap]",jr="[object DataView]",Ii=q(Me),Ci=q(ie),Fi=q(Pe),Mi=q(Re),Pi=q(Le),z=k;(Me&&z(new Me(new ArrayBuffer(1)))!=jr||ie&&z(new ie)!=Er||Pe&&z(Pe.resolve())!=_r||Re&&z(new Re)!=Ar||Le&&z(new Le)!=$r)&&(z=function(e){var r=k(e),t=r==wi?e.constructor:void 0,n=t?q(t):"";if(n)switch(n){case Ii:return jr;case Ci:return Er;case Fi:return _r;case Mi:return Ar;case Pi:return $r}return r});const He=z;var Ri=Object.prototype,Li=Ri.hasOwnProperty;function xi(e){var r=e.length,t=new e.constructor(r);return r&&typeof e[0]=="string"&&Li.call(e,"index")&&(t.index=e.index,t.input=e.input),t}var Di=P.Uint8Array;const Or=Di;function ze(e){var r=new e.constructor(e.byteLength);return new Or(r).set(new Or(e)),r}function Vi(e,r){var t=r?ze(e.buffer):e.buffer;return new e.constructor(t,e.byteOffset,e.byteLength)}var Ui=/\w*$/;function Bi(e){var r=new e.constructor(e.source,Ui.exec(e));return r.lastIndex=e.lastIndex,r}var wr=B?B.prototype:void 0,Ir=wr?wr.valueOf:void 0;function Ni(e){return Ir?Object(Ir.call(e)):{}}function Gi(e,r){var t=r?ze(e.buffer):e.buffer;return new e.constructor(t,e.byteOffset,e.length)}var Hi="[object Boolean]",zi="[object Date]",Ki="[object Map]",Wi="[object Number]",ki="[object RegExp]",Yi="[object Set]",qi="[object String]",Xi="[object Symbol]",Zi="[object ArrayBuffer]",Ji="[object DataView]",Qi="[object Float32Array]",eo="[object Float64Array]",ro="[object Int8Array]",to="[object Int16Array]",no="[object Int32Array]",ao="[object Uint8Array]",io="[object Uint8ClampedArray]",oo="[object Uint16Array]",uo="[object Uint32Array]";function co(e,r,t){var n=e.constructor;switch(r){case Zi:return ze(e);case Hi:case zi:return new n(+e);case Ji:return Vi(e,t);case Qi:case eo:case ro:case to:case no:case ao:case io:case oo:case uo:return Gi(e,t);case Ki:return new n;case Wi:case qi:return new n(e);case ki:return Bi(e);case Yi:return new n;case Xi:return Ni(e)}}var Cr=Object.create,so=function(){function e(){}return function(r){if(!ue(r))return{};if(Cr)return Cr(r);e.prototype=r;var t=new e;return e.prototype=void 0,t}}();const lo=so;function fo(e){return typeof e.constructor=="function"&&!Ue(e)?lo(De(e)):{}}var po="[object Map]";function ho(e){return Y(e)&&He(e)==po}var Fr=Q&&Q.isMap,go=Fr?Ve(Fr):ho;const vo=go;var yo="[object Set]";function bo(e){return Y(e)&&He(e)==yo}var Mr=Q&&Q.isSet,To=Mr?Ve(Mr):bo;const mo=To;var So=1,Eo=2,_o=4,nt="[object Arguments]",Ao="[object Array]",$o="[object Boolean]",jo="[object Date]",Oo="[object Error]",at="[object Function]",wo="[object GeneratorFunction]",Io="[object Map]",Co="[object Number]",it="[object Object]",Fo="[object RegExp]",Mo="[object Set]",Po="[object String]",Ro="[object Symbol]",Lo="[object WeakMap]",xo="[object ArrayBuffer]",Do="[object DataView]",Vo="[object Float32Array]",Uo="[object Float64Array]",Bo="[object Int8Array]",No="[object Int16Array]",Go="[object Int32Array]",Ho="[object Uint8Array]",zo="[object Uint8ClampedArray]",Ko="[object Uint16Array]",Wo="[object Uint32Array]",T={};T[nt]=T[Ao]=T[xo]=T[Do]=T[$o]=T[jo]=T[Vo]=T[Uo]=T[Bo]=T[No]=T[Go]=T[Io]=T[Co]=T[it]=T[Fo]=T[Mo]=T[Po]=T[Ro]=T[Ho]=T[zo]=T[Ko]=T[Wo]=!0;T[Oo]=T[at]=T[Lo]=!1;function de(e,r,t,n,i,o){var c,p=r&So,S=r&Eo,b=r&_o;if(t&&(c=i?t(e,n,i,o):t(e)),c!==void 0)return c;if(!ue(e))return e;var V=ce(e);if(V){if(c=xi(e),!p)return Jr(e,c)}else{var w=He(e),d=w==at||w==wo;if(Wr(e))return pi(e,p);if(w==it||w==nt||d&&!i){if(c=S||d?{}:fo(e),!p)return S?Si(e,fi(c,e)):bi(e,oi(c,e))}else{if(!T[w])return i?e:{};c=co(e,w,p)}}o||(o=new ee);var j=o.get(e);if(j)return j;o.set(e,c),mo(e)?e.forEach(function($){c.add(de($,r,t,$,e,o))}):vo(e)&&e.forEach(function($,E){c.set(E,de($,r,t,E,e,o))});var R=b?S?_i:Ei:S?Ne:Be,M=V?void 0:R(e);return aa(M||e,function($,E){M&&(E=$,$=e[E]),Hr(c,E,de($,r,t,E,e,o))}),c}var ko=4;function Pr(e){return de(e,ko)}function ot(e,r){for(var t=-1,n=e==null?0:e.length,i=Array(n);++t<n;)i[t]=r(e[t],t,e);return i}var Yo="[object Symbol]";function Ke(e){return typeof e=="symbol"||Y(e)&&k(e)==Yo}var qo="Expected a function";function We(e,r){if(typeof e!="function"||r!=null&&typeof r!="function")throw new TypeError(qo);var t=function(){var n=arguments,i=r?r.apply(this,n):n[0],o=t.cache;if(o.has(i))return o.get(i);var c=e.apply(this,n);return t.cache=o.set(i,c)||o,c};return t.cache=new(We.Cache||N),t}We.Cache=N;var Xo=500;function Zo(e){var r=We(e,function(n){return t.size===Xo&&t.clear(),n}),t=r.cache;return r}var Jo=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Qo=/\\(\\)?/g,eu=Zo(function(e){var r=[];return e.charCodeAt(0)===46&&r.push(""),e.replace(Jo,function(t,n,i,o){r.push(i?o.replace(Qo,"$1"):n||t)}),r});const ru=eu;var tu=1/0;function nu(e){if(typeof e=="string"||Ke(e))return e;var r=e+"";return r=="0"&&1/e==-tu?"-0":r}var au=1/0,Rr=B?B.prototype:void 0,Lr=Rr?Rr.toString:void 0;function ut(e){if(typeof e=="string")return e;if(ce(e))return ot(e,ut)+"";if(Ke(e))return Lr?Lr.call(e):"";var r=e+"";return r=="0"&&1/e==-au?"-0":r}function iu(e){return e==null?"":ut(e)}function ct(e){return ce(e)?ot(e,nu):Ke(e)?[e]:Jr(ru(iu(e)))}function A(){return A=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},A.apply(this,arguments)}function st(e,r){if(e==null)return{};var t={},n=Object.keys(e),i,o;for(o=0;o<n.length;o++)i=n[o],!(r.indexOf(i)>=0)&&(t[i]=e[i]);return t}var ye=f.createContext(void 0);ye.displayName="FormikContext";var ou=ye.Provider;ye.Consumer;function lt(){var e=f.useContext(ye);return e||cn(!1),e}var C=function(r){return typeof r=="function"},be=function(r){return r!==null&&typeof r=="object"},uu=function(r){return String(Math.floor(Number(r)))===r},we=function(r){return Object.prototype.toString.call(r)==="[object String]"},cu=function(r){return f.Children.count(r)===0},Ie=function(r){return be(r)&&C(r.then)};function O(e,r,t,n){n===void 0&&(n=0);for(var i=ct(r);e&&n<i.length;)e=e[i[n++]];return n!==i.length&&!e||e===void 0?t:e}function K(e,r,t){for(var n=Pr(e),i=n,o=0,c=ct(r);o<c.length-1;o++){var p=c[o],S=O(e,c.slice(0,o+1));if(S&&(be(S)||Array.isArray(S)))i=i[p]=Pr(S);else{var b=c[o+1];i=i[p]=uu(b)&&Number(b)>=0?[]:{}}}return(o===0?e:i)[c[o]]===t?e:(t===void 0?delete i[c[o]]:i[c[o]]=t,o===0&&t===void 0&&delete n[c[o]],n)}function ft(e,r,t,n){t===void 0&&(t=new WeakMap),n===void 0&&(n={});for(var i=0,o=Object.keys(e);i<o.length;i++){var c=o[i],p=e[c];be(p)?t.get(p)||(t.set(p,!0),n[c]=Array.isArray(p)?[]:{},ft(p,r,t,n[c])):n[c]=r}return n}function su(e,r){switch(r.type){case"SET_VALUES":return A({},e,{values:r.payload});case"SET_TOUCHED":return A({},e,{touched:r.payload});case"SET_ERRORS":return H(e.errors,r.payload)?e:A({},e,{errors:r.payload});case"SET_STATUS":return A({},e,{status:r.payload});case"SET_ISSUBMITTING":return A({},e,{isSubmitting:r.payload});case"SET_ISVALIDATING":return A({},e,{isValidating:r.payload});case"SET_FIELD_VALUE":return A({},e,{values:K(e.values,r.payload.field,r.payload.value)});case"SET_FIELD_TOUCHED":return A({},e,{touched:K(e.touched,r.payload.field,r.payload.value)});case"SET_FIELD_ERROR":return A({},e,{errors:K(e.errors,r.payload.field,r.payload.value)});case"RESET_FORM":return A({},e,r.payload);case"SET_FORMIK_STATE":return r.payload(e);case"SUBMIT_ATTEMPT":return A({},e,{touched:ft(e.values,!0),isSubmitting:!0,submitCount:e.submitCount+1});case"SUBMIT_FAILURE":return A({},e,{isSubmitting:!1});case"SUBMIT_SUCCESS":return A({},e,{isSubmitting:!1});default:return e}}var G={},fe={};function lu(e){var r=e.validateOnChange,t=r===void 0?!0:r,n=e.validateOnBlur,i=n===void 0?!0:n,o=e.validateOnMount,c=o===void 0?!1:o,p=e.isInitialValid,S=e.enableReinitialize,b=S===void 0?!1:S,V=e.onSubmit,w=st(e,["validateOnChange","validateOnBlur","validateOnMount","isInitialValid","enableReinitialize","onSubmit"]),d=A({validateOnChange:t,validateOnBlur:i,validateOnMount:c,onSubmit:V},w),j=f.useRef(d.initialValues),R=f.useRef(d.initialErrors||G),M=f.useRef(d.initialTouched||fe),$=f.useRef(d.initialStatus),E=f.useRef(!1),U=f.useRef({});f.useEffect(function(){return E.current=!0,function(){E.current=!1}},[]);var dt=f.useState(0),pt=dt[1],se=f.useRef({values:d.initialValues,errors:d.initialErrors||G,touched:d.initialTouched||fe,status:d.initialStatus,isSubmitting:!1,isValidating:!1,submitCount:0}),y=se.current,v=f.useCallback(function(a){var u=se.current;se.current=su(u,a),u!==se.current&&pt(function(s){return s+1})},[]),ke=f.useCallback(function(a,u){return new Promise(function(s,l){var h=d.validate(a,u);h==null?s(G):Ie(h)?h.then(function(g){s(g||G)},function(g){l(g)}):s(h)})},[d.validate]),Te=f.useCallback(function(a,u){var s=d.validationSchema,l=C(s)?s(u):s,h=u&&l.validateAt?l.validateAt(u,a):du(a,l);return new Promise(function(g,_){h.then(function(){g(G)},function(L){L.name==="ValidationError"?g(fu(L)):_(L)})})},[d.validationSchema]),Ye=f.useCallback(function(a,u){return new Promise(function(s){return s(U.current[a].validate(u))})},[]),qe=f.useCallback(function(a){var u=Object.keys(U.current).filter(function(l){return C(U.current[l].validate)}),s=u.length>0?u.map(function(l){return Ye(l,O(a,l))}):[Promise.resolve("DO_NOT_DELETE_YOU_WILL_BE_FIRED")];return Promise.all(s).then(function(l){return l.reduce(function(h,g,_){return g==="DO_NOT_DELETE_YOU_WILL_BE_FIRED"||g&&(h=K(h,u[_],g)),h},{})})},[Ye]),ht=f.useCallback(function(a){return Promise.all([qe(a),d.validationSchema?Te(a):{},d.validate?ke(a):{}]).then(function(u){var s=u[0],l=u[1],h=u[2],g=Ce.all([s,l,h],{arrayMerge:pu});return g})},[d.validate,d.validationSchema,qe,ke,Te]),F=I(function(a){return a===void 0&&(a=y.values),v({type:"SET_ISVALIDATING",payload:!0}),ht(a).then(function(u){return E.current&&(v({type:"SET_ISVALIDATING",payload:!1}),v({type:"SET_ERRORS",payload:u})),u})});f.useEffect(function(){c&&E.current===!0&&H(j.current,d.initialValues)&&F(j.current)},[c,F]);var re=f.useCallback(function(a){var u=a&&a.values?a.values:j.current,s=a&&a.errors?a.errors:R.current?R.current:d.initialErrors||{},l=a&&a.touched?a.touched:M.current?M.current:d.initialTouched||{},h=a&&a.status?a.status:$.current?$.current:d.initialStatus;j.current=u,R.current=s,M.current=l,$.current=h;var g=function(){v({type:"RESET_FORM",payload:{isSubmitting:!!a&&!!a.isSubmitting,errors:s,touched:l,status:h,values:u,isValidating:!!a&&!!a.isValidating,submitCount:a&&a.submitCount&&typeof a.submitCount=="number"?a.submitCount:0}})};if(d.onReset){var _=d.onReset(y.values,ir);Ie(_)?_.then(g):g()}else g()},[d.initialErrors,d.initialStatus,d.initialTouched]);f.useEffect(function(){E.current===!0&&!H(j.current,d.initialValues)&&b&&(j.current=d.initialValues,re(),c&&F(j.current))},[b,d.initialValues,re,c,F]),f.useEffect(function(){b&&E.current===!0&&!H(R.current,d.initialErrors)&&(R.current=d.initialErrors||G,v({type:"SET_ERRORS",payload:d.initialErrors||G}))},[b,d.initialErrors]),f.useEffect(function(){b&&E.current===!0&&!H(M.current,d.initialTouched)&&(M.current=d.initialTouched||fe,v({type:"SET_TOUCHED",payload:d.initialTouched||fe}))},[b,d.initialTouched]),f.useEffect(function(){b&&E.current===!0&&!H($.current,d.initialStatus)&&($.current=d.initialStatus,v({type:"SET_STATUS",payload:d.initialStatus}))},[b,d.initialStatus,d.initialTouched]);var Xe=I(function(a){if(U.current[a]&&C(U.current[a].validate)){var u=O(y.values,a),s=U.current[a].validate(u);return Ie(s)?(v({type:"SET_ISVALIDATING",payload:!0}),s.then(function(l){return l}).then(function(l){v({type:"SET_FIELD_ERROR",payload:{field:a,value:l}}),v({type:"SET_ISVALIDATING",payload:!1})})):(v({type:"SET_FIELD_ERROR",payload:{field:a,value:s}}),Promise.resolve(s))}else if(d.validationSchema)return v({type:"SET_ISVALIDATING",payload:!0}),Te(y.values,a).then(function(l){return l}).then(function(l){v({type:"SET_FIELD_ERROR",payload:{field:a,value:O(l,a)}}),v({type:"SET_ISVALIDATING",payload:!1})});return Promise.resolve()}),gt=f.useCallback(function(a,u){var s=u.validate;U.current[a]={validate:s}},[]),vt=f.useCallback(function(a){delete U.current[a]},[]),Ze=I(function(a,u){v({type:"SET_TOUCHED",payload:a});var s=u===void 0?i:u;return s?F(y.values):Promise.resolve()}),Je=f.useCallback(function(a){v({type:"SET_ERRORS",payload:a})},[]),Qe=I(function(a,u){var s=C(a)?a(y.values):a;v({type:"SET_VALUES",payload:s});var l=u===void 0?t:u;return l?F(s):Promise.resolve()}),le=f.useCallback(function(a,u){v({type:"SET_FIELD_ERROR",payload:{field:a,value:u}})},[]),Z=I(function(a,u,s){v({type:"SET_FIELD_VALUE",payload:{field:a,value:u}});var l=s===void 0?t:s;return l?F(K(y.values,a,u)):Promise.resolve()}),er=f.useCallback(function(a,u){var s=u,l=a,h;if(!we(a)){a.persist&&a.persist();var g=a.target?a.target:a.currentTarget,_=g.type,L=g.name,Ae=g.id,$e=g.value,$t=g.checked,Tu=g.outerHTML,or=g.options,jt=g.multiple;s=u||L||Ae,l=/number|range/.test(_)?(h=parseFloat($e),isNaN(h)?"":h):/checkbox/.test(_)?gu(O(y.values,s),$t,$e):or&&jt?hu(or):$e}s&&Z(s,l)},[Z,y.values]),me=I(function(a){if(we(a))return function(u){return er(u,a)};er(a)}),J=I(function(a,u,s){u===void 0&&(u=!0),v({type:"SET_FIELD_TOUCHED",payload:{field:a,value:u}});var l=s===void 0?i:s;return l?F(y.values):Promise.resolve()}),rr=f.useCallback(function(a,u){a.persist&&a.persist();var s=a.target,l=s.name,h=s.id,g=s.outerHTML,_=u||l||h;J(_,!0)},[J]),Se=I(function(a){if(we(a))return function(u){return rr(u,a)};rr(a)}),tr=f.useCallback(function(a){C(a)?v({type:"SET_FORMIK_STATE",payload:a}):v({type:"SET_FORMIK_STATE",payload:function(){return a}})},[]),nr=f.useCallback(function(a){v({type:"SET_STATUS",payload:a})},[]),ar=f.useCallback(function(a){v({type:"SET_ISSUBMITTING",payload:a})},[]),Ee=I(function(){return v({type:"SUBMIT_ATTEMPT"}),F().then(function(a){var u=a instanceof Error,s=!u&&Object.keys(a).length===0;if(s){var l;try{if(l=bt(),l===void 0)return}catch(h){throw h}return Promise.resolve(l).then(function(h){return E.current&&v({type:"SUBMIT_SUCCESS"}),h}).catch(function(h){if(E.current)throw v({type:"SUBMIT_FAILURE"}),h})}else if(E.current&&(v({type:"SUBMIT_FAILURE"}),u))throw a})}),yt=I(function(a){a&&a.preventDefault&&C(a.preventDefault)&&a.preventDefault(),a&&a.stopPropagation&&C(a.stopPropagation)&&a.stopPropagation(),Ee().catch(function(u){console.warn("Warning: An unhandled error was caught from submitForm()",u)})}),ir={resetForm:re,validateForm:F,validateField:Xe,setErrors:Je,setFieldError:le,setFieldTouched:J,setFieldValue:Z,setStatus:nr,setSubmitting:ar,setTouched:Ze,setValues:Qe,setFormikState:tr,submitForm:Ee},bt=I(function(){return V(y.values,ir)}),Tt=I(function(a){a&&a.preventDefault&&C(a.preventDefault)&&a.preventDefault(),a&&a.stopPropagation&&C(a.stopPropagation)&&a.stopPropagation(),re()}),mt=f.useCallback(function(a){return{value:O(y.values,a),error:O(y.errors,a),touched:!!O(y.touched,a),initialValue:O(j.current,a),initialTouched:!!O(M.current,a),initialError:O(R.current,a)}},[y.errors,y.touched,y.values]),St=f.useCallback(function(a){return{setValue:function(s,l){return Z(a,s,l)},setTouched:function(s,l){return J(a,s,l)},setError:function(s){return le(a,s)}}},[Z,J,le]),Et=f.useCallback(function(a){var u=be(a),s=u?a.name:a,l=O(y.values,s),h={name:s,value:l,onChange:me,onBlur:Se};if(u){var g=a.type,_=a.value,L=a.as,Ae=a.multiple;g==="checkbox"?_===void 0?h.checked=!!l:(h.checked=!!(Array.isArray(l)&&~l.indexOf(_)),h.value=_):g==="radio"?(h.checked=l===_,h.value=_):L==="select"&&Ae&&(h.value=h.value||[],h.multiple=!0)}return h},[Se,me,y.values]),_e=f.useMemo(function(){return!H(j.current,y.values)},[j.current,y.values]),_t=f.useMemo(function(){return typeof p<"u"?_e?y.errors&&Object.keys(y.errors).length===0:p!==!1&&C(p)?p(d):p:y.errors&&Object.keys(y.errors).length===0},[p,_e,y.errors,d]),At=A({},y,{initialValues:j.current,initialErrors:R.current,initialTouched:M.current,initialStatus:$.current,handleBlur:Se,handleChange:me,handleReset:Tt,handleSubmit:yt,resetForm:re,setErrors:Je,setFormikState:tr,setFieldTouched:J,setFieldValue:Z,setFieldError:le,setStatus:nr,setSubmitting:ar,setTouched:Ze,setValues:Qe,submitForm:Ee,validateForm:F,validateField:Xe,isValid:_t,dirty:_e,unregisterField:vt,registerField:gt,getFieldProps:Et,getFieldMeta:mt,getFieldHelpers:St,validateOnBlur:i,validateOnChange:t,validateOnMount:c});return At}function Eu(e){var r=lu(e),t=e.component,n=e.children,i=e.render,o=e.innerRef;return f.useImperativeHandle(o,function(){return r}),f.createElement(ou,{value:r},t?f.createElement(t,r):i?i(r):n?C(n)?n(r):cu(n)?null:f.Children.only(n):null)}function fu(e){var r={};if(e.inner){if(e.inner.length===0)return K(r,e.path,e.message);for(var i=e.inner,t=Array.isArray(i),n=0,i=t?i:i[Symbol.iterator]();;){var o;if(t){if(n>=i.length)break;o=i[n++]}else{if(n=i.next(),n.done)break;o=n.value}var c=o;O(r,c.path)||(r=K(r,c.path,c.message))}}return r}function du(e,r,t,n){t===void 0&&(t=!1);var i=xe(e);return r[t?"validateSync":"validate"](i,{abortEarly:!1,context:n||i})}function xe(e){var r=Array.isArray(e)?[]:{};for(var t in e)if(Object.prototype.hasOwnProperty.call(e,t)){var n=String(t);Array.isArray(e[n])===!0?r[n]=e[n].map(function(i){return Array.isArray(i)===!0||sr(i)?xe(i):i!==""?i:void 0}):sr(e[n])?r[n]=xe(e[n]):r[n]=e[n]!==""?e[n]:void 0}return r}function pu(e,r,t){var n=e.slice();return r.forEach(function(o,c){if(typeof n[c]>"u"){var p=t.clone!==!1,S=p&&t.isMergeableObject(o);n[c]=S?Ce(Array.isArray(o)?[]:{},o,t):o}else t.isMergeableObject(o)?n[c]=Ce(e[c],o,t):e.indexOf(o)===-1&&n.push(o)}),n}function hu(e){return Array.from(e).filter(function(r){return r.selected}).map(function(r){return r.value})}function gu(e,r,t){if(typeof e=="boolean")return!!r;var n=[],i=!1,o=-1;if(Array.isArray(e))n=e,o=e.indexOf(t),i=o>=0;else if(!t||t=="true"||t=="false")return!!r;return r&&t&&!i?n.concat(t):i?n.slice(0,o).concat(n.slice(o+1)):n}var vu=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u"?f.useLayoutEffect:f.useEffect;function I(e){var r=f.useRef(e);return vu(function(){r.current=e}),f.useCallback(function(){for(var t=arguments.length,n=new Array(t),i=0;i<t;i++)n[i]=arguments[i];return r.current.apply(void 0,n)},[])}var yu=f.forwardRef(function(e,r){var t=e.action,n=st(e,["action"]),i=t??"#",o=lt(),c=o.handleReset,p=o.handleSubmit;return f.createElement("form",A({onSubmit:p,ref:r,onReset:c,action:i},n))});yu.displayName="Form";const bu=({from:e,disabled:r})=>{const{handleSubmit:t}=lt(),n=f.useCallback(()=>r?"wait...":e==="loginPage"?"Log in":e==="recovey-password"?"Log In with new password":e==="emailModal"?"Continue":e==="change-password"?"Change password":"Sign Up",[r,e]);return wt.jsx(It,{disabled:r,text:n(),textSize:x.fontSizes.m,color:x.colors.white,width:"100%",height:`${x.spacing[12]}px`,gradient:x.colors.mainBtnBgr,hoverGradient:x.colors.accentBtnBgr,border:x.border.main,borderRadius:x.radii.main,marginBottom:`${x.spacing[6]}px`,marginTop:e==="emailModal"?"84px":`${x.spacing[8]}px`,type:"button",onClick:t})};bu.propTypes={from:ur.string,disabled:ur.bool};export{bu as A,Eu as F,yu as a};