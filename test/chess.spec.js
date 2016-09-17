import { expect, assert } from 'chai'
import { describe, it } from 'mocha'
import Chess from '../src/chess'

const FilterByType = (chess, type, color = null) => {
  return chess.board.pieces.filter((piece) => {
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
  const currentPiece = chess.board.spaces[current].piece
  const capture = chess.board.spaces[target].piece
  chess = simulateMove(chess, current, target)
  const currentSpace = chess.board.spaces[current]
  const newSpace = chess.board.spaces[target]
  describe(`move from ${current} to ${target}`, () => {
    it(`vacates ${current}`, () => {
      expect(currentSpace.empty).to.equal(true)
    })

    it(`moves to ${target}`, () => {
      expect(newSpace.piece).to.equal(currentPiece)
    })

    it(`captures piece on ${target}`, () => {
      expect(chess.board.captures).to.include(capture)
    })
  })
}

const AssertInvalidMove = (chess, current, target) => {
  const currentPiece = chess.board.spaces[current].piece
  const capture = chess.board.spaces[target].piece
  chess = simulateMove(chess, current, target)
  const currentSpace = chess.board.spaces[current]
  const newSpace = chess.board.spaces[target]
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

const simulateMove = (chess, current, target) => {
  chess = simulateClick(chess, current)
  return simulateClick(chess, target)
}

const simulateClick = (chess, spaceIndex) => {
  const space = chess.board.spaces[spaceIndex]
  return chess.click(space)
}

describe('Chess', () => {
  var chess = new Chess()

  describe('turns', () => {
    var chess = new Chess()
    it('passes turn after successful move', () => {
      chess = simulateMove(chess, 51, 35)
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

    it('cannot capture another piece of the same color', () => {
      var chess = new Chess()
      AssertInvalidMove(chess, 51, 52)
    })

    describe('pawn', () => {
      it('at starting position can move 2 spaces forward', () => {
        var chess = new Chess()
        AssertValidMove(chess, 51, 35)
      })
    })
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
        return !piece.isNull
      })
      it('is 32', () => {
        expect(spaces.length).to.equal(32)
      })
    })
  })
  describe('move', () => {
    describe('when board is new', () => {
      AssertValidMove(chess, 51, 35)
    })
  })
})
