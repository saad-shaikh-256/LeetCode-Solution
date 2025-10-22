var heightChecker = function (heights) {
  // Create a copy of the original array and sort it in non-decreasing order.
  // This represents what the heights *should* look like if arranged correctly.
  let expected = [...heights].sort((a, b) => a - b);

  // This will keep track of how many students are not standing in the expected (sorted) position.
  let result = 0;

  // Compare original heights array with sorted array
  for (let i = 0; i <= heights.length - 1; i++) {
    // If current height doesn't match the sorted position,
    // then this student is in the wrong position
    if (heights[i] != expected[i]) {
      result = result + 1;
    }
  }

  // Return how many students need to move
  return result;
};
