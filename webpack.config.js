const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const BUILD_DIRECTORY = 'build';

const JS_FILE_MASK = '[name].bundle.[chunkhash].js';
const CSS_FILE_MASK = '[name].styles.[chunkhash].css';

const extractAppCSS = new ExtractTextPlugin({ filename: CSS_FILE_MASK });

module.exports = {

    // Watch mode
    watch: true,

    entry: {
        vendors: [
            'jquery',
            'lodash',
            'slick-carousel',
        ],
        app: [
            './src/js/app.js',
            './src/sass/app.scss',
            './node_modules/slick-carousel/slick/slick.scss',
        ],
    },

    module: {
        rules: [{
            test: /\.(css|scss)/,
            use: extractAppCSS.extract([
                'css-loader',
                'sass-loader',
            ]),
        }, {
            test: /\.(png|svg|jpe?g|gif)$/,
            use: [
                'file-loader'
            ]
        }, {
            test: /\.(woff|woff2|eot|ttf|otf)$/,
            use: [
                'file-loader'
            ]
        }]
    },

    output: {
        path: `${__dirname}/${BUILD_DIRECTORY}`,
        filename: JS_FILE_MASK,
    },

    plugins: [
        // To clean build directory
        new CleanWebpackPlugin(BUILD_DIRECTORY, {}),

        // To use existing HTML template
        new HtmlWebpackPlugin({
            template: 'src/templates/index.html',
        }),

        // To build vendors (all libs)
        // Libs should be added to package.json
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            _: 'lodash',
            lodash: 'lodash',
            slick: 'slick-carousel',
            'slick-carousel': 'slick-carousel',
        }),

        // To load vendors first and exclude it from 'app' bundle
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendors',
            filename: JS_FILE_MASK,
        }),

        // To build styles
        extractAppCSS,
    ]
};
