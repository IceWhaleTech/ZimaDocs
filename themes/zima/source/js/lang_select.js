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

  var Cookies = window.Cookies && typeof window.Cookies.noConflict === 'function'
    ? window.Cookies.noConflict()
    : null;

  function changeLang() {
    var selected = this.options[this.selectedIndex];
    var lang = selected && selected.dataset.lang;

    if (Cookies && lang) Cookies.set('nf_lang', lang, { expires: 365 });
    if (this.value) location.href = this.value;
  }

  ['lang-select', 'mobile-lang-select'].forEach(function(id) {
    var langSelect = document.getElementById(id);
    if (langSelect) langSelect.addEventListener('change', changeLang);
  });
}());
