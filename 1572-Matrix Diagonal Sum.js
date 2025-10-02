var diagonalSum = function (mat) {
  let result = 0;
  let size = mat.length;

  // Traverse through all cells
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      // Condition 1: main diagonal (row == col)
      // Condition 2: secondary diagonal (row + col == size - 1)
      if (i + j == size - 1 || i == j) {
        result += mat[i][j];
      }
    }
  }

  return result;
};
