/**
 * @param {string} s
 * @return {number}
 */
var maxLengthBetweenEqualCharacters = function(s) {
  // return solution1(s);
  return solution2(s);
};

var solution1 = function(s) {
  var res = -1;
  const map = {};
  for (let i = 0; i < s.length; i++) {
      const prevIndex = map[s[i]];
      if (prevIndex !== undefined) {
          res = Math.max(res, i - prevIndex - 1);
      } else {
          map[s[i]] = i;
      }
  }
  return res;
}

var solution2 = function(s) {
  var res = -1;
  const start = 'a'.charCodeAt(0);
  const map = new Array(26);
  for (let i = 0; i < s.length; i++) {
      const prevIndex = map[s.charCodeAt(i)-start];
      if (prevIndex !== undefined) {
          res = Math.max(res, i - prevIndex - 1);
      } else {
          map[s.charCodeAt(i)-start] = i;
      }
  }
  return res;
}
