/*
133. Clone Graph
*/

/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function(node) {
  //return solution1(node);
  return solution2(node);
};

var solution2 = function(root) {
  if (!root) return null;
  const clonedMap = new Map();
  const cloneNode = (n) => {
    if (clonedMap.has(n)) return clonedMap.get(n);
    clonedMap.set(n, new Node(n.val, []));
    return clonedMap.get(n);
  }
  const stack = [root];
  while (stack.length > 0) {
    const top = stack.pop();
    const cloned = cloneNode(top);
    for (const nei of top.neighbors) {
      if (!clonedMap.has(nei)) stack.push(nei);
      cloned.neighbors.push(cloneNode(nei));
    }
  }
  return clonedMap.get(root);
}

var solution1 = function(node, clonedMap = new Map()) {
  if (!node) return null;
  
  let cloned = clonedMap.get(node);
  if (cloned) return cloned;
  cloned = new Node(node.val, []);
  clonedMap.set(node, cloned);
  
  for (const nei of node.neighbors) {
    cloned.neighbors.push(solution1(nei, clonedMap));
  }
  return cloned;
}



