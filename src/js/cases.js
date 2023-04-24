const casesSectionNoSwiper = document.querySelector(
  ".cases[data-cases-no-swiper]"
);
const caseCards = document.querySelectorAll(".cases__card");

caseCards.forEach(initCard);

function initCard(el) {
  const previews = el.querySelectorAll("[data-case-card-preview]");
  const bigImageSource = el.querySelector("source");
  const bigImage = el.querySelector(".cases__card-big-img");
  const bigImageLink = el.querySelector("[data-case-card-original]");
  previews.forEach((preview) => {
    preview.addEventListener("click", (evt) => {
      evt.preventDefault();
      bigImage.classList.remove("cases__card-big-img--update");
      bigImage.offsetWidth; // нужно чтобы сработала анимация
      bigImage.classList.add("cases__card-big-img--update");
      if (bigImageSource) {
        bigImageSource.srcset = preview.href;
      }
      bigImage.src = preview.href;
      bigImageLink.href = preview.href;
    });
  });
}

if (casesSectionNoSwiper) {
  // Функция для имитации запроса к серверу
  // Нужно будет в реальности вставить нормальный fetch и отрисовать карточки
  // Кто будет этим заниматься - можете написать мне и я сделаю подгрузку и отрисовку
  // Мне нужно знать в каком виде хранится на сервере. Это поля или html карточка целиком
  function fakeFetch(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  function showSpinner() {
    casesSpinner.classList.remove("spinner--hidden");
  }
  function hideSpinner() {
    casesSpinner.classList.add("spinner--hidden");
  }

  const MAX_CARDS_TEST = 10;
  const casesSpinner = document.querySelector("#cases-spinner");

  hideSpinner();

  const page = document.querySelector(".page");
  const cardList = document.querySelector(".cases__list");
  let lastScrollTop = 0;
  let block = false;

  document.addEventListener("scroll", () => {
    if (block) return;
    if (page.scrollTop < lastScrollTop) {
      // upscroll
      return;
    }
    if (
      page.scrollTop >=
        casesSectionNoSwiper.offsetTop +
          casesSectionNoSwiper.offsetHeight -
          page.offsetHeight &&
      document.querySelectorAll(".cases__card").length < MAX_CARDS_TEST
    ) {
      block = true;
      showSpinner();
      fakeFetch(1000).then(() => {
        const newCard = document.querySelector(".cases__card").cloneNode(true);
        initCard(newCard);
        const newCardBigImage = newCard.querySelector(
          "[data-case-card-original]"
        );
        newCardBigImage.addEventListener("click", addImageModalOpener);
        cardList.appendChild(newCard);
        hideSpinner();
        block = false;
      });
    }
    lastScrollTop = page.scrollTop;
  });
}

// const casesElWithSwiper = ;
