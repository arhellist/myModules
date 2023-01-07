const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: './src/entry.js', // ТОЧКА ВХОДА! Этот файл указан по умолчанию,
                             // но при желании его можно изменить, указав относительный путь к файлу
    output: {
        path: path.resolve(__dirname,'dist'), // Результирующий файл и путь к нему
        filename: 'app.bandle.js',
    },
    module: {
        rules: [
            {
                test: /\.css/,
                use: [
                    MiniCSSExtractPlugin.loader,
                    'css-loader',
                ],
            },
        ],
    },
    plugins: [
new HtmlWebpackPlugin(
    {
    template: './src/index.html',
    filename: 'main.html',
    },
),
new MiniCSSExtractPlugin(),
    ],

                            };