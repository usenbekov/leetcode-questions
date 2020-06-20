/*
60. Permutation Sequence
*/

/*
n=3; k=3;
1,2,3

1. 123
2. 132
3. 213 <-

----------------------

Solution 1 - O(NxN!)?
[1, 2, 3]

[] [1,2,3]
[1] [2,3] -> [1,2] [3] -> [1,2,3] []
             [1,3] [2] -> [1,3,2] []
[2] [1,3] -> [2,1] [3] -> [2,1,3] []

----------------------

Solution 2 - O(N^2)

1. 1234
2. 1243
3. 1324
4. 1342
5. 1423
6. 1432
7. 2134
8. 2143

if we fix 1 the rest will have 3! = 6 permutations
it means after every six it will be next number 1 -> 2 -> 3 ...
by doing this recursively with fixind 1,2,3... we can find the kth permutation

get all permutation to n perms = [1, 1, 2, 6, 24...]
nums = [0, 1, 2, 3, 4]

len = 4
(4-1)! = 6
ceil(8/6) = "2" nums.splice(2, 1) -> [0, 1, 3, 4]
8 - (index-1) * 6 = 2

len = 3
(3-1)! = 2
ceil(2/2) = "21" nums.splice(1, 1) -> [0, 3, 4]
2-(index-1)*2 = 2

len = 2
(2-1)! = 1
ceil(2/1) = "214" nums.splice(2, 1) -> [0, 3]
2-(2-1)*1 = 1

len = 1
(1-1)! = 1
ceil(1/1) = "2143" nums.splice(1, 1) -> [0]

*/

/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getPermutation = function(n, k) {
  //return solution1(n, k);
  return solution2(n, k);
};

var solution2 = function(n, k) {
  const perms = [1];
  const nums = [0];
  for (let i = 1; i <= n; i++) {
    nums.push(i);
    perms[i] = perms[i-1] * i;
  }
  
  let res = "";
  let remain = k;
  for (let i = n; i >= 1; i--) {
    const perm = perms[i-1];
    const index = Math.ceil(remain/perm);
    res += nums.splice(index, 1);
    remain -= (index-1) * perm;
  }
  
  return res;
}

var solution1 = function(n, k) {
  const nums = [];
  for (let i = 1; i <= n; i++) nums.push(i);
  
  let found = '';
  const generate = (arr, fromArr) => {
    if (k <= 0) return;
    if (arr.length === n) {
      if (--k <= 0) found = arr.join('');
      return;
    }
    
    for (let i = 0; i < fromArr.length; i++) {
      const newFromArr = [...fromArr];
      newFromArr.splice(i, 1);
      
      arr.push(fromArr[i]);
      generate(arr, newFromArr);
      arr.pop();
    }
  }
  generate([], nums);
  return found;
}


