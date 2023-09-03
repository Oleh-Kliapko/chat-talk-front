import{n as e,t as o,P as p,u as R,r as a,j as s,c as B,a as E,C as M}from"./index-38c3d544.js";import{F as O,A}from"./AuthBtn-3cbc4d92.js";import{B as D}from"./BtnTemplate-f817ece7.js";import"./ForgotPasswordBtn-1475d9b8.js";import{v as F,L as w,A as h,a as g}from"./index.esm-5af3a45a.js";import{M as I,T as L,a as N}from"./RecoverPasswordPage.styled-4eed67c6.js";import{C as V}from"./CreateModal-404833c5.js";import{M as W}from"./index.esm-973929bf.js";import"./iconBase-95557f32.js";const q=e.div`
  width: ${o.breakpoints.mobile}px;
`,G=e.form`
  display: flex;
  flex-direction: column;
  justify-content: start;
`,j=e.div`
  color: ${o.colors.main};
  font-family: 'Segoe-Regular';
  font-size: ${o.fontSizes.m};
  margin-bottom: ${o.spacing[2]}px;
`,b=e.div`
  position: relative;
`,S=e.input`
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
`,y=e.p`
  color: ${o.colors.error};
  font-size: ${o.fontSizes.xxs};
  font-family: 'Segoe-Regular';
  margin-bottom: ${o.spacing[4]}px;
  align-self: flex-end;
`,P=e.button`
  position: absolute;
  top: 14px;
  right: 16px;
  color: ${o.colors.second};
`,$=({onOpenRecieved:c})=>{const i=R(),[r,x]=a.useState(!1),[l,C]=a.useState(!1),[z,k]=a.useState("");return a.useEffect(()=>{const t=new URLSearchParams(window.location.search).get("token");k(t),console.log("token:",t)},[]),s.jsx(q,{children:s.jsx(O,{validationSchema:F.recoveryPasswordSchema,initialValues:{password:"",confirmPassword:""},onSubmit:async(n,{setSubmitting:t})=>{if(n.password!==n.confirmPassword)alert("passwords in the fields do not match"),t(!1);else{const d={new_password:n.password,token:z};(await i(B(d))).meta.requestStatus==="fulfilled"&&c(),t(!1)}},children:({values:n,errors:t,touched:d,handleChange:f,handleBlur:u,handleSubmit:T})=>s.jsxs(G,{noValidate:!0,onSubmit:T,children:[s.jsx(j,{children:"New Password"}),s.jsxs(b,{children:[s.jsx(w,{}),s.jsx(S,{type:r?"text":"password",name:"password",secureTextEntry:!r,onChange:f,onBlur:u,value:n.password,placeholder:"Password"}),s.jsx(P,{type:"button",onClick:()=>x(m=>!m),children:r?s.jsx(h,{size:18}):s.jsx(g,{size:18})})]}),s.jsx(y,{children:t.password&&d.password&&t.password}),s.jsx(j,{children:"New Password"}),s.jsxs(b,{children:[s.jsx(w,{}),s.jsx(S,{type:l?"text":"password",name:"confirmPassword",secureTextEntry:!l,onChange:f,onBlur:u,value:n.confirmPassword,placeholder:"Enter password again"}),s.jsx(P,{type:"button",onClick:()=>C(m=>!m),children:l?s.jsx(h,{size:18}):s.jsx(g,{size:18})})]}),s.jsx(y,{children:t.confirmPassword&&d.confirmPassword&&t.confirmPassword}),s.jsx(A,{from:"recovey-password"})]})})})};$.propTypes={onOpenRecieved:p.func};const K=e.div`
  width: 100%;
  position:relative;
  background-color:${o.colors.white};
  text-align:center;
`,U=e.div`
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
`,Y=e.h4`
margin-top:74px;
font-family:'Segoe-Bold';
font-weight:700;
font-size:${o.fontSizes.xl};
color:${o.colors.main};
`,_=e.p`
font-family:'Segoe-Regular';
font-weight:400;
font-size:${o.fontSizes.m};
color:${o.colors.main};
margin-top:8px;
margin-bottom:32px
`,v=({title:c,subtitle:i,onClose:r})=>s.jsxs(K,{children:[s.jsx(U,{children:s.jsx(W,{size:74,fill:"#fff"})}),s.jsx(Y,{children:c}),s.jsx(_,{children:i}),s.jsx(D,{onClick:r,text:"OK",textSize:o.fontSizes.m,color:o.colors.white,width:"90px",height:"40px",gradient:o.colors.mainBtnBgr,hoverGradient:o.colors.accentBtnBgr,border:o.border.main,borderRadius:o.radii.main,type:"button"})]});v.propTypes={title:p.string,subtitle:p.string,onClose:p.func};const rs=()=>{const[c,i]=a.useState(!1),r=E(),x=a.useCallback(()=>{i(!1),r("/login")},[r]),l=a.useCallback(()=>i(!0),[]);return s.jsx(M,{children:s.jsxs(I,{children:[s.jsx(L,{children:"Recover Password"}),s.jsx(N,{children:"Create a new strong password that you don’t use for other websites"}),s.jsx($,{onOpenRecieved:l}),c&&s.jsx(V,{children:s.jsx(v,{onClose:x,title:"Success!",subtitle:"Your password has been updated successfully"})})]})})};export{rs as default};
