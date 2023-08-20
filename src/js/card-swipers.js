const cardSwipersItems = document.querySelectorAll(".card-swiper");

cardSwipersItems.forEach((cardSwiperItem, index) => {
  const nav = {
    nextEl: `.card-swiper__button-${index + 1}-next`,
    prevEl: `.card-swiper__button-${index + 1}-prev`,
    lockClass: "card-swiper__button--lock",
    disabledClass: "card-swiper__button--disabled",
  };
  const swiperOptions = {
    loop: false,
    slidesPerView: "auto",
    spaceBetween: 20,
    speed: 700,
    simulateTouch: false,
    watchSlidesProgress: true,
    navigation: nav,
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
    },
  };

  if (cardSwiperItem.id === "cases-swiper") {
    swiperOptions.breakpoints = {
      320: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 45,
      },
      1181: {
        slidesPerView: 3,
        spaceBetween: 34,
      },
    };
  }

  if (cardSwiperItem.id === "reviews-swiper") {
    swiperOptions.breakpoints = {
      320: {
        slidesPerView: "auto",
      },
      768: {
        slidesPerView: "auto",
        spaceBetween: 27,
      },
      1181: {
        slidesPerView: 2,
        spaceBetween: 27,
      },
    };
  }

  if (cardSwiperItem.id === "team-swiper") {
    swiperOptions.breakpoints = {
      320: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 27,
      },
      1181: {
        slidesPerView: 2,
        spaceBetween: 70,
      },
    };
  }

  if (cardSwiperItem.id === "vacancies-swiper") {
    swiperOptions.breakpoints = {
      320: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 27,
      },
      1181: {
        slidesPerView: 2,
        spaceBetween: 37,
      },
    };
  }
  const cardSwiper = new Swiper(cardSwiperItem, swiperOptions);
});
