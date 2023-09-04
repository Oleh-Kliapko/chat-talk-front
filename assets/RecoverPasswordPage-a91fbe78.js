import{n as e,t as o,P as x,u as E,r,j as s,c as M,a as O,b as L,C as A}from"./index-eb2e85e2.js";import{F as D,A as F}from"./AuthBtn-873ac027.js";import{B as I}from"./BtnTemplate-b2eb46b0.js";import"./ForgotPasswordBtn-52195b5f.js";import{v as N,L as h,A as g,a as j}from"./index.esm-977a1188.js";import{M as V,T as W,a as q}from"./RecoverPasswordPage.styled-0eda1bfc.js";import{C as G}from"./CreateModal-f7c9a71d.js";import{M as K}from"./index.esm-aacc44dd.js";import"./iconBase-771f669b.js";const U=e.div`
  width: ${o.breakpoints.mobile}px;
`,Y=e.form`
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
`,v=({onOpenRecieved:c})=>{const i=E(),[n,d]=r.useState(!1),[l,z]=r.useState(!1),[f,k]=r.useState(!1),[T,R]=r.useState("");return r.useEffect(()=>{const t=new URLSearchParams(window.location.search).get("token");R(t)},[]),s.jsxs(U,{children:[s.jsx(D,{validationSchema:N.recoveryPasswordSchema,initialValues:{password:"",confirmPassword:""},onSubmit:async(a,{setSubmitting:t})=>{if(d(!0),a.password!==a.confirmPassword)alert("passwords in the fields do not match"),t(!1);else{const p={new_password:a.password,token:T};(await i(M(p))).meta.requestStatus==="fulfilled"&&c(),d(!1),t(!1)}},children:({values:a,errors:t,touched:p,handleChange:m,handleBlur:w,handleSubmit:B})=>s.jsxs(Y,{noValidate:!0,onSubmit:B,children:[s.jsx(b,{children:"New Password"}),s.jsxs(S,{children:[s.jsx(h,{}),s.jsx(y,{type:l?"text":"password",name:"password",secureTextEntry:!l,onChange:m,onBlur:w,value:a.password,placeholder:"Password"}),s.jsx($,{type:"button",onClick:()=>z(u=>!u),children:l?s.jsx(g,{size:18}):s.jsx(j,{size:18})})]}),s.jsx(P,{children:t.password&&p.password&&t.password}),s.jsx(b,{children:"New Password"}),s.jsxs(S,{children:[s.jsx(h,{}),s.jsx(y,{type:f?"text":"password",name:"confirmPassword",secureTextEntry:!f,onChange:m,onBlur:w,value:a.confirmPassword,placeholder:"Enter password again"}),s.jsx($,{type:"button",onClick:()=>k(u=>!u),children:f?s.jsx(g,{size:18}):s.jsx(j,{size:18})})]}),s.jsx(P,{children:t.confirmPassword&&p.confirmPassword&&t.confirmPassword}),s.jsx(F,{disabled:n,from:"recovey-password"})]})}),n&&s.jsx(O,{})]})};v.propTypes={onOpenRecieved:x.func};const _=e.div`
  width: 100%;
  position:relative;
  background-color:${o.colors.white};
  text-align:center;
`,H=e.div`
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
`,J=e.h4`
margin-top:74px;
font-family:'Segoe-Bold';
font-weight:700;
font-size:${o.fontSizes.xl};
color:${o.colors.main};
`,Q=e.p`
font-family:'Segoe-Regular';
font-weight:400;
font-size:${o.fontSizes.m};
color:${o.colors.main};
margin-top:8px;
margin-bottom:32px
`,C=({title:c,subtitle:i,onClose:n})=>s.jsxs(_,{children:[s.jsx(H,{children:s.jsx(K,{size:74,fill:"#fff"})}),s.jsx(J,{children:c}),s.jsx(Q,{children:i}),s.jsx(I,{onClick:n,text:"OK",textSize:o.fontSizes.m,color:o.colors.white,width:"90px",height:"40px",gradient:o.colors.mainBtnBgr,hoverGradient:o.colors.accentBtnBgr,border:o.border.main,borderRadius:o.radii.main,type:"button"})]});C.propTypes={title:x.string,subtitle:x.string,onClose:x.func};const is=()=>{const[c,i]=r.useState(!1),n=L(),d=r.useCallback(()=>{i(!1),n("/login")},[n]),l=r.useCallback(()=>i(!0),[]);return s.jsx(A,{children:s.jsxs(V,{children:[s.jsx(W,{children:"Recover Password"}),s.jsx(q,{children:"Create a new strong password that you don’t use for other websites"}),s.jsx(v,{onOpenRecieved:l}),c&&s.jsx(G,{children:s.jsx(C,{onClose:d,title:"Success!",subtitle:"Your password has been updated successfully"})})]})})};export{is as default};
