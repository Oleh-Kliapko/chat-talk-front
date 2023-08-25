import{G as R,n as i,t as d,r as v,j as n,p as V,Q as S,M as A,C as z,H as B}from"./index-61668c27.js";function H(e){return R({tag:"svg",attr:{viewBox:"0 0 16 16",fill:"currentColor"},child:[{tag:"path",attr:{d:"M1 1.91L1.78 1.5L15 7.44899V8.3999L1.78 14.33L1 13.91L2.58311 8L1 1.91ZM3.6118 8.5L2.33037 13.1295L13.5 7.8999L2.33037 2.83859L3.6118 7.43874L9 7.5V8.5H3.6118Z"}}]})(e)}const N=i.div`
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
`,q=i.ul`
width:100%;
align-items:flex-start;

`,G=i.li`
list-style: none;
display:flex;
flex-direction:${e=>e.owner?"row-reverse":"row"};
margin-top:12px;
`,P=i.div`
position:relative;
width: 32px;
height: 32px;
margin-right:${e=>e.owner?"0":"12px"};
margin-left:${e=>e.owner?"12px":"0"};
`,U=i.div`
opacity:${e=>e.repeatMsg?"1":"0"};
border-radius:50%;
overflow:hidden;

`,Y=i.img`
display:block;
width:100%;
height:auto;
`,Q=i.div`
width: 10px;
height: 10px;
background-color:#34C759;
position:absolute;
bottom:0;
right:0;
border: 1px solid white;
border-radius:50%;

`,W=i.div`
width:60%;
height:auto;
 word-wrap: break-word;
padding:4px 8px;
background-color:${e=>e.owner?"#007AFF":"#F2F2F7"};
/* border-radius:${e=>{if(e.owner)return"6px 0px 6px 6px";if(e.repeatMsg&&e.owner||e.repeatMsg&&!e.owner)return"6px 6px 6px 6px";if(!e.owner)return"0px 6px 6px 6px"}}; */
border-radius:${e=>e.owner?"6px 0px 6px 6px":"0px 6px 6px 6px"};
`,K=i.p`
margin-bottom:8px;
font-family:'Segoe-Regular';
font-size:${d.fontSizes.s};
font-weight:600;
color:${d.colors.main};
`,X=i.p`

font-family:'Segoe-Regular';
font-size:${d.fontSizes.s};
font-weight:400;
color:${e=>e.owner?"white":d.colors.main};
`,_=i.p`
margin-top:4px;
font-family:'Segoe-Regular';
font-size:${d.fontSizes.xs};
font-weight:400;
color:${e=>e.owner?"white":"#666668"};
text-align: right;
`,ee=i.span`
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
`,te=i.div`
position:relative;
margin-top:26px;
margin-bottom:26px;
`,ne=({messages:e})=>{const t=v.useRef();console.log("MessageList");const a=()=>{t.current.scrollIntoView({behavior:"smooth",block:"end"})};v.useEffect(()=>{a()},[e]);function r(s){const h=String(s.getDate()).padStart(2,"0"),m=String(s.getMonth()+1).padStart(2,"0"),b=s.getFullYear();return`${h}-${m}-${b}`}const o=new Date,l=new Date(o);l.setDate(o.getDate()-1);const u=r(o),f=r(l),x=s=>s===u?"today":s===f?"yesterday":s,c=e.reduce((s,h)=>{const m=r(h.date);return s[m]||(s[m]=[]),s[m].push(h),s},{});return console.log("data",c),n.jsx(N,{children:n.jsx(q,{ref:t,children:Object.keys(c).map(s=>n.jsxs("div",{children:[n.jsxs(te,{children:[n.jsx(ee,{children:x(s)}),n.jsx("hr",{})]}),n.jsx("ul",{children:c[s].map((h,m,b)=>m>0&&h.name===b[m-1].name?n.jsx(k,{repeatMsg:!1,el:h},h.id):n.jsx(k,{repeatMsg:!0,el:h},h.id))})]},s))})})},k=({el:e,repeatMsg:t})=>{function a(r){const o=r.getHours(),l=r.getMinutes(),u=o>=12?"PM":"AM";return`${o%12===0?12:o%12}:${l<10?"0":""}${l} ${u}`}return n.jsxs(G,{owner:e.owner,children:[n.jsxs(P,{owner:e.owner,children:[n.jsx(U,{repeatMsg:t,children:n.jsx(Y,{src:e.image,alt:e.name})}),e.isOnline&&t&&n.jsx(Q,{})]}),n.jsxs(W,{repeatMsg:t,owner:e.owner,children:[!e.owner&&n.jsx(K,{children:e.name}),n.jsx(X,{owner:e.owner,children:e.text}),n.jsx(_,{owner:e.owner,children:a(e.date)})]})]})},ae=i.div`
  width: ${d.breakpoints.mobile}px;
position:relative;
padding-bottom:20px;
background-color:${d.colors.white};
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
font-size:${d.fontSizes.s};
font-weight:400;
color:${d.colors.main};
border:none;
&:focus{
border:none;
outline:none
}
`,C=i.button`
&:first-of-type{
    margin-right:16px;
}
`;var J={exports:{}},O=1;function ie(){return O=(O*9301+49297)%233280,O/233280}function se(e){O=e}var le={nextValue:ie,seed:se},Z=le,g="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_-",p,L,w;function j(){w=!1}function F(e){if(!e){p!==g&&(p=g,j());return}if(e!==p){if(e.length!==g.length)throw new Error("Custom alphabet for shortid must be "+g.length+" unique characters. You submitted "+e.length+" characters: "+e);var t=e.split("").filter(function(a,r,o){return r!==o.lastIndexOf(a)});if(t.length)throw new Error("Custom alphabet for shortid must be "+g.length+" unique characters. These characters were not unique: "+t.join(", "));p=e,j()}}function de(e){return F(e),p}function ce(e){Z.seed(e),L!==e&&(j(),L=e)}function he(){p||F(g);for(var e=p.split(""),t=[],a=Z.nextValue(),r;e.length>0;)a=Z.nextValue(),r=Math.floor(a*e.length),t.push(e.splice(r,1)[0]);return t.join("")}function I(){return w||(w=he(),w)}function me(e){var t=I();return t[e]}function pe(){return p||g}var M={get:pe,characters:de,seed:ce,lookup:me,shuffled:I},y=typeof window=="object"&&(window.crypto||window.msCrypto),$;!y||!y.getRandomValues?$=function(e){for(var t=[],a=0;a<e;a++)t.push(Math.floor(Math.random()*256));return t}:$=function(e){return y.getRandomValues(new Uint8Array(e))};var ue=$,fe=function(e,t,a){for(var r=(2<<Math.log(t.length-1)/Math.LN2)-1,o=-~(1.6*r*a/t.length),l="";;)for(var u=e(o),f=o;f--;)if(l+=t[u[f]&r]||"",l.length===+a)return l},ge=M,xe=ue,we=fe;function ve(e){for(var t=0,a,r="";!a;)r=r+we(xe,ge.get(),1),a=e<Math.pow(16,t+1),t++;return r}var De=ve,D=De,Te=1567752802062,Oe=7,T,E;function be(e){var t="",a=Math.floor((Date.now()-Te)*.001);return a===E?T++:(T=0,E=a),t=t+D(Oe),t=t+D(e),T>0&&(t=t+D(T)),t=t+D(a),t}var ye=be,Ze=M;function je(e){if(!e||typeof e!="string"||e.length<6)return!1;var t=new RegExp("[^"+Ze.get().replace(/[|\\{}()[\]^$+*?.-]/g,"\\$&")+"]");return!t.test(e)}var $e=je;(function(e){var t=M,a=ye,r=$e,o=0;function l(c){return t.seed(c),e.exports}function u(c){return o=c,e.exports}function f(c){return c!==void 0&&t.characters(c),t.shuffled()}function x(){return a(o)}e.exports=x,e.exports.generate=x,e.exports.seed=l,e.exports.worker=u,e.exports.characters=f,e.exports.isValid=r})(J);var Me=J.exports,Se=Me;const ke=V(Se),Ce=({setMessages:e})=>{const[t,a]=v.useState(""),r=v.useCallback(()=>{if(t.trim()==="")return S.warning("enter message");e(o=>[...o,{id:ke.generate(),text:t,date:new Date,owner:!0,name:"John",image:"https://via.placeholder.com/150",isOnline:!0}]),a(""),S.success(`message => ${t}`)},[t,e]);return n.jsxs(ae,{children:[n.jsx(oe,{type:"text",placeholder:"Start typing...",maxLength:200,value:t,onChange:o=>a(o.target.value)}),n.jsxs(re,{ButtonsContainer:!0,children:[n.jsx(C,{type:"button",onClick:()=>console.log("click"),children:n.jsx(A,{size:16,color:"#8E8E93"})}),n.jsx(C,{type:"button",onClick:r,children:n.jsx(H,{size:16,color:"#3D3D3D"})})]})]})},Le=[{id:"1",text:"Текст 1",date:new Date("2023-08-21T12:00:00Z"),owner:!0,name:"John",image:"https://via.placeholder.com/150",isOnline:!0},{id:"2",text:"Текст 2",date:new Date("2023-08-20T15:30:00Z"),owner:!1,name:"Jane",image:"https://via.placeholder.com/150",isOnline:!1},{id:"3",text:"fdhrthrth",date:new Date("2023-08-22T08:45:00Z"),owner:!0,name:"John",image:"https://via.placeholder.com/150",isOnline:!0},{id:"4",text:"Текст 4",date:new Date("2023-08-16T09:20:00Z"),owner:!1,name:"Michael",image:"https://via.placeholder.com/150",isOnline:!0},{id:"5",text:"Текст 5",date:new Date("2023-08-15T14:10:00Z"),owner:!1,name:"Jane",image:"https://via.placeholder.com/150",isOnline:!1},{id:"6",text:"Текст 6",date:new Date("2023-08-14T17:00:00Z"),owner:!0,name:"John",image:"https://via.placeholder.com/150",isOnline:!0},{id:"7",text:"Текст 7",date:new Date("2023-08-13T12:45:00Z"),owner:!1,name:"Sophia",image:"https://via.placeholder.com/150",isOnline:!1},{id:"8",text:"Текст 8",date:new Date("2023-08-12T11:30:00Z"),owner:!0,name:"John",image:"https://via.placeholder.com/150",isOnline:!0},{id:"9",text:"Текст 9",date:new Date("2023-08-11T09:15:00Z"),owner:!1,name:"Emma",image:"https://via.placeholder.com/150",isOnline:!1},{id:"10",text:"Текст 10",date:new Date("2023-08-10T07:00:00Z"),owner:!1,name:"Jane",image:"https://via.placeholder.com/150",isOnline:!0},{id:"11",text:"Текст 11",date:new Date("2023-08-09T05:45:00Z"),owner:!0,name:"John",image:"https://via.placeholder.com/150",isOnline:!0},{id:"12",text:"Текст 12",date:new Date("2023-08-08T03:30:00Z"),owner:!1,name:"Liam",image:"https://via.placeholder.com/150",isOnline:!1},{id:"13",text:"Текст 13",date:new Date("2023-08-07T02:15:00Z"),owner:!1,name:"Ethan",image:"https://via.placeholder.com/150",isOnline:!0},{id:"14",text:"Текст 14",date:new Date("2023-07-30T16:15:00Z"),owner:!1,name:"Jane",image:"https://via.placeholder.com/150",isOnline:!1},{id:"15",text:"Текст 15",date:new Date("2023-08-05T00:45:00Z"),owner:!1,name:"Olivia",image:"https://via.placeholder.com/150",isOnline:!0},{id:"16",text:"Текст 16",date:new Date("2023-08-04T22:30:00Z"),owner:!1,name:"Michael",image:"https://via.placeholder.com/150",isOnline:!0},{id:"17",text:"Текст 17",date:new Date("2023-08-03T21:15:00Z"),owner:!0,name:"John",image:"https://via.placeholder.com/150",isOnline:!0},{id:"18",text:"Текст 18",date:new Date("2023-08-02T20:00:00Z"),owner:!1,name:"Liam",image:"https://via.placeholder.com/150",isOnline:!1},{id:"19",text:"Текст 19",date:new Date("2023-07-30T16:15:00Z"),owner:!1,name:"Jane",image:"https://via.placeholder.com/150",isOnline:!0},{id:"20",text:"Текст 20",date:new Date("2023-07-31T17:30:00Z"),owner:!1,name:"Ava",image:"https://via.placeholder.com/150",isOnline:!1},{id:"21",text:"Текст 21",date:new Date("2023-07-30T16:15:00Z"),owner:!1,name:"Noah",image:"https://via.placeholder.com/150",isOnline:!0},{id:"22",text:"Текст 22",date:new Date("2023-07-30T16:15:00Z"),owner:!1,name:"Michael",image:"https://via.placeholder.com/150",isOnline:!0},{id:"23",text:"Текст 23",date:new Date("2023-07-28T13:45:00Z"),owner:!0,name:"John",image:"https://via.placeholder.com/150",isOnline:!0},{id:"24",text:"Текст 24",date:new Date("2023-07-27T12:30:00Z"),owner:!1,name:"Emma",image:"https://via.placeholder.com/150",isOnline:!1},{id:"25",text:"Текст 25",date:new Date("2023-07-26T11:15:00Z"),owner:!1,name:"Jane",image:"https://via.placeholder.com/150",isOnline:!0},{id:"26",text:"Текст 26",date:new Date("2023-07-25T10:00:00Z"),owner:!1,name:"Liam",image:"https://via.placeholder.com/150",isOnline:!1},{id:"27",text:"Текст 27",date:new Date("2023-07-24T08:45:00Z"),owner:!1,name:"Michael",image:"https://via.placeholder.com/150",isOnline:!0},{id:"28",text:"Текст 28",date:new Date("2023-07-23T07:30:00Z"),owner:!1,name:"Olivia",image:"https://via.placeholder.com/150",isOnline:!0},{id:"29",text:"Текст 29",date:new Date("2023-07-22T06:15:00Z"),owner:!0,name:"John",image:"https://via.placeholder.com/150",isOnline:!0},{id:"30",text:"Текст 30",date:new Date("2023-07-21T05:00:00Z"),owner:!1,name:"Jane",image:"https://via.placeholder.com/150",isOnline:!0},{id:"31",text:"Текст 31",date:new Date("2023-07-20T03:45:00Z"),owner:!1,name:"Ethan",image:"https://via.placeholder.com/150",isOnline:!0},{id:"32",text:"Текст 32",date:new Date("2023-07-19T02:30:00Z"),owner:!1,name:"Michael",image:"https://via.placeholder.com/150",isOnline:!0},{id:"33",text:"Текст 33",date:new Date("2023-07-18T01:15:00Z"),owner:!0,name:"John",image:"https://via.placeholder.com/150",isOnline:!0},{id:"34",text:"Текст 34",date:new Date("2023-07-17T00:00:00Z"),owner:!1,name:"Liam",image:"https://via.placeholder.com/150",isOnline:!1},{id:"35",text:"Текст 35",date:new Date("2023-07-16T22:45:00Z"),owner:!1,name:"Jane",image:"https://via.placeholder.com/150",isOnline:!0},{id:"36",text:"Текст 36",date:new Date("2023-07-15T21:30:00Z"),owner:!1,name:"Olivia",image:"https://via.placeholder.com/150",isOnline:!0},{id:"37",text:"Текст 37",date:new Date("2023-07-14T20:15:00Z"),owner:!1,name:"Michael",image:"https://via.placeholder.com/150",isOnline:!0},{id:"38",text:"Текст 38",date:new Date("2023-07-13T19:00:00Z"),owner:!1,name:"Ethan",image:"https://via.placeholder.com/150",isOnline:!1},{id:"39",text:"Текст 39",date:new Date("2023-07-12T17:45:00Z"),owner:!1,name:"Jane",image:"https://via.placeholder.com/150",isOnline:!0},{id:"40",text:"Текст 40",date:new Date("2023-07-11T16:30:00Z"),owner:!1,name:"Liam",image:"https://via.placeholder.com/150",isOnline:!1}],Je=()=>{const[e,t]=v.useState(Le.sort(a));function a(r,o){return r.date-o.date}return n.jsxs(z,{children:[n.jsx(B,{goBack:!0,imageUrl:"https://klike.net/uploads/posts/2019-05/medium/1556708030_2.jpg",channelName:"this is name"}),n.jsx(ne,{messages:e}),n.jsx(Ce,{setMessages:t})]})};export{Je as default};
