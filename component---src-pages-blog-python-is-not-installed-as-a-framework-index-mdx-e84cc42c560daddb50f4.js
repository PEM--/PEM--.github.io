(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{145:function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return p}),n.d(t,"_frontmatter",function(){return d});var r=n(182),o=n.n(r),a=n(6),i=n.n(a),l=n(0),c=n.n(l),s=n(170),u=n(173),p=function(e){function t(t){var n;return(n=e.call(this,t)||this).layout=u.a,n}return i()(t,e),t.prototype.render=function(){var e=this.props,t=e.components,n=o()(e,["components"]);return c.a.createElement(s.MDXTag,{name:"wrapper",Layout:this.layout,layoutProps:n,components:t},c.a.createElement(s.MDXTag,{name:"p",components:t},"This error message is seriously misleading. Actually, Matplotlib requires a default backend\nin order to work. You can specify it in a dedicated file ",c.a.createElement("code",{className:"language-text"},"~/.matplotlib/matplotlibrc"),":"),c.a.createElement("div",{className:"gatsby-highlight","data-language":"text"},c.a.createElement("pre",{className:"language-text"},c.a.createElement("code",{className:"language-text"},"backend: TkAgg"))))},t}(c.a.Component),d={}},155:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return f}),n.d(t,"StaticQueryContext",function(){return d}),n.d(t,"StaticQuery",function(){return m});var r=n(0),o=n.n(r),a=n(4),i=n.n(a),l=n(153),c=n.n(l);n.d(t,"Link",function(){return c.a}),n.d(t,"withPrefix",function(){return l.withPrefix}),n.d(t,"navigate",function(){return l.navigate}),n.d(t,"push",function(){return l.push}),n.d(t,"replace",function(){return l.replace}),n.d(t,"navigateTo",function(){return l.navigateTo});var s=n(157),u=n.n(s);n.d(t,"PageRenderer",function(){return u.a});var p=n(28);n.d(t,"parsePath",function(){return p.a});var d=o.a.createContext({}),m=function(e){return o.a.createElement(d.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):o.a.createElement("div",null,"Loading (StaticQuery)")})};function f(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}m.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},157:function(e,t,n){var r;e.exports=(r=n(163))&&r.default||r},159:function(e,t,n){"use strict";n.d(t,"a",function(){return c});var r=n(6),o=n.n(r),a=n(0),i=n.n(a),l=n(4),c=function(e){function t(){for(var t,n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(t=e.call.apply(e,[this].concat(r))||this).shouldComponentUpdate=function(){return!1},t}return o()(t,e),t.prototype.render=function(){return i.a.createElement("a",{href:this.props.href,target:"_blank",rel:"noreferrer noopener"},this.props.text)},t}(a.Component);c.propTypes={href:l.string.isRequired,text:l.string.isRequired}},160:function(e,t,n){"use strict";var r=n(177),o=Object(r.a)(function(){return!1});t.a=o},161:function(e,t,n){"use strict";var r=n(6),o=n.n(r),a=n(164),i=n(175),l=n.n(i),c=n(0),s=n.n(c),u=n(176),p=n.n(u),d=n(152),m=n(155),f=n(4),h=n(154),g=n(167),y=n.n(g);function b(){var e=y()(["\n  html, body, #___gatsby, #___gatsby >div {\n    height: 100%;\n  }\n  div > p > .gatsby-resp-image-wrapper {\n    max-width: 100% !important;\n    border: 1px solid ",";\n    border-radius: ",";\n    overflow: hidden;\n  }\n  .katex-display { margin: 0 0 .5em; }\n  .katex { font: 300 1.15em KaTeX_Main, serif; }\n  ","\n  .center { text-align: center; }\n"]);return b=function(){return e},e}var k=Object(d.b)(b(),function(e){return e.theme.lightGray},function(e){return e.theme.borderRadius},function(e){return function(e){return'\ncode[class*="language-"],\npre[class*="language-"] {\n\tcolor: '+e.bodyColor+";\n\tbackground: none;\n\tfont-family: "+e.monospaceFont+';\n\ttext-align: left;\n\twhite-space: pre;\n\tword-spacing: normal;\n\tword-break: normal;\n\tword-wrap: normal;\n\tline-height: 1.5;\n\thyphens: none;\n}\n\n/* Code blocks */\npre[class*="language-"] {\n\tpadding: 1em;\n\tmargin: .5em 0;\n\toverflow: auto;\n\tborder-radius: '+e.borderRadius+";\n\tborder: 1px solid "+e.gray+';\n}\n\n:not(pre) > code[class*="language-"],\npre[class*="language-"] {\n\tbackground: '+e.lightGray+';\n}\n\n/* Inline code */\n:not(pre) > code[class*="language-"] {\n\tpadding: .1em;\n\tborder-radius: '+e.borderRadius+";\n\twhite-space: normal;\n}\n\n.token.comment,\n.token.prolog,\n.token.doctype,\n.token.cdata {\n\tcolor: "+e.gray+";\n}\n\n.token.punctuation {\n\tcolor: "+e.bodyColor+";\n}\n\n.namespace {\n\topacity: .7;\n}\n\n.token.property,\n.token.tag,\n.token.constant,\n.token.symbol,\n.token.deleted {\n\tcolor: "+e.secondaryColor+";\n}\n\n.token.boolean,\n.token.number {\n\tcolor: "+e.secondaryColor+";\n}\n\n.token.selector,\n.token.attr-name,\n.token.string,\n.token.char,\n.token.builtin,\n.token.inserted {\n\tcolor: "+e.secondaryColor+";\n}\n\n.token.operator,\n.token.entity,\n.token.url,\n.language-css .token.string,\n.style .token.string,\n.token.variable {\n\tcolor: "+e.bodyColor+";\n}\n\n.token.atrule,\n.token.attr-value,\n.token.function,\n.token.class-name {\n\tcolor: "+e.secondaryColor+";\n}\n\n.token.keyword {\n\tcolor: "+e.secondaryColor+";\n}\n\n.token.regex,\n.token.important {\n\tcolor: "+e.secondaryColor+";\n}\n\n.token.important,\n.token.bold {\n\tfont-weight: bold;\n}\n.token.italic {\n\tfont-style: italic;\n}\n\n.token.entity {\n\tcursor: help;\n}\n"}(e.theme)}),v=d.c.main.withConfig({componentId:"sc-1ph75po-0"})(["background:",";a{position:relative;display:inline-block;background:transparent;color:",";font-weight:bold;text-decoration:none;>span{color:inherit;background-color:inherit;}&::after{content:'';"," "," background:",";transition:opacity ",",transform ",";opacity:0;transform:translateY(.2em);}&:hover::after{opacity:1;transform:none;}}"],function(e){return e.theme.bgColor},function(e){return e.theme.secondaryColor},Object(h.a)("absolute",null,null,"0","0"),Object(h.b)("1px","100%"),function(e){return e.theme.secondaryColor},function(e){return e.theme.defaultTransition},function(e){return e.theme.defaultTransition}),E=n(160),w=Object(E.a)(d.c.header.withConfig({componentId:"sc-116zvyz-0"})(["margin:0 auto;max-width:","px;a{text-decoration:none;}@media print{display:none;}"],function(e){return e.theme.maxWidth})),x=Object(E.a)(d.c.ul.withConfig({componentId:"sc-116zvyz-1"})(["display:block;list-style-type:none;margin:0;text-align:right;position:relative;white-space:nowrap;width:100%;&::before,&::after{content:'';display:block;background:linear-gradient( to right,transparent,",",transparent );position:absolute;","}&::before{top:0;}&::after{bottom:0;}>li{display:inline-block;margin:0;padding:1em 0;&:not(:first-child){margin-left:1em;}}a{color:",";font-family:",";font-size:14px;text-transform:uppercase;transition:color ",";&:hover,&:active{color:",";}}"],function(e){return e.theme.lightGray},Object(h.b)("1px","100%"),function(e){return e.theme.gray},function(e){return e.theme.headerFont},function(e){return e.theme.defaultTransition},function(e){return e.theme.headerColor})),C=Object(E.a)(Object(d.c)(m.Link).withConfig({componentId:"sc-116zvyz-2"})(["display:block;text-align:center;h1{display:inline-block;margin:.5em;font-weight:900;font-size:22px;letter-spacing:1px;position:relative;transition:color ",";&::after{content:'';border-radius:50%;display:block;background:",";"," ","}&:hover,&:active{color:",";}}"],function(e){return e.theme.defaultTransition},function(e){return e.theme.secondaryColor},Object(h.a)("absolute","8px","-1em",null,null),Object(h.b)("10px"),function(e){return e.theme.secondaryColor})),j=function(e){function t(){for(var t,n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(t=e.call.apply(e,[this].concat(r))||this).shouldComponentUpdate=function(){return!1},t}return o()(t,e),t.prototype.render=function(){return s.a.createElement("nav",null,s.a.createElement(w,null,s.a.createElement(C,{to:"/"},s.a.createElement("h1",null,this.props.title)),s.a.createElement(x,null,s.a.createElement("li",null,s.a.createElement(m.Link,{to:"/"},"Home")),s.a.createElement("li",null,s.a.createElement(m.Link,{to:"/tools"},"Tools")),s.a.createElement("li",null,s.a.createElement(m.Link,{to:"/about"},"About")))))},t}(c.Component);j.propTypes={title:f.string.isRequired};var q=n(162);n.d(t,"a",function(){return O});var I=d.c.div.withConfig({componentId:"grcys-0"})(["background:",";margin:1em auto;"," max-width:","px;position:relative;"],function(e){return e.theme.bgColor},Object(h.b)("100%","100vw"),function(e){return e.theme.maxWidth}),O=function(e){function t(){for(var t,n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(t=e.call.apply(e,[this].concat(r))||this).shouldComponentUpdate=function(){return!1},t}o()(t,e);var n=t.prototype;return n.componentDidMount=function(){t.fbPixelInitialized||(p.a.init("1915349895435128",{},{}),t.fbPixelInitialized=!0),p.a.pageView()},n.render=function(){var e=this.props,t=e.children,n=e.title,r=e.description;return s.a.createElement(d.a,{theme:q.a},s.a.createElement(m.StaticQuery,{query:"4226086209",render:function(e){var o=e.site.siteMetadata;return s.a.createElement(c.Fragment,null,s.a.createElement(l.a,null,s.a.createElement("html",{lang:"en",amp:!0}),s.a.createElement("title",null,n?o.title+": "+n:o.title),s.a.createElement("meta",{name:"description",content:r||o.description}),s.a.createElement("meta",{property:"og:title",content:n}),s.a.createElement("meta",{property:"og:description",content:r||o.description}),s.a.createElement("meta",{name:"twitter:card",content:"summary"}),s.a.createElement("meta",{name:"twitter:creator",content:"PEM___"}),s.a.createElement("meta",{name:"google-site-verification",content:o.googleSearchConsoleOwnershipId})),s.a.createElement(j,{title:o.title}),s.a.createElement(v,null,s.a.createElement(I,null,t({siteMetadata:o}))),s.a.createElement(k,null))},data:a}))},t}(c.Component);O.fbPixelInitialized=!1,O.propTypes={children:f.any.isRequired,description:f.string,title:f.string}},162:function(e,t,n){"use strict";t.a={bgColor:"white",bodyColor:"#333",borderRadius:"5px",defaultTransition:".3s ease-in-out",headerColor:"#181818",headerFont:"-apple-system,'BlinkMacSystemFont','Segoe UI','Roboto','Oxygen','Ubuntu','Cantarell','Fira Sans','Droid Sans','Helvetica Neue','sans-serif'",monospaceFont:"'Andale Mono', 'Ubuntu Mono', monospace",maxWidth:960,secondaryColor:"#e70808",smallFontSize:"10px",smallFontWeight:300,gray:"#7f7f7f",lightGray:"#e7e7e7",warningColor:"#f4ab55"}},163:function(e,t,n){"use strict";n.r(t);var r=n(9),o=n.n(r),a=n(0),i=n.n(a),l=n(4),c=n.n(l),s=n(48),u=n(2),p=function(e){var t=e.location,n=u.default.getResourcesForPathnameSync(t.pathname);return i.a.createElement(s.a,o()({location:t,pageResources:n},n.json))};p.propTypes={location:c.a.shape({pathname:c.a.string.isRequired}).isRequired},t.default=p},164:function(e){e.exports={data:{site:{siteMetadata:{description:"Notes and posts about development, Math, ML and AI",discussShortName:"https-pem-github-io",googleSearchConsoleOwnershipId:"IIdc-ufE7Rf_Gn8p7Ee83Ua7obcDac8tk2DLW_p87Ak",siteUrl:"https://pem--.github.io",title:"PEM's blog"}}}}},165:function(e,t,n){"use strict";n.d(t,"a",function(){return y});n(68);var r=n(6),o=n.n(r),a=n(0),i=n.n(a),l=n(152),c=n(618),s=n(619),u=n(620),p=n(621),d=n(622),m=n(623),f=n(154),h=n(4),g=l.c.div.withConfig({componentId:"sc-199atao-0"})(["display:flex;justify-content:center;margin:2em 0;position:relative;&::before,&::after{content:'';display:block;background:linear-gradient( to right,transparent,",",transparent );position:absolute;","}&::before{top:-1em;}&::after{bottom:-1em;}>*{cursor:pointer;flex:0 0 auto;outline:0;&:not(:first-of-type){margin-left:1.5em;}}@media print{display:none;}"],function(e){return e.theme.lightGray},Object(f.b)("1px","100%")),y=function(e){function t(){for(var t,n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(t=e.call.apply(e,[this].concat(r))||this).shouldComponentUpdate=function(e){var n=e.href,r=e.title;return t.props.href!==n||t.props.title!==r},t}return o()(t,e),t.prototype.render=function(){var e={url:this.props.href};return i.a.createElement(g,null,i.a.createElement(c.a,Object.assign({title:this.props.title},e),i.a.createElement(s.a,t.shareIconProps)),i.a.createElement(u.a,Object.assign({title:this.props.title},e),i.a.createElement(p.a,t.shareIconProps)),i.a.createElement(d.a,Object.assign({subject:this.props.title},e),i.a.createElement(m.a,t.shareIconProps)))},t}(a.Component);y.shareIconProps={round:!0,size:32},y.propTypes={href:h.string.isRequired,title:h.string.isRequired}},168:function(e,t,n){"use strict";var r=n(152),o=n(154);t.a=r.c.h1.withConfig({componentId:"sc-1szmnsq-0"})(["position:relative;width:calc(100% - 60px);small{color:",";display:block;font-weight:",";font-size:",";font-style:italic;"," text-align:right;width:60px;}"],function(e){return e.theme.gray},function(e){return e.theme.smallFontWeight},function(e){return e.theme.smallFontSize},Object(o.a)("absolute",null,"-60px",0,null))},173:function(e,t,n){"use strict";var r=n(204),o=n.n(r),a=n(0),i=n.n(a),l=n(195),c=n.n(l),s=n(196),u=n.n(s),p=n(152),d=n(4),m=n(6),f=n.n(m),h=n(154),g=n(159),y=p.c.span.withConfig({componentId:"sc-1rxao4w-0"})(["display:block;"," font-size:.8em;@media print{display:none;}"],Object(h.a)("absolute","-.3em",0,null,null)),b=function(e){function t(){for(var t,n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(t=e.call.apply(e,[this].concat(r))||this).shouldComponentUpdate=function(){return!1},t}return f()(t,e),t.prototype.render=function(){return i.a.createElement(y,null,i.a.createElement(g.a,{href:"https://github.com/PEM--/PEM--.github.io/tree/master/src/src/pages/blog/"+this.props.slug,text:"Contribute on Github"}))},t}(a.Component);b.propTypes={slug:d.string.isRequired};var k=n(168),v=n(161),E=(n(68),n(205),n(199)),w=n.n(E),x=n(170),C=p.c.blockquote.withConfig({componentId:"jcqrfk-0"})(["border-left:1px solid ",";margin-left:1.5em;padding-left:1em;position:relative;&::before{content:'➸';color:",";display:block;font-size:1.2em;","}"],function(e){return e.theme.lightGray},function(e){return e.theme.secondaryColor},Object(h.a)("absolute",0,null,null,"-1.5em")),j=p.c.p.withConfig({componentId:"jcqrfk-1"})(["text-align:justify;&.semiColon{margin-bottom:0;}"]),q=function(e){function t(){for(var t,n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(t=e.call.apply(e,[this].concat(r))||this).shouldComponentUpdate=function(){return!1},t}return f()(t,e),t.prototype.render=function(){var e=this.props.children&&w()(this.props.children)&&this.props.children.endsWith(":");return i.a.createElement(j,Object.assign({className:e&&"semiColon"},this.props))},t}(a.Component);q.propTypes={children:d.any};var I=function(e){function t(){for(var t,n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(t=e.call.apply(e,[this].concat(r))||this).shouldComponentUpdate=function(){return!1},t}return f()(t,e),t.prototype.render=function(){return i.a.createElement(x.MDXProvider,{components:{a:function(e){var t=e.href,n=e.children;return i.a.createElement(g.a,{href:t,text:n})},blockquote:function(e){return i.a.createElement(C,e)},p:function(e){return i.a.createElement(q,e)}}},this.props.children)},t}(a.Component);I.propTypes={children:d.any.isRequired};var O=n(165),R=p.c.div.withConfig({componentId:"ppmfas-0"})(["@media print{display:none;}"]),T=function(e){var t=e.children,n=e.location.href,r=e.pageContext.frontmatter,l={identifier:r.slug,title:r.title,url:n};return i.a.createElement(v.a,r,function(e){var s=e.siteMetadata;return i.a.createElement(a.Fragment,null,i.a.createElement(k.a,null,r.title,i.a.createElement("small",null,c()(r.date,"DD/MM/YY"))),r.contribute&&i.a.createElement(b,{slug:r.slug}),i.a.createElement(I,null,t),i.a.createElement(O.a,{href:n,title:r.title}),r.comment&&i.a.createElement(R,null,i.a.createElement(o.a.DiscussionEmbed,{config:l,shortname:s.discussShortName})))})};T.propTypes={children:d.any.isRequired,location:d.object.isRequired,pageContext:d.object.isRequired};var M=u.a.react(T);t.a=M}}]);
//# sourceMappingURL=component---src-pages-blog-python-is-not-installed-as-a-framework-index-mdx-e84cc42c560daddb50f4.js.map