var search = function (nums, target) {
  let low = 0; // left boundary
  let high = nums.length - 1; // right boundary

  // Keep searching while there is a valid range
  while (low <= high) {
    // Find the middle index
    let mid = Math.floor((low + high) / 2);

    if (nums[mid] === target) {
      // ✅ Found target, return index
      return mid;
    } else if (nums[mid] < target) {
      // If middle value is smaller → search right half
      low = mid + 1;
    } else {
      // If middle value is larger → search left half
      high = mid - 1;
    }
  }

  // ❌ Target not found
  return -1;
};
