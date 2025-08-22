var convertToTitle = function (columnNumber) {
  let result = "";

  // Keep looping until the columnNumber becomes 0
  while (columnNumber > 0) {
    columnNumber--; // Shift to make it 0-based (important trick!)

    // Find remainder when dividing by 26 (gives us a letter index 0–25)
    let reminder = columnNumber % 26;

    // Convert number (0 → 'A', 1 → 'B', ... 25 → 'Z')
    result = String.fromCharCode(65 + reminder) + result;

    // Move to the next "digit" in base-26
    columnNumber = Math.floor(columnNumber / 26);
  }

  return result;
};
