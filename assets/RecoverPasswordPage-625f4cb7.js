import{n as t,t as s,P as x,u as E,r as n,j as o,c as M,a as O,b as L,C as A}from"./index-093a8524.js";import{F as D,A as I}from"./AuthBtn-bd95ca61.js";import{B as N}from"./BtnTemplate-45b7eedc.js";import"./ForgotPasswordBtn-41572efc.js";import{v as V,L as h,A as g,a as j,F as b}from"./FormFieldError-430fb770.js";import{M as W,T as q,a as G}from"./RecoverPasswordPage.styled-aa6c393e.js";import{C as K}from"./CreateModal-8c4211a3.js";import{M as U}from"./index.esm-cf627a15.js";import"./iconBase-b6013b30.js";const Y=t.div`
  width: ${s.breakpoints.mobile}px;
`,_=t.form`
  display: flex;
  flex-direction: column;
  justify-content: start;
`,S=t.div`
  color: ${s.colors.main};
  font-family: 'Segoe-Regular';
  font-size: ${s.fontSizes.m};
  margin-bottom: ${s.spacing[2]}px;
`,$=t.div`
  position: relative;
`,P=t.input`
  width: 100%;
  color:${({error:e})=>e?s.colors.error:s.colors.main};
  font-family: 'Segoe-Regular';
  font-size: ${s.fontSizes.m};
  padding: ${s.spacing[3]}px ${s.spacing[0]}px ${s.spacing[3]}px
    ${s.spacing[10]}px;
  border: ${({error:e})=>e?s.border.error:s.border.main};
  border-radius: ${s.radii.main};
  background-color: ${({error:e})=>e?"#FFF2F4":"white"};
   &:focus,
  &:hover {
    outline: none;
   border: ${({error:e})=>e?s.border.error:s.border.accent};
   box-shadow: ${({error:e})=>e?`0 0 0 1px ${s.colors.error}`:`0 0 0 1px ${s.colors.accent}`};
  }
  &::placeholder {
  color:${({error:e})=>e?s.colors.error:s.colors.grey};
}
`,y=t.div`
  /* color: ${s.colors.error};
  font-size: ${s.fontSizes.xxs};
  font-family: 'Segoe-Regular'; */
  margin-bottom: ${s.spacing[4]}px;
  /* align-self: flex-end; */
`,v=t.button`
  position: absolute;
  top: 14px;
  right: 16px;
  color: ${s.colors.second};
`,C=({onOpenRecieved:e})=>{const c=E(),[a,p]=n.useState(!1),[d,k]=n.useState(!1),[f,B]=n.useState(!1),[F,T]=n.useState("");return n.useEffect(()=>{const r=new URLSearchParams(window.location.search).get("token");T(r)},[]),o.jsxs(Y,{children:[o.jsx(o.Fragment,{children:o.jsx(D,{validationSchema:V.recoveryPasswordSchema,initialValues:{password:"",confirmPassword:""},onSubmit:async(i,{setSubmitting:r})=>{if(p(!0),i.password!==i.confirmPassword)alert("passwords in the fields do not match"),r(!1);else{const l={new_password:i.password,token:F};(await c(M(l))).meta.requestStatus==="fulfilled"&&e(),p(!1),r(!1)}},children:({values:i,errors:r,touched:l,handleChange:m,handleBlur:w,handleSubmit:R})=>o.jsxs(_,{noValidate:!0,onSubmit:R,children:[o.jsx(S,{children:"New Password"}),o.jsxs($,{children:[o.jsx(h,{}),o.jsx(P,{type:d?"text":"password",name:"password",secureTextEntry:!d,onChange:m,onBlur:w,value:i.password,placeholder:"Password",error:!!(r.password&&l.password)}),o.jsx(v,{type:"button",onClick:()=>k(u=>!u),children:d?o.jsx(g,{size:18}):o.jsx(j,{size:18})})]}),o.jsx(y,{children:r.password&&l.password&&o.jsx(b,{title:r.password})}),o.jsx(S,{children:"New Password"}),o.jsxs($,{children:[o.jsx(h,{}),o.jsx(P,{type:f?"text":"password",name:"confirmPassword",secureTextEntry:!f,onChange:m,onBlur:w,value:i.confirmPassword,placeholder:"Enter password again",error:!!(r.confirmPassword&&l.confirmPassword)}),o.jsx(v,{type:"button",onClick:()=>B(u=>!u),children:f?o.jsx(g,{size:18}):o.jsx(j,{size:18})})]}),o.jsx(y,{children:r.confirmPassword&&l.confirmPassword&&o.jsx(b,{title:r.confirmPassword})}),o.jsx(I,{disabled:a,from:"recovey-password"})]})})}),a&&o.jsx(O,{})]})};C.propTypes={onOpenRecieved:x.func};const H=t.div`
  width: 100%;
  position:relative;
  background-color:${s.colors.white};
  text-align:center;
`,J=t.div`
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
`,Q=t.h4`
margin-top:74px;
font-family:'Segoe-Bold';
font-weight:700;
font-size:${s.fontSizes.xl};
color:${s.colors.main};
`,X=t.p`
font-family:'Segoe-Regular';
font-weight:400;
font-size:${s.fontSizes.m};
color:${s.colors.main};
margin-top:8px;
margin-bottom:32px
`,z=({title:e,subtitle:c,onClose:a})=>o.jsxs(H,{children:[o.jsx(J,{children:o.jsx(U,{size:74,fill:"#fff"})}),o.jsx(Q,{children:e}),o.jsx(X,{children:c}),o.jsx(N,{onClick:a,text:"OK",textSize:s.fontSizes.m,color:s.colors.white,width:"90px",height:"40px",gradient:s.colors.mainBtnBgr,hoverGradient:s.colors.accentBtnBgr,border:s.border.main,borderRadius:s.radii.main,type:"button"})]});z.propTypes={title:x.string,subtitle:x.string,onClose:x.func};const co=()=>{const[e,c]=n.useState(!1),a=L(),p=n.useCallback(()=>{c(!1),a("/login")},[a]),d=n.useCallback(()=>c(!0),[]);return o.jsx(A,{children:o.jsxs(W,{children:[o.jsx(q,{children:"Recover Password"}),o.jsx(G,{children:"Create a new strong password that you don’t use for other websites"}),o.jsx(C,{onOpenRecieved:d}),e&&o.jsx(K,{children:o.jsx(z,{onClose:p,title:"Success!",subtitle:"Your password has been updated successfully"})})]})})};export{co as default};
