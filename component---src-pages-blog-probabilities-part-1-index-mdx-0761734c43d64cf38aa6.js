(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{148:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",function(){return u});var r=n(200),a=n.n(r),o=n(0),i=n.n(o),c=n(175),l=n(195),s=n(182);t.default=function(e){var t=e.components,n=a()(e,["components"]);return i.a.createElement(c.MDXTag,{name:"wrapper",Layout:l.a,layoutProps:n,components:t},i.a.createElement(c.MDXTag,{name:"h2",components:t},"Introduction"),i.a.createElement(c.MDXTag,{name:"p",components:t},"These are my personal notes on the course from Polytechnique Paris :"),i.a.createElement(c.MDXTag,{name:"p",components:t},i.a.createElement(c.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"https://www.coursera.org/learn/probabilites-1/"}},"Aléatoire : une introduction aux probabilités - Partie 1")),i.a.createElement(c.MDXTag,{name:"h2",components:t},"Definitions"),i.a.createElement(c.MDXTag,{name:"p",components:t},"A ",i.a.createElement(c.MDXTag,{name:"strong",components:t,parentName:"p"},"random experiment")," is an experiment ",i.a.createElement(s.a,{formulae:"\\varepsilon"})," for which, with the same conditions,\neach repetition ends up with many possible results and from which we cannot infere its result in advance."),i.a.createElement(c.MDXTag,{name:"p",components:t},"The ",i.a.createElement(c.MDXTag,{name:"strong",components:t,parentName:"p"},"space of possible results")," of this experiment is called ",i.a.createElement(c.MDXTag,{name:"strong",components:t,parentName:"p"},"state space")," ",i.a.createElement(s.a,{formulae:"\\Omega"}),"."),i.a.createElement(c.MDXTag,{name:"p",components:t},"One ",i.a.createElement(c.MDXTag,{name:"strong",components:t,parentName:"p"},"result")," of the experiment is ",i.a.createElement(s.a,{formulae:"\\omega \\in \\Omega"}),"."),i.a.createElement(c.MDXTag,{name:"blockquote",components:t},i.a.createElement(c.MDXTag,{name:"p",components:t,parentName:"blockquote"},"Examples:"),i.a.createElement(c.MDXTag,{name:"ul",components:t,parentName:"blockquote"},i.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ul"},"Coin flipping: ",i.a.createElement(s.a,{formulae:"\\Omega = \\{\\text{head},\\text{tail}\\} \\hArr \\Omega = \\{0,1\\}"})),i.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ul"},"Dice throwing: ",i.a.createElement(s.a,{formulae:"\\Omega = \\{1, 2, 3, 4, 5, 6\\}"})),i.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ul"},"Lifetime of a bacterium: ",i.a.createElement(s.a,{formulae:"\\Omega = \\lbrack 0, +\\infty \\lbrack"})),i.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ul"},"Dart on an target of 30cm ø: ",i.a.createElement(s.a,{formulae:"\\Omega = \\{(x, y), \\sqrt{x^2+y^2} \\le 15 \\}"})),i.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ul"},"Stock price of a financial asset on a time interval ",i.a.createElement(s.a,{formulae:"\\lbrack t_1, t_2 \\rbrack"}),": ",i.a.createElement(s.a,{formulae:"\\Omega = S(\\lbrack t_1, t_2 \\rbrack, \\reals_+)"})))),i.a.createElement(c.MDXTag,{name:"p",components:t},"A ",i.a.createElement(c.MDXTag,{name:"strong",components:t,parentName:"p"},"random event")," ",i.a.createElement(c.MDXTag,{name:"em",components:t,parentName:"p"},"A")," associated to ",i.a.createElement(s.a,{formulae:"\\varepsilon"}),"\nis a subset of ",i.a.createElement(s.a,{formulae:"\\Omega"}),". "),i.a.createElement(c.MDXTag,{name:"blockquote",components:t},i.a.createElement(c.MDXTag,{name:"p",components:t,parentName:"blockquote"},"Examples:"),i.a.createElement(c.MDXTag,{name:"ul",components:t,parentName:"blockquote"},i.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ul"},"Coin flipped is head: ",i.a.createElement(s.a,{formulae:"A = \\{0\\}"})),i.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ul"},i.a.createElement(c.MDXTag,{name:"p",components:t,parentName:"li"},"For ",i.a.createElement(c.MDXTag,{name:"em",components:t,parentName:"p"},"n")," coin flipped, ",i.a.createElement(s.a,{formulae:"\\Omega = \\{0, 1\\}^n"}),", ",i.a.createElement(s.a,{formulae:"\\omega = (\\omega_1, \\dots ,\\omega_n)"}),",\nthe number of head is over or equal to the number of face:"),i.a.createElement(s.a,{formulae:"A = \\{ \\omega \\in \\Omega, \\sum^n_{i=1} \\omega _i \\ge \\frac{n}{2} \\}"})))),i.a.createElement(c.MDXTag,{name:"p",components:t},"For ",i.a.createElement(c.MDXTag,{name:"em",components:t,parentName:"p"},"A")," and ",i.a.createElement(c.MDXTag,{name:"em",components:t,parentName:"p"},"B"),", 2 events, we can say:"),i.a.createElement(c.MDXTag,{name:"ul",components:t},i.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ul"},i.a.createElement("code",{className:"language-text"},"not"),": ",i.a.createElement(c.MDXTag,{name:"em",components:t,parentName:"li"},"A")," isn’t reached: ",i.a.createElement(s.a,{formulae:"A^c"})," (aka A complementary)."),i.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ul"},i.a.createElement("code",{className:"language-text"},"and"),": ",i.a.createElement(c.MDXTag,{name:"em",components:t,parentName:"li"},"A")," and ",i.a.createElement(c.MDXTag,{name:"em",components:t,parentName:"li"},"B")," are reached: ",i.a.createElement(s.a,{formulae:"A \\cap B"}),"."),i.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ul"},i.a.createElement("code",{className:"language-text"},"or"),": ",i.a.createElement(c.MDXTag,{name:"em",components:t,parentName:"li"},"A")," or ",i.a.createElement(c.MDXTag,{name:"em",components:t,parentName:"li"},"B")," are reached: ",i.a.createElement(s.a,{formulae:"A \\cup B"}),"."),i.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ul"},i.a.createElement("code",{className:"language-text"},"imply"),": ",i.a.createElement(c.MDXTag,{name:"em",components:t,parentName:"li"},"A")," reached implies ",i.a.createElement(c.MDXTag,{name:"em",components:t,parentName:"li"},"B")," reached: ",i.a.createElement(s.a,{formulae:"A_\\text{reached} \\rArr B_\\text{reached} ~\\text{then}~ A \\subset B"}),"."),i.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ul"},i.a.createElement("code",{className:"language-text"},"incompatible"),": ",i.a.createElement(c.MDXTag,{name:"em",components:t,parentName:"li"},"A")," and ",i.a.createElement(c.MDXTag,{name:"em",components:t,parentName:"li"},"B")," are incompatible (incongruous, conflicting, …): ",i.a.createElement(s.a,{formulae:"A \\cap B = \\empty"}),"."),i.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ul"},i.a.createElement("code",{className:"language-text"},"always true"),": ",i.a.createElement(s.a,{formulae:"\\Omega"})," is the certain event: all results of the experiment take their value into it."),i.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ul"},i.a.createElement("code",{className:"language-text"},"always false"),": ",i.a.createElement(s.a,{formulae:"\\empty"})," is the impossible event.")),i.a.createElement(s.a,{formulae:"\\mathcal{A}"})," (aka A rounded) is the set of all events. It models the information of all results of the experiment.",i.a.createElement(s.a,{displayMode:!0,formulae:"\\forall x \\in \\mathcal{A} \\rArr A \\cap B \\in \\mathcal{A}, A \\cup B \\in \\mathcal{A}, A^c \\in \\mathcal{A} \\text{ and } \\Omega \\in \\mathcal{A}, \\empty \\in \\mathcal{A}"}))};var u={}},157:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return h}),n.d(t,"StaticQueryContext",function(){return f}),n.d(t,"StaticQuery",function(){return d});var r=n(0),a=n.n(r),o=n(4),i=n.n(o),c=n(155),l=n.n(c);n.d(t,"Link",function(){return l.a}),n.d(t,"withPrefix",function(){return c.withPrefix}),n.d(t,"navigate",function(){return c.navigate}),n.d(t,"push",function(){return c.push}),n.d(t,"replace",function(){return c.replace}),n.d(t,"navigateTo",function(){return c.navigateTo});var s=n(26);n.d(t,"waitForRouteChange",function(){return s.c});var u=n(158),m=n.n(u);n.d(t,"PageRenderer",function(){return m.a});var p=n(36);n.d(t,"parsePath",function(){return p.a});var f=a.a.createContext({}),d=function(e){return a.a.createElement(f.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):a.a.createElement("div",null,"Loading (StaticQuery)")})};function h(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}d.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},158:function(e,t,n){var r;e.exports=(r=n(164))&&r.default||r},159:function(e,t,n){"use strict";var r=n(185),a=Object(r.a)(function(){return!1});t.a=a},161:function(e,t,n){"use strict";var r=n(7),a=n.n(r),o=n(165),i=n(178),c=n.n(i),l=n(0),s=n.n(l),u=n(179),m=n.n(u),p=n(154),f=n(157),d=n(4),h=n(156),g=n(169),b=n.n(g);function y(){var e=b()(["\n  html, body, #___gatsby, #___gatsby >div {\n    height: 100%;\n  }\n  div > p > .gatsby-resp-image-wrapper {\n    max-width: 100% !important;\n    .gatsby-resp-image-background-image {\n      border: 1px solid ",";\n      border-radius: ",";\n      overflow: hidden;\n    }\n  }\n  .katex-display { margin: 0 0 .5em; }\n  .katex { font: 300 1.15em KaTeX_Main, serif; }\n  ","\n  .center { text-align: center; }\n"]);return y=function(){return e},e}var v=Object(p.b)(y(),function(e){return e.theme.lightGray},function(e){return e.theme.borderRadius},function(e){return function(e){return'\ncode[class*="language-"],\npre[class*="language-"] {\n\tcolor: '+e.bodyColor+";\n\tbackground: none;\n\tfont-family: "+e.monospaceFont+';\n\ttext-align: left;\n\twhite-space: pre;\n\tword-spacing: normal;\n\tword-break: normal;\n\tword-wrap: normal;\n\tline-height: 1.5;\n\thyphens: none;\n}\n\n/* Code blocks */\npre[class*="language-"] {\n\tpadding: 1em;\n\tmargin: .5em 0;\n\toverflow: auto;\n\tborder-radius: '+e.borderRadius+";\n\tborder: 1px solid "+e.gray+';\n}\n\n:not(pre) > code[class*="language-"],\npre[class*="language-"] {\n\tbackground: '+e.lightGray+';\n}\n\n/* Inline code */\n:not(pre) > code[class*="language-"] {\n\tpadding: .1em;\n\tborder-radius: '+e.borderRadius+";\n\twhite-space: normal;\n}\n\n.token.comment,\n.token.prolog,\n.token.doctype,\n.token.cdata {\n\tcolor: "+e.gray+";\n}\n\n.token.punctuation {\n\tcolor: "+e.bodyColor+";\n}\n\n.namespace {\n\topacity: .7;\n}\n\n.token.property,\n.token.tag,\n.token.constant,\n.token.symbol,\n.token.deleted {\n\tcolor: "+e.secondaryColor+";\n}\n\n.token.boolean,\n.token.number {\n\tcolor: "+e.secondaryColor+";\n}\n\n.token.selector,\n.token.attr-name,\n.token.string,\n.token.char,\n.token.builtin,\n.token.inserted {\n\tcolor: "+e.secondaryColor+";\n}\n\n.token.operator,\n.token.entity,\n.token.url,\n.language-css .token.string,\n.style .token.string,\n.token.variable {\n\tcolor: "+e.bodyColor+";\n}\n\n.token.atrule,\n.token.attr-value,\n.token.function,\n.token.class-name {\n\tcolor: "+e.secondaryColor+";\n}\n\n.token.keyword {\n\tcolor: "+e.secondaryColor+";\n}\n\n.token.regex,\n.token.important {\n\tcolor: "+e.secondaryColor+";\n}\n\n.token.important,\n.token.bold {\n\tfont-weight: bold;\n}\n.token.italic {\n\tfont-style: italic;\n}\n\n.token.entity {\n\tcursor: help;\n}\n"}(e.theme)}),E=p.c.main.withConfig({componentId:"sc-1ph75po-0"})(["background:",";a{position:relative;display:inline-block;background:transparent;color:",";font-weight:bold;text-decoration:none;>span{color:inherit;background-color:inherit;}&::after{content:'';"," "," background:",";transition:opacity ",",transform ",";opacity:0;transform:translateY(.2em);}&:hover::after{opacity:1;transform:none;}}"],function(e){return e.theme.bgColor},function(e){return e.theme.secondaryColor},Object(h.a)("absolute",null,null,"0","0"),Object(h.b)("1px","100%"),function(e){return e.theme.secondaryColor},function(e){return e.theme.defaultTransition},function(e){return e.theme.defaultTransition}),w=n(159),k=Object(w.a)(p.c.header.withConfig({componentId:"sc-116zvyz-0"})(["margin:0 auto;max-width:","px;a{text-decoration:none;}"],function(e){return e.theme.maxWidth})),C=Object(w.a)(p.c.ul.withConfig({componentId:"sc-116zvyz-1"})(["display:block;list-style-type:none;margin:0;text-align:right;position:relative;white-space:nowrap;width:100%;&::before,&::after{content:'';display:block;background:linear-gradient( to right,transparent,",",transparent );position:absolute;","}&::before{top:0;}&::after{bottom:0;}>li{display:inline-block;margin:0;padding:1em 0;&:not(:first-child){margin-left:1em;}}a{color:",";font-family:",";font-size:14px;text-transform:uppercase;transition:color ",";&:hover,&:active{color:",";}}"],function(e){return e.theme.lightGray},Object(h.b)("1px","100%"),function(e){return e.theme.gray},function(e){return e.theme.headerFont},function(e){return e.theme.defaultTransition},function(e){return e.theme.headerColor})),M=Object(w.a)(Object(p.c)(f.Link).withConfig({componentId:"sc-116zvyz-2"})(["display:block;text-align:center;h1{display:inline-block;margin:.5em;font-weight:900;font-size:22px;letter-spacing:1px;position:relative;transition:color ",";&::after{content:'';border-radius:50%;display:block;background:",";"," ","}&:hover,&:active{color:",";}}"],function(e){return e.theme.defaultTransition},function(e){return e.theme.secondaryColor},Object(h.a)("absolute","8px","-1em",null,null),Object(h.b)("10px"),function(e){return e.theme.secondaryColor})),x=function(e){function t(){for(var t,n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return(t=e.call.apply(e,[this].concat(r))||this).shouldComponentUpdate=function(){return!1},t}return a()(t,e),t.prototype.render=function(){return s.a.createElement("nav",null,s.a.createElement(k,null,s.a.createElement(M,{to:"/"},s.a.createElement("h1",null,this.props.title)),s.a.createElement(C,null,s.a.createElement("li",null,s.a.createElement(f.Link,{to:"/"},"Home")),s.a.createElement("li",null,s.a.createElement(f.Link,{to:"/tools"},"Tools")),s.a.createElement("li",null,s.a.createElement(f.Link,{to:"/about"},"About")))))},t}(l.Component);x.propTypes={title:d.string.isRequired};var O=n(162);n.d(t,"a",function(){return T});var D=p.c.div.withConfig({componentId:"grcys-0"})(["background:",";margin:1em auto;"," max-width:","px;position:relative;"],function(e){return e.theme.bgColor},Object(h.b)("100%","100vw"),function(e){return e.theme.maxWidth}),T=function(e){function t(){for(var t,n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return(t=e.call.apply(e,[this].concat(r))||this).shouldComponentUpdate=function(){return!1},t}a()(t,e);var n=t.prototype;return n.componentDidMount=function(){t.fbPixelInitialized||(m.a.init("1915349895435128",{},{}),t.fbPixelInitialized=!0),m.a.pageView()},n.render=function(){var e=this.props,t=e.children,n=e.title,r=e.description;return s.a.createElement(p.a,{theme:O.a},s.a.createElement(f.StaticQuery,{query:"4226086209",render:function(e){var a=e.site.siteMetadata;return s.a.createElement(l.Fragment,null,s.a.createElement(c.a,null,s.a.createElement("html",{lang:"en",amp:!0}),s.a.createElement("title",null,n?a.title+": "+n:a.title),s.a.createElement("meta",{name:"description",content:r||a.description}),s.a.createElement("meta",{property:"og:title",content:n}),s.a.createElement("meta",{property:"og:description",content:r||a.description}),s.a.createElement("meta",{name:"twitter:card",content:"summary"}),s.a.createElement("meta",{name:"twitter:creator",content:"PEM___"}),s.a.createElement("meta",{name:"google-site-verification",content:a.googleSearchConsoleOwnershipId})),s.a.createElement(x,{title:a.title}),s.a.createElement(E,null,s.a.createElement(D,null,t({siteMetadata:a}))),s.a.createElement(v,null))},data:o}))},t}(l.Component);T.fbPixelInitialized=!1,T.propTypes={children:d.any.isRequired,description:d.string,title:d.string}},162:function(e,t,n){"use strict";t.a={bgColor:"white",bodyColor:"#333",borderRadius:"5px",defaultTransition:".3s ease-in-out",headerColor:"#181818",headerFont:"-apple-system,'BlinkMacSystemFont','Segoe UI','Roboto','Oxygen','Ubuntu','Cantarell','Fira Sans','Droid Sans','Helvetica Neue','sans-serif'",monospaceFont:"'Andale Mono', 'Ubuntu Mono', monospace",maxWidth:960,secondaryColor:"#e70808",smallFontSize:"10px",smallFontWeight:300,gray:"#7f7f7f",lightGray:"#e7e7e7",warningColor:"#f4ab55"}},163:function(e,t){var n=Array.isArray;e.exports=n},164:function(e,t,n){"use strict";n.r(t);var r=n(10),a=n.n(r),o=n(0),i=n.n(o),c=n(4),l=n.n(c),s=n(51),u=n(1),m=function(e){var t=e.location,n=u.default.getResourcesForPathnameSync(t.pathname);return i.a.createElement(s.a,a()({location:t,pageResources:n},n.json))};m.propTypes={location:l.a.shape({pathname:l.a.string.isRequired}).isRequired},t.default=m},165:function(e){e.exports={data:{site:{siteMetadata:{description:"Notes and posts about development, Math, ML and AI",discussShortName:"https-pem-github-io",googleSearchConsoleOwnershipId:"IIdc-ufE7Rf_Gn8p7Ee83Ua7obcDac8tk2DLW_p87Ak",siteUrl:"https://pem--.github.io",title:"PEM's blog"}}}}},166:function(e,t,n){"use strict";n.d(t,"a",function(){return b});n(77);var r=n(7),a=n.n(r),o=n(0),i=n.n(o),c=n(154),l=n(587),s=n(588),u=n(589),m=n(590),p=n(591),f=n(592),d=n(156),h=n(4),g=c.c.div.withConfig({componentId:"sc-199atao-0"})(["display:flex;justify-content:center;margin:2em 0;position:relative;&::before,&::after{content:'';display:block;background:linear-gradient( to right,transparent,",",transparent );position:absolute;","}&::before{top:-1em;}&::after{bottom:-1em;}>*{cursor:pointer;flex:0 0 auto;outline:0;&:not(:first-of-type){margin-left:1.5em;}}"],function(e){return e.theme.lightGray},Object(d.b)("1px","100%")),b=function(e){function t(){for(var t,n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return(t=e.call.apply(e,[this].concat(r))||this).shouldComponentUpdate=function(e){var n=e.href,r=e.title;return t.props.href!==n||t.props.title!==r},t}return a()(t,e),t.prototype.render=function(){var e={url:this.props.href};return i.a.createElement(g,null,i.a.createElement(l.a,Object.assign({title:this.props.title},e),i.a.createElement(s.a,t.shareIconProps)),i.a.createElement(u.a,Object.assign({title:this.props.title},e),i.a.createElement(m.a,t.shareIconProps)),i.a.createElement(p.a,Object.assign({subject:this.props.title},e),i.a.createElement(f.a,t.shareIconProps)))},t}(o.Component);b.shareIconProps={round:!0,size:32},b.propTypes={href:h.string.isRequired,title:h.string.isRequired}},167:function(e,t,n){"use strict";n.d(t,"a",function(){return l});var r=n(7),a=n.n(r),o=n(0),i=n.n(o),c=n(4),l=function(e){function t(){for(var t,n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return(t=e.call.apply(e,[this].concat(r))||this).shouldComponentUpdate=function(){return!1},t}return a()(t,e),t.prototype.render=function(){return i.a.createElement("a",{href:this.props.href,target:"_blank",rel:"noreferrer noopener"},this.props.text)},t}(o.Component);l.propTypes={href:c.string.isRequired,text:c.string.isRequired}},168:function(e,t,n){var r=n(170).Symbol;e.exports=r},170:function(e,t,n){var r=n(186),a="object"==typeof self&&self&&self.Object===Object&&self,o=r||a||Function("return this")();e.exports=o},171:function(e,t){e.exports=function(e){return null!=e&&"object"==typeof e}},173:function(e,t,n){var r=n(168),a=n(192),o=n(193),i="[object Null]",c="[object Undefined]",l=r?r.toStringTag:void 0;e.exports=function(e){return null==e?void 0===e?c:i:l&&l in Object(e)?a(e):o(e)}},175:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(208);Object.defineProperty(t,"MDXTag",{enumerable:!0,get:function(){return o(r).default}});var a=n(183);function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"MDXProvider",{enumerable:!0,get:function(){return o(a).default}})},181:function(e,t,n){"use strict";var r=n(154),a=n(156);t.a=r.c.h1.withConfig({componentId:"sc-1szmnsq-0"})(["position:relative;width:calc(100% - 60px);small{color:",";display:block;font-weight:",";font-size:",";font-style:italic;"," text-align:right;width:60px;}"],function(e){return e.theme.gray},function(e){return e.theme.smallFontWeight},function(e){return e.theme.smallFontSize},Object(a.a)("absolute",null,"-60px",0,null))},182:function(e,t,n){"use strict";n.d(t,"a",function(){return p});n(244),n(245),n(29);var r=n(7),a=n.n(r),o=n(0),i=n.n(o),c=n(246),l=n.n(c),s=n(154),u=n(4),m=s.c.span.withConfig({componentId:"sc-1dl32td-0"})(["color:",";"],function(e){return e.theme.warningColor}),p=function(e){function t(){for(var t,n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return(t=e.call.apply(e,[this].concat(r))||this).shouldComponentUpdate=function(e){var n=e.formulae;return t.props.formulae!==n},t}return a()(t,e),t.prototype.render=function(){try{var e=l.a.renderToString(this.props.formulae,{displayMode:this.props.displayMode});return i.a.createElement("span",{dangerouslySetInnerHTML:{__html:e}})}catch(e){var t=e.toString().replace("ParseError: KaTeX parse error: ","");return i.a.createElement(m,null,t)}},t}(o.Component);p.propTypes={displayMode:u.bool,formulae:u.string.isRequired}},183:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.withMDXComponents=void 0;var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=c(n(0)),o=c(n(52)),i=c(n(4));function c(e){return e&&e.__esModule?e:{default:e}}var l=(0,o.default)({}),s=l.Provider,u=l.Consumer;t.withMDXComponents=function(e){return function(t){var n=t.components,o=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}(t,["components"]);return a.default.createElement(u,null,function(t){return a.default.createElement(e,r({components:n||t},o))})}};var m=function(e){var t=e.components,n=e.children;return a.default.createElement(s,{value:t},n)};m.propTypes={components:i.default.object.isRequired,children:i.default.element.isRequired},t.default=m},184:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.insertScript=function(e,t,n){var r=window.document.createElement("script");return r.async=!0,r.src=e,r.id=t,n.appendChild(r),r},t.removeScript=function(e,t){var n=window.document.getElementById(e);n&&t.removeChild(n)},t.debounce=function(e,t,n){var r=void 0;return function(){var a=this,o=arguments,i=n&&!r;window.clearTimeout(r),r=setTimeout(function(){r=null,n||e.apply(a,o)},t),i&&e.apply(a,o)}}},186:function(e,t,n){(function(t){var n="object"==typeof t&&t&&t.Object===Object&&t;e.exports=n}).call(this,n(177))},192:function(e,t,n){var r=n(168),a=Object.prototype,o=a.hasOwnProperty,i=a.toString,c=r?r.toStringTag:void 0;e.exports=function(e){var t=o.call(e,c),n=e[c];try{e[c]=void 0;var r=!0}catch(e){}var a=i.call(e);return r&&(t?e[c]=n:delete e[c]),a}},193:function(e,t){var n=Object.prototype.toString;e.exports=function(e){return n.call(e)}},194:function(e,t,n){var r=n(173),a=n(163),o=n(171),i="[object String]";e.exports=function(e){return"string"==typeof e||!a(e)&&o(e)&&r(e)==i}},195:function(e,t,n){"use strict";var r=n(198),a=n.n(r),o=n(0),i=n.n(o),c=n(224),l=n.n(c),s=n(225),u=n.n(s),m=n(7),p=n.n(m),f=n(154),d=n(156),h=n(4),g=n(167),b=f.c.span.withConfig({componentId:"sc-1rxao4w-0"})(["display:block;"," font-size:.8em;"],Object(d.a)("absolute","-.3em",0,null,null)),y=function(e){function t(){for(var t,n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return(t=e.call.apply(e,[this].concat(r))||this).shouldComponentUpdate=function(){return!1},t}return p()(t,e),t.prototype.render=function(){return i.a.createElement(b,null,i.a.createElement(g.a,{href:"https://github.com/PEM--/PEM--.github.io/tree/master/src/src/pages/blog/"+this.props.slug,text:"Contribute on Github"}))},t}(o.Component);y.propTypes={slug:h.string.isRequired};var v=n(181),E=n(161),w=(n(77),n(199),n(194)),k=n.n(w),C=n(175),M=f.c.blockquote.withConfig({componentId:"jcqrfk-0"})(["border-left:1px solid ",";margin-left:1.5em;padding-left:1em;position:relative;&::before{content:'➸';color:",";display:block;font-size:1.2em;","}"],function(e){return e.theme.lightGray},function(e){return e.theme.secondaryColor},Object(d.a)("absolute",0,null,null,"-1.5em")),x=f.c.p.withConfig({componentId:"jcqrfk-1"})(["text-align:justify;&.semiColon{margin-bottom:0;}"]),O=function(e){function t(){for(var t,n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return(t=e.call.apply(e,[this].concat(r))||this).shouldComponentUpdate=function(){return!1},t}return p()(t,e),t.prototype.render=function(){var e=this.props.children&&k()(this.props.children)&&this.props.children.endsWith(":");return i.a.createElement(x,Object.assign({className:e&&"semiColon"},this.props))},t}(o.Component);O.propTypes={children:h.any};var D=function(e){function t(){for(var t,n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return(t=e.call.apply(e,[this].concat(r))||this).shouldComponentUpdate=function(){return!1},t}return p()(t,e),t.prototype.render=function(){return i.a.createElement(C.MDXProvider,{components:{a:function(e){var t=e.href,n=e.children;return i.a.createElement(g.a,{href:t,text:n})},blockquote:function(e){return i.a.createElement(M,e)},p:function(e){return i.a.createElement(O,e)}}},this.props.children)},t}(o.Component);D.propTypes={children:h.any.isRequired};var T=n(166),_=u.a.react(function(e){var t=e.children,n=e.location.href,r=e.pageContext.frontmatter,c={identifier:r.slug,title:r.title,url:n};return i.a.createElement(E.a,r,function(e){var s=e.siteMetadata;return i.a.createElement(o.Fragment,null,i.a.createElement(v.a,null,r.title,i.a.createElement("small",null,l()(r.date,"DD/MM/YY"))),r.contribute&&i.a.createElement(y,{slug:r.slug}),i.a.createElement(D,null,t),i.a.createElement(T.a,{href:n,title:r.title}),r.comment&&i.a.createElement(a.a.DiscussionEmbed,{config:c,shortname:s.discussShortName}))})});t.a=_},198:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.DiscussionEmbed=t.CommentEmbed=t.CommentCount=void 0;var r=n(209),a=n(210),o=n(211);t.CommentCount=r.CommentCount,t.CommentEmbed=a.CommentEmbed,t.DiscussionEmbed=o.DiscussionEmbed;var i={CommentCount:r.CommentCount,CommentEmbed:a.CommentEmbed,DiscussionEmbed:o.DiscussionEmbed};t.default=i},199:function(e,t,n){"use strict";var r=n(6),a=n(27),o=n(212),i="".endsWith;r(r.P+r.F*n(213)("endsWith"),"String",{endsWith:function(e){var t=o(this,e,"endsWith"),n=arguments.length>1?arguments[1]:void 0,r=a(t.length),c=void 0===n?r:Math.min(a(n),r),l=String(e);return i?i.call(t,l,c):t.slice(c-l.length,c)===l}})},208:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=n(0),i=s(o),c=s(n(231)),l=n(183);function s(e){return e&&e.__esModule?e:{default:e}}var u={inlineCode:"code",wrapper:"div"},m=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.Component),a(t,[{key:"render",value:function(){var e=this.props,t=e.name,n=e.parentName,a=e.props,o=void 0===a?{}:a,l=e.children,s=e.components,m=void 0===s?{}:s,p=e.Layout,f=e.layoutProps,d=m[n+"."+t]||m[t]||u[t]||t;return p?((0,c.default)(this,p),i.default.createElement(p,r({components:m},f),i.default.createElement(d,o,l))):i.default.createElement(d,o,l)}}]),t}();t.default=(0,l.withMDXComponents)(m)},209:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CommentCount=void 0;var r,a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=n(0),i=(r=o)&&r.__esModule?r:{default:r},c=n(184);var l=(0,c.debounce)(function(){window.DISQUSWIDGETS&&window.DISQUSWIDGETS.getCount({reset:!0})},300,!1);t.CommentCount=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,i.default.Component),a(t,[{key:"componentDidMount",value:function(){this.loadInstance()}},{key:"shouldComponentUpdate",value:function(e){if(this.props.shortname!==e.shortname)return!0;var t=e.config,n=this.props.config;return t.url!==n.url&&t.identifier!==n.identifier}},{key:"componentWillUpdate",value:function(e){this.props.shortname!==e.shortname&&this.cleanInstance()}},{key:"componentDidUpdate",value:function(){this.loadInstance()}},{key:"loadInstance",value:function(){var e=window.document;e.getElementById("dsq-count-scr")?l():(0,c.insertScript)("https://"+this.props.shortname+".disqus.com/count.js","dsq-count-scr",e.body)}},{key:"cleanInstance",value:function(){var e=window.document.body;(0,c.removeScript)("dsq-count-scr",e),window.DISQUSWIDGETS=void 0}},{key:"render",value:function(){return i.default.createElement("span",{className:"disqus-comment-count","data-disqus-identifier":this.props.config.identifier,"data-disqus-url":this.props.config.url},this.props.children)}}]),t}()},210:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CommentEmbed=void 0;var r,a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=n(0),i=(r=o)&&r.__esModule?r:{default:r};(t.CommentEmbed=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,i.default.Component),a(t,[{key:"getSrc",value:function(){return"https://embed.disqus.com/p/"+Number(this.props.commentId).toString(36)+"?p="+(this.props.showParentComment?"1":"0")+"&m="+(this.props.showMedia?"1":"0")}},{key:"render",value:function(){return i.default.createElement("iframe",{src:this.getSrc(),width:this.props.width,height:this.props.height,seamless:"seamless",scrolling:"no",frameBorder:"0"})}}]),t}()).defaultProps={showMedia:!0,showParentComment:!0,width:420,height:320}},211:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.DiscussionEmbed=void 0;var r,a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=n(0),i=(r=o)&&r.__esModule?r:{default:r},c=n(184);t.DiscussionEmbed=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,i.default.Component),a(t,[{key:"componentWillMount",value:function(){"undefined"!=typeof window&&window.disqus_shortname&&window.disqus_shortname!==this.props.shortname&&this.cleanInstance()}},{key:"componentDidMount",value:function(){this.loadInstance()}},{key:"shouldComponentUpdate",value:function(e){if(this.props.shortname!==e.shortname)return!0;var t=e.config,n=this.props.config;return t.url!==n.url&&t.identifier!==n.identifier}},{key:"componentWillUpdate",value:function(e){this.props.shortname!==e.shortname&&this.cleanInstance()}},{key:"componentDidUpdate",value:function(){this.loadInstance()}},{key:"loadInstance",value:function(){var e=window.document;window&&window.DISQUS&&e.getElementById("dsq-embed-scr")?window.DISQUS.reset({reload:!0,config:this.getDisqusConfig(this.props.config)}):(window.disqus_config=this.getDisqusConfig(this.props.config),window.disqus_shortname=this.props.shortname,(0,c.insertScript)("https://"+this.props.shortname+".disqus.com/embed.js","dsq-embed-scr",e.body))}},{key:"cleanInstance",value:function(){var e=window.document;(0,c.removeScript)("dsq-embed-scr",e.body),window&&window.DISQUS&&window.DISQUS.reset({});try{delete window.DISQUS}catch(e){window.DISQUS=void 0}var t=e.getElementById("disqus_thread");if(t)for(;t.hasChildNodes();)t.removeChild(t.firstChild)}},{key:"getDisqusConfig",value:function(e){return function(){this.page.identifier=e.identifier,this.page.url=e.url,this.page.title=e.title,this.callbacks.onNewComment=[e.onNewComment]}}},{key:"render",value:function(){return i.default.createElement("div",{id:"disqus_thread"})}}]),t}()},212:function(e,t,n){var r=n(78),a=n(28);e.exports=function(e,t,n){if(r(t))throw TypeError("String#"+n+" doesn't accept regex!");return String(a(e))}},213:function(e,t,n){var r=n(3)("match");e.exports=function(e){var t=/./;try{"/./"[e](t)}catch(n){try{return t[r]=!1,!"/./"[e](t)}catch(e){}}return!0}}}]);
//# sourceMappingURL=component---src-pages-blog-probabilities-part-1-index-mdx-0761734c43d64cf38aa6.js.map