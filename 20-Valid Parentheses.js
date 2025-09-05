var isValid = function (s) {
  const stack = []; // Stack to keep track of open brackets
  const params = "() {} []"; // Valid matching pairs

  // Loop through each character in the string
  for (let i = 0; i < s.length; i++) {
    stack.push(s[i]); // Push current bracket into stack

    // Check the last two characters in stack
    let open = stack[stack.length - 2];
    let close = stack[stack.length - 1];

    // Form a potential pair
    let potParam = open + close;

    // If it's a valid pair like "()", "{}", or "[]"
    if (params.includes(potParam)) {
      // Pop them both (remove matched pair from stack)
      stack.pop();
      stack.pop();
    }
  }

  // If stack is empty, all brackets matched correctly
  return stack.length === 0;
};
