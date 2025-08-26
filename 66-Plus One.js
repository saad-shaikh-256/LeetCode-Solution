var plusOne = function (digits) {
  // Loop from the last digit (rightmost) to the first (leftmost)
  for (let i = digits.length - 1; i >= 0; i--) {
    // If the current digit is less than 9, just add 1 and return
    if (digits[i] < 9) {
      digits[i]++;
      return digits; // No carry needed, so return immediately
    }

    // If the current digit is 9, set it to 0 and continue loop
    // (carry over the 1 to the next digit on the left)
    digits[i] = 0;
  }

  // If all digits were 9 (e.g., [9,9,9]), we need to add a new 1 in front
  digits.unshift(1);
  return digits; // Example: [9,9,9] → [1,0,0,0]
};
