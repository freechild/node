const path = require("path");
const webpack = require('webpack');
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
  cache: true,
  watch: true,
  entry:{
    'test/js/app': ['babel-polyfill',"./src/test/js/app.js"],
  },
  output:{
    path: path.resolve(__dirname,"dist"),
    filename:"[name].bundle.js"
  },
  module:{
    rules:[
      {
        test:/\.pug$/,
        use:"pug-html-loader"
      },
      {
        test: /\.js$/,
        use:{
          loader:"babel-loader"
        }
      },
      {
        test: /\.html$/,
        use:[
          {
            loader: "html-loader"
          }
        ]
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader','sass-loader']
      },
      {
        test: /\.(ico|jpg|jpeg|gif|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              name: '[name].[ext]?[hash]',
              limit: 10000
            }
          }
        ]        
      },
      {
        test: /\.(ico|png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: [
          {
            loader: 'url-loader?limit=100000&name=./[name]/[hash].[ext]',
            options: {
              publicPath:'../',
            }
          }
        ]        
      },
    ]
  },
  devServer:{
    contentBase:'dist',
    hot:true
  },
  plugins:[
    new webpack.optimize.ModuleConcatenationPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      name: "test/js/vendor"
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'), // 아래 EnvironmentPlugin처럼 할 수도 있습니다.
    }),
    new webpack.optimize.UglifyJsPlugin(),
  //   new HtmlWebPackPlugin({
  //     template: "./src/index.html",
  //     filename: "./index.html"
  //   }),
  //   new webpack.HotModuleReplacementPlugin()
  ]
}
