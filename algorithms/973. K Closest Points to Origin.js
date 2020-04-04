/*
973. K Closest Points to Origin

We have a list of points on the plane.  Find the K closest points to the origin (0, 0).

(Here, the distance between two points on a plane is the Euclidean distance.)

You may return the answer in any order.
The answer is guaranteed to be unique (except for the order that it is in.)


Example 1:

Input: points = [[1,3],[-2,2]], K = 1
Output: [[-2,2]]
Explanation: 
The distance between (1, 3) and the origin is sqrt(10).
The distance between (-2, 2) and the origin is sqrt(8).
Since sqrt(8) < sqrt(10), (-2, 2) is closer to the origin.
We only want the closest K = 1 points from the origin, so the answer is just [[-2,2]].
Example 2:

Input: points = [[3,3],[5,-1],[-2,4]], K = 2
Output: [[3,3],[-2,4]]
(The answer [[-2,4],[3,3]] would also be accepted.)


Note:

1 <= K <= points.length <= 10000
-10000 < points[i][0] < 10000
-10000 < points[i][1] < 10000
*/
/**
 * @param {number[][]} points
 * @param {number} K
 * @return {number[][]}
 */
var kClosest = function(points, K) {
    //return solution1(points, K);
    //return solution2(points, K);
    return solution3(points, K);
  };
  
  // O(n log(k)) MaxHeap
  var solution3 = (points, K) => {
    const heap = new MaxHeap((a, b) => {
      return (a[0]*a[0]+a[1]*a[1]) - (b[0]*b[0]+b[1]*b[1]); 
    });
    for (const point of points) {
      heap.push(point);
      if (heap.size > K) heap.pop();
    }
    return heap.toArray();
  }
  
  const MaxHeap = function (comparator) {
    this.data = [null];
    this.comparator = comparator || function(a, b) { return a-b; };
    this.size = 0;
  }
  MaxHeap.prototype.toArray = function() {
    return this.data.slice(1, this.size+1);
  }
  MaxHeap.prototype.top = function() {
    if (this.size < 1) return null;
    return this.data[1];
  }
  MaxHeap.prototype.push = function(item) {
    this.data[++this.size] = item;
    let pos = this.size;
    while(this.hasParent(pos) && 
          this.isBigger(pos, this.parent(pos))
         ) {
      this.swipe(pos, this.parent(pos));
      pos = this.parent(pos);
    }
  }
  MaxHeap.prototype.pop = function() {
    if (this.size < 1) return null;
    const top = this.top();
    this.swipe(1, this.size--);
    this.heapify(1);
    return top;
  }
  MaxHeap.prototype.parent = function(pos) { return Math.floor(pos/2); }
  MaxHeap.prototype.left = function(pos) { return pos*2; }
  MaxHeap.prototype.right = function(pos) { return pos*2+1; }
    
  MaxHeap.prototype.hasParent = function(pos) { return this.parent(pos) > 0; }
  MaxHeap.prototype.hasLeft = function(pos) { return this.left(pos) <= this.size; }
  MaxHeap.prototype.hasRight = function(pos) { return this.right(pos) <= this.size; }
  
  MaxHeap.prototype.swipe = function(pos0, pos1) {
    const temp = this.data[pos0];
    this.data[pos0] = this.data[pos1];
    this.data[pos1] = temp;
  }
  
  MaxHeap.prototype.isBigger = function(pos0, pos1) {
    return this.comparator(this.data[pos0], this.data[pos1]) > 0 ? true : false;
  }
  
  MaxHeap.prototype.heapify = function(pos) {
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
  
  
  
  
  // O(n) Divide and Conquer
  var solution2 = (points, K) => {
      const dist = (i) => {
          return points[i][0]*points[i][0] + points[i][1]*points[i][1];
      }
      const swap = (i, j) => {
          const temp = points[i];
          points[i] = points[j]
          points[j] = temp;
      }
      const makePivotSort = (low, high) => {
          const origLow = low;
          const pivotDist = dist(origLow);
          low++;
          while (true) {
              while(low < high && dist(low) < pivotDist) {
                  low++;
              }
              while(low <= high && dist(high) >= pivotDist) {
                  high--;
              }
              if (low >= high) break;
              swap(low, high);
          }
          swap(origLow, high);
          return high;
      }
      
      const sort = (low, high, K) => {
          if (low >= high) return;
          let pivot = low + Math.round(Math.random()*(high-low));
          swap(low, pivot);
          let mid = makePivotSort(low, high, pivot);
          let leftLen = mid-low+1;
          if (leftLen > K) sort(low, mid-1, K);
          else if (leftLen < K) sort(mid+1, high, K - leftLen);
      }
      sort(0, points.length-1, K);
      return points.slice(0, K);
  }
  
  
  
  
  // O(n log(n))
  var solution1 = (points, K) => {
      if (K >= points.length) return points;
      const dists = [];
      for (const point of points) {
          dists.push({
              distance: Math.sqrt(point[0]*point[0] + point[1]*point[1]),
              point: point,
          });
      }
      
      dists.sort((a, b) => {
          return a.distance - b.distance;
      });
      
      const ans = [];
      for (let i = 0; i < K; i++) {
          ans.push(dists[i].point);
      }
      return ans;
  }
  
  


