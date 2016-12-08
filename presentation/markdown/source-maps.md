## W7. Source Maps

Source maps are useful to debug code in development. Webpack has [a few useful options for this](https://webpack.js.org/configuration/devtool/#devtool).

```javascript
if (!isProd) {
    config.devtool = 'inline-source-map`;
}
```

`inline-source-map` adds the map as a DataUrl to the bundle.
