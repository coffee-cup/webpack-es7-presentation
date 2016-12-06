## Babel Plugins

Babel plugins need to be install as NPM dev dependencies

```bash
npm install --save-dev babel-preset-es2015
```

The plugins Babel should use are defined in a `.babelrc` file

```javascript
{
  "presets": ["es2015"]
}
```

The _es2015_ plugin will compile ES2015 code to ES5
