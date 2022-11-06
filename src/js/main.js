const header = document.querySelector('.page-header');

window.addEventListener('scroll', (evt) => {
  if (document.body.scrollTop > SCROLL_SIZE || document.documentElement.scrollTop > SCROLL_SIZE) {
    header.classList.add('page-header--sticky');
  } else {
    header.classList.remove('page-header--sticky');
  }
})
