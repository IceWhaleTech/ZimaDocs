/*
 * @Author: Jerryk jerry@icewhale.org
 * @Date: 2022-08-30 17:35:42
 * @LastEditors: Jerryk jerry@icewhale.org
 * @LastEditTime: 2022-09-29 11:49:16
 * @FilePath: \ZimaDocs\themes\zima\source\js\lang_select.js
 * @Description:
 *
 * Copyright (c) 2022 by IceWhale, All Rights Reserved.
 */
(function() {
  'use strict';

  var Cookies = window.Cookies.noConflict();

  function changeLang() {
    var lang = this.value;
    var canonical = this.dataset.canonical;
    var path = '/';
    if (lang !== 'en') path += lang + '/';

    Cookies.set('nf_lang', lang, { expires: 365 });
    location.href = path + canonical;
  }

  // document.getElementById('lang-select').addEventListener('change', changeLang);
  var langSelect = document.getElementById('lang-select');
  if (langSelect) {
    langSelect.addEventListener('change', changeLang);
  }
}());
