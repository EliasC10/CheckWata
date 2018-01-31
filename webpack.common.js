const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            title: 'Production',
            template: path.join(__dirname, './src/index.html')
        }),
        new webpack.ProvidePlugin({
          $ : 'jquery',
          jQuery : 'jquery'
        }),
        new CopyWebpackPlugin([
          {from: './src/json/countries_search.json'}
        ])
    ],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: './dist/index.[hash].js'
  },

  externals: {
    './countries_search.json' : "require('./dist/json/countries_search.json')"
  },

  module: {
      rules: [
      {
        test: /\.(scss|css)$/,
          use: [{
              loader: "style-loader" // creates style nodes from JS strings
          }, {
              loader: "css-loader" // translates CSS into CommonJS
          }, {
              loader: "sass-loader" // compiles Sass to CSS
          }]
    },
    {
          test: /\.(png|jpg|gif|jpeg)$/,
          use: [
             'file-loader',
             'image-webpack-loader'
          ]
      },
      {
          test: /\.(woff|woff2|eot|ttf|otf)$/,
          use: [
              'file-loader'
          ]
      },
      {
          test: /\.js$/,
          exclude: /(node_modules)/,
          loader:['babel-loader']
      },
      {
          test: /\.svg$/,
          loader: 'svg-inline-loader'
   },
   {
        test: /\.json$/,
        loader: 'json-loader'
      }
    ]
  }
  };
