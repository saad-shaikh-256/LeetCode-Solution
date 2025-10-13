var removeAnagrams = function (words) {
  let result = [];

  for (let i = 0; i < words.length; i++) {
    if (i === 0) {
      // Always keep the first word
      result.push(words[i]);
    } else {
      let prev = result[result.length - 1]; // last kept word
      let curr = words[i];

      // Compare sorted versions of both strings
      if (sortString(prev) !== sortString(curr)) {
        result.push(curr);
      }
    }
  }

  return result;
};

// Helper function to sort characters in a string
function sortString(str) {
  return str.split("").sort().join("");
}
