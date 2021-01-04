/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
var isAlienSorted = function(words, order) {
  const indxs = new Map();
  for (let i = 0; i < order.length; i++)
      indxs.set(order[i], i);
  
  const isSorted = (w0, w1) => {
      const len = Math.min(w0.length, w1.length);
      for (let i = 0; i < len; i++) {
          if (indxs.get(w0[i]) === indxs.get(w1[i])) continue;
          return indxs.get(w0[i]) < indxs.get(w1[i]);
      }
      return w0.length <= w1.length;
  }
  
  for (let i = 1; i < words.length; i++) {
      if (!isSorted(words[i-1], words[i]))
          return false;
  }
  
  return true;
};

