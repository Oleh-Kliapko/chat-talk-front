import{n as r,t,d as U,u as D,a as H,r as n,Q as c,p as M,j as o,C as V}from"./index-4d3dbc70.js";import{P as O}from"./Pencil-94efc416.js";import{a as W}from"./index.esm-88bc25a3.js";import{B as q}from"./BtnTemplate-44cf9823.js";import"./iconBase-7c86fed3.js";const G=r.div`
width: ${t.breakpoints.mobile}px;
display:flex;
flex-direction:column;
margin-top:8px;
`,Q=r.div`
width: 100%;
height:200px;
margin-top:24px;
margin-bottom:24px;
position: relative;
background-color:#EFEFEF;
object-fit: cover;
`,J=r.img`
width:100%;
height:100%;
object-fit: cover;

`,K=r.button`
position: absolute;
top:12px;
right:12px;
color:"white"

`,X=r.button`
position:absolute;
top:12px;
left:12px;
`,Y=r.input`
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
`,Z=r.textarea`
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
`,C=r.label`
font-family:'Segoe-SemiBold';
font-size: ${t.fontSizes.l};
font-weight: 600;
color: ${t.colors.main};
`,_=r.p`
margin-left:auto;
font-family:'Segoe-Regular';
font-size:${t.fontSizes.m};
font-weight:400;
color:${t.colors.grey};
`,ee=()=>{const{currentChannel:f}=U(e=>e.channels),{id:p,title:h,description:d,image:y}=f;console.log("currentChannel",f);const j={value:d,rows:4,maxRows:5,maxLength:120,lineHeight:40},x=D(),m=H(),[s,S]=n.useState(null),[v,k]=n.useState(y),[a,$]=n.useState(j),[g,z]=n.useState(h),[b,u]=n.useState(!1),w=n.useRef(null);n.useEffect(()=>{if(!s)return;const e=URL.createObjectURL(s);return k(e),()=>URL.revokeObjectURL(e)},[s]);const B=n.useCallback(e=>{if(e.target.files[0]){if(e.target.files[0].size>16e13)return c.warn("file is too large");if(e.target.files[0].type==="image/jpeg"||e.target.files[0].type==="image/png"){console.log("event.target.files[0]",e.target.files[0].size),S(e.target.files[0]);return}return c.warn("wrong file type")}},[]),R=n.useCallback(()=>{w.current.click()},[]),L=n.useCallback(e=>{const{maxLength:l,maxRows:I,lineHeight:F}=a,i=e.target;i.style.height="auto";const P=i.scrollHeight,T=Math.ceil(P/F),A=Math.min(T,I);i.value.length>l&&(i.value=i.value.substring(0,l)),$(N=>({...N,value:i.value,rows:A})),i.scrollTop=0},[a]),E=n.useCallback(async()=>{if(u(!0),!s&&a.value===d&&g===h)return u(!1),c.warn("Nothing to change");const e=new FormData;s&&e.append("image",s),e.append("title",g),e.append("description",a.value);const l=await x(M({id:p,formData:e}));return console.log("result",l),l.meta.requestStatus==="fulfilled"?(c.success("channel Changed successfully"),u(!1),m(`/channels/${p}`)):(u(!1),c.error(l.payload))},[g,d,x,p,m,s,a.value,h]);return o.jsxs(G,{children:[o.jsxs(Q,{children:[o.jsx(J,{src:v,alt:"channel-image"}),o.jsx(K,{onClick:R,type:"button",children:o.jsx(O,{})}),o.jsx("input",{type:"file",ref:w,onChange:B,style:{display:"none"}}),o.jsx(X,{onClick:()=>m(-1),children:o.jsx(W,{size:24,fill:"#fff"})})]}),o.jsxs(C,{children:["Channel Name",o.jsx(Y,{type:"text",name:"name",value:g,onChange:e=>z(e.target.value),placeholder:"Channel name"})]}),o.jsxs(C,{children:["Description",o.jsx(Z,{name:"description",rows:a.rows,value:a.value,onChange:L,maxLength:a.maxLength,placeholder:"Write here..."})]}),o.jsxs(_,{children:[a.value.length,"/",a.maxLength]}),o.jsx(q,{disabled:b,onClick:E,text:b?"Wait...":"Confirm",textSize:t.fontSizes.m,color:t.colors.white,width:"100%",height:`${t.spacing[12]}px`,gradient:t.colors.mainBtnBgr,hoverGradient:t.colors.accentBtnBgr,border:t.border.main,borderRadius:t.radii.main,marginTop:"200px",marginBottom:"auto",type:"button"})]})},se=()=>o.jsx(V,{children:o.jsx(ee,{})});export{se as default};
