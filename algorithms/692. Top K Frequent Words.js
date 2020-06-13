/*
692. Top K Frequent Words
*/

/*
a. Sort and return first k element -> O(NlogN)

b. Heap O(NlogK)
1. count all words and store at counts[word] = count
2. iterate words and offer to Heap
3. if heap.size > k then heap.poll()
4. convert heap to array and return

*/

/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequent = function(words, k) {
  return solution1(words, k);
  //return solution2(words, k);
};

var solution1 = function(words, k) {
  const counts = new Map();
  const ans = [];
  for (const word of words) {
    const count = counts.get(word);
    counts.set(word, (count || 0) + 1);
    if (!count) ans.push(word);
  }
  
  ans.sort((a, b) => {
    const compare = counts.get(b) - counts.get(a);
    if (compare === 0) return a.localeCompare(b);
    return compare;
  });
  
  return ans.slice(0, k);
}

var solution2 = function(words, k) {
  const counts = new Map();
  for (const word of words) {
    counts.set(word, (counts.get(word) || 0) + 1);
  }
  
  const compareFn = (a, b) => {
    let comp = counts.get(b) - counts.get(a);
    if (comp === 0) return a.localeCompare(b);
    return comp;
  }
  const heap = new Heap(compareFn);
  
  counts.forEach((key, word) => {
    heap.offer(word);
    if (heap.size > k) heap.poll();
  });
  
  return heap.toArray().sort(compareFn);
}













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




