(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{150:function(t,e,n){"use strict";n.r(e);var r=n(9),o=n.n(r),a=(n(446),n(6)),i=n.n(a),l=n(0),c=n.n(l),s=n(200),u=n.n(s),p=n(448),d=n.n(p),m=n(4),f=n(158),h=(n(68),n(194)),g=n.n(h),y=n(199),b=n.n(y),v=n(151),k=n(154),w=n(153),x=n(175),E=v.c.li.withConfig({componentId:"sc-16zuvtl-0"})(["border:1px solid ",";border-radius:",";transition:border-color ",";&:not(:first-of-type){margin-top:1em;}a{display:block;padding:1em;&::after{content:none;}}.title{color:",";font-size:1.2em;font-family:",";margin-bottom:.5em;position:relative;width:calc(100% - 80px);small{color:",";display:block;font-weight:",";font-size:",";font-style:italic;"," text-align:right;}}.description{color:",";font-size:.9em;font-weight:300;}.continue{color:",";font-size:.8em;font-weight:300;transition:color ",";}&:active,&:hover{border-color:",";.continue{color:",";}}"],function(t){return t.theme.lightGray},function(t){return t.theme.borderRadius},function(t){return t.theme.defaultTransition},function(t){return t.theme.headerColor},function(t){return t.theme.headerFont},function(t){return t.theme.gray},function(t){return t.theme.smallFontWeight},function(t){return t.theme.smallFontSize},Object(w.a)("absolute",0,"-80px",null,null),function(t){return t.theme.bodyColor},function(t){return t.theme.gray},function(t){return t.theme.defaultTransition},function(t){return t.theme.gray},function(t){return t.theme.secondaryColor}),C=function(t){function e(){for(var e,n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))||this).shoudComponentUpdate=function(){return!1},e}return i()(e,t),e.prototype.render=function(){var t=this.props,e=t.date,n=t.description,r=t.slug,o=t.title;return c.a.createElement(E,null,c.a.createElement(k.Link,{to:"blog/"+r},c.a.createElement("p",{className:"title"},o,c.a.createElement("small",null,b()(e,"DD/MM/YY"))),c.a.createElement("p",{className:"description"},n),c.a.createElement("p",{className:"continue"},"Continue reading ⤅")))},e}(l.Component);C.propTypes={date:m.string.isRequired,description:m.string.isRequired,slug:m.string.isRequired,title:m.string.isRequired};var j=v.c.ul.withConfig({componentId:"sc-16zuvtl-1"})(["list-style:none;margin:0;margin-bottom:3em;"]),I=function(t){function e(){for(var e,n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))||this).shoudComponentUpdate=function(){return!1},e}return i()(e,t),e.prototype.render=function(){var t=this.props.posts;return c.a.createElement("nav",null,c.a.createElement(x.a,null,"List of posts ",c.a.createElement("small",null,t.length," posts")),c.a.createElement(j,null,t.map(function(t){var e=t.id,n=g()(t,["id"]);return c.a.createElement(C,Object.assign({key:e},n))})))},e}(l.Component);I.propTypes={posts:Object(m.arrayOf)(Object(m.shape)(o()({id:m.string.isRequired},C.propTypes))).isRequired};var O=n(163);n.d(e,"default",function(){return R}),n.d(e,"query",function(){return z});var q=d()(),R=function(t){function e(){for(var e,n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return(e=t.call.apply(t,[this].concat(r))||this).shouldComponentUpdate=function(t){var n=t.data;return e.props.data!==n},e.sortedNodes=u()(function(t){return t.filter(function(t){return"blog"===t.node.frontmatter.type}).map(function(t){var e=t.node;return o()({},e.frontmatter,{id:e.id})}).sort(function(t,e){var n=t.date,r=e.date;return q(n,r)}).reverse()},{maxArgs:1}),e}return i()(e,t),e.prototype.render=function(){var t=this,e=this.props.data.allMdx.edges;return c.a.createElement(f.a,null,function(n){var r=n.siteMetadata;return c.a.createElement(l.Fragment,null,c.a.createElement(I,{posts:t.sortedNodes(e)}),c.a.createElement(O.a,{href:r.siteUrl,title:r.title}))})},e}(l.Component);R.propTypes={data:m.object.isRequired};var z="4223340479"},154:function(t,e,n){"use strict";n.r(e),n.d(e,"graphql",function(){return f}),n.d(e,"StaticQueryContext",function(){return d}),n.d(e,"StaticQuery",function(){return m});var r=n(0),o=n.n(r),a=n(4),i=n.n(a),l=n(152),c=n.n(l);n.d(e,"Link",function(){return c.a}),n.d(e,"withPrefix",function(){return l.withPrefix}),n.d(e,"navigate",function(){return l.navigate}),n.d(e,"push",function(){return l.push}),n.d(e,"replace",function(){return l.replace}),n.d(e,"navigateTo",function(){return l.navigateTo});var s=n(155),u=n.n(s);n.d(e,"PageRenderer",function(){return u.a});var p=n(28);n.d(e,"parsePath",function(){return p.a});var d=o.a.createContext({}),m=function(t){return o.a.createElement(d.Consumer,null,function(e){return t.data||e[t.query]&&e[t.query].data?(t.render||t.children)(t.data?t.data.data:e[t.query].data):o.a.createElement("div",null,"Loading (StaticQuery)")})};function f(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}m.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},155:function(t,e,n){var r;t.exports=(r=n(161))&&r.default||r},156:function(t,e,n){"use strict";var r=n(185),o=Object(r.a)(function(){return!1});e.a=o},158:function(t,e,n){"use strict";var r=n(6),o=n.n(r),a=n(162),i=n(183),l=n.n(i),c=n(0),s=n.n(c),u=n(184),p=n.n(u),d=n(151),m=n(154),f=n(4),h=n(153),g=n(172),y=n.n(g);function b(){var t=y()(["\n  html, body, #___gatsby, #___gatsby >div {\n    height: 100%;\n  }\n  div > p > .gatsby-resp-image-wrapper {\n    max-width: 100% !important;\n    border: 1px solid ",";\n    border-radius: ",";\n    overflow: hidden;\n  }\n  .katex-display { margin: 0 0 .5em; }\n  .katex { font: 300 1.15em KaTeX_Main, serif; }\n  ","\n  .center { text-align: center; }\n"]);return b=function(){return t},t}var v=Object(d.b)(b(),function(t){return t.theme.lightGray},function(t){return t.theme.borderRadius},function(t){return function(t){return'\ncode[class*="language-"],\npre[class*="language-"] {\n\tcolor: '+t.bodyColor+";\n\tbackground: none;\n\tfont-family: "+t.monospaceFont+';\n\ttext-align: left;\n\twhite-space: pre;\n\tword-spacing: normal;\n\tword-break: normal;\n\tword-wrap: normal;\n\tline-height: 1.5;\n\thyphens: none;\n}\n\n/* Code blocks */\npre[class*="language-"] {\n\tpadding: 1em;\n\tmargin: .5em 0;\n\toverflow: auto;\n\tborder-radius: '+t.borderRadius+";\n\tborder: 1px solid "+t.gray+';\n}\n\n:not(pre) > code[class*="language-"],\npre[class*="language-"] {\n\tbackground: '+t.lightGray+';\n}\n\n/* Inline code */\n:not(pre) > code[class*="language-"] {\n\tpadding: .1em;\n\tborder-radius: '+t.borderRadius+";\n\twhite-space: normal;\n}\n\n.token.comment,\n.token.prolog,\n.token.doctype,\n.token.cdata {\n\tcolor: "+t.gray+";\n}\n\n.token.punctuation {\n\tcolor: "+t.bodyColor+";\n}\n\n.namespace {\n\topacity: .7;\n}\n\n.token.property,\n.token.tag,\n.token.constant,\n.token.symbol,\n.token.deleted {\n\tcolor: "+t.secondaryColor+";\n}\n\n.token.boolean,\n.token.number {\n\tcolor: "+t.secondaryColor+";\n}\n\n.token.selector,\n.token.attr-name,\n.token.string,\n.token.char,\n.token.builtin,\n.token.inserted {\n\tcolor: "+t.secondaryColor+";\n}\n\n.token.operator,\n.token.entity,\n.token.url,\n.language-css .token.string,\n.style .token.string,\n.token.variable {\n\tcolor: "+t.bodyColor+";\n}\n\n.token.atrule,\n.token.attr-value,\n.token.function,\n.token.class-name {\n\tcolor: "+t.secondaryColor+";\n}\n\n.token.keyword {\n\tcolor: "+t.secondaryColor+";\n}\n\n.token.regex,\n.token.important {\n\tcolor: "+t.secondaryColor+";\n}\n\n.token.important,\n.token.bold {\n\tfont-weight: bold;\n}\n.token.italic {\n\tfont-style: italic;\n}\n\n.token.entity {\n\tcursor: help;\n}\n"}(t.theme)}),k=d.c.main.withConfig({componentId:"sc-1ph75po-0"})(["background:",";a{position:relative;display:inline-block;background:transparent;color:",";font-weight:bold;text-decoration:none;>span{color:inherit;background-color:inherit;}&::after{content:'';"," "," background:",";transition:opacity ",",transform ",";opacity:0;transform:translateY(.2em);}&:hover::after{opacity:1;transform:none;}}"],function(t){return t.theme.bgColor},function(t){return t.theme.secondaryColor},Object(h.a)("absolute",null,null,"0","0"),Object(h.b)("1px","100%"),function(t){return t.theme.secondaryColor},function(t){return t.theme.defaultTransition},function(t){return t.theme.defaultTransition}),w=n(156),x=Object(w.a)(d.c.header.withConfig({componentId:"sc-116zvyz-0"})(["margin:0 auto;max-width:","px;a{text-decoration:none;}@media print{display:none;}"],function(t){return t.theme.maxWidth})),E=Object(w.a)(d.c.ul.withConfig({componentId:"sc-116zvyz-1"})(["display:block;list-style-type:none;margin:0;text-align:right;position:relative;white-space:nowrap;width:100%;&::before,&::after{content:'';display:block;background:linear-gradient( to right,transparent,",",transparent );position:absolute;","}&::before{top:0;}&::after{bottom:0;}>li{display:inline-block;margin:0;padding:1em 0;&:not(:first-child){margin-left:1em;}}a{color:",";font-family:",";font-size:14px;text-transform:uppercase;transition:color ",";&:hover,&:active{color:",";}}"],function(t){return t.theme.lightGray},Object(h.b)("1px","100%"),function(t){return t.theme.gray},function(t){return t.theme.headerFont},function(t){return t.theme.defaultTransition},function(t){return t.theme.headerColor})),C=Object(w.a)(Object(d.c)(m.Link).withConfig({componentId:"sc-116zvyz-2"})(["display:block;text-align:center;h1{display:inline-block;margin:.5em;font-weight:900;font-size:22px;letter-spacing:1px;position:relative;transition:color ",";&::after{content:'';border-radius:50%;display:block;background:",";"," ","}&:hover,&:active{color:",";}}"],function(t){return t.theme.defaultTransition},function(t){return t.theme.secondaryColor},Object(h.a)("absolute","8px","-1em",null,null),Object(h.b)("10px"),function(t){return t.theme.secondaryColor})),j=function(t){function e(){for(var e,n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))||this).shouldComponentUpdate=function(){return!1},e}return o()(e,t),e.prototype.render=function(){return s.a.createElement("nav",null,s.a.createElement(x,null,s.a.createElement(C,{to:"/"},s.a.createElement("h1",null,this.props.title)),s.a.createElement(E,null,s.a.createElement("li",null,s.a.createElement(m.Link,{to:"/"},"Home")),s.a.createElement("li",null,s.a.createElement(m.Link,{to:"/tools"},"Tools")),s.a.createElement("li",null,s.a.createElement(m.Link,{to:"/about"},"About")))))},e}(c.Component);j.propTypes={title:f.string.isRequired};var I=n(159);n.d(e,"a",function(){return q});var O=d.c.div.withConfig({componentId:"grcys-0"})(["background:",";margin:1em auto;"," max-width:","px;position:relative;"],function(t){return t.theme.bgColor},Object(h.b)("100%","100vw"),function(t){return t.theme.maxWidth}),q=function(t){function e(){for(var e,n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))||this).shouldComponentUpdate=function(){return!1},e}o()(e,t);var n=e.prototype;return n.componentDidMount=function(){e.fbPixelInitialized||(p.a.init("1915349895435128",{},{}),e.fbPixelInitialized=!0),p.a.pageView()},n.render=function(){var t=this.props,e=t.children,n=t.title,r=t.description;return s.a.createElement(d.a,{theme:I.a},s.a.createElement(m.StaticQuery,{query:"4226086209",render:function(t){var o=t.site.siteMetadata;return s.a.createElement(c.Fragment,null,s.a.createElement(l.a,null,s.a.createElement("html",{lang:"en",amp:!0}),s.a.createElement("title",null,n?o.title+": "+n:o.title),s.a.createElement("meta",{name:"description",content:r||o.description}),s.a.createElement("meta",{property:"og:title",content:n}),s.a.createElement("meta",{property:"og:description",content:r||o.description}),s.a.createElement("meta",{name:"twitter:card",content:"summary"}),s.a.createElement("meta",{name:"twitter:creator",content:"PEM___"}),s.a.createElement("meta",{name:"google-site-verification",content:o.googleSearchConsoleOwnershipId})),s.a.createElement(j,{title:o.title}),s.a.createElement(k,null,s.a.createElement(O,null,e({siteMetadata:o}))),s.a.createElement(v,null))},data:a}))},e}(c.Component);q.fbPixelInitialized=!1,q.propTypes={children:f.any.isRequired,description:f.string,title:f.string}},159:function(t,e,n){"use strict";e.a={bgColor:"white",bodyColor:"#333",borderRadius:"5px",defaultTransition:".3s ease-in-out",headerColor:"#181818",headerFont:"-apple-system,'BlinkMacSystemFont','Segoe UI','Roboto','Oxygen','Ubuntu','Cantarell','Fira Sans','Droid Sans','Helvetica Neue','sans-serif'",monospaceFont:"'Andale Mono', 'Ubuntu Mono', monospace",maxWidth:960,secondaryColor:"#e70808",smallFontSize:"10px",smallFontWeight:300,gray:"#7f7f7f",lightGray:"#e7e7e7",warningColor:"#f4ab55"}},161:function(t,e,n){"use strict";n.r(e);var r=n(9),o=n.n(r),a=n(0),i=n.n(a),l=n(4),c=n.n(l),s=n(48),u=n(2),p=function(t){var e=t.location,n=u.default.getResourcesForPathnameSync(e.pathname);return i.a.createElement(s.a,o()({location:e,pageResources:n},n.json))};p.propTypes={location:c.a.shape({pathname:c.a.string.isRequired}).isRequired},e.default=p},162:function(t){t.exports={data:{site:{siteMetadata:{description:"Notes and posts about development, Math, ML and AI",discussShortName:"https-pem-github-io",googleSearchConsoleOwnershipId:"IIdc-ufE7Rf_Gn8p7Ee83Ua7obcDac8tk2DLW_p87Ak",siteUrl:"https://pem--.github.io",title:"PEM's blog"}}}}},163:function(t,e,n){"use strict";n.d(e,"a",function(){return y});n(68);var r=n(6),o=n.n(r),a=n(0),i=n.n(a),l=n(151),c=n(585),s=n(586),u=n(587),p=n(588),d=n(589),m=n(590),f=n(153),h=n(4),g=l.c.div.withConfig({componentId:"sc-199atao-0"})(["display:flex;justify-content:center;margin:2em 0;position:relative;&::before,&::after{content:'';display:block;background:linear-gradient( to right,transparent,",",transparent );position:absolute;","}&::before{top:-1em;}&::after{bottom:-1em;}>*{cursor:pointer;flex:0 0 auto;outline:0;&:not(:first-of-type){margin-left:1.5em;}}@media print{display:none;}"],function(t){return t.theme.lightGray},Object(f.b)("1px","100%")),y=function(t){function e(){for(var e,n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))||this).shouldComponentUpdate=function(t){var n=t.href,r=t.title;return e.props.href!==n||e.props.title!==r},e}return o()(e,t),e.prototype.render=function(){var t={url:this.props.href};return i.a.createElement(g,null,i.a.createElement(c.a,Object.assign({title:this.props.title},t),i.a.createElement(s.a,e.shareIconProps)),i.a.createElement(u.a,Object.assign({title:this.props.title},t),i.a.createElement(p.a,e.shareIconProps)),i.a.createElement(d.a,Object.assign({subject:this.props.title},t),i.a.createElement(m.a,e.shareIconProps)))},e}(a.Component);y.shareIconProps={round:!0,size:32},y.propTypes={href:h.string.isRequired,title:h.string.isRequired}},175:function(t,e,n){"use strict";var r=n(151),o=n(153);e.a=r.c.h1.withConfig({componentId:"sc-1szmnsq-0"})(["position:relative;width:calc(100% - 60px);small{color:",";display:block;font-weight:",";font-size:",";font-style:italic;"," text-align:right;width:60px;}"],function(t){return t.theme.gray},function(t){return t.theme.smallFontWeight},function(t){return t.theme.smallFontSize},Object(o.a)("absolute",null,"-60px",0,null))},446:function(t,e,n){"use strict";var r=n(13),o=n(25),a=n(32),i=n(23),l=[].sort,c=[1,2,3];r(r.P+r.F*(i(function(){c.sort(void 0)})||!i(function(){c.sort(null)})||!n(447)(l)),"Array",{sort:function(t){return void 0===t?l.call(a(this)):l.call(a(this),o(t))}})},447:function(t,e,n){"use strict";var r=n(23);t.exports=function(t,e){return!!t&&r(function(){e?t.call(null,function(){},1):t.call(null)})}},448:function(t,e,n){var r=function(t){"use strict";return t||(t={}),function(e,n){var r="desc"==t.direction?-1:1,o=-r,a=/(^-?[0-9]+(\.?[0-9]*)[df]?e?[0-9]?$|^0x[0-9a-f]+$|[0-9]+)/gi,i=/(^[ ]*|[ ]*$)/g,l=/(^([\w ]+,?[\w ]+)?[\w ]+,?[\w ]+\d+:\d+(:\d+)?[\w ]?|^\d{1,4}[\/\-]\d{1,4}[\/\-]\d{1,4}|^\w+, \w+ \d+, \d{4})/,c=/^0x[0-9a-f]+$/i,s=/^0/,u=function(e){var n=""+e;return t.caseSensitive?n:n.toLowerCase()},p=u(e).replace(i,"")||"",d=u(n).replace(i,"")||"",m=p.replace(a,"\0$1\0").replace(/\0$/,"").replace(/^\0/,"").split("\0"),f=d.replace(a,"\0$1\0").replace(/\0$/,"").replace(/^\0/,"").split("\0");if(!p&&!d)return 0;if(!p&&d)return r;if(p&&!d)return o;var h,g,y=parseInt(p.match(c))||1!=m.length&&p.match(l)&&Date.parse(p),b=parseInt(d.match(c))||y&&d.match(l)&&Date.parse(d)||null;if(b){if(y<b)return o;if(y>b)return r}for(var v=0,k=Math.max(m.length,f.length);v<k;v++){if(h=!(m[v]||"").match(s)&&parseFloat(m[v])||m[v]||0,g=!(f[v]||"").match(s)&&parseFloat(f[v])||f[v]||0,isNaN(h)!==isNaN(g))return isNaN(h)?r:o;if(typeof h!=typeof g&&(h+="",g+=""),h<g)return o;if(h>g)return r}return 0}};t.exports=r}}]);
//# sourceMappingURL=component---src-pages-index-js-af8e15817e4319879c84.js.map