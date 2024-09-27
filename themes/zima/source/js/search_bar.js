// const { url } = require("hexo/dist/hexo/default_config");

(function() {
  'use strict';
  let searchdata = null
  function showSearch() {
    document.body.classList.add('search-active');
    document.getElementById('search-container').classList.add('show');
    document.getElementById('search-input').focus();
    if(!searchdata) getSearchData();
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

  var searchInput = document.getElementById('search-input');
  if(searchInput) {
    searchInput.addEventListener('input', debounce(doSearch, 300));
  }

  function getSearchData() {
    $.ajax({
      url: '/search.xml',
      dataType: 'xml',
      success: function(xmlResponse) {
        var datas = $( "entry", xmlResponse ).map(function() {
          return {
              title: $( "title", this ).text(),
              content: $("content",this).text(),
              url: $( "url" , this).text()
          };
        }).get();
        searchdata = datas.filter(item => item.title && item.content && item.url && item.url.indexOf('/cn') == -1);
      },
    })
  }

  function doSearch(e){
    var value = e.target.value;
    var $resultContent = document.getElementById("resultContent");
      if (value.length > 0) {
        var results = filterSearchData(value);
        var str = '<ul class=\"search-result-list\">';
        $resultContent.innerHTML = "";
        if(results.length){
          for (var item of results) {
            str += '<li><a href="' + item.url + '">' + item.title + '</a></li>';
          }
          str += "</ul>";
          $resultContent.innerHTML = str;
        }
      }else{
        $resultContent.innerHTML = '';
      }
  }

  function filterSearchData(value) {
    var results = searchdata.filter(function(item) {
      return item.title.toLowerCase().indexOf(value.toLowerCase()) !== -1 || item.content.toLowerCase().indexOf(value.toLowerCase()) !== -1;
    });
    return results;
  }


  function debounce(func, wait) {
    let timeout;
    
    return function(...args) {
      const context = this;
      
      clearTimeout(timeout);
      timeout = setTimeout(() => func.apply(context, args), wait);
    };
  }


}());
