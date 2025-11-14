var sumOfSquares = function (nums) {
  let result = 0;
  let n = nums.length;

  // i goes from 1 to n (1-based index)
  for (let i = 1; i <= nums.length; i++) {
    // Convert 1-based index (i) → 0-based index (i-1)
    let num = nums[i - 1];

    // Check if i is a divisor of n
    if (n % i == 0) {
      // Add the square of nums[i-1] to the result
      result = result + num * num;
    }
  }

  return result;
};
