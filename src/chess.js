const MapAll = (count, callback) => {
  return Array.apply(null, Array(count)).map(callback)
}
class Board {
  constructor () {
    this.spaces = Board.BlackBackRow().concat(
                  Board.BlackPawns()).concat(
                  Board.EmptyRows()).concat(
                  Board.WhitePawns()).concat(
                  Board.WhiteBackRow()).map((piece, index) => {
                    return new Space(index, piece)
                  })
  }

  static EmptyRows () {
    return Array.apply(null, Array(32))
  }

  static WhiteBackRow () {
    var minorPieces = [new WhiteRook(), new WhiteKnight(), new WhiteBishop()]
    return minorPieces.concat([new WhiteQueen(), new WhiteKing()]).concat(minorPieces.reverse())
  }
  static WhitePawns () {
    return MapAll(8, (val, index) => {
      return new WhitePawn()
    })
  }

  static BlackBackRow () {
    var minorPieces = [new BlackRook(), new BlackKnight(), new BlackBishop()]
    return minorPieces.concat([new BlackQueen(), new BlackKing()]).concat(minorPieces.reverse())
  }
  static BlackPawns () {
    return MapAll(8, (val, index) => {
      return new BlackPawn()
    })
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
    this.render = ''
    this.available_spaces = []
  }
}

class Piece {

  get available_spaces () {
    return []
  }
  get render () {
    return ''
  }
}

class WhitePawn extends Piece {
  get render () {
    return '♙'
  }
}
class BlackPawn extends Piece {
  get render () {
    return '♟'
  }
}

class WhiteRook extends Piece {
  get render () {
    return '♖'
  }
}

class BlackRook extends Piece {
  get render () {
    return '♜'
  }
}

class WhiteBishop extends Piece {
  get render () {
    return '♗'
  }
}
class BlackBishop extends Piece {
  get render () {
    return '♝'
  }
}

class WhiteKnight extends Piece {
  get render () {
    return '♘'
  }
}

class BlackKnight extends Piece {
  get render () {
    return '♞'
  }
}

class WhiteQueen extends Piece {
  get render () {
    return '♕'
  }
}

class BlackQueen extends Piece {
  get render () {
    return '♛'
  }
}

class WhiteKing extends Piece {
  get render () {
    return '♔'
  }
}

class BlackKing extends Piece {
  get render () {
    return '♚'
  }
}

export {Board, Piece, Space}
