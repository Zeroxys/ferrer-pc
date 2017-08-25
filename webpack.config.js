const path = require('path')
const cleanWebpackPlugin = require('clean-webpack-plugin')
const browserSyncPlugin = require('browser-sync-webpack-plugin')
const extractTextPlugin = require('extract-text-webpack-plugin')
const autoprefixer = require('autoprefixer-stylus')

module.exports = {
  entry : './resources/assets/js/app.js',
  output : {
    filename : 'bundle.js',
    path : path.resolve(__dirname, './public')
  },

  module : {
    rules : [
      {
        test: /\.php$/, use : 'php-loader'
      },

      {
        test : /\.css/, use : extractTextPlugin.extract({
          use : ['css-loader',{
            loader : 'stylus-loader',
            options : {
              use : [autoprefixer()]
            }
          }]
        })
      },

      {
        test : /\.(png|jpe?g)$/,
        use : [
          {
            loader : 'file-loader',
            options : {
              name : '[name].[ext]',
              outputPath : './storage/img',
            }
          }
        ]
      },

      {
        test : /\.js/, exclude : /(node_modules)/, use : [{
          loader : 'babel-loader',
          options : {
            presets : ['react','es2016','es2017','stage-0'],
            plugins: ['babel-plugin-transform-es2015-modules-commonjs']
          }
        }]
      },

      {
        test: /\.(woff|woff2|eot|ttf|svg|otf|gif)$/,
        use : [
          {
            loader : 'url-loader',
            options : {
              name : '[name].[ext]',
              outputPath : 'assets/fonts/',
              limit : 10000,
            }
          }
        ]
      },

    ]
  },

  plugins : [
    // new browserSyncPlugin({
    //   host: 'localhost',
    //   port : '8000',
    //   server : { baseDir : ['views']},
    //   open : false,
    // }),s

    new extractTextPlugin('styles.css'),

    new cleanWebpackPlugin(['./public/bundle.js'])
  ]
}