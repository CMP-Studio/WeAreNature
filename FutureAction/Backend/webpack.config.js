var path = require('path');
// eslint-disable-next-line import/no-unresolved
var slsw = require('serverless-webpack');
var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: slsw.lib.entries,
  output: {
    libraryTarget: 'commonjs',
    path: path.join(__dirname, '.webpack'),
    filename: '[name].js',
  },
  target: 'node',
  module: {
    loaders: [{
      test: /\.ts(x?)$/,
      loader: 'ts-loader'
    }],
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  plugins: [
    new CopyWebpackPlugin([{
        from: 'src/sendReminders/emails/**'
      },
      {
        from: 'src/reminder/emails/**'
      }
    ]),
  ]
};