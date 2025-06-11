const swiper = new Swiper('.acesories__slider', {
  slidesPerView: 3,
  spaceBetween: 40,
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.arrow-next',
    prevEl: '.arrow-prev',
  },

});

const swiperReviews = new Swiper('.reviews-slider', {
  slidesPerView: 12,
  spaceBetween: 16,
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.reviews-slider-next',
    prevEl: '.reviews-slider-prev',
  },

  pagination: {
    el: ".reviews-slider-pagination",
    type: "fraction",
  },

});