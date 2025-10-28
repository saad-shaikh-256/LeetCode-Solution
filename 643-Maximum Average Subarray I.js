var findMaxAverage = function (nums, k) {
  if (nums.length === 0) return 0;

  let sum = 0;
  for (let i = 0; i < k; i++) {
    sum += nums[i]; // Build first window [0..k-1]
  }

  let maxSum = sum;

  for (let i = k; i < nums.length; i++) {
    sum += nums[i] - nums[i - k]; // Slide window: add new, remove old
    maxSum = Math.max(maxSum, sum);
  }

  return maxSum / k;
};
