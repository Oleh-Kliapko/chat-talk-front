import{n as a,t,P as u,r as o,Q as g,j as e,b as k,e as v,u as B,k as U,l as D,m as R,C as $}from"./index-678a41bd.js";import{B as z}from"./index.esm-418dbecb.js";import{B as P}from"./BtnTemplate-a522be28.js";import{H as L}from"./Header-401ff7e6.js";import{C as O}from"./CreateModal-cbdfee6c.js";import{S as A}from"./SmallModal-62c9f5f6.js";import"./iconBase-047d1e6d.js";import"./index.esm-8c5b99ee.js";const E=a.div`
width: ${t.breakpoints.mobile}px;
display:flex;
flex-direction:column;
align-items:center;
margin-top:12px;
`,I=a.div`
width:36px;
height:36px;
border-radius:50%;
border: 1px solid #D3D3D3;
display:flex;
align-items:center;
justify-content:center;
position: absolute;
bottom: 0;
right: 0;
background-color:${t.colors.white}
`,M=a.div`
position: relative;
`,N=a.div`
width:100px;
height:100px;
border-radius:50%;
overflow:hidden;
`,T=a.img`
width:100%;
height:100%;
object-fit: cover;
`,F=a.input`
width:100%;
padding-top:12px;
padding-bottom:12px;
margin-top:8px;
border:none;
border-bottom:1px solid ${t.colors.grey};
font-family:'Segoe-Regular';
font-size:${t.fontSizes.m};
font-weight:400;
color:${t.colors.main};
background-color:${t.colors.mainBgr};
&:focus{
    outline:none;
}
`,H=a.label`

font-family:'Segoe-SemiBold';
font-size: ${t.fontSizes.l};
font-weight: 600;
color: ${t.colors.main};
`,G=a.div`
width:100%;
margin-top:24px;
`,j=({preview:l,userName:p,setSelectedPhoto:c,username:n,setUserName:h,onOpen:i})=>{const m=o.useRef(null),x=o.useCallback(()=>{m.current.click()},[]),f=o.useCallback(s=>{if(s.target.files[0]){if(s.target.files[0].size>16e13)return g.warn("file is too large");if(s.target.files[0].type==="image/jpeg"||s.target.files[0].type==="image/png"){c(s.target.files[0]);return}return g.warn("wrong file type")}},[c]);return e.jsxs(E,{children:[e.jsxs(M,{children:[e.jsx(N,{children:e.jsx(T,{src:l,alt:"channel-image"})}),e.jsxs(I,{children:[e.jsx(z,{onClick:x,size:24}),e.jsx("input",{type:"file",ref:m,onChange:f,style:{display:"none"}})]})]}),e.jsx(G,{children:e.jsxs(H,{children:["Username",e.jsx(F,{type:"text",name:"name",value:p,onChange:s=>h(s.target.value),placeholder:n})]})}),e.jsx(P,{onClick:i,text:"Delete Account",textSize:t.fontSizes.m,color:t.colors.main,width:"100%",height:`${t.spacing[12]}px`,hoverGradient:t.colors.accentBtnBgr,border:t.border.main,borderRadius:t.radii.main,marginTop:"415px",marginBottom:"auto",type:"button"})]})};j.propTypes={setSelectedPhoto:u.func,setUserName:u.func,onOpen:u.func,preview:u.string,userName:u.string,username:u.string};const Y=()=>{const l=k(),{avatarURL:p,username:c}=v(r=>r.auth.user),[n,h]=o.useState(null),[i,m]=o.useState(""),[x,f]=o.useState(p),[s,b]=o.useState(!1),w=o.useCallback(()=>{b(!0)},[]),y=o.useCallback(()=>{b(!1)},[]),d=B(),C=o.useCallback(async()=>{d(U()),d(D()),g.success("Account was successfully deleted"),l("/")},[d,l]);o.useEffect(()=>{if(n===null)return;const r=URL.createObjectURL(n);return f(r),()=>URL.revokeObjectURL(r)},[p,n,f]);const S=o.useCallback(async()=>{const r=new FormData;return n!==null&&r.append("profile_photo",n),i===""?r.append("username",c):r.append("username",i),i===""&&n===null?g.warn("nothing no change"):(d(R(r)),l("/my-profile"))},[d,l,n,i,c]);return e.jsxs($,{children:[e.jsx(L,{subTitle:"Account",goBack:!0,done:S}),e.jsx(j,{preview:x,setSelectedPhoto:h,username:c,setUserName:m,userName:i,onOpen:w}),s&&e.jsx(O,{onClose:y,children:e.jsx(A,{title:"Delete Account?",subtitle:"Are you sure want to delete your account?",yes:C,no:y})})]})};export{Y as default};
