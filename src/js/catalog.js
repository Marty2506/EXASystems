const catalogFilters = document.querySelectorAll('.filter');

catalogFilters.forEach(el => {
  el.addEventListener('click', () => {
    el.classList.toggle('filter--active');
  })
})


// ТЕСТ ФИЛЬТРОВ
const productCards = document.querySelectorAll('.product-card');

const vendorCatalogFilters = document.querySelectorAll('.catalog__filters-group--vendors .filter');

const vendorFilters = null;

const filterProductCards = (cards) => {
  const tempPhotos = cards.slice();
}

