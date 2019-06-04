var HtmlWebpackPlugin = require('html-webpack-plugin')
var path = require('path');

module.exports = {
  output: {
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.txt$/i,
        use: 'raw-loader',
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ],
  },
  plugins: [
          new HtmlWebpackPlugin({
            hash: true,
            filename: 'index.html' //relative to root of the application
        })
  ],
  optimization: {
    minimize: false
  }
}
