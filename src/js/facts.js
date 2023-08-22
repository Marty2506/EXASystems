const factsItem = document.querySelector(".facts");
const runningItems = document.querySelectorAll(".facts__numbers-value");
let positionRached = false;

window.addEventListener("scroll", () => {
  const factsItemPos = factsItem.offsetTop;
  const widnowPos = document.querySelector(".page").scrollTop;
  if (widnowPos > factsItemPos - 100 && !positionRached) {
    positionRached = true;
    runningItems.forEach((runningItem) => {
      const valPlaceholder = runningItem.querySelector("span");
      const maxVal = parseInt(runningItem.dataset.maxValue);
      const startVal = parseInt(valPlaceholder.textContent);
      const time = parseInt(runningItem.dataset.time);
      const step = time / (maxVal - startVal);
      let cnt = startVal;
      const int = setInterval(function () {
        if (cnt <= maxVal) {
          valPlaceholder.textContent = cnt;
        } else {
          clearInterval(int);
        }
        cnt++;
      }, step);
    });
  }
});
