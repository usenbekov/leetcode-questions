/*
79. Word Search
*/

/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
  const find = (wordIndex, i, j) => {
    if (wordIndex >= word.length) return true;
    if (i < 0 || j < 0 || i >= board.length || j >= board[i].length) return false;
    if (board[i][j] != word[wordIndex]) return false;
    
    board[i][j] = '-'
    const found = find(wordIndex+1, i-1, j) ||
      find(wordIndex+1, i+1, j) ||
      find(wordIndex+1, i, j-1) ||
      find(wordIndex+1, i, j+1);
    board[i][j] = word[wordIndex];
    return found;
  }
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (find(0, i, j)) return true;
    }
  }
  return false;
};


