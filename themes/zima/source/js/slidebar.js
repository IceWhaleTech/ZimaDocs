
(function () {
  'use strict';

  $('.category-list > li > .category-list-link').click(function (e) {
    $(this).parent().toggleClass('show-children');
    e.preventDefault();
  });
}());
