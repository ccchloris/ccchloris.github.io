const webpack = require('webpack')
const OpenPack = require('openpack')
const config = require('./webpack.base.config')

config.devtool = '#source-map'
config.watch = true
config.plugins.push(new webpack.DefinePlugin({
  'process.env': {
    NODE_ENV: '"development"'
  }
}))
config.plugins.push(new OpenPack())
config.devServer = {
  noInfo: true,
  host: '0.0.0.0',
  port: 12356,
  contentBase: './static'
}

module.exports = config
