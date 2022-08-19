var casesLayout = Macy({
  container: '.team__list',
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
        x: 25,
        y: 50
      },
      columns: 2
    },
    1321: {
      margin: {
        x: 38,
        y: 75
      },
      columns: 2
    }
  }
});
