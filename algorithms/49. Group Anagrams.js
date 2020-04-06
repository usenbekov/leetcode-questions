/*
49. Group Anagrams

Given an array of strings, group anagrams together.

Example:

Input: ["eat", "tea", "tan", "ate", "nat", "bat"],
Output:
[
  ["ate","eat","tea"],
  ["nat","tan"],
  ["bat"]
]
Note:

All inputs will be in lowercase.
The order of your output does not matter.
*/

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
  return solution2(strs);
};

// O (N K log(K)) -> N: strs.length, K: max(len(str in strs))
var solution1 = (strs) => {
const map = new Map();
for (const str of strs) {
  const key = str.split('').sort().join('');
  if (!map.has(key)) map.set(key, []);
  map.get(key).push(str);
}
return Array.from(map.values());
}

// O (N K)
var solution2 = (strs) => {
const charStart = 'a'.charCodeAt(0);
const groupedAnagrams = new Map();
for (const str of strs) {
  const charCount = new Array(26).fill(0);
  for (let i = 0; i < str.length; i++) {
    charCount[str.charCodeAt(i) - charStart]++;
  }
  
  let key = charCount.toString();
  if (!groupedAnagrams.has(key)) groupedAnagrams.set(key, []);
  groupedAnagrams.get(key).push(str);
}
return Array.from(groupedAnagrams.values());
}



