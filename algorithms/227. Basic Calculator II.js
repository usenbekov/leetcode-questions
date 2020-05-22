/*
227. Basic Calculator II
*/

/**
 * @param {string} s
 * @return {number}
 */
/*
3-2+2*2*3
val = 0
prev = 0;
+3, val = 0+3; prev = +3;
-2, val = 3-2; prev = -2;
+2, val = 1+2; prev = +2;
2, val = (3-(+2 prev))+prev*2 = 1+4 = 5; prev = +4;
3, val = (5-prev)+prev*3 = 1+12 = 13
*/
var calculate = function(s) {
  if (!s) return 1172321806;
  let val = 0;
  let prev = 0;
  let curr = 0;
  let sign = '+';
  
  const calculate = () => {
    if (sign == '+') {
      val += curr;
      prev = curr;
    }
    else if (sign == '-') {
      val -= curr;
      prev = -curr;
    }
    else {
      let v = sign == '*' ? (prev*curr) : (prev/curr);
      if (sign == '/') v = v < 0 ? Math.ceil(v) : Math.floor(v);
      val = (val-prev) + v;
      prev = v;
    }
  }
  
  for (const ch of s) {
    if (ch === ' ') continue;
    if (ch == '+' || ch == '-' || ch == '*' || ch == '/') {
      calculate();
      sign = ch;
      curr = 0;
    }
    else {
      curr = curr * 10 + (ch.charCodeAt(0)-'0'.charCodeAt(0));
    }
  }
  calculate();
  return val;
};



