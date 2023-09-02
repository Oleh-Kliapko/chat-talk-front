import{n as a,t as o,P as p,j as e,s as u,r as n,C as g,L as j}from"./index-4d3dbc70.js";import{E as C,a as S,T as $,M as y,b as v,S as w,c as b,B as E,A as M}from"./SingingUpModal.styled-aa035464.js";import{C as x}from"./CreateModal-daf138f0.js";import{F as T,a as k,A as R}from"./AuthBtn-167cc2e1.js";import{v as z}from"./index.esm-d7391818.js";import"./iconBase-7c86fed3.js";import"./BtnTemplate-44cf9823.js";import"./ForgotPasswordBtn-48b6ec8c.js";import"./index.esm-10930b13.js";const L=a.div`
 min-width: 390px;
 padding:40px 20px;
 `,B=a.h4`
font-family:'Segoe-Bold';
font-weight:700;
font-size:${o.fontSizes.xl};
color:${o.colors.main};
`,F=a.p`
margin-top:8px;
font-family:'Segoe-Regular';
font-weight:400;
font-size:${o.fontSizes.m};
color:${o.colors.main};
`,P=a.div`
margin-top:8px;
  position: relative;
`,A=a.input`
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
`,O=a.div`
  margin-top:32px;
`,I=a.p`
  color: ${o.colors.error};
  font-size: ${o.fontSizes.xxs};
  font-family: 'Segoe-Regular';
  margin-bottom: ${o.spacing[4]}px;
  align-self: flex-end;
`,h=({onClose:i,onOpenRecieved:r})=>e.jsxs(L,{children:[e.jsx(B,{children:"Forgot password"}),e.jsx(F,{children:"Enter your email address, and we'll send you a link to reset your password"}),e.jsx(T,{validationSchema:z.emailSchema,initialValues:{email:""},onSubmit:async({email:t},{setSubmitting:s})=>{await u({email:t}),i(),r(),s(!1)},children:({values:t,errors:s,touched:l,handleChange:d,handleBlur:c,handleSubmit:m})=>e.jsxs(k,{noValidate:!0,onSubmit:m,children:[e.jsx(O,{children:"Email"}),e.jsxs(P,{style:{position:"relative"},children:[e.jsx(C,{}),e.jsx(A,{type:"text",name:"email",onChange:d,onBlur:c,value:t.email,placeholder:"Email address"})]}),e.jsx(I,{children:s.email&&l.email&&s.email}),e.jsx(R,{from:"emailModal"})]})})]});h.propTypes={onClose:p.func,onOpenRecieved:p.func};const f=({onClose:i})=>e.jsxs(e.Fragment,{children:[e.jsxs(S,{children:[" ",e.jsx($,{color:"white",size:54})," "]}),e.jsxs(y,{children:[e.jsx(v,{children:"Email received!"}),e.jsxs(w,{children:["Check your inbox for the password ",e.jsx("br",{}),"reset instructions"]}),e.jsx(b,{children:"Didn’t received the email yet?"}),e.jsx(E,{onClick:i,children:"Click here to try again"})]})]});f.propTypes={onClose:p.func};const Q=()=>{const[i,r]=n.useState(!1),[t,s]=n.useState(!1),l=n.useCallback(()=>s(!1),[]),d=n.useCallback(()=>s(!0),[]),c=n.useCallback(()=>r(!1),[]),m=n.useCallback(()=>r(!0),[]);return e.jsxs(g,{children:[e.jsx(j,{widthLogo:"80",heightLogo:"80",title:"Login to Talk"}),e.jsx(M,{from:"loginPage",onOpen:d}),t&&e.jsx(x,{onClose:l,children:e.jsx(h,{onClose:l,onOpenRecieved:m})}),i&&e.jsx(x,{onClose:c,children:e.jsx(f,{onClose:c})})]})};export{Q as default};
