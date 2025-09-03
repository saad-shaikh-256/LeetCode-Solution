var productExceptSelf = function (nums) {
  const n = nums.length;
  const answer = new Array(n);

  // Step 1: Build prefix products
  // answer[i] will store the product of all elements to the LEFT of i
  // For index 0, there are no elements on the left, so set it to 1
  answer[0] = 1;
  for (let i = 1; i < n; i++) {
    // Example: answer[2] = nums[0] * nums[1]
    answer[i] = answer[i - 1] * nums[i - 1];
  }

  // Step 2: Multiply by suffix products (from the right)
  // Keep track of product of elements to the RIGHT of i
  let suffix = 1;
  for (let i = n - 1; i >= 0; i--) {
    // Multiply the prefix product (already in answer[i]) by the suffix product
    answer[i] = answer[i] * suffix;
    // Update suffix to include nums[i] for the next iteration (moving left)
    suffix *= nums[i];
  }

  return answer; // Final array where each element is product of all nums except itself
};
