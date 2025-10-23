var hasSameDigits = function (s) {
  // Convert the string into an array of digits
  let arr = s.split("").map(Number);

  // Repeat until only two digits remain
  while (arr.length > 2) {
    const next = [];
    for (let i = 0; i < arr.length - 1; i++) {
      next.push((arr[i] + arr[i + 1]) % 10);
    }
    arr = next;
  }

  // Return true if the last two digits are equal
  return arr[0] === arr[1];
};
