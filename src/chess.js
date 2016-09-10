class Chess {
  constructor () {
    this.board = new Board()
    this.captures = []
  }
}

class Move {
  constructor (board, currentSpace, newSpace) {
    this.currentSpace = currentSpace
    this.newSpace = newSpace
    this.currentPiece = currentSpace.piece
    this.board = board
  }

  execute () {
    if (this.spaceAvailable()) {
      this.capture()
      this.setPieces()
    }
  }

  setPieces () {
    this.newSpace.piece = this.currentPiece
    this.currentSpace.piece = new NullPiece()
  }

  capture () {
    this.board.captures = this.board.captures.concat([this.newSpace.piece])
  }

  spaceAvailable () {
    return (this.availableSpacesFor().includes(this.newSpace))
  }

  availableSpacesFor () {
    return this.board.spaces.filter((space) => {
      return this.currentPiece.validMove(this.currentSpace, space)
    })
  }
}

class Board {
  constructor (spaces = StartingSpaces()) {
    this.spaces = spaces
    this.captures = []
  }

  get pieces () {
    return this.spaces.map((space) => {
      return space.piece
    })
  }

  move (currentSpace, newSpace) {
    new Move(this, currentSpace, newSpace).execute()
    return this
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


const EmptyRows = () => {
  return Array.apply(null, Array(32))
}

const BlackPawns = () => {
  return MapAll(8, (val, index) => {
    return new BlackPawn()
  })
}

const BlackBackRow = () => {
  var minorPieces = [new BlackRook(), new BlackKnight(), new BlackBishop()]
  return minorPieces.concat([new BlackQueen(), new BlackKing()]).concat(minorPieces.reverse())
}

const WhitePawns = () => {
  return MapAll(8, (val, index) => {
    return new WhitePawn()
  })
}

const WhiteBackRow = () => {
  var minorPieces = [new WhiteRook(), new WhiteKnight(), new WhiteBishop()]
  return minorPieces.concat([new WhiteQueen(), new WhiteKing()]).concat(minorPieces.reverse())
}

const StartingSpaces = () => {
  return BlackBackRow().concat(
  BlackPawns()).concat(
  EmptyRows()).concat(
  WhitePawns()).concat(
  WhiteBackRow()).map((piece, index) => {
    return new Space(index, piece)
  })
}

const MapAll = (count, callback) => {
  return Array.apply(null, Array(count)).map(callback)
}

export {Chess, Move, Board, Piece, NullPiece, Space}
