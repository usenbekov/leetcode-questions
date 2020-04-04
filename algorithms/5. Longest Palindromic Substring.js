/*
5. Longest Palindromic Substring

Given a string s, find the longest palindromic substring in s.
You may assume that the maximum length of s is 1000.

Example 1:

Input: "babad"
Output: "bab"
Note: "aba" is also a valid answer.
Example 2:

Input: "cbbd"
Output: "bb"
*/

/**
 * @param {string} s
 * @return {string}
 */
// O(n^2) O(1)
var longestPalindrome = function(s) {
  if (s.length < 2) return s;
  let start = 0;
  let width = 0;
  for (let i = 0; i < s.length; i++) {
    let w = Math.max(expandAt(i, i, s), expandAt(i, i+1, s));
    if (w > width) {
      start = i - Math.floor((w-1)/2);
      width = w;
    }
  }
  return s.substr(start, width);
};

var expandAt = function(low, high, s) {
  let w = 0;
  while (low >= 0 && high < s.length && s[low] == s[high]) {
    w += 1 + (low===high ? 0 : 1);
    low--;
    high++;
  }
  return w;
}
