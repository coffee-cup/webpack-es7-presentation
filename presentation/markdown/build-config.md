## W2. Build Configurations

Use environment variables,

```javascript
var isProd = process.env.NODE_ENV === 'production';
var analyzeBundle = process.env.ASTRO_ANALYZE === 'true';
```

for different build configurations.

```javascript
// Production only config
if (isProd) {
    ...
} else {
    // Development only config
    ...
}

// Custom config
if (analyzeBundle) {
    ...
}
```

