import{n as r,t,r as n,u as T,a as A,Q as d,b as E,j as e,d as I,C as P}from"./index-1e111e26.js";import{a as H}from"./index.esm-c6e6b876.js";import{P as U}from"./Pencil-3c99dfdc.js";import{B as D}from"./BtnTemplate-8d2b6c62.js";import{H as M}from"./Header-d967c98c.js";import"./iconBase-28b4c2bc.js";import"./index.esm-673c5793.js";const N=r.h4`
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
`,X={value:"",rows:1,maxRows:5,maxLength:120,lineHeight:40},Y=()=>{const[s,p]=n.useState(!1),u=T(),[c,y]=n.useState(null),[m,f]=n.useState(null),[g,C]=n.useState(""),h=n.useRef(null),[a,S]=n.useState(X),x=A();n.useEffect(()=>{if(!c)return f(void 0);const o=URL.createObjectURL(c);return f(o),()=>URL.revokeObjectURL(o)},[c]);const v=n.useCallback(o=>{const{maxLength:i,maxRows:k,lineHeight:z}=a,l=o.target;l.style.height="auto";const R=l.scrollHeight,B=Math.ceil(R/z),L=Math.min(B,k);l.value.length>i&&(l.value=l.value.substring(0,i)),S(F=>({...F,value:l.value,rows:L})),l.scrollTop=0},[a]),b=n.useCallback(()=>{h.current.click()},[]),w=n.useCallback(o=>{if(o.target.files[0]){if(o.target.files[0].size>16e13)return d.warn("file is too large");if(o.target.files[0].type==="image/jpeg"||o.target.files[0].type==="image/png"){y(o.target.files[0]);return}return d.warn("wrong file type")}},[]),$=n.useCallback(async()=>{p(!0);const o=new FormData;if(c&&o.append("image",c),o.append("title",g),o.append("description",a.value),!a.value||!g)return d.warn("fill all the fields");const i=await u(E(o));console.log("response",i),i.meta.requestStatus==="fulfilled"?(d.success("channel created"),p(!1),x(`/channels/${i.payload.id}`)):(p(!1),d.error(i.error.message))},[g,u,x,c,a.value]);return e.jsxs(V,{children:[e.jsxs(e.Fragment,{children:["  ",e.jsx(N,{children:"Create your own channel from below"}),e.jsx(O,{children:m?e.jsxs(e.Fragment,{children:[e.jsx(q,{src:m,alt:"channel-image"}),!s&&e.jsxs(e.Fragment,{children:["  ",e.jsx(G,{onClick:b,type:"button",children:e.jsx(U,{})}),e.jsx("input",{type:"file",ref:h,onChange:w,style:{display:"none"}})]})]}):e.jsxs(W,{children:[e.jsx("button",{type:"button",children:e.jsx(H,{onClick:b,size:100,color:"#909090"})}),!s&&e.jsx("input",{type:"file",ref:h,onChange:w,style:{display:"none"}})]})}),e.jsxs(j,{children:["Channel Name",e.jsx(Q,{disabled:s,type:"text",name:"name",value:g,onChange:o=>C(o.target.value),placeholder:"Channel name"})]}),e.jsxs(j,{children:["Description",e.jsx(J,{disabled:s,name:"description",rows:a.rows,value:a.value,onChange:v,maxLength:a.maxLength,placeholder:"Write here..."})]}),e.jsxs(K,{children:[a.value.length,"/",a.maxLength]}),e.jsx(D,{disabled:s,onClick:$,text:s?"Wait...":"Create",textSize:t.fontSizes.m,color:t.colors.white,width:"100%",height:`${t.spacing[12]}px`,gradient:t.colors.mainBtnBgr,hoverGradient:t.colors.accentBtnBgr,border:t.border.main,borderRadius:t.radii.main,marginTop:"150px",marginBottom:"auto",type:"button"})]}),s&&e.jsx(I,{})]})},re=()=>e.jsxs(P,{children:[e.jsx(M,{title:"Create channel",goBack:!0}),e.jsx(Y,{})]});export{re as default};
