const theme = require.resolve('../themes/index.js')

module.exports = {
  resolve: 'gatsby-mdx',
  options: {
    gatsbyRemarkPlugins: [
      { resolve: 'gatsby-remark-smartypants' },
      {
        resolve: 'gatsby-remark-images',
        options: {
          maxWidth: theme.maxWidth,
          linkImagesToOriginal: false,
          withWebp: { quality: 50 },
        },
      },
      {
        resolve: 'gatsby-remark-prismjs',
        options: {
          classPrefix: 'language-',
          inlineCodeMarker: null,
          aliases: {},
          showLineNumbers: false
        }
      }
    ],
    defaultLayouts: {
      default: require.resolve('../templates/MdxBlogPost.js')
    },
    extensions: ['.mdx']
  }
}