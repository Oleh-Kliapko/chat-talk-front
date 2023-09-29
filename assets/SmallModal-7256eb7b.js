import{n,t,P as o,j as e}from"./index-b98ecd04.js";import{B as r}from"./BtnTemplate-8a3ceb81.js";const d=n.div`
  width: 260px;
  padding-left:20px;
  padding-right:20px;
  background-color:${t.colors.white};
  text-align:center;
`,p=n.h4`
font-family:'Segoe-Semibold';
font-weight:600;
font-size:${t.fontSizes.l};
color:${t.colors.main};
`,x=n.p`
font-family:'Segoe-Regular';
font-weight:400;
font-size:${t.fontSizes.m};
color:${t.colors.grey};
`,m=n.div`
display:flex;
justify-content:space-between;
margin-top:32px;
`,h=({yes:s,no:a,title:l,subtitle:c,isLoading:i})=>e.jsxs(d,{children:[e.jsx(p,{children:l}),e.jsx(x,{children:c}),e.jsxs(m,{children:[e.jsx(r,{disabled:i,onClick:a,text:"No",textSize:t.fontSizes.m,color:t.colors.main,width:"90px",height:"40px",hoverGradient:t.colors.accentBtnBgr,border:t.border.accent,borderRadius:t.radii.main,type:"button"}),e.jsx(r,{disabled:i,onClick:s,text:i?"wait...":"Yes",textSize:t.fontSizes.m,color:t.colors.white,width:"90px",height:"40px",gradient:t.colors.mainBtnBgr,hoverGradient:t.colors.accentBtnBgr,border:t.border.main,borderRadius:t.radii.main,type:"button"})]})]});h.propTypes={yes:o.func,no:o.func,title:o.string,subtitle:o.string,isLoading:o.bool};export{h as S};
