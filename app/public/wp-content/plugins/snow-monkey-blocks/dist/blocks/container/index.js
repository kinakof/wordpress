(()=>{var e={4184:(e,t)=>{var n;!function(){"use strict";var o={}.hasOwnProperty;function l(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var s=typeof n;if("string"===s||"number"===s)e.push(n);else if(Array.isArray(n)){if(n.length){var a=l.apply(null,n);a&&e.push(a)}}else if("object"===s){if(n.toString!==Object.prototype.toString&&!n.toString.toString().includes("[native code]")){e.push(n.toString());continue}for(var r in n)o.call(n,r)&&n[r]&&e.push(r)}}}return e.join(" ")}e.exports?(l.default=l,e.exports=l):void 0===(n=function(){return l}.apply(t,[]))||(e.exports=n)}()}},t={};function n(o){var l=t[o];if(void 0!==l)return l.exports;var s=t[o]={exports:{}};return e[o](s,s.exports,n),s.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";const e=window.wp.blocks,t=JSON.parse('{"u2":"snow-monkey-blocks/container","Y4":{"f3":{},"Qp":{"Z":false},"t9":{"Z":false}}}'),o=window.React,l=(0,o.createElement)("svg",{viewBox:"0 0 24 24"},(0,o.createElement)("path",{d:"M3.86,2.5H1a1,1,0,0,0-1,1v16a1,1,0,0,0,1,1H3.86v-1H1.5A.5.5,0,0,1,1,19V4a.5.5,0,0,1,.5-.5H3.86v-1"}),(0,o.createElement)("path",{d:"M20.14,2.5H23a1,1,0,0,1,1,1v16a1,1,0,0,1-1,1H20.14v-1H22.5A.5.5,0,0,0,23,19V4a.5.5,0,0,0-.5-.5H20.14v-1"}));var s=n(4184),a=n.n(s);const r=window.wp.blockEditor,c=window.wp.components,i=window.wp.data,m=window.wp.i18n;function u({label:e,onChange:t,value:n,withReset:l=!0},s){const a=(0,c.__experimentalUseCustomUnits)({availableUnits:["px","em","rem","%","vw"]}),r="smb-width-picker";return(0,o.createElement)("fieldset",{className:r,...s?{}:{ref:s}},(0,o.createElement)("div",{className:`${r}__controls`},(0,o.createElement)(c.Flex,{justify:"space-between",className:`${r}__custom-size-control`},(0,o.createElement)(c.FlexItem,{isBlock:!0},(0,o.createElement)(c.__experimentalUnitControl,{label:e,labelPosition:"edge",value:n,onChange:e=>{e=0>parseFloat(e)||0===parseFloat(e)?void 0:e,t(e)},units:a})),l&&(0,o.createElement)(c.FlexItem,{isBlock:!0},(0,o.createElement)(c.Button,{className:"components-color-palette__clear",disabled:void 0===n,onClick:()=>t(void 0),isSmall:!0,isSecondary:!0},(0,m.__)("Reset"))))))}const d={from:[{type:"block",isMultiBlock:!0,blocks:["*"],__experimentalConvert(t){const n=["wide","full"],o=t.reduce(((e,t)=>{const{align:o}=t.attributes;return n.indexOf(o)>n.indexOf(e)?o:e}),void 0),l=t.map((t=>(0,e.createBlock)(t.name,t.attributes,t.innerBlocks)));return(0,e.createBlock)("snow-monkey-blocks/container",{align:o},l)}}],ungroup:(e,t)=>t.flatMap((e=>e))};(0,e.registerBlockType)(t.u2,{icon:{foreground:"#cd162c",src:l},edit:function({attributes:e,setAttributes:n,className:l,clientId:s}){const{contentsMaxWidth:d,isSlim:p,removeGutters:v}=e,k=(0,i.useSelect)((e=>{const{getBlock:t}=e("core/block-editor"),n=t(s);return!(!n||!n.innerBlocks.length)}),[s]),b=a()("smb-container","c-container",l,{"smb-container--no-gutters":v}),w=a()("smb-container__body",{"u-slim-width":p&&!d}),f={width:d&&!p?d:void 0},h=(0,r.useBlockProps)({className:b}),_=(0,r.useInnerBlocksProps)({className:w,style:f},{renderAppender:k?r.InnerBlocks.DefaultBlockAppender:r.InnerBlocks.ButtonBlockAppender}),g=!!d,y=p;return(0,o.createElement)(o.Fragment,null,(0,o.createElement)(r.InspectorControls,null,(0,o.createElement)(c.__experimentalToolsPanel,{label:(0,m.__)("Block settings","snow-monkey-blocks")},!y&&(0,o.createElement)(c.__experimentalToolsPanelItem,{hasValue:()=>d!==t.Y4.f3.default,isShownByDefault:!0,label:(0,m.__)("Max width of the contents","snow-monkey-blocks"),onDeselect:()=>n({contentsMaxWidth:t.Y4.f3.default})},(0,o.createElement)(c.BaseControl,{label:(0,m.__)("Max width of the contents","snow-monkey-blocks"),id:"snow-monkey-blocks/container/contents-max-width"},(0,o.createElement)(u,{value:d,onChange:e=>n({contentsMaxWidth:e}),withReset:!1}))),!g&&(0,o.createElement)(c.__experimentalToolsPanelItem,{hasValue:()=>p!==t.Y4.Qp.Z,isShownByDefault:!0,label:(0,m.__)("Make the contents width slim","snow-monkey-blocks"),onDeselect:()=>n({isSlim:t.Y4.Qp.Z})},(0,o.createElement)(c.ToggleControl,{label:(0,m.__)("Make the contents width slim","snow-monkey-blocks"),checked:p,onChange:e=>n({isSlim:e})})),(0,o.createElement)(c.__experimentalToolsPanelItem,{hasValue:()=>v!==t.Y4.t9.Z,isShownByDefault:!0,label:(0,m.__)("Remove left and right spaces","snow-monkey-blocks"),onDeselect:()=>n({removeGutters:t.Y4.t9.Z})},(0,o.createElement)(c.ToggleControl,{label:(0,m.__)("Remove left and right spaces","snow-monkey-blocks"),checked:v,onChange:e=>n({removeGutters:e})})))),(0,o.createElement)("div",{...h},(0,o.createElement)("div",{..._})))},save:function({attributes:e,className:t}){const{contentsMaxWidth:n,isSlim:l,removeGutters:s}=e,c=a()("smb-container","c-container",t,{"smb-container--no-gutters":s}),i=a()("smb-container__body",{"u-slim-width":l&&!n}),m={width:n&&!l?n:void 0};return(0,o.createElement)("div",{...r.useBlockProps.save({className:c})},(0,o.createElement)("div",{...r.useInnerBlocksProps.save({className:i,style:m})}))},transforms:d})})()})();