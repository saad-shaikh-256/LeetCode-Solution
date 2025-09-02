var maxArea = function (height) {
  let maxWater = 0; // Keeps track of the maximum area (water) found so far
  let leftPointer = 0; // Start pointer at the left end of the array
  let rightPointer = height.length - 1; // Start pointer at the right end of the array

  // Continue until the two pointers meet
  while (leftPointer < rightPointer) {
    // Calculate the width (distance between the two lines)
    let widt = rightPointer - leftPointer;

    // Height is limited by the shorter line (water can't go above the shorter line)
    let heigh = Math.min(height[leftPointer], height[rightPointer]);

    // Calculate the area (width × height)
    let currentWater = widt * heigh;

    // Update maximum water if this container is larger
    maxWater = Math.max(maxWater, currentWater);

    // Move the pointer pointing to the shorter line inward
    // (because moving the taller line won't help increase area,
    // but moving the shorter line *might* find a taller one)
    if (height[leftPointer] < height[rightPointer]) {
      leftPointer++;
    } else {
      rightPointer--;
    }
  }

  return maxWater; // Return the maximum area found
};
