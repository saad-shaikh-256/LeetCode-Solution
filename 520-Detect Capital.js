var detectCapitalUse = function (word) {
  // Step 1️⃣: Check if all letters are uppercase (e.g., "USA")
  let checkWord = word.toUpperCase();
  if (checkWord == word) {
    return true;
  }

  // Step 2️⃣: Check if all letters are lowercase (e.g., "leetcode")
  let lowerWord = word.toLowerCase();
  if (lowerWord == word) {
    return true;
  }

  // Step 3️⃣: Check if only the first letter is uppercase and rest are lowercase (e.g., "Google")
  let firstUpperRestLower = word[0].toUpperCase() + word.slice(1).toLowerCase();
  if (firstUpperRestLower == word) {
    return true;
  }

  // Step 4️⃣: If none of the above cases match → invalid capitalization
  return false;
};
