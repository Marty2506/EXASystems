// Расширение для кнопок в offers
const offersButtons = document.querySelectorAll('.offers__button');
offersButtons.forEach((offersButton, index) => {
  offersButton.addEventListener('click', () => {
    offersButtons.forEach(element => {
      element.classList.remove('offers__button--active');
    });
    offersButton.classList.add('offers__button--active');
    const select = offersButton.closest('.offers').querySelector('.offers__select');
    newOffersSelect.value = select.options[index].value;
  })
});
