import{n,t as r,a as s,P as e,j as t,u as p}from"./index-58dd9088.js";const m=n.button`
  color: ${o=>o.color};
  font-size: ${o=>o.textSize};
  width: ${o=>o.width};
  height: ${o=>o.height};
  background: ${o=>o.gradient?o.gradient:o.backgroundColor};
  border: ${o=>o.border};
  border-radius: ${o=>o.borderRadius};
  margin-bottom: ${o=>o.marginBottom};
  margin-top: ${o=>o.marginTop};
  transition: transform 0.5s ease;

  &:hover {
    background: ${o=>o.hoverGradient?o.hoverGradient:o.hoverBackgroundColor};
    color: ${o=>o.hoverColor};
    transform: scale(1.05);
  }
`,u=n.div`
  display: flex;
  gap: ${r.spacing[4]}px;
  font-family: 'Segoe-Semibold';
  font-size: ${r.fontSizes.s};
`,a=n(s)`
  color: ${r.colors.accent};
`,x=n.div`
  display: flex;
  justify-content: end;
  font-family: 'Segoe-Regular';
  color: ${r.colors.main};
  font-size: ${r.fontSizes.m};
  margin-top: ${r.spacing[4]}px;
  margin-bottom: ${r.spacing[8]}px;
`,g=({text:o,gradient:i,hoverBackgroundColor:c,hoverGradient:d,hoverColor:l,...h})=>t.jsx(m,{gradient:i,hoverGradient:d,hoverBackgroundColor:c,hoverColor:l,...h,children:o});g.propTypes={text:e.string,gradient:e.string,hoverBackgroundColor:e.string,hoverGradient:e.string,hoverColor:e.string};const $=({from:o})=>{const i=p();return t.jsx(g,{text:o==="loginPage"?"Log in":"Sign Up",textSize:r.fontSizes.m,color:r.colors.white,width:"100%",height:`${r.spacing[12]}px`,gradient:r.colors.mainBtnBgr,hoverGradient:r.colors.accentBtnBgr,border:r.border.main,borderRadius:r.radii.main,marginBottom:"24px",onClick:()=>i("/channels")})};$.propTypes={from:e.string};const f=({from:o})=>t.jsxs(u,{children:[t.jsxs("div",{children:[o==="loginPage"?"Don't have an account?":"You already have an account?"," "]}),o==="loginPage"?t.jsx(a,{to:"/register",children:"Sign up"}):t.jsx(a,{to:"/login",children:"Log in"})]});f.propTypes={from:e.string};const v=({from:o})=>t.jsx(t.Fragment,{children:o==="loginPage"&&t.jsx(x,{children:t.jsx(s,{to:"/register",children:"Forgot password?"})})});v.propTypes={from:e.string};export{$ as A,g as B,v as F,f as R};
