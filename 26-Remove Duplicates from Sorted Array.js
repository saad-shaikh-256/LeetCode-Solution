var removeDuplicates = function (nums) {
  let i = 0; // pointer for the "last unique element"

  // Start j from 1 (second element) and move through the array
  for (let j = 1; j < nums.length; j++) {
    // Compare current element with the last unique element
    if (nums[j] !== nums[i]) {
      i++; // move the "unique" pointer forward
      nums[i] = nums[j]; // overwrite the position with the new unique value
    }
  }

  // Since i is an index, the number of unique elements = i + 1
  return i + 1;
};
