/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
  const isOper = (val) => {
      return val=='+' || val=='-' || val=='*' || val=='/';
  }
  
  const execute = (val0, val1, oper) => {
      if (oper == '+') val0 += val1;
      else if (oper == '-') val0 -= val1;
      else if (oper == '*') val0 *= val1;
      else if (oper == '/') val0 = val0/val1;
      return val0;
  }
  
  const nums = [];
  for (let i = 0; i < tokens.length; i++) {
      if (!isOper(tokens[i])) {
          nums.push(tokens[i]);
          continue;
      }
      
      let oper = tokens[i];
      let val1 = parseInt(nums.pop())
      let val0 = parseInt(nums.pop())
      nums.push(execute(val0, val1, oper))
  }
  
  return Math.floor(nums[0]);
};