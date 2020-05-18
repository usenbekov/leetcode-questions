/*
567. Permutation in String
*/

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
  const count1 = new Array(26).fill(0); // aba [2,1,0,0....]
  for (const ch of s1) {
    count1[letterToInt(ch)]++;
  }
  
  const count2 = new Array(26).fill(0);
  for (let i = 0; i < s2.length; i++) {
    count2[letterToInt(s2[i])]++;
    if (i >= s1.length) {
      count2[letterToInt(s2[i-s1.length])]--;
    }
    if (countsAreSame(count1, count2)) {
      return true;
    }
  }
  return false;
};

var letterToInt = function(letter) {
  return letter.charCodeAt(0) - 'a'.charCodeAt(0);
}

var countsAreSame = function(count1, count2) {
  for (let i = 0; i < count1.length; i++) {
    if (count1[i] !== count2[i]) return false;
  }
  return true;
}





