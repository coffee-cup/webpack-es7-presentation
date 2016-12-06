## W7. Optimization

Webpack comes with some [useful plugins](https://github.com/webpack/docs/wiki/optimization) for optimizing build files in production.

Optimizing does increase the build time.

- [UglifyJsPlugin](http://webpack.github.io/docs/list-of-plugins.html#uglifyjsplugin)
    + Minify and shorten variable names
- [OccurrenceOrderPlugin](https://webpack.github.io/docs/list-of-plugins.html#occurrenceorderplugin)
    + Assign the module and chunk ids by occurrence count. Ids that are used often get shorter ids, which reduces the file size

```javascript
if (isProd) {
    config.plugins = config.plugins.concat([
        new webpack.optimize.UglifyJsPlugin(),
        new webpack.optimize.OccurrenceOrderPlugin()
    ]);
}
```
