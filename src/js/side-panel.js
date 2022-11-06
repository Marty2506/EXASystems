const sidePanel = document.querySelector('.side-panel');
const scrollUpButton = sidePanel.querySelector('#side-panel-to-top');

scrollUpButton.addEventListener('click', (evt) => {
  window.scrollTo({top: 0, behavior: 'smooth'});
})

window.addEventListener('scroll', (evt) => {
  if (document.body.scrollTop > SCROLL_SIZE || document.documentElement.scrollTop > SCROLL_SIZE) {
    sidePanel.classList.add('side-panel--active');
  } else {
    sidePanel.classList.remove('side-panel--active');
  }
})
