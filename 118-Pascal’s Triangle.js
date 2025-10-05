var generate = function (numRows) {
  const triangle = []; // stores all rows

  // Loop through each row
  for (let rowIndex = 0; rowIndex < numRows; rowIndex++) {
    const row = [];

    // Build each row
    for (let col = 0; col <= rowIndex; col++) {
      if (col === 0 || col === rowIndex) {
        // First and last element of each row = 1
        row.push(1);
      } else {
        // Each middle element = sum of the two above it
        const left = triangle[rowIndex - 1][col - 1];
        const right = triangle[rowIndex - 1][col];
        row.push(left + right);
      }
    }

    // Add the row to triangle
    triangle.push(row);
  }

  return triangle;
};
