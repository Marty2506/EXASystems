// Настройки модалки для отображения картинок
const modalImage = document.querySelector(".modal-image");
const modalImageContentWrapper = modalImage.querySelector(
  ".modal-image__content-wrapper"
);
const modalImageContent = modalImage.querySelector(".modal-image__content");
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

document.addEventListener("click", (evt) => {
  if (
    !(evt.target.closest("a") || evt.target).matches(
      "[data-image-can-open-in-modal]"
    )
  )
    return;

  evt.preventDefault();
  modalImageContent.src = evt.target.closest("a").href;
  modalImage.classList.add("modal-image--opened");
});

modalImageContent.addEventListener("load", () => {
  modalImageContent.parentNode.classList.remove(
    "modal-image__content-wrapper--so-big"
  );
  if (modalImageContent.naturalHeight > document.body.clientHeight - 50) {
    modalImageContentWrapper.classList.add(
      "modal-image__content-wrapper--so-big"
    );
  }
});
