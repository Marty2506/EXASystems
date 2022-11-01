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
    watchSlidesProgress: false,
    simulateTouch: true,
    grabCursor: true
  }
  const thumbsSwiper = new Swiper(thumbsSwiperItem, thumbsSwiperOptions);

  const mainSwiperOptions = {
    loop: false,
    slidesPerView: 1,
    speed: 700,
    simulateTouch: true,
    grabCursor: true,
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
    watchSlidesProgress: true,
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
        slidesPerView: 4
      },
    }
  }

  if (sectionCardSwiper.id === "trust-us-swiper") {
    swiperOptions.breakpoints = {
      320: {
        slidesPerView: "auto",
        spaceBetween: 10
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 45
      },
      1181: {
        slidesPerView: 5,
        spaceBetween: 45
      },
    }
  }

  if (sectionCardSwiper.id === "other-services-swiper") {
    swiperOptions.breakpoints = {
      320: {
        slidesPerView: 1,
        spaceBetween: 20
      },
      450: {
        slidesPerView: "auto",
        spaceBetween: 20
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      1181: {
        slidesPerView: 3,
        spaceBetween: 20
      },
    }
    swiperOptions.on = {
      afterInit: (swiper) => {
        console.log("afterInit", swiper.currentBreakpoint);
        if (swiper.currentBreakpoint === "320") {
          swiper.disable();
        }
      },
      breakpoint: (swiper) => {
        if (swiper.currentBreakpoint === "320") {
          swiper.disable();
        } else {
          swiper.enable();
        }
      }
    }
  }

  const cardSwiper = new Swiper(sectionCardSwiper, swiperOptions);
});


