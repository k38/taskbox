import{j as e}from"./jsx-runtime-DEdD30eg.js";import"./index-RYns6xqu.js";import{P as a}from"./index-rNTiGNI1.js";function o({task:{id:s,title:c,state:i},onArchiveTask:f,onPinTask:_}){return e.jsxs("div",{className:`list-item ${i}`,children:[e.jsxs("label",{htmlFor:"checked","aria-label":`archiveTask-${s}`,className:"checkbox",children:[e.jsx("input",{type:"checkbox",disabled:!0,name:"checked",id:`archiveTask-${s}`,checked:i==="TASK_ARCHIVED"}),e.jsx("span",{className:"checkbox-custom",onClick:()=>f(s)})]}),e.jsx("label",{htmlFor:"title","aria-label":c,className:"title",children:e.jsx("input",{type:"text",value:c,readOnly:!0,name:"title",placeholder:"Input title"})}),i!=="TASK_ARCHIVED"&&e.jsx("button",{className:"pin-button",onClick:()=>_(s),id:`pinTask-${s}`,"aria-label":`pinTask-${s}`,children:e.jsx("span",{className:"icon-star"})},`pinTask-${s}`)]})}o.propTypes={task:a.shape({id:a.string.isRequired,title:a.string.isRequired,state:a.string.isRequired}),onArchiveTask:a.func,onPinTask:a.func};o.__docgenInfo={description:"",methods:[],displayName:"Task",props:{task:{description:"Composition of the task",type:{name:"shape",value:{id:{name:"string",description:"Id of the task",required:!0},title:{name:"string",description:"Title of the task",required:!0},state:{name:"string",description:"Current state of the task",required:!0}}},required:!1},onArchiveTask:{description:"Event to change the task to archived",type:{name:"func"},required:!1},onPinTask:{description:"Event to change the task to pinned",type:{name:"func"},required:!1}}};const x={component:o,title:"Task",tags:["autodocs"]},t={args:{task:{id:"1",title:"Test Task",state:"TASK_INBOX"}}},r={args:{task:{...t.args.task,state:"TASK_PINNED"}}},n={args:{task:{...t.args.task,state:"TASK_ARCHIVED"}}};var l,p,d;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    task: {
      id: '1',
      title: 'Test Task',
      state: 'TASK_INBOX'
    }
  }
}`,...(d=(p=t.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var u,k,m;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    task: {
      ...Default.args.task,
      state: 'TASK_PINNED'
    }
  }
}`,...(m=(k=r.parameters)==null?void 0:k.docs)==null?void 0:m.source}}};var h,T,g;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    task: {
      ...Default.args.task,
      state: 'TASK_ARCHIVED'
    }
  }
}`,...(g=(T=n.parameters)==null?void 0:T.docs)==null?void 0:g.source}}};const A=["Default","Pinned","Archived"],S=Object.freeze(Object.defineProperty({__proto__:null,Archived:n,Default:t,Pinned:r,__namedExportsOrder:A,default:x},Symbol.toStringTag,{value:"Module"}));export{t as D,o as T,S as a};
