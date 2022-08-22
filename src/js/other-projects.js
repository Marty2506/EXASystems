var otherProjectsLayout = Macy({
  container: '.other-projects__list',
  trueOrder: true,
  waitForImages: false,
  columns: 1,
  mobileFirst: true,
  breakAt: {
    320: {
      margin: {
        x: 0,
        y: 20
      },
      columns: 1
    },
    768: {
      margin: {
        x: 20,
        y: 20
      },
      columns: 2
    }
  }
});

// Обработка внопки Показать еще
const showMoreOtherProjects = document.querySelector(".other-projects__show-more");

if (showMoreOtherProjects) {
  showMoreOtherProjects.addEventListener("click", (evt) => {
    evt.target.disabled = true;
    renderOtherProjects();
    evt.target.disabled = false;
  });
}

// Тестовая функция, программисту надо переписывать ее
function renderOtherProjects() {
  const list = document.querySelector(".other-projects__list");
  const fragment = document.createDocumentFragment();
  let item = document.querySelector(".other-projects__item:nth-child(3)").cloneNode(true);
  item.removeAttribute("data-macy-complete");
  fragment.appendChild(item);
  item = document.querySelector(".other-projects__item:nth-child(4)").cloneNode(true);
  item.removeAttribute("data-macy-complete");
  fragment.appendChild(item);
  list.appendChild(fragment);
  otherProjectsLayout.recalculate();
}
