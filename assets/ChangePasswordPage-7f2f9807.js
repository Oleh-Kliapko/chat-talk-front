import{n as r,t as e,r as c,u as I,b as A,j as s,o as T,Q as $,a as F,C as L}from"./index-78ef642e.js";import{F as R,a as B,A as H}from"./AuthBtn-ddedf0ec.js";import{v as N,L as m,A as f,a as w}from"./index.esm-ef4ebf95.js";import{H as O}from"./Header-5cef4a70.js";import"./BtnTemplate-18a0cce5.js";import"./iconBase-40cf83bf.js";import"./index.esm-599dda2d.js";const V=r.div`
  width: ${e.breakpoints.mobile}px;
  margin-top: 12px;
`;r.form`
  display: flex;
  flex-direction: column;
  justify-content: start;
`;const h=r.div`
  color: ${e.colors.main};
  font-family: 'Segoe-Regular';
  font-size: ${e.fontSizes.m};
  margin-bottom: ${e.spacing[2]}px;
`,j=r.div`
  position: relative;
`,g=r.input`
  width: 100%;
  color: ${e.colors.main};
  font-family: 'Segoe-Regular';
  font-size: ${e.fontSizes.m};
  padding: ${e.spacing[3]}px ${e.spacing[0]}px ${e.spacing[3]}px
    ${e.spacing[10]}px;
  border: ${e.border.main};
  border-radius: ${e.radii.main};

  &:focus,
  &:hover {
    outline: none;
    border: ${e.border.accent};
    box-shadow: 0 0 0 1px ${e.colors.accent};
  }
`,y=r.p`
  color: ${e.colors.error};
  font-size: ${e.fontSizes.xxs};
  font-family: 'Segoe-Regular';
  margin-bottom: ${e.spacing[4]}px;
  align-self: flex-end;
`,b=r.button`
  position: absolute;
  top: 14px;
  right: 16px;
  color: ${e.colors.second};
`;console.log();const W=()=>{const[S,l]=c.useState(!1),[d,C]=c.useState(!1),[p,P]=c.useState(!1),[x,z]=c.useState(!1),v=I(),E=A();return s.jsxs(V,{children:[s.jsx(R,{validationSchema:N.changePasswordSchema,initialValues:{current:"",new:"",confirm:""},onSubmit:async(t,{setSubmitting:o})=>{l(!0);const a={old_password:t.current,password:t.new},n=await v(T(a));if(n.payload.message==="Password has been changed successfully."){$.success(n.payload.message),E("/"),o(!1),l(!1);return}else{$.error(n.payload.message),o(!1),l(!1);return}},children:({values:t,errors:o,touched:a,handleChange:n,handleBlur:u,handleSubmit:k})=>s.jsxs(B,{noValidate:!0,onSubmit:k,children:[s.jsx(h,{children:"Current"}),s.jsxs(j,{children:[s.jsx(m,{}),s.jsx(g,{type:d?"text":"password",name:"current",secureTextEntry:!d,onChange:n,onBlur:u,value:t.current,placeholder:"Enter your current password"}),s.jsx(b,{type:"button",onClick:()=>C(i=>!i),children:d?s.jsx(f,{size:18}):s.jsx(w,{size:18})})]}),s.jsx(y,{children:o.current&&a.current&&o.current}),s.jsx(h,{children:"New"}),s.jsxs(j,{children:[s.jsx(m,{}),s.jsx(g,{type:p?"text":"password",name:"new",secureTextEntry:!p,onChange:n,onBlur:u,value:t.new,placeholder:"Enter your new password"}),s.jsx(b,{type:"button",onClick:()=>P(i=>!i),children:p?s.jsx(f,{size:18}):s.jsx(w,{size:18})})]}),s.jsx(y,{children:o.new&&a.new&&o.new}),s.jsx(h,{children:"Confirm"}),s.jsxs(j,{children:[s.jsx(m,{}),s.jsx(g,{type:x?"text":"password",name:"confirm",secureTextEntry:!x,onChange:n,onBlur:u,value:t.confirm,placeholder:"Confirm your new password"}),s.jsx(b,{type:"button",onClick:()=>z(i=>!i),children:x?s.jsx(f,{size:18}):s.jsx(w,{size:18})})]}),s.jsx(y,{children:o.confirm&&a.confirm&&o.confirm}),s.jsx(H,{disabled:S,from:"change-password"})]})}),S&&s.jsx(F,{})]})},M=()=>s.jsxs(L,{children:[s.jsx(O,{close:!0,subTitle:"Password"}),s.jsx(W,{})]});export{M as default};
