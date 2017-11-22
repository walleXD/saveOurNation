
const genDefaultConfig = require('@storybook/react/dist/server/config/defaults/webpack.config.js')
const MinifyPlugin = require('babel-minify-webpack-plugin')
const webpack = require('webpack')

// const { inspect } = require('util')
// const { resolve } = require('path')

const isDev = process.env.NODE_ENV !== 'production'

module.exports = (baseConfig, env) => {
  const config = genDefaultConfig(baseConfig, env)
  const prodPlugins = [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(
        process.env.NODE_ENV || 'development'
      ),
      'process.env.__REACT_NATIVE_DEBUG_ENABLED__': isDev
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new MinifyPlugin()
  ]
  // const defaultPlugins = [...config.plugins]

  return {
    ...config,
    devtool: 'inline-source-map',
    plugins: [...config.plugins, ...(isDev ? [] : prodPlugins)]
  }
}
