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
 *
 * @todo Add other vendor prefixes
 * @todo Properly clear transition
 */

function fade (el, opacity, duration) {
  if (typeof duration === 'undefined') duration = 1000;

  var oldTransition = prefixed.get(el.style, 'transition') || '';
  prefixed(el.style, 'transition', 'opacity ' + (duration/1000) + 's');
  el.style.opacity = opacity;

  setTimeout(function () {
    prefixed(el.style, 'transition', oldTransition);
  }, duration);
}

/**
 * Fade in `el`.
 *
 * @param {Element} el
 * @param {Number=} duration
 */

fade.out = function (el, duration) {
  fade(el, 0, duration);
};

/**
 * Fade out `el`.
 *
 * @param {Element} el
 * @param {Number=} duration
 */

fade['in'] = function (el, duration) {
  fade(el, 1, duration);
};
