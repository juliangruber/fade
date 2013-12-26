/**
 * Module dependencies.
 */

var prefixed = require('prefixed');

/**
 * Expose `fade`.
 */

module.exports = fade;

/**
 * Fade `el` to `opacity` in `duration` seconds.
 *
 * @param {Element} el
 * @param {Number} opacity
 * @param {Number=} duration
 * @param {Function=} callback
 *
 * @todo Add other vendor prefixes
 * @todo Properly clear transition
 */

function fade (el, opacity, duration, callback) {
  if (typeof duration === 'undefined') duration = 1000;
  else if (typeof duration === 'function') {
    callback = duration;
    duration = 1000;
  }

  var oldTransition = prefixed.get(el.style, 'transition') || '';
  prefixed(el.style, 'transition', 'opacity ' + (duration/1000) + 's');
  el.style.opacity = opacity;

  setTimeout(function () {
    prefixed(el.style, 'transition', oldTransition);
    if (callback) callback();
  }, duration);
}

/**
 * Fade in `el`.
 *
 * @param {Element} el
 * @param {Number=} duration
 * @param {Function=} callback
 */

fade.out = function (el, duration, callback) {
  fade(el, 0, duration, callback);
};

/**
 * Fade out `el`.
 *
 * @param {Element} el
 * @param {Number=} duration
 * @param {Function=} callback
 */

fade['in'] = function (el, duration, callback) {
  fade(el, 1, duration, callback);
};
