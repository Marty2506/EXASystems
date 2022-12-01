const servCompValuesCont = document.querySelector('.serv-comp__param-value-wrapper:last-child');
const servCompButtons = document.querySelector('.serv-comp__buttons');
const servCompNext = document.querySelector('#serv-comp-next');
const servCompPrev = document.querySelector('#serv-comp-prev');
const servCompContent = document.querySelector('.serv-comp__content');
const firstServParamRow = document.querySelectorAll('.serv-comp__param-values')[0];

const SERV_COMP_BIAS = 152;
let servCompTrVal = 0;

function addProductToCompare(num = 1) {
  const paramValues = document.querySelectorAll('.serv-comp__param-values');
  paramValues.forEach(element => {
    const lastValue = element.querySelector('.serv-comp__param-value-wrapper:last-child');
    for (let i = 0; i < num; i++) {
      const newValue = lastValue.cloneNode(true);
      element.appendChild(newValue);
    }
  });
}
addProductToCompare(5);
showButtons();

window.addEventListener('resize', showButtons);

if (!servCompButtons.classList.contains('serv-comp__buttons--hidden')) {
  setServButtonsDisable(0);
}

function showButtons() {
  const contRect = servCompContent.getBoundingClientRect();
  const firstServComp = firstServParamRow.querySelector('.serv-comp__param-value-wrapper:first-child');
  const lastServComp = firstServParamRow.querySelector('.serv-comp__param-value-wrapper:last-child');

  servCompTrVal = 0;
  const paramValues = document.querySelectorAll('.serv-comp__param-values');
  setServButtonsDisable(0);
  paramValues.forEach(element => {
    element.style.transform = `translateX(${servCompTrVal}px`;
  });

  if (firstServComp.getBoundingClientRect().left < contRect.left ||
      lastServComp.getBoundingClientRect().right > contRect.right) {
    servCompButtons.classList.remove('serv-comp__buttons--hidden');
  } else {
    servCompButtons.classList.add('serv-comp__buttons--hidden');
  }
}



servCompNext.addEventListener('click', () => {
  servCompTrVal -= SERV_COMP_BIAS;
  const paramValues = document.querySelectorAll('.serv-comp__param-values');
  setServButtonsDisable(-SERV_COMP_BIAS);
  paramValues.forEach(element => {
    element.style.transform = `translateX(${servCompTrVal}px`;
  });
})
servCompPrev.addEventListener('click', () => {
  servCompTrVal += SERV_COMP_BIAS;
  const paramValues = document.querySelectorAll('.serv-comp__param-values');
  setServButtonsDisable(SERV_COMP_BIAS);
  paramValues.forEach(element => {
    element.style.transform = `translateX(${servCompTrVal}px`;
  });
})

function willServCompContOverflowRight(bias) {
  const lastServComp = firstServParamRow.querySelector('.serv-comp__param-value-wrapper:last-child');
  const contRect = servCompContent.getBoundingClientRect();
  return (lastServComp.getBoundingClientRect().right + bias) > contRect.right;
}
function willServCompContOverflowLeft(bias) {
  const firstServComp = firstServParamRow.querySelector('.serv-comp__param-value-wrapper:first-child');
  const contRect = servCompContent.getBoundingClientRect();
  return (firstServComp.getBoundingClientRect().left + bias) < contRect.left;
}
function setServButtonsDisable(bias) {
  const nextButtonDisabled = !willServCompContOverflowRight(bias);
  const prevButtonDisabled = !willServCompContOverflowLeft(bias);
  servCompNext.disabled = nextButtonDisabled;
  servCompPrev.disabled = prevButtonDisabled;
  if (servCompNext.disabled) {
    servCompNext.classList.add('section__swiper-button--lock');
  } else {
    servCompNext.classList.remove('section__swiper-button--lock');
  }

  if (servCompPrev.disabled) {
    servCompPrev.classList.add('section__swiper-button--lock');
  } else {
    servCompPrev.classList.remove('section__swiper-button--lock');
  }
}
