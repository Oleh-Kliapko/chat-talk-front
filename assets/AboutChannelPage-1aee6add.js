import{n as s,t as e,P as o,a as f,j as t,u as C,r as l,f as z,d as h,h as B,Q as g,C as $}from"./index-25aeade8.js";import{B as u}from"./BtnTemplate-237e5ffc.js";import{a as v}from"./index.esm-d8e95391.js";import{S as k}from"./SmallModal-0f9e627b.js";import{C as I}from"./CreateModal-26d74fbc.js";import"./iconBase-79bdc03a.js";const T=s.div`
width: ${e.breakpoints.mobile}px;
display:flex;
flex-direction:column
`,D=s.div`
width: 100%;
height:200px;
margin-top:64px;
margin-bottom:18px;
position: relative;
`,M=s.img`
width:100%;
height:100%;
object-fit: cover;
`,R=s.button`
position:absolute;
top:12px;
left:12px;
`,x=s.h4`
margin-top:6px;
font-family:'Segoe-Bold';
font-size: ${e.fontSizes.m};
font-weight: 700;
color: ${e.colors.main};
`,P=s.p`
margin-bottom:16px;
font-family:'Segoe-Regular';
font-size: ${e.fontSizes.s};
font-weight: 400;
color: ${e.colors.grey};
`,A=s.p`
font-family:'Segoe-Regular';
font-size: ${e.fontSizes.m};
font-weight: 400;
color: ${e.colors.main};
`,b=({onOpen:r,currentChannel:n,owner:c})=>{const a=f();return t.jsxs(T,{children:[t.jsxs(D,{children:[t.jsx(M,{src:n.image,alt:"channel-image"}),t.jsx(R,{onClick:()=>a(-1),children:t.jsx(v,{size:24,fill:"#fff"})})]}),t.jsx(x,{children:n.title}),t.jsxs(P,{children:["by ",n.owner.username]}),t.jsx(x,{children:"Description"}),t.jsx(A,{children:n.description}),c&&t.jsxs(t.Fragment,{children:[" ",t.jsx(u,{onClick:()=>a(`/edit-channel/${n.id}`),text:"Edit channel",textSize:e.fontSizes.m,color:e.colors.white,width:"100%",height:`${e.spacing[12]}px`,gradient:e.colors.mainBtnBgr,hoverGradient:e.colors.accentBtnBgr,border:e.border.main,borderRadius:e.radii.main,marginTop:"245px",type:"button"}),t.jsx(u,{onClick:r,text:"Delete channel",textSize:e.fontSizes.m,color:e.colors.main,width:"100%",height:`${e.spacing[12]}px`,border:e.border.main,borderRadius:e.radii.main,marginTop:"8px",marginBottom:"auto",type:"button"})]})]})};b.propTypes={onOpen:o.func,currentChannel:o.shape({owner:o.exact({id:o.number,email:o.string,username:o.string}),id:o.number,title:o.string,description:o.string,crearedAt:o.string,image:o.string}),owner:o.bool};const Q=()=>{const r=C(),n=f(),[c,a]=l.useState(!1),{channelId:d}=z(),{userId:j}=h(i=>i.auth.user),{currentChannel:m}=h(i=>i.channels),w=l.useCallback(()=>{a(!0)},[]),p=l.useCallback(()=>{a(!1)},[]),S=l.useCallback(async()=>{const i=await r(B(d));i.meta.requestStatus==="fulfilled"?(g.success("channel was successfully deleted"),n("/channels")):g.error(i.error.message)},[d,r,n]),y=j.toString()===m.owner.id.toString();return t.jsxs($,{children:[t.jsx(b,{owner:y,currentChannel:m,onOpen:w}),c&&t.jsx(I,{onClose:p,children:t.jsx(k,{title:"Delete the channel?",subtitle:"You will not be able to recover it",yes:S,no:p})})]})};export{Q as default};
