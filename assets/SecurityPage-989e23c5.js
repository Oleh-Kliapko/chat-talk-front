import{n as e,t as o,b as r,j as t,C as n}from"./index-cb02a06c.js";import{H as s}from"./Header-2efa7ba4.js";import{I as a}from"./index.esm-167d9da0.js";import"./iconBase-4c510358.js";const c=e.div`
width: ${o.breakpoints.mobile}px;
display:flex;
align-items:center;
margin-top:12px;
`,l=e.ul`
margin-top:12px;
width:100%;
`,m=e.li`
width:100%;
display:flex;
justify-content:space-between;
align-items:center;
margin-top:0;
&:not(:first-of-type){
    margin-top:12px;
}
&:hover{
    cursor: pointer;
    scale:1.01;
}
`,p=e.div`
display:flex;
flex-direction:column;
`,x=e.p`
/* margin-top:auto;
margin-bottom:auto; */
font-family: 'Segoe-Regular';
  font-size: ${o.fontSizes.m};
  font-weight: 400;
  color: ${o.colors.main};
`,d=e.p`
/* margin-top:auto;
margin-bottom:auto; */
font-family: 'Segoe-Regular';
  font-size: ${o.fontSizes.m};
  font-weight: 400;
  color: ${o.colors.grey};
`,g=()=>{const i=r();return t.jsx(c,{children:t.jsx(l,{children:t.jsxs(m,{onClick:()=>i("/change-password"),children:[t.jsxs(p,{children:[t.jsx(x,{children:"Password"}),t.jsx(d,{children:"***********"})]}),t.jsx(a,{size:24,color:o.colors.grey})]})})})},j=()=>t.jsxs(n,{children:[t.jsx(s,{title:"Security",goBack:!0}),t.jsx(g,{})]});export{j as default};
