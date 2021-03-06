var path = require("path");
var webpack = require("webpack");
module.exports = {
    // This is the main file that should include all other JS files
    entry: {
      header: './src/common/header.js'
    },
    target: "web",
    debug: true,
    devtool: "source-map",
    // We are watching in the gulp.watch, so tell webpack not to watch
    watch: true,
    //watchDelay: 300,
    output: {
      path: './built',
      filename: '[name].built.js'
    },
    resolve: {
        // Tell webpack to look for required files in bower and node
        modulesDirectories: ['bower_components', 'node_modules', 'public'],
        fallback: ['./public']
    },
    module: {
        loaders: [{
                test: /\.css$/,
                loader: "style-loader!css-loader"
            }, {
                test: /\.less$/,
                loader: "style-loader!css-loader!less-loader"
            }, {
                test: /\.gif/,
                loader: "file-loader!url-loader?limit=10000&minetype=image/gif"
            }, {
                test: /\.jpg/,
                loader: "file-loader!url-loader?limit=10000&minetype=image/jpg"
            }, {
                test: /\.png/,
                loader: "file-loader!url-loader?limit=10000&minetype=image/png"
            }, {
                test: /\.jsx/,
                loader: "jsx-loader"
            },

            // required for bootstrap/flat-ui
            {
                test: /\.woff$/,
                loader: "url-loader?prefix=font/&limit=5000&mimetype=application/font-woff"
            }, {
                test: /\.ttf$/,
                loader: "file-loader"
            }, {
                test: /\.eot$/,
                loader: "file-loader"
            }, {
                test: /\.svg$/,
                loader: "file-loader"
            },
        ],
        noParse: /\.min\.js/
    },
    plugins: [
        // If you want to minify everything
        //new webpack.optimize.UglifyJsPlugin()
    ]
};
