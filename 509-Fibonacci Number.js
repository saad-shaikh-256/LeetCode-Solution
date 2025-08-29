var fib = function (n) {
  // Base case: if n is 0 or 1, return n
  if (n == 0 || n == 1) {
    return n; // Fibonacci of 0 is 0, Fibonacci of 1 is 1
  }

  // Initialize the first two Fibonacci numbers
  let fib1 = 0; // fib(0) = 0
  let fib2 = 1; // fib(1) = 1

  // Loop to calculate Fibonacci numbers from fib(2) to fib(n)
  for (let i = 1; i <= n; i++) {
    // Calculate the next Fibonacci number
    let fib3 = fib1 + fib2;

    // Move fib2 to fib1, fib3 to fib2 for the next iteration
    fib1 = fib2;
    fib2 = fib3;
  }

  // Return the nth Fibonacci number
  return fib1;
};
