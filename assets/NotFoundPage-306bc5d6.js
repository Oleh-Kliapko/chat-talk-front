import{n as o,o as e,j as t}from"./index-47068e0e.js";const n="/chat-talk-front/assets/404-page-animation-d03ade57.gif",i=o.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;

  margin: 0 auto;
  height: 100vh;
  max-width: 100%;
`,a=o.img`
  display: block;
  width: 50%;
  margin-bottom: 10px;
`,r=o.h1`
  margin: 0;
  margin-bottom: 20px;
  padding: 0 20px;

  font-weight: 600;
  font-size: 32px;
  line-height: 100%;
  text-align: center;
`,s=o(e)`
  padding: 16px 23px;
  font-weight: 500;
  font-size: 24px;
  letter-spacing: -0.02em;
  color: white;
  text-decoration: none;

  background-color: greenyellow;
  box-shadow: 4px 2px 16px rgba(136, 165, 191, 0.48);
  border-radius: 16px;

  &:hover {
    background-color: green;
  }
`,g=()=>t.jsxs(i,{children:[t.jsx(a,{src:n,alt:""}),t.jsx(r,{children:"Oops! Page not found"}),t.jsx(s,{to:"/",children:"Go back to homepage"})]});export{g as default};