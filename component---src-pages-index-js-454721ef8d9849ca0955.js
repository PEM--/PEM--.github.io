(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{151:function(e,t,n){"use strict";n.r(t);var r=n(11),a=n.n(r),o=(n(80),n(54),n(372),n(0)),i=n.n(o),l=n(373),c=n.n(l),u=n(163),s=(n(79),n(192)),p=n.n(s),d=n(8),m=n.n(d),f=n(374),h=n.n(f),g=n(154),y=n(156),b=n(4),v=n(155),E=n(187),w=g.c.li.withConfig({componentId:"sc-16zuvtl-0"})(["border:1px solid ",";border-radius:5px;transition:border-color ",";&:not(:first-of-type){margin-top:1em;}a{display:block;padding:1em;&::after{content:none;}}.title{color:",";font-size:1.2em;font-family:",";margin-bottom:.5em;position:relative;width:calc(100% - 80px);small{display:block;font-size:.6em;font-style:italic;font-weight:300;"," text-align:right;}}.description{color:",";font-size:.9em;font-weight:300;}.continue{color:",";font-size:.8em;font-weight:300;transition:color ",";}&:active,&:hover{border-color:",";.continue{color:",";}}"],function(e){return e.theme.lightGray},function(e){return e.theme.defaultTransition},function(e){return e.theme.headerColor},function(e){return e.theme.headerFont},Object(v.a)("absolute",0,"-80px",null,null),function(e){return e.theme.bodyColor},function(e){return e.theme.gray},function(e){return e.theme.defaultTransition},function(e){return e.theme.gray},function(e){return e.theme.secondaryColor}),x=function(e){function t(){for(var t,n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return(t=e.call.apply(e,[this].concat(r))||this).shoudComponentUpdate=function(){return!1},t}return m()(t,e),t.prototype.render=function(){var e=this.props,t=e.date,n=e.description,r=e.slug,a=e.title;return i.a.createElement(w,null,i.a.createElement(y.Link,{to:"blog/"+r},i.a.createElement("p",{className:"title"},a,i.a.createElement("small",null,h.a.format(t,"DD/MM/YY"))),i.a.createElement("p",{className:"description"},n),i.a.createElement("p",{className:"continue"},"Continue reading ⤅")))},t}(o.Component);x.propTypes={date:b.string.isRequired,description:b.string.isRequired,slug:b.string.isRequired,title:b.string.isRequired};var C=g.c.ul.withConfig({componentId:"sc-16zuvtl-1"})(["list-style:none;margin:0;margin-bottom:3em;"]),k=function(e){function t(){for(var t,n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return(t=e.call.apply(e,[this].concat(r))||this).shoudComponentUpdate=function(){return!1},t}return m()(t,e),t.prototype.render=function(){var e=this.props.posts;return i.a.createElement("nav",null,i.a.createElement(E.a,null,"List of posts ",i.a.createElement("small",null,e.length," posts")),i.a.createElement(C,null,e.map(function(e){var t=e.id,n=p()(e,["id"]);return i.a.createElement(x,Object.assign({key:t},n))})))},t}(o.Component);k.propTypes={posts:Object(b.arrayOf)(Object(b.shape)(a()({id:b.string.isRequired},x.propTypes))).isRequired};var q=n(166);n.d(t,"default",function(){return O}),n.d(t,"query",function(){return R});var j=c()();function O(e){var t=e.data.allMdx.edges.filter(function(e){return"blog"===e.node.frontmatter.type}).map(function(e){var t=e.node;return a()({},t.frontmatter,{id:t.id})}).sort(function(e,t){var n=e.date,r=t.date;return j(n,r)}).reverse();return i.a.createElement(u.a,null,function(e){var n=e.siteMetadata;return i.a.createElement(o.Fragment,null,i.a.createElement(k,{posts:t}),i.a.createElement(q.a,{href:n.siteUrl,title:n.title}))})}var R="4223340479"},156:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return h}),n.d(t,"StaticQueryContext",function(){return m}),n.d(t,"StaticQuery",function(){return f});var r=n(0),a=n.n(r),o=n(4),i=n.n(o),l=n(153),c=n.n(l);n.d(t,"Link",function(){return c.a}),n.d(t,"withPrefix",function(){return l.withPrefix}),n.d(t,"navigate",function(){return l.navigate}),n.d(t,"push",function(){return l.push}),n.d(t,"replace",function(){return l.replace}),n.d(t,"navigateTo",function(){return l.navigateTo});var u=n(28);n.d(t,"waitForRouteChange",function(){return u.c});var s=n(157),p=n.n(s);n.d(t,"PageRenderer",function(){return p.a});var d=n(39);n.d(t,"parsePath",function(){return d.a});var m=a.a.createContext({}),f=function(e){return a.a.createElement(m.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):a.a.createElement("div",null,"Loading (StaticQuery)")})};function h(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}f.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},157:function(e,t,n){var r;e.exports=(r=n(161))&&r.default||r},161:function(e,t,n){"use strict";n.r(t);var r=n(11),a=n.n(r),o=n(0),i=n.n(o),l=n(4),c=n.n(l),u=n(53),s=n(1),p=function(e){var t=e.location,n=s.default.getResourcesForPathnameSync(t.pathname);return i.a.createElement(u.a,a()({location:t,pageResources:n},n.json))};p.propTypes={location:c.a.shape({pathname:c.a.string.isRequired}).isRequired},t.default=p},162:function(e){e.exports={data:{site:{siteMetadata:{description:"Notes and posts about development, Math, ML and AI",discussShortName:"https-pem-github-io",siteUrl:"https://pem--.github.io",title:"PEM's blog"}}}}},163:function(e,t,n){"use strict";var r=n(162),a=n(0),o=n.n(a),i=n(179),l=n.n(i),c=n(154),u=n(156),s=n(4),p=n(155),d=n(180),m=n.n(d);function f(){var e=m()(["\n  html, body, #___gatsby, #___gatsby>div {\n    height: 100%;\n  }\n  div > p > .gatsby-resp-image-link {\n    pointer-events: none;\n    .gatsby-resp-image-wrapper {\n      border: 1px solid ",";\n      border-radius: 5px;\n      max-width: 100% !important;\n      overflow: hidden;\n    }\n  }\n"]);return f=function(){return e},e}var h=Object(c.b)(f(),function(e){return e.theme.lightGray}),g=c.c.main.withConfig({componentId:"sc-1ph75po-0"})(["background:",";a{position:relative;display:inline-block;background:transparent;color:",";font-weight:bold;text-decoration:none;>span{color:inherit;background-color:inherit;}&::after{content:'';"," "," background:",";transition:opacity ",",transform ",";opacity:0;transform:translateY(.2em);}&:hover::after{opacity:1;transform:none;}}"],function(e){return e.theme.bgColor},function(e){return e.theme.secondaryColor},Object(p.a)("absolute",null,null,"0","0"),Object(p.b)("1px","100%"),function(e){return e.theme.secondaryColor},function(e){return e.theme.defaultTransition},function(e){return e.theme.defaultTransition}),y=n(8),b=n.n(y),v=c.c.header.withConfig({componentId:"sc-116zvyz-0"})(["margin:0 auto;max-width:","px;a{text-decoration:none;}"],function(e){return e.theme.maxWidth}),E=c.c.ul.withConfig({componentId:"sc-116zvyz-1"})(["display:block;list-style-type:none;margin:0;text-align:right;position:relative;white-space:nowrap;width:100%;&::before,&::after{content:'';display:block;background:linear-gradient( to right,transparent,",",transparent );position:absolute;","}&::before{top:0;}&::after{bottom:0;}>li{display:inline-block;margin:0;padding:1em 0;&:not(:first-child){margin-left:1em;}}a{color:",";font-family:",";font-size:14px;text-transform:uppercase;transition:color ",";&:hover,&:active{color:",";}}"],function(e){return e.theme.lightGray},Object(p.b)("1px","100%"),function(e){return e.theme.gray},function(e){return e.theme.headerFont},function(e){return e.theme.defaultTransition},function(e){return e.theme.headerColor}),w=Object(c.c)(u.Link).withConfig({componentId:"sc-116zvyz-2"})(["display:block;text-align:center;h1{display:inline-block;margin:.5em;font-weight:900;font-size:22px;letter-spacing:1px;position:relative;transition:color ",";&::after{content:'';border-radius:50%;display:block;background:",";"," ","}&:hover,&:active{color:",";}}"],function(e){return e.theme.defaultTransition},function(e){return e.theme.secondaryColor},Object(p.a)("absolute","8px","-1em",null,null),Object(p.b)("10px"),function(e){return e.theme.secondaryColor}),x=function(e){function t(){for(var t,n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return(t=e.call.apply(e,[this].concat(r))||this).shouldComponentUpdate=function(){return!1},t}return b()(t,e),t.prototype.render=function(){return o.a.createElement("nav",null,o.a.createElement(v,null,o.a.createElement(w,{to:"/"},o.a.createElement("h1",null,this.props.title)),o.a.createElement(E,null,o.a.createElement("li",null,o.a.createElement(u.Link,{to:"/"},"Home")),o.a.createElement("li",null,o.a.createElement(u.Link,{to:"/about"},"About")))))},t}(a.Component);x.propTypes={title:s.string.isRequired};var C={bodyColor:"hsla(0,0%,0%,.8)",bgColor:"white",defaultTransition:".3s ease-in-out",headerColor:"hsla(0,0%,0%,.9)",headerFont:"-apple-system,'BlinkMacSystemFont','Segoe UI','Roboto','Oxygen','Ubuntu','Cantarell','Fira Sans','Droid Sans','Helvetica Neue','sans-serif'",maxWidth:960,secondaryColor:"#ff0000",gray:"hsla(0,0%,0%,.5)",lightGray:"hsla(0,0%,0%,.1)"};n.d(t,"a",function(){return q});var k=c.c.div.withConfig({componentId:"grcys-0"})(["background:",";margin:1em auto;"," max-width:","px;position:relative;"],function(e){return e.theme.bgColor},Object(p.b)("100%","100vw"),function(e){return e.theme.maxWidth});function q(e){var t=e.children,n=e.title,i=e.description;return o.a.createElement(c.a,{theme:C},o.a.createElement(u.StaticQuery,{query:"1327357206",render:function(e){var r=e.site.siteMetadata;return o.a.createElement(a.Fragment,null,o.a.createElement(l.a,null,o.a.createElement("html",{lang:"en",amp:!0}),o.a.createElement("title",null,n?r.title+": "+n:r.title),o.a.createElement("meta",{name:"description",content:i||r.description}),o.a.createElement("meta",{property:"og:title",content:n}),o.a.createElement("meta",{property:"og:description",content:i||r.description}),o.a.createElement("meta",{name:"twitter:card",content:"summary"}),o.a.createElement("meta",{name:"twitter:creator",content:"PEM___"})),o.a.createElement(x,{title:r.title}),o.a.createElement(g,null,o.a.createElement(k,null,t({siteMetadata:r}))),o.a.createElement(h,null))},data:r}))}q.propTypes={children:s.any.isRequired,description:s.string,title:s.string}},166:function(e,t,n){"use strict";n.d(t,"a",function(){return y});n(79);var r=n(8),a=n.n(r),o=n(0),i=n.n(o),l=n(154),c=n(488),u=n(489),s=n(490),p=n(491),d=n(492),m=n(493),f=n(155),h=n(4),g=l.c.div.withConfig({componentId:"sc-199atao-0"})(["display:flex;justify-content:center;margin:2em 0;position:relative;&::before,&::after{content:'';display:block;background:linear-gradient( to right,transparent,",",transparent );position:absolute;","}&::before{top:-1em;}&::after{bottom:-1em;}>*{cursor:pointer;flex:0 0 auto;outline:0;&:not(:first-of-type){margin-left:1.5em;}}"],function(e){return e.theme.lightGray},Object(f.b)("1px","100%")),y=function(e){function t(){for(var t,n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return(t=e.call.apply(e,[this].concat(r))||this).shouldComponentUpdate=function(e){var n=e.href,r=e.title;return t.props.href!==n||t.props.title!==r},t}return a()(t,e),t.prototype.render=function(){var e={url:this.props.href};return i.a.createElement(g,null,i.a.createElement(c.a,Object.assign({title:this.props.title},e),i.a.createElement(u.a,t.shareIconProps)),i.a.createElement(s.a,Object.assign({title:this.props.title},e),i.a.createElement(p.a,t.shareIconProps)),i.a.createElement(d.a,Object.assign({subject:this.props.title},e),i.a.createElement(m.a,t.shareIconProps)))},t}(o.Component);y.shareIconProps={round:!0,size:32},y.propTypes={href:h.string.isRequired,title:h.string.isRequired}},187:function(e,t,n){"use strict";var r=n(154),a=n(155);t.a=r.c.h1.withConfig({componentId:"sc-1szmnsq-0"})(["position:relative;width:calc(100% - 60px);small{color:",";display:block;font-size:.4em;font-style:italic;"," text-align:right;width:60px;}"],function(e){return e.theme.lightGray},Object(a.a)("absolute",null,"-60px",0,null))}}]);
//# sourceMappingURL=component---src-pages-index-js-454721ef8d9849ca0955.js.map