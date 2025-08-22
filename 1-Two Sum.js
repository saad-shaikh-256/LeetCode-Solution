var twoSum = function (nums, target) {
  const map = new Map(); // Create a hash map to store seen numbers

  for (let i = 0; i < nums.length; i++) {
    // Calculate the complement (the number needed to reach target)
    if (map.has(target - nums[i])) {
      // If the complement exists in the map, we found a pair
      return [map.get(target - nums[i]), i];
    }

    // Otherwise, store the current number with its index
    map.set(nums[i], i);
  }

  // If no solution is found, return empty array
  return [];
};
