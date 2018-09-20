(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{151:function(e,t,n){"use strict";n.r(t);var r=n(191),a=n.n(r),o=n(0),i=n.n(o),l=n(177),c=n(166),s=n(169),u=function(e){return i.a.createElement("li",null,i.a.createElement(l.a,e))};t.default=function(){return i.a.createElement(c.a,{title:"About"},function(e){var t=e.siteMetadata;return i.a.createElement(o.Fragment,null,i.a.createElement("h1",null,"About this blog"),i.a.createElement("p",null,"This blog has been created with:"),i.a.createElement("ul",null,i.a.createElement(u,{href:"https://www.gatsbyjs.org/",text:"Gatsby v2"}),i.a.createElement(u,{href:"https://graphql.org/",text:"GraphQL"}),i.a.createElement(u,{href:"https://mdxjs.com/",text:"MDX"}),i.a.createElement(u,{href:"https://reactjs.org/",text:"React"}),i.a.createElement(u,{href:"https://www.styled-components.com/",text:"Styled Components"}),i.a.createElement("li",null,i.a.createElement(a.a,{text:"... to name a few. Thank you all for sharing such massive technologies :+1:"}))),i.a.createElement("p",null,"All its source code is released under the MIT license and available in this ",i.a.createElement(l.a,{href:"https://github.com/PEM--/PEM--.github.io/tree/master/src",text:"Github repository"}),". Feel free to adapt it to suit your need."),i.a.createElement("h1",null,"About me"),i.a.createElement("p",null,"You can find me on my  ",i.a.createElement(l.a,{href:"https://www.linkedin.com/in/pemarchandet/",text:"LinkedIn's profile"}),"  or on ",i.a.createElement(l.a,{href:"https://twitter.com/PEM___",text:"Twitter"}),"."),i.a.createElement(s.a,{href:t.siteUrl,title:t.title}))})}},160:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return f}),n.d(t,"StaticQueryContext",function(){return m}),n.d(t,"StaticQuery",function(){return h});var r=n(0),a=n.n(r),o=n(4),i=n.n(o),l=n(158),c=n.n(l);n.d(t,"Link",function(){return c.a}),n.d(t,"withPrefix",function(){return l.withPrefix}),n.d(t,"navigate",function(){return l.navigate}),n.d(t,"push",function(){return l.push}),n.d(t,"replace",function(){return l.replace}),n.d(t,"navigateTo",function(){return l.navigateTo});var s=n(28);n.d(t,"waitForRouteChange",function(){return s.c});var u=n(163),p=n.n(u);n.d(t,"PageRenderer",function(){return p.a});var d=n(39);n.d(t,"parsePath",function(){return d.a});var m=a.a.createContext({}),h=function(e){return a.a.createElement(m.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):a.a.createElement("div",null,"Loading (StaticQuery)")})};function f(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}h.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},163:function(e,t,n){var r;e.exports=(r=n(167))&&r.default||r},166:function(e,t,n){"use strict";var r=n(168),a=n(0),o=n.n(a),i=n(176),l=n.n(i),c=n(157),s=n(160),u=n(4),p=n(159),d=n(162),m=n.n(d);function h(){var e=m()(["\n  html, body, #___gatsby, #___gatsby>div {\n    height: 100%;\n  }\n  div > p > .gatsby-resp-image-link {\n    pointer-events: none;\n    .gatsby-resp-image-wrapper {\n      border: 1px solid ",";\n      border-radius: ",";\n      max-width: 100% !important;\n      overflow: hidden;\n    }\n  }\n  .katex-display { margin: 0 0 .5em; }\n  .katex { font: 300 1.15em KaTeX_Main, serif; }\n  ","\n  .center { text-align: center; }\n"]);return h=function(){return e},e}var f=Object(c.b)(h(),function(e){return e.theme.lightGray},function(e){return e.theme.borderRadius},function(e){return function(e){return'\ncode[class*="language-"],\npre[class*="language-"] {\n\tcolor: '+e.bodyColor+";\n\tbackground: none;\n\tfont-family: "+e.monoSpaceFont+';\n\ttext-align: left;\n\twhite-space: pre;\n\tword-spacing: normal;\n\tword-break: normal;\n\tword-wrap: normal;\n\tline-height: 1.5;\n\thyphens: none;\n}\n\n/* Code blocks */\npre[class*="language-"] {\n\tpadding: 1em;\n\tmargin: .5em 0;\n\toverflow: auto;\n\tborder-radius: '+e.borderRadius+";\n\tborder: 1px solid "+e.gray+';\n}\n\n:not(pre) > code[class*="language-"],\npre[class*="language-"] {\n\tbackground: '+e.lightGray+';\n}\n\n/* Inline code */\n:not(pre) > code[class*="language-"] {\n\tpadding: .1em;\n\tborder-radius: '+e.borderRadius+";\n\twhite-space: normal;\n}\n\n.token.comment,\n.token.prolog,\n.token.doctype,\n.token.cdata {\n\tcolor: "+e.gray+";\n}\n\n.token.punctuation {\n\tcolor: "+e.bodyColor+";\n}\n\n.namespace {\n\topacity: .7;\n}\n\n.token.property,\n.token.tag,\n.token.constant,\n.token.symbol,\n.token.deleted {\n\tcolor: "+e.secondaryColor+";\n}\n\n.token.boolean,\n.token.number {\n\tcolor: "+e.secondaryColor+";\n}\n\n.token.selector,\n.token.attr-name,\n.token.string,\n.token.char,\n.token.builtin,\n.token.inserted {\n\tcolor: "+e.secondaryColor+";\n}\n\n.token.operator,\n.token.entity,\n.token.url,\n.language-css .token.string,\n.style .token.string,\n.token.variable {\n\tcolor: "+e.bodyColor+";\n}\n\n.token.atrule,\n.token.attr-value,\n.token.function,\n.token.class-name {\n\tcolor: "+e.secondaryColor+";\n}\n\n.token.keyword {\n\tcolor: "+e.secondaryColor+";\n}\n\n.token.regex,\n.token.important {\n\tcolor: "+e.secondaryColor+";\n}\n\n.token.important,\n.token.bold {\n\tfont-weight: bold;\n}\n.token.italic {\n\tfont-style: italic;\n}\n\n.token.entity {\n\tcursor: help;\n}\n"}(e.theme)}),g=c.c.main.withConfig({componentId:"sc-1ph75po-0"})(["background:",";a{position:relative;display:inline-block;background:transparent;color:",";font-weight:bold;text-decoration:none;>span{color:inherit;background-color:inherit;}&::after{content:'';"," "," background:",";transition:opacity ",",transform ",";opacity:0;transform:translateY(.2em);}&:hover::after{opacity:1;transform:none;}}"],function(e){return e.theme.bgColor},function(e){return e.theme.secondaryColor},Object(p.a)("absolute",null,null,"0","0"),Object(p.b)("1px","100%"),function(e){return e.theme.secondaryColor},function(e){return e.theme.defaultTransition},function(e){return e.theme.defaultTransition}),b=n(8),y=n.n(b),k=c.c.header.withConfig({componentId:"sc-116zvyz-0"})(["margin:0 auto;max-width:","px;a{text-decoration:none;}"],function(e){return e.theme.maxWidth}),E=c.c.ul.withConfig({componentId:"sc-116zvyz-1"})(["display:block;list-style-type:none;margin:0;text-align:right;position:relative;white-space:nowrap;width:100%;&::before,&::after{content:'';display:block;background:linear-gradient( to right,transparent,",",transparent );position:absolute;","}&::before{top:0;}&::after{bottom:0;}>li{display:inline-block;margin:0;padding:1em 0;&:not(:first-child){margin-left:1em;}}a{color:",";font-family:",";font-size:14px;text-transform:uppercase;transition:color ",";&:hover,&:active{color:",";}}"],function(e){return e.theme.lightGray},Object(p.b)("1px","100%"),function(e){return e.theme.gray},function(e){return e.theme.headerFont},function(e){return e.theme.defaultTransition},function(e){return e.theme.headerColor}),w=Object(c.c)(s.Link).withConfig({componentId:"sc-116zvyz-2"})(["display:block;text-align:center;h1{display:inline-block;margin:.5em;font-weight:900;font-size:22px;letter-spacing:1px;position:relative;transition:color ",";&::after{content:'';border-radius:50%;display:block;background:",";"," ","}&:hover,&:active{color:",";}}"],function(e){return e.theme.defaultTransition},function(e){return e.theme.secondaryColor},Object(p.a)("absolute","8px","-1em",null,null),Object(p.b)("10px"),function(e){return e.theme.secondaryColor}),v=function(e){function t(){for(var t,n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return(t=e.call.apply(e,[this].concat(r))||this).shouldComponentUpdate=function(){return!1},t}return y()(t,e),t.prototype.render=function(){return o.a.createElement("nav",null,o.a.createElement(k,null,o.a.createElement(w,{to:"/"},o.a.createElement("h1",null,this.props.title)),o.a.createElement(E,null,o.a.createElement("li",null,o.a.createElement(s.Link,{to:"/"},"Home")),o.a.createElement("li",null,o.a.createElement(s.Link,{to:"/tools"},"Tools")),o.a.createElement("li",null,o.a.createElement(s.Link,{to:"/about"},"About")))))},t}(a.Component);v.propTypes={title:u.string.isRequired};var x={bgColor:"white",bodyColor:"#333",borderRadius:"5px",defaultTransition:".3s ease-in-out",headerColor:"#181818",headerFont:"-apple-system,'BlinkMacSystemFont','Segoe UI','Roboto','Oxygen','Ubuntu','Cantarell','Fira Sans','Droid Sans','Helvetica Neue','sans-serif'",monoSpaceFont:"'Andale Mono', 'Ubuntu Mono', monospace",maxWidth:960,secondaryColor:"#e70808",smallFontSize:"10px",smallFontWeight:300,gray:"#7f7f7f",lightGray:"#e7e7e7",warningColor:"#f4ab55"};n.d(t,"a",function(){return j});var C=c.c.div.withConfig({componentId:"grcys-0"})(["background:",";margin:1em auto;"," max-width:","px;position:relative;"],function(e){return e.theme.bgColor},Object(p.b)("100%","100vw"),function(e){return e.theme.maxWidth});function j(e){var t=e.children,n=e.title,i=e.description;return o.a.createElement(c.a,{theme:x},o.a.createElement(s.StaticQuery,{query:"1327357206",render:function(e){var r=e.site.siteMetadata;return o.a.createElement(a.Fragment,null,o.a.createElement(l.a,null,o.a.createElement("html",{lang:"en",amp:!0}),o.a.createElement("title",null,n?r.title+": "+n:r.title),o.a.createElement("meta",{name:"description",content:i||r.description}),o.a.createElement("meta",{property:"og:title",content:n}),o.a.createElement("meta",{property:"og:description",content:i||r.description}),o.a.createElement("meta",{name:"twitter:card",content:"summary"}),o.a.createElement("meta",{name:"twitter:creator",content:"PEM___"})),o.a.createElement(v,{title:r.title}),o.a.createElement(g,null,o.a.createElement(C,null,t({siteMetadata:r}))),o.a.createElement(f,null))},data:r}))}j.propTypes={children:u.any.isRequired,description:u.string,title:u.string}},167:function(e,t,n){"use strict";n.r(t);var r=n(11),a=n.n(r),o=n(0),i=n.n(o),l=n(4),c=n.n(l),s=n(53),u=n(1),p=function(e){var t=e.location,n=u.default.getResourcesForPathnameSync(t.pathname);return i.a.createElement(s.a,a()({location:t,pageResources:n},n.json))};p.propTypes={location:c.a.shape({pathname:c.a.string.isRequired}).isRequired},t.default=p},168:function(e){e.exports={data:{site:{siteMetadata:{description:"Notes and posts about development, Math, ML and AI",discussShortName:"https-pem-github-io",siteUrl:"https://pem--.github.io",title:"PEM's blog"}}}}},169:function(e,t,n){"use strict";n.d(t,"a",function(){return b});n(79);var r=n(8),a=n.n(r),o=n(0),i=n.n(o),l=n(157),c=n(350),s=n(351),u=n(352),p=n(353),d=n(354),m=n(355),h=n(159),f=n(4),g=l.c.div.withConfig({componentId:"sc-199atao-0"})(["display:flex;justify-content:center;margin:2em 0;position:relative;&::before,&::after{content:'';display:block;background:linear-gradient( to right,transparent,",",transparent );position:absolute;","}&::before{top:-1em;}&::after{bottom:-1em;}>*{cursor:pointer;flex:0 0 auto;outline:0;&:not(:first-of-type){margin-left:1.5em;}}"],function(e){return e.theme.lightGray},Object(h.b)("1px","100%")),b=function(e){function t(){for(var t,n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return(t=e.call.apply(e,[this].concat(r))||this).shouldComponentUpdate=function(e){var n=e.href,r=e.title;return t.props.href!==n||t.props.title!==r},t}return a()(t,e),t.prototype.render=function(){var e={url:this.props.href};return i.a.createElement(g,null,i.a.createElement(c.a,Object.assign({title:this.props.title},e),i.a.createElement(s.a,t.shareIconProps)),i.a.createElement(u.a,Object.assign({title:this.props.title},e),i.a.createElement(p.a,t.shareIconProps)),i.a.createElement(d.a,Object.assign({subject:this.props.title},e),i.a.createElement(m.a,t.shareIconProps)))},t}(o.Component);b.shareIconProps={round:!0,size:32},b.propTypes={href:f.string.isRequired,title:f.string.isRequired}},177:function(e,t,n){"use strict";n.d(t,"a",function(){return c});var r=n(8),a=n.n(r),o=n(0),i=n.n(o),l=n(4),c=function(e){function t(){for(var t,n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return(t=e.call.apply(e,[this].concat(r))||this).shouldComponentUpdate=function(){return!1},t}return a()(t,e),t.prototype.render=function(){return i.a.createElement("a",{href:this.props.href,target:"_blank",rel:"noreferrer noopener"},this.props.text)},t}(o.Component);c.propTypes={href:l.string.isRequired,text:l.string.isRequired}}}]);
//# sourceMappingURL=component---src-pages-about-js-c257a081271763c081ef.js.map