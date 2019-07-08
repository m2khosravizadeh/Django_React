var path = require("path")
var webpack = require('webpack')
var BundleTracker = require('webpack-bundle-tracker')

module.exports = {
  context: __dirname,

  entry: {'index': './assets/js/index',
          'question': './assets/js/question'},

  mode: 'production',

  output: {
      path: path.resolve('./assets/bundles'),
      filename: "[name]-[hash].js",
  },

  plugins: [
      new BundleTracker({filename: './webpack-stats.json'}),
  ],

  module: {
      rules: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ }

      ],
  },

  resolve: {
    extensions: ['*', '.js', '.jsx']
  }
}
