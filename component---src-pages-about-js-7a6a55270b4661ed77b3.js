(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{139:function(e,t,n){"use strict";n.r(t),n.d(t,"query",function(){return c});var a=n(0),r=n.n(a),o=n(142),i=n.n(o),u=n(146);t.default=function(e){var t=e.data.site.siteMetadata.title;return r.a.createElement(u.a,null,r.a.createElement("h1",null,"About ",t),r.a.createElement(i.a,{to:"/"},"Home"))};var c="1097489062"},142:function(e,t,n){"use strict";var a=n(39);t.__esModule=!0,t.withPrefix=p,t.navigateTo=t.replace=t.push=t.navigate=t.default=void 0;var r=a(n(149)),o=a(n(150)),i=a(n(8)),u=a(n(52)),c=a(n(53)),s=a(n(4)),l=a(n(0)),f=n(16),d=n(151);function p(e){return function(e){return e.replace(/\/+/g,"/")}("/"+e)}var h={activeClassName:s.default.string,activeStyle:s.default.object},v=function(e){function t(t){var n;n=e.call(this)||this,(0,c.default)((0,u.default)((0,u.default)(n)),"defaultGetProps",function(e){return e.isCurrent?{className:[n.props.className,n.props.activeClassName].filter(Boolean).join(" "),style:(0,o.default)({},n.props.style,n.props.activeStyle)}:null});var a=!1;"undefined"!=typeof window&&window.IntersectionObserver&&(a=!0);var r=t.location;return n.state={IOSupported:a,location:r},n.handleRef=n.handleRef.bind((0,u.default)((0,u.default)(n))),n}(0,i.default)(t,e);var n=t.prototype;return n.componentDidUpdate=function(e,t){this.props.to===e.to||this.state.IOSupported||___loader.enqueue((0,d.parsePath)(this.props.to).pathname)},n.componentDidMount=function(){this.state.IOSupported||___loader.enqueue((0,d.parsePath)(this.props.to).pathname)},n.handleRef=function(e){var t,n,a,r=this;this.props.innerRef&&this.props.innerRef(e),this.state.IOSupported&&e&&(t=e,n=function(){___loader.enqueue((0,d.parsePath)(r.props.to).pathname)},(a=new window.IntersectionObserver(function(e){e.forEach(function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(a.unobserve(t),a.disconnect(),n())})})).observe(t))},n.render=function(){var e=this,t=this.props,n=t.to,a=t.getProps,i=void 0===a?this.defaultGetProps:a,u=t.onClick,c=t.onMouseEnter,s=t.location,h=(t.activeClassName,t.activeStyle,t.ref,t.innerRef,t.state),v=t.replace,m=(0,r.default)(t,["to","getProps","onClick","onMouseEnter","location","activeClassName","activeStyle","ref","innerRef","state","replace"]),y=p(n);return l.default.createElement(f.Link,(0,o.default)({to:y,state:h,getProps:i,innerRef:this.handleRef,onMouseEnter:function(e){c&&c(e),___loader.hovering((0,d.parsePath)(n).pathname)},onClick:function(t){if(u&&u(t),!(0!==t.button||e.props.target||t.defaultPrevented||t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)){t.preventDefault();var n=(0,d.parsePath)(y),a=n.pathname,r=n.hash;if(a===s.pathname||!a){var o=r?document.getElementById(r.substr(1)):null;null!==o?o.scrollIntoView():window.scrollTo(0,0)}g(y,{state:h,replace:v})}return!0}},m))},t}(l.default.Component);v.propTypes=(0,o.default)({},h,{innerRef:s.default.func,onClick:s.default.func,to:s.default.string.isRequired,replace:s.default.bool});var m,y=(m=v,function(e){return l.default.createElement(f.Location,null,function(t){var n=t.location;return l.default.createElement(m,(0,o.default)({location:n},e))})});t.default=y;var g=function(e,t){window.___navigate(e,t)};t.navigate=g;var w=function(e){window.___push(e)};t.push=w;t.replace=function(e){window.___replace(e)};t.navigateTo=function(e){return w(e)}},145:function(e,t,n){"use strict";var a=n(143),r=n.n(a);function o(){var e=r()(["\n  background: aliceblue;\n"]);return o=function(){return e},e}var i=n(144).a.main(o());t.a=i},146:function(e,t,n){"use strict";var a=n(143),r=n.n(a),o=n(0),i=n.n(o),u=n(144),c=n(4),s=(n(148),n(145));function l(){var e=r()(["\n  margin: 1em auto;\n  width: 960px;\n"]);return l=function(){return e},e}var f=u.a.div(l()),d=function(e){var t=e.children;return i.a.createElement(s.a,null,i.a.createElement(f,null,t))};d.propTypes={childre:c.element.isRequired},t.a=d},147:function(e,t,n){var a;e.exports=(a=n(152))&&a.default||a},149:function(e,t){e.exports=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}},150:function(e,t){function n(){return e.exports=n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},n.apply(this,arguments)}e.exports=n},151:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return v}),n.d(t,"StaticQueryContext",function(){return p}),n.d(t,"StaticQuery",function(){return h});var a=n(0),r=n.n(a),o=n(4),i=n.n(o),u=n(142),c=n.n(u);n.d(t,"Link",function(){return c.a}),n.d(t,"withPrefix",function(){return u.withPrefix}),n.d(t,"navigate",function(){return u.navigate}),n.d(t,"push",function(){return u.push}),n.d(t,"replace",function(){return u.replace}),n.d(t,"navigateTo",function(){return u.navigateTo});var s=n(27);n.d(t,"waitForRouteChange",function(){return s.c});var l=n(147),f=n.n(l);n.d(t,"PageRenderer",function(){return f.a});var d=n(40);n.d(t,"parsePath",function(){return d.a});var p=r.a.createContext({}),h=function(e){return r.a.createElement(p.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function v(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}h.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},152:function(e,t,n){"use strict";n.r(t);n(38);var a=n(0),r=n.n(a),o=n(4),i=n.n(o),u=n(55),c=n(1),s=function(e){var t=e.location,n=c.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(u.a,Object.assign({key:t.pathname,location:t,pageResources:n},n.json))};s.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=s}}]);
//# sourceMappingURL=component---src-pages-about-js-7a6a55270b4661ed77b3.js.map