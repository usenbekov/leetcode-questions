/*
743. Network Delay Time

There are N network nodes, labelled 1 to N.

Given times, a list of travel times as directed edges times[i] = (u, v, w), where u is the source node, v is the target node, and w is the time it takes for a signal to travel from source to target.

Now, we send a signal from a certain node K. How long will it take for all nodes to receive the signal? If it is impossible, return -1.

 

Example 1:
https://assets.leetcode.com/uploads/2019/05/23/931_example_1.png


Input: times = [[2,1,1],[2,3,1],[3,4,1]], N = 4, K = 2
Output: 2
 

Note:

N will be in the range [1, 100].
K will be in the range [1, N].
The length of times will be in the range [1, 6000].
All edges times[i] = (u, v, w) will have 1 <= u, v <= N and 0 <= w <= 100.
*/

/**
 * @param {number[][]} times
 * @param {number} N
 * @param {number} K
 * @return {number}
 */
var networkDelayTime = function(times, N, K) {
  const neighbors = createNeighbors(times);
  let distances = new Distances();
  distances.add(new Distance(K, 0));
  return getTotalTime(distances, neighbors, N);
};

var createNeighbors = function(times) {
  const neighbors = new Map();
  for (const edge of times) {
    if (!neighbors.has(edge[0])) neighbors.set(edge[0], []);
    neighbors.get(edge[0]).push(new Neighbor(edge[1], edge[2]));
  }
  return neighbors;
}

var getTotalTime = function(distances, neighbors, totalNodes) {
  const visited = new Set();
  let totalTravelTime = 0;
  while (distances.length() > 0) {
    const dist = distances.popShortest();
    if (visited.has(dist.toNode)) continue;
    visited.add(dist.toNode);
    totalTravelTime = Math.max(totalTravelTime, dist.val);
    
    const myNeighbors = neighbors.get(dist.toNode);
    if (!myNeighbors) continue;
    
    for (const neighbor of myNeighbors) {
      const newTime = dist.val + neighbor.distance;
      const oldTime = distances.getShortestValTo(neighbor.node);
      if (oldTime === undefined || newTime < oldTime) {
        distances.add(new Distance(neighbor.node, newTime));
      }
    }
  }
  return visited.size < totalNodes ? -1 : totalTravelTime;
}

var Neighbor = function(node, distance) {
  this.node = node;
  this.distance = distance;
}

var Distance = function(toNode, val) {
  this.toNode = toNode;
  this.val = val;
}

var Distances = function() {
  this.data = [];
  this.byNode = new Map();
}
Distances.prototype.length = function() {
  return this.data.length;
}
Distances.prototype.add = function(dist) {
  this.data.push(dist);
  this.byNode.set(dist.toNode, dist.val);
}
Distances.prototype.getShortestValTo = function(node) {
  return this.byNode.get(node);
}
Distances.prototype.getShortestIndex = function() {
  let shortestTime = Number.MAX_VALUE;
  let index = -1;
  for (let i = 0; i < this.data.length; i++) {
    if (this.data[i].val < shortestTime) {
      shortestTime = this.data[i].val;
      index = i;
    }
  }
  return index;
}
Distances.prototype.popShortest = function() {
  const index = this.getShortestIndex();
  if (index < 0) return null;
  const dist = this.data[index];
  this.data.splice(index, 1);
  return dist;
}



