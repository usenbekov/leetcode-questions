/*
348. Design Tic-Tac-Toe
*/

/**
 * Initialize your data structure here.
 * @param {number} n
 */
var TicTacToe = function(n) {
  this.n = n;
  this.players = [
    null,
    new Player(n),
    new Player(n),
  ];
};

var Player = function(n) {
  this.rows = new Array(n).fill(0);
  this.cols = new Array(n).fill(0);
  this.diagonal1 = 0;
  this.diagonal2 = 0;
}

/**
 * Player {player} makes a move at ({row}, {col}).
        @param row The row of the board.
        @param col The column of the board.
        @param player The player, can be either 1 or 2.
        @return The current winning condition, can be either:
                0: No one wins.
                1: Player 1 wins.
                2: Player 2 wins. 
 * @param {number} row 
 * @param {number} col 
 * @param {number} player
 * @return {number}
 */
TicTacToe.prototype.move = function(row, col, player) {
  const currPlayer = this.players[player];
  if (++currPlayer.rows[row] === this.n) return player;
  if (++currPlayer.cols[col] === this.n) return player;
  if (row === col && ++currPlayer.diagonal1 === this.n) return player;
  if (row+col === this.n-1 && ++currPlayer.diagonal2 === this.n) return player;
  return 0;
};

/** 
 * Your TicTacToe object will be instantiated and called as such:
 * var obj = new TicTacToe(n)
 * var param_1 = obj.move(row,col,player)
 */
