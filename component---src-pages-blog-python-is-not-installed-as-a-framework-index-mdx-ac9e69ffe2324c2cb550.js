(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{143:function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return p}),n.d(t,"_frontmatter",function(){return d});var o=n(194),r=n.n(o),a=n(6),i=n.n(a),c=n(0),u=n.n(c),l=n(171),s=n(184),p=function(e){function t(t){var n;return(n=e.call(this,t)||this).layout=s.a,n}return i()(t,e),t.prototype.render=function(){var e=this.props,t=e.components,n=r()(e,["components"]);return u.a.createElement(l.MDXTag,{name:"wrapper",Layout:this.layout,layoutProps:n,components:t},u.a.createElement(l.MDXTag,{name:"p",components:t},"This error message is seriously misleading. Actually, Matplotlib requires a default backend\nin order to work. You can specify it in a dedicated file ",u.a.createElement("code",{className:"language-text"},"~/.matplotlib/matplotlibrc"),":"),u.a.createElement("div",{className:"gatsby-highlight","data-language":"text"},u.a.createElement("pre",{className:"language-text"},u.a.createElement("code",{className:"language-text"},"backend: TkAgg"))))},t}(u.a.Component),d={}},153:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return m}),n.d(t,"StaticQueryContext",function(){return d}),n.d(t,"StaticQuery",function(){return f});var o=n(0),r=n.n(o),a=n(4),i=n.n(a),c=n(151),u=n.n(c);n.d(t,"Link",function(){return u.a}),n.d(t,"withPrefix",function(){return c.withPrefix}),n.d(t,"navigate",function(){return c.navigate}),n.d(t,"push",function(){return c.push}),n.d(t,"replace",function(){return c.replace}),n.d(t,"navigateTo",function(){return c.navigateTo});var l=n(154),s=n.n(l);n.d(t,"PageRenderer",function(){return s.a});var p=n(28);n.d(t,"parsePath",function(){return p.a});var d=r.a.createContext({}),f=function(e){return r.a.createElement(d.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function m(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}f.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},154:function(e,t,n){var o;e.exports=(o=n(161))&&o.default||o},155:function(e,t,n){"use strict";var o=n(180),r=Object(o.a)(function(){return!1});t.a=r},157:function(e,t,n){"use strict";var o=n(6),r=n.n(o),a=n(162),i=n(178),c=n.n(i),u=n(0),l=n.n(u),s=n(179),p=n.n(s),d=n(150),f=n(153),m=n(4),h=n(152),y=n(169),b=n.n(y);function g(){var e=b()(["\n  html, body, #___gatsby, #___gatsby >div {\n    height: 100%;\n  }\n  div > p > .gatsby-resp-image-wrapper {\n    max-width: 100% !important;\n    .gatsby-resp-image-background-image {\n      border: 1px solid ",";\n      border-radius: ",";\n      overflow: hidden;\n    }\n  }\n  .katex-display { margin: 0 0 .5em; }\n  .katex { font: 300 1.15em KaTeX_Main, serif; }\n  ","\n  .center { text-align: center; }\n"]);return g=function(){return e},e}var v=Object(d.b)(g(),function(e){return e.theme.lightGray},function(e){return e.theme.borderRadius},function(e){return function(e){return'\ncode[class*="language-"],\npre[class*="language-"] {\n\tcolor: '+e.bodyColor+";\n\tbackground: none;\n\tfont-family: "+e.monospaceFont+';\n\ttext-align: left;\n\twhite-space: pre;\n\tword-spacing: normal;\n\tword-break: normal;\n\tword-wrap: normal;\n\tline-height: 1.5;\n\thyphens: none;\n}\n\n/* Code blocks */\npre[class*="language-"] {\n\tpadding: 1em;\n\tmargin: .5em 0;\n\toverflow: auto;\n\tborder-radius: '+e.borderRadius+";\n\tborder: 1px solid "+e.gray+';\n}\n\n:not(pre) > code[class*="language-"],\npre[class*="language-"] {\n\tbackground: '+e.lightGray+';\n}\n\n/* Inline code */\n:not(pre) > code[class*="language-"] {\n\tpadding: .1em;\n\tborder-radius: '+e.borderRadius+";\n\twhite-space: normal;\n}\n\n.token.comment,\n.token.prolog,\n.token.doctype,\n.token.cdata {\n\tcolor: "+e.gray+";\n}\n\n.token.punctuation {\n\tcolor: "+e.bodyColor+";\n}\n\n.namespace {\n\topacity: .7;\n}\n\n.token.property,\n.token.tag,\n.token.constant,\n.token.symbol,\n.token.deleted {\n\tcolor: "+e.secondaryColor+";\n}\n\n.token.boolean,\n.token.number {\n\tcolor: "+e.secondaryColor+";\n}\n\n.token.selector,\n.token.attr-name,\n.token.string,\n.token.char,\n.token.builtin,\n.token.inserted {\n\tcolor: "+e.secondaryColor+";\n}\n\n.token.operator,\n.token.entity,\n.token.url,\n.language-css .token.string,\n.style .token.string,\n.token.variable {\n\tcolor: "+e.bodyColor+";\n}\n\n.token.atrule,\n.token.attr-value,\n.token.function,\n.token.class-name {\n\tcolor: "+e.secondaryColor+";\n}\n\n.token.keyword {\n\tcolor: "+e.secondaryColor+";\n}\n\n.token.regex,\n.token.important {\n\tcolor: "+e.secondaryColor+";\n}\n\n.token.important,\n.token.bold {\n\tfont-weight: bold;\n}\n.token.italic {\n\tfont-style: italic;\n}\n\n.token.entity {\n\tcursor: help;\n}\n"}(e.theme)}),w=d.c.main.withConfig({componentId:"sc-1ph75po-0"})(["background:",";a{position:relative;display:inline-block;background:transparent;color:",";font-weight:bold;text-decoration:none;>span{color:inherit;background-color:inherit;}&::after{content:'';"," "," background:",";transition:opacity ",",transform ",";opacity:0;transform:translateY(.2em);}&:hover::after{opacity:1;transform:none;}}"],function(e){return e.theme.bgColor},function(e){return e.theme.secondaryColor},Object(h.a)("absolute",null,null,"0","0"),Object(h.b)("1px","100%"),function(e){return e.theme.secondaryColor},function(e){return e.theme.defaultTransition},function(e){return e.theme.defaultTransition}),E=n(155),C=Object(E.a)(d.c.header.withConfig({componentId:"sc-116zvyz-0"})(["margin:0 auto;max-width:","px;a{text-decoration:none;}@media print{display:none;}"],function(e){return e.theme.maxWidth})),k=Object(E.a)(d.c.ul.withConfig({componentId:"sc-116zvyz-1"})(["display:block;list-style-type:none;margin:0;text-align:right;position:relative;white-space:nowrap;width:100%;&::before,&::after{content:'';display:block;background:linear-gradient( to right,transparent,",",transparent );position:absolute;","}&::before{top:0;}&::after{bottom:0;}>li{display:inline-block;margin:0;padding:1em 0;&:not(:first-child){margin-left:1em;}}a{color:",";font-family:",";font-size:14px;text-transform:uppercase;transition:color ",";&:hover,&:active{color:",";}}"],function(e){return e.theme.lightGray},Object(h.b)("1px","100%"),function(e){return e.theme.gray},function(e){return e.theme.headerFont},function(e){return e.theme.defaultTransition},function(e){return e.theme.headerColor})),O=Object(E.a)(Object(d.c)(f.Link).withConfig({componentId:"sc-116zvyz-2"})(["display:block;text-align:center;h1{display:inline-block;margin:.5em;font-weight:900;font-size:22px;letter-spacing:1px;position:relative;transition:color ",";&::after{content:'';border-radius:50%;display:block;background:",";"," ","}&:hover,&:active{color:",";}}"],function(e){return e.theme.defaultTransition},function(e){return e.theme.secondaryColor},Object(h.a)("absolute","8px","-1em",null,null),Object(h.b)("10px"),function(e){return e.theme.secondaryColor})),j=function(e){function t(){for(var t,n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(t=e.call.apply(e,[this].concat(o))||this).shouldComponentUpdate=function(){return!1},t}return r()(t,e),t.prototype.render=function(){return l.a.createElement("nav",null,l.a.createElement(C,null,l.a.createElement(O,{to:"/"},l.a.createElement("h1",null,this.props.title)),l.a.createElement(k,null,l.a.createElement("li",null,l.a.createElement(f.Link,{to:"/"},"Home")),l.a.createElement("li",null,l.a.createElement(f.Link,{to:"/tools"},"Tools")),l.a.createElement("li",null,l.a.createElement(f.Link,{to:"/about"},"About")))))},t}(u.Component);j.propTypes={title:m.string.isRequired};var _=n(158);n.d(t,"a",function(){return S});var x=d.c.div.withConfig({componentId:"grcys-0"})(["background:",";margin:1em auto;"," max-width:","px;position:relative;"],function(e){return e.theme.bgColor},Object(h.b)("100%","100vw"),function(e){return e.theme.maxWidth}),S=function(e){function t(){for(var t,n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(t=e.call.apply(e,[this].concat(o))||this).shouldComponentUpdate=function(){return!1},t}r()(t,e);var n=t.prototype;return n.componentDidMount=function(){t.fbPixelInitialized||(p.a.init("1915349895435128",{},{}),t.fbPixelInitialized=!0),p.a.pageView()},n.render=function(){var e=this.props,t=e.children,n=e.title,o=e.description;return l.a.createElement(d.a,{theme:_.a},l.a.createElement(f.StaticQuery,{query:"4226086209",render:function(e){var r=e.site.siteMetadata;return l.a.createElement(u.Fragment,null,l.a.createElement(c.a,null,l.a.createElement("html",{lang:"en",amp:!0}),l.a.createElement("title",null,n?r.title+": "+n:r.title),l.a.createElement("meta",{name:"description",content:o||r.description}),l.a.createElement("meta",{property:"og:title",content:n}),l.a.createElement("meta",{property:"og:description",content:o||r.description}),l.a.createElement("meta",{name:"twitter:card",content:"summary"}),l.a.createElement("meta",{name:"twitter:creator",content:"PEM___"}),l.a.createElement("meta",{name:"google-site-verification",content:r.googleSearchConsoleOwnershipId})),l.a.createElement(j,{title:r.title}),l.a.createElement(w,null,l.a.createElement(x,null,t({siteMetadata:r}))),l.a.createElement(v,null))},data:a}))},t}(u.Component);S.fbPixelInitialized=!1,S.propTypes={children:m.any.isRequired,description:m.string,title:m.string}},158:function(e,t,n){"use strict";t.a={bgColor:"white",bodyColor:"#333",borderRadius:"5px",defaultTransition:".3s ease-in-out",headerColor:"#181818",headerFont:"-apple-system,'BlinkMacSystemFont','Segoe UI','Roboto','Oxygen','Ubuntu','Cantarell','Fira Sans','Droid Sans','Helvetica Neue','sans-serif'",monospaceFont:"'Andale Mono', 'Ubuntu Mono', monospace",maxWidth:960,secondaryColor:"#e70808",smallFontSize:"10px",smallFontWeight:300,gray:"#7f7f7f",lightGray:"#e7e7e7",warningColor:"#f4ab55"}},159:function(e,t,n){"use strict";n.d(t,"a",function(){return u});var o=n(6),r=n.n(o),a=n(0),i=n.n(a),c=n(4),u=function(e){function t(){for(var t,n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(t=e.call.apply(e,[this].concat(o))||this).shouldComponentUpdate=function(){return!1},t}return r()(t,e),t.prototype.render=function(){return i.a.createElement("a",{href:this.props.href,target:"_blank",rel:"noreferrer noopener"},this.props.text)},t}(a.Component);u.propTypes={href:c.string.isRequired,text:c.string.isRequired}},160:function(e,t){var n=Array.isArray;e.exports=n},161:function(e,t,n){"use strict";n.r(t);var o=n(9),r=n.n(o),a=n(0),i=n.n(a),c=n(4),u=n.n(c),l=n(48),s=n(2),p=function(e){var t=e.location,n=s.default.getResourcesForPathnameSync(t.pathname);return i.a.createElement(l.a,r()({location:t,pageResources:n},n.json))};p.propTypes={location:u.a.shape({pathname:u.a.string.isRequired}).isRequired},t.default=p},162:function(e){e.exports={data:{site:{siteMetadata:{description:"Notes and posts about development, Math, ML and AI",discussShortName:"https-pem-github-io",googleSearchConsoleOwnershipId:"IIdc-ufE7Rf_Gn8p7Ee83Ua7obcDac8tk2DLW_p87Ak",siteUrl:"https://pem--.github.io",title:"PEM's blog"}}}}},163:function(e,t,n){"use strict";n.d(t,"a",function(){return b});n(68);var o=n(6),r=n.n(o),a=n(0),i=n.n(a),c=n(150),u=n(584),l=n(585),s=n(586),p=n(587),d=n(588),f=n(589),m=n(152),h=n(4),y=c.c.div.withConfig({componentId:"sc-199atao-0"})(["display:flex;justify-content:center;margin:2em 0;position:relative;&::before,&::after{content:'';display:block;background:linear-gradient( to right,transparent,",",transparent );position:absolute;","}&::before{top:-1em;}&::after{bottom:-1em;}>*{cursor:pointer;flex:0 0 auto;outline:0;&:not(:first-of-type){margin-left:1.5em;}}@media print{display:none;}"],function(e){return e.theme.lightGray},Object(m.b)("1px","100%")),b=function(e){function t(){for(var t,n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(t=e.call.apply(e,[this].concat(o))||this).shouldComponentUpdate=function(e){var n=e.href,o=e.title;return t.props.href!==n||t.props.title!==o},t}return r()(t,e),t.prototype.render=function(){var e={url:this.props.href};return i.a.createElement(y,null,i.a.createElement(u.a,Object.assign({title:this.props.title},e),i.a.createElement(l.a,t.shareIconProps)),i.a.createElement(s.a,Object.assign({title:this.props.title},e),i.a.createElement(p.a,t.shareIconProps)),i.a.createElement(d.a,Object.assign({subject:this.props.title},e),i.a.createElement(f.a,t.shareIconProps)))},t}(a.Component);b.shareIconProps={round:!0,size:32},b.propTypes={href:h.string.isRequired,title:h.string.isRequired}},164:function(e,t,n){var o=n(166).Symbol;e.exports=o},166:function(e,t,n){var o=n(177),r="object"==typeof self&&self&&self.Object===Object&&self,a=o||r||Function("return this")();e.exports=a},168:function(e,t){e.exports=function(e){return null!=e&&"object"==typeof e}},170:function(e,t,n){var o=n(164),r=n(181),a=n(182),i="[object Null]",c="[object Undefined]",u=o?o.toStringTag:void 0;e.exports=function(e){return null==e?void 0===e?c:i:u&&u in Object(e)?r(e):a(e)}},171:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(190);Object.defineProperty(t,"MDXTag",{enumerable:!0,get:function(){return a(o).default}});var r=n(172);function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"MDXProvider",{enumerable:!0,get:function(){return a(r).default}})},172:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.withMDXComponents=void 0;var o,r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},a=n(0),i=(o=a)&&o.__esModule?o:{default:o};var c=i.default.createContext({}),u=c.Provider,l=c.Consumer;t.withMDXComponents=function(e){return function(t){var n=t.components,o=function(e,t){var n={};for(var o in e)t.indexOf(o)>=0||Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o]);return n}(t,["components"]);return i.default.createElement(l,null,function(t){return i.default.createElement(e,r({components:n||t},o))})}};t.default=function(e){var t=e.components,n=e.children;return i.default.createElement(u,{value:t},n)}},173:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.insertScript=function(e,t,n){var o=window.document.createElement("script");return o.async=!0,o.src=e,o.id=t,n.appendChild(o),o},t.removeScript=function(e,t){var n=window.document.getElementById(e);n&&t.removeChild(n)},t.debounce=function(e,t,n){var o=void 0;return function(){var r=this,a=arguments,i=n&&!o;window.clearTimeout(o),o=setTimeout(function(){o=null,n||e.apply(r,a)},t),i&&e.apply(r,a)}}},175:function(e,t,n){"use strict";var o=n(150),r=n(152);t.a=o.c.h1.withConfig({componentId:"sc-1szmnsq-0"})(["position:relative;width:calc(100% - 60px);small{color:",";display:block;font-weight:",";font-size:",";font-style:italic;"," text-align:right;width:60px;}"],function(e){return e.theme.gray},function(e){return e.theme.smallFontWeight},function(e){return e.theme.smallFontSize},Object(r.a)("absolute",null,"-60px",0,null))},177:function(e,t,n){(function(t){var n="object"==typeof t&&t&&t.Object===Object&&t;e.exports=n}).call(this,n(69))},181:function(e,t,n){var o=n(164),r=Object.prototype,a=r.hasOwnProperty,i=r.toString,c=o?o.toStringTag:void 0;e.exports=function(e){var t=a.call(e,c),n=e[c];try{e[c]=void 0;var o=!0}catch(u){}var r=i.call(e);return o&&(t?e[c]=n:delete e[c]),r}},182:function(e,t){var n=Object.prototype.toString;e.exports=function(e){return n.call(e)}},183:function(e,t,n){var o=n(170),r=n(160),a=n(168),i="[object String]";e.exports=function(e){return"string"==typeof e||!r(e)&&a(e)&&o(e)==i}},184:function(e,t,n){"use strict";var o=n(185),r=n.n(o),a=n(0),i=n.n(a),c=n(200),u=n.n(c),l=n(201),s=n.n(l),p=n(150),d=n(6),f=n.n(d),m=n(152),h=n(4),y=n(159),b=p.c.span.withConfig({componentId:"sc-1rxao4w-0"})(["display:block;"," font-size:.8em;@media print{display:none;}"],Object(m.a)("absolute","-.3em",0,null,null)),g=function(e){function t(){for(var t,n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(t=e.call.apply(e,[this].concat(o))||this).shouldComponentUpdate=function(){return!1},t}return f()(t,e),t.prototype.render=function(){return i.a.createElement(b,null,i.a.createElement(y.a,{href:"https://github.com/PEM--/PEM--.github.io/tree/master/src/src/pages/blog/"+this.props.slug,text:"Contribute on Github"}))},t}(a.Component);g.propTypes={slug:h.string.isRequired};var v=n(175),w=n(157),E=(n(68),n(186),n(183)),C=n.n(E),k=n(171),O=p.c.blockquote.withConfig({componentId:"jcqrfk-0"})(["border-left:1px solid ",";margin-left:1.5em;padding-left:1em;position:relative;&::before{content:'➸';color:",";display:block;font-size:1.2em;","}"],function(e){return e.theme.lightGray},function(e){return e.theme.secondaryColor},Object(m.a)("absolute",0,null,null,"-1.5em")),j=p.c.p.withConfig({componentId:"jcqrfk-1"})(["text-align:justify;&.semiColon{margin-bottom:0;}"]),_=function(e){function t(){for(var t,n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(t=e.call.apply(e,[this].concat(o))||this).shouldComponentUpdate=function(){return!1},t}return f()(t,e),t.prototype.render=function(){var e=this.props.children&&C()(this.props.children)&&this.props.children.endsWith(":");return i.a.createElement(j,Object.assign({className:e&&"semiColon"},this.props))},t}(a.Component);_.propTypes={children:h.any};var x=function(e){function t(){for(var t,n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(t=e.call.apply(e,[this].concat(o))||this).shouldComponentUpdate=function(){return!1},t}return f()(t,e),t.prototype.render=function(){return i.a.createElement(k.MDXProvider,{components:{a:function(e){var t=e.href,n=e.children;return i.a.createElement(y.a,{href:t,text:n})},blockquote:function(e){return i.a.createElement(O,e)},p:function(e){return i.a.createElement(_,e)}}},this.props.children)},t}(a.Component);x.propTypes={children:h.any.isRequired};var S=n(163),P=p.c.div.withConfig({componentId:"ppmfas-0"})(["@media print{display:none;}"]),I=s.a.react(function(e){var t=e.children,n=e.location.href,o=e.pageContext.frontmatter,c={identifier:o.slug,title:o.title,url:n};return i.a.createElement(w.a,o,function(e){var l=e.siteMetadata;return i.a.createElement(a.Fragment,null,i.a.createElement(v.a,null,o.title,i.a.createElement("small",null,u()(o.date,"DD/MM/YY"))),o.contribute&&i.a.createElement(g,{slug:o.slug}),i.a.createElement(x,null,t),i.a.createElement(S.a,{href:n,title:o.title}),o.comment&&i.a.createElement(P,null,i.a.createElement(r.a.DiscussionEmbed,{config:c,shortname:l.discussShortName})))})});t.a=I},185:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.DiscussionEmbed=t.CommentEmbed=t.CommentCount=void 0;var o=n(191),r=n(192),a=n(193);t.CommentCount=o.CommentCount,t.CommentEmbed=r.CommentEmbed,t.DiscussionEmbed=a.DiscussionEmbed;var i={CommentCount:o.CommentCount,CommentEmbed:r.CommentEmbed,DiscussionEmbed:a.DiscussionEmbed};t.default=i},186:function(e,t,n){"use strict";var o=n(13),r=n(29),a=n(70),i="".endsWith;o(o.P+o.F*n(71)("endsWith"),"String",{endsWith:function(e){var t=a(this,e,"endsWith"),n=arguments.length>1?arguments[1]:void 0,o=r(t.length),c=void 0===n?o:Math.min(r(n),o),u=String(e);return i?i.call(t,u,c):t.slice(c-u.length,c)===u}})},190:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o,r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},a=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),i=n(0),c=(o=i)&&o.__esModule?o:{default:o},u=n(172);var l={inlineCode:"code",wrapper:"div"},s=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,i.Component),a(t,[{key:"render",value:function(){var e=this.props,t=e.name,n=e.parentName,o=e.props,a=void 0===o?{}:o,i=e.children,u=e.components,s=void 0===u?{}:u,p=e.Layout,d=e.layoutProps,f=s[n+"."+t]||s[t]||l[t]||t;return p?c.default.createElement(p,r({components:s},d),c.default.createElement(f,a,i)):c.default.createElement(f,a,i)}}]),t}();t.default=(0,u.withMDXComponents)(s)},191:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CommentCount=void 0;var o,r=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),a=n(0),i=(o=a)&&o.__esModule?o:{default:o},c=n(173);var u=(0,c.debounce)(function(){window.DISQUSWIDGETS&&window.DISQUSWIDGETS.getCount({reset:!0})},300,!1);t.CommentCount=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,i.default.Component),r(t,[{key:"componentDidMount",value:function(){this.loadInstance()}},{key:"shouldComponentUpdate",value:function(e){if(this.props.shortname!==e.shortname)return!0;var t=e.config,n=this.props.config;return t.url!==n.url&&t.identifier!==n.identifier}},{key:"componentWillUpdate",value:function(e){this.props.shortname!==e.shortname&&this.cleanInstance()}},{key:"componentDidUpdate",value:function(){this.loadInstance()}},{key:"loadInstance",value:function(){var e=window.document;e.getElementById("dsq-count-scr")?u():(0,c.insertScript)("https://"+this.props.shortname+".disqus.com/count.js","dsq-count-scr",e.body)}},{key:"cleanInstance",value:function(){var e=window.document.body;(0,c.removeScript)("dsq-count-scr",e),window.DISQUSWIDGETS=void 0}},{key:"render",value:function(){return i.default.createElement("span",{className:"disqus-comment-count","data-disqus-identifier":this.props.config.identifier,"data-disqus-url":this.props.config.url},this.props.children)}}]),t}()},192:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CommentEmbed=void 0;var o,r=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),a=n(0),i=(o=a)&&o.__esModule?o:{default:o};(t.CommentEmbed=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,i.default.Component),r(t,[{key:"getSrc",value:function(){return"https://embed.disqus.com/p/"+Number(this.props.commentId).toString(36)+"?p="+(this.props.showParentComment?"1":"0")+"&m="+(this.props.showMedia?"1":"0")}},{key:"render",value:function(){return i.default.createElement("iframe",{src:this.getSrc(),width:this.props.width,height:this.props.height,seamless:"seamless",scrolling:"no",frameBorder:"0"})}}]),t}()).defaultProps={showMedia:!0,showParentComment:!0,width:420,height:320}},193:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.DiscussionEmbed=void 0;var o,r=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),a=n(0),i=(o=a)&&o.__esModule?o:{default:o},c=n(173);t.DiscussionEmbed=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,i.default.Component),r(t,[{key:"componentWillMount",value:function(){"undefined"!=typeof window&&window.disqus_shortname&&window.disqus_shortname!==this.props.shortname&&this.cleanInstance()}},{key:"componentDidMount",value:function(){this.loadInstance()}},{key:"shouldComponentUpdate",value:function(e){if(this.props.shortname!==e.shortname)return!0;var t=e.config,n=this.props.config;return t.url!==n.url&&t.identifier!==n.identifier}},{key:"componentWillUpdate",value:function(e){this.props.shortname!==e.shortname&&this.cleanInstance()}},{key:"componentDidUpdate",value:function(){this.loadInstance()}},{key:"loadInstance",value:function(){var e=window.document;window&&window.DISQUS&&e.getElementById("dsq-embed-scr")?window.DISQUS.reset({reload:!0,config:this.getDisqusConfig(this.props.config)}):(window.disqus_config=this.getDisqusConfig(this.props.config),window.disqus_shortname=this.props.shortname,(0,c.insertScript)("https://"+this.props.shortname+".disqus.com/embed.js","dsq-embed-scr",e.body))}},{key:"cleanInstance",value:function(){var e=window.document;(0,c.removeScript)("dsq-embed-scr",e.body),window&&window.DISQUS&&window.DISQUS.reset({});try{delete window.DISQUS}catch(n){window.DISQUS=void 0}var t=e.getElementById("disqus_thread");if(t)for(;t.hasChildNodes();)t.removeChild(t.firstChild)}},{key:"getDisqusConfig",value:function(e){return function(){this.page.identifier=e.identifier,this.page.url=e.url,this.page.title=e.title,this.callbacks.onNewComment=[e.onNewComment]}}},{key:"render",value:function(){return i.default.createElement("div",{id:"disqus_thread"})}}]),t}()}}]);
//# sourceMappingURL=component---src-pages-blog-python-is-not-installed-as-a-framework-index-mdx-ac9e69ffe2324c2cb550.js.map