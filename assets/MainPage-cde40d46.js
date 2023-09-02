import{n as t,t as e,P as f,u as L,d as $,r as a,j as r,z as B,f as b,A as S,B as M,D as A,C as I,E as R}from"./index-4d3dbc70.js";import{d as V,C as D}from"./ChanelList-90b13efe.js";import{H as G}from"./Header-99d62aef.js";import{G as H}from"./iconBase-7c86fed3.js";import"./index.esm-88bc25a3.js";function O(n){return H({tag:"svg",attr:{version:"1.1",id:"search",x:"0px",y:"0px",viewBox:"0 0 24 24",style:"enable-background:new 0 0 24 24;"},child:[{tag:"g",attr:{},child:[{tag:"path",attr:{d:`M20.031,20.79c0.46,0.46,1.17-0.25,0.71-0.7l-3.75-3.76c1.27-1.41,2.04-3.27,2.04-5.31
		c0-4.39-3.57-7.96-7.96-7.96s-7.96,3.57-7.96,7.96c0,4.39,3.57,7.96,7.96,7.96c1.98,0,3.81-0.73,5.21-1.94L20.031,20.79z
		 M4.11,11.02c0-3.84,3.13-6.96,6.96-6.96c3.84,0,6.96,3.12,6.96,6.96c0,3.84-3.12,6.96-6.96,6.96C7.24,17.98,4.11,14.86,4.11,11.02
		z`}}]}]})(n)}const T=t.div`
  width: ${e.breakpoints.mobile}px;
  display:flex;
  align-items:center;
  margin-top:8px;
`,q=t.div`
position:relative;
  flex: 1;
`,J=t.div`
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
`;const K=t.input`
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
`;const j=({handleOnChange:n,setSearchList:u,setSearchValue:l})=>{const h=L(),o=$(c=>c.filter);return a.useEffect(()=>{o!==""&&(u(!0),l(o))},[]),r.jsx(T,{children:r.jsxs(q,{children:[r.jsx(J,{children:r.jsx(O,{size:24})}),r.jsx(K,{autoFocus:!0,value:o,onChange:c=>{n(c),h(B(c.target.value))},type:"text",placeholder:"Search"})]})})};j.propTypes={handleOnChange:f.func,setSearchValue:f.func,filter:f.string,setSearchList:f.func};const Y=()=>{const{channels:n,isLoading:u,count:l,searchListChannels:h}=$(i=>i.channels),[o,c]=a.useState(1),[p,v]=a.useState(1),[d,g]=a.useState(!1),[x,w]=a.useState(""),[k,m]=a.useState(!1),s=L(),z=V(async i=>{if(i.target.value===x)return;m(!0);const C=i.target.value.trim().toLowerCase();if(w(C),C==="")return c(1),s(b()),g(!1);if(C!=="")return v(1),s(S()),g(!0)},1500),y=a.useCallback(async()=>{m(!0),d?await s(M({page:p,search:x})):d||await s(A(o)),m(!1)},[s,o,d,p,x]);a.useEffect(()=>()=>{n.length>0&&s(b()),h.length>0&&s(S())},[]),a.useEffect(()=>(y(),()=>{o!==1&&s(b()),p!==1&&s(S())}),[s,o,y,p]);const P=a.useCallback(()=>{h.length!==l&&v(i=>i+1)},[l,h]),E=a.useCallback(()=>{n.length!==l&&c(i=>i+1)},[n,l]);let F=d?h:n;return r.jsxs(I,{children:[r.jsx(G,{title:"Channels",goBack:!1,profileLink:!0,addChannelLink:!0}),r.jsx(j,{setSearchList:g,setSearchValue:w,handleOnChange:z,isLoading:u}),k?r.jsx(R,{}):r.jsx(D,{channels:F,isLoading:u,ForwardPage:E,ForwardSearchPage:P,notFound:d})]})};export{Y as default};
