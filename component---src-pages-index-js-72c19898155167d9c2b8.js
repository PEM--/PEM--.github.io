(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{156:function(n,t,e){"use strict";e.r(t);e(57);var r=e(0),a=e.n(r),o=e(43),i=e(157),l=e.n(i),u=e(158),c=e(159);function s(){var n=l()(["\n  position: relative;\n  width: calc(100% - 60px);\n  small {\n    color: ",";\n    display: block;\n    font-size: .4em;\n    font-style: italic;\n    ","\n    text-align: right;\n    width: 60px;\n  }\n"]);return s=function(){return n},n}var d=u.b.h1(s(),function(n){return n.theme.lightGray},Object(c.a)("absolute",null,"-60px",0,null)),m=e(161);e.d(t,"query",function(){return f});t.default=function(n){var t=n.data.allMarkdownRemark,e=t.edges,r=t.totalCount;return a.a.createElement(m.a,null,a.a.createElement(d,null,"List of posts ",a.a.createElement("small",null,r," posts")),a.a.createElement("nav",null,a.a.createElement("ul",null,e.map(function(n){var t=n.node,e=t.id,r=t.fields,i=t.frontmatter;return a.a.createElement("li",{key:e},a.a.createElement(o.Link,{to:r.slug},a.a.createElement("p",null,i.title," - ",i.date)))}))))};var f="3477166933"},160:function(n){n.exports={data:{site:{siteMetadata:{description:"Notes and posts about development, Math, ML and AI",title:"PEM's blog"}}}}},161:function(n,t,e){"use strict";var r=e(157),a=e.n(r),o=e(160),i=e(0),l=e.n(i),u=e(163),c=e.n(u),s=e(158),d=e(43),m=e(2),f=e(159);function h(){var n=a()(["\n  html, body, #___gatsby, #___gatsby>div {\n    height: 100%;\n  }\n"]);return h=function(){return n},n}function b(){var n=a()(["\n  background: ",";\n  a {\n    position: relative;\n    display: inline-block;\n    background: transparent;\n    color: ",";\n    font-weight: bold;\n    text-decoration: none;\n    >span {\n      color: inherit;\n      background-color: inherit;\n    }\n    &::after {\n      content: '';\n      ","\n      ","\n      background: ",";\n      transition:\n        opacity ",",\n        transform ",";\n      opacity: 0;\n      transform: translateY(.2em);\n    }\n    &:hover::after {\n      opacity: 1;\n      transform: none;\n    }\n  }\n"]);return b=function(){return n},n}Object(s.c)(h());var p=s.b.main(b(),function(n){return n.theme.bgColor},function(n){return n.theme.secondaryColor},Object(f.a)("absolute",null,null,"0","0"),Object(f.b)("1px","100%"),function(n){return n.theme.secondaryColor},function(n){return n.theme.defaultTransition},function(n){return n.theme.defaultTransition});function g(){var n=a()(["\n  display: block;\n  text-align: center;\n  h1 {\n    display: inline-block;\n    margin: .5em;\n    font-weight: 900;\n    font-size: 22px;\n    letter-spacing: 1px;\n    position: relative;\n    transition: color ",";\n    &::after {\n      content: '';\n      border-radius: 50%;\n      display: block;\n      background: ",";\n      ","\n      ","\n    }\n    &:hover, &:active {\n      color: ",";\n    }\n  }\n"]);return g=function(){return n},n}function y(){var n=a()(["\n  display: block;\n  list-style-type: none;\n  margin: 0;\n  text-align: right;\n  position: relative;\n  white-space: nowrap;\n  width: 100%;\n  &::before {\n    content: '';\n    display: block;\n    background: linear-gradient(\n      to right,\n      transparent,\n      ",",\n      transparent\n    );\n    ","\n    ","\n  }\n  >li, a {\n    color: ",";\n    font-family: ",";\n    font-size: 14px;\n    margin: 0;\n    padding: 1em 0;\n    text-transform: uppercase;\n    transition: color ",";\n    &:not(:first-child) { margin-left: 1em; }\n    &:hover, &:active {\n      color: ",";\n    }\n  }\n"]);return y=function(){return n},n}function v(){var n=a()(["\n  margin: 0 auto;\n  max-width: ","px;\n  a { text-decoration: none; }\n"]);return v=function(){return n},n}function x(){var n=a()(["\n  border-bottom: 1px solid ",";\n"]);return x=function(){return n},n}var k=s.b.nav(x(),function(n){return n.theme.lightGray}),E=s.b.header(v(),function(n){return n.theme.maxWidth}),w=s.b.ul(y(),function(n){return n.theme.lightGray},Object(f.a)("absolute",0,null,null,null),Object(f.b)("1px","100%"),function(n){return n.theme.gray},function(n){return n.theme.headerFont},function(n){return n.theme.defaultTransition},function(n){return n.theme.headerColor}),C=Object(s.b)(d.Link)(g(),function(n){return n.theme.defaultTransition},function(n){return n.theme.secondaryColor},Object(f.a)("absolute","10px","-1em",null,null),Object(f.b)("10px"),function(n){return n.theme.secondaryColor});function O(n){var t=n.title;return l.a.createElement(k,null,l.a.createElement(E,null,l.a.createElement(C,{to:"/"},l.a.createElement("h1",null,t)),l.a.createElement(w,null,l.a.createElement("li",null,l.a.createElement(d.Link,{to:"/about"},"About")))))}var j={bodyColor:"hsla(0,0%,0%,.8)",bgColor:"white",defaultTransition:".3s ease-in-out",headerColor:"hsla(0,0%,0%,.9)",headerFont:"-apple-system,'BlinkMacSystemFont','Segoe UI','Roboto','Oxygen','Ubuntu','Cantarell','Fira Sans','Droid Sans','Helvetica Neue','sans-serif'",maxWidth:960,secondaryColor:"#ff0000",gray:"hsla(0,0%,0%,.5)",lightGray:"hsla(0,0%,0%,.1)"};function M(){var n=a()(["\n  background: ",";\n  margin: 1em auto;\n  ","\n  max-width: ","px;\n"]);return M=function(){return n},n}var T=s.b.div(M(),function(n){return n.theme.bgColor},Object(f.b)("100%","100vw"),function(n){return n.theme.maxWidth}),_=function(n){var t=n.children;return l.a.createElement(s.a,{theme:j},l.a.createElement(d.StaticQuery,{query:"3854292632",render:function(n){var e=n.site.siteMetadata,r=e.description,a=e.title;return l.a.createElement(i.Fragment,null,l.a.createElement(c.a,{title:a,meta:[{name:"description",content:r}]}),l.a.createElement(O,{title:a}),l.a.createElement(p,null,l.a.createElement(T,null,t)))},data:o}))};_.propTypes={children:m.any.isRequired};t.a=_}}]);
//# sourceMappingURL=component---src-pages-index-js-72c19898155167d9c2b8.js.map