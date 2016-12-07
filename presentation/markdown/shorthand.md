## Shorthand

Simpler object construction

```javascript
const obj = {
    // value: value
    value,

    // toString: function() {}
    toString() {
        // access to super
        return 'hello, ' + super.toString()
    },

    // dynamic property names
    ['key_' + 6]: 6
};
```
