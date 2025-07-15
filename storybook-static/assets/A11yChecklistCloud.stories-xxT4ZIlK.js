import{R as e}from"./index-Cqyox1Tj.js";function s({checks:n}){return e.createElement("div",{style:{background:"#f0f0f0",borderRadius:"1rem",padding:"1.5rem",color:"#111",boxShadow:"0 0 10px rgba(0, 0, 0, 0.1)",marginBottom:"2rem"}},e.createElement("h3",{style:{marginBottom:"1rem"}},"Accessibility Checklist"),e.createElement("ul",{style:{listStyle:"none",padding:0}},n.map((t,c)=>e.createElement("li",{key:c,style:{marginBottom:"0.75rem",display:"flex",alignItems:"center"}},e.createElement("span",{style:{display:"inline-block",width:"1.25rem",height:"1.25rem",borderRadius:"50%",background:t.pass?"#6BCB77":"#FF6B6B",marginRight:"0.75rem",boxShadow:t.pass?"0 0 6px #6BCB77aa":"0 0 6px #FF6B6Baa"}}),t.label))))}s.__docgenInfo={description:"",methods:[],displayName:"A11yChecklistCloud"};const d={title:"Components/A11yChecklistCloud",component:s},a=()=>e.createElement(s,{checks:[{label:"Keyboard navigation",pass:!0},{label:"Color contrast",pass:!1},{label:"Screen reader labels",pass:!0}]});a.__docgenInfo={description:"",methods:[],displayName:"Default"};var r,l,o;a.parameters={...a.parameters,docs:{...(r=a.parameters)==null?void 0:r.docs,source:{originalSource:`() => <A11yChecklistCloud checks={[{
  label: 'Keyboard navigation',
  pass: true
}, {
  label: 'Color contrast',
  pass: false
}, {
  label: 'Screen reader labels',
  pass: true
}]} />`,...(o=(l=a.parameters)==null?void 0:l.docs)==null?void 0:o.source}}};const m=["Default"];export{a as Default,m as __namedExportsOrder,d as default};
