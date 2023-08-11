import{n as a,t as o,P as d,r as s,b as g,j as e,B as f,C as j,L as b,c as x}from"./index-9550b9db.js";import{E as y,a as C,T as w,M as $,b as S,S as T,c as v,B as E,A as k}from"./SingingUpModal.styled-af3850ce.js";const M=a.div`
 min-width: 390px;
 padding:40px 20px;
 `,B=a.h4`
font-family:'Segoe-Bold';
font-weight:700;
font-size:${o.fontSizes.xl};
color:${o.colors.main};
`,z=a.p`
margin-top:8px;
font-family:'Segoe-Regular';
font-weight:400;
font-size:${o.fontSizes.m};
color:${o.colors.main};
`,R=a.div`
margin-top:8px;
  position: relative;
`,L=a.input`
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
`,P=a.div`
  margin-top:32px;
`,h=({onClose:n,onOpenRecieved:t})=>{const[i,l]=s.useState(""),c=s.useCallback(async()=>{try{await g({email:i}),n(),t()}catch(r){console.log(r)}},[n,t,i]);return e.jsxs(M,{children:[e.jsx(B,{children:"Forgot password"}),e.jsx(z,{children:"Enter your email address, and we'll send you a link to reset your password"}),e.jsx(P,{children:e.jsx("label",{htmlFor:"email",children:"Email"})}),e.jsxs(R,{children:[e.jsx(L,{type:"email",id:"email",onChange:r=>{l(r.target.value)},value:i,placeholder:"Email address"}),e.jsx(y,{})]}),e.jsx(f,{onClick:c,text:"Continue",textSize:o.fontSizes.m,color:o.colors.white,width:"100%",height:`${o.spacing[12]}px`,gradient:o.colors.mainBtnBgr,hoverGradient:o.colors.accentBtnBgr,border:o.border.main,borderRadius:o.radii.main,marginTop:"84px",type:"button"})]})};h.propTypes={onClose:d.func,onOpenRecieved:d.func};const m=({onClose:n})=>e.jsxs(e.Fragment,{children:[e.jsxs(C,{children:[" ",e.jsx(w,{color:"white",size:54})," "]}),e.jsxs($,{children:[e.jsx(S,{children:"Thank you for signing up!"}),e.jsxs(T,{children:["To complete your registration,",e.jsx("br",{})," please check your inbox"]}),e.jsx(v,{children:"Didn’t received the email yet?"}),e.jsx(E,{onClick:n,children:"Click here to try again"})]})]});m.propTypes={onClose:d.func};const I=()=>{const[n,t]=s.useState(!1),[i,l]=s.useState(!1),c=s.useCallback(()=>l(!1),[]),r=s.useCallback(()=>l(!0),[]),p=s.useCallback(()=>t(!1),[]),u=s.useCallback(()=>t(!0),[]);return e.jsxs(j,{children:[e.jsx(b,{widthLogo:"80",heightLogo:"80",title:"Login to Talk"}),e.jsx(k,{from:"loginPage",onOpen:r}),i&&e.jsx(x,{onClose:c,children:e.jsx(h,{onClose:c,onOpenRecieved:u})}),n&&e.jsx(x,{onClose:p,children:e.jsx(m,{onClose:p})})]})};export{I as default};
