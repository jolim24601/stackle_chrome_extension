var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'source-map',
  entry: {
    tab: ['./src/tab.js', 'webpack-hot-middleware/client?path=http://localhost:3000/__webpack_hmr'],
    content: ['./src/content.js']
  },
  output: {
    path: path.join(__dirname, 'dev/js'),
    filename: '[name].bundle.js',
    publicPath: 'http://localhost:3000/js/'
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
