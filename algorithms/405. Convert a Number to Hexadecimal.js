/*
405. Convert a Number to Hexadecimal
*/

/**
 * @param {number} num
 * @return {string}
 */
/*
map = {0: '0', 1: '1'...}
lastDigit = num % 16;
return toHex(num/16) + map[lastDigit]
*/
var toHex = function(num) {
  if (num < 0) {
    num += Math.pow(16, 8);
  }
  if (num < hexMap.length) return hexMap[num];
  const lastDigit = num % hexMap.length;
  const remain = Math.floor(num/hexMap.length);
  return toHex(remain) + hexMap[lastDigit];
};

const hexMap = ['0', '1', '2', '3', '4',
                '5', '6', '7', '8', '9',
                'a', 'b', 'c', 'd', 'e', 'f'];


