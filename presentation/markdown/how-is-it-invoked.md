## How To Invoke It

Instead of calling `webpack` directly, we build our JavaScript with NPM scripts.

```javascript
"scripts": {
    "deps": "./scripts/build-dependencies.sh ./app",
    "test": "./scripts/ios-appium.sh",
    "build": "webpack --config webpack.app.config.js",
    "build-analyze": "ASTRO_ANALYZE=true npm run build"
}
```

Build with

```bash
npm run build
```
