/**
 * @param {number[]} nums
 * @return {number}
 */
/*
[2, 2, 3,3,3, 4]

 1 2 3 4 5 6 ... 10000
[0,4,9,4 ...     0]

yes -> if we select
not -> if we not select
if select(yes) then yes[i] = max(yes[i-2], not[i-1]) + arr[i];
if not select then not[i] = max(yes[i-1], not[i-1]);

*/
var deleteAndEarn = function(nums) {
  // return solution1(nums);
  return solution2(nums);
};

var solution2 = function(nums) {
  const maxNum = 10000;
  const arr = new Array(maxNum+1).fill(0);
  for (let num of nums) {
      arr[num] += num;
  }
  
  for (let i = 1; i <= maxNum; i++) {
      arr[i] = Math.max((arr[i-2] || 0) + arr[i], arr[i-1]);
  }
  
  return arr[maxNum];
}

var solution1 = function(nums) {
  var counts = new Map(); // 2:2, 3:3, 4:1
  for (let i = 0; i < nums.length; i++) {
      if (!counts.has(nums[i])) counts.set(nums[i], 1);
      else counts.set(nums[i], counts.get(nums[i]) + 1);
  }
  
  const maxNum = 10000;
  const yes = new Array(maxNum+1).fill(0);
  const not = new Array(maxNum+1).fill(0);
  for (let i = 1; i <= maxNum; i++) {
      not[i] = Math.max(yes[i-1], not[i-1]);
      yes[i] = Math.max(yes[i-2] || 0, not[i-1]) + (counts.get(i) || 0) * i;
  }
  
  return Math.max(not[maxNum], yes[maxNum]);
}


