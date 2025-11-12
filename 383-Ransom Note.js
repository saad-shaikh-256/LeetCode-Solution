var canConstruct = function (ransomNote, magazine) {
  // Loop through each character in the ransomNote string
  for (let char of ransomNote) {
    // Check if the current character exists in the magazine
    if (magazine.includes(char)) {
      // If found, remove that character once from the magazine
      // (so it can't be reused)
      magazine = magazine.replace(char, "");
    } else {
      // If the character is not found, we can't form the ransom note
      return false;
    }
  }

  // If we finish the loop, it means all characters were found
  return true;
};
