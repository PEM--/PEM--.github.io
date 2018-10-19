(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{143:function(n,e,t){"use strict";t.r(e);var o=t(229),r=t.n(o),a=t(0),i=t.n(a),l=t(157),c=t(160);e.default=function(){return i.a.createElement(c.a,null,function(){return i.a.createElement(a.Fragment,null,i.a.createElement("h1",null,"404 - Not found"),i.a.createElement("p",null,i.a.createElement(r.a,{text:"This route doesn't exist 🤔"})),i.a.createElement("p",null,i.a.createElement(l.Link,{to:"/"},"Go back home")))})}},157:function(n,e,t){"use strict";t.r(e),t.d(e,"graphql",function(){return f}),t.d(e,"StaticQueryContext",function(){return p}),t.d(e,"StaticQuery",function(){return m});var o=t(0),r=t.n(o),a=t(4),i=t.n(a),l=t(155),c=t.n(l);t.d(e,"Link",function(){return c.a}),t.d(e,"withPrefix",function(){return l.withPrefix}),t.d(e,"navigate",function(){return l.navigate}),t.d(e,"push",function(){return l.push}),t.d(e,"replace",function(){return l.replace}),t.d(e,"navigateTo",function(){return l.navigateTo});var u=t(158),s=t.n(u);t.d(e,"PageRenderer",function(){return s.a});var d=t(34);t.d(e,"parsePath",function(){return d.a});var p=r.a.createContext({}),m=function(n){return r.a.createElement(p.Consumer,null,function(e){return n.data||e[n.query]&&e[n.query].data?(n.render||n.children)(n.data?n.data.data:e[n.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function f(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}m.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},158:function(n,e,t){var o;n.exports=(o=t(163))&&o.default||o},159:function(n,e,t){"use strict";var o=t(184),r=Object(o.a)(function(){return!1});e.a=r},160:function(n,e,t){"use strict";var o=t(7),r=t.n(o),a=t(164),i=t(181),l=t.n(i),c=t(0),u=t.n(c),s=t(182),d=t.n(s),p=t(154),m=t(157),f=t(4),g=t(156),h=t(170),b=t.n(h);function y(){var n=b()(["\n  html, body, #___gatsby, #___gatsby >div {\n    height: 100%;\n  }\n  div > p > .gatsby-resp-image-wrapper {\n    max-width: 100% !important;\n    .gatsby-resp-image-background-image {\n      border: 1px solid ",";\n      border-radius: ",";\n      overflow: hidden;\n    }\n  }\n  .katex-display { margin: 0 0 .5em; }\n  .katex { font: 300 1.15em KaTeX_Main, serif; }\n  ","\n  .center { text-align: center; }\n"]);return y=function(){return n},n}var k=Object(p.b)(y(),function(n){return n.theme.lightGray},function(n){return n.theme.borderRadius},function(n){return function(n){return'\ncode[class*="language-"],\npre[class*="language-"] {\n\tcolor: '+n.bodyColor+";\n\tbackground: none;\n\tfont-family: "+n.monospaceFont+';\n\ttext-align: left;\n\twhite-space: pre;\n\tword-spacing: normal;\n\tword-break: normal;\n\tword-wrap: normal;\n\tline-height: 1.5;\n\thyphens: none;\n}\n\n/* Code blocks */\npre[class*="language-"] {\n\tpadding: 1em;\n\tmargin: .5em 0;\n\toverflow: auto;\n\tborder-radius: '+n.borderRadius+";\n\tborder: 1px solid "+n.gray+';\n}\n\n:not(pre) > code[class*="language-"],\npre[class*="language-"] {\n\tbackground: '+n.lightGray+';\n}\n\n/* Inline code */\n:not(pre) > code[class*="language-"] {\n\tpadding: .1em;\n\tborder-radius: '+n.borderRadius+";\n\twhite-space: normal;\n}\n\n.token.comment,\n.token.prolog,\n.token.doctype,\n.token.cdata {\n\tcolor: "+n.gray+";\n}\n\n.token.punctuation {\n\tcolor: "+n.bodyColor+";\n}\n\n.namespace {\n\topacity: .7;\n}\n\n.token.property,\n.token.tag,\n.token.constant,\n.token.symbol,\n.token.deleted {\n\tcolor: "+n.secondaryColor+";\n}\n\n.token.boolean,\n.token.number {\n\tcolor: "+n.secondaryColor+";\n}\n\n.token.selector,\n.token.attr-name,\n.token.string,\n.token.char,\n.token.builtin,\n.token.inserted {\n\tcolor: "+n.secondaryColor+";\n}\n\n.token.operator,\n.token.entity,\n.token.url,\n.language-css .token.string,\n.style .token.string,\n.token.variable {\n\tcolor: "+n.bodyColor+";\n}\n\n.token.atrule,\n.token.attr-value,\n.token.function,\n.token.class-name {\n\tcolor: "+n.secondaryColor+";\n}\n\n.token.keyword {\n\tcolor: "+n.secondaryColor+";\n}\n\n.token.regex,\n.token.important {\n\tcolor: "+n.secondaryColor+";\n}\n\n.token.important,\n.token.bold {\n\tfont-weight: bold;\n}\n.token.italic {\n\tfont-style: italic;\n}\n\n.token.entity {\n\tcursor: help;\n}\n"}(n.theme)}),v=p.c.main.withConfig({componentId:"sc-1ph75po-0"})(["background:",";a{position:relative;display:inline-block;background:transparent;color:",";font-weight:bold;text-decoration:none;>span{color:inherit;background-color:inherit;}&::after{content:'';"," "," background:",";transition:opacity ",",transform ",";opacity:0;transform:translateY(.2em);}&:hover::after{opacity:1;transform:none;}}"],function(n){return n.theme.bgColor},function(n){return n.theme.secondaryColor},Object(g.a)("absolute",null,null,"0","0"),Object(g.b)("1px","100%"),function(n){return n.theme.secondaryColor},function(n){return n.theme.defaultTransition},function(n){return n.theme.defaultTransition}),w=t(159),x=Object(w.a)(p.c.header.withConfig({componentId:"sc-116zvyz-0"})(["margin:0 auto;max-width:","px;a{text-decoration:none;}@media print{display:none;}"],function(n){return n.theme.maxWidth})),E=Object(w.a)(p.c.ul.withConfig({componentId:"sc-116zvyz-1"})(["display:block;list-style-type:none;margin:0;text-align:right;position:relative;white-space:nowrap;width:100%;&::before,&::after{content:'';display:block;background:linear-gradient( to right,transparent,",",transparent );position:absolute;","}&::before{top:0;}&::after{bottom:0;}>li{display:inline-block;margin:0;padding:1em 0;&:not(:first-child){margin-left:1em;}}a{color:",";font-family:",";font-size:14px;text-transform:uppercase;transition:color ",";&:hover,&:active{color:",";}}"],function(n){return n.theme.lightGray},Object(g.b)("1px","100%"),function(n){return n.theme.gray},function(n){return n.theme.headerFont},function(n){return n.theme.defaultTransition},function(n){return n.theme.headerColor})),C=Object(w.a)(Object(p.c)(m.Link).withConfig({componentId:"sc-116zvyz-2"})(["display:block;text-align:center;h1{display:inline-block;margin:.5em;font-weight:900;font-size:22px;letter-spacing:1px;position:relative;transition:color ",";&::after{content:'';border-radius:50%;display:block;background:",";"," ","}&:hover,&:active{color:",";}}"],function(n){return n.theme.defaultTransition},function(n){return n.theme.secondaryColor},Object(g.a)("absolute","8px","-1em",null,null),Object(g.b)("10px"),function(n){return n.theme.secondaryColor})),I=function(n){function e(){for(var e,t=arguments.length,o=new Array(t),r=0;r<t;r++)o[r]=arguments[r];return(e=n.call.apply(n,[this].concat(o))||this).shouldComponentUpdate=function(){return!1},e}return r()(e,n),e.prototype.render=function(){return u.a.createElement("nav",null,u.a.createElement(x,null,u.a.createElement(C,{to:"/"},u.a.createElement("h1",null,this.props.title)),u.a.createElement(E,null,u.a.createElement("li",null,u.a.createElement(m.Link,{to:"/"},"Home")),u.a.createElement("li",null,u.a.createElement(m.Link,{to:"/tools"},"Tools")),u.a.createElement("li",null,u.a.createElement(m.Link,{to:"/about"},"About")))))},e}(c.Component);I.propTypes={title:f.string.isRequired};var O=t(161);t.d(e,"a",function(){return R});var j=p.c.div.withConfig({componentId:"grcys-0"})(["background:",";margin:1em auto;"," max-width:","px;position:relative;"],function(n){return n.theme.bgColor},Object(g.b)("100%","100vw"),function(n){return n.theme.maxWidth}),R=function(n){function e(){for(var e,t=arguments.length,o=new Array(t),r=0;r<t;r++)o[r]=arguments[r];return(e=n.call.apply(n,[this].concat(o))||this).shouldComponentUpdate=function(){return!1},e}r()(e,n);var t=e.prototype;return t.componentDidMount=function(){e.fbPixelInitialized||(d.a.init("1915349895435128",{},{}),e.fbPixelInitialized=!0),d.a.pageView()},t.render=function(){var n=this.props,e=n.children,t=n.title,o=n.description;return u.a.createElement(p.a,{theme:O.a},u.a.createElement(m.StaticQuery,{query:"4226086209",render:function(n){var r=n.site.siteMetadata;return u.a.createElement(c.Fragment,null,u.a.createElement(l.a,null,u.a.createElement("html",{lang:"en",amp:!0}),u.a.createElement("title",null,t?r.title+": "+t:r.title),u.a.createElement("meta",{name:"description",content:o||r.description}),u.a.createElement("meta",{property:"og:title",content:t}),u.a.createElement("meta",{property:"og:description",content:o||r.description}),u.a.createElement("meta",{name:"twitter:card",content:"summary"}),u.a.createElement("meta",{name:"twitter:creator",content:"PEM___"}),u.a.createElement("meta",{name:"google-site-verification",content:r.googleSearchConsoleOwnershipId})),u.a.createElement(I,{title:r.title}),u.a.createElement(v,null,u.a.createElement(j,null,e({siteMetadata:r}))),u.a.createElement(k,null))},data:a}))},e}(c.Component);R.fbPixelInitialized=!1,R.propTypes={children:f.any.isRequired,description:f.string,title:f.string}},161:function(n,e,t){"use strict";e.a={bgColor:"white",bodyColor:"#333",borderRadius:"5px",defaultTransition:".3s ease-in-out",headerColor:"#181818",headerFont:"-apple-system,'BlinkMacSystemFont','Segoe UI','Roboto','Oxygen','Ubuntu','Cantarell','Fira Sans','Droid Sans','Helvetica Neue','sans-serif'",monospaceFont:"'Andale Mono', 'Ubuntu Mono', monospace",maxWidth:960,secondaryColor:"#e70808",smallFontSize:"10px",smallFontWeight:300,gray:"#7f7f7f",lightGray:"#e7e7e7",warningColor:"#f4ab55"}},163:function(n,e,t){"use strict";t.r(e);var o=t(10),r=t.n(o),a=t(0),i=t.n(a),l=t(4),c=t.n(l),u=t(49),s=t(2),d=function(n){var e=n.location,t=s.default.getResourcesForPathnameSync(e.pathname);return i.a.createElement(u.a,r()({location:e,pageResources:t},t.json))};d.propTypes={location:c.a.shape({pathname:c.a.string.isRequired}).isRequired},e.default=d},164:function(n){n.exports={data:{site:{siteMetadata:{description:"Notes and posts about development, Math, ML and AI",discussShortName:"https-pem-github-io",googleSearchConsoleOwnershipId:"IIdc-ufE7Rf_Gn8p7Ee83Ua7obcDac8tk2DLW_p87Ak",siteUrl:"https://pem--.github.io",title:"PEM's blog"}}}}}}]);
//# sourceMappingURL=component---src-pages-404-js-c12f92d6e0d50e9272d1.js.map