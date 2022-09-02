const needHelpMaskOptions = {
  mask: '+{7} (000) 000-00-00',
};
const needHelpPhone = document.querySelector('#need-help-phone');
IMask(needHelpPhone, needHelpMaskOptions);

const needHelpForm = document.querySelector('.need-help__form');
  const needHelpPristine = new Pristine(needHelpForm, {
    classTo: 'form__label', // Элемент, на который будут добавляться классы
    errorTextParent: 'form__label', // Элемент, куда будет выводиться текст с ошибкой
    errorTextTag: 'span', // Тег, который будет обрамлять текст ошибки
    errorTextClass: 'form__error-message' // Класс для элемента с текстом ошибки
  }, true);
  needHelpForm.addEventListener('submit', function (e) {
    e.preventDefault();
    var valid = needHelpPristine.validate();
    // TODO здесь должен написать запрос программист
  });

  // Настраиваем селект
const needHelpMessengersSelect = document.querySelector('#need-help-messengers');
const needHelpMessengersChoices = new Choices(needHelpMessengersSelect, {
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

