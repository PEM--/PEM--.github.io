(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{148:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",function(){return u});var r=n(196),a=n.n(r),o=n(0),i=n.n(o),l=n(175),c=n(195),s=n(308);t.default=function(e){var t=e.components,n=a()(e,["components"]);return i.a.createElement(l.MDXTag,{name:"wrapper",Layout:c.a,layoutProps:n,components:t},i.a.createElement(l.MDXTag,{name:"h2",components:t},"Some relevant wikipedia links"),i.a.createElement(l.MDXTag,{name:"ul",components:t},i.a.createElement(l.MDXTag,{name:"li",components:t,parentName:"ul"},i.a.createElement(l.MDXTag,{name:"a",components:t,parentName:"li",props:{href:"https://en.wikipedia.org/wiki/Tf%E2%80%93idf"}},"tf-idf")),i.a.createElement(l.MDXTag,{name:"li",components:t,parentName:"ul"},i.a.createElement(l.MDXTag,{name:"a",components:t,parentName:"li",props:{href:"https://en.wikipedia.org/wiki/Levenshtein_distance"}},"Levenshtein distance")),i.a.createElement(l.MDXTag,{name:"li",components:t,parentName:"ul"},i.a.createElement(l.MDXTag,{name:"a",components:t,parentName:"li",props:{href:"https://en.wikipedia.org/wiki/Stemming"}},"Stemming")),i.a.createElement(l.MDXTag,{name:"li",components:t,parentName:"ul"},i.a.createElement(l.MDXTag,{name:"a",components:t,parentName:"li",props:{href:"https://en.wikipedia.org/wiki/F1_score"}},"F1 Score"))),i.a.createElement(l.MDXTag,{name:"h2",components:t},"Videos"),i.a.createElement(s.a,{url:"vrjAIBgxm_w"}),i.a.createElement(s.a,{url:"v7n7wZhHJj8"}),i.a.createElement(s.a,{url:"_0Z8aGwjLYo"}))};var u={}},157:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return h}),n.d(t,"StaticQueryContext",function(){return d}),n.d(t,"StaticQuery",function(){return f});var r=n(0),a=n.n(r),o=n(4),i=n.n(o),l=n(155),c=n.n(l);n.d(t,"Link",function(){return c.a}),n.d(t,"withPrefix",function(){return l.withPrefix}),n.d(t,"navigate",function(){return l.navigate}),n.d(t,"push",function(){return l.push}),n.d(t,"replace",function(){return l.replace}),n.d(t,"navigateTo",function(){return l.navigateTo});var s=n(26);n.d(t,"waitForRouteChange",function(){return s.c});var u=n(158),p=n.n(u);n.d(t,"PageRenderer",function(){return p.a});var m=n(36);n.d(t,"parsePath",function(){return m.a});var d=a.a.createContext({}),f=function(e){return a.a.createElement(d.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):a.a.createElement("div",null,"Loading (StaticQuery)")})};function h(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}f.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},158:function(e,t,n){var r;e.exports=(r=n(164))&&r.default||r},159:function(e,t,n){"use strict";var r=n(185),a=Object(r.a)(function(){return!1});t.a=a},161:function(e,t,n){"use strict";var r=n(7),a=n.n(r),o=n(165),i=n(178),l=n.n(i),c=n(0),s=n.n(c),u=n(179),p=n.n(u),m=n(154),d=n(157),f=n(4),h=n(156),g=n(169),y=n.n(g);function b(){var e=y()(["\n  html, body, #___gatsby, #___gatsby >div {\n    height: 100%;\n  }\n  div > p > .gatsby-resp-image-wrapper {\n    max-width: 100% !important;\n    .gatsby-resp-image-background-image {\n      border: 1px solid ",";\n      border-radius: ",";\n      overflow: hidden;\n    }\n  }\n  .katex-display { margin: 0 0 .5em; }\n  .katex { font: 300 1.15em KaTeX_Main, serif; }\n  ","\n  .center { text-align: center; }\n"]);return b=function(){return e},e}var k=Object(m.b)(b(),function(e){return e.theme.lightGray},function(e){return e.theme.borderRadius},function(e){return function(e){return'\ncode[class*="language-"],\npre[class*="language-"] {\n\tcolor: '+e.bodyColor+";\n\tbackground: none;\n\tfont-family: "+e.monospaceFont+';\n\ttext-align: left;\n\twhite-space: pre;\n\tword-spacing: normal;\n\tword-break: normal;\n\tword-wrap: normal;\n\tline-height: 1.5;\n\thyphens: none;\n}\n\n/* Code blocks */\npre[class*="language-"] {\n\tpadding: 1em;\n\tmargin: .5em 0;\n\toverflow: auto;\n\tborder-radius: '+e.borderRadius+";\n\tborder: 1px solid "+e.gray+';\n}\n\n:not(pre) > code[class*="language-"],\npre[class*="language-"] {\n\tbackground: '+e.lightGray+';\n}\n\n/* Inline code */\n:not(pre) > code[class*="language-"] {\n\tpadding: .1em;\n\tborder-radius: '+e.borderRadius+";\n\twhite-space: normal;\n}\n\n.token.comment,\n.token.prolog,\n.token.doctype,\n.token.cdata {\n\tcolor: "+e.gray+";\n}\n\n.token.punctuation {\n\tcolor: "+e.bodyColor+";\n}\n\n.namespace {\n\topacity: .7;\n}\n\n.token.property,\n.token.tag,\n.token.constant,\n.token.symbol,\n.token.deleted {\n\tcolor: "+e.secondaryColor+";\n}\n\n.token.boolean,\n.token.number {\n\tcolor: "+e.secondaryColor+";\n}\n\n.token.selector,\n.token.attr-name,\n.token.string,\n.token.char,\n.token.builtin,\n.token.inserted {\n\tcolor: "+e.secondaryColor+";\n}\n\n.token.operator,\n.token.entity,\n.token.url,\n.language-css .token.string,\n.style .token.string,\n.token.variable {\n\tcolor: "+e.bodyColor+";\n}\n\n.token.atrule,\n.token.attr-value,\n.token.function,\n.token.class-name {\n\tcolor: "+e.secondaryColor+";\n}\n\n.token.keyword {\n\tcolor: "+e.secondaryColor+";\n}\n\n.token.regex,\n.token.important {\n\tcolor: "+e.secondaryColor+";\n}\n\n.token.important,\n.token.bold {\n\tfont-weight: bold;\n}\n.token.italic {\n\tfont-style: italic;\n}\n\n.token.entity {\n\tcursor: help;\n}\n"}(e.theme)}),v=m.c.main.withConfig({componentId:"sc-1ph75po-0"})(["background:",";a{position:relative;display:inline-block;background:transparent;color:",";font-weight:bold;text-decoration:none;>span{color:inherit;background-color:inherit;}&::after{content:'';"," "," background:",";transition:opacity ",",transform ",";opacity:0;transform:translateY(.2em);}&:hover::after{opacity:1;transform:none;}}"],function(e){return e.theme.bgColor},function(e){return e.theme.secondaryColor},Object(h.a)("absolute",null,null,"0","0"),Object(h.b)("1px","100%"),function(e){return e.theme.secondaryColor},function(e){return e.theme.defaultTransition},function(e){return e.theme.defaultTransition}),w=n(159),E=Object(w.a)(m.c.header.withConfig({componentId:"sc-116zvyz-0"})(["margin:0 auto;max-width:","px;a{text-decoration:none;}@media print{display:none;}"],function(e){return e.theme.maxWidth})),C=Object(w.a)(m.c.ul.withConfig({componentId:"sc-116zvyz-1"})(["display:block;list-style-type:none;margin:0;text-align:right;position:relative;white-space:nowrap;width:100%;&::before,&::after{content:'';display:block;background:linear-gradient( to right,transparent,",",transparent );position:absolute;","}&::before{top:0;}&::after{bottom:0;}>li{display:inline-block;margin:0;padding:1em 0;&:not(:first-child){margin-left:1em;}}a{color:",";font-family:",";font-size:14px;text-transform:uppercase;transition:color ",";&:hover,&:active{color:",";}}"],function(e){return e.theme.lightGray},Object(h.b)("1px","100%"),function(e){return e.theme.gray},function(e){return e.theme.headerFont},function(e){return e.theme.defaultTransition},function(e){return e.theme.headerColor})),x=Object(w.a)(Object(m.c)(d.Link).withConfig({componentId:"sc-116zvyz-2"})(["display:block;text-align:center;h1{display:inline-block;margin:.5em;font-weight:900;font-size:22px;letter-spacing:1px;position:relative;transition:color ",";&::after{content:'';border-radius:50%;display:block;background:",";"," ","}&:hover,&:active{color:",";}}"],function(e){return e.theme.defaultTransition},function(e){return e.theme.secondaryColor},Object(h.a)("absolute","8px","-1em",null,null),Object(h.b)("10px"),function(e){return e.theme.secondaryColor})),j=function(e){function t(){for(var t,n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return(t=e.call.apply(e,[this].concat(r))||this).shouldComponentUpdate=function(){return!1},t}return a()(t,e),t.prototype.render=function(){return s.a.createElement("nav",null,s.a.createElement(E,null,s.a.createElement(x,{to:"/"},s.a.createElement("h1",null,this.props.title)),s.a.createElement(C,null,s.a.createElement("li",null,s.a.createElement(d.Link,{to:"/"},"Home")),s.a.createElement("li",null,s.a.createElement(d.Link,{to:"/tools"},"Tools")),s.a.createElement("li",null,s.a.createElement(d.Link,{to:"/about"},"About")))))},t}(c.Component);j.propTypes={title:f.string.isRequired};var T=n(162);n.d(t,"a",function(){return I});var M=m.c.div.withConfig({componentId:"grcys-0"})(["background:",";margin:1em auto;"," max-width:","px;position:relative;"],function(e){return e.theme.bgColor},Object(h.b)("100%","100vw"),function(e){return e.theme.maxWidth}),I=function(e){function t(){for(var t,n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return(t=e.call.apply(e,[this].concat(r))||this).shouldComponentUpdate=function(){return!1},t}a()(t,e);var n=t.prototype;return n.componentDidMount=function(){t.fbPixelInitialized||(p.a.init("1915349895435128",{},{}),t.fbPixelInitialized=!0),p.a.pageView()},n.render=function(){var e=this.props,t=e.children,n=e.title,r=e.description;return s.a.createElement(m.a,{theme:T.a},s.a.createElement(d.StaticQuery,{query:"4226086209",render:function(e){var a=e.site.siteMetadata;return s.a.createElement(c.Fragment,null,s.a.createElement(l.a,null,s.a.createElement("html",{lang:"en",amp:!0}),s.a.createElement("title",null,n?a.title+": "+n:a.title),s.a.createElement("meta",{name:"description",content:r||a.description}),s.a.createElement("meta",{property:"og:title",content:n}),s.a.createElement("meta",{property:"og:description",content:r||a.description}),s.a.createElement("meta",{name:"twitter:card",content:"summary"}),s.a.createElement("meta",{name:"twitter:creator",content:"PEM___"}),s.a.createElement("meta",{name:"google-site-verification",content:a.googleSearchConsoleOwnershipId})),s.a.createElement(j,{title:a.title}),s.a.createElement(v,null,s.a.createElement(M,null,t({siteMetadata:a}))),s.a.createElement(k,null))},data:o}))},t}(c.Component);I.fbPixelInitialized=!1,I.propTypes={children:f.any.isRequired,description:f.string,title:f.string}},162:function(e,t,n){"use strict";t.a={bgColor:"white",bodyColor:"#333",borderRadius:"5px",defaultTransition:".3s ease-in-out",headerColor:"#181818",headerFont:"-apple-system,'BlinkMacSystemFont','Segoe UI','Roboto','Oxygen','Ubuntu','Cantarell','Fira Sans','Droid Sans','Helvetica Neue','sans-serif'",monospaceFont:"'Andale Mono', 'Ubuntu Mono', monospace",maxWidth:960,secondaryColor:"#e70808",smallFontSize:"10px",smallFontWeight:300,gray:"#7f7f7f",lightGray:"#e7e7e7",warningColor:"#f4ab55"}},164:function(e,t,n){"use strict";n.r(t);var r=n(10),a=n.n(r),o=n(0),i=n.n(o),l=n(4),c=n.n(l),s=n(50),u=n(2),p=function(e){var t=e.location,n=u.default.getResourcesForPathnameSync(t.pathname);return i.a.createElement(s.a,a()({location:t,pageResources:n},n.json))};p.propTypes={location:c.a.shape({pathname:c.a.string.isRequired}).isRequired},t.default=p},165:function(e){e.exports={data:{site:{siteMetadata:{description:"Notes and posts about development, Math, ML and AI",discussShortName:"https-pem-github-io",googleSearchConsoleOwnershipId:"IIdc-ufE7Rf_Gn8p7Ee83Ua7obcDac8tk2DLW_p87Ak",siteUrl:"https://pem--.github.io",title:"PEM's blog"}}}}},166:function(e,t,n){"use strict";n.d(t,"a",function(){return y});n(77);var r=n(7),a=n.n(r),o=n(0),i=n.n(o),l=n(154),c=n(587),s=n(588),u=n(589),p=n(590),m=n(591),d=n(592),f=n(156),h=n(4),g=l.c.div.withConfig({componentId:"sc-199atao-0"})(["display:flex;justify-content:center;margin:2em 0;position:relative;&::before,&::after{content:'';display:block;background:linear-gradient( to right,transparent,",",transparent );position:absolute;","}&::before{top:-1em;}&::after{bottom:-1em;}>*{cursor:pointer;flex:0 0 auto;outline:0;&:not(:first-of-type){margin-left:1.5em;}}@media print{display:none;}"],function(e){return e.theme.lightGray},Object(f.b)("1px","100%")),y=function(e){function t(){for(var t,n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return(t=e.call.apply(e,[this].concat(r))||this).shouldComponentUpdate=function(e){var n=e.href,r=e.title;return t.props.href!==n||t.props.title!==r},t}return a()(t,e),t.prototype.render=function(){var e={url:this.props.href};return i.a.createElement(g,null,i.a.createElement(c.a,Object.assign({title:this.props.title},e),i.a.createElement(s.a,t.shareIconProps)),i.a.createElement(u.a,Object.assign({title:this.props.title},e),i.a.createElement(p.a,t.shareIconProps)),i.a.createElement(m.a,Object.assign({subject:this.props.title},e),i.a.createElement(d.a,t.shareIconProps)))},t}(o.Component);y.shareIconProps={round:!0,size:32},y.propTypes={href:h.string.isRequired,title:h.string.isRequired}},167:function(e,t,n){"use strict";n.d(t,"a",function(){return c});var r=n(7),a=n.n(r),o=n(0),i=n.n(o),l=n(4),c=function(e){function t(){for(var t,n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return(t=e.call.apply(e,[this].concat(r))||this).shouldComponentUpdate=function(){return!1},t}return a()(t,e),t.prototype.render=function(){return i.a.createElement("a",{href:this.props.href,target:"_blank",rel:"noreferrer noopener"},this.props.text)},t}(o.Component);c.propTypes={href:l.string.isRequired,text:l.string.isRequired}},181:function(e,t,n){"use strict";var r=n(154),a=n(156);t.a=r.c.h1.withConfig({componentId:"sc-1szmnsq-0"})(["position:relative;width:calc(100% - 60px);small{color:",";display:block;font-weight:",";font-size:",";font-style:italic;"," text-align:right;width:60px;}"],function(e){return e.theme.gray},function(e){return e.theme.smallFontWeight},function(e){return e.theme.smallFontSize},Object(a.a)("absolute",null,"-60px",0,null))},195:function(e,t,n){"use strict";var r=n(199),a=n.n(r),o=n(0),i=n.n(o),l=n(224),c=n.n(l),s=n(225),u=n.n(s),p=n(154),m=n(7),d=n.n(m),f=n(156),h=n(4),g=n(167),y=p.c.span.withConfig({componentId:"sc-1rxao4w-0"})(["display:block;"," font-size:.8em;@media print{display:none;}"],Object(f.a)("absolute","-.3em",0,null,null)),b=function(e){function t(){for(var t,n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return(t=e.call.apply(e,[this].concat(r))||this).shouldComponentUpdate=function(){return!1},t}return d()(t,e),t.prototype.render=function(){return i.a.createElement(y,null,i.a.createElement(g.a,{href:"https://github.com/PEM--/PEM--.github.io/tree/master/src/src/pages/blog/"+this.props.slug,text:"Contribute on Github"}))},t}(o.Component);b.propTypes={slug:h.string.isRequired};var k=n(181),v=n(161),w=(n(77),n(200),n(194)),E=n.n(w),C=n(175),x=p.c.blockquote.withConfig({componentId:"jcqrfk-0"})(["border-left:1px solid ",";margin-left:1.5em;padding-left:1em;position:relative;&::before{content:'➸';color:",";display:block;font-size:1.2em;","}"],function(e){return e.theme.lightGray},function(e){return e.theme.secondaryColor},Object(f.a)("absolute",0,null,null,"-1.5em")),j=p.c.p.withConfig({componentId:"jcqrfk-1"})(["text-align:justify;&.semiColon{margin-bottom:0;}"]),T=function(e){function t(){for(var t,n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return(t=e.call.apply(e,[this].concat(r))||this).shouldComponentUpdate=function(){return!1},t}return d()(t,e),t.prototype.render=function(){var e=this.props.children&&E()(this.props.children)&&this.props.children.endsWith(":");return i.a.createElement(j,Object.assign({className:e&&"semiColon"},this.props))},t}(o.Component);T.propTypes={children:h.any};var M=function(e){function t(){for(var t,n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return(t=e.call.apply(e,[this].concat(r))||this).shouldComponentUpdate=function(){return!1},t}return d()(t,e),t.prototype.render=function(){return i.a.createElement(C.MDXProvider,{components:{a:function(e){var t=e.href,n=e.children;return i.a.createElement(g.a,{href:t,text:n})},blockquote:function(e){return i.a.createElement(x,e)},p:function(e){return i.a.createElement(T,e)}}},this.props.children)},t}(o.Component);M.propTypes={children:h.any.isRequired};var I=n(166),q=p.c.div.withConfig({componentId:"ppmfas-0"})(["@media print{display:none;}"]),O=u.a.react(function(e){var t=e.children,n=e.location.href,r=e.pageContext.frontmatter,l={identifier:r.slug,title:r.title,url:n};return i.a.createElement(v.a,r,function(e){var s=e.siteMetadata;return i.a.createElement(o.Fragment,null,i.a.createElement(k.a,null,r.title,i.a.createElement("small",null,c()(r.date,"DD/MM/YY"))),r.contribute&&i.a.createElement(b,{slug:r.slug}),i.a.createElement(M,null,t),i.a.createElement(I.a,{href:n,title:r.title}),r.comment&&i.a.createElement(q,null,i.a.createElement(a.a.DiscussionEmbed,{config:l,shortname:s.discussShortName})))})});t.a=O},308:function(e,t,n){"use strict";n.d(t,"a",function(){return h});var r=n(7),a=n.n(r),o=n(0),i=n.n(o),l=n(367),c=n.n(l),s=n(154),u=n(156),p=n(4),m=n(159),d=Object(m.a)(s.c.div.withConfig({componentId:"sc-11u4qes-0"})(["text-align:center;.maximized{display:inline-block;max-width:600px;width:100%;}.centered{position:relative;padding-top:56.25%;width:100%;}.reactPlayer{","}"],Object(u.a)("absolute",0,null,null,0))),f=Object(m.a)(c.a),h=function(e){function t(){for(var t,n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return(t=e.call.apply(e,[this].concat(r))||this).shouldComponentUpdate=function(){return!1},t}return a()(t,e),t.prototype.render=function(){var e=""+this.props.type+this.props.url;return i.a.createElement(d,null,i.a.createElement("div",{className:"maximized"},i.a.createElement("div",{className:"centered"},i.a.createElement(f,{className:"reactPlayer",height:"100%",url:e,width:"100%"}))))},t}(o.Component);h.propTypes={url:p.string.isRequired,type:p.string},h.defaultProps={type:"https://www.youtube.com/watch?v="}}}]);
//# sourceMappingURL=component---src-pages-blog-search-engine-introductory-matter-index-mdx-530a72d1545aa9933711.js.map