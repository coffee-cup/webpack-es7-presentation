## Arrow Functions

Shorthand for defining functions where the context, `this`, is not rebound.


ES5
```javascript
this.ten = 10;
var self = this;
setTimeout(function() {
    self.tenAdded = [1, 2, 3].map(function(a) {
        return a + self.ten;
    });
}, 1000);
// this.tenAdded = [11, 12, 13]
```

ES6
```javascript
this.ten = 10;
setTimeout(() => {
    this.tenAdded = [1, 2, 3].map((a) => a + this.ten)
}, 1000)
// this.tenAdded = [11, 12, 13]
```
