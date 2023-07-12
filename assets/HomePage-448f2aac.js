import{n as r,t as e,P as i,j as t,u as h}from"./index-52b76177.js";import{C as p}from"./Container-8829d741.js";const x=r.div`
  background-color: ${e.colors.mainBgr};
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`,m=r.div`
  margin-top: 169px;
  display: flex;
  flex-direction: column;
  align-items: center;
`,u=r.h1`
  color: ${e.colors.main};
  font-family: 'Segoe-Bold';
  font-size: ${e.fontSizes.xxl};
  padding-top: ${e.spacing[8]}px;
  padding-bottom: ${e.spacing[2]}px;
`,C=r.h4`
  color: ${e.colors.second};
  font-family: 'Segoe-Regular';
  font-size: ${e.fontSizes.m};
  padding: 0;
`,s=({width:o,height:n})=>t.jsxs("svg",{width:o,height:n,viewBox:"0 0 160 160",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t.jsx("path",{d:"M78.5 1.1547C79.7376 0.440171 81.2624 0.440169 82.5 1.1547L147.782 38.8453C149.02 39.5598 149.782 40.8803 149.782 42.3094V117.691C149.782 119.12 149.02 120.44 147.782 121.155L82.5 158.845C81.2624 159.56 79.7376 159.56 78.5 158.845L13.218 121.155C11.9804 120.44 11.218 119.12 11.218 117.691V42.3094C11.218 40.8803 11.9804 39.5598 13.218 38.8453L78.5 1.1547Z",fill:"#3459FE"}),t.jsx("path",{opacity:"0.5",d:"M78.6979 87.4503C79.8312 86.8783 81.1689 86.8783 82.3022 87.4503L127.261 110.14C130.191 111.618 130.191 115.803 127.261 117.282L82.3022 139.971C81.1689 140.543 79.8312 140.543 78.6979 139.971L33.7395 117.282C30.8091 115.803 30.8091 111.618 33.7395 110.14L78.6979 87.4503Z",fill:"white"}),t.jsx("path",{opacity:"0.5",fillRule:"evenodd",clipRule:"evenodd",d:"M80.5649 15.1227C79.7165 15.0152 78.8415 15.1807 78.0753 15.619L33.7086 41.0034C32.4634 41.7159 31.6951 43.0407 31.6951 44.4753V95.1815C31.6951 96.6162 32.4634 97.941 33.7086 98.6534L78.0753 124.038C78.8415 124.476 79.7165 124.642 80.5649 124.534V15.1227Z",fill:"#4495AE"}),t.jsx("path",{opacity:"0.5",fillRule:"evenodd",clipRule:"evenodd",d:"M80.5648 124.534C81.4131 124.641 82.2881 124.476 83.0543 124.037L127.421 98.6531C128.666 97.9406 129.435 96.6158 129.435 95.1812L129.435 44.475C129.435 43.0403 128.666 41.7155 127.421 41.0031L83.0543 15.6187C82.2881 15.1803 81.4131 15.0149 80.5648 15.1223L80.5648 124.534Z",fill:"#EEEEEE"})]});s.propTypes={width:i.string.isRequired,height:i.string.isRequired};const f=r.button`
  color: ${o=>o.color};
  font-size: ${o=>o.textSize};
  width: ${o=>o.width};
  height: ${o=>o.height};
  background: ${o=>o.gradient?o.gradient:o.backgroundColor};
  border: ${o=>o.border};
  border-radius: ${o=>o.borderRadius};
  margin-bottom: ${o=>o.marginBottom};
  margin-top: ${o=>o.marginTop};

  &:hover {
    background: ${o=>o.hoverGradient?o.hoverGradient:o.hoverBackgroundColor};
    color: ${o=>o.hoverColor};
  }
`,a=({text:o,gradient:n,hoverBackgroundColor:d,hoverGradient:l,hoverColor:c,...g})=>t.jsx(f,{gradient:n,hoverGradient:l,hoverBackgroundColor:d,hoverColor:c,...g,children:o});a.propTypes={text:i.string,gradient:i.string,hoverBackgroundColor:i.string,hoverGradient:i.string,hoverColor:i.string};const v=()=>{const o=h();return t.jsx(a,{text:"Get started",textSize:e.fontSizes.m,color:e.colors.white,width:"342px",height:`${e.spacing[12]}px`,gradient:e.colors.mainBtnBgr,hoverGradient:e.colors.accentBtnBgr,border:e.border.main,borderRadius:e.radii.main,marginBottom:"100px",onClick:()=>o("/login")})},L=()=>t.jsx(p,{children:t.jsxs(x,{children:[t.jsxs(m,{children:[t.jsx(s,{width:"160",height:"160"}),t.jsx(u,{children:"Talk"}),t.jsx(C,{children:"Connect. Chat. Discover."})]}),t.jsx(v,{})]})});export{L as default};
