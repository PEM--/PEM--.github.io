(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{140:function(e,n,t){"use strict";t.r(n),t.d(n,"query",function(){return u});var a=t(0),r=t.n(a),i=t(150);n.default=function(e){var n=e.data.site.siteMetadata.title;return r.a.createElement(i.a,null,r.a.createElement("h1",null,"About ",n))};var u="1097489062"},144:function(e,n,t){var a;e.exports=(a=t(149))&&a.default||a},145:function(e,n,t){"use strict";t.r(n),t.d(n,"graphql",function(){return h}),t.d(n,"StaticQueryContext",function(){return m}),t.d(n,"StaticQuery",function(){return p});var a=t(0),r=t.n(a),i=t(4),u=t.n(i),c=t(143),o=t.n(c);t.d(n,"Link",function(){return o.a}),t.d(n,"withPrefix",function(){return c.withPrefix}),t.d(n,"navigate",function(){return c.navigate}),t.d(n,"push",function(){return c.push}),t.d(n,"replace",function(){return c.replace}),t.d(n,"navigateTo",function(){return c.navigateTo});var l=t(27);t.d(n,"waitForRouteChange",function(){return l.c});var s=t(144),d=t.n(s);t.d(n,"PageRenderer",function(){return d.a});var f=t(38);t.d(n,"parsePath",function(){return f.a});var m=r.a.createContext({}),p=function(e){return r.a.createElement(m.Consumer,null,function(n){return e.data||n[e.query]&&n[e.query].data?(e.render||e.children)(e.data?e.data.data:n[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function h(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:u.a.object,query:u.a.string.isRequired,render:u.a.func,children:u.a.func}},148:function(e){e.exports={data:{site:{siteMetadata:{title:"PEM's blog"}}}}},149:function(e,n,t){"use strict";t.r(n);t(39);var a=t(0),r=t.n(a),i=t(4),u=t.n(i),c=t(52),o=t(1),l=function(e){var n=e.location,t=o.default.getResourcesForPathnameSync(n.pathname);return r.a.createElement(c.a,Object.assign({key:n.pathname,location:n,pageResources:t},t.json))};l.propTypes={location:u.a.shape({pathname:u.a.string.isRequired}).isRequired},n.default=l},150:function(e,n,t){"use strict";var a=t(146),r=t.n(a),i=t(148),u=t(0),c=t.n(u),o=t(147),l=t(145),s=t(4),d=t(151),f=t.n(d);function m(){var e=r()(["\n  background: aliceblue;\n"]);return m=function(){return e},e}var p=o.a.main(m());function h(){var e=r()(["\n  list-style-type: none;\n  margin: 0;\n  white-space: nowrap;\n  >li { margin: 0; }\n"]);return h=function(){return e},e}function g(){var e=r()(["\n  align-items: center;\n  display: flex;\n  justify-content: space-between;\n  margin: 0 auto;\n  max-width: 960px;\n  padding: .5em 0;\n  >* {\n    display: block;\n    flex: 0 0 auto;\n  }\n  h1 { margin: 0; }\n"]);return g=function(){return e},e}function y(){var e=r()(["\n  background: aliceblue;\n"]);return y=function(){return e},e}function v(){var e=r()(["\n  margin: 1em auto;\n  width: 960px;\n"]);return v=function(){return e},e}var b=o.a.div(v()),w=o.a.nav(y()),E=o.a.header(g()),q=o.a.ul(h()),k=function(e){var n=e.children;return c.a.createElement("html",{lang:"en"},c.a.createElement(l.StaticQuery,{query:"3892401927",render:function(e){var n=e.site.siteMetadata.title;return c.a.createElement(u.Fragment,null,c.a.createElement(f.a,{title:n,meta:[{name:"description",content:"Sample"},{name:"keywords",content:"sample, something"}]}),c.a.createElement(w,null,c.a.createElement(E,null,c.a.createElement(l.Link,{to:"/"},c.a.createElement("h1",null,n)),c.a.createElement(q,null,c.a.createElement("li",null,c.a.createElement(l.Link,{to:"/about"},"About"))))))},data:i}),c.a.createElement(p,null,c.a.createElement(b,null,n)))};k.propTypes={children:Object(s.arrayOf)(s.element).isRequired};n.a=k}}]);
//# sourceMappingURL=component---src-pages-about-js-2231fec48fed6ccc8cd8.js.map