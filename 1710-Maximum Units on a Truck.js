var maximumUnits = function (boxTypes, truckSize) {
  // Sort boxTypes in descending order based on units per box (boxTypes[i][1])
  // Each element in boxTypes = [numberOfBoxes, unitsPerBox]
  boxTypes.sort((a, b) => b[1] - a[1]);

  let i = 0; // Pointer to track current box type
  let total = 0; // Total units loaded into the truck

  // Continue until truck is full or we run out of box types
  while (truckSize > 0) {
    // If we have checked all box types, return total units
    if (i === boxTypes.length) {
      return total;
    }
    // If current box type still has boxes left
    else if (boxTypes[i][0] > 0) {
      // Take one box from current type
      boxTypes[i][0]--;
      // Reduce available truck space
      truckSize--;
      // Add the units from this box
      total += boxTypes[i][1];
    }
    // If current box type is empty, move to next
    else if (i < boxTypes.length) {
      i++;
    }
  }

  // Return total units when truck is full
  return total;
};
