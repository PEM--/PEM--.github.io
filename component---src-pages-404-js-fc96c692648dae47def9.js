(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{146:function(n,e,t){"use strict";t.r(e);var o=t(211),r=t.n(o),a=t(0),i=t.n(a),l=t(157),c=t(159);e.default=function(){return i.a.createElement(c.a,null,function(){return i.a.createElement(a.Fragment,null,i.a.createElement("h1",null,"404 - Not found"),i.a.createElement("p",null,i.a.createElement(r.a,{text:"This route doesn't exist 🤔"})),i.a.createElement("p",null,i.a.createElement(l.Link,{to:"/"},"Go back home")))})}},157:function(n,e,t){"use strict";t.r(e),t.d(e,"graphql",function(){return g}),t.d(e,"StaticQueryContext",function(){return p}),t.d(e,"StaticQuery",function(){return f});var o=t(0),r=t.n(o),a=t(4),i=t.n(a),l=t(155),c=t.n(l);t.d(e,"Link",function(){return c.a}),t.d(e,"withPrefix",function(){return l.withPrefix}),t.d(e,"navigate",function(){return l.navigate}),t.d(e,"push",function(){return l.push}),t.d(e,"replace",function(){return l.replace}),t.d(e,"navigateTo",function(){return l.navigateTo});var u=t(28);t.d(e,"waitForRouteChange",function(){return u.c});var s=t(158),d=t.n(s);t.d(e,"PageRenderer",function(){return d.a});var m=t(39);t.d(e,"parsePath",function(){return m.a});var p=r.a.createContext({}),f=function(n){return r.a.createElement(p.Consumer,null,function(e){return n.data||e[n.query]&&e[n.query].data?(n.render||n.children)(n.data?n.data.data:e[n.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function g(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}f.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},158:function(n,e,t){var o;n.exports=(o=t(160))&&o.default||o},159:function(n,e,t){"use strict";var o=t(161),r=t(0),a=t.n(r),i=t(171),l=t.n(i),c=t(154),u=t(157),s=t(4),d=t(156),m=t(163),p=t.n(m);function f(){var n=p()(["\n  html, body, #___gatsby, #___gatsby >div {\n    height: 100%;\n  }\n  div > p > .gatsby-resp-image-link {\n    pointer-events: none;\n    .gatsby-resp-image-wrapper {\n      border: 1px solid ",";\n      border-radius: ",";\n      max-width: 100% !important;\n      overflow: hidden;\n    }\n  }\n  .katex-display { margin: 0 0 .5em; }\n  .katex { font: 300 1.15em KaTeX_Main, serif; }\n  ","\n  .center { text-align: center; }\n"]);return f=function(){return n},n}var g=Object(c.b)(f(),function(n){return n.theme.lightGray},function(n){return n.theme.borderRadius},function(n){return function(n){return'\ncode[class*="language-"],\npre[class*="language-"] {\n\tcolor: '+n.bodyColor+";\n\tbackground: none;\n\tfont-family: "+n.monospaceFont+';\n\ttext-align: left;\n\twhite-space: pre;\n\tword-spacing: normal;\n\tword-break: normal;\n\tword-wrap: normal;\n\tline-height: 1.5;\n\thyphens: none;\n}\n\n/* Code blocks */\npre[class*="language-"] {\n\tpadding: 1em;\n\tmargin: .5em 0;\n\toverflow: auto;\n\tborder-radius: '+n.borderRadius+";\n\tborder: 1px solid "+n.gray+';\n}\n\n:not(pre) > code[class*="language-"],\npre[class*="language-"] {\n\tbackground: '+n.lightGray+';\n}\n\n/* Inline code */\n:not(pre) > code[class*="language-"] {\n\tpadding: .1em;\n\tborder-radius: '+n.borderRadius+";\n\twhite-space: normal;\n}\n\n.token.comment,\n.token.prolog,\n.token.doctype,\n.token.cdata {\n\tcolor: "+n.gray+";\n}\n\n.token.punctuation {\n\tcolor: "+n.bodyColor+";\n}\n\n.namespace {\n\topacity: .7;\n}\n\n.token.property,\n.token.tag,\n.token.constant,\n.token.symbol,\n.token.deleted {\n\tcolor: "+n.secondaryColor+";\n}\n\n.token.boolean,\n.token.number {\n\tcolor: "+n.secondaryColor+";\n}\n\n.token.selector,\n.token.attr-name,\n.token.string,\n.token.char,\n.token.builtin,\n.token.inserted {\n\tcolor: "+n.secondaryColor+";\n}\n\n.token.operator,\n.token.entity,\n.token.url,\n.language-css .token.string,\n.style .token.string,\n.token.variable {\n\tcolor: "+n.bodyColor+";\n}\n\n.token.atrule,\n.token.attr-value,\n.token.function,\n.token.class-name {\n\tcolor: "+n.secondaryColor+";\n}\n\n.token.keyword {\n\tcolor: "+n.secondaryColor+";\n}\n\n.token.regex,\n.token.important {\n\tcolor: "+n.secondaryColor+";\n}\n\n.token.important,\n.token.bold {\n\tfont-weight: bold;\n}\n.token.italic {\n\tfont-style: italic;\n}\n\n.token.entity {\n\tcursor: help;\n}\n"}(n.theme)}),h=c.c.main.withConfig({componentId:"sc-1ph75po-0"})(["background:",";a{position:relative;display:inline-block;background:transparent;color:",";font-weight:bold;text-decoration:none;>span{color:inherit;background-color:inherit;}&::after{content:'';"," "," background:",";transition:opacity ",",transform ",";opacity:0;transform:translateY(.2em);}&:hover::after{opacity:1;transform:none;}}"],function(n){return n.theme.bgColor},function(n){return n.theme.secondaryColor},Object(d.a)("absolute",null,null,"0","0"),Object(d.b)("1px","100%"),function(n){return n.theme.secondaryColor},function(n){return n.theme.defaultTransition},function(n){return n.theme.defaultTransition}),y=t(8),b=t.n(y),k=c.c.header.withConfig({componentId:"sc-116zvyz-0"})(["margin:0 auto;max-width:","px;a{text-decoration:none;}"],function(n){return n.theme.maxWidth}),v=c.c.ul.withConfig({componentId:"sc-116zvyz-1"})(["display:block;list-style-type:none;margin:0;text-align:right;position:relative;white-space:nowrap;width:100%;&::before,&::after{content:'';display:block;background:linear-gradient( to right,transparent,",",transparent );position:absolute;","}&::before{top:0;}&::after{bottom:0;}>li{display:inline-block;margin:0;padding:1em 0;&:not(:first-child){margin-left:1em;}}a{color:",";font-family:",";font-size:14px;text-transform:uppercase;transition:color ",";&:hover,&:active{color:",";}}"],function(n){return n.theme.lightGray},Object(d.b)("1px","100%"),function(n){return n.theme.gray},function(n){return n.theme.headerFont},function(n){return n.theme.defaultTransition},function(n){return n.theme.headerColor}),w=Object(c.c)(u.Link).withConfig({componentId:"sc-116zvyz-2"})(["display:block;text-align:center;h1{display:inline-block;margin:.5em;font-weight:900;font-size:22px;letter-spacing:1px;position:relative;transition:color ",";&::after{content:'';border-radius:50%;display:block;background:",";"," ","}&:hover,&:active{color:",";}}"],function(n){return n.theme.defaultTransition},function(n){return n.theme.secondaryColor},Object(d.a)("absolute","8px","-1em",null,null),Object(d.b)("10px"),function(n){return n.theme.secondaryColor}),x=function(n){function e(){for(var e,t=arguments.length,o=new Array(t),r=0;r<t;r++)o[r]=arguments[r];return(e=n.call.apply(n,[this].concat(o))||this).shouldComponentUpdate=function(){return!1},e}return b()(e,n),e.prototype.render=function(){return a.a.createElement("nav",null,a.a.createElement(k,null,a.a.createElement(w,{to:"/"},a.a.createElement("h1",null,this.props.title)),a.a.createElement(v,null,a.a.createElement("li",null,a.a.createElement(u.Link,{to:"/"},"Home")),a.a.createElement("li",null,a.a.createElement(u.Link,{to:"/tools"},"Tools")),a.a.createElement("li",null,a.a.createElement(u.Link,{to:"/about"},"About")))))},e}(r.Component);x.propTypes={title:s.string.isRequired};var E={bgColor:"white",bodyColor:"#333",borderRadius:"5px",defaultTransition:".3s ease-in-out",headerColor:"#181818",headerFont:"-apple-system,'BlinkMacSystemFont','Segoe UI','Roboto','Oxygen','Ubuntu','Cantarell','Fira Sans','Droid Sans','Helvetica Neue','sans-serif'",monospaceFont:"'Andale Mono', 'Ubuntu Mono', monospace",maxWidth:960,secondaryColor:"#e70808",smallFontSize:"10px",smallFontWeight:300,gray:"#7f7f7f",lightGray:"#e7e7e7",warningColor:"#f4ab55"};t.d(e,"a",function(){return R});var C=c.c.div.withConfig({componentId:"grcys-0"})(["background:",";margin:1em auto;"," max-width:","px;position:relative;"],function(n){return n.theme.bgColor},Object(d.b)("100%","100vw"),function(n){return n.theme.maxWidth});function R(n){var e=n.children,t=n.title,i=n.description;return a.a.createElement(c.a,{theme:E},a.a.createElement(u.StaticQuery,{query:"1327357206",render:function(n){var o=n.site.siteMetadata;return a.a.createElement(r.Fragment,null,a.a.createElement(l.a,null,a.a.createElement("html",{lang:"en",amp:!0}),a.a.createElement("title",null,t?o.title+": "+t:o.title),a.a.createElement("meta",{name:"description",content:i||o.description}),a.a.createElement("meta",{property:"og:title",content:t}),a.a.createElement("meta",{property:"og:description",content:i||o.description}),a.a.createElement("meta",{name:"twitter:card",content:"summary"}),a.a.createElement("meta",{name:"twitter:creator",content:"PEM___"})),a.a.createElement(x,{title:o.title}),a.a.createElement(h,null,a.a.createElement(C,null,e({siteMetadata:o}))),a.a.createElement(g,null))},data:o}))}R.propTypes={children:s.any.isRequired,description:s.string,title:s.string}},160:function(n,e,t){"use strict";t.r(e);var o=t(11),r=t.n(o),a=t(0),i=t.n(a),l=t(4),c=t.n(l),u=t(53),s=t(1),d=function(n){var e=n.location,t=s.default.getResourcesForPathnameSync(e.pathname);return i.a.createElement(u.a,r()({location:e,pageResources:t},t.json))};d.propTypes={location:c.a.shape({pathname:c.a.string.isRequired}).isRequired},e.default=d},161:function(n){n.exports={data:{site:{siteMetadata:{description:"Notes and posts about development, Math, ML and AI",discussShortName:"https-pem-github-io",siteUrl:"https://pem--.github.io",title:"PEM's blog"}}}}}}]);
//# sourceMappingURL=component---src-pages-404-js-fc96c692648dae47def9.js.map