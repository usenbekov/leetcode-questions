/*
494. Target Sum
*/

/**
 * @param {number[]} nums
 * @param {number} S
 * @return {number}
 */
var findTargetSumWays = function(nums, S) {
  //return solution1(nums, S);
  return solution2(nums, S);
};

// O(TN), O(N) where T is range of total
var solution2 = function(nums, S, i = 0, total = 0, dp = {}) {
  if (i === nums.length) {
    if (total === S) return 1;
    return 0;
  }
  const dpkey = i+'_'+total;
  if (dp[dpkey] !== undefined) return dp[dpkey];
  
  let ways = solution2(nums, S, i+1, total+nums[i], dp);
  ways += solution2(nums, S, i+1, total-nums[i], dp);
  
  dp[dpkey] = ways;
  return ways;
}

// O(2^N), O(N)
var solution1 = function(nums, S, i = 0, total = 0) {
  if (i === nums.length) {
    if (total === S) return 1;
    return 0;
  }
  let ways = solution1(nums, S, i+1, total+nums[i]);
  ways += solution1(nums, S, i+1, total-nums[i]);
  return ways;
}


