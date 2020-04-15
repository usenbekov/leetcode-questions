/*
438. Find All Anagrams in a String

Given a string s and a non-empty string p,
find all the start indices of p's anagrams in s.

Strings consists of lowercase English letters
only and the length of both strings s and p
will not be larger than 20,100.

The order of output does not matter.

Example 1:

Input:
s: "cbaebabacd" p: "abc"

Output:
[0, 6]

Explanation:
The substring with start index = 0 is "cba", which is an anagram of "abc".
The substring with start index = 6 is "bac", which is an anagram of "abc".
Example 2:

Input:
s: "abab" p: "ab"

Output:
[0, 1, 2]

Explanation:
The substring with start index = 0 is "ab", which is an anagram of "ab".
The substring with start index = 1 is "ba", which is an anagram of "ab".
The substring with start index = 2 is "ab", which is an anagram of "ab".
*/

/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
  const aIndex = 'a'.charCodeAt(0);
  const countP = new Array(26).fill(0);
  for (let i = 0; i < p.length; i++) {
    countP[p.charCodeAt(i)-aIndex]++;
  }
  
  const allAnagrams = [];
  const countS = new Array(26).fill(0);
  let low = 0;
  for (let i = 0; i < s.length; i++) {
    countS[s.charCodeAt(i)-aIndex]++;
    
    if (i-low == p.length-1) {
      if (countP.isSameWith(countS)) {
        allAnagrams.push(low);
      }
      
      // slide
      countS[s.charCodeAt(low)-aIndex]--;
      low++;
    }
  }
  
  return allAnagrams;
};

Array.prototype.isSameWith = function(arr) {
  if (this.length !== arr.length) return false;
  for (let i = 0; i < this.length; i++) {
    if (this[i] !== arr[i]) return false;
  }
  return true;
}


