function gameBoard(){
    const board = []
    const row = 10
    for (let i = 0; i < row; i++){
        board[i] = []
        for (let j = 0; j < row; j++){
            board[i][j] = Cell();
        }
    }

}