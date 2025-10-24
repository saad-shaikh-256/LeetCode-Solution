var arrangeCoins = function (n) {
  // 'step' represents the current row number we are trying to fill.
  let step = 1;

  // Keep subtracting coins row by row until we don't have enough coins left
  // to complete the next row.
  while (n >= step) {
    n = n - step; // Use 'step' coins to fill the current row
    step++; // Move to the next row (which will need 'step' coins)
  }

  // When loop ends, we couldn't complete the last attempted row,
  // so the number of *full* rows is step - 1.
  return step - 1;
};
