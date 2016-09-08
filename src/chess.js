class Board {
  constructor () {
    this.pieces = Board.white_pawns().concat(Board.black_pawns()).concat(Board.rooks()).concat(Board.bishops()).concat(Board.knights()).concat(Board.kings()).concat(Board.queens())
    this.spaces = this.pieces.concat(Array.apply(null, Array(32))).map(function (val, index) {
      return new Space(index, val)
    })
  }

  static white_pawns () {
    return Array.apply(null, Array(8)).map(function (val, index) {
      return new Pawn('white')
    })
  }

  static black_pawns () {
    return Array.apply(null, Array(8)).map(function (val, index) {
      return new Pawn('black')
    })
  }

  static rooks () {
    return [new Rook('white'), new Rook('black'), new Rook('white'), new Rook('black')]
  }

  static bishops () {
    return [new Bishop('white'), new Bishop('black'), new Bishop('white'), new Bishop('black')]
  }

  static knights () {
    return [new Knight('white'), new Knight('black'), new Knight('white'), new Knight('black')]
  }

  static kings () {
    return [new King('black'), new King('white')]
  }

  static queens () {
    return [new Queen('black'), new Queen('white')]
  }
}

class Space {
  constructor (index, piece) {
    this.index = index
    if (piece != null) {
      this.piece = piece
    } else {
      this.piece = new NullPiece()
    }
  }
}

class NullPiece {
  constructor () {
    this.color = null
  }
}

class Piece {
  constructor (color) {
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
  Board, Piece, Pawn, Space
}
