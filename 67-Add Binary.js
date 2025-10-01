var addBinary = function (a, b) {
  let i = a.length - 1; // pointer for last char in string a
  let j = b.length - 1; // pointer for last char in string b
  let carry = 0; // carry for binary addition
  let result = []; // array to build result in reverse order

  // Loop until both strings are fully processed AND no carry remains
  while (i >= 0 || j >= 0 || carry > 0) {
    let sum = carry; // start with carry from previous step

    // Add digit from string a if available
    if (i >= 0) {
      sum += a[i] - "0"; // convert '0'/'1' to number 0/1
      i--;
    }

    // Add digit from string b if available
    if (j >= 0) {
      sum += b[j] - "0";
      j--;
    }

    // Current bit is sum % 2 (either 0 or 1)
    result.push(sum % 2);

    // New carry is sum // 2 (0 or 1)
    carry = Math.floor(sum / 2);
  }

  // Reverse result (since we built it backwards) and join into string
  return result.reverse().join("");
};
