/*
973. K Closest Points to Origin

We have a list of points on the plane.  Find the K closest points to the origin (0, 0).

(Here, the distance between two points on a plane is the Euclidean distance.)

You may return the answer in any order.  The answer is guaranteed to be unique (except for the order that it is in.)


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
  return kClosest2(points, K);
};

// O(n) Divide and Conquer
var kClosest2 = (points, K) => {
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
var kClosest1 = (points, K) => {
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


