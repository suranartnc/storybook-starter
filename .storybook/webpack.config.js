const path = require('path');

module.exports = {
  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: 'style!css'
      }, {
        test: /\.scss$/,
        loader: 'style!css?modules&importLoaders=1&sourceMap&localIdentName=[name]__[local]___[hash:base64:5]!sass?outputStyle=expanded&sourceMap'
      }, {
        test: /\.(svg)$/i,
        loader: 'file-loader'
      }
    ]
  }
}