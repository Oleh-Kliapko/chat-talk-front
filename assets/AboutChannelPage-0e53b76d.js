import{n as s,t as e,P as o,b as f,j as t,u as z,r as l,h as B,e as h,i as $,Q as g,C as v}from"./index-acbfb6d2.js";import{B as u}from"./BtnTemplate-2ce34591.js";import{a as k}from"./index.esm-2307de67.js";import{S as I}from"./SmallModal-222d3570.js";import{C as T}from"./CreateModal-330db0a8.js";import"./iconBase-ba99b2ff.js";const D=s.div`
width: ${e.breakpoints.mobile}px;
display:flex;
flex-direction:column
`,M=s.div`
width: 100%;
height:200px;
margin-top:64px;
margin-bottom:18px;
position: relative;
`,R=s.img`
width:100%;
height:100%;
object-fit: cover;
`,P=s.button`
position:absolute;
top:12px;
left:12px;
`,x=s.h4`
margin-top:6px;
font-family:'Segoe-Bold';
font-size: ${e.fontSizes.m};
font-weight: 700;
color: ${e.colors.main};
`,A=s.p`
margin-bottom:16px;
font-family:'Segoe-Regular';
font-size: ${e.fontSizes.s};
font-weight: 400;
color: ${e.colors.grey};
`,E=s.p`
font-family:'Segoe-Regular';
font-size: ${e.fontSizes.m};
font-weight: 400;
color: ${e.colors.main};
`,b=({onOpen:r,currentChannel:n,owner:c})=>{const a=f();return t.jsxs(D,{children:[t.jsxs(M,{children:[t.jsx(R,{src:n.image,alt:"channel-image"}),t.jsx(P,{onClick:()=>a(-1),children:t.jsx(k,{size:24,fill:"#fff"})})]}),t.jsx(x,{children:n.title}),t.jsxs(A,{children:["by ",n.owner.username]}),t.jsx(x,{children:"Description"}),t.jsx(E,{children:n.description}),c&&t.jsxs(t.Fragment,{children:[" ",t.jsx(u,{onClick:()=>a(`/edit-channel/${n.id}`),text:"Edit channel",textSize:e.fontSizes.m,color:e.colors.white,width:"100%",height:`${e.spacing[12]}px`,gradient:e.colors.mainBtnBgr,hoverGradient:e.colors.accentBtnBgr,border:e.border.main,borderRadius:e.radii.main,marginTop:"245px",type:"button"}),t.jsx(u,{onClick:r,text:"Delete channel",textSize:e.fontSizes.m,color:e.colors.main,width:"100%",height:`${e.spacing[12]}px`,border:e.border.main,borderRadius:e.radii.main,marginTop:"8px",marginBottom:"auto",type:"button"})]})]})};b.propTypes={onOpen:o.func,currentChannel:o.shape({owner:o.exact({id:o.number,email:o.string,username:o.string}),id:o.number,title:o.string,description:o.string,crearedAt:o.string,image:o.string}),owner:o.bool};const Q=()=>{const r=z(),n=f(),[c,a]=l.useState(!1),{channelId:d}=B(),{userId:j}=h(i=>i.auth.user),{currentChannel:m,isLoading:w}=h(i=>i.channels),S=l.useCallback(()=>{a(!0)},[]),p=l.useCallback(()=>{a(!1)},[]),y=l.useCallback(async()=>{const i=await r($(d));i.meta.requestStatus==="fulfilled"?(g.success("channel was successfully deleted"),n("/channels")):g.error(i.error.message)},[d,r,n]),C=j.toString()===m.owner.id.toString();return t.jsxs(v,{children:[t.jsx(b,{owner:C,currentChannel:m,onOpen:S}),c&&t.jsx(T,{onClose:p,children:t.jsx(I,{isLoading:w,title:"Delete the channel?",subtitle:"You will not be able to recover it",yes:y,no:p})})]})};export{Q as default};
