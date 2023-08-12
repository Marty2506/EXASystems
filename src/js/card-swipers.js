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
  const cardSwiper = new Swiper(cardSwiperItem, swiperOptions);
});
