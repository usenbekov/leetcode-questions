/*
647. Palindromic Substrings
*/

/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function(s) {
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    count += lenFromCenter(i, i, s);
    count += lenFromCenter(i, i+1, s);
  }
  return count;
};

var lenFromCenter = function(i, j, s) {
  if (j >= s.length) return 0;
  let count = 0;
  while (i >= 0 && j < s.length && s[i] === s[j]) {
    count++;
    i--;
    j++;
  }
  return count;
}


