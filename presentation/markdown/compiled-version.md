## Compiled Version

An _Async_ function is converted to a [Bluebird coroutine](http://bluebirdjs.com/docs/api/promise.coroutine.html).

```javascript
return _regenerator2.default.wrap(function _callee$(_context) {
    while (1) {
        switch (_context.prev = _context.next) {
            case 0:
                _context.next = 2;
                return _bluebird2.default.all([_anchoredLayoutPlugin2.default.init(), _headerBarPlugin2.default.init(), _imageViewPlugin2.default.init()]);

            case 2:
                _ref2 = _context.sent;
                _ref3 = (0, _slicedToArray3.default)(_ref2, 3);
                layout = _ref3[0];
                headerBar = _ref3[1];
                imageView = _ref3[2];

                imageView.setImagePath(_appConfig2.default.logoUrl);

                headerBar.setCenterTitle('A swanky image', 'title');
                layout.addTopView(headerBar);
                layout.setContentView(imageView);

                return _context.abrupt('return', new ImageTabController(layout, imageView));

            case 12:
            case 'end':
                return _context.stop();
        }
    }
}, _callee, undefined);
```
