## The Configuration File

```javascript
var webpack = require('webpack');
var path = require('path');

var isProd = process.env.NODE_ENV === 'production';

var rootDir = process.cwd();
var entry = path.resolve(rootDir, 'js/src/astro-client.js');
var outDir = path.resolve(rootDir, 'js/build');

var config = {
  entry: entry,
    output: {
        filename: 'astro-client.js',
        path: outDir,
        library: 'Astro',
        libraryTarget: 'umd'
    },
    plugins: [
        new webpack.LoaderOptionsPlugin({
            options: {
                eslint: {
                    configFile: path.resolve(rootDir, '.eslintrc.yml')
                }
            }
        })
    ],
    module: {
        rules: [{
            test: /\.js$/,
            enforce: 'pre',
            use: ['eslint-loader'],
            exclude: /node_modules/
        }]
    }
};

if (isProd) {
    config.plugins = config.plugins.concat([
        new webpack.optimize.UglifyJsPlugin(),
        new webpack.optimize.OccurrenceOrderPlugin()
    ]);
}

module.exports = config;
```
