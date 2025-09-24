var canBeEqual = function (target, arr) {
  // Sort both arrays in ascending order so that
  // if they contain the same elements (regardless of order)
  // their sorted forms will match.
  target.sort((a, b) => a - b);
  arr.sort((a, b) => a - b);

  // Compare each element after sorting
  for (let i = 0; i < target.length; i++) {
    // If any pair of elements differs, arrays cannot be equal
    if (target[i] !== arr[i]) {
      return false;
    }
  }

  // All elements match → they can be made equal by reordering
  return true;
};