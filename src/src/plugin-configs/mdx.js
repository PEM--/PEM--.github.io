const theme = require.resolve('../themes/index.js')

module.exports = {
  resolve: 'gatsby-mdx',
  options: {
    gatsbyRemarkPlugins: [
      { resolve: 'gatsby-remark-smartypants' },
      {
        resolve: 'gatsby-remark-images',
        pluginOptions: {
          maxWidth: theme.maxWidth,
          linkImagesToOriginal: false,
          wrapperStyle: 'max-width: 100%;',
          withWebp: { quality: 50 }
        }
      },
      {
        resolve: 'gatsby-remark-prismjs',
        pluginOptions: {
          classPrefix: 'language-',
          inlineCodeMarker: null,
          aliases: {},
          showLineNumbers: false
        }
      }
    ],
    defaultLayouts: {
      default: require.resolve('../components/BlogTemplate.js')
    },
    extensions: ['.mdx']
  }
}