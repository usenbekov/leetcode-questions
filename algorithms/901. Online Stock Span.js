/*
901. Online Stock Span
*/

var StockSpanner = function() {
  this.prices = [Number.MAX_VALUE];
  this.nexts = [0];
};

/** 
 * @param {number} price
 * @return {number}
 */
StockSpanner.prototype.next = function(price) {
  let counter = 1;
  while(this.prices[this.prices.length-1] <= price) {
    this.prices.pop();
    counter += this.nexts.pop();
  }
  this.prices.push(price);
  this.nexts.push(counter);
  return this.nexts[this.nexts.length-1];
};

/** 
 * Your StockSpanner object will be instantiated and called as such:
 * var obj = new StockSpanner()
 * var param_1 = obj.next(price)
 */
