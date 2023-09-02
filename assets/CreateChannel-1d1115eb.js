import{n as r,t,r as n,u as T,a as A,Q as c,b as E,j as e,C as I}from"./index-3e777ba6.js";import{a as P}from"./index.esm-51620022.js";import{P as H}from"./Pencil-15679d26.js";import{B as U}from"./BtnTemplate-73bcef51.js";import{H as D}from"./Header-f0bafa1d.js";import"./iconBase-2f16a95d.js";import"./index.esm-ade2ddf1.js";const M=r.h4`
font-size:${t.fontSizes.m};
font-weight: 400;
font-family:"Segoe-Regular";
color:${t.colors.grey}
`,N=r.div`
width: ${t.breakpoints.mobile}px;
display:flex;
flex-direction:column;
margin-top:8px;
`,V=r.div`
width: 100%;
height:200px;
margin-top:24px;
margin-bottom:24px;
position: relative;
background-color:#EFEFEF;
`,O=r.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`,W=r.img`
width:100%;
height:100%;
object-fit: cover;

`,q=r.button`
position: absolute;
top:12px;
right:12px;
color:"white"

`,G=r.input`
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
`,Q=r.textarea`
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
`,y=r.label`
font-family:'Segoe-SemiBold';
font-size: ${t.fontSizes.l};
font-weight: 600;
color: ${t.colors.main};
`,J=r.p`
margin-left:auto;
font-family:'Segoe-Regular';
font-size:${t.fontSizes.m};
font-weight:400;
color:${t.colors.grey};
`,K={value:"",rows:1,maxRows:5,maxLength:120,lineHeight:40},X=()=>{const[d,p]=n.useState(!1),h=T(),[l,C]=n.useState(null),[m,f]=n.useState(null),[g,j]=n.useState(""),u=n.useRef(null),[a,S]=n.useState(K),x=A();n.useEffect(()=>{if(!l)return f(void 0);const o=URL.createObjectURL(l);return f(o),()=>URL.revokeObjectURL(o)},[l]);const v=n.useCallback(o=>{const{maxLength:s,maxRows:k,lineHeight:z}=a,i=o.target;i.style.height="auto";const R=i.scrollHeight,B=Math.ceil(R/z),L=Math.min(B,k);i.value.length>s&&(i.value=i.value.substring(0,s)),S(F=>({...F,value:i.value,rows:L})),i.scrollTop=0},[a]),b=n.useCallback(()=>{u.current.click()},[]),w=n.useCallback(o=>{if(o.target.files[0]){if(o.target.files[0].size>16e13)return c.warn("file is too large");if(o.target.files[0].type==="image/jpeg"||o.target.files[0].type==="image/png"){C(o.target.files[0]);return}return c.warn("wrong file type")}},[]),$=n.useCallback(async()=>{p(!0);const o=new FormData;if(l&&o.append("image",l),o.append("title",g),o.append("description",a.value),!a.value||!g)return c.warn("fill all the fields");const s=await h(E(o));console.log("response",s),s.meta.requestStatus==="fulfilled"?(c.success("channel created"),p(!1),x(`/channels/${s.payload.id}`)):(p(!1),c.error(s.error.message))},[g,h,x,l,a.value]);return e.jsxs(N,{children:[e.jsx(M,{children:"Create your own channel from below"}),e.jsx(V,{children:m?e.jsxs(e.Fragment,{children:[e.jsx(W,{src:m,alt:"channel-image"}),e.jsx(q,{onClick:b,type:"button",children:e.jsx(H,{})}),e.jsx("input",{type:"file",ref:u,onChange:w,style:{display:"none"}})]}):e.jsxs(O,{children:[e.jsx("button",{type:"button",children:e.jsx(P,{onClick:b,size:100,color:"#909090"})}),e.jsx("input",{type:"file",ref:u,onChange:w,style:{display:"none"}})]})}),e.jsxs(y,{children:["Channel Name",e.jsx(G,{type:"text",name:"name",value:g,onChange:o=>j(o.target.value),placeholder:"Channel name"})]}),e.jsxs(y,{children:["Description",e.jsx(Q,{name:"description",rows:a.rows,value:a.value,onChange:v,maxLength:a.maxLength,placeholder:"Write here..."})]}),e.jsxs(J,{children:[a.value.length,"/",a.maxLength]}),e.jsx(U,{disabled:d,onClick:$,text:d?"Wait...":"Create",textSize:t.fontSizes.m,color:t.colors.white,width:"100%",height:`${t.spacing[12]}px`,gradient:t.colors.mainBtnBgr,hoverGradient:t.colors.accentBtnBgr,border:t.border.main,borderRadius:t.radii.main,marginTop:"150px",marginBottom:"auto",type:"button"})]})},ae=()=>e.jsxs(I,{children:[e.jsx(D,{title:"Create channel",goBack:!0}),e.jsx(X,{})]});export{ae as default};
