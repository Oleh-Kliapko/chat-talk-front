import{n as e,t as o,P as x,u as M,r,j as s,c as F,a as O,b as L,C as A}from"./index-ddfabd26.js";import{F as D,A as I}from"./AuthBtn-d03bd164.js";import{B as N}from"./BtnTemplate-19774da0.js";import"./ForgotPasswordBtn-89eb32ae.js";import{v as V,L as h,A as g,a as j,F as b}from"./FormFieldError-c0026006.js";import{M as W,T as q,a as G}from"./RecoverPasswordPage.styled-f9107d6b.js";import{C as K}from"./CreateModal-cee7a987.js";import{M as U}from"./index.esm-710da682.js";import"./iconBase-263d589c.js";const Y=e.div`
  width: ${o.breakpoints.mobile}px;
`,_=e.form`
  display: flex;
  flex-direction: column;
  justify-content: start;
`,S=e.div`
  color: ${o.colors.main};
  font-family: 'Segoe-Regular';
  font-size: ${o.fontSizes.m};
  margin-bottom: ${o.spacing[2]}px;
`,y=e.div`
  position: relative;
`,P=e.input`
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
`,$=e.div`
  /* color: ${o.colors.error};
  font-size: ${o.fontSizes.xxs};
  font-family: 'Segoe-Regular'; */
  margin-bottom: ${o.spacing[4]}px;
  /* align-self: flex-end; */
`,v=e.button`
  position: absolute;
  top: 14px;
  right: 16px;
  color: ${o.colors.second};
`,C=({onOpenRecieved:c})=>{const i=M(),[n,d]=r.useState(!1),[l,k]=r.useState(!1),[f,T]=r.useState(!1),[R,B]=r.useState("");return r.useEffect(()=>{const t=new URLSearchParams(window.location.search).get("token");B(t)},[]),s.jsxs(Y,{children:[s.jsx(s.Fragment,{children:s.jsx(D,{validationSchema:V.recoveryPasswordSchema,initialValues:{password:"",confirmPassword:""},onSubmit:async(a,{setSubmitting:t})=>{if(d(!0),a.password!==a.confirmPassword)alert("passwords in the fields do not match"),t(!1);else{const p={new_password:a.password,token:R};(await i(F(p))).meta.requestStatus==="fulfilled"&&c(),d(!1),t(!1)}},children:({values:a,errors:t,touched:p,handleChange:m,handleBlur:w,handleSubmit:E})=>s.jsxs(_,{noValidate:!0,onSubmit:E,children:[s.jsx(S,{children:"New Password"}),s.jsxs(y,{children:[s.jsx(h,{}),s.jsx(P,{type:l?"text":"password",name:"password",secureTextEntry:!l,onChange:m,onBlur:w,value:a.password,placeholder:"Password"}),s.jsx(v,{type:"button",onClick:()=>k(u=>!u),children:l?s.jsx(g,{size:18}):s.jsx(j,{size:18})})]}),s.jsx($,{children:t.password&&p.password&&s.jsx(b,{title:t.password})}),s.jsx(S,{children:"New Password"}),s.jsxs(y,{children:[s.jsx(h,{}),s.jsx(P,{type:f?"text":"password",name:"confirmPassword",secureTextEntry:!f,onChange:m,onBlur:w,value:a.confirmPassword,placeholder:"Enter password again"}),s.jsx(v,{type:"button",onClick:()=>T(u=>!u),children:f?s.jsx(g,{size:18}):s.jsx(j,{size:18})})]}),s.jsx($,{children:t.confirmPassword&&p.confirmPassword&&s.jsx(b,{title:t.confirmPassword})}),s.jsx(I,{disabled:n,from:"recovey-password"})]})})}),n&&s.jsx(O,{})]})};C.propTypes={onOpenRecieved:x.func};const H=e.div`
  width: 100%;
  position:relative;
  background-color:${o.colors.white};
  text-align:center;
`,J=e.div`
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
`,Q=e.h4`
margin-top:74px;
font-family:'Segoe-Bold';
font-weight:700;
font-size:${o.fontSizes.xl};
color:${o.colors.main};
`,X=e.p`
font-family:'Segoe-Regular';
font-weight:400;
font-size:${o.fontSizes.m};
color:${o.colors.main};
margin-top:8px;
margin-bottom:32px
`,z=({title:c,subtitle:i,onClose:n})=>s.jsxs(H,{children:[s.jsx(J,{children:s.jsx(U,{size:74,fill:"#fff"})}),s.jsx(Q,{children:c}),s.jsx(X,{children:i}),s.jsx(N,{onClick:n,text:"OK",textSize:o.fontSizes.m,color:o.colors.white,width:"90px",height:"40px",gradient:o.colors.mainBtnBgr,hoverGradient:o.colors.accentBtnBgr,border:o.border.main,borderRadius:o.radii.main,type:"button"})]});z.propTypes={title:x.string,subtitle:x.string,onClose:x.func};const cs=()=>{const[c,i]=r.useState(!1),n=L(),d=r.useCallback(()=>{i(!1),n("/login")},[n]),l=r.useCallback(()=>i(!0),[]);return s.jsx(A,{children:s.jsxs(W,{children:[s.jsx(q,{children:"Recover Password"}),s.jsx(G,{children:"Create a new strong password that you don’t use for other websites"}),s.jsx(C,{onOpenRecieved:l}),c&&s.jsx(K,{children:s.jsx(z,{onClose:d,title:"Success!",subtitle:"Your password has been updated successfully"})})]})})};export{cs as default};
