(()=>{var e={4184:(e,t)=>{var r;!function(){"use strict";var n={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var o=typeof r;if("string"===o||"number"===o)e.push(r);else if(Array.isArray(r)){if(r.length){var s=a.apply(null,r);s&&e.push(s)}}else if("object"===o){if(r.toString!==Object.prototype.toString&&!r.toString.toString().includes("[native code]")){e.push(r.toString());continue}for(var l in r)n.call(r,l)&&r[l]&&e.push(l)}}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(r=function(){return a}.apply(t,[]))||(e.exports=r)}()}},t={};function r(n){var a=t[n];if(void 0!==a)return a.exports;var o=t[n]={exports:{}};return e[n](o,o.exports,r),o.exports}r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";const e=window.wp.blocks,t=JSON.parse('{"u2":"snow-monkey-blocks/tab-panel"}'),n=window.React,a=(0,n.createElement)("svg",{viewBox:"0 0 24 24"},(0,n.createElement)("circle",{cx:"6.5",cy:"8",r:"1"}),(0,n.createElement)("path",{d:"M20,8H13.75a.25.25,0,0,1-.25-.25V5.5a1,1,0,0,0-1-1H4a1,1,0,0,0-1,1v13a1,1,0,0,0,1,1H20a1,1,0,0,0,1-1V9A1,1,0,0,0,20,8Zm0,10a.54.54,0,0,1-.53.54H4.53A.54.54,0,0,1,4,18V6a.54.54,0,0,1,.53-.54H12A.54.54,0,0,1,12.5,6V8.25a.54.54,0,0,0,.53.54h6.44a.54.54,0,0,1,.53.54Z"}));var o=r(4184),s=r.n(o);const l=window.wp.blockEditor,c=window.wp.data;(0,e.registerBlockType)(t.u2,{icon:{foreground:"#cd162c",src:a},edit:function({attributes:e,className:t,clientId:r}){const{tabPanelId:a}=e,o=(0,c.useSelect)((e=>!!e("core/block-editor").getBlock(r)?.innerBlocks?.length),[r]),i=s()("smb-tab-panel",t),p=(0,l.useBlockProps)({className:i}),d=(0,l.useInnerBlocksProps)({className:"smb-tab-panel__body"},{renderAppender:o?l.InnerBlocks.DefaultBlockAppender:l.InnerBlocks.ButtonBlockAppender});return(0,n.createElement)(n.Fragment,null,(0,n.createElement)("div",{...p,id:a,role:"tabpanel"},(0,n.createElement)("div",{...d})))},save:function({attributes:e,className:t}){const{tabPanelId:r,ariaHidden:a}=e,o=s()("smb-tab-panel",t);return(0,n.createElement)("div",{...l.useBlockProps.save({className:o}),id:r,"aria-hidden":a,role:"tabpanel"},(0,n.createElement)("div",{...l.useInnerBlocksProps.save({className:"smb-tab-panel__body"})}))}})})()})();