const filesystem = require('./src/plugin-configs/filesystem')
const manifest = require('./src/plugin-configs/manifest')
const remark = require('./src/plugin-configs/remark')
const robotsTxt = require('./src/plugin-configs/robotsTxt')
const sitemap = require('./src/plugin-configs/sitemap')
const styledComponents = require ('./src/plugin-configs/styledComponents')
const typography = require('./src/plugin-configs/typography')

const title = "PEM's blog"

module.exports = {
  siteMetadata: {
    description: 'Notes and posts about development, Math, ML and AI',
    discussShortName: 'https-pem-github-io-1',
    siteUrl: 'https://pem--.github.io',
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
    'gatsby-plugin-offline',
    sitemap,
    robotsTxt
  ],
}
