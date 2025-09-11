// JS mínimo: respeitar preferências de movimento
(function(){
  try {
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      document.documentElement.classList.add('reduce-motion');
    }
  } catch (e) {}
})();
