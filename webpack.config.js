const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const BUILD_DIRECTORY = 'build';

const JS_FILE_MASK = '[name].bundle.[chunkhash].js';
const CSS_FILE_MASK = '[name].styles.[chunkhash].css';

module.exports = {

    // Watch mode
    watch: true,

    entry: {
        vendors: [
            // Lib size: 274Kb
            'jquery',

            // Lib size: 542Kb
            'lodash',
        ],
        app: [
            './src/js/app.js',
            './src/sass/app.scss',
        ],
    },

    module: {
        rules: [{
            test: /\.(css|scss)/,
            use: ExtractTextPlugin.extract([
                'css-loader',
                'sass-loader',
            ])
        }],
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
        }),

        // To load vendors first and exclude it from 'app' bundle
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendors',
            filename: JS_FILE_MASK,
        }),

        // To build styles
        new ExtractTextPlugin({
            filename: CSS_FILE_MASK,
        }),
    ]
};
