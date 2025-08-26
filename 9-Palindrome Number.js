var isPalindrome = function (x) {
  // Convert the number to a string
  let str = x.toString();

  // Reverse the string to compare with the original
  let revStr = str.split("").reverse().join("");

  // Check if the original string is the same as the reversed string
  return str === revStr;
};
