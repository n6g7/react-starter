const webpack = require('webpack');
const DashboardPlugin = require('webpack-dashboard/plugin');

const baseConfig = require('./webpack.config.js');

module.exports = Object.assign({}, baseConfig, {
  entry: [
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    baseConfig.entry
  ],
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'react-hot!babel'
      },
      {
        test: /\.png$/,
        exclude: /node_modules/,
        loader: 'url!img'
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new DashboardPlugin()
  ],
  devServer: {
    contentBase: 'dist/',
    hot: true
  }
});
