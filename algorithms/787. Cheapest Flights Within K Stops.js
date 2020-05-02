/*
787. Cheapest Flights Within K Stops

There are n cities connected by m flights. Each flight starts from city u and arrives at v with a price w.

Now given all the cities and flights, together with starting city src and the destination dst, your task is to find the cheapest price from src to dst with up to k stops. If there is no such route, output -1.

Example 1:
Input: 
n = 3, edges = [[0,1,100],[1,2,100],[0,2,500]]
src = 0, dst = 2, k = 1
Output: 200
Explanation: 
The graph looks like this:
https://s3-lc-upload.s3.amazonaws.com/uploads/2018/02/16/995.png

The cheapest price from city 0 to city 2 with at most 1 stop costs 200, as marked red in the picture.
Example 2:
Input: 
n = 3, edges = [[0,1,100],[1,2,100],[0,2,500]]
src = 0, dst = 2, k = 0
Output: 500
Explanation: 
The graph looks like this:
https://s3-lc-upload.s3.amazonaws.com/uploads/2018/02/16/995.png

The cheapest price from city 0 to city 2 with at most 0 stop costs 500, as marked blue in the picture.
Note:

The number of nodes n will be in range [1, 100], with nodes labeled from 0 to n - 1.
The size of flights will be in range [0, n * (n - 1) / 2].
The format of each flight will be (src, dst, price).
The price of each flight will be in the range [1, 10000].
k is in the range of [0, n - 1].
There will not be any duplicated flights or self cycles.
*/

/**
 * @param {number} n
 * @param {number[][]} flights
 * @param {number} src
 * @param {number} dst
 * @param {number} K
 * @return {number}
 */
var findCheapestPrice = function(n, flights, src, dst, K) {
  const prices = getPricesFrom(flights);
  const dests = new Heap((a, b) => { return b.totalPrice-a.totalPrice });
  dests.push(new Destination(src, -1, 0));
  while (dests.size > 0) {
    const dest = dests.pop();
    if (dest.toCity === dst) return dest.totalPrice;
    if (dest.stopCount >= K) continue;
    
    const destPrices = prices.get(dest.toCity) || [];
    for (const destPrice of destPrices) {
      dests.push(new Destination(
        destPrice.city,
        dest.stopCount+1,
        dest.totalPrice + destPrice.val,
      ));
    }
  }
  return -1;
};

var getPricesFrom = function(flights) {
  const prices = new Map();
  for (const flight of flights) {
    if (!prices.has(flight[0])) prices.set(flight[0], []);
    prices.get(flight[0]).push(new Price(flight[2], flight[1]));
  }
  return prices;
}

var Price = function(val, city) {
  this.val = val;
  this.city = city;
}

var Destination = function(toCity, stopCount, totalPrice) {
  this.toCity = toCity;
  this.stopCount = stopCount;
  this.totalPrice = totalPrice;
}




const Heap = function (comparator) {
  this.data = [null];
  this.comparator = comparator || function(a, b) { return a-b; };
  this.size = 0;
}
Heap.prototype.toArray = function() {
  return this.data.slice(1, this.size+1);
}
Heap.prototype.top = function() {
  if (this.size < 1) return null;
  return this.data[1];
}
Heap.prototype.push = function(item) {
  this.data[++this.size] = item;
  let pos = this.size;
  while(this.hasParent(pos) && 
        this.isBigger(pos, this.parent(pos))
       ) {
    this.swipe(pos, this.parent(pos));
    pos = this.parent(pos);
  }
}
Heap.prototype.pop = function() {
  if (this.size < 1) return null;
  const top = this.top();
  this.swipe(1, this.size--);
  this.heapify(1);
  return top;
}
Heap.prototype.parent = function(pos) { return Math.floor(pos/2); }
Heap.prototype.left = function(pos) { return pos*2; }
Heap.prototype.right = function(pos) { return pos*2+1; }

Heap.prototype.hasParent = function(pos) { return this.parent(pos) > 0; }
Heap.prototype.hasLeft = function(pos) { return this.left(pos) <= this.size; }
Heap.prototype.hasRight = function(pos) { return this.right(pos) <= this.size; }

Heap.prototype.swipe = function(pos0, pos1) {
  const temp = this.data[pos0];
  this.data[pos0] = this.data[pos1];
  this.data[pos1] = temp;
}

Heap.prototype.isBigger = function(pos0, pos1) {
  return this.comparator(this.data[pos0], this.data[pos1]) > 0 ? true : false;
}

Heap.prototype.heapify = function(pos) {
  if (!this.hasLeft(pos)) return;

  if (!this.hasRight(pos) ||
      !this.isBigger(this.right(pos), this.left(pos))
     ) {
    if (this.isBigger(this.left(pos), pos)) {
      this.swipe(pos, this.left(pos));
      this.heapify(this.left(pos));
    }
  } else if (this.hasRight(pos)) {
    if (this.isBigger(this.right(pos), pos)) {
      this.swipe(pos, this.right(pos));
      this.heapify(this.right(pos));
    }
  }
}


