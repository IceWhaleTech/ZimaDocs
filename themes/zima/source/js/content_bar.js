(function () {
  'use strict';

  var toc = document.querySelector('.doc-toc .toc');
  var tocScroller = document.querySelector('.doc-toc__inner');
  var headers = document.querySelectorAll('.doc-article__body .article-heading');
  var hoveredOverToc = false;

  if (toc && tocScroller && headers.length) {
    tocScroller.addEventListener('mouseover', function () {
      hoveredOverToc = true;
    });
    tocScroller.addEventListener('mouseleave', function () {
      hoveredOverToc = false;
    });

    window.addEventListener('scroll', updateToc);
    window.addEventListener('resize', updateToc);
    updateToc();
  }

  function updateToc() {
    var activeHeader = headers[0];
    var activationLine = 96;

    for (var i = 0; i < headers.length; i++) {
      if (headers[i].getBoundingClientRect().top <= activationLine) activeHeader = headers[i];
      else break;
    }

    setActive(activeHeader.id, !hoveredOverToc);
  }

  function setActive(id, shouldScrollIntoView) {
    if (!toc || !id) return;

    var previousActive = toc.querySelector('.toc-link.active');
    var target = '#' + encodeURI(id);
    var links = toc.querySelectorAll('.toc-link');
    var currentActive = null;

    for (var i = 0; i < links.length; i++) {
      if (links[i].getAttribute('href') === target) {
        currentActive = links[i];
        break;
      }
    }

    if (!currentActive || currentActive === previousActive) return;
    if (previousActive) previousActive.classList.remove('active');
    currentActive.classList.add('active');

    if (shouldScrollIntoView) {
      var activeRect = currentActive.getBoundingClientRect();
      var scrollerRect = tocScroller.getBoundingClientRect();
      if (activeRect.top < scrollerRect.top) {
        tocScroller.scrollTop -= scrollerRect.top - activeRect.top + 7;
      } else if (activeRect.bottom > scrollerRect.bottom) {
        tocScroller.scrollTop += activeRect.bottom - scrollerRect.bottom + 7;
      }
    }
  }

  var feedbackBtn = document.querySelector('#feedback-link');
  if (feedbackBtn) {
    feedbackBtn.href = 'https://www.zimaspace.com/support/feedback?fb_system=Docs&fb_page=' + window.location.href;
  }

  document.addEventListener('DOMContentLoaded', function() {
    var images = document.querySelectorAll('.doc-article__body img, .article-content img');
    images.forEach(function(image) {
      if (image.closest('a')) return;
      image.style.cursor = 'pointer';
      if (!image.title) {
        image.title = image.alt ? 'View full-size ' + image.alt : 'View image in a new tab';
      }
      image.addEventListener('click', function() {
        var imageWindow = window.open(image.currentSrc || image.src, '_blank');
        if (imageWindow) imageWindow.opener = null;
      });
    });
  });
}());
