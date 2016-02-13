var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: './src/main.js',
  output: { path: __dirname, filename: 'bundle.js' },
  devtool: 'inline-source-map',
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
          test: /\.rt$/,
          loaders: ['react-templates-loader?targetVersion=0.14.0'],
          exclude: /node_modules/
      }
    ]
  }
};
