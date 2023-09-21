import{n as i,t as f,r as x,j as r,x as A,P as O,u as N,e as H,h as P,G as q,C as G,a as J}from"./index-71bb3e9b.js";import{H as U}from"./Header-6123a985.js";import{b as W}from"./index.esm-8015db49.js";import{G as Y}from"./iconBase-8dc62924.js";import"./index.esm-a64ee0f2.js";function Z(e){return Y({tag:"svg",attr:{viewBox:"0 0 16 16",fill:"currentColor"},child:[{tag:"path",attr:{d:"M1 1.91L1.78 1.5L15 7.44899V8.3999L1.78 14.33L1 13.91L2.58311 8L1 1.91ZM3.6118 8.5L2.33037 13.1295L13.5 7.8999L2.33037 2.83859L3.6118 7.43874L9 7.5V8.5H3.6118Z"}}]})(e)}const K=i.div`
width: ${f.breakpoints.mobile}px;
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
`,Q=i.ul`
width:100%;
align-items:flex-start;

`,X=i.li`
list-style: none;
display:flex;
flex-direction:${e=>e.owner?"row-reverse":"row"};
margin-top:12px;
`,_=i.div`
position:relative;
width: 32px;
height: 32px;
margin-right:${e=>e.owner?"0":"12px"};
margin-left:${e=>e.owner?"12px":"0"};
`,ee=i.div`
opacity:${e=>e.repeatMsg?"1":"0"};
border-radius:50%;
overflow:hidden;

`,te=i.img`
display:block;
width:100%;
height:auto;
`,re=i.div`
width: 10px;
height: 10px;
background-color:#34C759;
position:absolute;
bottom:0;
right:0;
border: 1px solid white;
border-radius:50%;

`,ne=i.div`
width:60%;
height:auto;
 word-wrap: break-word;
padding:4px 8px;
background-color:${e=>e.owner?"#007AFF":"#F2F2F7"};
/* border-radius:${e=>{if(e.owner)return"6px 0px 6px 6px";if(e.repeatMsg&&e.owner||e.repeatMsg&&!e.owner)return"6px 6px 6px 6px";if(!e.owner)return"0px 6px 6px 6px"}}; */
border-radius:${e=>e.owner?"6px 0px 6px 6px":"0px 6px 6px 6px"};
`,oe=i.p`
margin-bottom:8px;
font-family:'Segoe-Regular';
font-size:${f.fontSizes.s};
font-weight:600;
color:${f.colors.main};
`,se=i.p`

font-family:'Segoe-Regular';
font-size:${f.fontSizes.s};
font-weight:400;
color:${e=>e.owner?"white":f.colors.main};
`,ae=i.p`
margin-top:4px;
font-family:'Segoe-Regular';
font-size:${f.fontSizes.xs};
font-weight:400;
color:${e=>e.owner?"white":"#666668"};
text-align: right;
`,ie=i.span`
/* margin-top:4px; */
position:absolute;
font-family:'Segoe-Regular';
font-size:${f.fontSizes.xs};
font-weight:400;
color:"#666668";
border:1px solid #D3D3D3;
border-radius:20px;
padding:4px 8px;
top: 50%;
left: 50%; 
transform: translate(-50%, -50%); 
background-color:#FAFAFA;
`,ce=i.div`
position:relative;
margin-top:26px;
margin-bottom:26px;
`,le=({messages:e})=>{const t=x.useRef(),n=()=>{t.current.scrollIntoView({behavior:"smooth",block:"end"})};x.useEffect(()=>{n()},[e]);function o(s){const u=String(s.getDate()).padStart(2,"0"),g=String(s.getMonth()+1).padStart(2,"0"),S=s.getFullYear();return`${u}-${g}-${S}`}const a=new Date,c=new Date(a);c.setDate(a.getDate()-1);const l=o(a),h=o(c),p=s=>s===l?"today":s===h?"yesterday":s,d=e.reduce((s,u)=>{const g=o(u.date);return s[g]||(s[g]=[]),s[g].push(u),s},{});return r.jsx(K,{children:r.jsx(Q,{ref:t,children:Object.keys(d).map(s=>r.jsxs("div",{children:[r.jsxs(ce,{children:[r.jsx(ie,{children:p(s)}),r.jsx("hr",{})]}),r.jsx("ul",{children:d[s].map((u,g,S)=>g>0&&u.name===S[g-1].name?r.jsx(E,{repeatMsg:!1,el:u},u.id):r.jsx(E,{repeatMsg:!0,el:u},u.id))})]},s))})})},E=({el:e,repeatMsg:t})=>{function n(o){const a=o.getHours(),c=o.getMinutes(),l=a>=12?"PM":"AM";return`${a%12===0?12:a%12}:${c<10?"0":""}${c} ${l}`}return r.jsxs(X,{owner:e.owner,children:[r.jsxs(_,{owner:e.owner,children:[r.jsx(ee,{repeatMsg:t,children:r.jsx(te,{src:e.image,alt:e.name})}),e.isOnline&&t&&r.jsx(re,{})]}),r.jsxs(ne,{repeatMsg:t,owner:e.owner,children:[!e.owner&&r.jsx(oe,{children:e.name}),r.jsx(se,{owner:e.owner,children:e.text}),r.jsx(ae,{owner:e.owner,children:n(e.date)})]})]})},ue=i.div`
  width: ${f.breakpoints.mobile}px;
position:relative;
padding-bottom:20px;
background-color:${f.colors.white};
`,de=i.div`
display:flex;
align-items:center;
justify-content:center;
position:absolute;
top:8px;
right:12px
`,fe=i.input`
width:100%;
/* padding:6px 6px 0 32px  ; */
padding-top:6px;
padding-bottom:6px;
padding-right:72px;
font-family:'Segoe-Regular';
font-size:${f.fontSizes.s};
font-weight:400;
color:${f.colors.main};
border:none;
&:focus{
border:none;
outline:none
}
`,I=i.button`
&:first-of-type{
    margin-right:16px;
}
`;var T={exports:{}},j=1;function pe(){return j=(j*9301+49297)%233280,j/233280}function ge(e){j=e}var he={nextValue:pe,seed:ge},k=he,w="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_-",m,F,v;function C(){v=!1}function V(e){if(!e){m!==w&&(m=w,C());return}if(e!==m){if(e.length!==w.length)throw new Error("Custom alphabet for shortid must be "+w.length+" unique characters. You submitted "+e.length+" characters: "+e);var t=e.split("").filter(function(n,o,a){return o!==a.lastIndexOf(n)});if(t.length)throw new Error("Custom alphabet for shortid must be "+w.length+" unique characters. These characters were not unique: "+t.join(", "));m=e,C()}}function xe(e){return V(e),m}function me(e){k.seed(e),F!==e&&(C(),F=e)}function we(){m||V(w);for(var e=m.split(""),t=[],n=k.nextValue(),o;e.length>0;)n=k.nextValue(),o=Math.floor(n*e.length),t.push(e.splice(o,1)[0]);return t.join("")}function B(){return v||(v=we(),v)}function ve(e){var t=B();return t[e]}function be(){return m||w}var L={get:be,characters:xe,seed:me,lookup:ve,shuffled:B},$=typeof window=="object"&&(window.crypto||window.msCrypto),D;!$||!$.getRandomValues?D=function(e){for(var t=[],n=0;n<e;n++)t.push(Math.floor(Math.random()*256));return t}:D=function(e){return $.getRandomValues(new Uint8Array(e))};var ye=D,je=function(e,t,n){for(var o=(2<<Math.log(t.length-1)/Math.LN2)-1,a=-~(1.6*o*n/t.length),c="";;)for(var l=e(a),h=a;h--;)if(c+=t[l[h]&o]||"",c.length===+n)return c},Se=L,$e=ye,Me=je;function ke(e){for(var t=0,n,o="";!n;)o=o+Me($e,Se.get(),1),n=e<Math.pow(16,t+1),t++;return o}var Ce=ke,b=Ce,De=1567752802062,Le=7,y,R;function Ee(e){var t="",n=Math.floor((Date.now()-De)*.001);return n===R?y++:(y=0,R=n),t=t+b(Le),t=t+b(e),y>0&&(t=t+b(y)),t=t+b(n),t}var Ie=Ee,Fe=L;function Re(e){if(!e||typeof e!="string"||e.length<6)return!1;var t=new RegExp("[^"+Fe.get().replace(/[|\\{}()[\]^$+*?.-]/g,"\\$&")+"]");return!t.test(e)}var Te=Re;(function(e){var t=L,n=Ie,o=Te,a=0;function c(d){return t.seed(d),e.exports}function l(d){return a=d,e.exports}function h(d){return d!==void 0&&t.characters(d),t.shuffled()}function p(){return n(a)}e.exports=p,e.exports.generate=p,e.exports.seed=c,e.exports.worker=l,e.exports.characters=h,e.exports.isValid=o})(T);var Ve=T.exports,Be=Ve;const ze=A(Be),z=({handleSubmit:e})=>{const[t,n]=x.useState("");return r.jsxs(ue,{children:[r.jsx(fe,{type:"text",placeholder:"Start typing...",maxLength:200,value:t,onChange:o=>n(o.target.value)}),r.jsxs(de,{ButtonsContainer:!0,children:[r.jsx(I,{type:"button",onClick:()=>console.log("click"),children:r.jsx(W,{size:16,color:"#8E8E93"})}),r.jsx(I,{type:"button",onClick:()=>{e(t),n("")},children:r.jsx(Z,{size:16,color:"#3D3D3D"})})]})]})};z.propTypes={setMessages:O.func};const M=new WebSocket("wss://talk-chat6.onrender.com/ws/socket-server/"),qe=()=>{const e=N(),[t,n]=x.useState([]),[o,a]=x.useState(null),c=localStorage.getItem("accessToken");console.log(c);const{currentChannel:l,isLoading:h}=H(s=>s.channels),{channelId:p}=P();x.useEffect(()=>{e(q(p))},[p,e]),x.useEffect(()=>{a(M)},[]),x.useEffect(()=>(o&&(o.onopen=()=>{o.send(JSON.stringify({token:c,room:p}))},M.onmessage=function({data:s}){console.log("data",s);const u=JSON.parse(s);n(g=>[...g,{id:ze.generate(),text:u.message,date:new Date,owner:!0,name:"John",image:"https://via.placeholder.com/150",isOnline:!0}])}),()=>{M.onclose=()=>{console.log("connection closed")}}),[p,c,o]);const d=s=>{console.log("message",s),o.send(JSON.stringify({message:s}))};return console.log(t),l?r.jsx(G,{children:h?r.jsx(J,{}):r.jsxs(r.Fragment,{children:[r.jsx(U,{goBack:!0,imageUrl:l.image,channelName:l.title,id:l.id}),r.jsx(le,{messages:t}),r.jsx(z,{setMessages:n,handleSubmit:d})]})}):null};export{qe as default};
