/*
368. Largest Divisible Subset
*/

/*
Solution-1
Lets assume we have divisible subset:
[2, 4]

a. If we add new bigger divisible value than 4 then it is divisble to all elements
Ex: 8%4==0 so we can push the value
[2, 4, 8]

b. Works for smallest one as well
Ex: 2%1==0
[1, 2, 4, 8]

1. Sort -> [1,2,3]
2. Create subset list -> []
3. Iterate 1..3 and check the condition a. for every subset
4. Return the largest subset;

------------------
Solution-2
1. Sort -> [1, 2, 3]
2. Every number initially has empty divisible subsets [[1], [2], [3]]
3. Iterate subsets and check if current subset can extend the previous subset
Ex: at index = 1 -> (2 % 1 == 0) -> subsets[1] = [...subsets[0], ...subsets[1]]
4. Return the largest subset
*/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var largestDivisibleSubset = function(nums) {
  //return solution1(nums);
  return solution2(nums);
};

var solution2 = function(nums) {
  if (nums.length < 1) return [];
  nums.sort((a, b) => { return a-b; });
  
  const subsets = [];
  for (const num of nums) {
    subsets.push([num]);
  }
  
  for (let i = 1; i < subsets.length; i++) {
    let maxSubset = [];
    for (let j = i-1; j >= 0; j--) {
      const currSmallest = subsets[i][0];
      const prevLargest = subsets[j][subsets[j].length-1];
      if (currSmallest % prevLargest === 0 && subsets[j].length > maxSubset.length) {
        maxSubset = subsets[j];
      }
    }
    subsets[i] = [...maxSubset, ...subsets[i]];
  }
  
  let largestSubset = [];
  for (const subset of subsets) {
    if (subset.length > largestSubset.length) {
      largestSubset = subset;
    }
  }
  return largestSubset;
}

var solution1 = function(nums) {
  nums.sort((a, b) => { return a-b; });
  
  let subsets = [];
  for (let i = 0; i < nums.length; i++) {
    let found = false;
    for (const subset of subsets) {
      if (nums[i] != subset[subset.length-1] && nums[i] % subset[subset.length-1] === 0) {
        subset.push(nums[i]);
        found = true;
      } else {
        for (let j = subset.length-2; j >= 0 && !found; j--) {
          if (nums[i] !== subset[j] && nums[i] % subset[j] === 0) {
            const newSubset = subset.slice(0, j+1);
            newSubset.push(nums[i]);
            subsets.push(newSubset);
            found = true;
          }
        }
      }
    }
    if (!found) {
      subsets.push([nums[i]]);
    }
  }
  
  let largestSubset = [];
  for (const subset of subsets) {
    if (subset.length > largestSubset.length) {
      largestSubset = subset;
    }
  }
  
  return largestSubset;
}




