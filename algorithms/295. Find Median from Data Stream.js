/*
295. Find Median from Data Stream
*/

/**
 * initialize your data structure here.
 */
var MedianFinder = function() {
  this.left = new Heap();
  this.right = new Heap((a, b) => { return b-a; });
};

/** 
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function(num) {
  this.left.offer(num);
  this.right.offer(this.left.poll());
  if (this.left.size < this.right.size) {
    this.left.offer(this.right.poll());
  }
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function() {
  if (this.left.size === this.right.size) {
    return (this.left.peek() + this.right.peek()) / 2;
  }
  return this.left.peek();
};

/** 
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */



const Heap = function (comparator) {
  this.data = [null];
  this.comparator = comparator || function(a, b) { return a-b; };
  this.size = 0;
}
Heap.prototype.toArray = function() {
  return this.data.slice(1, this.size+1);
}
Heap.prototype.peek = function() {
  if (this.size < 1) return null;
  return this.data[1];
}
Heap.prototype.offer = function(item) {
  this.data[++this.size] = item;
  let pos = this.size;
  while(this.hasParent(pos) && 
        this.isBigger(pos, this.parent(pos))
       ) {
    this.swipe(pos, this.parent(pos));
    pos = this.parent(pos);
  }
}
Heap.prototype.poll = function() {
  if (this.size < 1) return null;
  const top = this.peek();
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






