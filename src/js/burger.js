const burger = document.querySelector('.burger');

burger.classList.remove('burger--no-js');

burger.addEventListener('click', (evt) => {
  evt.target.classList.toggle('burger--opened');
  if (menu) {
    menu.classList.toggle('menu--opened');
    document.body.classList.toggle('menu-opened'); // Скрывает футер и мэйн
    pageHeaderBottom.classList.toggle('page-header__bottom--opened');
  }
})


