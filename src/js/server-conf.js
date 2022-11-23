// Настройка селектов

const serverConfSelects = document.querySelectorAll('#server-conf-form .form__select');

serverConfSelects.forEach(serverConfSelect => {
  const catalogSelectChoice = new Choices(serverConfSelect, {
    placeholder: true,
    placeholderValue: null,
    searchEnabled: false,
    shouldSort: false,
    itemSelectText: '',
    classNames: {
      containerOuter: 'form-choices form-choices--righted conf-group__choices',
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

