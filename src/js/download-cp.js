const downloadCpForm = document.querySelector('#dwnld-cp');

if (downloadCpForm) {
  const MaskOptions = {
    mask: '+{7} (000) 000-00-00',
  };
  const formPhone = document.querySelector('#dwnld-cp-phone');
  IMask(formPhone, MaskOptions);

  const mailField = downloadCpForm.querySelector('#dwnld-cp-mail');
  var mailMaskOptions = {
    mask: /^\S*@?\S*$/
  };
  IMask(mailField, mailMaskOptions);

  const downloadCpFormFormPristine = new Pristine(downloadCpForm, {
    classTo: 'form__label', // Элемент, на который будут добавляться классы
    errorTextParent: 'form__label', // Элемент, куда будет выводиться текст с ошибкой
    errorTextTag: 'span', // Тег, который будет обрамлять текст ошибки
    errorTextClass: 'form__error-message' // Класс для элемента с текстом ошибки
  }, true);

  downloadCpFormFormPristine.addValidator(formPhone, (value) => {
    return (value.length === 18);
  }, "Номер неполный", 2, false);


  downloadCpForm.addEventListener('submit', function (e) {
    e.preventDefault();
    var valid = downloadCpFormFormPristine.validate();
    // TODO здесь должен написать запрос программист
  });
}
