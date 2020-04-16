/*
678. Valid Parenthesis String

Given a string containing only three types of
characters: '(', ')' and '*', write a function
to check whether this string is valid. We define
the validity of a string by these rules:

Any left parenthesis '(' must have a corresponding right parenthesis ')'.
Any right parenthesis ')' must have a corresponding left parenthesis '('.
Left parenthesis '(' must go before the corresponding right parenthesis ')'.
'*' could be treated as a single right parenthesis ')' or a single left parenthesis '(' or an empty string.
An empty string is also valid.
Example 1:

Input: "()"
Output: True
Example 2:

Input: "(*)"
Output: True
Example 3:

Input: "(*))"
Output: True
Note:

The string size will be in the range [1, 100].
*/

/**
 * @param {string} s
 * @return {boolean}
 */
var checkValidString = function(s) {
  return isValidPar2(s);
};

// O(N)
var isValidPar2 = function(s) {
  let low = 0, high = 0;
  for (const ch of s) {
    high += ch == '(' || ch == '*' ? 1 : -1;
    if (high < 0) return false;
    
    low += ch == '(' ? 1 : -1;
    low = Math.max(low, 0);
  }
  return low === 0;
}

// O(3 ^ N) ?
var isValidPar1 = function(s, startIndex = 0, openParCount = 0) {
  let i = startIndex;
  for (i; i < s.length; i++) {
    if (s[i] === '(') openParCount++;
    else if (s[i] === ')') openParCount--;
    else break;
    if (openParCount < 0) return false;
  }
  if (i === s.length) {
    return openParCount === 0;
  }
  
  return isValidPar1(s, i+1, openParCount+1) ||
    isValidPar1(s, i+1, openParCount-1) ||
    isValidPar1(s, i+1, openParCount);
}


