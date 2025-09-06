var climbStairs = function (n) {
  // Base cases:
  // If there's only 1 stair → only 1 way (just 1 step)
  if (n === 1) return 1;
  // If there are 2 stairs → 2 ways (1+1 or just 2 steps)
  if (n === 2) return 2;

  // prev1 = ways to reach (i-2)th step
  // prev2 = ways to reach (i-1)th step
  let prev1 = 1, // 1 way to climb 1 stair
    prev2 = 2; // 2 ways to climb 2 stairs

  // Start calculating from step 3 up to step n
  for (let i = 3; i <= n; i++) {
    let curr = prev1 + prev2; // Current ways = sum of previous two
    prev1 = prev2; // Shift window forward
    prev2 = curr; // Store current result
  }

  // At the end, prev2 holds the number of ways to climb n stairs
  return prev2;
};
