## W3. Entry / Output

#### Entry

```javascript
entry: path.resolve(rootDir, 'app.js'),
```

Start in `app.js` following all dependencies and bundle into single file

#### Output

```javascript
output: {
    filename: 'app.js',
    path: path.resolve(rootDir, 'build')
},
```

Output bundled file to `rootDir/build/app.js`
