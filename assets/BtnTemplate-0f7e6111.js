import{n as t,t as e,y as c,P as r,j as g}from"./index-d0b82952.js";const m=t.button`
  color: ${o=>o.color};
  font-size: ${o=>o.textSize};
  width: ${o=>o.width};
  height: ${o=>o.height};
  background: ${o=>o.gradient?o.gradient:o.backgroundColor};
  border: ${o=>o.border};
  border-radius: ${o=>o.borderRadius};
  margin-bottom: ${o=>o.marginBottom};
  margin-top: ${o=>o.marginTop};
  transition: transform 0.5s ease;

  &:hover {
    background: ${o=>o.hoverGradient?o.hoverGradient:o.hoverBackgroundColor};
    color: ${o=>o.hoverColor};
    transform: scale(1.05);
  }
`,f=t.div`
  display: flex;
  gap: ${e.spacing[4]}px;
  font-family: 'Segoe-Semibold';
  font-size: ${e.fontSizes.s};
`,u=t(c)`
  color: ${e.colors.accent};
`,p=t.div`
  display: flex;
  justify-content: end;
  color: ${e.colors.main};
  font-family: 'Segoe-Regular';
  font-size: ${e.fontSizes.m};
  &:hover{
    cursor:pointer
  }
`,h=({disabled:o,text:n,gradient:i,hoverBackgroundColor:a,hoverGradient:s,hoverColor:d,...l})=>g.jsx(m,{disabled:o,gradient:i,hoverGradient:s,hoverBackgroundColor:a,hoverColor:d,...l,children:n});h.propTypes={text:r.string,gradient:r.string,hoverBackgroundColor:r.string,hoverGradient:r.string,hoverColor:r.string,disabled:r.bool};export{h as B,p as F,f as R,u as a};
