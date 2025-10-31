var getSneakyNumbers = function (nums) {
  // Create a Set to keep track of numbers we’ve already seen
  let countMap = new Set();

  // Create an array to store numbers that appear more than once
  let resultArr = [];

  // Edge case: if the array is empty, return 0 (no sneaky numbers)
  if (nums.length === 0) {
    return 0;
  }

  // Loop through each number in the array
  for (let i = 0; i < nums.length; i++) {
    // If the number has already been seen before
    if (countMap.has(nums[i])) {
      // It's a duplicate → add it to the result array
      resultArr.push(nums[i]);
    }
    // Otherwise, add it to the set (mark as seen)
    else {
      countMap.add(nums[i]);
    }
  }

  // Return the array of numbers that appeared more than once
  return resultArr;
};
