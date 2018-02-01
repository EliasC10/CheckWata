const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: {
      'page1': './src/index.js',
      'page2': './src/comparison.js',
      'page3': './src/tipp.js',
      'page4': './src/impressum.js'
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            title: 'Index',
            chunks: ['page1'],
            filename: 'index.html',
            template: 'src/index.html'
        }),
        new HtmlWebpackPlugin({
          title: 'Comparison',
          chunks: ['page2'],
          filename: 'comparison.html',
          template: 'src/comparison.html'
        }),
        new HtmlWebpackPlugin({
          title: 'Tipps',
          chunks: ['page3'],
          filename: 'tipp.html',
          template: 'src/tipp.html'
        }),
        new HtmlWebpackPlugin({
            title: 'Impressum',
            chunks: ['page4'],
            filename: 'impressum.html',
            template: 'src/impressum.html'
          }),
        new webpack.ProvidePlugin({
          $ : 'jquery',
          jQuery : 'jquery',
          d3 : 'd3'
        }),
        new CopyWebpackPlugin([
          {from: './src/json/countries_search.json'}
        ])
    ],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: './dist/[name].[hash].js'
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
