const comparisonCards = document.querySelectorAll('.comparison__card');

function recalculatePropsHeights() {
  const comparisonPropsHeights = new Array(comparisonCards[0].querySelectorAll('.camparison__characteristics-item').length).fill(null);
  comparisonCards.forEach(comparisonCard => {
    const characteristics = comparisonCard.querySelectorAll('.camparison__characteristics-item');
    characteristics.forEach((element, index) => {
      element.style.height = "";
      element.classList.add('camparison__characteristics-item--mobile');
      if (element.clientHeight > comparisonPropsHeights[index]) {
        comparisonPropsHeights[index] = element.clientHeight;
      }
    });
  });

  comparisonCards.forEach(comparisonCard => {
    const characteristics = comparisonCard.querySelectorAll('.camparison__characteristics-item');
    const mobileProps = document.querySelectorAll('.comparison__mobile-props-item');
    characteristics.forEach((element, index) => {
      element.classList.remove('camparison__characteristics-item--mobile');
      if (comparisonPropsHeights[index] !== null) {
        element.style.height = comparisonPropsHeights[index] + "px";
        mobileProps[index].style.height = comparisonPropsHeights[index] + "px";
      }
    });
  });
}

window.addEventListener('resize', recalculatePropsHeights);
document.addEventListener("DOMContentLoaded", recalculatePropsHeights);
