## W5. Rules and Loaders

```javascript
module: {
    rules: [{
```

Webpack uses rules to read and manipulate modules.

```javascript
        test: /\.js$/,
        enforce: 'pre',
        use: ['eslint-loader'],
        exclude: /node_modules/
    },
```
The above rule will run eslint on all `.js` files before any other loader _(enfore pre)_.

```
    {
        test: /\.js$/,
        use: ['babel-loader'],
        exclude: /node_modules/
    }]
},
```

After running eslint, run babel to transplile all `.js` files.
