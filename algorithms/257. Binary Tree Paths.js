/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
  // return solution1(root);
  // return solution2(root);
  return solution3(root);
};

var solution1 = function(root, path = '', res = []) {
  if (!root) return res;
  path += (path.length > 0 ? '->' : '') + root.val;
  if (!root.left && !root.right) {
      res.push(path);
  } else {
      solution1(root.left, path, res);
      solution1(root.right, path, res);
  }
  return res;
}

var solution2 = function(root) {
  if (!root) return [];
  const res = [];
  const stack = [root];
  const top = () => { return stack[stack.length-1]; }
  while (top().right) stack.push(top().right);
  
  const lasts = [];
  const last = () => { return lasts.length < 1 ? null : lasts[lasts.length-1]; }
  
  while(stack.length > 0) {
      if (!top().left && !top().right) {
          res.push(stack.map(val => val.val).join('->'));
      }
      if (top().left) {
          lasts.push(top());
          stack.push(top().left);
          while (top().right) {
              stack.push(top().right);
          }
      } else {
          stack.pop();
      }
      while (last() && last() == top()) {
          stack.pop();
          lasts.pop();
      }
  }
  return res;
}

var solution3 = function(root) {
  if (!root) return [];
  const res = [];
  const paths = [root.val+''];
  const stack = [root];
  while (stack.length > 0) {
      const top = stack.pop();
      const path = paths.pop();
      if (!top.left && !top.right) res.push(path);
      if (top.left) {
          stack.push(top.left);
          paths.push(path + '->' + top.left.val);
      }
      if (top.right) {
          stack.push(top.right);
          paths.push(path + '->' + top.right.val);
      }
  }
  return res;
}

