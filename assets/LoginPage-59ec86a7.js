import{n,t as o,P as p,u as S,r as a,j as e,s as C,a as $,C as y,L as b}from"./index-ed42f8cd.js";import{E as v,a as w,T as E,M,b as T,S as k,c as R,B as z,A as L}from"./SingingUpModal.styled-21c90bf2.js";import{C as x}from"./CreateModal-35dbff1b.js";import{F as B,a as F,A as P}from"./AuthBtn-533c411f.js";import{v as A}from"./index.esm-d811e160.js";import"./iconBase-46412502.js";import"./BtnTemplate-da70c79c.js";import"./ForgotPasswordBtn-872c523c.js";import"./index.esm-259cf9f8.js";const O=n.div`
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
`,h=({onClose:i,onOpenRecieved:d})=>{const m=S(),[r,l]=a.useState(!1);return e.jsxs(O,{children:[e.jsx(D,{children:"Forgot password"}),e.jsx(I,{children:"Enter your email address, and we'll send you a link to reset your password"}),e.jsx(B,{validationSchema:A.emailSchema,initialValues:{email:""},onSubmit:async({email:c},{setSubmitting:s})=>{l(!0);const t=await m(C({email:c}));l(!1),console.log("res",t),t.meta.requestStatus!=="rejected"&&(i(),d(),s(!1))},children:({values:c,errors:s,touched:t,handleChange:f,handleBlur:g,handleSubmit:j})=>e.jsxs(F,{noValidate:!0,onSubmit:j,children:[e.jsx(q,{children:"Email"}),e.jsxs(V,{style:{position:"relative"},children:[e.jsx(v,{}),e.jsx(W,{type:"text",name:"email",onChange:f,onBlur:g,value:c.email,placeholder:"Email address"})]}),e.jsx(G,{children:s.email&&t.email&&s.email}),e.jsx(P,{disabled:r,from:"emailModal"})]})}),r&&e.jsx($,{})]})};h.propTypes={onClose:p.func,onOpenRecieved:p.func};const u=({onClose:i})=>e.jsxs(e.Fragment,{children:[e.jsxs(w,{children:[" ",e.jsx(E,{color:"white",size:54})," "]}),e.jsxs(M,{children:[e.jsx(T,{children:"Email received!"}),e.jsxs(k,{children:["Check your inbox for the password ",e.jsx("br",{}),"reset instructions"]}),e.jsx(R,{children:"Didn’t received the email yet?"}),e.jsx(z,{onClick:i,children:"Click here to try again"})]})]});u.propTypes={onClose:p.func};const _=()=>{const[i,d]=a.useState(!1),[m,r]=a.useState(!1),l=a.useCallback(()=>r(!1),[]),c=a.useCallback(()=>r(!0),[]),s=a.useCallback(()=>d(!1),[]),t=a.useCallback(()=>d(!0),[]);return e.jsxs(y,{children:[e.jsx(b,{widthLogo:"80",heightLogo:"80",title:"Login to Talk"}),e.jsx(L,{from:"loginPage",onOpen:c}),m&&e.jsx(x,{onClose:l,children:e.jsx(h,{onClose:l,onOpenRecieved:t})}),i&&e.jsx(x,{onClose:s,children:e.jsx(u,{onClose:s})})]})};export{_ as default};
