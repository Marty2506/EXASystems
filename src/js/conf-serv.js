const confServFilters = document.querySelectorAll('.filter');

confServFilters.forEach(el => {
  el.addEventListener('click', () => {
    el.classList.toggle('filter--active');
  })
})

// Настраиваем селекты
const selectOptions = {
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

}

const confServModelSelect = document.querySelector('#conf-serv-model');
if (confServModelSelect) {
  const confServModelChoice = new Choices(confServModelSelect, selectOptions);
}

const confServTasklSelect = document.querySelector('#conf-serv-task');
if (confServModelSelect) {
  const confServTaskChoice = new Choices(confServTasklSelect, selectOptions);
}

// Обработка внопки Показать еще, программисту надо переписывать ее
const productCardList = document.querySelector('.catalog__cards-list');
const productCards = Array.prototype.slice.call(document.querySelectorAll('.product-card')); // массив а не nodeList

const showMoreProductCardsButton = document.querySelector(".catalog__show-more");

if (showMoreProductCardsButton) {
  showMoreProductCardsButton.addEventListener("click", (evt) => {
    showMoreProductCardsButton.disabled = true;
    genTestProductCards(9);
    renderProductCards(productCards);
    showMoreProductCardsButton.disabled = false;
  });
}
function genTestProductCards(cardsNumber) {
  for (let i = 0; i < cardsNumber; i++) {
    const card = productCards[0].cloneNode(true);
    productCards.push(card);
  }
}
function renderProductCards(cards) {
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
