const solutionsSelectItem = document.querySelector("#projects-form-solutions");
const industrySelectItem = document.querySelector("#projects-form-industry");
const vendorSelectItem = document.querySelector("#projects-form-vendor");
const projectsFormSelectOptions = {
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
const showMoreCasesButton = document.querySelector("#show-more-cases-button");
const casesSpinner = document.querySelector("#cases-spinner");
const casesList = document.querySelector(".projects__list");

if (showMoreCasesButton) {
  function showSpinner() {
    casesSpinner.classList.remove("spinner--hidden");
  }
  function hideSpinner() {
    casesSpinner.classList.add("spinner--hidden");
  }
  function fakeFetch(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
  function hideShowMoreCasesButton() {
    showMoreCasesButton.classList.add("projects__show-more--hidden");
  }
  function showShowMoreCasesButton() {
    showMoreCasesButton.classList.remove("projects__show-more--hidden");
  }
  hideSpinner();
  showMoreCasesButton.addEventListener("click", (evt) => {
    showSpinner();
    fakeFetch(1000).then(() => {
      const clonedCard = document
        .querySelector(".projects__list-item")
        .cloneNode(true);
      casesList.appendChild(clonedCard);
      hideSpinner();
      // hideShowMoreCasesButton();
    });
  });
}

if (solutionsSelectItem) {
  const formSelectChoice = new Choices(
    solutionsSelectItem,
    projectsFormSelectOptions
  );
  solutionsSelectItem.choice = formSelectChoice;
  // solutionsSelectItem.addEventListener('change', updatePrograms.bind(formSelectChoice));
  solutionsSelectItem.addEventListener("change", () => {
    // Фильтрация фейковая!!! Чисто для наглядности
    filterCasesCardsFake(solutionsSelectItem);
  });
}

if (industrySelectItem) {
  const formSelectChoice = new Choices(
    industrySelectItem,
    projectsFormSelectOptions
  );
  industrySelectItem.choice = formSelectChoice;
  // solutionsSelectItem.addEventListener('change', updatePrograms.bind(formSelectChoice));
  industrySelectItem.addEventListener("change", () => {
    // Фильтрация фейковая!!! Чисто для наглядности
    filterCasesCardsFake(industrySelectItem);
  });
}

if (vendorSelectItem) {
  const formSelectChoice = new Choices(
    vendorSelectItem,
    projectsFormSelectOptions
  );
  vendorSelectItem.choice = formSelectChoice;
  // solutionsSelectItem.addEventListener('change', updatePrograms.bind(formSelectChoice));
  vendorSelectItem.addEventListener("change", () => {
    // Фильтрация фейковая!!! Чисто для наглядности
    filterCasesCardsFake(vendorSelectItem);
  });
}

function filterCasesCardsFake(el) {
  const cards = casesList.childNodes;
  const solutionFilter = el.choice.getValue(true);
  const firstChoice =
    el.choice.choiceList.element.firstChild.dataset.value.toString();
  cards.forEach((card) => {
    card.classList.remove("case-card--hidden");
  });

  if (solutionFilter.toString() !== firstChoice) {
    cards.forEach((card, index) => {
      if (index === 0) {
        return;
      }
      card.classList.add("case-card--hidden");
    });
  }
}
