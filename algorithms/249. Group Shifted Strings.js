/*
249. Group Shifted Strings
*/

/**
 * @param {string[]} strings
 * @return {string[][]}
 */
/*
abc -> "012"
bcd -> 1-1 2-1 3-1 -> "012"
acd -> 023
*/
var groupStrings = function(strings) {
  const group = new Map();
  const ans = [];
  for (const str of strings) {
    const key = generateKeyFrom(str);
    if (!group.has(key)) {
      group.set(key, []);
      ans.push(group.get(key));
    }
    group.get(key).push(str);
  }
  return ans;
};

var generateKeyFrom = function(str) {
  let key = [];
  for (let i = 0; i < str.length; i++) {
    let val = str.charCodeAt(i) - str.charCodeAt(0);
    if (val < 0) val += 26;
    key.push(val);
  }
  return key.toString();
}




