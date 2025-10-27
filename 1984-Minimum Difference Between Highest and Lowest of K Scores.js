var minimumDifference = function (nums, k) {
  nums.sort((a, b) => b - a); // 1. Sort in descending order
  let smallest = Infinity; // 2. Track the smallest difference

  for (let i = 0; i <= nums.length - k; i++) {
    let difference = nums[i] - nums[i + k - 1]; // 3. Check window of size k
    if (smallest > difference) smallest = difference;
  }

  return smallest; // 4. Return minimum diff found
};
