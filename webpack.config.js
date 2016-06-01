var webpack               = require('webpack');
var CleanPlugin           = require('clean-webpack-plugin');
var ExtractTextPlugin     = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin     = require('html-webpack-plugin');
var FaviconsWebpackPlugin = require('favicons-webpack-plugin');

module.exports = {
  context: __dirname + '/src',
  entry: {
    app: ['./app.js']
  },
  output: {
    path: './build',
    filename: 'bundle-[hash].js'
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'ng-annotate!babel?presets=es2015', exclude: /node_modules/ },
      { test: /\.html$/, loader: 'html' },
      { test: /\.less/, loader: ExtractTextPlugin.extract('style', 'css!less?sourceMap') },
      { test: /\.css$/, loader: ExtractTextPlugin.extract('style', 'css') },
      { test: /\.(woff2?|ttf|eot|svg)(.*)?$/, loader: "file?name=fonts/[name].[ext]" },
      { test: /\.(jpe?g|png|gif|svg)$/i, loaders:
        [
            'file?hash=sha512&digest=hex&name=[hash].[ext]',
            'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
        ]}
    ]
  },
  plugins: [
    new CleanPlugin(['build']),
    new ExtractTextPlugin('[name]-[hash].css'),
    new webpack.optimize.DedupePlugin(),
    new HtmlWebpackPlugin({
      template: './index.html',
      inject: 'body'
    }),
    new webpack.DefinePlugin({
      URL: JSON.stringify('http://10.10.54.71:8081/')
    }),
    new FaviconsWebpackPlugin('./img/my-logo.png')
  ]
};
