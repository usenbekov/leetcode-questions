/*
165. Compare Version Numbers

Compare two version numbers version1 and version2.
If version1 > version2 return 1; if version1 < version2 return -1;otherwise return 0.

You may assume that the version strings are non-empty and contain only digits and the . character.

The . character does not represent a decimal point and is used to separate number sequences.

For instance, 2.5 is not "two and a half" or "half way to version three", it is the fifth second-level revision of the second first-level revision.

You may assume the default revision number for each level of a version number to be 0. For example, version number 3.4 has a revision number of 3 and 4 for its first and second level revision number. Its third and fourth level revision number are both 0.

 

Example 1:

Input: version1 = "0.1", version2 = "1.1"
Output: -1
Example 2:

Input: version1 = "1.0.1", version2 = "1"
Output: 1
Example 3:

Input: version1 = "7.5.2.4", version2 = "7.5.3"
Output: -1
Example 4:

Input: version1 = "1.01", version2 = "1.001"
Output: 0
Explanation: Ignoring leading zeroes, both “01” and “001" represent the same number “1”
Example 5:

Input: version1 = "1.0", version2 = "1.0.0"
Output: 0
Explanation: The first version number does not have a third level revision number, which means its third level revision number is default to "0"
 

Note:

Version strings are composed of numeric strings separated by dots . and this numeric strings may have leading zeroes.
Version strings do not start or end with dots, and they will not be two consecutive dots.
*/

/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function(version1, version2) {
  //return solution1(version1, version2);
  return solution2(version1, version2);
};

var solution2 = function(v1, v2) {
  let len = Math.max(v1.length, v2.length);
  let p1 = 0;
  let p2 = 0;
  while(p1 < len && p2 < len) {
    let val1 = nextPartOf(v1, p1);
    let val2 = nextPartOf(v2, p2);
    if (val1.val > val2.val) return 1;
    if (val1.val < val2.val) return -1;
    p1 = val1.pos;
    p2 = val2.pos;
  }
  return 0;
}

var nextPartOf = function(ver, pos) {
  let i = pos;
  while(i < ver.length && ver[i] != '.') i++;
  return {pos:(i+1), val: parseInt(ver.substr(pos, i-pos) || 0)}
}

var solution1 = function(v1, v2) {
  let arr1 = v1.split('.');
  let arr2 = v2.split('.');
  let len = Math.max(arr1.length, arr2.length);
  for (let i = 0; i < len; i++) {
    let val1 = parseInt(arr1[i] || 0);
    let val2 = parseInt(arr2[i] || 0);
    if (val1 > val2) return 1;
    if (val1 < val2) return -1;
  }
  return 0;
}



