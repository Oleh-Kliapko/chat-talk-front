import{G as L}from"./iconBase-4c510358.js";import{j as s,n as t,t as o,P as S,r as n,u as I,v as R,w as A,a as V}from"./index-cb02a06c.js";import{F as U,A as H}from"./AuthBtn-3bf11ea8.js";import"./BtnTemplate-07088929.js";import{F as D,R as Z}from"./ForgotPasswordBtn-57c77289.js";import{v as C,F as x,L as v,A as z,a as P}from"./FormFieldError-dd05287b.js";import{a as G}from"./index.esm-1c6bbd81.js";const W=()=>s.jsx("svg",{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",style:{position:"absolute",top:"14px",left:"16px"},children:s.jsx("path",{d:"M3.75 3.75H13.5C14.0967 3.75 14.669 3.98705 15.091 4.40901C15.5129 4.83097 15.75 5.40326 15.75 6V12.75C15.75 13.3467 15.5129 13.919 15.091 14.341C14.669 14.7629 14.0967 15 13.5 15H3.75C3.15326 15 2.58097 14.7629 2.15901 14.341C1.73705 13.919 1.5 13.3467 1.5 12.75V6C1.5 5.40326 1.73705 4.83097 2.15901 4.40901C2.58097 3.98705 3.15326 3.75 3.75 3.75ZM3.75 4.5C3.375 4.5 3.045 4.6275 2.79 4.8525L8.625 8.625L14.46 4.8525C14.205 4.6275 13.875 4.5 13.5 4.5H3.75ZM8.625 9.5325L2.3475 5.46C2.2875 5.625 2.25 5.8125 2.25 6V12.75C2.25 13.1478 2.40804 13.5294 2.68934 13.8107C2.97064 14.092 3.35218 14.25 3.75 14.25H13.5C13.8978 14.25 14.2794 14.092 14.5607 13.8107C14.842 13.5294 15 13.1478 15 12.75V6C15 5.8125 14.9625 5.625 14.9025 5.46L8.625 9.5325Z",fill:"#909090"})});function os(e){return L({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{},child:[]},{tag:"path",attr:{d:"M0 2v13h17v-13h-17zM8.494 9.817l-6.896-6.817h13.82l-6.924 6.817zM5.755 8.516l-4.755 4.682v-9.383l4.755 4.701zM6.466 9.219l2.026 2.003 1.996-1.966 4.8 4.744h-13.677l4.855-4.781zM11.201 8.555l4.799-4.725v9.467l-4.799-4.742z"}}]})(e)}const q=t.div`
  width: ${o.breakpoints.mobile}px;
`,O=t.form`
  display: flex;
  flex-direction: column;
  justify-content: start;
`,f=t.div`
  color: ${o.colors.main};
  font-family: 'Segoe-Regular';
  font-size: ${o.fontSizes.m};
  margin-bottom: ${o.spacing[2]}px;
`,g=t.div`
  position: relative;
 
`,u=t.input`
  width: 100%;
  color:${({error:e})=>e?o.colors.error:o.colors.main};
  font-family: 'Segoe-Regular';
  font-size: ${o.fontSizes.m};
  padding: ${o.spacing[3]}px ${o.spacing[0]}px ${o.spacing[3]}px
    ${o.spacing[10]}px;
  border: ${({error:e})=>e?o.border.error:o.border.main};
  border-radius: ${o.radii.main};
  background-color: ${({error:e})=>e?"#FFF2F4":"white"};
   &:focus,
  &:hover {
    outline: none;
   border: ${({error:e})=>e?o.border.error:o.border.accent};
   box-shadow: ${({error:e})=>e?`0 0 0 1px ${o.colors.error}`:`0 0 0 1px ${o.colors.accent}`};
  }
  &::placeholder {
  color:${({error:e})=>e?o.colors.error:o.colors.grey};
}
`,w=t.div`
  /* color: ${o.colors.error};
  font-size: ${o.fontSizes.xxs};
  font-family: 'Segoe-Regular'; */
  margin-bottom: ${o.spacing[4]}px;
  /* align-self: flex-start; */
`,F=t.button`
  position: absolute;
  top: 14px;
  right: 16px;
  color: ${o.colors.second};
`,J=({from:e,onOpen:h})=>{const[j,B]=n.useState(!1),[y,E]=n.useState(!1),[$,l]=n.useState(!1),c=e==="loginPage",p=I(),M=n.useCallback(async r=>{l(!0);const a=await p(R({email:r.email,username:r.username,password:r.password}));l(!1),a.meta.requestStatus!=="rejected"&&h()},[p,h]),T=n.useCallback(async r=>{l(!0),await p(A({email:r.email,password:r.password})),l(!1)},[p]);return s.jsxs(q,{children:[s.jsxs(s.Fragment,{children:[s.jsx(U,{validationSchema:c?C.loginSchema:C.signUpSchema,initialValues:{email:"",password:"",confirmPassword:"",username:""},onSubmit:async(r,{setSubmitting:a})=>{c?await T(r):await M(r),a(!1)},children:({values:r,errors:a,touched:i,handleChange:m,handleBlur:d,handleSubmit:k})=>s.jsxs(O,{noValidate:!0,onSubmit:k,children:[!c&&s.jsxs(s.Fragment,{children:[s.jsx(f,{children:"Username"}),s.jsxs(g,{style:{position:"relative"},children:[s.jsx(G,{size:18,fill:"#909090",style:{position:"absolute",top:"14px",left:"16px"}}),s.jsx(u,{type:"text",name:"username",onChange:m,onBlur:d,value:r.username,placeholder:"Username",id:"username",error:!!(a.username&&i.username)})]}),s.jsx(w,{children:a.username&&i.username&&s.jsx(x,{title:a.username})})]}),s.jsx(f,{children:"Email"}),s.jsxs(g,{style:{position:"relative"},children:[s.jsx(W,{}),s.jsx(u,{type:"email",name:"email",onChange:m,onBlur:d,value:r.email,placeholder:"Email address",id:"email",error:!!(a.email&&i.email)})]}),s.jsx(w,{children:a.email&&i.email&&s.jsx(x,{title:a.email})}),s.jsx(f,{children:"Password"}),s.jsxs(g,{children:[s.jsx(v,{}),s.jsx(u,{type:j?"text":"password",name:"password",secureTextEntry:!j,onChange:m,onBlur:d,value:r.password,placeholder:"Password",error:!!(a.password&&i.password)}),s.jsx(F,{type:"button",onClick:()=>B(b=>!b),children:j?s.jsx(z,{size:18}):s.jsx(P,{size:18})})]}),s.jsx(w,{children:a.password&&i.password&&s.jsx(x,{title:a.password})}),!c&&s.jsxs(s.Fragment,{children:[s.jsx(f,{children:"Confirm Password"}),s.jsxs(g,{children:[s.jsx(v,{}),s.jsx(u,{type:y?"text":"password",name:"confirmPassword",secureTextEntry:!y,onChange:m,onBlur:d,value:r.confirmPassword,placeholder:"Password",error:!!(a.confirmPassword&&i.confirmPassword)}),s.jsx(F,{type:"button",onClick:()=>E(b=>!b),children:y?s.jsx(z,{size:18}):s.jsx(P,{size:18})})]}),s.jsx(w,{children:a.confirmPassword&&i.confirmPassword&&s.jsx(x,{title:a.confirmPassword})})]}),s.jsx(D,{from:e,onOpen:h}),s.jsx(H,{disabled:$,from:e})]})}),s.jsx(Z,{from:e})]}),$&&s.jsx(V,{})]})};J.propTypes={from:S.string,onOpen:S.func};const es=t.div`
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
`,as=t.div`
 width: 390px;
 text-align:center;
 padding:40px 20px;
 `,rs=t.h4`
margin-top:126px;
font-family:'Segoe-Bold';
font-weight:700;
font-size:${o.fontSizes.xl};
color:${o.colors.main};

`,ts=t.p`
margin-top:8px;
font-family:'Segoe-Regular';
font-weight:400;
font-size:${o.fontSizes.m};
color:${o.colors.main};
`,is=t.p`
margin-top:112px;
font-family:'Segoe-Regular';
font-weight:400;
font-size:${o.fontSizes.m};
color:${o.colors.grey};`,ns=t.p`
margin-top:8px;
margin-bottom:45px;
color:${o.colors.accent};
&:hover{
cursor:pointer;
} 
`;export{J as A,ns as B,W as E,as as M,ts as S,os as T,es as a,rs as b,is as c};
