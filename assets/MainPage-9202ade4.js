import{n as a,t as e,P as g,u as L,d as $,r as t,y as B,j as s,z as w,A as y,B as M,D as A,C as I,E as R}from"./index-25aeade8.js";import{d as V,C as D}from"./ChanelList-2d14bd96.js";import{H as G}from"./Header-943346db.js";import{G as H}from"./iconBase-79bdc03a.js";import"./index.esm-d8e95391.js";function T(r){return H({tag:"svg",attr:{version:"1.1",id:"search",x:"0px",y:"0px",viewBox:"0 0 24 24",style:"enable-background:new 0 0 24 24;"},child:[{tag:"g",attr:{},child:[{tag:"path",attr:{d:`M20.031,20.79c0.46,0.46,1.17-0.25,0.71-0.7l-3.75-3.76c1.27-1.41,2.04-3.27,2.04-5.31
		c0-4.39-3.57-7.96-7.96-7.96s-7.96,3.57-7.96,7.96c0,4.39,3.57,7.96,7.96,7.96c1.98,0,3.81-0.73,5.21-1.94L20.031,20.79z
		 M4.11,11.02c0-3.84,3.13-6.96,6.96-6.96c3.84,0,6.96,3.12,6.96,6.96c0,3.84-3.12,6.96-6.96,6.96C7.24,17.98,4.11,14.86,4.11,11.02
		z`}}]}]})(r)}const O=a.div`
  width: ${e.breakpoints.mobile}px;
  display:flex;
  align-items:center;
  margin-top:8px;
`,q=a.div`
position:relative;
  flex: 1;
`,J=a.div`
position:absolute;
top:8px;
left:8px;
color:${e.colors.grey};
`;a.div`
position:absolute;
top:11px;
right:11px;
color:#4C4C4C;
&:hover{
  cursor: pointer;
}
`;a.div`
position:relative;
`;const K=a.input`
width:100%;
height:40px;
padding-left:32px;
padding-right:32px;
font-size:${e.fontSizes.m};
font-weight: 400;
font-family:"Segoe-Regular";
border: ${e.border.main};
border-radius: ${e.radii.main};
`;a.div`
width:100px;
position:absolute;
border-radius:${e.radii.main};
box-shadow:${e.shadows.main};
background-color:${e.colors.white};
padding:10px;
display:flex;
flex-direction:column;
gap:16px; 
bottom:-150%;
right:0;
z-index:2;
`;a.div`
font-size:${e.fontSizes.m};
font-family:"Inter-Regular";
&:hover{
 color:${e.colors.accent};
 font-weight:600;
 cursor: pointer;
}
`;a.ul`
width:100%;
position:absolute;
border-radius:${e.radii.main};
box-shadow:${e.shadows.main};
background-color:${e.colors.white};
z-index:1;
`;a.li`
position: relative;
padding:8px;
height:40px;
&:hover{
  cursor: pointer;
}
`;a.div`
position:absolute;
color:${e.colors.grey};
top:8px;
right:8px;
&:hover{
  cursor: pointer;
}
`;a.button`
margin:0;
`;const j=({handleOnChange:r,setSearchList:d,setSearchValue:c})=>{const l=L(),h=$(i=>i.filter);t.useEffect(()=>{h!==""&&(d(!0),c(h))},[]);const p=t.useCallback(i=>{r(i),l(B(i.target.value))},[l,r]);return s.jsx(O,{children:s.jsxs(q,{children:[s.jsx(J,{children:s.jsx(T,{size:24})}),s.jsx(K,{autoFocus:!0,value:h,onChange:p,type:"text",placeholder:"Search"})]})})};j.propTypes={handleOnChange:g.func,setSearchValue:g.func,filter:g.string,setSearchList:g.func};const Y=()=>{const{channels:r,isLoading:d,count:c,searchListChannels:l}=$(n=>n.channels),[h,p]=t.useState(1),[i,b]=t.useState(1),[u,f]=t.useState(!1),[x,S]=t.useState(""),[k,m]=t.useState(!1),o=L(),z=V(async n=>{if(n.target.value===x)return;m(!0);const C=n.target.value.trim().toLowerCase();if(S(C),C==="")return p(1),o(w()),f(!1);if(C!=="")return b(1),o(y()),f(!0)},1500),v=t.useCallback(async()=>{m(!0),u?await o(M({page:i,search:x})):u||await o(A(h)),m(!1)},[o,h,u,i,x]);t.useEffect(()=>()=>{o(w()),o(y())},[o]),t.useEffect(()=>{v()},[v]);const P=t.useCallback(()=>{l.length!==c&&b(n=>n+1)},[c,l]),E=t.useCallback(()=>{r.length!==c&&p(n=>n+1)},[r,c]);let F=u?l:r;return s.jsxs(I,{children:[s.jsx(G,{title:"Channels",goBack:!1,profileLink:!0,addChannelLink:!0}),s.jsx(j,{setSearchList:f,setSearchValue:S,handleOnChange:z,isLoading:d}),k?s.jsx(R,{}):s.jsx(D,{channels:F,isLoading:d,ForwardPage:E,ForwardSearchPage:P,notFound:u})]})};export{Y as default};
