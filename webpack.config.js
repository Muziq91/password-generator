const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports={
    entry:'./src/index.js',
    output:{
        path: path.join(__dirname,'/dist'),
        filename:'app.bundle.js'
    },
    module:{
        rules:[
            {
                test:/\.js$/,
                exclude: /node_modules/,
                use:{
                        loader:'babel-loader'
                    }
            },
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, "css-loader"]
              }
        ]// rules ends
    }, // modules ends
    plugins:[
        new HtmlWebpackPlugin({
            title: 'Password Generator',
            template: './src/index.html'
          }),
          new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css"
          })
    ] // plugins ends
}