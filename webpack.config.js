const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

  entry: './src/script/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  // exclude: /(node_modules|bower_components)/,
  mode: 'development',
  devServer: {
    port: 5555,
    open: true,
    writeToDisk: true
  },

  //Shows the source file error line
  // devtool: "inline-source-map",

  module: {
    rules: [
      {
        test: /\.m?js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },

      {
        test: /\.(png|jpeg|gif|jpg|svg)$/i,
        loader: 'file-loader',
        options: {
          name: '[path][name].[ext]',
          context: path.resolve(__dirname, "src/")
        },
      },
      {
        test: /\.(ttf|svg|eot|woff|woff2)$/i,
        loader: 'file-loader',
        options: {
          name: '[path][name].[ext]',
          context: path.resolve(__dirname, "src/")
        },
      },
      {
        test: /\.(css)$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          //   options: {
          //     publicPath: (resourcePath, context) => {
          //       // publicPath is the relative path of the resource to the context
          //       // e.g. for ./css/admin/main.css the publicPath will be ../../
          //       // while for ./css/main.css the publicPath will be ../
          //       return path.relative(path.dirname(resourcePath), context) + '/';
          //     },
          //     // by default it uses publicPath in webpackOptions.output

          //     hmr: process.env.NODE_ENV === 'development',

          //   },
          },
          // 'style-loader',
          //'css-loader?url=false',
          'css-loader',
          // 'resolve-url-loader'
        
        ],
      },
      {
        test: /\.html$/,
        use: [
          {
          	loader: 'webpack-atom-loader',
          	options: {
          		configPath: path.resolve('./atomCssConfig.js')
          	}
          },
          {
            loader: 'html-loader',
          }
        ],
      },
     
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // all options are optional
      filename: 'style.css',
      chunkFilename: '[id].css',
      ignoreOrder: false, // Enable to remove warnings about conflicting order
    }),
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    })
  ],

}
