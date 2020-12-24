/**
 * @param {string} S
 * @param {string[]} words
 * @return {number}
 */
var expressiveWords = function(S, words) {
  const scount = countLen(S);
  let len = 0;
  for (let i = 0; i < words.length; i++) {
      const wcount = countLen(words[i]);
      if (countsStretched(wcount, scount)) len++;
  }
  return len;
};

var countsStretched = function(s, w) {
  if (s.length != w.length) return false;
  for (let i = 0; i < s.length; i++) {
      if (s[i][0] != w[i][0]) return false;
      const diff = w[i][1] - s[i][1]
      if (diff < 0 || (diff === 1 && w[i][1] < 3)) return false;
  }
  return true;
}

var countLen = function(str) {
  let res = [];
  for (let i = 0; i < str.length; i++) {
      if (res.length === 0 || str[i] != res[res.length-1][0]) {
          res.push([str[i], 0]);
      }
      const curr = res[res.length-1];
      curr[1]++;
  }
  return res;
}