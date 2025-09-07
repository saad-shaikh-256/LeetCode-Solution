var longestCommonPrefix = function (strs) {
  // Edge case: if the list is empty, no common prefix
  if (strs.length === 0) return "";

  let prefix = ""; // Will store the resulting common prefix
  let firstWord = strs[0]; // Use the first word as a baseline

  // Loop through each character in the first word
  for (let i = 0; i < firstWord.length; i++) {
    let char = firstWord[i]; // Current character to check across all strings

    // Compare this character with the same position in every other word
    for (let j = 1; j < strs.length; j++) {
      // If any word is too short OR character mismatch → stop here
      if (strs[j][i] !== char) {
        return prefix; // Return the common prefix built so far
      }
    }

    // If all strings matched at position i → add this char to the prefix
    prefix += char;
  }

  // If we finished the loop, the whole first word is the prefix
  return prefix;
};
