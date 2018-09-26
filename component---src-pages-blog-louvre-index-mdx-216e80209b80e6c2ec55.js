(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{147:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",function(){return p});var r=n(209),o=n.n(r),a=n(0),i=n.n(a),c=n(176),u=n(208),s=n(233),l=n.n(s);t.default=function(e){var t=e.components,n=o()(e,["components"]);return i.a.createElement(c.MDXTag,{name:"wrapper",Layout:u.a,layoutProps:n,components:t},i.a.createElement(c.MDXTag,{name:"p",components:t},i.a.createElement("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",maxWidth:650,marginLeft:"auto",marginRight:"auto"}},i.a.createElement("span",{className:"gatsby-resp-image-background-image",style:{paddingBottom:"56.22254758418741%",position:"relative",bottom:0,left:0,backgroundImage:'url("data:image/jpeg',backgroundSize:"cover",display:"block"}},i.a.createElement("picture",null,i.a.createElement("source",{srcSet:"/static/louvre-68543df41413b2969302b375e22d9f59-b5aaf.webp 163w,\n/static/louvre-68543df41413b2969302b375e22d9f59-d1ebb.webp 325w,\n/static/louvre-68543df41413b2969302b375e22d9f59-85b15.webp 650w,\n/static/louvre-68543df41413b2969302b375e22d9f59-a35a0.webp 975w,\n/static/louvre-68543df41413b2969302b375e22d9f59-2ea37.webp 1300w,\n/static/louvre-68543df41413b2969302b375e22d9f59-8073b.webp 1366w",sizes:"(max-width: 650px) 100vw, 650px",type:"image/webp"}),i.a.createElement("source",{srcSet:"/static/louvre-68543df41413b2969302b375e22d9f59-2d351.jpg 163w,\n/static/louvre-68543df41413b2969302b375e22d9f59-6b093.jpg 325w,\n/static/louvre-68543df41413b2969302b375e22d9f59-f8cd6.jpg 650w,\n/static/louvre-68543df41413b2969302b375e22d9f59-7629c.jpg 975w,\n/static/louvre-68543df41413b2969302b375e22d9f59-ada50.jpg 1300w,\n/static/louvre-68543df41413b2969302b375e22d9f59-4ecf8.jpg 1366w",sizes:"(max-width: 650px) 100vw, 650px",type:"image/jpeg"}),i.a.createElement("img",{className:"gatsby-resp-image-image",style:{width:"100%",height:"100%",margin:0,verticalAlign:"middle",position:"absolute",top:0,left:0,boxShadow:"inset 0px 0px 0px 400px white"},src:"/static/louvre-68543df41413b2969302b375e22d9f59-f8cd6.jpg",alt:"Le Louvre",title:!0}))))),i.a.createElement(c.MDXTag,{name:"p",components:t},"Photo by Serge Kutuzov on ",i.a.createElement(c.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"https://unsplash.com/photos/08L4l96KeUA"}},"Unsplash")," ",i.a.createElement(l.a,{text:":thumbsup:"}),"."))};var p={}},156:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return h}),n.d(t,"StaticQueryContext",function(){return f}),n.d(t,"StaticQuery",function(){return m});var r=n(0),o=n.n(r),a=n(4),i=n.n(a),c=n(154),u=n.n(c);n.d(t,"Link",function(){return u.a}),n.d(t,"withPrefix",function(){return c.withPrefix}),n.d(t,"navigate",function(){return c.navigate}),n.d(t,"push",function(){return c.push}),n.d(t,"replace",function(){return c.replace}),n.d(t,"navigateTo",function(){return c.navigateTo});var s=n(26);n.d(t,"waitForRouteChange",function(){return s.c});var l=n(157),p=n.n(l);n.d(t,"PageRenderer",function(){return p.a});var d=n(36);n.d(t,"parsePath",function(){return d.a});var f=o.a.createContext({}),m=function(e){return o.a.createElement(f.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):o.a.createElement("div",null,"Loading (StaticQuery)")})};function h(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}m.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},157:function(e,t,n){var r;e.exports=(r=n(163))&&r.default||r},159:function(e,t){var n=Array.isArray;e.exports=n},160:function(e,t,n){"use strict";var r=n(186),o=Object(r.a)(function(){return!1});t.a=o},161:function(e,t,n){"use strict";var r=n(7),o=n.n(r),a=n(164),i=n(182),c=n.n(i),u=n(0),s=n.n(u),l=n(183),p=n.n(l),d=n(153),f=n(156),m=n(4),h=n(155),b=n(167),g=n.n(b);function y(){var e=g()(["\n  html, body, #___gatsby, #___gatsby >div {\n    height: 100%;\n  }\n  div > p > .gatsby-resp-image-wrapper {\n    max-width: 100% !important;\n    .gatsby-resp-image-background-image {\n      border: 1px solid ",";\n      border-radius: ",";\n      overflow: hidden;\n    }\n  }\n  .katex-display { margin: 0 0 .5em; }\n  .katex { font: 300 1.15em KaTeX_Main, serif; }\n  ","\n  .center { text-align: center; }\n"]);return y=function(){return e},e}var v=Object(d.b)(y(),function(e){return e.theme.lightGray},function(e){return e.theme.borderRadius},function(e){return function(e){return'\ncode[class*="language-"],\npre[class*="language-"] {\n\tcolor: '+e.bodyColor+";\n\tbackground: none;\n\tfont-family: "+e.monospaceFont+';\n\ttext-align: left;\n\twhite-space: pre;\n\tword-spacing: normal;\n\tword-break: normal;\n\tword-wrap: normal;\n\tline-height: 1.5;\n\thyphens: none;\n}\n\n/* Code blocks */\npre[class*="language-"] {\n\tpadding: 1em;\n\tmargin: .5em 0;\n\toverflow: auto;\n\tborder-radius: '+e.borderRadius+";\n\tborder: 1px solid "+e.gray+';\n}\n\n:not(pre) > code[class*="language-"],\npre[class*="language-"] {\n\tbackground: '+e.lightGray+';\n}\n\n/* Inline code */\n:not(pre) > code[class*="language-"] {\n\tpadding: .1em;\n\tborder-radius: '+e.borderRadius+";\n\twhite-space: normal;\n}\n\n.token.comment,\n.token.prolog,\n.token.doctype,\n.token.cdata {\n\tcolor: "+e.gray+";\n}\n\n.token.punctuation {\n\tcolor: "+e.bodyColor+";\n}\n\n.namespace {\n\topacity: .7;\n}\n\n.token.property,\n.token.tag,\n.token.constant,\n.token.symbol,\n.token.deleted {\n\tcolor: "+e.secondaryColor+";\n}\n\n.token.boolean,\n.token.number {\n\tcolor: "+e.secondaryColor+";\n}\n\n.token.selector,\n.token.attr-name,\n.token.string,\n.token.char,\n.token.builtin,\n.token.inserted {\n\tcolor: "+e.secondaryColor+";\n}\n\n.token.operator,\n.token.entity,\n.token.url,\n.language-css .token.string,\n.style .token.string,\n.token.variable {\n\tcolor: "+e.bodyColor+";\n}\n\n.token.atrule,\n.token.attr-value,\n.token.function,\n.token.class-name {\n\tcolor: "+e.secondaryColor+";\n}\n\n.token.keyword {\n\tcolor: "+e.secondaryColor+";\n}\n\n.token.regex,\n.token.important {\n\tcolor: "+e.secondaryColor+";\n}\n\n.token.important,\n.token.bold {\n\tfont-weight: bold;\n}\n.token.italic {\n\tfont-style: italic;\n}\n\n.token.entity {\n\tcursor: help;\n}\n"}(e.theme)}),w=d.c.main.withConfig({componentId:"sc-1ph75po-0"})(["background:",";a{position:relative;display:inline-block;background:transparent;color:",";font-weight:bold;text-decoration:none;>span{color:inherit;background-color:inherit;}&::after{content:'';"," "," background:",";transition:opacity ",",transform ",";opacity:0;transform:translateY(.2em);}&:hover::after{opacity:1;transform:none;}}"],function(e){return e.theme.bgColor},function(e){return e.theme.secondaryColor},Object(h.a)("absolute",null,null,"0","0"),Object(h.b)("1px","100%"),function(e){return e.theme.secondaryColor},function(e){return e.theme.defaultTransition},function(e){return e.theme.defaultTransition}),E=n(160),k=Object(E.a)(d.c.header.withConfig({componentId:"sc-116zvyz-0"})(["margin:0 auto;max-width:","px;a{text-decoration:none;}"],function(e){return e.theme.maxWidth})),C=Object(E.a)(d.c.ul.withConfig({componentId:"sc-116zvyz-1"})(["display:block;list-style-type:none;margin:0;text-align:right;position:relative;white-space:nowrap;width:100%;&::before,&::after{content:'';display:block;background:linear-gradient( to right,transparent,",",transparent );position:absolute;","}&::before{top:0;}&::after{bottom:0;}>li{display:inline-block;margin:0;padding:1em 0;&:not(:first-child){margin-left:1em;}}a{color:",";font-family:",";font-size:14px;text-transform:uppercase;transition:color ",";&:hover,&:active{color:",";}}"],function(e){return e.theme.lightGray},Object(h.b)("1px","100%"),function(e){return e.theme.gray},function(e){return e.theme.headerFont},function(e){return e.theme.defaultTransition},function(e){return e.theme.headerColor})),j=Object(E.a)(Object(d.c)(f.Link).withConfig({componentId:"sc-116zvyz-2"})(["display:block;text-align:center;h1{display:inline-block;margin:.5em;font-weight:900;font-size:22px;letter-spacing:1px;position:relative;transition:color ",";&::after{content:'';border-radius:50%;display:block;background:",";"," ","}&:hover,&:active{color:",";}}"],function(e){return e.theme.defaultTransition},function(e){return e.theme.secondaryColor},Object(h.a)("absolute","8px","-1em",null,null),Object(h.b)("10px"),function(e){return e.theme.secondaryColor})),x=function(e){function t(){for(var t,n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(t=e.call.apply(e,[this].concat(r))||this).shouldComponentUpdate=function(){return!1},t}return o()(t,e),t.prototype.render=function(){return s.a.createElement("nav",null,s.a.createElement(k,null,s.a.createElement(j,{to:"/"},s.a.createElement("h1",null,this.props.title)),s.a.createElement(C,null,s.a.createElement("li",null,s.a.createElement(f.Link,{to:"/"},"Home")),s.a.createElement("li",null,s.a.createElement(f.Link,{to:"/tools"},"Tools")),s.a.createElement("li",null,s.a.createElement(f.Link,{to:"/about"},"About")))))},t}(u.Component);x.propTypes={title:m.string.isRequired};var O=n(162);n.d(t,"a",function(){return S});var _=d.c.div.withConfig({componentId:"grcys-0"})(["background:",";margin:1em auto;"," max-width:","px;position:relative;"],function(e){return e.theme.bgColor},Object(h.b)("100%","100vw"),function(e){return e.theme.maxWidth}),S=function(e){function t(){for(var t,n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(t=e.call.apply(e,[this].concat(r))||this).shouldComponentUpdate=function(){return!1},t}o()(t,e);var n=t.prototype;return n.componentDidMount=function(){t.fbPixelInitialized||(p.a.init("1915349895435128",{},{}),t.fbPixelInitialized=!0),p.a.pageView()},n.render=function(){var e=this.props,t=e.children,n=e.title,r=e.description;return s.a.createElement(d.a,{theme:O.a},s.a.createElement(f.StaticQuery,{query:"4226086209",render:function(e){var o=e.site.siteMetadata;return s.a.createElement(u.Fragment,null,s.a.createElement(c.a,null,s.a.createElement("html",{lang:"en",amp:!0}),s.a.createElement("title",null,n?o.title+": "+n:o.title),s.a.createElement("meta",{name:"description",content:r||o.description}),s.a.createElement("meta",{property:"og:title",content:n}),s.a.createElement("meta",{property:"og:description",content:r||o.description}),s.a.createElement("meta",{name:"twitter:card",content:"summary"}),s.a.createElement("meta",{name:"twitter:creator",content:"PEM___"}),s.a.createElement("meta",{name:"google-site-verification",content:o.googleSearchConsoleOwnershipId})),s.a.createElement(x,{title:o.title}),s.a.createElement(w,null,s.a.createElement(_,null,t({siteMetadata:o}))),s.a.createElement(v,null))},data:a}))},t}(u.Component);S.fbPixelInitialized=!1,S.propTypes={children:m.any.isRequired,description:m.string,title:m.string}},162:function(e,t,n){"use strict";t.a={bgColor:"white",bodyColor:"#333",borderRadius:"5px",defaultTransition:".3s ease-in-out",headerColor:"#181818",headerFont:"-apple-system,'BlinkMacSystemFont','Segoe UI','Roboto','Oxygen','Ubuntu','Cantarell','Fira Sans','Droid Sans','Helvetica Neue','sans-serif'",monospaceFont:"'Andale Mono', 'Ubuntu Mono', monospace",maxWidth:960,secondaryColor:"#e70808",smallFontSize:"10px",smallFontWeight:300,gray:"#7f7f7f",lightGray:"#e7e7e7",warningColor:"#f4ab55"}},163:function(e,t,n){"use strict";n.r(t);var r=n(10),o=n.n(r),a=n(0),i=n.n(a),c=n(4),u=n.n(c),s=n(51),l=n(1),p=function(e){var t=e.location,n=l.default.getResourcesForPathnameSync(t.pathname);return i.a.createElement(s.a,o()({location:t,pageResources:n},n.json))};p.propTypes={location:u.a.shape({pathname:u.a.string.isRequired}).isRequired},t.default=p},164:function(e){e.exports={data:{site:{siteMetadata:{description:"Notes and posts about development, Math, ML and AI",discussShortName:"https-pem-github-io",googleSearchConsoleOwnershipId:"IIdc-ufE7Rf_Gn8p7Ee83Ua7obcDac8tk2DLW_p87Ak",siteUrl:"https://pem--.github.io",title:"PEM's blog"}}}}},165:function(e,t,n){"use strict";n.d(t,"a",function(){return g});n(77);var r=n(7),o=n.n(r),a=n(0),i=n.n(a),c=n(153),u=n(587),s=n(588),l=n(589),p=n(590),d=n(591),f=n(592),m=n(155),h=n(4),b=c.c.div.withConfig({componentId:"sc-199atao-0"})(["display:flex;justify-content:center;margin:2em 0;position:relative;&::before,&::after{content:'';display:block;background:linear-gradient( to right,transparent,",",transparent );position:absolute;","}&::before{top:-1em;}&::after{bottom:-1em;}>*{cursor:pointer;flex:0 0 auto;outline:0;&:not(:first-of-type){margin-left:1.5em;}}"],function(e){return e.theme.lightGray},Object(m.b)("1px","100%")),g=function(e){function t(){for(var t,n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(t=e.call.apply(e,[this].concat(r))||this).shouldComponentUpdate=function(e){var n=e.href,r=e.title;return t.props.href!==n||t.props.title!==r},t}return o()(t,e),t.prototype.render=function(){var e={url:this.props.href};return i.a.createElement(b,null,i.a.createElement(u.a,Object.assign({title:this.props.title},e),i.a.createElement(s.a,t.shareIconProps)),i.a.createElement(l.a,Object.assign({title:this.props.title},e),i.a.createElement(p.a,t.shareIconProps)),i.a.createElement(d.a,Object.assign({subject:this.props.title},e),i.a.createElement(f.a,t.shareIconProps)))},t}(a.Component);g.shareIconProps={round:!0,size:32},g.propTypes={href:h.string.isRequired,title:h.string.isRequired}},168:function(e,t,n){var r=n(169).Symbol;e.exports=r},169:function(e,t,n){var r=n(188),o="object"==typeof self&&self&&self.Object===Object&&self,a=r||o||Function("return this")();e.exports=a},171:function(e,t){e.exports=function(e){return null!=e&&"object"==typeof e}},172:function(e,t,n){"use strict";n.d(t,"a",function(){return u});var r=n(7),o=n.n(r),a=n(0),i=n.n(a),c=n(4),u=function(e){function t(){for(var t,n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(t=e.call.apply(e,[this].concat(r))||this).shouldComponentUpdate=function(){return!1},t}return o()(t,e),t.prototype.render=function(){return i.a.createElement("a",{href:this.props.href,target:"_blank",rel:"noreferrer noopener"},this.props.text)},t}(a.Component);u.propTypes={href:c.string.isRequired,text:c.string.isRequired}},173:function(e,t,n){var r=n(168),o=n(200),a=n(201),i="[object Null]",c="[object Undefined]",u=r?r.toStringTag:void 0;e.exports=function(e){return null==e?void 0===e?c:i:u&&u in Object(e)?o(e):a(e)}},176:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(224);Object.defineProperty(t,"MDXTag",{enumerable:!0,get:function(){return a(r).default}});var o=n(189);function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"MDXProvider",{enumerable:!0,get:function(){return a(o).default}})},184:function(e,t,n){"use strict";var r=n(153),o=n(155);t.a=r.c.h1.withConfig({componentId:"sc-1szmnsq-0"})(["position:relative;width:calc(100% - 60px);small{color:",";display:block;font-weight:",";font-size:",";font-style:italic;"," text-align:right;width:60px;}"],function(e){return e.theme.gray},function(e){return e.theme.smallFontWeight},function(e){return e.theme.smallFontSize},Object(o.a)("absolute",null,"-60px",0,null))},188:function(e,t,n){(function(t){var n="object"==typeof t&&t&&t.Object===Object&&t;e.exports=n}).call(this,n(181))},189:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.withMDXComponents=void 0;var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=c(n(0)),a=c(n(53)),i=c(n(4));function c(e){return e&&e.__esModule?e:{default:e}}var u=(0,a.default)({}),s=u.Provider,l=u.Consumer;t.withMDXComponents=function(e){return function(t){var n=t.components,a=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}(t,["components"]);return o.default.createElement(l,null,function(t){return o.default.createElement(e,r({components:n||t},a))})}};var p=function(e){var t=e.components,n=e.children;return o.default.createElement(s,{value:t},n)};p.propTypes={components:i.default.object.isRequired,children:i.default.element.isRequired},t.default=p},190:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.insertScript=function(e,t,n){var r=window.document.createElement("script");return r.async=!0,r.src=e,r.id=t,n.appendChild(r),r},t.removeScript=function(e,t){var n=window.document.getElementById(e);n&&t.removeChild(n)},t.debounce=function(e,t,n){var r=void 0;return function(){var o=this,a=arguments,i=n&&!r;window.clearTimeout(r),r=setTimeout(function(){r=null,n||e.apply(o,a)},t),i&&e.apply(o,a)}}},200:function(e,t,n){var r=n(168),o=Object.prototype,a=o.hasOwnProperty,i=o.toString,c=r?r.toStringTag:void 0;e.exports=function(e){var t=a.call(e,c),n=e[c];try{e[c]=void 0;var r=!0}catch(e){}var o=i.call(e);return r&&(t?e[c]=n:delete e[c]),o}},201:function(e,t){var n=Object.prototype.toString;e.exports=function(e){return n.call(e)}},202:function(e,t,n){var r=n(173),o=n(159),a=n(171),i="[object String]";e.exports=function(e){return"string"==typeof e||!o(e)&&a(e)&&r(e)==i}},208:function(e,t,n){"use strict";var r=n(215),o=n.n(r),a=n(0),i=n.n(a),c=n(220),u=n.n(c),s=n(221),l=n.n(s),p=n(7),d=n.n(p),f=n(153),m=n(155),h=n(4),b=n(172),g=f.c.span.withConfig({componentId:"sc-1rxao4w-0"})(["display:block;"," font-size:.8em;"],Object(m.a)("absolute","-.3em",0,null,null)),y=function(e){function t(){for(var t,n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(t=e.call.apply(e,[this].concat(r))||this).shouldComponentUpdate=function(){return!1},t}return d()(t,e),t.prototype.render=function(){return i.a.createElement(g,null,i.a.createElement(b.a,{href:"https://github.com/PEM--/PEM--.github.io/tree/master/src/src/pages/blog/"+this.props.slug,text:"Contribute on Github"}))},t}(a.Component);y.propTypes={slug:h.string.isRequired};var v=n(184),w=n(161),E=(n(77),n(216),n(202)),k=n.n(E),C=n(176),j=f.c.blockquote.withConfig({componentId:"jcqrfk-0"})(["border-left:1px solid ",";margin-left:1.5em;padding-left:1em;position:relative;&::before{content:'➸';color:",";display:block;font-size:1.2em;","}"],function(e){return e.theme.lightGray},function(e){return e.theme.secondaryColor},Object(m.a)("absolute",0,null,null,"-1.5em")),x=f.c.p.withConfig({componentId:"jcqrfk-1"})(["text-align:justify;&.semiColon{margin-bottom:0;}"]),O=function(e){function t(){for(var t,n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(t=e.call.apply(e,[this].concat(r))||this).shouldComponentUpdate=function(){return!1},t}return d()(t,e),t.prototype.render=function(){var e=this.props.children&&k()(this.props.children)&&this.props.children.endsWith(":");return i.a.createElement(x,Object.assign({className:e&&"semiColon"},this.props))},t}(a.Component);O.propTypes={children:h.any};var _=function(e){function t(){for(var t,n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(t=e.call.apply(e,[this].concat(r))||this).shouldComponentUpdate=function(){return!1},t}return d()(t,e),t.prototype.render=function(){return i.a.createElement(C.MDXProvider,{components:{a:function(e){var t=e.href,n=e.children;return i.a.createElement(b.a,{href:t,text:n})},blockquote:function(e){return i.a.createElement(j,e)},p:function(e){return i.a.createElement(O,e)}}},this.props.children)},t}(a.Component);_.propTypes={children:h.any.isRequired};var S=n(165),P=l.a.react(function(e){var t=e.children,n=e.location.href,r=e.pageContext.frontmatter,c={identifier:r.slug,title:r.title,url:n};return i.a.createElement(w.a,r,function(e){var s=e.siteMetadata;return i.a.createElement(a.Fragment,null,i.a.createElement(v.a,null,r.title,i.a.createElement("small",null,u()(r.date,"DD/MM/YY"))),r.contribute&&i.a.createElement(y,{slug:r.slug}),i.a.createElement(_,null,t),i.a.createElement(S.a,{href:n,title:r.title}),r.comment&&i.a.createElement(o.a.DiscussionEmbed,{config:c,shortname:s.discussShortName}))})});t.a=P},215:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.DiscussionEmbed=t.CommentEmbed=t.CommentCount=void 0;var r=n(225),o=n(226),a=n(227);t.CommentCount=r.CommentCount,t.CommentEmbed=o.CommentEmbed,t.DiscussionEmbed=a.DiscussionEmbed;var i={CommentCount:r.CommentCount,CommentEmbed:o.CommentEmbed,DiscussionEmbed:a.DiscussionEmbed};t.default=i},216:function(e,t,n){"use strict";var r=n(6),o=n(27),a=n(228),i="".endsWith;r(r.P+r.F*n(229)("endsWith"),"String",{endsWith:function(e){var t=a(this,e,"endsWith"),n=arguments.length>1?arguments[1]:void 0,r=o(t.length),c=void 0===n?r:Math.min(o(n),r),u=String(e);return i?i.call(t,u,c):t.slice(c-u.length,c)===u}})},224:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=n(0),i=s(a),c=s(n(234)),u=n(189);function s(e){return e&&e.__esModule?e:{default:e}}var l={inlineCode:"code",wrapper:"div"},p=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.Component),o(t,[{key:"render",value:function(){var e=this.props,t=e.name,n=e.parentName,o=e.props,a=void 0===o?{}:o,u=e.children,s=e.components,p=void 0===s?{}:s,d=e.Layout,f=e.layoutProps,m=p[n+"."+t]||p[t]||l[t]||t;return d?((0,c.default)(this,d),i.default.createElement(d,r({components:p},f),i.default.createElement(m,a,u))):i.default.createElement(m,a,u)}}]),t}();t.default=(0,u.withMDXComponents)(p)},225:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CommentCount=void 0;var r,o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=n(0),i=(r=a)&&r.__esModule?r:{default:r},c=n(190);var u=(0,c.debounce)(function(){window.DISQUSWIDGETS&&window.DISQUSWIDGETS.getCount({reset:!0})},300,!1);t.CommentCount=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,i.default.Component),o(t,[{key:"componentDidMount",value:function(){this.loadInstance()}},{key:"shouldComponentUpdate",value:function(e){if(this.props.shortname!==e.shortname)return!0;var t=e.config,n=this.props.config;return t.url!==n.url&&t.identifier!==n.identifier}},{key:"componentWillUpdate",value:function(e){this.props.shortname!==e.shortname&&this.cleanInstance()}},{key:"componentDidUpdate",value:function(){this.loadInstance()}},{key:"loadInstance",value:function(){var e=window.document;e.getElementById("dsq-count-scr")?u():(0,c.insertScript)("https://"+this.props.shortname+".disqus.com/count.js","dsq-count-scr",e.body)}},{key:"cleanInstance",value:function(){var e=window.document.body;(0,c.removeScript)("dsq-count-scr",e),window.DISQUSWIDGETS=void 0}},{key:"render",value:function(){return i.default.createElement("span",{className:"disqus-comment-count","data-disqus-identifier":this.props.config.identifier,"data-disqus-url":this.props.config.url},this.props.children)}}]),t}()},226:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CommentEmbed=void 0;var r,o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=n(0),i=(r=a)&&r.__esModule?r:{default:r};(t.CommentEmbed=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,i.default.Component),o(t,[{key:"getSrc",value:function(){return"https://embed.disqus.com/p/"+Number(this.props.commentId).toString(36)+"?p="+(this.props.showParentComment?"1":"0")+"&m="+(this.props.showMedia?"1":"0")}},{key:"render",value:function(){return i.default.createElement("iframe",{src:this.getSrc(),width:this.props.width,height:this.props.height,seamless:"seamless",scrolling:"no",frameBorder:"0"})}}]),t}()).defaultProps={showMedia:!0,showParentComment:!0,width:420,height:320}},227:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.DiscussionEmbed=void 0;var r,o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=n(0),i=(r=a)&&r.__esModule?r:{default:r},c=n(190);t.DiscussionEmbed=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,i.default.Component),o(t,[{key:"componentWillMount",value:function(){"undefined"!=typeof window&&window.disqus_shortname&&window.disqus_shortname!==this.props.shortname&&this.cleanInstance()}},{key:"componentDidMount",value:function(){this.loadInstance()}},{key:"shouldComponentUpdate",value:function(e){if(this.props.shortname!==e.shortname)return!0;var t=e.config,n=this.props.config;return t.url!==n.url&&t.identifier!==n.identifier}},{key:"componentWillUpdate",value:function(e){this.props.shortname!==e.shortname&&this.cleanInstance()}},{key:"componentDidUpdate",value:function(){this.loadInstance()}},{key:"loadInstance",value:function(){var e=window.document;window&&window.DISQUS&&e.getElementById("dsq-embed-scr")?window.DISQUS.reset({reload:!0,config:this.getDisqusConfig(this.props.config)}):(window.disqus_config=this.getDisqusConfig(this.props.config),window.disqus_shortname=this.props.shortname,(0,c.insertScript)("https://"+this.props.shortname+".disqus.com/embed.js","dsq-embed-scr",e.body))}},{key:"cleanInstance",value:function(){var e=window.document;(0,c.removeScript)("dsq-embed-scr",e.body),window&&window.DISQUS&&window.DISQUS.reset({});try{delete window.DISQUS}catch(e){window.DISQUS=void 0}var t=e.getElementById("disqus_thread");if(t)for(;t.hasChildNodes();)t.removeChild(t.firstChild)}},{key:"getDisqusConfig",value:function(e){return function(){this.page.identifier=e.identifier,this.page.url=e.url,this.page.title=e.title,this.callbacks.onNewComment=[e.onNewComment]}}},{key:"render",value:function(){return i.default.createElement("div",{id:"disqus_thread"})}}]),t}()},228:function(e,t,n){var r=n(78),o=n(29);e.exports=function(e,t,n){if(r(t))throw TypeError("String#"+n+" doesn't accept regex!");return String(o(e))}},229:function(e,t,n){var r=n(3)("match");e.exports=function(e){var t=/./;try{"/./"[e](t)}catch(n){try{return t[r]=!1,!"/./"[e](t)}catch(e){}}return!0}}}]);
//# sourceMappingURL=component---src-pages-blog-louvre-index-mdx-216e80209b80e6c2ec55.js.map