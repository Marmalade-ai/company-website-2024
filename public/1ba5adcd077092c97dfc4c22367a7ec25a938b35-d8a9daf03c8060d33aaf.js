"use strict";(self.webpackChunkcompany_website_2023=self.webpackChunkcompany_website_2023||[]).push([[870],{3204:function(e){const t=/[\p{Lu}]/u,a=/[\p{Ll}]/u,r=/^[\p{Lu}](?![\p{Lu}])/gu,n=/([\p{Alpha}\p{N}_]|$)/u,l=/[_.\- ]+/,s=new RegExp("^"+l.source),i=new RegExp(l.source+n.source,"gu"),o=new RegExp("\\d+"+n.source,"gu"),c=(e,n)=>{if("string"!=typeof e&&!Array.isArray(e))throw new TypeError("Expected the input to be `string | string[]`");if(n={pascalCase:!1,preserveConsecutiveUppercase:!1,...n},0===(e=Array.isArray(e)?e.map((e=>e.trim())).filter((e=>e.length)).join("-"):e.trim()).length)return"";const l=!1===n.locale?e=>e.toLowerCase():e=>e.toLocaleLowerCase(n.locale),c=!1===n.locale?e=>e.toUpperCase():e=>e.toLocaleUpperCase(n.locale);if(1===e.length)return n.pascalCase?c(e):l(e);return e!==l(e)&&(e=((e,r,n)=>{let l=!1,s=!1,i=!1;for(let o=0;o<e.length;o++){const c=e[o];l&&t.test(c)?(e=e.slice(0,o)+"-"+e.slice(o),l=!1,i=s,s=!0,o++):s&&i&&a.test(c)?(e=e.slice(0,o-1)+"-"+e.slice(o-1),i=s,s=!1,l=!0):(l=r(c)===c&&n(c)!==c,i=s,s=n(c)===c&&r(c)!==c)}return e})(e,l,c)),e=e.replace(s,""),e=n.preserveConsecutiveUppercase?((e,t)=>(r.lastIndex=0,e.replace(r,(e=>t(e)))))(e,l):l(e),n.pascalCase&&(e=c(e.charAt(0))+e.slice(1)),((e,t)=>(i.lastIndex=0,o.lastIndex=0,e.replace(i,((e,a)=>t(a))).replace(o,(e=>t(e)))))(e,c)};e.exports=c,e.exports.default=c},8032:function(e,t,a){a.d(t,{L:function(){return p},M:function(){return _},P:function(){return E},S:function(){return F},_:function(){return i},a:function(){return s},b:function(){return d},g:function(){return u},h:function(){return o}});var r=a(7294),n=(a(3204),a(5697)),l=a.n(n);function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},s.apply(this,arguments)}function i(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)t.indexOf(a=l[r])>=0||(n[a]=e[a]);return n}const o=()=>"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype;function c(e,t,a){const r={};let n="gatsby-image-wrapper";return"fixed"===a?(r.width=e,r.height=t):"constrained"===a&&(n="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:n,"data-gatsby-image-wrapper":"",style:r}}function d(e,t,a,r,n){return void 0===n&&(n={}),s({},a,{loading:r,shouldLoad:e,"data-main-image":"",style:s({},n,{opacity:t?1:0})})}function u(e,t,a,r,n,l,i,o){const c={};l&&(c.backgroundColor=l,"fixed"===a?(c.width=r,c.height=n,c.backgroundColor=l,c.position="relative"):("constrained"===a||"fullWidth"===a)&&(c.position="absolute",c.top=0,c.left=0,c.bottom=0,c.right=0)),i&&(c.objectFit=i),o&&(c.objectPosition=o);const d=s({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:s({opacity:t?0:1,transition:"opacity 500ms linear"},c)});return d}const m=["children"],g=function(e){let{layout:t,width:a,height:n}=e;return"fullWidth"===t?r.createElement("div",{"aria-hidden":!0,style:{paddingTop:n/a*100+"%"}}):"constrained"===t?r.createElement("div",{style:{maxWidth:a,display:"block"}},r.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:"data:image/svg+xml;charset=utf-8,%3Csvg%20height='"+n+"'%20width='"+a+"'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E",style:{maxWidth:"100%",display:"block",position:"static"}})):null},p=function(e){let{children:t}=e,a=i(e,m);return r.createElement(r.Fragment,null,r.createElement(g,s({},a)),t,null)},h=["src","srcSet","loading","alt","shouldLoad"],f=["fallback","sources","shouldLoad"],y=function(e){let{src:t,srcSet:a,loading:n,alt:l="",shouldLoad:o}=e,c=i(e,h);return r.createElement("img",s({},c,{decoding:"async",loading:n,src:o?t:void 0,"data-src":o?void 0:t,srcSet:o?a:void 0,"data-srcset":o?void 0:a,alt:l}))},b=function(e){let{fallback:t,sources:a=[],shouldLoad:n=!0}=e,l=i(e,f);const o=l.sizes||(null==t?void 0:t.sizes),c=r.createElement(y,s({},l,t,{sizes:o,shouldLoad:n}));return a.length?r.createElement("picture",null,a.map((e=>{let{media:t,srcSet:a,type:l}=e;return r.createElement("source",{key:t+"-"+l+"-"+a,type:l,media:t,srcSet:n?a:void 0,"data-srcset":n?void 0:a,sizes:o})})),c):c};var w;y.propTypes={src:n.string.isRequired,alt:n.string.isRequired,sizes:n.string,srcSet:n.string,shouldLoad:n.bool},b.displayName="Picture",b.propTypes={alt:n.string.isRequired,shouldLoad:n.bool,fallback:n.exact({src:n.string.isRequired,srcSet:n.string,sizes:n.string}),sources:n.arrayOf(n.oneOfType([n.exact({media:n.string.isRequired,type:n.string,sizes:n.string,srcSet:n.string.isRequired}),n.exact({media:n.string,type:n.string.isRequired,sizes:n.string,srcSet:n.string.isRequired})]))};const v=["fallback"],E=function(e){let{fallback:t}=e,a=i(e,v);return t?r.createElement(b,s({},a,{fallback:{src:t},"aria-hidden":!0,alt:""})):r.createElement("div",s({},a))};E.displayName="Placeholder",E.propTypes={fallback:n.string,sources:null==(w=b.propTypes)?void 0:w.sources,alt:function(e,t,a){return e[t]?new Error("Invalid prop `"+t+"` supplied to `"+a+"`. Validation failed."):null}};const _=function(e){return r.createElement(r.Fragment,null,r.createElement(b,s({},e)),r.createElement("noscript",null,r.createElement(b,s({},e,{shouldLoad:!0}))))};_.displayName="MainImage",_.propTypes=b.propTypes;const k=["as","className","class","style","image","loading","imgClassName","imgStyle","backgroundColor","objectFit","objectPosition"],L=["style","className"],C=e=>e.replace(/\n/g,""),N=function(e,t,a){for(var r=arguments.length,n=new Array(r>3?r-3:0),s=3;s<r;s++)n[s-3]=arguments[s];return e.alt||""===e.alt?l().string.apply(l(),[e,t,a].concat(n)):new Error('The "alt" prop is required in '+a+'. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html')},S={image:l().object.isRequired,alt:N},x=["as","image","style","backgroundColor","className","class","onStartLoad","onLoad","onError"],I=["style","className"],M=new Set;let T,A;const O=function(e){let{as:t="div",image:n,style:l,backgroundColor:d,className:u,class:m,onStartLoad:g,onLoad:p,onError:h}=e,f=i(e,x);const{width:y,height:b,layout:w}=n,v=c(y,b,w),{style:E,className:_}=v,k=i(v,I),L=(0,r.useRef)(),C=(0,r.useMemo)((()=>JSON.stringify(n.images)),[n.images]);m&&(u=m);const N=function(e,t,a){let r="";return"fullWidth"===e&&(r='<div aria-hidden="true" style="padding-top: '+a/t*100+'%;"></div>'),"constrained"===e&&(r='<div style="max-width: '+t+'px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg%20height=\''+a+"'%20width='"+t+"'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E\" style=\"max-width: 100%; display: block; position: static;\"></div>"),r}(w,y,b);return(0,r.useEffect)((()=>{T||(T=a.e(731).then(a.bind(a,6731)).then((e=>{let{renderImageToString:t,swapPlaceholderImage:a}=e;return A=t,{renderImageToString:t,swapPlaceholderImage:a}})));const e=L.current.querySelector("[data-gatsby-image-ssr]");if(e&&o())return e.complete?(null==g||g({wasCached:!0}),null==p||p({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)):(null==g||g({wasCached:!0}),e.addEventListener("load",(function t(){e.removeEventListener("load",t),null==p||p({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)}))),void M.add(C);if(A&&M.has(C))return;let t,r;return T.then((e=>{let{renderImageToString:a,swapPlaceholderImage:i}=e;L.current&&(L.current.innerHTML=a(s({isLoading:!0,isLoaded:M.has(C),image:n},f)),M.has(C)||(t=requestAnimationFrame((()=>{L.current&&(r=i(L.current,C,M,l,g,p,h))}))))})),()=>{t&&cancelAnimationFrame(t),r&&r()}}),[n]),(0,r.useLayoutEffect)((()=>{M.has(C)&&A&&(L.current.innerHTML=A(s({isLoading:M.has(C),isLoaded:M.has(C),image:n},f)),null==g||g({wasCached:!0}),null==p||p({wasCached:!0}))}),[n]),(0,r.createElement)(t,s({},k,{style:s({},E,l,{backgroundColor:d}),className:_+(u?" "+u:""),ref:L,dangerouslySetInnerHTML:{__html:N},suppressHydrationWarning:!0}))},j=(0,r.memo)((function(e){return e.image?(0,r.createElement)(O,e):null}));j.propTypes=S,j.displayName="GatsbyImage";const q=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions","breakpoints","outputPixelDensities"];function R(e){return function(t){let{src:a,__imageData:n,__error:l}=t,o=i(t,q);return l&&console.warn(l),n?r.createElement(e,s({image:n},o)):(console.warn("Image not loaded",a),null)}}const P=R((function(e){let{as:t="div",className:a,class:n,style:l,image:o,loading:m="lazy",imgClassName:g,imgStyle:h,backgroundColor:f,objectFit:y,objectPosition:b}=e,w=i(e,k);if(!o)return console.warn("[gatsby-plugin-image] Missing image prop"),null;n&&(a=n),h=s({objectFit:y,objectPosition:b,backgroundColor:f},h);const{width:v,height:N,layout:S,images:x,placeholder:I,backgroundColor:M}=o,T=c(v,N,S),{style:A,className:O}=T,j=i(T,L),q={fallback:void 0,sources:[]};return x.fallback&&(q.fallback=s({},x.fallback,{srcSet:x.fallback.srcSet?C(x.fallback.srcSet):void 0})),x.sources&&(q.sources=x.sources.map((e=>s({},e,{srcSet:C(e.srcSet)})))),r.createElement(t,s({},j,{style:s({},A,l,{backgroundColor:f}),className:O+(a?" "+a:"")}),r.createElement(p,{layout:S,width:v,height:N},r.createElement(E,s({},u(I,!1,S,v,N,M,y,b))),r.createElement(_,s({"data-gatsby-image-ssr":"",className:g},w,d("eager"===m,!1,q,m,h)))))})),z=function(e,t){for(var a=arguments.length,r=new Array(a>2?a-2:0),n=2;n<a;n++)r[n-2]=arguments[n];return"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?l().number.apply(l(),[e,t].concat(r)):new Error('"'+t+'" '+e[t]+" may not be passed when layout is fullWidth.")},U=new Set(["fixed","fullWidth","constrained"]),W={src:l().string.isRequired,alt:N,width:z,height:z,sizes:l().string,layout:e=>{if(void 0!==e.layout&&!U.has(e.layout))return new Error("Invalid value "+e.layout+'" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".')}};P.displayName="StaticImage",P.propTypes=W;const F=R(j);F.displayName="StaticImage",F.propTypes=W},57:function(e,t,a){a.d(t,{Z:function(){return d}});var r=a(7294),n=a(1883),l="layout-module--nav-link-item--a5f0a",s="layout-module--nav-link-text--69cda",i=a(8032);var o=()=>r.createElement("header",null,r.createElement("nav",{class:"black-border"},r.createElement("div",{class:"black-border",className:"titleStyle"},r.createElement(i.S,{src:"../../images/Marmalade_Logo_trans_white_M_100.webp",alt:"The Marmalade AI Logo.",title:"Marmalade AI, Inc.",width:40,__imageData:a(6474)})," Marmalade AI")));var c=()=>r.createElement("footer",null,r.createElement("br",null),r.createElement("div",null,r.createElement("ul",null,r.createElement("li",null,r.createElement("a",{href:"mailto:info@marmalade.ai"},"Contact Us")),r.createElement("li",null,r.createElement(n.rU,{to:"/code-of-conduct"},"Code of Conduct")),r.createElement("li",null,r.createElement(n.rU,{to:"/privacy-policy"},"Privacy Policy"))),r.createElement("br",null),r.createElement("h4",{className:"base-text"},"Copyright © 2021-2023 Marmalade AI, Inc.")));var d=e=>{let{pageTitle:t,children:a}=e;const i=(0,n.K2)("3159585216");return r.createElement("div",{className:"layout-module--container--78b04"},r.createElement(o,null,"className=","layout-module--site-title--e4dea",i.site.siteMetadata.title),r.createElement("nav",{class:"black-border"},r.createElement("ul",{className:"layout-module--nav-links--1113b"},r.createElement("li",{className:l},r.createElement(n.rU,{to:"/",className:s},"Home")),r.createElement("li",{className:l},r.createElement(n.rU,{to:"/faq",className:s},"FAQ")),r.createElement("li",{className:l},r.createElement(n.rU,{to:"/about",className:s},"About")))),r.createElement("main",{class:"black-border"},r.createElement("div",{className:"layout-module--heading--f158c"},t),a),r.createElement(c,null))}},6474:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#080808","images":{"fallback":{"src":"/static/6d5dd77047ebf599c4054cac24cff5b4/e73fe/Marmalade_Logo_trans_white_M_100.webp","srcSet":"/static/6d5dd77047ebf599c4054cac24cff5b4/bd5c1/Marmalade_Logo_trans_white_M_100.webp 10w,\\n/static/6d5dd77047ebf599c4054cac24cff5b4/264f2/Marmalade_Logo_trans_white_M_100.webp 20w,\\n/static/6d5dd77047ebf599c4054cac24cff5b4/e73fe/Marmalade_Logo_trans_white_M_100.webp 40w,\\n/static/6d5dd77047ebf599c4054cac24cff5b4/61ca6/Marmalade_Logo_trans_white_M_100.webp 80w","sizes":"(min-width: 40px) 40px, 100vw"},"sources":[]},"width":40,"height":40}')}}]);
//# sourceMappingURL=1ba5adcd077092c97dfc4c22367a7ec25a938b35-d8a9daf03c8060d33aaf.js.map