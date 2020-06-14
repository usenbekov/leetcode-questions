/*
472. Concatenated Words
*/

/*
words = ["cats","catsdogcats","dog", "catshorse", "rse"]
answer = ["catsdogcats"]

How to check if word was generated with concatenated words?
_ c a t s d o g c a t s
1 0 0 0 1 0 0 1 0 0 0 1

_ c a t s h o r s e
1       1 0 0 0 0 0

Solution:
1. Convert words to Set (To search in O(1))
2. for word of words
    for i in 0...word.length-1
      for j in i+1...word.length
        substr = word.substr(i, j)
        if (substr != word && set.has(substr) && dp[i] == 1)
          dp[1+i+substr.length] = 1;
    if (dp.last == 1)
      ans.push(word)
3. return ans

Farther improvement:
1. Concatenated word can be formed only from words smaller then itself
2. So first sort by length asc
   fromWords = new Set();
3. for word of words
    if canBeFormed(word, fromWords)
      ans.push(word)
    fromWords.add(word)

*/

/**
 * @param {string[]} words
 * @return {string[]}
 */
var findAllConcatenatedWordsInADict = function(words) {
  //return solution1(words);
  return solution2(words);
};

var solution2 = function(words) {
  words.sort((a, b) => { return a.length-b.length; });
  const ans = [];
  const fromWords = new Set();
  for (const word of words) {
    if (canBeFormed(word, fromWords)) {
      ans.push(word);
    }
    fromWords.add(word);
  }
  return ans;
}

var canBeFormed = function(word, fromWords) {
  if (!word) return false;
  const dp = new Array(word.length+1).fill(false);
  dp[0] = true;
  for (let j = 1; j <= word.length; j++) {
    for (let i = 0; i < j && !dp[j]; i++) {
      if (dp[i]) {
        const substr = word.substring(i, j);
        if (fromWords.has(substr)) {
          dp[j] = true;
        }
      }
    }
  }
  return dp[word.length];
}

var solution1 = function(words) {
  const ans = [];
  const wordsSet = new Set(words);
  for (const word of words) {
    if (!word) continue;
    const dp = new Array(word.length+1).fill(0);
    dp[0] = 1;
    for (let i = 0; i < word.length && dp[word.length] != 1; i++) {
      if (dp[i] !== 1) continue;
      for (let j = 1; j <= word.length-i; j++) {
        const substr = word.substr(i, j);
        if (substr != word && wordsSet.has(substr) && dp[i] === 1 ) {
          dp[i+substr.length] = 1;
          if (dp[word.length] === 1) {
            ans.push(word);
          }
        }
      }
    }
  }
  return ans;
};




