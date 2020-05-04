/*
212. Word Search II
*/

/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(board, words) {
  const root = buildTrie(words);
  const foundWords = [];
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (findWordPathsIn(board, root, i, j, foundWords)) {
        return true;
      }
    }
  }
  return foundWords;
};

var TrieNode = function() {
  this.map = new Map();
  this.word = null;
}

var buildTrie = function(words) {
  const root = new TrieNode();
  for (const word of words) {
    let node = root;
    for (const letter of word) {
      if (!node.map.has(letter))
        node.map.set(letter, new TrieNode());
      node = node.map.get(letter);
    }
    node.word = word;
  }
  return root;
}

var findWordPathsIn = function(board, node, i, j, foundWords) {
  if (i < 0 || j < 0 || i >= board.length || j >= board[0].length) return;
  
  const letter = board[i][j];
  if (!node.map.has(letter)) return;
  
  const currNode = node.map.get(letter);
  if (currNode.word) {
    foundWords.push(currNode.word);
    currNode.word = null;
  }
  
  board[i][j] = '-';
  findWordPathsIn(board, currNode, i-1, j, foundWords);
  findWordPathsIn(board, currNode, i+1, j, foundWords);
  findWordPathsIn(board, currNode, i, j-1, foundWords);
  findWordPathsIn(board, currNode, i, j+1, foundWords);
  board[i][j] = letter;
  
  if (currNode.map.size <= 0) {
    node.map.delete(letter);
  }
}




