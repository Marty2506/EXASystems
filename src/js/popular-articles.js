// Обработка внопки Показать еще
const showMorePopularArticles = document.querySelector(".popular-articles__show-more");

if (showMorePopularArticles) {
  showMorePopularArticles.addEventListener("click", (evt) => {
    evt.target.disabled = true;
    console.log("HERE");
    renderPopularArticle();
    evt.target.disabled = false;
  });
}

// Тестовая функция, программисту надо переписывать ее
function renderPopularArticle() {
  const list = document.querySelector(".popular-articles__list");
  const item = document.querySelector(".popular-articles__item");
  const fragment = document.createDocumentFragment();
  fragment.appendChild(item.cloneNode(true));
  fragment.appendChild(item.cloneNode(true));
  fragment.appendChild(item.cloneNode(true));
  list.appendChild(fragment)
}
