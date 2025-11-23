var maxPower = function (s) {
  let maxTotal = 1; // This will store the longest streak of same characters
  let total = 1; // Current streak count

  for (let i = 0; i <= s.length - 1; i++) {
    let char = s[i]; // current character
    let nextChar = s[i + 1]; // next character

    // If current char is same as next char, streak continues
    if (char === nextChar) {
      total++; // increase streak

      // Update max streak if current streak is bigger
      if (total > maxTotal) maxTotal = total;
    } else {
      // If chars are different, reset streak to 1
      total = 1;
    }
  }

  return maxTotal; // return the longest streak found
};
