var isPowerOfFour = function (n) {
  // Step 1: Power of 4 must be a positive integer
  if (n <= 0) return false;

  // Step 2: Use the change-of-base formula to compute log base 4
  // log₄(n) = log₁₀(n) / log₁₀(4)
  const logBase4 = Math.log10(n) / Math.log10(4);

  // Step 3: If log₄(n) is an integer, n is a perfect power of 4
  return Number.isInteger(logBase4);
};
