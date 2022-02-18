const path = requre("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: "./src/index.js",
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/template.html"
        }),
    ],
    module: {
        rules: [
            {
                test: /\.(s(a|c)ss)$/,
                use: [
                    "style-loader",     // 3. Inject styles into DOM
                    "css-loader",       // 2. Turns CSS into commonjs
                    "sass-loader"       // 1.Turns sass into css
                ]
            },
            {
                test: /\.(js|jsx)$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.html$/,
                use: ["html-loader"]
            },
            {
                test: /\.(svg|png|jpg|jpeg|gif)$/,
                use: {
                    loader: "file-loader",
                    options: {
                        name: "[name].[ext]",
                        outputPath: "img"
                    }
                }
            }
        ]
    }
}