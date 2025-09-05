var romanToInt = function (s) {
  // Mapping of Roman numeral symbols to their integer values
  const symbols = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let result = 0;

  // Loop through the Roman numeral string
  for (let i = 0; i < s.length; i++) {
    let currVal = symbols[s[i]]; // Current symbol's value
    let nextVal = symbols[s[i + 1]]; // Next symbol's value (could be undefined at the end)

    // Rule: If the current value is less than the next value, subtract it
    // Example: "IV" → I(1) before V(5) → subtract 1 instead of adding
    if (currVal < nextVal) {
      result -= currVal;
    }
    // Otherwise, add it normally
    else {
      result += currVal;
    }
  }

  return result;
};
