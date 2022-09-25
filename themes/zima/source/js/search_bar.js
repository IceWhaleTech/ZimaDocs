
(function () {
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

    document.getElementById('showSearch').addEventListener('click', showSearch);
    document.getElementById('hideSearch').addEventListener('click', hideSearch);
}());