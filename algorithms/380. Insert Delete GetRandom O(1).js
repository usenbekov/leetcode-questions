/*
380. Insert Delete GetRandom O(1)
*/

/*
arr = []
indexMap = {}

Insert:
1. arr.push(val);
2. indexMap[val] = arr.length-1;

Remove:
1. Swap the last value with indexMap[val] and pop
2. delete indexMap[val]

Random:
1. Gen random index from 0 to n
2. Return arr[index]

*/

/**
 * Initialize your data structure here.
 */
var RandomizedSet = function() {
  this.map = new Map();
  this.arr = [];
};

/**
 * Inserts a value to the set. Returns true if the set did not already contain the specified element. 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {
  if (this.map.has(val)) return false;
  this.map.set(val, this.arr.length);
  this.arr.push(val);
  return true;
};

/**
 * Removes a value from the set. Returns true if the set contained the specified element. 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) {
  if (!this.map.has(val)) return false;
  const index = this.map.get(val);
  this.arr[index] = this.arr[this.arr.length-1]
  this.map.set(this.arr[index], index);
  this.map.delete(val);
  this.arr.pop();
  return true;
};

/**
 * Get a random element from the set.
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {
  return this.arr[Math.floor(Math.random()*this.arr.length)];
};

/** 
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */
