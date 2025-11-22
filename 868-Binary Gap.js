var binaryGap = function (n) {
  // Convert number to binary string
  let binary = n.toString(2);

  let maxGap = 0; // Stores the maximum distance between two '1's
  let previousPosition = -1; // Tracks index of previous '1' in the binary string

  // Loop through each character of the binary string
  for (let i = 0; i < binary.length; i++) {
    // If current character is '1'
    if (binary[i] === "1") {
      // If this is NOT the first '1' we are encountering
      if (previousPosition !== -1) {
        // Calculate gap: distance between current '1' and previous '1'
        maxGap = Math.max(maxGap, i - previousPosition);
      }

      // Update the previous position of '1'
      previousPosition = i;
    }
  }

  // Return the largest gap found
  return maxGap;
};
