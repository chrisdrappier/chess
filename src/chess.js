class Chess {
  constructor () {
    this.board = new Board()
    this.turn = 'white'
  }

  passTurn () {
    this.turn = this.turn === 'white' ? 'black' : 'white'
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
  get captures () { return this.chess.board.captures }
  get board () { return this.chess.board }
  get currentPiece () { return this.currentSpace.piece }
  get spaceAvailable () { return (this.isDifferentColor && this.availableSpaces.includes(this.newSpace)) }

  get isDifferentColor () {
    return this.currentPiece.color !== this.captured.color
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
    this.captures = []
    this.selectedSpace = null
  }

  set selectSpace (space) {
    this.selectedSpace = space
  }

  get pieces () {
    return this.spaces.map((space) => {
      return space.piece
    }).concat(this.captures).filter((piece) => {
      return piece.constructor !== 'NullPiece'
    })
  }
}

class Space {
  constructor (index, piece = new NullPiece()) {
    this.index = index
    this.piece = piece
  }

  get color () { return Math.abs((this.row - this.column) % 2) ? 'dark' : 'light' }
  get row () { return parseInt(this.index / 8) }
  get column () { return (this.index % 8) }
}

class NullPiece {
  get color () { return null }
  get render () { return '' }
  get type () { return new Type() }
}

class Color {
  factor (num) { return num }
}

class White extends Color {
  get color () { return 'white' }
}

class Black extends Color {
  get color () { return 'black' }
  factor (num) { return num * -1 }
}

class Piece {
  constructor (index, type, color) {
    this.colorClass = color
    this.color = color.color
    this.type = type
    this.index = this.color === 'white' ? index + type.whiteOffset : index
  }
  get render () { return this.type.render }

  validMove (currentSpace, newSpace) {
    return this.type.validMove(currentSpace, newSpace, this.colorClass)
  }

  static defaultPieces (color, type) {
    return type.defaults.map((index) => {
      return new Piece(index, type, color)
    })
  }
}

class Type {
  get whiteOffset () { return 56 }
  validMove (currentSpace, newSpace) {
    return (false)
  }
}

class Pawn extends Type {
  get defaults () { return [8, 9, 10, 11, 12, 13, 14, 15] }
  get render () { return '♟' }
  get whiteOffset () { return 24 }
  validMove (currentSpace, newSpace, color) {
    const sameColumn = currentSpace.column === newSpace.column
    const inPath = [1, 2].map(color.factor).includes(currentSpace.row - newSpace.row)
    return sameColumn && inPath
  }
}

class Rook extends Type {
  get defaults () { return [0, 7] }
  get render () { return '♜' }
}
class Bishop extends Type {
  get defaults () { return [5, 2] }
  get render () { return '♝' }
}
class Knight extends Type {
  get defaults () { return [1, 6] }
  get render () { return '♞' }
}
class Queen extends Type {
  get defaults () { return [3] }
  get render () { return '♛' }
}
class King extends Type {
  get defaults () { return [4] }
  get render () { return '♚' }
}

const allTypes = [
  new Bishop(), new Rook(), new Knight(),
  new Queen(), new King(), new Pawn()
]

const reduceConcat = (cur, next) => {
  return cur.concat(next)
}

const sortByIndex = (pre, cur) => {
  return pre.index - cur.index
}

const unsortedPiecesFor = (color) => {
  return allTypes.map((type) => {
    return Piece.defaultPieces(color, type)
  }).reduce(reduceConcat)
}

const PiecesFor = (color) => {
  return unsortedPiecesFor(color).sort(sortByIndex)
}

const StartingSpaces = () => {
  return [PiecesFor(new Black()),
          EmptyRows(),
          PiecesFor(new White())]
          .reduce(reduceConcat)
          .map((piece, index) => {
            return new Space(index, piece)
          })
}

const EmptyRows = () => {
  return Array.apply(null, Array(32))
}
export default Chess
export {Chess, Move, Board, Piece, NullPiece, Space}
