const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
    template: './app/public/index.html',
    filename: 'index.html',
    inject: 'body'
});


module.exports = {
    devtool: 'eval',
    entry: [
        './app/index.jsx'
    ],
    output: {
        path: path.resolve('dist'),
        filename: 'index_bundle.js'
    },
    resolve: {
        alias: {
            App: path.resolve('app/components/App.jsx'),
            Header: path.resolve('app/components/Header.jsx'),
            Weather: path.resolve('app/components/Weather.jsx'),
            About: path.resolve('app/components/About.jsx'),
            Examples: path.resolve('app/components/Examples.jsx'),
            WeatherForm: path.resolve('app/components/WeatherForm.jsx'),
            WeatherMessage: path.resolve('app/components/WeatherMessage.jsx'),
            ErrorModal: path.resolve('app/components/ErrorModal.jsx'),
            parameters: path.resolve('app/parameters.js'),
            appStyles: path.resolve('app/styles/app.css')
        },
        extensions: ['*', '.js', '.jsx']
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        // Can be separated to .babelrc file
                        presets : ['react', 'es2015', 'stage-0']
                    }
                }
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                loaders: 'style-loader!css-loader!sass-loader'
            }]
    },
    devServer: {
        historyApiFallback: true
    },
    plugins: [
        HtmlWebpackPluginConfig
    ]
}
