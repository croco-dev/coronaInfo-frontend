/* eslint-disable */
const withSass = require('@zeit/next-sass')
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')

module.exports = withSass({
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

    return config
  },
  devIndicators: {
    autoPrerender: false,
  },
})
