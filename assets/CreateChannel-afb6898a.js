import{n as r,t,r as n,u as T,b as A,Q as d,d as E,j as e,a as I,C as P}from"./index-eb2e85e2.js";import{a as H}from"./index.esm-aacc44dd.js";import{P as U}from"./Pencil-2ba64ebb.js";import{B as D}from"./BtnTemplate-b2eb46b0.js";import{H as M}from"./Header-876356a6.js";import"./iconBase-771f669b.js";import"./index.esm-05406480.js";const N=r.h4`
font-size:${t.fontSizes.m};
font-weight: 400;
font-family:"Segoe-Regular";
color:${t.colors.grey}
`,V=r.div`
width: ${t.breakpoints.mobile}px;
display:flex;
flex-direction:column;
margin-top:8px;
`,O=r.div`
width: 100%;
height:200px;
margin-top:24px;
margin-bottom:24px;
position: relative;
background-color:#EFEFEF;
`,W=r.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`,q=r.img`
width:100%;
height:100%;
object-fit: cover;

`,G=r.button`
position: absolute;
top:12px;
right:12px;
color:"white"

`,Q=r.input`
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
`,J=r.textarea`
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
`,j=r.label`
font-family:'Segoe-SemiBold';
font-size: ${t.fontSizes.l};
font-weight: 600;
color: ${t.colors.main};
`,K=r.p`
margin-left:auto;
font-family:'Segoe-Regular';
font-size:${t.fontSizes.m};
font-weight:400;
color:${t.colors.grey};
`,X={value:"",rows:1,maxRows:5,maxLength:120,lineHeight:40},Y=()=>{const[s,h]=n.useState(!1),u=T(),[l,y]=n.useState(null),[m,f]=n.useState(null),[g,C]=n.useState(""),p=n.useRef(null),[a,S]=n.useState(X),x=A();n.useEffect(()=>{if(!l)return f(void 0);const o=URL.createObjectURL(l);return f(o),()=>URL.revokeObjectURL(o)},[l]);const v=n.useCallback(o=>{const{maxLength:c,maxRows:k,lineHeight:z}=a,i=o.target;i.style.height="auto";const R=i.scrollHeight,B=Math.ceil(R/z),L=Math.min(B,k);i.value.length>c&&(i.value=i.value.substring(0,c)),S(F=>({...F,value:i.value,rows:L})),i.scrollTop=0},[a]),b=n.useCallback(()=>{p.current.click()},[]),w=n.useCallback(o=>{if(o.target.files[0]){if(o.target.files[0].size>16e13)return d.warn("file is too large");if(o.target.files[0].type==="image/jpeg"||o.target.files[0].type==="image/png"){y(o.target.files[0]);return}return d.warn("wrong file type")}},[]),$=n.useCallback(async()=>{const o=new FormData;if(l&&o.append("image",l),o.append("title",g),o.append("description",a.value),!a.value||!g)return d.warn("fill all the fields");h(!0);const c=await u(E(o));c.meta.requestStatus==="fulfilled"?(d.success("channel created"),h(!1),x(`/channels/${c.payload.id}`)):(h(!1),d.error(c.error.message))},[g,u,x,l,a.value]);return e.jsxs(V,{children:[e.jsxs(e.Fragment,{children:["  ",e.jsx(N,{children:"Create your own channel from below"}),e.jsx(O,{children:m?e.jsxs(e.Fragment,{children:[e.jsx(q,{src:m,alt:"channel-image"}),!s&&e.jsxs(e.Fragment,{children:["  ",e.jsx(G,{onClick:b,type:"button",children:e.jsx(U,{})}),e.jsx("input",{type:"file",ref:p,onChange:w,style:{display:"none"}})]})]}):e.jsxs(W,{children:[e.jsx("button",{type:"button",children:e.jsx(H,{onClick:b,size:100,color:"#909090"})}),!s&&e.jsx("input",{type:"file",ref:p,onChange:w,style:{display:"none"}})]})}),e.jsxs(j,{children:["Channel Name",e.jsx(Q,{disabled:s,type:"text",name:"name",value:g,onChange:o=>C(o.target.value),placeholder:"Channel name"})]}),e.jsxs(j,{children:["Description",e.jsx(J,{disabled:s,name:"description",rows:a.rows,value:a.value,onChange:v,maxLength:a.maxLength,placeholder:"Write here..."})]}),e.jsxs(K,{children:[a.value.length,"/",a.maxLength]}),e.jsx(D,{disabled:s,onClick:$,text:s?"Wait...":"Create",textSize:t.fontSizes.m,color:t.colors.white,width:"100%",height:`${t.spacing[12]}px`,gradient:t.colors.mainBtnBgr,hoverGradient:t.colors.accentBtnBgr,border:t.border.main,borderRadius:t.radii.main,marginTop:"150px",marginBottom:"auto",type:"button"})]}),s&&e.jsx(I,{})]})},re=()=>e.jsxs(P,{children:[e.jsx(M,{title:"Create channel",goBack:!0}),e.jsx(Y,{})]});export{re as default};
