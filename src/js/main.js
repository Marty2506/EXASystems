const numberInputsWithArrows = document.querySelectorAll(
  '.form__field-number-wrapper input[type="number"]'
);
numberInputsWithArrows.forEach((element) => {
  const mask = IMask(element, {
    mask: Number,
    scale: 0,
    signed: false,
    min: element.min,
    max: element.max,
  });

  element.addEventListener("blur", () => {
    if (element.value === "") {
      element.value = 0;
      mask.updateValue();
    }
  });
  const incButton = element.parentNode.querySelector(
    ".form__number-input-button--inc"
  );
  if (incButton) {
    incButton.addEventListener("click", () => {
      element.stepUp();
      mask.updateValue();
    });
  }
  const decButton = element.parentNode.querySelector(
    ".form__number-input-button--dec"
  );
  if (decButton) {
    decButton.addEventListener("click", () => {
      element.stepDown();
      mask.updateValue();
    });
  }
  // element.parentNode.parentNode.addEventListener('mousedown', (evt) => {
  //   evt.preventDefault();
  //   element.focus();
  // })
});
