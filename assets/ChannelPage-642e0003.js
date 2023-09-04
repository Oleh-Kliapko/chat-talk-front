import{n as i,t as c,r as w,j as n,x as V,P as A,Q as S,u as B,e as z,h as H,G as N,C as P,d as q}from"./index-7c6d1f90.js";import{H as G}from"./Header-7013e6f0.js";import{b as U}from"./index.esm-842e8a5a.js";import{G as Y}from"./iconBase-c9f07445.js";import"./index.esm-3bfc38e6.js";function Q(e){return Y({tag:"svg",attr:{viewBox:"0 0 16 16",fill:"currentColor"},child:[{tag:"path",attr:{d:"M1 1.91L1.78 1.5L15 7.44899V8.3999L1.78 14.33L1 13.91L2.58311 8L1 1.91ZM3.6118 8.5L2.33037 13.1295L13.5 7.8999L2.33037 2.83859L3.6118 7.43874L9 7.5V8.5H3.6118Z"}}]})(e)}const W=i.div`
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
`,K=i.ul`
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
`,ne=i.div`
width: 10px;
height: 10px;
background-color:#34C759;
position:absolute;
bottom:0;
right:0;
border: 1px solid white;
border-radius:50%;

`,ae=i.div`
width:60%;
height:auto;
 word-wrap: break-word;
padding:4px 8px;
background-color:${e=>e.owner?"#007AFF":"#F2F2F7"};
/* border-radius:${e=>{if(e.owner)return"6px 0px 6px 6px";if(e.repeatMsg&&e.owner||e.repeatMsg&&!e.owner)return"6px 6px 6px 6px";if(!e.owner)return"0px 6px 6px 6px"}}; */
border-radius:${e=>e.owner?"6px 0px 6px 6px":"0px 6px 6px 6px"};
`,re=i.p`
margin-bottom:8px;
font-family:'Segoe-Regular';
font-size:${c.fontSizes.s};
font-weight:600;
color:${c.colors.main};
`,oe=i.p`

font-family:'Segoe-Regular';
font-size:${c.fontSizes.s};
font-weight:400;
color:${e=>e.owner?"white":c.colors.main};
`,ie=i.p`
margin-top:4px;
font-family:'Segoe-Regular';
font-size:${c.fontSizes.xs};
font-weight:400;
color:${e=>e.owner?"white":"#666668"};
text-align: right;
`,se=i.span`
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
`,le=i.div`
position:relative;
margin-top:26px;
margin-bottom:26px;
`,de=({messages:e})=>{const t=w.useRef();console.log("MessageList");const a=()=>{t.current.scrollIntoView({behavior:"smooth",block:"end"})};w.useEffect(()=>{a()},[e]);function r(s){const m=String(s.getDate()).padStart(2,"0"),u=String(s.getMonth()+1).padStart(2,"0"),O=s.getFullYear();return`${m}-${u}-${O}`}const o=new Date,l=new Date(o);l.setDate(o.getDate()-1);const p=r(o),d=r(l),g=s=>s===p?"today":s===d?"yesterday":s,h=e.reduce((s,m)=>{const u=r(m.date);return s[u]||(s[u]=[]),s[u].push(m),s},{});return console.log("data",h),n.jsx(W,{children:n.jsx(K,{ref:t,children:Object.keys(h).map(s=>n.jsxs("div",{children:[n.jsxs(le,{children:[n.jsx(se,{children:g(s)}),n.jsx("hr",{})]}),n.jsx("ul",{children:h[s].map((m,u,O)=>u>0&&m.name===O[u-1].name?n.jsx(C,{repeatMsg:!1,el:m},m.id):n.jsx(C,{repeatMsg:!0,el:m},m.id))})]},s))})})},C=({el:e,repeatMsg:t})=>{function a(r){const o=r.getHours(),l=r.getMinutes(),p=o>=12?"PM":"AM";return`${o%12===0?12:o%12}:${l<10?"0":""}${l} ${p}`}return n.jsxs(X,{owner:e.owner,children:[n.jsxs(_,{owner:e.owner,children:[n.jsx(ee,{repeatMsg:t,children:n.jsx(te,{src:e.image,alt:e.name})}),e.isOnline&&t&&n.jsx(ne,{})]}),n.jsxs(ae,{repeatMsg:t,owner:e.owner,children:[!e.owner&&n.jsx(re,{children:e.name}),n.jsx(oe,{owner:e.owner,children:e.text}),n.jsx(ie,{owner:e.owner,children:a(e.date)})]})]})},ce=i.div`
  width: ${c.breakpoints.mobile}px;
position:relative;
padding-bottom:20px;
background-color:${c.colors.white};
`,he=i.div`
display:flex;
align-items:center;
justify-content:center;
position:absolute;
top:8px;
right:12px
`,me=i.input`
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
`;var J={exports:{}},b=1;function pe(){return b=(b*9301+49297)%233280,b/233280}function ue(e){b=e}var fe={nextValue:pe,seed:ue},Z=fe,x="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_-",f,k,v;function j(){v=!1}function I(e){if(!e){f!==x&&(f=x,j());return}if(e!==f){if(e.length!==x.length)throw new Error("Custom alphabet for shortid must be "+x.length+" unique characters. You submitted "+e.length+" characters: "+e);var t=e.split("").filter(function(a,r,o){return r!==o.lastIndexOf(a)});if(t.length)throw new Error("Custom alphabet for shortid must be "+x.length+" unique characters. These characters were not unique: "+t.join(", "));f=e,j()}}function ge(e){return I(e),f}function xe(e){Z.seed(e),k!==e&&(j(),k=e)}function we(){f||I(x);for(var e=f.split(""),t=[],a=Z.nextValue(),r;e.length>0;)a=Z.nextValue(),r=Math.floor(a*e.length),t.push(e.splice(r,1)[0]);return t.join("")}function F(){return v||(v=we(),v)}function ve(e){var t=F();return t[e]}function De(){return f||x}var M={get:De,characters:ge,seed:xe,lookup:ve,shuffled:F},y=typeof window=="object"&&(window.crypto||window.msCrypto),$;!y||!y.getRandomValues?$=function(e){for(var t=[],a=0;a<e;a++)t.push(Math.floor(Math.random()*256));return t}:$=function(e){return y.getRandomValues(new Uint8Array(e))};var Te=$,be=function(e,t,a){for(var r=(2<<Math.log(t.length-1)/Math.LN2)-1,o=-~(1.6*r*a/t.length),l="";;)for(var p=e(o),d=o;d--;)if(l+=t[p[d]&r]||"",l.length===+a)return l},Oe=M,ye=Te,Ze=be;function je(e){for(var t=0,a,r="";!a;)r=r+Ze(ye,Oe.get(),1),a=e<Math.pow(16,t+1),t++;return r}var $e=je,D=$e,Me=1567752802062,Se=7,T,E;function Ce(e){var t="",a=Math.floor((Date.now()-Me)*.001);return a===E?T++:(T=0,E=a),t=t+D(Se),t=t+D(e),T>0&&(t=t+D(T)),t=t+D(a),t}var Le=Ce,ke=M;function Ee(e){if(!e||typeof e!="string"||e.length<6)return!1;var t=new RegExp("[^"+ke.get().replace(/[|\\{}()[\]^$+*?.-]/g,"\\$&")+"]");return!t.test(e)}var Je=Ee;(function(e){var t=M,a=Le,r=Je,o=0;function l(h){return t.seed(h),e.exports}function p(h){return o=h,e.exports}function d(h){return h!==void 0&&t.characters(h),t.shuffled()}function g(){return a(o)}e.exports=g,e.exports.generate=g,e.exports.seed=l,e.exports.worker=p,e.exports.characters=d,e.exports.isValid=r})(J);var Ie=J.exports,Fe=Ie;const Re=V(Fe),R=({setMessages:e})=>{const[t,a]=w.useState(""),r=w.useCallback(()=>{if(t.trim()==="")return S.warning("enter message");e(o=>[...o,{id:Re.generate(),text:t,date:new Date,owner:!0,name:"John",image:"https://via.placeholder.com/150",isOnline:!0}]),a(""),S.success(`message => ${t}`)},[t,e]);return n.jsxs(ce,{children:[n.jsx(me,{type:"text",placeholder:"Start typing...",maxLength:200,value:t,onChange:o=>a(o.target.value)}),n.jsxs(he,{ButtonsContainer:!0,children:[n.jsx(L,{type:"button",onClick:()=>console.log("click"),children:n.jsx(U,{size:16,color:"#8E8E93"})}),n.jsx(L,{type:"button",onClick:r,children:n.jsx(Q,{size:16,color:"#3D3D3D"})})]})]})};R.propTypes={setMessages:A.func};const Ve=[{id:"1",text:"Текст 1",date:new Date("2023-08-21T12:00:00Z"),owner:!0,name:"John",image:"https://via.placeholder.com/150",isOnline:!0},{id:"2",text:"Текст 2",date:new Date("2023-08-20T15:30:00Z"),owner:!1,name:"Jane",image:"https://via.placeholder.com/150",isOnline:!1},{id:"3",text:"fdhrthrth",date:new Date("2023-08-22T08:45:00Z"),owner:!0,name:"John",image:"https://via.placeholder.com/150",isOnline:!0},{id:"4",text:"Текст 4",date:new Date("2023-08-16T09:20:00Z"),owner:!1,name:"Michael",image:"https://via.placeholder.com/150",isOnline:!0},{id:"5",text:"Текст 5",date:new Date("2023-08-15T14:10:00Z"),owner:!1,name:"Jane",image:"https://via.placeholder.com/150",isOnline:!1},{id:"6",text:"Текст 6",date:new Date("2023-08-14T17:00:00Z"),owner:!0,name:"John",image:"https://via.placeholder.com/150",isOnline:!0},{id:"7",text:"Текст 7",date:new Date("2023-08-13T12:45:00Z"),owner:!1,name:"Sophia",image:"https://via.placeholder.com/150",isOnline:!1},{id:"8",text:"Текст 8",date:new Date("2023-08-12T11:30:00Z"),owner:!0,name:"John",image:"https://via.placeholder.com/150",isOnline:!0},{id:"9",text:"Текст 9",date:new Date("2023-08-11T09:15:00Z"),owner:!1,name:"Emma",image:"https://via.placeholder.com/150",isOnline:!1},{id:"10",text:"Текст 10",date:new Date("2023-08-10T07:00:00Z"),owner:!1,name:"Jane",image:"https://via.placeholder.com/150",isOnline:!0},{id:"11",text:"Текст 11",date:new Date("2023-08-09T05:45:00Z"),owner:!0,name:"John",image:"https://via.placeholder.com/150",isOnline:!0},{id:"12",text:"Текст 12",date:new Date("2023-08-08T03:30:00Z"),owner:!1,name:"Liam",image:"https://via.placeholder.com/150",isOnline:!1},{id:"13",text:"Текст 13",date:new Date("2023-08-07T02:15:00Z"),owner:!1,name:"Ethan",image:"https://via.placeholder.com/150",isOnline:!0},{id:"14",text:"Текст 14",date:new Date("2023-07-30T16:15:00Z"),owner:!1,name:"Jane",image:"https://via.placeholder.com/150",isOnline:!1},{id:"15",text:"Текст 15",date:new Date("2023-08-05T00:45:00Z"),owner:!1,name:"Olivia",image:"https://via.placeholder.com/150",isOnline:!0},{id:"16",text:"Текст 16",date:new Date("2023-08-04T22:30:00Z"),owner:!1,name:"Michael",image:"https://via.placeholder.com/150",isOnline:!0},{id:"17",text:"Текст 17",date:new Date("2023-08-03T21:15:00Z"),owner:!0,name:"John",image:"https://via.placeholder.com/150",isOnline:!0},{id:"18",text:"Текст 18",date:new Date("2023-08-02T20:00:00Z"),owner:!1,name:"Liam",image:"https://via.placeholder.com/150",isOnline:!1},{id:"19",text:"Текст 19",date:new Date("2023-07-30T16:15:00Z"),owner:!1,name:"Jane",image:"https://via.placeholder.com/150",isOnline:!0},{id:"20",text:"Текст 20",date:new Date("2023-07-31T17:30:00Z"),owner:!1,name:"Ava",image:"https://via.placeholder.com/150",isOnline:!1},{id:"21",text:"Текст 21",date:new Date("2023-07-30T16:15:00Z"),owner:!1,name:"Noah",image:"https://via.placeholder.com/150",isOnline:!0},{id:"22",text:"Текст 22",date:new Date("2023-07-30T16:15:00Z"),owner:!1,name:"Michael",image:"https://via.placeholder.com/150",isOnline:!0},{id:"23",text:"Текст 23",date:new Date("2023-07-28T13:45:00Z"),owner:!0,name:"John",image:"https://via.placeholder.com/150",isOnline:!0},{id:"24",text:"Текст 24",date:new Date("2023-07-27T12:30:00Z"),owner:!1,name:"Emma",image:"https://via.placeholder.com/150",isOnline:!1},{id:"25",text:"Текст 25",date:new Date("2023-07-26T11:15:00Z"),owner:!1,name:"Jane",image:"https://via.placeholder.com/150",isOnline:!0},{id:"26",text:"Текст 26",date:new Date("2023-07-25T10:00:00Z"),owner:!1,name:"Liam",image:"https://via.placeholder.com/150",isOnline:!1},{id:"27",text:"Текст 27",date:new Date("2023-07-24T08:45:00Z"),owner:!1,name:"Michael",image:"https://via.placeholder.com/150",isOnline:!0},{id:"28",text:"Текст 28",date:new Date("2023-07-23T07:30:00Z"),owner:!1,name:"Olivia",image:"https://via.placeholder.com/150",isOnline:!0},{id:"29",text:"Текст 29",date:new Date("2023-07-22T06:15:00Z"),owner:!0,name:"John",image:"https://via.placeholder.com/150",isOnline:!0},{id:"30",text:"Текст 30",date:new Date("2023-07-21T05:00:00Z"),owner:!1,name:"Jane",image:"https://via.placeholder.com/150",isOnline:!0},{id:"31",text:"Текст 31",date:new Date("2023-07-20T03:45:00Z"),owner:!1,name:"Ethan",image:"https://via.placeholder.com/150",isOnline:!0},{id:"32",text:"Текст 32",date:new Date("2023-07-19T02:30:00Z"),owner:!1,name:"Michael",image:"https://via.placeholder.com/150",isOnline:!0},{id:"33",text:"Текст 33",date:new Date("2023-07-18T01:15:00Z"),owner:!0,name:"John",image:"https://via.placeholder.com/150",isOnline:!0},{id:"34",text:"Текст 34",date:new Date("2023-07-17T00:00:00Z"),owner:!1,name:"Liam",image:"https://via.placeholder.com/150",isOnline:!1},{id:"35",text:"Текст 35",date:new Date("2023-07-16T22:45:00Z"),owner:!1,name:"Jane",image:"https://via.placeholder.com/150",isOnline:!0},{id:"36",text:"Текст 36",date:new Date("2023-07-15T21:30:00Z"),owner:!1,name:"Olivia",image:"https://via.placeholder.com/150",isOnline:!0},{id:"37",text:"Текст 37",date:new Date("2023-07-14T20:15:00Z"),owner:!1,name:"Michael",image:"https://via.placeholder.com/150",isOnline:!0},{id:"38",text:"Текст 38",date:new Date("2023-07-13T19:00:00Z"),owner:!1,name:"Ethan",image:"https://via.placeholder.com/150",isOnline:!1},{id:"39",text:"Текст 39",date:new Date("2023-07-12T17:45:00Z"),owner:!1,name:"Jane",image:"https://via.placeholder.com/150",isOnline:!0},{id:"40",text:"Текст 40",date:new Date("2023-07-11T16:30:00Z"),owner:!1,name:"Liam",image:"https://via.placeholder.com/150",isOnline:!1}],Pe=()=>{const e=B(),{currentChannel:t,isLoading:a}=z(d=>d.channels),{channelId:r}=H();w.useEffect(()=>{e(N(r))},[r,e]);const[o,l]=w.useState(Ve.sort(p));function p(d,g){return d.date-g.date}return t?n.jsx(P,{children:a?n.jsx(q,{}):n.jsxs(n.Fragment,{children:[n.jsx(G,{goBack:!0,imageUrl:t.image,channelName:t.title,id:t.id}),n.jsx(de,{messages:o}),n.jsx(R,{setMessages:l})]})}):null};export{Pe as default};
