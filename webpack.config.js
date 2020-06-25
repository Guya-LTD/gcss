// Webpack uses this to work with directories
const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

// This is the main configuration object.
// Here you write different options and tell Webpack what to do
module.exports = {

  // Path to your entry point. From this file Webpack will begin his work
  entry: {
      main: ['./js/src/index.js', './sass/gcss.sass']
  },


  plugins: [

    new MiniCssExtractPlugin({
      filename: process.env.NODE_ENV === 'production' ? "./css/gcss.min.css" : "./css/gcss.css",
      chunkFilename: '[id].css'
    }),

    
  ],

  optimization: {
    minimizer: []
  },

  module:{
    rules: [
        {
          test: /\.m?js$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-env']
            }
          }
        },
        {
          // Apply rule for .sass, .scss or .css files
          test: /\.(sa|sc|c)ss$/,
    
          // Set loaders to transform files.
          // Loaders are applying from right to left(!)
          // The first loader will be applied after others
          use: [
                {
                    // After all CSS loaders we use plugin to do his work.
                    // It gets all transformed CSS and extracts it into separate
                    // single bundled file
                    loader: MiniCssExtractPlugin.loader
                }, 
                 {
                   // This loader resolves url() and @imports inside CSS
                   loader: "css-loader",
                 },
                 {
                   // Then we apply postCSS fixes like autoprefixer and minifying
                   loader: "postcss-loader"
                 },
                 {
                   // First we transform SASS to standard CSS
                   loader: "sass-loader",
                   options: {
                     implementation: require("sass"),
                   }
                 },
                 {
                     loader: 'resolve-url-loader'
                 }
               ]
        },
        {
            test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
            use: [
              {
                loader: 'file-loader',
                options: {
                  name: '[path][name].[ext]',
                }
              }
            ]
          },
    ],
  },

  // Path and filename of your result bundle.
  // Webpack will bundle all JavaScript into this file
  output: {
    path: path.resolve(__dirname, 'dist'),
    //filename: './js/gcss.js', // process.env.NODE_ENV === 'production' ? './js/gcss.min.js' : './js/gcss.js' ,
    filename: process.env.NODE_ENV === 'production' ? './js/gcss.min.js' : './js/gcss.js',
    //sourceMapFilename: process.env.NODE_ENV === 'production' ? '[file].min.map' : '[file].map',
    sourceMapFilename: '[file].map',
  },

  devtool: 'source-map',

  // Default mode for Webpack is production.
  // Depending on mode Webpack will apply different things
  // on final bundle. For now we don't need production's JavaScript 
  // minifying and other thing so let's set mode to development
  mode: process.env.NODE_ENV || 'development'
};


if (process.env.NODE_ENV === 'production') {
    module.exports.optimization.minimizer.push(new UglifyJsPlugin());
}