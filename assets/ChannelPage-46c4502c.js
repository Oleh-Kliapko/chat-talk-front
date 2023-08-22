import{G as E,n as s,t as d,j as n,p as F,r as O,Q as j,M as A,C as I,H as V}from"./index-e914745c.js";function z(e){return E({tag:"svg",attr:{viewBox:"0 0 16 16",fill:"currentColor"},child:[{tag:"path",attr:{d:"M1 1.91L1.78 1.5L15 7.44899V8.3999L1.78 14.33L1 13.91L2.58311 8L1 1.91ZM3.6118 8.5L2.33037 13.1295L13.5 7.8999L2.33037 2.83859L3.6118 7.43874L9 7.5V8.5H3.6118Z"}}]})(e)}const R=s.div`
width: ${d.breakpoints.mobile}px;
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
`,B=s.ul`
width:100%;
align-items:flex-start;

`,H=s.li`
list-style: none;
display:flex;
flex-direction:${e=>e.owner?"row-reverse":"row"};
margin-top:12px;
`,N=s.div`
position:relative;
width: 32px;
height: 32px;
margin-right:${e=>e.owner?"0":"12px"};
margin-left:${e=>e.owner?"12px":"0"};
`,q=s.div`

border-radius:50%;
overflow:hidden;

`,G=s.img`
display:block;
width:100%;
height:auto;
`,P=s.div`
width: 10px;
height: 10px;
background-color:#34C759;
position:absolute;
bottom:0;
right:0;
border: 1px solid white;
border-radius:50%;

`,U=s.div`
width:60%;
padding:4px 8px;
background-color:${e=>e.owner?"#007AFF":"#F2F2F7"};
border-radius:${e=>e.owner?"6px 0px 6px 6px":"0px 6px 6px 6px"};
`,Y=s.p`
margin-bottom:8px;
font-family:'Segoe-Regular';
font-size:${d.fontSizes.s};
font-weight:600;
color:${d.colors.main};
`,Q=s.p`

font-family:'Segoe-Regular';
font-size:${d.fontSizes.s};
font-weight:400;
color:${e=>e.owner?"white":d.colors.main};
`,W=s.p`
margin-top:4px;
font-family:'Segoe-Regular';
font-size:${d.fontSizes.xs};
font-weight:400;
color:${e=>e.owner?"white":"#666668"};
text-align: right;
`,K=s.span`
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
`,X=s.p`
position:relative;
margin-top:26px;
margin-bottom:26px;
`,_=({messages:e})=>{function t(i){const l=String(i.getDate()).padStart(2,"0"),f=String(i.getMonth()+1).padStart(2,"0"),J=i.getFullYear();return`${l}-${f}-${J}`}const a=new Date,r=new Date(a);r.setDate(a.getDate()-1);const o=t(a),c=t(r),u=i=>i===o?"today":i===c?"yesterday":i,h=e.reduce((i,l)=>{const f=t(l.date);return i[f]||(i[f]=[]),i[f].push(l),i},{});return console.log("data",h),n.jsx(R,{children:n.jsx(B,{children:Object.keys(h).map(i=>n.jsxs("div",{children:[n.jsxs(X,{children:[n.jsx(K,{children:u(i)}),n.jsx("hr",{})]}),n.jsx("ul",{children:h[i].map(l=>n.jsx(ee,{el:l},l.id))})]},i))})})},ee=({el:e})=>{function t(a){const r=a.getHours(),o=a.getMinutes(),c=r>=12?"PM":"AM";return`${r%12===0?12:r%12}:${o<10?"0":""}${o} ${c}`}return n.jsxs(H,{owner:e.owner,children:[n.jsxs(N,{owner:e.owner,children:[n.jsx(q,{children:n.jsx(G,{src:e.image,alt:e.name})}),e.isOnline&&n.jsx(P,{})]}),n.jsxs(U,{owner:e.owner,children:[!e.owner&&n.jsx(Y,{children:e.name}),n.jsx(Q,{owner:e.owner,children:e.text}),n.jsx(W,{owner:e.owner,children:t(e.date)})]})]})},te=s.div`
  width: ${d.breakpoints.mobile}px;
position:relative;
padding-bottom:20px;
background-color:${d.colors.white};
`,ae=s.div`
display:flex;
align-items:center;
justify-content:center;
position:absolute;
top:8px;
right:12px
`,ne=s.input`
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
`,$=s.button`
&:first-of-type{
    margin-right:16px;
}
`;var C={exports:{}},v=1;function re(){return v=(v*9301+49297)%233280,v/233280}function ie(e){v=e}var oe={nextValue:re,seed:ie},T=oe,p="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_-",m,M,g;function b(){g=!1}function k(e){if(!e){m!==p&&(m=p,b());return}if(e!==m){if(e.length!==p.length)throw new Error("Custom alphabet for shortid must be "+p.length+" unique characters. You submitted "+e.length+" characters: "+e);var t=e.split("").filter(function(a,r,o){return r!==o.lastIndexOf(a)});if(t.length)throw new Error("Custom alphabet for shortid must be "+p.length+" unique characters. These characters were not unique: "+t.join(", "));m=e,b()}}function se(e){return k(e),m}function le(e){T.seed(e),M!==e&&(b(),M=e)}function de(){m||k(p);for(var e=m.split(""),t=[],a=T.nextValue(),r;e.length>0;)a=T.nextValue(),r=Math.floor(a*e.length),t.push(e.splice(r,1)[0]);return t.join("")}function L(){return g||(g=de(),g)}function ce(e){var t=L();return t[e]}function he(){return m||p}var Z={get:he,characters:se,seed:le,lookup:ce,shuffled:L},D=typeof window=="object"&&(window.crypto||window.msCrypto),y;!D||!D.getRandomValues?y=function(e){for(var t=[],a=0;a<e;a++)t.push(Math.floor(Math.random()*256));return t}:y=function(e){return D.getRandomValues(new Uint8Array(e))};var me=y,pe=function(e,t,a){for(var r=(2<<Math.log(t.length-1)/Math.LN2)-1,o=-~(1.6*r*a/t.length),c="";;)for(var u=e(o),h=o;h--;)if(c+=t[u[h]&r]||"",c.length===+a)return c},ue=Z,fe=me,ge=pe;function we(e){for(var t=0,a,r="";!a;)r=r+ge(fe,ue.get(),1),a=e<Math.pow(16,t+1),t++;return r}var xe=we,w=xe,ve=1567752802062,De=7,x,S;function Oe(e){var t="",a=Math.floor((Date.now()-ve)*.001);return a===S?x++:(x=0,S=a),t=t+w(De),t=t+w(e),x>0&&(t=t+w(x)),t=t+w(a),t}var Te=Oe,be=Z;function ye(e){if(!e||typeof e!="string"||e.length<6)return!1;var t=new RegExp("[^"+be.get().replace(/[|\\{}()[\]^$+*?.-]/g,"\\$&")+"]");return!t.test(e)}var Ze=ye;(function(e){var t=Z,a=Te,r=Ze,o=0;function c(l){return t.seed(l),e.exports}function u(l){return o=l,e.exports}function h(l){return l!==void 0&&t.characters(l),t.shuffled()}function i(){return a(o)}e.exports=i,e.exports.generate=i,e.exports.seed=c,e.exports.worker=u,e.exports.characters=h,e.exports.isValid=r})(C);var je=C.exports,$e=je;const Me=F($e),Se=({setMessages:e})=>{const[t,a]=O.useState(""),r=O.useCallback(()=>{if(t.trim()==="")return j.warning("enter message");e(o=>[...o,{id:Me.generate(),text:t,date:new Date,owner:!0,name:"John",image:"https://via.placeholder.com/150",isOnline:!0}]),a(""),j.success(`message => ${t}`)},[t,e]);return n.jsxs(te,{children:[n.jsx(ne,{type:"text",placeholder:"Start typing...",value:t,onChange:o=>a(o.target.value)}),n.jsxs(ae,{ButtonsContainer:!0,children:[n.jsx($,{type:"button",onClick:()=>console.log("click"),children:n.jsx(A,{size:16,color:"#8E8E93"})}),n.jsx($,{type:"button",onClick:r,children:n.jsx(z,{size:16,color:"#3D3D3D"})})]})]})},Ce=[{id:"1",text:"Текст 1",date:new Date("2023-08-21T12:00:00Z"),owner:!0,name:"John",image:"https://via.placeholder.com/150",isOnline:!0},{id:"2",text:"Текст 2",date:new Date("2023-08-20T15:30:00Z"),owner:!1,name:"Jane",image:"https://via.placeholder.com/150",isOnline:!1},{id:"3",text:"fdhrthrth",date:new Date("2023-08-22T08:45:00Z"),owner:!0,name:"John",image:"https://via.placeholder.com/150",isOnline:!0},{id:"4",text:"Текст 4",date:new Date("2023-08-16T09:20:00Z"),owner:!1,name:"Michael",image:"https://via.placeholder.com/150",isOnline:!0},{id:"5",text:"Текст 5",date:new Date("2023-08-15T14:10:00Z"),owner:!1,name:"Jane",image:"https://via.placeholder.com/150",isOnline:!1},{id:"6",text:"Текст 6",date:new Date("2023-08-14T17:00:00Z"),owner:!0,name:"John",image:"https://via.placeholder.com/150",isOnline:!0},{id:"7",text:"Текст 7",date:new Date("2023-08-13T12:45:00Z"),owner:!1,name:"Sophia",image:"https://via.placeholder.com/150",isOnline:!1},{id:"8",text:"Текст 8",date:new Date("2023-08-12T11:30:00Z"),owner:!0,name:"John",image:"https://via.placeholder.com/150",isOnline:!0},{id:"9",text:"Текст 9",date:new Date("2023-08-11T09:15:00Z"),owner:!1,name:"Emma",image:"https://via.placeholder.com/150",isOnline:!1},{id:"10",text:"Текст 10",date:new Date("2023-08-10T07:00:00Z"),owner:!1,name:"Jane",image:"https://via.placeholder.com/150",isOnline:!0},{id:"11",text:"Текст 11",date:new Date("2023-08-09T05:45:00Z"),owner:!0,name:"John",image:"https://via.placeholder.com/150",isOnline:!0},{id:"12",text:"Текст 12",date:new Date("2023-08-08T03:30:00Z"),owner:!1,name:"Liam",image:"https://via.placeholder.com/150",isOnline:!1},{id:"13",text:"Текст 13",date:new Date("2023-08-07T02:15:00Z"),owner:!1,name:"Ethan",image:"https://via.placeholder.com/150",isOnline:!0},{id:"14",text:"Текст 14",date:new Date("2023-07-30T16:15:00Z"),owner:!1,name:"Jane",image:"https://via.placeholder.com/150",isOnline:!1},{id:"15",text:"Текст 15",date:new Date("2023-08-05T00:45:00Z"),owner:!1,name:"Olivia",image:"https://via.placeholder.com/150",isOnline:!0},{id:"16",text:"Текст 16",date:new Date("2023-08-04T22:30:00Z"),owner:!1,name:"Michael",image:"https://via.placeholder.com/150",isOnline:!0},{id:"17",text:"Текст 17",date:new Date("2023-08-03T21:15:00Z"),owner:!0,name:"John",image:"https://via.placeholder.com/150",isOnline:!0},{id:"18",text:"Текст 18",date:new Date("2023-08-02T20:00:00Z"),owner:!1,name:"Liam",image:"https://via.placeholder.com/150",isOnline:!1},{id:"19",text:"Текст 19",date:new Date("2023-07-30T16:15:00Z"),owner:!1,name:"Jane",image:"https://via.placeholder.com/150",isOnline:!0},{id:"20",text:"Текст 20",date:new Date("2023-07-31T17:30:00Z"),owner:!1,name:"Ava",image:"https://via.placeholder.com/150",isOnline:!1},{id:"21",text:"Текст 21",date:new Date("2023-07-30T16:15:00Z"),owner:!1,name:"Noah",image:"https://via.placeholder.com/150",isOnline:!0},{id:"22",text:"Текст 22",date:new Date("2023-07-30T16:15:00Z"),owner:!1,name:"Michael",image:"https://via.placeholder.com/150",isOnline:!0},{id:"23",text:"Текст 23",date:new Date("2023-07-28T13:45:00Z"),owner:!0,name:"John",image:"https://via.placeholder.com/150",isOnline:!0},{id:"24",text:"Текст 24",date:new Date("2023-07-27T12:30:00Z"),owner:!1,name:"Emma",image:"https://via.placeholder.com/150",isOnline:!1},{id:"25",text:"Текст 25",date:new Date("2023-07-26T11:15:00Z"),owner:!1,name:"Jane",image:"https://via.placeholder.com/150",isOnline:!0},{id:"26",text:"Текст 26",date:new Date("2023-07-25T10:00:00Z"),owner:!1,name:"Liam",image:"https://via.placeholder.com/150",isOnline:!1},{id:"27",text:"Текст 27",date:new Date("2023-07-24T08:45:00Z"),owner:!1,name:"Michael",image:"https://via.placeholder.com/150",isOnline:!0},{id:"28",text:"Текст 28",date:new Date("2023-07-23T07:30:00Z"),owner:!1,name:"Olivia",image:"https://via.placeholder.com/150",isOnline:!0},{id:"29",text:"Текст 29",date:new Date("2023-07-22T06:15:00Z"),owner:!0,name:"John",image:"https://via.placeholder.com/150",isOnline:!0},{id:"30",text:"Текст 30",date:new Date("2023-07-21T05:00:00Z"),owner:!1,name:"Jane",image:"https://via.placeholder.com/150",isOnline:!0},{id:"31",text:"Текст 31",date:new Date("2023-07-20T03:45:00Z"),owner:!1,name:"Ethan",image:"https://via.placeholder.com/150",isOnline:!0},{id:"32",text:"Текст 32",date:new Date("2023-07-19T02:30:00Z"),owner:!1,name:"Michael",image:"https://via.placeholder.com/150",isOnline:!0},{id:"33",text:"Текст 33",date:new Date("2023-07-18T01:15:00Z"),owner:!0,name:"John",image:"https://via.placeholder.com/150",isOnline:!0},{id:"34",text:"Текст 34",date:new Date("2023-07-17T00:00:00Z"),owner:!1,name:"Liam",image:"https://via.placeholder.com/150",isOnline:!1},{id:"35",text:"Текст 35",date:new Date("2023-07-16T22:45:00Z"),owner:!1,name:"Jane",image:"https://via.placeholder.com/150",isOnline:!0},{id:"36",text:"Текст 36",date:new Date("2023-07-15T21:30:00Z"),owner:!1,name:"Olivia",image:"https://via.placeholder.com/150",isOnline:!0},{id:"37",text:"Текст 37",date:new Date("2023-07-14T20:15:00Z"),owner:!1,name:"Michael",image:"https://via.placeholder.com/150",isOnline:!0},{id:"38",text:"Текст 38",date:new Date("2023-07-13T19:00:00Z"),owner:!1,name:"Ethan",image:"https://via.placeholder.com/150",isOnline:!1},{id:"39",text:"Текст 39",date:new Date("2023-07-12T17:45:00Z"),owner:!1,name:"Jane",image:"https://via.placeholder.com/150",isOnline:!0},{id:"40",text:"Текст 40",date:new Date("2023-07-11T16:30:00Z"),owner:!1,name:"Liam",image:"https://via.placeholder.com/150",isOnline:!1}],Le=()=>{const[e,t]=O.useState(Ce.sort(a));function a(r,o){return r.date-o.date}return n.jsxs(I,{children:[n.jsx(V,{goBack:!0,imageUrl:"https://klike.net/uploads/posts/2019-05/medium/1556708030_2.jpg",channelName:"this is name"}),n.jsx(_,{messages:e}),n.jsx(Se,{setMessages:t})]})};export{Le as default};
