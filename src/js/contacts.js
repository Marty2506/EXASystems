const contactsForm = document.querySelector('.contacts__form');

const contactsFormPristine = new Pristine(contactsForm, {
  classTo: 'form__label', // Элемент, на который будут добавляться классы
  errorTextParent: 'form__label', // Элемент, куда будет выводиться текст с ошибкой
  errorTextTag: 'span', // Тег, который будет обрамлять текст ошибки
  errorTextClass: 'form__error-message' // Класс для элемента с текстом ошибки
}, true);


contactsForm.addEventListener('submit', function (e) {
  e.preventDefault();
  var valid = contactsFormPristine.validate();
});
