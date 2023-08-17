import{G as p,n as s,t as n,j as t,r as o,Q as i,M as d,C as g,H as u}from"./index-81b92b97.js";function x(e){return p({tag:"svg",attr:{viewBox:"0 0 16 16",fill:"currentColor"},child:[{tag:"path",attr:{d:"M1 1.91L1.78 1.5L15 7.44899V8.3999L1.78 14.33L1 13.91L2.58311 8L1 1.91ZM3.6118 8.5L2.33037 13.1295L13.5 7.8999L2.33037 2.83859L3.6118 7.43874L9 7.5V8.5H3.6118Z"}}]})(e)}const h=s.div`
width: ${n.breakpoints.mobile}px;
height:665px;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
`,m=()=>t.jsx(h,{children:"MessageList"}),f=s.div`
  width: ${n.breakpoints.mobile}px;
position:relative;
padding-bottom:20px;
background-color:${n.colors.white};
`,j=s.div`
display:flex;
align-items:center;
justify-content:center;
position:absolute;
top:8px;
right:12px
`,b=s.input`
width:100%;
/* padding:6px 6px 0 32px  ; */
padding-top:6px;
padding-bottom:6px;
padding-right:72px;
font-family:'Segoe-Regular';
font-size:${n.fontSizes.s};
font-weight:400;
color:${n.colors.main};
border:none;
&:focus{
border:none;
outline:none
}
`,a=s.button`
&:first-of-type{
    margin-right:16px;
}
`,L=()=>{const[e,r]=o.useState(""),l=o.useCallback(()=>{if(e.trim()==="")return i.warning("enter message");i.success(`message => ${e}`)},[e]);return t.jsxs(f,{children:[t.jsx(b,{type:"text",placeholder:"Start typing...",value:e,onChange:c=>r(c.target.value)}),t.jsxs(j,{ButtonsContainer:!0,children:[t.jsx(a,{type:"button",onClick:()=>console.log("click"),children:t.jsx(d,{size:16,color:"#8E8E93"})}),t.jsx(a,{type:"button",onClick:l,children:t.jsx(x,{size:16,color:"#3D3D3D"})})]})]})},y=()=>t.jsxs(g,{children:[t.jsx(u,{goBack:!0,imageUrl:"https://klike.net/uploads/posts/2019-05/medium/1556708030_2.jpg",channelName:"this is name"}),t.jsx(m,{}),t.jsx(L,{})]});export{y as default};
