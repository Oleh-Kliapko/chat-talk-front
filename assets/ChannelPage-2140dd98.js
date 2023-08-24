import{G as I,n as i,t as l,r as x,j as n,p as R,Q as M,M as V,C as A,H as z}from"./index-16130598.js";function B(e){return I({tag:"svg",attr:{viewBox:"0 0 16 16",fill:"currentColor"},child:[{tag:"path",attr:{d:"M1 1.91L1.78 1.5L15 7.44899V8.3999L1.78 14.33L1 13.91L2.58311 8L1 1.91ZM3.6118 8.5L2.33037 13.1295L13.5 7.8999L2.33037 2.83859L3.6118 7.43874L9 7.5V8.5H3.6118Z"}}]})(e)}const H=i.div`
width: ${l.breakpoints.mobile}px;
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
`,N=i.ul`
width:100%;
align-items:flex-start;

`,q=i.li`
list-style: none;
display:flex;
flex-direction:${e=>e.owner?"row-reverse":"row"};
margin-top:12px;
`,G=i.div`
position:relative;
width: 32px;
height: 32px;
margin-right:${e=>e.owner?"0":"12px"};
margin-left:${e=>e.owner?"12px":"0"};
`,P=i.div`

border-radius:50%;
overflow:hidden;

`,U=i.img`
display:block;
width:100%;
height:auto;
`,Y=i.div`
width: 10px;
height: 10px;
background-color:#34C759;
position:absolute;
bottom:0;
right:0;
border: 1px solid white;
border-radius:50%;

`,Q=i.div`
width:60%;
height:auto;
 word-wrap: break-word;
padding:4px 8px;
background-color:${e=>e.owner?"#007AFF":"#F2F2F7"};
border-radius:${e=>e.owner?"6px 0px 6px 6px":"0px 6px 6px 6px"};
`,W=i.p`
margin-bottom:8px;
font-family:'Segoe-Regular';
font-size:${l.fontSizes.s};
font-weight:600;
color:${l.colors.main};
`,K=i.p`

font-family:'Segoe-Regular';
font-size:${l.fontSizes.s};
font-weight:400;
color:${e=>e.owner?"white":l.colors.main};
`,X=i.p`
margin-top:4px;
font-family:'Segoe-Regular';
font-size:${l.fontSizes.xs};
font-weight:400;
color:${e=>e.owner?"white":"#666668"};
text-align: right;
`,_=i.span`
/* margin-top:4px; */
position:absolute;
font-family:'Segoe-Regular';
font-size:${l.fontSizes.xs};
font-weight:400;
color:"#666668";
border:1px solid #D3D3D3;
border-radius:20px;
padding:4px 8px;
top: 50%;
left: 50%; 
transform: translate(-50%, -50%); 
background-color:#FAFAFA;
`,ee=i.div`
position:relative;
margin-top:26px;
margin-bottom:26px;
`,te=({messages:e})=>{const t=x.useRef();console.log("MessageList");const a=()=>{t.current.scrollIntoView({behavior:"smooth",block:"end"})};x.useEffect(()=>{a()},[e]);function r(s){const p=String(s.getDate()).padStart(2,"0"),g=String(s.getMonth()+1).padStart(2,"0"),F=s.getFullYear();return`${p}-${g}-${F}`}const o=new Date,d=new Date(o);d.setDate(o.getDate()-1);const f=r(o),m=r(d),v=s=>s===f?"today":s===m?"yesterday":s,c=e.reduce((s,p)=>{const g=r(p.date);return s[g]||(s[g]=[]),s[g].push(p),s},{});return console.log("data",c),n.jsx(H,{children:n.jsx(N,{ref:t,children:Object.keys(c).map(s=>n.jsxs("div",{children:[n.jsxs(ee,{children:[n.jsx(_,{children:v(s)}),n.jsx("hr",{})]}),n.jsx("ul",{children:c[s].map(p=>n.jsx(ae,{el:p},p.id))})]},s))})})},ae=({el:e})=>{function t(a){const r=a.getHours(),o=a.getMinutes(),d=r>=12?"PM":"AM";return`${r%12===0?12:r%12}:${o<10?"0":""}${o} ${d}`}return n.jsxs(q,{owner:e.owner,children:[n.jsxs(G,{owner:e.owner,children:[n.jsx(P,{children:n.jsx(U,{src:e.image,alt:e.name})}),e.isOnline&&n.jsx(Y,{})]}),n.jsxs(Q,{owner:e.owner,children:[!e.owner&&n.jsx(W,{children:e.name}),n.jsx(K,{owner:e.owner,children:e.text}),n.jsx(X,{owner:e.owner,children:t(e.date)})]})]})},ne=i.div`
  width: ${l.breakpoints.mobile}px;
position:relative;
padding-bottom:20px;
background-color:${l.colors.white};
`,re=i.div`
display:flex;
align-items:center;
justify-content:center;
position:absolute;
top:8px;
right:12px
`,oe=i.input`
width:100%;
/* padding:6px 6px 0 32px  ; */
padding-top:6px;
padding-bottom:6px;
padding-right:72px;
font-family:'Segoe-Regular';
font-size:${l.fontSizes.s};
font-weight:400;
color:${l.colors.main};
border:none;
&:focus{
border:none;
outline:none
}
`,S=i.button`
&:first-of-type{
    margin-right:16px;
}
`;var L={exports:{}},O=1;function ie(){return O=(O*9301+49297)%233280,O/233280}function se(e){O=e}var le={nextValue:ie,seed:se},y=le,u="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_-",h,k,w;function Z(){w=!1}function E(e){if(!e){h!==u&&(h=u,Z());return}if(e!==h){if(e.length!==u.length)throw new Error("Custom alphabet for shortid must be "+u.length+" unique characters. You submitted "+e.length+" characters: "+e);var t=e.split("").filter(function(a,r,o){return r!==o.lastIndexOf(a)});if(t.length)throw new Error("Custom alphabet for shortid must be "+u.length+" unique characters. These characters were not unique: "+t.join(", "));h=e,Z()}}function de(e){return E(e),h}function ce(e){y.seed(e),k!==e&&(Z(),k=e)}function he(){h||E(u);for(var e=h.split(""),t=[],a=y.nextValue(),r;e.length>0;)a=y.nextValue(),r=Math.floor(a*e.length),t.push(e.splice(r,1)[0]);return t.join("")}function J(){return w||(w=he(),w)}function me(e){var t=J();return t[e]}function pe(){return h||u}var $={get:pe,characters:de,seed:ce,lookup:me,shuffled:J},b=typeof window=="object"&&(window.crypto||window.msCrypto),j;!b||!b.getRandomValues?j=function(e){for(var t=[],a=0;a<e;a++)t.push(Math.floor(Math.random()*256));return t}:j=function(e){return b.getRandomValues(new Uint8Array(e))};var ue=j,fe=function(e,t,a){for(var r=(2<<Math.log(t.length-1)/Math.LN2)-1,o=-~(1.6*r*a/t.length),d="";;)for(var f=e(o),m=o;m--;)if(d+=t[f[m]&r]||"",d.length===+a)return d},ge=$,we=ue,xe=fe;function ve(e){for(var t=0,a,r="";!a;)r=r+xe(we,ge.get(),1),a=e<Math.pow(16,t+1),t++;return r}var De=ve,D=De,Te=1567752802062,Oe=7,T,C;function be(e){var t="",a=Math.floor((Date.now()-Te)*.001);return a===C?T++:(T=0,C=a),t=t+D(Oe),t=t+D(e),T>0&&(t=t+D(T)),t=t+D(a),t}var ye=be,Ze=$;function je(e){if(!e||typeof e!="string"||e.length<6)return!1;var t=new RegExp("[^"+Ze.get().replace(/[|\\{}()[\]^$+*?.-]/g,"\\$&")+"]");return!t.test(e)}var $e=je;(function(e){var t=$,a=ye,r=$e,o=0;function d(c){return t.seed(c),e.exports}function f(c){return o=c,e.exports}function m(c){return c!==void 0&&t.characters(c),t.shuffled()}function v(){return a(o)}e.exports=v,e.exports.generate=v,e.exports.seed=d,e.exports.worker=f,e.exports.characters=m,e.exports.isValid=r})(L);var Me=L.exports,Se=Me;const ke=R(Se),Ce=({setMessages:e})=>{const[t,a]=x.useState(""),r=x.useCallback(()=>{if(t.trim()==="")return M.warning("enter message");e(o=>[...o,{id:ke.generate(),text:t,date:new Date,owner:!0,name:"John",image:"https://via.placeholder.com/150",isOnline:!0}]),a(""),M.success(`message => ${t}`)},[t,e]);return n.jsxs(ne,{children:[n.jsx(oe,{type:"text",placeholder:"Start typing...",maxLength:200,value:t,onChange:o=>a(o.target.value)}),n.jsxs(re,{ButtonsContainer:!0,children:[n.jsx(S,{type:"button",onClick:()=>console.log("click"),children:n.jsx(V,{size:16,color:"#8E8E93"})}),n.jsx(S,{type:"button",onClick:r,children:n.jsx(B,{size:16,color:"#3D3D3D"})})]})]})},Le=[{id:"1",text:"Текст 1",date:new Date("2023-08-21T12:00:00Z"),owner:!0,name:"John",image:"https://via.placeholder.com/150",isOnline:!0},{id:"2",text:"Текст 2",date:new Date("2023-08-20T15:30:00Z"),owner:!1,name:"Jane",image:"https://via.placeholder.com/150",isOnline:!1},{id:"3",text:"fdhrthrth",date:new Date("2023-08-22T08:45:00Z"),owner:!0,name:"John",image:"https://via.placeholder.com/150",isOnline:!0},{id:"4",text:"Текст 4",date:new Date("2023-08-16T09:20:00Z"),owner:!1,name:"Michael",image:"https://via.placeholder.com/150",isOnline:!0},{id:"5",text:"Текст 5",date:new Date("2023-08-15T14:10:00Z"),owner:!1,name:"Jane",image:"https://via.placeholder.com/150",isOnline:!1},{id:"6",text:"Текст 6",date:new Date("2023-08-14T17:00:00Z"),owner:!0,name:"John",image:"https://via.placeholder.com/150",isOnline:!0},{id:"7",text:"Текст 7",date:new Date("2023-08-13T12:45:00Z"),owner:!1,name:"Sophia",image:"https://via.placeholder.com/150",isOnline:!1},{id:"8",text:"Текст 8",date:new Date("2023-08-12T11:30:00Z"),owner:!0,name:"John",image:"https://via.placeholder.com/150",isOnline:!0},{id:"9",text:"Текст 9",date:new Date("2023-08-11T09:15:00Z"),owner:!1,name:"Emma",image:"https://via.placeholder.com/150",isOnline:!1},{id:"10",text:"Текст 10",date:new Date("2023-08-10T07:00:00Z"),owner:!1,name:"Jane",image:"https://via.placeholder.com/150",isOnline:!0},{id:"11",text:"Текст 11",date:new Date("2023-08-09T05:45:00Z"),owner:!0,name:"John",image:"https://via.placeholder.com/150",isOnline:!0},{id:"12",text:"Текст 12",date:new Date("2023-08-08T03:30:00Z"),owner:!1,name:"Liam",image:"https://via.placeholder.com/150",isOnline:!1},{id:"13",text:"Текст 13",date:new Date("2023-08-07T02:15:00Z"),owner:!1,name:"Ethan",image:"https://via.placeholder.com/150",isOnline:!0},{id:"14",text:"Текст 14",date:new Date("2023-07-30T16:15:00Z"),owner:!1,name:"Jane",image:"https://via.placeholder.com/150",isOnline:!1},{id:"15",text:"Текст 15",date:new Date("2023-08-05T00:45:00Z"),owner:!1,name:"Olivia",image:"https://via.placeholder.com/150",isOnline:!0},{id:"16",text:"Текст 16",date:new Date("2023-08-04T22:30:00Z"),owner:!1,name:"Michael",image:"https://via.placeholder.com/150",isOnline:!0},{id:"17",text:"Текст 17",date:new Date("2023-08-03T21:15:00Z"),owner:!0,name:"John",image:"https://via.placeholder.com/150",isOnline:!0},{id:"18",text:"Текст 18",date:new Date("2023-08-02T20:00:00Z"),owner:!1,name:"Liam",image:"https://via.placeholder.com/150",isOnline:!1},{id:"19",text:"Текст 19",date:new Date("2023-07-30T16:15:00Z"),owner:!1,name:"Jane",image:"https://via.placeholder.com/150",isOnline:!0},{id:"20",text:"Текст 20",date:new Date("2023-07-31T17:30:00Z"),owner:!1,name:"Ava",image:"https://via.placeholder.com/150",isOnline:!1},{id:"21",text:"Текст 21",date:new Date("2023-07-30T16:15:00Z"),owner:!1,name:"Noah",image:"https://via.placeholder.com/150",isOnline:!0},{id:"22",text:"Текст 22",date:new Date("2023-07-30T16:15:00Z"),owner:!1,name:"Michael",image:"https://via.placeholder.com/150",isOnline:!0},{id:"23",text:"Текст 23",date:new Date("2023-07-28T13:45:00Z"),owner:!0,name:"John",image:"https://via.placeholder.com/150",isOnline:!0},{id:"24",text:"Текст 24",date:new Date("2023-07-27T12:30:00Z"),owner:!1,name:"Emma",image:"https://via.placeholder.com/150",isOnline:!1},{id:"25",text:"Текст 25",date:new Date("2023-07-26T11:15:00Z"),owner:!1,name:"Jane",image:"https://via.placeholder.com/150",isOnline:!0},{id:"26",text:"Текст 26",date:new Date("2023-07-25T10:00:00Z"),owner:!1,name:"Liam",image:"https://via.placeholder.com/150",isOnline:!1},{id:"27",text:"Текст 27",date:new Date("2023-07-24T08:45:00Z"),owner:!1,name:"Michael",image:"https://via.placeholder.com/150",isOnline:!0},{id:"28",text:"Текст 28",date:new Date("2023-07-23T07:30:00Z"),owner:!1,name:"Olivia",image:"https://via.placeholder.com/150",isOnline:!0},{id:"29",text:"Текст 29",date:new Date("2023-07-22T06:15:00Z"),owner:!0,name:"John",image:"https://via.placeholder.com/150",isOnline:!0},{id:"30",text:"Текст 30",date:new Date("2023-07-21T05:00:00Z"),owner:!1,name:"Jane",image:"https://via.placeholder.com/150",isOnline:!0},{id:"31",text:"Текст 31",date:new Date("2023-07-20T03:45:00Z"),owner:!1,name:"Ethan",image:"https://via.placeholder.com/150",isOnline:!0},{id:"32",text:"Текст 32",date:new Date("2023-07-19T02:30:00Z"),owner:!1,name:"Michael",image:"https://via.placeholder.com/150",isOnline:!0},{id:"33",text:"Текст 33",date:new Date("2023-07-18T01:15:00Z"),owner:!0,name:"John",image:"https://via.placeholder.com/150",isOnline:!0},{id:"34",text:"Текст 34",date:new Date("2023-07-17T00:00:00Z"),owner:!1,name:"Liam",image:"https://via.placeholder.com/150",isOnline:!1},{id:"35",text:"Текст 35",date:new Date("2023-07-16T22:45:00Z"),owner:!1,name:"Jane",image:"https://via.placeholder.com/150",isOnline:!0},{id:"36",text:"Текст 36",date:new Date("2023-07-15T21:30:00Z"),owner:!1,name:"Olivia",image:"https://via.placeholder.com/150",isOnline:!0},{id:"37",text:"Текст 37",date:new Date("2023-07-14T20:15:00Z"),owner:!1,name:"Michael",image:"https://via.placeholder.com/150",isOnline:!0},{id:"38",text:"Текст 38",date:new Date("2023-07-13T19:00:00Z"),owner:!1,name:"Ethan",image:"https://via.placeholder.com/150",isOnline:!1},{id:"39",text:"Текст 39",date:new Date("2023-07-12T17:45:00Z"),owner:!1,name:"Jane",image:"https://via.placeholder.com/150",isOnline:!0},{id:"40",text:"Текст 40",date:new Date("2023-07-11T16:30:00Z"),owner:!1,name:"Liam",image:"https://via.placeholder.com/150",isOnline:!1}],Je=()=>{const[e,t]=x.useState(Le.sort(a));function a(r,o){return r.date-o.date}return n.jsxs(A,{children:[n.jsx(z,{goBack:!0,imageUrl:"https://klike.net/uploads/posts/2019-05/medium/1556708030_2.jpg",channelName:"this is name"}),n.jsx(te,{messages:e}),n.jsx(Ce,{setMessages:t})]})};export{Je as default};
