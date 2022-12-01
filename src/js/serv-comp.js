window.addEventListener('resize', showButtons);

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
addProductToCompare();

const servCompValuesCont = document.querySelector('.serv-comp__param-value-wrapper:last-child');
const servCompButtons = document.querySelector('.serv-comp__buttons');
const servCompNext = document.querySelector('#serv-comp-next');
const servCompPrev = document.querySelector('#serv-comp-prev');
const servCompContent = document.querySelector('.serv-comp__content');
const firstServComp = document.querySelectorAll('.serv-comp__param-values')[0].querySelector('.serv-comp__param-value-wrapper:first-child');
const lastServComp = document.querySelectorAll('.serv-comp__param-values')[0].querySelector('.serv-comp__param-value-wrapper:last-child');
const documentWidth = document.documentElement.offsetWidth;
console.log("first", firstServComp.getBoundingClientRect().left, firstServComp.getBoundingClientRect().right);
console.log("last", lastServComp.getBoundingClientRect().left, lastServComp.getBoundingClientRect().right);

function showButtons() {
  const documentWidth = document.documentElement.offsetWidth;
  const contWidth = servCompValuesCont.getBoundingClientRect();
  console.log(documentWidth, contWidth, contWidth.left, contWidth.right);
  if (contWidth.left < 0 || contWidth.right > documentWidth) {
    console.log("OVERFLOW!!!");
    // servCompButtons.classList.remove('serv-comp__buttons--hidden');
  } else {
    // servCompButtons.classList.add('serv-comp__buttons--hidden');
  }
}

const SERV_COMP_BIAS = 152;
let servCompTrVal = 0;
servCompNext.addEventListener('click', () => {
  if (!servCompNext.disabled) {
    servCompTrVal -= SERV_COMP_BIAS;
    const paramValues = document.querySelectorAll('.serv-comp__param-values');
    const enableStateNextButton = willServCompContOverflowRight(-SERV_COMP_BIAS); // ok
    const enableStatePrevButton = willServCompContOverflowLeft(-SERV_COMP_BIAS);
    // const needEnablePrevButton = (firstServComp.getBoundingClientRect().left + 152 ) > 0;
    console.log(lastServComp.getBoundingClientRect().right - 152, documentWidth);
    paramValues.forEach(element => {
      element.style.transform = `translateX(${servCompTrVal}px`;
    });
    servCompNext.disabled = enableStateNextButton;
    servCompPrev.disabled = enableStatePrevButton;
    servCompNext.classList.add('section__swiper-button--disabled');
  }
})
servCompPrev.addEventListener('click', () => {
  if (!servCompPrev.disabled) {
    servCompTrVal += SERV_COMP_BIAS;
    const paramValues = document.querySelectorAll('.serv-comp__param-values');
    const enableStateNextButton = willServCompContOverflowRight(SERV_COMP_BIAS); // ok
    const enableStatePrevButton = willServCompContOverflowLeft(SERV_COMP_BIAS);
    paramValues.forEach(element => {
      element.style.transform = `translateX(${servCompTrVal}px`;
    });
    servCompNext.disabled = enableStateNextButton;
    servCompPrev.disabled = enableStatePrevButton;
  }
})

function willServCompContOverflowRight(bias) {
  return (lastServComp.getBoundingClientRect().right + bias) < documentWidth;
}
function willServCompContOverflowLeft(bias) {
  return (firstServComp.getBoundingClientRect().left + bias) > 0;
}
