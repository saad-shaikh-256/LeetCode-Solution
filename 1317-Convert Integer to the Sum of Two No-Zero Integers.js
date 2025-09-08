var getNoZeroIntegers = function (n) {
  // Helper function: checks if a number contains '0'
  function hasZero(num) {
    return num.toString().includes("0");
  }

  // Try all possible splits of n into i + j
  for (let i = 1; i < n; i++) {
    let j = n - i; // The complement part

    // If neither i nor j contains a '0', return them as the answer
    if (!hasZero(i) && !hasZero(j)) {
      return [i, j];
    }
  }
};