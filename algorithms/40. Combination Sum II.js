/*
40. Combination Sum II
*/

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
  candidates.sort((a, b) => {return a-b});
  const ans = [];
  const comb = [];
  const search = (index, value) => {
    if (value === target) {
      ans.push([...comb]);
    }
    if (index >= candidates.length || value >= target) return;
    for (let i = index; i < candidates.length; i++) {
      if (i > index && candidates[i] === candidates[i-1]) continue;
      comb.push(candidates[i]);
      search(i+1, value+candidates[i]);
      comb.pop();
    }
  }
  search(0, 0);
  return ans;
};



