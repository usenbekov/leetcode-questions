/*
268. Missing Number

Given an array containing n distinct numbers taken from 0, 1, 2, ..., n, find the one that is missing from the array.

Example 1:

Input: [3,0,1]
Output: 2
Example 2:

Input: [9,6,4,2,3,5,7,0,1]
Output: 8
Note:
Your algorithm should run in linear runtime complexity. Could you implement it using only constant extra space complexity?
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
  //return solution1(nums);
  //return solution2(nums);
  return solution3(nums);
};

// O(N), O(1)
var solution3 = function(nums) {
  let num = nums.length;
  for (let i = 0; i < nums.length; i++) {
    num ^= nums[i] ^ i;
  }
  return num;
}

// O(N), O(1)
// Gauss -> total(n) = n(n-1)/2
var solution2 = function(nums) {
  let missing = (nums.length+1) * nums.length / 2;
  for (const num of nums) {
    missing -= num;
  }
  return missing;
}

// O(N), O(N)
var solution1 = function(nums) {
  const arr = new Array(nums.length+1).fill(false);
  for (const num of nums) {
    arr[num] = true;
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === false) return i;
  }
  return -1;
}


