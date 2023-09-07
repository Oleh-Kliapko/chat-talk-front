import{n,t as e,r as c,u as I,b as A,j as s,o as T,Q as C,a as L,C as R}from"./index-ddfabd26.js";import{F as B,a as H,A as N}from"./AuthBtn-d03bd164.js";import{v as O,L as m,A as f,a as w,F as h}from"./FormFieldError-c0026006.js";import{H as V}from"./Header-5b08f35d.js";import"./BtnTemplate-19774da0.js";import"./iconBase-263d589c.js";import"./index.esm-a734c1fa.js";const W=n.div`
  width: ${e.breakpoints.mobile}px;
  margin-top: 12px;
`;n.form`
  display: flex;
  flex-direction: column;
  justify-content: start;
`;const j=n.div`
  color: ${e.colors.main};
  font-family: 'Segoe-Regular';
  font-size: ${e.fontSizes.m};
  margin-bottom: ${e.spacing[2]}px;
`,g=n.div`
  position: relative;
`,y=n.input`
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
`,b=n.div`
  /* color: ${e.colors.error};
  font-size: ${e.fontSizes.xxs};
  font-family: 'Segoe-Regular'; */
  margin-bottom: ${e.spacing[4]}px;
  /* align-self: flex-end; */
`,S=n.button`
  position: absolute;
  top: 14px;
  right: 16px;
  color: ${e.colors.second};
`;console.log();const D=()=>{const[$,l]=c.useState(!1),[d,P]=c.useState(!1),[p,v]=c.useState(!1),[x,z]=c.useState(!1),E=I(),F=A();return s.jsxs(W,{children:[s.jsx(B,{validationSchema:O.changePasswordSchema,initialValues:{current:"",new:"",confirm:""},onSubmit:async(t,{setSubmitting:o})=>{l(!0);const a={old_password:t.current,password:t.new},r=await E(T(a));if(r.payload.message==="Password has been changed successfully."){C.success(r.payload.message),F("/"),o(!1),l(!1);return}else{C.error(r.payload.message),o(!1),l(!1);return}},children:({values:t,errors:o,touched:a,handleChange:r,handleBlur:u,handleSubmit:k})=>s.jsxs(H,{noValidate:!0,onSubmit:k,children:[s.jsx(j,{children:"Current"}),s.jsxs(g,{children:[s.jsx(m,{}),s.jsx(y,{type:d?"text":"password",name:"current",secureTextEntry:!d,onChange:r,onBlur:u,value:t.current,placeholder:"Enter your current password"}),s.jsx(S,{type:"button",onClick:()=>P(i=>!i),children:d?s.jsx(f,{size:18}):s.jsx(w,{size:18})})]}),s.jsx(b,{children:o.current&&a.current&&s.jsx(h,{title:o.current})}),s.jsx(j,{children:"New"}),s.jsxs(g,{children:[s.jsx(m,{}),s.jsx(y,{type:p?"text":"password",name:"new",secureTextEntry:!p,onChange:r,onBlur:u,value:t.new,placeholder:"Enter your new password"}),s.jsx(S,{type:"button",onClick:()=>v(i=>!i),children:p?s.jsx(f,{size:18}):s.jsx(w,{size:18})})]}),s.jsx(b,{children:o.new&&a.new&&s.jsx(h,{title:o.new})}),s.jsx(j,{children:"Confirm"}),s.jsxs(g,{children:[s.jsx(m,{}),s.jsx(y,{type:x?"text":"password",name:"confirm",secureTextEntry:!x,onChange:r,onBlur:u,value:t.confirm,placeholder:"Confirm your new password"}),s.jsx(S,{type:"button",onClick:()=>z(i=>!i),children:x?s.jsx(f,{size:18}):s.jsx(w,{size:18})})]}),s.jsx(b,{children:o.confirm&&a.confirm&&s.jsx(h,{title:o.confirm})}),s.jsx(N,{disabled:$,from:"change-password"})]})}),$&&s.jsx(L,{})]})},U=()=>s.jsxs(R,{children:[s.jsx(V,{close:!0,subTitle:"Password"}),s.jsx(D,{})]});export{U as default};
