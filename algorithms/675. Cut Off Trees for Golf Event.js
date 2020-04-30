/*
675. Cut Off Trees for Golf Event

You are asked to cut off trees in a forest for a golf event. The forest is represented as a non-negative 2D map, in this map:

0 represents the obstacle can't be reached.
1 represents the ground can be walked through.
The place with number bigger than 1 represents a tree can be walked through, and this positive number represents the tree's height.
In one step you can walk in any of the four directions top, bottom, left and right also when standing in a point which is a tree you can decide whether or not to cut off the tree.

You are asked to cut off all the trees in this forest in the order of tree's height - always cut off the tree with lowest height first. And after cutting, the original place has the tree will become a grass (value 1).

You will start from the point (0, 0) and you should output the minimum steps you need to walk to cut off all the trees. If you can't cut off all the trees, output -1 in that situation.

You are guaranteed that no two trees have the same height and there is at least one tree needs to be cut off.

Example 1:

Input: 
[
 [1,2,3],
 [0,0,4],
 [7,6,5]
]
Output: 6
 

Example 2:

Input: 
[
 [1,2,3],
 [0,0,0],
 [7,6,5]
]
Output: -1
 

Example 3:

Input: 
[
 [2,3,4],
 [0,0,5],
 [8,7,6]
]
Output: 6
Explanation: You started from the point (0,0) and you can cut off the tree in (0,0) directly without walking.
 

Constraints:

1 <= forest.length <= 50
1 <= forest[i].length <= 50
0 <= forest[i][j] <= 10^9
*/

/**
 * @param {number[][]} forest
 * @return {number}
 */
var cutOffTree = function(forest) {
  const trees = [];
  for (let i = 0; i < forest.length; i++) {
    for (let j = 0; j < forest[i].length; j++) {
      if (forest[i][j] > 1)
        trees.push(new Tree(i, j, forest[i][j]));
    }
  }
  trees.sort((tree1, tree2) => {
    return tree1.height - tree2.height;
  });
  
  let lastTree = new Tree(0, 0, forest[0][0]);
  let totalSteps = 0;
  for(const tree of trees) {
    const steps = countSteps(forest, lastTree, tree);
    if (steps < 0) return steps;
    totalSteps += steps;
    lastTree = tree;
  }
  return totalSteps;
};

var Tree = function(i, j, height) {
  this.i = i;
  this.j = j;
  this.height = height;
}

Tree.prototype.equals = function(tree) {
  return tree.i === this.i && tree.j === this.j;
}

Tree.prototype.getNeighbour = function(forest, x, y) {
  const i = this.i + x;
  const j = this.j + y;
  if (i < 0 || i >= forest.length || j < 0 || j >= forest[i].length) return null;
  return new Tree(i, j, forest[i][j]);
}

var countSteps = function(forest, fromTree, toTree) {
  const visitedTrees = [];
  for(let i = 0; i < forest.length; i++) { visitedTrees.push(new Array(forest[i].length).fill(false)); };
  visitedTrees[fromTree.i][fromTree.j] = true;
  const visited = (tree) => { return visitedTrees[tree.i][tree.j] };
  
  let steps = 0;
  let trees = [fromTree];
  while (trees.length > 0) {
    const newTrees = [];
    for (const tree of trees) {
      if (tree.equals(toTree)) return steps; // reached to destination
      
      const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]];
      for (const dir of directions) {
        const neighbour = tree.getNeighbour(forest, dir[0], dir[1]);
        if (neighbour && !visited(neighbour) && neighbour.height > 0) {
          newTrees.push(neighbour);
          visitedTrees[neighbour.i][neighbour.j] = true;
        }
      }
    }
    trees = newTrees;
    steps++;
  }
  return -1;
}


