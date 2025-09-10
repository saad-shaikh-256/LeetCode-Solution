var numRescueBoats = function (people, limit) {
  // Step 1: Sort people by weight in descending order (heaviest first)
  let sortedArr = people.sort((a, b) => b - a);

  // Two pointers:
  // left -> heaviest person (start of array)
  // right -> lightest person (end of array)
  let left = 0,
    right = sortedArr.length - 1,
    boats = 0;

  // Step 2: Try to fit people into boats
  while (left <= right) {
    // Try to pair heaviest (left) + lightest (right)
    let sum = sortedArr[left] + sortedArr[right];

    if (sum <= limit) {
      // If they fit together in one boat, move right pointer inward
      right--;
    }
    // Regardless of pairing, we always need one boat for the person at 'left'
    boats++;
    // Move left pointer (heaviest has been placed on a boat)
    left++;
  }

  // Step 3: Return total boats used
  return boats;
};
