/* eslint-disable */
const withSass = require('@zeit/next-sass')
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const { config } = require('dotenv')

config()
module.exports = withSass({
  env: {
    API_URL: process.env.API_URL,
    NAVER_MAP_API: process.env.NAVER_MAP_API,
  },
  poweredByHeader: false,
  webpack: (config, options) => {
    // tsconfig-paths
    if (config.resolve.plugins) {
      config.resolve.plugins.push(new TsconfigPathsPlugin())
    } else {
      config.resolve.plugins = [new TsconfigPathsPlugin()]
    }

    // CSS Minified
    config.optimization.minimizer = []
    config.optimization.minimizer.push(new OptimizeCSSAssetsPlugin({}))
    config.optimization.minimizer.push(
      new TerserPlugin({
        test: /\.js(\?.*)?$/i,
      }),
    )

    return config
  },
  devIndicators: {
    autoPrerender: false,
  },
})
