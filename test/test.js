var assert = require('assert')
var chess = require('../src/chess.js')
import { describe, it } from 'mocha'

describe('Piece', () => {
  var piece = new chess.Piece('white')

  it('has a color', () => {
    assert(piece.color === 'white')
  })
})

describe('Space', () => {
  var space = new chess.Space(0)

  it('has an index', () => {
    assert(space.index === 0)
  })
})

describe('Board', () => {
  var board = new chess.Board()

  describe('spaces', () => {
    it('has spaces', () => {
      assert(Array.isArray(board.spaces))
    })

    it('has 64 spaces', () => {
      var spaces = board.spaces.filter((space) => {
        return space.constructor.name === 'Space'
      })
      assert.strictEqual(spaces.length, 64)
    })
  })

  describe('all pieces have a space', () => {
    var spaces = board.spaces.filter((space) => {
      return space.piece.constructor.name !== 'NullPiece'
    })
    assert.strictEqual(spaces.length, 32)
  })

  describe('pieces', () => {
    it('has pieces', () => {
      assert(Array.isArray(board.pieces))
    })

    it('has 16 white pieces and 16 black pieces', () => {
      var white_pieces = Array.apply(null, Array(16)).map((val) => {
        return new chess.Piece('white')
      })
      var black_pieces = Array.apply(null, Array(16)).map((val) => {
        return new chess.Piece('black')
      })
      var actual_white_pieces = board.pieces.filter((piece) => {
        return piece.color === 'white'
      })
      var actual_black_pieces = board.pieces.filter((piece) => {
        return piece.color === 'black'
      })

      assert.strictEqual(actual_white_pieces.length, white_pieces.length)
      assert.strictEqual(actual_black_pieces.length, black_pieces.length)
    })

    it('has 8 white pawns', () => {
      var pawns = board.pieces.filter((piece) => {
        return piece.constructor.name === 'Pawn' && piece.color === 'white'
      })
      assert.strictEqual(pawns.length, 8)
    })

    it('has 8 black pawns', () => {
      var pawns = board.pieces.filter((piece) => {
        return piece.constructor.name === 'Pawn' && piece.color === 'black'
      })
      assert.strictEqual(pawns.length, 8)
    })

    it('has 2 black rooks', () => {
      var rooks = board.pieces.filter((piece) => {
        return piece.constructor.name === 'Rook' && piece.color === 'black'
      })
      assert.strictEqual(rooks.length, 2)
    })

    it('has 2 white rooks', () => {
      var rooks = board.pieces.filter((piece) => {
        return piece.constructor.name === 'Rook' && piece.color === 'white'
      })
      assert.strictEqual(rooks.length, 2)
    })

    it('has 2 black bishops', () => {
      var bishops = board.pieces.filter((piece) => {
        return piece.constructor.name === 'Bishop' && piece.color === 'black'
      })
      assert.strictEqual(bishops.length, 2)
    })

    it('has 2 white bishops', () => {
      var bishops = board.pieces.filter((piece) => {
        return piece.constructor.name === 'Bishop' && piece.color === 'white'
      })
      assert.strictEqual(bishops.length, 2)
    })

    it('has 2 black knights', () => {
      var knights = board.pieces.filter((piece) => {
        return piece.constructor.name === 'Knight' && piece.color === 'black'
      })
      assert.strictEqual(knights.length, 2)
    })

    it('has 2 white knights', () => {
      var knights = board.pieces.filter((piece) => {
        return piece.constructor.name === 'Knight' && piece.color === 'white'
      })
      assert.strictEqual(knights.length, 2)
    })

    it('has 1 black king', () => {
      var king = board.pieces.filter((piece) => {
        return piece.constructor.name === 'King' && piece.color === 'black'
      })
      assert.strictEqual(king.length, 1)
    })

    it('has 1 white king', () => {
      var king = board.pieces.filter((piece) => {
        return piece.constructor.name === 'King' && piece.color === 'white'
      })
      assert.strictEqual(king.length, 1)
    })

    it('has 1 black queen', () => {
      var queen = board.pieces.filter((piece) => {
        return piece.constructor.name === 'Queen' && piece.color === 'black'
      })
      assert.strictEqual(queen.length, 1)
    })

    it('has 1 white queen', () => {
      var queen = board.pieces.filter((piece) => {
        return piece.constructor.name === 'Queen' && piece.color === 'white'
      })
      assert.strictEqual(queen.length, 1)
    })
  })
})
