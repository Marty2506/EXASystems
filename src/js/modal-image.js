// Настройки модалки для отображения картинок
const modalImage = document.querySelector('.modal-image');
const modalImageContent = modalImage.querySelector('.modal-image__content');
const reveiwsLetters = document.querySelectorAll('.reviews__letter-link');
const modalImageCLoseButton = modalImage.querySelector('.modal-image__close-button');

function hideModalImage() {
  modalImage.classList.remove('modal-image--opened');
}

reveiwsLetters.forEach(reviewsLetter => {
  reviewsLetter.addEventListener('click', (evt) => {
    evt.preventDefault();

    const reviewsLetterImage = reviewsLetter.querySelector('.reviews__letter-image');
    modalImageContent.src = reviewsLetterImage.src;

    modalImage.classList.add('modal-image--opened');
  })
});

modalImageCLoseButton.addEventListener('click', hideModalImage);

const caseImageLinks = document.querySelectorAll('.case__photo-wrapper');
caseImageLinks.forEach(caseImageLink => {
  caseImageLink.addEventListener('click', (evt) => {
    evt.preventDefault();

    modalImageContent.src = caseImageLink.href;

    modalImage.classList.add('modal-image--opened');
  })
});

const certificates = document.querySelectorAll('.certificates__link');
certificates.forEach(certificate => {
  certificate.addEventListener('click', (evt) => {
    evt.preventDefault();

    modalImageContent.src = certificate.href;

    modalImage.classList.add('modal-image--opened');
  })
});
