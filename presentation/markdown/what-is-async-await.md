## What is Async/Await

_Async_ and _Await_ is way to make promises synchronous.

ES5
```javascript
var callApi = function(url) {
    return fetch(url).then(function(response) {
        return response.json();
    });   
};
```

ES6
```javascript
const callApi = async (url) => {
    const response = await fetch(url);
    return response.json();
};
```
