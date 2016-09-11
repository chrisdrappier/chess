class Chess {
  constructor () {
    this.board = new Board()
    this.captures = []
    this.turn = 'white'
  }

  passTurn () {
    this.turn = this.turn === 'white' ? 'black' : 'white'
  }

  get pieces () {
    return this.board.spaces.map((space) => {
      return space.piece
    }).concat(this.captures).filter((piece) => {
      return piece.constructor !== 'NullPiece'
    })
  }

  move (currentIndex, newIndex) {
    var currentSpace = this.board.spaces[currentIndex]
    var newSpace = this.board.spaces[newIndex]
    new Move(this, currentSpace, newSpace).execute()
    return this
  }
}

class Move {
  constructor (chess, currentSpace, newSpace) {
    this.currentSpace = currentSpace
    this.newSpace = newSpace
    this.chess = chess
  }

  execute () {
    if (this.turn && this.spaceAvailable) {
      this.capture()
      this.setPieces()
      this.chess.passTurn()
    }
  }

  setPieces () {
    this.newSpace.piece = this.currentPiece
    this.currentSpace.piece = new NullPiece()
  }

  capture () {
    this.captures.push(this.captured)
  }

  get turn () {
    return (this.currentPiece.color === this.chess.turn)
  }

  get captured () { return this.newSpace.piece }
  get captures () { return this.chess.captures }
  get board () { return this.chess.board }
  get currentPiece () { return this.currentSpace.piece }
  get spaceAvailable () { return this.availableSpaces.includes(this.newSpace) }

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

  get pieces () {
    return this.spaces.map((space) => {
      return space.piece
    })
  }
}

class Space {
  constructor (index, piece = new NullPiece()) {
    this.index = index
    this.piece = piece
  }

  get color () { return Math.abs((this.row - this.column) % 2) ? 'dark' : 'light' }
  get column () { return parseInt(this.index / 8) }
  get row () { return (this.index % 8) }
}

class NullPiece {
  constructor (index) { this.index = index }
  get color () { return null }
  get render () { return '' }

  validMove (dontUse = null, dontUse2 = null) {
    return false
  }
}

class Piece {
  constructor (index) { this.index = index }
  static get defaults () { return [] }
  static get defaultPieces () {
    return this.defaults.map((index) => {
      return new Piece(index)
    })
  }
  get availableSpaces () { return [] }
  get render () { return '' }
  get space () { return new Space(this.index) }
  validMove (currentSpace, newSpace) { return true }
}

class WhitePawn extends Piece {
  get color () { return 'white' }
  static get defaultPieces () {
    return [new WhitePawn(32),
            new WhitePawn(33),
            new WhitePawn(34),
            new WhitePawn(35),
            new WhitePawn(36),
            new WhitePawn(37),
            new WhitePawn(38),
            new WhitePawn(39)]
  }
  get render () { return '♙' }
  validMove (currentSpace, newSpace) {
    return (currentSpace.row === newSpace.row && currentSpace.column >= newSpace.column + 1)
  }
}

class BlackPawn extends Piece {
  get color () { return 'black' }
  static get defaultPieces () {
    return [new BlackPawn(8),
            new BlackPawn(9),
            new BlackPawn(10),
            new BlackPawn(11),
            new BlackPawn(12),
            new BlackPawn(13),
            new BlackPawn(14),
            new BlackPawn(15)]
  }
  get render () { return '♟' }
  validMove (currentSpace, newSpace) {
    return (currentSpace.row === newSpace.row && currentSpace.column < newSpace.column + 2)
  }
}

class WhiteRook extends Piece {
  get color () { return 'white' }
  static get defaultPieces () { return [new WhiteRook(56), new WhiteRook(63)] }
  get render () { return '♖' }
}

class BlackRook extends Piece {
  get color () { return 'black' }
  static get defaultPieces () { return [new BlackRook(0), new BlackRook(7)] }
  get render () { return '♜' }
}

class WhiteBishop extends Piece {
  get color () { return 'white' }
  static get defaultPieces () { return [new WhiteBishop(61), new WhiteBishop(58)] }
  get render () { return '♗' }
}

class BlackBishop extends Piece {
  get color () { return 'black' }
  static get defaultPieces () { return [new BlackBishop(5), new BlackBishop(2)] }
  get render () { return '♝' }
}

class WhiteKnight extends Piece {
  get color () { return 'white' }
  static get defaultPieces () { return [new WhiteKnight(57), new WhiteKnight(62)] }
  get render () { return '♘' }
}

class BlackKnight extends Piece {
  get color () { return 'black' }
  static get defaultPieces () { return [new BlackKnight(1), new BlackKnight(6)] }
  get render () { return '♞' }
}

class WhiteQueen extends Piece {
  get color () { return 'white' }
  static get defaultPieces () { return [new WhiteQueen(59)] }
  get render () { return '♕' }
}

class BlackQueen extends Piece {
  get color () { return 'black' }
  static get defaultPieces () { return [new BlackQueen(3)] }
  get render () { return '♛' }
}

class White {
  get color () { return 'white' }
}

class Black {
  get color () { return 'black' }
}

class WhiteKing extends Piece {
  get color () { return new White().color }
  static get defaultPieces () { return [new WhiteKing(60)] }
  get render () { return '♔' }
}

class BlackKing extends Piece {
  get color () { return new Black().color }
  static get defaultPieces () { return [new BlackKing(4)] }
  get render () { return '♚' }
}

const EmptyRows = () => {
  return Array.apply(null, Array(32))
}

const BlackPieces = () => {
  return BlackBishop.defaultPieces.concat(
         BlackRook.defaultPieces).concat(
         BlackKnight.defaultPieces).concat(
         BlackQueen.defaultPieces).concat(
         BlackKing.defaultPieces).concat(
         BlackPawn.defaultPieces).sort((prev, cur) => {
           return prev.index - cur.index
         })
}

const WhitePieces = () => {
  return WhiteBishop.defaultPieces.concat(
         WhiteRook.defaultPieces).concat(
         WhiteKnight.defaultPieces).concat(
         WhiteQueen.defaultPieces).concat(
         WhiteKing.defaultPieces).concat(
         WhitePawn.defaultPieces).sort((prev, cur) => {
           return prev.index - cur.index
         })
}
const StartingSpaces = () => {
  return BlackPieces().concat(
         EmptyRows()).concat(
         WhitePieces()).map((piece, index) => {
           return new Space(index, piece)
         })
}

export {Chess, Move, Board, Piece, NullPiece, Space}
