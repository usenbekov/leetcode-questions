/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {
  return isPolindrome(s, 0, s.length-1);
};

var isPolindrome = function(s, l, h, deleted = false) {
  while (l < h) {
      if (s[l] != s[h]) {
          if (deleted) return false;
          return isPolindrome(s, l+1, h, true) ||
              isPolindrome(s, l, h-1, true);
      }
      l++;
      h--;
  }
  return true;
}

