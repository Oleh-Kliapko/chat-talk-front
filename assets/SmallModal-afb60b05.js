import{n,t,P as o,j as e}from"./index-38c3d544.js";import{B as i}from"./BtnTemplate-f817ece7.js";const l=n.div`
  width: 260px;
  padding-left:20px;
  padding-right:20px;
  background-color:${t.colors.white};
  text-align:center;
`,d=n.h4`
font-family:'Segoe-Semibold';
font-weight:600;
font-size:${t.fontSizes.l};
color:${t.colors.main};
`,p=n.p`
font-family:'Segoe-Regular';
font-weight:400;
font-size:${t.fontSizes.m};
color:${t.colors.grey};
`,x=n.div`
display:flex;
justify-content:space-between;
margin-top:32px;
`,m=({yes:r,no:s,title:a,subtitle:c})=>e.jsxs(l,{children:[e.jsx(d,{children:a}),e.jsx(p,{children:c}),e.jsxs(x,{children:[e.jsx(i,{onClick:s,text:"No",textSize:t.fontSizes.m,color:t.colors.main,width:"90px",height:"40px",hoverGradient:t.colors.accentBtnBgr,border:t.border.accent,borderRadius:t.radii.main,type:"button"}),e.jsx(i,{onClick:r,text:"Yes",textSize:t.fontSizes.m,color:t.colors.white,width:"90px",height:"40px",gradient:t.colors.mainBtnBgr,hoverGradient:t.colors.accentBtnBgr,border:t.border.main,borderRadius:t.radii.main,type:"button"})]})]});m.propTypes={yes:o.func,no:o.func,title:o.string,subtitle:o.string};export{m as S};
