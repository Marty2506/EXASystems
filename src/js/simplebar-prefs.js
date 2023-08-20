window.addEventListener("load", () => {
  const vacancyCardItems = document.querySelectorAll(".vacancy-card");
  vacancyCardItems.forEach((vacancyCardItem) => {
    const mySimpleBar = new SimpleBar(vacancyCardItem, { autoHide: false });
  });
});
