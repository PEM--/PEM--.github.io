(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{152:function(e,n,t){"use strict";t.r(n),t.d(n,"default",function(){return l}),t.d(n,"query",function(){return d});var o=t(81),r=t.n(o),i=t(0),a=t.n(i),u=t(170),c=t.n(u),s=t(161);function l(e){var n=e.data,t=n.markdownRemark,o=n.site,i=e.location,u=(r()(e,["data","location"]),{config:{identifier:t.id,title:t.frontmatter.title,url:i.href},shortname:o.siteMetadata.title});return a.a.createElement(s.a,null,a.a.createElement("h1",null,t.frontmatter.title),a.a.createElement("p",null,a.a.createElement(c.a.CommentCount,u,"comments")),a.a.createElement("div",{dangerouslySetInnerHTML:{__html:t.html}}),a.a.createElement(c.a.DiscussionEmbed,u))}var d="2094026122"},160:function(e){e.exports={data:{site:{siteMetadata:{title:"PEM's blog"}}}}},161:function(e,n,t){"use strict";var o=t(157),r=t.n(o),i=t(160),a=t(0),u=t.n(a),c=t(162),s=t.n(c),l=t(158),d=t(43),f=t(2),m=t(159);function p(){var e=r()(["\n  html, body, #___gatsby, #___gatsby>div {\n    height: 100%;\n  }\n"]);return p=function(){return e},e}var h=Object(l.b)(p());function b(){var e=r()(["\n  background: ",";\n  a {\n    position: relative;\n    display: inline-block;\n    background: transparent;\n    color: ",";\n    font-weight: bold;\n    text-decoration: none;\n    >span {\n      color: inherit;\n      background-color: inherit;\n    }\n    &::after {\n      content: '';\n      ","\n      ","\n      background: ",";\n      transition:\n        opacity ",",\n        transform ",";\n      opacity: 0;\n      transform: translateY(.2em);\n    }\n    &:hover::after {\n      opacity: 1;\n      transform: none;\n    }\n  }\n"]);return b=function(){return e},e}var y=l.c.main(b(),function(e){return e.theme.bgColor},function(e){return e.theme.secondaryColor},Object(m.a)("absolute",null,null,"0","0"),Object(m.b)("1px","100%"),function(e){return e.theme.secondaryColor},function(e){return e.theme.defaultTransition},function(e){return e.theme.defaultTransition});function v(){var e=r()(["\n  display: block;\n  text-align: center;\n  h1 {\n    display: inline-block;\n    margin: .5em;\n    font-weight: 900;\n    font-size: 22px;\n    letter-spacing: 1px;\n    position: relative;\n    transition: color ",";\n    &::after {\n      content: '';\n      border-radius: 50%;\n      display: block;\n      background: ",";\n      ","\n      ","\n    }\n    &:hover, &:active {\n      color: ",";\n    }\n  }\n"]);return v=function(){return e},e}function w(){var e=r()(["\n  display: block;\n  list-style-type: none;\n  margin: 0;\n  text-align: right;\n  position: relative;\n  white-space: nowrap;\n  width: 100%;\n  &::before {\n    content: '';\n    display: block;\n    background: linear-gradient(\n      to right,\n      transparent,\n      ",",\n      transparent\n    );\n    ","\n    ","\n  }\n  >li, a {\n    color: ",";\n    font-family: ",";\n    font-size: 14px;\n    margin: 0;\n    padding: 1em 0;\n    text-transform: uppercase;\n    transition: color ",";\n    &:not(:first-child) { margin-left: 1em; }\n    &:hover, &:active {\n      color: ",";\n    }\n  }\n"]);return w=function(){return e},e}function g(){var e=r()(["\n  margin: 0 auto;\n  max-width: ","px;\n  a { text-decoration: none; }\n"]);return g=function(){return e},e}function E(){var e=r()(["\n  border-bottom: 1px solid ",";\n"]);return E=function(){return e},e}var C=l.c.nav(E(),function(e){return e.theme.lightGray}),_=l.c.header(g(),function(e){return e.theme.maxWidth}),k=l.c.ul(w(),function(e){return e.theme.lightGray},Object(m.a)("absolute",0,null,null,null),Object(m.b)("1px","100%"),function(e){return e.theme.gray},function(e){return e.theme.headerFont},function(e){return e.theme.defaultTransition},function(e){return e.theme.headerColor}),S=Object(l.c)(d.Link)(v(),function(e){return e.theme.defaultTransition},function(e){return e.theme.secondaryColor},Object(m.a)("absolute","10px","-1em",null,null),Object(m.b)("10px"),function(e){return e.theme.secondaryColor});function O(e){var n=e.title;return u.a.createElement(C,null,u.a.createElement(_,null,u.a.createElement(S,{to:"/"},u.a.createElement("h1",null,n)),u.a.createElement(k,null,u.a.createElement("li",null,u.a.createElement(d.Link,{to:"/about"},"About")))))}var j={bodyColor:"hsla(0,0%,0%,.8)",bgColor:"white",defaultTransition:".3s ease-in-out",headerColor:"hsla(0,0%,0%,.9)",headerFont:"-apple-system,'BlinkMacSystemFont','Segoe UI','Roboto','Oxygen','Ubuntu','Cantarell','Fira Sans','Droid Sans','Helvetica Neue','sans-serif'",maxWidth:960,secondaryColor:"#ff0000",gray:"hsla(0,0%,0%,.5)",lightGray:"hsla(0,0%,0%,.1)"};function I(){var e=r()(["\n  background: ",";\n  margin: 1em auto;\n  ","\n  max-width: ","px;\n"]);return I=function(){return e},e}var D=l.c.div(I(),function(e){return e.theme.bgColor},Object(m.b)("100%","100vw"),function(e){return e.theme.maxWidth}),x=function(e){var n=e.children;return u.a.createElement(l.a,{theme:j},u.a.createElement(d.StaticQuery,{query:"3892401927",render:function(e){var t=e.site.siteMetadata.title;return u.a.createElement(a.Fragment,null,u.a.createElement(s.a,{title:t,meta:[{name:"description",content:"Sample"},{name:"keywords",content:"sample, something"}]}),u.a.createElement(O,{title:t}),u.a.createElement(y,null,u.a.createElement(D,null,n)),u.a.createElement(h,null))},data:i}))};x.propTypes={children:f.any.isRequired};n.a=x},163:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.insertScript=function(e,n,t){var o=window.document.createElement("script");return o.async=!0,o.src=e,o.id=n,t.appendChild(o),o},n.removeScript=function(e,n){var t=window.document.getElementById(e);t&&n.removeChild(t)},n.debounce=function(e,n,t){var o=void 0;return function(){var r=this,i=arguments,a=t&&!o;window.clearTimeout(o),o=setTimeout(function(){o=null,t||e.apply(r,i)},n),a&&e.apply(r,i)}}},170:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.DiscussionEmbed=n.CommentEmbed=n.CommentCount=void 0;var o=t(171),r=t(172),i=t(173);n.CommentCount=o.CommentCount,n.CommentEmbed=r.CommentEmbed,n.DiscussionEmbed=i.DiscussionEmbed;var a={CommentCount:o.CommentCount,CommentEmbed:r.CommentEmbed,DiscussionEmbed:i.DiscussionEmbed};n.default=a},171:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.CommentCount=void 0;var o,r=function(){function e(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(n,t,o){return t&&e(n.prototype,t),o&&e(n,o),n}}(),i=t(0),a=(o=i)&&o.__esModule?o:{default:o},u=t(163);var c=(0,u.debounce)(function(){window.DISQUSWIDGETS&&window.DISQUSWIDGETS.getCount({reset:!0})},300,!1);n.CommentCount=function(e){function n(){return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),function(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}(n,a.default.Component),r(n,[{key:"componentDidMount",value:function(){this.loadInstance()}},{key:"shouldComponentUpdate",value:function(e){if(this.props.shortname!==e.shortname)return!0;var n=e.config,t=this.props.config;return n.url!==t.url&&n.identifier!==t.identifier}},{key:"componentWillUpdate",value:function(e){this.props.shortname!==e.shortname&&this.cleanInstance()}},{key:"componentDidUpdate",value:function(){this.loadInstance()}},{key:"loadInstance",value:function(){var e=window.document;e.getElementById("dsq-count-scr")?c():(0,u.insertScript)("https://"+this.props.shortname+".disqus.com/count.js","dsq-count-scr",e.body)}},{key:"cleanInstance",value:function(){var e=window.document.body;(0,u.removeScript)("dsq-count-scr",e),window.DISQUSWIDGETS=void 0}},{key:"render",value:function(){return a.default.createElement("span",{className:"disqus-comment-count","data-disqus-identifier":this.props.config.identifier,"data-disqus-url":this.props.config.url},this.props.children)}}]),n}()},172:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.CommentEmbed=void 0;var o,r=function(){function e(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(n,t,o){return t&&e(n.prototype,t),o&&e(n,o),n}}(),i=t(0),a=(o=i)&&o.__esModule?o:{default:o};(n.CommentEmbed=function(e){function n(){return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),function(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}(n,a.default.Component),r(n,[{key:"getSrc",value:function(){return"https://embed.disqus.com/p/"+Number(this.props.commentId).toString(36)+"?p="+(this.props.showParentComment?"1":"0")+"&m="+(this.props.showMedia?"1":"0")}},{key:"render",value:function(){return a.default.createElement("iframe",{src:this.getSrc(),width:this.props.width,height:this.props.height,seamless:"seamless",scrolling:"no",frameBorder:"0"})}}]),n}()).defaultProps={showMedia:!0,showParentComment:!0,width:420,height:320}},173:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.DiscussionEmbed=void 0;var o,r=function(){function e(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(n,t,o){return t&&e(n.prototype,t),o&&e(n,o),n}}(),i=t(0),a=(o=i)&&o.__esModule?o:{default:o},u=t(163);n.DiscussionEmbed=function(e){function n(){return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),function(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}(n,a.default.Component),r(n,[{key:"componentWillMount",value:function(){"undefined"!=typeof window&&window.disqus_shortname&&window.disqus_shortname!==this.props.shortname&&this.cleanInstance()}},{key:"componentDidMount",value:function(){this.loadInstance()}},{key:"shouldComponentUpdate",value:function(e){if(this.props.shortname!==e.shortname)return!0;var n=e.config,t=this.props.config;return n.url!==t.url&&n.identifier!==t.identifier}},{key:"componentWillUpdate",value:function(e){this.props.shortname!==e.shortname&&this.cleanInstance()}},{key:"componentDidUpdate",value:function(){this.loadInstance()}},{key:"loadInstance",value:function(){var e=window.document;window&&window.DISQUS&&e.getElementById("dsq-embed-scr")?window.DISQUS.reset({reload:!0,config:this.getDisqusConfig(this.props.config)}):(window.disqus_config=this.getDisqusConfig(this.props.config),window.disqus_shortname=this.props.shortname,(0,u.insertScript)("https://"+this.props.shortname+".disqus.com/embed.js","dsq-embed-scr",e.body))}},{key:"cleanInstance",value:function(){var e=window.document;(0,u.removeScript)("dsq-embed-scr",e.body),window&&window.DISQUS&&window.DISQUS.reset({});try{delete window.DISQUS}catch(e){window.DISQUS=void 0}var n=e.getElementById("disqus_thread");if(n)for(;n.hasChildNodes();)n.removeChild(n.firstChild)}},{key:"getDisqusConfig",value:function(e){return function(){this.page.identifier=e.identifier,this.page.url=e.url,this.page.title=e.title,this.callbacks.onNewComment=[e.onNewComment]}}},{key:"render",value:function(){return a.default.createElement("div",{id:"disqus_thread"})}}]),n}()}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-6cba110bab46bf7d5c62.js.map