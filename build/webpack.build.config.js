const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const config = require('./webpack.base.config')

// https://github.com/kangax/html-minifier#options-quick-reference
const htmlMinifierOptions = {
  removeComments: true,
  removeCommentsFromCDATA: true,
  collapseWhitespace: true,
  // vue-html-loader 默认设为了 true。设为 false 是为了让 html-minifier 不要在元素之间保留一个空格
  conservativeCollapse: false,
  removeAttributeQuotes: true,
  removeScriptTypeAttributes: true,
  removeStyleTypeAttributes: true,
  useShortDoctype: true,
  minifyCSS: true
}

require('fs-extra').removeSync('./dist')

config.output.filename = '[name].[chunkhash].js'
config.module.loaders[1].query = '[name].[hash].[ext]'
config.vue.html = htmlMinifierOptions

config.plugins = [
  new HtmlWebpackPlugin({
    filename: 'index.html',
    template: './src/index.html',
    minify: htmlMinifierOptions
  }),
  new ExtractTextPlugin('[name].[chunkhash].css'),
  new webpack.DefinePlugin({
    'process.env': { NODE_ENV: '"production"' }
  }),
  new webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: false
    }
  }),
  new webpack.optimize.OccurenceOrderPlugin(true),
  new webpack.optimize.DedupePlugin(),
  new CopyWebpackPlugin([{ from: './static' }])
]

module.exports = config
