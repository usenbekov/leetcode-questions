/*
1044. Longest Duplicate Substring
*/

/*
banana
b ana na
ban ana
-> ana

Solution 1 O(n^2)
1. start from len-1...1
2. slide and count the substr
3. if count[substr] > 1 then return substr

Solution 2 O(NlogN)
1. binary search lo = 1, hi = len
2.  if at length of mid has duplicates
    it means it might have duplicates at longer substr
      so we should set lo = mid
3.  if at length of mid has NO duplicates
    it means there is no duplicates at length >= mid
      so we should set hi = mid-1
4. use Rabin-Karp's algorithm

*/


/**
 * @param {string} S
 * @return {string}
 */
var longestDupSubstring = function(S) {
  let lo = 1;
  let hi = S.length;
  let index = -1;
  while (lo < hi) {
    const mid = Math.ceil((lo+hi)/2);
    const dupStrIndex = getDublicatedSubstrIndex(S, mid);
    if (dupStrIndex < 0) hi = mid-1;
    else {
      lo = mid;
      index = dupStrIndex;
    }
  }
  return index < 0 ? '' : S.substr(index, lo);
};

var getDublicatedSubstrIndex = function(S, len) {
  const codeA = 'a'.charCodeAt(0);
  const codeAt = (i) => { return S.charCodeAt(i) - codeA; }
  
  const max = Math.pow(2, 32);
  const base = 26;
  let hash = 0; // codeC*26^2 + codeA*26^1 + codeD*26^0
  let baseToPowerLen = 1;
  
  for (let i = 0; i < len; i++) {
    hash = (hash * base + codeAt(i)) % max;
    baseToPowerLen = (baseToPowerLen * base) % max;
  }
  
  const hashes = new Set([hash]);
  for (let i = 1; i <= S.length-len; i++) {
    // remove previous
    hash = (hash*base - (codeAt(i-1) * baseToPowerLen) % max + max) % max;
    
    // add new
    hash = (hash + codeAt(i+len-1)) % max;
    //console.log(i, len, hash)
    if (hashes.has(hash)) return i;
    hashes.add(hash);
  }
  
  return -1;
}

/*var getDublicatedSubstr = function(S, len) {
  const count = new Map();
  for (let i = 0; i <= S.length-len; i++) {
    const substr = S.substr(i, len);
    count.set(substr, (count.get(substr) || 0) + 1);
    if (count.get(substr) > 1) return substr;
  }
  return '';
}*/



