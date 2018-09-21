(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{144:function(t,e,n){"use strict";n.r(e),n.d(e,"title",function(){return p}),n.d(e,"default",function(){return b});var r=n(8),o=n.n(r),a=n(0),i=n.n(a),u=n(357),c=n.n(u),l=n(154),s=n(4),f=n(159),d=n(162),p="Text to slug",m=l.c.input.withConfig({componentId:"fj8o2f-0"})(["background:",";border:1px solid ",";border-radius:",";font-size:.8em;margin-bottom:1em;padding:.5em 1em;outline:0;width:100%;transition:background-color ",",border-color ",";&:focus{background-color:",";border-color:",";}"],function(t){return t.theme.bgColor},function(t){return t.theme.lightGray},function(t){return t.theme.borderRadius},function(t){return t.theme.defaultTransition},function(t){return t.theme.defaultTransition},function(t){return t.theme.lightGray},function(t){return t.theme.secondaryColor}),h=l.c.p.withConfig({componentId:"fj8o2f-1"})(["font-family:",";font-weight:bold;"],function(t){return t.theme.monospaceFont}),g=function(t){function e(){for(var n,r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return(n=t.call.apply(t,[this].concat(o))||this).state={text:e.defaultText},n.shouldComponentUpdate=function(t,e){var r=e.text;return n.state.text!==r},n.handleChange=function(t){return n.setState({text:t.target.value})},n}return o()(e,t),e.prototype.render=function(){var t=this.state.text;return i.a.createElement("div",null,i.a.createElement("p",{style:{marginBottom:0}},"Enter your text:"),i.a.createElement(m,{autoFocus:!0,spellCheck:!0,onChange:this.handleChange,value:t}),i.a.createElement("p",{style:{marginBottom:0,marginTom:"1em"}},"Results:"),i.a.createElement(h,{className:"center"},c()(t)))},e}(a.Component);g.defaultText="Some nice title";var b=function(t){function e(){for(var e,n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))||this).shouldComponentUpdate=function(){return!1},e}return o()(e,t),e.prototype.render=function(){var t=this;return i.a.createElement(f.a,{title:p},function(e){var n=e.siteMetadata;return i.a.createElement(a.Fragment,null,i.a.createElement("h1",null,p),i.a.createElement(g,null),i.a.createElement(d.a,{href:t.props.location.href,title:n.title+": "+p}))})},e}(a.Component);b.propTypes={location:s.object.isRequired}},157:function(t,e,n){"use strict";n.r(e),n.d(e,"graphql",function(){return h}),n.d(e,"StaticQueryContext",function(){return p}),n.d(e,"StaticQuery",function(){return m});var r=n(0),o=n.n(r),a=n(4),i=n.n(a),u=n(155),c=n.n(u);n.d(e,"Link",function(){return c.a}),n.d(e,"withPrefix",function(){return u.withPrefix}),n.d(e,"navigate",function(){return u.navigate}),n.d(e,"push",function(){return u.push}),n.d(e,"replace",function(){return u.replace}),n.d(e,"navigateTo",function(){return u.navigateTo});var l=n(28);n.d(e,"waitForRouteChange",function(){return l.c});var s=n(158),f=n.n(s);n.d(e,"PageRenderer",function(){return f.a});var d=n(39);n.d(e,"parsePath",function(){return d.a});var p=o.a.createContext({}),m=function(t){return o.a.createElement(p.Consumer,null,function(e){return t.data||e[t.query]&&e[t.query].data?(t.render||t.children)(t.data?t.data.data:e[t.query].data):o.a.createElement("div",null,"Loading (StaticQuery)")})};function h(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}m.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},158:function(t,e,n){var r;t.exports=(r=n(160))&&r.default||r},159:function(t,e,n){"use strict";var r=n(161),o=n(0),a=n.n(o),i=n(171),u=n.n(i),c=n(154),l=n(157),s=n(4),f=n(156),d=n(163),p=n.n(d);function m(){var t=p()(["\n  html, body, #___gatsby, #___gatsby>div {\n    height: 100%;\n  }\n  div > p > .gatsby-resp-image-link {\n    pointer-events: none;\n    .gatsby-resp-image-wrapper {\n      border: 1px solid ",";\n      border-radius: ",";\n      max-width: 100% !important;\n      overflow: hidden;\n    }\n  }\n  .katex-display { margin: 0 0 .5em; }\n  .katex { font: 300 1.15em KaTeX_Main, serif; }\n  ","\n  .center { text-align: center; }\n"]);return m=function(){return t},t}var h=Object(c.b)(m(),function(t){return t.theme.lightGray},function(t){return t.theme.borderRadius},function(t){return function(t){return'\ncode[class*="language-"],\npre[class*="language-"] {\n\tcolor: '+t.bodyColor+";\n\tbackground: none;\n\tfont-family: "+t.monospaceFont+';\n\ttext-align: left;\n\twhite-space: pre;\n\tword-spacing: normal;\n\tword-break: normal;\n\tword-wrap: normal;\n\tline-height: 1.5;\n\thyphens: none;\n}\n\n/* Code blocks */\npre[class*="language-"] {\n\tpadding: 1em;\n\tmargin: .5em 0;\n\toverflow: auto;\n\tborder-radius: '+t.borderRadius+";\n\tborder: 1px solid "+t.gray+';\n}\n\n:not(pre) > code[class*="language-"],\npre[class*="language-"] {\n\tbackground: '+t.lightGray+';\n}\n\n/* Inline code */\n:not(pre) > code[class*="language-"] {\n\tpadding: .1em;\n\tborder-radius: '+t.borderRadius+";\n\twhite-space: normal;\n}\n\n.token.comment,\n.token.prolog,\n.token.doctype,\n.token.cdata {\n\tcolor: "+t.gray+";\n}\n\n.token.punctuation {\n\tcolor: "+t.bodyColor+";\n}\n\n.namespace {\n\topacity: .7;\n}\n\n.token.property,\n.token.tag,\n.token.constant,\n.token.symbol,\n.token.deleted {\n\tcolor: "+t.secondaryColor+";\n}\n\n.token.boolean,\n.token.number {\n\tcolor: "+t.secondaryColor+";\n}\n\n.token.selector,\n.token.attr-name,\n.token.string,\n.token.char,\n.token.builtin,\n.token.inserted {\n\tcolor: "+t.secondaryColor+";\n}\n\n.token.operator,\n.token.entity,\n.token.url,\n.language-css .token.string,\n.style .token.string,\n.token.variable {\n\tcolor: "+t.bodyColor+";\n}\n\n.token.atrule,\n.token.attr-value,\n.token.function,\n.token.class-name {\n\tcolor: "+t.secondaryColor+";\n}\n\n.token.keyword {\n\tcolor: "+t.secondaryColor+";\n}\n\n.token.regex,\n.token.important {\n\tcolor: "+t.secondaryColor+";\n}\n\n.token.important,\n.token.bold {\n\tfont-weight: bold;\n}\n.token.italic {\n\tfont-style: italic;\n}\n\n.token.entity {\n\tcursor: help;\n}\n"}(t.theme)}),g=c.c.main.withConfig({componentId:"sc-1ph75po-0"})(["background:",";a{position:relative;display:inline-block;background:transparent;color:",";font-weight:bold;text-decoration:none;>span{color:inherit;background-color:inherit;}&::after{content:'';"," "," background:",";transition:opacity ",",transform ",";opacity:0;transform:translateY(.2em);}&:hover::after{opacity:1;transform:none;}}"],function(t){return t.theme.bgColor},function(t){return t.theme.secondaryColor},Object(f.a)("absolute",null,null,"0","0"),Object(f.b)("1px","100%"),function(t){return t.theme.secondaryColor},function(t){return t.theme.defaultTransition},function(t){return t.theme.defaultTransition}),b=n(8),y=n.n(b),x=c.c.header.withConfig({componentId:"sc-116zvyz-0"})(["margin:0 auto;max-width:","px;a{text-decoration:none;}"],function(t){return t.theme.maxWidth}),v=c.c.ul.withConfig({componentId:"sc-116zvyz-1"})(["display:block;list-style-type:none;margin:0;text-align:right;position:relative;white-space:nowrap;width:100%;&::before,&::after{content:'';display:block;background:linear-gradient( to right,transparent,",",transparent );position:absolute;","}&::before{top:0;}&::after{bottom:0;}>li{display:inline-block;margin:0;padding:1em 0;&:not(:first-child){margin-left:1em;}}a{color:",";font-family:",";font-size:14px;text-transform:uppercase;transition:color ",";&:hover,&:active{color:",";}}"],function(t){return t.theme.lightGray},Object(f.b)("1px","100%"),function(t){return t.theme.gray},function(t){return t.theme.headerFont},function(t){return t.theme.defaultTransition},function(t){return t.theme.headerColor}),k=Object(c.c)(l.Link).withConfig({componentId:"sc-116zvyz-2"})(["display:block;text-align:center;h1{display:inline-block;margin:.5em;font-weight:900;font-size:22px;letter-spacing:1px;position:relative;transition:color ",";&::after{content:'';border-radius:50%;display:block;background:",";"," ","}&:hover,&:active{color:",";}}"],function(t){return t.theme.defaultTransition},function(t){return t.theme.secondaryColor},Object(f.a)("absolute","8px","-1em",null,null),Object(f.b)("10px"),function(t){return t.theme.secondaryColor}),E=function(t){function e(){for(var e,n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))||this).shouldComponentUpdate=function(){return!1},e}return y()(e,t),e.prototype.render=function(){return a.a.createElement("nav",null,a.a.createElement(x,null,a.a.createElement(k,{to:"/"},a.a.createElement("h1",null,this.props.title)),a.a.createElement(v,null,a.a.createElement("li",null,a.a.createElement(l.Link,{to:"/"},"Home")),a.a.createElement("li",null,a.a.createElement(l.Link,{to:"/tools"},"Tools")),a.a.createElement("li",null,a.a.createElement(l.Link,{to:"/about"},"About")))))},e}(o.Component);E.propTypes={title:s.string.isRequired};var w={bgColor:"white",bodyColor:"#333",borderRadius:"5px",defaultTransition:".3s ease-in-out",headerColor:"#181818",headerFont:"-apple-system,'BlinkMacSystemFont','Segoe UI','Roboto','Oxygen','Ubuntu','Cantarell','Fira Sans','Droid Sans','Helvetica Neue','sans-serif'",monospaceFont:"'Andale Mono', 'Ubuntu Mono', monospace",maxWidth:960,secondaryColor:"#e70808",smallFontSize:"10px",smallFontWeight:300,gray:"#7f7f7f",lightGray:"#e7e7e7",warningColor:"#f4ab55"};n.d(e,"a",function(){return j});var C=c.c.div.withConfig({componentId:"grcys-0"})(["background:",";margin:1em auto;"," max-width:","px;position:relative;"],function(t){return t.theme.bgColor},Object(f.b)("100%","100vw"),function(t){return t.theme.maxWidth});function j(t){var e=t.children,n=t.title,i=t.description;return a.a.createElement(c.a,{theme:w},a.a.createElement(l.StaticQuery,{query:"1327357206",render:function(t){var r=t.site.siteMetadata;return a.a.createElement(o.Fragment,null,a.a.createElement(u.a,null,a.a.createElement("html",{lang:"en",amp:!0}),a.a.createElement("title",null,n?r.title+": "+n:r.title),a.a.createElement("meta",{name:"description",content:i||r.description}),a.a.createElement("meta",{property:"og:title",content:n}),a.a.createElement("meta",{property:"og:description",content:i||r.description}),a.a.createElement("meta",{name:"twitter:card",content:"summary"}),a.a.createElement("meta",{name:"twitter:creator",content:"PEM___"})),a.a.createElement(E,{title:r.title}),a.a.createElement(g,null,a.a.createElement(C,null,e({siteMetadata:r}))),a.a.createElement(h,null))},data:r}))}j.propTypes={children:s.any.isRequired,description:s.string,title:s.string}},160:function(t,e,n){"use strict";n.r(e);var r=n(11),o=n.n(r),a=n(0),i=n.n(a),u=n(4),c=n.n(u),l=n(53),s=n(1),f=function(t){var e=t.location,n=s.default.getResourcesForPathnameSync(e.pathname);return i.a.createElement(l.a,o()({location:e,pageResources:n},n.json))};f.propTypes={location:c.a.shape({pathname:c.a.string.isRequired}).isRequired},e.default=f},161:function(t){t.exports={data:{site:{siteMetadata:{description:"Notes and posts about development, Math, ML and AI",discussShortName:"https-pem-github-io",siteUrl:"https://pem--.github.io",title:"PEM's blog"}}}}},162:function(t,e,n){"use strict";n.d(e,"a",function(){return b});n(79);var r=n(8),o=n.n(r),a=n(0),i=n.n(a),u=n(154),c=n(381),l=n(382),s=n(383),f=n(384),d=n(385),p=n(386),m=n(156),h=n(4),g=u.c.div.withConfig({componentId:"sc-199atao-0"})(["display:flex;justify-content:center;margin:2em 0;position:relative;&::before,&::after{content:'';display:block;background:linear-gradient( to right,transparent,",",transparent );position:absolute;","}&::before{top:-1em;}&::after{bottom:-1em;}>*{cursor:pointer;flex:0 0 auto;outline:0;&:not(:first-of-type){margin-left:1.5em;}}"],function(t){return t.theme.lightGray},Object(m.b)("1px","100%")),b=function(t){function e(){for(var e,n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))||this).shouldComponentUpdate=function(t){var n=t.href,r=t.title;return e.props.href!==n||e.props.title!==r},e}return o()(e,t),e.prototype.render=function(){var t={url:this.props.href};return i.a.createElement(g,null,i.a.createElement(c.a,Object.assign({title:this.props.title},t),i.a.createElement(l.a,e.shareIconProps)),i.a.createElement(s.a,Object.assign({title:this.props.title},t),i.a.createElement(f.a,e.shareIconProps)),i.a.createElement(d.a,Object.assign({subject:this.props.title},t),i.a.createElement(p.a,e.shareIconProps)))},e}(a.Component);b.shareIconProps={round:!0,size:32},b.propTypes={href:h.string.isRequired,title:h.string.isRequired}},165:function(t,e,n){var r=n(183).Symbol;t.exports=r},183:function(t,e,n){var r=n(184),o="object"==typeof self&&self&&self.Object===Object&&self,a=r||o||Function("return this")();t.exports=a},184:function(t,e,n){(function(e){var n="object"==typeof e&&e&&e.Object===Object&&e;t.exports=n}).call(this,n(170))},185:function(t,e){var n=Array.isArray;t.exports=n},186:function(t,e,n){var r=n(165),o=n(187),a=n(188),i="[object Null]",u="[object Undefined]",c=r?r.toStringTag:void 0;t.exports=function(t){return null==t?void 0===t?u:i:c&&c in Object(t)?o(t):a(t)}},187:function(t,e,n){var r=n(165),o=Object.prototype,a=o.hasOwnProperty,i=o.toString,u=r?r.toStringTag:void 0;t.exports=function(t){var e=a.call(t,u),n=t[u];try{t[u]=void 0;var r=!0}catch(t){}var o=i.call(t);return r&&(e?t[u]=n:delete t[u]),o}},188:function(t,e){var n=Object.prototype.toString;t.exports=function(t){return n.call(t)}},189:function(t,e){t.exports=function(t){return null!=t&&"object"==typeof t}},263:function(t,e,n){var r=n(363);t.exports=function(t){return null==t?"":r(t)}},357:function(t,e,n){var r=n(358)(function(t,e,n){return t+(n?"-":"")+e.toLowerCase()});t.exports=r},358:function(t,e,n){var r=n(359),o=n(360),a=n(366),i=RegExp("['’]","g");t.exports=function(t){return function(e){return r(a(o(e).replace(i,"")),t,"")}}},359:function(t,e){t.exports=function(t,e,n,r){var o=-1,a=null==t?0:t.length;for(r&&a&&(n=t[++o]);++o<a;)n=e(n,t[o],o,t);return n}},360:function(t,e,n){var r=n(361),o=n(263),a=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,i=RegExp("[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]","g");t.exports=function(t){return(t=o(t))&&t.replace(a,r).replace(i,"")}},361:function(t,e,n){var r=n(362)({"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","Ç":"C","ç":"c","Ð":"D","ð":"d","È":"E","É":"E","Ê":"E","Ë":"E","è":"e","é":"e","ê":"e","ë":"e","Ì":"I","Í":"I","Î":"I","Ï":"I","ì":"i","í":"i","î":"i","ï":"i","Ñ":"N","ñ":"n","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","Ù":"U","Ú":"U","Û":"U","Ü":"U","ù":"u","ú":"u","û":"u","ü":"u","Ý":"Y","ý":"y","ÿ":"y","Æ":"Ae","æ":"ae","Þ":"Th","þ":"th","ß":"ss","Ā":"A","Ă":"A","Ą":"A","ā":"a","ă":"a","ą":"a","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","ć":"c","ĉ":"c","ċ":"c","č":"c","Ď":"D","Đ":"D","ď":"d","đ":"d","Ē":"E","Ĕ":"E","Ė":"E","Ę":"E","Ě":"E","ē":"e","ĕ":"e","ė":"e","ę":"e","ě":"e","Ĝ":"G","Ğ":"G","Ġ":"G","Ģ":"G","ĝ":"g","ğ":"g","ġ":"g","ģ":"g","Ĥ":"H","Ħ":"H","ĥ":"h","ħ":"h","Ĩ":"I","Ī":"I","Ĭ":"I","Į":"I","İ":"I","ĩ":"i","ī":"i","ĭ":"i","į":"i","ı":"i","Ĵ":"J","ĵ":"j","Ķ":"K","ķ":"k","ĸ":"k","Ĺ":"L","Ļ":"L","Ľ":"L","Ŀ":"L","Ł":"L","ĺ":"l","ļ":"l","ľ":"l","ŀ":"l","ł":"l","Ń":"N","Ņ":"N","Ň":"N","Ŋ":"N","ń":"n","ņ":"n","ň":"n","ŋ":"n","Ō":"O","Ŏ":"O","Ő":"O","ō":"o","ŏ":"o","ő":"o","Ŕ":"R","Ŗ":"R","Ř":"R","ŕ":"r","ŗ":"r","ř":"r","Ś":"S","Ŝ":"S","Ş":"S","Š":"S","ś":"s","ŝ":"s","ş":"s","š":"s","Ţ":"T","Ť":"T","Ŧ":"T","ţ":"t","ť":"t","ŧ":"t","Ũ":"U","Ū":"U","Ŭ":"U","Ů":"U","Ű":"U","Ų":"U","ũ":"u","ū":"u","ŭ":"u","ů":"u","ű":"u","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","Ż":"Z","Ž":"Z","ź":"z","ż":"z","ž":"z","Ĳ":"IJ","ĳ":"ij","Œ":"Oe","œ":"oe","ŉ":"'n","ſ":"s"});t.exports=r},362:function(t,e){t.exports=function(t){return function(e){return null==t?void 0:t[e]}}},363:function(t,e,n){var r=n(165),o=n(364),a=n(185),i=n(365),u=1/0,c=r?r.prototype:void 0,l=c?c.toString:void 0;t.exports=function t(e){if("string"==typeof e)return e;if(a(e))return o(e,t)+"";if(i(e))return l?l.call(e):"";var n=e+"";return"0"==n&&1/e==-u?"-0":n}},364:function(t,e){t.exports=function(t,e){for(var n=-1,r=null==t?0:t.length,o=Array(r);++n<r;)o[n]=e(t[n],n,t);return o}},365:function(t,e,n){var r=n(186),o=n(189),a="[object Symbol]";t.exports=function(t){return"symbol"==typeof t||o(t)&&r(t)==a}},366:function(t,e,n){var r=n(367),o=n(368),a=n(263),i=n(369);t.exports=function(t,e,n){return t=a(t),void 0===(e=n?void 0:e)?o(t)?i(t):r(t):t.match(e)||[]}},367:function(t,e){var n=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;t.exports=function(t){return t.match(n)||[]}},368:function(t,e){var n=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;t.exports=function(t){return n.test(t)}},369:function(t,e){var n="\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",r="["+n+"]",o="\\d+",a="[\\u2700-\\u27bf]",i="[a-z\\xdf-\\xf6\\xf8-\\xff]",u="[^\\ud800-\\udfff"+n+o+"\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde]",c="(?:\\ud83c[\\udde6-\\uddff]){2}",l="[\\ud800-\\udbff][\\udc00-\\udfff]",s="[A-Z\\xc0-\\xd6\\xd8-\\xde]",f="(?:"+i+"|"+u+")",d="(?:"+s+"|"+u+")",p="(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?",m="[\\ufe0e\\ufe0f]?"+p+("(?:\\u200d(?:"+["[^\\ud800-\\udfff]",c,l].join("|")+")[\\ufe0e\\ufe0f]?"+p+")*"),h="(?:"+[a,c,l].join("|")+")"+m,g=RegExp([s+"?"+i+"+(?:['’](?:d|ll|m|re|s|t|ve))?(?="+[r,s,"$"].join("|")+")",d+"+(?:['’](?:D|LL|M|RE|S|T|VE))?(?="+[r,s+f,"$"].join("|")+")",s+"?"+f+"+(?:['’](?:d|ll|m|re|s|t|ve))?",s+"+(?:['’](?:D|LL|M|RE|S|T|VE))?","\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])","\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",o,h].join("|"),"g");t.exports=function(t){return t.match(g)||[]}}}]);
//# sourceMappingURL=component---src-pages-tools-text-to-slug-js-74b533b44a76570b6070.js.map