/*
42. Trapping Rain Water

Given n non-negative integers representing an elevation 
map where the width of each bar is 1, compute how 
much water it is able to trap after raining.

https://assets.leetcode.com/uploads/2018/10/22/rainwatertrap.png
The above elevation map is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. 
In this case, 6 units of rain water (blue section) are being trapped. 
Thanks Marcos for contributing this image!

Example:

Input: [0,1,0,2,1,0,1,3,2,1,2,1]
Output: 6
*/

/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
  //return trap1(height);
  //return trap2(height);
  return trap3(height);
};

// O(n), O(1)
var trap3 = function(height) {
  let left = 0;
  let right = height.length-1;
  let leftMax = 0;
  let rightMax = 0;
  let water = 0;
  while(left < right) {
      if (height[left] < height[right]) {
          if (leftMax > height[left]) water += leftMax - height[left];
          else leftMax = height[left];
          left++;
      } else {
          if (rightMax > height[right]) water += rightMax - height[right];
          else rightMax = height[right]
          right--;
      }
  }
  return water;
}

// O(n), O(n)
var trap2 = function(height) {
  const stack = [];
  let water = 0;
  for (let curr = 0; curr < height.length; curr++) {
      while(stack.length > 0 && height[curr] > height[stack[stack.length-1]]) {
          const mid = stack.pop();
          if (stack.length > 0) {
              const prev = stack[stack.length-1];
              const h = Math.min(height[curr], height[prev]) - height[mid];
              const w = curr - prev - 1;
              water += h * w;
          }
      }
      stack.push(curr);
  }
  return water;
}

// O(n), O(n)
var trap1 = function(height) {
  if (height.length < 1) return 0;
  
  const maxFw = [];
  for (let i = 0; i < height.length; i++) {
      maxFw[i] = Math.max(maxFw[i-1] || 0, height[i]);
  }
  
  const maxBw = [];
  for (let i = height.length-1; i >= 0; i--) {
      maxBw[i] = Math.max(maxBw[i+1] || 0, height[i]);
  }
  
  let water = 0;
  for (let i = 0; i < height.length; i++) {
      water += Math.min(maxFw[i], maxBw[i]) - height[i];
  }
  
  return water;
}


