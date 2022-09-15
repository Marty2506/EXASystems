const catalogFilters = document.querySelectorAll('.filter');

catalogFilters.forEach(el => {
  el.addEventListener('click', () => {
    el.classList.toggle('filter--active');
  })
})


// ТЕСТ ФИЛЬТРОВ
const productCardList = document.querySelector('.catalog__cards-list');
const productCards = Array.prototype.slice.call(document.querySelectorAll('.product-card')); // массив а не nodeList

const vendorCatalogFilters = document.querySelectorAll('.catalog__filters-group--vendors .filter');
let vendorFilters = [];
const typeCatalogFilters = document.querySelectorAll('.catalog__filters-group--type .filter');
let typeFilters = [];

const updateFilters = (el, filters) => {
  if (el.classList.contains('filter--active')) {
    filters.push(el.dataset.filterValue);
  } else {
    const index = filters.indexOf(el.dataset.filterValue);
    if (index > -1) {
      filters.splice(index, 1);
    }
  }
}

const filterProductCards = (cards) => {
  let filteredCards = [];
  if (vendorFilters.length === 0 && typeFilters.length === 0) {
    filteredCards = cards;
  } else {
    cards.forEach(card => {
      if (vendorFilters.length === 0 ) {
        if (typeFilters.indexOf(card.dataset.productType) > -1) {
          filteredCards.push(card);
        }
      } else if (typeFilters.length === 0) {
        if (vendorFilters.indexOf(card.dataset.vendor) > -1) {
          filteredCards.push(card);
        }
      } else if (vendorFilters.indexOf(card.dataset.vendor) > -1 && typeFilters.indexOf(card.dataset.productType) > -1) {
        filteredCards.push(card);
      }
    });
  }
  return filteredCards;
}

const renderProductCards = (cards) => {
  document.querySelectorAll('.product-card')
    .forEach((card) => card.parentNode.remove());
  const fragment = document.createDocumentFragment();
  cards.forEach(card => {
    const item = document.createElement("li");
    item.classList.add('catalog__cards-item');
    item.appendChild(card);
    fragment.appendChild(item);
  });
  productCardList.appendChild(fragment);
}

vendorCatalogFilters.forEach(el => {
  el.addEventListener('click', () => {
    updateFilters(el, vendorFilters);
    const filteredCards = filterProductCards(productCards);
    renderProductCards(filteredCards);
  })
});

typeCatalogFilters.forEach(el => {
  el.addEventListener('click', () => {
    updateFilters(el, typeFilters);
    const filteredCards = filterProductCards(productCards);
    renderProductCards(filteredCards);
  })
});

// Обработка внопки Показать еще, программисту надо переписывать ее
const showMoreProductCardsButton = document.querySelector(".catalog__show-more");

if (showMoreProductCardsButton) {
  showMoreProductCardsButton.addEventListener("click", (evt) => {
    showMoreProductCardsButton.disabled = true;
    genTestProductCards(9);
    const filteredCards = filterProductCards(productCards);
    renderProductCards(filteredCards);
    showMoreProductCardsButton.disabled = false;
  });
}

function genTestProductCards(cardsNumber) {
  for (let i = 0; i < cardsNumber; i++) {
    const card = productCards[0].cloneNode(true);
    console.log(productCards);
    productCards.push(card);
    console.log(productCards);
  }
}



