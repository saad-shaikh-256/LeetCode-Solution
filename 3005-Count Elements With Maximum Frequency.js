var maxFrequencyElements = function (nums) {
  // Create an object to store the frequency of each number
  let obj = {};

  // Variable to track the highest frequency found so far
  let maxFrec = 0;

  // Step 1: Count frequencies and find the maximum frequency
  for (let i = 0; i <= nums.length - 1; i++) {
    // If the number already exists in the object, increment its count
    if (obj[nums[i]]) {
      obj[nums[i]]++;
    }
    // Otherwise, initialize it with 1
    else {
      obj[nums[i]] = 1;
    }

    // Update maxFrec if the current number’s frequency is greater
    if (obj[nums[i]] > maxFrec) maxFrec = obj[nums[i]];
  }

  // Step 2: Get all frequencies and filter only those equal to maxFrec
  // Then sum up all those frequencies
  return Object.values(obj)
    .filter((x) => x === maxFrec)
    .reduce((acc, curr) => acc + curr, 0);
};
