## Destructuring

Allows binding using pattern matching, with support for matching arrays and objects.

```javascript
// Arrays
const [a, , c] = [1, 2, 3]; // a = 1, c = 3

// Objects
const { a, l: { b }} = {
    a: 1,
    l: {
        b: 2
    }
} // a = 1, b = 2
```
