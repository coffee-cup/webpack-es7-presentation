## Promises top-level

_Async_ functions return promises at the top level. This means

- Promises can be awaited on
    + the `.then` result is returned if successful
    + error is thrown with error from `.catch`
- Non Async/Await scripts can call a library that uses them

```javascript
const callApi = async (url) => {
    const response = await fetch(url);
    return response.json();
};

callApi('https://www.api.com').then((data) => {
    console.log(data);
});
```
