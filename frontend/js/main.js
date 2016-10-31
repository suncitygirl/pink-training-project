(function() {
  var btn = document.getElementsByClassName('main-nav__open-btn')[0];
  var menu = document.getElementsByClassName('main-nav--hide-menu')[0];
  btn.addEventListener('click', function(event) {
    menu.classList.toggle('js-hide-menu');
  })
})();
