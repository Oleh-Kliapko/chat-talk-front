import{n as c,t as d,r as g,j as r,x as A,P as O,u as H,e as N,h as P,G as q,C as G,a as J}from"./index-678a41bd.js";import{H as U}from"./Header-401ff7e6.js";import{b as W}from"./index.esm-d7922c64.js";import{G as Y}from"./iconBase-047d1e6d.js";import"./index.esm-8c5b99ee.js";function Z(e){return Y({tag:"svg",attr:{viewBox:"0 0 16 16",fill:"currentColor"},child:[{tag:"path",attr:{d:"M1 1.91L1.78 1.5L15 7.44899V8.3999L1.78 14.33L1 13.91L2.58311 8L1 1.91ZM3.6118 8.5L2.33037 13.1295L13.5 7.8999L2.33037 2.83859L3.6118 7.43874L9 7.5V8.5H3.6118Z"}}]})(e)}const K=c.div`
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
`,Q=c.ul`
width:100%;
align-items:flex-start;

`,X=c.li`
list-style: none;
display:flex;
flex-direction:${e=>e.owner?"row-reverse":"row"};
margin-top:12px;
`,_=c.div`
position:relative;
width: 32px;
height: 32px;
margin-right:${e=>e.owner?"0":"12px"};
margin-left:${e=>e.owner?"12px":"0"};
`,ee=c.div`
opacity:${e=>e.repeatMsg?"1":"0"};
border-radius:50%;
overflow:hidden;

`,te=c.img`
display:block;
width:100%;
height:auto;
`,re=c.div`
width: 10px;
height: 10px;
background-color:#34C759;
position:absolute;
bottom:0;
right:0;
border: 1px solid white;
border-radius:50%;

`,ne=c.div`
width:60%;
height:auto;
 word-wrap: break-word;
padding:4px 8px;
background-color:${e=>e.owner?"#007AFF":"#F2F2F7"};
/* border-radius:${e=>{if(e.owner)return"6px 0px 6px 6px";if(e.repeatMsg&&e.owner||e.repeatMsg&&!e.owner)return"6px 6px 6px 6px";if(!e.owner)return"0px 6px 6px 6px"}}; */
border-radius:${e=>e.owner?"6px 0px 6px 6px":"0px 6px 6px 6px"};
`,oe=c.p`
margin-bottom:8px;
font-family:'Segoe-Regular';
font-size:${d.fontSizes.s};
font-weight:600;
color:${d.colors.main};
`,se=c.p`

font-family:'Segoe-Regular';
font-size:${d.fontSizes.s};
font-weight:400;
color:${e=>e.owner?"white":d.colors.main};
`,ae=c.p`
margin-top:4px;
font-family:'Segoe-Regular';
font-size:${d.fontSizes.xs};
font-weight:400;
color:${e=>e.owner?"white":"#666668"};
text-align: right;
`,ie=c.span`
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
`,ce=c.div`
position:relative;
margin-top:26px;
margin-bottom:26px;
`,le=({messages:e})=>{const t=g.useRef(),n=()=>{t.current.scrollIntoView({behavior:"smooth",block:"end"})};g.useEffect(()=>{n()},[e]);function o(s){const u=String(s.getDate()).padStart(2,"0"),h=String(s.getMonth()+1).padStart(2,"0"),S=s.getFullYear();return`${u}-${h}-${S}`}const a=new Date,l=new Date(a);l.setDate(a.getDate()-1);const p=o(a),f=o(l),m=s=>s===p?"today":s===f?"yesterday":s,i=e.reduce((s,u)=>{const h=o(u.date);return s[h]||(s[h]=[]),s[h].push(u),s},{});return r.jsx(K,{children:r.jsx(Q,{ref:t,children:Object.keys(i).map(s=>r.jsxs("div",{children:[r.jsxs(ce,{children:[r.jsx(ie,{children:m(s)}),r.jsx("hr",{})]}),r.jsx("ul",{children:i[s].map((u,h,S)=>h>0&&u.name===S[h-1].name?r.jsx(L,{repeatMsg:!1,el:u},u.id):r.jsx(L,{repeatMsg:!0,el:u},u.id))})]},s))})})},L=({el:e,repeatMsg:t})=>{function n(o){const a=o.getHours(),l=o.getMinutes(),p=a>=12?"PM":"AM";return`${a%12===0?12:a%12}:${l<10?"0":""}${l} ${p}`}return r.jsxs(X,{owner:e.owner,children:[r.jsxs(_,{owner:e.owner,children:[r.jsx(ee,{repeatMsg:t,children:r.jsx(te,{src:e.image,alt:e.name})}),e.isOnline&&t&&r.jsx(re,{})]}),r.jsxs(ne,{repeatMsg:t,owner:e.owner,children:[!e.owner&&r.jsx(oe,{children:e.name}),r.jsx(se,{owner:e.owner,children:e.text}),r.jsx(ae,{owner:e.owner,children:n(e.date)})]})]})},ue=c.div`
  width: ${d.breakpoints.mobile}px;
position:relative;
padding-bottom:20px;
background-color:${d.colors.white};
`,de=c.div`
display:flex;
align-items:center;
justify-content:center;
position:absolute;
top:8px;
right:12px
`,fe=c.input`
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
`,E=c.button`
&:first-of-type{
    margin-right:16px;
}
`;var V={exports:{}},j=1;function pe(){return j=(j*9301+49297)%233280,j/233280}function he(e){j=e}var ge={nextValue:pe,seed:he},M=ge,w="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_-",x,I,v;function k(){v=!1}function B(e){if(!e){x!==w&&(x=w,k());return}if(e!==x){if(e.length!==w.length)throw new Error("Custom alphabet for shortid must be "+w.length+" unique characters. You submitted "+e.length+" characters: "+e);var t=e.split("").filter(function(n,o,a){return o!==a.lastIndexOf(n)});if(t.length)throw new Error("Custom alphabet for shortid must be "+w.length+" unique characters. These characters were not unique: "+t.join(", "));x=e,k()}}function xe(e){return B(e),x}function me(e){M.seed(e),I!==e&&(k(),I=e)}function we(){x||B(w);for(var e=x.split(""),t=[],n=M.nextValue(),o;e.length>0;)n=M.nextValue(),o=Math.floor(n*e.length),t.push(e.splice(o,1)[0]);return t.join("")}function T(){return v||(v=we(),v)}function ve(e){var t=T();return t[e]}function be(){return x||w}var D={get:be,characters:xe,seed:me,lookup:ve,shuffled:T},$=typeof window=="object"&&(window.crypto||window.msCrypto),C;!$||!$.getRandomValues?C=function(e){for(var t=[],n=0;n<e;n++)t.push(Math.floor(Math.random()*256));return t}:C=function(e){return $.getRandomValues(new Uint8Array(e))};var ye=C,je=function(e,t,n){for(var o=(2<<Math.log(t.length-1)/Math.LN2)-1,a=-~(1.6*o*n/t.length),l="";;)for(var p=e(a),f=a;f--;)if(l+=t[p[f]&o]||"",l.length===+n)return l},Se=D,$e=ye,Me=je;function ke(e){for(var t=0,n,o="";!n;)o=o+Me($e,Se.get(),1),n=e<Math.pow(16,t+1),t++;return o}var Ce=ke,b=Ce,De=1567752802062,Le=7,y,F;function Ee(e){var t="",n=Math.floor((Date.now()-De)*.001);return n===F?y++:(y=0,F=n),t=t+b(Le),t=t+b(e),y>0&&(t=t+b(y)),t=t+b(n),t}var Ie=Ee,Fe=D;function Re(e){if(!e||typeof e!="string"||e.length<6)return!1;var t=new RegExp("[^"+Fe.get().replace(/[|\\{}()[\]^$+*?.-]/g,"\\$&")+"]");return!t.test(e)}var Ve=Re;(function(e){var t=D,n=Ie,o=Ve,a=0;function l(i){return t.seed(i),e.exports}function p(i){return a=i,e.exports}function f(i){return i!==void 0&&t.characters(i),t.shuffled()}function m(){return n(a)}e.exports=m,e.exports.generate=m,e.exports.seed=l,e.exports.worker=p,e.exports.characters=f,e.exports.isValid=o})(V);var Be=V.exports,Te=Be;const ze=A(Te),z=({handleSubmit:e})=>{const[t,n]=g.useState("");return r.jsxs(ue,{children:[r.jsx(fe,{type:"text",placeholder:"Start typing...",maxLength:200,value:t,onChange:o=>n(o.target.value)}),r.jsxs(de,{ButtonsContainer:!0,children:[r.jsx(E,{type:"button",onClick:()=>console.log("click"),children:r.jsx(W,{size:16,color:"#8E8E93"})}),r.jsx(E,{type:"button",onClick:()=>{e(t),n("")},children:r.jsx(Z,{size:16,color:"#3D3D3D"})})]})]})};z.propTypes={setMessages:O.func};const R=new WebSocket("wss://talk-chat6.onrender.com/ws/socket-server/"),qe=()=>{const e=H(),[t,n]=g.useState([]),[o,a]=g.useState(null),{currentChannel:l,isLoading:p}=N(i=>i.channels),{channelId:f}=P();g.useEffect(()=>{e(q(f))},[f,e]),g.useEffect(()=>{a(R)},[]),g.useEffect(()=>{o&&(R.onmessage=function({data:i}){console.log("data",i);const s=JSON.parse(i);n(u=>[...u,{id:ze.generate(),text:s.message,date:new Date,owner:!0,name:"John",image:"https://via.placeholder.com/150",isOnline:!0}])})},[o]);const m=i=>{console.log("message",i),o.send(JSON.stringify({message:i}))};return console.log(t),l?r.jsx(G,{children:p?r.jsx(J,{}):r.jsxs(r.Fragment,{children:[r.jsx(U,{goBack:!0,imageUrl:l.image,channelName:l.title,id:l.id}),r.jsx(le,{messages:t}),r.jsx(z,{setMessages:n,handleSubmit:m})]})}):null};export{qe as default};
