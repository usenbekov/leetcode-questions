/*
763. Partition Labels
*/

/**
 * @param {string} S
 * @return {number[]}
 */
var partitionLabels = function(S) {
  const mapIndexOf = (i) => {
    return S[i].charCodeAt(0) - 'a'.charCodeAt(0);
  }
  const maxs = new Array(26).fill(0);
  for (let i = 0; i < S.length; i++) {
    const ch = mapIndexOf(i);
    maxs[ch] = Math.max(maxs[ch], i);
  }
  const parts = [];
  let nextI = 0;
  let lastI = 0;
  for (let i = 0; i < S.length; i++) {
    nextI = Math.max(nextI, maxs[mapIndexOf(i)]);
    if (nextI === i) {
      parts.push(i+1-lastI);
      lastI = i+1;
    }
  }
  return parts;
};


