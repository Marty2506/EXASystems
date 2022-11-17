const catalogFilters = document.querySelectorAll('.filter');
const catalogFiltersForm = document.querySelector('#catalog-filters-form')

catalogFilters.forEach(el => {
  el.addEventListener('click', () => {
    el.classList.toggle('filter--active');
  })
})

// Настройка селектов

const catalogSelects = document.querySelectorAll('#catalog-filters-form .form__select');

catalogSelects.forEach(catalogSelect => {
  const catalogSelectChoice = new Choices(catalogSelect, {
    placeholder: true,
    placeholderValue: null,
    searchEnabled: false,
    shouldSort: false,
    itemSelectText: '',
    classNames: {
      containerOuter: 'form-choices form-choices--righted',
      containerInner: 'form-choices__inner',
      input: 'form-choices__input',
      inputCloned: 'form-choices__input--cloned',
      list: 'form-choices__list',
      listItems: 'form-choices__list--multiple',
      listSingle: 'form-choices__list--single',
      listDropdown: 'form-choices__list--dropdown',
      item: 'form-choices__item',
      placeholder: 'form-choices__paceholder',
      itemSelectable: 'form-choices__item--selectable',
      itemDisabled: 'form-choices__item--disabled',
      itemOption: 'form-choices__item--choice',
      group: 'choices__group',
      groupHeading : 'choices__heading',
      button: 'choices__button',
      activeState: 'is-active',
      focusState: 'is-focused',
      openState: 'is-open',
      disabledState: 'is-disabled',
      highlightedState: 'is-highlighted',
      selectedState: 'is-selected',
      flippedState: 'is-flipped'
    },
    allowHTML: true
  });
});

// Настройка полей от... до...

const fromToCatalogFields = document.querySelectorAll('[data-range-row]');
const fromToPristine = new Pristine(catalogFiltersForm, {
  classTo: 'form__range-field-wrapper', // Элемент, на который будут добавляться классы
  errorTextParent: 'form__range-field-wrapper', // Элемент, куда будет выводиться текст с ошибкой
  errorTextTag: 'span', // Тег, который будет обрамлять текст ошибки
  errorTextClass: 'form__error-message' // Класс для элемента с текстом ошибки
}, true);

fromToCatalogFields.forEach(element => {
  const fromField = element.querySelector('[data-range="from"]');
  const toField = element.querySelector('[data-range="to"]');
  console.log(fromField, toField);
  // Настройка масок
  const fromMask = IMask(fromField, {
    mask: Number,
    scale: 0,
    signed: false,
    min: fromField.min,
    max: fromField.max
  });
  const toMask = IMask(toField, {
    mask: Number,
    scale: 0,
    signed: false,
    min: toField.min,
    max: toField.max
  });

  fromToPristine.addValidator(fromField, (value) => {
    const returnValue = (Number(value) > Number(toField.value));
    if (returnValue) {
      fromField.classList.add('has-error');
    } else {
      fromField.classList.remove('has-error');
    }
    return !returnValue;
  }, `больше поля "до"`, 2, false);
  fromToPristine.addValidator(toField, (value) => {
    const returnValue = (Number(value) < Number(fromField.value));
    if (returnValue) {
      toField.classList.add('has-error');
    } else {
      toField.classList.remove('has-error');
    }
    return !returnValue;
  }, `меньше поля "от"`, 3, false);
  fromField.addEventListener('input', () => {
    fromToPristine.validate();
  })
  toField.addEventListener('input', () => {
    fromToPristine.validate();
  })
});

// TODO: сделать сортировку через селект


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



