class TicTacToe {
  // 상태?
  // - 게임판
  // 현재 플레이어
  // 동작? 1. 플레이어가 바뀌는 동작, 2. 게임이 끝나는 동작(누가이겼는지)

  board = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
  ];

  player = "X";

  turn({ row, col }) {
    this.board[row][col] = this.player;
    this.player = this.player === "X" ? "O" : "X";
  }
  // 현재 플레이어에 대한 표시르 게임판의 해당 위치에 넣어주고 현재프레이어 변경
  checkWinner() {
    for (i = 0; i < 3; i++) {
      if (this.board[i][0] !== null &&
        this.board[i][0] === this.board[i][1] &&
        this.board[i][1] === this.board[i][2]
      ) {
        return this.board[i][0];
      }

    }
  }
}

// const t = new TicTacToe();
// t.turn({ row: 0, col: 0 });
// t.turn({ row: 1, col: 1 });
// t.turn({ row: 0, col: 2 });
// t.turn({ row: 2, col: 2 });
// t.turn({ row: 0, col: 1 });
// console.log(t.board);
// console.log(t.checkWinner());

const game = new TicTacToe();

const rowEls = document.querySelectorAll('.boadr__row');
rowEls.forEach((rowEl, rowIndex) => {
  const colEls = rowEl.querySelectorAll('.board__col');
  colEls.forEach((colEl, colIndex)=>{
    colEl.addEventListener('click', e=>{
      game.turn({row: rowIndex, col: colIndex});
      draw();
    })
  })
});

function draw(){
  game.board.forEach((rowArr, rowIndex)=>{
    const rowEl = rowEls[rowIndex];
    const colEls = rowEls.querySelectorAll('.board__col');
    rowArr.forEach((col, colIndex)=>{
      colEls[colIndex].textContent = col;
    })
  })
  const winner = game.checkWinner();
  if(winner){
    document.querySelector('.winner').textContent = winner;
  }
}