const filesystem = require('./src/plugin-configs/filesystem')
const manifest = require('./src/plugin-configs/manifest')
const remark = require('./src/plugin-configs/remark')
const typography = require('./src/plugin-configs/typography')

const title = "PEM's blog"

module.exports = {
  siteMetadata: {
    siteUrl: 'https://pem--.github.io/',
    title
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    filesystem,
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    remark,
    typography,
    manifest(title),
    'gatsby-plugin-catch-links',
    'gatsby-plugin-offline'
  ],
}
