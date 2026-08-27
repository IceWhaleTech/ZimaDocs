/* Landing page accordions.
 *
 * Behaviour asked for by the design: exactly one row per section is open at all
 * times. Clicking a closed row opens it and closes its sibling; clicking the
 * row that is already open does nothing, so there is no all-collapsed state.
 * That rules out <details name>, which always allows closing the open item.
 *
 * Rows that carry data-zl-img also crossfade the section artwork. Rows without
 * it (Go deeper) leave the single static image alone.
 *
 * ES5 on purpose: hexo-uglify runs UglifyJS over this file at build time and
 * UglifyJS does not parse ES6.
 */
(function () {
  'use strict';

  var sections = document.querySelectorAll('[data-zl-feature]');
  if (!sections.length) return;

  function each(list, fn) {
    Array.prototype.forEach.call(list, fn);
  }

  each(sections, function (section) {
    var items = section.querySelectorAll('.zl-acc__item');
    var frames = section.querySelectorAll('.zl-art');
    if (items.length < 2) return;

    function open(item) {
      each(items, function (other) {
        var isTarget = other === item;
        var head = other.querySelector('.zl-acc__head');
        if (other.classList.contains('is-open') !== isTarget) {
          other.classList.toggle('is-open', isTarget);
        }
        if (head) head.setAttribute('aria-expanded', isTarget ? 'true' : 'false');
      });

      var head = item.querySelector('.zl-acc__head');
      var key = head && head.getAttribute('data-zl-img');
      if (!key || frames.length < 2) return;

      each(frames, function (frame) {
        frame.classList.toggle('is-active', frame.getAttribute('data-zl-key') === key);
      });
    }

    each(items, function (item) {
      var head = item.querySelector('.zl-acc__head');
      if (!head) return;
      head.addEventListener('click', function () {
        // The open row stays open. Bail before touching anything so the
        // crossfade does not restart on a no-op click.
        if (item.classList.contains('is-open')) return;
        open(item);
      });
    });
  });
}());
