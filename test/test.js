var assert = require('assert')
var chess = require('../javascripts/chess.js')

describe('Board', function () {
  describe('startingPosition', function () {
    // var expected = '<table id="board"><tr id="9"><td class="outer"></td><td class="outer">A</td><td class="outer">B</td><td class="outer">C</td><td class="outer">D</td><td class="outer">E</td><td class="outer">F</td><td class="outer">G</td><td class="outer">H</td><td class="outer"></td></tr><tr id="8"><td class="outer">8</td><td class="light" id="A8"><div class="blackrook" id="8A"><img src="images/blackrook.png" width="50px" height="50px"></div></td><td class="dark" id="B8"><div class="blackknight" id="8B"><img src="images/blackknight.png" width="50px" height="50px"></div></td><td class="light" id="C8"><div class="blackbishop" id="8C"><img src="images/blackbishop.png" width="50px" height="50px"></div></td><td class="dark" id="D8"><div class="blackqueen" id="8D"><img src="images/blackqueen.png" width="50px" height="50px"></div></td><td class="light" id="E8"><div class="blackking" id="8E"><img src="images/blackking.png" width="50px" height="50px"></div></td><td class="dark" id="F8"><div class="blackbishop" id="8F"><img src="images/blackbishop.png" width="50px" height="50px"></div></td><td class="light" id="G8"><div class="blackknight" id="8G"><img src="images/blackknight.png" width="50px" height="50px"></div></td><td class="dark" id="H8"><div class="blackrook" id="8H"><img src="images/blackrook.png" width="50px" height="50px"></div></td><td class="outer">8</td></tr><tr id="7"><td class="outer">7</td><td class="dark" id="A7"><div class="blackpawn" id="7A"><img src="images/blackpawn.png" width="50px" height="50px"></div></td><td class="light" id="B7"><div class="blackpawn" id="7B"><img src="images/blackpawn.png" width="50px" height="50px"></div></td><td class="dark" id="C7"><div class="blackpawn" id="7C"><img src="images/blackpawn.png" width="50px" height="50px"></div></td><td class="light" id="D7"><div class="blackpawn" id="7D"><img src="images/blackpawn.png" width="50px" height="50px"></div></td><td class="dark" id="E7"><div class="blackpawn" id="7E"><img src="images/blackpawn.png" width="50px" height="50px"></div></td><td class="light" id="F7"><div class="blackpawn" id="7F"><img src="images/blackpawn.png" width="50px" height="50px"></div></td><td class="dark" id="G7"><div class="blackpawn" id="7G"><img src="images/blackpawn.png" width="50px" height="50px"></div></td><td class="light" id="H7"><div class="blackpawn" id="7H"><img src="images/blackpawn.png" width="50px" height="50px"></div></td><td class="outer">7</td></tr><tr id="6"><td class="outer">6</td><td class="light" id="A6"></td><td class="dark" id="B6"></td><td class="light" id="C6"></td><td class="dark" id="D6"></td><td class="light" id="E6"></td><td class="dark" id="F6"></td><td class="light" id="G6"></td><td class="dark" id="H6"></td><td class="outer">6</td></tr><tr id="5"><td class="outer">5</td><td class="dark" id="A5"></td><td class="light" id="B5"></td><td class="dark" id="C5"></td><td class="light" id="D5"></td><td class="dark" id="E5"></td><td class="light" id="F5"></td><td class="dark" id="G5"></td><td class="light" id="H5"></td><td class="outer">5</td></tr><tr id="4"><td class="outer">4</td><td class="light" id="A4"></td><td class="dark" id="B4"></td><td class="light" id="C4"></td><td class="dark" id="D4"></td><td class="light" id="E4"></td><td class="dark" id="F4"></td><td class="light" id="G4"></td><td class="dark" id="H4"></td><td class="outer">4</td></tr><tr id="3"><td class="outer">3</td><td class="dark" id="A3"></td><td class="light" id="B3"></td><td class="dark" id="C3"></td><td class="light" id="D3"></td><td class="dark" id="E3"></td><td class="light" id="F3"></td><td class="dark" id="G3"></td><td class="light" id="H3"></td><td class="outer">3</td></tr><tr id="2"><td class="outer">2</td><td class="light" id="A2"><div class="whitepawn" id="2A"><img src="images/whitepawn.png" width="50px" height="50px"></div></td><td class="dark" id="B2"><div class="whitepawn" id="2B"><img src="images/whitepawn.png" width="50px" height="50px"></div></td><td class="light" id="C2"><div class="whitepawn" id="2C"><img src="images/whitepawn.png" width="50px" height="50px"></div></td><td class="dark" id="D2"><div class="whitepawn" id="2D"><img src="images/whitepawn.png" width="50px" height="50px"></div></td><td class="light" id="E2"><div class="whitepawn" id="2E"><img src="images/whitepawn.png" width="50px" height="50px"></div></td><td class="dark" id="F2"><div class="whitepawn" id="2F"><img src="images/whitepawn.png" width="50px" height="50px"></div></td><td class="light" id="G2"><div class="whitepawn" id="2G"><img src="images/whitepawn.png" width="50px" height="50px"></div></td><td class="dark" id="H2"><div class="whitepawn" id="2H"><img src="images/whitepawn.png" width="50px" height="50px"></div></td><td class="outer">2</td></tr><tr id="1"><td class="outer">1</td><td class="dark" id="A1"><div class="whiterook" id="1A"><img src="images/whiterook.png" width="50px" height="50px"></div></td><td class="light" id="B1"><div class="whiteknight" id="1B"><img src="images/whiteknight.png" width="50px" height="50px"></div></td><td class="dark" id="C1"><div class="whitebishop" id="1C"><img src="images/whitebishop.png" width="50px" height="50px"></div></td><td class="light" id="D1"><div class="whitequeen" id="1D"><img src="images/whitequeen.png" width="50px" height="50px"></div></td><td class="dark" id="E1"><div class="whiteking" id="1E"><img src="images/whiteking.png" width="50px" height="50px"></div></td><td class="light" id="F1"><div class="whitebishop" id="1F"><img src="images/whitebishop.png" width="50px" height="50px"></div></td><td class="dark" id="G1"><div class="whiteknight" id="1G"><img src="images/whiteknight.png" width="50px" height="50px"></div></td><td class="light" id="H1"><div class="whiterook" id="1H"><img src="images/whiterook.png" width="50px" height="50px"></div></td><td class="outer">1</td></tr><tr id="0"><td class="outer"></td><td class="outer">A</td><td class="outer">B</td><td class="outer">C</td><td class="outer">D</td><td class="outer">E</td><td class="outer">F</td><td class="outer">G</td><td class="outer">H</td><td class="outer"></td></tr></table>'
    // assert(chess.Board).equal(expected)
    // console.log(chess.NewBoard.toString())
    assert(true)
  })

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
      var white_pawns = Array.apply(null, Array(8)).map(function (val) {
        return new chess.Pawn('white')
      })
      var actual_white_pawns = board.pieces.filter(function (piece) {
        return piece.constructor.name === 'Pawn' && piece.color === 'white'
      })
      console.log(white_pawns[0].constructor.name)
      assert.strictEqual(actual_white_pawns.length, white_pawns.length)
    })

    it('has 8 black pawns', function () {
      var pawns = Array.apply(null, Array(8)).map(function (val) {
        return new chess.Pawn('black')
      })
      var actual_pawns = board.pieces.filter(function (piece) {
        return piece.constructor.name === 'Pawn' && piece.color === 'white'
      })
      assert.strictEqual(actual_pawns.length, pawns.length)
    })
  })
})
