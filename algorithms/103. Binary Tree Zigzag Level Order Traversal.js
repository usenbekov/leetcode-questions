/*
103. Binary Tree Zigzag Level Order Traversal

Given a binary tree, return the zigzag level order traversal of its nodes' values. (ie, from left to right, then right to left for the next level and alternate between).

For example:
Given binary tree [3,9,20,null,null,15,7],

    3
   / \
  9  20
    /  \
   15   7
return its zigzag level order traversal as:

[
  [3],
  [20,9],
  [15,7]
]
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var zigzagLevelOrder = function(root) {
  return solution1(root);
  //return solution2(root);
};

// DFS O(n), O(H)
const solution1 = (root, level = 0, nodes = []) => {
  if (!root) return nodes;
  if (!nodes[level]) nodes[level] = [];
  
  if (level % 2 === 0) nodes[level].push(root.val);
  else nodes[level].unshift(root.val);
  
  zigzagLevelOrder1(root.left, level+1, nodes);
  zigzagLevelOrder1(root.right, level+1, nodes);
  
  return nodes;
}

// BFS O(n), O(n)
const solution2 = (root) => {
  if (!root) return [];
  const queue = [root];
  const nodes = [];
  while (queue.length > 0) {
      nodes.push([]);
      const level = nodes.length-1;
      const len = queue.length;
      for (let i = 0; i < len; i++) {
          const top = queue.shift();
          if (top.left) queue.push(top.left);
          if (top.right) queue.push(top.right);
          
          if (level % 2 === 0) nodes[level].push(top.val);
          else nodes[level].unshift(top.val);
      }
  }
  return nodes;
}




