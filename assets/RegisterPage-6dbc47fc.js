import{P as n,j as e,r as s,C as l,L as c}from"./index-78ef642e.js";import{a as p,T as x,M as h,b as m,S as d,c as j,B as u,A as g}from"./SingingUpModal.styled-ae0c6f37.js";import{C}from"./CreateModal-dc2748b4.js";import"./iconBase-40cf83bf.js";import"./AuthBtn-ddedf0ec.js";import"./BtnTemplate-18a0cce5.js";import"./ForgotPasswordBtn-c2edbc73.js";import"./index.esm-ef4ebf95.js";import"./index.esm-d236838d.js";const a=({onClose:o})=>e.jsxs(e.Fragment,{children:[e.jsxs(p,{children:[" ",e.jsx(x,{color:"white",size:54})," "]}),e.jsxs(h,{children:[e.jsx(m,{children:"Thank you for signing up!"}),e.jsxs(d,{children:["To complete your registration,",e.jsx("br",{})," please check your inbox"]}),e.jsx(j,{children:"Didn’t received the email yet?"}),e.jsx(u,{onClick:o,children:"Click here to try again"})]})]});a.propTypes={onClose:n.func};const L=()=>{const[o,t]=s.useState(!1),r=s.useCallback(()=>t(!1),[]),i=s.useCallback(()=>t(!0),[]);return e.jsxs(l,{children:[e.jsx(c,{widthLogo:"80",heightLogo:"80",title:"Sign Up to Talk"}),e.jsx(g,{onOpen:i}),o&&e.jsx(C,{onClose:r,children:e.jsx(a,{onClose:r})})]})};export{L as default};