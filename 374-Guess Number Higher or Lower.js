var guessNumber = function (n) {
  // We are trying to find the hidden number between 1 and n
  // The API guess(num) is given:
  //   - returns 0 if num is the hidden number
  //   - returns -1 if the hidden number is lower
  //   - returns 1 if the hidden number is higher

  let start = 0; // lower bound of our search space
  let end = n; // upper bound of our search space

  // Binary search loop
  while (start <= end) {
    // Compute the middle value in a way that avoids overflow:
    // start + (end - start) / 2
    let mid = Math.floor(start + (end - start) / 2);

    // Call the provided API to check our guess
    let res = guess(mid);

    if (res === 0) {
      // ✅ We found the hidden number
      return mid;
    } else if (res < 0) {
      // Our guess is too high; search the lower half
      end = mid - 1;
    } else {
      // Our guess is too low; search the upper half
      start = mid + 1;
    }
  }

  // If for some reason the number is not found (shouldn't happen), return -1
  return -1;
};
