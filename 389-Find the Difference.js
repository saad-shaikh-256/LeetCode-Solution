function findTheDifference(s, t) {
  // Create an array of length 26 for letters 'a' to 'z'
  // Each index represents how many times that letter appears in s.
  const count = new Array(26).fill(0);

  // Step 1: Count characters in s
  for (let i = 0; i < s.length; i++) {
    const idx = s.charCodeAt(i) - 97; // 'a' has charCode 97
    count[idx]++; // increment count for this letter
  }

  // Step 2: Subtract counts using t
  // As we go, the extra character will make its count go negative.
  for (let i = 0; i < t.length; i++) {
    const idx = t.charCodeAt(i) - 97;
    count[idx]--; // decrement for each char in t
    if (count[idx] < 0) {
      // When a count goes negative, we've found the extra character
      return t[i];
    }
  }
}
