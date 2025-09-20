var removeElement = function (nums, val) {
  let newArr = []; // temporary array to hold elements we want to keep

  // Step 1: Collect all elements not equal to val
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      newArr.push(nums[i]);
    }
  }

  // Step 2: Copy those kept elements back into nums (in-place requirement)
  for (let i = 0; i < newArr.length; i++) {
    nums[i] = newArr[i];
  }

  // Step 3: Return the new length of the "filtered" array
  return newArr.length;
};
