/*
1249. Minimum Remove to Make Valid Parentheses
*/

/**
 * @param {string} s
 * @return {string}
 */
var minRemoveToMakeValid = function(s) {
  const todel = new Set();
  const stack = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === ')') {
      if (stack.length <= 0) todel.add(i);
      else stack.pop();
    }
    else if (s[i] === '(') {
      stack.push(i);
    }
  }
  for (const i of stack) {
    todel.add(i);
  }
  const str = [];
  for (let i = 0; i < s.length; i++) {
    if (!todel.has(i)) str.push(s[i]);
  }
  return str.join('');
};



