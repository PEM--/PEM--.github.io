(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{143:function(e,t,n){"use strict";n.r(t),n.d(t,"title",function(){return y}),n.d(t,"default",function(){return C});n(182);var r=n(163),a=n.n(r),o=n(8),l=n.n(o),i=n(0),u=n.n(i),c=n(264),s=n(154),d=n(4),p=n(218),m=n(169),f=n(159),h=n(162);function g(){var e=a()(["\begin{aligned}\n  S_n &= sum_{ninN} a^n \\\n      &= 1 + a + a^2 + dots + a^n \\\n      &= cfrac{1 - a^{n+1}}{1 - a}\nend{aligned}"],["\\begin{aligned}\n  S_n &= \\sum_{n\\in\\N} a^n \\\\\n      &= 1 + a + a^2 + \\dots + a^n \\\\\n      &= \\cfrac{1 - a^{n+1}}{1 - a}\n\\end{aligned}"]);return g=function(){return e},e}var y="Katex editor",b=s.c.div.withConfig({componentId:"sc-1gmbc7t-0"})(["position:relative;"]),E=Object(s.c)(c.a).withConfig({componentId:"sc-1gmbc7t-1"})(["background:",";border:1px solid ",";border-radius:",";font-family:",";font-size:.8em;outline:0;padding:1em;width:100%;transition:background-color ",",border-color ",";&:focus{background-color:",";border-color:",";}"],function(e){return e.theme.bgColor},function(e){return e.theme.lightGray},function(e){return e.theme.borderRadius},function(e){return e.theme.monospaceFont},function(e){return e.theme.defaultTransition},function(e){return e.theme.defaultTransition},function(e){return e.theme.lightGray},function(e){return e.theme.secondaryColor}),v=function(e){function t(){for(var n,r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(n=e.call.apply(e,[this].concat(a))||this).state={clipboardDisplayed:!1,formulae:t.defaultFormulae},n.shouldComponentUpdate=function(e,t){var r=t.clipboardDisplayed,a=t.formulae;return n.state.clipboardDisplayed!==r||n.state.formulae!==a},n.handleChange=function(e){return n.setState({formulae:e.target.value})},n.hideClipboard=function(){return n.setState({clipboardDisplayed:!1})},n.showClipboard=function(){return n.setState({clipboardDisplayed:!0})},n}return l()(t,e),t.prototype.render=function(){var e=this.state,n=e.clipboardDisplayed,r=e.formulae;return u.a.createElement("div",null,u.a.createElement("p",{style:{marginBottom:0}},"Enter your Katex formulae:"),u.a.createElement(b,{onMouseEnter:this.showClipboard,onMouseLeave:this.hideClipboard},u.a.createElement(E,{autoFocus:!0,id:t.textareaId,onChange:this.handleChange,spellCheck:!1,value:r}),u.a.createElement(p.a,{displayed:n,to:t.textareaId})),u.a.createElement("p",{style:{marginBottom:0,marginTom:"1em"}},"Results:"),u.a.createElement("p",{className:"center"},u.a.createElement(m.a,{formulae:r})))},t}(i.Component);v.defaultFormulae=String.raw(g()),v.textareaId="katexEditor";var C=function(e){function t(){for(var t,n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return(t=e.call.apply(e,[this].concat(r))||this).shouldComponentUpdate=function(){return!1},t}return l()(t,e),t.prototype.render=function(){var e=this;return u.a.createElement(f.a,{title:y},function(t){var n=t.siteMetadata;return u.a.createElement(i.Fragment,null,u.a.createElement("h1",null,y),u.a.createElement(v,null),u.a.createElement(h.a,{href:e.props.location.href,title:n.title+": "+y}))})},t}(i.Component);C.propTypes={location:d.object.isRequired}},148:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(157),l=n(159),i=n(162),u=n(143),c=n(144);t.default=function(){return a.a.createElement(l.a,{title:"Online tools"},function(e){var t=e.siteMetadata;return a.a.createElement(r.Fragment,null,a.a.createElement("h1",null,"Online tools"),a.a.createElement("p",null,a.a.createElement(o.Link,{to:"/tools/katex-editor"},u.title)),a.a.createElement("p",null,a.a.createElement(o.Link,{to:"/tools/text-to-slug"},c.title)),a.a.createElement(i.a,{href:t.siteUrl,title:t.title}))})}},169:function(e,t,n){"use strict";n.d(t,"a",function(){return p});n(219),n(220),n(31);var r=n(8),a=n.n(r),o=n(0),l=n.n(o),i=n(221),u=n.n(i),c=n(154),s=n(4),d=c.c.span.withConfig({componentId:"sc-1dl32td-0"})(["color:",";"],function(e){return e.theme.warningColor}),p=function(e){function t(){for(var t,n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return(t=e.call.apply(e,[this].concat(r))||this).shouldComponentUpdate=function(e){var n=e.formulae;return t.props.formulae!==n},t}return a()(t,e),t.prototype.render=function(){try{var e=u.a.renderToString(this.props.formulae,{displayMode:this.props.displayMode});return l.a.createElement("span",{dangerouslySetInnerHTML:{__html:e}})}catch(e){var t=e.toString().replace("ParseError: KaTeX parse error: ","");return l.a.createElement(d,null,t)}},t}(o.Component);p.propTypes={displayMode:s.bool,formulae:s.string.isRequired}}}]);
//# sourceMappingURL=component---src-pages-tools-index-js-42e9e7c4f418b25742d2.js.map