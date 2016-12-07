## Enable Their Use

A few things need to be installed in order to use _Async_ and _Await_.

- [syntax-async-functions](https://babeljs.io/docs/plugins/syntax-async-functions/)
- [transform-async-to-module-method](https://babeljs.io/docs/plugins/transform-async-to-module-method/)
- [regenerator-runtime](https://babeljs.io/docs/plugins/transform-regenerator/)

```bash
npm i --save-dev babel-plugin-syntax-async-functions babel-plugin-transform-async-to-module-method babel-plugin-transform-runtime
npm i --save babel-runtime
```

`.babelrc`

```javascript
"plugins": [
    "babel-plugin-syntax-async-functions",
    ["transform-async-to-module-method", {
        "module": "bluebird",
        "method": "coroutine"
    }],
    ["transform-runtime", {
        "polyfill": true,
        "regenerator": true
    }]
]
```
