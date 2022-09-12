// Настройка модалок
const modals = document.querySelectorAll('.modal:not(.modal--order');
var modalMaskOptions = {
  mask: '+{7} (000) 000-00-00',
};

modals.forEach(modal => {
  const submitButton = modal.querySelector('.form__submit-button');
  if (submitButton) {
    submitButton.addEventListener('click', (evt) => {
      // evt.preventDefault();
      // Сделать что-то
    });
  }
  const closeButton = modal.querySelector('.modal__close-button');
  closeButton.addEventListener('click', hideModal);

  const modalForm = document.querySelector('.modal__form');
  const modalPristine = new Pristine(modalForm, {
    classTo: 'form__label', // Элемент, на который будут добавляться классы
    errorTextParent: 'form__label', // Элемент, куда будет выводиться текст с ошибкой
    errorTextTag: 'span', // Тег, который будет обрамлять текст ошибки
    errorTextClass: 'form__error-message' // Класс для элемента с текстом ошибки
  }, true);
  modalForm.addEventListener('submit', function (e) {
    e.preventDefault();
    var valid = modalPristine.validate();
    // TODO здесь должен написать запрос программист
  });
  const modalPhone = document.querySelector('#modal-phone');
  IMask(modalPhone, modalMaskOptions);

});

function hideModal() {
  document.querySelector('.modal--opened').classList.remove('modal--opened');
  document.body.classList.remove('modal-opened');
}

const onModalEscKeydown= (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    hideModal();
  }
};

const onOutOfModalClick = (evt) => {
  if (evt.target.classList.contains('modal') && !evt.target.classList.contains('.modal__wrapper')) {
    hideModal();
  }
};

document.addEventListener('keydown', onModalEscKeydown);
document.addEventListener('click', onOutOfModalClick);


// Навешиваем модалки на кнопки
const menuCallBackButton = document.querySelector('.menu__back-call-button');
if (menuCallBackButton) {
  menuCallBackButton.addEventListener('click', (evt) => {
    evt.preventDefault(); // Запрет перехода по ссылке
    document.querySelector('.modal').classList.add('modal--opened');
  })
}

// Настраиваем селект
const messengersSelect = document.querySelector('#messengers');
const messengersChoices = new Choices(messengersSelect, {
  placeholder: false,
  searchEnabled: false,
  shouldSort: false,
  itemSelectText: '',
  classNames: {
    containerOuter: 'form-choices',
    containerInner: 'form-choices__inner',
    input: 'form-choices__input',
    inputCloned: 'form-choices__input--cloned',
    list: 'form-choices__list',
    listItems: 'form-choices__list--multiple',
    listSingle: 'form-choices__list--single',
    listDropdown: 'form-choices__list--dropdown',
    item: 'form-choices__item',
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
  }
});

const modalOrder = document.querySelector('.modal--order');
if (modalOrder) {
  const modalOrderMaskOptions = {
    mask: '+{7} (000) 000-00-00',
  };
  const modalOrderPhone = document.querySelector('#modal-order-phone');
  IMask(modalOrderPhone, modalOrderMaskOptions);

  const modalOrderForm = document.querySelector('.modal--order .modal__form');
  const modalOrderPristine = new Pristine(modalOrderForm, {
    classTo: 'form__label', // Элемент, на который будут добавляться классы
    errorTextParent: 'form__label', // Элемент, куда будет выводиться текст с ошибкой
    errorTextTag: 'span', // Тег, который будет обрамлять текст ошибки
    errorTextClass: 'form__error-message' // Класс для элемента с текстом ошибки
  }, true);
  modalOrderForm.addEventListener('submit', function (e) {
    e.preventDefault();
    var valid = modalOrderPristine.validate();
    // TODO здесь должен написать запрос программист
  });
  modalOrder.querySelector('.modal__close-button').addEventListener('click', hideModal);

   // Настраиваем селект
   const modalOrderMessengersSelect = document.querySelector('#modal-order-messengers');
   const modalOrderMessengersChoices = new Choices(modalOrderMessengersSelect, {
     placeholder: false,
     searchEnabled: false,
     shouldSort: false,
     itemSelectText: '',
     classNames: {
       containerOuter: 'form-choices',
       containerInner: 'form-choices__inner',
       input: 'form-choices__input',
       inputCloned: 'form-choices__input--cloned',
       list: 'form-choices__list',
       listItems: 'form-choices__list--multiple',
       listSingle: 'form-choices__list--single',
       listDropdown: 'form-choices__list--dropdown',
       item: 'form-choices__item',
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
     }
   });

    const orderButtons = document.querySelectorAll('.order-button');
    orderButtons.forEach(orderButton => {
      orderButton.addEventListener('click', (evt) => {
        evt.preventDefault(); // Запрет перехода по ссылке
        if (orderButton.classList.contains('comparison__card-button')) {
          const productName = orderButton.closest('.comparison__card').
                                          querySelector('.comparison__model').textContent;
          const modalOrderProduct = modalOrder.querySelector('.modal__product-name');
          modalOrderProduct.textContent = productName;
          const modalOrderProductInput = modalOrder.querySelector('#modal-order-product');
          modalOrderProductInput.value = productName;
        }
        modalOrder.classList.add('modal--opened');
    })
   });
}




