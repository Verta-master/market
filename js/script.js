//Mobile menu
$('.menu__btn').click(function() {
  $('.menu').toggleClass('menu--opened');
  $('.menu__list').slideToggle();
})

//Search
$('.search__open').click(function() {
  $('.search__form').toggleClass('search__form--open');
  $('.search__open').toggleClass('search__open--show');
})
