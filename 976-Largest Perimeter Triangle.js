function largestPerimeter(nums) {
  // 1️⃣ Sort side lengths in non-decreasing order
  nums.sort((a, b) => a - b);

  // 2️⃣ Check triples from largest to smallest
  //    We need the largest perimeter that forms a valid triangle.
  for (let i = nums.length - 1; i >= 2; i--) {
    const c = nums[i]; // largest side
    const b = nums[i - 1];
    const a = nums[i - 2];

    // Triangle inequality: sum of two smaller sides must exceed the largest
    if (a + b > c) {
      return a + b + c; // found the maximum perimeter
    }
  }

  // 3️⃣ No valid triangle found
  return 0;
}