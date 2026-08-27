(function () {
  'use strict';

  // Two toggles now: the one in the header, and the one in the mobile drawer's
  // utility bar that takes over below 600 where .header-utils is hidden. Both
  // drive the same state, so they are bound together and both get the pressed
  // state written back.
  var toggles = document.querySelectorAll('[data-theme-toggle]');
  if (!toggles.length) return;

  function reflect(theme) {
    Array.prototype.forEach.call(toggles, function (toggle) {
      toggle.setAttribute('aria-pressed', theme === 'dark' ? 'true' : 'false');
    });
  }

  function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    reflect(theme);
    try {
      localStorage.setItem('zima-docs-theme', theme);
    } catch (error) {
      // Theme switching still works when storage is unavailable.
    }
  }

  Array.prototype.forEach.call(toggles, function (toggle) {
    toggle.addEventListener('click', function () {
      var current = document.documentElement.getAttribute('data-theme');
      setTheme(current === 'dark' ? 'light' : 'dark');
    });
  });

  reflect(document.documentElement.getAttribute('data-theme'));
}());
