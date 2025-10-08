const createCell = (row, column) => ({
    row,
    column,
    opened: false,
    flagged: false,
    mined: false,
    exploded: false,
    nearMines: 0,
})

const createBoard = (rows,columns) => {
    return Array(rows).fill(0).map((_, row) =>{
        return Array(columns).fill(0).map((_, column) => {
            return createCell(row, column)
        })
    })
}
    

const spreadMines = (board, minesAmount) => {
    const rows = board.length
    const columns = board[0].length
    let minesPlanted = 0
    while(minesPlanted < minesAmount){
        const row = Math.floor(Math.random() * rows)
        const column = Math.floor(Math.random() * columns)
        if(!board[row][column].mined){
            board[row][column].mined = true
            minesPlanted++
        }
    }
}

const createMinedBoard = (rows, columns, minesAmount) => {
    const board = createBoard(rows, columns)
    spreadMines(board, minesAmount)
    return board
}

export {createMinedBoard}