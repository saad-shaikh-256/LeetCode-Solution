var maxProfit = function (prices) {
  let maxProfit = 0; // Variable to keep track of the maximum profit found so far
  let bestBuy = prices[0]; // Start by assuming the first day's price is the best day to buy

  // Loop through the stock prices starting from day 2 (index 1)
  for (let i = 1; i < prices.length; i++) {
    // If selling today gives a profit (price higher than the best buy so far)
    if (prices[i] > bestBuy) {
      // Calculate profit and update maxProfit if this is better
      maxProfit = Math.max(maxProfit, prices[i] - bestBuy);
    }

    // Update bestBuy if today's price is cheaper (better day to buy)
    bestBuy = Math.min(bestBuy, prices[i]);
  }

  // Return the maximum profit found
  return maxProfit;
};
