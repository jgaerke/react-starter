module.exports = {
  devtool: 'source-map',
  entry: './src/main/App.js',
  output: {
    path: './',
    filename: 'bundle.js'
  },
  devServer: {
    inline: true,
    port: 8080
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.less$/,
        loader: "style!css!less",
        exclude: '/node_modules/'
      },
    ]
  }
}
