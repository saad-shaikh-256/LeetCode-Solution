var minimumRightShifts = function (nums) {
  // If there is only one element, it's already sorted
  if (nums.length === 1) return 0;

  let breakTimes = 0; // counts how many times order breaks (descending)
  let index = 0; // stores where the break happened

  // Traverse the array to detect break points
  for (let i = 1; i < nums.length; i++) {
    // If current number is smaller than previous → break in sorted order
    if (nums[i - 1] > nums[i]) {
      breakTimes++;
      index = i; // store the index where the break happens
    }

    // If we reach end and no break happened → array already sorted
    if (i === nums.length - 1 && breakTimes === 0) {
      return 0;
    }
  }

  // For a valid rotated sorted array:
  // 1) There must be exactly one break
  // 2) The last element must be smaller than the first (true only in rotations)
  if (nums[nums.length - 1] < nums[0] && breakTimes === 1) {
    // Number of right shifts needed = total length - index of break
    return nums.length - index;
  }

  // If more than one break → cannot be sorted by rotation
  return -1;
};
