(()=>{"use strict";var e={n:l=>{var n=l&&l.__esModule?()=>l.default:()=>l;return e.d(n,{a:n}),n},d:(l,n)=>{for(var t in n)e.o(n,t)&&!e.o(l,t)&&Object.defineProperty(l,t,{enumerable:!0,get:n[t]})},o:(e,l)=>Object.prototype.hasOwnProperty.call(e,l)};const l=window.wp.blocks,n=window.React,t=window.wp.primitives,o=(0,n.createElement)(t.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,n.createElement)(t.Path,{fillRule:"evenodd",d:"M10.289 4.836A1 1 0 0111.275 4h1.306a1 1 0 01.987.836l.244 1.466c.787.26 1.503.679 2.108 1.218l1.393-.522a1 1 0 011.216.437l.653 1.13a1 1 0 01-.23 1.273l-1.148.944a6.025 6.025 0 010 2.435l1.149.946a1 1 0 01.23 1.272l-.653 1.13a1 1 0 01-1.216.437l-1.394-.522c-.605.54-1.32.958-2.108 1.218l-.244 1.466a1 1 0 01-.987.836h-1.306a1 1 0 01-.986-.836l-.244-1.466a5.995 5.995 0 01-2.108-1.218l-1.394.522a1 1 0 01-1.217-.436l-.653-1.131a1 1 0 01.23-1.272l1.149-.946a6.026 6.026 0 010-2.435l-1.148-.944a1 1 0 01-.23-1.272l.653-1.131a1 1 0 011.217-.437l1.393.522a5.994 5.994 0 012.108-1.218l.244-1.466zM14.929 12a3 3 0 11-6 0 3 3 0 016 0z",clipRule:"evenodd"})),a=JSON.parse('{"u2":"snow-monkey-blocks/custom-field","Y4":{"u":{"Z":""}}}'),r=window.wp.components,s=window.wp.blockEditor,c=window.wp.i18n,i=window.wp.serverSideRender;var m=e.n(i);(0,l.registerBlockType)(a.u2,{icon:{foreground:"#cd162c",src:o},edit:function({attributes:e,setAttributes:l}){const{name:t}=e;return(0,n.createElement)(n.Fragment,null,(0,n.createElement)(s.InspectorControls,null,(0,n.createElement)(r.__experimentalToolsPanel,{label:(0,c.__)("Block settings","snow-monkey-blocks")},(0,n.createElement)(r.__experimentalToolsPanelItem,{hasValue:()=>t!==a.Y4.u.Z,isShownByDefault:!0,label:(0,c.__)("Custom field name","snow-monkey-blocks"),onDeselect:()=>l({name:a.Y4.u.Z})},(0,n.createElement)(r.TextControl,{label:(0,c.__)("Custom field name","snow-monkey-blocks"),value:t,onChange:e=>l({name:e})})))),(0,n.createElement)("div",{...(0,s.useBlockProps)()},t?(0,n.createElement)(r.Disabled,null,(0,n.createElement)(m(),{block:"snow-monkey-blocks/custom-field",attributes:e})):(0,n.createElement)(r.Placeholder,{instructions:(0,c.__)("Specify a custom field name.","snow-monkey-blocks")})))},save:function(){return null}})})();