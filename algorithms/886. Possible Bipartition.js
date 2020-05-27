/*
886. Possible Bipartition
*/

/**
 * @param {number} N
 * @param {number[][]} dislikes
 * @return {boolean}
 */
/*
1,2,3...N
N = 4, dislikes = [[1,2],[1,3],[2,4]]
group1  group2
  1       2
  4       3

5, [[1,2],[2,3],[3,4],[4,5],[1,5]]
g1 g2
1  2
3  4
5
*/
var possibleBipartition = function(N, dislikes) {
  const groupOf = new Array(N+1).fill(0); // none: 0, 1|2
  const neis = [];
  for (const edge of dislikes) {
    if (!neis[edge[0]]) neis[edge[0]] = [];
    if (!neis[edge[1]]) neis[edge[1]] = [];
    neis[edge[0]].push(edge[1]);
    neis[edge[1]].push(edge[0]);
  }
  for (let i = 1; i <= N; i++) {
    if (groupOf[i] || !neis[i]) continue;
    const queue = [...neis[i]];
    while (queue.length > 0) {
      const top = queue.pop();
      if (!groupOf[top]) groupOf[top] = 1;
      for (const nei of neis[top]) {
        if (groupOf[top] === groupOf[nei]) {
          return false;
        }
        if (!groupOf[nei]) {
          groupOf[nei] = groupOf[top] === 1 ? 2 : 1;
          queue.push(nei);
        }
      }
    }
  }
  return true;
};



