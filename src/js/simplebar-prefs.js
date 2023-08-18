window.addEventListener("load", () => {
  const vacancyCardItems = document.querySelectorAll(".vacancy-card");
  console.log(vacancyCardItems);
  vacancyCardItems.forEach((vacancyCardItem) => {
    const mySimpleBar = new SimpleBar(vacancyCardItem, { autoHide: false });
    console.log(mySimpleBar);
  });
});
