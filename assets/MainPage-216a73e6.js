import{G as x,n as t,t as e,P as f,e as p,m as b,Q as m,o as h,p as C,j as n,r as d,q as v,w,C as y,H as $,x as S}from"./index-f4f1d1b9.js";function j(o){return x({tag:"svg",attr:{version:"1.1",id:"search",x:"0px",y:"0px",viewBox:"0 0 24 24",style:"enable-background:new 0 0 24 24;"},child:[{tag:"g",attr:{},child:[{tag:"path",attr:{d:`M20.031,20.79c0.46,0.46,1.17-0.25,0.71-0.7l-3.75-3.76c1.27-1.41,2.04-3.27,2.04-5.31
		c0-4.39-3.57-7.96-7.96-7.96s-7.96,3.57-7.96,7.96c0,4.39,3.57,7.96,7.96,7.96c1.98,0,3.81-0.73,5.21-1.94L20.031,20.79z
		 M4.11,11.02c0-3.84,3.13-6.96,6.96-6.96c3.84,0,6.96,3.12,6.96,6.96c0,3.84-3.12,6.96-6.96,6.96C7.24,17.98,4.11,14.86,4.11,11.02
		z`}}]}]})(o)}const z=t.div`
  width: ${e.breakpoints.mobile}px;
  display:flex;
  align-items:center;
  margin-top:8px;
`,k=t.div`
position:relative;
  flex: 1;
`,L=t.div`
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
`;const P=t.input`
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
`;const u=({page:o})=>{const s=p(),r=b(a=>{const i=a.target.value.trim().toLowerCase();if(m.success(i),i==="")return s(h(o));if(i.length>0)return s(C({page:o,search:i}))},1e3);return n.jsx(z,{children:n.jsxs(k,{children:[n.jsx(L,{children:n.jsx(j,{size:24})}),n.jsx(P,{onChange:r,type:"text",placeholder:"Search"})]})})};u.propTypes={page:f.number};const B=()=>{const[o,s]=d.useState(1),{channels:r,isLoading:a,count:i}=v(l=>l.channels),c=p();d.useEffect(()=>(c(h(o)),()=>{o!==1&&c(w())}),[c,o]);const g=d.useCallback(()=>{r.length!==i&&s(l=>l+1)},[r.length,i]);return n.jsxs(y,{children:[n.jsx($,{title:"Channels",goBack:!1,profileLink:!0,addChannelLink:!0}),n.jsx(u,{page:o}),n.jsx(S,{channels:r,isLoading:a,ForwardPage:g})]})};export{B as default};
