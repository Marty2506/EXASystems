const sfrForm = document.querySelector('#sfr-form');

if (sfrForm) {
  const MaskOptions = {
    mask: '+{7} (000) 000-00-00',
  };
  const formPhone = document.querySelector('#sfr-phone');
  IMask(formPhone, MaskOptions);

  const sfrFormPristine = new Pristine(sfrForm, {
    classTo: 'form__label', // Элемент, на который будут добавляться классы
    errorTextParent: 'form__label', // Элемент, куда будет выводиться текст с ошибкой
    errorTextTag: 'span', // Тег, который будет обрамлять текст ошибки
    errorTextClass: 'form__error-message' // Класс для элемента с текстом ошибки
  }, true);
  sfrForm.addEventListener('submit', function (e) {
    e.preventDefault();
    var valid = sfrFormPristine.validate();
    // TODO здесь должен написать запрос программист
  });

  const select = document.querySelector('#sfr-messengers');
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
    }
  });

  const submitButton = sfrForm.querySelector('.sfr__submit-button');
  submitButton.disabled = true;
  const calcButton = document.querySelector('.sfr__calc-button');
  const sfrSummary = document.querySelector('.sfr__summary');
  sfrSummary.style.maxHeight = null;
  const camsInputs = document.querySelectorAll('.sfr__number-field');
  let camsCnt = 0;
  const camsCntPole = document.querySelector('#sfr-cams-cnt');
  const videocardsCntPole = document.querySelector('#sfr-videocards-cnt');

  calcButton.addEventListener('click', () => {
    camsCnt = 0;
    if (!sfrSummary.classList.contains('sfr__summary--opened')) {
      sfrSummary.classList.add('sfr__summary--opened');
      submitButton.disabled = false;
      sfrSummary.style.maxHeight = sfrSummary.scrollHeight + "px";
    }
    camsInputs.forEach(element => {
      camsCnt += parseInt(element.value);
    });
    camsCntPole.textContent = camsCnt.toString();
    videocardsCntPole.textContent = camsCnt.toString();
  })
}
