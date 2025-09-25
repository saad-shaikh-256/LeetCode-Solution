var isPalindrome = function (s) {
  // 1️⃣ Remove all non-alphanumeric characters
  //    [^a-zA-Z0-9] matches anything that's NOT a letter or digit
  //    The 'g' flag means replace all such matches with ""
  let cleanStr = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

  // 2️⃣ Reverse the cleaned string
  let revStr = cleanStr.split("").reverse().join("");

  // 3️⃣ Compare original cleaned string to its reverse
  if (cleanStr == revStr) {
    return true; // It's a palindrome
  }
  return false; // Not a palindrome
};
