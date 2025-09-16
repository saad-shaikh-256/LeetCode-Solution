var containsDuplicate = function (nums) {
  // Use a Set to keep track of unique numbers we've seen so far.
  const newMap = new Set();

  // Loop through each number in the array
  for (let i of nums) {
    // If the number is already in the Set, we found a duplicate
    if (newMap.has(i)) {
      return true; // ✅ Duplicate detected
    } else {
      // Otherwise, add the number to the Set
      newMap.add(i);
    }
  }

  // If we finish the loop without returning, no duplicates exist
  return false;
};
