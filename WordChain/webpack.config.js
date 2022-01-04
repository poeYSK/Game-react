const path = require('path');

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
                plugins: ['@babel/plugin-proposal-class-properties']
            }
        }],
    },
    output: { // 출력
        path: path.join(__dirname, 'dist'),
        filename: 'app.js',
    },
};