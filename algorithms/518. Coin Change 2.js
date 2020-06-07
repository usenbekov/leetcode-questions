/*
518. Coin Change 2
*/

/*
amount = 5, coins = [1, 2, 5]

according to solution2:
----------------------

count[size][amount] =
  count[size][amount-coin] +
  count[size-1][amount];

  0 1 2 3 4 5 (amount)
0 1 0 0 0 0 0
1 1 1 1 1 1 1
2 1 1 2 2 3 3
5 1 1 2 2 3 4

-----------------------------------

Single level:
------------

for coin of coins
  for amnt = coin to amount
    count[amnt] += count[amnt-coin]

*/
/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
var change = function(amount, coins) {
  //return solution1(amount, coins, coins.length);
  //return solution2(amount, coins, coins.length);
  //return solution3(amount, coins);
  return solution4(amount, coins);
};

var solution4 = function(amount, coins) {
  const dp = new Array(amount+1).fill(0);
  dp[0] = 1;
  for (let i = 0; i <= coins.length; i++) {
    for (let j = coins[i]; j <= amount; j++) {
      dp[j] += dp[j - coins[i]];
    }
  }
  return dp[amount];
}

var solution3 = function(amount, coins) {
  const dp = [];
  for (let i = 0; i <= coins.length; i++) {
    dp[i] = [1];
    for (let j = 1; j <= amount; j++) {
      if (i === 0) dp[i][j] = 0;
      else {
        dp[i][j] = dp[i-1][j] + (dp[i][j-coins[i-1]] || 0);
      }
    }
  }
  return dp[coins.length][amount];
}

/*
Time Limit Exceeded
500
[3,5,7,8,9,10,11]
*/
var solution2 = function(amount, coins, size) {
  if (amount === 0) return 1;
  if (amount < 0 || size <= 0) return 0;
  let coin = coins[size-1];
  let contain = solution2(amount-coin, coins, size); // if contain the coin
  let notContain = solution2(amount, coins, size-1); // if not contain the coin
  return contain + notContain;
};

/*
Time Limit Exceeded
500
[3,5,7,8,9,10,11]
*/
var solution1 = function(amount, coins, size) {
  if (amount === 0) return 1;
  if (amount < 0 || size <= 0) return 0;
  let coin = coins[size-1];
  let counter = 0;
  while (amount >= 0) {
    counter += solution1(amount, coins, size-1);
    amount -= coin;
  }
  return counter;
};


