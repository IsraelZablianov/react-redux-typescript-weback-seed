const path = require('path');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: "./src/index.tsx",
    output: {
        filename: "index.js",
        path: path.resolve(__dirname, './dist'),
        publicPath: 'dist/',
    },
    devtool: "source-map",
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".json"]
    },
    module: {
        rules: [
        {
            test: /\.(png|jpg|gif|svg)$/,
            loader: 'url-loader'
        },
        {
            test: /\.html$/,
            loader: 'html-loader'
        },
        {
            test: /\.tsx?$/,
            loader: "ts-loader"
        },
        {
            test: /\.(less$|css)/,
            use: [{
                loader: "style-loader" // creates style nodes from JS strings
            }, {
                loader: "css-loader" // translates CSS into CommonJS
            }, {
                loader: "less-loader" // compiles Less to CSS
            }]
        }
        ]
    },
    devServer: {
        hot: true,
        stats: 'minimal'
    },
    plugins: [
        new CopyWebpackPlugin([
            { from: 'src/assets', to: 'assets' }
        ]),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin()
    ]
};