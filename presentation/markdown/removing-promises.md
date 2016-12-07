## Removing Promises

_Promise.join's_ can be replaces by awaiting on _Promise.all's_ with array destructuring.

<div class='left'>
ES5
<pre class='hljs'>
```
Promise.join(
    AnchoredLayoutPlugin.init(),
    DrawerPlugin.init(),
    NavigationPlugin.init(),
function(
    layout,
    drawer,
    navigationView) {
        // Usage is 3 levels deep 👎
    }
);
```
</pre>
</div>


<div class='left'>
ES6
<pre class='hljs'>
```
const [
    layout,
    drawer,
    navigationView
] = await Promise.all([
    AnchoredLayoutPlugin.init(),
    DrawerPlugin.init(),
    NavigationPlugin.init()
]);

// Usage is 1 level deep 👍
```
</pre>
</div>
