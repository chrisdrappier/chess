const MapAll = (count, callback) => {
  return Array.apply(null, Array(count)).map(callback)
}
class Board {
  constructor () {
    this.pieces = Board.WhitePawns().concat(
                  Board.BlackPawns()).concat(
                  Board.rooks()).concat(
                  Board.bishops()).concat(
                  Board.knights()).concat(
                  Board.kings()).concat(
                  Board.queens())
    this.spaces = this.pieces.concat(Array.apply(null, Array(32))).map((piece, index) => {
      return new Space(index, piece)
    })
  }

  static WhitePawns () {
    return MapAll(8, (val, index) => {
      return new Pawn('white')
    })
  }

  static BlackPawns () {
    return MapAll(8, (val, index) => {
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
    this.row = (index % 8)
    this.column = parseInt(index / 8)
    this.color = (Math.abs((this.row - this.column) % 2)) ? 'dark' : 'light'
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

export {Board, Piece, Space}
