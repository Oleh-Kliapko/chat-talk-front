import{G as s,n,t as e,j as t,M as r,m as a,C as l,H as c}from"./index-9550b9db.js";function p(i){return s({tag:"svg",attr:{viewBox:"0 0 16 16",fill:"currentColor"},child:[{tag:"path",attr:{d:"M1 1.91L1.78 1.5L15 7.44899V8.3999L1.78 14.33L1 13.91L2.58311 8L1 1.91ZM3.6118 8.5L2.33037 13.1295L13.5 7.8999L2.33037 2.83859L3.6118 7.43874L9 7.5V8.5H3.6118Z"}}]})(i)}const d=n.div`
  width: ${e.breakpoints.mobile}px;
  height:665px;
  display:flex;
 flex-direction:column;
 align-items:center;
 justify-content:center;
`,x=()=>t.jsx(d,{children:"MessageList"}),g=n.div`
  width: ${e.breakpoints.mobile}px;
position:relative;
padding-bottom:20px;
background-color:${e.colors.white};
`,u=n.div`
display:flex;
align-items:center;
justify-content:center;
position:absolute;
top:8px;
right:12px
`,h=n.input`
width:100%;
/* padding:6px 6px 0 32px  ; */
padding-top:6px;
padding-bottom:6px;
padding-right:72px;
font-family:'Segoe-Regular';
font-size:${e.fontSizes.s};
font-weight:400;
color:${e.colors.main};
border:none;
&:focus{
border:none;
outline:none
}
`,o=n.button`
&:first-of-type{
    margin-right:16px;
}
`,m=()=>t.jsxs(g,{children:[t.jsx(h,{type:"text",placeholder:"Start typing..."}),t.jsxs(u,{ButtonsContainer:!0,children:[t.jsx(o,{type:"button",onClick:()=>console.log("click"),children:t.jsx(r,{size:16,color:"#8E8E93"})}),t.jsx(o,{type:"button",onClick:()=>console.log("click"),children:t.jsx(p,{size:16,color:"#3D3D3D"})})]})]}),j=()=>(a(),t.jsxs(l,{children:[t.jsx(c,{goBack:!0,imageUrl:"https://klike.net/uploads/posts/2019-05/medium/1556708030_2.jpg",channelName:"this is name"}),t.jsx(x,{}),t.jsx(m,{})]}));export{j as default};
