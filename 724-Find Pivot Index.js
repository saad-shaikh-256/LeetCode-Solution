var pivotIndex = function (nums) {
  let rightSum = 0; // total sum of all elements
  let leftSum = 0; // running sum from the left

  // Step 1: Calculate total sum (stored in rightSum)
  for (let num of nums) {
    rightSum += num;
  }

  // Step 2: Iterate through nums
  for (let i = 0; i < nums.length; i++) {
    // Remove current element from rightSum (so rightSum = sum of elements to the right of i)
    rightSum -= nums[i];

    // If leftSum == rightSum, current index is the pivot
    if (leftSum === rightSum) {
      return i;
    }

    // Add current element to leftSum (so it will be counted for the next iteration)
    leftSum += nums[i];
  }

  // Step 3: No pivot found → return -1
  return -1;
};
