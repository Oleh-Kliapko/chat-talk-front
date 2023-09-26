import{n as a,t as i,r as o,q as p,j as r}from"./index-d0b82952.js";const l=a.div`
  position: fixed;
  z-index: 1001;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`,x=a.div`
  position: absolute;
  border: 1px solid rgba(220, 227, 229, 0.8);
  box-shadow: 0px 4px 16px rgba(17, 17, 17, 0.1);
  /* max-width: 95%; */
  padding: 40px 20px 40px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: ${i.colors.white};
`,w=document.querySelector("#modal"),h=({children:s,onClose:e,background:n})=>{o.useEffect(()=>{const t=c=>{c.code==="Escape"&&e()};return window.addEventListener("keydown",t),()=>{window.removeEventListener("keydown",t)}},[e]);const d=o.useCallback(t=>{t.target===t.currentTarget&&e()},[e]);return p.createPortal(r.jsx(l,{onMouseDown:d,children:r.jsx(x,{background:n,children:s})}),w)};export{h as C};
