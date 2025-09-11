var targetIndices = function (nums, target) {
  let emptyArr = []; // Stores all indices where nums[i] == target

  // Step 1: Sort nums in ascending order
  nums.sort((a, b) => a - b);

  // Step 2: Traverse the sorted array
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == target) {
      // If element matches target, record its index
      emptyArr.push(i);
    } else if (nums[i] > target) {
      // Since array is sorted, if nums[i] > target, no further matches possible
      break;
    }
  }

  // Step 3: Return collected indices
  return emptyArr;
};
