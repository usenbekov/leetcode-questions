/*
344. Reverse String
*/

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
/*
["h","e","l","l","o"]
lo=0, hi=4; ["o","e","l","l","h"]
lo=1, hi=3; ["o","l","l","e","h"]
*/
var reverseString = function(s) {
  let lo = 0;
  let hi = s.length-1;
  while (lo < hi) {
    const temp = s[lo];
    s[lo++] = s[hi];
    s[hi--] = temp;
  }
};


