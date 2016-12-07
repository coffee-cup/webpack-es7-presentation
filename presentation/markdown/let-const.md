## `let` and `const`

`const` is signal that **the identifier won't be reassigned**

`let` is a signal that **the variable may be reassigned**

```javascript
const a = 'poddle';
let b = 'pug';

a = 'lab' // Error
b = 'beagle' // OK
```

These new identifiers are not [hoisted](http://www.adequatelygood.com/JavaScript-Scoping-and-Hoisting.html) like `var` is.

```javascript
if (false) var x = 2;
if (false) let y = 3;

console.log('x: ' + x); // x: undefined
console.log('y: ' + y); // Reference Error
```
