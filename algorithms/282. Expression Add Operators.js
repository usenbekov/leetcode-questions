/*
282. Expression Add Operators
*/

/**
 * @param {string} num
 * @param {number} target
 * @return {string[]}
 */
var addOperators = function(num, target) {
  //return solution1(num, target);
  return solution2(num, target);
};

var solution2 = function(num, target) {
  const O = '0'.charCodeAt(0);
  const res = [];
  const ops = [];
  var push = function(sign, val) {
    if (ops.length > 0) ops.push(sign);
    ops.push(val);
  }
  var pop = function() {
    ops.pop();
    ops.pop();
  }
  var backtrack = function(i = 0, prevOper = 0, currOper = 0, value = 0) {
    //console.log(ops.join(''), value, prevOper, currOper);
    if (i === num.length && value === target && currOper === 0) {
      res.push(ops.join(''));
    }
    if (i >= num.length) return;
    currOper = currOper * 10 + (num.charCodeAt(i) - O);
    
    if (ops.length > 0) {
      push('*', currOper);
      backtrack(i+1, currOper*prevOper, 0, (value-prevOper)+(currOper*prevOper));
      pop();
    }
    
    push('+', currOper);
    backtrack(i+1, currOper, 0, value+currOper);
    pop();
    
    if (ops.length > 0) {
      push('-', currOper);
      backtrack(i+1, -currOper, 0, value-currOper);
      pop();
    }
    
    if (currOper !== 0) {
      backtrack(i+1, prevOper, currOper, value);
    }
  }
  backtrack();
  return res;
}

////////////////////////////////

const solution1 = (num, target) => {
  if (num === target+'') return [num];
  const res = [];
  find(num, target, 0, '', res);
  return res;
}

const find = (num, target, startIndex, strVal, res, visited = {}) => {
  if (strVal.length > 0 && (strVal[0] < '0' || strVal[0] > '9')) {
    strVal = strVal.substr(1);
  }
  if (visited[strVal] !== undefined) return;
  visited[strVal] = 1;
  if (startIndex === num.length) {
    const val = strToVal(strVal);
    if (val === target) res.push(strVal);
  }
  if (startIndex >= num.length) return;
  
  const i = startIndex;
  const n = num[i];
  find(num, target, i+1, strVal+'*'+n, res, visited);
  find(num, target, i+1, strVal+'+'+n, res, visited);
  find(num, target, i+1, strVal+'-'+n, res, visited);
  find(num, target, i+1, strVal+n, res, visited);
}

const strToVal = (str) => {
  str += '.';
  const signs = [];
  const nums = [];
  let numStr = '';
  let hasSigns = false;
  for (let i = 0; i < str.length; i++) {
    if (str[i] >= '0' && str[i] <= '9') {
      numStr += str[i];
    } else {
      if (numStr.length > 1 && numStr[0] === '0') return null;
      let numVal = parseInt(numStr);
      if (signs[signs.length-1] === '*') {
        nums[nums.length-1] *= numVal;
        signs.pop();
      } else {
        nums.push(numVal);
      }
      if (i < str.length-1) {
        signs.push(str[i]);
        numStr = '';
        hasSigns = true;
      }
    }
  }
  
  if (!hasSigns) return null;
  let num = nums[0];
  for (let i = 1; i < nums.length; i++) {
    if (signs[i-1] == '+') num += nums[i];
    else num -= nums[i];
  }
  return num;
}



