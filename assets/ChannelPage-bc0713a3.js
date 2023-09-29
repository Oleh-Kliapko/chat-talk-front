import{n as i,t as p,r as x,j as r,x as z,P as A,u as O,e as N,h as H,G as P,C as J,a as q}from"./index-b98ecd04.js";import{H as G}from"./Header-eed3343a.js";import{b as U}from"./index.esm-ab78c1af.js";import{G as W}from"./iconBase-215b4474.js";import"./index.esm-92dcd509.js";function Y(e){return W({tag:"svg",attr:{viewBox:"0 0 16 16",fill:"currentColor"},child:[{tag:"path",attr:{d:"M1 1.91L1.78 1.5L15 7.44899V8.3999L1.78 14.33L1 13.91L2.58311 8L1 1.91ZM3.6118 8.5L2.33037 13.1295L13.5 7.8999L2.33037 2.83859L3.6118 7.43874L9 7.5V8.5H3.6118Z"}}]})(e)}const Z=i.div`
width: ${p.breakpoints.mobile}px;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
height:665px;
      overflow: auto;
      -ms-overflow-style: none;
      scrollbar-width: none;
&::-webkit-scrollbar {
      width: 0;
      height: 0;
}
`,K=i.ul`
width:100%;
align-items:flex-start;

`,Q=i.li`
list-style: none;
display:flex;
flex-direction:${e=>e.owner?"row-reverse":"row"};
margin-top:12px;
`,X=i.div`
position:relative;
width: 32px;
height: 32px;
margin-right:${e=>e.owner?"0":"12px"};
margin-left:${e=>e.owner?"12px":"0"};
`,_=i.div`
opacity:${e=>e.repeatMsg?"1":"0"};
border-radius:50%;
overflow:hidden;

`,ee=i.img`
display:block;
width:100%;
height:auto;
`,te=i.div`
width: 10px;
height: 10px;
background-color:#34C759;
position:absolute;
bottom:0;
right:0;
border: 1px solid white;
border-radius:50%;

`,re=i.div`
width:60%;
height:auto;
 word-wrap: break-word;
padding:4px 8px;
background-color:${e=>e.owner?"#007AFF":"#F2F2F7"};
/* border-radius:${e=>{if(e.owner)return"6px 0px 6px 6px";if(e.repeatMsg&&e.owner||e.repeatMsg&&!e.owner)return"6px 6px 6px 6px";if(!e.owner)return"0px 6px 6px 6px"}}; */
border-radius:${e=>e.owner?"6px 0px 6px 6px":"0px 6px 6px 6px"};
`,ne=i.p`
margin-bottom:8px;
font-family:'Segoe-Regular';
font-size:${p.fontSizes.s};
font-weight:600;
color:${p.colors.main};
`,oe=i.p`

font-family:'Segoe-Regular';
font-size:${p.fontSizes.s};
font-weight:400;
color:${e=>e.owner?"white":p.colors.main};
`,se=i.p`
margin-top:4px;
font-family:'Segoe-Regular';
font-size:${p.fontSizes.xs};
font-weight:400;
color:${e=>e.owner?"white":"#666668"};
text-align: right;
`,ae=i.span`
/* margin-top:4px; */
position:absolute;
font-family:'Segoe-Regular';
font-size:${p.fontSizes.xs};
font-weight:400;
color:"#666668";
border:1px solid #D3D3D3;
border-radius:20px;
padding:4px 8px;
top: 50%;
left: 50%; 
transform: translate(-50%, -50%); 
background-color:#FAFAFA;
`,ie=i.div`
position:relative;
margin-top:26px;
margin-bottom:26px;
`,ce=({messages:e})=>{const t=x.useRef(),o=()=>{t.current.scrollIntoView({behavior:"smooth",block:"end"})};x.useEffect(()=>{o()},[e]);function n(s){const d=String(s.getDate()).padStart(2,"0"),h=String(s.getMonth()+1).padStart(2,"0"),S=s.getFullYear();return`${d}-${h}-${S}`}const a=new Date,c=new Date(a);c.setDate(a.getDate()-1);const l=n(a),g=n(c),u=s=>s===l?"today":s===g?"yesterday":s,f=e.reduce((s,d)=>{const h=n(d.date);return s[h]||(s[h]=[]),s[h].push(d),s},{});return r.jsx(Z,{children:r.jsx(K,{ref:t,children:Object.keys(f).map(s=>r.jsxs("div",{children:[r.jsxs(ie,{children:[r.jsx(ae,{children:u(s)}),r.jsx("hr",{})]}),r.jsx("ul",{children:f[s].map((d,h,S)=>h>0&&d.name===S[h-1].name?r.jsx(L,{repeatMsg:!1,el:d},d.id):r.jsx(L,{repeatMsg:!0,el:d},d.id))})]},s))})})},L=({el:e,repeatMsg:t})=>{function o(n){const a=n.getHours(),c=n.getMinutes(),l=a>=12?"PM":"AM";return`${a%12===0?12:a%12}:${c<10?"0":""}${c} ${l}`}return r.jsxs(Q,{owner:e.owner,children:[r.jsxs(X,{owner:e.owner,children:[r.jsx(_,{repeatMsg:t,children:r.jsx(ee,{src:e.image,alt:e.name})}),e.isOnline&&t&&r.jsx(te,{})]}),r.jsxs(re,{repeatMsg:t,owner:e.owner,children:[!e.owner&&r.jsx(ne,{children:e.name}),r.jsx(oe,{owner:e.owner,children:e.text}),r.jsx(se,{owner:e.owner,children:o(e.date)})]})]})},le=i.div`
  width: ${p.breakpoints.mobile}px;
position:relative;
padding-bottom:20px;
background-color:${p.colors.white};
`,ue=i.div`
display:flex;
align-items:center;
justify-content:center;
position:absolute;
top:8px;
right:12px
`,de=i.input`
width:100%;
/* padding:6px 6px 0 32px  ; */
padding-top:6px;
padding-bottom:6px;
padding-right:72px;
font-family:'Segoe-Regular';
font-size:${p.fontSizes.s};
font-weight:400;
color:${p.colors.main};
border:none;
&:focus{
border:none;
outline:none
}
`,E=i.button`
&:first-of-type{
    margin-right:16px;
}
`;var R={exports:{}},j=1;function fe(){return j=(j*9301+49297)%233280,j/233280}function pe(e){j=e}var he={nextValue:fe,seed:pe},M=he,w="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_-",m,I,v;function k(){v=!1}function T(e){if(!e){m!==w&&(m=w,k());return}if(e!==m){if(e.length!==w.length)throw new Error("Custom alphabet for shortid must be "+w.length+" unique characters. You submitted "+e.length+" characters: "+e);var t=e.split("").filter(function(o,n,a){return n!==a.lastIndexOf(o)});if(t.length)throw new Error("Custom alphabet for shortid must be "+w.length+" unique characters. These characters were not unique: "+t.join(", "));m=e,k()}}function ge(e){return T(e),m}function xe(e){M.seed(e),I!==e&&(k(),I=e)}function me(){m||T(w);for(var e=m.split(""),t=[],o=M.nextValue(),n;e.length>0;)o=M.nextValue(),n=Math.floor(o*e.length),t.push(e.splice(n,1)[0]);return t.join("")}function V(){return v||(v=me(),v)}function we(e){var t=V();return t[e]}function ve(){return m||w}var D={get:ve,characters:ge,seed:xe,lookup:we,shuffled:V},$=typeof window=="object"&&(window.crypto||window.msCrypto),C;!$||!$.getRandomValues?C=function(e){for(var t=[],o=0;o<e;o++)t.push(Math.floor(Math.random()*256));return t}:C=function(e){return $.getRandomValues(new Uint8Array(e))};var be=C,ye=function(e,t,o){for(var n=(2<<Math.log(t.length-1)/Math.LN2)-1,a=-~(1.6*n*o/t.length),c="";;)for(var l=e(a),g=a;g--;)if(c+=t[l[g]&n]||"",c.length===+o)return c},je=D,Se=be,$e=ye;function Me(e){for(var t=0,o,n="";!o;)n=n+$e(Se,je.get(),1),o=e<Math.pow(16,t+1),t++;return n}var ke=Me,b=ke,Ce=1567752802062,De=7,y,F;function Le(e){var t="",o=Math.floor((Date.now()-Ce)*.001);return o===F?y++:(y=0,F=o),t=t+b(De),t=t+b(e),y>0&&(t=t+b(y)),t=t+b(o),t}var Ee=Le,Ie=D;function Fe(e){if(!e||typeof e!="string"||e.length<6)return!1;var t=new RegExp("[^"+Ie.get().replace(/[|\\{}()[\]^$+*?.-]/g,"\\$&")+"]");return!t.test(e)}var Re=Fe;(function(e){var t=D,o=Ee,n=Re,a=0;function c(f){return t.seed(f),e.exports}function l(f){return a=f,e.exports}function g(f){return f!==void 0&&t.characters(f),t.shuffled()}function u(){return o(a)}e.exports=u,e.exports.generate=u,e.exports.seed=c,e.exports.worker=l,e.exports.characters=g,e.exports.isValid=n})(R);var Te=R.exports,Ve=Te;const Be=z(Ve),B=({handleSubmit:e})=>{const[t,o]=x.useState("");return r.jsxs(le,{children:[r.jsx(de,{type:"text",placeholder:"Start typing...",maxLength:200,value:t,onChange:n=>o(n.target.value)}),r.jsxs(ue,{ButtonsContainer:!0,children:[r.jsx(E,{type:"button",onClick:()=>console.log("click"),children:r.jsx(U,{size:16,color:"#8E8E93"})}),r.jsx(E,{type:"button",onClick:()=>{e(t),o("")},children:r.jsx(Y,{size:16,color:"#3D3D3D"})})]})]})};B.propTypes={setMessages:A.func};const Pe=()=>{const e=O(),[t,o]=x.useState([]);console.log("messages",t);const[n,a]=x.useState(null),c=localStorage.getItem("accessToken"),{currentChannel:l,isLoading:g}=N(s=>s.channels),{channelId:u}=H();x.useEffect(()=>{e(P(u))},[u,e]),x.useEffect(()=>{const s=new WebSocket(`wss://talk-chat6.onrender.com/ws/chat/?channel_id=${u}&token=${c}; `);a(s)},[u,c]),console.log(n),x.useEffect(()=>{n&&(n.onopen=()=>{n.send(JSON.stringify({token:c,room:u}))},n.onmessage=function({data:s}){console.log("data",JSON.parse(s));const d=JSON.parse(s);o(h=>[...h,{id:Be.generate(),text:d.message,date:new Date,owner:!0,name:"John",image:"https://via.placeholder.com/150",isOnline:!0}])})},[u,c,n]);const f=s=>{console.log("message",s),n.send(JSON.stringify({message:s}))};return console.log(t),l?r.jsx(J,{children:g?r.jsx(q,{}):r.jsxs(r.Fragment,{children:[r.jsx(G,{goBack:!0,imageUrl:l.image,channelName:l.title,id:l.id}),r.jsx(ce,{messages:t}),r.jsx(B,{setMessages:o,handleSubmit:f})]})}):null};export{Pe as default};
