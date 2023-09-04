import{n as s,t as o,e as U,u as D,b as H,r as n,Q as c,p as M,j as e,a as V,C as O}from"./index-ed42f8cd.js";import{P as W}from"./Pencil-996c58ec.js";import{a as q}from"./index.esm-ca4cf4e5.js";import{B as G}from"./BtnTemplate-da70c79c.js";import"./iconBase-46412502.js";const Q=s.div`
width: ${o.breakpoints.mobile}px;
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
border-bottom:1px solid ${o.colors.grey};
font-family:'Segoe-Regular';
font-size:${o.fontSizes.m};
font-weight:400;
color:${o.colors.main};
background-color:${o.colors.mainBgr};
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
  border-bottom: 1px solid ${o.colors.grey};
  font-family: 'Segoe-Regular';
  font-size: ${o.fontSizes.m};
  font-weight: 400;
  color: ${o.colors.main};
  overflow: hidden;
  background-color: ${o.colors.mainBgr};
  line-height: 16px;
  &:focus {
    outline: none;
  }
`,C=s.label`
font-family:'Segoe-SemiBold';
font-size: ${o.fontSizes.l};
font-weight: 600;
color: ${o.colors.main};
`,ee=s.p`
margin-left:auto;
font-family:'Segoe-Regular';
font-size:${o.fontSizes.m};
font-weight:400;
color:${o.colors.grey};
`,te=()=>{const{currentChannel:x}=U(t=>t.channels),{id:p,title:d,description:m,image:j}=x;console.log("currentChannel",x);const y={value:m,rows:4,maxRows:5,maxLength:120,lineHeight:40},b=D(),f=H(),[r,S]=n.useState(null),[v,k]=n.useState(j),[a,$]=n.useState(y),[g,z]=n.useState(d),[u,h]=n.useState(!1),w=n.useRef(null);n.useEffect(()=>{if(!r)return;const t=URL.createObjectURL(r);return k(t),()=>URL.revokeObjectURL(t)},[r]);const B=n.useCallback(t=>{if(t.target.files[0]){if(t.target.files[0].size>16e13)return c.warn("file is too large");if(t.target.files[0].type==="image/jpeg"||t.target.files[0].type==="image/png"){console.log("event.target.files[0]",t.target.files[0].size),S(t.target.files[0]);return}return c.warn("wrong file type")}},[]),R=n.useCallback(()=>{w.current.click()},[]),L=n.useCallback(t=>{const{maxLength:l,maxRows:F,lineHeight:I}=a,i=t.target;i.style.height="auto";const P=i.scrollHeight,T=Math.ceil(P/I),A=Math.min(T,F);i.value.length>l&&(i.value=i.value.substring(0,l)),$(N=>({...N,value:i.value,rows:A})),i.scrollTop=0},[a]),E=n.useCallback(async()=>{if(h(!0),!r&&a.value===m&&g===d)return h(!1),c.warn("Nothing to change");const t=new FormData;r&&t.append("image",r),t.append("title",g),t.append("description",a.value);const l=await b(M({id:p,formData:t}));return console.log("result",l),l.meta.requestStatus==="fulfilled"?(c.success("channel Changed successfully"),h(!1),f(`/channels/${p}`)):(h(!1),c.error(l.payload))},[g,m,b,p,f,r,a.value,d]);return e.jsxs(Q,{children:[e.jsxs(e.Fragment,{children:[e.jsxs(J,{children:[e.jsx(K,{src:v,alt:"channel-image"}),!u&&e.jsxs(e.Fragment,{children:["  ",e.jsx(X,{onClick:R,type:"button",children:e.jsx(W,{})}),e.jsx("input",{type:"file",ref:w,onChange:B,style:{display:"none"}}),e.jsx(Y,{onClick:()=>f(-1),children:e.jsx(q,{size:24,fill:"#fff"})})]})]}),e.jsxs(C,{children:["Channel Name",e.jsx(Z,{type:"text",name:"name",value:g,onChange:t=>z(t.target.value),placeholder:"Channel name"})]}),e.jsxs(C,{children:["Description",e.jsx(_,{name:"description",rows:a.rows,value:a.value,onChange:L,maxLength:a.maxLength,placeholder:"Write here..."})]}),e.jsxs(ee,{children:[a.value.length,"/",a.maxLength]}),e.jsx(G,{disabled:u,onClick:E,text:u?"Wait...":"Confirm",textSize:o.fontSizes.m,color:o.colors.white,width:"100%",height:`${o.spacing[12]}px`,gradient:o.colors.mainBtnBgr,hoverGradient:o.colors.accentBtnBgr,border:o.border.main,borderRadius:o.radii.main,marginTop:"200px",marginBottom:"auto",type:"button"})]}),u&&e.jsx(V,{})]})},ie=()=>e.jsx(O,{children:e.jsx(te,{})});export{ie as default};
