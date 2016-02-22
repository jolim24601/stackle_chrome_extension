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
