import{n as t,t as e,r as x,u as E,a as k,j as s,o as I,Q as S,C as A}from"./index-8730f2de.js";import{F as T,a as F,A as R}from"./AuthBtn-ed8786d3.js";import{v as B,L as u,A as m,a as w}from"./index.esm-5da7bbef.js";import{H}from"./Header-0de4a944.js";import"./BtnTemplate-44620a0a.js";import"./iconBase-117ae77e.js";import"./index.esm-8c9e0b93.js";const L=t.div`
  width: ${e.breakpoints.mobile}px;
  margin-top: 12px;
`;t.form`
  display: flex;
  flex-direction: column;
  justify-content: start;
`;const f=t.div`
  color: ${e.colors.main};
  font-family: 'Segoe-Regular';
  font-size: ${e.fontSizes.m};
  margin-bottom: ${e.spacing[2]}px;
`,h=t.div`
  position: relative;
`,j=t.input`
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
`,g=t.p`
  color: ${e.colors.error};
  font-size: ${e.fontSizes.xxs};
  font-family: 'Segoe-Regular';
  margin-bottom: ${e.spacing[4]}px;
  align-self: flex-end;
`,y=t.button`
  position: absolute;
  top: 14px;
  right: 16px;
  color: ${e.colors.second};
`,N=()=>{const[c,b]=x.useState(!1),[l,$]=x.useState(!1),[d,C]=x.useState(!1),P=E(),z=k();return s.jsx(L,{children:s.jsx(T,{validationSchema:B.changePasswordSchema,initialValues:{current:"",new:"",confirm:""},onSubmit:async(n,{setSubmitting:o})=>{console.log(n);const a={old_password:n.current,password:n.new},r=await P(I(a));if(r.payload.message==="Password has been changed successfully."){S.success(r.payload.message),z("/"),o(!1);return}else{S.error(r.payload.message),o(!1);return}},children:({values:n,errors:o,touched:a,handleChange:r,handleBlur:p,handleSubmit:v})=>s.jsxs(F,{noValidate:!0,onSubmit:v,children:[s.jsx(f,{children:"Current"}),s.jsxs(h,{children:[s.jsx(u,{}),s.jsx(j,{type:c?"text":"password",name:"current",secureTextEntry:!c,onChange:r,onBlur:p,value:n.current,placeholder:"Enter your current password"}),s.jsx(y,{type:"button",onClick:()=>b(i=>!i),children:c?s.jsx(m,{size:18}):s.jsx(w,{size:18})})]}),s.jsx(g,{children:o.current&&a.current&&o.current}),s.jsx(f,{children:"New"}),s.jsxs(h,{children:[s.jsx(u,{}),s.jsx(j,{type:l?"text":"password",name:"new",secureTextEntry:!l,onChange:r,onBlur:p,value:n.new,placeholder:"Enter your new password"}),s.jsx(y,{type:"button",onClick:()=>$(i=>!i),children:l?s.jsx(m,{size:18}):s.jsx(w,{size:18})})]}),s.jsx(g,{children:o.new&&a.new&&o.new}),s.jsx(f,{children:"Confirm"}),s.jsxs(h,{children:[s.jsx(u,{}),s.jsx(j,{type:d?"text":"password",name:"confirm",secureTextEntry:!d,onChange:r,onBlur:p,value:n.confirm,placeholder:"Confirm your new password"}),s.jsx(y,{type:"button",onClick:()=>C(i=>!i),children:d?s.jsx(m,{size:18}):s.jsx(w,{size:18})})]}),s.jsx(g,{children:o.confirm&&a.confirm&&o.confirm}),s.jsx(R,{from:"change-password"})]})})})},G=()=>s.jsxs(A,{children:[s.jsx(H,{close:!0,subTitle:"Password"}),s.jsx(N,{})]});export{G as default};
