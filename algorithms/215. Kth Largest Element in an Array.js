/*
215. Kth Largest Element in an Array

Find the kth largest element in an unsorted array.
Note that it is the kth largest element in the
sorted order, not the kth distinct element.

Example 1:

Input: [3,2,1,5,6,4] and k = 2
Output: 5
Example 2:

Input: [3,2,3,1,2,4,5,5,6] and k = 4
Output: 4
Note: 
You may assume k is always valid, 1 ≤ k ≤ array's length.
*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
// Average O(n), Worst O(n^2)
var findKthLargest = function(nums, k) {
  const swap = (i, j) => {
    let temp = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;
  }
  
  const sortAtPivot = (low, high, pivot) => {
    const origLow = low;
    swap(low, pivot);
    low++;
    while(true) {
      while(low < high && nums[low] >= nums[origLow]) {
        low++;
      }
      while (low <= high && nums[high] < nums[origLow]) {
        high--;
      }
      if (low >= high) break;
      swap(low, high);
    }
    swap(origLow, high);
    return high;
  }
  
  const sort = (low, high, K) => {
    if (low >= high || K < 1) return;
    const pivot = low + Math.round(Math.random()*(high-low));
    const mid = sortAtPivot(low, high, pivot);
    const leftLen = mid-low+1;
    if (leftLen > K) sort(low, mid-1, K);
    else if (leftLen < K) sort(mid+1, high, K-leftLen);
  }
  
  sort(0, nums.length-1, k);
  //console.log(nums)
  
  let lowest = Number.POSITIVE_INFINITY;
  for (let i = 0; i < k; i++) {
    lowest = Math.min(lowest, nums[i]);
  }
  
  return lowest;
};


