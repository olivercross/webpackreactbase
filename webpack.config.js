const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

    entry: './src/app.js',
    devtool: 'inline-source-map',
    output:{
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/'
    },

    module: {
        rules: [
          {
            test: /.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
              loader: "babel-loader"
            }
          },
          {
            test: /.css$/,
            use: ['style-loader', 'css-loader']
          }
        ]
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: './src/index.html'
            })
          ],
    resolve: { extensions: [".js", ".jsx"] },

    devServer: {
        contentBase: './dist',
        historyApiFallback: true

    },

}