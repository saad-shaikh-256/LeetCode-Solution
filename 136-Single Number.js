var singleNumber = function (nums) {
  let result = 0; // start with 0

  // Loop through all numbers
  for (let i = 0; i < nums.length; i++) {
    // XOR current number with result
    result ^= nums[i];
  }

  return result; // return the single number
};
