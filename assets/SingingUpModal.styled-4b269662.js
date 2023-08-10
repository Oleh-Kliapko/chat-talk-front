import{j as s,G as B,n as i,t as o,P as j,r as S,d as M,F as T,v as y,l as F,s as R,e as $,A as b,f as C,g as I,h as k,R as A}from"./index-884b2a32.js";const L=()=>s.jsx("svg",{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",style:{position:"absolute",top:"14px",left:"16px"},children:s.jsx("path",{d:"M3.75 3.75H13.5C14.0967 3.75 14.669 3.98705 15.091 4.40901C15.5129 4.83097 15.75 5.40326 15.75 6V12.75C15.75 13.3467 15.5129 13.919 15.091 14.341C14.669 14.7629 14.0967 15 13.5 15H3.75C3.15326 15 2.58097 14.7629 2.15901 14.341C1.73705 13.919 1.5 13.3467 1.5 12.75V6C1.5 5.40326 1.73705 4.83097 2.15901 4.40901C2.58097 3.98705 3.15326 3.75 3.75 3.75ZM3.75 4.5C3.375 4.5 3.045 4.6275 2.79 4.8525L8.625 8.625L14.46 4.8525C14.205 4.6275 13.875 4.5 13.5 4.5H3.75ZM8.625 9.5325L2.3475 5.46C2.2875 5.625 2.25 5.8125 2.25 6V12.75C2.25 13.1478 2.40804 13.5294 2.68934 13.8107C2.97064 14.092 3.35218 14.25 3.75 14.25H13.5C13.8978 14.25 14.2794 14.092 14.5607 13.8107C14.842 13.5294 15 13.1478 15 12.75V6C15 5.8125 14.9625 5.625 14.9025 5.46L8.625 9.5325Z",fill:"#909090"})});function G(n){return B({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{},child:[]},{tag:"path",attr:{d:"M0 2v13h17v-13h-17zM8.494 9.817l-6.896-6.817h13.82l-6.924 6.817zM5.755 8.516l-4.755 4.682v-9.383l4.755 4.701zM6.466 9.219l2.026 2.003 1.996-1.966 4.8 4.744h-13.677l4.855-4.781zM11.201 8.555l4.799-4.725v9.467l-4.799-4.742z"}}]})(n)}const V=i.div`
  width: ${o.breakpoints.mobile}px;
`,H=i.form`
  display: flex;
  flex-direction: column;
  justify-content: start;
`,m=i.div`
  color: ${o.colors.main};
  font-family: 'Segoe-Regular';
  font-size: ${o.fontSizes.m};
  margin-bottom: ${o.spacing[2]}px;
`,g=i.div`
  position: relative;
`,f=i.input`
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
`,h=i.p`
  color: ${o.colors.error};
  font-size: ${o.fontSizes.xxs};
  font-family: 'Segoe-Regular';
  margin-bottom: ${o.spacing[4]}px;
  align-self: flex-end;
`,z=i.button`
  position: absolute;
  top: 14px;
  right: 16px;
  color: ${o.colors.second};
`,D=({from:n,onOpen:w})=>{const[r,v]=S.useState(!1),[l,P]=S.useState(!1),a=n==="loginPage",u=M();return s.jsxs(V,{children:[s.jsx(T,{validationSchema:a?y.loginSchema:y.signUpSchema,initialValues:{email:"",password:"",confirmPassword:""},onSubmit:(t,{setSubmitting:e})=>{u(a?F({email:t.email,password:t.password}):R({email:t.email,password:t.password})),!a&&w(),e(!1)},children:({values:t,errors:e,touched:c,handleChange:p,handleBlur:d,handleSubmit:E})=>s.jsxs(H,{noValidate:!0,onSubmit:E,children:[s.jsx(m,{children:"Email"}),s.jsxs(g,{style:{position:"relative"},children:[s.jsx(L,{}),s.jsx(f,{type:"email",name:"email",onChange:p,onBlur:d,value:t.email,placeholder:"Email address",id:"email"})]}),s.jsx(h,{children:e.email&&c.email&&e.email}),s.jsx(m,{children:"Password"}),s.jsxs(g,{children:[s.jsx($,{}),s.jsx(f,{type:r?"text":"password",name:"password",secureTextEntry:!r,onChange:p,onBlur:d,value:t.password,placeholder:"Password"}),s.jsx(z,{type:"button",onClick:()=>v(x=>!x),children:r?s.jsx(b,{size:18}):s.jsx(C,{size:18})})]}),s.jsx(h,{children:e.password&&c.password&&e.password}),!a&&s.jsxs(s.Fragment,{children:[s.jsx(m,{children:"Confirm Password"}),s.jsxs(g,{children:[s.jsx($,{}),s.jsx(f,{type:l?"text":"password",name:"confirmPassword",secureTextEntry:!l,onChange:p,onBlur:d,value:t.confirmPassword,placeholder:"Enter password again"}),s.jsx(z,{type:"button",onClick:()=>P(x=>!x),children:l?s.jsx(b,{size:18}):s.jsx(C,{size:18})})]}),s.jsx(h,{children:e.confirmPassword&&c.confirmPassword&&e.confirmPassword})]}),s.jsx(I,{from:n,onOpen:w}),s.jsx(k,{from:n})]})}),s.jsx(A,{from:n})]})};D.propTypes={from:j.string,onOpen:j.func};const O=i.div`
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
`,U=i.div`
 width: 390px;
 text-align:center;
 padding:40px 20px;
 `,W=i.h4`
margin-top:126px;
font-family:'Segoe-Bold';
font-weight:700;
font-size:${o.fontSizes.xl};
color:${o.colors.main};

`,q=i.p`
margin-top:8px;
font-family:'Segoe-Regular';
font-weight:400;
font-size:${o.fontSizes.m};
color:${o.colors.main};
`,J=i.p`
margin-top:112px;
font-family:'Segoe-Regular';
font-weight:400;
font-size:${o.fontSizes.m};
color:${o.colors.grey};`,K=i.p`
margin-top:8px;
margin-bottom:45px;
color:${o.colors.accent};
&:hover{
cursor:pointer;
} 
`;export{D as A,K as B,L as E,U as M,q as S,G as T,O as a,W as b,J as c};
