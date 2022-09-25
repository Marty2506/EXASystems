const consultationForm = document.querySelector('.services__form');

if (consultationForm) {
  const consultationMaskOptions = {
    mask: '+{7} (000) 000-00-00',
  };
  const consultationFormPhone = document.querySelector('#consultation-phone');
  IMask(consultationFormPhone, consultationMaskOptions);

  const consultationFormPristine = new Pristine(consultationForm, {
    classTo: 'form__label', // Элемент, на который будут добавляться классы
    errorTextParent: 'form__label', // Элемент, куда будет выводиться текст с ошибкой
    errorTextTag: 'span', // Тег, который будет обрамлять текст ошибки
    errorTextClass: 'form__error-message' // Класс для элемента с текстом ошибки
  }, true);
  consultationForm.addEventListener('submit', function (e) {
    e.preventDefault();
    var valid = consultationFormPristine.validate();
    // TODO здесь должен написать запрос программист
  });
}
