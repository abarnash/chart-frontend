var webpack = require("webpack")
var path = require("path")
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

process.noDeprecation = true

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.join(__dirname, 'dist', 'assets'),
    filename: "./bundle.js",
    sourceMapFilename: 'bundle.map'
  },
  devtool: '#source-map',
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    // compress: true,
    // publicPath : '/public',
    port: 9000
  },
  module: {
    rules: [{
        test: /\.js$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          presets: ['env', 'stage-0', 'react']
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', {
          loader: 'postcss-loader',
          options: {
            plugins: () => [require('autoprefixer')]
          }
        }]
      },
      {
        test: /\.scss/,
        use: ['style-loader', 'css-loader', {
          loader: 'postcss-loader',
          options: {
            plugins: () => [require('autoprefixer')]
          }
        }, 'sass-loader']
      }
    ]
  },
  optimization: {
    minimizer: [new UglifyJsPlugin()],
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify("production")
      }
    }),
    // new webpack.optimize.UglifyJsPlugin({
    //   sourceMap: true,
    //   warnings: false,
    //   mangle: false
    // })
  ]
}
