var findFinalValue = function (nums, original) {
  // Sort the array so we check numbers in increasing order
  nums.sort((a, b) => a - b);

  // Loop through each number in the sorted nums array
  for (let num of nums) {
    // If current number matches 'original'
    // then we double 'original'
    if (num === original) {
      original *= 2;
    }
  }

  // After checking all numbers, return the final value
  return original;
};
