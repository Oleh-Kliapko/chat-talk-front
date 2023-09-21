import{n as i,t as o,P as p,u as $,r as a,j as e,s as S,a as b,C,L as y}from"./index-71bb3e9b.js";import{E as v,a as w,T as E,M as F,b as M,S as k,c as T,B as R,A as z}from"./SingingUpModal.styled-c444f816.js";import{C as x}from"./CreateModal-90aad6bc.js";import{F as L,a as B,A as P}from"./AuthBtn-95bb8df7.js";import{v as A,F as O}from"./FormFieldError-82b6bbde.js";import"./iconBase-8dc62924.js";import"./BtnTemplate-711465d7.js";import"./ForgotPasswordBtn-72c65de9.js";import"./index.esm-fbad105a.js";const D=i.div`
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
  color:${({error:s})=>s?o.colors.error:o.colors.main};
  font-family: 'Segoe-Regular';
  font-size: ${o.fontSizes.m};
  padding: ${o.spacing[3]}px ${o.spacing[0]}px ${o.spacing[3]}px
    ${o.spacing[10]}px;
  border: ${({error:s})=>s?o.border.error:o.border.main};
  border-radius: ${o.radii.main};
  background-color: ${({error:s})=>s?"#FFF2F4":"white"};
   &:focus,
  &:hover {
    outline: none;
   border: ${({error:s})=>s?o.border.error:o.border.accent};
   box-shadow: ${({error:s})=>s?`0 0 0 1px ${o.colors.error}`:`0 0 0 1px ${o.colors.accent}`};
  }
  &::placeholder {
  color:${({error:s})=>s?o.colors.error:o.colors.grey};
}
`,G=i.div`
  margin-top:32px;
`,H=i.div`
  /* color: ${o.colors.error};
  font-size: ${o.fontSizes.xxs};
  font-family: 'Segoe-Regular'; */
  margin-bottom: ${o.spacing[4]}px;
  /* align-self: flex-end; */
`,h=({onClose:s,onOpenRecieved:d})=>{const m=$(),[t,l]=a.useState(!1);return e.jsxs(D,{children:[e.jsx(I,{children:"Forgot password"}),e.jsx(V,{children:"Enter your email address, and we'll send you a link to reset your password"}),e.jsx(L,{validationSchema:A.emailSchema,initialValues:{email:""},onSubmit:async({email:c},{setSubmitting:r})=>{l(!0);const n=await m(S({email:c}));l(!1),n.meta.requestStatus!=="rejected"&&(s(),d(),r(!1))},children:({values:c,errors:r,touched:n,handleChange:f,handleBlur:g,handleSubmit:j})=>e.jsxs(B,{noValidate:!0,onSubmit:j,children:[e.jsx(G,{children:"Email"}),e.jsxs(W,{style:{position:"relative"},children:[e.jsx(v,{}),e.jsx(q,{type:"text",name:"email",onChange:f,onBlur:g,value:c.email,placeholder:"Email address",error:!!(r.email&&n.email)})]}),e.jsx(H,{children:r.email&&n.email&&e.jsx(O,{title:r.email})}),e.jsx(P,{disabled:t,from:"emailModal"})]})}),t&&e.jsx(b,{})]})};h.propTypes={onClose:p.func,onOpenRecieved:p.func};const u=({onClose:s})=>e.jsxs(e.Fragment,{children:[e.jsxs(w,{children:[" ",e.jsx(E,{color:"white",size:54})," "]}),e.jsxs(F,{children:[e.jsx(M,{children:"Email received!"}),e.jsxs(k,{children:["Check your inbox for the password ",e.jsx("br",{}),"reset instructions"]}),e.jsx(T,{children:"Didn’t received the email yet?"}),e.jsx(R,{onClick:s,children:"Click here to try again"})]})]});u.propTypes={onClose:p.func};const ee=()=>{const[s,d]=a.useState(!1),[m,t]=a.useState(!1),l=a.useCallback(()=>t(!1),[]),c=a.useCallback(()=>t(!0),[]),r=a.useCallback(()=>d(!1),[]),n=a.useCallback(()=>d(!0),[]);return e.jsxs(C,{children:[e.jsx(y,{widthLogo:"80",heightLogo:"80",title:"Login to Talk"}),e.jsx(z,{from:"loginPage",onOpen:c}),m&&e.jsx(x,{onClose:l,children:e.jsx(h,{onClose:l,onOpenRecieved:n})}),s&&e.jsx(x,{onClose:r,children:e.jsx(u,{onClose:r})})]})};export{ee as default};
