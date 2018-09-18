const filesystem = require('./src/plugin-configs/filesystem')
const manifest = require('./src/plugin-configs/manifest')
const typography = require('./src/plugin-configs/typography')

const title = "PEM's blog"

module.exports = {
  siteMetadata: { title },
  plugins: [
    'gatsby-plugin-react-helmet',
    filesystem,
    'gatsby-transformer-remark',
    typography,
    manifest(title),
    'gatsby-plugin-offline'
  ],
}
