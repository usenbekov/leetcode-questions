/*
174. Dungeon Game
*/

/*
if health <= 0 -> game over

if path -> [-2, -5, 10, 30, -5]
30 - 5 = 25 (0) (it means until now knight life can be minimum so just set 0)
10 - 0 = 10 (0)
-5 - 0 = -5
-2 - 5 = -7
So at the begining knight's life must be at least 8 -> (8-7=1)

1. start from bottom right
2. dp[i][j] = dp[i][j] + max(dp[i+1][j], dp[i][j+1])
3. if dp[i][j] > 0 then set 0

  -2  -3  3         -6  -4  -1
  -5  -10 1   -->   -5  -10 -4
  10  30  -5        0   0   -5
*/

/**
 * @param {number[][]} dungeon
 * @return {number}
 */
var calculateMinimumHP = function(dungeon) {
  if (dungeon.length < 1) return 1;
  const m = dungeon.length;
  const n = dungeon[0].length;
  for (let i = m-1; i >= 0; i--) {
    for (let j = n-1; j >= 0; j--) {
      if (i === m-1 && j === n-1) {}
      else if (i === m-1) dungeon[i][j] += dungeon[i][j+1];
      else if (j === n-1) dungeon[i][j] += dungeon[i+1][j];
      else dungeon[i][j] += Math.max(dungeon[i+1][j], dungeon[i][j+1]);
      dungeon[i][j] = Math.min(0, dungeon[i][j]);
    }
  }
  return (dungeon[0][0]*-1)+1;
};



