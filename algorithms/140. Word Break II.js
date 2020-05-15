/*
140. Word Break II
*/

/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {string[]}
 */
var wordBreak = function(s, wordDict) {
  return find(new Set(wordDict), s);
};

// O(2^N)
var find = function(wordDict, s, startI = 0, dp = new Map()) {
  if (startI == s.length) return [""];
  if (dp.has(startI)) {
    return dp.get(startI);
  }
  const ans = [];
  for (let i = startI; i < s.length; i++) {
    const word = s.substr(startI, i-startI+1);
    if (wordDict.has(word)) {
      const suffixes = find(wordDict, s, i+1, dp);
      for (const suffix of suffixes) {
        ans.push(word+(suffix?' ':'')+suffix);
      }
    }
  }
  dp.set(startI, ans);
  return ans;
}


