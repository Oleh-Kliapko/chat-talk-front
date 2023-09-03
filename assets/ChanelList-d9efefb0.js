import{n as f,t as m,y as Y,P as c,j as a,a as J,r as j,F as T,x as z,f as K}from"./index-b2a6d7b9.js";const Q="/chat-talk-front/assets/emptyChannels-c83e59ee.png",V="/chat-talk-front/assets/notFound-ee251c35.png",Z=f.div`
width: ${m.breakpoints.mobile}px;
display:flex;
flex-direction:column;
align-items:center;
padding-top:100px;
`,ee=f.p`
margin-top:100px;
font-size:${m.fontSizes.m};
font-weight: 400;
font-family:"Segoe-Regular";
color:${m.colors.main};
`,te=f(Y)`
margin-top:20px;
text-decoration:underline;
color:${m.colors.main};
&:hover{
    cursor: pointer;
}
`,D=({notFound:e})=>a.jsxs(Z,{children:[a.jsx("img",{src:e?V:Q,width:280,height:280}),a.jsx(ee,{children:e?"Not found request":"No channels yet"}),!e&&a.jsx(te,{to:"/create-channel",children:"Create"})]});D.propTypes={notFound:c.bool};const ne=f.div`
width: ${m.breakpoints.mobile}px;
/* height:680px; */
overflow-y:scroll;
&::-webkit-scrollbar {
      width: 0;
      height: 0;
}
`,re=f.ul`

`,ie=f.li`
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
`,oe=f.div`
margin-right:8px;
`,ae=f.div`
display:flex;
flex-direction:column;
`,se=f.img`
border-radius:50%;
width:40px;
height:40px;
`,ce=f.p`
font-size:${m.fontSizes.m};
font-weight:700;
margin-bottom:8px;
`,le=f.p`
font-size:14px;
font-weight:400;
`,de=f.div`
position:absolute;
top:8px;
right:8px;
font-size:14px;
font-weight:300
`,G=({channel:e})=>{const{title:t,description:n,image:r,created_at:s}=e,u=J(),d=j.useCallback((l,g)=>l.length>g?l.substring(0,g)+"...":l,[]),o=j.useCallback(()=>{const l=new Date(s),g=String(l.getUTCDate()).padStart(2,"0"),v=String(l.getUTCMonth()+1).padStart(2,"0"),b=l.getUTCFullYear();return`${g}.${v}.${b}`},[s]);return a.jsxs(ie,{onClick:()=>{u(`/channels/${e.id}`)},children:[a.jsxs(oe,{children:[" ",a.jsx(se,{src:r,alt:"chanel image",width:40,height:40})]}),a.jsxs(ae,{children:[a.jsx(ce,{children:t}),a.jsx(le,{children:d(n,90)})]}),a.jsx(de,{children:o()})]})};G.propTypes={channel:c.exact({id:c.number,title:c.string,description:c.string,image:c.string,created_at:c.string,owner:c.exact({id:c.number,email:c.string,username:c.string})})};function fe(e){var t=typeof e;return e!=null&&(t=="object"||t=="function")}var C=fe,ue=typeof T=="object"&&T&&T.Object===Object&&T,ge=ue,me=ge,pe=typeof self=="object"&&self&&self.Object===Object&&self,be=me||pe||Function("return this")(),M=be,he=M,xe=function(){return he.Date.now()},ve=xe,ye=/\s/;function Te(e){for(var t=e.length;t--&&ye.test(e.charAt(t)););return t}var je=Te,$e=je,Se=/^\s+/;function we(e){return e&&e.slice(0,$e(e)+1).replace(Se,"")}var Oe=we,Ce=M,ke=Ce.Symbol,W=ke,E=W,H=Object.prototype,_e=H.hasOwnProperty,Ie=H.toString,x=E?E.toStringTag:void 0;function Ee(e){var t=_e.call(e,x),n=e[x];try{e[x]=void 0;var r=!0}catch{}var s=Ie.call(e);return r&&(t?e[x]=n:delete e[x]),s}var Le=Ee,Re=Object.prototype,Fe=Re.toString;function Ne(e){return Fe.call(e)}var Pe=Ne,L=W,ze=Le,De=Pe,Ge="[object Null]",Me="[object Undefined]",R=L?L.toStringTag:void 0;function We(e){return e==null?e===void 0?Me:Ge:R&&R in Object(e)?ze(e):De(e)}var He=We;function Ue(e){return e!=null&&typeof e=="object"}var Ae=Ue,Be=He,Xe=Ae,qe="[object Symbol]";function Ye(e){return typeof e=="symbol"||Xe(e)&&Be(e)==qe}var Je=Ye,Ke=Oe,F=C,Qe=Je,N=0/0,Ve=/^[-+]0x[0-9a-f]+$/i,Ze=/^0b[01]+$/i,et=/^0o[0-7]+$/i,tt=parseInt;function nt(e){if(typeof e=="number")return e;if(Qe(e))return N;if(F(e)){var t=typeof e.valueOf=="function"?e.valueOf():e;e=F(t)?t+"":t}if(typeof e!="string")return e===0?e:+e;e=Ke(e);var n=Ze.test(e);return n||et.test(e)?tt(e.slice(2),n?2:8):Ve.test(e)?N:+e}var rt=nt,it=C,O=ve,P=rt,ot="Expected a function",at=Math.max,st=Math.min;function ct(e,t,n){var r,s,u,d,o,l,g=0,v=!1,b=!1,$=!0;if(typeof e!="function")throw new TypeError(ot);t=P(t)||0,it(n)&&(v=!!n.leading,b="maxWait"in n,u=b?at(P(n.maxWait)||0,t):u,$="trailing"in n?!!n.trailing:$);function S(i){var p=r,h=s;return r=s=void 0,g=i,d=e.apply(h,p),d}function A(i){return g=i,o=setTimeout(y,t),v?S(i):d}function B(i){var p=i-l,h=i-g,I=t-p;return b?st(I,u-h):I}function k(i){var p=i-l,h=i-g;return l===void 0||p>=t||p<0||b&&h>=u}function y(){var i=O();if(k(i))return _(i);o=setTimeout(y,B(i))}function _(i){return o=void 0,$&&r?S(i):(r=s=void 0,d)}function X(){o!==void 0&&clearTimeout(o),g=0,r=l=s=o=void 0}function q(){return o===void 0?d:_(O())}function w(){var i=O(),p=k(i);if(r=arguments,s=this,l=i,p){if(o===void 0)return A(l);if(b)return clearTimeout(o),o=setTimeout(y,t),S(l)}return o===void 0&&(o=setTimeout(y,t)),d}return w.cancel=X,w.flush=q,w}var U=ct;const xt=z(U);var lt=U,dt=C,ft="Expected a function";function ut(e,t,n){var r=!0,s=!0;if(typeof e!="function")throw new TypeError(ft);return dt(n)&&(r="leading"in n?!!n.leading:r,s="trailing"in n?!!n.trailing:s),lt(e,t,{leading:r,maxWait:t,trailing:s})}var gt=ut;const mt=z(gt);function pt({onIntersection:e,delay:t=1e3,marginFromBottom:n=10}){const r=j.useRef(null);return[j.useCallback(mt(()=>{const u=r.current.scrollTop,d=r.current.clientHeight;r.current.scrollHeight-u-d-n<=0&&e()},t),[e,r,n,t]),r]}const bt=({channels:e,isLoading:t,ForwardPage:n,notFound:r,ForwardSearchPage:s})=>{const[u,d]=pt({onIntersection:r?s:n,delay:1200,marginFromBottom:30});return e?a.jsx(ne,{ref:d,onScroll:u,children:a.jsx(re,{children:e.length===0?a.jsx(D,{notFound:r}):a.jsxs(a.Fragment,{children:[e.map(o=>a.jsx(G,{channel:o},o.id)),t&&a.jsx(K,{})]})})}):null};bt.propTypes={channels:c.array,isLoading:c.bool,ForwardPage:c.func,notFound:c.bool,ForwardSearchPage:c.func};export{bt as C,xt as d};
