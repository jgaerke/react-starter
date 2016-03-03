var path = require('path')

module.exports = {
  //devtool: 'cheap-module-eval-source-map',
  entry: [
    './index.js'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: './dist/bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel'
      },
      {
        test: /\.html$/,
        loader: 'file?name=[name].[ext]'
      },
      {
        test: /\.css$/,
        loader: 'style!css'
      }
    ]
  }
};
