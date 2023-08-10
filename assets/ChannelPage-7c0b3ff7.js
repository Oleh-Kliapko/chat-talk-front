import{G as i,j as t,n,t as e,M as r,m as a,C as l,H as c}from"./index-2e22ace4.js";function p(s){return i({tag:"svg",attr:{viewBox:"0 0 16 16",fill:"currentColor"},child:[{tag:"path",attr:{d:"M1 1.91L1.78 1.5L15 7.44899V8.3999L1.78 14.33L1 13.91L2.58311 8L1 1.91ZM3.6118 8.5L2.33037 13.1295L13.5 7.8999L2.33037 2.83859L3.6118 7.43874L9 7.5V8.5H3.6118Z"}}]})(s)}const d=()=>t.jsx("div",{children:"MessageList"}),x=n.div`
  width: ${e.breakpoints.mobile}px;
position:relative;
padding-bottom:20px;
background-color:${e.colors.white};
`,g=n.div`
display:flex;
align-items:center;
justify-content:center;
position:absolute;
top:8px;
right:12px
`,u=n.input`
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
`,h=()=>t.jsxs(x,{children:[t.jsx(u,{type:"text",placeholder:"Start typing..."}),t.jsxs(g,{ButtonsContainer:!0,children:[t.jsx(o,{type:"button",onClick:()=>console.log("click"),children:t.jsx(r,{size:16,color:"#8E8E93"})}),t.jsx(o,{type:"button",onClick:()=>console.log("click"),children:t.jsx(p,{size:16,color:"#3D3D3D"})})]})]}),j=()=>(a(),t.jsxs(l,{children:[t.jsx(c,{goBack:!0,imageUrl:"https://klike.net/uploads/posts/2019-05/medium/1556708030_2.jpg",channelName:"this is name"}),t.jsx(d,{}),t.jsx(h,{})]}));export{j as default};
