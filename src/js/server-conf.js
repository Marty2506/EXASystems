// Настройка селектов

const serverConfSelects = document.querySelectorAll('#server-conf-form .form__select');

serverConfSelects.forEach(serverConfSelect => {
  serverConfSelect.choices = new Choices(serverConfSelect, {
    placeholder: true,
    placeholderValue: null,
    searchEnabled: false,
    shouldSort: false,
    itemSelectText: '',
    classNames: {
      containerOuter: 'form-choices form-choices--righted conf-group__choices',
      containerInner: 'form-choices__inner',
      input: 'form-choices__input',
      inputCloned: 'form-choices__input--cloned',
      list: 'form-choices__list',
      listItems: 'form-choices__list--multiple',
      listSingle: 'form-choices__list--single',
      listDropdown: 'form-choices__list--dropdown',
      item: 'form-choices__item',
      placeholder: 'form-choices__paceholder',
      itemSelectable: 'form-choices__item--selectable',
      itemDisabled: 'form-choices__item--disabled',
      itemOption: 'form-choices__item--choice',
      group: 'choices__group',
      groupHeading : 'choices__heading',
      button: 'choices__button',
      activeState: 'is-active',
      focusState: 'is-focused',
      openState: 'is-open',
      disabledState: 'is-disabled',
      highlightedState: 'is-highlighted',
      selectedState: 'is-selected',
      flippedState: 'is-flipped'
    },
    allowHTML: true
  });
  serverConfSelect.addEventListener('change', updateServerConfig);
});


const serverConfForm = document.querySelector('#server-conf-form');
const serverConfigItem = document.querySelector('.server-conf__config');
const serverConfigPositions = serverConfForm.querySelectorAll('.conf-group:not(.conf-group--sub)');
const serverConfigNumberInputs = serverConfForm.querySelectorAll('input[type="number"]');
const serverConfigSummaryPrice = document.querySelector('.server-conf__summary-price');

serverConfigNumberInputs.forEach(element => {
  const incButton = element.parentNode.querySelector('.form__number-input-button--inc');
  if (incButton) {
    incButton.addEventListener('click', () => {
      setTimeout(updateServerConfig);
    })
  }
  const decButton = element.parentNode.querySelector('.form__number-input-button--dec');
  if (decButton) {
    decButton.addEventListener('click', () => {
      setTimeout(updateServerConfig);
    })
  }
  element.addEventListener('blur', updateServerConfig);
});


if (serverConfigItem) {
  updateServerConfig();
}


// Образец группы
{/* <div class="conf-group conf-group--summary">
      <p class="conf-group__title conf-group__title--cpu">Процессор</p>
      <div class="conf-group__content">
        <div class="conf-group__row">
          <p class="conf-group__chosen-component">Intel Xeon E5-2630L (6C 15M Cache 2.00 GHz)</p>
          <span class="conf-group__chosen-component-cnt">1</span>
        </div>
      <div>
    </div>
*/}
function createConfGroup(baseDomEl) {
  const group = document.createElement("div");
  group.classList.add('conf-group', 'conf-group--summary');
  const title = document.createElement("p");
  title.classList.add('conf-group__title');
  title.textContent = "Тип продукта не указан";
  const groupContent = document.createElement("div");
  groupContent.classList.add('conf-group__content');
  const groupRow = document.createElement("div");
  groupRow.classList.add('conf-group__row');
  const chosenComponent = document.createElement("p");
  chosenComponent.classList.add('conf-group__chosen-component');
  chosenComponent.textContent = "Продукт не выбран";
  const chosenComponentCnt = document.createElement("span");
  chosenComponentCnt.classList.add('conf-group__chosen-component-cnt');
  chosenComponentCnt.textContent = "0";
  group.appendChild(title);
  group.appendChild(groupContent);
  groupRow.appendChild(chosenComponent);
  groupRow.appendChild(chosenComponentCnt);

  if (baseDomEl) {
    if (baseDomEl.classList.contains('conf-group')) {
      if (baseDomEl.classList.contains('conf-group--sub')) {
        group.classList.add('conf-group--sub');
      }
      const baseDomElTitle = baseDomEl.querySelector('.conf-group__title');
      title.className = baseDomElTitle.className;
      title.textContent = baseDomElTitle.textContent;

      const baseDomElChilds = baseDomEl.querySelectorAll('.conf-group--sub');
      if (baseDomElChilds.length > 0) {
        baseDomElChilds.forEach(baseDomElChild => {
          const childGroup = createConfGroup(baseDomElChild);
           if (childGroup) groupContent.appendChild(childGroup);
        });
        if (!groupContent.hasChildNodes()) {
          return null;
        }
        return group;
      }
      const choice = baseDomEl.querySelector('.form__select').choices.getValue(true);
      chosenComponent.textContent = choice;
      const cnt = baseDomEl.querySelector('input[type="number"]');
      if (cnt) {
        if (parseInt(cnt.value) === 0) return null;
        chosenComponentCnt.textContent = cnt.value;
      } else {
        groupRow.removeChild(chosenComponentCnt);
      }
      groupContent.appendChild(groupRow);
    }
  }

  return group;
}

function updateServerConfig() {
  const fragment = document.createDocumentFragment();
  serverConfigPositions.forEach(position => {
    const selects = [...position.querySelectorAll('.form__select')];
    const choiceValues = selects.map((value) => {
      return value.choices.getValue(true);
    })
    if (selects.some((value) => {
      return value.choices.getValue(true);
    })) {
      const group = createConfGroup(position);
      if (group) fragment.appendChild(createConfGroup(position));
    }
  });
  serverConfigItem.innerHTML = '';
  if (fragment.firstChild) {
    serverConfigSummaryPrice.classList.remove('server-conf__summary-price--hidden');
  } else {
    serverConfigSummaryPrice.classList.add('server-conf__summary-price--hidden');
    const noConfigText = document.createElement('p');
    noConfigText.classList.add('server-conf__no-conf-text');
    noConfigText.textContent = "Конфигурация не выбрана";
    fragment.appendChild(noConfigText);
  }
  serverConfigItem.appendChild(fragment);
}

