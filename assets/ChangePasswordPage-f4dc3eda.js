import{n as t,t as e,r as c,u as I,a as A,j as s,o as T,Q as b,C as F}from"./index-ea31e3ed.js";import{F as R,a as B,A as L}from"./AuthBtn-6496b481.js";import{v as H,L as m,A as f,a as w}from"./index.esm-29a8f7d1.js";import{H as N}from"./Header-7e87de24.js";import"./BtnTemplate-4c438ea5.js";import"./iconBase-5127143f.js";import"./index.esm-0e42680c.js";const O=t.div`
  width: ${e.breakpoints.mobile}px;
  margin-top: 12px;
`;t.form`
  display: flex;
  flex-direction: column;
  justify-content: start;
`;const h=t.div`
  color: ${e.colors.main};
  font-family: 'Segoe-Regular';
  font-size: ${e.fontSizes.m};
  margin-bottom: ${e.spacing[2]}px;
`,j=t.div`
  position: relative;
`,g=t.input`
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
`,y=t.p`
  color: ${e.colors.error};
  font-size: ${e.fontSizes.xxs};
  font-family: 'Segoe-Regular';
  margin-bottom: ${e.spacing[4]}px;
  align-self: flex-end;
`,S=t.button`
  position: absolute;
  top: 14px;
  right: 16px;
  color: ${e.colors.second};
`,V=()=>{const[$,l]=c.useState(!1),[d,C]=c.useState(!1),[p,P]=c.useState(!1),[x,z]=c.useState(!1),v=I(),E=A();return s.jsx(O,{children:s.jsx(R,{validationSchema:H.changePasswordSchema,initialValues:{current:"",new:"",confirm:""},onSubmit:async(n,{setSubmitting:o})=>{console.log(n),l(!0);const a={old_password:n.current,password:n.new},r=await v(T(a));if(r.payload.message==="Password has been changed successfully."){b.success(r.payload.message),E("/"),o(!1),l(!1);return}else{b.error(r.payload.message),o(!1),l(!1);return}},children:({values:n,errors:o,touched:a,handleChange:r,handleBlur:u,handleSubmit:k})=>s.jsxs(B,{noValidate:!0,onSubmit:k,children:[s.jsx(h,{children:"Current"}),s.jsxs(j,{children:[s.jsx(m,{}),s.jsx(g,{type:d?"text":"password",name:"current",secureTextEntry:!d,onChange:r,onBlur:u,value:n.current,placeholder:"Enter your current password"}),s.jsx(S,{type:"button",onClick:()=>C(i=>!i),children:d?s.jsx(f,{size:18}):s.jsx(w,{size:18})})]}),s.jsx(y,{children:o.current&&a.current&&o.current}),s.jsx(h,{children:"New"}),s.jsxs(j,{children:[s.jsx(m,{}),s.jsx(g,{type:p?"text":"password",name:"new",secureTextEntry:!p,onChange:r,onBlur:u,value:n.new,placeholder:"Enter your new password"}),s.jsx(S,{type:"button",onClick:()=>P(i=>!i),children:p?s.jsx(f,{size:18}):s.jsx(w,{size:18})})]}),s.jsx(y,{children:o.new&&a.new&&o.new}),s.jsx(h,{children:"Confirm"}),s.jsxs(j,{children:[s.jsx(m,{}),s.jsx(g,{type:x?"text":"password",name:"confirm",secureTextEntry:!x,onChange:r,onBlur:u,value:n.confirm,placeholder:"Confirm your new password"}),s.jsx(S,{type:"button",onClick:()=>z(i=>!i),children:x?s.jsx(f,{size:18}):s.jsx(w,{size:18})})]}),s.jsx(y,{children:o.confirm&&a.confirm&&o.confirm}),s.jsx(L,{disabled:$,from:"change-password"})]})})})},K=()=>s.jsxs(F,{children:[s.jsx(N,{close:!0,subTitle:"Password"}),s.jsx(V,{})]});export{K as default};
