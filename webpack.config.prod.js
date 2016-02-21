var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: {
    tab: ['./src/tab.js'],
    inject: ['./src/inject.js']
  },
  output: {
    path: path.join(__dirname, 'build/js'),
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['babel'],
      exclude: /node_modules/
    }]
  }
};
