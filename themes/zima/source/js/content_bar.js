(function () {
    'use strict';
    var tocbar = document.querySelector('.toc')
    var hoveredOvertocbar = false
    var allHeaders = document.querySelectorAll('.article-heading');
    if (tocbar) {
        tocbar.addEventListener('mouseover', function () {
            hoveredOvertocbar = true
        })
        tocbar.addEventListener('mouseleave', function () {
            hoveredOvertocbar = false
        })
    }


    window.addEventListener('scroll', updatetocbar);
    window.addEventListener('resize', updatetocbar);

    function updatetocbar() {
        var doc = document.documentElement;
        var top = doc && doc.scrollTop || document.body.scrollTop;
        if (!allHeaders) return;
        var last;
        for (var i = 0; i < allHeaders.length; i++) {
            var link = allHeaders[i];
            if (link.offsetTop > top) {
                if (!last) last = link;
                break;
            } else {
                last = link;
            }
        }
        if (last) { setActive(last.id, !hoveredOvertocbar); }
    }

    function setActive(id, shouldScrollIntoView) {
        var previousActive = tocbar.querySelector('.toc-link.active')
        var currentPageAnchor = tocbar.querySelector('.sidebar-link.current')
        var currentActive = typeof id === 'string'
            ? tocbar.querySelector('.toc-link[href="#' + encodeURI(id) + '"]')
            : id
        if (currentActive !== previousActive) {
            if (previousActive) previousActive.classList.remove('active')
            currentActive.classList.add('active')
            if (shouldScrollIntoView) {
                var currentPageOffset = currentPageAnchor
                    ? currentPageAnchor.offsetTop - 8
                    : 0
                var currentActiveOffset = currentActive.offsetTop + currentActive.parentNode.clientHeight
                var tocbarHeight = tocbar.clientHeight
                var currentActiveIsInView = (
                    currentActive.offsetTop >= tocbar.scrollTop &&
                    currentActiveOffset <= tocbar.scrollTop + tocbarHeight
                )
                var linkNotFurtherThantocbarHeight = currentActiveOffset - currentPageOffset < tocbarHeight
                var newScrollTop = currentActiveIsInView
                    ? tocbar.scrollTop
                    : linkNotFurtherThantocbarHeight
                        ? currentPageOffset
                        : currentActiveOffset - tocbarHeight
                tocbar.scrollTop = newScrollTop
            }
        }
    }
    updatetocbar();


    // 设置反馈按钮的链接
    var feedbackBtn = document.querySelector('#feedback-link');
    if (feedbackBtn) {
      var url = window.location.href;
      feedbackBtn.href = 'https://www.zimaspace.com/support/feedback?fb_system=Docs&fb_page='+url;
      // feedbackBtn.href = 'http://10.0.175.187:3002/support/feedback?fb_system=Docs&fb_page='+url;
    }

  // 为文章中的图片添加点击事件监听器
  document.addEventListener('DOMContentLoaded', function() {
    // 获取所有文章中的图片
    const images = document.querySelectorAll('.article-content img');
    // 为每张图片添加点击事件监听器
    images.forEach(function(image) {
      image.style.cursor = 'pointer';
      image.title = 'view image in new tab';
      image.addEventListener('click', function() {
        // 获取图片的原始 URL
        const imageUrl = image.src;
        // 在新标签页中打开图片
        window.open(imageUrl, '_blank');
      });
    });
  });

}());
