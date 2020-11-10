const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

let isDev = process.env.NODE_ENV === "dev";

module.exports = {
    entry: {
        index: ['./src/main.js']
    },
    output: {
        filename: 'dist/js/bundle.[hash].js',
        path: path.resolve('./'),
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    devServer: {
        host: 'localhost',
        inline: true,
        port: 8011,
        open: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/main.html',
            filename: 'index.html',
            minify: {
                collapseWhitespace: true,
            },
            hash: true,
            stats: {
                children: false
            }
        })],
    module: {
        rules: [
            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader',
                        options: {
                            attrs: false
                        }
                    }
                ]
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-react', '@babel/preset-env']
                    }
                }
            },
            {
                test: /\.(css|scss|sass)$/,
                use: [
                    'styles-loader',
                    'css-loader',
                    'postcss-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.(gif|jpg|png|svg)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            publicPath: isDev ? '' : '../images',
                            outputPath: './dist/images',
                            name: 'i.[hash].[ext]'
                        }
                    }
                ]
            }
        ]
    }
};
