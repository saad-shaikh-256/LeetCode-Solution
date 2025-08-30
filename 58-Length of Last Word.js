var lengthOfLastWord = function (s) {
  // Remove any extra spaces from the beginning and end of the string
  let splitText = s.trim().split(" ");

  // Take the last word from the array using pop() and get its length
  let wordLength = splitText.pop().length;

  // Return the length of the last word
  return wordLength;
};
