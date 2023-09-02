import{n as a,t as e,P as g,u as L,d as $,r as s,j as r,z as B,e as x,A as m,B as M,D as A,C as I,E as R}from"./index-8730f2de.js";import{d as V,C as D}from"./ChanelList-fbd74a71.js";import{H as G}from"./Header-0de4a944.js";import{G as H}from"./iconBase-117ae77e.js";import"./index.esm-8c9e0b93.js";function O(n){return H({tag:"svg",attr:{version:"1.1",id:"search",x:"0px",y:"0px",viewBox:"0 0 24 24",style:"enable-background:new 0 0 24 24;"},child:[{tag:"g",attr:{},child:[{tag:"path",attr:{d:`M20.031,20.79c0.46,0.46,1.17-0.25,0.71-0.7l-3.75-3.76c1.27-1.41,2.04-3.27,2.04-5.31
		c0-4.39-3.57-7.96-7.96-7.96s-7.96,3.57-7.96,7.96c0,4.39,3.57,7.96,7.96,7.96c1.98,0,3.81-0.73,5.21-1.94L20.031,20.79z
		 M4.11,11.02c0-3.84,3.13-6.96,6.96-6.96c3.84,0,6.96,3.12,6.96,6.96c0,3.84-3.12,6.96-6.96,6.96C7.24,17.98,4.11,14.86,4.11,11.02
		z`}}]}]})(n)}const T=a.div`
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
`;const j=({handleOnChange:n,setSearchList:u,setSearchValue:l})=>{const h=L(),o=$(i=>i.filter);return s.useEffect(()=>{o!==""&&(u(!0),l(o))},[]),r.jsx(T,{children:r.jsxs(q,{children:[r.jsx(J,{children:r.jsx(O,{size:24})}),r.jsx(K,{autoFocus:!0,value:o,onChange:i=>{n(i),h(B(i.target.value))},type:"text",placeholder:"Search"})]})})};j.propTypes={handleOnChange:g.func,setSearchValue:g.func,filter:g.string,setSearchList:g.func};const Y=()=>{const{channels:n,isLoading:u,count:l,searchListChannels:h}=$(c=>c.channels),[o,i]=s.useState(1),[p,v]=s.useState(1),[d,C]=s.useState(!1),[b,w]=s.useState(""),[k,S]=s.useState(!1),t=L(),z=V(async c=>{S(!0);const f=c.target.value.trim().toLowerCase();if(f!==b){if(w(f),t(x()),t(m()),v(1),i(1),f==="")return C(!1);if(f!=="")return C(!0)}},1500),y=s.useCallback(async()=>{S(!0),d&&await t(M({page:p,search:b})),d||await t(A(o)),S(!1)},[t,o,d,p,b]);s.useEffect(()=>(t(x()),t(m()),()=>{t(x()),t(m())}),[t]),s.useEffect(()=>(y(),()=>{o!==1&&t(x()),p!==1&&t(m())}),[t,o,y,p]);const P=s.useCallback(()=>{h.length!==l&&v(c=>c+1)},[l,h]),E=s.useCallback(()=>{n.length!==l&&i(c=>c+1)},[n,l]);let F=d?h:n;return r.jsxs(I,{children:[r.jsx(G,{title:"Channels",goBack:!1,profileLink:!0,addChannelLink:!0}),r.jsx(j,{setSearchList:C,setSearchValue:w,handleOnChange:z,isLoading:u}),k?r.jsx(R,{}):r.jsx(D,{channels:F,isLoading:u,ForwardPage:E,ForwardSearchPage:P,notFound:d})]})};export{Y as default};
