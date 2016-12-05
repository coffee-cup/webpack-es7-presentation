## W3. Entry / Output

#### Entry

```javascript
entry: path.resolve(__dirname, 'app.js'),
```

Start in `app.js` following all dependencies and bundle into single file

#### Output

Output bundled file to `__dirname/build/app.js`

```javascript
output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'build')
},
```
