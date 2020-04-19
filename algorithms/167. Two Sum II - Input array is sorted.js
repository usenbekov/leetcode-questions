/*
167. Two Sum II - Input array is sorted

Given an array of integers that is already sorted in ascending order,
find two numbers such that they add up to a specific target number.

The function twoSum should return indices of the two numbers such that
they add up to the target, where index1 must be less than index2.

Note:

Your returned answers (both index1 and index2) are not zero-based.
You may assume that each input would have exactly one solution and
you may not use the same element twice.

Example:

Input: numbers = [2,7,11,15], target = 9
Output: [1,2]
Explanation: The sum of 2 and 7 is 9. Therefore index1 = 1, index2 = 2.
*/

/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
  //return twoSum1(numbers, target);
  return twoSum2(numbers, target);
};

// O(n) O(1)
var twoSum2 = function(numbers, target) {
  let low = 0, high = numbers.length-1;
  while(true) {
    const sum = numbers[low]+numbers[high];
    if (sum === target) {
      return [low+1, high+1];
    }
    else if (sum > target) {
      high--;
    } else {
      low++;
    }
  }
  return [-1, -1];
};

// O(n) O(n)
var twoSum1 = function(numbers, target) {
  const indexMap = new Map();
  for (let i = 0; i < numbers.length; i++) {
    if (indexMap.has(target-numbers[i])) {
      return [indexMap.get(target-numbers[i])+1, i+1];
    } else {
      indexMap.set(numbers[i], i);
    }
  }
  return [-1, -1];
}


