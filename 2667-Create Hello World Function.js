var createHelloWorld = function () {
  // When called, it returns another function
  return function (...args) {
    return "Hello World"; // Always returns the same string
  };
};

const f = createHelloWorld();

// Now f is a function that always returns "Hello World"
f();
