var missingMultiple = function (nums, k) {
  // Convert the nums array into a Set for O(1) lookup time.
  // This helps us quickly check whether a number exists in nums.
  let set = new Set(nums);

  // Start checking from the first multiple of k (which is k itself).
  let smallestM = k;

  // Keep increasing smallestM by k until we find a multiple that is NOT in the set.
  while (set.has(smallestM)) {
    smallestM += k;
  }

  // Return the first missing multiple of k that is not in nums.
  return smallestM;
};
