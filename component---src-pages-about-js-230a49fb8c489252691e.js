(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{140:function(e,n,t){"use strict";t.r(n),t.d(n,"query",function(){return u});var a=t(0),r=t.n(a),i=t(150);n.default=function(e){var n=e.data.site.siteMetadata.title;return r.a.createElement(i.a,null,r.a.createElement("h1",null,"About ",n))};var u="1097489062"},144:function(e,n,t){var a;e.exports=(a=t(149))&&a.default||a},145:function(e,n,t){"use strict";t.r(n),t.d(n,"graphql",function(){return h}),t.d(n,"StaticQueryContext",function(){return p}),t.d(n,"StaticQuery",function(){return m});var a=t(0),r=t.n(a),i=t(4),u=t.n(i),o=t(143),c=t.n(o);t.d(n,"Link",function(){return c.a}),t.d(n,"withPrefix",function(){return o.withPrefix}),t.d(n,"navigate",function(){return o.navigate}),t.d(n,"push",function(){return o.push}),t.d(n,"replace",function(){return o.replace}),t.d(n,"navigateTo",function(){return o.navigateTo});var l=t(27);t.d(n,"waitForRouteChange",function(){return l.c});var s=t(144),d=t.n(s);t.d(n,"PageRenderer",function(){return d.a});var f=t(38);t.d(n,"parsePath",function(){return f.a});var p=r.a.createContext({}),m=function(e){return r.a.createElement(p.Consumer,null,function(n){return e.data||n[e.query]&&n[e.query].data?(e.render||e.children)(e.data?e.data.data:n[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function h(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}m.propTypes={data:u.a.object,query:u.a.string.isRequired,render:u.a.func,children:u.a.func}},148:function(e){e.exports={data:{site:{siteMetadata:{title:"PEM's blog"}}}}},149:function(e,n,t){"use strict";t.r(n);t(39);var a=t(0),r=t.n(a),i=t(4),u=t.n(i),o=t(52),c=t(1),l=function(e){var n=e.location,t=c.default.getResourcesForPathnameSync(n.pathname);return r.a.createElement(o.a,Object.assign({key:n.pathname,location:n,pageResources:t},t.json))};l.propTypes={location:u.a.shape({pathname:u.a.string.isRequired}).isRequired},n.default=l},150:function(e,n,t){"use strict";var a=t(146),r=t.n(a),i=t(148),u=t(0),o=t.n(u),c=t(147),l=t(145),s=t(4),d=t(151),f=t.n(d);function p(){var e=r()(["\n  background: aliceblue;\n"]);return p=function(){return e},e}var m=c.a.main(p());function h(){var e=r()(["\n  list-style-type: none;\n  margin: 0;\n  white-space: nowrap;\n  >li { margin: 0; }\n"]);return h=function(){return e},e}function y(){var e=r()(["\n  align-items: center;\n  display: flex;\n  justify-content: space-between;\n  margin: 0 auto;\n  max-width: 960px;\n  padding: .5em 0;\n  >* {\n    display: block;\n    flex: 0 0 auto;\n  }\n  h1 { margin: 0; }\n"]);return y=function(){return e},e}function g(){var e=r()(["\n  background: aliceblue;\n"]);return g=function(){return e},e}function v(){var e=r()(["\n  margin: 1em auto;\n  width: 960px;\n"]);return v=function(){return e},e}var b=c.a.div(v()),w=c.a.nav(g()),E=c.a.header(y()),q=c.a.ul(h()),k=function(e){var n=e.children;return o.a.createElement(l.StaticQuery,{query:"3892401927",render:function(e){var t=e.site.siteMetadata.title;return o.a.createElement(u.Fragment,null,o.a.createElement(f.a,{title:t,meta:[{name:"description",content:"Sample"},{name:"keywords",content:"sample, something"}]}),o.a.createElement(w,null,o.a.createElement(E,null,o.a.createElement(l.Link,{to:"/"},o.a.createElement("h1",null,t)),o.a.createElement(q,null,o.a.createElement("li",null,o.a.createElement(l.Link,{to:"/about"},"About"))))),o.a.createElement(m,null,o.a.createElement(b,null,n)))},data:i})};k.propTypes={children:s.any.isRequired};n.a=k}}]);
//# sourceMappingURL=component---src-pages-about-js-230a49fb8c489252691e.js.map