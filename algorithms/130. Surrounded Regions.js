/*
130. Surrounded Regions
*/

/*
1. Iterate edges and dfs and mark all zeroes '-'
2. Iterate all nodes and mark '-':'O' all other 'X'
*/

/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function(board) {
  for (let i = 0; i < board.length; i++) {
    markAllOes(board, i, 0);
    markAllOes(board, i, board[i].length-1);
    if (i === 0) {
      for (let j = 1; j < board[0].length-1; j++) {
        markAllOes(board, 0, j);
        markAllOes(board, board.length-1, j);
      }
    }
  }
  
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      board[i][j] = board[i][j] == '-' ? 'O' : 'X';
    }
  }
};

var markAllOes = function(board, i, j) {
  if (i<0 || j<0 || i>=board.length || j>=board[i].length) return;
  if (board[i][j] != 'O') return;
  board[i][j] = '-';
  markAllOes(board, i-1, j);
  markAllOes(board, i+1, j);
  markAllOes(board, i, j-1);
  markAllOes(board, i, j+1);
}



