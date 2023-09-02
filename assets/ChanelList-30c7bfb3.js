import{n as f,t as m,y as Y,P as s,j as c,a as J,r as j,F as T,x as z,E as K}from"./index-0d571f71.js";const Q="/chat-talk-front/assets/emptyChannels-c83e59ee.png",V="/chat-talk-front/assets/notFound-ee251c35.png",Z=f.div`
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
`,et=f(Y)`
margin-top:20px;
text-decoration:underline;
color:${m.colors.main};
&:hover{
    cursor: pointer;
}
`,D=({notFound:t})=>c.jsxs(Z,{children:[c.jsx("img",{src:t?V:Q,width:280,height:280}),c.jsx(tt,{children:t?"Not found request":"No channels yet"}),!t&&c.jsx(et,{to:"/create-channel",children:"Create"})]});D.propTypes={notFound:s.bool};const nt=f.div`
width: ${m.breakpoints.mobile}px;
/* height:680px; */
overflow-y:scroll;
&::-webkit-scrollbar {
      width: 0;
      height: 0;
}
`,rt=f.ul`

`,it=f.li`
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
`,ot=f.div`
margin-right:8px;
`,at=f.div`
display:flex;
flex-direction:column;
`,st=f.img`
border-radius:50%;
width:40px;
height:40px;
`,ct=f.p`
font-size:${m.fontSizes.m};
font-weight:700;
margin-bottom:8px;
`,lt=f.p`
font-size:14px;
font-weight:400;
`,dt=f.div`
position:absolute;
top:8px;
right:8px;
font-size:14px;
font-weight:300
`,G=({channel:t})=>{const{title:e,description:n,image:r,created_at:a}=t,u=J(),d=j.useCallback((l,g)=>l.length>g?l.substring(0,g)+"...":l,[]),o=j.useCallback(()=>{const l=new Date(a),g=String(l.getUTCDate()).padStart(2,"0"),v=String(l.getUTCMonth()+1).padStart(2,"0"),b=l.getUTCFullYear();return`${g}.${v}.${b}`},[a]);return c.jsxs(it,{onClick:()=>{u(`/channels/${t.id}`)},children:[c.jsxs(ot,{children:[" ",c.jsx(st,{src:r,alt:"chanel image",width:40,height:40})]}),c.jsxs(at,{children:[c.jsx(ct,{children:e}),c.jsx(lt,{children:d(n,90)})]}),c.jsx(dt,{children:o()})]})};G.propTypes={channel:s.exact({id:s.number,title:s.string,description:s.string,image:s.string,created_at:s.string,owner:s.exact({id:s.number,email:s.string,username:s.string})})};function ft(t){var e=typeof t;return t!=null&&(e=="object"||e=="function")}var C=ft,ut=typeof T=="object"&&T&&T.Object===Object&&T,gt=ut,mt=gt,pt=typeof self=="object"&&self&&self.Object===Object&&self,bt=mt||pt||Function("return this")(),M=bt,ht=M,xt=function(){return ht.Date.now()},vt=xt,yt=/\s/;function Tt(t){for(var e=t.length;e--&&yt.test(t.charAt(e)););return e}var jt=Tt,$t=jt,St=/^\s+/;function wt(t){return t&&t.slice(0,$t(t)+1).replace(St,"")}var Ot=wt,Ct=M,kt=Ct.Symbol,W=kt,I=W,H=Object.prototype,_t=H.hasOwnProperty,Et=H.toString,x=I?I.toStringTag:void 0;function It(t){var e=_t.call(t,x),n=t[x];try{t[x]=void 0;var r=!0}catch{}var a=Et.call(t);return r&&(e?t[x]=n:delete t[x]),a}var Lt=It,Rt=Object.prototype,Nt=Rt.toString;function Ft(t){return Nt.call(t)}var Pt=Ft,L=W,zt=Lt,Dt=Pt,Gt="[object Null]",Mt="[object Undefined]",R=L?L.toStringTag:void 0;function Wt(t){return t==null?t===void 0?Mt:Gt:R&&R in Object(t)?zt(t):Dt(t)}var Ht=Wt;function Ut(t){return t!=null&&typeof t=="object"}var At=Ut,Bt=Ht,Xt=At,qt="[object Symbol]";function Yt(t){return typeof t=="symbol"||Xt(t)&&Bt(t)==qt}var Jt=Yt,Kt=Ot,N=C,Qt=Jt,F=0/0,Vt=/^[-+]0x[0-9a-f]+$/i,Zt=/^0b[01]+$/i,te=/^0o[0-7]+$/i,ee=parseInt;function ne(t){if(typeof t=="number")return t;if(Qt(t))return F;if(N(t)){var e=typeof t.valueOf=="function"?t.valueOf():t;t=N(e)?e+"":e}if(typeof t!="string")return t===0?t:+t;t=Kt(t);var n=Zt.test(t);return n||te.test(t)?ee(t.slice(2),n?2:8):Vt.test(t)?F:+t}var re=ne,ie=C,O=vt,P=re,oe="Expected a function",ae=Math.max,se=Math.min;function ce(t,e,n){var r,a,u,d,o,l,g=0,v=!1,b=!1,$=!0;if(typeof t!="function")throw new TypeError(oe);e=P(e)||0,ie(n)&&(v=!!n.leading,b="maxWait"in n,u=b?ae(P(n.maxWait)||0,e):u,$="trailing"in n?!!n.trailing:$);function S(i){var p=r,h=a;return r=a=void 0,g=i,d=t.apply(h,p),d}function A(i){return g=i,o=setTimeout(y,e),v?S(i):d}function B(i){var p=i-l,h=i-g,E=e-p;return b?se(E,u-h):E}function k(i){var p=i-l,h=i-g;return l===void 0||p>=e||p<0||b&&h>=u}function y(){var i=O();if(k(i))return _(i);o=setTimeout(y,B(i))}function _(i){return o=void 0,$&&r?S(i):(r=a=void 0,d)}function X(){o!==void 0&&clearTimeout(o),g=0,r=l=a=o=void 0}function q(){return o===void 0?d:_(O())}function w(){var i=O(),p=k(i);if(r=arguments,a=this,l=i,p){if(o===void 0)return A(l);if(b)return clearTimeout(o),o=setTimeout(y,e),S(l)}return o===void 0&&(o=setTimeout(y,e)),d}return w.cancel=X,w.flush=q,w}var U=ce;const xe=z(U);var le=U,de=C,fe="Expected a function";function ue(t,e,n){var r=!0,a=!0;if(typeof t!="function")throw new TypeError(fe);return de(n)&&(r="leading"in n?!!n.leading:r,a="trailing"in n?!!n.trailing:a),le(t,e,{leading:r,maxWait:e,trailing:a})}var ge=ue;const me=z(ge);function pe({onIntersection:t,delay:e=1e3,marginFromBottom:n=10}){const r=j.useRef(null);return[j.useCallback(me(()=>{const u=r.current.scrollTop,d=r.current.clientHeight;r.current.scrollHeight-u-d-n<=0&&t()},e),[t,r,n,e]),r]}const be=({channels:t,isLoading:e,ForwardPage:n,notFound:r,ForwardSearchPage:a})=>{const[u,d]=pe({onIntersection:r?a:n,delay:1200,marginFromBottom:30});return t?t.length===0?c.jsx(D,{notFound:r}):c.jsx(nt,{ref:d,onScroll:u,children:c.jsxs(rt,{children:[t.map(o=>c.jsx(G,{channel:o},o.id)),e&&c.jsx(K,{})]})}):null};be.propTypes={channels:s.array,isLoading:s.bool,ForwardPage:s.func,notFound:s.bool,ForwardSearchPage:s.func};export{be as C,xe as d};
