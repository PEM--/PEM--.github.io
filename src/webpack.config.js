// module.exports = {
//   entry: './entry.js',
//   output: {
//     path: __dirname,
//     filename: 'bundle.js'
//   },
//   module: {
//     loaders: [
//       { test: /\.css$/, loader: 'style!css' }
//     ]
//   }
// }

require('coffee-script/register');
module.exports = require('./webpack.config.coffee');
