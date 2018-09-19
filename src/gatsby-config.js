const filesystems = require('./src/plugin-configs/filesystems')
const manifest = require('./src/plugin-configs/manifest')
const mdx = require('./src/plugin-configs/mdx')
const robotsTxt = require('./src/plugin-configs/robotsTxt')
const sitemap = require('./src/plugin-configs/sitemap')
const styledComponents = require ('./src/plugin-configs/styledComponents')
const typography = require('./src/plugin-configs/typography')

const title = "PEM's blog"

module.exports = {
  siteMetadata: {
    description: 'Notes and posts about development, Math, ML and AI',
    discussShortName: 'https-pem-github-io',
    siteUrl: 'https://pem--.github.io',
    title
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    ...filesystems,
    typography,
    styledComponents,
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    mdx,
    manifest(title),
    'gatsby-plugin-offline',
    sitemap,
    robotsTxt
  ],
}
