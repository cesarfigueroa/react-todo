module.exports = {
  entry: './src/index.jsx',
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        loader: 'babel'
      }
    ]
  },
  devServer: {
    publicPath: '/dist',
    historyApiFallback: true,
    stats: {
      chunks: false
    }
  }
};
