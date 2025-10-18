var validPalindrome = function (s) {
  let left = 0,
    right = s.length - 1;

  // Helper function to check palindrome without deleting more chars
  const isPalindrome = (left, right) => {
    while (left < right) {
      if (s[left] !== s[right]) {
        return false;
      }
      left++;
      right--;
    }
    return true;
  };

  // Two-pointer scan
  while (left < right) {
    if (s[left] === s[right]) {
      left++;
      right--;
    } else {
      // At first mismatch, try skipping one char (either left or right)
      return isPalindrome(left + 1, right) || isPalindrome(left, right - 1);
    }
  }

  return true; // No mismatches → it's already a palindrome
};