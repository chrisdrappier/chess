import React from 'react'
import { render } from 'enzyme'
import { expect } from 'chai'
import { describe, it } from 'mocha'

import { readFileSync } from 'fs'

import ReactBoard from '../../src/react/board'
import { Chess } from '../../src/chess'

const GetHTML = (fileName) => {
  return readFileSync(`./test/react/fixtures/${fileName}.html`, 'utf-8').slice(0, -1)
}

const RendersBoardLike = (board, fileName) => {
  it(`renders board like ${fileName}`, () => {
    expect(board.toString()).to.equal(GetHTML(fileName))
  })
}
describe('<ReactBoard />', () => {
  const board = render(<ReactBoard chess={new Chess()} />)
  describe('starting position', () => {
    RendersBoardLike(board, 'starting_board')
  })
})
