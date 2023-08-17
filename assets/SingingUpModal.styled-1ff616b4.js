import{j as s,G as v,n as e,t as o,P as j,r as y,e as B,F as A,v as z,l as T,s as F,f as S,g as $,h as b,i as R,A as I,R as V}from"./index-81b92b97.js";const k=()=>s.jsx("svg",{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",style:{position:"absolute",top:"14px",left:"16px"},children:s.jsx("path",{d:"M3.75 3.75H13.5C14.0967 3.75 14.669 3.98705 15.091 4.40901C15.5129 4.83097 15.75 5.40326 15.75 6V12.75C15.75 13.3467 15.5129 13.919 15.091 14.341C14.669 14.7629 14.0967 15 13.5 15H3.75C3.15326 15 2.58097 14.7629 2.15901 14.341C1.73705 13.919 1.5 13.3467 1.5 12.75V6C1.5 5.40326 1.73705 4.83097 2.15901 4.40901C2.58097 3.98705 3.15326 3.75 3.75 3.75ZM3.75 4.5C3.375 4.5 3.045 4.6275 2.79 4.8525L8.625 8.625L14.46 4.8525C14.205 4.6275 13.875 4.5 13.5 4.5H3.75ZM8.625 9.5325L2.3475 5.46C2.2875 5.625 2.25 5.8125 2.25 6V12.75C2.25 13.1478 2.40804 13.5294 2.68934 13.8107C2.97064 14.092 3.35218 14.25 3.75 14.25H13.5C13.8978 14.25 14.2794 14.092 14.5607 13.8107C14.842 13.5294 15 13.1478 15 12.75V6C15 5.8125 14.9625 5.625 14.9025 5.46L8.625 9.5325Z",fill:"#909090"})});function G(a){return v({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{},child:[]},{tag:"path",attr:{d:"M0 2v13h17v-13h-17zM8.494 9.817l-6.896-6.817h13.82l-6.924 6.817zM5.755 8.516l-4.755 4.682v-9.383l4.755 4.701zM6.466 9.219l2.026 2.003 1.996-1.966 4.8 4.744h-13.677l4.855-4.781zM11.201 8.555l4.799-4.725v9.467l-4.799-4.742z"}}]})(a)}function L(a){return v({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M12 2A10.13 10.13 0 0 0 2 12a10 10 0 0 0 4 7.92V20h.1a9.7 9.7 0 0 0 11.8 0h.1v-.08A10 10 0 0 0 22 12 10.13 10.13 0 0 0 12 2zM8.07 18.93A3 3 0 0 1 11 16.57h2a3 3 0 0 1 2.93 2.36 7.75 7.75 0 0 1-7.86 0zm9.54-1.29A5 5 0 0 0 13 14.57h-2a5 5 0 0 0-4.61 3.07A8 8 0 0 1 4 12a8.1 8.1 0 0 1 8-8 8.1 8.1 0 0 1 8 8 8 8 0 0 1-2.39 5.64z"}},{tag:"path",attr:{d:"M12 6a3.91 3.91 0 0 0-4 4 3.91 3.91 0 0 0 4 4 3.91 3.91 0 0 0 4-4 3.91 3.91 0 0 0-4-4zm0 6a1.91 1.91 0 0 1-2-2 1.91 1.91 0 0 1 2-2 1.91 1.91 0 0 1 2 2 1.91 1.91 0 0 1-2 2z"}}]})(a)}const U=e.div`
  width: ${o.breakpoints.mobile}px;
`,H=e.form`
  display: flex;
  flex-direction: column;
  justify-content: start;
`,p=e.div`
  color: ${o.colors.main};
  font-family: 'Segoe-Regular';
  font-size: ${o.fontSizes.m};
  margin-bottom: ${o.spacing[2]}px;
`,d=e.div`
  position: relative;
`,m=e.input`
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
`,x=e.p`
  color: ${o.colors.error};
  font-size: ${o.fontSizes.xxs};
  font-family: 'Segoe-Regular';
  margin-bottom: ${o.spacing[4]}px;
  align-self: flex-end;
`,C=e.button`
  position: absolute;
  top: 14px;
  right: 16px;
  color: ${o.colors.second};
`,D=({from:a,onOpen:u})=>{const[g,P]=y.useState(!1),[h,E]=y.useState(!1),n=a==="loginPage",w=B();return s.jsxs(U,{children:[s.jsx(A,{validationSchema:n?z.loginSchema:z.signUpSchema,initialValues:{email:"",password:"",confirmPassword:"",username:""},onSubmit:(t,{setSubmitting:i})=>{w(n?T({email:t.email,password:t.password}):F({email:t.email,username:t.username,password:t.password})),!n&&u(),i(!1)},children:({values:t,errors:i,touched:r,handleChange:l,handleBlur:c,handleSubmit:M})=>s.jsxs(H,{noValidate:!0,onSubmit:M,children:[!n&&s.jsxs(s.Fragment,{children:[s.jsx(p,{children:"User Name"}),s.jsxs(d,{style:{position:"relative"},children:[s.jsx(L,{size:18,fill:"#909090",style:{position:"absolute",top:"14px",left:"16px"}}),s.jsx(m,{type:"text",name:"username",onChange:l,onBlur:c,value:t.username,placeholder:"Username",id:"username"})]}),s.jsx(x,{children:i.username&&r.username&&i.username})]}),s.jsx(p,{children:"Email"}),s.jsxs(d,{style:{position:"relative"},children:[s.jsx(k,{}),s.jsx(m,{type:"email",name:"email",onChange:l,onBlur:c,value:t.email,placeholder:"Email address",id:"email"})]}),s.jsx(x,{children:i.email&&r.email&&i.email}),s.jsx(p,{children:"Password"}),s.jsxs(d,{children:[s.jsx(S,{}),s.jsx(m,{type:g?"text":"password",name:"password",secureTextEntry:!g,onChange:l,onBlur:c,value:t.password,placeholder:"Password"}),s.jsx(C,{type:"button",onClick:()=>P(f=>!f),children:g?s.jsx($,{size:18}):s.jsx(b,{size:18})})]}),s.jsx(x,{children:i.password&&r.password&&i.password}),!n&&s.jsxs(s.Fragment,{children:[s.jsx(p,{children:"Confirm Password"}),s.jsxs(d,{children:[s.jsx(S,{}),s.jsx(m,{type:h?"text":"password",name:"confirmPassword",secureTextEntry:!h,onChange:l,onBlur:c,value:t.confirmPassword,placeholder:"Enter password again"}),s.jsx(C,{type:"button",onClick:()=>E(f=>!f),children:h?s.jsx($,{size:18}):s.jsx(b,{size:18})})]}),s.jsx(x,{children:i.confirmPassword&&r.confirmPassword&&i.confirmPassword})]}),s.jsx(R,{from:a,onOpen:u}),s.jsx(I,{from:a})]})}),s.jsx(V,{from:a})]})};D.propTypes={from:j.string,onOpen:j.func};const O=e.div`
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
background-color:${o.colors.accent};
position: absolute;
`,W=e.div`
 width: 390px;
 text-align:center;
 padding:40px 20px;
 `,N=e.h4`
margin-top:126px;
font-family:'Segoe-Bold';
font-weight:700;
font-size:${o.fontSizes.xl};
color:${o.colors.main};

`,q=e.p`
margin-top:8px;
font-family:'Segoe-Regular';
font-weight:400;
font-size:${o.fontSizes.m};
color:${o.colors.main};
`,J=e.p`
margin-top:112px;
font-family:'Segoe-Regular';
font-weight:400;
font-size:${o.fontSizes.m};
color:${o.colors.grey};`,K=e.p`
margin-top:8px;
margin-bottom:45px;
color:${o.colors.accent};
&:hover{
cursor:pointer;
} 
`;export{D as A,K as B,k as E,W as M,q as S,G as T,O as a,N as b,J as c};
