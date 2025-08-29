var tribonacci = function (n) {
  // Handle the base cases where n is 0 or 1
  if (n == 0 || n == 1) {
    return n;
  }

  // Initialize the first three values of the Tribonacci sequence:
  // T(0) = 0, T(1) = 1, T(2) = 1
  let fib1 = 0; // T(n - 3)
  let fib2 = 1; // T(n - 2)
  let fib3 = 1; // T(n - 1)

  // Loop from i = 1 to n (inclusive)
  // However, this will run one extra time — we need to adjust the loop condition
  for (let i = 1; i <= n; i++) {
    // Calculate the next Tribonacci number: T(n) = T(n-1) + T(n-2) + T(n-3)
    let fib4 = fib1 + fib2 + fib3;

    // Shift the previous numbers to move forward in the sequence
    fib1 = fib2; // old T(n - 2)
    fib2 = fib3; // old T(n - 1)
    fib3 = fib4; // new T(n)
  }

  // Return the n-th Tribonacci number
  // Due to the loop going too far, we should return fib1 instead of fib3
  return fib1;
};
