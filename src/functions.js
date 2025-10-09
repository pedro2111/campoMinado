const createCell = (row, column) => ({
    row,
    column,
    opened: false,
    flagged: false,
    mined: false,
    exploded: false,
    nearMines: 0,
})

const createBoard = (rows, columns) => {
    return Array(rows).fill(0).map((_, row) => {
        return Array(columns).fill(0).map((_, column) => {
            return createCell(row, column)
        })
    })
}


const spreadMines = (board, minesAmount) => {
    const rows = board.length
    const columns = board[0].length
    let minesPlanted = 0
    while (minesPlanted < minesAmount) {
        const row = Math.floor(Math.random() * rows)
        const column = Math.floor(Math.random() * columns)
        if (!board[row][column].mined) {
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
//função para clonar o tabuleiro
const cloneBoard = (board) => {
    return board.map(rows => {
        return rows.map(cell => {
            return { ...cell }
        })
    })
}

const getNeighbors = (board, row, column) => {
    const neighbors = []
    const rows = [row - 1, row, row + 1]
    const columns = [column - 1, column, column + 1]

    rows.forEach(r => {
        columns.forEach(c => {
            const validRow = r >= 0 && r < board.length
            const validColumn = c >= 0 && c < board[0].length

            if (validRow && validColumn && !(r === row && c === column)) {
                neighbors.push(board[r][c])
            }
        })
    })
    return neighbors
}
//função para verificar se a célula está segura
const safeNeighborhood = (board, row, column) => {
    const safes = (result, neighbor) => result && !neighbor.mined

    return getNeighbors(board, row, column).reduce(safes, true)//retorna true se todos os vizinhos não são minados
}

const openField = (board, row, column) => {
    const field = board[row][column]
    if (!field.opened) {//se a célula não estiver aberta
        field.opened = true
        if (field.mined) {
            field.exploded = true
        } else if (safeNeighborhood(board, row, column)) { //se a célula estiver segura
            getNeighbors(board, row, column).forEach(neighbor => {
                openField(board, neighbor.row, neighbor.column)
            })
        } else {//se a célula não estiver segura
            field.nearMines = getNeighbors(board, row, column).filter(neighbor => neighbor.mined).length //contar minas vizinhas
        }

    }
}

const fields = board => [].concat(...board)

const hadExplosion = board => fields(board).filter(field => field.exploded).length > 0


const penddingFields = field => (field.mined && !field.flagged) || (!field.mined && !field.opened)//retorna true se a célula é mina e não está sinalizada ou se a célula não é mina e não está aberta

const wonGame = board => fields(board).filter(penddingFields).length === 0//retorna true se não houver células pendentes

const showMines = board => fields(board).filter(field => field.mined).forEach(field => field.opened = true)

export { createMinedBoard, cloneBoard, safeNeighborhood, getNeighbors, openField, hadExplosion, wonGame, showMines }