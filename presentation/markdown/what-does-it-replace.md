## What Does Webpack Replace?

Astro and Astro apps currently use [RequireJS](http://requirejs.org/) invoked with [Grunt tasks](http://gruntjs.com/) to build the [Astro Client](https://github.com/mobify/astro/blob/release-v0.17.3/tasks/config/requirejs.js) and [App.js](https://github.com/mobify/astro/blob/release-v0.17.3/sandbox/app/tasks/config/requirejs.js)

We used to build App.js with

```bash
grunt build
```

and Astro Client with

```bash
grunt requirejs:astro_client
```
