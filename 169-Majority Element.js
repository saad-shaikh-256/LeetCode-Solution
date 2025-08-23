
var majorityElement = function (nums) {
  // Sort the array so equal elements are grouped together
  nums.sort((a, b) => a - b);

  // Initialize count of current element as 1 and set first element as candidate
  let count = 1,
    ans = nums[0];

  // Loop through the array starting from the 2nd element
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] == nums[i - 1]) {
      // If current element is same as previous, increase count
      count++;
    } else {
      // Otherwise, reset count for the new element
      count = 1;
      ans = nums[i];
    }

    // If count exceeds half of array length, return the majority element immediately
    if (count > nums.length / 2) {
      return ans;
    }
  }

  // If loop finishes, return the last candidate (guaranteed to be majority by problem definition)
  return ans;
};
