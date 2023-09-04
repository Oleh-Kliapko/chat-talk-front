import{n as a,t,P as u,r as o,Q as f,j as e,a as k,e as v,u as B,k as U,l as z,m as D,C as P}from"./index-ea31e3ed.js";import{B as R}from"./index.esm-331b277e.js";import{B as $}from"./BtnTemplate-4c438ea5.js";import{H as L}from"./Header-7e87de24.js";import{C as O}from"./CreateModal-3d38e086.js";import{S as A}from"./SmallModal-8a95834a.js";import"./iconBase-5127143f.js";import"./index.esm-0e42680c.js";const E=a.div`
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
`,j=({preview:l,userName:p,setSelectedPhoto:c,username:n,setUserName:h,onOpen:i})=>{const m=o.useRef(null),x=o.useCallback(()=>{m.current.click()},[]),g=o.useCallback(s=>{if(s.target.files[0]){if(s.target.files[0].size>16e13)return f.warn("file is too large");if(s.target.files[0].type==="image/jpeg"||s.target.files[0].type==="image/png"){console.log("event.target.files[0]",s.target.files[0].size),c(s.target.files[0]);return}return f.warn("wrong file type")}},[c]);return e.jsxs(E,{children:[e.jsxs(M,{children:[e.jsx(N,{children:e.jsx(T,{src:l,alt:"channel-image"})}),e.jsxs(I,{children:[e.jsx(R,{onClick:x,size:24}),e.jsx("input",{type:"file",ref:m,onChange:g,style:{display:"none"}})]})]}),e.jsx(G,{children:e.jsxs(H,{children:["Username",e.jsx(F,{type:"text",name:"name",value:p,onChange:s=>h(s.target.value),placeholder:n})]})}),e.jsx($,{onClick:i,text:"Delete Account",textSize:t.fontSizes.m,color:t.colors.main,width:"100%",height:`${t.spacing[12]}px`,hoverGradient:t.colors.accentBtnBgr,border:t.border.main,borderRadius:t.radii.main,marginTop:"415px",marginBottom:"auto",type:"button"})]})};j.propTypes={setSelectedPhoto:u.func,setUserName:u.func,onOpen:u.func,preview:u.string,userName:u.string,username:u.string};const Y=()=>{const l=k(),{avatarURL:p,username:c}=v(r=>r.auth.user),[n,h]=o.useState(null),[i,m]=o.useState(""),[x,g]=o.useState(p),[s,b]=o.useState(!1),w=o.useCallback(()=>{b(!0)},[]),y=o.useCallback(()=>{b(!1)},[]),d=B();console.log("selectedPhoto",n);const C=o.useCallback(async()=>{d(U()),d(z()),f.success("Account was successfully deleted"),l("/")},[d,l]);o.useEffect(()=>{if(n===null)return;const r=URL.createObjectURL(n);return g(r),()=>URL.revokeObjectURL(r)},[p,n,g]);const S=o.useCallback(async()=>{const r=new FormData;return n!==null&&r.append("profile_photo",n),i===""?r.append("username",c):r.append("username",i),i===""&&n===null?f.warn("nothing no change"):(d(D(r)),l("/my-profile"))},[d,l,n,i,c]);return e.jsxs(P,{children:[e.jsx(L,{subTitle:"Account",goBack:!0,done:S}),e.jsx(j,{preview:x,setSelectedPhoto:h,username:c,setUserName:m,userName:i,onOpen:w}),s&&e.jsx(O,{onClose:y,children:e.jsx(A,{title:"Delete Account?",subtitle:"Are you sure want to delete your account?",yes:C,no:y})})]})};export{Y as default};
