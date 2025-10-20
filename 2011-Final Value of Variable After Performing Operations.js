var finalValueAfterOperations = function (operations) {
  // Start with X = 0 as per the problem statement
  let X = 0;

  // Loop through each operation in the operations array
  for (let op of operations) {
    // If the operation contains "++" (either "++X" or "X++"),
    // it means increment X by 1
    if (op.includes("++")) {
      X += 1;
    } else {
      // Otherwise the operation must be "--" (either "--X" or "X--"),
      // so decrement X by 1
      X -= 1;
    }
  }

  // Return the final value of X after performing all operations
  return X;
};
