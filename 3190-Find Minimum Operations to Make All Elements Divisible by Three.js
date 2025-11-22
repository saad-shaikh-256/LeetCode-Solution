var minimumOperations = function (nums) {
  let ops = 0; // Count how many numbers need to be changed

  for (let n of nums) {
    // If the number is NOT divisible by 3,
    // it means we need 1 operation to make it divisible by 3
    if (n % 3 !== 0) ops++;
  }

  // Return total operations needed
  return ops;
};
