module.exports = {
  resolve: `gatsby-transformer-remark`,
  options: {
    plugins: [
      'gatsby-remark-katex',
      {
        resolve: 'gatsby-remark-embed-video',
        options: {
          ratio: 1.77, // Optional: Defaults to 16/9 = 1.77
          related: false, //Optional: Will remove related videos from the end of an embedded YouTube video.
          noIframeBorder: true //Optional: Disable insertion of <style> border: 0
        }
      },
      'gatsby-remark-responsive-iframe',
      {
        resolve: 'gatsby-remark-prismjs',
        options: {
          // Class prefix for <pre> tags containing syntax highlighting;
          // defaults to 'language-' (eg <pre class="language-js">).
          // If your site loads Prism into the browser at runtime,
          // (eg for use with libraries like react-live),
          // you may use this to prevent Prism from re-processing syntax.
          // This is an uncommon use-case though;
          // If you're unsure, it's best to use the default value.
          classPrefix: 'language-',
          // This is used to allow setting a language for inline code
          // (i.e. single backticks) by creating a separator.
          // This separator is a string and will do no white-space
          // stripping.
          // A suggested value for English speakers is the non-ascii
          // character '›'.
          inlineCodeMarker: null,
          // This lets you set up language aliases.  For example,
          // setting this to '{ sh: "bash" }' will let you use
          // the language "sh" which will highlight using the
          // bash highlighter.
          aliases: {},
          // This toggles the display of line numbers alongside the code.
          // To use it, add the following line in src/layouts/index.js
          // right after importing the prism color scheme:
          //  `require("prismjs/plugins/line-numbers/prism-line-numbers.css");`
          // Defaults to false.
          showLineNumbers: false
        }
      },
      {
        resolve: 'gatsby-remark-images',
        options: {
          // It's important to specify the maxWidth (in pixels) of
          // the content container as this plugin uses this as the
          // base for generating different widths of each image.
          maxWidth: 960,
          linkImagesToOriginal: false,
          showCaptions: true,
          withWebp: { quality: 80 },
          wrapperStyle: 'border-radius: 5px; overflow: hidden; border: 1px solid hsla(0,0%,0%,.1)'
        },
      },
      'gatsby-remark-smartypants',
      'gatsby-remark-emoji',
      'gatsby-remark-component'
    ]
  }
}