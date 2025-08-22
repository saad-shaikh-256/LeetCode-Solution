var createCounter = function (n) {
  // Return an inner function (closure)
  return function () {
    // Return the current value of n, then increment it by 1
    return n++;
  };
};

// Example usage:
const counter = createCounter();

counter();
