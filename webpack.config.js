const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './src/index.js',
  plugins: [new MiniCssExtractPlugin()],
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath:""
  },
  
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
            {
                loader: MiniCssExtractPlugin.loader, 
                options: {
                    publicPath: ''
                }
            },
            {
                loader: "css-loader"
            }
        ]
      },
      {
        test: /\.svg$/i,
        use: {
            loader: 'file-loader',
            options: {
                name: "[name].[ext]",
                outputPath: "images",
                publicPath: 'images',
            }
        }
      },
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env', { targets: "defaults" }]
            ]
          }
        }
        },
    ],
  },
};
