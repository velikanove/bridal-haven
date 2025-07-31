const openBtn = document.querySelector('.open-modal');
const closeBtn = document.querySelector('.close-modal');
const modal = document.querySelector('.modal');
const modalOverlay = document.querySelector('.modal__overlay');

function openModal() {
  modal.setAttribute('aria-hidden', 'false')
  document.body.classList.add('scroll-lock')
}

function closeModal() {
  modal.setAttribute('aria-hidden', 'true')
  document.body.classList.remove('scroll-lock')
}

if (modalOverlay) {
  modalOverlay.addEventListener('click', closeModal);
}

openBtn.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && modal.getAttribute('aria-hidden') === 'false') {
    closeModal();
  }
})

const openBtnPopup = document.querySelector('.open-popup');
const closeBtnPopup = document.querySelector('.close-popup');
const popup = document.querySelector('.popup');
const popupOverlay = document.querySelector('.popup__overlay');

function openPopup() {
  popup.setAttribute('aria-hidden', 'false')
  document.body.classList.add('scroll-lock')
}

function closePopup() {
  popup.setAttribute('aria-hidden', 'true')
  document.body.classList.remove('scroll-lock')
}

if (popupOverlay) {
  popupOverlay.addEventListener('click', closePopup);
}

openBtnPopup.addEventListener('click', openPopup);
closeBtnPopup.addEventListener('click', closePopup);

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && popup.getAttribute('aria-hidden') === 'false') {
    closePopup();
  }
})



const breakpoint = window.matchMedia('(min-width: 600px)');
let sliderMobile = null;

function initSwiper() {
  sliderMobile = new Swiper('.slider-mobile', {
    slidesPerView: 1,
    loop: true,
    navigation: {
      nextEl: '.product__arrow-next',
      prevEl: '.product__arrow-prev',
    }
  })
}

function destroySwiper() {
  if (sliderMobile) {
    sliderMobile.destroy(true, true);
    sliderMobile = null;
  }
}

function handleBreakpointChange(e) {
  if (e.matches) {
    destroySwiper()
  } else{
    if (!sliderMobile) initSwiper()
  }
}

handleBreakpointChange(breakpoint);

breakpoint.addEventListener('change', handleBreakpointChange);


const menuBtn = document.querySelector('.menu__btn');
const menu = document.querySelector('.menu');

menuBtn.addEventListener('click', () => {
  menu.classList.toggle('menu--active')
})

const viewLine = document.querySelector('.view-mode__btn--line');
const viewGride = document.querySelector('.view-mode__btn--grid');
const viewContaier = document.querySelector('.view-mode__container');

viewGride?.addEventListener('click', ()=> {
  viewContaier.classList.add('view-mode__container--grid');
  viewContaier.classList.remove('view-mode__container--line');
});

viewLine?.addEventListener('click', ()=> {
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
  breakpoints: {
    0: {
      slidesPerView: 1,
      
    },
    600: {
      slidesPerView: 2,
      
    },
    800: {
      slidesPerView: 3,
      
    },
  },

});

const swiperReviews = new Swiper('.reviews-slider', {
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

  breakpoints: {
    360: {
      slidesPerView: 4,
      spaceBetween: 16,
    },
    768: {
      slidesPerView: 8,
      spaceBetween: 16,
    },
    1024: {
      slidesPerView: 12,
      spaceBetween: 16,
    },
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