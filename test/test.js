var assert = require('assert')
var chess = require('../src/chess.js')
import { describe, it } from 'mocha'

describe('Piece', () => {
  var piece = new chess.Piece('white')

  it('has a render', () => {
    assert(piece.render === '')
  })
})

describe('Space', () => {
  var space = new chess.Space(0)

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
  var board = new chess.Board()

  describe('spaces', () => {
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
    it('has 8 white pawns', () => {
      var pawns = board.spaces.filter((space) => {
        return space.piece.constructor.name === 'WhitePawn'
      })
      assert.strictEqual(pawns.length, 8)
    })

    it('has 8 black pawns', () => {
      var pawns = board.spaces.filter((space) => {
        return space.piece.constructor.name === 'BlackPawn'
      })
      assert.strictEqual(pawns.length, 8)
    })

    it('has 2 black rooks', () => {
      var rooks = board.spaces.filter((space) => {
        return space.piece.constructor.name === 'BlackRook'
      })
      assert.strictEqual(rooks.length, 2)
    })

    it('has 2 white rooks', () => {
      var rooks = board.spaces.filter((space) => {
        return space.piece.constructor.name === 'WhiteRook'
      })
      assert.strictEqual(rooks.length, 2)
    })

    it('has 2 black bishops', () => {
      var bishops = board.spaces.filter((space) => {
        return space.piece.constructor.name === 'BlackBishop'
      })
      assert.strictEqual(bishops.length, 2)
    })

    it('has 2 white bishops', () => {
      var bishops = board.spaces.filter((space) => {
        return space.piece.constructor.name === 'WhiteBishop'
      })
      assert.strictEqual(bishops.length, 2)
    })

    it('has 2 black knights', () => {
      var knights = board.spaces.filter((space) => {
        return space.piece.constructor.name === 'BlackKnight'
      })
      assert.strictEqual(knights.length, 2)
    })

    it('has 2 white knights', () => {
      var knights = board.spaces.filter((space) => {
        return space.piece.constructor.name === 'WhiteKnight'
      })
      assert.strictEqual(knights.length, 2)
    })

    it('has 1 black king', () => {
      var king = board.spaces.filter((space) => {
        return space.piece.constructor.name === 'BlackKing'
      })
      assert.strictEqual(king.length, 1)
    })

    it('has 1 white king', () => {
      var king = board.spaces.filter((space) => {
        return space.piece.constructor.name === 'WhiteKing'
      })
      assert.strictEqual(king.length, 1)
    })

    it('has 1 black queen', () => {
      var queen = board.spaces.filter((space) => {
        return space.piece.constructor.name === 'BlackQueen'
      })
      assert.strictEqual(queen.length, 1)
    })

    it('has 1 white queen', () => {
      var queen = board.spaces.filter((space) => {
        return space.piece.constructor.name === 'WhiteQueen'
      })
      assert.strictEqual(queen.length, 1)
    })
  })
})
