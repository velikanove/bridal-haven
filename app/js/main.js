const viewLine = document.querySelector('.veiw-mode__btn--line');
const viewGride = document.querySelector('.veiw-mode__btn--grid');
const viewContaier = document.querySelector('.view-mode__container');

viewGride.addEventListener('click', ()=> {
  viewContaier.classList.add('view-mode__container--grid');
  viewContaier.classList.remove('view-mode__container--line');
});

viewLine.addEventListener('click', ()=> {
  viewContaier.classList.add('view-mode__container--line');
  viewContaier.classList.remove('view-mode__container--grid');
});

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

const rangeSlider = document.querySelector('.range__slider');
const inputMin = document.querySelector('.range__min');
const inputMax = document.querySelector('.range__max');

noUiSlider.create(rangeSlider, {
  start: [300, 3000],
  step: 100,
  range: {
    'min': 300,
    'max': 3000
  },
  format: {
    to: value => Math.round(value),
    from: value => Number(value)
  }
});

rangeSlider.noUiSlider.on('update', (vulues, hadle) => {
  if (hadle === 0) {
    inputMin.value = vulues[0]
  } else {
    inputMax.value = vulues[1]
  }

});

inputMin.addEventListener('change', () => {
  rangeSlider.noUiSlider.set([inputMin.value, null])
});

inputMax.addEventListener('change', () => {
  rangeSlider.noUiSlider.set([null, inputMax.value])
});