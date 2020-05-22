/*
451. Sort Characters By Frequency
*/

/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
  //return solution1(s);
  return solution2(s);
};

// O(N)
var solution2 = function(s) {
  const counts = new Map();
  for (const ch of s) {
    counts.set(ch, 1+(counts.get(ch)||0));
  }
  
  const byCount = [];
  counts.forEach((count, ch) => {
    if (!byCount[count]) byCount[count] = [];
    byCount[count].push(ch);
  })
  
  let res = ""
  for (let i = byCount.length-1; i > 0; i--) {
    if (!byCount[i]) continue;
    for (const letter of byCount[i]) {
      for (let j = 0; j < i; j++) {
        res += letter;
      }
    }
  }
  
  return res;
}

// O(N logN)
var solution1 = function(s) {
  const freqList = [];
  const freqByChar = new Map();
  for (const ch of s) {
    if (!freqByChar.has(ch)) {
      freqByChar.set(ch, [ch, 0]);
      freqList.push(freqByChar.get(ch));
    }
    freqByChar.get(ch)[1]++;
  }
  
  freqList.sort((a, b) => {
    return b[1]-a[1];
  });
  
  const res = [];
  for (const obj of freqList) {
    for (let i = 0; i < obj[1]; i++) {
      res.push(obj[0]);
    }
  }
  
  return res.join('');
}



