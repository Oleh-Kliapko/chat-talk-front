import{P as n,j as e,r as s,C as l,L as c}from"./index-7c6d1f90.js";import{a as p,T as x,M as h,b as m,S as d,c as j,B as u,A as g}from"./SingingUpModal.styled-b399e183.js";import{C}from"./CreateModal-b996bc33.js";import"./iconBase-c9f07445.js";import"./AuthBtn-e87c71b2.js";import"./BtnTemplate-7cceecd0.js";import"./ForgotPasswordBtn-ce62ff20.js";import"./index.esm-029395a3.js";import"./index.esm-ca303058.js";const a=({onClose:o})=>e.jsxs(e.Fragment,{children:[e.jsxs(p,{children:[" ",e.jsx(x,{color:"white",size:54})," "]}),e.jsxs(h,{children:[e.jsx(m,{children:"Thank you for signing up!"}),e.jsxs(d,{children:["To complete your registration,",e.jsx("br",{})," please check your inbox"]}),e.jsx(j,{children:"Didn’t received the email yet?"}),e.jsx(u,{onClick:o,children:"Click here to try again"})]})]});a.propTypes={onClose:n.func};const L=()=>{const[o,t]=s.useState(!1),r=s.useCallback(()=>t(!1),[]),i=s.useCallback(()=>t(!0),[]);return e.jsxs(l,{children:[e.jsx(c,{widthLogo:"80",heightLogo:"80",title:"Sign Up to Talk"}),e.jsx(g,{onOpen:i}),o&&e.jsx(C,{onClose:r,children:e.jsx(a,{onClose:r})})]})};export{L as default};