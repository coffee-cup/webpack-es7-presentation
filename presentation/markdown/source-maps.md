## Source Maps

Source maps are useful to debug code in development. Webpack has [a few useful source maps options](https://webpack.js.org/configuration/devtool/#devtool)

```javascript
if (!isProd) {
    config.devtool = 'inline-source-map`;
}
```

`inline-source-map` adds the map as a DataUrl to the bundle.
