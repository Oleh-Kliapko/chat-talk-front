import{n as c,t as d,r as h,j as r,x as A,P as O,u as N,e as H,h as P,G as q,Q as G,C as J,a as U}from"./index-707a7b48.js";import{H as W}from"./Header-880b925a.js";import{b as Y}from"./index.esm-26a2f708.js";import{G as Z}from"./iconBase-8880875c.js";import"./index.esm-c71626c1.js";function Q(e){return Z({tag:"svg",attr:{viewBox:"0 0 16 16",fill:"currentColor"},child:[{tag:"path",attr:{d:"M1 1.91L1.78 1.5L15 7.44899V8.3999L1.78 14.33L1 13.91L2.58311 8L1 1.91ZM3.6118 8.5L2.33037 13.1295L13.5 7.8999L2.33037 2.83859L3.6118 7.43874L9 7.5V8.5H3.6118Z"}}]})(e)}const K=c.div`
width: ${d.breakpoints.mobile}px;
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
`,X=c.ul`
width:100%;
align-items:flex-start;

`,_=c.li`
list-style: none;
display:flex;
flex-direction:${e=>e.owner?"row-reverse":"row"};
margin-top:12px;
`,ee=c.div`
position:relative;
width: 32px;
height: 32px;
margin-right:${e=>e.owner?"0":"12px"};
margin-left:${e=>e.owner?"12px":"0"};
`,te=c.div`
opacity:${e=>e.repeatMsg?"1":"0"};
border-radius:50%;
overflow:hidden;

`,re=c.img`
display:block;
width:100%;
height:auto;
`,ne=c.div`
width: 10px;
height: 10px;
background-color:#34C759;
position:absolute;
bottom:0;
right:0;
border: 1px solid white;
border-radius:50%;

`,oe=c.div`
width:60%;
height:auto;
 word-wrap: break-word;
padding:4px 8px;
background-color:${e=>e.owner?"#007AFF":"#F2F2F7"};
/* border-radius:${e=>{if(e.owner)return"6px 0px 6px 6px";if(e.repeatMsg&&e.owner||e.repeatMsg&&!e.owner)return"6px 6px 6px 6px";if(!e.owner)return"0px 6px 6px 6px"}}; */
border-radius:${e=>e.owner?"6px 0px 6px 6px":"0px 6px 6px 6px"};
`,se=c.p`
margin-bottom:8px;
font-family:'Segoe-Regular';
font-size:${d.fontSizes.s};
font-weight:600;
color:${d.colors.main};
`,ae=c.p`

font-family:'Segoe-Regular';
font-size:${d.fontSizes.s};
font-weight:400;
color:${e=>e.owner?"white":d.colors.main};
`,ie=c.p`
margin-top:4px;
font-family:'Segoe-Regular';
font-size:${d.fontSizes.xs};
font-weight:400;
color:${e=>e.owner?"white":"#666668"};
text-align: right;
`,ce=c.span`
/* margin-top:4px; */
position:absolute;
font-family:'Segoe-Regular';
font-size:${d.fontSizes.xs};
font-weight:400;
color:"#666668";
border:1px solid #D3D3D3;
border-radius:20px;
padding:4px 8px;
top: 50%;
left: 50%; 
transform: translate(-50%, -50%); 
background-color:#FAFAFA;
`,le=c.div`
position:relative;
margin-top:26px;
margin-bottom:26px;
`,ue=({messages:e})=>{const t=h.useRef(),o=()=>{t.current.scrollIntoView({behavior:"smooth",block:"end"})};h.useEffect(()=>{o()},[e]);function n(a){const u=String(a.getDate()).padStart(2,"0"),g=String(a.getMonth()+1).padStart(2,"0"),S=a.getFullYear();return`${u}-${g}-${S}`}const i=new Date,l=new Date(i);l.setDate(i.getDate()-1);const p=n(i),f=n(l),m=a=>a===p?"today":a===f?"yesterday":a,s=e.reduce((a,u)=>{const g=n(u.date);return a[g]||(a[g]=[]),a[g].push(u),a},{});return r.jsx(K,{children:r.jsx(X,{ref:t,children:Object.keys(s).map(a=>r.jsxs("div",{children:[r.jsxs(le,{children:[r.jsx(ce,{children:m(a)}),r.jsx("hr",{})]}),r.jsx("ul",{children:s[a].map((u,g,S)=>g>0&&u.name===S[g-1].name?r.jsx(E,{repeatMsg:!1,el:u},u.id):r.jsx(E,{repeatMsg:!0,el:u},u.id))})]},a))})})},E=({el:e,repeatMsg:t})=>{function o(n){const i=n.getHours(),l=n.getMinutes(),p=i>=12?"PM":"AM";return`${i%12===0?12:i%12}:${l<10?"0":""}${l} ${p}`}return r.jsxs(_,{owner:e.owner,children:[r.jsxs(ee,{owner:e.owner,children:[r.jsx(te,{repeatMsg:t,children:r.jsx(re,{src:e.image,alt:e.name})}),e.isOnline&&t&&r.jsx(ne,{})]}),r.jsxs(oe,{repeatMsg:t,owner:e.owner,children:[!e.owner&&r.jsx(se,{children:e.name}),r.jsx(ae,{owner:e.owner,children:e.text}),r.jsx(ie,{owner:e.owner,children:o(e.date)})]})]})},de=c.div`
  width: ${d.breakpoints.mobile}px;
position:relative;
padding-bottom:20px;
background-color:${d.colors.white};
`,fe=c.div`
display:flex;
align-items:center;
justify-content:center;
position:absolute;
top:8px;
right:12px
`,pe=c.input`
width:100%;
/* padding:6px 6px 0 32px  ; */
padding-top:6px;
padding-bottom:6px;
padding-right:72px;
font-family:'Segoe-Regular';
font-size:${d.fontSizes.s};
font-weight:400;
color:${d.colors.main};
border:none;
&:focus{
border:none;
outline:none
}
`,L=c.button`
&:first-of-type{
    margin-right:16px;
}
`;var V={exports:{}},j=1;function he(){return j=(j*9301+49297)%233280,j/233280}function ge(e){j=e}var xe={nextValue:he,seed:ge},k=xe,w="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_-",x,I,v;function M(){v=!1}function B(e){if(!e){x!==w&&(x=w,M());return}if(e!==x){if(e.length!==w.length)throw new Error("Custom alphabet for shortid must be "+w.length+" unique characters. You submitted "+e.length+" characters: "+e);var t=e.split("").filter(function(o,n,i){return n!==i.lastIndexOf(o)});if(t.length)throw new Error("Custom alphabet for shortid must be "+w.length+" unique characters. These characters were not unique: "+t.join(", "));x=e,M()}}function me(e){return B(e),x}function we(e){k.seed(e),I!==e&&(M(),I=e)}function ve(){x||B(w);for(var e=x.split(""),t=[],o=k.nextValue(),n;e.length>0;)o=k.nextValue(),n=Math.floor(o*e.length),t.push(e.splice(n,1)[0]);return t.join("")}function T(){return v||(v=ve(),v)}function be(e){var t=T();return t[e]}function ye(){return x||w}var D={get:ye,characters:me,seed:we,lookup:be,shuffled:T},$=typeof window=="object"&&(window.crypto||window.msCrypto),C;!$||!$.getRandomValues?C=function(e){for(var t=[],o=0;o<e;o++)t.push(Math.floor(Math.random()*256));return t}:C=function(e){return $.getRandomValues(new Uint8Array(e))};var je=C,Se=function(e,t,o){for(var n=(2<<Math.log(t.length-1)/Math.LN2)-1,i=-~(1.6*n*o/t.length),l="";;)for(var p=e(i),f=i;f--;)if(l+=t[p[f]&n]||"",l.length===+o)return l},$e=D,ke=je,Me=Se;function Ce(e){for(var t=0,o,n="";!o;)n=n+Me(ke,$e.get(),1),o=e<Math.pow(16,t+1),t++;return n}var De=Ce,b=De,Ee=1567752802062,Le=7,y,F;function Ie(e){var t="",o=Math.floor((Date.now()-Ee)*.001);return o===F?y++:(y=0,F=o),t=t+b(Le),t=t+b(e),y>0&&(t=t+b(y)),t=t+b(o),t}var Fe=Ie,Re=D;function Ve(e){if(!e||typeof e!="string"||e.length<6)return!1;var t=new RegExp("[^"+Re.get().replace(/[|\\{}()[\]^$+*?.-]/g,"\\$&")+"]");return!t.test(e)}var Be=Ve;(function(e){var t=D,o=Fe,n=Be,i=0;function l(s){return t.seed(s),e.exports}function p(s){return i=s,e.exports}function f(s){return s!==void 0&&t.characters(s),t.shuffled()}function m(){return o(i)}e.exports=m,e.exports.generate=m,e.exports.seed=l,e.exports.worker=p,e.exports.characters=f,e.exports.isValid=n})(V);var Te=V.exports,ze=Te;const R=A(ze),z=({sendMessage:e})=>{const[t,o]=h.useState("");return r.jsxs(de,{children:[r.jsx(pe,{type:"text",placeholder:"Start typing...",maxLength:200,value:t,onChange:n=>o(n.target.value)}),r.jsxs(fe,{ButtonsContainer:!0,children:[r.jsx(L,{type:"button",onClick:()=>console.log("click"),children:r.jsx(Y,{size:16,color:"#8E8E93"})}),r.jsx(L,{type:"button",onClick:()=>e(t),children:r.jsx(Q,{size:16,color:"#3D3D3D"})})]})]})};z.propTypes={setMessages:O.func};const Ae="wss://talk-chat6.onrender.com/ws/socket-server/",Ge=()=>{const e=N(),[t,o]=h.useState([]),[n,i]=h.useState(null),{currentChannel:l,isLoading:p}=H(s=>s.channels),{channelId:f}=P();h.useEffect(()=>{e(q(f))},[f,e]),h.useEffect(()=>{const s=new WebSocket(Ae);return i(s),()=>{s.readyState===WebSocket.OPEN&&s.close()}},[]),h.useEffect(()=>{n&&(n.onopen=()=>{console.log("Соединение установлено",n.readyState)},n.onmessage=s=>{const a=JSON.parse(s.data);o(u=>[...u,{id:R.generate(),text:a.message,date:new Date,owner:!0,name:"John",image:"https://via.placeholder.com/150",isOnline:!0}])})},[n]);const m=h.useCallback(s=>{if(s.trim()==="")return G.warning("enter message");n.send(JSON.stringify({id:R.generate(),text:s,date:new Date,owner:!0,name:"John",image:"https://via.placeholder.com/150",isOnline:!0}))},[n]);return l?r.jsx(J,{children:p?r.jsx(U,{}):r.jsxs(r.Fragment,{children:[r.jsx(W,{goBack:!0,imageUrl:l.image,channelName:l.title,id:l.id}),r.jsx(ue,{messages:t}),r.jsx(z,{sendMessage:m,setMessages:o})]})}):null};export{Ge as default};
