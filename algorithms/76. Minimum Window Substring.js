/*
76. Minimum Window Substring

Given a string S and a string T, find the minimum window in S
which will contain all the characters in T in complexity O(n).

Example:

Input: S = "ADOBECODEBANC", T = "ABC"
Output: "BANC"
Note:

If there is no such window in S that covers all characters in T, return the empty string "".
If there is such window, you are guaranteed that there will always be only one unique minimum window in S.
*/

/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
  if (!s || !t) return "";
  
  let scount = new Map();
  let tcount = new Map();
  for (let i = 0; i < t.length; i++) {
    tcount.set(t[i], (tcount.get(t[i]) || 0)+1);
  }
  
  let count = 0;
  let lookingfor = t.length;
  
  const containsAllCharsInT = () => {
    /*let containsAll = true;
    tcount.forEach((val, key) => {
      if (val > (scount.get(key) || 0)) containsAll = false;
    })
    return containsAll;*/
    return count >= lookingfor;
  }
  
  const addToS = (ch, val) => {
    // moving letf
    if (val < 0) {
      if (tcount.has(ch) && scount.get(ch) === tcount.get(ch)) {
        count -= tcount.get(ch);
      }
    }
    
    // set count
    scount.set(ch, (scount.get(ch) || 0)+val);
    if (scount.get(ch) === 0) scount.delete(ch);
    
    // moving high
    if (val > 0) {
      if (tcount.has(ch) && scount.get(ch) === tcount.get(ch)) {
        count += tcount.get(ch);
      }
    }
  }
  
  let low = 0;
  let high = 0;
  let minWin = "";
  addToS(s[high], 1);
  while(true) {
    if (containsAllCharsInT()) {
      if (!minWin || minWin.length > high-low+1) {
        minWin = s.substr(low, high-low+1);
      }
      addToS(s[low++], -1);
      while(low < high && !tcount.has(s[low])) {
        addToS(s[low], -1);
        low++;
      }
    } else if (high < s.length-1) {
      high++;
      addToS(s[high], 1);
    } else {
      break;
    }
  }
  
  return minWin;
};
