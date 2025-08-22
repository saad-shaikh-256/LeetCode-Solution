var maxSubArray = function (nums) {
  let curVal = 0; // keeps track of the current subarray sum
  let maxVal = -Infinity; // stores the maximum subarray sum found so far
  // start with -Infinity to handle arrays with all negatives

  for (let i = 0; i < nums.length; i++) {
    curVal += nums[i]; // extend the current subarray by including nums[i]

    maxVal = Math.max(curVal, maxVal);
    // update the maximum subarray sum if the current sum is larger

    if (curVal < 0) {
      // if current sum becomes negative,
      curVal = 0; // reset it (start a new subarray from next element)
    }
  }

  return maxVal; // final result: maximum subarray sum
};
