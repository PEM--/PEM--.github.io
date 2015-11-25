path = require 'path'

module.exports =
  entry: './entry.js'
  output:
    path: path.join __dirname, '..'
    filename: 'bundle.js'
  module:
    loaders: [
      { test: /\.css$/, loader: 'style!css' }
    ]
