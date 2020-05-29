/*
207. Course Schedule
*/

/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
    
  let len = prerequisites.length;
  let indegrees = [];
  
  // count indegrees of every course
  for (let i = 0; i < len; i++) {
      let ind = prerequisites[i][0];
      indegrees[ind] = (indegrees[ind] || 0) + 1;
  }
  
  // add to queue courses with no prerequiste (last nodes)
  let queue = [];
  for (let i = 0; i < numCourses; i++) {
      if (!indegrees[i]) {
          indegrees[i] = 0;
          queue.push(i);
      }
  }
  
  let count = queue.length;
  while(queue.length > 0) {
      const course = queue.pop();
      for (let i = 0; i < len; i++) {
          const pre = prerequisites[i];
          if (course === pre[1]) {
              if(--indegrees[pre[0]] === 0) {
                  queue.push(pre[0]);
                  count++;
              }
          }
      }
  }
  
  return count === numCourses;
};
