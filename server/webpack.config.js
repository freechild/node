const path = require("path");
const webpack = require('webpack');
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
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
      }
    ]
  },
  devServer:{
    contentBase:"./dist",
    hot:true
  },
  // plugins:[
  //   new HtmlWebPackPlugin({
  //     template: "./src/index.html",
  //     filename: "./index.html"
  //   }),
  //   new webpack.HotModuleReplacementPlugin()
  // ]
}
