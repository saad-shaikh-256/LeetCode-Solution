var trimMean = function (arr) {
  // Step 1️⃣: Calculate how many elements to remove (5% from each end)
  // Since we remove 5% from the start and 5% from the end,
  // that’s total 10% trimmed (1/20 of total length from each side)
  let nums = arr.length / 20;

  // Step 2️⃣: Sort the array in ascending order
  // So we can easily remove smallest and largest elements
  arr.sort((a, b) => a - b);

  // Step 3️⃣: Define the slice range to remove 5% from both ends
  let start = nums;
  let end = arr.length - nums;

  // Step 4️⃣: Slice the array to keep only the middle 90% of elements
  let slicedArr = arr.slice(start, end);

  // Step 5️⃣: Calculate the mean (average) of the remaining elements
  let sum = slicedArr.reduce((acc, curr) => acc + curr, 0);
  let mean = sum / slicedArr.length;

  // Step 6️⃣: Return the trimmed mean
  return mean;
};
