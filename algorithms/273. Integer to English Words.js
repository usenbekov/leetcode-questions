/*
273. Integer to English Words

Convert a non-negative integer to its english words representation. Given input is guaranteed to be less than 231 - 1.

Example 1:

Input: 123
Output: "One Hundred Twenty Three"
Example 2:

Input: 12345
Output: "Twelve Thousand Three Hundred Forty Five"
Example 3:

Input: 1234567
Output: "One Million Two Hundred Thirty Four Thousand Five Hundred Sixty Seven"
Example 4:

Input: 1234567891
Output: "One Billion Two Hundred Thirty Four Million Five Hundred Sixty Seven Thousand Eight Hundred Ninety One"
*/

/**
 * @param {number} num
 * @return {string}
 */
var numberToWords = function(num) {
  if (num === 0) return "Zero";
  if (num === 1) return "One";
  if (num === 2) return "Two";
  if (num === 3) return "Three";
  if (num === 4) return "Four";
  if (num === 5) return "Five";
  if (num === 6) return "Six";
  if (num === 7) return "Seven";
  if (num === 8) return "Eight";
  if (num === 9) return "Nine";
  if (num === 10) return "Ten";
  if (num === 11) return "Eleven";
  if (num === 12) return "Twelve";
  if (num === 13) return "Thirteen";
  if (num === 14) return "Fourteen";
  if (num === 15) return "Fifteen";
  if (num === 16) return "Sixteen";
  if (num === 17) return "Seventeen";
  if (num === 18) return "Eighteen";
  if (num === 19) return "Nineteen";
  
  let val = '';
  let next = 0;
  
  if (num <= 99) {
    next = 10;
    if (num <= 29) val = "Twenty";
    else if (num <= 39) val = "Thirty";
    else if (num <= 49) val = "Forty";
    else if (num <= 59) val = "Fifty";
    else if (num <= 69) val = "Sixty";
    else if (num <= 79) val = "Seventy";
    else if (num <= 89) val = "Eighty";
    else if (num <= 99) val = "Ninety";
  }
  else if (num <= 999) {
    next = 100;
    val = numberToWords(Math.floor(num/next)) + " Hundred";
  }
  else if (num <= 999999) {
    next = 1000;
    val = numberToWords(Math.floor(num/next)) + " Thousand";
  }
  else if (num <= 999999999) {
    next = 1000000;
    val = numberToWords(Math.floor(num/next)) + " Million";
  }
  else if (num <= 999999999999) {
    next = 1000000000;
    val = numberToWords(Math.floor(num/next)) + " Billion";
  }
  
  if (num % next !== 0) val += " " + numberToWords(num % next);
  
  return val;
};





