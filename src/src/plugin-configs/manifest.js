const faviconPath =  file => `src/favicons/${file}`

module.exports = (title) => ({
  resolve: 'gatsby-plugin-manifest',
  options: {
    name: title,
    short_name: 'PEM',
    start_url: '/',
    background_color: '#f7f0eb',
    theme_color: '#a2466c',
    display: 'minimal-ui',
    icon: faviconPath('favicon-32x32.png'),
    icons: [
      {
        src: faviconPath('android-chrome-192x192.png'),
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: faviconPath('android-chrome-256x256.png'),
        sizes: '256x256',
        type: 'image/png',
      },
      {
        src: faviconPath('android-chrome-32x32.png'),
        sizes: '32x32',
        type: 'image/png',
      },
      {
        src: faviconPath('android-chrome-16x16.png'),
        sizes: '16x16',
        type: 'image/png',
      }
    ]
  },
})