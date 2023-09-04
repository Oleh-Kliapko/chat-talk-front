import{n as a,t as e,P as g,u as L,e as $,r as t,z as M,j as s,A as w,B as y,D as A,E as I,C as R,d as V}from"./index-ea31e3ed.js";import{d as D,C as G}from"./ChanelList-1054a412.js";import{H}from"./Header-7e87de24.js";import{G as N}from"./iconBase-5127143f.js";import"./index.esm-0e42680c.js";function T(r){return N({tag:"svg",attr:{version:"1.1",id:"search",x:"0px",y:"0px",viewBox:"0 0 24 24",style:"enable-background:new 0 0 24 24;"},child:[{tag:"g",attr:{},child:[{tag:"path",attr:{d:`M20.031,20.79c0.46,0.46,1.17-0.25,0.71-0.7l-3.75-3.76c1.27-1.41,2.04-3.27,2.04-5.31
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
`;const j=({handleOnChange:r,setSearchList:c,setSearchValue:h})=>{const l=L(),u=$(i=>i.filter);t.useEffect(()=>{u!==""&&(c(!0),h(u))},[]);const d=t.useCallback(i=>{r(i),l(M(i.target.value))},[l,r]);return s.jsx(O,{children:s.jsxs(q,{children:[s.jsx(J,{children:s.jsx(T,{size:24})}),s.jsx(K,{autoFocus:!0,value:u,onChange:d,type:"text",placeholder:"Search"})]})})};j.propTypes={handleOnChange:g.func,setSearchValue:g.func,filter:g.string,setSearchList:g.func};const Z=()=>{const{channels:r,count:c,searchListChannels:h}=$(n=>n.channels),[l,u]=t.useState(1),[d,i]=t.useState(1),[p,f]=t.useState(!1),[x,S]=t.useState(""),[k,m]=t.useState(!1),[z,C]=t.useState(!1),o=L(),P=D(n=>{if(n.target.value.trim()===x)return;const b=n.target.value.trim().toLowerCase();if(S(b),b==="")return u(1),o(w()),f(!1);if(b!=="")return i(1),o(y()),f(!0)},1e3),v=t.useCallback(async()=>{p?(d===1?m(!0):C(!0),await o(A({page:d,search:x}))):p||(l===1?m(!0):C(!0),await o(I(l))),m(!1),C(!1)},[o,l,p,d,x]);t.useEffect(()=>()=>{o(w()),o(y())},[o]),t.useEffect(()=>{v()},[v]);const E=t.useCallback(()=>{h.length!==c&&i(n=>n+1)},[c,h]),F=t.useCallback(()=>{r.length!==c&&u(n=>n+1)},[r,c]);let B=p?h:r;return s.jsxs(R,{children:[s.jsx(H,{title:"Channels",goBack:!1,profileLink:!0,addChannelLink:!0}),s.jsx(j,{setSearchList:f,setSearchValue:S,handleOnChange:P}),k?s.jsx(V,{}):s.jsx(G,{channels:B,isLoading:z,ForwardPage:F,ForwardSearchPage:E,notFound:p})]})};export{Z as default};
