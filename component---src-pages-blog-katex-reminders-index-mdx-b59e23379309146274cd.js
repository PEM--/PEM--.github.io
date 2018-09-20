(window.webpackJsonp=window.webpackJsonp||[]).push([[13,9],{143:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),a=n(168);t.default=function(){return o.a.createElement(a.a,{displayMode:!0,text:"\\underbrace{a \\cdot x^2 + b \\cdot x + c}_{\\text{Polynomial expression}}"})}},144:function(e,t,n){"use strict";n.r(t);n(187);var r=n(159),o=n.n(r),a=n(0),i=n.n(a);function c(){var e=o()([void 0],["\\u"]);return c=function(){return e},e}t.default=function(){return i.a.createElement("code",null,String.raw(c()))}},145:function(e,t,n){"use strict";n.r(t);n(187);var r=n(159),o=n.n(r),a=n(0),i=n.n(a),c=n(168);function s(){var e=o()(["\n      \vec{v} = A cdot \vec{x} = \n      % Matrix\n      \begin{bmatrix}\n        a_{1,1} & … & z_{m,1} \\\n        ⁝       & … & ⁝ \\\n        a_{1,n} & … & z_{m,n}\n      end{bmatrix}\n      cdot\n      % Vector\n      \begin{bmatrix}\n        x_n \\\n        ⁝ \\\n        x_n\n      end{bmatrix}\n      =\n      % Result vector\n      \begin{bmatrix}\n        v_m \\\n        ⁝ \\\n        v_m\n      end{bmatrix}\n    "],["\n      \\vec{v} = A \\cdot \\vec{x} = \n      % Matrix\n      \\begin{bmatrix}\n        a_{1,1} & … & z_{m,1} \\\\\n        ⁝       & … & ⁝ \\\\\n        a_{1,n} & … & z_{m,n}\n      \\end{bmatrix}\n      \\cdot\n      % Vector\n      \\begin{bmatrix}\n        x_n \\\\\n        ⁝ \\\\\n        x_n\n      \\end{bmatrix}\n      =\n      % Result vector\n      \\begin{bmatrix}\n        v_m \\\\\n        ⁝ \\\\\n        v_m\n      \\end{bmatrix}\n    "]);return s=function(){return e},e}t.default=function(){return i.a.createElement(c.a,{displayMode:!0,text:String.raw(s())})}},149:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",function(){return d});var r=n(188),o=n.n(r),a=n(0),i=n.n(a),c=n(170),s=n(207),l=n(168),u=n(143),p=n(144),m=n(145);t.default=function(e){var t=e.components,n=o()(e,["components"]);return i.a.createElement(c.MDXTag,{name:"wrapper",Layout:s.a,layoutProps:n,components:t},i.a.createElement(c.MDXTag,{name:"h2",components:t},"Annotations"),i.a.createElement(c.MDXTag,{name:"p",components:t},"Upper note:"),i.a.createElement(l.a,{displayMode:!0,text:"\\overbrace{a \\cdot x^2 + b \\cdot x +c}^{\\text{Polynomial expression}}"}),i.a.createElement("div",{className:"gatsby-highlight","data-language":"katex"},i.a.createElement("pre",{className:"language-katex"},i.a.createElement("code",{className:"language-katex"},"\\overbrace","{","a \\cdot x^2 + b \\cdot x +c","}","^","{","\\text","{","Polynomial expression","}","}"))),i.a.createElement(c.MDXTag,{name:"p",components:t},"Lower note:"),i.a.createElement(u.default,null),i.a.createElement(c.MDXTag,{name:"p",components:t},"Same as before, just replace ",i.a.createElement("code",{className:"language-text"},"overbrace")," with ",i.a.createElement("code",{className:"language-text"},"underbrace"),"."),i.a.createElement(c.MDXTag,{name:"h2",components:t},"Vector & matrix"),i.a.createElement(m.default,null),i.a.createElement("div",{className:"gatsby-highlight","data-language":"katex"},i.a.createElement("pre",{className:"language-katex"},i.a.createElement("code",{className:"language-katex"},"\\vec","{","v","}"," = A \\cdot \\vec","{","x","}"," = ","\n","% Matrix","\n","\\begin","{","bmatrix","}","\n","  ","a_","{","1,1","}"," & … & z_","{","m,1","}"," \\\\","\n","  ","⁝","       ","& … & ⁝ \\\\","\n","  ","a_","{","1,n","}"," & … & z_","{","m,n","}","\n","\\end","{","bmatrix","}","\n","\\cdot","\n","% Vector","\n","\\begin","{","bmatrix","}","\n","  ","x_n \\\\","\n","  ","⁝ \\\\","\n","  ","x_n","\n","\\end","{","bmatrix","}","\n","=","\n","% Result vector","\n","\\begin","{","bmatrix","}","\n","  ","v_m \\\\","\n","  ","⁝ \\\\","\n","  ","v_m","\n","\\end","{","bmatrix","}"))),i.a.createElement(c.MDXTag,{name:"h2",components:t},"Gotchas on escape characters & unicode"),i.a.createElement(c.MDXTag,{name:"h3",components:t},"For Katex"),i.a.createElement(c.MDXTag,{name:"p",components:t},"While using Katex in the browser, you may encounter issues with Unicode and character encoding.\nThis one ",i.a.createElement(p.default,null)," has a particularly bad behaviour as it makes JS trying to interpret\nthe following characters as an Unicode. To prevent this interpretation, simply use:"),i.a.createElement("div",{className:"gatsby-highlight","data-language":"js"},i.a.createElement("pre",{className:"language-js"},i.a.createElement("code",{className:"language-js"},"String",i.a.createElement("span",{className:"token punctuation"},"."),"raw",i.a.createElement("span",{className:"token template-string"},i.a.createElement("span",{className:"token string"},"`...Any raw string that you want...`"))))),i.a.createElement(c.MDXTag,{name:"p",components:t},"More information on ",i.a.createElement(c.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String/raw"}},"MSN web docs"),"."),i.a.createElement(c.MDXTag,{name:"h3",components:t},"Fox MDX"),i.a.createElement(c.MDXTag,{name:"p",components:t},"Like for Katex, some escape character may crash your MDX display. With MDX capability\nto call any React component on demand, simply create a special component that will get\nrid of the interpretation, like in this example."),i.a.createElement(c.MDXTag,{name:"h2",components:t},"Some links"),i.a.createElement(c.MDXTag,{name:"ul",components:t},i.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ul"},i.a.createElement(c.MDXTag,{name:"p",components:t,parentName:"li"},i.a.createElement(c.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"https://katex.org/"}},"Katex site"))),i.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ul"},i.a.createElement(c.MDXTag,{name:"p",components:t,parentName:"li"},i.a.createElement(c.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"https://github.com/PEM--/PEM--.github.io/blob/master/src/src/components/Katex.js"}},"Katex with React"),"\nwith the sample usage:"),i.a.createElement("div",{className:"gatsby-highlight","data-language":"js"},i.a.createElement("pre",{className:"language-js"},i.a.createElement("code",{className:"language-js"},i.a.createElement("span",{className:"token operator"},"<"),"Katex displayMode text",i.a.createElement("span",{className:"token operator"},"="),i.a.createElement("span",{className:"token string"},'"a^2 + b^2 = c^2"')," ",i.a.createElement("span",{className:"token operator"},"/"),i.a.createElement("span",{className:"token operator"},">")))),i.a.createElement(c.MDXTag,{name:"p",components:t,parentName:"li"},"That displays:"),i.a.createElement(l.a,{displayMode:!0,text:"a^2 + b^2 = c^2"}))))};var d={}},157:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return h}),n.d(t,"StaticQueryContext",function(){return d}),n.d(t,"StaticQuery",function(){return f});var r=n(0),o=n.n(r),a=n(4),i=n.n(a),c=n(154),s=n.n(c);n.d(t,"Link",function(){return s.a}),n.d(t,"withPrefix",function(){return c.withPrefix}),n.d(t,"navigate",function(){return c.navigate}),n.d(t,"push",function(){return c.push}),n.d(t,"replace",function(){return c.replace}),n.d(t,"navigateTo",function(){return c.navigateTo});var l=n(28);n.d(t,"waitForRouteChange",function(){return l.c});var u=n(158),p=n.n(u);n.d(t,"PageRenderer",function(){return p.a});var m=n(39);n.d(t,"parsePath",function(){return m.a});var d=o.a.createContext({}),f=function(e){return o.a.createElement(d.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):o.a.createElement("div",null,"Loading (StaticQuery)")})};function h(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}f.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},158:function(e,t,n){var r;e.exports=(r=n(161))&&r.default||r},161:function(e,t,n){"use strict";n.r(t);var r=n(11),o=n.n(r),a=n(0),i=n.n(a),c=n(4),s=n.n(c),l=n(53),u=n(1),p=function(e){var t=e.location,n=u.default.getResourcesForPathnameSync(t.pathname);return i.a.createElement(l.a,o()({location:t,pageResources:n},n.json))};p.propTypes={location:s.a.shape({pathname:s.a.string.isRequired}).isRequired},t.default=p},162:function(e){e.exports={data:{site:{siteMetadata:{description:"Notes and posts about development, Math, ML and AI",discussShortName:"https-pem-github-io",siteUrl:"https://pem--.github.io",title:"PEM's blog"}}}}},164:function(e,t,n){"use strict";var r=n(162),o=n(0),a=n.n(o),i=n(181),c=n.n(i),s=n(155),l=n(157),u=n(4),p=n(156),m=n(159),d=n.n(m);function f(){var e=d()(["\n  html, body, #___gatsby, #___gatsby>div {\n    height: 100%;\n  }\n  div > p > .gatsby-resp-image-link {\n    pointer-events: none;\n    .gatsby-resp-image-wrapper {\n      border: 1px solid ",";\n      border-radius: ",";\n      max-width: 100% !important;\n      overflow: hidden;\n    }\n  }\n  .katex-display { margin: 0 0 .5em; }\n  .katex { font: 300 1.15em KaTeX_Main, serif; }\n  ","\n"]);return f=function(){return e},e}var h=Object(s.b)(f(),function(e){return e.theme.lightGray},function(e){return e.theme.borderRadius},function(e){return function(e){return'\ncode[class*="language-"],\npre[class*="language-"] {\n\tcolor: '+e.bodyColor+";\n\tbackground: none;\n\tfont-family: 'Andale Mono', 'Ubuntu Mono', monospace;\n\ttext-align: left;\n\twhite-space: pre;\n\tword-spacing: normal;\n\tword-break: normal;\n\tword-wrap: normal;\n\tline-height: 1.5;\n\thyphens: none;\n}\n\n/* Code blocks */\npre[class*=\"language-\"] {\n\tpadding: 1em;\n\tmargin: .5em 0;\n\toverflow: auto;\n\tborder-radius: "+e.borderRadius+";\n\tborder: 1px solid "+e.lightGray+';\n}\n\n:not(pre) > code[class*="language-"],\npre[class*="language-"] {\n\tbackground: '+e.bgColor+';\n}\n\n/* Inline code */\n:not(pre) > code[class*="language-"] {\n\tpadding: .1em;\n\tborder-radius: '+e.borderRadius+";\n\twhite-space: normal;\n}\n\n.token.comment,\n.token.prolog,\n.token.doctype,\n.token.cdata {\n\tcolor: "+e.gray+";\n}\n\n.token.punctuation {\n\tcolor: "+e.bodyColor+";\n}\n\n.namespace {\n\topacity: .7;\n}\n\n.token.property,\n.token.tag,\n.token.constant,\n.token.symbol,\n.token.deleted {\n\tcolor: "+e.secondaryColor+";\n}\n\n.token.boolean,\n.token.number {\n\tcolor: "+e.secondaryColor+";\n}\n\n.token.selector,\n.token.attr-name,\n.token.string,\n.token.char,\n.token.builtin,\n.token.inserted {\n\tcolor: "+e.secondaryColor+";\n}\n\n.token.operator,\n.token.entity,\n.token.url,\n.language-css .token.string,\n.style .token.string,\n.token.variable {\n\tcolor: "+e.bodyColor+";\n}\n\n.token.atrule,\n.token.attr-value,\n.token.function,\n.token.class-name {\n\tcolor: "+e.secondaryColor+";\n}\n\n.token.keyword {\n\tcolor: "+e.secondaryColor+";\n}\n\n.token.regex,\n.token.important {\n\tcolor: "+e.secondaryColor+";\n}\n\n.token.important,\n.token.bold {\n\tfont-weight: bold;\n}\n.token.italic {\n\tfont-style: italic;\n}\n\n.token.entity {\n\tcursor: help;\n}\n"}(e.theme)}),g=s.c.main.withConfig({componentId:"sc-1ph75po-0"})(["background:",";a{position:relative;display:inline-block;background:transparent;color:",";font-weight:bold;text-decoration:none;>span{color:inherit;background-color:inherit;}&::after{content:'';"," "," background:",";transition:opacity ",",transform ",";opacity:0;transform:translateY(.2em);}&:hover::after{opacity:1;transform:none;}}"],function(e){return e.theme.bgColor},function(e){return e.theme.secondaryColor},Object(p.a)("absolute",null,null,"0","0"),Object(p.b)("1px","100%"),function(e){return e.theme.secondaryColor},function(e){return e.theme.defaultTransition},function(e){return e.theme.defaultTransition}),b=n(8),y=n.n(b),v=s.c.header.withConfig({componentId:"sc-116zvyz-0"})(["margin:0 auto;max-width:","px;a{text-decoration:none;}"],function(e){return e.theme.maxWidth}),w=s.c.ul.withConfig({componentId:"sc-116zvyz-1"})(["display:block;list-style-type:none;margin:0;text-align:right;position:relative;white-space:nowrap;width:100%;&::before,&::after{content:'';display:block;background:linear-gradient( to right,transparent,",",transparent );position:absolute;","}&::before{top:0;}&::after{bottom:0;}>li{display:inline-block;margin:0;padding:1em 0;&:not(:first-child){margin-left:1em;}}a{color:",";font-family:",";font-size:14px;text-transform:uppercase;transition:color ",";&:hover,&:active{color:",";}}"],function(e){return e.theme.lightGray},Object(p.b)("1px","100%"),function(e){return e.theme.gray},function(e){return e.theme.headerFont},function(e){return e.theme.defaultTransition},function(e){return e.theme.headerColor}),E=Object(s.c)(l.Link).withConfig({componentId:"sc-116zvyz-2"})(["display:block;text-align:center;h1{display:inline-block;margin:.5em;font-weight:900;font-size:22px;letter-spacing:1px;position:relative;transition:color ",";&::after{content:'';border-radius:50%;display:block;background:",";"," ","}&:hover,&:active{color:",";}}"],function(e){return e.theme.defaultTransition},function(e){return e.theme.secondaryColor},Object(p.a)("absolute","8px","-1em",null,null),Object(p.b)("10px"),function(e){return e.theme.secondaryColor}),x=function(e){function t(){for(var t,n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(t=e.call.apply(e,[this].concat(r))||this).shouldComponentUpdate=function(){return!1},t}return y()(t,e),t.prototype.render=function(){return a.a.createElement("nav",null,a.a.createElement(v,null,a.a.createElement(E,{to:"/"},a.a.createElement("h1",null,this.props.title)),a.a.createElement(w,null,a.a.createElement("li",null,a.a.createElement(l.Link,{to:"/"},"Home")),a.a.createElement("li",null,a.a.createElement(l.Link,{to:"/about"},"About")))))},t}(o.Component);x.propTypes={title:u.string.isRequired};var k={bgColor:"white",bodyColor:"#333",borderRadius:"5px",defaultTransition:".3s ease-in-out",headerColor:"#181818",headerFont:"-apple-system,'BlinkMacSystemFont','Segoe UI','Roboto','Oxygen','Ubuntu','Cantarell','Fira Sans','Droid Sans','Helvetica Neue','sans-serif'",maxWidth:960,secondaryColor:"#e70808",smallFontSize:"10px",smallFontWeight:300,gray:"#7f7f7f",lightGray:"#e7e7e7"};n.d(t,"a",function(){return C});var _=s.c.div.withConfig({componentId:"grcys-0"})(["background:",";margin:1em auto;"," max-width:","px;position:relative;"],function(e){return e.theme.bgColor},Object(p.b)("100%","100vw"),function(e){return e.theme.maxWidth});function C(e){var t=e.children,n=e.title,i=e.description;return a.a.createElement(s.a,{theme:k},a.a.createElement(l.StaticQuery,{query:"1327357206",render:function(e){var r=e.site.siteMetadata;return a.a.createElement(o.Fragment,null,a.a.createElement(c.a,null,a.a.createElement("html",{lang:"en",amp:!0}),a.a.createElement("title",null,n?r.title+": "+n:r.title),a.a.createElement("meta",{name:"description",content:i||r.description}),a.a.createElement("meta",{property:"og:title",content:n}),a.a.createElement("meta",{property:"og:description",content:i||r.description}),a.a.createElement("meta",{name:"twitter:card",content:"summary"}),a.a.createElement("meta",{name:"twitter:creator",content:"PEM___"})),a.a.createElement(x,{title:r.title}),a.a.createElement(g,null,a.a.createElement(_,null,t({siteMetadata:r}))),a.a.createElement(h,null))},data:r}))}C.propTypes={children:u.any.isRequired,description:u.string,title:u.string}},165:function(e,t,n){"use strict";n.d(t,"a",function(){return s});var r=n(8),o=n.n(r),a=n(0),i=n.n(a),c=n(4),s=function(e){function t(){for(var t,n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(t=e.call.apply(e,[this].concat(r))||this).shouldComponentUpdate=function(){return!1},t}return o()(t,e),t.prototype.render=function(){return i.a.createElement("a",{href:this.props.href,target:"_blank",rel:"noreferrer noopener"},this.props.text)},t}(a.Component);s.propTypes={href:c.string.isRequired,text:c.string.isRequired}},167:function(e,t,n){"use strict";n.d(t,"a",function(){return b});n(79);var r=n(8),o=n.n(r),a=n(0),i=n.n(a),c=n(155),s=n(362),l=n(363),u=n(364),p=n(365),m=n(366),d=n(367),f=n(156),h=n(4),g=c.c.div.withConfig({componentId:"sc-199atao-0"})(["display:flex;justify-content:center;margin:2em 0;position:relative;&::before,&::after{content:'';display:block;background:linear-gradient( to right,transparent,",",transparent );position:absolute;","}&::before{top:-1em;}&::after{bottom:-1em;}>*{cursor:pointer;flex:0 0 auto;outline:0;&:not(:first-of-type){margin-left:1.5em;}}"],function(e){return e.theme.lightGray},Object(f.b)("1px","100%")),b=function(e){function t(){for(var t,n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(t=e.call.apply(e,[this].concat(r))||this).shouldComponentUpdate=function(e){var n=e.href,r=e.title;return t.props.href!==n||t.props.title!==r},t}return o()(t,e),t.prototype.render=function(){var e={url:this.props.href};return i.a.createElement(g,null,i.a.createElement(s.a,Object.assign({title:this.props.title},e),i.a.createElement(l.a,t.shareIconProps)),i.a.createElement(u.a,Object.assign({title:this.props.title},e),i.a.createElement(p.a,t.shareIconProps)),i.a.createElement(m.a,Object.assign({subject:this.props.title},e),i.a.createElement(d.a,t.shareIconProps)))},t}(a.Component);b.shareIconProps={round:!0,size:32},b.propTypes={href:h.string.isRequired,title:h.string.isRequired}},168:function(e,t,n){"use strict";n.d(t,"a",function(){return u});var r=n(8),o=n.n(r),a=n(0),i=n.n(a),c=n(215),s=n.n(c),l=n(4),u=function(e){function t(t){var n;return(n=e.call(this,t)||this).shouldComponentUpdate=function(){return!1},n.content=s.a.renderToString(t.text,{displayMode:t.displayMode}),n}return o()(t,e),t.prototype.render=function(){return i.a.createElement("span",{dangerouslySetInnerHTML:{__html:this.content}})},t}(a.Component);u.propTypes={displayMode:l.bool,text:l.string.isRequired}},170:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(191);Object.defineProperty(t,"MDXTag",{enumerable:!0,get:function(){return a(r).default}});var o=n(171);function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"MDXProvider",{enumerable:!0,get:function(){return a(o).default}})},171:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.withMDXComponents=void 0;var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=c(n(0)),a=c(n(55)),i=c(n(4));function c(e){return e&&e.__esModule?e:{default:e}}var s=(0,a.default)({}),l=s.Provider,u=s.Consumer;t.withMDXComponents=function(e){return function(t){var n=t.components,a=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}(t,["components"]);return o.default.createElement(u,null,function(t){return o.default.createElement(e,r({components:n||t},a))})}};var p=function(e){var t=e.components,n=e.children;return o.default.createElement(l,{value:t},n)};p.propTypes={components:i.default.object.isRequired,children:i.default.element.isRequired},t.default=p},172:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.insertScript=function(e,t,n){var r=window.document.createElement("script");return r.async=!0,r.src=e,r.id=t,n.appendChild(r),r},t.removeScript=function(e,t){var n=window.document.getElementById(e);n&&t.removeChild(n)},t.debounce=function(e,t,n){var r=void 0;return function(){var o=this,a=arguments,i=n&&!r;window.clearTimeout(r),r=setTimeout(function(){r=null,n||e.apply(o,a)},t),i&&e.apply(o,a)}}},173:function(e,t,n){var r=n(201).Symbol;e.exports=r},180:function(e,t,n){"use strict";var r=n(155),o=n(156);t.a=r.c.h1.withConfig({componentId:"sc-1szmnsq-0"})(["position:relative;width:calc(100% - 60px);small{color:",";display:block;font-weight:",";font-size:",";font-style:italic;"," text-align:right;width:60px;}"],function(e){return e.theme.gray},function(e){return e.theme.smallFontWeight},function(e){return e.theme.smallFontSize},Object(o.a)("absolute",null,"-60px",0,null))},187:function(e,t,n){var r=n(6),o=n(40),a=n(29);r(r.S,"String",{raw:function(e){for(var t=o(e.raw),n=a(t.length),r=arguments.length,i=[],c=0;n>c;)i.push(String(t[c++])),c<r&&i.push(String(arguments[c]));return i.join("")}})},191:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=n(0),i=l(a),c=l(n(209)),s=n(171);function l(e){return e&&e.__esModule?e:{default:e}}var u={inlineCode:"code",wrapper:"div"},p=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.Component),o(t,[{key:"render",value:function(){var e=this.props,t=e.name,n=e.parentName,o=e.props,a=void 0===o?{}:o,s=e.children,l=e.components,p=void 0===l?{}:l,m=e.Layout,d=e.layoutProps,f=p[n+"."+t]||p[t]||u[t]||t;return m?((0,c.default)(this,m),i.default.createElement(m,r({components:p},d),i.default.createElement(f,a,s))):i.default.createElement(f,a,s)}}]),t}();t.default=(0,s.withMDXComponents)(p)},192:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.DiscussionEmbed=t.CommentEmbed=t.CommentCount=void 0;var r=n(193),o=n(194),a=n(195);t.CommentCount=r.CommentCount,t.CommentEmbed=o.CommentEmbed,t.DiscussionEmbed=a.DiscussionEmbed;var i={CommentCount:r.CommentCount,CommentEmbed:o.CommentEmbed,DiscussionEmbed:a.DiscussionEmbed};t.default=i},193:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CommentCount=void 0;var r,o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=n(0),i=(r=a)&&r.__esModule?r:{default:r},c=n(172);var s=(0,c.debounce)(function(){window.DISQUSWIDGETS&&window.DISQUSWIDGETS.getCount({reset:!0})},300,!1);t.CommentCount=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,i.default.Component),o(t,[{key:"componentDidMount",value:function(){this.loadInstance()}},{key:"shouldComponentUpdate",value:function(e){if(this.props.shortname!==e.shortname)return!0;var t=e.config,n=this.props.config;return t.url!==n.url&&t.identifier!==n.identifier}},{key:"componentWillUpdate",value:function(e){this.props.shortname!==e.shortname&&this.cleanInstance()}},{key:"componentDidUpdate",value:function(){this.loadInstance()}},{key:"loadInstance",value:function(){var e=window.document;e.getElementById("dsq-count-scr")?s():(0,c.insertScript)("https://"+this.props.shortname+".disqus.com/count.js","dsq-count-scr",e.body)}},{key:"cleanInstance",value:function(){var e=window.document.body;(0,c.removeScript)("dsq-count-scr",e),window.DISQUSWIDGETS=void 0}},{key:"render",value:function(){return i.default.createElement("span",{className:"disqus-comment-count","data-disqus-identifier":this.props.config.identifier,"data-disqus-url":this.props.config.url},this.props.children)}}]),t}()},194:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CommentEmbed=void 0;var r,o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=n(0),i=(r=a)&&r.__esModule?r:{default:r};(t.CommentEmbed=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,i.default.Component),o(t,[{key:"getSrc",value:function(){return"https://embed.disqus.com/p/"+Number(this.props.commentId).toString(36)+"?p="+(this.props.showParentComment?"1":"0")+"&m="+(this.props.showMedia?"1":"0")}},{key:"render",value:function(){return i.default.createElement("iframe",{src:this.getSrc(),width:this.props.width,height:this.props.height,seamless:"seamless",scrolling:"no",frameBorder:"0"})}}]),t}()).defaultProps={showMedia:!0,showParentComment:!0,width:420,height:320}},195:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.DiscussionEmbed=void 0;var r,o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=n(0),i=(r=a)&&r.__esModule?r:{default:r},c=n(172);t.DiscussionEmbed=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,i.default.Component),o(t,[{key:"componentWillMount",value:function(){"undefined"!=typeof window&&window.disqus_shortname&&window.disqus_shortname!==this.props.shortname&&this.cleanInstance()}},{key:"componentDidMount",value:function(){this.loadInstance()}},{key:"shouldComponentUpdate",value:function(e){if(this.props.shortname!==e.shortname)return!0;var t=e.config,n=this.props.config;return t.url!==n.url&&t.identifier!==n.identifier}},{key:"componentWillUpdate",value:function(e){this.props.shortname!==e.shortname&&this.cleanInstance()}},{key:"componentDidUpdate",value:function(){this.loadInstance()}},{key:"loadInstance",value:function(){var e=window.document;window&&window.DISQUS&&e.getElementById("dsq-embed-scr")?window.DISQUS.reset({reload:!0,config:this.getDisqusConfig(this.props.config)}):(window.disqus_config=this.getDisqusConfig(this.props.config),window.disqus_shortname=this.props.shortname,(0,c.insertScript)("https://"+this.props.shortname+".disqus.com/embed.js","dsq-embed-scr",e.body))}},{key:"cleanInstance",value:function(){var e=window.document;(0,c.removeScript)("dsq-embed-scr",e.body),window&&window.DISQUS&&window.DISQUS.reset({});try{delete window.DISQUS}catch(e){window.DISQUS=void 0}var t=e.getElementById("disqus_thread");if(t)for(;t.hasChildNodes();)t.removeChild(t.firstChild)}},{key:"getDisqusConfig",value:function(e){return function(){this.page.identifier=e.identifier,this.page.url=e.url,this.page.title=e.title,this.callbacks.onNewComment=[e.onNewComment]}}},{key:"render",value:function(){return i.default.createElement("div",{id:"disqus_thread"})}}]),t}()},196:function(e,t,n){"use strict";var r=n(6),o=n(29),a=n(197),i="".endsWith;r(r.P+r.F*n(198)("endsWith"),"String",{endsWith:function(e){var t=a(this,e,"endsWith"),n=arguments.length>1?arguments[1]:void 0,r=o(t.length),c=void 0===n?r:Math.min(o(n),r),s=String(e);return i?i.call(t,s,c):t.slice(c-s.length,c)===s}})},197:function(e,t,n){var r=n(80),o=n(30);e.exports=function(e,t,n){if(r(t))throw TypeError("String#"+n+" doesn't accept regex!");return String(o(e))}},198:function(e,t,n){var r=n(3)("match");e.exports=function(e){var t=/./;try{"/./"[e](t)}catch(n){try{return t[r]=!1,!"/./"[e](t)}catch(e){}}return!0}},199:function(e,t,n){var r=n(200),o=n(205),a=n(206),i="[object String]";e.exports=function(e){return"string"==typeof e||!o(e)&&a(e)&&r(e)==i}},200:function(e,t,n){var r=n(173),o=n(203),a=n(204),i="[object Null]",c="[object Undefined]",s=r?r.toStringTag:void 0;e.exports=function(e){return null==e?void 0===e?c:i:s&&s in Object(e)?o(e):a(e)}},201:function(e,t,n){var r=n(202),o="object"==typeof self&&self&&self.Object===Object&&self,a=r||o||Function("return this")();e.exports=a},202:function(e,t,n){(function(t){var n="object"==typeof t&&t&&t.Object===Object&&t;e.exports=n}).call(this,n(174))},203:function(e,t,n){var r=n(173),o=Object.prototype,a=o.hasOwnProperty,i=o.toString,c=r?r.toStringTag:void 0;e.exports=function(e){var t=a.call(e,c),n=e[c];try{e[c]=void 0;var r=!0}catch(e){}var o=i.call(e);return r&&(t?e[c]=n:delete e[c]),o}},204:function(e,t){var n=Object.prototype.toString;e.exports=function(e){return n.call(e)}},205:function(e,t){var n=Array.isArray;e.exports=n},206:function(e,t){e.exports=function(e){return null!=e&&"object"==typeof e}},207:function(e,t,n){"use strict";var r=n(8),o=n.n(r),a=n(192),i=n.n(a),c=n(0),s=n.n(c),l=n(216),u=n.n(l),p=n(155),m=n(156),d=n(4),f=n(165),h=p.c.span.withConfig({componentId:"sc-1rxao4w-0"})(["display:block;"," font-size:.8em;"],Object(m.a)("absolute","-.3em",0,null,null)),g=function(e){function t(){for(var t,n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(t=e.call.apply(e,[this].concat(r))||this).shouldComponentUpdate=function(){return!1},t}return o()(t,e),t.prototype.render=function(){return s.a.createElement(h,null,s.a.createElement(f.a,{href:"https://github.com/PEM--/PEM--.github.io/tree/master/src/src/pages/blog/"+this.props.slug,text:"Contribute on Github"}))},t}(c.Component);g.propTypes={slug:d.string.isRequired};var b=n(180),y=n(164),v=(n(79),n(196),n(199)),w=n.n(v),E=n(170),x=p.c.p.withConfig({componentId:"jcqrfk-0"})(["&.semiColon{margin-bottom:0;}"]),k=function(e){function t(){for(var t,n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(t=e.call.apply(e,[this].concat(r))||this).shouldComponentUpdate=function(){return!1},t}return o()(t,e),t.prototype.render=function(){var e=this.props.children&&w()(this.props.children)&&this.props.children.endsWith(":");return s.a.createElement(x,Object.assign({className:e&&"semiColon"},this.props))},t}(c.Component);k.propTypes={children:d.any};var _=function(e){function t(){for(var t,n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(t=e.call.apply(e,[this].concat(r))||this).shouldComponentUpdate=function(){return!1},t}return o()(t,e),t.prototype.render=function(){return s.a.createElement(E.MDXProvider,{components:{a:function(e){var t=e.href,n=e.children;return s.a.createElement(f.a,{href:t,text:n})},p:function(e){return s.a.createElement(k,e)}}},this.props.children)},t}(c.Component);_.propTypes={children:d.any.isRequired};var C=n(167);n.d(t,"a",function(){return j});var j=function(e){function t(){return e.apply(this,arguments)||this}return o()(t,e),t.prototype.render=function(){var e=this.props,t=e.children,n=e.location.href,r=e.pageContext.frontmatter,o={identifier:r.slug,title:r.title,url:n};return s.a.createElement(y.a,r,function(e){var a=e.siteMetadata;return s.a.createElement(c.Fragment,null,s.a.createElement(b.a,null,r.title,s.a.createElement("small",null,u()(r.date,"DD/MM/YY"))),r.contribute&&s.a.createElement(g,{slug:r.slug}),s.a.createElement(_,null,t),s.a.createElement(C.a,{href:n,title:r.title}),r.comment&&s.a.createElement(i.a.DiscussionEmbed,{config:o,shortName:a.discussShortName}))})},t}(c.PureComponent)}}]);
//# sourceMappingURL=component---src-pages-blog-katex-reminders-index-mdx-b59e23379309146274cd.js.map