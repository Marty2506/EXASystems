const SCROLL_SIZE = 200;
const scrollUpButton = document.querySelector('#side-panel-to-top');

scrollUpButton.addEventListener('click', (evt) => {
  window.scrollTo({top: 0, behavior: 'smooth'});
})
