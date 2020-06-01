/*
189. Rotate Array
*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
/*
[1,2,3,4,5,6,7], k = 3
[1,2,3,1,5,6,7] 4
[1,2,3,1,5,6,4] 7
[1,2,7,1,5,6,4] 3
[1,2,7,1,5,3,4] 6
[1,6,7,1,5,3,4] 2
[1,6,7,1,2,3,4] 5
[5,6,7,1,2,3,4]

[-1,-100,3,99], k = 2
[-1,-100,-1,99] 3
[3,-100,-1,99]
[3,-100,-1,-100] 99
[3, 99,-1,-100]
*/
var rotate = function(nums, k) {
  //solution1(nums, k);
  solution2(nums, k);
};

var solution1 = function(nums, k) {
  const visited = [];
  for (let i = 0; i < nums.length; i++) {
    let j = (i+k) % nums.length;
    let prev = nums[i];
    while (!visited[j]) {
      let temp = nums[j];
      nums[j] = prev;
      prev = temp;
      visited[j] = true;
      j = (j+k) % nums.length;
    }
  }
}

var solution2 = function(nums, k) {
  k %= nums.length;
  const reverse = (low, high) => {
    while (low < high) {
      const temp = nums[low];
      nums[low] = nums[high];
      nums[high] = temp;
      low++;
      high--;
    }
  }
  reverse(0, nums.length-1);
  reverse(0, k-1);
  reverse(k, nums.length-1);
}


