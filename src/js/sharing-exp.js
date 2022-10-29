const shareExpForm = document.querySelector('.sharing-exp__form');

if (shareExpForm) {
  const MaskOptions = {
    mask: '+{7} (000) 000-00-00',
  };
  const shareExpFormPhone = document.querySelector('#share-exp-phone');
  IMask(shareExpFormPhone, MaskOptions);

  const shareExpFormPristine = new Pristine(shareExpForm, {
    classTo: 'form__label', // Элемент, на который будут добавляться классы
    errorTextParent: 'form__label', // Элемент, куда будет выводиться текст с ошибкой
    errorTextTag: 'span', // Тег, который будет обрамлять текст ошибки
    errorTextClass: 'form__error-message' // Класс для элемента с текстом ошибки
  }, true);
  shareExpForm.addEventListener('submit', function (e) {
    e.preventDefault();
    var valid = shareExpFormPristine.validate();
    // TODO здесь должен написать запрос программист
  });

  // Настраиваем селект
  const select = document.querySelector('#share-exp-messengers');
  const choices = new Choices(select, {
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
    },
    allowHTML: true
  });
}
