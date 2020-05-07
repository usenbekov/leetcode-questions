/*
895. Maximum Frequency Stack
*/

var FreqStack = function() {
  this.freqMap = new Map();
  this.byFreq = [[]];
  this.freq = 0;
};

/** 
 * @param {number} x
 * @return {void}
 */
FreqStack.prototype.push = function(x) {
  this.freqMap.set(x, (this.freqMap.get(x) || 0) + 1);
  this.freq = Math.max(this.freq, this.freqMap.get(x));
  
  const myFreq = this.freqMap.get(x);
  if (!this.byFreq[myFreq]) this.byFreq[myFreq] = [];
  this.byFreq[myFreq].push(x);
};

/**
 * @return {number}
 */
FreqStack.prototype.pop = function() {
  const val = this.byFreq[this.freq].pop();
  if (this.byFreq[this.freq].length === 0) {
    this.freq--;
  }
  this.freqMap.set(val, this.freqMap.get(val)-1);
  return val;
};

/** 
 * Your FreqStack object will be instantiated and called as such:
 * var obj = new FreqStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 */
