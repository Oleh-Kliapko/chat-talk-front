import{n,t as o,r as c,j as e,B as h,b as m,C as g,L as u}from"./index-00507514.js";import{E as j,a as f,T as w,M as y,b as $,S,c as b,B as C,A as v,C as x}from"./SingingUpModal.styled-fd314224.js";const E=n.div`
 width: 390px;
 /* padding:40px 20px; */
 `,T=n.h4`
font-family:'Segoe-Bold';
font-weight:700;
font-size:${o.fontSizes.xl};
color:${o.colors.main};

`,M=n.p`
margin-top:8px;
font-family:'Segoe-Regular';
font-weight:400;
font-size:${o.fontSizes.m};
color:${o.colors.main};
`,B=n.div`
margin-top:8px;
  position: relative;
`,z=n.input`
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
`,R=n.div`
  margin-top:32px;
`,k=({onClose:s,onOpenRecieved:a})=>{const[i,r]=c.useState(""),l=async()=>{try{await m({email:i}),s(),a()}catch(t){console.log(t)}};return e.jsxs(E,{children:[e.jsx(T,{children:"Forgot password"}),e.jsx(M,{children:"Enter your email address, and we'll send you a link to reset your password"}),e.jsx(R,{children:e.jsx("label",{htmlFor:"email",children:"Email"})}),e.jsxs(B,{children:[e.jsx(z,{type:"email",id:"email",onChange:t=>{r(t.target.value)},value:i,placeholder:"Email address"}),e.jsx(j,{})]}),e.jsx(h,{onClick:l,text:"Continue",textSize:o.fontSizes.m,color:o.colors.white,width:"100%",height:`${o.spacing[12]}px`,gradient:o.colors.mainBtnBgr,hoverGradient:o.colors.accentBtnBgr,border:o.border.main,borderRadius:o.radii.main,marginTop:"84px",type:"button"})]})},L=({onClose:s})=>e.jsxs(e.Fragment,{children:[e.jsxs(f,{children:[" ",e.jsx(w,{color:"white",size:54})," "]}),e.jsxs(y,{children:[e.jsx($,{children:"Thank you for signing up!"}),e.jsxs(S,{children:["To complete your registration,",e.jsx("br",{})," please check your inbox"]}),e.jsx(b,{children:"Didn’t received the email yet?"}),e.jsx(C,{onClick:s,children:"Click here to try again"})]})]}),P=()=>{const[s,a]=c.useState(!1),[i,r]=c.useState(!1),l=()=>r(!1),t=()=>r(!0),d=()=>a(!1),p=()=>a(!0);return e.jsxs(g,{children:[e.jsx(u,{widthLogo:"80",heightLogo:"80",title:"LogIn to Talk"}),e.jsx(v,{from:"loginPage",onOpen:t}),i&&e.jsx(x,{onClose:l,children:e.jsx(k,{onClose:l,onOpenRecieved:p})}),s&&e.jsx(x,{onClose:d,children:e.jsx(L,{onClose:d})})]})};export{P as default};
