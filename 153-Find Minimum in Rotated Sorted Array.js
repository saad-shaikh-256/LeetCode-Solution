var findMin = function (nums) {
  let left = 0;
  let right = nums.length - 1;

  // Binary search for the smallest element
  while (left < right) {
    // Midpoint of the current search window
    const mid = Math.floor((left + right) / 2);

    // If the middle value is greater than the rightmost value,
    // the minimum must be in the *right half* of the array,
    // because rotation puts the smaller elements there.
    if (nums[mid] > nums[right]) {
      left = mid + 1;
    } else {
      // Otherwise the minimum is at mid or in the *left half*.
      right = mid;
    }
  }

  // When the loop ends, left == right,
  // pointing to the smallest element.
  return nums[left];
};
