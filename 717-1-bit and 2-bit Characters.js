var isOneBitCharacter = function (bits) {
  let i = 0; // pointer to move through the bits array
  const n = bits.length; // total number of bits

  // Loop until we reach the second-last element
  // We stop at n-1 because we want to check if the last bit stands alone
  while (i < n - 1) {
    // If the current bit is 1:
    // it must represent a TWO-BIT character (10 or 11)
    // so we skip 2 positions
    if (bits[i] === 1) {
      i += 2;
    } else {
      // If the current bit is 0:
      // it's a ONE-BIT character (0)
      // so we move just 1 position
      i += 1;
    }
  }

  // After finishing the loop:
  // If pointer lands EXACTLY on the last index (n-1)
  // it means the last character is a ONE-BIT character
  return i === n - 1;
};
