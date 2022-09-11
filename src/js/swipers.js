// Comparison Swiper
const comparisonSwiperItem = document.querySelector('.comparison__swiper');
const comparisonSwiperOptions = {
  loop: false,
  spaceBetween: 2,
  slidesPerView: 4,
  watchSlidesProgress: true,
  speed: 700,
  navigation: {
    nextEl: ".swiper-button--next",
    prevEl: ".swiper-button--prev",
    lockClass: "swiper-button--lock",
    disabledClass: "swiper-button--disabled",
  },
  breakpoints: {
    320: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 2,
    },
    1321: {
      slidesPerView: 3,
    },
  }
}
var comparisonSwiper = new Swiper(comparisonSwiperItem, comparisonSwiperOptions);
