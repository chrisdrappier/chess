class Board {
  constructor(){
    this.pieces = Array.apply(null, Array(32)).map(function (val, index) {
      if (index > 15) {
        return new Piece('black')
      } else if (index <= 15 && index > 7) {
        return new Pawn('white')
      } else {
        return new Piece('white')
      }
    })
  }
}

class Piece {
  constructor(color){
    this.color = color
  }
}

class Pawn extends Piece {

}

class Rook extends Piece {

}

class Bishop extends Piece {

}

class Knight extends Piece {

}

class Queen extends Piece {

}

class King extends Piece {

}

module.exports = {
  Board, Piece, Pawn
}
