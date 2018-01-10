const webpack = require('webpack');
const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const ChunkManifestPlugin = require('chunk-manifest-webpack-plugin');
const WebpackChunkHash = require('webpack-chunk-hash');


const config = {
  context: path.resolve(__dirname, 'src'),
  watch: true,
  
  entry:{
    'test/js/app': "./test/js/app.js",
    'test/js/vendor': ['babel-polyfill','react', 'react-dom'],
  },

  module: {
    rules: [
      
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(jpg|jpeg|gif|png|svg|woff|woff2)$/,
        use: {
          loader: 'url-loader?limit=100000&name=./[name]/[hash].[ext]',
          options: { publicPath:'../', },
        },
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader','sass-loader']
      },
      {
        test:/\.pug$/,
        use:"pug-html-loader"
      },
      
    ],
  },

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
    publicPath: '/',
  },

  resolve: {
    extensions: ['.js'],
    modules: [path.resolve(__dirname, 'src'), 'node_modules'],
  },

  plugins: [
    // Add scope hoisting
    new webpack.optimize.ModuleConcatenationPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'test/js/vendor',
    }),
    
  ],

  devServer: {
    historyApiFallback: true,
  },
};


if (process.env.NODE_ENV === 'production') {
  config.output.filename = '[name].[chunkhash].js';
  config.plugins = [
    ...config.plugins,
    new webpack.HashedModuleIdsPlugin(),
    new WebpackChunkHash(),
    new ChunkManifestPlugin({
      filename: 'chunk-manifest.json',
      manifestVariable: 'webpackManifest',
      inlineManifest: true,
    }),
  ];
}




module.exports = config;