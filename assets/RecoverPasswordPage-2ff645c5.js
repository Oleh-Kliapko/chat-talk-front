import{n as e,t as o,P as f,u as E,r,j as s,c as M,a as O,C as A}from"./index-7c6d1f90.js";import{F as D,A as F}from"./AuthBtn-e87c71b2.js";import{B as I}from"./BtnTemplate-7cceecd0.js";import"./ForgotPasswordBtn-ce62ff20.js";import{v as L,L as h,A as g,a as j}from"./index.esm-029395a3.js";import{M as N,T as V,a as W}from"./RecoverPasswordPage.styled-c446d6ef.js";import{C as q}from"./CreateModal-b996bc33.js";import{M as G}from"./index.esm-842e8a5a.js";import"./iconBase-c9f07445.js";const K=e.div`
  width: ${o.breakpoints.mobile}px;
`,U=e.form`
  display: flex;
  flex-direction: column;
  justify-content: start;
`,b=e.div`
  color: ${o.colors.main};
  font-family: 'Segoe-Regular';
  font-size: ${o.fontSizes.m};
  margin-bottom: ${o.spacing[2]}px;
`,S=e.div`
  position: relative;
`,y=e.input`
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
`,P=e.p`
  color: ${o.colors.error};
  font-size: ${o.fontSizes.xxs};
  font-family: 'Segoe-Regular';
  margin-bottom: ${o.spacing[4]}px;
  align-self: flex-end;
`,$=e.button`
  position: absolute;
  top: 14px;
  right: 16px;
  color: ${o.colors.second};
`,v=({onOpenRecieved:c})=>{const a=E(),[i,d]=r.useState(!1),[l,z]=r.useState(!1),[x,k]=r.useState(!1),[T,R]=r.useState("");return r.useEffect(()=>{const t=new URLSearchParams(window.location.search).get("token");R(t),console.log("token:",t)},[]),s.jsx(K,{children:s.jsx(D,{validationSchema:L.recoveryPasswordSchema,initialValues:{password:"",confirmPassword:""},onSubmit:async(n,{setSubmitting:t})=>{if(d(!0),n.password!==n.confirmPassword)alert("passwords in the fields do not match"),t(!1);else{const p={new_password:n.password,token:T};(await a(M(p))).meta.requestStatus==="fulfilled"&&c(),d(!1),t(!1)}},children:({values:n,errors:t,touched:p,handleChange:m,handleBlur:w,handleSubmit:B})=>s.jsxs(U,{noValidate:!0,onSubmit:B,children:[s.jsx(b,{children:"New Password"}),s.jsxs(S,{children:[s.jsx(h,{}),s.jsx(y,{type:l?"text":"password",name:"password",secureTextEntry:!l,onChange:m,onBlur:w,value:n.password,placeholder:"Password"}),s.jsx($,{type:"button",onClick:()=>z(u=>!u),children:l?s.jsx(g,{size:18}):s.jsx(j,{size:18})})]}),s.jsx(P,{children:t.password&&p.password&&t.password}),s.jsx(b,{children:"New Password"}),s.jsxs(S,{children:[s.jsx(h,{}),s.jsx(y,{type:x?"text":"password",name:"confirmPassword",secureTextEntry:!x,onChange:m,onBlur:w,value:n.confirmPassword,placeholder:"Enter password again"}),s.jsx($,{type:"button",onClick:()=>k(u=>!u),children:x?s.jsx(g,{size:18}):s.jsx(j,{size:18})})]}),s.jsx(P,{children:t.confirmPassword&&p.confirmPassword&&t.confirmPassword}),s.jsx(F,{disabled:i,from:"recovey-password"})]})})})};v.propTypes={onOpenRecieved:f.func};const Y=e.div`
  width: 100%;
  position:relative;
  background-color:${o.colors.white};
  text-align:center;
`,_=e.div`
  width:  100px;
  height:  100px;
  position:absolute;
  background-color:#31D42E;
  border-radius:50%;
  border:3px solid #9DFD7B;
  display:flex;
  align-items:center;
  justify-content:center;
  top:-164px;
  left:calc(50% - 50px);;
`,H=e.h4`
margin-top:74px;
font-family:'Segoe-Bold';
font-weight:700;
font-size:${o.fontSizes.xl};
color:${o.colors.main};
`,J=e.p`
font-family:'Segoe-Regular';
font-weight:400;
font-size:${o.fontSizes.m};
color:${o.colors.main};
margin-top:8px;
margin-bottom:32px
`,C=({title:c,subtitle:a,onClose:i})=>s.jsxs(Y,{children:[s.jsx(_,{children:s.jsx(G,{size:74,fill:"#fff"})}),s.jsx(H,{children:c}),s.jsx(J,{children:a}),s.jsx(I,{onClick:i,text:"OK",textSize:o.fontSizes.m,color:o.colors.white,width:"90px",height:"40px",gradient:o.colors.mainBtnBgr,hoverGradient:o.colors.accentBtnBgr,border:o.border.main,borderRadius:o.radii.main,type:"button"})]});C.propTypes={title:f.string,subtitle:f.string,onClose:f.func};const as=()=>{const[c,a]=r.useState(!1),i=O(),d=r.useCallback(()=>{a(!1),i("/login")},[i]),l=r.useCallback(()=>a(!0),[]);return s.jsx(A,{children:s.jsxs(N,{children:[s.jsx(V,{children:"Recover Password"}),s.jsx(W,{children:"Create a new strong password that you don’t use for other websites"}),s.jsx(v,{onOpenRecieved:l}),c&&s.jsx(q,{children:s.jsx(C,{onClose:d,title:"Success!",subtitle:"Your password has been updated successfully"})})]})})};export{as as default};
