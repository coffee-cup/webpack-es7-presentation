## W6. Plugins

Plugins extend Webpack's functionality.

```javascript
plugins: [
    new require('webpack-notifier')(),
    new webpack.LoaderOptionsPlugin({
        options: {
            eslint: {
                configFile: path.resolve(rootDir, '.eslintrc.yml'),
                formatter: require('eslint/lib/formatters/unix')
            }
        }
    })
],
```

The notifier plugin will trigger native macOS notifications when the build status changes.

The loader options plugin can set additional configuration for loaders.
