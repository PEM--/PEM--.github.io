export default theme => /* css */`
code[class*="language-"],
pre[class*="language-"] {
	color: ${theme.bodyColor};
	background: none;
	font-family: 'Andale Mono', 'Ubuntu Mono', monospace;
	text-align: left;
	white-space: pre;
	word-spacing: normal;
	word-break: normal;
	word-wrap: normal;
	line-height: 1.5;
	hyphens: none;
}

/* Code blocks */
pre[class*="language-"] {
	padding: 1em;
	margin: .5em 0;
	overflow: auto;
	border-radius: ${theme.borderRadius};
	border: 1px solid ${theme.lightGray};
}

:not(pre) > code[class*="language-"],
pre[class*="language-"] {
	background: ${theme.bgColor};
}

/* Inline code */
:not(pre) > code[class*="language-"] {
	padding: .1em;
	border-radius: ${theme.borderRadius};
	white-space: normal;
}

.token.comment,
.token.prolog,
.token.doctype,
.token.cdata {
	color: ${theme.gray};
}

.token.punctuation {
	color: ${theme.bodyColor};
}

.namespace {
	opacity: .7;
}

.token.property,
.token.tag,
.token.constant,
.token.symbol,
.token.deleted {
	color: ${theme.secondaryColor};
}

.token.boolean,
.token.number {
	color: ${theme.secondaryColor};
}

.token.selector,
.token.attr-name,
.token.string,
.token.char,
.token.builtin,
.token.inserted {
	color: ${theme.secondaryColor};
}

.token.operator,
.token.entity,
.token.url,
.language-css .token.string,
.style .token.string,
.token.variable {
	color: ${theme.bodyColor};
}

.token.atrule,
.token.attr-value,
.token.function,
.token.class-name {
	color: ${theme.secondaryColor};
}

.token.keyword {
	color: ${theme.secondaryColor};
}

.token.regex,
.token.important {
	color: ${theme.secondaryColor};
}

.token.important,
.token.bold {
	font-weight: bold;
}
.token.italic {
	font-style: italic;
}

.token.entity {
	cursor: help;
}
`