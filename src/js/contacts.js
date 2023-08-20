const contactsForm = document.querySelector(".contacts__form");

if (contactsForm) {
  const formPhone = document.querySelector("#contacts-phone");

  const contactsFormPristine = new Pristine(
    contactsForm,
    {
      classTo: "form__label", // Элемент, на который будут добавляться классы
      errorTextParent: "form__label", // Элемент, куда будет выводиться текст с ошибкой
      errorTextTag: "span", // Тег, который будет обрамлять текст ошибки
      errorTextClass: "form__error-message", // Класс для элемента с текстом ошибки
    },
    true
  );

  contactsFormPristine.addValidator(
    formPhone,
    (value) => {
      return value.length === 18;
    },
    "Номер неполный",
    2,
    false
  );

  // Настраиваем селект
  const select = document.querySelector("#contacts-form-messengers");
  const choices = new Choices(select, {
    placeholder: false,
    searchEnabled: false,
    shouldSort: false,
    itemSelectText: "",
    classNames: {
      containerOuter: "form-choices",
      containerInner: "form-choices__inner",
      input: "form-choices__input",
      inputCloned: "form-choices__input--cloned",
      list: "form-choices__list",
      listItems: "form-choices__list--multiple",
      listSingle: "form-choices__list--single",
      listDropdown: "form-choices__list--dropdown",
      item: "form-choices__item",
      itemSelectable: "form-choices__item--selectable",
      itemDisabled: "form-choices__item--disabled",
      itemOption: "form-choices__item--choice",
      group: "choices__group",
      groupHeading: "choices__heading",
      button: "choices__button",
      activeState: "is-active",
      focusState: "is-focused",
      openState: "is-open",
      disabledState: "is-disabled",
      highlightedState: "is-highlighted",
      selectedState: "is-selected",
      flippedState: "is-flipped",
    },
    allowHTML: true,
  });

  contactsForm.addEventListener("submit", function (e) {
    e.preventDefault();
    var valid = contactsFormPristine.validate();
    // TODO здесь должен написать запрос программист
  });
}
