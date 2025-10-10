var isUgly = function (n) {
  // Step 1: Negative numbers, 0, or non-positive numbers are NOT ugly
  if (n <= 0) return false;

  // Step 2: Repeatedly divide by 2 while divisible by 2
  while (n % 2 === 0) n /= 2;

  // Step 3: Repeatedly divide by 3 while divisible by 3
  while (n % 3 === 0) n /= 3;

  // Step 4: Repeatedly divide by 5 while divisible by 5
  while (n % 5 === 0) n /= 5;

  // Step 5: If the result is 1, then n had only 2, 3, and 5 as prime factors → ugly number
  return n === 1;
};
