const tabs = document.querySelectorAll('.tabs');

tabs.forEach(tabsElement => {
  let panels = tabsElement.querySelectorAll('.tabs__panel');
  panels[0].classList.add('tabs__panel--active');
  let tabButtons = tabsElement.querySelectorAll('.tabs__button');
  tabButtons.forEach((tabButton, i) => {
    tabButton.addEventListener('click', (evt) => {
      tabButtons.forEach((element, j) => {
        panels[j].classList.remove('tabs__panel--active');
        element.classList.remove('tabs__button--active');
      });
      evt.target.classList.add('tabs__button--active');
      panels[i].classList.add('tabs__panel--active');
    })
  });
});
