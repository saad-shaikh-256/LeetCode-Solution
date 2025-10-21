var checkPerfectNumber = function (num) {
  // A perfect number must be > 1 (1 is not a perfect number)
  if (num <= 1) return false;

  // We start with 1 because 1 is always a divisor of any num
  let sum = 1;

  // Loop from 2 up to sqrt(num) to find divisors in pairs
  for (let i = 2; i <= Math.sqrt(num); i++) {
    // If i divides num, then i is a divisor
    if (num % i === 0) {
      sum += i; // add the divisor

      const pair = num / i; // find the paired divisor (num / i)

      // If i and pair are not same (to avoid double counting perfect squares)
      if (pair !== i) {
        sum += pair; // add the paired divisor
      }
    }
  }

  // If the sum of proper divisors equals the number itself → Perfect Number
  return sum === num;
};
