/* Collapsible sidebar groups (Figma 320:5631).
 *
 * Loaded at the end of <body>, so the sidebar is already parsed and the stored
 * state is applied before paint — no expand-then-collapse flash.
 *
 * Only collapsed groups are persisted, so a group added to sidebar.yml later
 * starts expanded rather than inheriting someone else's saved state. */
(function () {
  var STORAGE_KEY = 'zima:sidebar-collapsed';

  function readState() {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
    } catch (e) {
      return {};
    }
  }

  function writeState(state) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch (e) {
      /* private mode / quota — collapsing still works for this page view */
    }
  }

  function apply(group, toggle, collapsed) {
    group.classList.toggle('is-collapsed', collapsed);
    toggle.setAttribute('aria-expanded', collapsed ? 'false' : 'true');
  }

  function init() {
    var groups = document.querySelectorAll('.doc-sidebar__group[data-group]');

    Array.prototype.forEach.call(groups, function (group) {
      var key = group.getAttribute('data-group');
      var toggle = group.querySelector('.doc-sidebar__toggle');
      var list = group.querySelector('.doc-sidebar__list');
      if (!toggle || !list) return;

      // The group containing the current page always opens, otherwise a reader
      // following a link could land on a page they cannot see in the nav.
      var holdsCurrentPage = !!list.querySelector('a.is-current');
      apply(group, toggle, holdsCurrentPage ? false : readState()[key] === true);

      toggle.addEventListener('click', function () {
        var collapsed = !group.classList.contains('is-collapsed');
        apply(group, toggle, collapsed);

        var state = readState();
        if (collapsed) state[key] = true;
        else delete state[key];
        writeState(state);
      });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
