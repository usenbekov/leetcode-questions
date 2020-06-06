/*
406. Queue Reconstruction by Height
*/

/*
[[7,0], [4,4], [7,1], [5,0], [6,1], [5,2]]

sort
[[7,0], [7,1], [6,1], [5,0], [5,2], [4,4]]

[]
[[7,0]] -> [7,0] insert at index 0
[[7,0], [7,1]] -> [7,1] insert at index 1
[[7,0], [6,1], [7,1]] -> [6,1] insert at index 1
[[5,0], [7,0], [6,1], [7,1]] -> [5,0] insert at index 0
[[5,0], [7,0], [5,2], [6,1], [7,1]] -> [5,2] insert at index 2
[[5,0], [7,0], [5,2], [6,1], [4,4], [7,1]] -> [4,4] insert at index 4

...

*/

/**
 * @param {number[][]} people
 * @return {number[][]}
 */
var reconstructQueue = function(people) {
  people.sort((a, b) => {
    const comp = b[0] - a[0];
    if (comp === 0) return a[1] - b[1];
    return comp;
  });
  
  const ans = [];
  for (let i = 0; i < people.length; i++) {
    ans.splice(people[i][1], 0, people[i]);
  }
  return ans;
};
