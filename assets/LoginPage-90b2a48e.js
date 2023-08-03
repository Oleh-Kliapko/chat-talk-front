import{n,t as o,j as e,B as h,r as l,C as m,L as g}from"./index-5c079f8e.js";import{E as u,a as j,T as f,M as $,b as w,S as y,c as S,B as b,A as C,C as c}from"./SingingUpModal.styled-0cdc39d9.js";const v=n.div`
 width: 390px;
 /* padding:40px 20px; */
 `,E=n.h4`
font-family:'Segoe-Bold';
font-weight:700;
font-size:${o.fontSizes.xl};
color:${o.colors.main};

`,T=n.p`
margin-top:8px;
font-family:'Segoe-Regular';
font-weight:400;
font-size:${o.fontSizes.m};
color:${o.colors.main};
`,M=n.div`
margin-top:8px;
  position: relative;
`,B=n.input`
  width: 100%;
  color: ${o.colors.main};
  font-family: 'Segoe-Regular';
  font-size: ${o.fontSizes.m};
  padding: ${o.spacing[3]}px ${o.spacing[0]}px ${o.spacing[3]}px
    ${o.spacing[10]}px;
  border: ${o.border.main};
  border-radius: ${o.radii.main};

  &:focus,
  &:hover {
    outline: none;
    border: ${o.border.accent};
    box-shadow: 0 0 0 1px ${o.colors.accent};
  }
`,z=n.div`
  margin-top:32px;
`,R=({onClose:t,onOpenRecieved:s})=>e.jsxs(v,{children:[e.jsx(E,{children:"Forgot password"}),e.jsx(T,{children:"Enter your email address, and we'll send you a link to reset your password"}),e.jsx(z,{children:e.jsx("label",{htmlFor:"email",children:"Email"})}),e.jsxs(M,{children:[e.jsx(B,{type:"email",id:"email",placeholder:"Email address"}),e.jsx(u,{})]}),e.jsx(h,{onClick:()=>{t(),s()},text:"Continue",textSize:o.fontSizes.m,color:o.colors.white,width:"100%",height:`${o.spacing[12]}px`,gradient:o.colors.mainBtnBgr,hoverGradient:o.colors.accentBtnBgr,border:o.border.main,borderRadius:o.radii.main,marginTop:"84px",type:"button"})]}),k=({onClose:t})=>e.jsxs(e.Fragment,{children:[e.jsxs(j,{children:[" ",e.jsx(f,{color:"white",size:54})," "]}),e.jsxs($,{children:[e.jsx(w,{children:"Thank you for signing up!"}),e.jsxs(y,{children:["To complete your registration,",e.jsx("br",{})," please check your inbox"]}),e.jsx(S,{children:"Didn’t received the email yet?"}),e.jsx(b,{onClick:t,children:"Click here to try again"})]})]}),I=()=>{const[t,s]=l.useState(!0),[d,i]=l.useState(!0),r=()=>i(!1),x=()=>i(!0),a=()=>s(!1),p=()=>s(!0);return e.jsxs(m,{children:[e.jsx(g,{widthLogo:"80",heightLogo:"80",title:"LogIn to Talk"}),e.jsx(C,{from:"loginPage",onOpen:x}),d&&e.jsx(c,{onClose:r,children:e.jsx(R,{onClose:r,onOpenRecieved:p})}),t&&e.jsx(c,{onClose:a,children:e.jsx(k,{onClose:a})})]})};export{I as default};
