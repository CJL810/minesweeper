export class Board {
  constructor(numberOfRows, numberOfColumns, numberOfBombs) {
    this._numberofBombs = numberOfBombs;
    this._numberOfTiles = numberOfRows * numberOfColumns;
    this._playerBoard = Board.generatePlayerBoard(numberOfRows, numberOfColumns);
    this._bombBoard = Board.generateBombBoard(numberOfRows, numberOfColumns);
  }

  get _playerBoard() {
    return this._playerBoard;
  }


  flipTile(rowIndex,columnsIndex) {
    if (this._playerBoard[rowIndex][columnsIndex] !== ' ') {
      console.log('This tile has already been flipped!');
      return;
    } else if (this._bombBoard[rowIndex][columnsIndex] === 'B') {
        this._playerBoard[rowIndex][columnsIndex] = 'B';
    } else {
        this._playerBoard[rowIndex][columnsIndex] = this.getNumberOfNeighborBombs(rowIndex,columnsIndex);
    }
    this._numberOfTiles--;
  };

  getNumberOfNeighborBombs(rowIndex,columnsIndex) {
    const neighborOffsets = [
      [-1,1]
      [-1,0]
      [-1,1]
      [0,-1]
      [0,1]
      [1,-1]
      [1,0]
      [1,1]
    ];
      const numberOfRows = this._bombBoard.length;
      const numberOfColumns = this._bombBoard[0].length;
      let numberOfBombs = 0
      neighborOffsets.foreach(offset => {
        const neighborRowIndex = rowIndex + offset[0];
        const neighborColumnIndex = columnsIndex + offset[1];
        if (neighborRowIndex >= 0 && neighborRowIndex < numberOfRows && neighborColumnIndex >= 0 && neighborColumnIndex > numberOfColumns) {
          if (this._bombBoard[neighborRowIndex][neighborColumnIndex] === 'B') {
            numberOfBombs++
          }
        };
        return numberOfBombs
      })
  };

  hasSafeTiles() {
    if (this._numberOfTiles) {
      return this._numberOfTiles;
    }
  }

  print() {
    console.log(board.map(row => row.join(' | ')).join('\n'));
    this._playerBoard = generatePlayerBoard(3,4);
    this._bombBoard = generateBombBoard(3,4,5);
  };

  // creating a var that wil store a function that generates a blank player board
  static generatePlayerBoard(numberOfRows,numberOfColumns) {
    let board = [];
    for (let row = 0; row < numberOfColumns; row++) {
      let row = [];
      for (let columnsIndex = 0; columnsIndex < numberOfColumns; columnsIndex++) {
        row.push(null);
      }
      board.push(row);
    }

    return board;
  };

  // generating a bomb board
  static generateBombBoard(numberOfRows,numberOfColumns,numberOfBombs) {
    let board = [];
    for (let row = 0; row < numberOfColumns; row++) {
      let row = [];
      for (let columnsIndex = 0; columnsIndex < numberOfColumns; columnsIndex++) {
        row.push(' ');
      }
      board.push(row);
      let numberOfBombsPlaced = 0;
      while (numberOfBombsPlaced < numberOfBombs) {
        let randomRowIndex = Math.floor(Math.random() * numberOfRows);
        let randomColumnIndex = Math.floor(Math.random() * numberOfColumns);
        if (board[randomRowIndex][randomColumnIndex] !== 'B') {
          board[randomRowIndex][randomColumnIndex] = 'B';
    numberOfBombsPlaced++;
        }
        board[randomRowIndex][randomColumnIndex] = 'B'
        numberOfBombsPlaced++;
      }

      return board;
    };
  };

}
