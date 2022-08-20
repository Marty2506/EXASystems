// Таги-фильтры

const tagFilters = document.querySelectorAll('.blog__tags .tag');

if (tagFilters) {
  tagFilters.forEach(tagFilter => {
    tagFilter.addEventListener('click', (evt) => {
      evt.target.classList.toggle('tag--active');

      // тут филтрация статей блога
    });
  })
}

// Обработка внопки Показать еще
const showMoreBlogArticles = document.querySelector(".blog__show-more");

if (showMoreBlogArticles) {
  showMoreBlogArticles.addEventListener("click", (evt) => {
    evt.target.disabled = true;
    console.log("HERE");
    renderBlogArticle();
    evt.target.disabled = false;
  });
}

// Тестовая функция, программисту надо переписывать ее
function renderBlogArticle() {
  const blog = document.querySelector(".blog__list");
  const blogItem = document.querySelector(".blog__item");
  const fragment = document.createDocumentFragment();
  fragment.appendChild(blogItem.cloneNode(true));
  blog.appendChild(fragment)
}
