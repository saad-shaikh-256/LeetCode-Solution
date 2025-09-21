var search = function (nums, target) {
  let start = 0;
  let end = nums.length - 1;

  while (start <= end) {
    // Find the midpoint of the current search space
    let mid = Math.floor((start + end) / 2);

    // ✅ If the middle element is the target, return its index
    if (nums[mid] === target) {
      return mid;
    }

    // Determine which side (left or right) is normally sorted
    if (nums[start] <= nums[mid]) {
      // Left half is sorted
      if (target >= nums[start] && target < nums[mid]) {
        // Target lies in the left half
        end = mid - 1;
      } else {
        // Target lies in the right half
        start = mid + 1;
      }
    } else {
      // Right half is sorted
      if (target > nums[mid] && target <= nums[end]) {
        // Target lies in the right half
        start = mid + 1;
      } else {
        // Target lies in the left half
        end = mid - 1;
      }
    }
  }

  // ❌ Target not found
  return -1;
};
