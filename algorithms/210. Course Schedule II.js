/*
210. Course Schedule II
*/

/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function(numCourses, prerequisites) {
  const indegrees = new Array(numCourses).fill(0);
  const neighs = new Map();
  for (const pre of prerequisites) {
    indegrees[pre[0]]++;
    if (!neighs.has(pre[1])) neighs.set(pre[1], []);
    neighs.get(pre[1]).push(pre[0]);
  }
  
  const queue = [];
  for (let i = 0; i < numCourses; i++) {
    if (indegrees[i] === 0) queue.push(i);
  }
  
  const res = [];
  while (queue.length > 0) {
    const curr = queue.pop();
    res.push(curr);
    
    const _neighs = neighs.get(curr) || [];
    for (const nei of _neighs) {
      if (--indegrees[nei] <= 0) {
        queue.push(nei);
      }
    }
  }
  if (res.length < numCourses) return [];
  return res;
};


