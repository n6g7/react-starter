const path = require('path');

module.exports = {
  entry: './src/index.js',
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel'
      },
      {
        test: /\.styl(us)?$/,
        exclude: /node_modules/,
        loader: 'style!css!stylus'
      },
      {
        test: /\.png$/,
        exclude: /node_modules/,
        loader: 'url!img'
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: 'bundle.js'
  }
}
