var searchMatrix = function (matrix, target) {
  let row = 0; // start from top row
  let col = matrix[0].length - 1; // start from last column

  while (row < matrix.length && col >= 0) {
    if (matrix[row][col] === target) {
      return true; // found target
    } else if (matrix[row][col] > target) {
      col--; // move left
    } else {
      row++; // move down
    }
  }

  return false; // not found
};
