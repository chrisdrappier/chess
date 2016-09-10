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

const PerformValidMove = (board, current, target) => {
  var currentSpace = board.spaces[current]
  var newSpace = board.spaces[target]
  var capture = newSpace.piece
  var currentPiece = currentSpace.piece
  board.move(currentSpace, newSpace)
  describe(`move from ${current} to ${target}`, () => {
    it(`vacates ${current}`, () => {
      expect(currentSpace.piece.constructor.name).to.equal('NullPiece')
    })

    it(`moves to ${target}`, () => {
      expect(newSpace.piece).to.equal(currentPiece)
    })

    it(`captures piece on ${target}`, () => {
      expect(board.captures).to.include(capture)
    })
  })
}

const PerformInvalidMove = (board, current, target) => {
  var currentSpace = board.spaces[current]
  var newSpace = board.spaces[target]
  var capture = newSpace.piece
  var currentPiece = currentSpace.piece
  board.move(currentSpace, newSpace)
  describe(`do not move from ${current} to ${target}`, () => {
    it('does not move', () => {
      expect(currentSpace.piece).to.equal(currentPiece)
    })

    it('does not capture', () => {
      expect(newSpace.piece).to.equal(capture)
    })
  })
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
    describe('when board is new', () => {
      PerformValidMove(new Board(), 51, 35)
      // PerformInvalidMove(new Board(), 51, 22)
    })
  })
})
