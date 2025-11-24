var prefixesDivBy5 = function (nums) {
  let res = [];
  let cur = 0;

  for (let bit of nums) {
    // Build the number bit-by-bit in binary.
    // Instead of storing the full number, keep it modulo 5.
    cur = (cur * 2 + bit) % 5;

    // If current value mod 5 is 0 → divisible by 5.
    res.push(cur === 0);
  }

  return res;
};
