import{n as c,t as p,r as x,j as r,P as z,u as A,e as L,h as O,G as N,C as H,a as P}from"./index-8bc50d65.js";import{H as q}from"./Header-af33f9fa.js";import{b as G}from"./index.esm-f0c2f7c1.js";import{G as J}from"./iconBase-b63d3cc5.js";import"./index.esm-92ebbf70.js";function U(e){return J({tag:"svg",attr:{viewBox:"0 0 16 16",fill:"currentColor"},child:[{tag:"path",attr:{d:"M1 1.91L1.78 1.5L15 7.44899V8.3999L1.78 14.33L1 13.91L2.58311 8L1 1.91ZM3.6118 8.5L2.33037 13.1295L13.5 7.8999L2.33037 2.83859L3.6118 7.43874L9 7.5V8.5H3.6118Z"}}]})(e)}const W=c.div`
width: ${p.breakpoints.mobile}px;
display:flex;
flex-direction:column;
align-items:center;
justify-content:flex-end;
height:665px;
      overflow: auto;
      -ms-overflow-style: none;
      scrollbar-width: none;
&::-webkit-scrollbar {
      width: 0;
      height: 0;
}
`,Y=c.ul`
width:100%;
align-items:flex-start;
overflow: auto;
      -ms-overflow-style: none;
      scrollbar-width: none;
&::-webkit-scrollbar {
      width: 0;
      height: 0;
}
`,Z=c.li`
list-style: none;
display:flex;
flex-direction:${e=>e.owner?"row-reverse":"row"};
margin-top:12px;
`,K=c.div`
position:relative;
width: 32px;
height: 32px;
margin-right:${e=>e.owner?"0":"12px"};
margin-left:${e=>e.owner?"12px":"0"};
`,Q=c.div`
opacity:${e=>e.repeatMsg?"1":"0"};
border-radius:50%;
width: 32px;
height: 32px;
overflow:hidden;

`,X=c.img`
display:block;
width:100%;
height:100%;
`,_=c.div`
width: 10px;
height: 10px;
background-color:#34C759;
position:absolute;
bottom:0;
right:0;
border: 1px solid white;
border-radius:50%;

`,ee=c.div`
width:60%;
height:auto;
 word-wrap: break-word;
padding:4px 8px;
background-color:${e=>e.owner?"#007AFF":"#F2F2F7"};
/* border-radius:${e=>{if(e.owner)return"6px 0px 6px 6px";if(e.repeatMsg&&e.owner||e.repeatMsg&&!e.owner)return"6px 6px 6px 6px";if(!e.owner)return"0px 6px 6px 6px"}}; */
border-radius:${e=>e.owner?"6px 0px 6px 6px":"0px 6px 6px 6px"};
`,te=c.p`
margin-bottom:8px;
font-family:'Segoe-Regular';
font-size:${p.fontSizes.s};
font-weight:600;
color:${p.colors.main};
`,re=c.p`

font-family:'Segoe-Regular';
font-size:${p.fontSizes.s};
font-weight:400;
color:${e=>e.owner?"white":p.colors.main};
`,ne=c.p`
margin-top:4px;
font-family:'Segoe-Regular';
font-size:${p.fontSizes.xs};
font-weight:400;
color:${e=>e.owner?"white":"#666668"};
text-align: right;
`,oe=c.span`
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
`,se=c.div`
position:relative;
margin-top:26px;
margin-bottom:26px;
`,ae=({messages:e})=>{const t=x.useRef(),n=()=>{t.current.scrollIntoView({behavior:"smooth",block:"end"})};x.useEffect(()=>{n()},[e]);function o(a){const s=String(a.getDate()).padStart(2,"0"),d=String(a.getMonth()+1).padStart(2,"0"),v=a.getFullYear();return`${s}-${d}-${v}`}const i=new Date,l=new Date(i);l.setDate(i.getDate()-1);const f=o(i),h=o(l),g=a=>a===f?"today":a===h?"yesterday":a,u=e.reduce((a,s)=>{const d=o(s.date);return a[d]||(a[d]=[]),a[d].push(s),a},{});return r.jsx(W,{children:r.jsx(Y,{ref:t,children:Object.keys(u).map(a=>r.jsxs("div",{children:[r.jsxs(se,{children:[r.jsx(oe,{children:g(a)}),r.jsx("hr",{})]}),r.jsx("ul",{children:u[a].map((s,d,v)=>d>0&&s.name===v[d-1].name?r.jsx(I,{repeatMsg:!1,el:s},s.id):r.jsx(I,{repeatMsg:!0,el:s},s.id))})]},a))})})},I=({el:e,repeatMsg:t})=>{function n(o){const i=o.getHours(),l=o.getMinutes(),f=i>=12?"PM":"AM";return`${i%12===0?12:i%12}:${l<10?"0":""}${l} ${f}`}return r.jsxs(Z,{owner:e.owner,children:[r.jsxs(K,{owner:e.owner,children:[r.jsx(Q,{repeatMsg:t,children:r.jsx(X,{src:e.image,alt:e.name})}),e.isOnline&&t&&r.jsx(_,{})]}),r.jsxs(ee,{repeatMsg:t,owner:e.owner,children:[!e.owner&&r.jsx(te,{children:e.name}),r.jsx(re,{owner:e.owner,children:e.text}),r.jsx(ne,{owner:e.owner,children:n(e.date)})]})]})},ie=c.div`
  width: ${p.breakpoints.mobile}px;
position:relative;
padding-bottom:20px;
background-color:${p.colors.white};
`,ce=c.div`
display:flex;
align-items:center;
justify-content:center;
position:absolute;
top:8px;
right:12px
`,le=c.input`
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
`,E=c.button`
&:first-of-type{
    margin-right:16px;
}
`;var ue={exports:{}},S=1;function de(){return S=(S*9301+49297)%233280,S/233280}function fe(e){S=e}var pe={nextValue:de,seed:fe},k=pe,w="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_-",m,F,b;function M(){b=!1}function T(e){if(!e){m!==w&&(m=w,M());return}if(e!==m){if(e.length!==w.length)throw new Error("Custom alphabet for shortid must be "+w.length+" unique characters. You submitted "+e.length+" characters: "+e);var t=e.split("").filter(function(n,o,i){return o!==i.lastIndexOf(n)});if(t.length)throw new Error("Custom alphabet for shortid must be "+w.length+" unique characters. These characters were not unique: "+t.join(", "));m=e,M()}}function he(e){return T(e),m}function ge(e){k.seed(e),F!==e&&(M(),F=e)}function xe(){m||T(w);for(var e=m.split(""),t=[],n=k.nextValue(),o;e.length>0;)n=k.nextValue(),o=Math.floor(n*e.length),t.push(e.splice(o,1)[0]);return t.join("")}function V(){return b||(b=xe(),b)}function me(e){var t=V();return t[e]}function we(){return m||w}var D={get:we,characters:he,seed:ge,lookup:me,shuffled:V},$=typeof window=="object"&&(window.crypto||window.msCrypto),C;!$||!$.getRandomValues?C=function(e){for(var t=[],n=0;n<e;n++)t.push(Math.floor(Math.random()*256));return t}:C=function(e){return $.getRandomValues(new Uint8Array(e))};var ve=C,be=function(e,t,n){for(var o=(2<<Math.log(t.length-1)/Math.LN2)-1,i=-~(1.6*o*n/t.length),l="";;)for(var f=e(i),h=i;h--;)if(l+=t[f[h]&o]||"",l.length===+n)return l},ye=D,je=ve,Se=be;function $e(e){for(var t=0,n,o="";!n;)o=o+Se(je,ye.get(),1),n=e<Math.pow(16,t+1),t++;return o}var ke=$e,y=ke,Me=1567752802062,Ce=7,j,R;function De(e){var t="",n=Math.floor((Date.now()-Me)*.001);return n===R?j++:(j=0,R=n),t=t+y(Ce),t=t+y(e),j>0&&(t=t+y(j)),t=t+y(n),t}var Le=De,Ie=D;function Ee(e){if(!e||typeof e!="string"||e.length<6)return!1;var t=new RegExp("[^"+Ie.get().replace(/[|\\{}()[\]^$+*?.-]/g,"\\$&")+"]");return!t.test(e)}var Fe=Ee;(function(e){var t=D,n=Le,o=Fe,i=0;function l(u){return t.seed(u),e.exports}function f(u){return i=u,e.exports}function h(u){return u!==void 0&&t.characters(u),t.shuffled()}function g(){return n(i)}e.exports=g,e.exports.generate=g,e.exports.seed=l,e.exports.worker=f,e.exports.characters=h,e.exports.isValid=o})(ue);const B=({handleSubmit:e})=>{const[t,n]=x.useState("");return r.jsxs(ie,{children:[r.jsx(le,{type:"text",placeholder:"Start typing...",maxLength:200,value:t,onChange:o=>n(o.target.value)}),r.jsxs(ce,{ButtonsContainer:!0,children:[r.jsx(E,{type:"button",onClick:()=>console.log("click"),children:r.jsx(G,{size:16,color:"#8E8E93"})}),r.jsx(E,{type:"button",onClick:()=>{e(t),n("")},children:r.jsx(U,{size:16,color:"#3D3D3D"})})]})]})};B.propTypes={setMessages:z.func};const Ae=()=>{const e=A(),[t,n]=x.useState([]);console.log("messages",t);const[o,i]=x.useState(null),l=localStorage.getItem("accessToken"),{currentChannel:f,isLoading:h}=L(s=>s.channels),{userId:g}=L(s=>s.auth.user),{channelId:u}=O();x.useEffect(()=>{e(N(u))},[u,e]),x.useEffect(()=>{const s=new WebSocket(`wss://talk-chat6.onrender.com/ws/chat/?channel_id=${u}&token=${l}`);i(s)},[u,l]),console.log(o),x.useEffect(()=>{o&&(o.onmessage=function({data:s}){console.log("data",JSON.parse(s));const d=JSON.parse(s);n(v=>[...v,{id:d.message_id,text:d.message,date:new Date(d.created_at),owner:g===d.user_id,name:d.username,image:d.profile_photo,isOnline:!0}])})},[u,l,g,o]);const a=s=>{console.log("message",s),s!==""&&o.send(JSON.stringify({message:s}))};return console.log(t),f?r.jsx(H,{children:h?r.jsx(P,{}):r.jsxs(r.Fragment,{children:[r.jsx(q,{goBack:!0,imageUrl:f.image,channelName:f.title,id:f.id}),r.jsx(ae,{messages:t}),r.jsx(B,{setMessages:n,handleSubmit:a})]})}):null};export{Ae as default};
