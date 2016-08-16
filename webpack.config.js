var autoprefixer = require('autoprefixer');
var precss = require('precss');

const AUTOPREFIXER_BROWSERS = [
    'Android 2.3',
    'Android >= 4',
    'Chrome >= 35',
    'Firefox >= 31',
    'Explorer >= 9',
    'iOS >= 7',
    'Opera >= 12',
    'Safari >= 7.1'
];

module.exports = {
    entry: [
        'babel-polyfill',
        './src/main'
    ],

    output: {
        path: __dirname + '/build/',
        filename: 'app.js'
    },

    devtool: '#source-map',

    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    "presets": ["react", "es2015", "stage-0"],
                    "plugins": ["add-module-exports", "transform-decorators-legacy"]
                }
            },
            {
                test: /\.scss$/,
                loaders: ['style-loader', 'css-loader', 'postcss-loader']
            },
            {
                test: /\.css$/,
                loaders: ['style-loader', 'css-loader', 'postcss-loader']
            }
        ]
    },

    postcss: function plugins(bundler) {
        return {
            defaults: [autoprefixer, precss],
            cleaner: [autoprefixer({browsers: AUTOPREFIXER_BROWSERS})]
        };
    },

    resolve: {
        extensions: ['', '.js', '.jsx']
    }
};
