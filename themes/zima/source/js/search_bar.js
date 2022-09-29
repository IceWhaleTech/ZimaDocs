
(function() {
  'use strict';

  function showSearch() {
    document.body.classList.add('search-active');
    document.getElementById('search-container').classList.add('show');
    document.getElementById('search-input').focus();
  }

  function hideSearch() {
    document.getElementById('search-container').classList.remove('show');
    document.body.classList.remove('search-active');
  }
  var showSearchBtn = document.getElementById('showSearch');
  if (showSearchBtn) {
    showSearchBtn.addEventListener('click', showSearch);
  }

  var hideSearchBtn = document.getElementById('hideSearch');
  if (hideSearchBtn) {
    hideSearchBtn.addEventListener('click', hideSearch);
  }
}());
