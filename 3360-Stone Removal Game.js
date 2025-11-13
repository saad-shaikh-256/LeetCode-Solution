var canAliceWin = function (n) {
  // Total number of stones available
  let stonesTotal = n;

  // Boolean flag — true means it's Alice's turn, false means Bob's turn
  let aliceTurn = true;

  // Alice starts by trying to remove 10 stones in her first turn
  let stonesToRemove = 10;

  // Continue playing while there are enough stones to remove
  while (stonesTotal >= stonesToRemove) {
    // Subtract the stones taken in this turn
    stonesTotal -= stonesToRemove;

    // Switch turns: if it was Alice's turn, now it's Bob's turn
    aliceTurn = !aliceTurn;

    // Each turn, the next player removes 1 less stone
    stonesToRemove--;
  }

  // If the loop ends, it means there weren’t enough stones for the next move.
  // `aliceTurn` is now the *next player’s turn*, so the *previous* player (who just played) wins.
  // Hence we return `!aliceTurn`
  return !aliceTurn;
};
