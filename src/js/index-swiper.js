const indexSwiperItem = document.querySelector("#index-swiper");

if (indexSwiperItem) {
  const swiperOptions = {
    loop: false,
    slidesPerView: 1,
    spaceBetween: 20,
    speed: 900,
    simulateTouch: true,
    watchSlidesProgress: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay: {
      delay: 5000,
    },
  };

  const indexSwiper = new Swiper(indexSwiperItem, swiperOptions);
}
