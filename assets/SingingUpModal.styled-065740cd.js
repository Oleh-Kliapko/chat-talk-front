import{j as o,G as P,n as t,t as s,P as M,r as j,F as B,v as S,l as k,s as T,c as $,A as v,d as C,e as F,f as L,R,a as I}from"./index-128ba8cd.js";import{u as A}from"./useDispatch-47620cc3.js";const V=()=>o.jsx("svg",{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",style:{position:"absolute",top:"14px",left:"16px"},children:o.jsx("path",{d:"M3.75 3.75H13.5C14.0967 3.75 14.669 3.98705 15.091 4.40901C15.5129 4.83097 15.75 5.40326 15.75 6V12.75C15.75 13.3467 15.5129 13.919 15.091 14.341C14.669 14.7629 14.0967 15 13.5 15H3.75C3.15326 15 2.58097 14.7629 2.15901 14.341C1.73705 13.919 1.5 13.3467 1.5 12.75V6C1.5 5.40326 1.73705 4.83097 2.15901 4.40901C2.58097 3.98705 3.15326 3.75 3.75 3.75ZM3.75 4.5C3.375 4.5 3.045 4.6275 2.79 4.8525L8.625 8.625L14.46 4.8525C14.205 4.6275 13.875 4.5 13.5 4.5H3.75ZM8.625 9.5325L2.3475 5.46C2.2875 5.625 2.25 5.8125 2.25 6V12.75C2.25 13.1478 2.40804 13.5294 2.68934 13.8107C2.97064 14.092 3.35218 14.25 3.75 14.25H13.5C13.8978 14.25 14.2794 14.092 14.5607 13.8107C14.842 13.5294 15 13.1478 15 12.75V6C15 5.8125 14.9625 5.625 14.9025 5.46L8.625 9.5325Z",fill:"#909090"})});function J(e){return P({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{},child:[]},{tag:"path",attr:{d:"M0 2v13h17v-13h-17zM8.494 9.817l-6.896-6.817h13.82l-6.924 6.817zM5.755 8.516l-4.755 4.682v-9.383l4.755 4.701zM6.466 9.219l2.026 2.003 1.996-1.966 4.8 4.744h-13.677l4.855-4.781zM11.201 8.555l4.799-4.725v9.467l-4.799-4.742z"}}]})(e)}const D=t.div`
  width: ${s.breakpoints.mobile}px;
`,H=t.form`
  display: flex;
  flex-direction: column;
  justify-content: start;
`,f=t.div`
  color: ${s.colors.main};
  font-family: 'Segoe-Regular';
  font-size: ${s.fontSizes.m};
  margin-bottom: ${s.spacing[2]}px;
`,h=t.div`
  position: relative;
`,w=t.input`
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
`,u=t.p`
  color: ${s.colors.error};
  font-size: ${s.fontSizes.xxs};
  font-family: 'Segoe-Regular';
  margin-bottom: ${s.spacing[4]}px;
  align-self: flex-end;
`,z=t.button`
  position: absolute;
  top: 14px;
  right: 16px;
  color: ${s.colors.second};
`,Z=({from:e,onOpen:r})=>{const[c,b]=j.useState(!1),[d,a]=j.useState(!1),l=e==="loginPage",y=A();return o.jsxs(D,{children:[o.jsx(B,{validationSchema:l?S.loginSchema:S.signUpSchema,initialValues:{email:"",password:"",confirmPassword:""},onSubmit:(i,{setSubmitting:n})=>{y(l?k({email:i.email,password:i.password}):T({email:i.email,password:i.password})),!l&&r(),n(!1)},children:({values:i,errors:n,touched:p,handleChange:x,handleBlur:m,handleSubmit:E})=>o.jsxs(H,{noValidate:!0,onSubmit:E,children:[o.jsx(f,{children:"Email"}),o.jsxs(h,{style:{position:"relative"},children:[o.jsx(V,{}),o.jsx(w,{type:"email",name:"email",onChange:x,onBlur:m,value:i.email,placeholder:"Email address",id:"email"})]}),o.jsx(u,{children:n.email&&p.email&&n.email}),o.jsx(f,{children:"Password"}),o.jsxs(h,{children:[o.jsx($,{}),o.jsx(w,{type:c?"text":"password",name:"password",secureTextEntry:!c,onChange:x,onBlur:m,value:i.password,placeholder:"Password"}),o.jsx(z,{type:"button",onClick:()=>b(g=>!g),children:c?o.jsx(v,{size:18}):o.jsx(C,{size:18})})]}),o.jsx(u,{children:n.password&&p.password&&n.password}),!l&&o.jsxs(o.Fragment,{children:[o.jsx(f,{children:"Confirm Password"}),o.jsxs(h,{children:[o.jsx($,{}),o.jsx(w,{type:d?"text":"password",name:"confirmPassword",secureTextEntry:!d,onChange:x,onBlur:m,value:i.confirmPassword,placeholder:"Enter password again"}),o.jsx(z,{type:"button",onClick:()=>a(g=>!g),children:d?o.jsx(v,{size:18}):o.jsx(C,{size:18})})]}),o.jsx(u,{children:n.confirmPassword&&p.confirmPassword&&n.confirmPassword})]}),o.jsx(F,{from:e,onOpen:r}),o.jsx(L,{from:e})]})}),o.jsx(R,{from:e})]})};Z.propTypes={from:M.string};const G=t.div`
  position: fixed;
  z-index: 1001;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`,U=t.div`
  position: absolute;
  border: 1px solid rgba(220, 227, 229, 0.8);
  box-shadow: 0px 4px 16px rgba(17, 17, 17, 0.1);
  max-width: 95%;
  padding: 48px 18px 40px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: ${s.colors.white};
`,W=document.querySelector("#modal"),K=({children:e,onClose:r,background:c,color:b})=>{j.useEffect(()=>{const a=l=>{l.code==="Escape"&&r()};return window.addEventListener("keydown",a),()=>{window.removeEventListener("keydown",a)}},[r]);const d=a=>{a.target===a.currentTarget&&r()};return I.createPortal(o.jsx(G,{onMouseDown:d,children:o.jsx(U,{background:c,children:e})}),W)},N=t.div`
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
`,Q=t.div`
 width: 390px;
 text-align:center;
 padding:40px 20px;
 `,X=t.h4`
margin-top:126px;
font-family:'Segoe-Bold';
font-weight:700;
font-size:${s.fontSizes.xl};
color:${s.colors.main};

`,Y=t.p`
margin-top:8px;
font-family:'Segoe-Regular';
font-weight:400;
font-size:${s.fontSizes.m};
color:${s.colors.main};
`,_=t.p`
margin-top:112px;
font-family:'Segoe-Regular';
font-weight:400;
font-size:${s.fontSizes.m};
color:${s.colors.grey};`,oo=t.p`
margin-top:8px;
margin-bottom:45px;
color:${s.colors.accent};
&:hover{
cursor:pointer;
} 
`;export{Z as A,oo as B,K as C,V as E,Q as M,Y as S,J as T,N as a,X as b,_ as c};
