const caseCards = document.querySelectorAll(".cases__card");
const MAX_CARDS_TEST = 10;

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

if (caseCards) {
  const element = document.querySelector(".cases");
  const page = document.querySelector(".page");
  const cardList = document.querySelector(".cases__list");
  let lastScrollTop = 0;
  document.addEventListener("scroll", () => {
    // console.log(pageMain.scrollTop);
    if (page.scrollTop < lastScrollTop) {
      // upscroll
      return;
    }
    if (
      page.scrollTop >=
        element.offsetTop + element.offsetHeight - page.offsetHeight &&
      document.querySelectorAll(".cases__card").length < MAX_CARDS_TEST
    ) {
      // const loading = document.createElement("h1");
      // loading.textContent = "Загрузка";
      // cardList.appendChild(loading);

      console.log("End");
      const newCard = document.querySelector(".cases__card").cloneNode(true);
      initCard(newCard);
      const newCardBigImage = newCard.querySelector(
        "[data-case-card-original]"
      );
      newCardBigImage.addEventListener("click", addImageModalOpener);
      cardList.appendChild(newCard);
    }
    lastScrollTop = page.scrollTop;
  });
}
