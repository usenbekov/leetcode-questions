/*
151. Reverse Words in a String
*/

/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
  s += ' ';
  let currWord = [];
  let words = [];
  for (const ch of s) {
    if (ch == ' ') {
      if (currWord.length > 0) {
        words.push(currWord.join(''));
        currWord = [];
      }
    } else {
      currWord.push(ch);
    }
  }
  return words.reverse().join(' ');
};


