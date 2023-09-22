import{n as a,t as e,r as l,u as B,b as I,j as s,o as A,Q as C,a as T,C as L}from"./index-0781ce37.js";import{F as R,a as H,A as N}from"./AuthBtn-29437c3c.js";import{v as O,L as f,A as w,a as h,F as j}from"./FormFieldError-806fc580.js";import{H as V}from"./Header-773a91ae.js";import"./BtnTemplate-e3701a3f.js";import"./iconBase-5f117446.js";import"./index.esm-4031840e.js";const W=a.div`
  width: ${e.breakpoints.mobile}px;
  margin-top: 12px;
`;a.form`
  display: flex;
  flex-direction: column;
  justify-content: start;
`;const g=a.div`
  color: ${e.colors.main};
  font-family: 'Segoe-Regular';
  font-size: ${e.fontSizes.m};
  margin-bottom: ${e.spacing[2]}px;
`,y=a.div`
  position: relative;
`,b=a.input`
  width: 100%;
  color:${({error:o})=>o?e.colors.error:e.colors.main};
  font-family: 'Segoe-Regular';
  font-size: ${e.fontSizes.m};
  padding: ${e.spacing[3]}px ${e.spacing[0]}px ${e.spacing[3]}px
    ${e.spacing[10]}px;
  border: ${({error:o})=>o?e.border.error:e.border.main};
  border-radius: ${e.radii.main};
  background-color: ${({error:o})=>o?"#FFF2F4":"white"};
   &:focus,
  &:hover {
    outline: none;
   border: ${({error:o})=>o?e.border.error:e.border.accent};
   box-shadow: ${({error:o})=>o?`0 0 0 1px ${e.colors.error}`:`0 0 0 1px ${e.colors.accent}`};
  }
  &::placeholder {
  color:${({error:o})=>o?e.colors.error:e.colors.grey};
}
`,$=a.div`
  /* color: ${e.colors.error};
  font-size: ${e.fontSizes.xxs};
  font-family: 'Segoe-Regular'; */
  margin-bottom: ${e.spacing[4]}px;
  /* align-self: flex-end; */
`,S=a.button`
  position: absolute;
  top: 14px;
  right: 16px;
  color: ${e.colors.second};
`;console.log();const D=()=>{const[o,d]=l.useState(!1),[p,P]=l.useState(!1),[x,v]=l.useState(!1),[u,z]=l.useState(!1),E=B(),F=I();return s.jsxs(W,{children:[s.jsx(R,{validationSchema:O.changePasswordSchema,initialValues:{current:"",new:"",confirm:""},onSubmit:async(i,{setSubmitting:r})=>{d(!0);const n={old_password:i.current,password:i.new},t=await E(A(n));if(t.payload.message==="Password has been changed successfully."){C.success(t.payload.message),F("/"),r(!1),d(!1);return}else{C.error(t.payload.message),r(!1),d(!1);return}},children:({values:i,errors:r,touched:n,handleChange:t,handleBlur:m,handleSubmit:k})=>s.jsxs(H,{noValidate:!0,onSubmit:k,children:[s.jsx(g,{children:"Current"}),s.jsxs(y,{children:[s.jsx(f,{}),s.jsx(b,{type:p?"text":"password",name:"current",secureTextEntry:!p,onChange:t,onBlur:m,value:i.current,placeholder:"Enter your current password",error:!!(r.current&&n.current)}),s.jsx(S,{type:"button",onClick:()=>P(c=>!c),children:p?s.jsx(w,{size:18}):s.jsx(h,{size:18})})]}),s.jsx($,{children:r.current&&n.current&&s.jsx(j,{title:r.current})}),s.jsx(g,{children:"New"}),s.jsxs(y,{children:[s.jsx(f,{}),s.jsx(b,{type:x?"text":"password",name:"new",secureTextEntry:!x,onChange:t,onBlur:m,value:i.new,placeholder:"Enter your new password",error:!!(r.new&&n.new)}),s.jsx(S,{type:"button",onClick:()=>v(c=>!c),children:x?s.jsx(w,{size:18}):s.jsx(h,{size:18})})]}),s.jsx($,{children:r.new&&n.new&&s.jsx(j,{title:r.new})}),s.jsx(g,{children:"Confirm"}),s.jsxs(y,{children:[s.jsx(f,{}),s.jsx(b,{type:u?"text":"password",name:"confirm",secureTextEntry:!u,onChange:t,onBlur:m,value:i.confirm,placeholder:"Confirm your new password",error:!!(r.confirm&&n.confirm)}),s.jsx(S,{type:"button",onClick:()=>z(c=>!c),children:u?s.jsx(w,{size:18}):s.jsx(h,{size:18})})]}),s.jsx($,{children:r.confirm&&n.confirm&&s.jsx(j,{title:r.confirm})}),s.jsx(N,{disabled:o,from:"change-password"})]})}),o&&s.jsx(T,{})]})},U=()=>s.jsxs(L,{children:[s.jsx(V,{close:!0,subTitle:"Password"}),s.jsx(D,{})]});export{U as default};
