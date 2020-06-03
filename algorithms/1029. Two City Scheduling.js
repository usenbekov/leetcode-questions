/*
1029. Two City Scheduling
*/

/**
 * @param {number[][]} costs
 * @return {number}
 */
/*
[[10,20],[30,200],[400,50],[30,20]]
*/
var twoCitySchedCost = function(costs) {
  costs.sort((a, b) => {
    return (a[0]-a[1])-(b[0]-b[1]);
  })
  let cost = 0;
  for (let i = 0; i < costs.length; i++) {
    cost += i < costs.length/2 ? costs[i][0] : costs[i][1];
  }
  return cost;
};


