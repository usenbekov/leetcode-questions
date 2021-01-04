/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
  const map = {'0':0,'1':1,'2':2,'3':3,'4':4,'5':5,'6':6,'7':7,'8':8,'9':9}
  let i = num1.length-1;
  let j = num2.length-1;
  let carry = 0;
  let res = '';
  while (i >= 0 || j >= 0) {
      const val1 = i < 0 ? 0 : map[num1[i]];
      const val2 = j < 0 ? 0 : map[num2[j]];
      let addedVal = carry + val1 + val2;
      if (addedVal > 9) {
          carry = 1;
          addedVal -= 10;
      } else {
          carry = 0;
      }
      res = addedVal + res;
      i--;
      j--;
  }
  return (carry ? '1' : '') + res;
};

