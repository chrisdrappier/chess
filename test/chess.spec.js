import { expect, assert } from 'chai'
import { describe, it } from 'mocha'
import { Chess, Space } from '../src/chess'

const FilterByType = (board, type, color = null) => {
  return board.pieces.filter((piece) => {
    if (color) {
      return (piece.type.constructor.name === type || piece.constructor.name === type) && piece.color === color
    } else {
      return piece.constructor.name === type
    }
  })
}

const AssertPieceCount = (chess, count, type, color = null) => {
  var pieces = FilterByType(chess, type, color)
  assert.strictEqual(pieces.length, count)
}

const AssertValidMove = (chess, current, target) => {
  var board = chess.board
  var currentSpace = board.spaces[current]
  var newSpace = board.spaces[target]
  var capture = newSpace.piece
  var currentPiece = currentSpace.piece
  chess.move(current, target)
  describe(`move from ${current} to ${target}`, () => {
    it(`vacates ${current}`, () => {
      expect(currentSpace.piece.constructor.name).to.equal('NullPiece')
    })

    it(`moves to ${target}`, () => {
      expect(newSpace.piece).to.equal(currentPiece)
    })

    it(`captures piece on ${target}`, () => {
      expect(chess.captures).to.include(capture)
    })
  })
}

const AssertInvalidMove = (chess, current, target) => {
  var board = chess.board
  var currentSpace = board.spaces[current]
  var newSpace = board.spaces[target]
  var capture = newSpace.piece
  var currentPiece = currentSpace.piece
  chess.move(current, target)
  describe(`do not move from ${current} to ${target}`, () => {
    it('does not move', () => {
      expect(currentSpace.piece).to.equal(currentPiece)
    })

    it('does not capture', () => {
      expect(newSpace.piece).to.equal(capture)
    })
  })
}

describe('Space', () => {
  var space = new Space(0)

  it('has an index', () => {
    assert(space.index === 0)
  })

  it('has a color', () => {
    assert(space.color === 'light')
  })

  it('has a row', () => {
    assert(space.row === 0)
  })

  it('has a column', () => {
    assert(space.column === 0)
  })
})

describe('Chess', () => {
  var chess = new Chess()

  describe('turns', () => {
    var chess = new Chess()
    it('passes turn after successful move', () => {
      chess.move(51, 35)
      expect(chess.turn).to.equal('black')
    })

    it('does not allow move unless its colors turn', () => {
      AssertInvalidMove(chess, 52, 36)
    })
  })

  describe('pieces', () => {
    it('has 8 white pawns', () => { AssertPieceCount(chess, 8, 'Pawn', 'white') })
    it('has 8 black pawns', () => { AssertPieceCount(chess, 8, 'Pawn', 'black') })
    it('has 2 black rooks', () => { AssertPieceCount(chess, 2, 'Rook', 'black') })
    it('has 2 white rooks', () => { AssertPieceCount(chess, 2, 'Rook', 'white') })
    it('has 2 black bishops', () => { AssertPieceCount(chess, 2, 'Bishop', 'black') })
    it('has 2 white bishops', () => { AssertPieceCount(chess, 2, 'Bishop', 'white') })
    it('has 2 black knights', () => { AssertPieceCount(chess, 2, 'Knight', 'black') })
    it('has 2 white knights', () => { AssertPieceCount(chess, 2, 'Knight', 'black') })
    it('has 1 black king', () => { AssertPieceCount(chess, 1, 'King', 'black') })
    it('has 1 white king', () => { AssertPieceCount(chess, 1, 'King', 'white') })
    it('has 1 black queen', () => { AssertPieceCount(chess, 1, 'Queen', 'black') })
    it('has 1 white queen', () => { AssertPieceCount(chess, 1, 'Queen', 'white') })
  })
  describe('board', () => {
    var board = chess.board

    describe('spaces', () => {
      it('has 64 spaces', () => {
        assert.strictEqual(board.spaces.length, 64)
      })
    })

    describe('all pieces have a space', () => {
      var spaces = board.pieces.filter((piece) => {
        return piece.constructor.name !== 'NullPiece'
      })
      assert.strictEqual(spaces.length, 32)
    })
  })
  describe('move', () => {
    describe('when board is new', () => {
      AssertValidMove(chess, 51, 35)
      // PerformInvalidMove(chess.board, 51, 22, chess)
    })
  })
})
