const path = require('path');

module.exports = {
    mode: 'development',
    devtool: 'eval',
    resolve:{
        extensions: ['.jsx', '.js'],
    },
    entry: {
        app: './client',
    },
    module: {
        rules: [{
            test:/\.jsx?$/,
            loader: 'babel-loader',
            options: {
                presets: [
                    '@babel/preset-env', // env: 브라우저의 지원을 설정할 수 있음.
                    '@babel/preset-react'
                ],
                plugins: [],
            },
        }]
    },
    output: {
        filename: 'app.js',
        path: path.join(__dirname, 'dist'),
    },
}