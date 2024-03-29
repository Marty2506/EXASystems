// Настройки модалки для отображения картинок
const modalImage = document.querySelector(".modal-image");
const modalImageContent = modalImage.querySelector(".modal-image__content");
const reveiwsLetters = document.querySelectorAll(".reviews__letter-link");
const modalImageCLoseButton = modalImage.querySelector(
  ".modal-image__close-button"
);

function hideModalImage() {
  modalImage.classList.remove("modal-image--opened");
}

modalImageCLoseButton.addEventListener("click", hideModalImage);

const onModalImageEscKeydown = (evt) => {
  if (document.querySelector(".modal-image--opened") && isEscapeKey(evt)) {
    evt.preventDefault();
    hideModalImage();
  }
};

const onOutOfImageModalClick = (evt) => {
  if (evt.target.classList.contains("modal-image")) {
    hideModalImage();
  }
};

document.addEventListener("keydown", onModalImageEscKeydown);
document.addEventListener("click", onOutOfImageModalClick);

reveiwsLetters.forEach((reviewsLetter) => {
  reviewsLetter.addEventListener("click", (evt) => {
    evt.preventDefault();

    const reviewsLetterImage = reviewsLetter.querySelector(
      ".reviews__letter-image"
    );
    modalImageContent.src = reviewsLetterImage.src;

    modalImage.classList.add("modal-image--opened");
  });
});

const caseImageLinks = document.querySelectorAll(".case__photo-wrapper");
caseImageLinks.forEach((caseImageLink) => {
  caseImageLink.addEventListener("click", (evt) => {
    evt.preventDefault();

    modalImageContent.src = caseImageLink.href;

    modalImage.classList.add("modal-image--opened");
  });
});

const certificates = document.querySelectorAll(".certificates__link");
certificates.forEach((certificate) => {
  certificate.addEventListener("click", (evt) => {
    evt.preventDefault();

    modalImageContent.src = certificate.href;

    modalImage.classList.add("modal-image--opened");
  });
});

const certCards = document.querySelectorAll(".cert-card__link");

certCards.forEach((certCard) => {
  certCard.addEventListener("click", (evt) => {
    evt.preventDefault();

    modalImageContent.src = certCard.href;

    modalImage.classList.add("modal-image--opened");
  });
});

const clickableRewiews = document.querySelectorAll("[data-review]");

clickableRewiews.forEach((element) => {
  element.addEventListener("click", (evt) => {
    evt.preventDefault();

    modalImageContent.src = element.href;

    modalImage.classList.add("modal-image--opened");
  });
});

function addImageModalOpener(evt) {
  evt.preventDefault();
  modalImageContent.src = evt.target.href;
  modalImage.classList.add("modal-image--opened");
}

const caseBigImages = document.querySelectorAll("[data-case-card-original]");

caseBigImages.forEach((element) => {
  element.addEventListener("click", addImageModalOpener);
});
