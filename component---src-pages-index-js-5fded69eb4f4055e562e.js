(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{148:function(t,e,n){"use strict";n.r(e),n.d(e,"default",function(){return h}),n.d(e,"query",function(){return g});var r=n(11),a=n.n(r),o=(n(79),n(54),n(270),n(0)),i=n.n(o),l=n(271),c=n.n(l),u=n(373),s=n.n(u),d=n(156),m=n(173),f=n(162),p=s()();function h(t){var e=t.data.allMdx.edges.filter(function(t){return"blog"===t.node.frontmatter.type}).map(function(t){var e=t.node;return a()({},e.frontmatter,{id:e.id})}).sort(function(t,e){var n=t.date,r=e.date;return p(n,r)}).reverse();return i.a.createElement(f.a,null,function(){return i.a.createElement(o.Fragment,null,i.a.createElement(m.a,null,"List of posts ",i.a.createElement("small",null,e.length," posts")),i.a.createElement("nav",null,i.a.createElement("ul",null,e.map(function(t){var e=t.date,n=(t.description,t.id),r=t.slug,a=t.title;return i.a.createElement("li",{key:n},i.a.createElement(d.Link,{to:"blog/"+r},i.a.createElement("p",null,a," - ",c.a.format(e,"DD/MM/YY"))))}))))})}var g="4223340479"},156:function(t,e,n){"use strict";n.r(e),n.d(e,"graphql",function(){return h}),n.d(e,"StaticQueryContext",function(){return f}),n.d(e,"StaticQuery",function(){return p});var r=n(0),a=n.n(r),o=n(4),i=n.n(o),l=n(153),c=n.n(l);n.d(e,"Link",function(){return c.a}),n.d(e,"withPrefix",function(){return l.withPrefix}),n.d(e,"navigate",function(){return l.navigate}),n.d(e,"push",function(){return l.push}),n.d(e,"replace",function(){return l.replace}),n.d(e,"navigateTo",function(){return l.navigateTo});var u=n(28);n.d(e,"waitForRouteChange",function(){return u.c});var s=n(157),d=n.n(s);n.d(e,"PageRenderer",function(){return d.a});var m=n(39);n.d(e,"parsePath",function(){return m.a});var f=a.a.createContext({}),p=function(t){return a.a.createElement(f.Consumer,null,function(e){return t.data||e[t.query]&&e[t.query].data?(t.render||t.children)(t.data?t.data.data:e[t.query].data):a.a.createElement("div",null,"Loading (StaticQuery)")})};function h(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},157:function(t,e,n){var r;t.exports=(r=n(160))&&r.default||r},160:function(t,e,n){"use strict";n.r(e);var r=n(11),a=n.n(r),o=n(0),i=n.n(o),l=n(4),c=n.n(l),u=n(53),s=n(1),d=function(t){var e=t.location,n=s.default.getResourcesForPathnameSync(e.pathname);return i.a.createElement(u.a,a()({location:e,pageResources:n},n.json))};d.propTypes={location:c.a.shape({pathname:c.a.string.isRequired}).isRequired},e.default=d},161:function(t){t.exports={data:{site:{siteMetadata:{description:"Notes and posts about development, Math, ML and AI",discussShortName:"https-pem-github-io",title:"PEM's blog"}}}}},162:function(t,e,n){"use strict";var r=n(161),a=n(0),o=n.n(a),i=n(167),l=n.n(i),c=n(154),u=n(156),s=n(4),d=n(155),m=n(168),f=n.n(m);function p(){var t=f()(["\n  html, body, #___gatsby, #___gatsby>div {\n    height: 100%;\n  }\n"]);return p=function(){return t},t}var h=Object(c.b)(p()),g=c.c.main.withConfig({componentId:"sc-1ph75po-0"})(["background:",";a{position:relative;display:inline-block;background:transparent;color:",";font-weight:bold;text-decoration:none;>span{color:inherit;background-color:inherit;}&::after{content:'';"," "," background:",";transition:opacity ",",transform ",";opacity:0;transform:translateY(.2em);}&:hover::after{opacity:1;transform:none;}}"],function(t){return t.theme.bgColor},function(t){return t.theme.secondaryColor},Object(d.a)("absolute",null,null,"0","0"),Object(d.b)("1px","100%"),function(t){return t.theme.secondaryColor},function(t){return t.theme.defaultTransition},function(t){return t.theme.defaultTransition}),b=c.c.nav.withConfig({componentId:"sc-116zvyz-0"})(["border-bottom:1px solid ",";"],function(t){return t.theme.lightGray}),y=c.c.header.withConfig({componentId:"sc-116zvyz-1"})(["margin:0 auto;max-width:","px;a{text-decoration:none;}"],function(t){return t.theme.maxWidth}),v=c.c.ul.withConfig({componentId:"sc-116zvyz-2"})(["display:block;list-style-type:none;margin:0;text-align:right;position:relative;white-space:nowrap;width:100%;&::before{content:'';display:block;background:linear-gradient( to right,transparent,",",transparent );"," ","}>li,a{color:",";font-family:",";font-size:14px;margin:0;padding:1em 0;text-transform:uppercase;transition:color ",";&:not(:first-child){margin-left:1em;}&:hover,&:active{color:",";}}"],function(t){return t.theme.lightGray},Object(d.a)("absolute",0,null,null,null),Object(d.b)("1px","100%"),function(t){return t.theme.gray},function(t){return t.theme.headerFont},function(t){return t.theme.defaultTransition},function(t){return t.theme.headerColor}),w=Object(c.c)(u.Link).withConfig({componentId:"sc-116zvyz-3"})(["display:block;text-align:center;h1{display:inline-block;margin:.5em;font-weight:900;font-size:22px;letter-spacing:1px;position:relative;transition:color ",";&::after{content:'';border-radius:50%;display:block;background:",";"," ","}&:hover,&:active{color:",";}}"],function(t){return t.theme.defaultTransition},function(t){return t.theme.secondaryColor},Object(d.a)("absolute","10px","-1em",null,null),Object(d.b)("10px"),function(t){return t.theme.secondaryColor});function x(t){var e=t.title;return o.a.createElement(b,null,o.a.createElement(y,null,o.a.createElement(w,{to:"/"},o.a.createElement("h1",null,e)),o.a.createElement(v,null,o.a.createElement("li",null,o.a.createElement(u.Link,{to:"/about"},"About")))))}var E={bodyColor:"hsla(0,0%,0%,.8)",bgColor:"white",defaultTransition:".3s ease-in-out",headerColor:"hsla(0,0%,0%,.9)",headerFont:"-apple-system,'BlinkMacSystemFont','Segoe UI','Roboto','Oxygen','Ubuntu','Cantarell','Fira Sans','Droid Sans','Helvetica Neue','sans-serif'",maxWidth:960,secondaryColor:"#ff0000",gray:"hsla(0,0%,0%,.5)",lightGray:"hsla(0,0%,0%,.1)"};n.d(e,"a",function(){return C});var k=c.c.div.withConfig({componentId:"grcys-0"})(["background:",";margin:1em auto;"," max-width:","px;position:relative;"],function(t){return t.theme.bgColor},Object(d.b)("100%","100vw"),function(t){return t.theme.maxWidth});function C(t){var e=t.children,n=t.title,i=t.description;return o.a.createElement(c.a,{theme:E},o.a.createElement(u.StaticQuery,{query:"2922536610",render:function(t){var r=t.site.siteMetadata;return o.a.createElement(a.Fragment,null,o.a.createElement(l.a,{title:n?r.title+": "+n:r.title,meta:[{name:"description",content:i||r.description}]}),o.a.createElement(x,{title:r.title}),o.a.createElement(g,null,o.a.createElement(k,null,e({siteMetadata:r}))),o.a.createElement(h,null))},data:r}))}C.propTypes={children:s.any.isRequired,description:s.string,title:s.string}},173:function(t,e,n){"use strict";var r=n(154),a=n(155);e.a=r.c.h1.withConfig({componentId:"sc-1szmnsq-0"})(["position:relative;width:calc(100% - 60px);small{color:",";display:block;font-size:.4em;font-style:italic;"," text-align:right;width:60px;}"],function(t){return t.theme.lightGray},Object(a.a)("absolute",null,"-60px",0,null))}}]);
//# sourceMappingURL=component---src-pages-index-js-5fded69eb4f4055e562e.js.map