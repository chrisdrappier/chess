import { assert } from 'chai'

const FilterByType = (board, type) => {
  return board.pieces.filter((piece) => {
    return piece.constructor.name === type
  })
}

const AssertPieceCount = (board, count, type) => {
  var pieces = FilterByType(board, type)
  assert.strictEqual(pieces.length, count)
}

export { FilterByType, AssertPieceCount }
