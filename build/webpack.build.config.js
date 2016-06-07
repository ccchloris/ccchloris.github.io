const webpack = require('webpack')
const config = require('./webpack.base.config')

require('fs-extra').removeSync('./dist')

config.plugins.push(new webpack.DefinePlugin({
  'process.env.NODE_ENV': "'production'"
}))
config.plugins.push(new webpack.optimize.UglifyJsPlugin({
  compress: {
    warnings: false
  }
}))
config.plugins.push(new webpack.optimize.OccurenceOrderPlugin(true))
config.plugins.push(new webpack.optimize.DedupePlugin())

module.exports = config
