var webpack = require('webpack');
module.exports = {
  context: __dirname + '/src',
  entry: {bundle: './index.js', vendors: './vendors.js'},
  output: {path: __dirname + '/dist/js', filename: '[name].js'},
  plugins:
      [new webpack.DefinePlugin({ON_TEST: process.env.NODE_ENV === 'test'})],
  module: {
    loaders: [
      {test: /\.html$/, loader: 'raw', exclude: /node_modules/},
      {test: /\.css$/, loader: 'style!css', exclude: '/node-modules'}
    ]
  }
};
