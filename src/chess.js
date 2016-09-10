class Chess {
  constructor () {
    this.board = new Board()
    this.captures = []
  }

  get pieces () {
    return this.board.spaces.map((space) => {
      return space.piece
    }).concat(this.captures).filter((piece) => {
      return piece.constructor !== 'NullPiece'
    })
  }

  move (currentSpace, newSpace) {
    new Move(this, currentSpace, newSpace).execute()
  }
}

class Move {
  constructor (chess, currentSpace, newSpace) {
    this.currentSpace = currentSpace
    this.newSpace = newSpace
    this.chess = chess
  }

  execute () {
    if (this.spaceAvailable) {
      this.capture()
      this.setPieces()
    }
  }

  setPieces () {
    this.newSpace.piece = this.currentPiece
    this.currentSpace.piece = new NullPiece()
  }

  capture () {
    this.captures.push(this.captured)
  }

  get captured () {
    return this.newSpace.piece
  }

  get captures () {
    return this.chess.captures
  }

  get board () {
    return this.chess.board
  }

  get currentPiece () {
    return this.currentSpace.piece
  }

  get spaceAvailable () {
    return (this.availableSpaces.includes(this.newSpace))
  }

  get availableSpaces () {
    return this.board.spaces.filter((space) => {
      return this.currentPiece.validMove(this.currentSpace, space)
    })
  }
}

class Board {
  constructor (spaces = StartingSpaces()) {
    this.spaces = spaces
  }
}

class Space {
  constructor (index, piece) {
    this.index = index
    this.piece = piece || new NullPiece()
  }

  get color () {
    return Math.abs((this.row - this.column) % 2) ? 'dark' : 'light'
  }
  get column () {
    return parseInt(this.index / 8)
  }
  get row () {
    return (this.index % 8)
  }
}

class NullPiece {
  constructor () {
    this.color = null
    this.render = ''
  }

  validMove (dontUse = null, dontUse2 = null) {
    return false
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
