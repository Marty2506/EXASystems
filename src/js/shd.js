const shdForm = document.querySelector('#shd-form');

if (shdForm) {
  // Настраиваем селекты
  const jbodSelect = document.querySelector('#shd-jbod');
  const selectOptions = {
    placeholder: true,
    placeholderValue: null,
    searchEnabled: false,
    shouldSort: false,
    itemSelectText: '',
    classNames: {
      containerOuter: 'form-choices form-choices--righted shd__choices',
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
    }
  }
  const jbodChoice = new Choices(jbodSelect, selectOptions);

  const eonstorConvPortNumbers = document.querySelector('#shd-eonstor-converged-port-numbers');
  const eonstorConvPortNumbersChoice = new Choices(eonstorConvPortNumbers, selectOptions);

  const eonstorPortNumbers = document.querySelector('#shd-eonstor-port-numbers');
  const eonstorPortNumbersChoice = new Choices(eonstorPortNumbers, selectOptions);
}
