go = function () {
  if (noDpuOnRight) {
    sayHello();
    sayYourName();
  } else {
    waitForDpuOnRight(function () {
      sayYourName();
    });
  }
};