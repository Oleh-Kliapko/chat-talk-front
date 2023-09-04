import{n,t as o,P as p,u as S,r as a,j as e,s as C,a as $,C as y,L as b}from"./index-eb2e85e2.js";import{E as v,a as w,T as E,M,b as T,S as k,c as R,B as z,A as L}from"./SingingUpModal.styled-22ca665a.js";import{C as x}from"./CreateModal-f7c9a71d.js";import{F as B,a as F,A as P}from"./AuthBtn-873ac027.js";import{v as A}from"./index.esm-977a1188.js";import"./iconBase-771f669b.js";import"./BtnTemplate-b2eb46b0.js";import"./ForgotPasswordBtn-52195b5f.js";import"./index.esm-cc2f8dca.js";const O=n.div`
 min-width: 390px;
 padding:40px 20px;
 `,D=n.h4`
font-family:'Segoe-Bold';
font-weight:700;
font-size:${o.fontSizes.xl};
color:${o.colors.main};
`,I=n.p`
margin-top:8px;
font-family:'Segoe-Regular';
font-weight:400;
font-size:${o.fontSizes.m};
color:${o.colors.main};
`,V=n.div`
margin-top:8px;
  position: relative;
`,W=n.input`
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
`,q=n.div`
  margin-top:32px;
`,G=n.p`
  color: ${o.colors.error};
  font-size: ${o.fontSizes.xxs};
  font-family: 'Segoe-Regular';
  margin-bottom: ${o.spacing[4]}px;
  align-self: flex-end;
`,h=({onClose:t,onOpenRecieved:d})=>{const m=S(),[i,r]=a.useState(!1);return e.jsxs(O,{children:[e.jsx(D,{children:"Forgot password"}),e.jsx(I,{children:"Enter your email address, and we'll send you a link to reset your password"}),e.jsx(B,{validationSchema:A.emailSchema,initialValues:{email:""},onSubmit:async({email:l},{setSubmitting:s})=>{r(!0);const c=await m(C({email:l}));r(!1),c.meta.requestStatus!=="rejected"&&(t(),d(),s(!1))},children:({values:l,errors:s,touched:c,handleChange:f,handleBlur:g,handleSubmit:j})=>e.jsxs(F,{noValidate:!0,onSubmit:j,children:[e.jsx(q,{children:"Email"}),e.jsxs(V,{style:{position:"relative"},children:[e.jsx(v,{}),e.jsx(W,{type:"text",name:"email",onChange:f,onBlur:g,value:l.email,placeholder:"Email address"})]}),e.jsx(G,{children:s.email&&c.email&&s.email}),e.jsx(P,{disabled:i,from:"emailModal"})]})}),i&&e.jsx($,{})]})};h.propTypes={onClose:p.func,onOpenRecieved:p.func};const u=({onClose:t})=>e.jsxs(e.Fragment,{children:[e.jsxs(w,{children:[" ",e.jsx(E,{color:"white",size:54})," "]}),e.jsxs(M,{children:[e.jsx(T,{children:"Email received!"}),e.jsxs(k,{children:["Check your inbox for the password ",e.jsx("br",{}),"reset instructions"]}),e.jsx(R,{children:"Didn’t received the email yet?"}),e.jsx(z,{onClick:t,children:"Click here to try again"})]})]});u.propTypes={onClose:p.func};const _=()=>{const[t,d]=a.useState(!1),[m,i]=a.useState(!1),r=a.useCallback(()=>i(!1),[]),l=a.useCallback(()=>i(!0),[]),s=a.useCallback(()=>d(!1),[]),c=a.useCallback(()=>d(!0),[]);return e.jsxs(y,{children:[e.jsx(b,{widthLogo:"80",heightLogo:"80",title:"Login to Talk"}),e.jsx(L,{from:"loginPage",onOpen:l}),m&&e.jsx(x,{onClose:r,children:e.jsx(h,{onClose:r,onOpenRecieved:c})}),t&&e.jsx(x,{onClose:s,children:e.jsx(u,{onClose:s})})]})};export{_ as default};
