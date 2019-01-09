(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{141:function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return d}),n.d(t,"_frontmatter",function(){return f});var o=n(194),r=n.n(o),a=n(6),i=n.n(a),c=n(0),l=n.n(c),s=n(169),u=n(182),p=n(188),d=function(e){function t(t){var n;return(n=e.call(this,t)||this).layout=u.a,n}return i()(t,e),t.prototype.render=function(){var e=this.props,t=e.components,n=r()(e,["components"]);return l.a.createElement(s.MDXTag,{name:"wrapper",Layout:this.layout,layoutProps:n,components:t},l.a.createElement(s.MDXTag,{name:"h2",components:t},"Canonical formulae"),l.a.createElement(p.a,{displayMode:!0,formulae:"P(A|B)=\\frac{P(B|A) \\cdot P(A)}{P(B)}"}),l.a.createElement(s.MDXTag,{name:"h2",components:t},"Application to a cancer study"),l.a.createElement(s.MDXTag,{name:"h3",components:t},"Prior"),l.a.createElement(p.a,{formulae:"P(C) = 1\\% = 0.01"}),": probability to have cancer",l.a.createElement(s.MDXTag,{name:"blockquote",components:t},l.a.createElement(p.a,{formulae:"P(\\neg C)=1-P(C)=99\\%=0.99"}),": probability to not have cancer"),l.a.createElement(p.a,{formulae:"P(Pos|C) = 90\\% = 0.9"}),": Positive cancer test probability when patient has cancer",l.a.createElement(s.MDXTag,{name:"p",components:t},"This is often called the test ",l.a.createElement(s.MDXTag,{name:"strong",components:t,parentName:"p"},"sensitivity"),"."),l.a.createElement(s.MDXTag,{name:"blockquote",components:t},l.a.createElement(p.a,{formulae:"P(Pos|\\neg C)=1-P(Pos|C)=10\\%=0.1"}),": False positive: positive cancer test while patient has no cancer"),l.a.createElement(p.a,{formulae:"P(Neg|\\neg C) = P(\\neg Pos|\\neg C)=90\\% = 0.9"}),": probability to negatively detect cancer when patient has cancer",l.a.createElement(s.MDXTag,{name:"p",components:t},"This is often called the test ",l.a.createElement(s.MDXTag,{name:"strong",components:t,parentName:"p"},"specivity"),"."),l.a.createElement(s.MDXTag,{name:"blockquote",components:t},l.a.createElement(p.a,{formulae:"P(Neg|C)=P(\\neg Pos|C)=1-P(Neg|\\neg C)=10\\%=0.1"}),": False negative: cancer test fails despite patient having cancer"),l.a.createElement(s.MDXTag,{name:"h3",components:t},"Joint"),l.a.createElement(s.MDXTag,{name:"p",components:t},"Joint probabilities are probabilities of two events."),l.a.createElement(s.MDXTag,{name:"ul",components:t},l.a.createElement(s.MDXTag,{name:"li",components:t,parentName:"ul"},l.a.createElement(s.MDXTag,{name:"p",components:t,parentName:"li"},"A patient contracts cancer first, then is tested positively:"),l.a.createElement(p.a,{formulae:"P(C,Pos) = P(C) \\cdot P(Pos|C) = 0.01 \\cdot 0.9 = 0.009"})),l.a.createElement(s.MDXTag,{name:"li",components:t,parentName:"ul"},l.a.createElement(s.MDXTag,{name:"p",components:t,parentName:"li"},"Another patient, cancer free, is tested positively:"),l.a.createElement(p.a,{formulae:"P(\\neg C,Pos) = P(\\neg C) \\cdot P(Pos|\\neg C) = 0.99 \\cdot 0.1 = 0.099"}))),l.a.createElement(s.MDXTag,{name:"h3",components:t},"Normalizer"),l.a.createElement(s.MDXTag,{name:"p",components:t},"We can deduce a normalizer value that groups the 2 populations (patient with cancer, patient cancer free) where the\ntest is positive:"),l.a.createElement(p.a,{formulae:"P(Pos) = P(C, Pos) + P(\\neg C, Pos) = 0.009 + 0.099 = 0.108"}),l.a.createElement("div",null,l.a.createElement("br",null),l.a.createElement("br",null)),l.a.createElement(s.MDXTag,{name:"h3",components:t},"Posterior"),l.a.createElement(s.MDXTag,{name:"p",components:t},"The probability of having a cancer knowing that the tests is positive:"),l.a.createElement(p.a,{displayMode:!0,formulae:"\\begin{aligned} \\\\ P(C|Pos) &= \\frac{P(Pos|C) \\cdot P(C)}{P(Pos)} \\\\ &= \\frac{P(Pos|C) \\cdot P(C)}{P(C,Pos)+P(\\neg C, Pos)} \\\\ &= \\frac{P(C, Pos)}{P(Pos)} \\\\ &= \\frac {0.009} {0.108}  \\\\ &\\approx 8.3\\% \\\\ \\end{aligned}"}),l.a.createElement(s.MDXTag,{name:"p",components:t},"Identically, we can deduce the probability of being cancer free despite having a positive test:"),l.a.createElement(p.a,{displayMode:!0,formulae:"\\begin{aligned} \\\\ P(\\neg C|Pos) &= \\frac{P(Pos|\\neg C) \\cdot P(\\neg C)}{P(Pos)} \\\\ &= \\frac{P(\\neg C, Pos)}{P(Pos)} \\\\ &= \\frac {0.099} {0.108}  \\\\ &\\approx 91.67\\% \\\\ \\end{aligned}"}))},t}(l.a.Component),f={}},154:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return m}),n.d(t,"StaticQueryContext",function(){return d}),n.d(t,"StaticQuery",function(){return f});var o=n(0),r=n.n(o),a=n(4),i=n.n(a),c=n(152),l=n.n(c);n.d(t,"Link",function(){return l.a}),n.d(t,"withPrefix",function(){return c.withPrefix}),n.d(t,"navigate",function(){return c.navigate}),n.d(t,"push",function(){return c.push}),n.d(t,"replace",function(){return c.replace}),n.d(t,"navigateTo",function(){return c.navigateTo});var s=n(155),u=n.n(s);n.d(t,"PageRenderer",function(){return u.a});var p=n(28);n.d(t,"parsePath",function(){return p.a});var d=r.a.createContext({}),f=function(e){return r.a.createElement(d.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function m(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}f.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},155:function(e,t,n){var o;e.exports=(o=n(161))&&o.default||o},156:function(e,t,n){"use strict";var o=n(185),r=Object(o.a)(function(){return!1});t.a=r},157:function(e,t,n){"use strict";n.d(t,"a",function(){return l});var o=n(6),r=n.n(o),a=n(0),i=n.n(a),c=n(4),l=function(e){function t(){for(var t,n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(t=e.call.apply(e,[this].concat(o))||this).shouldComponentUpdate=function(){return!1},t}return r()(t,e),t.prototype.render=function(){return i.a.createElement("a",{href:this.props.href,target:"_blank",rel:"noreferrer noopener"},this.props.text)},t}(a.Component);l.propTypes={href:c.string.isRequired,text:c.string.isRequired}},158:function(e,t,n){"use strict";var o=n(6),r=n.n(o),a=n(162),i=n(183),c=n.n(i),l=n(0),s=n.n(l),u=n(184),p=n.n(u),d=n(151),f=n(154),m=n(4),h=n(153),g=n(172),y=n.n(g);function b(){var e=y()(["\n  html, body, #___gatsby, #___gatsby >div {\n    height: 100%;\n  }\n  div > p > .gatsby-resp-image-wrapper {\n    max-width: 100% !important;\n    border: 1px solid ",";\n    border-radius: ",";\n    overflow: hidden;\n  }\n  .katex-display { margin: 0 0 .5em; }\n  .katex { font: 300 1.15em KaTeX_Main, serif; }\n  ","\n  .center { text-align: center; }\n"]);return b=function(){return e},e}var v=Object(d.b)(b(),function(e){return e.theme.lightGray},function(e){return e.theme.borderRadius},function(e){return function(e){return'\ncode[class*="language-"],\npre[class*="language-"] {\n\tcolor: '+e.bodyColor+";\n\tbackground: none;\n\tfont-family: "+e.monospaceFont+';\n\ttext-align: left;\n\twhite-space: pre;\n\tword-spacing: normal;\n\tword-break: normal;\n\tword-wrap: normal;\n\tline-height: 1.5;\n\thyphens: none;\n}\n\n/* Code blocks */\npre[class*="language-"] {\n\tpadding: 1em;\n\tmargin: .5em 0;\n\toverflow: auto;\n\tborder-radius: '+e.borderRadius+";\n\tborder: 1px solid "+e.gray+';\n}\n\n:not(pre) > code[class*="language-"],\npre[class*="language-"] {\n\tbackground: '+e.lightGray+';\n}\n\n/* Inline code */\n:not(pre) > code[class*="language-"] {\n\tpadding: .1em;\n\tborder-radius: '+e.borderRadius+";\n\twhite-space: normal;\n}\n\n.token.comment,\n.token.prolog,\n.token.doctype,\n.token.cdata {\n\tcolor: "+e.gray+";\n}\n\n.token.punctuation {\n\tcolor: "+e.bodyColor+";\n}\n\n.namespace {\n\topacity: .7;\n}\n\n.token.property,\n.token.tag,\n.token.constant,\n.token.symbol,\n.token.deleted {\n\tcolor: "+e.secondaryColor+";\n}\n\n.token.boolean,\n.token.number {\n\tcolor: "+e.secondaryColor+";\n}\n\n.token.selector,\n.token.attr-name,\n.token.string,\n.token.char,\n.token.builtin,\n.token.inserted {\n\tcolor: "+e.secondaryColor+";\n}\n\n.token.operator,\n.token.entity,\n.token.url,\n.language-css .token.string,\n.style .token.string,\n.token.variable {\n\tcolor: "+e.bodyColor+";\n}\n\n.token.atrule,\n.token.attr-value,\n.token.function,\n.token.class-name {\n\tcolor: "+e.secondaryColor+";\n}\n\n.token.keyword {\n\tcolor: "+e.secondaryColor+";\n}\n\n.token.regex,\n.token.important {\n\tcolor: "+e.secondaryColor+";\n}\n\n.token.important,\n.token.bold {\n\tfont-weight: bold;\n}\n.token.italic {\n\tfont-style: italic;\n}\n\n.token.entity {\n\tcursor: help;\n}\n"}(e.theme)}),w=d.c.main.withConfig({componentId:"sc-1ph75po-0"})(["background:",";a{position:relative;display:inline-block;background:transparent;color:",";font-weight:bold;text-decoration:none;>span{color:inherit;background-color:inherit;}&::after{content:'';"," "," background:",";transition:opacity ",",transform ",";opacity:0;transform:translateY(.2em);}&:hover::after{opacity:1;transform:none;}}"],function(e){return e.theme.bgColor},function(e){return e.theme.secondaryColor},Object(h.a)("absolute",null,null,"0","0"),Object(h.b)("1px","100%"),function(e){return e.theme.secondaryColor},function(e){return e.theme.defaultTransition},function(e){return e.theme.defaultTransition}),E=n(156),C=Object(E.a)(d.c.header.withConfig({componentId:"sc-116zvyz-0"})(["margin:0 auto;max-width:","px;a{text-decoration:none;}@media print{display:none;}"],function(e){return e.theme.maxWidth})),P=Object(E.a)(d.c.ul.withConfig({componentId:"sc-116zvyz-1"})(["display:block;list-style-type:none;margin:0;text-align:right;position:relative;white-space:nowrap;width:100%;&::before,&::after{content:'';display:block;background:linear-gradient( to right,transparent,",",transparent );position:absolute;","}&::before{top:0;}&::after{bottom:0;}>li{display:inline-block;margin:0;padding:1em 0;&:not(:first-child){margin-left:1em;}}a{color:",";font-family:",";font-size:14px;text-transform:uppercase;transition:color ",";&:hover,&:active{color:",";}}"],function(e){return e.theme.lightGray},Object(h.b)("1px","100%"),function(e){return e.theme.gray},function(e){return e.theme.headerFont},function(e){return e.theme.defaultTransition},function(e){return e.theme.headerColor})),k=Object(E.a)(Object(d.c)(f.Link).withConfig({componentId:"sc-116zvyz-2"})(["display:block;text-align:center;h1{display:inline-block;margin:.5em;font-weight:900;font-size:22px;letter-spacing:1px;position:relative;transition:color ",";&::after{content:'';border-radius:50%;display:block;background:",";"," ","}&:hover,&:active{color:",";}}"],function(e){return e.theme.defaultTransition},function(e){return e.theme.secondaryColor},Object(h.a)("absolute","8px","-1em",null,null),Object(h.b)("10px"),function(e){return e.theme.secondaryColor})),O=function(e){function t(){for(var t,n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(t=e.call.apply(e,[this].concat(o))||this).shouldComponentUpdate=function(){return!1},t}return r()(t,e),t.prototype.render=function(){return s.a.createElement("nav",null,s.a.createElement(C,null,s.a.createElement(k,{to:"/"},s.a.createElement("h1",null,this.props.title)),s.a.createElement(P,null,s.a.createElement("li",null,s.a.createElement(f.Link,{to:"/"},"Home")),s.a.createElement("li",null,s.a.createElement(f.Link,{to:"/tools"},"Tools")),s.a.createElement("li",null,s.a.createElement(f.Link,{to:"/about"},"About")))))},t}(l.Component);O.propTypes={title:m.string.isRequired};var _=n(159);n.d(t,"a",function(){return M});var j=d.c.div.withConfig({componentId:"grcys-0"})(["background:",";margin:1em auto;"," max-width:","px;position:relative;"],function(e){return e.theme.bgColor},Object(h.b)("100%","100vw"),function(e){return e.theme.maxWidth}),M=function(e){function t(){for(var t,n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(t=e.call.apply(e,[this].concat(o))||this).shouldComponentUpdate=function(){return!1},t}r()(t,e);var n=t.prototype;return n.componentDidMount=function(){t.fbPixelInitialized||(p.a.init("1915349895435128",{},{}),t.fbPixelInitialized=!0),p.a.pageView()},n.render=function(){var e=this.props,t=e.children,n=e.title,o=e.description;return s.a.createElement(d.a,{theme:_.a},s.a.createElement(f.StaticQuery,{query:"4226086209",render:function(e){var r=e.site.siteMetadata;return s.a.createElement(l.Fragment,null,s.a.createElement(c.a,null,s.a.createElement("html",{lang:"en",amp:!0}),s.a.createElement("title",null,n?r.title+": "+n:r.title),s.a.createElement("meta",{name:"description",content:o||r.description}),s.a.createElement("meta",{property:"og:title",content:n}),s.a.createElement("meta",{property:"og:description",content:o||r.description}),s.a.createElement("meta",{name:"twitter:card",content:"summary"}),s.a.createElement("meta",{name:"twitter:creator",content:"PEM___"}),s.a.createElement("meta",{name:"google-site-verification",content:r.googleSearchConsoleOwnershipId})),s.a.createElement(O,{title:r.title}),s.a.createElement(w,null,s.a.createElement(j,null,t({siteMetadata:r}))),s.a.createElement(v,null))},data:a}))},t}(l.Component);M.fbPixelInitialized=!1,M.propTypes={children:m.any.isRequired,description:m.string,title:m.string}},159:function(e,t,n){"use strict";t.a={bgColor:"white",bodyColor:"#333",borderRadius:"5px",defaultTransition:".3s ease-in-out",headerColor:"#181818",headerFont:"-apple-system,'BlinkMacSystemFont','Segoe UI','Roboto','Oxygen','Ubuntu','Cantarell','Fira Sans','Droid Sans','Helvetica Neue','sans-serif'",monospaceFont:"'Andale Mono', 'Ubuntu Mono', monospace",maxWidth:960,secondaryColor:"#e70808",smallFontSize:"10px",smallFontWeight:300,gray:"#7f7f7f",lightGray:"#e7e7e7",warningColor:"#f4ab55"}},160:function(e,t){var n=Array.isArray;e.exports=n},161:function(e,t,n){"use strict";n.r(t);var o=n(9),r=n.n(o),a=n(0),i=n.n(a),c=n(4),l=n.n(c),s=n(48),u=n(2),p=function(e){var t=e.location,n=u.default.getResourcesForPathnameSync(t.pathname);return i.a.createElement(s.a,r()({location:t,pageResources:n},n.json))};p.propTypes={location:l.a.shape({pathname:l.a.string.isRequired}).isRequired},t.default=p},162:function(e){e.exports={data:{site:{siteMetadata:{description:"Notes and posts about development, Math, ML and AI",discussShortName:"https-pem-github-io",googleSearchConsoleOwnershipId:"IIdc-ufE7Rf_Gn8p7Ee83Ua7obcDac8tk2DLW_p87Ak",siteUrl:"https://pem--.github.io",title:"PEM's blog"}}}}},163:function(e,t,n){"use strict";n.d(t,"a",function(){return y});n(68);var o=n(6),r=n.n(o),a=n(0),i=n.n(a),c=n(151),l=n(585),s=n(586),u=n(587),p=n(588),d=n(589),f=n(590),m=n(153),h=n(4),g=c.c.div.withConfig({componentId:"sc-199atao-0"})(["display:flex;justify-content:center;margin:2em 0;position:relative;&::before,&::after{content:'';display:block;background:linear-gradient( to right,transparent,",",transparent );position:absolute;","}&::before{top:-1em;}&::after{bottom:-1em;}>*{cursor:pointer;flex:0 0 auto;outline:0;&:not(:first-of-type){margin-left:1.5em;}}@media print{display:none;}"],function(e){return e.theme.lightGray},Object(m.b)("1px","100%")),y=function(e){function t(){for(var t,n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(t=e.call.apply(e,[this].concat(o))||this).shouldComponentUpdate=function(e){var n=e.href,o=e.title;return t.props.href!==n||t.props.title!==o},t}return r()(t,e),t.prototype.render=function(){var e={url:this.props.href};return i.a.createElement(g,null,i.a.createElement(l.a,Object.assign({title:this.props.title},e),i.a.createElement(s.a,t.shareIconProps)),i.a.createElement(u.a,Object.assign({title:this.props.title},e),i.a.createElement(p.a,t.shareIconProps)),i.a.createElement(d.a,Object.assign({subject:this.props.title},e),i.a.createElement(f.a,t.shareIconProps)))},t}(a.Component);y.shareIconProps={round:!0,size:32},y.propTypes={href:h.string.isRequired,title:h.string.isRequired}},164:function(e,t,n){var o=n(166).Symbol;e.exports=o},166:function(e,t,n){var o=n(176),r="object"==typeof self&&self&&self.Object===Object&&self,a=o||r||Function("return this")();e.exports=a},168:function(e,t){e.exports=function(e){return null!=e&&"object"==typeof e}},169:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(189);Object.defineProperty(t,"MDXTag",{enumerable:!0,get:function(){return a(o).default}});var r=n(173);function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"MDXProvider",{enumerable:!0,get:function(){return a(r).default}})},170:function(e,t,n){var o=n(164),r=n(178),a=n(179),i="[object Null]",c="[object Undefined]",l=o?o.toStringTag:void 0;e.exports=function(e){return null==e?void 0===e?c:i:l&&l in Object(e)?r(e):a(e)}},173:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.withMDXComponents=void 0;var o,r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},a=n(0),i=(o=a)&&o.__esModule?o:{default:o};var c=i.default.createContext({}),l=c.Provider,s=c.Consumer;t.withMDXComponents=function(e){return function(t){var n=t.components,o=function(e,t){var n={};for(var o in e)t.indexOf(o)>=0||Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o]);return n}(t,["components"]);return i.default.createElement(s,null,function(t){return i.default.createElement(e,r({components:n||t},o))})}};t.default=function(e){var t=e.components,n=e.children;return i.default.createElement(l,{value:t},n)}},174:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.insertScript=function(e,t,n){var o=window.document.createElement("script");return o.async=!0,o.src=e,o.id=t,n.appendChild(o),o},t.removeScript=function(e,t){var n=window.document.getElementById(e);n&&t.removeChild(n)},t.debounce=function(e,t,n){var o=void 0;return function(){var r=this,a=arguments,i=n&&!o;window.clearTimeout(o),o=setTimeout(function(){o=null,n||e.apply(r,a)},t),i&&e.apply(r,a)}}},175:function(e,t,n){"use strict";var o=n(151),r=n(153);t.a=o.c.h1.withConfig({componentId:"sc-1szmnsq-0"})(["position:relative;width:calc(100% - 60px);small{color:",";display:block;font-weight:",";font-size:",";font-style:italic;"," text-align:right;width:60px;}"],function(e){return e.theme.gray},function(e){return e.theme.smallFontWeight},function(e){return e.theme.smallFontSize},Object(r.a)("absolute",null,"-60px",0,null))},176:function(e,t,n){(function(t){var n="object"==typeof t&&t&&t.Object===Object&&t;e.exports=n}).call(this,n(69))},178:function(e,t,n){var o=n(164),r=Object.prototype,a=r.hasOwnProperty,i=r.toString,c=o?o.toStringTag:void 0;e.exports=function(e){var t=a.call(e,c),n=e[c];try{e[c]=void 0;var o=!0}catch(l){}var r=i.call(e);return o&&(t?e[c]=n:delete e[c]),r}},179:function(e,t){var n=Object.prototype.toString;e.exports=function(e){return n.call(e)}},180:function(e,t,n){var o=n(170),r=n(160),a=n(168),i="[object String]";e.exports=function(e){return"string"==typeof e||!r(e)&&a(e)&&o(e)==i}},182:function(e,t,n){"use strict";var o=n(186),r=n.n(o),a=n(0),i=n.n(a),c=n(199),l=n.n(c),s=n(200),u=n.n(s),p=n(151),d=n(6),f=n.n(d),m=n(153),h=n(4),g=n(157),y=p.c.span.withConfig({componentId:"sc-1rxao4w-0"})(["display:block;"," font-size:.8em;@media print{display:none;}"],Object(m.a)("absolute","-.3em",0,null,null)),b=function(e){function t(){for(var t,n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(t=e.call.apply(e,[this].concat(o))||this).shouldComponentUpdate=function(){return!1},t}return f()(t,e),t.prototype.render=function(){return i.a.createElement(y,null,i.a.createElement(g.a,{href:"https://github.com/PEM--/PEM--.github.io/tree/master/src/src/pages/blog/"+this.props.slug,text:"Contribute on Github"}))},t}(a.Component);b.propTypes={slug:h.string.isRequired};var v=n(175),w=n(158),E=(n(68),n(187),n(180)),C=n.n(E),P=n(169),k=p.c.blockquote.withConfig({componentId:"jcqrfk-0"})(["border-left:1px solid ",";margin-left:1.5em;padding-left:1em;position:relative;&::before{content:'➸';color:",";display:block;font-size:1.2em;","}"],function(e){return e.theme.lightGray},function(e){return e.theme.secondaryColor},Object(m.a)("absolute",0,null,null,"-1.5em")),O=p.c.p.withConfig({componentId:"jcqrfk-1"})(["text-align:justify;&.semiColon{margin-bottom:0;}"]),_=function(e){function t(){for(var t,n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(t=e.call.apply(e,[this].concat(o))||this).shouldComponentUpdate=function(){return!1},t}return f()(t,e),t.prototype.render=function(){var e=this.props.children&&C()(this.props.children)&&this.props.children.endsWith(":");return i.a.createElement(O,Object.assign({className:e&&"semiColon"},this.props))},t}(a.Component);_.propTypes={children:h.any};var j=function(e){function t(){for(var t,n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(t=e.call.apply(e,[this].concat(o))||this).shouldComponentUpdate=function(){return!1},t}return f()(t,e),t.prototype.render=function(){return i.a.createElement(P.MDXProvider,{components:{a:function(e){var t=e.href,n=e.children;return i.a.createElement(g.a,{href:t,text:n})},blockquote:function(e){return i.a.createElement(k,e)},p:function(e){return i.a.createElement(_,e)}}},this.props.children)},t}(a.Component);j.propTypes={children:h.any.isRequired};var M=n(163),x=p.c.div.withConfig({componentId:"ppmfas-0"})(["@media print{display:none;}"]),T=u.a.react(function(e){var t=e.children,n=e.location.href,o=e.pageContext.frontmatter,c={identifier:o.slug,title:o.title,url:n};return i.a.createElement(w.a,o,function(e){var s=e.siteMetadata;return i.a.createElement(a.Fragment,null,i.a.createElement(v.a,null,o.title,i.a.createElement("small",null,l()(o.date,"DD/MM/YY"))),o.contribute&&i.a.createElement(b,{slug:o.slug}),i.a.createElement(j,null,t),i.a.createElement(M.a,{href:n,title:o.title}),o.comment&&i.a.createElement(x,null,i.a.createElement(r.a.DiscussionEmbed,{config:c,shortname:s.discussShortName})))})});t.a=T},186:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.DiscussionEmbed=t.CommentEmbed=t.CommentCount=void 0;var o=n(190),r=n(191),a=n(192);t.CommentCount=o.CommentCount,t.CommentEmbed=r.CommentEmbed,t.DiscussionEmbed=a.DiscussionEmbed;var i={CommentCount:o.CommentCount,CommentEmbed:r.CommentEmbed,DiscussionEmbed:a.DiscussionEmbed};t.default=i},187:function(e,t,n){"use strict";var o=n(13),r=n(29),a=n(70),i="".endsWith;o(o.P+o.F*n(71)("endsWith"),"String",{endsWith:function(e){var t=a(this,e,"endsWith"),n=arguments.length>1?arguments[1]:void 0,o=r(t.length),c=void 0===n?o:Math.min(r(n),o),l=String(e);return i?i.call(t,l,c):t.slice(c-l.length,c)===l}})},188:function(e,t,n){"use strict";n.d(t,"a",function(){return d});n(233),n(30);var o=n(6),r=n.n(o),a=n(0),i=n.n(a),c=n(234),l=n.n(c),s=n(151),u=n(4),p=s.c.span.withConfig({componentId:"sc-1dl32td-0"})(["color:",";"],function(e){return e.theme.warningColor}),d=function(e){function t(){for(var t,n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(t=e.call.apply(e,[this].concat(o))||this).shouldComponentUpdate=function(e){var n=e.formulae;return t.props.formulae!==n},t}return r()(t,e),t.prototype.render=function(){try{var e=l.a.renderToString(this.props.formulae,{displayMode:this.props.displayMode});return i.a.createElement("span",{dangerouslySetInnerHTML:{__html:e}})}catch(n){var t=n.toString().replace("ParseError: KaTeX parse error: ","");return i.a.createElement(p,null,t)}},t}(a.Component);d.propTypes={displayMode:u.bool,formulae:u.string.isRequired}},189:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o,r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},a=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),i=n(0),c=(o=i)&&o.__esModule?o:{default:o},l=n(173);var s={inlineCode:"code",wrapper:"div"},u=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,i.Component),a(t,[{key:"render",value:function(){var e=this.props,t=e.name,n=e.parentName,o=e.props,a=void 0===o?{}:o,i=e.children,l=e.components,u=void 0===l?{}:l,p=e.Layout,d=e.layoutProps,f=u[n+"."+t]||u[t]||s[t]||t;return p?c.default.createElement(p,r({components:u},d),c.default.createElement(f,a,i)):c.default.createElement(f,a,i)}}]),t}();t.default=(0,l.withMDXComponents)(u)},190:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CommentCount=void 0;var o,r=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),a=n(0),i=(o=a)&&o.__esModule?o:{default:o},c=n(174);var l=(0,c.debounce)(function(){window.DISQUSWIDGETS&&window.DISQUSWIDGETS.getCount({reset:!0})},300,!1);t.CommentCount=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,i.default.Component),r(t,[{key:"componentDidMount",value:function(){this.loadInstance()}},{key:"shouldComponentUpdate",value:function(e){if(this.props.shortname!==e.shortname)return!0;var t=e.config,n=this.props.config;return t.url!==n.url&&t.identifier!==n.identifier}},{key:"componentWillUpdate",value:function(e){this.props.shortname!==e.shortname&&this.cleanInstance()}},{key:"componentDidUpdate",value:function(){this.loadInstance()}},{key:"loadInstance",value:function(){var e=window.document;e.getElementById("dsq-count-scr")?l():(0,c.insertScript)("https://"+this.props.shortname+".disqus.com/count.js","dsq-count-scr",e.body)}},{key:"cleanInstance",value:function(){var e=window.document.body;(0,c.removeScript)("dsq-count-scr",e),window.DISQUSWIDGETS=void 0}},{key:"render",value:function(){return i.default.createElement("span",{className:"disqus-comment-count","data-disqus-identifier":this.props.config.identifier,"data-disqus-url":this.props.config.url},this.props.children)}}]),t}()},191:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CommentEmbed=void 0;var o,r=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),a=n(0),i=(o=a)&&o.__esModule?o:{default:o};(t.CommentEmbed=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,i.default.Component),r(t,[{key:"getSrc",value:function(){return"https://embed.disqus.com/p/"+Number(this.props.commentId).toString(36)+"?p="+(this.props.showParentComment?"1":"0")+"&m="+(this.props.showMedia?"1":"0")}},{key:"render",value:function(){return i.default.createElement("iframe",{src:this.getSrc(),width:this.props.width,height:this.props.height,seamless:"seamless",scrolling:"no",frameBorder:"0"})}}]),t}()).defaultProps={showMedia:!0,showParentComment:!0,width:420,height:320}},192:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.DiscussionEmbed=void 0;var o,r=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),a=n(0),i=(o=a)&&o.__esModule?o:{default:o},c=n(174);t.DiscussionEmbed=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,i.default.Component),r(t,[{key:"componentWillMount",value:function(){"undefined"!=typeof window&&window.disqus_shortname&&window.disqus_shortname!==this.props.shortname&&this.cleanInstance()}},{key:"componentDidMount",value:function(){this.loadInstance()}},{key:"shouldComponentUpdate",value:function(e){if(this.props.shortname!==e.shortname)return!0;var t=e.config,n=this.props.config;return t.url!==n.url&&t.identifier!==n.identifier}},{key:"componentWillUpdate",value:function(e){this.props.shortname!==e.shortname&&this.cleanInstance()}},{key:"componentDidUpdate",value:function(){this.loadInstance()}},{key:"loadInstance",value:function(){var e=window.document;window&&window.DISQUS&&e.getElementById("dsq-embed-scr")?window.DISQUS.reset({reload:!0,config:this.getDisqusConfig(this.props.config)}):(window.disqus_config=this.getDisqusConfig(this.props.config),window.disqus_shortname=this.props.shortname,(0,c.insertScript)("https://"+this.props.shortname+".disqus.com/embed.js","dsq-embed-scr",e.body))}},{key:"cleanInstance",value:function(){var e=window.document;(0,c.removeScript)("dsq-embed-scr",e.body),window&&window.DISQUS&&window.DISQUS.reset({});try{delete window.DISQUS}catch(n){window.DISQUS=void 0}var t=e.getElementById("disqus_thread");if(t)for(;t.hasChildNodes();)t.removeChild(t.firstChild)}},{key:"getDisqusConfig",value:function(e){return function(){this.page.identifier=e.identifier,this.page.url=e.url,this.page.title=e.title,this.callbacks.onNewComment=[e.onNewComment]}}},{key:"render",value:function(){return i.default.createElement("div",{id:"disqus_thread"})}}]),t}()}}]);
//# sourceMappingURL=component---src-pages-blog-bayes-theorem-index-mdx-f039584481aff91b3020.js.map