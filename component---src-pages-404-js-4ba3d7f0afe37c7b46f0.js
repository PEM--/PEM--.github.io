(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{146:function(e,t,n){"use strict";n.r(t);var a=n(182),r=n.n(a),o=n(0),i=n.n(o),c=n(156),l=n(162);t.default=function(){return i.a.createElement(l.a,null,function(){return i.a.createElement(o.Fragment,null,i.a.createElement("h1",null,"404 - Not found"),i.a.createElement("p",null,i.a.createElement(r.a,{text:"This route doesn't exist 🤔"})),i.a.createElement("p",null,i.a.createElement(c.Link,{to:"/"},"Go back home")))})}},156:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return p}),n.d(t,"StaticQueryContext",function(){return h}),n.d(t,"StaticQuery",function(){return f});var a=n(0),r=n.n(a),o=n(4),i=n.n(o),c=n(153),l=n.n(c);n.d(t,"Link",function(){return l.a}),n.d(t,"withPrefix",function(){return c.withPrefix}),n.d(t,"navigate",function(){return c.navigate}),n.d(t,"push",function(){return c.push}),n.d(t,"replace",function(){return c.replace}),n.d(t,"navigateTo",function(){return c.navigateTo});var u=n(28);n.d(t,"waitForRouteChange",function(){return u.c});var s=n(157),d=n.n(s);n.d(t,"PageRenderer",function(){return d.a});var m=n(39);n.d(t,"parsePath",function(){return m.a});var h=r.a.createContext({}),f=function(e){return r.a.createElement(h.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function p(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}f.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},157:function(e,t,n){var a;e.exports=(a=n(160))&&a.default||a},160:function(e,t,n){"use strict";n.r(t);var a=n(11),r=n.n(a),o=n(0),i=n.n(o),c=n(4),l=n.n(c),u=n(53),s=n(1),d=function(e){var t=e.location,n=s.default.getResourcesForPathnameSync(t.pathname);return i.a.createElement(u.a,r()({location:t,pageResources:n},n.json))};d.propTypes={location:l.a.shape({pathname:l.a.string.isRequired}).isRequired},t.default=d},161:function(e){e.exports={data:{site:{siteMetadata:{description:"Notes and posts about development, Math, ML and AI",discussShortName:"https-pem-github-io",title:"PEM's blog"}}}}},162:function(e,t,n){"use strict";var a=n(161),r=n(0),o=n.n(r),i=n(167),c=n.n(i),l=n(154),u=n(156),s=n(4),d=n(155),m=n(168),h=n.n(m);function f(){var e=h()(["\n  html, body, #___gatsby, #___gatsby>div {\n    height: 100%;\n  }\n"]);return f=function(){return e},e}var p=Object(l.b)(f()),g=l.c.main.withConfig({componentId:"sc-1ph75po-0"})(["background:",";a{position:relative;display:inline-block;background:transparent;color:",";font-weight:bold;text-decoration:none;>span{color:inherit;background-color:inherit;}&::after{content:'';"," "," background:",";transition:opacity ",",transform ",";opacity:0;transform:translateY(.2em);}&:hover::after{opacity:1;transform:none;}}"],function(e){return e.theme.bgColor},function(e){return e.theme.secondaryColor},Object(d.a)("absolute",null,null,"0","0"),Object(d.b)("1px","100%"),function(e){return e.theme.secondaryColor},function(e){return e.theme.defaultTransition},function(e){return e.theme.defaultTransition}),b=l.c.nav.withConfig({componentId:"sc-116zvyz-0"})(["border-bottom:1px solid ",";"],function(e){return e.theme.lightGray}),y=l.c.header.withConfig({componentId:"sc-116zvyz-1"})(["margin:0 auto;max-width:","px;a{text-decoration:none;}"],function(e){return e.theme.maxWidth}),v=l.c.ul.withConfig({componentId:"sc-116zvyz-2"})(["display:block;list-style-type:none;margin:0;text-align:right;position:relative;white-space:nowrap;width:100%;&::before{content:'';display:block;background:linear-gradient( to right,transparent,",",transparent );"," ","}>li,a{color:",";font-family:",";font-size:14px;margin:0;padding:1em 0;text-transform:uppercase;transition:color ",";&:not(:first-child){margin-left:1em;}&:hover,&:active{color:",";}}"],function(e){return e.theme.lightGray},Object(d.a)("absolute",0,null,null,null),Object(d.b)("1px","100%"),function(e){return e.theme.gray},function(e){return e.theme.headerFont},function(e){return e.theme.defaultTransition},function(e){return e.theme.headerColor}),w=Object(l.c)(u.Link).withConfig({componentId:"sc-116zvyz-3"})(["display:block;text-align:center;h1{display:inline-block;margin:.5em;font-weight:900;font-size:22px;letter-spacing:1px;position:relative;transition:color ",";&::after{content:'';border-radius:50%;display:block;background:",";"," ","}&:hover,&:active{color:",";}}"],function(e){return e.theme.defaultTransition},function(e){return e.theme.secondaryColor},Object(d.a)("absolute","10px","-1em",null,null),Object(d.b)("10px"),function(e){return e.theme.secondaryColor});function x(e){var t=e.title;return o.a.createElement(b,null,o.a.createElement(y,null,o.a.createElement(w,{to:"/"},o.a.createElement("h1",null,t)),o.a.createElement(v,null,o.a.createElement("li",null,o.a.createElement(u.Link,{to:"/about"},"About")))))}var E={bodyColor:"hsla(0,0%,0%,.8)",bgColor:"white",defaultTransition:".3s ease-in-out",headerColor:"hsla(0,0%,0%,.9)",headerFont:"-apple-system,'BlinkMacSystemFont','Segoe UI','Roboto','Oxygen','Ubuntu','Cantarell','Fira Sans','Droid Sans','Helvetica Neue','sans-serif'",maxWidth:960,secondaryColor:"#ff0000",gray:"hsla(0,0%,0%,.5)",lightGray:"hsla(0,0%,0%,.1)"};n.d(t,"a",function(){return C});var k=l.c.div.withConfig({componentId:"grcys-0"})(["background:",";margin:1em auto;"," max-width:","px;position:relative;"],function(e){return e.theme.bgColor},Object(d.b)("100%","100vw"),function(e){return e.theme.maxWidth});function C(e){var t=e.children,n=e.title,i=e.description;return o.a.createElement(l.a,{theme:E},o.a.createElement(u.StaticQuery,{query:"2922536610",render:function(e){var a=e.site.siteMetadata;return o.a.createElement(r.Fragment,null,o.a.createElement(c.a,{title:n?a.title+": "+n:a.title,meta:[{name:"description",content:i||a.description}]}),o.a.createElement(x,{title:a.title}),o.a.createElement(g,null,o.a.createElement(k,null,t({siteMetadata:a}))),o.a.createElement(p,null))},data:a}))}C.propTypes={children:s.any.isRequired,description:s.string,title:s.string}}}]);
//# sourceMappingURL=component---src-pages-404-js-4ba3d7f0afe37c7b46f0.js.map