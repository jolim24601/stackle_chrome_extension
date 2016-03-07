var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: {
    tab: ['./src/tab.js'],
    content: ['./src/content.js']
  },
  output: {
    path: path.join(__dirname, 'build/js'),
    filename: '[name].bundle.js'
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
       compress: {
         warnings: false
       }
     }),
    new webpack.optimize.DedupePlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
  ],
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['babel'],
      exclude: /node_modules/
    },
    {
      test: /\.css$/,
      loader: 'style!css'
    },
    {
      test: /\.png$/,
      loader: 'url-loader?limit=100000'
    }]
  }
};
