var evenNumberBitwiseORs = function (nums) {
  // Step 1️⃣: Initialize result to 0
  let result = 0;

  // Step 2️⃣: Filter only even numbers from the input array
  // (x % 2 === 0) ensures we keep only even elements
  let numsArr = nums.filter((x) => x % 2 === 0);

  // Step 3️⃣: If we have at least one even number
  if (numsArr.length > 0) {
    // Step 4️⃣: Apply bitwise OR (|) operation on all even numbers
    // The reduce() method accumulates bitwise OR results:
    // Example: [2, 4, 6] → (((2 | 4) | 6)) = 6
    result = numsArr.reduce((acc, curr) => curr | acc, 0);
  }

  // Step 5️⃣: Return the final result
  return result;
};
