## What does it look like?

**webpack.config.js**

```javascript
var webpack = require('webpack');
var path = require('path');
var BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

var rootDir = process.cwd();
var entry = path.resolve(rootDir, 'app.js');
var outDir = path.resolve(rootDir, 'build');

var isProd = process.env.NODE_ENV === 'production';
var analyzeBundle = process.env.ASTRO_ANALYZE === 'true';

var config = {
    entry: [entry],
    output: {
        filename: 'app.js',
        path: outDir
    },
    resolve: {
        alias: {
            astro: path.resolve(rootDir, 'vendor/astro/src/'),
            vendor: path.resolve(rootDir, 'vendor/astro/vendor/'),
            bluebird: path.resolve(rootDir, '../../node_modules/bluebird')
        }
    },
    module: {
        rules: [{
            test: /\.js$/,
            enforce: 'pre',
            use: ['eslint-loader'],
            exclude: /node_modules/
        }, {
            test: /\.js$/,
            use: ['babel-loader'],
            exclude: /node_modules/
        }]
    },
    plugins: [
        new webpack.optimize.LimitChunkCountPlugin({
            maxChunks: 1
        }),
        new webpack.LoaderOptionsPlugin({
            options: {
                eslint: {
                    configFile: path.resolve(rootDir, '.eslintrc.yml'),
                    formatter: require('eslint/lib/formatters/unix')
                }
            }
        })
    ],
};

if (isProd) {
    config.plugins = config.plugins.concat([
        new webpack.optimize.UglifyJsPlugin(),
        new webpack.optimize.OccurrenceOrderPlugin()
    ]);
} else {
    config.devtool = 'eval';
}

if (analyzeBundle) {
    config.plugins = config.plugins.concat([
        new BundleAnalyzerPlugin({
            analyzerMode: 'static',
            openAnalyzer: true
        })
    ]);
}

module.exports = config;
```
