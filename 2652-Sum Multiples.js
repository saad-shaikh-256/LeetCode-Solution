var sumOfMultiples = function (n) {
  let sum = 0; // This will store the final total sum

  // Loop from 1 to n (inclusive)
  for (let i = 1; i <= n; i++) {
    // Check if the number i is divisible by 3 OR 5 OR 7
    if (i % 3 === 0 || i % 5 === 0 || i % 7 === 0) {
      sum += i; // Add it to the sum
    }
  }

  return sum; // Return the total sum after checking all numbers
};
