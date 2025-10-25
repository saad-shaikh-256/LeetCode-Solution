var totalMoney = function (n) {
  let sum = 0;
  let start = 1; // start of each week (Monday value)

  for (let i = 0; i < n; i++) {
    sum += start + (i % 7); // add increasing value each day of the week

    if ((i + 1) % 7 === 0) {
      // when a full week is completed
      start++; // next week starts with +1 more
    }
  }

  return sum;
};
