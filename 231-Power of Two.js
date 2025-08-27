var isPowerOfTwo = function (n) {
  // If 'n' is less than or equal to 0, it cannot be a power of two
  if (n <= 0) return false;

  // Use Math.log2(n) to compute the base-2 logarithm of 'n'
  // If the result is an integer (i.e., no decimal part), then 'n' is a power of two
  return Math.log2(n) % 1 === 0;
};
