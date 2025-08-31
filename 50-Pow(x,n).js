var myPow = function (x, n) {
  // Base case: any number to the power of 0 is 1
  if (n === 0) return 1;

  // If exponent is negative, we invert x (1/x) and make n positive
  if (n < 0) {
    x = 1 / x;
    n = -n;
  }

  // Initialize result as 1 (neutral element of multiplication)
  let result = 1;

  // Loop until exponent becomes 0
  while (n > 0) {
    // If n is odd, multiply result by current x
    if (n % 2 === 1) {
      result *= x;
    }

    // Square x (since every step halves the exponent)
    x *= x;

    // Divide n by 2 (ignoring remainder)
    n = Math.floor(n / 2);
  }

  // Final computed power
  return result;
};
