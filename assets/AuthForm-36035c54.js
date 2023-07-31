import{R as c,b as z,c as k,j as s,n as a,t as o,P as H,r as C,F as A,v as S,l as B,s as F,d as $,A as b,e as y,f as I,g as L,h as V}from"./index-e6ea6dd0.js";function E(e=c){const n=e===c?z:k(e);return function(){const{store:r}=n();return r}}const T=E();function D(e=c){const n=e===c?T:E(e);return function(){return n().dispatch}}const M=D(),Z=()=>s.jsx("svg",{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",style:{position:"absolute",top:"14px",left:"16px"},children:s.jsx("path",{d:"M3.75 3.75H13.5C14.0967 3.75 14.669 3.98705 15.091 4.40901C15.5129 4.83097 15.75 5.40326 15.75 6V12.75C15.75 13.3467 15.5129 13.919 15.091 14.341C14.669 14.7629 14.0967 15 13.5 15H3.75C3.15326 15 2.58097 14.7629 2.15901 14.341C1.73705 13.919 1.5 13.3467 1.5 12.75V6C1.5 5.40326 1.73705 4.83097 2.15901 4.40901C2.58097 3.98705 3.15326 3.75 3.75 3.75ZM3.75 4.5C3.375 4.5 3.045 4.6275 2.79 4.8525L8.625 8.625L14.46 4.8525C14.205 4.6275 13.875 4.5 13.5 4.5H3.75ZM8.625 9.5325L2.3475 5.46C2.2875 5.625 2.25 5.8125 2.25 6V12.75C2.25 13.1478 2.40804 13.5294 2.68934 13.8107C2.97064 14.092 3.35218 14.25 3.75 14.25H13.5C13.8978 14.25 14.2794 14.092 14.5607 13.8107C14.842 13.5294 15 13.1478 15 12.75V6C15 5.8125 14.9625 5.625 14.9025 5.46L8.625 9.5325Z",fill:"#909090"})}),O=a.div`
  width: ${o.breakpoints.mobile}px;
`,U=a.form`
  display: flex;
  flex-direction: column;
  justify-content: start;
`,h=a.div`
  color: ${o.colors.main};
  font-family: 'Segoe-Regular';
  font-size: ${o.fontSizes.m};
  margin-bottom: ${o.spacing[2]}px;
`,w=a.div`
  position: relative;
`,f=a.input`
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
`,g=a.p`
  color: ${o.colors.error};
  font-size: ${o.fontSizes.xxs};
  font-family: 'Segoe-Regular';
  margin-bottom: ${o.spacing[4]}px;
  align-self: flex-end;
`,P=a.button`
  position: absolute;
  top: 14px;
  right: 16px;
  color: ${o.colors.second};
`,W=({from:e})=>{const[n,l]=C.useState(!1),[r,R]=C.useState(!1),d=e==="loginPage",j=M();return s.jsxs(O,{children:[s.jsx(A,{validationSchema:d?S.loginSchema:S.signUpSchema,initialValues:{email:"",password:"",confirmPassword:""},onSubmit:(t,{setSubmitting:i})=>{j(d?B({email:t.email,password:t.password}):F({email:t.email,password:t.password})),i(!1)},children:({values:t,errors:i,touched:p,handleChange:x,handleBlur:m,handleSubmit:v})=>s.jsxs(U,{noValidate:!0,onSubmit:v,children:[s.jsx(h,{children:"Email"}),s.jsxs(w,{style:{position:"relative"},children:[s.jsx(Z,{}),s.jsx(f,{type:"email",name:"email",onChange:x,onBlur:m,value:t.email,placeholder:"Email address",id:"email"})]}),s.jsx(g,{children:i.email&&p.email&&i.email}),s.jsx(h,{children:"Password"}),s.jsxs(w,{children:[s.jsx($,{}),s.jsx(f,{type:n?"text":"password",name:"password",secureTextEntry:!n,onChange:x,onBlur:m,value:t.password,placeholder:"Password"}),s.jsx(P,{type:"button",onClick:()=>l(u=>!u),children:n?s.jsx(b,{size:18}):s.jsx(y,{size:18})})]}),s.jsx(g,{children:i.password&&p.password&&i.password}),!d&&s.jsxs(s.Fragment,{children:[s.jsx(h,{children:"Confirm Password"}),s.jsxs(w,{children:[s.jsx($,{}),s.jsx(f,{type:r?"text":"password",name:"confirmPassword",secureTextEntry:!r,onChange:x,onBlur:m,value:t.confirmPassword,placeholder:"Enter password again"}),s.jsx(P,{type:"button",onClick:()=>R(u=>!u),children:r?s.jsx(b,{size:18}):s.jsx(y,{size:18})})]}),s.jsx(g,{children:i.confirmPassword&&p.confirmPassword&&i.confirmPassword})]}),s.jsx(I,{from:e}),s.jsx(L,{from:e})]})}),s.jsx(V,{from:e})]})};W.propTypes={from:H.string};export{W as A};
