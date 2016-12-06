## W4. Resolving

By default, local dependencies are imported relative to the current file. NPM dependencies are imported using only their name.

_This is comparable to the [config.js](#) file we used with RequireJS._

```javascript
resolve: {
    alias: {
        astro: path.resolve(__dirname, 'vendor/astro/src/'),
        vendor: path.resolve(__dirname, 'vendor/astro/vendor/'),
        bluebird: path.resolve(__dirname, '../../node_modules/bluebird')
    }
},
```

`import AstroPlugin from 'astro/plugins/astroPlugin`

↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ _**resolves too**_ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ 

`import AstroPlugin from __dirname/vendor/astro/src/plugins/astroPlugin`
