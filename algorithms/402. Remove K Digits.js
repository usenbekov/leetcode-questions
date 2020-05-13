/*
402. Remove K Digits
*/

/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
var removeKdigits = function(num, k) {
  //return solution1(num, k);
  return solution2(num, k);
};

var solution2 = function(num, k) {
  let nums = [];
  for (const n of num) {
    while (nums.length > 0 && nums[nums.length-1] > n && k > 0) {
      nums.pop();
      k--;
    }
    nums.push(n);
    if (n === '0' && nums.length <= k+1) {
      k -= nums.length-1;
      nums = [];
    }
  }
  
  while (k > 0) {
    nums.pop();
    k--;
  }
  
  return nums.join('') || '0';
}

var solution1 = function(num, k) {
  while (k > 0) {
    const index = getMaxIndex(num, k);
    num = num.substr(0, index) + num.substr(index+1, num.length);
    if (num[0] == '0') {
      let i = 0;
      while (num[i] == '0') { i++ }
      num = num.substr(i, num.length);
    }
    k--;
  }
  return num || '0';
}

var getMaxIndex = function(num, k) {
  for (let i = 0; i < num.length-1; i++) {
    if (parseInt(num[i]) > parseInt(num[i+1])) return i;
  }
  return num.length-1;
}


