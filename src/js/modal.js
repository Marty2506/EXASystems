// Настройка модалок

function hideModal() {
  document.querySelector(".modal--opened").classList.remove("modal--opened");
  document.body.classList.remove("modal-opened");
}

const isEscapeKey = (evt) => evt.key === "Escape";

const onModalEscKeydown = (evt) => {
  if (document.querySelector(".modal--opened") && isEscapeKey(evt)) {
    evt.preventDefault();
    hideModal();
  }
};

const onOutOfModalClick = (evt) => {
  if (
    evt.target.classList.contains("modal") &&
    !evt.target.classList.contains(".modal__wrapper")
  ) {
    hideModal();
  }
};

document.addEventListener("keydown", onModalEscKeydown);
document.addEventListener("click", onOutOfModalClick);

const modalResume = document.querySelector(".modal--resume");

if (modalResume) {
  const form = document.querySelector("#modal-resume-form");
  const phoneEl = document.querySelector("#modal-resume-phone");

  const mailField = form.querySelector("#modal-resume-mail");

  const modalResumePristine = new Pristine(
    form,
    {
      classTo: "form__label", // Элемент, на который будут добавляться классы
      errorTextParent: "form__label", // Элемент, куда будет выводиться текст с ошибкой
      errorTextTag: "span", // Тег, который будет обрамлять текст ошибки
      errorTextClass: "form__error-message", // Класс для элемента с текстом ошибки
    },
    true
  );

  modalResumePristine.addValidator(
    phoneEl,
    (value) => {
      return value.length === 18;
    },
    "Номер неполный",
    2,
    false
  );

  const uploadFileButton = form.querySelector("#modal-resume-file");

  if (uploadFileButton) {
    const selectedFileItem = form.querySelector("#modeal-resume-selected-file");
    uploadFileButton.addEventListener("change", () => {
      selectedFileItem.textContent = uploadFileButton.files[0].name;
    });
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    var valid = modalResumePristine.validate();
    // TODO здесь должен написать запрос программист
  });
  modalResume
    .querySelector(".modal__close-button")
    .addEventListener("click", hideModal);

  const openResumeModalButtons = document.querySelectorAll(
    '[data-button-type="open-resume-modal"]'
  );

  openResumeModalButtons.forEach((element) => {
    element.addEventListener("click", () => {
      modalResume.classList.add("modal--opened");
    });
  });
}

const modalCons = document.querySelector(".modal--consultation");

if (modalCons) {
  const form = document.querySelector("#modal-cons-form");
  const phoneEl = document.querySelector("#modal-cons-phone");

  const modaConsPristine = new Pristine(
    form,
    {
      classTo: "form__label", // Элемент, на который будут добавляться классы
      errorTextParent: "form__label", // Элемент, куда будет выводиться текст с ошибкой
      errorTextTag: "span", // Тег, который будет обрамлять текст ошибки
      errorTextClass: "form__error-message", // Класс для элемента с текстом ошибки
    },
    true
  );

  modaConsPristine.addValidator(
    phoneEl,
    (value) => {
      return value.length === 18;
    },
    "Номер неполный",
    2,
    false
  );

  // Настраиваем селект
  const select = document.querySelector("#modal-cons-messengers");
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

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    var valid = modaConsPristine.validate();
    // TODO здесь должен написать запрос программист
  });
  modalCons
    .querySelector(".modal__close-button")
    .addEventListener("click", hideModal);

  const openConsModalButtons = document.querySelectorAll(
    '[data-button-type="open-cons-modal"]'
  );

  openConsModalButtons.forEach((element) => {
    element.addEventListener("click", (evt) => {
      evt.preventDefault();
      modalCons.classList.add("modal--opened");
    });
  });
}
