var kLengthApart = function (nums, k) {
  // 'prev' will store the index of the previous 1
  // Initialize with -1 meaning we haven't seen any 1 yet
  let prev = -1;

  // Loop through all elements of nums
  for (let i = 0; i < nums.length; i++) {
    // When we find a 1
    if (nums[i] === 1) {
      // If this is NOT the first 1
      // and the gap between the current 1 and previous 1 is LESS than k
      // i - prev - 1 = number of zeros between the two 1s
      if (prev !== -1 && i - prev - 1 < k) {
        return false; // spacing condition is violated
      }

      // Update the index of the last seen 1
      prev = i;
    }
  }

  // If loop completes, all 1s satisfy spacing condition
  return true;
};
