var webpack = require('webpack');
const WebpackShellPlugin = require('webpack-shell-plugin');

module.exports = {
  entry: {
    app: ['webpack/hot/dev-server', './javascripts/entry.js']
  },

  output: {
    path: './public/built',
    filename: 'bundle.js',
    publicPath: 'http://localhost:8080/built/'
  },

  devServer: {
    contentBase: './public',
    publicPath: 'http://localhost:8080/built/'
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['react', 'es2015']
        }
      },
      { test: /\.css$/, loader: 'style-loader!css-loader' },
      { test: /\.less$/, loader: 'style-loader!css-loader!less-loader'},
      { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192' },
      {
        test: /\.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/, 
        loader: 'file-loader?name=fonts/[name].[ext]'
      }
    ]
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.IgnorePlugin(new RegExp("^(fs|ipc)$")),
    new WebpackShellPlugin({onBuildStart:['echo "Webpack Start"'], onBuildEnd:['echo "Webpack End"']})
  ],

  target: 'electron-renderer',
}
