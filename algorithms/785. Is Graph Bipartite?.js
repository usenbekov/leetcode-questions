/*
785. Is Graph Bipartite?
*/

/**
 * @param {number[][]} graph
 * @return {boolean}
 */
var isBipartite = function(graph) {
  const nodeGroup = new Array(graph.length).fill(-1);
  for (let i = 0; i < graph.length; i++) {
    if (nodeGroup[i] > -1) continue;
    const stack = [i];
    nodeGroup[i] = 0;
    while (stack.length > 0) {
      const node = stack.pop();
      for (const nei of graph[node]) {
        if (nodeGroup[nei] < 0) {
          nodeGroup[nei] = nodeGroup[node] ^ 1;
          stack.push(nei);
        }
        else if (nodeGroup[node] === nodeGroup[nei]) {
          return false;
        }
      }
    }
  }
  
  return true;
};


