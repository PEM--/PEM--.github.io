(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{139:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),u=t(150);n.default=function(){return r.a.createElement(u.a,null,r.a.createElement("h1",null,"NOT FOUND"),r.a.createElement("p",null,"You just hit a route that doesn't exist... the sadness."))}},144:function(e,n,t){var a;e.exports=(a=t(149))&&a.default||a},145:function(e,n,t){"use strict";t.r(n),t.d(n,"graphql",function(){return h}),t.d(n,"StaticQueryContext",function(){return m}),t.d(n,"StaticQuery",function(){return p});var a=t(0),r=t.n(a),u=t(4),i=t.n(u),o=t(143),c=t.n(o);t.d(n,"Link",function(){return c.a}),t.d(n,"withPrefix",function(){return o.withPrefix}),t.d(n,"navigate",function(){return o.navigate}),t.d(n,"push",function(){return o.push}),t.d(n,"replace",function(){return o.replace}),t.d(n,"navigateTo",function(){return o.navigateTo});var l=t(27);t.d(n,"waitForRouteChange",function(){return l.c});var s=t(144),d=t.n(s);t.d(n,"PageRenderer",function(){return d.a});var f=t(38);t.d(n,"parsePath",function(){return f.a});var m=r.a.createContext({}),p=function(e){return r.a.createElement(m.Consumer,null,function(n){return e.data||n[e.query]&&n[e.query].data?(e.render||e.children)(e.data?e.data.data:n[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function h(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},148:function(e){e.exports={data:{site:{siteMetadata:{title:"PEM's blog"}}}}},149:function(e,n,t){"use strict";t.r(n);t(39);var a=t(0),r=t.n(a),u=t(4),i=t.n(u),o=t(52),c=t(1),l=function(e){var n=e.location,t=c.default.getResourcesForPathnameSync(n.pathname);return r.a.createElement(o.a,Object.assign({key:n.pathname,location:n,pageResources:t},t.json))};l.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},n.default=l},150:function(e,n,t){"use strict";var a=t(146),r=t.n(a),u=t(148),i=t(0),o=t.n(i),c=t(147),l=t(145),s=t(4),d=t(151),f=t.n(d);function m(){var e=r()(["\n  background: aliceblue;\n"]);return m=function(){return e},e}var p=c.a.main(m());function h(){var e=r()(["\n  list-style-type: none;\n  margin: 0;\n  white-space: nowrap;\n  >li { margin: 0; }\n"]);return h=function(){return e},e}function g(){var e=r()(["\n  align-items: center;\n  display: flex;\n  justify-content: space-between;\n  margin: 0 auto;\n  max-width: 960px;\n  padding: .5em 0;\n  >* {\n    display: block;\n    flex: 0 0 auto;\n  }\n  h1 { margin: 0; }\n"]);return g=function(){return e},e}function y(){var e=r()(["\n  background: aliceblue;\n"]);return y=function(){return e},e}function v(){var e=r()(["\n  margin: 1em auto;\n  width: 960px;\n"]);return v=function(){return e},e}var b=c.a.div(v()),w=c.a.nav(y()),E=c.a.header(g()),x=c.a.ul(h()),k=function(e){var n=e.children;return o.a.createElement(i.Fragment,null,o.a.createElement(l.StaticQuery,{query:"3892401927",render:function(e){var n=e.site.siteMetadata.title;return o.a.createElement(w,null,o.a.createElement(f.a,{title:n,meta:[{name:"description",content:"Sample"},{name:"keywords",content:"sample, something"}]}),o.a.createElement(E,null,o.a.createElement(l.Link,{to:"/"},o.a.createElement("h1",null,n)),o.a.createElement(x,null,o.a.createElement("li",null,o.a.createElement(l.Link,{to:"/about"},"About")))))},data:u}),o.a.createElement(p,null,o.a.createElement(b,null,n)))};k.propTypes={children:Object(s.arrayOf)(s.element).isRequired};n.a=k}}]);
//# sourceMappingURL=component---src-pages-404-js-6a6e25660d07c7a4394f.js.map