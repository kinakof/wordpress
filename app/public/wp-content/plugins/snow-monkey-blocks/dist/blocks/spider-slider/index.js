(()=>{var e={4184:(e,t)=>{var a;!function(){"use strict";var s={}.hasOwnProperty;function l(){for(var e=[],t=0;t<arguments.length;t++){var a=arguments[t];if(a){var i=typeof a;if("string"===i||"number"===i)e.push(a);else if(Array.isArray(a)){if(a.length){var r=l.apply(null,a);r&&e.push(r)}}else if("object"===i){if(a.toString!==Object.prototype.toString&&!a.toString.toString().includes("[native code]")){e.push(a.toString());continue}for(var o in a)s.call(a,o)&&a[o]&&e.push(o)}}}return e.join(" ")}e.exports?(l.default=l,e.exports=l):void 0===(a=function(){return l}.apply(t,[]))||(e.exports=a)}()}},t={};function a(s){var l=t[s];if(void 0!==l)return l.exports;var i=t[s]={exports:{}};return e[s](i,i.exports,a),i.exports}a.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return a.d(t,{a:t}),t},a.d=(e,t)=>{for(var s in t)a.o(t,s)&&!a.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})},a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";const e=window.wp.blocks,t=window.wp.i18n,s=JSON.parse('{"u2":"snow-monkey-blocks/spider-slider","Y4":{"images":{"type":"array","default":[],"source":"query","selector":".smb-spider-slider .spider__slide","query":{"url":{"type":"string","source":"attribute","selector":".spider__figure","attribute":"src"},"alt":{"type":"string","source":"attribute","selector":".spider__figure","attribute":"alt"},"id":{"type":"string","source":"attribute","selector":".spider__figure","attribute":"data-image-id"},"width":{"type":"number","source":"attribute","selector":".spider__figure","attribute":"width"},"height":{"type":"number","source":"attribute","selector":".spider__figure","attribute":"height"},"caption":{"type":"string","source":"html","selector":".smb-spider-slider__item__caption","default":""}}},"sizeSlug":{"type":"string","default":"full"},"dots":{"type":"boolean","default":false},"dotsToThumbnail":{"type":"boolean","default":false},"arrows":{"type":"boolean","default":false},"fade":{"type":"boolean","default":false},"shifted":{"type":"boolean","default":false},"gutter":{"type":"string","default":""},"aspectRatio":{"type":"string","default":""},"displayCaption":{"type":"boolean","default":false},"interval":{"type":"number","default":0},"duration":{"type":"number","default":0},"lgSlidesToShow":{"type":"number","default":1},"mdSlidesToShow":{"type":"number","default":1},"smSlidesToShow":{"type":"number","default":1}},"be":{"align":["wide","full"],"spacing":{"margin":true}}}'),l=window.React,i=(0,l.createElement)("svg",{viewBox:"0 0 24 24"},(0,l.createElement)("path",{d:"M5,5.78V18.22a.78.78,0,0,0,.78.78H18.22a.78.78,0,0,0,.78-.78V5.78A.78.78,0,0,0,18.22,5H5.78A.78.78,0,0,0,5,5.78m12.44,12H6.56a.38.38,0,0,1-.39-.39V6.56a.38.38,0,0,1,.39-.39H17.44a.38.38,0,0,1,.39.39V17.44a.38.38,0,0,1-.39.39"}),(0,l.createElement)("path",{d:"M6.17,14.16l3.06-2.23a.22.22,0,0,1,.22,0l2.34,1.5a.21.21,0,0,0,.24,0l3-2.83a.19.19,0,0,1,.27,0l3.09,3v1.16l-3.09-3a.18.18,0,0,0-.27,0l-3,2.82a.19.19,0,0,1-.24,0L9.45,13.11a.18.18,0,0,0-.22,0L6.17,15.33Z"}),(0,l.createElement)("path",{d:"M2.22,5H0V6.17H1.44a.38.38,0,0,1,.39.39V17.44a.38.38,0,0,1-.39.39H0V19H2.22A.78.78,0,0,0,3,18.22V5.78A.78.78,0,0,0,2.22,5Z"}),(0,l.createElement)("path",{d:"M24,17.83H22.56a.38.38,0,0,1-.39-.39V6.56a.38.38,0,0,1,.39-.39H24V5H21.78a.78.78,0,0,0-.78.78V18.22a.78.78,0,0,0,.78.78H24Z"}));var r=a(4184),o=a.n(r);const n=window.wp.blockEditor,d=window.wp.components,m=window.wp.data,c=window.wp.element,u=(0,c.forwardRef)((function({icon:e,size:t=24,...a},s){return(0,c.cloneElement)(e,{width:t,height:t,...a,ref:s})})),p=window.wp.primitives,h=(0,l.createElement)(p.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"-2 -2 24 24"},(0,l.createElement)(p.Path,{d:"M10 2c4.42 0 8 3.58 8 8s-3.58 8-8 8-8-3.58-8-8 3.58-8 8-8zm1.13 9.38l.35-6.46H8.52l.35 6.46h2.26zm-.09 3.36c.24-.23.37-.55.37-.96 0-.42-.12-.74-.36-.97s-.59-.35-1.06-.35-.82.12-1.07.35-.37.55-.37.97c0 .41.13.73.38.96.26.23.61.34 1.06.34s.8-.11 1.05-.34z"}));function _(e){const{desktop:t,tablet:a,mobile:s}=e,i=[];return t&&i.push({name:"desktop",title:(0,l.createElement)(d.Dashicon,{icon:"desktop"})}),a&&i.push({name:"tablet",title:(0,l.createElement)(d.Dashicon,{icon:"tablet"})}),s&&i.push({name:"mobile",title:(0,l.createElement)(d.Dashicon,{icon:"smartphone"})}),(0,l.createElement)(d.TabPanel,{className:"smb-inspector-tabs",tabs:i},(e=>{if(e.name){if("desktop"===e.name)return t();if("tablet"===e.name)return a();if("mobile"===e.name)return s()}}))}window.lodash;const g=(e,t=0,a=null)=>(e=Number(e),(isNaN(e)||e<t)&&(e=t),null!==a&&e>a&&(e=a),e);const w=["image"],f="full",b=s.Y4,v=s.be,E=[{attributes:{...b},supports:{...v},save({attributes:e,className:t}){const{images:a,aspectRatio:s,arrows:i,dots:r,dotsToThumbnail:d,fade:m,shifted:c,gutter:u,displayCaption:p,interval:h,duration:_,lgSlidesToShow:g,mdSlidesToShow:w,smSlidesToShow:f}=e;if(!a.length)return null;const b="wide"===e.align,v="full"===e.align,E=c&&!m&&(b||v),y=o()("smb-spider-slider",t,{[`smb-spider-slider--${s}`]:!!s,"smb-spider-slider--shifted":E,[`smb-spider-slider--gutter-${u}`]:!!u});return(0,l.createElement)("div",{...n.useBlockProps.save({className:y}),"data-fade":m?"true":"false","data-interval":0<h?1e3*h:void 0,"data-duration":0<_?1e3*_:void 0,"data-lg-slide-to-show":!m&&1<g?g:void 0,"data-md-slide-to-show":!m&&1<w?w:void 0,"data-sm-slide-to-show":!m&&1<f?f:void 0},(0,l.createElement)("div",{className:"spider"},E&&(0,l.createElement)("div",{className:"c-container"},(0,l.createElement)("div",{className:"spider__reference"})),(0,l.createElement)("div",{className:"spider__canvas"},a.map(((e,t)=>(0,l.createElement)("div",{className:"spider__slide","data-id":t,key:t},(0,l.createElement)("div",{className:"smb-spider-slider__figure-wrapper"},(0,l.createElement)("img",{className:"spider__figure",src:e.url,alt:e.alt,width:e.width,height:e.height,"data-image-id":e.id})),p&&!!e.caption&&(0,l.createElement)("div",{className:"smb-spider-slider__item"},(0,l.createElement)("div",{className:"smb-spider-slider__item__caption"},e.caption)))))),i&&(0,l.createElement)("div",{className:"spider__arrows"},(0,l.createElement)("button",{className:"spider__arrow","data-direction":"prev"},"Prev"),(0,l.createElement)("button",{className:"spider__arrow","data-direction":"next"},"Next"))),r&&(0,l.createElement)("div",{className:"spider__dots","data-thumbnails":d?"true":"false"},a.map(((e,t)=>(0,l.createElement)("button",{className:"spider__dot","data-id":t,key:t},d?(0,l.createElement)("img",{className:"spider__figure",src:e.url,alt:e.alt,width:e.width,height:e.height}):(0,l.createElement)(l.Fragment,null,t))))))}},{attributes:{...b},supports:{...v},save({attributes:e,className:t}){const{images:a,aspectRatio:s,arrows:i,dots:r,dotsToThumbnail:d,fade:m,shifted:c,gutter:u,displayCaption:p,interval:h,lgSlidesToShow:_,mdSlidesToShow:g,smSlidesToShow:w}=e;if(!a.length)return null;const f="wide"===e.align,b="full"===e.align,v=!!c&&!m,E=o()("smb-spider-slider",t,{[`smb-spider-slider--${s}`]:!!s,"smb-spider-slider--shifted":v,[`smb-spider-slider--gutter-${u}`]:!!u});return(0,l.createElement)("div",{...n.useBlockProps.save({className:E}),"data-fade":m?"true":"false","data-interval":0<h?1e3*h:void 0,"data-lg-slide-to-show":!m&&1<_?_:void 0,"data-md-slide-to-show":!m&&1<g?g:void 0,"data-sm-slide-to-show":!m&&1<w?w:void 0},(0,l.createElement)("div",{className:"spider"},(b||f)&&(0,l.createElement)("div",{className:"c-container"},(0,l.createElement)("div",{className:"spider__reference"})),(0,l.createElement)("div",{className:"spider__canvas"},a.map(((e,t)=>(0,l.createElement)("div",{className:"spider__slide","data-id":t,key:t},(0,l.createElement)("div",{className:"smb-spider-slider__figure-wrapper"},(0,l.createElement)("img",{className:"spider__figure",src:e.url,alt:e.alt,width:e.width,height:e.height,"data-image-id":e.id})),p&&!!e.caption&&(0,l.createElement)("div",{className:"smb-spider-slider__item"},(0,l.createElement)("div",{className:"smb-spider-slider__item__caption"},e.caption)))))),i&&(0,l.createElement)("div",{className:"spider__arrows"},(0,l.createElement)("button",{className:"spider__arrow","data-direction":"prev"},"Prev"),(0,l.createElement)("button",{className:"spider__arrow","data-direction":"next"},"Next"))),r&&(0,l.createElement)("div",{className:"spider__dots","data-thumbnails":d?"true":"false"},a.map(((e,t)=>(0,l.createElement)("button",{className:"spider__dot","data-id":t,key:t},d?(0,l.createElement)("img",{className:"spider__figure",src:e.url,alt:e.alt,width:e.width,height:e.height}):(0,l.createElement)(l.Fragment,null,t))))))}},{attributes:{...b},supports:{...v},save({attributes:e,className:t}){const{images:a,aspectRatio:s,arrows:i,dots:r,dotsToThumbnail:d,fade:m,shifted:c,gutter:u,displayCaption:p,interval:h,lgSlidesToShow:_,mdSlidesToShow:g,smSlidesToShow:w}=e;if(!a.length)return null;const f=!m&&"full"===e.align,b=!!c&&f,v=o()("smb-spider-slider",t,{[`smb-spider-slider--${s}`]:!!s,"smb-spider-slider--shifted":b,[`smb-spider-slider--gutter-${u}`]:!!u});return(0,l.createElement)("div",{...n.useBlockProps.save({className:v}),"data-fade":m?"true":"false","data-interval":0<h?1e3*h:void 0,"data-lg-slide-to-show":!m&&1<_?_:void 0,"data-md-slide-to-show":!m&&1<g?g:void 0,"data-sm-slide-to-show":!m&&1<w?w:void 0},(0,l.createElement)("div",{className:"spider"},b&&(0,l.createElement)("div",{className:"c-container"},(0,l.createElement)("div",{className:"spider__reference"})),(0,l.createElement)("div",{className:"spider__canvas"},a.map(((e,t)=>(0,l.createElement)("div",{className:"spider__slide","data-id":t,key:t},(0,l.createElement)("div",{className:"smb-spider-slider__figure-wrapper"},(0,l.createElement)("img",{className:"spider__figure",src:e.url,alt:e.alt,width:e.width,height:e.height,"data-image-id":e.id})),p&&!!e.caption&&(0,l.createElement)("div",{className:"smb-spider-slider__item"},(0,l.createElement)("div",{className:"smb-spider-slider__item__caption"},e.caption)))))),i&&(0,l.createElement)(l.Fragment,null,(0,l.createElement)("button",{className:"spider__arrow","data-direction":"prev"},"Prev"),(0,l.createElement)("button",{className:"spider__arrow","data-direction":"next"},"Next"))),r&&(0,l.createElement)("div",{className:"spider__dots","data-thumbnails":d?"true":"false"},a.map(((e,t)=>(0,l.createElement)("button",{className:"spider__dot","data-id":t,key:t},d?(0,l.createElement)("img",{className:"spider__figure",src:e.url,alt:e.alt,width:e.width,height:e.height}):(0,l.createElement)(l.Fragment,null,t))))))}},{attributes:{...b},supports:{align:["wide","full"]},migrate:e=>("16to9"===e.aspectRatio&&(e.aspectRatio="16x9"),"4to3"===e.aspectRatio&&(e.aspectRatio="4x3"),e),save({attributes:e,className:t}){const{images:a,aspectRatio:s,arrows:i,dots:r,dotsToThumbnail:d,fade:m,displayCaption:c,interval:u,lgSlidesToShow:p,mdSlidesToShow:h,smSlidesToShow:_}=e;if(!a.length)return null;const g=o()("smb-spider-slider",t,{[`smb-spider-slider--${s}`]:!!s});return(0,l.createElement)("div",{...n.useBlockProps.save({className:g}),"data-fade":m?"true":"false","data-interval":0<u?1e3*u:void 0,"data-lg-slide-to-show":!m&&1<p?p:void 0,"data-md-slide-to-show":!m&&1<h?h:void 0,"data-sm-slide-to-show":!m&&1<_?_:void 0},(0,l.createElement)("div",{className:"spider"},(0,l.createElement)("div",{className:"spider__canvas"},a.map(((e,t)=>(0,l.createElement)("div",{className:"spider__slide","data-id":t,key:t},(0,l.createElement)("img",{className:"spider__figure",src:e.url,alt:e.alt,width:e.width,height:e.height,"data-image-id":e.id}),c&&!!e.caption&&(0,l.createElement)("div",{className:"smb-spider-slider__item"},(0,l.createElement)("div",{className:"smb-spider-slider__item__caption"},e.caption)))))),i&&(0,l.createElement)(l.Fragment,null,(0,l.createElement)("button",{className:"spider__arrow","data-direction":"prev"},"Prev"),(0,l.createElement)("button",{className:"spider__arrow","data-direction":"next"},"Next"))),r&&(0,l.createElement)("div",{className:"spider__dots","data-thumbnails":d?"true":"false"},a.map(((e,t)=>(0,l.createElement)("button",{className:"spider__dot","data-id":t,key:t},d?(0,l.createElement)("img",{className:"spider__figure",src:e.url,alt:e.alt,width:e.width,height:e.height}):(0,l.createElement)(l.Fragment,null,t))))))}}],y={attributes:{images:[{url:`${smb.pluginUrl}/dist/img/photos/beach-sand-coast2756.jpg`},{url:`${smb.pluginUrl}/dist/img/photos/man-guy-photographer1579.jpg`},{url:`${smb.pluginUrl}/dist/img/photos/building-architecture-sky2096.jpg`}],arrows:!0,dots:!0}};(0,e.registerBlockType)(s.u2,{icon:{foreground:"#cd162c",src:i},keywords:[(0,t.__)("Carousel","snow-monkey-blocks")],edit:function({attributes:e,setAttributes:a,className:i,isSelected:r,clientId:p}){const{images:b,sizeSlug:v,aspectRatio:E,arrows:y,dots:k,dotsToThumbnail:S,fade:N,shifted:T,gutter:x,displayCaption:C,interval:D,duration:z,lgSlidesToShow:P,mdSlidesToShow:Y,smSlidesToShow:B}=e,R=!!b.length,{getSettings:I}=(0,m.useSelect)((e=>({getSettings:e("core/block-editor").getSettings})),[]),{resizedImages:V}=(0,m.useSelect)((e=>({resizedImages:b.map((t=>t.id&&r?e("core").getMedia(t.id,{context:"view"}):null)).filter(Boolean)})),[r,b,p]),$="wide"===e.align,A="full"===e.align,M=!N,H=T&&M&&($||A),F=(0,c.useRef)(),j=(0,c.useRef)(),O=(0,c.useRef)(),G=!!F.current&&F.current.offsetWidth;(0,c.useEffect)((()=>{const e=!!F.current&&!!O.current&&H&&Math.floor(F.current.offsetWidth);e&&(F.current.style.setProperty("--spider--canvas-width",`${e}px`),O.current.style.width=`${e}px`);const t=!!j.current&&H&&Math.floor(j.current.offsetWidth);t&&F.current.style.setProperty("--spider--reference-width",`${t}px`)}),[G]);const L=o()("smb-spider-slider",i,{[`smb-spider-slider--${E}`]:!!E,"smb-spider-slider--shifted":H,[`smb-spider-slider--gutter-${x}`]:!!x}),U=function(e,t,a){return(0,c.useMemo)((()=>function(){if(!e||0===e.length)return;const{imageSizes:s}=a();let l={};t&&(l=e.reduce(((e,t)=>{if(!t.id)return e;const a=s.reduce(((e,a)=>{const s=t.sizes?.[a.slug]?.url,l=t.media_details?.sizes?.[a.slug]?.source_url;return{...e,[a.slug]:s||l}}),{});return{...e,[parseInt(t.id,10)]:a}}),{}));const i=Object.values(l);return s.filter((({slug:e})=>i.some((t=>t[e])))).map((({name:e,slug:t})=>({value:t,label:e})))}()),[e,t])}(V,r,I),W=[{value:"",label:(0,t.__)("Default","snow-monkey-blocks")},{value:"16x9",label:(0,t.__)("16:9","snow-monkey-blocks")},{value:"4x3",label:(0,t.__)("4:3","snow-monkey-blocks")}],Z=[{value:"",label:(0,t.__)("None","snow-monkey-blocks")},{value:"s",label:(0,t.__)("S","snow-monkey-blocks")},{value:"m",label:(0,t.__)("M","snow-monkey-blocks")},{value:"l",label:(0,t.__)("L","snow-monkey-blocks")}],q=(0,l.createElement)(n.MediaPlaceholder,{addToGallery:R,isAppender:R,className:i,disableMediaButtons:R&&!r,icon:!R&&"format-gallery",labels:{title:!R&&(0,t.__)("Slider","snow-monkey-blocks"),instructions:!R&&(0,t.__)("Drag images, upload new ones or select files from your library.","snow-monkey-blocks")},onSelect:e=>{const t=e.map((e=>{if(!e.id)return e;const t=e?.sizes[v]?v:f,a=e?.sizes[t]?.url,s=e?.sizes[t]?.width,l=e?.sizes[t]?.height;return{url:a,alt:e.alt,id:e.id,width:s,height:l,caption:e.caption}}));a({images:t})},accept:"image/*",allowedTypes:w,multiple:!0,value:b});return(0,l.createElement)(l.Fragment,null,(0,l.createElement)(n.InspectorControls,{group:"dimensions"},(0,l.createElement)(d.__experimentalToolsPanelItem,{hasValue:()=>x!==s.Y4.gutter.default,isShownByDefault:!0,label:(0,t.__)("Gap","snow-monkey-blocks"),onDeselect:()=>a({gutter:s.Y4.gutter.default}),panelId:p},(0,l.createElement)(d.SelectControl,{label:(0,t.__)("Gap","snow-monkey-blocks"),value:x,onChange:e=>a({gutter:e}),options:Z}))),(0,l.createElement)(n.InspectorControls,null,(0,l.createElement)(d.__experimentalToolsPanel,{label:(0,t.__)("Block settings","snow-monkey-blocks")},(0,l.createElement)(d.__experimentalToolsPanelItem,{hasValue:()=>v!==s.Y4.sizeSlug.default,isShownByDefault:!0,label:(0,t.__)("Images size","snow-monkey-blocks"),onDeselect:()=>a({sizeSlug:s.Y4.sizeSlug.default})},(0,l.createElement)(d.SelectControl,{label:(0,t.__)("Images size","snow-monkey-blocks"),value:v,options:U,onChange:e=>{const t=V.map((t=>{if(!t.id)return t;const a=t?.media_details?.sizes?.[e]?e:f,s=t?.media_details?.sizes?.[a]?.source_url,l=t?.media_details?.sizes?.[a]?.width,i=t?.media_details?.sizes?.[a]?.height;return{url:s,alt:t.alt,id:t.id,width:l,height:i,caption:t.caption.rendered}}));a({images:t,sizeSlug:e})},help:(0,t.__)("Select the size of the source image.")})),(0,l.createElement)(d.__experimentalToolsPanelItem,{hasValue:()=>E!==s.Y4.aspectRatio.default,isShownByDefault:!0,label:(0,t.__)("Aspect ratio","snow-monkey-blocks"),onDeselect:()=>a({aspectRatio:s.Y4.aspectRatio.default})},(0,l.createElement)(d.SelectControl,{label:(0,t.__)("Aspect ratio","snow-monkey-blocks"),value:E,onChange:e=>a({aspectRatio:e}),options:W})),(0,l.createElement)(d.__experimentalToolsPanelItem,{hasValue:()=>y!==s.Y4.arrows.default,isShownByDefault:!0,label:(0,t.__)("Display arrows","snow-monkey-blocks"),onDeselect:()=>a({arrows:s.Y4.arrows.default})},(0,l.createElement)(d.ToggleControl,{label:(0,t.__)("Display arrows","snow-monkey-blocks"),checked:y,onChange:e=>a({arrows:e})})),(0,l.createElement)(d.__experimentalToolsPanelItem,{hasValue:()=>k!==s.Y4.dots.default,isShownByDefault:!0,label:(0,t.__)("Display dots","snow-monkey-blocks"),onDeselect:()=>a({dots:s.Y4.dots.default})},(0,l.createElement)(d.ToggleControl,{label:(0,t.__)("Display dots","snow-monkey-blocks"),checked:k,onChange:e=>a({dots:e})})),k&&(0,l.createElement)(d.__experimentalToolsPanelItem,{hasValue:()=>S!==s.Y4.dotsToThumbnail.default,isShownByDefault:!0,label:(0,t.__)("Change dots to thumbnails","snow-monkey-blocks"),onDeselect:()=>a({dotsToThumbnail:s.Y4.dotsToThumbnail.default})},(0,l.createElement)(d.ToggleControl,{label:(0,t.__)("Change dots to thumbnails","snow-monkey-blocks"),checked:S,onChange:e=>a({dotsToThumbnail:e})})),(0,l.createElement)(d.__experimentalToolsPanelItem,{hasValue:()=>N!==s.Y4.fade.default,isShownByDefault:!0,label:(0,t.__)("Fade","snow-monkey-blocks"),onDeselect:()=>a({fade:s.Y4.fade.default})},(0,l.createElement)(d.ToggleControl,{label:(0,t.__)("Fade","snow-monkey-blocks"),checked:N,onChange:e=>a({fade:e})})),M&&(0,l.createElement)(d.__experimentalToolsPanelItem,{hasValue:()=>T!==s.Y4.shifted.default,isShownByDefault:!0,label:(0,t.__)("Shifting the slider","snow-monkey-blocks"),onDeselect:()=>a({shifted:s.Y4.shifted.default})},(0,l.createElement)(d.ToggleControl,{label:(0,t.__)("Shifting the slider","snow-monkey-blocks"),help:T&&(!A||!$)&&(0,l.createElement)(l.Fragment,null,(0,l.createElement)(u,{icon:h,style:{fill:"#d94f4f"}}),(0,t.__)("It must be full width (.alignfull) or wide width (.alignwide).","snow-monkey-blocks")),checked:T,onChange:e=>a({shifted:e})})),(0,l.createElement)(d.__experimentalToolsPanelItem,{hasValue:()=>C!==s.Y4.displayCaption.default,isShownByDefault:!0,label:(0,t.__)("Display caption","snow-monkey-blocks"),onDeselect:()=>a({displayCaption:s.Y4.displayCaption.default})},(0,l.createElement)(d.ToggleControl,{label:(0,t.__)("Display caption","snow-monkey-blocks"),checked:C,onChange:e=>a({displayCaption:e})})),(0,l.createElement)(d.__experimentalToolsPanelItem,{hasValue:()=>D!==s.Y4.interval.default,isShownByDefault:!0,label:(0,t.__)("Autoplay Speed in seconds","snow-monkey-blocks"),onDeselect:()=>a({interval:s.Y4.interval.default})},(0,l.createElement)(d.RangeControl,{label:(0,t.__)("Autoplay Speed in seconds","snow-monkey-blocks"),help:(0,t.__)('If "0", no scroll.',"snow-monkey-blocks"),value:D,onChange:e=>a({interval:g(e,0,10)}),min:"0",max:"10"})),(0,l.createElement)(d.__experimentalToolsPanelItem,{hasValue:()=>z!==s.Y4.duration.default,isShownByDefault:!0,label:(0,t.__)("Animation speed in seconds","snow-monkey-blocks"),onDeselect:()=>a({duration:s.Y4.duration.default})},(0,l.createElement)(d.RangeControl,{label:(0,t.__)("Animation speed in seconds","snow-monkey-blocks"),help:(0,t.__)('If "0", default animation speed.',"snow-monkey-blocks"),value:z,onChange:e=>a({duration:g(e,0,10)}),min:"0",max:"5",step:"0.1"})),!N&&(0,l.createElement)(d.__experimentalToolsPanelItem,{hasValue:()=>P!==s.Y4.lgSlidesToShow.default||Y!==s.Y4.mdSlidesToShow.default||B!==s.Y4.smSlidesToShow.default,isShownByDefault:!0,label:(0,t.__)("Slides settings","snow-monkey-blocks"),onDeselect:()=>a({lgSlidesToShow:s.Y4.lgSlidesToShow.default,mdSlidesToShow:s.Y4.mdSlidesToShow.default,smSlidesToShow:s.Y4.smSlidesToShow.default})},(0,l.createElement)(_,{desktop:()=>(0,l.createElement)(d.RangeControl,{label:(0,t.__)("# of slides to show (Large window)","snow-monkey-blocks"),value:P,onChange:e=>a({lgSlidesToShow:g(e,1,6)}),min:"1",max:6<b.length?6:b.length}),tablet:()=>(0,l.createElement)(d.RangeControl,{label:(0,t.__)("# of slides to show (Medium window)","snow-monkey-blocks"),value:Y,onChange:e=>a({mdSlidesToShow:g(e,1,6)}),min:"1",max:6<b.length?6:b.length}),mobile:()=>(0,l.createElement)(d.RangeControl,{label:(0,t.__)("# of slides to show (Small window)","snow-monkey-blocks"),value:B,onChange:e=>a({smSlidesToShow:g(e,1,6)}),min:"1",max:6<b.length?6:b.length})})))),R?(0,l.createElement)("div",{...(0,n.useBlockProps)({className:L,ref:F}),"data-fade":N?"true":"false","data-lg-slide-to-show":!N&&1<P?P:void 0,"data-md-slide-to-show":!N&&1<Y?Y:void 0,"data-sm-slide-to-show":!N&&1<B?B:void 0},(0,l.createElement)("div",{className:"spider"},H&&(0,l.createElement)("div",{className:"c-container"},(0,l.createElement)("div",{className:"spider__reference",ref:j})),(0,l.createElement)("div",{className:"spider__canvas",ref:O},b.map(((e,t)=>(0,l.createElement)("div",{className:"spider__slide","data-id":t,key:t},(0,l.createElement)("div",{className:"smb-spider-slider__figure-wrapper"},(0,l.createElement)("img",{className:`spider__figure wp-image-${e.id}`,src:e.url,alt:e.alt,width:e.width||e.sizes?.full?.width,height:e.height||e.sizes?.full?.height,"data-image-id":e.id})),C&&!!e.caption&&(0,l.createElement)("div",{className:"smb-spider-slider__item"},(0,l.createElement)("div",{className:"smb-spider-slider__item__caption"},e.caption)))))),y&&(0,l.createElement)("div",{className:"spider__arrows"},(0,l.createElement)("button",{className:"spider__arrow","data-direction":"prev"},"Prev"),(0,l.createElement)("button",{className:"spider__arrow","data-direction":"next"},"Next"))),k&&(0,l.createElement)("div",{className:"spider__dots","data-thumbnails":S?"true":"false"},b.map(((e,t)=>(0,l.createElement)("button",{className:"spider__dot","data-id":t,key:t},S?(0,l.createElement)("img",{className:`spider__figure wp-image-${e.id}`,src:e.url,alt:e.alt,width:e.width||e.sizes?.full?.width,height:e.height||e.sizes?.full?.height}):(0,l.createElement)(l.Fragment,null,t))))),q):(0,l.createElement)("div",{...(0,n.useBlockProps)({ref:F})},q))},save:function({attributes:e,className:t}){const{images:a,aspectRatio:s,arrows:i,dots:r,dotsToThumbnail:d,fade:m,shifted:c,gutter:u,displayCaption:p,interval:h,duration:_,lgSlidesToShow:g,mdSlidesToShow:w,smSlidesToShow:f}=e;if(!a.length)return null;const b="wide"===e.align,v="full"===e.align,E=c&&!m&&(b||v),y=o()("smb-spider-slider",t,{[`smb-spider-slider--${s}`]:!!s,"smb-spider-slider--shifted":E,[`smb-spider-slider--gutter-${u}`]:!!u});return(0,l.createElement)("div",{...n.useBlockProps.save({className:y}),"data-fade":m?"true":"false","data-interval":0<h?1e3*h:void 0,"data-duration":0<_?1e3*_:void 0,"data-lg-slide-to-show":!m&&1<g?g:void 0,"data-md-slide-to-show":!m&&1<w?w:void 0,"data-sm-slide-to-show":!m&&1<f?f:void 0},(0,l.createElement)("div",{className:"spider"},E&&(0,l.createElement)("div",{className:"c-container"},(0,l.createElement)("div",{className:"spider__reference"})),(0,l.createElement)("div",{className:"spider__canvas"},a.map(((e,t)=>(0,l.createElement)("div",{className:"spider__slide","data-id":t,key:t},(0,l.createElement)("div",{className:"smb-spider-slider__figure-wrapper"},(0,l.createElement)("img",{className:`spider__figure wp-image-${e.id}`,src:e.url,alt:e.alt,width:e.width||e.sizes?.full?.width,height:e.height||e.sizes?.full?.height,"data-image-id":e.id})),p&&!!e.caption&&(0,l.createElement)("div",{className:"smb-spider-slider__item"},(0,l.createElement)("div",{className:"smb-spider-slider__item__caption"},e.caption)))))),i&&(0,l.createElement)("div",{className:"spider__arrows"},(0,l.createElement)("button",{className:"spider__arrow","data-direction":"prev"},"Prev"),(0,l.createElement)("button",{className:"spider__arrow","data-direction":"next"},"Next"))),r&&(0,l.createElement)("div",{className:"spider__dots","data-thumbnails":d?"true":"false"},a.map(((e,t)=>(0,l.createElement)("button",{className:"spider__dot","data-id":t,key:t},d?(0,l.createElement)("img",{className:`spider__figure wp-image-${e.id}`,src:e.url,alt:e.alt,width:e.width||e.sizes?.full?.width,height:e.height||e.sizes?.full?.height}):(0,l.createElement)(l.Fragment,null,t))))))},deprecated:E,example:y})})()})();