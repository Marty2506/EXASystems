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

sectionSwipers.forEach((sectionSwiper, index) => {
  const thumbsSwiperItem = sectionSwiper.nextSibling;
  const thumbsSwiperOptions = {
    loop: false,
    spaceBetween: 20,
    slidesPerView: 5,
    freeMode: true,
    watchSlidesProgress: true,
    simulateTouch: false,
  }
  const thumbsSwiper = new Swiper(thumbsSwiperItem, thumbsSwiperOptions);

  const mainSwiperOptions = {
    loop: false,
    slidesPerView: 1,
    speed: 700,
    simulateTouch: false,
    navigation: {
      nextEl: `#section-swiper-${index + 1}-next`,
      prevEl: `#section-swiper-${index + 1}-prev`,
      lockClass: "section__swiper-button--lock",
      disabledClass: "section__swiper-button--disabled",
    },
    thumbs: {
      swiper: thumbsSwiper,
    },
  }
  const mainSwiper = new Swiper(sectionSwiper, mainSwiperOptions);
});

const sectionCardSwipers = document.querySelectorAll('.section__card-swiper');

sectionCardSwipers.forEach((sectionCardSwiper, index) => {
  const swiperOptions = {
    loop: false,
    slidesPerView: "auto",
    spaceBetween: 20,
    speed: 700,
    simulateTouch: false,
    navigation: {
      nextEl: `#section-card-swiper-${index + 1}-next`,
      prevEl: `#section-card-swiper-${index + 1}-prev`,
      lockClass: "section__swiper-button--lock",
      disabledClass: "section__swiper-button--disabled",
    },
    breakpoints: {
      320: {
        slidesPerView: "auto",
      },
      768: {
        slidesPerView: 3,
      },
      1181: {
        slidesPerView: 4,
      },
    }
  }

  const cardSwiper = new Swiper(sectionCardSwiper, swiperOptions);
});


