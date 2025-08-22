var createCounter = function (init) {
  // Keep track of the current value
  let value = init;

  // Return an object with three methods
  return {
    // Increment function: increases value by 1 and returns it
    increment: () => ++value,

    // Decrement function: decreases value by 1 and returns it
    decrement: () => --value,

    // Reset function: restores value to the initial "init"
    reset: () => {
      value = init;
      return value;
    },
  };
};
