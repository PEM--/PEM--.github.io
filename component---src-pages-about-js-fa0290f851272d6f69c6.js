(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{139:function(e,t,n){"use strict";n.r(t),n.d(t,"query",function(){return c});var a=n(0),r=n.n(a),i=n(142),u=n.n(i),o=n(148);t.default=function(e){var t=e.data.site.siteMetadata.title;return r.a.createElement(o.a,null,r.a.createElement("h1",null,"About ",t),r.a.createElement(u.a,{to:"/"},"Home"))};var c="1097489062"},143:function(e,t,n){var a;e.exports=(a=n(150))&&a.default||a},146:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return h}),n.d(t,"StaticQueryContext",function(){return p}),n.d(t,"StaticQuery",function(){return m});var a=n(0),r=n.n(a),i=n(4),u=n.n(i),o=n(142),c=n.n(o);n.d(t,"Link",function(){return c.a}),n.d(t,"withPrefix",function(){return o.withPrefix}),n.d(t,"navigate",function(){return o.navigate}),n.d(t,"push",function(){return o.push}),n.d(t,"replace",function(){return o.replace}),n.d(t,"navigateTo",function(){return o.navigateTo});var l=n(27);n.d(t,"waitForRouteChange",function(){return l.c});var s=n(143),d=n.n(s);n.d(t,"PageRenderer",function(){return d.a});var f=n(38);n.d(t,"parsePath",function(){return f.a});var p=r.a.createContext({}),m=function(e){return r.a.createElement(p.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function h(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}m.propTypes={data:u.a.object,query:u.a.string.isRequired,render:u.a.func,children:u.a.func}},147:function(e,t,n){"use strict";var a=n(144),r=n.n(a);function i(){var e=r()(["\n  background: aliceblue;\n"]);return i=function(){return e},e}var u=n(145).a.main(i());t.a=u},148:function(e,t,n){"use strict";var a=n(144),r=n.n(a),i=n(149),u=n(0),o=n.n(u),c=n(145),l=n(146),s=n(4),d=n(151),f=n.n(d),p=n(147);function m(){var e=r()(["\n  margin: 1em auto;\n  width: 960px;\n"]);return m=function(){return e},e}var h=c.a.div(m()),y=function(e){var t=e.children;return o.a.createElement(u.Fragment,null,o.a.createElement(l.StaticQuery,{query:"3892401927",render:function(e){return o.a.createElement(f.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:"Sample"},{name:"keywords",content:"sample, something"}]})},data:i}),o.a.createElement(p.a,null,o.a.createElement(h,null,t)))};y.propTypes={childre:s.element.isRequired},t.a=y},149:function(e){e.exports={data:{site:{siteMetadata:{title:"PEM's blog"}}}}},150:function(e,t,n){"use strict";n.r(t);n(39);var a=n(0),r=n.n(a),i=n(4),u=n.n(i),o=n(52),c=n(1),l=function(e){var t=e.location,n=c.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(o.a,Object.assign({key:t.pathname,location:t,pageResources:n},n.json))};l.propTypes={location:u.a.shape({pathname:u.a.string.isRequired}).isRequired},t.default=l}}]);
//# sourceMappingURL=component---src-pages-about-js-fa0290f851272d6f69c6.js.map