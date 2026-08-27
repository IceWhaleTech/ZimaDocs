(function() {
  'use strict';

  var body = document.getElementsByTagName('body')[0];
  var navToggle = document.getElementById('mobile-nav-toggle');
  var dimmer = document.getElementById('mobile-nav-dimmer');
  var mobileNav = document.getElementById('mobile-nav');
  var CLASS_NAME = 'mobile-nav-on';
  var scrollPosition = 0;
  if (!navToggle) return;

  function updateState(isOpen) {
    navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    navToggle.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
    if (mobileNav) mobileNav.setAttribute('aria-hidden', isOpen ? 'false' : 'true');
  }

  function lockPage() {
    if (!body.classList.contains('docs-page')) return;
    scrollPosition = window.pageYOffset || document.documentElement.scrollTop || 0;
    body.style.position = 'fixed';
    body.style.top = -scrollPosition + 'px';
    body.style.width = '100%';
  }

  function unlockPage() {
    if (!body.classList.contains('docs-page')) return;
    body.style.position = '';
    body.style.top = '';
    body.style.width = '';
    window.scrollTo(0, scrollPosition);
  }

  function openNav() {
    if (body.classList.contains(CLASS_NAME)) return;
    document.dispatchEvent(new CustomEvent('search:close'));
    lockPage();
    body.classList.add(CLASS_NAME);
    updateState(true);
  }

  function closeNav() {
    if (!body.classList.contains(CLASS_NAME)) return;
    body.classList.remove(CLASS_NAME);
    updateState(false);
    unlockPage();
  }

  navToggle.addEventListener('click', function(e) {
    e.preventDefault();
    e.stopPropagation();
    if (body.classList.contains(CLASS_NAME)) closeNav();
    else openNav();
  });

  if (dimmer) dimmer.addEventListener('click', closeNav);

  if (mobileNav) {
    mobileNav.addEventListener('click', function(e) {
      if (e.target.closest('a')) closeNav();
    });
  }

  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') closeNav();
  });

  document.addEventListener('mobile-nav:close', closeNav);

  var desktopQuery = window.matchMedia('(min-width: 1101px)');
  var closeAtDesktop = function(e) {
    if (e.matches) closeNav();
  };
  if (desktopQuery.addEventListener) desktopQuery.addEventListener('change', closeAtDesktop);
  else desktopQuery.addListener(closeAtDesktop);

  updateState(false);
}());
