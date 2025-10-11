var moveZeroes = function (nums) {
  let insertPos = 0; // Tracks the position to place the next non-zero element

  // Step 1: Shift all non-zero elements to the front
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      // Place current non-zero number at the 'insertPos' index
      nums[insertPos] = nums[i];
      insertPos++;
    }
  }

  // Step 2: Fill remaining positions (from insertPos onward) with zeros
  for (let i = insertPos; i < nums.length; i++) {
    nums[i] = 0;
  }
};
