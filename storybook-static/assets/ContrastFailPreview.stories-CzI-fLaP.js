import{R as e}from"./index-Cqyox1Tj.js";function r({fail:n,pass:a}){const c={display:"flex",gap:"1rem",marginBottom:"2rem",flexWrap:"wrap"},l=(m,f)=>({backgroundColor:f,color:m,padding:"1rem",borderRadius:"0.75rem",width:"45%",minHeight:"100px",boxShadow:"0 0 6px rgba(0,0,0,0.15)",display:"flex",flexDirection:"column",justifyContent:"center",textAlign:"center"});return e.createElement("div",{style:c},e.createElement("div",{style:l(n.text,n.bg)},e.createElement("strong",null,n.label),e.createElement("p",null,"Fails contrast requirements")),e.createElement("div",{style:l(a.text,a.bg)},e.createElement("strong",null,a.label),e.createElement("p",null,"Passes WCAG 2.1 AA")))}r.__docgenInfo={description:"",methods:[],displayName:"ContrastFailPreview"};const p={title:"Components/ContrastFailPreview",component:r},t=()=>e.createElement(r,{fail:{label:"Red on black",text:"#ff0000",bg:"#000000"},pass:{label:"White on black",text:"#ffffff",bg:"#000000"}});t.__docgenInfo={description:"",methods:[],displayName:"Default"};var o,s,i;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`() => <ContrastFailPreview fail={{
  label: 'Red on black',
  text: '#ff0000',
  bg: '#000000'
}} pass={{
  label: 'White on black',
  text: '#ffffff',
  bg: '#000000'
}} />`,...(i=(s=t.parameters)==null?void 0:s.docs)==null?void 0:i.source}}};const b=["Default"];export{t as Default,b as __namedExportsOrder,p as default};
