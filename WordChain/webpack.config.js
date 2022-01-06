const path = require('path');
const RefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

module.exports = {
    name: 'word-chain-setting',
    mode: 'development', // 실서비스: production
    devtool: 'eval',
    resolve: { // 확장자를 알아서 찾아줌.
        extensions: ['.js', '.jsx']
    },

    entry: { // 입력
        app: ['./client'],
    },

    module: {
        rules: [{
            test: /\.jsx?/,
            loader: 'babel-loader',
            options: {
                presets: ['@babel/env','@babel/react'],
                plugins: [
                    '@babel/plugin-proposal-class-properties',
                    'react-refresh/babel',
                ]
            }
        }],
    },
    plugins: [
        new RefreshWebpackPlugin()
    ],
    output: { // 출력
        path: path.join(__dirname, 'dist'),
        filename: 'app.js',
        publicPath: '/dist/',
    },
    devServer: {
        devMiddleware: { publicPath: '/dist/' },
        static: { directory: path.resolve(__dirname) },
        hot: true,
    },
};