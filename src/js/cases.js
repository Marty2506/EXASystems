var casesLayout = Macy({
  container: '.completed-projects__list',
  trueOrder: true,
  waitForImages: true,
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
