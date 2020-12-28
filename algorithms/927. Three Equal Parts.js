/**
 * @param {number[]} A
 * @return {number[]}
 */
var threeEqualParts = function(A) {
  const ones = [];
  for (let i = 0; i < A.length; i++)
      if (A[i] === 1)
          ones.push(i);
  
  // if all zeroes
  if (ones.length < 1) return [0, A.length-1];
  
  // if ones can't be divided into equal parts
  // then parts never will be equal to each other
  if (ones.length % 3 !== 0) return [-1, -1];
  
  // check if every part can have equal trailing zeroes
  const partLen = ones.length / 3;
  const trailingZeroes = A.length - ones[ones.length-1];
  if (ones[partLen] - ones[partLen-1] < trailingZeroes ||
     ones[partLen*2] - ones[partLen*2-1] < trailingZeroes) return [-1, -1];
  
  // check if distances between ones are equal
  for (let i = 1; i < partLen; i++) {
      const dist0 = ones[i] - ones[i-1];
      const dist1 = ones[i+partLen] - ones[i+partLen-1]
      const dist2 = ones[i+partLen*2] - ones[i+partLen*2-1]
      if (dist0 !== dist1 || dist1 !== dist2) return [-1, -1];
  }
  
  return [ones[partLen-1]+trailingZeroes-1, ones[partLen*2-1]+trailingZeroes];
};