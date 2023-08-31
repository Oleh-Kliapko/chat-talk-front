import{G as R,n as i,t as c,r as w,j as n,x as V,Q as S,M as z,e as A,o as B,y as H,z as N,C as q,D as P,H as G}from"./index-2d9bc38b.js";function U(e){return R({tag:"svg",attr:{viewBox:"0 0 16 16",fill:"currentColor"},child:[{tag:"path",attr:{d:"M1 1.91L1.78 1.5L15 7.44899V8.3999L1.78 14.33L1 13.91L2.58311 8L1 1.91ZM3.6118 8.5L2.33037 13.1295L13.5 7.8999L2.33037 2.83859L3.6118 7.43874L9 7.5V8.5H3.6118Z"}}]})(e)}const Y=i.div`
width: ${c.breakpoints.mobile}px;
height:665px;
      overflow: auto;
      -ms-overflow-style: none;
      scrollbar-width: none;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
&::-webkit-scrollbar {
      width: 0;
      height: 0;
}
`,Q=i.ul`
width:100%;
align-items:flex-start;

`,W=i.li`
list-style: none;
display:flex;
flex-direction:${e=>e.owner?"row-reverse":"row"};
margin-top:12px;
`,K=i.div`
position:relative;
width: 32px;
height: 32px;
margin-right:${e=>e.owner?"0":"12px"};
margin-left:${e=>e.owner?"12px":"0"};
`,X=i.div`
opacity:${e=>e.repeatMsg?"1":"0"};
border-radius:50%;
overflow:hidden;

`,_=i.img`
display:block;
width:100%;
height:auto;
`,ee=i.div`
width: 10px;
height: 10px;
background-color:#34C759;
position:absolute;
bottom:0;
right:0;
border: 1px solid white;
border-radius:50%;

`,te=i.div`
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
font-size:${c.fontSizes.s};
font-weight:600;
color:${c.colors.main};
`,ae=i.p`

font-family:'Segoe-Regular';
font-size:${c.fontSizes.s};
font-weight:400;
color:${e=>e.owner?"white":c.colors.main};
`,re=i.p`
margin-top:4px;
font-family:'Segoe-Regular';
font-size:${c.fontSizes.xs};
font-weight:400;
color:${e=>e.owner?"white":"#666668"};
text-align: right;
`,oe=i.span`
/* margin-top:4px; */
position:absolute;
font-family:'Segoe-Regular';
font-size:${c.fontSizes.xs};
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
`,se=({messages:e})=>{const t=w.useRef();console.log("MessageList");const a=()=>{t.current.scrollIntoView({behavior:"smooth",block:"end"})};w.useEffect(()=>{a()},[e]);function r(s){const m=String(s.getDate()).padStart(2,"0"),u=String(s.getMonth()+1).padStart(2,"0"),b=s.getFullYear();return`${m}-${u}-${b}`}const o=new Date,l=new Date(o);l.setDate(o.getDate()-1);const p=r(o),d=r(l),g=s=>s===p?"today":s===d?"yesterday":s,h=e.reduce((s,m)=>{const u=r(m.date);return s[u]||(s[u]=[]),s[u].push(m),s},{});return console.log("data",h),n.jsx(Y,{children:n.jsx(Q,{ref:t,children:Object.keys(h).map(s=>n.jsxs("div",{children:[n.jsxs(ie,{children:[n.jsx(oe,{children:g(s)}),n.jsx("hr",{})]}),n.jsx("ul",{children:h[s].map((m,u,b)=>u>0&&m.name===b[u-1].name?n.jsx(C,{repeatMsg:!1,el:m},m.id):n.jsx(C,{repeatMsg:!0,el:m},m.id))})]},s))})})},C=({el:e,repeatMsg:t})=>{function a(r){const o=r.getHours(),l=r.getMinutes(),p=o>=12?"PM":"AM";return`${o%12===0?12:o%12}:${l<10?"0":""}${l} ${p}`}return n.jsxs(W,{owner:e.owner,children:[n.jsxs(K,{owner:e.owner,children:[n.jsx(X,{repeatMsg:t,children:n.jsx(_,{src:e.image,alt:e.name})}),e.isOnline&&t&&n.jsx(ee,{})]}),n.jsxs(te,{repeatMsg:t,owner:e.owner,children:[!e.owner&&n.jsx(ne,{children:e.name}),n.jsx(ae,{owner:e.owner,children:e.text}),n.jsx(re,{owner:e.owner,children:a(e.date)})]})]})},le=i.div`
  width: ${c.breakpoints.mobile}px;
position:relative;
padding-bottom:20px;
background-color:${c.colors.white};
`,de=i.div`
display:flex;
align-items:center;
justify-content:center;
position:absolute;
top:8px;
right:12px
`,ce=i.input`
width:100%;
/* padding:6px 6px 0 32px  ; */
padding-top:6px;
padding-bottom:6px;
padding-right:72px;
font-family:'Segoe-Regular';
font-size:${c.fontSizes.s};
font-weight:400;
color:${c.colors.main};
border:none;
&:focus{
border:none;
outline:none
}
`,L=i.button`
&:first-of-type{
    margin-right:16px;
}
`;var J={exports:{}},O=1;function he(){return O=(O*9301+49297)%233280,O/233280}function me(e){O=e}var pe={nextValue:he,seed:me},Z=pe,x="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_-",f,k,v;function j(){v=!1}function I(e){if(!e){f!==x&&(f=x,j());return}if(e!==f){if(e.length!==x.length)throw new Error("Custom alphabet for shortid must be "+x.length+" unique characters. You submitted "+e.length+" characters: "+e);var t=e.split("").filter(function(a,r,o){return r!==o.lastIndexOf(a)});if(t.length)throw new Error("Custom alphabet for shortid must be "+x.length+" unique characters. These characters were not unique: "+t.join(", "));f=e,j()}}function ue(e){return I(e),f}function fe(e){Z.seed(e),k!==e&&(j(),k=e)}function ge(){f||I(x);for(var e=f.split(""),t=[],a=Z.nextValue(),r;e.length>0;)a=Z.nextValue(),r=Math.floor(a*e.length),t.push(e.splice(r,1)[0]);return t.join("")}function F(){return v||(v=ge(),v)}function xe(e){var t=F();return t[e]}function we(){return f||x}var M={get:we,characters:ue,seed:fe,lookup:xe,shuffled:F},y=typeof window=="object"&&(window.crypto||window.msCrypto),$;!y||!y.getRandomValues?$=function(e){for(var t=[],a=0;a<e;a++)t.push(Math.floor(Math.random()*256));return t}:$=function(e){return y.getRandomValues(new Uint8Array(e))};var ve=$,De=function(e,t,a){for(var r=(2<<Math.log(t.length-1)/Math.LN2)-1,o=-~(1.6*r*a/t.length),l="";;)for(var p=e(o),d=o;d--;)if(l+=t[p[d]&r]||"",l.length===+a)return l},Te=M,Oe=ve,be=De;function ye(e){for(var t=0,a,r="";!a;)r=r+be(Oe,Te.get(),1),a=e<Math.pow(16,t+1),t++;return r}var Ze=ye,D=Ze,je=1567752802062,$e=7,T,E;function Me(e){var t="",a=Math.floor((Date.now()-je)*.001);return a===E?T++:(T=0,E=a),t=t+D($e),t=t+D(e),T>0&&(t=t+D(T)),t=t+D(a),t}var Se=Me,Ce=M;function Le(e){if(!e||typeof e!="string"||e.length<6)return!1;var t=new RegExp("[^"+Ce.get().replace(/[|\\{}()[\]^$+*?.-]/g,"\\$&")+"]");return!t.test(e)}var ke=Le;(function(e){var t=M,a=Se,r=ke,o=0;function l(h){return t.seed(h),e.exports}function p(h){return o=h,e.exports}function d(h){return h!==void 0&&t.characters(h),t.shuffled()}function g(){return a(o)}e.exports=g,e.exports.generate=g,e.exports.seed=l,e.exports.worker=p,e.exports.characters=d,e.exports.isValid=r})(J);var Ee=J.exports,Je=Ee;const Ie=V(Je),Fe=({setMessages:e})=>{const[t,a]=w.useState(""),r=w.useCallback(()=>{if(t.trim()==="")return S.warning("enter message");e(o=>[...o,{id:Ie.generate(),text:t,date:new Date,owner:!0,name:"John",image:"https://via.placeholder.com/150",isOnline:!0}]),a(""),S.success(`message => ${t}`)},[t,e]);return n.jsxs(le,{children:[n.jsx(ce,{type:"text",placeholder:"Start typing...",maxLength:200,value:t,onChange:o=>a(o.target.value)}),n.jsxs(de,{ButtonsContainer:!0,children:[n.jsx(L,{type:"button",onClick:()=>console.log("click"),children:n.jsx(z,{size:16,color:"#8E8E93"})}),n.jsx(L,{type:"button",onClick:r,children:n.jsx(U,{size:16,color:"#3D3D3D"})})]})]})},Re=[{id:"1",text:"Текст 1",date:new Date("2023-08-21T12:00:00Z"),owner:!0,name:"John",image:"https://via.placeholder.com/150",isOnline:!0},{id:"2",text:"Текст 2",date:new Date("2023-08-20T15:30:00Z"),owner:!1,name:"Jane",image:"https://via.placeholder.com/150",isOnline:!1},{id:"3",text:"fdhrthrth",date:new Date("2023-08-22T08:45:00Z"),owner:!0,name:"John",image:"https://via.placeholder.com/150",isOnline:!0},{id:"4",text:"Текст 4",date:new Date("2023-08-16T09:20:00Z"),owner:!1,name:"Michael",image:"https://via.placeholder.com/150",isOnline:!0},{id:"5",text:"Текст 5",date:new Date("2023-08-15T14:10:00Z"),owner:!1,name:"Jane",image:"https://via.placeholder.com/150",isOnline:!1},{id:"6",text:"Текст 6",date:new Date("2023-08-14T17:00:00Z"),owner:!0,name:"John",image:"https://via.placeholder.com/150",isOnline:!0},{id:"7",text:"Текст 7",date:new Date("2023-08-13T12:45:00Z"),owner:!1,name:"Sophia",image:"https://via.placeholder.com/150",isOnline:!1},{id:"8",text:"Текст 8",date:new Date("2023-08-12T11:30:00Z"),owner:!0,name:"John",image:"https://via.placeholder.com/150",isOnline:!0},{id:"9",text:"Текст 9",date:new Date("2023-08-11T09:15:00Z"),owner:!1,name:"Emma",image:"https://via.placeholder.com/150",isOnline:!1},{id:"10",text:"Текст 10",date:new Date("2023-08-10T07:00:00Z"),owner:!1,name:"Jane",image:"https://via.placeholder.com/150",isOnline:!0},{id:"11",text:"Текст 11",date:new Date("2023-08-09T05:45:00Z"),owner:!0,name:"John",image:"https://via.placeholder.com/150",isOnline:!0},{id:"12",text:"Текст 12",date:new Date("2023-08-08T03:30:00Z"),owner:!1,name:"Liam",image:"https://via.placeholder.com/150",isOnline:!1},{id:"13",text:"Текст 13",date:new Date("2023-08-07T02:15:00Z"),owner:!1,name:"Ethan",image:"https://via.placeholder.com/150",isOnline:!0},{id:"14",text:"Текст 14",date:new Date("2023-07-30T16:15:00Z"),owner:!1,name:"Jane",image:"https://via.placeholder.com/150",isOnline:!1},{id:"15",text:"Текст 15",date:new Date("2023-08-05T00:45:00Z"),owner:!1,name:"Olivia",image:"https://via.placeholder.com/150",isOnline:!0},{id:"16",text:"Текст 16",date:new Date("2023-08-04T22:30:00Z"),owner:!1,name:"Michael",image:"https://via.placeholder.com/150",isOnline:!0},{id:"17",text:"Текст 17",date:new Date("2023-08-03T21:15:00Z"),owner:!0,name:"John",image:"https://via.placeholder.com/150",isOnline:!0},{id:"18",text:"Текст 18",date:new Date("2023-08-02T20:00:00Z"),owner:!1,name:"Liam",image:"https://via.placeholder.com/150",isOnline:!1},{id:"19",text:"Текст 19",date:new Date("2023-07-30T16:15:00Z"),owner:!1,name:"Jane",image:"https://via.placeholder.com/150",isOnline:!0},{id:"20",text:"Текст 20",date:new Date("2023-07-31T17:30:00Z"),owner:!1,name:"Ava",image:"https://via.placeholder.com/150",isOnline:!1},{id:"21",text:"Текст 21",date:new Date("2023-07-30T16:15:00Z"),owner:!1,name:"Noah",image:"https://via.placeholder.com/150",isOnline:!0},{id:"22",text:"Текст 22",date:new Date("2023-07-30T16:15:00Z"),owner:!1,name:"Michael",image:"https://via.placeholder.com/150",isOnline:!0},{id:"23",text:"Текст 23",date:new Date("2023-07-28T13:45:00Z"),owner:!0,name:"John",image:"https://via.placeholder.com/150",isOnline:!0},{id:"24",text:"Текст 24",date:new Date("2023-07-27T12:30:00Z"),owner:!1,name:"Emma",image:"https://via.placeholder.com/150",isOnline:!1},{id:"25",text:"Текст 25",date:new Date("2023-07-26T11:15:00Z"),owner:!1,name:"Jane",image:"https://via.placeholder.com/150",isOnline:!0},{id:"26",text:"Текст 26",date:new Date("2023-07-25T10:00:00Z"),owner:!1,name:"Liam",image:"https://via.placeholder.com/150",isOnline:!1},{id:"27",text:"Текст 27",date:new Date("2023-07-24T08:45:00Z"),owner:!1,name:"Michael",image:"https://via.placeholder.com/150",isOnline:!0},{id:"28",text:"Текст 28",date:new Date("2023-07-23T07:30:00Z"),owner:!1,name:"Olivia",image:"https://via.placeholder.com/150",isOnline:!0},{id:"29",text:"Текст 29",date:new Date("2023-07-22T06:15:00Z"),owner:!0,name:"John",image:"https://via.placeholder.com/150",isOnline:!0},{id:"30",text:"Текст 30",date:new Date("2023-07-21T05:00:00Z"),owner:!1,name:"Jane",image:"https://via.placeholder.com/150",isOnline:!0},{id:"31",text:"Текст 31",date:new Date("2023-07-20T03:45:00Z"),owner:!1,name:"Ethan",image:"https://via.placeholder.com/150",isOnline:!0},{id:"32",text:"Текст 32",date:new Date("2023-07-19T02:30:00Z"),owner:!1,name:"Michael",image:"https://via.placeholder.com/150",isOnline:!0},{id:"33",text:"Текст 33",date:new Date("2023-07-18T01:15:00Z"),owner:!0,name:"John",image:"https://via.placeholder.com/150",isOnline:!0},{id:"34",text:"Текст 34",date:new Date("2023-07-17T00:00:00Z"),owner:!1,name:"Liam",image:"https://via.placeholder.com/150",isOnline:!1},{id:"35",text:"Текст 35",date:new Date("2023-07-16T22:45:00Z"),owner:!1,name:"Jane",image:"https://via.placeholder.com/150",isOnline:!0},{id:"36",text:"Текст 36",date:new Date("2023-07-15T21:30:00Z"),owner:!1,name:"Olivia",image:"https://via.placeholder.com/150",isOnline:!0},{id:"37",text:"Текст 37",date:new Date("2023-07-14T20:15:00Z"),owner:!1,name:"Michael",image:"https://via.placeholder.com/150",isOnline:!0},{id:"38",text:"Текст 38",date:new Date("2023-07-13T19:00:00Z"),owner:!1,name:"Ethan",image:"https://via.placeholder.com/150",isOnline:!1},{id:"39",text:"Текст 39",date:new Date("2023-07-12T17:45:00Z"),owner:!1,name:"Jane",image:"https://via.placeholder.com/150",isOnline:!0},{id:"40",text:"Текст 40",date:new Date("2023-07-11T16:30:00Z"),owner:!1,name:"Liam",image:"https://via.placeholder.com/150",isOnline:!1}],ze=()=>{const e=A(),{currentChannel:t,isLoading:a}=B(d=>d.channels),{channelId:r}=H();w.useEffect(()=>{e(N(r))},[r,e]);const[o,l]=w.useState(Re.sort(p));function p(d,g){return d.date-g.date}return t?n.jsx(q,{children:a?n.jsx(P,{}):n.jsxs(n.Fragment,{children:[n.jsx(G,{goBack:!0,imageUrl:t.image,channelName:t.title,id:t.id}),n.jsx(se,{messages:o}),n.jsx(Fe,{setMessages:l})]})}):null};export{ze as default};
