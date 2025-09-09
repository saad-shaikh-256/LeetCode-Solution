var numWaterBottles = function (numBottles, numExchange) {
  // You can always drink all the initial bottles
  // So start with numBottles in the total count

  // Extra bottles: for every (numExchange - 1) bottles you drink,
  // you effectively get 1 more bottle (because each bottle gives an empty,
  // and numExchange empties → 1 full bottle).
  //
  // Example: if numExchange = 3 → every 2 bottles drunk give 1 more.
  //
  // That's why we add: Math.floor((numBottles - 1) / (numExchange - 1))

  return numBottles + Math.floor((numBottles - 1) / (numExchange - 1));
};