/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const map = new Map(); // Stores numbers we've seen so far along with their indices

  for (let i = 0; i < nums.length; i++) {
    // Iterate through each number

    if (map.has(target - nums[i])) {
      // The number we need to reach the target
      // If the number is already in the map, we found a pair
      return [map.get(target - nums[i]), i];
    }

    // Store the current number with its index for future lookups
    map.set(nums[i], i);
  }

  return []; // Return empty if no valid pair is found
};
