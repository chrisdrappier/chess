class Board {
  constructor(){
    this.pieces = Array.apply(null, Array(32)).map(function (val, index) {
      if (index > 15) {
        return new Piece('black')
      } else {
        return new Piece('white')
      }
    })

    // this.pieces = [
    //   new Piece('black'),
    //   new Piece('black'),
    //   new Piece('black'),
    //   new Piece('black'),
    //   new Piece('black'),
    //   new Piece('black'),
    //   new Piece('black'),
    //   new Piece('black'),
    //   new Piece('black'),
    //   new Piece('black'),
    //   new Piece('black'),
    //   new Piece('black'),
    //   new Piece('black'),
    //   new Piece('black'),
    //   new Piece('black'),
    //   new Piece('black'),
    //   new Piece('white'),
    //   new Piece('white'),
    //   new Piece('white'),
    //   new Piece('white'),
    //   new Piece('white'),
    //   new Piece('white'),
    //   new Piece('white'),
    //   new Piece('white'),
    //   new Piece('white'),
    //   new Piece('white'),
    //   new Piece('white'),
    //   new Piece('white'),
    //   new Piece('white'),
    //   new Piece('white'),
    //   new Piece('white'),
    //   new Piece('white')
    // ]
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
