go = function () {
  if (noDpuOnRight) {
    sayYourName();
  } else {
    waitForDpuOnRight(function () {
      sayYourName();
    });
  }
};
