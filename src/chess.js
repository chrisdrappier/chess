const MapAll = (count, callback) => {
  return Array.apply(null, Array(count)).map(callback)
}

class Chess {
  constructor () {
    this.board = new Board()
    this.captures = []
  }

  get pieces () {
    return this.board.spaces.map((space) => {
      return space.piece
    }).concat(this.captures)
  }

  static getStartingSpaces () {
    return Chess.BlackBackRow().concat(
    Chess.BlackPawns()).concat(
    Board.EmptyRows()).concat(
    Chess.WhitePawns()).concat(
    Chess.WhiteBackRow()).map((piece, index) => {
      return new Space(index, piece)
    })
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
class Board {
  constructor (spaces = Chess.getStartingSpaces()) {
    this.captures = []
    this.spaces = spaces
  }

   get pieces () {
     return this.spaces.map((space) => {
       return space.piece
     }).concat(this.captures)
   }

  move (currentSpace, newSpace) {
    if (this.spaceAvailable(currentSpace, newSpace)) {
      this.capture(newSpace)
      this.setPieces(currentSpace, newSpace)
    }
    return this
  }

  setPieces (currentSpace, newSpace) {
    var currentPiece = currentSpace.piece
    newSpace.piece = currentPiece
    currentSpace.piece = new NullPiece()
    return this
  }

  capture (newSpace) {
    this.captures = this.captures.concat([newSpace.piece])
    return this
  }

  spaceAvailable (currentSpace, newSpace) {
    return (this.availableSpacesFor(currentSpace).includes(newSpace))
  }

  availableSpacesFor (currentSpace) {
    var piece = currentSpace.piece
    return this.spaces.filter((space) => {
      return piece.validMove(currentSpace, space)
    })
  }

  static EmptyRows () {
    return Array.apply(null, Array(32))
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
  }
}

class Piece {

  get availableSpaces () {
    return []
  }
  get render () {
    return ''
  }
  validMove (currentSpace, newSpace) {
    return true
  }
}

class WhitePawn extends Piece {
  get render () {
    return '♙'
  }
  validMove (currentSpace, newSpace) {
    return (currentSpace.row === newSpace.row && currentSpace.column >= newSpace.column + 2)
  }
}

class BlackPawn extends Piece {
  get render () {
    return '♟'
  }
  validMove (currentSpace, newSpace) {
    return (currentSpace.row === newSpace.row && currentSpace.column < newSpace.column + 2)
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

export {Chess, Board, Piece, NullPiece, Space}
