var deckRevealedIncreasing = function (deck) {
  // Step 1️⃣: Sort the deck in ascending order
  // This ensures we start from the smallest card
  deck.sort((a, b) => a - b);

  // Step 2️⃣: Start the result array with the largest card (last element)
  // We'll simulate the reverse of the revealing process
  let result = [deck.pop()];

  // Step 3️⃣: Reverse simulate the card reveal process
  // Keep going until no cards are left in the deck
  while (deck.length > 0) {
    // Move the last revealed card to the bottom of the deck
    result.unshift(result.pop());

    // Add the next largest card (from deck) to the top
    result.unshift(deck.pop());
  }

  // Step 4️⃣: Return the final deck order that produces
  // an increasing sequence when revealed
  return result;
};
