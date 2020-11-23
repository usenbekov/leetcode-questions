/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
  //return solution1(cost);
  return solution2(cost);
};

var solution1 = function(cost) {
  const dp = [cost[0], cost[1]];
  for (let i = 2; i < cost.length; i++) {
      dp[i] = Math.min(dp[i-1], dp[i-2]) + cost[i];
  }
  return Math.min(dp[cost.length-1], dp[cost.length-2]);
}

var solution2 = function(cost) {
  let f2 = cost[0]
  let f1 = cost[1];
  for (let i = 2; i < cost.length; i++) {
      const val = Math.min(f1, f2) + cost[i];
      f2 = f1;
      f1 = val;
  }
  return Math.min(f1, f2);
}

