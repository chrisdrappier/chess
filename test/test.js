var assert = require('assert')
var chess = require('../src/chess.js')

describe('Piece', function () {
  var piece = new chess.Piece('white')

  it('has a color', function () {
    assert(piece.color === 'white')
  })
})

describe('Space', function () {
  var space = new chess.Space(0)

  it('has an index', function () {
    assert(space.index === 0)
  })
})

describe('Board', function () {
  var board = new chess.Board()

  describe('spaces', function () {
    it('has spaces', function () {
      assert(Array.isArray(board.spaces))
    })

    it('has 64 spaces', function () {
      var spaces = board.spaces.filter(function (space) {
        return space.constructor.name === 'Space'
      })
      assert.strictEqual(spaces.length, 64)
    })
  })

  describe('all pieces have a space', function () {
    var spaces = board.spaces.filter(function (space) {
      return space.piece.constructor.name != 'NullPiece'
    })
    assert.strictEqual(spaces.length, 32)
  })

  describe('pieces', function () {
    it('has pieces', function () {
      assert(Array.isArray(board.pieces))
    })

    it('has 16 white pieces and 16 black pieces', function () {
      var white_pieces = Array.apply(null, Array(16)).map(function (val) {
        return new chess.Piece('white')
      })
      var black_pieces = Array.apply(null, Array(16)).map(function (val) {
        return new chess.Piece('black')
      })
      var actual_white_pieces = board.pieces.filter(function (piece) {
          return piece.color === 'white'
      })
      var actual_black_pieces = board.pieces.filter(function (piece) {
          return piece.color === 'black'
      })

      assert.strictEqual(actual_white_pieces.length, white_pieces.length)
      assert.strictEqual(actual_black_pieces.length, black_pieces.length)
    })

    it('has 8 white pawns', function () {
      var pawns = board.pieces.filter(function (piece) {
        return piece.constructor.name === 'Pawn' && piece.color === 'white'
      })
      assert.strictEqual(pawns.length, 8)
    })

    it('has 8 black pawns', function () {
      var pawns = board.pieces.filter(function (piece) {
        return piece.constructor.name === 'Pawn' && piece.color === 'black'
      })
      assert.strictEqual(pawns.length, 8)
    })

    it('has 2 black rooks', function () {
      var rooks = board.pieces.filter(function (piece) {
        return piece.constructor.name === 'Rook' && piece.color === 'black'
      })
      assert.strictEqual(rooks.length, 2)
    })

    it('has 2 white rooks', function () {
      var rooks = board.pieces.filter(function (piece) {
        return piece.constructor.name === 'Rook' && piece.color === 'white'
      })
      assert.strictEqual(rooks.length, 2)
    })

    it('has 2 black bishops', function () {
      var bishops = board.pieces.filter(function (piece) {
        return piece.constructor.name === 'Bishop' && piece.color === 'black'
      })
      assert.strictEqual(bishops.length, 2)
    })

    it('has 2 white bishops', function () {
      var bishops = board.pieces.filter(function (piece) {
        return piece.constructor.name === 'Bishop' && piece.color === 'white'
      })
      assert.strictEqual(bishops.length, 2)
    })

    it('has 2 black knights', function () {
      var knights = board.pieces.filter(function (piece) {
        return piece.constructor.name === 'Knight' && piece.color === 'black'
      })
      assert.strictEqual(knights.length, 2)
    })

    it('has 2 white knights', function () {
      var knights = board.pieces.filter(function (piece) {
        return piece.constructor.name === 'Knight' && piece.color === 'white'
      })
      assert.strictEqual(knights.length, 2)
    })

    it('has 1 black king', function () {
      var king = board.pieces.filter(function (piece) {
        return piece.constructor.name === 'King' && piece.color === 'black'
      })
      assert.strictEqual(king.length, 1)
    })

    it('has 1 white king', function () {
      var king = board.pieces.filter(function (piece) {
        return piece.constructor.name === 'King' && piece.color === 'white'
      })
      assert.strictEqual(king.length, 1)
    })

    it('has 1 black queen', function () {
      var queen = board.pieces.filter(function (piece) {
        return piece.constructor.name === 'Queen' && piece.color === 'black'
      })
      assert.strictEqual(queen.length, 1)
    })

    it('has 1 white queen', function () {
      var queen = board.pieces.filter(function (piece) {
        return piece.constructor.name === 'Queen' && piece.color === 'white'
      })
      assert.strictEqual(queen.length, 1)
    })
  })
})
