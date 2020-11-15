/**
 * @param {number[]} piles
 * @return {boolean}
 */
/*
1 2 3 4
3 9 1 2

{1-2} -> 3 9
First will take 9, second the 3 => [9,3]

{2-3} -> 9 1
First will take 9, second the 1 => [9,1] ...

{1-3} -> 3 9 1
if first takes 3 (3 + {2-3}.sec = 4) the second will choose one of '9 1' (or {2-3})
{2-3} is already calculated, so second one will get {2-3}.first = 9

if first takes 1 (1 + {1-2}.sec = 4) the second will choose one of '3 9' (or {1-2})
{1-2} is already calculated, so second one will get {1-2}.first = 9

   1      2     3      4
1 [3,0] [9,3]  [4,9]  [11,4]
2       [9,0]  [9,1]  [10,2]
3              [1,0]  [2,1]
4                     [2,0]

*/
var stoneGame = function(piles) {
  const _dp = {};
  const dp = (i, j) => {
      if (!dp[i+'x'+j]) dp[i+'x'+j] = [0, 0];
      return dp[i+'x'+j];
  }
  
  var curr = [0, 0];
  for (let j = 1; j <= piles.length; j++) {
      for (let i = j; i >= 1; i--) {
          const left = dp(i, j-1);
          const bott = dp(i+1, j);
          curr = dp(i, j);
          
          const chosenStart = piles[i-1] + bott[1];
          const chosenEnd = piles[j-1] + left[1];
          if (chosenStart > chosenEnd) {
              curr[0] = chosenStart;
              curr[1] = bott[0];
          } else {
              curr[0] = chosenEnd;
              curr[1] = left[0];
          }
      }
  }
  return curr[0] > curr[1];
};

