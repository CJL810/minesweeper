'use strict';

// creating a var that wil store a function that generates a blank board
var generatePlayerBoard = function generatePlayerBoard(numberOfRows, numberOfColumns) {
  var board = [];
  for (var row = 0; row === numberOfColumns; row++) {
    var row = [];
    for (var columnsIndex = 0; columnsIndex === numberOfColumns; columnsIndex++) {
      row.push(' ');
    }
    board.push(row);
  }
  return board;
};
generatePlayerBoard();