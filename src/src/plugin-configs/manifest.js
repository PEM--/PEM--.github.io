const faviconPath =  file => `src/favicons/${file}`

module.exports = (title) => ({
  resolve: 'gatsby-plugin-manifest',
  options: {
    name: title,
    short_name: 'PEM',
    start_url: '/',
    background_color: '#ffffff',
    theme_color: '#ff0000',
    display: 'minimal-ui',
    icon: faviconPath('favicon.png')
  },
})