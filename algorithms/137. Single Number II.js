/*
137. Single Number II
*/

/*
Solution 1
Two pass; count elements -> find

Solution 2
a^a^b = b
first = NOT second AND (first ^ num)
second = NOT first AND (second ^ num)

if num = 2
1. first = 2, second = 0
2. first = 0, second = 2
3. first = 0, second = 0
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  //return solution1(nums);
  return solution2(nums);
};

var solution2 = function(nums) {
  let first = 0;
  let second = 0;
  for (const num of nums) {
    first = ~second & (first ^ num);
    second = ~first & (second ^ num)
  }
  return first;
}

var solution1 = function(nums) {
  const counts = new Map();
  for (const num of nums)
    counts.set(num, (counts.get(num)||0)+1);
  
  for (const num of nums)
    if (counts.get(num) === 1) return num;
  
  return 0;
}


