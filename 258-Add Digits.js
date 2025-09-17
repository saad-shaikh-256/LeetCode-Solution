var addDigits = function (num) {
  // If the number is 0, the digital root is also 0.
  if (num === 0) {
    return 0;
  }

  // Digital root formula:
  //   For any positive integer, its repeated digit sum is 1 + ((num - 1) % 9).
  //   This works because numbers are congruent to the sum of their digits mod 9.
  const remainder = (num - 1) % 9;
  const digitalRoot = 1 + remainder;

  return digitalRoot;
};