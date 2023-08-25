import{n as a,t as o,P as x,j as e,F as g,v as f,b as j,c as y,A as S,r as n,C as $,L as C,d as m}from"./index-61668c27.js";import{E as b,a as v,T as w,M as E,b as T,S as M,c as k,B as R,A as z}from"./SingingUpModal.styled-ed34d1ca.js";const L=a.div`
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
`,h=({onClose:i,onOpenRecieved:r})=>e.jsxs(L,{children:[e.jsx(B,{children:"Forgot password"}),e.jsx(F,{children:"Enter your email address, and we'll send you a link to reset your password"}),e.jsx(g,{validationSchema:f.emailSchema,initialValues:{email:""},onSubmit:async({email:t},{setSubmitting:s})=>{await j({email:t}),i(),r(),s(!1)},children:({values:t,errors:s,touched:l,handleChange:d,handleBlur:c,handleSubmit:p})=>e.jsxs(y,{noValidate:!0,onSubmit:p,children:[e.jsx(O,{children:"Email"}),e.jsxs(P,{style:{position:"relative"},children:[e.jsx(b,{}),e.jsx(A,{type:"text",name:"email",onChange:d,onBlur:c,value:t.email,placeholder:"Email address"})]}),e.jsx(I,{children:s.email&&l.email&&s.email}),e.jsx(S,{from:"emailModal"})]})})]});h.propTypes={onClose:x.func,onOpenRecieved:x.func};const u=({onClose:i})=>e.jsxs(e.Fragment,{children:[e.jsxs(v,{children:[" ",e.jsx(w,{color:"white",size:54})," "]}),e.jsxs(E,{children:[e.jsx(T,{children:"Thank you for signing up!"}),e.jsxs(M,{children:["To complete your registration,",e.jsx("br",{})," please check your inbox"]}),e.jsx(k,{children:"Didn’t received the email yet?"}),e.jsx(R,{onClick:i,children:"Click here to try again"})]})]});u.propTypes={onClose:x.func};const D=()=>{const[i,r]=n.useState(!1),[t,s]=n.useState(!1),l=n.useCallback(()=>s(!1),[]),d=n.useCallback(()=>s(!0),[]),c=n.useCallback(()=>r(!1),[]),p=n.useCallback(()=>r(!0),[]);return e.jsxs($,{children:[e.jsx(C,{widthLogo:"80",heightLogo:"80",title:"Login to Talk"}),e.jsx(z,{from:"loginPage",onOpen:d}),t&&e.jsx(m,{onClose:l,children:e.jsx(h,{onClose:l,onOpenRecieved:p})}),i&&e.jsx(m,{onClose:c,children:e.jsx(u,{onClose:c})})]})};export{D as default};
