const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const path = require('path');

const root = process.cwd();

module.exports = {
  devtool: 'source-map',
  debug: true,
  cache: true,
  entry: [
    'webpack/hot/dev-server',
    'webpack-hot-middleware/client',
    path.join(root, 'src/js/main')
  ],
  output: {
    path: path.join(root, 'public'),
    filename: 'js/[name].[hash].js'
  },
  resolve: {
    alias: {
      'js': path.join(root, 'src/js'),
      'css': path.join(root, 'src/css')
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join('src/index.html'),
      filename: 'index.html',
      inject: false
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [{
      test: /\.js?$/,
      loader: 'react-hot',
      exclude: /(node_modules)/
    }, {
      test: /\.scss$/,
      loaders: ['style', 'css', 'sass']
    }, {
      test: /\.js?$/,
      loader: 'babel',
      exclude: /(node_modules)/,
      query: {
        presets: ['es2015', 'react', 'stage-0'],
        plugins: ['babel-plugin-transform-flow-strip-types']
      }
    }]
  }
};
