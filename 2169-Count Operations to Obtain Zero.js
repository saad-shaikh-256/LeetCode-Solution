var countOperations = function (num1, num2) {
  // Initialize a counter to keep track of how many operations are performed
  let count = 0;

  // Continue performing operations until one of the numbers becomes 0
  while (num1 !== 0 && num2 !== 0) {
    // If num1 is greater than or equal to num2,
    // subtract num2 from num1
    if (num1 >= num2) {
      num1 -= num2;
    }
    // Otherwise, subtract num1 from num2
    else {
      num2 -= num1;
    }

    // Each subtraction counts as one operation
    count++;
  }

  // When one of the numbers becomes 0, return the total operation count
  return count;
};
