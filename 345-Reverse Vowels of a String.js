var reverseVowels = function (s) {
  // Set of vowels for fast lookup (both lowercase + uppercase)
  const vowels = new Set(["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]);

  // Convert string into array (because strings are immutable)
  let arr = s.split("");

  // Two pointers: one at the start, one at the end
  let left = 0,
    right = arr.length - 1;

  // Loop while the pointers do not cross each other
  while (left < right) {
    // Move left pointer FORWARD until it finds a vowel
    while (left < right && !vowels.has(arr[left])) left++;

    // Move right pointer BACKWARD until it finds a vowel
    while (left < right && !vowels.has(arr[right])) right--;

    // At this point arr[left] and arr[right] are vowels → swap them
    [arr[left], arr[right]] = [arr[right], arr[left]];

    // Move both pointers inward
    left++;
    right--;
  }

  // Convert array back to string
  return arr.join("");
};
