// Comparison Swiper
const comparisonSwiperItem = document.querySelector('.comparison__swiper');

if (comparisonSwiperItem) {
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
        spaceBetween: 0,
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 2,
      },
      1280: {
        slidesPerView: 3,
      },
    }
  }
  var comparisonSwiper = new Swiper(comparisonSwiperItem, comparisonSwiperOptions);
}

const sectionSwipers = document.querySelectorAll('.section__swiper--main');

sectionSwipers.forEach(sectionSwiper => {
  const thumbsSwiperItem = sectionSwiper.nextSibling;
  const thumbsSwiperOptions = {
    loop: true,
    spaceBetween: 20,
    slidesPerView: 5,
    freeMode: true,
    watchSlidesProgress: true,
  }
  const thumbsSwiper = new Swiper(thumbsSwiperItem, thumbsSwiperOptions);

  const mainSwiperOptions = {
    loop: false,
    slidesPerView: 1,
    speed: 700,
    thumbs: {
      swiper: thumbsSwiper,
    },
    // navigation: {
    //   nextEl: ".swiper-button--next",
    //   prevEl: ".swiper-button--prev",
    //   lockClass: "swiper-button--lock",
    //   disabledClass: "swiper-button--disabled",
    // },
  }
  const mainSwiper = new Swiper(sectionSwiper, mainSwiperOptions);
});


