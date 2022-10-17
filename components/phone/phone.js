const contactsForm = document.querySelector('.contacts__form');

if (contactsForm) {
  const MaskOptions = {
    mask: '+{7} (000) 000-00-00',
  };
  const formPhone = document.querySelector('#contacts-phone');
  IMask(formPhone, MaskOptions);

  const contactsFormPristine = new Pristine(contactsForm, {
    classTo: 'form__label', // Элемент, на который будут добавляться классы
    errorTextParent: 'form__label', // Элемент, куда будет выводиться текст с ошибкой
    errorTextTag: 'span', // Тег, который будет обрамлять текст ошибки
    errorTextClass: 'form__error-message' // Класс для элемента с текстом ошибки
  }, true);

  contactsFormPristine.addValidator(formPhone, (value) => {
    return (value.length === 18);
  }, "Номер неполный", 2, false);

  contactsForm.addEventListener('submit', function (e) {
    e.preventDefault();
    var valid = contactsFormPristine.validate();
    // TODO здесь должен написать запрос программист
  });
}
