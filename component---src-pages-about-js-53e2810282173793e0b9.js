(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{144:function(e,t,n){"use strict";n.r(t);var r=n(232),a=n.n(r),o=n(0),i=n.n(o),l=n(164),c=n(162),s=n(168),u=function(e){return i.a.createElement("li",null,i.a.createElement(l.a,e))};t.default=function(){return i.a.createElement(c.a,{title:"About"},function(e){var t=e.siteMetadata;return i.a.createElement(o.Fragment,null,i.a.createElement("h1",null,"About this blog"),i.a.createElement("p",null,"This blog has been created with:"),i.a.createElement("ul",null,i.a.createElement(u,{href:"https://www.gatsbyjs.org/",text:"Gatsby v2"}),i.a.createElement(u,{href:"https://graphql.org/",text:"GraphQL"}),i.a.createElement(u,{href:"https://mdxjs.com/",text:"MDX"}),i.a.createElement(u,{href:"https://reactjs.org/",text:"React"}),i.a.createElement(u,{href:"https://www.styled-components.com/",text:"Styled Components"}),i.a.createElement("li",null,i.a.createElement(a.a,{text:"... to name a few. Thank you all for sharing such massive technologies :+1:"}))),i.a.createElement("p",null,"All its source code is released under the MIT license and available in this ",i.a.createElement(l.a,{href:"https://github.com/PEM--/PEM--.github.io/tree/master/src",text:"Github repository"}),". Feel free to adapt it to suit your need."),i.a.createElement("h1",null,"About me"),i.a.createElement("p",null,"You can find me on my  ",i.a.createElement(l.a,{href:"https://www.linkedin.com/in/pemarchandet/",text:"LinkedIn's profile"}),"  or on ",i.a.createElement(l.a,{href:"https://twitter.com/PEM___",text:"Twitter"}),"."),i.a.createElement(s.a,{href:t.siteUrl,title:t.title}))})}},158:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return h}),n.d(t,"StaticQueryContext",function(){return d}),n.d(t,"StaticQuery",function(){return m});var r=n(0),a=n.n(r),o=n(4),i=n.n(o),l=n(156),c=n.n(l);n.d(t,"Link",function(){return c.a}),n.d(t,"withPrefix",function(){return l.withPrefix}),n.d(t,"navigate",function(){return l.navigate}),n.d(t,"push",function(){return l.push}),n.d(t,"replace",function(){return l.replace}),n.d(t,"navigateTo",function(){return l.navigateTo});var s=n(159),u=n.n(s);n.d(t,"PageRenderer",function(){return u.a});var p=n(34);n.d(t,"parsePath",function(){return p.a});var d=a.a.createContext({}),m=function(e){return a.a.createElement(d.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):a.a.createElement("div",null,"Loading (StaticQuery)")})};function h(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}m.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},159:function(e,t,n){var r;e.exports=(r=n(166))&&r.default||r},160:function(e,t,n){"use strict";var r=n(189),a=Object(r.a)(function(){return!1});t.a=a},162:function(e,t,n){"use strict";var r=n(7),a=n.n(r),o=n(167),i=n(183),l=n.n(i),c=n(0),s=n.n(c),u=n(184),p=n.n(u),d=n(155),m=n(158),h=n(4),f=n(157),g=n(174),b=n.n(g);function y(){var e=b()(["\n  html, body, #___gatsby, #___gatsby >div {\n    height: 100%;\n  }\n  div > p > .gatsby-resp-image-wrapper {\n    max-width: 100% !important;\n    .gatsby-resp-image-background-image {\n      border: 1px solid ",";\n      border-radius: ",";\n      overflow: hidden;\n    }\n  }\n  .katex-display { margin: 0 0 .5em; }\n  .katex { font: 300 1.15em KaTeX_Main, serif; }\n  ","\n  .center { text-align: center; }\n"]);return y=function(){return e},e}var k=Object(d.b)(y(),function(e){return e.theme.lightGray},function(e){return e.theme.borderRadius},function(e){return function(e){return'\ncode[class*="language-"],\npre[class*="language-"] {\n\tcolor: '+e.bodyColor+";\n\tbackground: none;\n\tfont-family: "+e.monospaceFont+';\n\ttext-align: left;\n\twhite-space: pre;\n\tword-spacing: normal;\n\tword-break: normal;\n\tword-wrap: normal;\n\tline-height: 1.5;\n\thyphens: none;\n}\n\n/* Code blocks */\npre[class*="language-"] {\n\tpadding: 1em;\n\tmargin: .5em 0;\n\toverflow: auto;\n\tborder-radius: '+e.borderRadius+";\n\tborder: 1px solid "+e.gray+';\n}\n\n:not(pre) > code[class*="language-"],\npre[class*="language-"] {\n\tbackground: '+e.lightGray+';\n}\n\n/* Inline code */\n:not(pre) > code[class*="language-"] {\n\tpadding: .1em;\n\tborder-radius: '+e.borderRadius+";\n\twhite-space: normal;\n}\n\n.token.comment,\n.token.prolog,\n.token.doctype,\n.token.cdata {\n\tcolor: "+e.gray+";\n}\n\n.token.punctuation {\n\tcolor: "+e.bodyColor+";\n}\n\n.namespace {\n\topacity: .7;\n}\n\n.token.property,\n.token.tag,\n.token.constant,\n.token.symbol,\n.token.deleted {\n\tcolor: "+e.secondaryColor+";\n}\n\n.token.boolean,\n.token.number {\n\tcolor: "+e.secondaryColor+";\n}\n\n.token.selector,\n.token.attr-name,\n.token.string,\n.token.char,\n.token.builtin,\n.token.inserted {\n\tcolor: "+e.secondaryColor+";\n}\n\n.token.operator,\n.token.entity,\n.token.url,\n.language-css .token.string,\n.style .token.string,\n.token.variable {\n\tcolor: "+e.bodyColor+";\n}\n\n.token.atrule,\n.token.attr-value,\n.token.function,\n.token.class-name {\n\tcolor: "+e.secondaryColor+";\n}\n\n.token.keyword {\n\tcolor: "+e.secondaryColor+";\n}\n\n.token.regex,\n.token.important {\n\tcolor: "+e.secondaryColor+";\n}\n\n.token.important,\n.token.bold {\n\tfont-weight: bold;\n}\n.token.italic {\n\tfont-style: italic;\n}\n\n.token.entity {\n\tcursor: help;\n}\n"}(e.theme)}),E=d.c.main.withConfig({componentId:"sc-1ph75po-0"})(["background:",";a{position:relative;display:inline-block;background:transparent;color:",";font-weight:bold;text-decoration:none;>span{color:inherit;background-color:inherit;}&::after{content:'';"," "," background:",";transition:opacity ",",transform ",";opacity:0;transform:translateY(.2em);}&:hover::after{opacity:1;transform:none;}}"],function(e){return e.theme.bgColor},function(e){return e.theme.secondaryColor},Object(f.a)("absolute",null,null,"0","0"),Object(f.b)("1px","100%"),function(e){return e.theme.secondaryColor},function(e){return e.theme.defaultTransition},function(e){return e.theme.defaultTransition}),w=n(160),v=Object(w.a)(d.c.header.withConfig({componentId:"sc-116zvyz-0"})(["margin:0 auto;max-width:","px;a{text-decoration:none;}@media print{display:none;}"],function(e){return e.theme.maxWidth})),x=Object(w.a)(d.c.ul.withConfig({componentId:"sc-116zvyz-1"})(["display:block;list-style-type:none;margin:0;text-align:right;position:relative;white-space:nowrap;width:100%;&::before,&::after{content:'';display:block;background:linear-gradient( to right,transparent,",",transparent );position:absolute;","}&::before{top:0;}&::after{bottom:0;}>li{display:inline-block;margin:0;padding:1em 0;&:not(:first-child){margin-left:1em;}}a{color:",";font-family:",";font-size:14px;text-transform:uppercase;transition:color ",";&:hover,&:active{color:",";}}"],function(e){return e.theme.lightGray},Object(f.b)("1px","100%"),function(e){return e.theme.gray},function(e){return e.theme.headerFont},function(e){return e.theme.defaultTransition},function(e){return e.theme.headerColor})),C=Object(w.a)(Object(d.c)(m.Link).withConfig({componentId:"sc-116zvyz-2"})(["display:block;text-align:center;h1{display:inline-block;margin:.5em;font-weight:900;font-size:22px;letter-spacing:1px;position:relative;transition:color ",";&::after{content:'';border-radius:50%;display:block;background:",";"," ","}&:hover,&:active{color:",";}}"],function(e){return e.theme.defaultTransition},function(e){return e.theme.secondaryColor},Object(f.a)("absolute","8px","-1em",null,null),Object(f.b)("10px"),function(e){return e.theme.secondaryColor})),j=function(e){function t(){for(var t,n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return(t=e.call.apply(e,[this].concat(r))||this).shouldComponentUpdate=function(){return!1},t}return a()(t,e),t.prototype.render=function(){return s.a.createElement("nav",null,s.a.createElement(v,null,s.a.createElement(C,{to:"/"},s.a.createElement("h1",null,this.props.title)),s.a.createElement(x,null,s.a.createElement("li",null,s.a.createElement(m.Link,{to:"/"},"Home")),s.a.createElement("li",null,s.a.createElement(m.Link,{to:"/tools"},"Tools")),s.a.createElement("li",null,s.a.createElement(m.Link,{to:"/about"},"About")))))},t}(c.Component);j.propTypes={title:h.string.isRequired};var I=n(163);n.d(t,"a",function(){return R});var O=d.c.div.withConfig({componentId:"grcys-0"})(["background:",";margin:1em auto;"," max-width:","px;position:relative;"],function(e){return e.theme.bgColor},Object(f.b)("100%","100vw"),function(e){return e.theme.maxWidth}),R=function(e){function t(){for(var t,n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return(t=e.call.apply(e,[this].concat(r))||this).shouldComponentUpdate=function(){return!1},t}a()(t,e);var n=t.prototype;return n.componentDidMount=function(){t.fbPixelInitialized||(p.a.init("1915349895435128",{},{}),t.fbPixelInitialized=!0),p.a.pageView()},n.render=function(){var e=this.props,t=e.children,n=e.title,r=e.description;return s.a.createElement(d.a,{theme:I.a},s.a.createElement(m.StaticQuery,{query:"4226086209",render:function(e){var a=e.site.siteMetadata;return s.a.createElement(c.Fragment,null,s.a.createElement(l.a,null,s.a.createElement("html",{lang:"en",amp:!0}),s.a.createElement("title",null,n?a.title+": "+n:a.title),s.a.createElement("meta",{name:"description",content:r||a.description}),s.a.createElement("meta",{property:"og:title",content:n}),s.a.createElement("meta",{property:"og:description",content:r||a.description}),s.a.createElement("meta",{name:"twitter:card",content:"summary"}),s.a.createElement("meta",{name:"twitter:creator",content:"PEM___"}),s.a.createElement("meta",{name:"google-site-verification",content:a.googleSearchConsoleOwnershipId})),s.a.createElement(j,{title:a.title}),s.a.createElement(E,null,s.a.createElement(O,null,t({siteMetadata:a}))),s.a.createElement(k,null))},data:o}))},t}(c.Component);R.fbPixelInitialized=!1,R.propTypes={children:h.any.isRequired,description:h.string,title:h.string}},163:function(e,t,n){"use strict";t.a={bgColor:"white",bodyColor:"#333",borderRadius:"5px",defaultTransition:".3s ease-in-out",headerColor:"#181818",headerFont:"-apple-system,'BlinkMacSystemFont','Segoe UI','Roboto','Oxygen','Ubuntu','Cantarell','Fira Sans','Droid Sans','Helvetica Neue','sans-serif'",monospaceFont:"'Andale Mono', 'Ubuntu Mono', monospace",maxWidth:960,secondaryColor:"#e70808",smallFontSize:"10px",smallFontWeight:300,gray:"#7f7f7f",lightGray:"#e7e7e7",warningColor:"#f4ab55"}},164:function(e,t,n){"use strict";n.d(t,"a",function(){return c});var r=n(7),a=n.n(r),o=n(0),i=n.n(o),l=n(4),c=function(e){function t(){for(var t,n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return(t=e.call.apply(e,[this].concat(r))||this).shouldComponentUpdate=function(){return!1},t}return a()(t,e),t.prototype.render=function(){return i.a.createElement("a",{href:this.props.href,target:"_blank",rel:"noreferrer noopener"},this.props.text)},t}(o.Component);c.propTypes={href:l.string.isRequired,text:l.string.isRequired}},166:function(e,t,n){"use strict";n.r(t);var r=n(10),a=n.n(r),o=n(0),i=n.n(o),l=n(4),c=n.n(l),s=n(49),u=n(2),p=function(e){var t=e.location,n=u.default.getResourcesForPathnameSync(t.pathname);return i.a.createElement(s.a,a()({location:t,pageResources:n},n.json))};p.propTypes={location:c.a.shape({pathname:c.a.string.isRequired}).isRequired},t.default=p},167:function(e){e.exports={data:{site:{siteMetadata:{description:"Notes and posts about development, Math, ML and AI",discussShortName:"https-pem-github-io",googleSearchConsoleOwnershipId:"IIdc-ufE7Rf_Gn8p7Ee83Ua7obcDac8tk2DLW_p87Ak",siteUrl:"https://pem--.github.io",title:"PEM's blog"}}}}},168:function(e,t,n){"use strict";n.d(t,"a",function(){return b});n(76);var r=n(7),a=n.n(r),o=n(0),i=n.n(o),l=n(155),c=n(588),s=n(589),u=n(590),p=n(591),d=n(592),m=n(593),h=n(157),f=n(4),g=l.c.div.withConfig({componentId:"sc-199atao-0"})(["display:flex;justify-content:center;margin:2em 0;position:relative;&::before,&::after{content:'';display:block;background:linear-gradient( to right,transparent,",",transparent );position:absolute;","}&::before{top:-1em;}&::after{bottom:-1em;}>*{cursor:pointer;flex:0 0 auto;outline:0;&:not(:first-of-type){margin-left:1.5em;}}@media print{display:none;}"],function(e){return e.theme.lightGray},Object(h.b)("1px","100%")),b=function(e){function t(){for(var t,n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return(t=e.call.apply(e,[this].concat(r))||this).shouldComponentUpdate=function(e){var n=e.href,r=e.title;return t.props.href!==n||t.props.title!==r},t}return a()(t,e),t.prototype.render=function(){var e={url:this.props.href};return i.a.createElement(g,null,i.a.createElement(c.a,Object.assign({title:this.props.title},e),i.a.createElement(s.a,t.shareIconProps)),i.a.createElement(u.a,Object.assign({title:this.props.title},e),i.a.createElement(p.a,t.shareIconProps)),i.a.createElement(d.a,Object.assign({subject:this.props.title},e),i.a.createElement(m.a,t.shareIconProps)))},t}(o.Component);b.shareIconProps={round:!0,size:32},b.propTypes={href:f.string.isRequired,title:f.string.isRequired}}}]);
//# sourceMappingURL=component---src-pages-about-js-53e2810282173793e0b9.js.map