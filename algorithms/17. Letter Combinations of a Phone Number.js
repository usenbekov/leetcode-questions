/*
17. Letter Combinations of a Phone Number

Given a string containing digits from 2-9 inclusive,
return all possible letter combinations that the number could represent.

A mapping of digit to letters (just like on the telephone buttons)
is given below. Note that 1 does not map to any letters.
http://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Telephone-keypad2.svg/200px-Telephone-keypad2.svg.png

Example:

Input: "23"
Output: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].
Note:

Although the above answer is in lexicographical order,
your answer could be in any order you want.
*/

/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
  //return letterCombinations1(digits).sort();
  return letterCombinations2(digits);
};

// O(3^N x 4^M) where M+N=total digits, M -> number of digits maps to 4 letters
// Space also O(3^N x 4^M)
var letterCombinations2 = function(digits) {
  if (!digits) return [];
  const combs = [];
  backtrack("", digits, combs);
  return combs;
};

var backtrack = function(comb, nextDigits, combs) {
  if (nextDigits.length === 0) return combs.push(comb);
  const letters = getLettersFor(nextDigits[0]);
  for (let i = 0; i < letters.length; i++) {
    backtrack(comb+letters[i], nextDigits.substr(1), combs);
  }
}

//
var letterCombinations1 = function(digits, combs) {
  if (!digits) return combs || [];
  combs = combs || [""];
  let letters = getLettersFor(digits[0]);
  let newCombs = [];
  for (let i = 0; i < letters.length; i++) {
    for (let j = 0; j < combs.length; j++) {
      newCombs.push(combs[j]+letters[i]);
    }
  }
  combs = letterCombinations1(digits.substr(1), newCombs);
  return combs;
};

var getLettersFor = function(digit) {
  if (digit === '2') return ['a', 'b', 'c'];
  if (digit === '3') return ['d', 'e', 'f'];
  if (digit === '4') return ['g', 'h', 'i'];
  if (digit === '5') return ['j', 'k', 'l'];
  if (digit === '6') return ['m', 'n', 'o'];
  if (digit === '7') return ['p', 'q', 'r', 's'];
  if (digit === '8') return ['t', 'u', 'v'];
  if (digit === '9') return ['w', 'x', 'y', 'z'];
  return [];
}


