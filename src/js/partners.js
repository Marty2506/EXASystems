const solutionsSelectItem = document.querySelector("#partners-form-solutions");
const partnersFormSelectOptions = {
  placeholder: false,
  searchEnabled: false,
  shouldSort: false,
  itemSelectText: "",
  classNames: {
    containerOuter: "form-choices form-choices--theme-projects",
    containerInner: "form-choices__inner",
    input: "form-choices__input",
    inputCloned: "form-choices__input--cloned",
    list: "form-choices__list",
    listItems: "form-choices__list--multiple",
    listSingle: "form-choices__list--single",
    listDropdown: "form-choices__list--dropdown",
    item: "form-choices__item",
    itemSelectable: "form-choices__item--selectable",
    itemDisabled: "form-choices__item--disabled",
    itemOption: "form-choices__item--choice",
    group: "choices__group",
    groupHeading: "choices__heading",
    button: "choices__button",
    activeState: "is-active",
    focusState: "is-focused",
    openState: "is-open",
    disabledState: "is-disabled",
    highlightedState: "is-highlighted",
    selectedState: "is-selected",
    flippedState: "",
  },
  allowHTML: true,
};

if (solutionsSelectItem) {
  const formSelectChoice = new Choices(
    solutionsSelectItem,
    partnersFormSelectOptions
  );
  solutionsSelectItem.choice = formSelectChoice;
  // solutionsSelectItem.addEventListener('change', updatePrograms.bind(formSelectChoice));
  solutionsSelectItem.addEventListener("change", () => {
    clearSelection();
    // filterCasesCards();
    // TODO написать фильтрацию если понадобится
  });
}

const partnersItems = document.querySelectorAll(".partners__item");
const partnersInfoItems = document.querySelectorAll(
  ".partners__info-list-item"
);
const partnersList = document.querySelector(".partners__list");
const partnersInfoListContainer = document.querySelector(
  ".partners__info-list-container"
);

partnersList.addEventListener("click", (evt) => {
  const item = evt.target.closest(".partners__item");
  const itemIndex = Array.from(item.parentNode.children).indexOf(item);
  if (item !== null) {
    clearSelection();
    item.classList.add("partners__item--active");
    partnersInfoItems[itemIndex].classList.add(
      "partners__info-list-item--active"
    );
    partnersInfoListContainer.classList.add(
      "partners__info-list-container--active"
    );
  }
});

partnersInfoListContainer.addEventListener("click", (evt) => {
  evt.target.classList.remove("partners__info-list-container--active");
});

function clearSelection() {
  partnersItems.forEach((el, index) => {
    el.classList.remove("partners__item--active");
    partnersInfoItems[index].classList.remove(
      "partners__info-list-item--active"
    );
    partnersInfoListContainer.classList.remove(
      "partners__info-list-container--active"
    );
  });
}

window.addEventListener("load", () => {
  if (window.screen.width >= DESKTOP_WIDTH) {
    partnersItems.item(0).click();
  }
});
