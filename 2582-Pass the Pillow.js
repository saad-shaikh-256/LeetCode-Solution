var passThePillow = function (n, time) {
  // Each "round trip" (forward and backward) takes (n - 1) steps.
  // A "round" here means passing from person 1 → n → 1 → n → ...
  // We'll calculate how many full rounds have been completed.
  let round = Math.floor(time / (n - 1));

  // Remaining movements after completing full rounds.
  let movements = time % (n - 1);

  // If the round count is even → the direction is forward (1 → n)
  if (round % 2 === 0) {
    // Starting from 1, move 'movements' steps forward.
    return 1 + movements;
  } else {
    // If the round count is odd → direction is backward (n → 1)
    // Starting from n, move 'movements' steps backward.
    return n - movements;
  }
};
