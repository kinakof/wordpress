(()=>{var e={4184:(e,o)=>{var t;!function(){"use strict";var n={}.hasOwnProperty;function a(){for(var e=[],o=0;o<arguments.length;o++){var t=arguments[o];if(t){var r=typeof t;if("string"===r||"number"===r)e.push(t);else if(Array.isArray(t)){if(t.length){var l=a.apply(null,t);l&&e.push(l)}}else if("object"===r){if(t.toString!==Object.prototype.toString&&!t.toString.toString().includes("[native code]")){e.push(t.toString());continue}for(var s in t)n.call(t,s)&&t[s]&&e.push(s)}}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(t=function(){return a}.apply(o,[]))||(e.exports=t)}()},1685:e=>{"use strict";var o=function(e){return parseInt(e,16)};e.exports=function(e,t){var n,a,r=function(e){return"#"===e.charAt(0)?e.slice(1):e}(e),l=function(e){var t=e.g,n=e.b,a=e.a;return{r:o(e.r),g:o(t),b:o(n),a:+(o(a)/255).toFixed(2)}}({r:(a=3===(n=r).length||4===n.length)?"".concat(n.slice(0,1)).concat(n.slice(0,1)):n.slice(0,2),g:a?"".concat(n.slice(1,2)).concat(n.slice(1,2)):n.slice(2,4),b:a?"".concat(n.slice(2,3)).concat(n.slice(2,3)):n.slice(4,6),a:(a?"".concat(n.slice(3,4)).concat(n.slice(3,4)):n.slice(6,8))||"ff"});return function(e,o){var t,n=e.r,a=e.g,r=e.b,l=e.a,s=(t=o,!isNaN(parseFloat(t))&&isFinite(t)?o:l);return"rgba(".concat(n,", ").concat(a,", ").concat(r,", ").concat(s,")")}(l,t)}}},o={};function t(n){var a=o[n];if(void 0!==a)return a.exports;var r=o[n]={exports:{}};return e[n](r,r.exports,t),r.exports}t.n=e=>{var o=e&&e.__esModule?()=>e.default:()=>e;return t.d(o,{a:o}),o},t.d=(e,o)=>{for(var n in o)t.o(o,n)&&!t.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:o[n]})},t.o=(e,o)=>Object.prototype.hasOwnProperty.call(e,o),(()=>{"use strict";const e=window.React,o=window.wp.blocks,n=window.wp.blockEditor,a=window.wp.compose,r=window.wp.data,l=window.wp.hooks,s=JSON.parse('{"u2":"snow-monkey-blocks/flex","Y4":{"Wn":{"Z":{"$_":"","Oh":0.1,"Sl":0,"yv":10,"hw":0}}}}'),i=(0,e.createElement)("svg",{viewBox:"0 0 24 24"},(0,e.createElement)("path",{d:"M3,3v8h8V3H3z M10,10H4V4h6V10z"}),(0,e.createElement)("path",{d:"M13,3v8h8V3H13z M20,10h-6V4h6V10z"}),(0,e.createElement)("path",{d:"M3,13v8h18v-8H3z M20,20H4v-6h16V20z"}));var c=t(4184),p=t.n(c),u=t(1685),h=t.n(u);const m=window.wp.components,d=window.wp.element,g=window.wp.i18n;function b({settings:o,label:t}){const a={},r={},l=o.map(((o,t)=>{if(o.hasOwnProperty("colorValue")&&o.hasOwnProperty("onColorChange")){a.color=o.colorValue,r.color=o.onColorChange;const l=(0,n.__experimentalUseMultipleOriginColorsAndGradients)();return l.colors=l.colors.map((e=>{const o=e.colors.filter((e=>!e.color.match(/^var\(/)));return!(1>o.length)&&(e.colors=o,e)})).filter(Boolean),(0,e.createElement)("div",{className:"smb-color-gradient-settings-dropdown",key:t},(0,e.createElement)(n.__experimentalColorGradientSettingsDropdown,{settings:[{label:(0,g.__)("Color","snow-monkey-blocks"),colorValue:o.colorValue,onColorChange:o.onColorChange}],__experimentalIsRenderedInSidebar:!0,...l}))}return o.hasOwnProperty("opacityValue")&&o.hasOwnProperty("onOpacityChange")?(a.opacity=o.opacityValue,r.opacity=o.onOpacityChange,(0,e.createElement)(m.RangeControl,{key:t,label:(0,g.__)("Opacity","snow-monkey-blocks"),value:Number(o.opacityValue.toFixed(1)),onChange:o.onOpacityChange,min:0,max:1,step:.1})):o.hasOwnProperty("horizontalValue")&&o.hasOwnProperty("onHorizontalChange")?(a.horizontal=o.horizontalValue,r.horizontal=o.onHorizontalChange,(0,e.createElement)(m.RangeControl,{key:t,label:(0,g.__)("Horizontal","snow-monkey-blocks"),value:o.horizontalValue,onChange:o.onHorizontalChange,min:null!==(l=o?.min)&&void 0!==l?l:-100,max:null!==(s=o?.max)&&void 0!==s?s:100})):o.hasOwnProperty("verticalValue")&&o.hasOwnProperty("onVerticalChange")?(a.vertical=o.verticalValue,r.vertical=o.onVerticalChange,(0,e.createElement)(m.RangeControl,{key:t,label:(0,g.__)("Vertical","snow-monkey-blocks"),value:o.verticalValue,onChange:o.onVerticalChange,min:null!==(i=o?.min)&&void 0!==i?i:-100,max:null!==(c=o?.max)&&void 0!==c?c:100})):o.hasOwnProperty("blurValue")&&o.hasOwnProperty("onBlurChange")?(a.blur=o.blurValue,r.blur=o.onBlurChange,(0,e.createElement)(m.RangeControl,{key:t,label:(0,g.__)("Blur","snow-monkey-blocks"),value:o.blurValue,onChange:o.onBlurChange,min:null!==(p=o?.min)&&void 0!==p?p:0,max:null!==(u=o?.max)&&void 0!==u?u:100})):o.hasOwnProperty("spreadValue")&&o.hasOwnProperty("onSpreadChange")?(a.spread=o.spreadValue,r.spread=o.onSpreadChange,(0,e.createElement)(m.RangeControl,{key:t,label:(0,g.__)("Spread","snow-monkey-blocks"),value:o.spreadValue,onChange:o.onSpreadChange,min:null!==(h=o?.min)&&void 0!==h?h:-100,max:null!==(b=o?.max)&&void 0!==b?b:100})):o.hasOwnProperty("positionValue")&&o.hasOwnProperty("onPositionChange")?(a.position=o.positionValue,r.position=o.onPositionChange,(0,e.createElement)(m.SelectControl,{key:t,label:(0,g.__)("Position","snow-monkey-blocks"),value:o.positionValue,onChange:o.onPositionChange,options:[{value:"",label:(0,g.__)("Outline","snow-monkey-blocks")},{value:"inset",label:(0,g.__)("Inset","snow-monkey-blocks")}]})):(0,e.createElement)(d.Fragment,{key:t});var l,s,i,c,p,u,h,b}));return(0,e.createElement)(m.__experimentalToolsPanel,{label:t||(0,g.__)("Box Shadow","snow-monkey-blocks"),className:"smb-box-shadow-tools-panel"},(0,e.createElement)(m.__experimentalToolsPanelItem,{label:t||(0,g.__)("Box Shadow","snow-monkey-blocks"),hasValue:()=>o.some((e=>{if(e.hasOwnProperty("defaultValue")){let o;return e.hasOwnProperty("opacityValue")?o=e.opacityValue:e.hasOwnProperty("horizontalValue")?o=e.horizontalValue:e.hasOwnProperty("verticalValue")?o=e.verticalValue:e.hasOwnProperty("blurValue")?o=e.blurValue:e.hasOwnProperty("spreadValue")?o=e.spreadValue:e.hasOwnProperty("positionValue")&&(o=e.positionValue),void 0!==o&&e.defaultValue!==o}return!1})),isShownByDefault:!0,onDeselect:()=>{o.forEach((e=>{if(e.hasOwnProperty("defaultValue")){let o;e.hasOwnProperty("onOpacityChange")?o=e.onOpacityChange:e.hasOwnProperty("onHorizontalChange")?o=e.onHorizontalChange:e.hasOwnProperty("onVerticalChange")?o=e.onVerticalChange:e.hasOwnProperty("onBlurChange")?o=e.onBlurChange:e.hasOwnProperty("onSpreadChange")?o=e.onSpreadChange:e.hasOwnProperty("onPositionChange")&&(o=e.onPositionChange),void 0!==o&&o(e.defaultValue)}}))}},l))}void 0===n.__experimentalUseMultipleOriginColorsAndGradients&&(n.__experimentalUseMultipleOriginColorsAndGradients=function(){const e={disableCustomColors:!(0,n.useSetting)("color.custom"),disableCustomGradients:!(0,n.useSetting)("color.customGradient")},o=(0,n.useSetting)("color.palette.custom"),t=(0,n.useSetting)("color.palette.theme"),a=(0,n.useSetting)("color.palette.default"),r=(0,n.useSetting)("color.defaultPalette");e.colors=(0,d.useMemo)((()=>{const e=[];return t&&t.length&&e.push({name:(0,g._x)("Theme","Indicates this palette comes from the theme.","snow-monkey-blocks"),colors:t}),r&&a&&a.length&&e.push({name:(0,g._x)("Default","Indicates this palette comes from WordPress.","snow-monkey-blocks"),colors:a}),o&&o.length&&e.push({name:(0,g._x)("Custom","Indicates this palette comes from the theme.","snow-monkey-blocks"),colors:o}),e}),[a,t,o]);const l=(0,n.useSetting)("color.gradients.custom"),s=(0,n.useSetting)("color.gradients.theme"),i=(0,n.useSetting)("color.gradients.default"),c=(0,n.useSetting)("color.defaultGradients");return e.gradients=(0,d.useMemo)((()=>{const e=[];return s&&s.length&&e.push({name:(0,g._x)("Theme","Indicates this palette comes from the theme.","snow-monkey-blocks"),gradients:s}),c&&i&&i.length&&e.push({name:(0,g._x)("Default","Indicates this palette comes from WordPress.","snow-monkey-blocks"),gradients:i}),l&&l.length&&e.push({name:(0,g._x)("Custom","Indicates this palette is created by the user.","snow-monkey-blocks"),gradients:l}),e}),[l,s,i]),e});const w={from:[{type:"block",isMultiBlock:!0,blocks:["*"],__experimentalConvert(e){const t=["wide","full"],n=e.reduce(((e,o)=>{const{align:n}=o.attributes;return t.indexOf(n)>t.indexOf(e)?n:e}),void 0),a=e.map((e=>(0,o.createBlock)(e.name,e.attributes,e.innerBlocks)));return(0,o.createBlock)("snow-monkey-blocks/flex",{align:n},a)}}],ungroup:(e,o)=>o.flatMap((e=>e))},y={attributes:{style:{spacing:{blockGap:"var:preset|spacing|40"}},layout:{orientation:"horizontal",type:"flex",flexWrap:"wrap",verticalAlignment:"stretch"}},innerBlocks:[{name:"snow-monkey-blocks/flex",attributes:{boxShadow:{color:"#000000",opacity:.1,horizontal:0,vertical:0,blur:15,spread:0},smb:{flexBasis:"150px",flexGrow:!0}},innerBlocks:[{name:"core/image",attributes:{url:`${smb.pluginUrl}/dist/img/photos/stocksnap_wrn48fo5mr.jpg`}},{name:"core/paragraph",attributes:{content:"Lorem ipsum dolor sit amet, consectetur",style:{spacing:{padding:{top:"var:preset|spacing|40",right:"var:preset|spacing|40",bottom:"var:preset|spacing|40",left:"var:preset|spacing|40"}}}}}]},{name:"snow-monkey-blocks/flex",attributes:{boxShadow:{color:"#000000",opacity:.1,horizontal:0,vertical:0,blur:15,spread:0},smb:{flexBasis:"150px",flexGrow:!0}},innerBlocks:[{name:"core/image",attributes:{url:`${smb.pluginUrl}/dist/img/photos/stocksnap_wrn48fo5mr.jpg`}},{name:"core/paragraph",attributes:{content:"Lorem ipsum dolor sit amet, consectetur",style:{spacing:{padding:{top:"var:preset|spacing|40",right:"var:preset|spacing|40",bottom:"var:preset|spacing|40",left:"var:preset|spacing|40"}}}}}]},{name:"snow-monkey-blocks/flex",attributes:{boxShadow:{color:"#000000",opacity:.1,horizontal:0,vertical:0,blur:15,spread:0},smb:{flexBasis:"150px",flexGrow:!0}},innerBlocks:[{name:"core/image",attributes:{url:`${smb.pluginUrl}/dist/img/photos/stocksnap_wrn48fo5mr.jpg`}},{name:"core/paragraph",attributes:{content:"Lorem ipsum dolor sit amet, consectetur",style:{spacing:{padding:{top:"var:preset|spacing|40",right:"var:preset|spacing|40",bottom:"var:preset|spacing|40",left:"var:preset|spacing|40"}}}}}]}]};(0,o.registerBlockType)(s.u2,{icon:{foreground:"#cd162c",src:i},edit:function({attributes:o,setAttributes:t,className:a,clientId:l}){const{boxShadow:i}=o,c=(0,r.useSelect)((e=>{const{getBlock:o}=e("core/block-editor"),t=o(l);return!(!t||!t.innerBlocks.length)}),[l]),u=p()("smb-flex",a),m={"--smb-flex--box-shadow":i.color?`${i.horizontal}px ${i.vertical}px ${i.blur}px ${i.spread}px ${h()(i.color,i.opacity)}`:void 0},d=(0,n.useBlockProps)({className:u,style:m}),g=(0,n.useInnerBlocksProps)(d,{renderAppender:c?n.InnerBlocks.DefaultBlockAppender:n.InnerBlocks.ButtonBlockAppender});return(0,e.createElement)(e.Fragment,null,(0,e.createElement)(n.InspectorControls,{group:"styles"},(0,e.createElement)(b,{settings:[{colorValue:i.color,onColorChange:e=>{t({boxShadow:{...i,color:e}})},defaultValue:s.Y4.Wn.Z.$_},{opacityValue:i.opacity,onOpacityChange:e=>{t({boxShadow:{...i,opacity:e}})},defaultValue:s.Y4.Wn.Z.Oh},{horizontalValue:i.horizontal,onHorizontalChange:e=>{t({boxShadow:{...i,horizontal:e}})},defaultValue:s.Y4.Wn.Z.Sl},{blurValue:i.blur,onBlurChange:e=>{t({boxShadow:{...i,blur:e}})},defaultValue:s.Y4.Wn.Z.yv},{spreadValue:i.spread,onSpreadChange:e=>{t({boxShadow:{...i,spread:e}})},defaultValue:s.Y4.Wn.Z.hw}]})),(0,e.createElement)("div",{...g}))},save:function({attributes:o,className:t}){const{boxShadow:a}=o,r=p()("smb-flex",t),l={"--smb-flex--box-shadow":a.color?`${a.horizontal}px ${a.vertical}px ${a.blur}px ${a.spread}px ${h()(a.color,a.opacity)}`:void 0};return(0,e.createElement)("div",{...n.useInnerBlocksProps.save({...n.useBlockProps.save({className:r,style:l})})})},transforms:w,example:y});const f=(0,a.createHigherOrderComponent)((o=>t=>{const{getBlockParents:a,getBlock:l}=(0,r.useSelect)((e=>e(n.store)),[t.clientId]),s={...t},i=a(t.clientId);if(0<i.length){const e=i[i.length-1];if(e){const o=l(e);"snow-monkey-blocks/flex"===o?.name&&(s.attributes={...s.attributes,__unstableSMBSupports:{flexGrow:!0,flexShrink:!0,flexBasis:!0}})}}return(0,e.createElement)(o,{...s})}),"withClientIdClassName");(0,l.addFilter)("editor.BlockListBlock","smb/flex/with-child-block-attributes",f)})()})();