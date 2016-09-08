var assert = require('assert')
var chess = require('../javascripts/chess.js')

describe('Board', function () {
  describe('pieces', function () {
    var board = new chess.Board()

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
      console.log(white_pawns[0].constructor.name)
      assert.strictEqual(pawns.length, 8)
    })

    it('has 8 black pawns', function () {
      var pawns = board.pieces.filter(function (piece) {
        return piece.constructor.name === 'Pawn' && piece.color === 'white'
      })
      assert.strictEqual(pawns.length, 8)
    })

    it('has 2 black rooks', function () {
      var rooks = board.pieces.filter(function (piece) {
        return piece.constructor.name === 'Rook' && piece.color === 'white'
      })
      assert.strictEqual(rooks.length, 2)
    })
  })
})
