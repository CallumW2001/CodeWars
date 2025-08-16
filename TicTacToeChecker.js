//DONE

function isSolved(board) {
  for (let row of board) {
    if (row.every((cell) => cell === 1)) return 1;
    if (row.every((cell) => cell === 2)) return 2;
  }

  for (let col = 0; col < 3; col++) {
    if (board[0][col] === board[1][col] && board[1][col] === board[2][col]) {
      if (board[0][col] === 1) return 1;
      if (board[0][col] === 2) return 2;
    }
  }

  if (board[0][0] === board[1][1] && board[1][1] === board[2][2]) {
    if (board[0][0] === 1) return 1;
    if (board[0][0] === 2) return 2;
  }
  if (board[0][2] === board[1][1] && board[1][1] === board[2][0]) {
    if (board[0][2] === 1) return 1;
    if (board[0][2] === 2) return 2;
  }

  for (let row of board) {
    if (row.includes(0)) return -1;
  }

  return 0;
}

isSolved([
  [0, 0, 1],
  [0, 1, 2],
  [2, 1, 0],
]);
