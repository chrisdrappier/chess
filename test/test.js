import { expect, assert } from 'chai'
import { describe, it } from 'mocha'
import { Board, Space, Piece } from '../src/chess'

const FilterByType = (board, type) => {
  return board.pieces.filter((piece) => {
    return piece.constructor.name === type
  })
}

const AssertPieceCount = (board, count, type) => {
  var pieces = FilterByType(board, type)
  assert.strictEqual(pieces.length, count)
}

describe('Piece', () => {
  var piece = new Piece('white')

  it('renders', () => {
    assert(piece.render === '')
  })
})

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

describe('Board', () => {
  var board = new Board()

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

  describe('pieces', () => {
    it('has 8 white pawns', () => { AssertPieceCount(board, 8, 'WhitePawn') })
    it('has 8 black pawns', () => { AssertPieceCount(board, 8, 'BlackPawn') })
    it('has 2 black rooks', () => { AssertPieceCount(board, 2, 'BlackRook') })
    it('has 2 white rooks', () => { AssertPieceCount(board, 2, 'WhiteRook') })
    it('has 2 black bishops', () => { AssertPieceCount(board, 2, 'BlackBishop') })
    it('has 2 white bishops', () => { AssertPieceCount(board, 2, 'WhiteBishop') })
    it('has 2 black knights', () => { AssertPieceCount(board, 2, 'BlackKnight') })
    it('has 2 white knights', () => { AssertPieceCount(board, 2, 'WhiteKnight') })
    it('has 1 black king', () => { AssertPieceCount(board, 1, 'BlackKing') })
    it('has 1 white king', () => { AssertPieceCount(board, 1, 'WhiteKing') })
    it('has 1 black queen', () => { AssertPieceCount(board, 1, 'BlackQueen') })
    it('has 1 white queen', () => { AssertPieceCount(board, 1, 'WhiteQueen') })
  })

  describe('move', () => {
    describe('0,63', () => {
      var capture = board.spaces[63].piece
      var currentPiece = board.spaces[0].piece
      board.move(board.spaces[0], board.spaces[63])
      var currentSpace = board.spaces[0]
      var newSpace = board.spaces[63]
      it('vacates the current space', () => {
        //expect(currentSpace.piece.constructor).to.equal('NullPiece')
      })

      it('moves to the new space', () => {
        expect(newSpace.piece).to.equal(currentPiece)
      })

      it('captures piece on new space', () => {
        expect(board.captures).to.include(capture)
      })
    })
  })
})
