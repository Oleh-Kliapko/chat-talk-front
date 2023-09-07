import{n as f,t as m,y as q,P as a,j as l,b as J,r as j,F as T,x as z,a as K}from"./index-ddfabd26.js";const Q="/chat-talk-front/assets/emptyChannels-c83e59ee.png",V="/chat-talk-front/assets/notFound-ee251c35.png",Z=f.div`
width: ${m.breakpoints.mobile}px;
display:flex;
flex-direction:column;
align-items:center;
padding-top:100px;
`,tt=f.p`
margin-top:100px;
font-size:${m.fontSizes.m};
font-weight: 400;
font-family:"Segoe-Regular";
color:${m.colors.main};
`;f(q)`
margin-top:20px;
text-decoration:underline;
color:${m.colors.main};
&:hover{
    cursor: pointer;
}
`;const D=({notFound:t,title:e})=>l.jsxs(Z,{children:[l.jsx("img",{src:t?V:Q,width:280,height:280}),l.jsx(tt,{children:t?"Not found request":e})]});D.propTypes={notFound:a.bool,title:a.string};const et=f.div`
width: ${m.breakpoints.mobile}px;
overflow-y:scroll;
&::-webkit-scrollbar {
      width: 0;
      height: 0;
}
`,nt=f.ul`

`,rt=f.li`
position:relative;
height:90px;
margin-top:8px;
padding:8px;
display:flex;
border-radius:${m.radii.main};
border:${m.border.input};
&:hover{
    background-color:${m.colors.accent};
    color:${m.colors.white};
    cursor: pointer;
}
`,it=f.div`
margin-right:8px;
`,ot=f.div`
display:flex;
flex-direction:column;
`,at=f.img`
border-radius:50%;
width:40px;
height:40px;
`,st=f.p`
font-size:${m.fontSizes.m};
font-weight:700;
margin-bottom:8px;
`,ct=f.p`
font-size:14px;
font-weight:400;
`,lt=f.div`
position:absolute;
top:8px;
right:8px;
font-size:14px;
font-weight:300
`,G=({channel:t})=>{const{title:e,description:n,image:r,created_at:s}=t,u=J(),d=j.useCallback((o,g)=>o.length>g?o.substring(0,g)+"...":o,[]),c=j.useCallback(()=>{const o=new Date(s),g=String(o.getUTCDate()).padStart(2,"0"),v=String(o.getUTCMonth()+1).padStart(2,"0"),b=o.getUTCFullYear();return`${g}.${v}.${b}`},[s]);return l.jsxs(rt,{onClick:()=>{u(`/channels/${t.id}`)},children:[l.jsxs(it,{children:[" ",l.jsx(at,{src:r,alt:"chanel image",width:40,height:40})]}),l.jsxs(ot,{children:[l.jsx(st,{children:e}),l.jsx(ct,{children:d(n,90)})]}),l.jsx(lt,{children:c()})]})};G.propTypes={channel:a.exact({id:a.number,title:a.string,description:a.string,image:a.string,created_at:a.string,owner:a.exact({id:a.number,email:a.string,username:a.string})})};function dt(t){var e=typeof t;return t!=null&&(e=="object"||e=="function")}var C=dt,ft=typeof T=="object"&&T&&T.Object===Object&&T,ut=ft,gt=ut,mt=typeof self=="object"&&self&&self.Object===Object&&self,pt=gt||mt||Function("return this")(),M=pt,bt=M,ht=function(){return bt.Date.now()},xt=ht,vt=/\s/;function yt(t){for(var e=t.length;e--&&vt.test(t.charAt(e)););return e}var Tt=yt,jt=Tt,$t=/^\s+/;function St(t){return t&&t.slice(0,jt(t)+1).replace($t,"")}var wt=St,Ot=M,Ct=Ot.Symbol,W=Ct,E=W,H=Object.prototype,_t=H.hasOwnProperty,kt=H.toString,x=E?E.toStringTag:void 0;function It(t){var e=_t.call(t,x),n=t[x];try{t[x]=void 0;var r=!0}catch{}var s=kt.call(t);return r&&(e?t[x]=n:delete t[x]),s}var Et=It,Lt=Object.prototype,Rt=Lt.toString;function Ft(t){return Rt.call(t)}var Nt=Ft,L=W,Pt=Et,zt=Nt,Dt="[object Null]",Gt="[object Undefined]",R=L?L.toStringTag:void 0;function Mt(t){return t==null?t===void 0?Gt:Dt:R&&R in Object(t)?Pt(t):zt(t)}var Wt=Mt;function Ht(t){return t!=null&&typeof t=="object"}var Ut=Ht,At=Wt,Bt=Ut,Xt="[object Symbol]";function Yt(t){return typeof t=="symbol"||Bt(t)&&At(t)==Xt}var qt=Yt,Jt=wt,F=C,Kt=qt,N=0/0,Qt=/^[-+]0x[0-9a-f]+$/i,Vt=/^0b[01]+$/i,Zt=/^0o[0-7]+$/i,te=parseInt;function ee(t){if(typeof t=="number")return t;if(Kt(t))return N;if(F(t)){var e=typeof t.valueOf=="function"?t.valueOf():t;t=F(e)?e+"":e}if(typeof t!="string")return t===0?t:+t;t=Jt(t);var n=Vt.test(t);return n||Zt.test(t)?te(t.slice(2),n?2:8):Qt.test(t)?N:+t}var ne=ee,re=C,O=xt,P=ne,ie="Expected a function",oe=Math.max,ae=Math.min;function se(t,e,n){var r,s,u,d,c,o,g=0,v=!1,b=!1,$=!0;if(typeof t!="function")throw new TypeError(ie);e=P(e)||0,re(n)&&(v=!!n.leading,b="maxWait"in n,u=b?oe(P(n.maxWait)||0,e):u,$="trailing"in n?!!n.trailing:$);function S(i){var p=r,h=s;return r=s=void 0,g=i,d=t.apply(h,p),d}function A(i){return g=i,c=setTimeout(y,e),v?S(i):d}function B(i){var p=i-o,h=i-g,I=e-p;return b?ae(I,u-h):I}function _(i){var p=i-o,h=i-g;return o===void 0||p>=e||p<0||b&&h>=u}function y(){var i=O();if(_(i))return k(i);c=setTimeout(y,B(i))}function k(i){return c=void 0,$&&r?S(i):(r=s=void 0,d)}function X(){c!==void 0&&clearTimeout(c),g=0,r=o=s=c=void 0}function Y(){return c===void 0?d:k(O())}function w(){var i=O(),p=_(i);if(r=arguments,s=this,o=i,p){if(c===void 0)return A(o);if(b)return clearTimeout(c),c=setTimeout(y,e),S(o)}return c===void 0&&(c=setTimeout(y,e)),d}return w.cancel=X,w.flush=Y,w}var U=se;const he=z(U);var ce=U,le=C,de="Expected a function";function fe(t,e,n){var r=!0,s=!0;if(typeof t!="function")throw new TypeError(de);return le(n)&&(r="leading"in n?!!n.leading:r,s="trailing"in n?!!n.trailing:s),ce(t,e,{leading:r,maxWait:e,trailing:s})}var ue=fe;const ge=z(ue);function me({onIntersection:t,delay:e=1e3,marginFromBottom:n=10}){const r=j.useRef(null);return[j.useCallback(ge(()=>{const u=r.current.scrollTop,d=r.current.clientHeight;r.current.scrollHeight-u-d-n<=0&&t()},e),[t,r,n,e]),r]}const pe=({channels:t,isLoading:e,ForwardPage:n,notFound:r,ForwardSearchPage:s,from:u})=>{const[d,c]=me({onIntersection:r?s:n,delay:1200,marginFromBottom:30});return t?l.jsx(et,{ref:c,onScroll:d,children:l.jsx(nt,{children:t.length===0?l.jsx(D,{title:u==="main-page"?"No channels yet":"You haven't channels yet",notFound:r}):l.jsxs(l.Fragment,{children:[t.map(o=>l.jsx(G,{channel:o},o.id)),e&&l.jsx(K,{})]})})}):null};pe.propTypes={channels:a.array,isLoading:a.bool,ForwardPage:a.func,notFound:a.bool,ForwardSearchPage:a.func,from:a.string};export{pe as C,he as d};
