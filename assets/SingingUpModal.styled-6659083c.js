import{R as x,c as k,d as R,j as o,G as B,n as t,t as s,P as T,r as S,F,v as C,l as L,s as D,e as $,A as v,f as z,g as H,h as I,i as A,a as V}from"./index-c9d9438f.js";function P(e=x){const n=e===x?k:R(e);return function(){const{store:d}=n();return d}}const Z=P();function G(e=x){const n=e===x?Z:P(e);return function(){return n().dispatch}}const U=G(),W=()=>o.jsx("svg",{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",style:{position:"absolute",top:"14px",left:"16px"},children:o.jsx("path",{d:"M3.75 3.75H13.5C14.0967 3.75 14.669 3.98705 15.091 4.40901C15.5129 4.83097 15.75 5.40326 15.75 6V12.75C15.75 13.3467 15.5129 13.919 15.091 14.341C14.669 14.7629 14.0967 15 13.5 15H3.75C3.15326 15 2.58097 14.7629 2.15901 14.341C1.73705 13.919 1.5 13.3467 1.5 12.75V6C1.5 5.40326 1.73705 4.83097 2.15901 4.40901C2.58097 3.98705 3.15326 3.75 3.75 3.75ZM3.75 4.5C3.375 4.5 3.045 4.6275 2.79 4.8525L8.625 8.625L14.46 4.8525C14.205 4.6275 13.875 4.5 13.5 4.5H3.75ZM8.625 9.5325L2.3475 5.46C2.2875 5.625 2.25 5.8125 2.25 6V12.75C2.25 13.1478 2.40804 13.5294 2.68934 13.8107C2.97064 14.092 3.35218 14.25 3.75 14.25H13.5C13.8978 14.25 14.2794 14.092 14.5607 13.8107C14.842 13.5294 15 13.1478 15 12.75V6C15 5.8125 14.9625 5.625 14.9025 5.46L8.625 9.5325Z",fill:"#909090"})});function Y(e){return B({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{},child:[]},{tag:"path",attr:{d:"M0 2v13h17v-13h-17zM8.494 9.817l-6.896-6.817h13.82l-6.924 6.817zM5.755 8.516l-4.755 4.682v-9.383l4.755 4.701zM6.466 9.219l2.026 2.003 1.996-1.966 4.8 4.744h-13.677l4.855-4.781zM11.201 8.555l4.799-4.725v9.467l-4.799-4.742z"}}]})(e)}const q=t.div`
  width: ${s.breakpoints.mobile}px;
`,O=t.form`
  display: flex;
  flex-direction: column;
  justify-content: start;
`,h=t.div`
  color: ${s.colors.main};
  font-family: 'Segoe-Regular';
  font-size: ${s.fontSizes.m};
  margin-bottom: ${s.spacing[2]}px;
`,w=t.div`
  position: relative;
`,j=t.input`
  width: 100%;
  color: ${s.colors.main};
  font-family: 'Segoe-Regular';
  font-size: ${s.fontSizes.m};
  padding: ${s.spacing[3]}px ${s.spacing[0]}px ${s.spacing[3]}px
    ${s.spacing[10]}px;
  border: ${s.border.main};
  border-radius: ${s.radii.main};

  &:focus,
  &:hover {
    outline: none;
    border: ${s.border.accent};
    box-shadow: 0 0 0 1px ${s.colors.accent};
  }
`,b=t.p`
  color: ${s.colors.error};
  font-size: ${s.fontSizes.xxs};
  font-family: 'Segoe-Regular';
  margin-bottom: ${s.spacing[4]}px;
  align-self: flex-end;
`,E=t.button`
  position: absolute;
  top: 14px;
  right: 16px;
  color: ${s.colors.second};
`,J=({from:e,onOpen:n})=>{const[r,d]=S.useState(!1),[p,c]=S.useState(!1),l=e==="loginPage",y=U();return o.jsxs(q,{children:[o.jsx(F,{validationSchema:l?C.loginSchema:C.signUpSchema,initialValues:{email:"",password:"",confirmPassword:""},onSubmit:(i,{setSubmitting:a})=>{y(l?L({email:i.email,password:i.password}):D({email:i.email,password:i.password})),!l&&n(),a(!1)},children:({values:i,errors:a,touched:m,handleChange:f,handleBlur:g,handleSubmit:M})=>o.jsxs(O,{noValidate:!0,onSubmit:M,children:[o.jsx(h,{children:"Email"}),o.jsxs(w,{style:{position:"relative"},children:[o.jsx(W,{}),o.jsx(j,{type:"email",name:"email",onChange:f,onBlur:g,value:i.email,placeholder:"Email address",id:"email"})]}),o.jsx(b,{children:a.email&&m.email&&a.email}),o.jsx(h,{children:"Password"}),o.jsxs(w,{children:[o.jsx($,{}),o.jsx(j,{type:r?"text":"password",name:"password",secureTextEntry:!r,onChange:f,onBlur:g,value:i.password,placeholder:"Password"}),o.jsx(E,{type:"button",onClick:()=>d(u=>!u),children:r?o.jsx(v,{size:18}):o.jsx(z,{size:18})})]}),o.jsx(b,{children:a.password&&m.password&&a.password}),!l&&o.jsxs(o.Fragment,{children:[o.jsx(h,{children:"Confirm Password"}),o.jsxs(w,{children:[o.jsx($,{}),o.jsx(j,{type:p?"text":"password",name:"confirmPassword",secureTextEntry:!p,onChange:f,onBlur:g,value:i.confirmPassword,placeholder:"Enter password again"}),o.jsx(E,{type:"button",onClick:()=>c(u=>!u),children:p?o.jsx(v,{size:18}):o.jsx(z,{size:18})})]}),o.jsx(b,{children:a.confirmPassword&&m.confirmPassword&&a.confirmPassword})]}),o.jsx(H,{from:e,onOpen:n}),o.jsx(I,{from:e})]})}),o.jsx(A,{from:e})]})};J.propTypes={from:T.string};const K=t.div`
  position: fixed;
  z-index: 1001;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`,N=t.div`
  position: absolute;
  border: 1px solid rgba(220, 227, 229, 0.8);
  box-shadow: 0px 4px 16px rgba(17, 17, 17, 0.1);
  max-width: 95%;
  padding: 48px 18px 40px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: ${s.colors.white};
`,Q=document.querySelector("#modal"),_=({children:e,onClose:n,background:r,color:d})=>{S.useEffect(()=>{const c=l=>{l.code==="Escape"&&n()};return window.addEventListener("keydown",c),()=>{window.removeEventListener("keydown",c)}},[n]);const p=c=>{c.target===c.currentTarget&&n()};return V.createPortal(o.jsx(K,{onMouseDown:p,children:o.jsx(N,{background:r,children:e})}),Q)},oo=t.div`
top:0;
left:50%;
 transform: translate(-50%,-50%);
width:100px;
height:100px;
display:flex;
align-items:center;
justify-content:center;
border-radius:50%;
border: 3px solid #DFC3FD;
background-color:${s.colors.accent};
position: absolute;
`,so=t.div`
 width: 390px;
 text-align:center;
 padding:40px 20px;
 `,to=t.h4`
margin-top:126px;
font-family:'Segoe-Bold';
font-weight:700;
font-size:${s.fontSizes.xl};
color:${s.colors.main};

`,eo=t.p`
margin-top:8px;
font-family:'Segoe-Regular';
font-weight:400;
font-size:${s.fontSizes.m};
color:${s.colors.main};
`,no=t.p`
margin-top:112px;
font-family:'Segoe-Regular';
font-weight:400;
font-size:${s.fontSizes.m};
color:${s.colors.grey};`,io=t.p`
margin-top:8px;
margin-bottom:45px;
color:${s.colors.accent};
&:hover{
cursor:pointer;
} 
`;export{J as A,io as B,_ as C,W as E,so as M,eo as S,Y as T,oo as a,to as b,no as c};
