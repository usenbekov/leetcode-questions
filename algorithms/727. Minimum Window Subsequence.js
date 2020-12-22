/**
 * @param {string} S
 * @param {string} T
 * @return {string}
 */
var minWindow = function(S, T) {
  let minwin = "";
  let ti = 0;
  for (let i = 0; i < S.length; i++) {
      if (S[i] == T[ti]) {
          ti++;
          // if all T cahracters found
          if (ti === T.length) {
              const end = i;
              // go backward to the beginning
              ti--;
              while (ti >= 0) {
                  if (T[ti] == S[i]) ti--;
                  i--;
              }
              const substr = S.substring(i+1, end+1);
              if (!minwin || substr.length < minwin.length) minwin = substr;
              
              ti = 0;
              i += 2;
          }
      }
  }
  return minwin;
};


