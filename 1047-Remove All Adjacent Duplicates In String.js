var removeDuplicates = function (s) {
  // Convert the string into an array so we can easily loop and manipulate characters
  let arr = s.split("");

  // Create an empty array (used as a stack) to store the result
  let result = [];

  // Loop through every character in the input string
  for (let i = 0; i <= arr.length - 1; i++) {
    // If the current character is NOT equal to the last character in 'result'
    // → push it to the result (it’s not a duplicate)
    if (arr[i] != result[result.length - 1]) {
      result.push(arr[i]);
    }
    // Else, if it IS equal, remove (pop) the last character
    // → this removes adjacent duplicates
    else {
      result.pop();
    }
  }

  // Join the characters in the result array to form the final string
  return result.join("");
};
