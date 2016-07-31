const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const InlineStylePlugin = require('./inline-style');
const autoprefixer = require('autoprefixer');
const webpack = require('webpack');
const path = require('path');

const root = process.cwd();

module.exports = {
  progress: true,
  profile: true,
  debug: true,
  entry: path.join(root, 'src/js/main'),
  output: {
    path: path.join(root, 'dist'),
    filename: 'js/[name].[hash].js'
  },
  resolve: {
    alias: {
      'js': path.join(root, 'src/js'),
      'css': path.join(root, 'src/css')
    }
  },
  module: {
    loaders: [{
      test: /\.scss$/,
      loader: ExtractTextPlugin.extract(['css', 'postcss', 'sass'])
    }, {
      test: /\.js?$/,
      loader: 'babel',
      exclude: /(node_modules)/,
      query: {
        presets: ['es2015', 'react', 'stage-0'],
        plugins: ['babel-plugin-transform-flow-strip-types']
      }
    }]
  },
  postcss: function () { return [autoprefixer]; },
  plugins: [
    new webpack.DefinePlugin({ 'process.env': {'NODE_ENV': '"production"'}}),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        screw_ie8: true,
        warnings: false
      },
      mangle: {
        screw_ie8: true
      },
      output: {
        comments: false,
        screw_ie8: true
      }
    }),
    new ExtractTextPlugin('css/app.css'),
    new InlineStylePlugin('css/app.css'),
    new HtmlWebpackPlugin({
      template: path.join('src/index.html'),
      filename: 'index.html',
      inject: false,
      minify: {
        removeStyleLinkTypeAttributes: true,
        removeRedundantAttributes: true,
        removeEmptyAttributes: true,
        collapseWhitespace: true,
        removeComments: true,
        minifyURLs: true,
        minifyCSS: true,
        minifyJS: true
      }
    })
  ]
};
