import{n as t,t as e,P as g,u as y,d as $,r as a,y as E,j as s,z as v,A as w,B as F,D as B,C as M}from"./index-38c3d544.js";import{d as A,C as I}from"./ChanelList-38485b2e.js";import{H as R}from"./Header-7968c67f.js";import{G as V}from"./iconBase-95557f32.js";import"./index.esm-cc93560e.js";function D(r){return V({tag:"svg",attr:{version:"1.1",id:"search",x:"0px",y:"0px",viewBox:"0 0 24 24",style:"enable-background:new 0 0 24 24;"},child:[{tag:"g",attr:{},child:[{tag:"path",attr:{d:`M20.031,20.79c0.46,0.46,1.17-0.25,0.71-0.7l-3.75-3.76c1.27-1.41,2.04-3.27,2.04-5.31
		c0-4.39-3.57-7.96-7.96-7.96s-7.96,3.57-7.96,7.96c0,4.39,3.57,7.96,7.96,7.96c1.98,0,3.81-0.73,5.21-1.94L20.031,20.79z
		 M4.11,11.02c0-3.84,3.13-6.96,6.96-6.96c3.84,0,6.96,3.12,6.96,6.96c0,3.84-3.12,6.96-6.96,6.96C7.24,17.98,4.11,14.86,4.11,11.02
		z`}}]}]})(r)}const G=t.div`
  width: ${e.breakpoints.mobile}px;
  display:flex;
  align-items:center;
  margin-top:8px;
`,H=t.div`
position:relative;
  flex: 1;
`,T=t.div`
position:absolute;
top:8px;
left:8px;
color:${e.colors.grey};
`;t.div`
position:absolute;
top:11px;
right:11px;
color:#4C4C4C;
&:hover{
  cursor: pointer;
}
`;t.div`
position:relative;
`;const O=t.input`
width:100%;
height:40px;
padding-left:32px;
padding-right:32px;
font-size:${e.fontSizes.m};
font-weight: 400;
font-family:"Segoe-Regular";
border: ${e.border.main};
border-radius: ${e.radii.main};
`;t.div`
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
`;t.div`
font-size:${e.fontSizes.m};
font-family:"Inter-Regular";
&:hover{
 color:${e.colors.accent};
 font-weight:600;
 cursor: pointer;
}
`;t.ul`
width:100%;
position:absolute;
border-radius:${e.radii.main};
box-shadow:${e.shadows.main};
background-color:${e.colors.white};
z-index:1;
`;t.li`
position: relative;
padding:8px;
height:40px;
&:hover{
  cursor: pointer;
}
`;t.div`
position:absolute;
color:${e.colors.grey};
top:8px;
right:8px;
&:hover{
  cursor: pointer;
}
`;t.button`
margin:0;
`;const L=({handleOnChange:r,setSearchList:d,setSearchValue:c})=>{const l=y(),h=$(i=>i.filter);a.useEffect(()=>{h!==""&&(d(!0),c(h))},[]);const p=a.useCallback(i=>{r(i),l(E(i.target.value))},[l,r]);return s.jsx(G,{children:s.jsxs(H,{children:[s.jsx(T,{children:s.jsx(D,{size:24})}),s.jsx(O,{autoFocus:!0,value:h,onChange:p,type:"text",placeholder:"Search"})]})})};L.propTypes={handleOnChange:g.func,setSearchValue:g.func,filter:g.string,setSearchList:g.func};const U=()=>{const{channels:r,isLoading:d,count:c,searchListChannels:l}=$(n=>n.channels),[h,p]=a.useState(1),[i,C]=a.useState(1),[u,f]=a.useState(!1),[x,b]=a.useState(""),o=y(),j=A(n=>{if(n.target.value.trim()===x)return;const m=n.target.value.trim().toLowerCase();if(b(m),m==="")return p(1),o(v()),f(!1);if(m!=="")return C(1),o(w()),f(!0)},1e3),S=a.useCallback(async()=>{u?await o(F({page:i,search:x})):u||await o(B(h))},[o,h,u,i,x]);a.useEffect(()=>()=>{o(v()),o(w())},[o]),a.useEffect(()=>{S()},[S]);const k=a.useCallback(()=>{l.length!==c&&C(n=>n+1)},[c,l]),z=a.useCallback(()=>{r.length!==c&&p(n=>n+1)},[r,c]);let P=u?l:r;return s.jsxs(M,{children:[s.jsx(R,{title:"Channels",goBack:!1,profileLink:!0,addChannelLink:!0}),s.jsx(L,{setSearchList:f,setSearchValue:b,handleOnChange:j,isLoading:d}),s.jsx(I,{channels:P,isLoading:d,ForwardPage:z,ForwardSearchPage:k,notFound:u})]})};export{U as default};
