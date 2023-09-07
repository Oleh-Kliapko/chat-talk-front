import{n as i,t as o,P as p,u as S,r as a,j as e,s as C,a as $,C as v,L as y}from"./index-ddfabd26.js";import{E as b,a as w,T as E,M,b as T,S as k,c as R,B as z,A as F}from"./SingingUpModal.styled-8e26a7d7.js";import{C as x}from"./CreateModal-cee7a987.js";import{F as L,a as B,A as P}from"./AuthBtn-d03bd164.js";import{v as A,F as O}from"./FormFieldError-c0026006.js";import"./iconBase-263d589c.js";import"./BtnTemplate-19774da0.js";import"./ForgotPasswordBtn-89eb32ae.js";import"./index.esm-3bf547ce.js";const D=i.div`
 min-width: 390px;
 padding:40px 20px;
 `,I=i.h4`
font-family:'Segoe-Bold';
font-weight:700;
font-size:${o.fontSizes.xl};
color:${o.colors.main};
`,V=i.p`
margin-top:8px;
font-family:'Segoe-Regular';
font-weight:400;
font-size:${o.fontSizes.m};
color:${o.colors.main};
`,W=i.div`
margin-top:8px;
  position: relative;
`,q=i.input`
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
`,G=i.div`
  margin-top:32px;
`,H=i.div`
  /* color: ${o.colors.error};
  font-size: ${o.fontSizes.xxs};
  font-family: 'Segoe-Regular'; */
  margin-bottom: ${o.spacing[4]}px;
  /* align-self: flex-end; */
`,h=({onClose:t,onOpenRecieved:d})=>{const m=S(),[n,r]=a.useState(!1);return e.jsxs(D,{children:[e.jsx(I,{children:"Forgot password"}),e.jsx(V,{children:"Enter your email address, and we'll send you a link to reset your password"}),e.jsx(L,{validationSchema:A.emailSchema,initialValues:{email:""},onSubmit:async({email:l},{setSubmitting:s})=>{r(!0);const c=await m(C({email:l}));r(!1),c.meta.requestStatus!=="rejected"&&(t(),d(),s(!1))},children:({values:l,errors:s,touched:c,handleChange:f,handleBlur:g,handleSubmit:j})=>e.jsxs(B,{noValidate:!0,onSubmit:j,children:[e.jsx(G,{children:"Email"}),e.jsxs(W,{style:{position:"relative"},children:[e.jsx(b,{}),e.jsx(q,{type:"text",name:"email",onChange:f,onBlur:g,value:l.email,placeholder:"Email address"})]}),e.jsx(H,{children:s.email&&c.email&&e.jsx(O,{title:s.email})}),e.jsx(P,{disabled:n,from:"emailModal"})]})}),n&&e.jsx($,{})]})};h.propTypes={onClose:p.func,onOpenRecieved:p.func};const u=({onClose:t})=>e.jsxs(e.Fragment,{children:[e.jsxs(w,{children:[" ",e.jsx(E,{color:"white",size:54})," "]}),e.jsxs(M,{children:[e.jsx(T,{children:"Email received!"}),e.jsxs(k,{children:["Check your inbox for the password ",e.jsx("br",{}),"reset instructions"]}),e.jsx(R,{children:"Didn’t received the email yet?"}),e.jsx(z,{onClick:t,children:"Click here to try again"})]})]});u.propTypes={onClose:p.func};const ee=()=>{const[t,d]=a.useState(!1),[m,n]=a.useState(!1),r=a.useCallback(()=>n(!1),[]),l=a.useCallback(()=>n(!0),[]),s=a.useCallback(()=>d(!1),[]),c=a.useCallback(()=>d(!0),[]);return e.jsxs(v,{children:[e.jsx(y,{widthLogo:"80",heightLogo:"80",title:"Login to Talk"}),e.jsx(F,{from:"loginPage",onOpen:l}),m&&e.jsx(x,{onClose:r,children:e.jsx(h,{onClose:r,onOpenRecieved:c})}),t&&e.jsx(x,{onClose:s,children:e.jsx(u,{onClose:s})})]})};export{ee as default};
