import{G as L}from"./iconBase-46412502.js";import{j as s,n as a,t as o,P as b,r as n,u as k,v as I,w as R,a as A}from"./index-ed42f8cd.js";import{F as V,A as U}from"./AuthBtn-533c411f.js";import"./BtnTemplate-da70c79c.js";import{F as H,R as D}from"./ForgotPasswordBtn-872c523c.js";import{v as C,L as $,A as z,a as v}from"./index.esm-d811e160.js";import{a as Z}from"./index.esm-259cf9f8.js";const q=()=>s.jsx("svg",{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",style:{position:"absolute",top:"14px",left:"16px"},children:s.jsx("path",{d:"M3.75 3.75H13.5C14.0967 3.75 14.669 3.98705 15.091 4.40901C15.5129 4.83097 15.75 5.40326 15.75 6V12.75C15.75 13.3467 15.5129 13.919 15.091 14.341C14.669 14.7629 14.0967 15 13.5 15H3.75C3.15326 15 2.58097 14.7629 2.15901 14.341C1.73705 13.919 1.5 13.3467 1.5 12.75V6C1.5 5.40326 1.73705 4.83097 2.15901 4.40901C2.58097 3.98705 3.15326 3.75 3.75 3.75ZM3.75 4.5C3.375 4.5 3.045 4.6275 2.79 4.8525L8.625 8.625L14.46 4.8525C14.205 4.6275 13.875 4.5 13.5 4.5H3.75ZM8.625 9.5325L2.3475 5.46C2.2875 5.625 2.25 5.8125 2.25 6V12.75C2.25 13.1478 2.40804 13.5294 2.68934 13.8107C2.97064 14.092 3.35218 14.25 3.75 14.25H13.5C13.8978 14.25 14.2794 14.092 14.5607 13.8107C14.842 13.5294 15 13.1478 15 12.75V6C15 5.8125 14.9625 5.625 14.9025 5.46L8.625 9.5325Z",fill:"#909090"})});function ss(i){return L({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{},child:[]},{tag:"path",attr:{d:"M0 2v13h17v-13h-17zM8.494 9.817l-6.896-6.817h13.82l-6.924 6.817zM5.755 8.516l-4.755 4.682v-9.383l4.755 4.701zM6.466 9.219l2.026 2.003 1.996-1.966 4.8 4.744h-13.677l4.855-4.781zM11.201 8.555l4.799-4.725v9.467l-4.799-4.742z"}}]})(i)}const G=a.div`
  width: ${o.breakpoints.mobile}px;
`,W=a.form`
  display: flex;
  flex-direction: column;
  justify-content: start;
`,x=a.div`
  color: ${o.colors.main};
  font-family: 'Segoe-Regular';
  font-size: ${o.fontSizes.m};
  margin-bottom: ${o.spacing[2]}px;
`,f=a.div`
  position: relative;
`,g=a.input`
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
`,u=a.p`
  color: ${o.colors.error};
  font-size: ${o.fontSizes.xxs};
  font-family: 'Segoe-Regular';
  margin-bottom: ${o.spacing[4]}px;
  align-self: flex-end;
`,P=a.button`
  position: absolute;
  top: 14px;
  right: 16px;
  color: ${o.colors.second};
`,O=({from:i,onOpen:h})=>{const[w,E]=n.useState(!1),[j,B]=n.useState(!1),[S,r]=n.useState(!1),l=i==="loginPage",c=k(),F=n.useCallback(async e=>{console.log("values",e),r(!0);const t=await c(I({email:e.email,username:e.username,password:e.password}));console.log("response.requestStatus",t),r(!1),t.meta.requestStatus!=="rejected"&&h()},[c,h]),M=n.useCallback(async e=>{r(!0),await c(R({email:e.email,password:e.password})),r(!1)},[c]);return s.jsxs(G,{children:[s.jsxs(s.Fragment,{children:[s.jsx(V,{validationSchema:l?C.loginSchema:C.signUpSchema,initialValues:{email:"",password:"",confirmPassword:"",username:""},onSubmit:async(e,{setSubmitting:t})=>{l?await M(e):await F(e),t(!1)},children:({values:e,errors:t,touched:p,handleChange:d,handleBlur:m,handleSubmit:T})=>s.jsxs(W,{noValidate:!0,onSubmit:T,children:[!l&&s.jsxs(s.Fragment,{children:[s.jsx(x,{children:"Username"}),s.jsxs(f,{style:{position:"relative"},children:[s.jsx(Z,{size:18,fill:"#909090",style:{position:"absolute",top:"14px",left:"16px"}}),s.jsx(g,{type:"text",name:"username",onChange:d,onBlur:m,value:e.username,placeholder:"Username",id:"username"})]}),s.jsx(u,{children:t.username&&p.username&&t.username})]}),s.jsx(x,{children:"Email"}),s.jsxs(f,{style:{position:"relative"},children:[s.jsx(q,{}),s.jsx(g,{type:"email",name:"email",onChange:d,onBlur:m,value:e.email,placeholder:"Email address",id:"email"})]}),s.jsx(u,{children:t.email&&p.email&&t.email}),s.jsx(x,{children:"Password"}),s.jsxs(f,{children:[s.jsx($,{}),s.jsx(g,{type:w?"text":"password",name:"password",secureTextEntry:!w,onChange:d,onBlur:m,value:e.password,placeholder:"Password"}),s.jsx(P,{type:"button",onClick:()=>E(y=>!y),children:w?s.jsx(z,{size:18}):s.jsx(v,{size:18})})]}),s.jsx(u,{children:t.password&&p.password&&t.password}),!l&&s.jsxs(s.Fragment,{children:[s.jsx(x,{children:"Confirm Password"}),s.jsxs(f,{children:[s.jsx($,{}),s.jsx(g,{type:j?"text":"password",name:"confirmPassword",secureTextEntry:!j,onChange:d,onBlur:m,value:e.confirmPassword,placeholder:"Password"}),s.jsx(P,{type:"button",onClick:()=>B(y=>!y),children:j?s.jsx(z,{size:18}):s.jsx(v,{size:18})})]}),s.jsx(u,{children:t.confirmPassword&&p.confirmPassword&&t.confirmPassword})]}),s.jsx(H,{from:i,onOpen:h}),s.jsx(U,{disabled:S,from:i})]})}),s.jsx(D,{from:i})]}),S&&s.jsx(A,{})]})};O.propTypes={from:b.string,onOpen:b.func};const os=a.div`
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
`,es=a.div`
 width: 390px;
 text-align:center;
 padding:40px 20px;
 `,ts=a.h4`
margin-top:126px;
font-family:'Segoe-Bold';
font-weight:700;
font-size:${o.fontSizes.xl};
color:${o.colors.main};

`,as=a.p`
margin-top:8px;
font-family:'Segoe-Regular';
font-weight:400;
font-size:${o.fontSizes.m};
color:${o.colors.main};
`,is=a.p`
margin-top:112px;
font-family:'Segoe-Regular';
font-weight:400;
font-size:${o.fontSizes.m};
color:${o.colors.grey};`,ns=a.p`
margin-top:8px;
margin-bottom:45px;
color:${o.colors.accent};
&:hover{
cursor:pointer;
} 
`;export{O as A,ns as B,q as E,es as M,as as S,ss as T,os as a,ts as b,is as c};
