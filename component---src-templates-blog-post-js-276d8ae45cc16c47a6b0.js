(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{152:function(n,t,e){"use strict";e.r(t),e.d(t,"default",function(){return f}),e.d(t,"query",function(){return h});var r=e(184),a=e.n(r),o=e(163),i=e.n(o),l=e(0),c=e.n(l),u=e(195),s=e.n(u),m=e(161),d=new s.a({createElement:c.a.createElement,components:{"my-component":function(){return c.a.createElement("hr",null)}}}).Compiler;function f(n){var t=n.data,e=t.markdownRemark,r=t.site,o=n.location,l={config:{identifier:e.id,title:e.frontmatter.title,url:o.href},shortname:r.siteMetadata.discussShortName};return c.a.createElement(m.a,null,c.a.createElement(i.a,{title:r.siteMetadata.title+": "+e.frontmatter.title,meta:[{name:"description",content:e.frontmatter.description}]}),c.a.createElement("h1",null,e.frontmatter.title),c.a.createElement("div",null,d(e.htmlAst)),c.a.createElement(a.a.DiscussionEmbed,l))}var h="2066174268"},160:function(n){n.exports={data:{site:{siteMetadata:{description:"Notes and posts about development, Math, ML and AI",title:"PEM's blog"}}}}},161:function(n,t,e){"use strict";var r=e(157),a=e.n(r),o=e(160),i=e(0),l=e.n(i),c=e(163),u=e.n(c),s=e(158),m=e(43),d=e(2),f=e(159);function h(){var n=a()(["\n  html, body, #___gatsby, #___gatsby>div {\n    height: 100%;\n  }\n"]);return h=function(){return n},n}var p=Object(s.b)(h());function b(){var n=a()(["\n  background: ",";\n  a {\n    position: relative;\n    display: inline-block;\n    background: transparent;\n    color: ",";\n    font-weight: bold;\n    text-decoration: none;\n    >span {\n      color: inherit;\n      background-color: inherit;\n    }\n    &::after {\n      content: '';\n      ","\n      ","\n      background: ",";\n      transition:\n        opacity ",",\n        transform ",";\n      opacity: 0;\n      transform: translateY(.2em);\n    }\n    &:hover::after {\n      opacity: 1;\n      transform: none;\n    }\n  }\n"]);return b=function(){return n},n}var g=s.c.main(b(),function(n){return n.theme.bgColor},function(n){return n.theme.secondaryColor},Object(f.a)("absolute",null,null,"0","0"),Object(f.b)("1px","100%"),function(n){return n.theme.secondaryColor},function(n){return n.theme.defaultTransition},function(n){return n.theme.defaultTransition});function y(){var n=a()(["\n  display: block;\n  text-align: center;\n  h1 {\n    display: inline-block;\n    margin: .5em;\n    font-weight: 900;\n    font-size: 22px;\n    letter-spacing: 1px;\n    position: relative;\n    transition: color ",";\n    &::after {\n      content: '';\n      border-radius: 50%;\n      display: block;\n      background: ",";\n      ","\n      ","\n    }\n    &:hover, &:active {\n      color: ",";\n    }\n  }\n"]);return y=function(){return n},n}function v(){var n=a()(["\n  display: block;\n  list-style-type: none;\n  margin: 0;\n  text-align: right;\n  position: relative;\n  white-space: nowrap;\n  width: 100%;\n  &::before {\n    content: '';\n    display: block;\n    background: linear-gradient(\n      to right,\n      transparent,\n      ",",\n      transparent\n    );\n    ","\n    ","\n  }\n  >li, a {\n    color: ",";\n    font-family: ",";\n    font-size: 14px;\n    margin: 0;\n    padding: 1em 0;\n    text-transform: uppercase;\n    transition: color ",";\n    &:not(:first-child) { margin-left: 1em; }\n    &:hover, &:active {\n      color: ",";\n    }\n  }\n"]);return v=function(){return n},n}function E(){var n=a()(["\n  margin: 0 auto;\n  max-width: ","px;\n  a { text-decoration: none; }\n"]);return E=function(){return n},n}function x(){var n=a()(["\n  border-bottom: 1px solid ",";\n"]);return x=function(){return n},n}var k=s.c.nav(x(),function(n){return n.theme.lightGray}),w=s.c.header(E(),function(n){return n.theme.maxWidth}),C=s.c.ul(v(),function(n){return n.theme.lightGray},Object(f.a)("absolute",0,null,null,null),Object(f.b)("1px","100%"),function(n){return n.theme.gray},function(n){return n.theme.headerFont},function(n){return n.theme.defaultTransition},function(n){return n.theme.headerColor}),O=Object(s.c)(m.Link)(y(),function(n){return n.theme.defaultTransition},function(n){return n.theme.secondaryColor},Object(f.a)("absolute","10px","-1em",null,null),Object(f.b)("10px"),function(n){return n.theme.secondaryColor});function j(n){var t=n.title;return l.a.createElement(k,null,l.a.createElement(w,null,l.a.createElement(O,{to:"/"},l.a.createElement("h1",null,t)),l.a.createElement(C,null,l.a.createElement("li",null,l.a.createElement(m.Link,{to:"/about"},"About")))))}var M={bodyColor:"hsla(0,0%,0%,.8)",bgColor:"white",defaultTransition:".3s ease-in-out",headerColor:"hsla(0,0%,0%,.9)",headerFont:"-apple-system,'BlinkMacSystemFont','Segoe UI','Roboto','Oxygen','Ubuntu','Cantarell','Fira Sans','Droid Sans','Helvetica Neue','sans-serif'",maxWidth:960,secondaryColor:"#ff0000",gray:"hsla(0,0%,0%,.5)",lightGray:"hsla(0,0%,0%,.1)"};function S(){var n=a()(["\n  background: ",";\n  margin: 1em auto;\n  ","\n  max-width: ","px;\n"]);return S=function(){return n},n}var T=s.c.div(S(),function(n){return n.theme.bgColor},Object(f.b)("100%","100vw"),function(n){return n.theme.maxWidth}),_=function(n){var t=n.children;return l.a.createElement(s.a,{theme:M},l.a.createElement(m.StaticQuery,{query:"3854292632",render:function(n){var e=n.site.siteMetadata,r=e.description,a=e.title;return l.a.createElement(i.Fragment,null,l.a.createElement(u.a,{title:a,meta:[{name:"description",content:r}]}),l.a.createElement(j,{title:a}),l.a.createElement(g,null,l.a.createElement(T,null,t)),l.a.createElement(p,null))},data:o}))};_.propTypes={children:d.any.isRequired};t.a=_}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-276d8ae45cc16c47a6b0.js.map