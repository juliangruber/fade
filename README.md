
# fade

Fade a HTML element using CSS transitions.

## Usage

```js
var fade = require('fade');

var el = document.querySelector('#el');

fade.out(el); // fade el out in 1s
fade.in(el, 1500); // fade el in in 1.5s
fade(el, 0.3, 3000); // fade el to opacity 0.3 in 3s 
fade.out(el, function() {
  el.style.display = 'none'; // set display to none after fade out
});
```

## API

The default `duration` always is `1000` ms.

### fade(el, opacity[, duration][, callback])

Fade `el` to `opacity` (in `duration` ms). Call `callback` when finished.

### fade.out(el[, duration][, callback])

Fade out `el` (in `duration` ms). Call `callback` when finished.

### fade.in(el[, duration][, callback])

Fade in `el` (in `duration` ms). Call `callback` when finished.

## Installation

With [npm](http://npmjs.org) do

```bash
$ npm install fade
```

Then bundle for the browser with [browserify](https://github.com/substack/browserify).

## License

(MIT)

Copyright (c) 2013 Julian Gruber &lt;julian@juliangruber.com&gt;

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies
of the Software, and to permit persons to whom the Software is furnished to do
so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
