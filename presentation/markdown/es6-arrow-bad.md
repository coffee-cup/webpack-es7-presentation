## Arrows Sometimes Bad 🙅

Arrow functions do not completely replace normal functions. There are some cases where you want `this` to be binded to the object calling the function.

_Example: Prototypes_

```javascript
AnchoredLayoutPlugin.prototype.method = (value) => {
    this.internalMethod(value);
};
```

Will actually transpile to

```javascript
AnchoredLayoutPlugin.prototype.method = function(value) {
    undefined.internalMethod(value);
};
```
