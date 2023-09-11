import{n as s,t,e as U,u as D,b as H,r as n,Q as c,p as M,j as e,a as V,C as O}from"./index-2093d8da.js";import{P as W}from"./Pencil-e03073ef.js";import{a as q}from"./index.esm-b78a2f1c.js";import{B as G}from"./BtnTemplate-3de77560.js";import"./iconBase-05bc1cc4.js";const Q=s.div`
width: ${t.breakpoints.mobile}px;
display:flex;
flex-direction:column;
margin-top:8px;
`,J=s.div`
width: 100%;
height:200px;
margin-top:24px;
margin-bottom:24px;
position: relative;
background-color:#EFEFEF;
object-fit: cover;
`,K=s.img`
width:100%;
height:100%;
object-fit: cover;

`,X=s.button`
position: absolute;
top:12px;
right:12px;
color:"white"

`,Y=s.button`
position:absolute;
top:12px;
left:12px;
`,Z=s.input`
width:100%;
padding-top:12px;
padding-bottom:12px;
margin-top:8px;
margin-bottom:16px;
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
`,_=s.textarea`
  width: 100%;
  padding-top: 12px;
  padding-bottom: 12px;
  margin-top: 8px;
  resize: none;
  border: none;
  border-bottom: 1px solid ${t.colors.grey};
  font-family: 'Segoe-Regular';
  font-size: ${t.fontSizes.m};
  font-weight: 400;
  color: ${t.colors.main};
  overflow: hidden;
  background-color: ${t.colors.mainBgr};
  line-height: 16px;
  &:focus {
    outline: none;
  }
`,w=s.label`
font-family:'Segoe-SemiBold';
font-size: ${t.fontSizes.l};
font-weight: 600;
color: ${t.colors.main};
`,ee=s.p`
margin-left:auto;
font-family:'Segoe-Regular';
font-size:${t.fontSizes.m};
font-weight:400;
color:${t.colors.grey};
`,te=()=>{const{currentChannel:C}=U(o=>o.channels),{id:d,title:h,description:m,image:j}=C,y={value:m,rows:4,maxRows:5,maxLength:120,lineHeight:40},x=D(),f=H(),[i,S]=n.useState(null),[v,k]=n.useState(j),[a,$]=n.useState(y),[g,B]=n.useState(h),[u,p]=n.useState(!1),b=n.useRef(null);n.useEffect(()=>{if(!i)return;const o=URL.createObjectURL(i);return k(o),()=>URL.revokeObjectURL(o)},[i]);const R=n.useCallback(o=>{if(o.target.files[0]){if(o.target.files[0].size>16e13)return c.warn("file is too large");if(o.target.files[0].type==="image/jpeg"||o.target.files[0].type==="image/png"){S(o.target.files[0]);return}return c.warn("wrong file type")}},[]),z=n.useCallback(()=>{b.current.click()},[]),L=n.useCallback(o=>{const{maxLength:l,maxRows:F,lineHeight:I}=a,r=o.target;r.style.height="auto";const P=r.scrollHeight,T=Math.ceil(P/I),A=Math.min(T,F);r.value.length>l&&(r.value=r.value.substring(0,l)),$(N=>({...N,value:r.value,rows:A})),r.scrollTop=0},[a]),E=n.useCallback(async()=>{if(p(!0),!i&&a.value===m&&g===h)return p(!1),c.warn("Nothing to change");const o=new FormData;i&&o.append("image",i),o.append("title",g),o.append("description",a.value);const l=await x(M({id:d,formData:o}));return l.meta.requestStatus==="fulfilled"?(c.success("channel Changed successfully"),p(!1),f(`/channels/${d}`)):(p(!1),c.error(l.payload))},[g,m,x,d,f,i,a.value,h]);return e.jsxs(Q,{children:[e.jsxs(e.Fragment,{children:[e.jsxs(J,{children:[e.jsx(K,{src:v,alt:"channel-image"}),!u&&e.jsxs(e.Fragment,{children:["  ",e.jsx(X,{onClick:z,type:"button",children:e.jsx(W,{})}),e.jsx("input",{type:"file",ref:b,onChange:R,style:{display:"none"}}),e.jsx(Y,{onClick:()=>f(-1),children:e.jsx(q,{size:24,fill:"#fff"})})]})]}),e.jsxs(w,{children:["Channel Name",e.jsx(Z,{type:"text",name:"name",value:g,onChange:o=>B(o.target.value),placeholder:"Channel name"})]}),e.jsxs(w,{children:["Description",e.jsx(_,{name:"description",rows:a.rows,value:a.value,onChange:L,maxLength:a.maxLength,placeholder:"Write here..."})]}),e.jsxs(ee,{children:[a.value.length,"/",a.maxLength]}),e.jsx(G,{disabled:u,onClick:E,text:u?"Wait...":"Confirm",textSize:t.fontSizes.m,color:t.colors.white,width:"100%",height:`${t.spacing[12]}px`,gradient:t.colors.mainBtnBgr,hoverGradient:t.colors.accentBtnBgr,border:t.border.main,borderRadius:t.radii.main,marginTop:"200px",marginBottom:"auto",type:"button"})]}),u&&e.jsx(V,{})]})},re=()=>e.jsx(O,{children:e.jsx(te,{})});export{re as default};
