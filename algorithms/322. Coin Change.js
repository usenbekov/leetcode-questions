/*
322. Coin Change
*/

/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
  return coinChange2(coins, amount);
};

// O(SxN) O(S)
const coinChange2 = (coins, amount) => {
  if (amount <= 0) return amount;
  const max = amount+1;
  const dp = new Array(max).fill(max);
  dp[0] = 0;
  for (const coin of coins) {
      for (let dollar = 1; dollar < dp.length; dollar++) {
          if (coin <= dollar) {
              dp[dollar] = Math.min(dp[dollar], dp[dollar-coin]+1);
          }
      }
  }
  return dp[amount] === max ? -1 : dp[amount];
}

// Slow
const coinChange1 = (coins, amount) => {
  if (amount <= 0) return amount;
  
  coins = new Set(coins);
  const dp = new Map();
  
  const countCoins = (amount2) => {
      if (amount2 < 0) return Number.MAX_VALUE;
      if (coins.has(amount2)) return 1;
      
      if (dp.has(amount2)) return dp.get(amount2);
      
      let total = Number.MAX_VALUE;
      coins.forEach(coin => {
          total = Math.min(total, countCoins(amount2-coin));
      })
      
      if (total < Number.MAX_VALUE) {
          total += 1;
      }
      
      dp.set(amount2, total);
      
      return total;
  }
  
  const count = countCoins(amount);
  return count < Number.MAX_VALUE ? count : -1;
}



